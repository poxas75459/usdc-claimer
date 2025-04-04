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
    "DfuvuzGa9hnZ8R1XxST7wWW94H5amhpR1VVUGXG4nkiMPWjwHZbiemgxWy4ubXDi58WwYY94xiTS544WXC79hhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDXvqeSPa4Asx5Ayuf65ED59fkVje4UMXKRQQZ5o7Utk2uBzzxivgm8QQJkiSB9R1rsSqRF6WpDhwMBTPxBHYqC",
  "key1": "27hMbUVypT8YgtK2vHEo5xFsjD1TYFVGnmaCg87VS2LkNvBQqALEzEarKrGQ93eKQSFdUzHZKxphfniJXMYeJrBX",
  "key2": "5aKsXYFCrdRxUYF2LoubBm6kCWccGJh96VuQ2xU8zgXrtBk84ybHAqeK4XMsx5binG3W94GSQD1s47iQY8xa9A8g",
  "key3": "31GNJ5MJ84DGHKYvHnVozSuGtW48hscunYK4rvuHHeqW5P4hh29t5rWgyK4sjLtCf7dd4WtHgEQRK8EQuGizqT5P",
  "key4": "5ZVuSKFni4VJ368Btc7yoiSdLCjiPJpsMUDKes1jdusqJCxf6SvCkneSRZJVFbHPcLr1szLu8jW4X3yXdx2RAsyQ",
  "key5": "3KFfK8NJnQKUULXYFgbkNaYJFjgoB7UpygQWyK93Qwp3RbcXQUZhXeYUDPfktDbs1bGjH3uLAwn7xggYff24ijgm",
  "key6": "6c2HRD3S9PuWZr1MC4fDsrqgwQYM78tp1ZYmfzWD6vbnLieNKgWfCEJmSzcgQf58SN2W5XxUtRXwNdDzWM8H2BK",
  "key7": "3L2G1iJZYBjFcqn4Hxz8SN3DVKCNHZuvz29G223gUVYW4nsgNiT2q7mT8GsA9hoJE3pgJB2oAHfVPJSUFSskT6A2",
  "key8": "32QkQtdJBndSpMEU7m3ebPZEZgi6GQ8bgnGPNQ82uTxz2apGgtAHLTgHLwV6nyL47DyCbQys4iro36sX7jCbMpif",
  "key9": "XqvDqKhN7qTPfYXAS3kyRWQ955Lbo5ww2RBmy3NPZREZs1pbZH88473hdYEpesYoC1kAPsaP72LxegmmXa7peUA",
  "key10": "4VDffKBxrKUMT3Vc8zbdpeieiGxjyxsNGntxMoFFwMQ8japXCpvbuDdUcuYH9d6J92BLkeMjjuNjYzy5ftbx3M25",
  "key11": "5g8WoP4FXQQSHeRa15xHbjZ2GLA6gbCVaJxo89h5XcoJ1qZFyvJ9vmhpytYsvhsYRQE1YsFCA7wopXBruEm8jsxN",
  "key12": "5gnRJGK9Kdke9TrjjrEGfP5ELYWzm5rQ8g1HhERutps5pTPRNnSMrSxWPEViwvq9rkrdTKqkSDDgtDMNuJSb4kdE",
  "key13": "5eSv3LSJfEe4cEY3bk3VNCQGBbC6WT5PPPf19VHkw6agDEqswLvdTcayVibtjTLSbGdGT3PUbyZtxH8SsLmoBs2G",
  "key14": "4a3BqqFyELHPBF4GTmBGGDuQzVDH6dqW4DkDqJDXyF7ov5kUjgVeRP8RA4pVHzJevz84utVgS1eYmDEraVQR1UCG",
  "key15": "2QNnGDaL82CFVJq7RkHKm4qQBsmgj9MR9wo4sXNLXoKsfhBefGyeVaDXNp3qW1SnpMBDbfitv5Jh4Cf55HymGW4S",
  "key16": "HaUsJMsCq8L2ogHBzRyWXndJVcSURvrNdSMQYKuhSvmocBLysPRNiGR2LntF1FBS4T9mj8XEuvY3XsNYwLFHx4o",
  "key17": "5d2cgd3zaadgro4NyLisik5BiTZYukSgRdK83dZFN17JeKFw2VtUeu3zz14uygdSY63xcbUR2wLbL9qaih7XSDdg",
  "key18": "oHiDWtA4eg27aGaWvBFAhYWNs74cEm9dhrb5owaM72GxkPcZzt3cKUZS9vPbkw16K4nRVQLcjiftPNHwkyb2FMb",
  "key19": "3DktetwR1PfVRmn62tJ3dh6X4J4ftc3WLBmJYS2wuB2hMGUFNVaz8SSZXyfJf7gv7tJ235VuCqmE6QA1E7qxPB8N",
  "key20": "21Q6Nk3r4txkLJNFuJvCQ34jyPWmMg3boHRmmQpzawMvjRAYnKAPyeA1CgCZhnPGAbdNbLZdwBFPPScVG4Pyrhf1",
  "key21": "3g4jN1PKh8MSrbzYVtdrZHKwkhGJ1gugpzjzabpbXenLjgEXZmVjzSLGRtLUdXWxy4EGKY7GwKx5QQk87HpTNFeL",
  "key22": "3ic6ruytpvb5aBb8MkaP3v8JyZ7DrbunNAPtCyhY2Hoqh7Zo4EwYfaWHkQTLHhDKVNbkLSU6jhUC7i7odmH4SKo4",
  "key23": "5QxpVwsWFpsNwSDdqNt1iiwv9JBEA4YReaWpGNiJU6SXHFRQ5Jb15YMcSDwE3EZH7GJboNF2ZTTvcNQPTQF5fetF",
  "key24": "3J2SyimyP24rSNw4dLU9JYR8qKZyawvViyGzH5qNpHSnEsoD37ZmnXnwcq36Z1DaQLGjcrsxtWYWqVinz4fNkt67",
  "key25": "5Qu7kPFFYY55DLq7iKE95RouJfAbAGrAbKxkAeV19oquRy6KV7cFaQWdNAkuVKBczC8YEzcyPXMaJsmwyGPYz1q2",
  "key26": "5WSu6QqYosqMFQFtQp4ELEUzNwrm3JxsFAQhuPugT4WA5QiWTYtVCFYeLr1v3Fc9jX1wuZ8m2eThh3xyDJVzXuTK",
  "key27": "3U1EoW4mzZtS9K7EikvroAdAaeQMo7KzBLTYoDscQMvJwCEEppbCFfzqLVvDSLxkZvrKbBB14SeyyrKhQ2iFPeq",
  "key28": "44LnsotBiRe6zEMaTnrSiVFDhCw7Q1qRdAJr9bFdGXrKSP1NJef1mysXBKnu8qfPZA84hdJRZAomoTz7xiZVrAMN",
  "key29": "4vTzU88nUChQNz8vi3MxAR76iR7sjSVmbVfkgjZddDRfzAEdcN2GyrimkWqyTLzAFDSssmxe69ehxBDBieDJsS7Y",
  "key30": "4fpdXUoZebJLGHSoRUzzL5vfBWjVhr7Z5WcYwy4BefkocQ1To8hEXtJfcJv8GCfdafMCwev534UCpdhnnRAQgwFZ",
  "key31": "3RupDP9HzEe3yB6BimNUfjVtyYgxuNqoSoU2T5wWomqGSt5PL8QxcrYs3LvdVcAPZQvkU2xLjEZWxup1ELSYtXfd",
  "key32": "2swJkKsvmH5pLYGVCkFuxJauKTGr3YTqdmcqUe8VCecGvzwe712GdPDoLtGpCQmSvAYSp2CnJEfrWbDxzNSBPo7r",
  "key33": "2TBLbT7fiZmHpRBT4BbdSototqwLeL2krBTezFM81ht6UAYoR9pu4FWL3XvFRqTemkw52fXZ5AtJmSJik11FDFeP"
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
