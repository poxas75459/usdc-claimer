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
    "3s2u1AC4GRB8tkSCAERs5vnWbxsbMuftEBGNQa64qrmXXkyE4y3R3rVD4QBi4xfxTMZhFj8KXTB6hXTTLRtGzTyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCZWv8VewWKEPmaA4KEnLfK5dvxTq64YMLzbNgMQ9KXT62qUQbX7ikzyUqVqbSQz7er1STiD8SAtgp8nB5k2xbv",
  "key1": "rbT5m7HfQjBtdKkSQaiR3rsqAhwTwzGEomjCykhPQrmNCb33WR11RvdBQ9XS7TC8FfNWfenNhM9Li1k6XmXaobB",
  "key2": "3MuZzjm4cPocyEnDQXtFUq2KUx48uwwLdPAZUKXHmgqsaV3vepWkEe6VBo6eBFoqsyZQ2T7twMYoUsNMnungckye",
  "key3": "4nJ6i7Z7pRkQnE9gGZA6dYeGD6PEPPrNrsb9xmKUuCAsGjQya5QJ6dXrk1hY3KSC76ioDP6zm94YyXZx13cWbbWB",
  "key4": "3dmhbeo1H6CtzVeBnQ4Dd4mGCBUYiwd68R2KnKroaD5FMYv28zMELgc9yqBVhRDrr4K1a1ghvSfLwbZZ9Ti9M7Bk",
  "key5": "2tbhaDJfiPKq3UyLwdaisw2mrL51w9nb1VJc5YvZPUQXne1RZwDcSYjBUzeHMkt3biLFnVyQFpkjMfYcenmFjcu7",
  "key6": "4RvnNxCM5fcXCSEzvrzgyaF5gbE7kX21DZMQ3aoDNKQ3hLiProuxBHuCDRJx9kJrWfrcxgJkgFnKDsbt2b9zXzoT",
  "key7": "59gHs9V5kbTwwCkghjSJ9XhyH9hMYyZj7RPAzwHSiYuE4pgZr3zWvr7xgjFgriYGfy3hVPpZXnnu52vTJ1YoC7ob",
  "key8": "456hm83pbgQFhGyWC19U7cUwqwYN5kQXf5dWBXHQeCvjR72taKV3UT9itDcjprs3X2UorEZhjeXeNn8FHVUSKJBM",
  "key9": "Wsn2hsehnawDG1wQMgDMjcjKMJiMBG52pkCZDGmXw7S6kEE2TmVHdPFRucxc3vgceWXxc8ViNcNBUq7QRUW7KEA",
  "key10": "59YojgdiwM7DtzKhLM3oQbMDGqRy51nqDkZU4gxsgCmoz7EPcZ9cQWcCAu9s3gx58sxjW1Ggph5chCm8M3MVDtoj",
  "key11": "4vy1WsnbbjtKyuTReuZFRbb33FX4eoJtGbeDp7QCYp5ChxSNmimz946FftERQBxvJk15NATCUKvD1j8EG842J2LM",
  "key12": "5oMbTGRo5KS9hcLcc7rTJxCB5mh2dqvFcUNGcJBPjt3UKpRsFZFTvRqRxcfWZcucvWfgkqfNeGWu2SjWYKerLN8A",
  "key13": "WtDVCyXjrZLvhmp2ehjgu5v8c2pd4Yj1852LfEXFid3b2iHTJqWragon7QzjKEHDDSnWeHJPvTLiJaXsbiSw4TN",
  "key14": "5cStNtivLZgWS9cFag32aVpWkTbTs691L6qCiwWrWqeyuNjgu2aaUBsS2drm7GuvxA5jAC37bEP33wL4YZTKy8Br",
  "key15": "7paAHyZ3HE9tNbNzYEjdevgPPGsp16nyDNLAPu1LsZpP7ntKeRadL6Ppjj37uddGXJQACZEf3hyxs2sNe333Ekh",
  "key16": "1ogr7SnSTnqffEZEjYBi5iNpnjYR1PkhB3qEUDwXZD8YSfAtAvyCriMvWWiC4p9b27Ud4SQPc3uzsMm58s2hePg",
  "key17": "Qim9JNWyAFPfqbCC5byGa2YkZaEfapkPrwhN3kVrcouByM9yqPbz7yA2z6nWBkxrz9Dx2vdHqMEWaNFWzXobKSL",
  "key18": "3U9HevguTKkNcu2oiQPr7bG7BHvs4zKqj8JjRRFALqrVktbdUkUtFP5J2kdb8PPfAsmgWut2Yv5eSHWQeew1Gca",
  "key19": "71vin3C5mRaE4a8vqmtLGtdzxAFsxXdLr4BcutwB6pZ5WkosLwzN8gjyPWPpfuZRnLTqkGBPATC1Xq58BaPPkxj",
  "key20": "3NGH8Eiwx7XVZMEaH6PNnVy7KXLc755RV4BCHqZ2w32dXT1ZMGpXJ5ZkiTSboMupGLeZ4wdP8bTTuDBjjgjiX2fP",
  "key21": "PTncvmZviWitRwQpmGjotUCVGcGjExYjSURGiM4n3773njLD9AU1kLUZadEaq8fcAmgCdwyVPGKZVvPzhPXU8GS",
  "key22": "3JhSuvQbKRs7em8ukg3rfHhq3yK6t11ZJac2zbWAsYK9exQPKqeEiEysCbLknqsPCkizqpxwcNW9LizE7wLv8tK7",
  "key23": "cCcfs4YUi99ZmqeMNWQQPMkChzCc3VztfeWjM8xxDNF4zj7Nt2vUyPyTu2fptm6NZ88bRhcQXGBYHgr2pbWuUWv",
  "key24": "DSXmi2mpa5B29W4YC8vuS6xMU1QMXm8nCr21gs71gfPeFrGp8sEpQ2eyd19v2qfPCZcf5HjZ7dJEMHovjp94vfB",
  "key25": "5gseqDonkLBvv6hKAfEtSWnt2Cr6rUwz343gAf1d9E4ZgVpuGhu82XC9S3NoR6wMR9k6aPGkwxrZoQixYVKFAhYa",
  "key26": "5Z6DHAnbraM9qAeRTP8vtfmA9oQcFNYLu4RidczME7AirCXsuiEDqgTxSvvkkQH9eMi7GAPsty2CXPPe12xYvF6m",
  "key27": "5xqc3TH48qtCqwi6xLauayALHi9vhDVbZ4CZpW7FZPCddTBkBjdhaoMC9AiUeF1yqwiZNr2uGf2S2FmtToH2RbdT",
  "key28": "4pk4A6DUpsvKUt3kMrGTTdac75cSLmbjYsF6oZ7jiwkfCXg9hJFk2EMfw7T1afquA7zFTmm8SUN2bpqTg4V3pkpM",
  "key29": "3F3JX2nHwnkj7WUMdSsidoU4Bwa4HSN7HEh1BWzEvePszbEAxoPZ3PQ244f44YQxaSDhairLoemfQ3F31VvNkaR7",
  "key30": "2axAJDciasZuLTxegb3JjKBaqdBVv4o1rCSkXdPdfhh91njxp627NGkWnDkbLFsz5KnEGkf6N9dAWxKSs1vrveyb",
  "key31": "nhP3kzc8sNvhNjGmETH8FG37XKad6BVEoEG2Bgu4Zyn6gcCfzYwcLbJdhpz9A4nNKC4fEKwXtEqsuWw4bHbhvnA",
  "key32": "3vjZfEGUwQYzF1U8XHbZYuRJfd8Rw34raqwqYdvGUSepv7eu9d6Wtzxa5Nxj2S2gJhqUrXumBtM5zDxrQdycforr",
  "key33": "4FtTaUvT1883ad8moGuTRk77iQYvibzPAr8ur3zu6rCNm1x37Hd6Pp15VLjpXH3nQSTJeywUfx4uL3TVM1yfsAcR",
  "key34": "2Tn11pHqivLoEpXMWrpY9spedR3ofoQaxtCw2YFH5M3iXVEgeDLuJHrsCCvHAocULgdJSurvTFkbQu9g589BZLnL",
  "key35": "52rYMtGTDZwg4XouVYDuk4ohy5LAoyb4JpNx6V4VS99fb1auM1hkwMrMW4rBzvNgNkLKv8FAdxUxcybr5YWdQxvD",
  "key36": "2dQZMtiQN39u3jtxBhFwobTBz6dAF9pLDbDYEjdvTs1rGF8bF8rjXG9MptvE5uzcaD3Ff8xFnMhbXYtDdTbZpFpv",
  "key37": "CtuJQZAfadRwDaYBRYFtZKjWDQAY2315aMa5o5GAWQJ4t27QWXmyFJgXk3p6yGzhGYbMVjmjNMRPppdgSbiVCpr",
  "key38": "5tQ4q1scLjFghtuXVcnQa5qTBbSkaMYa53oXGJoTsDzeLTgMSEdwkNYoAQRytoiCbcfWf3Be9VNPrSSmBAYHYf2K",
  "key39": "4D1JfQkNk22d682YbfwYPkDzqpPojFr2GY7xx47fo1meu1e5rC2tfq2EEd96W6agQKhuuYNqXai75ogkEhf3hA5o",
  "key40": "5MoeneePkegaqNQ1v8AvrrQV7fMjhFuFh948mBDS1cnMPeZokz2865fpNSzANwwVCAB8mr9TM19M36ghhd8B6JFk",
  "key41": "5ywH6G9wwhdnkhsafe5uAro3zYqtcde71cHM8KBAGU4kR89tqrm94ssCQsMw6gn4ockaPmGcCQJjpnbu43u5Y2pJ",
  "key42": "4R4Ht1MUMapFY5TgYGQ99c1jztpzbEKhZsVNbDiWG5B4jNDom31QQVXok2L4v5175VitPM3WT4pAor2tZfcAHRu1",
  "key43": "3kQJa5rGSjP3Rqzr5vYug8buPkkmB4CprHcHztYxF39J3YjGZ1f7e3nYKF58GJ1PW9iNV9UP4U6KWKjCAZNpYNEJ",
  "key44": "Pv7dijMHxMhndEpZUPD2zXeUMELb69BFmtPLSMt9YXhvxgFDB7Uokeoba4WVEQN27okH9MQ8KivJqkVgnPizMxK",
  "key45": "4X4fePBm55PLZSanwhjhLjZJLAo3KvL8E93i41yYyJnZXc4idXcTTDxHGBDTyc5w3z457JFvCf1cceAnwdKeV7Nj"
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
