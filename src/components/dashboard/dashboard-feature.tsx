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
    "4mmYACsNE3BU4GgKZhUZ94qkuy6XWCgFAyNfSz85cH5jLWsmqgLSDVHE5wKtxcy6QGGzb5XBLs7gBxT6VGUCWJVr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yg2kM4vZjou2QBEXrRjL7DxEtdG1vbQwxmxsK92iJuZAP7MVLxKVAQxgfkR7JFj8cTp668GQ3rF9pqRgbqwnVVG",
  "key1": "2Yq4NUNtAUV2EEE4vBMrFpxtDnDhWK4ecVsnaAz7F38NWgLKX37s4eQ154kVHTTDJKKV1FNumZhsmavUyjfAtXec",
  "key2": "4S1PaYr68H5Fd4Xiyb6HmehtBiaP4UPvRufNhaT7uK2XgfmF6GGkghA4r14ppwp2jDP7SX8LiabCfATMYumpd6A1",
  "key3": "3Kv8UyBX1KhBXKXYYuFJpYowaEVE3uVJ7a8EsaqaeJJjn8zn41WWD7DcCUyzTgckTgHGxqJUu5s2gVyd2JqGs8ez",
  "key4": "2grM1NNwGNSa6fxqfxgKWGaLTGo3a7vqPZWBek26EaRuJsjv9ozrzC3v1z2xQq4vSMekYNrNVUJxxvqfRPot5d2q",
  "key5": "3R2dMMnDYxfcxrvAcfVktu83Vs31ZCjjqGsWkbGDHoMg7uyw8oiFFqFqfzzsUTPVFUVt6YU8k4Xb5DVYUvksKAQK",
  "key6": "4EVCitee8yfMauJD5SXfJKkDxNu71xUF92YDPTsF8hictRzsnnBytGFhY3jGAygM54YfUMHM9CgqMwVkD3Hn8SDx",
  "key7": "4xDmdtGEY1qAN3EDfnvqxyUVpudJKLVpd2oxHuzxNmqVpkQQgGRbimUUeRBDduikYcFRxP4VLhvLk6237NStr6jp",
  "key8": "4BsBiV52GDNoo6TzsCbzVC7wqY2u6BRK1bRJo2eCCwtfg53gZPECc52bJTsJzgsa2dG5WTLt986gwpyExPyCwVJg",
  "key9": "oRYYS6Vu3qin9HrzgmcnKXvzYy3zqoocaZMJ2Y1r3AuodNJbdkAZ2S5BKyEBE46yujepnmPQgEs19sjRrJQagQU",
  "key10": "2Sb4ykJ51Cid9aVTPzVzA6EteUKH4gKJPuyFMUUZxX3wK46iZa4Wuxysn7m41mDErZQKtSzZ3Fhqj1FpheK4i27t",
  "key11": "5TrxV8Wdcdnsi8az9uG92DzYn492YKVneGs5E8G6pQvrAq8zzsRMAXScEL1NFJYKBvBNZAxhnJGHYHejQRsCwWw2",
  "key12": "UuzvCKLUeBDUQU1mAsQdR3QGVmqLyNwb8jVGdgcV5HeUsAnQVDBAow6tQr25Efi3jUhBk1rFHRk6vGRTmWCiTh8",
  "key13": "4V1bQ9s1m514jCY3wKsifjqcZEwXEsCyxdbEjWiW6sXnKPwBvnK297BSrpHn9b9X65FYX4zhxsHRr7afu6UdxrDR",
  "key14": "3r7Ew9XTtW2AGD4cBeCWDB3sNuyEMcXS5QsB76Eh8wja1Pz5HSVG2JK7KDWHED4EjWDq4jZ9tXGsZAbGP5TmfjFH",
  "key15": "4UVvKFK6cgsjvuSmjDKDumYqXgEwWSeNSz1AD7o3UHBUrSnj6HczSVXzDppyN4DvkjHMN4ukYN4Tn3ze6oKtSdn8",
  "key16": "UqvtTYRkQRrE8cFUQmo41UtZNki2Rri8GRRzNUuosttTtodwBcKby1f1m2wXdUo5DFyoY412bxFvZ4iVAiN9H33",
  "key17": "2FWharEEygvnMP8VdYSvSRRwF2tomGyxCADsM1cWhmiEkdQ9NLVBK4KnCBmaCR4vpoQh5s3mzhLF5caDGARnaty7",
  "key18": "3Y3GLqynHbTNCcX26wWpcSfBRKnssPrgr1QBbA2ssqmNutfinifVAebUSAR6jfSpcEyBzzGohjna568VCAD7EoRY",
  "key19": "3eU6duhj4Cxn7Me1KPzj1PH4jvoa5hEd5ZTdRt99hxLJdxuJo6XXddhiRBbdgFMLs5zc5Yi7VmSPDH4ac6Db1c4k",
  "key20": "39mq9N4MzVaLGYQ7nTB84a2QMgwLMzNji6qUXR3KKT1UZto7GjRcdh5Zdr2j1wK2GFXG53jiF1XVbQKwRDRHLb5n",
  "key21": "2ENi9vc8VZtKyVBVffXHNa33cjX6zymFTtyWXwngucMEGSi1VuMUTTGwGWArXXiStHrsjZskcgDgjiipCKEK7RiE",
  "key22": "2ehZCYywrecw93TdLuZTRtUawNVKSQzpdAehnH6igcrxf1ceR18GpSmNcgeeHXwLfQT7XfB6WhTC1raGNbfS9Ljo",
  "key23": "46T1V4ZrZqBVYSuwJN4Qb7hgzUiDm7V4gY1BQGinwzwNSUJKaiqFNdsyM51HNzsjj2bNY16rNbivqQDsrhCBMFm",
  "key24": "3PrCwsHBBYwihPE2LNUD84uYBfkJ1qXDYVWmm8YwhFzKAvY5QFKuVfnPUf5Jc1s2yCuFiziLa16PYhkyqz2DiGKj",
  "key25": "2wwpNTxXNC6n4opxTeh4YZ2ed5cqH8CwUPWBZ5QEnjVCiGqZ89xmPcaZrSMYjhuWBy8TK9d9w7S4fbJtxovkfMKb",
  "key26": "36rUj5so9LGMAqQG5safcksFbS3d1oRnfitviNuCP6fzKjQfrpiYNRcjjNj1E2xMzcPFb1V3YCxt3GBqCM35McTD",
  "key27": "3dpy4tgt2XAuP73MhxTpgkiTZ3bvzQ1LUJkoLyZskFfVEp4UW5pcoxjqGqb989dvjtUMxvszpQ93fnRQn1wo8S9t",
  "key28": "2u7BqSLAdf6QtGvYNi9TUz6aEXjZKUrukRXFk8vvrY2GBqQXX4fFm4LKWqheuKuv9hbu3SGgMdvvjrenPacaiox6",
  "key29": "4gTRN3GNfTNHnNt88oA2zEfseyQcuDxAoYbx2LnVrmbpBaRvxWS5fPtL6PiMExAX7HWWByDCFRnQfyHFhNJBf7oS",
  "key30": "4NoqJd29YY2WUUrFHF8ykr22nMvN4RCMxGVQskAXrc11pNJagcUbJ3r2iJ44FBCQTp6wRtFdhrmei8oHcdAt5fhk"
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
