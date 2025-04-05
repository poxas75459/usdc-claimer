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
    "4pcLD4PZGesy4hHvbS2MWP9jRm7tWrtk7JbbRrgUL2UuDgDJQet3JGiVtvAU6FwG9yNBVeYdj8cYXXzXZvXz8GKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDwCa4L3TBP5UxT6ajcv3XkK4e7KQGpiTs6ktGD5CfPbuAJHX68JPB6Yt1mdxLkjnWSLFrTzKViKxNU2q6sEPEn",
  "key1": "476SZt328qoQj8JV317BNYrdktjHUX2ecd33e12gH8KLSHf52VzYdM3KcFTGm75FFSZgvUSfhznJ1QnPMH5MVjpb",
  "key2": "52TSboYEArEbTPzwgAU4umqEveMMnBDtBdiZh18DFqQpaiusXT46jASHTgXpo5fZ7QWWswdKLu9j5Cyz1oxUEaxM",
  "key3": "4J77ES9F1By2fUGUEGTjih4AU7kxeJdLaT7qF75d4HE2RMAku4hmrfakbeU624S5whj9hGxT9GXgJ1zJHfyqiFvq",
  "key4": "4aD8fY8Fxu2rbW7pVTDR228BK2PwhgPkugZYndUSSPe749WM3aPWT5VtEjW7QwdaHaijbN9iECicKtyEMVey2rwp",
  "key5": "3M7YaYb6KNabjzCDjiMH3ZZsB1tk4qu76A4WaDEac2dk4xgZQC1DSsDHs6t9hjerK3ymNWDRSDcrEDpnn2NJAtmv",
  "key6": "RJDTKerpLqKsPHq96KVJpFFTncFrKo9hFPXFeWkL4i8AJ8WtjnhtvwJg5VqJWY7gb9Ghrg4YKf3u4tceLJ5YRzc",
  "key7": "uEjBKqzJXJ1TscqFCNNfKtsAk4z8UrnGU2c1QxQwjLnA1KDaSw4WAZ8LtVgP5joMD8gFrJtmr4StEdfVg922Mf5",
  "key8": "bGizruKPwBbzoDM3ondGMFedJbGrpMofKsPQsdvrSEzM2AhADjfCjiGDtiKuCeW6Jxuy6ASath2emRQVcMzw5zh",
  "key9": "5jwRM3Uu5TSmZxeC8Dd6pK8tJar5EuPmn2f5eLfBT3goNvr1kzLsp4D8s825NRNb7BfLq5J8qfV4nsdbsouykLhw",
  "key10": "39N3ZEWyLioWuYMYF79XJxAzLFHK2gVL3bPdsf3A43CKv8dHLfT3TtyjnQ8WmDqpV85GGAZTbkUAzUVgvYhBp9v4",
  "key11": "5Soi8QRnWAzUYdLyFszEopyMhhrfTHisNd8jxwp5TkMd9K9yEFzdAaCZ8wAVYB1cTJHA1yRWs21bRrY8yyLXfZ6a",
  "key12": "5hUnrnXXfvKjpyLZ88fdG8JUYfAiN8w9mtDqzJgd4ToBUFUw74QkUL3SffCSoQqyYMAxvgDdJCVAJMvA3qehhif6",
  "key13": "3arDmhXMivTuVXNxpxXPKUfVLxMeui3u5PrcvNe95DMsW91eXjCrtnFZXYC4bxVR13v1G5DFRfH5LiFREMjrYozh",
  "key14": "PnS2xkCXnkUJGUCkDTTH81KjymB7QuxWiHR2ijrWhziGAsu8yKZk9SDDpokk9iFujCnvxuweW3gorTKMtwUJpun",
  "key15": "uxmSpu7yQd8N9s83ru5TMF376sERcUmbQvcPHyspV4bdK2saGqy88aUxtYPeWcxEoFTRGknYEJr6ix7Gf1VXyjS",
  "key16": "3cnfTob55GNJTPRmM5bskiQn1UAwvMKCwYxQB4Z5secq23UicZL9xz1SzCHyGMaRMURAGCQ1MsqHf8DLwDkZ2zvo",
  "key17": "5nFih3DjofCrLSWaN9c1MwesT1dcTWUmDkzpbHfc1yPxEzmURbjGyEGNXgsD8d4Shwmv8cTYQmhEKPhtsw9u7C1J",
  "key18": "3Qq2RGU1RQb7u3Uwv8AjWJ5pdMUi1NDmXFCNEgztRnmp3PzjfEfygVd11cMmxwhHLsxmpEtKqU1qTqcCq1FPjRwV",
  "key19": "2iS9D6rXNVvG5DjDaVtzxKGuydBAWWRgNJCwyfYuWBvkuFEmXrUnpF9TiNXCMUuP64qiB16we3tgfUkezZtHrT1S",
  "key20": "2j1xjsGN8jawcwoB3FmzAiVNEMxENYrT6kDGA6ht56ofwMUVcwbQiXJiYtr4d9cek9azFi9DvT9Ui3qSePMvHQnr",
  "key21": "2RTTPp29oo1pExreft9qaBiYs8USjqQFZvqwV4TKRfLfC9DTGBWGwfoN8ARpseE2GewShFkjRFyankvw7CVRGcNR",
  "key22": "4qCKyG84Tv3Fo9FPxQAxzYcB59fJqr6uuftt81SuEfyD8Jr3m1jMZqavQdg33vp1Kye6bXJRtuZdfNr68f9joBvU",
  "key23": "2Swp9B8d8dTQ6FdAGbDdSeMnRnd2NvQhn3bA6nbvryaBBsZiMydW6ZvKiNnK5RGGJ5wLj3vrNfpGRre268VNZ7X6",
  "key24": "mZX4Emi1qpVMuDTrqd7KqFbbC3mVuVqHtHmX8L8QznM2Joh1H8pHwL5irnXEPanadnVxdsv7qYaVyZi2BJfYBeE",
  "key25": "2f91Q2QxrLyeyUcio1Zpup9yuwGkWUoAe12v4LSap91bg26rFqFtYyuK165CwWDADXsmALoQM8n54GkvrKy2Ncd7",
  "key26": "33Ly8oTMAWoMGbJXtbzmJTLCuZy7g8mHoa7CshGHzixt9tADfrPmGWRXJd8Fe77LbWZm4Tu5VHFGcgPKfj4dnNAF",
  "key27": "KMAvvNB9EhQyeW49qWia3AENDyDW2JF4nMS8VPPcj5pQC45hd92dMWh5iVSTQv1RkTrWZbmBMQa5ZASBT8QXZJr",
  "key28": "DctJL3nNnfeuNzMFQWCktnCWAnVoEomsDj1HTuLQJk8Ks5fnJg6xpo9YhxqZUy1THfo8Q7VrJrua6SDLx33fqY1",
  "key29": "3UEHqp5WEfCBjJfA9Pqt2EksgkAKmRMPcvt7byh293F63DoyCWpUP5VCzxmLkrcmqMrunQRKm4SMUofd5tnvX3Yo",
  "key30": "HcLJktU6CBurcsFUkgDPDqSJohn4qUcUnheoniccksUuU2WndAbsvxLW4CvbG6iJw5txpbZUDd2KESrPB1jYmPf",
  "key31": "4jrbjQShutw8bxXKR4Hxoz8mgAhoXTpU6a24eKAmAycoRZyebQuKmAZ1Hn9ExumZc2Bur1yYiKx4NKC1g4kTPX9S",
  "key32": "ZDUg35cEwAvrPRWi9Tqafsu7effnJYSxf5Q8dYqbpxxBP67znBGptoVtpZmN2VLJSuupZAKEGCqcXvSqkyGqPRs"
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
