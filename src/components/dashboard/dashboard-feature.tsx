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
    "63earinNbourETJGUTH5yw2ghRw9k2VXD3aGeuYnUYjZc3X1K3XD4U9gGyXSYtYurqo7EhyjARCXmrMTnA5gMgYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FfFz3NEd4SN8tcqSUQNzQbqsMGdd5tMZYNmut8BJ85goSVD7G7ZNW19jzfN5godaN3N8mLWCaG6qybpKP12pG8p",
  "key1": "Xzv7T8Ck7mwGZwr8T78WRUcYFtgMWfoZMAkAZ8UTbbTUhSstiZtrAEGz8iK8zhTaqrJ8bztVdfZ8djJTC1uNAYQ",
  "key2": "3AvBVoNRsQnZQ9yVzfNpKEEVJ57g8kb7YpzZH6rh2WBYj3reu4FZE6e5AFUmegByWzJoK9MpA78nvbJB7BJxk7TX",
  "key3": "4bnzmGkZUKfaNicQY7q5JP96k1sz2GSBry1vorpnj32nMpUCCkLNFm6w7Vt4TeBEgv5VKWqcX32xFJ92MUeCkZHz",
  "key4": "2XVwbL2SDXEgPNw1ezUQLWLjhqMXcusRPP3PFVJPjccT8fZnCh2VQbxUogWL56t5RVj7t52FsDF4E5C6rZ8rsCK1",
  "key5": "5EX7mBYNfW5cfQAiicRQeW1mnrfZncmiuQzAVj2285GmUWxfvTMnixWRrgraCmsa4iQQvQGCa1Riq3jVmktsqwFY",
  "key6": "4BsRDGWHyhXb3HkvJmrVjtChdjGFSGPCANP7sABN7Rx2gKJjp8tswE9dGtxftTW1cuuo7sm7Yj8BTSzVbXDjTm43",
  "key7": "2uE3UqMRV3C6fj4wptr4SbbEtQuknqjo6gkntcZxzZ1ZAp9QRdVDqe3oFw3zaCQVUf46freGaQJdAKwdK8AfFGLt",
  "key8": "2MQqXGYt7cv8MkcyypwfRHQzDuGwoPUKigbtNxRXGBRwHtGJ3EvLyULn89dKswgPfbqfSgvxXLDXLN2cSAQjBkP5",
  "key9": "45rwv77kanusxsWvCWgs6XUePc1PPpdrVg75ig8n8dbnGCZGSeYagB3cXe5WxEaofnuPE5LRTfNvXazBWXzZdHUR",
  "key10": "56NyncYAXasyRhdkQJkz26dfHwP8VhZu6bWJzSgimqZMqUQwQrveqy8Y6eYB19jYCURKDtmV5mDJqSdPMNmaN87r",
  "key11": "31MCqTXowkDGgpC8fVaoMJLSHGzLHQ8oS58PnagXTRuicPTi55h3t4bET94QcfqjZHU75YJixki6rdkK3Bunhxn5",
  "key12": "3zRrmCQJxiFaiVLy2eBpdHtRuoVd6U8qcEub26FcfJXwndZ3Fp722Vta2ATEXarHBQH2xrN4bWWSwZj3DowsihNo",
  "key13": "4xndjqUkeg2VKkBFaGRRc9KZPGh329dF2th8Y9kxJgfqXn25CXM5zBirurMvARdYBLniXuRBvnKi7i8nBU1GLGZH",
  "key14": "4V3rUQyogsYraLT9yqmtMo72foFb5vhNthLWiJCekG2GXNwud2PKVo8JuWgzFpr3WnYdmXnXkyvZtPJeusFNceoG",
  "key15": "2bm2QTWD45QXoRWQrDaucJ3PUaSPGUzNSxjNUiTTt7mLnegtCMDZd3ixiRA42u7hPyxNEAPnBfHtwV1LodcgstFH",
  "key16": "5RWK7mkPJSCzun5BQHjsFQbYLuN7K6ScuMMEgKTrwFvKLJTwm8vJ6Z3sviUj4xTByy5AESQYPB5ANCv55JdhaFrt",
  "key17": "5QTmpksuiHZQw6CLGUVm6faTEFWftzvuFjSLg5Q5auUMvZMNMa9pUK4xJJ9R5eSTqBcf1N7ZdzMz9km2triomMsu",
  "key18": "3ChV9oky1WRycFVpY9LEX7N2ky9MD3UnUHPBcKHqL3dhkm1bW4kBNAq2rAXNPrzk4VJwWL7rGaXcjyofFVC1ea6k",
  "key19": "3hdqgRcXHby9G2RLgiFj4JwL6G1hAtK1Zt9PE8VdDH9f92Ta3aAhsBroXtkNMPM4zZah3w3pYacvYooB6w1d5uyd",
  "key20": "2SXSSpcYS2HEZdgEee64wsFr27K3VTp82DoMnTjdFTa1mSzqqfdRC12zUgSrskZyuhbXFyeq9p8oX2bhFREmUu3n",
  "key21": "2AAnzEtTUp6cpenX3TmzagnfKV5VsXwmKfXpUr6ffob7ULa7HRCrrrENYHoz4KJpxWAbZcrat4n7R1fU65UxnVSC",
  "key22": "5Gzwc5FyYLLX5Grmg6a4oKKJWao9hnu9i65pC7kVjhu3ttteeB9SzNJTZmPk1tJ6HDUQXUKJGsY46E7JjNEnqtfJ",
  "key23": "4V2estoBjJ3zoFaQHbtK2oC9Kgr3qJDddJk2RqjBJGv2VUt93gWUjPWHPEASeQvJADbDB9QXePTEt2QdQEv14Jhm",
  "key24": "5E3NBMETnkkaFhCWkeyS91Vn9cob1woFZevLRdgSkwrayJuPqm1V7uoTgY5rW7RgSGxBezagdkben3TmeCb6EHwF",
  "key25": "sQ4dsR6twQmpuESWv8oG1HMYfEM136fAyxaoJLXVmFWCGVnK9sSG6duhEFSf7BkUwi6kNq9h4ZsB2DC1NYcBX5Y",
  "key26": "5kfgFnjadyLXadYTpzY1wBUqe9TTmpP3Aqevxr4WmHXdrrALuwynjWKksZWnmBYYa5gQTZ9FP7gGxgmgahmD1Aei",
  "key27": "5FQpUKu14AjP4mYLGocWG9Wcc7mu6XgL5SghM18drzSZdEgHtz1o1voEn6pnea32YCr6h3mT4GpX3eZuUSTi2aRb",
  "key28": "4Ysnr3W71LVDPiWiZSDwV7Z3SJmrCcjZX9ae1YpE16PPwWx2WmoUtU3b9P1pQRYS82EgSCSbs3h8J66xXGD7rXS5",
  "key29": "45gzvDEhBTmvpn9547seBC5S4RLbt9nTDswyM29FdwnUaFD8gVwXhZ8UKf4jxZAJaZsNc1oAtMPr5jWoDAr4T5Pd",
  "key30": "3Hx662fXThjNbPqqdyoyqRPaJjVDEspvmAQ2Key6jb6YyrTBsjEUGvLA12m95PwxZAa35CtHPHPKt61czNitS5T"
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
