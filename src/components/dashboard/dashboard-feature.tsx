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
    "2xGAUwRREG7UVc4T7oDqN3nQbqwvQJJfhpvTznEARgYVFVWyqmWFQJKxXxTUCV8sctPAfGu9ga8SjEeknX6jW69g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EFj1eb4Z7MTcMr3rzcG5NB5YE7Yqj77U8Y2Sp9JDjaWgBnuVaofyuhFVJ6EsameCdG49LT9v1fZ8MoK63S4pF9k",
  "key1": "GHWcvAv8AsXXPy73yq5FwqEcZKY9xHTjzxbK8TjCCDRSzYLj8kReqfr8Rr8N2SFzbaABUhauDbe4fgg9Nda64LZ",
  "key2": "1UPeDUrrG7Svmza9VYzaAYZwzgEKmdrQiXVPDvuYcyfDXKWDRg6A9WjVgFmXih6E94cjxFXBHY5ZPydXk2BrEot",
  "key3": "3Ffq3H5CviAwehXVq4ZbwfvJaUMZoLv6AyyFHsyaR2W3RugsdhDw17hQAN5VU7XQ4aVsJZbG6zjJa7T2UZUrHV2r",
  "key4": "5QtcAUBNmAEixZE9eKC1aVQmL1yoZ84EbS6f4tMCMGjBEg1X3Fe7os2tCTr2T6oyPQ2MvveJLZSZBjxfV5LRaJoz",
  "key5": "3mUDePajoYzNADik5Dw8giv1nAc7pB3rSrTjJ7kPQ1iBUwZ4LsvjkR68wab6HPSFSSg8zRinRRyvR7zuqwAKEiAh",
  "key6": "ZPfYDeNnsiGAgUN4WgKDkVnC8gLPyoBStAAahjpRi9d1dZX6Gfa6gHuX8bYTDWjwQtgYbrFTVc1VhJaswycPXiC",
  "key7": "5rtXsVnkNRi8JB5juxyBVCkLovUkK7ATm5FmpPiHidqYGxPK8fGXbd8NQ5SJ8Zudjn7yYjGpZM1NtbyUT7mGxR9x",
  "key8": "3zr1RrML6cFAC5dgoYShKeJPcp85hYdcduYxgFt5jSRR6M5scDHYa4PZMNhKnpj74oWw6k1U25aZXHpP2zkVLiHF",
  "key9": "EXG4NHX3RzJKBC3iHAHNZ27NutMTo8EJtgciW1ec8twXZFdGL9BdBX1kf42R1ZAuhxLoWgvH3AKs35XDWcSYWs7",
  "key10": "5bkmA6BsjA3N6wQF3tCd7VxEFng8r49wViBA2mqckPTG9ZkwpAqXZhsgiWAFjMKeA7YazDciTFPGzu47nsyUeAns",
  "key11": "2rgTu4LbNXzcFzKuTUxR9NhepEut1DXmXZbCNtRzeZ6iKtin5KhmLbUUSJnNLtWqqj6kzAKASAo2E3MU9ZcTdbgE",
  "key12": "EEArvD4B3FTGMutymqwbuDyJ3ek4bCjP87A7FxauVsR3QdAiJYmzJnMXSZv5EwpMA4RrVUNMH9H85Dg2ySdm265",
  "key13": "EtaoZyQKZjdvLC8ud4f1w8auWkWzoyFas8imVdMxwqNPvFgY3LEmZzBDPjfeCXnmgjZVjsDNDka8R57BTnfzSh4",
  "key14": "pfp9nGTGW1AqHqnJDHk4gWpjDVh4A3HyqjVs83YTv2e4mGyQGwHHmmPoErxtkrZbzyU1W91eddyrPHBi2VVFTYm",
  "key15": "2wWndKqKkBFcn7NHz3hDudjf4xymR4x8L54HiZ5a7Tf6dRve28ruCBmpmBPephPAWif46ctHtavECPe6hRNiQLdR",
  "key16": "4pHyA3bATD1UiDMFrtMEDt5xEz5apmV84p2eRqiNJrQLujisFyNVXfbjjctuVXzuYSFqZy3coKt26hVqan3pNSMF",
  "key17": "qKmA2vqGS7Sxa5EDYZ7YAqcp822tXFgRnrtBbRJjHzVsA2289LxfvUJ1BDXtUb4q3aRquERJ7HoY6zV6urR8sz1",
  "key18": "67bqXx3MDGYSNebNgeD1bYpK6Y6MDFefAWTiUbMxJ9fm5h1u2GmZGNPBRchBjQSMMtp5JpdFrZAvwPgE4kM1dKBh",
  "key19": "5fUYK2BSHpDRc41txx3SncBMBmu3qNmEH3riBeEZrqniFdpXohroH78QitqFxDGbuq1FcxpxWKW2VapdH6HEdVVj",
  "key20": "5FjK3ybg2uCyDKHK8Fg7MWQTqKdXsb18JpqnqLH5xCadH3hpjdBdrwh73wBGDc8MuPQq1aJA7tbBzCwtG5zDgpye",
  "key21": "HxJiqiMU59CBasiVNUHfApWgWNFr9LG6BT6TJkFJZAwzUMiLteMKbhqkMeY3p1s9wyZEyysq3jKYN91FYgiPueP",
  "key22": "46tj25qBe7RSLh5dUDHgV4rP3B6asV4F37pGzjw8QmGXNxqUx6rpaH8awV5tCG754a9XXn8oqvfa96fgPCKmiFn6",
  "key23": "4VXkQmvMQDpi9u16mVZpv9t59DjS7S32rZEWZhCRF5w9PandR5z6JwGVwbKZr9uPNW1HVmy977rEHoFqXNAX1mxK",
  "key24": "bWgDKRw3DwW1eCLSs3RYhkpupZNSRSnYoznKucbewUe3ur4FDuC6mGGrYpjyA7ijTmNvv79RWZQeSVaQH15ukq8",
  "key25": "4zRvsrGXKqqGdRFhhepMZDDWq87HnMVx5fT7KXog8DEaFnEmLJgkieNqyYp9SWJUMKHDBkPWgri1efQx1E72GGUT",
  "key26": "5A2qaLnRwzCPQnLjmyDiDsa5XeMzLK5VgFXNFr9SAWWa62A4ZR4MW6tQ3YH21PTUbGLb2FK6zFyPwjLvDiigwYHd",
  "key27": "4GnaX2Y4swFnzVJhfM5Yd8MaS1hAMEkHPkMS4XQj86nvLkTKUeD9nWNxWRb34NT4KQuTWNJCevhzvfsp1i1xkqpM",
  "key28": "2D6A2LpbWYsnqhaVwHUvXe3Z65Nw4RFL5QigDFrHuxrkWF2pKBDqjXAEoNQ4WY3ShgHqdkb9CB51sXUWs16BigZR",
  "key29": "2S58Y1y9c4YXBbCRuZsVQTtu7DhWSurZrK8MboBLqGNSDBsNrUXZibrb2ME8Jj2gy6XV6Py7zVWMD55R6Ry1S5mo",
  "key30": "211zuucRgFZcqcEJXPZgLxQHmc86j7gTRGtF7GkEiTdDrBPr8zeWzLEeSWrt7JembFtvDNE1U64gSGHHnEwExzqx",
  "key31": "5JV3dLJxKHHLbEgeQkfXPuva5ZTHiT25mm6nrdGwZj6w7kkC8SiY7JGfqhJnhbzsWKRZQ7dVsPqy9ZsyNer48WjM",
  "key32": "31J55ms8J5pzrQFfT7XPLgeKoEXuFh4J7xJ8P6HjwMhVwQ5KRV3wVj5iLRKSRqQtVAP3eU9Vbspn3E7mynPYRyox",
  "key33": "UqibWbytwEU6uGjGbjcR9Kiqz6LjZyVz4Uyb5yiQ2XtrpFbJFNUypsdSpxJUXBiRH6FsEa6BbysixBF1dGy2cPA",
  "key34": "4w8v7TkDDypjRpaC9t6PmaZx4LR8MxQFpubc2z7podiUviW2LqRG4QVHyrcSAGwQcgCowome2MjtS8Rtn4fuRXHK",
  "key35": "3x6ZHL9rxcNfThCm2aJWcQkQ8qDo57WXC5nSiUGfgfPfrx9D53GKyeFLBkNb8CiyGYqnXWhRzhiXVG6DoMtcj4LP",
  "key36": "4RhoJbs4ZvLxCgnKfnHf5rjhhcZDPxkimvm6szdQPLzh68rci29ZZexfembXwumboaZy8yWT9GG3ao91QtKRssrt",
  "key37": "353rCBoq8Xt7QajsxQuKS3Xa2PnQART7MnuXeTMdmqmcKB6V5Dsy4NJVL6X1pZLVjipohoifZt9xQCjphf7thMn9",
  "key38": "2fRRni5WATvgdGYLriodHvkrdXxYLjB39UnofmJPqP96M9Q6c9MCwZJjUyg19YuEBSoTFKJpaxrwq1bh88VCMLPc",
  "key39": "3ahcbKcB1h5wFynANqGLHS5ptmp7GE4AZUji6Jooh7fm79hErLN9X6Npu9r2ZEFh9M8JYcQzjjMaPeznALpQ8DeK",
  "key40": "4GoBqBLDmaAigbzsAFtVdkD1HhS7ThuKMcBz6JosjeGCmBB4e93XTfRhFU4FMusNSusA8cx6DUFWiRzBarzQGNZW",
  "key41": "4DPiDd2t324tP3jsz1iFoZ6aXc8Xsk53CHriwx2QES7Wm2QkghZftUip6YrVX7MdzrKLmBxcbqQ8PvLV7stYzR4V",
  "key42": "2M4DYGmhsuYDWKNYXbCnLo2mmgUzS7mjUrv6sxuaKvF2iUp7N5e1NY8vEJVYHE75po44GMzvns8deucesGuvPA9b",
  "key43": "td8FaMezmR6FNtRRzXiD6p7CrqmZdSj35EWoZYZtfvuZsU5YkwyV6VUsGJRoge9LxzaJs1ZjvGMnVVZsM42RFvf",
  "key44": "2FAQNy32dAKho4Lb2fh3NHS2Q698xW7jnAfGqJsvGDnuc4bKHgMAJwGEND6WSbBNQkQetCr9QdQywuEvfGxPGC8g",
  "key45": "3hKF8Q32wv35iutiUtjqDuzZPw46zZtLxTUA7GaUd4S7fB2X6sKdHumrrqKd3mr5JcDfVjkEVcYutQGamuEQJfuT",
  "key46": "3xpzy84Sj61yStqQ4zPG7KrAy5gn3SrykJ1kZiSMdmEmsrXu7ebUDnD3ipzkSLJYNNY8YR52PJk5RoVHL2ccbBGo",
  "key47": "2adito3H2eYbrFERbUD2BNFYFCAEKDkmCjSLpa2kkf38Y1v9cohJrZZoyKQ8jhWrpD52TvGgR7EuP23jYvCk8UFP",
  "key48": "5w2iqnyPHUKBFsnSbPRyvdmMJhQ5e1ufrvvpCWSbCUAQQQgqR1KJW597Nf6um8STc2ksAeytwYAFwfWLkyUB4k2u"
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
