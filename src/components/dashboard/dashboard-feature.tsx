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
    "2qjYz4gbxcJEJjjWtHC7WoSgYmgoPQw1NwyMbWruzcX2GVErqBLgw25AxpAGumpv9e6EvnXppPaDXjtcFgfHYZAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ss8q9thfNUB5VuN8PmSXw6QC3SmjVtTsJEr7RGCEuYToQeBCsmQSaJfTgeTCCo5kVcnHn7Wu2DCvU1NjGMe76x2",
  "key1": "3CBKQ2c4SaAj5vxYA4trNsoBLshGTtFzgGa3TCWGE5NaNTZkh1UTJNg5mpafoLJdDgCPuTJGVPXfjZwjRu49s8Fr",
  "key2": "3HkRkJ1xVJGbfxebCqmuiqs9ufQPrKUiR6EAk5n24oHpkkz6NB7EjHxg2yypvUb5zS3DRgYCmmgLemJVsEexR9nn",
  "key3": "NNDhCYCJbZTSRygiFujGQsuEtXRudxf2TNqxy2vbkatn6hNY9BEe3GZXymcoqYF4cPW5FRgPfTedKuhuhoZvdqg",
  "key4": "59S9HHyM1oE7xi6ENBz3BibyUbGYMiCJ45wocSE7TJfpegQhV2stgovQ1qbn53yy6dSHvo89q1hdET6nMKKFHupn",
  "key5": "53oD2uy9kUH6tKmXSmRFE5QmMqBV29DgDF5XiQkquWsip5yddgo4P1tM9ws7UdXyg4zhon7Cy9xn55EvMdWR7DmE",
  "key6": "5wTACEe2nR2tadxjqnyFL7SUTJQruhqdU7GyU3iNEAWugYtJVYmJdff1q5heWEiFTM7VDw4nFL2d5huHxsPHMHtN",
  "key7": "4mWLfs4vYNk4p85w8FmKfbRYCz5Qpqg4YW4syrAKaDU9fMhKtYLn3LEmeyDNAdn9jDfjMWqRGNtiwNh6DHJRbyjR",
  "key8": "5pXnfYh8ow7Yy1JpfovB6Ykb7spwbFz6SwawcLiafa3Loyh3EGcRgpd68zG9yxYCertCnbPjh5M6N528tEg7Y46c",
  "key9": "22HHCrt16exdqXUDn659G8yzrhMdf17KQzqXzPPgmMgCQeBtBwqGMiZNNJy1QpFFqTGE34k6ow4pYxem8rgJm5WG",
  "key10": "3dWrF2deHmzzHB7AuNxPQbu8km2mcEtKfU9nu4oCo1P5dn83vTz5VNkx6SKX66FWQxDgXNc8KEJuxLt4aVK1hmN4",
  "key11": "36Lv2HxarJuWV6bfKMmK2jr9V4YZE4GmgpJTtvH8pCZf31H7bNWzBanEuRYbJA8ZBGxnyKqrNHeJeVNystVmSSSW",
  "key12": "2857i7mVDhm2rfntveaHCN5mcu1vk9u1zw8XkQiLtAKDd7gbcBpAMduLSpZLnZ9pvWCtUtXv3VWHWHmR3iD3g2Nb",
  "key13": "2Kto5DEktAqX2bXongM587wv7ncdQ2UjcgRgEzXRKZdog2tBTcX25McRhNQG3QXhATMxZhYuv1B2bYiURrHGnbWq",
  "key14": "5K1vcatPun5vDPYVXtCTJurGsL8adj7MYMaT7CSJUoojmLUsaV4GsK5o7YSktdb5SDHVCVBw8yPjBuXSr7UVyQyz",
  "key15": "r9t5MXmdd44jb8EVNgLiF3ixysnFbt4nPFUQbCy1jRPfjNc94PDZeUtQdfhJShd69ffnoLuYr97RCQBPeH9PCPy",
  "key16": "FGRu1ChKQ6J3ciQhPwQyLZh7dqnFW4tjktm6Hikyi7qWRRN5GagpAosBduebP53AVHf44jBJJqiYnc3cYAbsQ5W",
  "key17": "4LZtrG4rsgwqdD4nfMBSL8E6DtXuMsbLSbcAE5veCjiyKeWLScQZo9W43o79pjKJVHA3ceoqT3hAToUbHqSwXceQ",
  "key18": "AooYTnWTqsXFBsDdD6roNyh71Jsg2w6GSck9LnkXfkKwPmq36zE6q3qTkNvD7N7xcTNzQXZ1qYW1fq9QLvn3x1d",
  "key19": "255PxVyPuNhzn5vW6WtVFdayjsEsmPxXPSdmAdmcoBFJK5XUQhbo1vVpzhoo3Gtcw6ErqjMLg75JcjyzxDY1vjGs",
  "key20": "62cDvkghGnhmpXt6y5p9LzJwPBq3CgAEKX8VSDrJ7JMAF1JhpWhs4o1MnAeNWJ5Uy7xmZttd6EMmmKHJzPHnEVw7",
  "key21": "5QAGhwPptf8dNdpMEZvaYXm7CMQ4kJGkPUVCxYuRJpkfvHgBzvJoPrZvbWXsnp2bePqKeZmeKacjC88XLmYQCA1E",
  "key22": "5RyujiRR67f4Lr9quzcQSiiyHeQnPB7GsmfYMHZd6dHAUtbWUjBPDgFnuFk1dJCvLnETXHkphPp539JTn2VDwk2Y",
  "key23": "2hw1aMvmr8HUdkczBhiPByFWo849hQyW8vDrgi35SaoQ88c2Nn86x8k2o1TmwyqdJ6SufaimJsGoU5umq8FEw5Wq",
  "key24": "3ZXGoHnMEroiwShztXjZZo31up7K4iqGZHK46zSHnY9msrvRSa3fmVL5Hggc1x4rkyaPivbUZcBHF7LAD1Y8a2SV",
  "key25": "3GsziFn6NZT7hwTDddo4ZkoPDotwysSpzwXFV2DgAD3D5BYqUCphX1QdtzbHcHHra47xA3A6sRg8cyECgzcoBSef",
  "key26": "4QW7hXBZqePxUZzt2EYcxP7DGxin8DvyMDGoM5bX3hjwuL4q4c1tg33xZYHurKxPigoKkv82EPsNePRS2tZvfEt5"
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
