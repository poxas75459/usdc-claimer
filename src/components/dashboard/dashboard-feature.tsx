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
    "t3NNquzZz3KJJoQPzd7LsGkLrubFe7WXodmCUF5Zaje22Fo9gRq9NyideGaV51DHMJY8bhQx9kpTDxAwx2TZMwm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QVq1g137CMLtyS7yzCPqTbUsSkrwj1rKSd79hPw1CPyXgKijZGNJ8TBP6gn1g6Mjkiuxy3LYj96bHqXEk5jdQL1",
  "key1": "3XE8SCDLV3xWqHdcxcbvpvVyraJSN5HnXMSaKz1SzpRqoBWK7kFPEoLyB2DmDFsAFTbp9YmHxeTq9BRU6A1cyYyL",
  "key2": "4oR76QXUKoWGsCVYAN7isLUffwbQzNFSMCRva7Jo1uq5V7SLypeQ5n6d6pssvpKcFd89CyrTAm981QQEExi1kYto",
  "key3": "5KhHkabPYNtzyDQJ81qPcbXmAJ47sV1GXYwVbPCQT1v3WVXeb2z3XtXBJCDYtJBPAKFPRLGbcKJeye8XEsXoVgbe",
  "key4": "3y1SoBupUUv7M6M5RZKhiJaQazvhSjvwjedSS6XgyCdxBrx1K5kRCFoUyGcw3DtVeA3jqV2ZJssx8u6uHgxtByqs",
  "key5": "4sEuRkQmpbe3cNi8Av4NuFsar4b7VmBfvbqpQMRwiCUbRJsohej7VWLoL6Em5UBZaQoUJdyUJUKHivutEsqydyQd",
  "key6": "2fAsU2fDKeN3YkJbLfYuNvi9KUd1GAC7KXr5RdxDCQ67JnThTdTxs88v8nYWKyAsWeCJj8mU248aVG7kkWcRzzE7",
  "key7": "4VYsYUBddswpmBZNVZwmDXEkBirK65XGYao3XmiV2FMpG2qztD7ys3wzwGn5dXfk5gmS6kzwU5gr6GqkZx7ThLvw",
  "key8": "eEP6vzAEnx3Uvedhq4ieZjiSP4yG3yFJhfnGh3Qwii2FoMzQrB53ZBaSJWR6EENc9JjMNZn2Hai2KTacJuwFcL2",
  "key9": "2E4iBpuXs3ewezosv2kU81nz1A7NZ5ArnYBcJw27absDag7oFLoLYmuSDJuDcWa9UzcFGtiPoFiGXZivHHAYuTEb",
  "key10": "36cX9r7357UABmAEWtoqsavFuP3xXbagdFECGMVS16QZBE18asgD7ku3eAYqYDzRt2D21znScwaM7CMviWUdFphr",
  "key11": "ejVktNLwewBSwVXXHRimNtfAgrWHzKubi6gVAz4cPBU4H1u8FMeQecibP6ptxs8vcKquBmk46MBnFmZvfFTSfvX",
  "key12": "5vzWXs56NQgJeBQgjdPgfqFe2oYkD3TGTEVuzPZVHQze9fVMT5rPbNb1s1d57jJtYdje99RjP9uQpyRaWAtyqhjv",
  "key13": "5cYJh4yb3Vzp2Gor9Jua8Y4tTNgBT3FqE2QBNK3nyqRYioCsQhjUKenHcSu74qeHDL564L2f7Nim3fLf6nfeS3eH",
  "key14": "QvZksdCrMdeXCxoFZVo8D8r93qfu63eGfjBV2sEXw2f5F24WifDEo9xc9fTR7PDVhrj1Ff2PAeF848xv58M61qC",
  "key15": "3xRodwyKbK7kVrcy3hp7uyRcUMNm24GC5PCvxZcJPsU3DWUHdpLL2q3oBFz3K45hJCLBDQWw6P2cdgJwxfs6Mo6S",
  "key16": "4BbbT6y4HL47jbb7asjRNJaBxUBaLFJJY7w7sxXkKmwrEZPt7un5n6goc1xQU5Jbhe1q1zQi7nf48Futu8yCNz1p",
  "key17": "4Q6mKCkeSWZfVjrtb9pCAtRxhgbsG7VttyEoqJTiTHWaSCXB6WjefSgExgQMs5WQCcwj3nYvrM6CqxFFKZXgD7Wr",
  "key18": "nWS2iLcFiw9WGM3ipTYT55WGVosqMiqVxQsrppoNFnSsoFu9rs4mqsRJ5YvdbQmgnP2jMyLqFEV59JWZXHMri5q",
  "key19": "5jDpBff139n3Ks61Yhgrdz6hV7dHiuhHY6mwxe7HjJohhChZ7fxNLRVmua1uJZvk9Q4Bw3DqEU3naHuHT5xjufqi",
  "key20": "2mAGPV6aBEPC2HcYYTZkTNomaK9cim7982yXufUoDZ4RATcp2o3hYDaEBbnbEN5bZNXFS38peU5K76Cxru27oXKh",
  "key21": "3p3S6nrfus2jjjS8emQkGdHPxmJoRnjTsirZCYzgt1HKXsQugBg2LGewqrVs5nRFppyNehbsGrkB4FcHBfHWYb1S",
  "key22": "6UrWBMjqp77LuPT9yq56ZiXAUVZuXMeqSePVJsgcLP75CrYX3cM53wmivtmNELnEt64J2Hk4z8CNVbor8MaCJS8",
  "key23": "WiVRnK32CC8tZDA1pBbNoedSnLuybcSFtctoKKeaZTmoM23SVAp1NsrQiQzRoCMb46KMcNECVunDsLUpUZobwmx",
  "key24": "5MP6SmSQwmSLeS69gyBN7qpRBbm83ftTvBi3yEkqYiEo9poEaGAyQdyia1FhRoS58qRKZKGNHXdaggSxpp7G3XN1",
  "key25": "3fGJJfBFSnJf5VX8sZemnwcb89aKKBDSVfR6WojZ4UyzPsngMX3vFnxXDcJZb78shpoiwNmPFZCw4zSjiN9UihMJ",
  "key26": "q3kjHG8n4RTkbnhJNxVeEgsUrngETUA1fMFFKabpPHJRuaY2Nkm89xent5xo1k8rDqwiY94SiywV1awiD6bEdyT",
  "key27": "657MSpoA54DHq3fhqiwuADNQaZXVR4PviR7AQAVxKHFFs45KXworiUqypFU1kcChukezNEu3pQBWx2BSeFdK3XH4",
  "key28": "5B2LC6VW9EYATA9JD11hfNkzzJuz8rfuKowGd3dFWWwSqzKZqFcuPRqPzqfF2ppS11nbFiFStCojz4gKFk7WHd4J",
  "key29": "4FWDtrYCF5KHHbshHg4eRtSMEwaX8B6QjiVX2rGtdLDr9Ank21ET3M4orsFsCER93VrEato8sa8igmbYJo4q1mSE",
  "key30": "3mT45RGvG8iv2qSEyZiN6SGiPFn5joHrpF9JnAYu8Seq84YsAX1bcNLuHvhuFdcNh7QhzBSnfy7C4EbwqsRj3d9A"
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
