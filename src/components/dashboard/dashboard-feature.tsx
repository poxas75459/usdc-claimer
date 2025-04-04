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
    "3bANMGT7wZ7vC1U7P2aq7sbyPn9zzZZPsgG1sViQmiHgU8dWvCVWN4GvH1NeTWiaPYavLL7HiyZoYzTRLZZsxNfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J34Jk8viNMdbgUVYrogwpoHnd1MZgZ3bcyGByfzC5bHcq49VX3tk2CqtND4viUT7mFwLTDzwcMXU9Uy2xjHXEEA",
  "key1": "2dgTsAbJGmp5ca2b5R4yGJopnQd8oU6VJdWjBgUxZL1eMF9d1FbLH1NVWK5TfvFcxzsWCvsnhtSiw1NUc7KpwSJt",
  "key2": "5NBaCyesop3oMfyaW7WKV63YQWc6k59LD4xBJQvKgQAkhE9TN1MhbBzUU1MUcGNgsxPyeYHg6zvg43PcE9yUqB5p",
  "key3": "3XXtEj5oLmHzYscU1s7pFGPbe6KuC4AR7sg9fnBuBVeqJzB9p6UpZo6cKr44srMqJw6Kp81wYkbNwX2aRm1A3WGD",
  "key4": "3TkfCtomBJ7Ez31BLhxTNd3fYcymKjCvk48iredLnNhger49QT4tNFfQGtFUWHZrDT2QZp8ipGZSosDrt6esXxfy",
  "key5": "4sN6MmZDkVTXTmrLqYFusbt9QgmrbN8EXa4dbLypmkC1W7LjXKyL6gTTLo7gFEnxQiNh4HW8ETJRE1XwsX6MvSV8",
  "key6": "33G4rhaJZWu3L6mXJcxsyFJEW28FLsgNVYC8V1CcXyyn116rcwNWSHU5iTtaw37cPGEmET2VC45Yye2Ygmy6ZFrg",
  "key7": "25EMc3fhEC1o5HDbCMZZwS9T2Vox8zZDL94WPJjeQi5HmXua8tPcMcS8t6krMH2zBikfHT4xLAS3KjotJWJt8Pp4",
  "key8": "4bmimdSwT8uFwf6c8NCYnsm7v1iHmb31XGP1J4qwnz3LBYH1tptWAEf4yYVJUmPXh376wADdX95rY5QwpDooSTCZ",
  "key9": "3v3y4Rtv9yH1yeuK4RSSZxsNiTdGrJJ2xA6FC5dt5XUydpP3rPYL7ZWr3GhmwuPMGiyRUfyyg3bDFQq4qm7deeYM",
  "key10": "MhYfFtJt4v4rveUgs25UtzaYHehBp8UVs7CgyMiygYxHKmqTaB91ZveAzDo1XYqs57MCcK6i72Lkv5FbmHk5DDS",
  "key11": "7W7EC1SyUmpxD1Ni2v1eUo28WrTbXiYDKj4nfMM3vBdzYyJrz4tNdweDvd1ws7snjerS78RJoTYJxM7HeCtzAV1",
  "key12": "3VnbZv5SUgQ1xnxrzLDTaVGfQi4bq6yNniy1GSsA9mdrKdG8Gor1i8KkczNKWBrskx5y5ik2NGKaVJptDkNAAKF8",
  "key13": "5T4zU32BggGzYmYhwTb8EcDbCCfe2gBrZc2LSBzAqG2FniKTRonPpVisUZSLQ2vy3oEr4yU3hG9YaWnAX89UNGW7",
  "key14": "3vbR1SHNBq2wNDoST69gQ24LbVubrRpwKtRPaPb2EvCi219mRrpiFh74ezkXJgVLzNYk6WJ1ERpvZcWi49BuFu3f",
  "key15": "4umoVYQEGmSCfhMxgWGXmBQanYXK542ZGxmuwCyB6S1JNtT1LDnFR4jbe9SpK2rfCmtsyqUnqNXzz9q6dbqSpVxU",
  "key16": "53MiXcnLibm8P15ZkSVEpC9H1j7sbk8NMWAKq37eeN8qqwrE2exVrhggaYqKW4oBF9r3NZ12qcyZ9L3TswVnU8H9",
  "key17": "aK1MXkeDLPR2szmQKPN7QuxgeRt881yhAm5LeeGAuC2XuNAwVDWqAZSu1mzZhxDR3mpM1Q6oRiGPgYWJ6feLHd4",
  "key18": "38ueevMs6tsY7zLFQq5GiTrSe2cHJDDFWoBeyhsAzRRLo5Y7UBFw4jniv4XwMkc6uQbCjr8YJ1iCcjBs2BrT5tQ6",
  "key19": "65kNHCTPF4tbLcLVPghjSbobL6TkCVR3zBwk3ej1dErd383eECM2UU8eKU93rRZJGqgtu5aEaSRs7X5qvhaFf17p",
  "key20": "4a1SY6dLzSk228fMiR6Q1kU7YfhZxQdcWEjsKhBXpEKcv6u6CpBfGQWvouAmdLbDSyZp81941mTvHdarQB2RWosh",
  "key21": "VDtA4UoJaFWb8BsFYEfu4dYkxEqwC5niJWoHDERnjM3GdkHbBVHdAeMQdMqR9vhHJoYTbjFwEDBtYsfcK1aanBe",
  "key22": "UEgBcHXuxEXmDv9PgjdthnovFNgU2JXHgzYTPPpM6Ldbf8eCUna9sT3ZZxK65j3NNm8suhjGYeeRRax4TXPo6pF",
  "key23": "2mgLVDvsWSFR6Msf9Q3QkSnwpv5v8seTKvdGhaFAH7wQSjgguHQHtcT6BRjjkntHsywNm2etJiTb7zjkN3yukM71",
  "key24": "4h5rttMjUwiCAxXGRyc5TmRCMAFv5bU44LHJ6JKkXiyzzJYHrxRBP4tMLbfGMRvFN4jhbbZwrwudnJ1n9Qm92g46",
  "key25": "3JVExdrgfHrkYgnwPREMjaLVw9vosb7NNghiiRxZydCyS3T1UGweiosjUf9eJnV12z7WtZMSvWf4Ba7rNG5Bch9u",
  "key26": "VgmQyzwRdbvtRK9VEroajs8SG3NpqCUVtUHkZkeVtrk2d1eTa9AikcmLXK12Lt9yqNE9y29C9RVzPQoC5HvwKRL",
  "key27": "2tT85HA5kHcoBoPPLrdJgMrXBnnCqZjV2JuKKA9aAeDhYjqd5iaqYDPowMaMvsncgrJmxJjRx7yXXePQjzmFULaH",
  "key28": "5ZVSp29zbW3Zw2LAfNxUSp6NxtzgeSajLdrAQdti2C6iA2HwUEsjLrf2iS5DmsVRaRdSNupSgKJGTXpUtvWPr9m8",
  "key29": "2ZmkzWshZi4zhKzCCX3z2CN2X2DhNVqs4CWfnX7QErDUwsgQ7Gx3yRNHHvLduZ1fjfNrxN7UjNXs2i7XHEhEqB3X",
  "key30": "5yBoAnnwypCAn43B5aUMWy3m8RCA8HcgimT5NkotXNjEP3ifMYSpqerXMKfh7SqfM2b4N7jiVHRWitPwVydCeJKa",
  "key31": "2Tz4ygLfTgACTLVZwWfv94ekYkr1QXKuErvW7xsdVSefx1Vg4gAjyzRUCgsa75APt7rJYwwSykrW11QLDVvEaLu2",
  "key32": "4rQSFWRbNX8UHwqLZCnUPvdbbBjCoYT1aTsHWoqnqgWusEx7wjHTtUmp9KboKvWjFwt7KfJdw48KbuVbbkoa2WhE",
  "key33": "2JXeBR9SwiBFUcr5sJRKuwuTamWSR9WeFVBPUNJocxk3mGFX6bYjeF5eHtsvN3PcUxvkUFitBwR9nXmjzrZRtsYs",
  "key34": "4JHWLVQfGdWc23Z3FTwDfyybJ2yQcu14ihwnT3RvPLjCDcijbfzatD5QGYT2ytBLAeDSc6Wn1oVmXbAAFR6AdiDS",
  "key35": "2Zr9sC6nJWDYvuSMPy3TfLvSpuEquiBwrT8yHs5tW6qXK5xAJepRjKWzt9gJMGhB7ftu9SRh4iabxvtcee4z37JN",
  "key36": "hRCrfDRPK3Uju3ekMAZNMNfeRsptP32BZoe9Sx4WsEF1HTfm1xMAxcQHo5fCxUvMtvnxMKoqVNFM6EoVogc23rA",
  "key37": "3JF4GAiJTqVPfZ4udpi21RngKFCpFiNcCczcvBhah2A4qYZ2qkz5h2kh4ZK7wDJ558VuAGEBBoEDzqzRSaUmGbgA"
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
