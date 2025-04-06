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
    "4s2isB4k92z8GioKjLgpbRcP7ehn1xSojEyLUfwMZ7g7oRSdttnC6AUUKxvTzYmtYosaqkaQ7VsFWXTwWfzZwXKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BJuF4Cj3EQ2D3vBCKKXyFH8xMoWuvzumYX48w6wskpET1amyQickQXMfijhEPpDV4FNLCbkPFKtEXyb92KKK63W",
  "key1": "3bMuKkRHFKUrPDRPyULFnvvvScM3i7pbHo8HaptwiNpmaQVs9o1HhoJm3wJXUGiBZV5gmLLyZfaTXCSkAr4t6Wyy",
  "key2": "o5BRgQofRQWjFLCPyLKKJBMs9oYhaQmSrhtSHXqMqoyGbz6bpo53YM39WV54qqXmCey5XQKuV7PBiuMqzTpxyx4",
  "key3": "3zBroBvHVg7ZMYwGpckpGy8Xwe54yvdV3TG3EixKW7etgA6SksFukeThQxG6XQHXRY1DZpVGR45wbb2W6esudS6V",
  "key4": "4WUgEumgHTQTxkWpHRa8z35NhGPd5EGWitrFcMUwtrunakXEoqpSzi1e25rijuLJtUutSWMSB188f7rk1ThxNZZU",
  "key5": "5PAmzMDD7prVCPehEbKHq2f7bJKjvPYd6f3t5mpaRdC7snxMpiMbgEZxLsAaY6cRJxFGbXL49Cmn9k7TzjvpyXfE",
  "key6": "5vsY134DNRthERQ1QePYWTeoCDC7noKdi9oKjLKkNaeipc3FkQZuU39wt77WFJR6jmsPJ1MsgTV98X8XLNVC4nDN",
  "key7": "Fqy2jDNrbvsoUjmc4KE7RmnHAktPf1qxytT4GGDPuRE7siVPW6W5K4CHgXm9xYfarn9DUFptmEhKTdcii4ncWbL",
  "key8": "3xZSXE2JyeaAd3AeY7GJvQwBA32oVhJSqtiRxehuZjxpZ96KQ8Camx1KRJnMjLmjNyco8jyenTJQ27jQEDmKQ2fT",
  "key9": "SzPyqehoPo8SCbK29ahBzMUS6o9XWxRcwsyqbPNRh4iiuBSBGW9KTCr4J9xvoTz3x7UkY8GqSKaZZJg3NAfmR71",
  "key10": "3EXjVwcTWQz6ikp5hxByPvoNkB2hVwWdFawp6GTyd1jfZeSHksPAidpNjkSw7uxndxbtGJTr5EmgbpQEYzXaPupo",
  "key11": "5aKuMS8dX6VkaoA5Jw3WMrfYvjE5ea7NN7rJZChpQJCnEMrED6WijbtwLShbVkdww1ch17Y6oWJYVcDkgkcmBBjn",
  "key12": "5fEStsd2GouzxH8b5SGCLGx4JBRmTnbBJeLgxd1WyPgVM99RyPadAB4XBrxKNvkZ7SGyrUKEhS99sZa5BAjB1FBV",
  "key13": "5yCs2qGuZBunjnwTNtg1v2cB9dF8WoGjpDxtKVzmS37bTaWG2B9w2v19ZeZTTNjbfSfoF4oXr85wJS18em7nig3",
  "key14": "5ixcXwKHUcEDoPeFigHoafGWQs2HriBVL8pAojdyniiAUrWkmhjDYniK66T8QFeBSFHTs9RkbLimYYipihd8L8K1",
  "key15": "5gaKsz2XdnXEMVg1D4nyt5HAzBvLDxtE9EyNjYFF3xgaZySC7FnWve8M1zTDm6v7jNvrL5xKELDro6P6FHZUuaRk",
  "key16": "4Cy2Wn66t93h8QkXGX9JJDPUwes4y5LLxhabAu25arKPnRJBMoB3Vyd8m3NjWCSBGb5wzLKij7oWiZ824JGcHuvh",
  "key17": "4sPmAFu8ZMVDJp2S2x1MojYTa6KKoWzNWaSQJ2TtV8aHCtmkgsqQY6LnTN28yHnf4Lad7Uw4xCnhNqbtr2sHDeSA",
  "key18": "57Yc8414bMnM8Ks87SwDMv6yiHuxkrMfyFfxQhGqyQ6ozreoBzB6LoHs4zTBmdkjeUpb4fecTLvvwaNyUn9BSySX",
  "key19": "Zd8rkv3n6iUKiEGnQhkBgNRjiG1vMhPiNGgHiVjjF5zdDvjPuqY6vHTYSFZX5zAga6d5YAeyXK9NN6XFxxRiWzS",
  "key20": "5fNQD3M3EF75NwZEPuq6BgWGVX6RzkKv1vDqz4ux25LdniRMLdtXiKupCKyXK25Z5jj6RNt2bg8S8frQ3gQpvsTs",
  "key21": "ViMjVrdpptoz7NNKJDdubzwXWCgeLcGbfu9kqXaiiU4pwfCwZtEBkgZpvcW8Xw6vm9RX5CrvtqDnPegQ7cBoLoP",
  "key22": "657GbnCHvHSK1LjbJBduqfgEuBYM7urWGSYMrEfhfPGXhu2bHbxcBe9G9YFz9qXMDobhMEZMiy4ijZLgyqNF9yFQ",
  "key23": "4kiBXKMWK4qf4yrtZZ9rtWM18JVvv5oGZgdB1Q7zwcNfBMHUpfNocNER4UzzkEM61Yyd6iyeBNmrecGVUc5yknh6",
  "key24": "2HjALxenAsSaM2FZK1WbugjqKCsnwTTeNXqrDcWKFrC6PZVRMQfEWN3EEgBwm2vvECAffNe8hrW2KUYMoz2QHktM",
  "key25": "TaPgKi8n4yuWc4GvZivRSq3VjqmYNiEpZhEjRgZDhqr6XWUhVaQ4b8JdFEW2pTaEp3cRkfFMSJMahfT8scoPDkT",
  "key26": "4YLkKSoUYcsuTSQyH1VsNzVmWwgUVcpSUexPkPuFRu7MovfWQzgxzdrEoaCBzpKFJUoBQhA5Wq3RVEjXkdMmJtdt",
  "key27": "62awL6JYBnmk8ce4q8S5MjCjvZVnu9nQb28rTw4ZwMiHdyEQZWo8PSvrUsq3PwG4tmpxuKwkWJR1bekHJMq9u2fQ"
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
