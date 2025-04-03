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
    "2KjmK5SZXGutL4z2ztaWk3o5sRruhQzRD61ca9odnA6zLNoT1w7nJXJqpHVzx39ZAxFL2nMWPhNJfvpTVsUwYFiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29CHdFpXEGUWXRPrunYRxD3vd4d6G8539uf97g6PbDQwQbPF1XMqKkxaX5WQSxU4FxgyZ51ivgepKzp9UNS2a2xU",
  "key1": "26ywhBCA9dtUijkWxjJBR8LrwhvDCVfo5bTYzYwiCnkPTfqA7shzJaU9sB8GxFGFrE17Z2j4JgC3bXr5iCQyoA1w",
  "key2": "4HMBPaSPYvZXSzSTohHz8bZxpM8NEmAwujKdTvVCn4ZZ3qgzv2C7aE2dtZMZaVfRUkNJPum8EtYjWHhZXkN695EM",
  "key3": "5uGcBqP5iq8s7Qc8bezZnXJSzecMTpj4R6t2fDXHPkx6sb3EjEAkr4QK2NTrRu6ysiKc5T5waEFsjx9rTqBMAPDD",
  "key4": "5o9RQZQwdTSrhk8iozXtx2PF8QpL1Y8YpMPU3acigPM2a3SXZzjUykrtVhvqZihEYvPHvDaWu6mdG3aXyKP87mNP",
  "key5": "414MyrbadvmDMgSBfgpLDGiidgutJdkmzs5sZd52GQVN8jEU4uM4fsZ5ikoEfMSk9TA5NomBZ3VvVukdXWekSEvV",
  "key6": "66o5UrUJHE7yMzYhDWo99HXeF5DgVRuS3keKcoiDpwhuPayoAn5HkmX2mv8ppBMCiTAXHfi6QEgKeqKpgho24kij",
  "key7": "4QHbow4RDDy4UkdYKzxGtYW9ioziJyxLakfhYfNqgAJxYnjx9x428tR32EX73vrpK31RraEDo7RFgsNvA7RdHNdd",
  "key8": "3UWPUkvjxgu1xBMb9wW81j7nrhzFGwq8RE9cUzRgSvgcL5hogzPYimJmeuHARzMLxgFBLHAAFcGniwqasAND9ZA9",
  "key9": "47ATSpyMS6GYwDyqfbQeMcMbz8M78cZjBSzytYedtX7RzcxtD6tEMKYQRHMZUAdnyLcjRDzu2NSqrpC9oYxgwpwt",
  "key10": "3zqMpspwqeYqtc6rJehubER829CiAdCuQEkt3C2gvFqQT7WuCVEuQfmTzJM5jSPBtq7oVLr34n1Aspk1PqJAW87a",
  "key11": "25vTKiwVPJLsoyeRZSWkah511e6wFZy3xH6UkLbCpx4VHGLxxLFMJeX7ihmLiG2Rb4K1SVSMbix27thQ6VL4y4S2",
  "key12": "4ohKrpAaS1GZpfngTBTNfAzjBpvahQE3xbJ1JgT56nrKEnCzJ4TUiRF9yzo5wi35GYtAspGRZWvky45sRgUL6RC6",
  "key13": "5q65Mh7Mhdwfr9EzPNz8wmHRbHgy1gkNsi9wh6D936MTAzGB7S9pdEcjFhUxXPhdQfRX6mJTCKhDLEu9GWLZWw8x",
  "key14": "61SqMWPznurCyMwB5tZwmpaz17jS64dB5vigyWCyT3ddeYvPp2dynU3aE3xKnz41M4UubLpGs16MFhc7U9Bym71p",
  "key15": "4Yfe6cYEcbbZQkPUvKCgFggry8cj6fGbywexnoMj1xtodffCseewNgEWXuLvXopuvbb9JHqSswqe1Cq6sj16RDBT",
  "key16": "65CJT7Kk5Hgp8qRhdQ7CCXp9mrXRUt9zcQRuCdqHGfeKHqJR5pjffLTyL4ZsK4KQCLG3fc9CUowPnKVDKUda86gm",
  "key17": "2Dcfd2WqS5Dj3u3R8Gaz65onjw4ZhV9cSw2oZ6U6HNWZgNiuSQisfkjUH7Cy21EXxGnK488azDRWFngeroXpshpa",
  "key18": "5k6uoMfuJe7rVbJVb7AoCAYL5XWbYzixPuqLgiQkcpascyeASDidPuUyWuaNFKFWJVK79DMvJFDp6mAdfE1uRFPB",
  "key19": "2eQzJ7odPecSLGHVeuMS86T6Q44wr3Jim8fb25si1DiQptHYbt7iqN4wQEG31TbBTHKejwxqrEN21kHLGNZ5NSG4",
  "key20": "67eFki6pDt4h4a1LZzXZTnkXAKAXzpDACf92wUYqG9prQCFCFcSThGxEUbUAgRLY9CXYtdcVMXphNvUMaQmPsGJM",
  "key21": "2zVDg9RrUFaMMyxoAzXycytvoMCPjQUgiFUYcDze9GAYZ9ksT4JtY9NxGTv2kPKrKTvFSJ6i9gP9WhL4AKyoGZPK",
  "key22": "3zsH2i9nvz1gfnhkNTmvQ2NXnV8bTLG4w7xPG4veA5nr4Mt3ETbJhv7dTzTdEe7Z1NWZm1d2UayFGWhT5yf2BPWJ",
  "key23": "4cyWeBTEoDmKJrhsMNmwHQGt6S4EV3Uj8TeExpH7b5BpVNmGr8aW2t25dAEVzA32AFTTWTjVGJF6j4uURMoJAnZu",
  "key24": "tQGkjhyKgkytaEQqFm9HjVBHVw7ifhDivgFBLokkzaXifbKyfTzKLoigfEMgorVmi61TkdNhVg5k9XY4ZeTvuMV",
  "key25": "4AGwEB6FAMFPg2cdLHL5myRp4WfXQBvVCSEHFqdPCsX2M2sZ2jHsBJPyUXAj2Vhqv3UFhtw3bdiHNN3EkFGzYwXs",
  "key26": "5bRPSWbUR54j5YdpES1p1uZs7XQmQfGrvRw5jDLsrwU7rEcKFCTBveSaiXCk8ACfRD5U94YYytndwMKgoEmrJ33F",
  "key27": "2Um5XxTGDahuknJLVr9SszNuLM7kr3Bsrw1Zokym8aLSDgPazXQ1qeXXfzG7fa5SXHUQM6EmTNthHK8rYY5WFS5p",
  "key28": "352ZxcFTqEuTZsykvLC9NAT3TymEPH9oE1nJJUXizH8AhkzSM793zqqoecKyFTzFLaBDJxhmpZmkavFgzwBNmh5k",
  "key29": "4WZ2Lq1vgHshusR5JMGCi2K9mMij33qwwfEC6yZHfxiZk3Ceq7pNNWKoywwr1MS97aHCv6A55fLXvz67C3aMHJAS",
  "key30": "5wSn5zgmjfPWJUg1DU46giRsep3FebXfHCQnEfXReYMoKQCPehk5jBUmA5Cs1oUhpgWQUhWFPgEwdH6JoxT2QEbh",
  "key31": "3Crx14fXNA7qMyqbJ6fR6Q3ze3JoLkpMKWtnMimcp8JCbyEY7wd2JL4ThktXwvCrnUuC9FNyMGqc9e1yJLEjb5eJ",
  "key32": "52iFWdhRd7DdMsmcxLcnuhifuPwWzb2JaVBP71nPb9fwEnaTrkE2HcqPLycq6sih72rhrQgzWe57QBWrYvXy5Swp",
  "key33": "34at8eBXFfPXsvgNarRH897TxBxPkxhbjBA95R55CrZDniwG5RHaKLvFZ7ziPab8akcjFB8Y6nz3cdyUi14GjidN",
  "key34": "3UxFXtVQHFLsQKkJxVnVo81mPwazSqShdF3FJgoMmvdAfhvKgF6gY6A6Zp9JJHTKH2aJRaToFXQXcBQee5DbUUbM",
  "key35": "4gejnbEaCSNhNJHrwgZX16rqBvQvcczedTs7QCvrm28Wm4smudSJPGKZX9EiGWkmZfGvuzDvWJ2mzhkcfqM17Gt7",
  "key36": "2DNYSkGnwGJkSaSbtuC7u6b4XgaH6smNoE5tULPFbKzUgBUEAE8TZUoAQ77BwoUdVnfRudzk7R1MSqq5bvg2jEnX",
  "key37": "5Dzf1KsY7k91ahFgu2Nx8H7Pk18LeGcxgv4TEQjK99xfEhGM5AVau2EXXiWYqjjqh7iUBtvjC6XctY5nN7jkR7St",
  "key38": "3KUUAJtJtc68pS5nGsDDCUKshGUtBm83GvAPp7qPd86JXMcPh9nFNcs4He7AYsK1qbFhYxeZkiJhr55owYZJiZvd",
  "key39": "4wn1UNED21t4P57aWpqcbBq5JPVUDi15FLoe3QpNRSSf1TKKW9xtdcm2tTg3hjKKqugnSAZ8tcTskp7YgJ9nKwZ8",
  "key40": "4Do8AXpeLduboPzY23mZJ7Ea589iFCVkvBszPyT4of8VFUmcgQ5fXRjQT6cW4exoUqiUaS31BXin9Ak7wmC618fN",
  "key41": "523guurkPJ9LEPTMzvEbKc94yVTkBdTV2X1anxYrPtNYYLTdFNMSwv2U4p33PLNmZQ63TTVHRctNEL7Wpwtd86wy",
  "key42": "WTU7Am8sUsb9xNfUnTu4vGRLuWbiyumoHJpMcbVKZ9Saw4od3TA1PGt4mUfpifTMNBgeRcqvVzxyLqTXgCnHjLG",
  "key43": "2XcPrkijrmrmNNJaVEBTNmgBGZqyy37RxTxpCsysUMdLc1ojxMFaiqvzpyiVQYR6gC4efq764ckAgHD8okyEdUxY",
  "key44": "UoKq8WS8WUcraeAB6q6TWRvqYEZY8L2USjRiTXHgLYnWVT27AmozSGtKiicGCBrLCfMW8NqiD81xsJmETU4WHGX",
  "key45": "5HpoTBNzXEbaN6cJfk8zZrBsfWeEeTcQMprrVkH6a1vc2iSg57S2NMo8xHNVVPULUUZbSXvM1B6aifxo3ToB3qm7",
  "key46": "59t14TC16tDLirzJXCksLkQGmhjf6JvNptFH9GwXjDhEEoUsKPGsrEUATpUDsnYWb8zBeUdRPt7u25h6dC7sRtqM",
  "key47": "2tYbEwieUnauzG4iTMboAYyRtP53UuLL9nJt91d2fEJ93tuhtt19qEanj25YC8i5cxTihwo3vkH9LSNyMs1MDA4p"
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
