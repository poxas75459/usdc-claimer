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
    "5JA3WZP4n8wuKktjQEwXjPcCi4zW5s9nAffiuLJysfAy8AHb74qsPVh4KvRVeBTkmGsc8hNkAMjwiCakwSqsD2bP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xEJutvUrsUgD37T8yV7FXDb4WNTL8qZ3AnZewgDvvEs7swTcGf4zU1iRZa3njtV4SkLR3WCLGetMRWYvhRjqsXC",
  "key1": "5HiQZe51NF672wvGW2fuK5rsfo2Sx4WV1ts3MKzW4AJ5GFgman9KAbiH8LYjVfwQ8oC4uwvaXcQqL2NLztZPhpZh",
  "key2": "3nbdNt7MkbpS82oZ5pnEzdpCEwA5LaHfjUMJXqzWpmE4SuMKkZWmneESvFK7aCynKWbEF1wH1MSwbQmYtv7aUJbx",
  "key3": "4nrZ9XQoAKjcy5KxXupRo7VbP1CFBngUYUKsxTkjmoLLEfUBBrfXhcMeU66Gmdi6U2ZCNifFmw7PTYFwhWRzPuLy",
  "key4": "2j5o6omGrrrCJTe2Mnic44ixnVjc8UzvtukEY48bjoRuXANXGXMsJwJkNkZdS16AU16UMonmbyfg6NqrvheHvQYa",
  "key5": "rkpZEwaWnZnSjQTrXBn35nUzvcHyMi8echoWUV4itHGEXCdk14tGYtUAdu7Hs3j6e2u7X9FJgEVVna6311cJjeU",
  "key6": "2CzVtFAuZc3j3cGyfJsCbJQTqzfLXjDgNq9Mu4f6Rb8jQuNjMdHL62U8pdtj9Ta4rwkfQwtdFyZDysJFn6voQe2Z",
  "key7": "4BbQcMxNqES1zW51qxpV7c5orgEzvXMtAr5GH4byfihAyURuCsu3mvWih4cmqKoDNgjgZjqZuH5i7syhMHF2byPH",
  "key8": "5HZiCkNjbNg9wD5W3fzAJRqs1T632bgMGNCbfuymVJnc5Tk2pah8KXHRkGr5enssafQ5Zr1uc4q6UMq6iBbstsRE",
  "key9": "5dTisrxctNZocnj65SU8jtQJ7wua22EpyXszksJ2VUtBDPoC3FzRxbEHVccXmAhTouPaA8k4Et31fB5Fhy5SC8zv",
  "key10": "2niGkL3JfydXsFLbL9XusGVzoqQAkNwvkQWKj5gvmPnJBxvY7iQ9jRPTSgmHWkwKuvpNLp8Ns7YQ7VzPvbingGpm",
  "key11": "5tnanyig7kzZZxkfkiokUhAzpPj4spc4Rp9TLFJ5nHu73fwvqQQ8xQ7oYcHX33CiZkHz9FTgKqgFsmSkD9AsBUB9",
  "key12": "34pe4EQbiBLtjegpmkFHLj59tuqfiXoQgWqsRwu2d2AdxZeTqmtJ8dBePXWdCfNNDGgG7x1XWfUuGtSwD4ZDCgoy",
  "key13": "3jDnFmCWthArpUfxnYcVDbjxwKFKFj3KfFXzqW8CDqxcuqEDfCiSXAPA5ySZinjKdRifKt2yEt8efuhTZe1ahWh1",
  "key14": "31FmSBkcDtkKT6tbpnN8dFg3pW2zKqGHbxetQyc2MqNUyQ59NDq9wN4QxgDcZBeyrQRP843KLsbaPAGXSi1RqAm1",
  "key15": "5Kdo8k5SANEW8SFfpvzcz6xZiXMgiKEEMq74DBJ5od228tErywFMiiBv7FhJskXaXU3vazbgVWmuL7o68hEijMwA",
  "key16": "5p1b2ZWd6bbFWAhKDugdSaZrBY9HpLyc4sj2VM2NEjKrvJvogBR3GR7vYA74HkbSj4yiCAEw3QdD8MDSpiuLozsd",
  "key17": "BZ6KjmtXqfpUqc57oY8Yyooj3da3SaeRYMkwPZpozKrnQeCCHTSffEXCrHWhf8pwakts2bfwJz1UcJDpgM98LFB",
  "key18": "4tazLLPXMpV3kB6D9DVAUxHHbuLSjM2Y77nfAKTTsEcFduxpMpQYBreEgf9mkntC2D39TKrqhFQkphW9ZJ6fWcq2",
  "key19": "5nMjhXWEENS4qMyaDdjAw6vrPBnFScNmhJmSCzZYu7CrXRTMapYhvULXxF5MSSfDu7QYQ54coWfNZDwTYvUoe8U7",
  "key20": "5zUzCqQEWD23U9CZbsZDQGwg7P6gdCHrDonW4DAZYpLoUs7dWVC9xu6TbC6JKZ8c39hSNobBU1fkEkvGDJmHYggt",
  "key21": "2Go7TsMf4fbYBVq9Lw2qYrCKafi6s8NqrQQcsT1HAsaq9DN4Bu6zqDZkX2SjQhFZDbDvgxnYdGFbEjoVENTVp1QP",
  "key22": "eUyxs5q8pZ4ALpiPGLQPU7sBUwwewfTBzXJnFeWJ34BFebKZHjn7xoDBEfeGKcJABCW7fLk7aXvqUhfNrF1TV2x",
  "key23": "XQCZbvNsbWAiHLNHhuobLzHw9Kf4BwWgwPVmFYenLzUWME5fejTkLB4J5yp4TjnjhRXeLSXaz44Y5iNLDs1AeqH",
  "key24": "4LndgFUe4xRNNG5tXU5trZrUA6CCwvT5Gzd5PMFsmiQE6EpmCaFGDqupwx8p56ffeb92b2CiLr1w2pt74PGgdpoU",
  "key25": "txDatc4dFuR2bxgm9fqQUxcGr1sTksi5MAVDJN6YLjtnCzQdojpwLMN1NQGDr2QKF1E7unRS6SF1ifCBpxbMQWC",
  "key26": "4pnhxYzoW4RFQ8C9S1xBLR2rjqoJ1soorMvBFhkUd5mddRnno14zZoqntaCWnpB5moJUGouio1hFzqXWaSSvGTKP",
  "key27": "9wsG6FB5aLsDgCYY51YBnvq3irS8YJxTxiVsGEYfZAUpBcL5nef9ntBjfxZEAi8bcNcTqg4XUoxGTfj8qKe8HgX",
  "key28": "5LM5ErcJb52iqPiYMeMGFrNBWKwwmdapvhZjeMngrrMhdzvrtSSoYhC2mJjhsYwBGmkQrvyqTr3fytruRkmwK5JK"
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
