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
    "3idCqoUqt34JTrx2VpUK7zQ2BnvKnFUYy8HNMjpimrUY1WCkzVbYmKda3uBCsAHDRBcPRsjt8ovk9dxy7783v9ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5GtWSinh6j2Yn1UnFvXr9PvxUm8AQnjcWunyguCg1vJEHoHAn5peaUp8RWfe63qsSw7ddbqbLLT3tz7Hx2xV1y",
  "key1": "YtjVYp5XFooR4rZj8hhwPKsMwsZp1d2ba2dEzBeXQymXzCnbNcY8z2ADMrsWihd54PJkXLqvtSBiLCybNwx1sgs",
  "key2": "4WVaoAWrKj5aiWEU1tyfboPgwYwLVryHecLEDvfh4RVKGDUQeXUfAEstjdnrbMyqLXqPSV1gDS7TcRAFTbSBJbdi",
  "key3": "4ruWGjvqPe2fa86CuT2SMzy7F894GmvcADqin1eShMeZtnfadEHu3XAc7H38KyMZk89kqvtarxE7GEh8YcuZGsvb",
  "key4": "MZtY4ZF1RfyjkQw22MBCUtjm4rNyAqktFUazWTayKF3pTFknFd6f3aFXr8G9tDXLiXaGk9PwskMv37wriCfwYRW",
  "key5": "2A6NQWAUntWqv5ygv8J2WFp5AUWXxa1aPfvUuSSNGtnd6FtJuPWdC5ZEVfAHdcLRyZpKCfFKRUfAS6tBzrTFeuwo",
  "key6": "24wd6Lr93deoqGrJRCWA5GWj5Xy8x7pCBMrbfKciikujDHTDreTSy3sVLoNydH4JCKpPZ3HJscJPHeJMNttHRk9f",
  "key7": "4YA64ZGeTuRDPYkdVwEVnVvbrz687CJwmhyuE41EkSnN8ejXcrMW5RP9CTFGd8zVN8ownXSg3jp8CvGQC8mskJ4r",
  "key8": "39qKsMhUb3pq5BbsFRFHLfrPLX8NdkWWjocC7QNY6whNeBkzKnXBqtfUb4UPMEFQrQ9rnesYAA3uoyKYCTygzfQf",
  "key9": "5anqagqr32CMiJEK8zg9YfofMoJcVbNGaJcoeLdP1SDmfSKiv1wz8D5jDdTwZek8D741diD6kCbKfdDzTZ7CypX",
  "key10": "5HGWemKKB6LTDJsprsFu8hSrgPxc2Ujzoeqtoj5CRmEnjj95Jdg1qdPGAnf8bUvptCCA3BimkW1BirPszDFwLJSd",
  "key11": "4CqZpALqzo6eAYgYkdWNHsWRvhWkk2irhvdWPVSpKrFdKRbMZRqS4ZRLoicK8ath1qW9oF2DW7BxVLnSUNKZdQCA",
  "key12": "3cKX1duU9pqmNGAnSQYpzwxTay2739U6hXCkP1Es3D35DmH2ozmGwMs6qeY6ouP8pfjPgVo6gQCu865H88Z17K3e",
  "key13": "2bKCdbbgneWLqUCGTTi86Thajq4S4EmWxDdMraZGdccgNNxKRV1faNs1kHrN2nGZV8XtekzQdiUGyQRRgFvxNFKJ",
  "key14": "3GCEzaP4tbvuXtyrjYdUiSGPUtxZ9CtyW3GhiZgmpMXzc1bdRN7UpY1DpnkQnwxbSAWxDT95XN2fi4HyaUdoKe8f",
  "key15": "3q85Ptn4dEnQco4rvyMETT7ErXHEBgjeZVD7UgdhFsZovZgUTZM74xLvkY8kqv1DY3caj6qcg3YSJpoN1u1BymSq",
  "key16": "4LyjE7T4SJFToGHfk3MnrjvxsKoFpTXRH1w3fD5eKZJ7gU8yeCUcB5h2DXRSZ3A7JHbva2xNHGbTWotaa2zs9FE9",
  "key17": "5WEuGLBy97DMnJpiDZyAqKMNHKnmQBkGdNdqCkDZWUtGZ6ukVv3FUuASMMcRQtgt8CFoXEuiQFbqfDNi3h24yodB",
  "key18": "2Zqd6zbp8fM45dtFekQnP7yGuXrCr3kMjwStVNLbfEfwYFNGYQkXfHNjiHqsaqW28giruST3SoGm79HZVdMV1V8",
  "key19": "3b59bJeTUHzzdHJ9CCXK65Vyh6mDxf42n6AGmYwmqB7rfYkspYyxqBHAFrxFTsse2fqKmmwCEqU1zn4Myb6NwA7f",
  "key20": "34AF5nC6VjhRCe3RW7juERFfrGfMq2SKZ1Zv23GMvqw5xDy2bkT8PBmtvya3DUgmVXuTnVyEXMpBTVZDRd9nksqf",
  "key21": "4snjvoUuz4cYvjUVgWHMFbJTPmtoWMRkWSvQFjm9kuJh6Y33EgHYwYi3HUXBYuS493d5w5eBU2pjmMB1AXoqEg2Z",
  "key22": "5Jp8ERnJijcBByqBLRwMfBAhr2yAp4eLQavtEUrk4RcPUKGmx2zdit3iH6n1KyFJsNVaS1VTKPAZhcop59HBBx49",
  "key23": "4CMqVQ9x1XMDSq8oQNtgri49mUGDE9Bti3GAD2GFCEVAaW9uxfuQ1S3qEPmd8emNNDnktCNgRtcPm6iFyttKuRmy",
  "key24": "5npNUDEpVWVTpGZk4dHTD8gk4YbdmuQFWZk8ArSADYAfFhVwGk1zJPY4Bex9udJuRGLLZrtcCBnA2fCvHeLzvxqF",
  "key25": "4bB3FEJ8RSSocRuE1vaKJgPXAHgmkQvJwW6fBmgnLRVNkx5LgnU2TbN9HJmVWc5prj3EXGonSMpMLhJVRoSGY8Nd",
  "key26": "3D1zkR9NfqD8LkehHHkiJCG6QAuVQxxXZGypesTMJFbCfmaGtPd8vk5zQfq4PveT1zn3wm77z8ye8v8AHkNZuCjy",
  "key27": "4UGtKozd3TzJTM8WQ6BWQ2LAq7jBcKnm2vV4pWv3XndSdzKX1LWD7Fse7mVHXHLyd7VhRBZv5N71GfnyjrC4NZaG",
  "key28": "5h1JcHcrsqeVNxFAXEsiAyBsZQfQVJbCoU4Jo3tQMSWNyu2eFkpfSs6Z3bany3khqqyv32CcGjujh5ct6B3LZtGA",
  "key29": "5rfjKqc8WxJtCynBNyFX55MrdbQptK9M9mtTgCFNDbFDWfGHLZbCS8YBvYxmWq3v4neHxQX29RWZMH3i14FMB44a",
  "key30": "3FrjSgqSggYZsrg8iJz5Nyy6fqz1ziNx8H3CxgJwoniyRJS6GiDVoTcus5dWsVkN5i2P4yejttWkWj2pnuXBdkSK",
  "key31": "35xZY9rL8qAHuhJQk8z6V1dzAfEMBLneMCeRr1h6T8MSwvEsNS2KEie1VbYk59GxgQddrbHNkx3d1ekTFDK8bD7",
  "key32": "4wehWUgWARgZ5JKTYuDqYTZ74HsgHLyu2wHcJV7FpAHS474JtMMhtyMTgxbi4qmkweKjkdoAZ1ujzavDAqAV9fz4",
  "key33": "5uHxwhSmuwPRo47BS6ksLVDdRnT5MgNNU6hefifekrX1yyjkUCLtzUYuPg91bxupuix67ZujkBxRmxmRfcZ5aZAE",
  "key34": "54x9fMMHDPo4pTBNPbnY4zGXkd6CxZJeHtVhTwkvWzoLus1VZaweyTCxX5AzxMNpv3VMJiF2FppcriajSiXfWtRA",
  "key35": "2DFKGmCiMBsfobRQ2yfa4dXwAWUDXgpoupaCqMkm2y22vGu8AFpEDsUnBuywKdEaUWRGYH7kQdVs12dwj4WWwpSt",
  "key36": "5xabvYGi6G7qfyzeRTBKoLc7HCCTSPBJyLZJgSspYoi5bYXesEusHmo9hm7o2AtLWhC3NDeatJEHpRD3eyfAPE4U",
  "key37": "33n9GCqKgFrDZJXRecTHvnNQP7NX3fQxD5SVNSYooN3g4HV9ojUbuC2j3JphGuoo6DmCbgQSLq5oaBjyZqv9eV1u"
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
