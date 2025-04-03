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
    "4T42pGRsV1zekqtwskPiZGm6M3dZSLEqTQTBFJRYAxgRtDwn5HUJWMc3B18Eh9fJxVhSCCDbUumigcxr8vmKSnKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ni97fLtEP53ikqqYNDXtxt8UYeTZKxJd3Y73yCB9E9BwdgtD3V74Ah2vFP64Ei5M9fZvojWfQsid7xeo5udLexy",
  "key1": "5xzsEcxVaKMiPVFxeLot2XUChwYEWhbU7jpSq6nzpUV2QWxcHE8fcWN9Vfrp8KZSu4EqtKBRTepypimZ5Z1HAG3V",
  "key2": "2TSBqC1t5p5MYbZZpZ1cL5ryhmDEKTjLTYJmveJNB3EPvVJXEgU21zo7EXyuGgAgtqH7Ttg9SibThjZySZ3y6wco",
  "key3": "okBvFh3qpLriJ1yJAc4gaWP6RWJVcrxb9G5RN3RLEYr4ghXmu6WPDeEM5Yjc8yDXWebQJ9LHr8GcSuEppGfMuu5",
  "key4": "4HNXix3i5MeHNSoETWP8bnasPS8df94YhZ5kx6SFufwNB1Gu5U4BZMjYUtbLdhRNVBdV3WaAfc6LTyRpq5oRLVXB",
  "key5": "4iuGj7wqGwY4wyZKpm55ypXbS4yejzppX4k3xJPkuJNErYNZadK2CKMLuFmxevB2UssJFTraTwL7Dn9vnKNUoJaQ",
  "key6": "3eBEZQ7JaSy8M3GTrQnjpF6tdJsq9L3Q2j25mYbyzz8fTg7ipihsK9RSameSjC4SaJBMD1hdDr7u8cqX8zjMeptM",
  "key7": "2bijseXtoNWw6aw9b5TpjVXg617yKfCF5Kbco634WqUp1jWTgyUpWFzYtNyNxxUrjiWCMKFH8XKrNrJHBcukbFPN",
  "key8": "5SYiLd5PdU2FYbwSNdzK4hQuH1DaD8sPKwxn1op2VBjT6kteZaXfJGLjPuBhrt9K5eokFCZgZUX6uKKqRgG2y1aj",
  "key9": "2EjHU3tBWNZVw4va4NN99DHZiFFMTmPgxy53xTEEsPL9s3eQNSqEruTH232FRgsyLunJaP2xguBSPFpqS9hmhd7c",
  "key10": "2C64Hvm89eyZdsuWo7KrixLNoFcMakfNGc9vsCvfn2c47uDsnky6Hxz1BHT98VshJV2gV1bhYLv3RGuNYDENsxDi",
  "key11": "2RknBqy9j3RunN3eZSTkHTmWj14Q7ivYAgV3scRCay4zM8HJ45YrrFfe2XemoJNd3TxLNt92g7QikFMZ4najVZhe",
  "key12": "3iSbkerJLt5pmzwKw8wLhuKEmkLNyqVkx5ZASNC7MfBLJYGizRHpRUvY83Rfgs23kVDSNqZaPi5L9mKhsJfKnh8L",
  "key13": "q98RycqtRanzJaF7XJBYSi5WLxjqPngdXFsHGpVkQL2dMkv4LUE7nB8QAeTqHWbLcSL9eoEZyvp89GKBUahYNfn",
  "key14": "51UxehuhGjn8HDLWCPugHz65yniJ3rio8hSaJeKRRpLE6Re9NvYc9L5fHE48jwezGxUPczZZViHz6L2ha6b8m2KZ",
  "key15": "4Q7vtbxvES4gxTwQ1EbCuP7D9NFqfkU4twjet4n4Aej7ChcpurTwQyY4WvHzFBuoWnQXijFSxi7nUs1pDaFjTXN",
  "key16": "4f5tjakHuN6x4xSJ1zio2fBaqfEvXerJG7jeAdESXm9NnVozpwjZLf2Cusxhzaixgk4tafvd87LpwEAVQmh9Md9R",
  "key17": "wyXxtXYKUhQPc6wu5W4x1wyYnupHkULYWAr98MXGVFUa8p18sKjDtFQS8k2vX8wPbCLX6C8zR8hff6M1LPBf86c",
  "key18": "ocr6mEHASAwYEqcTeuZvNEmRZSYZZyMtdF6sJnofESUEtkAVrU3n4GpusmMLWmEgeeSdtNqKLSgjKxmiQZrPu1E",
  "key19": "5XiMuQQpcfYvfWLNx8UsU8NFthfX1QH5QUNzxyrRjwGeAiy18BpJvwJCHgeqxHGzmMteUV6i9t8cvW578DSLV5ui",
  "key20": "ap56Gs39d9QRYCcKym3TF1cSxP41kaGv8SvMzVBEfpyCLqMpwN6sVhemjd7D79o4ikFBuGN2MdkUygMLECHnSeT",
  "key21": "sJBBCPF3pahZvqewZ8HA55yecPBPR9PBwaRLHrY6Jt6DdJHXXbgTFXKsUWyRPYCUPAJJQpkbWphf4z6MzUJQW93",
  "key22": "3fEKYyYp1aCuJcJEQ1JgpPgc8mYZyn3GyiyZUjZZ61V8ssB6MnjzzE45K5yyFZLWWBpqQLdTi1oN3oQUpgRXbPh2",
  "key23": "45rwVJCp5twQNx6xNyCeJYZH6zg2ndpawqMEs8fjxzsUaW7486n1habDS9soWqgZqRPSoEeJSCVs2aP2y2YGVp4N",
  "key24": "4TxdpaXZ7qnjuJczKzpHfBSjUSUL9GzLiUmeg87ztnLvj8D8QBB27A12sNzLJy6iUCaALxgAQ4DeUaY8mYrjso7k",
  "key25": "4eUsMiMFePnUz2mTgge3CcnszUUS2t4QEkW3mMKnYcRBUvrHJhukH2j7ftqq8WxWPU8qaTHyVUxv45Lesa7Vd8bz",
  "key26": "5GiMEcJcCsPe45sXuGFjnVp2XCDRAf1Mc77w9f2wZDCWa7NrZ8fsp7j3yAvqqemJno9UsLKnd9bBs5bpcdjK7H2L",
  "key27": "62uGLKR1A3813qXMX4noE3nLsbxPxYwaAxH9oz8MktmqRpTTZeCjMBKV9fjtLXUfHhHd3YBSeQsuY3U1RDZSZDxq",
  "key28": "525d8krnVE3bQJXKbJJ9Vbh4av4bkkpH1EMVwx5y4aMCFRvjtC1AqKspzHmNKpm3ERMnTmy4QJinyy6DZ8WpDaQe",
  "key29": "3Nstt5pJxVYbYzs5hDuYp8P6gqog3Fh6F2qCykscFo1ZhF9tW1ctegRBCPJEXzhFuPDvpyYpc1sDHXm9hpjRJx1",
  "key30": "3diWhr74XosSeD5vsguvDQ8mFN3YHaKwonLV9LGoLakfhbdmSkJWU3wtJuh7VQPmNbXwRjeDyQSPNtFjUqBxgSKa",
  "key31": "5GsD8gZRy4Kau7P15w4bQGYP9GWEwqji2pz8GaQHgHektuyXdn1sYqUYk6JQzhbUe52DiH1ePCoTZkZXhuQVhxmv",
  "key32": "2u9Yoom4pRp3uZC3U69hH8qSzmmSoMo72FMcsnrhygx2Poiw9hUdnoAp9h9vtfGynXUqEYUhQTvRZx6gjWo7Yrt",
  "key33": "5qjn66jXvfKQcG89BcoX7utULY847FBbZRRgBV231gitz4mVUneR1KDkiv3K1VpJx2WM9FoCU5MvxUEw6J4Unnac",
  "key34": "4e8pNoyU7wvepsJoZGLz76uXPmvFwoRhYcsNdQX7e7JZsBabn6pCVKvFv6A1MLqgJv6LveUCEyEMoWXVquEzsmGH",
  "key35": "X29jkMq1yV79JagUTVhgMQ535ZAtb5yyuymHFKv7GSaiRzcE49SUoAq9bFbEujiJEUSKVBnprdmQ1ph6PoQUMfT",
  "key36": "2m5aJ6XMJtPJyHg48pqoJLZVPXNqLhZoxtQAfvf2JLan3rx2HzVpEsPNJRJ1PGLmPYRxnxDyp8NJACRikP7QH2Pp",
  "key37": "WNzKtzpgGiczVdrYriVrvVu5EV8xDPBGtos4Rg2NmsMytZs1m3TURZYcExRnUPCYkU54LWQWuK6io5wrnNS5FoB",
  "key38": "GdJ5t5DDHi8mB3LfYdU2GRsQo6hefdcLH9wpnaxi1GWQGWxHhsCrodPrsVWtLHc8K6rEXXzmA7oBDmVxXsG7Vrr",
  "key39": "1bHzmBhs6i4gTdVBXkvRvz1zHSWnwcNTLvWfmX1C6kTyfXykNk7pXXZ4pVWJ9j3RMu45WPrJzCVssbF8ASpEfdq"
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
