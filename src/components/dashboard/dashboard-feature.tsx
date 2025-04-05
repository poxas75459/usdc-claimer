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
    "4VDCJTCS6f9JKvAqs3QKVsBSGfuqogGbEwRDHW8AuCmLhNWdrzSriibRSHUhnEgQCQUu56ReyAFre7f2ziiZ6RQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSZEVTPkLZuPviUJnWvFxCuaNtsH57CdoAqoD7NjvmuyZNBBFtCKXwa8vgYq71EhH1xn3kDPmSMZnLiuVZGxtXk",
  "key1": "ZSKNqqRPVAzxPEigrfWVZB4uuHLEaZxZJB3EYtfLbyw9c5Gpwgk9CkWgMP5t1R7P7kdRUKFR7pxPHV39iJ6Mwcq",
  "key2": "m7dytVg9KJJuw8QSCpEoqhPZxz1vGhNRdT6Aa91x8vjnHoFV7m2a4GUumZFeU8LfqAzU8intP5NrSSVZ3MLxyBg",
  "key3": "52Kfzcf5HShPjtoA6uizJ8XyLejo7AHrtRrw9wKzFFKEuBAjbkwBbWb8wv1naF5QtcJ8Sn1FYSjQbZdPPhQX6b9J",
  "key4": "3Ce8zNfUkKP3NaEEC2iyafKgYgkdSPd2JhfsiYv2uNyRCBrDMVwYBoamGsFH8Md3axmLDe4ghctzMJ7eY6KTovzA",
  "key5": "3w5hEM4tbh39oA3aT1RkoUDrm9jMEC6zPaiGxYuALbHaqVq9RYtRXpwixSXjUmNaJF5V1PzT8jrQ7YmEGHEGkCGQ",
  "key6": "4Ukz7nv8XDnZP1WkZsnWvMJujw2kGCVUe4f2YthKPGna7HEkb2r8ZMJ1sbrPnR6APk1HT7mw4wQiLnArAGteVHTt",
  "key7": "65nFQxtAkwNjTkTPzoSxAaDpXhNYkoEu9Uv3asZa9XziH9e82cNMgQbFfTG2peMmAsxDTkxmnmdtVwtRWxyF24Eb",
  "key8": "h72R2cPrF5JGbR3XHFsLzSbNCjB31nVzvPQk48XWwRLPTsL3jujtddK4mAi7miuyEwuLgkpbq4UKoGgYtXZdfET",
  "key9": "Ys2XHHP8cKBwE7KbJdq9PT5KeodtokBYW9SDYjSJN9h8kyGxCPvFMYh1nH8Kt6B9U5sGpxrZusdp9MLeVHc47SM",
  "key10": "2d2UnzZJT3ZnAEZnm3VJm91364uZEL1gGzto8gUvybRmxxWRc9esNiE7ZNoURuFSPckenhiTEfgGFjJZWYabh3Jp",
  "key11": "2oYahJaC67RCGvEaQiYUsY1m58sy2pEWbwBWraqwt7sTAnEgTxnTR1LR6npysPYkdbADbYJvM6r2dW3v5Dtho1Z6",
  "key12": "357EmetKgJ2w75qY9S5QiVhXSy3RXES3W5ne9fg5cgjgHEPJa8TnAKJseVEDr9rzcfVX3Nmu4KTTLXLzDzCxX82z",
  "key13": "5MigxWGv8Qwz5zajYaTQALr9FKE7EJB47qdy5Vkk5o5nXaRD4WQdCYegy8bAeVesqKcNihXqb1TS7LczGJ8zNqNa",
  "key14": "2MYUJRuAaqZvvyZC6hpKs1ADQcz9SzR6bYh6bRMUrZMTY2avgGpQTUwvVrEFVw8BjJexLp2BEpkHknvpwqAWkdsW",
  "key15": "2swwwHBrByTKVo4m2A2v3fgyeXGTU4D6evpERYBbakAMcLKV8uPbNgSfCyepFFL2QivUbonuNTjXKa2Z933ybBfG",
  "key16": "4p7h4go3pSp6rrEwhUnfTxkLrDm7f7RzoiQbs32ABtf6rZAztzoMWbGb91ZhzDUT5STGGxwprQ7SSW6omymW7b1c",
  "key17": "4j5a2ybkSz4JZUBEgQHkGGtDJRzx4YTadev9Atr76vJeWDvHk7aM3gCbPX7zkXd3ARh1qgM1HojPpfYANPbVqegc",
  "key18": "43FGnyCe6RVVVJWNhoKCHUP6H8pS8t2es3Wr2LqP5iVFQWtQUWhNmzTMrmmeKHR4cCbCEToemSv9noYWcqBAs7pp",
  "key19": "3H6oz9yAczjEjQXLuPPk8ajYBsGN7yTaGgpFoRLiqkgViPpCVH3Njqar44oadeJuC6NK2u2Jy3EFeuAJomCTYejh",
  "key20": "5KRno4ekXwuNGHxCWpNXxw646j8dphjNCy29DWouWFVQqgAyG2Ar9BHvugLL2egAsqg1uTui7TeaVHXSGv7syryg",
  "key21": "4VvHg2PbgWRiZB5qmkmpTkzq4ZjNeQpApPEHcymVCbbzBUPtboRkcasStR5AuCr6uyYa8MdEPr2WhDWfM9y7FM4",
  "key22": "4E1PKaRVBqPq4iK1k2JH1WpVWgG39oFc1ZPzj9PKaV6iRrvNyakye7kDZ1tPs4qhDpZWQGUi2BDmmJ6uoMGwX8PX",
  "key23": "4WSxpwYo9MAYnscJ1wRBEUrRcT9mSjfpP5W7Bw45MaJBgkqpFHsRsuiYfDNowmvrYBweRp2N5cxXSA3vY3fFVkEf",
  "key24": "5gB9iHLrkgzksuSR72xGGmfDy99No62rWY7tD1CNsA6NVu4zhaRbWEB2focuwF7g9vMgYxmqHKfTib7XfriUqFWg",
  "key25": "4hghdK1vukUKVuQvW8BNsrVeJegnFiqFE5MqCQipAdSegVpEHDWFni5iw9JroujoKB2i3JMgKSiSUgHdY5pWbnVs",
  "key26": "pWvi1g17tXNA1NzeUcpKyS1AC3MihUQEK9NEJJPVGD2ym1irnspJS9ZLcqM4abVkhxbK7K9g9nLdZLkTQvZBk4c",
  "key27": "4xAVAzv3uUYvfqtDEzUvhvszCU2UfaQcVZCsyreo3au8RLk3csNYunoJ1DFtrArhgSJxX6atoLYcxtif9jz3SZjB",
  "key28": "XJ5CzSuHefDyrsYDn5MacDWhMWuQetjbXbBVjKdtWWUoG7maJoLJwdsipBdfs3FgYRAxkac7Rzc79tuHEJviSUp",
  "key29": "4MRrheWrJc2wHKpFntnVmS6iqGHgYpfz4EjJSyvTynVxg9y2SpNFZLhEgNHTcNfwtcpKRi7DoXtqxv5YwQ9hmaXf",
  "key30": "2EfLXQhKeE2A1HAFyd25EoHUAWdkay7zTG1axFY9pBoaQe4Z4AGFS7DyGZ4pWcf2E6b1QJCgNGaqxxhNMoKTmECh",
  "key31": "5cynMD3WAd5ZQzz6YrXur5z7kUBtmbSXqs5zxC2V6krGQy9ufdkmfQge2jQk2s8RdTSED1yGBo1RbxGTTEMGKuTX",
  "key32": "5enx9mEDgXTu33Bxene2GpjppMqiwHd3BjEFHtnvDtCRJvuoDL8Ug3oxR2AQPQp6GXHVJaFMb6nVkcNMZYVon8Js",
  "key33": "GNjpo41Tqq81pc6hxZem18ZFrcW66Lwp6oXcirGkadiZL4zfKn4VjxqfVW4PAJDjMYTrw3A2Ndzr6mBhLWSGBxe",
  "key34": "32HrFvi2L3voJ2XuWRs6Br9kbRhS6bgxYb6DtzzV5FFGjnEvafo6XNYF4pAJv3JgFXD9pF7KLwqGvkn8rocb6VWK",
  "key35": "vxVP8BY5e9Q6jyWZof1dnrW49sbJmvSctVrTdEKyRSM6rw1aXkG7bWevpnJiH16pki7ggZhFTUxD61wM8hjd929",
  "key36": "2c6rW9VhdcQyofrjEyHxQzFTECn5Cx5bwJbyEmrAX64VPatCN1Pirey8VKcmYwR7aAer9jvqeWjPJSpofajkdFdb",
  "key37": "k6L42DSz8UmBpes7Yo8tiEiaUJxL71nLejVr2HxTBqZHQv2yFcraDLijF56j7TUzmpmAC7X914yX6mqKGgj5iRX",
  "key38": "3nhsxzsqNZQE1Q31nmZ2CHs6gMvij7okjn3free46gYcSCSe6FE19sE1caCRfyzgKVWrcJGyJao3v98pZu33AXAb",
  "key39": "rJXJSVXK7HnAsZFS3wsrXFTHBjdTgrZtVGPu2QzpmHBXhbqahnTz4eXugQGyRSkUu4R9PksFsvMbg7SDrDBtcLx",
  "key40": "5uGFWCriyS9jAYuVBFS1gks23PFCiYnu7mKX8z36uzuVva3Z9HrLSSQGNSyx4PFDV2p7xsEbUJjXWwmH46mhCbgt",
  "key41": "2eszVRJCnQJUnawmV8VqdrvTeenumSvuUJ2vb42YPuAckjyzTJDVvUibvFpWAq7wJWxRVWkFkzpBQqS9YV7ZaHqb",
  "key42": "GccQhT1VhxC4iQX6fgbYAn41i21m8NirgsDhXSozXhg6wAQzHLCZyabGoeNLiNpfWRgnFhVFYtVGa79qNGW4WAU",
  "key43": "3DSWwKKxcYz3ejQTjkBQpGE1raSWqP1kt7W5GnfscE2fLdiW8Di65f8DKcCtAbgutvw3fcK4Wke8i4iJYZspWLCe"
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
