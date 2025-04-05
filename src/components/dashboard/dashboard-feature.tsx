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
    "5c6fU4KijW6xy26Pptt31DALYVnnuJqpYWeKUXgvJEb6LYBK16U2UyKLqgk2PE3hQJaWGc8qTsqVzu2aNkFe6TLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfeoFfqNPp2GxBS1vsvBNr1cU5GVt9uWCvJ8WtVHKw1gwsjhancViBBMnivcSRFphErqfcpbvgcK7RwjZ3vNZ53",
  "key1": "5ibF3KRu7QxwaRGhK3cocAEMX4w1Kuis52X98top9bs7FhfDLkCJWSDBr8GYoxNoC3N9uFje4Gu367jtg3RQ2CLd",
  "key2": "5KKzgyqk4NkZqNnUeEog22KSMfGYr2z71D98aEzcxBEEn68Vqi2Lv5YmfcT6aFH4nQQ2b9G8SuN8zbJtoxTyjDDb",
  "key3": "4DvPM1HAFNcyANhVmaFScbbMVp6o9nXyEkr7yG1cuHGnobszTyFTs8RyG88GGypTtA5B86NCMeDFJzefpR8VqtfN",
  "key4": "27LBT6oUmNaJnJc3b1y1Jn25CmueuerTw43hbsJzykpk4XNEax3dvhjnL5qZccVhkcHeVtLGMPky1Jzi4igaBFUV",
  "key5": "DXQv7VKLEdyqdx3WSefVtDoinbgZXb3t9iZSo7dMzgXapUcYiy2tU9YiagxWWqFkhPG9Y12TMHkkeX1Xw24Q9Q8",
  "key6": "5BhBjj2cvPBrKBW3iEzQcXSs69LL43SQsfrhaKvtC4czqp8nPD8r2F4LDumzB84SArsQ7zA2DWi5RuQz52aZVCtK",
  "key7": "44P3B6P5byNM8VRHF4rLah1a4YFAb5nbzqmQgsyJCZtdLPkAyLHyoZQSPBijkA3LpYPFFFTGf3dqsPY22STbwock",
  "key8": "5JTBVpC5341Ep1T5We4Cgitc9exbTqeTnrBxhvKSLcQAeoqhPAstrQD21uwJtGjeUPVkoLvBCG2uXixeCu3MpbD7",
  "key9": "3ascETcDbjYghPzarouinSUq7CSTxatVYBCniW6cKvWJU6pZQCfN6vHLQXzt7SmnZY5tc9y9joCsDhXWnarGf6nZ",
  "key10": "55HDUGUJ5Bz74qxj39bVeCZ92C5aQRao9Fd7pBFzU3GYJTUVd4c1jcZa32jAMVbExXTJuG7A2tpScmrV8oJJGT44",
  "key11": "5W33qQ6KsrHMhnw7kSD8gcUf7NoNRh8gt4NbhuLSmm9wNHsRMMyGjmDndrNyjGWbSbCSPQpXYwa9qtt8Bi4AKuAi",
  "key12": "5QmaJtGBbumTjewap7MxREnfvUc9o9ZDpbg8UxG13kDTNwCFac5JfvS8ZxqwoNa2DrST5PqQB7hZpY8bMGYsep3K",
  "key13": "Bca54XP3wrubMkHJiideDWcPhMmYhjJZduzDer9LxSfPmgvv3NmZaKsT4U6J8fEcc4NDKxdNWHfDRWXijj2FCKf",
  "key14": "34ynJpRMbUSRWx8YZquZBmWJdvz6a21LvEq6sn5vrvxwzPWu76uCbmPKwkVp2jSpXQYs1BayRbtT3M7cG4j8qH9v",
  "key15": "3cZVUpvNf6TwtR19GhhfV24fwz9xZFjAWoytwbNbTw4aEc536xG7kUkWMohy9o5eA7mghZyYZkgZfueE7sYobUua",
  "key16": "4vCXMh78RXRXWXRs9rucetn5CnFjbjg8SA9tJd8rybfYc8LHSqsTuRCbcfxNMoP22hQ7yf6VvLQ5NZXfkmJw136B",
  "key17": "3UhfSz6giXEQmZQWvZegvaKZjiHKbLhMqrW47eyJm1VebYhbYw4pX117LPP8ZUzmbiLweD7GgriceNDUgUawZmQW",
  "key18": "5BL5cLWvujZ378MzvR41swXMfuj3NJnDGWjkRcTrnaVFWnjrGadn9vtkvJkPaiCYf6391o4mD8oqkgjEsNcn416R",
  "key19": "53BSPktvfAMu5kHta6DeUk9mNCWCTgse6NLnhyegBvXfdkWkLPziRCuhtQPXgxrrhLhSp2zh4yxXPrfnpVQd3mhF",
  "key20": "WSAS4EkmABgGaYh2rdz3Ahahbs1ttTpHE4wM1oeLA7cwEreNPNY4QN2YRNBq8hcNcERmrGRD6dns8F7w2FPMfja",
  "key21": "37XPMKTwLp5k5UVwXiV44ZTFqmMCpfdST22r7oHsmv6ipWt6iMz1m3ZyfVPE8TfiyWL2TdgS4isY7gza9q8UaNXh",
  "key22": "5mPyGAb8YYwi23kwxf7wTkqui9Xgs9BAPSGhDJacWsAcfryZJLKPivEFu8fpTydo6Z4DkJijGnTGTUb1GZ9rgw1i",
  "key23": "3SpCMH1qybmgaK6uQNypyd83i8U8HVF4p6TLEJWG4hcsNCiiskiRY4aeKcrdvZCd1H4jix2XND97H8bRRo4mFsJs",
  "key24": "2SZP7YSZr4ZQ59HeBVmdrsBbn7heZFdNzZSncEc7JVwdpaswLkHxu1v6ZjJ41GCa834YmX9UjqrZLmAWJwTmqrZq",
  "key25": "4kxUeikwwj4abbScRWX8GTt8CVTCR2boTRAahaUsLypVHCTBHYpAbStT3BphCXr3L84KvSC47yyGU2i2CUCjX54b",
  "key26": "5hJ8Rfti5gWq34bNQUtN6BJRfM7zDCCmhcYNGwctsbZGZGDYGR4Yhn4n58rY9XoQoVqiyKwgAmXAaWXV3tcRCdGw",
  "key27": "3i5E2ZgJNo6UcCQ9bEAskyij9Qb2Lyn472yqa4MrB7omyVhmQy7LvzW4BRiT5Wxfd7PkChrQBZnaXBhxfKtXEpds",
  "key28": "3oKJ9wrmc2ttV9p8opVBcP7evYJgCr9N77ozjktPqZ6gAifH8RxptUcMiQWrTsbd1NSTQSVUHSeQPs2Cna4sMfHT",
  "key29": "LTt52VsTkykUxh7EKqa3fWtdj1Kh8Yb8K3mHWTFK1KwKbzFRhnRmh9dx15thZUv9o578u5LuPb3YMjgUSR7yNLj",
  "key30": "3XWKrLdfTbBzJZzjvAW9dC68zy3vnXiFsNkSVv2rgTHqHBUaW856xhUPUW1h811oZ1STtaPK61MVenFU9Q2dwfkR",
  "key31": "5HrxTRzwRm7psj8VbLHyvPXmDqCGmQ2aFofK4Aud2x4r6mQBP9Hj8BWKn72zna6TmVGjMGbfRDPyv1Z1iWhoWgj1",
  "key32": "2oJykGCNg91KWvMHhBz5QBZssuPiF5RYoe2A3wY391uaPuXrg45qKDJtsora8zGM2SYNqT7K5ahjXZ2gC62gCexi",
  "key33": "3P3LVx1SGcQziVNLu3BwgD3tvY94amHDtBTmxYqYQiB3UdhbuDAocxKsuU6r32TzNP1GWp1iZeRoBGfiSRUZV1tM",
  "key34": "4JfY6SsZXt5hnCtXXcZ5w2hRXNPYQxkRKBPuYAWvs4NZTnCEV7m3uuMeyEDCqFte69FPvh2vcaaHonyxcxJHnsKR",
  "key35": "4ygNYoBWCBcjggDrAGmwSBifa5CPBMSPBZFJAr1axvGD8sHYPFXmgkzSyTNk25s5dxCJvDKfpGGNtDtz7mPB1ayM",
  "key36": "2791vKchCeaVpkVnUgui8qWYNcnrcwvne2L6FocUGg6pDycebnF1gfuKUP1SbGGaSrZtxD8WbhXa6wFe7uXaYCxK",
  "key37": "4JYm7piUwfx4t42qTGbzbfjufez1vRmqNAGMpEacmSB44Gz7LGoti39zCHiDvivpxHqUHSAdgPuP2NSseNiTPhVx",
  "key38": "2t5Mi6tbykzDCmssBsN1sCER7bsYaRrXudRP3Cad4hBzAYAmT2Cn1Pw8oZskiWEcfzacEdZAjWNba8MRWrMQuDJ4",
  "key39": "57yKUdWZNsK4wVcuCeN29sByjApZ5MjNPXpHAm9SPCWEQGZMPLY1cxjUWWDZw7JPsjFgutgeSQusXXhdQr25KBy8",
  "key40": "6g8SHD6dBn1JcCBLo2Vi5k1JVzaAZmqWbqxff1byoKb12NeTnx3gSBVCdK1je7wZAaPv9KBxDiCb7nLwpWBu137",
  "key41": "2mmGTCsBFWH8ACpQhGYnVh3HMByY7r6g8Q7YaT7b1NepeQRqbkutTHrp6LoLWyEBmbxDuXv6Ah14x8C8UGpPYkgX",
  "key42": "2YqRniMotRLUStEHpnPo5ijGtUdGvnzMu4PQufjwJsxTvzgfAzLNEBk1Q3HV5ddvB7GbD6TCydPLwMWrUtpMGZcX"
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
