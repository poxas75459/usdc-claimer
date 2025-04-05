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
    "2ejCP9nXqViTYrAkJLv3eK8wqVUnGECZoSZ9S52FkJqeJ1nBghhC5dFy8cvEuAi8W2WYv2PqKJkoepSfgS4fdrch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pf1dzv1KYtQsbBfuA3wdgsL6x38dPJZxEu6rXV2ZUA3qnejpqtsKf7wnRr8FgBUHVukv1NZvVpL2FMtGLwDC4vN",
  "key1": "2QEua6bnAVXMKTVAtQ2Bao7i61ZjZzeiBEiPAoc5EU5MA4MZormSNMGcPR6isH5gpECFNcFHJZVrQh6Qxu1sbqfT",
  "key2": "2KotR2Pr94yD2msKUD2NRxUP6UjFLFKG1ZFpMF1qg8ToJCXZbCptpGaJ6Jjrnu2rfHb2eT1573cjdCnG6UdMhdDm",
  "key3": "5C4Uk98vor5xELjpSocrxAUY8nMN7GhevNCGR5SGuPinxcx8CDTr34MNkfKLW7igDe44NL2jZdUCMg99e1RYcZvz",
  "key4": "Av9JXy2nqA22NyCn4RZDx7fKqGYaChjvSFub7dqUm4FSLznsmqVUTTr89LmH3ZAFRgbXcnsQMHCRtKo34sRY8iu",
  "key5": "Ec9879QbZ8hG6jKsBp2WymvvRjq3tXWzcHNHtLiRA9jDpFKgSXUav5T6wBBwFc77uny1uwZ1EYWDc6Qwkg61S9h",
  "key6": "JKw26DsnM1gXn5DH2zTxan7a6LaQWFeRiN1ob6L3Cw8pFH9KSv721gkAS3sbYnduuBjaTyWL8NLfNDe3nDBPf1n",
  "key7": "2EiLDkzB4wzfVq4FaefApk5z8qmhZQw7W6JrSknCP9WMtYXtpuTZ2Y1uYDWkKM4z4nWnxMG8fKG9b3ifsrVCrbs2",
  "key8": "Ca4nDc8wE5G9qGQvgjaYw9LcJxtffG3wuzrw6XNy1ReBETKUmYBQrb4Tk8r8nEArQ54PoHH7rdzGnG6UddkJNWD",
  "key9": "3yvpfTUiJjPtKueK1gZqV5dygnisUfQxg78cmigtfES5x57ovissc4NaDd3NMDAE5uzT9G6HD2XNbTf8TCepQh4p",
  "key10": "vJnts7Jx1Z8YhxS8rNhz9CJRXTEw9DZ2aMK9w1W1MWMwHE2hSPRLm6dzUmFbbvYHjPv5rR5pwN8ffsW5ytQYLvR",
  "key11": "f1nmcVsVTAbZwT51vYYBPgTJ2HAfSj2XfCjg8uNBfvdxyjNUDzfoGNjxtQyCkoRad1NQzpQgamrFw2UgsfcGroP",
  "key12": "5LsHBfBFmood1BMiXM2CBgQo9ug5U5tW66ubxFr3bR1ADujLDW4RH2ZLZfaXue7Bph3nHdpKJAQVLitMNkY5y8ks",
  "key13": "2DiNRhw9skoc85fieRwUF7ct7SdRvkfXQ4U4K7zKyFpmJygdMNQEiTJoVooP2ozZya1GWhAwzczCLWSqnJDn4etN",
  "key14": "2qZbeYcRtyz7i686orpi47TyV12icQgiZGC2oj9HVB7uz7cWfHtaZiGMske6vki1htDrfVfNJyWwDmksW6Fkco2y",
  "key15": "3kmXFkaGVgrqkGiWheHWiXJQWK3cVDs11Cb5QiDQd36ScL8wY5LincaLBnamZ6ZkdPbijPFNHNrK5LRbwhipsdJw",
  "key16": "41zAmJVMP8hLczUqxiy6srtEboUnk46aGDWwEWmD1zpvGFHgaYsbByvvEXR62d32u6DYVofTgvRsPvM6rJGhSyMX",
  "key17": "oiyh5M14y36T4bhjXyoMwF31VFtAv18VTjkRGS6352FuvLPAAzYJKMZHvqtaJbUft3xJxua3bzkSZPt6Eho9jse",
  "key18": "31iN1s1C3JpiGpFvSKAYh5XM4hj672B6q7X91HaG1rAnQetCqWGBKFfLwve5Xvf7Yk72Nm8rnbg5KyjVNCmP9WoE",
  "key19": "5CnH4KC6GUQMCgLzCoVgrxLZ4io8CsZ3PFGnuQyRacukuxxE8UmLNqesDCLVY5isxBUanw5GzucpPaFtHHAP7y6w",
  "key20": "4qicfHC3XpYBCkcGP6CMgdRPmHNrw5RaYdsziQGfviRyhFt82ch557XhaSVKv5JJE5M2AHrzc5B9qA9CHAfKAGdW",
  "key21": "4QrF9LQDC3PgDxxAHjDCdJmDVAenxoZWWMYcTFA43rSJKJ932eP4f4672pSyXyyjP1XhX5PuZMPXGXW6jWstSKC8",
  "key22": "2TynUGbjYBMoztSFQ4zMr6f74KJQugqN2X8cEm3cGgb64tVo7SL6AQ1Gw2N4fPySagRTtwQzyV8nV97XpgDzhV8J",
  "key23": "4AemK6E9fYhZjgAMHvqAh8cSein2GTDGo8DZ13w4Dkqm9AL6XM2gkTVooBEgwWxmReQ1xAtU96Hz7bJPBzmHWJBE",
  "key24": "3vz5Kaeo7P4gRAA6RrXgFxPSji6FvWAbivHS81DMsHAa2LSz359rQaByMjYrP7b1RbwjMAL7kSEkhQWLAgY59zik",
  "key25": "3LXCC1dc3uJDfepjt6wAbqdWrEeG2S3ZiFUXBLnqkfvE6jEDcA3MnRy1N5p22AnhSPNvjbeRm8wMvmSNb6orAuvB",
  "key26": "5tzjyndPfnEvVUnmSBGUh6wtwpAeR2LmNTRSFB9KCNbeyfCptf4HQmNq1oYBXfkqYtTdHwsVjTV4MzsDMquLo3ig",
  "key27": "4iy3hx54HDwQuVRfQky7WFh5ZzPjdJK4EjxoGD6hptQyuzg1i7YD1E4mHqEgGV57kXyC8THZXh4YSaW3KgZvkJCA",
  "key28": "4i1NdG3csdyfj6R9KpneV1g1MS7oCpZ9LvHkYnB4mzHYFsmqPGPneBanBvTDGRM7uiea73cRX1imwKzEZhxwe26H",
  "key29": "2e23A78AB8SB9bXaFaeFCViYQZC2sBqmYyfoKkhjKhKfD4JoVCk228Yq1fFBtvrXdwUEg69S2RKKXoDSgAFW1NV4"
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
