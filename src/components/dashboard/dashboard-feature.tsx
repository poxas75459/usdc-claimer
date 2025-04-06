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
    "5Ux9JzcakLY1RQgimeec2xFsm1haWyLCfk4psRM36jRq7QXmW4EsVAwDThE291VnA7pSc51sAsLc9nx8w8GiegDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7sqyWSzJjdbNEXBPQ7AkwRNLcPKn5QUcy1iyJrNWTdBjwas1FygvjUS6EgdvV4No7YD4RcgVD7GvKwAPMy6Kj8",
  "key1": "2GpqiiA9vQVnmdZwouYvsyMRv5ay1BTboC21h566fYtgmZ2U3WDgsw5L1m8Dgxx2EKDu1jTkG4PyfzNjX5PWaTFU",
  "key2": "4nCe9MYUhCpv4GNxYgEtnkgxsrAMAREw5rbgaJpVN4z4jVGMYUYiVkuVk49ebnLbznb2R6DVy4tRRwbm4T7yutCx",
  "key3": "5wAXGodKHP86KN9U8ufDC1YKe1uvJNoDT8PCMZPNGTfYfhmGL56daHR3CbA8gGAcmKw9qyrn3YZBq7yQpEZ3EF6X",
  "key4": "3mt7rJhzuP3N1atdmRuXZ6uXQ73KLMjSBB2F7H6wn3udsohmRP8Q5Htazax4hEmxNh24CJb8nEEZHKBYrx77oewr",
  "key5": "5aUXF5kEqLREDPCoa8RPwB38Y5kJLi9D6N1eshhjaQacFSHXk5GtjJPsotwpRqAUADnFo5X9K29pdcBhd1poi1fs",
  "key6": "5BwNKEgAypA1z2MCjYzMx2VERDwZETnMv6CtoTaRTTLQTYZ7SwvkRBMHgL75mdogpXpwPywMYbDiqmG46Hy4yVAu",
  "key7": "4GqKyvZtL6xPXeHFQEA3JurUJsaQw58FPzmiQ6jAU2XsJmkdHpJDVnzTiwwDUZHVJGQ9cVYc8zEVWBZMVfT77ZVi",
  "key8": "4WSfLDDAJQP7F8QTs31yrwxSwkygkyNq7N2Q2D19UCNLh7TympuFQZb7ZepQH8UEEjgCbDQmQw5hnSozRjUeLdsh",
  "key9": "5TQq8siZY9KjBnxqpVJWCBWLbCeerksBpQbTPdq8qHJe8KFqdczxsxNCugw31Snin2mzh9H2iXrxF3st4fH9DCDU",
  "key10": "5Msh64QqPe8Kv8WbTA4vc4vu14kGWvS6JANVhVswif3g9nnuEHqc5ni4Z65JptY1DxMt6ghDgQ6CTE9xjxEKFLVw",
  "key11": "zXXekAzR3MY3CVHytnWPHwUnrUQfb7bvFcBAvU1ndgURpisfH7ktUb9bqR2mrimFTG16wnzHSX6iw5S4mLtCWJu",
  "key12": "27W3kNWXaouB5X2jbADYzUZEozdtYyNZA8FWhfy5L5deqn3sWPbMB8rjXmT7KAxA82ymijFVRmmD4iQdCBy2DXeb",
  "key13": "5bVpPfZ9RxKSjVFmTkNrCcKihukW4VFaV5RH9JWdQzRDdFHDA69zMVGQS6fd8RNVYH2tQKTgxcmsxzmoqrd8dqnw",
  "key14": "Uu7J8RcBiRof3WKzCwWaY7WeAofd7B97VJYENbAVFeTBgXUP9phm4MnCUwBKmqiENZT3GfcABUNb4xbJVJrseRN",
  "key15": "hquhz7uHvFTw3NkSSazLM2dTs99dVDLw54Krd8o1aTzP9LGwZ8GAsxERAeg4keEQ399aS5rsSuzqrYfh4Gn8dD3",
  "key16": "m8yPgKY5EBifgC1N6MmzgRZ1d3PfU2LYzjBYMKSDfaHAeuHtWEyaDo9ba31i5352yXzsvcAcHqbkgB9X5KFa6Dr",
  "key17": "2fdEUeva2XjEk9StgTDzTaFZSs1nXpKMw83JkHzP7BgyRcA2wmLqVqydJX2CbdQmNYu2hChMARrNGQ3JVmmHoypW",
  "key18": "4fk7N9NybKmGrAN4R14Svx5gDbroXGEewgGhWUihKPEBGHnFeApRy7BT3g8wDJb8WwuB56PPwhcw9m6J8FZ2Nnbn",
  "key19": "248L3fDQJuqw8uvodAWSQ7eA3ipyzHczagy6Fp9TFVwdkVaXscVhxCYJPws5tgRbrNDpai4T9oCL3kCpMRU142xh",
  "key20": "4thStXNcjsuSWNJm5qPmXg2fZDpgVo9dcGJLWuUtt87QuC87cZmvNEedamjpkhVwd4yDmdJx87mrYCMbu1F7MGDH",
  "key21": "5NzDWWq2fMR2HZjsnvW5eGMH7rv1gwHJrGNFQC5ifATEAY9CPpJc1WEhERnD588GXC1qpmLaTNxN93LcqEikA7KW",
  "key22": "4Yv57YUbVN1DSyhcYeWMmQr6WujhN49QQ6Ew24s9sKxZeWaTn1yqnj93JGZ1qH4MvQJAD52hAS2KZM4WUoQZ7qvk",
  "key23": "2P17tKNjn1mvmQVYR8A7WWzukVDhVbHcHUXQApb3XJqyyTHmC2BWT6SWp6KK57ftkXjfDkQQH39mp8bDTyD3XaQR",
  "key24": "5iaPwKAPe9j4N2xztYfnZTUaLJ5YrnXiDZg9TKLJw9rBXQEk1HTJTtN4Mw3dP32rKaot3tCiU1Aa8UydL4XZWGeN",
  "key25": "5KUGfiFG9zDx4B7knpV5M9HfdwCAuSZYmwa3BwzJkS5R7SW672fpeq8URfUEQN7qHD8YM82xkKozsJFv41Hzsm9g",
  "key26": "2axbAfEK5PRgpAjWWXLxyuB4rg1nRT9ug5RXixRbvzJBK8avi9CWwWtHfSeaJope7ZQ58Sm3NVetSigkUtVmzCUs",
  "key27": "31axh7QE6Jw6RMNZnsYKSp31zFjfVtNQsN8YfiEepp3VMj27S6Tc4qrb7piP9BYv8ip7FT4cz5GCFnnQEpjo4fG7",
  "key28": "2m5UCwDLAL9ywrBTtC8vKnU9JGhpJ52iQYLd9PdgFxRUk7nvuEgZ7DzL3ARF8w1Jchd6MqinqUahm7gnbMSGmPeE",
  "key29": "2aBGmt2EQAXpzrrRBGqwzd1WjcA7z4oty1jbkg3Hv2DEST5JyfvuGrhgajELReCrWFiNEm7YdiTCrQPLMr71m1uy",
  "key30": "5krWLxBJTdrLTuGaDAAmhHSiQAusihLKH4AEuqyW98HfdFFKyxDboWCqfmmGFUV6D7qg6T6xAvRG7YRNqgrc8hQd",
  "key31": "r5KhPtCto44TdNUqSbzS6Xg2DiHDtefR7i8ePRM2XhamhfybpSFmGs3r7NoYWjXxF53A9bLYM1FU72dKrTG3YP3",
  "key32": "3M9gKMv5aCpn9ozFRcpK13kfkdkUxi4zYT1WjZbkdn6TfsJMhY1ZDZ36SkvZMNmoSXZMheCjYBkVetb3rFpFPuqp",
  "key33": "58hTLUr9vrvTBxwzqZdQmMZnhNU9ytRwSUWCpfXSfaX5hKqV9uMWbJVDVYPw2342nfMSvpagVshd7ZaC4ELoKDSa",
  "key34": "9XD6NvVZEvinMqvYmwRdyeEaxLMnvcsD6WSoMfgtNqhJgcCYgNjRucB5V9C5htDpSQPXcFPDbQrqSvHLEG7NhqK",
  "key35": "36dNR6Vm4o5kzTV15CnVCaGV9LANy1G6aHQtpNXJmnugoASg9Sgw6f5BgyMoowGFQAjUTxKp38kLQXghDCa45XCi",
  "key36": "2amJBf4ifVfSJHKJxHGRMEJVk36EitAK2CsQnvxf3y8NwoTeEk5P4H86EsciydMDxrpZ3NfyJ5AKKgB7Md9hTKLg",
  "key37": "WcD16T3pZtu2g4mojJpRoD28Znm7HzYtgXFtiuNqnxEw2g5MyVVgpGTJFGSTSXVcDS7b99oQ8HkNMdWo9LLz7FS",
  "key38": "3YMQbu8uTQqxAfbWqhbETcKRogxLW43Dpr7CfQVcgodcWrTLKtJJXDULBKxSvMCikAe5u7cVrb9FRWcBugm7KYiS",
  "key39": "46df98L8LxFup7HRyZjd4ThNKoQC11wvZREuydK9ubTY6usnn6GUoZTpxpN8id91DEkwh87mFVSHH6Xor7E8sMEh",
  "key40": "4vCmaohz6uNp3vahbUsKoGgpQ635Sht9fbZwCu4cr6SBp4USa4KrwcAuhnkZeeyTv7LB1GJzmgJu7wTouwALyn8x",
  "key41": "3Bchf3eGFTRCJEYayW2DiJmBDD4s3nngwATFhHrV5KnLXBcgvSn9T8mMx6iohFUgEeLmdyyCHPMrSfYga4JuQrF5",
  "key42": "xE9dSKawqmWBk6cfcHyPTZdDDnvj2dn7rdhMudhKm6r9hugQDoQWBtG3iHJbQxfvsNRjKFeaB77mLyhcKTVcqvD",
  "key43": "52WydL6rLq1tP61BMBm9ZtB7fQu69ZFCTk2Udrosf8B9iwdp1sxeDAHp5Fg45Zo45iEkYieQ5psczwYpb7Er7sM8",
  "key44": "5MiyCJLgDn3Gbv68vkSNRAVbvWjXcZ4z18um1nzehjHdq65yy9eR4Nk27CmddAPeFb43zzQz42vhukUnxRCqf5GE",
  "key45": "53hk4ntB4kempEn7dSoBZDW5NPDRCP4rpF7XVGDyNByiSSrhCjmXRHKNUgdFSFhvaaBJDHjyZwK3YWWPtXkKyaxQ",
  "key46": "4bRFGccsamxQrfA4CbZcfjzQhfU9qgZXob62gh2d7BEdDNg3vHq3HNfNdoJbZFSETHWNxzsqSkm3odTs352mX6nz"
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
