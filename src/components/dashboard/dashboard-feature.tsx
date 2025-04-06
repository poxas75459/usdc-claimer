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
    "5mzMkHmxxgoGsFGYPqbjtWDK36LL4WitDWgc5pY82A2fUmdJdtTFCnHAQdJndZpiChv9i9vcJ8SqzFxj2iBax2Lm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35o17T7CmpiDgMU3H53PJ74VVZ9ZEbU7ytfDZGFWmXGAL84eKnxbuginkchNaD4Qv9nT44ha7udn4cKzFtmF6Ufq",
  "key1": "26bJdARNocDtZ58aRZhuVfWc9fouyQyPJGXdaL1uaUqzZR4gGdPU8ZzwroubLXMBQ2iwwPd98TfRMZunHoKXsZN5",
  "key2": "273n6maNr3Xq7spHf23puzT2CKoifxMbqkS3ixr8KHUAxLooC6aRJCj32Dy4gXaE9f7uhNtom6hkBiwhYQssF7E1",
  "key3": "2Kt1U8XT9nsV1ULGAB95Yg3vMsfwTKNyvTCGB21gvb5GcpHGHemKY3HVg2jc1SU7cbmng4KmnDAkK4t6V9Vbg68D",
  "key4": "222jSC1wj1DZ83uuRKFG6RFi8i5SVrDfr8EiddEBXeJjQjMDkBsBKFwDPEqKYWRveqEdf9YVbaCQDhUKZ9jC3t2w",
  "key5": "ZbjpsmPTqSqz6Tm48KAZRofhnJ5z8TWSYZaLrKhswUX7WEL7g7rQCYQnCzrXqsKVPc1S4rXGHfBhpScw6Z4Qdqj",
  "key6": "54fht2LWxEDiMkY9WGXTt4tmMxuVT15seFxvqUR4nqwv2JvrCo5yyp8VctKxxNqRuesEFd2AyXvfhPBx75GBY7v6",
  "key7": "4RLscx8JEK8a195LMcwYdiWLwk2GMdEjYVGVEoPTGvk3w1Ysq1Jb4Bg8pYKiYPTi6aPdcSsGJ7JmUW3LzF31KQ7H",
  "key8": "2qxwnY2Whf5ncaA1Sio3maGavcM3ftfHMDQ7KDBRA7NBTRYiFt6sQjeAwUygxXSAvGw6ZL21dYUWdpCnjfnZrv8f",
  "key9": "494ZjeZuUJHor6GvCdg1mfzEaDQPa6oBSznmHGbs49AHB8BGHvWwhunPBUmRtPYEJKk5YN7cbMQZ2JjQjcdA1845",
  "key10": "5ZM8LMDZhNvDNuVqbxpj6PLFV57S2aDavEfAgyinGroyZttZTdKF5wnxn7x642jXLPRn19qVVAFVKMLDJhHSPnMU",
  "key11": "4ksXrmAf2w4KgefQgHpzKt7d9TBS8F67PZAcUBfa5bW7YdHPtvoiD5py4VQDM7f6z5gpLw5WzDQeyTgv1jozw1U3",
  "key12": "3u2crpVuL1Jds5FsqfhCFSEmnWWCni2uop3YDnPAy344zoDPVsK2PmHG1rjCix6drMEzo3NPP3NNBFhzPaubskAr",
  "key13": "36pE1QhdoKUEw1Dxe6uHPgBSkcQJotBhGauhynPFPik8qx3R89FNYz73v5qv8DUnzHtQPFPFQ95aoYT4aibYyeEP",
  "key14": "2Tybz1Hn8jzN5KZvC6HSchEuXuCGHU82E3j4Cm3h9Bb6xdKX6QDk3u6aq1DmP83KYg6E1uHRgjw9YwaN54wSzSYG",
  "key15": "4VueryevQpwgmxMLee2jh5uZuQUSNn9jjcShWo3i9ZeQ3gs8VHJ6X7UwSYtoXToT18QJ9W1u5zX6irjVRPyLMsqx",
  "key16": "5wwwEaFxj9CHJdHHyjmLewnAySr9msdQup7krwZ9ZfPeam2ifso9Foj5x5xHAJtQcXCcUoRh4tCxqhRzpd7iV9r6",
  "key17": "53pnVbUpS5S2F8Qj9FfBEbgd2atkPp3gevEAnLc8eUfQYmGGdpQMbMT3pCtNfPhDsqecG3m86YoJfP8jxDJ787Tx",
  "key18": "4kck89KHFvzGkbzcMzNDp1cWxmEAhXXLp5X3JxRjpZeU1mrknhFCVdTDtkcqqKup2QTWnbSfSNjjDxyqwPvGTZdw",
  "key19": "61Mu5jx9mszjJqzpZo35ynmfGHo29cq5HAf3fcuPYYCYFN86Dgvf7zVgmALPzrqJ4C8Rs5xX2YoVpaEzzrZ37Aj1",
  "key20": "41ARQYyWqXFTqCiffT3Zc7pLrRZHzeNApDyrrGnRLuLrLYJP8hXTX18jicwPSV7DPhg1F8XrM2RuWmizwDZGRbsH",
  "key21": "2sepXxTdAyCjUDgm9S6eWsFiMhGX32n6PUc9JucA4GrUDk3GTaTmehKneqFauwdncCH2472eAoFBCBTHD9yrMF5F",
  "key22": "xejRXo1muvWGps3ivurmsoxx7gg6ZBpFembD3nLJuKuXYdd8oapswhmLpgCASL2Pr4CDWM4NnhevsGLiJ24q8QM",
  "key23": "Zmxfuamww667ZTjBuwVVivTpzNXgzUX3FZJrGQ9SA1XRuNxX1uJb7XLbtQ6tyxsmHVeGDqSZu5hfFtNrpV6WM1g",
  "key24": "3GCmXaDGKdLd8EUTxf6NQb3D82NR2dCmjDUcsmEqxVMFTFu49ED6Zv3bSxCgE3VxQKPbqHFrj9GDZmFd2fZFMuqX",
  "key25": "ZGsWPXpzLdZRe7pNwvyqtgJV5ooQe4NQu2QE3SPPPVpLrM837U9hkvqi5s5cGZz57xj35oAnJWNYD3KtCx7W1qq",
  "key26": "2imv8Q1FBxvZWz5xA3YRFiNL4z2WKwHmQWCpPBe2KtPSWxwmioyW4hpp21p9W7wdADLjj3KoeLEt9eQxXEdP5TDP",
  "key27": "wWFwGVAgy6hELEKDa2KJm7yBxa15LTBBMCH291WHNb3VHE3ZpNxoSBAVxHfd217Bm7Nq1GoKQ49CT4nBAKDAkZw",
  "key28": "5Fp2Ciqybba4vHWqyhfHFB1ubCpsZDUXaWSSw2Y57qS1Xhz1JQgTCU2ebsuDwWUJwuB4epBZQnsotLz4wtUUhw7D",
  "key29": "67G6qs7sp7p8LPGD5Yp1hWfSxsizS12hCtRfcPpZjVrtQwvDxyDcFxB7fDtve3wTWRvd1SRh7wNwaQdrtUWiCnDN",
  "key30": "4mEkexULZrrZbvRxXinimNmU5WU6aZRZwNBv7VTSjCYWVAZEGRckwfqvsAaNToxUv2kfDgiqhVj81W7iE7Eyoecz",
  "key31": "5eHHaDEPFpmwdaBBxmJTSjEPoCZH8H8chF3vX189HU5qfAiqrR5LZEWVQkmveisWekSyCHJwDDLhx9rAGEZCpDDT",
  "key32": "4g5nz6qSS8eUPcUghKhHPeFd35rDVL8xhiCRopvQApL5jvVqpvyK1mDTAWWbSKjBbp5fAbyqgGmSdhLGQZR2Rq3T",
  "key33": "2n2Bp3tAfLnrfVMLiFDkr9VbeK5qkKh4UdPiLEHqeJAptnAhniJUuLtHaM9g6YesLeMpz2gPNMmwDwY5d7QkZhiT",
  "key34": "1vY2AMX6XWSSfWXCBP26Zhp2Zms3Rti2tMgUwGCRK3CD6aJSsyYK6PKP8Wq4ptEeX8EVA3VPiTTjMZgDvxEu23p",
  "key35": "gmXwphnUe9PimqctYkFTA1SmXEbwTnwT45P4XeXqZfvXFgWDAPoyPJ1AGdmCDFbXUFohHfw9iQXwztmQ7gjDbCG",
  "key36": "2rmjgrZTHJ9QzxWqad1Ai4rKuuPpVGaxnYE6EiYxFQCFiBKtUJ7N2h8G2qvZPw6Y5zq2hGm51Jfekivfg9DqHa9p",
  "key37": "4Qmgd5JLTzizmXeY8WivD7BzvX2way2sMPZEAph1a5s9P2hqey1rVzQVDx9bSzxfmsUAD1JHpv6mdnANNdmio5ut",
  "key38": "3iGy62gRfB8xVLZm114eG49mAPpzSaWzTRmHHNMqqQEed45X1KwZUKXvesFaQozyjkrKXotKpkQm6MXtPAcmDJRC",
  "key39": "3ciKCqwNErLNmYFzqjdxkVqrhRGsaA5pZo1U3t4FHoXzTgVuVAqyPTHioViTxia7VnY68yQJoG3bBXZ9iGnUjcdk",
  "key40": "JN2LUQ934bZRzM3GpZnBf7gJT42bvcq2om5zfkUAiLtty6YceKofB2BjWQwfDLKvBdqjpcn5N8TX2Z9FE1ADaHd",
  "key41": "413Ea9j5gYaU7gZYSZJmNzury2k7pBwQiVhzqumDwFgdbPHHQtKKPFgzv1F1vVQdMj8igg9uaemT25jjgJDLaeYQ",
  "key42": "4JxnAxPBTCTcXk5ej9fm6rMKPeZfq1URdeQAqjkTVGARHXkbYuL6tSuPrVGhHdcWy7R6sbbZAZD6y9bxFvrc1XdF",
  "key43": "4ybXew3ibA7pbdpFKjWhjwDGB5Es8vLQ7E3hUApEvbcNjFD7qbJ4uumXeChNt13fooSTwwAaqzEGkJf2AMzpBuJc",
  "key44": "4X3abPfZeeuVRnLwmFdJ7Gqa11gAdtuCs9Z5VYZVR4BRDw1HEcYPQeLAxZiHDSk7XVFumB1pJEVfb26mkzJGdFmz",
  "key45": "4EEzKxRm6ZwRGjXBhZtojhyMuqKpzeukEUGqDZf3sSBsDjDijofSYWvpb6N6pxwFnGHPK2gzQXfQqeAeuaL5nrzM"
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
