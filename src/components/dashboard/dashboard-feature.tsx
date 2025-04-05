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
    "3Hvem2ybL9UWfeZ65jaEopJ3cYgcDcFU1uZW8z6EgYdvia43oZLAeN71kVVJ6xhVD18uCwdEFr1gLwzH891Rjqpm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQ2j7Wxqd75CYZZcyYUGGUqBJjtZxipRE1ELYHxTKSnoUFtWR1tLX5b6DKekRdc7fXxnbJXZh3Upztz7Mxj26fv",
  "key1": "2KWn23VpwSxv72Z6P8F4UDpzT1pLrDh5Qk7Hxxj9fcx5NYnPsiG9246kCb47JeyQdt3FbmqnYqxbQc2AexgqHcvx",
  "key2": "5YsM7EGv2Yf5hhSaA7iEWikZi8r7DMUSuh3pzexVC8CK5LmHwvFFvXguBTqBHmj9x6yGLYnfqxSYEeN6TkjZ3T92",
  "key3": "38abqEaB6o4FUc5V4R9wFTPTwJik9VfsJibz6em36981jwUn4e3FkwBRyv1NNk2ZYujq2bio2EF2ByhgzAVyvsRb",
  "key4": "482RiX7hGt2XWgijn7Bm7XHvBaVos1WJKYyikr6mLbK47c1AWws5N4Coj1KkamPFpV4x2M3qDxGdDdcyaK3NskPq",
  "key5": "5s4LRghe79VLGWpxbRyT9Dr2bJ88FCPJSMwP3FTz53kkEGagu5AHEBGUSy9SgxX9W89FbcL4VQ21pSsyQLnjhaJ5",
  "key6": "6bkmQcr7ZTgJni8Hxu5mD99n1MyZPCV6x99ZfbNnwzPRgXkP7poWRaxQ9R5Mci5AsRTYxgrpuiiUkRjxMzp7pyy",
  "key7": "3ix8rE6DXyNAc7cixFSEcmFhGB3Bpmo3m7PeLcBeJ4poRguHTRhHUQobio6aAG1vbEDKc6GG5zE3gS9gCSg3jTX1",
  "key8": "2Rujkc1NTqE9T7WQDFbzrVyc2Ppzt5yeAGUb44bazHZM9fYaZswmy5cwzrJqozp3AuDiqJArTqMneSNZQS5cVE4B",
  "key9": "4gmm6wYAfhCnhivAt7K652TJwyCjLRWc7rbhqrtYkw7p8Qk2TR4AUy2AdMTbxvD4e3XmWM1KBSHmBXhpz6ynC5Na",
  "key10": "5UPwzr22ZDNMewLyKYmoG7eJY5XDDxCTgKYEJa5f5KXnHeEAm1nQKrEw4qmLdTd1cZ4wzH8FRX5y4wFNEu6dDRoP",
  "key11": "PPhK5JnzMMtbBrKqHbBVeMYxCRvzESHVy7watLbxDiKMrm2CJBFw9bo2dKPyFjutMSaQvhUB1yKnDrLZPunq8Np",
  "key12": "4wrrfc2uGGM7yPpWTwhbAHRChvyjmdyzZntzXBCW4DppCFGE3ury8hCSusaFdHXchfvdmJaTTJZNuf9uFYimPdny",
  "key13": "234whGYjN3ufHPdjttLxPeBvtjPKkMLpoXwU9P6T46CvwQ5QHu4rDLemqz3ysdtjZDBEbjGTxiEYXpTCNYb1vkEk",
  "key14": "3RaHiGFcEKCaFSL9f4rFp9px45uKHYfHz4bdekjsJmsHxDZw9Uom1qsH2abpMQu6Qh7eMKyoE37KK1AvuH3SUT8B",
  "key15": "3XxtjxWcdjRp8vgKYZoXhk1QMvU12LS7HtYmAdkmrGW1tm5XL6mbP7EftgkUw93xg8yDYwcoXP9LQopDuy1Vshx1",
  "key16": "7E9Mqo4Luka3Vbgbk9mK8EDaTnxdAQb7hKQ8prXhBKLbnXzNcVgp5p9m3czaWHtzqETaDfPPkz1MhqpjD3oqtSd",
  "key17": "3oNzTF8AR8HszX1ebkdrBhJtYjr7KSNiCbro4p6dt2EXo3AfWgmwiaMYfyEbxEzZudouopzstjPZZ38x9SyuJ54H",
  "key18": "55oWrx63K359DEcJjm5B93kCpc2i7e5pCK5bknr5Jwyq9JiX4Cz1mwzQ6e9fL5mSDDFemHCGNGQ9XaunpjGA4XGS",
  "key19": "2yBQ8PHTspYBEubsmhcgtDTSM7F5kK9ZxLq2qLWTDUNHUbPE3uYXU5VEVLYUNXaGFm2kPP8wcwR2psa472HfD7ko",
  "key20": "43NNCgyuGpw7h7fSxTzBR9pdnVUSJuTNTUQBvX5SvyFhm8RHJknPYTSs7VVz2m98GBX7RciPsqhfJA7mLqAaKkGY",
  "key21": "5bumMhKmTJpRi8uxb8DEHmMTdRNgd4JSZmghrRnUymEScT2EAZdUKnLfoc2QcQPbwkngp3vBq6LTYUYHi7unzas5",
  "key22": "5fNb5TWgAnATm2WEw9UmBCq7KgvYjEcpNwEhzQNNs7bJE3KNZ6pVPE2ZzWSvJgsKkhkCttpiNoFhCbsjvKR8uzzR",
  "key23": "5mksRAuxxnwB58NiyKVqNGEYH7dEYmgyHfnMYv56MnAQiy2CfNtFehLyj1r3EVouh8dPT6oWASpkD2WdwXrL1WDW",
  "key24": "46uqGjFc8MKxQAHEo4rrk69ZgFeiDxQHEUhRqFL2mU6HfJToKod7ijQHPgUJ3nBJnXzZLjptRyLXrDbTsfsxBBEe",
  "key25": "5YvBtJGczT1qvH2r3keEn9jxY8U36Hc8y6qZepPMEFpLKmc2vXBNp3zyXSkEmHk1j5LfSvwQojYXVRE4v8BoiEM8",
  "key26": "5bBTwK51c92gZSYKim6kpMLNrRUJAa53RpUCwWRxxfMbW52eDmZr79XjVpSebdpzFa5mmHcKvpv1EAZriAMd3Fte",
  "key27": "4nAWq112CCKG6c3NC14ar7vGUh3pcWAAjg6JeLE8GBmYu2mMD6eAA5sSCYZvbJycqkakB1rcFupgWdcnfFEdxg56",
  "key28": "LsNr4B4HbMXZUsZ5Qm6xW7gp5nDgeyPjvpRi7HYpoRqBKWgRRxeafp9Zhfi8uoM1eBaWMKPYLQmHFkCR3StDqvN",
  "key29": "4uWRuEtpXFtPnmjQmMSjvgNNrChuWqTr2HFXbUnETyLdcVaQGNn3KNPsneBVgCXfC4g5QJRfTNT9Lyn3dN8C6FAd",
  "key30": "2cTHtEErXAWhFhZ82BvEcNZoaGa8uFarQP2pV3NepZkAvMgcDocpMBJcE63pszdUBZRkwydcbqtJYyDRU4r4rJpG",
  "key31": "2TTHcNGfTAhvfBA71hcyhsdDVp1dLfDEbmv5zVdZMs8BS6juesYwmQB8NEK4X31H7YHyZ975qgEYKggP5C6QS1ZS",
  "key32": "4c2xMD6BfzBxq85DWEYmUZHSeugfi2cY4mhn7fNPX7WvBDfZa7mP5P1oZtPhkCXoGeFj2hkWgHrtnoaYZmGDs7oC",
  "key33": "4D2eVJEsNi6nRSHAbURSG8xUAz8p3eAZb8JkWTWyhL45Gx9J4GqhA2xDKkhtE7EGAwkck3GzxEVuAikjrVUpgq1h"
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
