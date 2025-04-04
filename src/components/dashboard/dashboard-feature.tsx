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
    "8SXjAvA3CRmY7V4T4CH4Up6J6HF6nuHs3NDGACGpEp2zB2SvRSsheZEJRhW1yNg91CJUDFZHXH4MoHCuH3oKAj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cGX2A5vq2ujMhEdvZfRANAijMKsusM6UU8JnQiKLMu2RtkixhvhF73dWsdD1ptgTWVSKmvkYpGU2xYZXo2N4izR",
  "key1": "pXvKisR42hkLiTWyPD8DGho5rz2PSwWnztRN8zq8cryaGJ5AqtrBH5CYhwGVNwUpLDy51VqrycaxYYPenY9zcdS",
  "key2": "5qZy4KqtHqQ27U781xFSyv6y9dFCsKKQ7fMQTWa2ZYvdHbWvbmETqaQmaUsuYCYsxpFTCS7fyraj3Y1UaB34dV1V",
  "key3": "3TSDjCSuXRFDD5p1oFLm6FmexeZSPnLQL4mxxn9pSAh38LP4JwXRPhAEnFAjQ9dsrbGgDKiKoBR8RY6jAsXSxGGr",
  "key4": "39XqR7dQj98AEdTUJA6EgtC4BX9gsNJT8onfFcdDUXSUw2ZLkmFWKPH6h9KcJjfZ1d9HvxhqKMCP2AvawY17JeGg",
  "key5": "5dB54EK42xgB4doetR3RNUL2qgUUJkUz6ijBNAPMZZSCXp6xvZkVY7Bfzmf3aZDx7mv6ty4d1m85sksrbmVmrmy6",
  "key6": "4hC1jS8xzGsJS2ej4QjWxyaxRFEW5dfBcsvDBmVqE4MMKroUKsBmqfxtyQY2XVdoKc2mL5fReM3MyGbTbEufGceV",
  "key7": "6134MyhJaijq9HHubM8L9ypKXeBhFPzHiVWmuCEJEvNtMHLSqJXEigN3T2DtkpjVEAMBti9WpFjHmiAyLxwc9CgY",
  "key8": "qYUKg18rfCgULkprPDk728FzmLS4i6hhtVcKf6jmFVUBC92uc9CSMmJTTULij2w7RwTeRPPUCTVHwH2nMFMYZQ9",
  "key9": "n2prijCs1GGQswj4t4J7BS1NYD8NEspXLZn9pUStBMNFeiyUnYTASrUUhjyPWSiFoS4uZQW3ZS12gDVWgt3vR9S",
  "key10": "4G7JudxznzKKfKD3Zd6SUwUb16QZemy74tKnueWfnamECWrmDpn742NGkJvSQx9dYBcBGf4hPGvxYfJvjkmcz9Kr",
  "key11": "x4fpm3mDXNGpJFaSA1eczQm6b9K84PE3Unfn2ssKsJ8zJZz4B2baYD7f8evuhHwswpCKecHC8ntWz8VasEg3eas",
  "key12": "65X3ZELuMw7uqWJ6tha69YRdiAd1BwETPgKbWAN82CiXFLJWEhjSzVXwXETPnzjTj7uhms5JMKFQhW7bTH3NpbWj",
  "key13": "E5HuZxFstdyDujYFtcmnFUESVAboD7UMWc2NyeJU7dvDio5ahTpJ1CKHGWPwd1oTiq6ySVDDAEpv3oNM2BrTj12",
  "key14": "3ULxHTRYU46F4rMcDxSvMUJCQ5RUsxBvzt9uKhhTPzHGFZ46brEe8aCQB59k2ojMULMidzBuLCfRq2fgH3QWfdvN",
  "key15": "5Vdv5E5L5vXqoCEdCkeaMZrvXzHtcym6wSD8UDyxEQf2Mf2M3MBSfUsVN4ivBvzdQVY8FAL1QNbN4ndRbGwGYrdK",
  "key16": "cQbKy1L4mYeXdU4Ea8i8n67GaLt8i7522ZeUPBJR7D1rQGapANRxRwKJ2yJWLdYhCeJ6H7N4h9A3ZTriPntWwEU",
  "key17": "3ikVHBoafgLDdjoHUAwzwhv1esnBTNuNPVp5y34x9Y68bVgbEe4aPjfAuMaqytCqRUrUcjX8NG8pVZvx3c5cyHCm",
  "key18": "4NDREMDaa91VniNUTnnxkbujVz6UXra7u7jWWNJ9DE5rLqMwkiHsAZUMyrG9x7kT6YdaTdgzDGs5r8w5smMGd7Ai",
  "key19": "2vatMx8pU7Bp5qppLo82LXdhhEJ1QCgedwCEryCVDFYvhF58zwuq7FuHngM6qNGsLhQusQpxjzmaBEnPxTzoA7c2",
  "key20": "2WGsdEaTLsfrGzgYBrgBQ1BhzWQEEyNRb6LnVXd5AjX8rie9UTiAEtBpcTrQ866oSF8uDnLTCY2RnNYcXiFrhCFw",
  "key21": "48cRLGXvF1GXGcJCbdmiyuLGFao6u269JUzDnDKQqBSxmTHGevNG5UZfrYUJ2KiDNz8iYnDW6jwXJiRy2zKHgB3W",
  "key22": "9Vhxwyrg3LvHgSe2XEXXN8qU7zzT4cM34NVNoaa8FA5TJzH7B6i8YBX5JHM5AGbt2kcDXZdocU9i5wuNC9nX3wu",
  "key23": "2Jj3QCSeFKa2L7hB1hbVBhWFFGbC2i8fUNuySYg5QuomTsDDQR2KcVGP4QEjbtR1Db88Q8xZ4CYjmDLhzqdYthoE",
  "key24": "3aCcETTXJyaZb7LsyqS211DLmwyJUHQGRxR2hf4kVfNfLvpVQXQWxkyXUbLH1f73iP8Qi6oM98Rx8Q6Q8groUNJ4",
  "key25": "5vxghwQASP9LeRy9MvQ2DiNACRS56ANLgZQR3RX1x1aSgxSBKcGzhrdw2ZzpT37RZyh3bNAXjB3buyxrYBnfNY1w",
  "key26": "GLoSsNPX8LJVNCf7f923eRQR5eimbSYm32xYZpcfAdvG4pmd2RnVhoLDGwnAjd2JEwvNqu2VZZAxuYGFm2wcKsW",
  "key27": "4sNKpxm7AWgoweQrGak4B78nEohkcLukpLVVNojQWno16HrTJhPKWTxtZb1xZjhdvUDuHYnKtUG3Hjsnfn7FwspZ",
  "key28": "4buVztUkyFGw8WWjsrkAGP4DBigYaWRMPoFX5b6TYtpy4EEyRUa5QrtmgJeoRNbHwDtwMbSKZZUDD7mS7771R81d",
  "key29": "4ukakbSpLcH8VyM2ccQP2zvMEjQxMJKu2okTVDYrccmkjefDTrcop5ocitc8wLSvpxci7goRcxHqtefP1YQuybdP",
  "key30": "5LQ2HUeM8oYuerHbyTDZDA7YMgDweBpAY522LcmCcTRd541E3B45wuKVLFn22aZDBz5HNyw8uc5HqBey2q1JEE3W",
  "key31": "8QWn7vJfasVApzqefyeAK5gKfp1266Bs2gye1bP5pZzw4XGhLMiKTgjKDdzphbQTYNtAZaou3fc9n6Re4D521At",
  "key32": "4oFXrhHwAazAgM4P6uParXWdcmHPCDajQheMW3jxbWqA1gPgS2oDSzuzUiPsSXRfZZ79LTdvrUeSTL2nWFE1UnMq",
  "key33": "49E2vM2Mgf5U9UNwhy954JMiqxNkvfnKmdWxFpPog844pA8ZbCPdQKtqGAH9x2wmxvnSeA8v8xNevBmNspM7npgQ",
  "key34": "7YPLFBoXsEJJ3HD7CWBPxXXBk1sLJNJbLpgPKH88oi1abeBUHVoTTfTrqo9j1s9fDjb5Fe85UunGcb4nGcHjgas",
  "key35": "3UfbUvWV67UB3W2hUwvRyQ2dLjnkeQTHDkj8n7SXRJVVx6yB1gq6dMrsMoyz1fqzjrygywHSytRBzQpX7yXo3eBU",
  "key36": "2rNkGUeskokfwosojhESzhThf3tQ3huzbERsNxUddumCA5hAVvb7p1tzqG9fgzgqQF4buPxM3A7qmtKCUiGBU4gp",
  "key37": "4QqiLYk7o6jGXNg1J8UuWbtczqjMr2yhW6uECJGBNrvRykCmc6i9tacZ5ixXFybkyWdk4Ux8bxEbH6jNoai7hWxx",
  "key38": "5TUwXYTcBhZA6qzUhUAAFPvE22UxCVoR9KFFbtZU7PEhpSHiZMiVBy3ZcpqaxxoKn1UeHDFmV3LeufpTXtNBRQdE",
  "key39": "41FR5yRgfCWveC4whwJr2S4YX8hY3wrYdknLrP5HSAjTXTfvNPtXGDqFj8RVmEZsPqVQXGUSJSSpxRnoxE4ubi2s",
  "key40": "diP7LvyMpxm2buNQ7oCpFCSr986dCcd7fpsdCxqyyPSUJtTyJ5scEuy7peECx1XqQ2W1atzCZyYhiZCvxvQDWMJ",
  "key41": "2h88wzpcLzmBQ8SwR48EhKp3c2J3YjNpSZToyfLce82ZApJgzdig4BqJHhcNNEj4EcTgYKNfvJSY8SFoEAx7dVV8",
  "key42": "4ZcCWRoPD9aRx3nkCr5TTnVvsqEEyLybcBDM2rL2duYCXswAW6DcCq2ynncZsmXnJsx6dvRXVwGscxN84KQXVFec",
  "key43": "4TisxqcBSRT3XeeRJkrC8nWjUJUEm3s5XJgArC34D1pj7ionfnnsetrN3QdRgEXXzq26QvjvWUf2XcHNLqMSLtTV",
  "key44": "2gvHCvXj2QS8B2HNYgSQBAWTmpWZGtCFCqm1rrkn8eXiFyao4akbCRbnXfoqh5cu7CzhniVd8vhH2344WktNsq2g"
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
