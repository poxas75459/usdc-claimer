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
    "4AYvDpBpy2PLDAFGGTDh7vrUghRDewduCKxXLxDdvstLuyw3wS5wGdbu3XCm7MvYMDTURN8nd6k5XGTC5rzzKzKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LhExNcSbAw7sqBPD4kM87wKRBsyz8uZFzUKHGW9ZbruwsjR3ncW64VUaUe3GNCaiJECFP9E46UJsbhRAJ1mgHMj",
  "key1": "2EVgaqFifysvs1Deu9JCvFAQAPEZpDhf6cWAVHmpN96rmpSUrzMAjX6w5GS4WJou7e7bPLns3K44jbZU345Qyssw",
  "key2": "4EnNFbv6UbjhBLvEWofo6VpA6GJCmxmz29o66mhEePiEEqbHnCjW5wWRdbE2NS4zN9P3ZM17M87oqtYzUaUhM2fC",
  "key3": "5zjHoJ3ZSSfcviUqkJDc9CKZEyYAbiA4P5N97TcDyG1V2JAKT97YtJTzm4cbYDuw8RHyzfhUdT7zLgM2KtFWtD2U",
  "key4": "3yZSm8g3SHh9Q1zJmvwo5eS5xbyLLy87k7xoFjFuH2N4kxh2NaaX7mTTo8AFVLicVCns9sJYUBKhi42QMndz2Z7D",
  "key5": "2AMPyVAaPgpV9BgsjAPZv9jAeygZJg4deLHy2cdXyDVP2XhR8bD9bEXLXfN1ghZTTrMYuwcnaKZPhqwYPi8cLhnQ",
  "key6": "PfwNLTCuFPfBLgygdaxcWdzQwzAoP9wcDqaFTWCQS8siFrKy4k5dtkTHkyL5RLpMviCiMac12ALBVzEoysEs4v7",
  "key7": "4yMdpZ5f3V3HR9UkkDejUZwXSsKCs9NeyJCQmzFHotckhKYCXsDto9GQU8SBtGwGYonT2nUKmw1KQ5DdQ8DrLULa",
  "key8": "2BjHWMRgZjFkvAsoUQBCQkJHca8LMkwx4hi3Kv36gQSLBwCnXm8jWoCzvwsSB1KW2Cn3NBaMNhwgEUgPcUDZSfWC",
  "key9": "5PovZAVTqxaxibZ5vTDtZtqBPsEqiY6vEiQdFKqKZVtTCFK72qu7N3HvcmQvn8a17mcPtFnMq2MPxciexjthfiN7",
  "key10": "2nbhnZorWQwTtCWHTHGWDggARPoHvCBjWeS4dGPsy2Kp45FpVAbgXTakFYRepYD2F3F6FZSnqChmAdE5CiAApjsd",
  "key11": "4G1E4j12n4h3JvvzrWQHaaPffn6ZTSrecAcY75nEXaUYjVBTpEALhvZBKXGYJXZnhhVEiPe7yiGa151MNbRgQRCN",
  "key12": "61wKx82E5haGQUoBRFtnNpJxsWaoPgmLFR77UHHevJCJLD4hfc7Tf9j2o57EsBPLKJNxJfxNm1vh1sbRKmn5qUBL",
  "key13": "4GL5czJJoXozy8QqRPCHr54ygpAuV7MUMEwtEGZAM3CQ9VHJmbb9pMKkGjjN9Ft6H6zvnRZ8UZX51RYroQqryNme",
  "key14": "viMW3WFquNatQGZDeqpSvAYiye3AzbAb9HDXCreBTgWb8ABZfirrp85Wibdbv6v72qhLadXw995bWNuiiMCgRXj",
  "key15": "3H23LAduGP9WwgN19aq6ahRp4rdNw7ffAMj6tRmf4iV4AY2NSWzZw3WfQfGt7QfvqH3TqN66a8A3nn4E1dfgFfiU",
  "key16": "GSBAEDTMzjyKDRRtaqCHbhU6ZVHvKYJYCc2mrkcrr4AhoCRfC9zV76agaydneVQu5ogitjn4xVzzAwSnDN1nPgD",
  "key17": "56AoULa5uRhTyxFyUzbCYLoofq7XyQrwnaif4NKeWJ7KQ2XEsoUrfVEBTGPfVpphmaufM742KbeM3FoY76aVmQ6V",
  "key18": "E86S5pv4WhnAZRbm5bgaN62Z6c8ctEjcFKWStH7Mpdrdr5ehRyMcnUUU68pYBpGyy8uKYzRjTX9aMZUbgqk5PqJ",
  "key19": "oKMhSDiYStsrA1ug4xji4o3CMXQk2gZ3y18cHNXLd8s9rnww1vRNPsjGAJGmBL5V513asg7y3nsk8wdfpQHWFe4",
  "key20": "4fQmZ4fyHEDkEdyyJNyiK4RzwYVWWYES87YYEszPrWctxgw6uZfKSZEEGt5Q1s4TUCJQRz95frSjsxyZ8HYrVH9c",
  "key21": "4PZpEERYbNvroUeW6D4HBjYqPeim7fpYP75QUdATRuiSXkUeKdEacwS5QKvVnJvvct8JE1PMhbpU1GaYLsyDs4rq",
  "key22": "4dnnWW8bvjbt1YrcY6YcCW4ArLjTaCiV655ts6LGWpNPkrTx2JTE1KpweLqBY56McCEUpAoHdMTgyStX3L91zQoM",
  "key23": "4vkh93hNpidwpndrQ3EEXbKtYf6MRtsNFYC1tXPKX3BMC7G6FBU5QZKgUVp4rWKaUWoSLHdueDBMbC4e6rWW1ATV",
  "key24": "64PMKrKK9iGLLByT6dAS7BnwepkdbFuL2JzKtqXF4sHuE8RR5CH5iGbMskAMFhVYLVg7c4SFq1ztCR2ALEWJr4sV",
  "key25": "23bbNjWN66XyBhcPLR55gBmXXkoNcfu6HSNTMLTwfg6WKKYnk9JGxEoThA7rJ1PFw1SRcvPL5NLaGkiNucqWbQSk",
  "key26": "5gWfukyGoiMSqFtwD1FKmjKSY9dSvnYSAJutxZVaikoPapMdVFWu7pKjMChx9upqm5Goq5Jej5Ry5UVbKfoZSB3K"
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
