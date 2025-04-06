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
    "2xp2W52ArLESSRy21j5rDPYCWTdxgoiDBjhbYgc3zdJWvZGRTPr8xuRJDG3uPoNpCm1VzEppDUPJJEzrLcCCErEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syvLmH8Euz7TcWdmw3KQhPUE1uREf1BxAt8Jei4gM4EqpvzSgwHviTuEmW47ach4Z7H7fJaimb2sBW12XLg5k8w",
  "key1": "3kLXnfjrFLL2NBaXBWqEzFAdN3mMdE9Db5Utfnt1L3szAqvtScziTmUcK8Cz4gfb2vfsjmuFUiWY6A41vYmGAL3s",
  "key2": "3cTdVx7KPTJtDPVnXDKAtJpTkFxNP5CDte4knD5LWcj1oVLYsMQwyAjozYuheNKzfKAeCUzYDWnYrYuH2TkX1Gyw",
  "key3": "4SPbyFwuyqyyrMFD5CLjAxDXqsEw1ir3n5X3wfoGqikZ2PvUBCv2DsXvmVppETQomtzZb9M9CX6g5AKbA3vS7JRf",
  "key4": "5XMukdzL2AtghYhDWF8UTYsziKE4TzZ87ZfxHADfVLz4d8YDxDLiiR7NhwA5i5Tx7ER72yq9pFF3gLrK8Pqj4EU4",
  "key5": "4os4Gx2XwxuctnhGtidhEyoSYRzjAabmmxQfsWa911ynXSFcTyVrNJTziswpVJyKpt7vY21hAeW6QabEp7rn5KQw",
  "key6": "5syXorr6q3o5sAQ9Rz32pNANr8UA1v2NYrUz1UN8HPoeC56tzyyqwhsyPGrHCWSoXvgeFvx4SjE9MCsz1SScaWkH",
  "key7": "3QessJALkknMmBPYD7LgrqyV4WuqPgKdFwjX4VgzfwdtYiuPY8zJnAtH5ARQZ1zwsTKn5dXrA2cA5ARQVVAQF8xC",
  "key8": "4caDSro26KnA1jM5Xdyh1bsWaqLtYsN1c3nxaaZrcTabmRgNc5P7n3Hp9LV3q87QxZhUtiig22EKYhSNxzSZ3MrU",
  "key9": "5gj7ksUiTHoJ25vz7tLHCfrm5Pb2uWVv7QcAsM2aoaZppvpREJr3meJ1zWpm5uCrLh8X2dbUEuK15M2cCsJF6xng",
  "key10": "52UY1TeGGsYAEBgWwDhcK74xM6LP9KqwdE7AUpFiPGt4YEcKbY2VN2irKbDv95dkx3upwfSzHAATPjNPFQ52Ztbm",
  "key11": "51hxapsS91rjMGV3ULaFrtuDTdDLJ1aHy44Cozsy7VMmWoF2JNqzznVFFLof92oxCpNhWrK5mDio5y2FfTkUysXo",
  "key12": "2RAKzNswG7TTk3h6EUcd4k7uhPJa8drY9vstF79tpVPyPCzTWaHcxKHPGj6qucc3zr4CP7gWDiF25574xot3zBQp",
  "key13": "3ZRQeGDaUBJa77Za9HgbVUgB2nRCB3JX5JD8RwsFmaQ17EHFpmG7Vw25yyNb3RRKUrNK8dNnmYbj4ribknFeyrPK",
  "key14": "23wnponT8LYbWvprPjsPb1Gb6tQT775hKLCHwiQ7hmCFZDyosoNLvA6efXDAioKeGSBgD7ZyB8w7zboXiWd1aQ7q",
  "key15": "5HK1oarjwcRLMegSsmPdnUmXMFZG7LacxYfynR1TvKmDpzy13t3SQ1jJruQjr5TRxbcbi9TaRmrcQJE1EqREv2xL",
  "key16": "qvLkDM73E9vX5DiyCWRVDxb9PLJ5te6VGf9hsYsvYQrpdRWLPQ33VbgFyKwRcwqrL9oEMKGrcJQES1vHYVNRuf4",
  "key17": "2hKjgSsAGYuZsGKp4rZfVMG8TnpCkXL4YjNw1i1KshXyw734XJQXHX1rwYSCojx2UvjVesYKJFs7mxC4z1sV72zw",
  "key18": "3ipLLq2GbmHzBaHNk2dbq4AozJPTprrbFVisJZ117vALntbXRHNqzffiZvewaiajVFwbEa83BvJgkbCrX7UKwcAt",
  "key19": "k494znUGx5jv4nC9GMqVMvaaSgBxNnNZeVENZTAZCuYnxQHSd63QEvjPitWn7682aBwzzhZ4XwY9sd7cNTh7xBR",
  "key20": "42nw3m9VJLtugbWJSEtj7nkp8aMN8k6KufXVtPsHtFqno7WciZicbQZ6j9TmK84JdXCCmhZsHRzLT9ZtPPox2Bar",
  "key21": "3aCVmyUggPkx2JTTBwYsozD8rPpyZ9dgJYrxZeFkqJEDQ9rJoY5oscMtwmMwZ4Nyq8rxTevxuzThG7ciLfi2ZHzh",
  "key22": "NT24yCTFFaQMPG6jHq1byZMZ2VS249GQf7s8UXQNobkVeLNsEVq7HRNsncUpW8WEpjYWbELbwtc5ofn8mUYtdAV",
  "key23": "3YwxkrdMVAmnFXaxPAqZW2xXUrD53jyGrHEbVSKQWF8tDWgwVeJKy6HCuYcrPuRE1maGFQJiqBa5HaffyPpbQZFr",
  "key24": "5kaYeWRvMd46EuzS4GwxSb8boJNCPPWvqxW5rxggg5MyJrRKfJvXw2hMbQFR8yL9cj1eUPCXh7nmcjt9SCoc9V7A",
  "key25": "2m1T8XzsEZn6gKMvooNaDz4ed8Cx3aEMQtSTuj25fjVaUrNx9cjQj3uZSa16ee6Tp4XJ6cV17guEpGm4LV4Y7ktR",
  "key26": "479AEBycCCz5Z8rFNLiSkNf5E6eGAgrrqo8xJDY7z1Q7pZNxWgwenhXEhKaacfFYXezG5zTc6o48PWHbiRyFc4zr",
  "key27": "5SRFd4DygaM3QgUtbCmsysiZeHtLUciS4a9oMTRtxcxoJfat7q75dghRcZk534MhPJ93hpRb6mmRtdBaUyq3Cqa3",
  "key28": "5ieB1dqtG2QN9AqNk9RPYFJKLXKkBzp8p8C35VbfxbuBribFpQKwbbMGhuisWo8ie7Y2qciLpozUbkGw6ujFeti2",
  "key29": "2ED5RswS1R5ayduSYcb5FX8DNNFbsALfRQS5bXVxAvgncQpuifcynCBGP4GEzUMtGRdjzmmnfZPhBRjRAqJqHpQm",
  "key30": "2mXtUbjQM5WmxJ4GgZ3xvyZz1ZYtthDVhLAbZERfoL4UNUqtkrXU5KpWuTe7VEq9ygKeQeiNcRTwpA7j2GyN1WSv",
  "key31": "3gK5WA5z1G9466gZUvj2LZyTnhcdUqWSUJtfrTav425N3x5XRSnyvW5rRnYhNoJYptrnZgA321gRX5onGKr17hRy",
  "key32": "14h7Hu7qaA9SkjoWZJih2wfAnxHpEdhP6PcPc8k2i7Wk95L9tXacWmCycSgjMQT4WcjvDMNpoVANxbKMU8joG6p",
  "key33": "zoZPiQvcFqiY3jJpNK6f3ndPduFEWzqugUpgdzgNiVJ9Rek9nPRY8KNME1xSTcryEj6hdabvE6pM2PhLa93FrUX",
  "key34": "5EqbwMSgsruNY6z9aHaN7C5MQqKL7DtbbRPMGhRb2nHqjB4nvU6jmWbJUXFa7zdzjjK2Qeve13dpJgYVefxLjVKq",
  "key35": "5rparwPdJ8HrEEMmGP147cZy65wDae4mUk6RwVk2TnTGd6KSVhfUtw2k6YV6U671JQimn6rxnXmhYeHUMxaabSj4",
  "key36": "3cyvWNPMQHreipKGyq5ChUTh2zcd6XbNgbg434R5HGT8eT6muKG6Q7ijTHawrFUMLts8hq5sxyGFmjeLfpQvwUuV",
  "key37": "2jKQNdQDUgoQJuh2aV25RP4rtA98WqtJ68DDESX7PUfotnUd6GtCVrzqZCr7vqX3CxPaRACzQCsWnF5igXcMMFUi",
  "key38": "2cL6ZUYGkdZZChrB6XtmsPWmE7Y5A8vNyeeMr4J7sTMLQdm3X9MGsvM6HJ51RJomDD8GQcfNu5UtGxNBgniXWhRt",
  "key39": "54t1ZrrZi8qhyCqNzQUnwcUjxJaJjJSHr8hiJ9PGUGVUGfDq4MSK4TrxexHzXYHjCmLuXbVAktqdsfFGLz3qtxjS",
  "key40": "4rs8c83H8FLJZUNbC5SFSNsDDTu9Z9ESjFUb9TNcD65zNdbrJsdw4CEMURQcXWnjRtRF2VztGS2Bn9nbdLszZTLW",
  "key41": "3FSgMjnJ3M9yYpF86ktT4XEGC9WNcNMsKJBC6PVgpV2M8pz9uMR1PnicrWn2M4A4QUZqKqtrgvHQv3QJcKryffQZ",
  "key42": "3wfiLxty5GRFK2CSvpJEKSFMGt5WAyfiF6b6SnDZf3PBubAeduM5kQPEoM1db5EBRAzvmPgi2zu823w5P1C1fJD4",
  "key43": "r7efZkACUnNrtowhjqrBtzeoiRyXnUDC8Z32bV8t7ZDxCCUruaEK3rxKrbxgLebX7zihYF7tqnvieRt8e8kHVzh",
  "key44": "DB9oboJ5wJkkf5HytVL5q3v2uBiHkg2mMVDrVEVt6erGxJzN3cUF7FhWNDnAM7CjT5H7hsPWUXUntspDo1tY5ja"
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
