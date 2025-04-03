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
    "vgvm8ruSvLyto5CHQRKVMDEykmarP6xXeGb4eSzP18yV5hoCDqyzEV9aHBiqmUozvy8RJ1hdNmbtnZ5UZPPfgsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLxfyBKJk47iVVomdgXMAT1jQE6MF6QEkNnRBQezxsiyVpJAyCfJd1cEGHNm4APYH6eB5DUEVb125AmRG814ZJY",
  "key1": "4UVcgVttmMYBGPCyg7y1mCe9xWZSEEAPGTPd8jEj1ZtdQz7bZpMkVwxfZayBhkkyr2HnSs1im5GfuvhKNhz6eYef",
  "key2": "26BcdCyzqg11GStrV9RzioawX8zcqPjmhkBAnZXstYPzJYhApMHGDr4fQLvYTe5Qp4iRUyxXATTXTNDZft5Gvv4M",
  "key3": "Yg4NnYeucGBq2frHNgHsmvrf92FfTNdCgUwsRUEb7UBfExEVdtqGYBGwraRczLT7yETFDQoF1X3j134Y5VUTxPS",
  "key4": "D9BcMr54cSxwG1uHgEPMQpetsFKktZ8QReoNeL5fYVDHQ2fbAg5DSkSViN2AcmpKXKZiRUDX3fUTDiZjXE5uyKZ",
  "key5": "pBSouywq68FnJ53Thr2vagtCDrGRJZ9sPN6ekLdutcJBZKawJqNr2wAiFuJBJa37H9Y1ZZ5ZXz1gNbQDieUAmLT",
  "key6": "65w9STg69ziMqqLoeCjSLtfHqfCpKW74THLweKVFBQ3KnfZSkkrpiLYCp31N2aARtJXmRfqAi4g2tCJ4GRM1dv9P",
  "key7": "36wALJjPkyMf4tHxQzMEK1vpujpN6sQdihSvLU5tqRJ6EfwbWZp4Wb5prkHVkYjL1tZmvNnYp1hDJp7XX5ufSB9Z",
  "key8": "32euiiW5gJcuLMGz3snbKetsh6zKpGm1UxDBqZZpm1Rpoq95YUwFEtN2Ro1s8gWBYWusU4mHoZYE1j5A23PxW1du",
  "key9": "3hFnkV6mLoN7f12nEQBnDdAo5HZzrFfJoe5gt15Ugf5A2JCgTyGjsLpFgDt8uiueKZnVNWSss4t7k28aje19FdYR",
  "key10": "48sWW16Xr62ohFCxLgzzJsmY3WJwezTjzBKtTzpvEbCV8XK3U4pBg9hMwbLZuHwfT9rUVD8g6nLWt3P3QBMjwM2p",
  "key11": "5iQhE5RRQRrVTyAq3H1dqcogeANUqhPfse8MqYV9SKq75RBkE3HREhEt8Sm3CyT3A51XMySR5q5gf89nJ29vVBk5",
  "key12": "41JuVtNHhWgkXhzFEGNuVcNJeHoNcQNUn3LXMsDpQj2ZNbCJsZx1dJ1424GrXiHPq3kXojBbvzQudBczwBuBG7Ud",
  "key13": "envgxhVXyX4ynWjvnp1JPz3gQCbc2o3XxTKjFwWH3vn1yGvsj3i9Cx7vDW4Z4NGxCc8AeQchbJP9qDKa8moMnMa",
  "key14": "5CVwMmYcsKBxdWMNHuva4328hKbgE64HTqhjHUUDoju4SNixPHFetGZHxWtjBzLYGFZRyxgwz3aG1u6Bh8TuYFv7",
  "key15": "5YtWRSDieC91gVe15HZYkusGGdmZq2ebQKRvaRcXhvYvCrM9QHK1BGRUfLX3rMBjGUCK8pXaEU5gUdgpjRQFreFy",
  "key16": "5F9mNNTRLjuVEG2E35hoW2qBFSUkyNb3zfyiMP9B7cxLDXHUi7zX4mQWRzBu5v5vT47UxhiozYysG7mz4mMjsemE",
  "key17": "4hwpXFFVPQDtf7PHufihB8iMN1hricSwBiFRaW52MibGkmkv61kCK8dS1LpUzR94hUhJotKNouixJFjyuZBv9D23",
  "key18": "3kxUCi4LbaTNtwoWdZtwDbij9Zf43nA4zTSMEsnbtZ4ttDA8GuZFBLU51CAPmzeCv6RVa2d3wmuUsNPSKFQ6mqUU",
  "key19": "5A3cF22wJsUSad5sdocQvJYNbVaLsV9M6Yr6tVNgw5SBrSS8S4u5xz1av7qHJDBGthJuL2EzA3D63cyp7A9V87W6",
  "key20": "2U4bo9MZTS4kY6QPoNLGX6aMemh2MqWPib86AguhuPz399XBJDuNw4M7ua63pHJF3PcJe7K9ujbuN6WcNMyQfz6y",
  "key21": "38cnQkKm2BXGf7qc1Q4Dq6Nxw4zXRNXhFsQkz8SQA6GvRNP2wfx1iqrn9sUDWFVCFLquV411RHGqGmbgUW2bYTM4",
  "key22": "4mJT5jNCfGNQre2PcFaU7vLPxHk95eDNZXjhFumKvTL435mGYkzkMBBNWu5dTbfJeyK3QQmwpMy23Ng4ch7kichz",
  "key23": "3VyCTNKJn9AUYxDPF7o5ASDuZK8wPZBxYjLdhHr98KfMcPyreCTkHC4vMv3DtG2A8yMmD5xdrHsPXs11qCP3HDQT",
  "key24": "3BWF9N7dKeNYB15uQvtbSaBtorwePAdXkP3km4aBvfhsqwLKkimDzooVyxofVsQAtfTMT2RncMKmfxnt2THtgu6r",
  "key25": "3dbsyVnohFqrVhCK7vx68J8d9cDM1nEMZw3wwRH2XkEhuZzP7PnKXZ9STQu5PCmSRAWkrVzMKq3PeqPX5Yu6SNho",
  "key26": "MpY5GAaFphD33Vp66uSSNnaAUUtAjA52oxjGxiDG8YkMssq4RSCZQ3N5VwTcE57MYFMKtTw2L1egQeKGmVWCn7V",
  "key27": "492nC4WuAB3Z2ZfgZ3cCwYHgGiBuVW6yvTerc8jGVhqfiquS7pm7ssNsj5w4a4UJBCmvNT3pK1AkTH3L59jCyPgu",
  "key28": "44nT5zDhq9MVhPznBTtE2NaeaBGH7YRpB8fxHy4gj3k1JUCehy2a5JFuNNBYKxELGWiRoLR5QWQBxqRuZktDbGeL",
  "key29": "3J9UV9UApB4tJbLS2BK2uCNbLtUcdXfraEw5mWhR2tSmuPipXYSGzCtTJqNNtuimn6E2V4wcC7yxtmp8UmMyM1Sw",
  "key30": "37pBT8m6szEDtAoehSbzHEkcj7JTPj8GX51NdvaAhkKzFXMcyVnamTBYVinqjeT4CoXQEop5DATTpNXH1AC6znNy",
  "key31": "5eKeAiAWtLUgi7YdciLtQgSJN1HwLtm9xoQM15B6rRajc91fsxwKPLxrrjDj7cnmAnsJ3uyjJ5J6n2NFF56Rjkxp",
  "key32": "6AwvzaKdU3umN3XxjQ1F9bNmYjerxG53WJMkNAfdJLwbrsuyKzrwECdfCdq6YuSfdWnafUHsEjvABjqbUZPZrYx",
  "key33": "4vrGgkjCSJ88gRjMsn1mEJmBsfx6WWhGTip8wXh39iBXwcwZX2zA2YjAV7VMxxVcQ4DGjETaSeUJomcsNz2YjYkE",
  "key34": "3PGBD6QLhKCG5Qi9xKwHvpD2YEZyA2wjrxAihpCZzHiMcakGa1DWPky3bPEh8w5RwPWThcbz1zR2U5S76K5r87cK",
  "key35": "49714ELV9CxC1HVN67LMyScjVKgQsJAQEmx8RxGs2HwviUhdW93RRKiVHS86ZGzC7y6yi7ntSRY7gXtXDwyxcqgt",
  "key36": "2eYCad1xRVS3FgHn14byxMvQGj23U3NHfJuYMneH3YGXFJbyppPdm4LEF4b5HaAUn5ZrdPdARJyAAQnmjTv4v52k",
  "key37": "5puP4jqdfreD3LA5XfyFNmmJSke7W7rsdS68uzEPETyiRiZcV58izXMdFNVrxDX5s4AnZmrbfjC2vG3zqm6vAmha",
  "key38": "465mA46EnxKWWpK8JHgnwmZiuAYTVayyNokhJBqLddZYe3PFC4bxGs3Pecpazq7WHaWN8kHY6tfLJYcdkTSsNeNj",
  "key39": "4qB6Yw5UwreTKeyLra7fxugVg39Bk9yapaXNjwg2Jx4gJhCagkdBVd3Lvtn4B8CbCLnkzdyuEkwHVMZi9522GLH3",
  "key40": "FZ5WAiyuz3g1jrnDRWcAnGrEmHHqK8T5DUNe7bWVpbftuUC5XGGYRnDxiECrejrkGkR8uPy4gP7E6ruqy7avXYR",
  "key41": "59pmf3xwpiJ6uSHK3R6JuFpv7wSX8e4Rdnzfn7DBSEXq3FivREytFxwBNxdDXVsnn5RxZnEqKg1PEDsEmM4QDJ2L",
  "key42": "3K5xvUo5YVgYtoopB9GdtJbQCNAJspSJoXmZFKCJreKM4waGeALRtpDAvPQrzoPGzjbEYPjtZeGGsk5BjuVNanFz",
  "key43": "4c5qHqNvLpJYLgLpHxypdKtSftFbPLAuBLABZkGhnp7HBgtoG3mWj5HCjH36NZSfCKeRTfKuPuSbP5dEzQgF53gT"
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
