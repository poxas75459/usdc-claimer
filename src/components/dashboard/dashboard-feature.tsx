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
    "5A5WpbKaPCBz6gMmvsu9n6uVUY1KyhAQJVTHcETp2C6JQJFyBr1PiBhPSMC6fGD5Bo43Rdk5UKSAU95AdL1vpVpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4yhcfe3tJAHUN5aV2AUrpUr6UFcAP9oHSNRGPSRvu2tX2hfsabBCVXH5dtqffZxwrWJLnF1j3TTdV3g1BBPdwF",
  "key1": "5UpJHKSug6Nzq15vxwBvUKKsih2fzWr9QqAnELCxdmnL7WWv1fULxrqzGvXpKnRV18BD9k6id9ipgvrQMiNQZNXK",
  "key2": "4KGcwCBXwqMDrvGto1bJbmhghx4ugabC6NgWVzvMQJKu7HS53bDk3ZvBHnnjD8faRUqigZkcpjMYjjLhxQMu1CX5",
  "key3": "5U55qhahW3bVBhwLHffBHi6y4B3ms8kpDjhLvNJSzPGoCp8CsVEw431jMAUL7JvM9sggbYPoNWyiu4rL5fqqLSZb",
  "key4": "3MbvFX2cFqEzdiQETn6ob2pcNKqSHgTXPuu4gbAhQYSuea9LDRCd4Cx392QSyPm4KAL1hr2DyQAQySQR7iQn6R8d",
  "key5": "D8DaSSKUgkbZ4FSD5SVThQ5smsz5CAr3g6Zn5kCVgPTpTBZdAm4M7V3v1StXqzorQPPRRhWsHh2MvVuKyJ9dXrU",
  "key6": "5EMwcbazSDmoF5wnhALLoNJy9ESEP9NBfuTXMUHguiWMeBJKYp1EWtF3XrtTnj3SkruVbU6kNUMXfQ8LpqmjVBwd",
  "key7": "JE8RLCgM2RSxJu92Zv77cZHh8xwNdwqzo5MGpnZFHLVwyzKXuBwDiXsKCegzkJr2bqCkt321UyxyMtf7d721sst",
  "key8": "5Tdbi7uoRj9H2oMnZAk3hb41kv6u8kmYzQBb1Crc5bFiN4q9DHkGt6JwKg7v3ZfdHPpEEk2ryQJfTQkPJRAm6n6P",
  "key9": "5pcu56frXRHvxnhSQXVHMLhK72cZmcyKdiXUXCksfMkQpWTtYcJ6MvdmzSG35auhAjoPHgtAD7ZeHKXfWMcHpAuL",
  "key10": "2c7XNtbA8u2nb54XFYAJ2z2aA8i9TxpQgfnNvD2PpQmDTjAPGVuz86F9dk1B9HTybhiwc739cVupGbkv1xaJNBc8",
  "key11": "4L86UNPbSkZKCkvVVb1q4AsydMWzuKhn9hPKRpc9EbkYafs5yRzEjCAhBq43yT1QA7R4yQzXhvdv8aLfQ17jXvZ9",
  "key12": "2LUzKymfP3UKPi5yiUBSMtueo2TUEqDQ19G5zyDJzjPQvfZi6Z5KGQcCsMAthyDLvvoQVka6sRJDt8whSkXm8QQV",
  "key13": "2gqfCYkzN3cd74Rktv72A365G2MvnTTBoCLeDLomE9aSFfifwY6hkqh7yzCsoaF5UGhTHUT12mq23Z7vZcqy2pB5",
  "key14": "bQvXPRzeyeqTNAbvBVvhe8rdFDyFHsrCkBQ8iM4CgRiRwMsTqnvcRfAeQmb3575YgDHyDjwA7PHYYPuku53TxvH",
  "key15": "2wkQZJBnivFzu7BNG3rqiqYBhLHQ83SW4fmVd2kfSwuNzsTyGyz2iVmEXhwyeTdwQ2wNYAjQ2pjmd7PBcMHhSdLe",
  "key16": "45Py6KfagcJTqjvxFtWyBp4sQ8wTanq1ffKFcECShVPVW9XFqc4doibq9DuB1nin12FcfsoahFzjC8G5hBpfJTJ3",
  "key17": "c8oWeUDCoMMzdfoYnSi2oAaw1gxaN3bFHv7PgG7UMvGeUGUta7AYRUdWU6mYfkiDvDGThcZCK7VcRjZU6EAyX5e",
  "key18": "2MGX9Zw5BsT1JVVkruY5t1kwuBcof1vLossXA2i4bCxhTYLvkmuykaNbSV9msQKCdq1o1bZExYVdc59KLfYZDuvQ",
  "key19": "4eBQZoa4qhZiLwmjg5ahs8bNojPj8kvXbExMQJPmwcz6CEnK9JGocUioKxQRCFTYz4zubASEoisPoZpQkV4hvbch",
  "key20": "5pzWv3diatsh9v45MtEDxTLpegBuqn9HvNsEY8hYJX6ZVSjcfAAauMZYYN1sVPLJxB8HfKSchAvMvbuC8fvAXnY2",
  "key21": "MFVMJx2JsmL4vUGU6wGwt7NPz9WyspWYWuGdPJd3LbAgRXDLcfaEiP87eUZmUaqAvvjKpyA67BSpyMNyGxw7Dp8",
  "key22": "tc77BGtkFJ6VAHWjyHVdqXnqKi9Y8ua3xz9oHw6chMkgrTmVEUkE5oGTo8j2DbjasJC2K5fie1WURkg4rC6o1kM",
  "key23": "3VW19gNRYBpB8sgFBaDUnu9oYuoGcFyd3NkWKmfggvMqQF6vrUiDzQLqAwQ732aNKRmLdc1WEboZybJgqVSbGK8q",
  "key24": "5tbthhbFZj7zuDCx8Cd9fxaktYxrPRFsxsAG7JHWPmDBQHC6bJQLzij6okmAjwvHjTYmoUsSuFYQSVagchNoQTpx",
  "key25": "5SpdKoi5ujyKBKvwxpzD6aEJUjMEui5ARfb3Q1Ka6AzrgGqqgUZNQTyHPvRJ1de1M2itNE7Lm4YjsjUh8agGfxHR",
  "key26": "4LYS92f66krRAgp24hNx94Z9pxEx85d92opYyLobnAMCfgrcHCDLdY8hYsqx7jzmPftTEjQDN7Af9VB1VGGS2uxe",
  "key27": "29zpUgADkVsCZty4ReqYTebQSgMcoJJhbk96aADNTRGB3771LpVKQgxvvonTjgeSG6U4LEzUh5xoUWY14xfw2JRK",
  "key28": "23LhmSKiMhKdjsNPaUg36P4DcvZV7GCDojwyELVTxajyEvwLYZ7bpPPqLQ7WwHhMqv9U7kj7FLWdXHtoCV6CgVom",
  "key29": "3NZ8bCgzgpJAkBPFzfaKFS37rXouGLGb5gkwprnCoEjDbwrDKjivE7yuQNbSbcoLm2hKfFxT3mPcPnGdD5Uwnisa",
  "key30": "6HGmrTRVqDLrdreSU18Wk8grLADFvA9C2Gcecnu3u2SSZRKBN53MtXFzJGwT6wcqbzWZFMKqN41jpgx8iTuHxVE",
  "key31": "4SPDQeoWTyxgNgopj1o3U2NdRt4xf1NL81K2mPWZhkTk6pzUXfzMSnaZK8doQobBXfEmqejx5r1bKeXNizsXfeWx",
  "key32": "49UMBjdS5shvWVv8TyPPJjLtAns7uo7DSYAfExfkh1wrV8A1GENRNrVwSTVV8Pd5UyZrwYUe773Htp6MFHcY6KWd",
  "key33": "45TU1ByegA3tvaCKGi9zQxCpf7fdtQU6urG4BmSW3aMeKtfk75rwaQ6LRjGZB9Lyoewe7b2VEiA3aAGfS5hd88NU",
  "key34": "6F37oGaGYqhuP72r55Rscn7FnpjKiyij4d4sng1kN8AF8tj72rM5iSpCSBpyQGWkL7nnDM7yiFSiFEq5oSS5ikx",
  "key35": "5Z9ppgwYfZDRtsLTdaBMXsC5CAvUXoLvCk8zxJjBwUSZizLWryYhY2hJpreaZJAibVnfqeWVGEFL3nW8sJtgfSHa",
  "key36": "43zuJzeCFa1hNJ6bcJjpe9PT5aQw8UkrdjStL3mRiwUqZjkSgXQSQ6PhtYSC7vAiDdMiz11XXgwz5jtZ4o6TqZ3a",
  "key37": "5JPBuW8QqesGTBG2pKPNwHHQfgNZJhZFBVmWqTSeAuqtUuBPurDQgsXE69XXKsZioBionxPjPkxYA32A1qPAEEPd",
  "key38": "2QX2FAV6Hn4KubQ9f9E9LHBwpEZJC7Uv26dSNJTjzmgG7zkmDKKDMyVme59BRee4SWVKymoxBnpR2rGBokPmezCS",
  "key39": "4D4A6TxzWBXGv972xFsB8xsMwAjGpcLpKPpZSP7GSvycfZvPzKTM3ZkqJSfB1GWn4DXKR7JkQiGF4yyrdQirZh2W",
  "key40": "5FNFQx6TevMJeA2n7xUBVgp9yxetotdUPBkLuabFsaBJvxqwPMiqLC2Af9qz75487vhSxiPb3kbTfP5WP3ki2mDG",
  "key41": "3N8yq8ogQR4WF2Qp4G1awoG6nLzBvBQXqqKGvmVnbxxNkqj2iwuCMTgV4E9oPRCasxDXUw4obyNxXjD2qzJpRa4F",
  "key42": "5zG7gGYJVGrA6VKYFeQf6Fv8YJvAYNjCBeHvS3jJYH8apYFD87XMpzc7koDnHZJTCRjGFFzmfuGVj7PPFEzkeFkF"
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
