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
    "439hgfSVtkZsmYiPha4nkH8Q5vRUxeBehwYxEXbvjTaQahvhvUuxvENMqNjGYKFhVfJaQCBgymmSEf7AQUF5jZ5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3guUNj9sdj4CuxX37nu8ApWRPByAeLvNMpnH871LGcBnGZ2MwaWSwPj8Z8pBxpMVjzQ6nyB2CPyogkU2KwLAUeM",
  "key1": "2jRBEstWz59Ez4G9f9EjYaekcoLQiqRBPZqBPksRPp4CCKt5KULdm5Bause8bN3PbWEPaeWWNdyPHQVau38PcD6c",
  "key2": "2QZdVmxFWkYPEkaSgAgtwi9FijasFFHTG4XxkWXBHjdtYSSC8iAAAe5jp8BE3yp31HVEgnRon53ZHKiCyu2We87j",
  "key3": "4o1viu4ZniYbXBHatTokBRFKF1qdqQA8cACHFGyweYjBqe2VLcPkJXdzxoKKkJgdYkCsJNZZMYi2acHXC1opx4Ku",
  "key4": "3ZpbrrkwVzJ3BGfCSnPgNNdrJJe4YESeu16VvDiirUrthhz6CyVCmH9fooRXXbYD1Soz8v7dhzCNNpjYVBDEL65a",
  "key5": "54ZX85QZHZdTQ4nKck8H2B44LS8Ps8N7CA2W9ExL5qwJsmcMT41adjFaZ9Uh8YxvKMs9rN9pUxXXNDE3n2M1kUxc",
  "key6": "5cmynwPruxWi7Hj2hiFunWh11cKEZjHJEzPMXVv1dVPczryPHQdFHTeGkqp8NCVkVEPEsRF5fZGYkVe7vBU5k7JJ",
  "key7": "5tuhC4x33abQzMmMoqxzstW4gYEGnbHKCYNgJSGWe6s8u3ZpiymUS2vpiQr9wC6CoVwfeuAYNbpEZXK9BiJrg9sa",
  "key8": "4kBqgqTHzhVxWExnZKBsXmDmqt16mrtVb5b18W2aqCVwtqeFBFawaFHq4Nk1MvMb5uhDcBiqP4Ya7q1bRzo35DNG",
  "key9": "3oKUJKsd1Wez9k8DiY5P854ZeVvpX28SDfv3ARQF83fzs9stNzFfhgWFs5Y6ndeFuMZMK4X2gukyHzjagpoAf51N",
  "key10": "5RcXDT21p7MpNRqoDhTS3DLQvHbqGTseVi6qcLUfLeEj2Q3TWwxwaFJDcijU8iByhZRqtYSG2T6HmNBfbjqxXXyR",
  "key11": "63qKGkMJo3UqxyBhSJkajLjqeqVh75pUH2xjAcUNAy24Lirf1yauAEFh36KMMDJLNvQLq9JpbdKSXsW66ZroqCQM",
  "key12": "5F35A7wAfhvQrrrnza1C8BfKSbwyA71FAAfkuESPcTMtQuTsApbHBbnRnNxBg4HxNUsBkufiJ6tb4fRUVdE8R8Zn",
  "key13": "5AXAufR5mfUhY2yU3owStFNgmeFgXpmhbpV4mnV1dn8BTW7ML3Xa14egCWt8f2C2KLgL2uj7mso8RRtZhsNTcWBm",
  "key14": "xUX6EuDyCo45ckQT22nDfFDcMEyDx6dtkRg693o7xsxJKjWa3yFGoaVaXD8VLngpiU5LZS7vERwV1znUCXwJoFT",
  "key15": "m7GF9wfgWPvrbtRuwnR9CPMGoNpjNNv5xkHb4ApijBRK9sErGubiHiVcPchfNBNbHibwh2QPBGHfwVJBxYoUu3d",
  "key16": "38yzZSN93ExRCgDjEtrF1kXTYY36jZLDeumhfMPZCLa3GhMRkFwXZr6F1vit6UFfxANaYuhtsiG2EPhALE1qnRFD",
  "key17": "5zjzfAXfT43ssk3GWGBGVSjS8nWQbhGG2ZNjhD8yWWjfGkYjRdg7A2yroWRsLNHRTcAciiGg79UXw8jZ34DAu3xs",
  "key18": "2YVS3bu1BSxESs8xJRdKgVVeNTogMw2NmnhZD3bapq8UAXcWvpZu8f8bUN3FtH3y8FVyRrNjRAe7uPmLUhN4SWJT",
  "key19": "2rFZA2vNkZvdGW8raxZU89nnmfmvM3sG8kUFFGA5a1oCBGh4zcQg81brYtTDoHiDKvhAWe3uix5DYAjE6mQ9ev7s",
  "key20": "2pWVGJ8Q6pZsx1jtAnJx2qDthkCTS4nvyGsFJUHQT4Cy9VLnsYafKHbF23734MX7BF4ASQg8xQvz328KtimZBbzf",
  "key21": "3DPrgMzyvWbsjUgUBFbvFkUPEkK5zB9gbcqPcgB6ESsBD96QWXMAdiWxhYRr6oMyBkqh3gJn6rLpD1MuRzma1uYH",
  "key22": "5TMcA3yeMjGLHWCGCtVe5aiPQ3YCvsSG24fBCUFeeFFwFT8RhoXZ1sEiTUko7duh2v4DFgETbcTBk9fFY7mgcRNc",
  "key23": "Y46vtr68nzDmFBFEHdjwbgJtBZS3xXuasx7VotFA86esjgcKo4EAM3DxHTaGLZiJcHxqoegbGhzQWiJfANkku1f",
  "key24": "2yaZ7pVZRHjiorEt8w74H9QG2ZgPSpArnHCEwCEzr49PEBkJVHUZNoAVDaJpQ8QkehN3wBD1CmjsDrKb2FsVJsrE"
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
