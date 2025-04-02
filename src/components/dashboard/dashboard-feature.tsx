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
    "3a7HX262CKn4hRQwcZJJh3N4iQCEsQabg7ieAASe1R2bVQztFkGhbS98zqwGeWsAFMm2TW2Lsw13gC88aMGFAwTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EBaNgwZb2UuMJnTjhkXqg2NF5hBHCaA7obJkucJmzQWi72tR4p7x8dhBxvcKMTEoHxUR6hteEHkRy9u4hBpHC26",
  "key1": "2rNQqAbf3YdRFVKtF7vfs1a9RJKnKUh7bzxp8hdome2ndreQWRdvyYgoRGZvdZ6RCrVEi3qA3m1qVkVNbGxzwEAz",
  "key2": "5W97yqXe1dFXjgi2prsxchx2y98FKqY5XMUBa6B6LNkMiVE7y6N9seEAbXAdkbv3ZGzihsFpLUj1SkkFx9SUvFGX",
  "key3": "26KVonu4kV12kxuom1Rh54mRX81pfp3go5UmFUQKnx7QTo82oLCw3A79tiLs91m9bAP3bhQ8bkXDgE2Yp1G8oQAp",
  "key4": "3acDEfyC5JhKyF6peBAqidKGCUxrpixG5RaeuUBeJN1WMgHAjcz6DpuRbRuhKSDLZvC5jYbvUrBdfLUdnNW9v2eA",
  "key5": "3zfKPotd6bpAdXVX2UqcSvKboqpnt5GgcuLY9cYDnV56DY3aY6ciAZ36UMCAWUFtDQuzhaxKtQXFrkjRVTF7kZqY",
  "key6": "s5B7rvQoaHajcxk6u2MyFRpBdKPTgTxjXwenLLoHDcounrcLsLEV7uW2bnWp6yw6ZeqZ2mjU81Hahsp3civo3Sc",
  "key7": "4nX8p3PeKZ4Q2LXW2sKvas6nusrZr4chFi4jgL51XDxXgEcr3AHGx3b29e1gQg5uLyNF6ko9SzFVYwfGYqkeDBE1",
  "key8": "31iPT7SvTe5y2yH8H2YbUeyRyJVdoy6Z3xVbdFQ7zWYM8igwaqDycqf7XNoieJPaykkQVRmTZrodvbhraXAaY9uF",
  "key9": "T5VB8rcwz13PM5zPQsy3qyj8eymVtPUYrUiFMufSPwtpXEyRuGEkxGdsZiNvAKswZfe2oUs6xuTwCzJMxiyo5yu",
  "key10": "32Lx5nfhXLKarAyUrF4mYrxDjgfnJXJDcg4cF16rbHLFz9FR2TvTtQvVzBKfizef4oTkBcypjjLbo2PyXcF59a23",
  "key11": "4kwSPf6z8Y2X8KvBEvM3PpC7hCuXbCVSkqrkRvJGwmbB63zjBsgT2Mp9LtB6H2c5KNyKGTLpZfDdTtpA8SVsa8gq",
  "key12": "3pPayjYetHLSbTCEofBmHtfc57sGLE8QVyu67pGjmXGSXgbqSxrfqoM4TapqmMQybu8WFW9uHytGRZQD3vXdp732",
  "key13": "5HVJpKzaN9U3f7LNdCnzPLdCZ9ALeJQKpiyyXZuiuPrmJcVG17xbd2TVqGBwj5LzVXxoCHsP3oy53eaFgLYpGh8W",
  "key14": "5jZw82nrAndpRbkTk7nnJeQVKDFgaKoL2XqJWS7q3Z4svy21uDv351qiBMUz4PuDjtt3btCPwA6KJhac1Hkuf2bB",
  "key15": "2MydRnVdpxjkfKS9URyrCQoTQx6Q3aFvPbp21AEdJWZbz3AJZgkwG5xRMwUna6jrztHapN45nSpFkjawbB2Bh8Fu",
  "key16": "UDX9oxYPX5NSuJEKbNYmbuApVapRNTpNtZsvHG5qpACidibeMPHfp77QHneZuLhWZNxFHSRJtM2P1j7TY8evw3n",
  "key17": "65Mr6DPVeHqAfnMx9Mfbk3qYYyDNkStmmYmfKve2uYvmgVv6123Ub7T2DESWHr6rsC2QMY7ZNBdmcj63qoaM52pZ",
  "key18": "4gHmFoWxWNha7jW9wrSCJpEsHDNqeWLQYvBngwTChfGPLB3gbARY2VVTGDXMNYUA83czYBMfnw4coZXKAuiPt4S3",
  "key19": "47mbbdvV1pNG1HQB3oxVz24cFp59r8YxNYxio8V9K5VVKimzQbb47DnTfPPStka599FBY2DoDr8wJ1xazWGDgHBK",
  "key20": "ePD1SL4EvVRZCSPRPk5q59zknqSTrqoZcBcVZftiNWSkQB5x6PmJdMgk7z591vnuw3aM6796iaKF1C7aKqz6nYb",
  "key21": "2z2HRZqeQRCSP1JZJBg9dd2EcsdYz1Jx9dv7a3iqq9TWWHPitvsZcxPXFGgoovcp9NK2FaLfE2gsDJT6eNyLeLkV",
  "key22": "2DEgoTJSi2vj7AN5ppwxggf9PkX4yV1vix8iPHpbC1Ujs6hDwhp9yifCRmQv3Ah31sGbccumTahzVQQNWFQxeefj",
  "key23": "4D5e4DmcwbBkCSZN96NYHELsg3DpLktsyFkLvLRs4DLQT2pMNX8n5tuAWv52SpNTMFnQcFM7CVnuh2iYtwioG2px",
  "key24": "2BEF7EssW63vzWQyM1NNJB5wwT2GocbrdaG5Qh1VCUnifFi7z5JRvRHzjBZemfW7eeWMqZxrDNuTZRahAhjzV6GV",
  "key25": "4srWmBCKqqot2CDD43MchP2KXAkm1ZEc7hgrwqmzwB1gJLa3HKqBaENdqth5QbyNGsA7LdoaAQ8aUo2EYb67qaJY",
  "key26": "4apCU9nH8B26Tg8cZsR8AXcRv4EvpPciiY23FmXm6euv6EvSXcEcVTbwqRUYxAmE8T2dx5TnDnAnyy9xgNHj6Ny1",
  "key27": "3CDnPyrAYSLEMWJtnYZLYhp6fSnCuk5aQ253DZ4s7Mz3TUC8JkDpTPCCi19rxtWHdhVMXDFfDi3y24QW6GB4BiYx",
  "key28": "5ZmVnbyPk2nFQfjP1W9pvtWYRRFEaoGyq3bwFPkZD2EMvbgvUnEhcAzMXiHdd4wNtJKkcQRa1LWh7H3RPe9v9a9T",
  "key29": "4rhHPWA4KKYdk7WKxrqJEmbiKdRKR93THyNbh9mnRnou2J8p1ZiCtMKHt1N772Gy8REBQ2HweYEGHVNaxKqFY4m5",
  "key30": "2Hb3g38sCZV3nftXZLyeXYYRGaQh34vPzB8pwiiyTz6suoBrrvQFNDkBp6G2rj6oJqbD1Lp9KFW2vE414GZwRpqL"
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
