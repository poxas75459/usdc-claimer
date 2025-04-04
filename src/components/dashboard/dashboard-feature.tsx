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
    "yQhQCadz38mdg2gL226L8xErU4ikB2g1QsAHCbCmRoDgPVrcsrayAXS9ut2QZ18AMP1ccoGr8TfN1jcErV1177E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nadCNRcxRg4MewtVcWjcYDzwMB4Y5fAPMWAgPa99RGhha4fsF7JrYsC68U2pE8bNPPEqA7tNR42MhpiJpawTqGM",
  "key1": "3ooTg2GRY7fYRZvTQdxcyxi1vyMJZRVNYBzsN4qPu74Aa39tsjcwUtzQspXLBQzoTGxEWtf6JSWhe44fniswPP8v",
  "key2": "5wV1noeP8KvPzV5PdQL9uQyfQaquLbqCBKi7wnAcao51eVLKzXH8TCcxrAnX2h5f5uSTsjKNxQ1BiWpYaN4kfSvP",
  "key3": "2wLyHcJpMX4vrayU8Snsvsq1Bbr4eXZkJa8ah4PGc1gWnM8mQfT8smUMRdy4Ym31gGmgKWkb7Ph3FFy7a8U5a3TS",
  "key4": "2FVGqDP7pcfSnqC1ctnfEzTiFVhqqeTYuCodhCES2HwgQh9eDEvyWgZkGwpNtg3dzFuxJrATpWbTbb4XkpgcwBt5",
  "key5": "5hAzmnHuP9E8CZfFrDWDwTd8KkcVMteNFdMkG48LBpy8dGmWddg29Tmmogvb5479B71tff7TQgAUW36iSDv6YyPZ",
  "key6": "3HUkkvZQ4EVattgu2S5HYzPRcYuSAmeTz26RXXM44q6BxZTCGRnH1bRZRJJjhxfL8xi6MoGDNCym9R52TidKf2aR",
  "key7": "2xRMG16njSRy9VNuaehTF7m9Rf9EYxSCkaZwncerKYwTE7erViQVriwmk1FP5YpeWbrEN7FGiVdFfubP8ZKbNzGD",
  "key8": "2sQWacg7o9kUcNkAn7247y7PLGaKxxnV9uoQxyNoCmYU7kFFopRjAH3ZnzYR9vjCC5GoZRy3GN7ZgYMznbPg5Tyn",
  "key9": "2QWtx6xofwocdTBugU14cjmAzdTmuTrBKzMkm1ogkLi43KUKsABJcqNhokdwkvAB1VAXXUvxEmfkV3edBjhfcS2S",
  "key10": "tw8rZRgvxUVLW7PVqtaE38jpLupJ8LEibizRwvXkSL5A4Au4LJa6D37tHa3X5b7YMWcV3jbShNcWqkvubQL6wWh",
  "key11": "4f5WkZ27taaEiMtEZ7GSEBBfoyD7AFi8tNfNAXgeoZ8Eyockk4qvbcJcB1rEmUTDPDM5BcKGYXJo2hCSa2Nbednc",
  "key12": "3VjSkFMGuAV7VPfhk2DKykrRrUEef8yB8VYBfd7z4jMvtjbXfjhiyU4wmwN5mcBwhTE4CJn44gRREQacKDphQaZb",
  "key13": "4FRkTUvfUU1Ubya83aX7jtUeABiJ8EReSAwpj7oitQ5HTh2r7UUvzxM2it7ZJRH5Qy3rmVL1TyQHr9VW78tiA4Ub",
  "key14": "2w2cHbjMa7QGEZek32AYz4YR7Y1QdYnEuZJkKfQSKL1xA52U7KLf8BwRtzop5QNNxk1ZBNWDXZcc8uRYbgVRMn7x",
  "key15": "3dvqPw9k4YfwiSMZUG24Z4DppphGWfBAjh3SgHj5U5ECKb9fhGz9tSD2kid222xLdZwZKtp9HwwnDYNa88GCbTx1",
  "key16": "3RN4RES8JVgone4kXa65Y5YgNt7u9XH9QDJE58nwjWVSEY1JcEGeDpgwVX1THDuBr893xLULq1NiDqmMM8zfJcGn",
  "key17": "3eXG4f5sB2xfXAADDbaHBNqJhYDKkat9BVAi4c83uAqYYbTot5YRHcY4N9434rK8iSNHKmPqHuRi3cUEgMrgYfi2",
  "key18": "GnVkGKPHsj3CMmFEx1sYLjnpDDMNLDknJvg7RWVyVfmKBt7PoEAuo8cuHPXRfwGfr4hKdMFnAaANBLb1gWAa62H",
  "key19": "3AWZ92vuuxWZFp2fbYg61JwdiN1pZiGMPWgqv1NZCvQsWT89RwVupQe5NvpcTxUPUq3xGJZBMEuG2eidrj4bfMhr",
  "key20": "4CyF4qKKFYK8VkUKwUtYXxHV5wqE9XS3o63GVWoEfQZtQ7pmoJvsmCmj56eiXPJoUanzcXNJLf6FcAuJintQdunM",
  "key21": "37VKdeSP9qzoxUqvuvav9RFqSZME7MqUvz51WXEqLx9SZEerKpNdCEdH6poUQg1AscEbHFDgHtuuAwmSJtnvhEyb",
  "key22": "2DPn3dZdipUxwNxfDJKwyN6P39ag2GRkfesB55xVuWGwJxfmbhjgNv11muVeiqYgNnL4YA4V9QZ93LhUFeu2zhnR",
  "key23": "567B1i9tH1LK5HVwrQZc6Y9hkNBefbPkLHrDSvcWmYJzCoSTkWsJQNrWgXP2MPT9KH2WgTgP6wvTQkuTqrVy36x4",
  "key24": "uqGL84fmJE6UEGMpoX6gEdxQqR9kmUhig5TodkYMggJXzcB7JeY8A5TMxGVtLu3wkMSQfhSVdVgwJpDAW2EC5Ld",
  "key25": "oSiKqbLPMaVbCyhgXVma8cRYX7KXoLbTm2jMEXsZsHTD3cYY4AjtXppWSNpXaoXkQbrCbxSGSzJFq1Q46cstZov",
  "key26": "34fScV43MoXUTzDoQYL2UE8ArAsTnWuMwwXXAR3RE8xz677yuzYAn8xngJHZyZ8eupSFFx5PkbnMD646o2zWYQ1Q",
  "key27": "2wf79BH6xdkm56MN7XqGTibSf9nd4AkaFFNtA6QrCmvrRAj4xgzEg3ZQGMUzqTVsTpkeeudPbSw6rKExnMBg243N",
  "key28": "4vP2c57PMAqeqztWyC2rRcXCELNvbyZcnSzwvSx1FryzmSubCjSsYAYGF34nSktkjCXCkT8hpBH8Xt6etjQFZCbq",
  "key29": "5Y5iTvTPCByyhwxU1g4ZjSdMGsgwJJoHzsXTBsziJ3LMktnMKdjK1q4Nypfhb6H4zpXr5ZLSHj8pqGyNZAkejLJN",
  "key30": "21Y3fZ57FZ2h7gqeb6vyx3qGVqmWBpN9x4g32aVMSAs8XnXKRHc2sFSJYwgiv3UdH6s2uaugcRGWA99rEbuAiAer",
  "key31": "2dFYC72VgaFSxrn1Uzk35cJgy11btibtJTyLpZMgds4BpXJCzzwRSLv6LBioDZau2Pu7W2EMWjoxMP2XDsWziF5A"
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
