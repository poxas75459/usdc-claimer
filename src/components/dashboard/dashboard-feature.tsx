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
    "5S33mDwGhtQLCGjJdxgNGx3i4vUYDr675eR8FZ5oWEKAG1AwyBLJWN2SraX3XKFwbW7K8LoDCXBn9P8i45RfFcpo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6pd2UQgrNpkcSQntAxR2UtNTB2mrb8Wpcg2Q1WiPcuEHNDC1mQX3kCbN2k25ZJiU2GobM6oLYDiBTU6QBE3bRd3",
  "key1": "2BqCUjJanrAPnzsEq2BLRcJnG2KaksH8wbZvrURMzGyHfUAXYA5hhD4UZJEjGLivvCfCNGRkHo3CJFTS6o7L1WVS",
  "key2": "52ARu4HT3Rs7M2VptGvpUtakKFn1GwEcbHvGbKENkgpqCL1G8ZYXLz4LFfPx8YfshhZURfcpD9FrboS9qaCcyMFr",
  "key3": "3uUkc6PgPKf2bcspemW1jHJUwFRX6UCKauh9eRH5kVPuWCRPH4VdeLdDAbxY8aEEzqtD8YLv5iHmx7aRpTNwsgKa",
  "key4": "t1dMi1M2GvjTMNmSo35vKwN3SynFMzXRa1JajqDYwHL2g95QSJC2R2UiEcoxjJJv6RF1gay9pM9RzxX8BA4iS2Z",
  "key5": "42ExNvZRXRnn5qD1hxXjbqb6LBYnmF2dhx49f9vLLz5MTBPNQ2eo1vnDRdDwLmDY6FkFty7DjZBUMhJeejHainMa",
  "key6": "4N5Fp5XKgEW1pi9cJwzNYJcQvBJS4niMwEgMQoCSASrVxAPyJGQdxbt519hxsbgPT2cCM7nTY6TVzjZ6ZyW6dxjS",
  "key7": "2vWyZEWTs8btbQRUNFd7kQtHJ3D3VmDTkAi8r2CYp1cCuz2QG5BEzBPLaUpeu7pu8VjNuq4PhDmWNbDS3ieRw65L",
  "key8": "zypZHhUtDqYhKqMTbqyS5qx7GXNvB8gF2nERXLUp9xV8rSQoAXRYz5wAcoZ9esreEAkDkCBom4pR6WgEUBpGSWC",
  "key9": "4AYryY8v9onVHpSFNENZjKWica1t5dJGRbLJTcVhHpd8tFzE2CfHihmtMjkrvwggNzNabMUR4XvmP3qyKko1LnhK",
  "key10": "3dEZY2DYWNevuvozRVSRqUUr95aJ7dGEoEqc6zUHCMRAEudP3ehxR53FLyrEpwMdSoqB7wuhKCUXuPqSPHvHqo3c",
  "key11": "333AarZaA2b3PxFMHUHeLTiMBd86GNDonwwVdj2TfEzrxnys64VwRzZWPUxkVkGKNM76jtDwvqHw7DBxY1FJzDL3",
  "key12": "5KwxKASWW1pnKGCPRNoT8vkXpjz6QqgfkQV95N6vvhwkky4YpPx7ZyPzZ9tjazqxKBbZkso2RZauHjk5qR2wn97c",
  "key13": "9eumuyqCEgo26FznVwhP9gfC1mks3eJD1iyLLNrUHFrtendjbmzVvZzsuKfJz4gjQ6Y4FcRq2MrrQ7SQHQ7KXxb",
  "key14": "3ta2FyENDyjFetWX2uxikFMeJ2c64JWM9n5rCQSPsGLwEJkZDhxGaT38ZsxaEiZzPuPamjpaxABKmYrBdx35f8sT",
  "key15": "WuBo3g1VjUjppTFmM6876PQndyv9jDcTzaJkkCWRxJ91EtpTv6eJvnCAJsdxKiBcm4wFUW9h7TQd4SypriHaG16",
  "key16": "5XmQ4pPyaio4hsBaj9twzi1WYm1nQj3eDQFanKRuyKmeEDB9qeitonLvcMyZioC1uknVHj3WgWFyiyuQueDGYPs5",
  "key17": "2d73cWLjpoNbuLfXW69VJ2TFeyn1gAmjFY2H2nAZeU7JEEM1rLpvGZpM66Rn1QV23pciEwph1Td3c8PUXvW6jMEk",
  "key18": "4ecmKsXUnTy28ZXjhnZVEdRuPyJqjRLVGAVYLh58mgDt3gsaxr7adPPdpwfmKYkhvL4sfoXNoYnivnKZtMkyCL4C",
  "key19": "4MYAAhjBx9jUKqNMXEFcATbpDoQNtM5UHrATrAfT3cMmZTkomqbYLQTFVT1cNrawZiHMrRk2gUgxvnTUpQEJftsq",
  "key20": "3rgCu9LohEsBvb6AR334kdz6h5tNHsrBadY21CBMc5PpyKRXCgg4MYum4ymo9KRmjXvgCtpZzQmBBh193hpKHLvr",
  "key21": "2NSBa3614y5wpZs8chfm56uCAf3fv1WxTUiaQvryWmudAr2AVq5aVaT1hq4uCxRSRcc52RBSYBZh4JTUaCwrQP5M",
  "key22": "2XSVJAD9kFz5S2T39ULz8Gf6ngVmuy73JL9cSQXGJ1eENqLaQvNkYXeGXuapXo2or13GCPJJRzpttTse1Yk5WGQt",
  "key23": "2F9rWJLcbXsSa1TASBA8CiVUdFpnrLe1NggneERD37si73cidKwC5So3dMnVaLJaq2q3WLbX2vFCL268boN18R44",
  "key24": "3SBh8t3zhgjHt4Nk8ZvQP2zEUm62yazExnnRtos7aDKWLFRutb91FRP4WMf9VaMfKyNU3SzFQ2Qjk61dDRcJojJ9",
  "key25": "d8BNB2EDkUoCbL9vQtP4K1M5a6cqe6C8cTa5vGBfRhLptSx1V1T94t9qE5Cd9MqwfqAqJTwzGw6m5HVDh32nfw2",
  "key26": "5gsdhHPz6hyeQP9atMoKjjzDL3YqH167D6LbPGtnNsd6xs9uVhTKYJFyRZd5y9reBfZfNdDzoFHG6U2h2f99cFzN",
  "key27": "45oUoAkpiJqrSxAYtU3GH5vMnCa2WfxYXzmSWgDHQbayPrExJXH8e7Yz4hjpdjWzCXJJqoLA5qr3yXUD7153cxy9",
  "key28": "4BtUKPR8Z338iWTPjjtsuzedKjqhJQXyVDdB3WhXcErPpGeC4fVFJwrThqkMZrJhMqCAPyz5LrD6PDnPMhU4xbwf",
  "key29": "2GrF1a5xaabU1wVYVWPPFd6TJGq9ShW5SaYtDpc89b9eh2gPriqz1s8bThJ6WqjansuhpRdDzqGwGRx7iGBVrJGt",
  "key30": "NiJhf7kzf229phzBrQvkHwk1f3v6cBFqZtvTRqNjTF1R8qfk7r9YS7EBnvKUr4MZ2WENpyvRMhLdAa7RXNGr4vm",
  "key31": "2vD8fnTGNShy6VvpChtxHWX4o8TyvoiaE1FhF6KC9GUg6uE97aGcrZC4ai5yJffGXSJdXJLvYcpg81NjH76YgRaF",
  "key32": "bdr791veX3Nu214jqgDLk43FEHYaQHSpFdif7f9y6MtUbg2nVRs2yuaVwagmzugBESDWdwYpzZnCdTS6bUjbsLe",
  "key33": "2UapgxMNpUubZiRkGkB4wK58z25Y1ZdG3gQ7uSgHCMS4yhXmuiYDqTHV6GHX8XoMLbXsndKKGFFKU1U7osjYoUtq",
  "key34": "5qRpqPQmomgmC7zmxJ5pkAcyLbBeAHgLT9ErusUq1NCb1Rv2BHfD6uYXu9K7hdqbHUfvEBPYFjLSZSrbaUSk1sYT"
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
