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
    "65cwZET1vqnC6sFQzxCUM423ChyuzQrmNhJkPb2C7gCsB4mrM82oqEVJF93LpCWUsoXabZUA56sj5tKjkTmRcbj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPHJRb4zF9tmJVy6zUPzoBgjYFX1YeLaBsZVH9v34Kyon3iCDSARYQ31B7YFFTPgk7yEwM4E1so8kB6XcynW6sF",
  "key1": "3asRB9TtrRsqvNk8V7iRn6U9UNd9zbEP4HwvwQ5Lf6rSbyszfDPEMCCTcGcFykafPf7Bi3STiSoQHySZmZxazmYV",
  "key2": "5Yxx1xqg4fWvKdm6AiUUi9jbZNmkFg4DszyNMJ9CRmfWJxG4UhYSSWL1dRJHGHJ1ZsHefpKXfKPYYFV2qStS5LQm",
  "key3": "2er6vSHZre23AwgTsP8PiRdG6Z9QZfZVwaxhxFVw8EZ9iFmBVqTQ4tD7eFizt9o4rsDTehGu2wwoB1vXCHHMneEf",
  "key4": "5sCW7XuqW7n8qj9XTsunPLo35yvR7zLz3DKPFyaQE3BDiKWDYwExSTyHTbMAvNNDSoVDpBm6yZchxP7YPDsZmGk8",
  "key5": "wRc5kwSeT6Y6vck94RFtEbPLbjdshrp8ZNXHwzSMhNJkd4ifvVruzW6Wdndfann7kDN5GskuuFjuSjaHBw8q1Ab",
  "key6": "35LrheN9NtGXD3Ue22ciNHQDKfWMba6oQrMG25h8zFUguqPGAt8eymqiWyW1CJTLbSE5FFfovajGMQ71zbSV3Hfd",
  "key7": "2XhDoubdirrXVn8pFVkZusfYD9Nzmp2YTPvHfFq3RDufgMNqwnQzyx6QWuYUB5FwM6xH9scEjc8YA7hFvmcv1WhC",
  "key8": "vVs4eBGy7eJcBD8C6hn2Lt4ZngGuPQmd27rvtv39VYdFX8yN1mSwqKXx7VByUaDPDEqzcc8MMcJayb4DuJ17CG9",
  "key9": "3HyTAjc5Nm5uLbMxuM1F7n71439nencN5d1C9UJz1U8Nh8WXXkuNzz2P7JsC9XsBTYbdd3vnKfK2YnXcKMk3z61m",
  "key10": "5bZogPPzfwNwCz3Nd4ixSdqAoFRYPy18JFwwgh2QT4CWtWCPGaHSZR74ZhHo2VrPj1ws9j673bWSqa2FLDdMMmDd",
  "key11": "3PeSwYcL1uXws3zch1bsCnXRHFGaThEw3zYJhWvecMs9BbV92hNbjsbgK1p9qy1CMHm982zZvweDyEnEa1dorRPc",
  "key12": "2ux5VKRPQ661937n5aBjX8YqKQNam9mn47R7i1uxduCVBeVJ9m8bDYNmzwTsiS8kBiAtjaM8bJts9d34UmnLrycY",
  "key13": "5LAGEfdekPZmxBdXvp9dCikP8xz8NLmDRnrzYVrS4vXdo1QXgwKQjW7bcnT9gbRVSkyMgoXWpBWWLyqPruTonhrs",
  "key14": "2xvwseWqvcXFNksHBTBbEeZn9jL1qLCmCUQXi74nwvxqxUfh2mA1GKHFFSJkX763tNUtRob9XScMLhF2fzcZxvdJ",
  "key15": "2hdkCNjJDGfkebbg1EdctfcRu5SPotL3ARpg8EXs578jnrKkWn1hGE5DtaWbnag71JDzzzkEPkgpERw1YWyPELc2",
  "key16": "3eFiESmNFmLfEjoRqc9EhiQ4n2XnbKW4LekPTQXpKPfxDdmi3E5kag3r6kZrBrSCbpTtyyweaLpT9KeCKrLwq4aN",
  "key17": "BaeedbZfcRz7XXHmyfuhPq4u2ydV1R6eatjgMBAZBhaH4ABF8jfAvzPTecDKu8NtLYRyaRVFbgA3MqDeEmY8xu4",
  "key18": "3w7fv7jke4ZDQTj1E5RYeP33FfZkt3HivUJNFcBzVbEw6iznNN68SaxDGUTgJu2NBPJELGnSNDhhJGaEQCzaWp8i",
  "key19": "537Uf25MfsTBBQ7rDQejS6uUa6nTVrbszTS2LKXEw7mV2yExFER6rZFEsw4QoFJiLu961ztZHFvffAAbakRNk5VM",
  "key20": "26TKqeHGvSziwJey5comNDnrDrgaDpcMRrvVVoeBkU1WNtELSJaU1d2i8pzw187khcBX6XwsDSV4xF7t4H7SLsdV",
  "key21": "4RjtmingqYiSjFWqoWsEYVbPQ7CkBigeeizpAAZ6QdjJBfxmEUcUajddN2z8eGQkupvAAjxo95EeY5WQ1ByBwv9Z",
  "key22": "4J1H6Ytk4pDFphD5Eghu6YmqjZfa93hrK3g2FgJAJAP7BtspoHAVtGeNSQZczb2Bvjrokmx2F83upeeXDRx4FRmY",
  "key23": "y1qcj6Yw3uxpWFcx3Gyn3mmY43YWTi2Fp88LkjfcAfeNeHQioT1kWexzbkC5XjzFhgMKpHqouTG8HqJJRW87CF8",
  "key24": "3zc5Nkz14khyjAXwBaSSABVXLHaHyRprc9uj6ECwBUK99HMspFEkHXhoU3hrDYSeESeJebrzaxVmEjGz5aGiLwmK",
  "key25": "xz3Wfd5QGTsvycvPTk8YNQV7cyyxQ9hzgZm4nZZ758W81bac2nbwEePqpHnWBjnj3tPfA8T4ifb9PXxcrFp268y"
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
