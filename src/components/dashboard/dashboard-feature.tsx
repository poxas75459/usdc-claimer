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
    "5F4QGisYpBQ2gBf34JsACM2goR982WurJsaNYb6oBfWoGjXsmhfyohqtv11kP7tZe8sDcofSaU6zb3YP62h1aRuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcNGRuuXG1uiwQ6QwBTAqH9ZFkzer28XmZxapfxhNznvuEzZdn195hdXwGnLssd9cy8iW3EcyVqQvRGBjUzoW17",
  "key1": "4oy1LguUVe6yg9Xk7BPfFKY2RJAeuGxnLHymMxQqjr7N6DjBem44s9VuYAwfHLoZt7GWC1fVkfhP1XZ2WfKnnTAq",
  "key2": "3nu8qUUzurgTmQ227KiksXuXACpDTxFQ3dRz15xErDQch9QkwrVzKFqSR2CTGwWqWbsRDrsbT1BuXtWSUb4bEQQM",
  "key3": "62jzwVvzbZrekej3cuZwrLPDRFDHqRE5wnFEiQ3qZvLTjrJmV9e7AHGoHfqPQRUgKWUskxwyEXiAXsnFTKq2Lvi2",
  "key4": "2WKU9mbBP1fRskV1jEtkbWpL4DPRnzFGgWh48BSY1SToyzkAxspBZZFVqRStviUs3hDpQgfQV3EyS5t7aMVnCEN8",
  "key5": "Y5teVyZDKZxQNwsHS7eFjfUVK6KAorVnvB3TuarFSPTCXfiKkErdUWVocfzkDnEMd7UkTHxXUTN4iSBLdUXY9om",
  "key6": "66rcYpNFuofZQ1sXK4KhEp3Bq6MhEDxLKPsz74mq7TaHqe43JKbKpemmPysiNUb6zhrUYCrnSd3DNh8a4pQVy5Wa",
  "key7": "4yUe391Ap7PKz5BvFbddd55qRghrdRzRmvbmSFZUgujCmn3DspvZAHsi7zSY6WEjS4KJmo4h1RFo9GzEVvFKFehg",
  "key8": "hkJEJ4aEHbUDEEfrYv5XuGgE3a4Wrf3K8GMbX5bKG3wyKXjGneskiJR6Dko4RF6w4sov6RKkJ9mRCHGRUmpL49C",
  "key9": "2Zhn6d9eN6rSxNtUDSdRhCFtrsMPQbdnYSyeKQEEB6urB77pCZu2TBnUQW3j6BGEMi9DRFqzUxVwcCmwxS1cdrxk",
  "key10": "5cMX69n9AXeLJJZBZTPDZCd7yab3xN2646pLMDkGdtPHAtoUn6VVDiGA9PdNFpBVeg5hBBGt2CvNBbxffwGeLjte",
  "key11": "3xez3ipmDypMPbysD8xE5eS3oX7uAskxPx2NQBhzE3ciJCRRNRMPyyW3o3Hc4SXzbSgYiSWgKyRVujsZrqUyin7F",
  "key12": "3dKwb33h5DwhMWK6TpfgYetg1eoVP3mdiXJX3k2KGKw2RES8yM6oDYNfAbSed6aqRYEBkP2b8f4i9oxiBu8R5rum",
  "key13": "463FbFvMAzN8pCPL9pAZzCdrrfCrMxDvGfXzKu534F4mfjKR7VQUpX3iqMXUAME1zRUFqsuVkbyz6FkT11EVHjwz",
  "key14": "UVg4itrzo2jxdNRKYY4nHYzNg4Cd5V4f1W2sq32YMYxSMg8QYjiDojWFGYvw1mBoJaR2hSrcCxcEnrLiWeEATTQ",
  "key15": "3PD55FBb61t9xmtMdC5ZyWT7LWkiNrZbb4ZReZcAGNkQ1UgnAvWe8oUb9UV6mbfopkWS7KdDjPiemQtsZKeJo8eU",
  "key16": "5bBvka8AMnQrsb3iaprUqMM2H2s3a7K6tS4irXZiCTAZTYexEnbk4dYo1oZHBWDu1VoWhToS6jmrrFhnYJo9whFt",
  "key17": "33oAY6esVBHa8rZbtHehshQVMHYQTvaFzspE2gFfrBw1hpfHP7KbwUWMrBxPjjRdiPo2y2ReaynGGXUktyRkbfjb",
  "key18": "47wjrKpmS1vhcS89uYjaCKxcmX2EXeFv7Lms7kk89v6GoLkkMYRJWbpJL7vpCmHSXMvzwus4swYDeDSeyn7ADCgf",
  "key19": "288sdTa6aheRBqGfVG1RPcmdB3uq8RRYpTUiKza88wUb2yR1AJA4wkvWgjs7ne39E88GnvSBHDWaEp2eD2QLfoQr",
  "key20": "5Tftfx1mmH5uYyBCYQARasNrCNcXDV19WQPswVxc7umaGB2yemeTHj35LN1TMrM5FqUNNwYiTGCik9m9YHncLyKj",
  "key21": "mgMSNxfJsg4DwMaNpLX15z3gAntL2qcJE95tD3reWWgJyUSsXuz3E1quzGL1nnzJeMWmVUbqhJoLDyoMEV7KrSg",
  "key22": "5xBtbnq6HPLCCrkNuXvrfAFwrK9njMcht3zEtM8jMExMokwSR6yV2N4oXry9kFc1kEv58iJRmK8JieP69jnACbfx",
  "key23": "4xqGkfFZ4pgNehmtiwMyPpCZncWibbroztHP829agyvgRhEjiTquVLRE2z77RDjSj6471WGW6cjjqs5xrEmNERdK",
  "key24": "3kSiaoUhrhaB19nK1C6VfZtf6rrHNw5ubm2tZy6WW7bRsBMpK2KamJ1nZQJiNVR4Cf1R1zC5ud9sNwFCMiez6iqn",
  "key25": "3RgjtkhxHZVNvPDCSEvu3JDkjzwvVN3JaKmF3SWaR4xqK4aPDNzdRi7Nkwv6i4j2PJzuaewcaqh2F5NtBBdCoU5n"
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
