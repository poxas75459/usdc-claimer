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
    "4miUsnXUDeMjuo1BAYNArhKhFLQdUGMM4ihppcSCuVp4aosV8YpLweCakFT8GJtLBEzEUhoxiRYRa1Gmb6cv3LBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u83JZZKZyvQn1HjDvtjPYEwNxE6vXAkF3V47CqAbe55sL4NdDr2oqmDQe9fbugwN6u6XDpdHXocpSmBBmZoxVpH",
  "key1": "2sWEGtKBeQVdkep4nrLHQGHXLFop6EwDpeTWTkPeXN4hRUKVJQgxK1nDd8ykXVyCPJx5dZ797bD4egUMZ3L8hKqf",
  "key2": "2AGQN7yZF2Ntq8urU3JgZqjBmVyQngVru9PiP3AMfysNUGjw77HvTKBgTBQGKiQuzp1P88ma1G3gn8h9FSLe5vqZ",
  "key3": "4qMktV34mrXpMHUV7Lnvku9QvmmQAmbcqG9n5iB6n6XQM7FvhZk2gQEDwdkavqyapNPg4JEiJDLwPNbPREqtSLck",
  "key4": "21q1F6FJkeysAx46tyRnPVCPGicPtqEbTVx3KUEo9RuR7qck9vZU6PAUGFghWjERNqtNmbhSB9YUdP1Pxi4DPhjN",
  "key5": "27GgSLH3gVK9Vr4CXQFTkJSimWdhekfMbsdbnTekmPNFwU1nUbT8f441z2gQLz1HDzRHeUAcqAwKMuukZHPobBSW",
  "key6": "3vsuVjncQfwsqbKJXonV5hNhv3fUoUirdpwyXRLSAMBfgs748o89dzohHk4DnRqNEfHbWM3GjqoZc4fjJNnghWZS",
  "key7": "4TabVZpfqjsApWkkKPHY7CaMNpsJ5R5dr6Mm2HSeg1i94ZJH95QB1A1EQ3PJL4tBGHjhPuff7TqmYGegUCnoMLnS",
  "key8": "58qk9Xn1xdmxP3sssj2TANhqFmskeN6XaCwgSgGYUUfowqMfxQxA3cwqL9q6wprAg3LzqK2kmveGYcftPKE9KmTu",
  "key9": "5XyWKpkYJa5WTeqATdbRwwUDQpkELhKaRyNqhKZkQ6r5P86fd6pmo745ZMCniVm4gqrumr4mnZdKfr37BUoZxxh7",
  "key10": "2zyH9hm9ngqXDVQ7Mzuzra795rs2kyNncidZ2AU8Zb1JmudCKo6dMH5aR4HA4zzh1WTWFEVtgWyUKDkp36CB1qXQ",
  "key11": "3mKThBZW4TUXSsARNSbDtgzCay6gU6e8uojMUejrsKfbp9SoCJ7M55nd4Hx3fYv43GzvBRD784ibt7X2TV2LZfkT",
  "key12": "2uUX7xdQCvw2JqKmN6w8nKNRVvX8GcY9ofUA1RDtnA3SXP7FoCsU187EY7YeRrzVC7VXcXHdJrafoHiqEK38iFqE",
  "key13": "5hABy65ECpmGHNwshwBMpuXvrZJcoDcHx6sjLf5nHCcRr3sFoQyoKT3XeTmgmczVEvLrjLoAxEGLAZezZezSMWA1",
  "key14": "4QDUs5e5VAEDd4ijKZUmkR4FfGzEy7CTgK9VEwuGrBm48YvcZH9AzodV1G2fJU2TnN7CU2ZWS7qAndoPDnv8Xd5T",
  "key15": "5rSHZwG8MEV3n97mmrpELS6UkkNiNwHL5jHfWRnYrsYX9NTseDqzg5LBJm1yH5jRfXowfLjczTNtUytYGaFdVhvp",
  "key16": "eFx7TVixhadYBUgJS7NkTy53qLSaDbcbyEuxxPn84DVr8qgnExK8J8CWqZRXweanvFuY1wGgGH3QTT3erEXCjzK",
  "key17": "DwQMjYDvR9BVsCixm1BJgxZfmN5Zqvu2nGV3QVLmPrT26nZEefMYSE9n2XeFsKuSpuDCSEcZJjoPHkjRVoUghMJ",
  "key18": "4S8CoF85bcufBEE4ngECnF9Agj6czLkySmEidZmG6cgnEiJBR6gdnbUPXt98mPLoufK5CjnVRnRp8Pc4uULfvEE6",
  "key19": "bK8CJPhbpre1jsCCnx6dDeizHkDK4inxNAuRWjn93PAK9zzU5RxQhSseR18N1VPD4LDEE2m6xgUHNC5WnEPwk1U",
  "key20": "4EFj2EWq33L8tFR4SmwNgrFRjyvdV3BzzvUwZDFeeQV5sfQ7jkQwg79dCxw93sasD2poG4xmzzFjK7trAKqHL2ov",
  "key21": "2DpWkC2oZ6vdPwgzvwjebzEdVZmfkDegXHHWn9JszhkGpFpQPquPPVUDvX1afT2DwgQcJUCfTXsXhvuZGhcPiDnW",
  "key22": "2yMr7hPv3TbsosYPfqqzzZRAGum2rUJs6pGhY9qTBTZNsf99LQX2HBqkAwEAAiFdR4VaJk5UAuKw7NbrUuwKHBQZ",
  "key23": "3vag4895pghqERVd3rgsdnVzZTkYyNPDcNyj4G72HaXdsZob7dapi75tzwBRwhCsxuqkc4EPd8tUcZH6t1pNSQAm",
  "key24": "5SvjzMYHqvJuzfU9kuRkUbdv4cREzLdygeAWMRFeWjfbpGuB3rcrnhzLtTuhLdrUznY7mfMhTycyKBWBiFhQp7SN",
  "key25": "5Qak8FJto3aPPNZKYSs2tohRS5ML8R5Ue5CMgBHG9QGE3nXF53TX4QjwvsUk7qtPjo9XHKNTfhoLQuEKN7s5qhe",
  "key26": "24WaSpmFPTbt3iHMJLdfERHb76vDjNxUbymdfRn3mcBXwBYbxe4g3giWLqg7tf2sQhCnPqpDFNqzmNNb2AKUYn4W",
  "key27": "3YBzsK8ZFXMaWCqJ8m62DxSLANBzN1wq7vCTPegtGLezndSKFp8tnCuA9GSCUFZqyCFndraLftVKpgCGsi6fvjLL"
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
