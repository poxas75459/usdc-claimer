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
    "2uCCyqnQvfrQ7E9HNiLQ286sVRWre1mXMhADZYgFoWzvfdsxjbu82u6kNW7TzNvKERsTWdS7Ljw5FaBsJunuHS3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32bi8kDbaEe6cnsqs8sCXFzr87mKxMHeJ5GSqTLvjhMFqMRkuKnr35mi2uuqqXVXwpwENhjcN4FtcNiAEWtn3FUy",
  "key1": "Baga5Qos2H893JNoC5fz7ybfjLjbEQehv6M6uU4VwQicEjNDv7ZEyJssi3r2befNi7EBFKMDuAMy4aXgmGWQZXQ",
  "key2": "2fBsLacZUSZy6WWVNvWJz6Lj5WLdoa7NUC8kBRRaAWkYc9cBjEobuXHmdDst7vTFYWa1sUbyC9iZH6JRipc67CRq",
  "key3": "qWFqqqsXQLKxyv571zggpCMe88G6XN9xSjbAqLmfSJsbfuLnVic7amNhDVCMN9S5MuXKkyH14ysAQcSwx452wzn",
  "key4": "4JYzeSJzDjf2wcT39GHa7rB7B31u3oyjoymqkDA2g66o3duksNmRqp7jwKvskRtDb3Qj6TzPnt32Ut9avcyYStwW",
  "key5": "2j4wVRR5hNJtCb5TnHwk9eqrLSxXXDrdy8ohzjke8qvtAXdQnLc8Lhp64WRugdEoCZsCjkSDEHGTqjs4W2AanPhH",
  "key6": "211BCb1D1kUkvF32f1s5Gnrs1REt6kx8XNMdQHyaDtc4tMi2XGnVe1JG3J4tbRPYH6vaVb7Zju4dtnrTGDSC1AwP",
  "key7": "mc4eKqmKQoCZoMcmJ5Sr3moNsxGsLggCJuGbYAEgoAx51kiPgsY3SUDe4nEtE3xerTWPPLbL3Vku9FKD5r2cVkF",
  "key8": "4tZiZoEng3azho8gbBP2DA2DNEvh5inkmEZbisVfuECG4RPEEXD5PxLRTTVDCVEVw2QwFRSmV6nE2rpK95JySm6j",
  "key9": "4WXZ3ZELZ3QfYMAcBuJxcGPuGdFhsgpSECSkC9YwP4wYMVXFNCGhmAW4LME2g9tSJWfAkDJyJpHs375h9SwLosMC",
  "key10": "2iGJCuw1zVM9yn1evqZ9XjJ8MY2ydBqRz4oZxa2fs7tUPmAn9HE8TGS1mM3NNHf1PFVFPwq9Fk8jhmTVNs8Cukoq",
  "key11": "45JPnor7H1sS8a1FiLShDHZNaQi8srWeLTe9oP4LcBUd18xDrvJgcXdFcxXVsSr14jKYTuzUsC3YPUbbmMackT5S",
  "key12": "2MSQ3gmVDfFsMX8EyQnPbx1ku9ko9SogFetaZphr1FFGDoBthe3Bo2XK7ir3nam7LVKZK55eewWm3kyXeY4zvWEo",
  "key13": "2N5sKj9cbtVDjJk8wTgfCQXMDMYRv3bkUP3hABzMfc85M9x59wmhGTkQfGTtsVABQXb6W7LMz56B4VNbQJrrgYLN",
  "key14": "27tL2758ndPpp7nVQAvB1ftevsCUUw2dEsEERZZtE234Gapd1rSy8DxXYyX4LBeu75bRFJii6DvVuvfTWYmDybxm",
  "key15": "2a6eLPW8NMcGddyGCxbRQZafRbhYENtdKEbyzezPhcWnYZpujobM9fGosx9hS1ffpMwyqA3ZNx8uD5Kvtzk86zf1",
  "key16": "3tPq5KreYSUcFAfFkiXS3Ep3ACiTZMp8RD1jfGAajJKbY9vpY14amnXXGx5dfjuh9Vr9LQcxJd8E12k1H78ZwEUY",
  "key17": "2MhnQ7kZGQkuJKcUHhuxg6yJjdF7tWMBYYdoUiWAcAyeX6S16vGm1i9zGJGEiM8msyymcUGJQGNW2DYNKomYxvYN",
  "key18": "jwaXccKCy1GdWvho1Vs7H4iniPJ3fhtD5YDCELt7hgUaHJrBZ4NqF87nTRxPiDMq5axaF6vu8c35ZnJ5UeTv4E8",
  "key19": "5o4bFTWwVqX4PNsGkKQUHLVXdDa45etoZDV2ChEmyBVXmvd2PEMv7PUoCXqadaT5uMQa4gGqxSGF13tyct5UDdNC",
  "key20": "2gwj3Fy1zzMxsAjELP6EnjGqBLKutPWxT4ksqFaWnCeNq8Lo9GJpNVbeaN8gyPDsSZ85rE1tLamp4RGkp7Z3p596",
  "key21": "7b11t4oAkRLFUvK3TiHB4CDY3JXAMchU4T5T64DCPfBaxhBFUNvgsCmGaPgnt6dFHfwCc7aySud4amKgYqeawVy",
  "key22": "35a9TVfMLWLEDWGdDsGFquv2xNaFWtywqkqo5BvtdcQ4p4sMHp2nBU1sRRD25gQtuMqiZQ9NHs6PnGuAuheKaqdW",
  "key23": "5cux7J6PWtRuXeuEJeBXiuUriyUeZgNSc4Q6h2zjvNNBLhrmRv2QGVh2oQfhBCfiiGYwXPuKi3gWyggMBjU95SQT",
  "key24": "5C96PWQP7oquK4aQG43RrWC871rYy5hxB3AJmYtPNW6pTWSNftw5ktqW7FZqLKemA6THLw86u92is5YAgrg5SbYA",
  "key25": "VYvGjmZ8CTuFAxTbwwiPvJF7MkZ7FjeQ8bf2PEgW15SdUYprrnKgExaYvDvoWWPZ8Gob8Z6kizsYAsbRdVgNGbt",
  "key26": "2fTWCByQ1C9tXN37tocNSCs6euSm5g215Z2HJh6eycBW7AiPCvNYEdd46f9qsmymNaQ5hbNrRFZqmRi9oCbfZPm9",
  "key27": "4rcRer4X3S7KXM7koYDs4k7Bf22KWLGmEnV7vsDrmtn3eVPqwrrYsF74LpQUj8XhRjCQUMvktH8uDGJGS6dHSV93",
  "key28": "5Fp3swJ2ZoPi75CwLRVac8TUxCUazejMfJZH3Up5rZbVwyAxZ9it9mW9JWPJrcpievrkRz1Zb3HmCQR2N1ZNt3WL"
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
