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
    "2aD9Vu13hjAwGQNPcvy2eT3EwSSHCaWwRNFfgPVCE2k6Zck8A65TqBfxaSXuJmgWtJct4SxH8cMdYEyCkQSsddof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdL7axSEyCJwdHRh9Nh2ansvAK8XvxX6KogvkECBc6epap1f7vXKAUNY6KxjYjR4FA9999QzeEFvWtnWP8VJ85h",
  "key1": "41JstE2nL4k4ugQosQFv8cpT9RFZWmjSP1cD7RTsEUw7YWCahdamKBKwicbmZKuHV8wkf3K6M1eo8QRC7oj9gtdq",
  "key2": "4txjXXJcExmUENGgKAg9rvbJcLZ59kpiKm91524pjNCDv6epRLEgZ82uHtg8VMEg4sfpuocy3DveLzXVVNkD3UNS",
  "key3": "2rmpxf3ryH7nTMFdzeSMxE8C6ytQvRJSAAD7xYGoZ4mEaxp2h9AFWM7e7eWip4Sxyxi6YAj2KdaH3M5m5Mu3n9HN",
  "key4": "5niE76wVvfiw5sb7rW9jK7JbPgvgDxiLyRmbmD89Nn2V1CJU86NArZXtLCYcMbcXQ7q4VNaEJycdHm56MWNooC2b",
  "key5": "54HoQVqzqFLMeLH57uAnvmCmrfR5xGnKzbwmV87DvBGEA8R2MuRr9awa6RZgKgqXBkuCiTb3X8NjzDVgJm7ddAZ5",
  "key6": "3oy3j6KGtnYMyBtXZ9tB7vKp29TZtaDFdZZ1ug9U3yWja1MjjypXHXJpwzDvsE1GGakUDSfBUhwn62sDuTpMatfa",
  "key7": "66mYeyMUfrfj5Sob3QEyHX2Sm3ueQkqmKx5ytChDc9GKnvHDPHWYy9D7F4fk92RjY3RyQEjsawM4vWDGzg1eRgNr",
  "key8": "gc7oKFLEFQbed8xgaKURmPhbA3gmHi6bF6prWk4Bd64PynhovWk3PsxVx4rHfRG1azSa7gBujqLjPbdqQbSJ9DG",
  "key9": "3hEsrmhXQ3XWLhHKgo9YMrVJjjAJdpaTYm6iW9TgNamQm9JYYiYtCncbBoMM62tt1f7d4i6jitkytVh9ZQ3i8juf",
  "key10": "4qVW6ueWWZxQsQj2NcC1XZ28Y5TUkH45BHeEtsaTfwpHxPbRkspM68Fj61P5MUmBnKc1RSBVnZg4658fA5cXFJNp",
  "key11": "7gZoqkvwBHiyFVT9oTx4G6G96gsPC3awYFDsCFSgrwrioDhK3hzEz2kdum2fyF6znjqHezeDLvXBuGZMLdBrk4Q",
  "key12": "4BtxrjZcpiVFSWtTGtzmyTpi67ukJVyxbBYGpJzy97V8uaJj4nhF7nR8BXxTKZfQrFK4vgqz6NAP2dbjgSUGaDEy",
  "key13": "xmFoxKtCdnLWMRsCvfAgnsi6HwiaNErheda8MVKrCpATLUuzfbAEpxvmjZB9LZKX9dWxPtWMeaDVtQUbHRhucQd",
  "key14": "2tJUn2ScRcg3FJCyE533sCygRXMfcksHK9GaygjUjN4YFGZ1B4VwPKf6UnCd8WbXu7CqBxhuYZPvUBJ4VmDBF67t",
  "key15": "2CfYzB2Q9h79icL1SC9K9bajVQsEBgNDXNEbVU6KTLf3AkyuSJ9QwhZJsrnL5uHf9pahAGemNbpdWmKY1bkbDys6",
  "key16": "4dnxyUUhx91n1Dg8Fjc3iFjS4UraPPsQMjJ6fKBRPru6n464BkF4HeeZPU7V6RBxKqi1dGtvFB65uWDTaxnQuFpH",
  "key17": "4Gymou5oQAeZBiE9N9upSzHWgPzN8g8brkwZBprYdkQLaiT1Jxqh3cgNmy3FebQzPw84UFgawcButRXuYMENg6wH",
  "key18": "34tSW2ny1zgunu5zxWyBppBafju7o7SbWBzx5sUuzNepMdDM2RiRK9P3T57h1WR7jMwTJtWkXhyjfi68TXwPPyut",
  "key19": "381vU3vaKFEeoQUDFSkubuqssdyjUhyXN3rZRRN4CUP49N1HdkDYz77jaUEZXvnshWv8ket7ihRv3CNKHh1aUZFq",
  "key20": "2YsteUZTGSBAMLNpxA5KUHaGESKrfrEYAZPduEyWYiUZViB3wWtMbuHWbgqrazEJxESVdYgf5Sm4AQFowrBJneBF",
  "key21": "2j11DBXdun1QNJgYRGNfp5uoywUEcXHoHHs7Aa13kwY61fsLJuzrhZRiAnumZBfDj1SdNwXYxzK7x6wEBZ5i6u8r",
  "key22": "5dsneqjEVxnC6RMnsKbzwq74uHQbswBkpGnwsdbcj9MDb4FQKWwmcda9ffGJ8ZE6hQFcyxnrS2ub7d3qqVjFSXgD",
  "key23": "4PrGQ3igYm3V41tyKLGApVBYTSfV8ed7fFMCzju1hSabApUTuUqrcGLCbUXfjx3SjthBvYKeAXVaHZHznp4xpRyY",
  "key24": "5oi6Ks91gJLGMXS6W6jUSvFTDQjrYRWT7WgRR3EujcAQSWzNFDqgKgKpcaTD2ExyqvyEjYXtm3ZtunSGWdthDfPi",
  "key25": "gbSstbeB6HQniudWSgY2o9nVcK8H8QvgnshXT36nkBEtDnLpARhzYoTKhTxtkC5yC74vxXUgrXcXw5KrtaKqbya",
  "key26": "5JR2q8gn5Y1NhT1gFtYqQwdbjXyrEvaPysTq6hxcn4RUvoqbeZUwVQkCKnTopfh2sEx8SmbndcM3YfKYYx1oME5B",
  "key27": "4qetpM67TAN6n6wg9BqYMJ6oicThkWGykeNQvR3AsQoqZcxTYjpYXbeu7URoLype22LgcMGGdcdq3qhfiCZd1cDD",
  "key28": "3ATEQncbK2MNHaan97nczW87RvSGGYoJqw6wFhTWiLrWzDjxwrDe5Yq5mSfv3ykxA9xHNuSN4fPD2VcZXhdxEPvQ",
  "key29": "5sWG6sUSg8yasrA7HP7ja5vuVN6GbeRUdDP7uMK6W4YaYEVDy5RFAejctCQfuiRhZBi3ny3VZ3UZFB54tbW163Rs",
  "key30": "dF7Lq8NPjKHDGZRGyAVuN6cevpit2uudKQpx3osmyoV4XivcJbAQ8jALArxJ7C6WBq2vaNYQCNjwYgNiVNsyu8c",
  "key31": "62VxnBsYfirE2pbxmvauGiXpCugYk6JcxU7VCDaG6QVxHcbxjSmMLvvb7zkbg4uBT8ZgwqhF7QF2AtUU4CgC7tL5",
  "key32": "56kVVqCTYBC9nA2XjiShzmSbH2hC65gEZbu752by8QsT3xQLsLg4y1kLL8Hn77umJwBbbCS6yopzczdLWzi4koJp",
  "key33": "3feVUx9JrJRza1HHJriLn8MoVv8cMxWwz8UYDDU8rom3Q3NBCf3rtT72N9vLBdZ3TZZNRmPbnPFbcqwPcRmRrjLo",
  "key34": "3wRpuDQbqVzcksCLBcuZaL6ApfQSW5hVcPRQmzn915s53M5bGkVvqk1rrc1pYipFMSuxhQdz9xYDNFMo38k2vwn8",
  "key35": "dwxmMCrCuRsFSWRsC79KBp2ps96R6wx3NEbpyF2X5MrPiexzEPf8aBd19YMzFaUARAXpirEMtZUHnfAXqNd598P",
  "key36": "PTXpGuJd1xUxqYuxGb3wMs4kCVqdp4kiS7roFRjg9qhxnYuKComa84YGBi6kMKfhAmkwSnWMqqrmJajCimFBVo6",
  "key37": "2hjQM9a6Sr6VLwiZk94WAcNHhVeYnSmdcf5kCy9sUqzttQFw9rfjVbPnmrTM6CUwbaUe5ck1Wq1TDX4KzTC3GiN4",
  "key38": "2Lhs9RTNc2atXX8Nnwpb31yjX5jNSJ3UuSXp7BfZzgV8GRwfBfhYGmKKmdcwctXuNWQA28KAJJQjU2nLBiSPuLub",
  "key39": "3JbNzFoiY7tmXF1YSD4aaBgpkMKed5LoJgpa4hbMwbrUdaKukBr9YyGrFmUqhAi2mj17CZpaMN6hszUrvse9fD4i"
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
