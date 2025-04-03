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
    "QNV5n3mncszUYANgNA5BrW8C5ZtyP81mZDFDmbdCazoeEsEmkpstVs41wCmkaMhMj62xm2qXCZxWG5ef6FztuUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jAYp7rjvEr7VkXMnpf6fNsKcQo51nikw4M8FaRKsVdqPitaG5PWeP59GgR6fyrm1Tb3JpPpAygjESrvKj6HQKND",
  "key1": "5nzdwbMuNvGRCaaZPxoZ86oYJfGuwA3Lh7WicktL9pnRf7JEf5QaSq6W3mx7bd8htd4QG2xY99QBdRscBu1hvdSJ",
  "key2": "3jGV4QWkcJvH8UKRhuqjEKygkpsjiiKv85o6ZudUtcYEGmygcSuVedYt1P8Ky6z9NkjKQNSUvw6r3Wi5QGEk2CjD",
  "key3": "5v9DmF7j2a9DdxLRvp2he6UkqGZQLZAUQsvniptDeVmJP6KyHkhBncMbBiEDKvkrQwDdb35X98EqragYsCNWJ6Eg",
  "key4": "XRJCfHbLSv7MoyjTaeaD2j7NvjCEUrZacAztXdhhuo9cPvLhqvkjLunzjsQUDuKEjcSojYVMFqrFeFxTjxbVKT3",
  "key5": "4CLAGUVJRHWvJ92p5iuJCoUVYCSukdAj3RD1bhkZyyZpGPG7W9CkvrUMvH627imxKYwnGjCgmVmuWEfzNv1ts9aa",
  "key6": "4DXAsvtyAAkYTnM4jjBxVCDVnHh1ueYEciKKmKmzgBDPAUmCzP3gxWG68kzoSguqSE74kqXVuMZQ3UtuW9yLVD48",
  "key7": "2EEko7NqAxMxY1QxZGg51PDbNeFbcs8aBW3wEfv6gzBsAqtsUWrsryQbG6yGeWWrVXjNb5VG96o69xZeo8aMGDSW",
  "key8": "4LBXz9brVZww2MTpCrvFRb9cY7TkM28VojywFCCMDVtX8SVnAi9mEtNMmKzFNGfmWJBP585vKbfqBSgij8tfuhJi",
  "key9": "4inTMZ7HJeD3cbXp28pdRxr89PfrmSw82f8PP42KSRVaTTEW1v49txqeEFQo3HAouTZr9rCQ3JH1SZQ93M1Dauz8",
  "key10": "5dVqtHfnPqYxcxZmhewLF3Z8f58A88vuoJkXk4n7QAfV8fZppgpyC7kJhMGyQnVTNHrH4Sscv85ZRjmvySM3VcJV",
  "key11": "ozeLrXw4m8psicWpvpSYAxsLczJkbsFUa3ZjudufEBhcqMs58wqxxdcAzLVoQ2CViL5xDBtgYwDBAVs19qDX5My",
  "key12": "4uvV9RJfBbPY3DD8oghnVQADM7isz7wThDuat75AYR5dwYWz1HcpSGWBEwCuXLhBmyNbDBjXozL7RumUnzaYYEWr",
  "key13": "5EoxCTdp5EbnmiMbuvux43juiD5rb4QQkmKQcWyr22gL9Wi9GejLceTHrSHjc6BUwtDqtAzeNfsHBd1r2WXc5EhJ",
  "key14": "5CnmiYX66ZKsqUmdXbjac5YTXoDqGFLJapXvaoi44iNJodGCf8xQd7Xv5t7gmoDzPrNPmKuTNudsFa8s73XFg4jb",
  "key15": "2vdKMnUrNMJNe8BAh1fS6t1Wf7CoraqtPhrHkt9kBvYG4nxAwZWeQrnW96DkhL18harfBsVqZZZFTGiDEswjpJST",
  "key16": "2QzAK9nwB9UXyDvwayvhTfqQj879BEddnvf953khQ1VDGxQffwh841V75T3u5vgTHSuSJgyBFnft2qjrB8HVVmEx",
  "key17": "5avomRJghCkg1a5YmWtFJnWBvykN5yfoQfTpXLHnj9K1xusop17DJeC2sZMhgSLcfugM736o3bKpRjawdNjJuWP8",
  "key18": "5jtzWDq7jRfE2ywdYQf3QjYorpLoBGyW5nKgM8RnmfTUxCcDLXPgkbwRF65348ycoWhD4g1y6tU3EHeDQRgJRo2z",
  "key19": "5qPnNziUEYHU4nLvnuHgHmQnC3RjJzdGcqhciuzwd3kzS8Grub2Z5ob2szL9JXZWE52gvUXVwuXU8iNGD4Jh1Bsi",
  "key20": "3UqSV6uc5cJ7DX9n9zqQC44N7Mv56vJDs2M4aJYqmR11hdk3ZZXA1pNfBK1DgUMB3psXcJDNcxq3k78coG5HurW3",
  "key21": "vzTeoKNLwtZN38KLySCYc8tg1SBdjjcNDjQCHESiEkRBJFDoJqtgr1QrCao1F8b32FSoypnLrVw1yysfqcb5Gcn",
  "key22": "2VugZLuj5xyWzTBps8KpEHFiedv8dm2fPLuoaiaZuYmVKgwJwRS6d4JsSKBdbbGB2rE6HsfGEtkAaJA6LQcxjtPf",
  "key23": "mczXuoFdhvzAGDjkbPm9vfLZYUeJcpcVPCYhhEmzP2pBbWkfK4xYGgMygPs9Kqx6GJBKH42e66s6cjdGFQ6kdJV",
  "key24": "3ZQcXHzf1gmLtMvM9NPoa7RowkpwisgGXompD62W1c5EnKB4DD3mxQj3fYGPgdYcoiC6dDx6fbRK5PbENgWT1HuY",
  "key25": "3J3o2rNX22CoizUvezR4oRLfPWqoVqudJwp18RA7QH58uirFitoZ9n9wgUY33sPqXsvezTa61aLmTiNuVabgAED1",
  "key26": "78s13zaXiLMQWq9VSQxtfK6vAyu5LzUpUNskmZPm4tNN9mdg3xbeAqAYGMiu7TBCrGH5y67hb9s1cfaeZHczJs4",
  "key27": "3QPY7b6RdLNMbKhSUYXcWoXgStetqi1pEez3VbWVxJro7qTHax9RHwDrErVPLWTMDUuBdK5Xq8jXL5NjAV8rJZW4",
  "key28": "5Agw99ubKA4LYANKZ6BdjwyAChhHcW8nsDqVE9Pcv47iwfvdv4dsxSXBVZPZzdpWGD7hxSeQ5TFi6754Nr98U7av",
  "key29": "barhS9wDd16oiGkENfBc5pLWSrwFhu7dmTXC41xjNM8cz1ems3wdxnWEH3WaYQSJ7B6zjr2dpen9wuHivhUUd6V"
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
