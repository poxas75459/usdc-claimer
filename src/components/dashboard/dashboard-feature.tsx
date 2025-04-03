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
    "5gmdvPFAdGKV3cY4SrbWczjgLg1s6Rv4nCtNrya8RX35fryq5uue3iYRGbF11N5UduGAR6ew13MBxoBGVkkcGQHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ncn1cqwbczPSrk7Sk3HzhuKygFXW6c39pPHWVcC54Hj3rxCCeLTWnmM98BLTjZHECWYPFomWMfwJUzbGfzHkpsq",
  "key1": "3ZbEDpBFSFbbGFXa3cAC2h85Q7pJoxF5QPFMCPQSeeDJSwPQ5PTzHBweAsUAdd8edYC4UpAXG6qEta66jM8cB7dW",
  "key2": "4f3XwKNA4QFDkiaBNiLLbvFVeXCRGB89SW1uRiQGSHwMFBQGY5XkBsNthMSxisW4pN7a2ix1QHka3vgVtphWMouX",
  "key3": "3C6fUmVVVVoW6XUdFtvJXZE2azsSMWayqLASdtUMv5dAMMHrV9SdQ6g1FnAwZtitWb3TpB7sjU732o8TqVLZY6z8",
  "key4": "5WXw32iYGzQXdP9RmTi7oSvRcPK6Sh9GjHpT1wimDRyBenqq6JMnhHoeN5r7YxYFb7mePfVMkW88N5bwooe7qDB9",
  "key5": "2NRr4Uh1wzP9foXg4snxWixTPgiFmn6DEu6uFK36mvnp34796TpvMZQgUb3yiozmhppi6vnnvMEA8twusCk1oZHX",
  "key6": "3yBeqEnpQAzMmy3cukmGjG52W2vndxeY46VxXJXDAVTv7exR4N7D1vyE5oWWKDBdvNY2z48eLHvnxDmvqVtq3Soi",
  "key7": "5QT6pQKm5ujAKRMQZR2TB7f29wxHxeF7XET1ic3zLGRSXh6R9jYX93MFnXjeunivvjvWd5yJJtuaUK7s7K98qGzR",
  "key8": "3xNziVe5NXnakdmyGnKcw2sAVHLJw4zHdJZgZbFbEva6W5pWg8X2D426vmCM7Tdksru9NfHvBjpVztkSiKLNbpVx",
  "key9": "54HrMmq8K7frQQi4bt7T9KTUM8uCwo2cfG8GVqkZMvDYgNWJEsvvg3qRcarPfs4jQHodHa4d9342CeCKU5PD6oYz",
  "key10": "4bq8PNeAC6qWH7p8GFZd7eASyw8d48cAA86g61DAxJ5P2paquAvUobf88sVtzJ2z92ods3Z6NP6Hyy1s6cGDMgg8",
  "key11": "5cvUncJv3KReyjRdYUpposD53kxbon8y9o4L96HvRaXTFtauEDaa1TjoVj1SvXX29ZhhQMN9XzqpbHgwA1ovwg32",
  "key12": "4MXpGZ1JwH4Z7QGmTbA1ck1j4evtUxumjBNXoaZ1RCjsUkzbfGiTN1icab89CCrVrYj1RFunRhhLgjbgRxhi8jYH",
  "key13": "2TptQnsUWi3LW2KgAVedusEWLY9k6L4ubCt9mD2D2UFy8ZYQkkxUbVkWTCm354MaReKXf1XNYyxscijugB2ENo7v",
  "key14": "VtDb7TYD14bv9fHuHF5bPi8iCBeNZdqSKXzSUDbSfvs3jnSLkutQnptG2GJMGXXg73hj9DDxX7A43L45TKpR4F2",
  "key15": "5JRKf1a4thea747BCWN7pRktwn1iJ2UdVPcSGN6VNGV7FYJvjL5gMwiGxiSRQ6M7gaSn3mx5B2evvm87MMe4Vs6i",
  "key16": "PQfdxVmPxEtZhWS7DucjDyvurgyH4vpE9VGVdxw1uyFMaTfbVfiwJWkEtB8MroJyKTxGKvCmLMrW2eVse96nzFS",
  "key17": "4KAUvahE5tjtuDgBbHZ4jSFUpSQjCV31As4yjRRpHnYXejTW7HFo3jvPsvBFCxhXF25MrRtBi64xFwWUQSj8CQce",
  "key18": "25X2Qr7N5H1jBpR6phfdJEhnvsnZDhFGcNer4cyrrAoXib6RBSMCGjoFAoVCeF2iA32mdUQYSqoTJtwZ282i641N",
  "key19": "3Ua7FZxzxV2KyUzVxWCiVAzfsUsBYdLiZbVXT96nG8wFgw8d9zdLHFSYHFbThoh7aQFE4Ds1R6MybP8GjeeaRLZw",
  "key20": "5rSCo6E9HwKipmjjyqTWd5sNrQvkR74Mo6Y7niDQg84V5RJumpZzeRkmuG6t2bs2GbgXf2pTWXPY2vUmqPz58A8V",
  "key21": "3F6kM1AL93jofFrkVDdwPoQYPbDe6J9txRxJ1pYD4Hj5awpM64uP8nQtzR1sJySEbzu5v3acKzihGAEeW2Rr4ECg",
  "key22": "4eh6sA4BnLBYJy4mfVKAuN4zN6BFRGZmisK9y1CP3G7EuLegRzY3cQgF1ubu5ZsJ1gY8aRqGiDYm9HPTrtkVjV9U",
  "key23": "3XytcBU9T6mFKG9Za3nGzBfteQXZ8ihheeei8RUUb53sdrtgvjoKXVzo1SW7kRYkbzExgCe96Gs82hQxgmJgL5yA",
  "key24": "3EFi7sKjYnwYMqKZ2y5xZupf99AHxf3Y5e6BC3zMdHDojQkubKeKdcH14gfFSF5n6Eksd8ZHmMsK3LnuoNHbUJGw",
  "key25": "5LTdsFJi6TGRjEyq3NYSDVbhskcRcmBJtP9FEz9dCoRArusyYATZpQUbtNHtnaroVhyQJoJy9A2f1XC5p2k6bVEw",
  "key26": "5xUN5AJ3EwdtgxoAPd8DTxBB56unSPzyQCqu9DWWD4nMYGq1mW1AmdGkHPzLG3Cr56Ww25VDtzWw7jQGpu3DBc6P",
  "key27": "5WEeH5eCJ4bgPnpkNCoMoveaDADHQQKRzgWsWVLWEvZfvjVUXwFQZyvYYbMguAxEBrVySNrrbUZt6CrhK1yZedZa",
  "key28": "46cpLfzwsz5b2dHpJH2dQ8sEvPXTS6JC69ZLmTjD6PDcckQoMhH4udKENmPNMsXzowePGmt6Ra5F4Fyt8WbRc8dF",
  "key29": "5vfW6KdCvQhUSLj86rTcFVGo9JEaQViq8Abui7Yo2mUErjsnyRqtcL5onyA3RAxX5oqvMNQVyf6CqCSsQz452bpX",
  "key30": "53V6nfxhgrPmY4Ljtyp1KeEPKJPeG69C7oeKRja8HSfNBVCEXbeUVHCUjeHG9bCKf3zfNs9d5x5BqRviXKfFday",
  "key31": "4tUvsTNdAfQnyfuV9AKTWdEtwJLs74dfBYnzJ4qeejtnhmwATxt7reFsrjtQL2JqD4EMMp4LYGp1BvrkUA4T5kjH",
  "key32": "3rJG8NJ4D7BURNsdBKbbHTDWpECxRXa7Mzw4XSWEzfu4L31gknnhiNWEeYoYWHrFddedM1bvvcssqra7jJNAC3Th",
  "key33": "BZjsSU62D7Hk9He3QSxAf9urDF5549kYSZGSNYz6Sp2MBT2nAdKhLuSDKMtgngS5H32SQ7NWAHYzK24HKRnqmuc",
  "key34": "547mqRMfPz99o9iM8Lm8vDcicqN1brQAeLqhMu7yjGVU2jtEZSGTvvPXgg76Kyjz9KYVVnK76MvQZmJMc17XjKv5",
  "key35": "3uJWrBE29ti9xjfFM8g5KYFpLNQvUx6r6SeDWq12cVVQSshvJhccCFHbBbQ1EU5HBmgFXPwvRHZ5cCmiwwmacRe4",
  "key36": "x3mruRaf1Q8pSxFjuYXUy4MHnLYERHjXd3yTDohsUm1KEdNVTK8znL6Q17WJzEKmRRA32ZiDVC8w7oAESxUeaGd",
  "key37": "4ivXVNCxfoMoiBvcKqvJAX5zfQUCnfkR8G9DAaZTabA9z6rFZjg4QTDMRYrBv2iNiehGg6QFqGTqjputAuqWVZSp"
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
