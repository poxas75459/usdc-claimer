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
    "3gPfQMV8JpT9dNRKnS8ShFjFcmSWQCrQt8ura8tFFAQaECcgy1EmZriGFPW6pAZ5U87oMAA2X7eEhvZyr6KHqFeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jgV1JnJH2FYn67gMgJkW3JnrvWNPpc9zLDuVsK3jxVqgNabEKUjiRaQoFWiedS6Mc6arEEkKYT9vU7Mi4K9PWgx",
  "key1": "Fn8RZy46JGZUVMKS3qdXdnQ2JLZ2vCeac3F7JVCLWa2gga2HVXt3e5bf88xyKDufWnginoue9jRi96XGBpX4UoJ",
  "key2": "48gLBwFwyXEWa8MVoqwYDB5jrhvKrib8QEnuFApa97KZfHytjEZpMvz7pXUYFwpfYMEgkr3dK5axrYH5ZNY7sZVT",
  "key3": "4FbZm9Zab7PXJR2XcNhvdkz4SXwPtwb7AELTMrBGRHqqrqpVGfk6TW2V1kEFN9byemHEYkqnein62Vx9L7uxp6rp",
  "key4": "3Ynrj4LYbUHysVJE35XpzJFkae2EoFHR6SPE9LvhSjL7YcUMociUyBQMvB3U3jWANijWQ8iSekWCKkK89NzCpkBe",
  "key5": "5whcPaojFiAunWTUUKkzxzoUReddneUjGETasSWYjJk4jmMycw3TVNmjkDV1EPkB3k5PZJvYAazCYPEM2Pa16YRs",
  "key6": "46PWEEWVQee7aYfewZhRUtg4V8YCVJC7hyNFzkJeJ4rDoCK3NjmgVEos3ozucRRdgPaQv8YUSdgC9wAK39VueijV",
  "key7": "mxpCek7pCHvreXbVQJDbiupzKBNdUo47h4YZUrLeTmDy7pxq5T3w1crWVB5HaQF83Y6uHGxXPmcSdVGpMWGDzKb",
  "key8": "5UrijadALp2hjtD6ShfWj3jpqTFFEojKSLJt8JRwGFynsrEwhghdGfQA2fa8rT9jz9AYbJpQz7YdULXKP8dkwFCm",
  "key9": "4JT7dKB1ims6rZEP3mHvyQtg4Q8SJZgVqEAECg4jtfaHYgxbwwRMaPdhs1kBzA9ty3yDyAZdEJgbeodiVUR5wdfe",
  "key10": "3GLFsY8bDoUu1s25x3eWHV8rjstHSjtXiqNSM1f2i5QL992JHfttBduFSYKEsyhJLTdJRvMe7ZqbR52iAKBenXqf",
  "key11": "5e4B9N2NwBFvXt9ZcoVNa2gqu3HnJEyfHDoUcU98TSbpPfAFGx3PzHJgqq8CihvXhJaB3RMLDm2gAj9nLtNMkCEJ",
  "key12": "3hFKw7sx23yLh9Ah3UpjrtwLbPs6hLHHY8HoDpy3JL8gTSjCxVrTsKWWDJ1Xudigxt7XL5LB3MRGUeCf3Bwt1FAu",
  "key13": "DpWbWxA2LHnXWxunwX4v8q5fKdvdU51PNks9BfeiceSXggauN9wg4Ht8HFN3a1oSrbRDdapWiWu5gAD1pcNPv1h",
  "key14": "3fFBrk22JFBwkFR3BCriETwuKL79TL29Y8XrVouQUk5QFDBZsmnfyd3oFEFeTQNqJtFjPLnoyFASijZYDtfvUZkd",
  "key15": "5q2vQ64G2XL6guvoCGZcu5yYueaEV4Z1j7qzEcUugpVAgQxGzNGgXiGQagpf8LRJzPusuKQP5bFBGtSRHKk7oJ4f",
  "key16": "2kMQWoGQmE4XNbJGyBGSLxGokYN2tHztLMiAVUqhXNb1KQ9tiYatj6jdAi7J3WQpsbJvBzjSoPmT5cDBujaBYeYi",
  "key17": "2HpoSySqGZrQYYjg5NeKmxpGDGGeXmEnrztQCdsYuNubzv4XLBUNPu9gs3hXMWyeiHDrV9HnuR7rTVeqa2M8N74Z",
  "key18": "3EWBaXdfc7FxUZdXmsvf9GtYa3mPBKbfEQSreovpb5nUaELpU68iiiwGJ8ztqiwkcdxjcz2sxHNrbAeNEdHfz9iu",
  "key19": "338Gr9jLjDwuxS9FRM9gu2MS2uMGLpQjh9aVGjEiC4DnmfeoKavLY57vj68W3rTmZBzPieMF4G4kbZVs7xRwEP6n",
  "key20": "Xjs4CtVC6JpKjbh5vMukpj4RFpqggHdBJLmKZhrLDGggJJ5pYAYubDqzZ4M68PoFDoeRwuhBhafWHTXdgG4JCRb",
  "key21": "3fKDeeMBRDzbkM95bwd9JfG7kk3K4iMTJjVght6fFWqprw4cb4dujgihVBWXakFi8xqJDnHDa6eyy1Fpe8JMnqQ6",
  "key22": "4hPExgtNBvXeWqrz9pWWvpY1y7geWk5ehAverUN3JWZafQugWTiBySiytGs3w2Y3bSC2stkeDAkkdSSxX25ifALY",
  "key23": "3qBj4ucSfEhMnY4zuvTd2fYiXJk21cQe5RMzBnrA7XQYQbg2293ju8c1tc8vuFMfkWxn5ddBhJN75czpZzy6fSGM",
  "key24": "2FZtBMEdwRi2j77DMT9q3eEie7E4WiXELikER24xSLCCPXiNoAP76fQB57dRNJwmGQ3XrMKg71c1Fyc4ULuEiZrz",
  "key25": "4EsSyCwBzvGuAyQZbAfCTXo2bt7T2jRjdbxpXxfSiqTUVcH46oJCeWPqMdUmb7iEkJMSNAsx8ywGPCkJEqoK9og2",
  "key26": "pjJi3pYzy2LF6gU4hkr7p2oKeHZ5kBjhmNkNRoSV6nemp942F45FZxup5vyHK9d2NLJNsPWN6XrF8YTMv1pFcm7",
  "key27": "3TjZbJqM1wh58wfTQJuSyXuxLe4CXD9Pq4dzP3v7QSUdN53ZgkGFPNziEKjN97YijhzXwGiMusR1WM1jkdeNcN15",
  "key28": "tbZnXJyELyyvzdTJStKcF9Ynx8duhwKtqLVWASZPMDuMf3a7xnJaW2CaLbS9ZS2QCYkYr7UjhGnVznaw21Gg9rm",
  "key29": "E3QRNSVN5fLrK9b31KcH2VkS7aLtAJWeWimWpJasfc54GLPXzpWTEdpUjJeb8BHB2HNN8GxYiYThrc6MFY9ZTxM"
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
