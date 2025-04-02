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
    "2g3pVmbgJsru2KykbCVCw73dqu6wwBMvSPNgECHkRXdSFYKnZ2cY9tsxNv6Zq2jLJFAAaMhsiBEx1Q9AiUU73zLU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dWkjuHetnjESgbFnv3842RD5Aa6ECZ9riuFUcsPZDUbs7PrEwn51baZpjEfTrP1GjR8cZzkaBwvKo5S8G59Xg1",
  "key1": "5fVW6xP4JY4ZYHT4QktPQAue4aiT5uWYwAEiTjGruSdDX3KxWopSXuVJXmrzki658ZxxqT5LeWq4g1aWXizt6T4Y",
  "key2": "2t6q6j9gQSHndg18qJYyhemL6eciDDYZr1FjCkD7GrSqthHhSh9ByFTwjySRJ8XvN4ALd6LDcGvV7nXTvazP8fPd",
  "key3": "25mAitQYNbzZsHbWqxLo2ua3mHNozhWRxBHQ832V9eaCDv1MXxwWGhWAkuJ2HkxHGery5vrvNmkx9G7xF5PW9uoE",
  "key4": "32CHDAWbLYuxkNEjzA7T9nqHRpLVWgWsUr6J76xTCwUWkUomF1BUYwGjtn2FiyW4XomLQXvsJyPQNr3VKnDmoUdk",
  "key5": "2x9WL2zPCGx3B2v1VhjYbp1qZ3H3DPm8t8TBs73TBUUvsHT3xQ9CFXrJVUcaBq2xyVQMZZjfmvsDso1AMCUZ7dyo",
  "key6": "3WGjvdBoJVUEgCjoEKezhAEnXypBshigeNwMSVcvPyyAKqE3jtqktddd6EitBiZ6dABrGeoQAebqBtE3tm9NKhm3",
  "key7": "39Xxf4pFc2J72F21A2TtZTNwTbKtuAwDH5MdYKH24FUjiWza7NKj4NE2PvQ8dt6inoQwA5f3MCZ2zUf8UUMALsDQ",
  "key8": "3WK3nXGi7a3oCzbVPuKr12iySek24DhcYh78ekpE9G71UtCqirTHmfdiHni84NxLKHxeFekh6VPbmH9Sgnfy6gN3",
  "key9": "2kQWa69SSKg75E4mEP9ru1RLLBo8yV7T4ff3Bqme3ge93P6JrjwDL88644Lqnsswz8Anr6ixbWQNmspkJiGeoe7E",
  "key10": "626KohW8pKGwJqUuStkUXbSyuQKJeio8HAr3rRozKzVZgzqHU2imLEzHx1PJHGpGJoB2yzpnhsiMtw3sJgx7iTp4",
  "key11": "5X4Z41DboVkDYcYQeSDfTTan7LiipjGmEcvr7QgAMLU6UeMUJYHzRWz9soqVMQa5NNdKGfhrPPVnhTHVW91LB45u",
  "key12": "NqFMbgRffgmWHo3L1AqqsVAEdmdCGMu3g3g8Vm584fWHmr2kP1hfAFvwtKGVcDMbSvJseDWaQe95pyvVRKL8v6t",
  "key13": "4vaqCd4AxXtGhR826CHB9KJDpLuWp2avHrFP9ZGmePJR5MCVY2iBJ1Cgdoag1hrxKdn2NBtjCxPQ8E6eT3StoneJ",
  "key14": "53DGkkUF9oXRC1eVq6nC1k1tdX7NnbGR8P9gqDawD7H2e8CHzEZGzYkjG2sc6zUJJdbCVH2HwDeMGR5ZS4BbWbfW",
  "key15": "5Fr1WVDbAssMSS7CUiggLuYMQEGC5sF6tpAm5UiAfvyjfaBb3coAUSKHpfvcyBgUzhMhSbr6NC978GtpPRNbmRWf",
  "key16": "52qGGVr8Lu8dhUWXCrZv9y1nD2yYiRS4kLkyz4mLNGUQoznRwbEVe4vVuTPZQ25ZUGY5g5Ms8RsqbMWqEF5Ky5gD",
  "key17": "2c9RJT8RABx6M5BcQQirBf1qqsEfFbbB6YJfhWwhFbMgUzvL5yyejyEsJV9nmm3ZYboF1mKwejk4yYCGWKboMAz1",
  "key18": "3LWCftd4xGyLb1UrCFXoV44VepK1WwPhsL7HtjkFcDg8YekpzYdhX32jGVAU49BEvK3ahyfZiE5sFxJTZZh47a7o",
  "key19": "2UtWKFLTmq8ZmPRBx3zH5hEUujcTKoSUybhxTmDN6Gwc7mP8XT4bxLF3c6ngXe9VjTWkjEPmrzj6ygHWLGatmMDA",
  "key20": "4N5WgZb2euKPDqzuxMDLsAMGiPave6vacVz3N24UswNbThwMXkVh4oXk3ffCQmizv5fwufL2g3GxFb5G1H4QMxdP",
  "key21": "5LF9t1GZ6w4jRUATuW9v7b3Jn4ZtsjxNKkXKUZeRAuBWB5ooXfxouF7t1iz99BcE2NviriEMZCUTgaexU61deKXU",
  "key22": "4bJMajtKcsa6iaJyokRnPvhMkdYP2eNQ6DNdhqBdYzTC4PLKRbKFyLGnxhS5EFihN5XMtEEZqqHhWqWXgSSnPm7j",
  "key23": "aAh43SNVXdauwcpLdtpk45kmAV8weDVrsEaMA9n4hzPGk6HDz9kFDhYow7N1DBQTwmco7HJHA6yvh3knzuvPHZ1",
  "key24": "55fY29u6151DunNDsF1oNgogS5mk5yeoB6LDdBPL852JxKDUETpk3bc1fqWTeWzmNttGupZmMpUNciFmHNpdnSXi",
  "key25": "5osQz1YKmo72ei6GX9jA8BmRE2rF2iWrMSqpGkDBSJYpABSkFVR1iyeQ3wyRUm8EqhTgbmY9sJBLEmUtkqnvcwKo",
  "key26": "2PKL4D7uvw8zZtaMpr11amroWYeu74G41LUWbxR5xNApZMJi8KZ1WPNqfdLVztbyxRqGjy5ZGnpJRTr2SazrdkUc",
  "key27": "41M4nxHnLAu4ygYkKkho19pW6NReGAWHJLsSkjGWPYmkTxmqEtXasnr7bWXhw2MXi6iqenmJxEUd2GmLFxnecgLs",
  "key28": "VtMg4cgu5ScNz4nxX8uQ2ACqCK1LuTC63YKzcpLU74Wv934SkGVYNrzFVrEFi1JuDpEj4pmxKA9vCgpMB7jjbgi",
  "key29": "ceri2CVc4g36iv4HGJjFqdjqCWvkg9HYFRXX1gaN57bf1K8w2RRkCWTRTpqngANDE6kFi1RQNvQSRBykXvtnKiD",
  "key30": "fxjqrmxFY5AsQQxHuGbP9GFxyxL6G4XEMNvWBYU3cBUNmTHCK6MWnu5s8SJt6PXe4o8ZwKQKYyrrYnUU7tuY4WL",
  "key31": "4dn26qDx78fSSTZ9ahRvbNWar8GEjrzVhVDAfAg7iWuLNYTTbojapY3xpeL3pz1Apt8r9gxg6iPE5Z2K2Vrq7oqo",
  "key32": "5mL8ovFFNmdn98UKzawJeK5AKc8CxtPWVxe4g7seChnLJG7E7mdGfUxq6LG91taQdtgPdr9J7tZUZoUaFEwivjQM",
  "key33": "2gBdGDBuwS8zoQgmzd6tGrY4b9KmgaprKFF9ih45vGmiCh5EFwWHZMm6adSJQCT8aFoqPpGsoNx49pjkvBN9YMwE",
  "key34": "5kyDDXScdcPxgSVYqFwgrLhUuxMmk1GiELpCce38uLm2t3mtoqTW8m8B5VEvYDsmttxz7GXTQVnpToMjrduiiogh"
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
