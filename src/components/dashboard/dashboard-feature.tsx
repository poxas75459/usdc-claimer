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
    "2j2XpU1RXiMpFRUeGcxaqauYAfHyqUsMQvg1WSCLukLksTPEzTrMQ1fULg6gKNiMuGb8FLF9itMMkCjFrd3W5tbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MowQ8Q3yiJSVCZJqtKMfoFCNUYEPamyeT9yNJs1FShiBPv96PuiKBdrSgxsuZwyUDQdEGxzE6vGQXqdR1GHNqEk",
  "key1": "5WETJxKchGTP52dNL1HSdfQhxEUz4V8GT7Vd56QMbqRu5i1G7LH2gGW1NE3kMaJXA8LyZsFFN752MXbPA761T2Gg",
  "key2": "3rD1h6e1sxqRukSVSPmLb7QS8uB6BHi5To7HhdkapvC53wbbqAZPrwh726GAN6AwnHtui1dkR67ouUfMuB4PKRRp",
  "key3": "5Wita5x6iGUGfhJ87z41gozrPAurMiD5a7iSq2GqiArEtZoU3bBazBbrqx8NkHrJHkbjsibUZdip4pfXdukKWdfa",
  "key4": "4DEQmtWiyDF7GyijfeTvzEmDhwVuxyuzWoAmPPjZKAnFGbNixQvi1pmunSG5sKmxD9RVaqRgBt39CZ6KAgmrdGVT",
  "key5": "2Hw7cgZQAhLiYKS5LKVto3dTyA3u8NrgwABx8nMNzFfi6jAEkg1ixhEDyVJ3shuD9gkhEzhGvshY4gg1xtunPWxV",
  "key6": "29fficRmyVsYqHG7jUfbSExVN26cUtK1mkdnRG4p7KehFtqCMx41AiGbcpLWU3nfeqxf8HMvdDR6R8Vd94qMZdRH",
  "key7": "vEAM8ptBz6CifRE56K12tkSePLUM3iGVLD63mRusiZV2XB9C2JYtcFsCSUJ2FHjXdVg2bsG7YcR1LCHERz5jNyQ",
  "key8": "2wnp81pZQed7aUBuoAHmP91yNRFy4UG9bbFYWf9qx64maK1oGjKkS3EFgYgH6dU6NujzyfHR7qnsRaJQNQeewre9",
  "key9": "2bx9wxrCn6Do4afwHYX4sCnAosM2eqguF85unywkvjUDgrjxzTjM4fL7jDNMfq251skEv36H8UvkZJKFjgRR9jqc",
  "key10": "3AqytdK8qVxKGg4jNNXUPfuFszWgJ4D27cR2SnPsnG8beVrgVnqyJ3MD8ASBcPvHZSR3jmi5qJ28bDb4uLrCsMWF",
  "key11": "3f5NPQXw95ts687G1btU21m4npV9Es77qeRqxxmj2cArQ3bKkAFUcVtQWapJjEELccfrPCAviz9c6dC4NZzqfFKq",
  "key12": "4Ni6aRpsr9hQS1ShpPK8vceYpHzSf7AWn3qKiAxTktgegb4uDbtnqD7vvpQJaxXP4sgGWiB86ch8dVWHESYnKH3A",
  "key13": "2aP9FTSZEKYrmKBofKQW68M37gZXA35Dup4FVnZduyvkPFjTq8NfCnaUekBVH89fVJ831NKiACXYh6P1q5eKXFBg",
  "key14": "3rUwsKsTUMMpnB2qmz7ompgr9XXBtzvLC9mwn6wm78SdxWsFiciYgx8XDDENoY3aKy34rEG9GdTj5ETJeUs1R9XF",
  "key15": "43iNUTFk2VjAGTVPRmsc3azEGR83Ws3Vzpnop5RsvZkLNeLYxcLQjUsdFucjSbMJU4d79JA79DQgtUZpiqE4VMdX",
  "key16": "XRdjPxJTSmAbT62ZhtkfYNYmQCnsyzX4Td9ZRXBozaUiVzgCscCmBo3WBzz5i9W1SkJN7hjTBi1ENHXM8XGXchx",
  "key17": "3dchTf1kPzaG6Z4gPdQWxwehn9U8QqHgM51i1QhUegUPjhrPRZqQm8rG3EV9cpYAvY8egygaB1WcdVCsVNSV7P84",
  "key18": "2ibsQZfjfKXt244MnJnzFQnYzfQmMzUh1FUauvajGg8hCvMAxB7ETUEU1LfXD4tL8GnqEQPS26qH1UWwNqWdGNz8",
  "key19": "eCAGo1iHck26HJy8ExqPT9cwoHm1BXhDVxDskkpwuCrpcWQhsm8yuURe75uEGmeygV5BLYxVvtPC5n3ZcX3rwbo",
  "key20": "9DaNYFH5QJ7otpzU7p4NpKrgpGAaG393Waismb8hKYNKxwnTQB6RoKXdQML7mQMS8Fbmx1ejg2hSncVSXP7PEHD",
  "key21": "2bqm2eJGzuV79aJUv5QrZsf6ZC2NUT5mtNd9MKnNDk5k4TCYwi8dE3PSkMsotPisLTGcHZKPKrksx8peRjE5pNsW",
  "key22": "4RwdsBnxXvz7cHhkFYuWDtcGjeskHu2sRKeCXQcHvXdWoLcNK3fDpRR5yMVrnoVA6G8J9nxuWbg4Gija9BRbbJBn",
  "key23": "WzAWR77cjhs9fzbo2aEXG4Y1evsBAj2FzKobm4gY8j3uRBZxTSdGBwnhncnqUAoWd82c39wsM4ABEpauLjpP7Q6",
  "key24": "4iVLjdSdeqryokad7gQNxDVswFcS3aSZMfkbDJhqAXXQfjxtXFk8jJKHTPMERoDEscyGBPDmzbbP6CNcTs9kP8RL",
  "key25": "2MYVV66f4v5tPDwY7Lmn3iCqgH5dzea3nsQtLhN3TtSwJJ9k9dDkFBA9SoYMMSoCrfpprnwTNGij6vp8Z9fGLntq"
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
