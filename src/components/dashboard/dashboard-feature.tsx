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
    "5zrDXKVPHN45en8svSuwCKppgGKXxjAHxtNCFCciSmPDsHncY3GMoQpxju1ibbk6Sxr9EWdoh7bvcfnMai8vTKvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wAcfVGBwR2kUjsAW2k85AeSGgWwUBTGYZc8eaeAuLHxSDJ77hoPwp6V9UzuxHB9XWoKUvGzeaUVpSoYzb1obxL",
  "key1": "5jwYZudoRequ3jhs5PY25SavuoNNdHe6jv1jPRey7XPvrhwRNDa6CQ24sNWATfxAm74BtiGxsew4g5xzJSjUoazn",
  "key2": "XqcAGsc2xS3dRWMWDXB4aWh3hWiR33qtnRbyawAbYH9fMidictifXaPzvVHLEuu1cuw8RUAVga8Lqo2Y7R2mMy4",
  "key3": "2GhmpvWgxx3xRUcYz4eSdNRv8J65VCPfbeYJNUX7SLFYv722CxEf4wgo86BLyFB6rxdpSgArtRg9c6FR8uuqfzHA",
  "key4": "3d7WFvUkvhTsDaJMR7w79sSUUaTkNziGxQYiTqtkt3wdBWG6xGzEQ14irA4n8VoMN8Ua7oyUK1Nhpz1dGMjt1UpL",
  "key5": "2BnoYD7wGTm6NbZgCE5Tmxv6UzZ3JZJdcMobpCKdYUzPzigTV7oxM3JDRNMtD2HnzS3diVvMzj4ZAsNCaSmbNZzS",
  "key6": "3WUrZSm4yqqZbgVAfmZqBUgaup1QZXtuXuYAccBeemYAR6r6uUf2VEDQ144TMqYQU4g3KMEfaLqBT9oPGG5WQaFu",
  "key7": "5pmoe49EPjSqH7Sk7J27q6HLoRZ9ZAezfJVVmVP5DKJpjS8FMCRoyW9iJZGfDJTMtWRVtW6AyqTwZTuxP39DK4Tx",
  "key8": "3q7816tVvvKFTc4jBf5ej2z6L4reutq2mJY5zxwXSazuEComQLYJ8hV9Vdsgzb7dCD4NiFNZbsQGUJB4eQKZQnVL",
  "key9": "5GWmceEAs7F3CMUEGHmAK7LC2uMzp7FfbpCN1Rb1Z7Mn4Y3NsvwyhyHM1Camb1j6xyXY1nbxiwwFuz8yzsh9edaV",
  "key10": "4LegzJkc9oVKvJ4yeBU89gZqYZy43nR9L6EBTXEQ7YCtoEseqyj3JSHCAXXBCUTrK7aZwDU1CLiVCpk1jGPHpGPJ",
  "key11": "59CcdUJyX5585WUQyJNWBM5g88bxjwndzHFTp8uNFwH3eiXc66NLz5rYjrjjQH8Y7enunFuV5bKZf7gitYBvNR35",
  "key12": "5kakZeA5frqRwTWBqdp7FvUobz8Nw7Zgpc9s67XFCLdxCKKuyEZ8RSrLSCfbkBginw151axaZG9fn8iFjsJk3ctE",
  "key13": "3ZxPtZef5Nqa1ANSJ47RJT2wYeaYfx2GYZaLpqWfBqAHMQVvmczQdyuuNUdbCM451gNvBx9B2qBR3f2n58jK71rD",
  "key14": "3uPeGZoUu5jjj3jq8jp8APQ3EcCMsSPoqzj1igtTn58iZmiBvuYGGrAV2ZCSJQdW99CFGyvtidLC9QMZE9wqUayB",
  "key15": "4G1KxbPuGUBkvdYXuGwLJwjnXPmNb2vE9Jh9GaF6iyeyk4E6UNp6TGkrATVbRsWnyXiWLFUuGn3ENu8u7SQcdres",
  "key16": "31sx12payXdqZ2R3tSkqugVX8WWxvd8cNZbo4qnwLTrMKbFYbh8mHiFgGGwzNPppEnRs594U87VD8ba8oeaJnaUh",
  "key17": "2t71XnyCKnPtRNBiPDVsu9zb2vH1yXb3vJV7QWvDRSDgxGSWUoj495RT9sdotFQhdHFjcQqrY415LmkzzYLMTYo7",
  "key18": "5uptSTCPF6UhEqtN365RD5UpmrehSBtkuiDxyai5QQtvkeshdVr137oNHtR2BLtbswZRe8uW9L7bU9k7FxjdBsG",
  "key19": "4LPHTyu5cuG48bEQz5bi23UxJmZuKEbtMwFA26sfxspTDqpvupFAaGv8tjdB8sGTV4K9mZynb6XUx2SfuTcQkDKE",
  "key20": "3W6THZs8G1Coc23vARJ5QZWSDv5oR4rVaXFmsB1BthMbv5xrENXQ5dfsAngFMvybdvs58FzKnBwxKoe7eA5eaN8y",
  "key21": "45ZtGi5ZFs8SZJBuZ5TV4GH3WJ1zbCD3Voz234xu6XU447Bm1nFoPJCtaNeMXkYpNZEzGopSGGWkiYt9Uq5EKayn",
  "key22": "2Y7ytMAFVpsc3hoN4djkYs1QFUahR4smj1rKFapwZF14WBr37jpy3hewWHbzpQTepLPB4sqv6w1M1yFqspUtWW1Z",
  "key23": "3QVN5W8uGk3Ye1GqfKMUZBXxEHPL8NvaRQd6dXgqwYiZuGZEco6tac1pAJx79GyA1jfMiiGcmZp5auT48PzZ8cS6",
  "key24": "5FDUQFiHFKMQxqV2vgaCRuRnKysHfLwT8VimXTn3v3xnb7LtniBuN3WWXwfLUYammCBZnXiPrAQCEBJn5Uxancrn",
  "key25": "3VpY5ygXHBsYRVwq8pZBEfi34y8beZrRBW2TwKLESsVcibWnXqzWijDTMk6bEqNnBjExyDvS9xnZcUjBFaDfVHL8"
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
