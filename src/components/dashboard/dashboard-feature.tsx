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
    "49hP24zu8E8FFHv6vrWVqn5Y81MqpPBCo8f739pedUz82g34brrpCuJkcRQHuYpchwxKY4GupNua3cnfea76D54H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VNP4x25iETGzkddWjjJzAUoLS3dEbRMxzP559qDNhMqSGsRWCFXz5ntNk2KG99pm6pjN1Ez5GNmLsNzmzRedsSn",
  "key1": "3brXWfMi9TapuUAgQvw74p6c4RMD5LtynucfwXrvp86zJ7BFmYGxU1oGVgbjViv4nitexwLBqUGQ5MtxHDudJGxM",
  "key2": "7ev5ttmGKvNqtEXvtrbgjV2e4iVUTzhbLEFkn2UJEm5pLT3JrUzo3RkP2WAne5DhpAaXcctzsxebk52FyxKRFFk",
  "key3": "3YSLEDMpNvuNtbKPEfUJb7CQn3aocaNXQepjGBX4jszqqAgXj1MzxBMpjZwyzYy3t7w7qB9xfhtz6EcFoLHmqE1s",
  "key4": "3gZmmZid89pjWopnCeLBkGTsvimU7RrmvWz9a8MPfxu5yPSTmNctn3JdLk6ZhH85Und2c12e7ME6JHsV516btVa8",
  "key5": "35VhSkJgGYZuhr6uBAWhYN26umW2wQdim1RVwNeAToir226sgfNoP8ArnoDfcakEkuHzMSrqfhbv9Bh8ZQhJX1hY",
  "key6": "3irTAjhSpezHyaZvboUo3N11DsGV8Yske8ya2eNUkdvmyMzqDRCFdf5UDaf9S1NXkZDCTBLmT76tz6LaxCEBoU7G",
  "key7": "3fRCJV8ZTAa5FB9zXsgJLnxstGtHnFBjyTgS36wf7Af9uTdw2H1XMuwRxWDeVA22JzUonJuzv5KCE8gb7mpk4cuc",
  "key8": "gEJoXmbuH5LN5Q77WEkMsMbpKsdEm9ojTTanVo2mjaUrEgShMgkmXQMUVLuSQUpuV7sWirtkQDCT42qx1rC4Ymc",
  "key9": "CLQYHyyrFi3bYt6mtWf6CAYNY2wapzvKfRcsdWX2ep9T6b2z4qhPJj19NQJ7BDfb4hCXAoxFBQPmiZwAJQqPFUx",
  "key10": "2Q49hEi7tgRAV5V7m9wQ3eA96wyRgJeQtf5MtfpZ6nysCoAVvt4s6eLDsZ5DZegfH8nrcPLayzvtH1Ys4reMHPHM",
  "key11": "5dyLocGCosVzrnbLt8YenEGih2eovk2P85BrJgharQZ2PxPwRZpcUQKP4Y9z9TrR8Yo3sniULXT7BogV82qGLsWn",
  "key12": "37mchzZXc9SqPK2cfA9sJkYVEKcykKXZkuziFbK39AZ2hNYSxVe3oZgv1TM2jqTvZ1e6wfpCUh8xELxxrNwSs62M",
  "key13": "3SKFpWionKHw9VpUkGxXWTxTCJJKSsVQT8vAokj8gd2gTmZZCxvj4SHgHnLcW1rBKBujsz4EYnsWMH9vyqysgVLQ",
  "key14": "3Ft9fmsKiPspn3k5CWpMSFpcYfitiJczyFHbQpMr45JqVcV9TDcSXnFCqiVGZALjm8zXXtaGFs5mTag1ryX6kWEp",
  "key15": "n2TsggryRFM64N2UjWPRcj9RWpAioq3T89AhZCjAMJfuRdtJkoi877RjNTtTorSAJjrnYjMuKfLEDpuCGNxsXAj",
  "key16": "5iQ5CJ8hhEUbqjxUMbV4XbevrPpyNFgnzpPq4awrMZb8JH3DzcztNZ4ZYuvujiXA1QzLcQbgDmEcvwUjeUu3nxFP",
  "key17": "4iRnKtaBjCkh6W16K4jG5njyfm7q7hGkLY1jyG55dVYdgfXxxcLGp2ovyixdnDn1GPM3ZxPUvCTGHwwj4uJbZg3y",
  "key18": "34rHw9ntFSScB68JMkPz9faJ4pAR5LvV12Edqx3D9QpsfGNotexGZWXV9dKzXd7dkN4hLKJFJ3AtYRXZQmFdJq73",
  "key19": "7mr5JAmSxJw9XehxtCRHF4if8DBXPZgMoH1uuJbTNLjpx4QFZJpPrXN1SW52z7CSeAG7yY42TbrQYoe7eQN62fP",
  "key20": "3Xap7ErTcgrwXSQJEYwaF6VTF7JhYMHxnJTPbkxjHcNGDahbKxsU5g56Uspv3uTCi6rxopoz93r4Qvfq9eEtPyxc",
  "key21": "4YjDAyJgybHM9PSunG1pFtaxiBdZtJEszukzgqBcKKRrbShhC1RjPcczNECKDZrNMXkYd9hBLQU93nBvQqM23gZw",
  "key22": "42krEajDgGyqR3Hrp44WD5aKe3Gav1Ut8MAMewoAjSy4hMPyjAfDwEAKDGmkM5Cg6SaVmpyNsRQ3947eeDcNHBzD",
  "key23": "RdqPQk25GsnzxiMYj2fCCBN79QTGoryh8Kik9WbLTo9ShqeRdEpqKMswnbvRsabgGpxgwZUku2BhNmvsfGiGBfA",
  "key24": "4GScdQc3seNM7y1sHqf7mmWmPiTt69WyYpczsyKRtxQFd5AtSoELLcmFv4p5UoBKZt7gt55XQtue8fX6f3ifQddS",
  "key25": "2YufEkvRHmpvo9x4JvhDFzg3taWZG69noMq3C7LYC5u8DdFf96deEfTPKKjc6mtkrHYP9NGEHNCBvYFrDNhXoJPu",
  "key26": "3ZNLEXmzsvqs35sj48tW6yWLF8AYjHxsTzLvaLFwrpHzjHVW3QYK3sSAb6gELPqbkrvafZXwDPJjvYVgvdS2c2fJ",
  "key27": "3oq22tNf2MzoZwdgoteMRR4c21JFuMpt1ELgsvPZE7uCKFCP8tn6cAx6MMwFrSZWCXPpjgBvZfmGEsgki1y2ufbB",
  "key28": "4sFH2xvS55W8e4ucxo9kgQgctjM2He7TUcPGTdsvupSBha8qJai4Hu1NumZ7Ng1yKgYCzr8H7WPB97fjX6RbfuqA",
  "key29": "2ihkopesp8Xo3JTjRJfXi7HgDZyTxLfn1iLgSaAvGRDCVnvDF1bnJCFW9j22UCrb9Xy6vJsTZHrmUKVvaHZckzkM",
  "key30": "2LdigEEk4LyUnetN8LqSJBxi6mMbzmC7f9bgrHrg5FRi69LmQFKvDE5RvmAyHiu7CSY5nUKuwE6U5wwEb41Rxrny",
  "key31": "2qhGLSK2b6XzWRSV1WT5qmfxPpuRFnnpSxwg38yiHuqXsnyCH4WW4tSctkY6z7wbxNxGvNhGegmcUoCeMicCUgJK",
  "key32": "2sHM4pr7YtcKcs7R6Ezr7Fi6HJRV9fuXoNmoYyiVQe9EWuqcoxSTf5zL9vwbxVAFp6yRWNTFMRvf6hDGNPCjcYEp",
  "key33": "5rxfZ1zj5Wjjt56DH2gbLx17Brduz44VYhXu5cumEyAQSawsSDwkfjv6wbn2MjU3GfRMTEy8g5ho3NHqAjp5aicf",
  "key34": "5uv3vhoSGbWt3M65UUpFUWQnfwiyDiPzcBLrrbmaCpAKJnod6FyFeL7fk69nBJZt6QthWLDjBC5shyGQvtMEUoVn",
  "key35": "3wjYXerujqi9SjBDC6K5RfNPSFsNmTDKnw27Hpf4mMNo4um4PS91NttY78S4KXkYRKHLkPgw49CRGuUJ3acHM53B",
  "key36": "2M25sE6S7NxBFwQdoMGUZDtfcxhEmQ4P5NXqnakoczTv8wWKSTY6C2jgXJkE1ma3zipuJUzUiA9mquoefT5B31ib",
  "key37": "2kSbWFRjeEtjRUJj6qmUhKPTwocxPsrQt13Kxgh9jwc4hQvSU2LADqzVPDBRTpwNUALA6c1iPyStayepgE4V4vH7"
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
