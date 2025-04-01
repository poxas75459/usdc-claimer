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
    "4g9mKr3dH4GoHFZAUxv1FCNCAu1gYYqLT9sgU7Zp1HmxCMjVM6PCCA1fLYKoZHDPhbCd4a1yKxwKE6kekCrEHsHc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o2iTqT5F4k6FikjyJ2zBmBFEdvb82P6ead3DfhN1hoBVibaXpXUjA3sGoNEkzmbWi7xAErv8KAeRDKde8n1eDEn",
  "key1": "4aGY9hLbgZCQzrcVPyZK3qzKYyC8oVpLjp1ZPHc9R4aLW8vibboLD7tSeFfqGYPiBDY5dKzjVAcho1zfa8iUSUfy",
  "key2": "ANBKmXcgGfE8U3KrtX8qMQgjTNVyHAMU1Q4BEBB4PRrEugFmJ7WCJyEMra2CbCE7qdg7gzEGy9qMJ5puiaKJtDZ",
  "key3": "2zYfgABHkR7Yyzbc29azQ2aMSGLN6ey1eodHnXcx7iV5kKK8Zy6Rfe1zVGXxZhCfUGUioKx8hUasUpRpyWFoCvAn",
  "key4": "akDWK7Yhy5RFzuaXWtZopkSptj7sP6LQ3KnavQuxyHaw5Td3pZ86ysKtMTwoudR6KUuH4vGDYBPy411DLddNVcK",
  "key5": "42HZRBj6X9on9sLMhaeV8CisQEXSzPpftZd8vdHaquqV9Qc6iYMiqKsSqwz2AVgaEthcE1rPvjiBHzEXfnFZwBDG",
  "key6": "4rttQmpL4sfEKK4ij7JuBoHHHu3qQJXvsiRXxiC5U4B8sv4VihRVeDAxai6VqAr5GqqhVVRsbeZkt6JLCixShpdJ",
  "key7": "4ieAnW7R1AUX7BXRimxZ8XLZA72T3d8VAwJEgzCrYn1UYNpHpHx9pnxeL3vFaeuBHGUwA1gXfJYCDFvvvYNJw7vQ",
  "key8": "2QgHiX9e4Xrgvjtpy65UzKPPh8M78xdPyedDCvcnMruasTPrj7uPyBpxYNazDw4SvHwxRy9nQqw7r8JyANP86Hec",
  "key9": "3yPqd6SdBZS2k5j1gN4fZPTSjsj2TRCycMfqEZ6Bs61gKuGcS7UJMo5FnRPhmZDJuY9LLafGFynVNxA7jvdHJd79",
  "key10": "3Hwysxg8X3NLZgHvFVxDo9T7oNMb6k6CF54aNm41xeFSX9ocLNgXYJ1ca5NqnLM5FonJ8grZRFGZPjxnUyBP3JYa",
  "key11": "GPDQKWq51kAQnbSqJL7USaFjSVCtPD64heHuFNBxYNkSaj5ctH5mhVPdj22TBTRZBYjpJqrVkGD7N42RpJAJ7e1",
  "key12": "5tjQ2jQMV7fYKfozjEjmFSyoqMgAMEFYeVckYD6U34KJJupRyrTif8dAppoigLAeYTGhekAx32LEFhPpDemtBJHe",
  "key13": "5Xztrc46Hpm1zHSUWfDxUqxYDfpWeSxCDvZwmjYZSbWUfRQ1FZeozGcZsJSZFHjtweRCsENDg9Ao7JBmLbXdRJkQ",
  "key14": "3vXPdwy3wreRWSiw8CzgAP8YhwfnNTnpCbM6EaAzPCErjiNP79ogF6MPFHQJ1k65Gg3Co4BALVZfQuDA8qL7Ep5R",
  "key15": "4teFFGiwpDRdz5Pbure3ZoJ31Foc2NLZSicDLpffMYE5Jd9uaAzz4mTjDKgRKXcZdBe565fp9NYrTDLTHmCbXuUX",
  "key16": "2KkxpauaEv72KUSMPTqEagzCj4tEQrvDjbiRMCsWGJDifn3395bXW8kcbCGCDiL4en2cr1bT2VDERoFwKudALZcG",
  "key17": "3VPx3N4CREsEsZsgRJGRRQZ8PBxToDGsY3e3ANZcmtKNn3yL7DZwSCFCC3Ltja3bEKrre9gpFU231u434bXk8hD4",
  "key18": "tKePs1ehbuKfR9xXviPpTZ1TqQu82z3TLSAXCCyaCrvHayHFrSW6TwN8adhMAtADhM7e7oKaW8XEM9muLorZWae",
  "key19": "5QebuwqVfbXNS9LnDunvBBw29yQsMc9qXiKL9DoiEPW8sTZi6aYgzCc2GYYRoF2PYHgjqHb8QDAzsM1gkdA9ZWcZ",
  "key20": "3fFMS9kcHJgjA7C8qLHffbRiuCwLnFQGiGNaPUfdWgEVyWwaXNz1pDBw4SvBiY8jFbY1BntdYjziSDPyeNpYYAXR",
  "key21": "5dNFgERps64knz4t6iPvtvMQAw4p9yYwoF7NV6CJZwZf8LtsZR41eXQnhFYeV6woEtRcTRRRuAwnDnYppcKnHFmz",
  "key22": "3eCRgN2mb4q2xzsfzVgAXzwiwB2tXKix5UPuxc8ZpWTagXPPVzR92kv1LJ6iSro8n95mbDZPtWLa2FjpXNMNdVVw",
  "key23": "5hU2DfJC2CA9H6BjSCRSPMebvZAGDu5Q3Fr1LurXp94Q1JskUQibm8ufAokprYfQ1rQBauHD2CrnbXCYGV2pmqik",
  "key24": "2wsY4h13Vn1VHPuHrS2f8o4RT7UWcWDqeYFp6HwrQDERCUjwb2uBbcyrJxDvWW1KHo1iR2UqNtibFN7Nxb1MeiGJ",
  "key25": "5DN7LnGBxRxS9x7PAkemYvQUBD2vDFofAbPJ7StdQ2rXRoHHJMANf993hbXwv33dCHvZBTeCJQHwm3d3fEYiNPEP",
  "key26": "2ktmrG3gXxMY7cL3nss3iUSBgQNdYwVtuYJ3mckSYPb11nxXmcMkvDtmsEBgediuQ8UBdmMQ6gT2WCWaryyiH5zh",
  "key27": "2XsssUb5xj4osWVjcyQ9uYRJcjKmdvWFzPKn56e8yXaBLKYNnMy3PGZA9sjWbdtevp6KZjHJcADMAjBJksV2FeTK",
  "key28": "3TmSg8qrXMdT5j348jTww9BEtRZqy9Z4Q6Uya29XKSeftRp538KC4ncEorAxMWjFohXLDt8TyVFYfowM2Drap671",
  "key29": "3NeT4AeoUybaBdzKJFX8XDE7jZFDaURkb9N5V8tS8KhzNsqY4RaN24nTgMwncyL5D44NLraynTTXnFwhvj9GCBRR",
  "key30": "2qbdao82kP3bJVoFmVYETPoRMbcszcBWYFzqWQb3PMFqGhzC6Sy9bPyJYATv3KZRgcqa2Dp6xuDffacE9w9W2Mw1",
  "key31": "3HDfjo72uGnMbTGjsHG23qB3MzwRCdh1TUu5x1ZLBj4rpPhGnXR3pDaH3cpSPNhWURuBwkaYUFdQd5zYjtSxdE2J",
  "key32": "3iiH5cCTj7mHtxJLdaWvgFn1uYw64deMKS9syHJHKGqfYeqyfBrmDFjh3CfFUdSDzKoXyKRoohWVQYX4AYW4kpdC",
  "key33": "MMySt82wDkvXdwnWrEohxQv7TiHrurUAij5SneDNZo6sv3TZGhEsY3EEsrbujmn15Q6pHShtXenvo4DZAJYCeNm",
  "key34": "5Bxgfuc9GcddFbAwf6jXoGH5AviFyXt2mW1pMAz2qQoT1C8bBXzKfcewQsxVc5PZkmf3La3tjbP1NBdLsZFfccCF",
  "key35": "2kFDMWXfF6TLkNfwuedCwqu1RjpWSxwjHJbkUjDzqM8vpJASut3zJSUUJecZxybmD8z3EAFyDESLgY4Hf2ZyjpA4",
  "key36": "5V6o9wY4t6fshV4w8RQRVph51LxiixnyErtB1QSJTG11xUUw2q6WcSPv5ofX8yJKTY8SuyP8F3oEHmr9mXgBGpes",
  "key37": "5bnEoVRdRuWXRmBaECLH4CrYYFB1oYBVaRoSoNZtD9fyfDd2SwFu3DCYFcobG6TKziv83HNNYarMEKBPq2Ntwk8Y",
  "key38": "2NtZ8maDBx3RhX6dgz72ehVfFpWJJU9udWkqSDknmodGy7EB4rQvDShEJEUXzobUc8fNfyMUy4RtQDuwVeRqjueH",
  "key39": "3AM5w9CEgAPHA1p1cZaorfwHpwHBQ9UR1r46K8EG3xMfZyPHUbVciz5F8RRGJAye1mYEvSzegiuMt3VQeEJysrDi",
  "key40": "67EvVNaLkAD9pkHh4jmWkzbbx4dnK61mGEosckaPnobwEpVqnuZi7Wjipn1J6rjktUF9s2YNsPYTBd2EYpenpJ1u",
  "key41": "NcgPbGRioUL6wfoHxPZaMhvfNZwaFFwtdo1CyQp9nVHrDNYXtXg1gGoLQecb2isF9imauHbGd9Rz4MQkf5JFNzM",
  "key42": "5dGipZoL4kRyJcSdcigM7deH3p595dBVrnhSehRcHTuVMgwGUUfrpUrSXdwRNduDnMRAUnjMUbWiCShxrpJ4KzMm",
  "key43": "2biCqozvSEXikrJKexhETNTxbY4WaQGfHdVVXwvDZmbPDa6X5esL928Gxe2o1ZwjjonRmsrYNpsP2YybtCKGjzVh",
  "key44": "3mzfyXjWt8zdfndbEVme17PP4yhLCGabmZZKFVKCT2C3GmZymMLG8UYFBbNQX7YtCi6oSfdm29Y3FdizvfeWnvfx",
  "key45": "5uqKv4WJVxHVtpsEYXEEZ7hzutem8Q9inXERYHcn9KRCnxDSo8kAwgZWZ2r7HDJjK8zYqxsPRtZ2oQM5CiY4Wh61",
  "key46": "A8TTrfe4T7mkL4nwMUrU6wAmhpTPVF7VNVuHMs2tzHvuKrXTCwWbzivXAgPsF39Bk5rn4WvMtZTmGYsMvd8mXx3",
  "key47": "3fsURUKibFKncWgNZbhp8uZ2E7Hz4QtPnwj7L9DTaonq9UfvRHssddrvvdosvhmCrtsufN3cnaJgU9k46DiM189H"
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
