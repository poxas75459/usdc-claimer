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
    "4ts2oFnVVaZs2ozJEWs1i1NedDzcBPWBVNVu64Qy9rd8oVB6VZsSo5x8afS8TRJbNYEdJoT5dkio6TTtMFqSo8wK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VPZnq6w5Lpea2sXi2cJe13DnEC5fdG5AwDZWRmu62Yh6gSN77yh2ZSYP387q1WK7pokkiRLozb9Ak4t6Yd9amcg",
  "key1": "3GYSeeLwRdmxvgPhAp4A9V98BnpJoQaTjqXvMXTMYQjpEtZqQTiFhpbDX9YK6PvthesDLVzPpYUSonZ6dbS5wBYF",
  "key2": "27UAmahWrSihphRHemS2bwSJVz3LHMcNuqZDD5swLiBvLCF2LuyJziSmNaY2nBKPBxjXKc227VSZC3dvaUo4GPRJ",
  "key3": "22VUAKL3Dg1wK86ZQWF9VaGkfo96oDTDYhUgSvb3qMGSzA7kpT4PcKk1oaHdF7V8NkmE9QKc5XFD55h6AZa6hxSu",
  "key4": "3FJPmo8TZ7djhqzZrbSjmphs2CKgAxmhfNmb8h4XsDqwSJoPVUPEnr8wjqsTM9nmJvsrrxMcv1SezHejXPkxT2V7",
  "key5": "4DXtUhVfS5N3TXxTZ3Y8Ko81fxJT1xYvRXd54WifBHRzHfVY27E1puAfMJxzgvioDCg8HjvUg8umSSp4cBynLyUn",
  "key6": "3DHATHciM5m3bP9wJYm6RTwYbCuvgsiXpFhT5m9vBL43apzbX9exD4FEc9z1FxygucUtdShohwodzmw8jm3QSCka",
  "key7": "25CrK4J9XuPnczrzF8B8VAxNy2qF3szDU24f2CMk3WDk5LA21vfSWhSx3kkjnUPvcJx1U7SQKuX8wRJXgunbQGre",
  "key8": "4FR2PhLxeinCz7kzLRzDYcYRzNMoDGfYNALthHL7xwZKutVxXquHJqReTJLfWVe5dStz8YamidvaAVQxopD2j58a",
  "key9": "usJrwyCGvuYMxPvvUi62kEk9AJCTpEvcA9mbUjviB528Q6vduabVdsvd1TK1tj9vXNu8Un23HgWqj52dkdb1ovs",
  "key10": "3aTcLnVEnyyhMHGyeKuktqJSpTcMGR9zpFdQXYqztjnmGrHERgcqHqLiij4gFoAGW2qSCko7vN2a2zd6gSLXXu3G",
  "key11": "4uDtUEQDVNFcdkfX6cgaQB5QAEkeQ66HbXF1yka9FFvfe99mpdjQ6HyAWRQZuPa3RGEFZknMnpqiJ85yhBsqTN5x",
  "key12": "4BWqix7XZgSo1zChMKsAoAfVNxY84ohaLotke21KCAdsBZTz9Nr8PsaQZwzSnmC3MR17Gi5w644ycE26HyeV1XBq",
  "key13": "2MZHHEZfEiQREWuMDbX5qrz6swGXkmAhExtikjwpSCLxm8QPTdrcZEygWjFN4v2xaUxexF31vQVSn9ParLbxN2sZ",
  "key14": "275EK6VEMfgiwAjCUTbSE1QojBGPs9smRxmSDK7uYtzowE9LesMu1z8s6gBRv6AVqJUThrGWrJv37yz9rZQ4Jspg",
  "key15": "5445Cb1N4PWs5UTWtqXoeB9SD9Ry9dKLRa6Y6hZtR2xJn13XkM4gMbAQsPt4WSkynhTNnwso4XiaZHPpXbmxqs9q",
  "key16": "27Gj8toNKGx6MSqqbZDkTzkYPUmmZNHZJZt47LQW28wfggjvUYFwCyQVcG3Rp1kGuZtDNM8hxLy9CpzCpBerHe1J",
  "key17": "2tv5x5oPZS4wfMojuTS7SCAX5TLy16gXh6dzvmMwdHk5aTPFFc4yEPzf71xqAz9ZGD4jMimWVAoCjRedXtzfY2wr",
  "key18": "3UZXxKa7cNmBuhSezBvZ3tUVbqV87XppcnKWerycdMPayRMww637VLSqMwDwEizXDmRgie1J7ysExqgcvWveG1ho",
  "key19": "3vt9jmJkdBYk6EkNtoRDDP9Lmwq6d8NH9m7BKTZSeV5nMFyi4P1FnU4jWoJEdRSzRq3GjFJz3HvGGRT2B5hpw5KW",
  "key20": "3ovkah3XrazRuoPSWhSjVhjvzZuqVgxjRifH493MkGbHjTWM2sJM33hroiTjqfnZoUkvv27hzuuYt72yDTLdaWVp",
  "key21": "6c8Qk9nkbR8MhQVdr9B69VYox9uSYUKuqi75gLviAa282N89MTV4oLqu97vbbKifx1SZpJ6r74mwXnJgdTjhauW",
  "key22": "3fXHyQz4eyuVdpWbN4Xu18aKZkjK4nPBENhKbVHoEKEojjmV38XuvkbJNNu2124on9nbkHehbbaNJjsfmERXghP6",
  "key23": "2qoGqDXZGbaGNsDK3jW19PwUmMogqtv3mmQ8roiTRHNAjvmes98tEnm1WLfr3UdJNSp2bRjfrf17zmKkZeDRM6N2",
  "key24": "4z2uKenTQ8r3vWRADcBtgCwB4SMXETGf2eEp8yfhdaPbBwYZkpY7ffn9ZfT2H1YPwFKLEH48asbdvcD2C7M8MSdN",
  "key25": "d6NEEdhJQPXjbZ4EfJLCcqa2VJ87hPQejP3rboyvA2dS2NoXzfvnUb6TJdFTLzTPtygySwKRyA7DDbuVhwcyDfK"
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
