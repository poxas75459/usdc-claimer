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
    "2sxzkooByusfwfkK7VCDuaMvo7JxpLUaAPNrvAF4a2CKZyjCehkmEjWcWQLArQdb5ZxUwpLWRDdfCd78tLdgmQZH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbDoMNR2skurXRCy2upn4umx7QNdPoVuV4XfBNDoVCPyP6VJeP3NomepkkwbT2qg6Yv5q3FhPbmUJtDbNGTyD24",
  "key1": "3AjftMzhAGs3aMhxVCA5kC6BZyrUh7fBPnVrqWnNhrRC8qSb8mbGmdCPDycWbEh1RDtfwqY1NQ3fNkh5PkVvQjHQ",
  "key2": "5VeARTUxhxMqvvL12x8vjemBBaUTWT37p8UaKGvvz7d9mHTvrFDwwgRGEq4T8UdjPToHCb6aw3BmfTUK1eVPEQcq",
  "key3": "2i712AxN4SE5mg3y8FYGmf4RYx5XWnLrtZoyQzMcVMkTZuc28CtTPwbNRHCEc8cJdKJ4L6JeLkeCQfzpTV4BZdZC",
  "key4": "4F8NzwNp9S4pRLhraN6BECNGLH3GzMYQ97Crds8tr3QwBLBarCEbLzMvUjsLUruiDFh37mJweoeRGSV8ddya1mSr",
  "key5": "33ZhgBuw7HPkBoHkm69Mp8gDHCioHYNHWbaA3VFFo5xf24TvTGho562a6RF5M62dRytmpZRUXK7KboAHvzF4LGaw",
  "key6": "5iRG6UainCB1AkQQSKpC5jZxCcXHq7qy8WLgpodXjMbJLix6iqnFnz9gRbtnPc5zn2C3SFWFA6jZ73B59ZeErS1T",
  "key7": "3ckVJduQmaQiREHvJ8y7Xu3M3srJo2p5ySWidEnAMKftkAAYdgFmh4QgFovYXBuQXyHHa63kCehPwYtrQtL6bz4d",
  "key8": "3yAnwxdNSYQtahXYMJAnFdnTWPpShzF8cCfFZFTaLH8VxHXenBRpAbryzZ9knuzxiS1Nvabsis6XCZ5UN8JLFh2P",
  "key9": "5P7K4RdfjVaJSYUynpZBQnNSuueMqbA8HffuEkAnhzg6VUeMT22MYmwaZe2fJW5RkoeuEP5UP13mgtZHWYn7ysG7",
  "key10": "5gKa9si9syjYduezQJAuSryWkEcjUimXN3hyqphU3hXEeySFA2NYs6hwsM4dLaxyiWsRQfVHrhcGPZVHs6QDgMXA",
  "key11": "2amUpXgkz1wSa5rTRz26o1mpiG6DWiFqDg1U8Nw57wu4g9EKxWYg8A3zX34mnxtrquHbzJmLLnXKne5RnZuDKmeN",
  "key12": "2S2PScVeUDzcvGsCjtZ5YNPu9PzQxX3AVWbvBcHhtP2iMPfodRuSxtvk9FdsAqoMsYYPFRwPiPUdyHrhTo5spQJ9",
  "key13": "4rQUSUTas7Nc7jsSsvzYwQMEdtijXxkhfaMQRH2BVkSXD6mFMB7HAWpUypKndoi27Psscup4JdCNErq15XwxeFsj",
  "key14": "3iFhNtKynnuh8GYMwJcWXAr2eWEnrsJgmWBPbAvoFrnXyFNGb8QsCLL1ajLQ5woe4J69mB9Dhz7aEZhNEUEX9YBp",
  "key15": "5ZAVAMkc1sVQRJHQqcnAmzaZxqkEmfS9BLe3rWdmPbUKxupbmA4UwFxYtV7RLVEVDvbf3ZDFpdiYsk1aVzfqKtmZ",
  "key16": "KsBwasVpvXzcX9GJ4e68ynvD7MYkSipXCrPyTdcr4WVMb9DPsMJMTFtwyp3ELoVuFVYRQEaJ3PyfyDqXLPKRoAL",
  "key17": "nBK3qhtpMHoV4cshBTZft1KvusMMLbBR2uFixw1q95x24PxUkrdTP5bmpuKYc89nFjqasdKApqzRYaehihW15Ap",
  "key18": "dxGD9k8g67q94Twu9AniXSgXEy23nLqu8AKoBHb8W54Jk9TWqFyp6EXwcCCiqRA3WLJTLaFYJCoZFgoN8CBpnHp",
  "key19": "M8CyLDA5bMzxuQmd52L69zaSFSQJtojJ5Z8esySvu8xvLmjt5h48SWb47LAV862MPZjKJpZ7yaccqfXWppsn936",
  "key20": "Fpwsk6PUi9yno6nfdv6PqWfweMQKmjeifKLDLM9aw9SdSAACUTba1vrrNbQn1Sh7WQpf5RYX7xADAmG15Y9WkxH",
  "key21": "5c1u88b7hYccV5e3d6yaq1npLdiBc1XsZx6Mvxx1nMvyi3AbV68kdzm8Cu5W36WZadZVtXoP29HgSrdZ1R8wnuGx",
  "key22": "2mMfRfN8fUEGfXAWY4WsLV5DMCbLP6RChGABRTgjyAD9yfEFgLHPDfH1xnFUwmrbGeayvi6xQx1UkbhqgDQwQFKX",
  "key23": "4KYYkPbVbRpaeEzmb6eGCkqLaPNA6R4s9pQibYh4V3MBjt8vQUDv8kbvmZutQfxMBsuoDVBandZMwx9LCyo5KFK5",
  "key24": "4a3m5m4wRdz6wVRyDUfzqTeYqSBY1MqY8jYbzaVnTZGfzW6esg4WdpZeVdmERoQvGHaevA3wdMEQhozBuRPzAAow",
  "key25": "3tVg2pohdLVAJs7xHp6RJnK1rWKqPibDspu1yVRtQAXQf4drRty8u9yHtPgiLutDwbAsycEHvfsWAPRinn4hVtne",
  "key26": "5k2qC8Z3zHngSnb4uPv1N1rLS2xwsAte4PqdJ5P2Q2JjQ9W6UtkhDy2KF2N3nwtGngdc9McZ168mDXjEqhGwwik6",
  "key27": "5EcUG285wmEVHuTerTpMS2Bt6SF2xsPjDM6VWnAVnL9MRHSy8SJF7gWr42fhDrYHsR5gAcrn9JX9GRZ6Takj7ZFC",
  "key28": "5JeBosiy3UpkWvaaFZu7kCjyJXxXPfvXMfEsjUBHDPJeKF4DqH4HyPCfuKTH9nZYX6u5p3Yho2avnhask3YiZpLK",
  "key29": "3zrgmazxEdhXXzKr58WycHdGXL17GiGpQSa4kzg8ez1N1voRTkoTAqB5Vx6Ey97wdsbX3wqdVU3w2w4pkr2xADoG",
  "key30": "2yMGT2VGL6Bxnz3PgvU5P5LvMJRgQyor7qviSUB3rA4TFz9eg7Ka3YBRy2rQFzhyFR4XTiYJQ9QevFZXvjShQ24s",
  "key31": "4MZpqe1X9kprLZ3jBe6PJRjeCJpx8eBctYWwZ5x6KjxTefU4XJaSHi2MhpuGJTBPZizRk3JgSLx9AKsqGDBCifSE",
  "key32": "853BqPU3EsmLGSWQscSc5Rte9stuKGFvNdGFUagm5YjesBHbcyk2tesCT4gi9tpawTKgs3wwyEpmHcvB4MnW3ZT",
  "key33": "Kxsc6f5jXzSAPPmKnU3PNa7ecSNxQ5x4riCugNTYo34McPbW8x5EyoRiWKqJJPaS1PpLop3GU6ixouqzcAv9hvk",
  "key34": "N6Hzrn4z1iBXx5ZGhgp4T4LMB1wqUoLvHPXeH4FdpbXt5XYUm49SpFjAiqg4oQ2wMDgVZtRk4aJbK9b4dkY9dUd",
  "key35": "5Y8xD3EM95HHzdzeAZjMTnKZbGmriebYqgnmGgrbRuzdyy3jTC4xWjhv8cdB59CE1dr78qjQzHX2Au699byVwMNH",
  "key36": "5zYR9UT4YfgZfAXkt6YGUYi7dRkmr2Z1nSdiWgar8ge8iFDvUahP65oVsimnpWvAxkBA9WPrRsCnPwgkpi67zoqd",
  "key37": "4jfvMdHtEchfrMvYVzAssjnUeH6ynUmEuhH6FRECzJdbyDYXKD9ShgfC9gXHSPFKPdixJCceB9UJaGLjPT2dQAUE",
  "key38": "suYFWtUBs5XZpDsV7s5uMZqGGgSX1Q2cwjKWDSkKR4kvgsvZdSWALxZLEVZSznsdwsDaP5xmeqpqFyaNqiBkbSg",
  "key39": "61Lv3DwNyBgVodX8xtXZXAbvrM3tGV2tUXxY4wadig3CPveNrsP4vJ1s22b2Ybyht5y9NWxjTp4fhVseSNrQvgdY",
  "key40": "3hiZmyQsdBax9y7v3fY7gfZs1jGGpdik9SB9MFLFsXNS3Zhu56rBFqYD1oVxh1PL2Eu9qG3wW49iHM6kVNQdNdUi",
  "key41": "5EgiKfMh4G7wXdWae2bQMR8TVCZb3GDnhfXZ6969C7jD917xezxe7nZ4zaXj4Z3cvhZLNVxtDkLjVGNpG88Ce2zv"
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
