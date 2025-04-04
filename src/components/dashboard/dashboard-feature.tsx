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
    "4L6G8gjXfXKtzSEq3mwPRX1i6qAFeg3JPpTDzidBExZfWEa33WgAHqqxEa3MTWVMUuapLwiJLzN6mv6SjJt75qMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59QnsMHTMAp2bZzxbLj3agB9cAGn1iaoEWhoqQ4aX1jFS5kxo67zaSMddm7AUPDKH6yhPnok7ojZt6drKjDAZRmJ",
  "key1": "5r1SxGLyg2VG5f8PxxhEk3cd7aGKhTWovpZKuE4ddBcRgqL9HYhj4J2WPzhKLeb82SgRuKCRCaoTGXaBT18eLh4C",
  "key2": "3ghHth36WokhuNVULtYW3T6K8D73JE2V7yweGP7D47oMo5KvMFYN4NXVMDnBfnjUhcdKjJSvEA5Vwvf1WGKumtKH",
  "key3": "yKtLL4P56hqH4ySidqSZzvLR3zP719WHpgKuojcLRsYPSrxEoKnTJZLX28Xp3ZZLNvQBcVybuTb9SQc5m3wxv8t",
  "key4": "4Dmiq1U4sL9X65DHSWwWKpk16dKHydYZQsuGEQtgN11a3cekies9jxqt8oDxDyVRSL94m7gAzkysYRZSJ9QYtors",
  "key5": "5Mi4HZdf7yA5gJTzQ8hHMfY4NSAddanpp3Q6sdH6m9RMaidGaEb7GzaCvamwCDkjyoxaGaUCzdqxaCC447UR9h2R",
  "key6": "2fRvQ8AQFcTSqp1AJ1tXEiXd3Tm6xnTchHVS73Yi7oAFhkcFPKhAQTNum7CZzfYuggKc3RhTCcgyiQqL8xL2yiDu",
  "key7": "33qeXozsfVUzebnRDTN6xVqcB2jpc9X7oRqsnMnRvr7f4TkdSKj1MNkxfBJiPR98UtgfZfS6Bh3c5yxXyrnUVC76",
  "key8": "5dfpqju1r3TqdC2Fuvzj6CqaFxaynRMGeLWc48nqND6sCfoiVpecB5Pkiy4xGaVaGgAVP1NQWxeCTfP3b1ZvhZpP",
  "key9": "TxAUX47TqyoCcDu2gXSzdSCvVW8X41bXysAYB6n3Dp5x9XBccckgfvDUDJGpzsUZHk3jB8EFscGGytcErLAG9fy",
  "key10": "4PhKW1ynL5MoiFonk8bJSk3bx8BXsxLBkRKyTXsdNp3xsYor7fCfZU3mZ7CPbqHRJjmAKcxT3YxMrqzNe3E6iJLq",
  "key11": "5s5Lb5vYGRJ5tCm1L2HTeHDEgK5iJVQv9R1RDEknxezA93AJcdbj6x4YuYNtRM1n2A8c2ZkPBD2Tki6iVr4EQiNc",
  "key12": "QkHqFMqL7t4uUNZoAFymsEYmx4sRaVxpnVSa8hBrxe3Mgx9SNcDYKY1siU2cvDqvEgGk7BJr5TPNmxuutj9FkYw",
  "key13": "xZ8nXhcJ5EGhFykxNpC1EpzLVfq9kfNyJ8hppQEXYgpzzypHeFUkvygeKN1bY1eAAVnDdATzHDLi1GB2y5CunXt",
  "key14": "4CKX1rnQayVpmGehhX8X5F8UqXkD45msR8spgmWLdAiaSUUSK5tpDBswLwzxewkFsXm1TPFUKfap7CqFXWnCzDAg",
  "key15": "2C4GQY1zkqVEzjyBTo7kwXPDSLJbqVBtSWMduGuLXAPGN3v6v4V5jFXQAE4CLJeeC7yETo3nRvWyMWCYHJ5LqYuo",
  "key16": "48dQRE9cBRngUJm1mr8pDXdCq7oFUKad4UL8nAQNXhphbw9bLg9ok3Cn2y4chQNtBsHfaUkCB6UG2jLAjsRWCePF",
  "key17": "QyBLN8gStZk8A7kXaYsQ2RZCv9g9Ss91GZhniSuo5Di8DNyUWf4VnbCku95WdvoYW3GesjmmE8FVWSgijRgb576",
  "key18": "4tHMoShvJbtd8SwycHkVhzCDGm4MEu7qG2YPC8uWmUt7xBmao4txaesPKtnJzeBiyo93FQZTN6zT13y7wmb3KvMh",
  "key19": "5ML1HAukzMc9QnhSwHwbEG1rcHkwCgT3M8Rz4ze71h4mgfDCYTtdQmUvnYKBqXMrS93Q2W9ui957abZqghUaQKHx",
  "key20": "2TRs7kf2GHuuzYDyCsMCbKo6mshBKEZnYp3rFL1iXBEy6fXssdJkGjyUk6eEYmY7boF9BKLPtGJtydZMrXyrvHyC",
  "key21": "4vdJzzV3YruUyoiZ5GHrbWUqXtz3tvXvZdWR3LHWbwHB3xwYWDktJLHzaw1WXCaTKGGh68jvwQ6UFhoDZ5mnJcax",
  "key22": "5TpRXD7Ugrw9eAmBTqFahbki5KyxxuRTht62YEt6WiN8VpPWbpyRiPfiKagi6sHHBs9nypvQ9kPKJ5nAi3MwqKB5",
  "key23": "WZfW7aMQS5XG6FcPjhdc5bn1QaAbJ3i3788FhTpzjVwiR2MXaR1nZ73t8Wf22TCauQ1hgqAbtjnXiKCAuC7asax",
  "key24": "3nqgg4Bo2q89EoDgP2YqpefyyQvuauRpbMrMuGMk7RgnPCP85ZR4iNDAj3Y4Ci5YEYZq51vqTFjM2KDVLgoSWiCf",
  "key25": "43Z7mUivk9gucULBXBEpwo2NoFFWMz7JzrLNNCitZLfAmxGuTzcixqN264v12ndQCLbuF2Zgyn86riTVpdcp42ws",
  "key26": "5XGFHDs7YU87QA6ec6AtnpZ8ypKBqimW9aHs7yeKTq1hC5aDzVTUDqqnCKNSK5ApnCaDENsTUssg1syycZ7gf2QF",
  "key27": "3zS2ym1Z4Sq5LyC9gniw4h74HFMn5KCqXkV1dcVKqrz2jsxXzfCZ1WiZuq6tdU3z2kKKDV7uvukth7vThoh7YdNR",
  "key28": "26aVF3cGwzujKC6BSdDd5D7FT1QEvGX2aZG7xpWPLJKgoyf5Rb2UfrGh7NFHYa5pY8d6HJkcc6s4rc65fzryWuis",
  "key29": "3CcDVdAtNBbecXbcoUyYmV1MeyLrbRaWcY184sBCiZR9wWA4g7HGRPRmcyJqfXsL4ECn8xp98H199HTxjXGReuLE",
  "key30": "3q7Xd1kMGFFCxs459QToUqoMp3XUjSHZiE2kvZ3N9Zgae7tXKALpkmxmmuNL1aNrc5Axvq9dgsL99Gtsercu3Jrr",
  "key31": "2ady6DW9wSNCjwLNBhxpp8hksMvLYsDV49c7ruAGmB7sbFqJEoDWTTDkSK8PSd5JAX7cqTWixiYtrBmdDsNqjaZW",
  "key32": "4VaHAfyadqBgaDebS3KiMePT4AZ2PrX7oDT4ayZ1beUVC3TwFW82EXkZdRTsQKKdWrLuXPgHfFh7WF9BHb29iu1i",
  "key33": "3uWNpi4jgdhffp5E7L3sD6BeJFk7RG6q3YL9gbbt7dPVEBfLp81DDjH2oNUeiKLifvHBDBuL9foicGSNTmtjHqia",
  "key34": "iEoSDidu2qDGCHK8jBVUpjrKBpbMEpfbutoTbJyxN2WkCb2JRtYJqjzvXk7Qqk4cArdPuTdjda3DX83nHa9wdp8",
  "key35": "bF2Kyb9coeeXbUkGhQM8hB5jdQKDwHNptQTpy6YrGigSNYoRyJgN2GZESoYKzHr7faDxETeqovkeDN6uJRWqFX8",
  "key36": "3FWbAYqqk8rxDd4JqyHvx7C4rRjgDjTPQ8KpPQ2f6iBjmqELrXfYVGstFdWVD3NpG1uS4HVt5nB7vKkUmhKejeoq",
  "key37": "5bcpBVUoZ16S9ZK51KnyGWsXf3UVT6ZUYDrp9ZKau5Q8KewG3cSBJ2JxPc8kEfaEDRcz1Te6g3unFMbeYatMQJup",
  "key38": "5EeXwpUknFxYGk1PdoNVhdk5jE8dQQq9SRo1uXBMenkA3hB3ivXgQcZqkUBhAquqCW5wDJ8d4J99VA6J2BQS4ogC",
  "key39": "wS4ZtYJfq9gkdQjGa1VGk1fxJ1EJkeYXgz7UG3ZXNrNUUiCRS1gwDef82gKgbjLHiMqNTse3FqV5Rf6QmL3UE5t",
  "key40": "4BY3A1cnscjjnr8BoBy5URUe2AJbYwrQFmCTdgYAVjRw4W7fwoSAovbyzEZ9JAvFSs2Yru56Ubt2QSEbyffDHDDN",
  "key41": "2pYUgEFab63akVCFojXu4frZefNi48nTMu4STrnutWtsg4b9gG8kxmeTNAARrYzkbbk9gZ15uAbB3fZaXSMXAPGb",
  "key42": "WGfuEfFiMRF9MTsLCAf1cQKLhgJkpnAngZYtQyc5dBuPfDKhRbZiavnpHaMSMNpFg7ZW1xuKD3DuZDDjy3JV3tR",
  "key43": "67K7nsXKtjTjX7YPB16XCBM6y4Yy76z3Nt5f9oobNDYyeN5VbMb28xKv3Bs4XXu48BHtxMM83ZkvG2EuJzkxhvA",
  "key44": "5DrCXGDK2ag6cA9pMryFFcPp7aAzQk6dUj6aeLckiCnT5JzgbgMzTkq8G6NeMjnrbPAgGU4kQPUwLxV26tpm765s",
  "key45": "4RoMk46sELzv7a5sJhJ1b2F115RDrXaFnZSFmAFiEA3FCngsaLuR9nGtK1wroxEFFL26DJNECTX3QTKb1rz2K1NJ",
  "key46": "cLvTvzncMqobvtTzo5PD9PpCACWrnFE75ih43yvEnFoubBmcwQaPpk5J6o9pmoxuLaqCX97e5Sc4gcgYaU3WXHf",
  "key47": "4a4WF7VCHY883sw7pRPvRK1yrAMJCCkdMsRQ8QFw8LxxpVVvyQ8qpZ8WfTs8gMPQ6Zt3mAHczHEpARjt8RTV6bCT",
  "key48": "22xFY5hUEixR3Yeg2rUsiRsaM2TyKrXJQnWH4zwwdhicBqZoVVUqvSNWzPYBPtpuCpbrGojkUBzHumvt1nuZiNN2",
  "key49": "4hARNeY7E6wmnHdrN7BvbCn1dKZsBRzkY64Gm4cM1JycVg9qySwe7Rmf4uyX3jeVH9mSEtEE5UoSTVQqxJtvHCPV"
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
