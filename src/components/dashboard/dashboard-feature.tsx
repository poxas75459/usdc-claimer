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
    "459fu3RA6z8CVpQMoYaTbZuRC2UB4obqr2t1c9JPqYdHpFyqiAow9sHiC9ixnxRduekRS7BRjxgUAEXM3ocRcfqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "675UEjxd8A6hLEDPX6SpG1hHKkMTAqDY5j4sgba9gVDVXQLBK3EBUcJZPwseUeRbFK3LzcmnhtfA6kfXipKTJDjE",
  "key1": "5hkxrpYQgCMwfHfunHfXBoWngZ3AgwkKHPAEhsWYh1jTeRGsaj2e51yKzrcKk1gKf65M5Sx371BTeqYtSiQxFebC",
  "key2": "5MrCT9Z93mKHBpicsFNyRJcpFjXgsX6R77DDxJFaskdaRUMGtoSoJqh4YPpJ7CNYhf6sDKkVuTPRUe3d9oUTZtnL",
  "key3": "2vcKmK3TFWXBtwTzrULURLNr7isDVMRj7Q1p3Xp5TLW5oEiVBwXcf7Zx5ZVmZrpfsKK1VtDEbD5ukXob8noxP7yS",
  "key4": "5zr2uQ8x6Xo1b7FSuZYX4Vjx1t8ZTHDoWFHUriVN584WFDemqLd6dEjwFFTsjbepx2Kqp8J72DdTaq1aiNGoTqWn",
  "key5": "xkEJt2C15rhxcY2n7ZaLD6C5KuygR5u1Q8GZLb1Umjkn9c83DKuYXWLidYM7SxWAuF2nmy5USCnf8Q4TQKCXpyy",
  "key6": "4WzeRscg7dRXkARvGvCWbMGXf5CYzFU5GitSGzfQtBSzW4SEr8i4gKU1YGSP4UhB8U9XBf11PZDbTc66UgYkRiAi",
  "key7": "eNJjmXeTaXdvPphw7EPLos9oxZxyf8Q5f9YFyWuLzHc1bsQSjXRRneShXwv2kfQS8hu1NMLe6n6SFxMxgofhnHM",
  "key8": "4Ag74Vke6SWpacKzBt233ae9r1ysCSDTxLtGVrGhdxyhegXBpMcWJatwSd4ePRWGW1RWPpHxvpunzaV38UxiSfko",
  "key9": "3iRpEYF1TT7CyJTfR4W7EpeN6bX6V5yjTorCQLrP8cjiHm7pUpn5dDXZCuiBqKTmZoZNUTLMbfcNbtCQR9v9TvCd",
  "key10": "pG6Mr57TfHL5v71eWAkY2dHgoV6Z8pJ88Yh4fhfNLu2PnF1WHy7WSf9vZXRRqDmdYHsZ6HrptZsXyAU4jh3tDoo",
  "key11": "2fbN5cuR1QUWbmYaZV4kvdaEsvgfbhG1ZULxwMoKu9CApuenBtax5usU7C9y2YBgdouWFoGcyYwuK3kMUDm7biSW",
  "key12": "4NQsr8oNLHThHNRoReiVG3SmHeVjxfa93jDyWxcqfg2MVoyZVwP8Lm8wtrmhv9ATgNMSuHMpweje9t5Xz34Euyi7",
  "key13": "4idgJNskDHXjjiS9djv9NA1iCosFq2yDqVCs2BB5xzkg9uLHN9ycPt9XGdXGdGL8cXJqLUU1upft8TQNhYDonnaN",
  "key14": "4cBsi2VtQFxQFrtNr8eKNa14cb8s5WoMBu4Z7Nzv9yceNDQ2YsbxQaFcfFmExZqBJvox1UFBc6MfdM4AqnXM6yXq",
  "key15": "2q8NNKJEnBQT45NyDwb9x1U6GvZWbzvWSMG74699jN8sVwzL9LaTf7H96oYUYhvF51uiRrLhwe6zs6CNEfoTuP5E",
  "key16": "4gg6MBU2Cn7jNKkDsykDo1jHkTJL7mc3GorR7LSErTkpPkGoAV18xALQK4uamyziHsKak2ZLAsWUHb2HujhfdUJ3",
  "key17": "5UAcE4KAxSwjrX3C6LNTYerKYhBjksX4zU4gpgAZg6iGVqrz5PBpMHYd7uiPgJsxn4gtXBGfApNFC1YQqjHJE7go",
  "key18": "3HScStEfDdRGXbd6ViYoBYfNqZDUmch4uW1hMQBxnERzXHcGR5UaA54eWLrhFLYy11ecVh67Wgf8k7XZTeUHjtK5",
  "key19": "2rKDrBeQkp1tJc6ua15jPDENogGXV6BfHDCao3vWjKjbmFwZWDkF2LzTXh1oKmgrm5D1k5tjXPmxYaakEetpFuiA",
  "key20": "42CgyMmXW2GZHTSAPc3udXNcLR4rafC7iNJxJrJFvqpxt8MKvGLFwYDP3uqGRgDGSgUwxfK53hsb1XtL1kCoy1C7",
  "key21": "2pHBepXLt9jks3hpka45SqH7FiQgJgiEWjp99otoqeWkn3Nr8gCFQ6r9XH5rvTFrmRYg91KvsR8iXTKHHTf3KyN5",
  "key22": "54iWGbuXXH5mrt7XqvSfczortuLcy28tfwiBSqUuUnqZD6LQSm5VcrwWP4JBQifuMyS7mnqLwKfky59fbDNrToPd",
  "key23": "24m6QzjCMmY45DHJQZgwdTe2NrFcVFcgReFf7F9UPMHnQWUbMhQW4CgwqhuqSeFfkwDb8TX9n1XHXMX4FLJW1vx3",
  "key24": "sFSBNMvoBQZxxu543kdLygppDhBaoctif5HyeYMrMJmTVwCVYLGE78hMQwQ7Q8AJuLuWPGks7ELksby4ca9VCNQ",
  "key25": "5G2hhtJVXsEWmXhE9hfeMW342u2iCxYuRavBkAxF49zFKCnA7CGvDEBgJCHS8FzjeEkdeU7TdRiQ2cuRvjmvkYwo"
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
