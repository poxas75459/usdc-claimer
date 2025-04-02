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
    "xwcwqgtNrKz94awzFaC3hGzEJ7vrKfxoQtvf7kPpHuc7AfWEVYmiP6cUYdoRmgLzT6j95Bp491Q4HRsw5d1GTc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FAq7E74VzPwHXvtyCCwb59u7MrY3YqTzfwnw8GEryNTZJnprY6r7p6GhDubsNg2pyKaEszqjxhcCQwWtAZQasWd",
  "key1": "5ui1YhrY59eHeoTfmEUN1zv4XJxy9ucxffmRbag1zuVEpzWiQNTa1SyokESBbJETqrET4cVx7VX3MLkNJVeKj62e",
  "key2": "4PyGGuPjwK2n9db6ZY9jtwRcDhN5pitN5tLGHyQDaQWzt3TnYZyYKwqpVRVNmC2QksjBt9N2GuhorAptmg14UnbN",
  "key3": "kfyUVZ6C44yEPimYKZevBGuhPfZjpSgyYJNteo9DXFbUPjXo7UQbg7VaW6m9d3b8RmaUxWrdoEj7qQPYazEEBm6",
  "key4": "3ubogCygEMuh2qRbEEN5N8KyKn21Bmz1HLQZiDCRXZ2PmFpTLTxBZykBppsksBcHJzqjK3NbofSsnqrna9f9AnGN",
  "key5": "2MGFDVKNoTqvE1cFv3Td4qZuQ1BC7AePdaTtS5nW5TCNE9nR4eC1cd1Wsa1Sk7mmZVzp63osPiVG22aebonmULzJ",
  "key6": "6QPo62MHBwFcUZ8YFsxptd8AsH8vYH7a1GQG2PRaqcFNaHiCXgisjwj2Vkk7LV7A2Gc4pwQM3EGUqoNnBcU9TBe",
  "key7": "3joZtfTNdFRTxWeC6WZXEqaZLRci9J4gaSD1duR3CuyFtdezMbq9ouq5V8FhJ69rkMqTe9Yg3b6hkvDUdtieMv47",
  "key8": "4D5mdZywvLtKqgFySyUG8biHpfXqERKE16EiCxuYTk3e1bQceoWjLu7rfkHMrAnDDeUca8VQHEao5ivuoPqcgUYN",
  "key9": "58VnnkVFbWmfWRhzSjUm2am9LPnTsw2VYhn3wK79iWQMEhr9KUj1rfBosMFGikJr45LvsVDdPsuvhu3tYKd2qDyA",
  "key10": "2vwKfLGwPCokACpTzh9Vnj9GHwQTG2kyR9p9qBJHVdZa6ftpSDRfo65cmnARhGSqhm4dqXqxkKzpYLcXi8EfKgvE",
  "key11": "24FdPDjkxToBcaBC46zGskuS3bKYu7sH86PW853qBbqkiwWUZeQWWFvh5t5LRGr7yoETEUvS6L6gbvFryJSmfN5V",
  "key12": "4EEajJNi5Arxz4drAMzZJdG1EKps4F3mAJsKV5PSTFGH9bzXupPrbjxL1piFvMJKKoP88sg1arLTUGkcMigiEZtA",
  "key13": "4VJnMqL3nQMsTxosPammPgSUuTAeUQfb4HxogrVTHvZ2uAfAUrz4okLExJM9AScBQezsRKTkVtAzSujDCc6nfe1P",
  "key14": "5z6cS9pY3gBdNTQTkyEgSbdv1eBBnHNxkoHZbGukUFGYWazzYrippVFVGMrdAAPjcJXdUmCLwfQvdTym4E1E3tB7",
  "key15": "2kJUyMKTDxSSHmqh6pPfUmujum7EANru2pZLPW6D71pC9CnLoXkZrj34jqT3bwc7VMEMuGHurBGa77TUCaGtB2rP",
  "key16": "3NfLY5g7x6Y2dgVZNCr2qqBBq3iiHZqHgfEcbseK7k4VEzULMs6KFsN3CxMPbtMw6iiYX3wJQBBAL5QxhdX1cDkM",
  "key17": "2A7eHcYNpszr2SiX6fxGHeGsu3zRpanK7YAuV8vL39tA286t7A6fbRJE3GPiddqJDcWyZJhg4yqrnEaXsBCHBrb9",
  "key18": "5YRTgj7XfgD4DCEzyEnBW4PHKE1FpffsQKxty8NjwHNEs3Ro1eWrVsCzihVWpvx7VKTymiEppCHVNox5T9zRkvJw",
  "key19": "3MBam1N9qLQLdhGNa7nx8cQPHdjwpY2EgVU7ovRUwoDByJ3pThov3th5jswKcCya9kQvEjdhfZ7JuPEiEEqzu1Jr",
  "key20": "4RsNk7QJHvVTsM2g2DcoGmbTEBEk6UbbxyZyEhASokd6osXpE4N9eD3dvqianXtbZxYCju6yxuZiiAMaizkMsTZX",
  "key21": "54jSy4KBuiScBUMVMWntHcivpvoMvdUqwkQRbf3JcPRP4UXuasfF2fc6yGqp2t8PPpZD6fZubxbsMLwd7n8YxiEw",
  "key22": "3ug6HgLPJfUoQCfPwiKpZUcdSgiVKBXrTht6Af9y6XmdMgeViTfeEDWgHhDSZvAaVQafceFFta7W42x8uvaqzUpV",
  "key23": "3ZHxBZ3qb3VKtFHm14i71Ac9mYRe9nRBaGXgU8z9remn46KWmUVQrMJSFqRY55CjTaRjzMeA3qaKmeRvEX6ZpHsE",
  "key24": "21E96VVf3tCVAZfBLwG6jRC69tUktxP8oPGtzcq9c6VH5wovPyx738LvJH9z4vZM4xNTkgpstnnjayDXdcXwgGcb",
  "key25": "3pwqxx3FpsJunTFrT2QqPZQBwQViwoCXsd9ycY2XajoHVJv6tXWW3GHwnSBtuduqW9VteeMuBD2LDaBQtFtvsjHt",
  "key26": "37QSA6uP6ddHZy4F5CFopZQFNNkxafioLsfAyFwKr6EvsWc9ZEbti5BSa4dtGU2By6pUFwjZC57drHNUJN72SjmE",
  "key27": "4XCGznyrkZ1K2JUqPb5DiFJgNdDyoKGcYhf8SbwuTaqB7VYx23aHfcGGPSuHwvH1icj3ZpdW8HpGQgLNtn69Y61k",
  "key28": "5RHrmz8iJsP24SVnocHcxxLDUZg7P2hPuPba2dRppbEa2iXpARNZp9pSD8VMWTzS7itXisZWHiyHSkvHw7gJvdw8",
  "key29": "5hhZm7xNp1r3yaaWJUSBKcaNMqWATE8qEwSh5a1DergsiDyaJ4mk47fRWMij4YsALSTGXbQCfVnFWQo9FZfxbXHP",
  "key30": "3TkfciVw6CixZQXb1NtPVxrmQtp7ePEFAbgupTRnLb6TCoLchgNdgQAtNksFkutvNDBF5jTM7TRfr8ch2eNWGTYV"
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
