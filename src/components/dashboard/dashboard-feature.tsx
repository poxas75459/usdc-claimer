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
    "3vrkGbNApAmKtxExt18p1iDMaX1TRuVww4F8XguobtRYhSDmgvt6H9VrKFyNoiZqX73kE7S9RwHd33FGN3NM7tEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtLVZxC48zTEn7Vv7kuF8Ukz9cP3WLjwhoK8SVFZt8QMYG7EoEfo8nU6cUpfmoRU4scDpaNeJqGTR3VmsdBHuCE",
  "key1": "2VZ1fgd1WnJfot44HyFC6Y1tfaQjX6qVr7sgc9HBj5pFon2aZhDFXMKz5S5d8X7Ri1nShVuQV7VGRG7gUoQukPt1",
  "key2": "4YPW9FocrN3zsm1raM1AR2m4gKcu55cYh53MwbhMXboAZKdxrVuL67nXz5WJknTJnrmuAaEqjQCFdnFghdy3Gbz8",
  "key3": "4s1C6QRap5TVNzsYBdqdajZx8dVg9dSR2wmV732mBZBw7JSTS6ULa4DG9j3QSH5NHxhAWsLZhb4wTkDKXh7Yug52",
  "key4": "4rpwkZTiqh5KFzVwqdbKfd32KiVowzSq5VjyHfbqPcV6444wwoL9uuwiooC3ADUN7fXquLKfCEwcHjazgzMg1LgC",
  "key5": "4TZyeWTfVk9v2DtekkNyZTUj62BXSV6TccjqMFeRJnSErfn9WywnEhNM2dQrmKNKU3YELUf5dNZoxdH44zHQ2k36",
  "key6": "3w3TGxxePQKwwSpvg74eHRbcp7U4Y8yF4VuLf4Dq2QkiHkqqMhmhRQyV6c3BVwyT99kzNpD7L12ZrMqWNU7crgv6",
  "key7": "44T7JcEtGykbgFn5cpCt1cCPhYyEjjecPzGYQ8WtDzhyniR66G7ZhfguwgsmgTRT5y3bYzqbws23vK6zqSkTMrP",
  "key8": "Yz52H1zyxvPB31sx16YxZYeSczPh8Vn3FGgx9cdkfus4AL5dqbzFmHh3BN8xMyLPMJSEXPMU68TpCzf5jf8YW4m",
  "key9": "k5xpMvfgQ7grLScG6Fq2oLpz7NHcZS2xMrTcSWQ8rHYypxXuaghMF1XFttTxpcXKddVTKR7m7xLvjT2DqU5g1Db",
  "key10": "3is9pB3WxwmGzPoXkURSAAGaSHFG3HPpSs8Jvf96mNk3hmFA8HigsLtrhA6dHF2et2fkhbXjdxBxkUTmXq2svtmv",
  "key11": "2uk65EKrENNbrBXmrXDGCugexKYANX9gy1He8hk7brbnkmvcGHyE3vtDW1jEwNNLCVgFFwsTabD92MrkVmtVLEUS",
  "key12": "WcKNp4xw7RjyDCXsswKPLAMYkVUSsuByPvzRHeq1kkQCyVLaJd7yYvMAapDRWXat84G1tPiPPFrQcvqQysDnrL2",
  "key13": "2dE9mCCgAP3hh4FFd51sNw973MPPidev44a3DvHgTTfF1CHoE6okBRRjVFRVi93hSJXXYgqzFwyRgDj3XQfv8PMG",
  "key14": "4Y8CMMKL5zyhk41uTSUpX1TKSbiERk5HS9vKXa1GQF7qcw8Z1ssFBdekgX1mbKCP6TcSmq6bEM2FsBfuE5pgZx8r",
  "key15": "4zBzTghcAirP4C1aW5eVzdqmSPe6b7z5R6FKTvLC1Y2Qd3XERV8P1vBVfRNaNYHFe9o5TfnoYwtqmdGW12tvtHJy",
  "key16": "2Ua3pKvoGAS73HFKiog17V1GSLaHXHQ1LXqhjMg1FvWwMdPj9p375MeUkFi9HNqQbLZUr6kMRE5vDhYMgxmbUVt9",
  "key17": "4WcjFvK3gde9WAUquDjUAfgFetb4fbTWufWDeFyqRZE9EsnbhfUJmPBQ1th7JtmVB6o3jcMvsSC5RN9N2wsrZ5o2",
  "key18": "X8dn7Waj5sHYPvnDYULmidRz36ZsAQttxB4bCsuvjN7agA95BxJfPsrzs5nN43tKTjbb6yqj6Fd5ygavDaYeawT",
  "key19": "2GPjwJUyVqqgo1VYUQV7Z9at67HyLwHGALVz77F8RCy5rMTt7p1mEur22tAeahBfsdZQ3m9eutW6yvtYgT6oUV2Q",
  "key20": "5Q4WGKDJPjC3cXbtiufWyqhuN4SEf5nhAq5PKWbga2cZxrR9sRjhsgzGx3RuAiWkhRGsS1Su4xkvqqLTzKfVudsj",
  "key21": "5aqYfRh9f2ieqGGNq5zToxHRZLyf1iJcSaxtHcCQ8Kmf2CH1mcGuSomEhPjKm1QqnYEWa9gGTZWEUp1aCU3rhGr2",
  "key22": "5kVmTM8PZAgqyZ13nrobR8pn5hK22rhhUZ2JC4QjRtmoo4KrfNJUt8fBqQPRaAvb12pFB2hNgG2T7EnezstkULMo",
  "key23": "42r2Atp1x9VbmnaDuq6Pv3kbRDphYTMttZMgDBgL4gg1pNg9NS6rUyGNkVj5GAcqAPTmytgU8KENzmTgf77yrMM5",
  "key24": "2FgcyMmya5xMuDuJ5C9PPk8qxzm5eunAZ5mTmCCrWCNubWhZSRKwLoNM67N6XKJWTbPTxkJQxuJigg8WdPFK47N2",
  "key25": "zCwp8Ko8YKNfqyw6Ld2N2zXRLG5xjuWCHXyWaBBvTPZVsbsfrwoq9eSVHpT3sk9g7a7Kq6pXNi7rpFiXHNq69po"
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
