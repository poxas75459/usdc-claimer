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
    "5dUGe4sS73dA6wJHtmWCwoWPkXtqV7Vyj5YY7nzcTst3pMtj9uZutJWBMscYqWjDSESQ5tq1VwWekebVAZ2sozc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGCsboSv7JyGeGKhr1QyQdg4E1uBRYr7zRLX3xfjtVxHccoKaSNDS8vPF5gyLAV186MPdRr4Q6icDXgXfd5p4VE",
  "key1": "2cBGtvAR62MgpCzVsghSmoxXW4WrixiRMXgHHF1NWLcBFegVugBrSRTSq4XWnjwzdGDZ8jQgbiVCJfAEzGJD3UVz",
  "key2": "2e1MDUxiNp7yt4rdmV8rnWMxuBCn5xtjjxS8AzBTB51rGaq6JsGyVacMM2CCwYXN4qJTKitJUYv9fvdFMKRst1xh",
  "key3": "43Pb3wB1AJexByiVvTkjqmaDkxT7UsRDNHAABEScLofbHi8ezmt5SgwfimzQd8Gn1dndH1J4TRnXwpeqd4UgFMT4",
  "key4": "3g5augbVzeK2R3D6NpQtbCeaMzA7tPsu94GnmbAbP54GESB4FQFQG6awoKhomQgXLgxV9mVpBoV8BRHF1X3LtYx",
  "key5": "2K8r3VzaYse8E4GrzJWYW4GmpT7YmFd7fqLscLVvopE6ND2TpBuvWzxpZu1uu5mKuF6ThNNdUvbvfqw8T9n3RsR1",
  "key6": "65A3rLXEvX86kCy4QBTfoNUQKcuz7HDerQMgAEF2tzn21WNKvsjVb9D4CoXSjDNCBaL58W6Tg8MK8q2EhDFfamic",
  "key7": "4S7YwEZEuEzAEdBPbp5Ae1XwxrujWfAWFTbyZD6hPTCJX19mxKZPEwoZ5bJJXskx8uCs4j8ArDRfBJZF9RBfUxVZ",
  "key8": "3eKcHjNXGmZ6GR84AbXbXu9Z4EWC4SUBy8XSmkHKrZAJvTYirS39NygvdD1XyRoeGtXpFfPoY5VPJ57LZRPbeJmo",
  "key9": "61p1RoiRe7fL8Puco1x4UpKyKGzb8SJ6s9vuBbqFg136gxwcKHY1LpvLnvARUnH936Cviqnk6dx1KKXUPQxxWBsF",
  "key10": "3FSZEKquec43y8gvnnSkvS6vkpmppaRuyLRAmctC4WNGfJQGAvy5sfULQTTifhrdXwKx29CnVqK8aVkCwuFFFdVT",
  "key11": "5zDa2pka8g8hjA1tp77GB2x9N7NCr3wZFTgA3eSktA1NwgvNstWmZ2wkFUzysfMUvbaAuTNBqPfMWiC27gNsUhq7",
  "key12": "4cyQHW5zHjyyPZEzHGCcMvoKFt7Jtsi3qUNxapYgyqia2yud57GbgzMFHPn83kZghHF6E9Ptg1eiZPXLwz5kcBHu",
  "key13": "5NbYsZxKcKf93wGAhMRPY1NHoWnBKMpPRHJATFcf1EeKHgbKWnXCsRfiPP3cTdZWjH8WKhxskXvyiasrtsZ2wyUd",
  "key14": "4CTrWGWBHpXeGFa7JQnVDHWzbDWrLCbG9hpt1rrMb5rNCVwyEJTuovEw9o8h48Ham2TGLGNgjLszgvxjmtzQQsEJ",
  "key15": "4xrD1c4aYFkWtLyJAV735syW6w6n8n6vWjiKRWyXBroczpf4xhBpH7T1HAoRvhKPPCQ9DAMpHPGxyCC4DXn2pa8t",
  "key16": "5qQLBzw51ZhiP32kgaHTgVgySFj9fVWvmX7tXfXDkv5ouN9bNssAamH9DYjgQ1Xx5m3bkuKLKZCDEUVZ3rCTxuaQ",
  "key17": "2HcXBUFrcrjuxJxod1LUhPYBvHQRgRvDXnaNkR4SCLqRukCKneC66KQY7H5Hmtzqfhkwv629N37GvBi5DAh7MBZ3",
  "key18": "4HRjWybxafHFhAfh3oxG4G19K55qrx9Hk1E1QvgXXGbkQN6Lzh3s5VPUbs3PiQnAwzQb4KSGToc81brZKeU1FVdT",
  "key19": "4CTVc8fp8UWiArLEHF7cEaMpEHuQ5A1v9XoMN1Jn8ijqA8gAQTDC4voznk9kfzqFRz3qTxGYq6F2ritWyJ5TTzqj",
  "key20": "p7AYX4qHw8xCippSvk5tPbJ6zac6w1KHGd92JRi7c2GYhxkj9aqviN3Xo21X3SVgwEKjAEcrLTNwKENSwc1834R",
  "key21": "3QL6MKrtR4YEumA8eiHM8RRfyfzA7gYrcYZmcWKHpzN5ej2xpYKbua6yzCfSrdoL3gbERNeaF3unR54ANHyZdUvR",
  "key22": "Adx3kpZF8A4Xu5rSowTepEBFRp1WawuKHFCbmVB5huMk3q9EwL4TLwfZoiaKJUimngwQMSKsfY9ZzdPaSBYgQ1q",
  "key23": "5oKs4DixNd19fXqCKGks3M2jNq8TBvShJToComMtHqYtfWKB9F76XFvEY547A5yT8VP9LQQQg6JUvAJ3CVCVh7Bc",
  "key24": "5pE71uGctVYCTpzYQDmgoUMV3sEyzjDF5fowxCNUXqB1LsTXArTsig3uGVLuWeUevke9z7i9jPmF43JvbxeB1BbF",
  "key25": "3DjFGSueSAGFsMaMGWheu6LrEATnEicwbKsrdtEJGPLfq33FcuaiwjKg3zXj4wj7aRUYzwhdCzjTyHVc6MtcKEch",
  "key26": "5TcCnScaBRS1WhetpRmuZSuaPFSs8v4XZoKxur5881LKHgL81FxuTf2v62sCEjJxGvrnHC28HQneJXFHZ37UMd7v",
  "key27": "2zz9mbrRsB8Jfpan5pYuLoRMNZQF8Y97FiCUbq4NrfW3A2LGrrqxqf2jcNkqxTidriAc8zEvpfBVq7nWBFofdKv1",
  "key28": "3nvVdoNFiEkt6RuqjRbuzSTMi84EFEmuFbeRSuaNDY8ijQftF5Vsib1SKgAUP4iwfU2joXnZhedLnt7QKFYe3Qer",
  "key29": "Mg4tCrmPSRxmURD1ueE7rnDRC4zcR1JCRwCzNvHNVyC6ap4zDg4pognvKt4D3ZBkeHTYJb6FURjjMLiU8dAdHN8",
  "key30": "5qAC5fySoSS48A5y2yK5KMgS7n9c5kzAc5xTV5KMmrNVjZyEwcixqixrgkgoVLNVm8gy1eW92osiiHQXgpTVt2qN",
  "key31": "5n2scknvUAXTToYByoxGHU9bZD17zkZvVzbbEs2k8kL3nYbKksA33Y8RUCJHVbaJgB3iqQ3t6HYzLxbsxsXdrZVM",
  "key32": "3qKVumDEENXXnigWeRXpGFUJokw57ix82qqCvu2A8w1DSRpwnXWyKJPbxg8pNrSyM15snhKXNYJixyGk8E6d95Px",
  "key33": "4HcDMqJHGCcHt2HbC6fVjpbw2RcwpininPQMDfgnL3pTm42se1fpDGjCYANWsJeZFsVjUcsiSa1dYBt5RkNC7PGB",
  "key34": "3dsF4ojx9n5hLJS9yWy7tezFUMyrxW3VCutz1fkqfQ23npvWqhZk8puy1ddhEmcM8JTpZua3XkPBJjM78MWEPEzU"
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
