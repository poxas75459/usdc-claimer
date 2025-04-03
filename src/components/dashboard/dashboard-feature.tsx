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
    "2EMVty5jSxwoPGFvnh4kUwxxbHxR3gA8Cc5z1odqyuN1ibneBUNfcnSemQdWB9DpPpiYBj7RbYixcQa31vUdKXAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LMNdRxhthGqrV1yctHuSzpwduLuYYDfZxSxwjCLuA3kxcdeZr7c2NPv8MuGEGfaJo5EVZDd7oU5E8p5CuaMKFBB",
  "key1": "53hZefUixSf185axAKXrvNPpB8mW32TZrPE6ApF2qwcygiRc44KurJ4cV9apNab9meBcFvx1f63JdV4psfw2w4Pj",
  "key2": "4V4ryk1FV3ktFqXEMSDjFCQLTqpDjBGSS2u9oJ9dratNT7Fag2UpvGm54ovgEM9n1X1Rix86Lp74ZXPbSTRKgUmj",
  "key3": "538hqjKhzMUyziirNMYq7PRCXxS5XbPwtfANg6ESjrfHuxmduH5sWuPXrF1DsRXw8wRTxTpsPDgRB5BsxjuN4QaG",
  "key4": "3CtWdR5nZ2GqkGvnB3wBGBTgSTtDBT5uSFqjJ7VEyK2bp8DFQAzb3cLdMZNe3zLEr68bBc5eVpDsWKqgHYhvL2k2",
  "key5": "511G9p5egpx6kHv4sx4hr4s5Mxu9rET5QUHn4Eo1Jm53UfN3kFxVigErK7kaV33iimCRF5snUovUCARnMU9MxSXk",
  "key6": "42noLaMPEzT1BPpwHKUJ7THvgkDRzHmraPMXSH5i13riFuU5vE7noTo4D2cJczM6aT7jEKX6kfPnriXJUc7gi6wT",
  "key7": "4qiqmMFVjjhw31RxSk3tudAUCVYMpZJ7k91SeZgZAZ9BCFHsb2S4Sod6zu92o7ReshehBq8wEYLzESNJWV4TpVp2",
  "key8": "5oXMK1LfKhMVWfV5tyHw4CETDiVSvfzvRgAGQ9LJ4xScRZCjfm2akH1XP7skW6RLwiFrNXK9EbauWU3pkpYnpWzA",
  "key9": "2wJHJtHD2qYPZ8ZQL1QEcmTiwADP5N42fym5Z2TtwuKhtNQSWfJiXwo6ubQquw6UvezjZhCuDCQtVkkhLDDgXVHY",
  "key10": "5Chny6F5285h6EMFPYw9XDJQHpLGDvUNUMHtzp2p2zH3PLdZbLFvWi18zLjuQZsWXDk2UjHrwM6FecDM8L9dvVPF",
  "key11": "3PhJeSb3MkuFKEiVpwBFwMnJGxfxUXyZ5NieVUSnYXtBMrNAQwA6h4Sd8ooDGjKuNAmEbjiX6hZH3hnQjex7gf8A",
  "key12": "2i6ThcbXg4e8jC2rmzTgjeKpF38AMCvCnAktPs1F1WJrFTJe2EJiFUSaKASrycRG1oSCqVB6xoJJYWtSCp1NH4An",
  "key13": "4zBmBp2nHGc283chbR2ay8FsRa6oHggXbD6gezhbREaX4etyHTaibZKN5QdgzGw7rKETM6KxL1i1cae6e8ECxXyJ",
  "key14": "4J1vX7aaT7dr5doEbJw8TA8Mqs1XJ2ws7VzdP7LMfKNT7UCN8jMkxq7FmmMgWAXQAAjiJXuYLUtZRZgor3sAgwxh",
  "key15": "2mdwYWbnfhL2rq9hzEW9637AtHpPZJARGwy4DDHc9F1ySjr9cj8VEQxkKDbWgGYwtVeTLNBbFeB8zDaxZq14cPnS",
  "key16": "9XmvFMA8DW3XstqK6BPF2gUMUnQyr6geNaWt8tXSLbPPVbkJN2wVaguRJ1TJ4QpHpi1eCeuc9AqTJEEJJYLNn3Y",
  "key17": "36m4ow1ZjPTXUJKJAPDQX2WxrGzyiLX5tRY2LVVoKvUxhemoFm3aPfjDtjsgKFki5x6QA55ePFdtedTSMj3FWmR",
  "key18": "iT9RXrrTaTnAjHzT92MZzj9spyiUfKvvDaNFYPUxKUNwHC4HWTK7jtVWuDVkBqegutdYvFyyvbXSevL166KTU4Y",
  "key19": "3npRdnqEC4aTQANan5EQXLAXwK6maqfMhCTkV5d5Tzsg71Qbfinebkyf8UoHcAgmePn7ecweqawh14WL8h776hwz",
  "key20": "2fFZoX4hdmi2fXNunEvU9vsugJb3Fh22UAxKpc5vANYz3Z2ikyoT4rDyGqgQAGbCSPDwQgkjz5qTZ7YFGLnDaJGZ",
  "key21": "4fMpmL5FNyiAhFr5s2EZPoJrkW2oqNfivjuWDuEGXBYUqdBCZhLhS1RWjBnWGtuRPspUzTzZ7tNsGux7U7T6qDQ2",
  "key22": "2BRoofFYoe7RSCAyCNrwB7HPJRjnvJR9aLAB3iFoT1vQ6yr4ctsz9dbKd2x48mCoHNpDN5s6oXmQrFGaAeV7u7Np",
  "key23": "4it9qBbvBjnrCvR82F5DUnnSk2Hw3ZuJbrWjn26Ro7bNCbktgyenkhzeYp2uJRcoqLuYrqM4TdCZRg8zTjJNZeyu",
  "key24": "3JBjvsWZxmeJqzMBHsLN1BpzXUKd2Gf6tMNkZSNLW2usNPFiMXqQYV9eFsHxL6dPBvYzch7U5MtqTVPB1xp942pq",
  "key25": "4Yg6HcusoGvMqS9wFJfuzJu4GJkGUTkq3poU24kUHu2MEWWAUQ5iiWy8ZrQdhEaR2UpQ1KQRjHan5xW4JZmkjKny",
  "key26": "5GH5uPYfNfudSUdbxbPupy3FFco1FTr2MCZFuBrbT13M3bQq72zWXFtUVCekqRgghTaoEtCA6Y3MqNCzMyehDJsU",
  "key27": "3b56ECfaPMygiAC8MhxSjD7WkdiF3C4vseg1r2srvMdiCFq9YrcZseGtidmG51UvPEiZuopXiLbYnDaQRFAju9qY",
  "key28": "4BHFMCcQoQ4ynT9k4FgLeZMsa3e54fSJrpzPVR6P5JR7u1KiHNs4uyBXbX25yqJxt1KcVrUCuiQ1mrvqGgRmbZVC",
  "key29": "HfuuWLDfeR5RrR1mmjeuVXuog4NdZ7k61WdSHeWYxk5GowT5J8S9RUQa52FuijgnRrGo1TdN8P46EasjrQD4EFD",
  "key30": "4KkMp8zydsvk4iNEUwPbTGNoY52HvTRF3UnHeevmNwW19gi3DnkNisf2MDdEz7Y28kRE6ukHi2p1tdjevSb8iuu"
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
