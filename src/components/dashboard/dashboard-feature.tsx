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
    "3tnpZoPqS4oLHbFqzCp3pR2xSPxpbyzKgciQxN36QC3mWA7bH3k5GL8pXn3AyJWhhhYUMfiUmFJCsQsUWyTsFA36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iM1Z157oNjfHcdAEX8ian6CsedyuefggKSniH4GZ2vNCNdLtJGjGjXFQPCK5GEixUt57y5GDSjV6r5z984fu4oJ",
  "key1": "RjDcZNPynWHuC9oQPq8oi819AYRTwhctfgtMBt1tLUrASRqn2CgQiuhDPJjeotrAQKD9YAhihXKxeBfxPgwB72V",
  "key2": "2qQJQajpjm7pZL7pi49noGJqWYc7W2rCVYEyL1GLSqF6t6twmMZzNoT6DGgnrzx2v8fjERrhPJ9Gq6kJjZBr18q9",
  "key3": "MGu1utQJhqfquJRXjre4mi8bwQNeSY7UWNp3Zx9uiPwGaSYs4NbC8Xym5AGunnFX8sY2GPzPaCj5qvkA5vM2NJK",
  "key4": "5mrmxnxXUmHdogFNZq8gAH7qrAcF126Y6w48qTe3mjcJG3Tv5BsLuCASuaQDVDbSWM52BVrN7SmUkbQqxDigQso4",
  "key5": "49ryqYadJqXfgzpAkAnDpo8LbdmE7JKWu59QpyNTynveVqb4ZEbvD7893cxNzHY9driw4GwHHrGSAK4CK88114TC",
  "key6": "37GUxWFKF73aHXr62HWbibZd3eTgH5x9idbRW9ewjxBRXa6N33rC8eEBVq387sPLVBQCSFsJdJizP4mEU1XGm9jv",
  "key7": "HpJGd5FA7dtenhz1r2CB5dKCFMuoYhC5vy9PS66rgHz3HBGpbMP5AWUBJvLkxHMhXJ7pro8ooaANwrVH8kdFsrm",
  "key8": "2A4XwpkqUPCsxnvdrRcnHNALv6AHW8BeA91ZmFZtdxHcmi9XVSYx8aKqe8wd64ymbNEYLaxi81pL2pief9grYM1a",
  "key9": "5pEa2vdsQh9EPtinZqLs59iDgmFvgjhqC8brHTwugqtgC3NXarvGR2NGWTWimoELhLAKPwnQa81zdvXDUcTce4Np",
  "key10": "dz1SwkC1vXw5QwHULp3aRQ8UDhit1adRJsQqgcXF6auwh3RuFxCwBLJxZBAdEZHsHzNHftp4qRvbeFw1XRTTMZn",
  "key11": "5hYAwPXXP47dGGYW8SvQeyU2mzsPbsUD16BZDsWSo6ovMYfAKeTbopLkMmwDib3q68bqTwGLopCqha1mffayRuhM",
  "key12": "3JheZ2aVvYmshLKumrAdRqMdcf9QtLBvnmHPAdcExxh7pUJvg7VUeUBbnhcFNRY1zR6WWYrFjVCWkEnFbtt2redP",
  "key13": "ctERwBzvRJLwaRVZ9rnvM3HUpxY6ecVRf3oT1KtDMeQvn8CaEYhdDA2m7sDfm8zeEo8XxLW7QZj7JmEL6VUSo51",
  "key14": "43kCg3CcVmTjWnHCtjCoo1SPpT7Y778ZLecqyZ1nYYYGLWBuV6XkmfYEgFiySPJVL6Yoxvu2S3cas6R8iFAJDwCN",
  "key15": "3MVodPkihz7rcaiFRG1ND96uJXx8ER2EB7vuNFoeVqkfAtXFBuzyE8irwmbn5rJNYRcGWXjSiq6idjUpbkkNKUfC",
  "key16": "3bv6NY6MkDUBLfjbqszf3XoiTzBAhQCkvRqqGRkq46vYm88kqoUyUskNkytHtxKDwBB5h3LZuAU2YVProQEHPZp7",
  "key17": "2b6nn58xCy9NQ2uLrH2vAAWbzJbwEzGUnTkSQ9pBNR6ezAnPaZQqnLmRcYcVKshnPUDKgPmwr6K62qmo9qzQyaXW",
  "key18": "2XqrNDAibpuYayQm1Pb2ukmEJiFxGRPL8PimL1cwcJfGdBMHFcLHqJY6WBwztA2KUCnrKEaroiAom8jyv833jUpg",
  "key19": "2oRmJ1XeFXm1h4XEBBQMkDvY1m4cXbmA5RCd4RgeFqpBMYUkm9NHhcmgLtjyirb1WK4Q9Jmmy5skyLc353yKUtu",
  "key20": "644DgaxS7YFvaRuW4LK15ZkdYNEAXd3pw9NEMDY29Dz5jgp287R6DWcpvptTtdcS5b2DXD1hLewBnqm1GV9K5GjU",
  "key21": "5KmtGfneJfcM6UHTRvhdd1p6bBDxCUUBoUCCXqMPhzZPQXMzvSKfDvgKbiNtK8SWDTa55SCTdfnU7Kb2cqw8dfmv",
  "key22": "NFz6uqhAf62RZt7S8VWdz1tV6Lzsy4tZVKQH9P3CBh4AyhwLzp4JTRcrDahLxmjgeTB1YvKSoGWkXqWF2856jDF",
  "key23": "5mqtPxK2o6isDan3WRyrQfJTi2vsnA7eBcmDSnVSwFipRZRGwLbwpWUn2fL447GGWEqyNFhKBWa5UqTwzYSMVnK7",
  "key24": "5i8TBY58cuQzzEhXVD9jJZi3QZEzNbdnCbQJu8u1jATuTAxJLdqCTyTBS2JUTz9UCht7mqinysD1hPyu14B6N6LY",
  "key25": "4aa3vJ6hjaZCT3QRvFwM97KdYWYU1QrqLjtFJPoZm34rx6d3gH63kU68kKUNMjDDt7eodiamGW3ejy8i1gxXR2mt",
  "key26": "5qa5ywfabjxurfBgm9iK4nkj1bNoiqML3Tj6LnVahCkGUpzcMmk4cHMR7BTynnygkMaZrii8T5deTiweu6ESkyJG",
  "key27": "1T59Bf3uQ5UJynvgBTe2ggs16wrX86PyqByhJN7zNz2SxDbVWGuRr5UVLXVCSMoJBHYJkSvrd4oAXyA75XVs624",
  "key28": "61U5tnaLR9pJnYHpACtcsNtevrrnqii7why5yBfVsY8wAJ2oWxKf2GRNf2uBivpTu5QDytBtQp9HwnkYPEmoVKSQ",
  "key29": "2G8u6nB4EA211viiz5mWg7r3jGYu1ig49KEw8oPnrPG62EVieE4MPNTZgVCGEdJDD4sqAwNn4KPJMqhqvck5wZsp",
  "key30": "61mzL4Voy6gK4DNSDtuxZHgSydTMWKfkJh8e2x5H3qE9Vbz13KZGC1ZPKYyxYee4K2rEBGedAtyZLZGJudPWRcj",
  "key31": "5LgzjnbvDqVFhQoPabC4Rkp47MtjQrpKr8diokcccQzNUtrMm9LAjoNMhK5kh9qRPCieb7kfzKFm5BoSaGaXMeFQ",
  "key32": "3inCLhwgmu1nPu8ArHEyHkuKQRJLZHTWbDZsWUzDA6b6xjgiR6w9wdwTXpdze1seQ2gRDRg3VwAjKYzquAASAjds",
  "key33": "5vPh7F8g95gNW1BcJpUCao2EAZmV6FQ3hEuNbB4G9fEWDRqKos7ucDKHCGxD67N2EfLf3tzkQzjHdmb7kkZH5QQU",
  "key34": "5tjfcTnrTwyYfwny7bf3QmMiYFeKjGqNX5cew7AJQ7o5j7RuTsd9FWv2RJTyTuoM57MbF15ydL8L7NFUj7ZqmPsH",
  "key35": "2oc4M9M8JmrwMHcKThtbgzz5cp5j3wrpiMGATUw9RuDMPtfg4rdtwfg75bQG1WLmnpy1t7q4gDnE1wC9LmSHvWcF"
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
