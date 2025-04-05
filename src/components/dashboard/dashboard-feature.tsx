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
    "21EXQ4u334dYnRBZ5Gc5dxhGytM4AvexvRA8MMqcZhX3FgXUzYawCj3aZM97Qb1LnfgerZF7tPnPk9TpzU8ynt66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "618RKpukUzsVRNdeXn52EmK1pHHDCbNQyjhVoJaVxYhmSQeQ8a13vE5GuzRy666to8A4EZmhLYKNXPK1MzWiFUdm",
  "key1": "4a9M7RqZeBLyFjCq7kTayqA5V75AdqdSabW3RWDP4qm5VSh6C1FrgfZ3rRC3h2ogmjfgpZkvwKGhTEubZnCusnDg",
  "key2": "5dYQAmfSXQcGZiq2RSrS4u4Tfme9ToYWVB6yYKLGisfCrUFizDscv1kuePVEdRVvihnJnNxLuVsrL96z3XKQfpAr",
  "key3": "4x9h2FHECvsgvSd1fT3VMDNgHbT4gvtQMxFteUYb8Wra4i1uxPWNPEGxNUWQgZbntronQtmvXpsGV84zGm1gbUYj",
  "key4": "4FumgcABLEkZLMWg2wEs8tafu4gcdAYrJJCWPhraAA33CTEhTGgmpZnYnFiZj9V2onifreEMLr63p9BdGidUXzBU",
  "key5": "33qa4nicyakfFd254Zv1xCwJDos1NtvtCp4ETqkcXre9saLrVP1MztKb8N3QCyEeKjMifuFvzWQe6DfftoyiaKVD",
  "key6": "bfXKmboEZXKAXA46wBQujzRtxYQTZHBU3E3N6BJS5v3nbh9RnVkL3F78pxTcwhDVvkqnxC7VEubJYgTkB6vwy3V",
  "key7": "kcUbVCnc1ogpP4RYwjYSGW3c3pu5SaaMqQWKjSba1K7PJWBUyJmLQpSxcHkvrpW8RiyervSJ2XLHsBYxZbBp5uc",
  "key8": "3bn9sM7wcUHeN6YaB6kL6nCDxVFHPQ3Zywx3Dgr8hy3bNfhHifsv2wYkQrC1C7un53xZ5iV3kv9wAXzXUVuCUzuP",
  "key9": "3VcRvL2trtPxK9gUxPDTTumPYqF4nZpzzua9To7ydrzBSWo66xrGUkQZEQZKq86i5N4VFtuJt1ubxrLyBFChut6x",
  "key10": "2xE8oJ5KvTPA7N3arUakjPVL5v6cmzUoyJf739vbaZzXoNm6vkd6UPpWQrLBCFdm63XUZLxj5tPm5oWVhWtD7CqL",
  "key11": "3jfen25YEf71bYQ2aPRB6oHabSZ1sLcvkq3BxG3EhdU3x6ypHnAqzXeGFBohmX18yameadA7bBYebnYNEqjmLSsX",
  "key12": "3mWML1yfq99WDPuhYwR4azhmTCo8s2eqh1KD7Mmfa4oWYMKpPDBA8B9bBSLFE2oczeTpJAP76ewz9PSTdovQiVgy",
  "key13": "73vphYrZ3kQ37LPc3AR76P4pV14jkR8ZruQShWoizsbVNQeaNB561nWJqkURa74hGibeAieKZzDF4bLEbiTKwbj",
  "key14": "2eoNoABrujpN7iyaJHqMmwv78jVJJMKHMpSpyWkgVZx3yvt17EvS827PL7KZGFSmS7d5gYjwcJoJTzYyw9sFbyng",
  "key15": "5EZXYdCx5nW17LNk6RG9KNQwGnBNVTFhpzJMyR8x8kErpmT4KYsJv298h9WqfiEq6JX6vGZrnvL6th76CP11Z7FX",
  "key16": "2an34hARpi5YwZNd4ACMyWTWaXT5Ae4h8Ti4saTBmFMYvw1tteBZ2XCzUsEqg8uFEqgCyUgS1x2AoF85uCMj44BP",
  "key17": "fQ5vNP7PC8uySvtK5a1fSWSHooJjnrySsRzfi3tg5Mz2u5AwiF6zXdUyM394LG2zEom45dYEbVbh2N3cWEpS8a1",
  "key18": "5CUzB5goGwELGKraJFcZMr9hpKbVzjQtrgvUwZEQCRQ1ktKNNXimcsw6smMsTQbTrrMMXYqTo7R6Ta9b8GVRqbjU",
  "key19": "5XdbQ293yb7AYbRVH8isBRc16tV4okc1qv2poNmyNtYA4QXUf3XEdX846WnN91mX48JeQ6Na2PFG42HsYzzUWtsG",
  "key20": "6417HMgw8zebz5ZP3qCpEdQpwwBKBtab7zJDJemfBuFZVNUVDDtmCgyCb2pC1AZWc84jguBLdHHNvrTTLewCjRYF",
  "key21": "3V253DBiZJWz7gps9hQREoJBQjgdVozeGzPBTqY9Dy2HihhGN9SQatrGESwhhjw3QSoTzwAT4pm3LsAQrUBFW6TS",
  "key22": "51B4xmJXXWAYbzbfocnCkUJo6MuiF2zNxpykVzYABBGZzXb9kwR3UcEdqVTZXDRCRD6HzBus41JTBHCHF2BpecV8",
  "key23": "Bepo3vttEf8US2H9iuvsHLPJbGsyZbXTom5ybFcez288sAmsVczfJW4uuKQY7PeVP5nZMgpJek5SBqLkomAVe2X",
  "key24": "63zuwnz6moGXiiDgw9bLygyyAsqcp7ZhhpDCawb6EdZXgxmpDeXHG5Xgz8XwJrTjAhLfysAwyTEnGFqMKw2xswUR",
  "key25": "5V3KhnjbsAJ6nbYUqKnrHyKCcKaEUYiMU1u4yW8qv89ETE8zD9pCfSvyqtSJhxAWzbGv7sTijDaGsP1jpmChXC4V",
  "key26": "nGFdDHXCdYp9uPdLbvfqKaQx35tfFho3AZ9t8GMPw8PaDtByn5LJzA63YJ5dccNWkDK57akTb4UBNHroHAE3XQH",
  "key27": "3LakUdhYTyewbhCDCYUaAMq7AjKuSRsLCCB11T36V6r3bwdxHDeKEBemQT3Vh7bc9r7kNBVvsQdwy1XccaREj8NF",
  "key28": "255XUDgdj8cC5bgteE7b7ANbuT1kARGtZAyXDkNTmLe6fseVBC4rndfhddS4SS5EGt9pLaW6Q1MRDrB3Df3MF7yr",
  "key29": "5Swy3fXk8mS8b6YhGMiN7L3JLgwjZ1ECfKm7EECyVtbowg87SVNDgJhjBGGix3XSVnYccsq65h9BSaKkD3ueRfDW",
  "key30": "5p9cpC3ZxGSVSL3zMhCvg2EwjSsb53eYQreiyGSrBq4BGgEHgqsijjN5rE5Z7VGygBrQn2TBBWmN7y36jBhHxbgf",
  "key31": "5B5V4ZrRtEJYWDVLBQYuPSP5BEqAEz5B9tBaEJjBH3BJPSqadR5BQA7zjJ1cpBKAeXSZMMjUEiK3guxb9XQvfhS3",
  "key32": "3jPJWwbdKwheZbbk9tnuuQs9rLQ8qxf5xGuHAGsxvs5NetVfcVw6VFn2VkMMxGrYWrQrbNGz6VrJ75gR3WazNxs8"
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
