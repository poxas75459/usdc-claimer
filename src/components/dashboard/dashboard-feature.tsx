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
    "2zzFhgQSJibfeYvmzrPtfKnV27eir6YpJw7DEDAeCunF4rvgtR4SzzsC1mGZ3Q3HDLdceE3759FKjG19QLjmzRif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9TrXYMTMY2EePtVvuMP9tgUBuctXmhvpcLvcFqXsyaWCuQcqLFrjY8ezVbuRprV4CWtTxoKr6EhJrk6gT3N4BG",
  "key1": "4mQfww1G5tyyTcTaHckLwjqr8oVnvFN3zdVx8LMnYZBcCGVPy2a59gLzgNz8WUwVgVXpaSch7C8u6gfNeuMJ4FPg",
  "key2": "5VwAajpHx7LCef5nPSStYaxtuNeLViiRNwCfDJd45mriY9NVMSVBeV1iGAjbHceYSiWLrvPmRJkYby7pZ42PYK6x",
  "key3": "4jqh6WeEtZqzrJbopodUUyj7mQvjRzkjiQNQafPWGTZn7Qm8oZYn6q2DdigSWNvcZp7yLAoMHaLzp4ucM15HUUoR",
  "key4": "25kAccBJ4evTygvomKeLbwMrGxS2E2DvjSSiFziSnuerfUDxbx5NSxi1hqjAh1ULETgZWYjVjt7mQacbNhWBvr75",
  "key5": "4HopkyLHCj85RiTMrCKiY8eqL3hUzoEBZrEH693CWdxZWTFsG9EYSxp8q6tuzr5AEv1hjbdPf7Sko5AF3JoJPxTA",
  "key6": "4yZCn57KF57m1atJXLmsfiH6Yx4YUgT34tFTfF9hY2ExhhXSnEh98Evkep569jbx33hFbTr8DizUpgWx7R23Dog7",
  "key7": "3GN3Tm4YjwdDc34VwHcNgATqdekS87MhazHJ1pVLT7BC3AYP53xQ6XBnoTurkujdrLNvUsRwTaUkS4aARKGPjEQq",
  "key8": "4DmsDkYSKoRwdn5rrNPpAFPLjAxNi6iyua8z58TD6hPiUBFxLHskgrUAv3mDKxXXzL6HQ1p5AZxid5YBUABZXYTr",
  "key9": "2xVy8w5ygiLuF1fW3gcaGj2JRCMZUxVac1Gtfaoa6PvMtB4ds3aKmAuX4VpSXxZrmswMdBeKiiuppcoGj3GS83qp",
  "key10": "3tMbph9LbSx4zpMNCEbEPJXVY7sqhq5e7ky18tZho9BBrquPCYhdmNWgdTVtnswxs26Lq238jAQYst1S9HXERhSZ",
  "key11": "3BQLVHtnr4fYAjvtbwqaL6bRGDKzZPdFwjpRLc4ewTBB3PYneRWuA1iryfQHy8EUKfPgS1h4oxrjGS5DkRaTiXQZ",
  "key12": "rXKvLonKLUX5VNGc2N1ew1JXSbDmAUgYjhbYjvGvykMJj1Lmbxputc5Gd811tfRBSDoKPjAgJ5DUSVHX6Eqohyz",
  "key13": "ZYFwsUS3wJK2Sac1Xg7SXgeRnJSQoJhZjNfsfFjbQsPVUwpZ4fV7f4JAQHY3QChJhg5EtTESbMCDbmXJe6Ppg1Z",
  "key14": "8dCrsw3R6VFwnzSpB7xsDzav1VRauzPD6yzUj7eTYCLgUSmbBuGJcbQGc5mq4YzedBP7xdWE6ZWs13yRmHuVhdd",
  "key15": "3FrqzxSzJ4J7DReYDzmTB1Tk9SQsLupKPsV2nXeryucH943YmF4z3GK5WRjZMz6H6tN5SK8QB3w2P9ErngavBmNf",
  "key16": "3kxxaMW6kfGScTCvpPSxr6QM1CC2WJ74QjBmsdrEd77dw9rSbscU5gb3DAivYhtDgWNuHnEKT97Z34rZsJYDijuf",
  "key17": "2pk8WPcb1F1DUpUzWJ2WGV2r7h7xzrqMgvtXCP2gUdLRH6HBjA3zZCXKtrTu7qYirsNAdwUALBa2DM8ydtynums7",
  "key18": "4fxuRrrRr4JixAu1GZpGVtVkQUxwYwYqAFEwWcd3KVcN7hibxPkAjJHMuYGquKSY74VaEutTydND1zkVipX6TFMg",
  "key19": "4WnYpkqc6ZDWKfVFnuK9kebWANopw9aY8FGJjzzGaSzS6AQS3sHiDu5RSsfQrAFuuWp5vJRFkkYFJhEHYvcgDqxv",
  "key20": "5MvthxE9FwukE9szYjqiHqUcmHpDzYKvqunuMLScoZYoQgkprdUp7UhpLyYnK9MceteBGK76dcY2aF8S5aanC6z4",
  "key21": "5sCUysc3RTBuay1dytjndHvu8wvmeEgtoQFKfDM5nj6EwrVFGemmHhs11Mazad83g8qNVZJAtH4aYokZ1PwYRXiY",
  "key22": "voCGmXViqdSTsfT7fJcnU59fmRxywzsak9YUSuNJUVg4KE47HRuUsSgZvwR6kD62ngHPBHri2oCX39pKYzUuu9Y",
  "key23": "5NhqQstwAqKGbtjQ8ZSPsU1M9xJvFBk9PFkULY3NhXfDkR14zrEmwbA28qPDZveVgDUMEYtY37HF4gFw5ZuGueHC",
  "key24": "GHTNUtE9zJEHsKVYMpm6oo6dWnQLm3cbyrkFH3qbBYLUcgE7bpJEKHSVu4NZbUTqe6AuvMvQWqVVE1G69njfmsp",
  "key25": "P8usyS7sR9kXQHFFR9R4XnVwCD3YC7fcuLFMCgvmJ26WMPNcHeoP9RGTUzycuQkwbnaMLwLg8N3rUbcWCrfgq9f",
  "key26": "4dDtpkp6g4SBUn5YoF57Eq1fHLEbcbqSt9WyNRhee4w5yPyEv14vhbQtXUrQpfVhz4c8XtCKvXANR6mdHvjraFc4",
  "key27": "5TYwTyyM2yvjLoJZ3be7YPhX5AncH7vGDRJ8zksLAro9iSMau7ucyRt7cayyA6dUZc768AbadJEEKMprm5BQEwi6",
  "key28": "43akj1NxTY1PAduJiwEv6Hp216adcqFBPYepbf9h6fSPQmP73zanEbn8g1HvjHX91xkAMmrFQPFB9JkcRs6FT6gZ",
  "key29": "5YPW78whjPTkMcYHw9xF86itS1ravP9sLuobNr5426YM33kCUx7gnDYQzhK8McTpyuHBzbPSaTyCWSWPzT5aQh7V",
  "key30": "3PoRqSub3FwtadkLB2NGKy6G9eTALZcZedkqmtbRp6b7RnNJKAtMfDdBQtewsFe8Um5TW7h99UTMhZR2VKY5Yksr",
  "key31": "9eiQ7JurhFzdZiP8K95CTQJ3Nx4RTP6Xk5zDX62S73dZJWUkU3oTGB2C1MgFyYRziVmBMna7XiAmRVkKWBQNJDE",
  "key32": "4g4dfefrvrz72FSJcGeWSZbDxAtYTetTsKjnp4Szht6oHfuVejFYXY3EapZuSaZhRS891vPQuhVeKxmgP9nSkWHf",
  "key33": "4AhLUX9M3GksAXba3REoybDnLug37yfQoMQiN9JYyFLFj6DFGLupW99MCosFeNtp77xr4ZtbJpqZp3M351B68KoT",
  "key34": "2umHH6Jsb4EzPRfNgbn8DN2TwqSkc8kPGy5QUu82JFjdyKEVwCnMjSWcpspiQDoVHZyyG8ZgkjWRRP445RsCqB1r",
  "key35": "42n818YWkfAdJ1K7K35MKmrqkG1QaLvrHZTVK5n3pUFEieggoKFd9bN1rcC5H9iCf3QNoEj3CjCnBFoVpcXNq8hy"
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
