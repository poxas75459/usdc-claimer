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
    "2EQwtdfdXi9D4PXwqBActYMxanVu8tXQuZWq68otzeYQbyoohXw2gJBCAkwkv1qMfBEHCWdfX5Hy2e26yD3HsaLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmBvpHNGusVRhtUvV9xB37rVyavPLNdPaNXG9WWBZ5YWqwVyqwrYE6f1wyzscQDuyxvdGttiuScBL3eHNP5Usvg",
  "key1": "2F7TyKSj2GEeiHijFNvFYhs7Mj8gePcsH8zeyg1PMWBoQp1obwTA1Bk96TGtb1g41fpWTtgi6fxjVkJxoQ1GiZtX",
  "key2": "3rJaxNN1dZ1DUrHTxM4Sf8D6ktYAmAoYnzqkJeEoqwnZavkmHhvLDK9TE737Lbj1fBQxJRBqw9PCpsWw5zX6H1a5",
  "key3": "3GFKwe8CpCiQUn53C5aMftnt3YLPBHeSXZsaCLpuX9aBHYwbhVRx5sfMimZPcfXSt8hRY9QURKKWbAfynnbjExwS",
  "key4": "368tPf1uLacx3iwoL2fatV9nbJffoFXnwu7JVVKS2uVq6YrfrCn7ncaGeYwYr9tPAV1dYJxBunkVwJiQV69ByaVs",
  "key5": "4F5x2X8ChbguiJ8aV7w88D2bsDcZd6Z5QcCZ5JiSJNWUN8KqHJqnb3opinH18w2rYLeKLTfAqfWLY6jqvugUeQfJ",
  "key6": "3AK36uWgrL9ZvmasK4agJwmnNQoXQJKB9bYmxUEr9BRuYvxsXY8pyt79KRC8t7VMmyvM8sADyqHRPBEDW7CdjqkE",
  "key7": "54SFGCirJ1S4dbRXXhecVG6F6VWA2X5ugNxQAzVscAEaEQsqzXs31RouuodEhrWkqb3JmagxrC6MaLnS2Zp5qAc8",
  "key8": "4ZcRLRs8MjYzngHd1Vrk6EwUfAHFqhT5amaKG5hNq9JjAofcysX7v8W1f5Bt2pBTHgKko875W16mTCYH4S7uR7HR",
  "key9": "5XQz6SinPYN24z7VqrHs3Xq6FZLLh431fyfJvGAViywwMHYushdoTrGHUuzQDp4fo6VyVwCVULoKLHvhuG5qP1Ax",
  "key10": "3bDvE3J97cLpJxw8AN9J49fR6wxx1ysgduZD1KEDJ7Q61jPhYhNVv2mJua22hhe7579CmVgkPDXXT4kWGE98NzyV",
  "key11": "4NyeDvfzLxhV5awRM443Rti7ZwFiqN1ZehLbG13WuDBufqTmuihw1U5pc9xqsS8thKxELTmgG8FY6acTmPdy8sAp",
  "key12": "3zjDeAqoPSbmywgJevCJsPRXhC3aTR8S2jQ9em85rMANpgyDvNr59hAZ395enic3riA8THgqgob6nmYWhciYsoYN",
  "key13": "5rY7A2qbSc1PhMHk2W9WWsPqVYqCHE4vziQscvg3xByVUzXHDTXrqw8nGB535WBnS2qhBgp1RixejwguHzA6vUUe",
  "key14": "4fs7vST9kuZihtBV7RTnfG7vFKPfuqp6USPqBq8AwwiCPNqTpaL152WkUrdNoNuWywRhjTa3KUZfNCxnoJ25ZE2s",
  "key15": "3vNpSWTdf9U1s8tb9A8jQKmWfTksFMNHdEFTcW5AknBjgdBVG7ALpGJLh7DMLZmwUwKjsoRP5WVVWHmeFKveZnWt",
  "key16": "atHBbdu39F3LCbYHzAEqdpbcy45p47AFVDvd6k23J7mSp3j3pyvcciHpzUixvEJUHGijU3xKBqqNvH3caxPfhic",
  "key17": "51Ch6WJuRSxN6gmffFd7h7DBaWBpCufHj2jKubhyApctuEXWofEiBpQa7YP1W669UVZEuUBgvZSszf2ic1cMWd4v",
  "key18": "4wDPvEYa4AVvgqGBmYt5iN6TjUWzmRy7igF4EAM1vie7fGh4LE1XHoQ5Q6dQc7XH9D5REZcpXLvRLAjA7kXAGW2q",
  "key19": "5ERTvVad6WhNb295LBeXke2AdXgoxEwvQcYGKSqVhpBUm8fG1XoqXHJJFhHeyoy9Sy9LnzFt2T2ZkL1DDRUVWQhB",
  "key20": "5iJvay7zDmaWujqQE1ENTQAk8ji5H1pkkuSkJbsCYKi9TpzosGBqoMS45WSiuXNh1iKNjVFZuPMV6WhQ85M3dLje",
  "key21": "2sxF32zT7N3YEHvka4XHa3wwAy6Uz7qWjuMG2jfGPftZS8KBkEJGyjxh231bRNSNobWmsU47hvhiRDStZ21UUwVY",
  "key22": "517CUhXhQGe4w7Tk4ntk79Tw6mjBu38Di2ZFqy7ugxUNJ6sr9A9f8bT5qgBN2YXjRndyxC4udWopo3vPhoJAwccu",
  "key23": "4QpM1dfkfSZvL2FzNh2JxR7w1bajyT7KTdwJFDHC2Afw6tJy1vuVbvchM13yXfJi9mPgpmQLLF6ZA1Q2LRcQehvw",
  "key24": "3vnyH95jY8SiHPsMYJnqbzk4vQvPCMeRcm8FGFrBRiRvSn2M28i8R3DK2zwfj9Hmjb5TFiFpt7e9DXEnB7BjQPDX",
  "key25": "353iPsZwGoCUVkWtmwfovmt4cE3dE7HMVZRZhEHMMCvDNob7txUoaLgmaMwpC2813qu7ySwxDWg6ZF8J3SdPHV56",
  "key26": "tho9NdH8fTs37gBC7WQ1SFdTdrKwprHmdixaDZe8MXTs74PkoHyDzgJLEN8sdn2bXxvrYh4bZ1oJ8WKLJNsC6L8",
  "key27": "3ybr9vZftuPXhoFo5yY9Hp2kNqiuasohQsYszWAVW2pDVH7yGSJJYiWq6aYCJVgJuLVWoinz2wb3Lt1Xgr9dhG44",
  "key28": "3xELcfb7tskzT9TA2TzDUPpSZiRqUvMThmMoBRYTcjmMDr6MeSBCtBBoEquGGNu4TdwNmdTT82TsbqYEsn8CbVEN",
  "key29": "672Naiz2d15AjL2UhNzK1eB4cukzFqv49r6kZrQsebfpWPg3UuYTb6cL8z4dEUdcKrkg4XSfxVPWGjgZUYY4H3YD",
  "key30": "5nBrkeEZhfK9hnGMJV2s9XV3ScqGeoFojzhme1biLP2RoAkowXrHeHeWeVjf8GsuUqmVJm1UcvR6Bh1hwPxnRGzw",
  "key31": "xcTUAMqVuw2hmnL2HjXo2jypitn99EFz2F5wi5vppveCSj6wCuVQUruZHVQKwxWHyHwzgLfX6JYG8uhvKuhDLsA",
  "key32": "4wYRQ2F3mZDh9tW1PtLjVaxKyiZSdGyHkJazxxemAabGxygFuUFQ9C7Gq1vNn3zKqkHUuUh3HdKtJ2entsnNmDpr",
  "key33": "3UvCGJKCr4Qr7TxvnXN3aXawbNigXJ4HmjTBPVfJ6vXiFMJ8Pu6aqrHoHegp5KghfhREAw65WyTYJUnMSzTzsJUF",
  "key34": "4HrVFJNivJFLy1VvGBhA5FWVvMTvT5j3pF4CW4roLPhUoHcUeRYLtveYeafFYKYaqE67615Kr5NXdqFh8EqNgGhr",
  "key35": "4rqVgEW1Z6hfEEu1Lmtcsncbexmq8TMtS4w4NvgBm1eWZBh61geYHmPQSDgvUSPwbSzgsHjxvpS6mFFEPePc5prN",
  "key36": "5cZezPwDGftnEEfCiHF7jWeZ5BL8vgjKtAx4WtMshbpeKS2sCym825nPc7j6XbvdWturDdmewHUkf4vh4UXmbhUY",
  "key37": "4RFR2XeHcHjsaccQsxu8ATqPnt2LBVEd83MjPjrKKF6fdTbmwk7qTpDu7xEVdNwcHxrS31rxbYqGsViPfoZU7MD6",
  "key38": "gxoE9gGnBMdqgSoiUJv2xshMYRENnkZnokmkCUn227dwqi8S5qqxUcpT5pzEBBLXo7gnsLiuKtVEr2UYJTJgRDx",
  "key39": "368brDfxyKmKAEQ4Hgk7rShQmp7Cha2s3K5MX7qUcJx3MSwzcYDuSBdG78PxsRiXfnGDpaJ1pivHTFBVwkueetiz",
  "key40": "SAngBDZKth8npBSZZg5YW6jtvfK8mBT7Ssxxyjq9FmJ8WSMwTFoYprM18DY4uTWdoD3jMNiPeunkxWZtm4tYHih",
  "key41": "49CZcpupxnqzAEYaMz5vE9GRLE6CHDKzZChqjbzbasjdvJZZCsVHPzF6bSwSmwXejHUxhGdfEeaf25vbD4txGQBz",
  "key42": "K28wcf7FbveNtkdnQhL8dr6jnz2tMDX4sTvVy5hjKZ25RGVvJ4tN1u9qoitop3RtTXvQd4uyoh5UzQ3ML2zARMZ",
  "key43": "26ztdq3x6DwsqByyyWcmicL3F8oMf2buyTdSRzZKMUEfQSw3nj4bgDMufFxyqqS7DYMSbR2oRtWW15HikSxB7WSS",
  "key44": "33BnZ6WPbJzjAYgj2rEjt6J1Hzzo5JqXpMKKFT2f6bUfMDsh52sJnEn3ESFcQUWzoKQhW1DParwuvRrw6k3w2TZF",
  "key45": "4HoJhjuCijf7zWFAYMQZb5LfcGsDhSRokU5dtBBaU6xEyZW8yjLWioBWu75MgBAubW5eYCzy7hNHFaWvSinjQbvt",
  "key46": "5coXjHnh3XhMTMnJo3iXeL4WgLTkwaB3SpYtsYQUXbuLZDHCJriW4rioke2z2ezLrgc4Aywa8hx4Nh57owGPLYcE",
  "key47": "5AEgZjLuPehd3itiZRBrRWMQhtMpK2192WBHGKW7qn5pu1qTt4YWF6UpwLViZT89QxBHsgExi6o26bctao3komFH",
  "key48": "3JTKatDEeo7k9ZnAhFq7m5eD1TXrsh4BJ4mWpyYjD9SYuxwpGCH6R23yuG4TfwmHGfw7mFWPH546cbLUD7wfAVex"
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
