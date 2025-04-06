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
    "6AR91JQTvQ2DRy1HvXiERwvf9JUXVxXBgropkgnorCyvfLHrgCyPzHoGsA5fuFrGk41DbTE7MXKBgyLWyzv2Kgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zB2xjrqisWLkFeUNehAd1iWmoateaPWP1Gz3gutM5yQMUxCRkYfTBysU1YTaN37hWoyBmhYC9KzbE3rdShieyQg",
  "key1": "utYdp15wxRdAMo92922P2KY3W2U27K3vpPCN8qtCs8ox2uDJWcbC6PzKif9Csn4HvmHUPre6Xj8gPkHhJf9CrZb",
  "key2": "Gwca8AqzxcbXuuvNvvsF1XcaAF3k1nrybCqkVic7uXBut6KtdEZBoWXuqpEfktmZD4NxVp55fT84r6ezw8UKpMK",
  "key3": "2QARRpXRSBz1fJQEBYm1QPcrgpZg5Bm1Ap8znpL4r3sdGkXAdGZAfcUpYh5vTEidEb5fHSDkCrtR7WrQJFEovhh5",
  "key4": "5nxbViXH26jWsYXTv24M8QCWJZttP3HH1exEHsPRRij4JQkF6Lbv1D4TKDpawVSx7H1CwQRcPEYcDsNLxWzuRxLW",
  "key5": "2Gkd4Mq9dM5E6JdD8N3e45TKqJuHgbaQXMZRRLhHWPBtdTw8RruGgssPAkyVD1WiFGhapKqy56oepmz1FiXrP6SA",
  "key6": "4PphU2FD7WN6PQ5warzG7GHQAMqmbWs1iRFVRQcdiaceu6Eb9TQ2YkAjurAPcVXAukYAz8aqZsyBetkjoxFud6bH",
  "key7": "YBAEFfduiVBAFXMAFEdLbPQPMtNzCnvK7nFWZYmsrxsyhzV4UCRHN5waMrGpctF31TMCVTA9Coze9NzLiK3tpWp",
  "key8": "4wfpVNYUARVFou6rZ9n9BM42bUaigp7GSKjJT9ThTAMc8gdLu6PKquhnnvh4riYs2pPUKk2oGhthZ4Vy1DJn7DRX",
  "key9": "5YD89oLrxm9n8PjM3Qz1fge7mWYukZAANfH1jhCGdHFQB5f4smWqNmT76x3c3nc8A9aKDYkRnGBVLWv6mWYDDzJn",
  "key10": "3dZ95nDnu4eEjjbB57QRspeWsUq2FWyYjNLkvDMoy9AdEHqkrM9RYjtVa2yWvJPyUVtw4iJQRUU3wMnmvynKEfDV",
  "key11": "5qdQxcSbYqXvUgMnRohzeUrQFWyRj5VFFke8SmYZ6LNJnCoDGfruyM6R11iNyDFx6bATQ9x71f4qkXH3PH8PmR4d",
  "key12": "52dKU7b4Kopj3JvfxWwsSJDHCGyxspgCFLXNHXxEF2u9SwSBwvhsyMAtcBJJVsTisxmpyipkNn5K4kxYYNaQg6zP",
  "key13": "4T9AQZEfuGAyuQEBjJgeaAAn3Fqcc2AdgyBtJzEoivngJF5nQFjWuRueoCCD4Myd6LBf6WmTh9FF6h6uzFRPz2zR",
  "key14": "3tnZ4xUF2J1fhcdEn376vMcT7m7xD8i6zAf2NxXdqaDjWLAsCu6zQkcuG9G4KbHMo6JNBhNy1paFtT7MGfQNTs3q",
  "key15": "5caaG6beie8iTU5SQQG1RjMMnaRnyttm3YmGRFPHmC9qNm3iaUWpVQcuz1sochSa92pqJoeDJCFpGAkicmh9RWe8",
  "key16": "3umybj47s7GM2LkiC78vjpvojcuQ4xdPvfG45rRkACgGn4op4PPZZ27dzMwm2NDevS83F3GTUiHm4wUpiUHHdMqU",
  "key17": "5HR8UC7vdNo6oWpPaDCM7qJUJY55nBqiaZce4X4ovjEtpjX4tniLAcyTSiYpXtmNDS8UpHUi1xxnkjXo16M3queq",
  "key18": "4qw1HMEcMGcFGaiKuhpebXKdaEcAMumENCgrdMpBmmGw12F3D47ouhWCys5JvxceT2bRkNkZaRzP4oVYpHfSrh7g",
  "key19": "62mPcr9gjTBoqMPEwJWtK2NSRQKaCFJmsXkhnkNoP4ef6kPWEfqQvJrKvmWGWDzTtSJMSAYnyYpSvMBCxCsLbwgi",
  "key20": "4jM45eaNtebWb6yuC6owk23TAJEwo4SFN5okhcGf24bYPbj6JRjPKUVXaj6LznSGKNMGPer1zEPFdt4rZSooj8z6",
  "key21": "vGMctzrS7LFHPVTAiGnpxdrTiTEqUZv1CawVvbjDB16ULvX18KqjThCEAyWeTczSDFQEc4JwQPsBGrRG3K5ZBAa",
  "key22": "3CRsx6cYbVCqY4p7jqBSRUPg21D257MpymdFAp7wGdgwtMhif5dcjpo447ESnMZz4RJ1jxSAjqdMMMpgh763Sqda",
  "key23": "2sGwyVMTUQPkUtNZNcL2u6xvQVyAQHhwYvRHRL3nNTDqWMt66SPKZAqBbm89cyZLaakgLrynP3SaeywAYK34D1Da",
  "key24": "xp5yCU9ocj9HFunjW5V14r9B6Gg6AK94tJFoKJfj8K6shtnXzJzrXNX26bLiLJbc93aQT5BzeQDnLLS9i3DbSec",
  "key25": "5rR5LFT2eUGi7xDvi4QHo8HV1GRXKbCA64U6A23EbeZSthvDnwLFmwKwFoaFF3NxjTABvH5RJDc8REK8G34QHArk",
  "key26": "2wDtPR2vZ8Phmm1UkGcosw9y67hwnsXsLjpuV27Y6tZTYAgjpN3P4ZNsNAmTaj1vX7jeW8KkjwB9SmNSbmRcPfW7",
  "key27": "37BJtN875viu2HTLhbwJDyFQnf594cJphbgdL3a2PVuPXZY82j2KxNohfiDUp95HXVzQYx83MQhrbUqftHbWuSxE",
  "key28": "MaFnkYZRDeHDefbbds9Q7swsjG8drbdoDTr7T9fpqwRubHFxcaActKuug2aSmF2mHjACFKtuhVeGKDD4bRVqR3Q",
  "key29": "RJfz7m7HM7zdTJThx8qVNwigEpqMSFb9vHe83GGd6bV4Wx3g6TPCsQDsY8G889HfBDJhHSQdeTa41GRrxQZg56A",
  "key30": "yNAkTvYWWuYMfewXc26f7zjzGGxsn5Hyizds4QZxHTCjiXv2fWtpurBM9x31oRZpCSM31Jt4kjatTVHtiCtSJoG",
  "key31": "2nR1zZ4ZmF99DxHBmyrfczx5QRWT8FfMRPZqKaWYwzS4hsuE5HkoKq4VcjWL4xr37BJjnpJPrFFDywpHvfcmk6U",
  "key32": "3aNaUcpAaaKjjDmLLj1FbBsYfsN6HrkzifRGE8tGUDFS1AayoDyJAAB7motfoNAvdebeVGTsZHEoTxnsqyBNLBTL",
  "key33": "pPaqKDsEK3XiqqKiBmt7WYQ139v1G7EDnBqJufk8dp1dgf3srMWk7QHiRuM1EQJAwEd5eEwjR11zoSQp8VCNJh3",
  "key34": "3XiWKJyPvmRvenuq3vGNfvdw5y5yMzp7zMxKnvsKqV3RZJ34WVXsVQ4gRQXZcRkCHyz47yx1wq1MNvv6djpPCyyN",
  "key35": "3jpdTEiK7BX2UpMJ7djYtF5HXkq95q1w1oUxJecv3XeyLSgikEsLySk2qY7NNQEyLMPVDG2bmbxKTACUU21AtzH2",
  "key36": "26Cab8fYFqCvWWiB8A1ePT4ofSB3LKstsj5885xfz6QfNMroni6D93VY1ckcMDYPHioJZqd7yuAomCWJHaWe4vVy",
  "key37": "52fuS8BfsUDy4nCDw7ctqATCBo2zwG7aW7Bfed9rZSUMTepJYPMNobAEqtGXcokqUTacVvp4E1WzQT7AbJifQ9iC",
  "key38": "4bAzupL8bp1i5Fj2Koeoez8UKzeKCKvYdPgV1tbKsaaP3kK2dFbaHVwbW5abDkaG5dCDyYEviC37qmGXtbDA3ZNi",
  "key39": "3VRPPNpDXyN5saDQ6pVYDmFMZUSpmHi67gDpd5YC5KYJtKMjZDmCCcdLDUM3y3FhQjrk5TXTziJz817h5JLMqo5E"
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
