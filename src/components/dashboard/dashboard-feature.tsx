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
    "5j8g3ZrN7EZTtCd3FhHdnmBtqa8dvBAeXwBDBK2f1cYMLGosoKR4aTR4U1ohiUadiRHhRc2CGGQ4raqvd5ocR7ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KMW3ukw8qz39CeYWBoQEgfEtKjD2BYFAhhf8SG6T9GQuHV6YxMLGxNZCMVhdqfYBuqfKyttS6gPTZvfM2RV6aCA",
  "key1": "5DaYa7kuShh8G4tRrZRS5NPLmfhjVCVcPu9Wtctc61Wkuzndmi49MhfeB3Pz79tj545GxTzYR5iwzxL75cy45Z21",
  "key2": "Pfj9cNGcN4RTTZYymxGxoz9ufin9gmdZG6NZq6uH4t3zeVmLjCuz7jW7jEYhyFuxkLESvQDWmyMVsQnhaHhT3De",
  "key3": "X92F3ohJSiPZtxUSPGaytLdJ9aHpGMTwxNTgR5wxH1synEh5RzhUiPZkPK7PijVDuVYMYiPFT3nQAJeDaEYbQgZ",
  "key4": "62feV47XVJy21Yn6YxjZSEDaA9ZQYqTFkeKbJuJJiakb4MQwXkbzHZoouwiuwi9jfLZZ659r7coN6fBzqsZ5if66",
  "key5": "UWNVLfvEh6n42o6D4Uv61zwuk8VY4qeFCEq8RYWw14Tjvt6TGGFFYYtHAgFHakHF5Sq8W1VtbtbbUDqczWJa9kG",
  "key6": "4wJWLRFfyuuDgd4mv39BGSZpRDsa5YdWR2xo133YqsEiD8z83JhxcXLiia9HW8S3JYbTCDtf9xfTQ3tqFqX7B5tK",
  "key7": "61W8YXBZ5sSCw6fLj6xGLqbn7hqs2hz4g8zYFrZo6PGCimVrzMCaTBMZxM9P7nE5oetUsG3Br3owHQJmVEBPqFfq",
  "key8": "4562BYqbqkEdzu1DHWWjj6Y5ytt6eDQRGphaGJ1d6Dx27vqFB6nW7p2XzUbeJnktJLKx7HR2JDVH8m6hyYnSos5F",
  "key9": "yf1tvamFzc5PhKvuqMk44vqFf5Ya72yHnWNN7rrHwDxabvYkm8FHryTitqtp23ePmvxWM7mEbzzxBLs1w6TAMTe",
  "key10": "3ZagKCdJ3Q4uX62isVK74ovMiZPMP6wizfUu7JfNP2763kdp7qtk2yC7HzL5MDSsZrdJv2Rzmz8BeY18qWdyGu7E",
  "key11": "5FwwbFGMDWgxkZfsd9kschnBAziJBieKVCh2nWfq1s1BEuhJaddnSmrYUQCkc7m1vMcCaVhB6pC4UhoFPpBMFhbb",
  "key12": "yEw2P64XUkevDy64LtFg9YLXLXwdMkW9dPuKRveAShDZTkjGGfnsR8dyaPZW8AUE7hiS6vWNhjAqyfTGKMa7bp9",
  "key13": "4wHcE3Wef3idMbZUFcSP4zhJCBac2cxSsBkDtf2qyw98mMcoSUaM5X2ivzA4YcWeJ4Kz4zk8cUmRmmkc49mKEwM7",
  "key14": "4jRS86KZZTMxcRM21V52fG8NiMBdGC8ganTks7ab2CZFg3c9FcnE4jiTcfkqDo4BsSMkf1r8GboiR9fqdSwCkF85",
  "key15": "2JxHydQT2d1wn6NNhKX1vpRn6WfHfuFnDn7HW4Kw7b42uHywtXD1zmrASy55GdZW5bPgGp1fkbGPH6hLqDpiqDKj",
  "key16": "54dB5epCuWuaABk44kDvqaYTDTpW7eKpE3EXcp23mXGzbX3ADzkx4XcFyG5Y1ZQif5o63yQpcdvYpWeMXNfCFdBS",
  "key17": "3BQFwif8DwGoyxVmTpPCSLfq29Hw2oxytnUPRnchALD7jG76TJ9iUi1obaTVEyEnPEbPo5anjyphEVU6suWpBh2w",
  "key18": "4VtT2kPHWhBst8T3xiSky5MnTq7Q25978bUhc8Kd9ie9o8RJkoZxyj4hSMP2djAQJSeMKJeaV27QVNyBMDPwK16t",
  "key19": "37BKMSsYD4YpvW3PyohviRWUUSziwWztHW2FBCBVjm9Rb1QXZ9XznLDrH7FJXGAUBLpzMfJW7QEJfvezQdAVH4XR",
  "key20": "5wdSuzz442zKGnj2iSfmPJPn1orGX1vjYJHRf6CfgK5W95cAmLJAWMNqaU8E1Wb3wXv6M4hDGAMWJaF3SqXHWxoS",
  "key21": "5tb1Q7KVMk1WF2dtgksnno9dSXmhJU6aJwdzsQvPJ4cR2SpYYptXydPV9jGEtziAW8mTZz5YMwkGsZPpzd1FLAV6",
  "key22": "gBRAvfY6oyhgbi87g8hLDvqoyFagsPKSpoCUNL3ASaYgUqH6R8jjjnCApTs1wFT6HNyC9UhV2PtAHzkGeD4Gusy",
  "key23": "2KxPqy6EGH93wWFRDUroDUzfAhyxbYUMcdaHuYRqLYi1MbJkfujfYcMG9onX3jYFNV7VEQfJduqsGd1CfJxmopW6",
  "key24": "259nUKDx8BenvXdirKfT2wzwCvH8zgmfycTDEs93CqvQ5iGeg8a6qAGS4mvshYStbvgQamztygyrVqaEUPXUEart",
  "key25": "5cZwJZJVbbf25HQasR6rVdkrrQPRGYCisAkGGcY2bpyZ9rCV3iyjb4SZbP67S3oDo2bFcy4arU3R1oJUt6Ybe2hJ",
  "key26": "41BjdZ3tgdW7dvEHL8Jd14SUaQiCqKNvj7wicFeRGYxf3z6h27kdJQ58DqJTERDCB4ZcEda8dURszwyZ4A7Qv3sB"
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
