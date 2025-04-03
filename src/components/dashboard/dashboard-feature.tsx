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
    "2fogobRu6bdmmb3gTQxvKjyNWazANm8j41oX9J3goo1KAw1Eoho6UMUb1Ut8pwGLmCd1K4fdGtsEn5P3635yf15G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhnV81h6ivCD4NSYq1TvPbjYKXx9Wrqt3DGvDXuEkxeFCNZ6andhXFTwTUEvKwRfHYxGjSaNK2uPThiPDEUrVgk",
  "key1": "5ngr6JwYxVoaZLFmBThb3gytUPcYBPp3QnXXDuLc1si2vrqCRcfbiaCcuF3sT6r7ytni3Cw5YT6NXZdAskAUuNZT",
  "key2": "5xsh2YSqLkhsjAe6A611L3APgLTzywx7zusd3N64dYdMLCn5Ez9vAdPMfmCcsVQW4KCK6vVqfdxR52cYvTCy8Awi",
  "key3": "5yJW44parkwTPSYkBbRdWH5w7Eb6eQJgUJARHsKgEqZrZrLNjSqG9U6x3tCGhDgFqppSMQQPkUbTskZ15LdD1LHs",
  "key4": "2kmW8WB8oWFs9b4dUFxpqp6tHGZkXzpob9LWmWUukeiqxUZw8q4BvDZjcuejfWDt6pDjSd8oqKuoPwDSjYfbs9f8",
  "key5": "5LVASGTCr4HSwgWg7SctmA12jhPacPFtcSxWJsTwSzHtLRufWgNfgFCHQzHasgciyjMGBRQbFDqQHdjHHpEK546v",
  "key6": "5iUkemc9GBrUtcEdK1ap8bjkD7XVW9SqZ97uFuChDSqJH1GuYATb3QVJhHANsoN1FCLVXBXMkQmnC4n6yCYqjE6V",
  "key7": "4w3MR5WV5RbPUdRMbCyM7UyyGjqcJnQHfK6pLyKB81j6QM9nPhaKWSCRU8ywQ19NwQnVJEQE1TjnA3QF1kSAvJoh",
  "key8": "2Yf9aGomqULxs3fZY5FBbpce6ohXz7PBuUDPZ7FnjmxJfBtYDmxNavi3h4dGDvF3KroxZpA4whkm6WRHw36xYUrh",
  "key9": "2RzdFuQRqHT6EUPLHD7qKQExnkH9NGFgsWihenSCBNWnZQHpEBepjFakksy1xxzuMwgLmwxk2usaooN8eAGjr9o5",
  "key10": "62nKW88kDQPX4ohXpqGQMmtv7YVMx2yC9LCQEwqTTNy4zb5BB3wbT16Yhj84RBnDcWLMui1MZPnMqBH5kVkotxKN",
  "key11": "6xqhhiPC9P9eWE6Z5pQhKWpYEa3jvZctQ1dWpnaS6StL4RLr8EeaQd8eXL8hxeaTndcXEKzwVQuPq2JzuHaFLXF",
  "key12": "3c2UXs1Y8mdAvbHPjxkHvsyJqBhUoYMW7R6gQPC4KreFSfEYcnkcVPfM6Fq6nDA9rpqn5sYFZZayNb3CPkL5JZab",
  "key13": "2u1RUmpT9uyfAzLwkqTrJERRLhmQkVQHZqmKiLKeZ9X2WMNBKvRaThf9bhAv4WFP3NvY2ByhYcnHo1NyG7Ydo8Cn",
  "key14": "49Y2fw7bnR4JNesixGgx4WR41y1EcHpcgsTmT74ZiqkH5zJcEaEFASsT5osKDGCtV4RktFKJhYS3yFYEjaxYKpJ",
  "key15": "5Aa1ozfMfESDgTTfcZ3SeHzfcN2UXpJFWHoZBnKam1wvw2uWNCLYcJ2ZUfBmjiQNTmtHa64meoGqK8dbMaEG442Q",
  "key16": "2WJWhW7xHVxdLRWFU3mT4oKf1PiP9HtCW6HKed6FDFo785cJEjK1dVMCyutN1p92EaVb9WeQwZBmCjDSVNSo5LMk",
  "key17": "5WviHEP1Kwzyc8U66imtDv4wETyRcAuKehpV6JtpBhbY6QqdDqP9Y1zCicAu7pGfcqeH29pByWdKGdwuSXPktiVE",
  "key18": "34KiHfUNzGm6aABePqwF5crvf61iMH9V2eo4ie47HZMCPzFwLiBWAGvS9ZvSU21sDnqm1xs486uHnXWSdRwr1g7u",
  "key19": "5XaEacAF3ihqNWtfZNT6nZ7AP9rkWWoNsjJ7XCokt5vAUYLcDw9BGwWYjTBA6xyhtfaLX47JMpK6xuUVzdkBH1mu",
  "key20": "2GoVhtszUkdkemfzxZF23hPWX3ZFRWU6DyuGC9qpkyMi4c43PbZGWvh6WnJgUKqwgYMPhxuNGT9vgmsB2fTTMw3D",
  "key21": "5g8mo9kubijz7MDugMSiNrhc8ufyRW8r2rqhnUy94f2ofz4ChnA16VUHigqpH4UmhRaBWNegUwszEmsXU13uxv7",
  "key22": "TetW7MK4SN9nGiM42MXQk65nkThs3UKBa2nbZAWMCNPmfWkvJuEG2Zxccdi66d3umX7EqHfJevBzGLP4j76ANVf",
  "key23": "3gykRuLPwVjd4rELur6dpVRVP9GKoey4T6X4J7XGtakQYGYogh7URdZUvw35Y7tHrnEFtyEiJ6WsFT2VyS7cL2VG",
  "key24": "2yAAkgrHbEFqbZXwKAkpuRkoaWofe2eB4kSFZ8cpzCDYP8kxDEBcKPymvwkoToPMZcWMQJTbeHSnSfAemWcLZoYV",
  "key25": "5FyoeW3w2mDHXjowWjKatXHYqCTnQpfRFZ5dSRUhquonr9rjMmsgeooTrKtvAeyUtzEQtN9E8sgmkrmnnR8Z6tuS",
  "key26": "4WF4T3kZy4DQfQNedFiEoX8oRCjR4HQ8aLHxfMaKHidbo2qaruCjKAMEum5X3djEs8C8KdxkokVWaLpck9ah22rR",
  "key27": "5bWsCTW2gGbXxVdtNVD8TCm5d2gRoMDmHH91zpwbCFka9BM6MHpQom9MGxzW3SaAAkvXC2pHfWtUaTAyVEWhmqLg",
  "key28": "5TkTd9RRabX9BrMNGC4vX5voFYeSZYGw1w17GHSfCAr9PuUfg1aKKwCxKEhhcvotMRZNXtYiZ9hCUPeLZ1ZGuqKf",
  "key29": "3c3bGdw7H8bEyGuH7RBKBhxMaohvzBnNeavrQhANtyi4Y1KirWG4GkDmu7FUftULTHCxG5LSKy1YWNKbHmc87Qw",
  "key30": "3pg3TWTFxnN7gQz4dDusAJnRHPUTkFLjmWpWgSxomUtfEjBafoBUNaWZRmTY1N5g1xVDDucoAr7uvXNLZaeZ5R1L",
  "key31": "5F3pYGMfe78KxLkgNUFA4QcM2D2ZMWRc8i7kVeaQwcDvPcjNmWT4xojfpPUXPJabk1Vy79JKcp499ueMb8rRPd8j",
  "key32": "2EF3SDB8pYkjPbKBRS7aFcrShUYzT6171E3w4xkXMLYXytN1hmKPsGJujiqqjmFMwFraMqtYXjGBugo7Envt9Tvv",
  "key33": "pHYscpKYpvNphpJ3bE6KVLucVpKiU6PwBZnVYF7fNCSQG97LaLTkcdpXeDNKGbBep3oNTrNyTQzvAwygQYXEhzY",
  "key34": "3gq1W1CkkbyntMZRiLXDmD7hMHHFidfpsB7u3z2Pk89heJEMF5JZ2h17qqpgBsPFbTcBPRQdXELCTpGNkD3gzYnd",
  "key35": "3MDBpPRzzpbwVDFvYkq1ZKkPX5QenxLAPouoH3Uw2z28XN1vcJoENvCEEFF7f7DMjRn22A2k2qHtgRoBGxBEDsRw",
  "key36": "2GhCStszUUDFcSryqhes637LVCXCQocjKLxJ82vQCLjPueNDRcvdN85JgjAWgizdiXS72BD9qobsqk7HB53wru1g",
  "key37": "4MCBNHNmVrjRELZguygTW62tutPsrDa5RtZDsJ6dAnh9NooL5JMTmfpfQaudW3BGHEzg11BNBbemKTGan3RvrqW",
  "key38": "2DhoZX176c5o3KTHqt5foYRkRmGMTZwgQVPNWbtufyMA3FQWUnUPDYAx8m4cfEE6Amz9NzHKGJtMfk8JQkrQuVdb",
  "key39": "33pTMtkQ6ZkiELibXKm2R52AUjhsx3k3H34R7EWJTDVaWwHq6jBsDhXx8euTyR55xgisidUDEqVkcv1Z91katmUc",
  "key40": "3K6TnqPy19Rhsa5rJf5Q7aHsFJrphTkypzCGH5ndxMprbS9HWzrNqNKFGP21uc3Dc85SQnSCPe9AC2C8SaH14N7Z",
  "key41": "64TkxNNT7po6ohPn5TFCpYUGSRdXM1JjAvMQGqzJn3gzFXc8yQeKKW9kdha8TbPBQALikfD2CihU1hVHhPHyvUJU",
  "key42": "2moqQhAMFmCpEkjzUL28ZwUAk9DJbSCsN7dnnxsg6ybkJwxS7652N9SERCNGpJuAuyFuUSdRWJr2CsULmBTn5uMN",
  "key43": "diFW6pFjLhwSxfPVEMMkEjwT2V7q6oGM18UMsowmNhBJiTW8bbeA27TD5LLkUd4n74ojxBtSw2TSFYzr3utexY4",
  "key44": "3QeGkhsN5YHv8CLYWdSTJPdxbYnQH27TW56hmycnKAx9zEpbsr55747sLjW3vHsGCjTC7bfNfa7b99kVmZiDGqVY",
  "key45": "5MgjpDvL3M3GG4iufP6Dhik3roB72Fs9uaf2jqGQJAt3x1ZNm4u4cm9Bzdah467Mb8HWebno5ckf2q2TcVjCX1B3",
  "key46": "4mbR8pGGWpPe2WJ37Fk3Q9vsECJVAAupDDe7xR96csKd5UDYJ3h9eNcvMNzvHvMJNevN6nBiZXuRKqmBGWdz3RBq",
  "key47": "8mcZ5ciqSNM6Nx8kcom1sArWUaUzxnanQg2xaZSfHQYticJrH3Gw94rkDn8dxFrmScmxYfyc96R3f9q4FxPmw2C",
  "key48": "5nZvMCTQCEMztsJyrkgwvYL2Mx9RgTm43XGmwo6EpghVKYSwsgVSS1RbQVjpeXSFtRPFhRUNYinRSwbVNnJ3S4RL",
  "key49": "36XnaLfV7YwKkChEnTW2zXQnq1yahTQupvuFvQNb5FgFFDn9yZdLatE1Vcq9XLxy3D6GW39ertduWK1vzpCQtZZX"
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
