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
    "2VuXchr8uG4PY9p9ZtM5FeBJ8dQp7ik2Qqm2R33dSsWPz3baVbwEaMZe6v2KoyJ3J57p8pGpbtJSukTWZ8G1sAhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28yBF8xwCRoecafTbiDnhYUT2Jj5smA6GmjVZYMncRFfdGe7X84GQDC1k3QEFz6cPu3pe7FTnWgxZqFgSyKXx7gr",
  "key1": "4rYdZqTz5ZxARdpFwdrZtne4gwUcDHtn84S8B5n57nqXHffj1f6wnScgP2UzhxzxNVs46LhX4zdrXMZytPjdmKrQ",
  "key2": "uo47LMfHNpZPC3j2TQCE1S1CTwXBkzbGq5W1hARDWgHhRPG1QqUqJDkQA6wYu2tgoKWyKeFgV1cVWKAsmQhiagn",
  "key3": "5jvks2t9XGCYMbGZGWMkUAt2C9G4PE6qrin2mHmGJa91pKEwUZU8A9bQ9HYXa9LSYVu8obsrAnS6va93jfmXn5pL",
  "key4": "3cKgs4WA5fnWppFpvqV2QUPWJi4uydAeks4kBWQLcBJzgYYK6BZPXgxFWgUZrVwWgXQ5vfDNLAz2hwpSpZxowmgN",
  "key5": "bSCRg5D95y8orRV4arv956DJ3y2H4bn1u21nM2YH7hGivLqfVX9VkacNuyFRbiMevgYVBubhyKDZgSj9ABNiAQU",
  "key6": "5fbMsc4CBGaUzKd1yNAqM4ddRaT9a4DWMf3psF7Zso4qcKSgqfFkfS3W6ZX5dzG3aCbT3q6ER7G1bkSk4D8yJ3w1",
  "key7": "5BCUt2PeFiDegcaG6BHMKYrLu7eBAGhHZiYUSYKheNMMFULhhdWWGkLff1QzdHgS2ZoSEZ5rroku1mnni4fzoKbq",
  "key8": "4QXKcZMUtUzguJF5Ty9V3CvY3T44oqKxxG4jbCT1mWC7TyoUZ1ZVdFecexwqnGgMbHvUaZeh7NJ462f8hFYDmV5m",
  "key9": "5qfw8umAJHVzseFEGw8pyg6VBiRsjFpwRwMPZgiKtR2tJoS96kjNy7xNgvTSkPhaw3HviL15e64PynT6TyZqUCDi",
  "key10": "uQqTtDuRPbv8PaMKNB5xK7K4RiswjsYVMWANbFDD9tr22dJAqdj256YeNmBecZnzFSxzdGzsjnJaqtuDJiYZzpc",
  "key11": "cYVqqPh5agBcjF3oaagDFcTCzxPGhJ9Y9zH6g5A5FG3z1aMXeiLZ7REhWs6mARmnuRcF7Hkn6d6YDHSFEr6YvtT",
  "key12": "4Q264tamdLwsxVFaG5nghaLrwSCbbejgQmRsWY94oB3yj7whh99Sp77oMBXCQ1wzeTW2nxK1TwTcmMadVw4qA3cG",
  "key13": "5aoJcwPtXHyBoQ2DF5krnmNZHM9Ai4y5j4QGdK1tW1FETPejfGoVoYh26U886X8SbjL2YeepSi3oRiCrWpTDR4Nw",
  "key14": "2bLGQv4yTHduU3aAUHzTabmmQKQpPgevWyVpKiJ6971797ggMJiX95icZmJR8QgQsAzaoTK1SeH2Cc6UXuif7SJz",
  "key15": "miFRTkLdbRw6FgVtdzB9PMuCgw1L7eduWA52nD6DuTrX2moZRZPGZye2xfcpdBvqKWqcrTHDNp8r3f4QBVX9CGW",
  "key16": "2HMNiJaiMUsGhQhiKAQ6aGMA5QsR1XmzuBccfawFs53Gy2Qqb7yjwK9kRF9zPywt4VJZtF4ZzUHc5Gawj5D8JvrM",
  "key17": "5qfrm4py4pEiWUb5bLqi5X1Pm1SHT65ryZrQhHodWrf3cbPkg8gxfhrZZBR8cx39CYpqXW6UxLop57Dwdnnke2WA",
  "key18": "25DFoTdDdH8aDwwTt1S3URmNAikXcviyT9esR2voKbw3CqX89kHKjsUoZNHtywEeuJERs2m1AjyRGRNUZ2UNgoXP",
  "key19": "HHuUzjbUmKaqUgTYZuD38nDgghuFN5s7p2m6NREskeewAzatp77WjVJQHncAFXck9fzps5jSK1wzDuBX9SDm4PL",
  "key20": "54f372EV8EvNY4gbqSHq4mwhJ98c6VXxvfNt5N6zAmJrdCGs1zzkHeG2Cgo5eu4TXtoiX2YcwBzoC1zVJpCDB84F",
  "key21": "5o1cW4apwiQGwUd8ht4zqy1sH7TnA2htWPyN5yoqFzVfyRzP2A4yjjGyrfgSs8SRqsU4Ndy9naDcC4ekWxvcWrzW",
  "key22": "6rdyDm1ZXCL2f8QonsPofm6F3iQwi34xia1JkJSYKGjo95wotM5zZp7Qs4QqrJwEh7xV6jAnbt2BF6eutEQ7uW3",
  "key23": "2hugC6pGbTA4JWXZzFZSzGDcpcWKVVPNRC7dcQaxJKMzhMaEugHmFmgFmez6YsX6vAdZFXoXKu6893GxHYQduKrB",
  "key24": "3nCYA6DqRRoe3QRHwVu9MGUap5wuV3HYUr8tb7xGn8wMb3cDPAKh1MoDB8d3Bw7g96PMUaUtnxxLkWidd1F6Lsfz",
  "key25": "2tAmnTGesz4Xc8RVjDVRmhoUQvFX5ud23HpvEy3MCoGGrDV7geEQrNH7xzw44J36EJ6d4pzkvaHgToqkRzXo8PDX",
  "key26": "47S2a5Q8RNUp8CZheye2Rt9vi8M78Cc14iNGmR6bTkitm8bH86aKedBHxxBDA1XqjdxerS8Ki2uHyMK8hPNfGjci",
  "key27": "67q3KSRJ2XPHvps7W5hGFnA7dcDxNzFrSYEp3WPU8tQx912hF3qHpaYSPEBUCxkyf9C7kXkmWxaHxmN9ohZmKTEp",
  "key28": "2wYkXADfAgaVs4GF3vhCzxeu2bnaffEu72VogkJHbh3AzvxoAb481SmNo8nVc8eMTK64Vk5ZDzvJjTLCfYbcUFXP",
  "key29": "2Ch6H4r273EHDdXe51V9wNPjXYrsMCwHNzMnGEJyMTTwSQcZcYGxeZ44JLmkSqdqmf2DE2psUwNr9Bj4vvzEyzNy",
  "key30": "3A4qyNhNUSjRnqUyLxNYn1j4ZApfq1AzgpYTwRAoC7nuiJxysPESWamtDrpUkLrVeW1TZT638r7iFWptZYYKAHrT",
  "key31": "3oK2dgc2f9msDkE8cf13wy47skmAM82AhzN5JHb7ZEY2tB1a76TfGk2ihYmnbf12Y6BG8m4pxiiGRJgv3yd5m1RG",
  "key32": "4HCnTqK6VB4MtytZAC1HSM13Bf8Zf82Lti5ZoYQ23xGXpBXjiTpzH4YtTcaDHVALfemjUetBLVncSEnSEKPz2B9D",
  "key33": "24iCBEs6Qy7LdeTbCeqcq9dQtDyFsYf5H6351HxZNWJB1YV7f8uExxHjdEygZ4LNpDzWYZ7Ne1uBN2yRLFsSTunB",
  "key34": "44C89DnWW6PZTdKpPoXGuupPPq863tzcyaLbR9CD6um8VwrXVtsTRQS177Qty9egPjTAuVrXmn7Dzd2iJHyJkPrP",
  "key35": "5mnsyebnyes6ybN6cM3JPooTSKMTLubJtP9FYEWC5KQ35g48m5xNdwk4D5Nqz7ZaRjeZ6Mr7BsqCHpiUvdoWbEZr",
  "key36": "36qrZqqhHbERdXaubGqEj5es5Jjqm7BpoM5V1ZEV5Guw2Qq1VbTF4N7rTQzRfsTYf8rH3fno8zHSq7HzxrTpFBVQ",
  "key37": "5Vyj8pffJrpKZCa3nzodTfobu26YAFST3hVCNPo2S7P9mGdj1dJ9bbzhq2D9BxChwRoZ7dPALjE2TyV2tZVMECMF",
  "key38": "5MxdjhSRasjGJU6p8YRQFVgZQcencxPWkBZRazEVonBttqum4oMGv1ZXvZRiRo4Xj9kSLy3MQJMWJdoVf1ZASLtQ",
  "key39": "2UbmJfCa7eguz1y1hMRQnzEj7dr3x1NfNGh9RNniKhjxMHBi7JfTduv3ydrW9ssYwTT13xyhBCWnBzAs3XMkJP78",
  "key40": "3CZ6tUDiRKSyckJbP6qeYm19pw9Qv4tsSF2sfqYhWAJADoTVepTYwLigBHxE1PJHJonaWaCuZyoM283QSUQ5FqKU",
  "key41": "XKgEWWFJkJhWMGxgtsRhEan3WoUU5C522Yt798SF2DsRvDBaKQxvwxmZJ5mErzHH3kwSTUqrJt7AzXJbYhsffPJ",
  "key42": "3YoSB5xi8fdoePi59QK7f8EsXMyZYCgfAn7BGvLx7UKarbHNSeo4tmCLUG3Cg4b5oPCssWvaeUZHHum3Fg4chC2s",
  "key43": "2ueZ6YobMCn3fHoBbwu5c8G3ERGD6fBr1HsA2wmKQW8GBxHxv7epSoR1m2ZfMPFaCPTtHErjX3zoE3ERMjZXQFu7",
  "key44": "2QhXWD6FDKhDvz2jhueNHv1LPZMLHV4ArzQSpWHXDWpUWMoZmD4QVKvbi9aNT1L6brxRGx9rQPLXUSUo4kAwXa35",
  "key45": "3FvCrRk87paUvXfo3HbAhfTyed9rpnKx4CWjd8X6x3jzTJFcaxEiYkfYncPqUJxYasBt67LiLBU2LRbe8e5UM6EN",
  "key46": "5fcMgHayKMFAiqX664cKQke1t2nQRHvXDYgUdmp9FXbqX87fCZqh8bnKigKePZ3uyozyHytjnsNwmiW5jLL7rotH",
  "key47": "59s7b4AhJJ4HRaZCH6XFwuZk8ekRUJKNiPARdYsoBDb47qAai13tVFStyEe9za9bhSho7NwKxfLrz1LXDjF4Kzr3"
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
