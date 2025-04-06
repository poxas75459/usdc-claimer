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
    "3oGEmxsLiz15LR6H4sabeCMAuTwFRrBkHEZXqxyyuuo45LqABeA3UnkqTeeoo2j6SPW2V8gxc4DwYqwTfzouVBQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pNRxpFDfk9G7J7Gb3WoouTsfKzLQJn8JQ9bLhBv7mcW5Woxv7WvU8pegTT2zDXYMxsd1LWRnzLrFmeJL1iXcEMV",
  "key1": "rVqZsjF9n2U8vACZucMHxjy6fxnUHmUTHUczKe5SxKJRmK9EMbUz2gTKvmjNoeG1eFpNVjPzrvgs5r9VQzhRM5W",
  "key2": "3nb1u7Uza8cpiBJ3bdkWV54W7JU1uWT2ziEgTsbU9hLrdM7ZnXaqqedwFhSTtb7qZPJfxuwtMW2vuG1Hmao2dWsS",
  "key3": "3HaYzEKyjX27knB8CHHwvddmFpUeZ651QSCDojbQi6kJa9ZPVKvJ2o5DJN1BhwAt1wX3gG99BqbLPAEZs1MSX3v8",
  "key4": "3N26vRxhw9Zh1ytuLZZiFDyK1SxJPP4NB1HgzaJ7W8iT7F6NHBqgSPxD8hSKAbmpZv3bkCq9GLURXnj8YSKqf2uM",
  "key5": "4JrwN2VeCEXwWyrSMeuhx2wQqoNpAVR65YqkeJSnpV7F4Nh6ytGFwwQGiKhUYAY2N2KiEP7hUPstCx1qASP4afLe",
  "key6": "3wT4nZffG3hgopf8J9MPQjA9ntJtV3R3P2KSdpG5eNSrLLvxcCtXBLRxgysdogVT5DBFaeWQrXzN8Hr7LGUsi1nN",
  "key7": "45Q1qzT3ct6xrJ7PRzqDcAYVhG1XYg6oQa5ktj23Ka5Mx7HE15KQ45ENJtYky3KctLdR841cWWRizN3PoThUoBQe",
  "key8": "2yCjc6JxXw1JYThKk5fSWhL6qE9w9U3QE4STGLrX3dXougfr7uzkMoZWze6rBhn9qdY65gQXUhpQf1vBdgUaCL2y",
  "key9": "Y23RViPSUAt81CJgCfWtBrQp6Md5BHjntByzX81njCkKxDQCZF8HRGSZvYvHgHLvUcBWhf4WuAYJvpn68hrMGAa",
  "key10": "31wGiKT7fTMDvmYdC4wFDBkwuwBU61DmicRJzSNMbp7sW2Ypi4QKUqexgXbnfpfwQo8hvCrRpzEZAWcbvh63kZcS",
  "key11": "2Wd7BBP9tqSa4mcDkT1AALp3soH79z67pfeWeMFXcvLkch3JLrjgHVSZVf99uqp8EFTCpMHbKqeefTR1p9NzRWQ4",
  "key12": "4MdWFsjHfdFUL5eCZzTqfc1R1wYbstchWTrCjoA26yzREUH5hW1C1kdweqWPGGDXCdzphahH6MwQ9MDMV3GANfxR",
  "key13": "3TZehCgx6bsrKcDJE2z7uWBLXNtw3LQ4BUn5AvdMFKYw69w9LK221BCiqguBqqV2w3DRCFmq5Fo9PBoPJvGG9wUe",
  "key14": "3swDLQrRY162nrWXWW4amq8yPdLFkSNXnQd6Cu5zxQAzhmTkHqZXgE4RFsjNGa2ZEYWXWCGehMcbVgK7xc2HM3WP",
  "key15": "64tS8K1UTx91sDFDLnEJGdAByZ9e7qDCMcWkXpPdb5GfoD53JCnJwKu8P9VJG4ARHLb6aDPxSxXmQTKFiJFnSFir",
  "key16": "4RaYUF6rxSascvhfy9MoEjuqMb81frSrpZ6kjyNJo3rjociJaJLyc6iJXHDrfSWhymumDayGpM5kXgdcCWJzKe6e",
  "key17": "5T1dREdCsTdXPYo9RzLYzV8zL6Ktkht95pnENdAusM12BrVZ9GLgvDQrTRqihMSrz9a1jUoZqZfAovpn3TLthNXh",
  "key18": "3qH2VvMf54amPRBfeFbisiMC7iH3HwuaCLicWwPzRHHARcaYf4xJrugHFzTZU3re3EJhFyPqej1qDKCUDgesuJXy",
  "key19": "3YPYXZh4dneRG6eaytGxJHDqhaGZQsHfJYCSbTqB4VicfpsJc6ZZPaJWoeSuzS1njLEJzvwD7KHz1YJKm91A7iBy",
  "key20": "2BGoUNLKH1fwabLARDTJ5ixxaRpQ536XJ9aUHgNdGNkmwsAKSYu1SVgmt56cCs7SqXTrCijNPLfMYR4Pkv2MRgHN",
  "key21": "5KaKk4BJyQAfxRfSkehX7CwWTcwahVUoHorPX8HPHQpg2PcEaBWwYMiH6jGeVMzTRgBUgDZi9wcvgncV93ccpzjE",
  "key22": "TFX6n4JXcxZW3jJ9uhfVvHZciUH819tFbW762dFD3SG9sAFgDLxYdBBRTNfVDkbmQXx9FzaUJxsYx85Xagp9GQP",
  "key23": "2BdsvzFvuUHd6xaZqR65fvVpmE3VjmRMqebyTfieKH2JKoZU5JNiC9CXHRgwJvFNT6q1NzqMeqTzUR1L99mL4ktT",
  "key24": "kM72Sw2rZ6nFzKfP2dsXa8sMkuoLxriWfxLbL8t3AvJsXQUxExQ67U1cbnXv4X1YhcexpMoTYBsaVeeo3jzZ58U",
  "key25": "5rfrjhYVCNQFouyqhxWzdXyYtS5U2k5c5rB7vo7CsTpvnz7p2HMQkh1U9yvgiZi4K7WFvYfuHGZr23n22zr8mAWc",
  "key26": "36UHDUcTkSpWtrEwHWX77bjd2RxbaacrmaA3xxL4hLgcPL11M37WVbe3KtH3veyxqFVivHRNSuJHvBFxrqw325dw",
  "key27": "5vP9BNcZArxCWABw3TXhRxnz4CFhj8LD9YDPMvhZrcr4VHT6ZYviV3w9ZPNruNCW4y4oMxFSaBWEbebKC4kzESjf",
  "key28": "5Zobj51uivGGK79JZRQruGCDnhR7zkNoKV4u6974eFdqAWSncEBfcGCytH427D8EYfWdv1c2DmdiGjhR7KFbboYi",
  "key29": "54gBdWy2FLUkyLrG8utoD43JdFqBbfgypAFmaqDmbM5k7yNiqKqG9dsJarG6PYGHopgt6AdWBksDwrxq563p4yZK",
  "key30": "4VZHEf5XDuJk1EgSRvjHEVz7JcDKdP8HvP9fbk3g17MHnGbAhaRQn7iVUrjvgy5YMDEeUcMD2HmqgVaZnuiiCwe7",
  "key31": "4Vo1Zqq2k6awpNH2z27pqsSjkeZxfSChXxFGrGs1c7VAmW1be7ie61nQivRcUtAGXEH7Ho8KQtHpMNqwcqAXpq1b",
  "key32": "5e38k39gP1qi4qErpfTESCBKU1UdTp5NoNP1MAfPUDUgpXyRwLo9qssTPtEVbqthXoAoHNJJfJ4NV9BwLk3zK7zs",
  "key33": "4TP1aqqa3Lgp3QGW3aUTEihJLS9TAqdwQ3LRU7AJyXG6hsjk6tGZQKi35cLRFxYQq7Zkbv8VMEyZLAdnVSUfFvcX",
  "key34": "4wVDr7JK5kLxq2Xg7CwZLn1EUrSta4XGXjwyjkxWqtvYjozN3T9moTjWg3ZyVftH7B9qmA5QAuaoza1WutVDBm9e",
  "key35": "2agsfVnPoFKV2XwX1ZKqc6fRwuKNyrmmchttt43fJ7Sg6QwmhU71WpFz2bfrCbSeM75KBpaiHvPrhaoqQUmBunhJ",
  "key36": "rpALZyPsqE1z3KQn4Qbn6eD1VTWYaJn4woXCXnnKuTpJkFiPEhyGvXG2MZcUHRMqrCUhpBKKmpnvCPvtuHojayo",
  "key37": "DfBFVqqAxJZeAzBnX9cDDstXV7ATkPCJczAR6ags8RsmW6L9iKFq2xGccRvrnrb4bhuFomeSL6xr4HJCMFvhX6X",
  "key38": "2wVcDMP6wbnC4sDuTHb9c2xQjUrkXPX7ghxL8FmRJzDT9RQDqpX7MFrEa6oqiVqMbAbk8TNXBSCpnXjakU2szvK6",
  "key39": "5kCCTB2k3dboREMDoXUThbBw5RJQQ6dXbySAyM6AHDRn6LCyJeZCSHHdhzDauiybyJZy1HDxtwZW3Ju8LMU2oL2Z",
  "key40": "5F2tCgyVCMdBhzkyex8MkFsgdjxMGrFQ71wRzoyU2Q8C5gR6xykvVe2tCLJtRPKPqdCtzXs3tE6auLqNdGPJMCur",
  "key41": "418xhDmKtjNUoDXXzKXuPU6H1yXenxc2Ex35gwYYiYmXjwoP9aB5ary7AfwoSMY7o68MtwcotEzmhcNZkgPtUZ68",
  "key42": "34gy3Xq4f7tWvnYMJWXeciSYAEgpgvAXPWRRG33P6k6XhR6yNiFtGiWP8SKnxAtfDbPevazG8sed8SVDkxba5bsj",
  "key43": "5RdgXKcSE3XrZe3FrL1hp4qVzTVKWWW2agHfbJKs3kP6xXtAnmt6WirMVUqbNCWZWiWkLoSqzzEXeKUbxeBMwNdk",
  "key44": "58XfEwisQASsGnv5tR7pFYrBmRqG7XqEZh6VMpomMdg71dzjymZGD7zTVnBfi92FDk6raxks5m4tCUGXDN4MwtHT"
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
