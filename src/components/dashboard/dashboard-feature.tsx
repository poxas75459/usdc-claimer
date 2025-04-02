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
    "3p82MnaKBUurV9Zsb63aSTn94QnyrpkD8DPWXUPVaiimdSdRadHHU4doapa23kgPajAnUxwje5kUH24XmtuPgRb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLBDEiFGsS8XMiethwaQPg4ykfpL99uCmNcT3vQASvWdJT23gHhCGs2L4S5dBAAxiakhEyezoH7w9APG4JXkaQU",
  "key1": "46qccZbwBGyFQPJQSC3vGsyxZDg1AbvtYWsNKQ7wVbN9LrLxA8rgGpVwsjiZ2ord6i7VcaKfWpss1HAVoEuuiyQ8",
  "key2": "2PryP6ArD21op4PJ4P1x9PAnFJeeBeCQAiP6dcdqpQLbs6JagQC3LdRFjGVTbq6j9b32kwgfDvKt66yxnp6cwSYz",
  "key3": "4qxdWxSc47UfnRfpHFh8N381HngaSdFx4oaG6QQiLwmTVtpSJhHsDmfY18CsxSUQo8q7XCF4bRqS1QTvR2pAaqn1",
  "key4": "DmgS7FidyWXW2dmCcMLyJ5zqKac71PgbDoSsvDWH3PNp6uLQ9kPgXBfhfxqESFTLnrYbGEVwPb1QpEPC25AFmVK",
  "key5": "566uYq6iqAF6LkmJz7pk5Qt3DsjWaMYvfEA1tFypHvurhusDc7HoTWNzB2fv1mJr1U1ScRe7NVfJuXaj2AQBkzMr",
  "key6": "4RXQ6YBwM8MXVfPbSvvuJMu6Az8TJZRMEvrjfGS6GigWohygwedgChSQhK3o6b39PVhX7T4wU7bpm5WJqExtA3KG",
  "key7": "2HhH6eazm8FNwpzfkFyEKHy6HPp8oFahnsE5xhEkXmTSfrpjYAwEDRMRn91UZeqUrVPAjSwdbjwb71ssRpaH3NH5",
  "key8": "56B3XQ6XrUHpd4vdPQUbwQ2R9r2TQiwgAZkUk3soXDF7R9xzCdNojSe3kvGXi6mYjXoXmd29VpzBvNcc6f5BFVhW",
  "key9": "4VrYeG8iVxtwfASq87zZ4vYDi9kbuU4UWGtCdzmeiRDWBov7mv23VisLoAaMn63KfnCnG8CGd1RY6DUmz2aDAV1W",
  "key10": "5ntjSBvju4w64rEbbu5B6JuFVZuwNdbwqJv49aucgBq1spv99xErGNk723YS3GfwX7rJkP4ZZKkC13RWwtYre4VG",
  "key11": "3hmKTmyzTQBrZW6LxfrUgCNF4S3TRSDKaWy8Xa8pj4yv76TyPvjcL5Rv7ib9tVGXZY69UaYj3UTjjKtqwnAs9ZzJ",
  "key12": "3giKnGkPjYxTg3ezdVcnQbQZTzRGDCdnZNZdyn1Hm3jjYtDxNqtNgyWBpBxDe9ATVGY24G1sEwX3Rk2B1HQnt1iZ",
  "key13": "MZxJoiSYr8WJXRQEFWk2F8aHGPsxhkYuEsB28szDkYrvk8VVhMZizZLtHH2wmgPjxXuKf5APdmk3PHN2MUyyn7s",
  "key14": "4QtiQtXniwYuFDSkZMhuaSe7LwNygxNtgoDPLdPepNAagXgp4Vt2wQnTZtMfkoTDUD32wYe5RG2eKqJRPtC9rqwA",
  "key15": "5T4budvsdWn8eU6TuEj1T2VD7hn4ufdmUijTfxBiPrL5ASGcYvipTAKUmUQr7aQ87Eagn9fy7DQ2p94qNFDMAWx6",
  "key16": "5go232spSAe3YHAALdSj9Fk33bRH49gCPzyFwkckLh1fNsQ5uM7m2o2HfRWriYWbDshPh6X2jSgposHTAih4tr4z",
  "key17": "2nwnJUnmApnaU9Qh1HbTNw6vApFSqdgLfmpso8vzTZYj8jxRKo52PzFT4hGtdziEFKiZimHgDL13yyHEDLJWDmKq",
  "key18": "5pNsx4whuoVypS49Noh9wwYnaTLcMAreijeuroj3mzPgGEhQewR1NeXz3QW1z81v9WdVvAGxcsWTRYFmuqe6JqeX",
  "key19": "2jrWNQUgVXzBLbWhcoysi49qzGULyJ8ESFkTfeH2jwXBD1dHiNmDdYiDzaob7p4DJHgi7GAphFYjfUYirwxmmHge",
  "key20": "3RnGiwpq425QaNCR1qK6Yi2jM4ae28mskhSsbCGTBnvy9Z5CjjzN9AcKVv78X3FZ3AjKnJVR1kaCRmsXb7CaHZ7P",
  "key21": "63umPfMp6JXpMxiTqekpQKzJ3R7Kwgcw4quiCiLmHLbMu4xpiMH3k1Y15cZqJN2SkYJwT3wLZbkBkLzaqE5GB3gh",
  "key22": "5an6AKgP1PbFTdUUFRQ6RfsQjJ1GdcAM79jTqTH22ZwTdcb4S2rS8gJwjU81GxANxvhJ3wDSUbBXaxt1vcgNZVFZ",
  "key23": "66b9c94BgpbCWg58ZeUnX3B3EWZcTfzw3jsWUpqCDiEXzsnP4ZSWZSkiKnJCoMUmMmdySV7wsnyRbjZtV2rix8gv",
  "key24": "4WWRf9dZEhdaHRBHHSgTzLzH3DeSAfCo2oa77kzLTPRrCFUDw13eRDZ3gtG3vSYn4SjCtDDdaxWEbvtaD2VJ4rSE",
  "key25": "3yTK8HsMTxUaaYsMNUDCHCyVCKU4WMaUGrkn1n15Hin5ZAGV77Pzj18FVuVv6vgAurcEviVizu8m6PKwgaaMf5mp",
  "key26": "3erVBgycmxumF7KExnd4W86fTBBBWAb1EaFcYR7ZVuZ8LusY9NgFhP8BjEsNWDQgLAaqr2DdkxMVcoEfyEXGsrQb",
  "key27": "4RcsoXQGb3NcJTRahVk8UnPD2ZKFebQEDNprcWLUzodCdCSeXLbrn7ENzGoMESVUZdPweXQ9swKoUyGLAhBjXpcX",
  "key28": "4n7faXXG3PMDZFr7zQ5RDzFNJE3LgVZaYJzDU7NaJ3V8Lk1VnnK8Fii4U5bm6AVg4JiQfzQfZHmfTYhJoA5g598p",
  "key29": "3WoQrx5buHrswk45czG62f4QEVSyYWYKTwnudhjUg8QUQ2DdjwRhwckBspt3fGA2qwMxVf4MHFkAQsEg7FPogUeQ",
  "key30": "5XckkQXS8ytz1ywbUsj91uT5WKE8E6TsW7kS3N8YkE4XJ3Gr3SYFgdJSEGCdgwy4UA8DZyL3T9cZSeax9tmBhCYN",
  "key31": "2fTt9Agbbc4vG6LDS5U7p72J8DQJUYjgeuxNGNXoTTGg9pphmp1UFTXYThVj1EcQEdZwwnN7AdQLQ99Xfb6JfDw4",
  "key32": "9oAyTRwwKYNdfadRW4RoMNsDCiGysNmCbrsATspTGiy81EfZd9mCkntHhEatub8ey7HCWEjf3CHU1rhukLQ8EZv",
  "key33": "3nGHkZ7rscjSepdsEdKrLG83VWNvzDpXj3fTz3xMsFmkNadXikCDK4PBenut8HpXaqv7szmRpSa11KSzco12Gsv9",
  "key34": "2ku6uxrc9iLi9SNeuWrB9PCz37mfNoLsAN8JzEoTQ8Y7osK1AcU6Jh7uzq7hEjVJNaLMAN3RGUrzcFEt52YtHhSM",
  "key35": "4FrasFWB17Qfcrvt3EmhLiXJQoyueVVEmKLue7AR5u13ofQe6GyVoGst9TF2rix5JNrM4X7G9ckdGdEUvmZMJ4nr",
  "key36": "3szUYHmfjk4Y7MF5WwvBwFxAKmDfBZpcUm9QznRALrfqyTDrxFkeScrJq5UhZLSsgcnWNwxRf9u4AJoQajP6itCk",
  "key37": "5bpnbQs7RLLdKgB9gRTSQ3B6i66T97XE3pNNKBTv3yXdSAk4qPLmgA5XqchELxhXP8zuKPeR4ATgrrMJWYp6YRjN",
  "key38": "3hea3yNyT7YUUq8LiVFYqa7L8pXSQiEfJE7kMbZbAc7EgqTac7cFF6vTGWTb8T6SsN4By62dHshoc7qCqwqYssMd",
  "key39": "5H5qPySWewPfXExSQmuYMCXWsogJASkJ7r9iY7myRVXWhZ3muj8i7T4DCi7KAxvsJPBgCmoxsPXw6ZsA2h3edqPu",
  "key40": "2LZwQ6RtGu4bUEZrRHo9GCFmfKBd9qSK9VaRKhHE43XVbdthwBYT3SM67yUPihDL6R55VgjP33gy1xBUfV6ZUt5P"
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
