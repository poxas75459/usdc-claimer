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
    "3FUi8jY9eb9zTTPBxYpV6AKAr86Ra12sN8xjY124wxpBdfwpNxg9RsnLxyCE9Yav9voZaMySKu8iLSC1EbQGm4C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r2UqGEWCBZaDcPbKwobqUJLWN6SyK8tR3g3eJt4QAGrSFH6NFv3YCJQ7Z4SDppSEieFJLqqs3HXJDiorVtGttbN",
  "key1": "2r78TW9tCJNU98Rpnm7nVsvUg34UQjGintn2LctgAkD4pFH7vqm7ejRVcVtZuMWnYkpYNTpX611tjaYoeRDZhWMU",
  "key2": "5YY56jyQvWAVYdhRpgjf3C38gKHc7fNk2VCibUASD2BGdEAerUwfmnVxqJqV65j9kXssaKMvZz3NsS2a2iWDtmbs",
  "key3": "46vzhMpZjmeP6vwDAH3x2zUyQdYawDxrKij1Ff65vsdWUmVbVDVc2vwRcKeGwsyvTVFMUgpTZB57bSKHdLyqXH1C",
  "key4": "5WvuQUqSWqGuP8Mze1chbs4nw4LHRDEeq4UiJkAt5XXyVEu63CYA9YEoYHsqUutrSbuPE7neYw4UMTqAHN3dD4ao",
  "key5": "2WTFjPSf3dZVmrCQh6zs32fGcmc5JTuM7zt7cnT9y5XwYty4ZBNjS2KommNoES3VEbUMYkL6dyUcta4RTBda4uwP",
  "key6": "5SMKpvWPzwvid3AcEqdRFzsUeYLiyucvvoKbiK2uRVho9z84DBDKePjPf51sqFZ1sRWTEsxDfdtP1mjob6ZQg7H5",
  "key7": "5Zac28BwkdNiBJtryqcbcH8LGJVg5jh46ue2n5ZA85frmRq3H9brhT5pSLBnmUrqePxVosMGzGgcPcGXMo2zhkDH",
  "key8": "NeYNNKnCaKBfUUN7G26iKFAuR54BcvVHE7jNG5mwCGwYrEQvWFDUvxRt3Lgt41wDhw1Kmi1Ze3V2PubQVQe8KCq",
  "key9": "mz7fiRGTqPatDa49SqofBDYNhk3Y5iL7rwc71iyz9mQRPoEuJvzMUqUTRFY8tD6CCxsGwNfdytbr35ZqTMY2G9J",
  "key10": "3KTwLTv1oX4q7yEmyLpisKrA3D928ka1Kcc6FArbUP5XGKq3o4AT5p2VfYUbnsKgXPeH1Bt4wcR1FXtsZzGPxMHV",
  "key11": "3PXXuU34YzRpJhgk8K6rTbEJ9nEUPrDGoEryMXgkvgaqJQaAUj216sSgvXpZ1sxp33SfsEHA9gwHppPJv44uz5Eu",
  "key12": "4H26ULiA1n7zsAQFZXo2G3ERexH1Wz8v1Sv5sgdBtGmdYbYtXkKxje2c5n8NkgMKL9jznAgthhqQRozQdWjmxu8d",
  "key13": "3vQo5XLw8bNDwe2jZoh1xmnS9tQMKNJkPiS6jrXbxncB7YbQT9wJQh3BAwaZMNpvC5aLky4stTcBhoaC4PDSE5QG",
  "key14": "LLJ35mBZXY8pVwTuvbgFcvqFU2wTJhyqVD37tjFT8UFC5VoVRER1Utou7bP5r8W5M2pxRpAjAovUnPNWevwz8mC",
  "key15": "WDu4VXdnkjdcnVPpTS4njKsfgfWBQyFBTA4eAH2Rqz9oknoytAUdTE2ShgAxw6n4EVainvLJgXAfaBEpCA6XiNs",
  "key16": "4fW9GXm3k57WGR2FmJQ5GGRgK98LgdnPHqSjwCnAfseayhYXqQSczM8MJsSWqQ6T79UfwaLTXtYX2Ei8qHKvqGvq",
  "key17": "4biqLWaMtCPMn8uy6LEianLei5ExN6rVTw1v68pTRvEvNiWZjbYEkVJJqBQuFwHJWHjvxnVU7AUYaf1DG4oimQ65",
  "key18": "4Djd5UpCqffUhbVgyTFkeSJRp4AyYaWUEbSxYcnrJAXdP3uT3Z5WcWVwqQJd1sMyGLkY6d331uXqKAsJ68tMFvKi",
  "key19": "5ev8yzuSgGnbAsCiYT6ysjcsz2nZGaAi3shsGWeVktUo3B6DPAHoQHDGRnfuCo6a2qgzPxrPfZCA9BKcNgcqWBNs",
  "key20": "3gez9F7eN1Ty9fgx1h1v7UesvdK4pSmyNEZt954HQh16uQwcwWLoXcJKoa9hCcsDyimmCSpthrCKmZVoyG1ZFDFp",
  "key21": "2rjxvJwigK1y51tC4HUN56cx9aEoj3xhtcCPJmrJyCiAqehPshWSoyxU24nKp3Hnm4TjGoagtVMithnYdmz9TFGX",
  "key22": "SV4TCkLgw3ebc2NKWZE6t82DdMzJjdm21yLWbKnHCPRgm2zpMBqsKenqQjfzKuakdFeeF2KiMdVUYZoUpd1CVWV",
  "key23": "4vfM6J3ETrrruNNtBijZ8E3D4DPTrgVePX6kcZ2p6SriZScH198yaSfv7CLJes5UPrK9KqGNqTvJcCXZ2qmTUU2i",
  "key24": "4U1CGS3aYBALQs63fWs7bk7PFAGaCYSCfJZwQ4TKmCKQMhjkoZk7Q9qL4K4LPCNvvP9YmyqbUFy9xco7emF18nfX",
  "key25": "3f4x3WJu96dmw9eEzx3tpoR3cWkfbCq21LUMUKfJgEVJDQ2t4dqikUAsc954SQ4uQf8L4b9AjwdgyVaFkhiHe7MG",
  "key26": "8DR8CFMqsQpommcHiMDdL622un4h2cDJ4bXyTW13h2LhpNnN72znDNBptvJskwz36ZfjNZYRbY9p8jPeF63eFtE",
  "key27": "3iRhvU9WCaieenibTSqZToxrHBeSV4GS7eyydpdKpqypGyTjpVc4g7iM4pCx4ct2PUmcVZTVYGEoJ1uahKYe7TqG",
  "key28": "7arN67kYWRxhYzWqGTzgDZosL3XivRrD8rWsyyVsFY5ed7TBZGs7Na6CFbkwoVqGymiZqs311jz1hYkgxhz4XPk",
  "key29": "5ZdSdnsHWSePavqZD9Jv8y4AWT5zn29eEn6aTRDVqCJtU5jxGPfPJH19YvmRJVZohkmh9JBS78KX6LLp8RBtBPw2",
  "key30": "2hEmWFQVMzPPyPo1zxQk1qVbjbSq61LWivDzTFueWHucyBPTVXNHwg27o6Sqi3WUKUrUfXoUh2QRwHG3s9zCEuKv",
  "key31": "36B79ASaePWsiCVrxKFVpBAdJ71vGstNt7a5mppCMR8Fu5nRMX71PHodwRH1LtK9eC3LkpzJrsWQyPPAr4cMNLrV",
  "key32": "5d5MSh936tziTpfuoXdQkdqaKStXWu8LtwM7gXod2wY3k8vJgu3WBXpCXf5MHCX8DvY5vh8Km59UgYhYnUKxG4LN",
  "key33": "2BcKkgyPth1fRKrW1uJbFUN8AKsrwaiRang4E9QqtLdsnGx1rv8hX29zzaXSw7ouGi8KDDV4fyvtvB4iWCYSaLXP",
  "key34": "3a2CEEjefhgyUS1bHAL7XHQuDBQPeKU3yo9u296Dc9ETpYL9foPqAd8eBhVEuMpdGgbBZqqhn2yurVciSDquN5CE"
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
