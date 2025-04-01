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
    "4egbunRWFpVxNSCc39qS3Yiy9kW3NHA4io7SsWgnUnmb9aNU4o46Yoz8cNbML28uBuM5W2aF3AKn7FWHsgTqDygs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvCJANWNsPh1xUhdCy9tPF7jWmgrsA43LQf9HTdmjJ7nSJ2L5CCcEhv95qSexXUMX6DF41y7ezLxbmPkxTW27QL",
  "key1": "4Pf6MFpgbFMggJostf8Gn2Kke4RFiJLRjKoB9N2N1uJ7h6BQwXV6HMdKnfUVcCLLf3XVw8oyHyf4jrXxe35YPKsL",
  "key2": "2LBDxANwbYqiLm74CEhMKazNzQ8Q5peSsk8nKb4Atp6FdCM72Wf8n8U9764417EpdEVgNdvQmLTHhvToT5Pphabr",
  "key3": "2VcyX8bT1g6DD7w9Hwi6BiXrKdG2yo7pbogPBgtEUhSGUM1LgY1VYxNNRB83ddbL6rAmBPxWwwsRPb6fj2U8naFX",
  "key4": "2V75uTca9E8xf5avmwrFYhnBgMgiQqBjF3KKAPTSoUzX7WkgJQEU6XuocX29eS5p6N6baYhpSCZ5LeHwrSYP7GdK",
  "key5": "3U8gqH2brCuhzAyFq8DFBVXyKmXrHFnbwSXih2By5DLAeYvzzNi4Fn1uy7LjWER24uYRdjbci3jJ9v7JnjcaD76J",
  "key6": "dxWcnRpMNrTfFq1Kr6Au6urPifXhN3B9aTc3vhguYoahWXPyt8pJc4Qgw29CDwNhaoj7PqychEs4pt8pxBrqN4A",
  "key7": "3291fXDVgSbxfq6aUPst7EzbuMJu5heAPysuk6T5tUwfmP4M4F5qCkxWJ36BXJ2pBQ7JGR5KtKxyjWTvEuVixs8v",
  "key8": "Aj9ftzyGZrGzqN6qFrx1X2xnaUnrwNcYZUKnLtwRNdEr7Miw1hujn5waH9NhWpuUWUrwNdZr431X6MFM3kYTpKL",
  "key9": "3nfgF83ivtJmrBbCbzvQoG9g8cX1628QRx1yeupZegr3QdHNLpjKhcU5Cp3t4CvBaNPEeUpge11HxESwefY1ZGoy",
  "key10": "2xLdMuSnmEQtkMQK95iE2mvYw5WcjEwpnqznBTRY3paR25Yequu7qwYeohJwTb5riZCXzPV5jRnqT3n7rrJEReAc",
  "key11": "5ZfdTnDKJRGjjd1mUyyH1pTvDmvFvp6gKfGZcaQm5XDzV8AJqmA3wwgCZvKPqKsTrPX2T9VqMkAbriB1x1sgYYK5",
  "key12": "2ykaTWKAEb3bgKbTpZ7vJV4EdSD8o7vRHza14RNPDTFFmrkbNozbZyLmZU88ehqQTX4wcLPK6ym4jmNY1vN1M64e",
  "key13": "5Eh1S14f52apzMhnSzCkhJQr66NpUcVbWQqxudqoPkp1R1jR6rhz8P4GTT9JrFJMS2q3GpfjUga5Rq5rMV42jK2n",
  "key14": "tCrVCLb3mX77vEoQjoFDUZs1LwD9AdxRLQYC1Gjsr8iSR6EavMGH5i2qtQ85w3jPrRgcs61ZrzCNQHcATmccCtL",
  "key15": "3fcuZT2kgJSH6UUHHhqseTgSnpBfdtLzQQ5zthU45z9cEg6rA4yLekWczsLnL6QSQch1jjfxyRsRXnCewVoh4vk1",
  "key16": "4pd2g5foteJXEfjJa5iEJrr3Ef2s1si6w85LwujyfV7f6jjwv6BJWFrqpqoeqxxAmjNRK2io95u6FnFzmaEoDJLc",
  "key17": "Zt35grScMxqS5uzh1MYcwp93CBWzcr4xJVUamAtCq8dUvKKsP7XWNpoaTkNY95ENNPBWfDg4Dh5kntUmbsVcRoh",
  "key18": "64qjhBQeSvADxvEmggiPXTD6qZNcaSxpoNhbMwkMdTYkEbDFQfHec9eN6jZXg2TUxNJvDUcjBnmdmTSvZyGzz5jS",
  "key19": "aWsW7ra9AEwA86gMcH5ECMwkZCSTJpqvX8AhNkm8mJsY6hjnEPofnXRsAenVSfgufy5XGp1w2ZYYNdGTGGnSwia",
  "key20": "PGj4YHYdtLri1deoESTAAWQLjYansfSvxUwV7u3fTgwuts3ib8csX1sXSHAUvgL1c5J2BjxAcwqV2E1qDmCNDQR",
  "key21": "3AjAV83Ucfe1CSXg9uEnvRKkBsii1PCBiymNGCh3TRHEdnP8wrXoSXtu3VBPZ9EDRbUph4fMvssBDp7Z7hBHgsdA",
  "key22": "2rVsYhGWotjwA67M3vt221QfaaQ78wAb5DSNuThzBm5e6iGzXYN9yFStBtUxKy8cawLUGhGFqyuoRLndgNKrkonc",
  "key23": "9zr4zLMTvWDL5SJ3ehK8a7jsJNCg7bZf5zBfoiW38yW5UZoF5njSvw9k6iH3xdwPtBe2c2n7AnjK88c1wFfGA7L",
  "key24": "2w6TvmcR5zCXdsiJWyumxbEWTQ8Z5aMMUoqTodoufGATjwtJnTjd1ZDVvkM5FuNpGdoEGqofg5L2bZjHQhj9Zeai",
  "key25": "4PCFaHMFZarJA8uYJzjxY6PZeHBvqWoKaEGeiqb81fo7dYfYVaJuyQw8gYnPKqzz9rM4bmrRuSUumfHLNcGmu3ae",
  "key26": "4hhw2AniZHMfbExVbAVoYyAiGE6ZLMJtzghZvBqMtMQ29Qo89qPmVDBjL8RNxxawbkuhLJQ5YKnrbBqfpMq1BeHx",
  "key27": "29rpbcuYSpzHYyF413azYM7aRKt95ZJqDcvGA76tKBSfviULsC2nWSU1eG7AZeWvMz566XgLmdrxv5EzwbebaEhr",
  "key28": "574G4g2mkAK4Hmm6PY1sjPfhtxxcxrBXLDAM5biKGNxLayAVMYuwQFneXcUHpFiy3tK2PkNHQWDVxDG1ruJ1Xb1J",
  "key29": "66nqnLKQfgVBNyM4k9kaZU8F8h9qR8nmw3FCDcdXUqJpshzW3wM5cLMqTTCZ5PHwnhVKeMtsA5oNurDH6HwhgY5o"
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
