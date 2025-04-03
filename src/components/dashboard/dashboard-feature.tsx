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
    "2hz6vubZfCKh5kY9qKj9G1QRKBmcmUS1gKY8A9eYDcotZdsW229qJxX9vhQ4Y65dgPh4pHQev12rMMxbzJe9eoVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9iC7t4jGKBPv57yi7qRwKgHm2KQe5bRgLdzMW1Jk8mWuQgjvZaD1YcQPJ5LtWgRa6zaK5nnkgCgzQQfaoCCXRR",
  "key1": "6zxM6orHosucUbtn1gDiwprkYEStJy6rHcMMgV6xLrEXRMiHQ6yB4Q4ra7TnFSQytLfNZqjswXWMLxj3rA5xbeJ",
  "key2": "56bPQinyZA2QEXYQqWEwYNbww6fWuq9md6XMWVwxQWr82FYoUCrJSU1SPW6EgiKTmsc7SdSdRSR8iBKctEnA7Nbp",
  "key3": "2LgwnzzqUuCbhPBrWPJRXVgSBJZVBVbiq6Tc3PuuWTcT89RywmKoYRxddxp8BzHmaZNTHW1GDiVEPHNQ3CFupdxp",
  "key4": "4c2G1YPyu2QRCWidxEvRrDcS8VHaLR6cZwmWGUqT91mbEj8MV3RXGkxoqUwWfG8mTYrMhCbjBuQ38StdiZtPbqvJ",
  "key5": "R2Ciq2BaZRx6UaSGexMJkpzbV8kXxRteN1NqhwPgKuSyhnW8UwoPZeTSYYacjuchhbD9pL2AZZk4BCrF2howo7i",
  "key6": "2cVbZ2rRu81ZGMh4kN4K1q1x4RwK4vsuxHW7VsH54WbtxhgRz6NceWoCqmwBo3MNyasj2cewySpVnp5T2Y8pVFki",
  "key7": "aDVLiHM4WyMx9rvtdi9EFQUJWUtm3oBtLfEcRRGFLuHCUnzxDZ3BUS1suWpRzGRNCPDTVSSW8iVjgPREm4h7fhT",
  "key8": "3qLnuQfbuJGxEWxaRBNQHycrKK97AJSnmRHUbPaYSrrbFszf961dqEkgcQvHFP4LSM6EDP4fwsoALwhDxggKj28L",
  "key9": "sMpb1DVw1WuKx1AMijzWQ9bGnetuUdo1RawELMQdrpktzNKqHXTLR3W8DqzCLvSedd4QGxQ49xFzbDqaSDFXZVr",
  "key10": "2HRYuaVTUAHkDaXGVUj49VABn8bLFvCCv6V1qok6cnErRb2YQFaXrY92Ec3udxq5hs1H4Q1XHkpRhrmtahMAF1hF",
  "key11": "jWJJNqtKSaku4Pb2LVxZT8JuDtzM9Vn4AAqsSGKDDpMXNjzoWuu6AHWy5n822u6tRj7Lua4XXSzXSMm8sQzLFxv",
  "key12": "3RtZFyJswbcCeVvKzLXU52U4PuCVVyrtZ97vHXqqWVTbKtn6qSbQQR799Lu28XKvWYu6ApSTT19hPz51R93njcvo",
  "key13": "2EzhUhYxa1hY9Rj2JSsTb2rc3omZa3Djp8Mu8MJjspC6tFfkx5FJe6yBj3xLCeu9SXUU3kaoJrhpekXUwYRraBZH",
  "key14": "3SyzYtQQW1sWz4YrJZbSscTNhMgSLz55s1w45hnZRtbM37bdVEqgADvuMNoijTghMp7PK437MhtjCcTWDHnXRYtc",
  "key15": "62rwDixsCxKAVGPDFGeuJq2ZZmMiGzm5TUH3oQZ23HuaAwmoDRjMeft1jC3rZT8Rc1YH3oVhJzEzgRKkYuL1Wj2y",
  "key16": "3EkWMVNCWPm7XKLpFVRfWU2vymyV6E5VJmi82KFnpWiUfK6xUw1U7q9DhSwoTjMBMoE2ARhs5TZtAJTBy4yWdzAK",
  "key17": "3cWPhQS8QYgvGAiW9yFGnNiE21NvB74wgKq1Ceg5aGvtVGw4xevXL2WB3vkGGdYSed7R9XTLQCreBUaUykfkfhpv",
  "key18": "29wCBPWaTsvt97Ftw7FBTFGn5UoSZnuYWnGvWsgBHc6G1AU5f2hpCA5aLcuUAFQD9hSvppQeKohhTPgsDjMUWqrb",
  "key19": "52t31E4XQQKgpQpcBeBctKndqDmoBpqZafq4T9hfS4usB5vTta97gb2vGToU51sdkinGhKsqRHiDeuE9VCGKPNkU",
  "key20": "3oqjLKTVKdmWHC1112CzitQykmkRzhSYSbwvkVMpGc4ya8JtZLEspd7J7yUU7FVkEqp9F2eRpx7HFCiqWKYDWbGT",
  "key21": "5X4wxzJFQS8Y7VQXvuPRqVj6tQTbMGpFFdwr3QzeWQWLLTUEGmEGHY26e4LWJD23tbs7gjgjHNvW7BJszaLPV86f",
  "key22": "2GTM99QL8BAWAMHDfw7aFE1VXheL1CMybHYKLa5ur38oKHmKw7Wvymn5CfyH57SypASTKxn1azR2zVxaXjA88VR3",
  "key23": "4eBH4dWcrv75SCiyux78swQjS8E99uB6o58BcR4r6BbxGEh2PxpkjegF4APTsG9Vxn6cvFqYF5jeA9nZHkud6zAC",
  "key24": "PMBYqp7pHTcU6dCmgy7XxM8HHgymjjNXmW222EKV4yPx8Cx6udUY3gV3bEQJZgfzAZ1bYweGNLUt4vzJERokVtD",
  "key25": "2gBDm4kTsiEBa3xYwNeqp3e6HwfB6jh5ENZzgsZLXeppz6K1K89owVK3iJiYuoyvGC9QZthBm3DjqSSvKkManptZ",
  "key26": "3yyvm97gurpS3JXiybRmm9JwSxTv4CpH7VnAs64eu6N89xWS7wpBdu88JDiNPn4YdvBoa1onrt9zEerfahQX6g8S",
  "key27": "4im1bMGRnUfRmtW3Ber6KapUAsU8HJRimFg2x3JoRnWA42TveBZNWZejhdtiTLswD7cCDFAhi4gHSUSSKpCUjg1C",
  "key28": "2cp91JnLUzH497YjCZFnob7f3HMv4egeQbqVA9G4JiUYMrzuUA1bqXoq5fcd5guVbHDjTC6LWZTfcoWNJLT8ZYe6",
  "key29": "mxFJLxK2Lx5N3vfdsFQU95iakXBLfjT2SaSFGMH7nNnBiivoQAwzabDNNoZsab5fpvEuEteAb8r9Lw2AXRubgy4",
  "key30": "4A6wG1NizdJn28Nt9rX11gV3a2gTpDPZbbaVVvf2ij7eDHHqCyFMbehZukuMcL1UGe7kL3CWM2BDbQb1N7shXEQd",
  "key31": "53qFLrDHjkewLdupcykhn8LU4a5EhEsu43xZLP5PZCTxeihBLCspwpugRTBPy3oiMQmD4xUZfjaQwhdLzh7Rpc9Z",
  "key32": "RfNif79M74nQL4ACUubLpkiRX3J889yMJgdyZYBhXcKG3J1EPXcKe9bewdscgDYFH1NYej5RzJpHEoJrxMkq4NY"
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
