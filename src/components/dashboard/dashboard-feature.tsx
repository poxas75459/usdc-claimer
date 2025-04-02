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
    "4vQGo89i9vYKPwR83XyQ4PAUMich4owRs3CG515TUgEUbop94pDqbmgv4czfNpyx7KT1KRrDQBKbJ3JKY3a8Bsvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGtiGzsn5e1ZQek7sAbWf2dSSLAzAQz5jabzooW8c75yiNxzHe1mWEJvdLNBZ2hpcWe6Tn1i3rxrnGqr87RzEDB",
  "key1": "3f9jrRqaPUVFSfBFsQMSbNRCGSLJ291FrGNHLkrBWRWFWG1h6EfRYsU26nnJDTUFTE5DEC1BU8v6kUSFnkXSh6d",
  "key2": "3LWC3wWTEjUHtMVJ1DDeXWxuPm6HNzTHaA58FSp9g7gfE2fd37ay9ymE81ZDboj5MsxQCcbL4e1My1LEqQb6mHD7",
  "key3": "4MJDPdGEiVf3U4F2YdYpkq1YWG1bEdKtdSBUADr1696PHkckHZ1N5Paamc2n5TChgk5BkDXLmQAVzCEuap39VDrs",
  "key4": "4yHaS5MSftz9wchMhrdvmkp3PxHgVtQ8KXdf6UXTCiJsDPaiavPKFAMqbTBu3BoLUtrCTkWvdJMjMKaFWAmN5cZq",
  "key5": "2UbBnB3iKng7xvENa7KwNXUDf1xfDWTVdRNhWVkX2KkB7B8CKRFsrtcDhvTJV6jXvUtDZdBinoqWDPoF22VfhJPL",
  "key6": "4LoCy3TSamGUBDRoLXu1fsgQ6XjVYvopqiAQqPwHvVDM1GLb6VoWzBALH8CL2S7Fs6teL2pBAupSmpjVNgtyrBe3",
  "key7": "3AkijfMYZDCvrqk7i2CHSi1z55Rv3TRmtUDugudjyQAJ6aR4vwej1WcqcFKfRiHhj6N61GPDyctyNoy46DAk145u",
  "key8": "2tPrSQMJdM2H8JcSEJcLMDqCWqGfAmGQsruRNUttRAywPkrxFhKQz8UjcRso7LuFCLUCjGFwejhTTGAhdm5CcN8b",
  "key9": "612Q4K7NxjT1cuDr1bvsLgYUN8iSAuJK1EYpWP7LMQfNxx3RqV8E8QP55SVCXP8m7SkYBgBBpdJ3JVkVUCc6QF7Q",
  "key10": "Q2G5hVoHbwXANzPcVgdXuiqKFEGYnkvmweNiowp7majdK1FiYoab3veyCbAJW34DhNZNYG82XJi3tCz3ddmYdox",
  "key11": "WzGBx1B53noAZhhcaU5A8KetM1gi55taxJHMP6hBeMSmUinXQNzSkyfbU3hUbtzEhgkEta9adwWTf6VQuKPE1Jm",
  "key12": "5vYLrkWyj23DwgtYNSzCZrc8RqqnbvANF57e55Eb2buZzqoUDie4kKihiEoi98qd5Mj6C8GeMoRD3ZYVPxtsRhG5",
  "key13": "3dKevtaNPzACRFKJNFsW3Tz5zcackVkgmSp3uyrFdeQtYLZXntxu3W2pUqYGPo72sUQwtfuo7b4bfdbDcaHXrdrT",
  "key14": "3cjXhoMTKMc2uqoq6YbSQzEKmtmncFsKfab4RbECyMNsJuUQjNgAC3iRr1fLCUTU1WDJFNk3sdC1mMaLtDLCL16L",
  "key15": "24uWwkBhhdT4g1M2JJPCHWFQpPWP1BJRWP8j2FaWuGPHnDBLt9TN7sHXFzqBAV8Y5pKHhjziWewM87ngAmjmT4TX",
  "key16": "61nYqVzfcXiRUsYeq6zZdYryp23eThsQnfyf1jnEdDv3ZMpGhz9jqcdnraeNsCXNzi93SXb7xc7EYi341Dwc61aQ",
  "key17": "2qrjJ5XAEvM9BDS58iH1FUQ16UWXCmab4WHkCdEdbk5J1pUh86SxzAmF5XcELYt6dRAQgHVCKcDvWUDoapWNUyRC",
  "key18": "2Ds8XreQaeWVouj8yUqBXupy6hwYLjoDvp7v9mhV5i6odaQWbVgyZB2PiyPFJKWHkfCLNmoKNRf2xncH9PAFAgYs",
  "key19": "D7E8SCLDCgBeWBWZ73Zj9rNPZ3ooxjKfaSCkJJKUXtW3d4dutZYoCBzFtGmxXbZYsrxSHm4ntEGUVnLFmBqak6D",
  "key20": "4MMaMys1yL84VwJWyM4d7ZtRRmNa339WhXNr7GFyQFeQmK71WqTSMua3bLpssRaozJGXzeNshNacJQKnnKrDA2iW",
  "key21": "4fyG34g4aTD8TBVV9qDaqG6mHAmByKgaNXKEqk4nZ1V5rwt5Me2ZpX2TG7S9pPmbctqdMErfcSYoJMSxLfR4Zxyg",
  "key22": "2sFjaiy5kY2FQRHJwRAaE89DjYjaSpcvQeyNBsSWj6m1Ms1MugGC9ktXsZJ6z5U7cpxaS6W88wPAut9tJvgdp2fj",
  "key23": "3BLDF1uDiUY15HaHUYbReT8c7TMVpDtVevcYhGtXMd5dfhEmsjbhzkQrpmK9umwgRgynZnnVnMfF8E3UW43qNEdc",
  "key24": "3MSJFAgQiTkvh9HGaN7imgakRYuuAc4RGf8FrHB1ERPLTn5AKLTW4JpXN6Tuxmy6tkRfMoiFoTg4ika8YDxTf6wb",
  "key25": "29m42kETGW1AX3MEzGjbm5obCgHd5mgfVaK2XdZgMvb5CGoxQ66NA6cvJhfSwFQYvbyVYp5ZmcLGhRoRZt7hs6FE",
  "key26": "4W6E11EKBPEVKdJfdiJC4b6geEBCe4hagAVdrAhEdNVEUrhSaz36spqwGsVGNNWxtGVgG3wtrXWwuZykrsqKBXfu",
  "key27": "31GcyUubrYmkExKiyfkZhHDqNNZHKxf76Wj2xuk6u1wovDgKVsNaQgVEAdWcLXSmw6CQUsf8SZxsYZxfm2r2DwrT",
  "key28": "4bNDAMJkJvAuVyyHSgUsQQn3ZUFezLvgWKL6p54nDnkxeiiYmwrE7KWSt2dGDb9LUyMyJ7cBMPSRKGvaJZyE9V1K",
  "key29": "3fGTnqNhi94BMeMMWsuCT4FPePvCFS71AZevmuvoMjtTfAfxbVyW3F4F7bYE8kYRwMHGTBhxuxfJeuQmj5rbrP37",
  "key30": "anioz7qip64VL1a3FuCipKx8N4XHiGjR9Mi5KuSn6PBJNEWPaNC2AcwBmf8EbjjcqUDYgaw4PxQJwqbb82ZgTiJ",
  "key31": "27jtK9chy9Cbo89iydRsEUQFSbswXGBDtBrcretjnW8c18pKGhQew6N2mmrhkF6m6hhMSKQBnmTJ9SAWzPGTQjir",
  "key32": "58Nhb8wnBLYuZjx77zaoTrPfyUE7vdqhTbCH71npcQU6ApvW56YyWXcF5q1UvveeTQvrds4CV4EWYsAL9aK3ncyP",
  "key33": "4nqm27qnRYry84Ra3S9n5ZLQiSnbJYmFwLgSw7iRD4cwYghKgKqZFF6v3ETKpbBDx1ShGowaU5mZznoonMyYW9zS",
  "key34": "4gntNNkcuDbp3mRBCobz84po5txThP7GBuHkA6ypWmKGgDbPGhHAxSBckRxjmZxuXDvYo2JmVk6bMVGy5tsx4RRP",
  "key35": "2EwsyBoKdcT2r4LAeyVqubkpLVHC5RyTPjLcBMGrhJvx1bCSvBtAgzVLnuixyJYqhjC5mJ1WcM3TYALZXu5Zw9p4",
  "key36": "4ZUjz8cR1aw5D1pkvsueaq8n8HHNAXjP5ykzUkVp22Zgfu8zJ9MK32eiBQ4WDQw2suUfnNmWJRxMEntcLXVTPEwn",
  "key37": "4cGAw4KM1Jn7A2BSjgyDpEKXmMpngHoqrYGnLJsemApnfKJhKbyX4g3kLeE8vPpxm9UcVkgbrpKPn1UakVmuNzVb",
  "key38": "VT9BYC3vmMDfbHmnQnupjX3faZ5yQX6pvVE1snP67R1ZpK3bPVBPB5Ccu972b4YVXPt37MtLcNSpPXF5J1n2VbS",
  "key39": "4RKbfia63trkjVky57RcnUeLzUJeLuP9RWW6kJ1rW922V8NiLqCvLs31v213iH8ArR2yymMvnYTnREHFFViwz2Cc"
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
