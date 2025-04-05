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
    "2otY6rm5eGeRHyEr24WRAMA2HUrTmAKCRMTz4Ze2n5WqjnJhxikJbEdSzb7D6K5E9x7SUwGT926dKhbw3KHqXKbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KBoMqrcVjz47PaKJZsvZkEGB4foZM8nk1jzXPvfmnkwGTCMNjMv7j6mCikHgjyovAWDoQFSEUZzgbPq9grsEWbY",
  "key1": "uWRYrY4UveNaPR3ovYhMuPuJ2gcYi2xbLomCSrSHdGK74uSugQHQeKvmSWrigyL13oALAa7dcoK2gStR2RN5pGz",
  "key2": "5K43Zk7y29ENs3oiKevtg18uhyPcm75Mbse2hBo6o8Fyuxh1EfBjRhjRnvYpqpfnketDPgy6xwGZB8PCGEvHinYK",
  "key3": "5zZk8uFtpVejq5hPKxwteoV6pBKq5F71HFP8eYLF3dWjwB6TDaS3fWKLMyxwid1e2FvnCbCUsCKqWZ2oEyT9Nydi",
  "key4": "srs2wbNiM2JqGWLFwmQiBMonEy3t7Gea7BPpL4i169Cn7N8XxnQ7fcFYvSWMAo3xgTEDKELY6uQnH2eNp47kLXA",
  "key5": "4hh1VeG2R9upk2UvLVihYMdsacKVoTLzEP4RKF1r5g17JCBWbb22i4Na9ztL3PFaPHemzsFCzixor7KBAHNiUZqe",
  "key6": "Nrr5wBs2m83QDJVqFnUpiSn6aGZ5qUQZ6ZN4noX7usFxP5PSEmmPSr3VL8uijWKdvZUzLjpnqtkB2XshXb44ZB7",
  "key7": "4ZiRJNfPCNAA4dzWXPLhd6kQ4ys5u4RxHmqtf9Uu6AEqoxrCubRzMirR2jojZQAQdiHfAQ2NeR5zhf6w2vxxGa8t",
  "key8": "4Dd2iJG3VcLiDKWMUcUkN3EtNyYAKh4jMsFjT8AZJC5kg8gxCCsC14Fcps5gmCfNH1VA6tyanXtLR946guvDf5XT",
  "key9": "2YudJqmapP1YmbWvEVn6it13eQnBMYnSfosHuiNA9p9oaoCYtoCVcXdUZrfF5PCUPR2KyNR5i64PY7ywbmvbWMqL",
  "key10": "2WqdQhzioVa73WCussHCGBaAs2QmgWiWTLmMaKfkWTzWq8DFCPt5DKqCsj6syESjcQajyFmrcvMkLnNZTTDnoo3E",
  "key11": "2KoaJTmcESiskva6wrKRnvywxPuqNoE2ewdG3V8fb57T2DUJ9HjHvyxqUvgMWs4i9XtNcoaRJhEjVP1VVwuxdVP3",
  "key12": "CX6BJRvhLWBcLGbf8xhzKR2bXkVHyqSE6hoPKAL12ofSscd6u3msvn2RbLEVrKjHuP43Z1zCLRN6Gc1mzbM5N1R",
  "key13": "2ZWyE5us4uT3irzM2bpwg9uwfpc7ZBB2vMdWESdNZTKmDcjLQuHSHYjCfJaqUQNRJGe2dypzg1uFT34f1Nzau5Py",
  "key14": "64SCGKcQnkLardtYaw8mGfJ3yvNc2yyEfT1XhgJ5w4rWzopB6cJJX5w16YDca7Po52EdMT4RqJqtxRRV9KEp87M2",
  "key15": "31JuD6jWYANZ3yaC2obmkMaCYVhUDjPJSMXsT1TwkbzQTecHR1fwxq6qxfjT5CVfhqY2f65yb4sc6aazf5EKRbFL",
  "key16": "2mwzqWaGZDFxmriyvdnqvXuuaQ33XJkUiaKvYScAPeHjqYXku9pWg1THTAbeWLnaVRDHV4C2q8zUVxRQXhE5fR4f",
  "key17": "dpAMwR1JBbfJSTUDjfGXXbxJ5ELABh9HH7ZiSRmq2XrJStLuhJBi21XJMxWAFevJ3BZn22xJGE9bTJm3FWWbcDu",
  "key18": "ygsStVngprHa2fYk8TJ6BN2Dngtzn7jWoa23uWo58ibSGdPr6KNJoPt5f67EBzW7VxyyMnrvUkFoCYgpuDmBHoW",
  "key19": "2XcyJEaiDw6ChH8n2w1vYGNG7hSJB6cHZR79ixJfbP7R8KzG4HYJHX91rgs1sPXzC25kgusBFz5ZAMSMbVcVvY8Z",
  "key20": "2KRcbmd9NSaZJCPHR1C8TVppDMuuAU8MD5Tk28a69QqeXFcmsKh3A3UP5GkUi7bW7gC3upiY8K3VDuvzHDM5wjjC",
  "key21": "35LFHFtp7A5ZgZHkmAVfTUhMSihEC5DfNi8aG1VTitoXMHZmgC382z1JmtXLt65wEdWnNwwBMBfmUnPm4Jf63F2L",
  "key22": "p42CZArJNaVJiirM6iL26ULLmCXHt1PyWgLXViJ2mgXe4XevJCSmCif8K9qfrjzxCvnnWwW2Ze6mBNWQxqY8XrY",
  "key23": "4Wid4mNMSBuNodmko14mNNQQfnQKEhhgzZ33ZPirFno5FzUjjcCCQM2evGQVNQV5zNHyrnmXKcGjaEQDJFn2fVZ9",
  "key24": "2r2jSzLfynHsHirQg9UsKTZ62PbyFPTzb8sse87FdQ5LKwKHyg7B6qkeL2c5yxL5BchPX6MHLbP7pXJLXhMv1jvb",
  "key25": "5orvFGDvhXJX1TUuaaFvZ6sxAgmF5Jfo6iXZLEd7dtnvTjH8tzdoHBT1U2gFjNQTXk3VZkxbKUANHiUARn4q3FiL",
  "key26": "4GBCXgvCCH8imFRsk7uJbw98Wx8tp6mQ7KcJQqTgbgYokzpHi5YYSJFKFFAPiS9dDftfnM8nUHcubykAkEPxemfV",
  "key27": "4RyfhYytTH7UFkBw8x5EHtQpGZi349h1e6gTNYjNEBvAmsc7qUr4oBh7WdPnDtvUNKyo5BEWKWzx3pLndfhnNvPv",
  "key28": "4Yc8zzn8hJbzsjbRbBd14Q8ZAjJqim6BcU4PG1CJYRJctBBrGC4pQEPaAyydPTYw7rwX8iH6yn3rV9fodByDnjtM",
  "key29": "27J9kLR9aHTpubXJZFFDEbJR9J7UrqbYutFq1mkfc6qpexeRKmJACtLhdr1qTWXA5kdX8xbqtSouYpVjbgkRQjFq",
  "key30": "2CftJpicQCVxEW8QAMUSVFYNeT5k8M89rgmJYCoVHgteUuawXRhNtUk6EU3Ghe5KFCZgWNCWrc8TrPVe7ip2CUav",
  "key31": "58kGTUCqmzFNPQxocQK6Y4Fr8oEES1xQumbFTntUZjdK281qaLpihjpSR4HGKhrf3paRm58AXFK5QwFG7s4nsqdF",
  "key32": "32Uiw8cfhdAM7E6QpBJc3eLqwtEbZJuTBmwZkbRei8Myi3g8jpPk4vCPU8JF2uRWmME59kvgYKybAJAgW2UgiEXV",
  "key33": "34MAoVHnEqMX9bbhwyTAw8HQzgdMDtkwBT8rdczGus6Ym6JXSYmj7ZysWH56A8vXRbmeo6yFtr8PP4bsXBoAqizz",
  "key34": "3u914qrf3qJwV4WiK3bB61R3ptkiCqTp8B1jfai7SoJuYJY7nz57x61xrJD4x1WesP1bfWe8o8a7KXt3dPAg2qzS",
  "key35": "3JkFv8pbNgGhE2dsJLkkkMiST4FNykPUXBbPo72rTSZb2CpRfFnayi7B1ASEFLvLxx4UmKja3yHB4yr192XE1PKU",
  "key36": "5meC813ofM7yzBac9WkJ9gkLfax3HCkzrgpApGS938aUJuaqQXTXL64ZQPkibN7Y8d3TRtcRRRbB5qNAJcZ9k9Js",
  "key37": "c3tSGcwQMXX8RY9ANn6aaALV2DMju613XuVCdzvKM4osn6sfkro4yD7EZZg4DJgibJMggMonfXibnMZe353gNLH",
  "key38": "yU3ZkKhPMvuqj9n2erp1wf5jCtXHeJsUb9xJZezttKSbmPdn2Z77sFfjXGufFFvm9ge2XjH9n7xj1dEGhVWQDey",
  "key39": "57kxhk5GbJLyZVRXPa6gqnqHtDT2xRQbfsg5gbksfqPtoxDu12LRr92KFz2zxptyXEoBAXpaphvYGvGG78dxuvDg",
  "key40": "3h2DYs4ETrXuNH1cg2WCdLrPQdZNqgbHPzAjCU2mNcSfHQijhornfhyxfBQ2d1aQdHdZ9sK4x4faULDk5koxH7mV"
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
