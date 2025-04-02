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
    "31wotxWE28J5mzfv32vE1J7wdafws89SrnKNcaGH3fNHfSWSpiB3uV1idMmhYyk7EpnbuRUFxLWaNu1DYbLErRQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34nCHJTxHZ9sLWp1n8GgjxeyL1fJ2sHgTcT1rQ1HgYaTaLa9uQ2a6RYDuWy917gfLZAuVwHtVLdSWa8dW36ngipJ",
  "key1": "PNsXUCi9DsrQDDJNa1xxAYB89xCUmRgc4fVyPmJajVuooJpT546vHTUMF3MyqxcSRsv2ZiaZ7UrZGzT23NcvqPu",
  "key2": "5hronEkLAywcE6BFLUWQw56aQeuSa7uBPQpoi5aYwbTQKFqz82Pvt6FTvXRYbGTBNPsEgD8krfGgfejsr9LSpriT",
  "key3": "3eSuhRwF61C9aPr49UiNkFRymnviZvKxDRm7B3c2DPpbPj8r6mjSYNPcE5qz5F8ey9ac8epTHQDygxGiTzpqJSQK",
  "key4": "2yBgvW5yMdkh9PHJ83doL22YJcMpBuzqoih9FM3kwQc3HR5onUSzXckiJK1uVdsAf6A4J2DoBt65tK51bAam59UB",
  "key5": "2NM8ayeuxAjVyVc78cRthsw7GVLTZJQ68fSHg3tH1pZiuSTzsbpVyHZbTqpZMSA9kRxbcDs7xRrm2n3ZmwFpsmML",
  "key6": "5a2vNHxd7tQHMcgv6Cuj53dJTvsqmw9MihU5UBrT77bgWNwJ2NyfCDUJ1zMQrhxGpJ9x5yRgXatPCiZHjTo5DVrt",
  "key7": "3HwM8ufCFkQ4nMK7MrSZznyNYehkhgpvS7s4eukcUboaBmCQZJ5iDJAaLLs79S4hTKLVpBpygziBVDiFPVjC5bfY",
  "key8": "42uZRPTcmU8AkaGhdKTNMs5pGtia7iM3wD6Ktid2YtfQb1k2ff8cKpj79SV2MLLtS6GJjKm5xY88rMyt1U19gBCP",
  "key9": "kyps2XMnkviWdwqNxGDh43NHtQXourjMXFUySoSGjcDZoT3ueKsy2eo3RbDaXLrbGxbveYrBQqEG7xVZvzGwxAq",
  "key10": "HhY1zgRfr3uPHG2D432kXeyqjb6xABWPyG9ueUseCs2owdkDpdY4xndyThJdrceJXEiPCGEjeCvzWAEUqxd3bVN",
  "key11": "544ULpcLzHMr79PaMBNT3CETrdep7G35WKf2mpP9y3UuWYtVCfYiY8SZbNJSpP3YnjCTxPgoRE3bb6U1RD2euwvK",
  "key12": "2zwJ5FN2Cw7CWeUKG1b3oCdFJJYLnVcAB91wMFbHWyjKFAzwRMuPZNXnVYjnmWC8DkdRbdvafjdzzduakwuisWMf",
  "key13": "5bVzcS4tSPv94xGM22DawUpTeBBSxveFBRBw7HHaVt48azc9hqzY62VNtoCKwZ9Qf4DsUxbRzPNCyQ152hKMwxmp",
  "key14": "3hhYkEFHE9GVxD13EYxqFS9tFcZ2w4znVLTzdHqLPSHS4fXB3zUgJ64dGC4pdCZx9nAWw8GwBYsgkLHSbEwsLhj5",
  "key15": "5moFKJpjdTfchk3zstr4WfDzK1y1kEW7B2QTqQ5LwzUha2BxVyUqjTHgw6XWfLTgB263yAaZxb435eTsTLLSAF2Z",
  "key16": "KA2QSEEwdLFmFM96HxeJNQocP1kmEnZMWhqvZL7EGR2iG65Kfj2hWWTLPBWJVZ1unBKxVVvtmxE5fQ5VJW7mUSf",
  "key17": "3Kev5bUJHJGGa3w2QBVLpFoATWjXoTie8gg8N9n9LmpuM4fptEwLo7vederYECNDp9s9qnuAJmqbmo9z87TXPpYT",
  "key18": "3shi2kCwGqMKSG9PuVifZPN397L46xDmP483CvdxcB6fArs6HKbau9T1pezn3Ud9zVjYSiZg7MCZTroizEP7VaQk",
  "key19": "47RXPTLSSgCAH2TC3cNGLNb3AA8qmfyoDYKbhdKrDPsvPoDnuTHbraMSeiBHeM7YW76nME4qPAix91ju3AGP8QSw",
  "key20": "4AVunqTNDFsLDGfH2gc5p4YT53kdvWroMAfZryxMjrmwZgUBZnWA6fHRDPZ4NxT6mneHh1P3cJMAHekfqeu8sHGz",
  "key21": "3YT4Red66ZobwFDPCDsUPnfMzPRt78LNPnG3MA1TTSJAtTPamPRZzdQFKf7VaQtSkkbnvMpm1qpw7vHjDXhWc12M",
  "key22": "26a8Pknb7KY9K3vT2cXQJwaAT9L7KW9dKQNSt2Sum3V5jPRgYavmy2f9YJFyQitWeLVeFsvvXCPV4vsEEy3bP3og",
  "key23": "DY7wfMo7VpRe8xEGeqhmLDec7Pt6QNtp8txtw89Phbxv4Mizmzg153RVNaEwoxpoWW4JwPboi258WrncjyRtSMw",
  "key24": "625TisgQCVHS77M47JjjgSGLHVJM7Tyck8H2FWzJTctWfVtkwop52Z6CvKxvBi3dFXzhYrp4Gk1itwWKe5anG73z",
  "key25": "i4kF5tavKyJMx72iHMGsdQygcgwbQb4mEmytKJenCxLJxVhsoZdNjjXd2mgfMyWcnNbP6kEVzGbfmeHg5uhDzuh",
  "key26": "3NABaxd8MeEZFCgQVeZgLRiG5FpnyqrGyV4mSzX7QK9NLutv1UZhuWLerYXRvrFMttqtL72RmsGCGy1qDfnmrmjQ",
  "key27": "2zHjTCQkrnampoF2Tdx2M8UCYBqT4ycYpC6LnbUBuojg4akeyBQBSifptaepa5Ktn6NyQ1cAZBp4mkveYCZK9GzN",
  "key28": "2scRZmyfkZJZW8A6ec8vcAuhkKitpNYvDM5b7z5yu5vMaDiCD5ywYRhoZnCLLhxr5X9qiDmLu3EdfsG3qyEiM424",
  "key29": "4rHCsJHDR577oCd41stS3db7Z8fjwAwA95kE22ytCBr5fUzGnnpmbc74YmtdV5QC1aEe7PYnCyH3bPbFqNsuJQyp",
  "key30": "5aQnpjaP8TYxjbQhxZ7pBD4ETTmzLMyWWdfCjhRXv4PtJLpPpVUwovbT9CYBJFiLmYHVs1XPfTTk95mdHu3yWD9U",
  "key31": "2QZNuQdMiGb9E6GNGtRkLYgYQe1gb7STdB3cU996qQKe1AgfASbqa1jU9uH3Jdt3Qd1uLrBSSA96nvqtFEGxX9Sw",
  "key32": "2S89gByTQYghcorxWMxEDWaqySvn4qVXGAzz63udgtEU4u1RF5MYPkWYdCCH6yEWbwUjUqCC1QRnTuwgEhB8mB4f",
  "key33": "3sF5xZEQviUxvCTkH2b6piaL7dHB7ZF3NXZ2TVJxAuaNhAsGW9uqceUL2zAJBG7WUQC3H5B8QxXiuaMc7eNXwV5u",
  "key34": "4VYTPAqPKYk9Aa6HxWa61XPJHdC7s7oHG9orKN24cSRc1sooUWzNbXmwSGrHgVYRncnCz4GAZzoMUFeng6TdkMby",
  "key35": "5RQPk6fd3ErN5uXx9T2J9CFyT34Noo4LYA8S7NWYBbroj4JwFnmiGNjgLizzVvoBSWrQLWfutU9pZWJvizB68M73"
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
