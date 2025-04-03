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
    "34XxCABYWYqXf7usGdn8qJdNFUmVMVtcJSKsCjNMzkkJeQJKvkxgF4pJVN5pa9meBTiGAruLs7WHSNML13Ff6iSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTJyp917JbN27u3xhzWxr6vbM2zFswcYrsdjwTbVFXkkARhzRTEndx6JuQZwYKvAGoGzdq8bbA4wSWkmK2FJqok",
  "key1": "92mbkVPmnW6SrKekF9dJ9qMqGS4m9gzSFk3K4ji8bqmiRJr2DfJgAjwMy1xEqXBS5DRFVhHRFkEJ9b6XPnBp8Ph",
  "key2": "61xzqumkNG9yXe746wjHLGQqxiga6hhU2k111TLcVV1pfSuMCb6Rs9hocanWc1KB9mNEwEyB9EUaeDvzjCkdCF1v",
  "key3": "5udLvRZuGJphxF8gYo2YoJryrdShUWe4y6jJd11EiZuioR6i2CUootBhDshdvoSegKmPR4GXjLvos9iyVLppo5Ej",
  "key4": "4xPZeRWr641CX2cCfgmnhYxhWDeVJX1891e4BwRayL9T3gyPp3fJgMbyfoVvNMhBkMwPjzY6WiQVRLJzrmhk1k5y",
  "key5": "NkeRKJcfueTMTeGLTa2DLrJMEbuTNkaaophKk49EVhweyzrN9o3KVUuY1UouMU4FobqFqTWy16icN1ZtHMyKLNd",
  "key6": "3RwXCFqLCE6igknxLUtoDP7bU4hmw1cQ3m6fFgZgQAe1KpnLYoDFg3TKscvhe98PE3ySR6oa9BoKgBFtNPvNazPD",
  "key7": "5vYgbr7HjiQcMMKzSv2he9JeJTKPWGwiWHyknhfwwMUm9H7e18FcLJYeRAx6SodX2hPkMnvkxrrrKjn4wJKcfRyi",
  "key8": "2qfLUdxxJGQ4fTSTcBo2qZStg2Pp3FxMf82tR1kbUPoZUNuW16B2GZ3YZPc2Wbxvf2LkafMajPsZv1GubBNXg8VS",
  "key9": "3Ddqynd1LWiVJx98jPRCPBPtoPtEkFeBoUmxjB3Kk1EKwHZmxLNRgJJ8DsUwYipKZDYNSM34HSB2HCQLHJhkDjq4",
  "key10": "3hAR9D17u1e9HWxuCPH56VqeQi7rLna1ABkFKRTAQryuwfV2e4aYvjpQTwZ9JtWNjLzmAZarQJGG4hZT3mK6oE6p",
  "key11": "43nZdWXeTMm2PQd6uHhURUiLSzRqpiL7fsMZYhyKvdYqcFm9hLjB3GcRapuK1X6CGLU1Lh9yQFQMNT9e1ajU58Wj",
  "key12": "3bEtAMvbksANhF1Nj3Nc3iSYTFarduM4QHhT5HsDZ6WaDApq93j6fPZLutouWwFiuHWPr6gurquRRHSRcAx5PFuH",
  "key13": "JsaX1reMKVv511Tjmn3a2N6HDVvuDYjbuwrKnNtBmsrVo4tj2mdzMmxSdLYcKkPs3Edzw3U59c2V6twbu4sP7UB",
  "key14": "5wrscEXjFqqvN6DuCc6URPYDP8YRwmdhUTTuqtT4eA32ZnovSJWySKHvBgQX6fq8V7wVncF3Rmf9YXotsW6C7CV3",
  "key15": "fUUxTTgDkmnRJysqHLtTsAnSq8NdMtjEpnn1WUGMbv5J9en87ZZrSww2dpngBLaCwqPotJeTiDxqRHW5TU8q1iu",
  "key16": "5vuDd3UC4ChhEusXSTLejVAqhGuJ7Gk5LAVhaTVnS5Jno187UR4X1kDRku1zfDMKgrtLVd6F4orAafD9otD2tsBq",
  "key17": "2815vX2qdLaExGAgRTS1rn7iCx8n13QgbwHLjzkQkPkBE2wQXCFY7npuKPUYxJZt7ADJwmpV6rDbDtQ3BT7HX9Qh",
  "key18": "VifvsJZZNVhdDUsTjPeYNPSDnDdNR78btVLTCEnRUwcTX8B6w4LFHwsFyfoC3o28cKxL9nFWo18LsKo1Yt68yCb",
  "key19": "5TSZF7yUvHWKmzQkDJNVztLuuT5VtXPttCEbFQDRzsSMS2VRh9xVENJYxRFPaMKt7GwwqyhhsgV3X64fU41b1v7y",
  "key20": "5cZxSFWs3Ab8F6ZoGdmTsotzKpYpQ4M6b3XEy7Bsb6EyfxL68ALhswMuX62m1eyM9Fj6ZX2UWodAqaka7Dkxuix6",
  "key21": "2gVE73TGBRr2STog6CSGjBuhEBUB4m7x3BBUCSGmDfjiwUMoQVv71hgyQ9EDGcHgBUG9sjVC1UxY68zTryjxFY27",
  "key22": "2WrXgHfJoD27dmqzekFzi9z3ihJEJHfFy13JyEZQ4dWVPLPJ2tuELJTxqCsA22yf9UhcFLkfbVAMaXqRW26k739Z",
  "key23": "TYUUbBXHfM4fMcok2son5YL5iFrjxLUTzBbp9t8Yp5NA7QLwvwTiXGG5bMpxu9ajqKHKa143Rars5na4YNNkpRM",
  "key24": "5Upxzofx7bQfQUYbdFfiB68CT9z6m8EwwjBMhYfnh5BfRyb5DMEN3XbyDM1x5x3nMqjFtMwR3ertDqmC9hwRHxXK",
  "key25": "27EbkUtae8sNXDTv6GLcUfw8WQyZFfeCbjrrwVjfpo2ZXyE31JKF4aNLk75jYoPKLqnAM6eccUzwfJbRUYDGQzEv",
  "key26": "toRDi4XUBqjTaZWwxnC5YoWcqsAQ9CgowLUeQVphqUvkuq2UeVDZuVhzhqTuBMWfjViCw2r6uJhR9Rbf1ozV4LA",
  "key27": "2kDG5z9EGY5Fc5bpQ13eJggRjTc4z7ULY1Y8WiDn7yRGVttGsgG9StHoGW842BqEKsnjUbefVgZ3x6vqDcVi4JL9",
  "key28": "38uB7xrKSEBcPmD96gzddSu1XuRsG8eKKrHLEJ1xtezjusmsgBpyym8uVcDua3nBiMi4JDR3NdHEDxvkikYwb7Fm",
  "key29": "4TayG7yFcsNM8DK3J8DGAjbvgboDnPvc2U8zuWG7C5xiscnNnxL2ho13mpX9Z4aFCGQ66T6FXyMhBMQpik5Yr9Th",
  "key30": "Am1JyDAdbURrY1NQMUBwmFjAcVPZatvBN9KixxoLMAbtUDCzr9dwa5SFRWjcLVGDDJUF4fXBiCdLGvSZhHpswsH",
  "key31": "5n9M8S6i7Q4VzfDAgA5y94dKCaoaqc6AsFQvJUaJiD2JVZ5g7rbCgnfcXWvTGif4tEw6oADNYXSVMRcRBUCGsNrd",
  "key32": "4iypuECP73bmPE67FFPoSV32QpdfFuHXdDN4dPD3QkwukpZ8a5rjBxPyYzBKK1kLgrb37Gdmf25zjys4oN2TvvGX",
  "key33": "nNUsWeJ17Sxje4wGGG4fiYHP9W2y4yKvhjbDLGNipSrLsuwvg8tPbkLZvewpV823zGW6ftzRh7NgodV4G84rj2M",
  "key34": "67QyVDA5YT2a1K5cApo8nqJFD3bt2BqxmfaMJKoMDBJpNTiXDt1HkP57zBxANK8VS2kqTCpCC62moyVuefZGN2oQ",
  "key35": "4jGsvqAQwdoLHm1zjdPHKJFeFr2PQbSo4MUHjqAFdwJ39FsVrF5psg63ipbWmQ3Rghoj8cU6ziooZt48fy5bX1AL",
  "key36": "5fyU8qrjxAxEkuHBZK6DmqKaKfVfgyXmS5dXPUg5V9vB2Mx7RG6dpVsSwWrqiW2RVmCCocnKFMftCehC64Uo5Smb",
  "key37": "2uo5LRr6awjQwfSqysznSkQ8hbSbaGSNfibhQ3cbfdqpEj4VwHRzgZStsGBdApRhoTvcD1G1txTHrY4sixZ8F9Tv",
  "key38": "XwgEKysRvGWfwsk3mi13Ks5bHiKpThAQNET74sjhDHvfi4uD71qNaqR5md7JDVwDgsJ4aQ1esE1CKHfZtTKag6m",
  "key39": "5DHNoW7f3HwBEKYZ8X8pGrTPugPE7UuWQkTmdN2C9VbJXvcH59gzMW4JEykrx5GqWUZ2g1HehQRSqBM5a4BrWRpc",
  "key40": "31xgRFRRBFAU4gUUdZGRsWmdU2vJRmjSBnPLEpLgqjErAzirwXSe6earrrbQ6KVSPPyQCYyEZRtvJoJL6mdMnW13",
  "key41": "5KEcfnCaPnyk57QW5QHQb5hJVgsxm9kaQfwxzUL31b1GkhCmKtpWGqtA9FKNr9ejrqxzfhF1c81eDkE37uSdnaNg",
  "key42": "YjV4dM7jYkwVwxR1ui3D75HFZF8PXubEBGJyH7Lr8iHPkPdQ6FJ8onbSG7UPX6YqQ8mvb1PV8oC63yStSVtxxYN",
  "key43": "4gvmKNKvguMyjHHkBgxGtfZ3ftB9fQPHsJXov7z4oUXmTDeGdwEW8KT3v2SRDgdCoEhmDa5yabHbP2YhSQhFWHFw",
  "key44": "5bCQun6yE7JGqz4dspyKibWDtxVV6fLDkhCQYGcAvAezkR97nSLTSSpTV4BgX57KoL7LRFnXeSHJ1nZJ9vW8yUn5"
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
