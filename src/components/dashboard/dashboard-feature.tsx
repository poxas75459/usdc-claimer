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
    "3r2NaUvRRsK5yrR2uCNSLt2hA5ksRD4EpjubVqNvgCnGkVihVYQHcdkNcGT87hmya52FzvnoWhqm7c1qxBJGgvAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBjkgbaDdFcReEFxsuSBu2pcRNMNZ7SjSLL4jQXEcoZQ9bxsxHLeaJswfX9yw9xqmjdwPerpXNJ2D4LgCroT9cS",
  "key1": "Gji6pDEhC1JNB6u6x199ANEbknhpHx8pW6WHw3MAuepz5UHMPpe6kaSoNEz8NinFxkTGGHBZw47Jp9L8tSXTk9W",
  "key2": "3WLppgtCLwQKNt9NvWKi2fLTuuTorJrd2hRY5aRsHRAv76h4hFKHgBwyV7NayuZAi6FjzD9bosZt7bi3PoomrCHp",
  "key3": "64xMBgGqsfvRYzb62UyBcUMJtqNxtsgX9gqwRXPKP7EX1pPKxQQk5rsCnrxCq2uFqWc7nFkejbca1RCVFBQKviLE",
  "key4": "gwyiCRkFNW46doZiFcqxthtfKpKdSyEGAUAA9ySwRF88wgiSojLapony25hZ2Dp6pFg331bGzyerzkd5HCMEFck",
  "key5": "67KMUp4AMhKASxyP59McFFn5ChiEfaxmoUMNFGkquBFTUFH7AQXrBJ6znWT3GDUtkoRGXWVmoqBD7DGZKorevgec",
  "key6": "59C78mM8edxwjBZCdMRZXAisE4TVfDetUaAvFurfu1HhKGmwXaxYxysrJEv3vAwY42RcWBVJpgFX9eM9JR3CSZ9u",
  "key7": "3wmzBbWQnrLrAtjgnRXC8pHHbM4p6Z637DceDxPQmXTFTUuA6bThp1eyJDwcnpgtwdzuMSTSLzZDcDvzZmcto7D6",
  "key8": "5oiLFtdcdjNH4QpuutXwQDStvooFjrxkJgMwYMuajhCRE4kVZ6c69tDZhsLh7BGHSg4YiQkFPRL2gRpKPx9VweRU",
  "key9": "4LeRq3pLapqHtKS2kRtGKR8XC71vGWMjhe5shj3osuSYUa6qCKPVGdCTJ3b69ZSeZr5jfDt11WmKTgtBaCEdfRQZ",
  "key10": "2oRqYsH2zyyxHUoNZSMKYJZ5FtvJv4jy1jCFmVUiimxLMEQnDBjgkvPRdQkC6TkkpF1rHFYjNQ4B4FYL1tWTP15C",
  "key11": "NT6SyknB1PFGma8aFdem1W6b9rVCBfgfuRimj9LDctPLBufvEru5UEcpobZEEwBErFiYXJzDaFdugKQu8APCgMU",
  "key12": "64hNnLyRJJ4vVc9uXa8podg9DgqF8ccX71gx81FrhoWhHjBqs7TVB8P6o1H4zWkTmvVa494DGbvY4fxcUvywFCHx",
  "key13": "4ZNg2G4JiURqCWLdSe1AuQYnKpyj53jToSdfpcuDiUw5H9K3F5Ghq1HuzKHdzo87EdeaSDrX1yHZ6ttcEuVvbJqb",
  "key14": "4CoiA9Xw3x6xHT1t3i8BY3j4f1tPcW4rLyejwGethKaB74crjmwnUvLK9ewjoTrU1DovEyHUnSvnWpnrmXSPCvuE",
  "key15": "2t5AWqRYgdXZV4jQRixKqcHVjDcX7AWxsuwYsYdd3VMM9cMA9bVnNvzjTCckY1zYiYxguJMqMTazDTYaR9wrpRi7",
  "key16": "67MXD3xSn6G6yt2xJsEGkLe5kXC6dkZvP7EiBBXenhwWdGD9hEdPDrHq8iatYBZka2RLJW1MXNeRNhbuxprGdNrA",
  "key17": "g25Ye31bpTQm5V179goMp6hstk5C8AoAS2d8zzB5koKHiGhQK5ikWhSU5K9eKKZGS4vWHZyv9ZUJrHoVX2EJ6XG",
  "key18": "5pydZ4RuYzGwganjos7F3gj3YhhfY37qkTDhyqcHcLA8cp1ATbtcKSofZQgChPxiUewnAkCSRvNQC2dZkPJdX6mG",
  "key19": "2b93BAagKe6TVsRz1Ke8X7b7vFLSvSo3UgNKrNmhpwk1g5vYAj2se36GHRfEaGnYUEpywAgDTx5gzDbNfZf1q764",
  "key20": "X5cyRsr2LjEPe7QcLYrsWzhdYj1wnKL9CQk6P2XSbdbda1Wk5KYgQJfNxCp54mN2gCE2zRgYeLsEoPXz65AvnDQ",
  "key21": "2JtMNeheCAiMkQcfdHgHmP6XCtug6jPES5BLGQfjdSAeP7h6QjdrmdPLHsjrU5CRcfXNsk9ZFJVfGpjobpGGgQvm",
  "key22": "4c6VkTwq6kNvkvVXYZarHHeR6hjMJU4Vvxc47sLR8Pe8fkcUKFhbtXXZoQMSjqMytcVrSmzsRVGskkg9KsQpm5Tc",
  "key23": "2rN4AMmMrE4SGCxmzkmxzPtJ9DDHHYppH17AJ1g9JosDKrdzyiZnFF8Y6fLvYbrmH6FFPCtyCFCZzmEeXyGrwuZR",
  "key24": "2q3iZkhKvZaFDXGS85aZssQoP8kF2kHdib3eRAcHRHot7DPMVPHfJQtVexMe6xDoPDPb3YMwVArUYSHhtTfFJ4gs",
  "key25": "3AVk8H3LvUqXQMCsFTYc2B7EK8kDsBFwuP72e9NzfaWTn6LYxhC2VBFtSRPbnQbiSwcDC2tY8fnsJ6v7wXVBmCXn",
  "key26": "UHVng1MXS3TTQhKk6RrmN4cwjAGGLWPwe27AccfaCjSFjYrKHFwFRNRyC8H5g3JDoPQ3uKvor3iZf3b4gkr2CMb",
  "key27": "4KDaNvczBi8MfnshFFCUUoft1v3mRPUpzTkTY9iLfM4ra8ocNjVaAY2toS1x4JwEgu6VZgNTs8kK9TDigzqDe9RB",
  "key28": "242kkVnmRRyT5W5TGyWNp3d9pUbfDYTihKYMHKFTSvnXsN3TirF8cuymiiurf5wkD925A8sj9cA8sQ15gL5jyvQq",
  "key29": "4VN1wwUGcMx9ngAn5b1Q5PVB5rL8Nw5DTNVHBhxNxkWwabxrq7PvHoj2xw9oFkMHNDQ9tUPWpQg4YaFyD4CkLK26",
  "key30": "4noL33dVa4iHJYAWawFqpePENeXJbMroE9RnebQ94BwmandFGyUTxVh4j5PZYsTy4UakkvWeSyimmecThbg37NnR",
  "key31": "63w7d26QmghsSDyW7VtnxFozDftnozKhAQFm7GtiQzCdonU5Z6VgQYEz9E5RbU8f6xSXnRefLMfDxUSyZdJ2Hgdi"
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
