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
    "2jd8j7HFt3gH85RhQyuhrVPjyAddiiMLJWZxu5cErqmmNvCQ2iVdmopZiTEU6x4617KdJAW9RGoY1tQ8bHT8RZ6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKfMw4knV9gBFY5RyW4SwYTt3QTFWZEDRu5MMdbziVgQL6Qmr9ZyxkYrtQLzmQMCHKLM5CAMDsgLGgdWi6YG5J7",
  "key1": "5tWhyy6yg5JCmniq32fgVMF15fQeZqshiHqv5cRdoEWBbNND45g5v5AXtCt8cmvba5g3mpHJLGHcunY3d2SUbWRN",
  "key2": "4brmPKhCe6xKqvoKGwqmf5WBUPSRnPB4Ca7vNUwkTydXe1wJUfb1awdP99c8TaivkUDwQ1JSXhyTXH58Fh26691x",
  "key3": "3meEM1dzHHZYdV5LW28EDstp38Nc1irKEWQ46FCMpkEWFdWDxRxko8fR6ymEE7CVjtg3oV4FY1SpkCE4rfkjtirV",
  "key4": "25DVsxxg4ZUvyzdNX2nA9thvaBoPdbk2K8xYT3GKzcRG8PZisuAAPvejHfzQsTjLga9B6NzBmAVQ5uQESNB5Vmjp",
  "key5": "4yf2xk5gX73bh4fnDkhn3esSrJzQJTufUYpcQPfASw8w63ZoYtoWEhmMcCkp9W2Rg7FqkZKd2ufcR4eRb3Ubm5XP",
  "key6": "4p7yXVG1Qp5Z77qw3GTRUciCi1H8kP5pcJeKxvBW9xYc3RCinPK23SRrUH42wcnLFjsTUYZeLASxhjGJHi86fhoh",
  "key7": "3F3Ycw9GMfXdM434hGekUNAhYhHoJa3SJCmekMgArWNYtej2vd2FSF94Gvm1cn3ok24UQ5FN2UGZFsDB3KUN2Wfx",
  "key8": "4tGQkHyQrUBo5bqczgaShcVbEh691y3VXwX5M7HfL1CNgtn18qKHME9QSgvDF1bLog2uwuKAjex5m6Teojv4irwL",
  "key9": "3uazUnJXGoPbULqVE3PubiLvcPTTMg8xyvTgVKngmf7o2S8xuZ9Nt51MFrbGtAPyDUhaQHvt2uCTiZi2r7JcmeWK",
  "key10": "5JqLZWQDCXohFZ5MMgTFLYxERBzESVghhrrFjGkVB9CCoBnU144ZL74N43P3f9KmTdaBzCjZEqroLXzk941CgWTh",
  "key11": "2hmAAQMGSHsoAe8cG9WuLbx7BTd6GnVA3zCgMVFzwx1d6w45A4kgfoLFLPPkbiV243Wa7eTNpmp4zhswKu6nHced",
  "key12": "4ksH9X8hurSyGiEgnQYxMmB6mqS3W1PUSSEvLVgDHFV2J2Vz6rDyHBY7SL9M5FmrUSUd86gteswqQN4xqTsk5hcN",
  "key13": "5BuF5zyuZpFQetRMBCBbf1fbtVfkBDMkWKaRF3SAz2yaMKDBhyutWRdhfn1x5bFneoTKkF8BAEiPNDDm8bumEFgR",
  "key14": "2VLBqvdPaoiNybWyU8L2QGgRohLokmhh3j4fA6NdCXS9mzbR3LzubpvkhvdsQEvsAnz3Euw8R4qwG8UDBjVFo9w2",
  "key15": "n3g2rzC8z1RfE2pEi4RHKUhaBVZoRK65jiLpHRmL7ZZBJCRLVUQ1dn8zz3NTPrw9A8rucmtDCDiW4L7gBp16jc6",
  "key16": "5ceaUVu2LRJXKx8YUjo2VNMGWfCRcmGhLcdMAgmWVYWjktApEN52B4DcoxJQQgo4UMJRa4ehnvps94Dae9FXVtQ4",
  "key17": "414fGDQnqKVGm9eCkbKDCsZnB3dUPdHAUsDgsq2pLvJTrcnTooGnspc5YW7n8cazG6RsaXUbu2HjrMuNdtuEVrHU",
  "key18": "3df7joXto6eqrjzmjQtTiU23nK3NEyqTFixKoudAsTFc3SBfj6YH7Xe44bdQisjU1t1SmU9Mmxyv7nfSq4YPKRMo",
  "key19": "3357X5QudyqfFY6VAaUPMTdoZbGoHxFV2cGhEu6VJsKdyrkaAoTLEXJjjByowq8KgJMDsw2F3naa4Ucedqs9w4e5",
  "key20": "2FmvS7dVnddmPGQZYysyXfj2AziDVoJ3ioPodaqJRk4EVmST351r9YSfTTgu4fGPeTPc82VVrC5BuDKKrPTQ37Nr",
  "key21": "Efk5X8UotA3sd99WCSLyu5RVdLqspchwegXY493W7huGqLDqdoczrRnJYVV12hTtu6ouxREdEJJvgXm2Eo81vVF",
  "key22": "34S1j1UTYmRQFZLDr64PeBTQBeQnykwZRih8B2EvYpBKeHsMNxHATPnATBCuY42VFNmVZbWQSaC69rRPmQkXbjzr",
  "key23": "3K4YgMLQ4R1Zawf743RfdDGP32t8RG8r4faym52NE9ptpjZnxN4ToS3rMPiJ84E2xzHZSpeujrUkhUEKXTLenkvw",
  "key24": "2E16zE1FGnZv328tHnPzMRGKJEDEM3LKJU52iwpx2hU1bnm1iMJPhDBpA9Zo8oP9Cwg3r7qTyLxk86R7Qbjdzm2v",
  "key25": "5a4A4T3faxrAoAindDdYAbrNAHMY8qV9Q5bznRED4zdNXGsUujJ7YfoZxb7qDDZS7d91MFWysFgp9uFPNrnwduXs",
  "key26": "2sPdLuH8phUCG4cAvKR38MXnp8hr672nMeRLq4i9rdXj4Gt8hZzb7FEsgLVd2i1E2JU5WNmeRs8qmFpEFDEhBsPt",
  "key27": "66WqWrRrJvpCzqdnsPEThsYqzfC4p2Z8yyDFUGuz2E63kLAhYUJiMAZF2awGERySDk7sHg9jjCWhDZWLAza2xtfp"
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
