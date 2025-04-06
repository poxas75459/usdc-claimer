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
    "58hncVvX4CoZ7D5g1wpdEEthXf9Snuc2ZNw5rS7DuD89bW1brm7b8YXdNuNMN6CpGacUctgHwKHJycKwcVYqtWGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z7dysXYK1r5edLU9QDuA5e9s5rfZoVfihgSNGb9CmfR5pnAn63yMwqTAC5p1bvuZjsQKiTUKAeEmdGR7WDzutdL",
  "key1": "zYdLgnjskAMCJXSnkfHhtTegcsCDeWVVjTa2yotmLvvjSHExSWHP1xyKbPocGXdNjSEpe2iNvfzn7iiFPAQdpCL",
  "key2": "4xzhJnqyczgbCWKu6BEZmWxySW9ZHRMJ3FYEEQ6mpb4oFYahJDzwQjFZvhSgjv38Uf3QYsyoY5ERUW58eSmPiivy",
  "key3": "J1c9VftaYfGgR1vWxvkMncVK4JD8YiATGRxrMkwxqabLczHPQp6uNXprjozfKudLRJj7ZYESZTo5yEcBHxtpX2q",
  "key4": "28PQ5C3niKXgX9u43yhUWY2h6fsuM6kPB9ebppxGuzSX54iqTtz5268ntaLkZj5oxLKeDQUoNwiSJvLzQBzkMF5b",
  "key5": "5n48QHeD6Jf3pwGK2dpjLpbUoneKjzNW2NFSWj5nyXpWsqs7TXJBRU1XahhTKUiFkrYWwVLy6E7Tk3BWEW7uZmMd",
  "key6": "yYn9QsfzTVT97U5CgF3MrsQv2pzGAbt18wTNP5dBYgNz1msyPdAa3inC2T4mN23jBK9AUb4PfqcfNYtMHQUKpSx",
  "key7": "22iSVkJSs5RLNQLPCJboNbn76Nb8oUHj59bXHVj9JKMhjsGqe6GEV31CY59FkTKN93rwpHC4dURihxWy8xKTLUwa",
  "key8": "5xsBQbRi2mh3odEWpBg5u8PiAKgisZuX67YqwoCRdftdRjFTqo6WCWZ95h4X5cf3TVsGcucbg33GsPoBSBr4njRi",
  "key9": "d6YUTVgv9K319MSJYWbupuvMBfcT38exkKUhkjXLwMyBNSYX1JWg6xovn5cPDkLz2Cd2xJsgiiNLFLgBvhWpGG8",
  "key10": "2BZ8C9n4fBcqxadz5y7yUCp8hfLKHr5M2XgP8KVHZP15Lhe3Lqp8g5a2RUku7j7mvPAHMkXV4VVt4irgHcC5xuNS",
  "key11": "3KNRxY46jEL3UCY6svoG3voZD72YCaqoSDPjy3Pab1gPuffQNHAJKkRKxSt19GzBZLBUNX8cqGZfQ1qATaCNAaXD",
  "key12": "5yNFVANTdrr1NTdJYwpsVvCzvP1ADBDYvupRMzbyupMmj8TSk6TWVVxiXQJfKQDW26FBxx88nUQvm4FMcYsbh8HE",
  "key13": "6FkDswcC5UGWQNttwWKssyYN7woxXXdkYCan7DNhPzo6bcRgE2md6qKFvpxFTujWVLQ98z8fN4S99ejvYsUoPNj",
  "key14": "2nNrCLWTFCDBu3t1druo3ZyqgpH3bVrW2qR2X9tywsjuUNC8RcnHP2hjbbUtMUQveR335PFxjsXhJAzTmbHMh5nv",
  "key15": "4oYz2YQRm5aByq1cx8R45y3WuTh2ffg7U8rKdwhnkcegH4ucub9EMKFPCGXwvS37taa1c11Rz9Xi9yVvFJwhq1cF",
  "key16": "4m5kPYM2tu6C2xMELtQsY2KU9AqRLFKGTWg88YDLpzSyma4tMMzvUHDXUNPHN71PAgVyUBo6qBun2cmnLrr44wnQ",
  "key17": "5DyE7xcX4RSjNpQY4sA8kjuYyjkkfKiQKAjVcVyuaX9sAihHQ5Jx9bPowu7diyFxMX8YgBE2sWecdyjhHvy7MiiY",
  "key18": "3KWiKHTcpenxBWTrVjx9fbDNwUSQKk71cA9hswYS1L8BHEtz9zStbQiCaAHnH1GTWkCR9YfdAQabN27FpDjb1Mhz",
  "key19": "2EgeNVXFUkELSYjz5rb9GmYfppSyfX2tf3uZYYr66YcRumGjFpjjaUoZigxvAuYQKG7iae9NnTpeM8j6CXtrkHv2",
  "key20": "5FKG6zrPDhZYYP6aTkLmgAZfTECRkxBGth6SVCcjRvtAEb61ndWacmeJ4Zp5VEBQ1KbQixeqKkXvHGB5SaF2nKsC",
  "key21": "49xjCYq6wGUP8QU6Ltq8X7UwXBovQNecfckEhN9oeLi7SDeTYQZyVAZuh5UB4h99DzK6aoUh6TgaTeJHbvBPNK1W",
  "key22": "mwYCRWTP3qj5okuyTjW5JGPaVYUgWqvniV482wusQTeBWx1hBRua8TGCavMsBA1uzmAGx9TciwTW8iEtPYtBggC",
  "key23": "3srY8tjfve3GkroJidGpNcEo7HKrGvf7pd6BGkpHS9DG1989UkPkgGr4eZpUpJoGZn8uF37S8mgbnuz3GmLKgNr8",
  "key24": "5JVwn4Yok5MtVfpJstg9Jyjys22Leh4Cdp6Uvy6TjTphsYobZyaiY4hGoY8buv9uDHaL5H9LTcqn2dwjb3hkzMH7"
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
