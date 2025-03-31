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
    "x7LuWiv59MTYNg3YWDwNDf1F5kdaqb3KiRKu9EZkMZV3MBfvJkNgLQj3LzpFNA3dyYNXN4HJwnaUsdyyPjfnVj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rtv1oaXQcQKwibwMmxtGz9m8f7QWdzbQvjyauKW68HuXYTmbNfV1SeMPGPb493Msx3Tm8oVGXjuYuk1jX14GcET",
  "key1": "6wzCir2HcxcSv1BQ8mCTYg3agxqvdzAtUhZR9LWw5VqNKjhEu25ZfqmZ83Bv2S7ayxSuzVjAcUvRpLxdffZzcZu",
  "key2": "3p34nXfW8kP8vdDg1LizEzqHpR8L8LMFX2YSYDH7TaXb6FT3pNHW4LBPGMT8prmuX3mMTm8WGeYJu8t4GmS7hzdL",
  "key3": "3KLgVVuFgtfEiVYc2wFmJZPBTZoDoW57NYkDm4hkUXWUFyUp7PjT2uQGNqEQ4iw2qXGNkTBhV9mjAxEA9KEtnExY",
  "key4": "2ih5xW4U2Q1vCTiVHh7SR8rQsc5AQmT1XFg9tRsAd3dDyWgNSvmKKCdpEgNmutrbRb3wfThyYCmp5BoKv3pihoh5",
  "key5": "qYKBMXyfcJ4u2GXnU5c5DqkKH8MBhw5DqsLyvuog4bkB6Dzsauy4anekgPPbYmA96odfeaCT2BaRq566WtMBhEk",
  "key6": "Ra9S4PBnHLBxjMnsWpb9MeQXTtgqv4iZtdTRnyTK7kCFpCgcBABDKeJ5DW5LhjiZNUSvFxsidYEFsWXVomnRmwZ",
  "key7": "33FXPLnYStHdY3hrkHLAfg67qNxnG4eBchFsTy2cmURacPqtnm4mUmGihBhX8MsD2Lk6Ha52wcNG3AwAa5JyD8yk",
  "key8": "5JbPhjm3ujLnZwWZj8xFpYYbAYpcEygT1o9VinXdEY4649fABDfzrB8YvsY9SuW7HDxc14ZodRotVkegEmBYvfq3",
  "key9": "3qpSguag9QvvF3tG9CxEqKJN4825C4ma6x9SZdTMzmcbQpU2zBA2yAT3mhRMQikEgszLZh7GRoeWLhFKeyXV4ksN",
  "key10": "s59v9kTgkFJZoq1txtGtpFnvvrJvWphxW8nHLSKvHAKq8CRTGejSB5GmW5iGETECNipWgsL7WTq5zK69yYq53C3",
  "key11": "3doHB1CYPFi2VwGi3qC7tJdmzWEp4LxC5nNTGMNyz4wSisJ6166Wipohy68Bpo8RPBDvZRXwcCqCf7xcz5XGX2U4",
  "key12": "42u4K2bMBSjQNxmbSaiYiUaDjPgkYpjd1TEJdRa5EJwoEWDHhgJP2LUDM1CK39P4bpw32vaog34PdVav523rSBUt",
  "key13": "5njF3tzdq7TejBizXTEhDbDL6YyNimfeBaUepetPcht3V5bvWTBXa7HkMcoUGcSJbQ1y5TLKsoYCssuorKpnWuYo",
  "key14": "3YAtmCbMmiFmHe6tD9bQoQSogbk7MrDoamNxX23dFV3rtCjzSkhtrDH67bMmpBowbqgLUeSkcBZqY9Ejtztfg5Tb",
  "key15": "4DKA3CQLurfLwZpmEzgKHbPLxWqvko79SrA3oNN7pjwiD9v9fFxZLNVpo9ubvMJK9gfBmLTywhkJYLEzeUGFFmbo",
  "key16": "UDPArjjshDzuVG7yJZPXYBfCHPtbr5gX5GxCS4WAnQxTpVveLSLiJuzd8e9V9zkrJuhcnhJVQLtziF9WKmWKTmd",
  "key17": "KQPsMxwdw9gw77vCj9imdgA2AYZDqobjNWsgn8iEeKDGHutJ3ngBPpoVrotZqgU3j39JTSbDrcKCe5ff86FG8k3",
  "key18": "wF2SYp7eyhUk5v7gnQ23fQjqCEcfMdebHzW8ucmhyQttEFfdX2g8a8aCGuQZ17vF3zkYx741FxEFBzJUjERFGdX",
  "key19": "37mZ9yHYEowe8VJ1RDYF3bv8afUxPdwBxbV6JyDRK5UUwLf8QaosgydofN9jAygLaSWAonZ18jLW6ZaEr1gNFNi4",
  "key20": "3FrS9GvuogRvEs8k7vL662jMvX9e7utDjr5sr7Myc3vnWnwEaR7n5G5cVfYLR25VJAy1rHiUdhJG8mgC8N4UeSvQ",
  "key21": "CghG7hJpkk9agnDbsLz4oZ3xKDQqcJk8BCJqmkErGKr15bF8hiSFYJdWMdTVTNV4DDK7Fxc91M369qCTnfFGHKm",
  "key22": "4AZWCK37v8jgoVtiygWjKKKG14zPeyZiTwkwEX2oEdLubYaAR2E3yNeV9q4gWmPKgsHX1H13qqakDp81etmT6LB5",
  "key23": "2iVTR6QWURvjk1Tad3hepmJFwP6xYEAb1h6vfjxPiHYHQZu3383FpAVynfxXaoq7g9Vz5jgjjxvuzbWrUHbdjh9k",
  "key24": "2WkDmiUvKpHC3qVrpiWsvXq5ZjB4qJa8tAcWVA7RVii2rrVuktTHCYdLSzA6YRxmyvArzMEpKE9SLSWWyj43Bz1k",
  "key25": "2bbchGUsLQsCXSa5a5XCvtZoLNzmqVKfzUhw3BorgMD4sBRwEbdxaTT4vC4hDza3VxTKfR1zbLBGPFDFBXnw51nm",
  "key26": "g6uZ3MEgvY3F5vUUrLybjW9RuTW1JzFvrWPnBxFJhrrJdzSa73hEufWTNjA5o9qyafYu5PxnupdRFzSW7iXNJkV",
  "key27": "4WCUgtuZoRFZMg7UutVuizqNqT5c4izYSfEfdBAhPFrZb67KAN7yi1ZZEiXpFAkjwECX9LCz4REDboXhp8peKPTS",
  "key28": "4HxwRbTrA8Ddway4DWJJLTSzjoz86fsNvrciDjr64AJfhbBo7nKZ99vGU4dQpEif9VSidDosA1fGQrdMzuqS5ipd",
  "key29": "3SY8q46MmcGzH2mqw4vomBxZXQ9DRiLJiMZzLe5rhnckLVGhWknCUarGzmjQAYAkrbLCyXYYKcFGW7c3pxZ41wcU",
  "key30": "4RNkqCvyTovvnw7ZvpjyXbjofu6mhwRAxvAQc91ufqKabd9so95B4dfVwtNJUD4mykfhX5XtuZF7XtVmRujRG85s",
  "key31": "4q8bHPL599H2fK3Mzti8YLeunBTZiWGUgUwFUR3ingQkn7uhhDqUDaTcnqH1E4848E6e8ACsqhVxqLZGkAwSPgej",
  "key32": "62iH6RseahfLoP8SqZayn2ejzvqLsH6BMCVjKgDCoN3SCAdiiyLv7yFhAx82V4uTRxvjE8RKavmh5sTM86G4r2ZT",
  "key33": "5VmvtrUttvX3pYyBEAmfKLpXETEVqzqv2LsuGV2jUiybC4eAdEzGPQReVUcaB128Hxm3hdMvU388s5m7QeBLM7dn",
  "key34": "44JgRcUxA5kEtkYtkkX6Gjed2Gc9wcfnjXk5uR2rHBW5ZeqaTPCnxZtvbbpGBWicAbWqQxVvhdxY7gRjA3eV4h7w",
  "key35": "5J8sCx78rpoFdzsRWUkFwDkbmgXYpQbMV9JSqhsyPw9RFLgPNPvnLX1uESZxKLCoQ7WpiofcL3v1cKurnim3oKfz",
  "key36": "DzxyfyMyDNeCkTUBvkPCvdrDoJ2J6EEeQZ2EhEkyZxaQXcRsiwVvycpNRiEnS8ENCh8Jr2cfHAHE3vbayLKkPkk",
  "key37": "3zVfQi4LkP6o8yLrBGnSYdXetc5qSTYcvZBRUbkDFttzjSpqdiSbdzcHCUzdqo1CyFxg6FCdFa3ZqtSX3cMq3YfT",
  "key38": "4rXQgNGRX6vpFKAjCwUykytX3hxnxuHWvqdoqw9F7Ed8rP8TG7Krs5xE1LEKe4HPFidrcQPR2sEPYK9hxVHwxPcC",
  "key39": "ymVkaRefv7Vw4iyoi2gMQyzcJiFXKrZoBGoev3ShdzwiUUCHRkCK7a82TEzsT3rQoL9BbAPxrZ6jCeAj7gbqcQx",
  "key40": "h4QuYFubgvaQWCDpsdvYDA5DM8Wa4vaQo5yJ4ppWPoCvs1SWiSsJFCx8FNoaotwDNGMe2ZwdwwU7uSsAUwXbbQ4",
  "key41": "4BHt6FTQEAZBkyzjsyVvScCLRqQzu7qzSJXEJ9DkKByHM4ft4LJRGLf3PdWyfBBs5N12ncYdqCVRd52R55aD4j2z",
  "key42": "BoATbwhoQxeKY4bej4bj51hSWmZVuE11G9a1ZhorfXDxwysqLA5rDyB2yMh4qjjJcV5aVf1UbboKH4aSL7zySZ7",
  "key43": "2r47JTt512iXCeizBgNwuVCSDBuRTqUSTRGzeSPscVtLRjKnGEmtZif6Kkr2cAYP8hmQxDirDq8cUzs2FejgLedj",
  "key44": "4uowJk1vTNQzwokDYdKjNXoEvudH7jDwnea9r7FhXaAm5tava8tBTymLY86hYf9Zb92xnFaWFkRexr9smSHQHVoN",
  "key45": "3kmkjJPgLJucWVBWhjxCiv2EjovddV7VUJnAmKJBYsec48VQMwDneB8sRSM2fXDG3aHvAkPomCsgcoQqdpHhNo4b",
  "key46": "5G4VcYieYCs8qBXwiF1sdWHUfqhmEmCdgatSrLV1Q4vZKf4C5FD2GME1xt3fqSMgzwhnewHMtnGZfCer3UvPVLk2",
  "key47": "MfcwCpzHzALqXTG8eKwS4uSLLiY4w3BrZwS3rpLcq5kUmGbhZUi5wDp94GcFhUnZJc961mRaELcnt8TLQghhoML",
  "key48": "2ZUAaykKR2DNNGY4Fdjg4BpYz8HMmkuDgcEdGRj9WYELSDqC5ya642Np5WmHvHbCN87jaqmPAjtb2hvRqmenVXTa"
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
