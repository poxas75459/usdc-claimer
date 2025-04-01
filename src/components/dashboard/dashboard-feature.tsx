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
    "5KnNABDyHbdXHndRCQf2d53fWn3feeAfsepcENj72W6BoeLRm1c1qj3dj56DQXsDg6wmcawR8CrBTAfrjLowxXWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L9bG4g9QCzr6i2TcYkfHVwtU2L855WXei4xxnDb1VzmtZxucCZvU3rRR2BN8ZFYuiCrYhr5xKp8ACNzqDa7S6AZ",
  "key1": "644sTZ1cgBQREX2UThe5Bzs6U2agLNKLLdGoTBzkmYzUQogPNmbvNwxy1qJeiMLxeE5VhZknXS7a316xZmqmbczA",
  "key2": "5bbfBWvLqWTSMPXBEBX1nmTg44HNNUT1T4cPJbaB36MRuC4tiibBp4UaRpWwZKryEuVQr3PRzztXMUrTcdG1D6kG",
  "key3": "2ei9uLiGbYkAYuPYjj22JncxkX6FwQ7QbTNrPJjMzW58tKeBkvCfmAMq7ZTF3k4oYQiaGoVeSTBJZzqtR8mzFc3V",
  "key4": "5vgP8gPUAQVhZr1Y4BtpMP81Cq7QFUtw1C3UTzMJjrq7z63WxknWyo3o5u4jbH8WbPzhND1Fh6qkiYbhn4hECeGq",
  "key5": "2s3UgMs3PENAyeJ3dSaiqu7HJL2xf3nRv7JXExEpNKc2GgYTJsC811dp7g2mz2QZP9kUBtXEiZ1fahTw1LgbwGAz",
  "key6": "54JtoTMpWEyFxaJaNdn3SNTViNPwMiBFzEqNRncD4v9kdtcdNGaYionLfKusYE2Uwrpj3bXniETKnMUwPUiy4K19",
  "key7": "s6MmbbrLaCxzdU3Dvy21TmxAZbdknbqMvLnTh5WbV7qF8kQR4982MMjEdKrJm6CHE51iwLidnWzZhRtrVEczzvi",
  "key8": "4kC5ePBQrGFxPMpazKhMxZ2BAgkR4RXweXgE7wNS2Ac2BRaeXNEsUzTm2HQBgxjKYmM6MFYGi6qAacB22aWsNXiE",
  "key9": "3mJ9N1hEuzDWgsny93E2x7MqEHrWVboXKBSuGmmB9r9CcVFZEMjgFr5Yfqy8yfLFQBSauKQxkc4P15JJMdmfx8te",
  "key10": "43Wd9BdChzKWUGZiu33mLMHc33PbKRXgeGSyGBsARD4skFXHP8PR7jrq2dGqJi1DCfwK8EC9FTKJQmo9nD6R1vEE",
  "key11": "5aEL48NTXoYfkzQC7ocMyWA1qPUuV38UGomuTrVoySmXGwqzgWvuEHb2xo2CF1yw8azRZ7DCBzNzPzCgCcJJjqkB",
  "key12": "52FFCJct6tPnZeJAdM9CVGp2iQ2exJx5xSG2ud3ueRYt4edGFtVsJ1MotN7FG8QWNC6P3NWCSicMWctEJe2LofNH",
  "key13": "ToJed3WcU9guWKbBeHiMLrbuTspAcGPEXgbYqESauiLptSMDCx8mcyTHcXtghAuYNfFKgmiQSLsndUEo6WzUDy4",
  "key14": "4JmLkFCXAD4FVWyzbpVCuKaEM58xxYULdwEpAffvQbcWEoqw4zNCzeP8xTBSfBbifHwZZFvJ3AgXBJ6Mz7uYVwuY",
  "key15": "4LMwyDsRTdQaQqSYb67S9v6Rcf97s75QbWg1ydEp8UmSY8asSZWbQhiNLSKvsC9JV68nM4qDEAaBaFc1pmrn6xrx",
  "key16": "624SoJosxYGLc4YhFmc5MvHBX7RnDobAudYqo31ZbRGcfXAd5R8robJHiNXr74JDCPsDJ7XkiPB23MTMEuELXf53",
  "key17": "291Tiu1isb76SButQbcGE6NG1zuaDnbG1g31AErgRgaKMAiJby4kzPAfNEB3wYqQFeuVUe6oCWdSmjzGqq9L7QnQ",
  "key18": "3dBTzMEibpZ6VugLGa8yZP5rhSji5ja2q4JKXurB331vdBxf5zR3GDvcv1qM8ZxebfJjantiNq7od7Doayh7iqv2",
  "key19": "4tCjvr9qvLvu6m7reWXeAcyD5szVjCrif3Bpq4bJ454P6wfgsdoXHwQQ2Unjpon2TE89rkrntE3desy1T7CuyqZA",
  "key20": "PaC6tg2dK67BGBkZCwqx5vggxNsPVE8DnW8MEsCrPyapJF5s7MugAPEzaQPzpJu8WEaFKQhQW26Y7fZ1oCaHGq6",
  "key21": "4tc6rkvzBLxmFQwtyTDeo9WHwbBD824W853nqJLoWxyUAL6AH4otnFQ4qJ7GXNVUBAxFkHUotS3yzgUznA73Vm1y",
  "key22": "5dpVvXoYFdbsi9LN3tDxbhrjPMGhXAHwEaNNsYJrQ5FmbCcdAF5r37jt3s25eYvuY9XKo8xU3CUvyLA3QmDXy1nv",
  "key23": "RtLcpNbW8w38E4mFwkxogcWGGb8HMade8UYsqmhHVEJbmdP3wgnY5DLZyKao7cQFyu3x1bt81MzK4Kt8Ejfx2xY",
  "key24": "2VZJknWjg5SHMGbUiozfG3dGR1wo1535YnjaMjbb36o3mCvWFENs4aderFP6HpXCHAuaP6CWasb1gqzPcsPyhzdT",
  "key25": "4wtGu2irSi1HvLUiZjEEmL3ndUmehxbfvSKF1NizDjo56sv6EihTYZR2DzedBazSeJTNmww515kDa7Ygvbf3JUkG"
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
