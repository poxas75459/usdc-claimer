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
    "65G7sTqvLa8j3FLZPKy6NLioWcEFPpw2PdR4p6362o1A5A5EEUFF31pAAb9mpn9Bszp89M6fwy3meyYUdFPqxZrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8a2yKMmYdNhYRJifgbCBJiAmhqxp3xc2EhBhXygDqYsMeQBrUciw77SeaP6deRWpmN89NKaKLwn69qXvr8CbHj",
  "key1": "P7d1rdSWRst7btooUBLEvSn8pCVhxtxs136WxKybQQgbnvFMA7isk2LELYvZwWdLHHkkVquxuDsb646jNdfLJxn",
  "key2": "3sP3BYXduEp6qNBAe2Mhiok9zoRRgmmseGnCAeRxcfbZeXcMr3BWs17yWrryjQ8L2QZ49SBeefrFEfys6vQnwCUo",
  "key3": "4A5QfdYfAziHaJYKT2uwhykbyzuhvpCpNHV3TVSbVyq1BnyJVLgMRa9edV3KrgPKho8SL1ZK1umFYiW7dXpYrYSd",
  "key4": "3h1p9rxXaAxXyUKR2dCNNBAPBQKdUZxNMJmddEpQ3yP9QoQWcjFa2teGE6Pe4rDxRLFus8b8DsKJuGRUcZT1gTvv",
  "key5": "5R634jfxqjAdwskh2tzLr97cUgogqbTVtMebsfFjT6j36cGKBN9GRLS7er4BjRorVjEkXn8EP12ccUPyv4e4JHrp",
  "key6": "2YLAeRCMX4R1T1ef94RAtRwWhpBUSYvQoFRXrDrpM1DfBtYuh2xt3rpRzUCKiQyfnKHWNamXaXhDppXtQqXvEViw",
  "key7": "JTKhoc61Rtu8S7zkC1bi1HTNcn3qbi5ivhLL1f4fBsLHxvpw6mZeNCSboK8ETGtfrUCdPVVcfxRFYXBSVY8igP5",
  "key8": "3SJvt3S6vXWQ8dkc7LiY9EY6tgqQR5U2GCPe6RtWANEvLjUjruALekieT6Z5HBBesnbunVzDWW8nppMPNeKE6esC",
  "key9": "3gxcwu5DCrJEPGnZRS26WuJo1n7neDSg7wKG1QCRSvBrA3K5dx363crxEpJwNz6meSghxf76PD6wbppVCDWnvgiv",
  "key10": "4iCt2w6mpLCmZCWTqWDrPoyGezsZug75oGFpq1zNFhP86D9mdin5LfSbdb1Qu3MRBNWEop9XePWrtbLpHUFSgSbt",
  "key11": "z4LLjS3o2g9MQYUb4Vzt8BS4SfDdDqN7AqSWbAhFYpU1HMjPMthbvGxzTkwMcjwQeToFvnusZJjpRDqDtt3ujpf",
  "key12": "59fAqWx3V7NdErMxD9xfem9LDynLzKcYfmYi1Qjde2yCTLTceWVyVtesds2jo3VUphGUVRjjpv4Ryp7rbauviWRP",
  "key13": "2HqhozC7rRDdyvDbzqKsCxZP8yx59hHtNs6cd5Pkh4qsghGx7KFcYbDy7jkXAQgJRqyddu2MDcjmevtpBqqgy7Xy",
  "key14": "3b6yGpj9uiTtjgMME3TEWgSFdtuTF1Rg5BKHwkJc9gtXL1cNLx8eWvH7uQwAke2Xyto6EvwsoaaLwExQRKbCEZ7M",
  "key15": "259hxUWEbkZ8i88VXagSWhMNSMijUgFivS3Pf8AenzG4Wc8RbovJJ4qxCA1nrwJafukvKZCXkgLEnBgbaqUJWNAs",
  "key16": "mRupSjVYxcKSUpT927mjawomyjHiFGUzVhR68AaTLhp1iqYJmrvAHNQoSEQfBMGTr6ztyepp1uoBhHWGR1dVjVX",
  "key17": "cbJdo9Sv7LGWR9DpWytEiT3jtsAE7aUM4EMunaKQEBzABuUY7JcTwo7R4JjbsZRcuDEGpg3ZftAj7VECsScgoKY",
  "key18": "123DtmeWLbtJe8k8ErZkwbRGDnGH3cnM5tEyoAV7SQkdao8m5cNNMWrCwY22FJzFsRp6d16ghw4GXZjdB79FaS1g",
  "key19": "5snoG6DoBV6HVfyjzw5JShmELHm3eSN2kTqLXFjPsgfYa4ugTGQ2t6TQHGVPxciNQ9bthZYYy2HcE2nJnZubKBeb",
  "key20": "5RwZyWjjc5RDzEPQyAZWThqpLJ2kmAtd9Z7BJbtGRGtUva6qwFyim6jUscfYM271SpMwpaec4TYWZysM1Z199Hev",
  "key21": "5cV9D2hevL387P6AYNFbcYwfGM2XvQkJavjTGL3qFKTyYkY15C4dcqWRJqgFn7H3LWTyUSGF3cRYnjaPQZekqjdj",
  "key22": "5fcyKFHb8GHmqmAKzWHVJNT6aSahbzxTUdycCBJtS2xHB6MNP2oftXWoV7ePDMJ2JFczooBqQnRM4aPQJDiuhmn",
  "key23": "2HnxNKTtnWhTX7vpfVKzz24vLCMUaJt2dvqxB3abhEiwoF3UFXv469PQ21G5eSgTYNy6B4maEtqpmYQyYBwBH1Qc",
  "key24": "26Cwut7XEQTddNuVhd3bZKUmmrBvg8XK1w7ziXgMntcQZ4fxELMNB8ZPd6qo55NifUrEy2CydwnTRMYTHkUPmH5E",
  "key25": "25gyrKsyZwVFDDaepxLJ3sUxYDqyZJN2CahHLk4tXckvF4ZWrJvKpQcb1wMsFrzmuYdzgjQAazPSeepstBieBNFa",
  "key26": "2vcYWHMGFBfqGYoi96MqzeZaFk2TPPqNmde3KuPz3vmpVcT3xLP8dyojNswXFD6nWeyro6hSC4TyAJbAvN37Wonz",
  "key27": "4rUGxD3D6bYGHq9vvWhwc6jEaVGjftqLgxoXWxK8BGR6fy68f8V2Yh2FYksTRDPi9jowYWpY7HxCP4sfH7MN4rkc",
  "key28": "5HEVH38XmdrKCBuRiskHUB12FHHcboFdniPGWLNnzDgm82uxE3gjpE56pm4CK5CztK4Fp3v6PbgpLn5EutZAZ4qL",
  "key29": "SHxXGWHigioFHThFQG7b9kMQXNCR5GMdRAocCRPRBQW49G9kt8CKNpimoQDGttKyt5tVUUmshKuxmUJQdNUPEWH",
  "key30": "4idFRGrBJMwm76y1cbg6qp5ZC8U832JS7eMMvNZW7vVUpBguVkTptiVJx7mnCWD2Ntby7a5tyDwJdwxN1gSamgy9",
  "key31": "2m5HaEUKKSXKBGzQSCmvbwvovMDBb6xfJa2jLvxSKcJrbtJVy12UybWYzw4cYmDj1Kk7eS2WZM7vjjTPDyANk5sm",
  "key32": "3iT5isSg2KW7fTtwLht9EZ5G3G8wWnvsFqy84Vmwf7mwAgrgyGMpLCmzDRts5wKs4n57ohktFLE5PxF43PJiRmVk",
  "key33": "6Se4rC2voHMy5BKDhQgd4DLVutgksGSYJK2tfgNEmH24Jt9bkBNSgFUEh8n6dKjR9XiYerUAGf2W7yc3Mvr7mPR",
  "key34": "3P4wZzG9zoAqS98BLgaZmPMd7GuTxj8cj2AQKoexMhpmwYK5nLrS47HYnbrynv5pXXBzDH5SW5SN8nsXyfhcPVdd",
  "key35": "55hRskjFDeQDUvMXEep523yfn77TefuyELckELAQ7mPcQNBEr5bVs9vDXLK5uyx4LdFp66MRaZ9bRMQbje7qW7gW",
  "key36": "4PLZmUJVqgsbNX6vXhrPVeqT2N12qMzQ8a4wLK6FFJyiRpp6m9J4XMum2jcc8MyeMA9jJ2WsBAs8vnXEKpBqTvoc",
  "key37": "2hjxjvLPKPYec4FyprptaW3y9hZadcurPrL7MG59u6XjPb5WCGUP61NhoW9Z8gPRgtQaJuY7EKVVwSDZkxakqSx8",
  "key38": "5HPjkirJHhpqw2DMcCzwfLgHJF1CdHWq4xojT2pVPMve5QpbFQEDyaV1HL9GktB8cxVEx1aNXLNGCCKJBWhChcfo",
  "key39": "3RC4UCMpUfUMu9BkuYu8LhAFsBHQXWAY7uJgYJn4f2TGwhuAcKixBs4N2zY5PBNqCQfji4GrfXrF5cx3vYRqSWGB",
  "key40": "M1t738NrFe2RFsDgHBKm92s5SwUjbupe5wdmVXUKHKEVcQubpF2rVAdQFr8XG6TWodjzqECP784F3FLZUCYrEnZ",
  "key41": "3LcfHmv3ckvQf8BXHhswf1LbmoLbZh44eS3xYAgDeBBEAsWGGZP4dZ8Su7GHiAkux85Zam2oPhjmq1Nu22JST9R3",
  "key42": "5vfyXHp6TpvRwPa2Z8kLXoN98bbVyRBqL2vrNDnsPkVEPkLYtm7KJvkKWXyFTphGPdCXgzR1mwzaUVZhTEx6MNXY",
  "key43": "3ZBcxqr3ViKDHpxEbvPs3UsJ9aa8qT74ejYLDKiWDEeEAWGfYssDYgfuQtgZurvxwD3kWRuoBGEydtQBgoUQiPjr",
  "key44": "23QXbDiChGjmzw7nxr1vzUt5voZ8kQ1fCWXGotC56NrL1zCaa9ZbmHRa6UZezKHhtQUCLQrAfFd4w1yVLj4dQTRL",
  "key45": "65ZJ8CuMhrtqRYPiMfX7PGheamV1uzfbqKCXAoXgvJx42wRaAyiCn2Z5Zv3vEB5nuppQwAaudocUmyJKKbnUDvNS",
  "key46": "5JbcyimoRTXwWZnXjBgMypgYGhwpoFuGj5RxuYoqF1Sp57TRRWsDjzqurZT73aBCjpCJr7Vb2DcHF1mvtocZTiNq"
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
