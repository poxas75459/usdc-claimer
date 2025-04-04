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
    "5EJkg5t9Fobe7BAyyo9op1pHw7cbGWAcijc3fHGLx6qm8FZMS5tb6BPBEkap3uXjKShhZ1D3ePes3wwbTCqy9pcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DtHYmbMXVhvN1zs62gtNBcrtMj92cbPYJBgXctYDxi9oHcBzfo8kWJAok6ozaPZEv6EGbN4Kgw1SK1obMNn5s67",
  "key1": "3XTQnFkQhS1uaPSkaturqkBNhPirR5PL6uU8qQWfH1yxnX2XJFdbFBvsCHbhbWstw51vy7fZ7Z73Mf7JPxUb5muL",
  "key2": "5pzGYKG71FEuA4P3ki7L5Uf9g4Rjbxke4jisrW1SWxxQQ1MUwEhqrgydJchhxMZhvKcGKc3DqUtWaMu9Pc8R2RXb",
  "key3": "pGUNJJ1RNXDcLca1V2gp5AcNq4bcc3o33cPb2oD52obRcT8BCa6ZHtJSC66id6YDZmkDteJuNM3hDxxr9hBV7mc",
  "key4": "23XrCTnZbkc1d5dEhrF7qtx2vxxauUeUaEwTTjjSx4XDbsevZ6Ws7XaiRNXfibRahQ8zgKQNH5hmrWwoX94Hp6Xr",
  "key5": "5Ph4DKnnjLX9Rk3ENC4FznwpRiRVRyhvvEW3CvNWwadsDBrMpmbGXUMSC2z4LrdRP56Vy4Vw4DiR5b9q98S1HbUm",
  "key6": "5gdbEUcPJtqEU8yLEB7nwhpKsv8aKeET6VakvqKRmg2EdmDvYjsR8SyoZVNPRAccaGUxzrj8kyex1Jm94ih6gsLB",
  "key7": "UWo2eN1yaZ6xdMQpURB47zMLTjjF3Y8QshVkvL42nGBVdxGykYArnKZfVzP5UcDyKndU7AWw9UEPNaavrtC5XZu",
  "key8": "3H4sqozPNwJAXLkMS7aPinHnX6pHKD36gaJ4njbK2jYhNJ7Jc1dTCJQt5XMunwz8Vg56oXuxCzB6Vy6xcMBWNVVN",
  "key9": "5dLnwUvQmCkLWooD8T214ndEjMXGZXk3vGg4c4uMQqzj7v47K6xsbEVH3RmHPMqEXwNV1GssujNDmD62byc8kBrp",
  "key10": "GtA9KTPj39xpEPNex7k4XvHZDX5taD3BehycBgGnV457N8aHyxbSw5hfzLbEvrfcPqPwPqA8Ca197vHNaaa2ror",
  "key11": "2BnfFH8WXdJpX2TjBDmwJ7S5KHp2YqdBY3dRGCzqBQpanJ7PHB3R6uZZ1LtvL1GLDpoUVEXoxkQ2nYhaH2S8kkNc",
  "key12": "29hFYNYBQfqDcVu1HUop6xzecUSDQuXJZnojyGs4nJzWfzJP2zzmtsxSW4VnSrYiaGVArhgbmxXvVJ2xRpDXFCVo",
  "key13": "4tMSNRgi4az3vCQhbAbKgsHcYUvj8CpwKfnSxAC4sDnvgYNVPRcm8MPHbXGcsLZZ3mEtbGg8AAUGE4UespAWYu9D",
  "key14": "5jceDc9dRsaMQbb8LGUxaSJZrfL4EqzcyZq93BZkEFFN5zjYtTSyBUN82afeFtgPYi2yusNyG2FYCo46zXmqP3aU",
  "key15": "5pkFTq9SrqjP1kMvZgKswa94puXb4jeK91yEL15SPHKggvtVFQJB5ghv7ykcezSPVcMTXVj5AZMQohBXujMbPZ7N",
  "key16": "LPEdQYUrEJjVKKEN9RxgVD9cvLVtpzQUgT7GNAg8CjTamesg3DDiHtXoSq14QTbETzquj3bdCLaSn6zvEZ9psRg",
  "key17": "2TonPWQou3qoeJpMy9hS2NhPBH5zDtFAMCu1ji7MWaAmaP5HBkLyriCGgRhywAE62zE3sgozY3NqGQbrnDgz2EAp",
  "key18": "3Jwi38ULZwBHZhBNNjzXqqYSm2swiV9z9zQZKdDnHc4ok7rSPPcccGUgCNRP85dwM4GizXvULN253SqMPySK8YMp",
  "key19": "3qnfR8D2yRn6DgHKyzrkLbTVBJi9jCdPmb6ZYQmi3rHhdkBSV4XkWMCBkxEcP2SgPymPJJHmASESJiJD1hfRhpkf",
  "key20": "5BhxQcLGkKWExphUK72TB6Da65HvYxLSUwrjxB35RgxEUG25R5f3HbkKR3jyvz4mQ3ksCqoyXR8Q6Y4uh6d6HhMt",
  "key21": "4sznw1SdYWmj72DwsYjkfTiXynE2uBksdYDMGBdyeXFoXvUf19QoZG5TX1SHd1VokvDiVD4JwxguV671Vx2NxVgy",
  "key22": "5dwD2z5hJsgeFGHciHq7EjRdPWrKXjcocYX3wGiPENvCYpsm414oaMWbJcAodWtRNo269sVW3EUEWUoyviZYLqec",
  "key23": "dBhujDqFAHDjk9CPtJQcgLgjaWyFyqb46fxM68QfiWkFyKhd3AzLydUKkZdr4onEKeiZqkRBkyUuHNyXKZTGR6k",
  "key24": "3EY9WRBKgezt2FEHqLacYQxomKonrPkgpn3hnDtP3iFNuK4G5ui8cUgm8qArMRLzHpPMA1Ahb4itBn2QyUwpmxnw",
  "key25": "2xinPcgeULJzA5kvBhuzUNUDWUBvcLsPpuZJcnM6TRyXFVw3nZLCeL2fTmfqBNzL3M8LKgqTG6wBpmqVCgbF9mhy",
  "key26": "TiZaqFpa4Ftav6dBTSTSJNUJVuB9rJps4qdAw1hvQ52dCmCS9rZfvLgVYxY81LezZHtMPVDWhecao4BN2JZTVaa",
  "key27": "33b5k6gkrkaqntVHoaBoipuANcUzZkuTmjwEhy7a4M4adshGqr7PxrsyUS5Et5bv1RkRqUjnLp3Xmzfosm57ZHns",
  "key28": "38TbSnTuAJ37xv7mPXCqyjw5iAhUgst4V2WQ8bY4rzPdKYfCiuj4xD7HBUDk9ERWKRqgj79fRZQd5g1uePboSi2M",
  "key29": "2AGnUbLbHQX5DnoUQgFiYZLVBeHZ7YGziRafYkbABjxUT8DZsKW9JJtzqujNuUcwE3vpdGNvNQcE94G62zEhzHNE",
  "key30": "xwrMnzpeFkBCMzpDJm2Swb4WbiuqXwabZsiz9BVk54Ai9akTpQpgYM5CtsHed3GM7kVPxfRwvWiLraMKYAxr2Bg",
  "key31": "wdd6FJestfRLzhUdQNfMiiM79faA1vRiYTP1rJuRX2c6k8PgsJj9V5M3HUXyVG1jtbGWwT39aoNSXqu2Cuz1fp6",
  "key32": "bWbeuz9EBzREBwWB42Y9n7FUMCe7oVBcShWkd12E6pNZiAd26FnWJ6Jn7GxqyM9yhghm326NEr2Y7uXvcXMJPiG",
  "key33": "64g5s9auGGDV8vyEToUpx295392sGvYz6VVbz1YHAH1XCXgKe6iHHYza1GZ2Y8wgZbpyDNgWwRnew1pW3je8KLpt",
  "key34": "3LFqScBXRqn7t7rh2YcArXQ6uHH2jw6P9xSiaqL2UG9BayNbjN1RZkJCYQbUtpQCJ9MUhiFw2V4P4r8yaCjF2DC1",
  "key35": "2YZ4JzdcNT8hfNMz381chUSBgpTTSiEHXw5RNv8x8fHVpHWq5abLXhEnQo8H4fMddTmZE3FGTTZMGaT5GyPSh9Ns"
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
