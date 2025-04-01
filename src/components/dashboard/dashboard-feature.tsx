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
    "2NYLxHi4JEuLFKx64MmTY4XDAYDZWBJ9XtVFLoAEhggLUK7W54iZ9ahcsXqjAc5uYCeq7HxKGW3rCXZYgLNuJrmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBqhRBhLcHatBMwwsPVieTN5bvngGDniRpbYoGC742Sish9gZFqar2dnjN3arnZ7NYtbnyL56qDWapVJpZ4fjpc",
  "key1": "5cwwD6zPUUUkxq3QPPtw55aGqrs1aHprJZy9RqfNNL571E8QYrT4rHeKViTWviYhbNpj36yZppKTqYGXRqX5ZTor",
  "key2": "5EPQUDArgzMuRMeQun7awnFqqhd1fQGP6Vz7hzXuNVEhkDVfXfWdvUjaU9w2QH5h2HWNrZURaCKPjVUrYhHxktJq",
  "key3": "23FUqU33t7SoAwQLJ8fVHmBjTypMTz8nEAZuDCV8E1UJLJxpwvJhTZpAKQbLcGY1B2T8oodbpAkW7n1h5vexRS9M",
  "key4": "4fQ4NDpYBvAmH2KCqUz12uHDxZyJqonVUD8S8UgJHEefWrhn7e8oGYyPHpWr4UbD1p21xmKv1KWn7ELUkwnsH8dC",
  "key5": "57Qnkhh7VjKVR18g3oMeprrordGoBjS7dUaXHnNYTuyijB1nqLtr4jSJWuQfobaRY9ekaTaFns3fso8JBRQFQjsq",
  "key6": "9VdBA8TP9g6tvtJUEDtB9e8a1gwwmk9rJd9Z5kZDpENprny6bfJGYng2ktwhCc2LB4dbNG6YDEovczxuxpDASgx",
  "key7": "3qp1YNW2pqoWDxbu87Gy32rRwad5tt1m3L7LzGJL3cTpTKR2t8iZ9PKqYuaHrs3A5pyGtbCGNj43rHCfNq2EQhCm",
  "key8": "2ZFJiTu9839E9GijSgVFQxsVRprxtnJnBTJr7LzLionVjnWkPvH6WTvYiTuhw7HKi4v3Twsrw4AwyBTymBhpgK7q",
  "key9": "2viuVHRrfwkHnQfndAnc4iQHtqvnnWbSitnjWnUJJ3hfNUm7NTWTjJhFToQi9782YbfnEJ9nJt5JJM9VFmP4UJMo",
  "key10": "u9m81rFqRepSWqB1ecDbBKyHeNq4HUfrCCDCbNbAKxBBzax764sVzQqXYitRinMHhf8Qak9Umcrss7pwhpZ5aWq",
  "key11": "5E9qjwBuQwPevJ68g882otAXaS98HDdXRV5emeCnDhkEX2ZB4fWXyS53xUUz9yiYXhuYtSASzjFe8WawXfaAykS",
  "key12": "2scnjfWkHC29gCw6hTfKec5KNnLnRctqRKb73SPWWDgR7wNj5VAoeRopAunzaNTJnVEiPFMeQd2swNRujjGwXMT1",
  "key13": "5Eq3tRxWnSbgRwkhb4cE54ZbnuUL7Tf4cgFEEXetu6V58LW4gf56JfGRxCPALcYLEET2vqBg5raVeLQJm1R5vJaK",
  "key14": "4ZixpDycwa2NrfWUFhfwUBaP6gxNCCnZgACiX7uZkc5dv64jfQYPLkRdYbyqq8kViHLYti8pPU9tPjL7UkUyBiJk",
  "key15": "4hrf64z4WsskBnqVSRbDJw99T4ur7X4swtipiT9zDb6qJKwPyUroKS3UDsR86FvH2mNzki5J58ihz4yXfXDarWFR",
  "key16": "4ntxRtwU5RZsdVXTDjMUtzMkH1M6R2iSKq55gJxJAKixrbH9FZmLQiWbs7aX7wynF1oZ9zQzUFhnipjaJC9sBETZ",
  "key17": "ESrfpYBZC7nKSGAfRzpypA59bob2s5vL8cB36RSrHBcVVgNt6ALaQE7Z1pZDiicvwZtuACZtvpRzA7AD2yyW6bi",
  "key18": "4azN4cekvT6kE4k33P7DEcMzHD7UZaVJEtRCBiHTnCrboJZgXYoUazQhkACdCjbLWXE33boXKHij6mHVrSa11uSU",
  "key19": "Cynzw4rJ2ZuB72CVktx9tG4hKDojB5xe69eqVUtwGxGbPfkxsdeQHjfwj8NMHioy54gj4r1v18ts32yK1gnicd5",
  "key20": "4x3i3vCohMJ2xpZexZuBaKkfmExZckEXMt7wpiaM26iSq5RRDuswMh7JVeDy7V5Z3gHqWQDvQGXwWBsMQFq9PrHv",
  "key21": "2PSM4bgfAiKGEmCZD6k6UAVKZENMArFcQUM9sBEwSjAjfRxLS67VHUhZpCfWQvuxgVDtCiGETCHVZ7WMoUbscryL",
  "key22": "3zDtRQQnbiSqcNwgtedp1gamCNWoF4v3X6hWXkoAN8SFEHnXapK9m5bf9pefrJM4BoMd2Rh1dFmWeh6wuNeBvv9R",
  "key23": "63Ks7m2BfmyzDU9qQy2m58n4y8wgtz8Fqi9sk7i5sQ7RX9mUDLY74NDf4jBnaH4X3F1vzoMHV234QkseoiV5pckk",
  "key24": "54Kuyd1SCtDteKbgMX9MJf2siJ4sSoJDc3nm2JmBFjUwtbuzR2KXEGDKCkbw8177xPUWwNpGSGh8crjtmuvxvG3f",
  "key25": "5ftXHdVvNGZckJeAEs244UDMCosgpoZ1Rkz7bPVZHV9V3a2i5tCar5RSQe2FgbcBXw64BWRjzfbw9wkJSCbYtvhf",
  "key26": "5DJc1L19P76jSRWwffHEHVm4pcrCo9raUzRJUwCBo1ncWAWLhbRTdxsWPwPc8Z4C3urqxWJFBTYMweNBik6JfnJw"
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
