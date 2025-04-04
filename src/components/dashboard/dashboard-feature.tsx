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
    "2r98rj4h3X8PEb4nktSt4CqbPAwiPT8odHxjcdaZfLA3htcaXX9dWE9vgjYH8dH3dY1yfc712xSxTEzKxcUWKdXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ji6pmaomiVr8gfi75LY9RizTGPvf2h3jJvT74yT9UHak7XsxZhs8y6tF9VenAyTdLTDqLpmxnbiheSVE4wjgHUE",
  "key1": "4AGBoTUxwRFVyptD13e44fccXAKYe8fGABPSpwgmAXqCnHM17T72ZjzjiCQgiNEECmf1xVi8arQnzJScrCyRvzMo",
  "key2": "dyx2bZA2qCNyev3pkQaUKtykPT9DJrtnQbPuxei7dGo2JELw7QqVza9PPNbSNhqxmDhF75pQbK2PkCyMkmMY88o",
  "key3": "3KKoNv9xvVxUoDvzWGN94SoC21FckYsbtyPYMk8VZA7wkca7x4b55AguCficAoNhXYvrEwio9BfotEzG4t8pqJaa",
  "key4": "41VhicwieckTygMPhv6WQxXvi2ZUUdEVaRbii4hptqwHAhqsUNtV1wYoCgPNMNyUgvWuYDwhpStwxwhZTCWcWH6f",
  "key5": "2yKzRdr2cxZTzmYNnvPEQvXGFxBj3ab7qxTGks1yojcyMCUpBpq4mnrdbgaX4VeBwFzPYg4BEHpLi4S4i1jEbbgq",
  "key6": "4HYqcmqDwAAec2URYpUfgnMCskB9smxuYpEbKo3U1a6E765vjpuhLtoQWtiuucQ1U26qkLAeAC4aEwrgMEwCr9Jq",
  "key7": "uK9D6vYrxzk3Kt3zRtoYUz3CLzEdPTfddsHaNjTKWMTaTGpukGdR6G2xyKk2kUm8Pyp4ARtJubSKC3sMevs78pP",
  "key8": "3vyfG3KywvZEpDANnHS3GpCFV2yiuWpCzJqbq3mQCCNfbF1Aj9tvCHRqDbvUSLgQs7UJq3hFZKpSrH14peFCsn7J",
  "key9": "3LcrHDk5b3Q7GJvFvMWTL4bxzs1GVdXxp1iXGfrHDkKbD61mmYbhtKPWnTfrin8CqtRPE3VKiN2zC1i2ZgJNPuWs",
  "key10": "5AM4WTDZtFpR3fFTSrQ5fifXVtDegD4dkfVTc5h6whgGgLHU8YVTZTzSsfdwKgCAvbyykkZA21FzihdYYr2gmCSR",
  "key11": "uahNm6YF2xuXqvAK5szgw8ysrnoqGhJqGaD8eHq52WM8qZ5NVrkpex2kjQFrDpH295gMzo8mR1bZxUnfVGjpRoA",
  "key12": "5tbp2raQdsx2KjtYxhw4HchMKGAsauXcqsKqDFkPyhxXyAe57NwxfwYespjp4VnsWELr3gkpJpji5faqBZKuFJxJ",
  "key13": "2gmngxztdJ1tEu9RMzmxfHsKvzapEAvaa49sNuLDpTQ9uXULYHxx9qbUdunT3Ci7pBCwiWokc8jtUiMV3ecNsGfz",
  "key14": "2W7TMEKdiGCXF6bSxHfH2JqMdPMREy2mh7hLgCmnVV31UHJJc2VMTLQeJ7DVaHjRJTEbiRBDLzq4Cobka4soKfCB",
  "key15": "ca5cWxftNWX3LYipNLijH7uBjkGeVHCZTx2Yn8WK5547BHFa8FCa5mjemwnM5XXM7pUZe6q4ZLsXdeMm6dkdwfc",
  "key16": "3BCKcoXkGcMVa14MHRJX3VE1cyDnYMXi9a271BDmcs4DwFqLiMP56kzbS7Tg7tKipsX1as4eJ87CsHjTUb65ViKt",
  "key17": "48MpfGyT2RVUfZPvT8pRQgZ31pgqcghW5uueGM1ptr8NGLoMAit9gwBMRKbFmghNVsUV6ajhmcghbsYPSq4YmiuH",
  "key18": "5avcAteDBRJwZwSdvyUEK1rGg9BJaPdDK2Wkekj1mp8fs7hYGURTDsPY6Dd9oeucCrui9EYL3BkSeFdESSbg9Vox",
  "key19": "3FBwfVzbNch9KtWP5aQVdtztFJHLK6rgru2wZTeLw4kb4mRyC6SzEQDhKEvQsp168WGDSoaTgtKBGNDimmBrQcAh",
  "key20": "4kQScyDzEfQws879J5YmPW7DqFtgMshpqc3TNat5mPmmeGtnY4ZHFHsdGMfNpFMcVpSRzkxMnSDHUJ5vVo5X8D4G",
  "key21": "2kaeXf41ph2McDWF6sVXw6ddh33PoZVJiVyqG12ziiP98PS7DFJRqwKsFD9jCvD4Ujj1uW8vA18NJdPn6jeGMZxD",
  "key22": "4kyWbf8tzHq19n3ydbK2gQySAbifLoNf48FD2jJTeYbwyUSbYPV7kGbyeMKbJdDHcgrgYj8dgUFXCobsRR9EYojB",
  "key23": "4gNXj817Rqo7egSu1AP6ydvpxpMvqc5i1WNNmXuDQXKjCsMN2cqjjb6ZRYf9uG4YvTr5a5opWCef2ysaEJW87vwc",
  "key24": "LCrme8eAWui6pV1P7gPENWHBX99aFATGH5RE4ULW638bZTL1prquZHqACBBWeKHvHXuwL4q9xtJxyRSPr855a1F",
  "key25": "333fdy1fFhMKHjWwWpjzd5hox7R66jikcau6ZPnf8hV3jooqkobzjpjaD9nvqwG3S3et3PywULrhapTTxDozxHMZ",
  "key26": "2UDbthtWsr7QwBymk2KwweofV23oDDDdKoav8QhSE2KsbnGr4EtQFEdoT6rDE6waw1ht6NL2DHsSPLUuXDHZSeV5",
  "key27": "2RqpC7LMvCsfQiZW7wGPui12381NHiQGCE8yNxb6FcKavnvvSnnBFr2LgskskJqmj69DQmpNCMc4ub2JCe53Gg4A",
  "key28": "4tTEhwjdUfQYSkiAvENQUF7AQqvRCq2DSwiMrnzouZRmCBSNQBxkuXTL9ew25jrUoweVzz6hEse7eyoz5BvyPG7d",
  "key29": "2bgZPyBPaRhybKj4LFT7A34k9XJ4wwmXKoEbjupcZeLKRG5QCmeeosHha8m9mzxqYD2ekjPq7YUWqYrvQNRmMdud",
  "key30": "2AHjLLKeWC9XdiUYxgLJriDg6xFt3YhLijT52KFJvgSCvL2fVSFQM8jemYx6raZe5vtfBywJaUUk8t8z7fgDKaYo",
  "key31": "5QbAre4gTFs6qg63Rdpq6i3mPvEwuiwDFYKjRnBHnMWuAFfvPTUDX8aV4fYG5iUFpqygnBtooTkGptB7YBBni9iS",
  "key32": "4JirgdJddmkgmysFHWjwzhgoUodGjeJNnkCocvTkB3sRwpY5SBsqKQX1g3K1nnvLUU7ZRiqQWeKEBwHZfAV8d7Tk",
  "key33": "BDKsZAbd5PpGH7qF9YB5PKGoF1VbHrGFuPhn3zdeSQvJgFzTvTtV1i9tCheL2cUFryeYTiHEo7AmtWAsw3ZuHuh",
  "key34": "4uvpG5LSknJVjYsTMVHviNRZNvy4xDm2BbfuPRZi2hW1fLqxkqKcu6PkyxNGsyENhtQ6WJUvyXC7Qpah9Asva4Z4",
  "key35": "5PXmNXuoLTudWztCBJPxie4jvhTp5SDkmbrKafsGLvTyCkeporme8sjSYN2aqTq9kkQ9f57LvmPSDTSXSExBF9Bq",
  "key36": "4GMx1tsvepQ2PLxAWon1GdRCr8uFg6gLyjaGDMRk96Usqn9aCuUxLF3eE3BibRbsLM2BabTWUTYeCFfV3iPNJYDa",
  "key37": "2J5gkivmX1twwm6w25NtmPEjPL5ttYnwmdCZPdARvfU55KvWAFBCGLo4inR5gfT2Pe8BSz1KoQYn1UAmYbZNxvr3",
  "key38": "5LZEK9L3B7ux8UZfYjzycg53zGX3o4vDh7VvN8sYQVgeb3WZkpZXP595kSFYcu14ndD6qo2GeQd58ARJTx5kDBK",
  "key39": "egGiApUs26vWtqC61PAMFDXFo8k7EvgRQeLmFn5s5Mg8mhw86jg86aH4hPvjpnMAHnpv6cSp9NhjShbbq4dKng9"
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
