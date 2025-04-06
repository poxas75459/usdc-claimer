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
    "UG1NXPxv1jeBFGrq64NwNajRzuuig5kL2H2kSLUJE7k1MhJZqTc4e4cnNSJYpmfeKmuqR6tBAq3gb5LpexnVeUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rob61dhvNgLkn5t2D65mpasHbbAKReZRfm8dsFHyhXuqjd1i1UY9pD3hY8NUtydRuu47zb6wCE67dtf3acKa9Jh",
  "key1": "YdZh2v9PP12uuYPVUtd87JXgSbHUb19dLWE3PXRR1ARUZpBr9Fd8X7gnBahbGFNcZ6g35KPkjRaQy41Nxk9TSYH",
  "key2": "2Xz1Vn4RUNsxxvYTKRULsDPZf36Ez8LDYAGD66cDZGyfPY1AgNboMfBfLQKVLvnXfeDww3AnBJzgRG23Yym1G5ty",
  "key3": "4N4seWZcVg66TH8f2EYs5WN4T2TUVc7KN7gqbp1v2MHdCh6LEcwMm3s4B8UJFGhwHLWfWZ3G2tTyRuKLv8wmGyzX",
  "key4": "3V1upjLu4YXN8cyC6thS32Y7qVyoYnpiYwUXeDzTXLrxk6UjER9CrASY9VtcaBX89mCAPtguzCj2ZxmNrBwzeZvD",
  "key5": "KDcDqJMaRF7F3nFRDDt2Nqwk3yaBLTyqNjH6T7J8NZaGEMBriCAhtE9PdKyswPxbmiLstGr5Ng8gvS3fXimkECr",
  "key6": "5VWU6XxVKFhtWaKCssNb7GR3adfkzK5iq361n6FAMvfsqX8BeUNh99feYuFcwo51sWzmBEQi5NvJuQ7YihUaE7xm",
  "key7": "51ZhqFNiD5v9vcc5nzHGCVT4ai3dj5J5QTmkmYm2t2v1qikzBQjzfQam6sVLncHz7orqxBxgoHwGZkDZW5Nwdnjy",
  "key8": "T5L3nt19qsiPxLrQYVSepivvnV18wLwg8ZDhz2s7DLfpeMovKT4Ej6nAuKTWzpEkeBLwz59siCE8o2zaUZXsR58",
  "key9": "4w9Ueo4rMa1ZecmF4nCasL18wKmKRwanMjz5tLksbnkQNfYkAW51S2QwThL97h3YHZhhc43aDe8ALadJ2A6JK8zW",
  "key10": "2jpPrFnDWUy5hsUfb81XvBT38JFmtk6QSyuYw8PWiCMek6BXDF1b8mGdChZZhhUoxvobHbkiMQoFSa2TMYgUUQKh",
  "key11": "2YxBPHGA5SPrSZTdvLxoj4n3mSt6WZKTtRUTfG73vzLy2psoczYUeWDsm82Ng2tiVhG9MHs7nFSSFiEKv9sTKA77",
  "key12": "5dKheH5QNoZ4FoxXpkqAS5ex9MAkeHaiUdExbLipVstEzoBax4qfwhX6VVEYzAN82ECD6ND3gZBdPQ9Ygf8gu2Rq",
  "key13": "2iagKu31z6cVmBhvw86yXm7PYGB9aDGPm2QQXNUpLcCCNd1iwJQr5YAfKVkKarVFnTkyeKnQSGDFJhfn1vZY38KG",
  "key14": "DNmJThB2sY8PPCUKKzvrPdbFR1mEeihqLZ8qYvbrf2an6zYmDTUH1KXdLuC8JMoUpP16Hj5fUar1JU1P1cwSWut",
  "key15": "uQyJmA6vr1yRctXDG9C3Ed1hT4YBJ7aSKJMgbsiEDbQnaHviedzreCpHERWVfc1GRvK8QVykSDbruPbwjcx5JMk",
  "key16": "3syRr3hNU5sQydtQuZTKgSE4kjFELg9uTg8Dfdc1XXTbyJswHMBWTRxzqCGfweJWDVUtxybTWckDHYQ5DwfccanV",
  "key17": "5Ae34gfzYdauzTkYY6NcNdPGk4WmQfyetjSsUQttibYpnDvcpUbGP57JeckeFAXyaFqDSUg15envMTEHDU6kmhVV",
  "key18": "pxpQmGaKTfnBW5doRKwZqeAoamhP9c1Sm7ai5sHGdMQSti8Sdaf9qyWVurVdQpF37JbC3FV9ouvPBve9n24ajY1",
  "key19": "2atvGVyhbMYByBU16kPi6HSFUG8AVcgz4QFzzQfKPKAm5ocNLxoXsMeeNAEkhMtwGZatbHxsdHPGEbiMMv5RGHFR",
  "key20": "zjLagLGUM9NQo1eFwxTQdarFhTV1qn3dHdS4Xuzqrxn9jBF9AJDTfc5VFN9X2svGzJdtjL3JRpQzLnVg9EvikTu",
  "key21": "2irU7xRzWVtgNMAWWZRQWTVZ2GvkwfdLQog9eCQjvUUot3mXRvnSLtRepUqes6oFzYaGqgRacWWupZWoXWVWJ6bK",
  "key22": "4sthJXoGfooEdRtwwca4smhjeT9Q46x1CVCx11vMYRtFgnQytd3Z1Dd9yHx9PcCRgevd9aaFuobaGp2RpCQwjPsB",
  "key23": "4phzoyh1EsdwdJHC8kSpD6hf5AVTdbGqGMQzsVsPYzPd5164HohjdBXseSMfzoYpJo5y6vWkQW3ipKbxK2P4GvoV",
  "key24": "3n7JnYovZTJNT57ZWsCY9xBzWkKNAuoNguVvSDPWk8ugkmBxPPSbsoAQ6bTtYjUZsyAALTeLi1yqX9FmZzyjq2bs",
  "key25": "Npb17SnyK6X7BVGehYvupNyxoUy32EiFYcYZhWAwzuo2Z3rM8RoYePUP9WfaE1RkQXrm26KkTiaY2F9iudBnNBa",
  "key26": "5QqutLVGTZ6E5VVRRmnHEU1FQE9WTMpjq5rk2X31oqkCdtG6bgtUz6mkvcNTfdHGSp96GtnsNWqTPEJjC63c8pEh",
  "key27": "2rKa6b2udFenM5CyG17zEpu6zJNRtQvHEFZDPLEyUqDbLtcgr6n4jZnEVuVSq5tW8e72u9ZwdASYvpekALsSzQrv",
  "key28": "4FjAsyadojyqcdkcxi4kaTRcgjCEJFEgAYuxMPsrAscndNFodLtUNbWpY5NgLLZreJ5nkVZW4UbXR3U41zmMqbBW",
  "key29": "5Sr4YuqXMtXPCB7cnLpJBzwDGAubxL3U25N5UqXD7N5PfzsdyMt6m6Hm17mHBGLP2RYdCE4ZQNbAegQuJnPuVPfB"
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
