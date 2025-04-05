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
    "22vWtUu28u9aF4EW8L5tz5esU3KRomDLagk4gHF5MTjNo2zVkUKNwKqAufZJDPANr7aQimCykS9oNthVnSvJ33eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yUtw5nrp98BAvCsEBKFhsgSm3mFE27Hu77Xs1RfZLVeW91MvDMGC2W3yGAL4bA8X4LP3uVBZcPf8p3sCCpYhWm1",
  "key1": "oaiLeiLC5zUcALbH71VSM7smDL8UG2iPCekyFW8u5aifjtED26K6CbCxX4hckuNymjiKNNovNmJ2AZ2f8ue6vks",
  "key2": "5fmLd8repyA8oT8BrTLW2SCL4PEsNgNwt888RDQL1Vp5ymqsfbdXiSqHYryyerqEwDeQf5uFxGefnkfiRrtVyWjj",
  "key3": "2tTzLNGmfmetvUdhUg5E9CykXemZTTUPB1pC44NYnWCYb4zs1fSgxd4h8CFVDn1hXrt9SFKnYB9ms31MQZ1LCgSj",
  "key4": "3o4J5Rv9E9Ki8QNNUfgfCSXX2aqCBHkX2PbqcgVXF7bPiLqZw8fMfmXjZc5uYmns4kyT5MLaW6XRL1DYi1rDG8d1",
  "key5": "2Qdxft7nxUTHVP7G1MG2LKKRCC3W9RPok9W5EfDhU2vh9jjgc1yqMXSbmTuDSdVv11JsCxLJKSQhzCDn4s5kpgqV",
  "key6": "qeo69Y9UkTbNmrP32eGCdGdNKf2RVPhD8VYX8rGP75JgZxKYDNhcLzJqxL7kfwfWsbQb11RoQNgi35fiD2VyVS9",
  "key7": "5SFeCHdFgBHXTPZ12kZLJ4UzAk2BAVxHNJH2nQ5HjGy3zmhmRJKCL7QfoREgrW1EM3D48cCYWunrPjRe2pzcQbRh",
  "key8": "5QUsrgwXDojyGCB2QfJS8zmuTnNbBbM8qjatZHq4yyFbSBdtDAxwisp2F5an2evWEucBiZ3cdex7F4whhwJscHEU",
  "key9": "LX2nsVJs3jP2nNsJ93v929RSS644Dzewa3v167vifwpgDuL1wQHFrmZv4TPQqqp13ZJ1kAqdt4TkGfj5JocvQHB",
  "key10": "2ymqYEwrRnBEFHNo24oBdCo52wRHh1JCuFu5UqEWa82rcaLGae8ALJmTLvyKq7oj2N8vHh7nDyb3eSRZZwYHnpit",
  "key11": "5mFmuTHgZAwLAneb1RwjNY3ptT8W3JPvsdmghBAiW328rnNYgCdynw9rL4VNPoP1iwY75JdeGe9njq5RyoaN1A32",
  "key12": "5wrwTt9Zz7nBmCyiLUVrbckG49SuYnC8Eg6UWwwPdHwVNbyo3BUSjrJ9wqfyTLAgHEo4QbxXxNfwS8BP17qUXsFF",
  "key13": "5kTXSuxe1YGucnkFZwXgPEkrUUesgeWy8oA7VWe875nsSfr1iDsHnjeSifBhuwg5ymSUPcPeGdRjRHAfYLvuRvKf",
  "key14": "2GNbacYQqHrCtY9wYGJ5wirkuYpVuSbuma63QD5G6jC55ShYYAHPqxsMtWKZf5kwrm3x6ktYX3XSLYMRxN6zmV2E",
  "key15": "4iPZ81by3pHKn8neYcBb1FWQstsKf135Wukhm2dV1kdYSS228CaYuUDyRwQ4Yev8zd5p54S5KMX1GsX8oCnLUvvu",
  "key16": "XmcJJh2sgSELNqaARaoEmvvzo98iGFKywhcLdMQPw9nxDpnjcm8F5rLXfYvetLYjCnsXWb6R9BrWUaJmhGfanky",
  "key17": "5VZgPrdYbhEmrbSPRZB5QQ8WFiBgCtQwLTbXwBYXMyWagDAFbE2UvTJGti2BNtuTF6iMJyUQkQpXBjetRRiqmGqQ",
  "key18": "3ypqueNWkoe5hggxeVBuc6jqmytqJjzhvEEnwV9i4pJCqo1GaATytwdwMrK4W5gVsPwiVobe6CQX7GmtScuWnhEB",
  "key19": "3oPq7yGvCZ7Ykiqj8bJ1MkPAJT8p1zXXqNfoZRXKCHgWMdFYzBLZwo3EHBVajVTZmdqXTyfid3Non6RYokxFUawa",
  "key20": "s4F5aqctPgp3QzcekTWZPdLc57BDyiYL8oKb9o3drp3mMjBpT4WaHUyFkrzHtanQgFKFS2CnhoUxYXN5p1TDv65",
  "key21": "49Yqr4Cwwf6wKoqwoisCDCGtmRGESF6SkiAKmSXQQznUrbXFAXW6CAeAEpQKV1KDKUR1eizDhXkjmUoZ6TmJQQTv",
  "key22": "5CrhPBhHLB4iMVBreDc4Tsa6WaeboBz6hrB5PJxsZuy67Bq6PUY4R3sdnjRWE3k8ERoxFYU2T3mSSbzBqYbzZbwh",
  "key23": "44SWnoV5uiRz5bSpX8yJV1sUAxwCUvqkLiXkMqok6nkyWZdCnJn4KAjxTHzSwgSSeKR5oUyuvmRCe9HE7SrrcvYK",
  "key24": "62twnm2PSonURupWjTtuyCPRWqNcCbEeGzd6Pa8Xs7ULnB5J5R1j5EQ5j7Qgi2By4pn3fSrEzzBwr7pqkVhBB56g",
  "key25": "QH5PhjbjVbktVW11mfLzym4s9RN24KTiHJ8dZuume7nP4kmJKNYqAD5tkfpSqHu9uoJFCevWA86FXhE85AX5saX",
  "key26": "2dnNRhiGrrRzYbEAUq9nUVtNHcJgQQGRWiUrv2RuWT886pVYxEirvkKqLqjGxWt7jhZTUodCrzgHu6mvPULUUk52",
  "key27": "5cDd925rfBD4bVCPnY4yAHmtmBmYFo4W6CwC2meVZFn5MXvrAgLkiiDN7N32Gaam84eEmLNRVD7hD8gfy7BNV7NL",
  "key28": "5L8yGyhrqwDc2iJi2jwZApNtQh98DCPmy5uHaMGbNTLwAf37sy6R4dChrKYpwRggVj86qRHnDK3DBCWrMMwGrGsD",
  "key29": "5eFgKVntvfrct3R8EprfG4QXN7fwvPXwFndhP87T5ofu1Rydt3oEvdiTH8bCfFG3K27N9i1Afc9NYLqCpkCLjz7E",
  "key30": "4jBnz5tjstxiSfaayhndgN1i73VFrPmPjaGdeYirUQ4NwuckisqEXAJndesvENWbGNNyMCyhYAqEcXLewQgQGtMR"
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
