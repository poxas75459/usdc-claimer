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
    "4nr65ncubT8R6vorSyvH9dgNCcrgpXKHYPikiHJb9zHuCDWkZynxVWaqLzYSUEKg38wuCSVtghBJVVaEwMha66HW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EFDm8q5JXmBKc4ShyxLvDwzDcVnGcgfG4ZREcjQZCitz16goYdiKRDmwtjUdhaPLQtvkVxcmcXSk9B2AvYTb4Bx",
  "key1": "4xAni7gqXszGCEPdvYEARG6udi9kfKQsbG8w3eTz6ZBceKz7WmqJhLaWczydAMGuD3QK2Ms4kVLJoSofBrpPszxQ",
  "key2": "26kKbXX8gSRTi2qNiM2QKZdTG8SSuJ1rJZFpzfHz1yFApT1Jx7gUVhinWbPJB8YMWYiDPCGugtFcfJit3gnMDmfr",
  "key3": "4jETrPrVUivv1whTtjpw15APXjb7e12S5P2w8FoFTRkEg8oMm3A3kW53gspc1pT27SnTEkSBm8tSdR5FRxc9Fs7h",
  "key4": "3cRvAEGQ4Kb6YXVRw8k1rGmitaPddBNQXV9FgoSyWuzYYEbbXBd41aAr2TKhgqcHnNFs6iQfRXENViGwkzVowPTW",
  "key5": "3ei6ux7TrFFjbEZVWys92WscguKzHfoSFbtZY4B8PkEdW5WvuqemeWApFNA88RSNfrUvx92jJHihGnBHAtYyh86q",
  "key6": "475RauBnmEQ9bPVAeKZty7YNJRk9YZxovNpdPd3pNMa13ijmk9poLhXEEMhgaP5NM1bS292RhN8tUSYEJ7GJijUw",
  "key7": "5B3vqyXpdajhtAwng6Gk4EnN5pW6moCtQLK7FFYCzoEpExKDqbQdTC9vWG8ReEpPtyaRG2XuGnroZsVj4hK3iBKM",
  "key8": "3RqMzkk7nerdkGkDJzij2JvehZWBtVXvjTYsZGVfyxgsP9BMGXvYVRbUdABuEtSxnyiwnBG4a1QYpFU9kVxvLw54",
  "key9": "56VNuxa9UaRM2nkexjp5aZRjiubf8HcuexHTQMYS3RCeeQiRekgnTSwWdVjoxxQmyd6v6qoeDnysLeNnqLjLwvG1",
  "key10": "34BWj9ZabvovtZur1QTFSjqVf4cTPMPtVhEdCcfrEfxSZHCHLNLMtSS9q9WSRP34W2EhXAEZTMU26sxzbXcYZ6FE",
  "key11": "gvsQHATVsnrfmuudpim51n7EHUUqAmBs3WJL9UfwmVDVTwaNSmEGYsEHH8Nu8mW2QFjowys6GoG4ugqNJD6r5uR",
  "key12": "4F2tTXWhVbPBCDR443K5tx7azfMr6XgYCZBFkpTLBVGbhu9nqK2Q2kcxRLpK4FJiYFjfNm4mqUiap64DL5vepUss",
  "key13": "4nJ9D4xiEUN4ovF8i1VFyghbKU6uMCPYV8iuktzyrktrMXkDEriafm9XkiEEkBiQtMfzZoojx8crGYMADv8c1cBD",
  "key14": "3ggyBN3KGcBnRKBTdZcKLzvjehSAuDx7pCyCUKMA4QreWnvDNzEZcntLiLwsKsixKF7p3hkPx3uCPMENY4ANRfoc",
  "key15": "66gj3EiTnPTSyPWseiUJ7tAmDqoxFStN9SHBtGpVtGiZVeZPpPaWUwg9ByLoZ92VSci3NPAJYD52hH18St3Hn3Fi",
  "key16": "2CqWdTyepsecL1pkMTPzmFD7neGHr8fe6UHLwfTDUYBU95iZuxcbdnZZCgSpmiXK769esaaQWiqc2uhiM34vgMTD",
  "key17": "PjXPiafADAs3xx8YzHHKJ8Fy7Eo1289WbxCyeBzUBrnw2t7nJW6PdTBNDLN8LbiZhVF2EWJ1kTFBoEMPKJxjQCf",
  "key18": "Kg9q48ScejG3KwEU6rMn1W2WpX7NB74iN8BWBuqDt5DTmf2s1op9msPBCTtAc2Vkm459wEPF8BbKQENJnPTeHgQ",
  "key19": "i1giFRy5R8uG5WRQWYqJddyevePnQjcJUVuDvBe17T9ug4iBJ79Wfs6H8Go53D5g4Y73aixozg7Uu5tnZ5nWiju",
  "key20": "5DEZbTjLUXMiZKSP7WnGgNDorPdg6FbDxAsVcsWtZN1kMVAvEhL7uVVQR2RziosyDmU8ZNnBjBkjE73WJ8YSX9GU",
  "key21": "5k5WPNQEqLjwXAFWEvjKHMWNXWYEuHwyKu1p9dZes1hB8iRwAsxKnaPYAFEChSiSUohhbR5GwTkgsbEvZo9djqWJ",
  "key22": "25ztF9RPXzziq13UqwsxpAERLxa3dnxkzbpEPFKPZDJvL8rKnyA7TvhEeL24sxK7tjVRNjHrK4Qw8og2HMnJCjWo",
  "key23": "4gqKRnpL5vvjJcYsRzdWE2tJELkyimBDwSNtRw5bfjBnXf1WyzpmxGMcXQwe8TB2Wd3AQZKuKMuK142pAGoikL71",
  "key24": "pcSgxThTgRCvKGLYafNBvbXp5Viv4X3waEzENUFJpEuDgptQURzPmKguUNCMP6Nfjy73VCRtd3oVKcLhWnfjqZZ",
  "key25": "4k5fy8M7qgUb56duKwyAQo4ftvT8Qeqe3Cw3ccvRUEnUEVDSFT8HCppF7KEfkDvq2GXJHtfaLYr1m8C1eVJeBbjm",
  "key26": "eSKEnPuNNTf3AQrXM7TJGBYMnTpk8Yqojdpf1F3t81AzXQtbqdHrEEK1tSko9oCtYE3DTtgje97B89rFrg9J7iY",
  "key27": "57kSoDHK6btYAUbwU25sZqtJgHdYkprHsqt8xbLsMcadFzpGEuY4sLStJ2h6Y8LwbuuUZDUENC9FzJMLbekpExWX",
  "key28": "5hFcoFioat7qT3VujFiixcrFzcchsmf7KENoz96mAPvS6kcLPYFBMSKHJvD6YWUkDs8tMJSGKAQX8QCi9n4dguUA",
  "key29": "319C2DdHRDXaeb6tuZA7aB3Jn6deJn3zcGWPxi4LRuj7z1MBPR9qcT822eW2nNpSdrFvJboYWHxN5AB8DmwtoG8M",
  "key30": "3s8Korho4SrRprpLQXqFSX8qDhEFypLziZv6dvVeHq57eNX6zjbcH44pNu9eETdhUx2NQFEDp9sMzE3Gs9HXmRy",
  "key31": "W3JpuU8ER916MtQBNKRTQh7achwxFLRjqoAeDQPk3K6ZG6pV9CcLMvSUCytTEhxqMbPk9ZmhRNmB16YLzKUvbeu",
  "key32": "2AZR5XQMzikK7SWpoAiycSdTftc5amJRSYbHgsLDtTBg7YTTkM9CHdMtrUKQeq4XUNp6j3vf1WmnRTdxQQ23M5s9",
  "key33": "5GTgNyZyFfgXVAKeK14AwiMkaXjeVqPh4xY1rQHEf1mALwDRff6VY2HRhurLbs4EDrgbzcNRrLUQjCpto8nPfnqZ",
  "key34": "4LrrCiWMPyfBW7cnD5FFDotT953hfMR8TWyfDRPos2NgoPyqEWa8U6asa9f6UcacK2VfdiMUgz7pXTZLy3ydJD6q",
  "key35": "5FboZXkux5Her9A6F2TGPQutShNG4ZNnUm6842PModHRfiNNzDBc5d5ne9jprkXTGhDdB2TNA46JjReRHX8JXgFB",
  "key36": "4WDjG76JYm9TcZwswRMnK3HP5J2Rc41vd8BAUzKjY9DYdPCYbv5g7MNh3zXX1YxTujnduHN4wZ6Byf7mYfK2DreP",
  "key37": "2biQ6wbmoq5osi9ViB7BXSetoCNf1ZMtGqBUBuPahfbBtnxxpQXemEoaEMdZU527RxMSrXKTxsH8cygzELhWMRVT",
  "key38": "2numf5R7y5aNYGmYyUrAuYb2DRf8tL85Mo19Lr6dHvfxZCedVnr5Qs9hbha6kubhoSs4h9CjJKpGvvuyu3VfdqWP",
  "key39": "5gAHuKAUgbLn7dSiBf52mqeXuzEdKQhSGxBGQdnY2NEdc8hi3mf38yXsyQq8KkjNBUrzCeErGt3kvTadhRAi35J1",
  "key40": "54hHTVhza2WmBkXVmkDdSmB4DDD1SYxjmhzp4yYZunzsZfLEU8A346Rryy4SYzBh76tSmVLMzSXx7eBG8bw2AaMU",
  "key41": "4ETrrCSCLC1mvKdWLKsPnMrJyQFuF3PFCUCUPuNj7FgRYPzkz3xTaXmLGqgUzwYp8CFo7KYuLPzM11Enyk2o13yq",
  "key42": "8n9c5rPAN3rg2X3v1DyVPBzSHwyBEx2ZhsvmsXRyz91EjvSG4vrfLsxqAumUacVFu9bVfCYArDV78FXucYeHaM9",
  "key43": "4DgVQC8hGoWRkD5X8wFGdakqdhoqthstQeA8o9L3LkDBdKNrSwJXLoFjKo4wfZS3PKrmTjethMpip1cYTRecwJXG",
  "key44": "4S3ojcWUhJ4kjrVZcXBa5AuNuQtjVpazPxx8YMn57ejjvbpTNqWaHVHDPYAr8X7BNWCV1TNo1999jfYfjmzUxt6U"
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
