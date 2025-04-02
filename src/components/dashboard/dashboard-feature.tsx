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
    "3BJ2a3BHGW17Eoom4i9cf9dohfhjurGu7GyUvCLvuJ2x4dfxFUWF1TavFALNQCzco2KYGyXNz7M3xTBvNtetJmmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wTTG43i3RQZ7s9MtvhbUH1u3RAcyXibrMR1WX6h59WnmTFB9M62RSNjJ8FCuBGEBkLpjGxaWkYch9T6HJMYuwbW",
  "key1": "475LjAj3zZrFXhtMBjijyFD8YXDNPiNrUssAJTL8JaXuwuYDMSqGy6hdfdGVo1NVXxa8BNYPDUVCAQmd79WNQjpv",
  "key2": "UJVULFBwHxmR6MjS8gs3QejZgLVqGFWWWpoPC9fdQnMuHgoK7kBq21zLe1NEYgvMRDvg68WZKHF4fpz9ohDk9yP",
  "key3": "2EpR6zaUNz3fJGGzmiGrhzAH5Z5AfcW8au9rmRM2ue6oVT33zXVVs68V1uNMEg8NJmFwjGFZJ7BUTHiwtGfvyJRF",
  "key4": "5jDRipBExXJGZ6TiFEmDVGfmXYpHnKQL64ZNgMwPW2M7ZjJWttc4Z5mGLaLFdYN9NjZg4NoqncZSwH9S13bvM8JF",
  "key5": "4nBcJSxw2AvJxzawLQF5aZkoq6M1CYzPvsDT6w4e1k1yGpjiQoe9zHKx4fat23C7kzAKzJgkpPPEk12beD3QNAuu",
  "key6": "5cxkEpbPU3FThEH43DeRiA39nRgazyEqGjaD5KXgauRRDv99L6iWKS2fHsXCyYYfQazwFy9iT4JKtZXyUVSVS6cX",
  "key7": "38mcPLKCk2APKjVSV5tgk7UrdZPUavuBaWUsWnTJHUsATbRXMmDtgLKQEjQQi4EZEgoLBMEZ5Q4XcTznbmZQVcUi",
  "key8": "3QzoMfLUj6e2gRz7ECk2u4KaGhvbfjoyNchHKEBgHpW6a4bBqYi4wBReY8NeLz77xSNs8o1TeQBYGSWzMWsRvu3H",
  "key9": "4JjjrjCv9FngcBtPpPcgdEw6Ju1KGpmiL2nMySprerkRUYwy2U5w7yL3P8YMxvGB1wPUcJ8jooLwWPTQhHLbgUJq",
  "key10": "4zqrcGYYgQfxq88hZ3b6LGR5Q9CsW9MP3px7Wys9Ut6a4HDw4Q93ngB69i8CGviM2hiXtve6okcEpqDkseKxdoM2",
  "key11": "51nhiXvBKydHHUasb2tRzetecdkhDmon1XnccKzyqnjV7Md8ENrAAN99gxWpR7MCecyfP5LFbKoZfDzHypFKXFWn",
  "key12": "tLjLaSjjzBJcijARwXg78a25CnhmaamaaEDfxC4CTNBkLmwE4sEfQrUuzNw5Qmjy1nVQv5ATUEArctdzT2CMSJp",
  "key13": "3B5LA4Q4NQVE5CFRqrgUizT4Gz9xNGeSRjv9kLU5ezvDqeaEJMEV9fKZUry9QCGvsmUHX8BXbRXSPGZo7gTjJZ4m",
  "key14": "5e9MtghvtVjcMHESXfrCmc6cAbKdFLYY5AiXH51qvbEwZZtFJSLtZVFuugTTXYFTUDvfGeRLYj5FpJW1TTe1eDWU",
  "key15": "5S51sR6EFvFh7TMpE2BQeGtriCozFoBjaVrHP831eEYrrwxcRbD1YeuyP3b6PLqWWPqSu8AzToqdEuojo8occckN",
  "key16": "217Yc1tvaZ5YDannWe59aV1joiG95mkoo5HjVXbA377zRrjnHHufaav962GxYp77YsPEfJ32eSRznYiKnkDoeZYP",
  "key17": "axXqsEwoU4FKwE7Hw8AeY4JZUqySjCkvHrFnA37Yt91ah49gTP2G7Rt6rgH6kHHAYKdrzJ1WhoKjXB6MqLScjpC",
  "key18": "64n1U9Vy2yUrTdGnK3EMX3FVCBXQM9JJkLGs5UpQx6bwEPArXaLypFAJpWJV67Y1PcFvNMk7JvpDfCtJTEQs4Pmh",
  "key19": "3C8H3sVteE6kZpUGGYXPyqoPQWDRfEtRmumk9QEV3vRtnbg5vscJYVpkhxhsTPNafvCbPtPRQALyQbnm1zoB7kAV",
  "key20": "3TevaYThLPXrgA5DoGiBrZWeD1aUUCSzbxLA1q1PUr7acibDWA3pQfsSSidtaouM1TgGfnEcbL8N5rhz6S4qC3Zq",
  "key21": "4cWHXMKzFFAGzvFYAMcrbNsd8W4MnMgDiaRJt5iBYxsH2GrGTR8jifCCCrCryswgBwbTXa1bABmQNpbLb8gF3PnX",
  "key22": "2YwdAQNjG86RjmMPEKZR6LZacyqgNpeJYfRsep33MtpVAcE4GePs2eoJoQKsg7xxsyw1v9HRigZzkths11dyj2a5",
  "key23": "cmmnE8sd7XCb8idDUdyLgMPg5SUGMf9ggmHiX8KMCqRmVFtG2aLVE6NqRi6W4Qv6ohA5SnHZSHuvsofv49ssLo6",
  "key24": "2LQd8xXkUbuHr91oQhh6nyDwsWFShcFnv7YBBhkW8wVtan3BgTGVfEDFTZRi17v48pKx9HWGDscNc88Wd3xrSY5m",
  "key25": "24xm2Ssz6qSYvUxqyKjD8nw3aeGchBhidmYj3sE8rJvaCq3RwcQBv48uuxMFygt8vZfcE1FaFmEvasLe3JVH2Nkc",
  "key26": "2YKJsBZ5mg1wKmjWqi9wxJS3EcXNRJ4aEnD8m4qyUYZUyDjWfAmvmspMhoNXmFr3YhRcmz4G7dQKf3pxgXV1S4mq",
  "key27": "4qsoZYaEUqK9SCzuH1YkvTWxmxCxCbvYUtrN8xxDRFWJMjKntVHCHDNHmGRt3qibh95PK4FvsobzaUJY3UBe5L88",
  "key28": "4bS55UAjbn5Qv2MzLhPEaMTsBmoZ7aiBXj8ZEbXuLs8VPcjrvEy4CrLhmm7vmYh61uMqRjmvjVUnu9KvxLUiZuK1"
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
