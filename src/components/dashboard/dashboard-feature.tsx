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
    "3csJj2D79qJ892kWkGZajq4zAYkEWiQHx8jnZ5Sr6X8U4WSqvgX4bVyo4sMEcqJ7hytUJp91eREohvGuH7FVrmT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XgFhPSkZTPH5B3CVuc6eETcoRQTSqn9h2KwwQdPbzgF4YPyGqMJvcXzqsyrKcwatvgj57bQVEu3FZxqf4mLYurF",
  "key1": "5bFtmSweeQ1R2KUVxQM1YTyJzEJugkNNKQnNGH5PoTKzZHoUst9siwzepYU5LT9WPXDz37nYNSdHgfM8kJpmvaBX",
  "key2": "5CkqdRdPd2iF1VjVQtQbxCoyVX2uS27VZpFUcYrXa4EmZKTCp7z6Uweu72cNcEFLPjRRgBbeVzibUs4cx1CgkTK1",
  "key3": "2p3gmBg5ifgK7cmnVV8MuNRug8geHnByoiiNo656EZ7WPcfoiRkoywGtxPVhP1u5tW1kgSzdc8iPTyNfRqMFt5qY",
  "key4": "5LewbjWJmYbPPfYexaQXhAAvVhgULLvAdhDQ9RsHr9cYPv34kM8TkHxYSUGJwbzBnfz8P7JNU6TA8Q7nArbBY6z4",
  "key5": "26yoLuRDQcsD8Syf92d6gMaYzCpGGmAiZZ4WzAc4CWXm4gKMC75cZthCEmhwWJz4K3gjYr8xMKgrQ147qMqfwXNS",
  "key6": "2VSSBLSgf9gFFEmuYs5WbeTNBorNozq4UFuvyEt7ZCahF5wTXrLVch1E2LUYUDY93xV3xX4m7pk1naTEMc6mKhdL",
  "key7": "i8f8xnofSqxGKtdnd5hoxquFwD2RKKAYVyTJpU7yKUNkXc3M2F2Rg2L3rNWLttsjJwpbKkUwBcdAJVs7D5hJ7Mw",
  "key8": "22JoXXgTqaS8qLPCzRbB56L6dHcrdUmvRLn5oWqm9d4RtmPkWjJFAcCC4GeJsZ9Jd6NyMzbd5xcqnyygZTw3QHp3",
  "key9": "4Pwkph8CwuoUrUEnfSnm1HEcc3tj8FXZaS4FUAbzRKrMkYATGgEE5zrpnUhqWLjCPfWihW9kEmBkA1q6EG8auiMq",
  "key10": "546Thp16rX5tsvDXLfqqtUwThSnAciNA3iNzaEXpTebdtjYrQEU5XqfKdyBK7VzkVvUM8KZGTxxpZSXg8FZdNg2d",
  "key11": "2LtYoeMuT3DfAhQQRcraVPCWsD2DbwBwmmEtjcaPajX5vtCT26DHtVaoNg26KAAhv1pYeKEBJUM3aE9Nw3TjVWU8",
  "key12": "2f8MeSBnWBXJ3yCve2umitXdt7rA1BNr6RrdZdk7ZXsZeRoPqYLiWHGCn9X9tVPRXWFAwa3AS1SdRDy7HZdw6kWT",
  "key13": "2is9h38Y7ZjUQJwTgFHy8hYAac8U9yvUjgK3bLGwk7LKXe8vzShrMdeeLupo4bsgkeNySsm2YhQqVxxZEmash1uS",
  "key14": "S4EGieSgZraJ1w8H3EmpduwBSJ1Fns7DP6JtkqDGNwmCF3XfhFJkARcf5FFEaCc5du4BaSaSoCY6P5e1ULLcK7i",
  "key15": "zzwrJzkSaQVbR14qaVMHCSEVxC9Hi9Cnp2WT2kiwCLDg9hDXKqatahbk5GMHrxy3rRAXQERvabKfgfXMSm2rsDc",
  "key16": "2Wo8Xs211KduNyMigCCE5MdUf4cvXWMXUpAaYYKozqF5W1ndhJZrLJHZVuEDjh9FFH1RQ3ZJJgFe2GS3oMkgTdqK",
  "key17": "5ySHyizGSWqcnj8rV1AVsyuMyRwtqiAzEUkRprmiNEMPSDx9TvYeGjypBHrFLdsfKdbV6E5Lmgzsj2v3oeZD32Rd",
  "key18": "5xnrduxmc4qnTuo1DgBK1x7hmh4HBQRmESpR5qnx2Hwtd5mEJfL6jJpaCpJHGVFmZg49rHfnWbzYXDYDUaZ7L3mc",
  "key19": "2k6pPzrFm6p72oq4jp4cNeDd3dQP6W6dF6EoPhnSEBFEg1Cqe6fJAHcnXdXKtUTHHkSitZwbq12Mmjf2fHqq6L6i",
  "key20": "2LPAsM2T8TXNZNbrNPbnPkaHgmT2LMtHHssMEcFNp8LidgAAiULoMDAcq9WXcirqWnVakptFdLTc1gsjGTnzxJKT",
  "key21": "3p3c2sm9hxysZHZF5dVXbfKmU3aV2SJ1J6b4CurmrEZew6CgL7yoNjqDGmxTL8emqdugnBfLW8BF2EN7G8vivQWd",
  "key22": "3XY8JCUmbMgyB57ZrJdAYwvha4dQXZ78tZFQ6fkCTRGHZucCDimUFPhMiQ3q4yS9mToSiNoLPSZYYQJwuEQWpbUa",
  "key23": "5v9rFi3uDGdu2CvHhjstZaPbhWmaGFKetRdo7NMdBBrK2yNLhNKe8UvrU63DuGDNVewkvqXjhps3Rdr6XYVfaBo7",
  "key24": "61MSrcHw4HL9a91qBiMzTo5Ec1HBALh3jhcmasdmKTuUiGRHMeu3xww2ELmw5496tubRGTVnvNTm8nqjRJNtpHdn",
  "key25": "5NHTP3M81bVg4xHLXEMbXeWfhTEr4DB9AJRp96DwRHf8qNpjTDDVbyoqme4KNA7jDjbt5Jyv1iADsX39PF1yHhxF",
  "key26": "3XAak4bUAeA3RSjXHP6XcqB7y1ZbvBoFKgApCLeRt2tusTJU2xatyPtitFA9q2BBuPEEvFXLGAWezKM7BggEQ4pP",
  "key27": "5VcKbthrN5U9aypZnpTxsvs2xjSAKz87UoN8bEmrUsRwdXQmzBmRayMVSyPRW8FvkQdemWd8ggZ6QK6QVMAH57Nc",
  "key28": "2y2B6duavKBkrApMPz5jLhouEvmahFWDn5aLmySktAKaNRSMmY4PcKiAWoSP5Yw5ZQCn1MwXi7p6MfoxtpfkzfN5",
  "key29": "2byuS2HfmmHkhGPre5urGh6UDukD5mWwhawcu2Fdoj7d99Qx8SXUqjM1eKZuRF26iEPmop2hLGHXwXaafF3dkaBk",
  "key30": "5F2UzACFcUQCTbREDTQZxVQqyUTka9VMhttFJHEFkaYfUbmF3aDPCarfuzSKUoUadC9g2t4iPs9mVV1mnhJVoGJW",
  "key31": "3qyU6erCexFqTKBLtAd7FLMGMu5G7xaS8jb1AuV4B1WvCLsPnE1P23fbwS445epZER8WVcPYqUfy2AbTfz33c2YU",
  "key32": "9ZFMZfWRxneQt6o14CwMAEnm2EcuB9it3AnyhRKaCqFy1rGVqHS2DjVSQwwv8Ai5EV1G1Hpk9XZ2KKD4Yxs3uHC",
  "key33": "5rDHzcvxAxsZS1fGhY9kcd3XfbYbB1j5L9xqWFBWgeJ78mVjPkEa5agri2FAvjnLYH4BY76oHEHJdDP5rnJq398",
  "key34": "3WGFkruvVY7vdWZ8dkjEgEWCWk2fcBqUEjLHPtqXwCYCBVH1U63wdeQWk9PgzDpzvU2sd6JzxxPBYVwjWosnM3TB",
  "key35": "ynHf54GUbqDB9WAHrHYNm8yhoDyba4uoJy67sT4LgQcnLpXP6QYugg3DvyuaX3sctxMzVZBgeofp2gjwkiS5szL",
  "key36": "E1bRoVrcp9hZKGTN1qfzzxY6hnxnKLKDJUqvuHJR9B3e4akmCicGJqgHXMf959Hm36rLqY8HT69Bwtt5xRkezee",
  "key37": "53XV91hB3QCUA8D9vw7n4aUciQpAR5fJ9KGJ7rmHaWKuLrigJyqdZU8r6TuvVtmyD5ci9S2FknN7nqRUvzZ7Pa6g"
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
