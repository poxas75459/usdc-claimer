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
    "2ZtGnteCZqDzkqm8os8YuDdnmNZyNe9iQpNLA2dRpfqXDYomvUT9uMFtEkCDdyz9PoeVvdiRb19ePH926sE8Xvuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25pGxqku9XuAWsMfiP63iCL5aPZrxzmQu1rUGA7Szjoi4Q7iVkYXpz6Zosqtv5EcLh8YwEALLeaYKNBeXNDzUJRD",
  "key1": "zy3b5Ck2wXLN75taH6PZTkS9ByywXwAmZKHg9ToNBgxhw5d2uviJoEaCp3o5QS3AS99Ti1b5yMhxR9DqyTCESCt",
  "key2": "vGE6M2qES4GnZwrSTdArwhScg6iGDf8nrPgJrstRG244bKHgJh2AD9heYFDqipxyX2qGVYvsj9SLbVjwsHwermx",
  "key3": "27XMmPUnGaFJ7HubHbr7528BDQkDjXbUJaGVTes8JQm5bYFJULCwjiQ6vQxWAyzruAUVwJhxRC4tp2QQUkWvMvXC",
  "key4": "5WMkZvQ1Dy9yaEFjY9vq24pw3hnUhsivSvSubkpPC56aKz1DUb7rSrekRa6aeFvXhcbVXWcdhQwxw6aey3k1kJu2",
  "key5": "2wBqkryjZUYj2pxaKCJ2TF8i23Ycvua8inbNauzoedWQeFbd1eTHwi8C3pWbWCEpyag9syx1kxXJkZiirZysh2on",
  "key6": "43mG6kbE9fMQMV4KbW19mJtwxSiVgWEe5yBtvoqHSuGzVm6aRVqqhu2KmJSdgpmeRAMbx7u8RdkbtqSrAxjPnRP2",
  "key7": "2Ua4tN9dV2CNzJ8W38GZNK4tZBAUdBrq8u2QUdmeZvDAMSyYftDnb9GduFo8H4HhTbiUzybeUZ8WbVe8AtNkUeNV",
  "key8": "5gZ52W4U9quMAs8W4We1npPi69ChmTbLVjfLZN62ddcspL8cKKpppLV9WbRj29BaEB33dyyQaqPVKrEmjEsbeewz",
  "key9": "4KjwdLQNuWCMPz4CYfvqRqtSL9jP5Zke7HQxhYkHtL6Vy8zfxAtZqkRrvQWRTx8wKBMjNy34hVg58j3EcJ3fKt2m",
  "key10": "5jVw7VprYmnyCE5cGdXUDYUuvhEUiCchbPidcTLHxsaZU9WR389MvH9cebnu5QzANzjK9VtAorRBt338s9iYeWv6",
  "key11": "4wwJxeMJEQZvB5HQVT5gWJLUs2CQuHmzezoz6dziy63zsre8X4AvevRtJQdYHBU65o3hqQ3hdUXh1iPeQtckXjXJ",
  "key12": "3ZPuWd9tShopWf6bCLGdAZb3ktyF5Dh8uwak8e2Kwtd4HpAADv9edt64MpLh2SA8xroH3um89xwSdQe7NnQ6fvHJ",
  "key13": "BYyHxpfrMNQNGRP8pRDrhCvsmXVpcanYrhGn4E6zFu1vv9q22ZoWFT8ccAKZs6p5oeyPX2HgNdk7sbcnsgP5z7m",
  "key14": "5CwiMiMzUJX4sUNA8AU15dBfgHUkkFz8jdSgKcUt9hNkpjPiUgKxVvR4X2bbeSzBhXcdHuTGfvWT7MtcGaUK79t3",
  "key15": "4ihwA4wku4w1FhTxbFrJDphPFghGup1QYmCqTecgJwqWBmSobxABKrQEios5Vh9grbiN3btu4TdJ1jJJWzJ5owRi",
  "key16": "3RCXpF93rs3iq7R8vJmiwvpVR1emqbGcvbQyf3jeWBagnSuw16ft1eaZm9qCPew5jcHwcTJec1XCAnFTvL5Z13SW",
  "key17": "38r3Y8YhSxyMXo8z2zY8WWN27v63EpH2Qq8oL8ZsT9GxZK6vUWz5Gwroh51LXU8C5b93N58LaamUCD8MaXYoWBNe",
  "key18": "2hY3PQHCiHTXmPrtBoGpLK9TkJkXKjeusLEvHVj1k6DUiiD6wnCdF4B7SpCyUdri8mUkdLjYx64nz9K1KReK8Cf6",
  "key19": "3HN8UCZagMPJfbywrqr5mciYzoUmHBU2BFT3goGcsd28bwbkSjr3NZdtBAGuCMYpfLVfpfbRxdGTRUKRdcf9tW4s",
  "key20": "2vRRHm2aEoVFmbBXXvKGm97vFd5eYEAgT2z2xTH1VTxL1vE2Lu9sxfcgp8yNdDKCQNAskQ7sj9dp1rmCyr8w7KLw",
  "key21": "3P2Tk2udo42B5QzVnKCAY2ypHhGv7udNrDPT8sQJBDMjisLLvHSnNVkBENf6sefohjfZ2LEq38fD1sXMRNLgDTh4",
  "key22": "3sajg2YBES9YyAXyFhoBYVZsxSdkGQPsp5zWeZfkpndky7XUWKiiqQUjUX5r6ZMyUUQs9SFH8HHHBEN7WEu1aVHF",
  "key23": "VaVks4XHfi84nEPVTheas2fmEiM1QQ1vMnhUZr85deJZfsvzgGgVGHvarSq2MVjn2H8CTHHZR6CkYbZD83A7DbD",
  "key24": "ke54u8wLZ7N7hX1XUjFaNPYv1NJ2UrvUcMaJQRq2ghEDjV3rg87hw3HhaSt3c18T7L3ooFfHui9fJm6cNSCXqWN",
  "key25": "4FftFvG27PA6vMCVy12YvNv8ev59S9fCykiyu1huJpzNVa9NKb9ybU1HrSan5NkYdvskvJWjeGGCL3mt1pGXFJqU"
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
