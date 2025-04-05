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
    "3wDqYVn69dm5KejJLccxyyYCvLGHLKbPPfb4krCuqWBKXkrErLbYPSZYWxGbpy1XMS8iVwnVDzqRcgoQKesK2Qxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUA3f9zdK6xtHWt1ZrpmqXwZjvbGBanhPazmyN4eZuDZePeZiA3iGaeivHCpkyNXPJ4edVSQxuZTpV5emG8myET",
  "key1": "sDHgPJadRZ1zdVWmUV7TPGD7SG6kKQmoevVbkkguspgnYH48wCTiUfXe3uht9Rv5bPTixXM4PVsx2wJKCWVaTU4",
  "key2": "LEmRnTM35bxMqtEQ2ZmZRaWBmRZrqC2wppcyBcw7jcpEyS8YVrLwmSUJA8d1BALbyVEW7zmpTmYd6YiKdPVmQR6",
  "key3": "4RVV2ub1QWjAJ3x8fJ1oe1Lh36SRo1Ei1xe5kcvv9aEwtpeWQEjuWoTKSV8DyvJRaeyTwGfaZ2RwYXcpu5H1V1wT",
  "key4": "8zmE8dyEg8gNTSLvo4Ryq7n3djGa59aRt7EGmzLJhsveCFeTTfpn3TyCCaANkZTzeefuHt1BF9grgd79dBErBEs",
  "key5": "3GjX8TcCC5aXx5u1thV3fVaUeyAK7BPR8k9SxVuF3KdnfMJgsiKbHj15NuVoiTd9XMZfPGpNHvoNtQK5Kk6pw2w5",
  "key6": "58hhWduQwgpH6M2KR71HRX41PdkXea9TfMwb3aWCf8Cyv4PT11niKouBby3MXaSnU1ersXPUeqMmgBofKk2Lsehx",
  "key7": "5jJuoeRGZuKnWqiXuV2RLAEQS5uqL5cbx3GSwo5dkR75Usa5K6JH3KxVWKBveZZMg4rUNigMGKHMezaS496LGZey",
  "key8": "3YzFsBcW4YnwBmQmnTvbdDswTX9JQPnJChLBcuJRRVkJomtgEc8Rb5sgJHa5y7nV6Loh78RvxrjxwqGN79dJ6Uqb",
  "key9": "43QFgiVuVmLerRVQCYadAMFNxnEhdZVMwseAZ7fLYqADgV41TTgM7uq6ZtqfXDRpx5EYK7J6reGc6UK2F6v4PJT9",
  "key10": "5JjUXgRBBnSMxC5od3eCQsrdrCpMnKjSAPkt5HGopVRYe2RdssYjr42PcgB4HWb9LcJWEgfxuj6MSKtaVyARp5E4",
  "key11": "3JwbojU7zhtiefoQahWTS4v7BgKGZoWxcWzuRyVJ4nzwMoEeCnQATJ5Wpq1Aydvm1R6gQD7ELKY6HWKP1NUQ5k8p",
  "key12": "5BDGBXzzxFVXU7MwV64tZoSEGymzPxbrP7zRRdH2JztmbP6vDWsm4fZFZ9uRajtyBw6DUpmrT6PSHhdSvjv8ZcNw",
  "key13": "47y3uiC3QAhXsttCjfzYHbRRy3514X6dRdwgR1FBEhSvHtC1Hw2TUPjhwgXSDip6HBV5hPgksT1t5xPA7hthijpD",
  "key14": "3bYA1ULNCB7fWNha5Z41BH5DRCBXkc3JavqDXWqreMzjah9yggp8rfgEv3M7wT6yJwiEvJBbvzCtPxQ4EhHnCfNL",
  "key15": "a8SyWDGP38RZguExbcrvYJF48t8dMAdYBFWAfEJ2Ddppd55MiFUuoiqMg9Y5TVSrp2uk4dJRaJv8BJqiGuKqSwZ",
  "key16": "24JJRseRZgiEyYJCvuhFMzsnuxPViPueMsbotcochK4NHnzFsSHdDctEqw9SV3AV4rydBTaJySSDkYPvxt7AAQ1Q",
  "key17": "5GhQLc25a7vkh13Ud4nCToEiGnE3K5VFiTx8iYyr2yXdhYuyNfpyCkWxF9tsg6CCeiCKJESQa43HR5fh9PoHr4mf",
  "key18": "55b1U2gmTFW3jGUujbL836Qe88J4gmjRrXoxqZRFMy5y2VgdyT4MWHbodDZkSkCUzE8HT6oW3Vuap17RjNsRdBQy",
  "key19": "3WKLsqrJCpsmsrCprXUKkn184xVbVrxWwbHJqbkCtYevkGguqEjpAfvbjAR28EyznWpKqkPLv6NmgqughgAroNzt",
  "key20": "RVHFNb4ZnEEkKMuHy4cYtU315Hp4vzLswuAw5fwXnRDQBawDErDk7jFvBkx4UQD4TBud4SQZru8zuWhHQp2iCdA",
  "key21": "4tTzzekZy8RePXu4MZaotnsgaiYxUMvDo75xDEmKzBsJYxxjA3znW4sUgZRBm1cQrFw79NQBXqLQgcEosVZDHGn4",
  "key22": "5ncTdtR1Ujd47XytsYBt1kw745SQYs5XruBZ7bvsgDdKF3w6jgqb7RRH4WoGNxTNu66yE1H2ZCSRqfDcaEJyWy7X",
  "key23": "4M2VrRc4mrjQKwDWFMP3PHcNN8v2TvdajcR5pAK19w8gU4yk7SoVh6B8RLs28V6yTFw86xEcTwEZh78DBL41EREo",
  "key24": "2qrL7AS2JKvkS8uW5q3CWokfQ6xpc6eZB6n2SJ96TRetRKXNC4MP7iW4MDBmE7meHxk4pGKk5JjjEtt6S54LKwC",
  "key25": "4fJRhyUV6455Dz86KtNnB4WiDR448CUJqSqPk9dWnAbyQCfRXL4XY2psMnhJrEwodhGXJeDzoq3GEdAc9MEavp3U",
  "key26": "Sg1LbQMjXfEhMmKrLXXZ7gWJXGozFoM6ySxCDrdaqe8yvSNaC2bAP8D5RyT2fDsSC9arDnMKQnPBFngU4bmKer2",
  "key27": "DfJeqncsErrCEMWh9iu2mt28g7GUpYbFdUMEviFGYKbgRQrbWK4FugnRNYF9iKr1m37zAqGrrnD9XX1QUGYYC4H",
  "key28": "4ETMyYHhaxecJNwGi4HQawj3yA2mMnB4yk3Vs8LzaQZRs5v3KiRwjnTL61661FyudMAq3vaNBdkbya5hhbuuyYC",
  "key29": "2qLpLTi9enz1j2FbDxmHZvo5t6gQusFqnug5PAgnSde3PA8ehHH74Hv5kTRrG33fx83rNm9LoqsRqoJnMNVbZxc9",
  "key30": "3CBWi2QwiUYhkeJVZNfZyZWeRHgAUdMevFoTm5EigDXFrKm9KBXajZgJgnH5ayDMUuBi8UkfLbK2HMgh2AzuKFU4",
  "key31": "4QA9rC5eNonEEkDasMYS6srUMLhXkKgJEs87fV8uKTeerhq78myU8xd888VijLXTaVKsm1z4x8Ty23gJE7tWXHsp",
  "key32": "diKLyYvvjbXAQdUgbDrSprjmJKJMTQW5RkKPmhmodKd8s8d54Yr2mzBKahs5HW5cJnfmK74DPfA18VdUwGkZW7V",
  "key33": "25mBJJTHMWCRfQUMchZeXSr42JeeAQ2Jm8ir3LTQWRzTVr6yRW55vPPaaiMUQsrwa4iRry77ofacF4NcihNHYRsf",
  "key34": "4ce4idkGwn7dsrj9i7JkHC2PzudtjJbkkoL4rJbedzgMXAMmbh2b5h8EKDPazNXj7sNW4hXLHWodnXmHTcYDGay9",
  "key35": "2xXW8cd47Ce91GUczHWoJKGuhSTa6e3gpKAXMwbv1SU6K1wFHMXFVHMUvceayf5C5uPYwGwMPVuUua6o3R9gYkD6",
  "key36": "4dQyECf7JVDrhNaMU2uA16mLJux2oAtZidRXZ6Q83BKPgs2kC4yUhTW7e42EpGcVmgkCWw8HHF7s7AuTmSNa11Fj",
  "key37": "3hsjqkfuyhinWEPAGQHnBe1upLsMCEzzTAqmdCQcZrw1Fca3aeK6q6WvVhsqYVhT6MY9RThzXrMdZZRapti5VRg8",
  "key38": "vy4EY6gDoxZq96Snm1zY2gSJ5U3WgkMX1PsKRyX5ULMrwkAX4feqWjBnp4vzV7H6ZjRZtC9cC9gorNv7t2ERtac"
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
