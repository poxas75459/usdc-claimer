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
    "4jVzunc9Lm53QnB5Vw17Fdk3SwdFkQ7GReYpcuzvZGfr5WHJ6XdmGKYsvxV8bkLsPPSiqKFyRWSkdyz6BCWwWay7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFw4GHyptmtbz4qG2jjMUBmzeRLnfb2zNsKtPiaDEe2ncWYxoaLxXMG4KjExyHBMEV8Ct8oFmvNv8ayBJJPDi8k",
  "key1": "4bau78tsuNRmmEtTHWaBbeKwfXkT7U4W3CGmCaVvekVzeoe8mjpKmXBJzHPbWFAnhc4zZvmcqjcjHb3WYSTf9zWj",
  "key2": "297PuSoFW6o8MLoifMNvcCHxqcRBw82mwekxUV34Sb7FtUPwKi66d5QyzAZFqKc7RCq9MUawbKtb6X3dvz9YbRcM",
  "key3": "5EeYytYB57TNFmfU37E82xRLivuiBgMvBUFBnh6cuPD3DJGinn2HRXBC3isNq5Zeg5xwgrRXDP4wwMWCGZkA1rGA",
  "key4": "MSh2YHcAhfKE2bnijgLXWDGWbQNC16kDy99qEEwmkb3rnEZYwgXNpMwhW467YVbHhH4BextWFhtT7DYWGAz6h7P",
  "key5": "5tm4tk79rriyZ4mUff7YsFD4UNmFMUzFQe9wPPFeKFZaqKhiVzZxkCW6HqsZZYKNPgpyjbCRw5gpRQWfGCMc9hSk",
  "key6": "2btFbQJiLGQ1DKr5oSCDUVrqvhC9xSLpiyxAzaNDKZuw53cbGLLyU8bwWUqewMRE9PPRN4nKLMimyjwABmSdNKyK",
  "key7": "2JeTbEff47ph1npS9S2LvGv2YeXoZa7UbUoM3a213DBzxE3D2YY97bLWyWSU9ha9tcHNkuxSJrxJPczb666dH8v2",
  "key8": "3XVmo3YxQsaqLAnT9Ywg4vLYF9AZBs74EbbU7xWftMncMeyAQwsQ1RFU3Ng9DrgCLcL9xHXWLisCnkkj2LqQ3Us9",
  "key9": "MrHqRBkit73JjdFmo4UjJkWvNHxaxgp4ndZ5VZwV8bQ63Cvmx6zzjP5ueBkNasm8BY68dQTz1uS2NpyQZ2gCie1",
  "key10": "3uQG27ugKT1pwf8p24ToedQrjfF6qBv7QzVCYFKrT8bgxrS2gT2oDjZ67fpSmSqXx4depfBnC9wBCX2m5TqV3Rzc",
  "key11": "5VfJy9S6oGMdM7733EVZfcEi5V1pTHVV1YAjE3rZSS4jaQb7asrbBhZwEEMTZrnTvZgJGkoHpyJ86XuGThLbxAWH",
  "key12": "4i8QorGREWFZaRvEC421EaYkZo59heuRmoafZbGwm2iTMMoET6nKFScr4LhJhWghgJru88U4haaSNXNbxczYZAup",
  "key13": "23ewCsrgu2yvoBUBF3XohvjRuE3uVXt1fHgNUnJSdm1yN5bfvEyzGxFXRVgoFNx9L8tFRdJWq4LmDkjmQmyaRRKw",
  "key14": "5oC8DUkkJJKgFZBmgX6pXfYyL2SXCxFBehVgmXYcAHLFHRD5nCUow8KK3JfKsZ8p48r4jmZuCZLq1Jemjb8rJJdJ",
  "key15": "5mVLdNCqj8foHsVWnCr8ns7cUMLtiRjj5Aagq5ouUg5hvLV7mGVgMcgoAeMn6X8zWrRbcqR65cyrQUbKAXLSgFyR",
  "key16": "ZWxVyb4rSYo3p9CRqf5iopzKRmthkuGRBvECsUV4BxbJ5CqbYUeXr4qR2BZ1vXubEyNHLqG9STwpfGbbXYsa8Br",
  "key17": "3gPmGgJsQYaXfN3CjHgeKQg5gabvF3HwehbAFJSc2y4RZaAppc3meijARiUxPYFBLvtTi3RY7Cdqk134PbZnwHp9",
  "key18": "4ufXrT3dna2Qk3zuWicuzMtgaQXvXceZvCxFgrpLwWMMqusQhBtY5M4GHfAeCR96dVc22ikfqPb2QvxujvLbLkqg",
  "key19": "5VSJfrGqcMe5Nsv3dH2LLzwYT29685Ec7yAvJixykQMqkZ3CHWrntKZFSsrD7EMEES2dHebdDQoGAfnBGYgCJa4T",
  "key20": "Gr9ffLDz5rVNV8RsuhcRpTinoBvDXMMTfcZSCogoeRVQXFrjcZcaagpiRdef4ze8uQRBemmurXmruiJvMHXhDH2",
  "key21": "2yo8UjghCpuB1Hzut4YDUSibkTMn92t71e3TyQDfeYWU7f3zSLNRaHqSmyVrXamErEkNFwNK8FTb5Kg2R4Zhbt51",
  "key22": "4zy8TauwJ9auUVLUcXxLsgFTSzcYN5qt6SRSchMLCNYPo53sLFEd2TRCTXLQbJ6K9ymjfSV3Hu7pgq9LP87rKMMW",
  "key23": "vfE3gBk5GNtcgGgnmvkjgngYWHyKH9VLbVGX26nnkY65BmdsafFSC96WMQmbJm1w41avi9AEo8csUJqNJNwsvxs",
  "key24": "4wF4VrV6tmrUqcqv6RhmyvY88MUXWtszunUdiZvAmUHGLDZRLWbjcNGywsQEa8o5LqE4KLPgJidZWqDxLPrVRF4s"
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
