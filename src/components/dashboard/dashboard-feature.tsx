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
    "5tLyVdFogmrLneTKsFZwyaf71rWNDaimQNeHpvs9giEC6W7hcyyFY3SYz4UeUwZrnxtqLW3cWgawHF8W84Nbvzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oit1Z1eyvfj34H3aG8bhsdixTj1bfyG5eUojFR1Ro5zDS2uBbaTRfyCHvJKKfddMsQZnNcypz7KtpH5CPuHnu9q",
  "key1": "axMdJrjwvvAiqjXih3TLoq6xLTr1qGeA6w9w3JiPR2Zrwm1ixCEBRt91ZcWdJTsdL6KHM8m9Grx6zoZ8oGv52Rb",
  "key2": "4KvJpxBMkkCMGwiCm3nK9FLtpV6zx9WzzPW5aZjwug1RPFY9sHWYv648VC7GiRpPB4oDTCqN1EFeG2pXNuiGWgM7",
  "key3": "4Qwj8GgLKcUcFnoJevxNFC8mqoKT4XAnAYJpZ1AV1215KeXBccbhi9N1RZxYHauuCNkkW5jLhLcohEYrsKn5C15V",
  "key4": "4JNPYYVFr2pW97qLNDosRUigrxwsrSPCpFFnpEhmZYQHnsZQNUA6vpD9Y781rnwncxGBjAoh6aoKW7VvmhA1bCVK",
  "key5": "3KuGYGqyLz9obcPEqXQQTh1tjm1iNGerUrUYPWudos7afieXXoWtdrm6y1TaujR3zkkqEU7nbtEb63T5nzAsHbz3",
  "key6": "3HfyZF5JXz7JF2iHQZxKSirswZXTqcH7r1wmy45Fe69MVVJNWLGH1MjT6bPBW98vQLEwombCkhyMwMEM5docwaRz",
  "key7": "GXsxvzmU1Moa2A6MuuUeGNTRSV1ct9qUgu91Qjnc4SSRpf1XLkyddmZSDubpi2wEvH4otDWY8evigYhvQ9ovvf8",
  "key8": "p2bnEx4gwtGUiJUdWw8Dd6BbNP9id9aSTwSyjvKbhBnAFKva6hEgP7W7x59mTMWcVVyysxvJqevSgoYYS4zYn3t",
  "key9": "3wVSwAdeZXczgqZAWXUFMmwSus8NDcj8oQab4T3dcjQNHJ9gyRfgDAihBX5UXfFTxZd9regcnhir63up4pY5ojKF",
  "key10": "5zztic1XzHbGKFVAq5Vvmip5cbdLtVMNcbEXDxwY4wHhShRyC151KfmM98j2dQH5ZAWzjEqnQq7JP955AGWkrEfk",
  "key11": "4geJKwtb2VU7RCnrMov8FLr5BsfeYoCdDD2wjxtD8LCvbfP9wGHsoMVECzbd77hFNtF8LFdmfvRY1bkrGAT1dFfP",
  "key12": "5oyxEqbqTRfmJVpuxpwwbS57yuiPR1BjFbvffTPe6hXtZwidom8PC4aF6qw6UNWxKhsqcKbHLtVVqgitWvcHFA3z",
  "key13": "5v1o3kvWFrfm5wqFgY34GqJnwy2YWizTeNMRvhk1rGyJCTef9uBiMivAQZKB3B97buAW74CMyLzMRN5up8UpVBRr",
  "key14": "SYMCC1sSWCJJnQz64njkcooZkhy5dPqxPWVJFxupfDxPqibHQmbpipcVCeHNoewTdKKiXe241KfRQHaFqJA6tdb",
  "key15": "3VTes4TM8xRTBB55KBuTnjsgYnJmdixrYAoemM8xAi5FcnHsNMd8Q2SAc8YmhQyWqgkY1boMAm6idgZd2fhnRTWk",
  "key16": "2mDC39JMWWQ4wT8k1AE4pPnVE8KYMs3ypdSh4QnctVjukHfqmsrANJjeszhFy2Yhz7sJpP5eTQdC4LzfCtrjNH7y",
  "key17": "qWAyGXwH3HztzXTRekz1KPeh4Xfev9G6phrJ9nRGqp8CP1XdRvTAVAfuj4MFQsQv8GpJir2T1MLiGd4WbsQjwpD",
  "key18": "2AbioWfHCwwSAb3fetjeM1ts453NauTknatt7oPaxsdTNHKm6qzpB1WbVvsw8uqLgbvdrwkS8p6AFstgt4m1rreC",
  "key19": "5pnSGRGNmaZPMZQQJoLzT36vBAbh1vQ25sHpAyw5EFB6iSxTSoA1QZFY4MZUCeibfsfaKdVUCfDWEyVxUiGJcnvF",
  "key20": "4Z81sJfvYfsR3w4iLtm5dbteqSkE2sR39apAfSUV8mCpVYw5R9xZR7eyo3WsJNf9WZzrS1FJ7naXv62Wc8qxB2uq",
  "key21": "3CWdvXPDAevJ6wo98Y98AWWcAPzLwP4CgEpUfMwnmuDtvwYc1FQKfDh6UXXgVBC1ooEJPxgaUxaxdchfpvwyYdgM",
  "key22": "3D6i8uBsyE3e4skZRPUf3RjLnWx2i98rJ2poxZ4vs9NaRgWzKcBMTZoWX9N58yLvB4rQYsAYk1WLc8nZGdtBieWK",
  "key23": "1GCAWe3ypgkyYy3psKhoud94UM9VV5Br8riQk2namJTxoQepcKg6sNeLshjDYJgpnjapUCgZDij7P3amFYCRr4t",
  "key24": "3vPe8Yx7tKYLQ338UMH2VnjgCRAaw8PeLPbjaVNgXa2g8chUkhtfDEFKdc17LQZFRcmY7Fipj6LdMwMopXbJh8WM",
  "key25": "4StfmJ8qbd5wGtSPt97ihv23VKaverohytSFqfW5Apabpf5dUthbHmC22szzxwMme6EYuaXDeJWx5ZytHJEGZHow",
  "key26": "32izeVk21pXxbFLFUVoJHt337GRphDcpQK1CaER857WLwC2oTQQRSuQRHUzHkWvwg4w153mquXFkQaGozyptS3AD",
  "key27": "sRRNBgM3Whs23NCMn4AvEGsoKsbGQaUuahsqq6ENeH5D3sTf3Wd4Y3jLxXNwRzApSeYHqUdmAuRSsy6xuUtnfrF",
  "key28": "44QyvFh9HjT9ZF6VYrP7B8fwFGZ4MQvnYKTguCShPiYHKp9JTCTmwii79S2KXDEMdeNbSTYR7CJcdHdz8sz8HNMe",
  "key29": "5gk2vDh6u1MBFz9RxAgU4wU8BezLZuSR5AXHNFjbmkY9PhTJWBtCw9oCPy5kNwXWmRfHjHawdfpDQizRNBs7c6Ut",
  "key30": "2vRQZcDwtH75FNo7smFRTG41L93U2SaQaR8Y3qrFsZuKRqt6wWeUT776JhQk4zFTe4RA16V6fEPeCyP8Pxw3FeUp",
  "key31": "5Bc7MTUm2bgeaCYmcKHucEg9yFGAfyzYU1W9q6cKx3nHXfSrL7FsQpVAsMivKAp2z6ZsztF5L3J38pUxj6rYDLRE",
  "key32": "5ST8ES4RVEz8axGX29e2GmP9GEHPcHwCtgn577mujxiAVtutm4EMZetbPgHVagCF3DEpddRpHdw4vBx5gqpPZqJR",
  "key33": "4wLccfzdLjNsDgrhLQ7ZVGMyJpUYGudX8HapiTmHTxdF7FhGoBs5x5m6vnvKrTh53Wm2ExxKLaLP2iEjE2GoG3RK",
  "key34": "3CJADb4gY7sUUNesCEi1cmNpEtNiABjzGzCbnbcpGxUEtxmPe1dPXidqdxfDpPrRiMkjGW8GJkwbWV9UC5BNqKvs",
  "key35": "4TPPFM26nLc2DCYznSRWGeMwfs1MgWHzJSvtTLfCtphUqDduMFPAfg1NqBiRudJ1PNZKUGhyhMrnSjbKzKYD9fJC"
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
