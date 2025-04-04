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
    "3VnPeTD3zEzV4sskDBfRvP96bcfvFZjUhD6KrXJehpD24Ym4b6vUKwafZgj4JUhcUdkLdoJZNjkT2btD2P5nvbrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ogAPBHUpX3U88SNsem4HyWZYgxj7Vi81geP3jGYV3NU3BdGUWCHwkSyAounBHBF4HntuQPU15YQ1b7jvBnogzVZ",
  "key1": "3HDKeyHBUVuBYzsu99hNZWjvr64dSqY7WgMuAhDTie86bipwNi29BRsbwJ7SCs7ETqf6KPnsAgKCyycZUFcwWKiA",
  "key2": "xPSMxhF2MyLFa7WZN9FSwYqWfJuoEfXoabVXZ8hXgsjgck7DsAKX4Jc9NvF58n2KSge8wciNwVgaQFsqdrfm1Vt",
  "key3": "3qEhgEJsvdFqKNwu4Qw8tTaUkUwcBGigPNJuSzbhDA7PyRybo12yTo1vn8J6jksDFLHPAaHsFtSCQ8s7FhUELYc5",
  "key4": "35yCx4gUbaLu6bRjqqR93vFzmVWWth38fy2DgDbem96bnbXXo1sn58TJH3AFAFis2APoiybUrAr2oY7THzqQaQ5W",
  "key5": "3ybnfRjPmuSpvzsMB8G7zBUfsERa4WV7iZS23uhXi44cGhEaLULs47GJMJbMsfxFWSHJMTfQ9FfR3TPm1hMzwCJn",
  "key6": "4ibAUbjdiQ2GBrFb6CqCaSzBLapCkNDwK6VNzHtSHN7d7rA1ev3Uyq4vF7q49CsZ7uW7kDrAoNFnSjR7WbCrxCMa",
  "key7": "5hSnbTYdmYYCSqLUNpxiWgLfGiEJBSn1ZcoucWMdfGpXEUST3mhvMNUSXKs1S4Y148szPBLQpJKAWzgBGjkUccDt",
  "key8": "5KjekPiDrZYQS1w4RbUTv3yfudRdvLj6c8mSMGtZ5hYsSxzkjrE4cv9jL18XHTHVaCA4qGinQczFW3DzAxD8iNwu",
  "key9": "38nmJq4YiLJbrQbC5nbHuvSx61vyAYeoAocdhA9wsaBAo8ttqDkM6LqbeASzK9DVUqo6qMUJbp8dEhpWVffj7mj",
  "key10": "gAHAsnZri5zM5TR4uU5nB92syJYFBzR1jLeainwRgBZzopUrg2eSSRiZj4XFo6i9j43UwJ5Sfxjw7vjczGrFk5Q",
  "key11": "2Y67X6ksKeUTbfhq7VGLrpjhYCM25XVzbs84s8qTXK1tWkmDdxN8TtikLPLUpLwpbvsSntNeK22bjKC3FKHpZhWx",
  "key12": "4iQ5Cr91r9xBiTzXRkc8feDmSGPPxp83tFsr5uezWewpwFJfBGXGviF3sbsGSmucg2WXsrB2W5f15qrdWpzchrVQ",
  "key13": "5Ypuabaaj5M6R5gHi53cNfsmvA1zN14dmnWNFez3Gao83aRSXhy44be2g1TMmMHs3B6jhbhVAK6EYdtGPbpLbUdK",
  "key14": "StRPpNv9GguhRC7hHzrBsyWEAV8oEQiPN2YcmQpRm8VxqcGomAw3SZBjduRS7PKTyLJ4TAy7VzfwATTBtXvYNuJ",
  "key15": "h9tRvUteEeHhQuHRuMXSytqkDk8ibnFVfjz9DJk1GXtYxkpxgNH79ZBgNo69rm5CBezXCVR8wMyJTyDNqC2kw3j",
  "key16": "5UzkuQ1zCzfjWRrjFWFwEB6m2BR1jX6bSgy7sDv3ivgGXyzyhgHmeZgyNwBLLdGtGV37qctF6a5meWpvsuCaAuBw",
  "key17": "4nsMfzRUbni5oADNBVWyEBmFb6RLSTQ5BWHYZ9peJY9k3q6NqV3yCmboSbZbr4ifeDrvCCSucbd2NpfuUZuy1q7C",
  "key18": "62Qd5ZeiVdXAMG4V9cGCqWJjgEKdgoqe6cxt46mDzKTw81vsTsoVALcx6HWThTCMkHGH3VJA4gTc45jj6QtPesre",
  "key19": "2TvaQCbFkaUfCyzs5bV77VoLsnLKcn1Q3Miz26rsTLVGTPVajhRk1EZZtjQqXyqAjGTu5M6vDWycohUGwPvEB3WU",
  "key20": "5VFdSb6mhqkhrQb9gwrv9qJjuAqyLnXiCxuH6Cqwb2ogRQpXVUVRVRBjT8vuvvxhBjwG9TBwJYAtXEtu31Z2Zk8A",
  "key21": "52Ws9T8NxvGpYkmiJZ77LTt9MUKN44NJhqrHc81FX4iP33kUTYYPN93GfNDk4X9siu39WYZoC9TgBiQBLMQJ8iA1",
  "key22": "54iM3N38Ff942gkhPmNg58cQ3UZmc5pTPzo34crovnM9QmbZvqTUTYGR5DeicLW3m5AeZMsSqegujMjG3xruBvzv",
  "key23": "3J5hgbizhE55RTWR5Y1rGSihTHH6PMNoyp7GTbbZMusde25wcf5G8MT1Dhz4XQ6nvPArhwWk1QiExfWR12DP1aCv",
  "key24": "5KCsNwpn3rGXSdzuGiB5h729m2gMY6w9RJEMQZU1AWW1emHFxcrPw68ejcrQHk9BWgeiVHoZuCBcQstzuwVEUtsi",
  "key25": "4aERWG6XfhypMMYLnePGVU6cmzuYLWkD77FwzfhakVhrPbnRuhvqzn6zYpSpc1T1mHdofmznkxrdn7id1MMki91M",
  "key26": "2qCryEBFt4wsygadwFBTd4psJQzg37SQ4hKvwLBNym4ppTuF2ySZfZ7YBBTwHTE1iAMCDgWc1Yxsw833EJ1Jpi9X",
  "key27": "598MbH6g3k7mf8uq2yQTM7pJE7LQwLQaGSpnpBL4rqHcd1WiVsRkLz23AQN7tuvUZLcbAcUcnD4BH8tDWs4XWUiB",
  "key28": "q7hJt6jWwsE3YeHDU8zyCZSHAugi6dtWE8tHPLifgZnV8JiwYCdJQY4xf5WZXVBaeGhFCpn6iSiH4yiJ8Azs7v1",
  "key29": "3CHMTWfExDqnoC15taxwhXtmgRaTDHem1mKT8DmvYqCFao7heWDBkFewzA8RrwKGfbvs13unrTJd9V3ae6HBdxhZ",
  "key30": "5fapMuKqx1yUR1quyVgDPVWKhGs6tWuyRNv9P19bJmRukjXqKoGhyZ82oC1BYXShdrKTdF7gJnFrQd815Xz7H6Qz"
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
