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
    "o1RBahWtBUUSLdLcB1HaFiSjHhBuHdmvoid1bdvg3U2L5jvkPdsjZLaawL5oAT8CMbv9Y9QHDJFRktjqQNNZq4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RX59b8UAvJdG7kwVefx6Rkum6vm1pSsWanYkweBCJ6MgSx9CMZbEy7Jv4FD4x141QJ867jisc9QP4d85AXW3uPw",
  "key1": "3dmE7uLoo62AyXMWrqqCQP2FvayM9CR6PAVvCF8CBzWQc9BBjh9EvdsEad9LFQd1RasHd21Mj8pvK1UiymwK923e",
  "key2": "4YDAjXr6BKPX4DEqWd1PVwNUENV1X3TpGei56AsjwZXPHMdNqGmBNVUJNwciQSJnJYTFxPLMer8RBVfWUmyUuguD",
  "key3": "26afcLAbA3s6zoNJpq1sRcZ47uAEk7dFC9X8ZhgF9zdN4UcCmnoZ56nLucbERsYEXeErTdoqxZ9N33uD1yJ8A2er",
  "key4": "23MhEKVXX1bAMD6ctGuApLsdxSa4NfVMnoD5zb7oFSn14KVmx7uXpT1bp3fS6HbL3N8QASjrRPPhSwbphh9AaYWx",
  "key5": "eKq6psKqtfmE4CVpGpaoyziys48ijhmUzsa8f6DupYoABw3n6JWaYdB7wZtnDxqvDhFWMPfBRRAM5GebfjCJjmv",
  "key6": "4uiMC5gdLps7VZVnqt9q9e8nBGsD745bJsNsHFLBYjqEaDewu18aPwHCibFGaNUoj4zKw3z35zSAERUeachkjFWU",
  "key7": "36BLN781QrkawaaUyDook1sqAeaLmn8UjgpHwfqg3DGVD2woJ8jRHUNrD2Vt8vnBN97ierQPURmj8H6xt72sNywf",
  "key8": "34QZC1noCmVJeY1n6Lq6sEAsLpSNvhAw6ebrSFdPKCsH2oMqbKqdmbdXxaazLJLs9dWrCTQJvJ9qfAB5UiUxCQ5S",
  "key9": "4vgcwJTFwTgKBATgc5SzZQvA2yn63CLYBNkabQWqKzRYs6PmPpF1roWBGDje7PNkWA37GF6hJoRXCanDyrWsykLb",
  "key10": "5J3xsMtpvJ8fjeJkp9a6VMuQmaFZvs8WXQmGGT24PdWUcVmo69sbQvxkQxezNCApaUzsNfMg3LXDuWdfdpAKM7Pe",
  "key11": "3faTmUYtYBF2tXXxm7NkmsxReXNZf4RRmUy2ZsVd5SGmTM7D2h92jDHkwaZXzyWB197HyUwjWT8MyF3jCUXJqhs6",
  "key12": "TtuQNJMVAeCLnuYK7Xx4hSZbeapCGdAZ7iQ6sVmwEeqhzaqj7HrCNY85LnGZi8WjrV5xMhznNV6deNdaJRLPaE3",
  "key13": "2ftyLPHfhHBQVgmQ11UKt9P5rY11zyXAdCoNTwhFz5EMb8ooDpETwk4z6aFRUqGbufB3Xjm28JJfWibNfgqe94e8",
  "key14": "HXze6pf1kCPTXhMxbNjP9s6GK9eB1x3obP9eTpNsgGuG2QU7s4XKNx7V16Yymcjvei92CxwuuxrJffWv1B94zt4",
  "key15": "2dQ56DSbQh88Ju44Rqitb7PKBx85GdoaAkDvvxqRJ3Vyqhbje7CokVJhgck8kMc6oJN8TVZfgn5P8dZDbrfUaapg",
  "key16": "51GKixHErFKgheCVSCWhC7uZMpjSXbSyfGP6tjsQVepfJbEkw1iM1vuWZUvcnefbyqFstVmRABxQqvUqcCmC2s8A",
  "key17": "3Gpvo1nXsDkr2MQ9LDaShvT9USERquhsbzabJpk5NigYFUeaJZ5rk8Ce464Zjf6LHWJ54vuJMyZwiin24mJLKGQw",
  "key18": "2rQdQFGaqSTjji5fUANBjLtc6C9FF5tM33hXDNmDHuEirYivVCQHVsg992eaLF3pukgVw36mQ7EtLkZNFP8VfNjX",
  "key19": "4HCHRxyciEmtcdsLZ1JuyLEinuTJ2XWQN7xjsgtqmrcAcvEqesE6SPN64n4rGuHxTG3bMiyDQsmxV7xFh5XdJmYy",
  "key20": "3fEPiopQ59rqzK6No9WNr2PksaNHeDQRE8EASNgSsSE2ax3545tgv7bf2J6eycXjJs3JBFFnV5iMXjDBruEGHmPp",
  "key21": "53GUgdHh7xqtrtiKSNjJvvdeEbkzJUHtmPXsJxi8UC5oAcm7nsGEn6EkucC6FZHeXtLgk9EWKC9TxKMdjf39mRkx",
  "key22": "5UreUNP3eDZFk2cXM27g1PZWCYsKM9g6ES6eshXHxuw9ggdCxp2GXj7fAXjBxXudrwEyzPCMsw49C7aK3cadLoHp",
  "key23": "3FqGH9zgY8qGCg7VDtKPmW9vWsE9WgUSDPqZynaxPudLTw6WzYCk8somyUTQP78GYywLZHCv18kTWkdWMPUd53Ds",
  "key24": "Un8ZPCZs46eSFsAE8BUmma2HHueGFJot9FLACUS8rLfaxZzwFfN9vYaMJoMU5QU52jLGjBcEbVgdbuTujeGRKUK",
  "key25": "44WCGsu1dsCFii8dFvgwaoJZMW4kqtUrYGau69VUbHWtqqpQrciXUkUyuDTUpupWktpY4pbsANu49VsrP3UY5Fph",
  "key26": "3sSYkWfbmx6JUUxCMDw1KGQfcvpU3KAwo2bCsxMCEu3M6XoeqS3mtFZCwBZ9JVRGPfcarqZ7tqxdcLVF9yW3zKvd",
  "key27": "5tFiUTqYwZPbRrp1NcurPGbDo8AEGASrSbsDr3jzEdb5XTiMgnexGjoMW8B1WVm7cTqGfGNn6oFCHKgy7zCKUdci",
  "key28": "2SP5bTLUsh3dnYFAScGtt7Yj4ZXprDeUUqEFmn1PDi4kCyY4VLBXb21iMDNMDPbare99jf6fzQWHaRnkxX5kTjb",
  "key29": "3m31XtpoLi7jAcTdXobma4Nfbbuhe7Mc6n5HjnKRZ3ncjyFXQze4rdsdb3zuqL5hWGGUgPjYQCurXnKQ8xmFAA8K",
  "key30": "2TLDu7bvtrzBFhJ7t9FJ5dqWcmJckRU6EVwTexxP9AMKRBunqEQyJwgmtpXpxgEvWFHshNzxpVzYXy1xL2CCJLUQ",
  "key31": "34Z4SNQXLnxun77vAHxCSBvxu1LbaNun7jUMj47zH2qv53FaUqdAV81Z2j5U6wTda6xA1jKFuqqVwnkCsJEfoaV8",
  "key32": "3peewgqdyCUzzTDJqg7fwjYpwASjSFTiCiXf3pDxRwXcQP1f8APuZmnuW955bMAGxSGD4y4X6KA5qAD9sh1yNNYT",
  "key33": "57LAb64pjFxaj9pozyzFd4cBPXGfJSox9y5NrXUiw8SvdY1NjCsNe7fCSuaUqCxCe2uXaXXcwE4kczTAxTsZcPYr",
  "key34": "SgnFhDB5pyXRr91jZarxuCyizKPv5KPAdnH6h1V28qs2np1o7ubp4wKstKhm3hh45tDBJfgi3AyzZvhJCNQ9sw3",
  "key35": "4RZpVZYQMywR87fUV9DH1cvfqCG8H7kdtCnQJSQHgQN3Ehryyqh1JUcMniEijUpgqReiXcqTWstCWHPnoDRvgLq9",
  "key36": "JFnABPxUMSYm4KQN8KMghiWHjyJooFPZyDC1aqWfLGwQbWyLtHry9ZUviS2Kp6pwNCidpu61YonfTHtcbe57RyG",
  "key37": "2E8YpexvnBuQJDD2DKXmbDYsBCYGxn1JCSZ8HQvqJWiLYG5FCTizaWNNnb6nVfuKTpkV4NJ7HFuiuSWxR3uQjRPF",
  "key38": "43HWdwJ7vxvBeRW5PzvHGxKawwmhAuTyv6eaK3J9oFcrF9T3X98xjPjkCW5NgruHZh8G7TpuCqJeHUeHb4VpfyA6",
  "key39": "5ZZNo5y3mW4FdB479k7LKJdH3ReooVScb1u9c27eEVphkiLVmuCGAEguqUQo6uSAoJQDgUhYCkeeUbm1NMSoUdxt",
  "key40": "4J5KBr1YFfxo5CKtee8s9k9yR4qtdKHhkhYZgqpW8VR3nmW2iJ2Hp69Yo5fvu3eNqcFDxCBq3j7K5XqrajLC1LPw",
  "key41": "3cMkmViecXsA8kvfQsoetQmsfghwsFqsk6fPp834yop5CZvMENMHvaAjthUHfEQLZCj19BQdzaQFJd3FDDaKcLmP",
  "key42": "4hgTE43kB5Dd5aizD4VPgJnTCBF1t4FfmkLwuzcz5Ke1VTbMJex987ywAospsFvPN3KGwW1zaUKEZ9jyVfZBvXt6",
  "key43": "2vJRKcSwFc76B4m8jiaZzu8DGzyoJVniyhpyic1ktpDJNHfYZx1RN1Cyf7KEEDRKxH45mVrk9v1GUyDfKv5dGdNE",
  "key44": "5TjVjgb18LL4ZTNEtHQ1f8Jp5Rkv2ss4ytdUWor7v4YeKVxBohjJMBvohRdr9TntPTjJRWYXV6yrMp7g7YYAKPfZ",
  "key45": "2jV2HhXSkpLegEu4k7vsiotAhMB7cZoWmRZcEMtWartSJm7taLjJ9AagXVFp124xZpzv6nTFixQH7XhGeqM48zAe",
  "key46": "q96x16PEFbZhdiJj9vqFnDqebWgqjeeDb9tsS7ucyXsD91Ym3g5S5XkVAhdbYRjDc7esmAoCUZMySMajEqpvGBG"
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
