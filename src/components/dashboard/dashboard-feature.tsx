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
    "ERz9zVh89wVzztHDqN1LVv6p81D76eJ7jdXCMk26Vr5ZKHKhgQGJCCGqch7wYzxZT7N6mW5qNpckvSuJ4eu6fpB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333rqiMSUHndHXrH7itqPAFrKUs5GmGcF1vTKvqGtuRh9y1KJjez8ETip5NtXzecoBd1DKccEca9Dzj6xb9gMN5t",
  "key1": "3qM37qea4d3XZzqJ8JtSqM4E9euFVHfSPUE5X4f2TupVgYHB9DARVLWitWpSJeZxYhiPwQ2QE1P9DHhPYK11s15G",
  "key2": "3NZRMX8zFv6Y36t5rAtKzdRunRh2XqPNVywWj1fLyEZk1isyaRSAG4ZoNvDJNT8PKH1q2ofymzYvZiccSCU5GPYv",
  "key3": "5kntB8AymAFcZbt6g3NUcnWHKeDLwQaXCx4729Phup4WX7JCWC4BghqmGJNcWPHX4SyAkDHbbHcaTCMDuU2GSzxs",
  "key4": "2zvJYUXgzcBPFfrYpa7FaoG1UkV34fmDS7z7XUtogSC7x1iZuxWFruckcGVHsyRdQcnJuPg7X6DcQKdGV7UE8hGt",
  "key5": "dZmQigYdzjK8GFmPBmCZLoiJSiwmQxnpvtYjDztPvn4gYwVftqTtPwxVtb6VNBvuH1UVvyZMvUwyWpx5HE4UzTM",
  "key6": "4eP4vEbs1DYmRYEGBh6PSqCUTvPbd3JxiR5nu3mq4ohVHA3uKnquwcH25Z1A5Dqr2YhckrkePiQTN18zTQpZoUWn",
  "key7": "4ZN6djKUTnzcoRy9NzZ5GHHpqfayuDzpWUvHoN5XUd2diB3FgaAB2XaZ7fMKXhqBGLzXNXZH6sX4yPEc9rmWiA7T",
  "key8": "5ode4F1ZghsmQzPCvu5EUKtZGrGRwEhfmYQMMjqeLwRa8gBqXcbFpevs22KaFSiZSVsBZ4vBM2iRRjqhKWipng4",
  "key9": "2VXUrfX4LK1f8f36Hanz91232N1mMqsUZaj2bR6XSDdL4tvAzLFcMQcnDXLeS2SAgTHveucbVKjixv27HDyfwQS",
  "key10": "tYyy45h5PEvLj7mJyEuLgFqm835kz11HW3WTBrS8SCbV3wqsrZZmBcivxP2bw2hFtLkvr5zc8TLBzkGbgVYJcHV",
  "key11": "5T8nTkuRMHCXVFv1GCntZFFB9ba9xg2Knfchb2ZQjpViNPoPj3F7FAe3jmesiUUGbgqHfFbodzPNQzqvKXCQqE8V",
  "key12": "4ZgVBi62r9Z7qFU93UL7XF4GkcinT1m9PKG4nf7kRZYapew64mcoa8YvuNCtGXr7aaC715phQcH79etMcweFe7y8",
  "key13": "3Uau5DDdmgKRwgucRy1hAGUro1kQ5XsuV66HcCQvrqgTRooULsfQgMNeKpTSpSVK6ZdccxnHTmFrWYXr16v6GQxS",
  "key14": "62DbdiRgSnAJsPhvs2VDZ7EjMP7P6BX7ZrGJUortdwRaqJZSeQMxFnmt5BdLgawWx3es62dhZptwaXk13v1gkeqs",
  "key15": "n3BXh1jkzaSCBKfn88AHQMhQofttQKmeiu3XMUjkB9G2vSVEbhE75a1i2qBUoBEndesMCG76DREzTed2U9hiUaY",
  "key16": "ufYdHXtDBsXPCtsF1pT6PBZvc8gY7cWaK4yqG5935Jm9HMNvm4JayaJbiNLjY4QotXK2aUvCsvrK3u4YtVXynvA",
  "key17": "KXJjT97BmdmatN6WjUEaxboTXdMU7W7cJ5ZwHbZJLK31BtAGqoemM1bbieWhdhzpg3Nn9StTisJf12Zg1kryhk5",
  "key18": "61nMQpdERKEJ8D5z5LtdGQjvW4TQpgp2vijtj3Qgwu54vCvm4KBbwdb4CEJ8CpVhxxghco6uKvd39u3jug2oJAVd",
  "key19": "64iN7P3PRRKkVVvAwbmNSUDPxKP6Ys5YPT4TG23z1V4XGeyjBYoVAUZhsJqwxPGXSoTZLuodPaib8NqJXnAyKRe2",
  "key20": "4URWs8xy62tmS4A5x9nH9TrFK1kzdMQYBzyYLSF2sUHiLvq7NRp6kMeudMix9d95Hiafnt8BLwqoDqp5bdHdepvd",
  "key21": "5D1YrgmssrBqFA3SNeqPAL8VE2KzrYPD2qaBUDavVMPUzTszMCX4QmEJsA2FSwW1af9KfsUmDGNGriWLJaRZQ3oF",
  "key22": "4KJVHpkrgSjjPZidwKKWPLbp2H2jPgfiPTPmZQyS1vMq3gVpZ3tFBHD9aaSZbaESTNRzRuPPzS9ikZz8FADXxpgf",
  "key23": "37pgVKBv3WuU8G7qtRsMBcLvvk9F6HwYkwGByvHcLy1zTeuiDqXpqRoM35mrFdz54N41dAmSErdMRdfTzhNjctyK",
  "key24": "jYRp9RCpaEo2tE3u9cfZAQyCWUoegRUhMj946vVGbsD3s2YDWe1JztW5jkkX7Sr98XwY56vmCYWJehL17Z5fb9v",
  "key25": "4NzNA8syFgxPJrcDkvCZdDFv3dEg8BzdiboPCsakym2nSVidBm5LaA7RnhQNE5Xsug1GAMjxFMcXxbUKavTdgYUo",
  "key26": "4bX32E6Uy6bR9aeViCbWAUbRxBwAkBMSThginnjjZh7vdsHKpAXA8QmSZVg7BCVMTYvWJYxCmAkLAygLc1mwigRN",
  "key27": "4z6iHXt5uW6fC7Q4cHxpeKCuCRDUrozPAKmQ2XdjDnU7YRijAJ2fPyHqKmBWUZ4jzuieCCGLhPt8R215kvesDqFN",
  "key28": "56omCtN98AYYSAEHzHBGKHpfbQp1QL7ycCb5B6VHZgfQ4vzEegpydx1wL8MymSUJDoacyoVad6NLf7BTWMEeYPRa",
  "key29": "2bb29ayBytnsGdjAyhqDeBUkngr6h7ef4LFSZbEX5wqxYnpJfrKUrD7XHDfGanoB5ft5sizb1cEPqHmfck4PjuSY",
  "key30": "5KvMD17KotAi35Hax72fPTBQvtxwzSNDdfiyRqeQwhkpudAvfTWkzmu9G7o7rvM7mvQP2vrRWFBcnTMn4nsgCb4t",
  "key31": "41EXQDxd9kdtv7KsubAR1zctH9ZoeU8fTH3QTvCNFjfQdp47YhXFPYHvnffwpVxeCGDjPk4h6HoVkHmsjehiKNdM",
  "key32": "2zbLu8azGzWuCTG5jYbxqHSQ3hZvgmaGz3dVMixwnbcJdeWBhX5WV4VxKVwd4CqMoTpFcmzGeHQHHM9tpMfEFFEC",
  "key33": "YJjS7Ws2aef5bbL1JMC6AjaM9UJ4rMVwBaAtnu6bb21DSc7HPLRhd6A7gbDcmMTxup2na1dKG7xRxUXuG3Xt6cE",
  "key34": "4CeFHfVhyQ1msoJVZZNQANantkxX7Lf5hw3zFeHtpSYPqVDtd3x8jJmgxXDkk1w88Q34pU5kNEtvnaiEAhBW9aRb",
  "key35": "3SLdb6TFCFrkqiVFxpUiFMgkAxaMbN9xHNpNf2TXoJwzXeeKNPR5WtFVgfFLRk171tPNy7Fu7tA4EDqXZJ8Fujbo",
  "key36": "eRAMHVCam2kgQAXkp814tQQKQozDsTJS7zpjafXZMG4eoLNY4GtL4FWfpBQSpyfPsE3d5hkhYKjWNnSMXmBpiMV",
  "key37": "2Tc3nCG2xzbpRZFd5Ky7uD4tdbCEd4j3RsWQfVotWmvcqEYmpysyEePHh76mjveUomXuEeMfomh9YRX6Aw4XnyPp",
  "key38": "3reLZ1qmpK8irX3JDUKvqveMwfvw3yn7u8ZyuQ81Pvcs62uvVG9Ku17vYF2aYN5pTd1DJmjnnvK6wskJx15YwyHB",
  "key39": "5R5ZueRh5f9qy99tu2FmK75u6WEw9MUjvrWDQ46ds8Lfgm3txr8kz4LwD5HYPkoRGCu8YAzLkLDWtTTFEujp4mkz",
  "key40": "mTTRciNudowQtVppnv5aZkKJUqrF7jiYXQpSpyNS6E654DdYYf5F8vdNTWEA7c1CjZ59kCLFqBnvp6g77nSZJyf",
  "key41": "hm5MSpBrd72KwJxGwMFnkjf8dCLnhULufeAMez7FP9TA7LxJ3cddVh2AayoDGrgF2Saqt1XUNj4kvv164c9DBza",
  "key42": "4dRWPzJ1pzKF34i3zdcPnjeYoGpnaPgdHbLeGZEGjbWQppV2JhD6UGKeNCotDX2NjeS22xTGk1FXhCJDrJpoSZR2",
  "key43": "42RMG4nXDRWyPuxq8DZKUj773hGe8ndGk55ZA3ZDmxGFHSCga3sNR6hCNmJFDo9pnu7R9LaBJJ7BhPTcUw4D22cL",
  "key44": "4kjxVmiE8pXVV16fuky1xn1KSb1nxKE7B1gvXcvjwujzB6rC2YEhbXzHmVKoJrWmWkSkxFtcybrF6SehZ3K3ohZF",
  "key45": "3Z8MK2KFFMYDsNF8PpGfWiuHijiJQZNKmcsgfb4LmAeePWeL7wxgyYtQiCB2GdLNhfAz19zTowvKwETst8a4fd93",
  "key46": "2RCfX8QR3avn9R6xbEmCLX7euvDHsWrtcgYbVpBEScUE1jZLATno1wGjGNSJSTKHnsrad9G9MVPiUr3JjwG6Epau"
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
