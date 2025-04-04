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
    "2RrbHV7SN1TVU4sad3hPuNYmwwmjQjmRn2NmhqDQQovK6K1c2bYeEUCseeL8xX6YL1jNExWASDp3bR16K17dFCxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nN5RnT6gtJTfkX8R77vryYkxePidQ7pV3ohjwJfQkrzShzjwWoyn7CPZRnnXGTZCipu8rqMrFr5N9uppik3BDTN",
  "key1": "3pEWdWjDGoYq688VApWNqEGxB6RvK2xRUynEqi1srieN4CoF6KLELU3gWKRbDSiU65YqKWKrDJjSk8p4iqTPeLMi",
  "key2": "3Lt7gAzMPc7ui3nNmCA1mjshmZic1pVdzQyJziYsCqQz5W6h7ErwA9rgdNJuA7mpuL9RQ4U32nUn6iMp2iQgkZ6w",
  "key3": "4nXVuA2e8ApuHAZGMbNEbDt2WRTQXG4E7cyNyQ2WjxcA6uhkF8MN41jNiHh88pmVWcByjpjPQX2Dwv5mh517YFBa",
  "key4": "5gKj2J9Tk7HKkHHKbYhrEskKKXYaCfP1SapjXUsHgSHr9EGa5KUuvLA35NqNEMFuDUZPyLuJjcW6qsLo4r4yrt66",
  "key5": "5r7HGtDZDEYG7AUbSr64puHEKFp93nU4WsXCb4ZDj4JdaYDkQdZfgbYb1jVvAeGzMzEs6dq2hroEsp18pns8RyYF",
  "key6": "3sEaZAdh6aTM7JHYxqcTb7cWdC23xXRkaDHPEU4o5rCrXSiXsA3uM9QheryLMvKrSJyS4gPPzMeuzFXoYAwqR6RC",
  "key7": "DWiUm7ZbBh1VAa1iPqm7gcSVYSgNrgCwMaxK9gzyoiLe2Y9Yv7QPhqcwcLM7eRGd24Xbh25qBCJx2AsCqyvyarC",
  "key8": "5thV196R62bPKZAMC1DiinRHX8L32ZUDR847kL2XwiWxLL1EEM1KhD2RXH3FM7GsNRN2fPQ2HuhUJTZiP18AHFxk",
  "key9": "4FkGf3kzkX1YyxU1ygPBCbdAmdTdnMsyHmRmC7QqxfKxmFKpfhsVUJvsizBm7PVLq971sqmH4G4n4D4v8VUEB1tR",
  "key10": "vPqtGAwSXPHqKKwQTq4PdQJia1BLEQwbx1VBa1EWWNnQurZU3kMTEDDwQMaUfjVubsoTn3zFQERmYwgeSMqUwho",
  "key11": "5oBJffDYc6U1ybxJbesMoj2ujyzLZBrtUppLYgPaBRWBXDKifnVCwZCY7igw1gM4awAHEew6ifKMqeWKitRuJtdT",
  "key12": "4rumu2xeCEsf1GE3ai2LwzeztpMMVqRqRSHMJ1bLz6B3tbuPm6FYNjR17gYAZbQGWuk77SqF5yRxTSNFg3XiVRjt",
  "key13": "znXvUxnu9Jw9NMhmc37kCmA3CcjqKoNCwBkqj1JCcXLMCkNWtvEdCx5Rn2UAfnFADTGXR8Q2JZYLodbaW7npGsm",
  "key14": "64FQTP2JuMc3wHbA47EojyVUu95P3oXe4Rx3RuaVQuXjZ5J7ZY6Eb7DvXe2ZoLqYk6idMCj7qe5WADRUZQVRDvvw",
  "key15": "4XJNAKq4NQeG32NwW6SPeaa4EGgw4dVkp9zUp6h3KxytXpbgtigyf2DiXUsgJ8SBwaF72VsHuRUQJWJXU8hKTL8F",
  "key16": "5mMV9gjTsLeKRhpRypvtEixinyzWytwvHhPKiSiHifB5fQ7Va8DnsuPAppfR6Vcuu5kaspN9qWf6PoYzzjfwUWk2",
  "key17": "5KKoy6ceVXmJVV1T5ofWv99fXBXjiv2KXwhNZS12evCGWtbaZvcxhUAuuUsjRbX8BsET9nruoBQRF1gksj9SZT63",
  "key18": "G1cJjgnxzC9pGS4FAnT6UfJNkr9GDppsjj1fqw7ycUGV4HKATXnjQmGCUyDcBFoLdRRjvmHum53wq3VjHicWxVY",
  "key19": "3oCXhsMKdMNrTSYHUg2fZWs6e4FFsrpSDZmyfo7JTfiyYxzEBTNjYPAdpCi1t9hoAgmrDgrRvEFPxmqB5xQGwRHZ",
  "key20": "5y5je5LrF2QpwW457dnVPygyw55PtfEeMJxvzxWxoGtrxseh6BgGFQQADnukuVTCin9fmPpWLXc8V1W6s2whJNti",
  "key21": "5GCNQMEcrcnmGGGYaGbM9bru8vMVg8SDXo5dr8Dbf1T17QkvWSWx4CoYpytmEkrumyQHrbSBtTHc4Y4oZbMh2m9x",
  "key22": "4h1qnncMg8JjkRteWSuhf7PPWxXp1M5dvN4UR1Y85EqK36WqV8FvW4X4V8M8JT2mNcTPS8e7p8zGv9V5728gdf4h",
  "key23": "628UsmgbPMwcirVw5GwQyArNs5zh5UQfScBgZr6dA2yfVxSN85MJWcgwieqtWcdbacjj9PdwheBumn6qud8MZbiB",
  "key24": "2oZu7Uw7gtTh59vF8WD3pRkpCd3Mymf4haJ3MUdDo2XHt44AAHQjBGdrhNnj49NDNAZWvmRB8VrRWjCNUCbwGP9m",
  "key25": "3gBHooWBd7D5gWKWNyjzLsKb3YbA3TCArrViH9pNGXurm62DvwHLKXUsCzKKZs1wQFQCRsMs94SrZH3dNXXU9Kww",
  "key26": "2Dm1h8vgh3H8RLm2zoACRSAtK94eK3FMTbJR9k2vGKkzRNqvK8xDFquV68DcZfKdSkCpWcmFjqsxeLUEdeq6GA8V",
  "key27": "5LbW92khtbkeG4HjF1bJPzCBbXmqjf5rcX1r33fmC96xnZe5fQXQxsX7m9L3VSifoZwVMerRFWV7ELijXgK8pr63"
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
