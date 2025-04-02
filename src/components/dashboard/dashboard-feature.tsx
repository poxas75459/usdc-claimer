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
    "5DMLTHeq1GZhSr1feQ4QptgdURL2bJerMVnen6Zem3ek6Qfz7ZbRw3Vvi24mwZgGNH72zNSRp4A3iSfbVPjn3Zy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rcxg9v15QAYabvT5JAqdobgGb1Z1vt1xmmpHspMB65FcgYuoGmbL4j2HR2szoFqWiJrMaZKovL5nNPknNVHoV7s",
  "key1": "htLsu5qkeuwa3KUZ8CMgXqVNYt9nu2qXtnrGV5RT45T5W9xnnuirGzU6YDHR4ReF8jNEnZSGwU8dZ52j4Ws48if",
  "key2": "4VyUQogtdwTzNt3jRKCizbnYESjfHVSaUYJ9J9fHiUEFuoRnQyNgYXgzy12p9mLyctJFSQkTter9MMQof7H5ZvDb",
  "key3": "3SJ1bdoovpj44BCELX684W2iFK7Pem2K4DpXHUfAqmQ197nQuYnrgCFds6Z1pLRHvankJej53MeYtancB9pijj27",
  "key4": "E64TEJb2apVS9vjSvp45ayJGfuUnkR25FzWVSfyDBkihHgaQCYPWafHZj9J7oqjhfaS5Au5hGv4FUnM5GK9CBCc",
  "key5": "5VWCAUhZQCKvefVnbJBausvk4L5FGaQruJBKc2BzSM4UXpahMAr548HUbuVBx4x9CMpiP5xLL7p1BizcrMLrSQem",
  "key6": "2DLRFwQdXLmQModJM8hWnG7uotvk8vujh4GaeWGaeHEiKtAbYEnyw4SMurmjD2JQVoR5S99GXe1KWtCLPKjL5kdn",
  "key7": "4XJUATj2o7zPQBZHneux2nLaNGPCnvthh4yZc8TEBjT5G4QjD5nAPnLsvxg8QP4YcmuZUHF6vAZm7D4W1wtfscKP",
  "key8": "2gjjx7Fj2CHUkddKkPxN93nsrhGG2Xzn567GAsyT49bjeRtZhNBkHoQLctuPkLnKjim1ikegtd6tgYNUChAT8YdH",
  "key9": "D8S72iitu8tHqA5zpw84HZcfgkgebnw3CEyCKebGYCqgMTxXuyUsciiQHo1iS4JEuT7krwkzXPdM9cYcGiRuhDK",
  "key10": "uSxnUcMwMvRJ78AkDaBjKsFgZDEetv63jTun3Mib1AXCamquxfqTpbhKAf5TfsScWKoiNAXeBvZyLL56ta7gTG6",
  "key11": "3kGKredmkL3toTEL8F4QYEMdHrU1FvuznuzaZKwUc3kAHRTN98UYYcK6caUYh2Mc4F1KgvZbfD9Faoa9JKtKcQVL",
  "key12": "2xmqw643miyVy56SKhnfnvKWRAxbxin9jL6tnxjMKQ18DH7WYSqrBB1qwJ7WjQCEiuTDmdgewQtwx84WJbtPWSae",
  "key13": "2a9PY6m4mvVUyMFkt5iJJwzrsJtK32GGdzX9S4KmwsMpmiQMP6rig7XybrTJmQQ6amZ4Bbgh9imSZU2bMRQAHpzu",
  "key14": "LvbbjsRQtQW1sVL2G5maLYLm9tf3ytxv6hxxjebEWhEyuffw1tkeMjFxFZNXRwcfv6WFdmPkzbe7KssrvtToVcU",
  "key15": "5EqxJieg3AUPLwNbA4W1pajid86M1zwtgBSmJUm1GexSQg5FHaxMoh8DC7NdqoPahrWYWQHaqNLiNEA7G9Wzjy6S",
  "key16": "3ktCYkRVnW6YvUuJWyRoxYtYzyvq9p9BAboC9ATQyFoGrHe711Rwm4qRTgnVuzXpP7ytp5XDFAvhzUUZHgVKtyas",
  "key17": "2wZMBN3XLG15n8esU9R14fRwBA7C4z8u48ijVHoaxSNytwwnCKxxupjAgu53NUzDSuMqyjLcN5V21AskaCiJaHTc",
  "key18": "4xG7RvtLktXPtW17PQrCWv4PXvRjPKwR2VM3idGCvdC4tn9L9vVx3pqHBTnhatWYBRv3wGyrUoWjqfECMW71uR7x",
  "key19": "3f5RgcA5wgh1Pgv3baTb354DpS16K8Wsesnjcxeszf3kzwe85STmoGVCipgg9R9JWYcyJJDDu7jigZhAqowipHSX",
  "key20": "bjTaXVP32iDqoiztvgoDzWBgnKKdrPTGbuyUafoiKTniKEMfVMH8EVXGMVk4vFUzjhjDsfWcRJ6tQEcLJCu43vP",
  "key21": "4D37V2gVSoDTkEF8n5v2vPV9gGP34DbR8tL1Vov7HdGM5tTcE5Rs8ZXUeSFvSe5gj4oGqB26ZMhZxxzmkhLu2QtS",
  "key22": "47J8Cf7dJQrr4CzXB5Jdws2eGqz75StEMH2Fugpie1HecXybvagCf6kSrZhNmVDNjvaVvHsgGGCVmKTLSipaLAdr",
  "key23": "JjHfTwCghUgwWwtzy9BhYvhtjoGcJxgkf1KbDY2ZHut2g4FtjWaVn4by26Q7exDi8XHUcjmdYPGK6pzoqvS3RpB",
  "key24": "8MkUdoDm6jAWeh6UZUCbBGWGGNtQHfdieoFU4ZC5MBnUJeuEJEBMNSe1q53MqbjgEyHjnX1hCE2KYgYDQAfoRKz",
  "key25": "5LrHV4ucFCoD3i4qVnZmpzxeGZMkH18w6TzxSkqXS1tdQJeQpj1AdgLCb7nkGxDCz9Zhx82nHQQgsrJ7vQhwx5e",
  "key26": "5iPvFdmqosRHsaPgr8ue6Qj7Jj1kEMSNEhmEwkUkRS1VsWUbFAb8Lpt9DCZWduw9UV198UwyyKegEQowYb6fkb4D",
  "key27": "2eEjyoBcJtD72GoVwtWmuejpL6xJitunX3WFPHP9XGwpZDvXksYrAQfHo9F1TbwqvybQc4NUFvDNsexMCbJrV5sL",
  "key28": "3G86YYZjUXek5YoPqQxU3uPsnDVc85GmcJQtQmN4Pr2BEaF1oBNjJJiA2bwxJvoKkuJSmDYJ1CJyQ78vUemdfLQ7",
  "key29": "4rdnM3tpQX78VRQh4nfm38j6U7daE3QKHDRcKaoNaThP4jybngVx51d93XtrJd3JxoZZxy5tvypfgTkQwLRq8ozy",
  "key30": "MutR91waQxJEYzXXKsszhUiq7hngfoWJYntmpJRabekuqEmZHnLbuftKswAZgJa4ZuU3FjXir6mDHBfDc3NMs72",
  "key31": "3r9ezzqj9mQBYtaf14Y8gXe51UxPt9ivJWPoZArVg3wTjEjcuBZTT8WfTiphrfkHzNvfwkRKfGbSPyxT4FHPCVYn",
  "key32": "41FuTUHWTHgcfrbayCknq1seZhgAJnhiEH24ycnH9Ke8Wx7QdVEDd7KzsfBFHT8KLPTUfNpgXWZfNnt481B3yD3y",
  "key33": "592seG53zhCQJ4ggKJdPQS4q3s9JxyaqGrdyxJqSHWrfCwqHd7mrpfRMB6d8UbYxaExJbGPWkwXThqV11LnfXEEc",
  "key34": "5LLx2eTVKgb7tvKXa9xnxwHZ75BmHVfDi86FE7VohgjgTx6q4FoHZ3iZ6tuKoWr6R4yK5UMVw7dgwsFdCG27MYY6",
  "key35": "2J3B8sbYtMgebbyiUcMrue11hYfX9pdgBWSLMFfdmtcwFqNxCVhkhr8cGqUuwhKTsKriZ2WMGq2A9rGvsWp7ziXx",
  "key36": "43M9SreTHbUzudNiHnA7XWxopzQgiSRUR1Lb77Q1ycJBnyQnAQacH7ngbVJET8RdCCpod34SxmysfXnuQ1C712sP",
  "key37": "3DrSXkezFXHq5J8Ev1FH7TZgqQXbdBDTXnV29KMjQ1Amb42d36FCKNmgycJNnxbQp75v42soaPDGdTrhMp2tVbdQ",
  "key38": "2okHQkKFvVrUY7txYd1bAKTjjz78aT4KiH1NKvHb4LAKR5srnoE37RSgmFrLHA1zHcgyyzQyqX5TebDNz7Dxuw2X",
  "key39": "4YX1sMsQ7Uo43cGRMdrz6TTLsiVkrGE73BFRBL42JbqKWCb98GEAmyMQJ3mggKjRCrbDHFsX34ts8xg9G8RfCAgF",
  "key40": "LqwnrqyX6vpCZZEgoNPBDgMEhU7NYQv4YRP2vLLfukHMsawNprAKEX6Lb6upnyteJ4eAjwXHpRjTYS8tr8Madm4",
  "key41": "39y5N53UUwkedhQDBNFPDhhgFJtCsQ5NjHqSfSMG8yaoLQoG1WJsv31nsorCZRWAqCrWuR1yc5QdiRorNPT2aknh",
  "key42": "oboTJEFfrxgPJxKpuG3k7L1L4wAx8NkTxLdQoNvxqYQqQJHMDbkxCBU2nB3zbX3T79jNg4QgZs86b53sGwxzXbq",
  "key43": "5GqcpLjLGoofL6RvN8C3bbruEgh6oX79ZkNoJLRuoHkeGyCzRvLv958TDmo9dbtMmsUxZ9zEb5EPM82oeCidGwjx",
  "key44": "iByJ3QTbCKKQheMhsyootpphWtSP4UsUEDYuks8mEi6WPRzuCu7nMpw55vX5kU4gv87pzbN6GnkvPq2g2p4onSY",
  "key45": "65BLGU17567BFuPq61cMPTc3aLHRo8G8KyKxUvwLF3ezQH2Q8LJyMTNRtMHKM5eU5DJYGxWKNKYbF9csts3eHX3B",
  "key46": "3PU3hdXfd28nDriphUCV9ezAnhJwHMmwHAj338mSRHkaPz3mDBUD7WhRWRU8AkPTUDHK8U9wRq7kC6zdtLectVux"
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
