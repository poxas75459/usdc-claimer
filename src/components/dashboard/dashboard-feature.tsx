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
    "2Raqchi3wabtJsNCBkDiUpYJenaVquYfruud75RBZD1B6VDkXEgvJTZHvGPJQedcS4Yq6LuewrkVRiDyWieMLnU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjVLuw596nboWewYn7ybJqwAuMYA6a6BMCrR41jHAuVFRf8b4jaFKEpkFxGwpkWznbsDKY1uGMWdB2LVJFy4wwN",
  "key1": "DHPMmkuSxwCzycowBWjSM2xpjVdbR8nd6bBf4Ye7q2oq9ZxhfGVLAAwcS5PRyWwvnoUNyMUjZAKoL4bMabuXaoG",
  "key2": "3dFL8DkHTwWERmXMmnySxU985BaqFi64CpdosCrgNFCuCyhjnCE7EPzPj8GGBEm8gDKgB1SC5Jzc2arSNFNmuh1x",
  "key3": "2c7uB5ucWh8fvuJFUgQU9Zp9MjNAxK1RtV8Ys4F6GF4ByXmVhzeQYu3rx5ZRfhqLjQTjoHoFUstpgDMKEhSinEnc",
  "key4": "3M2f7XtzYzXXrNgqKdbw6NhefB4XBRiHHsNpUuDE8ixgfPmHPoUKAx2kuizaYEXY6YXjEi7fP3B2DzAUcYV3kwLC",
  "key5": "45pkGrUzkRBfJ61NKwdnZ5GmZXebu23DeYrRkaL54VDmwKKKt5FsmwW4o4d4iteLM3FW8HjuNNyrTFYVDo4PsDKZ",
  "key6": "3QykMLaTTZ3ZwjXgZk2V2S5D7ejrxtPnisLfcDve5pJrYwzA9HjbBqPt3siWm6RcAUaj4Ag8rXNG3kqSGVnmAcmD",
  "key7": "61RFXJtuwbfrZJ1BWFLAQzmTxtCJ3HLHvPbjRb8KhKNFQZkshgfeyp36kNfCALHdckSsL68W9grEYKyfVEFQojyR",
  "key8": "5HNdkpKCzUoh4U3JwxZirL4LCXPyxuMvysEt2KYbQrwAGMCQ5bqKR658GhZMnD1X8zRxy49ZeQcKFyoogHycY3op",
  "key9": "539dyKaAuQDoav6AZRftgBQvXbqdCLvTQoukZt2hLMkvE6FKyKmbev4ckNKSA63AiU1iM5R3zr7W6k44tEGGGEf",
  "key10": "2aDjeinyvANs45EqK6K3Uv7jWfKguRQFZ7CcU5rHXgJRUJPN8MDSxPZpvbHnYg25K7PNFXKUzbaeRbdmxSzEShjs",
  "key11": "4PtSxYiKYrdXZVGSt3hjXwWHiz8eWT7bmmcSSHrQTJeXqE55S1sxcKqWLAv8CwHmPBTm6suVqBtsFYLK2s6kqJ8t",
  "key12": "2fDRBHaiztgL9LPDYoRSWtRSV7RtFhvQY44e3heS74HEFR8arqVPJAoSkko3hd75Ng45WWXByY97ZWfKZMWkByeN",
  "key13": "4YwbsVnbEMAdrtEdaEnbKMFzFa1V3JW39nP6pJHkFLXe3XcQamZ7VeqkHi5kD6KFByzovJqjJnd8DUNXyKfUPzks",
  "key14": "5wz5QNpem83ZhL9Ch856K5JDKfZKhGdZocDTHpakZUp4BGbz2pdGrx7YwcV8u1npg52Ute7BpqQBuWRsMMa9FSc8",
  "key15": "4jQd3rMEi8ZxwYHL2SrYgxwonaZFb6CEUcvAshhYdvZbJ2xq3QBm3LJ6Gf7wWd3zGk2EjrFAVEKw4G2XZCdcSrqd",
  "key16": "5qXCUJV7tqUVFCZLh5ggncCJdGNYZHVxi1dW7AB2xax2uDLXkXHHRLXvaN4aKEkxnS6EV1uiB6QPpXVB9T8TDowd",
  "key17": "2vKUSGoSPeZ4SACXKNycphapJG7S7q22hPdpwaBiGUhqmF4Rm1F4CXwFzG9K1TRL2vvVxCvsUWgW5fybiDzgJcv1",
  "key18": "5m4Cjz9eehG2vPpGYGsUdBv5PuQYoECjFQ4o1XnWhxyJ3f7f1pgwVpdQGJaxXfRmMf9erbEgiyHQ4VJ6NrSngr6W",
  "key19": "5WENKjd3oNsxQ2rMSbX2MTFma1FDJbGsMBy5AJxwj2vyZP2qQ6GjFYYRpL8omAenyDNfTk3ueWFsTYYn7gxxqEUr",
  "key20": "3NhrwcSncZoD3GPwAd84tXjPwy6kbgjoS22CAeW84XDP6gXfBYiEt1YKxRYuhe7gyCpGz53KP37jg4PTMn86zPYC",
  "key21": "3HwqCDH63efGGm6yjhvuogiT8K8fSykYCbzVS3v4jyXAvYrV72fe4RTEdR4RoVy32vcBq5QZEnpUYsqgvoN2PZgc",
  "key22": "3h3Zs15f6gpS57C181VWPxdGTy8WeNutvdfKhC1FZySAcMjBkHL19aEvMLby25ofNcc83bCyG3ykjDuTyyEimys6",
  "key23": "2MvdxV5VcXWnB4ftBiPUekTV3XDSUmFe1KLGtXSf6RvbFc2CQ6exWcZ9mG8LL4LFYAAwfMzSy8g1yEbK3hd2SRX4",
  "key24": "5GVCdifbeUX7w9L3u1iazPEgHF4jFCYVhmskhijay4DXDWuoXNqiZHKbRX4dHYfqJVn7KdiDgh6erR4nJYCLQRiq",
  "key25": "3drdgx6gkDohz7EJevB9CbjSbMn94MvMvUmfWtcmPc2UKJuLVb4eVJAnWS9HsSeTSkGpfCGdcu6wrreJDiLujHjR",
  "key26": "48pmwLsnr7xACLCg6j14Vw5tgrjnvhYUV3mdj2LB6FFVjRDs7FvT5w5XrVEpqj2JQpY6Rngsyp7etjY1Kkq5CrtG",
  "key27": "4mJXamBR59Lx3zUYZxkVVQthcNoySp1NLYk3CK9957jHE1s8KaeEFhqZVHToi6gvhc3pq3CwBXhna1f9VkAkoFP1",
  "key28": "35Arw5qAXLRPnZ7ubNDEZfk24byvB5VvDT3Z4wyr9hbeDkUBbastFyPpfVkSfM6bFyPEAPjqHba3hwdc7dREbPQE",
  "key29": "3cNwuhbsCVjAjbb5JD5PBrNMYd3Y5vRfKT6kbYcvKcuUhnokHsuyRvcJKLkNCG713SQXHcYrAeJ1vvUvGTWNmgA7",
  "key30": "3osFzJkMSjmLpjYD2PGq1AFmUSdUrFs677jNBvat6f1pJ3CdiggRtUrtGq7fzEVU1ha5R6kxXZGJkqFK84ZzCmw5",
  "key31": "3whbB6DwwRj8hgNaVEaqBJQkiG7ugHTC1uHU5Lr2bH3UfiXaf5ChK7FHdqfGxQCyLGbhTZRysu6SkrUL1iXRBYWN",
  "key32": "5qjx9jCSudVGdrpKaZcjBst9xcLdfzCPsginXt4c8FjdpA8Af7eudMPp8ULCiANS25U3k8KzDUt8aLjJJLCY4xjr",
  "key33": "4i6tDwashvyMqXU3bbEmDa8JxsrXNNs1dKK7ceTktAKUkSiXTTgp1MUhBKSXnai18Y3jQGkXycKcFWhTvmJDuMWj",
  "key34": "51RNad8k6nNV21HGF4krBRG1itb3NNZQcF3ZPXP98yUsB1nKRrpHVWenbbfAg4JJB71qakeHLjswdgouUEcULgwJ",
  "key35": "5ubmQkb2Pq8VVhH86CNupquDDgixphQDSv172Gp7qmPrwfDhAjY5eEKxH9646AwsHgVY9TzBzM5jLkV8jG4XZin1",
  "key36": "2uu8SwLBtnsEup4ELZ2G5Vt2j2NvwFHK37d758u7EB8Wp2amQwh3rfkzf72z2vr2wAA71NuCQGfdPLiqueu4tptN",
  "key37": "3seLXkWij6sdwv4vjF9xneSwWJM8VaQu2FMf86JNnXarTa6k8kuVA3V9BmMiNNRGsgmevTDibamQ3aDpX3mW3gJZ"
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
