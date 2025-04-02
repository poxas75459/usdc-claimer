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
    "GWDSqfqc4571Gkk9JUEYE7cGfJMZjvTEbGxqGceVdMcQFTGTNjNX8fzPecQwHEBG5Pk8ivSzkk4vrTFU1fr8UAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3waF94G3cyqUiUmh3sce6kzx4PAqNjM8yV7nG7EpRf4jXHYTho9YGBkCsrixrYbfgRc8SZTMQvV2YJPZrJx51Uaq",
  "key1": "tdqZhzfZVHhR4H3wMZ5nE5dvnU7hgVRho143dD7GtyCq4AjvvwoxKyPKYRS4zu61Hq4VF8uAYWNhqR3exw7Ufys",
  "key2": "3fJm6XXRfUnksf6AdSCDRiUXp7nNr2pdMAyAVMiaNrhF7Qrh4xgYe8KdXxDva9f7GRaYHvyYW5wowzranmhJ5iCt",
  "key3": "2dXRnrNPMLUFuDbqSq1VMsLzK72juPDeVSoR9qgEbDRJr67KssmQuR3V6SH3q5jqNoa5cr7uhCNtJAXMovzvH9WN",
  "key4": "27CygddPfrGi44Bb5UDTwSZzgJ9eE8EED97DBgRLZGhGKmiBgBJ2oswGuKu6AVXpftpd2ebMWFx95zvFMKHh4mKP",
  "key5": "4U59TZ6PQ8TVBqwQei43ANnPkTnaAPkxYFARyQidKoPksvJiEoT27zkkerf8dt4hZiHu3YXLsqH1ZWBB3pKueCjg",
  "key6": "3pMd2AkVY4uZqy3wzrwTq43EQiAXCk3AYDHekDuMXQiDUNSQcpfB8nPmegfAMxfMGsfKa8CyQLwVQZixkycHcfKC",
  "key7": "3bLceFh3TKrUg9uJw8qqEzcFXdWFGwWUvLZKYqdW7Zkx3pVB6jFXk9cpZamh9NNypknqcgD9tkk3ayprqZoTTcu5",
  "key8": "43z6t5iVGpc1xXzDv4Mcy9YUtqi1rLVWcTCkTdAtAbrFkoWKj4gh9JgQzx6KCwMqgDXYB4foqo1igGxdUZ8ULqJc",
  "key9": "27ee1wJRRsG6535GqFzgnaL3BePzUsCqMV35Nh9Sn4xR8qYhb7K5XTQRQHrBZA267myPYkQ66ExeQoi1k9DxGFhY",
  "key10": "3zYZEB9rF9Q5Qx8Len2f17eeqVup9trp6PycaUE7xKvStNKVtN2MjcDVSta7P68ZwNy6e9MeopaXD7K9DpjhmGmj",
  "key11": "3xMd196Qnx1fNoVhkfwPDePWhHXdhdEJKKSgaCFdVLnbKvHBefvFzRTvpTtoTq846HRR3nuT3VKHBEzRLnh7Gv9Y",
  "key12": "2VrVi6amsKCwZ2QwMHW35LPMWR2616doFytH25dXPq64cKpQBWweB1J1ZsnjoL2cnxaiLNbHPyfPfrHAbDNbZsr2",
  "key13": "3aQ8GjPHRyubYPQN7hKQKNM3kf32LkZfuVgnP879dJ3TgXB5NEByq58UMrmRGVhN1YhsHnZVSE7eTj34XNHxbANr",
  "key14": "5vX9uEgrWC34nVYQ9k8oYdxQ45NNAm128H3jGar6yAVkSgBpuk5NuK2UKMEag7HTGwa2XRr5F2A67DhxgbGfuia2",
  "key15": "5fBdSDkaoJytNFy9mJR3FSxGGMrsFqfugc3U8ApXqVEc4FESifMJ7MYbjcXyvmJt23atnYYchZGZzNDw4x8MwZue",
  "key16": "5B1VnE5ptkVap2J184axS5U1aA5gcAVfq3gF6T4JMwCiG4T2rhx36d8pdeiHD5vCJeZaRovRxzpit6rQE8SUfXdv",
  "key17": "2KUxXzBkigYmkqV1b6Ru2fniTLNxr1DaxTSFF1WMrDouWPZpcFDtV3o89YWstWT7p4ZzJYYjVttNtmVbSFD741hM",
  "key18": "4r16t8xxSRa3vxwRj4gKZKU2fsyc1mSSLwdLZZdcBb9aUa4vVeYYoWEetAAZ3AVhtidE2c9WcALYTJoYxiqcUsM4",
  "key19": "3b7V6qqFqHUXGrV1MbjWmLHLTQtFEpxZWVbS1gDCRFhmvEi1utzq4KSNMEJkNKc3buN4L3S1nt4KqMSJ1YpRe6nq",
  "key20": "4zGNzQ8fuBdAz4ES8AMjSFs4jW2kLQQrAFEgCS7C96TBd5s5iLwGj2Ph4DC1FVYx4ZXJURAAdae5dbZJjdoVaVQa",
  "key21": "5C6PCFoN8knDVTRtt61SZPGEc3rFfB22ChSXmcGiqZRap5KX3H2WqHFs7KXWjsx7yc7gYtEs6rLGED8zd9Lmj9u8",
  "key22": "5uHSyKxTfbvRtAbsa9SMb26vhXNico45LKwSzXsC7HvVNZX243T98mQVW8ZbBVjtJdVJZKg6r3TxYPz82QKUEG2U",
  "key23": "22TmLuLbkRK4kZEnC9rRcykNxWmKRWqsjGkodqqTpwDVwSyp12KPu2bYNpXgRWoH1QSb1vRCw4orrcKKukD7ym7N",
  "key24": "rPiEEYdZiNYrAqYHEwBr7Y9pdtBCEqYgRsXu2i4UeDYN7FK6VyHEmxgNnwixFkzKjfpeyXN6J954h4yauHogqk5",
  "key25": "3aPPqV139WxWDKPmVf8n8sQWcCHVToV4h58u3fJrC1UYEGt4yyQ6xmpPhTyQqSzzGbRq9TXZLTVBwwDgEZDrMCmp",
  "key26": "2kzfRqNjKYQuShLDB8rV9DfzPLtfHxgr6i8pzEnGMKnYB8jVbBdkUnjqS3UV7qyMsEShbdCrQGTx8t4UZh5iki8u"
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
