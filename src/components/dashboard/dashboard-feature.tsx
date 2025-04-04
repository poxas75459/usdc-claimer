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
    "B51t1fSdbpKWYShU3gEVQPek2S5wqZk6gEE46amSHcHxwruaQgvTrXp3juDrsdznQYGZXTdcq5Tci9HEhHMa9Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bXkGxgvFeEnftWeLSCSr55enxsVnnfpr486NvAdGGefMDDH8fss2fUf1DmKRGhLnGF93Ctvo7j92UQQm5V4ZqU",
  "key1": "5UqVoZCXmE5LnEs2FiUrTYGztR6Yay3yH4LxJ4Df2Sh6XP9R6TNP85TEpDUtcqiqJng6gqYkmUe157RGXVYGLDK3",
  "key2": "5tHEKWDxZWuHuFun97nFv8R5ccqz1dwWhaCUZtnEsV7D2ry2Lw483rsG9HBfGmRsRk5kKiLJRdNiQTkfkSwqW19r",
  "key3": "3mko3peKYA3z888AVxGVvrZrCoHR6yU2machfSASuDMBSnjM8MJrdBANszoy2tc8BUugJCeUsV3ma27q9jcWYqdi",
  "key4": "3KcBpRKrbLY6pvfUi26omkJLTwU84KnjHMqK1Z68jPCHydjvNsHP3jFrPTSrfP6ERmUMP58mmX3wJq1vVPKRiJBa",
  "key5": "mz1gunSZ7Sx8VEukTRuCzHFhtFEfNXt5AEek2wiYSeyw4XjNqH5pjwRpMxz45e2e1e96sUet37raXSCLQStabJp",
  "key6": "3hyfBECSyc8wpwsieYN6ApWgTK8JevJYfjpM4jUJANB4F5PFRTw9FPhQa3tcktSV8Mv7bMduH1cYU53DNuBFfugR",
  "key7": "MRDrrXmPQqxE87QzftGVLCWVCcuVgG6Nir9Ls5XCgwF8ji8jVnAtqtWQSquPmsDCGYQDMjFpV1s8ozV1fq6F3qr",
  "key8": "3EdeaBavtwN4danQUGN9UXtuYYopskuSagnt3bXaXeTcHeZGAfJ7wa3BCejowpQdacWJkGMsEHJK6UaURHqcYsAW",
  "key9": "3b9iE2DVNLc4kG1RDXVyxEPFUB9ESRWNVTtrhw7LqAKjWgVQ2TjJEn1k2kuhGM1ZyVcz5QkC58nBuhCKFTzyCcH1",
  "key10": "4EYvroYqBDge7jRYjUGxAq5wVEeh9yzxuoXEp8Uks7kB4kCcTJdm3VAzmwzbfN7NXzdcViytzP6EWx9xtwcTUGHA",
  "key11": "3viCJuYkbPsxMNWAHe8rxkjBPF59oxRMxpUzwoWyDMxeFRTmQMt3UAMcLxKMFoFMnpNZZ3vsDegxU9uQZipuPfXb",
  "key12": "3tCGWAP4BrERtwnSDU3QiC6HCtA3PsVcQya7P1XKs6JsFsozyA28RAUFvae68ij7yyDh7x2zTy3sVB3WqZjk12JR",
  "key13": "4vXYbkxC6htPNB1VaVWWJi8qf58sf7CuadDYCzP61qmZgSxhwwqQJhHHV13YPTmW77pJops4K9WgSQKnzCeymtCy",
  "key14": "125yAGiveEUjy4uWM8TgVymuaFH6kmbUfYY1tzak8Y7GjbvJpMJHsTg8jyUyoYkZsyxcnzDpRnw5xg6wDftXpmW2",
  "key15": "4SbCGH3Nn16eNwSPfP7CQxofE3M4CTLLfegAKF4kmZKBYcAPdKC4S2wEW3b8JVVuw382dtJNpu312PpQLZYdG7mE",
  "key16": "2C342sH9x9dmAXW8XVN764Wbme59kAK7X8mCZ91yd5v8ZDTmEL4Po7A468q4VHrbV9zW4A9soC4GKYR46VkCh4jM",
  "key17": "4JNK9dADKfrTQh43hAk9BJVi2b9kahd693w6Ahu1Hs9oqdkTWE8DvhpPrZgiQbimpDpg6AkYUbqMSeRvmazHKCRc",
  "key18": "5b8JTxDY6ECnstWws8FzM1UAMswwxWK3DdCeA8AahAPk4vAh8M8w7VCugTkvjkVa3N8xZ13gcmjn3S1FU2tpE5zi",
  "key19": "27HzxX7d4FwMa8C3u5RCerdWC4jSJdduMLRrrgn5neFhAf5otQFp9f6iCxgv9TCtLyE8cyGZSayermK2SC1jDqZA",
  "key20": "2UpehDAEJnYBhkwLpPFBUXzvTLUH1FHBRvsK9cEAqYsAyjYV91HD7hZmQNJFkb4jZJz3nJcVGC3rZ4865Td8pWZe",
  "key21": "2ywofvHpcbEn5FckTgvrKfX5ctULrY3xmzRyYeKD7GtyEriFnRwFoD7Wh1L3Gj7TANg3VrfSR8JMiY5sPBUSp6US",
  "key22": "2VQqJePP9ipyxhGgnkxGk98wJCPTiQAsyvhwW3PXwPRLc2BXaWJ1kwjTmz7CV1BEthJYBsGyyjcc7GLAMCfndPRC",
  "key23": "6F6f41S89CCsJpEGeVGYo6PVRBVYj1PjAJiy77tSuWtG15z3Jk6sxKfZGv9QqyKrqtMH8Yx1Kqvv1icxK4oyxCN",
  "key24": "488nMW3vWxYpsixHpJXg5yX8n9PGXcqVicbr9C4EFNXo2MUw8jFE8ansqDzc53TsLNpGssm6UhgNGWqRfxxCdxiQ",
  "key25": "Jb9YCANQJZh4ugM2pCui2ETksR1iN39H6fTakZn8HP5Fii4vK5Td7NXywCg8vXyJep3VspotLnXBcEHxdtYyu12",
  "key26": "5Hdp57CMXLFh17jutizKnamYTmGbQXjDfETDZwh4RM1QWG4GNyHJbaJhvkkb1B2cPjmDExAMu95RE5kzvt7R61Zq",
  "key27": "5My2NERDftx1rXUUvNMcWEmmYHN3dn2B3KUPoNfHMpkbtehJJenTWNbLaZsdt46wTNVHrmQ2DrVBFDMiYnTTyMMx",
  "key28": "2cQsGt8U3iTaZjYVcAThXxDmvP1Nq8w4W6m5X3eLGvtq4GeNQduvgWK6iCkL6Rx3q8qLChVzPYSzJxnbSj2HzAYr",
  "key29": "UYUpHowjdNVfh1GJ1PYSbQnwR2wKx2withGQsjasddHqgzcbQaxzYGmJ4sJtkE72QJkprMzkfZBESU4bio3CAkB",
  "key30": "3GDZD2GWVJHL1AGmZWig7Deek7Vn6XjnTs281GosAsBmBvQQkPMBJf11wFQt2dv4awbWQRC4A1WvjKoAVLnm4WWr",
  "key31": "5TwWxvVJ1JVoCKrEFjTq8nHUw128PQTtLtzDonWw4cDU6wepKJy89vu26L6Xv4DajU3jsKx7dwsSXtTzcnBwHDn2",
  "key32": "5Fb73gejPKVbYxAA12xptjAfizXBn24hgR1aj5LXmvWicUaViBxQiZyQYS2zsdAMyhruzp8nHCNt2tyuuSZ8LRPm",
  "key33": "2i3pwRxwuuu9M5bHSqjRZVcNSbuwAqa4i18PBgZvXTWGHe8GLPg5odsCt2YL7F5EdcJSZPFcGJ7qLgbp6w5mxoby",
  "key34": "4KHidDNNAbRXsdKeQ9bnBkwJanX98wKx3AkkmAiGWJT7W7WdJakXtshMp5ueWEbp8mCaL5DFdPCPmZVSRuJDjbX2",
  "key35": "4573m6KmdYU1EddkAm1URH95ctUUELQM5971ZDhFrPc2obrVcd633USr6E4T9DTE3BozsUut87bYTYMty4EUUsgv",
  "key36": "4Dho7a6796K4QU3eonKe1Yx9m6NMhhSwp8zaUw66AKLGupT4VdxLFrPXurxxr6Hurwi2ytoM1vnY2ejsds6SJ1aZ",
  "key37": "4UFL7T4aEy3TtrnEppiGDQueT9NerhN434wnfi9CTjHyAFzt3w9d1peVASUnGAmkiAu9zWwzMx5DteP6vcwkpB8E",
  "key38": "29jnfyj4btsXn73T74b9yq6mRgpnASkFuLVBKj2cgAcmbDdvxmaZnGNU9L8uUkqR5e8LDT9dKVkKdHCEe1tyeKza",
  "key39": "2Vtf55k9snvxhRg2c6SSQJ52VmBScnn1WQZxo3DS6UXG1wRoL9KPqExJiwhBxYqPNbxFn87hj6QiERS3cACSTwkT",
  "key40": "3cpBuX7iexvSg6BK5KxAx3Nz9uT5p9sSwsHsHaMm629FV5c9bzB62L4PvQpH8rM2M2AFxFNTPrrqhVbdR4JecTRn",
  "key41": "5QgBpRJvvWyGeDGxMKQ9NcLy7GJE7DBPi5gwqgkFxHqksvzifsVzRfXvRAf3nR9cAdLexsdWP3Zd918p63jGmjGF",
  "key42": "23Yucx9xd9CYgZ4adRUCD8vkvRqshzhpwfp8aikRaiL5Xg2cCsX7nmfJY5xkFBAswW3Pp2wCWEk6sTLNfsk3nJXa",
  "key43": "58QKYT5bvpSi8JYfBodr8rV4pntfX3SSNwiCPWcycVRzzrxmYWXYhHWDBRA63BmC1axDouo3JYwH6msG8qa7KCGR",
  "key44": "3iSAuN6RFEc8vZNWmptVMPRkkdvAKRBrnLp95PeyA5aprQE7RyLvHyE2cHXZBs9cAJptBa6ZbtEBx5SFevPmkUV6",
  "key45": "4MEUuH8Facgtx4z6yaqYDJNzMoMQEMLvhsmZ6kh9dwiVmBBDEvrLWfEPceRggUh4WePQJ4NHNcPuwSGeaWCC2omX",
  "key46": "57Z6MAgvovyFw5pB9b1mT5U5K2WpRwTiLYuskYuhFgnJGVSjaoZZprrQzF6ELm31rbxTqfkRqTBg33CYASp73De3",
  "key47": "JJ8fFs32TnmcMMpknP2u51QCtWkVx2jk7Ne8RmFebiMjxMzyWd8H1mr1bj8sP3mv3MPYxPvMwx8fbLpKCsVViUW"
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
