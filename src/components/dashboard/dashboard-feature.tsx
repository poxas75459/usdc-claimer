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
    "2w46izQNPiWjb4ThzFeD5Mosvv8TQTsx8UJwQRwXYq6kYWg5DHiuAcJbmrEK1gDW97gSM58LX3sbr4T9auv1F3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v8PgoNaaaA8fMwDXr4VKKyc3k2JGkkyovbc2JbyhvYn2uRpCrVFv4bz6qpahAeLEVnb4ogNLQsBGK93oWU8ihXj",
  "key1": "286Ty9jCux4VjibmS7rTjb978jB3wZQ2sf75A5L3Di1bCfy4TSxASYm41aDQHNHebJHf3uXcEtpUH6Step9pfkRN",
  "key2": "3aoB9pLv4QFDbw5zzQkj2w6goCtYPTKN5vkzKFcjaaxf9Qeaw2MgWT7hhi2BHzRR6Z666iK2GGm8v3HerkWvp6fK",
  "key3": "2wnAyfwzk8T8N6EquCZmwnjLHsQqB3NsqeFio82LFoEAxKTef8GjoKCNMYDaagENDvzZe1CvQTqP6f7yVECPcEFx",
  "key4": "3h8hZ5Zh5KacBgJaTpM5UGfe6tXvGZ6J7D9svtTDQ44KvWuK6ags9pczACdjaEMpD8FBS95VQGJDR2km48pWNtAL",
  "key5": "5nwHHbKbkdJc2DLcQzdg45cUmVHSGtA5LMAiFAq3kFenxxNw4P7wtaFh29bJxMmTUyBWpPprQtKnkKp5CBPQbXna",
  "key6": "3RUYCp1Q6BC6ENREEdCDbt2sZSQU6ktkc6aRVJA8Xm82fgwJHPvdx38GoX7butEVYmkH6nFSwXJz18eZea9VX2jN",
  "key7": "22TCAax72uCjo6CpjJBd37zwJ6992pJ1Q3ZG8pzqm2cAFboz9dXEBJx9Y8jvHxfUrPzbnfUsRrHdgbVo994uc35S",
  "key8": "5GsUiD4FDUSHmWpyv77d1LLJ7FpAABXHK7EJZvppnZDDte3EsWVBvB7x3kAExCJJjFEufP3QbCBoCvXPbeNGbmQD",
  "key9": "5Ez9BBkBUgS6MfSLs1mFbPNzv2jqGx95R31bDACAeUuXJBWEdxBpyEPPu3jgMUrhzgRLBnwpoPbGjZ8uvMPFmyvg",
  "key10": "61t43YJr9iH5PdSHZnKw2gfWeL2g9v8JtUCuX5RVLVAP3oAwzMBECKc3JFEiUgHcc7VAocF6MANaTzrqLiX5qYW2",
  "key11": "hWzd1ve66daZpwEyL4UBw3QQCyFnTQqnpjY6NLc9uYQBEv2zdwqwaBDTS8bfteC7VXuaD8jEm2Tvj5VuS8TDkSH",
  "key12": "4vSRZC5HHrgw4d9mA56CqkCzL8RaLyTu5egVnv68uFXpVBXDVNcErVE7ThAjbhdvxEhvuhxUUEkBTj44bUaWfcJx",
  "key13": "BYz9L9HAXWk7oxVWBJkTbyNnAfsWEXjcWz5xQm8Wysfagdn3fncyrpuvRKVfymkH6k3JUp4NSaQYT8tqHPGEvDa",
  "key14": "5sm3hamfUJWc2BGUPFixbcnHETrzjY7CBJSFYBAkpAhy3WFBsmdEqqUnABnenJGk1X1KnirmvUpaQYtWhLy2jc9n",
  "key15": "2qNJUCp32SqsqtewkHJGVwXUrhr8K3qyhiHmp23m9nHvh5wsP7SQtspNhXJhNuRa4HnskGR7Gs6FZPM3j1C9rzGH",
  "key16": "5arHsMLbkZ7hqoFcDjTekx9P5otjKMxRHjp1nDua9Cg6yTTu5xZN4rKnbDuWa1Wvx7vYEP8515WziaC2jSkQ6iLo",
  "key17": "58S2i1u37BypxXt5uS2tvZRmZVvybWWUj1HB6BFU9WEFfoq2t47enQi6dnZribfuSECNrvKTXFww57PdxRmCeka",
  "key18": "3HgKofPTxR8DKXCMKZ79rv4qBLtXLbCFY9b3Q12U5o9uiMbgqJRzXZU6hE7WRbVtUAMAUyM1K9JcUmS7FEwuDoVk",
  "key19": "NP7YZn1q6eRLobDAjuAmcSTzU8erKobtceRo2VGuEZx8MnYgaBamTuLZFMz8pPB2UHDn8NBMcw68Np6p7xZ9iYr",
  "key20": "4FPD4r7sA9JCuSESqGpGjC8N5nhb5DPPmmXXJSYe6AEcwd8KZNGuhD1Bu4nK15SGNucW3DDn9iiQJXeVS3vLHHq2",
  "key21": "yLpD3aFQVpjXUTpcvLb9SeE2Bnhv6LpAYzneMF5Wuq516uBxJtrE6VVmKuFoT171HcgnxNM338eUMPmkyEB3VZS",
  "key22": "4WBgpGHMYEhNNv5M8aAKxxvdPkRbawrrZF6m6NH7m45CHgi9ZSqy4PMc7dhZAeckY1wg7Hd1VMbodPHpPgYry7Xn",
  "key23": "639mRXm6CGXs6th44xBqGR9ANomx2CjsKCuVtghupDtG8n26eyYmsPwH1DJsGnayGtYg4xCb6RQbsnUZGcNJTsWf",
  "key24": "fLWEdZiuJQSXcCTyLUUp1YZUmAfkuVE4fNKnUkAYQG3KjUyyKpKi2DcwHsDPUuxwtVWRW1HgYY7DaPPxJBsypgA",
  "key25": "4npsJJkdJVosswPgaHd3UrrUiL7C1ccRd9scirGRGeaDMbMhewsacimxjMjDbbPri8SAAekVjET9U1Ng8D5GbutP",
  "key26": "3sqg4UBXPy6TtfvTFS2YKvgQkZ5cd2ajX65e4UPL6dWPE1izyXDFWjoz9zmvjKZTCKNbDpDAMFy8YJZ7VAXVuE6m",
  "key27": "2CJLt79uJxF6VRuqrSeYuRJdpexQARgx9hYtGHPtJ9urK82Fr9tbJMW1qQ1AVrqD3za25C8y9s5fMnAZLyq8GqBs",
  "key28": "A8t11hUBUWXzo8X77YRLnqmVE8eXTmPVLP6LhQZJngxVhdJocH5hANpGHJHfnuGKh7m4PSkhjDggBWApWUhHngj",
  "key29": "2pB2F9LCuy2Dk77pBkWtddPvgkPc2T4Dov2FSNm1WTjvfejnESzp4XfUvpvfnThJkAHXGVuUrMDcMjFNw28J3KmT",
  "key30": "21pVgyEAhaZ9ZxdPdEcBsRKGt2PEJoXeh4BAcCah4TXRufQFwns2Nzcfn7mNBS2F5QVEKf5UJwwYVoBFWdeJciXW",
  "key31": "52ovJ9ojk3PjJquAMtinTVFgcQDGLmq6AESDAXsMXrvFbCQ3rhcCZVrji4rFJJCXzGCLhN6n5bk9NqWPF63aeej",
  "key32": "S54JuD8th2kh29mhyk1AHJZENbES5YBg5H8bSGdHnHjjB1jL5c2DwM3onEuXwwGejWihycoQpwL2crGgnYZSfT4",
  "key33": "3GTbay1is3HwWJKpixUgqGFQYKW5yNSgbMMJdxk39SzbdSdsC27eiFL4sSixH2Lo1F6wogTomDButzWwjuXiqDVU",
  "key34": "4TSvJZGynyB7yh2EcVM7aP79w1wmUPzyoVqnwUFNsj3wV88fkfve8CzQxUG8y3GJ4XCt6DbPKhEHwav2rx8PNH1y",
  "key35": "2op6R8ScgmsZbezrTDa9s9arFw738yx6nVFSXH6Qv9YoiC5Pjg5RwuvbTTP4KQH7qo3vWf6RaCPW63vGCdBraC9a",
  "key36": "3owp7pqaSDXiNsDRuFarwEkoar87LRpT8oqBvbjVqu1CgarHaETf7TKGLqW9cUeFVeJMn1F8qtAVqRWXwq9ifDZE",
  "key37": "549PvmrcUyypV4Bt9SJGFJkosH3DwFwndojmnkv2NYefLANY4VXUgy68nLPLprhWdTAxKKLoncNC6QNT2z3U9Dyc"
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
