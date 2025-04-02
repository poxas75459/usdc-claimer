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
    "5KxmZJsXXFALAETiB6GKzkwk6FyFsvssyotyytncpvg3JstuNZQ1MZS5siTKK8BUmYPJvxj1triFQQhu1pfLoqEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vLdcXPJpW5Wipo9BxihzoGgUcpGQW1rtWC5RLrUKJfhpCiCgbxSUD6Qg1fVwSm8YfxY7u9agQrwKXPqxp9SeFp",
  "key1": "3RdvdYPStNKLzNupEYptgnYQxm77B4gXxeXr4WZn6KR3LVtS9LUGhfwAEW3xsNBmPsagPRT435KTTLAsVCD8sfJ9",
  "key2": "3mGWSezxMZQ9we3nHW5of7EdSGMD8XyQ1t43dvfXWnbasAynAkbCyJYzzAQr2SKgbTywT6RA9XWa2PFyDAWLpUeD",
  "key3": "58EVz11gywpoQTcZe3wF7oQrBgFmT3WmFSjnePmuJXL7DLNBgZsEiawPGA992EQpuCGhskWRPvcBJL2y72XLSDhM",
  "key4": "541oNj2bgcREG6W2GUbcuhTSoAmdk6k5SCXJjzKD1ge3gAHTiqo977v3WF22SHAq24mR5AxShAjk3BUYsBYCvz2T",
  "key5": "zZf9kLedqQvgivJeHWtqktj9rC6DmrvKMsYDidr8tM3HCzqaQoPwWZVSXa3wKwKsFCCR6dJXpdGndkKpbpgzQiN",
  "key6": "25vqPCVv5wG4n7hTMXomXcFRTfsfdFQVAbQpLhuL8gKhD2zJPGNBRbEfrk4Piez1LfVrXQcDhWCpvyXUnMtCkx8L",
  "key7": "Ar2QF7EML2cqVuLK4uNCgmqUoW2qnvzpo1C8g9wQhEoAcK8TanwwDQkcjsvGTcyZjWYDDuyYK2GJhpgYAzT4mNH",
  "key8": "5vNuAmDCiN5thoQJaUUp9wdrczqx3FJnVT3qakStwWieWH1kDKZjZS1PBiDD4MTbL6akhxkPBk3a131car65Q6VX",
  "key9": "YYYqfgatwctaTgotJikjYMnZ3N5L86e7Ns5wM1JimYdagCPn6ZrwEWtSdYLQT2AR1nYDkP4nNMN6MPKMeRNMkTK",
  "key10": "5yuWZeoemauhBgNKXuJVVoQJ2eaoWbY1DVZfzYtauwKERueU5ZJG71vBp6XXXKTaceobNyrDEZbvzjYqKPwjocm3",
  "key11": "4EfW3z2utTxeaBi4eTwX5K5ZUuKPqj1Dauyipuo9Lg2zpLKLRhsb35Y6Whoq58nkbaKhJhpeNKcaYQfBSubDTziZ",
  "key12": "sdTVEv382oqGhw8KGPmuf7iohZGyD4QZVqLjG3proBmLZYKgUYwEWiMwxW7wUtbMZMaAqX2E3bc6gTqkN6sGqCw",
  "key13": "3LckERNqFzmuu2ARmdu6YWMh23w8xrsEq6uCwQXv2bhsrRwHMA4uP2gxfGWE3tdL1JvKF9qhxoHcvJJW3dUgERCR",
  "key14": "4b1D6BC4LyeUyHrEaz73o8NrX4GLkDMpn2ku7PadG2biXxSsP42zBX8iJoVir7c9LCpx9s8ULSYgNzniNzjBCqLt",
  "key15": "3mvXPjXQxYHBCrkCKuj55ryu4JCYUu9MhNGvoCwwfChJhNS5AFEabsDkCo45XnveD2PZ7zDf17o6oQYLY85QAw5d",
  "key16": "3Sw4EDsUXASeKWuWiPrQ73NcEsnQ9aSRaeCufCGwbUCqHnARK9CbDkHYbC3RoKqdaFrcNnE8Nzk4ruXxMf3JSJHa",
  "key17": "4PQ2nRJEce13x7ZFgtvxqqxbwkLSC1ti1WjAAKTRQwjJLwwJtjDZZ68Rs33ajRogkteBxEc8YjMmgh7bBUqEhNcu",
  "key18": "3BN5ybDiUPy1gmcYPGcURECoZ3uBEynDzeJyeTKt27Bkx92eCUFvVmqUCS4uQqpwUc5NsqMihVkLqkbfoSNUF3pi",
  "key19": "2XUpVXM5JUawVHbNXSme5AnF5d9771h3LrG7j84uJn3XJm3TbyZhzM8StgTvpKDMpTC51JQwYmQBiqAApV7Ukwn5",
  "key20": "63QuzVAdfVUq86xhEAViBAtKQqQtY5oB3XMAdrnHqYYPUaViD9cRzyUhy4diXi3vFG5MuDg4qj9cp8FzHQVUmXzT",
  "key21": "B74pD1h4BEDaavzY8v1m1yPCUNX9ZaCAv4DLq3ySWLvp9fCsEBaHgwd5kcYyBcH84kE9ExuNaN1GLPtcfXmepPS",
  "key22": "5tHPdUACBGKg8iCg4XboGqUpTVCrUwsEYUjvvdy8xutijjTcmV7DQR5ZCdogc2VoytFGsSj7JUeGiy4xts55padM",
  "key23": "4Brc6UKXbvNAAggMbfc2UjVfRQYE8Fx78VvnGjgL4Hi7j7nx23JkqiRDbz6SNNoEbztphpUahM5ZpaPg4NCcbeRt",
  "key24": "5KhfVgvQcSwSXq8XGg9y8aNYsz6yoKct4WEQFCfY2RfszUEYgQnSPbhTLf9i9RoxbcnkTLKrSX35NfP5XVHKrwqt",
  "key25": "35zsTaNSH4GfGumeVL42p3EddwWQkXEAnN8PoXT6mtnAas4fUtvdbwGGZMn3Vh38qddYVAP73Axz16M4EnPym6zM",
  "key26": "2gagrhhDh2jsFzHZjVSo9597uQpquxyjfrKCUc2bDy4vsJxgs6rmc3Mjd4aRZuFGnxBHdqbrvee3NGXpVJDv2Rxg",
  "key27": "5EbLzEW431dRApDbN2pMUub76AV4JzPBUUNZSNdoSkhGKrBCGrMQa72LAvpPbusecreJW2qa7p3QkyfEFsj87K9e",
  "key28": "2TY6KQsfaq1kYXqkHhsPU8Wu6wc5EkUKj2YkkTx4rYWR9FrbFEMvkDCrZKUKaV1T6twvV9rpd7yxGRnuxcsxe8so",
  "key29": "ojEgJVtzix5MCGH3SFoSm6B3J5HruZbYrJSbzf2G1rLnynQ7nGygZoRamQRNettcdXnzL6LdwLbM5xymmL4N2oP",
  "key30": "33GACKYLy7rHNmS9vCKSkXjPkvgfRV4sSudwmRJL9VkBoDGxUGiNTwsibDoERfT1fToXKrb1har7Tcf6p1ZL36Kj",
  "key31": "5DsW2n6qky3XJmpf1pHzdgoDFrAW9utrQG9xBCXR13tu4B1iJ6cQvRhdbgNewVXM6htsoFmzAFKUnu5MCyoNxhvw",
  "key32": "SQ7WFiPiAzvrU8yo9TFEPyuYGTK5CWqTiP7bsiAA3vzS644oANX8tCvz74QbGmJVn37VsiKxepyQMWCiBwzyEdd",
  "key33": "iVuUrT2AerhLHjcBszsiwEZaxvAHPLeMhdCPqGe6cKKKPqPehArwaWSAuh9qMYC4bHt7VDx5nfcNAhuHgrwXpKk",
  "key34": "ZrXGxHRap9BUyBANPRXuLmR7EocTt6EzEYRMcRTZj8v4XF5auLeF9jiFUJk7hyD1SiqjHuk7XBR9Zo6tAWXvkSA",
  "key35": "2r1D5xcUgKziYc7HSHxCBS8Xeq3ZKKeHH6mEvyJvkNxuDFB6pmDDZGeceFf6V23ZB3MDRkDgafR5sjw9nth2jsFm",
  "key36": "4pMZZu13cEgARk9XvYkFsqbqA8DiLAjfbyCZYFSZjzYZpxnrqJQbaPd9GF8A59DCXzTH6p6DNTRnQ1h2QmMozbg9",
  "key37": "24C7VQ2Pwh12WhV38Lwnbzg56iFPwtMBpuEpRyrYhzcU6AC1PmuKsmsbFFZ5zScCv8jHktQ9gBDsJfZpNdSHNWwJ",
  "key38": "GMsJqcV3Yt1vFt37XnMHT2sai137JHdkobmyURKecC8b9XbwYkD6GguFPmTxvjCNJyoeeX6ceUJJUCVE5f4tmwr",
  "key39": "2cJ5hA3nf65LjmaPbrKybayCUbPvUzqAoJxKA8ncVLH6VRahkiXWSQKDwYS6KvafwEFHCxtzokiurpV7cyUeLiFk",
  "key40": "4Aejkuz8Y3JpTtEhTVjcN84rFvuNytYk2aCJ96m382mA6A8pMBQNiiTFAh131X5tSTsDvj1rjsLjbH7dbjmfxFZA",
  "key41": "5Choo9sM2ycQytrQWTnB395MiisKpKgeRGV6rnoMscZL72AJ6ZLdmR4E5ehd816vpwTLVNuucNtBWHnFkDvPoM9J",
  "key42": "TqwH7ofcAvgGbQN1ZpyuT9zgAm6F56GoykpYPK7EpCKgCUBkKVkrr6zVXKSamTr66FzhhXHGJobDJw9yKHFvYvv",
  "key43": "4He2oYfgfJFjjLfpNV1CWTVirsQwrsWLddd6WUo36ybgYvhAVo66HLqsG3pvnciwL2nKZhsBTquBrKeFAAXCABWM",
  "key44": "58mZqfpaxbLYJSrhHCrVkowduxCWxmg1oCmCkMQT6PmG3XsNV6Wh3VTrotZwmTvSweJQmZMK8X7WBroFpDD56fq",
  "key45": "4We5c5cTWArW6QiWWw1Nig7zZ8Qbayk2LzyCQt951ZxR8VP16FCD3dGQV5sjKU8GRvr5D7JW5s64Wp3D6MBKBaqx",
  "key46": "2joLW9Wqqq7QgcNUKJ1ak5eRc5fvYnUCepyeKU6v1SJ13WjXzCHpF8jN1avJznbZP6YBke98mgVksK7VvegtJ7Mk",
  "key47": "5JXgeKFhQJm4dSxTRvCWkiQbbxbd5Wk9y9MQ8kFVr7NWsHXXjVp9WWynRMG1DuEQaYizW4VKx3LHJijFPewiNRKq",
  "key48": "3NNgsmcyKahoEp9Hb2doGA1fkJQPnSzbYWis2jAyvkAKZhjWdTPCkYKXsb31oSqt4p6ZoWYstod3N3Qp5PhrBMbV",
  "key49": "4NPwDKnZo9A4hgrsg7WVK5tJc5d6K5CFFN35taJEedQc3HXCJotNLdfTHu3uxnBKiVa8aKGFTUhaDkBB4jSUkfGT"
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
