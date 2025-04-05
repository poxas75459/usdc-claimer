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
    "5GgkZkTrVc3psc2ap9sf1FZ9VJ6eUotBtN7f5LNcbJbaiBfZEUHCrjoKLw2Yummev1Qy5nh2JkfFpQDf3wCxvXBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kRumhfa9KdmYvdVVVLpqXd5sKEwaboJCZjfWMdFGjnAnju89gPVYvrHqP7ryxsb93TcwRcERu4aME5yHgHhPPUY",
  "key1": "3cYiRkfExXN3RAeijmSeTSWfPeM2H7Qgo8YYpCdbKgLyVbR3DvCxjpkugKdDtGcNwd6PDYDQaN2X3SQw1pKLdEWT",
  "key2": "5FKUvT8zw1ZtroPhyy2PCBifYEk5tAtWXsGJsq4fBFvVkFkSCRKQXW51rug1ajHkVLYqQBeqMaPn5jakEraQWecU",
  "key3": "5pxkwtKnwUATKRL3JRCS3GpnwLqonon51cvtA5GcXQUc6SRNNJg8XCPftxBCCuGUDtpghtNmk2b6JPvwLtxCtKmG",
  "key4": "nQdi37HfCFfQjJWpaASTGSy8aMXaRMgQ7f6HAygfJSF2AwHqXMqYsVivC5oexDmZ1pNwAajuUBeSAk5BHMdgxu4",
  "key5": "4TnWoAErNFbCN2rRiUzTZXKXiEqdmTfj5SdpzVaSWvaPrGNgXdcSNJHwpVzHiksRR1HPFv7GNxxYPadfGjckTrmv",
  "key6": "59co5vSPGJsLtDKtBZN9nxRmiAThwkmbM37rrSVkCs6Jjq4yo2mDm4eVZvg8ejs96peZJv1qvUwzU3Zai8jwR2qL",
  "key7": "41KHf7Z9eNuSvW9dkzPDMd1aXFWAwQfnP66YtMSm63JdkqtuNNKD7pGtr1n8cwRaoh73oJok5ZHPFMSwVy2zF1ew",
  "key8": "4yxLeer1zaeFxYX9JjtZ7JeHvutXMQsXX17okFRyboyXaDcecuDgMpez9vqxyXPnTDpgLAau77js5FMvHhGZAfHS",
  "key9": "ttEKqZqTA8hXWzHMviad7oBf7UBSnxQniyvr3mnhnxTzYugFRwL2ZsZRJsELkUhMfDrQhxipf8YwXXMvnBfGWbo",
  "key10": "4VztP6bNVeeF1phvha57pvM42QKxCotG8mjK9igqmnruite2VePWrwq3NvNTzzrQ9pHZXFXopFGmfvLDHQGtxzKR",
  "key11": "2jEN44u6fF4Cza3FQWqQF6o9hnEfoJpUcjXGGUUJt1AdmdrYW9qa9MhrBL4d7MLUHkJyfabqNkppjXnqogQawcjy",
  "key12": "2ajwfRp9sxmmDN7y6J1k74aKDBi89seaq5h9yrKVdCQCavkR2CTZbekqonNUM9EXrPXc2vDprtGmQAyi4PiwEHhu",
  "key13": "3koEuwMateeBmwaqfxKmAGdDX7NamM37toVN9qPtmPSBpQBDBwUzgAzfXoRTh3WyPRDUv6UXYVusoNkVzUT1eHe2",
  "key14": "dPx67s1R9fKwTzv3hU6qCUuXYSoNgkHuxdZPaswvwBhurLu8W3LsTbfexrJPMV9nd7VZhrDLwnRw6MYsuJbDzt4",
  "key15": "2ZgRPgBgjMkpvZaYFweJDbLfzZ637bbaF1BB6iMVrL8fGbnaQBcs4iCthP31aKacv8a2RP8VUcGWS6GTi1pDxrTL",
  "key16": "36B4qjZfcKo7Y8zMUPytszUB8auoSwvPNugVnv1rpmUP6d7akMtpked2YAqiX16BYr66vNQDEXBhjrix2S4NUmYq",
  "key17": "3hwoMjA2CvHf42KdNXG71LPd648YSJt17WktsFWVtmPQeiNu5quJVvg2Q4uBp4PVE4EEqrCB6kkSi17Z7gQyswFR",
  "key18": "5nznX62nztmWNMHjLp6SmUib1uwYSjfmqF3J36HjiEyigUbtEDuGaZ6a4Av5LH9e8TPNM34a83CdQVgMDUcyXDR1",
  "key19": "4TMy81bzP9prgyyb7RkP1VVMxx8BKMG7H1UQ8V4cXqW1CLQGiQsMS66wifcghTUqaYgYjmdvjcVgWPuNTmwBZGmG",
  "key20": "e79d8VV4pQAVYRwstSZTzyDUZuYb25GG1f1QdsiF4yk71LNZagx2ykrrZcSssbT87WimidEnVPsE2N45AR6qJku",
  "key21": "2kyBL5zMYAB37rVhoaKsLzna6gf2JHLrJn5oVSZYzJJSrQYTwZj9ZXfvKRrqKPti8VLhaQX43p9MXr2kycUsmjR6",
  "key22": "ajnPDz4vjHy4yg6H8snTRT3JrvXwTYZWbBzE4yT1gDcLGQrSybdhExBH6afJ4uvhwfgw13gHQC5v3WhakJAShuf",
  "key23": "4BKVHWYkeya1P2ijKG7sF3fdimyjuPQeybi8kBvJP8sPSZ93PDbgJMSMW36egZor2upmGNdXbkF4ZUxd5Q7KzS5j",
  "key24": "4wXmjCm2EyxiFppZYxpknstFTJrcmmqradhW1QukKvGYMGkESnmNrydokCJiD336vNhMjNGRA1UBMFLusrrDmK5L"
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
