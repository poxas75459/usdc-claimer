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
    "2BseVdetFKg6XQNbz4QisN8Bh3xhugP1vsw5xvcCSnn8cRLL2svDTmWJpWrEdJRpxzMfSB63RCov4SVALC2EvZbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASCzXsaS6AnGiL5WuZ4rBpUvUwR1sBaRPNddcHv2LyYQdiKeEJaJM8RGTbYwXznJGEvwwdVaDTUGYJ2ge6vPPCE",
  "key1": "4HQ8MaDx6sTyNPtfdgBDHGWAVxwZhjGxvKhLm3MVbpX1dfbDmr4Ezti96dL4sM2iiej9CYme7RAoVKfM8Sq557V6",
  "key2": "3X89BJ7myyXBbvGsnvRHkACMSH2GLrZLn1y4rwxGH5shvpvAXKw6QJww3Fq2n6zcja1x6W2oQzs8tLpDt3p6GWCp",
  "key3": "37MGhzfaA4iM5YsAwpJZZgDNrdDKoPAhKNxMi5rnndrqHssM3tdxFb1xnanoS73J2hpxQFJsu8z5vrswdD6o5VLt",
  "key4": "5p6wdMXVeYxjtz7Z5355FrGqef5B7Md9uLLYCCxyGrCuJQyQ9YJ4siTU4ZAwGVZUUGBDjRZeMbbEMTLjEn6f32BA",
  "key5": "4M3aJffXSZcbKnbucPd72YB5MhGY6hDiMcQeMiZv3pTpajEw4j6gn43KjpfzxEQqFWwcrbCispkQSDXkYsdGvj43",
  "key6": "xEPNv9phGZrAfA83ta3tjk5aH99wDRY2iDMHhYjV71JgaFy6HiQDisNPXrjpMaYfK1XiH8Bu8C8xPdak7aybpMH",
  "key7": "31Erd3ZqyoZjyWoAZU2h28mYJtioCiwnWwaQ3nZAQR1SXkxHTUiazfiMWnfoN1vy6NwraLf6qw2jBiptWvSokLzm",
  "key8": "4JxsDgQbSLXY2uGnQ5ECReJJNXSXqamNcvTyNGDuzNC7y4CU4HkYtCz9H1UBPRfBZHgwCmFEhG5gjXQKfzpCooNP",
  "key9": "2fhtKkw58qAxRqHLiVJjbwvhmHjLH89n8VyX49qYK7mkFYpiNhvN82L947Eg7vccQggagFYq4GxRq3YhrPGcDu1p",
  "key10": "g2TY5mL5LXQ8LP7USD27PMh53yc4pydmw8uwMW4GkZYAyEP3m9UrE2NVdFaBBfvuu5oaDKdAsA6X7UE67eHhHgy",
  "key11": "4z6fZvKGaKtrhPyLS9AZToeaC1sk2TRxCReuus6u9fWAEz6t9ZXmXGzHANK4p3REo3omBiWas3yrn5HVADEuXndJ",
  "key12": "2yUhWUGbFVJmyCSznNGF2nwxB7HrcQGrrg41gUXKrUFfkTLX5Sdnb2g4oHciDcf2UMtJXw1tLGrfQaEsZSBj3ZTp",
  "key13": "4rU7xVMizapif7MjX7RMVpaAgfsF11wiXqQKaFzruziXborfhKbbAohausz7RMUHMhYDA98kq7ySxvTB2nHf31jq",
  "key14": "38ZAjUJFxfWQWSPyjuMpUk4DkLspLrHaeXiKqZnwgAAAdBGhWzjvEsHYxYvWkpXo8X6JuQGDJMtAgijRegxijzK4",
  "key15": "dMc79kdw56U3bJNzr3C8CiWU6naxBCk38bqr8dMFBtxuyC9qWLuzBNgSyLoPEUkfe6PHmwF1UPDfWFbQCz2DtG6",
  "key16": "5vD67EqXyutJQHMwrWfBNbrYqLnLu9ffj6TgZCEqKo3dcbEQzjLHMENG9EouUe6Xt3r66WiJQCxZ7ukFFct8N4Kc",
  "key17": "39iMooUGiTyh8eep5Amv52Y1JVghgisL276KnMQv6hj7PqBrrDBbdb2yz5gpXVPcDNbtwTWtZZKg8s4ZfCVspzj7",
  "key18": "2oniE9noPqTisNsrTtbAja98CCeZBSsoah9vXudcrLutW7bDE7FvyQ3RBGDhmF4nSPQ1AzqGo3z9Hb77cWuTdzMj",
  "key19": "2iRGYFMdiCrXFVxeWYHEu45pAkUzwMUmcYFjNLpkL2ZdQ55YxqZKLXEEJ2FDq6yxootetAyfqxcvQVNuY29hQuku",
  "key20": "2JUVgEChmdhbmQYWegSH2fy7hhuiN3thMPJvLsFBzFwST4fNZ822KCqTcHfNpEZuVSyhgog3gAGchRphMcGmKcA7",
  "key21": "3Gw9pLeZN9jztRMY5eRE9c66wgfpbDyvEMxwFUPA38qSGrqVHxpP4EJC6XJcjFpBtvM3P6t9dVoMnSmLU59PY89b",
  "key22": "scPu8gonDafJyL3cgnw32bdwXthiVK7BQ7ux16E9ZJvZyEAQT4qYfF7e9bVUVRi8VUjtvBTcrGv7RBxxx7Fbff4",
  "key23": "473HjYhK9TDXbgJCS8vKjT8xDNCbjkeWs4ZY8VnwLcdhHngNAHU7rNKUQrGJLdvmUM6Pz4Vvt55XmTU9NLLyfUqg",
  "key24": "5rVYt2g6Bu4R8g3aGoSPQiGvDY7RcSjpgAzCQcWsQtn354jQB2d8HMGRVr3jWfpzEAhmaciyC1VKMoC1w6fyVkF8",
  "key25": "2pfYpBJjpYvX5TUwsdHD9MzuYgDqzReHrWJJyXaWDu7KjMJbXRy3JYmpn7Js1unCJTDLJCXagZAy73u8aPrBvpBr",
  "key26": "4A6b2hDog3y1yXGpbu1wujT4yP1q9ZeJxntjGU1ZFxqhUGFZUqxFimYn23pHjA1QfahgZqkFZYNuzYMwjyMHQUBM",
  "key27": "QdStKxUSr1As5bgNyV7gcWq9BLucmeH5KVJDP3z8q5FXPP6LRwqk2nB79RWUmy4hDeL4Jb1kw1DDcUxnBE5CBux",
  "key28": "5F6aN6nZbopePjshTV51Ky2HyWca39iadQ74mEV7B2rFKHdxCvjPNf6JHwpsEum7QzfH6r4GoMyP5Rw1J11Vyfq3",
  "key29": "5631qDrXp9igMQuWbc4uLzgupP5swzTbPpRFowozEscc351s6mtG7E44dgkm1VogH2hSyUarZ3eyZkGUJwMZmE4E",
  "key30": "1Skny99iT7hQTpMvKxPZATvxcA3Sn7RnDN4zDBehbR23pmCh5WjiXEtZGLycN8gaJLJpzkdHZyWYZtMgMbu1az3",
  "key31": "33cUh4cqJeYiFAAAV3vPLr59fHWobP2vMThigtDrwEvp7hgrHyKyVq6bQG3qUYEz5VDeiZMJQWbmCbQuPpJTHuAt",
  "key32": "yqoBYVgVdym6pchxSkqnVybt3VLEz5MzmdsdnzBoTcpCezog1SyKCEotsWFdHywAq7qCWQdmYBDaN2JMsA379SU",
  "key33": "5jfW6LmyAhaaPTvFTJbKbupZSyfuxRohvPxbeqiV8ejdQ2GDuM7JQgszDLdCZtjXbpDt2PAwgAtSNBRgDjavwxdo",
  "key34": "4uL5zNRL1K7JzF4769HEXAf8XqvW9p7CZbCJ3cn5rUvLQMveMjNKhjCYTWARFjtvuey6yjnht85pu7VEJ7UemxAp",
  "key35": "3ZW9CDSLfpLk5cJVkJJkQPFSyTvbFSLu59jzciLFvMiJbxh17CjYnrCFmqSfLvtTj13xNapn2hFVLsFUCL1qMuLs",
  "key36": "3UdbCpuSJ15LyUcnGXcPP2CdkfSLWsMhyY1STELuX7DZw4AR7TnJvMxy843w7uWbs9TEpHEmVjy3xR37ittqZhEj",
  "key37": "MWNW15o39KTqckYyVuKELUr5buHZHTBNz2oaQJG2pqy3oUPYdi7UrivcU5QX1G4syVNeZXo1z1SGWwyubDZdKSB",
  "key38": "2cWGcfEdpoQBZZox8EewZX2srw5hXYtXiYHsUo5eyvBq7WB9UQxKPBxFGCsK1JN2RatQEMvVswnj72BouDB1gqTa",
  "key39": "21YEujmFULqfjVoh61CceJBJ7cZbyiCu2qqTfXaXST9arm37SaLcahSVJoNRccG4TkhSEJJEZMoKnyxn5upQ95EQ",
  "key40": "8PuKvJ2zrjMYVSjNRgE2pDsnkf45m9Wq2RuWcKqcdxNiXrxipsxLzmgNUPjD4YeidQdGAdtVBEKgpHF3Kozy5DB",
  "key41": "4Duex9DHdvnipR7pQdAVgC1VAcQ1LwjopiZaTiE8HZvRzmfMukdZ1HpwZ8gxTjntKtbkgsaQrE85R7cZyz25273s",
  "key42": "iK3ro1RGqWYxGUkw2wUhX787XtWiSG1uMwEXgp4NFecwpy256UXJpq4QasoDetEVyvB592fkQwtECvmF2z4iHo6",
  "key43": "2Dz4dh9C328v28hMN4E28LBu2ikegdsRdGTP7J88BRwKKuywnXdCWPPd98QFjwaoVu1MqnLRBfHX6AeAT3xYNjTr",
  "key44": "5jcwNQWU6VjF1rYKqjpo4PJW96YYggbJu45nqetot9ibPurAPoA9DpxsjLSezKUhpyYXchZtzXGXie4nQ5nVk2iS",
  "key45": "3jTUWMZBXaD2DJBpjFxiBPmFAQ6yXWMBABpAmfWzoBjqXNKBmakHB57aExhYYceqodfN3PVKp8wPinjjCuipE5oH",
  "key46": "3RJ4MNyxPkumRudGkkeJCBNd2jNd7M1GyJtmhnbFfEuJFadnVYGatKWGPgva1ngznyeJLfEBAwg2143xLaHdCKsu",
  "key47": "2igrdFrf5sQJXhTueCsWUkbjbxMzrwn7ouumL7z9Wf4k3nqEAJgN8uEM5GA861LrxqbNJr4obv7fL7GNwFhimWYz",
  "key48": "M69YA5PMjtSARWHcDyT5nyrZocnbLx24TpKPWZSdcFCqokPER3pzwQbpeBrrd3gWTGLmawtoEaRaLV6mwftKEph",
  "key49": "2MSmaD5xxXzZ9N4dos3cvbirhTteVmk7PTc1ggAkU6sVKEKjLBm7d68ip2Z1KHTXSw3txis4ovJKCACqQkWGbKod"
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
