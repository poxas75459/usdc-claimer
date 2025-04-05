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
    "45t1qkoNTBGrr6PTvowRLbVqJCRTmoGpcpcJGeTwMLt1QYAxMYx4Ua124Ph6ju4NXukcgZg62i5ssYU6NFEMYnCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G79y6NhtGhcFB6XFDS1NNazH9553eem3cDc4v8RMmCwaixe6rrYDCaCYZ62HYWjPC6zQPuTDvz9kdapLPFPrEsL",
  "key1": "3Unn1zPWzsLtgFRQiwcuvEh8kKqg6dd325ki8hcHju6U8wdBf4UptgXHsiTmf7Ganrq9ZB1vpXQYKRjJ7AmUfZQh",
  "key2": "4j1D2LwqHQg8vvNAWvjNTsGk7wVVr2iYbkYr7mPDJ9bY3nsbE8t2A1U52w48Z6BszX3iJhVZ8dS1GZw6EL7Sj1tb",
  "key3": "3Szzc6Rgdp8c2G3y6pfUe2SpyjZU8ts5qgz3pAc8LEvmbPFEZhwRC6a5iQypTj5whc6XoMsNjSDAz5rWVXwHbv2J",
  "key4": "4Y3fzPGGnvcUq1zjhFLzW8FUZvrjRWPXffjTef2gDrkTSCV5XEHWCwaSwZNuvM7b7131dwiBb7UaGzemv3P1goib",
  "key5": "3tbJ6DMSWCqdmLy9tAzTQPzPWtjSpnWZV9GegVicZbyCTvhpiQU86EoGBm39SByi1tRLdNeNSNzqnvZ79UhneYSJ",
  "key6": "3FpZf4WW7avZpvoqhmEcZaRN7W9xfq3jf6pFiWB2joxshGWdcAoX9zcBHz4yLtZYFDCQY35qrhPkbA1KxRoMCGRc",
  "key7": "2bZ76JYd1BdpNos1YRAEi1fxpwg1gu2qSdAsKw4yTD5p7DRoz628gZxk2K8qmPZapUfsHH1m21UkLSUKpNZ1aizJ",
  "key8": "LP3VJjMyizEAmvbr6TvL7Cfoj7qoF8PhgWFQGec6dqXmjXhz4bo6khhwHCfsRVKSLfAvSmXNVfRTTe2DGbZ73rU",
  "key9": "66cmhzVaSBHa6zm7qNuH7kVDhvoqq3BkZz9CbBBdPfqbjZq4pEnmeB1ndRDJNDe5PTWo6fEFr2PHAyQWweQQi5Gk",
  "key10": "2FkSTX4AG1RL3A246wVo21dnQK5spFQodmCVQ3o1HobgJxvG8fxjkCEdh37qPMr9buhVNLzoF2uM3mDub5GSToYm",
  "key11": "4s6tYUJ3THuhuMUm9pwA6iFt2VdwgU6WH5fbugViFFKbwmQd1mvSLQnwF3fx2gwpUAwKkcD8K3RErKneck1rgZ2V",
  "key12": "67brkPHMShaXpoXggiVWouv69g5C2PnJLvdtcqoC363okDXUtcavtJM3v1kSUTsx1jPsJS6pwWU2CTNMQQRt89Sy",
  "key13": "Wmh8vNwyumCsuH3CEDNeFS9addxZbmjsioHKoHzkm7yuG49SgGtDNiYemJkwq5tEGa7okkT8S7Fc1zYXZ7qikCJ",
  "key14": "2DkZWnZ4EEn3H61yxJktgDRDrXmKqmAvphBRGaMm51gbxh3U7brW5VFqv1bk2XyxaGZYFanmRtPvTW3wci7C9ifw",
  "key15": "5Ec92mwzGvsR7zvd3PTNFfdMg5FKeLfkUTqcX8TfpD83Y6UKQ36eMb6koE6VUqFTq9Xdak4a6i9Yb2bwqa1RBN2w",
  "key16": "5kex5x83SzyZ6dqDvub1GbsS9jYfZmoA3KMohaysJHNW919FGYqQDGXQ4Di1S9fYqwFbP39CfMaj2CVZnFn8hg7W",
  "key17": "4znxanFkFxF42rbiYbrwsWrxBVrhqS8yDj6rNxQWwZJ8J2yYiWtDjibuMKLjoqeEvY8b6dfaroNu3QL1BYntD3Pz",
  "key18": "2ZrbkQgcJHCYRwu3FPotBBAGrDPJSSyJrz3YMw52VjZAJ8iqigydNM5Hw6E9ABWBLDSvGJjeTXRFzEsUKBTXRCDj",
  "key19": "2WKUusM3vqjyCUxzqxbFMuujwytDJwn9trcD4mZjNXi6AEK6k4nEbwe4U9BrCHzyH3UHREtjf6VEhcRpdKGLYmve",
  "key20": "4Pjbbx1uKdqAFsMkft9WhJRdsg3UZeMHHvuRwCsFuqo97VX3zL73SQG9mnscQaycQr1tN1uXuH9vyrUP1jDT6Dik",
  "key21": "Ctq19JU9TSyr3u6gfDYihBM238WBNMVDVCiC12cQFyxAKfQTjcuwxyYgtP5QXFyRSaJBGASKs6VHDEfK5sENmnM",
  "key22": "38qJLbjq3D7fK43SMP4GC9QhNLxLm2T7YDUaX7xwryLV15voW8okjutbmLmxys8EjoxoCGSCwkzCXAGBvNdKQxJo",
  "key23": "v2GRM4D3M1U2S9B1bDD9ZXBUeojh4nZcsjnYdzYbJ8LDwiz6Vp1XyJJ3tYspgmcDbEeCCaKPfPhyqNnFE4AkHte",
  "key24": "5batg2avn4ohuahVQE5gWN1W8X3dNWxBok3pKc8cQmLU1ghw9ggD9WiQWAM1DJd4QKvrmJozA7UQkWZLYDRU2p4t",
  "key25": "ENYD4RSDzwX9CusQSe8TA84pMXjUS3fGsDHcG7bydk4tF4ca86CzPATBaEg4yYnZc7E7oqcZPNdGQTZhkXGJ5WX",
  "key26": "8fAtRirkkgVM6CwgduN4rB31NHzgisyYKmcTF7JYs7T2AbDtUsyUYhAAh4VoEf4J295Zo5ansRHEM983avBN3bi",
  "key27": "3XyCGZcnswfpEUyPoX4Snkxqb7xyzeLK2k8ndC3UMWkfbwDAjbCAZEJmWmMvXTsJDQEj6Kpartq78NEDZSXsoREn",
  "key28": "2qd1DC8suvt3dD6DnaF7fL36BctM6M3TywkvMxnS4y73MrnqiZPnVm53wV9kYC3iSy6WoKBT8epmXXKcHR97rcu7",
  "key29": "2zuEFjx4AS99P6zTDoKcJdCnXSdfQnC1o6MzAJrpR98Muts75pPBkvD2aChNv828fTLHeXdj8rimjXiVeHHMkGyB",
  "key30": "5YFxMatAR2EtzzxQr7xaPMH83szLusUvtf65fpH115DuKmZ81QyhGoMjK43S16peYv5hTnFhY5bgUfewmK2SM24J",
  "key31": "3pgnapTHY8KqmxtxcuESs8bXA8H8moDpE5m86xpT4eoVwER1AiWts1D9CDgDgJTKQ8mAFvNxqjT1Ud323No1Niou",
  "key32": "ZBieTb1VVMCagzqf5yFgCjMzTpCauE9kHVSF4UjY3SLgq9fVt1wWMtsNThApEpoEVGNvf6v7wmFf74RqQ3msGxc"
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
