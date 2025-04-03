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
    "4vyV5wc64HNcCioovgEUMwQRTEsXeLKMaxhjpTKgUS9aYwBiMUpqEVbSxa2BVZb495Atd6DHd9kzuXvdjRCMGKjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iWd8o883o2ZmH361C6XrKbx69ger9hVrtKShXNPZrvNyFnnL9YBd9vNTu3we77vsgHja6n9cFH5NjZyNVXoWd2M",
  "key1": "CZAbNbdLxXBwjWc92ojjPbje8upKb7aDicQemh1WxmeCGjyDjnJ6KJYFjs2h2xgrr6k3R8MCXXPZq1neXc6KvNq",
  "key2": "2wLEjDNUUi7jVDPHLEeLZyPUmRRo4oSEBLsgnRPWFdC8rTXx8RhDAj9VgMH9uXHeMFujN3hvGmrYNkvaomQm9io7",
  "key3": "4fN5dVEGBkk6gwDYRZvu3Yhk7shKC951aNCCwSAVJ6RgpY57vgKkqxyjHhAJNVtBDEdZaFPHEXbrVPLt3R4xrqJW",
  "key4": "65tQDD6ZtdY4HuPGAMqng3ZgfdkUqYrvUqTx8mgpvMSpRHGhxjBVAc1qakYf8ZBP9z3rNPKYMSEFBSLpJqwbd6ck",
  "key5": "3oXLX2LPCv9EXqoqHaJ6RCtsSKUMrEnCNy3FgNT9Jy2r4TknyjAAkpLPA2H84jE2X9g8YKLFC8yjgqtg3sTbUKgv",
  "key6": "4pBbHFQAqjFpaQfbBALBNy35UhrnZuGSU3Lz5NA6gs3hxktoWsHgrA5oLaRwFLKBgkXG65Yr3LCTLGxhpUz99QSg",
  "key7": "3vN6Bmq52bQ6GXZywMDsVpSmMNkSWxBTU6Jvh3cBWKUpkZinS8ZudCDpCLrCAML66yimsGo82iZTCRYRh3HUBFLG",
  "key8": "2Lk38sn5Fg97jAjkNEr3nVgcTvHf36PcbHqv9akPb9Att6Z141f2Uqjrc8LK1CaJb3bHvuE7pf59sStPoNcMHBUn",
  "key9": "2Cv5oF7xNpnqjAmZFKscxiV2LGoxbNDu3q1Jj9wJGXbbzAfVLSPZTLkCChb8cmuEFGFu1nSXZdRaXr4sYzcPtcFR",
  "key10": "2YKRWKd9hg7f8u8MktRM8zNtRjBiYeKZUUEWEowG1BGakL6Yxz6aa59B2SqfZmDVY1LQwSR9KoVNXeqc74fTzqJL",
  "key11": "5tq82LTiaJWTTsGpxcEDUdvYfadJtHk3p2f9QMH9WrUKYCZNDQcxbHHwT7ht8TkZ95faKLFuyvQgyFBQbEoZGhHT",
  "key12": "3o6Jmm3dmXvYHoAotCCRChPLD98SJ2TCnpVT1KrC8HuQcefrDWezDexTZcbVTC58mNXy3BGkUekKngQVRujU5xhs",
  "key13": "3LDPkFsgxgHTUxg9UAiPc9kM4Pm3Ca7T4vM4eUgyG77FifnjFJG4nohjoBtJLHZjM5gaJ6tBHwHzw5cXXVihActK",
  "key14": "4FAZUVnQ924tMatY3gynre3DnCZaaXR8vUJztiXRqqkuEUSY2xyDU7VNPJJJxGLQvoHdZhSc1cA82wNdP3EY4Vc6",
  "key15": "51cyet5YbJPFEH9brFXUM56QJYfsryA9wjJgK8aLLkAXvkEdVJv41sFyQo6aPyJgMypP6pmJqBgkSVGSAaXy7j7d",
  "key16": "3QaPDddj3oohur8cb79xb2XbJvmMr7Y7QfPoAmMAAqgNV2G3FsZipWFYVwqCzo5pv3Jnmj1dj9WCToDBrAg34xRu",
  "key17": "2ckNLZMrBetEi7cBRbWvvphDrZwtYSNU6TUevmxHuu2wbXE8aCtgUbfthJVnc8TtmXQyBVfk4PXAQB5Kh6SU9S4F",
  "key18": "4DEXWJWTrM5ZQ6c126eLbktMeVBzhsV72JACZJvBSb9Wb84y2VRQYKcdi9i31vhDUX96xNiqgVPVp46BS5iqdw7q",
  "key19": "3FLbJ8rQfRrrwQP2oRkdRDDWC3vqWTHnRzK8ykvFjzRNEd9WjcpytnAdkuc9CVsJqgan3CCCvcDGHfGhitXyE1Aj",
  "key20": "2Y9Y1Pwqb1nD2RBR4TSGERnmSxaHS3DD47geMn4BqMYSX2FLrZGb8oRnoQxZRR4fGwUo5Mybq31Z66ofhaZaH3fU",
  "key21": "5qAgGsJXSZTTdf6ekeC4pjmknSzrRg7ZwY46E3etvf8ZEExggv7ttnMM42JCcP43QgofWdwye13MAKJ2gHysuJZF",
  "key22": "JeffUmEp4qY2XJYbor8NBk5SBsNx2XAXpy9xdUSfPao7twQDf8PLFawq1im4c4oBkMvPGtgQVGuGB4aW4P4HExL",
  "key23": "opcj6iQ1Jbw653BhtEK4Lud8KfD666vQh1eHcBwkaYC7fWvHe27o1zvvRQV8sMtQD4zNS4mn6tr6iCZvpGPXskK",
  "key24": "5PL8J4ZpHKEfGiiwaJDcokfm3zme3yQb9WfzJHR39CZyKLRnYsa6xrksS8PvLKbp5b9uT3ez1DCZkySR4BbYEF4f",
  "key25": "CcZdL4o5w3XDGyGC8zQ6zcp2FgnuMCnE26tEnrLVKuPoSWB4NSWjK7bseE2mi8SzdLw3F7MBEhmwTX9KsiYpEWp",
  "key26": "9fXxWrRJp1E5NDWRRhkbPEasSktWTTGD4pnmNmsgTqQcVvXyjdP4X59Tm23tf1Ho741mqLU1K3979bm35BKhFo5",
  "key27": "5kALfpNHZK9kdKNCbxVoPjX84sugJsLW2rhvMN7o7EJPzLobGLWMeyVAQUFJzwjR3aLk181cdTSi2ZYhUZKeyGP1",
  "key28": "5t2eWqsEPkRRwZcvqYArQjt1ef2YFJ8mUxChpchDqJr1MxizwWf3XT8F6r654kpXd6dEaZDbzJZJeSaEf32eeksT",
  "key29": "4RpJpvn3VAd272jjKeMYcDBXY6vz7z9qGbMQdmrizUcnfmkMCbYxSG8ssr5iWSftQpMVnf7ku4mEshoJSNTdahZ8",
  "key30": "519HvFBpm1LkFUe1zK48N39o1U8fN8LacHRUhXBwjSaasBm3VfG55eQsr6K2fHk767DRqQotSLB5WVZykTFHhWtp",
  "key31": "64JbMeFPCS5CvBt5YL1aPciuJnPxLmBMSJbyP3mi71ysF6aBuMT6kzdNJByDB3zKRXMRrPezDzNUgtY4YQPGSLB7",
  "key32": "5iz6Lan7sDqysDP3WRb9jYMwgW7UgFrFMJuGWDaCbppRqkfrVGMwJMCXfHCgtP8qF2Ea43XswiVLVa7ygQAX7rXi",
  "key33": "3YTrYQQhYxtLKBXPksrPBEFDT3Jz9BJT84mxLNDUuSVNWQUTMX64VndgdVFdhSJCHEyjB6hf1a6SxqTcU3uEcYPm",
  "key34": "5nEJri79K9RWseGu6Z1SHZyYtLnWKey2DLFQ4QrRndBr36thKQGmixggkajuDJaEhK29B89ohRRZerCVkjTGdXeU",
  "key35": "4iFCY8DPnFCK7sbvfu6rMdTvTZEw4g8fdM1FsZcDKVSiNvFMeKjEMsLNoD4xh7KtfTx5BhsFMaFu2evAtdJF8Ey8",
  "key36": "3okmrzC68wY7ampbGt391gFLa7QsSLC5YHicSXwx6KwDidUhzmRFoBBpcBPL1WUpVFmxuta2nk3jfq4fpMnvnbnN",
  "key37": "4fa2HKHGeUw814wALyvosNhknoRU6jEK7PwBuoAXEdCw8qgvT5hDJKEvkaVtZtX2bJPQVUnixYBVRjPGhjdvmSWi",
  "key38": "hwSq9JWPipsJzG3XyzvKB4WXjy2VwnJvHToeTrWMZ4QYo3YnhcTgqkCFjC4SoRGXJVUTJLaPKAFxGg1eXKfSC81",
  "key39": "2Xj5KsEj5YaMha3aegTNk5TFDuk8povpWcvkiB1g2Cu1YVtK1VDDvdsN16fRHULpKkYR6qS3uNJUdXqAcVJEfxFc",
  "key40": "2SEc2s3fcSTu77x2tD7yDtAqgcJ9kh3DWfwLMbptgaEZXHG3Ka84RXzsTzranz8UwvBjTXz6e5QC8h9gUuWvJ2t8",
  "key41": "2nzTzf2uu5BRsSFdRKyJKr6kBdtZXBEUr2PpWdLHEh7fDjG7pokvBhR87u9uRSKWBYhPUmMEpRcENCq5uFdT5X3S",
  "key42": "hXosfvxQeQGL1RJMXmDLrEkJiYLMd7H67YdrSEWNhbL9SN7H2i1my4UxterxKtiwToAfKrpF51oL1b9QQ5v3YAM",
  "key43": "t1vx3MCkQxZoUvKemyoGDhU6g8BvueCrCHxcqoMEFuydHF3MT1Qb5HcpAF7ApRdK3T1fC2Qa6Ct7Fw2inTtSq5a"
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
