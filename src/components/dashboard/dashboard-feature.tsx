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
    "5aYV1jS64Nt3UQgBPifEmMQFvwas1q6ST1CoC7vprU5BSDAbv6oS7ardForW26fsUUiiWnkBivCkkK9ayo5htA6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KvapzRACPkLU3WrbqWg7krmbUSNfkVCgQYKa6dKuGV5JYxKt6yM4FGMKzfmXaM4V5bH8aqVaWamRnA5hcYEnPPM",
  "key1": "hvcUAB3nYtwx9jTwJkLApJCegokPv4mK33yv9wmJzQjhqnKLw1x4XTYEBKKssEQeaKkKLHWFTn56ePLQUFNPD7q",
  "key2": "3EZ9kuwPErfJqB3MQoqQ53dPLNyoJ5Q5yxZm5UTVgB18HB7ymKg43VABhPBmwTU4zuXipGbRfzChQaHsNKEjHUYY",
  "key3": "fC491SKQU2skpgNCtKD9QVw2pAXenycnhQawB9Kropux8GCKEatHaCuppqP5r67prAfziHJu1vYe2E1GYQYuGgn",
  "key4": "5apvgBiYhvtx6w7fbYJtSzePX188TRMxsjpWmVMQL6V3adHQ4E1CT9ErAneuEtn5ismFpwHWJQ64Jtp4XUxuT9T5",
  "key5": "2j392ZpjVhci5uQAFPQCna9DbypNuR21dZaV7Q71uYUPU5TBxXTbeDseEF2XJ6EednNVa3XkJxkHVWLrkR8bHAde",
  "key6": "VrWsVSeyMsBYMKtiCb33FNjmtxrJdCWTjdwfQLvM6u1peorJaknjTYohnmoCiwcbtFj8WqgiUW6i6yj6S63Kp5B",
  "key7": "5PJaq7gZ3rTXHJv2VgistdzD3rAkvnbJHvGS9enht9k4v4pSMUfPEskLpcWZxrBKts8VJK3b4JmYaUZRFFuB7JjM",
  "key8": "3swPvnAvPY6HgNxDgLgSR12SjMfmBqgxtc28u7uZkgLs7hFQytob8tRUAueic6te8pZdtoBC1P6stvNVbf8NicfL",
  "key9": "5ThzoWynLvu1Xn4uma1pMJTEx7zZC247PKkqrKJzos1ZAFkjYnfCVAHH1STHmRpbo8pwxJeshzmGnmxyHhM1GuhH",
  "key10": "3J9JLmKzRGt8g6Y7axcRiPhHrkUtyCrjV7ZUSqkgYZLw3iHb8D3u9CqgQ2oynAVUxPdL9NufLbm3NbjCdsCsHMVE",
  "key11": "P59QzT4rw6x1BzXHVM1Fn2HHLu2pRPWnyn56kvN8Feg9KqCYgiXkyR5mYqy3AEu2bJtzKtquo9zTtZmeAvfyf7p",
  "key12": "6Y9CrMDKt9QPkvrJmqwE1g7RG6nmGFMTjRCbKyR6HXXgf3uZ3Uj6WfHfRVNV2ukmD8dDSAkv3JeerS9RakguN2z",
  "key13": "5MjWjUgRxGjtjaT33mCexyKijUQnep1nHHuEzK351661xnfPXhuQ2WH2W2Hv8qUULsm47JnxJkMdVRjQ66iaoHVq",
  "key14": "DrFRnHhpXFYjqpVxcMy9qdEJ1guX5cVQd1wgSL3KojiJBgfd39KeS3DjjddhY94BQcAjt9EQZQcfVWE8EJ2C96y",
  "key15": "5iauGqgwyXofdnrLH7qSk13La4GoYChpXg5892CpWzSaAfJ7eLKREsai44dQBCeKw74pkcfN6CBbMaAMVjT9dsm7",
  "key16": "4dHhQeW7vBXL4gKcT6b62zs3SvKr6TdujNkKTgvbQCZLwmdE1xCZkwAZcuNzbt3nfZxMYuMH7zvQ2z5UHmFZ84Xy",
  "key17": "3BLw5hoiPgTchPs9feUd7JNF2H3Gr4W6a6s1GoavytYCMdrLQfGzNHjvvfrDokzSRHeoCmH8YTHtkrrUEKBM3tcq",
  "key18": "3vAaWNtQechghi4KsV8kBsQvsRLCW4wC7MvFQnvG29YTKvqhsBgaqZjnykkmos8Y9zw4LUFkkGiVAxxRw21JBavY",
  "key19": "33R3BHNnXjw1THFTMwvAqzSqfWWDwxnkzqeRSaiRucdZ5MauXBrb8jkb1d1XpPY1M9sZfYw4z92m57RcB12pDBHC",
  "key20": "67CGUXJasD2PKcQCpgMremAEu2Q3bD5aUWpZuCLvZqgWQD5GqTj6hKVzmLmzyUPEtn5g4VMMuJpUUEx4sbGqu72",
  "key21": "5X5t34Q5Pj8VTETNG6baMwiJtfkzeFamv7RxX3NVC8C5Vo7LZXwLKvEPoxx23dS1x1iyPJ8RJ6um1rQxGkh76Jvk",
  "key22": "5h8GyProWyhC1gLHR8YcFgPCYa51u3vSNR9u7AeCtVCZ7NUNBSwhagvx997y5DKu3ZVTZe86DNiQTZYgC76LE39A",
  "key23": "rV5MZvX2M3LDu3vuAf4i2TAJ4tWHbPXpo3vJrphSBDNnNwFVFErFTP8wUD1RsP5MUmcRVixcazFb1A4pRRp2zZw",
  "key24": "3mwjpVwF5d4J5C4MJhDUJsjNWDR6SDnhhS4hcnhbxpqYhfS91t7ujufCXmuZbGvSsMjPdXLvMVpcjrKo4H1UQJTv",
  "key25": "2aovanXFdjfrYR6D9afKjSn4bLqy7xHSamkGEkMxTW3F4NRTe8pJ5Z2i37ygFmQGjbfTmTGPaBL3eKfNs6JFCtFk",
  "key26": "421xR6HAod5vMxAueUa29ABejxM7EDhhL1jp5AwuyiqhT1uKagZdgzWqEXXgwrKT71JQrm7DGSP55oJdU649VKtd",
  "key27": "2QBqYkZ9KigcmcCzsccK2KSbmQCEwpntNKGScxhmChWbFhM5h1fR4LR4sjc3idd163GiZtGXi2vr1AHws9pZpYi6",
  "key28": "4ksMwJUgE2ssf9AR2UKbH35BZHh3tNNWfTsyUgm9ThLvvfytBwN5Q4vz6yDTdvAqdZPcyraehrykf87eVwAiburh",
  "key29": "iCwQJQtybbRmh5q7b1KpqQfz3sveuzheoucpp5wMU8o7yU4qR55nUNzevMKassuDxHHdPiY67qXBggwCDxJSrha",
  "key30": "67a5JZYSjLkBUp8DvZMiaDcVkDBHCfpdWv93Ce49FG2Qig4G6LDQJga1xbPzFMSfspSfQk2B5tPCiL9JQ372gZvh",
  "key31": "VxWuRj7D3hhCN1pUjBo1GHLHB5hpV2XhPGLvSYU8nxUWG6RNHoC7Jh62K9upqT7mRKtJGEEoFsa7XYkFojy4aWH",
  "key32": "HoNzGkSjFdZe4ixBPKgZ87yufMoSiz2LR5tF3KRnb9kVH7JhkmxXTq3uUtEb1jzq6zy2rF4ofh6dPkj9ckE8CCn",
  "key33": "2YqdBDr4GmB1VqwDaKuJ7YQLbSENq9coiJMKn5oEVur3GuKSZuc1dR42zSt8gUbSRt6gxCaXVxRHoG1m5NNigzgm",
  "key34": "41SU3wm5H68Q3pnpa8j2vGmRnbKydHqfi2HgjhgryXJNbKm4WRcmjMe8wkrj1oNvKyhisW3euoUNLhGruw8b7byA",
  "key35": "2rTGLygtCTBuAwH96bM2en2dgDoxZJAob9ZCpPUF8d2TMvm9FWNL9uxgposhL2Fx1QDu5WpcvRks2YtCmwbBCzPs",
  "key36": "3MaRLHHScr6Mjr11264TKU7sHmZmdVjixLoGgvpsABPuMVJ1cTMzYhyJot5sc5xoSFFqNF221EBZtX7cBHJxtfWf",
  "key37": "4wMEdTJbMJzxdPiQS6LYZgsM8NdgLA6J7XxhBr7MRpRJyBU8bmVDGrzwKr38VqP34jY9fFpiV2vLLNRchVLV9EMg",
  "key38": "NxuVU9GgWM5aTqCYir1u2dnzPonhTf9zxJNNk9FrLEVJrgYCKWN3eNz1ionLsXPpbezF59rvvjbqSpK62AtbNLy",
  "key39": "SKAxkz1yALjSW1ky3nHFfbQpkwsHUZcLFJyYZKbMB9JQQ9Ru9CcMT8Q1DZHKWra1hTkBGsFUDKjFNVVodwEGV8Q",
  "key40": "4T6uSamjLoaBBNSyCXpzR9czqD7dJCb2eViAPRaBiiSLDZ9EBeq7bDqDoDP8pdhzynSdSekyQ7ZERswetVEfEr5A",
  "key41": "5caKBsQaamSGnfFuUaMyzGfaJbEWQdcAs9WyDjCSoTJwiEtdQDifua8b2ZcqUZW4apfoMJ3Pb2rmUS1yC5oy15iB",
  "key42": "5Q4Ws621qHZTMiCEER1xZA1nsqDZPnFuJgCcXfzaktc5vG7BRwbWRCkhpWvYidnB6n8Vqpo9KPuCPbeU9UjvoHP7",
  "key43": "2PqJgUKLRdFewDBTBFunfVtt76LCfzY2PKXyrX4bPwXq7EsnSLc6hUvpT87BKsmJhPv2wD5RS9WaxzYaoJZvk1AQ",
  "key44": "5Tmo9DncSuov5BGYnQLyzssDE4G4k18RThZzpyJPysDdcUCJBRNnJb6rHDbRU7fWAD9XHbDLhpbG536LjTSaYvBZ",
  "key45": "544me9hzn3wxHwEQMLbRLYfwgHBqzNm9NZgSARpqdS2mnumvvEygUda2KZWMtoCJAFTapavoaxrwDRX4MhTNkVEU",
  "key46": "4Rh38eFGxMKLt44ohzb5rAiaoqwNU3P5iHJ523ZYWpaL6GhhWjiNk4pkjdSmRfoYFttp3BVMNxysVZSNEeehg2tA",
  "key47": "3f8ntscdpfSXPGR5p3MNosCensD7EEdUpVxnmNtQbWDt52wvNdMpEqArKgmQJRf9GyWrDyDxjMw5crcefCc5aLGL"
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
