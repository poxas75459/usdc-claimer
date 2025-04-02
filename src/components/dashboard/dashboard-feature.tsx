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
    "4WUo6AzazgLdcxU9CpkxVgXL8pSS519oUxKLBcLENeoQRM2QgYWgXKGFQgvEDW2rAhrrhPzHe2hRKk13FXyc3ms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LmvnX22Ks5ZhKrwrXoa78uPoTdh7NyRQDtMY6nCYe3EkFiLMByEVyTTjeH5zYPcePQu9BCz7vkr5TiNbuvCGHtm",
  "key1": "3NfP4Y5MDjCctQV34Ue6dKJKMDHuvxqXdUqGSJiMPFEsnkHqnkUUTQcu48iKkSTyapXFfjkan5o1PKFkq2ocngMW",
  "key2": "5ufMgsrnzyodvgJf7tEUwkYxveKUPjHsik8SLdSnwaYaNVPq881R4r3fyTRaJ1DhxB8x3WTUzT6frGrJXXJSEX57",
  "key3": "2U7L2vy7ipHEe5ioZAh3Y7dMxBorhngaKSphHcSXsCKszWbUq7db7X8KyoYsVoEdaTD41vDjxEfYHYUgatmsHtHX",
  "key4": "D6tvmwXWSEiewLzMSZ5JbeL74FLFDEuMQFJTnz6d2HiXSKajv4ZRPPRXpnB28HZdMDwPUd95vxpLRV8wX23eu4i",
  "key5": "2hbnA8jjbUCsD1wqVoUamfZFKdHoSkNNuFVFHvuAxLFTMbtv6niCtidZr7cJiDYZXUngThRCVq2F8nzUpWVsQ4RT",
  "key6": "2fYP2M8UvDf1fgz4TatbZ9VembESBFAfCKM46YrcmnUjs19UrerarBXHgFbPHLsviKPTY77LMm1FiLyoYtkiUHX2",
  "key7": "XAHXDSZDKbda7JXjhHtSsZMaVVCqZmiJXWzyrSMbTUXCPp9iTZbT239fEHtkc7vsJ9KpSjS3TX8v5HFigEfPQYB",
  "key8": "4zTjQZGrdeNXbPqXqgB3AQFNL5bkrKyPUCYCfrdMSZy7G6WE78QM3fBv6ktduvYsixPkJLRAnzpWEgnmHKNmwBnu",
  "key9": "5zW1aJ13gpARMP3fGkyPzpBjnpRNj8WjKUfjwXFxT7TYaGQhidisuTAGfxF1Cc7cqzVdjvikq7ydhjcaZX6fyn4U",
  "key10": "5soS2ucsLBSgNcd1q7i4xfwLqwrotHoAhX76MEhNkZYTxC5dFtGcAEzzCqpixRyJKJE2GeVFoWDd2KH9mByJgVpr",
  "key11": "4dZNGQ57dLDctEJ5RwSSs5Fe7Nnnfib3NrH1HgrbW5HhhpKx6jzcHrLSvsSbYMEL6qFNP2b1K36NDto4JkEHR9tP",
  "key12": "3CDfQRPjrmTp8BeJMzgkVNcjDb5oi4e8B6sKCzrKJVKtaAm2iA9MgcPVBF3dPMdJQ81ZFYRPi4eevgws6qUeVTUS",
  "key13": "2BKeYqzsNqgL4Xse3rMLSYt5L8SVtVL84PDbv8nzR5CHw8rcHTazBjiRmrLj33E7kDNk6ckj4mR5MEKfnJHQ3Rvc",
  "key14": "x7jtaH8hpuNVuXSuQ1KRyqxxdF6bKhgv61SCN2kBmAU1bDKNjUJWkeK8s1guG5ShCBsn25GxX99XgEUzXXFw2HU",
  "key15": "jdjfcq1awGVPFk7Ln9aoHBWyuk5UQS4fktyVvN2e9yXeygns1iAsskVd2BjEP414oxcqK782siBXW54rph8tjsN",
  "key16": "2XsMxPGdwAjWfKLK2w7y8Uc38z5HC7aVmCuSUU1PgJhFDGArR8XfBn24uqzLtkQWTPymG7jkSYGDYEiQz1UDAc2U",
  "key17": "2YxpDrRvrmoYx9UEWcFM9kZpq8LE2qQvBB4NwXMp4sXBLgSVMbisxeSkwSPoxa396eeHw5FzqenH9NBgZXU2ZYUq",
  "key18": "4g5XiLKigAbsZPZRpsJQoN8fP17JXJtgFtUHLXtjPKqJpDSC4sEGydzLCe5hbbXPrjSmZS472aGaEmmYfawArain",
  "key19": "5jySfmmsNzQvdA2wZ4tpHhWJhMavyy8cJoUyfCQwvVP9zsXmjoj5A8dagvP3et9CQAA2tmxwPnPjWW9qiwNqHhnw",
  "key20": "4ptEfVo1frcaXfUc8gGfN3MFaDHtQ41DxA8L9ATtXCMgxWE8HZFv4wKQFqv9VmDqt3AocjCmFXJG6VTEnzbcf5dj",
  "key21": "fbjcNeBCkzgwc3TVGFkh9YBgGzL3p6gifceSEKqnNRDF3EQKmLQ8bGuFTeqAmVgEcmgPJYtNc1kDmY1bSXER3ad",
  "key22": "3v3boxMqXGUn7UGfFzpGjA8GeUWiKkTwDK588vgMfEhm5xGvS7KEpe3DzroCJsmAtLwra4czYcBo4UH3A1m3JP9L",
  "key23": "39cXziaDKbq66GGAxPQjpHh1WPaq6gvuFX38KfhKmRU6SGMSNJxCUsj2BRFNXn74FXPhhz5c9dhGvrJ6f8TZkmGR",
  "key24": "46oz8N8myBBXNNUv9D3av3oSJJC4PYWwePuV18rGjXmptNCNjgtoVk7BFTk3wn4PVicFufcgvTPSrUpTRiDbRzr5",
  "key25": "3HMtU4mKG4n8aMG7NKvZFkTxet7Ck7VbsLoq9L1c645vyTo8RbnXU4UsUbKGwAFADJVXABn3otEBRqM36oLiNEZh",
  "key26": "2317WLXFmZbMQ5vFU6UE839V6mJMeiZa3Hi7p4Y7UNGtGK9vSQRus7GHwNnPFyEzeggvV7j3RXMYzRcVvVq8SFBz",
  "key27": "4jrNhehbPPjqGYafpRanguV4MCzGJLf5TbeXL3QMsP9AVp93LFA53xePr4TQzBfAPGsvWwFC4aAxFakbWLki9i6e",
  "key28": "6rHhFSnJMAHrPRWYYGz4iW5vgEodap3hPWAAjgywg6XAmBcViCdXhnX3A4aqwNucWoYQdWXjexTo69VngEuzxef",
  "key29": "3b4fLRULs4BKqkMWSbqZaNbSngXRfVzSQvLkYGmDCKCuzQZquneiGkaNzPFchthYdh98kotEYCXEr9to97iNrY9d",
  "key30": "4JsLTEYYWH7AiqpZE4KG87YeWfcTrDwUzeQNPPk6mQ9TRt8tZbBgbwKxZYN9wrB5eWjxxFM9sYJEcSACQG5PvoCZ",
  "key31": "PymEDWkVHLPrhPQinPHwUb4RmkvhVS2QLt9VNXs8fXT4wMefn2CEyLpDVkBbZyJDFvX3U5uSHq9c9XdxTeMmQm3",
  "key32": "3n8ZNodJqK4fotqCdbgMgDQBGYtBeS3Nyo6BoTmRKbGUnQkxUYXJJkUrVLsXGQyFgmeE2SMn9aZnKHi5kcg8Kmvo",
  "key33": "5QAq8yc2MPMEpiuscHYkNkszEjoCjMAXKeXz4p5S6CGuTnP3LeHQqJZpumzqSM9VhE6rbzMQgyKb5AApKdYQGM55",
  "key34": "2BYJDMaeLYrd6fsdSm3Cjdgik1CEvX48AFJ9dfbLH9fHuG3qqXgUk6AxY1JKEXsv4zB6YZkAH6Nb1qyBL912n2ew",
  "key35": "3ghgGfJ5XVnzhauDPNxhGpxfNNWzZAhgLGd6DDWbxsP3ECWSZwDN2jCuLymFeeQaLPtMdgsJHh2neMZCJgvFfpfP"
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
