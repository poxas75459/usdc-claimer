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
    "5wytX6ovCtk3rdojMcy4pLqYgas6GVdZz1NQAGKDWxbBAuaZR7ooX2uoEWj61PDQ3m6Ci3KugvEYzNbpx7KGEtTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5is6VP6qubFJHiTRgijPVHxitF3MjnFrpGvX8PjSqHMTRBgrkxxhR2e2ywS1q5MfLt254oKvXjUP4HvY9JFRUSZo",
  "key1": "3ZY3H638X3cpBACRpVDzXaShsCPpX7eca5Q88YNshQBebLBaovsVRvABT7XUXLq1hshWktQwwUgnkU4nHzsShUAZ",
  "key2": "66vYSay2qLUFos6RzJvC3ERt6xb6eP3h5ShBRb3nrK1d8PAvfPmrSvd48yaog7U6VTEqrLTKkQesP6zrUEQS8gtD",
  "key3": "2wSVSc5QAuUJQStRtMeWBYsn1gG1g9p5Thr45tn1dEUssPnqM65nACYZs2Z11SLZv1n7nBGuaMk9Qkyd9hneoPZ5",
  "key4": "cXKeXs8aCKetBbPc89ZNPT4siAUrMM58yzoBJgMAWWdc8i7BDcTF7tmoqigK4vnXJxba97boRjaqgmJf4jGN19M",
  "key5": "4E2TCTq3Rw4hg9Mc1yhay5VbDSXgKp496ME8dR2UDCJR9L49BdFWi4bFhZPA4RtagaSLy1Fro93amJjASnSn7FHx",
  "key6": "igmPSRKGLRNr7XbnduZBZnGmcxGbyuY84W5GGACKdqsAE2vSbsMFWUwiRfJepwKrUX8h5zkijUwxZbtkicSBqew",
  "key7": "2gVqTDFW8wVtFAxWhX3qH9qUZRtmrVUr2JpVU8UN6CtZoo7yQWtp5wQoJP8TSkGrMKkunrET3Vp8VQ5shwS7mNd6",
  "key8": "4uo8f4e2VEjca1FZEMNsvfwe7uoa758xXLCWcbZrrh5VzyBYEDM4tth9LmVgGpxEFYscNSNDZUXmMmmAfYtH5h6i",
  "key9": "58szzkQ4iEs8c2kA1mzSspDcsPN5xhgNTG73wWkaUxtvVSsvgoMNBCpNjUgV2niuJ583XcCTfUTVSbeUnqnpBbGF",
  "key10": "3FNVbNaXMq7r6k7z2YimgMRd7BPcnyWNH7ZJKBpm6Hi6k23ZnKdkHF1b3r7S6Bx6iYLx7jbmDiSU3Y21bxueN5Gk",
  "key11": "2TaMsmRjj3p5qovNiaRBWQ3SvdtHDzuB5J9sZN2x9aDjxFFYwYxNsvKooanWkw6Gg3GLUsiQSDTj6z16AsAwPspP",
  "key12": "2sjyLvPSMNQcKoFie6CXgte4KLdFyE6vL4mb6tPR9k5AaaFuHrHuemajJvAdhYgLyzNtbaE7Xv9cRZ6EFW3Spg7S",
  "key13": "2BD8MeRWDCZx6cvZfJUjJc8DLXCsY12reUGu8LGAQexs6skujQWtzxsH3Vu52LcgXwqw3Yq4eoeeq54QPwHZfCz4",
  "key14": "3NTcVc8FCUxmP7vJ8W38XLd6xcNjFz7jmeFZQZptfooHgyb5d53fC2N6KWcRvmL6mxFep1t78rEVDvzstDDSPMHc",
  "key15": "29WhZWahM64APS41dbr8JKJ2ALcFZ6jq6FuRLtrtTjhSZsjK4TPSrNGm7tHQJjkAk2QzTvVcQiEgGxUVnizkqrEz",
  "key16": "2XRPKS2tEqabY5VAQETbR9gM94ATtGNv5wCpi2TrjAnKiifFP48KFF8gm6kfwcSuKRZWn63Md8atPwVbnbaa6AMK",
  "key17": "5d99HKAxhsPmbxZioiwrRnWnFCoB8EsjM72zeVtS5MwJ4jgkRUpKD7kse1jzg5wJmbS67cy8Qd5PLosq2HU9mPcL",
  "key18": "2k28jpanxyeEBUEgkJy9Y2NP8nWoyNQ74guNX2vTLh8KqJKNxBgKTWQfKLR6Nvvu3LDW61HYxTyxCFcowLfx7S6v",
  "key19": "4Ez177vSaPiK9BosXfokauWwwTmYp4p2qca5QGaycoeK8hcWkVxCVjjHDokMg3cDQsBqaxBjbsaKr9di98zQZxKh",
  "key20": "63D5JcSXFn16hrZxh8Aw1eSE3bWgZyD4zAqr2x6FLc5wZiHq5ejXGoNA1djGARHp9yBFQwSkPLtnLjz8hAzNehQN",
  "key21": "2dN3DPNef8a4mf8UfpTXD8tvUrRb7sa7Gd1VLfJZKC2EvDmZhi3DSNpyBnZm6BUWRLdmsDudQxucLS4B8aNjRikB",
  "key22": "33T2y34wC5kyrxi9YpMt4FZiop43KwZvnEdEUSBm8LtGXmwmLouqXac4rmyonvfR1JreFoPNwNr9JTSuF8NruQWM",
  "key23": "sSq9veoQZDadBEX2dijAaNiE2gGvSwte5PP6QpNqBdWTAt62qejJfH6m1qBqGSSrg48RPkhuze9V7v8sSPuacDc",
  "key24": "4t5sqDPd6pa7q3TRkyxKbxvRG3Wyz8PH3yQ1ntyteidA3MxYCeN7HS3HGZdfDnwwuubSoWdNeyNBz6NxppJpgSN6",
  "key25": "3g2X1BKQfy1qjY9yoFSuamEy4VHUWed1NdTkTFBBjWkXsNZexXzLPPBQHPK8Yu5mQ8Rz5SJ4GGeetHafRUydU4aH",
  "key26": "4XXpbe8KMgKTztx5Auz2hUkmrmq54Hsk81y5y4aUrnQ8443RtMfbgTJv2uY7UCAMvErw3yW4jLVpfmBLr3TPcZQ8",
  "key27": "3YhvqgpaWQjjV3v46hWLoeLRrdJcKDnLQ3CogFu9QpqpqhpdUHLLyx7yv6kmKCeegA5CFPsCwzzzB9q6KD4CKvJB",
  "key28": "4FsJjAR5cLxfRhf9b7kWtudT5qB1qLHci9in7ZKbFprrR3yjpVfgUkxFCeeCUoWy2CFyvgSRSx539sSe61AiiLjV",
  "key29": "2jZno2ENM3WitUPWBGrmwuJLxxn98Ktj7eyc5J8vSTbXLauEgXMPAM2ABKygq5TEcMrqy22JYM6qswEMe7LHtm1y",
  "key30": "3CAr8fjxg8GiKz6QjniQ1T8isX74GuMHoWPKpZFa38Ws6UAP3LP6SATjEVgwfMVf2BGm78L3wrVvyBz8xjbmqM3c",
  "key31": "5rKMgbkG8fKhgKXpKniEbsN7w8wZxHGzqVfFWxdV8LreKQkvdZqkj6QxW5iUZNpcE6iLM2SMXvTPRapnggbBStZr",
  "key32": "5AS6sZ1FjYUoDKHxwHWQNDa6jpRkCvXbokDnRn1w7jsn3QdMc8XQfDW316GTunNUKM8sH5nZqnL5fyioQFdniczF",
  "key33": "2yXkrx4HBwmk7kZfLgy2cDvin2ihJgwZmZ5wCdCdtwtGS59SFQqqFdWwDSJt3Zg75mfw91Zkb42Ze7DAN8HMrEA2",
  "key34": "DkGiCUMB6fPgNXpqvBPVXX5iRt5YdeFYzBnctRCf8XqJ1zyfRyuqf8Qcz6ENjmgN6g7Kwqejtx9zaMbzEhrb5Zx",
  "key35": "3WnwdS8zQb8bmFPbgWLm43eKL9HgrxRCffq3FceCBiWpnfyr5nwsmREPwiw3WMDA29Z5GGW6HPsX7nnqZ9xp2Dhm",
  "key36": "2Ch1ghxEYqNGAGXHEUgqX7atoSQxxUKXKvuCMzZ91GkrNuAZsThV8K2iKj7hShKfLSD4vBk8SKHfQWQfjkYJyp5N",
  "key37": "3ysHqHTqeKqmJVqE1LZxMxP7U9X2NSWsKitJN7QPdbthHcRoyGVZMt1zWT9wefAshs9F72uZJ19bfctVUEZYqDdT",
  "key38": "5AuosDETbnueZ9Lrd1uGjTyP9j96PkgCereRi82AcWaeh6jbauiHCy1tut6rXjndkBtVLbG66prL87CQEJRdXn1X"
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
