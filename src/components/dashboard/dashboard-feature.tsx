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
    "xoWpg6ATFZvRoWNXBEjpADRcqDEkqF5LBAD249FJSd6j9thQJgaSpuNdwRGNXCfREH6PMK8GeJrwt7ErqowEUSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eWN3NMWr8QeJ5NfncPFeT9LsKFV5TGaLKbVFcCg1nAQp4B4GHtj2safGWuEchorDbC3WHHbqTL4VfAzw9bNbJ5d",
  "key1": "A9PgxSkCwxN8HYMnuqGhhrNUQSJ9q88yF1upwUxMvaKyNfYcdpkW5t8VmzzjHMCsgb5KT8XnsyrJM8wA1pk4MKJ",
  "key2": "55f3EJujhahRGwxPMCUFzCiR8rZjjfaaTnDcsvaAdWWx9BBhoeTPQsPvrt21yCjWxQbTXG8VgVEK9vxwsF4eAeEq",
  "key3": "6XGNfRqYzUzeUHeJkrzGZF5k8teJQdBx2QN41oHxpqRCW3Ach8T9rr8tJTyqUttnRrchG3nDcYFrBmn2EifMzAX",
  "key4": "3FoMnEPwZKquHgtNvGSm9xbCwET7mCR3oSbM3LjPCc2yRqYk6AVjVqenyZNzx7LtfAPdq9NGZj88kj3GzoCH5Y3b",
  "key5": "3JynFXV95StTAf4pBMaumph4kTuUm6KS2ZriuzBZCqVxX5b4hF7QtFRzKNnHba7skGUHDj5exNnC5XJY34LgERuo",
  "key6": "4GyYbNbjeCWrw7CCweVdALRfY3Vtjuc6r6xhi1yn1TJbiNcufdzb5BLRqJTH2TDpiLcafYk8rvrwqEu4vFuMKZbL",
  "key7": "2cJ8HGAZboSK4YW8WBdMPLyCEfFLJgDp3NiXKUSvGuRJehhSfRE4BuH9KipkaNeevW3A19jQoCumpERrgVzSdYA8",
  "key8": "4uDTfci5YVdGZDKxbY73iQiiMZpNuNyA9NNTFvFGNBeFcfftqGQBwmfRNXBFBqrsa8gb21KweWK4HLAgSDMzB98N",
  "key9": "3EzecM5Nr7ycjVgNVyWX2vMVw12UBHyTtNHVevphVhFt9bHysDnwvZPkoGPixRwnxFyircTeGn2uMmg7m4fRm7Q2",
  "key10": "czD7enhzrvHCibsAqG6gnvWXmiRqZotNfK6Re4yEvJM5YAu6YhUehabNpEu5GLTxSJ1RxGxJNpjMnMHWHtkYoPQ",
  "key11": "2QttK81j2vAtRZs2gUATBaacuwEpidwK4bZsrxtTebvjJVWXUq5mXBJnJ8fpLTJkpLfHpg3KAGEsnag8KysLwoTq",
  "key12": "5aWBNcW7h6i4t7rL4WPMYXo8AEpvMS1Qj68SAYsmcNhPcdE2Q3N5NZ2JkB3KT7b5GJzwxj1NQdEiR2GYN1FZ7uBr",
  "key13": "4MQ17LVrmkUmMze2gvfJ7mjcUfTd9z6Vizh7ovRD8p75snapDKVvpVddjG6xD8RGrfifQKyw6LXpv4xPAyKLkhjX",
  "key14": "3y46ixMMbh57o7QnGzkdqYrH3Lob5pZv3yfrPd9p4Mf5qenNPKZDuGDyy8AQw7a61o2ynJJp425N2GGimA5xqeaV",
  "key15": "3tEem4HzLPZVuwVCxPV555CJMtn7Wsen9tUZ8uMCxWd3A28JdQijNJFHa1GNKKufFQ28sHeiKb6EPKmDzkkGBek9",
  "key16": "5j59gpBkbh1zqmmJrUdocng49NPgaryaEMzSuw5uQQSqK6sDVAkRD6PtWjKGCtZExZDxKqUAUBDrQ7Nyb6Q8RwJU",
  "key17": "3JaJS4KGLL9yZBjyueSL2xSFTbt8ns6J4dBphTHHpDBzdzVLCaXZh6GwC6peii5RF2CXDeboMfsciVp1LMNBZ77G",
  "key18": "5MH8vU2kCtmtYDBWho12SJ5xk7MNhCqoN21x5jpfSCEXXsT1mrTX9zdm1AwKKpuw3hh26EXdSTmsiHx4LX3FPTmj",
  "key19": "5yPLAvLzMy4cG8cUVsxW8ToJsnWdwhigPeaQrfqbA3YytCnB57fPsdFL9tccZsA9Pgyge7pWtM3iUGzK4G3EXdZR",
  "key20": "3DFyjLhy7WPU9RBiujbVWKaZuQTvg6DiLqvP44P7jdxYx2k8ySHmhxSxr5iNza2MequJdsEVYqAz5XD565c5vxYg",
  "key21": "3tvmgpFyjzxURmZJKaHCHy92LHA4DkUoeiVSASMPycH26sPWj7bHz2EMhEb9c37ZTSSJEm7yfvLx6VQq3Y1wkZDB",
  "key22": "2zou9ER7jMqv3aJRdeLPzB4CCFEgX7Hp1kxy8k2gWXoMkc9g34C2hTZyB6SvNKqFtCwgJWR6PXCnW6rDciNGhYRS",
  "key23": "G4cVnDwHJTcmuAooAjM2yzZVZq4r5imAXYzyCeHrp5zyYNYvRm3STbBJoc7Nw8PATm1dxuNMhL6V7qXZdCAx98v",
  "key24": "5dJGFtRPJrvD32dXV8MVF82Dxa1FJTh5wzTQ85inZviH6pR6tUFaHGXnb2XJqpVn8Ervjr2d4vDmYdFp86mNN33n",
  "key25": "4Sy7NzeCbTGKmaaAoi8joCTtCcaSVCXagnvbe9sYRNqm9Cx7AB4N38rB7f44vX7WwTa7VvaWDa3tbgd5Hq7WHs7j",
  "key26": "5T8D34cMC3PuSGXPRkPzNC8u9cQCZ8HLh5EywXQ13iPnudMhr5ChgBiCRe2KEJur5aw9KiXG8sXYE96wicfdR9RE",
  "key27": "GcGtQSSGqmnwTWSGLr4khibqaPRiaczcAwn44VruRHu5BMK3VyvLuCVapCifYLC5MfUD67F6z5eLtPU1vnogqNh",
  "key28": "4t2SSNmeBkffpU9XkxCWkceYMQKYhktidFZ2GNyM4uZbbstje8uoXgK1L4QFJwHDims47zf8K5XPxJg42SQN4mod",
  "key29": "5uGDRrc3QrA3DYq2Kahhi5go35L93tKsPBgygr9Tgf8JbyhxC9PiUpA9MJxD5itF2NmKTAZcFW4xuehYGGq4SKfX",
  "key30": "4jMKf9mtuTiA521HKvFochHyeEymUR6uWBv2RNR1jqfA7NJSmRTjx6uW2iMjCdLVHPhA9Y7v1yxHLRs67CtxpWvn",
  "key31": "2yoNaxq93q6fzrA9x4pAHbpmm5pvBxTKB8C1okHsx6F7S4Xu3LAggdS7Lxa2ApoNoeZ5U9mn28xEfEKa1iQXvntm",
  "key32": "5KzrTF1sRWo5PYYPd54dSxQQamLwGHH1boQUrxqiQrrSGG9UrBTGGE2AjNUEkbPkHMHVTQZQa5Ld3bAT1hMC4eSf",
  "key33": "5f8GERpSSnSiNexqQYayzwPWGFmua9kQubPy7114UV1opukC9ydcedsqWG5AZAMmEPY7nC1Bq8bZSFz8PWpfnECY",
  "key34": "34ZRdqsLAyGmjK3cR8hGcDWkTxXRdPHLf6X9fQp7Rjf61pHVyQfc9xGAGqwU3vr1ynStefkT7rKumRyoukqieFa6",
  "key35": "4vcsrJR463Q7HFLtWKjCdsUqKsMKqL3pZG1SXsKBErp3ue65arAygQQyMehPfhe2G5qJHMqF1JejoipM8NMmsnPz",
  "key36": "2P6t9jRcg1qm6PhJZra4MTzpG9Qr4zMNAA6FCDYiToMQEowEFPirS3DmWcVnMhL3nmqNpmXtVA4o6t5ca2uLWLs5",
  "key37": "62MoFKAUJAN3wTqfYbWCaHLF6BTTB6CaaEc9HoBFo5hcboFvEWXYBgVJ28vwRqPf9XeqyXJf2Ba3EhuaHWBUwcU9",
  "key38": "2e6Kb9fqqYYBzf4Wc6EbuJCohsas42UKym4xyvxgbYxE8ve48aCTnnkV57TYHxkJmFR4NZuGSQs8Vmy6J4mk749w"
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
