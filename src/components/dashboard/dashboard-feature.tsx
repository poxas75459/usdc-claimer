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
    "59ofY3f1A7fqZz9pCUxduqfoqVRdYuF6zUa7yP27yz5i7YPK6w1fKvfNceBBGgDRwtzayZAa7ok6CigEKDVXzWdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDPpmFMNWZ2DwR5Zz6HGZRUeoxECjL7pMZHfeJrNSoizqSsZaZZRYXFkB17RUqVBQsKz1pSpx7iQGGFJtiDVBME",
  "key1": "N5ucD9k9ZSFQ6xe1fMncVZSfj6ShaiCw4DFbneQozdWDgFhWGpCLgpGu1aXjkZ7j1rPYcduvTits1Qq1seh7DJU",
  "key2": "HT8Zeke2XaiJkJLiunbxRLtKWcm5oY4qHLeoe3wi92kusEB1VsueNMtVu4gf19mT8P5JBc6vCFN95fXXJJWwpMm",
  "key3": "3JVxioUtjuPAnZACnTGjxwKKuNYaeyegdMxjyNXroe5VBmPBGGGxV2p6QE9g5759gAfZ8cQFjcPmejcqCG5wUPeY",
  "key4": "55V7eNUo8gXwMQGyRdQRfjzG7tteqeK4248KFGkQrDKAxwB1PHXbz1PWRW4swKh3Cw4AgzgAjgwD4k8suaZykpop",
  "key5": "sSq381GfdGtu3aiSMmDh5SpsmWpEtxSJRb3waXWJKwpS6fHYZbzMuyxok3fMbzAMshbmvGubop7SQu6SK89uZtw",
  "key6": "2SMPxTuUACqKwhncek841Td5BkEh6GwQX9LDQYVhT7Dsz7GvetjtbLRgxWju3idSukPZqyfgm8HDsSLftUv4VeSM",
  "key7": "3ca45UBtufE2eVoN1wwbaD69dgDqFcSN6YGVmV2CC3whmA3buShPKCG1fDHWzZTW8DkHoF77TzdPf5nhFjfAn2HX",
  "key8": "qKRPZjmutPHyn7b4YTSmchYe3cvgdfUoH47mVqF4a6Ui7bdjciRCM8Cj4tbRdc4e1FRiwzyuYmesh5MA4kqGrXs",
  "key9": "31x7fcKbUV3Pd6iwTAbATsPLY5pgb4vLGx4wSzNmLhXko1BCXL2jxKypZ9yhadS7q6armnuMWCrc9e1qvjzV8ja5",
  "key10": "TjLykQAp1v26Et28dJDQcNkoHLWmdeiC3F42eiJnAMnRsD9otRyi73CQQ8ZvjecdSKPr2tnGjUwyS2VhKDAEFmj",
  "key11": "4i848dR9THeqHfpM5hYx5gUDpohmTKs37rnVgRDjawciDSatArZE4hCmYwnPjgiM9SEsCEHwXFNQ3D8M8v7xaKVk",
  "key12": "5VRBQuhNPASVvqdoi5fUix4dw9YVU7N5mvjrp2xGZnxZ4crGEmG5ijuYjWKFiuWcK4fPuDgcR4VyoKC1y5hwNjkG",
  "key13": "2j4n8emmgyB4ptFs6GXPRJj4nJgA2hUAuyHXvAn2t6Xim1AB5Bs3wB3iBwDxibtcrsE4MPjCEv9trTxoPWEfRNHH",
  "key14": "23miRvMwdWRj34JUpuQDNwVoPKcSq2gqps8A4c2wASgQoLx4m2XWLAGxKeoCzAGHgdhTbwVJC5CNQLAJDeJsxjMK",
  "key15": "5UAZB2H7jLVdr58eo4pSAiWtToBL4yQU3XKjEkh5JUAkoQhz4W7TgfQuuPeWnZoByaQMT7438uw4MgUDGVwv866W",
  "key16": "58phVd4SdNRNtYgkk7VSqeJ9AVo2WFfm4NLE3QSBJZWxhGcmUGCqBvss8CZNW45j1QTty6CdAsSLGvj6g5MwVBP",
  "key17": "57mXYk5VmCfF8UQFWbXzxNtefTHq2uyrLPZLT7SzABKQstWSrzJDLk7MJordaLQZgEZTdSJEoMAApcLbUC6vjD5u",
  "key18": "2p7Wa7qA7VQr9tk5YibVmxom8yY2tGV16JEqTRVgSjAwdYGhM9iX8wNdQhmVg4wGEzuZ3rpmjQDG2ycXdh7UzuSy",
  "key19": "b1B4VD2rEuttiL528fY6yhWLmeWZM17Dwf6d4uNqkXSD4fvQer5beCrKyEBQP2meqQggCdQxxFrJADAURLG9YA7",
  "key20": "33qN6HXKfkou1JSbnixu9crpyiwj7ATVV4YyiazurbXp4FmYWxbiziugRqgApmmAhvnEw7LFzyTZmSsEXZu1AcsK",
  "key21": "2pfwZ66YySCEtM1b85Nj5iTRScNYDvkYtZRcDMCXNcDe2Lekm4iaUTwsTEbrxiLBwbx9P7rZbpfdLUBfkUj4QHX1",
  "key22": "2xPq4hrw916P6uikPAmqNGBhTyXDJ7HBcyCLdpiRXLeqKXihtuJodG7a8fqYKU15Ru8yiu98BeEYu161FCu7rugj",
  "key23": "2CVVGGiNvqv5zA3HvR7W9v6qQijz2ptmVd3HBeTHyTLqy89TjxDEKyyVyCtAwV8Tiz1A5Nik7fUPH4Wc67LT7biF",
  "key24": "2EKw66Ya2P7NsnVMXES4H5HYUaTKLioHgeTfzXfKSLXRZNrQHnUjJPf27DMvT8T3VAmRisvqTTzf3f5bAUZUpnHP",
  "key25": "EuUkNenZaiKo6nNLvKXuUFnNWqUEhJFbnEQvF9eDRxmJzP8hBnTPrUvFkV7PPu77n1ioKbxwfMDhot5QPrbzj5e",
  "key26": "2e7muug3jXgNEveYRxqTbCBtGd9tiiT8Fuw4U2FEGZGfQZtSdUC6a9jrf8s9LfZtL1CPhpcKkpxe8ZaW9CEuNtv5",
  "key27": "4NfoA1CC4S3HXVr9oKxjFYExmx26nWCDEQiBnL1mD7gSwcG8C2uPUxdiogz1KSS4w2ZLXh8VWBp2tzdmmgz1v5CW",
  "key28": "4HUbWCEcGDTEUEfrNtwvdWxsraScUyZnXH9rhibXE5k9EVWCayByMda1uHVuSgRyybmi7Mryg3H6CQ2ubQapZR9Q",
  "key29": "4RZFjbTsxBoJT1KxxDf2WZW1BBwndGKvt7jDmzs91zqxsvFcpbrV5HVMSK1Pq182hGQgMNVrimsEttVJgbdHuoXD",
  "key30": "mPRPdDXiqK9YQ8oX9ohKDMFEt46rXNfD7UFGGNJGWTGF1C5gv4a5eovXGkS7sPCVGcRynzmLCKycRCmPi6SYzqr",
  "key31": "5XdnNim94KL1KtXM2sRkpT68Ew1CFy9X8EXPcn866D1ep5APGoPZeHfkDs691A377XJPyE9mavsnFQ9nxqvLX9D5",
  "key32": "5iHyLY2DaS7e7QXrkSeZBKguBE4ptYPTcXZaRuou5Naasj4r19ftKeTYMWQez3RCqg7UmExqUHj1yEcQnDkAwKkS",
  "key33": "5VpmFM48kYJFF2o8TpN7JGYSZBWHtuuG3Mf9te6t4McWPWngWpu4KjAWQcmr2AK9kpQb59ytRBpGzVLRmv8UEYo8",
  "key34": "28WFwg1b7MkKAgwTxbzrHW1eTzh1XuT7YfyLquToie3QfjU44LgTyRkGoQ8t6SrNaCnDtdRSQ4rv9fZqkZPT1Q9F",
  "key35": "4D4ZnDSthnjhppRJSDJ18VLPFh1zniEKd55kp4KS9GsPPTn1Q9sNrm5r8yMckV3PYVJsH3ZaDvFDkSTKkQwB3nao",
  "key36": "2rT3nFLF9tLZo8ydgDScmyxfWC9mW2j4W87x2fN8kcUfa2vA3r4KwQL8zMCQK4HeGmL43BbwQFJEGzuw1vvN7hmR",
  "key37": "5JEC5sCnSmjsm2CzEwPJuo5Edyvm56u4inS8RHfDkHvjurA8wJUmXtzXfJfZfAQ2FnGoyt5V7t1Tvvd1yNzJ9Swq",
  "key38": "2VKKgDCd49R2QVAAKvow2CbfMm8K4EzXaHhJwdhftQ2qs2Nat83MgcG5z9XzTCA45gFF9Vor2KVCzy4gk3oXXd4v",
  "key39": "6VQvuq6PWhPRfcEHxZd4FWYMUGhuKuNM9MAqhYpKyYfazBXuskNZCEBRrkSzzKyZz5NvYPTmtswuV1mWK6xwHWe",
  "key40": "3QxWKyt9BGo9u78HjDNvXHpvphyhYjhSLJpfqWoDJhqwvXvMyg53696KrJ39zYp2vqvHTUiXxYZQMQdPuk1RYqm2",
  "key41": "LkjmvPwHPgGkfSDkXgqEZxqwHhVhvNjcPd3twZ8XfgHrErPM5vNkByhsD18K4uKCeso6z8qXYkvMrseSrdWnJ84",
  "key42": "4R9RpLUaaocugjswnJEC12ud1VjkiNC51S9o6kccBkVUKhY3Do1rdhGXz221Nbua9JCkgvcV5wDh9dgVJC3NN82o",
  "key43": "4NoQwVUh5pJLFZXACwgsVwmXTNSSyYnsAwajAiEiQYNyoyC8jRaVZQhS6r7Zea3kezkXdwUGV6ke7w4tH1QcGqL8",
  "key44": "CFCaEEwMKpzFwWxgGNJ6ouNnL6XG3y34vDiv3XyJ7LCRXZgy7aHBxMJ5SakMJH7aFVxxZm7M7XtXskRbBQ7M8Nb",
  "key45": "4WXLDHGKMMchmztpmDTUvoWcHAb9tveNjKNC6vJRHxHHk3xqcXH1njHsnG1uoY5ADFo1MgeqybtiYb9LgjDhSnj2",
  "key46": "4BSvosiw23u7FCQjS55AV6hRygXCg9oPSi2vnTVgHUmLpWs9uH3Tb3gzgwyP8dNtCXwkTySPZqkKgca2XFxtd19",
  "key47": "51jK9EHrubKmM1nRcCVLUDbdTTGQHjgLMLCFteZSHFKqo1vw3Pu6zumfPzpVYMuGrjbDokuDpNMn7tD4hxipzu8C"
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
