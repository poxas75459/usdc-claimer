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
    "5QzuFAUNRUdfMRAmSbCxUXVnATpPkogAeJiVMvpNLPQQ7fKfiXAV6xru8oRzimt6QK6BuQWfa6P5ekzb3B4DBmKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XLU7oNtH1r5fHexfPT9uMHSxsRj6yD9M4szsbfP9Aj7PUrBzAgJSS6nnr27b3B1gDFmqtDcBsDAd6UawbvHJEjh",
  "key1": "xF8XdgjQQeqbCevZNvUZiiQffK9MgqDjbAumCmuTJACb5HU1NPnveEF92gja935uGbh5E1g1x7yWwpLoiPRgFxy",
  "key2": "2Awwgt1MuowkRizJRhALnn2gRNt9PGeTYiDcPwBt52bxNbsQ11KptkzQ2Tm3NfgcXKSEVid1qyTv2nNC1pnDGkP5",
  "key3": "5S5oQsjrQo3FXgsqzPpim3cPoi8ZP5FD72kL1uvuvZnPsXdQDSpVLj5mnv98SQrM6pb3Bn4HhR1zB4RTFhCA3i28",
  "key4": "36hWQwZJcancwbxr1qSaSj43isiW8uZuFuYGJTgh7TNUajmKtYNVcQ1sLLjJPaeH7YP859piLMgHDZu5CTmvy4as",
  "key5": "CL4YdsaRXuq4PLyxF2hGv1yXRB9j1ZceTF5MHhJHU5PRz4T48fPK38eTdMvUgbAj59tc4pxdfvqKuNpuGfiKEjP",
  "key6": "4AgkyS8tNG5AuV8qqVCajLnqoh62gqMGut5ro5NExAHJU4jKYRVjhbhemTNuoHZg5ftUrMsexy4Hj8pGEjfn5c5m",
  "key7": "5zKbAT2LvsXMCu5Xqgocq6kwL1mwmwoFhim4VPXHtkAS5Sxtb4M7k4d3bqC2LBJPceAB8q71sMK7DyCnYpnU6FXv",
  "key8": "2GHVe61BKcAvwENaBqFkvPjf4TkAp3tdwa9NFJAmGXu9BCvKNmmopmJ3P1zdB19qSpwP7TU6Xw3wLH9DgCMn8cBj",
  "key9": "41XG5RG1TMKmddwWHgpqqf6jDDuVTeVYmRG9PcoftYdZ8WVGBDi2HQ9QjPk3tRd2U2MrUbeMaE9RRRumXRjQesDb",
  "key10": "iuonCXCdVffkFJNDkPiRmRmT3Az1MJhR283J7WGVdSnszGTVapeUCrUsxAY9XeNZbiqENpBFhR4Hc6tUgLPiwga",
  "key11": "3R9KuFCEqni4EkewhqJgzdxFFHFnBLC9QPgtC3JtahtgVmW3FjErDJPStBaePb9NuChUYsv5wJecg1CLKneyciXj",
  "key12": "2aF7gPGi9L3ySj2ruBqQUaitoRZuDydwJBRWNXv4bZsbKpvHVjxcReyjhAB6G515x5K3mfc3aiGRH3obi1fpUhEe",
  "key13": "5ymVng5RkGZ4nnEXNAgMgtC1gY9Kx7HcGENNNTySbWoUBXh7RZqQ93qVCvEypzhBYVX8ZdyLNdX9vtcZT4pHg62b",
  "key14": "3AdyoC9yMrz9LK4LiDvP3va8c55noyHbZWZvHNvir3CndTrVEYm9trBVFAqHcUrS8ET9FmfTbvfPSGh2CS53yXZV",
  "key15": "mM3xnx9vjCu3nKanF7SCG8qK1mdnEgbhBooZykiTttdXgUZXWYAow1BG6TZPFguTuKCW65HWQJ76wx1YkPZq2q5",
  "key16": "249iq2Qrab8YuZ1eZ8YJq7UwEChyvBgj7qEujKd2qBc2seodGFjjkdyewVCcA6PHPJ8RkQCGXmCoqF3dNb1RwhEM",
  "key17": "U7KwqqcSMDRncvBJxiaMtSzZCYhC7hQKjZvTSYaArjdQuUKG7DFuA5Xc6vB293HykQL1D8yWdaXYd3uk1V6vFyT",
  "key18": "5kpyfPXb7yrToTnjUB2JyDwe2LhPXdYukj1gBUs9eycYgegR7j4AYpchpgnjSym35Dcnr4eeH86Jrp2LiWpd1wNj",
  "key19": "3xVUFqeU8qSFkyMRWKeYiRAcLDCXQo8FVpTvt3TDbMp7SiFRj6VpmMKk3cPuwQYGVaYHTMJmbNGhaXRj9KCFTW79",
  "key20": "2m9EF14pjfsAyH9Gg4nZm3iKK9TQV6bssy2Sn2j27B7ZtM6zbbfRxV3bWtEiHE3vRiDd31iBayBs5j6GxAnwWNd6",
  "key21": "3sKNRgHdKw6xSdCd5PBmeysSCkoVuaVrH782pLK5yKZ9sFk9VCniYFG1gpynTBjwww9PB5N6sLx4y5Wsh7gzYLvx",
  "key22": "LhY4xAtsJ9er2YTjTekcztKez4F4bmhLRu8K2RehChKL994Wg4cTSwAn7kT94K2VKtH6h5YsQ6pg4g77CmRjzMu",
  "key23": "dxdMEb5WeTFvTt4WNR2UgDpDMkhNYoqnSECGWgJdatzevyogHpmp2Lz4XmeBkzaYRLZagZdgZnzfNDz5kJZv718",
  "key24": "LS8Puq9bHkhgxxdX5dWnmPyKHj1rvWyy28iigby6ySMp5jzfADwgBSfSbi4iGLooNBzaPwnwMdaMfMkiCZP9T7b"
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
