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
    "2rYZMPEx5g3UpxMxQxWFgxwvnKM4xHbSAHrobZZHjHFxZCfiPzkdTaPtzy8Tf8uDwxnkvZB58AJy3DQHuaiCHM6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTQDVAtML7FtdmnuFsuUaCiuBbSoiYm54U2JdHvMtFHCKHbzfDw4j83r9SiEoAV3ybiao8KN8zAWcx2zhdzgnCp",
  "key1": "2VgUAG2QpzgQyPMXYHAPAczX3T5ApiYjkVxRSghQzk5RyPedh5JQFNwfUQFe6x9HjqJ5jjzWapYLDjkhjhBYSzgi",
  "key2": "4UffHa3ug54B3Ub35JUvzsRZgDVXA2em3hB4AHgWQGxYr3ERwQHRRCjZEi89qB6hDR2Ceu8v32ZL7cxF8UoLgSN1",
  "key3": "341m5CNnDBFG2AB9MgYANZfmPiXfmHLn5UBSKd6zS6zB3QCRXwX7CjVyub6Q3hm9qgpvYWCVKDPwMe4YxkvXCJzW",
  "key4": "42LeYnKMzyKQhVp5RfhSGbidAmco6P5W3omj1moX2wx5WDBPwBVA6UvWeHt8DXWXmh8hwpt5XSxGTijty4qbkh7Q",
  "key5": "5K67SvgbtRcxXJMAqSQyBzarCSM4LFXBQemfDBvHSSZWrCGtp61YsXexdLM2N3Gk8ehtxmdB1pRugP9WLDnMST99",
  "key6": "2YSe5su1vYobc8JChEfe2eNWM51ZXvqiEGRcjuDHKEt6Jb2F3q74P88nHWZnepjnmKP7wfsrcuEwmczau8wp9H6t",
  "key7": "4RTGvNgHH2bsxWyK6QH5s12Ggd2dWy6Fjj6ViH9ieUfGou9bg6NffESnQWV61NwtwWr6MiWBkPVPCnpz9kerNaJ3",
  "key8": "fGAR5YHrq2HcW3vk6TKGCjd4eCp4SFr9p6W7AShprQpwiLZB13t7DiMvYad1vFqGLMKPzZvtHPPG2Zjzbziyjrr",
  "key9": "53R1rvQ7zrk7s4gfpAiHtSBnkFLZuYjphGjiAh6wTUYCDBkuvsvbKLP7272afEmVcoHmeeq785CHiCNz6hB4L9Pq",
  "key10": "4NZsP3kZWEibqHTYSfycJWduCsxcZS7Ajsh9RbeXZdTo1gHRDe1hyU2pNhs5KvuSn6qnsTczb9r3cNsp79TNW3oW",
  "key11": "5mgUkRH79Mnhp5CMPwoovNJj5AWDYyo5BfXgFKuQNMkz3YhSawNiQpyUdSDTerqqtAtsdrar4T56hnVJeQezv4EX",
  "key12": "5BTrh4BMf7PCmdKKdjgDvmozXwNYUb7ZNNf5MZLuu2MgWGW2XsebDSkVhtiUiYvERApYsry8xbBJtNQxcGJUqp5z",
  "key13": "GETuZXZcaix1HoNs6yBREGuNKJRJxovM5f3GCnRFrVTPgTx12Gpu3t4ZWSEjeSj2RmNwViNicfFQTSKdC1wEwtb",
  "key14": "4dkTEeMZ6uPa3yUcYy3WeRUR2FY5c2Rb8sagjiSwYrujgYUmPrBxhVascbhxDuixTGrHNXkgeLnS5FQd8qei6ZyJ",
  "key15": "uY5keXHvv5r7F47AYHG2EAs4H9ySo49RHwGEqzg8iGU6BuXK6yQEZ8JVe4LYtUNJLbLj1zjVnHJSFTfGVQijW5u",
  "key16": "HRuHH8UMUtbpqHiEQEWFe8uFMipmM6cyEpPcLdsGuUk4kKRWVVo7ybM2YJ4YtnDDUzQ6PkqkfxBxDNHDakJsT7W",
  "key17": "3zQegsqhEuGidqhgj2mtVztXQj2Q43hqhcTQT1xtY6eZXTFwVMr9Yd9JxoQQyY26p22m88pWofDMr3aqLEyQ5pYK",
  "key18": "3SHJTb5YBrvTbTAHsXVAoUaHAGppiuSdutMFV74oZTUxAcqB9ESmZXQGjRH3cgX4XoG6dgm7qfmQV9PZp4xXRz75",
  "key19": "5D3iGXqdK32VEEmZQjKVRsVtX9Q7usKHh7L3idUPBmStecAtmr8aF5KMumN3FS2VRYSEHGKirn4mUSXo4LV2zfi1",
  "key20": "2p4vEx5JP4eiiBNxUiNe7uTGzfDWppMbVVrcdS7Bv4P3T9hwzn2YfL3LEj4uB9PCTY2bGcyNoqt4SFUYu3pbAmKA",
  "key21": "4XbPsn4JwFv49UwwBgWneGnUdEBCnVVD1eJkQ72Qu3PUeYdKLGgBd89PgyPFsCneUfRoCHxAsBr3eBQ9ww1vVKTe",
  "key22": "51Sn43PUxxEZZfhQ5XnwZ6oZAhdbdMgVEcpx4AAmA7Lx2yvVkcsVNNmGs6eh2BeTSUcPCLGyQTACVPzU6y3Mi84N",
  "key23": "4bDfsQZ7eopkdLgpqZ2y7tS92VZjvLR4wgcnUHcAw28RKhA1qPiQuJCBvNods2Y1pmX82iMDEPW5HtzRwdXm5Ms4",
  "key24": "3Qi1HqaBL7rbXQ42VMsMKiNuKyYbQTLk8UFmm2Rf1L4q8CEL1HJTzpPrut5FHmfemGB3Q5LSbBUopzHcBrCx1m5D",
  "key25": "2HcMbyP2Sn6EhR75dkAwFavZpjPT22yJU6Yo1ds67D8DojDeJTBZLMw7e2evsN9B91pBrdUe9DQQ6yXDbATBGJ4m",
  "key26": "kVdBk9xZcoKfcMik4SP36z2fc3sGq5HoeMMB4WPPUbjUNZRaGmhPLmwjsh8VXbANauHNMWVey1PPXkc3N2Zzmhp",
  "key27": "66QhjyNkjCAwaAizEkewwXLge57h3eyQwVEDzsztaYN2mbrBZaQXpuDXR7LMvsxhABHmRu8Dwm4w2rz7mF3eYVFQ",
  "key28": "5aABNqkVKJMy46bocF7xDnSdNsAAxEYB5aApXhKZ8GBsJybVQrdHLwZX9KgA87eL8cJfo2EeXqt8oyzXBSkLMZQU",
  "key29": "3o9SfsY6ueQCnX1vF2chrFUBNxbkwVLL1EaS47UWaY6QcsaZUxaksxg7kC15BRWAPZtqHinVGpxdmoNbhyns4vpL",
  "key30": "3jXMC5yKzp1nCk6RkXRcZVJs4TqGvJQ1FQ29TgumMQ8U6TfMPqMWREtiSMtShig5xKrM8a6SKm9UyKwADWZoTAAn",
  "key31": "2C5xSTJEww8ez2PTSJPiVt6UZ2r2GM8JpdPHivd1EVrpTJSzXCRtVMiKUVqaTHwbWEAec4SbWpYz2Rvbo8GcPJAR"
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
