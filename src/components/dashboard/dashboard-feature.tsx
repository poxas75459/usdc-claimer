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
    "4xeiC6ZECZycT23o81XWvAyvHGDnY1YtNnn7dcLEjur6T9pKaH5is2mf3uQiP2sVckjJAEnshCQjza5vPj4wtzjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WCuD2etwTaJ4sczzR2HD9AvNp3oiN22Gz3MG8Nek4wm9xJA4HKA23SXyBbLqf3qfawtauQRThXW8vg8XroEZNy8",
  "key1": "ZGcs2k8x7b8GGazQz9PASe8CjUYyRFs2AFzaYKJH4MRoABq9CFkoiAxPPGJVpLQf1YFRCXd7W9PLQiyYju3TXbr",
  "key2": "3bubY9vUwvRFt4jzPL68vJtk91xnQCykseqwWFiLBjKnJkwrY5YsBoL4bKG5YVDY7LyZLAgPjgNmPiKGwWcwDrLB",
  "key3": "oaT3NLtyNkWF2Di3GVhB4XLq3Ru9NUmNWBgscBVscHusFkf7VNFHSDnaSKVDxHHqqRvJQWatCgtjkE6zNFToNSw",
  "key4": "2h4D3soHymhbSnAxdU7oK7SXEc8PSzSdz9HqcvnmGeeiXTeWwkcYX6KsmxCPE9br6KYxv9Y4gbDhCp7MQy5K4CWY",
  "key5": "2ZGFA9h8KVr48Mq5hLTXoFZmhmCUWArJe9RDytPKJt3PM9owZEvzLC6kiWL1MLnHLnJyjG4SK5C1yXK46Emj744J",
  "key6": "28CdTFSX5JUsufebomNovJmPx5zSsD4GX7cM1DoWdd73HMhBupx9PS2mwnv34rF6L1h5hmaRexmQz8R4ifV9dM5Z",
  "key7": "3DRfpjv7j2ceduuyGfoCSAb1ZyxdWdJxvWw5c9d47g7D8zRT5jEZBmPTD9szKEh79YfDAeT2GKLDybudfpkRiJ8T",
  "key8": "2pfnb2d5P6AwKhyRSVkrMA4B81EkxreVZfvYV6RCHmFvn2MqEa9PcX6XjSqPn7wKjLjLft33z48PJVU3xXHryeby",
  "key9": "56rUGH6kSsLxqXWiRt8x8rYG7h1BQuBnHPQCTGLdWXt2jWSyN9MFAj62LSsECXEgJpnBYeDRuDWUd9411AKdE9sY",
  "key10": "4s3sjJhfp9vp8sqCvaXzym2Dfyfv1xe5SUyGwzjFphEA3b7wm7xyqi4r9zRR4rRGafy5BCiXsgSRvT5PKPkfCm6T",
  "key11": "eZpvcnMepDSy3dDPLNBvAuGo9yPnSFLfcaqGzfUkpVSCvU1MjxVQ6jFdpLGhPhA5HMF1vGuAC3XjbrtXQdaTEsE",
  "key12": "5K93F16oDqG3YUSnwfvU1VfEHZLmwUCdGfo2HP9AE7NmjCSD8kZyU9vNuRtqTJj5SteEHQ87korMinni5LMBKdWu",
  "key13": "55UNSzuNR1gcZfYn9nbX3ZpVxZoTXqPLZUXCPkMKxqJLP7EYWqoyZb2BS5hXPdyYhHnZWAdBnfLaGdvhjn16HtA7",
  "key14": "4BXxcjbu6QAv8N5ykWADLuPrRa8h53WwYEJ6aP5u8ATiJEGQaUc8xJGK7tjcPxRAZyiFEGPVP8UqiaR9F383doRc",
  "key15": "52hAjtMh6DoS4JQSwK7iwHPDEnJerQ6BFxcfWqjbadPTqLSCJswq9V8y1SU7Ujr1YuCJhr2UiNy294rwFSEUet8h",
  "key16": "4WBa39vCgprf8fAcJoo9v9XNm7n3AeRTESrzYjcxWeHyWpwkpbgHfTKWASKGa9kreW9pTPz1dk4v5zJJqn5WyUKk",
  "key17": "2daQVD9U13uTNCmSe9vHwdrF92Mn3ANaBrAFET2bwai2znjmcjFeKDkEcmrNgz2dz26hKrQQJ8HJYhSLFD9SeNoh",
  "key18": "3bDDBcE8QrSmNEiC5vGGsSAPFziuNeNvdHTgohEuR1FtCzwXnKaggn6cX66igPwiDKST5ZetzWVW7bGg9gjrfwmt",
  "key19": "565sGAT2YHJVujCtZdppyzR4yjJxdhgWyH1Bzia1yUioA6DsoU6H64PeGGoHDiUCKS7iRCixEjXLQXX5GK3xMZHw",
  "key20": "5PVhBbx9Jr3E6SambMYqZCfLKsesnu6kqTmbPXM8QTpzKLSbcEQioT4sHS26RnJGQsVVhEkWcVxnrdXXiF2gbWzj",
  "key21": "2MqnA2bmkpihNYzzoocbmU6cBFc5paBLF2xaw7rwyQJ42y36sUGqmYvA91GN69kFgwvnswUzoNDkrGFrdFCarCQC",
  "key22": "3SuRy2273MhiT1sya8TxwYMYskQnoHi1rTDBTLsRSqSq3oCurHxrcFwiyny4z71ecDLEP5e4MxFSZ81955qpW36H",
  "key23": "4JYLNhtJZGWn27c2tkcoPg3rYeqJWKcmYzjK98sHeo7MChiLdHMECNKgBGeAhRunS9k7CnX4UMDCMU4GoKBxtcGH",
  "key24": "3kvcDHcXTEU5DciBWDbaaMJN9XNzoMYxTanR6rdu979n2cYZUgNU3VyxwMYCE4gzg6wifE2Kxb8zymNJMQawQwHV",
  "key25": "X52v8ZihULyN6ogVGfAx8pSAptf5vu3uX199rULPddcjtza2QB8ZhGyiRchMLNQ75AnmhqfHfZB4ZrsC1QeZesb",
  "key26": "2GBjTSktnhKZr7BfugQonMWbHMxBaccYDiBV3YaTKA3MYeaQz6E6AakhvBpg7Mn8a4YnWMENUqEgNVaR6a42zcHo",
  "key27": "dWzXaZfrK5WJmoBT27k41JBjvQGvccfTGMg1MB3PVXaS3GJtxaYLgF3h7U1188mALtdS8ZFEB7pm7AQMBTq3g8d",
  "key28": "33fVjTuxWRbjbREsbjZG35s2UZYvPC73y3DLZw43qhu4zCxxtkg4vyajtMJjWM6HLvbhYr41rUVk9EEyxfcnhuPi",
  "key29": "2yGbiHy2wsdV3s2Fbg4AqXpCXza2UVDQiZUGNepNrSJ4B4CXd6AxbBx3BF2oEkATyuSk7aaVHkt7SYW8w1prvoeg",
  "key30": "66cHiS7XMnXfaWjvpFq92ci7fmXUnTmDB2da8FsEZo7vs89oZrtceJmJbie7tTndFsTeKdGfu5C9TrzAyECNWNTw",
  "key31": "3nSmgr1PjPymqpELhNETdYCzJSoe88BJQxcEE7kbR8hjg9yA8TnGXVgoiLmj2m4ihzskiH8vyHX8uMBfkJazwMd2",
  "key32": "55we7jkmYkwnSyBer7fyHEZ6xRKnj6iLUSogAKC3rU9SgqF82mdarJ642pFLiePAhmHWFvHpY2Nb18vYUHadUfgE",
  "key33": "5v22jL9BvTmNGsJchij9hbCXnsYyaYrnxcwbwffXd62Ms3pW5CMJzcrGnJgK71DcMuL95KMLVjmCmfit9wLYHyHv",
  "key34": "3myuYREYUu6kaS2YjE3cudwvBxjs5zUQ15DejEeitAG6wkbmohEyPUdDLhomu3bnKdpv1oecTMC5VcYUoYStYTHg",
  "key35": "2bXXWLBHkPffTHNATV4o2XuD6sd1E5KYFbDQnn6s5Vovy13G1KTjfDPkLimXRCaypADcKhwgUaZnS9jNSQCCkeMs",
  "key36": "3QAtu23DnTSXFbMRZ7XBAtnn57aMv4knFv1D22TbL297bYcbqeEtrMTtx1e1hsWL3FQUKcrPgyPM35rMkckGgrDw",
  "key37": "5M8BcbTeEQHvvtCSti2sS4kQ5hfpAFrMSzbGEfzszN7T2V9Wqfi2pFoWtRBm6nJx3CLYxQvMVygPHbKZxE1cLWhu",
  "key38": "4CeFkNCAQEovg2iPuFaURAu85QsXBHexWrk62VySjBmzZFQ4MrvHFWA99b91RLbYbJRbUcAYk4umnHPMnoxTXPdZ",
  "key39": "23L6c8wQy3Bq8Y3ogdaAvzikHdu1s3yZKxGN7fKNzuCj1JW18v39DSUX5HFNgYF5pjZFmbREU1f13FtWs8vHTvZQ",
  "key40": "5w2dVhUCcEPr4hLt8Dkt1rxXiZfGzYXRsN1VZUzh9fsGLdZFVJhD9TwyHiesxDXiD1HvKP7FB7R5W8pZZghRK5PT"
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
