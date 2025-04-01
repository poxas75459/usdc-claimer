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
    "2Qh2C6bcJ2M6vGhLDmPtd15fB5jGMP2QLXf1966fr68DvP6Xr85GaTJ3yHDukCMpHRXaHrHLVUZdcuFzA26ZnpSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W4ihE2xRzWSiNKuD1y7AqPAQzSdvK3JZVL5FLbR9KnNiqVcZRMrKprEsbji9uWhfDpNGA39WdJ4BENX8LvW4Nny",
  "key1": "2WkHSTFgBhbN5GiR7rkUiN7dGJVgjz7yKcJHsyHZKGeXAXcZNoe6FGmaayLqNdeNJDnF2LWKKMHyCtCj6JP3PZXW",
  "key2": "3eMUh7eRMDRy7cGhsLwqi8vXQPzrss8n1Fatn8oLiHsopYJL1dW7JwrqtSimWhV6FDcQhCTLhua9v3ZENyrM2n1z",
  "key3": "vBqE8RB7g8DLXtz14PtpiwrQus9JAz9wpSoCDgd5tqAN7weNzTEnrwhr67yAHEfq7f3LAat2NAidgzQJUApJ4mo",
  "key4": "55255QAGzXTVDRg9mLEYww3VX5A4Das1KquyLuUpWsPCTmJKA54sugWL7DGw9y4Gs4b7o4W763w1VXaH8aCLmFUW",
  "key5": "3PLQejymEJ2dKk9asCfYNb1aVwKBd1bioCAzv4VQfvfhnaD9rs9SbCL6QAJdAJSWQe8KsgQEbHXCBW5yezjQzvkG",
  "key6": "4h8CRXazEDhZchNDG6zTNCyPng4avuLhmYZpbKgrw1eh54k5ZfNspRmNFBMRVSCzuVsfH6JT5vmpxuLc9f6vecTa",
  "key7": "2FuxXvyJ6YSVgEXEXXgSR4cvXLD3vecM3b8BUkVmdCwvTCBddtWKVtTufgref79qjR7Fj9t6w39r6d4SNdUdyWwk",
  "key8": "5WVM7FuHxubtEfuvQe4NpPFwqx3PCyKLeZy9rumxHUZxgBdBvYxkMnYQtXimtHxL4qTWfumwwPdYr1TNxYhiiiFW",
  "key9": "29Y4ubfGSMoZN2WD9FYBqMwpwtqYKQoyFmiSTrS2FSpsadkWdHYSiGAMTCZN3v4WgwjqaCpW9gqmdA9EbhNP757h",
  "key10": "32p22WPLwnfv66fZP4FjAdqNsve3nH6yPY2DVAAhHpFbh693XzhaHAptY2iHd1MtHEERmmkWP2GyGLsRedwcFmui",
  "key11": "2u4WJHh1jty38R22ohwBHUjvNXPgq9DZRspzcsUJne6aCHMhzMe4EwHjYiV6TU3LXZQUunQeorSL7dyA8qM2zE9e",
  "key12": "2LsA8uABkkiLZoFZ6RiNqMeV6M2rzNFUP2svS1zcCruDBqh11h7qeXJrT1qb35UeEES8FJDmrX7EvN2nJyKtP8AA",
  "key13": "3Q78WE6yZRAsVw9ymExteA2GThXubqjY8K4ksydBgej1e87myAPbx4GiePU9FAEHuvfmCqNn2jkXqwZ63mU9YaUu",
  "key14": "2y6q5ARHQTKME8DpNTw6Cai2aY3ukPTJTwqtEwAsSyLNYxwZV7A2GMhuwjZRTNNUkuG8XqqFwWLT6jHXHdn82ZGw",
  "key15": "3e3cX2MCyNSNMv8v3KXTqaALySv5sToQDmsqzYeawKBEvp8QsfenS9h7HyK8KwiyMqnPxgzAwZMF7mA74jZ5fure",
  "key16": "3BeHZp2PQxcxFA8hhTtfVzagvS8FF9rhY9nn6JzdphD4zRqPdNVVzRe7jxbz3T6U7W3MD9eao6nrE9gNDrhdFmrz",
  "key17": "2gSWwFRuCBDgtTi97zSGTtZhCfFczvWRWhJvpdYKmJary27rFPFkKQ6y8LiCYRpQiXPrytYgGF93H1usBA7k9xLv",
  "key18": "2ZGn4f3it81GPRujsQ3hzGwnWLmpXdh7J1tf1F148RxMhYvZkSuM3yKJD2XURpyLEQ5CgY3mvdFoiGw9Z3gx8HT3",
  "key19": "4F2bvm4F9riEEDucwFzppEjxk1NXcVH3kRxvHrtruKpwde1GFXhWC3UmTVkTjHLHCih7cWx1DiXVHd4bpsry4Knk",
  "key20": "5KPo1h5na1HoTnpbns7iVq8M36L1fSC8DeRFtHQqaZfk5FW9qmFwERcFZh25SGqf5cHEkN34PGFaVVZuS7MAA5uy",
  "key21": "47jwLyDPS5MkoKxogLVGsWQw72dawpeuXg6VtUxieYUepykqhar1b3a8nw7esGCaA1SA1iBCcbCqYanasL8F54io",
  "key22": "63At1YZmqu8exLgqjzGnYAT5UqzUhAVGp5jnPci5hQLDYSwo98MudZsdA7yMHtQo7aMgdUk4hFkabcJ4qMQmSQLD",
  "key23": "5zsgwPxcGUByzewGDeUDGruUi6oW1iv6vuXGfDhfaoYLSHK4ZVdRX4evbQDUGSQ4cVRMKn3umhgBZL6cmAiz7XTa",
  "key24": "5Tcdj8XrtzEHYc1UHvcP2ejNSgg4DJjXaiKSA4hxxHqGz1JVdSRupJeSFjkyne7weBCDVQPU5jsjUXiPfifZCXSj",
  "key25": "AwCjDkFbeKwvG2bvhFinYGDF4QkNnhvLqzmzgMypjQR6ADqAUX7wXkF39TsinCxwHEyTpjyGW9hShXug2QdysrS",
  "key26": "5VudqMd6Kvc1edo7KDVisNmssjvatL2LozvafpED1CSMfZFGZE8LBUwEAcR19iy7N5p3ZJ5ztYg6wNzAeWEu8kWi",
  "key27": "fvtUfdkw9CgveVr5gCW3kfQ3ardzM9Fo2UcenWUuW3c7KorXqhKcDmVAj8jy6tNeXS975UHtEh9bFPCunbRvJex",
  "key28": "5JX8rjpXppAgkLDayXQ7c5L7tns8adPmG35axV8BdtaFkSKfMsE2f3JWPa4Xd5AiEqW3kATGFcmYGnGtfboRk6zw",
  "key29": "3gaijgnHhsncTDPNuknrdwshLY3E5UDMUsZ1sqpjniW1WtJ56TRwU7amhqx9jAmRBv2ks1oFEU8ypPpsLVf3t5xA",
  "key30": "3Cr5oFzC2d5GJN6f8MEYR2NS7BLrVR7cPigmkDGUpn3uLnT1hBJ8WCE71m8RG4TuiBmeBwwRMJuZwzSxTKGqjgCp"
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
