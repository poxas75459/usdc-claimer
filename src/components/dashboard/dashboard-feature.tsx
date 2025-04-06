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
    "3wDktfC6pskeZWnkS9CJ5YJzApiGQyeyRmWXcoxSDLXSXrYDAJoib7b5X77iEPtZMeWWC8LjKhwqqtxoHdgHhTy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DCycWWpBasRozmsf18H99xEbtcctv1nQYeSefDj6WsTdLf2KbwmYQRhrGWc3x6zXqnRkhVgXdL2jAaGstuo7B4p",
  "key1": "5E5owfHvjiDUYUfvrMEzcodtNzrMXmQJsFwTFaXWBvpnY1SxMv3UYJdFX1kfk2yDpenYrrBvjW58mLKtTfz3Q4i6",
  "key2": "61M8FFJMpsMNmcm8Vd2iv5vvLb5h7et6Ueee2ymgUL5Qy9LnyMquMuSDesPVpafcqVhfxZ2byvFKXKXswnjumySz",
  "key3": "2n55YnqB1hzfpKGKNCUkEjEvvPyGiLBLLPVa9s6CWrLwhJgiKy3U2nDU1vEnrLCskyyifkLZW3yeTF3x43qwYTcK",
  "key4": "2q3w24v6HpmZQZYmuy1F43TbmKVKr1fb68d2X7oqGnZkF3fKfVovQ88JfeiPabFbnc5qGnrBtVee749ooc6aGGHB",
  "key5": "H81PrfcZGd6pubgaEKshhztzBAvWez5RCo3UxEyfx4NTWGrmFj4hrkTwVtCNgJekpimurk7Vs1R5tZ62hv25Z4J",
  "key6": "2v2hpLHJdxzK7j18BkKW8naqsjAcr6vPvnjnkUDAzbEM5wwctjWKnwQEynCR3ciP9nUFRtSt7ekLDaRMMQf2Txcb",
  "key7": "3RSEpHMxt2CPoAiiJe48GY8MiRqoc6vSRVitScb5t4XmhCA3NrzjMaZcTPN7rXox8LtTRUd8neUxWSTdaJ64jGdb",
  "key8": "2uxPQ5h8ofnzHm2Xj7SmT97mt3sVu8oFoQuB35R9jK4L8xnzkvPYRNojJrpfTmu7WhrmjteC5g1Eh3JVq1Bj9hbU",
  "key9": "iNx2eDArjED1jeDToUPqnKqpW7gs9uLEEA2fzXSoaewBJ8ZcAaa2p7KLNEnTLn4KvH2bAB3aqM9fFfDZA6T8rSv",
  "key10": "2n6MBZT3YX96Mnb1bYi74oh5dGPUcY6cf3XVMhfmkuzQxXW3aEi81fxtmBYjZA56s3NPaGGfBaKr2pYEL7S1gMwL",
  "key11": "3u6MdeQvFf8N7biErsxCgYomJG7svzaZNQxoniebR8SvETk1tNz4QmiYS6m7Gsk7tgn7871NdCw53ah1eKpSY54a",
  "key12": "49QZeNbT9HsXh5VBXHwu2JgMNaVjuCUxWjGfcWBH18ZwUuNQJ4G4GaXS7GVJThzYT17eFTngL4NJPqeCAc6edzvK",
  "key13": "cvdJVo1zZujGjyXE6nDJ1ERJ3caBhUFnCn2eaxzBfB6zJbNJNjuKsvm7DenZxLGQS3gLbbJqZ9juU58wzDrVBNG",
  "key14": "2G5SgPZWj1tXushVMLeYp8WGEfHwuQTgj3J6kigYZwnjj526Xdmh4eYPx2knHENsqrPcvmMJ5kLaHQAPV1GiKp9g",
  "key15": "3zt59w3iCNGGAwxLuEBZMBFXVHFbLHpC9nhoJDA6DmgE8ioq8hXLreWhaMr6rmGivMQTkHsfCWrUPKAtgwM5V2QP",
  "key16": "3EgMpjtXhchLwc7GQXiRhB3bGWNJbNKyaBWsrUhT3svrpn5VEU1Kuf5h1wpNzxXRRnNxC2ECSjmk36nhVwmku2Ai",
  "key17": "3tzaHR1BnKbnUuKUfP5hDQE1H9px1g3qZZJxC6k5id2MicqqgDJ6h2KxiMtARGduXd2FT9Vn5tcsXDyxNPneSHjY",
  "key18": "22Yd3EUWHbohSzAxdPBPofs5tp86XkBSaqDYsJSytTx1rL3BNGdWXZazzujDnFkKVRUJ6t5jRvqU7Ds56vFU2wG5",
  "key19": "45oGw3LmoCDk3A4qM1JyVkavAkV8u5GQ7yCxCyCG4FHttj6JsaXh1adv2irRRgDZdock5XCU7THzyWtoDaKDTehD",
  "key20": "4AFozVjaWfjaGx5ciWXZJEK3RUCWXYsQWjTRuhFrfFHKjMZ3S1B6U46BdBBu1hgAv9QowLQh1HRc1DuMYau6mcX1",
  "key21": "4DfB7enFredoW1SFa7ZeWgi5W2Zt6msN4NFDQfRidMTyQZ2FAmKGNQkdMnYP4bw5z3zzRT6eDUG3D16uFKtEquxN",
  "key22": "314sayFLWHn6hiobX1hMqUqqVddwqf8UZUbFREiGD15uN877nsuwgjRx8jkMm6t6LcsY5PHXoq7EmStzP9ut6Xv8",
  "key23": "yvUSfbPg5WGYZR4V9aJf9JwuzAt7vFJ9BMuc3YqpnxUgeB6WUUoxeVWK6jVxNAeYGsWQwqHtwjXnsvYiM31vcqG",
  "key24": "4f3sEPXisadVAGVcAbrUFHNzTvjUQcYBL7L6RaiGTE9z4SDyS7JN9Fq7oC9s3NKFe8LNJj9w8xPXiqpcZRuQRfH8",
  "key25": "3ncdDFPJv5m1ThEYy9egAPzcvQ5NJD9J149tYcC3gFB9Mcn8f9FWk3rZw8VatguwJ6DDXqK7CeADrS2HXz2mjbm8",
  "key26": "4VoVF85g5QjycUw97KfVEoHeYmQvHtMn6KjWhV4Q2C3LEU4abFa7vATx7QDnogtMpcPEVhAhNrDY1zFuzWbDZVpa",
  "key27": "3HaVKkeHxnn1cpCJ2G9poemxA9bzJkvqH39fMCL7rELfEw2HDW1EAsk5vrgCteC6rFzrZB2x4dAzRwP7zLW59nPw",
  "key28": "3izX766hRzsueezbEDXE4bUWAEv2QQE6krYPP4KagwhUd52pNvs8UuWmXt9bR3KmLrQjkUSLF8YHMqC5FbxMgUpx",
  "key29": "5fp45sMEi93J7S529GLQQgbW6SNcJu7r7bgNwyqbfv8rEijvU3TjbWTWNPhy3CeyzFXHmd6o3QWituFMGYVgcAeF",
  "key30": "3U1bazLSx8tTUkZP4gMuhUU5EaxFppwpXsZLJfjApiXMFKu9U8BN5EGuvGqyFMhcXSfuFQio4XngHcS4PXC1tLZJ",
  "key31": "4i2XqZFqFMvTd4KmDC3D61UVP1tfJQXEqtoaTgYqXQ8yNqB1KJ9ott7WjcUDMin81DXPS59NusuhLnvmKgmHz3t",
  "key32": "3xMUA2K7dAZaKMKggV8m38kjE7k7i89X1dt3menWnsXmUUTrFZzzKP6VGxf4MZJthFara8EpbmjUExZtQzmpTtev",
  "key33": "5MzotC7u8CbcK1y187LUYh7udTZVWXFWdzsmrNPgPx4qmKt34rxqRpJnZiFwcZcdR5Zbq3o7PsPWmoFnK5HKGhLj",
  "key34": "3zGq7yFLsD9mBn79gaXXzhVGyh63PGrye6aAQgMxjm7acrU6SYmV7C4JWcddbp7Q1LneuLKUXSdCogr5WWCrtxeW",
  "key35": "3SqWuGJ8z8np1xhco4joFxqsvViqeDRm8GGEmwNeA8Zh9Zu49Z5HhdG2FC9z69kDDycQr1zAAi9tT7kSiwpwSCAo"
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
