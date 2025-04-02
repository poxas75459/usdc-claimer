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
    "2DwvsvEdpbcFfvfigqz4zq9gULvKrRMgp2mcRCZ1jp5BdLwqpyRZqfJxddFPfmfuhgrS8XDNXjZNqkdMTWoH3hYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nhu26AL6qU2n63LZS7if1QZZmtFGCNzCJ1v2ACyMu3mSG8pRDaLwNc7kfEkx6WAkrbty6HRp6UosAVDSC2cUHkt",
  "key1": "4jYT1tp3NN1hKR4NUbEffrDVh1wxPiHHjvZ7TdSD2TXKjnhbURP8XHssWYvRuqiFhkEatea2kdphfe9UFuTUW8t4",
  "key2": "3uQRk8567ndaC1kZ4UbYxDkvS5GUR7F3mrpi5nfr9YGE1cXQjqaWWKXtULUb8DnnP6S9hpWiad1QzYKvDLLDFWNL",
  "key3": "e6BA7VKYn5cX84GbQLMwP2zWHSEzB6hG2qhV2ojQGrRAaHZ7MSxkS7KWyAjPuhdmYM35TLjRBwBiFvyuDMn9GT2",
  "key4": "2GJzW8piRtyjmvMWZt5fcoQrRfWdzfTAjkyxk6LxJyntqdwvVUdRd8HGDcBtgmfCmLRoqGhq3eFGPPyFueUJFBk3",
  "key5": "3PyjppSgMpng5d1sSDkfGYkjzy8RzJYfatZ3iu2KVLy35P8B86Vq8bJhw7QU4mTwT6TfX1bPphATNjgwsH1K2XfK",
  "key6": "546ZemNoW64LQbuRFxrXLzMEmZeZwoXjibCwqJfnPxFcvDqQJEQ2TE5ZWVF3i8c8BCbDzMUBZboLD2cs7vRNFvVo",
  "key7": "5u9eQecXLDVfwCScvYWvLMMNcqsRHV53Q7y9bM6FaoBjshoMptrPRY4mjWMnJk3bqd3hS936iTB34SKs2Ajb5JdY",
  "key8": "5B2ef5PU7QXyfbnR4uKw4wHqJEMHm6TpCAhL8QVU4hNX611ej6LPjWyFBPG8Gi5vPLgKMCYfJEZRpYQLFzg7RovX",
  "key9": "3u1DDkZy9JZK675e2EQTJcYDpAUhn4rXmp1NarsvSRoWyD5zb6xEUUqMCgm9821X6QkzExBBsgA5Vhx7wF3A2peR",
  "key10": "PD6w3hoafEp5mQEGgWJrD6FpDggtw4Y2dEDvsDLfb2LD2CGmRqQFVH22qpB9LUpfnNzACahuMncjCP1W4o27szj",
  "key11": "3F6o6eDL6TGca3CgpjNPhfFqWuKVTKu2Vvjhv4PHKQsFZKiJtKhBgcx1eGzW3jnHEA52n1ZKzFQNpFUegmyAZtYY",
  "key12": "4PLZFZpCAZcgpYX8tbHSDm4AtEmm4bJYstqzuHC2QxRXaC6dnhCZMNXRtPU3bftNVibv5MCwPxfkAczD4CSE3McL",
  "key13": "2tSWDiJoxbCoggNAwHfFQ3Z3gEeAdAhdhxHWpEhDeSaFPJmfZiaMrVX3RynzVbMVtbgcdSZikb9P4WvdakUswPoC",
  "key14": "3do6PjXVEGvxnxRozsQX4SvwXiTMSydrYAZ8pnZChTGxNRJP9dKYLkusKA2RRigPEduxTUfA2UC8wotE9jQazCx1",
  "key15": "3MhE6zbuLF14CDMNr1KwSrXmmXmoHDdiTRRf6gTjQrGRyHbdKva4GGy3rs9eZzmJ8y4GxQrPPaKC24hjPv8uEo5B",
  "key16": "41nr9bF5CjoetoPykgChx8MbjcNtrKxmFjQn8XcvDEjXtgzj8HWVwb6cFPBmyDgFQZkMBAiSrr2KVhv9tuMsJAuB",
  "key17": "4xuD1c9yAr4ADAP1jPeyA4kNNSk8afxTrSiTVLavuPh4tbqoL7w6FEyDXSW98ga7yfcES1h3CrtUzAi1MGPxX8h",
  "key18": "aW51mNCkebogmZUWDaZQ4z8bxkkNPcMauufsRYK4FUKrr2eDAJW5F4aZibGTn6HncGjBXhQeBbgYBCFC1yo9FFa",
  "key19": "3Se3Mu1rUDzhAUUaPAJWr6uvjyXbAFKqDGFuWtFnSzyGg9nKz5JHMBX17mFg22xuiA4jsGXLWPWgvEwuNKewPrj4",
  "key20": "3kymUtxo8Ubsu7hqYMruKAKE8NsZLXgSkcSC3hPjJK5Xrcj7C7a79NrKP68yvKn7H4QgqJh2KB5cD1qdvAxNehn6",
  "key21": "33K7SJYkdJh1F3sxEapDw6fKXufzpFYSknYMxH3QJEqYmYtwNZACfkmC1R6yeuYDyptkz2ksEsBzJLAGFXEHVps6",
  "key22": "5Zogsg7rmZbww3mS2uptvaTnKZWqWDTifQKRTjx5swZPPRExNZERPZQzTD3dwiBPJGtqYxFg1rdz3TuHK6DMjoCS",
  "key23": "5B5k26mW2b7BZdmyNc5PbMVNpF91Ge38SNApFcxhyU6u5tmiEgSuRPd4acu36HeXXR2HCwCe9ZpLvFZvF2sU9Lry",
  "key24": "2wGr4zrcCvLK8JcNx2EC1kTCtCwowe6Aknddpco583fu8Ezq8eHG63tt9Sdg1omEaXdqAQo3MBXUM9mw999ERRMV",
  "key25": "2SD3i8RNYfwxjrBnhxoYGFAMurETLwqxCST54f33GjMgLDQsPAcikFnCMWMfhDgf57kT53wrPMsafihAEhgtPN7Y",
  "key26": "FNBig1hosYn6aQxy7fBCd6Hr4d7fcX6rCvVZSf9C8jAkUvWo9H7mpHpGd9FUMRtrK5sNdi4ehRxq6Huqq8p7S4x"
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
