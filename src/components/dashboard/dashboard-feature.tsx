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
    "5s2DigjSABxTF5AwmKHX6piUPVehMC3mrQ4zqHQrZDatRvTe9Mn8d7U7XPn5Rv8rJW2eJ4RjzHpbzFD4dq4o71zL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNyAR3MUf5MrgHLGixxW4c3zrCtSmJuEFZMoGRmNnTEVkXXWBqGVo1V9MSrqApTm3pgUWspzuiAQqXtZh6N7pD",
  "key1": "3E1gWq2aRGpGSigv9yecx8r7tDcutkqc4JFCta6pej2pBX6QQwDyQW8AgibNmJnqn8FnSmoybUD8RctNjncTfimW",
  "key2": "3VS5uYqUYWNusJmGiDMWfLTjuBBN71BcXELgbANBPR7ivELdymdFNLzhoM3FAihKPSmGiyezEvqwNLgksxdKiCp8",
  "key3": "iaPB6Sfhjffo9279Xer6W76LzX32zAVjJd6DeVuu9GfgZZueugUoqBvhzJ6JVdvLdyuWreZrahzjBXNGsoCPwU3",
  "key4": "62FqEXvTVXm2AE5YERqwGaQ3rfmXrrbsXqbt7qr9b8VAHFWRg7pLPLTXUsQeG2qF8MgdFy6CgvKVg9sbtL2ryRDH",
  "key5": "2nk8WFe7cwB1d2xsYBcVQHM3eVZK2AqURfk1JKMaHwSfL2LL2vqQxciEyJVPL9CzWpfP5v1Xs9TfakeUr3sNfEDK",
  "key6": "3Nmq4D2C8eEeXfBHgbKhFuinCjPEzbsKXCfGg3gaWPuQE3ZzydtKtyR7bvC3ESfLAXSt4hbZruya5FHg543XSUNK",
  "key7": "2ujMARTGtiUFrzLMiPezMkDtEh4ps9PHsRpErRk9yBDNqQaLNP8RPCU4fCv57YTYvzdCAUABkEACzttGZefARtKX",
  "key8": "4EMSBEmv3knJUTWwTcPmHmAVGLQGKHikUDbtsfhYXab1JYKEzEzizJqydhnvatuHahkWgLfiJzEVGFp8QaxHurRd",
  "key9": "Ujh98ikDiC7ynudAHnohic2HFwjVvdBp3mdBVrjsRR9JW7UkAJoKSGxDKwxkZVwSggD7eJG1W8ayRTpm3Xh8QM6",
  "key10": "3CYAXu8xsPiZtCTahSvVpHdfUz5GYvmSxAQBEpa8fjkGzU756rgTA8XVUeFnBPBYYAdafeCJ9VZJKXTPiQ96fRt5",
  "key11": "wiHgbAqkqpmJQugGtHcUK5aPp11h42wHiiDkXeB2snoE3qsT6zsy57KQizxoanpa3rrqaTfnsf6nKwo45RFxcfu",
  "key12": "5h4C8y3PYTmtzGdmHutf9X8EQKEVCgNma33vQwt4HNRmRejZmnuKrDNAmMwvHfo3ATEbjUxmfUKVcRtXUom8uNin",
  "key13": "5xQmYmiDJLnLv2NJZ19z5LBuUXnYHWE6aTa2KPnV4UFLv8cTZrgbGP9dgAGj5VXj2BJuQjScFVd2vPbmWWT8k77M",
  "key14": "5j9HX9PAEHtfFdtLeC8iHUp7LrYWiSUPTnLK3fcULoKdBhpmfSzg6tFSpYXHAUKYAdnRM28p4mqF2mnUivTyPQ1e",
  "key15": "3nzyow9ko3URNemeHdr1AScUczAf7apnfht9LDu2hyJdmbcptmEYVs48NRuCyEMGwXJw7FGvq5AguKeQgLg2VLBG",
  "key16": "2wGi2H2dQK7sDN1GW932PRytAAy3Ze1cqagVAv8q1CWurroYphe4FWipj7mCAHmBEPCC6xuwmeMzCqMtY5BjNv9m",
  "key17": "5GYRTwB1n5RDFK3gjZbgoiaU54UeiLTS4wNUskmWBWfmQfXF4NA1K5VRtVGtNXoiEdYyZCC6JJVX78j86Luogqv",
  "key18": "5Eoiiu4hdPXQPG9CqdyY9qx8b94gnJu9LzBQKpt912MrZcz9AYE6zWXYCNDrUcEcBHSbBn4KmpHjkBj36KH84sZG",
  "key19": "24DrbGfY9XoCZnwCg6QwFzw4B3XKEkMcWVKL5UGVZZMaznXPEWBmLcw9ApuzLAotG7SbVJgeA4o93KqA5pvpZE6Z",
  "key20": "4SDNst6K5A1YmkFeMiAsb1TEmMGHGoRE6UJTvQaHApgeA59K4dE7acyLREzwdw2yndnPVUXwGAvxnvrbHTuXUJcZ",
  "key21": "3pqnPpMzYZJTLg6zsj7GkC2hucCbEqhV4WYpLGei731NaExKFKbcvzN1upmN1oRhSSMnzkmsAtiocomr2kKpSn5N",
  "key22": "58AjErVs4FhBwkubQvbJwoYkBwK5vMsSQXABXVQ3oNynukHGfG1ZaYj9Nm5VmWFCwQGMTUMtNYCPkiSvWA2tVWay",
  "key23": "3FJMDHsAqe9W3is2QVSGJgBAp637JCf6439DK9QEAGmnJ55aUmMeTxDGYoMh2HyGQtXG4ZBcpnrFB5n9SaYqHBPY",
  "key24": "5h7eMdtpHMgU754G2RuvYwiECVbinSxWg9CDUEFn7QNkHaEEesTxPVvpembLbJBTrnxKk83V5JkSBx88crc4wVHr",
  "key25": "27UPTwbG6U2EbX1ybniAvLQF2foTy1jCBbsqAaxH5GpC3TJnKmvbCsXEeMioXSrPDYWMgTwHNhGYNQUhP7LFJJdq",
  "key26": "57xG8jPMiAUr4nvLG5oSqFp5WFYCmQkHTo76owocDjgZyTKxHezJGmYzrihyigLjdKLWgo4So1CGgdnAEu69gnUv",
  "key27": "2ogTCemiZY1sYJv4vfKhMGh5wmQkGb9tt96nrdfztGbiyEQX4xTEZhxTEFMKuKX5BUsALkNNmP5MvtUtvPq4efdg",
  "key28": "2MkgKbS8Lxpt8mwdUB6yvLjBJP2MePnxiyzF4amWiAcrFx9oYT3aTEvM7TQFs8TfwFgSburp6e1MAT16eWXPbsk4",
  "key29": "56fWAhanF2Q618HCFw1UgJFUt9b7YATVAGKfNuppSp4Bf3RxP4XWUrg5UuUunrqUjB2aBzLMYGGyVewjmhxyR3aS",
  "key30": "4KENXn1rfu2Gdh8XT6dRRJkFzzhG8ZrXx6mTUurir7SkRBH2gjjnGbAfZjSf9fFfQoyZqHugchDcZBzkSmbe8er5",
  "key31": "YaaaRa68P9QJLGiWME4J4y56j5tNw67y8grjRF2ke4nBtGCmqRLFTbxcfd3BM2Sd1Gr63pBgxr29uVoTnLcfGQi",
  "key32": "1285p1RF7dqDv9C9PV6AU3FB3zQgDQDjLyj5gsn5TsGJFo4922QxfaU8zUTKYiAtEkzsUGcyLbLKP3f1Fuabiy2J",
  "key33": "3rsQeUUFvDGSr1YP5bLdUpBhGy8uN6ZNbi8NDBzWEUxd56p1SVCvTazHUAmPu7D61odmcQN5FsMRcwWe4NGzTJf3",
  "key34": "2YHnZ3GWuyQ3ymigtcMjXR2CixmyUueMq1v8xaTcNvYawU4qhWxnNrNWybLGQ8zKvwu2iEk6jHfqK6yger4fUnyV",
  "key35": "2sfSYVrFEe4ao1rBC614t8M3TusHC4LUhYcYjHJmpFsDySvfz1SKmCACm7aF6uQPVisfrcDT2m5B5qH6YTig6cjd",
  "key36": "3ftdkFTfsqPj6K4EwqAKhMFuJXWd2UBoJwU9nKTqF8TzK3iXeh6Meh4Vk3U2eawhkoa9PvKJrzhNQZPniSqRt1Qu",
  "key37": "3HLNZcUMq7TCn1T7hU2yVUdCafssuS2mme8gjMT3PbtyeeWGBnE7xR44FamfvrxGGfgn1GuhGpQanW3iycgkrtd"
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
