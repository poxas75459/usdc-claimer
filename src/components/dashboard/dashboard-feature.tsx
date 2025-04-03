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
    "Mqr4VWww6JNw2PPDmqeNXw1t4yAYB6ny1n6pdYdWYuW8h6sRYYEaFQ8GYMnQMFhT8f25kxVAGH1MpWHaC3xErwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tptLge82N8Md2cAWrCrYVScoTGSmstL8dNWj6SRXZ6QLZEwKbjocQqgvFJZKarYW55g4hyJ7zdXstncLfeBoxm8",
  "key1": "2xNLPyUfxUJTP75gaZuuUMiqCDjewhMEVxgGkmxTVjL5WNfFZHZ87NFFgxmACghmC66J6soQxnjaMC3fsKCwjLV",
  "key2": "42deNYccpkwtVPMBeNV9BGhhgdUgDT3j5GniRgxPdzt6rRDoatoGvtgvJiQ3eXiZ3Q8eH85pC7c27HEFaWDjeKqU",
  "key3": "5K8wWQjB5ZEJhQuvJcCBPRbgoAfH4PYUq5cvU6nBj2SbHYWSqZVxVDnNiJcRUWcdtX2zZWmS5B1CMssYEbazXd4Z",
  "key4": "B3aabofNojGkAZPNLgC1fhUpFQUYrLNJshAUFRRFiCptG1WQhdVWUdvxKmbCcwk6K7zJ8ELKoyoEdjWUguhrqcm",
  "key5": "3B32bVrWETf4kKzHexJvzeECEbhavxcREL95hsEZiUyUb1oKdGB185pTpGWaP8yK1xtupQx58ZaM5WzgCqxGuUhL",
  "key6": "GUfwA8qqp6FDGciaYGagx6Tuxy3CeiKNmdfiujfnpr9PAeXFCDwpw8E3ScQTEezWJ5HQ3bH8taAN7JNArq9b6Ty",
  "key7": "qwk2JyYjDZqBGb3gTcyvhWLeEDqdjHdahL9UXcu2HQmAo4VYp9LbeUEpUMKrdEdpTG5sEQWQn5ctYeQCPo3Ajhg",
  "key8": "56EkiEUxJjrF4eUciNQnyEAn6T2yVhBFYYt5EvikTL8XmRzZ73pa4pCv9upWv4Th9tGXBqQrACVWvGhtc8pTZqgY",
  "key9": "2ZfP2aN6MdWAKaKTjZTdNUrHvPomJnFcDkdpsCyEsz4kamhLSUEXt6qhpDCywHpXJ33VTdpnrHQzzWxru2muTXHy",
  "key10": "38aS8QSq3AJvhtt7n4g8qt7vNcAXEZDFJWhK8mYTeH28i16tFTXUpkmXAZQgSA17qXPEtLZ9vGYgXQGHxUZeDJ61",
  "key11": "67LFQ8qgtMRAudfdgbLGuS5YMQF5cM8AFG6S1pHqunFeVk8j5VQ9MahftztxDTkFn4jYsZS44dwbJCXsbDGuTqAF",
  "key12": "3yRDyJdgJ9b1prS89HHbn7VU2AL5gXd9nrbtKzTfNxhRizNAXCnAsPbCZgcYwgZ3NmcGUjXswmLc8SY5Ktkxsxvm",
  "key13": "5KRjuamzEjeByVLqXB2rhAbWqUUFyGqhWFz2kiz5GwkaRT3aLT6LEhBAnZaqovvd5JYXDkdvfuCnuxCVgmkjDLS3",
  "key14": "3xVixeRQw37ECd5LPKZgE7geiwC1nAG7RGpj1ajoUzm1HYLUze5Xsp5kp9CAFCkr7pn4AcJfJ2CGAozjT63QtDoF",
  "key15": "2YSMnkSoQxqGtf18muQKYhv2qn6hKx6pNFBSs65PTMo4ih4gtcYCbTHfhWFrroKeSKeN2svaB11zzSU6BCmARRui",
  "key16": "4Ddkj1Qx32n6M5GvVeepvfx4DB3tuoDznBjsf3g8k2xpSVWJySaSrxdDBz4tDjuWtpbWJRd6KxRrFCYQwFiQQdwZ",
  "key17": "4kUa58Yq6DEJKsSiwKrkc2d7AJb4MhpDj4BD1DfqoYHgAGrpFPMMsjeLKuZLSqHjZFVwFp9NFcqqWp4GL61qgSB2",
  "key18": "63AGDKN5r2B9uK4NgqMMTRywYFBmYwStu9zftbqw9uhP3urvJDfL48eMabCcgDV8hnFL92jAyFhRAHR4cEgHVtiu",
  "key19": "ZMaeM2Jj2PFMUpiiA8nZrkhiJZyQDzpxPmJT8pU1S1gzCvqnpRskhVtBW6M2M7XBhdAtv5MTcyNtj7LKM12Qb7u",
  "key20": "3GLdV4DugNuVEGNhGB4sr8Ta2apjVMZosg8DEQVxWc2xBqrEMiJaADsEB5rfiFLTmFCBi8ZoH5RetZzMEZfv4cra",
  "key21": "4ZrHB2kEgV1QREk5VxMZ4KJvtBfCP7sAKWZA7vdP4cBqh5oMMwQ4vRGDpVVDG5iMYakxrxTcJ8GJgr2kH12iMo9t",
  "key22": "3hBmpa9XmV46HK4UaDbpDFQ1op4QmpoYjBKpi9e66NRhmJ2tALgBmnXaMfaimF9ZnJFK9RGmZY2f1SJQttNCjsCU",
  "key23": "5CUXvRoyPfVcZUqM6TrrhqzSw5ETk8mwkbT1dCcZbbcsn8ofBPtS6Zx8c2hAkWryg6d3HNAoNNqoVvdtRrwkidLq",
  "key24": "3pwEKo36KG93mq53wrF5m5AdFvxNnXRRbn2YUJ8Xj7ihUK7eEKy3GBGt6wMZhzp6EXj8RN4yAwUJNBMycj2SY8FL",
  "key25": "4MSiK1kbSBheKs25p76PmLvTejCBkQyteFmRSKKEGhkqTp7yXSWt1rk4N5VmUceNrPTucYgTT19bTeUNQybXkZ9y",
  "key26": "6zTfD2hgiZ7EnpdafdMUwspqKEHkt7MQQcj2QBFLb7frxmNiT3xK8HqsFAL9qgahjZG4cqkbHPEjKDE4SSv4Hgm",
  "key27": "25RfzFhQjaL9PnXZNzCdyvL41jNT16N4VDyBX5t6FereUS8KoGofrSBTMgvSJAaJhBWXL1Kr31rAG8JXVLFtxvSx",
  "key28": "4JVq1KSxUwwNmrvNUMtPXRXLBbk6bM5jZFkWAJpJosm1qqVuvUwJaM4182kvYsmzBqBXVqTCqHLBZkTNNQBVbFcR",
  "key29": "Skom4MJTgPDTjsvE5rcgtcDe4T8X6xn2WttG5NJ9d7Vnepp6byLSuo3sRoTWy6bGPuxeVuFtvXCnp7wFCq9Qv8q",
  "key30": "5GS7vapN3nV7D6bjTDKPSLzfpCQxayUavpbvRFeVknopJE8iqQaiWWUWk1XNMWK8wdg4HLiGUJNB2Sy2ix3pDbiC",
  "key31": "2tFW53xGVSxMDsuMgdRkp7quP7Q5uAsDsESj9k7BWpfcPnKftEm6weKraNuzM5gsghYB6HJHXp7aHyrpVmwCnx6g",
  "key32": "2YKjgnSz1AA9nkhvgYGNxNt1FAyixa2ecgSfovbWscAKVJiFRi3UafrzCsqju1ynfahUvruidKPKMLTxKXBtX9MM",
  "key33": "ZvL7EAQ2fTz4izMVFNzbw7LtDfusbedrCJ1BardFi7g9yJuwA4oVTatkAc7K2it1HMMMgvg3n97wjZM5aeWP6cP",
  "key34": "AMJJpy4PoGPpuSiwk33NntXJZPBc4Fp1rUuRKWecqvGkkxKrcFb9kEAQUz2W1HBaWcBDchDyR2jPjUceJNginxa",
  "key35": "2BgbtmdQZhtWoEezd1XvmnpEoYadxdzxRfvWdwdxs75sEgivFw9REuZQ4iJ8NeRaMpHMxUeKk7tY9ykvKxoGgEXC",
  "key36": "3iFTv71HEUYwfJtbovzAN4Wx7ixD5XpUppANGqZa4ZBMBiKQgQdymJM27uMJnF3r2zZwnwZGGDRt8UfLHdYttkEo",
  "key37": "4cnh17pdEpjSYjaGaNpp4ByzyjT4DQBFkPNn7jwddyqmGpGEUDCg7NCfKU4UgVhwvmZDp7j8gHGmanVDNaA33Khf",
  "key38": "xd9gJu38gYpo4PWDRHXCVdGmoPersoMKKjZ98am44YsRjpxdxNW5MUedqmkbczjyP4yYXjxUvWfjXgGRALzQdxS",
  "key39": "2vTky5zPVHj4RwsTJuezEvJe2SSkTNf9myenBbHvPGB5fcpRKz9kqnCakXLYsWbzhCbyUhihtb6MkBUSjZvugtNS",
  "key40": "5j4zTzc89b8e8f5dDpAKKkq99RPPGfMSB5oYS3sCWmnxNhPk7Erx2udFhZGuC2i67ubDbRh5Fn5zVPyxUrHJCLHs",
  "key41": "5U1qEYM8s75ptL2QiKLxj5tgR8wxVW35GuPkjRkUz7C6WPYctJjaf65kKU8x2kSF4bj1Hg3b92r8bMd3DTJdNdCG",
  "key42": "2S85976oDHnTv85PwKusdUTg8uwQgTgqRGEV6AE8YuUJAGQ6rf6TrzWP5XUytPnZYitogG2Vv4aPiCDjtZtPnoLP"
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
