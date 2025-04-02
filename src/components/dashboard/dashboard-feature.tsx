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
    "3LVvT74gpYoA3o8RtmtpG2yfxfiMqpvuZj9vw1Q7spr6WqexnPJQM7NH4d1L26HCGWBL4V9XwjZvFYbZKnP33Msw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hTfbAkP1ZZ3PNyov7n84ygopfptrWDnjDmAcSE2Un3gDaBpVQRFH9sLuRwNKoL7aHBn2ADFwg6Lp51g3JcfQHt5",
  "key1": "3X4zH5bXd3z5pD2z8G2JNBjepE7rR8dC9yjdwCPCNN1yc6YzH89BDWS56F8NVkcrsooad9yCGd3cmYZPVB7skYVs",
  "key2": "36yT8TWvDmh89n1iiYX3owkZzqESjhpGbv7Q2Hkwteo8KvBTJScm3qDPECMFUH37DcKMTLxSQGrMM7asoM4F5eiq",
  "key3": "3RgdmbyNe5UyvaSFwUHaXtBHaxJEzkqNT3NSq5TVbGu6h45WrzdvvRSJ6rMPG4B8apoRP7uyeXbEMj9E1ZBAmCVz",
  "key4": "WKrcoybE6EhGGHzuhk4ndBVob3zV24Qyu9xrAbiP1nyUUypzcd6M53b13UXu5UFWUDC1TM4mdtDEk9MowMf7eik",
  "key5": "3EMu5q3DtppJufmenugm7jLtF7JFvMWMBFf6KFKq93CQMaYN3ukUkvqu5avbe2eVkVmCf4r5gtG1M2Pa8hLmorgS",
  "key6": "4RvMM9T3kBmfh4jozcAnuD5VZiCkJFNjA3v32Yq9BmXv9q39KHM97k2b6zqXMJG4jH35T5kCS1sf5cecjprJ99RK",
  "key7": "2nWrcx4JzHqHtNYFLJMrNibforywVnpQU9nzQ7W9rE8sKCuFLEDV8qCcS8S2jPHf7VioyrvbUXTBGkD1shTcySsN",
  "key8": "53EfAttcjF2KKtkG7osws54L9wggcKyu14AWff6bfonqMg5U5duKefsnM3jLnFnoLkCUf3Rf8V4YARBew6pBbbUu",
  "key9": "5zghtNm8mE32t5q4eaZeucTw71Sh72yxLVUUvNdTNAFRE9YcvxesMMenzm6dThMDK6HvmVNSLE2akHoEtB6qmLCY",
  "key10": "53csampZHyf7KhwRoLmYLkHUX1CMgMyrexraWz56EAMxfMYNZ2qFd5zNxmvFfsXfZRXFBeU5zBHp2kFbaEoXqQAo",
  "key11": "5kUmJkF8PRtQTq5RHeJdMQiV5ngZasx6UJqeffLV7TF9qUNDKQMuMbf5EzSjEnZpCdNMeEBuj12dZwiK7hYMtB5",
  "key12": "3TTUiqvnPHG4cFFRYQhyQNm4Pf9VMecP8cjVZ8UA3MZszYnMjTQXGZMDQPAvHgbZ963BgWq2FYjKQcj4uoaoUxwP",
  "key13": "3dSA9qe7dgJQzvNGGAM8Bc9N7H5yKksqRbjUMsPuAaP86MSgsECNpKw21frNQEYnMVzJmJmgawcmfm1aLkpDKGQv",
  "key14": "xKcmxmNjDXovanQM8s5REgAcoKJRqNFfZpjtVFKinFK2joKLHT1fvkY1H8yksRPDsExkS6fw5YSQ7qtX9tqyKYU",
  "key15": "WUr9EijZkv2w8H5L1MWQcJnNNSXsGyW3ykRAdFGyui8XDEwV77xiYkGmixYbMmg19fKjX4m5Xzk3JMyLpRiUigr",
  "key16": "5ug91xmmpuk6JPYPEPNfDs699qxVcy1TkAYgpCRgiWKB4bW1QeYPm8nqQnhwzA4eC93WNwC2RxsmRaofqMmqpR9e",
  "key17": "61A4f4wQS2xfPNePFFz5W4NHkGfUH7PcSV4ZZNbSd2eWeDyEAh9Gpe34MmbFgAb7fgbbygMLZ5J5SzEroSkE1ru2",
  "key18": "5dkL4BWqqWwuT1623q1weyWtWh1LiqsHBuE66e8DQUE8jWip9pyStN4zi9Ljdg321vks5MY31fWwq2yfN8ca7Gku",
  "key19": "4jvXKnffS4gt9mZfseocDM84ocZsV6qtQdPPD6SCVohvWCtrwBgYWr3BDknxuJJFXPGhNLvU6sShkg6j3HLNyi5F",
  "key20": "2C3NLihVJjBvD2LbH2TztTDoEj5nPX6qfLqQcqwyrEYTqjrjjE4rCjzbigNwHrnCuFEeTfE8xY4NQi4HpJhTjwx",
  "key21": "66pse5kxdiXNz4dvSyaLoTBfMaJL46h9oFPyjStV94YRJscKZTxvnFDHsZkDooBCgd6QJtbEuEyiwEpWPGmByQ9k",
  "key22": "3rYSrceKvVn1f4hMnWXMRSPViKh8BVrhYRhwiLuqwpfrUMwJPJuwxuSUnSSM7L2hBXd8UMgMagsfCWKb5221toNL",
  "key23": "5ehWzGDGim53BeDiZnhxCM2DXPoa5N6y4k8mpnDDuZNDaYRh7hrLffCTSyV17BHS32YAgRxiSKX95HrEJ8M8VEtn",
  "key24": "4UGnGtHY7JFyYmHCAj5Qe6DRsrDbKhtuDRPgBcQbAeZsmh8MoKyYiEMRos4TqUv2zYpefNdG7fdn2to4GTSEiNHE",
  "key25": "4Tw6NA1meLxKJUEzkpxCB1mixbUCvMJv97VyxL5J8ZWLDZ62Navb5gvWcKp8ffLAjPNPruCgKS3qoeTq9WyPpzfy",
  "key26": "5dysbW2YEkyVdLnNmHZkQHXNtEkkUbA45i8yWXLq4UAoJzNieebL1BgiLEe5biJfP8QXs5vm28oL8DsbHXVyVL31",
  "key27": "5jkoF5S3s5E8FrqtRqWLiEGMtt6f7V18WWQCuYkn5tscij3tR3rQ4Y6Z4BNFKp5gfbbTFTjouaDCXd1zJXRUY6pH",
  "key28": "emrFbTpX5qbLooyvrt2Ai2Db88pgZgLDP6W3s25jMvjLhvtms1XbQaBptgJ4sZgfMCLkuxnvpViacqFRPpfCR9p"
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
