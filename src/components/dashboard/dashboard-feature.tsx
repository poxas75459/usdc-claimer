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
    "5aRzULorZfg3wPuExR9a2XkBzMzBSp6XWAa93WQst5nPmEhbgHH2zmeq38j3VobRQw1NzzSpTY5cNPZbNygVmAuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KrC4sLwVpYdhbS6XCQv7LEKgqUr2ZmpueSfDNwbn7aAqXVP6jBDm2qgTEn2i25PnCvsAHFAtdMiYfKWCq48Anw8",
  "key1": "3NFTevmkwzwxKDhVjSGasy5dAomaRVGVtx8hiyvc11FnoGyoGn9ERDDPQSLevUBBEfd9SX5eXcWxgkowU4Xtv294",
  "key2": "5wngpA9Md6WRNyT15QUG6eT5yBhyJcFW5e8ihvz3LVrsu5VYc7b7U2u16Pd9YfQAhpXomTxLh6CNYBFaAhqxm3e1",
  "key3": "43SgzpU5aw6scyRiesKcwJe4QMN3hop4p5DZujo3bz9bueqrJpfeiiHqW6Sa2oJzGceZ8zXQYsqMgJsfWLHeBkdL",
  "key4": "2v5JMoRUCLoS9DGzJBKitN4YvWzwbRXdn6JKVdhupeJ31WmA1AzqtUY8okjKdgvz5upQBatCvtqgwuxgZfxpweTq",
  "key5": "58NKiYENZEDFYCVSBKpmLn4nzwt3zHeKrm8Z7c3XtJ4oyQGkY4ZqNQnFGeUEjG5tWVNE83W3GbbpCzmcqpn2uPMm",
  "key6": "4sbaGaisQxPTwSzBRnz8Wg6dZxS6pWTXjriAZeyYYc9p5LiWk8Eusan1Z2e952R4hNDdvc2sHdfUjKrZDoJ8CCqk",
  "key7": "5dG6oaFc8KFFeSU9eZ555uutRNqxSirtn1HqN7oZCdNsVVVRec8aUhYBkVifS6vSMZKK78mMH3Fvj2H3JJSrXrEK",
  "key8": "2vaVX2LjrQCD3qFHH5551KpEBn13NgLVDsz3MypVswu94sJqA2WhwAi3NNzJ6ToakzAxAMrw4Kfd5sFryUMH4mSP",
  "key9": "4hUHUrpnikZWJzXzwsWzyuzMadUCjn1pgn91bJnyH6NmdHJNrMJ8L9UMVdcjBQ8P8Hk1EMuBBZ3LieKrS4iXv87D",
  "key10": "5LUdLgFT5xr4dukjfCYj8S3mHgfYTLjJJesPnUshAheivY5LMzDfrovz5pKDi1GeeYKffKSU3AWHf8vPT5Q5gQvw",
  "key11": "22CxK5V4aPJZYdPfxpnxJdfXkHMEN28q5hjuZhVN5fePpwJrf8ss7T6RJ2PPaVKfEBQ3daCsojtVvZFvwJrW1CM3",
  "key12": "4qMpeu7JXCtwqHbnAfK7EV6ivaYTA2Ljd9MuCa8kbgPkvBcq7vhorvCCFmmq2YPQW13yrovkA9TNG9p9STnL1UyG",
  "key13": "3L9tycZSbFCrBMumdnqN3fiGTraqdnLuoApsGzzNNDhJvyXYJxLE4qytdAE6WtgnbL3qD413Lo3J6bMdvAP3KiPP",
  "key14": "51qR7p1cbf3zDr1tA335GaN234SAeB9LRSEChNYkAnTSeqqeGrfCgg977v5BLFUSmbw6uw1BXLXQDxVhdiCZvgFV",
  "key15": "1ekiKa7wxHvvj1syn1x8bwmazUrRir6ZJGDqhEjWiCAcwRhFNBQU462ZC7eCRxMhUvV148vHn8QQPZrNeATwtwC",
  "key16": "5arh8FW6wVj1XXw8DNAZdmgisK8EKFpNXJXY6TVid3YPaH81Ds5Rs1V92Kuz2yZ41hLJzG5bCBSxsT2PRQxeihm3",
  "key17": "5K2E5Sq4hqDpPWEwACVwFheQ5FPhN4TXbhvgxzPUDhN6kEaeYfByD7Q55mrsNcwMg5cduDkPrux9a5Tccq5h75Q2",
  "key18": "33h3391DczKhAxeP358X7SeFRuvJX1i1NLmx5i6VFXotLr7b18kYDyUd2Mihk1scyJhEUixcBycpkwZu7bw5FBtS",
  "key19": "2pf6Z8oxcYsQa6R3xtbPcJdiX6ho8cK1Yck32ii4NWC5rezyqfMB5D68jSW924paFKs635qaQeC4GntvmjAykQmv",
  "key20": "611TJxtXrtP5jXyN4stde14m9My9yD8kwBRDA7kqtsoWjY86gZ4B18yBX1JtkyrQTpLqJvXqX5xgpeP2UkJKaXcK",
  "key21": "4G8Cti8UVfEpXzQnUZjSsLiBkc5z4ZJmgm7St5LE7f2HhoP3MkzfkBo9JVEk5hU4581M7X5zTWcqTsKLg8ugSxwd",
  "key22": "3TZhSrt4foV1s5PvpouVk2sGERixqVBdaMJaXFJJeabhSmN5hZ2xbxpcQXQuZcf9BKH9JL6dALB2gVNE7r7iv34j",
  "key23": "3yU8zLkTWsoeTFPfffbXYzu8uemmC9pmK4AwiXXHjtcVE7zAyFF7mfrgZXxdr795eahtGMwXs6LdhGhK83cyhQxG",
  "key24": "4TwFx7MQrxeerBUcxR6ap3rnzorjzmzFsCcGTu6xsyw4aunF4g3i3LKrZ2i5SVpSJGnCdDCCRtPbvcZfHPKLZ6CS",
  "key25": "4qkuMhBwDDkVxmoNJWniaUQbaK1envkCT8oAyqiZQnRMc4dw1varyJjHAb4gZPgmmFnNDu2qqnNYik6XYj6UHsEw",
  "key26": "5etiVTyowKhdXM2qWoYgk1t5681Ayzjx7SMQAQ5f6HsLt55471G1neiQ2BZE4xpfNwbXjqbWU92cCLYHVLWTBPjQ",
  "key27": "2ZDtj4yz38Wxwr83tVy8ZM5m46BPfiA83wRyRcaAe9utUwDFLWEXiyA2k9SnaB4VHv2nsCfS85QwAByMC3Xi8oBo",
  "key28": "2h9mcRF59R2zxhfHaf5CqGxLoagnXSonfpyd2VK4UMqKZ8jXkyEiUQf4Z8ryG56BjqNasG4Z3zGehbZydLDWM7V4",
  "key29": "3mxkRVo2TDzKNZVJ15oJvnhSRTats86XPaizz6do9af6YEmABQyZTtPWctLYptC9BcTd58uSbXcv2s9uqpdDYytU",
  "key30": "5reCAMPsaWSxnLXv3RmnQRnA63VCb6SbJm3F7wyXzwNiNn9u94Z67E1SXBVNwaWM35ztqwEzsPDPGyBdzgu4DEV7",
  "key31": "26Ntrkwt8LpcK1ss3CiFeziWyt52e4ULoFBUEonoK1LC1ixiVTQqs7X3vajk8PSrtkykrMsv2j7kpNNZ4xgSaAvd",
  "key32": "2N35dxW7NL8yPSyuD3cuETy3TWVnsJXyVcdZtQQpTJdqYhNpVY2Kh3TnmnQEoxLERBqkoQ7mCCJPBoiLxbXc4eth",
  "key33": "3CcgfGmHkYxQSHFSQ6ZYJrx5oN3xRnBpc2yqAG2zzrGKP53Wyfrbq8Sjj2Cjr4kSXd2Khf8CCYRzgroWjHQsPfcC"
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
