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
    "4euLgvVtth7kq48Yj77BALyq7yNbcfXMXfJ4vhpqrqr4Azb9zhDMRrPRL8XVAkzmMGTGfeikegP6jwDSuwAX9nEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jycMag5r2p5xRPvGZrgy7kbagfA2gBmCTkC8Dpj9nWoe1xfHKZg9xAaLcfxTnDVimMujGHwpg64AjpamR2KNAE4",
  "key1": "252ctcZP5bx7mo6ASdMuc7PfoKnrJ8mw9j785TWJvsoxF7WSnZzXgs9gGVvpzxExQMK9MTUSrrYi8Ca9t1FtWGTQ",
  "key2": "eWN5QR4GcD9zc5Z2mmJitg5RNTyU9qvZp8a8jPb2LZAbHfkHbaLhFRpjjsV2c7cpf1j44YuEmLK2tcMHFmMUau2",
  "key3": "2q57f5kzjRkAuecPo81ECFQMSn6SDKUU9CBk2sBFRzyewR8AX1ZygcN2tBu31ezWwyy5izmnfQYxY9pfmHPRGjnb",
  "key4": "2c7BbATnj3yxmZgRVxuPAyd9AaEe7Qx7bQywkFff5f7gR7wjBfHDY2Z5eqQh3gzHWuqz837ajqmreawz9o5bsSP9",
  "key5": "4txBFpifWen9tyVughSDPxfYPBVHJ8wNLpTre75YX7f1hstEmgKHzN8GE4VKcX9Nq331vUV1WNLuzG4fQun2RRdb",
  "key6": "2pJ5p4DCFJEHR3Y6J7PqrV7oBERVCnafhe2EpVeoViZJrLhaFuzC9zDfvamPSHSgVUzEktnzMpWQRW7FVuPTC6kt",
  "key7": "3fmUg8f7mDSaTYRWpoN2cjpwbLq5jUPbqoWFmPPC6wZ2uyj7jULcAo1Qop7hSDbMokefYAdmCz5fHo2Anrsyhr42",
  "key8": "5nHkCkZyfewgHfvJWSAD7upUGdi23zAMTSAhrqy1Woae2i5Q7Vu78gYNfSgH1H1d9QPcjuPPpEcTbgomcpcRHjco",
  "key9": "5wiTxZBnfnJT3hFyweX83WjNKHkZZhbAptPs2hhkbQjkHckfposVsdQFYkih8LtGANAkWGoiAxHJVYiDnu52yka8",
  "key10": "2xw4bJACdRXd4VNzxgbiyrRV8W58Eqknitm3jrBWCEPvrQCUjeW4SNLVt6Fs1gjRAyrihE8WwbHPDjUdbjK2JyNE",
  "key11": "3KMTzsx9Qc1h17u6TBQv2FnRWSzbmSMLmP1QDmVjhbypU76DpboEjDdgHaHMecqvCChSKLNZBSG62e6wPAFtD4Ck",
  "key12": "4NiN7KXyq3GPMJbxkcDLHPoQgztPSQPm9GYUDokTxUKA7CtCXS1R842kgaBFvRr7f79J3wAkPSyLAW3aDuSUN2Eb",
  "key13": "4Q2qLpwebsXcszBEVFshdz2QH2G1ccRnVj4ygimZ4pGwAQTaB9hqvYE96AcZY1gNanPi95oK1HPSUiRGB9UP7uCg",
  "key14": "fi1ESPwnTaN1nF9jf3qph8QBk4XJNz2QRFbuMwxiP9k9o5gnnCMr4WEf9UAApYdgcu1sXouAokbjo7cGkLGE8yp",
  "key15": "we19A7P1AkEMbDhstJX99CjNHZtLsZyQsvVcrUmq5MK8cPeqLCWnPi8bGLXKX2yd3sCHP81mEXM6vR6wuFLrqvw",
  "key16": "4r1n3siENdM8Q2aUuR8NaUr3eojkuU52Kpjfa2gJnvJTfBjXvudAe1pDNbGd9M4ikSJDszY12miR7JWM3vjzViba",
  "key17": "YDM6LmYus3JQYWdA2V9U89E21wr6keSV156nVgzRLcceCw9mrUBomjkQ1KmDreLaDsysL7wZmMakdXLkRJocR42",
  "key18": "3KeLavQr6uizTwS3Fs6U8dzGMiVcB3HFvuxTqYZa6HM5kLHxHsUW8wwASQpnj2fXRM7UGKMNhw3RNRECeb5LBTE1",
  "key19": "BBJeSzBoyXyg4f7osaF4GynGLdqzkfPEJ1HQG2gZXwSg9Gin7C3MfYf2RAKgUKxsbZPHEJ95DLnhuDjom2ThpZL",
  "key20": "2y3rmYcoRNjFWZuPZN5NaUnzyiL8XKjmq1vt7EP9Atd6QyrEWVZqNTtZgHVT3WFEizn8NFGxffWhWrYc2zarkoaC",
  "key21": "3rs81oKvdSnpjH97pf1BtpqBUFLgmmk3XXmBMpSLq53JWRnfCTtkC4Z2k66TVQheTCQh2vh6qkYCRpRNjaiTaGog",
  "key22": "5bYBvgr7urg1xYd9mKDLpkM6o2JUzNKcEmfv7abTs8nYGFFgeRwAueMWru3LG9fQXmUgsHdne3J3MqsGQKSqT5ac",
  "key23": "4uBjsZnxZAnyVB1fy4g31HBiE9PCiKKHahMNzmkLzt2HfCzJXmax4sD24MesLwr2U48g5stDYCYhYgByscae4ZiG",
  "key24": "32MXfJAybG3ZgFp5iwtpXue9wLSnE2yLSPvKfnfyF2r95H8u27EX4PhE5JMfXmVruGVLbjkZ24eYqij3WiCHtEib",
  "key25": "3AQsb55XX8sienuBUNYRJFBmGWqSmVdz77vhmEsaoCZ4DYXmur9gcn9CwMpgwPqXnveUQBaGJMTvaxJoKLCgBn7X",
  "key26": "3ieXdkXxqSNrizA98oigoasjF7Qos8zyQV87aiT8BFrFtuCBjZsu8u4Z2vmgY4U8PcJekbEfFSMKXiHuVoBgprjA",
  "key27": "4vBwVbv5JVHmsnxfUFhC2r27Q8nfAqdTat9WRGnj9bR5bgXoxKETPDza6dytEMtpTbatGXopPBNwEn1uejs6mCRX",
  "key28": "3tGA75fXmm6U9ko8yRD3sraqzmrTXqqPvm3X7EuYivkJucDWGwCMfEx94jqfHunJpvykUY1MYCGmTp4zLbhJadGT",
  "key29": "v8gyRiCazU8x8J961tRGYe17GcbVWgAbdzPz5tYCc3KXfXEyiNLV5pFkQgJLSE3F29KaUf6XjuBchBJ7oAxov3y"
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
