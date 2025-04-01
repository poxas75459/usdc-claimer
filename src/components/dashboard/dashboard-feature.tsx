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
    "2mn1fLJrHZpmNsqEY1RGWitZkXvZtUXL7osQS9SPf9bzZ6ATsVyJuvRQ7hiF2PYakgwP47jvuDXxwVyyNMyyFbyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P8DA4NjVHCRWquvWFd2Gj2KSRih13Gn6Wxhz8Ci1EoUJFTBgwCAA43KGEiwAzsryZbpR9y4THfgVAcL1nAvNBfy",
  "key1": "3jevSV4BKq6So2uockWVBGZjgszHr1avcuK98f9wuXVrtjkAWGN4fVCDa2mkb6nFUYJUc2XnAJJ9ZDwfbQGTmofL",
  "key2": "PcWFRNrHcAmhPoLL8qHAEuJdr29WEdvSHhz8xpVZUQX8qV55tKoQQrWEYys3CSZpCgnxKrC8jZBe1Um3uTNnqSL",
  "key3": "3H6DNgr31oeeu4ZEfVrSLwah4Na8jYbfLbNbgswm7gP8HXiT9bBGjQdGyPTvKBViLkREoDaAdS9DhSXb3ufXCvWH",
  "key4": "4WS5cxmk5PP8x5w1iA6fg9AtRFa3nheAjJJKatE9FkQvGmo4zZbY4aDnab6qfMBbawpNgoX9rUdzF5AXZY2H7gsp",
  "key5": "jWwGezXfLsRw77Tjd1PzAAjqRi4BcbRoqhKASyBfRPvNzcQi18RBuxShK6mN4B3AP6Q9tn8mnGxvzwGDVEoV8JF",
  "key6": "G7zcy5ThivBHAhTZnWe2iQRUjXRz1QFrKKZFUmHqWmjN2JuP5Z7xKctUXmtNXCaZWJvRvUR7Rn1uxmzp5QtPWqs",
  "key7": "G1Rj3EUK6nznGSJcLuSfg324XdWQVnmXh1wpZ3FMqrpoPCD9i29boFs11v4Zo7sxyRgnH2BvcQ7MnkEw9nQWcHr",
  "key8": "4sDZWpFzX87dwdj6ciX7YpZTbyDfUp1x43M182KnPtKnCsVRHEGUfB31VwV5CtKdMsLb67Qqw4KzGvWMAJD1MSmY",
  "key9": "572VPEbhfaCu7X3y1VUMp1MVy81jHdjFWHX3imsMKvJTr82tZutW4NHfgxmbYV8AgCVyAZx5h9HAhcvHxADdna4f",
  "key10": "3PzQKmSgiAKiaVDk19RqCu2aTr4SddqFAsBDDrYMMsxCLGuMkxqbxr1gwPWeJ5Np8yegbbR5RDWK38kcJWFHpPLQ",
  "key11": "47mgjczNdUHzuELEwceAi5yqWh2iv9h9yAu5PWsEX3pYEXaMSDvMG96fVeZk7wBJdWguUN4hdU8yGoCUnyNGZean",
  "key12": "taLSVF1QUZSD3FsihZWTUzAJu4Kbpg5tEvC7ddmx5JvzQeWqbzfGZo38xZsDwJyHomVJv5JrPedJbxrFCH8PPZK",
  "key13": "dX1XN65gXqmAjg5y1umJeTN6PAZWUoCNR8bTGKh5kt7dy4M4e41Y4XjoBzuKuAW5kt2st4XQ4oDQ44NHPLJX57g",
  "key14": "2fM1YbmGGYsLuEEt2qvHqRZVsQWH41zCF1u8jY5zC8818vAYPkr4fsxbVVEEe16fjmRxhH89k9KFCJQehrf9FbqE",
  "key15": "26uF6ZcKK6T2uUEANJi4K5353LVKjndn8GnRNxXkVV774mwKzyF2gEgbKmzKeyRJf9ts8Yz1cqT7iXMEHgTRrnq4",
  "key16": "4wBEP8JCnMZ47zzgk6xfYTCYhH49NBpW4M2UddJjo11fgit2RKjWq8HCv191JZ3zoiazvgoe8T2betE9e1USQ8cP",
  "key17": "4BZyqhy7Xmn3MTQGoWBH33nCXmPhWu7SLEnWGExgp1WQfX9AMQKiKJm3P4h3kuNspuBYyLfomgrt1s8Vy3XFQDMZ",
  "key18": "8tknfYficV8d7mPoTDm5Uvp9K7Dhe68xv6oY3QkshZ41xMKEbqhMioA8Vj8Et6zEfhFTB82ajDFAaFZRFghsf8S",
  "key19": "2Fj5KLZLzgtJX1YViP25UsNa3QaUBPKXmgsVqTW365M1eyKQKXc8dkJkrzNpiDqyoKhQwJGa7CVLcfDq3re9VN4k",
  "key20": "62W5g3n9q9BTrBKu9utMiEhznAYwPfrD2SePtNuZitAVfRquZmfwWtRpPvJttABSijgfXNsFCs2CsPDQdjzt1Lo7",
  "key21": "tp9wKUM9fUbmAPdB7tXa92bhaupWmbP2oNMLxGPuQnnAwz1CH3k9FqQm8B2mevVrMPNi8Ee1y9Jj9VUuJ4KaKW4",
  "key22": "3gUuaqT44kjjYH57m88bA5cKwUvpsoypYvVeqgq5Axvaxq75HrWvsrzBC1e6rMPQKecunuvBLWQE9TV1an42p789",
  "key23": "2DsAoTWjChXwagayBgVuyJUETqavicA5r6Dpqwaof9PSw6oZAaU7xhrVjkCncCUswT6AXsXwFVTLNEShcDiWGddM",
  "key24": "2msty8EpWVV5wdURrwpiQgn4q4MNRKxixnrvaZ13cKadNg28uwSFhBMnjV3BdUZpeuA1S7HtpizyUAaAtc7uWPbm",
  "key25": "38vzKmHgrziVUbdvrRbtbxJn1bwvay1vpdxCj5mtqxKyHW6N6XQsGPcp7GnjYdn471B5AUrsCfuU9aifbRqY2TWp",
  "key26": "3qSqZZSKpWyH19VeFHARp85Jqyo7MzF4Q9349ZapsuzxctY7xqN3kQudWnsMxP6G5jyfR9fFSvo8kzF9DU8BZ38Q",
  "key27": "5xkEWHWE9kuZBT6gpHyKTfjAxMaNA8cY2kvdD8fPLE23xECdybhgwwoXHqKEmYNDRmK2sxD2eSNNn1dW93NNv9Pb",
  "key28": "3jp32hap9TeKzioXNbs5XdzuuDuDgeFNNcZ15t2Jc6cywcqWz4eybo8ksv1cX9QmXBMmvrmMx8EsriR83Lxhab32",
  "key29": "3SDhc4sqiJiLF2pXH8mPT8gZiSzhaPRSc9gzvWRkxf8CLenZfgfJwrw4hC889aAEW9U3jEfshA7d1GhTWx7gF11c",
  "key30": "5QvkRcD3v9bn3ivHzJCQY9673EZBfnF7VBh4jE3PcBPDFgjHyKWZd7fPLKSgJGCsJztgVxeT4nTXz1mmgjmRKBTb",
  "key31": "2i6sojFVJHfEWscZFZsoidzWPgeXVnFDgULsqje9Us3BsnCrskk7szBrRQ7MaN3yYi9N8yivrPt5ScWWhsUfPFiv",
  "key32": "5M4kj92zWNE151tXwuDco9Xyg6HkEBqMdzbqdEEofB93dBf5qyc4TsmiWgjX1cQNwb7SD9VPouEAFgrfQSS2E8t1",
  "key33": "62QRaTW5Pyrp1w7phrkP44GN67oYV8FrU6Zi3vRWqGXB16Dis6oQk78qCcqh9e2inZoQB1CQ95EpJy7rtae2G7r3",
  "key34": "3ekoyN4fjkhYg8rmL6USitmqFWktdMpCiChKnFVaLsbsbfq1pHnvkkSQt2zq9TJdrZpv3GTjfK9sqwsVHHXeMhk6",
  "key35": "2hHm3grpg5JKtid5MP1DCs2B8P2AqVB1ybmbMYDpFuQMFi6oX51eSUwhXJS1yXMtR1N9WUXH78BxFvNXMvUZrrho",
  "key36": "2ia7kFf8gmcdQjwwf95qpEqSHJApsuTZ9Jeu5Gh4adZjLAbGxArptRoqUm326A1nPT7mYiV47iyjazqmJGD4b8bm",
  "key37": "22hgN6qDS9dvHmpv1EWJgmR8HpNdtAVVnbaBGpuQ23hY4X6U4kGB51va2mhwWFbZaZpQJeK24TYK4aGBCmbc3XE2",
  "key38": "5AJZcthv1jewhYnWCqjYFpgcXt6qTC1ytYSSW7Jwkap4T22NpaeTAmTV8VtpW4WxfQuUJmRq6244nFmRvT4iLNrB",
  "key39": "61kEFAHZzDE4uDu7asAhs3joe5A6MiUzH1a5yvqxBosyndyNh4V2zY2dSjJ96McwgrSGPw3kQmGgjXwyfZMjxeqe"
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
