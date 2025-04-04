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
    "5fS2szUNjFky2V29g4PhGTsekns3sWLjuseG9JG36Fc95vKYZreddKsG4agUmCDY3e9uxsk46qmUyqPbrR72crsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XrLRut3heiMiQE59YPHfn8wRJvM6QQvD5y7CaTH1BV2rtK2QmDQ2NqCVeWXLnA9mKDoo8E13d6KkSsSM3FJyGYt",
  "key1": "24Pqr7HAYw32bS14xhskVZYo5xHuZGpB6kDiLcKRuQdArtGcvtirZtSrJ1y8Td3rbHVt1v5WbDgYAF1K1pk5JafZ",
  "key2": "5e4euEMwEUMpz2YHAP5c87r4MUAUww25ooKPpn7wvP5jAkSz3epqkxLhQJhAnHSGJbw7vPKm4LGuq9DiHpKFKH7Y",
  "key3": "aQ8TZijqbeyVGk54z3GzRMiqvdrqpq4rxHFeULgxKeatR3t9MScH39p2krUVPb3e8bNyo9YwP6v45EDoswADGhR",
  "key4": "4obQLei6T34aUVbgUPcWSNXVRXFZTqUz7Um84Qcfu6geXkwiNTyJgwJxvrWhbsufmLMr6r62i2G6qNdWXVyUCFXF",
  "key5": "4PbH6vHQqkkn1eZcdtTrGs4CPZTyT8ptcHojTTf5Y9g4K2QLh2A2jwYoZ1h8ChiiPqeJfPDDXPSj2DNybqK47xjL",
  "key6": "2pazXy5jNjWYmkn83S9kQyfEfPcBfvBuwpoE4GKgD5aFjgV9XZ7E4u4Nheyb8okCe9SVykj3U7UpzNXF8vbA1Dmh",
  "key7": "5p921tLXtkMpwS4AmBvKiVHoPWXuptXXCWXVMHRfz2yVoopxozKYJ6k2SmqTTXFy96WnwhWiGeuK2AuFoDeCTco4",
  "key8": "2eYWWFDBgrhUYMu2Hm9KZ6ryHG7SyWX33k78Jgo6vsyFg1FrG1QSGJf3bbZZfzp1puhj4PKtYWmjtFX5dYzzckUy",
  "key9": "2SXpDeASRRRhEVjmMzbs1oCndJHFJz4V8fLSmLAodMKJs96wvv8HH2A5bc69RPZ7YRvXRdtWJVa9wzBq8pyz7ChT",
  "key10": "23yLqzRkxQZFu1XANBw2dU228svWyu1SCcYqYpm37SnExAdpZdXMjk86WgYWFtapdNBw3AZryua6XG49A2Nbqdxp",
  "key11": "m5rxhV4rxKoAhQcHrUVExkRNek3AKjLveJjMLPk5V6UcUjZyjKi8JDpPHCqkYujPzqLiMVmYnLP7SYj7i4gyzG8",
  "key12": "5Mm2zhvB3QurkeWkL8XiVctQqtmJjAyo4dfvyCxQuAPsL62vkdNPeMTXxJuqdvsZfQ2GrU5y93TfSb9XneCFi5Xc",
  "key13": "2QWrs6vT5X2RqWdVsvbLUgPRBpHuCsLm6WvEsTVSUp3toqKvcWMGGoty5oU54HU21vUBrxTHa8g8XbxJyjmAvHw8",
  "key14": "4aVZdm9RNpBehosYtFy36iVyLBguLAQZH4avNAvV8dt1PvoqgDs8vTQmFUCJY1orcxT2LCCC1FzmQY16LQN8HeRc",
  "key15": "4C3WnqrPmMEMas7FWmUWxgZ8RUMVALL462adjc8DQwJZUVR8EX5kZFyZ6EWWSYbHEC86SvuFbHUuFYQX17i4Litu",
  "key16": "3ShoFSLWjnyrK6Pu2ivRSZ6NBotEmXTsSoVh4ZfgYiZEfMnTBh6XFZ5KpMFFmrzPukfzFfQKbSyStNU8XMhFHXaW",
  "key17": "5diLNvzQ5pjiw1mRi8br83inVPGUkPtLz9kxSm1Hosebdfh3dDEJ3fdjuRP4SVpQGN8dH1YTE1QQ1KDkzDMCZeuh",
  "key18": "JV9UdDKAJaEKrcatHqqgkpa73cRCrpPQq9ZMhzhbLukNLutRGeBrNcLQfMX27b16kpZKjYZGJyj1TMrfbae1xAG",
  "key19": "29oXazyyhYaTEd3ifaejfEkjV4i7k6BhieHbjihRBfpVj7XAhpNVTJ65NeT6Q1ckRgdy8Wg5gSURGNamS5xYrSro",
  "key20": "5s3qYKNhSV8aaP1qbZ8wjTPhAagvdWnZJ52ncuDrkZXSpxCD3su9L1EqcaCQMcwPNbDWmJB1gET52Ee7M6ec5UeY",
  "key21": "52JeAyKgzzbBacbTiyTnanCoHb2xuajagTcpqpGo243iTS3hdGHBoij1zkiPQugA5Grq2NbTxEcUw1FVSCv3cTgR",
  "key22": "2p1eG69bnDrCPpxtjK5EmdzBhvYHoMFMxfkqdWod8MyX5XMLazRP8K1giSFGUsbjabg511hU2YJT2pEumRvXBV4y",
  "key23": "4utQaAAWZXqCeAHwkmG3D49wpxa4Ssog1zwSM2DhvQWDYTiUkRzjNCrPUJybRNJJWRmJYTTvskDt6iHoFp4hNwge",
  "key24": "26im6bpEJ37nbKzw5RmY29f9mNEhdPQjcYixaZDYCvPMvNbaGK7fn2hQRnwrETqLwfG9ZwBndBN7BwTC9q28T2mw"
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
