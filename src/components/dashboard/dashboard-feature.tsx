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
    "5urYW3AanHCtMisaN7Du81tMmxhJRmPLoLQzHgNrD5d229mfUpH5itk1VDtJf8ZRAmye4ZcaHAU6gvadeJscFUcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H9a79YHehpc874VWF5q181gdKgX7yyCxr97Ng4M93beTVUFuNxzvVtE9AboHmE23aAVsREKmmKF57smws3NQQS3",
  "key1": "3G8ZLqecxadbqkqeJxSaC33M1Pg7ixfANXcVDabRebw3rdK7XgctrMd1S7HGcButQvZ3i5kVsUgjqpCsTcRYf3Ax",
  "key2": "4hRJsFEZ8Z2zj4hx51vyjuSgeq8tLGzgsNdtXPZKSrY9dAzUmjj4QtdYJ4AFo9ULy6nYwYTK6kDyAcmB8zHhbBwe",
  "key3": "4BFP1FCk3T4gJSBnKaqumLXKVnXwGeu6KK8zKkS3VXHZkKaFkGhfXWbtGnrRa4ZBGXGdrBPU77H6HQEZq61FJG6h",
  "key4": "36ZpW9hXdR8tCztkfvNKNuuTSGfBmJNzHWTXpxVDZHBogAGf1xcEEfaTA7Jpf8GXj1pcvGoBQ3D3XmDVh2n49i3J",
  "key5": "2FoMTNts34eKzAgfUF6pSyqkbtjXr5MRwFLvQAFJvnbHHbyNPVkKdEtwvthDg3YVXpPEAkWoU7BCPd7zvPeUj3sJ",
  "key6": "38SdrL6Lbo8CvHSGvDZm2xFM9ooFmN6sS6rVDWEZGmwVoVgPpwNCSQTiisQX2dE3rr87d5LTmq7rBhpLoD5ioMKM",
  "key7": "5K2oQd4imJhZmKobaCW8VaTj1Z64tktugwhJteBptQyEA7CMbBqSpmaQsUpBqjRxsLJmTDv65YA5AmzictJ6fwEu",
  "key8": "5TY8boZZ1tFtAmsquzRir2i2TbF1XM7QEcDDpBLWbA9PfvhzQjeo3YYfNWp4w1YAQoGSLv53DnDbeSgwrvXxEBVy",
  "key9": "3SB7KN9B8mbkakgfoZfXcLbJT4NBMv7WyGXSAgEeoWPenQ5YVf87pEYF9sHUMDEVKWUdD2q3RGNTRiNGa1CUL6jV",
  "key10": "2dPNne7ehK9kNmrpYb482tbsm3jU16Zow1R25rD6XYmrLgQnM29shhSZ5WoVgigsGpqTdtoXqBVDJhcNNArn3U6r",
  "key11": "55yRvfhtoPfo78nn8gpxVMUfLnh2fDniPf1UoysQEXqZ9bZbEpwrxKhW7fV1s77gC6SQ2SD14KekoXxjYTumBtUB",
  "key12": "5YRZrP2SKd2qWGtzHJN42sRCEunfr3wNnH6fnXPjnfcFFapMyeftjiVV5oFFfTqpEgUWhQKc47tjdpNetbYou7iq",
  "key13": "23tRp6tgPqhrDmYn4Cx6J9txTkVvWUdCKeFNNba34WuBFu3FhevpBh4zTcCrsKpoe8a4d4D5MoJ2doa8fkZ9xufW",
  "key14": "4DHWDbuJVs5kH5e79WBCSrVvw664mibmyfXBZykJzUWptnaFcRkL5QqdxgoxxXDD5j77uSKw9HSUFd3DKAMN77v6",
  "key15": "5pKj6jK29qqmxxe8nC7p7HTdWfihBSETueFG7Whioan7bw15SykShkkdNBbpB9q2nfAgvoyvsckc8s7z9ofxKhQc",
  "key16": "36JjKrcCaXgq4YeL9NXFEw5b3u6uFHgWkmbiSE8MqekbiN5XPpM9NTK97a6jxizESYKWfU4u2dPQKTcySfCT8nJ9",
  "key17": "8N3bDiZ22UKS8wvviiXSDwBFK5jfztcwQU1DDo9GMNQU3t9GYT5zQKC3Xp3XYYYdk2WjzYu5wMXBJZySjbLnLuk",
  "key18": "2RP3EBsEV7N7TwycGmjztUtZgs1oRVhDF1j6dr3bMMA1duqe6nRMq6jRXQPGyM7bgJZwWbv1r6owptWtQv7QSrQk",
  "key19": "3YPJUFpL3KNFwDdiMDfWzx53fnZTtbzFfyebAzfGPfPfgWqHWuhrVSL9kCLPhwAjrJjTjFG9yJsvBam2SBivuYT1",
  "key20": "dsuMgQKpCbHLnTGCUtuy1wp8J3rhwuWGx9xkxSJPmD5kgSyHj1Gz8XPDZdmxhAsv9ajXtXhmfj1vwDBktiqcWR7",
  "key21": "TjQLTDZQXc9vKQLmkHvirVJ2uFfyJtc8vwCPgFs3QCSZyZvHTtX6h5fNYHHqmqRNFDYbbL4yyP23ChE6ogk2saa",
  "key22": "4ChrW6evBB1c6j6coxREA9aQbCddr6y8PZckoUTUxZEwkF29YDkcHCknsAo5Mx8PALys6bnehWnh3r2zDsDLShf2",
  "key23": "Cny67SR9qLP3j9w8urpovQJE8RxEXTfzYp1xg2ZdL5GqtATkYh2uMNVFFnBEvssGqT4jTG8YDKeiCzPZSrxMHvg",
  "key24": "4V457ay2sUQZq3dMdt4MaeozWDeVfuiMa7sJnnLnbVm1o9EEtQCbikCj5D28GAUb1xnbP8U9ydafmtYZdUpbbQjX",
  "key25": "2og3hSomWpQruwCCM8iYmjSnK6Lbei1WsHFxzQ7dHfaf8NTyy8VTs8DRV8EuxJ7R8oBy732cW6FaTufhj9moe7AB",
  "key26": "4dkRAhq4tzDXQwdae5SG31EDmj4xCuEdYPPirpHvDDTtSfPhd89QU775qU8rkkUaCpvquSk59AjMDDuLtg6Pptom"
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
