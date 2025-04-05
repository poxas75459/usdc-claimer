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
    "2oPQa4oGmFoj83fQmtMvsda3ehcDvcmn4RzM3H1pZ3vk3K62Sd3zSeyGkFnuoVaa93UwSMf9ccx6tkMG5cUCbUsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9DdH5Ki1nDydh99vfjkwZwGfaNvyvvSeMB9zCPfhPt1FUvUnirTqZWwqLePBKtQt9DzaPDN7afPY4myyozwqGKQ",
  "key1": "59Hfx6BLDj1tkNGcPDe72iTSJP9A6VLB8h7ag1LyU4nFgTUnLjjvzo4eshyyiSYFfLsjZQvf1CUYjPbbBP3r5jS9",
  "key2": "ZMbBgj9mhv29SoHpkAThfvecvaBu2vCm7dkNxgXMq9LK1QuW2jyHv1NvQqiLeTAmYiwwT6mKwrLPvkzMMzhN9D7",
  "key3": "4qDHa4JHXVGuEqLREqyL98gwJh1cLVEG3nxPgdZiDerNwzi2cV5ht5DLgk9TxawKS89u4qjNkiRcYFqXQumLyLZR",
  "key4": "42dDTYvYSyBGdfbtns5GWJD99TmLcipfxM78EsvZBBNatDA19kbdpSzRb9uqd4qUWbk1uP4XkLqsftp7jtESXWVo",
  "key5": "ScjA2GwBw2SLNLrqYPiVzDfgr1wdgKWWBQtF1GCCMQDcdVg7ks54Q5KfiCtTjemNPbc4Efuybp8As2GGvEJscyE",
  "key6": "2e2w5denwLCWRZYTMpuY85R2Qi7CpB3cL6nkBNfqS641CA5kbgkwehS61GSrzxc2Pd21Gqbg6f44i8WAwu2CjGg9",
  "key7": "5WWBjBGMUnnNpLmTMRmkbnbUEFAP4GChLzcbgLfwspoGHA8Meuz2S63ykd3zz4ypW4bRXV6Sqxsu42f5TSuDcPtk",
  "key8": "yiZV5VuwDkeNC45SmoCcYYpYBFaH6rqMouS8tr9Btr1sEkGSXHxZxGmSmKSGuFhxuFYNkUhJQXQtCS2Hb1j9VML",
  "key9": "Kcwb84KEeZ3tCVUC3AJgqMBvkWp2kMiJk6Ms1wiMPHMyeEnrFRjPVGtNxebefFN1QP4uESUsEo6SPmvvhZ7XPr2",
  "key10": "8nNkvKzmqDdZW14t1QCVBhELa1Q5MLcVaZQMqihYngBKaesxtDPhv1k26pmD9RVSNtTwzyp8wbf4mqZisPbYvLr",
  "key11": "4jETJnC18ku1G5dyfacv3nhtwVaRrzdb5y8S8JpJTj3APAsmUewz8JRZAPuCW6zEopQTJrddLaDKY1JwXq5nZHVE",
  "key12": "pipPANU8z2x2GjZQMvHWwwYqdtEHXzj7bWaPG7ZHomrbkV4B6ZQEVofVkn1rH1pAKUBjY64wJaknWFithVc8QqY",
  "key13": "4YfcHMmXVkPH9rEZUJaatQHfPBKBrJeryTY5taK2PRYgHH6WUEoCRWLF3PaEhecU1scSDi61oZbLy1sFWS19jDZk",
  "key14": "2mMAarpTvZncJ4fGWCdVghZ6zA96ucbCAkpNkDptQWQesrAKwZKyzR2FcivKdXpzQ8rdMyq6iyWcNCsG8kHqGXFd",
  "key15": "3gok8f5guYioxTttjZPHMiv5C3agzCtqMnioiXkKJbixXUFd9MWNCwfNLQDM1K9MiZNCCHwR1NTCEX6rJ4FcB6vS",
  "key16": "2HgUM7E6sep4adoC53ZYEmp9nPBDH4VK6HjjhtZJyDqdaFfkBgLN4XVAumLUEUSiUoeXcn5D5dmWUG96v68zBm6d",
  "key17": "6ojGyGhdWxBV2MpAJcWLEf35DfyeESYcdktdSanPMzg8Y93SzmabPi1iaxi1WbjzLGZWHRX6EKZd89Y5h5hCwDc",
  "key18": "5QsnSVC1r8C2wosK6G9BJDanHtFDLKxpDCYuzMsArzMYkWeGRVqktWJPorxZsETxZguBwFfBPn1Zat8BC8RYE9kb",
  "key19": "2MhoJXxzqH7ckp7K3ndKCK1ro9E6t199aHdriG3UNLpnwTCddais6J8PhmgZXFsAc3sYin9DgZduYu7ehNLn87wV",
  "key20": "4bZ32c13LPQeHBhQqJMkWGjR3zdDm1WodnpeYoh1PSw14tvYK4qNNjRF7cbufzmmQm2VHaCWeN46P4CMNhjNeMZ4",
  "key21": "4MuQQQbrZipQJ7PYnT7H3sKU9DJ63jxtZkpzvqtHHdpi7E2BVSStGzeXgf1zbLcxqWuvJPdaXuFUgECzgXP1H56k",
  "key22": "4rVGDXPmbHUL83dV1bkc4Zyv9XkYDwPUEpXG3L94bUNr9BgnmwpwLDfHnupAmoswfWFyioxi6xjRJeoszsbokmVA",
  "key23": "2CbqQzw3uMMgfCZJwkSCnqSsgGq1u3jnWw9QLEo7vhNrbHfdTbHXsnRS3EZxvf9gs6msy3ujfLexCcAJLzTkSWHu",
  "key24": "42k24dMaJop1atAc3inFncndzgqHmDnP6bWARJdmjPrPwEd5ZTVH3u2Up9DraYFESprc2ciCXMHkM3saSf5frRND",
  "key25": "2G11otakFAM2q3kWrXh8cha7homDxLCbaVpL5fXVNu4GVQmsuix6yT9YWa6EvdsbSYmShn4E5GSUK5xjTSag3Lq8",
  "key26": "2sMv8tTSQmFRVTksTjkqKrSeCS29e8mKBJoYL6m53GbgdZtTqgsbX9JxC7wv6Who5nb3auev8FGTinT3F3CPAJQy",
  "key27": "5gduoarwYyHzCuSdNFqb1UYbB6dgpWYSJSXr85rtrp3acHye4HMmgpAWhWx2PV5uEcSqUD5Nwgqdgh7gBVauabim",
  "key28": "4ZLxXagqmCPoQrhckXPZ2Sk229mrxtx2tjKyyxSsMmwmHAGj4tsMP4MSVXpqtosJzqkArnEGkR8s8rmcMgvAtVJZ",
  "key29": "35iAhwwQXzzqdkqFXCSdJFvBwZxTxaHnxqRLGwryxGgZg5czDhXkdJgje85vo3CFo8YJgh3odiaEUK5CE2mskWaH",
  "key30": "2dQeqsU84vi9uCZZvoRsMdwBjmvnbvZAzVUt9rkvbDPoT1zmxTrZGHzkGo889XhUTBkFVqFyxpQhoNXUWxBphwpT",
  "key31": "3uyvCccgUFeqZC3duMyyX4yktHBxBH6ryUvtybQMLa1WEectdHJ9yrRWK95ZRQ8dqNGCnhg14uFoJiEatfwUbqxZ",
  "key32": "5Edqkf1iBPV3rjJPMGSnCPCAqiofMgdbQ5ohMVL8WS6GHLSvvZCtcFGbdN5crYjfMt1X81nnYPEnxqFL5yaQMrzy",
  "key33": "2g4J1io8FoPb5VMEAvqoZjEThuJzDzmekVFUNrXD392mHjttu6fWXULGaWbacmv5uf3po1x4syjGvW32ZYTGk672"
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
