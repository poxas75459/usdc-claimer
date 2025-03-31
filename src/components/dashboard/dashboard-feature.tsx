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
    "4fhS8gbd2ZqZJvgT7215K2FQdb2XX7FpT4td8D6kFN85NRdiqTKfRnuCh8jwzftv1u3GgSm9UzUTrioWVnYSrF62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NQDE3ZP98dan6RNvjPxyN1hM2AXSQxSQ2XRuYbwitRnunymZxQ6rtEgPuS8Gdkdf1z6vFEAqN41QmrJ1KS1xPf7",
  "key1": "4jZDfhe5sneSGKqUoAyjuaVx5wQfpe8KJieQkzGdZ76HjfmKufpvrd1ehPmHUTf2cpTGR3idLwzrxCHvCMy3E1nC",
  "key2": "4aPbqGMdc1FGh812T7DakuPLqrpBZa3aZC74jmPbFVWbUtcyjxZY7iyaiTt1dN2qvy5YHXJzXeqacz6rRKmK8Ai9",
  "key3": "5bCxyD3t75tSZvH7QPhD67Pik5GBAo1s8QssExHMBPASxwWphwDpK2De1vo623p6vWcnuzz1XqbeMXwoSpXMJFH",
  "key4": "5QSCjX2bs4yEf4MjgDxK6y9nLn9jF7RKqSs4BzUHaeLeyZaiHZej47ED15A9CkpeQuXXhTcn6AS38cDmUDsAWoin",
  "key5": "3jVPB5UcwuSj7W96ok3mshNBhj6vgc9EVSQVQaXeKzKYwWagCpZJBf1Y36pAnuqTjTFTtrR7Jn6NdbLNdHMb3g2L",
  "key6": "yFXNaK7no9yRPqrUGF5BwBWU1yjtM1VAxqudRajmdRdumNHdYEY92nubyCAnC2RrAYFuewLoDXQ8wYBHoQEyPJd",
  "key7": "23QzfhQJ5SKcVQ3RdpwKptxpjyQK6kwWVoX9LJFa3fv2zLty4rHdkYbnqYky6qkTsLc4n1MpA1PWdR2SfUR6fAp6",
  "key8": "3F6SrS9FDkYiNnSaekcxNmiLDfHRAxNEM2qJohwXsWJ1Z6gDoQLCfds1oWmueLY6pj97UofYcKnWEyGXYL8V8smH",
  "key9": "2ExpDnYhvgz9efXWf1pH3rD8rVAaDdP5CQ1gj3ACu9gTxuf2DsLXh4aa1rRKg6mzRdE7GQf41c9WQ7ozt38dwDAh",
  "key10": "28o8ne5GQkB6ZdvGSMhrm2ZZz4omg4uL6ynRho4hWR1Rs5PkLYZVTAUJyEEM1nrqe7DHKU9rnTPGk17MeFKc3MwA",
  "key11": "3TZqHTvgvER59QLgRUfo4UEr3LcX4VDHEFU4Y3pSA1JviVWR2hrQtTh2q7GdS87co4DrTaMhWzLq51DxhdCgKNYt",
  "key12": "2HcfdnSZ77GxjBwAPPAkZcKYAiknpkFQs3K7FkS42pmv3oBH1ajj3CXr2QHkPbHtiHdbYpo6tcYo5ChuZodKyj18",
  "key13": "3fpE6G1S7uJK48s494nvoc3RkBYg5APpBAwVZjEuTVgsa5w4UNViJzEakz3sbYCnR7rUQhFC752zQifhNvC4HsVv",
  "key14": "3ic4TinES9n9KgviBCdnfjD4qQKDev71KfCqvzTLxWCBafkSLKZtXyC3rQ7dVMpcawuauSC8jnCZB1sgVMSLP7qu",
  "key15": "34Xf2xMg1U66wWpw9hHTcfREk1v7kVuQx6pPyRcA1vWGBVAh3Sx8gsoPKWZz2zAtKZR6HKG7yJae3ooorDR91JhK",
  "key16": "cjoCfHmfgS5e1bqSKspkVGx4eCoz8ChLhvfV6zwva2QMGdYeE2fCqUJus3D2yPnE8Hw7Giv86AZ9kCyVpX3MDri",
  "key17": "3opMWQ4KLtWdpX4HvUgjpLGGCDHE4Lnmu5XCian2kwQLQsM13bKXq2Y1KEabqociNoPWgArZ9XGC4zVLp4EtYpWQ",
  "key18": "5TjZqCCCo9dtAi6GX7rTAad2aSTygbeGCwpLSE7huNePiamk1meA1SCJtYn7bCaaANptBT7Bd5n3giEUuCp6fG7v",
  "key19": "36FedDVqXuFDiF7AMSt2wK6hBJcAdZtqbHE1CHXnZDC8qQ4i6GXJfqupJxSQw3aSN3WPWdJbhDAbxo7BQcdfDjd1",
  "key20": "4aHY64NFqPKimSeGw1JDas8eP7qao4j84otSBBH66RF6Tyz981LM9KrUkyHj3xHZkEzz81MVC3771vWQ8CXdSuEN",
  "key21": "3CTzur2kFzcUD5GrjtfqnQN2NcJCjSbZCB7zv9m8ShZUXcnE5Uj5b2SMuSY7kLbN7STKSE2H7cpH7ZuNhseSeuCz",
  "key22": "5cVv8AG6X79rthRpXp5TUSTmUkAPqYtD7BU6YySTrYy8Ut49AyT5drEuFRDncjvBAXAYqtqUWKPJgYBDtNm54ovy",
  "key23": "4Q1cPHondd3oE5w9pMTpyqJJS5gGr7RJFrQjM8eR5nheunzxnkhn1ngy7NfrSYGd5gtZZvvhqSK1b53CV4Zzbksu",
  "key24": "3JkB8DAyuEFFqcw6Pp1kh8WT2CGD3N1ub1ydW6mRjpJLBamL3x8Bp49BcmCkdxtoycAH2xC5UeeJ6jumftzA6HQB",
  "key25": "aqKxqWvh5h3aC14H9k4g1Ywd8xnNkRN2mJ13fxsEafsq8LrokucHrDiH5i4TLW8qiAwAn2C5YsG5bfoa9aHCzrV",
  "key26": "4WrqsRSM1LrNw3uGkZGGML2Wkm3i6267DGgTvUKcM7xzip4YcXy6VZDB78rQDFMhf6fYjJZUQ1uLssVhpYrpg17P",
  "key27": "5zpDVWJQYBz8uSL93yhEjmRqvg9YUyv2tFDXYGNa4vNwoXBVjK26ZaGaisiSdiSj33tuagcka1T8kUfeG33EoYrp",
  "key28": "aYhG6PDjt1V9J1VeuQ5hnUwDM7CEDRaHPZQM78K6ATwU28G7y8oXfXPH4p8LeXabYRnijAzekgS68rJMhKLbkse",
  "key29": "3bLqe4nM9NYBf8NSu6VoB13VBtF2GiRw9pHJCpGxy45RdpRD5RJzg2SbabZTPjnjgcFLJQjK2jnqbtRJiUC5geQX",
  "key30": "n4wUUmBCfH1Ete2eTrC6VsZazwh2EBge4fBdEoaFvzqMt2bJXzhq5ZHv8DxvRwFmvqLpQ5t5kguPiFqjKj42oJ4",
  "key31": "5rXv6R2G6Ue53781ccHfqr1aqFWd82TpBYzJJPTjuKWaoNAgDBbpcmvH3523rugGC3DwXyVoqL3dZ6k1ic2tx5TG",
  "key32": "5ANE8eXPxsgDK94r26q6EdDGNPBx4TuGdziJwjXqrCWYPaRHg1JMhj4hPjU73FU1Z4GdhL2anMo1g5qorZmT5xnm",
  "key33": "3ge5VQP7mp9hm2k9Hqk8JfeNrrKdQRBodscU26y4pBmeP6vggSFVRWxh2p2uk8qr4HKQthskx3D1esXJraWzjZ5F",
  "key34": "5DFtXGPutk5NZmCEZdXnsgrS3dBenXyi33kaL6oqF7TaNN9MzjqsQbG9YAPBY34uDWnyq4FrShNH493AV6TNJLv3",
  "key35": "5aprqnStgwrPG4BaZuJfpZCqR3vRgwKKTb6jJopRLztn4dUpc7tziKQwBNih2MkB3wGjQ9mXojuFHKtwhfLZJMAK",
  "key36": "4suxfkWPNjfBRBe3cxJXv6Wmo5wtXoiwFDuzYA8kDggUMsWCCjfrNALQqudTTPzR5Jb4d4iLvvaWcnbZ5HCUw3at",
  "key37": "4JgL2F7dAT4Az8zTfJ8uzhGEXdrJEHRmrLC2wiUF3fZ7fv8Dn2TfZjtJmqob5WAMcGsgHPdva4k1PciDrpMCV8Ba"
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
