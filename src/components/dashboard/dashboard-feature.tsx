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
    "4aC5M7vsbfcaN57LVaxFQ3bWkGNww9K9vpQLSpUsrniLzPrngmAsyUCEGF78qdYMukMWBp7G8psa8V5TwFjPgtjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aYN6stnwbwzW5u23J1uKqBUvy3RsAoavkNpFFVG2HhR7XxZwuUUwEwHWqANH4m7ZuZReRTam9ewRFXxJBrPtPQp",
  "key1": "25zL5dqHspx9rA8SvCCVTauc6tjDvHkZScMKwSyeWrWx1vkyKE5jFCCM9C5SZSFta3MFqQ4k8EzisTEt5uqMExUa",
  "key2": "3juj254hWmMTFsghRxEqtCbN1A2ykGqDNW2H8zJCcya3HYg824pZDHaNcjuP9tP4YgoDRJ38sap5TbVTn4UK9d5d",
  "key3": "4Rpg2sD9CQrMRNJSRrrvRrRFpNoKkJ4xxuhShZ3ABMMQCco4f4ZvfZJdf5ncnzdkTfBYxZRFsgyFpKWWytEyA6nE",
  "key4": "2dApq3jsrmCGT1chFKXqrjGf5cPrabHKesHxM1sGGUMhEBTEBMXDNAizasYNAh3gyDLYN3TM9kioJLCrsTPn9mPY",
  "key5": "md3UPDkboCZJpXWEmc4bXo3sHMYduQtsGwZH2BZHtdKbQAwxEVTG4qCFMkDDUfMpvbnpWEzKcJwtEjCf6uxEnQx",
  "key6": "53PeaSyorgFMqxTX31fBGBobHfQknaW7tbcdGxkcAhkR33ddWer764MZAhSSUrE9Pc5NUSMhpGb2j8WLbkXEhDZo",
  "key7": "NNURJJhpfunyPBfcyroJkyuQWbciFtDQiee19W6CDYHZ5s9T3etKai5b2dVR9Z5EdG69MK5oJLorh7vvJ9n81B5",
  "key8": "3qhN2FuUtA33tVRCPP6kBRjPtoJUyZe87zoMPpYrXneqbcYhFT8jjM6Xq2u19rNmzsq5qHF5Fte7RVx3DNtqggQM",
  "key9": "2pN8XCZHnSTo9r4QKNrJ9X9RVHmoJQRr6gkaUZCkfqd3Uwa2bxLcfMdUFNZTpkKvw6opzkBirmdzMgS7vfd35Tjw",
  "key10": "3UjGTgr8GVwXiNoeuECjJZQZS9MXNrFGYAoaGyU6oq7Z3R6CtA4qPHPawqLi1ERKtr2HeNaoGWDmeM8kNPwz24BB",
  "key11": "3c7uUoxzwuQ6Dmmi61LRdg2dcKg5SLgpLKjwBVbpGpymrYgwCm75QpYhoCfHinznDhf9bG76TrFDMJR9jcjazLWH",
  "key12": "5kn18KwVyk55fv1j3GbkfaxEWMpdjF5UijqnDKqv55Jf997vQ9bPejMDDttHciXn9N5agRpUDv4gVzQ3nCeV67BW",
  "key13": "4jFL8dS3c7JNiiLQqDdphHrGamQXK7LnVGoLK1pMfQFkxLiPnHwU6881268NfmQKxenSKyJiZ9az4SPnnFYiAhYm",
  "key14": "5pJZxP6Wegof1Cp8vWiAnDdhSigy8XL6kpUQpSd8FATTMmjhRVXxKosUDKvm1agbW7Y4ayrddjhsDHj7Y2LHMvin",
  "key15": "L7wj3xHEwwvvmvu6WJvsuEXLeYTfe2PeAUCVTVHWDXtzGVZZ3wGWK5PyQHgdK1tYBR14G7P6vaMh4PKHM4Jo9ae",
  "key16": "PiLq9u8p1DvQiiFUtnVzYmMewZQGgGxM6pAD7m4MAV1cZz9PsChT7bwprMYjQbXooooAn18Lh4bnVmKwYGcns7b",
  "key17": "2UhyRnG9g8NZC13RLudsNWt66DRMJCMtVMRidWQ5QuRofcYytcXz8hXQ9oLCzPpahAP9w61hUi9gLC4AsySu5MKK",
  "key18": "3gzi2srFh6pa8yiuz4rkKBSNePKtKuxiN8Gxvu8q59yftCCSqyqVJowd9KVUeEnk8fxqBCBKT2JaP9FZUfAYKNJR",
  "key19": "4m2PAjfvnMm3jF2Rcvxn6nyFyKhEL6gbT6Uxssd2oDhjAgkEENWJM6jaErYfWEXDQdGNtv4azW5YS3gah33mvGUX",
  "key20": "3yz1VchF2Q519tbWp5iPqueHxhD6rGsV19RPXnUnfQd1SvrUBhuj1sUhvBXHmRH9X1Ufrtequ6nF4kBAta3a6G1R",
  "key21": "bs6q3d81HTpwsahy3ZDLCk82wfQqop87sMeja4UUSsmHhxykFNoqNtpBo9xgm4WCesgmAaS6zyzCUXSBraJ5e6T",
  "key22": "5QEHYznT5EzvXSjtDUkDWYkQJ6enG5MqZWKYkZbdpMojq4662Ls2NegG5Di1W6Hsx6R9cgHJo1Fm7LdyscHxGAP6",
  "key23": "4aH52WtRo4UwrHYYovR72wYLr3nFvgH4W9JDEZJGRRhgyywemFJUVRepuibeVWcUPHh88AFkvo5FtQthcyxeyKHW",
  "key24": "4Dg6Skta2TCaCbZL5NoyprZQaS6SLtFA4wJZcJQM7Pj9Yyj1Xeu5htBH5x4E5Vxa6jGeSnqb6B1DFzxchWxY3nsn",
  "key25": "2DXBke1grqPcJ8pn6GuKd2mLW4QoxdjmGwrhySbj5sz9wuMjq1qanwdf5wHxRAimJqenQg8SectJeiqPdUSCjS4w",
  "key26": "2iU9Y4VRuSwtbgFViktDyz9e7B6P1Vdn52ruwmHYppbgzVBDFBgr25utv43rMzpnKj38UXBsTj91g4VqFF9nEtCZ",
  "key27": "2972wFDkzbRcqSxMZtbfSHjZr2CYkvNMgiezpSMGucx9hZrtkUqBEZdzw4RKA6BpVrhaDciGQzk8gr417bXUiezs",
  "key28": "3gYxzFMMJgd6CWoNtCiZmKZeBTEiXMH6GNKYfgBSVu73oZFfLmivRA51FGwsMetJPV2rvkjYaTjdnRJNMYFTWXV1",
  "key29": "5gL17wDKHz5m2Lv4cGJdkKVW5GBr1vmCQ6QmViVDt4su8qkHWbN4VWz3vNhyo98CC777W1rv8iXMr94pPDSD2vcD",
  "key30": "5mHusju7svdy2TyocWRgywz9PiHD1P5m8skDkj3EKur6dYidGnSqYkeqRjgBH9UVvgUk113SBm1QrFH8EBPEZ8i5",
  "key31": "2C7Y7fJhE4SVLw6rUourSwmK3PfxzCvDb9G3XvdtmsNW8L3ch7PY9PXRg3ei5fP68yGhH24NLkszSjL4vWsfohpc",
  "key32": "F2wKb7Z6wcKmBFhPqarQCCBWWUUC3K6Po7HiHZvKyJrzgobhEtaqFoM4zg9XfJNfJaYbiVgyG28DcoTd82Tna2S",
  "key33": "26SWGdTA5x9wqzWhDGwEE71A5Kk1mkiMubyiBLueu8DUEEUgzUUBG3ZaE6A6XDUbPmyC7L3nskEd15VMMMfJPoTg",
  "key34": "4FdHyBvSYkbBt5uLg8f2cY9L3kfaXpMvxCv2ANrNjqG5xC1RuFa2nGoY3D7mxDqS4yrSebr5QC5jqBs9znJ7wwMg",
  "key35": "4SAdWK8BdwRb8oaucPQkpmK5n9YcQEsRLeyqopsbEzTfDzshpeJapPbi2R2cxRbvLzzXQb7eJ2E6pzcKbPDGdyuj",
  "key36": "3M1whkzWir5H5oNvzW2ZbUKqdM39kXn3TjchpZ88L1w2E7jM7LqTXKSJcuotmEeMLRnddygLxZQvDqEa1ggPGr2K",
  "key37": "jCcC6T22gr9KLTrHYZeujM6eHdZHyUL3hTdDjKtZKGJRuqkQnNZbt83RWKNyj1VqZAcwPPjsyeGnwsRJnkzzAEy",
  "key38": "64LpxPgRa1q9DSG6NhzBsf7CW7ndPThyz85aueyUfiB1JZD1Qe2JqeXS9Q8CNwYsm7RYnbZs77z9r4q9sSnBQkbH",
  "key39": "5M2JbvAATqBHgaMuwsGU3zjrkX6F8V3PyZ6QdNcKbEFtu1EsEB6m4TSLN45S8HXwSpiDJ9kTbT9YxxYurdtX8ukW",
  "key40": "3Li8nUcGtaWasfHqyqkT779h5Nw87x8D3m1TACg9MXnFu8Ek3udiFBNpyM5PRfuBBZZXc5qimBjgU6hRSgEt4W1K",
  "key41": "3QNq38M9Li8ApPRijf7TdVpyF2GKw8GcEYeyWWg8XDWukdima7EwonZqFUuknHELbYhigYPyYq7372Mf9ohBNfDn",
  "key42": "vz2V3XUHPBdUuQiG8gzMwBxyifa8weAF1rvUaXjGffdC6wLS2TqTeyybh5RgknRMk3FNGoU58MbAxwAeafqVjGR",
  "key43": "gQvv5GLvPnza26JVoGBik5kwdYX2wZjg9P2uvvbjfpRpMC1MTwYpxLw8F1quKM6D6havz42FYCaCaTu7KxhxA2Y",
  "key44": "khowPzHK4WBaZvV3yqUhCJwnQQRqwbFU7WoNnXf5M1G23S9oKygd6btqV2CnMDM3FcJAeVweZcoRxFAjeEfqGv2",
  "key45": "5MtzJEU2pUetCZSPigRPCd1BfvsRXfcV9qaDsbrzGiW8Fx3Nj2fnGMGWoeVZnU14KGCXBoWUQZXTE6gCh4xVfs65"
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
