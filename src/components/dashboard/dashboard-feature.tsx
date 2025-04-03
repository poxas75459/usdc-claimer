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
    "2WNcvWhuf7exvTzPHXvmBEUcFjsSMPpNqMc39JygmgDaRm6vqUnwuH6zd19Av1s3FPCVbGBPxvJ55zAK3kA78s7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4buEsTUNEDhgwxTbXAzXnXgpFntLPMPCKj1wZCYRtLtG8vxEnCG1vgHXjYHmAni6akMPg7AFRpLaxkoHrwfeh524",
  "key1": "2ZMcmnhEmXusw7zCjVv2n7kzC2aFRyKk5ooPDG36tWS5outehfddv2NAxAhJm6YnDzzxmCB8LyDTsrEnySAnhUgQ",
  "key2": "3c1y3QrUFbWmn5TPj6Rs9L8sP6UrDjZWYX3gnBwEsLgvRkPs48FYBCsJwFQyeeXYYaLfvrbN4GqebXM55hexKbyD",
  "key3": "2idPVDVPMuXw6Q2VHGPCM5m9jMMKHGjZAHkpuHYkJvF6XnRb9rDrc71iwwb6QaNFZP1KwW1JYZygeD8FYKY2JvCX",
  "key4": "2SgVW49afs6vDv5nkdxYr742uNvmsbT7EqQ9V9fTHSgDqhtZdEniieha7bUgCQMHMy6WLVpB4jHY6rKPZkPwcYG4",
  "key5": "Qz3PPjs3aZQFtDv5CVjgQ9amLfdKNe7sc21rLH1KWdxXqGP6TLRHstPsi9Mk5wdRhuvLbEBJcCPEtumPRNKLPAD",
  "key6": "5yU4pwR7G6ShzhjHparYoGXsyjJqHQmmHiXw51xAKh7bUoTKP9URMpMMHbXZttUkvpq5GLvveHoje1ZGsVrQNuTR",
  "key7": "2VEyWuRQmAmBhVbtZpjyzVFhHu4sM49U16WmEW1G7bqX2ujTZGM9po8SwEZDYh9PY36TcAiRrCB87ATboUG27Qi9",
  "key8": "3HAyYk9F6nfW3TJH4qvZEeJxRT9yK5hdMtgENWo6fYqbSXX1stRPUSVvnin6hGgXke9yqMQ1Z5qkA3XTGqYjS2L6",
  "key9": "4NtySnRaAsEysTzuUi1oFcdruzkyUPZqPXBsywkD4QWJCNdeRTVA4tS5E9Vvh35JsW6Dt8wMT28q3KkaNWRc2sXJ",
  "key10": "4kDnsDKkJrHNdUsyqVsEvmNj1KRS9dUxm4GLL2UjSb7RcVBsSsHp2stHckjCc7oWUJhF7PePFVrjwtwYu8wKZUtS",
  "key11": "4TAbfUyuTGWWmUA75pVrU41WkmqhQ68jzxLjbpSsDiQdb6X4KnZubwHSBFyiLhb57s8PcN6EAHHGjgn2owxoau5r",
  "key12": "WmpNFJxYTkShzhYVGHoM6ExMMD45atAaKb5tuhKdw8nUTpDsF7BXwdits5XxzwQ6Hgrbsvst2jmDbME3hLEYxgm",
  "key13": "4xU4nhnq2XyhBZ22pwTEMUJ5YXBpvYD2NdfPpGB2eyC6VFPPwPaXESbGVzTe3qhMvurqqsLYL8PDjCKtLVYjJVMV",
  "key14": "224tezuzAzcAWGrd8B7xjXprPH17rDzWj1ETAQit1znGraEYpvXBZfLg6RQc5JiVLQLyCwrWWxSDciGWDUNBXjWG",
  "key15": "XuW6qXwvGX73i9mdfUAEfedLccjULEKoLKFMspBVDJ2GtyRDpNF36LXtnMtoe6ibigpMoNkhEsbREvY4HaRaBfR",
  "key16": "4y5iqGZomPJ5q2aZ8Ask7ViZ9tb5MkWmAxLMyK47isGhMqsmSZqpWuF9Kd7iQtZuRXs8RGgEByRX9W1G7opQJnit",
  "key17": "3rRVCbGftBQT4GtubsTRZym2H5yUoFbcA94hiDsmvgwAu2ytRU6cDqAWSMwfcgLLzFJWztVgxz2US3BSsHKV1d69",
  "key18": "3K1WPDujViUtYMjxJPJSHDLynYZ2MxNrygxs5v6KMeJkqDVb1dtNLtX8ft2uvkw5719knjj6AAyDcwvaKeUfG4EU",
  "key19": "RLeTX86399VGRSPoStVnL2dhxzd9Ta523TpX4TQCpHDNKUtAf8ta15Fnzs9aooL7hivepAhQFpmTSBegVrJkR5M",
  "key20": "5coEcqNCr6HiGejcJjzkaCRm7rrHPbwTWsPmCacWnaioU8i2tGqubaHyT5F5io9caU5LkBQqPnpeRbqZ6yXQ1aDL",
  "key21": "3jXZSN8h1xYvfJSfq1yeM2LyVXf5piJuksYB5vhB6VmwBsHc4jXStYxYwRg96djkdLUARjusrrpLrXheFQt4dBdP",
  "key22": "NW9zQuTtR3ViuSwAtcUFtq23WxMaXpAyf8f7tskvNsaUvEALBRQbRbymyzy6umFxyPjzWShrziEhg7ZqY1oVy6m",
  "key23": "GDMJLhTju1ewbbjTuuSv1bCdr2XXePgasyxjhDeC9Em3t9u3GJUTpnECCqnaPE8tvCP587KhF7wWtqcUS3tuNxT",
  "key24": "4D2TqjyShJFmJrodtMcMPWFZW8gaW8AGghJPLD4vUZ5Han4LxziSPWk4hpqvWnkGiSPb87Q68E4KPAAFtRQa7PrP",
  "key25": "4fTuvBz73MbbL2QTTTNQzvMCypAKjXh4uuZnSfyZqE29BBsLFFysvZfUmM8gQ5tFx4yddWKC8Y7hmMWebUfRip4K",
  "key26": "usoD9MK3qNzX743wSR4iQ1Y7HuM96vpaK4NEonoG6NYzW3xoXaPvxosErquDwddkCx51etGCiSQErUNf6N2J8Y9",
  "key27": "NyBUcApWktB68iEuLhH8ptt9KfEf15w4X1rr5BqegzUmiMBDFXtBscEhFGuRjCbZePJbDmvisKzfJUU86JfMjWs",
  "key28": "25yDAjHtftJNjkqYC5hBrAajT5g1zBazrdLi2kfHB4kBHby26ivFe6hZHwrTh224HFnUhTwKNuHpbPCu6MDBS6to",
  "key29": "8zhy1ouy3LCbKwWTujc4D9KVgbXUJmWX1AUhGmfHYAho1g1HDHQQaBhQSAfvXUGwz2TFKzxhRW3Fs19qWLdzAdt",
  "key30": "5YS8Lu16armY7pJ9EKdBrR3xvEhN8AygrGxUMnkHtrPhp9c2bnxwe9EDvd22kPNZEDoFsxLQGGCCDFhAMTGEfhsj",
  "key31": "2txis1sSSyrkth3af8P5LSqCqMswNpZKRE3FvdfP6KUyFczFvPVbqM1UN6r5qPGjsp7tgDpZwNo6G3LBDBFPNEpU",
  "key32": "2crrGy5g76D7WCe975XCnvqZrrP4bhW2pWMj88KBJ66D7u4xqBBmJ6ZM55wuuYBvJu3Kar5XnjaDdtoiVceyrt93",
  "key33": "4KWr4ytM9jEKtt9UUZ6udMKu9VaMz6rdSCKXrdJfNkqP6qo2f3f89L3RN2BvF2z37Rwg1LSBQ7QLmvWDceLqrvmb",
  "key34": "2AAPhHpBbKiR1X6aPCRDubV5vN9PW28xTuRfJ7DYASRjtMi26kzY4crW3v6vkrm2WTUndu8KdhW6bzBiswJszBpF"
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
