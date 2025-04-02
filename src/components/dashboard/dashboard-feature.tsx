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
    "5L5iWQdaFXAStLkfTX1HAd1V6XPySYxYkmfioHhBJfV4RRp2maGNs3HYMQeS2UdvZ1PTnQdUNZfiZh83175VgDD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66DFfCGC1qFJqDBrgp8L4jFypULvvkAuBfvTn8M8nvQ43BT4NF3p5Tq6m5bk3CLXsMooGppFmUxPbqibxF3X42Nw",
  "key1": "p7qcuMqBHnjugHLj9swKuHEdxsS24S9p57KQJEQWEUd4yR3Tgs5JD2Z1cSTR9eoze6GBg8EHL7hy665yPiwDUFj",
  "key2": "57YsrQgVA1K9AQJGSLkvFoYpe51D6dENPd8KQ4Vj9M2WKPYKxDuQifRgscZG3bJ67My5vr5RxWdNHHuNocsTU9uc",
  "key3": "xWkaz7YhxJpRsYqdc1bABLiViiPuEcoBc1vrtbRQJ2yNr5ULgrnwD3n5as2NtZXHPgLj7gpjbemWdq33hqhsBga",
  "key4": "3eXxLCYX7tHZUxuzny2REU33Tidn9tb7SSNPyszYZ76YjZGgJ5P5c3Qxj9ji33vGgE8a5Minx3VA1dx53twYb2Xr",
  "key5": "54YfwNJ9dfY5qUGAies9M1X7XS6yyaqpWDptAbB9aJXzDCYcm24yvsUqanFziG1Jgpi6koQFpTJ7X8SRtkkyim8v",
  "key6": "2bFrc6x8w9vr1u7QemnNGkm4bMLGJkZu3szvPMBSMESqFQJTPMuHdYrVtradZhKgrXBqq1gPoqqchJ9AqQWMPzGu",
  "key7": "om4YhLR337UDgxcVg55mA2jjmP6LH3xncNqJCk91Gsgmv4w1sDqEdP7YhXjdpPfKuZ57saemE3zYFsuYV7DkXrw",
  "key8": "36kJez8MDerkszSfYLs3XJDR6eMTsFt276fR22QgpM6Uzh2o1niToRk7kSCagob5Wx12SbPaD2kZs49BuVCgyzkp",
  "key9": "3YjJKXxWptMYCsXTs5zPegEjwZ5fxXyDgSBvgHt1tpH69tiE2o4u1pn4oq8ASGq9y3dD4co7a7oJTwfQ4U3Ejav1",
  "key10": "4uZyXgtZ4B6LnXWbLMcbonsscDjxxkNFS8Vzom3BMpBQvFGQoPQqnitZMCkmcmHFKbFVbL7gLZ6axhxZigkN3VAf",
  "key11": "2CdAycmDv4jFRxw9RfhSS8FPaSaoTpi5ygH3XM9TP6r28cMpKMKsAkUkat5338csYRpY4oskggpCLtjiswNfV1KT",
  "key12": "R5C3rCp4gt2YEAg7qwcURgmqaJoddVcd47fucyFZsS3Moz5hdTeQMv1BhjVnVtaMzbLcXNJLfL7Jn6jQ2jPjo55",
  "key13": "2ksVA1HobsuopFNCigYZ9t3zVohND4A1XzCip2oN9a4Lbr75uuB4G8v1LVPS59YtUgSKDGAxsc9AYegPu54ifcrQ",
  "key14": "4o6k9wbqaWwHdWrpoLZUGW6tPChNzaSaeHH44MuDkyuVXdEdZVftQQ6qvibhNCkBADYHUK9uAJsvQSb1C2kMgM7J",
  "key15": "ZrscqKeurx9H9yEpPsvz85UanVp4k3SPS2mdkURQMbonKho4dC1QGAng2bFDiP3cJzejtRRnsvud5LHY1NM8NdA",
  "key16": "3QK4qRVXeLpA3XcG79HjH1nQGrrMpGpwQkWorczzphJz5yHxE4JmXYwhmw6AwhmUAGbLjMnxUpMDqVn2jWhyrb68",
  "key17": "TBAUEzucybY4Q5pzxLMY1TjrUUnfpZkpqXWV7FXpspAdmroHFHXqJNszmQzE5ozmazRiSjxuXdAdU9Q7DD7v8iG",
  "key18": "t7bku7gjq4j6nZDSpg4XtaAgvhGhB86hGSqPkWf9SzMxMtADBHGDVzCya44LjSciea2vikx6rTHeKjnQ5UbuLjd",
  "key19": "cC1FUQvDUzqmEKhKoEDLcfpaQYqbwqwhDgS8CRYgTHsZufncS1poBXH9hb96YWhQTe1ZCcZAUAiS84SPqHL74Ki",
  "key20": "2LDih5z8oWwMQHRx9JQEcgETkHJbWo5fhe4o1tcNFiKpgLzFhtb1MEPfTAwMPCqFnAPtWJL71GcuBNbT4Br7LfBm",
  "key21": "2KSyirGkoGE7ptk5bHkQrFq2C4FMmgdiZr5YTJEZKkPjeG71W9o1S1bDjMSeyUDASD52NR5kKpkx1RQR7HSbmWWC",
  "key22": "4otPwLqPydDdzLNMqkJTJU7GCTTFwAqJn5bp5o45jReUjqJonZvVbwYKTf9bi9mSHjsMbVkoSmUz3H6aVgZKEag8",
  "key23": "BRAxEQafGmFAF8r3DtzkBAa7G97eXcPGPVyQmU8XzfiEiVRuG7LqZPabcsZPcoRpPW4TEi9FGBxThdyNvZTXP53",
  "key24": "44kHbHaUZo53VQa6BSN3gumkF5o6tJRV6d3ZwLdAQxJdDUPqRZTHBVFDj3nmZmzZnhpQLBfEAKRhw2FAMB6GPoeB",
  "key25": "4hxtJC7j5SXJu3KPyBxuNhSmSUaSxAZ4vHUYS3SgpYQzhkmu4mV4HgJxkqPAfXsZxPYz1Gf8bZvVLkZ7p3Ge2KR1"
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
