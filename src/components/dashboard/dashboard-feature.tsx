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
    "2YH6Hswo88CjDEcQyx3HzgjcpFBnWw7D99hvWaE9VWxpeNsMCVmsZgzhUfBpps9Cta6N939gNzZ77TGJxTgjiKbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7NeAn6DcMMJd26qB2K9rrMaoMdMSbecL6pSQtrzrP1nJFKGz5MKusq1DvFYSFb2oJMGdjM3SJobyg8j9bZNjw3",
  "key1": "5rwcvKXN11MP3VGVQmAoyZXuHmGR3u1D6GEiPj64QecQqZjRP3cNByCwFNasy5iDocXc6b5QyybJBuW4vX6ErH7x",
  "key2": "5DPxiMCzRaKuxDUNBHL2eQA99yZNPz4kLCX64Amn74LTFudBChYzqyw2i9fqsJUtFDGXqW4Bzp3e2MDjzHFeNzRj",
  "key3": "2bSJjxveHWdNVFpGjVShZsf57uxTEWkGr8qmwr7VgDGJBJMfexjiCuU8GwGouAxux8SCrgpmLUzBF8Hp6v5FSUuu",
  "key4": "4NYYRvp9y2zzqupEFZbWuUHZ5EocqD9tFkuhpyfm26Qvp4QddxnQkFq5ujpSVmV2YbgQbRLEGzvZs5EUUEcNsubN",
  "key5": "3Bko73aX2LaUWu5RnRQ2vtMEbD6v4UBxCDngGTZtrdu66pjNXFWVEu2y6HjXY524KJhNqxzw8NnPEK7rPnZa4jRP",
  "key6": "3Xmf81Daog1qvmSug9tLnjeHJ9aadkDxLRDNzQobTTyd4Re31c7vSY3Sci6a9q8MMDwXMxjPpfrBQQms1yGR9npF",
  "key7": "3B6BrJWVXvQ8Jk2hgebeyFjB5fGzPPS2hMTFQm6ZRGBnGBiVqVDjecFxMqKzkV4UFn72TZVKWL95Lypfc8azVJPx",
  "key8": "3afLpVZ3CFTYiapfvSDYxAbFrVYtEn3nJzX8EXQf9xyXRio3UK1Wxrthz6mRzKqLfzPsBhrAGacKGFubFo1F37N5",
  "key9": "8SW6tfXfswcoeASe33LDw37V7fu7KJb7vXMgsRrPJmPBrUotPE58FSn2Z6K5p5xCddz3K3arjoAGBj1dqCZhnLB",
  "key10": "4DC9QFbcNoqMr964uiXh7dVNqXV2FWgLwHjsagMrgZr1LJKsa8ZTVGBZZvdfnpSnU5HXg6xqjEorsJk7hmYj3cGP",
  "key11": "61AeZ6rMtQWVj2tZ31LiAQ5bHZKx8ci7p2ht8AfwErapPR3yGv1PGLnq3cBUPwUHKqpznNASLgmNaWLxhgqtfT3g",
  "key12": "5eeAroa6A411H1msg58hk93pWRjNc3P3iFx5DouJV6Rv1QfBaZg6dAPK9oWFMmgu5vscnS9d6egVob4iBAnMnBxS",
  "key13": "4B5FsD13T3yuyYBFRVDeyGLZRetxow5X5EoeshioTP423gXg4kyUy4MpEZxzvHzmo26zzsrHq6Xjj46YedRGZ5HJ",
  "key14": "CSk3aLJihFe3xXqvsxcQkdx9ASMsvVqrk1Uhi8vXt9HL9Zn3Q2ZdJEGA6H2f8UmHtxjiNyJgqouNJ6BA5Ryrm8k",
  "key15": "wbevxRsQuoXvGGjGHVu5mtoG9rgTRMPKnpzikMxVuAW9z9EoGRbQJUFgVkbzHCv4d8NzzvPdXSuCtBGPe9x81VJ",
  "key16": "3TgwWqMeyw8ycbFnixWqUtm2n9Ges3n8vVYhjjUVTAEvXqcPdxpCSEgu2Tdyv6axPjShJ2reu3VfbHgYjHnUyD8x",
  "key17": "2mnZJKq5SSDoR3bod4kMQsmfQEJuq3naZvY2SN5o41YhPFkXckiU8AKBb6RwoV7VwgC2Le2WAzqbyuhVETKWwDVh",
  "key18": "gmYiRfTVou3WdM33jrYXYp3znfn7oHQx1QyMLLD8GuV6SrDM4howHjzdLLfqem7r477dKuTWoyZD67sNvvR8ZPU",
  "key19": "5uwKFX6ZeSPdMUy5Pedfr9qCZvgd9Ci7owRCEZ6NbnnNJEny6jDfuV6p3Gm5EVtDtzJhknEcwMk2jQ8wH6V4GnAs",
  "key20": "5umBP7zvktVMBWhqmkBmfGaKt2uWtAUqawyNFMudDHTjrTDUTDBCLmwbeVg9eLdvhbFbw9Qj9Y8CWzDyo4UJiupL",
  "key21": "2bGashNPSKzaKqeM8VYM9qr72d1SUx6wEpmY2cAJmSB2xgrrBJRhN2BeZWJpY5i4w9HmnYxkmxdF4G4UxQiEWaF6",
  "key22": "277xq1soYHmXXEngrWbeMagCukKGeioKsYH32XehMU57x3z4oaqFeU6f8PDst9E69h4YEEfqwM8BzktE1M5W7DC2",
  "key23": "3DPL4nhXo7fVuP8zmJvXxP3vPTstMiCnS5kBRE5meQSxLtuHw9JB8WRuXVsZ3wVA3FuX4fjvkaLnCk3wVp8m3Da9",
  "key24": "YH4c1HN2TgpYbcxDcdQryDcJQFmK5sK4VPomhrZAgDTTYivPNgoKKtcUXjZ2kQ77aGa5DzqKPMgt5hZwspZhEQQ",
  "key25": "7U7chBzcEyASwoRweBQW6WirhmoCamfdzpReg4zG7pDA8LQyiZUjQdq25BHCauuzAaByJhn5U3VZmZevC8oABWp",
  "key26": "64V8CiqQCcyxPeYuw9JtQYpzuqSqTxxc8bPNzSKGgu8oHq81LggYAJhqp5QHHFoWENEAXo4aXbSQgMcvgR2epHWi",
  "key27": "5ptKx9pAhS1SCsQU61GZtP854Mi4j3Wym9Mcw5QiYTdA1oKcmQvep81VTWUoY5ZdvtCCgccUVzBe2s31KdQRxTXF",
  "key28": "4SwufEZxiVwr2acPUz7t2n1KUnrzRQUjbdgScr8dnsz6G94irZC8FBZ7NhP2euVmDNGxMEi8WUFrFcwuUsqxMKWb",
  "key29": "4tys9fkz2ThWotEBtaNoppXfgDoKbg7hj99tPgMiT4nhFqf4hMtbauWvrTtMPPfapucu3yJL6X3gSXEz8KXkf9M1",
  "key30": "2hSMQ2GNwKPsgxoFfN4oaezo2QTY9swTg4aog6udzPcJgmv4wYPVvkMvtXPMui1zLkmc6ybgGZx91dVoY5ZxbgCH",
  "key31": "3oepm4Uh6ju9XNG4yB1pEmyfg7pzwkyxUS9ji4c7jwLKP1Psyv8NqGKk5WPsJx8Gp8cHrWmGgDMQLw1hbo63HxyU",
  "key32": "4TUKaauKRXCD5wyndVSSuKq7wy8f6gyg5rDqbv6UMaRuCTSSRL56j2rVivBjASWronM6ukDFEWtjibsYnpmMHRL9",
  "key33": "nWUU69s4pTT23Gg9WGQFXhbuFRPKWEf4RbP1f7NGtnyuoXBFrm44bmFyNQLQqqsSuD1pdAVnWfZiV3wWS3FA79H",
  "key34": "yxZrchJSUj86EtDWKTmdDaSyYQSqNVLs2ydfnr1QT2meqTnVQX3vFKKyv49uBbV9NbLf2pWn6UWH7R4tEwJV5xt"
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
