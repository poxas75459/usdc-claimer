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
    "5WSLPnDM8cDLanHuxCWH1GDfdtDpSvqpKv8t69W57K5VWf3HnZn3TyBESYNcYtoJkpa6HXU9RWRrMpECYUdi4KAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WyTT8Sx7TgdptoCv6y8jDR8trV852QwJQ2qouEEjnPbPkY82YrFC4hxTz9H6UE2pT4xRgyZa8exPEMxt3t24WKQ",
  "key1": "4bgbRVAXesQntdT8jTMgCMs7fxEYqtzf8hC4FuCNGJfhdwRWVHWwN3ipkvctaFw3yupzaKHxuGaN61vou9cttmDw",
  "key2": "4JYTQ9TTSBhtkqd7XPkjpf7f3izKpecRz191Ckwi66dg4g5XJ5QvNnKY5YALAyfYxWHUsMZQh71w5DhKuzKzHUrb",
  "key3": "4DuvaVAuKxms71AuwYvH5RGwEeABiRzRPBeQwF2bNU2Q4u9SHsgmmC8qDqExMi4JUtacSzyrjkAjw1h6vvNhwv5L",
  "key4": "2WtoAPyzLnSULuSaQB79Rk5UV2gQnXUu6tqgvk8dcp7W7aQPEGeGsuSNJHMU7gJqZoPBc8WhG2EowXVs1DsLTcN2",
  "key5": "frovZFwLFW7z2uAwTHP4Q2JQdvuBzM9EPm4uPh9UTdjGhMHWZ3YWEuUotvQ6VbYMw1pDBCFArDp31Sno6sGCbKP",
  "key6": "3nvbvmJSnfHFJ9yptdqfAJuWP5KySpvckTejM9CAZ1zeQSixTi6deSwzf8GjazjDQZekHYDVipxGdbcjUfVaGme2",
  "key7": "2bnz1zzz8hLk8k1sW47Q37FrKVPzeCHATcFhzrhMYX1YB9jeg7ASHFY9QF8kh1JEJrUpdaMPkdX92Au7tMW9pXVF",
  "key8": "2gSQrEJwZ1KeBj8Frdc5s7hAXJQFx5PJMxu9UsVkGicsSuZe1qYJj7Lh8934e8tuquwxU1gVhg19ckmmqRTq7sCF",
  "key9": "3R9GqgThZgbSqiLQ9HZ6fwQ29pw4DhAugtAuKAtDLi27t66Tc9MnqMBf3ioCm6fuZtm2AJD1mMHnjUWNKF5W7HqB",
  "key10": "3RQgyqLe8theSbpRzv1VEKyfpYbjWyFUhGvstNqhru7SxwPWhxuqbuHJLLiqtBW4bPeuytv96T4eK4UQ3XHkoVCY",
  "key11": "3Wk8Vi9UJA5ntYA9F269cdpBbQSu7j7X28knbZMUiYaHEMjCcCCBZYuMNLhRjxepxtsE5REhUmrkwygYq9YKzbrj",
  "key12": "hq6acRv4Lk8BHRxC4EW3bdGEii8Wr7EWWDwRBS5hExR7gaJQt7xVJU1XBcZUcviz7zdhysViG8e4gAsVrzV2fUm",
  "key13": "4DVh3QxZt543xaJh9koULwZYf7NUKKJQ9QLu4wDT7D9JHHPZ25dZn8UmwXT17285LGZJoKhpDfEvifmZPAjBW5hB",
  "key14": "5sqz6yNaxKqxj5kW1KMvRkMMqpUX28RxCKMpyj9yHrDJpYRA9R2neJjYQh6WqNgDrkMByiRtapWko16hAChP5naV",
  "key15": "5rSi4j4dBe3WgShpc29VRMeGAsYC4cbybpVsSdtz3V4yBjwkhYLzAUFZhWcYAKGxV57AoepS5g69ynZvPMYxdAqZ",
  "key16": "xDoPG15tC8WhNwnKtdi3xukt6yjDdTpDvgLpwRQ1uf3HNFJqDSEBT1yW74p58ghyWUARAxZdQfHciKNHfHXbFSZ",
  "key17": "qNbkhvN1SURhdYKBd6a74qX29Ro5roW2vmFfCB417p8Ao3E3NM9UgE55tMu5Dt39MSd8J51G5fYiLPTjXeAuTGY",
  "key18": "3fckVBWHWEJPb3MvK82fvUVJH97ygMvmWqVhhHBRfHuBuWzLtZBxLKqkgJF5HttNu5gFWgm4ouyT1p7aKtXCAsS6",
  "key19": "ZzUd3dYfPM2xyFU3He7SKxk9JPkhuboMpgrkxDXzAuYYPPLYLbqkQqDehHyLbM6ET8CGfrTKsBD4PbydJPETRjF",
  "key20": "4W1KbMz3eET2MEMVdYmM5uxhtnNendNsWKoPhyttnPoVRrHBVRv5MS5ffPrggh5v45UFxNjzUEADfJd2WUu2YeV6",
  "key21": "273n2zpJHAU2SSrJJpRJLVXbq25ssTbnFutnpCwxrBB4bz5ebbbfXUsWnWeXsuNUg5DtS1GttKbdh2Mw2L2xxcF4",
  "key22": "rAfntJvhkeKVJEgvqmvgwf8YWENJz8UZiv1k9tosdiaccUv7bFdUgcUhRn1nwvhYPjaD323SwfhuBuWxUmJAmmY",
  "key23": "4msEmwYLsgdi99xzqcS8CZuZbi6bZGxcMeGd7PGr9TLNhS9BLsEjtSpztAwVa7GHApBFpmUuyJHp2VpUwuWYfxcQ",
  "key24": "3hmzCycT75vMU3Ec3cTjyUtkurScuUXTzuv5aJkMFCs53szk7Nkg5DczdwnjjRDtiq3PybtPgHHqVYQLuCXGs2W7",
  "key25": "5WbijkWzcAWrcrfdWh55xub7e8uXrgRh4ux4oFB1k4nZt8HnjiVysnn9SRAUxpzHe9hkHu46V4gT61qS53YK3BvX",
  "key26": "25rEnQizA3A2zKcbzFG5DegVS6VSL2RYRPm5PBM2g1XuasXwduoy1mknhDWLt4jZYVW9pURMdiQBZwRn4H99nJQz",
  "key27": "2NyuiByQeUWXy2iwja6q5FBLtaRgYzhm9azxTKQUEx731yYGTJu1eZSABMS1ThY6Xa4DM8CUjhSFNEFWHHAfuwn7",
  "key28": "86ngBGAajf7K8XmfR3z2tEc9VcswQ4evzxvSVJuhU7c9znYBi1vFB74tWs32UoFGvqneEufc7yzopy9UuZmqjLT"
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
