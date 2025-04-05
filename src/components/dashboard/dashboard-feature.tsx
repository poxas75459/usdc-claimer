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
    "2Hx4ZPRpDkjQPdFfogMECQQmBmK7YwzeJGuRgoe6pARBGDro6eFNMqUDtQEXag1fyZymF9QEzRZSPbmjwiwaPhyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511u5acMH8DVyRaeHxLeAJj7ESfoDVNpxK8a4KXvrDtSzoncrPWrHkNP1myXfC3SRtQ6w7iSiTijM8JkKkMdaRDB",
  "key1": "4gNnSzawu8tkWYH61VEZu7ZKZZxJjuBxFqPVmgmnaEtqSUAbumY6TVSwGYviHTu4g8GbDq41yar14sC5BZTedEyg",
  "key2": "4fhSGvcYrnZDGW7ya9AJRxBeBhPusGohBzejECweiDpFZPdzGHTEsGmGWuvLx1qdRk7b4P6Xd5GMpSe8BmsRXfWk",
  "key3": "4ym3Uaxru3fmrfkKuZHgEap4dySoN18UHqCERhtAaBnXxTQN77op6VqVqFGKvJKxighedmDyfD658dpDVWnj9MvP",
  "key4": "jFYV6DJKWrRP4KXXR5TLHdsnyNjZi5AmZrZcG3tBh5EQU5DzaWt8MnuCvFaAXX668RiiG2AXem2bwEQ4Ym5txAE",
  "key5": "5pshQggv6eSXr5NV6M7vrAAoL8vEmVE37dQphKbsfV3QuNV3EAPz4iKZr3WywqYEVb3yc2v8Nq7dvX9xtK2psZ8t",
  "key6": "3QhnX5RMB7ZcUjCNmQCKFMeRxxC63BaQ7ejP54iUoChUYuzZVQyhySzTBC4Z4PPf5Anag2XrK5NTxmtxwA7g3vLd",
  "key7": "3aPmWizwNisMGwXM3CqvmBYQVgdi1XKSmWKFx1EqrDvzd3Bu3e6LUjiRKEwRNrgZtNeLhvKL35oAPPz7xzRTAAxS",
  "key8": "5GQAsBVwprXb5oqskJpYHrjKX5g39Z3hfvB7LWJfVSYtDGUvJUJGwvqwk85Fp35aJZ38LZwqTZHcUJ8znFq3eJvx",
  "key9": "2j8xH3yxtsfsNmJv6z8cSrds2c6bLAXUKGAjDMWvqVE7zmiu7MFAfZcfnigCDU77CGKyT5i5mW94beLExegQSPLS",
  "key10": "3ksr7BB1ZKYK3nwwm4C8DtqVCcYrZMBJXHe1mVrzSJEbAc1aH8892hXNJMujdgYW9R6Lfc9WbKLEhfkAVtfP93QQ",
  "key11": "65y52FQh8UxFMV1bLHrFyd8mCXX9UwEzDU8J8upmshUJCKYJurpwoL7168AxYKUEZLoCAaBJrEX1fioXUWbNCevD",
  "key12": "2PguJchBBVem8J9WJ7uh6reL3NHTYvnXKYA3VRNtMkPrdz27JB8TKq1TgXTbJjbKHx7oBbyy13FKaMnAmFW9MkeX",
  "key13": "3o1D4WqYXDrNQZEmYkFMkkUjQFMMdh25WSjUuTDutuoBT93EN8vGF4m8Ufi4v7fUFe2ZAs5qjksvoLZWrNyKcp8s",
  "key14": "4AjFa8CjV3vPqnC9pFiMWiJYv95ayzEcJ11zrfMW7xoLqbquWU6h1N5p5xqA4tLqw3g5rW2rd3sH8z4FjHQMDZtU",
  "key15": "5m9L1WQTLywcAKE4y8nkn99xXbmS2ZGcRTpZvSrJcvRjHg7e1RvSE9M5BNZsQZ9kt3gYT4NLvJJCrZSozTPqmbyu",
  "key16": "5X5bNEQ6S2HYPL4zuyGbdqNMJPgsoKaMCsh8h7bMrxP4nSWAz5FqKTsnf9QfrLxezGHp8ooeAbV3okNwEXojnuXa",
  "key17": "4PRgrMVdrXEdcHdJykbVEaNgXmyP8vs7rCD7mgwgYmui8QK1MxYC44YwwLFsBTis2X9NHQHN6EggyAXxRRpkxi7g",
  "key18": "4xWD4JhH9C6J7Av35v4CH2c3UEeJUKEBKYtZUUjtum9hzHtCJgyvxWv5Bfuz62qdLh76ADFxqG1YFUCPH5DpVwcL",
  "key19": "3FSCP8qaPcvC1fqUxsn74tgUKBrE8tGmejsFd6vr6SqoZXfJ4UcuxADmirQjawm61xiEjcAYShUNzfjjBy23v3YV",
  "key20": "434FTqMr7VYhJNtwA5LM77QY6LpNdpu1yqtNfWp9QMH8s8ySsH7WQo23rmdxbKSddEjv99WXToXNv1A44DQbFcmK",
  "key21": "4JWqiqiE2YdsEH8xywcaTtsioQNST5qzhZTWraT65F7q1CY55NNCUDWeLemTcKDdvQgUHeksjYF47Bx2PqC6fv7J",
  "key22": "4CjxFGXYBctZhRNsC2NbH8cVxeJgQSonMpN6JPAdmvhgAzL5fNr7hkb9dt6S2UAJHpu9K2tdbwr4yiNpZMfF4ckr",
  "key23": "26DBWMvq7h5BXiEedisj1JdktFEDnN4VGg7ZwqCtuep5aN9MHFWgDJEqMFaqKPpU43JwThqfWs5sqzrg1q7bPxhD",
  "key24": "2WNY4taLWmzUjXDsqPzZqe5sAPpCbNEts7ruFCnRWfb2jwD8QCCYqfUfEUqHJ67xXX3RAitKUiY9e6vr13zPvTvU",
  "key25": "4PjbWphAZtFVpLF8yR912ymZ5BLvY6XcRiBzgNmD6oUop9RdcqGmhCe58uAfZUVgoH92oqZABRNMmUntnh4Z52mz",
  "key26": "2conktCYpbaGpx8HMdhMP8cmA6CMGYb9hnhZQrX31f4SxGGmMqenRVS21kYx7gvRjP7pEUt1X7TcBLqwrgnrFYH4",
  "key27": "4gfW1tDfhdDh9ixJtkRMDSHAp8C4yqpsFZa8yc6x1K5LLsNdfs5VsNvTj9PyiCGpyVruKPXBQjUAKWXj7VU7efeq",
  "key28": "4sHXufidHF22PnAJU1GWzR3fxV2d3uWAq7TN7PvMkrwtjiBiDWF9rMm3w9eKPfK2rwbiYgwKZJC8ZdfxXVbJQag4",
  "key29": "2Hx3YjqDb2P1Jkh842txwM6McfeZZkxCJDt3zUbbTcx17X89rGMfrGxUTL95HJknBqEjtJNK7b51uGVYkx3jYVhQ",
  "key30": "52hTnqq77FXBnHrPrJSpjgGwVouuZBLzaN8S8cKrvUXS64Dkz4Fq4kjiDAHHrLnaLYSXKQYrXMidozCLQmpNXuCC",
  "key31": "4X58LJi2DFovHiWSbtHaGuVjziKdmnmdaGNSyNR5euagpPXum1Xphu4vw8rhABpTmqpQYKQJzXpHVogWGFpbs1uh",
  "key32": "5EotwXmKpvdJrBfCx9kGExXc9Um9MsRKj4KLd94qn6cXScNgt43sBZj7V9AL1X4H54fwZDZmK2uydYD5FpgeVRtN",
  "key33": "5HyPDs29NRHtxzav3c4BiPqJXeKLf7RVLv4AYeUhaN4dwTmsBqkJfTYsESidBTBTTA1wUm4zDVQacqZnQDUP6TLR",
  "key34": "3QqRZQpvesAZQbHwqgBUxPeuCzTDqctTi1gS9DMNHUofGK7H6uvBDpdnEjqG55eEAwRzNm7bh8Ax7fjLVGyi5cWh",
  "key35": "3Khf4hfvYcH16DXp7C54JMnD15LUsFmmXXgA7PbTJDTzXknDKT9JLvV1t6RgJrfZuGT6oUP2YYQXxviJWLqyFFKn",
  "key36": "2bjZFxcom4FShemgV9vHEZpJYWJ75ab8uEcf8TJgnuMWzAAsjeuTX4TjK7ZG8M1Dh91UVkJuwsoKt5i6GBFtsjwg",
  "key37": "4h9SWooFGGXoMESBeVeR9Du6yFSN63LRYvMYrnMASGBH3wY1Go3p2ZJHC3BStb8gTXyJi3VdRj8k8p1r5wmY2i8x",
  "key38": "2esWH4nGSRd42TqFhaCwRF8mAvFEgzAqBXiM91L8CnZN73YkUEHe5djoa2oUdfxc87cSjyvFFKTNfVKhsUbc8rgn",
  "key39": "2zUVTYJoX5hGqaCXZ3bWruHAzjkbrZtnYtXLBL33V5uiUuvuY93WMBkjHLZPteN3aPZivZZ7FhFEeZZ4UxBRe3wM"
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
