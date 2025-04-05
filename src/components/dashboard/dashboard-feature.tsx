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
    "5nP48ggykm6rq8DaFjrdjPyArVgLMZzUfHoVJeHPjt11GQcaso2qTYWiRMd6fRZi7Uafcmaxa87t4T5hqMHaXDES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdtSyLMPZp9xLAhdhaUq3wvuM9QF9nfq9wjcPBCksYchhwa6SNWEabdB6Y4op5ys4gskz5KV21aTr2rM95vYR23",
  "key1": "AtdqRMih7MkPbLYewLPv4wSz1SDAXTjXc1ByRK2JL5aUFX9S5RRj2QLmmPxDzwCeXCncSKY86e6XpNmg8fLTr1b",
  "key2": "qBne7nnnd8f73Gd2rpDeEHdVkno6VgoypuVkK4B2p4QmeiYXHCoYKA4bDBdFPZumof5qAQSTozgAG2kU8TXWBF8",
  "key3": "3nMCivD9XXKPPyqyUMyRsVUfVMojY46io7dpesmkvgk7w9NsrnbC47zVGGQqSDMC5v9ahrKnodSBqgn1kepgup1Z",
  "key4": "4s9cMABhcKRvARGziGod1qFLMsLCAWQMXhEQ9yZDkhVD4ivtp1jwxneFpBRhcMyRL58mDpwvCorT1W8ogZsAjFm6",
  "key5": "3nAuYD19dsTndcAgY6rRG67Hcrw48igtd9nzJTLDa8tRvRum6JFw4WoS4WTkZMdPLextmioQUvv5kLyMNhYhYswd",
  "key6": "5FusXk24VFVcgvcCPDex9GwH7VnXeRH14niUCSb1D3dMvCY4KbwEDGP3xh55XLVFG7kQVPCn7ciVRK8cFRtrqjZQ",
  "key7": "4V4tD3LGuCSzHtz4A9nNaVRD5EVdPGxsFDuLRZXHLS4is9aWUSSuTSCnnidyCDqaXiWACCwHGJD2WXSmWVjXNqc4",
  "key8": "2zRxNwgK648ADkAvjcLGB49eXv3hrdUDinRTrk1B8WSQ61j2Pi92irh7AerAefr9n7zacMcgW5HbxfuAhGtjxnSu",
  "key9": "2DV9411kZaSbcCNUrBRwfUpbvRJrNNVZkkeuyhw1SA3bkBs1mvM6xxTxMHRjGauX9ae9yD6Fn7yp5eG7yvEVioU7",
  "key10": "3V9vhGthSXP8iPiUadW8goWBv8MixXebK8PC6Q2PvuCeJrg6tw44RvF7jamjCZ1UsiACVniGmNJHwCWHwEZ8uTmb",
  "key11": "4cJHZkKYzfKgfuSiQbcqFQ85LzP5k6wVwicA7Eem1jHErm5ggTGrcMnPHRzSG4WUPZPt5LL7jc8JVRMqQ1xvtgEQ",
  "key12": "2kypypsBnPTc1DQK3QY86kLmcRSndRynDsYdypeGythVbaUuyrZqatNZDT6QGFKiR6iuCVbavMgktvaYDRyNxdcw",
  "key13": "CkAyWnmdppV5GEcAe8w2g9JB3T32oz5GLX5YsTvAfQKhpwvt3j8GfS6fyKmhY5Ap9zj29JU2aYnyXPxQ6U9FySt",
  "key14": "DHWoqzniS7Q8YBRHmhFER3zJep4TAAQSRZX6eqcYHhgmeBQQ7rh1yKzw3BoT7zDxdGkVPNH9QbhPe8Na8V5eAe2",
  "key15": "42bK6y7qNgVFhubXMeTJYkFupv5Bt1W5vQfwgkurJp3vVbfJbdS4worjBfU2BhxfmjGy8ff6qHBZabGyoqZ6wbfH",
  "key16": "5HsautR4CcHAd9XCFEjnHJmSmcTQkXwtEpVvATXK7mjtZ1jqybZsAtmKL24HSf9ixfcGUFe9Nm6FHuq5iTYd2kHV",
  "key17": "2pD19i5tVuoX154JGeDNCmvJ65g26u1H2RWsipWREkyiCfw6RsXwWY5BV4L4BN2A5eqvGitjgq2iMFfcm7mTFPQr",
  "key18": "2Tc7nq2eba4gBqp451SFLRRp8Wriu1RVzRY9Uh2iKAvVBKPJJ1fcjh2q1SrtSYHtijyyqiwTBgs8HoVyBHEcPCZe",
  "key19": "2gNtkuZuy3JMFXjGP6JCRXQHtRAznXPnD8yn7DEyGYeBYyif9NjCURD7nbsXZQ5FT8WNhkYkd1GT5xBN6FWXmMX5",
  "key20": "3dfJQVVWdtRBvPbD2BPcbrzg4oWfZyay9FQizCHrx1HfKq6gSX7fYyVXe7vqhA1riWZDEoHqF2Ey4osGZvmBbCpM",
  "key21": "26vyd5CAskEMqviX8yENCLaXqPdC1MmmsRiMrrGZVgruRwE75AAEBfDZkabpafrZ9u63RgHFCriH3N3ccCgEKEAc",
  "key22": "3EC3twhyVpNGuS5K66D7Z3GfmdyqMNWQvgQXGRb2aA3GvgpuZ4PygP1rT7LM6AE6AGsw5ZhukQHfSvw597J61UWw",
  "key23": "2UZqTQ87bgGtw8Pz3hxGpyLP7K2SGHEL9rhaPxhe5y1h4Yckfw3hcWPRf8w7MDedZTNp2XGh25JA8VaUzGmKdV7R",
  "key24": "4f8cGiQ3gTJP9ubtxRPdUsGNHWTbjgPd1Ljf4Kq4wZPCsxpZ5MFLbTsj9XzK9yWvjz1UdU1AeeH7o3kzkViicMEu",
  "key25": "2kEeT9277Lt4XEMQ8B86Bj3KVcu4yG867cMcEbCQDU3WsT9w4vfHwNK4xtfS3qRgMwF9HG6BkMdUbzDdst6mzBrm",
  "key26": "t3XxSevPa7KiwjPF9jCyV3s98e2hMemmWnjvBda8YFpLGuq1PQHSk1RS9RAZRh1GN3hDAz2Z5YBBRqNykttdZWx",
  "key27": "NDg41pLAgCddk9JhCYCPZLF6m2veQmmrPkSdW2QGHbq3axBppKUBHjuZrq1rKj2zL8ceP9P9dqQ23ERZydt34jM",
  "key28": "5wE8iBNDUXrK2A9EeKAx7hracWbSPh1MipnyvHen6ZLX2QFRAySyMqXLaVXyjHATgCMG6Nrw1Si5CrYJS9CsarRm",
  "key29": "57mrn64yfwLGvvVRqxW4CxTRWTn1oFvPYp6EvHoAN11pveKqscEsBtY37fbtUBCi9WZdVHzUxkWhcMXnwLNBCtQi",
  "key30": "3iGXBpZzJXAUdDKt714mfda6qZJQuSWWMJX6TgxYPcmf5FqVmUank6B3rSrTMApT5bYwQcBDD8P4vV2VbJVTmUuB",
  "key31": "Upetheax2HFin7VKuSDqT5Fcrbcne6SgDvLT5xhMmgpP4DKt2mKDqvaoRuSdt35vRG8pWBPjEgv4U7CrG1ZNsv2",
  "key32": "4CEuRgkQM2ajn8DNynA5C2Xpuy1mUCxzpUGZmKiyFTiG5CcHPNxJjaF6GRmM7niBgn3XrSSdhwnfft9r9o66fThp"
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
