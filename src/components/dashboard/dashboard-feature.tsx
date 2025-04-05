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
    "3QTCf1YD1gnVqdQoMfEUc8tJfL5K27s2uMjhZ9yyioGQGcirV3JzK1X8Vrxmnd5x4Ur49fmE9N3Tuai86ocNjKdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26KaKBWJxi1czK9r9KpDc6AbtnPGQbS6pzws3ySXTWwpz1vMWUCKLSfApnUVCe8PvNbHYUEEmd2FSvb6ZRJi1RmV",
  "key1": "5wnTHi3yfwAv1wVNQRXsZ7w55LAjSwoqsg84CMSK8RVgeadgAHLztA4za41dSij9J2trkAYwDoi2EkbNQBH9ZYGY",
  "key2": "2LM26BRrW7MhDrnyUWbKRBXnBWJhMw5SfSBuZWCCcWU2KKhPzfRRrZx6fJ8VdcPQJLrurdy2z9Cu8pv3DU2SJR92",
  "key3": "56zMjYcsUKtNoSL9o3tiFKPfPe3yCPVN1wSeUdPCk4Doj2EoDiJQMJhqVHcNchdAbSjX6TKHE8CKLJHU9dgjQF3S",
  "key4": "jgK6sHQF42mSdkTFyjAo9h2xUBRB4wz618KHCr1gGaAsGebQp36QLnX19S6nnh4fwwtX6MZJfe1yWcdQQorCeNq",
  "key5": "67gssMkZAqSrjxfmrBXZ7ihR2QvyqrsdGZcEEHp6BPoyjwu92q1P8LtGMnPpB98Mddoast1FciH3UwxhDy9YkLWd",
  "key6": "5pFJDRK9QUEshDTSqFpC5jZAacMTzitzrfsRs5n7GqaZh4vsGdvTLrQtiQr8iHm21uM5i3pmYU57S6EzhiUiHq3T",
  "key7": "4SXtVMxFx1dk7KtEVWcMzeJRKHmZfvjLB9T9RhZ4NyAc6mHGcimd5pLbNjWwMMdULRJ4Nx25bPAjHCYQfgRYoFrJ",
  "key8": "3Xu78qNCCoMrC3uarTWdFq3zepHT3ZEgwFZcvTb4ypCGoAJqiuJWERXkjkN85CbtbTmHUacjMNPFj2b1CZGKYRSv",
  "key9": "5c3iSLHz8vABn82kF5VbLQTxxWNcoW6zZSWxuskBaqEtLcLpSv6cywitxhSNEA7L7JoWPJzYBx9hJCWoD5dDUvrd",
  "key10": "3TL3suD76TjDskmQUaxGTmssyDRywqcTneRb515CKV5u5BXb21eqRvxjCcxSXVit2zVzpkx3VM1c1NG7uUAqL8c3",
  "key11": "fiWrZbqYoe5VeCV3nsKt1Qur1NBwVFYqyViCjKXzDpmXFXn4PDeBN93g4WRNtvcA2PHkTMPmQhJaKEpqH8bnC8d",
  "key12": "2jAGA9U7bTpaJj97DZDgcV3RBQVAr3y1CgAcoDtgNo7D3fJBUFbPsJ8KWfyWV2e373ud44L6gE6Fv1DndMpQteJm",
  "key13": "3sQkg3nb4qj2sp9cCJEKHBapatXNzTcndgaeGz4aYnQLuCGGmBFTYEQGK6D6Y2xi6pnWSYV6vN92xMSwGw9rgron",
  "key14": "3hFuZhnH4AywJZU2yCBfcvoBtytMBPU8Yz6FRSYUfQ8JUUMikZnWcj1mW2BH1M7tKwNbRaEh9AxxV3Ag3j6M9SbA",
  "key15": "2bgLovpAzQyBMF9b5Bou98X5AmePqNB1oxvuEpmLijnbAbDVZkfaADaC7GgBQbJeWwRs3pyBTjEA1BUZUFov9oRD",
  "key16": "WYHVkUztFjPErgx3yxnGmFZNaBXu63w4EmS8SGTTiM9tYLndcGxyqqoRnsZribKDUZ5UzUXov7kwzcMRcSVyuqu",
  "key17": "3qwnTCeENVDcocAN6WG4bn8yEUz7XW2K6ddUZKkBhFdHcZYof5yvN7SunXVNGSr34mfUVRA7FFmuUR3j5pt2Lf1k",
  "key18": "4zhF16YsHEoT2avQBmojLAYxTWBcgTFyxCJr6sePqTmw9L4r8utYyCFgRf1qDvCC6PWHZX1UBFnRNJHUV55n8Tfh",
  "key19": "2Rxx6TTbseh8tpTteAUs9qpvUQPR5CQUKFNW6yQhAxrKY59zJ588uwALD7APsFeq1tw5dmnkBWfzmimTEMtwRSAU",
  "key20": "3UVgN1bfEHmFhNqGLzrJeMRXbzddL9DtNKD9z5NSSFwer63Vm1UkgZounr9sijF4mCg83kEcxyhmCqX6CirgduH6",
  "key21": "Yunpw4NX5VtbhCsd1DDbdv4VZjbpjeU2v2QnGUsh3ZKX5JhTJjZpKojMhxGGZVGcD5wJQ5seWPdRL78dUPqNyFH",
  "key22": "2jKEry6iA3YtE1FwifGmi2HVQTgk7DFoEhD7gXUAqBb9j2DqyyCHrVxeNTcpz7v2ujDq5a1DCSD23NbaBShvbG9x",
  "key23": "2zku2BxwNH32xj4LqYzPT3dWAEGWrNkJ2bgEHcReFjwtULwFWNmYXAcFFVGGkFn8LQ7CPBXUTohvp8Mod2T6mtex",
  "key24": "5oyeL6cXasoN9PucxoiJxsiMVSKnkeS4rcQBUaskZ6352iSmGPiqYx525UcTBceJ8FEUcBMMdLn6efxhpSERiCUN",
  "key25": "5JaBkwbEZuP3ZaatWuPgej27uSkbYo9JBpbVcpd2g5U5an7W5gFcTZYEvpb23fbR8193G4qxCVXptWVN4GzA5tj2",
  "key26": "Aq62vh18sciNyrQpNiouF91bAn3JbS4RT1GGn2sjkL7qVhL2LGsAKBZ76XW1oxrhpMqQLFZA2NRwpXQgfhckVZ1",
  "key27": "3fEArH4Wt4utMRomzAskLPgVyNwtVsSqhgAnQ3Y4USfBxbj8K9kyujKMqV9pJPwfatsDKsQ7rvrrT4WYMKKR3cMi",
  "key28": "4KCewveoiaGMLyp4AS1b6Q61CfSF9hzHr8mX59f8prBgQ3eWn8bsDV8VdERBiNAMg9CLHJsS1cfUDMUeGj7WTQT",
  "key29": "1vG5iChg1over94KCAQmAoJSvgYzWqnJxSzb31Yeko3aejYR8nhDLbjxrq5kZFWosSNhKnDL9bUvDYSaayg8eEw",
  "key30": "5BSWAsRrjhHuSrtbEYkDcM1vzYQ2Bg6nmR6aXgkomRZ9FPHigipP1wVspyuvQDVhJf9iS5ZfsMvG1UbrW4CXMh1L",
  "key31": "5iigTWawvAUdhpSqu6L364BQja1sGqQ5X5qaG7jaFN1jDn5MMFaKnBKCQAgxtumfYrUbMBptswvzhBi5sHt5vF1t"
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
