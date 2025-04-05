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
    "3Cjhn8vhgMfBKmzPfp4yWMmN2FzxCf8su6f6F8zwwLjXn8wzqYi8dYZLDQKVRqtoXpW14unF7HUgkyQXxiLjBeop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21XNbDRFeH1ZUyMVndao6odUZVKTkdxr1ugJwCvx9PVRKa3n4Nf8FUsv3RbZ2F8njKoeHHBRiUciPKgRySDq78EA",
  "key1": "2qoWbovqq4xpLNkZevHerYSNmMBwsBhfu1kPYrAjiwiiifGVupReNuHWzAgRteYP8AMq2N5Gkn1VuVhTZQZpN9Nh",
  "key2": "2vjiRMacrLTwG1LmDAdyhkT7MRMxUdQbBXu1PhbDbrjvToJWjd5DKtepg4KcJFykYXex4Zop5Jfpca8hPHdFkx5P",
  "key3": "4B2FqLK1VT51aXeDurKCSJUGh1SnpaDuWoJczYWWxzvxwMdgW4Ey8zvbNtoQiRNx2rom7Hn7sJ1fbiGkwx6uSuUD",
  "key4": "5xNBvg9p21MWxKMTcThj2R2NYTEHX3fU9daT2tERUyqBibtQzXtveWZM9dCzjaUPxAaA8DhmHtADhPCn86aYMg9e",
  "key5": "XCwRa76wnkb8d3ZztgAgPkry8JQA6BJAKjpaeVTMYUoY4U8TkX8exiidEFkjJGSzMkESGFJrpXDomwgNMSBQdpN",
  "key6": "sbGudMYKnbNmsiffqXRy9gkVza1dcZsQMKtkm2nJKiQ1CxCHxuxXubvYy9PZMJzXpSpzUKSKWnm6vxjCNhB12Ub",
  "key7": "w6nDk6t2iMEUUskCpJg2og4RYfRybg7fZ88qfwSfpYvWwhX7pz8EA9bTUtYzZJy5SUiu8Rd2xTnrsuT4VPYEb1n",
  "key8": "5pWSeaR7dF88nxrrdPdgdYAUThf4mJPpJvk8KLKDzjWccs5yGUjcFdanRnx5G5Uaa6Hn88h8L17DvbghNM7R94B4",
  "key9": "3PXwU3jxrioxcxWtHUQvu7P1fhZGT6ENDqq9DEJEMtgC2ruwRhsWEpoPA6aJ6Pn5CsY626kP8edqNMzLxcaWqcRd",
  "key10": "eVwsZzEHK5p4KHV6kEzsmJLXFWLi9VBAXLEQqUWMnSfHHTbrLpJ6pUfse4DvLoTV6MPvaQGzVPhgyBJq8xCTauz",
  "key11": "UUUyJ48hnebYoJcxG4QEkHejQd4ZWWWSYBP5YUA2anQXGgmAgPXcPk8f6PbBf9ynLCgiEqPL7odEBUMb8GvDsvq",
  "key12": "2znNYEPHxUXduiroj7GBsmoowBNRGR6XXFaRftAYDeUJKEVKXczm8yqufxUgVfuudFFiKvXgu3o97BV3SoFSyaps",
  "key13": "34wQko3g5Ez4fJzuJ3LNd5QNKCZAi6kfXYY3R3xWcLggotZp6tdk2yoDe8vbPqkHobTs2yn2EDYKCT4ce2uLRXnV",
  "key14": "453gxAHbzNwawB63Zbs7EeoXXestQ1uatzJt8xQ5JZ5rzi45YigEb3dSzt6dRXZguF2ESaMucGksQtkRcEGiKse2",
  "key15": "5EyfoRiwyNCaMF4jVxfPrjDBmEP3T5kyRPq2rrRc6AKSFQ2oAyncpM4v2RwqzPves5FSrjZaEbjo44zUgtUrAK9r",
  "key16": "2cavWQhLhKEgE86GNJpwjw6jZ5uC75gZrn3KhRfVqT2BSd9oL9uyeCvJuWp53TN1CcdLUWULAMJS1jVyh2r8qepR",
  "key17": "5b7qspYjnr6BqaEo9N1aE8L3DmibakmUVvuUBpjSTooLn5aeiai89GRVyftH2TFkDjdtVHYEUqh7cpbgQguQktaf",
  "key18": "4cGzPDP5wAtnMparikvUvjSCm8VD2epbeqzeDgJGy18Eecwbd2Ff85RaZ1SAMdRU9sE3QdaNTrUAZeLqsgUCndBj",
  "key19": "4cFTsMRYa1ZrY9j1MHs3U2gCdvV1pX9tc6q4VXVpgvjicuQfTT8ornor2hdqxNv2tPNFNDdhc24ae7gKSLyEYiwQ",
  "key20": "3yQrQmU7cW9RgPQjEHnGZ498kQu9Q48P2Qrrort8LTM2gwtCh8iS3PapUKAzz87qFArUn8tguRoC3yirQam3VetG",
  "key21": "1piCkCDPxUNSBgo6wcMukkzMMw6gWMt3KRYa3fEvXv4ZCzYAXbNjucJ8HAMWxDrMB7wqrYpKm4k8nmB1Cq8ACsV",
  "key22": "5jptiJCeoChxw84UUy3LVhaKPLZcxzwYzK6hukdsmHGFUBQfya8eWGZfnj21CR4b1SKH5XMxdrpF6k5gCJnhEhbD",
  "key23": "5DH4oSDkBh9PqUqBTcwkBR9yKzV3Y7pvkw5os1HLH4GcfXWop9esFuRuzeGF7nHwP3BHhjyARfTCBkXukZdXLVbz",
  "key24": "nbDabAu3jrgAqb9VwCevxzShW9QS3pcT7A3R8s2qy1PtfCCKCMFtyw6a9jyHY8wEAvUoKRANpJEJt2XzSeTVWnG",
  "key25": "McWPKsVc15YPovfAKXRt11KsRtvFSVcsVAAXWTzrK6mkLCMKiUBQSCmDfnRwt6ZXh3MbmiK3Zj5jdYuC85tkB2s",
  "key26": "okNKJYU3fqcuXsi9bPhXQUpeUFeb1Xiur5RDM7kfc6Nmcy8spr6aLCknRHCM2zWaGnvUXjWo4PhE6yTtPHWVubx",
  "key27": "22Dk3cTqrSG3vkju3GkAoLABEB9mWs5ZkRMMmPigrXjx29qudLhgQxD8dhjygUbA4SuRUES2f7oZZX2GWSMt9dd6",
  "key28": "3Tgga6VmaTjCxSArFNXi4hkTgJApRFVWPz2b5xcPiFniZDbspFp6KTTJe1YwfQdLw5XodZWvtoQWkigt4X3khNGB",
  "key29": "5vfidxm2ojsAJd8aGazXQxchseVY6PCxNHqWEEsrBaRQxkNi3KwVR1xV8URBfxWW2JKRzCNPy3Qi6yoUtvVBHmQF",
  "key30": "QdLJBi1N7u4cm4BNkM68muRNTrNWsn32F2dr19yW7VLDoBijSwi9mxmw7Z5u51ovTvvmkcREQw1MQc8s5Daiy5Q",
  "key31": "4xNRSv92x32nyejSbuJfVUtUkz2CXUHyYivyigHvwUNrgH2cXLat8aFYVRPJ2xVKTNB1D3vaZnnuadVRp1y71rje",
  "key32": "2tkgzuN8rBaNjMP7tNVnhAfvs4YJBoRoiR8GRCi2auzPvUCVfNwnGpGPkW4VcvD5yasPvECZuB8p23TuiZiMZjbT"
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
