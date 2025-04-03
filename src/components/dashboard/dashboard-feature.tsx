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
    "4VXPdwgZ9HqTu69r1ERXRnZNCjspQU22Fo4Rm63AmdyP3tZ6GkLm3MBd5xY82khhj26VqrCoA1i8uWUwrnJY4zWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ednHzC4hRumN1Kmn4rFUhNTzwYx7Qrfuwdb9FHvo5vjTX1ZbKnPR1SqmyySkLVGdR5kc52T5pjVpugC7nKsgKHy",
  "key1": "5YdUUE76weL9HRHLRRT8QU8bz2nd536uQUsbWnrbSVCQWym5Mu3XSe91Uj7jQgTtxsWmdvreppjAS7z5pvSKSsAb",
  "key2": "uxSLVXggMcGqxCyVBhLatX4w9fZ8GDpnwAhaqdzqXmqav5nXpfHhXN59d3EE7Vik7MeabpLTe8Ug2fZUFqhWyMo",
  "key3": "2WdDdnPc3LvgxWSjvBoMivkjNSMd6uZR6Xx1hV4YBPkcgh9EBCwAiYvd35WurznDMrNNUcsrMNLGAGwX2hE3QGsY",
  "key4": "7EJmFmdpW8JrUU7n5sny9Ap2vbo9DK7XwivQBvgzNkafbdK6RWWPxkJvKfKKRR2f8pm76vZAbi9GsdiA7FsAaP7",
  "key5": "3fnmbg5uugqhkeeMbrofHgUv2WBTYvKTwWAFCcb7BXHA8uJfWeUjetsnZk4YdMH1LpMfoRyt488FLBdcsNU2nXUC",
  "key6": "4zG6pSrfjyL2FUn8XgoVdyCXK5spTp8yJhBZJXDmyL14vomata3RohEPwjpJakn2DcKcRMUERVBVucb7vwfMH2wA",
  "key7": "3GaneD7nDbegD3bu7FAZjmAvqAahCMvq47ooAzpMznP8oD4oB9jsoa78oFWvPUevoBe75uKGYs2UUbxCv26UbxRD",
  "key8": "41t1cqbMQfX1GXgmgrS761Qgdp1ZwJ1W76ceJ9SRTVkpyq29WX8KJqSHHUKdu7L9fTJ3h4CHmFTukp4szB3KgW5z",
  "key9": "1unkpV74UecvMTs6Cqft2qDNK24qFrXRr3KZSPghMDKU6USAFfyMyi3MhjqtXRJCV4imvCXzKCe19f15Lp5cumb",
  "key10": "4WRLELLQEk4AFberEEUeTXk81riYAWXjVHnRXnWNjvmTsAwZax9bREPeLrVBaRTdWzQFjBXtBzytQ9kZszcTTa4x",
  "key11": "KBUmXtGJTHL8qHAfiXaxcKkgdqmMgsQ7aEJTQfH8ftNnwqJtfFu9STYkmYDJnJTUCcUTJVyVKUeJer2JLpKoYTk",
  "key12": "e93GkUF5iftVd8NqnByLgTdmvVp65NMPurxdRj2Xwg6pzH3UANRhW3h8KLbLHqYeQt4fqtLzu7NyuwUqwmsCy9p",
  "key13": "zjqWYmxyZi6GPJHFqTPAALufTtykXcXSqjRBY8RTB4212QWsbhssCj4wf6N6JW5JdiTr53Jo7dkGTu63gH2Tsi1",
  "key14": "3bCDE5xZjh2iBxEVZ1ADrqz7acXbtWxZXqyVow83dvQ6snP3LzHTbAbR7JEH5Su67b9WKMTg2cNGrUW9FQFBwoL5",
  "key15": "4QnCnznUEMUf1BSa7bSjHvAhsNRxdavTyh4YxjNKRtrgrS1z3WLAJBUdaJNatcxRqfgSXbBnuMjeNgSpqK5miyp4",
  "key16": "2a9cidaFQjDzQWLAxh15QvkwdqmUAByt7rDt8zbCL83uUVsuQDeb9xyChHZdF9K5DTGR6CjwD9zohJwfEo43R8xr",
  "key17": "5BtCu39usXRKgFGKKTSMDHxGdokZmLW9i8outrdroDfPmouNkAEmYNkw5BCFGUPR7ZXB9bvRuZJ38KuViy4Maroc",
  "key18": "2EJ3wanv7DT1Hk4nTxcZXnecZbxpPLTs38J6nkqsYhMvHEtEV4Hjuz1EFw2Ytr6VQJtbeHzuCXkmdHCGNFnQS5Kz",
  "key19": "4vvSB4uYtFQYfPt5LpD4xnUkd5rozQdTG76KVMNgQYcgexM3KCQQLBhFa1pdrpSwdWA5GWSjaufXby1JZqaj1TvE",
  "key20": "jeN6vTcbjwtK7v6gmQY45tWssX7dXnRkYZAfE187Y63CRCP567ANvnn8542gQyc4EuhqBeTrd7uoMpGcvxpfkuS",
  "key21": "2iwEyJ8LYmjPAdGhGF78gbv55LQTqBXN1y66H7m5aNrSmUpfZatDTX9wtHbgb2wSumKaavhqMsQNM8LTwXnAJw64",
  "key22": "4r2ngcbgJktX42FU35k7PdzVF54e5iaRPR56aWB73Hiu5cGpjBzSU9QNdZivg5oDxVtXr3jA7J3q7RGfFe1wY8zW",
  "key23": "5H3KwzT5LrpeaZtJUM8bStVTUrQp5NnYJPa2UY44eGtZ1UTZm7syv6UzppAjkWUyx1UhPjQY52XNPpVZ1NKVrXZB",
  "key24": "2jP1ce1599dZg8cELjPQF7qsAeXD8K8RwDnQkR9bT4dvLrByWRneiZHp4sQiqmSTy4Lr7vxqdYSor3bje5rQckDS",
  "key25": "45H7ewbERuvsstWzwq9qhtt2HUn8VCeEqq4J54c7hSJHusVoEWEHsNhjkd4uZpb7gzxPVnyGkGGN6iheAYwBnZRv",
  "key26": "2hEHoibWtoeTguhJdZb9DaeTKfnzM2mgLbeNDs9Y9znZdubdwyK51R2Nz3wxWLerAbbZamRRvC76eZJqMxAvs577",
  "key27": "8Nb6LXUsguFPbQv29Rn4rFBDVR5EpNaQnVEFaVeWiS7xbdgdHYd5VpuWDKp24nfxLQ6oVGfPdNY6YdF3ZKGhbNZ",
  "key28": "fcrP4RGfx75RE2eZiip1b4ibktyB55mDNYCqxxvzWS4evg2bFDCHR5722hSuztb3gpXkLuKgZtVHyCLMBjqvKaB",
  "key29": "4377RiQrVKjJK74L9A13L6CruBh7CqagF6ByXEKzhbBJd5xpDzTaujqZTJqkiLUQrurc3zH55YFAzucnbSrt1wRD",
  "key30": "5Xcwbpr2HLDoMqgvhBDjoi6zvCnXM5a5MKnuWGssUL5xEydWH8WDsFiTpa43vqmXoHpVUTAWTbdqE8xZKBKkeJc4",
  "key31": "61B9DgxNMjRj1LCgvUSo86FpSwDBTJs4jE5fUpYB83hrhaavdPi1snD3LS2eHjA6yDjRnfvgJv3iDeToRjEq6LBS",
  "key32": "4cga9HGCwfdynA9Vz3Ak2hs5XwzV8REhqAdDEbecpu9BFifsDdNx6nydG3k3FcgyxffyKXCgQK1MjbdUVgnwpWPc",
  "key33": "2L3432TscMbwGjmQv196YhAHN2vkc1WYq7oHB9GSXRwVcVr4yvQQP73zXSGW4wuBtjzXn5eFG34PeszJjikaBihe",
  "key34": "2xKMMS2qWkwF9PJ79L9tXqHPMeEDjPY65gLHwGG7rKnHS1kgJfMcc2v9FqcUTsC3URrZjQzdDeefEVQWV1QBgcxi",
  "key35": "5psxUjtnJXwfb8wfJmp2KKnYqm7BsJeU3Ui3n3HTJiYiJySoNLD8hQ9b2NNp4XmUCnGGNKJqMTSK4fx3yMdDXiLu",
  "key36": "3r5okVQS8sa858DJQbd5KS85aixm85QUT4hv92PUdRePFXML6grM3s7CjXekAwQaDhP1CDh1Je4JixFPytpRGWai",
  "key37": "5GcxwtnESvqfMuuh1aYzRNCGxqSuvYjikHUTNjdsooS3VqJrtmShNAqXSo51UNdAczjZRv9JQPirKy6eqJzrr9NU"
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
