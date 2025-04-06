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
    "5UwT66ib4z3p6FcXwh1UXiduPEDh4L2wSUA2cykMzcCpyEsU5RwtQXZ4keT72WHRqpDXkK11SSmwfvUqGZWoFyM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TJ8EhcUG9A1x6FSrK6jnqkUzzcPxnq8dy3sbyBBJ62jwdmVrk42JbDkQVN1XwZpYjimQ1Bu2Qz6WDMmd8Kxa3sL",
  "key1": "5aF7AGyaGRXff7oYPLduSiSfgqgz8GKZWsZJ6oAKVCnhF6HpZKSA62rWNyjZa5voAxUAgtdn6xdfGkVvD4cPKkX9",
  "key2": "5aVkneE9SjcFxudNwayYvKteY2GEPVTgFWb11JfYha4FnguYhnXuLXAJnpYt6nrUWrWJngU1fjAs8GuKiApQeCVM",
  "key3": "5i2rqe87Es7i2uSToDyLRiK8JK2JEEARvMr8jHt2t3rW7AViU4aezTy4zuLiSV9Cp5oz689jBV12MWdU8eEEeg51",
  "key4": "2638S4HpBuvgRR5h3V6ueZFirQ31i2yuuYFWGLvFbZQ6vtGHFpUSP7mVSeLrtUNLgKERVAHTSoqttwrDFzwNGDHS",
  "key5": "4G3WVPicX7kTfSmTk3qpAyivqTLt7NvQxmAiosQxXmHMvK3VqqKRJkXYHH2L2Jq9L2q9UUML6aPfrDVZkvwWiAwg",
  "key6": "38ik37vaPq7vSpFs7Y231nyjdTo8A22f1zq5HWHdFscB6pAGmMzDBGaG9N4dC75WVnnMoBD6JFYXYsbgUYRWfDqE",
  "key7": "3a3AaiuyFg4GnMhti4JEo5uQZsmrUTPDo8Dqk989wtzFwhZzU6498N7MM1spMQtFwtptXzSSTuBUUGpyuvwYvjen",
  "key8": "4syTgfvNdkQYX58RU2NwtAvGm5XiACYu2aBvkzhpJoqG3FcW1TC16FLzhawMtAvvpzkz1ZWfJunqPkRinV8Psg7b",
  "key9": "641hP5n8UgkbKxq3ywcPpGUoTxpmRRGsrpGbhY5Tcv2gYNooeM1XCTcfnwkgecd9dp6fUaJyp8DBCYSszaBnPpNM",
  "key10": "2epMwr6EAQXjAxuoYbVHSniJeyJMS46HXP6yQTZaNxtqsRihQsB2hxgMyvbhtVq2s6S6YdpM8Z8HajYke2ZiMUvy",
  "key11": "2hQsBfJ8scvEhiPa9uKj5F3oWpRfk4qvspvozqE5yHD9AX4pjkQLzKqiG7rV87ZRy8mooDtAGmt7fyf47tzrq5Hv",
  "key12": "5R4RqXzovsXKN9bDdC5FG3QzCdgVTQDt8t3H4WUzjKU5axQE52GkYa8ZxAX81D4fSjXxc3hLkamhJFiA7jXV2Gu6",
  "key13": "2cTjrZQRFGoePuzmyKCvLLm7NGHdeYET8RNyYzHKYL1mZ8wY1FETthZabjVZ2888RAU9ish1rQSYub11pV47fFZK",
  "key14": "3PBHHotjSV9R41gn98dGj4FFPZ6qaJGKZbq2Tju3C49pv6kPWqC9187ZTFvqwjaBoeRSKwftJjAH2jYcoeRmDG5R",
  "key15": "V2wUUcacgH39UamfRxYHETUPSdHx2pnFJ3hoYL5FtE2wNKYUACcak6DSppPSW94hZMZZcBNn11tpQYgyKbwBGQd",
  "key16": "5msbWueon1fGsfrcoRtvirXTmRwFTykt2MuUB9bZ7s3hu7QekjrUnWaHoSVvjAPFwK81MLAASKc1fYQ2Hv52bQUL",
  "key17": "4tcqeYuahZyUEUUExaHC2T8MsMAXTHvnSpUKy3wDUdbfVA8moUMvSEVrqpFZnXZwwTiG2LHVKDGM7H2dYniQZ9UX",
  "key18": "5spFKdAz7YkwcUYpNEeMW7iDFUtDnM6wh3CBqqaGXWpR52zpHdxizKMESCujJVBLVc5nMmP5NHcSe5fbmnGDVZj2",
  "key19": "3WKDAy9Fpt825LKxmmZmECwznoGtaHXj61wJHShAGfdwFf1ZQ88vQjGd9VxnXytwBJcZgfEencVyBEa7H9QdqA83",
  "key20": "2YiNpvU7LMKzDpaNXcW2nGq4e5Phmh9WVfv2cXJT45D865D2N5rwBETzUtecLJAcyzhrgQDdas4ytSwD94YGCpnw",
  "key21": "7xmCskjhxHcfE7ksQe2W5dbNSyc1hwEDFfLLNpacQsobPy1bHpEzva8YMTuNxfjWkZvRg15as9ioCQtPVZs7b6a",
  "key22": "2vKvmQ3Xa7HhRuRfz9PnyjeLwaDn2mnD2fMDkogcdUtUWsQBQWt73QkxDTU1SgoytZX7xGw81mmpQjsiWcW5dHXT",
  "key23": "4mQWcFfTpiT7MGysg6GLGoE2WwEfsqVszuBwbEC6BKDeic7kZScwf51YntiCNdcAGVRZsopMHJe2RDqaq2KCnghP",
  "key24": "65tFNCVMHieGUNrAjUAtZgSPzznhTmdw3z6GdoCNndRXiBpGoNr8detCcnFwG5f78zfmBMvvsqFCgtuJ6H7rqWk3",
  "key25": "3yzbaUTuN23vh7L95KSqab52ATvZf3Gz4VFHeCXZ1GF7FqGtaQnTquoQC7eTaswPQSw2wrpG8bZuYcWVf4FXnWYK",
  "key26": "4H2RWF8zBaxu2BUfmwaXKvXbL5Cji9J7sHfK8z1nYHaiJqyCPfNgAQNC72PgYP1iECPnes6TfGHin6PTDDKGBh3"
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
