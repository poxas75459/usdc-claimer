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
    "2NRDZvJCcWQ2D4WohFZEzNvu8vmm7ab62UDYmG2aSVuZJcELoKkx739XLJcufhcTar1kGe9zv1SKErte6xWqZa8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GA1C67nBQ8yH87pdA9cEKnMdBBqoCBtdGWzfBwYsNptEymDuwobyoimpk1rXL1dzLj9NfFmuQLqgNUhL258z9mB",
  "key1": "5uMU8iEVVysPpbnSqG1xqYJim1Ueri6DMMiHbyFo1E4D2uM8mSki6nXTBav3SxjABxsn3jxMQ1BqPnpBcpw1ye8x",
  "key2": "5TZozE5FRGGt6cXqoPUdKYwmuz8weFEEJY6Cqb3dVbZeeSLGSTQoqNvEzbEXzBDiS1qJU6MgM7xCuQQ2ZcC1XKuj",
  "key3": "44pzRCEQ4ALkmWNEWiR6ZpS58YfacCv51C2CxT5Xd69VF3JAwdTkiQZ8dUwheLmvNW8GEkiLLjRCgTxigpEv62hz",
  "key4": "5eeWR78LUnKM7GANu5ZVSoBgvRSswvcAaTCPBdmHxgQrSMbrZhMwmPDVH94cQ8eUD1rKuVZnJmyh7KM4NS4XMAs8",
  "key5": "4tK5Y8spDn3LoSzGVDX2BDfnhffpZ6KdqmBxy6RoApH5v6ua19naSBbpqzJtJut3pjAmquRdpL5srL7vx4GBJC8s",
  "key6": "21s6sdFUmJPnnLqE1tnAQxSeV5aGm9n2J8dtmRsVxMfetjVRuMsWGKHYroEvftcsSu8atsU8LkM1TrYVThG7Dq1k",
  "key7": "2yPka2YPTptAy7P3X5bKT5hsRJKAdrTqhiDtRwQy6fHnAhgTua876bjtR3vedhXGTKnCzNE8z7fmK1TtY8KpVFBD",
  "key8": "5AjtQxWuLZhR9dpW2LGDD77MtfGPMVv6fAoSm3ecoJmX7eaXDqnQTX45bgjFk8k4BzUZpo72dSLYcZMbi1x1NAoX",
  "key9": "51Zn6x77vaYDo82tFuzaFB1CkkZUvjTQWFcXEDDB41c1TR6ena1RBoi2mKt19r1KqFawXUXp6WHXt9qjsWJ8FsNk",
  "key10": "2AQHqyaVvki1Pnn997QT9T3TdBvHWjS8UAi9NY1GbaD2E9KMhBbtPLVqFrYC4WHxSQ6p9yvuyVGfZMpfcvu32vVR",
  "key11": "2kGYwm9JcU3qvbcY11PBa2Lae1DgvfBUqmBi7oXKKk7kX22cujaxBzvkojuM58J1ua8dxZgfiaHHmvnQADPCGimy",
  "key12": "45p8MDQV6raawgVExU4NotVHm7K2o8FuyfceEj8WxoJ68NznAxpgcUSqU2GtmqNAFcrvpxPUvhD1P5NXRcWoBCPs",
  "key13": "4Zk1dsHcdJm6rQdB6fjfPXpZEz7gqMvYX8WmpcvYVy3Qn9s5HWVpSHpiM2ZJfoVwK9jbAVn7zpwMHedGAEweonAr",
  "key14": "tQW9VkbHTgC9eqDJyAf1wGATewg9vzwR9htmBUKgveW9nLoiSy982EfYBsCUZHvfFZW7P8q6rKq8mphsVnDxg1Q",
  "key15": "A9xRTGMnLFheb7JgyJwNRd3YF4suPLYLGN11PP2r7SjK16MgULx2kmsairaoHMCvdLMp4Y8odhBMQYHh83w2ubC",
  "key16": "9bCLafAuj3WLKnrPJv6qNT26urRuhJ9cLn3pPkbJGnctfTiWDkYMBeucbbvWeJTwt5kkBmY9pxoKWvJSnBPZbd9",
  "key17": "4LiMXii6iB47YcXe5X8Uy7aVjVmfoJso3yQXUMS28MPiq9nBhPfiVFDps4jRnLYYLNcX4S9EQE3ySN3bA6fFe7wN",
  "key18": "4gsSWKUdaBiDZwmdXD7JrJj2M8EQV5TvaQ1YhzzwiEr2sPzwXnxjUn55MNdwtnV6jVyaPiEqsaL96bAZn1NsS3mK",
  "key19": "3cVYZPkWRRCL52pMWtVSJgcTqsfzkGzFm4dWysckxyUzmetvZ7R9GpXokdp7CigaAk78amnnQsWaLsuZEKErPeDN",
  "key20": "2Q48yHtSrnzH9uD14v3PFZFVT6vQ5N1pQEePMf1jPCmFEMsXkSavDV1aVaRrGeuFhL7rb576nX6sCCDgr4XnbKpM",
  "key21": "2NFmmTZy5ibyGDkFC3kKXtRxf6PeZciLqQkDdhCeJHpHNAu1KcwLBfWje9RQp3CCMcNWN7cQRgPUkc8g8Pprowb5",
  "key22": "uphesZ3851HqGubjDr9xcLAFgkKLvaViAgz7nnHd924p3Nk54PCtoQhZt1bdd4pzRECb5b7Lzsa6qfrKN9M7YvE",
  "key23": "37TwNL8CFaKYycu1tjX2sVLHukLdrUboCHnyQ65SofUN5Ej2C4TmuSd1e8eKhc8aUzQKr3UvGFr3KJrJ7ahhbfhT",
  "key24": "4JkqaoCr96hhvkM1jF32jjPS6amcxTpoqkGXEgYVSqovvYFsEBnGpxeCiTftWNYtKHu6M5VxzXt3HH16romtFqQ7",
  "key25": "5n9Y9nkC831ZLw18TY2nWAyAbGeya3T2WuHikWLe4CdGB9GR7X1cj2C2i6w9HrSBwA4L8bym34zsCfLJE94ANsVG",
  "key26": "5GKRp9Mxd2GPy7wGhmAXKcxgaLfUqHY2c9LP2MBmmTT4RBwjPir2EZjpoWFLuyBv9YWGrMJVq8JdfVGQdY6bRfDY",
  "key27": "3DRkzRyHDXeLwew3CLnzvR5gUz2PrhvnukKcLpKs8H71tAaCEh6fa34x3z8mm3NuPWndqGwJxLsmEvTpxX6thb7d"
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
