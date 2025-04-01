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
    "V71ehjGwE98U6Rq4KvmwEP6pc3TGkJhxB79hFaqircPn3protaRF7h9MGL6VHqkDwQ6bNNfRZjqAFc3NLX7fquR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XncNRtKekRjYs5TyvtjyknrZYuEoHR3u6dSvPeVdGLXEJaJeMdNraib2R5cUEhpz8CLZ4QAL1T2GQzZuPGZvw7y",
  "key1": "4Ny2jpFruc7ZyVxZTygEo8MjRvvBKLS1yderqrzA6FuZJ4CkHcG7KyjWdCSeU3Lpuxfu8WcJEAzde8oBVvZKNeVh",
  "key2": "mN9Ktxrf7AS7zfpJiV5HNQAdLqp85VjgCR9s1vu46g5ypPHEXSDcRRFmLkHQnniJZdbezKyvwabd86sCEZ3tFyd",
  "key3": "9LUrY3ySXNB5jKMeVGWacv8zqapVo6Hocq3dugKEePbiAtUuSX4RfXZEs9CzfhN3FMLyWYbjbkGxMCEuRtEJVcx",
  "key4": "3HQpNEnCXXSUWNAJcXPLtEsagvWoXNm1DnYUYFYgphufbb2ZXRKHbtebVP7zBBy8iD2FUr3WTTUJEsxTfJfS4YVY",
  "key5": "4Lrcuqai7vSRqMJ859LxVFn5rmHARuixhN211PVok6aCv8exzx6a1pFc4zdpR9Dz9GZ1TfdYx8Z9nZxEck7jZSwz",
  "key6": "4S1Jef7PeqvGdMKETXQMfDjpi2jfciRgcJAZLKrRD9i6og1o7UaXgb7m565EPwNHyEaoUdXY4gFA8muVBwQRy7qN",
  "key7": "3XXEviFk3ULod3eqFH8Vss8wsKwwzzph2NQhQio57qU6Xiqt6FQ56mpMNo2r3qfY2L24mTZMTj9wBoVpZwPNgurc",
  "key8": "22j63WLSJLae3sbU2T6Sg8bNXQ1Vj2fm8UfbqUkMKXRENE7zdBdAmJ57rHhaUPtdMHBQRVK53iPX43gBmHosKqZm",
  "key9": "SWCK47688oZ9fVLit3swKs9V4HCuYGuHCoF5Vfq14pxYWRVrQTqR5vvS2AYJbxHNJzwWm2pouULGVB12t8MwBkr",
  "key10": "mtxvba7gK9EoVRT8CfrfRhPhPFHzeoPaapXF47B8vhSLJmT5tZyr4SuG3gBgTNqDp2DtCBYcFy93y4x3XtUNYHn",
  "key11": "56vwA3Bm3waYCawymgwnZ8i5BMzQsBPg2i3gjGwxWp9PWkgNHN5zqDCNB45XSurVeKUwpTpt4na2ArY9oyDDbht1",
  "key12": "47sNfwsBQrgx9Ctjft3PdT72iskREfuxs7EkT4qzYVYZLqqxmNsYPY727Anaix3pa6BiPaABKtGjk6BXDwi6Z7dX",
  "key13": "4LiXwvpLkbFqat7yzsKuEpwqhWKpyZpKKjpsxNgCNMuWfBsnNS4xNT12p21DQvRsBKbaoNFxPYEVYtdhLrKPFMLh",
  "key14": "3FTB8tQvQMMQ7mMviMuw5F36jRQDp4gKoQcgmeoYyTsdgFBrT42Rm6W3hTg5UV9LywbVDgDMBW7LnHnGY3yxX8iV",
  "key15": "5xV5ft67aWuSrFdu4wWV8Dq7pSY6PptcubccGSThq8kiVzJP6XjvZxbcTG7SjCKoC6ZnG5WgAubbR4tjRg5yRezN",
  "key16": "3TEird9m1TG9FEsRuchhivdxo2EddhF3ruoSirgABNVq4Jox1V39pgYCwrkLJfBSfSbv2wRCATKA7gXjFWfYHmbP",
  "key17": "4yY5VgiLMAL9ZgKRDijqSmgHbCURd36bneawsmzkLcPme8CG8advL68FYEPSq2hTHLimemH3st8ZsNdwiqLuFqYr",
  "key18": "4x9NwFEectwiRHtD4kSszyhZ7EdoD39CL9jetBjrssW2iXRkYeRE5uExmzWksmW3T4SjHHwjrxZvqkztzJqr37kP",
  "key19": "23xEowoRQAQekRLs6SjEAwYRELrh2qyatRvhaJdufVo33ZKq2caE8BkFt8sTqqMxuT1d4NawFf7EzJ7KA2fVBz9x",
  "key20": "5zr8cTZoVhUftXEjhe35GfqScxXu9K7aJFeJ3SJK9kp5eNznZvEK83ErF5cKcjdSjqdFU1Xsd5RxDRTQdUufgdZf",
  "key21": "5iwNoiank4yX2U7QcXA5Hdq97BdnciuTmbpqgv5dDHtjXrpqgAV7ngFQZ8EDN83Zp7zbKMfgpdVbtSVsQZoVL8V1",
  "key22": "3VJvFXENt8orX2zLVkQmMtfapwuqZiNh8wskciE753ZPgFiBKjLcnA2kH33jUn9G93PZEeEPaSYwBbFPkdZKgh11",
  "key23": "3Hio47moMWMG39V1nZhdMEkAGxQJV9RkffTwdGEQKpSGJtyqzF3ciij5tucUARZ53jERCKNmiquMv9w98mkhPrhd",
  "key24": "3yVUE38oqijF56nTLuzaVqA5PQMd488axdEKjb8uxrbZUXKSMvh7f4bJruCycr5ReYVHCq4zMXcnpHV1Y4Zs9ZCt",
  "key25": "4QvHHQb9WyE94zd6BCHmnaQ5j75oAdf6HTd6sDNR7t3pyjNtbbFqAyFziq5sxZd9JcZZWi8aReCHZaBqc2DMN9VH",
  "key26": "2sqQkVK23U3EueXbcsVfaNrUQUFEpFPeV5UURNacKj2hVupyCh9M9bettfUsVQ4TTRTiaAA5vwLNz3QjXa6TeAvy",
  "key27": "491aziZ1tvV89511GJSaQs5Xdrcv7T6N9WdtLquArGBrvjJP9n4VnHnGnRRqh8vy6L85ryfg7Z1cptKJUBsaHCDB",
  "key28": "3drrMU5nM8eW4Y68ifWzSPvtRfVnHsi1wfsEyQwSUPyYMWv6UECHySBXomYPthBzK6HCPBLwwo8TUWtHxXVfG7L9",
  "key29": "bwhG8Vzf2Gseii3eeTqEcf3z5SM5yzCmTQzGTSFZ6d86pBorn6qCeH2vBi8b3PkvhCprghXAeDjXZ6CKY8uC1Sh",
  "key30": "2VTGScXnNeVJg1WQtpZoUYtQnu8rdrf1MAhepHVEftpCg9Cbc1RZtJoSZhMXd7h5zbXnnUVefTtnQ1pZ5VSLcc6p"
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
