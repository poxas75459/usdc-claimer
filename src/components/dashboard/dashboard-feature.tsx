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
    "4wmNzedE2QGZXPmZyusQSUYfm7eVV6W5k38qdWuRscacKySwP8unATDUHJynUHWU4Vs11G6q2HeLbaoHXdDUossa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xBZj5DUNi5Dy1eUD6E77fvG4gnkJk1sTdtVJHe1FVjrqQdczk7aVaHThezNwqM3GLCUpXVefeFXpyR9UTPQb8Yk",
  "key1": "662pL2m28DfsWTZQG19rpvuutHEA9z18S6NZyumovMz2jiPyhvLzuwqg8BaxztFN1Ve1dJvK7X2nCGSpuu9eSeoC",
  "key2": "3QMhTQBcQYLAKuqhHD4nG9p3Q4dxQNMq3SjR5pgdZEQy33ibUumbxZfzZfbRAT1pVdhB5kCDNoxsDdCQGk3VjRev",
  "key3": "5um7g7Nc5Qr4neiZ5EayCTTCzCAoNbMx2ZUsAQX5DFhLyFNaTjWtPsvps9VvDQPNq63gzm9v4WHNvZxn9oAG9qPg",
  "key4": "3haqSjxwCF5L5PHBftd6eBueChr84Bp9jNWJ3rwnrphLdjZjW6X1C8FKh7EtfouvmTARrJV3WZZJL5aJa9Ampwj3",
  "key5": "5XrRq7QzVFMPwwMpfUHpz2TSTXhbTePr9awnzZozbWcwNaTh9wxYSJVMDY9uWXrmgZAg1RnSbcZQAq4m39cmjXJ",
  "key6": "5dafuuCX8uFyi9nhb48uh8vVGS6KiskUc4rs6NJuP8ZZ6YwLvq5hTwYXvFwqmoQZrdmBTSWBVx9kFjYwujbVWi64",
  "key7": "4oNnxdDCouU5kWoZiHM71ifN86GX9Kn5HtgetFTckLtCF7MjgGidobykmLpd49XuD114xwKmoUFyx9yQEeXtqKBy",
  "key8": "dg9rvvn8q3R992PdKNGoYxDGXfnUuYHS4HUPpZ42H5ap3aufxbSRb5DgBeJEbShdHNCHJ2HQByoB1XYRKpQF8Bq",
  "key9": "H2hoh78xchrDNwwafcv778zFYCZk4mQtS6dACVW7TDoBoU68rWWHeKiHWZ3YG7K8hM75J5VYN9YmruhCkuhypFS",
  "key10": "4j49ohCHa9C1pPHRGxLMFtvAchVFtKSRQjfLCRfbnMhnGvXsTTEPRyuWYz4grYbut8bK3PqQKKyyAK28bg9uPijK",
  "key11": "27MhkmKkGviDFC917KiVp5cAehebtF6emD4BW6kS86SbtjqczgYSfNApXT3hvZ53N2DstxAPXrkNe8pZGk7XtoUX",
  "key12": "5mQAqrmzqmXmvodyRfLwW4PLoGTVm8AGJa3JcTTNZtUN8B2jHhwQZwMsx6VFJVbT6uaRcczVX9fZZXY9hSKeXqQj",
  "key13": "5sTkQVC1eDvkTjG5kEDbotuzUyfgSj5FzLjU9UoKSrG2gXkL4fZQbiBkUubhkYfUcfRRe5r2eUu5hMyM6jGMT38D",
  "key14": "4FDqMWCDaxSLt655TLo4gXg4DmKVTqaGo3FpBHwEePqTjGjATjdYuaBAWaFKR7LrJmXKHtumGJ7NMdSRTyG3GPkM",
  "key15": "3qMRfTaw8C1iJeokE2BAWbNHUVHF8AQgw29GpGgcvgViCaf4n2K4jw6RPd99rnrzZnbi1AhcvB5azT3nzvuN6YCy",
  "key16": "w52ANZGFdN7tqu5mnKMxV3AsAVBphRWu7TcZg2ySuYLnuw1Mc9x7SpNYR2ySns5DfiSaCnUzMvWDx5jekdidiKg",
  "key17": "4iAyemTFZRrB6aCrD6ED5LoH5wk1M4pQvzkVjtzmNrhoY7WF3W8iVvHMML25u9VCzRNgxtaiV898zxxgsWy48Gvq",
  "key18": "wvuui9RstXvS5xbUtSiMcnbr6oWP8A1R2xfVX7em9dUojiyvtE4b9ujSP2SiktSRh4HLWmdWxDcBf7REarmbway",
  "key19": "2Lhgt27yVNHLo2jTARVsETehqPTDdqTQWMZ9iuS5vwmM8DsWpBDq26LpUKHGfLruyc1q2oee8XFg45znzHUnzUan",
  "key20": "Y5ZdMWHenU5mKHTct97CUwtMz6i26xRk9Wx4h158p3dvnFS17yDajWA3f2oh3QidvikUqLgCNRwh7fSsbjicwn3",
  "key21": "5Pm6DufAszZmoJW5KSG7Ux7czM6j6uStYgX5Jf1tB5KUbMYrH7EaR4AcMiku6e3oL25F1QAi2yVxTYaXYq2b2spu",
  "key22": "6PiLLtR2bp4eZbU9CEhefKRabPBzZCKTCFZPAtkcp5Vg2P3BYjWKAKw8NyLUK61adfZ5ax8Nu2kLh8bh2uY7VhQ",
  "key23": "53VKZCa6TSHNwnBFTDRtQSAHqAt7DWY2a5WJFwQ8H561TSkiGzPvw2zB17HxyEZJcQdJ3mwy8jduy8KCkCpWLu1k",
  "key24": "3kg5RXotHNHzYB5LPgxToY7ugY4bx9JaVqoJmaawRzbhDqwbmti24T5p2xvgqS3FDXXpkPJgr28HcHJDJt5urjry",
  "key25": "3acXU5nXaADBAfpfy7nmoNK2D3MExFzJVGeq2XcsqLtW5ZPQSe6nRUHx6TbKz1ZRri5W7jXQkxaHsbpowBkwfy6W",
  "key26": "4qfKFWa1NcCS96vJ3hnez4BdkNDvdcMf6pgooUVAxGqQs1UdZQbyBuMLEYM9oyWw4xp9XCWaDQ6R3NPMCTcGPvFT",
  "key27": "4JiSa8aEfcf7NTn8HxJLVVvG5dQgxgzpwEtkRcKW2q6cgpFkobvQZgbZ9bkw1ahUGkFjp4aL3mRPYyEcUEZeueAS",
  "key28": "2BPSKbZV6FRcwJUH88TcGzKTSFQgt2CcSyhmnVqgN3khydGXbQMxBU4CbjpFWgkFcWa3S5sW5zQBvc9z2A7asAfq",
  "key29": "4ngxDG3oZaL1agehg9MnAJqVQA8r7P3wfyM2wFiErKcEpjherRLvjEwi6r4UminWpCNHi7U4Nr6JTYpGogBefY3U",
  "key30": "2A5UhvvsELdkf3mTLTBMPZ3hYbZ1gLnfTo7232VYPkukRFXbkNf3bxjqxbu1BgBtQdg5rPpbbkh3Fi2u2YbAJwpz",
  "key31": "VcpZD3kHRHPEPoiCeMu3GFAW8uvg3xVNFAgYYQ3JNpB4YdEakVWP8uy7S5vtxfC84pkKs72J8XPAkqe3tHiYLVH",
  "key32": "3FBD58x5KTAUPzNEoeYSR3CcrsE3j2oKNMKnsJHGerVkNhcmaXVLKh7axX9NUEuCtCj1nWLqakNqGYAmtaesv2aG",
  "key33": "5caG1t3VJSadCq5nz7mjYjamoEdnZT8Q3LThnskdLEyRMkbhC6XWBUHpaM7BVMS77AHh4p8YyxA394VbFq2UwnBB",
  "key34": "4osenHT8F2DWp5hHrLXUB11hUJbdv8gjYLyj1tB2CgUY4Lhfhk7TRefF3yqFzRNgZJXrGVuEX6rkLjjSFPTTc6Ux",
  "key35": "2NBjJU2TSqC8ZEV4cw5WN9i5kHqsmhBmy3MsHyiDmERRTz2c2mXbEaJQrqWLeqzVQxzhbcw86r5GnX63icKhMwgN",
  "key36": "52V9nBRwzcUT6JZ658tzyccUR7185c6jHE9zGktmYXPjvv2rPB5bKfe16HQY5D9qdo5DWthqpoQqq74mC9QBgixR",
  "key37": "3WQGLAFXhWwGbnqgEkFrT5otZAmZGsdsRbv8dp1heDYC46VLT4eNKQkFhr5okLeAbgojBp9WtWTwbJ6xXch8UoZV",
  "key38": "2DT3w2V5VwJ88u8bhznqFahxVeakN43rUqaVhagKniLhRr45h8NHpx4NZTZD6Gbb1vWnRSXp6kUG4oTNJsey9eZe",
  "key39": "5F4ku4dzoMLXdVxHPUZasDYhNKmrXUCCbCaHubrvQzh9ixingUha2iZ9dNPXT4xCDgbL6VtFx6mHYZ5ja26gHvtE",
  "key40": "5r4Vj2qXjSSWC3T7mRnt54AeRcbQNB2nb1qrXg9n9jW1M2KWDYVWub3vioET3fTJnve3CSpxMtd7GUr1rK1VeBxY",
  "key41": "3TDfo8ijqEWdbqR2US2PdoV4xsGBLHTmAkuwY6kQKVNZVYd7t9SEpL71qG4m9xmzxS2UZiRfXV2SeTBJ2AmWYc7g",
  "key42": "2tRWCJVVFSP1obJuFWMYAdyNkMdpj2PrQJZByMsYHADmoKZ4zAK9tA1fKdamETva8PWBZockAaRQEu3AcNxCZuN4",
  "key43": "4DVqdbrZayZNtCVyzwZsDMce8xSnCTpLYgi1UpBaZTB5q7Vran87xT4r93dMtyuCQFhu4C7CTs1Ld1RQN5GYdMsp",
  "key44": "4EEikfwFJkSq8J8HUpB9vxVPrJwpiZBACtQdXhonLu3wE8DCfHG8xW6AoRLz6BUHGAxyitZuVN1r99KN7HvPPPw9",
  "key45": "4DMrZrmQzkrCNAnTPZ2dJGTYDHSopxzA3xUh7EFBQAptVtoGP8ZGwxuZXAZVp7twg8y8trhfwKUip8zwQHnvYPUk",
  "key46": "3MuFzvA327VZDM84kqC6dd4H3AVGbpSbg4NPUyS8Y83m7LBnTkzYboMHwihZS2vwVQrhHxLp4iLtfE4vxNSKc8ej",
  "key47": "22Ctav8sBZzfEqPmYtcyZvDtNXzzDcsq3TtohMmypZs9JD29qEpt1ZPFiDRjm4ZUB9nz8c8vnhukY6RuUMtJpLYi",
  "key48": "4hez1JBqHv9yDDZTHj69ui3ZHGq6AxUxvz1yR6qS6U7yBTeLNQydxv9rsEjP1BMLqZGXDXdUWVbetknBh2aKDrkV",
  "key49": "4CM265zj6puN2sYfef17Lv8WSbx66hgvEintRhgo6rQRQA5N4LGbK7usE5wJqK62DvpmmkYKgfxEMX9d3GHdn5Qg"
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
