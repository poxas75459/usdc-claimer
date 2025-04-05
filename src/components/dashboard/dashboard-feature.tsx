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
    "57nwzrNCJfVMkMeejHnDZrz19Jx4KiH3hnTii3cMZnoKEn9BM2TX4GGSxGXekKNdbJ7TbeYvcEnwmG5Xc8yciWZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XjPtB3XXEF7LFvCve8nN42DHytjoL1jamxs6cBmatPyjPRAcRhobBMr2vDWyGcDEk9ytT9rN9mPPDhwyMJAvEe",
  "key1": "AMfyd6q3r7FPnGWBgy3n4WY2Pi3q6aPqehpHVXX5xteFKcoe4Vps1Q6v5UzGangmwm6rbccirGnAPMAUaUkmKZm",
  "key2": "28j6V6MWgqB7zQ1MPPfrLTtZFYVqbJR1gH5DcJSwzgLXBxzNkrbsEfDNdp82bS8VpDQjjLEVRAYBGopguCXdbLoB",
  "key3": "kQryYm1Phxdxb19tr3xmw69zF9kfyF2TdE82nuCA7pNWswxZ5uCeKCtiCEbBFzuGTJ2yvoF7hrvWCweDq5ERdS5",
  "key4": "3VjTpvRCetWL8Kvn8XXMVFQjDNzkv1Sh1ZGKKePj2hBdbEWrtFDgktbWAhWAi9hb3A5i8ZmocbgQGcMQa5XAUHCh",
  "key5": "23o43YngzwYHyk3uuvSqQCqk4tvQsXShSQqKvCTyEqTpaDWaHqjEWCkjttNdjDBxXmHnKTSuTG4sa69SkEWKcksG",
  "key6": "21A9cX4bUKWcVCgSrZ75X2QdNz2d958pCX4EXDN3JgAZME3djoEb8A8PCmnw9CSXoH1AWEjbTe5xgXNLYcnEmCA1",
  "key7": "5nzntVChpM3rii6PNmZNuWPApyEJhZp3CeGTCgTcjGMuEDNsWmVDWE7scxgX9F65WCayn7e16yByPuu5xrXanjJA",
  "key8": "4Ago3FHu7ZRyZ5SccAwzem53wvCt64E4QB1UpkWHjW5Y8F4A31hPMZjqLhRoJr5LY7bgwDMPGRyLtJ1tSBSs9262",
  "key9": "3zjXHs6m7XY3mPtSCm6yzwGaspu4NRU3ja7jbuBiscZ45Nw5sJQd5vAYBgWNy7M9t2aGix65hAnxMa2rRzDidmmB",
  "key10": "4vE2U5eFJr72MQjq35ijUoE3R3koq5xgAYAv3j9ssBhHdGjEKSrb9ojV8pEGjpU61yoj9xt13E5YkdnsTyDSJywY",
  "key11": "2hxZbrftmVW1X8MDB9xGd6FArWJfqSQPFgdzJf7TWRYHUN6BLsn15p3UVAJrfz4UikBKL2qYmQpJQYSoX5TyyP9L",
  "key12": "5g6f592TUVKk8dEHko6zJoF25hE53ZmMGVFnTg5g7Lb6YvLA8qCiARRsGNG6ivjLqdtWdgS6WQBtGNcsLXjC1C4p",
  "key13": "5YoWJ56ebkphwrcpk36HZifkJNrLXjgeUx6qmy9yq7akNd6z6qzHt4h6hpaE9Zr1DnV8jPrAY6MwogZX4SyfwoM6",
  "key14": "5kckHUxWY6nnMGQUKV5NtpbMGNnuhZSiY1swopHUoTEWGHfdXhHoW79odYz2bjce8BcSg2gMwFYQUVuFp6fKUtKS",
  "key15": "4xfn8hBgh3WvKNAtZMQSLSG7kEwjwPFaB1exn3pdPMiTNufs16sj96HPGfFy7cJgo945u3DnShk8442GUECB9j3v",
  "key16": "22z9gaTRuWuavzWG6gStUYgxtxeeV7ktAKgPv9Zr94GRvhqbh2GfKysfUoJsoaWpR2ybbPVE7SuvMVE9DDXCvKz8",
  "key17": "2TKgGa3BgFVJePWZHV8Ssp2VBNoZaM4vVsnw9YvF1Gv5m7MYFsjY6WcepX1k5a62FEMKEEq55jmHRSAM2SVB2CtX",
  "key18": "3HQCAkLafTrTTYYHixe9mNSassZHSkcGtAFeHn329UsKLNg7zC5bnNCp6HLtzJahteVjHvkK7jjYMVRwjzHxwhCE",
  "key19": "48LQ68RYhVsvKNnFMqFokmHHBvczw6zUg1Z7rHRJYcj9zZZ7uqentk1ajgDpGhHVf3zaH4Gjii6FW8hggwr9uQqG",
  "key20": "4ARwuApehrnjsAhKxJmZ2FBvhhyPgnNZ6WjwUBrKJNdA86nWm5ppvSxptKr6j66bKzJxNCRnxy7D442iKA4d9HV2",
  "key21": "4EsT8S3gSH1kwAagfwdySvtFEYG4oc7LHPSChgNhWJtCb9k9492y5BPSLTRbGAE81RUZrofTmgwrXPJJQ6SbvVhy",
  "key22": "5DbMZ67unBXjVskvA6Bo1UswRgvPVPCD6E7rD73prqv2tU1sxgHnNpUDhxnNC9E5YoS87XostBuceNShVfGeUvkx",
  "key23": "2NFEmK2YThPswcrhHnUigeE1MFA66427Qrfgxi3NsABL2n1QJJxM7VxSSTK4FCR5NctEcQ1uVepLrX7crNQ395Lj",
  "key24": "4W6A25GTxNV21Reu3wMoJ5iyGhpyC15aP6twKK6eEC4X9zSJ3UCiDC2XMR6c9oeVVmCtdGTk2YUrji9hkAABdKho",
  "key25": "5VEwKyNm9yg8BxTTrDrTroDZY5ttpCkT2vg4LQZhpmn7c16mujxtsQu4oMcmYJswe5hAjrXjQQKJLvBv32wcoKDJ",
  "key26": "2uTkxPWkasFDAdGgZxDBHzRVrvueMdNuaocTyDMTAv15zFZDJAGg2VmpvrQEdUgeKvQCmLWFGyr8pbrVd2PAvHoC",
  "key27": "54Dv3iEnBcJZtNfzV1xKVmDVHzxifBLzQdN4hLSTZi7gwKVeE8pLxeeP1aee7XHgyo3PorHNYjnaZmvdP7YPjz6M",
  "key28": "4pKDWDxFk7FNHWeqqAxcipGpwJQgTVP4LVXvhaPiatgEhSvFw86HjunD7ZaiNBfG6McqRmXUDLhkLwy2NrQtLwxm",
  "key29": "5gSRqkhzypGutzyY49sc2qkW2ej5PM9ow9FSEetg1xKTUZRPkZPpzZJGeUoRgQi91cf8Y1svB5XMvK7JeRFMA9oU"
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
