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
    "23y2v4PyZmL4fzwzinzH9tojC7NFahGDb7Z3SXceUkJ6fTfJUhx71c31E23t1SbmGbLabBn3BiDUuHv6es25eg1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5LJoZPyvCidYt4SjB9j3yUaCqtQ8gWg4obTME87jFTkiXhE52LUpMjsAx4hg4dcspW9Qe7eiVfqknERovCgERD",
  "key1": "535PSVY3fn7b8zHjoxnoYPBUcTALKmG6wanUWS1LxmQSvHqSRAEVz1vvWR3osQ2PKUKdx6QoUHWLEuvSPTZECtWp",
  "key2": "3m66xeFXZJ5jgizd1sNphrL3Ae1kwb3QQj5c83HeMhxocD1tadiEKzZKf2sjpBSeWGR5U572NUYBdBjwcqdiTFtQ",
  "key3": "hqi6egptCAkN8PMhURg3EJaGVn1tKF1pM6Z6iFWNgTpmBNBX3YzZQsnvrtm5cRiJmvw68qjBoH5HEuFgjoTyGfa",
  "key4": "5pftY6xoo1HbcZ2adHp5tzTAn8FzyMS17LxhxD7E2HhurzJtzdWLPhDRCuyM2pA6UqgsUfWsqbWwPxNorrd4vvdh",
  "key5": "3JAu2YPJKCDGThYsv7rTKQ4msKjJiZVFdBeNnGMtTdswQaKANCoyt154mHv3qDXW9uVzRnNZf1NsfRoUKUQ7ZjNj",
  "key6": "3zAHfLFm7ZxR1NV3QCTcy7is6vmKPYh6MWWSu2ZXsyd3N4bdUT34dLd1j4tNh43frB6LWs1t3y3gZ5ySjoZuPKPL",
  "key7": "KCYi4g3KYCHz34qYrgPsSg9UshfMTpTGC7HPGqah8WzMwUsdXezU15hm7XoYjdYkjUMrNNaENbQsoxDHQoEyr6X",
  "key8": "2g5pC6FtAJAD4kr3nhBxhqK7CL6Fv1WGReC8845JVj9HgmEyiHQ6ZjMTuCRqWT34MLyGMEhLbsj9bxEwYCsxg3jo",
  "key9": "yLtMGHe7rUGvomcVghynPNDZ7ewxFbTgt71Arfo3CxS7NkexYTncfiVBNTgCRLgCryf43kExVxNRrSwgdVbhaM7",
  "key10": "2Gmufh8yxPjqrhHofAkL5srSXwiJQ9ownExEfq6c6pdyvVzktKxCoAPNYnKDtowPkuNL3mKQy9gCzsQUFHKDEN2U",
  "key11": "doUeqB3zLgttUrgMD6XZfkTRAMCfZUY6XU9Zu5YgWqp8x6eCKHCThY9mX66j8mnrYAV7KvYBucA8Q6oEUhSMR6q",
  "key12": "2nLpVZGVTsVbxxY19zEQxuJyT4geUsSj5WNUSNxuDUhCBcZEkLnAjwWzWMTjBZKQZ9tquJiLYS6nwbdPwQ2XCKig",
  "key13": "65R6DcY8XRHwruyUW6KiSH84QRBsPgnD42NGE9ngTqaRy1k7o9KWJ1K93iZQmXSDGacwV5PWarLc1GCaBsf1LAer",
  "key14": "5mHy1nimov4PEaU3H7BeWBtqkd51v5KLnw82GyPAcnnDCiZ482J6TKYBkRW1qc14zxHDe912pqSJhNF47zBRPc7Z",
  "key15": "2tm6TWoD8poyaRoyVLxkVats1KeQTREkaDUFh6vi1AHT6qxbbtj2ZHyw5BJJU1vASE4ee25aeFPB8NVjs6jPM8nj",
  "key16": "4B7BzuUGbpFWvNfgzohmU76cbhYmPpnU9FTMu8eNu4r3ynsDajWtUgR4hBntKpasQXpyZ1MJMMWv8Z8KNTSkagQz",
  "key17": "4N5WyrCzLmV8Gmz4npYGrREqc6Y58nDnf29sXQRpH9bZ3e5cY9RbUYXs2xxTCGERbSWKcfc1C1q3HiSebmdKfUzW",
  "key18": "23EfcdZ44BQ8z8QAxXaXVUZzDpsM7tzMGnDhAWhnHrAWqfNWEWQJo8WnZSJZ1MuqZmNP5XK6HfUW8iAYPeQkLg3P",
  "key19": "vwa52ETyTKhTMd2W7CpR5RNYzZsWs7xonf4DEUSPuwxD2HBVYsqnoqauD9S74Q8U43daDU2dqscTYgDdfVpYaks",
  "key20": "4Xqx9qtjDwfxf2yCo1TuYwBhd6G4B8J7LZXUaqcWmBpuuUuGu96ebFWFm8XGK4Pm5Fx9da3vgN9qL9LmQLZSz2oW",
  "key21": "5yhhYxc3wm6G36btPCbD73dWHTYY6muSuTQmWiMwrHfBDA9Zh7zVWF1A6w7ED6uAy8Tyaj8bBTVYZHpxJ84mYfr8",
  "key22": "vJuujsrUiTcAXt3BdxaAjTSG39YHEbZtYqcnquoRJvU5v8XDywxKvgNhRdQmHvqoo5pbGXCwp5crY2jFXq2LGX3",
  "key23": "4MTVtgk5Z8ztvCCyekMzniMTBSUGW1QzYwWvt5DKaDqps8Ah1KvVKkj7t2x75UZQapM6WmvvR9cQR6csesj4uaBr",
  "key24": "4GLtb5HE5C4yxg4wr9gQx4z2n6okuVpHnj6sQ6agXwswE2cfPARWT56rukdW5zdSZSn9VUaVHqHY1mipimCwXnxn",
  "key25": "2fzgQzuMd5xKEf7pHtwuuXyt2QYTv4ATuffxRBNeooGqdRQUVw6CEhRVbo3avgmum8D5EgQwCAnSoHjeVygfnG9F",
  "key26": "5rRTT3hKkpzvmdUDtYqqVBSBbAe71EUKZeBvtsZFsbdYXcEZHGjdYRb3An3HsCxZ1wy9SMGogmAWvMERCh7BZp5u",
  "key27": "5rHet8ao4FJkgoXSjqEEoZ5ayFzXJEDJsY8Pj4XhzaVdKuEMr6BtxBMEJrmGp9zp3uRQ3UvgyEc758ZMS2KT81Za",
  "key28": "ABYfXv1zENhiVRrCECTMtJyHGR8hQt9H6trd4Zg2xja8vQTwxgBTinnGWurniNv4U45JczrpiM2m8wmGV46TJNX",
  "key29": "2eNJue8HKJMtcPdnKF24MLBKForwkCV3deRMCeuuEXMrhQvArDWVyPZMzr4MwZhuGvVA4jWboQdgziMBfvvYxupf",
  "key30": "49MoQ55kNE5cRL8RLeA9NeG2SG8WrZ4piDAKAp6H9Si1WehSvd5tPwfLLtWyWimbqhDpZeZStpmZfVMBwK48DXBs",
  "key31": "4NfrpFXQXrn3crbANKfeziZs7AqJJvWHHzyAZVYQ5e3cKzTHC4ukSnTbJwUNVzCtq7pSJLtR54BoQx3QrVPZzzAp",
  "key32": "5GXcWQxV8JcYjXzyaebCKYDBag8AojzM8Qt4PnjymQEADnuTRvhxDaC9Y35uq9MNjb9jud9J3g4jcUGZAcyweS8A",
  "key33": "241hmatcMErbvhqPFf54hhHHvXbQS7ZyXwAtK9vUJi3PTynrHEmezECVAogXarF77KMr2SGLGYV6hKs1XhRBk1SY",
  "key34": "67JYNGkZWaDbxMBjfsCokSweXfvWa4m1c8722nr8fJDeptLKod9psvSbvPgRG25uFemYNsm6jtQPmgDCHmCEhNvY",
  "key35": "4F1RP6NWnVqTD8wMejRKG9QeyA982s5Rbhvvax96ct9v4GpzjZj7neThaWnCYqopK22GUiBqX5NhQCptQxQRECQ6",
  "key36": "3yPeABMf2BNVGBwAnNjpfEPV5BScZqJXqrBkQF6KakLyaaXCWZTe3My5ZneDGso12WkBJ5LGqErCKdCq6nH3iGKe"
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
