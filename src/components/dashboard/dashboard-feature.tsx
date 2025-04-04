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
    "5vXEnhC93pnBFpu8hXe3eio5mw93rZkW63LsEuNyS57xJp3z48Bc7MDmGEBNfThRLAp1MV9isEcSsJcYb1A6ousS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ujHEndQ5QJ8HVchSNQXD9TsLmbEQ7STDP5dM7jxYJ6pmrjh6ciBvUeYmUGus8N3qyEMpEcAA4z6H1ZZ1qp1iZiw",
  "key1": "4srydoVvhRPJ9e5vm8u42RU4zquVjUB4RzrTQUvfMqqbNCjDHMY3LX4PHTRqdKReMiMnErsoxpUDWpwgJFvgzec8",
  "key2": "2znCM95mEYj3AbME6k89cu5G9RSGGhfUPZFKjCh7nDnMM5xAcfQ6nMbVict4NYKHzeTWhA9AezARXkS8tgaxPCqu",
  "key3": "56wEKECqWAxBoActN2EwaoVkxSzs2PsQrjTWPkwPvu5WpLikKpb2MzwgqEugzgQPFvGNzVUAzTWPBehUHuK5dCnc",
  "key4": "2B4p9xGMeAY5FDVdisQqiWMdAxeirzTjpMuwFqB8KtkSbtr28o7dzEN4a4AoUdQTqWbqfYPWof8MSJixNQfAwbWj",
  "key5": "5fGfL11LE8voUqrqgmhkF15buJAeMbBbkDmcmNFspPRUQKoa2WdkBrQ7Y3jKGEEjGBAnhFaQpJtqiX4nySpnc6rR",
  "key6": "3vvkk6ZFj5HEqS9ckxYS53ti27GWTcDSBni6USzdYXFt5XJLUHCMtufXDaG1TW3RCrQjKoEcwV6uctcm8MH2wkjt",
  "key7": "2rJP4DuVmCjJHrpbiLrDhLPKvbzjv8QDW9QoFY1KkmfwrHZqP8xVgTUZ42ZT96kNeCs9CZc645KTfbbM8BUTabYK",
  "key8": "3pYoaU8jm3VD3tZESsGoZEpGhev3XqxgJjeDJi34StiZUvtob8xJq9n3n7bdYr1ByM6cjeYihDiwAxwwan71dY11",
  "key9": "3zHtSz36jVouD6fPDZVPmrUqbrDkxvKDmKVLC5kskCjvc4r16wGA5qxbPuWF3hsERg5JBLQrE6m3qNWdLzTVije1",
  "key10": "2hABsnAYE5y5Lsp2cAhWz69NqSQCsDyTzSicqLL1As5Z83BWSjGUJV2weqFzPELug7KsLw26GufBLEwEFmLTTqF5",
  "key11": "frELxeBp7urDERktS8JL5tzFVLDtMy4DXCqCo5YH9WTTxBM6qe8wjj9zZ47E2HzSsGUxXw1GsVeTFAkuEgDDvvR",
  "key12": "fcE5NbuFq3kZcvVSKmUrg3yYpZ4yUZgp4mBDyqWfop9MJVGMx7xA314dQH5hN3w9ohPyutRjpC42dbyMPxyfHmY",
  "key13": "4PYjxYymNXRDnYv4gAaAvprKRiYG3Ugk5YYSWvH1hhMAeZ7Kog4XCzNL4SakgTQtH2KTDWCi2VZw2S74N6MsZGvN",
  "key14": "3MgBV3oohoTmoHLmKRLKCQXoUGLgQQC3eYuX6M9LXGh9HKVHazuuJ1FKVCKoQUnsRLXfd1bfPUiifQjCdsk1fdLX",
  "key15": "3nRZqAacLs7ziQeX6UmUpy1KWGVDvR7z5YaM1cpu62h24chi4MzCd3GM8Ks8ivkJRoqSwjygdsiHu6h5fbzevNa4",
  "key16": "8N2t9VEnZbzUayB73ZNgDv7sDaQVdSrxwUYB7C6gXfEDy5FA79fygSLDHGwQWj3RCi9ex4q7qn8XQFWAVL43ya6",
  "key17": "99E5spaa8g4YVLsjo4ViY783V4LcWCiJUSeguFomk8zKYrT7PVnpXBoGFtjqVE5e1eGwzph1YCZqW3rYE3soLyF",
  "key18": "B399KqZ1ZkZURJ5ttuwCfpZBA5SCtN977t677dC1xzrp6wcdXC99t1kcnxQQ9Vu7JdPKF2SqL6A2QfzhMZsDsYv",
  "key19": "399cHTUHAaYQa8U8sQDUBybWRX9PdYej8fuH8JM1cpJ7ek5QCDq8gag8qY3LinvVUuDt9UmGkHdihVoCUJ9fGWtN",
  "key20": "ziAyEShTWfTxMwT8FJi5iXHc4LigtGhhfXmPKx28yUh17mQNUFWVx5tVf6ybjVye2s6PjvY2j8f5GDXs2PAjwVg",
  "key21": "3UnKjGpDxkvpeLaYoSpXAv9esQGhG3DkRQxYertHmCvR9HEa8kUzF4w2bXq8YiYbDMm1jwXnTpkaAuswauPsHSho",
  "key22": "25Syr3Ef3LPiccf71UaUWbtHVEh3mPL1gJN4TaZJ6gKXGYHLdpTxuQEvCPGMsKnB3B93funSdfDnEq7SjmgsPS2Y",
  "key23": "rAyn3mQ2j65mbsmVQ9tZCkfEG52fijeTRaftGHYQBWNPf9gvaYHrS2GV7Kd7hFhr8jkjR1RZXrmrUHHgrHYuoEz",
  "key24": "4TFzK6BgdmS4ERPQ9HQPuPZksiyumWgYNuknwUXune8CokJC9k17nuRYcUb5edasjeufJcyw9p6avmzcGbY85Ut5",
  "key25": "5e6pyL5xjJiX3knpZReuPmmfxtxnbE3sUtwv8pbW3KiBRqbJ6DysrtYMYpANno2sCoqhsUGzVwXXscZpUW6jUC6u",
  "key26": "5DsK3LYktPVnL1uabGLXC5Xdk1H6oAAW2f1oCAzJnW2cYpVrPCkn3NVaiGGg5pdjUvCSKcXYgSVvFaVMJUn8h3uj",
  "key27": "5RPBM7E59hw2acmrdmhTx24xm66QkCKfBAdyyzoZY3zsH5nxd3Gc5gLAUwmtP54RGJDtLH6Vq4yDPhH6bTUFca9D",
  "key28": "5cU3Mbvj34vrsj2LtbNpiNyomvWxtTSTWvMyffPH9gzpjKVmXWRHvU8KEayrKWfpKZZGeBAa7UgKVHP7hVp18vev",
  "key29": "5Ux512JrtofQ1HGBZFcecAXR9KQMZXT16oZNm6gYgSHK6EEkAfWJcJapFvWfkM4bQxF7fFHZ51y4KpEmWBXMhwd2",
  "key30": "2MsNevZiHczaDAWgxxMttVeJGfriU98cPJF6dxwCY8bD37CoiF8zAtpu4WvAWYvMtKPumGi4mL76a6SkizyGQhaA",
  "key31": "EXDCE3HPoELagrVJpdF1Qf1uTkjTKUfyP7524WkM78VgNDpa63fbEvpyKyba8SxDQHSWR5BYvYpGrkxcaURJjgu",
  "key32": "3r8ZadGJwPXBQcxP8W1QZ5TKiMXejCmnGdxnWWRqbC5dXJmMd23Q3PtqHzraTkdAPSFJq2NwSxVC3rHoqT8RocNd",
  "key33": "31QbFmnaS4LDoJ2xPc6H7v4DuSZaaj5pu3uCkpCZTqKjn9dJcqgBhcZ3LhuA8TNbzrzrs5io87RvNec6uFTcWJzA",
  "key34": "5rGYYKuDYMw98MtikPuLNfss9WKvndT86emRnCg8k2xtqXhfyx9EZcoSBhvb8hckSqSMzMmp71fXv4RPnA6CUPvL",
  "key35": "58sZj8X3sCCpFV7EtcqgvbRAuX6D1qaA4PKVzPxUEquk5cw8cJ6hW16sYfnbB61bc3uexDXSMDc64AsgGdRTiSBa",
  "key36": "3zVXLau4Yoj3Y6xLoe4x8Guoopb7o57ULKYjuL7qWJ54aUaQNHvTeyEETenVX3yAmLMWNXTLk3Wd2EuLP8pA1CmQ",
  "key37": "45yae1KKfqip199bJjECHAga2Jk5SAbQf8YuvxznXgFMNKhMUMLnCtGNPgemG8PFwXuBRyPirVpDUh36YdxfvAcV",
  "key38": "dVvfPbgwyrQZBk82NaUEG8Jq8hmYgBtqzLVjTmQNbr4mHrSBMy8HKW397h58ah2EEo1qgDKen1r48FcUqQ6jq1i",
  "key39": "98bHs4nA9pjAACdnD7QDhQoocHFtJ7RdR2T25hZhHJBRVzam4b6kLNmgALX82PXbarXiYnzxeeV5vJhfkNJ9rEc",
  "key40": "28sw6u8MoB2BZpGYHZemJ1ZCbKQeFjuUDzNLxdhuxGugsW2s95xCfKDcYmJT366BiT886GfoyNmjVAL1n3EoHA3B",
  "key41": "4diqb73zdthQC9KVceQPwMMGudssD3hKEgbBvHTR6s7cd8TkkjrN94xKRGeeLdK5NyoFxhEZntuCSpxR2eQY15Qa"
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
