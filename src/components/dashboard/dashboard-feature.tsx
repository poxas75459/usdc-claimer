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
    "2CypJZvQs6s68QnnLUAqwkkmi3TM7BorS6B14VJfpcq6CMSEBCcPRRdZe8sP7hrVwvX7nt7xmL3dHKCB5tEiNUmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhELPLE8xzidaTqCvmr9NuckfpgsTmpDXxH6cAPS7KLzBe4Cm9BV9kPGBGKJCo9UgqJA2ypXU5VJUk1FmGmUkWd",
  "key1": "5itrmuKETd3XdPmZAgJdJMskjjFCBGyxwPZc3yuZX3nDJcPeicmwMBY8UhDVZ1BnZgJZYbVXPoha6dtPBobuQRmX",
  "key2": "4pPDJcyh6MCPXGrrNRuArMNroyhDuw1ZoRuvUXSRZSjTwrcnoT2Kd3c6xAmCB9pqSvBAHUWboYndsuADL92T97FK",
  "key3": "4zehQC5zFJJ2YXQ6iDEx9Nqg2EaPB1RzUhVMGhbYntLqBfcH8MGHKC1qf2Lcf32EPEFQMFNnYAM5r5p389JvSoh2",
  "key4": "3744LKZSK1yD58rYFrBE6YZv7MSCm9E3SHPN1CYQaL1MnRuGDjw6bg1WSYbGJ6RNjgJdEoPd3JyuUzmbhpK9qJVH",
  "key5": "YK6z7q9HEZ4Csj2raJwXTn5R13sfqubp6bzQ6qq4N5pD4aR5bXJ9JGYjNMZLTrwK6pMyCCndscMghogx3guHCwx",
  "key6": "3qo76RkPzfBZnbPBvvGQZVN51STRVd9zaEDshkSiKM1JZctX8ZPGQ7pTy71Fhpdp5yxv7vxa7s92rEHvfj9cjCM6",
  "key7": "2zAoG387TTwRzqokPTWPVwtgms8zoQXdh7ChuSwtURxHMCTJ8KNt2JUFSXo2nhXtDntQ6ub3oFUj4HmgZcZS61CR",
  "key8": "2zopTYzqrzgwYn5dxyFTrtbi7p46v6WFvFWFHxFGQmk6uvvu8YNSLRuHSci2TdtyfVWfryE3x4GnjWSQdHrBtmAj",
  "key9": "2znhb5is13z1DMRi35TC58R3f29Q9qchr24qYDEkTsrMF65hUVQAEFwf3UETzcAvgTf1YJezM1mXuLXv7SkWCJY",
  "key10": "5tPf661BttRMuudD7hhf9invWBR2KVM5MEBJKF8jg1QqYa2vrHFkwB3uAjudcfPmp22LQTFYTHPGtWjcUjwkCf98",
  "key11": "JQJW4W15ATozz5E47wNkVjuniETF73XZ52KhmFYfs18rzGtE7HqRjRuuA4BFeL4Wcctb7bf7hGGRd3ioSmckfRm",
  "key12": "2iBvfJC8tSeMYrt1EgJkaFjJDPyz9uEuvXVkUxizvctA6evj1UCukavivf6FVWZuuUbv8u621oiEeyh2gh7ALE3h",
  "key13": "ycGw2XWb8ktEYjAg1SWzjXBNhecZvik5ZDctiAAT9NAivTpA36dTkWZHUzmUtxgu3wGZb3LEoKSYk9yHvRKeCrK",
  "key14": "5YXyHxhjA9X2rRaNCjrWhdgFjULdzJfkpeGweKey88PiMD89HgPoa9P9yx3hKD6gcE4TvpxJHSrmTbPGhrAQb2xo",
  "key15": "2Z67KP8GoVDs1dWynY1NanNvFeUC1fKpezrjTDaubbgUwdiykoQTu8wrxWwN6S6sgKcLzViGTdPorhNJqBbZ564n",
  "key16": "5xeQSrTP98BBXcZNoo4Aoag8Nn4T8oGLj9hVXDzPnjZKupsXneNgnJ7wRQpPViuW94cK2mDpNsASdqrVTKZuuAMV",
  "key17": "5As9kPm8Vi3TfTHThgjRMWZ8bJj5F8wf99F9QhSSawmYpKKrsDkivZkeFZHvLZzdALqpDAiZPnsud4Q6qnkqcSxo",
  "key18": "4NoutwcrvJMZ3kunawnx4ScV2RqH9AR2gYEq4LArodEP7NLYT7jq6ncan9fnEcnwvT82J6CRczCAD6QEfvAHzoiB",
  "key19": "3XJPLpbjqBLWNeKGUCuMYdPzCBRDLV8QmuoBkrHc1vT2beQbtQovtF47qVg1jx6SEma3qqSyrYAbTmf4bUPA7TCX",
  "key20": "3Nq6bCYrJ5DVNGpm6y7LAEsQQUshbQNiJVbXNFdv27aBe5RtNBN619TAgArRwP5Mp3QcaWNQXuoavwXSVzu83UGU",
  "key21": "2xArQFquuCQ8rCNdGudwaer25foiVxD6zxoHybJ1a6xUT4DqGfPJnNk9DNNCkHWSt3XfZZNRLh7BNMu3RFWa4Eno",
  "key22": "3GHyyHk7Y431P3cgCAY886fyiw68cvoSHSJ1SRWCskNgfTpn1jtdqL7uEBhA9dVgUtBn3FjAYS9hPBtUnqQ9LqSo",
  "key23": "4mrGzGPU1e59EQaDtBuybrHuZa2AtLhDUpAf1qy7yvHLVtDogThPPxXcpNfS9jEhxXEP3we8bTJRiYzpP5Wudj2G",
  "key24": "2PDUphs1uYtG88S6g6RGxicH5fcDE45Av4RPWq8rZ7oPMFkTqSfbsCGjbTkpirNJ2HEEK7Pe4CWcF7WEadcVqsi6",
  "key25": "5qKcQpgfDckiShG7V5ngRSrpHZ8q4VKDukrdETEM2rWWZKt7CYoSQkUSboy86YrFR6rF2apWkUibb7FmmAE75aPd",
  "key26": "4faNFCNL4q17EyB65u5Xce3ekmdfEUSegKpRNxyN83975LU7Gi869EK4tLPmou5BqQ7r2osqr94B3WK5rQ8pJbZ7",
  "key27": "4bPdJRxzR6Pm7jkrF6uzYBVQKPLz1F3oDHccaZe6JThfdoifJzoY1GaZ3Twwtjygzymg1QtNsG8GfhwECfe1ru4H",
  "key28": "3nWCMiGFUFQYWJMFj5R9uzt9ve2ZrBo8Z76ZHLRGNnZaEcMk73ZKndmPkBU8DBj2bTSzGpzVCKVxdv1WawuXxLSZ",
  "key29": "2EPQS8jWvva77Nai1nPNbgBBaMKCkFCVCvPneUwkK6LyrRoarNgupfRqnfbznvVA7sCZqE68KLvr3Q9kRUHnAwFq",
  "key30": "319juDgymDvhSQhDzfknLeExaWFjXYi363S57bYbt3FpHFNrW87AoNZWXMhXSwfZZWhWYH3JhaZQNzuiQJo8GCM3",
  "key31": "2nsvpHd9X7iu3nWU31FeXY4MDz8gdh6j8o5tf3NgvJpMbKrj8GR9dasyQB9WAPtbMGcsJZP3YiJ8X4DLv93puaCJ",
  "key32": "54iDGMePgo2NdvaNwyTChxqMcNouPYMa5k72kAZTUbydf5u58UZhyizFLb4xMQy3ezu5Ntwn8pPszciS15uuhH4U",
  "key33": "bJCsmmpo2563NDxgY6KnnaKpSLJ9p6Tb8khfvNFkfhAxGFuJXYG5NRGiS7T4nk1b3q9ZDwHVAodh1Tm6fHdEhfE",
  "key34": "3EizFmLnrPrPt6bF2F4kPGDGMZWj9ZPz5EhezNthtDkVHsUY9wpdskf2t6GqFS8Sso8wiiBDUE4yXJu12f57q6TR",
  "key35": "5FWU4mrUMQft39pz8LHJh5Zj2sSPPd1kd22BuuqJgL95VohpU8Z2dYc8zGE4mseekg93fjCWcCsiE5ShPZy6Zvns",
  "key36": "5wpLk25NqzCtq6uyRrRRgmQHFwCyskLniitS1FW5Z9Yfi8zKjsf2naGPqRtFqsNrqNZt2RxmkfspHqmUnayZfok5",
  "key37": "2L5sN5ShztxXChExcJMP7Q2BDv87ReMsdrTzd9rsbJsxHCyJLWbKKTr6umE9Pv2WNTwczPDYxnKKWZ2HQf2aCz7P",
  "key38": "3LoaPpidVbG4VSzh7A8ZsC33JYYMAfLnbZAgebp7afLsBXWYseWemqjW6evkT9rqQrS4iaFSxK8hP5T4ts4gwR3e",
  "key39": "5zEiWbB4F4ao3T6jA1XnCH4zeSQ1En17iTc1je821FexNx3F1QHrFfr2sy8JHE9jgu6z6mgznoTQsdQHWGNgadZ2",
  "key40": "5ZmYrtgURFsgJuWgD8MmJiptw9gKzYLcAoWKciTw1xkkTVBv56bfRFkSDxWR5kEa33gckBGoLnXgBxP9UFX9sH3K",
  "key41": "3wAGM9kqMmBVhhuinEkRyM5q27rB11WjveZC4sYnCt2gqVTx8gtTYaTYc4Pnb1G8ovEyXVx6arvky5WzbeexjhRu",
  "key42": "4o6Jj6AU7dm1vAhaBJdWrypm5ZYQyZd8BkE4iUSg761M8H54wRLXy1Xp4qgvVQkCjXEYw6pZBASakHoRc9U1FhoD",
  "key43": "haPxLGksQ54ZeMWtJ4r9xrzu5pw27esFx49M8wr6VRhjESaoboTzzNVQSCBVqLoRWasZEe2EBmDt6RWB7Y18Zx4",
  "key44": "4bpMJS7vT8ywC3G9WdJ22ZGH7LkYUh8KqGtMe5gkDUSJkXkjx4Qw5fQzxqo6ehTUpkqWojnrxZExzwocgiPYgnWJ"
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
