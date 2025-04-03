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
    "5vt5SHda8mZyRjhzUDaiv3WeG1aYTB3ZiAKpcMmTmP7z9bVe28uufJome4NU8cfYJhCnWEEJ5QbuGWifMSXpynAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WTtqTcfEHZnVzf5XNS4UWK7Je6qgAcMBRwduWFdmAYd3CEbTufRyoTwHxsST5KKmmWsvvbZMxQDcaqtJfPptoLP",
  "key1": "4gL2Edi9HHHeedaLWC6L2tP3m1HiUUDPDZ66eMnXdeh2zmUKTveW6LP6dLaDuY7hgaUwNuj19ixehbYjxFXauaeC",
  "key2": "58SV8QgUHPjhTvWCMxoxp4Uq1sGEv4U4G4bQetV9hmFy7x5hFXQ6paaTtMFneEAESmS93dY8Ub9jwkRR3CHNgb15",
  "key3": "3Hra3K5fEypjpt6Qw5fHJoQGG4CjprTnhNP5j3xHe5Sq11jsFvsgSyYvSVkpizNAftST9nsBh3fMgPEzciiRBgEy",
  "key4": "3o4HqZWTRmSVbSNPJqLdEQVcESMXtEcn6ZAEPhEbivNHEj39JxdRGrzx4dJN1hGGMkJr8jRKReYLCEbPV59h6Y5A",
  "key5": "M2dGVpTagq5gJLgmCJ6ksGiGnkexYqYV4RYA7LUJ8Cp9pKov1CEMnFs7DuWaK3wyBQo7kHbtyb5rqoxkKrXrREe",
  "key6": "3N6DHq75zVer8UPQcdAD7217XSnExeLqf1rNqj2kBtco3FgD4yYpQFX5DNZnKC5wQ9FUzs4847J4sgbxZe5axvFi",
  "key7": "3b7TSkMJuT8cnZjpc8EXZWNGC7mTCDjK5x6autVSdfpEM1niRCmfyoVF1g5LkatbdB7PZgVr3Xerb5W2g2dNBA3G",
  "key8": "61befooBQfdtfHjXtt2S45XfzUJUWbhYBe64ANk2B6P6PPzSVDBVguYeuqAvqYDNVY3RbMpgipETiwJRjFAhKdmV",
  "key9": "4PAwEac9j7cHk4AnBoyRV29nG6B7JD11UfGNR4WRLJ2EYm8KUyAMuSJ8iUMShbgsqeL8DPThD5YNo5Jxgnt1nZiW",
  "key10": "4oYnUEWnV7ja4Qjn589GWzHzUHWC1mN2XBdddh7gB9dCETKApRNkZtimiNonZE4pFgYfhM7P7FJuVxaMhi8HdGz5",
  "key11": "4eDoKuDmtu4ZnCkjC7ZFyy299SktDvcoyikaQzkm3ACYe2VcJUJZJQbdK67AngwBDdzg6zbzb1Zmh48p2x4f3mkd",
  "key12": "2jQes1mHv2L3dtF87n5DkddC4jFMURCV7fPqMtvfxVdsLLgY2ajS5udhhk1E1m3kAWj5bagzNNPQcUsbdQREg5GP",
  "key13": "3pMfH17dXf7uBB3SjckT94krWCtdMDUEdG6G44DoSfeZYgfBNxHFkyChkytVc7J4gxSFoecnMoFFoixmUAaedh4n",
  "key14": "4Zop4TkRTBGTDN3e1gJGDzPX71JTaxeqYKgLKEL9c2nPjoLYkybJwZChoRnJUW2mqQoZx3vHGY5oMEjchX6TmcYg",
  "key15": "5GVZsxPQSpoBLMUYCdLuka7UyT4zM12eysEjM8sJmLCAXsJZBqkRun3hzmk1iBezYzCJQPm7vrmLbQ9XQdpavgZY",
  "key16": "3EbrnQqELVu3Up2bWyi2NFC1cotHhK7KneCdVCm7oXA9LszD5vCVqEdnK2mKvKMay7Qfm6rZMfERG8WdyaVkwmaW",
  "key17": "4hZoWQDmc1TwyJEQhDQMMxDSqbWgmWhPDS64H7kNAC2bMh2ry5bP6XsfSipp9SfGmRc5gggQ9ProVe7vT6UDhktk",
  "key18": "hktGR2zJ7Fz8unebpDEpxhRm6VVyLBHV45reawAp9hqifB67HVUYmzoJSU8G6reo1SJfwsT4hhY47zF9GBrmgWF",
  "key19": "3qU1R3qs1a7oCKprB4GqaAFK5KNJExfxyqsJUqcYBmY6QhXQ6LbWyfyhWGTifMFB9M5vxPfgGP45ffxNChMsfHsk",
  "key20": "43nvEgVpHyTebBnLTs2TzFZtnk45MhFTqYzAuQ8ybsCoVHFHPgsVB2xTDBM48BLmBWgA3LSVN5fhhPhmBKFtgE67",
  "key21": "4EuAGxWMQ7gws9xMBun5Bvr6r45YvPbDxyZUgYujAAMbtTEX64gSEqDxTibicUrNcfdPBoBy66YUNDm6r7UtvyzD",
  "key22": "4Mo1g7bshPZ3Hx6WuXj4zJsyPvTgp17v6ngHs8Z7ek1Su8yekkRk1mGRPKGiFfWA5Mf8NrW5Q2DH1qcTTKZBG94J",
  "key23": "2VEYGcrxwKFnQLhPP7XHAdL49g5qMRBEWvfYP6dHyJYuRD5ipWXmCKVofjjQ4zcbzPgvPaPCET3rGnuUYedgUj5A",
  "key24": "2SjJN9gcProU3ZypicjmR71oYUpJUHrgMTTqGidH89NYsXDy7miAezUPhPSdCwknYcH7xH8ARKdJZpivNYEpqpcN",
  "key25": "m9M2WKTM2Cr5yEiXRqnVVZxia3MNfhbBqoehDuotTtmzHotCNzuh7t283Nzbs9jZqRugzsiHUvkJ4XjQvWYhRcA",
  "key26": "W6NFaaBcYy2koagSykQ8EES8tjXncUuJRgNKZVzU2x1ZJB8Lo1MPMhFLkLTSFiixXea5oVjFkyqmniVWMR4TYGz",
  "key27": "2zpziK4KNSogDdQg2WWF9sWqcgy2dVMGtboYWBdD7CK1ZsCqqzjHpz4JJvtznThJ69j6QaaPweQmACihA7EL89E6",
  "key28": "24PYTUYgXMnKd1TFUZduifA1DQFNLJySLaHF3Jks6G6LGLshEGFnz4yDTWHSBHEE9voitvzMU515P8Nq4kVfBE3i",
  "key29": "58VMadx87AT72GwJFJp6zAPUwCdVyA77hW25gPogMtTMDySsy5o779ssSa8GeN4q8m2Ti7ivjN9PTZKwfNZZm8VK",
  "key30": "4WNPTgqWDipLjd9BhuViicuRj5uwXPoRkuLxpEXuQAUjgoNab36sAhneai9VKDJGXmBNdBhXFTJ4CRgiYy38huiS",
  "key31": "4bUQSQzccdrBUgRhANimt2RqU1fbWShD5w5WSXBpTxs7mQZoiNTumGnSfaET8ufAJmHQVcaS2irUs3JTra8vHksh",
  "key32": "34YzJ4CeAuZSe8KrdQfDvjWRmiWZ25RKzvAR1aVKYQZGYKfD4nySAY8Sq13XBBZHS8WTj5h12XbuWaNhSW9HGk46",
  "key33": "3kpQtLEU1AMQ4FSP55SphBgvZrdDFVUw6Q8QJRc7Q8Smef2uMEMjxLsfMT6gyKWvMjMFYwM6yucBE6g3JDwBC5fH",
  "key34": "yqknpAEniVm5UnE6YpmZpwzrp5v8PHS1AmPFSiw5ksAmuf2RVJc4phUFMXJPE5YMvhQLwU41j41mcVZiPKx1nEA",
  "key35": "45bpRVwBirwMyB6oQBApQQT59ZBWmDDQsokWJFZFTgZZk65qmjBndY6SW6EGbizwXVb6vmeC2aYZ3L6PqwSAvL3H",
  "key36": "3sjJSFk2cE454T74KuaVKFQTCFx8LQKtEuAURy3WcqNXxuVUGmKiLhFofVtsaocDEdsatQ75jLNiRVV7syWWAD1Q",
  "key37": "mh16TpADQAM9341tqk655u8k9y3iJpKez1Yu99HTTfCdAwJnDbbnYJnwHEbVujWE2n5KtU1PnA7xC8UdpW9Qoig",
  "key38": "5cLMZYMRr22994t9SMwEJyNEuy99TBv9obH7YRuuxYJRJnyB7afJs5GweyeCCPJyVQNa8DSS7DJ6ntCYYNSB7DK6",
  "key39": "NMq7w7D4kTpa1r9nzKcFGSfHxaWPqM4EunUs3fRwctEEf7kXqANmXUboYD4y2LqC3dFtRCDBsEkt5YxZG2i42XZ",
  "key40": "69LWJdYSCwMtJ8PfL1am9kdLDeDJtqUxqKp7Bvxmw8WomDE6tz4soiwvoHddHpBHQ23Nhq35FB4nhZUWo5uF886",
  "key41": "2UqpqUQ5z6LKFDyV5XJ3XQQUoLfC4WJPJRvayXUerAMT8ojYemTZtZHyxucBvsh5R59YaU3qSqgVbrUQqxMjaC2s"
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
