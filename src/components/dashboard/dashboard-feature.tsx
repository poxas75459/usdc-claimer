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
    "5dhKmrj4nXuKDJ31tgiDPdEWBZ4qBYuQ1eYYBG5wCZqPE2Fh53vnmdBsmKcCoNo42mZ5ywRMhQgeiX4QLT882VZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ijuUQ9K1mZ1753GgZWYhikxLHwgGRqcbeeHM2wwtVpLad4ScpHwZYifTi9ZzGjRDoNiDdRZkcuWDFAQsqu5KoUU",
  "key1": "5qYrPEB7QrjcfEEWid9Lex6WVne44vp7YNrr2UCRXXNpn6RZnwKo5s4Gdi2pEHbM6gtdQePWLkffFZnfF478PbJS",
  "key2": "4Agif4ExY9jk44yXktPKiSZ4MiZFhrC53JLBp2q12xAuPWLxHGd9D2mnybauP9mXM6ramxkqeiZpGeR1GgG7MNeK",
  "key3": "5W1fYaf7FkL6gjhB938i1xkTTd4y7QfAP3xPemBG5bNUW2NLH6tDuLWn9ju29NUfjrTQeZa2ytih7RXqGsRvC4Sj",
  "key4": "2ZkqUFytRFWGtYQm8gyqRW7kCrsmXn5MBSp7gaDqHJDH4xjq8tFtjoFjGdL4E9XP4c8SzxpD5hQtG4h4AXUrgQXH",
  "key5": "m3PCWqgCR7YcECL844fETWPAFiaMQxCyZV7dZjyBunYPmEB5uDYH6FK3FyYEQYcbgx9wrjrYx7ymw5ntTsAdX9a",
  "key6": "33gK1gwL4xU7kGf6ENN29HiWknnU72w3HeMorFMcTADxj7NdWpHTptsE76BCUiSSrncU8ZWh8B6RxPC3nXfj2PXM",
  "key7": "48bSmP2SSdASjBhwogXwL1Q7tJfxcWZxfYFsjFMjEdonhGFYzgieXDStYXMvNuASMkV2AuTJ4KKvqggT7SxxBtUR",
  "key8": "2oDKM7R513qwBL29atFNRjrpy7KZHiXqYcuX8a36ANiKpgTV5qU5fuQAxU5K6KDnFqyAd197UxZMKmYD7QPsLruW",
  "key9": "XNWpBTw624RhXZekzgVc3ZPybwA85nTK8QKSeLXaWqBNa1WFijBuq95u3S2w5XJKorb8LZDiewKeGmPxb45mf2E",
  "key10": "2Z5iqtUFZ1yJZT3GRi9mCTj82YDz4tC2czroXUxUfnrEZqqJTaJwJWshaxpZTxKBJ7cb24BEXKi8L9fFoRbD2kHE",
  "key11": "4R79rxUH3G1B3x7nRJpCRuTAZzfkA2rCYisbVhwLjmuerU1HQ6YMUNvnr4JRBen5jCVCxtwuyZdyXyM1P8ueA1Mo",
  "key12": "3NNYqaLeppxk274pbTGZmP4zBGTcDKDbWBAyHwDKX6Pnd1ez2A9Jgbmre11YYzS6PcUbT7txnM94hjTcDwDWFHCi",
  "key13": "251zpFBEBZccF7XmC9dDeuRTyd1LmdyX2vAhmc5az4kpSjUyzWoHdhFnPVorswv6mCGuUF6ccJymk7dU5WJ8U5da",
  "key14": "kJ42Ei2hoYjvqGox9NL2pZawrvCuHTLYNMi8AeuCubEw1RNkW6A6hXVL2Sh5BfAZ3muwWmoVwQdfHR9cZrgQWpt",
  "key15": "fdzjamjYzJ6iR8DcprtzTqhFhBr8Bcii8ZUD6KsVEocpqcBt2mYm3NgnEqVFoirVVJuNX2hyQgjc6PdWH8UdHc2",
  "key16": "25iREN6adJAVtqDQRArsTSNSJmjaB2XazUbQMDkYGdQKCE8Q8UAnLYr3gcWyLXJ2LMQGxAGTRrqEEdKSXeZs38kr",
  "key17": "6isFYGCw9NSWUtDCuahaPjeJL4WjsoK9CpbzyEvDhqGJUgfocemQLwYdwBz59ZdzqFGorujYeyTAKYsh1FLgeZm",
  "key18": "2rx33Y9GHPzr4qbBUvEGY7rLqQs7Vk99WpWbdtm57gLQ4BdqaAWJCtNKvzW3ByhVjq3EykxQfXbbxBu6rRrvSye",
  "key19": "2zmwEZ8PQc2K7HJhAG4MbmoJUJ4xM8231HiLeRPjBioiKxLDTq2ycFTrQLpy543SVbQNEJnpSkS91N6boba6nav9",
  "key20": "3No5kKNidYvhQqJvpdChMb6UDW22P76WkbN1vBubFpWWQ5M2KXMRPjngwXAXEmT1wETZDeZ4j2dtNHBhPhPG5yAa",
  "key21": "5kuvo4JJVwKf65roqRpjKv9QNBSvxmWp9ug5Sy5MBCUpDcWVLtWBvKBeWjSdQQzspdjLrLtpGDXaDcXoBc2Uh6do",
  "key22": "2V9mpEWyt6CgqvSAD4wgoKp11Z7Hc979d7eD24agMpSe4dqqDA2UCKgTEvC5ALy5tQjhVEQpbeR1tJSLEhjoZekT",
  "key23": "SceSCquevCMSBy5Rx5Wh7jG3kgEbn9qJsgZm5X5sSAMyrhAnxXY7E511iJrEJ7s14auN7BK1JqkKsBYDveeAmhM",
  "key24": "28QepRhzrVCHtggRAZWgiV8DiCJgdBnk8caTMGgVcFuCUmryTcDW7EyLTgVXq5QfsbSwtcCUEpzor4zJMMLisBKn",
  "key25": "2KDXJ6jRVQpLQm2b8owDKZ4ex98vokUxgRkVoB6fX2UGfThUnHYp5vdBcRqy3w7KysrCFdwGBPqUjAEdbJpVzQWC",
  "key26": "2fqp5FH9cUy5yvjaBCkRLXCVqynRTz8SbU2qXJaKwBs5v8Pgzz5dE79BFswkeMK3ZHEt6PeuUqDCvfdDvDJ2mtWc",
  "key27": "2eHPACBx18ohT67QYESeLJxRL8ULW4Ev3ocqGHvskfYoQVy1MMCqxXf3w38vNmHdGQVEthvYgkbXyAiC8Asouoj7",
  "key28": "2Dt16xomMTgg5roKZzFMjsRoRHPoL2gih8Xa69jkX2os6HfmFGvRr1TA6h5v4wRCegkP4Ytk9YUFCEymQpqnGaKS",
  "key29": "2FNY2iqbrrJEeXLMymW947nFp3AJ3juow7Bj9BFqttmduCLqymteXMEA69JbcZhpgQqcrp5hB5FSNpXLXuqGBc7R",
  "key30": "aJCWXoiKT3S9PML4uthS28J5sCCXJQ9jbqBTaaokk5TPE692iHP8JmmJheHeXRrqfjZEWdACuJ4yaTkZtZWHaEv",
  "key31": "28fJsVc4Tp3gSMMoxqduRtz3iAgBDpBchDZL7psrsKFR3rwMEwVkx7EtKM3JX3qQFJWqkTdQQUsDbwWQQZtjzXCV",
  "key32": "4pi7HmesmYUwe6ivXbHrw7p6XfZkc7msLdNSojpzeYt6kw3ca3WT99ZgPLcZ5GkKau9D3fPY2EYnyg9vgzxCtjoW",
  "key33": "54mbJrsd9FWGe94sPRfafC6Au27H41fd4S1WXppPe3NvzBCkqyfkCcvXKm2VM8GtiNNjpeD4UH4CuTLkuiJZPHx3",
  "key34": "2Swf3MDbvAGebtUoHx5FFUbdaJQmMYveCgDJhm4aSwR5wQbmV6KTqP63g1LnShoesAxoVrCDgV1HvmsdFbtGeS53",
  "key35": "52DbVWc3skGd9yNKM3dvPWE7U6xswxhDdmZLQFa5LVpu7wCcx83E8yLXTityskDjoPFmh4MtGCrX6hsZBDFF7wJd",
  "key36": "5yF3WYEvyfTBGvbjr3V8fwJVgF4gMJco7WxH1veciP5uMS6Q1zmjGikYA6K4SsUb5mh1MLm36eCURb5jYGkW5955",
  "key37": "2aDUA6vAeuLq12J6o9HXDkD91KijoWXn1tH2MBGK92UQXNjhgCTdErfHGqUrDSkESQEQAatCCVCh9Q7hfoMHR6u1",
  "key38": "2hYDsLaGUwo1vgLUBSnbCXUFrgCmjMn7o6LCBoebFuJqEe67AnJAJFQ9WHdfKLCiKiXmR29AK6rB4iLtEHwoJSK",
  "key39": "xtZ6RgHNAsYpTijqGAhSwhGqqYFj6SGdy8A9ZnoSp8r1k5qmdCjsNf6eqNtsyVFSQaLAJNRLa8fqEcLXZfMesCg",
  "key40": "gxxs9UEgukh8Hj95pmwmtdggESoZp4DZbahHoBuPQUxUCLx7mGgqpn2YqbgnLkn4QUPP5jUksinbKP1WAQGpdjP"
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
