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
    "3LdH3Z9W5xqjy9FzznfXYzfJ1ff17cK3NtUa4aVFpgLqh2HZMUtsR1WSDcxEL6zZ2aRkof7zWjHYDUJLPacvd1jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wnQsbnGyWpktbt1w2Am1Dd9iWQJLzYawZhjVKQUkcRF4BxZ8mswL7CU7c7yYp5eXWiVSM5vJSgSz1wf7MgwetY3",
  "key1": "M5XdtwcDheBRM5wAeJsn2jmMv2q2Q4T7EdHiRaYGKXLsVcGhZmhygG9rGY74MFzaR5jBJ8koprpcq1SWuG2ByJc",
  "key2": "3DcRSv2Fqczi7kKZtUFcvJfSi3Q1AA2AyCZCawEYGqXzmmFupDy6RXhR1vsACVAJBDkQJaa6rHPQYGtwnWwYC7PZ",
  "key3": "4cZd6pMTcZJWQZXLLgxNsQb5w6hw4cCxpYSxUt49ogeuGQdpis3Q8zT3XkAe9TznKCAiDdnUwmyJYHQMK4AUjT4i",
  "key4": "5BCx5f1zof31Ajn1fFVSe4QAYHMk7LgcA1SjnwH8YHJkaxLGnL3McnkQsUBzwrz7qUsWz2W57UToN9gX5zbykejW",
  "key5": "YbUBLGjhgDpyUaJyVhtj1D1Ng94iecHjm3keHyJ6nDAV2NnwHQcVn6DX27hVggJ54WM6JhupR1mfxxWuX1YQLud",
  "key6": "3MT918G4zhR4VdF8xJjhvuCTTPwAwW3jCGLrRi5jZBPYVkBoKVH5ctPQDQzgyyUmVTSadjgjq78wtFtaa12bZJmt",
  "key7": "5ARU6Zft6bGbBUcqtepuoghgpUtVwwbSQMtdv2otzyPxt5emCpns4ccCPXjFer5D5CxxUhxSfc6io93qvpHfrCPp",
  "key8": "2Jw1Tz7T58E7kdVpoHdSNNM554kDUfLTz8jKa7ovJv3ku4dcsiTK6HWXQmnfM5vs3XDP1dRQ4ZFJcc6qoBNQHL1E",
  "key9": "2tb5kAgUCmWJuCtsy7X5HcMcWsGMGeMoDnZHyCr28soy72NTMdqHRT71cYEkvWc7aSYfPEN2qNJvUK3rAHCCc3z2",
  "key10": "42NwsEwagmnARaYNaqeZ8LBZibh6dvPZ1c152iEXpCNKEVjGWwhkUDMPtt6pdBjJvsdCTgHQ2HP1rRQBD4u5tZoZ",
  "key11": "4svDVz7tjCYhMybH3Pcub8dST7Cd4B38Q6uUVfm5S4Nfu8afAeWBTQti8PHa5Pi9S4YTAug55ryTnEBLNhEGBNY9",
  "key12": "4JfKy8ocq1NX8umt9MQb2kpapJL7vA9CDE9aLFN2AgwJUEQpnKmVcWSGpGNL7hNcru1gFusxAMQfSuAJgWs9hAr1",
  "key13": "4zvCA6Nr2xPK19rHAwEoCwpHwFXkP43ugQWmXA6BhtvZ7m2ALXFf41NaafeUeVP3Z7THTQ3xuZtAYRUdbpw5aok2",
  "key14": "4yzvHe6RxRwhsFzLdyYbw9DaHNhDEZXVaQGxf8ew5tcrS6vho1uPCwyiM3CDmkF7QcSvteByRNyL6BBixi17hKUo",
  "key15": "2yNG5iSAVFfoPz22qmB9hghYam2rzooGLJXvj2aXUMr1rDdx3Ko1tNrof1vsxHw1jNC8ZhrLxUDr6SoB9zuwgSXn",
  "key16": "38sPSA6FSDVXoenBPuPdAizTWosuoCzXj1XfqnTDCxpDSZJY66CaRFoztiFQZEa5novMoRNXHYXHEPFYPuZtaZCs",
  "key17": "TmTq8sG3rfUGSGEg3vpFAsZz1YHNKXdnhd8CMtTcRcUuRqtsEvEHUmAkjRtowqEEbF6qBHcQcjDuCdd3pKbyfby",
  "key18": "3NVoxELjPvkbuPhfZftgGNed2kLmqFR3UVzuow6zqBQ6Du4LWFRXshuioTzsFAkadYvA5E9JZ6sFi2zbq9SbVdAm",
  "key19": "5cCcLsoJVgY79a27CrsFFirSgx9Wrt1yzKz813Ta4dtTiYJgheTzhPCFvE7R5tncAja3evpgdhsisKrbS6dnNkxy",
  "key20": "56nNg3TD3xN4xGbe51y6wwmp3xNRrbR2nGEQTgyZQGDqswzev6k3CtbnerN4AfijNbaBoTvU9zbMGBdF82myuUZx",
  "key21": "o2SePLBRymWcHvRyE4ZybJssoteQdXuL6JQ95pUvgzKjRv7xJxbWKSTpcaok8g9D8JWwP5aMB7sqTvYQYmS3BFw",
  "key22": "8DQnBmWtG9oMwv9fTRohmFYkbC7SR2ovHLyD1VVrvjpxxRS4CJAC4bHUWk7dM8hdHfokgWWiy9TPcfjW1hdazcu",
  "key23": "5YMiDLJWGEyAtySYm5nxmEXgTfh527DMFdin4Bo9MXxQBMaZZxSCtPJYpZdXbCspzWTaJJcLDHzSKK74tuav7Khw",
  "key24": "5HTXKRvgkAWVwxSPvLYgMG1S7zGyGoMyZJoq2zDAY1v9WCmvZsdKQQfcLPi8dTcuWfVXfLWcRFGeEUaFAxm5QTGc",
  "key25": "2dLS2zJeqGrW88qU4ML77QuZcFFW7CoUZnBe4jPbXkepWdH8fPfoTSZ2HAFYBVTtSf8HrDPgB6nbsUwMRb9HoLq3"
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
