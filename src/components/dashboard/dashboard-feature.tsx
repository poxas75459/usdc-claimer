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
    "43gx1bKMuBA4Cs2EFxPNEinwN9aonN7zcPi4qpFugs2pvsAysM1U37nXpH6EG8CYzD41H1XZTdNY486bvgLQukKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UVGN12ahxpk9M99Ecth3RshxzhrtvN2DfRXzNUrtEH3N49GAijJZdtjMyKvpYLqiEL2QaFAeBDZYCkjJFdgXzH7",
  "key1": "2iRvt8X1RT3xQw9N8gdkRaRFAqDc6R6U7SDJPpmysV6eRowauTdGWC95927wxp26qsEW9K1r67byEB3Jbf9fLDTQ",
  "key2": "4RSzHW6ZSgXxkUFUt7LwCfzmQRRjdcGPaah32eQmgfm7xYmCt3td1ucrh9W8dgLFx2cbFKnMhPbbFbYW7WmCDRoR",
  "key3": "4rmHNyy4Diasgpaq3pEvPjnpvKW8JxNtbNAds1oCtjr6jUnYj6G19YNMgLZ8shPHEX27nEDNqUjAjkVa2bsNQixo",
  "key4": "2Q1k7GNP3thAqvS22kp8rJXuJXLBk4DETYLpyYuEfdBmGWDhfGRbwh7rv1t8TxFxtT7zfoxkjkaTQbqwZ4pKdNuU",
  "key5": "2z13ycND3dpL4Ej31kMshcfQr4Qh8pwahv526EMKRYgSri5NtyAtYP5JjHDUCoZGBKh9VgjNHkHKGMzDjocpbHSJ",
  "key6": "4KCuZBPGmHhR8iobkpWugVYH1fMhg5JrdjoK5kgyVDDMHu9LEQzP76YqmsxqRBvTpDDCtqYrqAogZpuzXWBdinXF",
  "key7": "2jDUEWwh6Uthd6K3cnu3CDZcA9Eu9zi64duhpKFXtW6Mrx3Q9nVNHb7BVD9YWS4mz6Y67SMnyQgpgWGPgnTrwnq",
  "key8": "5ybK9StLC39aH2zGESCzGCCuHTJSLeMi94tjCGcuV32KovReh8FrebymZ5D2YbdtmGrKcvQsi5KbYomsXhsztCtn",
  "key9": "rw1bacSpubn1sNfnyRwL2ZXpjSbxChWveWDunvjHVJChpWxTbk6JXE9aeghj16sFt1cCMg3bBey5kn4rywU9Pqj",
  "key10": "5gRi4eZjiDKtWkp8gHERq8NtNqi7CnwcifXWz3pmQ4Wb4oUpsFfxDyiJNo9DYU75v2gTzheksFjNwMQJzpwN3hgS",
  "key11": "4pNTuHt9He95j1HBX5ixAj8zpjAMSbYEJsjUgvpbCKLTmmi9Z3Vjdg4P1nD4CyQrQabn8ViAW3ernzfyNi8fteUN",
  "key12": "2XBzmXDSsDavA1iKzphcBDDNygZKQYGvd1bmbXr5B4Qtoc5HsNCdzV9bPi3aVUU8HgvyJUF7mymRGor4q6W5UKQb",
  "key13": "5vdk2HLjyi4CvcQZHH2AFbChwL7stLrkSciTr2vbb5Zf7ecHS3TAFMGHBJX1xhYWf3ZddPMPGkoNjn3MLEufP3BN",
  "key14": "293Jrn4d17PTiBEckRMbbU8NhDji8uGbbecd2szDqywdxXgBSTnAQv9BkP1vv7muSCh7iAHgKkoNBzUHEdfGdiUS",
  "key15": "5zLcd5YNEon3qNUznye9JoJUC3hqF9rTwwwpGysn8VeSNvzjGdzgCjGbdS6pHZ42PDT57GNFuMMDFNUV5mjQw1sC",
  "key16": "4mYqUGY5iD5BRHhVUrU7uFEfyEsKRtWaqWKSp1abBtcWB9hu827kmTMtXHfd1sv4bCCEvBaP1Fqf3eQahcV19Xcn",
  "key17": "3hiy32avU8duyrnTW2pxFzHDYsYMSPjWeNMYhjXfnQRtJtXPmekvkMm3EsnzeQJYUVxsxc9tQabWmS8dJdXi2k7F",
  "key18": "31HoZaAyMHmPo8MJDvuEycJVxYBFRgBDW99wQyzayJTD9hwBhMy98ng6dyeBdHwouZGp7kpra6jvFCFsoCtyw4X6",
  "key19": "DkDi1q9TtzDzYartuqGAZHgvvahBgDuBmnMmrVAsrr4H9TLzi7jtfo1hXivnJJoxz5LCmViEnGy1X4L6dxw4m4v",
  "key20": "4iNHZ5PMFfPDMDJ5vGJVWpng6aFGk3HM9QW6VaoTkj6KdEtJ4R8UkSXm7khT33WGMQLYCzCbPQi7HrvhyQkehY86",
  "key21": "3U8cayVZLHQVmNc29iUhnQrMiENtF7yzfYhYH6bCJLugM1Y4jbEnhmuXe9Sy17qcawv8ZH8X11KvgDjXVM9MzHNm",
  "key22": "3p4vrSkhRYe8YfVKjGQgvaPzxTtKrUCiztecFGBpJyg7mYTMEX5DvDQ1NavjCZCYyJzGsNsWUhTspNFryVMqf6Lg",
  "key23": "4ezsN12EoHVHspaaJXUcV34moFTqbmB6EVMCtjYbdwU23qQ9sRfT649iYNaft1rat83gSAeNEs22Z65iQofkqf7K",
  "key24": "5qthmuymmhnvSsyiBxtFoqtfecYymWPvLa7GGw7s37WmzfC3dmtsDSZPjqeBXy9ajjdceAkp553NV3geqfsibKNT",
  "key25": "4WiMzeLtybzdmHxGf9KLWw4guzMvNmZa6c392imNhqhnZHG1BeDT1zLdNfCGPQLtLypwe55RtS1Aezu4EJgqEBmU",
  "key26": "7PC5TFJZcRQeoJ8WZhToZq7m8KMnru3tVan6SQXXd9Kaf5nJ7yPUmnK27bxP7gWcYsmAyifYnWfz1wqW4DV1ihG",
  "key27": "6PnXDowp8n2QxBj4Uw5wjVjwhasmRskTDQUfkRFsopHobH3EzmbsGhmRNTVZDeDMPMYdm7FPqQx1kJigzgkkX1S",
  "key28": "4fAZELQXDYThmfEaUhGmakSrUrNWivLpVPYZABdWWnwfD1DEQN4qAvdgMPP13xGAyiHfJgELnHjqnoAtoakbj9Rc",
  "key29": "5Ee5mbrttrBEXjT23U3JLxMTuYg597XiUunNxQbEW9k57Q3wBwdkKpa4AmEzdaq6LRMb7wZHs1HDhrriSNRWLPkk",
  "key30": "2KTdZMNV3Fn8YzSHZQNF2Y2JxaUVcG9hcf4Dc6Vx4WgR15wNhRXczfNJC1xHcng9XtwkGnofQ6Prh27nTqEJ7KbH",
  "key31": "2xMydjVBZMuPmwwhoz9ebLndQE3cA5MhohuCYEabdj1hoWYBkgJqPnAGBsA9YBA59NFTufur1Sg6cd9k5WfPEcWy",
  "key32": "3nkxLaJszEwGMALZmGeDEzz9ugBD97UZZNj6heSFjS3L1YdzZtbCMejsmqafykPzRLdqihY8ksqAHzZBL8P3WPo3",
  "key33": "5yvvEM5tTQ3DEBTruKBjEHbYBYD9HAFH1afQqHKhqa7R7oz8poqh74RGirqaS4cTX9b9i4mkh85mqzYvZsi4qiJc",
  "key34": "t9ZZ64v82MAGq9UDYSXcNr1Trd34VhYoZBFP93Riizdjn1Wg2BCwEAbFapXvfagXLmxJjD5qyMxL66Vv5JE77ic",
  "key35": "ntTuFdf5R1M6NqCkMRGWsRJoPJPwatW5KFSeSor25hYQTr6h5rsgucdWz4RQqqe97ZMm96wokbgx6QUeM6dY1F6",
  "key36": "aCTYNoXHRtohWVi9ud2BMBiBMrWZ1nBePDoUS5MDTtRr5qY3Tfzs436i1ZvutPXC6tJrVyXcvxRfSxQSRdBetkc",
  "key37": "4fxKvwNwEFTg3YKZ83Ayz8JyEF7tgEFXeLGxN3F5YQCzz9PMoMcQzBYf4hFfNMfsVpUCQ9Tc7Q1VHtud8FLAuvrG",
  "key38": "NqwAf9j7FanhWN8MeBp5epSvYjiWTCrxsBHUfmCC7rkgp79fHmHdXiHfx5DgfVRessVNuWPqqyRYjVwSJbq4MXR",
  "key39": "4etizgxyFimFV4es2WEs1iQaksXwWF8xKqdZ1v3yJrWpnn4SifBzRpr7T1L1HcLb7NBKtx4DQt9kGa7NSgekUudc",
  "key40": "2hHGz7DeExZVej4wvxLadd5rLwqgKrqKjqVAkyKDJPY8R9ug9Q12Yxym3WbivcW4KBew2LR8ptTUZHGdq35xigzf",
  "key41": "2Q9twK98bSTD1g9ihFgE3fzbYTHhNkANZLJwDFfhZZ1jLpc6NGy38zqhjpgzH9y4TWKHkLodvtwgqtfaavr6HY8r"
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
