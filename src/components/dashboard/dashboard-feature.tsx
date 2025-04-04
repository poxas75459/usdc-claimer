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
    "5uGr8j4cgRG897HvR2yXmAnUDghDYPTEYTtjbd1rUgCQnbJAyGUk7BJFFGW5zeChsiPmo5bGaw18sQQt57xLiFWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUX9QprrA3swFAshYa2GVkn5ELSjaodbeUG2ZzPNmgmrNu2CYgh6ZRNSxW2rAvsCv4jnk1GofvCYQ9pyqCNeFyx",
  "key1": "5Q2LpxCMYJ1VEGyjfzxduvr5LX5461nVHwaPD19wzNFV6UPiAMsutqTF2j59Wg2SK93pvK3mYTUQ1kKY419a5zit",
  "key2": "5bCJCdekMdJAcGd83NvNexS1X525gfSZs7GPYTN26v5veQryBBhPrJcLs7roCF3ZPyyLB7v913eJ3AvWJGEymFuJ",
  "key3": "63NXTnN41Ug97ckaPuCXAESDcBtLTt8sbCkw6JiPRyz9o1TQzLnVmqDFeeE712hnx8RZvFRYwkxQjXvfbRnYTwjg",
  "key4": "5oZwXQEKrYD8Qfnx4hvfh7YhyLaaAW9VFwdqTt3iLMwsv7WPRNdFNrTzwo3b2WRmgrLShSaXejtqbPmEq2tn1BZt",
  "key5": "DHk9cRn8qQW5sKN3UFM7k3nULNE9JWaf8teKHxPBGCanZqMLJz8L92WNvbPrHbkQu3QQJb4tHKoJZxKGcJzNSLj",
  "key6": "4TGhxFr2R9bUzPeiPCEoXxfLvTpjtc8cAQ7pRb1pxTzMpcM1B89F1kzrvbFeuvSBTaD4CwSsokvKAPmsEU8DhmnC",
  "key7": "2vgSV5rYqKrskzz9Yenjxi8rRDc46jSC8sCDJhLh1uGAf6iZ7gzPtrshbV9k4BHHT1YucVFsmr7wHb7jE6udzNsx",
  "key8": "2ByBE95Cku3y5UJvR6Nqwp397Gr3fpVDPbBnEPfCvyA3yKuoR1RhTpNyj8MJnJcqzvMNMYnvyUxfnm7quZZFEBW7",
  "key9": "FYUuqfLtTFQsP8r16wLjoUcSt7XroCA3EUQRunShkU5GSG2bG7Xf9UdjASQY2tHy53zXXRh9ppGUrrJdHGfgzh6",
  "key10": "5C5bnZwcuKzcD71WBHr4vN8W4QtxaRLQZscspJsQY9bmrm6a9SKQtyKhD6DdTjc4GoFU8sDLfRTqPFgJfKW3Lzbm",
  "key11": "4LyKxjA5nookDThZFonKhzC4ShoiUt52k1BFR66A4tzVpF8ApZYUCe68vBpugR4SdwYgFn8TXzZc1gTwPKmDtKu",
  "key12": "mo6YRfuyZ79CYQdSfNFFacsmDTsJHNSfB9atQACrXXYn6T338ojQLjmtXvrqWjHnLPrYgVbuSdsUTgv6HrweeqR",
  "key13": "4THCsEEgJsN7wrTKS4dEyqPKJnTWJbo1kZBQvvMu5y2EFamRKSgdCTGSXcbgmWga8bngdZZtM5b5PxTNW6Do3QuW",
  "key14": "4vbJTmVDu2aq1Tm5h7vKc4nuzjeckugfw5cD9ZydTZYnhp4rYA9PRw6ECaULY3pyXziJ5df3AuFaAkMy2YftYqPt",
  "key15": "5yan3Kp48mXBmTr6pFA5pK1rjNfCJADU1kvCnaA6MQhwjuNPvYoFQRfvCp51goLoPyTPuN1dHLDgT8zV7hBofWG8",
  "key16": "2qQEyevGSWG2mNQ4qqJug59m361MvfJvUgKgCxZPmE6Fww4BH7GfuhUC2pJUyzdDQP87CnjjfN5mgRbJsQGQx8Vh",
  "key17": "PQ4zM1yzTqWpb93KAJ8SZHFTp7pmC9nMkaL9JDngKLMzHpbKkK4iZqpK4Nvi1hpcCpa37tkWxwYAgQcdWAVBvLo",
  "key18": "3QizqEQVSnmvccDKR4HXm9ABtFVXNWSD6oUfcUixWASdgn5J5UuwRsgVjbNppJQs4jXDp3fLotrHcMxQC2PqUNQ4",
  "key19": "4oi5zEr9HkVgPKMvpscGj5xGzfFf2nPCSAbp27V9C3DZZ9eBqdsBP9jMrUrZpE1iujrE4gcdyfDsueHCfa5asC9V",
  "key20": "XgX3xaSmHQ1PUVeM931MAYik6scGMgQB39rc21jAhTyECQc4Av6okkcbuDEQRhwGfwRvZKrQseSS3t4Hr4FazNZ",
  "key21": "2XscYG3CpfCX2XdxFb7rhsuu5tmhkxi3crjBYLRwy4ToYdgtsCYZrwqpRb3AQPcvtXzWk89H7qyNmfb2LAFqiYbe",
  "key22": "5Ske333E42NXebaaaV7fy3GAz7ELaQ9EXfUgqweE38g8mgV92C8vWy7rNPBYbBFtbfHRnUWSaLhsnKtDVzwUZJ78",
  "key23": "4NVwrCwBvb33ydeYdwfHicF6my2sU5dbiLQ2PSTUfT3w9GTYpev4dpkHgcHuYBjTQpEent1BZHkAhWPMnW2t1uKu",
  "key24": "3ort369CtY5VdpcjDSL2BuFBynzZdF4ZppF8kuj5R9sWi753oPzSZ5hs4fHUvbxdM1R2mh35EyifMjP66PDep6ew",
  "key25": "3HBaHnJcRxmStVMwh3pajAbnFFzFF4WtgoGA5cjPwveHBGhm56QVHXsJEguiE4FoVtv2mfTcXneg6YUBBB5nKcbh",
  "key26": "5UaETYfDV5ZTx6jRtbbeti4h14sjWaiJjMW2aTMrAVuxqy57bvRaJXNtsuSRrX4iQ9YtNXaoepWmApdwFhu6CCf2",
  "key27": "4WoNARhAV8aRHLjfbpcU13AaN1w8bZttM9JBt2HuebK3tg2C4NN9D4zSJcsCkYtWNYypCxgYuuG8d3LXWvDQ9kNR",
  "key28": "4WnCdpJLx6AjBBC7FUbJCqnC1qpzkrga6aPeYGeizbkUVWp1fCXeT4hTzL4kRX3o3Ggs6ENJgmNjCgn18K8AKqjG",
  "key29": "fifwr5J5cbSTRxTisZQf7cog7mFuFxej59o6u2jerih2tC8uzorHdZWz949NHipc7KCzSLUgiKuy1tET9vdHGNs"
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
