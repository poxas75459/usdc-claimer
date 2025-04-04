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
    "tgTxrF8i7HCsc9KHUxmJRVQmg4aR4saBxZcoV9sDknNcrhZsipt4fd5nTBWrNgpvCEQBZfixuuhEpPGmWB7mmhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PnLmQjbVcKDmThqVW3XTCYnssKsRWQeoXzCLRoT25JHxKdyCiqyK3KW9CQU9xGJNHjWadSoVRFcoEAbpJi5MJe8",
  "key1": "yC4otzndR8tJiVxgEDnc1ka98ARUyoYkSm4t5Pi4pZMT6Hwv5ALkj6YBvFz8bwSF8dYRnjnpha6Ly6K37TCtmT1",
  "key2": "53zFQLui6Y2fRcZTVR9cW2vuLsMoPbdY1nzNJMRj3F9DGKk7JSAoRqSv9KNgLpKd3hmuYmnbbSHBMz7jrrRaMviU",
  "key3": "aUxCtkjHjKm1bJSTh354JRLPsfH3QMXNAV6hxfESHwai2CXPoCbYFFQZJJ2AJsWSwHaCwpHB8S3DYYCeR96VJhc",
  "key4": "42FqwkxQcbRvGMhGrcpXEHNgjZHP1qrWoQniFomuyTwDzmEr2LsBknkde2huDueadkpt9DFiHXPekAEqUpdQBB4Y",
  "key5": "5nhVnsTu9aW864Gmdtkws6eygAGCavp99MkZ4SW3E8N6nZnVuN6yiSaBZhhNeApNUejEC49vNFHmmGALUJpc3B3",
  "key6": "6VXAn2mpijLdK2inddotDwbYnz18yTxgqEumJpJTYdsRNkz13PZFQMcAMZbhfqqZykxMkYajEZEinmR26Yp4yNF",
  "key7": "4yVNjPMX7ihQmdwZXepNPidsF18rPxm7U8QTEiYqPC6RaffbVhBuoGVDgs2AzAywEYyQxy7DEAMsJxb9jZzFdqjM",
  "key8": "46xEvM2w1zo1oHt3SAxcBLo6cmtXSHrom5Amj4iviXgy7CvDwSnv4788bUYW6FoJPz6EKjWTgsFKNem7LdXnHh1f",
  "key9": "JCFJKVrrSrGDAgpdptiyyRSjWWq1hY1jSBTx4XRiySAsx3tgxaKX2mQtSQezhhBU2cPEpJ9CYRnEoB487FvPe4j",
  "key10": "4sF8jeCAf2bmvchCVThSRN2YADNNber4EeminSWctY68yveC44ASFnL8241NVX8C8hH2bmUHktAAJuT2CWinavCP",
  "key11": "4G8mXVm32PpCHucwVmjRBTp9vbq9zLhZLFF5w2xzsLHVJhhRbRVDaWUVTE4hz8FsK6seGbyABdyxpWj4Sdb35ZLN",
  "key12": "5xYohovMRh6LcDRxBmCqbfkfyQYRoA84GxKWF3GLH3dvRP5YJPrKDvHBP4m8BZ3t54V3XUmRqQs47skTu7dKRye",
  "key13": "2jwdw9t59Kr4p6ANQApZzEtJ3W3529J79yAqpGYNxc61GchmaDKCWPraQDXtXLffwQYzDuNN4L2z11hJL7E1n1jQ",
  "key14": "3N52iJivgpFHwNFk75yhvfHa6ayA7px2zX47Zh8LKeBcrg2n6UBcAMaarTrZH1Fx1QXa2tLs12yYeXtgiBH1p9mA",
  "key15": "5bsWrENMNy7wqGc9FFDMncKyMvbT5e8qV1MAjp3pmTzXLsaXMDKjzCB8GahFj2vh63ecCqL3MDGGGvP7rCbVKbF4",
  "key16": "8R9zXugdHA3Ee3E6yGh1GBwqgLdmrvcTLs7GUMCEPuxPNGQ3JX3XVgCmkHACjGFzQ9oPr3Kvt88X3thyr8qKepo",
  "key17": "31U81oLmUj81gegoSodky4UDmsBmnAfemQhnLtbk3xGgwu3MQhzgCW4rBjmXjUYe5P4JC6wj9zWYeS8smCnLQbMB",
  "key18": "4eQZmZyKo6wV8VCCHjjAxUvR1sVP7BGxWSNdacbkV7xA51zQr9SBAAkn1KN5X3P4akykbjAcFKcirNXjcZi3ARYD",
  "key19": "g2T2THfX2eRxA2ed8Ni7pvkQDdf2gqrsMiW2UZr5HtaEtz9wMrKKSkE9d5gQezkoFjjysdC2yRGPXiaTBnWeXUo",
  "key20": "D74i8wWiBUoxkQvUGY1FRfnxMR8aC6U2Px56nsyAUwtuvVpnfrNodpdT324yyAgp6moY5U44wrMChcror2JJkGH",
  "key21": "2gyC4A9tPAnELTNvXW32K37LR1zcbybg5Wth5HCCVUbMF8YWy9xTaD2uy2JHRGQiYJQ5QAxtq1Uow3XHTmPgieSk",
  "key22": "q9QogfDTa4u9MTSdQoE8GyydxS88y6XS4zHjG9JZznTfFKJg8U4QYgko5hycnxDxSuL8B9RNAzb5viWgENUW9WJ",
  "key23": "xK7Ykfs14L4gJ1JSg9hpzjzNtuA6GvYS28UyoCkromZ8DuvGhWQfY9DyMWd2ewFHHptMiuz57ehMtNcYULx2sTX",
  "key24": "4HfFdDLsUYMi2v8VpDBe97CxG7PAirMRmzpU6GCM3TCeGQHvgQHaRxa74WcJeN4zewgs8X8APDUZcfqd937Gc6hT",
  "key25": "3WNW1yaW16Mobrz6LD1b4SHLzDAfb46Lft3aBuzC47ELXdecA3NaFTHww4JYxZBntNy6hnzB8zS5tzWkw7zXpbHz",
  "key26": "4SRbCamSUenhFFKYobdwVfB2SUsys8g1BZRYEnuMk3RZxSd8Q6JAHjwDUk8VqVFa32iSvXC1ndHS6qrLDaeVnmLZ",
  "key27": "2YBKjCJJ8CGoRfsVExrcLtwH3qZAtRUTxv4uB6TpfNoL8mxiPxMYiaeo25HMbktyDJVsCbCLu4ceFD2dbTRxq9p1",
  "key28": "4N93LycuvBcJbxGDBPuxZaDjXWuDFvL8qkZ42MSsU7sD9tgBcPC21oAPGtdt8RVqZcbh5fCMYRUwJVTwLPCirrUe",
  "key29": "5QCtahH6CwshGm8EGuuedwuE4ViQbn4tGp7sYu8JMjx5q3yaErL7rgAidMRh3dKRZRBbzGiNmVkrZgt5RGdMM2T5",
  "key30": "26jLBsPfbsvQHYVB9u5wsGRoquAC79tzvH5JvTtXJbPfC2jDBs928LPwqumofBDcWGUCsRxYh51jVErBiSSKLczW",
  "key31": "3i41VVUdgrjnVmG1ARWUibToZgtcESGCyr2UhhkDzCAb9g8nfga7tgD52L13gMEvyMX75kVKNV9e5gY7y3Qt5gqT",
  "key32": "5WQJhzLnyQLF3u2JS4e9qgYfGcm2kPLCYkjYp31tMjMUteMgXJ2fx9NXvjraXcCLHhfCBkyqyD4pzfvC1cW5n4Fe",
  "key33": "3WwTMXecj4srksdVT8PEJQbBcdMDDbZPQxDAdU8yYep8By5nUhRjTqHujLKAz6YA2mnidGsR31P8cJN83dzvkkYJ",
  "key34": "5z5ZnN3qu8A52FveYqCPR7rJpLGyAWHofXGrS3ain4MmQ67QssFYEHxHW6XKgd3br4EFrZvkRsATmyWwmQnG1H5Y",
  "key35": "2D6C1kN2uUfuPmbZ8DjjN9NurbKUqDuvgktf9vXu6x9vVmoC5aNvtikR83bCXSGUnnweopMbhNhGoRjtD1AoLBLy",
  "key36": "4mHGAH7M8dv19ghY3BP4XHTUGX7qFtR7QrQYprDUGvqyXpz9XuzTTMKv8cqxwe7YQVw9XBFT2cBbEWpUv3X7ECK4",
  "key37": "3pQ2w7MgdTaBECioCEYLyCuHKtavDdyT1q1pqY8wuz8AdGJ4vsRD6HWVTCq7VjwxQ7LZHYxZ44TPHPveNj7frLCf"
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
