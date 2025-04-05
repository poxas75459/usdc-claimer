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
    "59WbMpxP1jNDd99WXpLd4vJSJefqJpHWgTJ7UwpX84Zc6ojUACtdPZzN2Fayw7Fd91Bv9LpExd2AD73ow9LwCNBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25r4PmK1GStwD5vAaniaVjq96HKQq9H2dXdynVxsAg4C4CAEYWXR4f9icTKfLCC89J4M876xwnbnViwgBrok8abV",
  "key1": "3LV8tLC2yTHZjYVnT87yg7ySCQfhUTKC7Q5GtmDYwxUP7JHW9kT4xLsNG8gMqCwVcFa5Ty85LTDMVFtTKvdureSv",
  "key2": "3jHbJPDyX9pcjTBwws81fDf43dGjgb2jCtgYc6i32jHEAvr3kXTdAvUPNuDcczagEaTnfbyYPtfoPqJ27brREUKK",
  "key3": "4mJKJ4zJo365nQrKBsXofZ7bs5tbM2y9VDKM6VfhBNeV8yY5QWF7Xmqjo727Nr2vrfNYCybowfE57hRCTMdkevaC",
  "key4": "5J896LNzZfS48pW923ioPc182QoQamSHRja5dHK5btW6hx4mqrKGA6dL7ZB1VCTLDW6jnqYHkcyuYJWCE1wQnLqw",
  "key5": "2z9a9BprBy2NBTsUDv9DoWimuxbZRADKeBKoCPPwWAmdNGQYy1npazyGLgtqaZCuGbXR9ARLYWYearx8gb2fRBVf",
  "key6": "4NUEEFRqgC4kUqFU5vybt38xQvLQNVXrxB5w8XNaLK2f3u55QqeqzXSJ2FAE32r7vnLyfvq3qtQ2vJNgHT25jGgV",
  "key7": "UndTRHGAF18n5ZwUwfz1uuwb4Ng3gLE1jw3TAbjcF4gFkYD8xp93RayMJqY4kqjLoKWZDiL8WzgJmqCZapQwcGW",
  "key8": "cTEzgGaqCsx7DTGcfuZqcwT8tjbpeNiLQsxRRmDeGJ3YsETkDtzwxWBgpGatAFELGtRvojRrNuRrKiMg5YBofTV",
  "key9": "64xC2dkTDmhYnb5pQBWnvy8bskMZMo5SV2ZevDzVcUP12ieKzmeSbGB7rnmjrsYLYTnVvkCFzixMRbvks1R8Pt7q",
  "key10": "643q6vHugxwzCTPLmWeaXx1WjXpaRVqUzy6D13FL1pJT2fmJtNgvpi4JtRbLK7HEeemEfNhmNpnPCteZgb1RJWs8",
  "key11": "27Nb8xNXUZTpLmBEvDUzftAhjKCPDcWgqfq783eSCPyLS9p84SuCjS17UdubQTqLD7ZNaPq9TnhdJaWiSHLQ42YV",
  "key12": "Y3dh8oTy3SPJbr3QKxLPZ3qePwL4UtRcoiqk8saHnnA8Dgdxwu9L37jcxcoYWgkP7i95sZ2ZoetAjDCnBkjQ93R",
  "key13": "2SyARRZWHErUUNRqQh78nWniLTiJRk1RnbCZEjt3Xygj4mv5G2GUTvUck426W7zJDEmNJxKArFgLXFmZqohvinL9",
  "key14": "2WsP1RYJKV7HPuWddjTaGsGNTCT292ci7dVUS1p95YaErumitA3akrwvrSiWQBbMU1ufNNfjCsLmWSNzkFS9o4GT",
  "key15": "5xmZthuqAKk1MTEotWpTXFS4rPqYU3UgEgZggfc9WSMnPcE1YHGtxPYsJuEuT7ARc8q38FzpJR1NsEwsVPvdG8XQ",
  "key16": "2KZHo8tavecGPyTvpJKRMWQJYvMkogFZVdiNg9qH8mtGEU6yYCHb13KxRAu9coKRBE9uvSM9qhbQSuBdHEcpjc61",
  "key17": "5VmZneNyyvtTXsna6Uee5uu1zeRzP31ePWBDqak6Gv5QLcPh9J9hEj94JZaTPHNi6PDBBv4UtN8KzbYUbTT8jk97",
  "key18": "4j1FB7uwuTWpuNr6TZWuuJNzp1w9H7EKxZ8PLuoPnARUNjEdDhmfsNxTkhcmKUB2j2BmZe4sfdRsTpfwtyecueFf",
  "key19": "2MBQX3idWh5iW7LC5BjmvfaHV9t49bY91pVZirbX3jyhqsF4oGfY5q85qyAoCzQTKMDq66aJt9C1rhRh5U22Z3nw",
  "key20": "2ysv24GybEj5q3NyBMA8DJkTHna9HZTagdP9ZyEz76xtg6xpPeBbQoFn5zFSEG36opj59zFJDf8fPh5nCamw9VAB",
  "key21": "2hUBKE4TehmvhVeP7MMDV1Xc28w9VrSCaghoMeUPVo8UbpwBXXJEkVqiT8KUDLKQ39VfiVqCWbNq1rK7dJjFSrw",
  "key22": "6537VstfBNtCHK2xREzNtGNSndkEpYLHzZhySdsJL9ZrjmWmxH6ByAVerhicR1WMznfrQx7MjUju4pKRjd1ZEqof",
  "key23": "46914WtjiRGbAJNCK4a8AjZGPfgqvDpdaXUSVmMpx8VYJefZMBGyRPnByyecc8w1SnGtGheyGJ8GS1KVj7bQTsmU",
  "key24": "qefgXyzstBCaKDexRBzxExCsen59S7UtxqF5VkaLN7DPici6RJWaxejUG4LEpBbJTdUkbCS2LiWHepYd3y2AQAP",
  "key25": "5gJJpqXW1jjrRyebFmZunHvMfzFgvHUu8bF4UNQazJUpLjGngaCCmeiJLzY1xNvCvrvQpCr5YLJNBVRaGVx86j1g",
  "key26": "24TTXYHMCwwwz7AamYtNNh4jmrs38zcRLVckUY7SaFKPy6Bxfd1P2aoFTcrDfijWBwLgA7HWtB2e2AdZVyhcBvdo",
  "key27": "5EH48LsFQwKKNGoeYNpzRm42r3WbUQZPWTvQDkm9zJJ6pwuJLEDMfZ8v7r5VsbXsqLoYn8XZvq7Xr8kSRiuWCE1P",
  "key28": "5S1GMN26pcDWV4nsyp8nnKk9pBrxm8GvtpB5NNcjdfo6vtCukm1VC4SDJurCQ8Eui6RQ6XLnXjaUCTBjUXcLpH5m",
  "key29": "ZSyZiNDPgw2JQs7NSvu5eePihxfBUH9tuvziD9XhrLBX2sjjCNGEJcHz1W3b2Kn8dLphXgndS3uXD8rewzUmNBH",
  "key30": "4praj221ZicQdPLZYbHHxv7phnwymV3HkPe35EhTjqxK6RHzKh8g4LdU3p7LPXpaVN2p3wL1jHmZQtmpNcgtzimG",
  "key31": "2cdJ5rqNmMNkPAo2zEYygVEpmA2vqNLriUfoMcbVEduQZ4vv3eBhWRocJp7ZBjgfy1sjZ3teCXzoXuSvFg9M3TBf",
  "key32": "3PZXkixEXVJ6Vi6T84Yc5wPvXuYdtvEKahWMDpXY69M74w972rLLDsVgoG4qyr2KPzn6FdxmiPR6R2KLA9FKnXvs",
  "key33": "3cuNtZnLtAget7wgkdRo8HVQrYngdVcWuW7osDWdiUfpQQdtfixX9cx9u8KVyhDYukS7XcZM3UMHTMsqQmy8egQL",
  "key34": "2DScneMf6MbL4uDJDCAk7uv9fb7KBNJovpPPGRwiGLdp9VeSApvkUUxjDtKyNutHpMHbwssL6TCSpzqkpGEwuXk",
  "key35": "5qYsBZeaZ9seabzgy5t5AfDwmrCKj8XFqwGVWAj8THgRi3nsP7Q341nK4pfVoBQyDPAMANGoMrkramHMkmoNQxgr",
  "key36": "3b4rEiDr3wesNLsR72nzjQjC2GhEs7LVtdpDkMCfCf2P8cNZQ142t3tbHEsDg3odo8X8mmmYga9xqns33mcCCNB6",
  "key37": "5C31NwP6sURSXJcMhtuS7tRfxzuoHMeAQiq8tWL1TdrF69bCrqHJL8hWzJypyCPezso3xsFZbpaSDmpWTNmBaik2",
  "key38": "2ybStu1iVwjwvkBCwEQwSnNty3VpzZMCRmmb7dFo1NgV6xTxYaSPXG3kqs4kuqrWhgnqkhsmWxfT9Phss7HxVUvU"
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
