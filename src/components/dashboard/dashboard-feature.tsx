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
    "3Nc61XMjpABLG5GYwTdaeDU16bKdDHmTXvJof9KkrhHwyGL5fgANdRchyqGgViQqkUXS9HPjuQ2CTZAbRWHr4aBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMaD2XJZcuf8GLaMFfHyJCjDoFmF6oUSuPm5ZdCyMJzEmTFQvjMnuFoAxax5izng6SKcYibfuCKqdChEsReFqrE",
  "key1": "iS8hxUWQtZjPtL2CgzBvHjQ8NBVDsMX8FiqyMLKyH5nmpqGgWd4mfSEao7UhBgNCzoZ26H2vjbbmhP4rhSVfS8R",
  "key2": "3G2MjKmqKGuo31L52jLeRmiRj2NZ5ZUpY25u7rYxVGaMJxXx9vos9D9tfmCvabXoGYUzkfjggKvTfLjyCAuMDKaD",
  "key3": "m1HMVeDVCBHscdPpNBpzHeX1K6tBJ8YbmMV1b8vP1Czca9ZGHhx5G4sdeFybgMKdRFyKbXWi5depNZKzxxXaZY3",
  "key4": "P3aqNZ8kLiKVrh5cDaEuciGHy9GiZcX7ngdh7A81y2rMvjtKHURCjvKtpCGmf5Rjf6kRqRuqJnzxqMU2pB4cdGb",
  "key5": "2CDScXBmkRDXSwGDb9PoFPQej4hk8p6xfoXzHpXteMHUfVSeqvwbvpwuoSn8ikgqpyMb2rJByySMR9LsADhbMUuE",
  "key6": "4gxybp6VrF9F3v7MrBM4bVhquWC6zvRyJVRNh6nqYxjUBFtyjMBmntu5PBXEGnD5BvV2tgpE1RLH5HQhiD3frSRq",
  "key7": "2wESDGRgdMutvkzmSbn6jBZ1eAzFtsarQBDXoyBBexXnGT5YytKV1CaQr9zRNHY53CeD3JyCN7ytz29ExJNGke78",
  "key8": "zaGpd2TxYxy4iLeuYK6vMduvucCkTYaM2BuzdnG6peSko5snR6h2Snyxn1WKxQw2qKVShyArG8jtXopctLQbhyk",
  "key9": "3cucsrnfgKn2eraAeHQEpN4NT7QeuyjffxTZ1XYW3oFHUY7fN5SSa2vC1LHfajxKo4ybSJxSpD9JN7EahqgKWwKN",
  "key10": "SFY9HojgFdxvcWn3qwJuhz4PL9cDBfU5q8eLrUJpxH35vJy2Ch1JosCnfUwYEysgQorFG7vTjG4vpPGmJDi6AdW",
  "key11": "2u8sLY7stT5R8pcbxAEygnMc6LNxGYx9us2nC8yCeCWNv1LRNSWcqBhigQKyEqMcYxQkwujsW2TxuNSBeb2Tmciv",
  "key12": "2ZeJmDE7G2At34B2LjEL47cD4GvYZcRSrZPngyZDdKp8ZksuRxyw7ZiruMZiA4UrAyTXwh2mDnK8QVHoKh6DjEbs",
  "key13": "5GpdkHLFti2zEcarASz4RfondQwFupNS2tAfWzjXbNMjRTTEpPgavpVYvCQnEsxeyF7dLgtwWLsxWPagERNgmXt9",
  "key14": "5yshWYyhoMfdQ5y2XATEav148VY1sfFvGvJNfAzGk8mvDreLbHcBeTrtZHXS8Db4nk3bco2bL72zvRHxDDXTe4UH",
  "key15": "4tgaqMqiJY99X1S1412e1tQwjtjv7RYPgjt5aF4ZZPAQhbzBZemjnbtFzPECFf6aPEjmCLaUsNLC8rC9SchEta8b",
  "key16": "34XacXzA4pHSfeAJs9VDdrY2wPPKtCo1QHmbxkHWZhe5jhVp9Q2y8db95i8jAn539iGcCVQuiEeRu131ZLc3EeKt",
  "key17": "kHYG9zfNzLDauWxd5zH9aZZwCTHwafWP44wmRPUCwaM6bzeHtznjnNr8tLN2ETSzHgYYrD7bNg5NAAU3i6yMwRZ",
  "key18": "52GgM2ksHdybwNJ757gi5bHmnGq1S7NpTwkTfuZyZAFQRL53CQhQqzDPJ9sQTugbeb5vCpgkRaLswKjHHwVNvYuy",
  "key19": "mjMDNNzgQ1NSkt7eSjo6effpsePWsinsQhjYf4icUanbu5BSXesZwC5VnGcbZJmFH26dJwETmGFMAzuTpenZnRr",
  "key20": "5VAARSTLE9rvoaXby39Kvx7BSCxncDjtwR9bBiiBSJKvcM2S3HhBVJF68eUsDBPVPMHipauurQqW3HBeSmEeBtEA",
  "key21": "22uuyy5rv1HU88ouVHXF5YGZHiKeN5jVHXcgPGDyyz7rTH2ZEpXcGhWCip2bYrnKF1KbaAchDnP7wzDgGfLdHNMd",
  "key22": "4CeqMw4eMrskXwAFXvAakqqvdFfGEPZvgidmHVKTzY7kb8TZc7kdLDZbhhpdGKoBBbqFbdVfi9qTzyKQSGSzJyPi",
  "key23": "347JtNZBhR7UPo8SmYkqUWPjJkhSUGFvsYoGtn6S3eM4oih8E2nXWKarCJPRApi2xUAdk2g44EZJgBW7CMUt2Cyg",
  "key24": "2qCXBcQWQqvrMG9rRoh4HxMSdjiyoyUQKea3eJpvZb49BLUHYZV62PNS3ZzmbmNSLGiuYUhUsR1DwLTJrUX6eezQ",
  "key25": "65V2fXL4wvdkRQxxP9kJUUw24MxKre886J4nGWLNJBaeU4CBiHrh8YiJpprufQ242EMW4tUe7vpTdjA5Zk78Atq7",
  "key26": "3rAXBQiVzEJLizn2tzvuCHNMA2oKV3hpaoVheiL35D6B6EiiUnpxcFp3WouokxQn7mJg84fYRhwSsxBs5btrKTVU",
  "key27": "DfhFZ94YydqkNpf1qU7rEUaEh3M2h86P7aLZMf48B89BjegQQp96zoLpK6kxDcQ9E3d54hF6THH533uxN62nUgu",
  "key28": "2jkHq7gFihhkdVtnYHjWCaM5RhnWtcF6UfKmoBR4ujhubDCuUMyCM74tbpmr8vQ5j1ePDUHxed2EyPK8cecLYV3f",
  "key29": "x7u8xScSDQcyosndYxcpVAmUVdRruw36ik7HJUCi6ogoMjhjq1EpYZpTAsoUfs3K4YKMtL7w854kvMxQmu5PnGi",
  "key30": "4wQeMXYuuNnDkRLVzCvPDo9zV1pAprrS2NUtHMUt1H7ChkdfviioR4oci75u7frnFhVAjZoFooFLtBJWAshyqmK1",
  "key31": "3NzihUWfibAkif2QCS6nD8GL5YTAE3E8erAktNoPGyXKr64vYHpWcyieKiB2pyxoyFvczspEgJ3xm5BUiq169VSG"
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
