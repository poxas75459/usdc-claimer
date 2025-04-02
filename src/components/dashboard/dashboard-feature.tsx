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
    "3hrnNKaeUPmjY5BbUVkRVrL3TcEH2rxZi1J4JjkSTkE7AHHtwToxkmLLSmhW75D8kj7Nd48WdK4bjSKCzQEVSyHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fuxW5zXBB5eKWiG1T8ve4fTT8iJDyR9aqUvopDssVus6xnjVT7gQnbrs63pVL8UaPhhype7Wh6MHQHPn3wybQ6N",
  "key1": "zKAcEsa6odgZC6A3D7eynXYW7wY5LR4NNYkeQSVGw3jwteBeKStLyCop2fPztfeugUfVMpVzwJk96SQLJ2BfLEa",
  "key2": "UJRFm2ufttQFRBfR7kXtqBLSePw2pbqMGLKo1t9FjiffSLGCrwAsdkLbAQXuDwkEA1xQ2TcXCnn1xJxXkYiHDMD",
  "key3": "3LCwbSeqoBTyeddBNWXkVY1vtb2rK9U9PB28duKwhvnYo3V7SkPYigJauYGUx8nkLvH6yijpcD4psDawpbTipnqZ",
  "key4": "2sMoDNJsXy6vQp99vex8coReevsR73HiGuJyKnRr5hu72z2QxD12LADxBgiPTdU36d3fXCsaaC1ubLn7x853Cttr",
  "key5": "2t5AMjytvd34mHbF1QaNvJim1jvjpyGxFaiNKGfwGu1YTyayznTq5p3tQuvn2567USqG9A8LGnGngdHv2zrua6zk",
  "key6": "5QYNzvrKmqAvLpZpd8U4QLKEbMJTNgCxjUZhKBFd85jkJ2qZodZccRv86vXRQLrLFuPH11iQ97L2Ukuf3kNsd4yB",
  "key7": "2xia37RPsw5Y1ZWEy3BnKTJPHMeez1tQLQyfJmPaNAKeidhicPQCkEHWVu9GtiR1F1KZbdMaLYHrSUjp8VTJeBC4",
  "key8": "4dSDVWfa5hkWf8Kw9TVwb3zJ2v6XZbRoKuadbGJBTC5Rus4ZZDnYX6UXS5AVyJrCz1dQqiiutwMsDXikjPyki7zH",
  "key9": "B3djNCPCMfuRXLC6a9z9aFJPF1BVXSM5fKjsC7QV2zLM8RJaSBnCcgLBQftHibAfyLsn6k3zdqRGpJFT7dbJh2v",
  "key10": "3aodz6A7qrP4x9xYdQzJ4BLqZTgV2bJTaeCbs1qCXa3LY8c7sXojAaomtf2LTo6M46cRPLoHEMjM5z2cNmDLjJss",
  "key11": "52kSEwH2RTw7wA4bGoWDFQmoeRG6E9xxFa7xMiRdodk8X5L5N5cTiaJSvWofruNRyynenhg1CPpAzQ46eMDAL44D",
  "key12": "5icsHfNpaqQgV18wZE2ppXeXtM2TbB4DmpjqFX4gZKJaG9p3pnhkLTtf3YEBoh6EkXcHVvaTEnzERCXhG2vF7Hyr",
  "key13": "cnzhsJq8z6SsTp2Kx92nZfc22bbBJ66bFhV6BY2NpUcnYDvz5WAWZBjVhEFmcfPZpF3o6j4tEqw4iDM9kxDWCKm",
  "key14": "4SLFCHXTyivcXUebKSDhs2pHShhrHS1TryuAEpMjxaGwEpw4hkbXjP6qWKZLJoG2T4aaA695uZkGVrVnkPzUjHak",
  "key15": "4uiDYs6QnxqvQ6Gp34X6p5jtFfv9PxU1JgxQ7xZu38pRWt6eeZpwfHegrziZT7XJC79VFgE1Ew3u6yXqbGz26FUT",
  "key16": "z4h5aCD9fsPt6S2GTUVRmamnNwNk2cFc7g3cRKkwV4Ham71xv6ZkmqB7ah3FiUhkJM3J6AKSeuNwdE77D2YDkK6",
  "key17": "4baJFykqAom4SJEgjikWTf7QJoGABVyKtyx5HTmvJPkmX2EUh4JG9FjyzcuQraVUMhmFFKpAExRX4zihgwhGVrZT",
  "key18": "4zCZNJYCnrJ87Y5m3jxsEQtbuJ5xJBpARJR1WqnfJTsfc5e1gnFD7BJRrKBJedZWwN8WWcotFT74iW2qMURhjvaK",
  "key19": "2F7ZB4qVTb4sMUVdHCg1jah9PfTpfyUPcZXvW8cSXm79rffCjm3Pq1AZVYao96tGws3wMQArSjRZYXmctme1TTtW",
  "key20": "33L4REvGwVqL9yf2iRh48SMMGSkjwEA1x5wsjEErL4Zs8dHiJExoUytfDjnkvv11deJqBkgVmT6WEW4hPj5K9XNU",
  "key21": "5HkJ5DcdBTXJvT64pXacjFqVoQwHJ9SLwexxBBaRobvSy4nmDj9xiWFY8aGZWM2i4TUiYZU9xxoS22ynwK5PCYwz",
  "key22": "2QWqiH3W3TyGLZ7Rv178jfygkXLN5cppuLMsgFPP9bFSRVQi63yBT5eiUVJPfrHcxCLnaKvYew4bc3Vq23q5LuyA",
  "key23": "sDMh1t9D75ecR1EHvBTbvCCWZrFq7PSBWPMCqoojqnLa23Fqt9iS9aZrQdSTebjoVLrPW7UrLGXi8noeMy3TSNc",
  "key24": "4itVBZcTTjkcg9QpecNkgLLjDdzo4GwozCrMrGjoa4MrYfqQQm7vfKFRqAsoWgyqsJrBcLdJZ3B5KDfbUCXtpFEX",
  "key25": "3VbCPgnWUH6JK57buHscmBKgQ7LZk39jnRwMccsp43q3xyKTcQRo9skmkprHz5ysAWqEEK51Gsst7HXhFgb1HM1G"
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
