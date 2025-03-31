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
    "5T7oddPF6qDJcqyzU81seyFf7yFA2DZ87qHJhZWPtWczvvZdPCgTZKBVDgfmU3oEHZFvW5k4Pc14SXW51LfEfMg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eu2k84Jmeu6dJ8tDUsb4Wq4EbRsCQvMB7dG9VSFWw8maFszeYYYjfxmhTFNkBobyeiAD4C5r9RMs57wZK53ZDbS",
  "key1": "41EoVmhVAQdUGeV5uW8jSty6eHc51S1S1itXVMydG8MdjwtuuiUdYeSUGrXc878MuRPibYsaDuWkMdP9eqRqEUdm",
  "key2": "2nLbQ3aftgsQ9SboDwJQ1GFzKKWkUqJ5HJg3Vf32eZTnN3Lp6LD2jv4xuARtjFHRG3zXqTEnLymNyLdRcDvm7U9N",
  "key3": "8pq69c9TFd9tGfNBQBTHWJcRYemQzUbRzBci9X6rqQsqHcVjKHLMmGfvuKLWM1ri9KkWAMdj8zxCSfWt7kKg6x6",
  "key4": "fgZvTT3kd9njbpibKsEExqrX2fHBfFUJrkFkWc88YknXiEdwUyB1JShEyNZH2D23qhWdU3YD2uepkKo2PghsYnJ",
  "key5": "4ZnKhboBAZDm8apNuAEseCWVmMXrtCL21VstzRos23EcqtuJY1XxhMCTkppTG9T6pvg7bDEgY9vfN8eqhUT4rFM8",
  "key6": "5JGUCNsCA8bxcmaTZ7x2KGUyTv5ic12W7VHinABVCGmwaLMnSX2x8NKfhfAKMYnTgBxWt4R9w927HjzHT9FC5EQC",
  "key7": "3aMPm73HoCaVKNgSSa2JVSj1x9XPQUC7mZLRPvJKmCvFUHan5sbF1Q4DimMh5iUaue7JWvPpBZUeGfZDeCEdAXzz",
  "key8": "27iEDZPkmHS81oDEWff7EHrrF1AqCpdkekLJMUtg4XTL3J8QN8ZRESvTmvA7MtvHkrKuCyj3fR4qzFFf4aHw6QSR",
  "key9": "2gou1AKsgmCQHZzFze2LoFVQWcHbUMwxD91JuH2a7zN8R4FciMy94Sc3PrLfcj9rzswpMge8mxcZ8JJE3bwURUsZ",
  "key10": "gVqG57LePnRHy4ARZtUZCAwPhvZmZa2RvAXMa54GQnKWkRQpaMvv6rqdx59rypqnE3DnPfo4Q2EJrUshktkLGPW",
  "key11": "g8gmmwaMaDdguLtmqa4CMnw5ceCXAAHLr8uNgq1USTyzCbKxCRcZhDYHeeUTnN7eJEznBtHvkw7y5TS533kBKqf",
  "key12": "2xuN4VjXSqG9cuAmz4TB5JFr3TJ6ERJxuewmP3K4YejyBGi5rBCFZty89RwXJsYZvBDJXonjPRHDp7wqtMouhKG4",
  "key13": "4EbTUTbMBTZU4fvUSBaxj57FXHqz3GHbsgRYW3B17DJJRidPEfSJcjKZSsHRvnKfJhaF63LfgzWKuEVYUsyR8ZbQ",
  "key14": "67qViusmJrCCyiTmqxz7kzm6hzpkKPd3zZpDDDzGXCkYcP3sqNDbim3i4oaDxR6MvNCLtizZugKWyGCCpkhRDenC",
  "key15": "42jSXRMVTf3eDYvD2AYw5zUELDMCGRfHwPh4aFRLATqD978iR97ZsMEDhU9z2hspL3Wqy4ghtS1Ez8MW68dsnNC9",
  "key16": "4p1FdWfSBbMfoGhAZEgcNzEjeeEERnZVBNEFkm7qhG79N617MGVtLaamZnujPJP8GuseVSvC1WNTKCEnvajhagZd",
  "key17": "5F68G47QpD7t3mtyUY2pCvy5p5vmspYycjNVtvMQJZtfnuRDU6CdohpsqEkjaBYg17n1wrRt9mpt168ocUPnyQ1S",
  "key18": "4MAR4oDDuVY4c1EUFBA28PDVUt8wvkppyhq4c7mdeWWgfFYhS8HQT5ZqfVE2YMiKVmG7auaGbmrDwSoH2c9kYSXm",
  "key19": "5oL9oKdfHPCDkDeVfYeyzDaL7wKYVkWupWdpeJycszjyXTwPJDwFX2frG8espc6srtJEPRY72BbhuqtS7EPGxBGr",
  "key20": "5i9FfJ2a7z3FfL6TsMoCgpTGsurNB5WMDJP8KMp14sXAJL9ff9m2R37K3aAHbQLp2hjUmnx9GBUfidLFrMV5mjVs",
  "key21": "4wQJs2Qs24Z3zHA7T3MCDaN4fanVqTDMh3KUTKMVYzmvztqVZLtTUce3Djj2C4WDm4zP51TmbLiuktq1pUWzDKBp",
  "key22": "2KuG2bFzYryaiPgvuhRV6SkGWYyWXaVPUtGP3idCyYLSxJtPf8aioo78Ev3K31uVBiLWmThFcj1GR7Vb5sd7fCPQ",
  "key23": "4RvfTWp3KAJ7nSQYN32J1kGYmUf9PK7CeLxL7dFB25mATmZL4hX8nuGemtqSjZps5pUDUdjJShrYBrmZct7BK1Yf",
  "key24": "3gMGUXMxbkFbtRvmezHwF59ida7P3jpKF3r66LZeqvopanYwjZGxqoUwBvHKmJQrU1S298wpzaRhC9GBoFPNzfQD",
  "key25": "xDQVMyAtVfpVN7RM6Fv9UsXJ43R3jc53SvrnoYzGsfMjpnQu6fMninnmsBkGPHXpd3mDDJ5iuWN77gF3E3hU4hr",
  "key26": "LhiedMDKnLYGV1uyMvkXzsYaVhCcqErJWj2beeo6NVA2pW88XDr5gTjStgrFE34ktsnCra5fwgUqrANtwnCt91h",
  "key27": "5x54zjeAxNiKEKTL445hcXqrLDiDUSrtaE5PnRLsqFwE1i1s84QLE2gYwW9sy3kD4nXLaszk7TArZyuoNj5Kpc2p",
  "key28": "2m5NpQ6k4FdFbXR9AVkTw8jE8bCJz1ds67pBGjBpbMMYFAAcysRMEgQUmYxGawm3mxid6sqhre5TBcoReXJutbuW"
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
