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
    "2iXmi8dZ9AHJqK1t58ga5UaZHqeaa2ssiem1kfB7JFsFacadiYdhtmaBwHQrN5QL1hVB4zvdJgJiHTNkpeNzFXmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DbioK4VNqBkZvqqCiQXfvmzkCNJHAVXc2yPSuFq2wA1p9TL9gtg99exeakDoHaUdokJksA8R1uhyBvkrL2PaHRq",
  "key1": "ZfmFHZzWJYbNspFg4xXr6CtLGNwTm365JJKRPz6Mbt2dkcJy2eULUCxEuVq1QvfvewN57xw95859c3RDLg4qzwf",
  "key2": "3e59JYWn68JudJvncFnmkcY6MeQ4bU1GJu4aqw8BhfhXMSem6PmhwUGkM97wmqKPTVvDTbDCzoGkND2HBg99SMag",
  "key3": "3yUGsCk5Drg7TRNZYk83DhkaJ9s1aY8Lnj29nsacX6dcPw3pWu9ndnetjNtyEdQw62YDvBQ3oeDctMkannU6iwYG",
  "key4": "3m6LeZq52TgVtSMhkNjkb6bj7mK2BsT8YSdxATVj9gGFEB99SpPB1WawjGqXRziFQE7cFiJt3fWBre3GjLYaxLnE",
  "key5": "55fhSRTfXTT4bx5WEkauw8rpqRkWbWaCF2KjB6YcEhbaWpTuppHcNAGSVRFq9tPCw9xAwXVZeMDw3UnoeyTgjbAq",
  "key6": "2eein8Wh4TwuutnXWKz9LmqsWnp2Rz4KNSHhjK5YNW6fCkQFZDHWMzQ1h3h7VoePd2djvqZk76sjp9Er8rX4HYwP",
  "key7": "fxcX97zPSUcCC7bFTQA4BrFL21zNFV6bLArB76HBZ3WH2RQ1r6fjUaFGGE45bsn4tDdyLkUAj1N71ahz9Gbnt58",
  "key8": "kTN8ek6L94AfKKdukBStk6Vf4Ebpe1QXg3Rh2d52rw2ic6zn4z2aaPfVK3KGBiYjHDtVwBf2dPXhHB5GERaBuHz",
  "key9": "3LaowyW7ZjrdLwHqpBjW4b8zhZfQJFSZqbHUH3bfUPDnsqrwGLBbUpj9FFyHvjSUDGddny89HxZfGYXyGV8yUZ2D",
  "key10": "kLeWemGU6wvCz1oGT4dWNbkjNJuoAkSTLjoj1fjombVb2pFoVFAtabN21p8Jo6kbEfrdVsV37czuLvx5aQQYHBM",
  "key11": "4Hzbjod4yDx9d1doT6QV79xPJ68PGpGSBPpjAouw4W97J8nYzhTvXw5ZUUB28F3uZUhXY87BG5UQhiBFrg6BLPFW",
  "key12": "7bRRNj6s84JosAL7MYFy3EbBDsF6uGNK5MFnTR9eGpGneek54FSkaF3NDPH7Voe8hf91KbxVxXSavz9sHBzLnfK",
  "key13": "tTPaEczhz4xA8nKe1XY3KXc4cMBZqy2WVQ9X72dyaHCuo4NpLmkoSa57bdmaGsdv1Fp1YTVx736gghu8b6QCK5j",
  "key14": "5vs2e5tfsQxmRBtEsCBEZqe7m9XBKmE6bqCc6BxRmyZRrmxi2iU5A6zcQYDNCd5Vvv8gfTUhnXYKc2WToxgJG5c5",
  "key15": "8h6oj1KVXbnxpsXLJc8sqh1AqymuhGEhAP1pMFETJPo52cyiEyjgykqqNixteCqiqeGvBmUw5ZqNugkgFCvmzam",
  "key16": "2RtNnaWA3aXPmqYLTdBTnPDKZi9yonSbptE8J8YiUd2ZHaXLFfrW3u6rN5WNQXxL63hxRuwW64m8wBkzQR3vCH1z",
  "key17": "hBfWDie6z53BHT68vhHbn9udMyDiqQgVYcNoezeSVNtiyUCH6JUNsKHExDLGUp9A7SmRRakTa13A2gzYkpwsMx3",
  "key18": "4hafy7ex2KagiUzbaLPcsZn4XQvw1cZ7FRr1S1Xu5idhetNzhjqLrpRo4s22zvp9rWAoajdA1m8byy4huBvV6S2f",
  "key19": "2xRSc73UhaYNoHwidoNds8SUMoamciR5Bcksyy2Gm9HpNzn7wgEQHqQFg7nR4ZrwwwLm73dfFF11uef6jPMcxrQ2",
  "key20": "4XiCF7p8V1wQysf9BZJ4WewbhT6VEzm5EXxFQ7qufqejTVGoV5ATpWuC7pCy5uVGSVi7a8rmzSSB484k7SUPVJX2",
  "key21": "5anUWFLHbdv1kR8H4PKeHoENNnWJ5xYcoQefehmABt3FMK4SPbMVBhopD8uxtwDR1UniTHMk91sVKanAgSeiA8Ua",
  "key22": "3v3J2WveFHFXLBiCeb4dJwfqk7bi1StKVAUDRFkzFRyhWN8477m3nvQykEDcUgW746gGkFZNETYszUR5jqkgQSgi",
  "key23": "rVT6XDj9UoDvshpe5nEQk9TiJUcPWemdhHdtLgN19EqsMJAMb7GBeTaJXDNB8TXodvHjRFRbpEdAygDpNju5w3Y",
  "key24": "p2DEX36ybWGLub9m8hfNBhT4rbcxw8Vh894bSjXsKPT8eL6x8R3jGvx3XkG229Zw5pVrcudFXHaDneavS3kxjLB",
  "key25": "4E3nndwEEqcxDr3sbhxCLqw7VKvqAzzrouM12T3kX42XNK2XfZmaJuhUPniRGDZBqroBsQeh9At7xzhtJDMxvPmm",
  "key26": "5eb9T2fWHNcKiPWPZWE3Qdve94DPGBdy7RD4miUVpmndB5dXk99XfFK1bheH5PnVZ5JX53xPff4RmDgR1H3zMdFj",
  "key27": "azCjgKRtqGRxn23icLXMs4eUnKgw3N7WfgVJC79PniCVD1cpiNspHkz81X3j2jUGwHLrJXr6EJTmbncUwMaXQP9",
  "key28": "5xjwK9YNuDshZUhzFfr68p2ZvUEPg2AcAAnwWgVtZN4XqDKdNawNLdsdZKTdp94XY4787RfMQtuaSkXkJqhiaWpG",
  "key29": "31hzd32Hvs33QDbqmx3i8Z3p47Z1jgaZNncSk6W6tZwSYgBQihuRU2mhLKkpvoRuekTVuWyVQUvvMifzMsubGw8E",
  "key30": "42Cu3WQFnsgVrStCjdurc1pqTwHfmVoQRFxrWkd8YFXWrThqqTKBqxCHbv95WNZqzy9sVmDUsRQtES8H5fSzMiyi",
  "key31": "4oiodJGDnK3XgvV4ZKnZfzJokiZN8EjXh2JzaS6E2jqKBsvwKQYs9eHiVhgau7fH9FZ9Yn8sMFtgmJX2pjn3V9Vj",
  "key32": "4ekPAyGxhY628X69mx5qnBEAXxFsnUi6e6DxRhoozxpKF6kvuXiskF2CDKJhQGVJu8RW29Uebftb1MY9ziTY1dGD",
  "key33": "5bxKCXnvnRptj5QGYtvN3oUBGDne1cE6GEnkp9HoJjsdEvjxCCAdzFbCoUqjWDUbCkC3eBoGQzYTXsUWNueYYnj6",
  "key34": "4y296oVnSNeKmeuAEMJFgXUTHC93zUnvsrKPC1c2ArRKJDuS5RUzhMYqCUsXtujJ5TYYD5UPQmAs4qL2F7QhfTE",
  "key35": "348nKEc8oLmMWyF3dQjdpzFXoUU5GBVYNAzkiJSFZZhkCbGxjZyZ3LoJd4PAAasSTBA4R9RfCg1yf5T6LZs7pCVk",
  "key36": "CffBcaaqvdBK1wNndX2uqjymeXvtBECMqWV1okuF77VmPmV3fdKj4VyxxENMfkwKXaVvd5sfdceCwnMeDCthERx",
  "key37": "4u1PRZnJSC6SQntXLzpmZhaX1p4WCnCu6H1DTC68zLhpQytbQUS4jCEBBu8KaYAARcfs946MkK4fje4g6JsiccgQ",
  "key38": "4upzEwam4ki7mkgjoj6N6Hq5XtzvKGw3gBxFwuEPNiRMsxtrDpqoyvJAnnupSP6iezWMdevwyVu8Dr8sh4RahMcM",
  "key39": "2QXWrEbFAMeYTiS8jKTNohgannEJHdSA1wTqXKkiWiJF26oq3U2XraE2ZzGpdicMhCywPFF4i55xjZUNR5SC54tV",
  "key40": "5KH2o1BodWVWCmovPk1Ljf5FtMSmUh3jYNASARB9DvT4JuuH6s2WPH2vSu4P8Z8KvyrpyBdzmh8Di9dkbkWSX1kS",
  "key41": "2Kc84m3wd99ZjVroz8gXiB4b9HsE8DGHaGmnxgkDxPf38cJ2aQY9TvV1huVdZPGdpv24ffw3MgU4cX6nXrvHzPyH",
  "key42": "nBcPReNwSo8Nx3XJAjegtchkm1kciyYP2LRj3Mh8GMfJQZsjpZRee1KDcp8VLmwvRx8sSjFxi7j66wNz52he4du"
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
