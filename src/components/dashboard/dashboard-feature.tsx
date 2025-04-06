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
    "5ji6gwjQfmuKgqZyVgzSmJPNC9H4FC9GWGacCJj8GuCa7ZW48atbASyFboiqPVCXz764aWiAGjr6d2votPa3tXyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7QJWHMKGe8PWydqPNsPzXowamDnR3acFecs3dCVfiCzqWBxmrBptSFhFADKSkRFRSPdDQ7RtYYyVDZhHERUrbr",
  "key1": "aLTHUVPBHYKHtu9A8FFbkZUQPhgT4pQfRfmYkZFDdmhn1TthfpPfTQ3Un5YuSdXRXEKEJ8P9NXL7q2foPwNNoQ7",
  "key2": "2VmCi7Ugq3ctNh8ucqCYQWSwUKftXLDJUxmSNrgiaNiHx3uXjc4K5Ai465CMpmSUVKrgGndMVSyDXosFs3hGWLHR",
  "key3": "4BybU23bFLHv9YUc7Bjgf8AE5HFAiy3r9Ptj9m6Vc9DeEHYvemAv5Hc422QedWwd9pJ2tbz9GNgG6Wrj5UNABG82",
  "key4": "57N83iyAmQ4Ae8371KretGzNeoNYKfyCF8pSnNzhbtjiwzoxhKYPopnUidEYqkTezWkzVftMPDEpK23ffdJqhM8o",
  "key5": "3Jgj5ddCRJzTi4VmbAyHSx3dke7QdrYovdE8V2A9UXAdVeteqREcAbqTp8mtk9pFrXEbxD6fEuuWSNCwofb3hKLU",
  "key6": "27KKDtxAZEBUUjM9SM4aST2k9pBnir2A3ADU8FQUvRT3gFH1F5GJL8hEmzK4wqCHshH3AXG1yXEhBxn5WNbAE1NL",
  "key7": "4BtcaR4f3eLhbvngYHKPDoPBt2yiksJiawrpf16bsnhENriNMzYTjukTCQ26FVGRmcip6uuGJuQWUWU2iBo84UnZ",
  "key8": "5zCv71xwmxcJ6h7Tyuwnsc5AcXEdze4z8fZx8MpN6Pfdwbsin6RQCD4mQ6JA7j2aWW2njurajvKNUtQYNExBKpU5",
  "key9": "4NNaQSobDoHFGtjPjFtXJyuc9TE6aQb2GMFbKsMeJ9gM3BTUgHiWJtEZSzyb2aMjnhJyvEy5gRLup9PWKKFfH8pF",
  "key10": "3Am78BPem2Wyp1dHKWwtZdNVPvKpzAv5LkCCZafEkeeMaLKSfgUTJFvki9bVJ9TmNkJsTf5o5jiTS1X2iSCjE2a2",
  "key11": "5rZ5fGNSBH5PQFn99JRdjuWT2mouwgv57MquYXqtT8fHCggsatQn599c7eAonS6LJtNSGg4sUwi6UxNvXUnqdQcd",
  "key12": "5aUEwoDe8SxJLCREQanihoh8iqmKAVtpcRwBaKHnEpXRtnoyamF2P64kHfsxGYzJgLjivKH4ewYPdGiNzogomCiw",
  "key13": "5EUqRtneoKJ5tU6JmF6rXFuETFWA7H3CEhMyeUKCpqZeagkxyxDSFW9Y5hYoeucgxXVXUWNqP6cvB9hRVhf8EyH2",
  "key14": "5krQ2CorrRUCCeHtXTDESkpFri98FPD51r2pNn8sncN4k6b5fqVgA7KtQeX1oQJMerF8T4hoif4x51aLHmFaTydJ",
  "key15": "53VWDDRg9EdtxfwY1BBD5GNdehNMC2tjEa8TMhN5A1XSFaMxPVYhEokswSJozXBjLNYKigUqZq7zRpzLhzDRMmKm",
  "key16": "5LTxJfuGVsbCscdWXqrSGx3asZtEcKp1c1sE2pjVDa7k8uToWm8RzvovGWLEofmd5xSuSbVau4aiNc1yfznDU784",
  "key17": "5qNGHTNCvVctwBkLs5RS4fSBMJXMmJk4GREMA3g5HeqoiinwSEKmRsxvHoHh6NM66gRioxbBYd3uTJZFfbmFrnwF",
  "key18": "mhfHBW9rqDUvr6UPCZKguDvQpaGdf9W7eNCdovJEyEAuqAqQWHZSiraW5G8wz79tyqLx5rgr2NuH3HMEqkb6FmC",
  "key19": "2s3nJzbty7Qyizveu5SRysp1UCy8zf3vvwizzfUha5dw89oiAppBfWPszLzaWbET9tRVAsJS6scdrRYPcetmGQz",
  "key20": "4vfWwBgxGeJX79SKFJM3SKVCB5LkCbRzzkH4ALMymkXdQ69HRQYSber78URdj7mmfYZghkSyFkufBXR8ZqP1PhfL",
  "key21": "4KKkkCjat1YoMph7edSThXd8Zkb7QhrB4hyhhFHPQP2MEPWDarRuYnFPwcBy5sHniRZd3SdduXUvXW125PSdjqaW",
  "key22": "5DkKk3yxCfcVi7dtR9bNWjuPSdRT4jqTLXHqwMy1oZiee5r3gPZ5Hf44kS6zTJGQm9DheYF4VwD8gdp9yBPXWeaK",
  "key23": "4CeHygesexkuTyMf67FE8vChX4nY9wRESMLzKZK6ks9fQiqoEcpa5g6ywG67A4yMH8waA5nnLp6A17mWigrjkygw",
  "key24": "3um8wRJwgHL8bPpkGYKhRunJb5f18GLrcu7Mi82U1wWEeFTM9GenkMJ2MFrBx87Ch31KLbn2tLJBRekQ3uEPKVKm",
  "key25": "obaHVYsdKh8A3L6RZADA8rJkAVZNWbma3kQVpkAq5qT1zRDLqSem9u1VberGDStH691cRVPEfksS7u3MK2oKpcm",
  "key26": "rDNeDWHqjnjsaiA5kAiBSfR7DPU8inX635wa8YEJuYgdpaUh72NSumnu68NktZbz5KY44xZSdYXP1PAmp1uHEYK",
  "key27": "26K3WMrEwkzTJnTCd3TfqxSB9jSmLVxcNb1tpcjwZLk4pJ7WnQRqSRaQxuoHNfQq5jwM13FPV5YjYBVcpXHBgfFe",
  "key28": "4DtMgvSmmBBiT2BQit3GC1DpkctTmXCy9XDcE84X6nr8UBvyicdgVFbJzR9EaUdeSK81RZQ6nJcxA4Tmy97J1saK",
  "key29": "3A2SdMy2d1z2sbutZv6VvMzMbnQVugJRTG8Nv26qpdEyD2uiLnPPM8HFvMj51yz8DZCtQ6tXQPYXHumHtZ8twgXb",
  "key30": "4Y4Fj2s4ibhb2VpyhDaAKUzX3A6yiP76o9r1GG6yQu7c61LTcM9fgpLysiei8TwxEXCFwjuYdtPMWipC58zFRCWu",
  "key31": "4oqzWDFHCexxVx8YAxTYCHN1aRbcQ7A3jVh3yhSyWrasqN3VPD8PZQNnBGuyYQxiGPmSRtYqrje5yZbCL9t3fujZ",
  "key32": "2MQHRqCwiPpJCP99tsusCH42kPBbLMF9xbUssbCQKzTwkqaLBFtdaSe2HnujxBRLEudsDndxYsKRZBavDBFjbzEz",
  "key33": "2rPob1X3EtnR2fSz1Hii3tMBVj8JPRszmJW7gF7eTFA3NCQkoBxc2L4ppzZvhSHZtFm5DevysviK1ipgSFzyraTH",
  "key34": "46qxb1HBwexpDyg4vNK6gLdtQY9hQe3HsxP6uPPsfYZFdiajtYduvG36pXffTJGpJawn58isXVWSL1nUHtiJiYQ7",
  "key35": "3Vbcqhy6noQVyBVTjtUPpnBAZKRhBydnrwEJVmFSBPG7DyqP71nLYwwAVRUfGYxgtcMWSRTYyFqpLLn4dib5EFiz",
  "key36": "2BMKJTFi8TxN2A3YgyMJxmr4bqW2dMav8YL25Rs9td2mtaj3VkfAeBaTyuZRPbkqG6BWCPqfRMVhKMGN3k7VxdY1",
  "key37": "DfRqwvdnU4WjxkBzo2v3iEAuPaDGHPCmT5DWtsRk6V5Bxd2gPpuYN9f1QbRuAqS3JXYW7u3f5gzrXb27VdAvp3Z",
  "key38": "2E682LV1Royziuvz4nRDnbh2hmdvh1TVcSnYSRQYrfhQCnyq1qeh8o3mkxG2v6BM4PTooVWTrk8DKjXehQ1A9jkd",
  "key39": "5QHYLmqkZi9292DDkXB5EFVupyDvKX6NXwJ55rnX1rUQZ52kFweMi4TMQDoedJSkxaZ3B1mZav8vUWSpoSt2N8aF",
  "key40": "41c2TBUv36wtSiRvVp1orNXFPmgu5sfTLNCQoSS3ErXCtcgf2XLNKKQv82QtZJMFRtTGVZ8J9NsgzasssmYM8qHd",
  "key41": "2ygrCzH2ZYEWJWfqR2GVaPirDkBMPcakntND8zZDa47PJqudRHGvpiV2cSQHyHooeL899dWLJnZLDJQHpjV8fXXy",
  "key42": "29QRmfQ3fYWxEUFTe6iCoKJoftFbYpAdSvj415YJdd1qBdH9bPeaFHXDMy77zbz4r3aXgxpaB7rS6LxHvb75Gwub"
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
