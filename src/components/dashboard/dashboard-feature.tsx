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
    "4ztWP4xPHSY1HMDygsfR4p96Y2EDuFYNZqNzPLJRNsX7qmxJdYSsaYH6To7VkSHTbyfD81ErM8YeVdn5KXJsPvHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQoCm1UuUqweteFg8C3RbMcWZ9DjoiHCfDxq96vqXfyXtaHDNjr6xXf3Y1zHgntnN76nNKT1r3Jkcy8eqno8FyF",
  "key1": "5g3uSWjV3Y4XodfKpq5fFjbahkqt4hZH8JghP68DP1gZVuhYYQv9jMV4UsWiwmKW1z7HpxaoBTHpfgE7YfXjasLC",
  "key2": "4CcNJKHCUdHD2j9kGDr7UG5octNmdNruo4jppHH4sBSBWNEKw78G25eWYV7Hxt6RgxYNfjF3FeSB1cfXVkLUGXDJ",
  "key3": "58gHXkrFPvtH1NjJCmtFnNfXExSf17BpBvswzY7bKX1QKhNEVT1XaHQ8VutesV1FV3sWoVQ8tWUKxko69PcuYotw",
  "key4": "4uw1Pyr7vVsboM3ZqHN289zBp63hfb81Zft4JZgJ61vUpiLXpPTQ1WUb8wrEbCjFyma3mtLJu1rrLk2KWdgBSNrU",
  "key5": "3epe1YSn6vx4YUPdHaBULwuxck6GNp1YWQ6mqVBBynjgAcqEhUKm8xHrMLtPnQLBwviKXBv3J9ZD93XoDwyLnkkE",
  "key6": "4Ut1g8AF2RXS3Ls6vGPsjKTfg9GJ1xAamuu4iAeNgDMe3xdqVG1gRiQjzeZKeSESU6m7y9WbpiEeZYtBD3EaG68W",
  "key7": "4HaKtgKesbDZUprcpFESJZfurXkY4nAqa3w5aVic5x3jxBqY4JtoqqoVqWE4xHfBaL6E3TKrBb5QX9dhp95Eor2k",
  "key8": "2LdQ2khc8n4U9WEUHZV3hDonUS3uXcEKtjeFk4FLxvPnZtUXSmjQMr3Qw94Dtjuf7L34VvAY3FgtfRzqDYtyvqqH",
  "key9": "3z2ZQxLhT8mkMbicdgiV3jj3qiwgiigh9yRJJwR6xN2PnEMXXuZrxfi22QQnePCMhiAq1AQDyS6ppHoe1ZPVXG2K",
  "key10": "3fbDExpra6zgyPACmLP8UTs26Gwi78kuV6THw3tcE3MTRLFcC2GmEG6XYM34WxqwvkjagtmHvWpfMgC9MCVChUTy",
  "key11": "5Er9JEky3QwJ9dqe34rUHBPQ1AcW1YWDvKZSCgidbbGv8QSfT4ymhNwdmE8t1Dhyn1dpALLHAQ2Js4Av21Fe1zws",
  "key12": "3L8fGtxnSAb7DCdiQ6tsBqPeHRWa7Jev2H7Z9sR4Y9qufre8i1toGE6FL1DQza6YeRMDCPTdTJm6wSAuVuxvUzas",
  "key13": "5W38Nti4qnDN1NaoAbQTjgLsj2BSNLsFcL9FR3VTRSV8XMTpUxBFYYBhkpg2Hpn9ZszXoSo5cgJ1hTmV7rfN1nQm",
  "key14": "cRdHoEtU9MUgZsp9beUfh3njmmV4qzQ6Aw99HjTt9cttQzWtBSHK7553bMt4i4YEb2LPkcBfH97nxhdjPBty9bt",
  "key15": "4mxQSQpKBSYnENENT2s8sgLJrgJ8piQ8i3Kx5LEW7tQcf9oAa98VDWdrvBAF4TZRXXmqfCRBboXaavQk16T47YMq",
  "key16": "2KxFoB9owM2SofNJtbUSSG3jZRJBGY7ZiETr6dwwN2YYz5BX3McSqccGv6w91vHn6vPJ5iACJmzuLxZnxBeQ9xG",
  "key17": "3Po2ANj1FMUCF1hYjYmhvqnYRiz1V9RobT3PC94BzScueU4oxYi7bEp5Mt5BmhM9XiJw3QxtSunWkaevZXviZjJt",
  "key18": "2P8KvYLU4pBmgdQtKUp2bUeXfoGeYgBUwWALqkQkcnvGn4BCzoyF3tnBSBtpoa6Y26Tq8SusMrJvraJVydPKLxkR",
  "key19": "2fZ9iYUB6QcqR45VokiMsJBBr6zMUfLQZFbMgCFVVMT8snHAxRsFVrq215xfQhgDpbJAo6jgp6qp8dTcpDjf6qdo",
  "key20": "3T4forUv3VyYVVVe8eu1sFqbmLoUBDQjTFfNYVtsRanXwtpaySRPhZCwW4Uz3dNZvDgZq5g8KCZrCnu8gRnF3wmY",
  "key21": "626LkDbWPRwt2iauEJAHdM1pobBBLbDWyv8tNkALQKxNWTTjRUm3SzsxwWjmfgwZoDKgpnWdUfEiZUMtbzeFsxw1",
  "key22": "2B5TA3xiZ7L1cRDaSVBy954sMh6ZBTersqPewohxf2v4mSo2rsGLXrLDPqdwaEWfKoCwDpxEdpLdU44vS94wnZWJ",
  "key23": "9g2ddMCSiVZESLvaNVfKLc2fdeFuMRzvLKWh3pnvgEEwTtDvwdTxVH7mq3DGuaW2rec3wQzbtua8nXPgb2Xzyzk",
  "key24": "375WoiLtohP6vWY2LV79E95otuhGWcGbriDoVfF7Sy69FfNLvMzztvms3cySAonQk4QxFsBjA7juRaUYepX25op3",
  "key25": "61zGg5BrjEr54mgve7stZgg8wygB7WzfU3M139GcLVGuu2kvK2hw9uexj9hT1K6SPGQtVpt8dEbqF9d4bpSp6G1p"
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
