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
    "336teQT2cynQqazRoVBnGU2MkmgYwHwmz4D1CznB9kvQqMHiU8DGYnqMiJSZc2SqJKmtHH6aJUPCJHmSj4QHzdQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LdtCbENeYetYo7rXNfxYuPrfYuqFAHfv9UewrucmrTXu4LMfd6hfQJugBMH3UifgCpmCjhYwcSUdBvAtcbjLUP4",
  "key1": "4wvob6vEnPiPNsrFfPm9nc9BAVukbyE2LK4qDtWfkgrB1AxvbvS1zywAA8UX69UadXGR99QfJn9tyM93UTqQHHqV",
  "key2": "2iekmnmHEfifjK3D1Gt8d7yrZW4wreXCkvJRQ4WnGb16e2aEZW2kRwiBBmHohhynCHpiNiFd1KnZ8oMdMACjy6Ft",
  "key3": "5CmHtrgPXC13cNDwMJnNWcWbEiFcLk7xZepC3kNdhEeNdyUpcc9CvssR83KqKLanfUfqdpVgySCHM1L8M1U3ADMg",
  "key4": "4zkxd3QNtdg6EYCbvZoR2UP9GDUa92YL8wpeBhfgcHDaSosB8kwDf2rpnjg8V1SBdwb9LtKSfFGk95FQU3yr2w4g",
  "key5": "5suX8kjv2wZRoCMENWXmbFgsMEgnAMkCSMXTfyWgtsYKptE9m3Q6PsTy6WmYj5Kkqm8MC516inXW3Vc3gLX9wri4",
  "key6": "3k2kaqdkGVrkyhTHnhd3sTJyUS8pKiBHTWTa7NpiGdDj5ASz6hJBc8UQY9hqnE5iMdUiZYrEEf3ga39nxdtT8o1x",
  "key7": "5LfRnijyoQuZev8hrkcZs9TuNRWy7oj1c3ERFnYEZ1XvoVptjfbLsjjqwgqL9s7EL3aU7jT84sU4wP4A1hogUCW3",
  "key8": "4uRRiRRtJcFhDPPhe8EFobdXYjdrpPeyRR4tBadVT8HnEfXEsgTKDZR7khKhpuAW48tio8hxrspr2R9rPtCpzm1s",
  "key9": "4wvs4m3e9rQ2tmEyS7Yx41bYVhVpXkcMQDDiak8jfYv5tYzXNEaczJoWzkkuZDq5xhtjJeAoNoWJjeXhNAbcUANE",
  "key10": "PMtF2i31gEv1dZxnyfu8gocqa7UjrZn4pmP7EzkXNEuLdoAUikebbAXAAKsHW1aeMR5EpcdemDkuwaW8SGGdpe6",
  "key11": "2Aw32qmT9jyyu2VzTohQ4eqinjVJ5eyq4hjgD9kMHNznumxr3zzgdcpJNUHpE1Kw9maFyzkAAAmz83FhZuNHMPdE",
  "key12": "5FUm8LudYybLUEG5kHATmK33CYobTKPU7W4wZwpdhzYzr3Xwpco4iRVVVVpvox7pvNpQD9H98jGiwNnf74QNvEen",
  "key13": "5W9abmy6fmby7TttMi49jdfU7yktLjd5RHzYMQuHAUUUUKFzqzpVTtBttRB3kaSD8JrR1JxFXN4QncTF35demwrq",
  "key14": "3TGnaWdmijRmoDPXieDQJunD5DHtMQgsAJCsFGscPcPdgYajbc3Neik7LYebPqqvgrNZqNs2vUt3NhedTChp9VFL",
  "key15": "VXukNj6BaSqxoMcgwsFpa8UpamSeNkypedZhhfYKca2FSv64Pjeupcd6X8wHTQ38qCbHQtTRQvxZNipWJbzHh5J",
  "key16": "27Af47ZnfJPx8koFpmfpVuC88yc9wxe2JbGJKusbfcYrqSttFW198wYPPpoU1GtLHGJacvww2THbLC7fYSVENqNN",
  "key17": "5yg4pzhvRkVHg6bgNyAcKtkJdSYfZg4S4BgxEJdhWV1BEKf7f2tnJDjBcMKhJ3jTS18vMEA9gDwEHQ1vWfZngiZ1",
  "key18": "5ZAVS4wb1KzsvWbhSumnzX2oVW92TZ3GqjCz42rxQLiGdvzpWHwUzLjPTcDnWKfu6BvXMd8E8Zc6p73JNMWgt2y2",
  "key19": "5zezTweoyeGUj5J3QyoFdH11L2CyCSsUyQRUDScDNBicErmazrvk8mtDZ5HWVwQp8zso7T7ig1FJdqJUnopgQNcz",
  "key20": "2mCSzX5xXwnxUAYuGm7bFGG8fWosZPtz3bTdByRBt6CoqDpNG8ttNThv4FMLyWqWPf1RSfT1EQrdeA9BgnPGYUnL",
  "key21": "3wd1ha1auTAZPphjsnHcQ4urknMMgBCeEj1oUSj26QrkPaN6AoyPzEYLsfg5ZZXGW3xyu2acb1nzGxbtimop71AP",
  "key22": "126eJmbsa4LM9QRBX92r5tb1bPTj4gxjsfWBesmtzctP3yLTbBypAjhjjfFRdQ1wtq74vs4G6PYPVQp8LFnwinCe",
  "key23": "3Pbj1iJpKRdpVR8agGMhQkksmuvDghrnVJkKzVitF1NCVhc7LawJ6VM9XT7PdY2gbPiANTW7JqFrLBTwEAsCp7pn",
  "key24": "5AKC2eTfLnEmfbMAbM3o1tKJTJxT1cU357bQpErTsh4GXqNzb6zpkdZ48kefPV8QmfczMG6RJacSk1cKjTAcHDg7",
  "key25": "249sC9kQ1gv4sscpnn4q4ChodG1ZyFdSsYV99qFbQ4nhjqFBMWjtaanLtZvz8AKa6mhrB1KwSMpA1HxZj4x6YaB2",
  "key26": "xPpPafs5KiAE3MiqN2KPzxXriaPbU76UbtbsXNwPFxuo26BQibYtsEtg6Jt8jJuks9xCzUD6jqCXs5MqtRAj7Dh",
  "key27": "2bzEwu4yPcwzat88RPHTZTveKrKiLj3jmwxdtfMDE8SVXW1TrJ6gEEbtACWRyGSCFZwpm1LZW1DVoYTJpoNLJftk",
  "key28": "2KZ4bsPgiRBJfKkeUo9EXouJM9g3NvQs9uDNkDcRGBZEbiTJaBu15P2pZBNN9acV7nvgKYDKFt8csR5zyy9iTL7Z",
  "key29": "4kpCh5CbhrCqv1jXbUg9m7EMgWKr476XecxXQoAC6YUhmCHuCT5VVP1q31tv1Mr3vgjVioytxxCu15yob9uudvRQ",
  "key30": "4XQVNgWMGNxo2nqNd27eRCU9h5TZYwMxvGBUFKUenT8D8RU7c7nQJnS7dN8L8LpjemuM42t3LYE4bArqbECJa9pR"
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
