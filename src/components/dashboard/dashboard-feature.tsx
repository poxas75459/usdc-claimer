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
    "349vxdca5TZUEMXkeksWFxsv6Hjg31XVXbCETpQYnsB8H87cuN7kmLWiQ5sZpdDL7dJeAadwhKF9tvtynzphpr2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Uz6UksmHqYWqvQkhkHD9neLPCBJ5etND462ASdTxjpmihncHo7Zi6HhnGfLEmuDgjucS1Gy4zKGr43gC2Jt9XF",
  "key1": "3eeZMhQkVpbX2pKr1uT886vkzNv5PEs4YzMgX8y15KBZnhns722T8WuLpQqYTJBf9nxtt1oobvW8CW4qipgknnJe",
  "key2": "5XqLW26qeybw1sK5J6i6sHijTSoAZFQuZ4akW6YXyX1vzXw25Z1g7z8k3DkV6fUdPyzGqG18sC3DhU91jMTgodQW",
  "key3": "2aJpBNn1CMVLNNj49ZqSHydaSBnuJsCCVksuaZvwoncNa4x7jsPuf2eKcvCmrL4SjajM99yQ8iu8Nowds5DpTjGi",
  "key4": "4TW9HPGdLbDCq1tMkbqNS33VkELFG58ts4eSibyRr7eKLVdowXF4LPi2YTqdXtGhnJmA7wCNMkbLx3XZeLwqRNpJ",
  "key5": "QybjrFbmz7b6riHP3gW7FaWV3xzDY5Ud2cCu7nr9EtC8AGnpQtw8fBpV9fH39ePBecWrVxHmu3rMqjYLWvpf52y",
  "key6": "2wiih2y8jByryZCLVrrLi7iJvjQjLDxj8E2unch7itukkcucABhdvhR4SvTizbAUfZD918bgiY7RqXpRoxwxrToV",
  "key7": "5AA7qHn4HjbPELSmhGwyDVP4MnsEx34fej7F4cFtxwuigj4yqu5sDMmwDe58bJW1bznoBUQg3uVaxpYiigciBRZx",
  "key8": "CFQHV4keiUuuowyNbBc6aLFU3qtdyQikp9J5HiSpZad3WWJNogpSyUEkt3i1Rxbe9Ue4UPiWbNq5koRCUP6ag5A",
  "key9": "67ib7579wrUPkmzHGhdTcv37DavD88xT4u2Ydptu8dzrBJiDxWQeBQZsTsSwbSQT3jWFmFeboLBpSR69xMqxpRfT",
  "key10": "3JD4ECFr8dr4yrfMPTHKRdrPeX8bdhDwWJkdgrvEZYaKqCaoZsTVn92ze6Zqnq8jo3b966es6FcHLihb1kdZsmLC",
  "key11": "QerD3MTJqdCf6rnjFotZDmDQRK1pzf25YXQ9sqpKa5eaYQ1dJHj9vBqkfYg9mHRpfCCNTnfFneEmuaWLGASk4m3",
  "key12": "5yB7zzvgEjd4ESUrM1mBMjoCHz3gSfYDe1ctg4iLfUbCgdsDcusmtgpEFVtS596umWm8ejp6DHuor8drygWH7ZTg",
  "key13": "BXdf7WZtdo2qRx1qP3GUmjVdS89BCT4dxRbPVtYjRWkvBAFUd8rUkAoPpQJ5LstHgg8xmZV5uJd91MywL6dBe5Y",
  "key14": "4JcPgAYeqCwRfUvR5DnwsMuxQonPto2tvpFa7nfni5h8EcjKYm8Fx8mnZ3YshYBfKcB4FNHfuVJaPCvo6ZRvkNhJ",
  "key15": "4YvG7aYrcz1A4RhYnJoYFWPdGnY9zLgHt5YHbYqSEUdYjX94gWKuJBw9oAd7rpY4FaAPrz86tgzgifMThM1j7sEc",
  "key16": "f7dPF4Ee8RurQXu9hu3BUYnZ8wQG2sSsWREGyWdgdnBi2aiaRUkgvAy1yrAELrktJhr23eJCV1KP5n9v61mwNrZ",
  "key17": "4jcRJnQJPpBhNT8CcNA95K5WBu5ZihjFTsdfuAgMdWPU3hJub2mEkQ7tqkfzjX1is643wK45FVaCkoPKZ3Tk2bp9",
  "key18": "DSW9McxjE61K9BYvmvH57JFAsj6ZyA5wP1WzDUe4EiAKqdKS7Z3chUYVLiP1gYQg774oc3cFDGJ1bQNMzmCbzvu",
  "key19": "29awpGrdiaxPyESZUcj4NezfZU7SAyQ48Ysfe4NWMenVgWVKVbxHQXaTw5grMrFoiVW5kXgeASjVkZ1KkTtqPUed",
  "key20": "3ZjEkWwQ2LZJb7no7Cub8MyUmGCqxWX5TMPts3epbeo9vgRo7rFGbjnpob7494Pb1LuKrsytPHocAhC7gCqzUZTt",
  "key21": "2cX36uYzrmNw2uR8tHuPPW43hv1BRyFFSANzXim1wPJ8L6iG6U1JKrSYCzyZbwbgAQMMrrc7ECE5VXy8XPejRA7C",
  "key22": "ptPLCyPS9Wkjdxny3snbhzcxSuyT2J7XDeG9PKrV1cvfpnUDpGAdvFW8NNmLJZ2ddLC7YnFjQ5EKjeLhau6wXGN",
  "key23": "3G28dRvJL5LAHiNKtGte5bsgktFuzKkuoJt7rJEm5Zh9P15vDfMcDgUB2pVSzpsG95rHk7w4RM4Py6TqC6RT5LmK",
  "key24": "6v48u9chhLm9Ritrp4FuyCWMRX3XncWmpVhNabyUQ99ujEXAHuKwJrnUWEinET7hQnjrdvVkeRCEBYYMYV5zxUi",
  "key25": "2ysjfchSXULxUGLjRnhNwbQnTTDhQCtDTmgsKP6xqk21hvgSN3xfTDwNbzi9EVm32crTDrh5FY1VRnuHQ2Q2Yndr",
  "key26": "5NNxmTAPWk4KPD2DaAEK5xmxAqaEWpC19HQXEqZKKyCG1BCkcJEGspq4PqDLm6624TFoG7jm91mMY2YGc4fj4U3v",
  "key27": "qPzYsc7vdzwEpktZaAh1vzajYC7r5Y6qZVZZsaBbnaKpvRtaoXDy33svNZ5a8AnH9t73AavPi4SBHzUgocaYp5F",
  "key28": "2rQTPS55pNDDbnjTMKUivQhrctuyU39QgwMNrGGAk3C2dka8MvAMvViNRkVdfaZGdYBbeM2otXpUBVPBY8qLx7aE",
  "key29": "2F9TR3FDKoEkYsaQbhuLNmdWnxxCFHvMoWRi7neJco3rDxM3CbmKjNAKgu2VtvnP4JBRnTZ5ukL5hWy4KSPKkfBm",
  "key30": "644s7p864suMPipLRSatdMGZuHZJK98GUba7EonzE44JGyR5iogkwtNcZMDcdVDvV4j7Ns8xSgT8RRqk2pc5ZPCV",
  "key31": "5RqPjmb7nYH3iXJchMbs529jiApuRoY7YZJ9F2xyLDJLKau2DcMGCTmVBiSof2KGTW3MBkyq82T4MhBSzNCyoDRR",
  "key32": "2ZgbvtQjoSFkYeTgQn3cK9ZRWbEFqrdNTFueBxagJrFDtHekHRMGToFXanjkm8ZTaYiSSGAY2MKZppy6cKiqmp67",
  "key33": "4xxnX8iNgwsLq9Jr6kme7mddJcyfkj9nuLBq1TcjTD6vu2a1yQVVvrTL9M5mQTR9V7fbU88nCU4iocm8mqsCycTN",
  "key34": "65DeWpGWocU2Ay8PxEvkPHs61Kf9JLgCMp3QMJZ7p6fqQbn4JcZJWDcveq7nqYLBfmYSS89qrryouDEqKnW5whUN",
  "key35": "2P4Vyw3RjHbX6pe2G6JKj8hMSDmLV428chHq48r59inJ5oGNM8L6DJ2bqN8bh8w9Le7Bt4czHbkTvCQuPSmK2mj7",
  "key36": "5FqirEYLQs1sc4c2qySzoD6Kso9qynieXg5DSBQLPSowijygK2qEBcazqpRAgm8f1aSBGCRfPJsKncdGfdgBU7Xj",
  "key37": "3KPVtByucsyK2qiM7vAVj4WuMnSuFioyKurtPyGRQNazDvmWoqCY4ixT8h4BHR3jN8YV4i2vX2VHUaSATG4QgdkV",
  "key38": "47F4GkbqWBAJkbdDu4wJbzrcSAy4eD96vGUMiSfK5cdgDMx8zCZtURpLR36UMAUnRt31r8XkrbW6k3RtgWXjLGkW",
  "key39": "G4iL6SesrbA4KuW44X5m1suWpbMLVCost7QzdVih7JLs8fG1Y9M5Aqeo58nzn6tCFjC3ZP2542v7peXpg2Ji1j5",
  "key40": "xc8Tb7jtxZoUck1coNFWY7iGH1cwhPpGxDmnaKVBgDRAGEHSQMvzyUwnrgmsUnavo6kVdDz4HujzavEH7u7sw5V"
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
