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
    "3PoUdPn2YdWAxfED6Ux8DtGZMD5q8iUGVUM652gDkp41hvGVgjPwe4fzPf9MSgr4h6s3cuQVVxHdmv21hzqjjtrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QAYYTJGtwP8mhRhcanvdEVedfvhs9YzSrEMEBo7e2vic3K4YfwfvRXDcuYHU3Nb5BgeGbXPzegK7NaqFaHM8aL",
  "key1": "2KE4SWcDXeoGLwdGTuA7PQHWQ81Sg5kc9pCHSYWZLeJhoyMEJfX3JpU7BddwnJxWxoMhvzP7kCNeeLGYshbtpxN4",
  "key2": "2q4epwh5eHgLgSG5EyCK72vEAofedp71R1c51QNBqm9kTjoG2xxTtj9CqbBSPnKgDJMdHXbUV9qht1kdgFjbXPSE",
  "key3": "4dn2g6qyGDxe7ZAtkpat7eQQSNgUVsDLgxJWRgkv8gdN4BQJQPiRKoU3gWvkViyC4qkBkg4tDqs6prCoDoso59eH",
  "key4": "4wefwRG68DwgLR8Ds4K5zRPcn8gh43LeYvj8Yv7g4tsygjwRLEdAbaHU5QfmEeMz6V2YomFmrKUqF2KWxHCQ3xCo",
  "key5": "661i2xzapDuqFs4Mc1NrxYYJFoRBko7pj2Zs9vJh7wGED26Cd9bMG5iCDpLw4wNQHNrE2FQiXahwrgtuq7Q53Kz7",
  "key6": "343mrZRd8N1pNQUr8BecXcZ75kKibFBqzBoCJwXw5oLU96a5YVmSx42JMmV95F5Vxb9H3ULCaxRkofm33TMGAXCT",
  "key7": "Xo9n4LAkgLj53TbDVJ6EZKn7yiaz9dZv9EYimeNZpZrezPXfG3KfgJBnKe2SJiPPUF45Gg5Lz8veKq82y1DX8Pc",
  "key8": "5UZ4nRA9Gyvv4yCNhvf3sSqTEQuptkwuAnTcJVmCExkUPa15KK4J9jKxhsVZ2nxQQMwwohCXULC5xhbsif3NikCg",
  "key9": "5cT47am8wtTXMmoe3t4FXGesgx8noQtnuiEGs3bVrN2FEN4tV2shPggQn6WQ5MLfbyUNGRRhmANvPqpAfsvGanv7",
  "key10": "2R9avbHJX7ub6JTvAcidg9LW6svxousbUEELF1ujXYm1iBFyNqWyijig768XsvDRrJvgdNcfYC58ZuSvJ7kdwAhR",
  "key11": "33btSq9C71P6Wjkm9BLgS2hbp1uN8dWua6Rb6Rx3vHV5uYgqqhNWK4jy7RWNhNGFSQr4GpjRit8t5JqnxNakUaUk",
  "key12": "5GEp9rbuGyLtcqSV5Lok3itVrEvgkNf1TpQYQ1JkUESzWUevV95y5iwKLbaVGUGVRBtqSLUdoz4q6VB5DNsLEv7s",
  "key13": "UQRqLYEHiWkKfphu84mLcGCrvQ2mmpATcYytjhVTp6X2BX4VF1C52bhBiVjL49z5fLh11E7SoNar65cnvTxvLgH",
  "key14": "3KCakoxRWiZN97QxvisR52V7drA2pXjAiBwLbYMPvJwCkAKds9VVyaQZqETD52d5W3d2wHL9F4exMthEChedxifP",
  "key15": "4XjLFEfDMFJTLor2G9WN6w6J5FrBvEycJG93xzbcuYw2gN96dkM7HB7vwMWfyyo3efKGKo9smf3gZioRbXtCt8ij",
  "key16": "4fJZAQZJGHeujvbjJqsC51vmBXYhAutEQfWzuukr9hW4WBBrXaFoWNJHi6ERt9PJKMPwjutN1j3Qo9jDzUEyek4C",
  "key17": "3ettRqtH98XvS4ct2fRhsfGJQBqBny133iwjbWspoXr5fPA4VinkMyy7UnoWVTV7bJoVPiwivLL5YfUyJynaPJMk",
  "key18": "4i1XqPrEQdi9qw7F4WodB4teozXFJkc67RzMMvamXsgY8gnnqmNjnts6SfUZJLNK4SfKoAkZdPtrJ7DCS8HeGdK9",
  "key19": "4VhjSaVQ8RSnDCX22J3HHb7htn4oX6dwaTCnhXuiW483wa1yCw41t3bpJsQ2gQa8iaWPcmViQ1NzYQ3TvXAydpF",
  "key20": "26Mi4kJEYikj9os2Uiq3tZ2g6VGRCn2EVvzzYm1Zw59LVPKoPqKVr7K5Qg2KKCCBEHG3gbxdLXXtV1iTqat8BGcu",
  "key21": "4ReARRGyaMUCj28mDFGTt3k2sLtPHBjirhckoLHn81r9VSf6meukGt4yPqQiNzPsDzXoskzm6LejEWfBc5ipvf2d",
  "key22": "2rVaKzhF1hAE7wujPzeRAH6GT6YKZLmxbHirLA48DpgU7BvSmQFiEzgtCCQW9LdYAGSKay7vW1yiA92kG31ar4WN",
  "key23": "3XZPEX2tBJBFtnh6bx9Qxf5NisPjSye9rH7cZ5h2TuB9QCz5QpmVrDxpik43CV2xLhimvmoPr9Kh6AJ6LsFHTRmR",
  "key24": "4GxeWgL7ogi4Zb4ZPBuABGWNwZnFiTJbEfKPvQE5L6mVxMpYBJrcY8pCjWrpjDYkWXn1vm414WuoHL9rySxV5xVp",
  "key25": "2Qm3JkaYyRD5i89FhHmiDitDrZdu3txq13BRfHjHUpq2XeT9RYEQqUZx2HPkYCoz2Jr8meCGDQ7xRFbh8XhQrExG",
  "key26": "375aEYz5JgvDD7gVkeSmoEP1YeY6Jtv3hsnDguDkt5AaEKeHwpJGfYohqmsbtgeHw9x7wgSQeinXpfji1iNatuUT",
  "key27": "5fSq7FB9n9zUsgQD1zEvtPKi18XsL8TnSQtAnG6fcQJfARekknSDVmoXWKT7Ydv9DpQRCjus8P8uxv3VPQdWhddD"
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
