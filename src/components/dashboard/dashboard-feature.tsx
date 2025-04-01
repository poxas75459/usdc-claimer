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
    "D5mrZx6Z12Xbmi6Mv5o4WsRSjtvgTjnZMUVBdRPhSHKLaWB9aKgrUHeanAqwsZqsJm5fX9eUFLZXmfyqo6UKsAW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7eHCcJkVF71GAAEdjJR3sidPw8nDKVHcffvuJJrHNAnnBRB9om2xEzev9vnA6vfNRWUxjELxpZj7y5yPEPvEx2",
  "key1": "2TyoQ2Daqc18CD5nRHrQ7doV6TCQnSShazgTm3kNf8RNSrubYfJ9kL6Udt8faqz5BykMi9wQKhHRuTcVMfrRap2k",
  "key2": "2jS1gsyiD35KnkJUUUn4HLNyB1tcqnWsNSu1QEThDes1hnn89RJd1DAuPQo2p1GT3jN33FEBtY1TjQFLw8QV1ifi",
  "key3": "3gF6APmCtdzgRhgjjDPRSpqMacUjapvu1agCNf7Z55brzmWrbvg67iowyDBcbdkPKYQj6SXsy1fz3ksy3sAo1Q5Y",
  "key4": "2W3wQoDpwFJxXRcuCHQ1hYukTTMXGaRee5pRoscwUs4JBmyqJwR6se6wa57GAWKbT1Ae6mE43SMXZS9MFr4ucdPB",
  "key5": "29gboJ8YfS2EGRbpDF1XHdtspEjnfWFz76qJ6DJNkzk3xoWoJM5qqq9kmSoozFcd4iiFknEsox4W9ibNDoHhz2vS",
  "key6": "3d3Buzb6CKXXx6xMiXw4nMioE953br67zgK1xhXCimGwKCPVHhPFeV6kT1JeEadqQUtSdb3JsDzK6Tc9UBhu4cpR",
  "key7": "4GU63TxxG8mTJ8cCs7XGFPRA3uXpqJGhv7oJcuD8VQV3vmgEaNiMm14Dqzj5Up8P8F9M1di8mGaHz7B1oCP4TpHh",
  "key8": "2LSRv496vAf9Un9kaHnk5xPNK6ArsjYqqjFaKaAn2rFVUVc7YivLFcGdoqaPsPdmM39uYeZcvHUfgbxctZsaMJd2",
  "key9": "2XFrXrf3VthwFSf3nFwjtvyEgzvZu8zDJXSfuc3zk1rBfbSdrJJk66VF4s5q7Man54fEQAxVtu24EyCBGFoorkBr",
  "key10": "3vyyZY5phzqMT3EupGix4Ac2B6FRKkUMcVDDpEfoqQvSkMhwyzSDgCV2G5sYYkGkaGgM33Tip3fJDcKjKqKGoLRG",
  "key11": "3L2EWDeGp3jfWHJzHZ4w6eypBTJ6fq4FQWR9CoBGw6U6kKLWZhyLYfFaCWgrWqkuBLHwKpav3rRHCjGcZbneCbCz",
  "key12": "2sW2kw3B44Q2RovMim6Ex6PmJxgpyrchySkMKBjfDvYPfyNyrcHeU3NL24zQFXjZY6MHyAaQ26opMgMYJBUNAf8c",
  "key13": "5KSE5WoAK8qR1ubK8o2wjLPsPFDUm6PUQbwuk9p17aPGduBLUeomBiES4Nfho6Q16TsFvnL2hb2X4gTDT35ksd9X",
  "key14": "21b2Mwj5eHffgmNVfqmxX1WDtkzKDqRunig8xJCbQHFX5QzpGdAfzSSWfHp2132Yd8NeP9HBv3L3AThpiAEKmLKu",
  "key15": "5BmefVrnzvFGW9wKsZevSYmQ3XhrjXxJ7qbw9gzX699JqfqQcRcshU2X2nEd4EH5AeYeK2NNwd8UZYPrLmoZRV4o",
  "key16": "UvtdzTpWvBq4LjiqydSDZZhMAeqcCWdbgbCU1jz7snLwcxqRE11Rs8H92aiui3Ux8qfazDpRi92ALULo12b4XE2",
  "key17": "EAjQVzJB6mMvzf1tpqU5F7ezMD77aFmxdHCZG4kS9eLWZJhTRD6RbtVcW4Xsc92VSwPqGGuRJwAmgojRbofEw8U",
  "key18": "3ciSDzcpgtHZ9Syv2cfknt59qxiVPP2i2z98Y5ukSoCX7ZtYRR9Kw7DytskLEEdeGScw3eJ4CQBkjc1vU9qL9TxD",
  "key19": "3AcgEEuQ2VcYZ5CLQgRxmju3snxXmcTjqx3c7S2qsz1mkhWsqZeAudHMMnzAiJkp9tkzPkMSMcBQVSU4DB8dngNB",
  "key20": "5F7KGiE1NDDpEgyP1tWMHQvKfjz4PcyBPZxTeyWTiyWyY2812VBvQGooyj3ZA4YtffqvXNbw9z8FHuH13pFFQpJX",
  "key21": "241gcHAraJhDmC2DLXPfgj7349De6y6xWB3Gn985kt92dfmQGBRKrcQS6ogXCELmCDoJu8DxQ5gZDgtD8s6QrKVm",
  "key22": "2pEcCkBW7sokxWA9BuEXGyUwBrD2EuBGMWnxvnwMMYabeQk3BQGrnQKE4UtfoewY9Rqp5EooYrb7e1wzY93rLSd6",
  "key23": "4tZ61fJWKU7snPBbiGLTz6fPTtMnsHLJqAC4Qf2xQvZB5HkR5twT2dqzxMpXLpnH3D4xEbeLRn2juwf3SyZ5fize",
  "key24": "2pkaFwXUoPBRnwzWbPJRihY8gJJ3uSiDQq3eaLBF8MNQEC3j24NpSaUtabVkwrYpSbitGDujAheMHnPSTSWDescE",
  "key25": "tkT3TWwcVMEhkKa4xomdCbacxkGQahSdf8aYAZ2DCtgB2tqct4z3H8T6jSrpvhCkkzdbJ31jVYChK396zq2D5YS",
  "key26": "55ncwbDHxaaZoF5Fd1kjrCrn3SrBje3CxtUr8uCFy21DzXg3mnokpQKAVK6zk1JvPUTW4VhNhPKgPK76ZGFp8ZYp",
  "key27": "3F13FJ7ZM5jv2uHQu4ATWF3Mr9Yg6LdxKRLec8GGEss7xpzbjFFbGJtGDdN8WTQoE8vQHd58qK6BRJ1qKZvnbZmA",
  "key28": "4Z9Q7HaYB3WpNqhd5vayWDPNgqP1dsQ6KyBVFJzmuCeVWGY6SYgLq8eaDoPuwL9VPzgHba1Y4V9F5qSmj7xSMAcR",
  "key29": "4v1Wi7iKYNRJGAwcPTNmvpnL4HMKdtTNxgiSwSAUpDGTUnjWZTKisCvvXTu6G94YQWRiQaPY6sEZZxvJ5NQQwJ6Y",
  "key30": "4pvBaeh1aTe2jQ2vLbgK9h79PDjH7NXvRjQ5rj6mLzR5xs61yLV6CMCyRU4EjnmtQ1z87wuMTY9zBmWXLvcLChTQ",
  "key31": "3oxdEnrmFSvXoX9T7UCJCYt53xZSZEK6WRXG6yCwedzdqLRQXgtHXZ6zNUdgGGQ3WWQVLqSpVF127fNwrovihhwq",
  "key32": "w2ckoyUfSw3XeUNpPKtejsJShoSNYfwuqM73R1wLG73FBwJn8jHinb75EJ7bZaVrTnLsFGab9yU6Qme5mrBFKFc",
  "key33": "5gd6xQUw8NaT9N58rfhxSbpTVUMphB8gsaAt3PM6JNrbw6MAZRwLqgxsEehzbxhkCg96Lza7WqZFZoY2ai7V61k6",
  "key34": "gUNXHgXejMyWvt7CUgG9GW8Z8GSxroBWJkPnR8ixCfQD7RBKQ5JXfN8JVB2ymahD2Bd4wzRsJqxUYjY4xUB9sMM",
  "key35": "3AaoEmMpeLLZnxyKAJFR9gKCx2HefhtSbdBtMfpmMwxZcAWZsbDrWAP6jmZ4VY54e8pDrSwdKyUckVGJkxoKAuZj",
  "key36": "36yELFw83TMwD9uZ7CeZZcAHngZPeLAchD6tH7TRATpSM2wDy3kwBbDM1e1L6wsDbw5X123QugfjjBSTHRCA2rtS",
  "key37": "2Z1NZ1wG6H8HX4LRn4GtjcUsYV657qBozaFVqjW4cyZ952PYAVaSMhrzYnFHkYpKLGMa8Ti3Vve6nCmTSkemQr3o"
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
