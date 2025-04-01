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
    "3AeNstPh8F3XiSwRTtNrzCxmhvaEaCRSfkW1oV13EVzw5zWj7fN4wy6aw99HDE19w9Jg67v1EoU6riiFp5HgQvW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBGSaCvXur5D2nMArfNXaZbdhDwx1V1QVZ14coLVZpu3JKyzhVzBp7wugwZihMG9snbvdPYYW6cpCcDGFfFZwyT",
  "key1": "3gBWz2JCFBq3j6ijhim6DzHTa2ssyNCATg7xtSziGDC9SkAzaX34HppNNKdMQGYmoVBxvL52x8pbnqD5Ws4ZYmfo",
  "key2": "5J5fCeT9sSWRJ9vD8153MMB1GkXggWxM3P5HAj87zSrfVwMBRdvm2m2cqLhJPy8YD6F9FD9Ts3TBR2BSxCbxoTpx",
  "key3": "2bVMmKVEPj6tB4vh5P1h3gSh8SbLBZJxAfnbBc11eTuyc8HoEVHPEFpViZUejsFUVLR6nh7jsqHQKkSxrooow9X6",
  "key4": "k6QfJDDLModoHLTC5hD4YpoKBgQiHxoTLNSuznuUA3t1heSoxU5oWvkd8fJFcjZu3Zfz1aH7yCTB4beNWqnvE1e",
  "key5": "22ix536m23mfs5MQ1ApwynvT5wXSMAAwvf9eY4wEJ8v6hFcDmWSDcoE2DPBze1NDWSmFTwEq3t49pDdnXjovr8Tc",
  "key6": "ykXEWXzJa7AqSrEWf5mtm1cSSX6sKBRRXmGmcTQbxgv2GdFKYwpKYw387po6CYATDXL7NdYZGpxn82aPHciSQbN",
  "key7": "3GPNdjv4vhSAY6SPTQrJXoNpF5AJCJixeSBsbu4JsZofydg23GfexEvgQxWRqZsATrGGU1VWfuuJ4croVWgq7vzH",
  "key8": "37Pb1EekxvmwBZsDja7QqHRg8Wu6iGjf9dFHoPQ1akbkvMFa3G3kdtPXGnGsfQrv5mtdYkJKWiUxzwGAkUKnh3Sw",
  "key9": "5Yyy4BHn1HH6kTBjz1VG5xZ8899h4GaQUVPVYWw3SzZxKF1PQZY4ZXLeD29umzY2Mwerso7r1m6K6eFYHgBVfoJ9",
  "key10": "3e1hRuNqRMxacGrTVeiAUnQX55KiaPFy7knxo4y6iZVSkiNnQxGz57GDeFvyQxY81R5vsqQcXow9okfhQVYWwPgd",
  "key11": "591RADZDJxAxSyMG1HtTFdUFdmpmAti1WFnjuncgoCVME5J4pwyCQDrooP5UZKkbiCwCawFrQ4thbzzAyhWXyzkT",
  "key12": "2wm2qfv12oHFinuXZsy3P7oC7CGkNjsuymj7CVKs9QgjxDB8s4UAzRcCMWsvrUofT7BZqVzGsg75QD4agHxWrtA9",
  "key13": "UK3EYkXYtPXYkZ8JV22ArjMAH4Dwr4eRE1zo29KZ2CdEcL4EdyFYK2Yex8SHWGBXCMzX1cor9x6fwbA85sfYY6m",
  "key14": "4wHVkkmKD45gDTksdBM8TjTo9NebqLCViPPo9VdURtu3H51gRfvqErwbWXnWGXfySahYLkDUy59wyARwQ2M47pBB",
  "key15": "3gVB14Mm9h3MLddmNFEh8WTc61ETWkwMdALgVk76zJ2eCF3LBC232DjFYt7jyvKWkcCjspzJMQmpUuBaoEHChQta",
  "key16": "66SU5Kyhiz3L25cbsDxrst4HXuQzDPMRiA495ThwVsrnvofQ4rqYjtUVa13qPmv2bsCGMYRmzgZbiMPTishh5ALj",
  "key17": "67qZSD7UGa7EzrKjadJoNG444zEBR9xurF33HUUnwuDdrc7NZ9tqEAD6Y4wv8tdccTJ9XqZLPriPW9RuSFSVRrnD",
  "key18": "37x41n2YLyRVuNLhUTc4cdYz2C41VCuc5KGVjjMZog9nQBxNwG3rTmsQXBDY1JU5B2UiSLr27MzDEYSogKhTrho9",
  "key19": "42D1ihoJ8AfrrBhSX1QPdJz1LwZxH8SdZ6upTKMDAKufGYMjg1qng63D3TRcXx7RWVx8tLF21zygPHwbZTQAgVqB",
  "key20": "654ytGEheTWdxMELgtUYKnEt5Ghouq69ZLUZdkuvZhJkYk282viE4EMmz9hzEDtRpfFyjky2LvMej1ZsbZYrsmdS",
  "key21": "S6wt5VZBiQJABQhr15Q3v6G7ChNd54nkg19q2zvZjEzx52V62hXrzLMDZ2YqpACNGutXzmZF4WwK5S5vmTsAMhB",
  "key22": "2TDTkPUtTnWPP4CAmKiEDxjVvZU66y5HciTmqUHkAcqmd8YLdMh2KJ81C3wVo7tLmcUmAHNzJ2s1toC8efD2S9de",
  "key23": "38dqj4nNm1NUTK6ncnJ1ZJ5q8sH1r5hnc2cDr4ssWrAw5DDJQDzpioyyPreC1GEaCw1ir8Lsk7uW955iQEyGj1ao",
  "key24": "3BLQw4HCGUdmatUUJ9cXVL3ws9FwNYh4u2HJYmjwUCPWP6vD4qut9dZzQkRsqDkfLTPVjuRLFFSu1HeoD2uGSDnb",
  "key25": "3ee32ERHEDJkPnAcEKeDW1ddaquGHgdaYPZyNUG6nk4rs5D3vysq7nYQVaQLFsLgEnHqYABtQ9ZCVNK33AYiRwUk",
  "key26": "3zG58vWpMsZN5PYqkVRFBviT9refvkynPQpasw456kKNNWnLVNp16zeR5DA7RJo7Ja5tsrR5ghc6sKCQVjbDkRgH",
  "key27": "5f8DJtxLpGVncfWbL2igCTpVqwYnyMvYbBh4DnmH9FexYBZwha6e9sdRpJpHSLsHECccBogXM6cTtgeAyVeVpwmi",
  "key28": "5F5WEJWS5bE351KrWrTsYu2jhUXfL7AtKjSJPaJKzuQUN52SugE8Fh2C7P8Rm3paYC1ptT5Pmq3Ki3U83YusdiF7",
  "key29": "4NLD1azQ49VQdoWcxCbpHPqy3gmvVhnoS6FcC9qpapCFLqdyCpBkxPj6Kxnt664YgPgaUnb8SuaBJTiynn5vno8A",
  "key30": "5Mj8Pebf6v8DiJ6ptcNbHEwtFUGVRvFCDo5mCdYyk2SoFi1AiykWQkZBxFutSA5BtCVDdoTNYPS8pN2jRed5EixW",
  "key31": "s9xpzAcgGU3FGx75yVspQ8SU5jZvFov3DZKxcaTX4zeBJ242PhkLsgMBPpf2HEqk11fyKTDUkCz4vTh5CTNxJgj",
  "key32": "4XRGY6gMcQKd4UmFNk8DYstk5DWzcoxV8Fb4c2Q2Sh1a3K7bMvecsaPLGkVGLtEtsmLJ7QnhoYvzwhLizoX9LfgL"
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
