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
    "5CvUwSn2D4DEVvxV7y3nk8VWd1aSyR4tsvX3Qguy7n4j5iC9pAbkLRRJV4MQonF15qZsnv2RRwLHBSEYeB2w6c2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4exeLaCEkC5as9q4LDuGPYW6aoMVZGRupAm927kpfsm8WQa8EE7qcCn2C1oX3Gje8bB5RA5iq34MVf5WbgKuUbjC",
  "key1": "knM88qu7x2Av2SEpmfSnxp2iqoU3RMFDbGJ8tcMfZoEoQizCVyxWJk5Q8HxM227gpd4TKgvBz2dQnfz3Ep6TxHN",
  "key2": "3Ebxq2oZoto5Y7RyK6ucrM2CYCzNJLKTwqaumbd7GBKqzub7zMnJxEFBc2LDeVR8cHtV7oHgDgiy5g2W5qM86bTa",
  "key3": "5dDMWAtn4Q9kBSntHGpgd2f8y54oGVwpcdomK2b5izCGYtkbtnGpyoZaRL9Wnw2sVfxBvH9oXt5hikZjVnH99hqH",
  "key4": "5X9aQb35LGiTnLq2qSA3vePqzWC75wc5P9zC2CZiWCVZaPuttRuQgfZ4p734nXBwH82uPh29RE6bHdo7HUXYGS2J",
  "key5": "FFvP76YJP8Lhagarpkhjf6tSpevh8kbk2z6vunajApUHBCYYFUELEaptS6ZwmDmxHy7LVxyrq91JR1XCFjvgJ8U",
  "key6": "4Ndrt5HnF21vmfY1e49XKyMvpngQbLq9z8wHByTrWvQVF1ALKy8bnUBmrGDKmNSwWcBJ5395AptUaQfAtjJeuueH",
  "key7": "2kkxq4DhZmUKtr8xwyMvzmKaeJKpiVvqFf51uFjbd9cuiqjSKhKLdqutqrLuKdHNeKvrQvcKcGy4Jno2T7hiBspw",
  "key8": "2JmoLHQLJiEiJsgifr7a3dXrdbSqPjaC4QuobemaaM9BGjEEDnSCLDa1PH4bgcnBdUHYgCwsgPH7wdv7LBqL7ixz",
  "key9": "5MtFAawc2PfgmefsCXwQ9mtuNzqxBxC54GHpsZQmCu1B2NqZS5MxZmSX9YseYx1g9WmxiYs6t6fiN9T7ipEAijEK",
  "key10": "5BsXC48uZtApcWErjMfxaA394vAqMgVHu2WkcVzk81E2rnNskcGhra83EKzuRVKKNJSWJC8pHKgj3VE4K2FMqUXK",
  "key11": "3Ex4P1h6rsJKnafvCZBdUnCS9mcxk1Z3s8pU8L7eaMCnSFfGHw5fHQKijN5xWtj1ZYRqYFJa8Dwp7FUtWyR8mBoU",
  "key12": "5sEtJWsdiPRezwPwfMY2HnMkfnj1k4hjTi8NEGMmPCTWF4aU2S2r9QCkvxjcyHXgJx2179ytnJYN3c8KjHrZ7nYz",
  "key13": "4dV4FeCDoe17NbWGFmjNuyuDJYqtdPWo9qa5Vfy6dqcLUuTNNHyuzZ8oTyNQ9CDS8tZVAStmnkf7re2N5yoFjgzL",
  "key14": "3EuzgvLcfJ3EgqfdVRN49UwSvHiN8AH9xkhePFrddwfwsh23U9uRwG2QWg3dggrgeE6hLWf2v67vubT6MzZ9Vf91",
  "key15": "JpdVsLFAxfdJbTCxih5ViDXniZkWJMBCbuVSwKJdFdnnNzcFKHhMtheSFyzHg5RFDUvMrX4uPVa43qEbTjTPFJn",
  "key16": "3VZXPsCEcbwHZx5T1MfYrPYTBDD1Tkr2WSTyK5BRUj86FHvJrpdWr33RtTN7MLTHsAQzhGvkMtJkYHL5GMNCsxfH",
  "key17": "2q2j8nprC3rVdgqQyfqp46QarttuugzxVkieofDyP2HZX2h6e96WvyQWahc7Ss5Ps78J6TEqEufBwVd1GzLB9H9M",
  "key18": "V3smGieZaUvSBbuNcABLTF8a7g4HUDdpFhLBaUixZS3rDQyfgs431Y3xg9PMZvQnr83FpdZr51ywBmJeDN3JV94",
  "key19": "3B8WwJtrR756xgbNVAqPXHQoupPxbi4KWdEBJm5hZhhYKVKgp8h1KGfTdmrXkhR97hwj5kSB3Ytxs8EAAiPMpPjL",
  "key20": "5kKjyYP8YyfhoDq2yWzj2ht4HEm7CDAvB7VCiyDcSs8hgmT6weoECty66Ywzjc8fEd4Cgw1C6F2vNhFWXEhzLNqR",
  "key21": "4LuWCc3JDpv9SE6ewBvh3kwXRhmeizwevDLsZzvzwCNoTCdVwwkT5WNhCsLWtHmchBcCWbxo4p5o27JBGqy3TaWH",
  "key22": "2739WhXSwPqYwxHHjAqvh6KcWb2CMqWkwDEyvSHa7QanXBw6QFtf2kZhVtcnAVENcnLZ6bC7q4jakPTPLwAHFdne",
  "key23": "3FWoJYQ65edNPEaKki41CbaabJi3RVFMX7t9diESrCaSYMrufBvYGudT4pmbpfgKTGNkMKUJS1ZjXqRjBARL2EQG",
  "key24": "3jiiAbSfNgooCMqCJVYeaBzJYfgMchJ6DPxiiFHXtmkisoV3BpCuirkkv7dqBYhUUBkD2BDHgpYWL5HXRf4j67fh",
  "key25": "4VWziY7carezjpQWhVgKTHmWHDTHoQY232c1Pd1NuRzk28TLLAZpbqqmBgxzmCshwd4rXtfYNsk52Bz7B7foJ8D5",
  "key26": "6u7n9vxCB9pn73wtbKjo1tJMa2yMCsGZ8tYMqMRQi37FKJVejaxz9sGSWnpG2TpLWgmQXqHzC5jdCKsJpgw6nLz",
  "key27": "34JrtzsRgC4ngt186MnbZc3tkLMzkEmzxE6kzZodvjgavoZLRYt4yP8GPmjc1BdzWnJxFtW3LqgULMMYuJrQ5S1b",
  "key28": "3EL29drtq2rBrGT2SDy9Rp9fyXNC7jgaiHpufhzDAy2ascVyP3RDoUfysPDZfsdWumeSv56mW26Z22KYLutgKiQW",
  "key29": "41j4uCTigs4gNG689Lybg67RMEd3CXXcMFRZ9766gZZ69FaHF8bWqmkScdohBuEK1TTh26QWMGrNmyTui62DzN2p",
  "key30": "5G2uykiknyMgXKiMqSLSxwf282iqSgaP7EDH9PCVRyKRiKnuxSNGDoPv6Y3L753aYCgAV9nmarSAvBH4kHJkL1Cz",
  "key31": "3bVUCESNG2jyF6RkANbGCvCaK4zwHEe8iJJm8LFRnC3HuGqK43jaD7zi2hes8A61dnLY8Msk3gmwquxuZjgDQMHP",
  "key32": "3RHKpCT4PKJDSCzsuKkRd5GNvT9mLb9H2Y2CfG6eVoso7xfA4vPawiaXDy1nRuHeVBPmRaa17rPnf4rnEzvNv43f",
  "key33": "2Dz3erzoZxvQwHD54BMwMfniQDEdPCgTrUa8u9jjUpbU7WtqJ6o1CrAvrTZRfBKD9mL1VibUgLhadWmxoTFNXUWT",
  "key34": "4Eu11FA81dJXj8ADgxcs3P52Nz3M8B7XNRQ5tGMdwiPfwwgvYcHtg8ssvXtRAqE3FsE1SvxtGVK4Ws2muSzLe188",
  "key35": "2P72TZTEzVFVRWebkX3kwDMo8gRUkzNa6WNoczAWwGN9UP9Qn9u9ZxEMGBefKo6iLA1Q1sfPnLX34cA7JRNumr1i",
  "key36": "4ZtKv9HDqdHucrLFbMK2ru7wFyjRiQDQbtByQCQNWstUr1tojRyHJpBEX4F2Eu4XLtkJsWB16KXjmib5Q5U2vsxt",
  "key37": "5MFki4RKenjpzoVSJew2QD17PjE2BdjT39pdRJLPazXDGwFekFvxnTdumGe6DC1X5D3G29mKBwUqxEyrHktx4rkX",
  "key38": "5Q4fptfiqPXahr6rBat3i3Ej2tYcR8ZZ8EfYxGFHRsddM5zqTSGqG4LZD13SHqHE7zCL3Eb8EoCkbggtcC2xrPah",
  "key39": "4Rbb1fjfYcRmVMg8FSrX68Gfzxsy3f2aHBD5VWm7eNYHkL5SYyWpXwDqUNUynpPrZDCVqBhgs2THEyYPpqnGZgLa",
  "key40": "hoQmjLu5UkvpfPntkMed1vecAc9WHVPCx5TGZUyjniQzXn4SQTviVWYMZLhB3avcYPv7BtEvxBgn7EYs812Jc11"
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
