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
    "4BZg5iHhfXL2HSHzyqq6DeZJn9vGzRGr21ZYU9yxdB1TPrKkHueirYUVt4DP4jEGHWykagq5hbxGc4XLKXgBYqD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7kEpx1nT9iZ1MtaTrmEQHjqU4aaWbDBhEySAR4LoAqDDNBkXM6Sdi95zJjRBPsW4K4MQLczKnmNjNhrtsrffk8",
  "key1": "2U9zGV78bz4iz491WCahLtA8KJrp3K1qVLeVm3XatUtVaaAHK7FMu1gUZUyfLMFa569Z2tsUiZnxShuMEPtVfq1Q",
  "key2": "4zb9kVQETUSfhnwiskmkbfZfjB6iyZkLXQCJbQtTUose8Hb4gdUDUseV93kZXA8NofHbaszvKW4U5yp5Z7rgbGBt",
  "key3": "yr1hs8w8sDEQrVyirU2piWvm1jM46Bhrqk5swgnXVAejfBToFLgFUSyQBMBnQrXRMiLCSPdMG1Ug2enXgXqz19t",
  "key4": "3RXwGsm3mnQdgVZRhTchQeRidy46jgR6kbtbLSx8P91ZN2DN5QwUebhE7Ltou6GY4JD9CXVPPeafKz55Vri1kcZS",
  "key5": "3fzAsvVYunJ9F2z9pPBX5Xctui7ZA249qrups2S25yxT1nF3GV22wS5xd7KBRYAxWwcSsiMQcEp2KcAiKhjzJabG",
  "key6": "21aL61YdgQXH57soQEXq5DnEJfKbbJcnshZciJGZqPjWeji362WzyJfHUi9cLYfQq8d4smbQnwBnJa5ZUhELfHUH",
  "key7": "4J3EuLZju4xCdQw4mkPXj48cHjTtaJZw5pwtsMSFc3ZLAEa5mCucAcZmHhsDtGhrVgXEwsajDMqYM2dw522iC5mv",
  "key8": "2pgP2hPBjkWchecpqtD6GnKpzV21rizrqp6s1ybiVNdSFm78yptEQMGHEfZnoa4eevGsoT1rs5njQeZGABs1ffoP",
  "key9": "4364Juc12HoZKeCiB7TQThoJqE6Bf9V6qBPuBY7wVLDvXoBD78BxstD45CFXFKTVKyWm8caguH3sguWPdN6sDKv6",
  "key10": "5cYMtnzk7h8ky4dSZyfc4hpJ2qbuNceswAEzJH9op6iaQj3NAmSQGXJMojcqtQ1hfWPrqJ2fn4AxVYsyACtjtenW",
  "key11": "2DoeNaE1JsoCwTTrFHkEzaCDvJxdxamRC2fcD2dLqqc51MVjG8VHwetSm4RLKwBsiuQNetckiiQW3pmaKMMX3Q8p",
  "key12": "jggXZwCjEibrcr74BefC3GsPoLt4EuAdtUNm846mwa6HSmXpNvfwmb2JBcLmrcdj8YCrJ3h5J31yXS3CZTeNVpu",
  "key13": "43RdXpnFCNWcZGFmtqrEYW1Ja5VTaBDik7UC4FVn8RgQG4E2bqyDHUuiTZHG91f24mTfzPw3vC1exit338gDdu5z",
  "key14": "2Jiku71wBDuTcq9wVwdFr6oLLw4iUpxHyxAyuThkGibL8UMRUqhKcRe3Q1JU9WhZTK2PuiE8LX7SbgY8reMmZecY",
  "key15": "2j3MTdi6L2fSY2tTxmnB6W5Ap1911hShViEPfihk4BpdMy661bEVm9CUfEFUuoQ8hgSnHp4YBeS3wjyxVcW4GHH8",
  "key16": "kTcRjVraMWbvvdFwWp6SmtXbYqxggr5BCuysHjAunxgDJV6bUDWq6oPbKfYdJRmg1HDnmri4FfMDP9j2doe4hWg",
  "key17": "28GRsUpr5kJSc2SsQgHx9hL9sheMvk7hX8VdcFo6kEUvx8C81jX5VPTooo3qpkQ9p2rCVbd9DtFEq9U9bwQjznQa",
  "key18": "3PTHvcFSrEnGRACNqjciBzvHwpjSGAmEZwKqMN7Buv5J624Jk8Loy7SbcqiErKM3Hi5QbXqjRnTd7pwaYqbEn2cy",
  "key19": "3tLtJDM2A963ujMhARAbv8wBwmFY1LAg8qdzjfVBE4NJPgq3yT4YDvfMAKduXu1gaZ23biMfCoNnccqc9Q9CRvsu",
  "key20": "5q7y2CNyriMofEiVoDMFvkQG8fJdYYmCjQVjnsJVoSy6PARRHcTxbjQMGYhRowJnnvnkBAKVtfh6UH7yanMu7nXy",
  "key21": "5RY2pRzJFGkCcJzNtj6sSFSNC61bmEaLKS9UAZp1WjpitPyTNzypwUmF28jAYwkaCa4ofp6pDLFPC5qHJaBFoALZ",
  "key22": "NtDtQAjWjW4avvrRHCCQsjBCBSodPMq7Z7tH78ur6hEr9UggZYRuz4kE3rcKfifGEQ8qNzkwQWvo1s4yD9oBzEQ",
  "key23": "5S2nm7CjjyCYxZ8eQh7DCiyruGHf8WcC42WcAgzZYCpgWxjFrvnuTb9XfLeyJ4Rj6eKhLczcDKFWCDztsKkCSxoA",
  "key24": "631NZcFzBZ15i68jBcqs954ucmPR3EpdhNdopW1RQgnUb3YzaV6YQ6KoL1viooBPK3imSmE5v1TFqAjGnFx3g2up",
  "key25": "1u4oP2THetiSo72tEjykqAvTkHZ6qEiiTB5nm2mAT92qaQDmZbPSoKMqKwRmVZKGtRQjn7qY7Aeayz1uR2opjw1",
  "key26": "3jecghCYDCnzHg1Kce771npp4JMSbnRJocEwWLfhoCS2711CQRDCGtYes1fFdv171iBHAQuzTpZNCfAWHJ7aNoWw",
  "key27": "NdsTCCWDaXreip6EmxaKEhAmuu2asSw9NCqVQGaG6Lpk6w7z3spk9HTUpAi4BuXJRUmtfh9CMFTcQgDGmPcWvSn",
  "key28": "4WZW37MS161AwtoAG6LE6teGpzvzq9x5Vu1RnG8wE3TM3u7E9PJed1d6oPPBKqtKzWK1sZVydx2fvYRAxbXpoFFP",
  "key29": "62WVncQzS854g99skpfsHkepgDmNsbWap8SRVJud34DW9TXy9sX5GFsLNvtvrYGvfeYzU9GMp9UHcC3NxPwxAhQq",
  "key30": "M4Z5gfArQyyquYNYGAXChdDfSnRB3j99FLWfCW4BeCQEcTh3iECVimgRt6PabcGQfyZVwHBub4tA89imG9zd9kC",
  "key31": "2wXojifTFx4Hd5jDwtBaFgD2UUoua8TSoc1xxjssrSPrBd8Ve7SpSbf2QUox4y6uvRWJgb6q25hAJxWAZMiboxkm",
  "key32": "gxeJo8mQX8n8KGWqvqaQLau14btPd9qUTwCaRGxYbFBWNXZoMF69qf8AGzDJ7oMKyJ8YX6Z5TeNsPUdRhoADuVZ",
  "key33": "4uVDG8zM6ZNQ6FmRGgQ8q4wq83oDHTcJ4FRBjL7DWq8ax3mt127hCeM9h8r7fgQzXoH1p241HWV7WNcbsXPgBxZ5"
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
