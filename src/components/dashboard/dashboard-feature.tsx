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
    "2czgeH9FQ48UBxk2nt8B6wJ5wMB1eNdM3JfU27szB1eqxMTS5Rc2kzLD54U6PSarpJekkb3muzuypXCQmSzzE6xE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nzYn354EKuWxuM95zbBXyWzT2E2KUBd6CLcHCwFFgSLdApasshiatCaBhUQQ3wZPVUVsUJXmENa6HLhHJUJCLKU",
  "key1": "44AYY4fPHoFB2qrMKX8KAxjb8p6DHhWsk4dRzXXzdGWR6tsANjK44rbYbniXni9r3LxgnuEmrTDURnbfHBEEz9L9",
  "key2": "4g1Kugg39WuJnF3nWUHuM5gkVLx9f3fkG9BJ4VihE5sQYKfCaoWk2kyUgKzzPQ75sztUS3Lcc6hgry2429Yea7ht",
  "key3": "fMAdWi5gP35EgqrUF1vYbTeHwL9vQoCSQCmjmJFYm11ESMjktoJYVcXXupkouiXGpvHaTnuVZLU3a3r2BzGc8uy",
  "key4": "4sszkuVy5aHyB7CaxevjbZpdtCjQXKicGTL7SjP2vDjEPeJ82ueDzvbfEeGjqMRjw8HiMpdXL85y9MerhLjHqDPr",
  "key5": "55z3EPQ4U2zN69agGx4KjepqUVdeF9dQjv4iNvD7SvonnxziWJVahzTFhw5Lkez6UfMGWnKePAAurwWUghWAqL7v",
  "key6": "UHe3jCnSjJySUQVYLyZAqnSPiKfawDtmMyPuQ3zAEnxeT7GSKHY6g99xBKiaXnEmdGik73LJUXEhNcJEsQCfSNo",
  "key7": "3pA1CW7HxZBD29efsdfXsihjUdYoDHu8piTM6WwaZm8WEJ7ELAyAz8L93Cu3Ud5ioggNGTqkKkiyoZLWqM9RMNyZ",
  "key8": "5cHsvJhTMSUEUcierckNABCxKQ6Ag4RiD5Fz2hK4nJQn1CNgNoGxuXWfVEQECdRMuQh9Ba1YkGKc2hMRPFDnmDk7",
  "key9": "3uc9KxwmfwVbcUzWxZizZbcXcXjwJ5EdnPPvszP2hnBz8dS41FUncertGKYrVVR9ggaRr2WEzMywcJ3tA6cnyTSf",
  "key10": "3H2nnm9ycSDAN8u4VV4DkooaBFMb6P2UprkbvNyj5q9ycUMt5Qsc7eKqXnxcQ7zTpL7GMNKJ4K6PUCeTXjZJWRAG",
  "key11": "4NtHkutMqafFnvvNTuiGeLT1yDXv7MCYTVrCnbNuVaJ3jaoV6KaXtomdiWU9HHxVEEuiFYnKtVB3rQFnq3DEcvQY",
  "key12": "4WL4P82ktvn6Q4rrGLMhp9gfU7AwiF8vuoAcVybdBFrXmsi4cfxHCe3xgqn1C8qe3GtcHRHaFErwLFMVRUpcJmVx",
  "key13": "5jY1tHiALtA4LU7S3qXhV8whX3wUre9ZqrUK7foQdCSCrc5M14Xqn8jL1eKu8YeyggP71JvVf5CstohuovA9Riy7",
  "key14": "585gVLaV9x5N4iSCD1nzmEGaPPBSVSFVvpYgnUuD8aewkf7snkuJMhdKNQUC86cp2pnGLWQJsprLpA7sSZgURiAe",
  "key15": "5p7CBvAJgKUnb5vAmWNq4VfCD2knu6xwP9qUUmEK5QSSARFyY8Z43joFqVuyGmcoPMwyMELjWkWF73RDiNFScPv6",
  "key16": "2P7CqTJSaqFkUrdZVnaR1SaXTWPUS9u1hHhxMnZHmSD3YfeCwmn4MWn8gD1pNKtH5yo4wmVqaft3dRMFnXB18u9x",
  "key17": "278hMeMnU3gnRwuo4DnNSkymVXxATp9xB1vntuH1wQQp3YGtKQJr6czTeEorNm8r43maCN7GjnSKtsFWf7Uzpn9J",
  "key18": "5T9knQjnvndHyvQp49ugpk7nZpAvChfu252W5MNDW4EBLJLNbpXdCDKsAKA6eGJaw9xHnDuvJnc9pLRe4Yejqw9U",
  "key19": "3UPLiVRsTF7KDUn3mnoUwaMBDkmNV2aKr8V39BjChSKjgzmQuzq4rXPenETrwFHrpFpJmUWpMFmRxVXsVfaiUpFh",
  "key20": "2Vs1isfcLSqiyQa4iFD9nBTWmh6fgnCq8yTvci6Pja8WnbUSZHZqLGzJXSZy2MKPtzUDr72EnxFVqerxNYsiQkA",
  "key21": "3g2xaVFnKKsMCJj8N7sEv1nTBVyPpqhRyaaLWwhbBFRcp3EkvQk8X36McRpqKam2u5x8EdV2r4ARpKTcGnjyxvZe",
  "key22": "2ftuBTUSwZRjFvN8diQ8h7N3DgV79zYAwVp4APCaXvvHS25SqzdsSLuppfk8oPL2bCwtyFPuQws4zoxP2CFELYsH",
  "key23": "2XT3y6FL7wbvipmYxntHcitf1GFFMo6uWNneq54xRTLq5LBmSEHtrRp4p39RWgK2UDRrLWZEfMj3JbEPjvjj55er",
  "key24": "5yyQb9eXUYHQg58F1uMLwdpNjY6xTRDSdwazQ7deV5NFWwBfUCSEzZfAsgwBat7iPfQmsR1bJENz2vCibnTtoF2U",
  "key25": "51fMeshTBiaT8F3NE8BEADvSny3a9kY9Q1CQvG1wFMj1Rd5PbkJSyWhLtT5h1748AcJtrSEifpDBrQun8eMSeSxr",
  "key26": "2BiCePKh33zBCk7UsFfFEc1dGmyAyQwbtb75ZzVF477iyr39ikxe3eHdVzgHXnbJLAQyw9dw19iapDpRBzga9MaA",
  "key27": "2EAbsj9VBQgcdwPvDMpFzeuG2B483qCB1eNCSu2ZMGQLfnQFhBmbhNhEweNCWAbigMxSrMK9k1Du5y99qHfy5PqX",
  "key28": "3NVab46j7hYkS6WY3wPiKKjHJVgQwvqEmH7fgitzREktv5GU4Dz9U8wSwjwRKh4i27231DGhtyqReiwnG3xw1UrS",
  "key29": "215SKoT9xRhWmPnN2BiJVKXwkBoXZrgDynTJUpEta148b8m46ngrzF4SbX2x2zzfmHYjei4UEiTo9P3YmYraNy5g",
  "key30": "2FYsrdNVs17novaqwDboaM8XkdGGfpemVen1x89DVg1UEHtFgzVR4pZccW5sePX5R8UaoLKYyUBTaseAxSQA4SxR",
  "key31": "4zAfLDMDQFCEwMnEdvk6su7KoQvEAUjKrvJjTnHgxd4A4vWUsTaMs1Att9Z9d16FvhmYthYRnc9K9BQn3HT3M3s",
  "key32": "2uB9kiBzwqtKX7B83VRh1isiGW3GtPcWS1Km7zppiiPPCw269nhHuFCgTziwA7AMiczSAep4V216SLE1cxWYnKXg",
  "key33": "5RUSU6ftcZKrnKHdAGNt4FQUYgta2C3cESp6i9oqcMX1EXoSsb7DkUNMJTi1tpqctFAfMULNPGzuRt9aqBDaYgCU"
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
