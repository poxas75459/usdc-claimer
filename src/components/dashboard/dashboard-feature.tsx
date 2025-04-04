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
    "gggXjGHtF7jrURPJvd2Mr8Y25d35qwZXaPX3Hidd5dCAXnYdtU3ZTXJZTeyNyv58hehs971agf3ViJ7ZSZJidEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzvryqycqryZSCjD1iPwjNjZPnpajwssJmM5GL753j1cEps3eHqopgR7GeNVPW7qvBVFvqyDd3SiJqmhQZhbhzs",
  "key1": "4cfT3FvP3kVNgDAEHGKKm9PYm8zgXWsB1dzMxCnEmKGNVMyGULpGsF2WAy2MuCDcFu78bpTe9nDeHE138zeQY8qC",
  "key2": "Uqgam9KXWrFQe6adQ3Ld42sL7Nx4hMzdbRbDAzkQTyu7675q5CUEdJThgeC65h4WMhVXtbEnrFYqYWrj9PDouyu",
  "key3": "3R4ADqMiNVUngw5F6dsCNP1MYJNXhuArUVz7KiXLtvFJaRxHE9hLE4bshfmnyxQW8uRdj8LXUNt6w56yP3KYbvs7",
  "key4": "3cUia5BQMkjkaKJRZpM69huvZHy1Y1BHrj3859hampKiW9Gxvbf84uaG4BRvNbrm3moB5nUB218JdKZdwZRtgedW",
  "key5": "2wNJ8Qo4QJxPng8BUmCqB8DUZszv3dS49xkquaE6U7vesCsvpjvM4KRTxBJofjcFCrv85iuEm3nhi5syXEUi2wmB",
  "key6": "4aGkqHRKi1aAaMeHV1JkYGjAePjt6yRujtkBt3P5iUC8SzCWFctDWYnRgV81nDyHDcZ31rwZXQBRtncHxPG5a96p",
  "key7": "536u2rD3gzeY3HEmuNwA9rARptNHtdZYkvfjkFgGLFzUoTmgDjqVuNRjdFVE3DfQ5dmXEhj1reQpPpcLrJvLFU43",
  "key8": "3eFh7CL1ZWDfzEizvLaXLfpKqEqYbNzJtS1BEphx44eibyV9UrFT9xhyF6zbfTquFduRtoyiofRcwYwSdekP7i4u",
  "key9": "41kQHUNweRm3mbnEJBxFTB21vu93NnhArDAcmg9yruhrkeyKcwpJ6CrBWzV2Gw8V6oT8CiPr134e7qzHHGbdxxgp",
  "key10": "5xpncs2T4Jz7Q2q741MgQkXaRC6ygKREQdGuK1JBKyx7cUFM19QjcPn8xwiXrobKpp4eCn69L6deJNp7sTk4sFKH",
  "key11": "2f8cikwG5N8r1qGMvsMTFwtzP4MgS8WZ5Go4ALLvcdJBWhTC7MVzpTZdVqtkG29CcESYKYuY2WkAutkFPWSHipsF",
  "key12": "sUbj2xzezufST8mW5PyqEKoHEQWwMi4DqHpuo9uauZY15K5W1UsTynep6xM4EUtc2tLKP6R6eW8u6XqTKy7RStw",
  "key13": "2fYsdoWdUvNukEWishaYSD9PsyoJPwRyD9GuaaEC4c2KafQe6w66YDCTPz2nouPJBMrdgGtW3nNDi2aypykVTfaX",
  "key14": "2HLtm8x4JgUucgXwxoW48y7AeGCZMpwoTKnjFTkP27BmL731NfiD48hXHhbggjuu8brnNJbqhHph6j7YM9QchVtr",
  "key15": "2JRvNPg7b9VUK4wcoQofcP87qtZ1yLMFV5K1791N2U7JrJZ5peTkbQfdjDpMJLW8iUFRYAyxgBNj9UeWMVwiMDUc",
  "key16": "4PXoxjbSRXB2p5HXFJmzoaxqrrf5Yk79LD8DLzWy2zo1y66VieJVVmoj14gNv88sVUZDcPFG7F8wkrdpsvXE3ovA",
  "key17": "2NRF5nqET4UUrZsfWRVEa5NDYbtKDoDj95sRUuDUK8nqEQKbE86AQSA2urLicX9M2N7kGrw7Ue5Nq4hhY6sqsun",
  "key18": "4cQJtbsFbgz814wtPdiwrhJiV6BRWorgsRB5LD5UGUT9N2QFB6UEYmp8JuE1V4nGPJLSQk3DAQspgzUd9yUMKCRq",
  "key19": "WhevZ2qire2DeCovMD8jEGxFFKrozY76qunAW86iYJs1nX7571V4xyVRhchUxfjQYZo1Z3jK4VBPH1pNKtL9K54",
  "key20": "36byLKXdsKeoStdDcTKNDDwLHYmSAz8iTWkUrZzmf137cWydhw7HAX14WrWQaGL58GKsppdtccLhgjcYTMbicbmm",
  "key21": "3eyHw8CmFnvb14aiZZa9dz5miZj3jyVjquwDAKmHC6n4ZBTNDijdcVeYTH8fKbG9JMspDQ4DT1CT5bSPo49RVVGS",
  "key22": "4MmD44u26bKjxUehEH8DjJDiSdamya75fKiVZvjmeY4bjdZ9sTkx1QMmPBNhrUgDL7J9McVnekPYub6aLzLGBYgg",
  "key23": "2AHfLdwi97PE4ERdnkmAhf6XWriNJ1pXKSskFZUqMnAvotMbJaR7g5tHCYjfwkkZiZePqPH85YTefxfw6HQqR8QL",
  "key24": "5NspeucvFh7eU5bEGtWy1vXcYtB7s4sBhXnHVYSwvwykXDdcsxmZWFUByJ9moVJA33fJWZ4SSQ1qTUxWBvgrnDUy",
  "key25": "E3jUC8QCRjAWpyUFSFAgBDX8C292DzGRoLvdgF2CE6bqnoH8hXB1qGz5yubR1yAPySzzGwX2bh8KiPMPEGvtZGu",
  "key26": "4T6akVbaqpScDKg3HL4XYMcmvbnRTkvqfZFwcd4PBm3KFV3ueFHWB7FaqsGNnYYgcNpAampxHnnPGMV9vBMtURPS",
  "key27": "rKAk4tU6ZzWURBVekusDr1pp2qy4txczAP9zVCd8Ky4wXmfhpHSjZaGkTi2BLXYAgdjCuASYZ4zT4TnSkE58Fhg",
  "key28": "4DGziQVbNFwFPVQTg5jvVowYjY9znvBhYRAL38iFYe87wsBsqmTCH5Pie49QG1S8SnXYFSDKnWiyG79iSQx1jTd7",
  "key29": "5Yk96wBn2QMgj8LSxxfrHEPvqAqDJ3fgscZAmLoRk2mJyCMgc1thQM1qfs8T4hb1q6hHMCzxetfU5KgTzZCJvQqH",
  "key30": "4Y9QiPhuX4i1pdM5QqerGhpDty9ZJFqjYrvPxyQTqb2wNS6V3dUy2cNP57LM5JzNhs6qPTnronc22QCQpteCpjWw",
  "key31": "jcqUuM6LrCvJy51ASo5bj82mtTR3mM3LRNpyEvehoPzmEy8Qd6LLtJ6Z85qwfsvJQ9xotjTdzhmNEkjx3bWS8Fi",
  "key32": "5YSq17Jx4XYpsLd6HSn6ZeCLC4CBU5fa24L9BvttyemtWXyV58hFKNpeemPBhMuwWd3kYEFFffoW6KDg1nkQMsuM",
  "key33": "61SRjPG8vZSSX2LmDnzfAkFaifaQKmiCq1Ttf8Yx6KUEoW68anHHDdwP5x4KiUHjBXSNaRaAZgwQBYTmyWMxLjuw",
  "key34": "2kDiybYAeRGZFHDpggB7BSQchWQgrpY8Y1Zy1LpvkPEkrz9TQb38xcCuFLDTS8uRpksNPCLwmK4a7YUQYHT7fxWC",
  "key35": "DMX8MJEiNHU2MsfSigTBeYcvrMntiUTrLjA3kYtBb1J61v9FKAhrKFPPuEVc5QUZqDWDMfpBs3AvhDCCGwPdeHV",
  "key36": "iJpxcA6WFM9riKu2BpoxrNLS8tPduTMx8JqgQSXFnGcX3KotzXKnPSyXihTWPEixFtDFH7uWW2SQevVPL1AUjLt",
  "key37": "pfw5NcY8cakDWh5edTZqPLkCvk9GzVN89RFWLB5LDZ5CrYQr5PvLJrPk2fJv246Uta85ZPkMELPdeiVDzignnLZ",
  "key38": "4RZ3tP1k4NTkGLqpy4Vc7s3kxi2iadPjDox84ZmifhZhvQVWhCBJJdZZJ9PrzL5qRpbGhuB252X1ZmB3e3J1w9TE",
  "key39": "5ao5UKEJDAQKDpiez1s9kXWTj4UjBY1Gm2A5A51ZziXCRudePuXxGCFnF5jQiL9d6USo4zW6BvnQU3DU3K8Fx1Es",
  "key40": "4kbKErBn5ucEXvWy5BDY8HfRibYQRtY5vUG55fHmZmbyDRfBypVqtixK946swMCLPgRNRoUzHCN4KRYuWTSbq7LP",
  "key41": "qRd8o5nxKSt3fNoAgcKY6ttZL9qbuvbx3kZ2xUQW4ws1ZVfZcKdRvY3HjLqNev7wCXam5nXF5aS3hYd3gLUk6q3",
  "key42": "2DacwaoJxt24xtfsf3ZFCVbrbDSnRhaP2CiNK5WhJ7i4PvUt5MC1UzZ5DU683bKnZrr2oqZSb1mYYQBaRHoznKXB",
  "key43": "2kidyr2iF2ezGAcuRxutaju7WoaFGUWcFBri1pSWdhSuNUhw4TQmUAr4iGSwGp17QsGx5TC15VNSR6krmDBubyED"
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
