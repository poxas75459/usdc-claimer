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
    "VRWyLxVSFGCq7xnCrSUuf278DAbidfus6NcrV8Rha7pPB3HY4xfNcpw9nvNHKE9aGn4K1WezBGX6RjoYgEBGc6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RhH4PioHN1Qx6tyjRf1BgwXMGfFbkftUKJErP1fJbAcyWfJDCrBYx9hMLysxZy63SCPzjPAnfnjXYo68abCeBx8",
  "key1": "4irKXkKwbor57C1qgj5oqZk7P2AZqaEb9HUqErgd34RFLbxaivKEKV2CKcYRqnr11fuknyqYw918umMWxCpKfrsQ",
  "key2": "4t3xTpBTfwAntS5u594Ta9wNiEdU2xQtnVJSaZFRXfoQBV4aRBbwXa1PzyngYeWVJvjHmwAQAdTCLg1FgWb3hA5B",
  "key3": "4eBR6jiaJe85KPe3eVMsLZvfrPotuEQMXWkwga92WkFkr7qm4co1FhBzWFGJaaVmFZxn213MhDudRjJKqiTW5eu8",
  "key4": "sHfATWT7amj9bhG2r7u9iDEbFHyNquejTfRnxqeD6DUjk9n4CeH2cnyqFRt1B81anSZqBtZN5NC6q6t9a1iWBEH",
  "key5": "4Nh4uyfgGHEd2pZyasxKKbB5MienKH7J6omyurwnsMnXWkqiMaHH2qwYkFYXrJv7LueDfdkBgJF6ABwLnAFmmkoH",
  "key6": "4WjeadRJJVmwaXqLJXYTUt8hWENGURB2p7KjLXtApxysrcW1jAnBV4LgPeAC6RP3CayVnP34tEZVzhDctXvH9ABU",
  "key7": "5cexxj6a4yXpPaoeEd1xNQAbN8yP2G1cNVXD2PSUJgXrsiwwxzwS8ocS1HjsVE5Si9yZYsrH5ubro5fTGAik4ceN",
  "key8": "2wJDEhPUChXpkfB7ViZb6VPfrDyBxZzwpsRbWXHM5tFr5rwT4bSwHwb3mj2sFNCXpUQ2SYp7zT47scAS2k9937Ja",
  "key9": "3o2naVYBr5ofm47YdUeYvzzDHUpm3NgY1v7SJb8Kpf3aLNbhvtXmU2TDiibyoyy38zRTm5SGLrNSJrTa12wc2mq",
  "key10": "d5gnpz1BLtf9jycSnC1cnHsGS4QqUoot3A68JFH8WxwTvTYS6dEYBDRBfxv7tnNG4j7bZeNrkXkRUMBSLUJoAWQ",
  "key11": "2tFX9gi2dEWppaH29hnm4Q4ojVNLHoxMx4HLrESa1BKisso1MFLt8qPKJhrSPkH3tMUBNFtvTeWnzG3kUUUsVyaK",
  "key12": "2Pv8A9b5S5DU9dwJwvXZeBojRFVmG3ciQt8tFHuRNNQBy8ty73LfD7YAQwRprFWLLkkQWZHCX9B8cviLn4YJqBN8",
  "key13": "4QP9tNKgcv46Aq7vxwsJ4S6vLHckjzJuxUX7x2ZXZEwKhCbWSNWNKiVYxhJgjkyo38UwK5kYwM3aQYVgcoKpijFt",
  "key14": "5vVc1hCzWPZXM2pLvJkkbLmEYPmPgBBMhtTGzwwUa95GH2NWhxdpxED5KDTmC6r4LRn9NqfqbhnCntXKy6zgtqnP",
  "key15": "4gckQjre7mA6sEF1HoGGd2JL1oKVRAZpGiYwodLvzyg74bgAqJkgrBSboVgY8ZeT3VsZD3s8xt92eGCEqkPBj1DA",
  "key16": "21ETDh3BFhG1Lky6eurvzH23o4aTEzqwXDDU3jGGTz2SPoWVkmb7FfAYdiAT8jv9KY654kkruXZj6icjxRmsw3ed",
  "key17": "3bkfBzyQ9Thq1dL5oNML6BsDprSvhMpQfUf4BHMZudrw46SHaAiH2D4nBb84hQCCs2GVLgXdyrQUjXYU4CFKSscZ",
  "key18": "46te8hqbr36G5sJputSzt4wfs9rhKvyHnzJsr8qJ96UTupDYJY2tSHnYem1v96HdzKBPhnNKdzUifJYgSjDE9XfT",
  "key19": "ESfbxUnte53Bf34SBWUPEcWqizE5UoSFM5UJt3v51rtuSDeZg1LsuEePxwpAtXSeb8ZLwUwZaSDZ2LDqP4gBLkN",
  "key20": "2kvmw1BzAnPXijTVUQHa2vAtDqnY5HzeeDMGgGiCLSvrRQ1VZBybWU6CB6ytnnz65u1mLRaFTsKPChnGiyJmRNEy",
  "key21": "61eU1w3yKwUoXFLPrRJ5Px2GYBEiu4EHoQcnaT5nA2LSd4oARf7hm9ULKFLC3Cf4sUZj9JXdTe8hCvjRZQoRwNPe",
  "key22": "4Dz2GeZ6PKdGgexiTgFAD1UZyaBPNa3C7SgjAduV1Q5T4iPFNCZpE4mKrYNk6oa41Ckzk9cxeiEcaB77mK28nzL",
  "key23": "63QGSdqFYqRCQfKPDdJY223a9Fbqy5hY22wiMvUVeQnTH19vaJJox7S1cRvhkwzmcAz3a1AUysv49Sgv8yz9b5TD",
  "key24": "4amQPaCQ66bd24FturJUh4Ws5YCPDtwjJpc7rASp8E52yW9nBvQLy4ZwXTKFe7yqBeJzugKu5nZjwdiZEqCrgLs1",
  "key25": "3sr9zDCMZMJNRzGPsnTgEEuwdDnYydZMhe9Q5sXXgQExcK2uoKQkcfLm8BJ98zdZWWYH4RPuevgSW28gqHLGQCp4",
  "key26": "56qStNZJepFY81VKF3jDNijNy5ZmRshM4tjLMkBKGZYFm3LBFRFz27LZe38Ux4366wX5bXQMgG4vBEjkHcjy6j65",
  "key27": "5amVmbgYiYJevEZg2XNybDgRP5PwHLcfn2vi93mu5NtW3T6KRuxBfUPcfJGMSMC8dAK8SqgiZSWyZKcW11CGDYyN",
  "key28": "2vF4EeAT8QRXw6rCKRKvAAqFykg7bUoiYWk1MhxvgdQnJ2FN5EfCbnroF7YmM4egDd7fEs8VewJKFSTxUfpTyL2m",
  "key29": "4uhowJAtwTcLgdHQq13STzm8VprGzWX59h8j9reEQVQJ611hPk8WPRpMqmhzmdrK7c9yGTwszpsFBuiPnMWr7PHL",
  "key30": "4633VeiFnygKAgG1umivqz4v3K9B5zZSQC4H4tFnK5WnNLeawMwZJn2WQDULTWUaVTYc5QCEEpTQCGBjjiMWWhTx",
  "key31": "3PufyrJjjoAT2NQeGNjv9QtxaopUDqbTYdE36B1Gvmz4mpY9NcCbnhCDXjPE5j4fh7Y21cp28LGdo2mY5kqJVTum",
  "key32": "4wqm1GohKr3gKipRrutwK1WwhNmraG9ukwctUhv819nrPd9QEt8SzxUXqarndPyAXJqwtKhac2dVmhexsvvkRQeC"
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
