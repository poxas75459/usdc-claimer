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
    "4rGs14LQ49QxuvV5ytXmjrevxEgwwUMu15id1xy6cHnQ6t3fYvanUqNS9NukvDEwYBCYLdyx1oEd97JFeUGTrUVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tQ4pHCcZgbPpgAWHcsYqcTXTXrUL6hTKpzusQEsFpnVNEX2QnCSjxx3wnWnUNaF5oxRYCa4rwrwsAzM1hvQqaQf",
  "key1": "2Raj7ioNKY7Ctmc2p2z62ayEGYfpbrZ5a4h1h4ghXi4Zy85xtvcM3JhrwddbwVLws6xPFtMC9hrzbFRDfpPQVadk",
  "key2": "X7VzdXEcUTVqa9nsUfmfARoR2nJvYcBB6DFN7ZtUNT47jUaqquwTUNd7RMLtLfq55uZVr86A3JVGepu1pXRtK6k",
  "key3": "2ACZriXtgzrbPXdn3k7vhzJEB5Ewzfs6R3TgJFQtZ3Ve8fFfWLfUfaqXABAQvagZ7RmLteqD7NJXbacn8hBYpLfs",
  "key4": "42hVRRZjfFHzvZv9TYWfVoKKdKYLsCDyajMbRjAmk4JLsjSRzNyarXL4L8BXrkQTK9A8eZJWjzkKMnLQvq4vB9xj",
  "key5": "ofjGfm2NW889yJwFX8qpAhnJALAAJfGmNYNC7jZdrjdyuB2wgQVBn2FAGBqL2dooxRjhaAht9hGAKJZkj1WC86F",
  "key6": "4mLaFdtqK9eqmNKDrkXoiP25rLfjy5br4MnhTpPmX8nWLoZbBQbi3qdzk8Rf9qWrBi23WAByfZDzaLu3dQkvoTG5",
  "key7": "3vJK9XXCwjSVpiaByxpbfD2WnUit2MnmCzEj6Y3Hc6Kf14uvddPuw8JhG7gGTBtXHaQjqSFpyXDCivTDqbQo9x2c",
  "key8": "2dZjBdEd7jvCqnjZnRrdJGGKcGAXEZULfBR3uK7U9jwaL66FJ23hKDvonDCjC1yhVuUWuT8t9T3nwuWuasMkCsUe",
  "key9": "4FbaUsSodXacRpWASvMnZaCZg4oLRqLeTFzyNbYWuYd9w7KpMgN5eeDxe96p8gaihisHqk2MMYFzLF51Aj7bdnR9",
  "key10": "Yf5v3Bi5CMzVfXifzE6w1F1NcDVne3PkpcnPQbrV98emGLiND2q2U6QLq2RfrLn7epvTaFVhxvKvwjLzYRSf9Qr",
  "key11": "2o5XojENUfK51Vvj3i2acLYJPK6aW8JpkbBKUcfdD76jugjAxHSqtuwMtA2iSNrWupG4Y15FuxvmXyowouie5nd4",
  "key12": "2NL8onzh7nBTYaVERPfDdJB6ZhfYwyiw1yQv2dKg1SbUokywP14dCJtZcF4XsponG15Fque4wXEYfDue2Xo47tR4",
  "key13": "3SiT6bpTkXRjWDoyxPF9fDPoWVzmpg8ZUe34vTEUBCec5YgKU8xTwXo6W7KjZFuevnaFi1GQNded4hZ1f48LXTWW",
  "key14": "Cqu5P4s8Zz4Kw15PsTJ2KvaYB56bEiGuaGYpdyXh39aKigfRft7SVFjDT9gEkp2METwF9vy4Ed9A1Paj5CxArc9",
  "key15": "5bvZcozK4qR8iqjLuGZyTzh2HaxJt6okUqnqfhFGZJL9E92SYRpzxhBnNNVTVT26TGeAAVsEqbMDLA8381UyS3LS",
  "key16": "AkqGQjRL7kFN5aVsN4S8Y85hbuDj8AruNHJgMjTsXJcPzGUxTPbbujLDMAYJb9NMV9wBThXr2K2K2hR8wDBjwC7",
  "key17": "aVh3bQ5KJo4j1iT2MfjnayethbdSseQPbdq7VSGKwghUTQcovbJ68ix8cdiDBEyFY7xtYxi62g4L3yhqbTAUzMc",
  "key18": "4xVWQya2VkBKvsvGj5iJr1ZLRDk9roDVzwm8iq5NHX9VFZy24pnrSACu6HnLmVTJGDmUQGGsg73WzVFxvvRWAcHY",
  "key19": "5cDPBhPchzN3LpmMpif4f4jRrxiPJ9eSZqgx8neEQYzeo5kefwQNB8J1QNR5YpAKsZpoAG83n7t1K43UARJyFdQU",
  "key20": "3T7hjm9BcoCm4Pfnq2A6HmmfQmzB2ZcC317ppMYay1qZedJhrm9Us8G4G1c9jsRQGNTnDuGyXKHzuMDfZorytYdi",
  "key21": "3SAjMdxMf28tQPmw7JgigTonrW7Dsuh3MBkSCuYrwcpNmQW3WYAzKEGoy1VytLQaZrB959jog6sjugGofmSiBkRG",
  "key22": "5KKLnHeY72TjBeDsipHsrbGJdHaBYg9jMSYYHfJPtpwr9zBYknLQa2L8mfY72R75zMjrs8rXpx2U5iCkUyb6Zfns",
  "key23": "5CPWCNpeA4Z8eBLkM6D2Df4q54ecTDGdjsbPxAJS5ztubTb6yvzjagvghGRnqunNbc5aaBQPCRqDLT1fz9KohYGr",
  "key24": "3WEzCWjB93Sb4i4RvfTNZdmZR7439DkFaSd44hu3GQtUHHA1y5DMoiMm81QWbWZAeQo2n6rykNwQxKtT7HjMqsK9",
  "key25": "4xJt2K5LjtTG5vN74xUFktPcUCJwm7WfUsTmB1ujX63iKD66bTGjmEXbLJ9q1F5pnZobCBvomj7CsKJRWjTneREw",
  "key26": "56iUgksRiHxfpcKgvAr4BjPQ9TqjQXw6Nowe7Ck4kYaQFd7qf7C4yiUXpTwvMydpodWX4VE9EpaFr734t3mEhs5b",
  "key27": "3gNjSewi2aJxAD6MbDs53Fgcc7bAKSFiBdNmCQ8dHcE2UPUkvvwieBBh7x8JAxMSYxQBuPsj6A7BqufqS3pigXWZ",
  "key28": "iyMkfooUk8o2nsrnXkZkxwQzR6dhEe3v6HmD9idEUpoJcGWeUqhFeNNtSxQi13EhShVoGyXbn97nnhv4CbD85M1",
  "key29": "47FTCsYMe1Pc3H7YUzJWcz9HkBnBS5NE6gUWJ1BSUAaHLEy8EpPyYkdd3K9LTkBjziZSXKGN9puAy27Ph3qmADzQ",
  "key30": "5ki35Q6R5XSoEJmrZ2k82iWdKqcBSrE7nBi5tkH8y3i666oLapnJoEVJoNEFRjDKB5EWj2SPaxB3SRQ4RPWcVgv2",
  "key31": "38zwbkvUrLdMy5M4pG9CdethVJxoVnNnZB9ptMjmX1KoFokc391NcnoNssr5BGZn4NHTaVs2ruvEPueL9Dr8XM7J"
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
