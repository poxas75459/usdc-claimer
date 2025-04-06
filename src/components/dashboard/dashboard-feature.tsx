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
    "33GhGqWF4MfJf3XS2f291fAWB7PC8Lep792oAAAhZCL3bC2NNwhvMx9Mm5JZo33QzdaDg8GNVgUpLM1AQBmCSPRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UD2eitw2PY53DNGqWCvjFTi7QS8AjDw2tyBsYBWxifz7Hgm3yAt1jCgxhCXYdadrmSgioDtkKYfVj7ikeNrFeyY",
  "key1": "4JfEyafFiA6XZxq55fqVxoVhSeoSzdg7mf34st2hRLhVMbhQQwBVsN7GEx1AyQiEZGfSLbmwv28BGiBz4dhgBst",
  "key2": "5udG4hwPVcAJtEbQrBeq7MbbUUC8zBzLpkymVBwZvnngi1mtMjEWmusqvcU63qSDXmFMAk1HPhQaWnKL2vi92CeN",
  "key3": "2w1ps37yC6KfuPaYwoTpMidbVsbo4De9tugCQJfAVWu9UCbMfP3vs7YK2xSeEkdgwe59rKs9YQMV2j9oRZ1zh3V7",
  "key4": "4PCrfTrP2CydsbvrVAKaFT7vwXzyb95ytC6gXgFHDp1wV7V83pLkLsw3N2dTJUAbaKfW1ETrgaZDpmXBEH7HKxBx",
  "key5": "5Sz8U1q8iwTE3YvsV5qtYPgnzyGjyj8omsChKxqB2etsh3vBJgvSMGBckDeJRv1ASupj9DMXje54ZFZRMpUx9nHx",
  "key6": "2yspzLiYnwdWdMgQgvb8aZUKPiiwKUUuyerVhf2kzTNCxTuFV1VSss4DpAw1V1FwEAZggyfrTAsmn7NTrHvTb1ya",
  "key7": "52ZDAcuUoyrhwsK71BDScn8j55TdVTGFPg7qZkLoADc4a4C7gsQHuKWC8at8n3UFGXZ2cB68jn4HwmLGjVyDeTuW",
  "key8": "9PdN4sh5Ltg1ityeivtyXp4Z52W55UbPdR7euq3AyQyPsNc1xPeii6tWaPom5advNQgoydU5X3RDhKkqRj3qXwJ",
  "key9": "2A7Fb8inTpt2rYjf1rM6ToaUJrqxZw5PKDuUqqBm7HAZaYXowJe9V7LmnXxgNTVHY8T49JNaJ1BDDgs5xbPku8hV",
  "key10": "4WgBa6EF3SFqnFRNrF7yi1MU2du5qmhhwjnU3btbGAEMnr2b6EPDxiZc9ypSQfuSEiiiihkWYeu6K9bkpSYP2wm7",
  "key11": "3tZ8FSCt1ugcjGaHtwGe8ZvZ6Gui6hbTYMjcjFg2rSkLg9eaCfLGQpYGFZJBEZFTucpbK7qFUsNKjiGpgrzV5FK6",
  "key12": "4x7yua9bYXjebLqKFJhjQnQoGV17xWWv5om8oAmuSqUmFDM47NB1fUhhNnCTEvARKbKrhgPWme4dtia5wcEiFEHG",
  "key13": "EpskvoFMjxEz3maj9idpcXTqi4YymuURiaXqZVgBXBdt98uLroUgYN62XCMWJbm7p27zbpymei8QdEWnNPLUdm8",
  "key14": "5p7ErFXaEAfq4zWSK2ygcUwJpbEwpFJBF3Vx215qKgDo7jRutGzUBQdHsjTzM2izx923pp54HLRKjhXvpHCdxAk1",
  "key15": "5t5gEZwzTBEQhpCdVm5BAWFU83HRz9njGU5n9tCq4mvAMJw5o8ZYcRVopvo5VptnTEU7hBJvGE8Lphb7SXcrNLxQ",
  "key16": "61VB57QhHxdvJb3EuVk3FeYdNT54jidPmZjBTTn9ji4RdvksKGqQq1e6m4AvdbwqjANnf9Gr8L51H8fiwbfdq7GG",
  "key17": "7wZV4QtvJEJBAXG3NHNPJijB8QKMaZe6dryhBjv9E5U423bhJVYTQTJkKMyqwGqtiYJJiynEuE5B4jAAXpZH58a",
  "key18": "2MS2En7N4s7tCFAKTFskDFtZAERjUidaKvyCf5miP5eW28hNCgHBTF67bgDJhzkkwTX5ZfBR9H8iBgepyRoP9rD4",
  "key19": "46kos3CdgAVVvYFkjrjcrscEmp1KizXbkWZLJhA7n8HxdN6xVpepiJPyk2qK7JTAkdUPsM9kVFRoC46wmBsYNh5j",
  "key20": "2dFDFMffsprKUWRmaTkXtQhQc72ce1mSNbQL4TKYU8NcZKkHV26u4mxka9Mdk5uEqC2Z5xf3gifE2seL8D6TuvMm",
  "key21": "57zEqXE8cBnvCUhWTnRCM8QMd1u63mf69TpxS3jJUb5PjdWeouLpCWFfZdP2LqL3bFhQxv4hSMgdBBZVQJEABcLB",
  "key22": "g2TbpgHBXxErctZvqheK8Zyoj4nsa4xEHVpkS9hn1fW5CXBoc8L7bSfeQjhJuHp9kFn1EKr8kwqom7kcks9RHX5",
  "key23": "4fBTq9UuCJ4KVsZEpA2e2Y761rYKW75jydD5ctGnM53hH3SUwRZfAQBNvNuTVvCWCF2tM1wEH5EBpPEcKLzpC5nB",
  "key24": "iyDNcNvZWkdYe6eU3msXKoRoweh5kGAamCNpWgZYsmJVTSy5qHa3BtxqMXA4TSmtLXHizSrPpcoF3uaJvQiQGTv",
  "key25": "4SGGRZ8RdVNi8FRwdKhRYc6hKz1WcRkbuSJDR5yQzEgrM9cb8vNbUQQ4t8H8ABHrQThLPFUdho23aT6NvWmFRmjo",
  "key26": "5U2AiRQxQvhfLgZS5oHUKViff9Zerkq84S8KXfGNYHxnyTS4cWHNpPu6abF4AfStuZFLdqY8d18dBpZQ6d386V1j",
  "key27": "2EJwCgSRRihascX3t4DvCzqpWAw2DmXi7HM6FCWsC7auz379TJauQL26WXYUWusuCqKH1VKKGY6VgCexuPBpnoDw",
  "key28": "5j7dygPAPc2cMNnw275DQ4EQjbXyfAf7q2nFwozV7qUcZUkpWv417gn5SdqpU62tkg8MDhzPsxzuFiiaeQyTmNRa",
  "key29": "4s4gkhebfx3NBPhB9SoRoTdCAdUxXuKS8zatFV1DQKECL7bxHWPCqAjavbtMB7iEnU4cQpt4zNKXLQPnPBYGwy8s",
  "key30": "5ve9WVczmzcrWfM7B9ZzHQi6Je4dSY4bgG7wLCaUViw5irEVAdLDjG9WNsmEsZ4e8wHrkjWLWr82iEwHKpXGVuwN",
  "key31": "594LFAstkofEW2Xtj5WbssBjSfkf3V3q8z7kVgpJJupunzhD5hogvXSdRibHz5sFZDkhr95CCAk8wSjTNVLG5VpL",
  "key32": "5RGkQLNxZVt1czfVyFftTyHytNs4yisCRiZVfheRbnEWfDoTnNZbWdzvR7PFtifc4jYgv5q4o4kMa4RRpqx2XeWf",
  "key33": "4Wkg96KaBKaqycZxmvMaZ6yzTS5ztbgiNd9sq53953QJaiUBgs2VxUGR51wKASem1kKKaZrR3h4X7n8usjp2pZJT"
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
