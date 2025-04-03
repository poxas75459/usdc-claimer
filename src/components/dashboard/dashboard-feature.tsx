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
    "3gzxcsiwsPgEttLKWjTuXSyayRYJB8VNm53FtuSYH8tX6Ch7D39vVBKUjtLH1zUpFYvjNx8HzpVL2mz5YQiT6TL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QeKUJAriaA6jMRSMtJx8KVLcMjLkyMuNRqAoHup8YQoAfhkrDyNo81S6vQzNVmpGJbVLbf3hzUKNT3qEopqF2EJ",
  "key1": "NcRduF8vRWvAJafwyDkzma7AKvraHL8Yp2w83tZN5fTJ3PQDfYTEKouMucEovhJvBF9YQ8dS6dfhBhXMUbbGUBP",
  "key2": "5T84PQeUy4na2EeAspebHCrZnTbuQLG6jWFKsu5AAefE8JmZNP4X1g2WvfnCNNyLHLm59SAATApA5Q6ei38Uv1M",
  "key3": "4AMoTTnPfAWG5gxXcTK7dc9LeGvs5YqmSoj5axeh5D73LHgL4g59xCp98tZQdM16cTmNKx2vMCki3R8CTEWFC362",
  "key4": "5DpubJmadFXNgnwjTpwgd5Jjt1C8YLaXxSx6Z8CVBpAS8LqPCb3X6Leyi6yh3oaTTujbgEyWwTJsAroPm38btijY",
  "key5": "5vY5nJX5DJHh3NzBm2LyzgUYQYHw32mJv3cE7YRv4Pvgms5y5k8RFpwfNDnk2hkH1fjwDAJ6iDRb6izCVrLSKYDS",
  "key6": "41LcNyRxUq8V2qe2KV4iLdycUyh8hDXBcPkY3k54iNrZJqct3ofHJzsqWQqFY3TLBtGTuWByNAeAiVay7mHHbkA9",
  "key7": "RKsJ7acZLbJddrdqjzmGiPdcQoqHgzHkyNoiMrxBPfSBgjYyNNqded6rDfSmWbnXo6rAPtZiaJUG2b3FA8qUSgv",
  "key8": "4EqmgKAeqKViU6CB1dL7P2x5nQHr7AVbACsSHXaYYo3e7ZrH61HP7UxQBwdsV9rs16gmHskXSRJXx8hWK1nogaDw",
  "key9": "2AUuf45dXpBWGWmpVpz7F9jfoom9AGZLZKpV3SvmaPdF45oMNW9N1fjT4Uj2LQ2X8xcPd5o9njk9Wvzobc2JqaJj",
  "key10": "4kmyjqjUrBf97Z2Y8BvKN6NAZoatUtiCqmdmZtVHBNuX6yxvNcJGg1jXN2pUZap4Fby6MY5rAC7zWbhuupxmEeeR",
  "key11": "665yvq8XsQQkAdiPzjBZFXHgh2ScoFo3hpDUJfMtcwQsgvGdJwpbP5BJDhsXKrugCvT4vDCpjbDHdjBd47b7A6GX",
  "key12": "3tN4Y9D2EbjvtKuhe97LKJc1KH9Q9fuvTJ16i999ECzFgJ48nkBKmBaCsDGaBYRKiZtCf1axeLWng4qyDAqoNc78",
  "key13": "3qjhx2uDXfGQh1vWsWyLqvzyWuuhai2yRuB398Hx1Lv7Xz3zY7djy9pKoMfw9BUiQvziaib8Pvg4qgFgjRfwrRKQ",
  "key14": "23qYGZag2UNZHbmS2NvXNgxc5AwaoQRr1DMWmshMYRDB8Yfceda2CcyRcsH9ubPisBULH2CbWs74rZpviTqS1opg",
  "key15": "2GtLYMWfg6Tm5gZ7bjKGMjiSKmuMn8PTGqLoG9jvCH9JuQo8MbwnGYWQPmVhWSVzgPif7DsQm6cGHNKeJPjnqHb",
  "key16": "2VK8YvD1Q3bRWSuFNfjCvJVN44p66yFK13AYZQCFYaF3XTChHib5ZkRnxp9RVz4pyumyt2oR4cPwnwZmCJbr4WJF",
  "key17": "tUcroro9429RpBEypcubipJEdDxBEEqVQiXu1SBLeXsMGFG3nDiS4Wwv8tKFAjDfYn8Y6U14YVcK8Ujg4sA8rE1",
  "key18": "4Thd57kgeyRTdVbA4CPHmoMdJFt8zU6rxH3d2X23R7x4Sdcii1YSbcycM9aR79bHYiRbzw3Gx7Zk2XcokdSG3Sjp",
  "key19": "5wnfLr28P8E57Nt2evtC9Gov9FaqcHWQQKCtjhvVDuQXf9YoCE6ciNmq3CwnhyAEu4ecDXrfeZRLQBdVGajXRsth",
  "key20": "41bSCQVHZEVpA6fg72pkWqQhi1Ywpo5xdg6Y7RXyXezs9P5zTcxxtEYX9gBLhYJtRwoU7Qc2xwtyNMdD2APjBnZB",
  "key21": "38cpJNGAtTcjqjiDdrvY62Jducg8e7Gq2MxZieKeGJH4tZEwDqtP2onLgjk3tnxYJAGo1PwHgcmuC5ahFrDQQJ7",
  "key22": "rk7sCmNdpBs6FtRarnaEb86zwCVoSxdWc85UHi8pT2syXaeUyMGF5RFkVHGYzdJVeo3rcCtYBSEgeCTr751w6pB",
  "key23": "VmCHXZAMQpZQvCCk4ecjjAA82syCai3vBUwSTnbP5935QFcMDgmwHZ15fcRbkSCgQ5TCPaXxH43NUvmNY8J3Z21",
  "key24": "4vPgbdtRf7m7779Vdovg8fsu6XMmKet68SsKTrZsaPQAzfaZy6J9o3WmQN76ALg46eqdi72N4GrLoNMSutwck72Z",
  "key25": "5KoqYQskbWZUFuhPt29ZMBBe98fNe87iVR7E8X9yjzvncauuxgzk4rZAU3WN3tzgc7gKPQGYH7HVU61roPYHQpna",
  "key26": "kHqSwtjGmoNUJcBqFUS97WQtpABvb3yjphceTqM9qqauMnuUhu9VdypMNgHFRabCTkREpTbpV5cxnHAQfzqj2DW",
  "key27": "3n8Vj633oMEewNmEc9kYYwPk3s95AU9gz38iadnxfnpLTgWS9krY1GT1HgQtJgWXyL7P2VePzQt6ZbYNZP6Pxbs8",
  "key28": "k3jnHoU7ujKuNsu8UxkjmLcHZnW53ZM5h3TnpXN8RksfMDUdjrfn7n7V4g98hhPsYCTbscgwfhgD2CrVZ2pJkmf",
  "key29": "5tMajZ28J5TzWBRrSiuat6mXkHBJCovZpAfUZaFDthaxK7NyvsUesZLwZJ4Vv8NEhm3NwbBZXwHp6Ka69aTA27tE"
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
