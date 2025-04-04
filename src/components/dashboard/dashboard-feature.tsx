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
    "4BL7qRyuzuRsRnpitnm5KfxMfzFHukK9eeyYKw489d9XTuiafAB6Af7JVCcMjCnQoSY2Ap7Ahcj3XsTW15DpNsRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpEXywVFrbjvF5tsg5EPiJEpTG5gYSFA7LYzHbGHKgBo9oaj8F9cmFxnPtnQbS37nkGEBA9YnNUGRcB52NMLenL",
  "key1": "4yv8as1QQ6GQiAKuYA9aathprXxu5NfRAAQkwcf3tEA1ZJsLdncRPQ3eaCWYobDCyKuruNVmdf2kjeSbdfFGijMu",
  "key2": "3HzDp8n4j8aqqAZ2v2z8C8hKFrJRnrfwjrUeidQJnyuWxqtoYmaVfv4DMzSdebuTeddFAGiqqbyEu3zrG6jMPwhZ",
  "key3": "3ksXaELXyGh4xhN1r572hQ46kabT3kjyufXbeHhZJDCFyZEZptwNucTsE9BdrsajBJRPvRkTYtffsVcFdoAtpJSB",
  "key4": "2pzR4mms3nn1JRHWPkXXapZ47JeUxk5uquEqEYes7LQLi4BBpDqkypfLVpCyEXZN2dfxbJR64HJKgzeDHTQNyd62",
  "key5": "2FCiwETDLinPZRqBMH5gCFZvemmsZRvsxk13Q9aTkHZiRf3rGjmezAcVtfTCgNaWD7h5QhN3SpoRRTh7dpqAyq2f",
  "key6": "2HEsmjuy3tK8rTJQWFkxskoe3ibw2Vn5NmmgcQ4rWoWCLr1kuTvbtFY9J2wkDvHXETnMCXsRmwiAnfTZHsuBM6qj",
  "key7": "2kFqHsg4z6g5jF4RjKVbBvMV59ZM6WJniqwp4KbfT3xNmSfxthupKL17K9NeyndGxKoQis88PvPbHR2gEFo8Gf2T",
  "key8": "2pcc3mmyiEaX3WosNkv5PmZb4dao1mxq4jKcCPgVxJu7idhVj6ETp7hcvQg1W7utCJtWZaqLA89zPafCDPjMaDMG",
  "key9": "5Vz8tLt5zhamCmr6q5Gqd9uSDeMbWE5erZB5XrZePMKfgLDicajtu7r8U5UADKeAnNVqkaTB7Ze2E7q1v1daagSK",
  "key10": "2c6tLaQxzDJTssySPt7VkZjFLoaegAdGWBJWAY8w9LohjbAnCSXYbXBHotu9uRdJNFGQsD3H327C5wQxdu3RmhY5",
  "key11": "4axchXuUkVKwrbG2guuYUBExqSS4FrkAxWUWKAk6KH7iPxyskGntFDsgsVvfY2nqH1XvHfdSgW5rqz5ovZu8Vjdk",
  "key12": "26gyqHTs8jEzADsbKURj6BjAMLxTcDzu5nLXUYmt7WxyKaE1Kus4RRbhZxR8G4ZxknofNz1uh6ZB2SD1vtinUaFD",
  "key13": "43kV35FvGCsAAKcoFW3YjL8pBFSLbZ68gSdmWZ1AiBBcUHQLqDm3AFHk2N2qhFqKZtXdWtHAXuG6J7mKpTy84jbW",
  "key14": "3BHXciKwXEezEm8noYKs548FricF5WrRNiedcqRkg9fqx9CPN9UQrP8L4eyrqDVwxMFptrzV4jetAbF5u6bffHni",
  "key15": "4WyTH9AMM3r9zrFdjukdMpehaSYe5dR14E9Z5WQuurgnLeuSz8BCiETvRYjL4yPm2KDXFAxtu48iAoBQhP3uXa2W",
  "key16": "2WwDEigLiBr22dJqadoeZffPy3iGybijFQWK9FUf4w847cEvJ8hnyB3RBb1etZLcU3kakXscz9qtcneX7SoqvuPd",
  "key17": "4fVPAUxH3qvhqnw1MnTM3Uvp4CuNWv6UpeVFGiCHiJf5bvmfCBnczDv3hUKW2VcJNufFzzUEfygg8SqBu1oembtW",
  "key18": "3emmV8pZpVohz5C3PgX4M1w7ibemSaA5NYPmceX1K6hYxhXTix4rUVBt2dnZFVM9aEprWByMgUqSCLAQ5pRvnGfC",
  "key19": "4LNphUef57pvFw2o8eyLAa2TeadsDuc7nULL7R5YnkYuSjpjtyE8qkCh88x8XYsvR6DgJ6K5XwAvFfpRYMYFTawq",
  "key20": "48nuRFVzbgdqSbQLFwARiuEk9xo1TmG6ekkL1NaYJ4jyKyAjCfsuvtAJKQLxinZ3ozzUhG57vpWeirDfjFj361CX",
  "key21": "3T6nGByMvZ8E8R8mSq8PdUSDmeFf3LLky9oyBc1QcSCcSHZpemMrJqdvvYfKMC4bYvbyRTKZAYSrytJCWBD8SKCB",
  "key22": "5eqm5gTB6xBU8fEs1W2jGKM5SgWW2sFmT3WoqeaRAViWFLFTk5jrNbtuwR3qJbPZEGRxxoGGuuZUJwny8j5TVTnf",
  "key23": "DFsQx3S7PDZEkXoWksvUE7zGxtyfvwXxMMrYqHsD7UjXAy518M5GrNCeuh1juaxhMbcvKS3eFxkPSkuB8oG8tZW",
  "key24": "5Xc1YNRTA2srq1AkPCRovvcyp4LEA6tdCsvBmis3H3sfRS1oiJ1SuPxc3t1ji1Spw9337NwgV2RvbRF6SeSsigS1",
  "key25": "2RyHhj742CnnjFHYAzuDmoivXkWmSsXkTwjhyffF3hjFkR24XqZR2i17STohAM1u9TXnRMMFERbRAswAKKPC1W7a"
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
