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
    "4juJ4CS23yhscDYPNdXHvmxyzSRjnQojBQ1e4VPure2nMrN8oorPSrU6TsHmQ83ytsP9xd1WcyX7GunSK68Bxujm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "te5s3JzCbETwXapfuDGERdQwBdEeyZDY6Cpv6n1J9iWoHjWcNm8PYFMQx32QNxU7WnVEaCTS31WaJVaLj82Beue",
  "key1": "fgL61M3KhBk2Rq7vS6LgeMUU9fxVffK8uFmMywSLa6RXbkKHTibaR7DwfiCL2irDRXRwhDsh73vbcSQHAcjhdoi",
  "key2": "3X4RxSMHtPKLsDfnEM53n5wocQdUHsKE2MFqJpfXQmhCMV12v8pXwwqamWc7nH1GpkzJdkCyJcWrAQCWbdB3JmWG",
  "key3": "35bxxZRioFodcjYM4B5RbY1zHyYgwBZ84Pqwn61R4amYT5eu4TaNZPKYHdxsJ95PqYK2o1eEGgGH3KwgCJxeiQis",
  "key4": "4LTucTVUizEWTBz9WZSTQv7nqyj7PbpHYuPEHJ8RgDvTZpM1ErLkGAsgoVw9ymKbATsZgKzeTFoLrdujg357NSe7",
  "key5": "2kqX2murid2SBDng9VN7M3s54RVSaZvue3nkGTxnSR3YZT63A8xL2EniYPRyswM3tbtXgYfSL7dUgVR1LPgWDtwC",
  "key6": "4ia6ViJgShWn3r3o4d65RddoD1kPWB72p7DcfrgKE3AHAokRWorCCHL2Y6HUgwH7uqcxCyPGDmPb5hHG2D6k5S7L",
  "key7": "2uwYE8ndcLVYM8CMgYnnCgheyFLXDUWCT5RQqAhbi3D59LgZ8F69DtTGamKy4S4NedDcDBTMDaNUmVcVAAU84vWm",
  "key8": "4a6JnPVt2Jq4wXjP2MgNFofLAfWN9D1FFdTh3By9J1PaA8HvVg1f6aSygD8hFgAQtEwLcBsfnF2E7wnUWQqZvwxK",
  "key9": "3cqPfQ4mFkj3VPQfJTeN2pxPAxCGrerQcWJmw5Bgb2ooS3W3khNNgTCWPtZeYgK3nf1caQAz5dWKqWLh2bhUGijm",
  "key10": "XMkzVEYUX9uXJ5qAM8KtmAc7fbmoos8zYHLNmdnfqHMK4npYhpRgUz3MmweUTEX2hXUaz2fK9z6xRSZpajRrwrd",
  "key11": "2evnZVsupL5BDh4DEt8qhzes9KpQaq5WunpQtLAUTUc9NWMkAocyxQpxjbpuRdgPFeH3tbQivSYSo6zxztvLJi68",
  "key12": "yPkBJ36wLcwX7tuaMctEosK6yvzR7NSnjztBYLZvGkmLV6N6NmLyELtyUaGeUu1htCqm7Q9yTTEtvpnP5gkuvMc",
  "key13": "3pxWmEhFLWCvGnV4jq9i7mqmYzNxQgaqdidkF2iizHSoENayEExDdaE2D1qB1cQGEGFv5ZNCe5HzVtnymur1MiLd",
  "key14": "5pMSUau9M26ZBEmLZPm5ozgEsywAqtggcfj9iLR64FxmmxxGW8XC9erhGr39iAaxYPBKbxjqCnx1t7i2igQLJzDb",
  "key15": "Yz7vfQxAT2usP9Leet3y3DTWoEE6vG3DeFeHzdh7QofcAuDAecdV9qeEt9EQSpB29VVTo4irj54UmgvEuj3eWzW",
  "key16": "2dyhw2Z6XvsqyppCCPaRyQFiW1yXAoAbADgvdKJNrAuJo8dNCtRjXc3U4SoFmXvpLTs3KXwHkYtxCFMrRfpnsDVe",
  "key17": "SSaX9kukMVoTvCCZQfxRM9caJXqfTnqrXPjHg9mrY9eWvRwZhdrBpqg1AEVWtvSdsic3mCTJoVXMm9tj33DgV27",
  "key18": "J5s4VgMUzzVJdSwgKCuQogbbUgvrJa2a3RMXT1KqXyr94wiex8Yyq75eGyQ7nJ6zbXiFA3ST84exkpMYawAvzDd",
  "key19": "5ucsKUDSkDmyE3XxHhCppgsu9S2PtxHpkMLTzUg3YCVKx9s9etZNUb5v76t2XfskP2oPC3yiapWevVTdARJVHbVL",
  "key20": "4kSDf25mxfHcv7uFy289LpWgXKeH8rkha1dYw8wCyji4aZzTygCkfSD6tWkL5hxMixwqHrgUKKPAfGxFgMxXga9x",
  "key21": "34ji9PM1iH3gJYqemhSkrZhUpuZPAr16zeY1n5QCC6fTWusqz7TAMKqnMFxG6UDMTzC5263NWP7XfQGnDg1dhidZ",
  "key22": "MrLEsqFx1Dq3hG8sxZaRBzv8CQVnYuAuxhUggw95oH4AZkBragY4JkVTJ5XuMYDc33dtUryoimqXtLZ7R5LqxCA",
  "key23": "2WeoPrcxVJLKZbmwrmso42cwA5kgDKhEWLC5wDPDkXNWVUAZvz5izcCHb8nvMWdpLoUT9MyVPQp9kR7egGySMFtf",
  "key24": "55Unk8aZYC21XzNDw7Pupw8qdXdNxECTBfyFeMUpKip9pPrAEFwkYPNqdXR5jtNZJvgHqpHeUesCC94CBS7dRFHx",
  "key25": "5cRbRZvHhZmQ3UiKM2gvDjGTkhNUtEUoR7Lk9Bk3eTziBFSCaShpA5nmNdTpCwh5Zuz2dDnFaDpMYCoQGVmuMYsR",
  "key26": "4pZU1Tt1ZgMw5kP24sXgJz78PnKfnLLjmCDRP36m5pXht3act4v8VUsSW27xASoVWJdy6sX6viMtRNcsUJBUk56w",
  "key27": "2JKgcftj2Eg5WNYZKBEo1A1TyWK2WVm6bvbFeWPEvbpqoRaLhrL9GmUPtpqVShrRVqH53dSSMpeTAvNYqHi7h9kw",
  "key28": "2bQFFEJaPtP9LSVcVV4uTibuLNEmcU4sLsSyVgtruofFH8t9Yddcbamc1aZ2uvU5hHD3VK6sNoAs2QvRSAEakf3y",
  "key29": "4r9TbbGVzzN2EmJjAgsCeufp5rQu68t3WSwXkGePvtB9FduiWr5xo7WjvEgZNKSTGXDSGh2suTPzcu3g9mVoRAzn",
  "key30": "4QKieNquJS5RsxWvqxsZ96jGz3if6YVzEAv3vH2zm2feB749D2bzkaqer2LQnYGMJpnin6ywtMJSsL6K38NWGTGq",
  "key31": "3oBeFfNjQtCscwoUuKZHMNRmjMWSTkSkRQVLUVeTgP3m3HFRQuMgbEk36vPzRr9LbpmH3dzohxPis3qNfBkpf3FN",
  "key32": "2VTQ1uC1kdxGt5r2HEpLGzWfGULDbvn67AjRLGw2ZEReFUV3i1EAHyAYTJuDGF1rMWswoxtgP3nc42qvyRJwdjmn"
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
