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
    "3NtEdcx2g4CYbBFF8bE4J4r2S5RkMpk8Wg93kPrSssXTRhUiJTds7fmTA1uATXLR2iwXsPyCGLiUwx4SzbTYNYjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zWZJRDdjHXYfMAv1K7TX2FsknDgD7qVwqfXGbRJM88j95pQJJbMvjMEsmkV52vb6amUzmS29iNXTmWzp5AQUnVq",
  "key1": "FJoL332gfM65jdHduvMm1dBw6shA1wSimvhyk5ehWdmGdkcnhaUo5dx5q1xi8UomTz9bhV3n3zGVoTZQKzRrJsj",
  "key2": "4mJQoLzTvGdb2ntBpd9juhw9itBJ7wx3kUMvmHJmcCi7cYijTmJWGjCRN7VCBh4NWEFEeNsR2h6dq2t37YkyP6jk",
  "key3": "4a6nwAwSkJDgWuzA27VjiLu8edCS5416HbcpKdmfm9vuqWmrUFmqpRuYpNLyGqsMwN2aTjPETCajbrmK5Rx1i3ED",
  "key4": "27r4XJ1yipjEm3EbHXSStP1LqU7yxyDoAf5g5Ahn6PjEDijDa5a96gRq2EeUYRRtskNtB636ZsTT7H4x6UAckfxW",
  "key5": "656ZEgbW8qqDr4s6wA3BABbsRZT9QbpPXMzxAZgKQhjFa4csBS75mLkHqMTCB6jfif9oUxxA8MwJGC8T9kQqYH3",
  "key6": "48JXiEcs72HGzCVukHvLFBXWLxMGvLp79AEabDQ69WDMsWdyPiQW5HQPkxqFHKPCQDosut8iip3XG9gt8muXfKQ2",
  "key7": "2GQond8LhLvyZvKk5FM5ULTCRpkuMmmWWDyVhaNEqH5YmEebsbZ5eqT8T6n9dEkViRoVS9DRH94p6suPGt2AfpgJ",
  "key8": "3FvMxtnENfyCLhz2nS5gvFqUQxUqHSN45LRbz9ECxMFFk5v9CciYYnCnS2g1Cc1H59sXNdtWVxSCzu7VoZ7yv18p",
  "key9": "447BRkjpKD8ouLCGRbbArhVR5GHxLfJrwvm4evNcTfQveZZBqKRaKTu4cGoqw3Atam2TYJ4qxHF8yPKMYde5n5i5",
  "key10": "3wsS4bed12Y6ZfLxp1hXQCJH5atW3zT5eYAktXupVeQQqci4XbKrXXgy87EqihoZ24ti4wvfbrr5CQ7FtSg2XCrf",
  "key11": "5tuhHGDg55mo1bisdAXaZtkqBsvR2xMkphDLeNBF2SnWTQKqzQXgGD22czMcWLji2qysDYZtrL1hTvC8QEjoTPYy",
  "key12": "65mWK6FhbreVomr12YtDuSUQ98tjnbsNKYGCUacXUYeCEMBmRw6TqeWdP6YLoFHXyE3y4nMawApe74haSnFWUFH7",
  "key13": "5eHMFaCyqcczpDrMNRMim7AekEnxivaA9Q99cZoNQxkfMHeTz6f3FwZQekBk77gt4aMmgheHD69V26skxeyJZZLb",
  "key14": "mcnQ4AajA5w9n8KtYd4NKW1SX2kDgqShLuJAZkjbki4oJ9DcuzvKDwbj1TWyywYbqCrUXh5g6ZQ7AtURJV2posP",
  "key15": "2vaGwuaTsdf35qBwQ3MPWBPQx5TvaRMjR1QM97XN1bQ6vM1ncwv2qci6wm59MtQwH4x8EuDvL4oj2ecmFRB7JT4T",
  "key16": "2sicDRixSpWUDUwtTEE6aNZJNHfBSwRuZ6E6HLojtSBJrqkc2nauwwWwGL4eN9UFS7NTdvfV58xVKVHmLadNxNRV",
  "key17": "4XF9TLRU7YrXftLPkzSLYrADJNzg2gmUuughyTE846FaA1ps3Hfqib6fngrBjaP2BM9d8rz2SN3CWB7tLD1BBdr6",
  "key18": "pVwqv398xkeMu3Ki4WqGkgVmmn9zRtPit1TsYwjkvhooVGCFSAefstqg2ydBqfeCQGXAVPatwXFTxeuT4fqps1D",
  "key19": "4ujuZZSCzJwA3c9hvQ7gcWRMLssvCZiQC5o15NCetJnsp6Rgp9NPjps43rwQ565RLaejYU5X9E8TELuFTyk9UH6X",
  "key20": "5v6qquEZCErRH22PDJdwpAkH3jd3qYb6kU2EwMimpdHaN1N8coRDdcEQGD6o5BhxBWQqrYDXxxxU1GpPPMRWtRa4",
  "key21": "5YtS3sYrByX2Q4X6qguHgagGUjPTjRJaZXd8ExpSudqEMMx5c5BHhPuFfHUvRrCc5b5EMQUKjcutYHPA6MbyWrAC",
  "key22": "YuFsvWKkzzbedKqkCj3rTL9BpEnxHnSSHhAHjCcqSswSSHtkkZMbMqgUgNvXh3V5vHJLGMyNcymDpw3RL15b4m7",
  "key23": "FNhbhAq4LjxK5b38Hjo9Bf1yX8pFyJ9w4E5m6aejoAhUyjJsMoSoWHTfiEwabN4ykdnb13pqyhoU7sdzrpGjHv2",
  "key24": "4PytST3zqh5sGVw2gmA4twGZrTN4P6k4kMZEUjVTCWgMtQAuoogzmy4HYLpX3TkKdKL5ar8D6txiTDzsfmf8rRT1",
  "key25": "WSzDUoDfN2R1hRg2hv5rV7gN6xXEPcH9jtYK7CN6Zo6gTzQcaHAVm1Vw9bN6sZs8DAEKdMsJHV7SM63683NdNE3",
  "key26": "6Cf1DWMUev7AEZa7cxp3xVhtb9D4HVesqpK2kqUxXS2k7vU8RezqQd6NFms5NqgehFQRLH2QZS8SZ4nr5dwe28e",
  "key27": "4EDVRE1CLcbLA2hHwMQ9u8Tr2fvesd42SFLZ82Jt2tsGLLmMb6SujhazmBixQ9rSa6cTZSsGm5eto7iKtvYNghwd"
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
