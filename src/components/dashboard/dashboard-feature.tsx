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
    "4oYyhQtATvvKTG5E36kgoTm17K8G8FKiG6qNZXKgygm9A9Sh7k2cQf9yXsDDCSzNGwcXEceySLmiJqPppxWH6pbu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XYG4hg65nCRuMREE2CkU6sj1J27NoPStYbq5Aw6r2DJm5rkorx4Udd2iaqhEZQnF39LejvET5AeLTqPeKGTbz4M",
  "key1": "62CZEw31ZKgRXJg4LMwTqMebvgCmEMZiB8xoeUuLXpfxVZ1W9RYRUUEsrrF9LMsiU6REkm2LAvxUQBBzg9HdTJJD",
  "key2": "5DWU9Pueu7xnvRPP2vdtWLqJqr225CBWTi24LoixuUNxNx8iTtW1w2egNAYqs6H7jd7edy1wSkqb55UWnyEbrfDU",
  "key3": "3mbdpkmkRXVXzrU9saZA8fJrfKkDSXcax8xDtKBGXfRS86bqebDHTa5EGuSk58T9aRiWrvNYrWZh8s5Gi6qPANnZ",
  "key4": "kVNm3LVsY9ESGntKJkhjY2NDqMQQg7jH1NdUhrZRBejbWHHePZYiaC57CbbrZHJN3bgGfazF5cxuAyrwtjzeWmN",
  "key5": "wh4SHt7EMyBb6q9tJtvkEqrxPrG7W4sD5X9oz6BU338iEfL88oj83WHY7m27noJH3F8CtrKZrWKd7GNgxQnRPL6",
  "key6": "5xVJzLA2BQb2igxS3LF34kwJHRZBQfQ4qZCz27tznNbJDhuVppwEQn3pUyhU2J6iiVag9beHw89okkwF5u2JDNeT",
  "key7": "3ht7GQogMopRE6n6MsT6aWniX3xtJtSYxjmYQwQCJHS9mCRWMaomYShqHTwQL6omdHFjA1f6wJv9M4Ndro33hypZ",
  "key8": "5a45Cwmvm37meYR73NEP6tincejRDGpV1uo6atGtyqeSYaAgSihzw1oggZk5fsa7tsfdYQhbiX6vsNMAcZMVXEVQ",
  "key9": "4YpkQsJoXmDikmQ8mGrcuwXibBxJLEzQso9fhpTyFdecHsUZ4S1qymTRgcuxUsyVnsebtDET4xw3Ggqg3sztFuV3",
  "key10": "27WxRi8vs58sCijpcoXbSsLNb5zPGbnSgr1rKqwTxpZA88oNhvkyVGTbgGxvjcztyTwfBSZ5P63MLiHXWeUFADA8",
  "key11": "3uJjtErXmFo519n2VjcbKrnvNoTQHUiQtyVmyYzQ8QFZFiGu253hsgf68HBamZpdk8B9ENXkjwmNd8rVzXRHGHdP",
  "key12": "5omZP3GUsYJUtUTS92rD6Zo3LoEsDTCQwJKpwVeVZUqMY7kbkG6ZwK44qLWn6iNcDiRyvW5n9CS6SdnSsf4VaTSv",
  "key13": "48972ajwboZms2ELFmoSX665eXmhhAsGhvyo8RZoSrjm5wPfAUDBxQBcsQs5Mjctmt8qF1MKwqBTAp9XLsygZ1hU",
  "key14": "vbT9RCVooojUnH4GvF5HQFtDMXQSsv7t9jyLo21u7T7pRkaB31TzZQNEjK1kVoUctbc45WVv6BiyzuaJ3vS6Tvn",
  "key15": "3TR184wdXfR4v4Wy23RGREmFJjuGCjAG6BjEMrAZuWCUqpCgwqLFHPqEfCDDWLhKajCyFnG98c3F924fXvUMMCHd",
  "key16": "FAg14jxgwBxdc6ikR2nSK1DSrtLxDWq4tGQhMrgnMPRf7F2Ef7HWVrzTxY4cJpGuZB2g7ZyQtdtuB6EDPjELgFs",
  "key17": "42Z7SbGcH7kZfWm5dcLRWnyHQtg55UfGSAzzt8NqzSLpe9nZHwep9RMuqCWiJkAm2gwHA8oK7tnNHCVnMTfw6V8m",
  "key18": "4dMWtTW8TWCVAPiz4cQ1k7L6ewhwewCDb7UkqJ4XM7F6idC2jBgpApbS6cpfeiTcE9y8KCuYbu15WGWYdRSSXksq",
  "key19": "Pp9WgfSP9N1ZjS3xqiHzjxjzEidMdEEaMt9PhKia1yytUPScXR2YmgeL2rsMAJNPfy4HX15bcZ3dmSN8K5gNGmT",
  "key20": "G1L1MMBmkLJqDvZRq2gPtNvJFcdzfeyaTAUQLST7nbRqQRZZhF82YLAZRKfCfZ33NFp3Cu2nUHszr3hVg3uVjcP",
  "key21": "3wRoJBPZ7AV6osup1YC3ZCV5DcEAm46RsWzdR1peMWxrwXqmS8J8i4t9UjGfm83kvHLtYay3GLuyCxdAbJRMvPA3",
  "key22": "5E15kDb9NCthRsMoTMre389621GN1FzqHKn5WEqp46t2pDSt4s99c54VMejXb6eoxFTh6zJvUmQTyTwTYTVPssVv",
  "key23": "5KEcBYLgmq9cGoS33RrQbatUdQPj8AD5SyChQnPpwCyjM18ighJqR3EHdrxnmiazkxVRhJkpZ7SX8H1tmb7vthbS",
  "key24": "2WVWyg3PtKBs5dCLmsSQYHS1dLddbXEyAbZ95NNeGZq8jkwPhMHVx75ggWrd29LivQwncw36AVKTpDmZxZ9iJLyv",
  "key25": "433N3r99zdw8hYjrPn2sUaPCZXBgbQWaJx8PJDifJBU1WdNyVWfEwsfZ4Sk3Up2p6DVZcFaQ7ocuHkcUyZhPjdLy",
  "key26": "2ZcTMGrG8B1x4oLxnQUNcCYNQdewYWiU3Yw5u8Zos411syRXvFWnh5q66xwtkPvgVuXaHUJoUfB9co8YrF5xHkBF",
  "key27": "5hboXMrsZDpTjZ81YaGdiJuUJ5Uzi45E8SAfMasstHnapUndRwN675GnhvxcFhhy2hpLFNRZH714mHU7gXaTiga8",
  "key28": "37adKBuzb5E8dN7NLqZgRY6CcWHBtkNCtuKtGkY3DCkegHjH38AfXGDfFWWZGq7Dbpy6YJ62DKCCnz9LHQ8Q2vSx",
  "key29": "4N6xGWeysBULKaZiQWLEUCDBiPZ6o3wXkyzp82opY5QqkHk7hrC6aoZHHyPSNyN5Mdn9UX2NqJLr9zXhWvtyaA2z",
  "key30": "2h31xoPtThHKUfYTJTA5AaxA5vZuEBj27hkmFR7eZawCyWtpA2VKqUPk1TGD8ChMfwyH1JekDmVMrTaF1TyFDErx",
  "key31": "R8qDfWyB293Z6SFUPcQi9JrshSCcgRBWxSppgRKTguaHphZ6HLVA6WTFB8a8Mi27hnddqT7yGeiEQDj5Gvu8Kmc",
  "key32": "VCBuvHej1g8DarvE5Nu12yrhtVJ5NeaANmZRudfak1vWf3rZh3KJykjv6i2uQ3BezmT88jy8AknggtxGYJfFmzv",
  "key33": "2n5MSn6Dtzfjw39HhxyqR8C2f5PWT7qYWUgT9ENL7bYxBwLpKiDHqkKBHEzvri1HSdhp8HFPRXvJLrdmH1XyTuQ5",
  "key34": "4xS8v1s69E59eUCQeKnmxQPPMwNs11CB3xYbfophouWSPHNiQdDAMjzZ77shBqhuPLBokdVZRes3j2gSS5cgyg1X",
  "key35": "4aTprtWzvbMDrVvRoEWVvXP5Yk3UhHtwiSyZMjWjAnmmLuDHGeZgmwaAkxu85kfCfeQhpm8uRRtefevPG374Vjij",
  "key36": "4RDvfRzppQ5H7Lexrh39t4wes9nEvZsW862njWtHV8DoGShCH1WYxSFshUd1mogM5WRXFVLzWpc2fTyKCcwF98VF",
  "key37": "4wYiUY1QDLd4i9ijwJMUAJXijkEBt4spDXW8JLC4oH9cbjvUuUmz3AZZwyThyCcDES8euYfsyVtqQvV3GZZNLMkg"
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
