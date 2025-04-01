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
    "3Gg5zhHVuZPxvyLzXVmRqqXyWt5xNwxaHAkSzcEzxrsHr7oTZ9aD2KVdjXNXzQ7Gi5uWCTHFZ5aZwDN9sQX1wYfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mYWQhzrk75xCqvGSnC7k4Q3pXe4UNcAXx1UX2SdmJQ4xBdY4LMnwTM578TK52AcsrJgMe4gWqoVwzUCfV5PFUdu",
  "key1": "3bvb9Qa9c9KSJi9FfcMoSnXdiyCuzobobzPVk5EzNJCjKmunne4X9GwLYk42ZiX4FnBQmy4tftZipQZ5wTjv4VYc",
  "key2": "deLxQTSxpSJG7J1G4nYvZD3YLTH6hH8gimzo5nVz8qE6HrEZoLmy5dMFgaj8KDpdNtjT91zYct211Armox73R87",
  "key3": "4KTFUaYMVpDaFAwzdpa8LJF947pdJRLbfvU6iBPCTmk1f83qoB95DHHRN5hsNgAXC33ZY2dRzQHDVPyVy9r4rUt6",
  "key4": "5yfksH3pTgDK7Lkkc5Noc6heLAGYCzHN9zYrdnGTDoLx3Xgz5eFpFTfJ5zVhjznB9VZqUz6WgzBj4rauxSyecthT",
  "key5": "644cEckKTheJuv2FsUr3SUYdtKQEmTdhNatCwgLdwbCtdhMjmynv2KrFF4cbKDYutea6oLxfZ7bR3uTVK31qUB9N",
  "key6": "2XkMEmgJHwqMkRtxPPEC5m763WY3ujbEEjMfZ6Fh8fv7zMsKcbUyGjrsxoRgjZg7CmMVLwQZNMcxDxLXE5wXEBhN",
  "key7": "3Z5txBb19ponLt5BmDHrZgBjXkZyC6kuc1GnHBws5rRSMrnioeTzRbzgMZsfXv3jxZ9dEjUuN4n2KJWhuxawZzNj",
  "key8": "2co79XXr4S84nWoMivy5GiX7CRR5TRcUhhh8QZ54FLujfr6t9kqqTbWNL5cpNsoHhaJn1nmCNMWA1fyTt18FUDg3",
  "key9": "AJUE4ZHfgm2mNWmFoRFvfXzVYsmdSidyS7FF26pjXk9upGEPqVrPS5WhjFZ8ReqGatzPrN8MoBbWk3mmbB7yUDz",
  "key10": "3FjkJxcs7yqwoBtaYJVqAwXe435enmxV1uWbpfpNfTXBnteNkKT9GgDRJ2Gq121EgsqLrNdcmjR3HLEX3fxMha8G",
  "key11": "3iNnHijA5CQtXK32KYUzvnAFuQRhHSYM5tGA9mZhDwp7bSReCZBBavm82VqLAxsEV9HiGCPChGw5r1Bi2MR8WSgg",
  "key12": "4LVuSwFS5iojvmLWsYna9K6ENfvakFZcXZfafE93HQTpATfpdjPY2iHSZwk179MtJ1FGziz7z6sk56BMXcp3Mubi",
  "key13": "28qfiJdpTaWL9iyBZLbVFMeo3N8Vo8Yi3kQCgUK3wWv6LSy73MDL1p1515TKgmYXimPtm4WiUsQ4t4rjXxjUYdhG",
  "key14": "FfeG8695EUXQYfsRZzYEtgHJddsp68tc28JETnqyFHtYRcdqMiGmXAgkubmMwCzYSkEZzgSR3Yrfu3pCBN7WXcr",
  "key15": "5TfB3hD79hyx8Ju4iTAg8Ffw9yioM1yRYf8zpTEipr2wharCG9L9GuGedAM7XdMTYJZ5qyM7Mc9KEvZLJJCQ1XtZ",
  "key16": "4Y4jJ2VaL4mhp2gHjHbJ4QRXd2bEPReETxb3RNa61L7Kc1tj3qiLcJRFfa4SKTrCs2shjXZ6V779MHcSoi5jL5eR",
  "key17": "2Nomp2YVbTquuBM1xpcbxomLnhgBP3Ld77F8xxABmgRESAbdC9hF8s5tw8CFpq1AjXLY9VeZUFkaYFw1dAgrEguD",
  "key18": "2N5X7wbUnbuQ41KLuvmJYdTabVJx3RX7kzcQNMyeQ1wMWmMkuvq8TKhbR37uwVL53nyCcaqytiSBWFsEB7Qrg1Jg",
  "key19": "5z3H8q8nFu5yk7dqAKcFb3NeRhWBxT3sQZriVSPDRwS9kmLFYtanAwoABp9K7wZZZUW2Q3LsEdYpdFZjwd8XDLwo",
  "key20": "3JC8sEhVSUvNZzQeqziWmKtyyxP6964XEUFyCP2qxruyv2E6wziP6tEWSe7xke5Jg1fQaStxWTKujbXzUGbKheg9",
  "key21": "2qqhYyAPLi5u67K5qMs9gDh3RuXsVmaCKmDfXkai522DmywHGccDbBwtX6ztzPr2Lnd3Jct6SujFSBGTUWCsWztj",
  "key22": "4U2Au4ox14KhXKbJSUzmeNARmZoQHm4pobcXzf8qHJxvDeJAVTE8L15nyeAwzUAsm73NeiMFeE7gF6yV8QqL8hfx",
  "key23": "5vqwKv7JSYYyVt4XpKgwKe3EUmcfyhgJsyN7RGzrqidSeNYtCkSNe5kWkydKTBZGDc6goyko5NRdxiEmsmhAWZC4",
  "key24": "4xVnCDdsMDNMHrex7Pqmge5p2CNgXd9BvuhCmXobBqPvtyxGHfXb1zZ5YmuntTgnMcFXB1TtEg7HNiqZcWBSZTkV",
  "key25": "3RaKyNMTxA6X8y3FVzvPryk6dA12uibbUWwLoCqNbNp5FURXynbQCo6DFuoUYzDkZAUrgduEkebL3y16EnCYZ2de",
  "key26": "2opAQ4Ak9SSuuvyQ4azPmMAVniM9zKpax3A7Ykg3pEvUCRH5YUHiYwAw4p4o2oB9nDicThgegkkW5JNYEovZN6C9",
  "key27": "2Vp2CbfELTk7pXYVgBDfHjVefqysURbwARYJ8X46652JE1bL2ok2tH4xQsqbg1dwF8ou6sMU25DCVA8d5gWXJFXe",
  "key28": "5edjzMA1Edtw9iGnznFMK4yx92kSbSPdonVQGb4AUzYqUHBBrgAnJxkHrw3qeFxNMnQgmfzmKovUyo4tPWpX9zuM",
  "key29": "5EJ5QyDAoKia8C3UzJZB7zoqqQxp7hkQcuF223LNyyGopHQEt4iVez7nptJFA7XSEtTVHD1Uh6Q6rkMD7G4FygUG",
  "key30": "61uVymG8Kb4Z8yiF1j6yjPaKGhnA4XUxkGGDE9hcUUdoQ7JWDmnZkUxF78PLcP3QK81s1yY3ojJ4uCZEBvQpBnZp",
  "key31": "4QdrFhj8Hz9BZ6JJxD1mT6u4xqQn1wA8vE73KweBh9LNjiJNgUrhghvYBUeRjUJoRoAtPQMrxHQig7DwCAChGFEj",
  "key32": "yUVxpGKT1ziwoAFcyh78htcXV412fCkwmT8DrDrn3Mxcs5isN17vqqiFJcupQRVXVweUs9LQLfuG6V7sq2Hhm46",
  "key33": "3vRMXoHKn43VsJCFnbhfcFjtiEfdcwH2DfN45zpHesHWFrYmXrWNDEkrLBX3HRGMsYN4yznBxUd4gmKvQ5C623ch",
  "key34": "KV1m5H1ZRRQokoF1UdzFE5wnnve6zmovzW4yhATXzFbo2v2QosYozTzktg1depUkL3WVDnQvPyV6j81KTTkK6zZ"
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
