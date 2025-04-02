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
    "358PY5Xcv4M7g9gbsL23NxwqSiGatmZMgb3dZ6VaFEGNwYJA75yaoPgnCCQ2z92C1Jwqpv3MaPLvJ8pV48ooUFcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2vFxnYUhykBzgYoeRtq9rkRWQzRNuympoR55Faz5y8NJSEpStyggXE7to8kvmW82gYv6wKdyixnvtdcLcsWhGe",
  "key1": "5Hgy86cWdfAXy29HfhL4ut9JpC5GxZvRMiNRnZx2iaRAQ6DaAwCPLC1GqhJGe1L4oT1sAYH4ZwYMnheengYcmdZ3",
  "key2": "4bjU8qvLZ7Ufrtt3w5Xc2vndt3D9DVHZ43z6mczneNmVCS7w9BNcVk5hePwuVYwM3adLwBDK2jsQcDP4KKP6JTeM",
  "key3": "3P5ad5EFq6C4XtNfGPYBhHjBcNebX2nQDpHbCT3Ewyth839e8kzcEHXxbxn8ukNdCT6C9c2Uo6oPUHD59AuUUZXU",
  "key4": "4YaBruUXVQQ3pGv1XdcPQPPg5FQ24pjoWKRvNY8uSApd1C4FvVM2xUNhwRQ9zhf3vFU8zJDCiF1BanrhpRCY4uhk",
  "key5": "3kib8uHzQPpKiiwvFi1YkWp9sF7unfNUCnK1mRUkNiNJ1aGT4spCxjfFTbnGNuUp63csSCubP9wvY27gXaUDubLJ",
  "key6": "2TioLtFEuPeH9AUDtrJrVubFLmnTYpWU197Q1c5vEY1zLfiHA3817x1DPR7WnW736iFC3P2JbBthBXkQEUXYXroG",
  "key7": "4W8UASk9vZukEPcYCBZLU24VXpc9UZ1SekXiggdn6Vy1psn8ma3EqHvoZoDvVmU4WVfgk5TrwVsZT7B4uwWcDcAc",
  "key8": "pYy2u2P1BZjZZBLAkEAXhQnX3iZWXwTs11mMW4GeWG5r3EnvtYHVtJ2Jk3x7QhuRR5wW3mMJNrMd2Ax7Lj4KMZz",
  "key9": "2VBQVZRhvnvc8dyxbUTjTrETfrYgcyCoyrZdqhQ5d38zdvGHtFYuintMhSBHxyJeUtgS1ydHFCrgASULBYVTttrb",
  "key10": "4vgKKCQW1PNJXpzp43hqMt3V69u8WKDYZ2JLv3NYr1dTBqJ5hjK3PSo4NtGTvoSUSe1Hy2tNSooivYYFp8VLaWiZ",
  "key11": "dMLMYiCjyyBxqzfaUYti7JMnESLoYsG5tLxMx3xtnoFTqBhLjFNMMQJfBPPFR1yztrrWnsfERwHgTxXbxTGbPvd",
  "key12": "4R1apVwSaPTokrLhf9tpaFHFyJxybr6fTSog1GaPDVkX4QSM7TBqUGcv4NmKMWh8FjXvsjKxYakpjz7LX7gwJ3V5",
  "key13": "5k5WgVc1ENQyYQ4tegrpFGcQyMpLbkxkHtGbXAUEkFVNrpneBD4VUseeCuNhFbfhawey4NiZHpGJx5tgZhGb5cPN",
  "key14": "FJukNfvyqoVYzhweUpqpyF9Qx9wK2npPnb4vqZhekZCDkBiMsVUFXDdiJdVK9pTChP1eda8y1GhQ4ygy3eg93xy",
  "key15": "3hBUnmtKpM5Zkmmg7Ro2yX12RUGXWrYi81LhFvAHwKxtZHR3nXULx8zk29VLLYyfEK8WZ9vf2yujvpvCRgdy7VFH",
  "key16": "22WPDwKcay1T8rFX7Hwm3hxSWppDkH49RsSB2bbvzZ9511pC4yy9V1RkJg13D1MycrH2JoU3sHETunmGNDra1YjX",
  "key17": "5xekdXTyqBVJM6kPeLZTM5QN1NsR4dCsNJurn4HgBDJtfygBWBwqt1mBBt63d8E8DywwR9goZA3Ync4q7C5SwB1L",
  "key18": "5cTr49B8nTie5H4CVUsVsjBAi2xC8TgSYCiTSdcagH6DB6auyUqFtLigRbqZh4MJRVsZiQSZ4QSoN7PHFSozefFc",
  "key19": "3Yrpk11Uy8xZgw97tvZGY9fjMLtRCis8uLAGuCWGwvNB9Dtc4oojWrYTez9zhpQjrYkZ13psqVufvpcatwBiXeEw",
  "key20": "242BSkSQVDv942i4uUkcr1mW3vZJTnSaQHun3ZGU2f8dyXHxXrFky45A35o7nj3D4vUzexynW8tPPkBMLgKgHbhD",
  "key21": "w7PbRXUehp3A6mFzFouf3hWPRYrtEfRx6rKJN66uzZc1NiFGT5pryTpdUYGt9fr6WJq3eUm4nwPtY23d8b8Ze2z",
  "key22": "4bZGWtbGYEHmcW1tnU2X4gmEE2q3hSoXrowoGXuiz39221AeVjPUhjFS5xegQpbxoqLXD2mtBPBPEpjhyoQKebqV",
  "key23": "QoMG2R35JvayXB8j2cdWsZBnEvSiUzjjhmbdag3QSa72KWue5yQ3xH9JJmkfB8p4BLm2RuoEKYQgEBbqkAcsgA2",
  "key24": "2KpDYQ5fWnTxDruKJmGRo3hmpjeZew4gfXCus2XUHJKJVW554tegTUQbzxr6yRGt2xTebJULoFeiPERdqps92zhu",
  "key25": "534TKMqrhxVMEA3fY6BdR6THkeTqM3mkfthuqE4EsN4R7hVM2byUw4rn5GjmrKJcc5yF1yPx18gP9a5ZNHdUvgew",
  "key26": "5hj1cjLRb4RZFJxForhdQEBrfdN6vGvhWMYEZ7GU9W58qwyTErXGRn82kFjuVK2iXkY42DoxTcV9Vq3rwksicZdJ",
  "key27": "5xQr1mefCvfcCrYugR9kh2Swby4RLxULVWCWKkMcCThpzdeftSSHSmDPzz467L5vke5J5KEF9ThsmgkWzNZL4Jy2",
  "key28": "4D5uUBq8MiH3XoxknA4oxqzSYoGouHJY6x5Fz1LqvxJagfpLGt9sX5iV1ectLYxhXt3V5cS4JnzLsw6g6GL6BnqC",
  "key29": "4j168CqpJAPLjrAtmet6z1HK6epTszapwrqi8zgVqDyFLqhWVqtRhp237eHRNTEJZQLuQ4yMYVxNnyYdSycc9TFx",
  "key30": "2Pjwj1TRyWhp8EwcMq1m6zc3LVrD9YZy6LnT1Noete974M4VDfLgmnWxY6vD92zHfNkz9TLBJqFvf1LAKB3Zqt6D",
  "key31": "Mgn7ycRyTfdzhocKS2cAbTKkp3U1eKfMVtT8NiaiVBj1NPUzCZUzt4LPhzEpent9H6E4R54zxW2DtzBHpfqxD5P",
  "key32": "3zzUq823ckk1dcEHw6RywRc9YGnGXJtmos82ezNqj8vDRBx7YsSD4axYR9Y37eC4XrmTPnqP8faZoAHBrACRd9K1",
  "key33": "4LXiJr8oKTJ7FFVbxnrtPPBxQLDcwud1eHe5YSAF8nY8vXNXYNs8vcKSU7wRsLkk1SeKsrhwpjiNMLp5qwsSR1ZC",
  "key34": "4MVg4aaB9u8vB1tUBwb9YRgwReA3XLA1HxEqps2QWb1RBvgkggu62XxxQx8ZpMJXTDPsZtGEcvoavNyzixqgPC8C",
  "key35": "2wdXZgsZBXnAgkR7fBhE8f5u3waLVG6ZDDWG9qbe93w3AWykwxjRapNbXBCMVV59PNmRdCryn6rYsG6SUfCGgwgC",
  "key36": "5XDtQQUVmZDt16EjhnnDq1SLLjPz9UTCwpr81M3vtLpcSdE7ye4AgJvD61SZySXo1sprQTpwhqifGL3kP95DzVxV"
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
