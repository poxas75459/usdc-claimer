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
    "4uBaSsnCXYKzGroSsNTa6tZEhL1pqbAPM6Q4uACCHR1YRN83ZjAMWPHbNk9ppX16wwG2moCECuYg5qFGnZYipn85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdYJ3Qhgqv3Xvf9cwViwDJqVi6Ykg6VdYz1nnzee78SmHGJX8s5taLiqKnGgUEa8YCdyphoLoZ3aSu7RPbFLmPo",
  "key1": "2hRQQniRainGrKB9X2aKsR6hnrKcxNaEF5YkxupxXBeD9rszWtZFhK5WoTVntPPqn8BgWDFgK8JzG42TTxwU9xG8",
  "key2": "3bUPKUf6NBE9PqmcCLgCeG1P7suNKVQ9Y7jjhadcGeTDzqBnnaQRhbxiUAvMjgmEn8DKLtYeywvNRvHFugsMCQF3",
  "key3": "2jpF3n1PSN4zHR8E556yfL9UGR3UsShN8yNkEdk7a8o1dX6h4FdBMkRTpWYvAgL9AstsqUfQGTVekf9gzD4p5r9o",
  "key4": "8vBFZKbuq7WogR2TiRT43Y9AY5yjQqQnL3xsVbSHmDhrispaiJ1k3GDD68NFcUBrudciRyEEDxokRjffXk4gPYd",
  "key5": "5Ub2SWScckQZpMfyCnQfbPGC69o63rVUvPf1w2K5sNe87pEbfk4y5qnda5QsufvQM1LC26Eu6JiVbDvnzH4Ecmwc",
  "key6": "4JfZTH8Cvx9J43Rb9XFJk18XCnynbkbwL9GX9qVksCvV2iSCB7Bfu4QxmoFY45MSXRSYTiAeUmaJuBS57UAwMqBC",
  "key7": "5WANJpw9jBt91wVsaZo7f2JkWKLaR7mJZ2GAes6Ynr5NYKu8sQMTjm8E9zeo8BBxPcUAXnhjcxi7vFzmfTnu88Ko",
  "key8": "5RLobTN4WCS8rKfEitAsAoDUWouhcCkmd7StVh6gWPN4UczMFa3gyaL9JzRqN94xDdtj63cbtFZpn1U5UJTGMvtL",
  "key9": "N12o2XGtbg9mw8QYZv7AWTsn3gusGF2oEpH2hSq8C2jNVGRnbH6SRvHJQSMtTQgjeoneoipysAYK1HfXrCbGwA1",
  "key10": "5m9sAvu6mnNJcWaeZ9RivMByuFuDrJCcucta835FPZ8ih69zux4FqP4cdvjGD6EiWVrHRR5h8TLeaAvvEqnTFjnF",
  "key11": "2A9CcLmtw9QonuPwNqGVMLvE7YNYbd36u4uGbkmNimKnbbiZKqMYVw6WBkFDqiDW6hRjAsp2dRhApwztC5EUU1nd",
  "key12": "3utyXqKMi8erWoSeVyey7Bq3w3Y7t71jH3snyuxg57NJrZNCuiwUdXiox2g5Scsp5bQSBzhjBcbFDbmNLzahtW2a",
  "key13": "3LPGrDkdG8svCwcUxkNvzmFpfesmGYHSGm2rJ2CSpJYEjv8MbELbt5UkU5s8WmUBAAMvVoj4f68B533LJgkxkxf7",
  "key14": "3AygV4naite4fzup1yQwWMEvb8DNxUeHMY8wsGQ1zk5ocAufT1TDTG6VjSRoKKfUKUzxUL3wBy48Yi2xMDcVuF4m",
  "key15": "AT9Q8h73if7DresoAKx34uXig7iHcTJLNupqrJvMeEXx5PsbumyXd6k3B1FQo616XWyuaW2kexAAgri9qz6D47r",
  "key16": "3U9HKTktPq1H5VmEhdXi9XRqavH4FfavvDTCM3aS6y2WyLoDaJ5SGizMHwFZvcuDDMFArSgEPUNcUCDFTmZCNF7r",
  "key17": "66ULYBE52rnSBjPXEfDQn19tQ2tntvxuymBPxtsZt2gtLy3k6YfWH34ZwiHue5H7BcCCvp1qMvuACp6PL8ShwHa2",
  "key18": "2i82iYdZVvoL5XUdSBENDXRQz6njsALpW6ts15MzhG6sU7BohKb6kquLopJ8JpAdHfkRmcwVRKPEESVeQRx3Y81T",
  "key19": "2q2VTixe38GQLhSrPwApvgNd8SdtHXnDP7qDg9KxMpJKCRtB8wVfP4cpvFznKEzpnopinnMhj38bgFxt6aFe38Z4",
  "key20": "4LewQrvC4FEC4xSuq3FCU1soVEsYb38mqNg9N1gtwwnYWjf4kxbEFMH6nnhfYdi3ggZdNpsgd15fpRmxNHMrCD17",
  "key21": "58EuPbdM6csAmMezE1QnRECyR7zP5qVjM6K3ZNY2rVzFbjhJ2gyPw9HuW2ZxVFPyMDxLHcoPAFZFB7NnvZk4H5Vo",
  "key22": "5V9dnoMKQULzh9pjvxpSDV2ys7mRQfB8SSxiFb6N8rCgWTytMZ4WsZLt4jmJrrSs8ij5GRKPZ6KQa3ecxByupxXU",
  "key23": "3uVH4jXzkN2p7QMGRXRLQuz3NMeu69uciyGjh1rxJXvGTp8bgVWeBTdKemrgBhhWDeeB42K32HicoSs8yQEx6yyi",
  "key24": "JT9E1saTeoYep4sMNy1saBo2MEn5HnnEP1rJesWobcCC2BpBYVppbfjr78N9zm4sRumnrVyyYXJxX1CT5SBZXYZ",
  "key25": "5DDRKo2TgH45EBGjUJGAuMR6L31kv1SgftHiRug92X6FnVKFQSFasXNRrFm4SgjfhXt7gonVGvtW18sf8D4U2hhz",
  "key26": "5S1M7fSzTJwHAgZDUx7B1AEMTLKPnjqG35oLTBWkb9Mm4izmNmpuWrjmzyjvUBWbtCKu49RvCzxBeK5EMYvJpgLn",
  "key27": "5NxmmuuyfrttAKkqfaQjegCTiocT4iMTVNBeeAhTmVb2LQnvLzMnaDPGfe68Gq1z7gh38uhBd34xMdf8wmDpzWuX",
  "key28": "4nfbVvwKpWixB16qSJGKSLp1kfkr6qcKsDiu5jtvsmYvTGghuLYuuiHdt4zWX5RvnVkMZ5MaXSgcnFR2QR1HkJy3",
  "key29": "4iZRT4VQUEWvsjecuoiwwUGPxYbbZ6STL5JqvSJwBHtxmGecTiQ2govswNJMnerGuX2ZWcLjV8J6Lnh7XVcPffsq",
  "key30": "2SqpsFNmrooTn7NqPrihZXFRAqmRtGc8haTPCczbaLgMdtDfVX2tWp7BomKQso6an3thg1e1Ws16v5W6BenSsLBz",
  "key31": "s8jrKpX5Rcpes2uksojsP9YLsGtDm7GxmNjJJJV9wR12y1jMeD1B1LgyVT4HrjACnMVnoMY3i3isEwHcuY8P1oA",
  "key32": "5nNB5x2jGHgF4dypC1f9C78WRNUKuxTXredfrvwuoVr6KuTrN6zUHbJYZbSq4MFKVpHqAU8CvezHWythr1udeYep",
  "key33": "4cYv16JtC29otjuFvJU2oZiJZA4RALkh6CVN1T6aQkjwrN4XKoxd3KAobLQmVNjZ25PBNawGmgyZCAaFLPyE5oCS",
  "key34": "4a4FXqPPiZW4obt3ZuwhymdqnF5Egi5CT2gJmuo9aV2MT7cojdXQe3enjBY2t2yZPobsemKXY21w5nKnSwbsrk9v",
  "key35": "3qgq23cGBMaekUSKdH8otv8x8ShpDR9jsH1tRQdkjo6rdvEnT9DF8N1T3U2DXjWHeWCJ3eGCDRegtaxoR7ddjQrQ",
  "key36": "121neonoYTgr7TcbhHWZNpLpF9AQqXR4JfpD8J183fV3Srx6G1NRaHeVNVzNJg5uheQRsXwYxmibfndUyhHRJxJw",
  "key37": "2pqvcpgDqR7gHn7yzCf7BYEvTQPJbpZ2qYz12MCrkWrcUhSJUJK3ykdUGXcNjp7n2BigAtWRuMmLT9W7sFJK4Xzn",
  "key38": "2o8hz7znDpdQAZ6YAK11uMRGLGdbbN1ReSdb5NbDm7ZywnUXjNsGc8Q2KTCcP3BNvxKWjQeYCfu3LfWwKfg6EGDX",
  "key39": "2rwJQRRpxLWLWoYT5TtvrzbWtrQuVxX9jRUZfPehVCSV7QYrojQBTBPCKNeTkFupUBG6RMyqyfnK9BFe3HTQ6ssD",
  "key40": "2JE2M8oE1zBKPYHYbKaddC3oQZHRzmPHmypMYnCqkz2Wvst9w6ZAmXudrAiVs41jyogZBgACVdymrKrFaLFRAzec",
  "key41": "3hE442yKwTna6eFAbm5FToV62XbbAq33kqyXpE4DCy3Ruq3rurJhtBaokPuks1n6jg2JUf6wjVNPRsraRSzjxZAU",
  "key42": "332mvjKM2VArAbr46qsUKfatxYCR87RVwwVwtCYdU2eWqSSdxFuG5wj7gijPvq3vsK5QRCe57DcKiTM1ky2wASFx",
  "key43": "JoKfhQr7pBMt6jZK52eT1Zt9m57PyoXirLZaDmj2z1EarkLTKG6ZvuHuJCwuLiB8G4KQfgP2J1uHfHRdxECZ1Af",
  "key44": "21KS3trBmgqsr8xNpYtUBgQm47qoLj6voNjjEgapqK9zNqnMaUPFRMCgkwJKbHQGR21bNhyjDjufAohFPqpMaF5G",
  "key45": "2Mz2VysK9rQW7o8SbEVJqbjcxWye7ya9ARJsxhPqii1ZzLd5Hgx3DbbgUSLfxHs58i3rsDdBUg1nXmfXWAyPWGuY",
  "key46": "2MG48VhYqXK55xSLTMEj4KzEph56rKBEdRyqjadLY9F28t45Jj3CVoCWAcwjecTuAwHvStZfr8ii5EuGKiQYfK1M"
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
