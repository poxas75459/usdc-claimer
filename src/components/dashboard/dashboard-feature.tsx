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
    "5LgZYSYrM53NEQM9bLTuNWRMVB8155B9bZS3PGXC4V9hSNUJQNTrM3JmFCNgBF68JU6tT8dkmiDFqKk5c3UMrjFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29RMRLkhLD9kSQKVy3bhzd59FbxZzbqLUQwdyofp7DCyTxmzaz1J4fAQjVAg7AC4MXH1MWRRQq9djKYXThQRG9CN",
  "key1": "5mv1MfftVAcbKJC7KojsinBq3wLjTwjhfs8zxCvPrtJ98xyBMoWtttY6g5zroxaArcVpY7v7bgrCvSFx88BDdqJw",
  "key2": "3uwJUnWieLryRKJLMFtBZUvTehCiVpjDtjPE8HnVqjwrHtsMpTQ2DNSCyCViNsFqdSJTeUr6Ex8iyDDsTwbGwG1U",
  "key3": "5yKmp3U1KmFBH7ATvRMU3uBKAXdWiNQYsGJyXvLnV3anQnXeyEp2wH94zp2aFtpidr3sGoxtFax6o6oX6GTFUQqm",
  "key4": "55mYh2vG37GCW2QmoVhwxhHTRUEsy1LxB394e6n9dggxSY9PJBdwWp2ZfzTJAi6SCASpEeyofgxtyPNo7BkY64zJ",
  "key5": "4uzdU9s1jVyh2DuqRSPHLRG9Uv1bj3VXsqMMqjUHkeUV4iHedeN9UqUWuj2p4NBXGn8pnNSMtPpxQ4FR1ZpJziUo",
  "key6": "8ZeEqyz7LoLhEhSQ3dbgeCHCWNaYTfBkjyXdtwWEWSXsEtPbpyDqD1TTcrCDnTrF6eiEjxJkToUqf3iWj8uVNjx",
  "key7": "QaYNqr5XD4PK5TzonKv3mES5NvfjJSyrHWptCDAtSgNd1TVbkEnwpQisUgP8D7tScQJakXF6EwntAPHhrzJqJ8B",
  "key8": "2KJSuCuazDJ9HDtbGcBLbLxrfvAfmu74tM8K1y8WMATkrShPA1aSw6WuzCpsa3imHKN7PYRWiHtYZdm8eLuggPLj",
  "key9": "VCTJmHurkxiP48tP3F6gtUvtRRWujpUhYavdSnHyPZthsucyjoYykBqt3W2HoABVBVdTeStoYZSVNepH1x7YMWt",
  "key10": "fjgVy4wxVRMhKQafrb9XZZirgob79ZKLzQwqr7MWnUoXsGcvaVXDHaZJkbGEaxCEVoFxd1DHAMsVubtSX2w7eXb",
  "key11": "JBgSJGL6txsnt5XKFAwfXyov4fFZPYwmt5RTRJCbx3CqYeJmi3oG44LQh4hwH3LiJzMtVictouZxArofUaAbaJM",
  "key12": "3viMQyuTtYBryi2NQLbT2Tmzo6r4VoKkEP7jNkDfU8Thq8oZ4kkZAiyHKboU4VNbmUaD4zKDr5C7ixmEq8krMeUG",
  "key13": "v5x3T4VG9ea2Zkd4Gj7ZEoLxdovTQUaUBWYnV3qkBB9Pv4dT4UtoJgZEJKKGSrkZRhDSariFkk5anWewSTKstxU",
  "key14": "2MhHoppKvrHP2QeHGFEtAAGqQovakNRUEVeHRGLZVjKR6j4AGEuKfGfUbAovuVj4dGg7sDu2aFU2kq8i9E5dhYju",
  "key15": "2eKv12ErFgUyoGR9qp2miBbP3jEpeUQqmwmK6BvRvGHtX7i3UYiPb1cre26bifZNojb7kbexDUQNboFpTxVaMESL",
  "key16": "EEfioEmCfPizeqMFmwRpe2nabnevx59ohC7s2BhuqXXQB8uwin15Kgkm9Zqq9PCLhpGnGoAmBRL9pVR74kRq54K",
  "key17": "CXt2ymEPgdpmSjqRMKSza4SqKZcL6LUnMXWAs3a2gz3LeooCDfKpH95t7KCsW62hEe5ee4rUhpJXQRgdvfMcMwx",
  "key18": "sp87gQr9SyantH7592zF8ofxeP5YLSmvcyrrRW2i1cvQQDDVfb1meJV3uRFDVRXhY5X62nAHV3WZPjMBaTcSdLu",
  "key19": "4CsNumr2gNQZd5qfLPFA2nUs5THrnLZjBb67JGYkiMjXGgrCDnZMdCHn8JTFspmMuvsN6VrSNwKD35oAnHc7eKb5",
  "key20": "3HqYqyVNSNL9iQvzwXFNYcn2TbLKAvpo5Nib1ud1WmwiG8g7LP4EydjobyGREuvozSXg43qVQNsYLDf2Ch9gDZ3K",
  "key21": "4132ctt84npJiD7naFsNo1sooxMvizc5gJoFs4DtkKyGnK2qN1rfu9unTr4SGimsc652TPrKHMaTphgsMxXyz6fW",
  "key22": "5pdr6i2QX8cS8sqvpm4q2LGbpJSsrDDeuTUbYRng5oSJuN2mbcbbyvmyfLDGBtdiBmmR8kQSsiomGk5x9bQfhRhy",
  "key23": "4WqrSjvcfUuKcwQBSv8P9AEukSmbKarJgjUx1Nn5h1xwW9kDt5yQj1SDDwJDXaqxrTxzozbHLD5AUzWJ7bbEnGKw",
  "key24": "4Ycgg5gauoyFxytGMYv5Gers8sH8G6Suu6YgXcufwMRh6pj8JGzNaB2nbYG2q4p9wjmtQLder1b1V4bASCx5dN26",
  "key25": "4neVSoQboeEJ2oDwfsiU3YEX8qgMvrS1E7RZRtZKbvAegfCipCnCvAB3Z6KMNRBF6rtoeykYQeLWtNwSq2sbGYcD",
  "key26": "5ak2jR4QbngDWZbQGtPF9VT5HkHmhp8qGYz99RGXusFtsmwG3NrVyAvoe753MCzkuDTYMcnTYsQcuKCqT8wzrTJV",
  "key27": "3q1M6yE15NNQTUkhyP3jzbgrWSbDMeTKEk4Tun833EN1Pa6gVLePJU8WRrbCkP44oGFfnxoPAEgP3SRemyQxEJKu",
  "key28": "4vBoiZGDV52dH1mtS6iXuZKKdKAeLZAtXyeq9MLDpKighFAX65rqXBuqgyazRKBtQzZ8Jvbbmib49fi9jcy38KMF",
  "key29": "4aA9HMV1duEvhcbWuqQBJQ6KTLzpzb65qGkCZEC1mSSfFcGJE4Y75LYFMduTcJrvCUn83gxNUazHnJPDa2bEU1Sc",
  "key30": "2KSMhSjcixV4tpiV5VWP2aoPeNeYWvAcSem4zme7YCBZJR8fq8zDFRTohmGSj5xMDBEcT14qwkdCwmavgqQycBBY",
  "key31": "5FELfUfTYH7Mg2Lr56WRRYdroJ5YvvjFWdNAvmC6KhKcwubAB1JwuaoKYeya2brX5ubCVYCBQtjviDp6ky9ozSsj",
  "key32": "rh8UxmD5UcdbvLk4B1Fy7nH86H8TRfwadiMpvUVvATm5qqH3kNENexQit92cUQkL7L4oZGU8mtQJ8E11QweVsxV",
  "key33": "mw4jDybrjn3xETjKRFDFZxsmJjxCKCucLU2HXHV9wyvJFJe57idsWNeHattnxw42P8nvAVoX7cCK7UgvwF7ehF3",
  "key34": "5EKkEFvkfiHpaJc7rBhDtf2oM1uHUK5J3VPDyeJZEaci8YVSGha3afxDoN7UiLL1udrCvcLsiPHMdU2Za7MkooRb",
  "key35": "58eC1YLNgDWjFCEPvHT6aqRQWLgoMT4vKDhzFV77v29k1P554ZNZjXDGupwzNCaryck2deurcw1uZhJ4JM4xkjT",
  "key36": "3kbeCXqSQtpkp1ytdvXe3R8bCBfiGtNHbi3jPztZFmHTAQXqu4hEWpZeryPkQR6umeYzEozV8ugyWVrp7wR9E3i3",
  "key37": "5RojN6QjNcXS7VaoofBx3e8mJK6Ry4xK9nU4xQaCQBcZXCWDubvyYVooRn9nNzxRy9M59T7narMcc1VqxukXeEYi",
  "key38": "4YiAPnXiXZmQgmhoDxf61SkCmpZuCsbvMGH4MQjtvP8iBJiqfoLu4mnrKS2KWTbDGkgvRDjvG1uAvLyKxUH7vK52",
  "key39": "4iDx6rGo9mjgekACmtzwAZGSYcwPdbtBFNmkEQ7cJuVkxFdmwMKEjCBqsPJdYp6VNDaqzJ3afFBN5YXTGuJA7vdr",
  "key40": "33cmrsMdXXUPFYvtTQnedKdUSPh38LdWr3XbViH9bkd9g1dPfVcQFXeKWeTC9mZMyqnwj7Yyfgg7sUjaLRNybvGW",
  "key41": "4e1nUQEpfVbmnZK4oZFS1KERyqBqvZqjzafp2kvtUo4qUUgozBSEUMnnZHHG6UMNyNEWA9SxQEky6anPxgWY4w1L"
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
