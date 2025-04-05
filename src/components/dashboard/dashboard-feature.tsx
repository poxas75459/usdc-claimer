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
    "5uNmdy4mAVYkPY14Yns42nsyTdJjYbmZKbFjXk64XoSAJSobgpy8NhSvN4YKWFFNbhNcQRs247MTyM91h5dZVAnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wmJkLx4zCAVwX6e5pMKobWrbGqHxuTt1kCqTR34JQ4pf1qsceq6mT7Bk9bECZLtT8oZH6dqWFkM5iXzPYy4V2f",
  "key1": "2PvEprH275QrrxmwWHsEUCJn6RGEAQJJ3viQzn8YXbzvZFBP7PETBtxSNd4p6CRxbzDs6A4LauuVuuwTwaj91P8r",
  "key2": "B5nbTRkpXnDYtQvMRksFQXJfC6Dn5yC9Ge1V1mokgPw6cLV8wHY1mifUqa8yxAiMEjhmy99F7HBEhoEaLEWUed6",
  "key3": "5UU8DdkhGFY4TQWxwk3AHmHmQGdmfgiaAvQDHP2WXZCYcyqoJ3XgmBoHQKftscg3JoP6LwBGZra5hYPA6mMjip7C",
  "key4": "5dU1XfXDUEWeq1ryKMuqe2FZdWFfQGMzDUZHFfGe9CV6J6oKNaeYWdhKQNuEW9KH1TErptE7LjFxvDQP2YPVAdVK",
  "key5": "4wR1B5T8YiFrr7QZ51zDePBy3AboRRmKWPPq8SsQW2CpWEMYcrnirKowUAYUAXKRWtB2MBYgmHDARqiX31S4K29r",
  "key6": "ATuJ7GHAYgsg7vt9qKnR5rwMxASwLDqEadMwbazZ29jdKSFkAXzMjZB5TDp6WG3rQeEBNFu2JQ3jsaKFgEAb5rA",
  "key7": "48ZuJvmNqBkXskr3ajgKj9GGGmNPQYvHSWz69dnXLcYVzGzTX3HivjQJnoRgyEdavdbz8twvwXW2VaeGDt47i9AG",
  "key8": "2t3jyhgdrRCpqt3fVsK6xdfAPxo3tpRf5CwuyNqrB7GMWxAxMJcztX3mcKk4vVy4KsQnubzutSPbSBzSnKLK5sZU",
  "key9": "ooAsi8cDNdpWen1Vre4JWG55e6AcsTEpEchgkymKDAU8tqrHVxW4pLXLboLcmZXFYPm2psVib588pCxWJa1Vo5G",
  "key10": "2xY1eYKdtgYKi2JD8pyEdCUBjb6NceT9bRaTaE7FsitdxiA3qLScvQStFDHrhztf6tNiN2EyyGvCJ3MtGVQ53jTS",
  "key11": "5dzNNZRHBQ4mawgvfjT1GvazG4aCZ6cZKVzpuuEpNgpbwcttNhdkApuouJHhdYVJF2HLyRtdALC6wAG1TmHwNtuq",
  "key12": "34qmp76XBMfcQ71JFeQmkgBxCPGjSYX7zFpbdkZAmEAi1jZQ2xwH1PswgRnByEWmBJ14Q2CjwffTRgu7LninFR1v",
  "key13": "5tBEpP4DJYBmTKP2UFcHasXbkk2JRzMCDTMbwKz2H9nF3VpcvmQiAXkMed55XH1yTz5vZxfwK3JyPwhB47fUBX4C",
  "key14": "4wC1iQrsWvDnrYTo8j2pjN2cjkPoMXXka7CM4u1sfJLMgxAZ1pZcAp8MBy79dx5SLyYoV8PTgZus6dBt8g2PdZVK",
  "key15": "3ec47AHMXKShRsKBTRRPyb34Zp5c7Xxfvo1L5xEfw8pfSyhqgdbzXy5hgrm6pe9eqgXgCLuiJuNBz4qJyJ2guAKM",
  "key16": "47NR6KJffUFE3P4ATr1Ny3UZAdGAe86oNc6ozuCcDJRCC51UUCTa56mZ9sUs2zdL3QU5NxHKBPQ1uDo3qm7mZ3Zf",
  "key17": "63GuKU6X9a2M9YN7eVeabshNXJ7FNHhs6v3WhJFabCTXFuUoNNKUsdhxBSrwejBsYUwBZYGKAXUz4sSR1sb8CBA2",
  "key18": "5eojYigam2BJMunHxsja2GBvdHHhpWyrbzVMHX1rScah2zi6cPq8a1d91HKMd5KnK4z41BruXQgHmT9Mh1zdtqo1",
  "key19": "5uxV5mHs1FoyGgP2ukTx489PgJouXCjbPQbWx2zLhvEqsnXL9fdAQtRxipGHiJVkatVwMYHVLdaSL7ssFoKKY8Fz",
  "key20": "5iYPseJ5M5t7gxpUKJeVtNxoU7ZiZG63LLhFdXegAvyyiTDs4vueszENTfeD4hdiimoKvFh6LnKfZbQUDmKWaanA",
  "key21": "42duQopYJLczC5TC38cGMwSPmh8ZCAE5zUkp5HzWaw1G7MywvrXANgT4NBTUwGkcWbi169akXQ3otWWP2kpZ9tjz",
  "key22": "3HSh4qoUcdnoREWvbYjguWDMZMwVKpQTiQhbhrZCSvFvxv7JUbmNAz6Tdpr2aKyw1eo9h8fjAweWnZRfAaXaZuyN",
  "key23": "3p4VNjizo9cZnrdBRociSzk1gPkFjdVHfqNe65mNGyudrL5Cqihjayaa2DRo4NgMNpWrFXQB215E51ZSbkd8LSPw",
  "key24": "3B6wGjvuxr4zW9v9xSHiCVpBKccUwKTFU2w8fortiosFvxNseozWLuTKk8TzapRKcPSop6cTuXE7kpcZdGz9UW62",
  "key25": "2WmvamU7dtHVmyGh3nL66mqiAhafFnAVippJs9NzE8TuB3EH5SFYwVJGxetCDZNdKPd1dctkMbU6TmN29FoXxj9W",
  "key26": "4wG5fvR3yDn2wbFPutiTD2J9odZQFXasa7XZ54QG9pkU5a3GYgt1bL2Cbv7WBWQpsHt7M5U7rEnxiHPNPqTibjVv",
  "key27": "3P7tCDMGkdCgD8MoYWssKYAJdsi4GGMdBeKR5MRJ7w2xdNAXJfbLtftDosv5JbM3iJX8oL1pHtZvbLowMyguqYGn",
  "key28": "4Vjss8cwFfj3bTig85vJADdYWTBAhk3Xxbtp3jqLMGs74sU5PVDobFEdEch2d5SWQZKy5MRKLEB3jSQxHzvThBoj",
  "key29": "2dvMkDqA69gG68yBPmz5AzkG9p6NAG2kEA4y2hfgvTxuARsyXVRNuGkPZ8gGfmxT8ihoCsYH1WbcnTt4C4X12V4f",
  "key30": "36YG5F4uUCYvhjajQGNVNMRowo5ikAEpTNDWyeqQaiqRUswf2QQXNyGHGxCjYAXaLPMjXDDYoYdrdbde9wRFgBd5",
  "key31": "2W7hHEoBrdkXEVa4ZCNN2UjcXc8XZ4srCjaWsCSwD63J1m7K6EHVatkuFCUYZo6boRUvNHMTCohEG5z8hrHbKSZc",
  "key32": "4MEk4rx5hTd6xuECQDziBPDPgGxUMcBnDgRmQdSRHLeR43ud3Un2D3wivjzCKKcePtavADFQRD6hpXDeMF2LJNNB",
  "key33": "3r7LMhQmZ23uFgdm6aztcPa7w37VU3booUFcBKsY92FqYohAJr3JnisAYSqrAkVFWRUohiRAHUfCwDC21CCNNb9X",
  "key34": "5eYC7qC3C9Z9gn9LEwq2GVW3rvi3BTcsxgtpNVq9sSR1cMUEaKmRvqwLj2q8Chj5xMc8X3ESLAC89nWhkQfetSUo",
  "key35": "hUzcW11NPZZ7JcuhRCBQZT7LT1JL1LdwtGP7T9HnghcWuQDhih6h9dQuHaj3UbPVzZ3JNiiysKi7Hrrk9GVxHRq",
  "key36": "352yBpVivZjyBuJUG3bvQX1xt7skry8kYwigysSMUv8rKhbnRgQv9pey7hDrZQyAfkmri6fKyjgqhG5QH6kwNJYB",
  "key37": "34bfmKRr3sdiVrXFMKWp2C6yGSYrb9734QESYmxUHTc85eLcph6f1zk8HSSVoVgjePw63XkuNAbM5ddV3jN1Lz7z",
  "key38": "4szUn12DqZnpsaQdKu6StfaAG42vBBe6A7XxLBguZ9KGDXNppS3K457XTCgPGEZuQGBc2Zv6hvBmknkdyq8ewyMA"
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
