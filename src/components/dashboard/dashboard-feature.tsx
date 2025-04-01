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
    "38ZgPeoENfLsmhMq7bLKzXJJRnxNkriA1EzuerkN7g3x6KbQDMVphQVrekSfxJfFBWyzJjnYAbVFLsHoAVKJX7rV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dsYdTUK7Qq8VWHmfr5zWrKvomdJd1AeMzwxC82ijo2FmfWRPJ5HnCCMcxKdSai6bqx5VAmZctsuHShRhKHact6X",
  "key1": "CdFBUtW2fEZp9nJbdsbVNv8H9eNzSJizRfvvJNkxfNCB2pm2kByZWFY5For5K7vuoDsTZUP2TGMpQywRqzVK4Zi",
  "key2": "Eas5zcafDLeFd2sW5xe85hbUwptgSXJ57YaNZK7cF9omuCkEnWckqoK44rJs14T9icHNUJBt589Ekps2SJx2jRc",
  "key3": "64KiiHWKJmzWL9b3wrLBk9hXzWoG41inW3pLBPzmokJrNKvpPnrmcVYxFpfKbma31Vm5LArrkenwFnJxYCES3gBp",
  "key4": "3YqtnjE4nJdaEm9WvxJrUiqYML1tp2kdTE1ibz6gxPHvMFG7B1TdnnWHadwqPiqFtTLz4frCqxaWSQviWniwrKSc",
  "key5": "4B56z7WKpbgHjB2JMzvL1wbuZY8BM1hUcGjxRmRUogGsdceh6GohYTdsCJzw35PmUAucjQeQj32wxPqaGFg6eaJc",
  "key6": "27DVtqzd3iRnKGZLtigQiJnHaz5x3nH3KA11MUz3WAb4puFUUNv34ihrSxQNWuArXhUAgyfH4hxjtAUiRctTECRw",
  "key7": "YGy2kmATgBWS9YaP59XbbDYLGa3gmHpu64KQeh6EvM8PFa43ffWNkjmJFwKZJdrkM35TTpdVSGJHuKhXrBf3rQV",
  "key8": "42CHLnyviJkhMhRsfLQRvarBsAHNZv5mru9LKgjyCBudnbPYaMomnhAoF9YT7vGvJnkq9K3sUssockSnosnur2m5",
  "key9": "35RizxjsvW7PEjQaSrn3t3Lzp5qPfHScwcRiGmbsNDf4VooTRxtRwBUEo23Zc6fU2yprDE5GEWLkZJQjYEuShE7",
  "key10": "5agRDjgCz7L9QXV3QX4ujTsSaNBqC8RvRRNGcdyyoQQ5rNgXcxmFWh11gXjYu4NQh1EuL24UJA1wQ4YxiAC2UxtM",
  "key11": "2yxK6eeU1tjfnW6dhU4tcQaUCWTHyDSnPyjkJpsFWFBYFH4euMCHDfWRPyd28nMzzH5McxRfNtmE72nHpuLegZvm",
  "key12": "5GhqjQJCkMcHhp9QSbh8yAPB7fnHpH37rbqvLP1TGU1H6YeMhKppNN1f6hQdCct4hzRGbthsukRQr7gzj5tgK7NV",
  "key13": "4ywnVyS3o3VXaKkNS263oEMr2V7disrAskbsfp8eabP2Kh5Gc46W3F4JfZES44GM81K4nunuP7myD9XVqAdFWRAU",
  "key14": "3Qg1RqfmJt5hVgsZzvekJLgRH5YWYrXovGhvoe857aqc5qgjVf2NFuD6SDvV6KHTtnJAaF2B8FDiXMzENkk2p3nQ",
  "key15": "5JRMrD4GpJgviXWL5dwQu3t1v2wAapJmt4B52r9dN2Q1f7B9NQAvJq2eHADHk5LKMxk8w9m2kw5kwNthTYZpPXnW",
  "key16": "RrhLrQFFyK3kRhtCSSA68H14gtJixnqwMpneUtZxBYFc16wWfehDWPLuE7Rx4uLzDuQFUHFF9HkEG3bQrjAUs1G",
  "key17": "3RZJJ6ynaZstrs2efy7eR19HJMxu8UCwDbSvZ2jpDViswh6qd6RBqivrWuR4hgVnakEk8SiYuumAYrYGeNrbkynv",
  "key18": "62QS3Wg7oD7kZGdhsYtTFKgQnX6zbhUQZMKBxYkSNgPKDEdP5Biq3U6FjKLfdxL77eXrB6RZpzp2RwN4NfzPxoTL",
  "key19": "4bpYEkHAMWMgXy1c1AJj2ZnF1xPteEyeQNqGNP5BQY2Jo5re5XDFvnhdA8LBN6aSKVLvYZLvsXQbne897VSCjCAy",
  "key20": "3LYgsuVpqeMMLXegrithnF9tLr2jNpt8D2eTzwE3YRJMNAJb1hpWD2ZUkhg1g6H7cxMLVSs9xErjVfewxfiWsxTQ",
  "key21": "5PvhaWFPMpTpvQ4ZSfit5qQKhfHAnH1MPrkyNPMx8323SLSSN3GtAMRw53mNQSP1zEmXXSkbEU6HKXG8PEqY4rDC",
  "key22": "4sM4kKUNFFUW84GUckzSDMcFGwjuzgHkcxrF1RURzNHXpWhRyyZxi1KNNWwExcTxAABKVzmTe7gwgpADmZVpHDLE",
  "key23": "2o5UTyTfHy94naeWa46osPcUQYzPmxdQNkcHzKGBL5GLb8Pj4Thxxj78ngugifiEUyfkbHhV6cgcdRo6ceiQudke",
  "key24": "4baWRdYnx5ZJTi4Y2HuUcYmZMcHoSeZtpo8Z3jfQvZNwhK71oPPHPXnT9sGrsSeVwCGkBBc3wzvmnz5dzbZh5rxj",
  "key25": "2kkks9GmcvWfmFq6SmE1AgMPSNCNrRB62UFXUDCPy6KQJc9CsCrku4ntndKYHtXk2e9BsjUN2DjUkezEHkcFCwk9",
  "key26": "5Uxkxn6m7QWvyjhU3k137QDxVQgpVCTNmns1rQphH8jk4nA2J5KgknovNvCJMBuYksbjgAp4dftYW5BLsEVD4AwN",
  "key27": "3SNWv9jHpoimpPsc5cVSc1GJDLaL6fDcqFNHUP2Qo7FVUHGSttvf52duM5xGVXVGNzyAjYoP6mFEv2yDGXd18hQC",
  "key28": "SskQ7UME8cbnvbembhovu69MzrypQzKuQuZozxNB2krdJasneX32PsDdwxh3oGJVepN9f7yE4Y4suDSvYVZxRP5",
  "key29": "4pN14TXr2AwEmJ4XhG1vJ5Vt5ayUPzsY4LpDNUN2qN7aFW2RL7ikgjpdnqkyfqQ6Qdu2kt9EJnTReyYNfuwwdbfz"
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
