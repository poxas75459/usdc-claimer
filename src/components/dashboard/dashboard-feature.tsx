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
    "GPgCsFAKrt9iJ1BRYTKHokvgvGVgK5poVGX3s1Uytzh5HuoWuRfjsyHsP3esuKNAdEMbqVHY3uEfNUedgVeg7nM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kGjDcjBNdcJVGsjNTMbqoXr528y5YBJhpva1AuA8weBepjvUgQskVnBv3YB2onPnBbQTJ6kNc88ueYe9XCBuZzb",
  "key1": "4jqBHefDjSJJ11yYcE7pgMJGJr46eYqiEzGQfDLghC4FRoL6Yfja2afzSRddW1FAv42g6ogeSERyGB5iLpeLFYdi",
  "key2": "2DrYNiKpYHF5omCCqycj6Jc4yHqpZUmqzMpTmsm3pYxbWaEoqffs7z16djg8N3nQzkgJaESfrS8NtEqWrAhk63jZ",
  "key3": "4xS1DVQvggh3CRVbFJLN45g3ocgmPRjt6utuAxbvZqTpNzWsqZCN9BsujiKowAuzUpJW7dVRpWJ6CXLSCXcc2j3S",
  "key4": "25bjtouqst88ja22bWnzdtRRpVVwCmrRaCY7LKewgzGfdmyxY5axyGxzC4fEJ255BY1UnKxaHfWFn259ohTY8xoi",
  "key5": "3a1GrKiCbERdX3LgEGACsXmwATZmnTZSyeTg7PZNkHAeGDFD2JogD49V3kR3mp1HZJHzN7dxPqoTnvZDHXSrhRHF",
  "key6": "5YEfbHbrpnS2MMZYD7A686VxJxEmNHnqHPAqsvA1kH6CHn6hcTHtaxudsYJk8jwBJCX64q9N5MgLRx3CamHCxGrw",
  "key7": "4uLrfuqgruV8FRYRmaRQkJiau8eqYGFYgb2zS4UMwGZY9ZecELp6joMZGYLyXqRaajHS83ZFMt4FjnYPi5wTfwEE",
  "key8": "eXxCVmbxwTanF4GfeVz1EmKdsPiBwGCq5q54x14dJxVg3ypPVycwM3GE1EqntBL1FhHcLjMNUbqKUB4MiGTcG2b",
  "key9": "4J8T3H3MxATdb7Dq88CuEVkxDcpUGj52PoeYeZjDtS4Ni4h2Juxniuyviem3PJy2GfpthBS3YQn5KN9E2qU28GWE",
  "key10": "5F8r6bTokTHgqT2QqTgRBkE82LfQyDjCLX5suSTQUv7mE7uGZbA5AqzdiaCopG4L3Aev5HxEw5A2C3yDFwRvedZE",
  "key11": "55u8o4c9Ext6oVggdjstP26tNM2NbmMA2PBUzFmn8TGfc5if6YdyY8viYSmfXm9sgB2BgSVTzAgL787WbXfqWMKp",
  "key12": "3CiVxmwH1Kmjthx5Rvpba8hhgnj9R2UAjNoiAMgdTC6rhM1qrLPjH1bus4v7ngNyMoh5nQsb4dxRbZ8tC8qxvN9c",
  "key13": "2uQ56XvfmcBhKJjNTziDZ1pfCUE69sn7xGBMCgwm7cEcm6Tq4FVzRvdPCpyYvLtC2eBAnc6Bd8T4hBfCTfFT9fka",
  "key14": "2yC1DAknKrqNNU9dMbA8rDNQjNPpodJ55HWn7CmqUtGYkjC3z5gKQReyrwJs1DYMH47B4qwQrtEVpYNkR36dmUHS",
  "key15": "3KS2FcUGGz8THTNcxX3QqREjDvC9yPYGEboP4725JbzcMfouaWHvTuFXCESp3PSXvNn9noXBVZL2uPW9UA88uFne",
  "key16": "88uBUq9fvQVvTVhHnhNDWASQStaqo8skVm42KkKHSfToZw6fxWfWLteSwZmmnphmtvGhc9jPRefvgSXncyy7x6z",
  "key17": "5Tg7caDhgN7MzyAUy6g7gcooBZd4tKjeEgZbHxqzKAc5gePrsFkxFR1WT29czZFyA2jkiu3UcpzL1T9wgZsBTfr3",
  "key18": "5ticpZhSEoP4dUDTaUWnnhQiytwsttUWdKbcgH6yv7LJntS6F3DFmbEZpTgsv6YJZcnw2XPrX5dtpHp4BFu4ochi",
  "key19": "tb8Q7uzMboZ5rwv7JVufBr77AWXoBVXJqF4ALaX9EKPBawaMjmA3v3cgT2BLPzdcFs2G1YiqZyJqdhEtAJnU3Ve",
  "key20": "2U8fF6SAFGM4joiN7cWqfdZLfMHMb9R2QhsGefXsu97hhzNGEiLzY3g1dbEJEv1iTSQifvo56TmSkaWnJqJESvVP",
  "key21": "3Uz51Vytx3MXFGXquANcNJrPwQxKNbozrvxXFCD9pJaqRePGiPmnYcbDibX9AzJG5jGu4hB2x8iqJ6HSxX7yM8hu",
  "key22": "5D2vxGTr91FLDg2qM5AzViKChh4iQuUjAZvtK37GPr5JxZ2hvHGMcxBc2ci3CNf8q6xyW5owXTSykYfoms8RuVqZ",
  "key23": "4y7JKcoSpWKjrAGipBgn6kasGPDurgAkp7FU6ydCUnaqgSEhA3BcyQqftthfBhxgeTfypWXFGVka8uC5vnf7GieA",
  "key24": "2QXkvu8ZDCQMMLZX2p2fKCndG4hksu6tp1DDrntcTbmyxs5ocX2qFjhpy4D78ng11FqkdXLYkyrutq4Gf7U3yKbB",
  "key25": "54EB7An14SWDFmvyhE2nCcrQKZnH7RSQ4qW59BXPF39a3xobHjzkW7bQ6q7x1vKRBxMPvo4Zr2gfGtqhJUsKptf9",
  "key26": "KRBJf3wtqqG86PGsTKQzWfzENeymPYhWGen6TNfv6FPMR5cuVCFwwYJ1zxeQmxMSkP7kGDwNw5sgNhooGtGtR78",
  "key27": "64ikpP5ntnwJq4VuoFm47Yd2gx1EBG3har4rfdN8dbFagR4P8wZ6qjphQ2Wej1L9uN9pdRsJiuVsZa3oMVfjm2Tg",
  "key28": "2cnV77JUNusgRPep4gDcYp8S6roC5zRfpyVjAwD2D5nyr6Dm7EXAfUSiHPJTifcMftq1V98rJLNfutYhBUuZ5BN7"
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
