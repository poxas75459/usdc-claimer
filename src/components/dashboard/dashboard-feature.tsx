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
    "5gU5UDdXZyWeuzRJL14NTdWU52zfs9DXYwvvKTq7KnyojpupsR6HjHV1uRYUtYV5Yj9hDaKEyMWkCL8iikJMsZhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQfjSuVGBP7GNXgNetSuDdL2okxWHTBRceLBDpSu5N69i6PLQgM1tRxh1pZwwPhhvyUUD9GH84tiY4F3auKT4WV",
  "key1": "2mdrRZYTMKu4Z39mXFg3jfgjcLdB3NTGSyT82huneSjXEC4BYiQZ6789aeUHVJGsXP4qUnB63s2oGPDkdndTRhPc",
  "key2": "2QKHKL16sJDHLwQC2YucWUEyqPWG6BZt87SkJtz9PC2bAjXvo652Yo6wuMEdLNrzzoTG1nPuCj3uKoWnQvYSJrLz",
  "key3": "4REJEAix9PPV1k1KiRNEdQ6LyYPTW2of7QgQ4JqM2pjrXn5qseqwqxPGBouEx88cndMXxEr6yEeXtA3is6ZP3v3v",
  "key4": "VY7CKjQVi22SL5xqbapZQQfLHw1WJQEDaA5N8SZLUpXLw8nHxYYW3Z3K55vfgdfLDCvVDsv18Cr8T6MCpR5qiQh",
  "key5": "2vrUUDQbF3piTWywvJpEszr5MX4ubjU5zCCfNfDAZyZiqE2MnrQPxBitxid6AsuskWpi5M8xMkqHQWAimbFyUh8w",
  "key6": "4d4Wr81QRAyUML8KJom9qefkuzSAJLP4Dp1tGM6EYYjUJm2dfenotVK9ydGsG6BhnUg2WQ42A15pEu4sYWreiQKn",
  "key7": "YoYNAERnx62ik9zsNsKffSi73NezSVn9J5PmgJUwTipYAyGBos2CkFoaxX2EFkmwNQwD2qeFYoR25Gh3oQL4ykS",
  "key8": "3W8KuihTw7ViDiRENiJTK1haEu4f9PJogz8zqqbhqus7ZdKtMT2bfET8x9dbUzG9W7UGhgpjAr3EAc9R7uqHuZLA",
  "key9": "4oaNKPC6nDk8w8wEQkGqQD8tpQ1xDedTsyrTxWtGQbJvL4NcVVYqXiMsAzEhT1ARZADQxjqWiZXZSCNHEb6kaFjk",
  "key10": "ZKKhBhxW9PHo679igSSxYnxQAZ9ZxyMF2857ZTL3WBonSXSDKUXb1mdK8Xeaf3mKfJJCCcZ9NhCdHP2anNpd2Nm",
  "key11": "2Pw3UzoJMqmM7jityENgbK4urrMuPm1hCSC91ntNH4RDr8cPNgCpg8EfWvKhjTkChi6fUdPYYHmkRcp4E6GdjBS4",
  "key12": "3QUWoVBaHfZ6uHr387Gg9quRTB6sLsLekNAvcH6DmG6MhDFrLSuRRrrxSrCZtAJUk38wKbJDXSND6MzimSfykM9v",
  "key13": "588tVM8mGBNHcw24whXNRi5yyj5qHScY8JgZLGhhN9CfmHPZYLMbAhkkkdDbqdsgffxXxN5qghDVr2ypVtMmz3bM",
  "key14": "5oMVMa55CtJccNXfa6vvHTWAgs1boTR5wQnscKYZMTyVrBBY15BXprZ1iks3QgxpVhahJKVTzdyKgs4hfLVJV24M",
  "key15": "3gztvhPhUAYm4GWGi98GfPWz5884moEDAHEyPfHQbdxswmpkHfZ3EV9ivSNS8tn8VQzcgdHuXXxCUBhszop5qXD9",
  "key16": "4tSrHqEEuzQPH86M2nvqjVnQGytZHzDZbD5axhJMGQqAqR4sp2MSxJPFrAtnUkfqNpdJFBRFPFQRpGNGmgxdpzwu",
  "key17": "3dwPnmu3tti5tzH27v7kEysswau2rhto5ikCQe9zwMwX3kQEzanKwEhnLJk7Pa4Kgcv2N5NEfndiutJFg7ww6dRW",
  "key18": "33MTdkPKYB1uizQiqFXBLrK27tykfP6p7xfhwxeecQsECCpmCJvTEbuvBiBjpwUhCiHFopCu5B4MP8bDz61JTSCL",
  "key19": "5FWTg74e64XPsp8SkPtQa7oYNR9NiYMRuLn6ezq1oZuNMzKqCy7aLXhLUdR16tDmb3xQ4TjBmBpETe1ETXP3Twr7",
  "key20": "MATe6squVc2aTZpUA2acD4omXK9W4so6h8xGEetYNYJcF5WZTvxNMUkFg9Xjv5aN6svEw8psZbK7KfyNcQ71osD",
  "key21": "2LEx6zEdTGMJmX5daxB64xRB9i6dn2CnSh1o4h8nKBBaDq1DwrUEvdsfJ8tXY9G1UCCNbMFxPhrrVcCauCwgw9FX",
  "key22": "45e5scrZC68KtsWAZNw2WzcXHaFHHpWPE4GacTgoLUZVJLZpjduMUBuR8frDSa9o3r63FCgd7frktoEE8xebK3kt",
  "key23": "3cSERorrxxaPzeTMx9ujsvGHbTytEtvZ35rm9ooQqsLFfACHNjSGJUNQisuWU8gAHzxpwv3s5ThiYrgQVMCii3CE",
  "key24": "3qNJN9Pd52W6WGGJAVhTJiaUVQdsqC4gH6Gtba7SqGHEiw2VCPdwqs4GtCEn5Ded1xSLQ7RZzozYeNz4jzMHCXJj",
  "key25": "5nGaG4zvdN1CGobQ24f6gybZhXqCY6qZAYUVyVncgPUPSQGecS1zhTaLezdCuUsd4duiQAPUEtBR4TTUYczN8uxi",
  "key26": "3wYQPoy3ABZpSV3FgNp8KnSfw8kDRpex4VzeuH8rFFWRfbxbrNnqxjjdNUhp2XfJB5S1jU2VZonBJmxBGTSxtPXS",
  "key27": "3utjvcjDLg78CmqHz3YXRVjbbA99oZAgiaUhBeB9R9W3wczXDVJUbZ4mDEcKWsB4qGbVj8JBeKMF7A9d2gHdCvKw",
  "key28": "2fy1VaNEJfXMAyMX4nsPJPjLE6VsB6bK5cmavzMW6bRrFaFE4bG9hPVBRkCjPtBSJ2uVvvJyM6FMA3vofftAgTnk",
  "key29": "5W5XT2ugPZMTE92LtQ82tPbeyRBSsWDG9rFeCyhtmZGV4yooon5M2KvCuLeHjbt6TrrEAc5dMknnhdQfGmFfwX3L",
  "key30": "3HZNt7ZeXn2nqjV447cVjjeR3eAnmMiy9s9B3jiUQ3PKb5joEwsCaMmnErrZAXZsM5dsLKZ4bdgsYJTTitz33Q88",
  "key31": "4Fz7Hk7DtyMGStLKHJq1Mq22gozYWeFSWp49XauEYvk4doapw5wZnrFCLTRw1UqpUtrobQPicDPWMPN7QHtK85p9",
  "key32": "2ux2n8peqCxqgM5co6B2AfzZfTme73QkzrXocHmu4JJHrMFBvU1NjFZsQ86VQF99J9Mv1ogQ7GMQnxUGZ2rrAL8D",
  "key33": "DEETh95YromhELZYty63oFV2hMahhRwt9HStFbqkM8a7LqmGEzcF6YLxCNtdvA1fYm4d1gejdGcPTMKL8oeKzjZ",
  "key34": "s1rc4spJu4y6u89Z3E7taWCQfuohxMFs7hpddHVNhxKJB8AzJ9FfMW8y8fFcYw9Yw4NFKbiRR7cPZUg5pccCtRA",
  "key35": "2fqXaxLCzE9H94zJ5yD4uSxLkJN7LcGRZ5FUXpAdsyEPVSrNNRWaP8RF3UE4WT6wpzwXGY3MtvWHjLnj3bqrkg7C"
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
