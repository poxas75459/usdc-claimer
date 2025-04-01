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
    "66GcvDxySDqNUqz96q5bKupDMu2HvHNHrpDwN5TLSvkmVRX966zEQkzHaxGNYQLiXh5DmqyKR4U5c5hy7ypBuKFM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nZfQVcyJrFYgqVqWPKwcXDMFs8KiUKAntPC3gPcN82n9r6SGJizggMHK3V92vuqAfzn6psqLQeTrXHh7zMa48yY",
  "key1": "4kh7LsLj2Gd6f9s6ReBQYufGNhwAizjFkwSJrgBjjUEoiEBz9NmkyLP6ncuPD3RPegEwP2DBDyLnMdwf87Csb2b4",
  "key2": "4gF1fHUB5PCnAMe79P5N3r3hNaiFyzQxE1ZhBQDSR3KX7Sue3gjjRWrsmUvD66YdSb6Wz2KkoVcxU7Ezjut76VXX",
  "key3": "3GnBvmepsuXiLQLcBsgw7KsN5KYbcBNwAKqz7eAMrAJW3srFY4n9VmpktoJMM4iYYsZnqzvt7D1TRLhXC9GVPMq1",
  "key4": "5pg3GdATsUny2S7S9ZkbDVpgTnNZVfH8Vc3fPWdUhEQf62iNAz9SfhxbcaEdMZTmyf6H6rz1uwJ6csiNZ2D5SUiX",
  "key5": "4DKu9XzkTj62U5To6Po6Z2649jEzrjpuXGY8h659mfPJkyxpaQH9nJcJ5EY2a5PfqixcjGqfUc7Wasz4amJmuEV4",
  "key6": "3jNW38Uheva42xwMiFnPkR1RdyRQEqkEpF14dPDcievDck3gV29gx5fmZdNwUuWnoAkHYFbHHYNzLr6WjS7d8WTb",
  "key7": "45cKnJfbVMsWvy5eWC62zKeZFRM9kwKjUqpMqVhNZQmEKUC4SimnWYCbhUN2r5Xbd34RAeceCQx1PuDY4MLJZVA2",
  "key8": "4b9otfDZ8vUxVopuvMKGiaab2iTPMdxrqmQgJv2BEuaEqeaA5f7WbidCDpGx4ymTwDcALmVBb7iYujXrta7EswSe",
  "key9": "3ktGAJhKYicBDgb7vJpSyWB175eSXCXt2F82qqFZzC4hxFDHHf9Y6pbfTPuNjsJRPvK5nZk2XZ4h5un3iNcoB2pn",
  "key10": "2yRvDCNKQ1ecYQ6bxh7SjVTQinJKBgXP6WUVnaBRkNY533qvExFF3UjR8fwJydwjsc3aqmtum6yWgzUDEUmBGgCW",
  "key11": "5o1E6GUuvh3Cqvfz5kzjskPRWscv5EKTiRyDFiuDAnwb71S5dceSeyUBTcWp1fMrGPH6CAXtwi2nvwtFrX9t5cTG",
  "key12": "4dXEehuocHhHfwC8hSKmwtT76hWJAQs1AYmjHTRWg59FXvWrcBUdWDv3DRWyFAMnwBeUsW8EMK5LqSk8HVQsE6Yo",
  "key13": "4ZK3tr1C8j75ei4BZv6HEq3H83Vgw3oU2BJn3pcBQscNyxRq6VkoBw6SFNmUWDJtB287cP97rZF7gaXRxeFJyqhx",
  "key14": "2Ltb5PWuA3ECbTLQh6s2XrzPMVyxD36AUZq4LL6nWar83P6pPPthuBCxBpzAZqkNAF5hMonwYM1AjtoZAxzZQYbJ",
  "key15": "4gfyHa4e39GEeceyz9tEij3dwDjrDXGFssau6R5ia635z4dmA5z76i83aqmkpQpwxNMuLYJDUHN3KSGXQED5hdmg",
  "key16": "MaH8bcDEp2U8bUuZ97HPAUDpqVk9NN2tcLV3PzufDRKJdZBGmS5Fk3Yxm4v6fiYnuJjfKwe6bMjeA6n9XN7njNe",
  "key17": "43NRkV1WezeVtx88BHBgTx4s2L7NTWJUtWEixXkLfrxwgVuDMsbBF2x5Fdr3VNCRtLdSy3u2hBB8MtS1Lz9A1gqz",
  "key18": "4c4n596mz5XabUWmU56d7h78588KpUom7Md6WMQLx117FvebcC8zgjs3rNVYswcYDna1ab8dtdxf4Tvio2vSesKF",
  "key19": "39TMZjnxgHUXeWT2cUEeBQrscsVh6cF4M4SXqrL6pipxKx3gpqk79oths3cS32LyriBBa86Hj1YneX2PNnQBU3pD",
  "key20": "wMnR32gzS4jhUnv4V9WsuwQjdU2cZvS1kX7WxsLcC5o2fjvbhhg7kWbRmEPphDouBArx6asbTA7bxzNUdKe5kQm",
  "key21": "ty3yqogiNg9Fu8dsVEonUG9vNaNnFTQCLEJTp3DxPacFGX4FUVsg4upaKUcudXZ2sfN5HCCJc4fCreJa9Vt4fA2",
  "key22": "3y3baekdYujbZYBc3YbjXxvzGTzJivNue5ptHceRQBhXZf8MxVhopxqtfwnaQQDXyKLQtBfGJGa7pDB7ZTgHWezu",
  "key23": "ns4emhAumGcff4HumHqqf3e38XDqXqsqZrXspJQhAyTY8fBFcSoFSRw7f5beXko8tfsvgd9aDUSccg8WnQQFcj9",
  "key24": "4yJspPw8PP9nZ29vrgn4zrWnkEyc4GvQHr78zsJovF3ou7rFTe4dxZsitshrtHRXnmEgbW2TZ8Jj7MMLZz49YwnV",
  "key25": "4D4DQQ6iapQQpwkTSnFoUmN35uRfuNcddRzRBB7atjXU2QXECkpUzADn5eibymArws8PEy6xrVSz8gEa8GfQtr43",
  "key26": "54tnR72ttZ5MXzt9A7iEmuqcbSh4GKse9fNFMWktssb3J5kTSxid81RjLw3mu8Qf3UmadgoTvuyqmtLapP6Ly9Sr"
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
