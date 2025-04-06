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
    "9cUw7zrgAe8zdmRfn2ib8qnsvu9xx4GqiDQWGWzyMynBF4VR6hiRfzHdEGGYpuW9sDNtw4Kmzzi3mFQL7yHCSvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Un8W2mWtRHugxtWMZovjCotbfSLyoQUTb7cfqQ34JxQSEgGiqJ84U2GvDEQHrdxRDiwV5F3G5icqUh1maxskZNQ",
  "key1": "588BjjJDX93pdDvHwZJEKkArXGuZJoh9fgGzPY2TLAU2yuVKTfFDPTbhf6YPNy2wczqdPzhBYvAE9mQEuCb9R8vL",
  "key2": "4tNmnXigq9gz6xFjpE7xKdZbCoSUVNXHkTN83Txbz5f4BtYnqB57o7Tvo2a9VqEVxAjri86xZHpnsjZZKiTQzUK6",
  "key3": "3whxgMsPu9iKBP2tbcUZnLFYwmoGct44Uuf17SCKixi9vLQ7MWkJEPakxchRUmnCwGkjovyt1vWA6TeKiYaL2Ac1",
  "key4": "5QwhJUhPL9TJAsyS6UZG2cDDSthxs4YHbhmHHesvwvJcxsh1xuHaqpbXCsNnS4fLj8KHXuDz3zDVLFucbrZqb8yV",
  "key5": "3AhLQZ7qqbw2i18f5dTnN3Rzh5GA2ttsSCeA7AFnnMyJ4jmHuNQU87m5DzXVkB4xLpn75QUd87Y3D45MzWWxX34V",
  "key6": "59PpPT7m5KAuVZeqDFGtkErTDsxWtSB2qqnHEtBEXfynfvFdN9JkfhdjmFEBh6VvwFzzgAeKCJu3UfcwsG5Lx9Qt",
  "key7": "3FbJnLpsofjnRsGGannbeEdyKbH1TvZFjBMXJZrH8Ms5YS7pD3qiqvZWwU7ibfLoPKvC9PMrdbANuokbyE2rHqKj",
  "key8": "39DhGY6wRADEbMfbCDhMxtE76DUAYvgw8UwQ7hb2r4RK7VWFJxPdVEwoPnwt2P5mRuuCneWuHWB6SoiiyzYt4Auz",
  "key9": "4dHAK3tdg9cFt1XLdrDXd1yHcUiEdEAEvjwBRbn9N3QgScQij83fHYpWs7cq83fbXkU7xn5HWxjYmTU2mHFxuXKK",
  "key10": "wh3kUjvc9ymD12oJduYs9iAbEu8wU2JMZc3BceXURWNLdNd97D9uK4EhGU2Mi42yvgkvcSUQU5ydMSJeQNULJzs",
  "key11": "5UYoScxWMUMrMh21U8RhcVAtpyoy5BUJ2dJvs6aaJ7FPfdrT2E1KyHzvYgy48y3z7a5xw3mMZcYfYULZWrE1iHj2",
  "key12": "5JZMwDLZdiMaibxSoKBQBAJZ9axpWWp12XhMYVFrhV65ne6drX9TRZR15CiyCdYG4d7JYmsY445wxbCw1qxVEpa8",
  "key13": "3NHyhgWnCfqPLsfawXB9fm8ANeS51oDCKgWMNM4JXZ86DNw3SWfRs5BDQhyFLgPAqwgNQJVnjx7RUkrZQrbDm4mc",
  "key14": "52kLL9MPQpwJqEhRCwfkQPd5m8pS1eCahF5yDbnwyP1huJwTBwXoLschjdc4rCehr7xn6Sm4GxvhYaGdz9SFdmqH",
  "key15": "5ktz2KMUDV718d2SwA7uxbZibLSpX9GXiXmyDQLAGf53DhqNjHufVUFnQXCPshiYkNMXDQeq5Fd2kCadhLWGiJkv",
  "key16": "4kHwPAF41mmT9vNWiFrB2tFgEE3GE2sqfojAk48NTU7FmUkczqbStHQbtjmHg62deZHBSemnQ7hon412EsXbEFHK",
  "key17": "NmDTssgtfymrjZm9X7QsmWge9CYegwzpZK7AZfE66j54P1ciPsKUvXYh56v7xKuwU9UquWgaxb6VR3hwqtNQ5B7",
  "key18": "3zaTWbQK5j9FP3PDbfxZsHvdcU5a8ypW3JHWT2PTRvRdW9tiG6VBsKCPFa2xMpgNuECnkbgqMEu189Cowbb6ZN57",
  "key19": "ihAR388PQHLab5B47PFmfNLMQvaQ6jUrBehk6b6rJwPYQHRP6uayWtTMqeoiSP16hipzGG8STuEhzL5oE3gLb1K",
  "key20": "4GLTs2odTSPnxdibqY4xrVZA7s5abya3SbMJgzXwgjhpJy1czKmneAVzBE3mM61KCeCCL71FEJPGvQY6eoQmrqgH",
  "key21": "4bgmPpQFL7qHgf6NMGD49busCEt3h9zHTned5cuHffhZMZDecnBW9oVCvsbmuJ5nFVAurHEwdy2hDuZYRpBvyQBq",
  "key22": "Ee2HjHsaYq6VT2KyNh36FYjpVFzBj4D7j7vGjfXK2WZsN4j36dHTqpKL3QegDsrewfWzUDUDQT9yZtRofrytgVd",
  "key23": "5Y42n6AEaigoe52ceV4NBekh2JnWMRkw3Ujh3JoWpwp3XEZBvS5y7ys9yaD6fs1xui8ytAvUxGMGMMxKEcQh3GZt",
  "key24": "51znEb5USWrRaBvkRygmmKea2a8bJsqDVAzx1TPMbHe1TcGsH6im47KsFs3N7L6ot4qGbi2N9BndtQYo3KBkbaPL",
  "key25": "3gM37rrPsGhhWztvoYKMW9F7E9L93vTigzbvnJpei2JXkMpQ5EzJjKBbaRKAcwwHSeNaxBzzTV3NELMoP5HsBCL4",
  "key26": "3PV2PSkrNpMR33YwMCuwn8MXFWDDUXHohjpVCbMr7AWKejQkgdnj3iCV6D1MHHXScGM4F3hEZT5rC7125zVrYxgU",
  "key27": "5eEMYnMJyifKXfXHdqBkoRoT8kK5nsSkmCtPDJHccQh7j5cCZELvW2Q5uL1BLb7qBiiyJFSybAcY3HDMmJ2xNukt",
  "key28": "5MmTLzk1zmFZq1yWanMxnmfAD5oYxYWM5ySRjnscWi3ypCfUqr7DwcHWoWqBG3zgCGT4GNazEUJJ2ESTctbJ3tsX",
  "key29": "2bzzvviNN92BDDTWebQmai64pqZEnTjHnTJYERqZUniDJoYGATjaY5UGi3wyAMQ1rRSrTHxaeozkWQ5o4BgTucWt",
  "key30": "Tfy9GHcbp5jxekf8SPgS2VuEDRjdTVbwnwcafeyikd7mirBCKsAckbHv4j3NhhDxn9dXKbQVxnJzd5pXMhSFnGP",
  "key31": "4VMzV1nqPfmdvehSRUX3xKLDj58xhDsPnW7GRrhJPdiwhM9jHvW5LznydJ1t2KTPZm7PbhW8Xzvg31Aq4pcLiGEH",
  "key32": "P9ZQwaDHoZVXVLqrXpWXWKspuycw1WT85iMmsmhy8djPkEqY1gmL9MvabBaq1A77RnoNREN7hgdonV9VVXScdxq",
  "key33": "63bZHmHoXtCjZKvnM5F4b2bd5HCR7KdvHBejLRV7bUsC5h38WGB7KKTxcqNPrmHDUP4VEgaXDXqZpk2dUskqupo5",
  "key34": "4cesWkSatANGMEzrZoVR1AZ6z8RYgXUVTLKeiLBB9vE5M1dtLWrCAZkpMqaphq8iFYe36hh9i6arx4rPT3nqDRFu",
  "key35": "3pHpopytEaxNmSsBDHk4Mk1U2E8j9MabC5yuDnKPwjg18npkGBVZ86XyCAtnixqc3uWJhJ5tHsfBpMXma5M1hRsW",
  "key36": "k9oBNAqBM14x34oWDoBXfmn8pje6zKUCKsF34tmDwQzZLVAx695ichZUouFTsvoZc33RhYHzpFU86FpriaYujZY",
  "key37": "5PgzLJjtdKLP8EsczDceYHLEemZeiqwShGnYoY1kLuwcaunHtx45ZFvTyo7f1yF4T8mbiTsTd19QNrhiUoS3y9F9",
  "key38": "28TZNsJjhMy91bBvQnYGmvkSyCZvQD4krGcuS8wPcfhBZxg8Yjo6MJx5WU8qqQUsadoJbuRavmVAPEP8KGCRfcKR",
  "key39": "33sqGv7p1iiKq3UcLtAcFw7FgbHxgaLhRnHudVn5bpNE3YgoBReASsQTBKaVqiaUQ1hbMXhdbssqKbcAiJoZzZU2",
  "key40": "28Qg3hbNhSPvYWgprKVLStb7CZAxoygc4SMHfX3FANbP4rpK4e8tTih6x9RWBMooWTJEE8eAysNxBKSrhGezBX1P",
  "key41": "33fJ5Mbm9bWDDEzWueDDecYK9kFLxAt37KP6D5NN8bYS5unNRiCTJLvctvdyHGM1rESJJUToWV8NRxqZwcrYjfC4",
  "key42": "5rGfcJpoNa3kZHmBg1fSu1irT232ic9jt1MURzw1qVDWDrEAQoLBRQsPDhGnUxb3jtgnw94MyR8kPmS1Qpg8ZVJ6",
  "key43": "27RLCgKpoqGJbM6khbFwJPLCRDdoV929u6Zdntq6uQ5Gr98dKNYUzLUvJsmU7BFxxzzvLkxNQYukjfkd4yCtwhj7",
  "key44": "bU8DxE5J5wQaWRoKeaoFGgbQagujERcg2xsdp6oLhV83uzqxuDiXntUGpvKE5kZFHfMimUYLCDqVowAAH3UpFKV"
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
