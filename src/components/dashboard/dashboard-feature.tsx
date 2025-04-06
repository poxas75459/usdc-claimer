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
    "5UfcqS1EfEBkcVbAWaGhSzk5GCbUXXuNhWViBo5S8TGgoJiCkG4WRAb9mDtBpWDecqtmr3HAYsmA3H1UsYqoWuub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgMb639SRFkP2NC6DTHij2hZibSLJMdrkPSiyixg6ejyD4PBnFLW9RdL2RxtJoBz3qHMGgMhRGcEavY5v4iiUHW",
  "key1": "5pBNiu4vMN6fsk8x11Zx173eWh741WUrqWNy7Qy1T8sDWCUHJvw29GVu81e1G9baQtjVMtL7Xhq5DhfBqbJJCqfK",
  "key2": "3ouJJTTyhUpSKCTfr6Fx7KTFPqg51A3y4cc85P1hXJpiWAe6EQMVf91HdKbzAf7t4we1pc2w63qkwvfyHGLJrvP6",
  "key3": "3tRm2cNyuqUbumuWnr53YyKdx9Gq2eXw3Lu38PbihbC6gCN7EgNszXbXpnAJKgDaMvQ5y41wJvFX8rfCoYMnPRW",
  "key4": "4LKgbq7w5pVVUHwmiGqgWdU1Yedygu11CnoR3jDcP6hERMeB3pMe69XETCpAHkb4qhhVg1oFWc5u4fAUbcC5W46z",
  "key5": "46NBSinvkQjHG3wMca9kEXwRJrwW3FZYhB4LA8csU4oJdJ88kpPMqxydFuCLdVjnRhYQktQuCE8jWEAMGsJNpP8s",
  "key6": "4jRJWdvMkj8WKL2za5qmEU1ks3pqbiiwwC2Sr87Zeuy7owGEJQ5ktQUj23p5C2ik4Xt3eQbLM1VW9KR24RzSJQpB",
  "key7": "2NucmX3KekFCoifFgZKW6V57ga7mRdEeh4yvbqTLzmfzE2SiwdJVQe67qJ1wkoiEN9oKNmYCoCRkDMubTjsgtdoF",
  "key8": "63MAXN2kZt62b5jZuB6mfhi4MGD4bsR7ud5Fs7HZvJP689gu1VR2Tfp4MFWstxEN4qNsqfGc3p6WV3WqbxJjV8Pe",
  "key9": "3GqFbawZdFRnCL8NpGaYr9hcKccZDxTH2f3SU3bMcJJhoSjF7DucVCmq9WfQrc7zPE4rqDtDc4dnNo1tVvNVdENk",
  "key10": "27i87TevAVeWoEK2zxKBmjwbH4esLSnKWvdM9MHsjBji5RTwXLfv8T1Bh8vnL5LS6vbuGcgk7VxN4AptN7e1u3nK",
  "key11": "5Cuw6oDGd9xovMBmrvxuxazJvLcpaoUkyNtPc8g4GfUrGbcVatw6Yf3BKqpRtXcPrieTCFhHYLcsxdwJRTF6Z9qM",
  "key12": "2R7CPEq6FRyuodsVxFwvySRv6FKKnZB6D6eCqW3PdEBbwSoFRXK8oUJuni8yPqArpyfR7SjwCubZAXk1pD51nSbj",
  "key13": "2L4zD1qfFazNeytGHMiPkoY5Hcp9MtykZpudoK5nX4Zrem7qBZy5cJGD3gyYehu8izmxLJM4iffGaMBuhnKDYz3F",
  "key14": "3zYGZe3gMqf3k1dJGPJwGn5UMZqsQL7fWv5w29b5BVydaXcsW8Ar6qzDZ9ZYiToUKBbAGxNzgL3GBjbV7yB18aMv",
  "key15": "4x7TpKRJsQded6wS57cf9PGzhZCgGWYqxVQq7wPehJ7RkWVRuBmZGYp1f7s8CvX7GRyhbKfPkM1b1qhEBbUnzP7D",
  "key16": "4Nxj5pw9KvH2xBnc4DU4VaEYYq2ui78RZxM11tdEKSWUjTWUNqiuaDswQRmz3a1GS3uyBs93BETJWNycGtUkfqqk",
  "key17": "2kqWCt9YfEpGgAUkcVBiSrCiCGjYNsmxbSqAA5VH1sMJBRhSXLoeFoytFxo69YrfJxHSR9evJjULbJV6CP78ZWKh",
  "key18": "4PJV7fMTNfac8nuzYmu5coyS4JZYrXbg29VjcRgEjJJLfyWADvLtnxG2hs5kG85GSkFVPrHbmNn88u7hNchcq3X2",
  "key19": "2JkPcSfhQX6cGVrVo5d73Xee8RB55uwJk8sVtF3q7utHyijDRd7HDEQkymUjE4PPsoMPRc5XZsuKdedBnVu4mYDT",
  "key20": "3yj3Ex9jrhtNhjPJoGhhaNFp6SrcAgkVTiZyMty5STyL3djapSHXxcJb4xFZoDjWx9QjhvhNF8QL7Myg88fhCjnK",
  "key21": "24d9JFPdjAcr4pmN4FU8hrGspjHkscQm5eBfVogCT3ifvowADaWXXJaXgUQtshDxeqJXbBmAvNHc46t8wmqNkXf9",
  "key22": "39oq753wTALB1bmgLChXansfkQZm3dSnUGAUb6YMDD4N1dG1ZP37scM6pmvAxaXYUv6p6TuuwYsWihiatkcTkLVJ",
  "key23": "2iwrewidSEiXhCbEikQ96eK1J3vhBN1GDUxzjW3a31Vq7RxYTaAhVnYZLjGG7g6nfozaejgupjGuTzDMSbUcMJqJ",
  "key24": "2vFf2MAtSreaJ8hKfoBbLzX7fqCtsJbgwtH2X7NyP8G3gwvAMu8uidnBYPJtkiRGNiqrtsDfSNyUFen16SNkJ5Nk",
  "key25": "5ZAK5C3jzGtCCZ1qTCt4a751q1xrZohAsPLLKUqRAYf6cgREfW5dQYEa6ARUVsphWhBPYLNzwfizTB4NUVGkFGbT",
  "key26": "2PBt8z2ezQbZ4SMAo9g3D1KFc4ZDwRebV9m3uqpcuq7peLBnYUL7GHw89C9AKGx9nDEDHDf6BvZekbTQcVruiRgi",
  "key27": "5tgs14Hc47JeMmrBfCie7gMWioycnS1geKCZNyWJ9iebD9npXCeTso1vLG8Giq6z7VrAv4ky2dV7nz7Bi2KPQP9d",
  "key28": "4A5VWy9unMMWwyQmKyosuFwyFZaVPaufv8RWfobp5WhRoMHxUyXB8XLWyvWyrTR1ku5cKrnETPgx1RXwmYQa3Eeh",
  "key29": "4qiFKPf9a95sPpmPXsqsdJfUhQMy4ce7CFoCY3nuEChdfdsnaAnj3pZKM7w39owYJsHjCKRnVuefrXThkcNZyHCZ",
  "key30": "3h8uX7dLuqPvQN1ymDQaufWv26rZEdezpqVU74tM8bq9u9gYanicmQM2MJCc4i6svb6Gmy4MvmuB3cDnWUwpKxxc",
  "key31": "gCWcvYpmpsVwHLkEA4KVbp1jHNLQjEH3DPrp9h7F5cJT7dQHgbqAdsuogAuH2C5iB8UQdAgUVWwYkPB62YFX1vj",
  "key32": "2ksizeTEPMJADkrtJuhYXC8N7AsqhERwp26moccCZofo4rT3LVhrwNR5Zsue5t5f5WXeeGpVNtmqYkcZJt43tNZK",
  "key33": "56sh23yzmwpBC9kfNdLcgNp24vVEPCakE3QV1VD5L6jitkxbL2ZVqjfcQvfWRWuzjGKL35ks7HhkMpbMwRTpy39S",
  "key34": "jgVVWSxfkBCPQGKsKXqVPshMYMJXc18VEWVomubWUFgriq8DRYBbpBhvXDqRTXK7nrbzXfDjU7zUXkpTFB3eJeG",
  "key35": "4eqxfwB7dAY6ksdvs5uNDaS9jWfevRBpptGqirXfjtCMtR4cf1Jgb4J82KgWos83z8chCrKDGRfqQd2StiBvsquA",
  "key36": "4RHvCCXhkkv2gHdQApDCBVbMQTX173gQGTGm3GPedaWCLkxVhpeGTZMip7bvts5ypeTejLKoZpaAjy6cC3P8t9xT",
  "key37": "2u8qQ5d6WrgJC1BBWc2zYLSDHXkssJehUjkLU3ixCGC553RsvpZpSFL78yHbg7siwaXdqKq5Q6EcxDaChNKhy6ad"
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
