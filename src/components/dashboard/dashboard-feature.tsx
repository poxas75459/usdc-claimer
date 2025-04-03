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
    "S2Zh3dmjoL5ave3BymWjYuVXnCRndgySbMvcNmPZGy6o67RzyQdV6Hgfao4LM4dvXKRky1p1dY7tUxUUoETBNP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LCzb6aCiekakf2D2Up3TVjbrLNrzzpyvZ2abjCBe8Po6v63nBzAiFXTUFRshaJRK95GCTaJ5TtamNSoww6LVZy",
  "key1": "3HCrzpYKSUwW4zViQFbAzZrU6CsyHR7a9jm9BAVrzq17Z73TYs2DkYZwJWfMo1qmc8bvFxkuNWJvohEbAtXbXD2b",
  "key2": "2Vp4JnS34jrnJZLSWwTizfdWYimepmHFgGcFopTrGdVxsCb9jAuyGhMokpo1vB3hFe64axAy8A9QsXFCCDsmx5dh",
  "key3": "r1MQodZQ8hDU9nuHgWeicp51LE6C6KtA5acTDFxtJaaGZjPqE4ohxX3czDhcWj3n3pYjBzXar9TTxvCz4hmBiz9",
  "key4": "3ZheTkfGHpFb3qaMt7RDWQQyqooNobituf8CmcRrdPb5dQMyvL8MdQd6cwWsvoEEiPWY7hdQyeTruG66Y7mjxkN4",
  "key5": "4YcbaH776QNbhkABv9iXYbaEF98NCfbtkBVPDC6QsjXheqZxcnnmEjNV3e7vFJ2kbxjtCr3QJyyTPaPY6iKwC8iT",
  "key6": "4Khey7ji1t4HAXypXCQ7ia5jyfScPEywjCcoaa27ApiNSQFgboSCR3AgAXNG6fiNMhMTjeVMSjVyv13MygXRDo9h",
  "key7": "ECjEqCPcqWfbdPkpcKbe3TW1517P3r5gAt5zzX6jdEmpis6d9RnxmKMEDLPXPxtKAUfPHcJLaXYGgF8kawhEXC3",
  "key8": "3cBUXZ47PYJ8UkVLx6yhvJLpnVc3aiYnRq58rF8u95NRYbB5wU1MD97ahGgGiF1Uub6cXf54recLMNAL3oYmgmet",
  "key9": "5kYNsHF6Yvma33RxrzAW5raRn418C58Z4i1ZeGY4gj9mjHKUMqRCSHhDmmXwNHbRdgJoVeuxJrkRD3Z9tV74NZuP",
  "key10": "3H1iUjsdqrot89zQ6aSVvTpHeakQwbrAH2cBhW7NJiF4uw74Uq12NVfEMMFm3poTcCex1Yid1Q3uAcY713LacN4a",
  "key11": "iy8y3pbSADtP3qSzZrpCN7x3Kch5FjLYtZCc6VYo7ER6ocz3TbQZag6qG433FSodB5xg1cm4DYVwL83RbBpqSdj",
  "key12": "2hLmTPamEj4SD9Cn2BbjF2U3oZrzri94bEQEaDcJ3LGr7YBaTixvbkoYoKG4cBaLUhLS5XCD8UGR1yA8qa325773",
  "key13": "4LGdycBKvAQDvhLfU1S45oHb8Hniru7MTNpbPhKzaF1QVSHfyWX9J8bcDYL82A35ZhtQRAh2pGLFc9B1o7w7GYAe",
  "key14": "5gdbvrw4KHr1BXAHaQSeepA1odGso5heMUmqd2Y122Xc5KA948AocN36x3jvAho1zGwM2Tr6ftCTqCuNMwrggotL",
  "key15": "4HHGUULM2P8G5wZDm4TxCQy3R9dsUuzFCz7ZNvaiGTCBHnsgYjJjtzySq6PdcqLcZ9exdbJ24FxKAMafCvufECZ5",
  "key16": "3MD2cfAM49ixvZifuPZSumQ8aK3sYfowPM4fSAtxypWrsQFpH8eQS2mRcKbTjJcMHAt1z7b639XkKG9EAYNSbSfK",
  "key17": "2ckYv5cTmfh5SWitTBCkySTfAEAEbUijN5GyDXKewGpsn4tJZRz3ZtJnkxLz1YRW7VQeqfxr9pbhmcR7A8fUT2w4",
  "key18": "5qZMGAmq522B9dxMoay5cXU2PVBZStfTE9zbB97PQovZR2AqPCXxh9sXnCNYZYprehZVpDn5QA4gcy4ZZi43DCK6",
  "key19": "3acuDmu1DKX8AEec6KVxGeGW8uFgiHws4F9btX2wzQoWUvjfrEUYe2CuThiAEo77VPD9bopEjkDjwsgqXsokVJns",
  "key20": "4ASGkpkAJVEuw9FkpjRKeEmwQcCZNTUYKu7Fsq5pYt5GjPbktoccm4v6PFX3Ny1Eas9WPz2FPL6pxJyRVe3d19MX",
  "key21": "4szvQLDSquYa9C4jXAjGiMBgDYwmvJYNRLPWTYetfsv2AprZLTFZYTWtMUM7xiw7mDLY9oEazVwEiuhNYa46s89J",
  "key22": "4h5wmkP41jBgXZPjFXUNTqByEaM8xAGmVdKiNxosXfUEM9wvjb2TF4jbAmE6rSFx4UE8X83VXnMWhHe3Ym4Key8u",
  "key23": "5Lb6AkH3Qo4TR59Gh7U1bpAskYU1ii84iMWUkUHkbaDzhPYgAQZaHWkuWzD1du27gUu6BSQNDzLueRxSzRBRqVoV",
  "key24": "3Ry87SSgeB5oGMCvTCERuNuzLkW2F7LeYo8zXMo2KEb868UQ1ie9i4oHmXbHi1Qv59k8i5P1SYQz4AtCTeK6QggZ",
  "key25": "3djNyRvcyrHSvaj95eQLFpLvGfw6ipGtGG3fqkUSnBx4p8FfduahWJ2ev9TBz1fGjFNSqahmL22FFFam41EWUW1T",
  "key26": "5Xq3MoQ8ibj6fs6fXRWDQBVWoRNhAKp1hqrMpTB6A1mJhhocq1yn77nZj2GCbUUvRov7UfqZ4FR8GGa2LwzQTUT7",
  "key27": "BR4pLNqYidukpNR3NHMJ927R6UbR6JZsBKXbtz2kDXRw3rcrQoN2AbwxLvU3u5yET3ZsEEFiRywARf4Kpojbhvy",
  "key28": "2kF3MVvESndtjusXcYWRznvn8VmFeaQ3VC5ALj7nmTBuGUFTGsZ3FCxLA9LmPCJcbr7YrMzBt3AmcJh8L58qm7GW",
  "key29": "57JXZvcseh31ysn4En5vVqVFHdRzYgvuCPzCjfvuptjJtrXfby86iJLwRH67bUNn2w9kV7Rn2pGaV5dVaLkRvFYE",
  "key30": "2A1sP5N1aqfxDTwikxH556ktZUpJzR1wmpMXXFV7UubXiCGfxXDUbtFsFWLEGUpf53KaFbomygoojKHtvthsz8f2",
  "key31": "3zZEbqGT6k1vecX6za33MZnbQNHNuNzw1nzGajLFhWCCsuUn7rJU4Cvh79pN5wzsBT2E84cK996o45QGR3PibprQ",
  "key32": "bWrM4TYGv55HV9kb19JJKv1217uxq9tfbg7H8neCcwJq8tip9MB6SQRvJjV7ohimMMJzBCReW6zteQDznDnNhcm",
  "key33": "34xZkt9nHaBvNoVgSyWBdycuWfdSkyRjtvj8RHMKpyoKmCbiYFzoVHBSVnAtCufz6AJNRmb2WudpjwxFaMqSQnae",
  "key34": "3LdD5vviVDwbheDJDFMBhasxMbEJ3Sazs2mZYwKh2GoZTTyCH9woESDtkdExEaB8JsSJmeGkUQXLMTzmpUJtEPKg",
  "key35": "yPiRmnb3mTarEJA96t4ZQrSC7bEdaBv2xm51iTboUPLEqdnWFgHFYtBuX62YpeH4pgj7H9bkH5F7P3sgZKdzuNx",
  "key36": "2J36aimt2DPgNbr63ivj7HvmvK3VF84XbnFvgZ9Zu1HsTKuLPW53ihqeV3Ka62KXaGs3QcdfWz9KtYtxbU3Gsq4W",
  "key37": "3ErCVN9rAV5SC8Hc2WX1AQuMRe1pinae5WbjyD7G2saLrwCPZXe4kv66TnHknoSvPz84twMUBPUHB1PX4M4tZ8sC"
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
