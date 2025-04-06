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
    "2USDukZBXoLfxp1khVz97qSVqqrvPsyF1Tcat41U7sSW3eV1sqo48ePqbH1toqspziVJvsxNyCF1wbT6tcxePRq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36T7PVQCJV6NSDDzhEQq5vpbFD58yMWUNNPSDWAvKgiL7SVazsf2A9Zueh2TLxqjwByogKWmBj4aGZCMyAvGXDhs",
  "key1": "xnRKm2fYgzCoQ4izy6PP1nbdwDCZnTeB2DWx9zmeNujUSV2Ur9FmgGkk2LaUs56wzW7Xk9MHfNbTRcMUGCPE4XC",
  "key2": "4ovi8XnHaHPKYf4AA1RwnbxCCxL45bCZPuqLXn3BCYrbnTcj9SJKhhWBx8Uz6KiPhWHhKaDAzDp6veC1meo8fBRi",
  "key3": "5zaqbZ2NPz7kHrzCmhFVUUfDYFBVtGe5jiSXRxu4GuSPT4mFumdmWY5HCZcUungPgTavwCsLCuXYRKH7LYDKqm3a",
  "key4": "5S8ien7QdugmDaJohX1ue3pmRTV9SvXi3NyNnaG2gswqN3fUE7gPJNErviSUDxA4cwjS1Fey81NGMH9akGZoixxf",
  "key5": "HFczrwt2qkj8Hnp4i4C3iogU5Q8A4BD6BAEMumadhmZjap3rBuPxs297Z4Dr5mCnJ5xmsiYQGbuNhjmqm3AgFWH",
  "key6": "3nhAQ8M7geEVAD6gKsZAuis7pC999RHJsBMpHyWmi6RXHr6fiJgXr2MvHq8QtZHvLbJb5Y1CtW6TZQetkY8vV6qL",
  "key7": "4hfrRwFryPWfNMCmYwCw4bv1Vwz9zzwtULWwFG6ztTfiVb7jSKDTq3Mdwa72MZbvXm6LNDRnWPL2uEvAE4vHY6WV",
  "key8": "2QHndSzRUoRUKEBQXCMcUBJYTtksLxQ2TyMbzCs8CkzG9rGRhN22H1fakx8q2aNWHtYhLT6xYo4tiWLFXJqF78p6",
  "key9": "4afHtto2xZ5sVyvRC2txjs8rMpJ28MJatEPUXfqdKVRvebg2bEZFabegERQzkg9C8yhDCwpTTE3YCwYzpEJy1nv1",
  "key10": "2pWCybnEPsh7Q6tempxZ6CXhSKRULSaER2h4MWAQ7cLTPaJommR59y8rTb42btCRgtTfQcq9QDqHUFps4ADYxXWu",
  "key11": "2CKBQn7vLWkdkKABTMyvT458Aar7dkzpQLJFMiZ6Q9oquBrdwquJUs4LQ7LhoUZDhLZA1ytFev94utGPcpe7TKua",
  "key12": "CeXShJWKhyBW5Xt6vsaumJTKBi7E547Vikz5apGyGonT8s4TRcGUABnt19x7LqM1czYwZLasFR2KxHMBRQzBpfk",
  "key13": "2XurV6YDWq42mCFFKNRuw4s3YWak2fDYfqLAY4Aif24kj4urkDZqPFCtrng2F94joEEmNuo3brfP9AFbpHGRHyKW",
  "key14": "4sjeNjiXpzDaj5SMTFyhcVDS9jC3fWKUH4PP9wz2FnaqjNyyedQCyvYaqnvCzRGB1iXrwQGGyGA7Ky5uk2c3wsx3",
  "key15": "39JsY9eAKZ2Rci2b8yJHUags19kQ2xcbdvt3sWou1f3gChezGm7ZmfcSKYqghUeuEEuXZ1mPsH8e5mv9ciLTC8dn",
  "key16": "22b6AMbqreHyGQKc67tqp1nifkPuAncKqXKKdVKG2AfNEfsGaY4gsZdLK8iLXeQiJFBGsZMnnQxrCBtQa5TEPPZb",
  "key17": "5JYVQ9Nf2wfjzyb4GS7U2jf8o3TQN1oUbtWVwQtgQNVZsuUpPesQ7Cw75wEUsb8Lm2A2MyCy9uBe3BcycR4wPpp8",
  "key18": "BYXJyQFpnxuAdA4BsNnDj45wtX3Tyzrn4QCcSF555115VJMwG584Fu39CZqW9qx1kCcNM9uxZ1rri5rNtxqXhWU",
  "key19": "3RF261iSSkWkBjmeB2jAkPZXsfyJWfJDUr4Kjq42twpnXceTnwhcfvqZDVz6hWKZHYG8AtNMYDHDBEH8n4Tf6HB4",
  "key20": "49ishDnaWHReNADEpESV9fPcRGUwuMeRbgheXFFjyYHkPPQkx3y36QHViTSoW8kg6RD5bca6EFBeCpaCMEkE34M4",
  "key21": "5thkZqFQmtVmfsVV9G1wvs7uFJuxwfZmQiXJqy7UrMYuoXPdruSwcvHKeTCXfby1Qeo95YC7LgjZu6a73K73iowN",
  "key22": "58kbfdWAkVfjgWLEG6NTvrAdCbYi3aTMqxkqW3cYeZEMJv7aXxQ9Z6a6uMavqKBAA3KJCaPfL52yeC1NJvaCskez",
  "key23": "3K9qPTTh9f1dBV7KdAhk6wYuCN3RW3xrLtUt7uEG3ieM8jWbxejLfUG6euMa77HEjH3GYwwVbETgWRVB5HhG51ND",
  "key24": "2Fy2aeDX2JUb4pDBFnYHiPstTNZUJpcuTfswH9MfZU5hjVbVbze1F4eKbKpTNf99gF4qJjfPcfFAKPGkw9y8dLcq",
  "key25": "53GhkmzXKowUTBHc8qNuYSfaiKW5fguARx3YSLpHBBib62JbUzJiiFusx2xjshN5QJTHcwPQsssXFR8Dn12QZVR7",
  "key26": "2bKkr9zXSUSbAexCYxHKKawfCpT9eL5fa149GxTB89BQNUsPfRAsZiZ6UbujYdHE3ErVtwRRBNS8rQwdxxEstauz",
  "key27": "2K55YT18Mg8JTpGNaCgE9LTNt4nZmnuz7BgWqFo3rR3igDP9gErkTp9iuCPx1hqqpMJFuEd16RYhR2eP83vMNE9z"
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
