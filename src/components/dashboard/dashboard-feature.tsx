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
    "3izWCmv31EZYuhMYfpCzz6NZhz9Y6VySfCuaDDNQ2woWSTBBap9T6wE9dr3NcsFR7PHtBedFLWFQG1GBeS8aeXSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aTq6gNVkvqoQWe3UUKipi1Mb9kai52MmEqYPo386kFwzcykfGTSbGRF3QbFQwigANzSG7Fa8zprNrXe5AH8LyQd",
  "key1": "4hDzY1YHokEH9UR7w9zACAs376h7a513z4zRCwNV7AeXBFC5uBQ2cohfKBocXied6UnernAG12M2MWPP5tL1gbYW",
  "key2": "4FhptantkTMZBidEQtbXxQLDHBeRNsggs5kXTSSidKNe2Zj1ArBH94UqPbr5LJV2U1Hghm5gVuDevCng6QVSx9wx",
  "key3": "59JEzuZhRDfEmGt5BAW97EzxZTi46MgxGa2gxwUjmVUEuzXZvwbM82peNd7PXVo1QoW5s669YihFkdfRnysJCvLG",
  "key4": "3RhGfi6nxPPw6AVkiDLVc8Va5xmCR6CNkmBZhJ5nozjHFnqEgMDdtfYQjPJ55AB1Qxit5xLyuasbW3dSCdhYHMLL",
  "key5": "21Amty81TgeARZz7w3QMDbmDwRMXFe3nVuPVUeLnwyUN28VEEA16LnqDJeruFuZ5WVFdBNJZeixvVBUg1o88pVYb",
  "key6": "4Qh1uvFRyRDvbkMVh5nfHxGFLofUrkti9bYnCwRdmc3J26Dn9fwPGJWrJS1BjrzESy9YDMrmTMLF7Cm7nfwp8KN2",
  "key7": "sQkrqVvW7H1N8bfHj7NsAbhmHZaY18zXwWSKMCsfE12hZfUP3to1E2cWi6D4V8cCjvKomhSVAeb2fvY5x8hSoG7",
  "key8": "37Xo8h8A4z4LyWpYS4sTsuaa31EJZJquXQ5qP8XEzwJz2UAh4nTFfZ6zAB1N1XKs7WdPRyZqvZXrMFb5VhP4NcW",
  "key9": "2TxrqHAHWes4ogsUffaQQfjbRrFASSJUkFGG85AuksW4Fs1371uABQeL8M9aKc1ZgkQM3rqFhjc68w633wuuJA3a",
  "key10": "updpX9LWFtmk4idjM7N48SUuDzUUo8NEENZZWYFqS9TDkK4NDyZ8BhMNYihoHaAkpgogGyxWRt6kA5zGkBZNPd5",
  "key11": "4WPbZahirAos5ZWG2DRnhqL1kLAbZmqxCzVFXehUg19pi4aSSduJ2bsVhekGX21czgnXG3G94665Tt64L6Vu4ZCe",
  "key12": "5emN4Se5ZJ2He1wUJQTc7KtePBr9CnKeGAzUQ4PwhgYbfhGtyzgszomVXvSwfJiaWNmdp11rKSg1vgANYrM5tUxi",
  "key13": "YxfEL2Lu1SSXTi8HJxvwNhwD5s31VEQvJqADtUPB5mvcFRwJUYGPRVjXpDnY9yoB8N9Ne3ACP5GNPsQa2tPdVGA",
  "key14": "KpPwz9EeH4kTaKrfapuDwxEQzpfuqXeEhDxSZuzgR4rEz8C4pCcSGpz59zMgaC7mUnv7rGsCBzS3qpaLhNpFgT9",
  "key15": "4vVaqAjqd5zkrhecjuqBGX8N29pv2yF7LXbqQPbN1BppFXFFe5oGpFjEXG2RBjQCuWHzMQNxJgw6DnQfsxYuqy6R",
  "key16": "4PMNeQWqq2kpTEMmBd9xXYj2NPno4AmFnd34ZUViNzoVRYThqCDds7GnRQ1pW1mDT7ScwGrEFkEbgdXZt4ix1zxG",
  "key17": "2buntoVv58R91ttv3PsLfg8BoRisn5rHZvzv8WjnuoQXKaBwFxB3meo9zFByaMfEgyaaYghEnaWn1RaCYwwfQz4b",
  "key18": "3H38Per5Y9J53zFbQGeAyxcuSeYe1hC72xRWkGWKGAHnWdKvxFd8ZTmVVorLi4pggABM7s31eNtSQHV7QoMu9jne",
  "key19": "mf8WaqzPT1Z48JKbSXoDzq9rCBU1EdqnUsFM5tbnsTxSHU2bUv4xUhSHBsid5SwnFWNLu4TSK4eZZpdUWqbsqvC",
  "key20": "4c4BT5UtM1BX7akyXhcbT7Jnk91rqHFCCfXVPqxTYwg5KUBd3LS69cZ9G7q8t8Yoc1kCfAute5CVGHCwNrV9vmB9",
  "key21": "2duJBkbApUsk3Chc7BhqPVPNunCJzscTS7PBMRiFu7jqvm22Ggi5zTXJyE3zaHZ3BAWLsXmeUBGZbW34gt2Cioze",
  "key22": "2gYrtbPnxxcQGhkEGTKAGH9Mi5UQJuemGwYUPMQwgDLT5xP4stpCyJ5AE63RgnDa67MDuxEyoL1NQCWP8AcJvuEm",
  "key23": "34fHhnyXZtH6rnUhFvLPaWbrvQNmzC8XmxtKCMoueZHv8dijW8YwaJd7CMk4tuhKxH3GSuxZsKvkwxRwk36ZVkY7",
  "key24": "5aTyVG5Bc3TJNBeQ4PSvihrcS2v51K4QtJyEotQetA5kRBJgkcVvGY6tyvkbKSE5FdP2GDuEyoEmuQhXWSPr7MxX",
  "key25": "5M1mKimABZkZkuTBHLy9rymkw9f1mQwVeuPrVYJkH4wxeJF4f3TEBVQmzgujZqXamsqQVcUH5UuYzmLRqMqQCL2x",
  "key26": "3fPMhtJBdShcp3mse9pD8QfvLbN7pczq5xYeTfqS9T4Qoz57YaZNj6ggNRuS3rtpRLXtFrXvzdVrRVQyLTgE6tPA"
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
