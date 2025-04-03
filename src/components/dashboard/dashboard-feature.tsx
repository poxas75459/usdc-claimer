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
    "4rCj6v7uL3pXqorSccFScxWPppDyZhFTWWcQkahGiKPNUY2iy91Wz32GQuMcoTHNQCoW7XkC7Lx4EKogriBosCNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y5ndHcF2R2TioxTmUsZmf6a6GyYqSKNvAUGi4rD7wxJSbgsc4vyTxK856u3srJYrUDPvzkX2kWMcrX9NsiP4xQ9",
  "key1": "5xtPq5ZfmmaQidDwsxhfprcqiK5Q1DxbhrntTphjpQTihrN3xpTXtkr6sbtJJm5UvQgPvKV8esHD8Dq8aVo6uXNU",
  "key2": "3xZc7BApvM9soSgtcaA4W9ETibe8zJJevYvFqvKfxjuUPz99gP46Jbw2NKQvEfbifSq1yR943G5Pwj7iudcdceQ9",
  "key3": "3BS63eavpznvihX7CKtG56NGr7LA96JN3x5KpQxuizd4A4pvdzNSDXxzZq6dw2sXjLUsH1WoJEH2t7CsAtPm5fU3",
  "key4": "2fRcwr3zyi7VH7wX55KjrbdaU5WBX7j936oRnF3cHHMPdBfTHD4UKLbVGt9wwd9xhgWv1xZ7HaAiDkmMJE1dr4KE",
  "key5": "67cGq9BXKX8hC79KUBeYphMhCG7G8Yi5JygC6kh1RmB5ctrvwP7DyaVayy8fUsY3puR5LnVkjBeVNm5XUqmThe2F",
  "key6": "4iqMFa5BLrkEgketyuPuoqwZM8ZNXSh7rxfE66vRFXQpFo51GxnYs5desQ2yXDLQG7fU79WNFEpQ5cUfA7mWFfsC",
  "key7": "4cZv6jXJ25P89WpFxisC7DJHBYChPy44HELWCvSxhju4nqUDFaNwW7NqxoUBGD7AE6uY3Ai8nVorgojW2evoehwE",
  "key8": "3eLPRafxu5cuH6z57S4C39xnibX33D7mU4KPejAZvxZA4unzJaUxP4CMp7pa7eaM3CtVoi7ja9FEGCkZUfMyNM9e",
  "key9": "5MAmNUPnqQZrapEUh1AqP4dRyJjEznvrwNZZym7eQya6jPPcFRDQnFVbejYckF7dWMsebJoCnvhzDUPe1xfxcRnD",
  "key10": "4YMKMK5ZxacMkyjFodP6xXNTDSL6vNomH1a323ALg15F6ysrs5RinHouEpczURbjkEtfuoAmszCPTPVX8UEXefbb",
  "key11": "4S74ZRCCqFZqj5pJayN6Q676LynJqAMwhUicgdoXnpPZBaBhDJuMThJqNbtkGCm5QCx7Xw2UeuY83EXark1Yne2S",
  "key12": "57smUNsnzW3gFpeBiPrKsXDa8oNaXVVqNdkcfkdeHSULKykjbU2BANXohh2E8qSwN7EL1F1Duqqb2hJBijCxAspt",
  "key13": "28dZ1Sa8SBZB5sowbRdMLzCAU1an9XnM2CcjRgPr4YPkt4S1BBAugMj61EbhQ8xdMPBKTBfubRfQohcUPBp3GXyb",
  "key14": "2eMY3QMyfLUGSKPcRB7pHgigU6eitxCEDZ1FgJEmYYcYNpprpMEDtzfhtVWACCreYmSKPnP8dgJmHdDaHdg57VAw",
  "key15": "5Ek9wuZno31vJS5WHMqta9sMcQcYQQezZt1giMvMRAGHzgfuGpG5PfQhymBJXSb2pRhQAYZWZ9uUzuWm8D98Ecih",
  "key16": "5voNFoBci7rUXRXUv9KkPQeZhAjwFDfi7ahQ9bQTNAQLgfRHTa4j2qTA2Mcxs7po1GNYj7jMjKq9QaL7adbcRAnb",
  "key17": "5smA6uERUwQHxeJDyeq4YJ1GtT38B8L4Prk4XmnDnMMb8UeWiXCBw3nBrdv6EhyoSDnPwuL7mA8egtYzBt3hwgGW",
  "key18": "5xMVW4EvYqfagD3viv1DCrgoZqkAnrGBR1CXL1RfFDQnjCVv5XaVtyMmpiYHMuYCmaqiugxk99nZ6GoEgEuDtau2",
  "key19": "2tSNoAGmt7uitobHNqaTJDxd3JKg8VUVNvSdrfwG4P1MVCXtRwaTapC9ufyRsMJTA6VWpSBFdikYMZM4dgFsTyRe",
  "key20": "JzHEWtP5J32odePnsvw1tTsx5KMJafm5ibvDQneYNeAqfHJXhG6ipb7dZCv8y5xcnxvUyAqqRS5LgEGtrXTDFnS",
  "key21": "36vaCMgQtJ4fCbZ24VZsDJgKcN98xecomfs6JUzCzpSMbQw74v8SCToXS5ZLiecstxhoT8rXqjUShLFF8PZBHwv1",
  "key22": "2Axj9c7UPC4oCuijpojEG5Bx7Xn4rGz2qasBiB9hTTN6TDKbtu9VwuavbY2mgHN1via8xLWCkGrHmXkEu8kbt7Wr",
  "key23": "3g8UGsqFDsR6sedvFYX5Ed6gQMNH3LKcrYfkvs24zdVwsKjZQVrJmFFCkpPqCPuW13PZyyTh4kvRktH84Xzd7bBu",
  "key24": "5fDRSn3iczwcAMQkSxZkCTHDhHQ1xkqZzrTjpNQ6mK5FKvFgaxtzPEoEEYTF1PhCjaxQQ61sXzGR2hthVx7BSd45",
  "key25": "561sv7jo1S4fexjCDDY2M2UQrw2M5W8qAkXDTpj7eLvCkcqCY2KzZtSLJoTJQ8tnpTjtn2rK1aNoxZXyS84NhVvy",
  "key26": "5mPSpQSN2fSJfJh6rxadRuKCiTBdpxhTjbmfoSoSFxBAdTc6pTf5FfJTZucAGCrNDByiEcqVT8VD9Xczkx3PRpqh",
  "key27": "2ABK4tSiFzAL1GpGzoPi5mKNah2KqpqoaqyLMqeNZVRsm2BRnxDQdBSK18s9g3YhJw4fU1Fsnr2cbiq4982EaeZj",
  "key28": "2hMsGVvcQX9fQV9RwWPJkb34PaVFNqAnYYBdXatyy1QtCL7JBQahpAC3zVGC3zbHRp7i9NxCADQEbvcRfZz4zWS8",
  "key29": "3Zf2Qj53qcm1JMMZKu4WF8PKf9CLijTRA616SAidVLv565iUJHAqaRUVe5LLKyf866SFMunaEg84ve5KojKHPPFq",
  "key30": "4ofLchyBT8MTQZU29oh33s3qXQiaGJavjaJQDeFWQFdtY3Hhs6npyb6W83Yn6WuQ42oV6BcscvwMsU4TjKwJAAQH",
  "key31": "4MEa2Kj8MMxdUaiwQqdGRbSKf87pazZeg7TA6gWVtccr6MPvi8e9bsmeqtaNKE4Rib9a8qeyZzJBoWWo4TYRtj2P",
  "key32": "4n9ZCWhXCiAZWNKhQqpbysw6eaKWCZNRbkajEU6Ljzt18FhaPgSfDAc51EDPjLiWPaCTFTKzJxmtnLbZrHPbBick",
  "key33": "5s3vxGGcFjq1MYLpxyJ8cnDGe3sHC9dn2exd9VUMnaR4mPWSZCTYYu3TQF8VesDFJjUz2nSh4w96nubYWC7H291q",
  "key34": "xvEpU2V2zJLCgFQ8jaHHFdYhUtELg96z53eRxr6wAaQF98WhDrd4YqrPj8ddDPxDmADX45qPdNQSiHbdFUiNNDJ",
  "key35": "2Kt9QGsi2CqRW6PZjgL1YCsAynCty6orJwdutapHuBN7R66J224Fqai4wM54NGjXtKqEpkeZDL4SgWarwh2xCPi6",
  "key36": "3BZR8k5QmpSCz6SHYdNqgankeG7vecruPNjSHSEQM6XBUKqKKtWkxbppC4sHXF1JXPT4tpzcHpttjAiRZNP2Qia1",
  "key37": "2dKH4L46reGcYAoUaXKKBEWbSVgUaUfSbqWt3eXDwdA9GXnVVXkyDdiFq5RzJJupJyjK37Qug1U3EPpJctpnE8QS"
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
