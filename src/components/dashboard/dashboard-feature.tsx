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
    "44fH7VJuaacjXWWxZFKJoLNcfpZdptB7FWRnQw79zNmhLxcerRiJdezegfhESQL6TfA4mBcXaSfSCiCYCvAvLsVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaU7dSSntyMLr6ntbP16aohq1HpDxLWsjBRV7t2ML1nzLxasEffAbz5EDmj5zNp6QG1Pgicbk5zRjEUys85bfZm",
  "key1": "63cewFjdrQNSMU11x76JCv9NpMUZazqrAbSB3HXqopt71QeDTkbgcx8Mq7GPbdERA3CaLQBe3HMVpS95cnYXPaVZ",
  "key2": "4uvdrdKPnzFtcYVzmmA3UhTF68JMrXkLZVC61VzX6hXZvxoN263sXJnPFrRr3v6DoVKZtd5pB3CgEh8VGXCUqmXy",
  "key3": "2UPiCSmB1sDfdhEc1wYq7rbHPWAs8GdiTR2uaDKCyngE2ZRk86n7JXcyeqwfR36fXSGisavrqPDPtPKCE2gxsoAn",
  "key4": "3y5xW9zZrT1baGYpwZpxSawPpKMuwMinBUdr3x35VeFMTWXSBBEdMnYQrCqcgR7qRDwQ6mB5aRi3Vf6qSbLhHabn",
  "key5": "4YZeGHw9KWVEtmRWoUavcubGaZdsk14Ljcpkh2iQbupjmXELhRTD26diqcaNVPGcT3pePsbekotmeEQymfQ4PKRG",
  "key6": "5Pmt4QGBbTHv1RrUZ3bmWKDjmsafhYH1s3JZuKLJFcmb3DSgcoPTPT8VHCqQqgLHFQ7h1y7RYuEcmUBZmofRQ9h8",
  "key7": "3HNgkxXZZ6reHVBgsjd9og7nvhEDt9pxgfgpp2Ca7Kz8kwDmjZmmAuPejsPpLzEPL3sCGUMwaH3q2BsEt7VHShzf",
  "key8": "31LFpmw2omRSfRRMQ572bBCD6HMBXXra6jNToNarcuqVZzfTKv7uTgpbbC1Eoa4HkaRWRF6ZXTm2HYCFroEPBaK7",
  "key9": "32dQ8RNcEKAVkFyvvvdBGhphvJgvBmMGdyQsySf2wbrUVMpViiHT4tRXAUWrgdYmc5aTj9UnJ2Uw2yfbYtueH7mx",
  "key10": "4earZFZJiFgfioPAdazrnGCZWFKCeBeqnHytQPAeVWQfen7SgsfqPfpKpgyMaf5yV7NFj2Lu8EqobYBVrLde6Etq",
  "key11": "3bsC9iW5aecEA5ayKWRPwnNsjAyN66jawpraaUdKSeVFQbyY8nHSevb2hph9QCLQdu9dhukhABnVDYvQ43q1pqyt",
  "key12": "2JNvQtK4hrmfCvkiYyVKxkbWpHtNLXPavzdtks2DBt2ibumpef4pqMkzPQVZaerRwTDPdj5Ao7gLkcWdG6F5ftj9",
  "key13": "3DsGS3W16FymBuJiXmL4SgMcMVUKZuYAWBCpRMitAwvT2TCTCWmyY3jcEADFpdc5AQVpgF5apC49eurJvLQNwmeE",
  "key14": "2qy3zS1rycAYjeLvW4fdTH75F4FJ4oH9GjgupYy69WQzzCXPnv1ipj1etqXpx8qQWWGETWMEzbwX4N7SoaGgR2p3",
  "key15": "2cgthqaXMBttJZ5oC42hDGs3wq2srfJHFysRj9rj3CF9TFMe5tMWbPnsgcPqv7eTHLUdoBwVC6eRomLeE143pgr5",
  "key16": "61c4yFbjfzgPxoLXtPjMJV6TUY8QXSEZRnTVjBbfizYuc6eYG8whkXK1sx4rubZ99QGXuWxK3PnPumhAs5QboqUg",
  "key17": "5A84jGuDCXH1Lmzy1aL1Tke1QD5CemeWAX5LXScTV19VzfrRsDGFcgQBk3rvYpAKJqcefb5dnSpQMXfWuEhTUxW4",
  "key18": "2uqRPGCnnTAGMtT5KXq4xdzfeNUo5xRT4J2h6rWgJDowJGhRavfCXgtg8jz8yCez21mHZntZ6QqYe1wUQfuUgKnN",
  "key19": "22Af299Adpvx6Zq3b35WcvaLYh9B7DxKB1tKVUb6kDmw3fXYWGXWMGoN6XkBsK3XfWnybn6T6BL2VGYKFd8UZwsM",
  "key20": "2iKw5PoJvJxT8BgDK5uYfwdeXqVf4v68Fogqzdkn9xHJqJHK6u6NaLEHi5pT5HzHVs8a4aeBqtYCXzUwLH8v1jse",
  "key21": "5dbjBys3D8m9KDeJ84jbBmJx8U5yijxb3quBrmchxj3D8NQPVXy2KFyd9iBk3XDq5bberV1hqR4ffVHh47qmiska",
  "key22": "3sJLNwSFUo6oognSkU7hS8rtEjuNGEp2d8pNX3mZzwdnX48qD5TUNBUm5e7AVKqCKaJFB8Vrpsnv5p2e3JPh73RR",
  "key23": "tskjDvkPPYh9rQoX8VGimCojUKsN3Fs6F8RdcNnkWXmi5JBDsJraNt8twCtiTRzhAJvW9exV4YKHVaJvBRBwCmS",
  "key24": "49QqET24Q4KihEw4PfxXFY8BHhn1Aqe7aPzDNpGuh8E2gdEfSvRxeUJfav58HqQKcdEZcTbxcb5U96K8qyUjmuJL",
  "key25": "4ruhoQT4KJkW4BtxXKhsZKcgL5UViJPART617HVGiNGuHinRSuro21LNsgYWjtwpYUHn7BEzFNpEgpxRPtTKx4US",
  "key26": "4Ggkp3BpW6KrnojFEWy1crMgKJdLwDNhMQBHx7hmwQ7EhCMBUWXTLAhy5UxmnaUnFXcC8M8drcrGAga8pNwAWVKY",
  "key27": "45U3LYRZaAxd389NasdrYVcdwDw4fWnxK8dMPFkWEPNJQcsMEYyE6XVSxo9gVw8Z9T2CHopvH9RGbq24Qg8VmLfP",
  "key28": "3ZLBtHmcN2KGXjFvH6HJjirPTP1QRSL3ubrYyDABZwHjxMnu8UawKmUvqZ1GQNDJG9LquwebsrkqBgBytwuDxVeM",
  "key29": "5FBvHNScTxKS1QLkmspU42d4APu5SaNYWuzys9mV57kJPyYrtx5sXqHexQXpJZLQxyDtTFonYHQHFQhSWsM4N4nu",
  "key30": "2mV3bfMfefh3PdbsR7nXsfaQH2qYbZ6M83YMCp5dGGtSnQUDUeouAALaBmmQ1TijXnjzoHfv7oWqDq8jfcd1qFYW",
  "key31": "2Aj9FF9joHCidnVXACHo5KAc6ELxLvq6N1Ptwj669upEybkiHjfhmQBRYR3MgwgrM3dytwcWyZ2Pz85KG7pce5Th",
  "key32": "2gYja1uYNmxZwghtPepGgZy267Un6uN2owxNTQs7FnSmuTN7b6Qi7Ee5xMQT2NdPRJXHEzWxHZjojUvtsDnX7KSY"
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
