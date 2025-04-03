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
    "3JHpAGKn2RX1Zt1ew2LdYak9xrZoQsPwP9gDogpkaR1CooCVpEErT9sL2UCJahLwRdGNSA3iePLggsCaDgZpDVQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjgVPnpqwHJPF8GU65PNRhedZ6QTM7BJ7AaJqAGLC3x6rurbCfSz9axJ1NRSSUcjks617vtYDfNihbGDcY9TYbz",
  "key1": "2mbo86r5GfbP9wHwacDCb9p6qTMhDWAgoBNnJnUeHHPWH3h9Xg8AKhHTP9BGdy5ywPCtYZakUjdQKTnhswnfBbzM",
  "key2": "39jeSqao6asx8CgcSJct9gTEqFpgtSVA6t1V75DWfkKkJenh4mHYA6E9w3565HT4Gu5ECSofwe3bLtX3GGPEoQ4p",
  "key3": "Z9jMezWoYr9KhH6MUpfLppVb9VJSVCmHaCXfU5Z9nRUjFeRt1VPStx4cyMmtNu89EiY6BTET8xKcikCZy3vxauW",
  "key4": "4H98ppw2X3k4JhNAQQSuLeWJ5XSiKC1JEFM8SQppncM2C69wtYGzoyJK5yQa9RqjwVwjYLXZjPfcEB54fu3NJS7T",
  "key5": "5Euxxwc1d7B7j5uCZmSwfEtkB6vpdp8A6H3JeBBPoomJv4v87Be6L1AMGw8TUitQtp3BbF4pJfuRp3DcvVfQBE6g",
  "key6": "5wdn5AinExr7Kfhux9oitGP45NCpwxowBd6iQw3CcBysZg9pQN6TdGkpz5CcLoSkoTykm6LB9iBMHagUKK7SbJGm",
  "key7": "61ZLYLpLJomHfig25JRtY8NPcpAJGJvMQom5SeTwjmHxywu1aADNAfm8PtCt7i5KnL5eUJA9vjtTdwkkSZnsQXS9",
  "key8": "QTXCro36Unb9LBgqdqWWgRY1CBsh8nTeDQZHpVRJ83MmVdMcMwzS8P34m93hXnUUeVDf4EWZ3swtpGuPXFzSbk9",
  "key9": "38PwhvaHyrDXiYzMxZHUdYMG5RbSBvzdsWM2z5JTrv3d43DpzY1JN2tsfEKD8p5EVSs8tmb3EhbysdY2PAekpPb2",
  "key10": "4mCdWFKwBg7C6WcpVCJooaJj2FpycAe8CPEL5p8DvwtwGBE7QBQNddRn7DZAZJnfGmBk3PYWKDTypkDSuq3Cjk3r",
  "key11": "345hFKjkXZHtTtdsdKiHzyCt1CthgLkKw9L1StvQHP8RYMRTfoN5ZEUNPjxyVreW4bPELMuZY1uJyqdNQyAoYs6v",
  "key12": "5xSMJhJc73CG1wwxxFyuksQ3bBkztFYKeLBsuWf7WnwucCEpMEyZJT8Bw4JH8nzx2CpHV544j5QQw63TDYg6pjMB",
  "key13": "2JeBBMBduzCrUfZN6kuJvSSoTFHSMR1t8AxW7LSE5aDLyKkRSn4RJAMfZc8iwoC4E6bhQe3BzsnBXGJmcTTwBVje",
  "key14": "2NJZGQVcRy7ffg5qDyxrGaUtH275FZz8U2wdHNuz38myKx4mSW7bWEuufXNVYQAXUuQX8cXtonPpE2sgYKMyfwNK",
  "key15": "2k2GAZVsyA2CJWuYwkHVTe5RiMResS3k5ZDdawX8ZRBgohVop7PoENu4H3GAfHm5YsEQbb8pS2UeTCVwEiWDKaS4",
  "key16": "3FmVM442Mvc5rLwxjR3tFC1FyPB3GV9kRS3dPkwmScBRetPHZ1nYvdWWituKdqBiJxg4kAjJZFQhF1ZvC6CN3yLa",
  "key17": "2VHqJfpCCPpQP7ZJBNgnqExYNTa4kjPyAam9qNewx3fURQUavg5GSTo9b9fC91ZUAig9B3FcifCFs2MEZuLykgdw",
  "key18": "2anDY2jsSj8R1gTpAdKwk1ApiZ6jBf8u5UwJ4ieKCc9TUxmXPH31GRmAxY3VRiWE9U8ocxohyyYKnP2bFzhesJfk",
  "key19": "2me4Vm71kMkX2ir3XZceEvcNJgBaG29YQqpJPkQvcpPPeMqaqzzxa7H1B6swHrq2M7GHcFBCU5rPbikdkxFhajEt",
  "key20": "3hKLNJ7zNxhSbpDQaFdwXY16qisQGaCFYUrU8c5MCR49YxWUY14mEQnVCquJ581kcZgf7u9rBMsURpvL1xiD5uff",
  "key21": "542WTD28u9P7Ps63HfUgRVX2WhfVuHfgCVyneavzwYdvcB4KFmJdt9vbfmXSVEC2jTjdjSgouYkgVHJxWxRXCrh7",
  "key22": "5QvrR27FgAZfYDKpEk9nEq6Bjn9rpqVdu11XVbFe88cgyZv2C2JMMfaFj1T8UztjPJQsc3sVmWvUnkCWknLPwkv8",
  "key23": "2mgu4kcfqQDd1jCk2PfVBGbMJZhvgE1AnmtH2dYQX4sfcBWMvsMyLkhHh2fKxyhGXhjRP7NAiP5a7wqntw8fVt4z",
  "key24": "BMh1vovqiMYY3FGmWy251htram4X6iPPi75tVEhWEXeas5PvgKAzhLmwXLD8sM2YLyAvFp7Qpym6629JsSsKZx5",
  "key25": "4HpkmoyYhGbQ2WLpJvGJea53nHrVeDxoXzbyLG9Eg83vb6SRTZWse2U6cg4mfpknRnhkcRgdCvvonMrKRSYB1kmx",
  "key26": "1LHYFuTrmAWUBskKbNgDbZwfHEuFJtLmcU1gHxJjD8mVmwcpiVk4Niu7aQNFRcqZxpUTXQZRiagxuDAoYpeRXyM",
  "key27": "2gsnogk8iEM2bfKqSiRfD6Ahe1XhPcdMDoZtMznh57iyJmcNA66vwmari4i6VtwumB2A56vX7cX6BjZdpzZkr5cV",
  "key28": "5Ddrambx9kDgSdNFHjhTsMZyj5s2gay6LGLkuUKGfGj1XtAf2egRvcisnDYJqymYPt7SAKictySxRQ3vYghWzCAg",
  "key29": "RZmCSUAtfzPrCreNT9ZKTHo6DYDbSLyz33AopFAYeVabp9g3kqMLA6ab4ELivQiKC6PNXDKv9GoQMzDDHeCZAfz",
  "key30": "3W74XHuodrdt7TzATdR7Smqi7tQQRwzVoDu8Ew6Kyxu1DB22tsHBUznqME84jWSxtgH4Ba9gFFq5ARDHkDduYjsR",
  "key31": "Sa93S7EygmKkKujY5ECXkT7hLvUfcSNVYusoELYG2XHkRTzCxM6n97C6QwoQ6tSH1vubCGbB9b86CaM2KXU1zLf"
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
