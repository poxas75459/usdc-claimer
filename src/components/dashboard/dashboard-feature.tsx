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
    "u9w53zyTqkQVDErVTVZ5suXS19j5mtUfpmXNJwMN4VJ2p45dDh8vT4mVyyQgPNKwwG5jJYXbKZyQJ84145asqeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y33QVEfCL2oZZk81TankWtbF7J8PPkvFypyoxnqMtFe5N4x6kjM4eKmhEpvcMWhRiK8hgcz3vEkcUe6NgQ5abJD",
  "key1": "26oonNSLZERzec9HKscWmcSr9aLb3Y373dZWN5bucuD62CF3a5BQSKaAiMWuwmMqLuQmriwDbaWsXimr5oZTopGU",
  "key2": "DF2fLoNpz6nTVjcDBoCVWuFs7ueQa58rWHttAm3xazqotyeYPPuUou2BCi5DRU3YHwZtTRSYBnaHX1BbPzERZUY",
  "key3": "22TkeHvwnWxfkLfQuxVdk82Dq7yaP3QHz7tuhkCWKrBrxF2jZdXwSpRqLZyBkKfBxBeCcuZZ9dMoVYuQaESrUKkm",
  "key4": "2rKWKdgQkvzZqazUcpd5y2swPj77Tr8wX6RgeJ2bYbgN6PZgwgVtkvmmP6CTVw8Vo3DkwNicVtVrRyec9sCjLetB",
  "key5": "CzGesJvgsKXJW4mPuCQe9eEeLcr3ehCpeahX17MHHVszX85ajXsifNcNQ7rGxk22endQUAwRB9DicsnSdiG5kfc",
  "key6": "39pbnjvEBaqyThC2ndmwj5n8n6b7NBstPjHkdybRXX4diQw29xq9cS4xdY57dHRUm5nZM5pkFNDRVhzJvrknujda",
  "key7": "mCH9DGNJifGrW3FuWEzWKB7cHotw5dmqkF9m4E75T211MaLhHBUsnoBkjiqi2LGLuSSYLMFQru2ciPmUrqA8uwP",
  "key8": "Z73nYecsHaUugGy1sP3YcZBQvUWEWgkiHkBS5WMKQ1vTJN36m8i4neoDrACB7W678XNgNjrhyEZEgzzWUSXRdz9",
  "key9": "2SBtR2k9vWSTPcg5Fw5XhKtXnKpt3ih1WjrWibgYJPbfoM1RZ4Z7LMYxdesmhQ4KcBDQcixajq5CjeB5cVgNxb9M",
  "key10": "4BaK6pyCuzHiEi9EWCEFQVfnE1ZQ1orFZ2LphRgeynFPhUCsr4g48P4ErJLxd1fjPc2wiVysh33mAGzgtDDwfY63",
  "key11": "4EwXfcHEvKH9a17RVp7HExXuGy6sN8P3Wt4y8QPPxp8QkynPcDPria1ijGUJ9M8duxxAnY2YU5oDxDGVs4Ew5Vbj",
  "key12": "67n3yq3UmLk79fBh9FGrXWEuqKMYeCBHt22jmU8DRGtCzbCAq9yjdmujS3xwwkNWsSRBpYGbhAmnZacHoYheBLWb",
  "key13": "3azSh7FAqy2HEpKrzQarj3qionob36NArxTajrGeMGQMP6fjZhah5dT9HsJdfHbAjWr5NjKSmX8YQAhnms2Bgm1a",
  "key14": "54pdxwkRKHLKv4m7JjJm9fS67HaiaDSN4eBmMjfs8RQSoj5a4oRgUK9HCAXHjFPsxmteGj7ybFvq3hxRCtK1DkVM",
  "key15": "sbnHC1aDNRZEvMwK6sXyZWDWbNRE19tziKdo1xH9K6HL3ciLsvEQ2bTTKtmjYguBdmZrTbhDxkDnf6YdCHQxVqG",
  "key16": "5ngWbYFbauDeFn31XG6tsXFMQ5AjG7XJYxs7ux87uR7vCojk31mmDuSMLTUf8Cai8KGS1ZeG3S4BwcY4qWgGEmGR",
  "key17": "2XMxYYQW2BzdXE9V5Q1TTWz9owMpQa5W3d9xr44LDb1dWHWWZrggnrXN13AcsDhfMHoE9gjmK1JkUwZHN5YP4NTC",
  "key18": "4jtgKY8Rzj9nbdLvbWb2HAyfbmcDiUd9tCUkGQurapwsXFV3mR74B141oH61jP9z1eDe6x9Z69LkunLgFQQATXiq",
  "key19": "5771og6Sjq1hVUk4gXnNANEE7gqsBxaWsYvvmFDQcWPLaNah43KaEvhis3eKZjr3fY5evSAAd7iZNr1a22P9zKrY",
  "key20": "6pMBe2igrJmWe4vkX5PCbsAaRaDPSx6tLo6rKBcKRGbKR1tLaixw9BWXP18318yjw5zWrmmurgX74PA1tRcj6Y2",
  "key21": "39VDspaHW5QECo24zyypKRd9cFHUx8LoiZo5ZaFvcr5iWD7D2j95zjEtzDREDwiP3vJTFxYkU2QRsyVisz5HFdye",
  "key22": "3po2H5RZ9npE1qctXTNC2pqtvTUZyKP7GFQsSCPfrmmw7upRnx6LNZA1HhLjgTvMZkcBAFwWdfBhPvrgu1Cd7tSM",
  "key23": "48Hobz1rSMNLEWTcQ8Kjp1xCTVeeU5GcnENZcbZkb5EkPDapzeoR1ghJTSFGTqRt1PgWWfQtYv283wDmXU646Leh",
  "key24": "2qSn3HpaCGjtntFVM1eZN9KkrssrCRC83u7KAXCevXAEpAwLeQw2K1sQkhoeRfLGR1QgkyRKReMNQnujCJ3LzXgx",
  "key25": "4GjStDhLmsCuGsaBFuJmEVfE5jM3JNX5aA2WAqRsLkB93168B86VfrDJ3xfwfnwMrkUdbr9Si8rTqa1XDpnvRjkS",
  "key26": "uww8pts8bLS9cztcz2PhQ9hA8upnQttFJFEYLzj5daDYMsarq4qKDsvyFeXt88vTW2aTqahh4MK9VUka2aaY835",
  "key27": "4j7FeGotHefEPco1d1cYzaxZZbDtcQXNG7xESZX3vHh2f7bqAszs9iAQaEJU8dGVerwMNfA6AsUZSMMZV96RCTni",
  "key28": "63XQYmXFNPpjFenenHTwCsvEx4pDTsp6sqGLGRd4Pt1NopWmJ68Mr5q9wQQwkDM33HGX6aAuf7ySnEcAkkQSPrCs"
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
