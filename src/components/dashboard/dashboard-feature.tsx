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
    "5Kg2ZxGaneZyVZZTKsCCkxk6twmT6HzpgoAF3drCQxrMksbBX51imV2soJeUYnsPtoZMf94oitfJg4zLDXUUVc26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ua63YsxW7d4cQexYdMGhFAydESy1gYJj3qHM28wmqveKLw5pM6ai563baMD9vKjDo4AJ5JLhKuhuo7BaXLgtWDU",
  "key1": "3ng5yuyXujN9UjuXaS1bCWx85kNzu8uyt7RZmuT8umxm93NQVWMEseR7v1fgr5BW7Yk7trC3QrM5TPujQ4Vvgi1U",
  "key2": "2xQAGwcDuc37u8TNoyMNgfNaHndYMoSPybUNZaLbWZFQogajfFdJ53gWSR9cX8iZ5v78HeGfYePeVtDc2X6Uqq8G",
  "key3": "2nVugc5wJ3pUk5W1sBrB2zCn5mNmpgtEiW9HiSw8DrLMFjQ1N4RtUEG53Q7NcTiN1Beh1cybBFrGE5ADA5dpNTU8",
  "key4": "5msdWEoCjzgUNMNBtjWpZnjT7tAnoU1M8pU5qMQfcNaw8BgMDR5Hu7U47fqLb8CsUjFDJC9UHVoJ5f9u3JxqB7Qp",
  "key5": "5H1zo9yb8EwPkStza2zhbeJp4cTkZdkaNdbcKb7PR68nKLYzeZvuYVs7CGTjaxHDfERuLyJy2Bp5EonnLTjpLVeT",
  "key6": "rb6GCM7p89u196h9EBj5ewrh7HPd7b4jHJvZdYN9KXYNTeDywwdqwv6gYqfhUVE51CeSQkrYNyn2YNjAYhmna69",
  "key7": "4jDH5h231ZjA5r2z8Y79zPymrqDCtaiT1iuLnmScdXTnq1KMSbX48o3C14hYKZ6QosVcEdvKH3hVibXaxw8QLzt",
  "key8": "2gUavg3HCXdZHdiW2LAZehJxDgz58GWNppVH4wnn6SueaBvWuKDhq2HRS2oGGJrQf1qCmtA2YS7rSPeKis4z3YpR",
  "key9": "5igFYvojr343GFkc1JN4R9shxACLABqKwoarTqc7sSiHDYBb5vFDyaXkHFVLnj9AA5xmk7Esqp6hZ5dfHwq7CdM4",
  "key10": "5UvNDZ5c7bQRBwkaxzEC4kmaPxQbXDys3P56nJcQpeyXiWEeZw1d8HcWDnhARddCrzKFmTbCzZNyjNF7BoHqer3b",
  "key11": "4TnGUneJ6Y1D278DKU5xtKfhArDJ4CxiVBbwjjFTC6YhyhVMe6XDkn536utiSVN8LdBQBnsJec6VT34bt619DvP8",
  "key12": "5uYoKhrB63o2Tzbx2gY5iDCv8LXpKzApX8D57aQgur6JPcL9m7h3v1evA1PMnFqdJh1CxGydCRUPLKXd7RETJvC7",
  "key13": "3jg7YxbMcivN6EbxesRgXSwP5oTh5ZW2FvZHdFGMkTVfE9ZRH64UkMqprCz2uYe1SFkjLdkRCGsazorv7fUDQk7E",
  "key14": "tmPRroDiu91FsCWfe1dmsdiWnSzRaXL8xDbKrhvmJGzGeBFmGYmotGyTxzUF1afaY3kGfggBfh4kFAqjyQZGCFW",
  "key15": "3SosPWAPeW6iNyB3RgumiyAJWEWGRUih5p87nAP22SbGpnrJeh3ejuV1snnfRKhH5Gwn66jNnhjanBT5dgkfL8Jg",
  "key16": "5rtuYUrcsD9iAjMbLTxg5HJuA1PcZWsWiDi1KvXF1rngDTUGFnyKQuLoJQv5k5b2HPEBEmo8kMaN5Pyu3Q2mDk7N",
  "key17": "41rCL89GQa49syFHXA9aqBR8XWAkj58E4a7QWQVAwFam4A9d85bC6ABF7QmLVG4jp3akvcba7WwZHPVMCEiE7Fmj",
  "key18": "ewm1Tj8g5qHpiiMjGEKK7rwychvzGEscCTURcpqDwxMNs8ggkN2UrZPsFNt4BncNbAoZUzTTeerwhVicu1CvSb8",
  "key19": "2r7teNX9HJJAPL8bzyx1QSwdkkCmv3yUTTmhHMR8qokGd5d2VMWhNS4SuPGTreenfxrXjzJZWPNTGqdnH9nQpwa9",
  "key20": "3d8fkFEB38vqkKvijMf1M41DhtzDB3DXbyNBB5iMamHioHqu3hBoJYVzLyfVRsTGuxuBFovPmjbrZosF6p1MVfCt",
  "key21": "3uQ27hQrp7gYT8JHte7VLvjERjJV9czkuKHpj8ooe2kh57kNmPHu8AUk6jvv5eMq6izLdkPo4PKNKCxfKWUfo4kZ",
  "key22": "pKcQZFm8wr7BVDYmSzwypLtjGzN4pcBdDUFxT8FRvEdF8s2pcijA6ha1soLFU5jw6AvVmFffSp4NqsCAghpSN8c",
  "key23": "5oSwLyKLyVhk1acmo4bQoUyhz4gnEoXJ528fTTZT8DK9tTQ6rJGButAybmk4NQkFUq5goMCySHAkMXDVqLnEBXeu",
  "key24": "2Ui4DE6UsQieoHY437sH7ptjTdQFufVK7N293rxpzyqoBhMhE6sAinhWVMgk6M43CfSGTGHmJPnfGYqhxjAmfARH",
  "key25": "3GAbWxDxRyXQGe7fnqNRdWqM5ckpEQX8CeVY1GQkwPhdNwEudXhVbBvL5FbJuKSnwiEU5k356itf7ftsyMxWrmvX",
  "key26": "3KWTRTEyNsZAtAj6C3TN5LKnu3yFt23fjVjYhu6oA7z7yvwvyBBsuF5DvdRD6FtqYT5gKMN8GcmpAbS4Y5J6j2xF",
  "key27": "37D7oFaszjh2AnCPHoz36AEFN7opxX1PSKqTX8DfwWD5dRavMaDnCWWzV44YUt7Zy8usYGzuVm6t5UxBWtVGhovN",
  "key28": "3zAgc8Z8zV7hep4kGjsWygmPa2cZg98sAf1sBXNs28BBLc7FmyYqBHuPyoiQ8NsUHVWxUJSeJitfiM2zw1NrtD3H",
  "key29": "4aEjPQ8H17ThoefURUy1RgPnFDPf9NtKa2NSsegU2tATkKEXmxtkuRgX3MMD7xLV3qMimDGoNod5dgQFfb2ZBYCo",
  "key30": "59GfZjcFb4siTqZJQiYyCNGYT2HMkGrHCTQBJxoquph9MAiDZLcBtJzWwGqdaR24iCMKwyGJsxmvjBm3KVzvSN44",
  "key31": "5ZiSiKkfS6nK7MW4Mq4vwGRfjDSfuVJPZbraMJgjY8rDZ7DYfqV1673pbsBeMzgo6LYqTyh66o423mT8Uii329Fq",
  "key32": "3ochfro4GD2rwYS7q7iXTfmwzcPah7zFiAByVfJqErvapMmMbLgrrvqBgiwNkEmPbNhCkFEJKo6DvQroV6v99jwo",
  "key33": "4usHbB49ZmF3Bh8Z7GePpCnnY7p1sTwZ47NyR3gq5DgRzV62rCTwDygm7RpQBWbKjTFqUfXAfhmVTSRx447LL5JH",
  "key34": "3DpPjuwWMVe1thsZXVLqqyd6zWCLbaV6zVPJkyvc92WCeingNjQpkNzvXag7m7nT5VkTJLJxjNGsKKdqBwrLhszz"
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
