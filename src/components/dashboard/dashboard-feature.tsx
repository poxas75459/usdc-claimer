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
    "3EwqYsEUFKDiH1s2C93c5WB23b693xxYMmbHy1hhcNQSTqiiPKjL3WsjGD8Uy6iYxPWUjUC8vSGfYVy9JchiP3oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZVTj5cRkmorrEy4LpM5oHNc3KQZHyyMzp61oiXKVsd7brUs26oHT2Lur3hdbpPBspHPBXYACxdoxcsbKVw1vKG",
  "key1": "3aK73t9iYvymhujg4MRApay7NsuzsBsVcRNQUEF4uAb1TXsFGnmCKZuqaBNqj7QchRFdvCwWhDJhqFoPDFEHa9Qu",
  "key2": "32k8bv1ALLyejVgmpseEA4FbEdPou7kqTWDG6CNRcdMjRBAo2BqVLWSgQAGB4R96BMGMxKuV8GPC6KHg89bMbvqC",
  "key3": "v1dsjAHKBbRGagPDttQb8ASbq2mAWwq3GCyXXV9gYkQjsUpbG5LMtefLrywgA25RThM5QYvjPa5dxWDKHUgZc8Q",
  "key4": "4n36SEgzzsoisRS1JvBePZoqu5zGcCS4mW2PxDWYUMBr3DdVEKCyhToU8RFPkQnRpKYNu81iJY8PRx7rB5W7vdxC",
  "key5": "4udcPnFTWsr8AnvqpAALxhNe1t5ytq3gD77K3soBuzVndHSxndFu8vqYPnppL1f6xVVxYMmCHb8jtwcFmZ3LVc26",
  "key6": "5QepFh6ircWiw9DkaWtQi4Mq9xtyAVMohph5VZsbH4xvs26RUs29DTJ4UvpBu4ztL9HUP7HUFNfdSGq94gPnKVDN",
  "key7": "5Mxk4KVKfdB4SZ18sC5VWWFWwN6JihmZBCzJ3FKBaDjWhy7XBAyZXxwzAdEnJt8DgimnWEyHVzv7iUr2MAgHAPJo",
  "key8": "2nZAaGtgynUHX6P2GdzxnXt7rT9uSwHLU9ETNBWVaiuJKaMeFyZ7CjR2PwGKbqCJQuDQvBPMb9nWpx9jKzdWxoRS",
  "key9": "2YiewU8wGrsJB33Eqo8GUpgmo8T5VjRuyXCjvhCe8SxNPTZSuqtAnn8prZR4pwey92rmMVDQLcCxMon8u4rmrnQE",
  "key10": "2MiFYj94rQVFJYxaQgD822e6LuqwKDupVxZwFZdCLMDXzc6RoRopVcti3ub9UYQyLdRAC348gKQXiE5Ggi9FEh9V",
  "key11": "m4e9SFC1CnDzWc9b3DtyobHXhTtwvqMthTs6KydMX8dVGmo4u4tG1SNVZaQ9sKewMqd6NRLFAc4Zu7vHUCpkB4R",
  "key12": "3x7drzGKLQJq93FwB9uahgLriXyTZ5sJmrfnHBt1iiNNFb6LFn5y1Ggs712UzGtZSnNPj2q5nYoWnzBhheLKLEKv",
  "key13": "28ASfXLaVTXAKyLwykMQthutyk8KfoniiAy6Q7iGpWQ5bZLmegmE5wLSk5U2eAxVJgSR3naUAdnb5Z9zCXXWnRk1",
  "key14": "37hX2amH9NvYXoUjhRfA5rM66XnBHNhiz56vv33HtwxAm2yfCoaJGoH7jSf3atNbvnoXQH5QCW7vxFCVCw9oM17k",
  "key15": "2sCwr48UE6jTsMnbttP1iXfQdhjokAwoPVSJW9qh4NJCiHGkrFG66KH2VS7HBvTRiYc9onQyigJkzvr3itobzAFg",
  "key16": "61SyXQyiaj1bKXNVGJcXwX2WEZYgnKFgE35fvzB3EpUVLvuEb1Ta6QJQrY2eWtwJm9gpThMgZZSkcUDNYpiB3afe",
  "key17": "3LxVaAtJhFTj4Uk84EYoR2RGMBjSCsYQrssWLHAJcjqECR3KEfzaciYhsDAnKEAPFqLEvNMK5qRhtD1iM6sPa7jy",
  "key18": "5DTHfauLZLGhTYKMXUrQMhwM3ScVFrwXAyLCf1zamZAPR1u9RQeghBKaqmefiqRj2W6WcF4pFwR3d7YEpksfRnHi",
  "key19": "cEnKY8DmEUY1miiDYSQ2Ck3Rn1bTvN5aHsCJHP8ETkGpXu2JmWwv6krXVDZYCmMvdR8wgL7F1VEbqviKHM65iga",
  "key20": "5bQa1tAbEHDtpnR66sYfjr8a9HFSFuMQVf1yYs3NLXbA1UMW1cxPtWwhTeqmjK6HoasUs6qmUCfFsbxw9RG9bTcz",
  "key21": "5H2Haf9Wm5rtjuzPnp81zwJkVn9UWrqNUZH2mTyBg657dCoxUAShSqdS1yAU2yJyQn5yn2xRDL51vdhoGewSxFdj",
  "key22": "5ZQ81AfsNhHMNkrsXz12NqXXKpzUACeUbTUwtaYj9jFh4LFAADsERnWh9hG2ztx3E8HdGDBXjQxYpmtvtNSDFgh2",
  "key23": "4GDehgUV2TM7T4rKDumaFfUVs6wZDGqGbiH4TLzgpZ7SbDsjcZMt3g1jh53gMw9JVips7g5L9ts7WvSpiyad3Jws",
  "key24": "5fLTXMmSjdNfuX23aDpMzbqPbRvG9s1U7eMUBDTsk6GwSRzdJZaeutxfcPgPLweiCA47qDcLh8FuAqEoyB2kqS2P",
  "key25": "jm5ekUfm9JGac2DKHxsv9bevNHpnuobdE3SSbkh7L8iQYpsXJk5wiGiTw9FLdn2WKV15bQTz1FLNczpJ19HDzcL",
  "key26": "j9aAAgQqpRh4KH6Pephxa5cr4UQ9iWURCjmSjpBSmBU1k8onUC6qzqBZvx4rEXgL71TwDRrep6TPACNSUEDUrYC",
  "key27": "5CySeaFTjaJ7siv68WqBjG3UfqMCQrYMVxdX7iDYr1TWRHVU9K5gSuHfk3wzLSwqQ1gDKzKVHmmbWijnqKaZVUC1",
  "key28": "2peXCU2aodBirA5zjKaZ7G99ynK1MwPtLfbWFpfpY4eKB3NMY4MDWeBNFw1CEsU39sUZXLJV7go5J9zaL1mKXQjy",
  "key29": "2BTBGtPNt633qTSjT9hiaLC1c1UqgheXRUKTLEV5KVRurKLajPyDjHLq23ZZJvNQMy9JDMpL7J2Y3ZmMjDKztW2f",
  "key30": "2UeBvdxqqe2Rs7VaKfQN92KNnry89ozBrzQEk7dyg22vT84CdiiUbHMtJU9Z9XvZizCXGg3drwrbkENUu87L3eKE",
  "key31": "5neoYjnqEMXUAuFJfUKB5ai1sVKTscoQ1sLTGRTcjAebDAeeZsCdrRzZZuJwYFh2f6EtxCNvPy8Dn37ZVsfCUiU8",
  "key32": "kMaa7BvTRCrwWMbNKVSbpArgBCMUjfwoKmCQZxHYEBjKN27UMk6TiyqoAKyRzjns41S391ibBRgC5WbCbjhSX4A",
  "key33": "4bdkGbPHfyjtM7DLdCyd9f7q81wJL2AjvDytrKBEep653gvmUPD1iLQR7sZn6UB1nLGBBYVKrYoTLbrc7ASabmLY",
  "key34": "4qEMMRnc6ahSaqECAmba4QNArcyegT1xWQcedAGJm3WYznPzchozqWHnwS7EYmER3qDseSGFMTuzCKrNH3WSAgEt",
  "key35": "3a8bkzEve6d72h2JxeTBJxSkKssK9rx7oG6NEhmrxpFPNggXQPSjW7s4dQKMjRFN5XJKTLpfcfGu4ub23iDCYqPu",
  "key36": "v3ARQLw6ou9uNDhWevdvQddAyGodrEm1V6HwQQRTLqmvGysTAs1cxEtxkdDvLJ3SudqYedbc6zpAaPACroCvJbK",
  "key37": "8RgyKh2Mbx8L7uCVmYXN5Ff27pzjVEKk3BYgTaRLjhpA6myeh3rzvYRvJBZBbx5hGWkxD5byQV1Pb6gyUDDaLFE"
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
