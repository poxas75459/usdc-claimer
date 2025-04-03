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
    "bFBYQghn5dTSZRPJ2JyPcRFhHjBBnxgFJr76RZyVmMt5FgxDjXcPFcvfFQK1yCKg99VkBYcoNvs1cw9uXHQwRbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSgNMyMHhUg9knAXZxWMugXybasuFYdTcecKw8jkMbsn8Xd3GgZuaojQ1zLfXYQnGLA5rDCjcT5DSfydtYTJVuu",
  "key1": "4ksFD4x1YJdAeTgn7dXsg7qAXKXWBpYs3H3rXECxG1Ai8XgfsxZsiBi3g4VBUNsATf1hKQQYkProG4F1peLTdfB5",
  "key2": "52cjXshLdQQ8YY42QTS9M9EPP46eA2gPdR5rEmTYeru1kC87h9ZQfotMNP54AVZ9UthLFuSa4pTM94sB2X7dYvfs",
  "key3": "2M4kFNvcgWdL595h3CwBoyfg4StiDGGegU9fE5EcYdS12RsJMsZRJG9H8GqRsFvuLeDw91GaVC1f32ydf5ggufYk",
  "key4": "22GVAAJvmW6T6DxRxWonW98FYY4pyi7piw7u3vQgMwDZcbrxPZGmafkdr8eu7DEt8HCA7GWAp9AxaAPgYtzwyCD7",
  "key5": "2SB8W8jNjLkBmQVD9jbW1ESaaN3U7UL9xuRrCG6wanUBG4qRbzatdhMayMQUx2QBHVm5o41cZrUnzxz9hRetiNkX",
  "key6": "mmV6aLvFkNgW6nwdDrBgR4Sfpi8dNiGXquuQqnfTxc56P5fBpWrNJrpCNRQkpWbn8dqLGQq3nJdgNtPVMs48v7n",
  "key7": "2yWGRr6Ljs8TJu25YBqtmWfAdRCcb2GUKEpxtjVHSc4WhXuXLB6eNWv3xtEQC7fe5BYdoJPR2M9baAmYLGXyEt2h",
  "key8": "2QfGtU2VJuZ15RbDtXzoft3JTQcVg7GCm99CPFB4RDW7URrdr3g1fpmWqGxHgKeeABMnbKHvf8HKeXZNpq92o6XK",
  "key9": "29oEzzzPDezxCqscVjaEmz6yUyA9v7qWuBCshdoT78ZJvxVTd32VgLxfdEo94WD2fqeCaNBxrESvhnJFuDDvtWrZ",
  "key10": "5vZKsiBoqMtw2KkimUPjB4DgyJRxyfYZYtW4GgKjCFoKTXu7nmtcPUX8kgz8MuiTAGvmqrM3sLxFDnNXgpP3tbL2",
  "key11": "2Lv4AurHTa8kABKHUFahQPzjg8GvHeTEVW3HtWPunJYETwWty51ejJhWH8PpVSRKb87UXLxN1Pfy5yLFFFQQwPaJ",
  "key12": "hiRKxAvgxyhRi18q7dKoyYjJZtyCADhT5vrtGuRk4BU2gL4ktgvGRbkBTrZ6zniX582FpuMLrWCuPo5mBx8ePUw",
  "key13": "4EboYQyNaduU3ieqvu7r1SdPLc6udjs9nhcfJFA1VbjChDFEG23D9qebmkALYLMFtb7sGiMUfjyGmjDMXuqGnSka",
  "key14": "D4Ztsp2LmCs5QvWzcLt7HX9AVzm4ijapC2kQUQnrpLZZ6B29YBX2Twmt3cUNmdxTrNfAh5w5LbNXYdP6py8h3oS",
  "key15": "5ThWpbPEZVWaoHeWkGCptHHrfJ4ubhKAXNR6sNL2LBp4xkWKhiyMbohJC4DuaHdFzW3X6otJ67xAnBTpADiCHaiu",
  "key16": "5mLHfWpReaEWSd9n9yZZq6EoAFMY72N8akgfvWu4SGjf1UbYC1ZvNARiyQMazHDjayVWSDBHa1WtzxRwmbfoQQdN",
  "key17": "5rzUxKZbaqTund9bu3rZt1CUJurJ1oygb5sFQDmyRHRsYfo1wLPYQJjX4hB4egQjroKCyUHeDzYSV31iw1AszKYw",
  "key18": "57uyQboLMs5kyRCjYBg21noyfiNbQBjJzjuwJf5855zrvCH1x41D2h3FwwyMCf3833t2TG51Lc9oEexRVJsfzczQ",
  "key19": "4vHPVVw925XpKFPKPQvMX6D3xcMoMKu59NDZ67qVSxptnZ1VELgpEFR2tdej7NKu3bcsVgvizaafeCDgxji53zwy",
  "key20": "5wVLpatQvXn35GGekQuwYjURe16t631RXhRru8WKYdcgwc2hD2smsKpcYpnVPyKHAiHtxpmtG1rGfh8ReqHBHmty",
  "key21": "4mvebuKzFVsvCzmoXGPR8Ck5BQFdJF2aSxSQqH4AFZa9bHmTUYcEr68jGi3kbku74wkic3kcfkaDqHnbG62mWzYt",
  "key22": "5vkNyntuuaWrrXMEgWEXhfWX7guzjXFmU8yJsiMmAAoK9Sufbw88jyWQLaJjsaxGR4fu44SZrGqSnQqbTg8254EV",
  "key23": "4ubK2hESdKPYeGLGAm7dzrWHFdih6RGLg74cdYKHhbyzX8gdsUccXGb4dpNWBTRtL5JumQyNKstHCtPPLrH59QXv",
  "key24": "34H9ARbh8Q3kHBi5tZXdat21Top8eThGCjt7HSYfx5hxzkdA8rdhkCSiR5uE7HG79rWfWTUSu43fHJ2RsUQ89n7o"
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
