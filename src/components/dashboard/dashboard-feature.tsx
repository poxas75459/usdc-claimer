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
    "4Bygdc8jZmVgLiA3HGJpSFu6fLkXVQxrBygzuNAqFGEMrmAmfwmNKNWycSJY7GDrzEu9WhReVKDNEjfUSPvBiMsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQYAa4CBaPgQdTvK4G6gCf8Rb6GFa4kGCZKxTTc345Sb5NxdkZ8UMJySQG4PLeQHAQFWGHS6K64bZ4QLzjxsBoa",
  "key1": "472BtFgqGoi4umjDrkrnSawt1HrnhvNXVoeFhSgkjMrd3pmAKjbovfqNj6uCJ6ZvU2NM4YsEzRLYntLvqKZ8ysNb",
  "key2": "4MmoPxTyXESMseLhGUeM1HzzGikwCXhkMYg8QmTbCWG1S1fDxDYKKcL5UYQiAhEpfpc1iYECpmNKLndXPZbMteA3",
  "key3": "4KbCrZ3ycN8SzPtG2t2if6Z1LHWvMLSYCs1uhRVVss3gNJUpJqciinSA6Dhtg4ndjLAL7tRy8RGP1JKTYzayz5Zm",
  "key4": "5mQysWVAY2ovgERc9jUFVxmMhoguddYWmhFCTmwPtF1XabKoqcEW6uRXJtVGLmAc49cP2F2F6U35iA12Uu9CjZ5t",
  "key5": "32AuZ8gx66rRQ13iosdVt21NgqgUrJpGF4hf6gQ4PnXRyeXXARg79pWkBZMqn3Z8Rjx9c4sXSFeADw4xgXQ2zVss",
  "key6": "5FnYDmwm9FyJtbdAzRdeW7aSrgYKxUaeQUeej8UDnasPpQXFLLxbVqAhWu2F1jDQGZCzmz1euFRfkkQysPX9BxsK",
  "key7": "2rGPLs9QQtx4WLXSLUbnjVanWDa6HHjc9GAjTh16cox7pNy6zX2vftyMTYEBm5srLw4NFCGRtE5sYSUuTmmJz5c3",
  "key8": "2bgaVsZXNAA6fDsEsvd2yThnrmWgTaACB1kMneePinJiEJHKek3X7mQy9pxEftZ7Lo1Z8R7iPwqhsgBvYZyNdQ3g",
  "key9": "GPZ2QmjX4CL5a3u4iC4nKeANves3g6QqMhZC7JdAKT8DKKTNdpEFPQegLhAVqxgE3gVcyF9vjHk3PAzeNcWm815",
  "key10": "4tjsXf6rXdMeqoWiMzeH5CFQeU1d8CSGXeCQG4FPsyj4i9bVniQNhMjdHBJgaohKyzEHCNMswGdNp8NWtmcXjW7U",
  "key11": "2upvUdAC85z81jMTDjVPFhjsPYSADxdbpoFtMf97Y6hL8V8NL2QopY86KCtcYvv25o1b4zHBPEKwk7aKfr7JB9UL",
  "key12": "LDZXczPMdta6fpEiuRuiUvMZ7NhV8rMXuWDcFbt2dvYrQWZzjgfRCLEQ5EEQrkdQuLombt7zjAsv42sfBJEKQQu",
  "key13": "4ybnA5xxX4eGJdENHH3pBryz5Yhqyxo422oFFVwQAAjXehs91h8LEzazEYT2oxnMGK7GzJXcPbvjWcUNkjQ1kAwX",
  "key14": "3Bmuw5YUVTeW7m8uBcEpodPXDtV4GcvPokmUWiQbPrG99yb1idXCm3QkJeBWdVL6SvtHBE8SVNm3JAEZWCLyvEXv",
  "key15": "4JdTKa7mVpMuzjMRP1DAAyPJTmk1mTdSVdF2UgNMPfb8rbjrvF7CRRLNkSBjePQr6yhjAYGS1qr3x6Ek8C4usYGi",
  "key16": "47iWiffryYuBQejNsfXpb8pvvRKh5vnZ1KKT35oqtznYJAFaNHGLM2u15myt961HCGQbvzRP2Y7kMRYCmp7U9d5j",
  "key17": "4zGL3BiFUMKTFmnDX8N6suQ6dpt7fA66yaBmsgtfCjhCJ1VNmks2PNw7a3eaoJ9aAWfUpePzrTNxYdW76FuX7iqE",
  "key18": "4s2jYg6oJSaSAYynbpPEQzCue4rLe2WmA2vesQzLDCRybHkd11qMGycZL7dci79K4t59xJ9SMkiB5DJUfYmM2MpX",
  "key19": "22Kysx595N6kggHo8zQ3qazhQSyfQb9XAisqM9nti8AFfr1KXV1JvDow6WbP41mgTudsNye4dUmSqGt8cdEYVJHi",
  "key20": "3t8R64XZr3NW93oszaWcAcZHcti4qTA8qadFnAMFXA9TeMPtsatniodwhetF3U7LwBLnUDn5q5mZzPqoeQ191ChX",
  "key21": "eg2sfak94VDvAUdjazPD6EJTcDdxQpgUgH9QEQvN9hwHysSBpcCNdZK1NmMb5Fx1JtEdgniJedg3nGSSWLwg6Bz",
  "key22": "3EncR3mx9CMoUsLwwgHVuKaPXm7vWAhS9XQNyDQggcXr7Cn5SavtZqPgJVDGHiqbZtgq7mTKKir7S7LaS7zKyJi5",
  "key23": "2v1icLyqoBLwkr3ywnRH2F1B9T8tcxy7NLxEK5a8XYmk8cBZWUTmFiYQokfwmu2prZmBAjGcB8ztMEUJPKM1mdVN",
  "key24": "3oZdZPNGod6gi6o3LbrT4eGPzyucXhVGkP493aEpSo9PaQmm1r2CLBbdTx5UXEUfAvUiQZ2CgkGnu1Sp7WbvQfjH",
  "key25": "3uDeA6bo4SZMiyfzdw3motSqNBVjwRRChCipA6efSK3MpEnP3wk4eQxxd9YfNB6Zp2dob7g1jqFEz1TYdR6HDfF5",
  "key26": "3RzeZzzs5ZmW4pwX1gbUXk94TtUY6ES9afwL3uiXVfJbCGVtB9n6q34eANU9ZTWoGyZ4pmd7kRL5Br2hXTGrXHeg",
  "key27": "URCfJkT555REpDqTjGdA8GX3BQwf5YW6GNxLAo4k9iNg3BNo4BJPmHbygdSPi2bPvnCWffPGS47xtATn8VEQ7LT",
  "key28": "5sLuCEp72aQc5P7dFN4benjkGCkMKvVogxxLeBfcVc21EqX8QQtpPfxT3c7dGBztAqPFQ4p9BAZW2HP2gTGHkLLp",
  "key29": "4yvaoraWTKs2jGzAHyFzzdiodp8c4BE8JCga7a3q6xbyM58KbmUuDN4H61x9FrjKW3wTE4GhNRGbTJBETVbHtSW6",
  "key30": "3zERFVx54c7R2RExEcbP893YkKrWVXkBYvEvwucWCvLXAECQwjEhg4KoU1pbYkhaNFz8qCsq1Ed2hMm3nvNZ3Prw",
  "key31": "3fLiqeVMNUUoairr5zzTGx7D3hKNgFpBaQP33968RHepW1PyHmD8r1STfUPEfjUiTpjcxu1THtACmqJNv5TdhGi",
  "key32": "oSVEMERPuCswGf28VVAJzxKu4aoiQQB92gvHAcYHKxmFUPTsFAVhaNENWGkLwhdves3GJGsBQrQzgU7dVDYXBPd",
  "key33": "5GHYZJVcZvHWmjxLz1ctYwC6bj4bTieEqfNwEnUMxRpzHEytmhU6NBq5o3K85wvdLHxTDUzxGQQP4E1a9CTqyzJ9",
  "key34": "3ar57fMu78CqPjxNAHsV4bBYUJff54WmBHsT1GV34iB2MKiWkKpkuyMMGxkvp2Lq3tKcrijU93vxufDxt9T6sj5U",
  "key35": "4wPBWP7DBSBjaxMXD9EHKXgunLgmaCndTUw4Yt3skMKZiuBsZ1YmmNgokh5Jj2GYk4dVzr43P6voiPhqdNjZq6mn",
  "key36": "2kJZfyBjhJz5xvixojqFtG8M3XFdbN3zvdkVfhDRH2Hu9ejxe1AwaRaRQPV1jzpvrUfXTX5E5EZ4F4Pip6t2xF3Q",
  "key37": "4ysQxWGuB8ez4t6LftWd22FmVhwdFssySr7H25eyNhYu2isWtVZFG8Wukru6vMKYeCs3pCCW5iT9pZt7MJ12pvHB",
  "key38": "R6oSGYQhGMuMoPCcxV8HkBD86nnyzsGNR78M9svGSY75aUAjyAJecZzbR1jLw3R1R2gjxkptchUXAGSk5pv4j1z",
  "key39": "5MFtH7hqwh6VbjsUwD8f3R7X4pACFjdrKu3Zj7rb1XKWieugs3otYWCq42bKMDqdyX6c7jqBQAqg55xiz3riaEDa",
  "key40": "46UmxzLV58quhmsU78zcZ6FDtLR5SwAHvfkGyTCd59ap78h9ZiZGLg1tudPieYLrirdb93SLEsQ8GgvbKqkmKz2f",
  "key41": "375oFdrP8EksyKvT3MbB49j9zVL4KPX3XnicLCXeQM8ia3PXPeKj4XJN7G6fAvVtHa24kMstdTTXUet558MMwxt5",
  "key42": "3CXVFgPgx5qMJzh4ymj5wGnqJB6bEWQzC2JsqiYMGCFBzoHzPymdVMiLMRXG7DwnxrUwkc1ZT11kLokkPVxcE9UK",
  "key43": "5bu1z9RouFCeKRkNXmYkst1P7CpQguZZYqWRbZAZHLj7sa5Mfmqf9ecSLuiwU5CGsxULDbqxKtXiRe58xNE9AiE3",
  "key44": "jXk6H2uxuqSbBmF8pFfoFdhb2gJAW8oBqwVP4WkXJLHFsYsquYKYVno1yeuavUJqtHUeZutJpH7CvLMobS5cypj",
  "key45": "5Fk7Hws5jW4FqwqfSdr9oiH54jsppaB7s7w5THgyiMTLjVi8YcnNBdLE65p3dJ6T4zepGkk8bSaQbbFQweTqCLS6"
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
