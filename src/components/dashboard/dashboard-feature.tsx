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
    "3qifKg2aMVqzG7woc19htRR9ok5RmRiphTNM337Vtj9AYy3m6Dq4QeumuFDSCvrQE8ji59JHVtFgZcZkDfhqSbTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43LsaU1e3AZb23GrSkuAehjVjBAFwkNrKwpd72CmYEt3LH8j3WFH7AyuNm1oFmrB6QgxvtUXj2wfJnQjKiKGTXk8",
  "key1": "9TvRhyq3fybhw1tJuRTmtdggvvZJVWAZgjMRAonrcBZpTFqViRxUHe3PKTb4eQEcGrwLqBaSw2pnfVtzxjtt12W",
  "key2": "3Ks6dJFKZp33aKJCKvySyAwYz5W4jLGswUNQN7DmjhUAuFGVmTr3qDYmGePPpzZhvv6CEDBi4PXRub6RnWgBRJdm",
  "key3": "4z2o21teTweYxrDqUVEuWvkYfSckvhetQr7NbQPLFHahFTMxoMs7nmhnzRogF7pDRi3ccvFT7FPiHpabNa5U1SW6",
  "key4": "2THEM5WayTSFGja35aHZQUm7sJrJTWxFgsC4MvCQ2s1rkCHDwBq8svegR8srD6oUwC3Q689wAhUikZfySeVRzP19",
  "key5": "UzAch29BzHBpZ5oULiLggWJH7BbS8g49swxLGuqvzbYgqnSUxeTatq73cB5DLE6b2bHaydcedVunkq1Yv9jeYUY",
  "key6": "66tkqF2QiCCNUnPqoEARYKqaJ37RjwsoLdpNs9KtWpR3fr71rLGgwm5m3AscVWxbcEcArjNbwFQx5FNuJupxfhx8",
  "key7": "2MpAPbAF9UE7HxV1BFm7iRBFfBqoNWP4HBkcmxxvPz6m9zcE4UnjtsmciJm4WKjagsjuNPeDFiheWXo7Akgp5CFU",
  "key8": "3FJHLwJuHYW1wMB3VVTESgFDv3nHsWNDCQdkEABLSFrRoDg9ibcGgByd7NAboFVN5HcKjPej4LyKEVFmfvSA6i6X",
  "key9": "4St9YyoZQCeU3s11DWmQDLUpFAJdgP3Z2VwZYQtpGxUdjJxRrNYzrQZ45hB6FqiQvNsWP8YDB2133AcqM1AfDqRY",
  "key10": "4B1PEba6MT9hCK3XYv1PxcNXTTH5ZTUeYcGkWbA3YVfurVb6GG4q5gZtxBHthGSxuHXE3PAurqSzMjwadfsbeEQs",
  "key11": "ZwBuApWWCRYSfEUtdsCkagzTf4JHkDcRWLXTCs24BoDCi6824iHTa2nBWhyLZHvoCz33WfhFyXVd2wtx5rqPHLT",
  "key12": "43sdtxX9o5qJYwvSUimk3TnQ1Vhvhiw4tJpcpua6onseJrUaai2dTyjUNnmCvzQC2moDSoWbf3C5wrRJyxFjbLTE",
  "key13": "4JVqHbLdvR8JATzaMBfZbgaoWesztJn43vpYyhhD1CGCY8iowbNmVnY7kfgAPTRHtDMPhWrfGVqatMww3AZ8E4f1",
  "key14": "H4qdjUQrkzBw6pVahiZjHVFEDmUajgo6cbrDKjRZ4czekTLo3Bu3VTK7WAca5mHsV8Z3sPB93WSbAixzJtDTPV1",
  "key15": "4CtjZ5QARzkRq4sCGbVu8dcodCTNTXJKfZGRKj1EyNeJhfiYueyXUKZQcP9i9ipRgEcsppfYNDtYFiZgkyBpWpKF",
  "key16": "4heaMQiSjSSDDp2RNZTtgpDADv3VcvDm7n4bdCEFV9XXstHgQFpxpwWkt3yoXa6weM2n9VRPXAqGRSdTzmdPtkZ4",
  "key17": "5VgKnPx85g1wJN1XyvHLBxR2JMBzvAGt2xtcFER5KfJWLZorLiz3NyHi9dFp6KNnghnuozacxcq3iNn87qRKH8gk",
  "key18": "5JXb5CTLpvoeBLLJ2t8RzgCZFw5kn4kSyxAwuf2pY8aN2Lx4M7PMd6fzJ1Dp1obaNcW2usTSWCse593bPAmpbcd8",
  "key19": "55HRFQHBMMRJ5wGBfPBTdk42QDeuzMdTB4uaA5zXYRFyjPf91uAkLASknDTBiX5W6rRZFqQqUbSUoZAGFwFHsfJS",
  "key20": "4uvyUf1JgCWRzd1LTW7xbu47uBuVekFDMJHVJvAcasyFpmJK2A3Fjx25YJUhNefBPV2BGpVddJYnY13jZjKaJfDd",
  "key21": "3wjzNmQBqWt9JxQY2dd18nRLY16QrWUdK4m36jzZ5feeyAwwertf8NeJiaUTCkWwefF4pJp4ud8k2bUVEaqFyBgC",
  "key22": "5aQCvGX4mNCq4qsTmTnp9jtwHcAyE8mssQfrQVpiqa61JRQdJtVz8tF3XEP8ZNvC7a5fjCTSJpycLqcKQ2hKp16L",
  "key23": "3bMygJhBy78WrYDcyRqMFGYtUnyC1sJ8tk2KMrNqpTcYSUspGNKqFkRPGRbPMDY1n5L2t9xFtwM4RCF28ytDY858",
  "key24": "26T647kr7qyjcBxeNRzA8t74PHqEik1o72JW36pchW6VqMae1W7ZJtbePerMtxFxYxeDfxEGCcED996a3huTuSf4",
  "key25": "m74TDDxvh4ki6yP89oVQeCsCiYMQzjFzAfQvNE4FCYohZpmW3C7dSDCQCVwFwMuvM8dwn2aCwQ1jt9f9woxv9gi",
  "key26": "3tABP7CGMvVuTr9TVieaUiHV2ZxtMWFaqQXmZaWAvgdzF3FqX7DHgq5ameCzcL4HKq7yGcoz1e3TNZ9JfmCARc1J",
  "key27": "5s8DenXcQFArBpiYmzD6dMqx4i2R7Bd1ANQT9hKY9Y7xYqwaRSLR2YumSnp3tUYC7HYWGrijcYfeFrSPaFcCH44m",
  "key28": "4sjNKNi5iK9qRgdpb4u2fnRfdUTmTia1pYiY6YNcrhJaFtzMsUGLMAky3VPwXHQm32jmZV95rbu3w4yzwDCEfjBX",
  "key29": "FHMZXuvjATNWDgftZFqrBtTjAPDeugvaTCZgGSVjQy25MLTuCU3VaQdqGSHJhmhByrVNvNHRzpaR7PBEPD3mVhe",
  "key30": "4oFDQ5sMG4Cph2gUUEG68YpZwDPaHeZTfptjrgVdPq98D8HE9iHNwvfFf9unyQBq4CaZk3PsXuszwqavyJpf31zQ",
  "key31": "b4xYfjBnCQfyPeHRA7hg12mrqETYWQLNoMxjyJHtDKJNwkk7AiNqwXMaUGXpwDsTSFBTBToaZqAhBksPnngzGbE",
  "key32": "5NEERWKzs6B6YhR6WWQvPBKwrhFqLaNVB4v7ji4vykEwDbVipGpbfFenHSLiRCCnqWCFZhad6bWA5VJ3EHdKRP4H",
  "key33": "4X8Mib81D6mb7ghkTYchYchMJygTipifPokN14jzmPUNu2BRwAteybPVym3h4xSPacu6nHWC9KyNwWkfsHQTgwgo"
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
