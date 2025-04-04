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
    "3AXxyLrNGPSaw5KjmbhFTkYcoN2VxTMoG9AAK9Wunefkjij83BwLiqkymVi2CpxX8psm6sMfKpQQMBz2PM5cFUzb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GTsnafHhc3tUSMkJYcABoVRDqVj6wysFgimB4pzfEXvEA8Y78SN7bFFXnUc9wWwJptzVjuLYVtXChFQHyZvuRBR",
  "key1": "R7RDMKYZ89zSFWLPBSu3f2t8fHsLEh6rad16LJBmiDra5eFJav3DuQu9zG7t2ErDFJUYgDghXFYezd7RTZpxG6r",
  "key2": "5ZEuGLoTs7FdPDBuvR1zFGoKpFCcc9nEdSpNVjmVLTzsZ6C9q44f3v5qfPh9FUAiaL38bmMCg4QmNxoNerL9y4B2",
  "key3": "2iqCxtB1gJpvfV3AD4vYYgr3Mt5yJMBYp7n6L9JUQShSKMqmKrqdbJtwPkLdD9khWPjWWToYLU981yRkfKrzpSW4",
  "key4": "35rUr6s5MMmQ3kLB9xtXV4yiwMQ5KW5HMQED8WTyyuCqMf4WnhskkjYatoPWWNtM4bhLhfqu2rBNb9S4DnvcNuGh",
  "key5": "53Rz9rHNipBGN8JuKQSa6DuP611cQd29gB8UVGSrTRQbeLKkywQkm2W3FGwFXiC2PQ45Uoc6fRGG9rJbSh4DuLQX",
  "key6": "4wPtFhky2cUcqALQiAVa1BkHULNCSFp2Y4XjnCKNc9m7cGQU1TNiifaUAwwBKVbipbEHVdLV7NQLzdCcDYZNJK5x",
  "key7": "5dAQMTeAw4e7rjU5GQmA93fnTggvU9emtcdudgjmB8DaojmL9cukTmUkkZNJYgRsEu9p1UUKGy9Vn5EjMo4DaSBb",
  "key8": "5L8EjK5YYorbrFVjfZq7mSptGDhWcpJY76DWrZqDw81G7727gFtwC99TizVQdXWBA2nHdZEdJ6uFxTZatCPRut2",
  "key9": "4Jyjt29UGtwrAK3sgKU3pMZttghsWjjKFxuYBvwuVc9skuJFT2f4AaLksP3wDct57fByWxDMXPWkjJtu4uscPytm",
  "key10": "42Jb83jFvag7WVwSax1sjvvGnkTuF4Tn6dw7xsRA4fEccju8GiYZkbW95guwJbhvJPXmnRreeBeut5aSitd9uQsH",
  "key11": "4N2JA7EEdSNb8Ep1MjV9EmAFtMuTfJrXJhosBUJhjKMTUDrLtEmNREgVmKWVZ9EQqvaHhgixN1hL7uLm6D484HMY",
  "key12": "5RwmYW53Gu9bQxDKcPQvANGFDWhLqbfdZ6M9W2EwfyY2rBiA7V2GYzTEsqwth97ipmyBDz1SGQ6jY9h5tR1tdQeL",
  "key13": "3fYJ6UEL7LMB1asPPTd7baixKd8zyML74MjHMRCLJ6xdY9wLXBkEzUj9nsK9w8cuWGj3VftvmKUZXfTZNZyYuCmz",
  "key14": "2nvGo9WeMosa9Ls9DrkiuhaXYvfhLLxjx86FnBRcjJttZFnm1NqE7gUtt9UPCT9e5tAuZ8xYsgJpP9eFny28dAXx",
  "key15": "4M79ECNfr1nqiRPWU86nkhNTgvtu4rzV7iUBm4swdS5u8iStDWW38mddgy6WFPCccvjqTaa2UTaJSjqjAhQmP7yS",
  "key16": "eM4kgP91GeSgmUMAd6gY51MjYmSkbcoNkx77X5kpifu8kFJ4JBYKuMksMLqEu1JM5JFhP5vdg5UQBq3dUbqoPji",
  "key17": "2NuzSiPd4PeWvsfyrSQ6tTrCaKnkLQLqKMhN32WN2yU6WZwZ1XMA88f3Ys4BZHmyXesP4kenr5LCC3R8JgoTgW78",
  "key18": "5BAjstdGrvtMtDabd4pKd366RpTQTfipjgRkYck1wbdWCSHGzbGZkQcoBDZX8Hq9mk85BNCUXrH2eAVhcU45R3fD",
  "key19": "3YxRtwe8KvhRxoommxdmP98k2397LPery4mv66J5wcfVjo5RCvCQA9oJdf5HcRNS3iT1Kb6ip5KRw3BnvWXrdNnU",
  "key20": "3fgothszUbFfXwg8DTYXDtAVSyKJFk1YJUhycBwGydWu5xsYQdeQtPxC1F2go7zJPhcGmWJ5bCQFmxSyckgs4bmA",
  "key21": "Msvnc3Mee8B8jeFZpC4Udgqp7jdxYtFvMEGLFMFzdJg2XFdjNLUQQqVKoCtf8F12di2qnaABsqh2LL1cCNV8H3G",
  "key22": "5wsQdoUpsHuRypL56rpxmWwzapLXPMEVVMb2jvX8Fsayxite3gaZmoEUzen3Av94mYoY8UQVuo9tYNFZbEaUnQZU",
  "key23": "2Q6k1CUmcUWoTnhkwi5thkPapN9oDFczDoxGTJaGG6CifwcBAuuQcYQgxXh2X57CgbGCsJGq3HuDUUWwMhwjQufZ",
  "key24": "2aSzt3SNjzbXY5U9LWGPEidmECFdHq8Pur1FHazaevwizLQp1LtYuggwyXMbWNDfRubVqdufGNRJL9PTpd7LseLr",
  "key25": "ZV1K89Pjgsbcj3wpHeT6n6PS6W7WGk3Bnhrt1MqGpiHH4dsGPzNpErLMsQhpvvqqLhcNGzTk6YeGevuna2gCrRX",
  "key26": "Yx13iKMs2wh8DGPXVbCKHTsYAUGS9ARLvqhZTSuZKr3j3CFkwcYqE6vxR5JGcv3zYz69zrnWDRXFu4FvbpYonYJ",
  "key27": "4NrLPbJ7AMWe6nCDLWswcxAXv6du6f2qPtNBH4sePdzz98AMnhNJvaFv9g69whby6Qwm66RvRsr9WwxbCxJZvUEC",
  "key28": "3jM7pfUVcpKgmyCigGrhwkixypWKKueP4QQJN5NyJ1smS9u8RQdjRMWoTQe9ZwfhJeY6wDLUVXVv9vJsA89uTfxZ",
  "key29": "64cEQ8uPqjwxdCvJvkkygT7rGQjkEtrDRMAYNfwR6LuestJpggd9Eq8yVKKuSZTQKhiHgHBbVAKuN2Vx3SxYTonY",
  "key30": "3wbSdCkzkx3HsPmQdTPbPYueXADjJGhxrpKYRkZoa2QBDfYpfZiLmoFPVxjAz971jAsLrSAk3eYms9SbRT4LyekM",
  "key31": "36DtWA6fLRGuWb3ATQaQbYsYHrerJjUpSNjD9Vi3ZaXk1vLvUKKaPEmrXLoHcs6ztYtw7bwbTZRVvJ5Gdm6sQbs8",
  "key32": "4DrzLSJzSJ7brJX3vWn5SDNcRE2Nyf19pbA1LwMxPJuZ8vgeTaBnrhjzGcRMVaCQPEeSiBwYcuttuKV51xBtDqtP",
  "key33": "34NqgU7dNXkLqT5wkRKHa4STrpfDtmYg6wLt9ypbqXYsvA4PFj5dVdQHeTcEtmizwkkofPQojn6RoT6XzWHUyV2C",
  "key34": "4WdLKLHJkwoHHaiVEdc94tMBx7MhKGqerAMocLx81Ery57k35SiWyWL5hYf4dgUwqSxiyhnox3ViXBTj7CCwRc9d",
  "key35": "2ggkPHeZ1zGdzgEjRtuUHi9TTR111mSe5ggGNKvN15RYvVUz9R5QuXGFyoYp4jSd8eLCnDGjnhnHzV8ptVc4LxYR",
  "key36": "3t11fjKUWHPmeCWLi5KPprFXJSEmV32yxg8sh3tzsixmkZVQr2vmbUn98PeL5SJ4YnSMiQymW2rULGgPoYo7GJsq",
  "key37": "NwagdJMV6WYQMAZraujjasM5ihmoiNt7apijVhFnnya2kjWBEfii4xm5VLNzazmtd8KoHLYXmdGQbP1Yuizyi6u",
  "key38": "4yqN49TNmDM1RR3diU1cDvcisfhQggZAqadecrTTY7JRuggvG3r1fqJr2SfBvUBE5MFNe9TJQ5mADCcg6XnPMLgy",
  "key39": "2S5sHoGYuAE9Z8e5oi9rbzNhZsuYfZPGfwJTq93eUDcfxz7TUESFzbs69fJJpo6mjHF1yMoinUvCegs7u8og78mX",
  "key40": "5uUo4CHed2EBeFpbAepGrQ4U2EryFyhFMDaUVUvgoaNciA6gwkMGeVxFHSw8kkPax2WBMvnp2PxvaikHkJdumNxD",
  "key41": "3qUjz7F2rWm7mYsJ9Cim53Azhof9LvUtjYpzYtfGj5QRYHTEeFwqxNXsChzSvyfr9aAWjZ2DKcifpd69PJMNgohM",
  "key42": "3B6jTFvDfKarEZSpBHhKkwfEtrWkQR2c4TmNM1CoLAeukhxvNyc8TT7XwksfPbKUXpDE55Fpb5ZtCmw7Z9RxqyXr",
  "key43": "4VFrQEKZLcEigXrPezLmirqkSTZeSpL5vD9EdzwFQhz1Q55D7VfyMTdGL8vj9Djke5Zng6ZHMK9uTe8mQBWdgbJe",
  "key44": "3et349z9U6tLUfv3LKW8XMH6cPkAeFCwY986aJLewEVxZ58cNdwXCDjQf8y98tsY9Nwfdkmsi5iNqeBC5YwRetnJ"
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
