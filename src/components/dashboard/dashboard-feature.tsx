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
    "4Rz7UbRExrLPXo21rKmXVKkxhjmHfaVvdfJaPuFCYNVddggWjak3yeGEPqfCTZr2NLS6cqj7SH3rS4CW5qa8xMP8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LB3sZQr1TEuJMiEPnUWEith9AY5pd2S67QdMWAAeWMbtEpyQ1K5XCJdQJbXsSLuXJs25TSQc9b3q1TGUxwNJMgU",
  "key1": "Ec1wgUF6wyQ6Pn6SfEnNwUVw1cW7mqytJcRsp6oXe1iKcjsTVyn7DdGS48bejb4JYWpkdHJV68eMLWXTeNZbCHH",
  "key2": "57hy4MpbjL3oFnZmueab4H1eqggrVdJjakzwfTk8iCFSjdNHt3UzfXy3MWN7maby2SxhxhynJudd9bFUPteb976t",
  "key3": "3ob2RVk6uFsZBjn5CXGBdKfW4AkZtSRgVWPgbFJoyBzD2QuzC622bhw1ESTw5ntNHPfDnyAatsUpQPhvBaPfJ3H",
  "key4": "24nt9iVQK6WRGJG3tMRfkSURMhF39xM4hZiE7RkEztkor8MyVZ3DqMT4RwCKNbVE9Ekxa6Jin6yqXwrZuvswPpwG",
  "key5": "3H6jdwf6RpADbUjrdPBmxHGLmhA2dL7JnAjoz281SybcCjxY5auHogUUweaQh8kx4dhS6xXiVmpnTCWDXU5ir7is",
  "key6": "5kn33D6cMgx5kgkWNZXsPKumhQHremeEJdZwb3uAv3vNpJYJ7kMg1ZqjzDkCZBV3wkecvHviNrgKFPmRyYzrm8qq",
  "key7": "2VqWdNE7RsqZmvu67uPBGGTc1zh32786pG4S3qJhrJp8pcmgWiWHDBXqfQRML7zmjHzCkb3hrk2nFZnrf4W7n2hz",
  "key8": "3VzVmA9aQTrW2GpKSqpu9X6EzAFLBqmsnb2FHmJSQFsqAfgFBEd5fyMBC2wczPnupsnu3HJTsijCKfkhx1XWwKyy",
  "key9": "5cm4Z2H6XmFXBTGbA6oAAWwwcXZvTw1jydgB3mri32Mo9FqEEDZgxF9vxgrXCgR6SpPs5PtNasSEQG6pwixwoJrR",
  "key10": "2fPRy1aEGZL1A4qVq31ZCNyT1CCZr4a4VvsDzuJ5MfRAVEABFZBrHp6uhr6g79cixxDM2xXpMuKiuAojNYztGu4r",
  "key11": "5LAdEraVFMqCH7viAuyZrNj7381FggXU1RRw25cm1dGdo62wewhZchX6ohN1SLCbjWzuXuhmy3BzRkzW1mWntybK",
  "key12": "Pkad8b5aRGguFiuWCrrRoVdV6QiBxArQoXmDiprm62wuREtz4N9MBpvmu3hSqewwutdCYZmd6PaqWBDqy1S2C4R",
  "key13": "5MJYnUnw6v6PcCscLKL6ve9Fy2NSqVTKYZchaV75G8jqbDdqnWDz38TG2rtM8g4RLd7FaLVKDgo9V5hQdD4P3H9Q",
  "key14": "5e1cBAH7VnYkaeAiuGX3aEUmR9SjfpriaJrTiVwiFTmySvCJpFKBoMDRJXZc9aY9TGda6HhB2Y8g7sDydJvDq4k5",
  "key15": "xCsqCLbUjx2m8RZNanGwzaKP7oXzBpPFXJ5RDAdQNoCnrGKQisLCzGXHnKtiredftuKVivDFWCKdqmW8L4cAaLL",
  "key16": "cu5L2ePQ3mT5ZX8tmfioYVykNcrdCoM1fweF9nzB9SrqNQdwwXSRvnepFgMgq8j1VD72b7D2JSmU9fQWbWLW28W",
  "key17": "3xKf6Hp7UpyrxoVpmHPxswAtuGXbJM52FbVR9C8ac7cB44mMGZZH52mQyGURoqeJcqovn5443AGvVAcdoDRcoiXC",
  "key18": "2nmpgYrwHo8RwiVYb7uoMnCLhT5NNgHjU1GYuzas6fAhswwojt9Q2YAvLfTZZqW6u1Qt6DVtQ4EiRyR71Sh4LHXG",
  "key19": "3SB3LhN4mhpoxnHHFtSWHoC1iTHWiWFx37AvNZ2XbowgS19CECMrzkFe8LNUiobBAdRs2DNrGtxXw2zC9aqc3zMC",
  "key20": "226FScHFJ1TEkKMU3ffhaLeXzpSQCQDG3EfQjZAsYAn5jX2dHcGbuMDuYy2gKhsukHRpYSER1hb27H9EuusS7afc",
  "key21": "5V3NtxLqe1WRyaNDgGoci2T4zRYnuDq64xSoCuuKYYkLc9TptgZQkWs9M961y1UE9mWhS3vYKmf6TTq3FhGCzFpZ",
  "key22": "3rJpfFuq659c6gAHfsv9r7pNmeox7YM86h81EkwWMk7rzzH9MRS86aUWjNAGLwrA8kNGrWcpw7TDzuETPaXzJWjX",
  "key23": "3Ue61te6QVPEwyRPixuBzsqAngnDSuv3r2zsLbESi69dBk8o214joh1XfA9yUqGEE6cEHxPghsukPs6BdD4fcDVp",
  "key24": "TsJvyCk7ZfQ3JZQ2h3fbZjkm7z9VhnX6MQAxhPE26FhZhYU4YozNTMjR5bTye4dMnq5AuxWYLUHv9J9NAnCYFs9",
  "key25": "23QXSTiUW3pm7eT7E9TCJsoH1yExeqecUNHTRDy1xvAeMRWHnELMtEcDGBsN8mCg2UCUPGJQbEUXgjW5uEkMsVRg",
  "key26": "4eAeNi39VwUFvAS9a2CB5uC9Uu2Ktp5HTsu7zHF4sSEbT1uvgEs9T62ji3XKB5Ua7H18iGQSZSkR1vJuadZgar7v",
  "key27": "62rXtgKih7gdfJRh4FkoPm1zB5a5Cas1aZ7Ca7duoQwmmQegXxcA66hk1hKWTbuP4MHEY1ekKZPho1SJCCtEhjMN",
  "key28": "322JQJAhPwtWNZU8pC3JxJSCLoiq8JuHgtJRRTHQHzmXUgR536S23JnvDVKMqkSbXELAr4dD5aybotoN9TQEswNj",
  "key29": "5p9EF53fzthjPbXyrcoDrpAZjjiXNmEzh81ukhN1HbeesDab3JA5V71R4jFgwspUJ91qex3zMroShX6vq7aVbsR9",
  "key30": "DB3gLQCeUkXjnm7fonRxwhpnpEi6BRtaQTmVYfDXSNQ6CSHbTvg1niLXhPAGR6vUFGX49CNAsWy2J3ybMAD3Hs1",
  "key31": "4PBJU4Am2zyUSkfNoMxqtKoWpgHKaREaTvVACKJmbBs6gZdo1eTH5BP7vQCzxDTFnsgXifgNbY7BmaJtAEughnAH",
  "key32": "29UMCZF8oqrnd4rtDFx5TfYWkNs3nDXAyUMXm1Pm8dbHahY6xaySR543i3RrnFNShjYUrT2rKesGAEZtKZ7dqDUV",
  "key33": "d5nikyTqjhCA9P12vowiwDeTBFGdFHqSMNTsHe3wX3AndcVxfVDXiJi9rVVQn2VPdUCsFZjPkwsqi2n6FYSyKjs",
  "key34": "iRXDKBbcwH4deBZ19X2WDkcDfcKzbuFdnNT5jwaTuK9u41RFNez86WhiLmu2JNP2mxVnYwYgPTMYpEj2a7VGVCn",
  "key35": "33adVSoAWY8xVAvGNPcjiUSasHML4ftapmz247DTan1xXZe8pay9RBVJ4mVBnjSP8xLj7pXw4v391J3eb4GQyDw3"
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
