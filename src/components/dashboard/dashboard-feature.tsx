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
    "5gvQL2Uz7VLGrNmS5TJxjFJC8FRqGG891nA3Wv7R9vCHd3JKM7zChCCAGq6bfFh6WuWd9sLDyj1s4mbVU8jQouUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oXk3h8Lj15vxQ2RVCPZc3mYAvV5a4pcRbzxKvL6oeMPJn5AG4yQRUG9KxXQmcxeJEZP7DeAe8dCzJzR858QL1z",
  "key1": "5QkGuFSUkJhP5KQf8FTPTfbyeSaxX9qhwXM8P7tHK2wEhUaBuf2D2hDZsrMscerByXursGrUB2rjWj3yv7kX1x1c",
  "key2": "4M4bnos2nThxhrt69YryPSZw56fKNyPVcH9ENnaxq4aYaa3X3ePJLMpzQtDQZng6qS9XwpG5tnMfgHKaJ6qg9re7",
  "key3": "3UnbsKqQ1Xj8e9yw6CYXhCordrefxohfPCm9Bpc6HpMGQepHMJokiDZteETAJURjvN7xTWj7P68nHUMQXASUps5K",
  "key4": "63cAojRfYLvAFzpzAaV6RM6Lujg8TnXnrTTHPzVjRL3MaZFkv6eBQzczdLJf1bRVFmPUCW5roQ6FEgP3bm37jy9N",
  "key5": "38khw3VdQXsCiZ1WMPsvGg5PnipngP88y1oZBwg7B1zgyjRZ8WAVLVZf2ZeKkF9tFCshUhqeoY7hpNboYKvxRSVa",
  "key6": "4kJvNZb7LMcRpJ9nsk7SpF6HnnDszScdnsomCR36FBhFuGd7Yd39DvHRTfUA2RmQijteFZQFAthwW4Um79khtzqZ",
  "key7": "5poEqDRdawKNTZugfdcGKbY9bCNTKMoYfmUcpVc4unPMunsusU2MZnBJUHdWjtTAbGiy95LMbQAtqGakRawaUTxa",
  "key8": "5v2mE8QNtZM3mqvaRYQAdfVwKVZw1GzDo2oJYMnt25sbWyRC5qH5MVK7LxBoVxVf9YuF1jTWY1eW7Ec2brKDKqwh",
  "key9": "2ER54Y7WRY3RxyEMi8acA6yNxmJjdMPQJ7t6AmgGCQ115MsuGCBRsaJxZsaqe7KiqFhus8sfDjVjhDSmx4urSZS6",
  "key10": "5QpKQPMKs8HnS9ch3jGtzvWMPcFbEuVsGnSVRVZ27vaX19fCtX32PQTWZi3fUC5JSjvun6zDrgRsuhYqK9SaDc6P",
  "key11": "QYpFDN7BkxAmdGHg7frprbcbMUSmgA4MXoTDD2CsiF1SuEGqyXQqDsZQnnNwf5hShMJTDbDkpo5VhhjnPPQkj6Q",
  "key12": "2cZ7WWb8AhwhhvnHFSjibU91WmeRjiB3ds6u9Rxvbf4U2kUCzS87cKDYzobo8Ro6ntz6x3vnuYcfHSuKiDPYhyTz",
  "key13": "4icboEDPFeHVrXZ73TenyuvWRbR2eRMU7ndpd4hSsQGbaiQJwqXUR8bBfvJGTTb3mAhR97BBYVtjqA3NjD2fKdQ5",
  "key14": "687eSkfoSNjqkYZJ5fgVpJMTUUVcjAdgrZp1EUr3A9LR3zDCv4pARhdiGpFTDbSFDs52198UtVsGHizK5ysL2Bh",
  "key15": "2xgNxoKEs5XfKC4zYkr8Y3mN8cY8SuM4VSiwBhvC5fFEHtmP6JYNPXKGKNiKgsgpvDPra21sYKK3yDJZKx9rVBxt",
  "key16": "4jSUiDGps4VWou9hEMJfvmfqPtM4Q5tkVuqHPiVCHy97aYgzbs6eEtQCFHFodiviz4GMuGCJZmqHWX1a9hhtNZ8b",
  "key17": "5qEmzQxtmTtvKHBeLEeQANgJjipMqgAds3A2ktCRHCCpUNVU2V3QSn6ZcE99ty4YEZmyU3qAjgp7VQCNciR6tFKL",
  "key18": "52fk36oP51fGzDWAwajKrF9RgSRHMSvVZSCRsDJqJGJ49WtbxY7oL2ZWdcZ2bQMhtsQfb34nhkGUvG1DbcDqP6YD",
  "key19": "3tWp7nqZSY6GWqKcvjvbWr9wpj1AKFzZoPmDddZb4rG8fAjg71veootdLNR7sV2BcgKVYgTbik4MfjoEoYGJKLot",
  "key20": "2rGo85FURcy9dfqjiSB6kVLt3TVZQ4Khb1aK1k5TNioRwv8rXkc3fCWAHZoqXXJBcTAnhmhDcnj3Y7Fu3K7qrcur",
  "key21": "AVFMz7KaNsDJhWjR3cG6MkYYujiPqgrFdMxzJLv9JN5gf1SWzQpnVUryVV5vSiAzZ752ezKvEUaZSHGKaU7ovuT",
  "key22": "4soeTFtM5kLD4eeDfKdTzzeYNdspzep5yDf1VaYzjihJdbJD1fVkyhNUM1jo6yLEk4Lze4oUzXbQ4YatSGLBZoK2",
  "key23": "5fBMF59t5ddE7hiknzML1z77bGzmqceB2TfophcJh831aUeS5kCHFu6VrW2QZQ53HsC5AD2GSGpM8h7FtByRjhNy",
  "key24": "4A3qLTREP2oz4qbPx49hDNVWm7EaSFqvird7unABWV2YDcnNFSyHdMjzaaosnYDddub5N7VDHYkY3cXf4SpMhyw4",
  "key25": "2cMJwaeusqxfw7T88W8gmvhkSwdw4bgibqdAKDggDWjatL8gWR6Nfdh4G8Z4U7W5PE3iQgyZuzaL2BAmWXCEWUuD",
  "key26": "zEK9Dhe8Gjd7pVPu9sLYmN3pWaQBnT5R871fLi7PYGbyNVvcEuiZUMEW2UCgpNZJ9uQ346sw9dXVY9fkHTeBoNV",
  "key27": "5rAUgtNu2GX7Jvmm33RAAc84phFE2RzZidY5PS5grVyRkebSigZmadoacadvSivc7b8yuj7qnn2HFgeZbxkJpZRX",
  "key28": "6Ck5BXarZxzA7KUveGiBvHhAqbHyMNSdBb5HRh2uGiKzCXpU3DkgFqSmK7r4DAGX2vXJVBkYUDMAqhwtYvtvuvJ",
  "key29": "468Yyi6TrUSQPD9LXWM8EUQjPeWaQmNeEWi5duKpTDQug9d7HWN1BmXWYbgc4n26mD2DwSLQ8tRfSWeW6pouDE6p",
  "key30": "27T1b5S2Fv2nt6Hhp6v8DzHn5EfTwu8sbkKywa2B1EyeJLQVVBS2uauLjj82LQsaQMZYoffjkMUdtqYKCqdFgm5k",
  "key31": "3ukLn9EEVMWgMb1P4Yhdcu2NQ4wRZmLzrVsVnWdsL9Enu6F6Qq8HiCek97b3rVqvTgVmtWMzjuyUmupzav8p4mUU",
  "key32": "5bwtNfb1994SpywhKn7d1q58ths58BSj1f79aEy1QUg3ZPvGc5dDyoWGV9v5LJr49mJz5p1NBCLj24XEsujiPuha",
  "key33": "KEksMYHFdhuHCQHEhKAX27kMR1un3NeHWK41NGy4VJTv4cWrZh1UC1YQWcH2P1JmrcQrwrGFbqVhuF5XuuGyYrK",
  "key34": "Cq7jDBQyEDDbz6xVZY5q9y2hWm975yAKRkMi8akF5dY7KJvGTV2CDwN4UnaBzBVC9FG6srNyU5ZsZ2nEQZkJcuQ",
  "key35": "31716befJkALcFKjszhX5YFzjb3hD6JxBcuu1Nu8chEH7kQHu57PdiB6WZLAQA59sEdGVwVM5VPT52rFxFCaX1u7",
  "key36": "29N8zpk7wLBtHLtHvHJyEjnfFZEZJwe1CWWFTP439hPqDdXzbrsB4Txs39317DBkgYEyFWgkHxYpQQRaWuy7LkuS",
  "key37": "3GaRDgkXpsg8r8h92ZxwXxx44cADKEHuxXa5Ec6Y85m8aA8qnAcWgc11UosLt5EH1SgNa7xStnjkRmWeXDS7jDxR",
  "key38": "3KgUB4X8tgfzchzZKxRa4ouDXYk4MTAFnm6WrKSSGFhc3dZPQy4UGApoZ6BasUnASnXZD31dsEUKDYQn3SPJSYTa",
  "key39": "38bBv2V24Q4HQKN6YwqVXxdMiocuYyzVykLDJgxcd7MrD1uQLRxDB1HL7Tc7spjVcxKhkHxSamXeEYswoMuvgka4",
  "key40": "2DZTyQrqgSUxgYHqdUxyfPE9dGfC7JdH1tPnjAj6aNSMj9qJRW8yACNCNvVx5qLrrmBk1LQKsRLkxRZN7s1aJ5QF",
  "key41": "49TS6sPFnRXV7jw7bqCmFgV8Dy9DQ2jebTvw9SSvsASsivdqdcYHarDV8uqKnPr6vz5uthm5PwqKEpHxaVvDEMyh",
  "key42": "T4zq6oEYKUfnAZbut4igLQC1hXiNHziCNTWo6sX4pbgHBSbwqXezjTaQt8TMpADPjUxAbwin2C6koVNkQEH4CHw",
  "key43": "31cfBEjk7JPHAF3V4FN9Cn5YvzcRGSXHSYfhyGtCvBHeDDxPMyZRz66e1pZiUbc4p2vhr2rj8eCp9ULMsTxHyfCy",
  "key44": "xfLtbDar2jrWroU8vrujCvVGhtTrGa3iCcdQ4yfxj3HqzK7JRuWEois6GHxgWojTYVHQAykgw65hEbwBn2UntrL"
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
