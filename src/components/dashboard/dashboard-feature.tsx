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
    "2EhEQZMQQvkZcfhUxJ3sYKV14RoqK5SUEXAjr23k4He6BXKrxZjia5WEqdduKfCapujAa838Q8Jjc7eN6iPr6VmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26VkTJKWqmc38L55tRZFQoJyevZDBrwztMdYsqMEHZQYo5sRE5QQpWhLpTcpHGAUnGa3bjv7a9rr7rnxspS3WVWK",
  "key1": "5Gc1JEjkkJFeNFqNGZpUARhunRnzQqXSppxfHdkmow7hF9Lf4U5b8DqJB79aLuH5nNp6wfGMfDBZwciq3VqZCo9P",
  "key2": "twrbBfz5GSw83UmhXnaQoYyG9RJX2FhW22xvst65PZdfxxhZPhwfF3FBn1nsJ4FKLZUyZMAzjhveVwaiCcGHzWj",
  "key3": "2VZUYipuoW5WWWKoNgXPrxNmN9MMSy3JSGPj144JWd5f5g193fhS5RXcfe6i3To88LaNMem4v1VCj3pSPWGuZoFN",
  "key4": "3dYRWXrUhMMZcowbAF3WpQ3TDDErh46nx93QUtwypG58Y2pat8oZGJjuuKKnJpSZ1U2Qe12xiZxs5TzugSxXSsg5",
  "key5": "47ugXWEBRVYbWS7aKxNSxbHWm58dqCqxJqPzVVEeKZhjKyXwyu6HpHdvPeVamBvutvtWjMnRCueMPQJzmnyLtbNb",
  "key6": "29uMb7fz6YmNXwgaDjSgxEJRD6eMNgKz2TXupuoUDhqZfjT4yYnu1VZwfahhLiLC5QotF9J2U4G6bkAcjmbKb413",
  "key7": "2kw7RUpTQDrGusRUjiTR5QZkCTfY8YFEQ99ZDv94qAbK7h7AST5vaTk8W3SgW6hjEpHftvWDFdSwSCaCxDGBmrs4",
  "key8": "3dREMnTwsXDXGp4RcxkQ2f99PY3bCUL5M1B3VSCGxEzitvs8sMgkjai9rbTMSmXE2TFZZwcJBQRCPBpCu3Sy8paX",
  "key9": "2M4i2zNCr7rbH3E7SZcoHMFMeE3bc9JLcxtBh6PaHWzanABaJFxAJsqY35LSrEGJHe7QjUYjJuG8KgSa3QHQb52v",
  "key10": "ZkxGhP6o2KE8iveg6xkBiShnLaLxjuN5jzdJfvBchPPFbsKQbG5izLnDrCTWL1GCjEzZ79XhiLLJWpXXp3Df6zc",
  "key11": "2ajVGEtLSV7Y5SpWKsZk4d389sqwAAU64JFxUksZnBu8aG2UH37r6swM99cj4nvovkpajuACEWBxFsJxpxoAKoLd",
  "key12": "3UNJRqDyYNjgPnDVNfzx3857dAQwSz1H6D7yjU8BskyLnNisgPrma2fT7PUJRAnkJ6vCatun6xWgz5b9MtZgHCdC",
  "key13": "hKxrGZKgRV2NHLZKSRczMQrX4n8ELFB6NxfGac4iLU6tAqjhDwdsFEdjzsydwPwjANvMwm9UQgPdizM2LLzo9fw",
  "key14": "suRaQzfKmoGt1ovfhnpfsDCtaHvbgVZ6A4KDWX2g6yshs7fbLUB1AtvzerJzL3vWwkCDdKqmexWyV85B7jByWrb",
  "key15": "3EQMfcXUUFwSApvZt7cqPKU64r7VYu7Jtc9fHFxTWHDUDFwJvibx5zMorM7VwEME7tqr4b36bpBXoeELLq2BpWFW",
  "key16": "65SyqzfNweE55ovNQtogGS9ef6jMvcC1rq5eLNXzDXAJKdxXqEm1tqMK37S8eiB9zQfwFnwpguLaoJh5RiPzSxvf",
  "key17": "2eis4Nn8SxXEa4DqLZnPVCEPyY9ZpBZFauAJkH6ingME4XF5vurFtsyU6hx7M5T5K3tAqqm4ZjKS2RZrVmByM3jk",
  "key18": "4Uux1SQqQRfK8bMYDe38XWco8m5PYHas1Na77CB8dfXifpVcJbfZdJ7mSJwC8T5pnNfLXXfcrZwLJYqLwemzdKbd",
  "key19": "4JxGUThqnfYbJ16uYPX39PUAJShPVhiLfd3uhNcjSacsaK6pVVM9hUNXo4RPYW613AYEYBiSvzBy3uzT86e5J9qT",
  "key20": "4iTF19Jx76X5AqC2gQFi1AMTWTAofnDQHntM9yhGsMDviACaamaLi8rVGLoF3faKFBWLLT1bDUkY8yEc4nrzs7Vp",
  "key21": "3RJoRUY7hNd5SmPGBBZnC37ChZqWYxaJiN2nrFnPKV7J2RnttTgihMPquFGnw37MNGCKbLYCyzXCdyfAFCnt2TMf",
  "key22": "3BkseyZTsypBcNXcKtzXzHqdofqWyv9R4b7nKe1TmpifqLM9TV62pSfRbEMS6o9QiWqyDj1qwg37t4zWfmkArTg7",
  "key23": "2p7LGRBFQ6suu2qui2sG3t5fGRTwJPbTZofZLsaVqi1jfbWMpLwdFfE9Zob8NjeSrmtCh45xbMnAyztHK7hJErZB",
  "key24": "4wXGNPGGPjU5C5pQ57oaxcr1iXK3KFUGDjV3tmsJzBHvb54PToccERSe1Bk9fyEgBkigVEyjbnxFsNDdxRi8bJMQ",
  "key25": "3xgGs5FVSC42ei98eYwrkQGYWNHU9nbUYctm27NzAa2FwE6yD5tYBRpUjnPNydLxFSMiuVADmSrRkArqbP38b38c",
  "key26": "2TaD43NcGtx752BVN3jxv6dCmuSUNKXYGjVa5MJzE4zLvha3z5RMMHjnBphGvX1Ezgn2tfCGoXq7uF11w6nzQVaw",
  "key27": "3N1eibm3XRPNmqg61y1UyynpdKGiK7Cf66NqydSSd4Wgd7CDSFfwYEZPMNYmVVLXQHXigGy536gCYetkV4Q8GmBv",
  "key28": "3Kj6Z7JHz1usPrTTuhoUh9hqrLocctKg1rDnknJ3xXUzBgH8dVeett4NncUSgvMyq5mfL1vXGg5KW36JKFFMpcnm",
  "key29": "5GnYvA99m4TKLmYxXcd6TCF6hx5fDiQk4e9BLYWiHboY63bmJkFXjdHJZYPcJqJb33z7rpEwZhq89FR5o5u9Rn33",
  "key30": "3LXdzbeiRjgggLBDqtEB6u2qr84i7qZze4b37LCdCa7bnoJoNiY9Py75dF93JFJEfyyoNhaf6hQBb77j1CUgQ7Qx",
  "key31": "5pSs2gdH12BxKritPhfKSmkrdoXXAVbycFouYB21ykNsWvpRRyuv9TXCCeDrZ9tF7rsuEQ2ttbWXEXqJGzqm9xGi"
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
