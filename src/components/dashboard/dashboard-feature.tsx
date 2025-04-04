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
    "3zGtpJFaKPdt1bcVHApSSav53qHiCUkaVL5qSRn9dxkBDXxY31cGwXvRC2K7fg96475PU1jMi2dr6wtJf2AMzH4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yJuKhTU2HyYBkTG8aBr54hLVMRJJbLRJ5F6Hihz69jVgwxuZeBadRW8UdgM4bUmocFWQT3Gir4iReK3fvPcuDvm",
  "key1": "4ReuwjFBibuzXwCPd97apGdWit8YrJYeKg1p1WW8biJmNqD1whDHwUNVFgY3W6oL21T7PXz4bSDHR4nQvMNnVvFk",
  "key2": "cexCUt3WsPZZE6SyZnoeacJpDit8XBfbKkfHayKQ7qA2BKVyBHs5jm2UY7Y5CNwf9zLBB3iHjC2MpcjqKBmQGL4",
  "key3": "4pLMFe5f4crDVyAwhwb6f1wTZGpvQwtk6nFWcKALgNmwEYEGCXw7SFNAjmMVEeks75ukJ6eku7FwpUpkJtmp2QcD",
  "key4": "emVKLVKcPoEaVKfEJgpXvZCjr3HgWVSsRPL7Qsn456S4c4RqP9XS2rRE3kTqyMwcnqX56vUAC3gMY795xD4ygU8",
  "key5": "3Dy1wQoKgZCbp1pbB4MUC3RC5t3ssZpoVGka4rnYMDycWqycTVn7D84f2bsmzuEihCudn2SZF9aUZeE8N75ch9BV",
  "key6": "QgP2y7eQRJhkTyvK3V12C7L87Y4KhCcTRvvpQRZSvUo4Yjv5PfvKECENwuR3dK2ssJ1aYudBa4JXFjy9eSpgBAB",
  "key7": "59GGnPud4v4KrQvPhcZb429PcX2xaTDbQjaKyNZQhqFpdHvvrY6L7YiECQEzksQ4SYrjaR1X1FdqpaU9TtCbMaao",
  "key8": "4rRfh98ePASKcsFxMmx1HkgmfC7cL6WAVg4vHCdQa8QjehCcJWJEQUfqyjFZ2jCz39w28DXExvVJnwPh6rXCT9bZ",
  "key9": "5U9xuuoAEj93ndum3VcTH6xXkfyVysGG3yszoyRFD9nx5bKP9FYMnqAGKWYRKYzofPKB2w7Ygn3dJ2zHhCzRcEYy",
  "key10": "3LGoV5E4HmVf13QwMKKXSD1EVnQh9H1HTSBLr2zXJtEcKBCY3X6SgXKedj8AF4qCSXwTmBzcYik57E62F8UwDfU7",
  "key11": "5UYm5HqKtHVR8GpSdqRquNZDxe2yg8cAW2JWRV8h4X7A2qAFt4p3F4VCNooP5XVkrK4aQCMBmcTP6H9LCXTCyR13",
  "key12": "2UiZWxwQRJ1DgySQTWpEpgf2h1j6WDkCurcXfzGWY72BgNNMto5wBXRDr9BaLECzrrpJytmHSAHFnF7BBtCDGLSt",
  "key13": "CqS2KZHKqpENkVeFgcGnenMGr7efJRBAcKeBXac4tAFyHDgoy7A819mV8F1pWadTg68mW3PCkVGWHbfts7atntn",
  "key14": "3B6AVoEvJfL5aF3FskituGp1esFkPLifZ3csPRHVzeHSh8nqgi5jv8Kj1J71foTMzARDMFqqLAEroi7qYakE1oFX",
  "key15": "6Z4ke2Z6XTc8vUjsuxhSUDoko8Rawb5MQEawjT9imRrhpWVsGQb9FswjMFTbZHoBVZmnEnBFhetNdVymtR2x5bH",
  "key16": "5f91ydi8TYC91DhFR7MsdAvoLf9Y74H4YeFQtHkQS4VDDz4wteCu7qwcBFrG2u5ivaAnmm6tUZ3sZwNnwSKNB7tT",
  "key17": "63C2KNCBc4Tnexo1aZLwKe2P94HfjCnSntpvR4FkhgvgrSSyA2tRAT9s1Gvra2SbwTGtTECC5fMdFmBdhEnQFMGX",
  "key18": "36ZaSTqyx3ep5zopJBi6wid1Wo9SxBiU4M95VNjp7M1ybi19CccombdwS2mSdkrt7mnVoFEJFXPZSVnbfo9dxWdo",
  "key19": "5qSQUQg3XR44WT1S8e6xEk73VgkX4enQvNtgASheDJNza2BiKgUS9JSmNf7JUCBY7HHWS1chK1CLRWuXNfvkttMf",
  "key20": "67kLHYB7seYNxrc9qDUceCRtesL5Y7GHLWT3AgJengNAiCiwu8s9jZDgKFezMxbvVAgN45MTJDKbx7FBPHfgRzwR",
  "key21": "3yF1UBB4HefPzeSaA1ys9qoiSKxMJhgfNtE4G54W15epkZqjmPVwBFJ6QBc5zo6FYre61p7KBEjoAiwes8rfJHuf",
  "key22": "5s5vhA8zRYxf7ZJ35b1gbQ8Yn1V6nokLoApKr43dByHJdiX9A1HY39nbyD8mCPR2D2Gzjas4QTj7RUQ68muSvnfo",
  "key23": "3nUvJSgLzj9jJWqAPDph6LkbtEbFByvxddxeDSa73rb4U4ye2B7BwVAQ68hAoDwViX3Y2KAeF2pKRwVZaHu5pFhe",
  "key24": "3DzLaubJ2A4riZRKXTmPQJNKqVmiYu1qafp9RMaZQdiD3Sr6sEC4QWwWaAHphHeLq6aTkyCTqBzLhnb72JCzrPrG",
  "key25": "4mJid22Hd6MaNG1nDTFJwdmi7rP9PigVuQpWnYvk7EeTTdQeiQdEtL8hXnUCrPPYnHpceuMD7ULbW5gkPQuhXsrz",
  "key26": "4Y3qpH1TMpxZz8SnJhsw3hBpF35SgcLkkZnqdxbGxotokdQiPEzUtxC99bcxSEmVNLC6iJQxUDWeeSSj6BHt7YqB",
  "key27": "3bgJqTw9acfLht41wG9aR3u6kfv3pcNCCiLCN9Ub7aNhs1xbRzKBA2rLBZLKUieaTDk75Q8DUvFFnzidY8BC6aLj",
  "key28": "askr3FABt2HAFyQfNDeJzX6ZHD6ZezUyRrf4chraySSnufjPP88FVmZituvm9d2QSRtGbA7UiJs2vXSFWxSoZxy",
  "key29": "4GKPPdb9hHPzJ1DcLETAP7SCBZSqWvqgojebHLQNw8JgiWBTamVJDor4xhZd7Leqw1H9ccKbkNginqkwuKjQPwzu",
  "key30": "46XqueTj2J2Jki7jHwzUMLK9rfx6V5EmugivL6HgGN84XgRb2bpHCxJWWYr5RUYbwrEUEUkixqDvyfPbXG6FAgBX",
  "key31": "4XH4xsw7fD23LD9BbQyoGa2mWzUQBEFJsfLMxQvo3pN7t47bK4dT6Hjt4HoVtXRu26iDYqPVkqqfFnHpWnFbMQTJ",
  "key32": "2F8pA173iG1yCLHvAsnvxaXNq4ZDwG2ZtqbHrkREkKLnHrpdRmkxAVdFbvUifx5v7ZsUuAg9nV6nKoKRCofTNeWz",
  "key33": "DYCLXXJVUtRH83FYGVXquiMyX6AZoMaQsiFqJ9xpdVhvpMjwUdsYjw57zeMg69dug9oSpURwSzMUt77hXQkFbff",
  "key34": "5Zf2fWaS1XomoAqjCRXo4qWRdj3PTSYiNAb8AfiRHkeMtQVNwKMSEo7GCJj5sBcuEMKaWze6Y3vzWRVbNpxrrSQc",
  "key35": "58SEeZo2QQophX6M22VsaJXtHvPw4zDhZMYAxNdX2oigDWScssUy4LB8sGr9Z6romjHodz6Ru8yezFp3AyBSd19v",
  "key36": "59ZrUWU92USbATWsWGH8osjwbLJBLhoM7XPzzL6saG533rHLHJyGbASzuhB7bQyDSft53HMrckkALuBfARyjFkre",
  "key37": "4oohTW6ZjNHTabmSaazz4dndEvbxHwT1pAys2YifkKVR6VdC4AVVyt1wpso5rhbua25iXKKyD1cFBNPCqj5UgCNo",
  "key38": "5sqAkXSREFhzmuWMZa9724L9BiCzdEs2EcKbhBbTk9FXhUERJsBVhcfsbHGmb4vEWnjHLyWZ5zjay9ZDyHjk8toS",
  "key39": "5dPJ4R3ZALV2fPXkBBPF1U6uevRTWWL75nFfn5RxbmRL3jGkQhhZFGGu4e8p584bQLNPVS76vw2ib42JYGHB9RNV",
  "key40": "5vaYeWPDqvhRPtVxCGWmSKDmeHBasGoWc3YnCnQyknYoqSckKipNmnj6VMn48xVpos49NFpY2wg5X8UeaEyne4oy"
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
