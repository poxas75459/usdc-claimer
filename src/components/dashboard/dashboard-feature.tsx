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
    "2BDD3iLQsx1t7NnSMRLLUCYhktkg468gkeabgjaydxaD4wbKvvqpigngT8FZaxPxcV1bove88HwGf3Yf25KkzJLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pBcLbD9JJD1BS3B4L6zYkt8xgXt4ChgXH6VbLbTBQD8Z4iHJoAnKFMGtzBsadJtVkSEfmgvDYfpUBv4np3cubJ2",
  "key1": "ihvH6A3rjZKQXo1CYK4ycBPqaR6FfiGDyKgYSrCBYrksTgpA2aH7khP3xcWSAJyPGeyV7kprc73p1LzCoxA9NT5",
  "key2": "22btXGbaVPHJgXscksuMwgtcZ5JJgrashFxUf6QttGFQAeDXt7XepVAojkd34wzFSAeBfVmz48QhHkShWBPs64GK",
  "key3": "4172JrG3PeZu9g2ZhMxHAe65r1yLVggSvr6PJXPMBSnrzU6cgdfAP6iT5mPAYfjbFwHryFQ472ehaLiTU99zp8TW",
  "key4": "2r1zRPKxKb7zRV8ewniNddjW64779JRY4xS3FAoE2PmE11fVtqQUKV2DoQuZRegMz2nnSTtxMsLXdsGc555FUWm",
  "key5": "3QKQsX9NvopBynPui6tRZXuGSMiH4WzAQSpimNJz9zY94XDRmtuNTT5zCw2DeRYKK3dTZMzJLVY3aJXcZGQqGBUz",
  "key6": "5mwEJyCwsnrgBJCvZseP5iLd8SkUwjZ4dgR9aYmtjsUkvFv8WfksvDjwCPWDSmDgD4rmZeNR6ZWQYjP7ihNT88xq",
  "key7": "UGDpXkAcGGZRMqBo8gws2CzT6WwJD4Sbc9zuQiLRb3Sm3H5SvvjpqFWUUN96wsSCxDrNjHsjiGij5n3Z8kuDiyX",
  "key8": "5vnjGuz3mVYZvbhdD6DLnXHosqzQNiWW3s1sdWVFmxnuph1qZQzEpqPpMskXatjazDiyP256wH4TGAiqexmYbbk1",
  "key9": "jUGMi46FPRr5DFpsFTdzyqqqaH8A42yWt6zBuPtBd2DV9HifiqEqraQCrsjbwL5HUk1uFAuzGErc7hfH5aAk2vd",
  "key10": "3EmCJDrNxLDAdNjrY2Zrsd24oTAPyybcProMNf5pKtrxtWKfVbAC5VUSVe87ZeqirQiHpmr5WyQFVP4mJQDcfnKN",
  "key11": "4ZpUBaSuCuQ2SCQb2W3g4anqG8zfBCpwPCpQAHmS8UtSS2brhKBWAJSRW5qUiA53DYmCZMFrXbLf2ypAQSDtVAsc",
  "key12": "2noPD3qthehze5bkKFqjZkrpjgAhRYmGn4n7Bup5P4fkTvgex7t8XMErKMufdaxRRUtvyrEt4CZozLz9zdZmemyK",
  "key13": "vGd9i4zom5AonJpPUCedKFBZCs7aAN3PCXgMzAGLDETbdrSCUNb52dANwweT3RV7bqYxjK8f6chHtV2Zc72v9fX",
  "key14": "4FoCzWTaeG3UjCeV7C9vrGLTRSHLPMvmvLysBqzGUsCrLccNck9VPPdKaz1UbLW2bNgCXtt9KWyjqGzA1mrdKVgV",
  "key15": "2CbZbPVuA5btJohYzS4iQkbeMgZzZZ7pNvgNhP7tWsbt5Lsur5EAXafubPFqyvLtT58nPCUgyVw346n3izQaUv6V",
  "key16": "rUx9tW6KcEihZjb4L1KUSwHme3h9h2D2tRt1iVeBzmTEfP1zatTbCWzpqNSNX44TPFj1z6tfZqUGTieJcx58Fe3",
  "key17": "23QRzWabPyY8qqF3ZwoojkfjFxHvqApEcfr9H2MtEiwRjHFq3sx2huEnzXc6t5EBFvGy8jrJ87FFQQy8fYLeBrQv",
  "key18": "SAowoCMRuEQpqjaEyWx4rwYCdccY3BLvbGGYvNApxuLcAVSygkipZGH2MSJYjHLDwM8ySZUE1jj7v3G7DTu3uNw",
  "key19": "5TzU4NcrvtrnpfrbremMkrY1NShbX5gRmG5rtu8MXmKR1K6RYP598rjwy1xxTntcZ3yfdM1mWckDm45TE3NhDZhh",
  "key20": "kmQrGvKhq8ExBiUc2LPhigXvmsV7upy7qTZcBUxiXsSFxs3kYjiH8McpWar1dmSWriWvf2gLQ3uMwVRZFmB9dH2",
  "key21": "5VwMYnUtYUKqgXxHksDsEdpfHR82JupTe8bb39mWujZtSXtXsho7dVEm7cctuSxE5AioKkVT89t478rNANDgypcC",
  "key22": "34MN5FEJrbLBUruc7jRiisLLTAo8FqdJg9xReztGADFcTBQujPspxmRWxQTQjPSkSEMYPKhmW1aEtbWDcsY5xDqS",
  "key23": "1g9mpkfTCVyem7eXVwZGPHm1D6adq8HhNHJ4b2gyLx7EXE69EWuRpHUji7eQJ1YzTEwVrhEJcnUKC6o1NTLM2K3",
  "key24": "2sk1eHnWn356s31JW2n8WP8GcduoKgm4BFZfyqPnLBpPQM3uo6SNCx7fHNESiKzBt61SMSxDpVkGHdAeGYtCDfT3",
  "key25": "3KK2ocCcjfRRnoVvtJZvjuzkbmRGD4LhBmyBijcTLaS6aeSUMer8rMMrin446RqfExS4vE83a8ek2Sp6j3To8ppH",
  "key26": "4aaF2X9qiFJGnuAY5JrZpN3KfnUrU32YAaB9aXTprDLWxPdUADYwo6UoNQFKKs3geJ7oV1rvxWwZwY5fhspqXyLr",
  "key27": "5pKVBpYogNdJv1Vv1VfZeRjdLZYsNdiKSJUJFofKNVNpN7vr4dTVRAZYZEKBkgxFSRRQcX1NV2gLZQUkQsAJb6WA",
  "key28": "3pwvJxzB7PqCHRdsN2on3wZWCfzgcLaeUo6PzAYKSwkCNibnHz64dUaMUf3cfbPwp7Z55MD4F18KeED1CGfJPFNz",
  "key29": "2yGkA8FidDfs1vyNZHeQ6oSzB5r7234ZRg1T9VBgar2XhUCk5vjnYoGb99a4wYmV2a3g35mvQGyXrAadJmxGbp4z",
  "key30": "5VZH4KU4PfBzaXcGJJ7u9pwZmXeTHSZaQiPBdiAGazaddpBhtmqRUj7xgm526BbYprohi9fgP6ji6eAGBUwj6cRu",
  "key31": "3xCBBNvS6Ec4mJjEo6ebvKVptZersAbtoCBkRw1EDqfMEyQrXcw6UkxtbgWEV2dMQzqG1sm4nMENmSX83gvMWwEB",
  "key32": "4yvr5hGi3trCYQRRD4AumGQtGoJKXPy23Ax2XEGZ72n2KZd6LENxMug5zn46zzsBFfX4dzyjR9FG8QpiQYSpPEBX",
  "key33": "38RdDrCK9vz3opkiy94UHgxtnnwSjeVib8RziXizcfGpvmArJPRLAAzcGshN7TjzVtKmJ4o25gwHPYtAdTZedat2",
  "key34": "4cD6s98icguYohQRjWRG3PdLygHY5cy7UHn56TMpF5K37seg7UWAmd2H5fg2Ss8pBAU7ZMSChnRDzmUsfLgJJVLW",
  "key35": "2qY5KAD6w8t1mZFXj5ZXU4Dc9GTmCDhSmbBVVK7SzHHz83MoXE2Ystrr7YvMVKfHe61bw2TQiXUJDqtsDcTi5awq"
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
