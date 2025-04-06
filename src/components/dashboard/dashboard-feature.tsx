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
    "B5Jv2T8BCqgSuZcXAq6NoZaF39gKy6P7BLgBQDnXPmC8S3o1CnTDrKbTy5hGB16M2RTm2MzDWhDSfMBxdin3sF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrEVGJDxh3bs6pXdorjD9sJHoZ9bvWMivB5z4PzbFkf6M4Pv2DWYpUtp8juNAKqVPLLW9AEBm9wz16Ec9dA4Y5j",
  "key1": "2rQTRmVFuVhbAGe8CJypg3h4qco6BsDpwiY6N1gh6WpfbeaiDt1fP1FAAksvqNZvfhCLMBPVRLbHcv2mrdv3TiWb",
  "key2": "4CSPHbTACeM9e6Q4kZuQuKcaFTEYp5XdoewdpKoCoAUvk9Qq1xy32tBXvmqvx9QSo3XMvmw2NpkCLJ2j8UePWGRm",
  "key3": "65SZQomDihqwphAvU3QmQJ461Xv5o5wQZAxJ6irTM6qb7QKULTrHwKdRCphZz9RHQZnVucMeQ6JMMJrJqyMPtAYM",
  "key4": "2cm4jz7wWyj91G5QTx6shqk7a7rTK97j8qrAeaGJ3YoRVANxuo5fuv6RJMLAgr6pX1vavHE7jGPB9rZurw3LttFx",
  "key5": "2FCijoRCQUeY7Czz3F9K4VgjPxy8i5sTZ9Dashwb8vTjRKtSPg6vWduFZrefPMbEBXW39KoUAeX42HC8Ud32yzQ8",
  "key6": "KgTXNJpYZN2vdonp7mwmoDdSqovQVewKgFhF3gymv8MCVEb5FXrfLzddc5SH6NXHMSsUN7WsGvhw1njM1C4ztbZ",
  "key7": "5vAK52zvnY8XdqBzzTRxpiCDGNgASXQ9E1cjeWfwcfdJELS3Pa46WRUqaYSnHRn7kS4FdpjsJ3fwTL14vDvA4ZEb",
  "key8": "5zvgjo2AnrcXirn9yLVtMs646gqWX8VrdhHTUmjFc4eYcEeeZcGQN1sVqdpemo42jpxP8j2M89t38SdSL3phMnRz",
  "key9": "2VZMPjWEgYmT6zEx6qHvmGt4zNkiN9yxYrdc78Ue1yD4MKQygXP2w8Ny2zz3wPSVoDjjq933vfJby16LLTh5iDFU",
  "key10": "4VtMoxooqnWe6WU2zQhdQR9auk9TSVLiHojkM2ABhsAxMu5zu4sHdGwmbjASzg7tjNAeeEUfLP6gUiDYa6WjU2Er",
  "key11": "5iLxtkBjs6m66x6F11ZLh1wztYd4SXH1CUX8PTfWXBbWsiEibbLKsU8BnRZwpa2tRFQLv5KHevWeA8EktH1h6dvo",
  "key12": "427sXoZdWpujD8TW2chHnfm5A1LoQSBf7neSD4xPcsNgnyG2ELc7t9hPsov7Pcs1rAWDjsHw6EQyTwbGG8vB3syq",
  "key13": "4DZLksDeibFfAN6CvTwH6b1JEf47ia9rtewXLhHinUGN3RqT4cp3B8TBt6BbdegewMz5W9Pq5asEQqT3KJkJREDP",
  "key14": "2M6MYmcSzu5tuWFrEdPLtTS52KFy7U4dUnitf3APwXXyzzVLXeybrUkp7nMrkx5NRW2uru4gySkpvD9W1AWBxsfS",
  "key15": "5wj67xkdfknTjs3vkbYvSDFnuWN4PS9RFBPBk2dhsa6UR34eXR1VDNArA1MaB2RAz1fbne7i4K5umxaeMG7n4rvf",
  "key16": "49kcxt2ErGeAyucKYv1DkHbNRcFCGXn2BNCMra5ZbUC1Y8j6csrZHm1RPur1CNrmFGs42ERDtnxG2Z5zioVcpkCt",
  "key17": "2Hu4Y3D896pbNfdF5Ad278xkBch7r8U8z65CwRnv6byCf6v1g85gvqfFWLq6M6Yq11iJhiW1AZ6gKBc23WFMbgTV",
  "key18": "ocdB33CYm3axX1FCDRqA6xVndPDpPMzAdxGA42JdD9Gtn8dMLrXBUyq2Edx1yrPbmyGQ2pVo5JRu8bvXVr9ShLn",
  "key19": "324UKnfGeJ2xDggFCrEroVzbZifbCXbPErU5nEZUSWe2VhQWoE9bkxP9BTCCYXMW4DGuWtni85LcKwXZfX9EMgJL",
  "key20": "21HgcpbjwzRmbiekLEzh1dcMhGRSeirrNBhYMHAMPZHVrPQJ11EMFELeKL78PqEzrjfPCdGK9wQTAcJEAGbbsYVa",
  "key21": "5gocFtxdW5rKFKg4LXzSxws66CKduPBLMkVntVaGyEegci56VNh6DTJADWf9pfg9Y1zbM3Pt7u83e64H1ZMpoR4Y",
  "key22": "3rXZgStee4mQpLpSb7NvNYvDMsaafoMrFMTaUhZvnw95ZDyvckV157qH9K4tSUtkBMkanzhLnEdN8tZjNanoTzwV",
  "key23": "etVZgPHhzU5Z61jGiByzGX9i9zP1BAv4iKDE4LzP9wd2mDiDvofTeZ7rFNGV1vqxCw2iQGTYbMUwFJwEoAaogUo",
  "key24": "Ux85M4BBAyHAP5p141gRFZcCe6uttsWc63qMLuuQdNbTiou8RBQey5tXi4DYv3VE1thuurU4AKmPtGWhzFfaGrS",
  "key25": "4kLZEnusDudx2Ue5T1jB5btoU8KAA6wcNGK4jHDrYePxr9qb4MCSusQa5AZWy9NkyCxtn1Fj8sk3rsDF3bG2bYhL",
  "key26": "3aicZtddXsGcHS2xWiuZumW5wDfdvKHLrHtUKtSifyi8TMfAtv8tvXTLhYZFsJg9jNjTiSEFB6ywoQE3iaSxswjc",
  "key27": "4q3axp7PfJEkKNpHAJtM3jVbfxVwiJLqB3fL6XkUhF8HBCiY8LjTUNEBJtYTmG9ZVNvmxTumR51pJVBEXujfHtXJ"
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
