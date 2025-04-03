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
    "5widwPBsNRGoDXxKr8K39uyBwYKmUHK6snYNqDGDHFVAL4vo9RqEuB52WQdC7GzvLjEVydoXg9AWMeywhygmDabz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBd7wu5ZMf37ePSH8U83b8mvYu9GFeUZnHFiSbQa5n7eupfNCwmDU6PXjsBZm9istjTyAL9ChSNPC8WBGAzcucW",
  "key1": "5THVy5K8iPX34YEpN1g3yJQrJ4jWYKN2myx9FXDfdeJNmyjB8jakTFgmRbGuVF6CTQJXeV2swPEMM9MgAAGxbDGs",
  "key2": "2sQbVvwe7ecgEYutiUdpgJ7Y5v5TbcxL5KyFP5rYT9XqETyLTMUKwfn4zm1RyWNeRFedkU5mzCxQRaHVwGBNe5hG",
  "key3": "5JGFk1u9GjvkHPnB6kdyVBYajPLxAXMQuJYwDvC4dv6rLBKaDy3JwLXSbBxzJ4Vcsf6ToPtGxdyaAf7Yb6LCHXrt",
  "key4": "4gM64j2xpPNejNEZgdrPcGTG8BaMqtBw62eCPK967jLVzGbfEqhbqD6iw9TR5UWqCJibNUZC3xnSv61TWSJfa8X4",
  "key5": "3S8s9g3ZkGsQHjMxxYmCiTMk5tz8bjPSJ9j2VUmwyhDUY9ffAdZLKpLntsPkXn7uiJg5Y5R9XV2JidHbB1soCdGw",
  "key6": "5cTXnpDwX6ncKiREKtSr46Ar4fY2jTo1E7gh5qQ4WCNGQmNfoe7VBdgG7aXwFfWwVVKwchkHjge6bQCPTJ8aBWb9",
  "key7": "3tE6z5itybpUxAjS85Xtku55LAXcwF8xDHMqzk3HHwkNviJ1Jbe9vGyE5cPGSMxdp16eF39Wz448NyXxwsz7Aerw",
  "key8": "4gb3AaaKmZwTZkFWAC6rREX6SzRgYFDdfLSzfSvpMB8n37kuzjUzWdYoQB8z5RtLEtCscjFgbznzaGegY8XefTuY",
  "key9": "QQTaqyJrrvXZpJzaDEk72H4FkR63EGufsS6xMB3ysgjYortVgZxkf8FKgipp9FrBGTzDSzkAf3xUaxo5hSgAJCs",
  "key10": "53Mwt62pBSDbyqqWGTCZ7AzfiREezqArzQeW7pGme3ygyf1jB3YsHJ2dPjRML3GxmPyDa7pgHHxBQ8pG2aHWZP5f",
  "key11": "3hsBHdY1JugNAW5giKQFoxD9cWX43wbDtrGRTLkGRqsnDgKjFcuQ9pvJ56gjmoKo5jK8Xs9cgqSXuYXT9dA6vKf1",
  "key12": "5jk3FzLEeF9bEiVbBcUgsuJ12hrptbDnQCC1snHHW12zihWfa4p7etAkBsv2SwfLQbodkMZYhwwQnh19jShhXFYm",
  "key13": "4VWhUkHyE3xP31aZwN54hVQ7mZVZKZfAquwvTpjNyzu1wXQjAbgUxJMU49MCzJf14wz7oAwmL936SCa8EmZnrYXw",
  "key14": "44dqxedyX5UKBKZ8ZZZ513it5A2b8rSWWDV7AsPtNvVfbCQHq9xD8rxT6bPWT1SyTvcV1NL5GpMaSfUiAu1bTSPF",
  "key15": "2pZh4br6GxFxChYKtTdaYFyZBZH5kXRNmWCbh6hKiCbdzGNASND5uQHUkEDdN8SvKfjhdfBDHb34MvgJ9nkWizGo",
  "key16": "BCetHC7H1HBcaVpH8or4PRKgLACuetzGCzWEb177u4r1ZC88pibCPzvErYZd2GVCc7CwZvacoVd5zmUVJ7PnrkW",
  "key17": "4GTvjuxm4gnPxgtcJDk9XiNWMfvb89iRnmxPYHL3oCuNLTh9wRJEy56fKVYqWieN5rAxtewp1hhC2k9SyCUkRFK3",
  "key18": "37Sk8C7UtEqVne4YqwdRvowsqLUn2CNZubodPizdnvpdK2SUacniEzNUjEi79vx9emXJssL4dVgjbBvA8e7XEeX4",
  "key19": "5Dzu4z5jnPNWBzfAp11AudhoQP2jYVy9mTVg6eimTH5BqmYw4WtVkQvZ2KchTJDTUX9rW1zG3rPrq7vTzaranTrT",
  "key20": "5hnrPwvS42f6BdGujCoYUBPLG4a16HFrm1uBoBuVFKQ8u12JdLM15e9UchrwbCE8y327hjz4hUrzmpnF1FPsP6Go",
  "key21": "524CRxdBYvhbRoPWyPmPYHUhpCZJYMi5ypVzjbnu1ECAW897JxoM7cs2MviP3ECQsLKUv4qM231jhKDfmiKkoFQU",
  "key22": "49JQukmQwQi2cfqRWErBCoMKNhkTguamJYf6jYQq3moimMJYrGKe3sg3MiJz1eJm6BVEpV7PLndrANhQyhgc4smC",
  "key23": "5dnaGexFFcjamDdv1BCqB9H1N3w6QYTvoPVnFHdzvm9ZD8c4e5yRWxofi5Ehnb7tLa9dfqT6EZ7XgjaMQZqdCF3p",
  "key24": "4t89g61YFGxPcZ61b3GBZheXpyCrDHgAZZegee1zeqBgyJyDBfuLqnX3G75RVSDREbsou3a5xEXvQbPNZd1K2BS",
  "key25": "3frDeE1wWMN7yoQyoe6bhhN1isFKk9w2J5ifgGe14g1WpFr96yU4uKpD7FzPkjBUjtTUTZhUtmRmDEr9WKm6vL8",
  "key26": "4tZ7Hi9sznoBhVqt9vDHyppLTNiRT9fBYPjnaeag9b1FzwiqxdFFMeBMYnt35CN3LwJLaLSw1Qg8YhZPPpJg6vDU",
  "key27": "2FgE16fYyq6MtVWEB1AnRALLmcPW916DeE4xQiBzEot5WfY7nUpiA6xxzL4vHCThFzeYpc5fPp4UKhjQQmXF3HcA",
  "key28": "3uiKAzBS7PwS4f7ug1n1ikW6oPt2XSh1Y2SBtamn7F15Z2merEwnLfQL6wz36PX1DfBVTPyU4uKgvnZ1zke38cdP"
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
