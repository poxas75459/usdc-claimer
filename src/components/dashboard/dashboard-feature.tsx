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
    "2Xms3WW8WZhnBeYwHjYLHTfLSZ1WQBBnhBXCiG6AhxUW5eAdKaE2a6TQ14j8ugp6i3Vp6Xos7xLdfQwYHGRuAM4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59iCEFC7Mexfk5cHe8R9mETuKfHpLmsGRrirrhrgZJu4pEE3UUGJcuJ55BV6vLPKmhf1iweEKyDiZAxttxN79pUG",
  "key1": "BvsJbtLaqKeMZ7fyue7YveDkGYteqpdB4UNxwmgwQHJaxqkWZeE9g6dXkHcefFsa4nc93tRYLhY1DpzaT6cVDHi",
  "key2": "3pJF42qFAqxe9im2MGkDU98GNzed35izyRZSjUKKrE1QATzzUB8TEWZ99MDhmqCKQTQ2CUSPGs2UWW16QQbhmdyM",
  "key3": "5aCxhmYmDFr9QgVEqpzq39LTCcxwXD6KeAxPbgkxYLBg8GNEUZFMz2E5PJzB4bVPnPFj7qAs8BMxTrHAgjEmYbg3",
  "key4": "3V76yumsDopWk5U6FrV4YRPXMWFDESVNsN7KU61iLvs2V57epyHSs2f1RU6vvkAvwuMA8dFx6P78GSJmeodyYxuT",
  "key5": "63jSkiRB4m39RmZc8gDiCZ6UmgsznKwQRbvyfLBiVFdFp6rAEo1NXuV93DcZd6Q2S4TiT8xy8VvfELAXoK59MCfR",
  "key6": "4z7Pmi4ifjdatBMmFyAyn88hzqnuk2e3BQ6zTXJPJ5aMtHoWAzEj5aVkfEkyJA9YQqiUmBoT7DtitTbXJzBet6Ds",
  "key7": "2knWwEt8MEbCPwSMtkkrQykvPdSwFBV9aBtKeTKYnXZcwPAzWBZ9J31YAprpwgF8Yrvr4xziZwjMtEbVfoW2YxU",
  "key8": "2fxh42pkhGZy2iJpAhpM4XNNWjYtWt2D91eLbVjTNWk7oTJ974AqTyXXjSYyvu7qvMxAYmRNLfSUWv7HLk6nPwhm",
  "key9": "3QcEuKuVF7SU6NzZ3DoZ2zj5hwbtRPzGEqyxHb3R3QnN4DqqpzvF2c9gYCegHDrW35ggCPTNtZ98MyrT8yfzBwNC",
  "key10": "3NhPLzWEuHho1Dz3MZzNPN8qJJVAT6WgvU9snKh5LcaeZKJ1EyefmPnJxTjbSv3BPZgrbpKeBTYxpUMzQiCrRbzj",
  "key11": "2Xyx9rknhk57MGun8rUpbGEpK3SkaRxL6nrfjzegRwpj4CAgVgjE1pDvsha2ahBAXWapQkCTcczMtHDfT3ucD7Ym",
  "key12": "4Xaa33EdUZM8HjuzZEqNhHvsJZBQ4VBbWaskcX293f7Uy3Uupsnx5iU6MmeCuzeZp4gQEfSZ4ygHVvvm4syNmeWH",
  "key13": "3yPpjJ7c6e7YD8261rVu5B7LiQXr1cywJaRR9Uzwjmp82E79uxYSXixYGeBmfzuRorvYSzPS31nv6WemopuKNrjG",
  "key14": "41XnGRkhJ81Jb3ZY5DGmYZYZFC2dFL3gcsVRLf4Psyz1FT9pTtdnM46K7JYK6osKXWEeCGqMUJHvqwbrMbwfiEoo",
  "key15": "5WurweCER4VdeZQ6R3WZbKnyndN83mLh9TqAofaZazdvEyq8UXeaUnVFHuv4RAq4FLKjPhaBQwyLVjSpJtRHsdWR",
  "key16": "j1Gf7obxdq5KZk8vnRK2x5S383mTvNot63HutvmPqFc7rSvHBta1bk914gkDxoaYLokgTPMxJnfaRJpFoPaXx6Q",
  "key17": "gDwDsFr1e12qpbjRG16aS5VQS3yFCqQBwG9UpdEMTEYtyptxRmrzCUzLArc9T5b88nAm66R6FHTRzohtQbvSGhH",
  "key18": "4NA9meGkhBtYv6D7KjNeagRvGFuPTFTjneuPgtBetyYHQ5UzKeE18baci9eLzHSWBvFZM2Uc9z8Xsh5bg4bQgnU5",
  "key19": "37fApMBRXy34mc7avsmhtZotK1EUgiDpFjN9pJFrBKK3NZsewkvXaNtTyhbucWWprygC2NRREyLkoVa6WpFxFfTE",
  "key20": "3ZqwUaq1vaRf4FWK9eB4wbCoRSmLG1HCgJtycgPZWomnYC3JY9tuTh7bxhBANBUCqrPeUCq1L1Rgz9xMVn3zZcrb",
  "key21": "3KjLBz9BZdjjobqUypRNFAD8tL5NHF9wgruETekuhQegUVN4pipegcpgWbAeBnypyUG3QTBucaBt6xo3yLvHG5Qr",
  "key22": "4RahYtt5LtEafQsNEx9o7WbPdje9iTaeLuu8KFtwYyjgu9pb4xnjP6A5j8K7t6rghmYTm4oStX5P7JhYuDBXnm75",
  "key23": "4XJ7utrD4aYd4NwhZGQxcJAAdpPUwZtKJyekvrj1cHcAvoaTYqAH28wq1i5ayEB9WgwSmHxGGp2tKsAdhRZ8cnAh",
  "key24": "31gaaxSXH29Q1tXcRaFsgkMwADK9CuoqPL48DtPxmujh3YssnXbgGtYgpaoDNzgyvvK8RZHwACcKgMhKMtwtNdHe",
  "key25": "4cHDMRnpe3ALmVEeVri5LSKqUUmNNtBk139d1QjRur3Sx6CCASdKTdFCLyB1S2ZS4tjmuWeQhry8GuyepkfZp6XE",
  "key26": "5LYchiw6HgEdPtk23cZUTFvMVFSve4AseRqPDWdF1V1YHpdp1SoAkG4V4fVu7DcU43BHNeEba2uBoiaLszVKsiYT",
  "key27": "4m8HfnNM6Cavysg2qn2rkCwR3JLy99xyYc2ES8gseZmaRcd1ARAAriZqf1bWj19dChSnQHYe8nLHVr9k7UwL35o8",
  "key28": "hHzMpdCdWYAmgmtTqScr7crXi4gsc9hf54cg5F4t3RxR1h5FDXaHdC8jTWVb94ciBs7ffuKQknEqyLdgcTafYFV",
  "key29": "HwxzkcXxZG7MXvrALoLXYrJKZeTeeZYs51iGeZYzQPKHuGxQALEUeEpJLenWLocgaXGDS4o74KMscs1CiFhLaJV",
  "key30": "57vS4syC1ehBvgqMo88jyBBYqULNkK4RqwUgFXjo1zcLpHbcxrWauY9BqB9QxEqaqcRLfkygQc2jpPxpuudeTDm2",
  "key31": "3KDiqePESbNhNA3FedBmpkUcXzSoTGJ4mNWVWbjFmwS1vLopCXJsnf7qHSwEnFUrEkhwFS1kjN43GEB67B7ySVbP",
  "key32": "3CMgvo9Zgyr4TJuSt14b2exQUvpRRPQBfYeSPr7zDJeav52CFPKpCFbTDnZBZCh8p93YoRR6Za9rin3xgjk3bz5N",
  "key33": "4Ajth6iWyVMwQXGDM8cQEJUcXEaoicTgWJNg1xk1oaNjA6v4MrHrpJkRQwZHpUb92xUhGefWUhaRB5zwSrX1EKiW",
  "key34": "5qVc1cEhEuYfugsKc39GAvtpUzXY5No3g3QgcbPUcTPbVWKdK9U8LLGYndzJnm5ndhtvRwU5oEY1tgRwp44mMq7",
  "key35": "3e7ToTCyuvMZ9APbPMnr7HVFJorNYoMHpj5qxjntDPovkcNtEokYMQ6EJ66eZKPzQQTWD5obXV52nDh1zxAhkZx5",
  "key36": "3WugTKXAM5Z1JetkNqe2VrdUW8791sNfyZshgpvsdVS5ie35qjYiD9DPfzff5G4RuCNQsqQ9quG8KHPWvBLG6hFV",
  "key37": "3WbMJHFk2JNe2nuGRagoDHgkoVFzf7gZLwQtk1WmGaVx5LaTCEDrWVidbix2kWRVctScqW2z3c5FCi3HWRKN4gmq",
  "key38": "2rZj2U7FfHmMK4vfw7zqiMh65RuT7TAHgJLvgmunoBTfRpMZER7WzCjcti2RRR9AYDtPs1HvBPwFVvLAEnftQGzZ",
  "key39": "3gT85cJtruu4Lb4k9wCvwqsDpnQYbyWswTYc7isKZQftTHN8AbpNuYbP9q4e9cbKimnaPMc75A9uYAR3Q59ee5xz",
  "key40": "4hwFABJ2XS3toWjot1c3qVvEqsUwBcLAg93pbSiLZJyaLbzfVJ7Wjdixv3uuT6CarUqQhgCz13jTzj5FyXtuQmu7",
  "key41": "3eBEk6W58QAvGYYZxdrgxav7WznhcPZW9kstoYXEePv4hr5yousUJbQpUYBFmqtRjCY12Ug5JAgQPKheUtox84jq",
  "key42": "2xAdfMpEyhHe7JpLdv7LcnrwXu8GzebNiFCcTmw43QfKDzvwo7SGhzMeXN2X9LwerfFpYoNUrZuu3Jp2ksPxpGqW",
  "key43": "rMxhtMq8c957Mmf9KVAFPXhnubdy1BsN355Z9SCZqnXLpHibVjk78pTvXgVNw6b9yyiSgsupwmcRhJYHucJjUQ1",
  "key44": "WuKoRNGH3HY9xK3PJWmPLETeJ8btyjpczkTXHXn2dx6B7n8hXhoTX2bJJYroPnWZogJvk4eepbNYgpTJFvjGyai",
  "key45": "RMc9rpQgAXNat88NesR6tfoSA42mWAaEGxJjZdFHR2fzMRA5PWNQvi5qsvhBxUEmHaapWAyd1qnbb9MWbnVdnC6"
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
