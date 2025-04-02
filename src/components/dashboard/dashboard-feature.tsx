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
    "24938qz6F7gkpezWoekC83JgTpcdPyCqxTMC3EsdCwKfJzwCe9kN9bxZ3icDp9rXoFCXw9SbjeQnDVNNjRGReVfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LfHuFqqX9GMPcGPhowSZqNFMyZX8B39MXDcpTNGkuPndA6tJZNGWTQx3HhLCnBk7vs6QzYGfdDegb6zRoE6ez3e",
  "key1": "2Bpf2Cqya9y4a5LkLe6bYsiHNspNcpskPF2BuPMe7FXMaEbsiUV6SiaLpEYrTUZSCuzw993xTMKFvvsUA2mH9Vqv",
  "key2": "AvNY6Thkqo5SdiyaQgPRgT2VXyJAaK2ZeiVvvgGzD7aK7ZasPyP3Fe4Leve9KrWFyiCCHA8EJe9nfQRFanBWyq4",
  "key3": "2tdEtJAHpXfoR9cRTC3q7nhCKNTgY3eReoMeH9j27PUzxD95iZRdWWT46hkzJfr3kCiUjJbpqbNJ2fynpAvdQ9qQ",
  "key4": "3kmqytu5g1o9WwmRGgqsufJc9pjM5owcFPRY288J6L3j9BhgiBL5S6sTKiZ3rmS9hBXPXUAwxp9yk7upmJPkudnV",
  "key5": "62918SBdxpBeb5L7jdiL12EviNyvLFX4JXhvwoKkWWERo4p91TbGAxgCTWTT6T7JmPV8RsoCtBQNQKkPKjkUVYdS",
  "key6": "JQc5K29fGiQ955za6La3c2S31jKQhjDHDRxyoEzVNxXY3By9jjBnR5ZU7GWAur6bUZnTLZnR8jR5CwbsF2k3qws",
  "key7": "4AgoAqjpFbHzrdFpu6uKfxYYwbiNsoGefi9f2Pr4uwVk1n9jcAeXULDRsAuHcK7GTfypS52R1QpzLwhHxVLcGyHR",
  "key8": "5WLL8APSXQTu1zKeNBvPRMrnwUB7innXrR9TiMBXHN5Ysfnsck3bReD2YPwaaXqzZC5wF9VG4HSqmm6N3u2g2mvK",
  "key9": "3V579NwRLBiVp2tJvKfFsbuRZkaAaVCb9DqA5J7JYQvHNttjy5WhCKT7SngSyr2t1xBSxp3KmJJKPJMpbT1cjKHc",
  "key10": "4n8CH9r1BkAG3B9uxfD7UAbiv6hJkH24T4iMXdb8a7PV7jW2bW2fhXgftYyR4D2qp2vLLANTtu73pM2w1Popwps2",
  "key11": "5WMyzWpBFau79Vs8wFGnQPbbD3LadFdFykVAKbGfE5U7c5BJxRPNXhHYCkJWKMK9crH3fjM7GGwEQWZTMhapnbC9",
  "key12": "WHn6joRapbQaW4MKuHQPcf51CWoHh9iN6gGxVXrBV5Q3SRHrbKVCkGRDfw2pk4QUfzMUX3LngF73oMAJ7YWmY6p",
  "key13": "HF5ehXsw6FrUNVdPuDKM2hBp4q7iZ1373gUmgAdkAn5zmAmJXy1zcAZ2tepWzxUdFsH9x6x8VP4r5xDNmkjvw4g",
  "key14": "2yrGjJn3iGB4DY99zX2GnNCQgVVtnsZjPBgeEYP2DgdSXuEaCm5HBs232wT69oYYEYXM9TjqiCSZG9hfFs389hLp",
  "key15": "XBEjvFgF1W4sizWoxKscs1uK7XNMmLcqCcaqrDxiVrY4M9sHcqYAiLdCN7hndfARGEdEsFGWrbpibo72eAEpzaE",
  "key16": "5dvwpQ4BNs8dgx4iN6NABxsvpg9jSkB4XrVfrLxondzA2gd2bts9VQoBLhRR4XhsEpWyhGUQXimnYebkR38pBQGB",
  "key17": "TqredErkH45MQBeY1jQd8E1erFNwuRj1RBzyvjJwbnqNAyXLXM5p45MwU7o7UGvKEavW2nrYvw8oKWHTkWfe46q",
  "key18": "4BA2fkZmhM1zQNYCwiCaLXhAmhzgpQZoZnj7t879TaUexAhQN6CuMBPmso9AvveBajwCupGrGcTbvnyHrA9PdeFd",
  "key19": "35wdP2ktKh6XXuG2fDJd7wuA9SLyZU8yveLa4zpZryedBstaWstohdKxasNemtpfeue8kbR7nKcn8CKLoPKu7vh2",
  "key20": "5pfKEvna8TRTrT6LjssE43TrodtfEPgYraY2CM3yWScSnY7Pov11zMN8ksjLkoLQpWPMKHw7XVEVjE1eXwGzNmxD",
  "key21": "3XzgHUFe97tk3Pb4geUFwZ5XVNoMock46JjoigBepH2QMffjdVMF4Df5RESpv56myQ3SVeSGNemBnvuRSYLqtR6q",
  "key22": "3J8LFqEkoJew6TLEPYwmHLsLHVVnD18JNPrdnF3bP5obLDXhY5bsF359YV1gdRxGgZX4PsZudNHQF4geFHYmXfGB",
  "key23": "2mLqUAd847QMEU8NUdCQcvfq7wSLravznK8pUwG69moTFyvZn5CU7URsBLb2UmWBUgHyte3q3staFXVC6vEdKJAY",
  "key24": "4fq7Qcec5P4H35xwGaGJnHUrr41dBGyb9cZSQLfCkvJBUDZMSX4fFGBELvBCXQVt5cjicMvwh9N8jBEdD2xtWdLh",
  "key25": "mP6oVtggUMA8Avzamf2RfopbtWBzesqB6aC4epJp6nFELGVgXpSKfeTuXHSgGrGbZVrrWVXDN1AWiF9BpMMPdhW",
  "key26": "3jcWQpSwekNi74QSJsgFvSbW4Nok5edaPPPYvkt5gDWc2FDvv6EKMvuV2qVwZwQsSWo1jSPPAanj8AmEfneE6ZMC",
  "key27": "2snhskmyZv19uPuj15fLF1dcv6gCNWcgbdZfs3R4A7ArEMMNzufjXohwBej27qKVv8jvvjUugByoMnfijZSEJCU"
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
