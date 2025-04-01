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
    "28BaETt7doaHLVxFMqA28Vo1Q2fhAbnWPfK6b5DFuNFWvQbvEk1PyphUTETEknkH1mo1ttnuofkD1h2WVhKiZjPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dn1athDpQ5Fis1LSJaEdjjFhskBR36Rrq4aBN57YZuV6N2AzEPTqU7yjCzeoz5sq2Bgd5SYYHm8jAU8Bc56qNhh",
  "key1": "3DJDDWkqDh3q4KmcHGhmC4JHHW26JobchNj11HLjM1p59LzdJ8MGGjn4Rr5LdVfQXAwZKK39nfkvJE8J6rwqc9sE",
  "key2": "26UZSvUmYWuXeX2S7RwrpN8enn5e3vHjBvqyVndJnGLXiyURCvHiECgzW8Gnswb8SZYdo3B1ZKQN2kjtEVWXsMwz",
  "key3": "4k3UfNb6qMWX2pneoEDhGjRrqveNvkVfN4ijHrBGQtiJ2Uu5cgWdiL8WCCVaXpZk2btdahs7dxkZFa2JrWcwocCP",
  "key4": "2qA8ZZNGUJRGHjvEGCLJVB4b565NVgXsV5A7ewuy4ofnA5aUkJ1pT4FMYweY8HgwcucRpuiFVVNdwRxXLJwNPbGM",
  "key5": "33Xfo23jiGSQzNNUogohGgQphUt7QG6FkRni4yZBpb5Kp7hmC3KkdzVJdvEZaS5wUS939er7zFfc8hoZVXkX8rMb",
  "key6": "8RcGzManYQzzEJoLevPD68KZaoEf3hecvBnjP1r2VGNgFfVsj6YkSPeSuDWSj8EUDrkWUffaMHq6YMc3Viv8oza",
  "key7": "4g3ouwzBjuvXYBwAibeJq5QBzpDwX7WhrM1GKNXgNZ5AhvR41EQEX6xzejtEz7VcuoeyXtcjchFGUAx1EuJQpeaM",
  "key8": "5edo5pDwjzZEWkPRawgfH6keBL6i1Zxrn9ydZ3oqsL9iMXiMh4tmLoMhApypjGpp2uaApCkAVtFJvvJLdRLUnobn",
  "key9": "5c6auqVvZ8mAjT8EEbdf8LGi92fGL4HTsmChNxRa9eeHTrYxtgVc1BUm7XHMUsrSnwxHjRCyzuTGqkHhgP7zvA8X",
  "key10": "64pnAMTqfj3Qx39vLSCnDu5QThtQahg6uZQBqfUqkh3ZX4LCSbvQwQ7hMWpRWfWTKo58wLxQkfkNhK48fkvnBd3U",
  "key11": "g5hgCa8GECwKbXWizLUz5Mm5jLReSU4BWjfCuAdX5Phjx7SkusKd2CLAbimaRd9QVjKUnv7wNHDpuWB1oQULBJA",
  "key12": "2GkuEf8A4vRdg9XxMcMH4WBqW51rx32shzcdBCE9mCaz2JbxNJaceCAkuQ53YmT4EVCNqLCzxw69c4NUdFbrkhkj",
  "key13": "2rgaAEB3XZuv3nZnvZYbYjmwedGzYur7PB2YUFnnKHrJKQmC85n4UqqBuksojFB1YBCPXi3U4GuXxcNxfU87icG4",
  "key14": "yXL7ojqwYvkuriQCKKytAgXDXdNPDDPFcWiREo8NbL1HhYmYkRRYnQyZpufgmQQKWe1ZyjvTtDY3SEGAnv5Cbsi",
  "key15": "3DYdMUiJ3RyYbyuN3Bpb1JrxrBSYptzuSH4DFTuf69SEsW3jmU9ZnJoMZVxozYTyRgmjSVMRqravwY7b4NbFyE8L",
  "key16": "jdM8UPTJdXyd61tPdbxgjdwFHJv7nV8RAvgEy1povPDgRGGbVTY7DnNj5c3xrHxiLzBpqLLxKzmNgLcixaQCDN8",
  "key17": "3eXzuiSFtKjxzBur2FmHGPvm7fuXHXsaJhtZ8byngbsoWt9fmT34DuevJP7mmreX4mjKNfm754mS2cT9GLx9yDPw",
  "key18": "4KLbw8ryPuGwtxiG3JTJVadjnUzxbGfYVAubJEf1w9HmcPBk6i6vX8kDvZWBr1teLWW9znu9MasMeHqFHbzhHWmP",
  "key19": "2SqwXd2k9bYvrmmSknYUDrebMooR9b7Ye1irunTStVrvu6HgmCVgYCcCx7G97FhL5gaf8YCAFzx3QyuBJQdvbQvM",
  "key20": "3LwbeH7DDdo6NjaTQJm72WxYFqjw8b5witVaJMbSMuGprCWbBnf9SmM2N7WzYvRVswmN4w5o5byddmWziyDQMvaK",
  "key21": "3fqAMdouvRf5fWcGHrTgdG3ddF4LmXEXoPp7aF6cWrmKxJLe521YGzdb99j4NRb47nAun8J41K6YrnuNHV3ne7hG",
  "key22": "4CnaPCqavzH2FmABdaHYupmysLUYmSsV4do1e2WLMFGujUe3mkVtzCh6nYeT1dcKwrb9WuqxhtpCdZp9U2MBscNi",
  "key23": "4PbuHa4RoE3v6vn3NGgtEJ5cLQhCuDEDf3HjogZ6tMKhx9uZYesjvBvrG6rT5rdVo6yujAstb8F7vuSs5om2aKWK",
  "key24": "5bb8FULDV4LowKJMfSGKoUKbcn4gMB6Wn6nbawXN73DqDXQZhuVhbZRSES81nfJ4yFofXYRQXZLTPdQ9MAD6rekC",
  "key25": "5EVrD3yhVyrGTMvDPqYA39YVEMvv6fpJ4SkG2LnpAeBCghQ75mjgZwayh6epmQerpCWS6MfDYyViDXvXPa1ijsgL",
  "key26": "7p5Sr2YMLZADc7vKPxK73TcTofFWp7G4wRd7SPe66aypyikji7gb82jGWXDYANB44PywYsEyHjQWXvpaY5cmQLK",
  "key27": "JEbwbm1UmJPVfrLapV5omi8WFnHspUF4pbDoV6z8BGVigBqiDhBKn9Pt3pZi1yJ9x5baKDHJdNR4rwVvY8XGBtG",
  "key28": "9tdn6mmeWs8cj6YCebpbXghqQPQv9yPnfZXLfK54YPrR7a6Uv5RQkdrV6V9iKW3QWC2zvRnj91rHDuQodAZBg5e",
  "key29": "5FhZJcqgyEhsUaZoQMW29kaucPfzi3GiUnvjwj91H6GC7S3ZcaJyFxSebUGsdZgqqnu3H3QC4pwwT73Amnpiog8Q",
  "key30": "4d3dzeRWNbF35rsuERFMJUsv4VCRFxULN5dfgnaSEcrzmawdaJi8faVQHvrpUUFc2Fw5518RQ1dnCUbzBtoh2u3X",
  "key31": "5hMXE8wQcM3ZdpTZcBaLMPJmkkzeXHNxm9sbA8Eufqr64NChCKQSPVoHQ2kFMcNRFxdq1Uf6WbDSLQmog2Sy3N7U",
  "key32": "3UAtDoVB2Bey31KncmF8XZbb2iwqi1T81x76ZcXwcttrc43bMKWwfgZRryyawq6qTRs8jyFHbup5J6eadAC6GBjT",
  "key33": "5y58DYMn6C4k2dFNPFgwKkGpwrmRsSYCfgwjixLzpsvL7w76sUs7qi4zfNEiGoUcSrJrayhAzjUMhQ4qP2nGMPDe",
  "key34": "45nzF8gWaKtAvudbgSW8rj1pQvQ3cSRdQejDrgNpJtJYVfyxkuQeqfyTiQsMoY4L2bvUPdFSTCgigYCqpwogcK9d",
  "key35": "2E7wfPMPQaz6Tz73mb4EjXrZS4YxhkMsNkRuzai4feeiRjrfj571iKcVh2HNv7YRWSMfRrNobUbZt6gZMnmDMuS1",
  "key36": "PEpZus5XyDb7AV7nFHCqadb7XiFqF8JN456KgvhZsCUuQmqvHEMWNMSwhDR9VTBm7j76BSzirzy2orm4XXC2vjb",
  "key37": "58CnuAN5SuH2qvsLAz7L8CEXkmcquNtFLsKXHJJuaqFyMwpfkX97fEz3ad6FPmBnu22XAi2Xc2x4YpmVeHWQVGZ4",
  "key38": "4aJd1rcarHbjsMnRnWjcqBAh3fFCkHEAhEgV6KgN2uXL16dR8HrqxmjUgCoHNQM7CJVMTe44kNm755fET6e22zCT"
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
