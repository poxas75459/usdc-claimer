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
    "3y9cYwSq5ifYcw2T6Z5aKTVhUq8Q2NrhbprUoZQMWXCWKa14iN9w6CvdXWXqaR7o6T25UFv13c3d4t1pTAdqM7JC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fadesZfticeXqPbYV3Nh2zf8w2FB7m6z33Cd5v2RxhYzAWiWYia5LtzeJNvgtjVwr2msFMUmPN72tWtJqWDU4i5",
  "key1": "3Cg3B1LziYGmy4VXUPMJwcufdiAKTfHieqQcU6kF8yYjDwNJD4ZALzwtnSDtEGCcbiutFW4ZXRTQTGSbzb1r1ZHm",
  "key2": "2KM9DnZGLZfykHFaWTNCeH6YQoATQMBj4DDYiTdSZPWuMyCTNgf5hgcDqi43naGF711wZ2SFtH36gUc4JqVVgJFd",
  "key3": "EYGQEk58opUiDPZLQ7xL4uJPKG6ZSnEMFSALuQAbrzgmPiM4ihmjGApSrq82dTcDWZWgQpdyZjdhi8h8oMXX7Lu",
  "key4": "3A96PiyrthVwjF4rVksh9VFxyqLzZaeD328mNfcxMB2AUbqsPTUQc6CNTjpUh9WNeVxQyyGFKiLCiPGSAkoedtEr",
  "key5": "4oS6RuyuP6SL9XCmwTyzZR5ynGwbrnyMcb1pbfUoN9NCYL345AaN6id39f4q9DfewQ9XRkzwzrW6tzeAyGhC6ejH",
  "key6": "4NGgtQZXaqwFL6yLWndyQVW9VPaW2UDuDEi9RZhzR62pV4u6dtZWjiRrJTVf4W4VNstc2m1KkrPgHWQRkekgbvyH",
  "key7": "4yNKZxUa7xQSUJP22FySMBkL2PrFU3u3m6JtQEZurvmgHU99HmwiwtRzzT17M4XW3vTEY2Zj33FtVrQqcjH5W3dP",
  "key8": "5H1YL3834xqTRJyjUsUaBr9E3v1a31a3EzrgWs5xTX26w5iSb6m4iAWq1D8H8o25T5UzxGPDHcY6nBqJVa59P232",
  "key9": "3BpGx2JrsBjMhEpBSzAWetUUXPK6GqsjHm35QXTZLcQMrVAXAu5BPJeUUSSzNwoJgfJPhVnRLAaxaWBYbka7HUbm",
  "key10": "3wbN93vSAjWvhj1VJN7CRi9hTs3YZTQ11QKB3h4Y8L396bZnJAUnYjymdz12HvdkaB3smtTait7uzgHeqZDvSpjP",
  "key11": "oXiKRn2LeAVqdnHqwsKpokSA4Zqz3ncdHb6TVZhLJBPZFo3Ufa1VwnkBNwfxi2EpfyXPo43yfuBZDYJyGgsFp6P",
  "key12": "osiPmmPzpYpSXVHDKSSMZ7Yr5fQN7886V58fsyc2ktnfVq4L4MEBpszCHKioZPgc6QLHTFjztxSr8uG3G71wsey",
  "key13": "3HHtpftzVqmgXeDFu365NUnzEZMLfJPFY6in1xySWB41ZM6hL4AYKYtK7wuJnMB1MV2oRHaZicbSTeP1ag5dA4fT",
  "key14": "2RhdcvM2NoLdSakn129n9jVLnQUfPJdQnud1BNuTFZqA89BA5yiSpfBHfr2iBGZYjZNgX8QHq5zF6WKez4eAoXqx",
  "key15": "4M11gPD51ngViQL9394rQFF5zvvAS4r28AY8BAmAra5mUuDshTyXWjUDNCwJXZeHffJewL6xivmEUBTeNp1RkwKC",
  "key16": "2bjTPs7WWaE9YNq9sc9dPHnhRZ17m8E4fzctaDUWd18W8TuQWTU9zkZDQZ36Yh5Akd2g1u8PUFRJBuAU38fECJCx",
  "key17": "4BAMaAr7NuDvfRrQPR6kqxGJ3uo2RpR3FazQ2W1JdjUQ1aQxenyoj4rPybMWvennAb6Nrsxd7TU3vKnk1ZrQkVnz",
  "key18": "5zBdeL1H3XkaexiKCG9k8rGqbhqiQMXwoybMkhYc3s6f8wugcvuhjgaebXe4ffEEJwKsEaQAXGWFKp86T4MbSKTS",
  "key19": "514qX83X8Vmtnk77frhP3nqDLkZDJDJoY1muY377BDqKRgg3fFfDKrZ9WpbeYg2TiCc9Ek8GoS4U9VSEpkqw21JV",
  "key20": "4vvHKPUL5x1MnzL3SrKdK8ZR8TpvvJZSJa9dBf3tg5m5YcWovmm55J14EJUTqJYUt3fSYJ9PJvNedooWmj3dat2V",
  "key21": "5HrWNVPDTw9cewgRUoFCgeA3H5srBo6iyeBuqA9WKin5XUSBkzz1hfms3EftoLryAzy2nQYSaN3xPdWczttwvauT",
  "key22": "HBeATCmMYAJMoHveYAuYrvrmqeeTpadPmwLKMezTo3rQZmQBqUP666HkmKFZ8j8jdifqNJogiX7SediYEAEt7MN",
  "key23": "2ST1Fm37j36B13C8DVsv1KFaj6zQt98QtLdr5B4SJgw46BLjscugN4hfHN11FiRXv3qS6DYBrgsrNcfF8D4wu6Me",
  "key24": "2FnGUSsf6pfjhz5HUDnjMoHthXdEdf2G9gVqJWKSzvDt5opRn4iFoZsfRBNf3QuBUmEw8xX7nFmHgR7vE8nMG3vT",
  "key25": "43C7CiDKFEcqWxhWbtV3YtaMFRLL4Cg9KJJMvzNZ4tCMWte9kXaEUo3BGPx7Dfy53AFNRe6eGjNZ4K5zGwsG6vQZ",
  "key26": "fcntZjioYYRmRSJbbuKWXEx9jCsUiuScX2VworqC1wyAsNhSdEeGFfeQP3jeZYuHrZk96UJcr3QLxBJNWFU5DpS",
  "key27": "3ZdXL1kCAU1JwA3JpKoLwUrm7omdm5kfvTPyFHZyYBay2fFYCPLCEPvcBXLjHbJ9jDhPdDR5dCUbmwRdhdsaHzGC",
  "key28": "39Zt5h55WmYpNHatE7MgU8uN71sM7TqYPsqYUt1txRY8JDUmKfFzuSm4X1i13YB7fZZSoTG2XB8rATKQRsChyni9",
  "key29": "3aAgJJDVH4KdpSE3AsJCkahiw5b1ojrsLVj2AFqeqbRvxU33Cr4Co9XQ4YDYCEC3hcNfpkgsooSr3JZTtSwfCybK",
  "key30": "4YfE2Bq4d7xFhMdDXCnQcK68Z4ovA85xorSev1dHvAARN4YLhxNmiJA4cvxznm8P9fBwgoDHVH1wwZuRtnaLjeHV",
  "key31": "2tNCtnaSmCeEvE7M68aFJ8nDG25tmfxjodZs6g8HEQ4y56tNaNq1Ly1JysUDM8CXfwTBAdz5WRHmMvMniiwmmQYA",
  "key32": "33cQ49PCsXZwHsqmjqrkjH6WRPi7nKeGR8ZvvUDhQXKzDFwC5LfB8Bc3kuBx9B8M5vgWKT8hD8F6Z89mf24X6oS4",
  "key33": "3Qhi48jgvTBRbGRiBE5dLGEemMACqo8KSmYAXojAYLPeaWyFF4QiEbBX5bdCNrEsKUQiCR5bJgytxmJRMvEqebU2",
  "key34": "3ysqU3EM2mWGBH9dUFhwYvWYq9NQxjWeTK3M95Gz8QmR8KAtZ5vkuLvJXBxYByYhVDHnCgTEEn2qHuVLRTm3gHzR",
  "key35": "6RcmjWE8Jj9Pu66jDEcpbAzDPzLSpfvpji269RcFJvgbas3m4UqpFTgJBHMfxynaEL1tV7JiwWPjrw6TUTiptKi",
  "key36": "56JBZX6mRFXq11vfk6rvWm2pFKkcsBUh1pMJJQ1oJRff1wGZU1zxBP7fBmqT7TgzHnx3wB6BhQYynKGT2rzMn77i",
  "key37": "3SdDpcoy5aogFeeu7n4G4gAPqRqwYrC6B4uV3RMHjrHEkxUN416qiDwcPDGkLN9rDXNo1jtwvXykDqcfLaFSmqxW",
  "key38": "66kSeq631qAhzH9ono1fMpFAHHbUn7maKmyrASZHXFWTyVGjuQRrZPobeMHSVtr8YKRrhQik98WBKs3yz4MHNMus",
  "key39": "5bM655LYdXskuLw4skQVWRv6A8g4oLvPcoFreU5wyRL9zazKjEMZqBe7PnbdMk7rZMSGHbwWRi9PtzdaLYejY9gX",
  "key40": "5XVpy36iLdHTfpiWR9iqThrJ22aoBHs8nA39jyjQqSzKK3z6QCNH6V5vynPARLiCjPDj5JjtyYQAF4QXi1pWqMFW",
  "key41": "3JvYNaDpgafuK4QdLUszKa27hyJb5GsXkwbUy3uMoZSHniRoBmoB1NAGt16GEuCxsDgRRbCpUm8HVspbCQKPXvoZ"
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
