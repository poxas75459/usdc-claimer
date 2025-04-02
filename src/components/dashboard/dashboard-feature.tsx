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
    "21ngHXUNPfbuZ11JCNQb7eJAJXBEkDYwDHA92doK1vJSaJbMkGwUwdFFn426XAmzLN8KSVtLKE3vrnCEENYfZfHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sJbqa3hcnvmzHYVJpvh5Qkcg4MpRTsrYJuJMcnZ4cTBbULb9j56sTBBMVb7tL27G5xnLeznHNSyGeHTHkacYFvB",
  "key1": "29zmYJouUp2EDbKUNnxAa9A5GrctEX8fXVZyQntrYqUWvwiHFEXcFHNQUePjSQNzpoEMHE3Q7sfC52PfDC4DtpzD",
  "key2": "33jUV3XwcHnakDAgU9v3Z2kA9aCRti6gDSXtC47d8WJfHn7Rfcc2XKYe5hwKtQ7YRgfrb5TGRKpren8yDgNjR7Nu",
  "key3": "3hNk4pRJG6iRJtMNcMz6KTUKwiCQDTtjK7svBmf1nQsXszPZct4Z8tkuBGnr89qfxikmU9ckwNqx577DPuf1V4Bw",
  "key4": "43NgXmpL3hadeTNEUd1qMJgqjTb7yMViv87164NPgszCvyLFhmfad2ohsMeqS7kShNPi8umYWPne4TTHC4uEm4jj",
  "key5": "55P5PqfKzEEeV5NnL6H28eH5mMSUZA1uEdbyzdxEDYXFFTpPccQgizC3XLpFu6n84hNSVt2Q3UdjsisdUDprN1rZ",
  "key6": "2TNH45QuD5d4m4Sb5FdHLryXCjyssmDSj8JyhG8vMqeSRQcQRi7jHnjeoEJnvebyRVW1GNVHPbR87uLT1KGQsGPF",
  "key7": "2RS9jUBa2gGfeKpr49kitooScxvjMDcqfV6XDJN7vi9cfT1XCRZRAt7Zh7PJyxoZqEGHcHtMThNvb1AUJSubbdgy",
  "key8": "4jPC5jPVSHfyah1Ra9cRoiJWZG5jVUu8gZyDp2wfxw4N4rZcmQ6Bh3EDxpdrkkur3tGgDxyXY29pMhPNoEdXV7Jk",
  "key9": "5h4rg1p7KcVMaiVnjoapnL8ZdF3MnTRkLE5U47tV7BYPoUi31EGDBWarPKHXSgGqX8i5ceabkNipiLuPQrGv7qSV",
  "key10": "4DxdRWt11HuCMjWQ6395dLKoc9eHnC3dt6p9De4V6JHB2gKfFrJUG9pknBkuyWFmmTRxEVcUF3R5hPi2ouwV7xTV",
  "key11": "27MW5a2sehS3WDnxqafb6QPTUqcgh3vPpM3XAUb9LgXdfHjChVtyny2HmVCNHGDeewjKKPRmPn6eAWGr57ZGNk2R",
  "key12": "2fToifYnSJ18iUCKnHUKbvvmGNjxet1xzcrHo8wtRgqa3GuDeLibDy4G5D8C7HC8CTBimDpA9UPF93rQ8qCHSrRr",
  "key13": "3qUYunP6BUW59djCHUfW82TqdewaEwW95mFgqke1ME1nDkAYD8qnQg9yXZg1J2Bu9WFjiGW8Zc11MeHGqag9cPTi",
  "key14": "5apdQuL6z6tUY6yboWd8jr53rXbMiBueEoyYjcKqNh3dR1VGqL2EDEqKVUegSariD4EjDK7qa4EjXnYE8EVy1sYd",
  "key15": "2ZJeT3nHo6fBFGuQz4JLiosghHyMEFY3snReiUG4DdosqG3krrPRUdgzMEngbTyCeAcJnSUQGbEKHV6gSXfXntyP",
  "key16": "4VcRkNSJ4JFj6p6LLyBGdi9bSLyv5JvL1ebjnFDMHjkWk3S1escfCURZe4JtWuxHiuAb9PghWAz61ep496TKjA5v",
  "key17": "2VnuNxNm2oQ4HNsrX7PZzn1B1pUcfPm2qNFouQVqadDyQyqUMpzSe4BEgjmv3f1YkkDjh1ob2T5qcQNrHhpDartq",
  "key18": "2befyz8vafWkhX3cebhHDRNW9c8fnMz6ZuB1XyKhELmd81Hq5RZdbV4x5zsrYV3w4tfGQHkyesSAHHZww5p35CnV",
  "key19": "32gLvwgoumLNikm5aMvoyTRfiQ5Jwgm9v9Muuq7Wh94pgsLZHEj1Dfo6NVNEfrmJnp2Q5hHBUcCuqDoguXu4wUiw",
  "key20": "48XYW1KfEkcNtAvYX3ackBjPt9crrXBsvq5sdikq2mQ3rJvVf8wJomUyESe5YtG2oWk2UD6yJtCHeNYAxckkyuiM",
  "key21": "5XP6Vtu8zNu3Y2GjMuHCvtMtKLGbhfvPbj4XqrqwhbpP4CGMmQU8XFteiBzTTnr6dLnmA72NoueeHdeUpxoiGWir",
  "key22": "JLDbQ3UDamhAPsE2XMxgcM4RML568RLpZ4DtHieHfRSxseQXvnd298te2GVEbZUdYJqcAx3BZuoy8PUnZ3fUZ53",
  "key23": "4EfRkqVPzXHtqrS68kBN8rayBq7k8qDpieZSn1nTEPMtVbsiXSpjMg8Ve7kAARvFpksffimHZTeUSsdp5nU88ZCK",
  "key24": "3HuvPAkNpzXNYnuRQ8sExWmw9VA58u6dN7hNyarC2qsAod29hWAt4sPzguztRqPvXe65z7ujQF2PEFJMoccUJtnW",
  "key25": "2Hd2AbrDtUaV6y4TZTNCNAutBLstyESSY8ketFV3n85WRmDSWG3vhMYK3ycNCAuEmziVMYUiHqN33cMxgBDp6e82",
  "key26": "5hiP4hs4S4S65ZoJzSCPcRotiQUu8cFNZ7gGYtxQR356kGUMXCghkrig8ompgK1TEFAJWDmWsRDRZAj3DmZXxUUT",
  "key27": "4seMqq955D7ws1eRC5gWwYsX9Y37RFFtSdgcuomJrTfwjZ5uMmJtaBfUqD2jYbZtFLWNfQqhm8yyPEZbSjYGQfLF",
  "key28": "3Pz5SPNsnbJ69cNsmiiKD2WgKmRGDqohfFLn6UTcTj4bghrxZpakFG4CTxHSDjMxSNLbDTxVdk2Uu2cCmeWAzBtC",
  "key29": "4NEzPfRjMpjR3RTMUmrA2P8QuQFBKgCHS9ShyW2zmrGQa4RjwcryhsJrYnDJwBUoB2tG3BT5ZjU4V6vWYMhmbJKd",
  "key30": "5UbYNdP6HFuzo68NBGYbUUyMkZx9Qr4Q3B7q1C4gQjc99PTLeMMxsQtKMnP1rAom1S8FAgeWjLYKtbrtEzd5HTvs"
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
