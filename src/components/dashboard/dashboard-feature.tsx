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
    "2rkpTUieFAsZNbpXNsjKZ2amM4hx2R3nWQjqN8dERidrwpcXtTd9MB1WBXL2G5BWps4SqsW6hV5KCBDQ2vBw6Hqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTjRKnsXz8BuJ5bQ23YzhXU678m1kjEj9mnhPAgopq8dUpunfD8ef3dEu2rsnXtQXwe5Qg4AaB5aZZbhxmiLqk5",
  "key1": "5dJczgXj4ykUArcot5f1nMtDDWCK161KA4WCCin2i92NppZnDDjVZSYXckQQsTeZsEr2yhRSiTJA6jLfj8x9dXpZ",
  "key2": "3Z1Jua3QNmeVg7hzmUryrFWiQEuRqbZVnowiu311YppgUx4R6c7wwLFunWKg72D6vV3TJhXTkMpV3QCxtgvTdkB2",
  "key3": "2zWNo7teDYbLdgpG4UpYuMZK2gCJVooucVNibuSYTRSNjWRKzFmspemN2D74e2pncNRJgLWFkRoVpWjQfj9vpMes",
  "key4": "3SkxC8crSBnQZKkmQk4Bg2dnJ2nZ18eJMo9TqwhuD99GVpffUQtMjRzBr8iQEoep4tDtar7ry3AhDwBBkJiV4ZBk",
  "key5": "3oDUSG7udrroPVAjR14S8g16UdxX315okhadsQ8Zif1UDci3CNr4JoC8SWuhQXFFG2dbAfFJyWB3jEoWLne7rtHB",
  "key6": "4GysRh7KtUn28y8MqqjPN68KJRtM98qr57fmtiwYjSc3XdWoNgA4Du1KgenJTgtTDfzLHbcjc8g4RDSLjkRPE9kr",
  "key7": "49EYEsFCz5ReUuueu6WeJGVMCQkbRiT4rEBMF5PVY37WZJkmZ7cFkRfTVRRiS55t3VZ21Y4nwqT2kbEvMgUc6cGS",
  "key8": "3PVku3tCd3iFEERfSihG9ik9Mg72mzSr8eMobUUYwu46qoQWYRtfaGMuXkxxubpLAjxzBMi3t9NTbHc39jQdNZRa",
  "key9": "4jqKd9Jo3EAJSqATXEhJ6mGkdZFRBEkLpcEHtPQh95cGJefz7eRD4bARkhqByNh5QgLTZhNkoJNQ7EUwHZ7LGP7t",
  "key10": "2C57CG8dV2EKPJCfmCJ4UxHGGNT7cLwcFD3bSKHuruTwZKVd8twN3TKunKFrutjyXovcAF9VzdPBxf3w7vvqBuyr",
  "key11": "3bfRfaX8FuyZwZwk5JpB5RYM2KYyAjaigvLz7toY53j17Lbk8NQ442QSebFzE7iVcgHHs5P54UTjeZrBAbm2WUvN",
  "key12": "3wTegtYmHDo1xpg5iZJz8Hi54tXbfytB4HexUJdnLvFJd415zngiX9jMPABgPg1x2ByxmThAcSDzMNFGGTcL1F9R",
  "key13": "5VM7HHKouF1xwZinR7q7V9FL4xWinP6nVHdGLxTA3vWeA5zHBDRNnAA6kEkxiRFSjY8crN1G5mXSyg9VmZQqaBsY",
  "key14": "4yu2onrvwm8QraHA4Ty31YGPztfPBq8JJuvH8Pwv8cuPQbfPAJLfYTDikeM4h6E6Vh5B18SeJsHSDLJFkzLYLd6E",
  "key15": "9TXdrEDtNY1XxuPeyxahUoRvKqmFbroMfNCgHEhoUYrMNzaAaiR1CYZscbvfcdy31wH4VfnwvWcyRWEJs5yLv6Q",
  "key16": "5XYD8Us9FeWtBr5pY1VcUYhZGU66f92PYjvSBvVuPHptbDaYCPXrHUuBYdZD5XduvasSQsWJYsLGiqFKYLY6naW3",
  "key17": "3PeyGZULfBPHYFmpgK7yXk1XT2CQxRZnDoaaYmZAZN5bwipp8ynmH2HPdN56WNUodBVNGSDeEAuo3nZZQgTK6e2S",
  "key18": "enXqrz1efkjwxZb7myMKAKMFtmRg8feheAFVRX5441Xzktj58AZ7d7KHacfopQbdhgwxRvVuWg656bfZKUhWHcr",
  "key19": "44fRNHYcqcJDZu5DZsFrf1aFk2A7xBdQQPhdFzo7Q7rLPPmv94Z3fFPecQvGrHYXRn5emoPjEwwKhiJztNxSnZnz",
  "key20": "4eTZ9ZLG5EkYsTgqpF1hdJDatneXUtKSkyVqtdDHvH7LUGfuJJHcLdTEMQ5fwBB8ooeEjkBBds12reBSHv2QmNXL",
  "key21": "4yvaxDWELgdvrm9bxqf7sQjBYSRMRhZH2nzkwGh3zHKXVKK4qxfzfrhRsjrex3Uo1yCyWbXpgx6LUp1ZiMZqH1r7",
  "key22": "3nuqrJcL8R17mGvdz6TniKWWCoZeFPq959mLEF3b9ZvGxTsWRSCbxXf2NnGo9pBwEYZU4cU61emXeP59BZeHpR8j",
  "key23": "G1z7Nj8ANXjfRr8N38gWRHCnkVSvAtMxnRxUy3pNXftvnrtqmgZbGZbpQ3M5FyoN9RD886btnqAHi7mVhEjozJb",
  "key24": "5QnDQ6vKttuxrCLF9ie2nfjLDJC338qoNcXAYFv7YXNDWusMAjHoNZazZPow4qMQXZpBB1KiK9SaxE2sfy573cLo",
  "key25": "i5Mn4x9UAGaUY5QVMVNvrxVB5zNYHXcWuDXymwH78bomDGxAcTgeQL8N36GZW9AxNkVGUQQJUV6wg9a9i9uxcN8",
  "key26": "5NSpa1KshNxdkK5ehhMQbefgh3SBhiWEVrZnrXtUMVPUwViArb1BtgMc7KRQGGCiN1eMLLQhbVjpyWuXFqYge37E",
  "key27": "2sBb7SRDQzHiUNd6yU9PMkbH5hW9Gys78Z1jyDK6T2HtMjKK15w5jaXSqQ331ZhZCWAA9c48YQ7Fm6vc7toVUKi8",
  "key28": "5Q3CXt5XorkBdGQTBVHdiW1USzz2i1zzX1wmv8GDKqzBRADGBAyNZUVK5isU7NmQkyfjjqCoMsURsvCJbg59Z46t",
  "key29": "5jfMieHaTfaMaZDUeDYiAxoshjsYmqcr4FVHvtvH5wBQp1iY3cVWvhBdhcppQqacXZzwoHKABKnzGnjc6oSnEdbo",
  "key30": "zvNjNEuGbgGwHeghzf9HAZMpkdV26i7mr4NiQX2qqDhwpFxhgCiNNgdFttppCHzWG4ArfZh3xFbiAWZ7sM79WWP",
  "key31": "2gbueB3kMTcUm6S54SoW7aEYDmdfxRYnobYPHfvjouDQ8SyNNegL48RahbdftwMk77urX4Mii8pRKqusSmMFyfcg"
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
