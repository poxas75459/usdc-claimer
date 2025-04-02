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
    "2fEfEwhcVjRryajNwQqxZXS2BX3e7mGqjWjBoU4cf7yfsnsLEV1Ck26cHyFL9r17STzT84671JdtvrQL8BRXagYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x3QZqgRoq6XkDWb2xLoggop2V7mryXM4axMtPaipDmsxkjBvSN7HaLtnqSizVPzLcvvKhxXi1ZFna4QzynwrUgk",
  "key1": "8bkZsP8v9xsFBpTDyCbcuHcSgoTFAjUXLBGJ5ELURgvniNyyzfuRxpw1mmHpLTJ5mSCjz6zPW7q9fVJVokcx2LS",
  "key2": "4Qt7Yen2P1V7XLxT9C4oSDtUXZXsU1EEEtSxvdM4VeA3Faz2EGdA8D4Ude4kMVRqWmVQH8XAf3gSHy2wm9KCynha",
  "key3": "3tz6QzbmedhTJR9yxxb5zVW8dgSEfF3HvYW93a92Yfx2HKXcGP5jMTbByWaW6h6zMgviEf2Wg1dKaYJVQYWFrrZj",
  "key4": "eJuhKn2A2LZWWbVrBmcawbQcGpYATJjvrosvM4z1WDZPUgNd7JKSbL6DLL2zjbc1QeBxqTzvZfYoWdgko8ULXFJ",
  "key5": "3ae1WhUNxWtAgWeTwJJUm33TJGemyr66dWapid4cFxowjQ6ozn5FdsMmrPBAEjrMc1Py2vQq6rtJ1nSMuuh9uSKT",
  "key6": "284J2BDb1cHaHZEWLjCGiQ8PTHMptzMB5icwExGRTvc9KVEL7vZp4VGzPRVTPwsCuyB5dNP5LcYoUQC651xaaRvL",
  "key7": "57zAaDSm6kLDzkXVS4Lt5K51Zik4BCCMegov78gFJfnin15TywvQ2n4yjkkK6WfVdnTUj4Rx6HeBiYW8amy7XoEq",
  "key8": "5ENDkQGcz5rd8SB6NFLZ2c78PyjyhW8s6hoh9i4GkMNWYFtf4PWQo21REyhNDi3uPih8nszzLYVpoz11aaLZrjAR",
  "key9": "2UCmqgiDNDKiaRroAAg2mXPs2zuiRxX44hrDHeYgy57UrhRJw5uR3XLRKDLGuF2sdPZ1No3J57cMiJBCtuhGKKt6",
  "key10": "38wuGjwVPQ8fwjtuiHRCG6dcgSsfB5U7mTXdZ1BiDgs7xiYPrDbnEwKPSPtpfwpXikKAioWZVPy4gtzAT1Cgm414",
  "key11": "4wuJaFyHVqvt2yJU8nHsr8gCyR2WvgsS6PSyZDpCJLG7RJBRwGk9u6N7KzM8xYHnAY3jL3SYYsjK51KQJoFD5pLm",
  "key12": "5aY94gD232pNAHBhgFM59p4kDJbhrjVf9bRT617mEiBGn4kShgVXJ7CeTee6KRetyhi9qfFAqDGkzKEwozu5zECp",
  "key13": "L5UHMjCEk5Lg4xsPuRV1weYVdouud6Ey3iEuNJqf4LGRtBvW6zk4YmtaVBHzym2XZAepP9NQuHZRUxFrkLvajXh",
  "key14": "2XUKVLiPmMQM8XFQgbJDq3E1H6ys6v7PUc19o37GX7gj51gMw1yCFis5wFzT3QU1tamnLYa7ArDs6hzYhBQRcgNq",
  "key15": "Qaz7mqNA9nvack6MEFsJRgEG9e59UFhvYXzr4brLVu4yX9dUgARSsamX7FrKRrmuvoqogYBcWXjEesYpjEW28pD",
  "key16": "455Fk5qWymC6f6ftr6strgKVMLYCh6prHdYc8HZxuHzHj5MKuaDmfxYBDqzjE2Xf7yH5gLbu2NH7M3yAN82aiPn1",
  "key17": "3JDkrbpWEpmvX9ZRw8sVuEovZCrmyJjKLKZTYmmHMDJEkVm2DC6qkAMkwAu1n9XUJCTcwvqowfJgUaKSL4qQTX6U",
  "key18": "51DefJAWxSuywSEMUmvZyC86TEJArbLdDUGiMpmqQ7ej1ERWcDnvnybtReTCsGkYK8QrDxv3SsARuCiCPsc2WMDL",
  "key19": "sJfEvNeNCRStdySdpTsFZ2oEb7uxUd2eRuciKw2RZHxb7Mw2mBHLeFD6zSUfriqnFdeFJvG9bS1XXgRY6849oFx",
  "key20": "5Gz3LyMEGsPAtkJyJsHxPC9RxmT5R7pdNpkCaPZ4K2ThnFtyMYuCyVKk3NkZFqQ2RAeGoTkJZxYRFvBZYHzMKTcr",
  "key21": "2zzsdm6ZkSbSs3gq3K8H256UNCA3fwUTw9ouhyrxBz4JruHVjwJKmzpkk5wAKzpwWBaA6eA1yUUY9bauYsZc9Xkn",
  "key22": "5B9ysUWKyEKWwQQAhF8Le88Y37rcnxjhnc5Kq3ehDqu9t1vNsnDKiW6AYcKhDbCQ8ADmtt1Y4pQw4eS7qrFFtkkD",
  "key23": "3aN6oeTfbZqDv2EVcRNNCjw6teuthknLe72fg6GBNcx2dkg7EJnqyvzAbuVU1PDANqoJGAazUAD5JcJTq8hWLZ5S",
  "key24": "t7FAKYRqEXxtpw8NnmUdCP6sh7AJJ8bzkCcZ135Y5qrGpfycLnhyjCAsdUqpBxiSNhS6KCGFeHaz92TDWJKDt7F",
  "key25": "gVUeuL4LSCDtrJk9Ni7b7yKSsiniZRdjEDpyvyw2JZYPew2G1qoVqGK5pxJvoA6yF9HiqaFtagaGmDChKi4FeHL",
  "key26": "4Pv4U45qRqDAPc3PoXmFbYDfEV4GiwzsNYmgesxJZoMDubWBKasYmxqsVi8fJWz2kqMiWuEvnoHobUofmFZYX3UX",
  "key27": "2AEwhjmNkH1QuRc1FwGf9mfn7TtrAFthaF9VBFTFd8io8JQk59S3pGTeeF9VdYs3SW88atYSgieb8Vw6M8GjTLrw",
  "key28": "5VrbTDX6MWUuYpuCTW7PFUdCzTRepPtncVh8w3rTbHuRjgBroZBLxkegMZYRNmNWByY7ywQijoDtGg53DBt3cXdg",
  "key29": "4iGQfaiFrPan4L86CmRcpfMnSWBBhTNuZzt8bLm2jpP9Y9cqWnLF7wdv5wBA92CNGcza7fRxeJ3hdaVLDuMM6WEM",
  "key30": "3pp7TQdLLZBuRUZx9Y9bnP2kAQsUJE7k4BURnrNW8VeZescwhfHzqLjzShvTJRZ9992ruobDypoNQvDJaADZLV36",
  "key31": "1eQqL7KTVL4MjTNE9bxAHWErtsCUA9XzuYsGyHSavNCqrMr9sSsrfx18HFGv5o6zATKU3tKcWZgBzKhmbPcEi8o",
  "key32": "33JcfaLhebvDcJjrv8Qyx5DxKg42nGMVaGSciBQiDPx2LcKvkRrtT3dyHnV16qKXyyTU7iGgJWCsbJjASRRabo21",
  "key33": "23nCMuov3sCRiDtXZy6aZSS3AqsseU6VQ6B3FiejSen89kz3MZHcWmCa5BvGk3tR6rsrzEVp9msWK66yK14V6U7n",
  "key34": "uSLdwimT3BknNMfBXBGXzpy434dfQxEt6BPT6znAo3nfPBP2VuYNbzx9LaZBHDnpgcZYhaDKDvc5S3ZQ3NN59s9"
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
