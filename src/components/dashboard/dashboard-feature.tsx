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
    "3bSCsdAddB71LdBubzRpXSnCWd4PMzwvDg4TWBfRWEsGhwWnAEbeFPVvEC6bWdJt4wjYBx5Wsk9ZDgpFtUt4QL4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ca2peMexz43AHYYX6DE7Bc5ApshvUfhB7in4osjiLkjLy4vDrggy8phboDYm46axzGw3bqoKmaeaVDWrGi9TuXc",
  "key1": "4g8q5WPZ7KMwRwUUbyUFSHxxfW1j9j56QunBMeobBzGgBjZcAT9LUazuHSoA2RByFK5hvN9iX9vrjYQWdM1mTmGP",
  "key2": "5RfeqZBehs3LoZCRrL1CzpSNkb5HYUMLV7wfYuj3rFjXtkb3j3RfWV2b39PYh5wmGWRxpZkgjDpogq43fdtX7gVh",
  "key3": "2Zqunpi4LD5SodtMH9r34JqKQ6o64Wd6fqRFnCzwVPZfs3RUwB6TJDVWdRvTKQg17EAEMsxcNfUPCzPgPftK2YJM",
  "key4": "5Q63qSZQMzgWJNEJ5u4YBTXiU4B1s72u66YaJq3cfK9mhCQgQdkTga8ngctboCkJmA5xxKtzqe2fWod4unnqRXj4",
  "key5": "3dYuBWEWPnnHGocZ9HdeSjPuBKrfZU7Ctz1VfPfgbaCH3r6SjbiKmGb2ChsUXWbDDwVDh3hmDj1pXruFUtWyVHTY",
  "key6": "5uZceeCN3BdnRCa2TrxDpWcVu6U5EQdQCXvoeuv1ds6eEHybsZ1SWoHQ7YF6gHWc7m1WpvfoDmesk2aXhh8ZaR2a",
  "key7": "5PWdHyFCFScBHjtGpKVLfvfd6h7se8DFkLrNRWvNRFL8EmE4jZNL4V79wAPgR5gbPvThezvXcTzgHyNK1coLPs43",
  "key8": "5vuGuhj5oA9MDxiopHw3ZgfM1DYJgUrBzMGonb8rPpPwXabUqdLM9Aq56KnLbH97aHxHq9a5EkZAFKotrBCiGpCn",
  "key9": "2E4AtEbca8wrsSkCFBrAiPk4uZzegfku1YJ1NgcfwrwA7ntNJfJJoVaeKwKrCwKJTWAPabJAZDUNLX3d9Nzw5Jxd",
  "key10": "4jsvCgmiWebfa3Jh9ufKEPZtwpRDw1uZR43LGXvBGL4qfmPdAWBc3umrsyjFb8LNC3AL6qz27THnFMMwJ5yYpzVt",
  "key11": "3xQne81pDTT4BsS4Nw7oBM3Q6pcHjX17TmMKCvQFA5JGUc7asMcQL9yThTVh14uhpZLM73pCm6QytXbAxUVC8kyM",
  "key12": "2eGDDvGXKevQHzAgyosh8EFHt7NxM41GSKyq7TbwiHn8A4sC2RPcTchyz1BEGoQR1XHpQ4wg5B4TFVjvrnWr39iK",
  "key13": "sJnCqp1irQhSmz1UcJFGm5kejagZ2tzHisBPeYsEmtakv2VSVQqTY8YcTJZssuv8B97ZgCzAtgYj1VZryok5DVn",
  "key14": "4uN6Y3ouTLMh7VXJDVMzz32149ECaUTZKL1uJWG6U3aCwbDRMpWejXEgzTAekBoygnMiu52HeRYgkWU6t2JnhVGe",
  "key15": "5JHqpaiuzyTLarECibei6RFngH9NKTBmzNXJ3LbJCpgvsmqc13PaikoxxPw7Yj9EQZaVntyPTXdnYZhygRrNqc26",
  "key16": "3oRDfQhzVrFUVPdPgHxqzUc6eeV3o4qRpmSTqLgHPGP8L3qL91YbYNSiNB4xj7As2s92cKgzZyFdsiAqL3dbo6Fo",
  "key17": "3MnVzE5QnDSdYvhGrkpWwSWCKLJrj7395awW8snuwycUyPLo6YuEcin7KPJM2L3sQvu7r1WpsYty39rkowsKega9",
  "key18": "497KeJNTBs5fJw5Rqu3bRZ6Vjg1bLwaDZ8pmm2P7KU7tsS6ctmsPyPKzBjKsgJUxF1xMgN6QcP4wrXsuf6icxYy1",
  "key19": "4TekeMPGxQVWKDrabJczCf5Qd94dQvPbbe4atEVWKRB6uRVfjtKJeKnBfWm4ayNwHyV9RQFwMuC3iwG4dHR4nYm4",
  "key20": "46z5wcbeEgfbJNtF7ub4JqkY5M6ZCKBhKPAEX7ygoJJUaohw9f7SQH7BamkfFdipyTB57iGjRoRkLAN8Wk7HFMep",
  "key21": "5mWx3oqZkVqVxNPVWC1ZnEzffmvZbS4usDNV1iZ9AFWuXUsKxZJmxJeJe9tRUrhnvsjBxeZ4yq64Sbc7mP5FWk29",
  "key22": "4oYwhWfsNrUdELfAcQ8xrJoZUpNjc4RdBTqc6WXMhKr7a869VT2NJkyn97Drbrp3e6V8U4VNcEgJQboNsrxbEXh8",
  "key23": "5qNHNzJENK1gfiw4VGMhAGemwgRs1zRaG3x4rWi4HJh3qgy8x1JbLrvB2qLCU1Xqg6PSQTqUHr7qrNReejQMdJPd",
  "key24": "3BqpJeBzFiWLGSEkSL8mnTaLPaXD2r5NbgZ5Soa9J4sMh8D1gdCiwpgmkZX2bYUP9aAAp1nFrUEANqEKxoSCPHUg",
  "key25": "2F3rE3o7DgwzfxxaBbJ4arChdG82z59ytbdvKo73eJTe8qTpE7PBFUG8r14n1HAJJ3fsRQN1Q53zUYqQYSjroS8C",
  "key26": "59f5F2r6oLz1RkJVBZ8vGT5Fzrdd29KeCvwjLfr7wkXS54TZEN7r9rgsTNes5JZ67wBNiYR3WKkWMJTxw65gVgqz",
  "key27": "4qtXFKULRt2M6s7TKWfMr6yHpp4o12v1yWR4XjrxM3L7gQaBXFtcTfb1PpxLyi3WHSf5PbzesWSPTztgpgtsCHWZ",
  "key28": "25UDEMzUWKjpYQCtukoQt8RRXAJZwLvX195Z9kdSsE1R7fE5Hqkpn8NUiVo4miPzEpLx61UnnG5vYWnoKgQjumi9",
  "key29": "3euBYPb9gxmPRzLtdchDspYF1QtmuMXpATtUE5ByHhhqRLxdfBdbGWmNrt4m51z5SM3S11sWgzqLii6W6LHoBahD",
  "key30": "3SBQgHHGSm4BqdZeqj8q5PJRVQDF2Gix8NCVANtwKVjwV8Dxof8kue9mASA1D1H9MuQr81eqgBGmmXxAqYbRXFZS",
  "key31": "2e6Rjd2Uxu9vHSiZxsPJPhuCTe7D5WxsgXghHD6928tu7ARMZzWBuzEqrn7ykwWSEjZ2gnK7j67wQkE9RqYhFRXw",
  "key32": "4THUxLJnf2bsr2UaRbZQhJVGEhHe6sncyuQHEpmMaDaj3SH8ompP6HxAi4U2ce7db9CPoVY9RNx2YYFAZyqA9NWN",
  "key33": "23Q19MYXafK3W5gqTtAikYTszTfF6cdCFtwPMVjESVhxdMTWFymhfwriDJFZqRmxwV24cn4ZaGtUNWXGMEkxkpYZ",
  "key34": "2HdBu6dTPW5pFw9SNMiP2Z9kh76oLvaTjqkHWU9nSKu3cjdSbdL7z5xdgZxaSo334cMqhK3imSutBpiHrFmmvRS7",
  "key35": "4rNSycPwZtMYtm86R1sgsqUZKRLC7iibTsNu1Uk1rXEya4DrwHK3FupKkknTKDHKaoyzgBj5wCjMxUhB7ZoEQuJp",
  "key36": "2Hn241GgDaFdx6oGZMweQPDYvZA8pzMXd2hvrYzYgSfnaCPwJS2qifNCJXukwKEVKNiZaJ74u8hUvMZNGYSbXtjq",
  "key37": "29Aw5ep5EJQaZUETdxmwbgKfi5PALCnMPH55Be8FRMpAL8agsDxNizbG8x8KPQsyF6aJJPSBPmprZJsfva3ZTsKm",
  "key38": "5dPEcjkEJZrFvb3kT1pWKHUdAtTopvvLH5xexm3DDbMbT4r7nXHgjcQiPcwmvK6eexF8H9GwsvRr5UDSUpKnBPu2",
  "key39": "mi1sTLoVinKg9CcVgG1W1qtChTDwffL9U4RxW2XLoSS9Cnw1JvMKGQVFdbharxQNLp8HV63q7qRswzpzH9vgxtw",
  "key40": "5TSBeSq11SViHs27bZ2jcf2jgP5CxN6cX63AdPXkNE7yJZL4W1hcVk52gKfevrNZ98dk84BnVUqjBMskMxDfQzeL",
  "key41": "3VhwdX2hNgLdnWMEJ73tJqBuQWuo2fGyE36EEeUygY5RzokrhLc1e1AJQLY1cx4E7kw85XWCWyfotV4Eez1qHrZv",
  "key42": "3KaPdYqx5uUEEk3Ww4PfmVymhzhCCE82BNNDt3HcNEiv3KGBRkTadFEW6yjEsDNfAJSX72YFQ6sYgAKz1z5Jooq6",
  "key43": "5kNAFRwPDbcH2nzw8THthn3UsBJkXFgUMC1xVf59NEaub7s6B3LLDFHeBS6g3SiXdLMPpwLS8iUunrT5M7xUJZKQ",
  "key44": "4kT5V7taaKxT33M81fodxyFqWX9zNfWs18coe9cwHLqB2NspSnLd36LM83WoaGoducXWgWt3fkfGAb3aBVtJDubN"
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
