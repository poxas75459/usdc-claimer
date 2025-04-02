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
    "2nKbxam2qWxAQUi9LWFC8VAt4BXJj2unkVs8tsGzjCuGjYCNP8axqCCAmXfLGCwMUUvVHksp57y6WT51ypMEibUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WG8P4Tj2iqrrQYf7k5hRERwCH5ZKk69jH9BtJLTCgGTD8sGfWkXX4yty1jFshjrwCecR9DnsmhdSXmm1ee57xVm",
  "key1": "4YkiYfqTYnqdhHbv8hhcEXLDTXhbjMGZTJBRWvmKU2fPoK3b1t42fbCwhMAFtooaisuPvC3YTRC4PmLzHvivSkjj",
  "key2": "5VtU99ZKNivspTXK6wL6LbGMDQ2kBUvpz9z4N6dnViKt4nah79JxKhzM4BVMPaaMBzHxW4gJM9F6RmajJuhbPUxb",
  "key3": "3p4D2Jfh6RR51N7ovgroqAbMpLUCof4Ub4iMRmdxTaAk4CkpLtxgsko2TUyT77vu7pWvVgDQbrZdBvhF25Q7RaNP",
  "key4": "2WLkrL8CT5YBCXitbrLr4nfRRpVuK9u9JyHZfA8hU1VuTCVv2NWnPiFX1LouHtxt5uTEQtBrg1FjXZtiXGvqgoUo",
  "key5": "5BdkxaSf6vN51dPFmkJyoWcrVNZrQi8V5xof6Qbcp6zsaMpBLiunipc5ue2ZxhCXVE6ax3dp2K3vWsKQjErBV21U",
  "key6": "3Q87NRrM3svLCxJJMFPoCcC6z4m21pNBZQAmciCjDZiabF7dwTavxHSp4vByajxdGdRHpNdmbdCdbeBjhtZAyoVc",
  "key7": "2HS5rVrZaiCYtYPTRSdaVzLV7jTuiXvFgFF64e6aVMXz3V3RVzFWtJktY5trt5vCJK9u1oc3uAgAd2xFxGWHSnd6",
  "key8": "2kCCEw1qkWMhFfwfsKQd4Aymsmpq8dPAimARcKqMt9v3r44u6TZ4i6LG9urEmNq2szk1jkwTwMsjkuNZmotXKxdy",
  "key9": "3pYP7yYJXBiR9fU6Hq5n3ptCSE27uevU6SUUSQ8ES6K5w1PHkKaTzHQgZXwFmpcbs6nnJv2hNXQJwooCKGVLki9A",
  "key10": "veFzobsPcrFwT9Ly8nnwUAKH1M5vynQLe14ApYDD5joTau1RuaG2ikE1jzUH4jsEQMJkcdNWd4WYMh2J65TCjtT",
  "key11": "2AxzRcFNEHYxfQkYvA7EzLXoWTjrrZ55wQbjHwLKrSDzFU7upiDRBDuJSNpgp6UR2YfPrmEvwvS7SFdXCsFhxzbH",
  "key12": "3nYcf17mCeQzSy2niwXMDzPvs9mzhhDLNui6gYt3dLDq2cLchCRHwBTMroFtZkp4gpViMpZCzKRe9R9jaKrPWZUv",
  "key13": "2JZU7xXSJTdKqCxodUZagN4f412gEHg2wmVreuySFwPBcNjPxQ7KZH8KEuvJCfpGSxP2ArobbheXC3xwZP7r3ieU",
  "key14": "aG2nwPw1XNC1bFNyZ6HDYhjb6ranU1CmdPQCFydECL9YaAvsR6iVva4J3YaQsEx2HtWNX5yBNS2HJaHJbnPAc4D",
  "key15": "2hZt2Er9svDhxt2knEsD9fjAfGLyPs8VqBKoWhhnhBgk9BSBavAKK1MbbVdqEtJYdp128v8aMN3U1dQvUDduiDVM",
  "key16": "36MV43i8egPxh1e5Qr4wXNGJbJo33ELvP1kmAoCmnA5RwoJoXPaKqa3YVyNwvngp3b67EhoNPixVHe9RBUmqaH4W",
  "key17": "4VUckXzKjKsQ3mX6XuKQvk1hEHcNiMUarFBoGsvgN5tykXMQTeEFfoXTwFQUb7XEL47w9m5xeiyo2b82BdBQXd4c",
  "key18": "2sxEwLVtB3MeZPBgek3mrfsf14DpAEpARtgfPuo2koe3tVWdigoFfKZ4GLojd94JbeffnpNPZWKQJ36McjWYSJXJ",
  "key19": "rbEPWqWMQBTYT9bpbS1agvtNpm3r2gnkvcGqvjcQi856LPNrRJabvHFN6aHvKo3cppuvPcAH8j5tmFMGJabrjuE",
  "key20": "52WWdTzefctiUGF77T5coEFY8JbxWJUo8q36RaXzcY6cMZoLkey52m79hRbLoNuthqnEAxksmauTCrQstyyLWbGP",
  "key21": "2Wf4rWgeGigaVWjYqYPHwZ1nUyAoyDZNW7of6p942xJt3ACHgXRWVhJNuEkaxTY1rT5SjJgTTsL14ekvYm4UKbuC",
  "key22": "gL1xTzHsVDVsQaDSTvjGgTAgKkkdhpcNJouW43CNAxYei7L6Vc8PcYiu8U7QFTgD8q31mLPnZ6P1d2VyiKXmb7Q",
  "key23": "3ioSdQ1TeSfv8d4fy4Myc8RYADMKFvimMxVVpJXjv6QvRa8fVc6HKnvFuLTK6493fBL9pTRZAHU6QxqwgLRbDSyT",
  "key24": "Thq9PX5mBu7v4KASrbvPqvUFMrK1qbVg2UimGKFL6FBMGdb49nzy6PNhDx2P5AkhokbpBo6J9TQSmzjRZaRrequ",
  "key25": "2QicEegcyUHL17s91TiYprRztUv4xSqj1A4DrgwGSojAVCTuZRmwWzZ2pQXP6UwbqrUR2BsYoJCLbmAfxqYrZgnC",
  "key26": "jzQGDw9sx2mSPbVt5bmdfB6C8smcezTbTuyWfEK6a52hiSuc2mvk5ddniZP6iNmG1MHKnQvwkr7wigzrP1BFeU5",
  "key27": "5a1ypPLGsccbgvuyBDzrMZz3RG6hrDjvPqmz2YNzQ94vzc7BDQ4MUrtWoRDHJ8HtR2QiriZTB6F4Egyhf46UkEd9",
  "key28": "5CE4wZa18WBnYzb43PrtU3o7JkCfD5kKY9LjpGgtJEkEGHaWtCzefQgVm9gVv6o4pyzAsZLkkyTFaTeyaWY3kuHh",
  "key29": "5RN6AKydc45mxCqZYEgzWHJkw77kccDvE38WjNZ6dhbMQkzcyQg9AAeHHiNXW5gUV7vo3CLFax4RTANCHUZALhEy",
  "key30": "nd8h9DasfpT4dE9k1jMcKxyUJozkWw5mhoW7moNQKZSqDw2pd23BUNarGZhZZk7PuAkbj7bkq7V7Gv3kCaXVszb",
  "key31": "J3Hp6HqBpMcWTPAzGHnjy6vG5CHsYpVvhz7UpNx8i7LhdrgSiMeahbXaD4qpzQmCeX5wgfW3wk9v3bo8WuZTEaX",
  "key32": "2yh1KYt6w9tvtHvTSpJUbCaXBGhUUm7vaji7Z4FjrXm7EjbzUnQQeTAfuDN9HNUghyyQ25SzKvGiMcrzJtiEvpc8",
  "key33": "vaDwrb7xvcRgje62Q8DYcXAwZFF1fTRRiXS7brNAUwn9mypwSGPdhrTnQm2iDznffP2XUN5CZ3eWtbxFM8wey3b",
  "key34": "mjBqsTZrtAc4iHmweNVXFwUoXUkC4SLLS3wRc21n7EuXresCAxuNmhDyyi7xNr93U6qcZFU8BvEQsZgUBfjh9oU",
  "key35": "5SZFSqdZy1F1Ja5Z4jaef23UF1rrxvaN7zGNiXxCP1tHenaQkS2ZyvXXquYrqF9rxiEoyF58nPxPJg7xkcBNEp2K",
  "key36": "5ASyj6otjyuHNJBNsCiF6Bi4WQP7PuTb86Vi2ynSKz6gYf5EzrhUX6JqizBnSRfWT7b116u2qTb3N3TLPVdo7gdb",
  "key37": "41M9dVMmRBdZx6WmBetPNpdjbGNMtKSNygGuWhxanqGWNqpQR9dE9E8Min58XKUuVcXdmuAu3i3e7A1SJ23AsRUq",
  "key38": "42SuYFycZP4HPczed3zDreGkszjbktme38kMzJVptiqkqEP6Ukzv5tmuS8BeiMTjMtXusinFd7bg6KiSnKd6HCZU",
  "key39": "2Zp3bWg7HAH81Jen8feUxsbo859hBmwwMPa2Zyd25sJQTQK9yAneKZw3R2dbkmrYKwX1EkrEE9KGuwzMvJt437As",
  "key40": "2gbHBkF8ESoT3MzQqjSUYagFLAFZ6pAXTF67oqUWHGdjEGCB4ZYyLekc8tLsJih7Csc3krTi5uV7XuWaMHnfHugA",
  "key41": "2Xpg6stHXTSfH2gJ5ewMsScSfarVXXi8FHwyKZjyTEhT7wmNg9NUrWV4isLQFuJYY5qUQUnoKTWVQy7iuFC8aLGS"
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
