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
    "4ibc3qJsvSwjTKGdRwueveqULNg3zf2J9PhTwv3MnPZefNCSWUyvvL4GFZbZRVHKka21647Ku4rAbquyAYnABMHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zMwUYKcxvksu7Nw8FpMM8HPB5nFWuL1saNoeDRAtoVuugpKAYkAwh6rvwrt4QzBh51oVwDz8oJmGrAgU5HMN6ka",
  "key1": "uAJQSYM623ftFWDbrahVimN8EW4ZzwRAL4jXNj1GV7Rqr8tn273SSgViNBYeqdicZde69gyBU5c8NU5z7hfRQqc",
  "key2": "EZsDPWeRcyGHgwE4FS9UbuCZtv7dxvMtvCMufwHStUB95tHsSde2yoAJcqqnwzxti3zCbk7NAtBrRYfYeGvqqyx",
  "key3": "k4CnGk4czCbWTTtAaYnVPQZ9tzhwRsap8fSt78mtatMaqqjisE9xhVkcwg49edeQic8EgQP3b1ae4DJYfW78MUm",
  "key4": "aBsNfAct9UoHAcoKZ8M8j9eZURFCocwsPd7WxsGo8BW35wsQLiGQ792fRMsV2X87QcACF6MeDqBwHpHCawaP6yh",
  "key5": "3rqqJu9ta5zCNB1caQ91g8MhATiyMZdUziwDT447qJ9ZKGfhaVVBm8krcSWHWZNQT83DoJ7Pq2k2tiPLxf3rUNt",
  "key6": "L5VttzdEDKAptVCVs6HwSj1iFn4MK7q7bAwxDGD6Y78ssumAL5mprQS1US9ADfEMzceEq66o8w4vgrroWRFTcWS",
  "key7": "23Q8ibvpaJMd9DJwm3kdWaYnKKMy65eAmk73AhqhtVU6kFbcvbwtZxnjk4rzadydPTkpfy1p1cMCSrrMaYz24sGh",
  "key8": "63ofFDh4BF76sSYG87t3VmJRvSWeLs14pJRx5dZ8YKav5yLDnu4kqgdzQg145GxWadJKvVth2aMpeANrB8s26hcN",
  "key9": "24D5iEHyBaF4vKPj3pkVxPcgvkgwWP39nDBNPt8odkUCxSsLqa7NYkgWuw2vv62HbdJKR51v5yJ4Xewu1oEyLZKM",
  "key10": "qKxWxj3mApH1NyvYWxuk3DiqmEJ4EMGAudxuRs3LqpQzNPU7B5vkUtZBzWfuLrn1UrcZPJwTYP1WTq9kr5YAxze",
  "key11": "4PfLTSAyamknECQcbtnAtijHWNEdaSoAiebr9mvjqExefuGRqp4CKN9sq2gmrP4rXXhQNcbUs5YsEvwz44J5TtfB",
  "key12": "4pvBXYUR1Juurm22u2vPimLvka7PjQQskWUUezGGXTLBd2McLvkUUGwQqc4nXLoce4KkS9fYeN5jKSvSrt8Svpk7",
  "key13": "szSKz7bDCknBCd4Rh6FN22gdnRe4Ld5SRxNA5GKrKyXuPEaSHPwhh2CSLZb9LQeRNKqppF6pMSZxGdDknf5QycM",
  "key14": "6YyZ33ykwfy4x9h6K6uFt4rnDBZw9C8QQJ9cMHxtVPbWXMY96iwCvbtqMUPfeEYy7wS65utCTRBe2fR74JdG4Ww",
  "key15": "edz5kRZt2Pidd355kV1uLkJKb53Q2XZwJo2WLLWpF9Tfp9TuATKgHXwsEnKitun9ApR5NA9quPekgP7LE1iv59c",
  "key16": "3tHNMB4euKdj9BBZWqQAsYBM9ra1n2SEuNmYygwHuR1KJgHNwiLx6BCGQRVaiy3pHfkxJRN3qtN1TASXniBdX2Cz",
  "key17": "4f1n37Szxre3TuwDiyJsgqLNCUMRikHYrG9vqTagGumgmyf61crdEaQfgjLYaLvKzaU4j9fFZeZcvHVD7G63M1UL",
  "key18": "3bNVhcUnP4q6MnMrhKF4WDcKBmCcwwh6i72UG8csXe2RAz6cvjHYQbVheGg8n2McrWEzX3YvogGRABeYL7xfoZcv",
  "key19": "GauXD38ZkkCdjmT7N7BJ9CbiXKLkjPUYM3Na722KbeVoAFPPh63jP65HXd813dZ2zj5DMZYCoKwXbwq8VJRzwSi",
  "key20": "5i4sfLxsZBpMYkpAztp6XHxLsEVfBBRnFWYHhkDENWLSTh9mvxF51CkCkDdagLFvrF2gK2cNYzJHoi7qr3RnHaKg",
  "key21": "zFcDTbRerk5gmvrYqp76cG1ybRVnPUWtrcRppyYuYtUGtaHr9V3WHfvG2dc1bhsFtXmEpPzUxXA9VmXXVGDowgM",
  "key22": "4Gnkc2yunfMUyVXgLz5ZwbMx4TqD7dcXDTzz6EAxbEjPbMEzSxu7qNSWY1DLodSQ91dVVdD1LD4cXNgiSqHaUU9A",
  "key23": "YJsxhttNzzWk2nNbMehCRsFg1uL8Mo27xzW4efu5oxpEFX8iWBtWR8TZ2r1HNpGe8kGUB3bb9aX1ihcpCb5j3oc",
  "key24": "S75o7kB2rE5pfRwFgSrjpmsbEQcSdE4B1yPZCXbabXkNCrVH6Tfuj4gGws4Hu1Nr3LiMsjnMjrDKDy7z7oiVRc3",
  "key25": "5RoshX9xGxkgR5b8wpeN4CJex5XHq8zuahEa2vHaYqxT8BVbGpsAoSCT9U8Kaz1j9b9fArnnzfCWTeY8BR9Pc6ys",
  "key26": "xvWLS14kDfUNtFvADbSAqUETxzYJnkGW72R5VtFFK16hUnX48Sjfp5LmU8LaTYUfZtU7t3AaWuYTcmT97iJgnYC",
  "key27": "2XeBUjCWTcNUWkFh44Sf6nTGEXZbA5vyXGnYuorhqJaXPazYjpyXyoeymmrCSJUFYkCb5CoiXsHPYc2fd61TYegk",
  "key28": "4DQqfHp9VxCjy4CAhQS5u5SypFZMrrWLYSbnhMdCNgenRbqH7QBpE5f2uDeHzKxFKPoCj5DoFEEBe2TZeLb52cQh",
  "key29": "3binXgMAHWKoode1cexbnSNLM8YrnPD5NF8M8HaSo7wxcqEzYyQhG69X1jZf583x5o1d5fxQiRmmqN9x9s1PPXFd",
  "key30": "46BwAakciAKoQsftD6VTCukZjU7vCtqbKSxqfEFS97HkEADyre79C3Mj92cWhtjkinStBrMFX4E9cEDE6A1Anpm1"
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
