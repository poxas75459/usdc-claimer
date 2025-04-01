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
    "2r83FP2LrZR1qnVbR1jq5JBCpzmc7vY3tdgFZKUQVhQKWnPZJyEWnZnrQqgdgXoexZav5cfg8Qe2qdK3J23FmMxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNhypiEo93RdhbcjVBKyLh8g6qMPmL85ChCEwvXN3GKVdEUSZoM1eqhim3vy6Yc4qzm56NaBDaLXy5zdTmquu4x",
  "key1": "2bkE2yfe8oV14y1JTvcQxNE5VrocBC9yf9oNXtd59LjU4c3gxtuA3uufBnqk7bp86h3VzYQDRNGjGEi4dm9yX86c",
  "key2": "4rftShXfS6s1Kf8VAWXSfx55MWbeT93kTnNNXYD31ACvDqXpW6a1m4sCBnrmUB1YgcNhbpy3Dtr76A48EcjQCtkZ",
  "key3": "ohazLcYnz9j3VjaupmupBx4M9ioZazYX5y7XxsZ7jGCqJ7xzF9qp6u1NmyJci69GHFz8cjH13ZVwD8b5TbbWK4Q",
  "key4": "TZX5x5TTw4GbP2p1R3S9pmnciHvJ2j9kFyDCtWHPZhC81ZnunyvZ6JUBx14MWr38SaZbQACKr3fxTAuRJWGAkF4",
  "key5": "3wfE8BtevUszMjLdd4hFieeRx92Yq2SdZCiVnfmoe4zLjU3F9XtVmkaUeSyQ4XcqSkjwR7hvvQ9GV12ArSug4DRW",
  "key6": "4Pu69V3oR2i6uMgNZLqKeRAFQS8CoZ5BvFNSpJcW1UD21REBZexVycG4bGYevqht9aavh4Cb71VLEhryJx7rwM9h",
  "key7": "2jyWfcZuKcCFXVNMVkY43228oqHqugYSkRWQamtp11YLqu99HmffBYSbSzQDoUAsNLCnHPqViq9eUsSAGEWHkk8c",
  "key8": "4VoRyKGWa41ZjRo1qSt8cwVKKHqGBqAr1YCAkT9FuaYyYsrt9kexKXDVZgCqBg6ME38hcf94xcmuEVk8z5FhhAfX",
  "key9": "5sCAMFe4TN6iJuNqKwteSytTHnNgfSMrEVs5ZHxSrvSaAbVYSec55cjY3EcyDwLn9Mc8K8ryeYvJCdYmr9aPvSKK",
  "key10": "3c1vvSGdwHKDeX2VShekFqgzDgdfPWxCykz1jWd4JomX3hbSwhUvfJDh9Pqo7anfx6mJXnq1J4TnPBHGMXUMfHwz",
  "key11": "6CcdJETVbYBTZrCweSP2jBECF2xNZEznaWSGLCwUrp2CrkihEFWMLxyKmEEv5vTBq5jaUoW4wRHfvoxozzRy9Up",
  "key12": "5FbhvA4ziUCApSNYEFbSBdE3JQRdHgrERvZAAmoNSasUuo5hQyLtq4hRupbW9P8R3jCRuwT2254KXRVfRMk8p9oS",
  "key13": "5YENCK74WUpS7oEHQWdmEz63xgvdLHuKRdNTN5VR26JmxHJeCNLtoqAh6nFfaoHk7NQvu1Rm1qNojWCMjktm4AEZ",
  "key14": "2zV5X3HwX9g3ebFcqHdfcN6C5uA4f7EFrTUb55usdcF3KdmoC16y8rbb5tzkfYrJAVpyhvsbCL1o3dHtkiPSxqpU",
  "key15": "5mVYCj6DqxGPvDCKTHC57QuETGtf8s5xkZ7kKZPjZT8hNw4uFkGa7tdxurKJDW4V2xQYazGyxU8ArdgtGW35aTKS",
  "key16": "63jgvSkYx7jEUpq6KvYPs2dffaJGMN13H7k742UjLeaqjjE7bupFVJbdzoEeUTUE8MRCsbWgWD3DNsi16qCnDiNK",
  "key17": "61Wkry3PHd7iYi9Y86ECrskVJH1AkEu9SBoYwhheUB5xZb5ouuyJQmxMbHrzxLPpJ9Nd7vrta8SKZruqMknWJTJK",
  "key18": "CJSupJ3REDWwnnQNPQwe7Er95neSVBA4JGae9eHiB81sxCbVWXc6fGKZng6YBzqoL759gocjDvW9dnqGu7oXXWi",
  "key19": "kTevB9pZFyuYoUroYbyhAXkmgkihNHE4wPnU2ukLoYzepAHpUwAygUc63AJdMPQU9G6DsCni66J7GRS4MCkk4qs",
  "key20": "35iyUUiD1E3keNUt6dSMFZREW1g5iZEsfcAes1ebHstHkvzRnkfiq2BydAwkZ9aVYrpPEV2BvVnTuz4WNBzXy57M",
  "key21": "oWpzo9v6ttg41MjGXgjAcaMsu4KrbL3HrhbjxKKbzcBg1ostifJsCGAus9TnwRYxZrkHNk62PuhqAaDKkEo5WJz",
  "key22": "5WWtk2QGtEp4JLYL3uiX2VV1kPRZKVX8ejXkKkMhFLhLCXKJDhRk4wsQ3r3AmcXQ638w3gVnkQy6Y69nMJUVKcJQ",
  "key23": "4xfMsPRHnbHEYuaVZC7RC5Nfc1cQ2JxCD43pwW7HoHG55ch7uAqUEyn4fXQ63jf5AyntsYFJs8ZGEpcR2zKLm1Nj",
  "key24": "5uWbPVUYfWjnfiXkrBTsSiV639MTuSFiLasaAoxHRWWe3tmvKemTNZASnbo8RwcjJksLcfz8KdT3mPcyarcqQVG7",
  "key25": "2rozQ7xWscUNYecL1JgbtP54g4p4M3sQQ9Zay3DBkLNLm5pUbM4rVVPhRP1feumNDo9QoNVRHC7UPnJwbxHaXMLm",
  "key26": "4KeZxL3NYdS85RPQ8NsmBcHkHroYx1VX8Wcps8dQXSNJZh3DhvUyJifd9ECknyBZPuGkVWbpFXtgqwHPqRZhPAEf",
  "key27": "4ccXTQfuvBufyKdaFVz58uq9abR91LrHD2dpcu4JQQE46VXzw5EFoCn33QLfqCkw6sERysZe5E3MHS9MZLwnKbtX",
  "key28": "725ovPwLw8kshR4SQNgAjGqeMaQDCxsjTMBwkgWFVgAoBij7xptGuszVEhiSjPiGcbmfks6M5pgMR32R7dcz6Jq",
  "key29": "4DTvbxVyQDwCpV4aCf7bLwUETpN3hRdHFxemziTMSYYXi2bTJxAYATD61EP2uDKMHJwsVFTExT99vUX5hNGiRBf4",
  "key30": "mFmxUCmyYst2FNUZ5fBmay8GPMAmQa7EHtEoQxPmyPcALKL18b1LMJns3iirxSWZzqnnCo9hNo7Ued3md5UZcMK",
  "key31": "AxUtFGams2PaAUjnzprH7kGFCdemKJFq6SMdEmLrS8scZT2SNnHPpvn64P3vLMZ9t7hgnVJBgiGyWsPeZYrP1cc",
  "key32": "3c53Mg3PW7xvopTsvWS7ButACCdoXSXr68g6ZNXUoSRwP2fFiNUVz19Q4WeFpFLyoqfSMLRviMNnZfNEmcrUzvH9",
  "key33": "4h83ParM3TmVVGwxNTk5hBneCjhsKvPNWo2Lc8ig74Jq7ePstQrHLgQgxPXZqFJTZmiM2NsHCQevLgZFT6Xvmpe3",
  "key34": "3sXK8L2wQ9X5veMaGGheVZibaNm5oBHT3TXiVCFEba59T78SAqS8F2TZHnQTKLuYDn9ugqHtYSiPau5YuUyJJd93",
  "key35": "X2MjkmpV9XXFnFxRgGRwB2pNmW4gt8YrDoZNHdieKgwWH78KHqgT9gc7t7M1isggHc2HNJjHtoAsnck8T4RsRoU",
  "key36": "2C4DVUx8XzET7vcgLf78sSzvYJWsuK9acgmx51tLsgC8RVFt82rR8F99bE1uP2UB1LpH2EawakWEo7pFXaZXKUXw",
  "key37": "3V83TQbea4SdgeBxREdcQHVHAgiNfjTt42Qxb4XoiQHLP7w9ehLCPKBz3z5a6qvJjv5f74GVoVCqHDk8GYWprUoQ",
  "key38": "4DZ4ijBbbbsuTeF2fZj4zBxepox7kb8HowFNRyVkcHN7PLg1wrf2LE3cSqjwNZ15sZgNon7Sa8RbTaGPSmvNWgMn",
  "key39": "2EwAA4hYu6FQxToLzKUoTwbonjZv3FJG7vmQQH5SzZGYuaTAKWdnWqFmpcFsMKhXycKjPzFibX1kpCj7zW3YFVsZ",
  "key40": "4t4ymMRCRmCXTRhiRYS123jT8zUVPU56x94brq2KrQxzh41mspp3bSxdCpjg1oktLRD6xfUpZuFpnZrGYK2zA8L7",
  "key41": "54QeR4AfjXncPAJAm9dcVYdwPorRqN6z6zgH5nW41LLq1YVcy4biz35BTHvNAWrhE4Shu7zoyupMa5qS5RB3rhqZ",
  "key42": "4d5SMXy4yLna3s7FE9pJ64ZpUQDaaJ9gzGFKWqVjs2do7h9WU56kkjmYCoFE2JFVDWK5PifS8hDXcpoyTmgUJs79",
  "key43": "yiNj4UtWySTp2R2oWVFhLx4Pu9T4791bwp7MhJKAtDJqQf8fecG6yDcRmLb3T4GuH4zPhZM6uUv5rH6v3vb1ydn",
  "key44": "4g4cLpuE3pDKCuBXaExjjAVeVp7KAopWkRsTmzdZAnaLdykaKBxAi4aXe4yp8nb6UKSZKhucyJubSDhg7WVfRrwF"
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
