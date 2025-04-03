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
    "54jrGFNNSPLRrC2ApHcGmJKC9QG3JDLv8znDxcuJadjmwDKiVVCXSTnPFPKVHtSoJGKtmpYznJ4begNaVKeYtG3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5prWSYuNgoqcdnzCtvSPfNi9bQZ9BsAsV8i1YTckUfGivjerDMZjipccTeEKKBoz24hySVxq7CnoNyTdV18Sccmp",
  "key1": "4Z5YXB6y2FaxUNaiYvvroH7ssfkFngjVeS7YH4vMpa3CEzXjMmQLx7Ue65KqVDQrMa4rA6DJgxgTzDLouAj3uBgw",
  "key2": "3gCHpiDvVpTHex5XXdjFn1KygC1wXMo6ddG7sMJMEHzvrPuX7XYwWNBhSnNdbB8rE94NrYrnvRthvvx79h29z527",
  "key3": "5fJHo2H7KCqhzDdT1aXu9HogjoHXWBkUtNZqnbYKKQNH3z49HyFzEBmBB6LrDeQ6NC48xK4xD1sGPiLxvAdT1evi",
  "key4": "4hPSsPPZ1r5igkB8n9UdXTSzNK7nqybbC7Se58q4qeM6dbXYovb9y5qz5TzTC3SM7tw3qZX7bNpZBxEgnZvxvf7U",
  "key5": "2PXZbHSvYUXdEsseX1FMATekGAk4e6fmwDMkjw89guL1YaZFQN4PXjx4NgYTD9DyJTtd6MNukXHjieaVcWbEmHL",
  "key6": "cK22BCknFBQmoDdaStEa7PBZPgsLa5HJSEWQSziMmjSQUwPF2VLxciYWFyEEEs4sEmB2Uo28s182QCLFLHbukwy",
  "key7": "3uVbb73fc6X3RXZAQxQJQQjYy6r5XSjVKEZeHx35r3ru1QP5YkxNVkR8uwHg2GEr8fm2MoNG2AdGLubmxRMjmXD9",
  "key8": "2aBv37ixvB3S95k9eJk5EwnrsYXkcFCsWmhj6xpWqgyLB6yVGKY9zYX1RopxB9d6FMoJPAm8yJoxGchnRrMPCYqX",
  "key9": "HvV2XsY9exo7XEJVbajPaMzTFXQUzhmZTkg4F6caibMsTBhBreo22pGqcza4qvxXqvRcuHNWbSNgHxrM4C9Zh4M",
  "key10": "42Du8h8f2VNGGHtWh2jLPmMqjKdk7QX3EyHw1XxWZnuqDMvThMNbsgG7qVUGHAtw4aV64tWCgDShdVkqeR12NSSL",
  "key11": "CpMkjfHUpcEQtpyCSjfqRrmfuoL2n48Q7XMYyBLFaCGsAX78jU4VJdQmNHYfbB7AYT6jiXGQQ17iVky6KWk3u6t",
  "key12": "3M5vVf2h8auKd6PLGD9t4R8qbuCUvBQzcs3qJDbYiGAVQkZGxce8Uas9tA2LoZ2r4RaH6jdmtjs6h6Vxrh2X2eWd",
  "key13": "5GkJgr3wKr3FduAcGKAwSPMJ7Y8Ki1tUbrQNigFwwbCYMCChfVsjvzTZnJYa9nBGpZaycXXM14vAW5rTTjnt6PHX",
  "key14": "3F5KMjD1oWMWSxB99HNkgJQrp9iXfgj9H6xdrzykQuDeJERNknwah5hHaBENeRz48fyd4Z2VXvwesexWcZPC2odu",
  "key15": "63v8AnFm5kHuDLZp2xwAGPeAu6YMPsCFdP15knSjAbQoxaBqiXaaZF7m9YrYZz1oQFoXaDB2NNnzmgh8zVZZ375Q",
  "key16": "3U1Vy2Ft4vU4dJ8GqdqbpZdhMJJG9TzyFHN5s6MVEPr5d6RQFQU4sYEzeLAo7pukFKga5Lpd3AopwHtm3HBTiXak",
  "key17": "2v14AKgjfJTS8KDGLdFVrXDdHoLwaznEHrwch2oJrgYfb4Ppihm3KihsdUiDvvwBr4yewRio35L2v9quCw23MmHh",
  "key18": "54JCpaghb9dXEE1s3SJKjwU9N2gZtGSMNSC8SbqNzXwVVAkuRZbHg618TU4BzkvMfpGZ4JKwZ2FRdDP7Fv58oaVy",
  "key19": "eiBjUtw8ukdzdYJEmHWG9Vw5BZs1wNT1LH1SmiiDGS9p8dGmbjrvvdLJdfQCmhpdikdVW1E56JvpXRvPXZDN13d",
  "key20": "5vkgK2NtWXfRHhrotKg8R4og6SNcJX8gNaGqVZfqSt4kS6Khe352urvQc5Dt4iDwLmuSr8Nxo3TKpFHcC5frWigt",
  "key21": "4WkqEScLrQUx4xeaKj6zkJXasmeSXBbLLKQ45kXbxYRtg6L12u6w4WDD6iVZC8SGFyJCL4CLe8UPeRUzSaSeqvr5",
  "key22": "2WLWwe1oH98rMZ5kSYjjKqGBtVcggdxZ6vSRjt8qosCrPV5Tm2CgJfYzPwdnK4eNsfaiMtqPnJrkg4UktwvBCitM",
  "key23": "5pt3QYma41dqjKiVmnn3jgK8FRnr1yA7t4ZTWX26NxpcGKqZPGv5ekrRFwPeDLo5dL5YZiSTLT5t2Ey37bTp1m4H",
  "key24": "5atdCfhyrmAwMEHsZcmbk8GTA5ji95mabaNwNw35pE5Qh1bb97ExAKi261a7LYd2Tf2Nb3PGJQegmsCvtuwPALpi",
  "key25": "2CUR93hgmQfD9NM6tbtDEQdHvaECXgMTqGorLEBaL3uzbZY35sj2mhrRnhthtk97EPAKWKoosgyiLZRUEWmjW4eB",
  "key26": "HFaEeScshJ1XC6nwLsZ5MSkwfjEF7vSZZftT7AAtiwFMEY3EiPRtjSep1JXzQWE9qNckrQ92vuQSifCAsVqpwNa",
  "key27": "5z2DFnfFmuVJvmznN3SmndpEavp1A4Du3AVbdVdGHLDNeU8cFN9fgdb1tkUEBduz6RmkA6H3ipXWL9bv7Su3AigT",
  "key28": "3eRgH2yb5DV2KxWgRju9BmgQYgbfd6mqZHjhtGYe1WFQmr7NCLLN2upPjhoLhHTpbLuxJSeV13ZCn4e5ZTUyGeAA",
  "key29": "3LZBG8jqo5zoXtuhaRisogZvjCCpZ6C2gDwNpnQXs8ZAFnaaHiSu7HJzYnDRjM6dH2EYzGrp5bUYeqdE5JtaZaWi",
  "key30": "CF2dBhkrvZ6Uk1rVoLXFBSkpG4RbqV1k682evPSVfks1gDG9Fk8XMJHuH6gu7hJczM56NKztMMdN5WgFtFNxToz",
  "key31": "4rSAVH11zRLBee23F4U7h7hRrHWa2HAbN7VpALLVsZDcV6E7FKpS5b4oRJ9MDoqjn3FGV9Ah2Baku3YVRZqgKWZR",
  "key32": "4Gjf2CQWtHfWcFPTsmB7tCjmqnNjPTdh9ynjV4Hsbq6aYtRXQRQvuDGU5Rmm7hYpuguqsqv4GyTpx8jX54z8xU81",
  "key33": "2K2s2MLkyovATN72x3EGLLVc9TJHGG3hcJHP4ZJWKjaDFjhyeoMhKrnLvQsz3YWug1VFkwNADwhxzwhiHZqHv9bh",
  "key34": "41ksQDZ3v5WJEe2A27Kfjaucm7zavFxKUbXyLhwoUjo6xY2MiGgL8DJhB8P27XcwTFTDvZVXdhxsVabTgJucLQUK",
  "key35": "4pajVsTGngHcz31QWhtRjXaRrnJGng4C1tWsDewYBqigf9oR4vtjfkCfVnmdxsdnF8GLBg8QYChYRLmGhdEtAY9L",
  "key36": "4wkdTvrZnBFMmquschk8F9Ga1fTD5L5SFLZNz8c1Cfcd4fPrij5mo9iaFKnpuR126uwhEqU3jt8TXRHgp7ZADtCc",
  "key37": "2mgrW57TMmKtzrEUeuA5F6yfKBao3rGw1pQeemEYQxvpgB37b97B6XMRQPqamrZiBByMCYE5AWbSLuu43h11y8Di",
  "key38": "3VkPgD1YCWPnT3vcyCWYZav8o7ajy5Ee22iDuRwa1bj9ZyUps66a5CtDFtonufFkmMhEsBwmmKzHveP6tTZdu3jv",
  "key39": "2ShzmHHkvNuUhu2LLbRtHtoBMTrZdPH1oVZLLFmKSFDB7k3jF7Tu3dLWwvx8Fx6AJZhaLnTzEq9Qfj2vjanD6jDH",
  "key40": "3nJsEUL43UfHMQieRwXMKu975a4QstVAdaUW8C3dV4EXYNHqixn9fi4PmJ1jHE6d7qRqAU6TPwxiVLXyaxFFSemM",
  "key41": "f3sM5NfpFY3yMPZs6keiBfzaAX6RCoHbEdMGGPPCuy1geVGWhDFhtMn2MbjuwTPxwutfJWm1nB2UH1WL4LVx9o1",
  "key42": "4ewuPL3d1GPntU17thXnRLHrh6uwdiKouM5jHWsrYYZGCtNubSevmcgJbzc7Ja4yxB7DPmVJcjmxarx7u9YKgC5F",
  "key43": "dmf4xNLGcYQUBy1D2X6m9YpX5Z8thRiQXPECiLBRkKaQtDevhXYdoyp9xBAFNy9AkBpkcyQZHqcbXxJ2qx6ktsn",
  "key44": "5mHLsQw8TmRKZDn5LvVJW2BSnkAPRAkBxyd4siD3BsbnE8AjS7cV5rFvyp12e5tQTGoSyMvx8ALP6fsZJmm5sxJ4",
  "key45": "2ohcNmVV4jVPzf33eQ9K4uGB1n6aeULpUnwRnu9g3gB8ka7c9rMPbJzg9rcL5n1noSToLXphxi7gutsPC5g1UWCE",
  "key46": "64KXkhRYTVPPP2L1BntjMZBzXLx37r7g5xhLEaiWR5js6eYQwBomDHj2tCr3FgeYARLgmSTETJHR8hWxVZeBU9Qa",
  "key47": "RWt9KQJKtqATN2oCYbWYCVfdzXvYiNEM6YF3A57KoNnxZiaagyZuYeDypFEqeK3diyqy1me1SzhNkjtSUvDhJPP",
  "key48": "3TLDkFr7fJAvGSjnX3jRdRRSrmBTjPhBv3W4bKJSRPt7egkLRZL2W3h9ykmr8EfNvVdaerkMD1iuHrdivELkCKDN",
  "key49": "38BzwPa88KNirR3kFzreMDnZLkSUWu4Gi3vjWoFotCVLoEEiuyzNDM262TuS5wZdTcFXSALjYejQSc2gGmA5gD9E"
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
