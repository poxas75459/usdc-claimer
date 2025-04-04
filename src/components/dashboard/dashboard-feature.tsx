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
    "o5Vv1Gxpn77dRYJ4NmiDDxvhK2baVfB2fhnEs3ByUPnw9MV8XFEMDJ5e8o3XNGmhxJyFzritg42UchbsTuETRdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67k21d12oW3sKtJLAFP69pb32xcn5Mm4QEVpxt5GqcZnux1ka3VeW8dq5TyGDchNmLQ6eCNVUSzJ5Wku2Z8F4bNz",
  "key1": "Hxtb2Ao6N7DmEjATjYrwdLdxBCW8qttEQLFt1m8CrQseW1ACqHu9asnWo5hSMXpsLt5giLNg6887JiSCiXynJmf",
  "key2": "4BYpwhzGDVxvANcFPgnXDSgi5bADbEDA4aMhb2bVK1qRiDsz5WTfG9Q6qjmY84psFVVX4gmZZF5PVEPC1nQMzBzj",
  "key3": "EQfB27vVqtqibHHQJqMxvHTLFYSQosv6cqifaUp7VufcN622TKESHzKB2ussYc1Ye7K861cyXaDFW4bRDipPCXH",
  "key4": "3vmjWz4QhxBFWJr7s83AFXFoLSryKissw6JwZmY33aYgu5fUHZofA5aWjNH8qJjD1npgrvgEjjWf4ea26hoc8S1J",
  "key5": "2Qs6zfH6AC9CEzDM4zTTqc4tSQTwWJ7JDSHNiUrxobP7F4CYRnaaVewVJzmNakC2oDSbVcGL1VhKcSnnXbvWcmC3",
  "key6": "2WamXS3pXCXfeT8PXs97V3wWwXwiGaVf16QTfXJ4iNDxbBJvLVUtjukzLgys5ohb8McQKC8BK3WqM1tN7aBR68Ue",
  "key7": "5MprsCoBoW3JJJUVJRfZAyqquf8DEDJSL9FoLKwzFqbP5enLTocYHwxH8yT7ZNMtJ79vN2ESC7B9uvJ1xWSREAYg",
  "key8": "FUawmh6Wa8KPzd8w3bahU9jLKEoPQXcFuWwnk3RoBDagJf6wVmX1xxwvK4QHXViD9RHoxEUzFASWCtwxJfHaUdw",
  "key9": "BzPsm3JXfMWQzWNX1nG3nUKzHE1WBiuXDXY1zwp9RckxTALc51eaouiFGmqjgCN9BNMrCGQwvYNU5zXRwFexiWF",
  "key10": "2SnPr9Xn79CuQzaQfvxwyyFCxNQnAcb3rBXQ58cKpexs5Gg7injBUtQoUMPZzrvTXbEepcYxsJkBKA1mAJ7tExbV",
  "key11": "66r7xBWX4Huy7MqRcXoooqC6JD6DCUefkrRYLGwuPTbvGUFXM9eGq5wfyot9KKEcR5YvgkJ9HmajiS5LMdWF8H3Y",
  "key12": "3n8mqi9boYV5RGhoTkM6fRuzoFoQ9NC9CsoEh5fbeCy9THPJZ44qU47uM9XM3orXDwtiRtuime7EUSusUW9ys391",
  "key13": "5S3PENc1gW6fBXZoikWbsMCi4AX1SV6C7SdsUv4AnL2nQohG2ppdLR7ZgjgGDij87HvcJZZyBRuynstMptjsgwrc",
  "key14": "3PvKz1QQ6jGwuB7Bhhjy5pZUjRYUMthkSgt2JyinsCrgqdLdFogkPzmRaB2mC58h3u1Jn9bHgVt5jNVne9AqLxbE",
  "key15": "623HoyiFWTWaTutEpATMQpUJRPdWHpKGxMSLvk7SaTxSyxnX8GUzB6Vs1wk2pvmXSj8ik3PJrwqAqJvceyeHCVZV",
  "key16": "2VHoNVYf5XniKTrx6UjaahvvGyoPQNJXrBz551bsLFYUMyR9MTiLAmLyd4gZogYHwzvFRTzfxATEM25S7ia3Qvot",
  "key17": "wyPeFWB54q4BbJ6cWUmw4V99ftVRhafdMVspFrk7nFeThYoKbrsPgsrt7Lir1qGJQoyRKdFLCrj18o5UKHKySG8",
  "key18": "3APXkubUPhWGSQ9agpMjZHq5mPNeqq1KrYs9rM9ry2fmBVrmLWEocgeYQiQdHzgMY2UPzw6PK355rjpsTWvGB2Ly",
  "key19": "51W2FBUdnS9SabYm6eKS2byxMvjKvDHHLgsuKu5u6knx25D7kLepFNwxrm7DreWvNemnaaQp8E7RbnSosGjymVQQ",
  "key20": "4ZcHKCG9f5meNFWqkTxBwDEmUnLUjGHwfsTR9tQAQaRNRrSe3j1mboqYWVormkmPRC3ABvsKiEFPMQ9oEgpyCEWz",
  "key21": "4LHef8TfgDAitiPgvUqYZMntRYSmvEg3g55jDpfHgkqzRbWmTWqZvkXHnj3iwyDC1yedS4BLcJ3bif3YxpyzQ4oU",
  "key22": "54K45TKABCumDuYm7CeRiP4qHR63esXz6F4QM91wgcZXTGXAMCajMYw5wT9jf28nA1Ndm59QrWpS2SMYwZ29AAJy",
  "key23": "2F1wvtiu52kjMDyLZw7DmEZSG9oN3xdYoBt7f2fGvhb9pptw4QgGUvCov8Ar2uQccJhsofv1d358iD1RsGXDEawv",
  "key24": "5YLembZS8SMX4PWo9NNV9npgDGi4Sq7mWnkfk21SQRQD9ZfRPDCt5BmygjBqPb7Tpt4kNqgNUJLzQyD2fbAC2hjT",
  "key25": "Ek3nKy7p4Z2anTQBiDh1emSR7AQUsEmjAEArMBxX5TT3mkgqPfvR1ih916SkFd6qF2SFGR65jweE1LqCuQESBSs",
  "key26": "34cD2FsRWNRfifWBcFJ7GWEc3pTKw73tojgLhbwBtUyLDemBJ5CtpdxAUeBpPHvZf3GFEUUrR15vYsX2yuTotfwX"
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
