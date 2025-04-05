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
    "3ceEJUyP3ubjHZU1zXYo4ecw1b9FVqRpgAoe7LGLnHinoK6M7CrRzZvELn1TpvhQ5AH58FwfUW7WSJmxx3Cxjy2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "muLbSY69wqVrP7wqb7sKEtvKNdXvi5iAPTwQzrzAqp2238d3Am5B7ddAUqkJjDKi8kgHcuQVyHCjDkfa3kgPzVo",
  "key1": "57d9B1Z5FnQ8AVwvBMXecuLBDFoLpq6oj2wDuiHC7pzNKHBrA8YLUkyxYZkuwJTySg9CUVx7jZPahNtbUFY7DwjG",
  "key2": "3DH86pc3R9XQTjMtfM16wRdAqvLWDjn5Xy7Q3ekeUsQEdwAUN7iwEuWYNPcyKpcmS5hFEPTVGebYZM18fqtkFsHx",
  "key3": "5nzz9JTsZdP9xFVu8YE5fKwfEee9P6WHZZ2xgeyNXNtgVAKFArayhVsJGXKSuQRWWzuxZwSbyNgKamN6mLzbR6wx",
  "key4": "2hqk3K5C6so3XRPRtkf1cReRKGmQnNBWo7cXuyxoPYCwDQXAPzJCkyA7MyrC1Ti7aLGc1o8eFM314GojAqRCbVKV",
  "key5": "2QfetWi7msqfvmjd1RCP9boTkT4LWL1dZN76cn2YcnnE8CGqWXR84M9KCCupmWcrEk9DWtX6tDzgtaEUNZRAeFLN",
  "key6": "3nbjrhGzZzk8t7Ua2WyVNaD8nmZhgGvLKgE2919y6rW1zGjzFs5Lr1N3xna6pp2RTVQQj865f219GhCxrpuhte4d",
  "key7": "BFrEsmt3dyBcs3W6TRSw4Rf7NhaAgBaEFJBfHxwUfGrZhS4N3dWgR7TZmysWDDwW6PVWzkVzcm7uXCgiqrapucn",
  "key8": "612yjZUpa83hRbFyMj5uNZp5ppYn5BU2d3UsceDEUuQ642ZXnmRZB8LLknjry7YWSZvbx661qQsc2V2NDSLqDo1S",
  "key9": "3PufErG35WMBphP17GFC34bccu7eg2Uw79xG5yQrfFTRunBW4tZneqhf5WWSenX6XHzQw2mwsskBpqxL1Km9CMCz",
  "key10": "5ygTQHNsGzs7R3eXmsZg7aao2BzZK8yoXZfiXKpP5Thu35Sk4dwRCwFNwyZojuK6j8buUkY8dF5bBKqeeaWgVYP4",
  "key11": "3fTG5tzb3gPdCXFvFaDGGAVV3noThQRbDrgdBLr3rAcBgpWBbThzwKma3NG992wNsQdhUBDijrdv3rhACci7QLRJ",
  "key12": "6QZvPJZQnRYys9XdXwmzMvs9nYGhh1FN1KJw3w4sRGWgiwJ49zUerfaRrrrys4gBKReCyMNkMSBNkrouECHbu8L",
  "key13": "23RoVTCB1XTEC2Vf1a4RCeFpyiQqUsLmsZua7yFWidm7GDYKnrnP8BhNnyZQjs4TwsHkEhX6jBx34pb7L23onAS8",
  "key14": "2oQYfMChygzoUpSLpdUiNgVpN2Uix5v2Mfa6GV2YM91FLBc1jF5c3KipPF67eAbpiybcDH9WCa5GEG82D9iHUEXE",
  "key15": "2M1tyNSkDdQkpUsMrQEF9vZRzEbbSv6a2f68uEfuynVhPWvsVgcYNyLJvHpTCKbk8Qmg1dkvKHXVRjcDixEBWGxS",
  "key16": "eKX7QYGDP9Br6b55LygXGAxMh8AZ5e9pSu5g3EsBRFnBdixDeDUw4w7RrhFEoXN8aaLBeCLmGCLQ1HbYYyQjAz3",
  "key17": "2UcUSjEwdyHnbtMpHjLAANTgQmzfbh82vY1Lg6jNQcKPSqm6wES2GLMnNwofMdgFzzXTKjSwzW8HSWG1SjqcxNAR",
  "key18": "cJa9ian2teoph6d4zEn161oesBPTTaLC6wseQk5Z1BYjB9H3dR68iK8hRdx91SXzS99i9CZuox4jofLxvSk9fx3",
  "key19": "2nxwKzboJuVryF11virtSZZYjrekpgvSmus4a1X5Nh8heZezbapNAk9TGmJczZXhCnb7rEscjWXRwXXn5AdDJwwo",
  "key20": "584YCpbAXkoTce3i7SycGASqh3EgiH7tzZ7LUWDo1KQi7qorRZ6LfUQtLC412oidF4hPiRNqKMKsP7co9aMm1ef2",
  "key21": "2xcHmLQ7BuC3VVJQCCQMH5h3AH2XwGATmaRkii7Tjqyd3B4T6jiF1bsMQFwc4ReeMzBRtvxd17Uw9mAQcS9ro7h",
  "key22": "2s5Et3Qxs9pwDAhTb7Nfc5gxyretsJuuAxWhvu58ksRSRyzdDcLYYPoxtVXtQ9QcRdvW6fcDeeSdFviR39yYDN7Q",
  "key23": "2dpW1MSQRFbpFN6rdZDhL2eVT7cntMzsQe4joCqZmVPF16op7zrToXYcmecrFjqeP7ZcM2aT2TsWtXpU4z6GEdFC",
  "key24": "4bAqEcqnyq29HmUvBkumkzvN1duHjacGVDY1CXrR5MG68ewEiaSgs6ri3gmykWnwcri94KJeEzEwj5c7PT3vCeCU",
  "key25": "5dWwrci86CJXk88MExAydocnFZQikWbC2qXZQThzDT8XzSUobg46VJpwLZcCv4piF8k3aq9h4b1Jajr8gJSNs7Q4",
  "key26": "pccpsfTwq16vkwcjBChjjDDyb8xyNf2ffWCNuZ3BmuFWtWbSbPLh8ioUTZHJswxDFGTC2svZ8vzPrmv3g1hUq9L",
  "key27": "5BJUFiT8yrGS1ovh3BVRhQGttg6r3hwYBuJq5bAS59nbkjCKnt767VDDAiCFsopLrkGnGSGAmVsUR9SAHnaZvM1X",
  "key28": "GkW73VEtTSxWNyuFQSjQnigHS6GHVNrn8SfkobXM3ivZwoijWed2XaZmE8XsjS3xLhAqqGswbr32mfFCMPaGki5",
  "key29": "5Cvyo5S8mmWYPwh3M2EJsqQAqxbiyaeutGtbhukE2KgfedCSLeqiZDNyTsq6mn6RgvGJDegX7cBzHHs5cb1vx9m9",
  "key30": "4SU1V2iw4uurFKauP6yHokchUtjkbe5KBUVFRqX3mTAkd7Tq3TbPGDFUYTWpaJ1XqpVnfHMMHw9YKqskSWZzwKZL",
  "key31": "4uRBu5AXJzQViHP4A7mRQHJ1sMfYC17iuNsChuYipeJ2YTsNA3J1y96xoJw49276aKfitNfZabEe4JRvFvesErzc",
  "key32": "48x4A3b3nszxQ2vJez3aLL5BJ6eQAdxzTPfbiPY8i8oySGAjMeH8a8KcTj33bMpFbKaMLdgjyPzVWyUkuf5fjH5S",
  "key33": "U8CApwwycusCqiM62h8AnZ46YDmWnWuyoSmNgmEiHpQ4AQY4iraqqpUGN354KG6h5d6HZyd1tSkJxPL8kBDKzZF",
  "key34": "XMSMTDcYtn1v7dkRkVJrzBKbnBZ7whrMMnwhVG1L5GLamjfP2d1r4mbvTucMTp2CndqJBEhyGCWf8VAS7eUYfXi",
  "key35": "2U61Sbu2o6pQRJiGYiCd5jRndHsxgtNovK82zTMXiBFAcu8QxGzz7KRKe48GF3hu8MTESLbBfK1YHHGvpZpXBNxm",
  "key36": "5PJypTHe6q56iG8CkRmcUTKwn1aW8D7KXvWHLPfsaP9AruGHvAhQX1itbtbUK3G8h73cZgorKe2byiHW4ZCLTQic",
  "key37": "26CcysiwUryo3wro9Fb31WdhhBwV9jteCtS2uBUqkMvno7vnk342PeKXrSEiMNuZmBbkGBardBx9NjDV8KBsbh4L",
  "key38": "QdPfPPcJiEb6VF6uyBRKCcLBh1PP7o29WUfxhYju2VuwVupA5h1TLvRdKB3Vk26bXAENnDedLttv3eHg9uXYFzk",
  "key39": "2xeqSnQjmZ5qFci3L8UbAdaoP4qcHHotk37w32nXaguKe35J4fXGVXVi4KNdL1Bxbngsq2yZtEh6YUaykWDapKxB",
  "key40": "3jMt1pbehvxvZTQioMunMj9qpc6Qu6owQ3oNLBHuXLKdag8HMk5C7Q56GDxGk8hf4Ri7iev6qtL6fEt5qmDuNiE6"
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
