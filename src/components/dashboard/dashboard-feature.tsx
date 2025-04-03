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
    "5A7NMRhMnyjHSkLr7JcsEwH6caEGXJrZvjQbZNjrX3p6pdRucQnPb4i6aPJKyKPMLUU7gi29dWYouVrA8z4byJQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdHvPz5YtvYWk87PxFarFb89kJJgtMX3ddbAzKdCiCYDaitTswoPAKBCUn7v6N49ypq961ki6o5TbAYY8m1mvPR",
  "key1": "JpBRkbVQSvZ2greGUnrT8SHU2J912EEBuVWAQP8ze6CPwsLSei7tveApVs3vYAxR8Rwf2ewK46cznTnHwbc3oJG",
  "key2": "5H7Zgxv4wy46KH8atEzHjX9GgECkntvCto1E3M6XXHVn8ikV3wqPx7sj9T3maMUmzWzY9pAbrhXYj8VtqyWAEHbm",
  "key3": "5TPm6Qyvg54wwuAXTinqJBJkNpsYaP8g3vLMVqfc7v9ojayyNnyPERvxggGcRP1XJqqyD5wUGtHo8tXvSMAWzeLY",
  "key4": "4tVjQiisFGVLi4uthcxG8aFy4d5ZAoRS7EVL937Ac6kqiXAb9Rt4JKTm8PbTJJWvignHgAoDD13a38DhZsDgQFip",
  "key5": "XEoSpkVdQJwbvt6RWjjrkvnY44N1jEGHyR2BpYU2qBaD1hTdnYLKXY9SfnyVU1stHYGazFohMMwBaSCw2MzLxzL",
  "key6": "5qxrrTfK8WHJyaDSnS5ooz8PFj1Eggie6P3T2YQuHoLKDPiR8v3d8ZetpondDonTSDMq49AbX4NwG4GhzqANQPEp",
  "key7": "2wVYKS9yT2Sih9HtvhZt3gGUEmmqTgmpvVgkZaga1mLDCF1U313mXaiMNnKmpsWyyTgNSYVDEJ8aA9qoyJVvvxvQ",
  "key8": "3remYEVBnM7jr8bk66cVTiTKEKjxoUuHQj4hStWXCiuRzB1fH3CsJ2e9CuWu3f3Se6iZdtpDa5SPV4eKKJnymE1R",
  "key9": "Wc6XsJgGRKwHSsAi7zjaXoZecd1SYmp8HEUeJ75czsFtkEpirHWwVb95HWnM8MkuSt6oXjDb15Bo25osBUTHmef",
  "key10": "3s6MkruXS7UwjR6c6g3MVeD6edfk6nFzraX3dDvi8m1CE1NCh12FsBQWbQPp75NR5ce8rNYW8y35fj7v3gugBLv4",
  "key11": "4WYY1sH7pu1z7xDqv6odEfUAYBLuxUfyLELG6zUrdtBPr27dsTHXHRokNdjKv6kKqTWAGb9VdSZTQMdP9s3MSw23",
  "key12": "4SuS5MYuhM7xiCc1V59im8e41tRBMCDVgp6sPLGNi9iVNE1Mgmb9YpbnGu1VmQQC4oTFzYZWhuecRhQd8Bm4Uyu9",
  "key13": "33dVmxYjwikCagtDrxirofzJKmhhyzeAHm6oPGmRFh5hWXfTdBFzmDu4XTy2oxsmuRQ3YTyxVKe14K9Xrr85oVS7",
  "key14": "38mGqRPvARPhs79Y25jcMqnFwZc7zMcVqaWT62J8szjUrNynvnKX5ukmnF4xujJznfcgdmf5iWhwwucK4RT2HPhD",
  "key15": "HPFHtkhYkdW8yGf9fGr7iNBWneK5hmupSwFuZZDmGBspAesML8qAfKKThCGvssZSuExuUaGsRHCP2jaH6qomT2i",
  "key16": "5EKfquXSVaX1K8v2XSeEMemeHYsqA1rY35wmy6Jz5ttdxdzneeqpcuA4md7ha1Y6U1B5PgKfk5SznbKth8baNeSs",
  "key17": "TunLokw57hAYJEam2MmdphDsNbftHu272Cn1xHMJog2EZDfMzxnPGdcV6R8jQju3TCBNGzGopNczJ8GVxtEtAjN",
  "key18": "dSzFk7fapeFtpL4mCCCwZLTgsEFJxZaNAqhWTEWCmtADFbZFjKAFbYpw3R92RvKmUvidWXaCoifQHjhAAc4sNM9",
  "key19": "3DQ1pkZrDoFFa8FL18GKn52mtDYuLSuLVifsghGKMf4jEQLnDomb1pp2wt9DJsCT3aXqHDyzcDPScEuTyFc27cc1",
  "key20": "c6d8cWVJzXo1egt2z99NTnNHQ1aFTwhusY5CrqDccAdaL7b4TQUudWWhbRjXJcenMQsiyGeG35QAiT2SkhqnJeR",
  "key21": "3qQy9iMJuy5bvTgVKPBLk8UUMNzGNBph8zt3PeyGuFJCHJnAcbtfyuh5ZAi3ZiRJtJrSVshLFEWgUc493RLj6xaA",
  "key22": "2c8LQwViHcfsPVusfVREP6cuUuuMUbyoUrHgyMk3Fk7XgtM1DaAcPzH9oDcUhodSV9HDbVup6NVuAj4uwHbwJuYT",
  "key23": "5a3xZevWRjr3nkhYTRcDtk4bxDBBGVAHFz7jVgKFvAg5VcHgcKTaSyZHiEQwjKW8h8NcfwuioKF5XnSV7EQPW8CL",
  "key24": "QryvisbjgEerJ9NyciSKEt6KzVSvsyLD8rKW93AxK4wXBR7fDx9KHCZojd3K6V8JicnHq5d1SGHTadByjMx34dp"
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
