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
    "2iSNJtq3su1PDp9AArwnGqwhTNgvMkV4jFCwLpPFEtNopYfMPX3mDXuXCTrfRaodapz9Jqmw8fHZ5TWxsufsaNf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdWTFMtqxknnxfH9D7rfjzN64aBumz2spsgGkqLt8uYhR9xAsKNQyupP7JFK9yaVDVVoLBfQb7kpwSbirvqiXQn",
  "key1": "EuxRvXGXqmQVzvwTz2V7ay4ZFmGZst3QJHX9WGR6kANohEABzTK7kVhWt7UCDUwk79pMBRNqUAcaXcn7KoVvKKn",
  "key2": "3gXZy5J6Q1re5V6i8K7rwB3H6B45o5eHasXi3Dmb2rvqeVBKnWx55esbh1ZUnbhPbksW2rHHUvT65F6kCZXDQH2T",
  "key3": "33btBa4LrCvkry3cxJ2S6fXBDMKeiJxn9VwxytzVCsbbxciccvUJAM5tbMBgkTGko6truHkCDbisSBX4M1VKHwbh",
  "key4": "43GvrdtpSnXdaPtHd2HRnAJu9HSPtVbRiXL5Rfngwd42taeFLzjJAtaVt8iMRGxQwXQFt7iZi8cvDTi2n8J7sf9Z",
  "key5": "EjmswhMxoTUdU4WL1PcyK62kQ1WyRQznrnn61eGYChLDuaP9p7hvgCUcJiye5n9zkfpHT4NEwECik3eXEzThGhp",
  "key6": "2o4P4yQdrv1N2H5Qr47eUfrMDDJMqbqmC2iogvskihAVQLYSjiAkcHnnrogYbNvGNt4ab5PeXYA4iGaCnxFe8o7N",
  "key7": "4nSKweMoaoo89QnUQFTh4v9zdub1Bfa5HisEVeQCosWM5182xLdBpe2vTt7q1TLkhP6hacJnb66QQMvWpLLB54h3",
  "key8": "3gSE2368p5dkdjSAxqQXjvEQGXW7hG5JaaADtHNrtvBRfGkX9aVwLk9WhRYC5cmmc78mAnaeSJs91qmivhPrL9eF",
  "key9": "4XiPBCHJs4o8o71nJZuzEQX7kqCYNdpzLkm32yvw3jdadFhzaiRzk13KZgJaL9Vk8sH1SBaossdKA3fg1umrEjqL",
  "key10": "2YVRkgj6jTMsyKJQqXEsxn4s7aN14Tai3NzrLqt1euwquTuk41fMWVTMtQEkfkNWVg5djNcpTfHvanb4cj4ESRWh",
  "key11": "4LdU4J7qiVWD8Nw5M3Z4KUyknQzpbS93Z8a1ZFqWGWLfnaHoURTB4PWtsNRLeTskhEEeJ7MSFKgbJpkHS4Hj8Qaw",
  "key12": "3NKgJ6ms1RLzDohCfTMog3EDBVUDp4jgxgcwVPmYkx6sWRoQFNcSyZQQxjCLT8yr4MeWzBEo5tctAAps9jwBbc2y",
  "key13": "66AaXAFAfnE8W69W4XuBjZU57C12NhVPC9qTA8iqoQrGwGCZzfLrjPWZd7FUdLt6NuhSJuCqTuJB9jycYqZ6y843",
  "key14": "2pzXjuuZyiAAPnqjft7RLMbBaJ9BFBK9TCntBED8TPs5BEJrcDcWgnB1ZvWEhrhnTZhB8Aq98qA1p5zBJte5HH3W",
  "key15": "t2pBNMdAS3Erk1b6zsJgERnCWendK9qfrqWUTsZGXYcct7qtXx6RgBx4pz93VKBJd3y5GXEc1ms2quz4yd4QUgY",
  "key16": "66MbLXFjPgFTdXN6Ww6RQBtfATxizaKQAoKjFEYf2m1en9qCYLB32GpwtrHodiAnMeiNY6ST4QMWo6pvJ7YuDTmS",
  "key17": "3eEASWTiYip7SqFXshcozoeotGkHW4SpYAHJ9jjwGA1B2WJZVUna3p5fo9DaECAc3oVTn28T9XPnBK4mumhTktTf",
  "key18": "UgSVM7C227Huep6B12A4btNTnqs5D4zXtyFi4tBf1dAJEgaWX8PejSxpqBQ6RSQqpNyUHuPh7h99pYYxHzqUuYp",
  "key19": "3npRJ4wjXeH3VDzM9aFxXR7wMhZ9KRzZqC3Vo6nMQy1zn7rHhnMabtw36dGxSg1Cn2docxUkCZfx6DoQzPH3Gtgm",
  "key20": "5chiKrJo7jkMZHMZCKnSKY11nqwVN3jx3FvFx6z5VD2EVGEbefnsA8Ge5ZkVncoV5nf1pw1UQsdCqgLgMzjSmypr",
  "key21": "2opVXcTnXvHS3XM2rwv4k8uWiPowvShziphj6RL2uEozro5okqF2MnyPWGfwFKz8ujAodXDY2fEWiFnjULxU6xU2",
  "key22": "UTMbd57EGhpBQPjpgDRc5Q1ENdTxHqGrWpgY6ZA3kk9uJhfG3R1QLGPNqcWZ8VZS319KM2LPrkoHzPFJhG2yujw",
  "key23": "5TZwUBWS99y3dKk2JsX6gmFBLWqMAoYdCRFU5tz39gDCSkJJDWvF7bh2Qr6Rq3pRk7dCKyTLi7B6rZWcAMhqfxSE",
  "key24": "3mE8WwgLfucDULyhURNvD9jHaLxDpooaxDy4rcvSN1ahRim2dP88uLAt5sp9A1aBWAC6SpQuZakWEbvQDnscsqQF",
  "key25": "3sn25MRXygPqoSXpm6cZYLdTkWosesr2PFPi28ZAhqp3pESp6sRqNKEjxQXtW5vnQ4GD4wYKn4Az2LyiM5pxMQMY",
  "key26": "TZDPTAWjfByQdNdPdYymWFYG6NPn4C9VUNZox9HpJy8BHk6oTQ2DqvzP9D3zXkcbW5qJ1rbciDjx3Y6H2fpf2Ev",
  "key27": "5aD2A85iJi7cK72r86ZbVG59TEZ4Aus4ZbrG8YmUCupE9dzijUqdpKaEyz3BQJvmFPZ3vku2Q4JcgVdFqRSoM9qC",
  "key28": "6ik47NGgCmeZFztMaR7SmPnNbLr5hzfuTv4Jo5pEjhWeR2ec7RtenW3sejC7DMWKxoobuuoNnPBQLCEjJXMngTr",
  "key29": "28bQvSNSv1KLjn6pVUz8x5eJtZdSWVEh2DQ8JzSbpSE366wBKRkyVkNf318CxBEWLeDfV9Jd4RSppKi1gBMxtsGr",
  "key30": "4U62c4AuqLC1zBgUrzkb9aSPTXrNA1jKznQU7DcdiZPuxGvF79Ld3EbVu6kJicvKRWQMe2CcgQTo8BFx6aWVEL7B",
  "key31": "4MfKjo4AnRRGSixZNwvSPVLCXesx7FY6cpva1LQjxXYnsuq77QiLQw73ZkVYvN5xZVQqz9rGq3VAKjLhMzY5VvoL",
  "key32": "5zWZNW35foMzRcQtAvgfyWYnUvsDLzf8zKdUYUnkanzPNrd3Cppcm2jAvPsYBKUtQkL8engd7UGYwytJoDnDKTzk",
  "key33": "QzMgvhiE1S81Nyt9jV1dR8EFaeSKebSZjogTcpAP25UNHYXvuBfY2PmusQ6dGF1hLBajBmtXSC8YxvrMo5h9CKb",
  "key34": "3QJtK8FrgLbVw9YjCXy3Rq48nTiAHT7cV4GFjZgoeDZUHEmYcq9kCnguFdjLqdtBAbD791RoLgqJKeAgSDE6Hvw9",
  "key35": "5fHq6Nuz7Lrqoc7rQgFBQFFocyFcTN2Rw54YZnEsVBqXxXymmQuMShAdeHQ5Mgp2Ez5viaBzC5KW2L773cjmTb9f",
  "key36": "4Hq5jG2ufjQWBXhFRYukTxgzoQ5qo5KZqNnAV6swQfNxrpmy2yiJ3XDojSMdYXWmCXp8XYm8ZvKjLBxF8WHFftkr",
  "key37": "2idmTyhVccVYZgBi1Pb4NQ3UoGiaZ8E9tfFQGndWasPjkxTCkHcGkwLo7hv76A2VYohqgJv4a43Q7ySgvwFY1AsT",
  "key38": "3FRSfm8oUTsebfFEmTKhEsZ1Tbtpzmvzyr2QF56DbmmSNfApNmiEy4XEVi2v3eNcb5pmULXrQZfacm5yeRpqgTJ9",
  "key39": "aznjizuRDhWKPaXNAiU4LM3vh7R1YmHUEiig6jDxjT6P937K3bJSvuBxbgVRJqc7vvCMjrmznhPCcnDWpW6TySk"
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
