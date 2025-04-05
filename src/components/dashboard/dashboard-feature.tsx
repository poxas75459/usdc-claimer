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
    "2DL36gv5jMUY5h7N27sgs9iBX7o2x36vgT2eNhqZvaKtFTVGUjAGnxC9DRJhpEwBjyvswdAxAyBEbb84BUBDTSLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kw4A1v8uydVDmfpYPnB9AZTpgg9mqmjP1KB1Dp794QqHkBmTLtkWTw6poDEH2ffBSAMhdd3UpkC4MuerxrbrLvh",
  "key1": "bvpkh4cNyKPBkwp3CMaE6QTgDzoqD4vMWL2aP4QrVuKXB23PEuXuL6HzDwbQj9QQKduTp2JPhXxCpgPh9sHYsZv",
  "key2": "2XuG6FxXFvrRekWypuCvNrK8nuuCiFZA6tFm4NaeA4zciyj2RbmMo1CQVM7RmoNTMMVud71HFW8Zkx5kYasTzTUv",
  "key3": "5WShfDmsfwEXDoPgRS57pJnryLtoqS6nAuwZRDPzpDtuneF3Pt2wKsqM7T2wndjWzCxTKFvLcrDu23gqHZi5RgQ4",
  "key4": "qGRMEuQBHCG8HjRR3TPkkEP3xcAYM1xujMpdXEcRqUQSADcn6FCbWnTW6u8VBvCdtHYg8dU9ZoCGyyzCuTwTeVF",
  "key5": "2rQ485aVp5iRhbZtNv1Pvtmb58Q1SnhZNERTxmTJrswEJkxDVp1ASUAPr8MBDCNc7Lg1jxER9homLzk7g4f1ooMb",
  "key6": "FnEUWkLXhD4GDpJuiRTMc77H7JJrfxP2SDJe5tCtBKHuqvrgZnp1uaEPzTs14BP1FbEiTSB2tkVs9AfXk3TknEg",
  "key7": "5AWspXRyNiYaHiTxd5aBJmpKky7qqx74vPRQGZfZtVW6hCg2s2NpD9LP18v1yXKjBKo7ovVyW3F8FZKgaQFH4PCo",
  "key8": "2xCt6wtoQkqtisj3kgCFNy3fYLooMMnhkdWjnxvUfhV7XRgG3VRLrbrUeNgZQpac5gbtRY2q9B8j4S5htiGU68c2",
  "key9": "2N5kyMVoEUMBN1XRKsypB2YtC2VmPbSzzW6S9wPa5eUsAFSmuDK8WQgqAjoKwh4SqyvkdNdbrMduz8L9x1UtdqEN",
  "key10": "2EBtNLLEcuSWJXysVPwyerbArMJ3U981hdUwJPD9tQNq27UWg8Fdq7p4L36WgrtuXCkixeFFFXnCtJ2LekhtvGzB",
  "key11": "BqqV35JS2pDdaJgJ5Zy8d9g5HRVVYYYGYpuyjiVCRFWVE4MfMPgJdH3K1LzzarvGST4ZoBJ9D3vpgh5Jy2qLAdb",
  "key12": "3XBDY9hvTxeT5ZK3GZL5G2gdgohZJNrtPKP2CxyTARUDD8vGg5RNDjci3ufKBkLBxK36Qr6D4RDw1Dyh8Y8izD5X",
  "key13": "ytENKM4ZY9Ja7sJhiybBHPkUdNT2XSHVXPEiQwuANDmp4MzVjuEtyJ8vyphTyFuobdjfEXgbZGJQZrHTb138SQs",
  "key14": "4WtcnT3AGi4zmPkyFqYWs4K7zYQaCFzyXt3dJxco3XyFhAFR5gEv3XwnJ4MguVy1FQUCtra3YKV53PiuRnLBUBBr",
  "key15": "Jy94JH1Abrym9KrRHLSvhFPTskp9LyJmaxJCBifuPYvrGSdehAHzQwx7YahsJT1MK8H3eo5s3MEjWFusxgjRY1P",
  "key16": "39F1EF6XijXy6rQQwSUJ5jA85EkArXmnpkqRor9sGkWYdpfHh3HqAooMpAtNRscmkBPnrZ5CfCZxVEkizZwsyMqJ",
  "key17": "4DENCgDe9QuH5kT4dzaqvRzdR61FppPGN7KXKi18Jk6GrLiraFZ4YYqsGS6VCZn9MFwhmyK9ejGZeUBxLBzpMV87",
  "key18": "5UCVD9haq1jug6HsGFFxamqcrRaSov1NPvn94GbfoVFoPrGXY4a57zCix4Tig5Sx5hCjtYxo76VwJNBj3mYiJ2aF",
  "key19": "5WnPzkWuy7CvqYEU2UwT7Uh8ZYWYqXPxUPokDiMuXnyGUbGKiYD55QviVivoKG6MsvrPSJ2ixh11tw9aRzXhCyz4",
  "key20": "614QeyvoCEZvqAab3N16HrqZBjvdMWDLQEXKdxMAaPp5YmoGbmCxG73pWozd88o6dW59UjtP3fWaE29ByzSSDjKt",
  "key21": "3HP7yKTq73GRXeGUnLYY3owLm5ajEJHpdtqjFnQ1DR5dedisgbhPEGYcCgGDNVVxHnnUaHaMBtuyzgr2iPnxjfjL",
  "key22": "3a5CFKXB4h69L8caVxYQ21w29SdosuKJQeNyQwSh5nDPdzBb9rxnBg5qzasuNoaPZvxxJHSCDnzCRFbWu3iujMjg",
  "key23": "35B2wU21nmq72Cdi4f1qnjF3hFqmvB5JoKoJhC6ceAe8EzgcVPkZFfCwzcSF6FR5fuGoWnD5PbA3MnyTT2tvrktE",
  "key24": "2nhJaoT6vYJEUKar6Y8rgZbDLZtrun2eS1a4dmsALDS7NVWhbhC5VmjfCc8WpWJm8X6EH5pDiSVNbEpVuCSeBBXZ",
  "key25": "4Poz6gQxpjAnXEjFZAK8w5SB77Uko7MzyFYKGVmCvASpJpZABimi6DE6LGApnyY2jz9or8Ta8rP8ziC56ezRs3jk",
  "key26": "3zFCZ1fR3Nawa1RbL57ydr3tPqnvQTEsG5ThfDoqftZZ9jyRw88Jc2wkgAYHRCEsFWRW6t21JsRWYez6WtB2u6cb"
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
