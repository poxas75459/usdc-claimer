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
    "4erVSJy8Rga8289MxBpP9KKPLMsd1KUiju9uGLmdLAPe3Lq4jfg62jYWWhCohLydJS497bjow22rUGhA6HNb4rL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sm2aYuntHYsPzTmNXu1QjTXVpk4KG1GrrHWEspgj1ZKiDYbDEScm4Jqdxsr6rD5GQxoEB45ew4DHQKFGYadJPDg",
  "key1": "2tXChurAm5sswwWuQ7ZQPE7LkuLwARLvwYTdYPZwrMgawTYdZfiBZBo9FUpVDjteHbNDE3ehy4UpKzcwt3yvuP3C",
  "key2": "2gCYB3zhEp2sb28oPmiFATxrSy1gckJezDsaTTPfapqBvtGiYjJxFVGRjT74xqwyo3kt9xMwtTirHngruRBS4W8a",
  "key3": "243FV1uRB9T9froJSHe3Yqywd9k4nq2X4hrQND6f24UFDQgHKjeSy1jpgfaDhN2328HoC8HGVU2V9VMXZdHa8qZA",
  "key4": "361phnuSVuJ46RjgD6H8KCrWufekzA5Ey4Ff4Evh8wkAGbFji7YPLT8CpfpmRm6DrEssKLGS84JM3o1JhHU6HbHn",
  "key5": "3xFTz2RqepRzDkegPXfxb4bnKNW1jgywFHYgGwmcrYSqiuUgf8SmK1bgSseCsHHhkjkc6CN4e4BwqznUisCk5Dgm",
  "key6": "3PKjfgVSBNpkGe29bsSnQCnKQsPFxiwVC2Sgo7NADdNTW1rfqpv3GGwfqvTNrzURWaNaYSKfkZZcFjeQth27JNPc",
  "key7": "ZWwDLq1x7RFiMtJJJ4eSXNjYKcT3wFZJaUtu2jrPXxES3fUbsUUufAaDKKZAD7phvk68ZSjQWYs9p526qbSmXrv",
  "key8": "5fMZgjVAFuYj74v2QqwdnjQqtxzaR3e94MvNmzZ1YQaTCj78EndCL12iT7B13TFrp6YHBemthAMSimmB23bVi3Ke",
  "key9": "4aebjFVmZ8KdkdxUC5L2G7jkRG4FheamJU1XjQgk3Vwsp9GRvHF1UnjKpGX9EyiRK1kEN6oZGtEd628LBv6SNPa9",
  "key10": "4KXvXhwp7F1KYUmvfuhkNqs38QBV2hswHWUq5pzJR12nSX5372XZ3EbbC1RPPDBvAxwdJ5RZnwom61sBcwpFkdqP",
  "key11": "3HhDtfBJoBwXQeRXSCEryHmJMpiqjqwNDikBspCDHRc7dG6M8hgs8dRU95BB2yAUzGNvD8MmaSqLU7xLd5LiwL4C",
  "key12": "2gTawuiMLy5G7XP11w3ecHDPtehvb6dC9BCRXiPcQPQC6CgKDWTVkutTx9nX8qwc5Mss67GVVdrXxNkdUfGJUgFs",
  "key13": "5kP1RdnLeCi1PYNsWZDeySojzAmC1XQ2dnG8dVZdkEB99BLkw2GDwCEChNCjNFGuV1sAnU2AoYjEFqkJdejU3TK9",
  "key14": "3GRtVZ7HWiXzruMDHhJfrd6x4eP43A17WpnPHWtPgcSKk3W61JPn9zQvBPncuz3s8qmyHvVcQ2XN1xLDqXBFDa1G",
  "key15": "37ycEpppMmev2nczXu4s689yQ9jzEuwJh7Ezt6YkGz4vF6z9MXxQ8PxZFf7wjeasURS36FyABJnDyYTY4JB5RSUR",
  "key16": "2RT9XAJmCWFQaAJsNjy1XWJsnqws3KMcZLeScN9fz2eD4Ad4CUxyQHWCjyithPb9AEqJ2iDa9YtH8yxxjwGBeduo",
  "key17": "ZB8PqEbhh9a9HsruzSSFivYRdqpVvLVRjaK7hP6oSPS2sPZAijfQfyEmLKKFPQZWJQ2mmKPERzbpzfJbMu5drDj",
  "key18": "5Jw25AcmD6p643rvSEBHmXrtRNKvCFFdPnWhPc2NcbjzWSvpPidvpTjEJYC7nWiLeXHUVncbYWSJwwMEqkUV8YNb",
  "key19": "34uCimZL5zcPBk43JrjPPeGEi7Y7b7WZWdM9F7tjof1zW8MqNpyLGhWawzUepnCAaG36q3foQePzqfzSgQ6HNrEx",
  "key20": "3EWqoFnBcN6VCWfFwbnNPgzumhVX6SN7SBvPfSeXMHkzG5hpu9QaFu57mujGjo3vbV1CY8sEvyiHJLQPXwdVFXzK",
  "key21": "4T8m9VpMvUjKV7SfQ78btLdj22ufok3PB9km9AptFAdzFVPGhR9TVWM57kUYnUd3MvszfMP8EscpgZpxkkqS531g",
  "key22": "5VgRQo35JKZ2ARX6RT6NS1dfp5pZSShUWzPAEcQcbohuaF6Pdyem6gaLDD3hTSvapKFTT3GLhQsxSi2L4jepwbtD",
  "key23": "5seAYc5i81WxJ13SUU3u2NPc3UQJZ2sW5h2vsoMeNRfrUiPp6r7w7eNhZEDHe1ibFRy3Ch468LtZGmsDqyZfLR1v",
  "key24": "4VcF9SP1vLdEDCYmJf1eQTuF6TrLCbcvrwz4H4VVL6ZDdC5N6L6DqdcukcA3JqwC4y5mtuenYGxTuzrYVtp1Mor6",
  "key25": "2BvpkPcWb45P7DCjHXCWd1LTXnaxhveKhHSpNRXQbRSVTqYvifJPBippHtj8P6bncersRyeTfYvcwETcERMHYnSY",
  "key26": "5Msy1zyoPDDVf8h9m8Jk8n51g3KHLPE27CD1kYwaXKP4UzkW4sV5SqJkQxNEa2T7ffDPWkyKXcyAB63SQ3VR3GWh",
  "key27": "2HZTsvFq9UX5cgJDHonu5FjkTGtQ7dvfoaw8iJEQookerNsdHpCZYpzEC2vGkxEc6HF8HHTvyVLQdT21KXWZS6Qd"
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
