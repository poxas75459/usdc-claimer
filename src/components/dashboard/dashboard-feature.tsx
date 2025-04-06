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
    "zrQzmKmtZ347eGbnFcUHmvpthiP5wiUFCtfRtbSHoseCoDvrUjMHBMrsUqivCtKfk8HBynhVc1VickaAy7hep2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LfxqFi8pYYxyucQteP69UtY1QYfU8uxBZGKT97ZGMXRQU8i9mbUgvVt6zaZ4CME96KL7jLWz1vC8qeXhQNpbsLR",
  "key1": "aiiyDyvwzD3ULyV5TjH7GNPMNau5x8sYfinyi3LW3CQfz4PVD6JMJ1kRiiLou4M4k5HJyHgBk11nDaw4sDbUVys",
  "key2": "5sJLFreFwgJT2tKCpYVdv9yTPC3yLea9PGABYYAvh62fJfAW6TGJUTTvH9EQ9R1Mgo8ivUafHg8rrtzwhqXBu5Au",
  "key3": "ft3kXnyUgbo63FRhjVZedwp8WJtGiYThCtpqMg4dJmc6gmJ4zN5DRqkiPSbD3XCewyfGmCqzX9PzCriyXksPkHu",
  "key4": "3vrohpfz689JKFnG2fFZN7Sx53gWUhU3fXimLFimazU8LMKY3Lmwjjdz5jLRUWM7FkY3QkwRDr4HhaqJGb3pxcaV",
  "key5": "2gPWGFP4BocJKUshV8KRhnX9kEwA4hCcZx7kq7jmQrbWWCP2WLX7X7VydRsJM6f1vs9Fn7c3jMrSKPUDwrCZ6B98",
  "key6": "Z6ywPJTDdKktavpxBo7RqPhGEuQ7LrPu1nVo2tunqhPgKQXqcUquzUYuFsVN6zUgKUSaPA6cZ4eZTPFXMg5qYPR",
  "key7": "4DMP4d111UnBaATtXfdmuGbQeaPV3NiZ7NZNvphbaqL1WUukrCcnhgNHQr671fHgLYs6kB71TTpK5ukcG6jBXwoD",
  "key8": "5Cs5tKNotaSS6NruPeV1ib61nxnr6zp7TPmMuyF33zsgiBE3qtwGTUYuhDosLdUhXEeVs3aSQxezqh7kiFNuS1TN",
  "key9": "JFWHsCcUtTzEDNN7S9SpCEPJZj5AArWyDDqQzhpztabDVhsAxBs1k8LYYM6u9qDvrCWUQmuUP6viHbsXznsQ67b",
  "key10": "5sze6izTEnSmxs2frxCjwqNV16Sp6sAod3mYoEgmkUa4njwudgKE7Dp3WYXB3arp79uioPfye6wYz4zY23GaNye1",
  "key11": "5uPMW6MEuGHqhoEP1WvJariMsUYFjbh4VzVpp313PfXDGUjY89wWntAQRnka7FTQGCyBGnKgWDcjDNSUBWLkEso8",
  "key12": "5jzaaBNC6RBdzCedK4mJ7Hh7JqoeSjtXa9ggUQLxdbey1KAzU4CUES82bAioeuZegMJXnjTAiwdDD5Fzf3Wa5u72",
  "key13": "4x2aAw8fBJvUkYM7RMhhbbxkcDPtyuSx6wK27a4wrHJU17KkDNPAAFfN8BffK5nG8T9h7hgHxKsdjo9z1B3cJsfV",
  "key14": "4t9uTGUhDX5b7cU1jK1C33WjYGBpebQbC6cfArfd3NwzMmtKueA5AMx4gUP7UJkTpJg28hMtdtLsLWW6ATf4CyNW",
  "key15": "2TNJrEfg7vsFuskNeMN9x9mjcSA2sMPRxCnBYz3LiPVFb4tiRWWxAG2C5pvYG1rEafTgXB83uCw9R6FrSYMgNvUt",
  "key16": "2mZ1Y9c4U6T1DvZPiqkY6iN3zfrp9CFJhxMVk5ixFgQ1buUS4TVxGoBNc9x8R7hNdnFMqJ5iAeBYvg8crkFndubN",
  "key17": "4RCcU6pQKVa61AUKii4FZbrB9uJyXGM1bFHaShWkcqARgtzie5SGmdmbQufS57zFA57F4UL9fXnj8JuJJkzR8jBn",
  "key18": "3SqSqA6icLY6VTwpyp6Dft1chJgkDzECrmLovdfMm8bsZmCXCBDKoo9w7iA3zrLyvnLdngvDUKm5KJrDxisRFYge",
  "key19": "3nwndjT6Yomnqb5Y5Z7GcBtMBpdp3bJAwy3Te83xSigwhPjk4VTCnNVkSQcFMj7Pvsp2TLiiJGd71JmBbdggkakX",
  "key20": "28atjh1dhX7adZzbttxhyuGue9gceesgsispgwaTAYtHXrSepQP9zGws6mQmvsbduvuoFvvevBkzUeVAds2GG17e",
  "key21": "mSXgAb5MfuWi4V3aEBv6jeKpmxroiRAFyCnzv43asoEXxoDodRyfyTV3wZCqtbwXDmZ9vcSMgruiSJo88XMAPJJ",
  "key22": "3XYbeGAsmF2J4BTZ4xhedDVRqBt5Doyb3D8uNqP2YXZ7Zyt2tkdRt6kjJNQSW9XPm7vV7jPdbZCkQdCK1zw6cL4K",
  "key23": "MxANxbk4JETa9dpdtFdiEhdXmP3LL7VgLn3HUrnFLKqa9jufqBBcnN3DeA3yYyiaoUTFNYRLkA3ni5NvUCnTEvC",
  "key24": "3RYCwidrvGRuVqgGkVXjbvM5ngtjqRFrYMAjeTX5VRikAVYdKi4b61Z4dUproKuWTGb8zudtsY2NbzA8Tohp3oG2",
  "key25": "5NDAT9STPMrGNeyxaWMKt7teZjoHdtNPqSvXFgnpKBgeges44W327p2SpdQpyhCqhg4EjW612pAEUPsT4zyaq3Gt",
  "key26": "56e7KZz8KJ59FZ6QV74MC96Aree7vCF9bZNuyXS91b5bnUAd7eSNToK9W9NyDYiFRwCoSEXve3AWFgkWo78sucA3",
  "key27": "FFxjmWMsK34wukn7FuFVeZrD6LUbQr3XAMM1WjErXQx7dxhxwb1p9qg2pbpybvUhh6CRFE67N9MTdb7xekNgZZy",
  "key28": "TSceyuHDW27jgt7HvGXc35yA53xN9Tr2iZcyUr1yDzbzpL2pY3BJ9hZdQC48RFiJ2bP3KPBpWxbPJj8rb1n677C",
  "key29": "2ryYRMsCys97w5uSv2nfueH6eWZUwNvgQX1nUsipG5XLmMyc4AAqWAaMgGYLpXqccXT4kkoZydUfrtk9GuKZp2xt",
  "key30": "3LvRWuHyMedfg1fv4ggrFWiWg6LoDGB817eGHhdWrBjJMZziWVGC1TRFy9yrpwJbHKoQQUC55nrhd8rA74kQ7si2",
  "key31": "3CJ2RY195Y4xy3yJM3QaNjXmMADZftkbPdhbRmoZTqia68dHJLPayycrK6bwBxPaiMAjsTwUJfugjzJX5KK2Pkg6",
  "key32": "49Ghn321phFVxfnLFSBtkf9R8coJVtEk75yzCnRWgkAssYpioQf8aTm4w4eUi4MvzFrw2sSyHpxrAzq1CVCBUVmY",
  "key33": "3eLxFFVJQMV67HsAtuxSEdtDdiguP2CY7YUTZuthhHxDvR7X9v8XV5D8XPaFpNbxmbrh8vrH6oEPUjcStHB2oAWg",
  "key34": "3ZhwE71chw5dy1Gu1kiBgcEq95tCc8pkeXZYyGrEuB94tydnBQoQ6FbUTMaJXEoSoyDko6artwk7qC6o8E8DkXiP",
  "key35": "554deyMVzHsM9R8deWYfzLDruuCbmZo3FLtKtyTZyqPomVoXXWvUWkMzRf4aSC3DrsbP4qVNkKoAq4yGLA9N4CV8",
  "key36": "gkxEi2wpZ7a3qDfvNfYYbPgkuq1VANu363mJufweEbwxASM9mJxCeDscWCLMrcZ4mMaDaGFYoDAK1cTKXoHfdVd",
  "key37": "4c8VUqVAMLdRdZU3Vv9gKQXM6BSYF4c7M1d87PsvVtwMXum6gdACpCDaMNB7KE7naczjpjiSs6sXMDQtoSsbCW5b",
  "key38": "3neLLNFNB2uqahKc9czJBcM67h7GXkwHCBasXmsqVivw2dVNugucEQPp47S7zRn68bQg2PR3AbKphrBGufkUguLp",
  "key39": "4uGyxC5YfRTAFFzif6MKdWEcbnt3ZMB5Yqb9ykL2i2sJqDdCf96zHZErk7divb15H2gTD8568QyjakLDY8FBxbTQ",
  "key40": "5xfcJtw8ZvppcHkdgEixYS5ZdsB1gvVn8v4PmosKJW4uBoJkydEFnxAD75GQvAmMJPEQBLUXx4x9ox7QsSpmYwc",
  "key41": "yTgDCd7DE82Ng9onpK9Aix1GCXyEcwjXhY3QXyvu7yXq5zQz76xbyCCp7mpBpvDm7SZu7KuUfvdr3JSBmnQQTd9",
  "key42": "T5dELQggQBWGCPqYKEwJRQHpTCGKYEvHWisCXU7VS2yJGG837WLPuFhLHuL3i8t6XDgfAZVbKjjkMzNh6RngmGQ"
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
