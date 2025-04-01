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
    "39NHm4BtUaxkz7JCcse5FqSBygUAYzUJJDjed51k9Jtghsb8WzxDyLmWckdzLsYu5GWCEhjL92HwC8JFfaS9ePrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cZbRMtqsQjevkXzmWXMiUcEwWMgeRkiESshmXYRTvewFRw4auubWZLctPd2nngRT4Rg3R8W913eQjSCDWwKatG4",
  "key1": "JqvDrFq19JYHkVZTXuP1cCjcS6PdWpS8GyuEr4drQuWWyChjGYfJw6fLsPwfFqMnhZjbLYTctRcdNZSsLFzY8ZC",
  "key2": "31UfRm5MDS5QUYTTizx2x9Ztvmk8tfPCs1wNDk1DnWHcNda4AaxoRFRx8TgmBiycZotpeEtz8DMJ9dkYio5b42GQ",
  "key3": "2WCxZ5DUWETMChNwaMxZQ4MfqgsnXDk7gbA84ipe8nf4R8G96BMpyHWGXvgospFdbU2yPgd77WuxvRAs3JjYStGN",
  "key4": "2iSVRk4dbBaybfiuq4FuN3r33dPQo9WzzTpVhb1Vt7CQxcc6ak92ouKCUChEfiaCEAUbXemH9GsuFETeDEKELA4i",
  "key5": "2SagSBJebgV1jfSph2caKzrkktpNGwZJqtcUNjyPkFMPCBYBqVH3qEEX3TB6EMeQ1jhXVKKNhFHt7qf1wGhQfChF",
  "key6": "4yAUbLqnxgsCAvDf3PU7DXkjsgjkW47rr6EjJDCMMwmnuULNq4DLyHf6gHGsMHBLC6uGjvL6NMvfJSaJRTbfPouk",
  "key7": "Pci3C1AKoNC94yebDWTjC62cvZsqBhPuXL6Xfrr9nKSUvBYL3YaodEVEQcefYGT5ao31c4koBjQvAFAbkJVvd2K",
  "key8": "3PkrzLPQFpXW6TFTXok9aJspzypajjTC6sAtpEiCsFdyAqHn24V4VHTGCDPwUcur7SghDXWCmnobuVPURAFMK8Xt",
  "key9": "zvFrhayjGPA7GVui5xdttXEEGURVu9C7xM5ircujHzY81Sms82H3VrMj3hp2g8WSnFotJQ6HjmCcYkbmq8R9sd4",
  "key10": "2Z5rNWMZRhciaNqhj3zRq7wxTgCF1x86TafXMQ3fFbdhu3UgWWjSShCSLjAk3uLupuFj3xuxwzqn7ZcCbxwWhLkf",
  "key11": "5Yw9bgVuzoBEa4AnLnVv9VurF18tNhTuJ1u5jcSFKmfsyEt6UroSo8jkWXBTmGesDZ6aLxM9n8wq2EBedGHboiMH",
  "key12": "53fg7wuvLf2e3et7pfoPvCpYBC4Cd8YMN5U2McwN2jCCt7rtuLGtEjPepSuX7YK9Tqw31xadkuX3sTmxguyFy6b4",
  "key13": "ykrd3HVZJ9K9TnKEJwUVZLLvVzF4DHSds7BJueft6n6D8sPgdWoTyRaby3Qca5h6M1QLAeuKr4qHW6VvQrDj5BE",
  "key14": "2Mw1EUCFn3vHoJnaT8ZefZR8hxao6FSowMTn2zRPDFG34HKzm6ZTvJnNMf5nd79Dgx54izYMWfo6FFpcneKuNYdB",
  "key15": "2GjMqGr2TZV8dBwpfBeAN4Ef5Sk7ZMktMzFN8pCSTDHmMUpcnaonbssiERSDM24TTiov15yjKciHbFsGxN3JoYTH",
  "key16": "xkM7bS57wTppJozuWtxvAaoWvESw77eTUxk2DPLzoezgWAg4yBuq8ctKeEX3ThnpgfYjuEF3899Adzk95ThzSea",
  "key17": "2c2bYYkqgbsYvkAmhRtoJSK7x6nyfbmkgCcL6yQmry5SMPgCcttCrxCeRni4SCjPUnZUMJtah41Vp8PaXgQQUFDw",
  "key18": "4TUQn6CBq8wSjg6SiuSvN61VNR6n6ggxBbR3UtAP8EF4N2kBDxGkvjHMTZk8ga4hyB9tPaBGe6m2DmwiRBF53Xig",
  "key19": "4Vd2Q95Zwe4mVvNVdeYDD71xex92mf7JfbCB23DZ2GebUTiSQaV5bmxZ7VXk1xDxM9ia2j1ZEKBSDvfZFbFXkz8D",
  "key20": "5mn66UWrcM4tj1egVcsxvcjRDqLUbAbfm1NLzUtyYHXVGpn3h11RSkgNWUieLxqruWfzbCrbGrvu9BRVVgmFLE3s",
  "key21": "3FBnRGhCBhVu3qhcJm2NP9eyurR5vPQaiauYkU5esAT4mEgoMrPXD81VtQGRFuSqRdDmPow24uLcYUiDXMtVaNPQ",
  "key22": "4fC43W4YniHVexybSYptS2vLPugzabq1bVDCmygFss4LXiLa1cf3xf4iec1ZBRyShJpuN8WRhiaFzXUYGpM6GZHC",
  "key23": "4rCnAbYesB2jirQnFgnoygxkSzUtNbwoNL1KjbvvjmypESmZqA4GPHKCRyYXoVZRQJeQNX2GEBHA4WCd6oq59CVw",
  "key24": "2Zrqy9kRdkU23FpR8RYTUfua3uBUQU5ZYR3MRgvexcaq68RAVa3SNcLeqEdbSZwYGJRQn5hguU7eRDgDQR5r3m3Z",
  "key25": "qaTjwfWrTEKgvomGMb8sgMzrwEay3Ak9vksuqp4Lyge4t5dwSipMnT9cqMJqN78fBRRUdhFqPgWsEVUHxNUoPtX",
  "key26": "kysfEW11qb9X66aq1kCEJP8ojUJPhJayrfoTeBDoVvXnQcD1QXDsuBe2eBHvHhnMmSh2RpXYTtADgR86Lrb9jUu",
  "key27": "d9eLTaN6dCv25jtvgT9jiqVipqY6cSo3TXbX2cnDzcUUSXwgY22aYbpde7agR8eNNUKf2KoVbUTvkGU5xkS6van",
  "key28": "4f9BM6G3v7DNXxZQeUATR1JyjQ9YVLG24KTrNabpKjzGsLRFWwt2YZEgHH47s94ENviT7bwiZ3k2QhhvLZBjDvyc",
  "key29": "41NYGa2VgHXQRvxta5FDCuN61pEe97hMCXsGTEpDyZSL3R7KB3G2SiiK98XNxp7BeZwkc87ZWGptVgspLkgUkNVy",
  "key30": "AHX7aLqzZApxDzYrLyq7upescPUAbNE37y4b7xfMgnDpCch51WfJnmiA27PVxN3En5DuVge2jmF5P1GDMqwXA9s",
  "key31": "YSwudf5FQU4ngLk7ZoJf8UkFCPUsNYakfKKSNRDLtw2oDZ9iTEMQgzGqeLF23nteRwEx9wyAhjReiJZqsR4dMby",
  "key32": "Stg79ovTteqy2dKqb89LAsHAEY7ibXi14EDP8PT3qKKjA4UzFbnTkvV5FJQHjpNjre526HSNxkvgtm7H43Awihg",
  "key33": "29cV938edgWryd5HwFpaGCXXijNEHH4kVkfFgYHnaxPsnpiMXPEed9veGdGdjH9Pj8a16yofaQ1tAVAusZLSptEs",
  "key34": "3jXMs5WG6e8CTHW24vDBm5uNU3hpykZiEW7ShSLAL4QkYCov2Coj2CGKLnJCj2yaDaPPbUWVHLRGZ5kdkbF887Gy",
  "key35": "5HUHLQsNUcYbGgBTvqWBXAue57QNdzKRSaiMmviFofG5JKJecMEsMj1Fe9k9RZiriKiTev9KTx16jKqnTFtF7dMK",
  "key36": "5SGuvGcY4RACuZt5E9T28z9MVYCj3jYcZRw2R7dwM5Eia1xgvJCykmrWZCzX7MxtpT4J43jjSAWqkGAjxk8y7ydH",
  "key37": "suBdAYVaN3exmSMrHCGaZTQPVriipuvNkvevDt1zQah15wZb2Bpf1KsrmN36QC1UvZebxmUhWXEruzsg7bZzu6D",
  "key38": "ZQQShgVcTyJdKVUBC1GmKJCwhfRmcB7iiWhoxJnmJy9j8nSUq6haoDugZ9ugdKb83YcnpTnYMq6SdR2jzACTAFF",
  "key39": "3Bbw2zNoG5XPJiyKAQxxjKqWhw3d3F9GsrPyFRZx8CGnBs4DyvHiE5DeEYMHumK46AmBQERBgsssXGBgPYkQ36as",
  "key40": "3X61ooBez48t11Lx7d8fkb2BTm1qJFCvZGyrjAHV9A2N65Ly22dBZTkSCXndSCCTRBFtcUjTUybRXdicZtFSKdEo"
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
