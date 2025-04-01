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
    "3N7fWLN8DjxWh11f1z5LQFozG68fcmsg6mBi9nEi4rTQjHzomGHe4vt4J53Y7cbBA9G7qvJLnPSDfMxmGMvtPdoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbD79MUmyqCxgtux74DmPyA5r9KNgUGhegvdNaPEXVvU2NKNag1PXyBFrz4Q97rpQkJav39ntnXqe4erGKLK24n",
  "key1": "3TyNJefKfpRoUZRTeayiUE4nSHwjhbEHpTn82YqdHSaL552FtNz9sXRDDmusgnaTnaF68RFPXTTjoExzRjhvqFcV",
  "key2": "5ViijtJADZ1QDJkmdGrgENt6MZkVd9QVJiszwFnGBGv9CNJQvUvQMXiXbAegb8tnMAqHVH58D3qW9t3i7wbXosw4",
  "key3": "Pz7wk3CxTVQdHecZqkwcxgigBvnwurWjykokZYVWLvjH4eoTBj7p3uWvRkq2R5xnjfCcWJ876Uz83Kr3EfXgk63",
  "key4": "5A5FUaFFNVcd3qtETHisHDze1RvN3AZjGefRQNmo7LWwFLdWKjJf5ddi4A7JdzQXpbXsX5dbfMMESwb9b3uUxiyj",
  "key5": "3doqcsXA3Kb9GQTbZeNvegM6GiGoFsjKV6NpAztcf6Rc8Xz3adL8Wtpvz4XQSW7hGNZshB415PwFBb5ECAfqT7kv",
  "key6": "2pagnZTgMQFMw6xj9dTwWgUtKbpx7Mt3g1M8vwoRTTtbtNDaFTAK5mqa7nNaBRDhaxbGHwGPtEobESMMVAhgzTxn",
  "key7": "2wtib2AL28iAQWscYW43buMQtfC7HGz5V2Qvwr3r7k6WYXy1MeutmPiMRRJrqY6SWivfcNhq9rcQrrWFGeSPs5Gf",
  "key8": "54HtaEHfcKACqvgh9NoM78ovc4ZT4zeG7xxBDh9K7YFA9hR2GDPkteUPCXKNZzeB6tiNBPL82MSkzjG8BHMMU8ZG",
  "key9": "4Fsg5rtDAB9ws7DtekddWWDf4FVkwDQw3faEmcqgSiMX7wK6JmJR1NahNJEk2GATuTYk5oYu3e4w81DdJ2L7p85p",
  "key10": "hgGD5b2wybsbp2PgRAN2Q7h59qJkgu3oFmoQ42q1oqUQgkK1NyuNNRVP2irDmPCtPV3S8LXVQQXooAQxVc2GbsP",
  "key11": "46v9a7nYs4ssP7ahvpegKjvzDhGvB81rGQzZBWWDS3RrQZuToWavp8F6h2qEFDRZDbZm7aWvfsKon5vrngypA4FX",
  "key12": "92qSoB1XTNJYB5Hsak717rF4KDkdXbXkpmmqEtAzqtEGQktSQ246p7bTCnGy5yVp8QqQmmdmKRq5RU11EXc1ckr",
  "key13": "4M4ZenSyrAfrLNNXoY1Ciij42x4qavAqnCf4KspQeuCAGYY79iiGDJHJ55dxoZUbKRgZLDdHcQni3USmaC1Pr9NB",
  "key14": "5jWk8wCGUutGwKeauL2LNLBTcLWf9DJQmKw4VXpKHBCYi9W44xAux3YcuqzMfm7aHwnH1CYBRHH3s8a4KPrJS8z3",
  "key15": "2oXxhXG8CjbXABHRibPzAkK6uFV4rk297riRsekwAT2Ck6pw53ABhNmiR8gv33VYhxySs6StPkXdyaAGikeQsZ2n",
  "key16": "3LBNb4gsfGAFoMworMb355Fwf3hRA6g1aMCi8NypLioJBWMiGiN1G42GNa5kXmik4ZMi7FeuLCoFSYt7FyPVNp2q",
  "key17": "4KnBzKbD8BghSeZxnzmMUuqMK18FMcE5E1nZnZqfFLM7SCb9kJ84SrteqLHK3kniCuhAphgUi9TXp5Hqw8J2vo7q",
  "key18": "4eBof99fj1vFVtojRKsyRDQMqx6iMPRKEgbXkmaHmtskovuNTnQLdTBPgwubM39MCBDj68rZQecBc1VNkSYL9iXw",
  "key19": "21pStEnsU9LiaJpx8fyhA6LMYyctD5jEamTRF5CwViFAF63GyweJzKqyy6cQ4WRs973BoVTS53uNZqYyuepKRJRj",
  "key20": "5SQQWEgsp3g3FRVvXdpkWwrnfV7VTqQwLMZLNtTiwVbqPmGykH2iUkhxDBUpBgHiZhJp75XHFAgQr6i4w9aqgTbU",
  "key21": "5NRt3r97iTmnLeyT3VDNAzE9A6YT65WwPBTXpoMBHhjMSmHojYGkT7DhDCondH7sErjxLZZRp7Z64BX82tHy6svp",
  "key22": "2bKp4eVs6oDkGbjnmi2tqednW3k2pL2iGoxoTmPiHVWRcrUDtGTqvo55z8v8Vj1Qh9ACP6xpazhEDDT7gaXzH495",
  "key23": "yAaAB8H9ZXFLZ6vdrR1JQNZ6v7YHbutCzsVTNjrZAZpjfkJWkffMqpqh4tCvicctnmqAHaDGgRPLJx9aDXXUhZj",
  "key24": "iFqZUgD3nkhVfs7zjZ3F5rmvo1bPoF84M8AX7TEiegR3kAxmMwxv6GvH2SVYk7JHRmaPynXTAxCvMBAkKYxoSSy",
  "key25": "5zZS9mnfpCZE9rrSUt6qzyR9TqugrmjKF93pthJmNup1MnoiWqUrdVnDmZ2PeYhBXiLE4TGnuidVnYtu98NWFeu8",
  "key26": "3HA39zG8KZVZaGk8y5ynkUp3Yfs7JXDCeB32qCgq5GQsbT1QsigRitUVrDMkZ2JAJbNtXiRJ8LskdCmyTDgrX1KF",
  "key27": "yTNr8BVzSsbmxeaTZh6ZthcMFvrF7gUhfLSkoX1Uk1wSknGHhgDPrdYX5FjbpfTYB2xyV9ULLoVAtywCti1exxs",
  "key28": "BwvvQgewfZmJszraCg8JDwVjcgZhZpfXTS4zghrv5HGRd5xv7npwAdsBmMFudEDDdWvSihQtgpmM3HyRxTkyjU5",
  "key29": "3QvS8JXxqzcdDT2mZmiLiua1t6qfhikPnnyjt8MVKUW3TjZhRJx84o76W2gAvevCY514FifRKE3JmEbBSA7kGwFQ",
  "key30": "4gSagqJVwLyuKJsbXA38CAd1ohAtY7HQ6XKyN2gAAc6jDUgNvSzUM4LfCgfXcuTE3t6mBqXEA2P3TUrSgRCD7Vcm",
  "key31": "5agBLoBKaVjk3uUzGEWZeMyKsheB2Kzw2CJYkfyxEc44Lrs13ghTDPQsPfyyAQkkBjDY7eWWUSYcWP2E69SqfHxL"
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
