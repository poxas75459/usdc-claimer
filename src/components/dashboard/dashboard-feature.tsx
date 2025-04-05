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
    "254jWA2AVEYUmbW4TFNoGCs19A83gXUcuZz6DPugS3WrP9RXWPwSFLTzFGkvQbnnymwcSHbcd85PiFzspgpUrHPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFhLz7q6sN6trKk4rea2dZqGTN1FA39x86uE6oFSUEqLhNqjabQdYUEGVXvQ4cao91P7XKbYCjYtzWfJ2fPkQam",
  "key1": "LFi8NVQgHSZVLVCoMRzjTosiRckdM9SXmqYDEX8cG9F5BKiRZFZLJ5JXxXKEAymxq42km1BWBsaDYiXABNSgsU9",
  "key2": "4oxZ6e7wp7E9EKrRNMydePWSgxdRFSzit7G81LLiw7BpGpfc9TATRfzPUV4RTR4qDDYRSjZw4dKtX2oqtavNiBwK",
  "key3": "4FH6DbtAjYFsDmnHKhzLEVSHzP1Z3AQNwMgeJionx44B3VM5ksBnPBjRxE8wZuVvi1yHj6BLiRX9XmUtnSXNBfqh",
  "key4": "5jHtZapxP693VgGcDQFiUPu4i8ase2GvvGMo1WbsraN4eEfsXoaMqZ6YyYBFGgUAHFVNK684dxgFwrY7vJwZA8gk",
  "key5": "3g81mL4GBfWiAQHydWnkiBZq682g4EjETWFeBXCuEj24ErTt7iXCxTA5zg8FfJwoVCNsnwQhp7bbmr937MnSnCgD",
  "key6": "iWbgPNui9ZSjfBpf4nV37y6FShF2LPpdvDm9sJJDQ56Wa4znP71f4NMShgVKi5mQhatsztyeCxeo8VYP33cpt6a",
  "key7": "618uSNfanKYDX4J5Lzzyh6BFTdtidjo938BWrkbMC99KE56tgZyKjjoFnc64NwwuG78MZ86vJ8V8mgunrCiSTZSh",
  "key8": "3vgqCfbes2QkFq7DGTLaSriXg5o7vnTHygCNq1gKkhTCCgP5bzdYPWxHNeLA2a6DegMWTfAxDSqzHNuU5bSb67pP",
  "key9": "3c6CRVb4S8TSQKLSUD39AMVBa5RGoVQ66tbnsEBPSFHnE3QgsPn8yGbVx78eokhLGPERCDeE4QPw1nJvKHsZAcPJ",
  "key10": "62YKNZGSF6nPxUaBJMiv54a6k2jFP8BmeMSQ2MjE3iUPkr4obNBf81ES7CFWFb9ze6DD6oFSpR4UReELC4NxWLad",
  "key11": "3rU9RBwa2CKp6V6NxgUcuckmgp1MB7itL2btcfNuRAxUHDoMxqWUSMJGwN7ZQNL5ZtD9QcCNa89aiBrZ36Z33axt",
  "key12": "4bL5182VxD2wSUikWkoaNgV3PPkszEaKnNQq5vDXLGj9nBsUSJRQpmZsMUPmSaAKLnmRHPAcQSxajqSPgCdYsaPx",
  "key13": "3KPr4pWwP2wQHPqrG1V99UE5DwoKCgiSr5YdpgvcTeR3zYqdAtMxGobTKYsVXFNF44kVWp43QNWoUBYYyZW9RJWh",
  "key14": "4xSchXNLYLFtw6oVnqcsDXgnmrNJewGkKBZaUDzh2eUZHVLLAb4dNkwTxRMEKRpM1q9GC15xjtfDtq6CgSR1oxkr",
  "key15": "4QeLuubnBGGN48BXXpFN18rhhsUy6NA6x4ur8VBEaS3MhPo4f5bdTLQEZFq9UW2Wy75kdMK5P3Hx3X3WSG8nqCpw",
  "key16": "4pdAANgXJpFy2sbrDkxLKzuGUzf6BMhvERZ6cVhwMaBUN9jfuqHgDHTF1Ab6QJFoysqJYteU7rvaaiH84mTDQEos",
  "key17": "4s5NcAjeC453DGNFodiC9RXL1txPqjd4cuwtJ5LZa5CbENT6iEQmGJGwLpT8BaZsTChfQnuL5KaqPeVKYuQBN5gR",
  "key18": "3y6nfvmtvjUA4ixL9PcsEXKbVUheuTc4zE1xJDrmxvJsC8dmYhTDo4o8gZJV9ajZAc4h41CGwhgNbd9Mak4RRCEz",
  "key19": "33WSQTe4EJBDUnc7vwnoW9Bq8hop6p1MGnLEJSbT7ZpZtwvLMnaD3pnWivNn5xUHePLu4yGLU4a7p9Zme6HDHPMN",
  "key20": "3Y1Eo7gyFSkza87PoPtwhmHF6VSptNo9GYbS3n1zjBEERNoUzTm8qMGs545kDZKLUNK3usSgEH6w8CXnM5sJwYqL",
  "key21": "TM54AmxKZbuaZyaqUbPtVsnUMDAXdVDehct4MamM5pEPzQX7R5JHMKMaQ2XfHsHnLo4etWyyeqVWmzYxbUDwqFo",
  "key22": "fv3gyW5PX2Kofn3HPARwEk36ntFMNeAoBWJ2UAyugX8EVjabjHfphTPNkeCdm7aahuExQS4ggH371cmUF89b6jB",
  "key23": "kNwf4r2RS6V77pQejyc4WNhexUW59m5JSgiHNwFew6fT73nbAG4i7RtAi6Ff8L3KWX29SnxhALPWpiDWanQuRti",
  "key24": "3ZwxQ6oS7PPZDA65PirULFRHXTuzkn6q3v1BtwFfSPHyRSUDASfNPW8pXErkrZvJhLRuyWdpbMNjJi5qeQMpMxi6"
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
