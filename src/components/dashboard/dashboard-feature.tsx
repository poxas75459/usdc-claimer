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
    "5hayPFW2r82x4qPVicmi8zN5egdH8bQerGpVFuMnfiMDoSsUEvTjTm2oMbPFS8xvmkVnG6aXk7xUs8xRDr6Eq5F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvQwhnBHfZyh4wWvKiqRjLyK1DHTRzvMGSYQxfPYE2hjHPcBmWzZKbAankiyafJamzcsQmviU47hdo3CjikqZRq",
  "key1": "3aJoBmp789rL2H3o9hEt5aH4wf4Ws6rY13uCYRT64HQCSHRv18zBTBJaaaLKtF9DV7ZcDjZKTo8NTMnNEzgezPTz",
  "key2": "unF3XXj2zkXaGemqtJDRUZnocGwVuJxGtQiLygk6fABmx67KxhjfxZNFSTsVKt19f4fQGQorx4zredueVPA2bXv",
  "key3": "5twtFAaFUbtEmjdcicpZm7j2FqrnVVKHjj2MAhNMTtAcRjtCPxSiafxLgDyVbaxp221JNmqC3yimmDn5BBTzK9rm",
  "key4": "3smGyYrS8Lbj3QVXW6G95qt5yKYbpcKMW1VgB4xCfSMXUqr3MQygHtTp42HxJHDZ6ygcw1fxkyG47vZNg4iqXivi",
  "key5": "5ShqibdXVeNRDj4AsKnS9CyT1HL7iHSC1BiFpTQkEqQpng2pg9KPJZuqCcU9AjmQXQvywDfWVmPGZB2MKfgtE8nV",
  "key6": "5mp4DnZntyFREDyAXzn2snhjF4qZVqwnCSxw5D2rFGeVeSjRzf2Y4cGCiHobXNuUCGkAQygfT5jYXURJdNokFUWP",
  "key7": "4MnZ2ARykMNdiyAGejkyRoU7aevvY1Xaw9VU4JnS4miTHTr9xmpxrUm3vVVJUxQUtCCnf5x1JDmMLnAf4cfRQqqd",
  "key8": "Sc6hsmpDVsHip7g8CNy6zv34RAJ43kHgnHzNUSuTM2Px8AVhGMgXqMQUdV4pFJwyeUb6eHE5jFoQbtMwcTrRnu1",
  "key9": "4rad8Zb84ZbYMGH6ncn5DzzBAnLTax6cRgKd9WtMjtCrQSqD2dXEzqPTSCdY1SxzxFEaobWEciaWAeBdw6sTjp1P",
  "key10": "2itqWfqX4Nosy8xNGoyMVPPkDc4ku7DfwHoziTV7wmEXNUZ1f9E7pVx4VzJXUf2FDqmCHMrSuhGn5PMUkCR7ZfeW",
  "key11": "AaSVe2u5n8GesqTqroGYGkWU1nF2DR1q1dgLdVYCyHg9KoevBgdTwRdTLuUcP1Lnvjmn7jnFPECTSrYaxriEnNW",
  "key12": "JsgkHYDnYSEnZBZhj3RuQvqYjSiZV5QGDMKBJSnoBkxZvEY1fG3m55fafYTgcAdj8THLr7CbBeNbEUw7Srf87gL",
  "key13": "yvKAiwB3N8pv9MiNy3qHKRkdZxViWMC7DqtK9WUZUitVa1bXe1gbe7KzjEJoGnkN1KUWji8Z1YhcfSeSTr1QL2C",
  "key14": "4X4dPQpFQ76t9GrZWSgKoW6VnTYxx4TwrDjnKJ6AVioqh6XVvDwMsExyVe2xhUmUTHhzjjCt4ZyTB1PNFrEBrp89",
  "key15": "dvBxzF9ow7hn8v7J1EQBbT4LmpF795zMRmjbk36ihEeE6qi5FVmScskZS2FiBr6Q3WoNuawn1ZCm4x7Jw8uKr6Q",
  "key16": "2rm4fCELX5UV7CFCCqNyRShfXcEw4F2Mn6RBx5MEh2pC4V5dozLuR9bLr67zemPFuDuAe3CceGBWTYdhM6YLhYmq",
  "key17": "3MRsZJpHFXFqcigW8hUzJrJZmwvWk31PXSTDd8CvP2EZ2c963wmoMpFBN3qD9bekckbuC82J4nqxB59J8NL7b5dg",
  "key18": "2gSZPDFxx9uAGj7qRaxRnQDETQpD9Twn6um3FKH5KrrDAapUpNod1h2eHSEghFAzD5uc1VWfz12crobBoR7Wyy4N",
  "key19": "4vKojkyDcnhagR5KT8LHkRSSoRpfCQwmTj1fpEfcF8LFHDH8Leh4WLrTKC591EyWEYdW3Bei7vYbBnSRRWmu5oiP",
  "key20": "fGXcQsLdRuvFTMfwpqFQiVuWen8sWDac2pdzCtZZw2SeDRnSxBzyRA7eM8hhzz6pzEyQJkXHmnKZXmtzd2sw6Vs",
  "key21": "66pqiw6cJ6EE6yLUnLvordtD5AkgKDog6vCeXwguHnEMdMM64L58qgHVq4QBUhVcd5sBh6NUfQu1UUqo33QhDraR",
  "key22": "2gYGFdKZH4oMSirRmfj4qa6stNUSrZaSLWPQvCTHMQUuk6xS3MpCcbkzVmm99gdBFYKupVrZeUNDakdhiEjgmU94",
  "key23": "51MXgABUCom3atfZeJ2rM7LPCdzZ6SnKbDdVmVvn3kGBjzBUqD4qXN4s8AazNKQbyMx1VGPEy49GkGau5GWd2fgp",
  "key24": "CwvDwKd1ahbZuvzeFE4198K4jExZbkfTeohMv1DdbeDqocyXLhZBtTuw2KUmvrumvSRw9pAWwonDDWAT7zQY34r",
  "key25": "37Av3hrY1VqouAeX1vomxN4PZNH1WygasBQfeR1H1ytZ4cSviptqvGUW5xsK2GeHvnAASL68fQ6x6UEkBg7pAfQh",
  "key26": "3fHn3EqHm3PxNrJEL8JJpWgrkfYtFNrCLa53CAjNghjYN5kqCox9e63kNAhaduFsDynqzUkc74GiWGqozT2jJycb",
  "key27": "3HMMcq25WDkJiKNhULWsaPfUKZKbqeeXzVF6SERfG4thQPyFy1bAktD7HzAtRoqzfohLZD3xYkNpygns3QZtYwLb",
  "key28": "56JFFv4ZkUTR5QiWZXDxMy9wakiChAp9e32S5ZEyGQ3jdVca8rrcmDAfwy8kmDAxBfSHiokchRggCznLT1ex34DK",
  "key29": "27CsYuiK26vCuNjq2YiBbAV4LayTVtvKUPoeRaf389mmUYYN8Y26GyT8cpdGUNw69CLh25voFHuAhcjHBoGTTPFC",
  "key30": "2Y5fayNRSq5Bd3XdwB7KbVpXxvHRNoDAvQLabVGJwTADwD1XQDH3zsK5K5ZgRfxqSB2BUdzDjFmMqr8LtHjK7pVP",
  "key31": "c57NikCZ2EbL3cxAyoR7GSySHcWGei2QP7xPgxikN9pc8a58JHbESMi9mzvYbZ8WA2a6tFMYWZe6jQ1YBGix8Je",
  "key32": "2Zm8qy5mvk8zJAqDE853RXV8dC5t3HG6fv3grRfBBbnfWCaVXS263xSs9DuaUwcfCpXFgmjhCxWcAAx13NY4qYk1",
  "key33": "5kEuM1TrzLa9iyg22Bdnup1K1a8wzFTbiaDgirffqkjMqbNnhZjjFSbjnnbMiUwBxGV3LUQrxoF6Ws2n1gWq3u7U",
  "key34": "3bYzWRcbnZ2yya8pVnfC3Kpn8S9nBC1L11YGzwbRuifLhAqP3UriqpLr97bPDMHcoHox1C8YmvVy1QDnEGbDtx6t",
  "key35": "Nq35fb4EX5APCdWVrjTGGrhaHbCAX2RpBWqb9F23rCrcLALrbu5BbHWebiHN4nqqKUxvWBgzaRKMfaASKyuG6mJ",
  "key36": "3iudggCmU8LVrFiXKAPMkYGadwprpt3YpNCWXAefHRHu6rxqy1huqSpfeuJzuC3vf8uUsvjXf9J8MjKFVYEaihV6",
  "key37": "bGSDKds4zJMZv4EgXmTEn79CY5eNreSGkfvhWcpYcryc1cmSgyQam9wWsvHZNyGepbnVvTafjTEWS1TykjTzoiL",
  "key38": "3kAiUXEXuxwC2uVNaycA6wfqyhXXQZbwWYHUMbBPc9zgcoK6ToyYTAsyAmYpkmMxNEKeN7jEPmJiLN8DUcuPVe1R"
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
