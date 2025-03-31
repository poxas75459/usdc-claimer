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
    "2ZQ79upz7G2oVg4fZnVGkTHD1EZgZov9ubgqfBqmRzEaUaKh17TH9dubCDZ8x8pwgtS7hrMTWziiHgnjE1xbDWq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1UH1dMJmkoxFH135ZwXXFRyRX9rD2NjfdE6YDER3inbfM8HipuJzU9kgvmiGSSc2XKaKvvSTZE3MAmDFDyoLFN",
  "key1": "WrcijC5f39jLJPfHKQ699tyBobaLBmCmT58RK1rvskqG9JwFxvJf8TnUeLdyXP4v9uiQjzY51m3ZQuxmpSYLBuM",
  "key2": "4w3J4u2JFLk9vehjUqcCn2u9sWAP3S3RP1osUVjQPAs9Jn4PmbZvhTA6wXy3UgpogX51kTSe7Qs1PhTJgsNAGBAy",
  "key3": "3DG73MxMPHAtzgeMfsjsLtJxZ3oe5egsF2RVExX2W5dU6LQ9FiXxtU3Qvwms4AyyykH8poi8XLRmNyDWcRfEfnfy",
  "key4": "5rZ7igcyyjgnG9wiWVvhLJyA227drR76qnJXAU6hFdu1M2PQHgBtFj4rFmzj9tkysiKg51Y1dS8hrjWpPbevn2ce",
  "key5": "4NLy6yLQAbu8UX4vxNwZBAqur8eiQ1uissjGDmTUWVm3uPDrYXp2ivme13uTDVZaHQJ8EUik2GMTosikx7cvmY5o",
  "key6": "3Ry7oNPX5xfvL7TUA8rL81q8ETPQ2Bu2uMbi16yU2WQ8KvAzsKPGiWC4NxuzSgD4FqtU3yha9SteGR9sLsKf5HKU",
  "key7": "3kYDF5mr7PJza7DvVyMX17fFs2x86ETtdTjJufBWD6psQFPS9nK5NNPpFVF1MHVsnnumdMYcNF671W5W7VMLCsSD",
  "key8": "5nUaruEm6k5G7kgwAUYKDK2v6ZNNXit7SR1gzNPdrfqYJnkAsz3SsJaTh4zCij3hFXBqxDWNx5pts9y9dEMkv3uf",
  "key9": "oHo5J95awwXf4zrPEqsojacv15gwQD16Db5kVHM6QCsKSCHZdLYeLCLCm14zdt5fFHY11w2TjVGnfKDHMfVZnTE",
  "key10": "3AhwqAurYJpor8v6ckxbdXPJejpmUa7akQjPZMjwMvA1MNg5ND9vhMLTAfUq8AgKfeLLtxKB1RCrR6zAJkV3uZPe",
  "key11": "4N4BchyX5jjsz1zsLCBrbcgYXgDUSAEN94rvs6DGcJ8KisRUaukjQVpjjyJAAx4UzPiXER1GsLuSrGy4KwJxqMii",
  "key12": "QxcQNxChyW5GiGhxjuRtup7Y5pPfz7yLHheafpt5g9kwPqQbgYTAazJCFhu9YVWtPdCeaVMinQSo6qXiF238GU3",
  "key13": "2juxvWfuJfEiXS2wL76VYR3ddgJWHEsZqErTUge5QeFahkP64ZmirbgKGUVhUMGFA6JHEH3Jc2yg8nxXQ9LxBrMF",
  "key14": "XVczX6Ei3LGDTFEt6ZQ6JSQPtBjSmgMf2VhKpyFsuQ5C7TeCsrYNWxzH6E3TLbUXcnbrXdPfxMPkTdw2i69rZ64",
  "key15": "4VGmcd1zMJmz2QbJmnBpqZzvHXNatYDJFHazPfTBkVbdejsBKZ8SCXMA2hnMN2eSBHhzHPGY8u3gxqe89h1a1eNh",
  "key16": "oYAKwyCzJq2CShW9styqTRnEPJfWQJt4BEYKbtGSW7TmGNvqmRr2BakjZXWYa3b6wGJiRhnMpcUxju3ivkMo2s2",
  "key17": "2fVxhyJfnGvkjEEoe8YRxvTr9pzhr1QxbhpcmwoBHtwSbLRxFdqkx1cTycNa983vZtz7YyqoHVRdXtYJMjijU9e6",
  "key18": "5MNAHecGdKYYx6Qis4RtTLtw4y9W4Mqw8KqfxwGh5yChfN57jyzJiXaWdNCtim8rVySCvckUNmWgDVgkjkxzkBxa",
  "key19": "3fcZWR1JuNGhWTtAbAmPFPsH1vvygMWge2hiru3tQzyCYCrKjJXWEkoKJjZNMhuJZGf6c5W4TvpgyiYmdeRDsSGm",
  "key20": "5uaVe7PmAMngAnxX8eSWu7EiRLH46YTyopWfvbRJmYCnrBUDS8eAcdry6w2gL17muPJKjA1z7HEBS8BK7gBAn8o6",
  "key21": "63gRrCKeMKHg5ZHZhUzF1oAJRch8GvNi3azNEFgpsPk7PwEMiH6SJ2SVfZ9WLFRpTzP5Smr267TQp97PUqubnoTN",
  "key22": "5FU23HeiqRDTV1bDfnTdzaqjiseMwD7WEofuPMii7BhsyMdCmEjmbibPuQccHDMbBiqPFMpEkhb8fC2m5CJMLcj3",
  "key23": "4py3sTju1gGLgSEgThLQqRAtNozdoQbXKGd6AA71oQ84BpDhhV7AfK4BPDVPVNiTnuPRZr6DpvbuMa1QZtJYHiRX",
  "key24": "5J1BU1KiPPBrdSX3Q31S9SZLHpyfEDhnpExQqVB2snmXYo77JRgKU4nu4GtVGUcDDAwVAyfd5cVmUGxMrP2Q22FE",
  "key25": "3Yhgnd6MgvxJNp5ujQypEXyNbneGTW36RAcSKwTPxQBPvPz4LeYJQjoefWfUsPR7mqScH4Bkckd2gTKMgLWqcoHL",
  "key26": "ieFDSEeHcmmwjvnbak2F3n8tqHrzB2ouMnQgSwmyaJXLxXEt6YXb2c3njpZ7zo3e8Vk1ZK8eagGxNvNXu7EC45Y",
  "key27": "126EejNZdm6JuxfaLmLBe1M3TQVzvYZd5XYMNVi69BqN2Lkjbie5FQewdBPbVtRf1NM2U2wtcyM1bmvkTqv9YBgJ",
  "key28": "4b6r6TnBi2TftQ57fYTjazSyYmLs6Ror1zkrq4UuA8Mf3Ho1PX7MmC56LCK294uBv1M8ypu7ftTXwDVC5zGy1ELh",
  "key29": "2Lac3miexauwm1s1fpit29hAVLvSvEuJ3cKd1VKEWPJnt91iufWkXYPrLf6PdeWoTXsdCDDcCHpJ1Vwr5dxRrM9w",
  "key30": "hPeHuiT5A6AKPsqMGhKpXAaphxc8khsUxmR4R4ycT14UpNrwtRJqnU5wE644Gyd2NWHQM8U3JESc1XHJEbenVhU",
  "key31": "2Hb3bR6My7TsFWr922SCeeQey4MKHKQGwthRhq6di7qyn8mMMhQw1h27Hs2tEfQF7ap8mjX8UeL1Bqbh3WNU23zL",
  "key32": "2ruNAnwBYDfaXq8cRidQthPHx1CuiMxUrAiaV9VrMhwXi4dGQFofujye8bUiPjirpFjrzvt6ojeCmoKDFag1Ykne",
  "key33": "2qPHeDu54Gptc6Ezqrxapgzy7Y7w8ewoU4dhGmMosh5LCjxBmhFqi333eTeoQNVb1CQ7rRnxCUSg7rzJy5BxRJdp",
  "key34": "kgzFLRfwXFvQfnjop2cnqf484PGCBBg5gWjCnMqbPvF9oNWtLaXc8WfYZcNwvBu4TvS2SGDAXceS21ATMzAUzd9",
  "key35": "K6BvYb1xqnF2zyzYv6KN5Mx2WVpZFK2YGLeU2wFqVq54tGYzwYagc7bQrR2PrTGQRDiZshnHpzkz9mPzX6j2kPo",
  "key36": "5pREJbM4FFbrcgtQTrLPKM1Vdhb37BRsY2VBkXmo8RfLR1w7FQcE1X2D7hmzE74bwP4XU73Qg4p6cgvV2Ks7sGdM",
  "key37": "2ET4BsBpyWRGT6kLkVVyRL2EDUWzKHobJi2bSvpD7UUxPHxywA3PakE31nYKoST8yQntpy79FhUrZTkBAWDSS1Lx"
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
