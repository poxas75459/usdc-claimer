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
    "FppMgLnEjSkseYFYRYmuwfSwk2N9WjNG9KvgSFguJLakQfoiJfSaDjagSoFYX66aPDPxmtUaSrLLnDxbHYzQfQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWBKZKJTmmVuuuaTFT6n75NZaT7SMjhD4W2sM5Gqb7n1HWVHvhnGVYWJn5x6Ry13DH27AaNve233L4hKoAhVpUD",
  "key1": "49k7pG5XFwCJaChnEQPKa5hA3o4CyXFYueXytSAhXYUfgCNhydkWyo9CRyjUQNnA5E9tPM3WdCKgNaFmNyzVnwY9",
  "key2": "2D4WZnzmEVTqU91LaN6jg96Ahmt7B48yD3E4JjsE6mtn2oLcbbexn8hYKyY1DJ5qmkPngNqK5DVdSFijPSptLvAX",
  "key3": "2f1BQReu8UrdKKrVxW7bMUq1LRZ634S48dz4Tqm3hNz2aAYBVpyXLadvYUaSit6nWBgDMxLbAfa528o6ZGuXwxpj",
  "key4": "42MTQ9TTjUphkSE9TbQcvtw6ScbbJtFUNb2aUGfPoZjjT9hKTD1MZwRnkw7ur6ViL7y2Sb6X7Aw4xcLXm3rvn2iB",
  "key5": "TQeyLHJPPxFiuYaGVngYaB3RzMzcPk3bK6N5xuwbNuNvsqGT8y6QhQi3LR9FgYBMt4kebJFe8cyUrBAkKMMp3eM",
  "key6": "65AXKEA2K5iNa7LZHWGEDGnBrsc5rmANWK6Lez3X9aQURHHZa9VbwXjtzztdFrNFsMCwpAPRqZBCgTRAXNTp68us",
  "key7": "2wVb2vpfCGo3NQUKUpVyoG1garRcunQgJYEU9ZH7Kr4bySbMEdUS879wMqGdZohi4iS3Lv7ffemTpq8rB228aMTW",
  "key8": "5C25dBFWZ43n7aLEkPfwktcg21KV87S5uRKB6De4dwxGRbsnUZxgctSKvbCfVHuGN3oNCoyz4dDKcfJ2UPDgs5y9",
  "key9": "5nvLX7i8oFUXZBQ6BDp45GWCcZi6D6Xea387zBch5ygnzXtQtPXa3qSmjmgWe7GeVgwtmxusRbSemf3CGm5m1jxb",
  "key10": "4sNbpaios8z8s36FB6tFfpDQ5t5iHDLuhRKRjTjRWcm4VwNAx1vAkY1khEDabq4rBgA3dM6oHXtFeGWh3F5Puhsh",
  "key11": "4m727UdqGgYbzogajvKeGzchZdJXUaQHwiPMEkAdSYNZMiTudYETV9WW8KMnpRBJgqQEwmnzW82gGGocQPYYtvsb",
  "key12": "4zXELbsGpVC99gPEuChXmksHDJuw7NAnno3uKLbnBXC1BbGD8SitH1Hhir7n6BFNR74BY9REw4kAq65uC5rff84g",
  "key13": "25yw2YwSkXJ1VF6v6TAq2TRDGbLeRswZTepzqvSTRv1drPoZ2FbjQCVPkiSu2fnimta5ws2YWsN4EekfaQHBUvLg",
  "key14": "4G8KobQD8ADmJL149bhfsDXYsEb2PpMn1prPoiM9DLBdWM1CwYCbE9Uo3uU49dabTsbrrCFnaTrCVuMzFf6DpDV3",
  "key15": "xgKRAZtHGXDkYmxGzSA8kunwjLXGB5sZFrdW9jkbb8jUHWaYGvTBxYYB71qgCwK5ghjte6p6ficp3gRQEHuSfrJ",
  "key16": "3ktHE66aVDJd3Qd9jt8u63LFzeVSo9s3M4GtCx7JKE19ZVe34PBHUfnYzogAFrNXRaL6ynzPjBh8HFm9awQowuGf",
  "key17": "2yVj2e5ZbnqndNpD9R2ArGXdfqh4ehFfRbi4cYgV2LqXV2ntcSGTF6DhXR3cKqwAR1qS7thyCcwbkhqRWG1Kzuwk",
  "key18": "QKG7tpG1eA4F3Ju1WPkGXerFigcDLSUo87uEuz4Wd6pzeDPF7BfiFpsJor8jDrCGqdjndPajXN3cmJtkvBjXrDU",
  "key19": "5izjBqH5VsfS2ozuXkMWTAsgemxE8n84AQbbnv6JASFx7au66x534crkdisEt9rmpZQwTVCJVTtkPDFaKUVj2MFB",
  "key20": "khcQn9ZQMwUUPrAhfmYBkb7HgUxuEUvsx3gkHzAdPLZmkjhRjGHPdtF83RXZJ16Fu6dAa1pWcsVJgFfLYGkSoFs",
  "key21": "gmcSaxDC1ugGy67aZUjnZKcwg7TT9mx8hBJDLwkQMPLDA9M9jqWqdK2ctChvEUBEd8FAyEKgq4z2dU9cuRk14v4",
  "key22": "451oY8kTbpdiS9tPPpmm3G31n3EQSLFwGhpacNHMtgc6pHVLgwjdJLaRVjNY3KUvbKMFA1FRtgUf9y2gFroJbak7",
  "key23": "5LVMWXaBBSi5vv6tMKzwwHg6PiSgZXfdo3gixT5obKy14nLCPeujxLVUJs9G871Xzy9SSGsseDhoq6xxXJTnTg47",
  "key24": "vcHhUwydG8Mx9KCZZ2DzM81JUe2oYYSbfgrPUankE5T6ySCd7HFUy3c3BB1DiZ3EXC56LPCwgwsvKNFzzym9njY",
  "key25": "5tcJGorDeNR2BrDGPRACq4WgPfeFMYN4cQbH1f3rBEQBgP6XpRWw1gsKxgLb4XoSyuEYFbx4FafmRDL8cnkmj6ib",
  "key26": "27gQJkwkAuPVjuZhnXm8LcWbT6nnkdkefYPscdUjEhF7qh3FYeXVSTKM7b61A7PzS72hvCDRGnytwS2TyuihRVY6",
  "key27": "54zpHDRpY61c5WLcciAMBvmdWDgysBkzbUxPzrZdsoUwoSYHrNA2HhvJ4h1fBdW59v3deTkhLKYaKWtcUVDuUSJc",
  "key28": "5QVYz3aE4Vbnc8ucHd6igMCC8yxY9eE1HqdrQwDxUVdVH7t4X2cAGpYRFpGRxV3ZXLpLYKLKqNvxHi1A1sGGhEXF",
  "key29": "GoDNRMRyv2TqAzwer92PU7xaYYWBcFGjwvGuLLFLw2eyhYZQeWSespSvWzruyKiXyWMbFLaSQ3A3NAivDAARR5u",
  "key30": "izswKxQdTm78PhcwTqPaDQw4q9P4EL6Qrdh8x9TkF71A3LQTY4wHmDwGAUp5kgUECGvxRnd4UtyM46mFpbi8PHx"
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
