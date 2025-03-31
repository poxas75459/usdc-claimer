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
    "fSv6tboV2VZ1W5LdkodjYJGYqJrZm5W5epmMap6J8MxiYajAUB5dKoL2yNKwi7TFoP21dCTbC8iRHTR1MPcdtoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CwEh9SKhKr4tHyBxLYPNwqLLVLTWC6dZ29MyzFATUJ1LNWuVsyFguXtGqwdkojKeRt3Yi2AE1Wh69MWEKigxoAu",
  "key1": "5tQ9pouJEUtaZFjqgRQHLYuVBifJ6eqtaKDsynojy3dRCGnMaEK2LRga3xteamYhM1fHrQqg7GJGBagHVLaVkk6v",
  "key2": "2gsFCpLnJPcQ2DJb2YNo4Hj1AMF7BP4XFCMcGixemnSQi5chAfo3aWWrNb7VvHQsQR74RJCEdFgfPvwCiZzmovyH",
  "key3": "2QVnsKSKwZcahENovchN3aCwd8qKdcF6JUXsj2Jb9Mzj7FfCLmhLEqkS5RCWL1g4rLtPZRhPwRuzrTowLS3dMw4h",
  "key4": "tPhpTkoQXourYyX9XEoRPRnvNdBUFMxWfyu4L3W8VXGgkAS6AWDshhqv3HUMaKoZ1CJeUHC6RR1RsZVm6xnMVDL",
  "key5": "2cykmjSS4issFafExCNRkCFRLDfrhtujqzdCryzsJiEFuwsJSDCy4FBkhMETRGnRE1xnncfrddRGpCq7wHFfMLN7",
  "key6": "33U56aj9j2JhDLtNP8sHqdziSF3TAEove69kDGN229b4myv9ZJKvVC9bgHNjuDmdtzpf8MAPgPCQvnBnzY9jL9uu",
  "key7": "2Am3whUxLhgJN9974Lq3hpzPdfRfGZriQMwXQe2iVsmb4HY8kAyC5bVwEg4WerpV1VP9Nze9rZBQ5D5F3A5AFc63",
  "key8": "2wEhVy4QoYf2MKn3BW1s7xLd6UmBRFAMBdgoGGnNYLuZnEkmWesmbinu97XF3rUEcz4ektMsNU5xU2etuTkiYZnx",
  "key9": "maake5GovouUzQhGiShdaijsb3zKD4cwHYYvn8GxVuiKWfrfaNdDTLW9tGw6pSTBPfFc9jWjyBcVMepgKqimBbt",
  "key10": "3vZoGMFfynpJeYquP2oHnscoqApxQ9VqE5ggpWJFyvLC48uLVF6FMpvaj6oD21YhrMwyCPnVLtoAsSHeWier3uWn",
  "key11": "5jTGMdjy7LoJpjHTvcFU6K4ZMXgZAc7cdaDiqHnoDV2nyQamKb2NaR8BHNdBnY4vcmjqevTneyic1Vi1R7scW7NP",
  "key12": "5ZNNcWcQQmaS14fP1idxJVXPWX4qV2kzMS6k1cY4LFivUEZqpNGgDc8pPakFxhoiYknPcet1Fo3sAsZC9AoN1Uqv",
  "key13": "5AirGS3wWnn4jzGjWxbXCMGdwVY3DNbZUHrc8v5wyzr74ptVcLDbpS36ErsmxzF3oB71fPXa48ms1Ay5Mr5a8u2e",
  "key14": "3zpVCDGykGtJUPsfyawgeiehLywp5ppvZrgLpQjMYqSQPMMNYJWd2cbAntrdtc2XnbRPXzhYiuX3zUkyfnft4idk",
  "key15": "UgkiU8nyPXzWnn9LoDG3H1Dm8MVVHSbhcQMSrKQ3EhMWeGJkknkcSWq51MWByWYmwAq1aCi6sT6v1PfvFBZjK1E",
  "key16": "22wpenDTHPWMZqc46J7x5YcKoAAyQBFVTEvaW9XSjTtK9hz3BK4NhdqcYSPyrCN7PAFSSz4pUkBZvZDEw59iL6kx",
  "key17": "4MMpzEX2owBMDdxXbmhFuYWTAijbq6qP1cogi7qWVDAuJcVgvq6J2WtRPYHCiFCyKUL4H28boQAjRkA9fokUiHyu",
  "key18": "3SMPQe6fMYz6Z5mpjSyzVZV2PDVqHaoGGVsxPhD1xk69HQ7gbr1ASwM3PwpVLkC3189DBLyA1gCYXPViwhrrcZw4",
  "key19": "4unU7nuAZ6SWC9BPqp15DiybobHRthxdXFBiV9svo4spVvJ7aCphisf5FG6d4r5sFrHiZvEuEV4FyR5DYtowj5f9",
  "key20": "3Wp6BaLjF7iBamYpUKvcKGXFzKg4rnsAMrVi7RnnWs5b12vMunwEw1N3tsdAmjFACoctcv6JSerrnhpDoBy4GyQ9",
  "key21": "pDVCQqmJmsCQKWRnESqP5knFG3F2AziT7j9yUPjp1bDerri124PMtH68iRvHSjtn1H9Lk3AjX1HSq9qh3qFCuAx",
  "key22": "39QDHx19RaAm6kwrnxbejYtsmkn2ifvxZTVLSXfiKCixoHXuJ5cvZbor7HKCmAkZqnWAMZHUuL3MMvW3mjRoDowu",
  "key23": "3oxsGfDjzWBEzAFUvVAUVE48XupgqB5oRyhQwLTo1YCPsk6hbDWwE9Z2AzswWasVYoMQb4dsq7JbuNXCNEgxA4zY",
  "key24": "2PVSoipBMNbmLrUxVdjpmaNtpvSCPUXkUUtMhngwP3mqg8brmHxcPkhiKXJY7bD9VS8Zofan9h4FCD4toXjiyTv1",
  "key25": "2xBboxNVPJKB8wKFEHxopjdcL9kRxHinLarREwi7GdSqANgmXexekW76vbJUw5jvdd2iA1MEMu1dBkRmywt8nu4B"
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
