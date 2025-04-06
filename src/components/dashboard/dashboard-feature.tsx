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
    "5thmcbuHF67JjKZUhaFpXoDQaZ3eehjwaQDmCsWrUvFBsCyo9FutSu5MAwicYvVA3KVDXJLM5aJVENZXhR6KTUCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PKqHTdLPBoR8yiQfqjTg6yRgbuPZ1qrssqpQUTNr3Lroq1eLcQ8Fdm68Gm91Pc8uZzWGWy5v6n5dvwiGEeTiNPP",
  "key1": "122Bvor3Vm2vHfekTb4sfA5M1v242apSAizm4usPaX4raidaeZXqejg9KVLZ5GypzTMHk94G5Xy7cJVfAHfce8Dn",
  "key2": "d4jEuiskM7hyk1JsNL4PVQt2AEdU8HBvTLyXfqgEKFEdgwcMMwHCf8gbG4HD74bpYZdjhY3aHmduzoXzKewPDjr",
  "key3": "4aV3Q3t787uXCxi6PrBmvvvtHACWmiYsJyCYXcucRqgtFb4FLgFSbh9X8GLFdsbdtpgLdvuBTKeF3KQYxMowK4Em",
  "key4": "3wRBSJyqhNbkRRWTsQR7ZDsCA83Qvb9DeFBN4KJG83sRfsRRXwh4qoGJFm8273QP7FCJfZaEg8JBjbEGHEn6sB92",
  "key5": "4Y62bvsuAmbuABFngoUpkHnUqB3sYmKD6kpTFyUaRj2NeLHDJaU2CdLKFcP2WAmoR8uT4iQvgP8x5xyN4KMdxFAf",
  "key6": "5UDTvLQxk29QsGx6nbQGtKdB7gv7C8ptjxuJxMcArqYp7XKZSB2fpAqzL4UcN1fLpkipjH7iUfaj7YPuqP1nfNZ1",
  "key7": "5bPrDFBMsUuiYuQcPvM36NKmhEyAQhzNEQ8iQZHCg5oiQZ9GMK6BSWoMv6jRgz3egDbWupspXCDGFEdvvBazw4E9",
  "key8": "3V7AxffnsJAM5a56MWjHBPRLs1cWHiSQxMCcY2VyiM36xqCPaUDmpXDPiLTdJwaCvqGiRhMv6Qv1uUagjREtjAVR",
  "key9": "nJfC6SiCTvNHiPtnfPsxBFEoxQScbttwszPsXnsLLUb2Xsq9uTSRU7XZKS8oBuYsB1toC6dbUVoXFXHvrrxT29n",
  "key10": "4y1pRceFSTH54P3WV8VGSK5EohfWf7F8ccAoCyDk5CGtfUFN618oEyDB4SGrJbywNEdvGcBFaL1DmK9QYxwu1s7J",
  "key11": "rNxpGwrsFRhzEXi9fr11DcJw3rpw2vJz5YeSxyFx885xiCyaeFBj1YhFJBsH8sViLwWyCUWFPEDxCCNWiWSMU4e",
  "key12": "2WJsYnDmc11CjAMdyNJtQtM1ESXiEsDCEJD11HFfcoaCCJm5CWjb6RMs67KxqWgtrZJDWt2hefCyEMHip9YXzCdW",
  "key13": "2JvCJGHPakmdTwr1uqXhRHeoLnHDxxFqcndAYEjE5Gtd3n5iXmzbJde9CTRGnGwZcHSG6fbCmQDFWAXf8fAoLvpa",
  "key14": "9us26bvB62xnUj8Hb1zQQbn5RhtDZYXALWXUNqJW3L9PfseS5vy4cfzMTeYxxmLFs4nSDvFuHoJdVmzDXi76LjR",
  "key15": "3mQhYZm7xBsxsRePhmHcEzubSuqLiCfpysViWV3xB5CTwFUko6Crnam4DdoqonnXdzfchwJVqeFCyv6h6sHL89mE",
  "key16": "5wE7Zn6WreY73JrVojoKZe87u9j9daTHRP52YGZtsJ5CMMvXbxVVJPzygCqBV6xaaWFgXJcuoktFJhgKasDLEHe4",
  "key17": "2DHmTAKH4b5HVEJ6LWNyVotBrTLBBDx4WTPJCpRkG4RNY6KcT4eus9jKoxLmjT3FASKg3Q7TeWbpPZFhvVoGnxMC",
  "key18": "35wKtj4mDoutUXQKmtEWELKc9RF3TcRUbgvGqmZZjKggfTodaaGJ9drbQZPNKYvHiSqSeyaDzBspRt93vRkjyESq",
  "key19": "2Lb5qFZtqAX4TmFqf2PG1RGSBLHJa2MYNEqyrDA8S4hZPgung8TZWgkQAYUus2ecxohVgAqLFxh4eaUykHnpDXfi",
  "key20": "45mSQnHp7SPgJuSoNbVqG1hWfHY8dGVVZS4SY5Aa4kXEof6MW21gQPVu5kjobYown5VzXv1vngXrvPN8VntyDkpW",
  "key21": "4w7MAkwpjNsLpR4bytvD9n6J7M7sNn2xErb4He6E3phMpgniWWscBoFXppEXRmiZtkbayDd2A35HcAbSYmxgwnoy",
  "key22": "3AfVgffJLSfcCoRMMNVHYYNxcM4yUMfmVnM4BFjgWTc7BsGpd74WowW16Gv6w3jzNtF48tPNHXP54FqxvB6w3P8Y",
  "key23": "puCsHYTBWnQXPQQgYJsxqyA7ZSqkzsrJ6ZzgvZHoVPLaPFxibweENZazPpuSd3FKP8oqf4MpHTuEiHUiTthfx4v",
  "key24": "5mnhCY9uKrwoJuJ1JmdAdwTvZrEzvqyANNr77wY9zWbQsUUC5wzZnqTcS9eViby7z7ei2XqrPFg3LB5ZH6mHrQnd",
  "key25": "QyVKjtt31dGyEFumP5U9e7GNkj5UvCY3fP8YPYwyW2dpyaBaf2PHuUqynmkVjmcFqbTNsYkX3hX1qxbgPzyUXBH",
  "key26": "2NAfoV7qnFiu5WAdvUbz472yZ5Nb6uDsBPwRPu8TFHttweET9MyjSEQdQ95aX8hsum4xUerVj5aq6b7ddx2Hz9Wx",
  "key27": "57vTH5zggdTCST23J9PoJVnPRsuKmzmjFFyae9XCauXXbWgpghS62afAWYVteDM8h6Le1eazvVZEVL1U3aTE6rQa",
  "key28": "2DpNEqfD5Kv6baDMXDgDsC7SSD6uuuuZ2Dkcbw2HfCBybh3y6dVbwAxjs5TtA9B4g3RjTUAGBrHf4q1ntaxwvZCf",
  "key29": "45taUiE1soCi8w248KEpwdMhc9jEB6jcjUBQaG8Zy5QkwN2LCPx4QrMhzKoeeXwS4pXgpf8v1ARyX4JEm8ZnKWsv",
  "key30": "3ZDVhdkT3Qn2EvudJMssRSFFLF5fxRP9ercKXkAERgExiXhK3dukUQAZy9CAY5m7C3eAs8tq8U598ntpHS3Hwhan",
  "key31": "fwc8tTFVar5NJZ5gMiAx3cJZyR9sDzz2x8A9enJmnZsURPgboMBGBEpyMhvxmmvFPtGdimFoRf7gwBNeGMf8LtV",
  "key32": "324TdfA6miamHWCRo6nKX3pja9MxYRiAAP9zbiWK23tnGQ8xKbgUdhWPaE2TeLSwuM33AkJQQZ8UUsezcMxX2nMd",
  "key33": "5rLSELPXSjPDVKdCZrVXRGehGbgrBQMXpKFKku6Dzvci74NLbwGtFFXJCtHajZkvwEcJgx9CL5v7VQoJWAv8MuQs",
  "key34": "566PSYxsZjwNstHuAFpBzB8PJgmrnL5aDDyZ7TnFPrK89Rxu5RqjW7UbvPFqwWM4u9Vh4ZoefRn5TU4ZrdovedMs",
  "key35": "3vL25Tr6AoxHfG51EsJubhEXFj3MUZbXhPMKfMhprr5SxLkVPYwwRAS3gWfaegUofrkzt3AFG5xWN7Kz2soHAVX1",
  "key36": "569Xd3SUxgckTMA1xU7T2AyhiRZdX2yAuHvGY3Sg87zYQj5FUQNVBNgF3WvTr5iJh9eEHKMyQwvZpsL141Y7Ghbu",
  "key37": "GDYCivfnrJznHX2DXj8QpMUjGB4rYxZSXAw131YY1jbBB9sWGuwGEAuDFtkadMvzhvrAM5ZgfjYD1pE8MNxbtWH",
  "key38": "5NvgetUGikSxAJo4E8wskGLzBpdMUiPkHEdiq2BC6w9B4NWs1PXuY2RxHNN8Qk2w1KSYxqjwgPQu4fadGYWxNXm3",
  "key39": "5iUgg8mBErUBqcuZV3qKV7pnLMj6aVvLSRD4quCNs7ogS5AeDc5MazxcTeAad2DHCH8nWkbURWuESjG9BjmJoUmD",
  "key40": "5wsduZHDag1NhRx5nFFmpKUj6VQVgVp3zmVhgjnGYPGZABtt3Y3ri7ZUs61A7rb2wgBvPHJHR7argx8Qe6vAFyjE",
  "key41": "3tPjvceEFhV29xiS8aGXDdFyt4hx65SFEUhs56DutXjChWXoHBhGdkGSCojeVHZYcJBaCqK6qVzTfubzE4H9Wb2X"
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
