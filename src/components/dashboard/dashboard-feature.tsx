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
    "G3jHume5KMjh83Pm4DBv7hzsReuiUmLLcsYJHTCWvJPt2GyNPZaRpSvvJqjnj1LF6aW3mNUez8ndvwRavXWwvgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8f5VXJesz5Asc3uYFJuejAbRAt5Mc3gYNwsgp9xjg2uogQaiUX8vTbEe7F2dwx1w8bn3WHNm8b4BNLn1pD5igW",
  "key1": "couETgh3d7J4538kBw9KSJ41smoRuKG8PzFpXz4eAXGEjqJhVCf3rkHBE8WZbUK1nGDdZUYYaySCqR5f1NGSq3D",
  "key2": "2bExzd7ugFvmLY7imu2oZEPTJvmq5bVZCJXSz91xKQ4bxwbH6BQqxfs5ASFVnJNQghQBApVLPuXwBQVG6ZsuF5BF",
  "key3": "2s4AJ2srTvdFWu3DCAPt2tRigMZXdNJYsJvy2cWoMrqLfzHYzk49NxcrEfUiwhL7CjKAY3AqSP91AHHThjC3VDtC",
  "key4": "4BkK3oN4WQbNwRfBxWxG8oAwzbfgButWRRhQFgLp6VLhJPueApkbGeXP1YBaXQ6URjA3r8xe6n1MPA76DEU6kJC",
  "key5": "2jsK1xRDoBbZXMstT6ozDMBf3FNQaPvqiHPiaMup3nZKL9dN3YCRwfUXAgapoNRddTEATueu9xZGGwUrJxUpS9R2",
  "key6": "7wUtvUDiD6D9JHWxMQuZZp7BknYSb54NR314Jg3jEfsXZAF8DLdhACWLSUhsyKpBke39S4BjeW5E8XS9sYdEEPU",
  "key7": "5AAVinjTNj2iYS7UGq7axDsGW7hmXHYR9cdqEyLvMgXVrjpXCoKajzGf2jL3vFLsAJFwfkvKEmEWWacEaVVSmAHT",
  "key8": "3cKTA8UofZhHryx4iPrgYujX8vDukqmtwpqokwLdK8Lmf6B7SXRkLvq7Fo4Lu759pjFqzhmEok3hDY3AHgMnKJJ5",
  "key9": "4YxDdb3dAT1cENQs7Vk9kiWNnBCTtPWk9auKqGZw12yjwc8DTP7ioT95EFfQwgPzpz1qdnDHEXDR9DtMDiNqaYc7",
  "key10": "kCawiJQ4gmJL27UUUXTemMJDB1F5YyNZ4Bxa87QBqwx3gpqtSdLz3Kc2Ttbopx3TiWrGZfYpVF3RAeLzY76Q5EK",
  "key11": "Fg6vV27pmuZhxu8eCa3F5rJNnA32jSeqrMDCyJNSzxUjYWSAJbkTqkJZqjWEbKedygEfdmS59LQUvWjX3Sfzhh9",
  "key12": "2RCa2FFfg9ETkAWG54sBPq3sb5cn4MBNz14TL9LHJsVpbawoJgJLtXaboJd6m5oMgtXLqmUp2N1R5tNfp6SnMT3z",
  "key13": "4wZzSs5imm4uEXhRXEeR682tXT5Xjxygu8TkXDEtafaNvJQfHAGCEzXPmgGymdgSG4DRGeMCuPt4u1MMsF7nD58t",
  "key14": "4f1AcCDfmfP6RbfmskYyJRPFecDbKChao7twnMCJekmFajPwmubwyevqqak8BqpRHMfF8ywvzqsZVojBfGczHp6m",
  "key15": "4v2GiFoLeTcrALParULppPGduxjYgjUbDCQRqBv5HnQyHrpYVKYkFUkJ1ExpRwCSeRtsB9xRYSC6GtpuYM6NAhn3",
  "key16": "2TeK3jhfWtGGreC1US5YCuzYbXdzXuFGxL1RQNesNAVQ6R6hJLkCrHT5pXFtJ5wyxKm9ZVgZs8YckwpdTbqJPS7t",
  "key17": "5U8NBdPk6bZ43qCNWhiAkW7qxLNPSoGJCDFHoNtks5iZoMmJNK7mLsBaTX1Y3t5UTnHo6jMgBQLhYWxvcoScMxM3",
  "key18": "5ZBL2vrBEfXht3WXiy6hRU82sduYBPni63me8V4JzvDEtVVKgmjcnt3ejJ4Us1XLh3pLsBYTkiwZcP36QyqCxUSq",
  "key19": "RSCuUiLqpDsMcFm1THd6dTC52hGgc8faZEKRL3dU3uNZNknLbxv6cvQSTMgYfG74cvhq44rQxCmasbQZ6z8Cfpp",
  "key20": "5WnZSo542uytJ3zCG52Ap1xxwYZbY31b7j62bRHR7dvLSZpwqDAK6bdCQkMs6KDsUZLc3fU4nE2xwtZvSeVhYW2R",
  "key21": "5eFiZZaHBfmKYv5WhFDh2KsqAKthUn3S8K5rGaXbTR6TAoKPSBhTA3XGsBLzxvx7i7gn5bimfthDDEwJU69YYjiX",
  "key22": "5rBntU31DUgkEshzRz4YdZq4Dw88vDaw6jhbyGn6pDcrQZqpDHTKdmPPor55a6vZTnT9TJWaoKzruRheBSRQgDCm",
  "key23": "2LrB6fdDSYcC4sW62B81FRVgGUuW7SL2tNnAPvfwnJa3y9BpFWtrmzDdunF4bdS3WB3zcRkBhtd1Wy7kVYR4yNvc",
  "key24": "3YCqusnH1CCFb4kiEjGRNDDHvqJMPJEVbuVAjJrS2A8h6mF2x6XjdU37bM6ufLCPn8qQf6ztUxwv8RMo94w1i8HU",
  "key25": "61mKeyLnMKUHqQJNxVpVd3UTySbtFhnxxgyEyckH8ZDV7oYaF6XsMGKqjTXeFpDimNkk41BkroyW1ziJZ9RFju8G",
  "key26": "4fvEsjkEeabyKU7S4tXxe1eUBw7cu8EM9YYdQEPpVPryvquAvyWCAsJS3ME4xfTq64uWfSvgC8YCZoctxYYcGyeY",
  "key27": "4jvN7jgBVeLQbJeZbH3LLdDTCpFyTVk9GyDYE47UkZawqNni7kj3RLMvqvxGb2nAxpQBnzo2wN9fNZ3mvkWNsmdL",
  "key28": "8Z3AA7DZVZJj6RFNxys3PG4xLzp1Cbxx4A7BG2Y4fkqyW3v3QZceqBi8FrueEUBdebR3HWqLK4KanwZQnjZhexj",
  "key29": "qqoZKV2j3zzTZf9ymdQL67ZcmNH5Mwj5hFepnTWkcptBfqX4EbBgV6wDFHfLGG7Mjvo2w2BqTDyfkSHftSRtARw",
  "key30": "5kpcrWfzCCxkjfKq8pcRQGZ7vqmHb3JLKdRis9NsZJ4pHY6kX1q2Cn3UpXGYcJosPQb6sAkZSTcyewiGGeo4J6yL",
  "key31": "2ECJMjsTjkT7tSVhYihJUEhcL35VBGY7SVfgkqKwNx4pcFU4vgnddk3V6JWC82PSMinPV45MWM69j9CtCXHQHaRA",
  "key32": "3bq7srCSdoqbsWJXEGAAp8727LMhq1PBzESVFgXf5TdmNcgUn1fizZcgnn5UmZCPGfQy2tC3MdjpNTfjKHHgVdox",
  "key33": "62THpKPF68QW9stp8hR2gqyFomMfivtXTgYV5mFQ53SeUxdYakQjywbnsVjrBA6whn1QXi7qPDSH3xvU1RX2UDp1",
  "key34": "3Z6eQMgAtaEJVGrCrXqTAGwe2Vq1CKStQSiiqjWsiaMCEbiLthNs29YvdzPfSZKH58eNfQiNsQ89vRQUdqp6d6oX",
  "key35": "5WT57ttekWYQwNMn3akiWQ9H334xifhDGPDmuTwnYcVtoaKZziUDJeFhxeVRPTUPF8BafEbFxrL3wKiBrDNPDdaF",
  "key36": "vhqdC5Ps53TLGQe7wxPNboReXfzyV9chLKCJtFL4mwoVDT1QCNC71jNgx2qQtHq96TtMtGxeMc3C82FC6wSGU9R",
  "key37": "2SUKJ3xoX3ofmLPqGFqNcmgzJtnx78B3eZuSHW2DaTKWj1bfFyHVgM9pX1yGdTowHKjJjvwS9BLk4LhHDjnTfE17",
  "key38": "32SSJGmX9xkvvRM15EHFkZQ3wJybh8XdJEQCgNWxjzdn8j2BSA82sxtWx5oNhvqFX4acg9DvUN31ccXmQkVfrAMA",
  "key39": "4ApYVqLf4Hz6mD5wwz2JCKZZ7C6uyyjK92mtErAvopsLnx3ZrSmqM4igmqvTkKfmJgN42AHQjKDTUb317fDwikb3"
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
