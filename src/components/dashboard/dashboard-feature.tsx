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
    "3KL2mgZioBmdxtfosirGB7BoH39Zd2aJf8tnBr5cxFmUtuZ44mQeYn3RNMFkLY1gGSApVFGUaNBBf7Fhk5bk9ibz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61DJgeU8UNxH1P9xZXsnHrvbgMVqQjax74Uy9zNcmJXjpDWmKZuYaFjVpcTFbPoEZuPQ7LmRLNsZXk1bH5Pbyn3y",
  "key1": "61YWRCegYbb8dnnCfQWEEYRdfboBUX2iNmmDzkZ1E33io8mMMpHBkxvKaRCLXYv6BVZ64cSvZmi51HtgNKc3aZZD",
  "key2": "673uJfGMxDU7ptyZTzuBP2jhKA2FU16omXwi1vCeZYq9QPqmJgTBLog7Nc1uGhVbXnDxvCk2yDJkHwoqGWKhHAfQ",
  "key3": "3YGypZTrbDPeUgLJi125uaa1ro4TcGGQNYPkySsHbFovoqKHxT1h4UhRVL4T5QaXGoFMZMptRQN5nixGm6XKGXHz",
  "key4": "5TWrH9163fm1qLQtRLJWTXPA3x7d3se1sGEXrcYxhUhRrfVxtEmdTP6bUXHGi6TSu1tU74mCNjUuZqySUzhyQxiH",
  "key5": "hEQ8TuYGmbCaHaQimupmJUALXiNNSoj68n8pzDLwfEaNAckS7bKHN18svBjaBgkgAE4z1VWW41EKsP1n9uCYuN1",
  "key6": "524EQngSJCeaNGJ2aysZbWCJiR5SJzFMLXxK8Ar2npzkXX4Mpkce9WfjvXqTUaw9D7AM11GxCRne1tAvaRrsa6Dp",
  "key7": "7tZysWVmY2BzK1LJvGLApx5kjUAmQNjNnmY2YJG6LQYGRpa1ayg7rZ2osrLvVAey8MnBGuXPVdE1BTavNQjVDxF",
  "key8": "4vcAzuPBwkzfvNJ3EBVJfwejE94yGgFyfKMS6T3Bd4SJZJ1xCcb8H2hZ4Pf7Eoo5vfY5RMcLs2XqYQKqCvRrQgLQ",
  "key9": "2kRMCsPosBwMEajpSn6xQRooGBaZ9hFTzCRKzRDubxgEe6MFxgCtQ8dCYRs2qdx5hPSUphMnBAyC5zB4P7gsFjAF",
  "key10": "3HrYbc8Aj2KtgZEQFh1bEp8QdzA4QMBMXWfjAYvSLF8sk3zGF5U1N82UxCMecwxCubs16MWzSpm9g58qLt83GWXc",
  "key11": "4Lj87TeBpx9iR9W7h65xp4DiF9aPXEKSUhLeduvemKDKehnjF3CXrm8xcZXmXSEQhzBTAgfUvMP22NnytqdYBzom",
  "key12": "3e7JQcZgdh9HSaa9eJ3hr9BfzFZ1H8fNNMrDPaa7VHft79Drhi41Zb6WrnUsPZb13P7mtZAgwJYLGiJLyDF2Jrji",
  "key13": "3DKdacrtSBdTpey5MKBap23HrRX27nWryrAbjUJUHT3WyqtG2ZqLPm5vmtb2qX6uxeS2QRuMAJSdSJALQwVSNKx1",
  "key14": "bC3KZmbu84RdNNpnaBcQTP68iCHp3VkLaxhh17gxutfdimbwcQ5cuStRuhkzw42iEzMFE8ubxZw6DCGJACbjKK5",
  "key15": "5y4XwKFscvES7sYza1xbZQq91yFoFfxxUoZNFXc2NDCoMB5GTRgiQXmULmkQfU7EfKC8Sja5LizUSx3mDres19pp",
  "key16": "3UUKn4JNiyM8XUQHuM1C1qt94oX5ao8oCSNA7vp1Lhg6VoNQ9qnSyti56hq57gt6kp38x6vMz558DftSCehzt4Ww",
  "key17": "3aEtGXitoH6EcBkocPKTXS3unPtZxkcZ6aCwE3bsufxz6TtQVvvoHdBPewgAtVn7EEV8GNSMMRrZvg4tEQkxNWin",
  "key18": "3gkKBzEyvsotgqNQVhPbcjUiQ12wxDiUkMzjhv9N7MsVCMHoNnC2i6KVrKXeKZwzcztYBY5d8etwTLpCpoifjrod",
  "key19": "2JEPQN2KqH41c2A4cS8nh7sYLrPyE5ZrGWorXHFp1UMLHaFYCLtRGLzzZFJcHPwfZtkh17Lah25FKCaiTdCVM4yU",
  "key20": "R2a4wXA2b5bjrqN7NXW4H73mG56Xe8sLbM2YCsSf4fQ9A9ijcbfF5bgfGx9UUxQzdk5zT4fgjTYLRJGDiZvRnH6",
  "key21": "3tiUpmsx453bhhQ8XrGSH1nmQoHuPgFXcm9xCHwyo1cosbqoHGVP7zWiCStE14SmHzsR2QropVPDzmCtU2icDmNa",
  "key22": "2tkLd3qDoM3oGcFtZQM1em3AbXY1VvfpoiLmykBJkcaPDe6zNEvbaNcM2yHNMGFzUGCYfAWJjGbDbbCFKLRA4FL6",
  "key23": "3aWM148tWA8yLZttK4vE8pyhZ1XCzaCnWVxj3LEcDzrHwJx4XEHLi8BieW8HqJJPcRfvGXVPvWrxJWd2f5FwMSjg",
  "key24": "3QS1DvnMS4P1JeCh2yxJUdWH5ZPrHTgn3rBVWPXwfPX9poHXSMXfcYm7tTmzfzk38kdpM5tL53nyV8j2FfPwnEdB",
  "key25": "3UDxcBtDcGoXgcmy23zMVxmZPKNpgw1ZadzVwheQf1aDaFuadUpfgsykRarFBzB8XazA1CkmD4gLGwgJYJH3mGH",
  "key26": "5inaCpU7sV1nSHEEoJnp1wSJJ1mQZ3Rtkv4iP9yfJPN1XYFj1JLZe499Z4QKx2emJqjGRh1qhN81MFrzJQKB3u1F",
  "key27": "454379REArGEJNXAtVgSvQYaQkz6HcPWeaDsPqzrnEVXsjTraHv2DFnuNW28zEbEFEjy2JQt5s4sq6igxWMdgA86",
  "key28": "4y5sjapGsBEnnKijvdmfutzeZLN75LYb3cXU4QwkRc3CmWscahuhXgA4ztdRX9gZhisgfLX1mbuFtVJReot2bZFs",
  "key29": "3cpzsypZmJTErLjSPBVAth4xmmPYPyRnEvYwE6ctYojpR1ZcfC31XkMzQitNXWjmLyY2vuSQgHbf9hbeqymPiYys",
  "key30": "5gkeRGDFr2vat3WUHj6J8FCNURbbDXcPkYhqWuDRDp3XWyGHjotmFYzkkzqssPnfWLbCebuN8yHw32HVrqMeoZRT",
  "key31": "52agF9QpGYFhjKvigbdEVU7P9chMjHcogjWMWAbk7XRnFy2B2uxFgEBkPQADuYsM2ph3RJPgDGCAoYvSPpBQ8RoK",
  "key32": "5poBozCMzdjZKaeiSDKamwtx1zSLXK7VJ2a55q4mzC5kqiG5Tnzs7xRbyDYxPiBWsK4vKjcSKFGENAEpjfibg37R",
  "key33": "2BNwbfX4fhSx7gBn1kwcr6ZLUEkyxufoUfxhW5NbkHhCzFQfygnHsk6nwWNdPCHnBK6jfem5PCVWYkFWvqybd2RC",
  "key34": "WeetxAGRr59mcSyXbkC74CxwhakDAFfKcBSQFGQNEFszPvwzcBFEQ5xtpuAK2fWVV26qUp1VAehJLFT1Qo8K5yN",
  "key35": "jDXfYp84pPuD8J7qWH9oZ8iz4Xpgc8jenHEfZpao2m7FczZ4yfB4JsANw5sJhSvr9wmczobxSrTrJvqV2AUcfga"
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
