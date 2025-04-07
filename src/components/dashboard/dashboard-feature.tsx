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
    "5ZdGmzoDz3kHt9R8SdobeNPP2PNGvdS7T3yMAqmuY3Fe9SSK6boWpEfKdmkXQ8o1EQ6omQeTPKqtkMTTbJWrFBxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4vvDAvDqDnGcpQZqbomTS5SQN6AFzQzS9TwMXqhCFzrXjHhy5RBw1onAnmTRZxEJbdYaiyxWN87R7oCydNtLZB",
  "key1": "5HjZGxT38x5hJw2MVwYJv7bFoq3oPN7qcAKtLr7HcDiUe5uDSjGpU69qPJ7rGb8gKXebLSvbtY3DEGX83BK8JrfP",
  "key2": "2EAX32qWp8WfVizZQekbush5tBWb2tbtnd1qKqHhDeoBoAJRhQ6GSe3yxCLVoL3RmWmxLw3N5k8anEYgwDBJc2i4",
  "key3": "5YuzhgqRxuYDTyrUCDCoRdDXNKWiWTqyQz3KZLX7ohFACBbPt8nG7fZCTxGjACAWwBaXLAumVSwCUKVrT98nTc4a",
  "key4": "fCy4DL9amT7cuXNwnkSJiHRsjqxEMkWwjTUjL6owExxxG1dLWVv1iRxpd3LVkUb9nuoytXqKny5Yw74hZm7BP6m",
  "key5": "34pSGK262PGdZA6TFxb6DrRPfgFpbt4wbcXLVm1RixwKioVzWiqcjVxMCxZbFNTpUxsgWvpNzBG26q5wFNZadqr6",
  "key6": "YxsutzQkqvxJ3DLKJuNfZSN6kKTf5nnqnkJDgNLJjDibxjYzU7KLCmFLYAbnGGyMKkXnpH3SurwkUUJf8y6vFhY",
  "key7": "aLB18svBikrNeJpm2DYpRr9HvWnKQQc7gPdW8qL2QGjoA5S2oztDWgCuf6RifTtm35hPgMuzmy9WFbytdZuoszW",
  "key8": "3g4AKTBC3rBWu3bG65cKamUkNTjrHxEPGb6qWxqfBh5GM27MhEpxv88RHArDxq3aZ4kSb5ZTa8MCkavqy226CaG6",
  "key9": "5yX1xuAYtoHsHT14XNERdrHtY5SGQHQgFRqBRE1GBHBcNhwn9aGQodFt9ogs8qeBsKMwXu36ueLE1LQceWhgiuSz",
  "key10": "2iZMNHa36LXb2uMqvXTKQg6PX7iqK63kKGZKetHwPUgenytw4FJwq4ixo3oNLy1bDTGTQ2bZ1bUUb9iQeSGdvzmP",
  "key11": "4ZJS3SZjY9f1nHqGqm3fDubnbcoSwa7GPqKdyHnLX9T6ooPSqmfhhwzvqTyFhTWDft4GjX2ozKMjEoPMHoYsoy2N",
  "key12": "46G8h8nj6EqgAgAyQo3J2fj42v5BA5S2SvhxTJ1UqQU2Ztapkhac2MY4ivYeQ3fmdJswUB7mu9C9UngfyTy7Wbtq",
  "key13": "En5icCGsJC2oGbL4xy7We1GkM2NwziQUGf4i4nGHQL43d1kg75WbwHDdv8q3vFvsYaQPYZPwgi26uENMDXe8MEx",
  "key14": "5fSYcVzUKrtXS4mouMZwxvNp2HsDRerm18qrpru7pe4f1QZtxbuLjroa5FHovK76C3EhBLKoGpayRuQJG25GTAxU",
  "key15": "4rn42HCFmsSZchzSQBbndVx45uTaYr3kvKGcqL4vLG8yFbd8ehXCq5r1BgETEHYUXorECj1k9tdg1HtVzo2A46B4",
  "key16": "4dv78qjWk9G7ESJ5jRfH7AHWMpdU47SHgxvDFjaEW2VGiqLouni8zNcyigq9E8oG3M1oSC4fVj6GQ2AETSTKGYT9",
  "key17": "5h4MfHFxEriGQNmNnnSdmipwDuJw3DEK7zfheSvFaAsY2Qr5qeUd8E2LGjYtzjW1Pu2H9ZXsGngiNqN7uQ2oMVF9",
  "key18": "5WxzRpMqTTkuiMWBjS6EQcGfq66uZXzVKE8RaSXDofm74g7aYkgJKiWhp9w7E4HZNqwC7DExNDs2JHiKBjKJZFPb",
  "key19": "9jF6MdjtoMXBLcJTyJjjBbYXVrNFsJY9Hy3tEmcD3HjqoWKZXBftp9SxbHSRKzuUrjCL398buQpvQQZn5DYQ952",
  "key20": "2ATEYS37X2FAYV3APWDcBFLcMnuT4Nvg6u4t3dbEx33h1VevCa8QvcjVroDqPYaEi9HD46HuJG9rBRBbYWevV7D",
  "key21": "39ZgnrGQgW6datWVPHg9QHwtjpZx5da6A3dDDoy7jwn2FMFXemXFuEsYWotzE16HRuEoQaicmkC8F5Pk3quwTitZ",
  "key22": "2FTdbeYkRmE2iNja79ZNSYeJwSvcJmc6QYWfb92WFHp75V5mQtq2YETPtVgEeWuxSH21iz35PfHa4BY4cVEFLU48",
  "key23": "2j53J8gZ8FKr2yE9qdCa18f4nYGrGiN3M8Qz4FaAGgGDyrgMwaEBUGtY3JCJeYtvfBE75L8uyzB6cSPQ9U49swNT",
  "key24": "4XjkoRdi6WMYrynQ19wdPuWpi5ceq7YEZ3UG7oBvEYuBEZmwUZWrr8LNTELUdF7ztsHnhbnuwKdeHdUZCE7vAAcR",
  "key25": "2dqrAELpyE3tVJz1KsvrSkZFdEC4TVUJrxb53c2FBBa6bTPy3NeVfELuRcrbb43yr9tbHCnS5o8WapkL7aSzaLcF",
  "key26": "2qmdyjg7X2cmA1cC5dGTtuS3hrcTt7DZfiBoVxoMRjkt8wLaWQcj6bNaCvYTf1Puhbfxmt2boWZV9pCpgTciRnk8",
  "key27": "3v4StTwxnAtnSUN9jX7SZvvN7ZchLFU4Hs76Een3tFVPqagHohCzpMvwYRqYMAbRfZjymhp2zyaXaD4NU9bSV9dD",
  "key28": "4ZCwuCBoxvt5YHBWNimxe2YYB4jbtLuYGEyJjS6nx7TRqFj3QNC9dGwKfCNgk9vkb8pnBx1zHaNj4euci2u3Nqam",
  "key29": "KPWgy8Y8E4iCwYHaufJascakVv54DeiyLH45AccCzi3b3LjS944e5JEejmQCNGmPdn3SfHixAAAmDkUapdZMKFd",
  "key30": "3KVsLv8TXSGnon1egNWnZKMgsgx6mkAgghfqiHuoqfwYvaNJoDsw9qjhuHiQmsoXBBd1oYHmKtchtLMaffWgin6R",
  "key31": "5zJd7XPTFDWYZTEcFbSm9W4PANEmvkKDqMiUeUv5utyq62PJop3jt6AdWnYkQD2kvyTbmCBkrdnpwurw11cfxEaA",
  "key32": "3hszfZGo5K3cr4CzFRpqf31VVcKcqWTGX9QdraWRhMXVk9oMyK6c6rBCJXnHstAHc75hKgcpWYqK6GA8QGPWdN5",
  "key33": "4HdiSrmYmwfM2Pz7DbBhyMvajuGPJ8vF31Nbebiu12JQKjY6xP1CvarRRoMtaTFoU5FZWbvykXoLoRx2t3gmTQYE",
  "key34": "5XCMZMUMgYfzZrd8cvD9254pLyiaBBxCbLxeMC5K8eL6jSEuZhMhQbCQfAyAz4FauZcuBCqVkdkZLDnakSW8htAH",
  "key35": "2yx3gJQJn1RVpZ6WHMHWYyeETzu7KAt3bpi7ZrxJ6kbs1MEf6s7HnViwfpKmA9KyST28N11nx5P176jQ3kn4TqCy",
  "key36": "JFYM39syGhfm6B6Tuc1EE7Dq2AktFcbvhu6XEbxPBVKbPB5fYACHuUVv8hnWWEjTsjBDU7ouBwsShRm68MehBPL",
  "key37": "5sz1hijihyLhzTuPcbs4VYVYLhbkbWFHkTojm4gDP6R2BLYyJvG2Ls5Y3jSM9FfqFNsunaAEwvGBuBAZNM1Kpjyu",
  "key38": "5irevpZ6PVywQFKzXXFmjktF8ssNa8KknyZsB3cfLdXMKFYR2DUeRN7gZDUwBeGkRj51q5NBnhfATL8tbhCq6Rpk",
  "key39": "48gohMMVE8GPT5C9gTipMucEufG42PnxQL5JJwb8YyfH9MMMvcyDiscEcSJUE9RGda8m7ge9XbadceVCeXupeY7A",
  "key40": "ZJTKHuSkfqrVLDcLFtp6GTfW5myv8YjLpPYKpD6rvvTjUHYyb46u452vWt8o1wsTdwKpWGiKt4Q5VUU9fp3Dmkh",
  "key41": "4s6sXpz3YEuucPbLqDZQVy6Cgu4Av22w59BUkve4bbPRM97R7UEgqTHqjtjuf56B5zbeW8ybdsenxKbpMBUASHVB",
  "key42": "4z7GB8PvvsQyA9hNr6fk5ekMVSQ3QAb285vRBj3jbcUTgPFFUyYMEYEw3cSLhL9GffJFrBirNA5kNcRTGLRNMm3p",
  "key43": "2Y3dMnuiN295fx695v8E5w3b33Qrd7mVVFTfDr1BRMWT7xKr3TREs2W27BvX3FNxXtnK25PZ2nJ9pbkuUsrozAma"
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
