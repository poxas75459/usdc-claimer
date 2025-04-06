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
    "1PrAfuJm15675FWcTsruxcFa9RZ7J8MQVC8yPEE5NqyWt3CnU6q7efXNFpUVfAwZ1gDDVD7r2N65tWrsnwbmXe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nvEvAcvx8Apm7MQZnDANUMe3Q191UFt6BHW582KwruYZtut8ErFoA5zSVPMEyp3KJjTkoAXPkfxb7cwhipkyMZ",
  "key1": "58cTcHeGB3NRX9PPbb2Y95ptMUazk2B4rHdkpNpLo9LhKdGNukgnVUvWGMPbhSnVvDU1HRWx24EWQAeyQWFMb97u",
  "key2": "4NVeHnwPNxJyL6UmhRMAW6xAjo2Xf76qRbz65pZXzuEcYzKHq3LbkDjxnTtruruLGiMVLgJXbLZ7KqzYuXUYkcr",
  "key3": "38ArNKgkyvwPJwntFAF9BGDjaK3U8GfEHmdeBnU9BMcWE7mTxuc6kwxWM1iEL7uRjNLvLYr78EVQkxzkmLtifoy1",
  "key4": "4yBugTXYjzgeeKaTyGq1UDwkxQHQC7b1Mi5yMtacXxddysUYzezwTm2GWJY4CyTr15YJtC9jKDn1WSg3Ateqgjcm",
  "key5": "J5TtDy86hF9imhhkKwzcVr8Xt8Uf7Xw3pNJAYUDTTYiRwovYduHbk3W7vNsNVuESJ92smH6VL37ts8YBxKEjr9j",
  "key6": "oju6PwK6p3w7WoUk2PJ6MMwJv4E1qZ6Y2ZH7whgT7zhsmqBd2CqNssW3RXiqvDAkiMT14zcHhhrktP4i49XCBnY",
  "key7": "4LDPts527rbSQhQ9gFxkyvZ6iunNqtEbz3DYvUt2iBgmtcbEqX7pqQJ6QkCgdQnKh9jFaboEwNhi1VLW2uKjkcns",
  "key8": "3mrV1AKktaGnyUwdqrFHXcqtKXqcj6FVanX2nvk7wtt6XFPiZMpDkwQbRiZtFtQNLKFU8tnDzu4RSJzeKXEi5Lwo",
  "key9": "2CAyUevKb7atuzMPNAHi9qoNpKK7bDKcVmvVFdMadkMV8QB8w2PNSrRfNxgNguNRPDim48wikfzUPzNmAHiudyjC",
  "key10": "37cFa6wZYpVrhqyWkLKqfPMRmey2e7yxoZFJP1449F7zRLKgdCe4U5wfsbKRwPHnCM259JWAkUpmFKDrhhiNpVBE",
  "key11": "27WWacPJkjEUuyG4ad1BngCtD2cYEhmdcnTDcqwVKL7KSbYdUgKDLp3BUGZeV5UJACVnq2G6Y389kHt4GVvuNPxM",
  "key12": "4d3HJg9orGgtVf8aXoTxwaaURtdS7zYoDWkimHhmxCaepVTLW8ZpoxQ7MEUnjAxCVm1Vww3bXz2z1fpvrKS4VZX",
  "key13": "5AbLSSvSGbp8L4vtKGp5wnerHEpECaXJLLe3AFuJCytnT7etbnxRgkmEdcBSUeppXHH5nnQEcmggzUfpfDwpYJNU",
  "key14": "5vXzvxbpbFPhHVWePBcwZwZyBsy2JE1WpwvY6skfHPB2aYb4jvWrUNMwCwSbw5TRLWMEnvULhVsGsHk8xigGadLY",
  "key15": "2C9q3iWJJyQt74LQJ6PnLh79sj3WFkvakbE223bhN2LSWoJSoGaADgXQqmNNiTacSRpxkrRp57QnnyTMdsats9DB",
  "key16": "2AbVXULkEYod2doqjzfZquou4S2ujWGKKzdixox2GM8EJn62bZ1i7c7JkmudShp3jaG3nJn9Y3bJeGJYLGeVGzPt",
  "key17": "5trU5nCAHCPjGMndMFrzQpTLnBar35tK9j2JSzjnSHmbnML8SewxkYBRxvbtf9AuzRLgz66fbxvWKq8DZzmZbXwn",
  "key18": "4WoTf2qA3KMczTtqm6BQeYZSwdjB4uca5CYHoxUnSRYxt6qsjp5kjnhz6SLRz2FSSRucQvtDjseWBsu9XhzjX1Jf",
  "key19": "63Sy3Sb752AgbqrUHSK3A6HUGG46LKoAf2JCFmdwoDDXo2cUe4BKfXxGzii7JgJhdJ7A1nVZ4DZYnLkFft2zR9iK",
  "key20": "48ejBPDpwuppCDfzp7sPScKmM963dDE4oJ8y76EYeH8mYYrjAp63DJTtdhQa7GtbL7yEiikbBcKShXqNJwAJpa9K",
  "key21": "2QJcpqFowrTdMwuhCyfcYRAQ2aULo5cj8rC4vRMWDCKGJWhvq2j5vZfCccH7D1JK1v46xBsAJvU153fs9mG3n3bU",
  "key22": "4Q8K7pfWNntP57CtKhqWeKEFDqM3ruECFN8ciZEDjh3vFgb9Hz522LJdiafaDa43ZkADvpCk8jm4p39DqSdnYkiA",
  "key23": "2rw3YxskfUrV2JfWQxcJwXYbPx512G2W7HGfTJqsehN6ALWH2mfobmJMpXQbxZLbPhfCzja4d4YtK2KS1o4v15zz",
  "key24": "r3mVnPGQP2rcBtpYqxqdn5bx4HivgsqsEY9upg2YTKaP9K9z5xtVbdCZHrAGVPciqxNoi4MsjN7uEMBh74TUZTv",
  "key25": "3H22Y2xtFt74wYM9iEqXLK3dBjgqL8a9LTZQ4id8S4wxfDS4Qr49c7qChE3Nqhx9A6kzfKQ7Fb7DXGVqzh1EYHsH",
  "key26": "5DgpuGaoMxeamJ3hPCso1WqmWuyjnmf2G7hr9RtrHmcQwU9K2SGS6uYYEdkBjKG1RWpU9mJ5XvYFb1iXBMUGpUzf",
  "key27": "2D1QHao5UAdMA7c11KaPx8omTbP4bKyYqJbgxTzWikMqdZPgCSfeKaGJfotQ644emqYRECocVwUx9NRHLCxgt21n",
  "key28": "4hMdgLC2xL2ayW6ifAdKvCnp2pdrH454ZkJthW94YaGpyUZjAqZ6si2ZRdbBS4qGRULYbBWAiSE3YfPHjhBcLh6v",
  "key29": "4G4zwfXeT16B9nSYgcgjyB8TBDSrqPSJyoVL2L9TiHBjSsTRr4kSJQpYC1Khjr5FdWpuhMSGgPC3fyHAeAGyc3jc",
  "key30": "3xf4uRqyJ5QoRCgGp47q8zTz3kBe2ojEXrxEwvdaDgSvhsvVs8J4fHyQ7bPFrgowtjwNpQSE1W22GB2Qz2qsGDLc",
  "key31": "55TBfeZ6cEEZCQ4jyCFRPg8TUPPr7Yp56gn6GBAgDzVkRuxnjon93JKv5JgRbuEX2vEeQACrnNd9qUVz4i3pgaff",
  "key32": "5ajretbVWbaXRREWgpg5Tz5Pts7YvXs2aKiKrWwDCFB7RrEQKGRdqtRUkJMJZjUDt871oGjdyVpfjV7QU53rcLgx",
  "key33": "3yRR312WFEuN8NtfGAjBVgWXrisU3HaHAB1hTzJdfuigw9YNfc7U1QgVdCy5biWRTFM3qb4TUhh19rfDiymKUqiQ",
  "key34": "4A4KB7xbXvaDJ6aHNAXFDZhHAR6UkZ3wnLdmMyhkHJDwi6trYMcGM6F82eYRjJRQa7YxA1TLhf5pZLwBzdqQvWDK",
  "key35": "26goAH3MBaeUrgXCJhAXcXArM6DUUWJrJvKL6dbVcrdKJkKvYBy5gR8F7QyDtJEggRnG2dxpbrqNqNS9CXSXUsFn",
  "key36": "4LuYmW9NWiLcetnCZvJ5qaoSPs52xaxeojJTmapoJPGabFPKdX7czNQBzcH6Q7S8HtwXnwxKnRepJe3Qe8usbB17",
  "key37": "65R68guyYcKfRupka5bH7ftaxQfTyf1RLHceqpqcf2AFZUqdUbG1gheV1vXsDsCTruCJrNm8uDh6VGy7RFZQ29Mi"
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
