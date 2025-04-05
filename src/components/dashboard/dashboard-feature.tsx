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
    "59SscBf1NkhjxeqX4pBHk3ZxF1STpc7oJ2Qzk2dAWt9xAHpq1YwiDxva8JckNXDRCNWVHfvZLscuxuMTfabG41V2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kban3Lxqc1BSHbmVG8WYkEqgCHtRbMPSG72k3FYdS5UUwJPeoWaPaWnZ8UYiED5wNGNhhK2dVMzHLfdhjuzC3wY",
  "key1": "54r1ARa3xErjYdd9qthgxy6ipXCYrwM28bcwiHeokphnJTQRG3Z57E47CMLjaZj9H1MgDVcCvoaS8kg2YDgYkcjD",
  "key2": "zBEMjNJYomfwcsUmeEgk1zgShMVF49ZbJerU4WbWPhN11nJ8E3tqnCzPTcVBdjZu2wTrBzVwZ7q2X3zt3vYsrc3",
  "key3": "5YVpmGL9M8TgSSWpffVrFU5oPZQqTjkp3mBG4XLG3K57sTJfirbjEEU3LoK5uRSC2qvticSLUbWop9nxEBKyecez",
  "key4": "2a3JtYb4SFZZKZJs8cMYEjLSn4Z9rEemwFUjoqK7DiXNUDFMP6LhkPkPysfF3KpSt5m23bfyxieqxbXKbSLtautA",
  "key5": "3Q6tmQ7S1F1Xz6WeEfH7Ac4V66DaVEWNmxTYg1oqmEsvqHwuF6GucM6xjN9gLdRXcXW72UME7E3PSkia6M6YHCRw",
  "key6": "5LzZPeSh7MceRpmzLd4Qx3jBKZeTrsXxe3BtKxWcjVJdnPXVC5mJ7QqZNexvKE1pzTV4DtoMRRWcA5iRhgchqTrg",
  "key7": "5YCGyV5wzSuW8jiPooi5hvMAE3vWTjgzHN5gRKLL55LEJVZKSoTs4CRrcNJcG7ebPktWDZUeX2EmtE5ojSSP8VGU",
  "key8": "2FTJQn4X4avwr3dddyoUwtKBjXemGLU6K8QYGxugYyJa1DJwBWwCZFBV8tx8DcposQUmaNAfVZ8JGzspn1Pjp8VC",
  "key9": "2jUAkdWjG5vcd1we6G5A1nWHAtKUM1uEZdhPitggjPhxSjXT26f7vQybM25tn5xPehSgjRZxtFipTreFCdgr2G74",
  "key10": "5S8TAS1WLKE8qD1ssyqkRWC1wHkRXCuYAboi397vdpro4SUAtwhbQ1j9npVLghhqwH2NQr9Cd2hQWk4qZ9AsoKPA",
  "key11": "4n6V6cGntxrmHjEFQ4T8taPURvHjuS41tK178NAdsvRNSLgkrkvHpBALNFfWQBJScH29qgibQCRP9669HANwzEJm",
  "key12": "2PhziyDfP3mRG4DSoniuAe9jBmngwCHWXcsxekzsVN253Roz2vXq6gbCpivfccE8MjRRuqweTAKcY3Z1KBZMLGJ4",
  "key13": "ti2oZjRJY5t65xqWqY5CRyQM2Gi6aJdkXXWedYN7sV8WyyDpPHBBLndssAHerA3zcA3f65ySqsSVUhKbgYSHUSB",
  "key14": "2FfTLCc8sW6QTCQnehn649mHZdxDzdNPhozupZy8UGrD9A1aTsm6Khe6bvovaoADJQVBpLp4A4eXQANHVZJtxbTy",
  "key15": "yjA23nQCFz1n3HmPq51HvLxmToGK2T2F3jLDiLDdAzxZ1pRqQZMbGDt9kVEMVFjFQgC5SvaY4ZGde3ZJqrFC51e",
  "key16": "2sJpnw5LR5CqPt62jApgye9yhLYgCnyTfCMFHcAxpRfnkMJib4Rsxpyw3f5pjLbMmtCqttyjLKRpCMcuz2UogXKj",
  "key17": "4zU8r46YgS8PWRDfzbvwm8Su5VWSPKUWaCSe8dDsWqNrp2ubaDE7ja6gG4cyg4uLBfJaxHi6W7N6VAb7fTBe1QJP",
  "key18": "5xMkQ3V8fVV31Vk1Ahm1MyknztMo47QN8qZean9Lbpd4mQtpbzpK2G7thc2Gdk5kFmtejE8Skku1jEa5cReE3Urn",
  "key19": "5qxsfzCABPPVHDZRdeCo4ZA2RumUAKwJtc8X3sm6y2H7KjCqsNgxY6Bo2Vstwr9pi3H2oKXk9QEWDNWotnxaAjJM",
  "key20": "43tmC26BB3C2qze9ejzSoNuTwrVTWBgydvYh6XYzQBMeCvVi3GEFV6QJz28G2oaPGz9n7vUu8axgk1WfQE1GSfn3",
  "key21": "2ZVtakxQH92GAZc8NSw5Vro3rTs7R8eeem99zjxHAQC1UfLmLHYU1dVRGtF2zAFfro6hrvKz2dCq51nuzxYmMb7z",
  "key22": "487PAvAk6wAhQb171ypLzpxJ1L8N6qrgEUjpReZ1XT6Xq1ZuhPphD1EYBwan7CM4h4DiCtXB3vhrJH8FaHWeVyvA",
  "key23": "5sVeWPyvpf1wHMdNR8SKiFru9eoPUPejwtRRDPqEUntJyemndgvAZtiaacVuf6qQp5obSjrodXVDN1D7GVAKG8CX",
  "key24": "2AUB8TsutcftjaHvShbv4d6BFMVseHjbyh9jQPbdp97ZUDQMzuBJyd5m7MvTdB14d3c2mZXLnasDbm6SZvHimdqa",
  "key25": "jMYA1uwN8kR9f8AGbPYmMmaWtGuvV11yMBgJ3WVLCurc4vYfHomRZ2TSrGRBJP6JNoUmkWWfxJmCjbUgFweSRrd",
  "key26": "3VqmseB8Rt8z6ok7QKDCt6kMh74fagUcgeW2vJxFcau8RKkS3CPXER5NtwoZc3quMYMJUpZaSi4x8btacqfANRKM",
  "key27": "DbMexMXTNcYiJmAvG8sFBqNrMAxiJkTTME9A3T3LLaMPLmNeKnn4nY16TjBFP8PAfFSuEeHAdQGFTzsLsRhYJxS",
  "key28": "4PQaVFBcWyKKP8eLzJT6CwGfcFnVYsJDeqLSv7B4m3fesnMDDhs1hrpbhn1UEwngveLPwwDh418baR7P8Tcrxpzz",
  "key29": "2Fs3DFseWh5K1YVWx2UZjgj1Zgx2VHvEr5FwZzgkgWdhPUrWHvxCFMdvy4fMuW1xddpg1iaxEQeKymBW4S1sYk1N",
  "key30": "5781cX7mNqjPCg5FnWr2RrLVv68wZRnG1HUu1TNv5wM3Tvwn7XNT27QU9bG4kCTB6Q9s8L4wngoo8AwTLRT6m4pf",
  "key31": "24uB2N84AMNHEwEaYnLU6uFviivuXwxLyMaK9Kbg3eSbGfkewSwfUzkWWLsYS9RedTWgwyqSYuiz9HZtmAjGaChd",
  "key32": "jnzsk22zHp7xpTZ2SnFwAPiwyH3DvHXjPd6s2pynTYZH6sPPxnbaY6DVqJENKPruQBzDv9Dj5uZsuiJGnfM2rgA",
  "key33": "2R6zPMfTrsqB3uibnxX3aaP3VQyDC1V3Notr9Qw3TxCVAWwpcKpZmcy6k8NLo6Stwk7FXB1sDmguHTBumjjvot9g",
  "key34": "56qZ5SLvTbYM2dzx8r896tTnwvckVrHuDqZ15sh3b7aznhkmHYRCa9cpbrxJMCDJVSNgnRihc1SoK74iwRUMCFXd"
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
