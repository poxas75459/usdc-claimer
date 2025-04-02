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
    "4MP9WH8gt4cCtXBeSPNLWv3CCREWGY4PGrVRm4M1cSJAPWjKGXhvBg3GG8rrsbJfFYLXwJUtiaxMxoQon8jyzJiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45FWwhgfWP4UQCRaGqHbpsipPwAqfbTqJWdBmXWxHmo9qibf8cyrwVHV7C9ksGmEAyQuqA8BChgarpfo8mzaXJjU",
  "key1": "PMytdsFWsYhkqqp8A339FXenEuXNbng6uetPgFSGjs1omkZR9HPf88seLXipabBzWoRWfnAAuGwBsPdLFMY3E2e",
  "key2": "zhUUjnadfDfo5J1RLGaxNd1WDkSSiRsBYFk2RyZVpMeXH75EGpPezXDeyLXaLt9r5nD2CaS9yTsW2MWMtT1S9qT",
  "key3": "3QTQpYjnL1c8Ko63fDLWoZ1gXbuFTPvrsHTrY1Bkgw642uDaM4DkUABfboNw3pitjsxmWhVSFedmek67fyXndQLv",
  "key4": "38ZAyEaX4RFFjb5EUWpLmw8efCJT4mjvozJxM8EmUGFirWdHUuf11WLfZJWPMpi3fvYP3jdVrnNPZyzRtk2Ut2Mu",
  "key5": "i6HSDACPCVHccPXQcXrVb8kbWGaVUMnYiNudCDDDEwRxJjBzxSiXLKvKEsMshbSB3NdULaCbAv8mWP7PHGUtURw",
  "key6": "4gVcVsjoo3S9egPSNrmeWfkAhZ2ddyb5zSyjoWefhaujQcLwmqnz882HD4pm2KhdyRCpFhJ5JFT5GiSvYxuSw7xG",
  "key7": "4jf5aXUFAJX2JQbpd6XoeNQUnoRhdi5euQ9hCVG4naC7j4kPtJhzeVdqFAB9fuYYvaEoXfzsq5gDacWzCjh4MqvL",
  "key8": "2vSKy1tv7KYswCHm93KaYD6NX9iNnvk82PJKaSqRRgEp77Ecdq2hWVLP3PLXnPViXZMNJxSGep33an9dBg3GRU6t",
  "key9": "3tN9GhC5nXznMnzAhFiGpSYuLTH8h7u8Kidw1Lj4RhoZKk7aHRemEJXu2mkAyWuFskzvxzKANSRCsJkHybkbq3iS",
  "key10": "44aKbQAvQeTvsX2stRn4AAfbw7VJzydpGoGGtfX8iGTKRju7CwNTRk2V9qEH1ar5UZcz51ZKeEUQTgdL8p1PKKwF",
  "key11": "296huZwDv48Bxg6s8aWodLmeziw3a6e8WRHxUi4wLS4EHd7i1dQqGQ9d6PP5UFzSKSAGHnPY6tNqrCknQJco6w6U",
  "key12": "4LtMAphzBctnBAipFC3WyGHE13PvzhpUb4FijMtTKijkG7dL6386qB8g19BTceZYpav7fM1u841gN8Lm2ZNrfcSr",
  "key13": "2BjZe4wV7yLyKv5oFeLXk1RU39Zf9qvYZLCQxw3TgXUDtCAEaFpDVuNS5BnohMWguyTmWidMD4A4Ktp8NFFLjdra",
  "key14": "35cMq4PRmngNdPDzsGXKDAqLoqkurrDiy2CB1wFqbL747zWt2qZ3A7km2tzC99ZfF36ZN8rWgmRgPvk7QW1rDxwn",
  "key15": "5fqx4sBJkSvsHXimf5EFmd8CfQDSooaSnjo9k9BeaPNNt4ZJosDgeTqeokXPZG3gtNNFeHX9K8RxudUfap2rCB6b",
  "key16": "5jXdriwp7MDfFiGG1TPHVTroCoKeiCL8oSCLxqwTW4Boh77daKyJMv38FXA8sGNj2wVZLXAdioJgja2EF1eBq1Jz",
  "key17": "4Uq5xwzQ9hLu6n12nBUsQV5tKJ1umm6Dw7s75C8mCmFadhagK1cjDxgUJ4iZs54C7tgnKv9S8kFkajXcfCiwUYWG",
  "key18": "4vrhyJrVJzTvuJBMgWntKkSHdW4kYnqvRuQZY4qwm1vEW1Te9np91sLw4RyTq3ewnibfq3Dgay7RAMFZzwEyCYJN",
  "key19": "34KVCPtAnX9bcmof94owhPsE5j6ktJE4zCJvh46nm9xcEQa6FaqbCWxggZefCBp1ogVBfy5vskMuTBJQjg8nF7Hn",
  "key20": "23dd7p7JwkHfum8Vm2sfGL7h6JnUvZMZaXQddVLpzQwQ73drD7xG6PTW2nFxuRRYrzf3iFh4CcGAcC65hEyJyoNU",
  "key21": "4i2kWMpcB7F1Z8mDTMWvM8nSHwnov5Fcy79W1JKTr1mLDDAUPRG1Dqd1QUT7HWV4V1sZjw6nkPivp8JEs7fN9pas",
  "key22": "mh94BGrw2tXCsEYqeq1YwC2Xnb2emZNz8DtF7ShhFUg37tc69qTsLGNnA11JexdxMbfWQCcdvXD6zfZvNLbLBTW",
  "key23": "3eNntEchHiGuyj6VtFeKuEWv6eEPkW2CzsXFBrppzhEvRLxApCLFCkiot7e8s4wUXBWTMgFuuv3vqPCDTgkA3nwF",
  "key24": "3RZboFmuvtZuxbCcUtPRVYVZDNj34N3PAnKFuJMEpbXc9kjkvDN1wTapCiGFgkwRTWCPAMVBciwV7m5PmQEKT6t8",
  "key25": "3basrBkF5wLSpTbXXY6Ce57RAA9CaWmUfP2kGaMazYFDcwauDUwePULYsAEdC8n8Q5QdkFiE2ZNpy7Lkp2qmBjsU",
  "key26": "PKPoh3YZcwuaGsKy1qbfcxKr7KcVsEU8AUURyuFag8rmYp5Ye86pdLQbuthkc5TsWn9mM9e7etSSCLZGLD9JMmy",
  "key27": "5NY6DxVWNe82bD3XNhhfEXc1HgPKsnJgpDnHMVs8gBiQ1fKQBCjbqwbsj6WK5uTkyhXFep2arKMvUCCkAoybhWPj",
  "key28": "52TPakTyhhGBGyz3XMHgkr5n1ogWyCNbYvBG2Zn71PjdFUGQ6YsYJJq9RXVJyizmf4yBsCb5usk35NVb6WFemQLe",
  "key29": "54U978HTVk7i24fGH24uYP9Bb6JZu39Y5pgxFbVD8z5HKzkjnUyNwrfAHkQ4zXDi9JGgR2FdR7eHDXiSfDQ1SVu1",
  "key30": "4L4tu3xyBKWdTht2HbwWQ37HTjMnbcQdVWmVj3MYva7tjqWuxWPv234cGAsF3ZST7JaG5W1q59Q4XmMeEZkc4Nof"
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
