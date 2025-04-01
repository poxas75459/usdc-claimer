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
    "5gyQCLT3mbCeD891K2vYJYH5kzCVL4SoHQ8dQYrdN2x1DzD57J8WJrVrEEXzGohPqWtSB7qcHYWApxke3UfBUr5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EEmY7BCPzvNSSdjG2q7AAqQkTwih7m9hPtcmKCDCtkbehz6QYaEhFZYniLZcwPcun3wMmM8JaSgbu2MNMdzT7Ty",
  "key1": "2szv2Hj3NoK7vLP6k9QQit1WtdrC2DyaiYeqgbi7A7ofoVQa1zZkf4KGuuwuzjDsx4cMmV17CZ6CmRofWa5hUxqx",
  "key2": "4xJJJdCJ9kb8seJSHrKew8kP8skkxVquvmC8qwYy2RSc6fsddL9KPejGC6J3Yq8osBwimWV86saDpLAubRY542pu",
  "key3": "4iNLChLLU9Gn2uaTix5KbpLMf5Fvbs7ka9QUX8E6rbgqum23UYYM85uAbgbnTNr1nsRftctooHbcf9U4hGb5K8eH",
  "key4": "5VwYtSqr4MDD1sPH93GA9PDh5FLgUgxbkaMsEoSZDKncbXfoQ4tsGoABUbAXfuDEoReNSk6aL7t6xnVADjqReqKX",
  "key5": "5SmKnim5LqAob5ccAtatZTZtBMbbxh1V4tSNVB2aBWX9SusHbz8YGb6su9Jz7eeTBJxszK54TdBf4huBBukpXRju",
  "key6": "1wnHHu9P5UDjZzaGT8xx4Yt1rZG4wTosV3yfx6nLdfdDXL9bM2tWiEoKqKuunS36YAACBGo2j7wbVA85m87JUMr",
  "key7": "56th2dK39zUT4nqveRuFjD6eEo3MZngaZdmswEzwhD2H5FrkbgjRiRV6FVCuR8oqy9xpyat5wvZLLZapmWXMbKYz",
  "key8": "3qtoaU3SAaf3LRJ413d9FiSNgayzVA2uU32bMa4Ft7NCrt331ofU6tsT5uu3CZz2Z4YLFGpv9RmZMy1xXix1KRoC",
  "key9": "4ChPn826S4TQV8gbcHPqTPP8SognQXDFhB2tG7oPMGMMHic6KvYHGGW8wyhKbXEWwGVJEgW7yqQ8AUNeqfu33DTd",
  "key10": "4Rk4CBHeDjd8p7opxReR6SSuh5DrcHvo17Ehd43Li5vD9tkSQtNkqdRGGo3jQrA2gVwgXa7DpFfnWYSZsdpHUsih",
  "key11": "395MYaXPWfWovzP3mc3VvnUsZfF2nMRyFZVRhbcg1M3T4kfzMXFaqWvSM4msYGgcJVG56umog7sebAndNCauZhgm",
  "key12": "31AgXi5bhpiFo3obtVCDYUPQt432BEP7a2ZasLB2q4q9pNm39tPzTgTiQJRFECKqUSCtnG97erpXRs2gDQ1r66n7",
  "key13": "9kRizcx7icNMTgLFse4ZxSQCkzDH1U2pvvyWavkGmYaHktpbtfwXwvVXUPWTnaYCrnCs4qDtnYYwdTAqabhASNE",
  "key14": "44kuxLpmVdA1JyTsiSvimnQjyrZQNGKzeUh3bbjdWVULMJLPWHCzJhsBaRM4rzqHF71VLAC2WT8oSGoURPreodzZ",
  "key15": "sPaBZV4qc3B9jMvZNpEUp1s7KGRRdPrURvWEUcVfL1LHY6ye2HnfHe6kZ1Nva3wyfKUHheVEvrw2fttKxR4zJSx",
  "key16": "3RuPh5cDe3xQpinQE7Rrm3sMCtZE47BdWwJiXnf2uTRkKGTa5XZbnR8y9sntopE8KACuPXqrAPVyqc2LziD7tdDo",
  "key17": "zA6w9CruqZuj3DF3oBChtAXsHqERRdpegVbpwritN7o7VR9nV69FEPSHqREgQndaPWa8dr15wmE74ETCcmEjV6d",
  "key18": "4vossNAkHunasV14otgdVMn4uDgZN42V6wzr94n4pcCq5mervDVNHuob1akvqZ86RRYp7R1fsWcP2APCbxEGVAyf",
  "key19": "2qxu5X8x9fNs1GpHMYzUen6bX6Vpvu7r9rYA1ig5XkqfcJvPbuV6SgBfZm2w3mx6JDeY3rRKLrnSxtYeD7oCRxZj",
  "key20": "5tkBqUBBBiUqgcgCgKJVKdnxVsRrYgpEEnnwd2gbtoQXHZHtqc1V5fjjGqSxR4uuBEVrQbdCz7N7m1N2e8nnugRn",
  "key21": "5froVMcr6GNyMiBgNGEx2XLet966BQ5hDm8mh6WcDK3zGRDVCfsiJE9npVLC7429kum38pQK8izNG92FWc8rcSU8",
  "key22": "5WKZNa8zevf6yoDSiP9VZXPj8ujBXFa4cchY4ri486u5R6VN7CUU3tSko22f2KXM7oAuknbTTNL1rRSFbDZCB4ie",
  "key23": "JzTpbyTP1iNvF8pGjPccaxwv7saZqRKfCM9br1Pggqn9cCUQ5odhymRV5BL66ZZNKDtWBsKZGCj54ckQWUHBpq9",
  "key24": "3osMxoCcr41DJeR5sSD4S1xgaHg5NixQp5apnkPQrgT7LeshDjSAHKsGNNtv46CB3kd1GxX2Z4PJmJGnvA8QBJc3",
  "key25": "4ChLdR47ixWCYTA1i5cP9FTpctBkaupEgmrTriqUduYyATeeHePeXYewdwn7fycCWzL3kcFXL9m5GXRAx8ymvqwd",
  "key26": "2buizd82AAR13nBupmNt6zj1oSeokAwCJ54468J1jCLyPYeo6SqjyuY8T1Ck6i73ZrbAXdy6TLtxDrJqqHPi1otq",
  "key27": "5TwZSWbyUgv5rrpKGwPg47M6SMKUmZcWHyGbqxtzBJw6nUS34PdzcezwepTJbZpaLHxHXffnmLw8URxphHUmHi25",
  "key28": "4hjePGoDfpQ1NURNnck2DiqLP7xdHH5sNvLyePD6LGvfnDv5ma3hxFvQYP6h3HHcdU4hCNYMTnKfhumMZNrHHA5F",
  "key29": "45DQqDTUGGjMN7D2272Xy5fFyZpUQ6PCeya1Rj8EZM4beB7faxeQmKxmHcB5FpuDKvXrUErXoEb5sngfKE16MqMv",
  "key30": "314ErxQ2bHYLeycjTfFeAy9HD3794ozdrNV1uLY9P2M3FkpjPVFFHbZMu8D37FyG5f9MqdyBdKjMpcq5cqXFfWmG"
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
