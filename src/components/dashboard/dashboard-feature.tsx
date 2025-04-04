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
    "WmMoGVDWVMbEtjN7tbK1K6nPRRKEbJUTQ5xoTAkFcLv9gMiYoXmEBJtmjqPuvakga4w2dMFSxetN2yNfy1Q9Dnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUuMMjN2THmJVwriteNiX9pUJo9nZRStpGVV3CFuCrACVT8j3F7d8ughL27EhyXFuWA3xTcV59ZBExrPGwg5chY",
  "key1": "2rhc47UJVXoeu9w2967kDByLWEqPBfgLSFLiSSwFTdT57BuY9VvX9xbGsZ9eqeYx6QmaXLqeR727KHUKxy6EgSww",
  "key2": "4UBgX2KUjbVGeKruBL9fpM6YScWbQxJ2wtDEBEazMFbNHhXFo1EerufkmfH9gtrFpDLsJ5TqSLbaNVYdrsaaXWDw",
  "key3": "btdmjgSpj9dTy5duCfvBJNEmXjcjWXVeUEzGX17yEKAACG2HoENktymmXF3PMVuSuFw1P7W9zFoUaECAhTckcgs",
  "key4": "4avGJw1ZW6ofzV4hDF4DpuJHHBdFShC2JpXttZTBKAPoHFE8g38T1UfkKibqVV9KYgFPWEmvSMRi8oeVs3RM1H3E",
  "key5": "5vsKABca36ebtpVAhY2vdZbmWqJvpEfy8LHCU6Z2Q9zGMKFnMiiwW74A5SQEb6p9zXqKXyjCPEMqRM6AvDqvbNRo",
  "key6": "4DXkqg8vZcCEmuZNzGr8m3wnDrJte7d15AjDzSWocirkzyuKQycpKTGvNddNXkkxmUyf8VvrphzDJFLHPboX7rsB",
  "key7": "5j2Y9gTgFqq2ZF38UtP3wcx8PLn3jMgkCiUFieHU9jbLhmM8VybR6dda4T5bcchQa8646yhMfZonVT6PFwdh3gB9",
  "key8": "5poofQMCjWzqDaXZNoLtEn71yG9SevV7AcAYG5Q8KPZkKgeLUrqK4LF2mtSKxqf5PY8anK2RRCixQfMd6gkyrVxe",
  "key9": "xyhpzxNGLz5ukzt7c76FAwGyoHhbpqWWMsDZ3LyoC3SW1Q4tqKXUC46GML9L3JAX9xnqTufzPtDb3BA6rkkErJa",
  "key10": "4sWWWUFxVA7Xc2ZtKq5fJnk94LCbu7agfyk3CoGCzLjvwdawJxU1ABUBBykXX8ZEsyAq4CZoeC4LPpb56fJZLBsW",
  "key11": "8UmNWETGZKtGbWVWFvF1aEe1xYw1Ap67wRbgtrbxXucQuQaV23Zs3h9brYdJoafAJQzWt58CP3gbpsQ3951z2uq",
  "key12": "5tgB9mx5bFCRX6PLkiHb2pqbchSdSKVXB5abDoMKBFZbT2nx2TboaqD8GgjKjuLfYZcmSuKfkPmU41kbrN7pdqu3",
  "key13": "5GbAiuGtngo3k6G3nHUpXQ41u7sA2SKHygyzzD7YL3Nv2vcq1Bkq2ocNLyHnxJgNBDNxHX2pHy5HACxRxMbEjkac",
  "key14": "2o3ErX7x9myscHG8eCj719hetMSL94jdgnnon13TYDCSEm82ccocByX8ySyj6MBVmaKG2YDQhK4LFVTzga8wR271",
  "key15": "4AvHciMPyjxmt2raH9yHFerchWk2ZwBqyx5gwhh9TEu75t4aVk8XjMvcBvRvQrbc37ftjuPZ2kKEp3L5cx2mDxU8",
  "key16": "2ZFAMz8XgTuB4NvBow2Uya5UhSEkrjivLQ3qWAcTLA5yM7EzeMRxfaHaXPGczu137b6Q1tYkGPtNw8FFwox7fHkf",
  "key17": "X2Zvc1sQ73X4hPguDowWKtkSnW7JdN6xFyDQcKiMFjTh3hxJBRvBysG742eG9hugzk94TQU3sBXNVRdxHWKqaXk",
  "key18": "4MrphJm3Vd9rAUkNAEtd7w8EASrdoPvefCRBgRuBnxx5PcW78m2oPPcdjp9w1kc7AoiNPFbkqrtHcfAqW2ghiVrc",
  "key19": "61BAhPai9SPNrKLjUsg9wLGzWa3kKsKEJXoCQXv6fCZ87Jeh8prKoqA4W3xz2TusizQ7mPiKvTUGa9Qq7SvuyhBq",
  "key20": "41SQXTra7QjeSCALyHBBjo8iTLcJQpVt4ArMa2TWL8sgP8togQSB2pe4HaCehWKeQSXhVMFaNwoDznDy8ERFqmnY",
  "key21": "3g2nXuxmwyxg2yXsoi7a9eBKioFQvbTgyR7nXrvNYrTQ88az4998Hdpxgd11xi6nsZCeaKUPpQeEXc6jiGVJtfzs",
  "key22": "4wcRmqKd46unTzWX58TL22xmvbrvYjybNnhGZB2aibPWixWeVXhuTFJV7xWR2UCv3abTsmXS3NaMoWcSU2pgWwJd",
  "key23": "24Hw7X4HZU9pw6mThtTDLsMHMraTLnxJZ9yKPnET8nsAaPrnEGQyE2b8HqZjWa85946DGJFeDmaSAjScs7Jps9js",
  "key24": "uJgqbqVCD8QrkyzCJsMzhvAkTJg5gv3zY1X7gkRT4czfbbdZTNkN6tx4LA8PzwpMsNW8P8eUs66cAbWijYuTxSW",
  "key25": "3sZuH7pSuxygWPxK5eB6pHNVHwE35ByAaaNHUhgtj51Dtn4asn14FosDD2QNkqvzP6VkkPNgnbwXXLC8xsG7eaAt",
  "key26": "2mLzcAuez79zAm2DDX53kV2UjvekbmLNvdDjqZ15r2BFRCaV2tXSZKnbFy6FKeXCRttAucKwWiVt1oLx61r5zAaB",
  "key27": "3SCCyVSB73kBhSNg7neivctHMzLyetBaqKhLEAFGqs1yDEgH8RzPtEwNhnBH2CcDmxx6XEHw5u6jvbggTpDUWrE2",
  "key28": "4zxmoD4VJ6Sxn8sqkmnNFChVXeQwsptdxFVvwmgoorkUgw862YSTpPwzyF5RFz4SFScNYWHseck91A3NgV4iHvXU",
  "key29": "3oeaW6otyn14yGd8Y4HSeCoHhqryV4dDeaQb6A1yFUHvgLEueNgJayyNUfUvwkf7HNYAhUsQipaiYSnWnW3ACeDZ",
  "key30": "5cnebxVDVqyqKiDAsueoEYTTWFx4XHsyZYyY4UNCcxf1ka8CZpmF2STJ1vynGPH469ooHstDeRSwCF4R8yW8uXEw",
  "key31": "3poJdssYRtAjhR3cxZLaYuYbdLGXHtUrnUf8ktpmNevjL1zNewqwwbcoqLw5xPyLcoN9DAEUSccXwcEvemn2notZ",
  "key32": "2EaQ3FpSqBjfybDhdNXFey1DvkvRKyU3TGqZAUw8yQdhXJthGKLJuuNTkxcTB8znnYTnAX83UaWVhxUttR3PyDDK",
  "key33": "AWKm5KesE5Z8YdWt78MmTxGcmvokWAgUfbDGMwfnKUB61UZxxah87JYZD9feAK7mmgJxDSM2eea4n3zgrhWp1Ps",
  "key34": "4jCL4TKPY5LepTAYKcNCS3crNqKzDxrUw5j1ofSQcRydWK3j6n8VhXQNLSdAgJQPAcMMbBYTBBvmuUAuMHzosaMc",
  "key35": "51hNrmUTZuJiT7192Qoqh3u9h5seFuKQW6vKY7TbQAkaQuQ54QbRXhBf1B3RrcwxtpZ6ft4Xzvnt842Z8riJKytU",
  "key36": "24KBNcEkyFsu8u125ZEDmU2shR5GehdJk2h31ToKVdLhxNGs5caveQ8TKAMGtAZzGdmssgSnziruyoXZkP98X4GN",
  "key37": "2ujBcTXWfGxpLPaRBkWvswSeZTWcsA1DaGfS3mNfzrmMnJF7FD2CkyhW4JFc1kQAE5jUTD4gMusW7LZD3ptZSFjV",
  "key38": "2QEtmJaWvZQLq1yTX5HT8PaBZG3d6tmodtxRm9Hq2EreTpW1UxGUdS2qvmQrWq5fGg537kTV78PSgLmn8sm3cJoc",
  "key39": "5S924U9EPucLttsdA5AmoFhsdddPcZJBjmjDciy52k4UMxegUVgwaAtccQqdecEDSRMXYCJf2JLPYMExezE1hrsL",
  "key40": "4yNh8uWpB6GDnrgUSHE6VtEXAMGC4SpQA3itWPzxyibDJxbAiirHs8X6866rVRvWJ6rJCJccrAd5iiGdAJZtq6t7"
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
