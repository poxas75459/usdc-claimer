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
    "5vvrHNHKrg1WXb6qxyPAGiUfa8N4ziGdPHPZhSkz7FnSQVtsJyFWfyvT3EwFPByEJ3g9NoiMor1sjfkqdc4ngLrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WrkswqE1s9EgmUmSLM4AHbpZASLRUgKrwg7y83ezE9bVvqMUabNPukgXPJtanuouCQUrcnKqte2KnvFVPa3z7tY",
  "key1": "21S7F7Hfg7BNJxSXfyjM7BhVCimQEoAX1CeLbuV2DU68M5i1XN32h9d1cNiGNmaeMiiSq61obEJY57P6kM3imTBj",
  "key2": "2ohvi21wjnSgFNGWmRwLVRB31JqtjzzJ7hfWevdUGqZZ5yGquBtJmcbauWMNcgu9VbYsHFgwaVYwF32Cq4fSFZR8",
  "key3": "4AjSHkHwLxnvqpu9yN4sSJMhVbZevPjTiGhrc9aStYAE6i9mKoiEub7P8MFYuq29QxArfs9WrgrKgdU6rR4kJBaj",
  "key4": "5xfxLn6CnGa6jwv2bb2JCYsrpTSMwMQs3dieahfJRMGRSwCjNjHkMBEm4uiQywwd6AQgdrqTB1eWXbbYmNUVpenM",
  "key5": "3QRutewdwdxmuuZpgZZEWNQ7g42gDp8E3yYxMavyu2KyVAx2pCAeXBD5WixNefXuWUCoc1VjkJfPouguHVgGSPAy",
  "key6": "2Y4oBSUBTgsDiRSkWTG8DoYC2cb9ecVHpVRuT4YmH2EGVFemvpv2PGu8Mn192c1iqMkcHBp5wVFunYU9BCbncnVd",
  "key7": "3y6eAQc9qevxF8KmnM2nNuzrmB6ZSUS4EreiJhf4JB9bCYVxjQkpequw3PqizVw6xL1GEVX3GMn4ewh67nTpe2sw",
  "key8": "3MMzfuSZyg6L7WWL2WfKTTCKq54QfDrsLoAFC23vcJ3RoNPbrUuTt8nvwxCNEn36qAoKHQf1TmxkAGfKdzvwQ5Fs",
  "key9": "zsxeePZenAwHyJJAkJbJ7C5gxkNNi4qq1uudQ8eWd35wmuR464eya6WRkntQJaXbCPJTWcTcZGDtxgyU9jerKSk",
  "key10": "3cfoKXXW5etMkzvu2jWE72a9LvfiiCNN8Lq91dVmPPKgETitydSnTcL1LTJweLKhvLj8CnkXceXDzNSnPciBuRe7",
  "key11": "3KkDERGjnK4AYbP2Kpmg5hFR3pXfaugGiwCJXrNcUo7LSPBjJ3CkzPQZ2KrDRJ6LVq97Xev7cNXNd3LMUur8zqPR",
  "key12": "55yy1miAXBQ7ND2Ppq2zuTJXiejf8mM3CxxUJzVRoddYCbGT7HdphRKex2uLmiBmz7n9X4U6YRjfDiKjcY2ykVZK",
  "key13": "4DCs8RcQDnMQiGbBZ3hydH2b9yukS3sF17mtU3VDYhZ1tWGJaTWLoP6ThGqN92SKU34hEkYJ2csfrd5NzqbusGgm",
  "key14": "3jKLSvZjXmASG9B8ZYE5xutMfLSiUWyECR4PD1aH2AuGnkGJXMZnXX7PXnG79iG8cYoCft5Dz72nHMMzEVHPCQRe",
  "key15": "HZg75okSx8TTDuvKtVHrrkTTPrNyPBSEfWEQoK4CUfLJYMSyx7AX8YmhwgX39ja6cWyBJLM5oyEFDXn3TdRmCAR",
  "key16": "4p2ETW1qLTh8ZLSR2CZzkR6p1euHEwz5WiBPMcKC4MeQVythiiYCznZoGacPQMerXJku6dUEVUr1MC1xmqRBXmpW",
  "key17": "Ecg5C4x1jGGnMmhFHRiA8GCGngLFvV1JCgJ7yacEzCPBm7d8DH22N2ZLa2utNEcuqtYKJUhA5tX54hX1YeXuCf9",
  "key18": "625F9cWoKiRZz67zwTx1vQugxuGcfePepkhpsYGpkucRgwYqWYfbeeQGdKZUe6uAQCZkr2DuwKkMWx77Q5ZQGfJp",
  "key19": "bm1XRBiVK1Q186MuQ5vPhwmW8r3MwgyaCb78KHjkXnLgLuGbnTb9SaMbcQXLHZHVpqDeE16JAdExDRTt8He2wWS",
  "key20": "qiE7stkcnKvkrN99ycJWfFswAbnGMJWMHe94v7L6uvzfQv3ZKDRpBujgyabPchBQQP6ByzJncDpZAJciKPm6hh7",
  "key21": "5AsyhUzZNdk7badSbDCPsqypmiQU1nAPrsTAdMeKKiYuioUu9mQgfetYXpu3qF9yPqcDY2S3eevFCcruFziRn5AQ",
  "key22": "23dj51R9f6uEGPXpYoTLBwENbUNoauJmprYyUUuErJQXx5GZPyDBj7EwSbTs2xwCL2UFeneKWaWNHdoDMWG6Yu5L",
  "key23": "245penTbqmKMGx91pAJvLeFG3A3tmFcFsEVp35vADKCPsnovPV2xp9MTGBnnMt6zokH3xzcFRriQRgCYZZXGdeYb",
  "key24": "QqyVbHxADSUxGMvU91GanZvCcLaCh1L3Y6vHuwKzw1VFmy7Gbt2cg53wFa8k9pYW5a5P15pXv7mSkJYAjDUrqoX",
  "key25": "38gDRXgMaWePk2pgBtHsCtz5qfeuikeTsREmHyscgmzBmCaMY9p5jJMnpv9FAqCzqRBnW5zBCVo5w6HDpXXYP2tr",
  "key26": "4VhK2NtPcWuJEN1VMjZdwh3vQ18RkDgrGR38zvK9Nzp1XfRMDhSwS92EsX25ykpScJ7g8cddspjQFfH3C6FFTbGt",
  "key27": "4sdqTHQpryEfAjCY9mZVw1XJDpYqJPKspUstNFfJQMCiK4HhPLPdw5VnRhx1VJyE9nQBMvWQ9Pzxx7kHxz3267cz",
  "key28": "2TfUVrP8FuNNtcw8pi7njjnd8yeBhCbYwp8Yp2ebWQ37ziaA838RJ9CLWw2EwroaMhEBoWGggirQPv9GH4shf4xC",
  "key29": "hmV5QcTRsRWDk1FoVoojSKrFkgoTwGdKE2GxF7YmwQ7dvVz1E1oXwbZTHgesVgRoaE61eYbSSDE869q1KAfq5EN",
  "key30": "J56ugBA1kwPFjNnCDtt3U3weVqvYhnRGpaRzW3bLCkZooCJvh3mv1JcAtfRm9pPGTkkHADJ7d2JFxvFMz3D5GtJ"
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
