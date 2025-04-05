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
    "5wn8Fc5QTpFHH4KXgCTHQBbJFywsyEhwWygTDp7AXhGiZ1kD1q58idBPx9M4mHTipnkVeMAEUeBwcUcwjY1y8uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eHR1xkQCAoSQRE5FB65jjQ9rSMumEENVTnVXqZe5PNPwgdV4uhGExhzV8tBYKBwR2Fv1uX9bTwvGk7kuw5zb3gs",
  "key1": "2rK38fPUaVeF16rTCSVfyvwgfcdGfwvfrLcjvW86GYziKWHBSk1wR1SpV4ffgLCKTQSDvMwyyzTsiQDYVWrrNNoy",
  "key2": "5eBp465ABzYo71HF8Gvjbr49oy46hy5EnGcw4hRsR5QsPc2hhFDKCX9VErVtZVcGtYFd1RrD5KsuVTAA5uv5XSq8",
  "key3": "475BAWENKfP4YFtyZpsDF8hsJxN9eU8H9Wy5Ggp8qZk7oFtaHogUKDSnM6n5komQqFJhGgrfpvbwYiiao6c9efG1",
  "key4": "5HSDKFYcJ6ifSBLaDFmufna2QzSEgVsjqc9uywr4j9K8pCW3Q2CvasXkPpbRojaazhSTDQ8zqeVNudQqvLFvVs2u",
  "key5": "4cEppyGUy5xoT3z7kMCkWvgHd2X5dh59uEvFEv18x8zKsNgM1MaMLakpsgK3ZeRPtqZY56Ge9y5brgo4TFCSAb4N",
  "key6": "3ZJXKUPt5QBQ5WgCzihnk2LfoyYoSqiH8aUuPguhwuhjYsTdkTBBvyibGTWd1r8WsjBGLxNqPQsj8Ktt2DfVBaCv",
  "key7": "3HrtK4wp7WeBt9b66NToX3mE9zJD7gvgkci7m4B5i6Jdu1sPqeSud533jobN37QvsyYTb5ZjTnUHW6Fav7kFmU4D",
  "key8": "Z5wwmGVQuprN1xiTvRNXcDjrJJvrFYU5XcMHeFRDRWjtB8G3tLuugKRUnocXNkFQRgoqgKy23s5RDscqMDweS1k",
  "key9": "47tB6fqf8gV4VrvJ7JW3KdKMHWAGhosbMUR2Qcu569MWkUYe6kneaa3f6wY2n9we2WCfN6bZG7Fg3wFYWoZbMWYj",
  "key10": "643bctCExA5gPTFtKiY6cnDU7W6NeaGEv5KEjQUvJm8T4uNpgFz5nfEwjzxCV7CsgjpYCsbQ8TQPCJ5Cfzgui2F7",
  "key11": "51JhekXU3krYk2opqPfCGWrfXkbuy9wJiqhvrNYAPSuVaUz7hEKKzaJJ11wzBoq4TDXmz89QXZCziSDTso2wb1e7",
  "key12": "sUE95E337DGh4fMHdrcLM85osCXiu6BtBV3Lk85hLeU5T9Q2XxtM1P3w4GwbpbauwYgn444PgQpEHRdyRr24AVA",
  "key13": "4FGDTMoJYyoAQB4DDFjZPV1QkncM9Jusr5T1hKJpa6GfKWuyNJfFTgy5YcAK2rxcKzjpTmXs2Vt3YocfsefyBvJB",
  "key14": "35HXDBhZKe5spqMvEJt9iy6dUQEaiMxRq2UdfsM3RmsbpEgkNNpNH9GTPN2aRvmNHno1TeX53Gi7GYswxBGY6Xed",
  "key15": "3wKn54NFpW9EEWUNkdDf2NHWfdD4HZ6WyjbUeUdCgWnrFqjxMtm4VsinRu49aB39wPuFaFouexhHe3yuoNwqdjrB",
  "key16": "35wEWYKkpTziXBK15ne9g1fJWYYz3qJZUq6qfEmPPtHkRDjXJ9LwEr7UswfkEtEupc4jJHAtKWYGUZc3cdJC7FXH",
  "key17": "56iHZsN5Bu54nrcs3wVU5UxFCGL6Z3f5WL1BubM42U5ikDX2AkYH41kHv2nHTE9rjuDecM6HVNFjUkNHH4o9nCiM",
  "key18": "3ZxaxpaxKhBnG2Jn4uYhzGQTR2dBSTcBoNFYwvHa5U6UMHULNNV7JPoVhsev6x823GaNmU3c1qk4nqmB6JQj2Ud7",
  "key19": "4Gfb8BKwDcMv8eLq4J32emEjCvy3Dfnn2nJhMRLJYYzjZyWvDo2Vc6YHXZAPR2apfibTk9ddq1VW8YA3HbttCkpE",
  "key20": "6TXeF7gyTDChrvXuTiHhjh13mtBCVXbRxjXzw5cvuq46MJXcevpw4w39fqN758QjHVSDt8ZjXEAtgPB251UCDbA",
  "key21": "3Q4DNUAgvcM5k9n3S1iYELztY4YNmwzMMFc2HN3tb8XKPiYGxMST4Qa12YRHmGGMEAMniRdfDj9uFq1DX2qXHMVL",
  "key22": "3jiK8REkrKweNxUDc1c9Ewf39K2acGCyB6MprD4LWUgWaDgbCnDMo1TTB1jhHW7FdiSvVtqFpAfDbnDmkK8yj1Kp",
  "key23": "61fejXuQAgV37CCwDMzRu3NJUtNwsvRSUsW5YC4vKKGNxyp7qUq5KBW1cMMJA6w4bY9Z4jzz62gdSVgYAY9cff8i",
  "key24": "5isd7VqKsiBjk1SbPNSQKNWpNvPBfDy6w24HZnJBgStWYZLrpkt6Lru71Npgco5cTGSVUAS8YCmFbVuW41qcKpEd",
  "key25": "DurDgqy938siL17N16oiV7FqY2vnPtYqKtU9WZya2KnxC4J1SiDxC23FGTS5gwQsx1G2vubkFwgpLFsiXCqykHw",
  "key26": "p6Sh4zgLr77q9RXW8G8yJfUx4BHPCxtFxajgc6NY6VAhysyxTs6Yk3nuy3tpr2WYZyGhXcauPDANouBVhXUpepc"
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
