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
    "6M6atFGHA7kSKwJpsE4Fo796J6v5pHBunMzB4WKftAmCQdRRgLJmDkBCiuRru4o5N6XyEiHazxJ1ZTnT1FTCShv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7TF98CUdaaqDURg7WLL9Mzxw5iEzxBSKTboCTRADQsEQhFyyNzRs87ncPkSDgYTXthbKg8S13dofQgMqbZNYdN",
  "key1": "3PAKcAx5BebHUpTkZjtG5vngAPhRfijGMbvAd36SEfTR147SJrgWsdeRQVNJ4Hqbjvcbg93k6yoH38GxKQPfBCHd",
  "key2": "566VaQSwtSXYLD4spqjhSMxJBKU4a2BS5cByPWJyZJaUXTreHs7qGvvNsSfzCcHtCUHGmUAfjEK1vTF9WowmNtqe",
  "key3": "jxnDoEudQxKBVbXW5sD6d6PfEEeSoFegdSgDXai23gsKPPiyymWDA4VJNQZjaS3vQYG28aC6DakNvfq5Ld6SXDw",
  "key4": "4GyEEZLVrCBoXjeUDEWSHGfP2hQj3S7CfGQ5imHY67yt1iLAqVBRmAn5tC5XePNXcMAKyV1xLBFeFhYofEm6zeUh",
  "key5": "bde9AaUYAm13w9usHJCYsNYw9aVJVuhvEuTR13XDQYCK7F2zuWiiaMLKFAtDtQ5GvLwhPz8dbH8YQrwe8pgbTxr",
  "key6": "3XxpoNvz1qzBSaS2CU8FunG9G82BmTP8fL8kDjLYAURNjh9fgN9z1kDZsoH88qihALDWeYrwmk1TCvEW8k5no2Mu",
  "key7": "4haDfnNPjkB4r6hjHhgszswazBdJh4VxhnAVWeRgW67yhKrySx6ScztXMbfgvur8zYNq8jNLDDHJT2MqCWiNvHr8",
  "key8": "4NDaEqM4M2N31RDvURy8VJRYrWcFMYdEA9FuyurdEbjv1yfddryCGdrpejj3NChUjD2n1t4px4csVkhyX9o1hHGJ",
  "key9": "4WM92A2WjznxpuvjY9Ar7B5EWKdxuQzS7wCm98yxcxwd5oeYPF2cvQyGJ1WTWC1bkeqskvwMqvjHfkQ11kwri4Rb",
  "key10": "7And5muLiExxpay9kXTGdxfEGzdrwsiGYgUdMtyhwdkasrtqqCtDibcywxYNvzfEqJwPjuoqTJBkwFuqZjw6sUa",
  "key11": "x4RezfFR5MMfGvpoHy3GnZ5gLzk8MLY6FQxyr9FeaWwam7XYGGtL4fNR9DADAbA6xi8QxWtB3MY4NQnwaDqdTqd",
  "key12": "6q1j9XeN5AWAoDfZLoybuZTnPHjWwW8MDYQ4LEoyE169UV26HHsZHVTvZgjEywyWMfWYnq3TUauiUFaWBn3Y8ff",
  "key13": "22f6FKnUzdNm56G5E5CGc7nDiwmo1yf2aw6eyYJ5sxvBevhpsrPccNpVFVQ6FBqoMuD532j6mAno5CPRi7SJq9jt",
  "key14": "3Fhq4FCrzAXSW9gh778pWhYsLryg5JE8v5fvJP5RSPMguQ1vQarST1TzWXX26RJCC1ujA6Vi7zdhvtZMHrxn3w2",
  "key15": "49MVmsfUfVT43TXo3XKVjGvRw5m1FRaJwFcMuAYvBFR55CG5kMH6wkwzTALquuGoLZGd9PSXWQyNYXuFAgAE3wmL",
  "key16": "4wSTQkQcQCxcr8X7krKvtBZTsvBGAAyNEhtZbLz13sb7jHipmcAY8AXhnEJRvYZGDE1PEawgtn93NiBmsHPqos84",
  "key17": "4woE2QJEjWosCHkM1xcsqDeL6QwCX8LoFtCxWaCdh1TYM3vrPd4EarDh4xi9RBHTT3Wzuit9Xt664prL4KSaWZFi",
  "key18": "4394DskxfsCjzXzv4QjCb6GbWBMUwCh4pfTjgGVGgzLpfqjW2w6Kw9FYXPGBAFirs8ffUqxXyyHTri393LLUjyHw",
  "key19": "BCfgW16mqcEsJqxGo1H32YcfVpuuALUGgpN731Gu9wg1Y4LVcKcrjLFeSYuKz8uKadQtaHArA5MLvRiWk3stXsw",
  "key20": "3pP4Zj3zmvCoubo6FV6u8tydLDF2YLJ7xJ4frXTp1dsRWMSaypNDHqYNuKDEBRtkBeHQrhx1wrAzyRtiKCfjGfjX",
  "key21": "3D4qpT3rwoT75XhPbZC4JDGPYWStrmM3bRNuX62Ut5WGN9fTCcBonyW3dssKoA5zZWZ227E9jRvuyzn1gY53QWkj",
  "key22": "5dtXEbvUBZvfcDmRBa8CNkKZ8DszEVcmnTifAExFsfJ3sNgrCQ4XYWYzzz6C2cT6rqD3Lpv8YynmqDz1P69gkQw7",
  "key23": "3kg6GoWMbKovxGVryKx63AM641HsLcKPinGPbeMKmUiffj54hLvT7HRUwHfHbj7oxf4FL5WsEitqfCD226kFyJaG",
  "key24": "4yyWdLTT5HfVZompoc7KFRorBtcVHTNc94Vw4tRw456r2JxHVPscBsF8wvKT9GNWbpwesh4xAyhBQHsqARfS9Dhp",
  "key25": "3qYC7t5bWqJPEaD1qKvvGMuc8mgvRTS5kwzYBZfphiSk2hwLRf7Kz7H2Wo6N7PJCAGcXVcA8Cgfh1fsd4Y53RRMY",
  "key26": "Wxsj4fhkfBYK53zHeGoTYtQ6YUMoj6mDcUVBLBTfubVDAXXewsm6npQMQTECt59B3bcX3weantcBWibjMi1mjgQ",
  "key27": "21Pnvp7R9hrrLLX1ChxfY245hRncBiaVSr6rnzhBhouR5vtN9txm1PeGxjsnv4piwtU5SL483VpjyNJ8b6JtXiFF",
  "key28": "2RReXcQum9K94oZcsWMGFQgLwP3Kpn9xeqVsnyLqmpbgtCb6AKqqVi8wseSFaa2RznYA9AnH2h99chq8wwRmN1kp",
  "key29": "33YLynAppboEbUTQRnbbnqk4DM2patjvYrP1KvZiae9d3UeBq3nS7Yh6GknJE88Y2jfUhs4jxZRc5NGet1N397M6",
  "key30": "2YbVsx62G3QfpfYLkP67vuzpJdhiPzTFmuzZdzLdPX6TwBy1rw7G5jzhC5Xhu5wK3L12icymfnDvrnzbLv6GB9Qq",
  "key31": "ohjeQqpMYyXaR2AUjjcVcgB8peQdQ1q83wXwzx2s1gDKVYVzVZuGButHWmGC6qX9ehsEZSTQJxYBwDCYgDsF1dg"
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
