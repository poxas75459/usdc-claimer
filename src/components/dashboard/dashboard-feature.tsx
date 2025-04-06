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
    "2Mr6AYrLJprq14WDxbCq4Vvomgq9pRGAXnt6PHJjc439ypPEMw2GU2DbGYSmHpUuRUkGogqQHgYoHYhvq5bH3jdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1tdpYopd7KioSj5jRaTVKXuxPkTqCbfajrZzry3kFaxSN1vqhNZqRy3wFspq9oyn8yyX7bJ431K6CGMm5jVApZ",
  "key1": "2DhygZFheKy37R2nHWyiGQ3nyKPUrxS4H9WWpebzh4EWeMB8z71c1waaTzvEr9Wz3p4uKdbLpGaooEiLK5rMQJKN",
  "key2": "493wWmqADrjsKrdXecCW7SuAcJh14Nihj3kWzkxksYMuwPZiCryK3gYzrzt31yQCPg34kQE4EjUyGFFKkfUgNBdk",
  "key3": "4LVvDtZdnBoKUBgkvxVME5ZB989wkMTdJZa6qJiALEQVSU4dMp2UJp9y9rRj1zD9rXCVNC4kj1fMr9cGCGtza8u7",
  "key4": "4j8ZkjfmmQHphgC8NTNNHF4Sq1RLKaz1zWZPswTwiC25tSef6WBR9q5ywBu9FLnk4YFLoEqSGjxrpJ1c7w1GmAix",
  "key5": "3TefRC5nWkSCJZ1EjZs9oq42Q75zn3TArwzYcnamXiG7NoJcycUBSEbo33L1fHLNEFB4TzfKxKwKP5MVjL7fRA3R",
  "key6": "9m63T4K1QFb8na4CaMesY8LBWEiscjk7iWrstxyr2Tiknu13TmVFnmVRtpLd1vRCKpTFKRCPmQknrDuFy1W9gyv",
  "key7": "uUGmh7Q4y7BcCY57wwchEHs6xu3ykzeEsim7VtzjLRp8PXgdu8cFRfPSPPcAieq7ursFJd4EzpvWnsKE3H1MLyn",
  "key8": "DBYMuUX2q3svkesVp6uxZHSLhPEsoqTTgRytsodyZRnZzGL9S827jj9Bq2qgVWCbw2e2UU1Y6z3kAXa4cZfCx3V",
  "key9": "kRgQb2hLisDJk9L9NAzuHRaL1iqSqRbSCpo1Pb1YFwZKu25LXBE1dpZT9i18PPAuJJFg1vzvSreXqPh7nbmeGp6",
  "key10": "2KwDeERn25cB7j6x63FZazrjzSY2tHqDPoXTyugs6ySL6fkYC97k84wfyGREMRWxjnDkiMmv5ERg8N2NJDcovejY",
  "key11": "f118X9Xib7bJMYZgtonWVu3Srj8bCbWmthZUhyYXcyjyUCfaToRCbRw7nYEh9XjnLBvSaw6qw4cQmxcskwbch3k",
  "key12": "33C7wicBHuozHtC3HK2rBTjzeVrDLrys4ypfXq5JqkvrrHSktJw7vemzGNnLfnF5Bf3BNs9Emjssw3MMvLZbaESc",
  "key13": "3JMcQDyJN76YqjovtmSPUhx8wRfzeG5J56gsZZotVZM9Q9HRUdDqnMY8xxeKanXdKdPfBoPzRthx8F4QHMg3aMGQ",
  "key14": "3fJKBHxDfHnmSpdqU88x4jD64ACHRvhf97S43QdNeCxZEfo3pjiXNzcZt8wNvU64UZdKuKTN5yT8M5AuMkKRziY",
  "key15": "3YRTj8nr6uzPfkg5nva2XuvAR2uqzDFiAJB7gGJPfHvh5EgXcpvJRHkfqR7gfxKGp6ScJspq7e8WFgDBPziPHcqs",
  "key16": "3v1T7wkLec8aHAGHTACToLieJqi7wzUgq7oCutdM4iuqoYc1BAtJs69vViaerq4Z1nsM62VKhSNTX4Bu5pP8YJf2",
  "key17": "wUSritnkwWYmqHTHgFAfRKTXLpJeWAmGxfNKQLac2fCctLCvTkYFzNED8RGeMTsEeC9MY3BHZeNmhXCrcKkGLVA",
  "key18": "2emFBGJXRmQRibAaGMqDvPzh9F3AYtEJvseymJ1uQj46xnf99h4kCNyubCxXSdHdRkkPXEtkas16iyRKa9dhbfvX",
  "key19": "2ZfGQqb9zDJdVTLzbnfjB6sNXiE5sdPw7XakGDvtP2Eg1LiocJzF6D89ZWY8d4kEsCw6LWFkkLYFxrmdoYVrpMfd",
  "key20": "5Nt7voHpSqJ977o4YcB3D171dKxTHt2qFJhSKwuffs7f6JP1WG23hhaTnL91He8v37y9rCp1qCBDRPyN9dQNcS5g",
  "key21": "3Q3PrHFzWoNeaSVA1avu2kpBjv3yAAzF2uhdnEx3arBfhGP3J2sU25rB8owF2MzMvzixDxoU6s75WnzLvXrRbYF6",
  "key22": "5QiynkW4TBQKxQzbnLFaZn1KDMxpwh4PL9NgNF98QMLLhLiVx3PV4YidrgyVtwqM55HT1SADeCyWF9mWWHyuqidf",
  "key23": "APU6C36wcjNJtik5GE9Y3egPuwgZdvXnxU5RX337PfDMyVCmbA6J68RhhTneaJN7qtKRS1N4261psbxnNwQ8vtd",
  "key24": "3vj1Q7xwh4UD4zeWKwhCwRrtNyhY5FtBLkmeMZVRs3RQU7MKemGrxLvr2yywDUcsx9zZF4ngEsnrvkVYFBKoU4SU",
  "key25": "34XV8mVSAfYUgboGy5QYpCrHWQDcSuj8y57fWwCwb8kJTiLdaidMdSwBJTkmPCfAedvWL4Sq8Cj3cyC1aMc8d6Ca",
  "key26": "54PRpYZ7LowZXiuVWYWWi5XvcXfE6Ni86aM1GY3xgCy5hueG5XXzb97i7HXjbB9uJ4dZfh7qs5bbHDPDNngTYvpZ",
  "key27": "4NE7Yiqy8rirR3wCpKtcvssdgBRpU5bJ6u41DrHhLT7RFLjtkvBkcpaEgz1dZh8pfMGyWpnu8VUaHoqfPuxjNQSq",
  "key28": "4VSDLrkqU5absQ3NrRicrpZnbw53HwgaNP4BagSRrBx1NrLZ97x1zioTUd7ojVwtBMEzN36DRGeo7Sr1XmC7WvHi",
  "key29": "2BweqF1VvLNBo72Emk75UoUgGUJtWC6ANf895AmASNW4BziW9XwS69C8pdwSftzhQiQCuGznik415SCx7awjH99E",
  "key30": "DNUBQYqXfAVg3Z21MJXtj4PUx52SojqsU6QLA19aZi3FPQmjoNWU7nkFcJPm8gsLyxrL4GexbXaTuv3M3wQDy4F",
  "key31": "2T97YMevJ6zSVdRhKjHuFT1D7gJTnAoywXe4ZVztMNkFzwVoEEaFnBNrfEevQWgvwvrNh8DFzJvfZqLz1J88ht95",
  "key32": "5wXkvXtnVs4CEyTftpF8UD45hpcLzZ4h9WbSZ11ncS3nTPsHFtfa9ZohTE8Rw1ZsqbqzJgWknrLPs6PebhYdricz",
  "key33": "2mhQeXpZHBuR4nZBP1HeEFQKjAGL5XAaVuV2ZdfRgipuxqCAmQGVzMXJTQZsy2uZn7eDE8faGwy6aYgCAqtQypji",
  "key34": "3zNEUHrUks3tiukcMkc92cSenHi8Fyk5sns6ZRWcwncusHUZWDmgG1NPEd8ScTfjDkCEQG3NcmrpPfErPjwja4Qk",
  "key35": "3d6StLkxvxrnRsQ14A6sL99XMRGui7xhaja89uqaQ2Mt6xbibfQYpsgTV7q21g7bnCcy3YR5ZWYkH6uewyWfXA3m",
  "key36": "24KncB1z2J9TQcWkhT2HeKSdKwGatQ4fvvrpevJdg6X4kD7AaZH72YV6v9Ppet9P2JKouzEEb3sxg4kXebSHnRjj",
  "key37": "5ocHQnDkyBRoge6wJtdgAwMiCVz1ftqYnaWgj5Sf6ANR8b2hD67aH1d9kbEA793RhpmviUETzk4FSRuQf1WXdRC2",
  "key38": "BN84dnSCsDCjWiRks97skdYCUMjnLj4FmMQL6VUDJF8dgYobgU8UiyTg4VhCFy2aEoP8RkVefheUPZFTWwvyvkw",
  "key39": "3R3prN2fEC6TbYFMX8UXz522pGaiGMYr7XHZbpH5uVS2mmdsWoru72xe6jYytbCdmq9m98VA3NcaZk7hT9Kcqzzt",
  "key40": "5vn16sM77Fx99mvehNy7xBwkn5Q8mJFU3BYGQVZZza9xpEHV2imkD2DBZyxXsCJ53YRCEaoRwfSYyDm42LLFn3Jk",
  "key41": "4wvfbQAkBBnBafhnjmKBjmCHZArjNrFqEh4KLVeU1fWqhrRh8e1eJ9feQzhyPT8qmw48mtHZTvodCsiMqcHimkzt",
  "key42": "4QBbFCEhxHWuSenfDcuvSj4wJr4NN32SvR7s1A4nUSTHD525mNGDu3r6CoCWY41152g6u6bo32x9EBDzdsL4xwNg",
  "key43": "3TQUQL7ZNhBmjQq2o6zN8gWugEg5QYX6DAjqxRxDpAhiZ3HqkCLBScbE3m2WSz25Xaq7E7Nyx7LyRp8xgpzT3Jrz",
  "key44": "57aMt3M9jan9M8qwDemoW3M88kwnJMY8HattPMa9VnoB45gDg31PouNUrZcu7RwqNnGkqMx1q1g4JA5eN5tonaG9",
  "key45": "Q8aB8fbR1sitRAbrgRHbqgcd1N2RZiZYq8142MxEcvZNatxtjcDa7JfhkkiSCvjFyPY2bHnwS36XK4Rg9oYTRTA",
  "key46": "64gjaaWU3nx4GGySmBDkiKxDgvVmU4SLSDPaiG6bHp3xytCKAc7oMmEmr6aUzr1935JDDD5ngsei5FH3ccrpTvHP",
  "key47": "4SKTmiMkYTYkamJxZSTWwkdr66JQU881eF7oNW1V59xiJrUm8eunHP3p6jHiBVRMx7QkuuoBu12nSxprssh3dnUd"
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
