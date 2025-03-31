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
    "2PttE1kPXgZwarhCNa4C57852qTGDNp691avLeBYpzy9KD4ByYWrbysQNPkFWH54rQNrfyx61vbQNAuUy9qaK8Nu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XKoUe4EB4X3UsRj3LBU4pDhAVr3fWaJxjRyUHNZ5CLN8eu8LBQgJuA1LTQJsBjwqqC8XaUFzCcQ7RUVxXabJ74",
  "key1": "5e8ck3aL9U3L4CcdXUqE4wgqJGtuxZzWSvktXqEyLQHYZog6PXHQ7Pa5vrV4j5FGPsZb3qftFGn1dXjBDtG8SYGa",
  "key2": "4fDohX2J28Q2WBvX7qpaVFQncwunHDTHkwVunkqKvzTk58DdCm3Tna3Bh9i8oFUFcwadMNuHVt42cX5MuwSToTkx",
  "key3": "61UkDnGzQ4u4sR9TVxe5C4t6ruaMAzSpwWj3g67poiAmC8cRGk9hJuixGkdJCaJYKtysBUjHkm914uAGVfv3TkmY",
  "key4": "s99hFkiEqE7Yt9WqpfMPJpxEL2rSucUVDkv7NabzgFLGVixW8ajZFng7x3Cak5chYP9CWTLLHm37AuJMd6x9u71",
  "key5": "56pyWx2pQZTddDiBMBBgnrnGvFvsyWn1S9oVrsmkujmmrkydMDQQzasQTfKemJUFW6pPQVC4AamABre4ZkQ63juw",
  "key6": "bWaVJkuqcmFM8AeM8bZAgNNuKbUJWu4oqA3ViRQjGNxrrSiDJKhB4hWWJfweVuMNmzB8r2wc7pLLhd9KWLCxpHR",
  "key7": "4XNKtTVBj6QiKYcNub1DG8ziTCA2PefSkwQ4UDNGsNyx9BAkkYqWKufS16sV3Gh6ybzM2RoUcaYH4oXwGHAnGsgt",
  "key8": "233zipqo6Mweg28fjpKatvSQMXeajmxr9S7kTtYzTRKbJgeRPV9WAXv9jC66QRk5vekyWTW4BQwhb18K3tbf8LBG",
  "key9": "3fPDsPFFvJe37pbZSjbYSZSypUyeXThuyq9uNTF8GRtyb7tv1wGsCFPtn3jUdFrBitNfKgTgfEKj8cZMrT41wSx4",
  "key10": "2uPhbQXYxbDEUPtwPkFwgzxmTfpSnhX26UeT72nUrFSLisMNwidgahybxMKbw4bpv6wz9ULBxLpKm7uuLWSXyZPK",
  "key11": "4KCnEG3gRRGTWQXUZeWGGkukKq8MzAGVcRNuCnKRyFos95bkQ5pmxxMXAQ1bwUWPxLvhsqJC4wucJA72P1hoaTb1",
  "key12": "9N27xC9z3M7UUdER7C395pCUYrVK9WQf2W6o74aiycUdpJiZ3ZsqKFR6KvLz8Qg5mKw4FS2rmmFtv5DQaAG5nbW",
  "key13": "2s7dm659rvwQN2mGkomHbPHnkbZjaV5HmXTaHwo5CxnqwHd2QQ9Bemz87bbX2orVRTkJHn4XXdS2yTiCpmj958zX",
  "key14": "2hjoQTENU7FWkYFwz2pMFgv9QmcdZK8eKU2Qn2BhjH9ShxrdofoonftqcbRfSBDb4RH99YdxzMaB3dhQWDdXzjKY",
  "key15": "3DXMgE7NHizrU1qavdXK3hQH2ogBsvjuMKT18WhwGKS7jZw8wVyoBUKcrgza4m64Lbr2BviX6TcQeZJQKZkKkApm",
  "key16": "5Uz3GgNVh5V9RG6AVrmM341uxnP7LSNtcHMmmQUNexLYCQRAP1JkX1yhXBih98qHwkpPTAKb7vjAMrf6rVAqcjPP",
  "key17": "5mitAWguonjNNgJ7s97C96rsrNmjckjEjY2c2uMaYaiSa26F9xyMkRMrMkkXV5qzgBSRF1dfjr6Yt5QD7UVVMoJP",
  "key18": "2HuyzcxAb3LPAzB65ah6rLF55h1ryoNE8xVNFPjG3PSfVrRuc5DYRRBWpdLC4yYGmU7fdFmyRwkraR45SEjXaRkW",
  "key19": "eaqVxSb7siu6k12ShXpRJv5BSYtfA735VFjbCXbti2VvFbf9A8hSj5RAHJq5tNHcABZtxZumtU4BSA1GQ47C62B",
  "key20": "29oE3Kf97mKSDkhmFRSJqFHLARLQMLGqa7BM5Sp3qQvU7dDSUMev7n2DGMRF54RpPE5YWQggoUBbV9yLoPHTRRhB",
  "key21": "usvm9Q1oSK6tR1v7g1oviZLdqPHHLziD5C59H4Zqud4RFXpN7aWKicGEuQH1BKDw97NqsDHhkvSu8HiV812a3JN",
  "key22": "3Wec7Pbh6JQ8V2PpzfZXosZAbK6EmWYXRKMxt53dcm1WFVGT4pi9mYXRfX5mmV5K331spppb9VD2y2WgrnjwCSUG",
  "key23": "5Tvnax1Eu6iQEqANkCAT3dZBfsq5YG5RM9LTLKomPo43aEHr4qFXziJy1DjZSKCdPJwhjPuaC1RSEJWW71nVYcx5",
  "key24": "3NQZkdFJprfGgc6AKSsuLAuhSgFCsLcNEhFmV7ZnUdLn6DCQLCH1sYtQt3N2XzyjWhdxZTobxPqh52tZGSNVtpS7",
  "key25": "4rEVMPqoJHFyfZZeVsPrHNteKGrtkS1EKyGzW7NUQMNhVTS3iAAbquS3rTzrSB8hX3AJL1Go3EYUfWWhEWwnaZS7",
  "key26": "286Er7wU8XQgAC7CAUt5WoLsBppN9aLwmoVPLiDLKiBrmi7g6WpqiE93kbUWfV9oLUuGduj7SdjsffMqiqjNXfa9",
  "key27": "2jcuY9qq8yuxvLwt9WAGAZWZ9FwbiNNPAMGCfyMtbWQiwuyZtRbH8kGsFHa28JfarUb8sQL5SwpR3cJyrHVsw6DM",
  "key28": "22C5JfmAVTN9bwEhNjzvYJAZCH7ZaXocZ1MMTXyJz4Tq1sy2k1Lbn9erQPqyTyJyQkoPDcxwdCyzZ9pPAcAgMTcy",
  "key29": "58LpvJpmR8eTM6ge8o9ry3yTuPTfEzHsHE9WhjprVo6cZGQUidsP1Xyh9o2gHP34hXa4QPgFTXjAAJ9iGoaj2iAQ",
  "key30": "4T6ig2YybhDxDcnG3n8Ur9rqMUfkxoEajSJq2XwPkhEKuS1WjXvq4VFD3SKYXeqmJMt4WLAgS3BHM7sm13apqKJZ",
  "key31": "48YqS5LKBMEjbZ8mHUzn4hzeR6doPsttCUgFgu4P5RwBPEpc8YE5Hzzgejwpbbw6eS1dsra4UueWCPSDsozBbuuy",
  "key32": "27uuxXCuArBqWCe2GhnnZscwHCpHyCpRYLbhEJEtgwxEeVfjXYTFj9636yPjyXknpPZ5r1MjshyaMM1P8EKRkfhz",
  "key33": "22KJspwtznD56RcYZocZYkDpeBCMTkPtGuY1TsXA19bTvzqYw5JvHJ3kGTkca52P8swD5VBbsNXNrj6vH4N9UrfE"
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
