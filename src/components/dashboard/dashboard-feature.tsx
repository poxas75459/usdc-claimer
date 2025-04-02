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
    "4X4FQWfnVpeUz4hhFD9mvoVmcro3RpuG3rAxxyCZDD1VwEsn8DdraEhSyqYW5i7jSurrnkLgHhkB2z8SR5H6Yjzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGMs6SBBQBdZ86r1oz4QcswcKCrz3S9t3SRQ4RujmKLb4x91RL8zY6bBLRnBSR7XXeLyna5Lu4ZFkqzWac8ms13",
  "key1": "5aj8Jo9dVecSgBLG4LAaaAbckQJEyoHnHmeeH5HcLLPjKFfwedbr7qgK8EEYLkj9ELbMUCnZimLejP7R9CSWJhqG",
  "key2": "w4VG113Av6pppWjF5ybXWnWW5DfLaeyXdYyRisPczd9thef12ikr1UEJ5cfeGcRfkRzChcrZMWWNkHExN7sx5Tq",
  "key3": "YUp23ZguSGBuqTu1KVAMahCK5NaZfhEYSJWDhH9mpqX8JDX4Hg7Z7pTpa1tCBa1CoUbtRkDiVwMQ51tjsTAyBjp",
  "key4": "V8fxQnK2UjoTCK8Dnf33SVA7iwKiCw9iAMmMrViraAJ86ygB77XE19xk14pZJvrRmcooAX7xoM7RrzfCDoYhURG",
  "key5": "5Sc32wS9avmHBhy5BYYXMtGDX123T7tPcDqRJJKaTFGsSWs1pRqTA6mLFuAzG87e4q5bz4gvzgCjZjKdLMzcoLLN",
  "key6": "3poxvi2fZeHLD89e3hCDUz9Mcr8soU3noa2ao9qA7xDBreM7MqijZqWXoRmsYu9jqpHNGpsD4XrcWSpTyPWkfBwL",
  "key7": "5fDaC4462EWUjHZrheivoggTyCLpt2yiLEi877rZULq9xnWZPbVX3aC2uWgwN8pAaLtfe5G7qQYcY5CXZ5rttY38",
  "key8": "4R2TvRXKUKq2nVG8Qc5kt2F8qTm28CBWX8dK4mEacao2GWarj8GJjTeFduJiN2FTJGui2KzfP2UJJjy2xKbHk6Vb",
  "key9": "5mZHe3WShV1McYe53q3nErpm5w9yhVabr72PnP5yQofUA817zhz2LKBbCjGbhhfc23pDX9dVUocwzKq3oz246YRK",
  "key10": "3cUdzmnVmTAan5GkNEgzQayRU71NctKVK7YLmztRheb1f7ZkSSvYXuaoLsTXVK2TP5VFo1H4onqTEUPdUtHEek48",
  "key11": "2Xs53Q7YiYzFbJgwbFMUjJDpTpUcrKAuWHiQpgcj4vLfVZUw7uMMw8x83tMd5XF8JnSTbgcZa73LdfSn12Nd7jLa",
  "key12": "21t8WcCAkLbfrmQT2A6ak4waBRMqnUw7CRgwi1jugpW7thTGZcW18frkAJpQi3Vbb69oo5pY7C2QPUe1uX82y7w1",
  "key13": "2qni3fmho6ARodXnfUt7uQLuucfZvGh5os4hMQun3QryEJDcRs5KCyPVWhMdS7PdsJzLQkutTMqjEcv4Zdypc4Bc",
  "key14": "2CgNpnNpDH7qUffmTfq2f9vp86iWZo18CwzpbBWfFXS5DsbygKEABEpcDjbMAQpKFhWLZ4iuGzjDYKtHC3cZzcM1",
  "key15": "4nngSMYTj8G6MRcnShR9X31vA6wajbKXujdugU8EE9KGz4AXEe4x8Dp2iamsLyjxJaQPE7bUesECvx52mcxxeby1",
  "key16": "5atbgPaU4hDMALCcgKQnb1PrvPt2okuUZSAicJbNKowBv2W4o4F2mddPv4FJq4KSGcXSwsbhUehUqmD8wDtVzzB1",
  "key17": "oFS99TfjphE36mHcfQdb3XkcTfsuX4wtebhRjZcL1JUohDKQinBr948tSvRvkafeCWavFvW7G1WYFxFBURiCLmD",
  "key18": "5h6dFi9rqqUk5YR9kEEKi65aDbopLndvvtPtRn3YGv7BCDtdbgRpfJN6Bjdesu9kZwwg5Pvym8Jzf42NLnRRJ4yC",
  "key19": "npErMhKJ7f2smbyj6hZDujKEPgfDdse3Vg4vkhBonBFmw1sQFMiUugjPPdK22KoKgyDRD869xa9gqXiXHtzsQc1",
  "key20": "2VR1Jpr7WJALVZLkXLvnBQbLAMBQUvK9q6NzVcMyTCwWaXSNNhXtdJfpbW2Spj5YtxbNymyAKazGWvx4FcsBFkWT",
  "key21": "3g7d8Z5aG3iFtMHd5pGpAt7fQxUVT8ZTq3rEmKA18FLyBkrh5ZcwetYNFNSYSURP4rHGDEEfUGWbiQX4traVifv4",
  "key22": "rBosVBGPzpLR6pf6a4hCBnr4QvZr3Q3CAqRE1Gpyk57q2bxWtGGMQcNLPD9oU1yJZfJUfuwPbSL2cYcpHzMZgQG",
  "key23": "2oCMtoXfKKR2UDUAJFv1eYxFkiaphhSw12LVbqs6R3XZGj5TivBXQYv8yC6oS1LBFCF426Wsf5Hdr1Kej2sBLeZ1",
  "key24": "2cN3SkzvjRpUBNiUcoNUrUvYi82z5W5WuDXx9o3HgjgQpC7VyCwaMbGvav2D4NTtoktuTrtwbsYahtAvfVDfDARe",
  "key25": "q91kSVYkzKUPx7qD3keM22wc86bP2mVMkica2d7qhLJfePSGSsG26GPnA5vYqfeyUGZ1m575iu8ouE4NsU1fNxU",
  "key26": "5s1S3Hkvdb5F7n8sj1C2yqQxsnLng4ufCMVR3ggQDSXo1Pdnt51vnyRTeV87jm97Wx9gcZSRxrjoFm9mWLdA6zyq",
  "key27": "2mUsSyp1zbgthnDBxXFx2ZFYuFhR2YXqKiuACyYfFzRwHNKHCW2pCRixUt7UwpeDwx1vRkjvUt2y2FZfMkib6KxP",
  "key28": "5MKbvUVbyKfEpkJSD4Y2nRK6TryYz2c4RWAxHhaBxSZ9kSQnitxtrSf5uuTiH4cVn6JXosTK2p2UDjBkeJjK5gEp",
  "key29": "2VeJRUkbQhe8nd4Ca2GmPTaXyLTqd74kzzYr2jdgiMCguGdrgyYBpSVnUzchiJ3j3ZhqfHaJXzr7yZqvPkQtEC9Z",
  "key30": "2DNYq5KMznJS459N42hdDn4HEHybs7C64JD3X42ubW5gpjmQJtPi2Yhv7bDggiiLnNiCiVzHcxH7LNiHb1r1tLzF",
  "key31": "3Q6zF51gJufnPS3FZHEU5eRsTpDRdiDtq3mzoo3EKmuw85TvmahZa2rGrmXxbJjTYsgTzzyDaaxZjTJD27aFjaZd",
  "key32": "62Yas58xkioxEa8TKKM1J1wiTLKBaeNo1tMLgtMWvnpGAXmKpYuAaJwJncdeH44mZMjngCy2p3pciWXRqXzAnb5U",
  "key33": "2YDcKqS8dWZsxpTXNz3RZiRGPDdp871EUJAdYvSkifLDygd5YyagjHuf1rSj2c7CbXbZd19TGfJbqMLWVRkJyw54",
  "key34": "4QZHEE2e5RLrtcr2i1iKYHRQivMgXe6ZgekW7tvMxRBvN576rD2tY2EmYUE4MM847GZbryTu8RDbPotLQfWKqcaH",
  "key35": "4h5j7vPEvqg71q53KzcjBnETVxd3KRRHGGEYonscnhyfgHvB5iPXDEmVRvSqBRsPZgogDsp5Fc4XdbWmyqmmLzP"
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
