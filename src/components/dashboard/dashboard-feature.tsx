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
    "4peXdwxNYkeYjuw8ZCckrvUHSHZV1SDGZL7JXjSvCFRTU8rHMzPUcVHMaQWx6egSU7mEjVsD1BoQ6UzRceT2hWrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGHiP9jk4R3yuDRLP2f6gU7mYSEuRfhqutUUVAVyn5rC5i4o9x5MqhTvvcvBW4bbXDLGBeA2uX9LjQ6LvmXoHyq",
  "key1": "2HGsLeopjUBk1FZKXGv5krMWQf25d6UcxhKMooKaXoF2EWZsu9v4qAMCDS7H7ysyNYsCDqvBA6Kswxgr4H1NVdvt",
  "key2": "343dn1KSbx5DZonEc1p5m3WpajuBQZmyQ2UvJbNQavB1bmpk3oFVSTUjyvRaojzantipBWcTfdngshg7fXaPnz64",
  "key3": "2xMV3HaCRSn8Wm1ZPSWUYcgNsf3ZHPmXdrkRh1oyMg55cgLhkiPHuvj248H2gymDZQ1xWvHkWuk8vLQrRwhmoMtB",
  "key4": "gwMDN7UzXRt1aCL512wnp8eUM1z6voLJRBcZNVZ7PKUKT9eoAUrhNjPgiVBVGTeogyh5dYEWgPcAnafUndm54Mv",
  "key5": "3Zb16teaifxWaysgmRN8g16C8a9k5qJoF8YbUjspLCBihH8mhYWwQoMvp9wFhib4cDdA8GXFZV7MAcpwGcAeYigZ",
  "key6": "3zdgpW2gXomfy12D6bwgPqcKrtw8sYRGbqwGpmSXeLY4vLPgsxQZYabF1y1ejAyGZFXrETwdCWKCmT2kw7XpEhXx",
  "key7": "4QHKmkxiU2RNi9SoZHYhkbs3wmsM7sJ36RFQEKpa6iUTwTeheKeJLreDHV1QoSQvQiYoNSZpJ21VgeRPpqrCuGX2",
  "key8": "46xcoDiEehNuatCBdMqzSJ914Kh7QswnKzrQtZEYUifGm8ftnA7ypszTYw4MXdkbKvTe2ebDQujRqASSvnosVsEx",
  "key9": "L3ZxLfaJwhmQ7r8k8pXBKUX63DSRoycWZdhtD2iVxuBStW9pYGQQUBMkyxxvNZB9Brq45qxkGGn4cP2NUGSXr1G",
  "key10": "4wSshPJ2uSnrrXtnhwGBHqj9qQv5jHEkupGBAYjA54ihcN19ReUuha5ryw8LGGYDe2VjPDMD6Ro2royB5vywUSTc",
  "key11": "38gWhdGB5bc9vPmzWr6Exu2sX4XX6LLDfCbvxV6GnmJVZhyHxxPB23hWxP25m45svRJf57GGa2efKT9fP1cXLGWf",
  "key12": "5PBL3a5iLzpzqujnNCieDWqm8iNPdKRs9Fy8RWNu8GRV2gfhMSutUu9qWcVML96KZwRC6zWzY4KTtwLkDhgTMi9P",
  "key13": "4Se6MjHY9iPodXdVCVH2aKbHCVVTTvCv1YFyjQy7SGRt9AqfkR9sQ7tvGguSE7dpMeXK4QBaNpH54YKJ3FKp48cp",
  "key14": "5P9wDXjDQCw6ThGUbz8XpocvwQKytctnWEbxDSwaiwMY4xJVPw47QGGiSFJjQL2VMGUuCL9FHRu31FaJmmiiQgDM",
  "key15": "3VkgjrXZtD55vKvnuermQWCHpzAyyEEPvHDb8JGYybJy3i6msefbyvqkNTRosmc3xrYBx2zSckvMRiNSmRvXFh4M",
  "key16": "2vDgT99fn6bdE25kFnA4M8uHqp7aTSqySZ39ZoFdfsEkm75aWbENPRu9bwHneSU3QYHoQNkMYTUoJCYy6yapLsZQ",
  "key17": "4sehRp6qcQ1HPS43wQ5SRqzo3KCy6Xn1yvv9hcZNUgFra4iy4vfWQjpsLSLEZz9mTCqFgNDrR1SbzC1KEZ96qZqy",
  "key18": "4vTikJtSLnTNEMbeuGvoKZ6bBjYSfZon1pEsUrxktjZC68M752Asjscgb1aHKjvhfiTmHgsT6z49E3LwQ1xqudq5",
  "key19": "pgSKBKB5iCWibg6a24WAexxjCyvNwcBhX1JpxQnRxoiVukGRxXqLh7A3oJq8p5wqXRbP5x5iG9JS7KDTCU1JSGC",
  "key20": "64s8e7QFdHYsD8Zrr7mLHgXybXKQrChfJw9u6H2TobruxpcfjP1H792DjKe5erTkz5LfCQWDcqAbPKS3SzTsJfhQ",
  "key21": "4wT1FXbjyY1f4d2BbE5vzfCrdp2FUn5mHjg8Bt5ijX9qbmEHPmYjSjuxnL9A8AzR9R4ugGSqo2HC9LJSzPEZHdy6",
  "key22": "5evjazABdP6zj4vCY4ZD6zUL2vSVPoQkHSMe5i7Qv5HymfrDFTWDVGTnvQpqBoHhubVJjyiUudBRWg9AqUfJCq2a",
  "key23": "5bS2sbTm9NMXt6r5nioDjSCwtF6Rh7G7JfT7JFz4oFUPEdphM4YJtE5kjjkuZym6yBmRDKiFr5NHYMENMGCeiv1q",
  "key24": "5MTPyVFQ1C7tZedahpezy8gVzExKKVzwvYqEPQjbAgYJMc4tmim2UXZjHbb3AUktztkr41kdyv3HkFWF6U8S4hKZ",
  "key25": "U8AGTnHns28bTQ75LwTYyBX6tc3MY86M7KNHZUnz2ifTSXV2FsWVkDtJ7eAHSFLGTBPMUpcGCzRMSvoMDkQAfeZ",
  "key26": "xu9zRdAfg8QfsYiBtq4QWuyduzQhprd7uKBRgDDtyVqstLvPwtB4v4Ssj7jhAm8DauqNhZDhFnAEsJboCV4aovP",
  "key27": "31S9hccnG3yStYorRLcfegLoS9m6PgsgjGMoaWnJN4gPjMk8oh4EWJofbhrpXGAPtdyjuxvazj4SeXbZb7dDXYjR",
  "key28": "3uuBVzCj4Dcob9M5jqwHPkDHhu8c5amMePHYu9UYUmTuPMhpBe51FVgi3RWuLfr3C7SX55Rk247YG7KrgHE3Zrjd",
  "key29": "PMNEZJ4PFttJURPsJp2U9ywEGZq2826Y2nVVEzTAtGVYsj2tCdnK3T5r1qtH1hRWf5SVSQWDXENnYp5Yiw39seV",
  "key30": "4Kk72hh6ZmDJ6pkvyr7b99z4ZNpfVvE4pYKenGJ9FaKqHjAhHswpuGRLXfxqRHHxG2pfHYJkjEZ6G2NJG4XDAzgx",
  "key31": "3g8gQV2CfTUfQGsjzMjf32ReQ1Mmo6Y8NBgGTEE6tKFAPv1CrzWjdWNFSJ4kGW2AkciUngo9rCEQwfhue7y3b9Lx",
  "key32": "6qQ6yZfBn7UaKqzoUKQE21h7dKA4A847ETWTzUL41asND6s15zSALSKd5cZsaJY4h1nXe6UPPnEEhWw2phq4Jz9",
  "key33": "21JYarx9ZmmwjXQtKBkWGd1ZRSw44Yuh6Bm5vcGVm5SxgNBNjQ6FywVG89Jgbt8aceH8sJBBHPssn3DEBPzkjj69",
  "key34": "4bVudrgfEgaxFxiY78Fn7WJSELYpywRNFU2eGVBeUFZZ1JYqpTn48MSZq3NsJjAjkTpiAEJEfNtrjHsASR5z45Ep",
  "key35": "4E9kdbUNvj53u89tfKbg6Ay9B3aDWZa9nwkApZyefzje9ReR1ToPbRweZ3DPEGdCxyR5JjhNW921ypis5nr1vCgR",
  "key36": "2pqCYAQbn6ZogbYF48yg8ruKwgbJLwud19Xa8JZQYqejSBbvYYEHdU7m4DbnNzHdj7NM4q9BkWatEAfyEnRden64",
  "key37": "4h35KXBzd7GXUE17xsdYHJGztGUW76f9QnLpjEoShvnzLwUP7vV3CgZgSVsNDkKrpdZThf2kAdyDs7ZBs4FCPqVW",
  "key38": "5vxgr5AZFCg4ew4GckQRJiVpiMhbBfcMmrWHYgLWBi8czYD6GKRuNfy9LVbMuuS7ot3Rzize7YFMA4pos83WPSbw",
  "key39": "JqmZRPJ2GwYPbnvErSGQtYYSeQseXQLVFagFFx2FNZVfv9nTYcAkqoMU9AtfQod3fhnubiqd3z4HMoQXToSCPur"
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
