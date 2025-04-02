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
    "2tpbDcXFEpUgeuiVhAZzLymr4VYJKWkvWegoU4Tor8mEhBYMwL5ccXsiph8MzVV1fu8h6eaP6MMDGZJbogSBdNWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b5W5BEy7ZAcf2ynMWUVRXw1tTR4qRyjwZskMsEQzZLV8rcT3ckxdTDXj7udmznU31L3QLUW2uYCL6gXDN2LypHD",
  "key1": "589x72aN77CsBHaXdFRL7q3DRNjkcfko3B4YTZ27cYTDyoD42Nxm2eD8K7z2ACwqdhovwrapy72YT8S8983gScQH",
  "key2": "66JrRud46tDrtaYNRio5Hx6ZJMtiyr8xSVK96DDLkDqM3RUZ8UCXNXMcPW25ReiRXoHDV2tFG49KygxtEsFoZzFe",
  "key3": "2LKniDmJQE7FZYEtDEWVGAzaXUsaN3ebG6K7smbzQQLZDRcqbMLjKTaehqerYodJUaydG5H2dcnGsvgYV5oTVnBw",
  "key4": "4Q6kmd8yr6tyWWgizKohziMKcuDKYCiTCd8HhVHT2eMPppn4gaXJxB7jCBbX5vPA4BMWRHGadFafj5KV7GryRfGL",
  "key5": "5c4YgyL57v7a7kmvCP23MAZYVXVaLbcmXaWYpWj3MzsJPcshWgHpy12CaTcXE3tjNyU1ed14vmBwQSZxKwDFY2dH",
  "key6": "49zrhgpaarzSRCBjHNgbUeJTna7ihuCdgYmKcCHzKDYycj2SspU7vmaA8xbcfFoL39nvsFgWUzQMtK76VbGvJ3CB",
  "key7": "5ZZx4AeGhnbHxvfRfgBWh1Cpx1rus8RLvbfy8JRuT1WroRqvb7JHRbZe1UsKCJMR2nJYCCP17s66fPKHCZTSkzNa",
  "key8": "L7Fq5gQk5hx3tUtdGQA52drJ2cWzdUpAT1HRTLsUnPhbshyHjFADEhZAbHFSC3H6KBdoJPT4zm4mQvpGTXjtcQ1",
  "key9": "4NsoX7cRFBTGCEMXmenuN7quDPm1mJ1aHFGXBdzxAgKfLN96grF7R2kF1sVZGmShbSC8tjX7dRMq1CXusjQ2S6gD",
  "key10": "4U9gsKjiXqG2PHkihkvFbUt95uCoGQPm1QKzecAgs8Mkv6rfz5J88httjarprLhrWSGnSj6RK3mwmZKQryjSkoBy",
  "key11": "3dUoeRsRM8NepxDCzRf1FphyXZ3DyrhtSZfMHasAX4uNYPfPvzn2sJDdpJkX117eL12zqbMRFsq6gdUrxqaFE9qE",
  "key12": "4cqdt1ReTXGryFo1DUvFRU5nJAMrQHg4aqqyEjL7MvdKwE16U9f1qeNoRpD2Jq6UAneuJV22iSgmo82jheRLBj5M",
  "key13": "27CTpzhxRjRCsrUDBPeMV3h4eYgZ5PmbUQNLVn64s2RStgZ9wJdT9gsHbNEfhFGq5ktPXJA6fu99ycpjZ2HXrr6P",
  "key14": "4BsyfCoAudz6tLbGQLZhuo9LguPYsjmUFDsr8vxAqe9Xm9TzTB9dCHjeKUakDe98QaUqYG3u4j1AtqrffNuRLiJz",
  "key15": "5mk3Wj4ppcxeoRsyNrw8gU17xcueTpBkRNhkrpZDMa4cc9GBX8PS8LeULMVrmYv1MFKcR8o7wPx91BqSRGqui9Hz",
  "key16": "4rtbtLfLnD47KeKqDXVeE525YQywnnXw32p993iY5bvVhA72WtzPENViARxr6kbaoDZJf3Qa6hPdSkvwafuPXgwM",
  "key17": "2fMgy6RYkNvMQU887KgvPT3ChSmSZJHJJRVVYJXEZemf4a47ZuHg9y98F7YJEDrtGMpEYYFqoQQrdwgsyRwtdhAL",
  "key18": "64eGaK2eGQ5Kc2vR1UZg2eqCd17HiTL6ScQDUsgwnNzH9EYMaRfRyU7JRiicBpVcXQN91SiZAtAQ5yKYKrtS479h",
  "key19": "5r1Yy8gLtsdyZR9VbrEnpuvYM9SG8xbqBHEgYUNbmR1A87vZ4TdJGEskDjW2a3G9wGjqwkPrXBbnprqZWAkY1Vyv",
  "key20": "2YJpSJUTJ3YYAP9eeCLuspkwVZQ9NoLgjwLYWxWyt6R2QGdJprJkj1hVmwqXv3BC48g3y3VnFhtETh1WVnaVcTNo",
  "key21": "4gZKoJUZb7ktQkVggpCnMQSTb6iYov5TCoXo5wC7iwWGi3xsLQTZiBPcPbGjeb9VHodoEMAX286Fekw7UVr6i3xu",
  "key22": "43fc5nZs7QtoaWnbgTYGJYrbJpYKSAA15Qmt4YkRGuXs4iscWMxN9iPQuWtuo1PNA3YLudSmzdnjh9BcjmyixJWU",
  "key23": "5zfhopKcrBKziXk3uy439oj4B537mZBt2m8e4rtKsx1z3jGVKp2dXi44y3UCeujCVZn6HwCNZQ4Wz8LGxA6dcWJU",
  "key24": "3yhRs4AX4agS9UDFcLdKpMAHMQosn2FBQoS1qkL91qQEMfZkuQ6TD17VAX9HiYhPQ2A2yZrS47btVgV7ni9s3PV",
  "key25": "5cN7APbZNm9T9r7HDZEQSsum33FGNGz2rbuAKe5HHRzvKidm78NVBtAe1b4Dy74EMs5urqg6qFi4vh28jvxAjVP2"
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
