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
    "4mZPNcJwTsZ4YZX21Dqj4oVnSfBXQhkaFXYn8GwuBuVesxi8tukVSqykk5jLUXEuGcYRvjWqF8fmSjqRvdjYcQ9J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jAfkxLaAcfwsDSqe4BssnkySFch5dYmaxr7ULbMJH1ngMmQNysTEG3mh77KdfkCi3o6T92y3H4BVihhDxH8EkGK",
  "key1": "E7BwYMnqiEYKde8GA2cXNJnpPsFr3z3VsKs8rc5dmwyAA7zqzLYy3UtzA8oD6NzKzin1QYQA9ZdKvSiW1sYDyr4",
  "key2": "4p5v4EHzKg38hkrZeXdUQQng9YkYpMu96YukmySAFA5A9YKyGz7597tWfkMZbqAkgLAdVUVBThG1253dJzATesNy",
  "key3": "mC2ATq14Q4n2Qmzw7et14311kSCZr8cJ9R8aYDJf8DrEr8iN2bAaLN9Fh71WLzmKPdYeEev3UtAyQgmVgGFRfDW",
  "key4": "oFD7PMS3d2uiTrQiRcD2b7uR7D2nHkxMZ7FWSkyN5mEr7bDiemPQKPvyuiBzoheE3PHRZSNJdgTcZjGQ7iDHRVd",
  "key5": "5umnr973X24jUk8owHTJ1j36QyEgfFikteSzuQTdVUj7EkBLhWS7qViCVAEACzCsWJt6XMGWkEnCBoPrn9icPSwu",
  "key6": "DaMJ8PFyNK9ntmaCsfcwG7AoFWk6mHFJELe2Q6nUVTyPBmVRFG1CTqEAJf2VNhgZ5Qh6S1yvwWevxiqq1vmY3Jc",
  "key7": "UwJYmgpNLtjsuvZgiKJTuao6kzorq6E1rxQETrLBhyaGbtA1oHu7Ws3ic4kAuRnZXovdfgFGs7b9UiTB7VUGkbg",
  "key8": "C9MGVCRvUF2kRFBYybum88fBLvwDSP58b7pL2D8eqBy6tjmp4QCMsGAMDSPPb1ETTpTKJ9m3V3fA1yc2xSHASXQ",
  "key9": "45sMndtj4EYjAxC3RXE6dyobuHCjcw8rC8598RaZAwmgovP76tGBKzQg77UfQH9dZfmQkJmTUDBXCEgLLU5LMJFW",
  "key10": "376Ru6PqKkPdcatSdHj4xBiTCN4nZ2qMa8Kx5H4TJGwv6qUWdJDT9ZMhCdAPiVodtKhbS7R2cBSmW4DXg9RKHHSu",
  "key11": "2g3qPdpLGTC9ew1CRWjpNUYqyY15ArBMc6GtzuKXT2jWA8efSUvEi98bu2ZFUgw39rpm97MkKEm6whKpCCSENSAo",
  "key12": "3EprXCGRnaZDYrTZ7uY6depRyy6P5sjAUDBeS9jEh9SxShZLejEHozTM7i7sRqBkvEPUi6j8x4fwKm9VURVWGdgm",
  "key13": "4ZUY1r3g9A2UUJoZDWEaVfnMNoGVJAL1YzH2EC3sRYoqJKtaZmvGMGTsGw5PKCGf26QnXBNmzLw8F3Rziq1onT8z",
  "key14": "xkCWNT2L92AnGsj24jzK1br78ncF8csPGZESbPtebTzZwcMCWY9t3vAXb57KKDcXXNrL6zjgwsWjH4H84LoSfhP",
  "key15": "5qTAP8QQJ1jKwjmaMPhpCY9xNJ8TQJP2NBCrAP2Zn1tdcbDAYhTFcDwJAmcNWdNe7J5pXTACm4PpwABwdn4cVR36",
  "key16": "513mAp1GarDxmpB5rQyEBwuqeyCa7HVKZ2nvrQNf3kDBYD6TecMfHQACuG7fDuNQGsEizAxCjwQEpsWuCsRyCBJt",
  "key17": "5CYHjtEC2DEKprBWRkYWq9yn2zicUhrpVCiSdvJJkFiomZ8BrpqrBHXfaBrM3mjJuDdvAaMX2JhUefpjCRkWzLtD",
  "key18": "WU5tDmrZhH5N35piTzfsmozfG89S8sEXMXKzSWUpXt442c7SSK7rdGAv534J1mHN3apUJSeeYaH3s3EYhKVgUqZ",
  "key19": "ttJHS34D6HoagmokJvoGEMrC5887HBcFV4oCy3i948hZvuBxtJWzZWD6h52xjHTBhN7B3pCCvQtW7nuiRxkMGjU",
  "key20": "3eHQiZmVDekAtP1nMGgtpWkyoHcietFWKj6f6oCwBZjZHfYJiEJyuJND9M4aQ6CEneGqvfBgCJ4GvfzNEs9nBvaE",
  "key21": "2ozG9X5jT917oKxjkCcoQFii7q6ZXzS5XNQg9PBEvKoXD7at37C8TicCtDmyZDCwzo7Y7ftGcSkXjCaTvsgewyH3",
  "key22": "21BLuCesPTPABy7V2e6KGVktwt5gZJAB5g6FVSQv5hy3mM4b5Bz6hzb7BZrhoCaBBSHR3xL4tGtuihoEab4kJqyb",
  "key23": "2hb5rRQXvT3ncF122gwUdi1DwfsN6ftW7GoXCj8pqDqvcerm4iTEtSRKxfiRxGZ6rG15q5Wo7LiFth1tTWtP4NZy",
  "key24": "5LMRnDQ7fat11Zon3UVzhkEawuWYkDhK9YQ9DzfdxHXEQCdEmBdyVs9hdcnmSEjPaWFCa5NUg6FbpxH2fRr5c32g",
  "key25": "3gDd49EwUnsicaLfjQ7DkdyYq2uPwLTSNr3q5LKo6CbK89UCTSfoEwQKDKzKSuyaPBVoumRYxeNrDom23YEt1164",
  "key26": "fEFzSFoQETx2JcMAX2KEGRxcLao2mQxRwD3165EfPG77RKJ2XaD83Gcqbo4Bm1u3z37LxnA1Qjs2A2gqXrAxojS",
  "key27": "3LGWgzwkGHrrjCaGggyBc9dNQG9ZnB1Nv7U5WLmETBdwwR9wukHjXAK5tznor4VRKjjx5Vu1UXv9qCm5vuyUP4Mk",
  "key28": "3wCJ5q8AJcb21fuLSsp7vx1MmcczS4sa5Y8hBRZdtREBr1qgHtBmcnLEuWtXWwTQV9DLDHJnjZxV24BsF1jt4sXx",
  "key29": "4uBjHE28dQTpj5QU2uiaaXMc35kWqDXYzHgxUMojM9wNC5Zqmigwjkz7a1rKBvCaVkYuNz3q6vTWtvC6BJ3dGqr3",
  "key30": "2nDjG8Sd7zn58DDWoKUW8DacFiiLQW34J2QZ3B16GQjAPX886vmMFx4ssb68JXcH45CACnRpDccyFxczTtamvBKX",
  "key31": "34P8VrsorSVeLZGymYZigFa877PLXvcGujAWQgumZSUWhmCjfh13PudP57bUkY1LjTwEK1upaa4SfAzimc76hB6A",
  "key32": "5WtJstCUXSf1QXH7sAQhEMbe1cqgkNzNiWJeZkz5dVp9sEhFYS6KHsxgbs7tZUJ6isSQFQNY3e5kZgDorzceVLEj",
  "key33": "5E8TcfCEPPCDDA9xhmUrZWijcA9NiExrYMwzdNbWLsvc1f8wqAse7mQsex6sSkxacLTTzA1Crps95mzrFcf5K7yt",
  "key34": "23eNvCKS2QQcnooRwaTm6A556Q8gtpviDr4mdx2sAcCm8yY6YY8yBFPYV9mqS3pDHszAVgGDfxAS3cDUfQ2tKkT2",
  "key35": "A5K4f5cH71Svb1jyGXJT8aj8FAd15n4MCpoevfjLsSVxjDfuRosSfcXdBr4b9K9JePzzFydqbQzQtiiF44KJk1P",
  "key36": "3X9HUEimXpS4ML5oGJJGF4uX53HsMwE4uaBLUht4r6xHQN4HDvyNXs8X3Jz2VYAbvgDmJQpX8JYAmhVYgDL3YGLc",
  "key37": "3ryn2QMNWgN8t16wNyNwjyjAkWk1JmPnT9aKYWbPMgYDmq5rvJHFzkMDdg2WRzQCc7MD1t8pX7tV6LEnhzUifupq",
  "key38": "4aRidprpUPHXpy6MYrBX45aX28ZPSFF8ugFwFTbTECpPm2P8q2DKzogjakm4tSNXeg6erXJCt63UJyy5cfPmzCjE",
  "key39": "QSzH46aR39mF4fToAZQFBACPNbZNyKd6th8utCQA3mazcHi3wgTpvUY3DuLPTPuhmsbZi2DPJR48SSAUbKH98Xf",
  "key40": "5DuUaYE72nYUWkRD93Qkq5PeZQFZMPzJuzkaAmvKhWRhcU1sh1QFnjQdeWqM8YtnmiBE6TxcXKoMHMhVFkEh4VhB",
  "key41": "KxmbP5vCdYYS3VcTkSkyxPAzSB17htQtuJqe2FsimHnpnGbVepujr4zGEqzkYJfCQMuN4vCQRArB5C5ssp1B9gC",
  "key42": "4CMtMezFZZVkrL12WoR5SiPRhbRDRDafPwXbQLa6hULAf966rzpLF7JfHs17vmC3M6y53Q6ktodt8gWPHM83kNpq",
  "key43": "49G7uXoC2AorM5jLSVdkYfpfNkapMSKcgZvkkswfc3ezGywWn73szdK9Hcx7Cxy4d5jVnN9yjw1EUV5Qro56saAa",
  "key44": "2KtZBtYmtXeNWuXkHyrdLNZ9sABYHBwoW6uG6wkVTHPCyXJgGqCUSVvsskb8ZoqcHV1nJH2n8GHNTvVffUgR49qZ",
  "key45": "TbxeJfcm5HgBMBN7ax3mszpyJ8D7a3wDJQJN5KLQNEA4U4r9mLQix11zTqMwCSBnSxtTgJP8iPzWEN5tM6BYYLz",
  "key46": "4dhpUwciBZmDDvFbgPAetnN9KxasN3a9L7HUg4VmGwFDkFzNKH6EsuKTGwqHzAoXCFsFziyUEdbJsNfprEKYJTfc",
  "key47": "584UKEC6SfW1ASprxX8FSVTAQjTGGkCTfytwpZXj1QPjWLL9CR8mqVvBVTZ7KDAKvx7UXkQMaQ8djsHmpn4vD8JY"
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
