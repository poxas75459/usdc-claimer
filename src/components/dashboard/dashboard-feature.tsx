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
    "phxLaSBFRrMYR4bt6U2Yi96fqBLYK1iVhbTvK6p8KpxB6njKEVC6RtbTvVw9RMZZXe1cvezmjwpvmiWdKfXRBn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1p7r7y7RYJ2SD6e9HNbYQe1MVQNfmgNDnoLW36YykREh6q9Uyi9vgpDnLob47rEFe87UVK3LAW37YskeR55Seq",
  "key1": "5WmL2CzzoTaYvQkf5tE1GemkfwVkexNUA32i3rXsYQ4PkQgP8SARbMPP3cdb7v1Ff9mazQeniswSaGsdiYKqvSqu",
  "key2": "4ZGpLcuNxMpLYZkjQQqTbV2qEHGM5CcA3EK3pPQDaGhJrBu6km6eK2esKipVkTDGYSPzcMSkQYH4AxcKuvnuH2Zi",
  "key3": "xzHxnhBA1HnH1HxKYNsBuirfMekbFEfo82e3uyGFy17svpnLbrbHrLgdBzMg1fa2qvDGax4fvnunPhNTCueHoVj",
  "key4": "UhqQpABQwQZgasgDB6gsffeJ4tGeEDyPVdNsr1LNCd49Bf7VEkJemPVeED9xmWcpF6dgEhgDYWaXBb19WHgGqLW",
  "key5": "vpCRcfmDYXcTahgQRQa8ndWXzRbh69wVEhAwdbZgppZrQJj1mwBWN58PCNZWXHyvb5jhbAb8WPzCEdY7PFzL1wS",
  "key6": "5SRAtZxkddGyWc3q7d42Xe636tsDvAfEY5gEwCfgg5KTAJXZjxWoj9jy8FcuRek3KZgKjs81bgFnQnBcXjuMpZ5g",
  "key7": "4LSY2TYtvGZbNZcvgAMhcuJELtBp4kqvZGn1L29opmYRv2By5LS4oVsXHzUoDPHjJ3NSreGxpSNzLt72rM3yVuFZ",
  "key8": "4CPyfcH45s6vkoH71EQ9P1L1VpdvwLtoXEYNvU3BpzshCGwfcDm83kc9kuX5JRyGA5v5srkEZNhcDfV28w5MFq5b",
  "key9": "5zRx6TgU3NJXnEsgJKA1itgAZbtgwxnw6yMfsyGhCpyb1rtpnrg1DwMGkLwYgB7SDtKwk61a5CRCyAGY1sA9hLJW",
  "key10": "2bZKt6TUb2wUNVBoNk7NcWwcQ9DWwWe8fG9xRKpM6sQ4RNXiUFMN43YEV3qKf44WRLpveCEDd78XUGmMs5rt6qPJ",
  "key11": "46ECq5t88yoUgUAcksWSPVQWopf8HtkBdUiGnv5XQfv1VAKgjqoxbtUgCtSBraQBYEifqWYjSnhSTQWPqjun9nrW",
  "key12": "4XMypkKamaoTCRn64bQjPNcs87qZ3PKVr6ueLVc69JUZrXjK7n1uG73okar5jnBUK6Jm5szQFpgRSD2SAkb3iGAA",
  "key13": "53aK7hkT5mKqeXepJUXUX21k17E8qWp7UQ3BxreTPVpMsn2goWxHQ7RNbEv4cSML9ciynCMfgGEKswdZr2d8wBwJ",
  "key14": "3UzeFn6KLPp91zWBYCZRshVYTE8KJD1yixgj5hqQGvsTdRzS55Az6yoqWswJpXyQjmUhftZPrWkSBgkssWy76C88",
  "key15": "2zFqSq2P9sry2upBJuMBL9LSBdSDaxvM9NysdZfSbVFA3MLZvUPXp4KaujGWTJ1gndKa2ZxpQKnTPj74HdiN4Aiu",
  "key16": "wKzXqWwCaaS1tMb4JdH8jZrsDUcaYYGGjdoJsnipgMxqLGagzdwyQjwKoLpYd2sUW4vpiuR8h5RKtKw2fBSo4y7",
  "key17": "2XcMfYRw6KyuU7eE9irGcZMyjFtKHq2NazBDreXdY3phXvhcFRd7Naj4Hzui8tfndKYC1a1QM2t3qB2Rfe7heDx9",
  "key18": "31XacbzkbMBDqQ13fyktLoWYxukW9zMwNh7CMTSP5LJ6FkPZqoikHpwAjUZv4x5t4uir6yQe3MCRCNaPafuMWhLX",
  "key19": "634DDN1gi4fPNT7RHVi4qmgqnR9zLn8yeX76yTuNByeDQ8mNn5i5DeSoU5dsuP7edVo51uhh4VsWoNk97aowU4fy",
  "key20": "67KPimEpM6KpEfvyVRXffRa6NKVVYFtwADZba687fWsRr8rCv56rr2mdtxVv2pR6mq6fbMcBiTLv9EeHfq5YW1DW",
  "key21": "8bG5o6QWtZHmtRhmFKsUTgbtwTBAZKQaTrUbN9c1yJ99har1oD6j9agJ4yNVhfRJugpeb5Y4urgvD3eaPe3BZ8i",
  "key22": "bY9GL5AZ2LajLsYqpbPRhnDLWiLEo5w4k426nq68yobm9FyEQLWX2TzCumfj9GMHeCPBJ5GrAqJN7CyMtMCNvoM",
  "key23": "3QQhgrAFqDDM3wZZjD1TwNWEhsAAy7h6snj6NmVLKqrTycm8SUvcXwbuXiPmDkSgxyQQdZ6ByaGJf1PA9KPGKEL8",
  "key24": "58FJkuZkdiHrkC4zEiy3hGP8YxUdvHZ8RGdzBxqtmE91yx4NaPJxCoj7tyJhHHHPCPgjvrfE9p4Ae4Vvm6jcKp7C",
  "key25": "5gNGYGXDkcss5juVqNSHu8fiMSsiPW6YxFRtT4ixKLCSPRaPwuyfU1SLkGEQWRYtxAeVDBWZj6VimUeb6qrTBm5M",
  "key26": "2CyJEs6D9Q27wfvW5PtXRD8p2yZsZwwtKhK1B6Bvoym5wrkWvUpGqKs2XKeHcRh7jtV9diqFB1NSVRUmw744xi23",
  "key27": "37MWSUF7yPyKZBgpeEmXhqMFnnM1u54EEvkNhQpZ47VSZr6kdnhYrmRUKKr53fEEAs1HhgG8ET5pPp7crz5Gowvv",
  "key28": "5HKV6hzqr7WbQfeWCoQJVvQBH6uYhfMw2JAAWzJQ7Hxsto9tMNo5Z9NXCSZXSuqBULTeHBwJMunHpSZHcAF5TLNT",
  "key29": "2vSfVKDfmCte5zv2Cyo93oqxCpovPq8WukyKgPAW3rWMSQ5KxgjtSa6j49mciBu2ieoepSKieWeeck3wqPbYwQTs",
  "key30": "221GbRGgpnR3PLThEjGP6mDe9jydKXA2tGNCCpkx8RmnDMmFFCpSHnLr95cNVYGwCgFLyt9N7TitNS4MTKMkKvAA",
  "key31": "4iJSGosj2FJfnrH4WJdzqmr8Hu1Wyx8VkqPdT5rYL25JjEsSckshSMDb7cc4mkb29x9ovRmhUGNvjYTkpKBnbAEH",
  "key32": "3gyUrjJhZ3kbYdCpGeRC4aH8NykBhkTkEN7EMZMMra7rZS6SZLDAgUPSx3fH9Hgisqjtw9U3YNd3VQetxXmDcVyV",
  "key33": "3PLp2gP516fi42VfHNTc1QihdZt8nnXcA578QHjFgHbFtSzhNaMPjhTLfyUNqAxM1yegwX9qDSgd96UCEbcsjvUH",
  "key34": "3vhr3mMrtLbMhHy2bwAJZEFRvEeMUdGprr6LjXenSCERpeHT8rhQte2Q7GQQcxEEnJ3zvBBW791E88Sx5aWS8N5K",
  "key35": "4UtkNrC5ya1pZH9Eu7AGQuzrdNRai8kdZ9JtzZC3uHVSsxtE64JA9iycHYFjB2usYfY3oYRnSZW8jBva22bixSXG",
  "key36": "2czxVUwymJBVguZMsg64eUxGtdD91XSdb1N5avTgE3drAen1QfFPjnq8t1D9NGaJqhafMtfjZt36xx5v3BKQW6wV",
  "key37": "4F689BAr2inPmRqtriNCQGyWQmDmDcbnnyi3aS5UjGSm3PexKUCyVTKjGa2eJfS4Pf9KDWhGL6PQc3bG2Ep7dRpr",
  "key38": "ZgcStHHAb33wAiQtwidRRGmRRwLMNkq4SQ7DqDf4gLasgFXYoLwznuhshxVZGKUhBsgZuUMgiZoGiS5W1z56Ypp",
  "key39": "5ypMK4Thpz1sLenTb9Fjuw36qPrGfq8jRqFLgFWiXFoq9JSWZm1ScPGue56PSX3JV3X1T7VvQjmFBt8CFKCatqsY",
  "key40": "3wPfVFyPjxJCAQMyDTTAUpSY1g3CYVTKysu1czg3kiSeVsWWFwazBaFUCdWMUP9wuB5GEPzDnNr8oksyHbXHHdBB",
  "key41": "3ZuN9Ze7GzmzFtXj3ovc11ZRMaiPV2Nf6iTDcXSjbFyuoouMTtgDEXHaE4A4PXnDjCX7U1rbF4wdaswAjHQkjqTW",
  "key42": "5z9wc5JjHJZfEGgJkzRaCFXbqhycFiMZYb7WBVqzcpD7XJLpvHMz2ALvAsTAryFiRgXPed8EVDmoh39muvf96AJU",
  "key43": "4ADS18f4w5cF3CsUkaC7BGHtsZvfNhMaKnnjVvaC23TBmz4PV8BZHZVEn62H7UJtfpmV3X2WQdVrE8pAx8VzqJQg",
  "key44": "bKn1Xm8vLZmY9gszLokaBUMxdEHyiXRZ2TyxtThBXjgePUJKxBB96ECY4cqEfBAvE2vnStFZiXQz3uUX4TSr6QN",
  "key45": "5iiZjk2S6xq2UKGJTQntzyhmbxLfvJCoXS7A1V3HUiQgGqRie6i7Yz8oSrqDNTFMNLW5PxVQQC19yR6LupvGwveF",
  "key46": "3HiNcu5FsX9r6BXZJt5BjrHkEWRBqgUmRqsbkSWhd7vNFfxhQoHY8h6swxGFCyimtD5B79iYnXjundW99dM5nTbx",
  "key47": "n9jT2airTnJqh2xPG5rRmsY3FGs7m42z2Jo99toau1scTwtGAxYfR1XsRXVMwQoKe7iRRJZwov2B9k2KCacNQcu",
  "key48": "cQEWJYhXZvbRPzJWXsDWHRSYP5sXGZC5s9S6SYrahxr4xY9RdSFKLC9WnHDDfoSGHkvW2ksZUcmLCxorfqZt8wo"
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
