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
    "3EFdE24F5LY6cyxBtKAnpZxKnDmCdWPAC2N1aPH9qQyysGdUmmnXZa2pqBE8mBzZdoiivUnT7EsVrWSfv9aGSFL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jodVTT2gmw5iRL971mVmQ6ULe6NH5HpetxczJZuL5AUJkag6BfAbqn2ZHwf86e3Ch85n5SuRuRVxbUMZpgkNiik",
  "key1": "46RcHBFXf42x3ipcTcYgcb3sXsr2Y13EaK4M1tqavT9VBB3U6A188TTUisYiaGhYaZpt7KyfCdvkJXZ7PznrA61j",
  "key2": "475ynrx88NwZ3cm3A7WvVTHc6YRenj4RLVYt27GkQpLJ59pKZfXoFcCvuh8Y5QfRAbp8K8YTmJWjVxoxZ4cRxj15",
  "key3": "4kHDJbAMWABFmoreqvXVGVuxuC1JrYjGpC6bKzFqqfSzMXsu5M42hZaEfDizr6qz4FbbXwp2NBfDCq6m89Y57Ezs",
  "key4": "3qp6XvqZmM6VPGK6bcCA6kb4T2RCDLuHGfQzaVNqi7fKc9UopQtMw1CggLogQ78Auf92iMmgkxveUQtCoh2Md3vP",
  "key5": "5Fcs5kNSRRetw9AH5bA2ysqpdmPLHa6RqQm16CVXkzGQx7PrkosJs48qfy1pxqwpY9JrrKjHd7WgyMAxaXmPrzya",
  "key6": "5GKmiBqhXThmjkoP8NWUZziPZyw7aLyjXdyfp67Zm84sLzRei544xot8uxAST7edLWdmSXupzXA5UQFpqUGRRV8A",
  "key7": "43oSMykGcrtQYW7zhEabkEXgvZWHiKeZjUJYZ7mLYUjDh4bJADS7AdPSiYQAegjhHQWWdGhJQsbutGt1P7Eohe1B",
  "key8": "3TPqyRHkbVfq9HP7xtxKR8DEM6GFA7TbHVRGc994epMwzRwe8d3tXeSXkF9CYnrvoE4Tc2GU3s4H2VBxgUDYLMTX",
  "key9": "3vyt6miQqc2zJ4vmaAChQR2MJY2BNWedkxx9jqEC4ExHipciDfnVcBkbPmLgkQabvgZLmzQBkkUebSNsFirNDvSA",
  "key10": "39Af6WUrYDGpAAakQTZwDpsNQkMGNJyh6vhJqNeGu44TF33BUFwEdHgrrbmAD5UWBa1BomVT1FbKcMcaG9hNXSVA",
  "key11": "52drv8aJPRQQMvrzgz5q2PKC61eEWPS18B4pLiAvwcGBhkZ9oCzjLnbbMkxvkeGfcbeZfj13grKRmKxVP95umyfs",
  "key12": "4FuzAepdBGbSKU5taMDiNE6nshTZtJz9SCLf98K6oJ8Un62JVvjHmzHZCE9eJzc6y5TKxM5nUCvEDERrKDLjmYxd",
  "key13": "21cX24eg8S6HRQ6FkGF7d2YrjJ4U3ztLtUVgjyxniQY5gELSy5enzSaiUrSe84YE5k83LYejTtGEPh5GDHM1f4rM",
  "key14": "3U4ynbLVV3aTJviuCBwh2QqeAKWdTb6uiav5pVNECgacERAtmxVw7hY91DRoeoaakG4FNXB5rwQbrBiWQVSTEnJ9",
  "key15": "2V5yKhNhEBwWYXNCHGdwBt5oSFNrAaP75oegPESt2stRGHmNJJNBU1X29yBFNWVh3x127stMv4ofPNCpriNkf1c",
  "key16": "236cyBj9aTmzVXy2P4HeM9r144grdobp9S83tyoCwRYTToartVUeduXCu2PckfJ5xXsencjApe1WuNqYinpCSqy8",
  "key17": "2D7vbFwobkpagJ2kGq46Se368JDtvpLnE119Sp9Gh7LSD3tmgWyNrrN5VXmaFV5iP1uriftsxppZ87SzXeDmN2wW",
  "key18": "Ko2Eo6nqfrYFrBRvNJynVm3nStYnaJ9MoiAyNGiLv42Ttnuy84VcG6KpAoPLbfDP8g1NKqzrDtwfNgFCDiWwc2V",
  "key19": "BiBtUqzncwhXsSAuSpUJregDTTsNsy1L84uJ2JnZx78ZwsZZNZqkFM8jKprHG3uHnsbCPf5v4rdLP4e3BDbE36x",
  "key20": "3VPiv2KNac1YTogJGJ45dE4WBwARKMEhiudxBdBLJGVfFRFMkDoEkZC5MypGi9WdcgP7cjT6EWWuxuiUc9AcFQh3",
  "key21": "4hjKbR3AsHJF5aG1QisHHHaSkssuNksRUu9Grr4E9VMgpo6Y3uAcewa7EU9hChMgyAJUSbYKAUurbALhQqTY6JdB",
  "key22": "3n44p74APyB5HTK3Eru9WvxuBFZtye8N3seypwi9naHCDUBB4nvKchfxs76Q8qUWn8J1cNQy2LY2ymxhyCtXCw7B",
  "key23": "4aLybECZP1LnTn6WE9HvFhvWgk1U8EY1VUsStuyztzPngECJgmpiqamcu15TkggkafTwyqZN1sJZddnW2ojqX1Zm",
  "key24": "4zsp7oSCaTVwAZP2qSA4SWYuEdLsVZzYpGp7sW2DF9oLcHGo5oB8C59QVFApTB1rfcGzHcqS48TDGKzRhJKNFdNV",
  "key25": "4wjj3cg3Umt8Y3F2bQTTYfP9o7WUAoF1x4HQiuguTKp4uyoXATspuUxzoSfUmsKtKJ4i9H9VoZ5LDAFwztb5R7qb",
  "key26": "2CRMjf4EUNy58ppegjLzsBXSHFXwGRAuy46eeKQKCHEyc65wG7VfLjoaQjzjVDnXkf5pZGzNthDNx5dLSrJgGTQw",
  "key27": "46X4VBYsJ1jioBsZocGcCNbxzi8QqeWWYejrmGwz5n7xTaD6PKH6vZPfrk35JiLeG4yPW5HzMLpDvWAwSeTon6Ps",
  "key28": "23mq2x8rjRKbtrtiFdCkaafAdNM9BQo2ForS8yeAt7eHiJqStG8YRydXFQh7hgNTwdZn57L4a7mDWKa4pLDgHYHp",
  "key29": "39eE4V71f3pAxrDPw9HLi2WXQTeZG1cAR2q4ZAWuNK5ebTQD3YyYgScoVRJGY3H2gchopQQLN6ik9U3CK7EDkfr",
  "key30": "2bmfWFqaDsncBwTzQBSJMTCsByosWH9TYRtdEwktTEoxbxbEhhD4q8GDRkVNAHexYXYcsR2XoeDdAzvVCWoVryEs",
  "key31": "3CTBGBhgmPpf1zFTcy6J61qpS4dokiNCrYJA1zp3iVwzTnWQPjRAWFp2UZwHeKgWzW3JVb4Dx28PKRaTtBmUA8tb",
  "key32": "3xgAUbJB1mRWRzwWsJewkixhhEq9qvWUAoaJL6vNivKTYvmHVerhp6u9A9onrWF1hW3RfmKHeowVkKMRhxuacrdT",
  "key33": "5uoURfSYXLACVy4NowuEocMRW3iBHBbk6qZZJKCJ3mQCzEf3s1Yf87MJCnmJaBdozSMhwzt7Zmu2wXWY6LSyeaL1",
  "key34": "4c7sH53756Df9QvssAiipmWzaart9RwWoYHUwB6Cc8h3P18pWZJCYtHMaLiA5ZNkLQSGmX4kmk2N6hLqkX87z5Jq",
  "key35": "6u6TLm67LHKgYP5YJtQUrg8sct7egauX6snC1bPdSiCUsRtBioW8qdSxne4G9A2KqCQidbcG7w9GUgys2Bret4a",
  "key36": "5qHvc43HbXTg24b2jdGndQNwcJsKxpj9WM999CFiKAU8ZHxj7AVG6wyrDgYAUByX9knKi34K3Nw357YNdQzDUJb3",
  "key37": "5yX1UWwkXMfy5y51GpUZASqtUV2y5zALNzUyqcoa9mtSQMKVb2z8WHNjhUTkn1GQ7TmQeU8jzD3Zn6JdXppKmRFa",
  "key38": "AvTZeauBA7uQAvFRtE6tS5NQ7wfx8uUC4eaGNKh5PU1jTkEwTivpnEtAyWgEgKtXGvzzRc8cG46dSprJMzYMjEL",
  "key39": "4aTr42mxaPWpEQ11XPKdRY1EY8mVqdq75Bryaq76Bv9vwb2m2sfrHakjEsa5NnKLAfyene5bikALTg5DPLFWy83y",
  "key40": "28eXpewTwx2zQ31U14gNZHQnrumGizTU6rurTCRGokwuqFrSwj8uczC6V7c3FYELF4ojAf7PUyMfwWteMLvnxvjQ",
  "key41": "MgVGioYWFCrSNyjAbaR2rEzHSAVDwGfsmiS8EaKtYaB8mBHNivGxWfdEMy18hPFane22Vjk8QTPPGcBFofeKTpc"
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
