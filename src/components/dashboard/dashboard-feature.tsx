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
    "45kyrBMd4mSEgrzJyjkT2cCWB3LtwzPcfTZQcGgiNTpyrqKJBw4WWZGnK4KgYP3KMwtRVvmP1GetagCAcgakyJPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2foZC8ifhwpHdStHWskWYu5nV48GU26jDKMuWuwa4t82MNWBVvEPoKk4vo1JBhtETeoD8ExZPgjDe4Arx3Tz6R",
  "key1": "5XxXZMnX6iJjt4h4WUJGejgd54tBsTvmU8MfNVjNCTed2ZWCFt3AKFVjH9SkSZNJALqvT2qMQTu8mhFkVBzVRTRS",
  "key2": "3xmh4wrsGj6bys1i5Y2XDKM9qZDkoej2bWEhDwxYHWQh4XntCa9TAWLp5TorxoWvRCkmg9s6myrUKpjin6QEaqyi",
  "key3": "5Nid1bxbRzW9uKBbPmkqqjrrjtHVViabrrgfzfQw1ThojJfXCPkwFcoe9HsXr16Yjg98mkcZ9PHjwukP7FJ8HAKk",
  "key4": "4BnoYztjJADoB3CQnGakW7ehh3oJ9XWBNj4syeem1kULbqKUWqWVmkk4h2oYc1q9MK8WuMnHWSCtHe6TUaCPixa6",
  "key5": "2GqfdyiAHgcib7upUNJanYRud7fCNBBSPy9oMWikQjv74b1Q1VnL4eGi7FDwiS2jHEc6QDPnstzyg6ctDqtSsiQD",
  "key6": "3SAGs2eArp8mVGMn2MarhbRE3kuiP8rxxwGvwD7YWZF3SSEHs74w2SyQtecKVcyy8NCEZJgD55W56XPazdtyADVV",
  "key7": "zKeJriLGWWjA6HGRTjFUzFDEDBT3FX7QxfdeNtD6XHpTHjRkb9GJZFGyyp6gA33WDcHnQBYtXqhejKBmWfv8WMv",
  "key8": "3kCTR1zqB2dco2egefJSKU7U3jC8ZnxeKKpj6TAoG9zBtUoCTMSr9YQ7QyKgGJhNmDH5NsQq2rHBUQcJPTgtCRr9",
  "key9": "5A1iGW9YyBRWUHwzLj9VsGMaPg3gQySZgQ21fikcpgqN9DrapWbzNVBUHHrfJemnPJx7Ce7cLLReokQxKuKBvfJ",
  "key10": "2VqksFqiHH8MrYqpn4QnYmSUmbdyn4rgeu7trpqp39iqURW6Tjjb7B2BgF779Hf5yjcHT3WGSgCzTo2kQcxfWigJ",
  "key11": "51WhFfmdc1oHXcNA5rDfZQRkrijcwoF9PHY7TKG7PeiRU6nRRqFnmqCsyUct6TUmr4FqyJVsMmmEMY773xbPpwdT",
  "key12": "2BnrmfeP93AxE4N3N7zo6CFHeQeZK25WztCDPrVoQKTN1hTBbw5ELBSu3BDmLsAk7jPoo5D3mKCNGtYVYtpM34xs",
  "key13": "3dHv6s7bw5eq9p77qLyJ8jsKZLR7r6EkoTBswRgskjcP5qcUihHMJQmriqh6Y7sLfGiWTBrjhYwFqngTFfDQp6Dj",
  "key14": "4y8wMzsnQbDp9eoTdBRRuFaCqinGhbJvAeH79PKv6UNvumMhjB2ERZ54xSc5uFXG1TuTkT8i4ucLx5GdszFzGxQS",
  "key15": "3oYTywMu26a7rG5jb4PgzW9ck7epqwiQ3QmRXSeVE3fzewq1VA2NikY1cCZtV5XTWWgkUwKSVSi25Fx4AJz4ztzX",
  "key16": "V7bauB1kttHAp7kzH7uNzLXu75TYuPsDAoti1CiAXLEjFEyJ3jzZZT1rmGDiNW9gx6Y61WWkdgT6r8gNq31mQiW",
  "key17": "4bnPbKDbZi5sLmTUDsvV94NQcePzH4WVSSou19u95rFEuQbdUcYsvSa6V4iatrJiEVrSGADaVuuDi51xxRdbWCWb",
  "key18": "pRn62y3RYFuF9NBvFWUyR7uNMyqSB7m1BSjYmy3CNjdShiRFLwLKHqq1H1T1vW77vE38aXTZHaErDE3eMjhNkJk",
  "key19": "2ZQW5qP8bFRr3DHgEVeb42gWzGAVZvaVmjHcFCxuyBrMTQgxMhARVydqyah1YFE7dNEH3gVBHJ4yJr6m6LxtQNSV",
  "key20": "5ArHPS8A75tRoonnbfkHuaEHRkfZ1XHxTJA27k6TEJqwXRu6MXSMmG65sZQ41wRxTU1KnyB36kEwEQUjRAuMv7d2",
  "key21": "27dELgV6GWRZzB6iMmTswBEQ3DBbCvAXjH3BxRA2ndSLDUMX2oyzWHprnR5hNsLbZwZZGVgNdRXEuzFGKLrCtM5G",
  "key22": "2X1fLK9St9pDdAyL1BFxH8wTic16zju2s9uJtd7Mnp7839xmiwuHpisePHBVQEvaQxwU9S7ssUNfaCFew5gxRaMH",
  "key23": "4PNA9iMg69xiKfvvG2gftdSUxYKnhHmFbhFQyW4UsHCsHtobju9yXdiN6e3E6Mc7isaD4vQZ4RAH34oYo9BTcgKn",
  "key24": "3vVfUbaeGijgP9TACkaRTCAJxNT8uToj9G7Vguo2mj9xbn3ULbZW4anwEjCL8QxRYA8KaGZNSFVN7iwots7XxGra",
  "key25": "3CVWfak4y39moHPvYm1kbM2EVWSFWnc2wCpcruztxt2SJyxBL8hTyvGSauCS73bmonCxvX8XtLunHQ4BEkBEWDx",
  "key26": "38fYaB7EAQk68mufYXsjmtKEiA86Bo6ax3T8AdGNeYVTcyrnxMENF3jkEjM6Xix4rLiTRxdMbHjzxZiSjQYfAwQm",
  "key27": "5Gc6BMUj3pAhCcg83M8rBpMoxowdtxsEwdwJHoAqySrWuzHv8gojZTGfVjMvab9Hykv9GPdWZuoX15948Lh8vKgd",
  "key28": "2RsMi2AA9XKxWDD77erirpZsJbjxbMN26VV24tjTGJaYAXkXcZiVQUMd1LXpyD3scPWCjba8uTwBozav8Eg3jCcV",
  "key29": "4Qa2RT89LYs33nBBRMkSwAfXFy5SKVLJdnCBUC9JozKFiMXuX4eRqNZwv3tTUd9CQu6io5UDBZh3ukk3psjPnwvz"
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
