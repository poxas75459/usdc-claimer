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
    "2tS8x5ahnQ11Wrr51LotDJ78uEbyVKtjsXbTdgHSFoxoTxbg2V1HpNKBYW2LEk88MC56fLtcgoHUxwEoDoUWFUva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPMR6Xy3xj4aRUcyKWGyUok5rupbPvk6Qe1R1t6utqRf7Nzo66F5iPJzGzWG2HFT8Xq5gJ1NjNcRrtGoAr2ZMXu",
  "key1": "5JL2fMpM8nzs32hN7KnZSHnqQaq1eTw1hHWRMMkzqPx6WnkgxmhG5ewUSHF2z5GxM2VVYxYRdpGGzZ3MazGu1ADj",
  "key2": "5wgySRrbrH4yrErwJjAW7WqQWKsDzSXoD2wPLD2RD8kF2s48Vjr1pfn3uKQgE2fw34su32kYc5uPFMUjgrx216i2",
  "key3": "47eJkXDPb2E7Smn8fWzBHeuFiXWMTee62MhyHM4LcBvVdscYAtPsDZ4dw9kw84Mic4Taatp8s2vxZyiJQWfUbXY9",
  "key4": "5yHfkaoiVQM8BKrCrj8Mn6dWXqCcKFtUTyRdUffYTw5AaFvEA7tbRXFTqJUUKGTwQp5DhuJr5bCXZnUfRjQwRNTh",
  "key5": "2YDKisncetezZiZJgby7nEhv4JsQchqSVoQ98YeHNNQ3Mf2sbcTSYD7FMN8FBKYz4xm7KMpFjvjTf9RvWQqEq8SX",
  "key6": "Nz24BCfVcki757wXCbWMcECRj6CfUviPa3oCnjiqekVh1GbioQDdbzVPbX6JcXbyVnBVsHRKFrEJj88HEcLXRUc",
  "key7": "5hihAeQz6Z7wwjTztHgCSLwU3SQmRASwkEGJwS1xZ3EnKzqzupL1CxqCP55eSiDRrp1A81vdkjAAhKCTj2eTqWf7",
  "key8": "2RnBYtMW3NpFHiAaqzdqcuBuFPjqXCG4VWMbd2yoG6JwHtYW2bXEHcnYFjVbrKUnNCSmTFB5H26YKkZgEnLCNhLu",
  "key9": "3uicdNEChRMGjXKVQAhEwAPfExzzRbB8vwetjoYnhX8qWz53hBauPwMHCQgNtqVCp9higDTXFWcpN2HNBe1c7E8o",
  "key10": "2ru9mWatN3kt6rJRyJJRxUP5vKw8Df63ryuaexsvmM7heZF43nxpb1kA3Hj3wd6KzyEvoFsoqQtPjCrjyVycXZtG",
  "key11": "2WbUMkwCTwFxJwN63cRn9R9DjJ5kfSJjKN1ZdPesyo1HVocE3gYzVzryUfnquUy6s1dJscwV14bGU54ZjwbvnT4Y",
  "key12": "344wYiq2VU8euE9FybAhuFQpgg9irLK5pfDuTjpnfy8rDCkH3BR1kuG35kT1kJbhiaE9EthbVtra7rJ6ygzjPEWQ",
  "key13": "27jDYEF5EePPSXvVi1PWKH1sv2BKaFX19NQhCis8ELXXUBURNLQHcGiSg7QgVsyUry8FAct2PLTqxMcvPN8CPPmk",
  "key14": "3qUKUsw1Us55kuuKh6Gkf5Gas4hFvzjaC1HBLVCvCkgV7EHhYMEhCfAjXbHnhZKhawgwTNoxmiBfYd5HWXneTwqc",
  "key15": "2XanMbyHmnifbohWmtvwZLCnUwY447zk8ytMS6SzNdfEvGFmXbJ5SVT86kNqSBh38CKFCqMN5So7aaNAxxSbfA8M",
  "key16": "iy8AGqZpzkXEbg7tZ68U56wGBPoeenLje74iihve7mAYbyq3FW2CBii7vHpfyqsQjRpXkNbvdXHDLBRC58D8k62",
  "key17": "3njnWWL96V85Q5F5UutcxCZCxqHYKfT6ZwxWNNDUSzqvHba3QnrPuNAMkUurnoogqnBAjbHqQqiyjuDEx3gsRBRf",
  "key18": "RHvLHbbQGiKDqjv866yD27KszHJ1837EYaABe8MPNrGH7xZF2AtyXiVDUtiPTaKFtZVHvXtEgSb9Lwh7wk9kYUu",
  "key19": "4uR7dD9hbEyXu8MxBDgSiH3FdhrUSx9zyZ3SBCpSTXqB1TKHMdRmbyaMDQ76mD6ppzQShCUDandcYxyui6KBAD1T",
  "key20": "3bnqPx1jDDqh93EP9VHygmqpeMcuoRD7TZsByEgeZ3oKgNiE3NRsFXkogoFd2xUWr5Hpk4QiLYmuNDztEq4anDwW",
  "key21": "33qZKFnQyEkDzXdhdpKfjGuDMk4SgbxQwRDMubyrj6gNs7u18NgNdNst1MB7xqzjqXBhFCPyDEN8DQxkSPrfF7SL",
  "key22": "3vNYHdvpte3YK1MMXJUkuQ9EA3DnepD7ia2xr9XUyqhJKuLVDBLqjf4dxMcsXFzjbzgaGcWNFF1NQq4abAZDR8nk",
  "key23": "4NsYm944KcRBeMc77ox9hbMXWqpBQyXJaqwkRrinxCStCM2ErmbWqA5SdbaEb1q4hwG1c7z93GLYms9uRLj8fZe5",
  "key24": "4cPbgwxzoE71ToBw81LxczU3rX1m5ALfZZzmCAyTNnnVEhKbEKdjKKJ6YD6PFZLx4aNFSsH89BcKvRsaviMGvJn9",
  "key25": "2d6n9SX87YC6EbGFvLUMEfnAoqZBTKi8NCegyUsKkpoEntUtoALdkkz9eo7GH377H4SXUMY6LCfY2bsysy7HmT8k",
  "key26": "HPjEUAX1PSuYuVN1C8MmNAnpeiPb9txmyGCe3iNZZ2bsdnH1ademf4UtfyJjGAnpR6L1FuKXy7d5fjmH8phh8mi",
  "key27": "JZd4gdcR6Qkx7DxEbBznv5wVBkYHzceh6q2KxRA7Rhj7MS41jGo8N9XJDFeXWL2DNnKvcNB6qmy6p4tqBAsRiwn",
  "key28": "4XWXY3ZdRfJb1epwSXuMiKNNK2JtmMNrgktKMUsxaCmGddQxntEgtDDxHjaRNUb3Awwo4j2rSTnVqTwSPuhztiUV",
  "key29": "5P5n8auZpCgn17jJ5a8Hkt3D3ifGRFFAXL4wDMZBj5TM5xVxHovpAfd6dwTAmUtoRnA8svruCMgyoZxVujGCT5My",
  "key30": "sZv5pMrsSen4Tcq3dXMfYnHj9S7XSKahJud989Uub1CuufwvMhpPAitr56KTWUsZXgMuwtDmRsuFtmzwqden4oZ",
  "key31": "R3zxyYX9uxwewXDGN9rD5hbR13Whv9TmzvhFS8SNRWKxgoD573Tk9FkTcGEgBwuwK5osrjZ4whNQPZPCj94WAvh",
  "key32": "49ULEG6mWmML5NgFT92UVhTogNQc3ZKcVBf5gknnBkQohSVNnhk4qARo1SjTWmi7Rh5MPzkX8o79T7HBEmBYrxqg",
  "key33": "3uBKrJuiBzHrK11DuactxD2SFfDDHLAasQDN12HziHVvZyzE5vpuCvh8bNUUuqKrgKYE5tUGRn7DDnFB815xwNYs",
  "key34": "54xLbdPEAstCAt7epuh4uUqDFKfNJTR7hV7teDTMrXD3BoHAtsQbjDEVw6FsJ18Kv1HCx6SKwQoHEJJPAftt8EbK",
  "key35": "2ZLw6HDPdNp31Kobcifz2x9g2QsfNm4PXbhD8fb8hikSDgsGQCs7tom5VGaZKDJEgXr73mK2whDVQdNGRnLDVmqF",
  "key36": "tK4pvy1SLHq3n4PEfaQpfGLXkgFtgomUjSbUkjUgFVvooTiFt1ZhWwt7R7T2vsLLVrNar4XD4gpdCnWaDPgfnb7",
  "key37": "U15jtVGe9tr8fFo3wGqHsE9vtyG2xrTrc1c3LPVdJmHdHBiBmMpELW6JGxbJKys74QN3QvFFCjbmUJjgT4zRJoN"
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
