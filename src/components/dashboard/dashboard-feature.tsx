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
    "5ZkmfeojyJJTt9CgSA9oRavYExARq4hBWb3Y2ehuGv3BCVmJFnAwPtTaRRZyYt4DrZ7PZuXb6iWwb2mTCUGswZwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKZCFp2QJPjpeapPehXv3W67FzvS32veXQhNt5NQNRU5oTpnRgDiRCNrfFcicqHCbQxj4y9badvMDuf3jZBwuna",
  "key1": "2qeKyP5gztwdWyPE9LcbqRPbQJWBQtpVW7SHn88GhPjPpx6gm8bFVQRKF14UJ4nqx7e8uYARgBiccx2zQJWkX2rY",
  "key2": "3z5ZyiC51DXUDC6am3VdJMrS1vo8JTeSivctmT7MXkdAzHK3aSmXeYKdnE2567RXMqxUaUfbKjAuf6zcuV6P7hAR",
  "key3": "2BRRiXH5jvoW7Q17ZHQDCJfJUQ7RBqWWMMG7XE41uGxq5aNtEvK3ZAgtqezVQEPSNrZuY4RfFGiAvrp45wkPC85Z",
  "key4": "4vSYEaLdbeLpYGeH8mKj1ouFEubMEDcTfntFy8VJQJdAX6YEduPxajhF6EawnmYH4ZGRNtmsWXvTtFLb9A5bJ64a",
  "key5": "233y9J2AsBAm6DG5oYmWPcAhQ3LNXUdsyZ9MkGsoji3Jv2YTq5GcEgo4CKQFKHwJwSjfjq85gH5jRodcqvNUWTKo",
  "key6": "5UthWXLU6Ly2ZSVtXJHpsEXPNAJPP1VVP5cjczpSXU961kRLQrQ17x416MvEbed12qm2ACr81Lzo59qDcLPoKrmz",
  "key7": "4NLSQQvmG5WRCPG8ZiJ29HSCyFkKiefeL68pMtnCqdB2Bo5DV4UrfSVu7pYccSmo4oFfCJnKCaLJXNSdfp2HUZyA",
  "key8": "2icR39rhCiXQHLp8yf6hd4U8idtpEE7uPh13td9PBxrq2N11uU7iNmydP1Gz8QaUaTSX2ZXpicyiPPGzRj9N9gy1",
  "key9": "3wf9znu3JKEkCSkYrk5LoqEvQKgkjXvBHo9FzffvF3ux5tWnHew1wpCB8jMkoeJnoeBiKeVnTCFikeP7v7ymajM2",
  "key10": "4hYHBMa9JKwCcGFTuV4C3TdMfBGmSWHZvoXWY2xFC92RmqSAtEjPb37LnVKnH8AfZRPZBNhqrK86CyHApjF648zp",
  "key11": "38tS9D18SS4MNGBEdM9rpJMBKHu9EW4kg4gpHQj6rHGkVrRCGos4eJRW7DH4cQkEGymyVsXrsbeKNVAVbxUpvd12",
  "key12": "494C8SFk8qdNwJDUfL6CDWgKQFzxBefPYFveWQfHyxQ2zJUm8PKd1SMGSiRkBJDeUanSZWXtstuCtmjAci8rPB8C",
  "key13": "RJXJKsXnGYpSZ2h253V9hwdJbeJ3e3fbqoEsSKNVf8TKYDHVxPxzPcJC18kGcBkzBh4hx1pattwPerHb27n3LAg",
  "key14": "5i33KaKezNLW8a8X1tZMnk4tfbk5kVboNxyCmKs29K24q1eEmvfANnjaK6WZwDQjhFKsYsp1xXd7A9gB7izz5gWT",
  "key15": "3Ueeoyi6Esy3rAEHCbdPMDgx8oJuYmWGotwmnuUMjMMXNscUKVhRrunh7VMuk2FthPWiQuLdj9WZZeZyXut2Lc2w",
  "key16": "QyupKf1mNv488tz2Uy5QoVAB87PLZ9ukVECxbG2hivU6twFP3JN7qrfm54MKYt4kStNE38Dimuqc84ofiMhH2bo",
  "key17": "4nmDqf8Mm1tYP7WoNck4UCuZiihYXJ3LNHxv2Phr83i4Mk5yzKBCdbUeaBmMFQEpR9i5Bxqt6BGoqgZpNddzHHVY",
  "key18": "3xQWAKbLNphDW5nju2pbKgQvLZyogg23ZyJfw43YjojJx7bHzBByTuoR2jqAqMyUgoMoz3ZQFMi9uzKxcajRNcjw",
  "key19": "4XwHGbQc5KCTaYYchBiwJbSzd4MiZ6D7xDkjPZY5aMxBodw2K3BoCEeu7WLgdqa7MxX2sSqbqD8yrELfDQ61dBng",
  "key20": "2nMHvGoJou3YyjhwZMvMG3ZaoZi5T9wbbtaBqwyBYgQ9Y3xP2oTmZz2GMhe7xNdLG6ZN3VdY52wr8dYGNZCRm6a",
  "key21": "35niyeq3BdCThXPFmnhhMpaiCFHM9Fi19TGJuJABc4gjhM6tChGWSGrhGwNGLM7L28356NLN3Wp7GtGpL2rA8Rjc",
  "key22": "5WV7Tcseyujty5MTERDE27dKfo5dwQi8jX8s5wBgDDhMKGjF9H8RuzrSZKuC1hMNTMJeKznmN18vuybqage2toNE",
  "key23": "2Au6ZfE9TFxobWrkTPcV9UapWZdkdzK1CjR2XfZt5XkeZdzSMZCPTniAZpAYPuB1nUeAYRu5orfq6XXqDbjSJXkF",
  "key24": "4KPhsiLqJDTfExQRox8yq8chaA4SckwvMRGqCkQtHtcTfeFVRjYQX38bGqKNhvRMjEEtoMnfdC4WSsgvgeWKpGbt",
  "key25": "3W6ocMHkYQVoP4dBAy7nqau96DJ3oPnR9qr8HYccDYof3xdvJ4oSwEzzmbMcWYCYDNaH1aykzRLzi3vdoYRVW2s",
  "key26": "5w3XH8pLBTG6RZquXk24sknEzowddf3X1tUsvYr7UKBgkV3XgXLZKLiZaaQHwS3xeXzDeU2CWtzPn9KidEYavgyo",
  "key27": "5SLZYbZw8XdoxMGo7poA5Gnd3qDHfk8c8777T6wHZLVK1BTpvEQq75XUYuH4rJufZzWbrK74XqQ8wGBhjGT8V87",
  "key28": "2EQafhibv2Gyay5sfNMTd45xKJvMpqptwpj265eJUocNTA8Ca5LtoeGHKaPyMNnU9cz8E7iVmeGYkowZ4mbQGCvs",
  "key29": "4UTvp3BqJGo7verq4eoHpgvAo57Qv1ogR78hqxF6dDvJ2TonYejyZzcaVFUyUxTxBkJifPw54qqb2pTLnZZsC56H",
  "key30": "3DuS38prrphGwiPoCQvSpZMoa5d8X3bgAdNNf1MJQ48PTMNFxUhAqSPuPSVKVA1sxDwBiLzABU6sjVLarqEz7nfH",
  "key31": "4bsuvppyWffeGDB69GwwRo5VAELgFbvjNAAWZsJB1byHrHZXBeRriS6oArxRp6GoRDhAvq4YnaSX8RfW9zp6EBnW",
  "key32": "3C944ApMTxEwXw23EK6cbNGHsTRnbYmrRxEcAnVm64ZznZqnV15D17vD9Q5XxdfW5GSJRx3atQSN5YQwwqVpAqQA",
  "key33": "5dR2GASNbreraGo31ifTawpU9BR7jHgfPC6Fw5T4yFZWKGLfgXndGcs28zKGbkxGvKntRWGgCaec1rqW1YQndKWY",
  "key34": "v755ytsqRtXSpA5gonatwwXfKXVy3yQS2MqBtbS9dZww9QHS8mSdVBDYaq6FoeNxG7EU5i9Lt527Y1QZjNQLDXz",
  "key35": "3BZeC9PbXccrMEnAjJ2DuGgEMfViVzusezVDkTaKYarUpuhdbVwvxS8njSwef2NtM8tuuP5d2SuAm9oYLCn3JpWj",
  "key36": "54UYYnAhCxqsmk8tuDh6MhhAWb3cMBQUE3y5EfzHEfF9nMJsdd9DzoUaQoDjbewMHSp1Bybr3mcSPKUTp2ohPPr9",
  "key37": "4aD3mdcDq7XK9vJ5dX8XRJ9WEBSQ6d2JrAjJCHmrpyiHMQhy63LXSf2vP78BdJ7QzWTWHsrv9wWFJ3moGanLAx2V",
  "key38": "57JvyShYgJjSu4XYje8phQ2JBn4VzpgbevBAs5SEHbaxd9GmgngAyVChjk6FpwvfEnNhWwXL2S5zkoE7mjDBLbrQ"
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
