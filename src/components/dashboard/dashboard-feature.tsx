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
    "25GtxfW7reWKm4Dy4D6XcqfzJUt8uGUUK7EHbXRsrSCLwVC94W4QioEPjjyfV4bUjeZq87moYWkYNStRqfeJNsHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zzbmG884pXt3zma1mvgWimDQ11MrukJ6KAsGPQQaTGCpvWexYMzLrix2zErxmjVuJCCYwggBGgR61VMW6Rq9jDU",
  "key1": "3rY2zaa1fQqfBbmZ3xTpHSExheXZgb5sFc8TXdB6SvNxiNij8z3KYKUG6kmf1eKYSFNDHHKthNgLz6Fw3Lmz6Mdc",
  "key2": "575NWVA7djyoBGf3wYH7imRrkeNrBVfTZzxxEuYFvQdV1dKnV9DKvyAjSJZfKzh3rH5EHC2sRMvwJuPC8z6NTVqJ",
  "key3": "4mWtJGn6FCFPvPnmFoADweEiyGpoSBBVpUaHGLE1KMB1oY5zYcMpD6MJhv2hnYPGJosXoaQDB4ZB7MwQ5jv9iVSf",
  "key4": "2eRyM9YaHGyFAAwEVMzonGbndDwXkW2GsCxQJj85jZK8zuKsrEWfTcsTHvVCWNSzCjCENPeibA8nvwR8XSa2bKFj",
  "key5": "5EENJBp3cfTMFcCn16ntQJ2L8KJkM6tLmkoUed7MnmfjkNbeoG85BU9TWExxsm8yVGNpZQKsxWEJjeq5iv4KTJnT",
  "key6": "3BeR1NDAAtHBzZEx3A9LQ1DZrkZhf7RGEUmj6xKrh1aSsshivUurfoxTeHMYRerJRbhwJDNSrjZcpmGn1TD4VHsR",
  "key7": "2qkrxtkHseFGFiDHifZru8VVWSMHqyZ5zir54mWo1yHtBfEfBaGA6pZdDySg6e9ZNJvq727PL7WoDoU4k4SJKFU",
  "key8": "4wzeuYg8TkqWXaHoHevvHojAosavKNAZdtoYEDzLTuqn9P6QL7LNqhcMmXAkqxtaNL6L6YwjZCcFdavtXP9sxJQ3",
  "key9": "5F246XqoBPSU7YicLrTz1qe2MaL3Twh5hXMAxnhmjupu5jKX6W3gPEiU6iqKmwMDRG9kak1uFn5QUWKgHmGzaDGs",
  "key10": "2qa1CUg1thXeUvXrLkYv6xrHxhoRxkLDA5yD9cKkjaiQcsiDCyFpc1PaHRKskZsA8pPAwc3Mdr9qT7x9QKHKzcPd",
  "key11": "4YJq2SueAPMomscNgGCXav28eFZ7HJpRXfCSskoYodERGxztrNFJ7Taz27yz4bPKaL81shgMEC2uHYRGNpZZw2RA",
  "key12": "5iq4i8eMES66WdU23WJGonBJUpmKntfLS29wc8QpFMicpxAk3pzH8LCBN2YLr5asaMFEan1ec4CBbfEwrMV7GAR4",
  "key13": "4wMEUSsjLTU75vek737rG3RoyfHhMt4VGaTBbXpbFEejD9YbJzdnehLRcWYdHougSG3NikQdRzJTd1huV1HweiyL",
  "key14": "27GBE1ufxio87b44Jy7X6g622NgLDMVJzVeRePHgHdrMjPfBQsERqrVa6vj9aTWCzeCRVu5prFiER9TzaS3vM3x6",
  "key15": "4qi36FJ6eYZM9RPa6yKUhNuPLEsoNUMJX4Y4EMQnG9awYCQNm5R1ovfTyVadx2pZMuyCN9XqNPFAWr1vpAB3fpNt",
  "key16": "VZoj5ecnBaYT15drGLArA71hrzD5GAdByPTaBpZG1xiNGoKpiVydb5QVmtNVeYBib97EuVTEoqDcvmzBCsKvUCi",
  "key17": "4mB3CdG5JQFMP7mwAsKK1M3n9zERKv8UieY5dRBNA38uWX4gMNeo6aeqZ1hEaobipjWL8U2DyXha59sGiSegZ4su",
  "key18": "3s6LGJxPh3h848DBZEH8ZYkjN6bq5NG2zH9WSgQXZnZNqGtwFLNyyVHudDW6cRpYgvqCNGFbhNYDbw8ikuqv4u2m",
  "key19": "DwNq3BUU9rqN6sAR4CowPcjfgvSx2WwU3DCarbooUKuoVPaEfppoJ3b4xQmduA2RMFvSAkzKLUSFMaX1WgsLMSD",
  "key20": "GQQ3q2SiEqTcV4qNnxNuzkuD5eWq4XP6dDT9rFiBanhjYdQDNvpAQNjL77J2K8kkTpSx13m4Luc6Ez7UHPDQn7q",
  "key21": "4wkA8YuCgT6tBJUegLTJVYeyvUFNR7TSxAn6uXJidjrVmZDunYpcdiLPFHC7pBXbYnxydkcGV2kCU5NHi58US43D",
  "key22": "fkR3CjS4GRpUHHLqV535W1SYEc4qM6twyS92fUTXZt2Zw8eMEbYrAStPTJYYdTkQC4eoHtjmQVpUD2RSTsKe2xJ",
  "key23": "46YBhAAncTBbtPb5hEq1HVPRvM1ZTv4kr3kKTq3gjtZFbmj4GaGpoZMeKsd8rpVAQ51V6vKDFZSK8Sk3XCbnLMGn",
  "key24": "3pNW8RCCtwGRha8a7m1agxjMREQLuC2WRWafdxdgbDoyUWe3jnFnqHWhqazz64hJnKfWgtnCBrvsxqmfwyjft8wg",
  "key25": "rkq9ShRPydM5mzAHe9ePcJYq5N9pkvYztUNmEJFwgq3j9z7W2YqCpEDbmfYcyo6WRAL6WZ12oAWcwfwLnXsfgQ8",
  "key26": "25BMjJgv9h5EHVCQFiiAUMdjCPD8yoJ9MsWQ2UDqtTSHq6ae2eUrcG8WxvGgxZKwP5pRrUMw95GPC1yiETCT7pZT",
  "key27": "X1wKB6ApQ1ewCSTzLrRWfSm4D3DTjgbpzrrnH2cTSdcdtdbfyPZUvkUcQ9ZaEg5U338sKV1tPK9mB7yWkEYXedT",
  "key28": "51Qa5E78QwyEfaVb2SevMsdUVyg3G2N4yuBbKLUsB85aZm3tD6pjNidyKNr9WUJh1Txuy3Utr9LhyZzvdAaU3hfM"
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
