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
    "gWGjC6LJMPx7kNuEWHJ9reGEKt81P6qJUXgoYBDjGLADsbXBtqXKN49gKx96krhaXT8aWXtCTXB7jHMrBfJJZSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbvH63WGHJQvyLjFy9UeRAaPLYb3jdafwbCVXgYF5MKAAVfGgU8LrJAshaW3DXt1HFQg8VUiPhpZq9oFiEoAUJB",
  "key1": "PwSKy7Da5td5GVfvGtZqF29Rd4TKFxnobwjhyeE5iPzEJrAXudNjsxsLPNzYfzvcuUd6h9FQkH7QHZwMUXSLp2f",
  "key2": "5uhFyDMhiTPKEC1BSHJtkXmdHUjp9VVBCYF8BX3hs8WomwG5qEhGnXEiVrzQgCqg4u7Fa1uKuPk6M15M98VyyRwP",
  "key3": "wKggsRW2PJe5QXvBtD8f6SZZwoqawpQrt83BbAWGm9FmBXueGBszYyDDU4oibC9HYoYjouH4hVxdAJPyT1cmzK4",
  "key4": "PyrsJpPpdVRdKmbbNU8E3CEXpZ51DLfLx85nDsLryLZePsiSJ5m6wyHxq7K2jDshGRsU4VcZmHi51uyjVQGbXjm",
  "key5": "4BNr6XKNXUwAcZdp9DwXYEV6MYFY5gKaKrBefBUgPYiEbuUXtdCGLpBo35dU19jALKZQ3qChsaUPVwbCj6LXYjNj",
  "key6": "5duYaUPuFyx2bDraTg9PGzsqswoXxqUqVud87LkS1gWywNxDaA7dR5MAGj6USp7rg66v3Q3Yncprh52w4HvmaEza",
  "key7": "37c3swq3S5PXyTGeKi7vDsQdMaWYHQeM1V3mgBVsjnT9tqiyNTpft2rKWqjXWM63tRUKkEJ1JKgcqExYBhYGThcF",
  "key8": "67iJ5E8SxWrohAY3XkwhfWB6Bqy2enjvG9EDYaqcJzYhnY56aU99qbausjeCSDrVzWvKUsWfi1ZaNJ9xMgD3FtFG",
  "key9": "4PDDsXw6fSPSgkq2VEdLJyP48KQBRHj3U28d7Yfh9yaP9FwXCYBCbAuYC3hBRXRVsrtnNNeLW7zyYhbcjE4nj8yD",
  "key10": "2RQ2Urph9FRFv2Vw1NzWBT4PCYdM8fisHnwDYBW5JernjFoqQCG71vUYXHhoaEsNL9SrrusEqm99WiJQd6WGPrGo",
  "key11": "2ThFxCb5MnsrhjjzwU4H8i74btJTfBC1oJVfPhKbGosfEtSyu7TgL4vdj6gUmeeo26TF75z39KVL9pmNsUzwZgX5",
  "key12": "3KFRkEn2dqAdbBdQMYSRBq8CdCMUxWLziV5KVrCs7sQdDBJ2RUDU64B1T5FV3ygDUQTPYPyBSUy32P6JsiyKVejD",
  "key13": "5TBUdVstiRyRfSSHgGqAoXxsvsNUjnXHDyTZaJqiTV9QC7GgJACKby1W65c1Ks2pqhuyqcBv4tr4vp6NKuuBe7ht",
  "key14": "2fHHLGNBVyRPtZor6nRfHJiJ23qNwaruskzSiU6nhA2fJ7LW63PEwSy1nALUrQB8Je4CJvvQMts9z3nwKTUR9vV7",
  "key15": "4LjGEWbnH8GJFuUgAn4G71MQwVxaYJv74XXchECmBSDCSnBBuXsM6KVxtDUUDY7qc6EA8vgfBEqe7qUMigFfHuhk",
  "key16": "3feTgouNu5YS27K1k3dBEZhzdYr5MCX47ETYet8bonnbsMoRV4dYqp2wQNdUp3JC27XLSM5jECAoGqYG9t6F5Qz9",
  "key17": "2LmFafHuTca1kqfyFULPGdzdKTGvU5s5nHrj8ErLXfC6fJyxsMZNH4o1MRwAotSfjYiqTdVRwA55TJcums2Gfx8o",
  "key18": "2aoWziYoRo5KAh45ig5SgUYa2yxY5dY8QSPE1Mhme2wWboUDA3uhQqkhE8qaHzMNwib8xLvULxmebiuYjtRStd9M",
  "key19": "4GYGqX2zmcaHqqYtPZoUa7KLS1AnWfX25cnAHVHBjXGCRVuECZ4C7fi63Lpj8viDdiCQ2uMD95AAHuZZcvQGYSmc",
  "key20": "2G25CpTjsTUbTEMqB3cq6JPamR9KEXD6qMUnJ6yRGKDag6DAQKhoVD6Zxo5KHwgAp81ztJ5Qe5MUwJPyK9fz4pM9",
  "key21": "362KyxLUFiVpnJsfBCmUYgPpzPdzEJf1af3mpiHuXt2amgRkQcpkpkaewKuCwsoFJCawZeMNCZKyqwtqobUpPPgU",
  "key22": "3UN7wQm6uhvLyqLMw34k4fJxwKHcyRrMrTQendMK2c7C41Wusc5EACaGgHEpB8uRHLvRfJUffRFWUKMQoMNzBszA",
  "key23": "NGW1xqxNCAaoGFJoojwXcHsUH82LXqJ9oNGNchQLZr7MkGbgBjcFbjbeU9WQkrgJWresVNEibrHAwjh1wQxTNEX",
  "key24": "5HrvYHyf8q8Gnt3fwFnRP3Tdwwx2xq174S3si9Z1jhsg5LfGq39WTtYvBAd9t45m2vjNo2YMX3KEDJtwJb8MG6A4",
  "key25": "46bBG85fHyPqUkyYPtHefWsniTF7Q7gcp4US5kDpw3urHLr749kZq5UYVe5yUwcVNKja2oBEnRPYZxNXeZX2dkat"
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
