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
    "58uYM3GWJQbUiRDPK2ttciHZyG2md1kRU6uf6RnWsH7bmoUPj5vjxJ3YHwAdPir7apYZjn33QpZNZ6pNKwAxnQV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1Vhk8psVVSR4H2uQUfNhjXkNxp72FafZMxxVGy6TCjpD2NaF7skjwv8mMP2pjS8QNJc1dhESWCddjV2rU21XcC",
  "key1": "56Xamvyq99FWDj2kJNG9D6DxUnBu4PjYbkYQFhb58vZjaybRt5XZXGVWuruyux9MFhZnNhCw7SH3x8dWwecvRMdT",
  "key2": "4pvW14kKHnp3ngc3ojMXUXc41ggwrogJ2JRtV1gBPVjB6dS7y2S4VgXZ6pnTqjFsMaqbgsZeoWWErePGWDhF4tKV",
  "key3": "4CD1MDJfVrGiFybwABqPBWNwaW6ckH6ou6FTRwzfdo6ttL65YheukoqKcwQH5evUnSBUWjAwcGJNWtDj2SVmRSwD",
  "key4": "5611vwE98EE97FJVopAjmZwgHzgdhUNBDwgirCtqSFEBAxLtppKaJsKWUYhJC5RGhM4wht5Q4bSpssLMBYXAHauZ",
  "key5": "5g4KAB7GYDUiMoqaYoeS125a856XfLmQaMLuVzCq6je8QjyY1ue9if7iiwLKeDWrnqmNnsyKarFxZ7boiymV4eXM",
  "key6": "3n4zyvdRBcnWEeqfYmC1mT6UmTJkTntAUSRWfAALxhTpa7MXiLdNMH95jmAqFhdGby93Z6SMVKxnuPELySnzfUYP",
  "key7": "2nLhA1VbKbUc7XfqHXnoedcXDWJLreaXso38UG9BVbz3XpVazdE7QbfuPQA8a1MB7DVmrkZhwkaaKJemM91M848G",
  "key8": "5LcZ3LS42Re1vm7eEKZdDQj9SsWPGphmnUCMDEfyJXidtzQPA6WsGuKGSdVRm42sh7qYkRmm9MKNw2t5oc3jLXYf",
  "key9": "N5iKe98Qsd6hkVfjhesssFpHPjA1qo8CyHgkKSVkRHTwBGENwi7Xq9c4YTqpMEMSTMXKTcoMbMvhX4sPv6hiE47",
  "key10": "3689zjfRRdg3CMk217c5iyrmwLsqkGgF2cr5m5MSvFrgiTLKffWpmpGTDoZNvNtAbyYY9YQK4EB3fzQMp6iwTxds",
  "key11": "5yNDoCqhw2dqdzVy1HXfhFFvFa27LjTFYRbSSwsE26o5JhjTuT3zVrmMtj8tJUnaaChiBkbCGia7sy6jGmM28n11",
  "key12": "531QWaTgJYybc4rZKiPKeJAFe8aUvqK4JTthJtDYh1BrUwUcgfiu3kgawZuoWr2XASgiwAKNNSaSE4o5mcF9xnm",
  "key13": "3NqjGe6dQRZvVpfimcb4wnVs1Lh9WZDg71gLg4Ain2qjayM24LsfR6xEW7ZuJ8KSXmmAMyVUkwKCxDULw2sUVktd",
  "key14": "3QnxWor2jg9U4Qm5AR9Lf9NceXkyfrbnY1faZ55vzon2qcmHc24gk69s259nyh11rFNLtto8iNAjj9tfawrKwgdD",
  "key15": "Q7kRuQ6ZaoWaX3fvrqqTgfyLuUnKtzxTLwAcY8tFdSdwdmCTqWX7ish1ZBkBm6mw8fSG3rCuKBFrCVmJbCQw6zV",
  "key16": "35LpbXoMYrnCrPteBQtggRBQ6ArDof6mZ7ZrkVteFE3fppuCCJsyQoetb5JTeRLCCM6agMn5mAWhV9DcPFSdRkBB",
  "key17": "5tad8zoJrbT4NCKFQo9dAHd5MPMqdhfQpmxGKUNByEaVVWr82xMctQQH4aB99FHBhM52BWKcLAXGWU5AvLEXyZxt",
  "key18": "3pnLrLFkeVAzrF67cH9rbMPPZupEaEftkoMRDnkLKmiAHc7GZGKiiUvXDVRSN5pSvVLETVx18nN9fELem7eVduei",
  "key19": "2RW2MY4dgjWfayw6TdUJ2tLd58uVjMAEEMXZgaKpaD2wQDVHxcMXfBhUSmsWc7gLDHDHCx9aNg75vN32AqQYEAou",
  "key20": "2eV7b95QbF8yYorPPDmvY6CuX5MXJeUCbdxfZGZXyAbyiRKncpEuEuPC4uzB76wSYwnpYbBcFLXcsYdaVDUcGbtC",
  "key21": "5BWJtBgUPD2H7gVd1xoDEBkgxPLMfXYgH9MRoxX17apCwNgnW8VRqmivZBF3Vw9HBULT1MtH5ruSi5RYqVoxSVQo",
  "key22": "JXzPkp7izCLcU2KCkbST1HXDivLiYRWazWiSD4nJ84jTDn8CC7eMEVz3VVXJrhB8go9VhDQFnUiBsF3MZrCZNsy",
  "key23": "pCScRZnookBdr3naCbV8xSMzzCKtM1xuS9eb7R2H69gPW5WvzTq529nK9acdNEEoCQ5E5mydyc67VNgh3Rx5Zw6",
  "key24": "5Su3Nr4CcxH7cDG2Uh86JSrWLJ5Dhxg6zyyjxHV6nmwGn2XttjDGxjXgVAeg4KzaViDFhZbSPJ3UpHgFwU3UZvtj",
  "key25": "5eD9V1PJXUFUoDRtSXY4E2DSiaHMiE1jV7TizdvgwL1EQn4rBYjgQN8ZF32zp3SLRdnppnkit4ZLFaxykAHBKhAP",
  "key26": "EQNYCXfddm11BQBcRnV4QURvjuLyxd3ZzN9LPPAsXCbuU7UBCV3qL3CPMg8MM6cWWH4PY5b2tHaFd5Pc5Pd6JQq",
  "key27": "5Xgkh8T1PimQnvCshCGtBMeV17R7dpeYg7Ltr35bAva2mRFzNMJpNTQPnhakuDntteeEJeVub1U8D6umwwFpVymN",
  "key28": "3KH8aoAPKYQyKSVWwSUVSX3XQPMK6dvv4zSwYk1Y4pz65brLiymMjZ4VusUtM4XN335Jn6Q3yE8RBN9jsc3VcQRr",
  "key29": "56aoWdrykynk7DfhFXVfJnvsdmQGVQJVUEu3TvRS3ofcVUubKthhsMjsckpkjcXvAsgBmdnanYjNC2Z9DBJKADeo",
  "key30": "5TKsrmsrmSA6UXe1yDdjnV7DtVKjzX9vSZv2r19MFu5EujWFdhEaQFoo5JLtsFwfuQiV9epzRhceRTyWKX9k4hUm",
  "key31": "M2X2aogRE8HhuJfFs28LEuaaDvNF8hYM8qY3PrpLH8cbr5nE1AQYTrw8VtYbd8ppewCphrt1YwejZF4G2YQ3Vto",
  "key32": "2sahj2SEjRMghnSWzECs33SL8Affarp2EudQwrYqvQf56iUzPSNnrnTde1CJ3qLfxAkMmPYhicaDkUeN6E2oSFjh",
  "key33": "54LDm7ykdT461MkVjWT1LbVQRa5FQf2sADLC5LbwtNXNAMsreef8ChbyRAXmiNQsTRvkBJFXLDrVfLPDJs7RrU7w",
  "key34": "3JsmiWmyZgDaH57yBgJqjw4C4C9PSuvXnVCj252pcRJs2uV7xaJrwnSwVXhpFtSmRYcFiqM989a8ZLqCeigy6jup",
  "key35": "4bdrBx7nhJoYad4grNZDSyCazNwcSEeoDXS5ALiSAQkfEuXSCjhGn3KsLs9CijY8n8w4oVwLDfwMuvUNbms1nDaz",
  "key36": "2zZ1GdbC5y4ca3nFVz6xYfJKyhYGB22DdtWcVjNsUDKSCcgxn7eFdFp69oQDT7farSg2YDnBHAzBEtNYLcywuymz",
  "key37": "3tsMdcRmT1BetVKsPxAp79MKTvHqKgc8zpVz2PQ2FLejJPPzNNmCeqRuHfh1pPf3ZXRVvLdPUHC4c1w6KXsx7XWh",
  "key38": "42CCUgpuSLAurk5qzfL4X9ACDJiQke7PCKXh7qjBuqQJPM45hmHeo6MgRfodEjoTevsg85BgjTDt7owNAr57rvdW"
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
