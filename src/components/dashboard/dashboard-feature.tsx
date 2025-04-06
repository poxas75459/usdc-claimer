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
    "2qPuWZ7sqAyvm1HHqoXzef8Qy2ibHBMcirFrZEcXTtzEU3b8BvgaaxA5naKsKyVvXL6368KPoX6NBDJAVumUv8KH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X2rTtstLiuf2GLUrmyv9QAbTNbJMmxKTqcjgCSj5Fgb5MixCzy6ZdrAqNQDNatfwvMvVxzcELNUXbjKpikRGaN9",
  "key1": "3GQdiAuEaMGZU9S8g3hMMdZk9jK2ihE6uJMgKBBF1kjQgFoMa1TzXxL5ady2J1dfFmLNeMB6Nj9Q1cWMCJC8sVSv",
  "key2": "4fStPVfcxQqQxeQBeTiTDjzdGWK9HSbRVz5jLEYf8gstyWxQDdAr9uat6sGLaSgK2HtKgm4W95YuhMwmxPeby41T",
  "key3": "YfxCP1wpjCPXwFNL5B3jEZR5gsrQmUBrJTva9yA7mVdKVzWZ1C4299iy485m1ehY13J1fGRoRa9NGu8AE1F36ig",
  "key4": "4obvooNiS7GLxs4KNEpMDo39YyGnY6xzig3VnEFiWS9iMpkM92s7kf54TGDBXXFmmkaJW37S34zGM9fksZwNmdtK",
  "key5": "2r78DoaGXeNPFzPHG3eYGmpz8gNWxcfNoLkhBkqw75yc3bzt2kNrwHvEJAN43cZknScifMCUTu9Y8pwabNdpyNfU",
  "key6": "2Gsk4aPDFZVP354Bp2VD2dUwhCZs5xVQFkP4u8aqayQqVspWUedwHdLidnN8wtxH1pB7Mk2QCgqDyG8A7to5wXgK",
  "key7": "2HZuN1xN25c8R6VtLU7HrK9FYmNWCL89ydGkqiAiGA35Y4riWuevtyFBpfGwAmjhHiLPKVnDcsWnTBFyicCpGeiR",
  "key8": "4JUW6XpVBbLf5sL3GFCLKa6Di2okYjE22mNkFi9BmJ7i8Z59bktpLCmo2G3p5ZsAY1qtjtHmDiBocNYh7pWfKhbP",
  "key9": "5bCCaCYqtdahVUjWbQftPhiTNXtdzRsoK629x7zrycbwvPCeS5KewPTZX8gvSn1nJh2WCzqiXRHdh1TFAyh6ohHL",
  "key10": "3aqXgRP8sWgwsRSchmWEWx6GPPY1a299ZSBdw7euDvhXxjihuR4tTxpHbZRbaXsqG74BbnhyeAVAECKmopmpZCnh",
  "key11": "2rEjdctvn1ijZL9DPcfCDofFTRzkcVQP62Mth2Xj2B4puF9xnq7SKKUW99XZkzpZ8XnPj9ndthTKhV4bFrTNYQtz",
  "key12": "DsZkuLMMyjhHAjT6raH9Kva4yqGHDcdoRtmUYGDmSPdCyPbGjeHT2RjTCCdd4a9kR7CC672AbTkHjpmTwa79fpp",
  "key13": "32B8ZQAqFNXQHaupkdVAWVXWEgwgVaZvdMy5uq7RehBucrmeWToZVWVKGgKEcpkDSG9Tdg2tmYEcvgqiBk55LPZQ",
  "key14": "52XDXSwuqn2s1xs23yh4esruRiK7D7n6F1qNRraQDzhd1cBgoVCpDckfegtULUPzDJrXphR6vVZFEE6LtWewxKYp",
  "key15": "3JLFDzNexs4pREqBG6CuzvdXwFivfjYewh3awDBM8Sx6SiQaGs5cfLmDRzJiJ7AiAfzcZ4TPxGJ1JNa3QJfXmftZ",
  "key16": "5kc9q5MtPCHaVu5mL6vwjaSWuFq3n4nZXMDU2g3LBQegjSa863EynBBLx2VZvB1gmAqS5iMpNAtNzcZQMpFmxmmB",
  "key17": "5ZEkYnKzRxN6f2Rx7mCM7rqxnJHzHPqdnvgLnkrzUbFMWd4kfmxfQ4iF14KDu6LzE4K5So9SDxHaSaLanYRSAJP9",
  "key18": "aHhypAst2iQU3gYXdnDRDssrxXpH1ckrK2qdQ1yMFgNwPdW8KM1XsxDbop828xXTaKKJhVdLfaMY4D6MxSqz3tC",
  "key19": "2BU7AitqkCyjSkaQDFCDUdfmrP18E6bFCpXf39AeW9ywUZxaYUntrJGZaJryVNQVH8CgiXhw4qJHWK71oHAcqUCj",
  "key20": "42ay1QaoPRZ8XJJ1t1dtv7Ag4tZPcv8HTsMyAxAtSh5Y81qogDGaRivLgnEsFmPy7N5nWpwSQBKzHRpJi8oGpURz",
  "key21": "5X3ZRh6wuVELacZNmn4xmFALePbYx6SYh6kRnNP2WXEjTrNY7nTHozRGW3LJDanzVW6j1LGfiTe8qgx57GLLbxa",
  "key22": "4JLPJWPE1ZnZCCz1so5T7283RmapVF2FS2zsGboSkN7Dxc1hJtELLChENyi9nZhdieZeGJko5126Z6EhEgbSceX4",
  "key23": "43ckqH3fN88eDatYQ6ebXffXmZ82FxZdhiMcRZzExikDYskVds8B9oyFdtMVVB9MiiVYhPyCxTfmx5nu1Q17ZovP",
  "key24": "5r4aYfuMQT8Sjb9ggUkHDhp23WwCJ1PG5xptBELGiZmZG9HdxwRjRj5CtiNFpr7hpTyJfPCUuhpMp2nTMG2Dptt3",
  "key25": "5nfjj6w8m15tBeDtAj7HG7E64nhwT8kyC4tXT6S36s7yt45dcX9AWEzzgAtn3mBc66oahvfFCvQ4p7yb1T5VsVT1",
  "key26": "5ALd6GJjFhoenXwRrXayMzfWee7dSGYzAeAJpmweLXwAsmy2ahHsiLUWsBpMro5kLU3omDCiLEKioE1Bs1PJAP66",
  "key27": "4JiJXMsv8mxty8PhgwQMDvKe3kJcvbmsxD3zzZJeEfk6LrZMjFmVzU7twmFw26EtiBDUssLexwPwj9rSygNqEd45",
  "key28": "5878RgsNKmmk2GMijojXFPGAC9CDCKh2APkZ78rcSXmYeSbbA5A66vv6oTR5YbddKnwPnEELo8jWNzHXiL54G8CU",
  "key29": "4heVMcTXGi9G5QyXVD9m91AZPvNxTytH8RGrWWXyVz1QtyzyRRMGkiZsb3wLcUyUPT18ebvRzSzEhhmxTYvpMjSH",
  "key30": "4EzyiRce4WcF1mfp5uEPWLFUGvt6H76JgEr2CSGaFocXweu1amwSx7frT2JeTGbGeWXoen52N4QpeQvaHn52q8Mt",
  "key31": "3UaDHeo7eMpypBDvavNjd5wAcDSxN1vFpb9jedRxykzGohHwpe27dBsrMdfMJeuAnKxbPdVGotLXbjEHtaiPfgrk",
  "key32": "46tFeaibRXPC2bpJKGPqhX5HovAri5BdMt7DVgTnFa5vCNPHcM9cqNRddkeiXhptV81q3Kd3nw4b1SzDxrHHMbLZ",
  "key33": "54nTChESGzNe6RNCCkv2erz83JPDd49zwpd6fZ7xPffVTfcWmPHko9Vjq2yauHqVpNisw6KpAmAR2tKBHC235Lna"
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
