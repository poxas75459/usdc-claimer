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
    "ifYLGMdpC9p2qTH8DmzGyNgFvYQkv9sqvVaFXdMdfYWhEw7kzqWVe7EgkUpjoKLLBXMx7Rrw6m3cLdcP2PxeDQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UU1z7TRzkoyzUkv4EQVDvcgR5hcneiXDBCngcSSKHjwbiy8yk32vpAqqo6xhiarNpx1mQG9hyW9upQwLtzb8FWG",
  "key1": "67nV6LYQUgCi91chNMC4pEipKvHpDHsoENKjwGZk6sUogWmY48BocAeY5gFjcSjrERvh4qJ7n2N8xJYTdfktvnBR",
  "key2": "3ue9spiBiK9eBRBPinbHSaT4LyNGjgrGH9f4JPfCsxG4uZGe4A5L5jues8GQZMCh2yXB3nu5VFhbm7j5xfQsyAcA",
  "key3": "7SAGULyqiasPupkt9AnFEsa57sYheiDUaGFE5pEQvT2D7uefMC3R4Vr6qDUtVKkCx8vVuh2m2426FVZZeDwwaz6",
  "key4": "ytsiXhjFhiAvH8agtMCvcfcHuCRv4KRXS7BmHNCVJGJYJp4JkLDDxoRGf9u2c6uyQgBYP3jXsv26VjmyGSQFom3",
  "key5": "3jAe4xQgT7guNXh7CBuE3BhyRdrmyHmjQ2REhNCFYqkDDke8KEiE6U6772wVcK9eMHMsLEYi4nneNAtCxJfSmTbq",
  "key6": "4RierRxaApJzQ4tQwiujLPQV8TySwiBNQS4gtDQreQ5Nfr7QTRqkB1Yb5AhgRP2PEYr5pxvEYitTj5zg4jcMg3Wu",
  "key7": "njD8MfqZHvWWQ2CuNxCUziBqQSeFuycDoTexbps2fK471Qhg1YKHua4nscQxcpAJKjETY9RSHUShNH2M5FvEUE8",
  "key8": "Gmm5aDvTbJQ9RtaW54z2YLKHH8rnk8y6jXGV7tzQJZzBVeMV5QH1CLEFCJ7NVxyWC4BqkMHwYoFUCE3heXDMvtZ",
  "key9": "649kFN4k2KFA1pBjuQcVJDZLMHkumjdUDuzsezD3wDbdrPD8rPzmXAsNpsjh4PoGhmz4oBHbfXddqWqf8g7mwzzS",
  "key10": "5QLW152ccsJ9vN6ijReJtQ7retFrhQ9eH4GxjZ2mv1afZmG5VtBurAxGK6ujtMfJuxtaWcNJoKDVBoM7AZFPDrhK",
  "key11": "2f7wjo6qHtAYZ6Jq98a4a9kcrBuWnY2xChbRcdjZHRqHtsZLWaiNE4tFHS28XVbNEG4ag27MN7cZ4YLFDYkmC4BT",
  "key12": "2AYBa3Wkyezm4NvTKJGX98hMrstGufQPk177fhUi2qrMSrUiRXZGZZYt5c3P4Eb95oLuDUSjynLQG53ra7xTaiau",
  "key13": "3KWxYZDAN5SHW4vNxV5DBatv9aWHvRg1DPSNbGaF9Fkjf9yk6HRqEzgFzmU6p1CnjNmVK2ZtEBHqBD2rrpZDtpd4",
  "key14": "2Aj3CVmzfYkJqwE5MnLfiCeAGQbKHpYpyFF5mxCVdkCWedNVrvgbJED3DCwNZjAGDqECRog1Cyhg773bPaNyD4pg",
  "key15": "2p4JvtTZ8zReMcNZbmQNLj23huXx12FeKaPJEzQ97QrF4dLpWfbzh3xNmEFkVBcQmgkwkhXtyj5YZDxQxzgMrL96",
  "key16": "2xNZDPb3T9g7b3YXiA3dDetsrUnVkrTbidCiH4cm7L1nd5cJZn9yg4fYE7kJXpCero6hHhpw4H84YcvBtC8nsxWP",
  "key17": "4T1vRSmgQNKtfpXGTn1gFSJQyNaztYge2UCfpj7UaZymtTP2qn8bqUbhZD3rZXMhybP1BT2C1RRczb1ZN3LFiNMN",
  "key18": "4C8dLfVPXsW1XGuM7zRiR6W4dZg6XbFdRSUGXD1W4VSpDTVSEFYMaKPyXoQCMdaQQGnCWVdDjNku4aWCRS4sXw63",
  "key19": "eXynpTL53vgbomzVk1YfUwSky5Fe3tG1LA7tytjUhDnbtDdvJHqimj8FcPvQeSf7uMkaR9v4L1iUrqugKhrC3oi",
  "key20": "5zJwWyjX143SdAzePxRePMmZTxUPMZhyFNQkWY8mpdjDhbyTEBmTZCWku75uoMQQRDMoTnj9ew5WhbT3p1evnyfr",
  "key21": "4k2ECmSKdXAeahSvYGfUAUkNdoyYeo84mQeTznPogBQ2Ggfh5ogrMPLspbTqWbx1R9UeJErC9HN1QkRW7tSuPfmV",
  "key22": "m5P1wRwmLoELzsC1tANZzTLhYykU1a9Cksjypi6SaXzEsR78JK65Jcti9VaPXzEvob8TtSSpQDPLibDknk27z7E",
  "key23": "5XtTtZtBMqjrDDoabXKfGeb4ctWWx9JunL43Xj3Wqmxtk99JniYCxr9osB2My1Qc4wYGKVdDJBLExVHm9QdaU4hS",
  "key24": "3974ksn8NVxre9bxQHz97Tx2wJr7v9X5m5oW9dnv8RQbfKWVjGaG7Wp38UXwM5peGp1gGPDyjdxPcpPhaQgWQN9c",
  "key25": "3VGKGj2Af2Ax58GANvtCdD8b27gskpwiXHr6ZKnXXZ6vA3xuPF8MrEZMNkMDtFDF5WNbdCmk2VtwJxDRzHErPNaw",
  "key26": "3tkQJoaHRtPL76awmmkMa8cw32XUAd5uC83hp77KL1EzW9mobEZpPr4eYrUxcGdQrAUAQ1pqBiVAv8fjzCZtWEha",
  "key27": "3ndVP8k2Wn8RRGGYjxnSUgt1gDtJFeFv1EYMbDBwZTk4n9YgPp76SaQ7qvocZteuhJngWAboGXNP7JUc9e2mrYw8",
  "key28": "45nqJZ68fs86xnfauxGeCyBE9nmVyQ7CENMXGcgJVMtfAP9mix9omADx7UEQ4VWrxUcuq7qJtsg6XjNaJgDqYvV1",
  "key29": "29xfBFtweuPBCLLaBGJFwptHe1TUULGR6KJmZMJFN23dqh3g76cdG6yRNSwhPFTdqCsgU5w3rKwjy3Ah83kNGcGh",
  "key30": "5uRk4aHjt24Z97GHtcCNUkUKAY1w4aer56cyiXwwqVvTDt5NyGyoydcBPVcwm8vnbeu7zYZ9ZTzYPZSgoqt6t6eQ",
  "key31": "4zvDSj5iV4GNHRQsSJhEdtny91dpSyEMazuijrhVidykivzhXvk97pnf3h3iCjJs6GFaATWzFVHqVjuRjQW12wJk",
  "key32": "4oUiP7xbEZytDnkcvagVMZC2W4Kynuz7XCTLMydFicQKjguQqxcRyvs1ooMpnP3doygCL2C8kN8XbEYLAujhCK2X",
  "key33": "4s7JFLoWTFvuNMuq4sQmoZaimkUba4qg9aKD4VCUMyFUdE7Hp8kpqB82FHksuDouwYrpKqJTqQc24usrz3jpTrV6",
  "key34": "3KegeiHH3dNUBNQ1eojcJMn7t4tqr1MpdmSncxHjfEoJJcsjwgfHDnQMxEwENfs2BNqXWRLY9EYb3bBud7i6H8E6",
  "key35": "29dQWaTc9iD7NQ1tVNmyRbFcqeecT4dDpSy9UH6UEs4tXzXGVrr27Nu5eEVhDptBWuhWTdEmGSJ7TachRUtKQDjt",
  "key36": "4V2B4pBkjPF7eeQdj83qZwinyWQvpoiv6yj4BDhPPM7cg5YViCXQJRZX8etPbPadARbmuepWqrr2HnwvpWMMv5Hf",
  "key37": "4Q3XrMiQGRxfxpo25jVdSj2dCN7Ny3UNRoXhegwj755izS7eaPxHrBCQrQqPJbKmUvRdA2uwNYNuKNtG6Jir6PeM",
  "key38": "3LQDjATiU46hEimdBp66eRquZ5YjBLxpmz7fWVMimyzpfjSKY2b8RkEisAZSPJVDdwHBMyehSLys116v1THv4Bas",
  "key39": "2AhUnbWzwmLv6UMZoNsxar2ao8aVjkbnb34uL2E1KDpLASa4FJNT8eTQ51uXf3fgJTFP4DpzHcSirNiiYmyF6Uw4",
  "key40": "J71Q9DtMKWiiYXCZX8bowirHrt5X5yuR9ryhMC8jCP8qNAEZgu7qKqr2MEpAjDX6UFeCgk5HcANf2AV14523GXJ",
  "key41": "n2pfEjhdtqRtCr1Kogi1KBJ8Es2AMusDDz4MTo59jecMutA5fxi9pTnbWiM7bDBDhz8dMt62dmsQVcmpjcqbJMB",
  "key42": "66MD2kvRzWqqB1yMACz9ZBEnr1aFMLDd5V4wrgr8nwn2ff6M3LERqr7MKgc2U6XG4MzDzeSzP8K7VzUVEe8bJqMP",
  "key43": "32xVYtzmjbHdiaZHeGcmDeq9PsTebCUND5aQQS7FiKEfnDWLLecynq7tg4cTfnR5RT6ot7zQzVyTRwGs3Jk1uXW",
  "key44": "XyPHtFGkvbq3tsPzmXg397CeL43LPo8ZjTCHFrDBWkc6uemARWZqsWUzzTMnY4hkqvrcB4HzgoQfbjh84fXvrdU",
  "key45": "4ouLcsrXc8hAQSRdHH9CpenpyKBghRUqXMq89WqgaEfR92pJdNLVMX9iVzUWGz8CGGZsbSBQV1HaP7TGiaCtgCJZ",
  "key46": "4kJVSfki4Fm4W4kGDrFMVKQNige28MSUXiQPQYQeM3pMRLx68saQqXnNtsBQrFoZ5wGJGiBwAbZCQC7TuU7ucXRh",
  "key47": "ubfGsDLkVTPspvFWnfJ8rwBMB8Bd1bhDw6QkpBt6hUq4nkxGGrn98Vg691n3o4PuaMkqSWpZ2C2RX5jjdjUWEaV",
  "key48": "5WDjG8Qo7zENJbRpF13trJmJYj1RKXvDVWq8ubUxGnRFPEdi8fTuknDmhJvcT4VmBq367NxD4JWoU6NrTySrYKag",
  "key49": "4bbp3uAaQ4d3CzHWTPRpXs5NDjQAF119qBiygPaVv5cA7qYvXuP3DVwiKAM6r8SNPgdXMhvyRpL3juBxAqziBeNN"
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
