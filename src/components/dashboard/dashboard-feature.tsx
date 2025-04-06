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
    "gFsV8XoRmxWhxqkpguiWxVwuQrJqgY3UJF9ZoKvBY7L9pWfiHmVngfZEumtDrSETgif2gWspYis3XzQkyK3LZaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eFA8ZxMPdZ1xdHjHi36Dvk9MgkuCCbfp7fUGLUcHNNRmRfj5jZvcHNkn2kbEiuNBk7AU7Gy7DhGVuSW3YQhuBHs",
  "key1": "4gcXGw6kN1zJe1jb8QUWJTVdpMKo3PeyiozNXmW96ztxQsEwDPyCe4o1bonN7GiaASsxngV63E9qWqHLUdauydag",
  "key2": "4xXeZvLeajbmmhsuzRrKusoPLWYdVYrTDMyzgVoYLUagc2LvKooRjkRi2Y7SerFy6rJzxi7ZKUTKoTXZEE7Sw7fE",
  "key3": "3548gwAxqtJgejgrwzBemkXNCuFJkzCpp8AnHBYgWi49ZpNmbwW4ZBg6FmLFLtmw6iiuHtEFovgUHvPNiQSs1z1u",
  "key4": "3673vgGmu2DEyjTsw5bg2S31H7cfeFakQ21PoQTjvBkpE1Cx74Do47DXmVD5f6E1i1UGoVmmGZsepZA17Cvdmiky",
  "key5": "3ZcHk4wCuD95PprrberCH7Uo1cGMDD83vb6hGC1izPqxnBTNJktwL8ehB7nKbFs3TbZbCwutx7qT8pLXbtVDrfKp",
  "key6": "4q4WutAK6pLZDdmNHsWs79Rud5jPm55XUd8VD2GZ3jXuzMySTHUY1agNPdsDot2kyVSuKP1eaYAjZEZ7PUoFLLYb",
  "key7": "5oZfmPTgfMemsjBVcCUFxTXty2zegEEzLMkybtswT5Y9rQBB57jFcqPegi6jodSBNmotQ3iFL4UA25JhpvcfGmdk",
  "key8": "2QcL1oadZjX7e2qrKbwo6doKzW5nsvaPEYgwS6AAJxbrNgLSEVenc5gqb57armMjK8fNvgufvBtHNPD1d637eoAs",
  "key9": "61WUngvQXQRfwMoPLfaxNnn2XqCBoCKKiaFRFiKLH19hgQDmDcL9SsmFHAFusNs6SAKhWmTfm1fLGHTepeuj5f3j",
  "key10": "2dHMxd7ZwjGkQyGKCbhcaSHsJnZKYNQDTETJ3cWxoWJ4B7JghBq5VHfQBMy2DnZM9xKrYSh2M9T2jbQfBYFQvo5k",
  "key11": "pYCZCLaRBo2cUFkyMBSKVkuptgpTNTaJNUR2wgW95qGJ7hvGc65Es5g5vQhNB1qhqmKi93f8RFNEfDc6XAhqZ8E",
  "key12": "cGZpARehzNhu4mmWhRf3ogsdjxw821UncK8ubG3j8DoxNQMHVFioa48xzftcpcABoYuBGJATogcMQxsrtY3T4He",
  "key13": "5PpXkQeDCjgkiZAoA3XExrUGiVGxskhbGrc1mGCqcfERuAgFnBxLfke8WwbSh1dNkABv97Zxj52ZTrsaKnXuEtrg",
  "key14": "FzKj7baoGVDhFSCvKxZEqq36yPcWNfAq9AthQNn2NK53Pi9WsFCTiKatrykpdMKfECiAemRSnDzoYVkhDRzZQYU",
  "key15": "4nZcnrtFLvtSKX5Ymv6aAyRTA3afVtuRejxuWMdFXEERx3ACUviDrWtinsS63vgdy1k6F3ZPkGxv3GxdRLGdo9Mk",
  "key16": "2V8Ehdq8RgFtuVheEzkY8AFSCnNxCKEYVphKN8qXRx43TFxyeUMsXMprWxC7K3KKjhjzsb18jvhdJmBEP4r1h2sj",
  "key17": "5W5CCmZV36gK5a74Hyy1dJJbQa8WTPL37Yt1fd2hnhabTUo5NfAfWHLwpJBovYhhTYTKqGizFHAUGEXX3jb6k6rX",
  "key18": "46HwaGAj9RjEATr6FNziu8P5ruii1FEgvWXo6LbGhv1vJhd6vo32pWoRHMpN5HryKeZxXQLKWwV5bMzWThrZ3VpH",
  "key19": "2xpjg4BBbSsLa8WZaM4UY8L9TnmFjpbfRqapr5tsto27oFFe3jzG1gXoYCadiUcLXiiGLPcz9Z34SpcuXTfQQTKk",
  "key20": "4ZPUC2FpjCDrXYJSZs6bKPpfR44WVAfGYNLTQzurLsuzXJKAaNDk1Vvo26A8MKMRhXZS2JunWjgyan5EbHEwMKSg",
  "key21": "4FJDzLYWd2mxbXtQRjaMNCuzePJ1DJT4rpp2JcAapo62S5AixZxpeiA7nwwrdGxNvYQSPXV7qA66H1J2wu8vBSpb",
  "key22": "3988iHAAZxhK5GDkFZc9HGFDATjTtLdBw8BeTS3yTYtZiiFFGPwpJExkaa3vyJQcNujYJ4JZ3cNhrd7vUj5n1kW3",
  "key23": "21fUNKFPj7W9rzwSDLjFfRyMvqwMbGjyNbGx5N7tXgkVbdABjoCReWxc4YKetQdysLQTi5cKPWpxgrJErFLUzbQZ",
  "key24": "2spGrmv5zMpQcR543HzwLwzLtPgKYR3HgyrrbcFYJPUauJ9B3XtJ2wfq4SAwaCW5tTSATKcoPUR5JCkEkZ96TtdC",
  "key25": "4uC5ezQMnN6YW9reJtwBkvPpAWK5kJ4YbTcaKo3tgSoJ6xb3HeeJ9UBXXgD1epcjgquEg3LYBR2ozd8J5eaCVQAA",
  "key26": "5MsZsYuq2RiT6wPySfzWmxCCkuzpeUMUz8JyGRrMSDv3x8kqtsKFaYtcMF24sCErkFdLeTVYjSqT9V5WxGetzUhx",
  "key27": "3C4cpza2CuQTh7QofNmfi2FZUy3spEkPdVWsLMMsAaFREdXR9KFaiwsAzbzn5X4oXeCvdYKqz62GDVLiDvoShGeD",
  "key28": "4MnJsvu3CqcpWXH5uuoJ3NkyWmyhQfPCJNtuj8VeVtEumGVtf89QDcC56NeWXmbaJn4m6A4RdxRv1jN2GiK5n33C",
  "key29": "4ekGTT2F2acbLip93xbyBNjaXsU1uFA6FeJKgrh7srH4UhXVGebuJVvZEduxYXGuvyrEkfqKD2XADfKT7i3XWNUB",
  "key30": "3C2mouoFEBPvTiHGn9FnrcNJ5NFqNEykiyzZXVNVWAy1ux3oJ88ckfwAM5LKFKC3MaJBUGa1Fk2yCbZVnGhiCpNh",
  "key31": "2sPcWnkKqZGZPtiscby2Y2kkyQuPyWGF1jy3dzPJb8xink3V1jibXkR8oKdKjzpAqmWi6C8y58m9RZS9FUQkquj6",
  "key32": "5T99dsHs4UrAvKL6Kba7BAnkshC4RD1oJJWRpBU4jNdu8g6hf6eNEv3oSBBC3pEnNkNxMb4fPhga7EJi4aUkj7ZY",
  "key33": "oz5g832A39xgLKn2Q8t5Pu7FdLTAiydc1kXcBXMGvos7VBucmnkX21CV2AvviQFkcFpu3BUThkKUUrEpVriC8Rv",
  "key34": "5oGAdKX2K5T2LDxDzFtc5i5ZvH9b9Zc5t93noWoA4BRdyQ4GVpDKiFXqw5qreLnsiNWdct69eoZr7eZLvVc4t7mi",
  "key35": "5UMn4frjQRhv1Y4gFT7dg4WMsUwu2HcXsfSJW9odWp19geNbdwyS95i2ZoWcq1SAyo78P7RYejNWYimrLPLQBxsB"
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
