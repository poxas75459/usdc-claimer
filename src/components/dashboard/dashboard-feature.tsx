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
    "LqXfmcwU9VNaHLQZNSXH6iXzc5tWReq4NiLggoBVort6FawbGw6vh7A2q7EtDqk2dn7T7hnwPtDBGwzggrzioaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3upm382imiPu8hv7P3UAbv8XF1UWxetxdmV8QtiyiqUzrNSzwDz1hqGJ7TthBoYbKDtTKvhFn6bD9efhekvz97sH",
  "key1": "219zezp62WTpYJu8aVYnm3Ljy4sUkcXfnM1R19hhq6q5dKM1eVfH53ssPaKzT6KoFNcUXr3EFWqHaby7g8y6q6nE",
  "key2": "2j4zxQfYy9vzPgsN1YPPUZPx1uH9PDUE6WWhsGKWWU8HfLKj5pa4Ntw4p9TgtNmfDpVgR7M9qbdDdYSJs1Pk4anV",
  "key3": "5sRZacbrc9rj71vdavnG93F4YG1yCHN53bXhrvkpMK1gJqZHRFiiYs5JkjJKMA5NGZoHvJRoaiomKSvNTjCTHv4",
  "key4": "2gXvJzE67NLnUCdFoW28Ngs2QQovGnZAoXdi3jQY93TtAfdCKykb7tvpf5MBdEmJbAgAY2c4TCUqXAu1QSdcX5vZ",
  "key5": "2HLiEZTyMNMPd7QfUiuZJqHWbkxcL7Qbyv9Qspqs4NgwyYs1HkPUQXKpdEETDaiTFsA3UUBNBgAu6zcgPaX9dXY8",
  "key6": "5N848vY9sZx5iohommvfcnbCXoaihZqvzuzLv4pMmSn75L9R7KYGuXHn8oWSKA33DmHujgKRtJzgQkC8m57NGDis",
  "key7": "57TsDm7f2QUEU28in9aTXRszj9MY19gtjw6825H72s3GGZNiycW6DpEpGYukjXip9SCbvjEj3fm7LNujcPjH8ZEQ",
  "key8": "4jhoDcVHc7cq1N55R7EL67ntQeN7BJKCYznBaE9TofnBY5oXwophXcyybXMdYf8ufekwdec3fC3mfUqBsfWrEciH",
  "key9": "4yBChNJft9qnCf7R6tSGGZQ5rktxCKvFm2YeiUo3XWvtmgc3PYttBTRh2TDJTSvSHMhhV5RhAcGM4TLAuk87yW7r",
  "key10": "5xodHts2TERcyrUxsd8X2eGSqss9ab6M3ijTm5thsCNxPG7NZhrCikjRpHaTwrZ1ggeqYUxd3yLEVpQYLtGzwstF",
  "key11": "3LB9TKnh8uS65NjBY3eTihugqRzk4NjMa7NnCgmFV7mLv82aNHfKBWa8MYhYU1UpJgS3HBxfTXedAhKP4Us4TJV4",
  "key12": "3M4s8gkZrkGffBUXN6EgpcqpWHuevry11Uv6GRxVqvcchJCcvkbpKHYqwRqBWCxSVFo5vdhvd8jU2uWEgRXLKmyF",
  "key13": "5ifRCB4fcZLtW6qTXB9zGqXCDreSk3F2SdEBZGUBZ4iqaftpM2eSLgKkrd1s3HsHijE6ZTei4yMoSxEy8MBGGfXF",
  "key14": "2jsszZjVoirGf44RGhpaNbjkDVLxGX92Ybqx2gHomRnGX5U5UXDoixe3JnxizwkX4QpWhZPkamXdudqZw2qgu5Eo",
  "key15": "4JM1TSzWNsbUuASHmpRzDNbHkX3W5D1yH8eVUs2ztup3tUQNpBKECLpkTUXkfsg6rbrYYmU6hLwDHEdmAs2ySK6q",
  "key16": "628NajeriTtLSVUbiv9jzT55MwiAw1jqs7G1DZpvaUDbjbVGFHTtc4Z8usMySFx7ysyY65MDqYTXxxwzJxfGHRRi",
  "key17": "5QcN1kK8WGgz2oT7jb4G9uv1yV8DrbH7j2TpFaxMSuVqdUdtwtuVvnLFNo5daoTdgEFdojsUqvC1rTW2mKUgdPRy",
  "key18": "3r1vchwdGJwK2geT8H9CWkXSFx7iKAE6xDbAVqBi5SPPnUQ9z4MzGMt3ZpubAYJwF5C1XguoXsei4aq8r9YFueiQ",
  "key19": "4cvGJQnvavWa2uJXfGgV5csa67d4Tvsar49sawXwC2i5pXM83AH3SY93d77DrKju3pJrx1B72quLR89fcycTF9Kf",
  "key20": "49ARgBM2KAocwVP3U3p9LgXV2apjALNCpuu1b7JF9wx1dxR1fySt7VW4nvCL5qtdEQYUTZwo9weM9rTfj2rzxgHq",
  "key21": "Fz8mG7NEuUewkmmqwHfJwqMafd8J7uFHxg7VpvFqTMQwuR55Bd34mriLmkaEvVVX9ormRsxtMDBCc16inZU1ncX",
  "key22": "5g1879i86KG7hyFBfWzdgLr8ZrFw5fW7CDTG8uQg9zZALXye4ekUGYxv1Y7YeHHmPuPMyjoHeDpf7R4Mp5RawNYN",
  "key23": "4cRzouYck5VcBgPp1htmxEY2k6xmgh3pEHPfNGd1Y8oX1t21eycrgnGagcRRgWcaMDSxhCiawEqmEz5vvqasNsGh",
  "key24": "4emQBDwyRQeGkcJCypj9uwrijbFgYRYVJ4iJoBt3JtP5FVoNNj4Pr9U4evnB6cPYdUqLsUCdnMPngpLuoRVjvBQE",
  "key25": "5rxryFXgcsYGmZpgMzDcMudu8ctwPYqmsH1GAa1crijJKBxWJBeQbjzsDF8cjxTsCMzbvPML4W7NY9LQMMVbvFJ6",
  "key26": "5Nd2JAt1XVfj5d3kDvRYiqtuYqwkG5FTFqHWmo6zzzjgMifdupfGuFYu1JuLMwgb7yuZy7tRryYWiS8ySub2QWkD",
  "key27": "5kcAVzrnWM3278pKzQKqBR9tdoHVVuFGmG3evy1y1kJ5ikiETRsDT7Fti7PWWM94AL3CRGYawXK7nXV4Y5CpjYyK",
  "key28": "5oowai2GXsMySLCQzBncsGEyKkv317xrW7V7SRmzhBNoF7iaGcAaoVXJJNWWWY1unCCt9ofgyXnEDQCCezfntzxz",
  "key29": "3MENQaP8MVj2eny18sx5FmUbzFkKVFSwfqwKDyYnKR3Goy7aN2GZB66bELAQgp527Sj7XLPLVin3AWQUmMghR3uK",
  "key30": "ZN6PzouW1JDYVwuVcuiHC6GAaQThEGCrL8rUQbMzvgTdkYWxtncPUrPkRJgBXwLw6UngDYKiJgFNkaeyxfYTiUC",
  "key31": "5vBCjcj7ArMcwhs25YSH7zT3tKysBor95R3hYsdF1mKWnymDHdcpi2yeJCti3AWWDrZuGA2SGDjEHcXG93NpwKWg",
  "key32": "2jUaoMT1YUtAwiYP9NkKnyZKvX9q1NmQQ9Fbpqt8AzfM4GfzgeMRdMfMWsrEXNCPSK5rtSPkWvuiUeR1eVyJ7SCX",
  "key33": "2x3NYByLM4ZtFm1ybd3UeLngpJtuqqK1bkaFJThaoPEw6aK1GeJmrjBhUhx4QRbVDFNPhhty8WVk2nU4EjKuhtV2",
  "key34": "5H73gW7uBMCrQSx1vTGfPmqq4XK4xtVLhLUBJWR43UoDyVk1MvCCN1tU2Ks4fSEZSYyZoHx769xoLCtv6G53emP4",
  "key35": "5N6YBmfMpucF5485QabS17L3KaDshDpH1wfc4Lmd99pZF2fn9ULYpwPbh2PrGRDr7watJJAGy6KhLBQzLPzuC888",
  "key36": "3s9HTfPnpP5MuiSxfP5SmknWT7aKXXxxkfJKAw3CgH2kk2FKYGdHMm5tPKXWStgDbAMHdmeWwx2KyqzMUeV98cE7",
  "key37": "5seNRKFyfcHcxjxTCURZSrtb9Zb7KjWU7iRmsJeMJAPSWHMCk4XT5UUHjEVTxcuQdT1UoCiNTF42RdgqY626Jdoc",
  "key38": "BNpTDSo9zcRXDoePr91DTAsntAEqbq5yKPBC5rEDo7ZaWt6tXbLuchGg86jFwN2vUDFkumNFjTGEuMREtHQkmzW",
  "key39": "4b5jLoqtypLnFzCGM1PBxdSBNXvhSSTVxYyzE7uWfhyNXn3sPSRyhBVLam6jg2xGrWB4nHKUoJu1rbL4aJQ5xv1F"
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
