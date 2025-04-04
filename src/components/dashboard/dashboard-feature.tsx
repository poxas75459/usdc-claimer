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
    "w8VbtdfcBPh58NwQdBjhrgATmNsBgZtnCePLanALuARDu9b12rUnd5i2yN3s1T2w1LJKENE8rUg2tn5K3AdouN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mG2EXhCPwoMJi9Dktzurqe7seamAyoSbpiv1s1QCBMy2GzizDJXo1eNovEaBiJdg7qNkL2w6gGYABf7uPY6MHJg",
  "key1": "4SKMnRVYoP6JKrEBfJiamnYxcwC78VCmKdLQfG1TJgCARCNo1Jga36CmNPC1xDW1pjmEYVpzsKxYmNM6BJEa9X2N",
  "key2": "5H1oxbkGgLqTZgGojeX5Ff92AogNNLK8FSzNAwJQdfp1w1Y9857zEZz7G7UPHSA4JQr7kA9vsdLiWCDJuFzyi4W3",
  "key3": "4sAyCmKMntY7QREQzQ6uDJWqXGXzTspB3MaxGf9XoKTVwJow5oBXpLQRRcs1QRGKNR8WP7V6Bb84P95FdwKv6TZ9",
  "key4": "5odZBw8zcsdfSK4ed3ZUKYhHua93h9XPSHfHRhnYnQVRDhQj3Zm7jrxZUTM6h51gijZmWhLa3eqpyegrd3MLPugb",
  "key5": "wgVXCRkuVje7sPtRT18pfQzu71YPci1cGGat76AwV5Bg7cqbDn4fN815Aqh4bdRrS8jcjEW1fVAmVeuwgdy657r",
  "key6": "5gwoW9BZLxFYdGdZ3uDaYSxNvfj4tP27jKmZbg2jY8oBG7yQNG6iANwDLkec9WURx9oLkyJKEwA7wFz9vB2k7Wc4",
  "key7": "2YmmzzDQsR621Rjvwvt5RLFg56Dtsdnf7uU4mowZLYuBk4FcHruLBMtbQbnPHAJah8kZ5kRaaGke9Gtx29RTrvuR",
  "key8": "5dZNtZyq123hStazPGjPxrMc8uZk23sfrXFYkaEdCgdUCzgP7g6LeKAQWBnpwxGiXJQu8DG9qniHLWPuhJnKZk3i",
  "key9": "4rzxTe5obZQ1KA9ULDyUrQT2hCPmQvNrnCm6sqpd14gNQWkJgTfcvjpHqdiX7DzQkw2VFpurEbum1JmNtzxnSuUh",
  "key10": "124PS6cAhUsmQupzgg9GPU4tjC5o2qJviiXpXtfSQKuZj4EZ9qapJN7ZeuQ4Xc69JijKgkt8isaGgjWWnbnVSCfk",
  "key11": "34GAJVCw8VFst9ZBvcSKwr6cuP4c9J92WURibkLHAkGe1HBhanP5MENyKdMMUKV8xudY13rtbFH3PG5Lbbvp3HSv",
  "key12": "4mJTThRouybrtNiR8D9eebknPkJ6nXoWe23rYJWpaLHqUPWhPsURfASv3yk656AGXDSj5YfkGc7bjMSuKTQ5vJwy",
  "key13": "2danFuNJAUsJmy41sdzpZ88XzLM9tRSqZkFZbNebTJWNC4wYVZ9FD5siRHufQTMnTYmsh16k9TENogzJuLRMp4Se",
  "key14": "4xNwy4TPhFAcerQV6sKxqJCCdjaprA4FciS5mrQ134Lc7qNV3b5GasvcrnJSsiNbwKozraZk91AGkiAW7G926x4Y",
  "key15": "5q7aL9vpLTLW6Smw5gjCi6NBjTdJS9vZjDo4erZbpzWNMvcAzNeD84s1PReF13xAsyje5qiNiQwM7GQ5PZKpFGcQ",
  "key16": "2Kcdh5JwVKCYaBwSMPFBCobiKZzJd7hugb3d9SNTVbzsNjPiGhiHiuZxP67EiwHWYxZgfbHg1D345i7z3P3KgypV",
  "key17": "39b9Rkb4Tm7my6JfJgvr1EHgwNCZBWH1wsiBmAGFGhYRTGSMYjS7cAj9THk4ast6LhVsi3wemJMgvoUrSFrE3h7L",
  "key18": "5DFnMrSrQ4NexUfhWetx6sVp9YekwsASNLCVGjWFnwnozQ2zjnrHgzEKGuhTziA5JjvXnjBQA5nzbUCCKNe8J1rx",
  "key19": "4qmiQX57b8Sv6n7UR13bEgiTvWizUougKc9zRH5AtTLEGwvG5ZVsZK6gRYDgYzNP9AzW2iasr6sPjfMb5qLRWK33",
  "key20": "eRYP2iUqY3cXAk5i5JbasvSnAnaPKoY5Ls4U1QnA9sfDBBDUpCpYmXRXKJ3QztdGKrrZVNJ956zBDXN2FwRsDUA",
  "key21": "3cXzFv5jUB9CrogGaCs5yYrxJtLraFs77ksARPrJkypVdGqrgaNU49QD7uizLPQMixypZi7VfQ8SneANQqe82xxU",
  "key22": "4sP14vv7jmF6PhqYk7khp5wXVWGXVzD3c59hqrfMy1CQCR2GywLRN5ornc5fKJPxJiKL7iX4ypkV6ccCmx1c1ttn",
  "key23": "4S54TYJQw5wXcTGkC7jc8P5meGq6a3xSGgentjNuQFeirki9JkDA9yTvPsUFdwKWf6aBdGCA6gTHWWRsnEjf76YW",
  "key24": "RUbMsUCJmXKYqFFZQMzaiU4KCPTdcpRv29YkgmCK5JsACPR6CgLKvdvP9DidrVNdKbqemFETJxen5a8Abs6bckY",
  "key25": "4qnWRJoSudiKUpPmyyA3v1QoiKq14winGZUzUpkrwUSH22688YyiWPS7p8Ly5uyfte23RiuWt94PjX28hmY9upYk",
  "key26": "23i5644tL1tE9wWX2J6VyoiP5Bw48VyCbwgrkndgLkMaH6XeCCYJweJNRohctpJSnUNq1U494Md8PTffnp73Xhwi",
  "key27": "yd2chPjN2TNYaCef8ufzpZkzukaqRDrEpsGs1xbvJxwTbnyqWLbnEHJVuZJjDyP5JD5CbiktPGsfob676P3qjeQ",
  "key28": "2uhGgHQEXumv9qjoiYM5Pu6N4Z3qVx5Yzr6K6vBkh2nMRjqGuLw9VTcnUKdAmXCq3yXtkd4BPLP31j6YheZMzej",
  "key29": "Eho9BrCUnQAk7dEBNDZCn3qT6iDwV8ozkQPNBTSg9AdNrJYwnUQFAYNtzi4RbX2Fc2tJ2vSpxieeyJ4actLjTrT",
  "key30": "5v7DQWa1jN5r6qAxDV7dwQ5ttbNwVsjQYRRN3KVFSwAce8hbLiyatJvZ1suY91o9XLPo9jYN7kqDeGUVmmS5GW9J",
  "key31": "5iEZasQ9TYZBYhErGAwQYmxNByrE8qsTbfCt2iecDtyyVfbUHey6La3Pi6QTKzY9QACPF7wEUFmumwq4JgyHeMCb",
  "key32": "oKzQQhZDoEJx3VNL1TaMsrCsUMQkPosfFA4pXYF9z9kpYc6haRr6an9wiwXT6KP4HSy2MnC2S1U81nodXX3L4FM"
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
