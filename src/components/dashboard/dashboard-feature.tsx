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
    "3kCqkHyhRzqGoogCST1SDW1RK9qxN9YFaDjHk5KJyCFb35aTwAPiULygZWxjFTL12p8tCuVsXyHUkpAg5iDPi4Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVRQJW1igkQVV4gXPwzedGiVpjquhvJRtTxswmsKEuQ8WuVw47oAnpMA71hbcbC5UG5fCxxXNt2uqhD6FF4bywk",
  "key1": "5Wqzoun2EzfuALvuk2NjQb5ioy7dBJsbGxaBpzoTvRgYeeJAwnoGYbDQeyi1gpv6qSjaeqJaFbSFAEvQM4pUDesV",
  "key2": "5xBgf8VpMjb9byTpuFGHR17R45KTrqGS2M7PqxUJCM47QrG7r8nEUZ6ptmLNaEsde3L4op3Vvg2uzdKp2jWefKuc",
  "key3": "53em7xLiBbup3PDybV5yVh1J96xb4pFJHy6FXv2zBA6pupvZJJYst5JkHU9FH6LQENH6by61QDeBHi39WaQusZWA",
  "key4": "41TVK7ohaf46cfDqbRjVA1MCmrsAZxRk39b5mhJxqgaQBVGeMCf22dadQ4yGwMQYBBNUYBytkrEWG5nEqnBnBjek",
  "key5": "4GtDyYbZfWsYuLpcRfSnzxXBcBWQe3cP9LAhDZe6CNQH4bLV8kcEp8WQz9bBYk6b7cjwhheo1RNBKpKRSWocXCwi",
  "key6": "2gVUD4PU1a2PhjG4UtejGrb7BQ7Kuqco3UM5vwd2aPdKTt96jhg7nmzA1hDRdNokjAA5yhK2qZTCpQo3WXeJ3HuW",
  "key7": "2BVB7JkR2HXRrj8uPPQVf4NDJmoztkWExFYAkEwTfVHaqdc1sEL3vT64CVmXFnDy7NHLuTSLzLA5UB7dXmUUgic9",
  "key8": "2FeQLMjycAHj6mnG9nSFm1q1xnzxz1PknuA7tzgQKuDfUniomzKVwrWb5Sh5U43J1X2EJgrmYZVmpeebwH4dUXev",
  "key9": "2yAC3ywJaGh85SG8Aoxid9RR6aCqdRd1X8Vn6jmWunSMYrogwLyS4qU9iMVwPFgXbVomGzxbQMavAnWwyBFGp2TE",
  "key10": "33pEDenKwmaAHzdDYCXKb6hDYohL5E7Ao2nbQ8oYwMphsEWpxyJLP2yQJfeo5TcshzZmDXQiyapRksrAzvGZ7TEN",
  "key11": "3LiSapjbPbozxXhTHeYzpRJgW7dxTy3cMq9NscTznzR1ddv82k9vD81mUPdbhRMLGnQ3xiLAWqzqd6v5mLhFuobk",
  "key12": "4D9P9kL9dNRhPcfQDpWbkd3gtZMNWyCUSWasx9bSqKMLAuSwAV3L9FMiqXHs1CaTuHvFpFqFpHX79en2NyFHE7FH",
  "key13": "2HGXcWy5LVBHNyKokUK2eYwiNAY3R5QbpY53LdU6xAzHanbjGKxAjrxAH4vxVXrMuNBwg7UgXsGeDWruwYDtJArC",
  "key14": "5UobHmvyDKDdqo5d5SmDFspa1EYncJk2gKXFmSdtBBkyrb3tVQQUaAUqYRrcLBMwPsCahSjZ9XiDjYmGGRHjzWET",
  "key15": "4xgvtMABttdLvUB3C1ZTCJ6dvyyxnYia56EbnGerD88GM5z8RbuvFSeCVjANAfP99S95XCMHFF8Dmf2GEyFf5Vhj",
  "key16": "4nvyxaYHeB219zG7i7wCATEKC5k28y2s8pjzLyz5cj3o1JM1SqVxzDnoi3PKypsvQNyjig2jTPjdy2inRzMuLdcj",
  "key17": "2fRAMQg7jj1X1tjFsQ2iFmCqrusx6s8ZeT5kB2J7gjH6eAQ26fQJKFT2Sh3197i4U81qse1YE9oQNhbJsiKGuiPY",
  "key18": "4entYPsjACyDtP71FRGciumaKC8hnFmd8PvReZMfrtX2gHNZty7Wsy1fEtv5UJ3XBAwD5s9TADxQk8phfEK1Cn9U",
  "key19": "3gKUtdN1xPd7kXTrd2apcfGubgfFkMCEZdggfrhz4TVJdJf27Uf3nRxFpzRCnuxG1r63n6S5mGN48vRsfofx1ipL",
  "key20": "2ri921DTkCGbDVmdC9hQj1kQppdqJg1T39rxUp1E3F32XWxWM2masghz8A93itkLZ8BW26vMKMbfJHgumTbvye9f",
  "key21": "4ciogmiA6Hto7PmdF3aAvHJHmLRCZKa3fvVshLamUnjjAEzxasAktNGkhGbiixi8wWTHDMoSvs2DgUaqB56zwByM",
  "key22": "4v2wnnmQPhm3oTf1rzEWaaTS5fo9Nv8tHqB19fwpL5RiCAkwJZUp8QUdYbRH116rimPRvKcm6yFT6LHbyXdz8yzZ",
  "key23": "4B9tUQV4Gx5TGNnZWJvr4wSg7F7neB1455VTEF2iQJM4WtHtremiwyatKtiDjxhh4tt17BfWvFC71zENdwKiZVo8",
  "key24": "3o8EnEmfeTDxWGPNU5JvrowajhsQASns5jZGvKdjtdDC32XPdt7V897yJg2iugXu2BFBdyikVWFUcwdA9AKQ2dLc",
  "key25": "xdUFqKjb14AyeUvgkSV4jzMWBAsepSJjv3Gw3bsAECzDvF3ex2y8BuzsH2aKp6GVBVPXpeKovq9MZ9N8Bazoj5S",
  "key26": "5ix7Bde5UnjZTixBA55yyx2SCmZAkbz4gVz13BzrNAYddcWdD5CJBH6jH9rrd7ZE3wwr6966KcP1rt37JBkomMD4",
  "key27": "j9mjBFcu3L9J2WuMkXcuZ5fqxZZrTsjnhxL7kJLVpkixeHEvU2hSw1biWFQSyqtNegji6mSJsQxuSc8JrbkXJo5",
  "key28": "5LJShQdEUZXALdqvfPvKNQGLQJAdRehjJN56TYe7J87Y5s97Pzxt8YfMaqwgxp2cpfgbJ3vjvZ6ZbjcfMMc17QGi",
  "key29": "gJTa7jYnRXtFBj2AwazuazBFwn51hVGyPnQufyvm62TLC91pZ2YT7PzphB6d5DbMy4EMU1xxSBTZAaYu3nSFgJ2",
  "key30": "Dufq8EyXEKNHpkguUm56L2HPuouw8BhrtKjtYidGx4nb2jfzPksKfAdrXobpW4DYk6y48y2sDazKtDe942LLUC4",
  "key31": "4sGpuZMBWMRQZvKmBzNK3SsbKCw9Uz7DAey56NBC7KfjiGpQpUvuQTySGB34BZ8ZJiCyS96Rv7i349mesmNqqMhh",
  "key32": "2knaLbYRQStH4YVATKHAYMVJkMdjtzcBabhUGgLwTu4zgepBzMRMgYoG51rhZxjEM83EWoZJYbQmAz5xh3pAf65x",
  "key33": "2mguHcY4CTS2EyTuCUB2q6Ag5ou2CeX4G19XqHjTshg7JX55vHMS4VB264AnJUznbUNkbnW3FNAmzw1Bonu4EMWo",
  "key34": "2TiP61oAyyaBSGUPKjxzUPi8FGjvNRKXj4mzpXUYg2U3bjiRJ2BQq4tMUQ2uiqQAX1E3GP4KVN6PoNt73RPusmt",
  "key35": "qgQN1hiNiNJJ9RBpq5dcTq63RGV4ZgAJ4WYLLmKjgjxMo26reE8gaCkA8REzvmnVctxAGEzhqsBB5RHwmGWW8JP"
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
