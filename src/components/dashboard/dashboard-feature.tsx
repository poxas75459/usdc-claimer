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
    "44Y7W2kxSaa8mTQRPtmBCBrwPCNh4BKSj2uhtHSuJmQc9MbRWtVec7M5Mxx2Y29Yf3aCgaJhDFGMbd6eRHhsqJhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x9sExzGsGssErmzGdDPYJG9m7Apj76GZetLkoziCn6epppqqGC2LTvUM7jjXzsSUQA3Kh5nxnZSR45Lf7sXQYWH",
  "key1": "3tPfSMYYE3Xm8gU8FBzEonJ1KVzn3U4rjJQDSTwkTB8Rsk4xiJywkGmizZh1rQDRmZi2V4XMLFjR7jg1zRBxxxhG",
  "key2": "3pw5RxgJZ55aq2CjjbJ6sxM7JSHbGkXkjC1LgEqgSrVmX8iGhzjRB5nW2BfEQLjuvUv1fFZqS6nkXYDX1NTLgDo3",
  "key3": "5wztjRoyL3KSQTzrKY5mJxJcXkBZv6yQYp33urGHyumqGtVbk5DnwgaphqNHZNFFvhLXThdtR18cL2CB4repWbaH",
  "key4": "5pP1SzizDRdB7TeYANnNEbDLDEi5SPB8o5L6iwSYsz9bDrhTqKepJjq97bXAcapxA5F6AmDaWTHDgHRRPkeLskC3",
  "key5": "5kByFQ7cb3uiUkcwZ4XqiMgPJjYJfoamV8cymKsxNvWQBax6tS29zioPUPvs8Cjii3K5ktCs1APXk6SnuBw9W38V",
  "key6": "4iFQQcrytvCWrKnhkzpWrApdsYznyRqVpm7YaZWx6FEjTPHFWjqJNA4Qs8uTaFFFazWf8VTD8KqzP1GwVK1FSRaZ",
  "key7": "2USxuYpJLq5NunjrbadEZYUAJe5W1qTSSwj4uxRxYdgjEPh4xygzuodbHnwgByYDAEHjQEiwy2q1EXtxvGQ7Z6VP",
  "key8": "4q5wrMsBURF5zoR3SRQhJCUZH1y9MXrUmt6hBB6G5BmtHkWSenGZ9YB66age1Fx73ZabXccv6evLb9P6VmNpBva2",
  "key9": "3iRHAnUX3PfTSrEyaBB47koy3bgHoSRHboG2Fp5i2tdhBZ7S5gYK8zw5zDPgx9hVV1RFP5c2jiEoh9Z4fDawuA9X",
  "key10": "2Rs2yHS3VKwWNezjKrVzStXcK3xDwUr7F6ww5pkcbPrg82HK9QorauYzrfRHjp3mzniQwfhsmRtZhRAwKME8gNa3",
  "key11": "3CFjAwFVFX44fr6tcWq9Gj8Dyg7PcXdxsBSjnVkqyJbrjBJaswQgCTAXYHVGuMAEcHg9Y7HwQszywJCMBQHqb85d",
  "key12": "3RGtvddrHRwdyiavdq817EBDinU2KH8b5jm8qmuNvjBSc1tEdvHL2JmYYL7r3vKTC6yXQzrpL5hehhjXqXaifeo3",
  "key13": "4RTkENBhebsDFeUdncBSSNGBoa44RHT4tjb8wp6gf7jWVLXZjCYfUNV9JbK2dc2u77FdxgVVYt7QLFbYzBi22jW7",
  "key14": "oZDNKhMvE6Gs4EUsRmDMf3tty6tgFH3deSRPBJaDNeGzCvDDUQmyhpK8YwpJ3bFaEhyJsbKssqzshPxUxbdxiwD",
  "key15": "4fYGJKVw3fAg247x7YHLF7boMBcey4uJqc3dUei4nomrw57ZJNQWCcpVpmxzYXHBiRXnovE16UsWeudFjQjk3JXn",
  "key16": "48TVqGGdtWrP7RRfKyk6ZabMXZ5i5BYNCGXvHMYjuKUeVqkE2jcJR51F2PCdoTBfiTnFsscan8QJvCsSAZSWEuym",
  "key17": "2F2ngnqVGyrGdUd2dXBgvHFTyd8xMibyUGfGECE374HoY8vdpdFawu7iGvCU4Yb44edpyVTwj8LgoWjqqwMCngQ3",
  "key18": "3hF7XopoLZz8PxxwgsQ7k43DDpqDuzkC2Q6CUTFNAkA3CSDpfKjXzuK8qd4G7DjM6MPfLXib9MNVh7YLooE2XNCd",
  "key19": "2QeppVfhANwVYNaPMFfod7ZRTURzHS4LWbgm2bLH6GYh3c46o549Zig78dGCeir5Q3bxFnmJXa9UYa15PfLmzeTM",
  "key20": "KUT4RwmWKxqfVABwjLorn7mhCUrDJmfboKXD6gy62D5Jx3GzrXoGuAAsZzj2tJzKgVum6hqQguLiGdUEH2wZshD",
  "key21": "48tB3gYRVnmy9w59frrZ3Uq9Tfsu2uBWojA14Eedni6osCVNPZoFkMLAYTeUjknCUYpo1fTPJF1BY3DwmYGAAJnX",
  "key22": "2Pvnp35qFKDdmUVL13M2TkgDEKimcYaiMoLSxz9s9mjQiMAbvxcUMpSpGVRNkVHoLnwxHx4WyMWEET4bZdZzKpon",
  "key23": "4Fs72CyByU9oP8HwqXc2C11ESUo7NwiHXhgtqPnhAL7ZQMbuvVK5cwugSSSEm1iXgnxMoSopvkhda6xvWvXDFZMe",
  "key24": "21BUczuC9bF3Af6jY4KMV6gQLN9NsFLdyEruLapbkEK8qr5DMMA8c8CTz9fGEZsqZaWxUU88jLN9vfY8WPWxJ4eN",
  "key25": "5ATGD2C5qpcSfZFaDXhBRF4W5wJiUjMM6TbSVs27TTenXk4homkqj5E5CQyPFvVUXUUFb4U6rbg7An6NtC6RJpbQ",
  "key26": "39HvJ5j4aLohQxKJnHj4hzZjS5RNGvy7oKz8D9CKq8cdywQwhyjnCwWEU9mgFmEhx3LnuT4G9yy6w5y3oCrXpVnq"
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
