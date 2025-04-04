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
    "422QvGa2RrKSJGKz67tQMLxLdAUkxZbmxdpFaB6uCWN2TpzQKp3cWwFBM4Ry2jbgsUVeDWaqoA8HdStkzsE5reRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEenDBXX8Wwiq8p7tvd67zoo5ovyF2GnTQzjoC78obiQ8GgWK3c5xUpvW7o6a4xtfzN3bZa2oSpxZDoacPS5Khc",
  "key1": "5cUtE5FP3EZggLEsnRSAhmoWUfMXe7sBCgihmtxjU4witUzj3MRNpsv2WSnW97TusrCWk54LnPC2wrjsZzycWjMU",
  "key2": "2VjWsjggqvNSbJwn79bVBZC5b5Cm6vWDm8NfZH4cvLZHKnRW6rtmGkqF39SzrTNVYGTUHrTnjjGpuLf5tD39wtE2",
  "key3": "5E3PJnayLFsYouXNo7eq8PpkTfmLW8z2LmUkvCHSbfzkwVTLCvR3EbNGZyw6pQcj7ReQRoFLGy4yGyfv9tDsiDZn",
  "key4": "452TnMZdMeg19nTNyBrknGdCerYCznXmj4W5W6kQgui9AuHRVTRtNXmgtVvqGSHuZ47f187RKk1L4K3mmLdbsupB",
  "key5": "2qouuiQDzup1CFTjsZR6cC3A9X4AhtauT3jh4Y1UHLLyDUQdx1NhUWVikjmYgjPnMgHpbeGrvHzHqpVYjCwxb4LS",
  "key6": "2UXwsshbazAhxK6gXPRePZUFCLkdN8cBDgujkMWKCihzsr8oRKNapnTymqsVMg8r4KqCfEgunwUJix1bHpNGDVEj",
  "key7": "5gBhyjXPPRzj3LWQJLh8DvmDeDpGV4zjmu6GMgCbMDaBvKjzwQxi7vSGVToNiEAiqMU6VEyTLP8b6eEbpHNndvvs",
  "key8": "3c2ZqPwQPRfA1yAn9nRMS2yjrP7HaLiTVEcXLHYBDCau8KPAn8QFVekQRqKzsgERqFM4Mn334ete7SjcZPA9qzEs",
  "key9": "3qzq8uQYaNPaipvV8kjZcF7Rk757Dm46pQL6MTEcqKJauva2sif6j9mnSm25Nk292XTA44ec6tQgUXjah7iR7GZB",
  "key10": "5WBBvgfjBYaMXVFxzSHZ95VYKs8PHn1RixHNGyg1hP8EBBPfHAB5XLHsESpjVKizDDzcNoP7shR7qjksrVBDa9HW",
  "key11": "2Nmdq39eaSyBEa8WezcPwnaE4SZxgUEU8m4Qrr7NFBp8s9hUp277KxsiBwao6TZ2zvoW4TMeJ1QjLMGKjF4R7Lzk",
  "key12": "HSrehs4HNsrF7dddAqnw7w9Qbg9eyAkfK3YefgWXosokUL9bDtXx5QnrsB7MmgQtH9JUb4PJmBHWt91C2qjH33U",
  "key13": "2KoGvxU834vKiCnaqj6jREWkiAfvh6zG3PUS28jkat27G9RJ1uQexd9wYb1CZULfqHb8xwc96KmwnHgooLdarnmy",
  "key14": "4CCWHuYtpAcJteGRrnyWeSKKEGmLbSqfP6ZAUmsSmYPvHcEM3vAE6rTTSqkqu9hnrpR9XXsDxNKSTejHTfpV1iUj",
  "key15": "364DXS15CHSGznqdRxqfvBqPvPZw4iEAjntbZvh7dDT4CQYnr53ryAx9eYHtwyiRGJVHpcCrE53emazNBmVB1CRS",
  "key16": "2XLpXMeFucXqGBeJZM1fUTNxefzhoY6C9xCqr3d4yrkf5hVzcPpYfcMYb9cubCRSC77rAPKg1PKfD3YJnww2RSwB",
  "key17": "aSqm9nw9vp32J4XWpu77Yaa5Y6So64zWTfZ5RkB3ssFzKzNd8BvygvuNQbr48qeuERy1gzAjb9tJJRNS8apQ77M",
  "key18": "WMZqQXPhc4bGfLYB3q84yPEct6bWqzZ61T328qGrJRMUjJL2qWQxNZr81nkrDBEfb9P5bnmGzzSsrUcbpTmGTVV",
  "key19": "Kz47LXma49E3rprAuaGrP2BunqwXCxR8FDyuwG8pdg3apEZaDZQityS4gzPpnFmv8pkQGADiYGkGadAEPQHigfw",
  "key20": "4D5aWqp4j5D1szPV9eGhkHknaP8uuqAnJzqNWS47GGNsQznr491aH5gUM9TXsBH7rbbVwkFDHq3tyXrQ8rztjdg7",
  "key21": "5K64nfopYsEVGuYysz9qmt62ntECn9CzgzjTRg4PuYXcKjTJiEVQdXr6gCVZwdkPjx1gp76T1ESi1HEFwyJAmVfK",
  "key22": "5KbeFDKvz2Ahn3T23G3jQJyp4f2gEcU2h5528LEk6xAE4LdbiZEhgG9aLAAH2sKZ7LcQ66wRoqh9iGnHwB2HFsrF",
  "key23": "YfmMp151HNTALt7s6PBHxkWq4TZjtoc5LuUgpqJkKoAmJ9UT9oynKojiPpW2z3E8F7mqpcZzee17eBYvLBCbvfG",
  "key24": "XGYirR2nL9ZyDzKSnXhR4xjb1QqsgJRuncA9u1jysBrSdd9JTPSbeBUnTHj7svta8nG3XVg9zG9D1AvJ3hpxwb5",
  "key25": "4h5C9eZxGrA9AvTF8PwvPH72vPovT42qEWPHpu8UgwrqBEo4PA1VejgqhcaF36tJ6g9PGwgapwrthnuJMDKm3J7d",
  "key26": "3snpbCP9327nXshYteY27aVweJFDqZkyUizBRKci4N6c2EDo5VQzypbNtLyV2ceLh2dND5zACkyMFnpqMPefYjPD",
  "key27": "TsH2jtrRF6DnpHXHdbuYMKFJPSmfRXJmmkRFkwK8HBeBc85SLHpu3CcCQaHuR5VZ4C7VWFtQQavharrwPH93hU3",
  "key28": "2NwWRHLP8XjTckFhd1TYAfHHBieo4vS43iyyNAdKeVEejh5Z3xWhmdaPNdFCLWhJVgUzMeya3d5YcggL5fuo2SFJ",
  "key29": "uadfDR35Ln777N6EhECPiwbCQ8SRQBp9CUogSoH2EsibszRmUmMBLYCofE7KNgrWBjQrSMrdSS957138R6hCJoU",
  "key30": "59Npm8dSwvTNc3zd9s2Dk8CvXnCPqnEQ7VBxc5aSo1wnP1mTUA4h4bex1GUn4uKMwZFcp81LkgXQBMMHvYf2zH7L",
  "key31": "3DbA3GZZD7i7vwActRitU84n28z79C83W5tqjtG9ZU3eyE8EhmEZnZXFqiX4uAuvVxuLQCgJ8NRGVBgTM4VZhEzr",
  "key32": "VnqqxsoAZsieStZH8iEikWfvUWakYLNZKymt4Xc68Pqrd4aDDkeVosQTDH8SRXcBAHUcwCgW2CSvA4jRPh45bNE",
  "key33": "p2K9EvUqC1CYZ3fSMCu7Yo5fYj8x5fBTuyWQUjMFUKdqBRgexTksPhDur27fPVPZNcYaJvcBwtVE5c3B8891NoG",
  "key34": "UTT9yEWd5WVV6Yqx5rem9uzQVmd81UiDrEckAY7duFadDiT6r8SYuNqTwvZXMd1sgQQZkD8WCuBpkvprgHJX7s7",
  "key35": "2QRAPcASGuuaQnmJMx4XQS7TCdZm24DXkZojGQbsx8vs6m9qybVmJqfdZgLkQ5GR8w7kqPqJVYLxQ6uGtQxQLz55",
  "key36": "4f3coTH1P43UUSBDf3jkJCXsL2WuPoMMDELTWaZX988LKbMhnm5dxHXgjSnz3YYBCo8ecCNVxvYEzTFcbPB9jCVt",
  "key37": "4iRGTmXWYqjadK6SucthMWa9dfeiyNsjYwpDJscwCxp5opcLAJfToCKXZmH9Vfv7pqqRw7LfJfxKABnH35exa973",
  "key38": "2hjWmf8ESXbJbTEiJevXhZN4kBwwRy7JdfWtWwzXLntLpEPbitzq5cuLYz4xi5uSMCBRkihoCgpJmQEMdAKoXGxx"
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
