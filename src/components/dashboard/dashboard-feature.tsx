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
    "2RVwodaskgTTQWXkYcyffjgt9ntcxz2F3LP6NEcYd2wH2VQkv5A53SbBm4LhUSVcwpSHL8CndTcYwnY9PCUmpH1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "is9JnuzNDkmHWZRSEwsyC1ZXMmjBUzgxoLRf2P5MYAqiPTkgJLZ5r7RqHLfsSUJS9a5YJc8g5THJQupBrK3HoZe",
  "key1": "4dfJ5UnVT8YbAhu3dwXNprZo7h8EUaDKebFvUaMdqBACFpm76fymT1urzjsW3EVWAVPg6MW3f2Q6iKeQ1PajfcQT",
  "key2": "5PXAiRCn2HgPHJYRf3uwRnKnCgmyxR3tWLcyQ2UtocTxanvzGTE8s36Nmjkt1xofCKnYCquFe97pqcTa6JpLH45h",
  "key3": "gu3TVCxTdvCocTepGy286eokZp3TAVKrn6rhjryUSH7kwoKLn6k2Tn49D8UDn4FPyYceMoUkJ9ZGZ9PHq6BF1au",
  "key4": "2V9psjiuJkUdaA1XbcrH8jt5k4jFMjBn4e941W2B3fVa7hmMXRwK3YzUztpsN8fLeRPq8L9Kp4HPaduodpfRtSUi",
  "key5": "5GmpQd6pzE9pAatDdRBhzvrXr66k7JkhoX53itmaJCf7dxYDqbCbSVaenSdTm6uoiq3a3VvkGiPD1hvos51MMX6i",
  "key6": "5JpVJM6WBEmznt8Zbj1WMuJsdfeVsymDXPv6FkqHeZ9iw37zbFSVwWcWdMhkyCVE3Tn1Hnub7ucWnC2NTR8pW6hY",
  "key7": "33aSfchXHjQLibFRw2Q4vBB86SaNzTiT1JgBsBKHDLhcoDRRtE2MFi5D5fguEFvopnEznhPQwRcLKzYa5HiHcwLq",
  "key8": "5QRC5LDqUN1BvJsSUJhieY9tFiJNwy5x6nYRD7i24VKRTLbP1U9KU3EetFXZcgmRFHSvoSSdkVXs17j7zM5vG7h8",
  "key9": "2dTyj93GKQxWM7SWkPtcPwgwubmqntLuFaM1RGrtieoBxB9wLMQWRu6t34ESkkAiedraSuwSKXMcNDD1sUPCw7g2",
  "key10": "3pq58DygEybUXKGPAtXMjzVKcnEk6twJDfg2anrg3BYchdiZ8MqcZchDhazLCzLHuiYHU4UKSBKFCsFTqYPrR5vH",
  "key11": "THXdJYCDosDcRrYRLW7YfxcXkSXCZF79RJeZPNchFarjECgpSXK5g6ja2cu3LggKa4ZveFyjTW8UwHNX3AVXmag",
  "key12": "tM7pgqhVRrfGJcWr1foMNUtDoJmaMvsdx2kcGECaAfaUuGGQBS5UbQ6DSrQ8mimSPXawDbZsbnckP9QY8jvft3o",
  "key13": "4JVJ11zL5nGc3iHpUeViPzSoRFkCqSvvG8tPZHCNZorSKuiGKsGRhiLpL3rYjfMHNubG75oTi38f45KqeoXuoEqH",
  "key14": "4LR9aN2eS2dCGH7NbAkMevpeDsWKVvWJh25SZVzJsNtcy7vA34XmGbHsqT3q1Bq3vW4tz7zVri1xsTRWUctqoMKt",
  "key15": "29UmWr8ho5faNwQYjS9f7AqR9GgZdJRKgE3oqNzWourCRjPydTNM7vT56uDKrC47m4GHdJxRYe3F1t3JHybYr9ZG",
  "key16": "3A78nFrJnzCyfBX9rAjNSaMoaZ6YXXBeCyYgU993gwqWFKYJuQTTqnNd8ntUsDwyipJbXJnD3HSXzYrXrHDEdFdQ",
  "key17": "3NiMvvJVMZzRFCTgFhcHPFCzbn6EvmjZAkqZqzePpjwzn63ZXvVDvqKQUN47Vefw1snKeCjePkkaTB5XYcr8HSnS",
  "key18": "2mKCHvdvBJHDoAb1UZ9fEmZWTF2437ZKUjj9y5zKhKtaHkSwbUAxACHdnH6nWcZYW2B9ta26ZHZ4MNcRQEqiD1oS",
  "key19": "5hsRC6RZsPRsMHmkmebwoVsKSGx2n8KDJpmNBfaBMWTSRL4HW2qHcu3zMEHGtbP4oESngVbsEgqP3e8VzQdpNYJn",
  "key20": "43kc7yTLcDBSEMMkwtZk8c9S712BTMY7HXFjtz54e2K3hxVjtAqTYJHo2iXgMwKL6hpbiC61u4ze6zrZ5UPWgHWM",
  "key21": "32TQ7topSQNHYZz3snqYxqanvfMXMHMDbathJKb8bHdcA8461mEBSSjeNKPYspNrPNHQxMAkVR1VCYMtWjDnbkzP",
  "key22": "epmKMyDEQDmsU1YZ62Cj2GDivW2vnzk2e9UeyxQV5MgB364acbbA9uMPMQrGkiciaxv83Le52kttcTVMbESnW3m",
  "key23": "26PmzBpsB55aoB1m7J1T7qsanrCPv1zQJt2RPc6vaKExUkZGLSkZcqDX2JDQJPerHzpBBymo48nzcdzWVYJpYnJM",
  "key24": "vFek5VHWiNWNKNJDDgnQZr6yrY9SRcd6vHjDTWXv4ePGSLrKe7aV8WwCs9mJW6HMz7j12SvZYZ6SVJReaG9xAEf",
  "key25": "2mqo7KX1V5z1pJ7LawSJZFe5JvpQMPm9Us9UNZuRMJxGyoJjMRZkk4VGcxCfUWgYkAkTbY9w2CGJbfRdZHTQAywT",
  "key26": "2WRhv2PkRtMLyzCemnLEdxP4ShSUqbedGYHBSw1CVppaEVJjq85Q9Fqf57DH3Mc8pfVmguWnALJr9vAZqdzLNsoH",
  "key27": "4m1ZCpxjkY3GBTW8B47Eiu4zLZi7KqiZ353QbX8S2R4wMcqGhQq1dVs6Q8mGrm2XVd73wBDwSzfDTMsJ18StGb3j",
  "key28": "3d8DLA5dcHSYoZ1BkgowPL65RAFm9NSbkqkNmvDiGqothjYrZhyjpcdoQQLRQ6tNKjtQ8AsmAE8DDu88GBmqZ4WV",
  "key29": "5HaSHhzGXihyrwT2JebwqPk4nHt5E3rstqwRZgtDGpS6PTVsoiqrqk9ZkHM5WHxwM7SCYqxgGSMbNWVSJ4BxNJ2W",
  "key30": "8n4owkUrXDwn7DdM85EFEA1XGFbcsNUtBBU8xMyYocgt37nvBMKpiDKN7Fh6a3eTEvyR4pBBhdzt9iT7KJ9m2zE",
  "key31": "xw18eskcq9FNkpiNYcptvh5G1ZZWKPsZdYzt2hX2LKKymcxThVQxJQveLPn7o6wHJxv8ybWDhBAZKQbf7osLy7V",
  "key32": "52d8XVdsoMqRdwNB8UcFsB5Be145FDDKxdvxcmew4s1q4yqWPdMXkgxwW8SsHwmuCm7YA6weSpwn6WYonP3UYPXq",
  "key33": "5wL37WTcjjXv5oNLm9RkNG8xjAWoz8Rw8gCfRKG9jsaanszh2wWuxDKhAPxFZscm8AJoXeQGXrLo5aqhV9sZ6idS",
  "key34": "4djQsy8XuebiBr6Bg78vsBfR7m1kWohDWWBDmPRnJbVmUp88jgRmXQBfcuPWv4wVzsC4zg6Hmnvc2YqeJdV8xz1C",
  "key35": "ZVQToV1B7quhgbApXjninM1qk7jcnGvPRTzun7F3KS9gLg9cDw9EUk8YaA4yeXkTrXgt29cMt2izbsW6otzU9CT",
  "key36": "4aPixbq4ZDv9GRAFvRax1GZWvoUvsQRHg1r5ECuTCJZhYXnL1D84yoifvQs7nqEo8SRtX1GuJcH7HCesr2N1W3nW",
  "key37": "4cG1usAeob5EU2JN8MdcuUxSJg9ZYyC96LXXi4Dfo4ZJ7YoUSfwCphQHWjzi6VSWN3GrbBhwCAGZHAqYkEHZGNLc",
  "key38": "4Ua94XTANZrovtK2ubtikSnQATbBYZu4owpdmGi6mqE9MqaEpknzkdqNA99Pnz7vhVu57m3sRdcTkjFaWr9hoivb"
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
