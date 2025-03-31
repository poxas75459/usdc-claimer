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
    "2Wnhs7QCM2d7FRFz7ZgMxj8bgwFS98eYDLUHMVqrP4e4Pkx4oaeomAbSqC1QrxruDCfEa1si9AZvvq4QHksBXbfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AaJ3TfhWLsAbRZ3hzh63VybymY3s5ZS8VhTDp1aazahRJFSe7KnP6Z6zKkrgK67BTtxpe4uBWDpTmrKJevodttB",
  "key1": "2zZcRPbeJihch5MCpoo1dgRP5922EpyUGJEnsUmjdzdLyNh4hqxeqKv1s1Es2iBMk18tfgS6FaNAJocwhJtp5go7",
  "key2": "2Z7D21734caphSCPENxHXWdp51zNmSZHXxMmieMpqCAEFaBgsqiZuDdZaYX4uePvXpMdUEzBBim697LpHR41Mszx",
  "key3": "YUeUcpmn3MkYY3mg4GUw9MZp8KxbAiSYVbrkF25ex6FdV7ai8z7rtcHPhKMBPFtTcNVycSQYiz3V4CFu8NPqFu2",
  "key4": "39c8m7FBRFfddXLtVKZRtHph9Hpc31jZZB9kJjPAB4pAsXoSqzNRbw9NuN2jzyDdpe352qH48vLgxJ1LpH8S53bQ",
  "key5": "k7iCtbfK65cQRTu7BeGpWhnXJvbqcxtQwgeSRMLR2DT7GiNPYs7AkoKocJ65WA1Kr9TUCvpEHHYCGgAcHzALhhG",
  "key6": "4q8CPfZhgNGb5YcxBFV1Gm6VqjQAZQzUTF2W17z9Wzw3cQ7UdPgDXGLHKMj68ZxHUTGAys4nFvn82fpoMvotMmZ5",
  "key7": "ohY54ZQXB6x3CtefR4PKNCcY2cXnDgPvX73PBuarxDHVPJWs9pX7MwKCg53MggV1c2k41SuK12nwBXWShoJ448Y",
  "key8": "3H9L9uA6uXFdUNRSBiYcaZRwF9HqC8V7ocnjHsw73RkrrAr4ezctFzPZXMv7U6rszhVBPTdNLnASTiCmgiuZNdrA",
  "key9": "47VzkqRrwiosJPV1peNHjPjCy5uBbxbacJFAiP7SASQULetfZvcvrUXWXr5o63y3YjDqdLRCSVJ1BeuiYAvNpY6j",
  "key10": "5cXLPcosVSS8btfA6FNhExtBJWUqgbaFVvXrn6WYLKC8j89A2jyXH3Hj6z2i27STQ1VN6NyfNMZL6ygTp4TbozpQ",
  "key11": "2YHcRK1EwqSGeUnwHChufdENafLXtGTpDF4ZoBC98iBttgXNAzxjE3syfqTnYQAA7FBKDvNxkjZNgEGa5PZbavWT",
  "key12": "3HBooGs57LJQUxgsAKThFwJeS4GDzLRaGZuvraLf5JCF2RwnxsnXwGrYHQcK3menhsQRqKUezsGvkvyDggNfJPz6",
  "key13": "2dK26dsRfKR6YBTLYVb8ZirvBQNkdQDkez6Jb2XHCpXFUuvvbJHjiK5KaiuNqSkSmhZuug6tV9fi1DGiAGZsvfue",
  "key14": "2GnXzqVCS7sHM3GgjgAMKzhwW6Bb6NNtgryiwgDo7zZzseDbsWDLPqkwakp7Uu3Tc2VGDSyVGzQUH8bcYko8upDj",
  "key15": "3MpWixJyLbzbzbURkrE68kWEWuvGseEsGT5qgviE6QmQM1fRVisUcbnBaxLEcQcmB2LBKCwVA4RZ2iMyMCrpY7mn",
  "key16": "sAMMNjLnTrmmFEYZtSF3ip8S5NBMuVb6qm2G4x3A1shTFyDNNRfpfY2jZzCRmQP87zCu11DmVGhJL8akKEtBbY8",
  "key17": "58NZ28ugZa8Ee52dugbefAZzoiEMNKei4p5pYYrCmodRhJnYA3P6vVNgve3dww7RUsrTCjL1CpygBGRFD6qRYGNf",
  "key18": "4Aq4YPgokAs7REvKgy3okRyd3EmHqSEtzWrG2hWgP1SRAn4nMuCWmapPriggsmJvpj96e8YHZMVND8JKortJLSUp",
  "key19": "5hnMCuhLyDvCzR49kCeDUWV4c4eZXabuQaP8K3LLWxN62QdZFr7wPa7XCk2rKHEF54fLKqCEMrKut64RGBP8eZ1C",
  "key20": "4qvam9rYSWKNCMppbmWLxHvpPxkindMNjnG6KqP177YEgCCQSDcDBh68qZs63RKFbXG9SZ688tg69GCEAYJ48b5P",
  "key21": "4guJJgJBwMmnEVbHnCi55am5gmuDaTqWi7FiLMGxkzhTko6RuYnRW8VpJPanNZDvnPHiNjL317pR21TCSgcZENzC",
  "key22": "3GGxbw7rkgiLJJRjhJUMLPRytinMdjYCC1EduVnvgJCEibH6kUgvAuvHz11WrDVBLr2KGg6dXwPsAKohWdBaZwd9",
  "key23": "22ThWtLn8QVpeaCkWPZn9UwGq3VCe5U9nRiDy4WZfonAf2iAYBpSRDYS7sRNweMcwYxS9VDGbzkrrfdzDG5PQUTF",
  "key24": "5tB2jZDxBjCJY6V1YAKu5vXwxmpbyjiwaazFvpuHuURCsMTQrpef8e2b4THLd12F32nB6wNHGKQgxLCseEX5QvWL",
  "key25": "2PWP86iPJkRuKzLp5g9XDgNRgeL8HvBTBr7kWBg7bWERSE7mmYZ7ZFjAd4isZA72W9AX6KMy4jYvPM8LPbnbV2rG"
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
