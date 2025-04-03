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
    "Bu9Gfed2KHTTdb3ZZ6DgfZwgfATiGuqBGub5iSjqPEr83CPK4xdsBWYh3xuB6pBJqhzsLeGomgR2ThhCA1XRJDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cF4XHPHHt267tzCds9XhZbAdeDELXH1eApBFu2vcC1zmznL4ScJkruUgSDBrkzzVFpNcARAsJBs6AUTTAFm4qwZ",
  "key1": "4SnDatpp4sHWd7J1yGkgFeGGmaHqewyNGErBckEzEHjCazkrnUnWY65Ey3ixx1RcZbp3uSwwjRZJbpCzAa2jG7SF",
  "key2": "29BWKx4KFJPD6fBKEtYBLq8fY9LUEjYu9RKzyL8FZt2tKt1cKi7QPNEmk63LkWAJifnvCaVQCvcPCF4zoU6EWujb",
  "key3": "iY6LuSzt8z6iSVW7QU9aqfWnkZkjbCZKUNVakjHC2AGnFB4mZH1BwywCYdAZAXBpmqfrZG7exFmPq3pxmCj3nLb",
  "key4": "5zDWgQ4RNEvG4teKsHzvhnvrPofCECcv9rcMZER3aQzCE5bN3hBpPs7KFtd4TV9KXyiHQDHYKiNKA2CnWZKhbd2g",
  "key5": "2WjLFDEJjHr4Zb1jhoReDhtNXqqqWPwBmkyGSz21eAfiPJvvL3oNq65EjBHtJyNRa8oHQ7VdmLRNHFxov5GatTRo",
  "key6": "jZ3uXsQ7aS87mQdC5P9UP1hfB9V7jzDKhiAU5pRvC4dBpqjtNRmgXAtHpPZ1j8LDr2iDjo2eKqTTidXeHbv6Skh",
  "key7": "2Zu4wXiVgXnVfjr91zcMA8aN1SReMFFANFjJfvzNhmBwqrB6mbzG68oJge7XfEMeAAZThJTTZusQnY9Dn49jje2c",
  "key8": "e8pcUa78gaJrw18Mb4EsFjKCpSDqCSqZdSkS79NV4fBeTMmyx9cqq8G2vvsT9jbRiLmDJFXFELNwcMxGq6s43nJ",
  "key9": "5ZtFSnpquVcs7gFCHgRXugr3E4BiMyc1QDdMTE4x3HvRBnMFuH6F2RDnNSBqMtLkvv6CaDFF3jHQ5hHDjMrFBawV",
  "key10": "KYJMPqvUKjmuGzuvibg8fK1fSe7yRG1zdqYhct2K5nUQAUnkpZ8sMQX3ZZcTV2RLPuCCx8Vx2FP4hwCN5mfWdAK",
  "key11": "A1ZtasRNRAqLvsBRjHQZCkZYpABzuHMtSFg2ecTVhf6fgAd588CMAwNJPU9sqS2w3WquC8U9zMBpPDUb5Lfipxr",
  "key12": "47d1WJgKuV9ZbUByCygRGLRvNSdtwhnpacamrxCwVKZs1xKRYYW4up3Sg4VVdT9DLwXHoXyCCQpaBNGf98RuhjWm",
  "key13": "3cbkKYjJBAyPqH73LYLqoCF7abCeGyxWofEKssJar826LstiwBJrXGdxyYzqR81DBmqnXSEj3fKqWqq4EUV7QjKg",
  "key14": "3bTU8jebwtD1fccBUhGqwzi6Vas6ziae1SSeXuWSD1789K5vAvKKsicKd2NcwcZKR3HXEwKabk7f6LweUBvuv2ux",
  "key15": "3BYmhVRixiZ8aBASYkmzFYibsqCLv3zZRhQEZ7vyETiCTHZWZWn7nwA9RUF5VPtEN8miUEAhBid6hS6ifZvJDmMU",
  "key16": "9KMizXsYeeby3JvLm2vcsqPZngGTRJZenRQLdBM2vgGzoC6aYJ5RqQajqsREnuEbwtVyooj6WMMdL3DNSnNiX5U",
  "key17": "2sZ3iojeMNZMEzMi3Hc5FfkmFsgefVixbB9YcP1BdjnTygh3V5o74LtCEQ56SqDNUqiKedmKNJDtd92oUzKTCZRy",
  "key18": "GfjJbPLWsVLRX1FCXHBUGhXapr5zTuKRrnEHyWk2Qtjt6XEpEiuNnZ8oLPhYrgRDwAvmQMjUVRhbyPn4JH8N7V2",
  "key19": "5fCyAFTRE9vG2YFwoXxWxXBCMddyoX1tViUFa4BJFDY3xFM8XjpZSM5WpN2Rv3Z7KAYgqDnmXHS1PiVRg1KSrTka",
  "key20": "F39F4Nx1FnTWqKtyEPErPQuPt2F7rv8VAxtYk72FP26jzVPeeDX7ZyY1PWnn2SAFzm8TAX4p3A1YsJxzUvoTgDt",
  "key21": "yvQLjhVNyBDn5FLuoRQCcdGVityWbkKtKHxaJom9UXBRcWUXeRMuVrT3sH3T33KUYco7PaUH44zbCtRVtQEqLFA",
  "key22": "4LkZMZt5iE8hCjqCRCC5LEcd4WFoFa4Jy5bpc4BFgGRHctXvZFjYnybqipC4jUqu6Psq9Z36MjyLaYoZepjDkxq8",
  "key23": "yioUoNvD46kKFFY8Efiv9p5tqnvYB8GDYefdL1WforZYc6nUxi8sCe9Gr1K2QUGnamjiMELbFuj3JYU2bSdLqQj",
  "key24": "4pe38MqXLNB6JxxdYmwGpoJ1Qr1h6LKNM7C77DkNYexEzVCeejuPWiBr2DtorzTzur1LRgZUZpbFMJ1DjPdcnftE",
  "key25": "4D6BZyK9kPhehuFWcKK1wvuedcHZiNJSQLsGsGc44vEdfJszxPgADRi6aRpQgDi4SJYWzBXNWu5dj531786EM9PC",
  "key26": "3QpbMoEZBN7BbmSrFiTQFUiGy9uYRo2XCN2LiZ9PZwTqQuGT2mzoaxCxByY4SoSNtx6jbmRhNT2s2dtpansLwRCY",
  "key27": "5NiJvwgdRNu2pZDGZoTdpuL6YzHm4MwiH3yTM3WCJJaErw15VRsP9mKoX3iku6D6cGnB7BumDBxfv2NRKivdiF8M",
  "key28": "bUV98bmxT686pdEh75nap9W4y6nxSw6thNSm9ESLAw8nQ9rTRCY1jKezbywEPYceJiTPyPPN4pVT6THMY3kckK7",
  "key29": "4sY24d4xPifMPKCvYNudBpq9bXkC9vFNDzZMCy2Txr4nb9dqLFHsQir5be7DY48pfFcUs1pD481t3qUfWyVvi573",
  "key30": "2P4SR88wFvBscCaSc7syzmyHm9JykjwXBnVGTEs3u2fdAmT9h6jaWMTDMN1zuDqPcB2atDPihqUmythuyPrtaNbE",
  "key31": "8ocNvsajwDjvkXZ2wF4nN2AQ8jt5ELHv9dRqxtJsRSoWs8rf6XQh3WZq3RtcE6f42kMGjSn8QUneX2856rSs9bK",
  "key32": "4tiixT9J1ZMtUsofXo8PGAKBkoAoiAusm1GpcLG4PxVoeqQAHJWBuGqyG3sSgCs2vWzdqRgZt4DLTYiqfDcVz2hH",
  "key33": "261iRwqjT513qzK3htFKHJTGE82noBqeqaBjm3DTW6SUvMgGKMuWYD8Upwe4cv52Eg3z5yFMErkAUUn4HwFykUwr",
  "key34": "3wMJBrcohaugvD2E1CMyEVWCpvsHUkeJoM83qYGaEb9kfr3p3FSvsQK6as8cg5sT3wHE4NPbGKybnaeF4JwGfUqr",
  "key35": "rM7XwzqWwkmKRkMPJqK5kMPyFV1qxFSHuwLTSAjAPuBJYoUZ9pVBxVRk7fVvbktXmQFDgGEjRCGVUZhnaFwLWsu",
  "key36": "ESRhfr5L5vfdJmqXxmxV1DnZktTaLJaRJup5g9MG3gMqi3Qm9s9FpwmF7MnhzvKHz3Yuorppy1H7d2C2cy6dPqA",
  "key37": "4ph6h5nR5Bqh8UiQSHT84MkJnDwveVgNDEsT7SHki1C6tgcuog8bZtTppENyPxpejjMhh8xqYsrVTA7C5fHnAHeM"
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
