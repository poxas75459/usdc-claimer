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
    "5jg8HvJebPCvf6y42K8eNtejEQEW9qHsRQMuRQE9sP1x6pD7N2fUaHwcMJdXMUKTLrv3zPzjrmBnq7JCNjm1bsaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9N7xJXNwYGg5eudhgVuf2CZKe2YJKF5Kd1hFBuNtyqw3HMkDVAfAToAmAwoAtrUmNXTEBVYREftA6vrhr3Un1v",
  "key1": "3Fhf5r7mZ9pd39BYXuCgssa6adaPhkqowYbgZQgAE79uBHxApNXujqfZcBHbwwkcbmagGnF3oyXsrZ5Fs2pbMFkq",
  "key2": "2rFFXLgMaVHJzDbiXmV9jfPLT7AHEiHHrfNg2Ns4xEYFi8mjYhGcqoCXpYD3zm886bmBowwRuT4CGtdJnaUiTqUS",
  "key3": "5sAusLfmWhjjyGqMrdUpb9pjdXKX7Vv5oHUsRPd5jUL9JTgjt8cpKNQPbAX8JyZu5kgJEtzm4qrARr7szomX7VRk",
  "key4": "43S793cicSYGYw17vMdqz12fKGSvoDb6u6e9jxngQVpxzyPN9FUcMGaHj34GWkJsSQPBJ8QdpKQWV9CiH9FaRyiW",
  "key5": "4ukgisHq1N7tZTHeWhHBpTkS72dq6FVTMdWC4YsFTT47oMZDkTuEbYPe4f5r5DLUnKcQ5GBY6KdPDMHv29VGoYrj",
  "key6": "hJTfV2VQWqyMdqTArHgpxk5gsC88VwCbZqyudXt1vK92zBTiZuSnesGVpLhCBKNDZE5GpM22M4tqjqx5M7QW5dW",
  "key7": "4pT6SZYbqkT5pwqEKRiKdbum5Hq8UxTNoCYRD3mEA2XKbeF8qubpbWSnhrNEQ5xYEQsL1HMwqe8uLip5JW89kbe8",
  "key8": "3haGXCwvDXdV6TpVHqiyty7xyHzUKEQgEUAimohssJZhFjTgtKi3uLS44jPo9EPjJzs5tdTdLG1QRrMLwANxVVsH",
  "key9": "453vreyKPKGMfYVwcB7sRHx8hJR9iCPAhH3WNvTXqqNnDjnKxvRDDEGggZN5bpoDBhzTkgYsd3L33R9KDt2bfrHN",
  "key10": "4bcSwtpS4V7aDiKs3w1W6gSEkHGQcdsGKhBM6NpUqKe9n7zfDAxDRw3Qw7obWoLVfd24XwLbANieiZEzW4dK9zoC",
  "key11": "4tyMu4jck16njx3qNQw3DRSxUBL2ByJJjsRS6bFck9M1LXDSaoPixxK5baHqqLnqe9kxNpbwFoKcFSjPHECZJsb3",
  "key12": "veQt7TN2WtbimTP3ZDFfY64MoccARnVzsDHKNeeRbwJ3HmxcctVB7hVoPSREBoTf8nYCqSBB4zWsygnPAo7QbFy",
  "key13": "2HYM4DfomX44AXmP4VspaffL5UDajiAYjSGQqvujESYv4NW8WHbGNEnt5wR3kdj4HFxzJWpERZqMggbR4dscourn",
  "key14": "55T33rt5sKho8VXDEAdbX6o9iC9DGvvBqTHH6kRKS3dZ4FX32JgLDeCa7udkKFBvuw4r1Q5gtMzSFZ3bv44u5U5o",
  "key15": "f33rYsXjeCS7fLTRs9FrW8bvfykMdqEmAvQpWskc3ptSPFVtPtwKTQ8ExfjUEMXqqTi58MFAeSErvqJXY1G33oY",
  "key16": "2ThLuGYJqDbY8uJnW13TQCAbLBp9V8XaQLKD7h1DctfUWTz2jKNp33T8RBBakwEiskNnGgsHvHtsBcRXDMHnCeCz",
  "key17": "2w8tXRLWHwamiznLbRLCMqTK44A3g86FDC4LAJAhpEzRZiENYiQdyKC1RKJ5eDT5ZKAtjxvTxqfZnPKo2y5ViF5X",
  "key18": "2Y6tSH3y7ioezb8vCPWhVb4noxtDDVasAEQcE4sCzJH358pvzf8vKVaUTAh5bWkFH1wtBDfMZvcm2zLNAJhUQyz3",
  "key19": "qQ9ouskQ2LfvgLPgWiRtGYd2fGJpkZdLay9ifEccDUZYzyLWbTCkwk7S4WYGFgorMGq6EFXTWaSA89T6i2BZNNc",
  "key20": "4hRWUFKTeRUJCrGN2e8tttZ23yUg66NtZvZ2w1YfiJQLF7yKkmdGmFbXqSi4nr6TtfjtY9LeBSbWRKQxRqLFo6gw",
  "key21": "5gomoBqDdDHjtbZd8Mhv9DBZsRTc8C756PSFfsVSfX2WaghNiWNE9QgbjaZiXfhPHRiPWncHJPTcC9cgpHuiXXXp",
  "key22": "5C7gyX3JkLin5euQ2VD1DHmM9DDcBv2UkiJniMfrNW4tchQ8qi44AuoLAVZF4PGWD75SzqTgdcHjWuDCG79oyUra",
  "key23": "cxrwfe3C6Rk7A3BNu3bMXbmfPRhVyZPAfYGghk66HApLdPjr3LNcr42QrBdqwLpmNkC426E4jvVc9ZwwRjABMus",
  "key24": "2SbATHdrRcYjyyuKXLacpXChLY2CQHPHQ4GK2L1SETtyNwCUfkYciTWXwPU5uzXC7PJSBGN2kqg4Tkkf5U5jwYsX",
  "key25": "4kWdg1JQiuNk4zUPeyQw4oenXPxKDyqeJXdUCUh4ciNFZvDKe4ziGVGckszroKzRTaBfZ8Mn29RRW27R8fasN7Ef",
  "key26": "4BP3pQM6MqpFSPsNKj2Fwc5uWy8bsxSfGAJgnphfrXa3KC8Fi2oPHGtMDfpT8YB6CWVEacPW5oCsr9tFPnYNok7k",
  "key27": "7Ajw9UQ4ex3mueyUxEop9Q6u4W2fc4hyatfSFGrFLkCiD8CW4zgor6i6rMGKhD6VpH48zJHXxRPcEm2JnnfDB5U",
  "key28": "5vsoZ5BRPyvoMx4tavoibkeg4FKmDuhgKbyyRFTXGt6FgwhMUWpsX3stPtnwXsp9mNML32e38rp4q9rmLGqMm2Ju",
  "key29": "3hRXJfDyKugpJad6jyYxX922DuHVVxMXkJk7tBriYd37wDn6siboWKawNVeSbnTyQG2GHzQ2zdvmxj4rvFSnPmFX",
  "key30": "4hd3RtULhwgadqz5ZRbmMo67N3pJ7fBj1LPtjyaANmaHCanQim44gGtkaBh9WgysjkE2GB26eZngDDAmgaZuQwDX",
  "key31": "4U6rfkibL1Y5vnvKG8AQm9HdSp1J3iie87id3zq7M4p2No5MevUxD8svfJumFYEn9Kj6dmxz9t2r8fKL1yKBb3o8",
  "key32": "3Mrs2VTkgTN1ccvoxN1SD5mNamrZaXpYcae2KbTyJQ5Cjs9AERX3A2ayKdYLcihhCT7wD94YoGxFr5WEQwqrQtKQ",
  "key33": "4SJwy9QdMCc96E11ZhvhTGKEyoTM4uTFMuHeJB7REZaQSjUzHn4q4nngcjVRvR71ehpMGFEQYGvYZCcxTphPyMDG",
  "key34": "2xzXZ9USeTGKrq6bz1rdRFEkXAgyQivEurdGmrNj2Z1gzSBV8zsLi13UtUYFx8E1qUzppotd7rLWsEtHkwMYf2Ui",
  "key35": "5RqX7uTUF9EnW48u1jFsJBRrKBKKNjbssEQ2JQZCZMSXtkUckD3KwR2QNxApineyqH5EeyzjQSqZb2bW87USEz8L",
  "key36": "4huDUh8GmDr1R4RYMp4aHjSiLf4hUekbpPNGMCo8nyyiMzx7GnKuquMiNjdfVtpAUYn5dD2D4EdFgNKEMX71c5QX",
  "key37": "vKuTNjWrJaY7ztjXMSFbgQpYZXDzFURFnz91D3Rpvg8r884PLUJLYy5GmyzH6rL15K1VnZqgQvpAnHfCUWQ1JWk",
  "key38": "3K5zxJWJ94v636BaF4JirHn3KfRFZc4MWDfHfjMxTPbZHU3PphRx1juvQenaWVEJXCdKS6JjTgzVTYTYqqwyWE1X",
  "key39": "2GjacxgyzBKA8EF7ZbhyinRycnQQ8RwRDbLcSFyAcfcqAq4mZjRiMEyoKqmuYu56FXdH864etChKHKzz81rF8XpX",
  "key40": "3tyNBbKgUiM88wVTojR6dv4UQSz88uxyiDpTZrtM4RytVmsbQywntkH2nskBAFTvdE2XKBX5G4cwMt3VpnR8Ti8v",
  "key41": "4PEsMh8DFEfpLXXQtN6cn3SQo8qL7BNFp8ZVbd8PXgFih1EhTRaso7sTzP66Do63kAp1uNTN64c6iQx4YCVJTBMt",
  "key42": "458nf6hFe7jD9tDCPnV43aTa7Uj5Q4Jf75n95RrhufXAsm531x7MYrT2efQ1NkVPQLxmtAHjobcQVD4dSXkWURzX",
  "key43": "4yMnnT6ETs3KPXwKxzRQZDRProBGDhSd4McGrPCGP4A9rerCszgqAwVsVhiRD3dG6vGTTqHixcb7Qyjhozygmw6J",
  "key44": "4S1FXmvg2AqciCCJvqH2A5JtbJys3A53GACFXYLu3vHEty1buhw6Zd2iQGcfzKAGc5Qs26TvoyeY1tM1owFfBfrX",
  "key45": "MffGUQERQh6oyiviog4VSXJ7jJ463KRDRHjrKWA9RDv22abuJ4qNT86f1GEMUqeQ69fbqcvmn96K3yMvE6oQpKc",
  "key46": "5aFWZCuSpVmGkH9SfsxXp3UDgTUCQBCrRXZJwsm8DoVfYr5bEVUQJbEcvM8y7uJcuR8RYYakhApuXBefPS3rxYuJ",
  "key47": "4npDSRy7WsFCTptjjwiQRLZAdprxBjyggEs9CnBWCczTXp7zS8RFzx142H1iVtf1tRgJgZPc8kBVyH4iUGrDLRvh"
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
