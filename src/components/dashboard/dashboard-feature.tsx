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
    "3Kh9c7S1MxoDQM22XE7QYkC9n19MCXeuFKqVUQmvdFM3ojGkmExRWPwfbbiKP53FA75zzQPcSUZ1v9regGwUqr9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "khHKE1qA3uDJYCzmCV4VyCbudHAmJoPQvvieeeTDhV7hHVrTWhXyQUd3RddUAU7dsXq6LsgZMcLUuGkkdArJJLn",
  "key1": "2oxcEdyyMk5DDStdLqiDWf8xP17wMCJiyD9fj8Uz28r63m5SKut62ohyHtuXXaG89E4ZHZGihtwD6Y4nwPFwMWen",
  "key2": "3RC3BzKkCSDiKK4WepS6NDrVxBVe6SNoiFUt7yTp2NKXdBS6ZpJcAh4pcY5v4H4n1YetCMQtP2WumQYXHf6Zw7c9",
  "key3": "3wwepui4rkiDjnVxvr8hRd1f8uzLbVscz8RAMHYxyB2KXbcNrnNQ9aNCSyQo65jtpYRjHBTHn5SMszMCB16MqCkU",
  "key4": "5WJ9BXGEwqYqRN6tRd9BXkZDwZQgnmre9T4XfjxxbGsX7y2chDoEAKwdByNnYAj9T86Mb17cQ76735uQ8FW4VWN2",
  "key5": "4RCtQR7r5Rp6Xw72t6R2hGPta3nSEskaJPLZMhKPnGh9DHgmVWTmm4pLfv6wZQVnPsSv6RvyJ2szKa4DeBAXBpAY",
  "key6": "2EtbzAcYF6X2VfM9uchMWrz76mWBW1WJEdrNeL8VWZ1HrVcmgREPnizp6mgpiX9Dp6ycDj8RgzeT58y1fi2DDGmG",
  "key7": "3eAR3WcQo7MNFTmb1pP1e5fgyFQoh6V57ZxyenqJi1wVGb9QRcTzTFbnCkYEY8CVMz4Lyt1EzxXMtas5ncNb5B1Z",
  "key8": "2W5ZJnABe2tSyhXW1v8hfdMScP5ywqFGnM11ZkYMXFbaab7wNyAjMpcZeykTZhN2BfN7qDfeJQHxwxisyqBsCF86",
  "key9": "2jbgUMxZ3KoeJFBCk7Nv5Yxi5BgqakrqGVoG9DSRV7XGGbVktXbqCcrkp3pCvk1GoDkS5Lqu7dqkXmgLPvmEj3ce",
  "key10": "3JBt9APMLKK5MASTLeheN5YNSmnJ3SZJvSN59s4syb5d2fTfsBKYZFquFPCwEfr2wW2kpez9envV2JMwmdCtpF8Z",
  "key11": "5Fs7qARe8M7VNTpEJVoVKm2ohM5PKs598y67LYPwBJeptNv3gfo1Fs31sUEksVRW7mxfJ29AVBCqfCtwFUkquJcJ",
  "key12": "2rMC8SV7AVVC85rcbyPNxDYvWByMu5gPBGpd34mNZCD4mbcqkNQ9Cour9Nxx1hQhnRDemXHL8yx7FjLyyF6fujGL",
  "key13": "3R1BsSYgovqxvj5KnxbPPkxU1uFpZMVKy8AbXcQ5u6k5qirzgUQsKPmZjN3hJtLWq5EdMKpXjLUjXofARbMEjWRS",
  "key14": "2kK3uuVBQfYEFShhWRmmUcYVyEfozvteH4WMzA7iFmABJDQiJQ8rcUy1KMsRmb41GLfomJLGHeYd9DAxBaC1zp8L",
  "key15": "5LkaavN7UgkEEQ4MgpSxEcXrMwDKd5mT5waY2PzJ9F4Dty59nFthVCTa9vxQQMeVNXLBqeRNPVLKtmoHbAexHxCx",
  "key16": "oK4ZkcPjXe5VBx5MqKwqbuARGdgqfV9czM166NEodmXdbkCT2m4aD2yVZetRfdb5xodHzbYNXuEXh8PthRu5YNC",
  "key17": "P5srtbVAwBUsuzBw3XQRyFojSXi9puogpW6BiprEZ7dyc38ieC75XNzxdErYrXxEzCR84Y1ERVQrEQ9jw3GrgTN",
  "key18": "M3WyefrVcdhX3geZnryKwKU4QZx99HzsJfSfqkKiw7dM4pnwC66wMFweFQqb9g56gJzaAMKYooiFdwbBWfPbbV2",
  "key19": "VMk82KDysBsG3SSfKnMvxMc1DAictc5Q996fiTuehu4ZUCadwNwZUuuN7iQA3soBu7bgJKfjxyjJEHrKdMwMyrM",
  "key20": "3H1aN8c7J6NdbMsXSnnhx72wvr3ER1vNAdicxw9siizBR3BZsoE87LWvw21LqNrcA1f1ECh7K8TRNdjxSkEpgXih",
  "key21": "5sbgEo26X2putBK3yMnrqRAXqPezmBWADm2mgqXPhBoWJFKdz3oAYoKNktNiDvPA8ViAEJJwBtA9aV2UXkBtBY71",
  "key22": "2xJkoM5CxVYwxDpFc7T9SUJjVpBhKYQH4SV3EHxhPeLRBtNt8PpvPrN8CzAsdmbmT72aVAcdb8ymwcW1hsUF7GwA",
  "key23": "DJRacsuXeNhFxhD8udbRypBytBDQNN73kYXx7E4cmnHyktjUSGQg69dcdUFKQUrodRhjA8vEgVLZPue4mQbGuXz",
  "key24": "dXc4H2wgL1DRp4UfkZ216wrUTBppwrzSMtW6BxLQNHAqJ7bizXL6JDQmAaHGA7zQcvZnPZEQAdMuP7oGUr2npyr",
  "key25": "3PrwFSCUHrNPLsrwhn8S8s6dB276k3K6gXffm5FLqf7Saa5FUartZ5A368ZhYoFowcrC89UtjXjWtFAF3LfcG3Du",
  "key26": "3ga2ugedR6xnRnSjTF7NDMaHAfUHdW3n4FwaG1qDL7pJEd2jAXzkd5TU78M7trkfLxY17V48q2drsHzmgLENaAcp",
  "key27": "4iAmTvyyng8CHmdLaaJ2T9kTeogK9bKmw8Abe58uLTugauC7kigHfH3VVYz4iCw6U9My57MYZ8yU8SEq2QKw6wsX",
  "key28": "froeGYu1eQFQzuToV46TyVWvzPg5FzrdGG2PHfvxN4vLYqpi9GHPc1pkirLTzGmtb6XkzcYLpyajJ2GA7G4hFVn",
  "key29": "5zzKGFuebBJMQ6KbRkh14jAfQK8FJdfQAM54hDJQtoo5gcjVDWqweVQwJtUDcukUD34spTR6grxqZ8DA7yiPPL4V",
  "key30": "2njyvueJCMBpiDMBcXUMTikwhcrTQ57jYTF1nZtSELi5dKcZJ1iwKG2SoQdJcmvimhD4EiZFCnvJ8NTm2DsAWUQG",
  "key31": "3HU69QjvLCf7p3UbU2t4BGiVasjYhBTSsQTKvoSLrihTWKkyGHUkAc5cCana9bjzUGA8QRHDFCqxhgwP7J3Y8wiF",
  "key32": "2qpKgnVrtAe9RZYPYWebSajTDsTUfUPiQWz39XzYawv7p5fSNvMCetQCw1YxXikpdwazhTzm7LTtYxEj1qag1HUN",
  "key33": "5PGzfS7QkMGBRiW5L5S4b5AxU86BojUQvxniiGZwv1hJWZRshgJKy37mnQCyRApLFbrVeUcJcJWRLiLzyL4Z1BaN",
  "key34": "4NeTg6ggy3mkohnCSsED9iRHXzAqpgRZGJDmJpEEePmrEz7A4RsDaMTMFng8vRPekJNBPsQRTxd4gKqYeWkry6oS",
  "key35": "5hULfHvfxhBED4UqCopmvUYuGriBWDNP3yykax6h89VAi3jMkvLwkbpmiWeV3MrtqnxbarC4objWdFr9fDDRdU87",
  "key36": "2CVSNPywBvYPCuaj2dB6533JFKYHZHDx7NLan1jbcsqECnMUdhGzRxwk6jGzw7Bsvep8ovYZaQAanabXFSvXErQp",
  "key37": "3UbduPA4UN6kSsn61w5RVEof2YS72xQQgctu1WpGAMEku3Tv6YirZJFVtZuktAsTCCT62Ezfa84UCveho9enjbaK",
  "key38": "bQ3aGJQqc8jDqdvDBAha9qgq27c4AbABHqhU2gEqpTknDPyeTe4sNy9QdnXriDxkQGphtJ3Hhdzad5SXGmuZxxx",
  "key39": "58M2pTURFgg6XnSBdBjzXkUPCoWsYm8Gh4kDPbiAQgeFU7x6Fobvwqeg6oi4NYzz7A54BgLFdUB5UGTBUa3RTRMa",
  "key40": "4rcc1tsVJXEq6CraJJc1gawnNREmygsecqLFDFRSySjwUTm7rpT7gc7wWPeNRzRMNSVaDuGiBSdwZ2Dd8djTBtFX",
  "key41": "4zYvSgEjF98FVW1fnwCcg7sYQRK8RadpYFx149dSeJTPhB3x6XBrnf2eQgV37Q4LXW2aJQTicURAB4jj8A2za6D3",
  "key42": "yT7ccEBTeFqTxkqfCNJsy8wzbbGtWNL1z4iHhJQQbDr6Es3VGiXzd4N9oXrPVMqFWqHKcQEujDM3ZK5ZgHY1w7n"
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
