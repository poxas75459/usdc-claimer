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
    "3vn886ierq33U9pwugK4pKnfb3e1nJCcVP9uBNNNCjFM5L1YYT62ibwQgvptgNbnUxgSegwgo4ZSJ2vmoDfrXgMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q4jE2e4xgwpL4P6SC4isqKN9grcrdhqxdddpSVkHaV3SSwNo9eSDFN8cxdcQZ4W5EjeCvmYmwaM83Wq4nGBTDKD",
  "key1": "xZpkT1AoocEcWLaoZ5Ktvgizs1QncJnsdrRh9QVCDpeM4Sc8ibaZV6PD3LL5sXdJvYsWbiHNaPiW3UWpq4Yz4D6",
  "key2": "4gWPnGAnQWP2xfXBH32wq4AxgEuU8Jt8mgHqkpnDp1xKAmdUHQfMfKhEcW4wCqZyihCPicsHMt1VapoERwmhAA1f",
  "key3": "H3s7N7GpuCRRKbsRzoqUBLGX1wK6b3etXr1V9Z6Q1Fpa9pGiTv2SrfuKWqXY52UzkfQMryzvDLHDatHTtn42FCA",
  "key4": "ywmUMa3swKL3HqXjWbfUb7kRNUYLJ6XRD3XxD4WbnCXTuG94jrLHCUPP1RCUy4KgJAtFVtvVfDCzxSfzW499zek",
  "key5": "4dS3AT1YqEUBfE2wNcGCpB459uDgT7R4WA4PCAW2fMS6Ceb3KZ82EB3JhZCVD7PcE2giC3ychEQPfJCG23PLENx3",
  "key6": "43g89GcEp5B5qcyX5vi7UxsPFA8CgTHSCme3c5roUcxyPyGtL84sKWhirg2iAGYumpkN9kQgXTNqsh9uBtYQPWHY",
  "key7": "2QVFsSi5VDtifrNvYKMpyWCs45UsoKcptenAm2eqE2GHDHV2M4kQznBp9KsFBvPzRGn9YNxLZp4r9aiHnKQb3quk",
  "key8": "4vQyVeqfGhsGX4BnbJyGhRfuG31RpAiiiyV92WwwxrC2jpcJu5rUHetoaJTtU3sfvyxmykmEpe2EjxKWGTnVBJKY",
  "key9": "3xdJBWqTNbANYGNSx4GS8X3foSdzDymx4N7wYwFG38vhAYkrnKD6xfAyB7Yk2Zcu7vXxXQx7e3JZs5fHWisq5ggK",
  "key10": "2YfRYXaaiAodfdmFexXm89qnhgnBM82Ab8AhFchcd9Wags4Yx5WhHZKV5jNY6ry1Wgs4ETQ77kCbwRQBmeswZ2Vt",
  "key11": "5NL9xSUWArkQGc1iWGSzLVbibPFB5HQy6qex8ngUh8BcaUr8VU3RS9x3T26Fm26CBYr3ccVD1apkHr9J4d5s7x1o",
  "key12": "2gGnKFc6yFHtid6u6yaTbbbcoEsrAZmuEUehkL7wB1UFevojKaoRYo8XC48xjRmhTgCxsWzeQBsAJeckSzAHmgCg",
  "key13": "4wEnPpJyJvjPm6nghYvLYhuGQmn1xY3bTz8Swj6rFSsLm7bAtaPv29FHfoozjhvi5J8oE4eRkaSV8bKSHSr8Wv7b",
  "key14": "4eCesy3graKzyLMhQFPNheGGYAJ5YMaCZP21X3kUtNJBCohwra8BSdvnUQphVnX8wnhS2GWPsZWkqgwNouCvgATh",
  "key15": "YaQXfWLR9XaNte68uXbNMKgfh9yCCRB4DxiKiZ5QidjW7fgBGdZCjgH2TJaqTdyPJFdGycosVAwmHLS5abC5sWK",
  "key16": "5V57ef9hH63GXbkA6ZJAZL6qKdEU1y3UCEJ4LeWmK43sDvDuBa1KTJCW6hYQpDjiaNVv8tm5yyyq5giFzdD9sivZ",
  "key17": "DvCywjuTVijJHnL3q1T2Szh5U6bhVQHHUKM4DzerbqjuunPRF4Sox6vtjtNypZbQsyGmRkvzTDd9LhgDFpsNuA3",
  "key18": "5kSkW6xzpdZUfTe2vkG21rJN1hwY1XQ5NL31dhzxukCQBZhtrHf473nR9pb4ZiEpPYNk2Dp6GgPSJdgF2kzczPoD",
  "key19": "3VUqxY4BzeKtgxAbcjLGoXwkYVBFZiN7yq8z41fXvyjRxd2J6aeVeynXHQKEa1Udp55HJPXQDzWjQpRr3nYpxryC",
  "key20": "3Wnf6ccvryoKCtrPcvU15cVJojmUZZBGbZKXCQnreFuQiJg9RSzZCm3mhaPSxJFWjZXFPgmvk3zvjLN8SHi9tPv7",
  "key21": "brfu1FHjruQLkUibS84NaYRxhNL8C7jS2v6rtZq1DhsaASLakbirYeALy2k74HGNuztQXfnJ5r2Wfrm46ccW9my",
  "key22": "3VnAQNcbmx5YqdysNewCckmG5FnArvYdgD7YNdzWQHzAYvduYZbVikqKFRy3pgMUE5qqU4JWuwHFCccyUeHBoDwf",
  "key23": "ZvvQEPWtSv5Wyar4AT3jgNsofF2NymmrA49swijUaALraUEQX2Tbm82cyZC3WN8oiU1h16SjtUCca3E7JT4Gizv",
  "key24": "48WpiEc8m5LVNkN7kpugPAJ48zDf7mFAdtyMyRhiHUcrunWS6Ut7pQpZ3mLhtHrBcwVUAYFoNDpz9hQaXsnqJtyT",
  "key25": "4wCHF1VfYRqkac6ubn4kPPqZrJEGvaCXVmWZ9wVMJ2EanpKd1cSQJib3YRiYpvgRHvKT16HKxX9dp5bEVwnxuvYY",
  "key26": "KXpV2Y229TVR42qk2huD7qtn62FUgK4hraZysmbjeAtRvibU5tU4QJykp3YEF7LuDAYWFn1eCB1BgF3rSxAPVgm"
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
