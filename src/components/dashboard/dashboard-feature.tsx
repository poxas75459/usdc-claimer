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
    "3zsgVivp3e6gWtAFMcNqHwa7i9ZACZiCJTxAAGZ7CYqLQGe2Qzwf4mNZQRFPgKXGxCyXaG3bSUWeFh7Bhk8L1XBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fp7VgcTgK8qvcJZDaHwbhhdz94tFKUXX1QLbkakQizvWHgDwoCQCUKbxDAYU1oD55rz4d2jaZivokYLMNpNs3Qw",
  "key1": "3gXhZ96YCS2HrWa4Mnnekw83aGZ2qRkHffWrECsRzAk4ZwuCNAfXjWbR6LqL8RMsCCc2VajZ2wYfpYFSHXG3r8Lw",
  "key2": "4DzmxGPbQAgAroH8huBuhfepcC5oHzQtvvdYPRcxjfnMu5azNisiheppYGYVixaPcJSpGKngRqCeLabm2mcK1oSH",
  "key3": "4NWbCkEc2UtgTEb8wA5Tmkouc7MakqnJeybwRRBiqetiUhNJEPmUqnWs7ttZSaaaAsjaMfBRZpjKHLuZZuQ5NqVu",
  "key4": "48oMA9Up5baBaiesA7JywGEzE2QG2RB9e2giw19Sed1nf6NAzi6JycZW6xj1vKDTRnDPfX7fKtrW8Q3HhoK4Mi5r",
  "key5": "59b52mdSm6yND2DmCqJBAuEN4LgaSj1xXTV984sHMfjGqyoPAuikza98CcGFW1N1iWNQKUKFMj4e5ERYicAyhQNs",
  "key6": "2xnporuyqfimt6csjYY1jFSJLUMDcYhi2zjWbMSZTDa2PxupAVSrwAqJjVAf28ceeqEdUeh8RVtrufXWyRg5331S",
  "key7": "4CGsrRYiiJMKLarVXr5VwzUez3hDMYr8LagoLAkK33EdgpZtjMiLaCXCbFMPFANBtEsFgEhm8f1g3RGaqtoLKnR9",
  "key8": "2A4cF4sTB5tFxPoeBtDJeSXDPsm2K6zwpQtCCxZUod8h8eTyqdqYxJ8iKvApUwZ3AFDRME4YG2h3cq9rhHjtcnFG",
  "key9": "2oziQtvGdorKQHVGw4nGdevXdc5KAn5BdUxmZdACqoqZze6Fo8abjFfUaZHnwrBQjXPN2NLxsmVyoiXSb7JhiLDu",
  "key10": "3XDLbNFUzzmycZe6KqjZiB9syGZLHapX2GsCTA46VKfDQoHT6jrQd8ZqrzNtjgeAu6mN2eWM8Mn5dy61Th6tTF3L",
  "key11": "LEgK19kG7CVKCuCbvwV5MHXQDK1YinXbDzNt5bjX7HDnTZ4aCTT2rNg68Hae6pzsNpGHWLnqVnDi6L33DGUYWgz",
  "key12": "5gLaMo3yw7M3oHrq6WdKCyv2rREg9ZS61TNianUYzqgh4SxYq5aXUpjndPMC9ZUAfcx1h8ds4wbg1nz9pLjfBPEr",
  "key13": "2kV9YxjpWcrBhVk3a1PNmoSDjWpJLnxzQ4PD4AdoMi22UBwqXvb3jSckF6uvrc7GLujYCPwHYPGQZSN1Q2jgvAri",
  "key14": "3PCskxYKH9ZwNfMAkBZEfQKjzAa4uQgkDS2s7798X4TutVjMs51GJTnCjBzZY2TruRSuRQyJ11rWv4dnbPssbYhe",
  "key15": "jj32vzaFRchiQFvHLqvDQct65DESRVrJ7izw1kGpXi9rRtCKWGQvA3axjxN7hetLVZoxXS4Wy6KiDG77iYcD8zi",
  "key16": "4q1XYVwA27hLobPuWpsM3hsexqA6c4udwCZbEpd9PNs8EDke6p6yUVo7gjysGwptsRBcYcUiSnuk8Q9mD2tDxB19",
  "key17": "3Y4GKkcUZzUZ326yzzyCUyCftRnrFSgSwVKPEuVVK7fe3TB2UFjWHEFXv3uUADocN4rdnvxqaQct9bUCPePeqhSf",
  "key18": "f9nHixmEfPTd3JPzMD95K97V7i67mLTKNdp59rqbATnGf3zrsXftN8CMb1FucitrVZt86vWkbaLRoX6g2AYM1Zs",
  "key19": "53XKvXo3sqWHiaffFHrEnMc9fputva2SctrTwcWBSvo7sk1zrjQzm9EKGxFs23xvcFwHRJw5itxfD7JfnvV3Qwds",
  "key20": "4Zj4848hzZZwd6nLZsjYNDHdhXWwufd1ZTh7wadpRHbzBBw9XY2UzhwzTjRMwcM3Am2XRDnLREbBkyJVFt1KNozA",
  "key21": "3av6QtVcWKAvmSGiDgQQEh253CzVFcbGZrmL1HVqiXqkj56tA95CqEDVCxhsjJdXyy4mGBDgQX6b4CwkhaqB6Hc8",
  "key22": "4YTqUWmxKSzx8F6cmp4SxDJ96hCgWe4T8CoLDXuUbZnws4Zxj1REoV6pC2GEF4q94ryfZHmosYsFixcCL74X6Jme",
  "key23": "65PNZLrRVQpCgM4joC61u5r8LMLkP3YoUoAirjVeX9AyYjA2THyCwz8tU4Z62fpWyLGXrzpdTJAs6HJ2ispRDGjQ",
  "key24": "4GU13iAh4PUW53v386FVrt9F9LgbPsK3QoJek9qcVaFhbpmNNQLnhvmXnc7mWsuEmhAZXzVKyqVqGcFSQpmS7Sia",
  "key25": "ThGaukTwQbwoGQHPSuEAXMxUBSJfTUFYQeQ2GRekiiFbaE3jfQaJond8uyNiwAB7GQbMEjMXNaLFY4oB5bkMC6X",
  "key26": "2H7gA9zrxqodQ8P21kQqNQCxX676YH2rF5x95t9ftt478zURtKCtiPHkJrBshRD48Es7WWYPxgLYJyrSrtyYUJBP",
  "key27": "Cs2JYgQnEskFVZGpcw6GsbyPiMXJ3QEpiZPWg2wD7oM96bUTQ3nwmpxqVDcabLDCfrYRjgGqM2vnzRb8qyKhtFH",
  "key28": "5iL8UaSRjYKhfYMR7aCo6Chyqg6oZvWJcDpjwLLEH5ya9Kk7qsF5jBQs27eNVcRQQywn2mcDTKVcFQg8Y5Mn8V6K"
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
