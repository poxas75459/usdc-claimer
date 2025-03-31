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
    "3ij5YTzXeo4RDLwJ62xW9tASnr6HrhKYV9hjMV5dDc6b8RyzeQq7TckoLk6eetNJSDzT3r5p8xK9u6mEysCGxWm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AuofwsMnS3jB6Db8p7gNsNCsYRoLwRUFSQwesvjbdikXRLob4wPw9jJ7Wy4V4hzb3zAEXCbWiCS2VzVZU6SR8oH",
  "key1": "61VP1b1U3Jtucd6hRM87QsvqpkKfs3V1mLonFcyo6R18VxVEFe2BBiEjvRK4VKanbFSedGLPGewMGopfxN7UDmWW",
  "key2": "2V2TM4thXL5E21WT11FDQE9yPSu2nvQHJCF94GU8D4ZAGtymw4rHDdaUnTkYuBZYvaLHCggLFYhiFTbzpN8x2qPw",
  "key3": "4rZwZo6p5d8CDcNxDdrLDfHEERa1Gsa56ZLKAkfTyvjtftvyMZXVazTVFdTySXEWpNzCdrSnAyzfwT2f3tbjBFb6",
  "key4": "2kYhjdjcPWcJUFwY2tfNEE2ta97MAVdJAuJzPX4wMZzod3YpK3G9GcRCMiDoGGmXVpo5q5oBEUkTM3iQVmFQFqN5",
  "key5": "2VNKNercEZGVhEK6yChji788L6taa4XGDLmDynRqznhe6rm4cKhYcGp15auNDkiyQ4cwYvZAC7q33Q6Y43K9MdH1",
  "key6": "4ejkrDY8v7z3vkhdVbt8n2N3QMon19kPVkN9HENwYJLTBbA1BKQ4pqVH2DwF6Qi6AN2YBpxVNEjbopFvHckYaR1i",
  "key7": "uGV9zz1yjZGZMntkuyeyfQiJgs6tCP2eXUSGo2VuX3ibCHnXwimys3CJLQHxnUupVhwBFuXuq7PUSJetVkJ14D4",
  "key8": "49Kn8FVbQQoFYwgPmjrXXn3zmPyF5uNq2WKq8yonc628NpnwxctW9QBvDaeCbp3FvZ12mrucEkdeGDbkf5FbcRoE",
  "key9": "4kSwaYoVkKWWrcjARHY9JS1tkY1kJnqYGqKQCWHrGsHnzbU2HBs2kacEXDMqeiUKmY4qzaq85RmkJzVCkiD3tmjh",
  "key10": "5B4KdRdL7bBEt7vUi5m9dfu2pkuNiq3DomZXwTEgKbDXzKV5MordJynnCRsgEqmwbbgNKnZXjP6ewtf5ZV17cKUs",
  "key11": "EpvjxTU5KJsLhFx5FrRvXaG75GSU547zigCkQVoF54PPx4Z9qGffsethNV11knuBHWNjaTkMMPidx8FXZMLVkuY",
  "key12": "LLgWRAmn9coQ6zYsYV6NRWGBdXU1SuMkhJWXrcAKkSU6b9xeVEZyyWPouGoYoN96mFVaKj9SJhtSpAZgFRoj5xu",
  "key13": "4fzD6DbWqTSuJx4c4qi46HoW2Bh2ZXwvnr75X1WRjmJcq8tjmo6ZybuVB2EHd1LS8a4BJUWcBsujCw4uoBnfBVN8",
  "key14": "5HXWTNy8gFtThNkiZz9Dxf5wRKiQYfvthxN2yWgfFN8pyj1mHv4XmHtuVbT6eophfPTFrLyc57fEAfAeAMgGAmpg",
  "key15": "4tpRPgH6xe7iACi5EEc1A3u5t7peco59NN3h7TWDTa4qhwFXTmxGcgyb4ew5CTd57vbjMwkDBU7pTpQS3qNhKj5H",
  "key16": "5AroBvT8tB4v3NP5UQVSErxAzTxTbuDUk12nGrTXNkEyRVV2vy4UjaPkPJw38D2SFKnhzTsmu2AfGRvqqTaJyZP8",
  "key17": "4d8ZpBK1tNRY9YZ2Yw3SdZajiG337JPK578aQ3DCGN42f5VtEpV5PTosMZdjeWs8vNq7HEPMNdndWr6sBRuHSdXy",
  "key18": "45gxzV2SLJRBaaabk1mHMj7JhLZnqfVsuvZWngB2BWbu6eFYzocNGrBK66CBCRcCK27Uh34y6L5tzZ7hfgTZgDMk",
  "key19": "4nhqvDaxRBTjiDyhgapwBNNuae1FJsjPWHnHRThWN1bPTUBbbHG2zdBgcQsjV9EB8kBEEksJWHigwY4HDatY8asQ",
  "key20": "3gzGAc3tKeMPQDGLWQZX8M47dJC1DoXEexujGzycRcZ4Dp9DXbucym2JG6eBBQStYfSt1YCGkzgGcix5XQyqAViX",
  "key21": "rdVyFT7YSdMTNThyzJZUhYjdUFajzoiRCCkJizJxyCXDZ3BShGmGPeU2KHr9SuZA1T3SsZVEySY7ADiqJ9x3qBX",
  "key22": "5ouZCNPZb5EdCUCgzi1R39wGx1sbGLLn4MRGxntu5fzRznpwu3f9Gd2yEgcs6QKBhE2Tt4kixHbg7WDdG1LWory9",
  "key23": "4RcRJ1SAECrdBotayyEbSPVmh6m73XrRmzh79vttcz3KEsJEwbfQmFVjXr39oKxkCGkGVfecKWp3ba6ousgxBWgA",
  "key24": "eZpygLDmzqmL5nf5Z1qbK382jAZMdh6eg7X5P8LX84mc9PqcSRozproaAHNifjNfptdzTMtwech72toCaFiynkF",
  "key25": "4A1tMZQgETwgBCRmmeUEESkJqubTK4fQpDpJVgJ3VuN6rhfDDd1j7icgse7uABpNcDa4DPjDwvwYurhcjcqmjVFZ",
  "key26": "2C6XSFUnGBmNsMG88LBY35dF5PEkQ7uCGjDxvL56didtqQHRH5QwYsRGiuw4M5voUVycdYKY9E26cCfbyLtD9Rw5",
  "key27": "37UZRakinuBgc9cAzv7J4jBiKK32fbKi3rvo3FRwvquEszvRtq9YPd9MMFmVJxwn9ewXQrjmoZKLS6NXyRAW8uBY",
  "key28": "2DSiw9TMS8qTCtCVRTUcrjaGJwTJZvMdtn9fKg1Qe5P19nTw4bnBQGuQ55pYNBjro92BLjtMK4Syz8wmEwS6PiPr",
  "key29": "5HFoukjbKssCPQpAeD5ZTSV6ouAR5GsMUvGhhYeWHS32bHTeLHaLmAUgp6xVMSrWQKK6fhLnFRodKKuVaserF2BD",
  "key30": "5eqespWqCgyDRXuUgm82NAbNJ6jrwBKDxTUAc5nUPWccDBSgE9R6Edsyt75kvqWwiA8oXMnfLFV1qM9mHLC7g46v",
  "key31": "38tPHHbBVGCggqA2z8MYzPnnLmXdwPfRj2RAxxYakVLWxTPSR8yMWBTacHdZjuu5jvFToBkewgjabXYeUyejgedK",
  "key32": "tpfbRLoNn7hywWBUtJkrZfZMT16A1uLENhMgh4384BVEKRWPGqpfAZGYJxRSoo58FHZnEkMixMCdrrCKKYsnpNQ",
  "key33": "5KJbKQ2DqpzDabvEtnGFYVa3ZRDNocGtXn3mQPBnDN4aJ7PbwKQCHomatQHpdaSodPfnKDK18ZWsD4HNov6a2NNm",
  "key34": "4f9onk4KWPhxJ7NbmTAU28eP6Tmk11EFw9R1MixJXUE8b7hjwLzTNYXPGn6PTTEwW89VM1mUGETNjBn8rrFcXYPf"
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
