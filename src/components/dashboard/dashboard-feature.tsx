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
    "2r8gUNFPr37aRCP87hCWwdqZeUGbiyVbh68PDB8PtJmkX37oXmysgbmd8tLfkgdCQRkNTg5SBRrfYD5ebGxZNvQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2StEioWiDf77PfN5Qw4oeZYr2GEdp3FZxYyo8ceZPo93Yu2BpqfuLiQtKt4NRburWkAoQ6M2M4AarSdeNFYGRj77",
  "key1": "49xao9S3WspBkA5xukPDLqANoynVeEGNJsdjzjfTJ5xwWx4RGjUchg4WSTYsyQhJQx1YHViYBYh5r8ZBXrn1Qc3c",
  "key2": "61heXaBAsNukHegnBtkJr5NGGE4s844Kvgenn3R344V5bwCv26Quq8URZLsbs1jtSoW2wvptsXfrvZM8CsuH2P7D",
  "key3": "5TGB5c6d7DHmD3yNBME9VFcwk6GsLALcXPDwb8qGaG6w8inUVcj2a3GUj59NMaiCy9QksN6LSZkcyAgAHU1U7ceP",
  "key4": "8tV8VpBVdhdBSSL1hau5BhzhaeCrwdmnjfVomzytM1C9s5L3BgFTfYqVqdhedV7QD3iS7KWnVSaHtyrG5L3LUk6",
  "key5": "PicSzLedP5kdbH7iuKfq22RPiwugjSDWCoNUByD7w5Rxt3P5fmcYpfHYmXJXT1UXwogDQYUzzohKt8nLxAyE3XJ",
  "key6": "3igVbPY8HeX4i1d2RR82qU2qRvpXDYizvoQZLjuT3X2VgDi4wgW7mxpk8seqhAU4fKd5XnYVGd33xaoP36G143hA",
  "key7": "2xpgM8gPcfqnYbpYp3PfQXR846G5i9cMBJ5z7CZFR9jticc2817jqdsbGsW2bVqYc2QrReLJtgG99zokHcatUcX1",
  "key8": "2Dg8b1mjd5qhvwM7UHFutFxCT3NfHduaodBFeLjH5NtHknJidpfTNy6SJRKRARjXQWSNuooeGZJgcPmzB1y2qP7v",
  "key9": "3UzDY9yiFbzimCbE8d7gCdLRAMQTiLz3gaERDXYsfir7pVQ4qDD4gjX3JECV9bAC2K6VCWsHfdxjJjWWkWGJSD3j",
  "key10": "4jhSaGtnmNhRMfGu42iR37VA5rsWzc1jsqgtuRf5iyXPsJGbsmxsqfE7wjtBpGA1WaQpHgJz4XjqZobkc4YbVqeR",
  "key11": "jR1bPQtgVbeM2y5558tiJ6xArC4kaZseR3KE63T1HWPYh2FKhME4UjAQ6fbE59jHVEVQwBWjjAGLMChB2dCeNbn",
  "key12": "3JsN14VccX89JQukdgMciBRqNd3jkxCmL7XvXbtyJxMyqYPxNspgGpU1FWMopE6HF9eQ4g9MU3eXUNE31eNjEt8m",
  "key13": "2N1wJAtdRbKsH9L5LkG5kRRPrVtmpmGHnwCso6WQQBhkPeC7XBBLG2nhfwZCgGYDTwiXxogNggGGKhYfMH6jPi6w",
  "key14": "5HoUDGJEdjGKnvZRM3s4p9qKeoGbKcKwYqw6w7h17QrQ41LCKenq1XCypayn58VqHYkKi5a9icXXkZnBKF4gYHMg",
  "key15": "runvffq9s4KcR3EZTYgNEFi9KN2rnm36R8jkoYZsPMa7sgj9mCzyJmQXWEdXAYwqMhSPqQfwiiY25m2B4Nc4VWb",
  "key16": "2wJJ9LyBfcHyLz2MP1BAjTebnGhrfpG3f9jH4gDaN1VHr4TsQiM4Z6wqrhKaSBQyw3nwdsnHTv1ni7fHV88q1jFt",
  "key17": "5vEfsYbfJjnwZwYTmE6vyfGQN1JgQS26T49n6KvotrrWoXQgG4UYfMfR4LT4uWRUtPXxah1NUbdT2cyiHxMeQ74j",
  "key18": "3rGVucLjaYneWhRDwcC1fhvaXouwh2Ut5AkdcG8oNZdzgxZ5aEsB2eX5yts437fNLnPigtirM541mLmvgsYECoeq",
  "key19": "4ZjwF1qRwFzaW2EkBBs4QrPhsn7MVJiZsx6Qwy7Cp9XeSa3F6eGVXi31ZGwqZX9isBpGHeBKkK3cKaM4btvmz1yg",
  "key20": "3D2qN6dwH3GPad1VSt61mkzQRmZooZoz16CNeyF5GbeepbEdy6zkHizCCsWqThFH6thv3k2Z7vW19nVtLSuqk5UC",
  "key21": "2TNtspzrgX95sDn1RRzK7kLapwpeKxvprQK4euxnssqYCSCzFJDUTESXxtEZS87jWzdxeU8dRyvRreohUa2ZHkBQ",
  "key22": "5Ncu2BQgKmkVQHcYLNed6KTd1u8aHdM9zwePWV1AoL7CFHbDMLPqPGkNcWNR2GyuafyvV1fc3CytVByFSJ7RwQ5M",
  "key23": "4UHPTgyg1xCfcmDn7tauWsEqTcUowLLbxpXMicXfHx7DXCshL9wKDN94uRsyeePPXdxmh724j25ggyYaiugq6RWU",
  "key24": "p3h4yb6BcWkEfyHXSWTy1KGnkdeKFWyruURmLc7BYtKs1RAzrkhhMLuxFE8vxSAeMpFrs9B6sknkH9wWpKqM7rX",
  "key25": "56WahA62b7NBSviaTVsjzRuH61bmuQChoqb8AQpoBzkodriPTNvj2XHtv4FC9gHcAauCbfksb2rBn7RoSkYLHppz"
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
