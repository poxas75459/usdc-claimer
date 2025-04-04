/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2BVVLK4Hob9WGvFkVkY2CJZiLzZzrfQBFmjJqHAJbenkjbEnjQJ6Zhu5E7XV3jQAJdwdXmezxPdJdEF4AnF6E5xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R5q1QcJhQy3Vsb4h5SYS76aHijh43s9SzzHSZUvLY9J7wHBhCmN6zYfPPUvjKdAtuQMHDJihReWJXcHLcEauk2C",
  "key1": "4kuAJTEKbwFD8tfziA4ZXsQxGAhWnTbpYm9rURxTJJRmpRGBbqSrFBk6JeE3RfV9CgrhV1GmD3jQb7ERuaYJhp7k",
  "key2": "XskkzxueGvwEN5Si6y5rK7mwj1jh8d6NHrMukD6QCTez6FonfVYER4EQVwwM5ggudN2QJACLriEbmz61kyikQTv",
  "key3": "4XAkYYRsGAxnb6Dm5pwK4FfQ3Cj1HR7Am6dF9pqbnF821CwgnTLTp8TZSopyeTC79hwQCcFMPWuhpRLhr3TMQ9Xv",
  "key4": "3cD1GtSUkpiSmEtgybYTyJWxatXGuB35KpfJ687zYyVtbHttZky6m5VrHK75grsURZvanSXhX6Tp5dYcyj3HUdu",
  "key5": "4Ttf4NzPzk96bM5JNvAPBGCJLr47AutYioGnhSFxUUNYEQLvHKVysfEbqsoMednfXdWQ7HFHNcpSHydoZj5RDJLt",
  "key6": "5k7Tengc6o94mUNqvc2gVJGniD7WN3JfAAnTgNHHoZHGeVUuLDk1ZMzMHXQoQQoHQZswiKw9TJLQUXhvrkH1K4Z3",
  "key7": "3mUZqN52qUTpGEFU9pEFvMns9qnD3JKhL9PrGujn22n3SX7v79rZxbJWa7fvEWdtk1HEJGiSpkrRpDUd7zRPz84r",
  "key8": "5eMFBfrH1WiG5qYJv92TTKXey6jtsVuDEby1atQQoULfGvjxPnKkGpcUcZqSvv2yqQqnQbKgtsgECxDwUFirKUc6",
  "key9": "4Nuc9cwQye9mEfCfKVYa1NzjToNC4NC6kzt1Tw2bGpzKTQWRK6S3SKkPwmrVwwxTZm5oTYyKD9WArMCZ1BzARH3Y",
  "key10": "MrMugXgoWwLzPN7cBRvbeX6gCwV6paM1MSWmNfnsuDafwb3Bas6SVy4Wi6BejjSojDApDEa2H9bQiENdzkCQUuU",
  "key11": "4gdaCHhZwW7F6aBPtcLjeeGBnREatqqEDCuDs9XLanHjgwZUFfphUDVbEF6qX9KySQ7wDZDjP3QtsTDnRScuLV7n",
  "key12": "4d5UyrdLZhmcn9YAZqcXNnXrvRRFMBCf5fXEuJtC3SKzu2sivD52bhu6bd8mTvwDAeTEzgvCgbKiMAyy8ZqRCYw3",
  "key13": "2nGbaYxsKvEv4fpW57pGVD7qXqPqbdJyKr7Zy7zn23SxjYwQgKc8qkuN1y2Wkj9PHfnBT3uRkMz6tawBQmNXyenj",
  "key14": "35MrnL3MstF1139qB3j6t3PaGAde3WJTzeo3vRz2thZAxZD2zYRwPcxN4E4bqqge1JBaqnT3JF32ZaYZSVwvSWbQ",
  "key15": "5jnfS5mZijqYyvZPvNcfVzyw78H4gfFBvN5qSZD6zCCSksjymycAFZ8MXCKQawLS19XbNNqjdZSeMVeRLuTnYrtM",
  "key16": "oCPgPpuCVzUzrqqdJk8ePhnUr4KkX64PVHNNqZi4NXGFyUzt2ZmxtxqucMWtePdZA8xW37ssZwSVrhUUpqJdpiz",
  "key17": "62Qj23CiAbTuLKeahyfnSTLy5w35geAJTZN4HsaA9DEdD6atr8WTdoDTYoFeLToTRujec68No8ZYwku64S9xtbQa",
  "key18": "42cZC7XRbfEvDrKFffbvHkTn4vKELTA83mEZQeHKLRBjSfAaraCqpgBAa62mxUtCftZzfWTn4UCTVDTVkBdfVpi7",
  "key19": "4DMRZHFV6kkzSe9F6SuyNHYPk66sJwWmSA2G6Mcr5pdTqDkZpcvoCgH2w71FkiVtpGZcvGcKAR5wHgba7ja4roBg",
  "key20": "32Mqu33coqEPhJ5P5GiizakcAXkdunNpcPhUQNXdwNTPnVqFgL55GBvmQ1NERiEoKXVUEyE9o3tLNULubtdSFS8B",
  "key21": "cis9hpsDdcSEKu4vSFGBt6Vc9VxdSsrc4yNdqvpsNwDrEoW43U3HQyT7HVSFpmCnMugEwHB59Edzk1fUCiJpTDj",
  "key22": "khUHNHDzjxsjLJRhKjTyarpxaA4raNHjzF7co5QAr8HmSp5beqsusZ8KStwtuPVjncZNWiTvgbSmBaDMZNuaLer",
  "key23": "4CdCDQnqu6oziba2rNWhZeui8XQiJKB7SKm6UP8r3RddxPAYtaazPY8SkmpD3eijAq9SnUyADAxKNvnog4cL8t2P",
  "key24": "5V7ELL6Ay8pHpmk3nGeKYBF2P9ufe9HKbQrNLnFkPau7YGM1wcbNsj919eKPA3AfZTxQJcatvd9MC3KH7myTqFt2",
  "key25": "2Fzc1eGQaPNWf6V5cVmEUYkYvuMLmzS19NqGdBVEh3tD8ghKeJeCVDLvqN7Hwb16cTFcvfSMriTmW2mXyj4N1fUU",
  "key26": "23PmCn5NgWrerRcKia8wg2Z9brUcwkLa5yTfbcfssYUbdrJsHXyw2ZL2U3MZwSzJbyMSW2iuTd7XgamoXdcLdSEW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
