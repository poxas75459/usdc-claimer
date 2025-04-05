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
    "3WdqREpnX3EbzpcdW7mVrMb38RrTRyPiDsfKeFbruPohRNTVhYj5Xi3ffZt7nR2Yh8DQFzxePPvx3vETDTMQEBhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nibk5Hx2Nnz2f2Jg7GNcpQJ6HDH113ZtHuk4RmkusCYsjyjQ5Ty83BgYXyC1dctNqsK6bNNN16b1xEocTcBfpvp",
  "key1": "4vUmeHsKr3MZKwAFXuR8faQjHx5bK8fGq2pgSXsmhTaNJkTWtiJMYdWoD429BfWKRwJ4e1PqStaJiVTz9tDt2Mcu",
  "key2": "ZbNbczbuEak67qpxEAnjfrCiBLAgbMeGoev8WPcp8wriCYhZpmCkZKuvLfiTBsHE5haNPgQTUVBALLSw1p3irFN",
  "key3": "2BchhPqenBxoNvEembixTuehH6fKvDUMpUXPTpNjbEft2A8Awo2q1x4gLfEUJgNaRteMhTrRmbFT8eVQyhMY2wWh",
  "key4": "45AX3brXqo7qeENQ7kpaUYtJ1WTy8XnLkhP8BYMTmmpH5pesy5PVbsJziXiUSpkLyQhzA4Ls5wXZhg4wqzj9Jr5W",
  "key5": "56Jermrm5oFoGwWTEnfUkHKgj8RPoPopPoLak2U9LnrGMVxMPQ7oBvdGrQepgGdJc8c8M8TQkQU61pLK38xLZceL",
  "key6": "2zAj8gWyazA3xBVYZNokd97kRKPmz9q4DGmb37S9Gm5WWkdh7QtbUxiP5CYFXrdtUM4p3i8TBhtRfj4bztv4PfU8",
  "key7": "67mY2hKjevomunrKeaSp14Y6Vw7YY78NUppyJqwDwZLYYVwUHXSev9BpPzUcXFg8zBXYBbAod9pxF9kMQfoTte2a",
  "key8": "2VS8tWgykZHceKqsBVXHwwz2GhKMQa9MnzzyvvoBXg3oBGAkCAKFrQvXE84DvRad7TuCwz4dt4g2rufR88JUu7XP",
  "key9": "4m7BAeTMUmPF5FL6v6C9xFRv27dHeoW6oij27G99H5FFbVDqxAYiWjiZhJkp6YiyHs2No1LjVTp4tKQyiCXna8Dp",
  "key10": "2patZ57J6o8Bds7KmhcvpE7jfbWbSkeLz9BtRoNim43aw9oaREpMjjLu4Zz3nCavEbgWhDTNkXcVP3tNk96ENbe2",
  "key11": "4vRcitokViYy5EwDwmMiySE4bJTFEQXC5BpFLpA7nYKKNVcnhtUCjRxJzVmPKZ9jUHvNARxsukEQiLwPTZq97m8n",
  "key12": "3VGXFPGnGKroXd6XKpvsFXaecMNQGdmxHqYFF89Ts1PMZd6Cvq7pANdWDvQ1rUCQRso2TwHHTs3F6kE2UE9qzbZk",
  "key13": "5gybVBNWJSC5r6twbw46Sr37uSZNpXC9ciUS681RVQ7rn58ocCSB2LvZAsSwf6D4Zi1ue4MZGy1ktWSEnbgjLYvj",
  "key14": "28ieiwNbipKVVhGPzzcQBT8zma5F6kajzgnvjnWkbTBcr2GrydRwv7QsYvg8j7AZWF9xkSi7a3PcZKrLe6DFQmtb",
  "key15": "3Zc4VwU6thcpekQDdhfUb1XAVd7pKyPyc5n3Tnwm89iA3JFU3a3U8yfbLv9WSPPbLFrCsFsKU3fRxQoLfu7euS8V",
  "key16": "2gwxjBuAZD8AVfrgwVigjdn7N4UnMXKaXeKXQ7Q75YjJv4KwKHQrxGP9emfMJyJkNvjLuzJosVBhMQ5kQJaGesTx",
  "key17": "3wLUW8P4fPvDnKJijRab2uiSstd4mCSAnvZ8SjbHjDEfoZXYfsWFD5MF7PU9FBpbRQezyFnx1ZWVgWFR9cZZi9wt",
  "key18": "5T89trq3kWsdrCW8sp5m7YM6N2yMqGXd5busi6K2HjePJi9gGqCESSf68fwnhtCx7pKkzYqcaPz1JZUgwJy9v7fA",
  "key19": "5ze6B4YcV1SQgutUkswiZXqWRcJaeLhTukvcF67iTVDCAVeoCpZQ7CZC5pgqvzR3Pc7HPnraAmDmCjpB5vMyPao7",
  "key20": "5Dj3gXmd1xEvbzimrxWG2JPsZ31DWkpT8wFddGznUX7PmC7Qw6Hr5Tkmxe7JhTe17zmjNej8fKHez1M1Fxy8hDw3",
  "key21": "3e9pdq7JdQCZLDBBvPXFD5NfVmo1H6uc4gnUiH99AMWDwPBW2x5a1qGi3GyDCrXCdEFVzGyW7gBRPh9sb7vyht1C",
  "key22": "2HNq9F7ZSezVq1P1xu9CtrqVvhNtgA1h9FQymQRNGw6Fb5CaqQ4VdMY5xazWry7zcwfHW7BPc8W4JKviVQ3yVPzj",
  "key23": "65bDJpUSL68f6NC6H2i6FDtSFkM7ceXYwA5FH7TtudQdGb6Gu7Bsqk7NQfzUpBLKNV4T5Z9ZWrTVvmSnR2yN8xBN",
  "key24": "2G9Ze3NXQirRdK2ZsZ8oDoLPQD59hLXTYubdNzPHZseLCpjTeARB9D8q8ZksksRLMTXebZ1mMdXpPfwGj5NAgqzw",
  "key25": "3MGZbshANX267PmizkTMHZGLhzkee8Rwm4tGwisG2oz6teNmXdzW7ZmzNznE7JRSQnTADqhGj24Yq3LCyMwFRFyG",
  "key26": "5PLRjLJhp2YiBEJsBWRLbrxEjAaTJjX9Ab9FwCBrYHR3mNg8ywWsEmDwZUdwHqKaZnfad9A2qTQrBnJMThd5feUG",
  "key27": "2xkZuurM2Nba73Nevfyu8tQLRPYCa8AiHAeHVMuUbhpjt1Cto8C5mzzCks7mXhnM4VMy3RRSGuFiwvqNa8jyVd6i",
  "key28": "3VjxTqrDjkw15wGKySmUa5zfzKTgbyVDi6XnHfrtaVSw4n1wmjJ4a9R9qCJrp2bLBcYiduCgmbywJgga1qwgQvVo",
  "key29": "3X16oScpao4wmfz7uzV8uX2W1KzBpjamEvDw5YM6uvuZqECwHE2LdTSXwVLtC3o8HPwMpQSck3AM4cpG92LmEaJx",
  "key30": "aQ3M87eu4ZFJdQt1JAKFdZMnirn2edPgM9nqRfSSxn1VrFs3YDS1PnZ7vFLkN5YMSJsmqCU7KkzhLK9Z2ebj8hW",
  "key31": "dGk3YLgVMQisSnK8aqZRpzhsJgDwgawQcyYdsFMT6R9SBgV5kSXmhNtZH5W3DZfmP62HGWwwM5jcXQMM2UR7aPX",
  "key32": "5xejHn79xCcY6E2vSPrmEDyCoigRmYMK91MvWDbAoGjbkR5MndFhtLKKXrzpwEh6vKgZjRhdFbMsXYu9SyyCVr3x",
  "key33": "4EJsGLmztEvnx97nX8ucFuMnwpUbzPRTUnnLjPHsM8jUfFJcVi4ywnqVH8xRJVM4ESToaYFGG8R3cZDZEBGW7GNu",
  "key34": "5KMjkv3rkh5MvoZvpz2YqgpDuhLVWMFAwrSMGZTBpxPxuCtEeXzNpFE5VFZqPzqg6sSmK9KZfjLFGqNVmx6sop46",
  "key35": "2EAnBjaq9vbpbJ9a79pjSnRaYhnRp1nN5mEs148XYnqyKhq2bYaDRU8ayXCDwfEgSwjV8tNgWxHMf6n2RUVTqpzj",
  "key36": "35v1e4JW9rDXcao5MoYKCmDVouQm5LqbLErVeZGThRwegb1pgGEU8rNuk1HMmQoaB2fW5j6VU3YLhFXBCGohp61i",
  "key37": "32LLsuKnSJ3FSnKCNUMYspKk1WTxTr25raeNTWPDnVWt6XSV93n7uiUd3pecsYmGqFRPh8xzbW2sNFtFLcfVwqP1",
  "key38": "2HXHA71vUqMdbY3RNG6SGohiZzWV2WnZQWs7ukyXVhxRMEAsaBAnXqLdyVTRooptPADE6eAdpJoYuEXZhM1C6yTx",
  "key39": "4FwoMVAjye7MWXosCGnK4uaZ7sYWZ7UZrQDsNBGFxPR1Qj72LpYmoHFvsL3DYmtm3GaEUCivkNYkiAkss2sZJ8pL",
  "key40": "2g9fzhKJLxNKyDqBVLZQD6vkN8GaEEviCGZELwUuasSVW6P91ES83mt9puDNM7vQVSpd1qnW3NdoMbF3CAfcHy5",
  "key41": "5bQUYYNiDEWTKdfooBG3a6S3Jgaqsr6kaffNLMw2QJYddyKgyH5VcGiALVUhaRsmFAEoNfrS5yUjA3EaM3ufHdPo",
  "key42": "52AU4E7XDeJPNDhfVdE2VygdHpg4Fd1y1KTidGcnTEW6nBXCoNysZjWYBYyN5agDabrQhJYkhUL7VLTN3BEiebNh",
  "key43": "2GEcHcDWFEoXDSZgCdE9REXJg3ZYj9iJKLvLrFCSBMZy7m7mXW1KhfbK2BV28pz54mexx9x9fJRzQjFzrC7DSYmN",
  "key44": "4C4iLfSs5ins1ssYZTk567E6QaEDmZUHRB5gn9dtjhYeFy4Sjv49mSXSP9YkAMBiF1pbkBgnQCh3N7cfEfsKQEuf",
  "key45": "zhYJgnKgoY9p4iuZ84LLmk5pPYvZFZbYhg3Mw14Wt7g1sjytTz1yMqSvH9wAXGJRgJFcXTRKfyiwV9kzFGfPEEG",
  "key46": "422B6BA9nb2k7h5jGJ9ZWn48ZJJwygbYFrz1EQFxuoE8kMPWZcjE6kRy48uzvvrkq9YPPbnz6CZ4PDwPdmp8NvE8",
  "key47": "3sHGP2kYBswg2cBrrf6V7YkemsT4TRWZWL4XoHdjX6EDKi8h54E3oTYhUH3taCDiMCFjAQ9NXgG3Jm6yMMHxyD8s",
  "key48": "pmrLARi4BKX31UFV5q4i9BS918Dyxv4QsmLjo7LenYYubrLVf8sCEyDfVBrmC4sRcBWFVWbTPpebM9j65tDUf42",
  "key49": "2Eo2tniBPuxepVDdzyR8cCcY9U3tCrKvfLy4tQ7bfRmTUQhYPGE3KPbBydwVcWvSLudn5gAXaB6bAqTAZFzm21Yf"
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
