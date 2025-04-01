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
    "4HNtHVbW4ctWCBVVU3HN4qM37pk3egeVtXtJmTHE5SqvfFEWW9mqC1FQ5cWFakQ1q3dT6m5V364iSNH6MfYExPat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WSZ9QVyAgSvHHrjNswNbPHc9rmGtmgRMXPFzcRYDikYA7UkWrPpnh3CiEi5TGiuW9jSRBYRzVStsvwDqMW8JZxG",
  "key1": "yF82VHfv7UYZKpdWhTNvsuFU8EUWfEePAYXuN8kJoCuUxAs1x63P4zEtWZePHyZUjC5czmnSeujesTWa5JsA2Jz",
  "key2": "3C4p6PsPRiXgw3Y5ioxKoLLkUZj5FEuYkdQpQaoTGNDYXPYJ7Cj8qWUFJzQqgeECwL2NgMgMmjcNToDkJtmr61Vn",
  "key3": "5hdThc9yEMRKHua1t6cEMCajRGvc5skj8VewoCroSE9zcMAgYukgsWbY5WBXC2nKjd6VpucCwSf3rf1Xd5Ryn65C",
  "key4": "2vCafCp9wMnUyMLTWqGLYGVNXNsgCi1f2ZtD4xxsVW5rLdAgYC3VN7FczpngrZG1YwGCEevhzL87b7P9WsHqqiL1",
  "key5": "47v5P22xUgYoMg3x2yFTmdWcmpnkmtz9W7ii41NnciyJ2GRCeHhf2TP9UacxQshtrwbKKa38WbKqXEvtu4GZGpBF",
  "key6": "2zQDJZ3aKXjdX2EUXNZr9P34zXPVj4hmn8H8U6uvTKttcDKQSJGmn7kkr9QYbWgiFDCC9B8mTLcoJGktSmtXRpGp",
  "key7": "5yy5qcrV9sbhFVqBQeJgZKB7hSXhhSAhk3Dbp8audL1gCQocfRCiQUAhiZWeVdjyUYpJfaJAhnoXKzTvMVVyBGP7",
  "key8": "4fhrdX13t6H9kKgkTkww2hZavdyVp9BDBADBev1oeZuCrRfMrLFkDvCc8CiuTUfDVjR7u8cN3cHzySNBZRXTnr6E",
  "key9": "5ESK8Zt6Gb6ZRmuGUjxrfKMbFmykjf5Wig1DHUcjrZgdfueXaNa63yN9QJy2NmuZh3NEC29oyhHNVgkEFCVNpkbU",
  "key10": "4ytLdQfJyHbkjg24qKwTrYirg5yMaxioTr5kbtnWyEYGajBHLaMLUPHT72DoLQ33E131zdvj9ZtJPRBF4u9sKvzz",
  "key11": "5CVvzeLoTaq68Cxae9qMLuCU2DwbboScBKWDxQ9rbEsPsKytvpaXLbKUr26eANQeLTQQDdj5d5zrubgehapKAniM",
  "key12": "62569mExXaCtVFeZrJQffjn34GZkEP8JstYoBk9GiwA13eqx2E5gmXcRDWrDZkrDKx6AURCKgKDfz5D98goNwRuA",
  "key13": "32ziXWTGDUF8bbDhKq1eftDMpLcJfwbg3Vv8Syj8cJQVVuc7rApPhTBQsAfH5uy6Mu4iwvHtMQPHcPV3c83baF5j",
  "key14": "DcHXvGZC978uoXWWieuSDchDyvLQBenYJpJi9nX76UCQUukZoLg4ppxozAUdS2CGBQqwXTNc8RbFEkASWzT8cWx",
  "key15": "2t6FeAiFpjLkWCQWDRUeZaizgtF8xTSCTSqpcEpAxdBhQzk11SYi7ydrJSU9nQSSLeTJsVxwZimduFHRiGo3DdfV",
  "key16": "3RQC6mB1k5ZWPpWC7sXS3vK6uGMSnzeb8PBtRjLWd7CwnUy8WBVpKN6kSAQfQoaGVK3kS3P783ecdAsEcCGQCeUh",
  "key17": "1VzA8emfWNFdk8Ecf7D3ApkyJ1RXMdunWXbi8G6LsxUYH1A5tvATN5bgHpeQreqv8sBY1iAYAidv9VNHH5tPP6Y",
  "key18": "5qxqLh8xyRoPwMjhuwaTX8FTeuvmzYfk4VifFtYxXpLSy91rF7oxED1eNwbnWZJ3emyZZQKsHfGTxPM2M8aXUmeS",
  "key19": "4RHCnqVWeRKAJiZTrP7KJLKENGQ253vKi5WxS5VTEykWBJNFSdhj6iFqE9B9FGvHGBuLXVSoMj6jNWQ7zYPYdHDQ",
  "key20": "57KFzkGrGmBewTfkGMeq3heTYFYmC4CsXpRdf7fsvseGHYArDwe8cNSGYUf5osbqiUGxtqrjFtiaDUsZbGvyeDnd",
  "key21": "3nDQjxU85pHjhNS7AuXC17NrVtZqK122d4MUqfHAywh3FRAV5T9MTP2RLZs5VY2KkLEhaG9KKZbjeat2o6PMQxnG",
  "key22": "2iEEGfW3Jvk7WHmoMaq7KYMYdBU7ewyxCDXezB66uJuC2fr37NHerxZSHDskJFDBDNP8s9QEqid8PbBzHjvMRdsK",
  "key23": "E8ozPhq192BxXsesmphTKYTcTcjkErPg7mo5niFPms658ZKw4AjJD6JfaEpjSUGvMJNrV6LZXjVXP1jKan9h9GM",
  "key24": "45RQFAuA7iAKfYx5kTL1CKr2Ke6LoJxCzXorLRGxJqzZbHz7LkHdWsy8m24m2XY3CPMZQDnveX7Q5Na3nhRvVEkC",
  "key25": "31MqsNwePHJdjDe86cnVikbzDCSaQEHSRaAhdyV9sbKqYUJ5ASAowr7KHP5d7qZQaLgAxCwtbiaL3Xx4sg4c399j",
  "key26": "5txCvdZqBERCwaV9ohk8wdQy1Vu1AuuPiar4FDNbctuVwpL4vCZ3o2B8Zy79Xd9kyfnmf7q9AyEBPwfcM3x5DJ7J",
  "key27": "31ipj2DbzkhQskfk2CXdgg3mj1vKyJTQzpoANLbK2kgApCAsETeYurYVj67nhuainwsATeiAHwQdZ5UP2S3tdqhW",
  "key28": "4TbCJFNnBG4k3P1ggwzLqLP227f5At1UAkjYw4Sc865Ab5a3PofwkaunrF6jJq8rbZX48VsXNB7b8JCzUWJ4h3WC",
  "key29": "4jBhTritBYyB4e1nxSfrAcMXD8ePjaGLGFCBiDdwhbEXWnpfPXopvFAi8kWjfdmJqta816wTFYNDMXVJv786tCN2",
  "key30": "MzBG6dKvn2aW77Q9YE6pZZsUkDS99iU8qhAFEf3eCRSGMd2JBPhRdeLbURUPJ7Wq2MjwPMCLVRkUiJLuSuDsGA5",
  "key31": "3ZKWgejTr8M7a6afComaP78rrkG8UEXh24XqLd41XQFKaEFBuzk6SKKvzczttif6fbjQH26TKPvxZjdEtk4XdYs3",
  "key32": "42d59Gjfc54Nztxtd839dE8uK4m9J5LVJyK2nZbqVk1sm2SX9jgn2uX5NZCrQ3vJD8gwKkkwJVcYFvTCCDdRPjr9",
  "key33": "ZVLW94qA6wGmeSFNBWdem4d63jL9ycvK1BgFet2QeRHpeWmgnz2YtnkmamMwqPs7vKWT8f6xpLSabotkTNgyneb",
  "key34": "2dRHFV5BdZzJUKwkicDTC2tgytku2TebbeNHPAb3WhW9PKUY3DWAGiMq7Njd39jmQzsM5m34g13y9Hu1GVt49F1G",
  "key35": "2w1AGxVF95TeR6KkP1s4NEcFz4h65kf6LBHqqDezwB3vvd3s11jEz1og6k3pa9DeJXGygbYcwHZ8BwsuBJbxVZV",
  "key36": "SnZBK7jRzrV9ETTA5nJ6sbbvNJumQs77FJ3veKvn9UhdviEXnUSyXgvaMDQNDMN99o6EYjGTg2784iXBtUB3Kw7",
  "key37": "64m9j1PL65GkUfcs4h3UeCRJ5jEHVu3CF2HowwVktuUtK6VB4efzax7xwcJHu37MyH89X1EovrhGea2PytuYToUR",
  "key38": "3eeGTeoUECEnPgmvLEAvMf23q1vDvo8xXhEhrTkooMHBWSyEZxVEfsfEGFm5kk5KBE9YzmJcaxdwqaAo4nmLwXsv",
  "key39": "4xq1KQoy9pZW31YygVp6Y4GxhisYPUVsVJcHZFXKuqVwtmqSv4PqbK1eeC5umAgZRk2HD1AxatkZRUU5p8BJeXuW",
  "key40": "32nTXgTHSkcYMMFMg8hGfvJZpZ1Y4mw7SZFqfXhT8bPRfuYkvkV6EtM9uSJurSdvicKLntyUw3U4oByPsLWXy68w",
  "key41": "5XvQmTcEo6xYGFyicxmj29n3JKi7eEucVHTf7nhFREDYucxyJRXuHKJxenmgqnVxRHQKErbbZyk2VH3ZvmgsAvmR",
  "key42": "3ufEuvgQ8WHNNKmj88xsEgU7f6AMKE8xHPT1QepHHpp4rENEo4x7jqxLoygLiHM6GJmrL21enV7ziuvgDhxkLgSz"
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
