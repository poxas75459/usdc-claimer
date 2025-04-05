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
    "zaY5q9vTi5rchKLoKK9R6D7sEUPBpwz7GSpqBDEbwpntoL7w3LwytDTvkNMeLb83T9nHvJZQqrdvCgKz3F6rpsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qu8QFwKcLmSZpvWtfJwQgX8pWkNxeaH5Ca2R24WCUe3n6TQdsBSm6CUgzkgRQyJ9HjVPQWr8t1iXDWp8SnodXZk",
  "key1": "59APXp1sygoxyEKfypTkPiv62K2SeuRYaLnrcAAtMPJvfd2VW5PUhGGmaBEpvx9gZZMXwpZWkT1dToz17A5bV6PB",
  "key2": "3QNfEDi4PN3ZqfxRzMrrX7Z8ZiEGfFsHsSnN8hmkTtQcGJe4Xn88m8wNWSkWMsFXL7opLREd5DA2xU97LjiM7KzH",
  "key3": "URbXSVXrPvnUUV5ff6jJDPGxVdxrkwq8X9xTWxwNzke5J8w8baH3DrtndE8V5XiXfrKzsbZSfUjzRLUyeS6A8Xe",
  "key4": "3yMK6AgA3hCSgZsKJ4JyfDrU4WBDj6ZPhDabdCEbRLMFzcQH2TgRxpLQ7q2sbtwxsTxjn9Vm74C12omw5CFj2QTT",
  "key5": "2kQbybAzcWZy27Wy7gJnszmP6G8sy6hqm6GJxkuaX53bYJCh5DUHs7tAwopReCxVE7mTv7ak7PU1kyZYLM6SXo7",
  "key6": "aFJ3NVcgbbyTd3adVMFN1phEyqVbteSKpwvTcKG3Y3DvkgEPRX1VywLvocvXJVw9kcUAdsEghUB4Ue7bsaSg884",
  "key7": "q1pta5tpD4j8yyGzYCtwxz7apdvwKZobeWZuhP7dGCjifyvmpG6RUTjUNWGJgMCGKXHgrbs9vhmpBX4DYLFj5ds",
  "key8": "641G4NWVmuYWxGz4G9nRTyrwkmraBuziCkpAMpT9ZdjZsZYQpP2Es4kokxYSdfMauZ9vDT6G3DLjHXztKiaQfLxZ",
  "key9": "4wawu9sUGz7W4P35zRxJe4C8irNzADACRr3p4eDp9UGBvmVBRnoJBbqjFchehUqEJz7iQ9XnRbW549bsscB6UVTZ",
  "key10": "2ajaZ44o9Hzyx7cEdSHzEP7FQ3gLtQNb6ZBJeDUXzQRm6WyvTtaweTe9Hue39U64ywfEyeEKv7EfsTtH6AxaiBTT",
  "key11": "4S1gt3id96Uvf1WNakn4rVX8Dvn9WmQHSALP6hjHmDmikYvRFT19SvCjc6bLHKeSd3V2QfdXYuTTxQKws2EAivam",
  "key12": "fPbC2oeKt9uqtWHv2MQ5t2Zj4YeWXAjzza577gmQD6E89cwcbdMHayx5ANyuiu4Wau3n6uxEK1izYSsanSwYrxD",
  "key13": "2GH6JhyyjVHSmG1MjA8pCNWMZqTRkFFHXLstX4fXwRtRqgFHAVDBXnAeMCPLa1tGiFveZzNn2um7UQyNRqu5zgHX",
  "key14": "4YJzasMoBLtBnGirsRgFFgbnrFfYhhoLRYVuzvMFpVKNPhmKfb8EnRnerFdmfNGnarzSA41P69iKq1Yi4mYjmG88",
  "key15": "n85aGKFGuBnTddEYiPxdhgucJDdgCHQDVynWmcFcbE9M4BZ9rY5gyq38XdESjeZD9CqA6oBhfad513sJ6QmDXDF",
  "key16": "px7jfc5FEvAbSWgkiDQPHA4tcRiCpcYjZgRckHW3G14YrWJ7BLVtZTrNXpkiLBiRjCP1a2y2uUatfc92bmBEx2U",
  "key17": "5NKzVquvG9KF6KUfi5ihfhd9LFoH1dgBKp6ZqWYrZZyStH81gYDmjab9Y7Y6wFkJsoqGjvF52MsFmZgnzW8VyXwD",
  "key18": "3oL6ghnm2GWVDqnHajt6ffhfb9CyTGTzSrHX1DQmxCrC9iF88CMBw4Dit9nZS2jCi89rSsBPvijKJAaA5ykSCCJs",
  "key19": "TLWT2GmV3evGNDmfbnPMgGyrgGCiyYxn7kYyta7prc7ii8n7armQCb5L2aGtHS7Ef62wxMmRmMxs5GWKRkH3kb1",
  "key20": "4W7mxFg3ojQX1GM2pAEonnVs9mEpQdYuxrAcUoBwvnKiCbM3idNBHHLoPvttVmj9fh4uUw3YumP5NypdBTpsU6mc",
  "key21": "3NGKJFvEA65onFbjPy66qu6PdyYcR5cDZk8sge6RFk8vx9Q8xWtB84LDGRm3Q23EtFmoQ6SdG52UAyq6fqhrJgr6",
  "key22": "M7GEeHhsjQLhBNFyv5vQsoKsgjCrnmv8htM5vCRj9Dmc8MeXcMVJbF6enpUyeioWt55ZhXm4UHRPnqFqUAM9J2Q",
  "key23": "3SyxFtitt19MPoY7xwoC2DFraZbZ5zpMR1BZY7EbJSqPPjY7DQRj7C1v6zkZavnrSY4HdgSWbL7CVju3gMRkHfCp",
  "key24": "2VJojRBv3HhgxxZ1rH9hDVx6HirUvBgr7L6dmEor7oQJofjKrpJ1mBVRZTSZ2nATdEQKwTqKz5weXmnPqX9fRLqT",
  "key25": "5oQSu3fbpHpaYPNCAB7FkgvoS7j9uP9AV7dfiZPkd3coH44dsvevoX92JQANnubLhtMf5oDqDTGbTYshebB5i11Y",
  "key26": "rBqbeKQBv4QL19TY8BBdAjYW8156iGYCPw1GTB2SGec2ntdY9giTbAw9NSzvxyV8155ym3e9dSytnFpoiKhK4cc",
  "key27": "nDtCaDFjvqHCuTLv5e2tRoeHqiBbMvDcZ8EHp3GME7MCyCYm8pWiY9i7n2DQnsU1jjBzdeexye6Y3gEjdpWBMbQ",
  "key28": "aRcGFbG2vhMmHBntrAE29xykixNxPfX67VHHinWcA6PG8KXpTb4FWzbz568ibXxLUqZquZoJPCRYgPHRwe6fToq",
  "key29": "649C7yoqWsd5r7S4pMHCMVgE5Gh8za9DHc4mJTVKRbQiMQ4uEqUk68etKWgvPLRB3tUY4dgM6iuzgg35ZdHqBVJe",
  "key30": "5CptmRYLTXWpBmTn4KXGYQ1AWToy9yUzzdZviTECw97oQ33mWZvMSMTnAiUKb8GtckECxzDeCeTjQ5sCx97ZHXpY",
  "key31": "66ejKG1KsGdVWX3qpqsNZbxAi7bQ4AhUoEvcNMRf6zUGsQYabfZE4rYiHaKDb7pqMeU6CK9cuDxwioqCuBTCLDjT",
  "key32": "J3g1cp5LBUQtiSMXUwyKUP582gg1q7JZdsVmcHkN5WCns1FzepD4JCJfVAUEf8yWy2Apd8HTPaR4ERkADzMiLTy",
  "key33": "3XTvcYTW2oH5G3FeLe65F8KCpkt7TH3SXsQYz9dyshBYQAYSW9PGXZRceyTBJWirgaZHVhvDvZpvrWoikukr86eh",
  "key34": "3Zg4Rwctxb5oNyYg1AjQFC2AHWUNdPGtJV6SCykhBBfoExnvzcShrr1f9Pk2tVxoNQ2uM4zGPDPTkD9dCbVghA39",
  "key35": "3T2HLhj3zLBsHhA9Tz1rYEY421AZ9wWouQYSM82MgRBypNp828bqVVkNKyKkA81XioYyMNs4bw8TqtmRNfY4GQjw",
  "key36": "2EAB8EutJRfeKTheLvqjbFYD2vrc3BqfNnaG3Jxxr6mqqEFWL17fhfQai2r2gdaqBr1HC3XLwWb8K2B5XB8orBk5"
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
