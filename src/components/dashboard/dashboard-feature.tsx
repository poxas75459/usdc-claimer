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
    "2w49vxfbgZTsmu8rC6dz9DYj66LbopTsA1CZ1oMAx5CauPE27oTroRu6c8rKSZxi9p76bsv6YcGr9Qe3NFvWGnHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21kFtUDj7gn18nms3PqnXvuyazB9aQhmx13E4nTYanvSZEkMNunMXFQDRW5rXHMZLifST5Wo2dGLEu21HS2SS859",
  "key1": "4TfMui5FmnT64HQpP6tc3HCtv1kxUggo3szoHQoJPqtD69xGuPoKvRMZ3vyRW2iLn72NwdBCWKwdEAjaEHsLGL2G",
  "key2": "5zsnTBebxTcjiZFfoFjz116FX1f1cxoTL3Fs9osxnoPk75TD32LbmvVfcThPhE2H8qzTtPKbbs49ebhj9TWHAzjg",
  "key3": "47dSEP9Um9daSu5tBWbbvjaeid27aEUDkBUc6jJSL1sw2f3vXi99dEijaZ2ratogGiGkYX5ytazvGKU1eZ7aHbcs",
  "key4": "2TwjkY8D1UZ8QPSfEu3TLBFx54D9LYUfbF2ZKQsjZKruZCj7snXkCr1bbdK7SmpgtdSWDNnj2Gmi4Jh7fhFtrLeC",
  "key5": "MoNaseX5mg1aLZmnajG5EGLaYmnvc5LdSMQjzNBJ3EFV6gnQzKjUwJYpYVjjhp4hVLKhNPHheM7ktXC8gt9TPGf",
  "key6": "ezvw51k8xjv7MzmX17EuhVNdLdWtN3S8NPLFXJnBBjNcwHUQYBnKHanHZJJDGaE9bK9zKVbsdcrrzMMq4QNz8H7",
  "key7": "7JZHt6sTPf5iPKDPufTRE8NUcoRnR9h4sxnZcJnJpjRcmtaHLMosHMUNueA1GizCEUCjWXXstYh1KijgcKLrktv",
  "key8": "2JWBjuv5zMJpnfTwoQnQ6cUty1Ph1z72krKsYvFLxqQggdnSTw1GBZf8sTouio5cASNE8yfwmU8MsW3kkG1pYRjE",
  "key9": "435VhXN8n7TdAgYY9EyCZRtGs57VxQ1ZS9chRgvax9pwbscbTqsKDKNfSxfrBuLuGFxwRF5BFzsn5eooRGsrrJ36",
  "key10": "5qUug7JT6QcbYBKLeBXqPkJ9mVh3zvU22JUqQoAHtxkmudrCquG5iZQmQqX6YqQQ2eX3osu3xA184gTYWMUB7v4L",
  "key11": "3BvGsSVDCkBFThiG5YQm5msz4euJgKrBQRktLYp4Zq9mCCrGqzgbbDKpjD8VNqXHE5vmeAAMY1bCAQtdHdjzKEjX",
  "key12": "WyZttTpVdXryz5xakpBRKyRpRqp6sLDgvaTkJPm1fEbzeYJW5bNEwVzvNPRm8jf9gQwu1hpCZyDNuWnCDCDtDRj",
  "key13": "4RkgBqiJvkGW17TJGx4h5Bj2cdLvNR19VEiRVyyJXuiqM7N4Z15zNZ1WSgsBMwkPZRNrm8j8Dsmbj4ZrEyAWvioe",
  "key14": "39pQ1MsYB8nrJJujzYjnpWbzLxoXVn3t2fePR7Qre2RiSubJrxuakGk7e1FVhfuxDZRW84UxRsrHHFMqs6JcdKjd",
  "key15": "2m5B8NCoWvaVCBPrwvWLLEuPhKmeNMtyj54szUxEmDidsXB2xK59yeWTYBAJe9fN5Ur1RxY1A6LfDM8PcBTELeih",
  "key16": "3TJLnzNszYZoeYAcPrDh6pbMtwpj5VaNkzsnsUjcDbxADtZtMhdrdYyeJAp5eZ5BcydrDJQGeq938JAGrWqZv4j1",
  "key17": "4MNobQeDqBejuPaVp6DLVbGuaot3yq7TzCxKXCTmhtLL9G9RRpubbPuaxqUEabT6zHCzhodhTpj4yup9v8zcs1z8",
  "key18": "Wiuehq7Sk6bGLGUYSe7hzUbg714wNAyGzZTVzVUXM8Zub9yCcXrXtWgrs8nYCCvKrBe4sTYHjeb7GrbDBhnpSPe",
  "key19": "3cQWDKD7F7Qpv4p1C4jMWQoJnq215tgLCUCX51WzZd6Xsq9hUMRUuTy6UUUwQStArXeRaWrAV3aq8wBAzGkVy8xf",
  "key20": "2bj74DME3v8bmcPJMdtbbWw4eK91PCiMBXWrFdntjPxoS5QzzoRtbUyEKmSbtsKfASgxXR5xKeqJR3V9am17KDa",
  "key21": "VJrSR24KGHJagigySmnutRanCmyjg4i74krxGFFcvhVyetQqcRUeDwFuTDGZGbzo5HAtAEeEmEbpyTm3AnuMYkf",
  "key22": "AwiFJSBD7272QrMpuMKdfxdbfzWQVUnZyhXtYDTF6tPCSL3F4FaVgtZBTjTQgTgEDtJZ5mwYwNpZkDDy1cWXmVT",
  "key23": "9cK76zuBpdWgmuM3pgyRk1NE2eNgJoRnmyEb1AP2SQLcgJPonCJnd6A6UtWF12WiD4xDX3soJVWmjxH9ikwMShm",
  "key24": "2tXFo5krJjUkuKkVL3cWtC9AvnWdJU8CxKS7RsxKRjjP21L7DvC9YeKwxBGwgMNXMUarss9p2kLvw7xY7QED6EwD",
  "key25": "3MepWfoWLxDEmZiynepneYevFhg4r3j9VU2oj3o2B3jdSEcDNzQ9PHxx5WQvc98KxrKxiQ5TztWKQGx6QF5fhaYD",
  "key26": "3FhW2qQTCR1Qytqf6XY1kCikQu6SvRj2Wg6h3weB4jFXsW3RC3kZtA2u5zKmFjumUyfVHgdUmjanhea4SBCZyEqH",
  "key27": "5eqANMVJKnS5FNsaRvzgX2bJukrc5GaTKp1P17Y8nAUrHLnVesV5FwEDxFugnyyUbA5Rcy2fScpX2v93q9vhJCko",
  "key28": "3C3EbGMdmgeSGin5r3KT3j4vFmn7H51y3aLumeQVYywdJ9UbcoZDWVuhZ8G6s8LFNB4Mq7aF5aZD6v37yJH5BRc4",
  "key29": "2TB7GmYMziLKHaqatRNWP5spz4tGXf3HZWWVbDnqKVTqXR4tUBLaXDc76KESg2VAXhD5jCP3q7cWW98iY8iCS5eb",
  "key30": "2AaZdVQCiLxrB8Yj8hK3mmGiXFoK5YLWnD88DzG9Q6QBwAri8kRy1UwSEfhhPgfPhS29BZ2PAKfX2CeFBEoBgWFY",
  "key31": "4ZociJ51wjYc4ZGREL7w1t24VTwaN1soUc2dzV4ihfLVrn5UiqLFYXnrdzf7NJaW22ZpUMhvLrKdZ8Hr6ajrMgzV",
  "key32": "2qZ2bmwVPqzgSV5RPZfGtNpdiRWnAoiRf5WcEbey3wUhHMF8wEh93MNttaE7D91pxR3QmPfgYUYFSPsB4tE8XMzK"
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
