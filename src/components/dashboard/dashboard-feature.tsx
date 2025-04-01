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
    "5wc4FHf19H8hWjk48XkiZwwYJeaxKos7RgkBN4vD7zmnn2XWqLbpBetwGYTfkmLNZ5R7gMBy4jvSBfD82C6ieM7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65czKJ3L3VXxxfBb5UZQNEEpjrncrHs6uKigLUhN9yYSCmu2ptokaJujCaWHfpcij4MrFvKpK5rrSGzNZzPZd9QS",
  "key1": "5KQ5s9vNsycHDLXcNTfFPdZHtLp9kLAnN2yjHJVgSmxXe5Ff5HN9Xz7b5FGFPqss942n5xELMtcQm2LTN91w4F76",
  "key2": "3UYGfP9dYYsYVPESuWdhdEzAkVtinQoZVSXXXeN8iGJpvYc793SWqZ4g6tLQe2UbQp2sGZEFfWtMUc85fBNwjTLB",
  "key3": "vJvgnWHLJ2M5hmS8KxuGBhQSeUwLXFKfBHD3b5yArT9Nzeo9dww7XicNNMX792hZbeqnALzjb2kkJ5QXjZbnhkJ",
  "key4": "3ftjkbMzcwToVPNDo8jrXgdnveMWarpv88rP6jRoMEHHPY2VhheqUeaJvgArKir3ZGPPTPC4r7DJtqjZFrjk6vfL",
  "key5": "2eqyDvybw5wWVQYbkpmGcTZE5FoavsTqSqTVyuteB6nKdx3iUonbsgsN6QimHFppDgnaJ1Gd1zsWNVa3G2vwfsfn",
  "key6": "2SsuBiwXWtsKvGu6pqZbYwXEuJugCzspNQ2ZkkvzcdrLph1tsrpUfmG7dSheuxWcX4UdEyFWQz9vv6eFo9yA2xVm",
  "key7": "2akG38UhjRrkk2DQZqTXkmdLWTguxxyEVcmGiXsRLcvqJJX6j8YeFgYSHFfsrqbqBkg6T6jqCoKEMexvQQndbuwS",
  "key8": "3GjZ8hRG3JTqmgmSsrgqnHqyfn7WMF8auvZkc4vrngoDPumkMt8n3wkECYmiwAaf3xYssbT9oLdaLtXaLdsfDnRn",
  "key9": "4t8cjduSq3oTtjMQHZ2NLBywPuR3vRf7EbTdV4vzW6Ezw9KgXN2ZmFkDYVuv63fZzoF6ghKRVQqjaGMcXkMLWEJH",
  "key10": "3zibf18bHPUUiagwecab9MRudAHQyKvQGNhNJgQWWbcGEhDrRWtY9C56gfsVdQssQXN5RXUCndChoQ8QKzc4wAi3",
  "key11": "crWhgCeyUSKc6z4tGKmZBbAwvWgW4yJagLdmFDuxPf5zvvfeMZ87wV2TzWMYxL854TXtFzikSiGnJ92f689dmLN",
  "key12": "54HcHfsCqLt6tfUeVNdehf4vPQwoEDnBoMQ8SWbPpuuM7Dcyder9dVfsJnAQQE63kZbYRLLhDydjMx8ajsJLdQ9c",
  "key13": "ibsE1mSDFdCUWeFJDGiNNU2evNSAWqwMYB9J6Lvc6aGyXVaZe7TsNkhdnHNWDqsTZ9YchwTyxuyHrGiKC7e3atQ",
  "key14": "4nag9xHyABPzEij9CQw36JuMSWkCx6siHRdWRNQz34awJv97WgbQc1ifWf1HMp1kx8ZLDMrUSa1WoB2YpmZmznm8",
  "key15": "TJHh5QPPuV6mmWQfTV9nmEpvHuFKtcPuA4YtbJPBcsrhcT9otVgFj2CeDNn6MEvJubkoVg8zQ8vsr4BcB7cP9nS",
  "key16": "4XbLnoFnjmemp8JdMGnWDbsZdnnk6VEEPn3dnaNpTerPn1Z3EiGoa6cC5oxLH1iFx34aJbsf9hQjmwjfMaLiajRN",
  "key17": "S4RgM9K1C3btVxtv66GM53nNSAkS4BfhPKs7TGsSwQVEF9E31i3gm9xHL7SXBLvxm6p39BbqVpjHGQZ4QUDecJP",
  "key18": "4pWnhj7CYiaVcxMH8djoEh9jy7r2cx7ixtnvUyTwJvJPi5sovi21kN5m1x6dXNYsqQHTzDfCz9j5hhic9YgjW3bQ",
  "key19": "2X638WtdfpRof8nPmnfG15oMxUADLXA2knCnb3wW5a2FiGxkmmwtsKQwF5puySVLaMrz7HEkdDfLEmSAdP3ctQed",
  "key20": "aAVnqUdADBqG7o2DzSV1AnJKoH4ctL1Du4VDiQWtxuUvq55i6Dvv8C8N8Wj1Wges5eVrNwnFDAcE2zyCFSsfvEf",
  "key21": "2hXHjYJz3ezpWUufD7rFxg4AkaPibB4ST9WgMzDK7Hp23n2ifHnimbDmx4MePowAnS7pVqZemwGbd3TX7a3RVoyf",
  "key22": "4cFjoC2wXJvz6HBudMqNMDzoAP1HV3uZBFBp1rWP3SwLLYcYS8QKUrPPTCDWGwdGCUQBQd8FvSqwEgMNriGz1p7L",
  "key23": "4ZiRYaen9bZKGxb8ZxT2kN9TuUPybAFKjpJwFGt5QdRz5z7WDczqws7nkZoCpMZjn2sojGU7dqLJgTxPn8EEt6iC",
  "key24": "29EqzpLiTiUpRukPZwQDsFWCTTfgBvjBGq4TwYq2zehJpLHNEFJoLNK4aiLdcf71LdZJ3cyNPeYkuzpNcbStXcoa",
  "key25": "4VvpNW27zFxNxbAfc8DePBGfJCbDeZaNrYFV2STiwbuZcg23e7m6ynjrxzxEUs2cZRDNdFoPRasySJhGBBniEKB1",
  "key26": "ZPDRnxBpMDPUcx1E6QCP6Wsbgx958MGnsG79d72JxD3xhAAWHVqrCkAgbp4JqDzhv5dxC5MaiTJNrfsQcVjkxeu",
  "key27": "3pwAJKtL3g8qfu4VWuohufXnHEVtKUW2mStVL6qqhXo9MezjfmTBBvSVHLjBvvpt7CH5DonP9bXTjPesiHXW2rjL",
  "key28": "59jfby4JymTKBFNu7sgqJwgnRgd9UdebygjLhWNbtY6o2WCJy3QBiVEStQVUp1m7LYGV7ykGcQBtMuoZPwyT4VUU",
  "key29": "3QxDuVGJtLtz82ApmU43rGmnghf4LaHajVYwTP47mLevnRUDTcMnmYZypXpZxQ32pRE1kUw82ewDPYWbmpsgQYeY",
  "key30": "4sbw6JUBMeJ81SzgdG3rMeuibSWsNXyo8i5gUCqrEYv2QRbEgcqZkAyi8g64sewpZXp8UT9xPt8VBgQknSAQXEaP",
  "key31": "3mAAfSbpByT54BVRjkAhFfTiLMrbxFN9bdVQQuqhE3yG149iRkidz9ayqiqrchPswkmF4Vna6BVakvxG4CTVLvQA",
  "key32": "3XNUqLFUjM593eFWmsnoComGqyR5bkqHe4p7p7eZgsfVTtnWVFgB4yPZJjdCQoNLeuBZEry6VQKFG2EgnRsBzRuk",
  "key33": "3oRFx9nrfaraikFuPyEMkCj1LcqSwHmgZHMPRDDnET8mYugeiJJm7Pev6QyTCMPo59iLidbgpgbCd9Fm5marGncV",
  "key34": "5AKfsVSneFQtLbuuMfHVM931ycz1bXNmecc94pMvKb94abgia7sDKhDNyQxgWdXoZMtNgR3rtWjP7CfGBeFmxK1R",
  "key35": "mdfPnzE1Ac3e8RfsuM6dPzKaeAqynnopnLXNxAvAYa7yfLwU5f6cEBXWTQM15Uk6H9YVqq1emmYfg2df3LUqpem",
  "key36": "2e9B6fe3mjHavtUz1p5fN6oaU59fvKqrefaHojKp2TeLxnCcd8mgCUKTDh3hqj2gh9P7qQsKrmGVyFfdY2CBY8yx"
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
