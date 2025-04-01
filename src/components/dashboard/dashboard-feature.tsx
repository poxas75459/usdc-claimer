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
    "33uWFe5254vN7vs7DYNyDt4NWBDZRJPHAy98uwBrRSy11zSbFwCRYgKvBrhM6uQGW9Gh4RDAqLjd3v7MpZ2SSBmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RBh7J74GVTtZsGUNiimfphgykMngRnT2Tns1xDKkQegyHyP3bL6ume6vC4h769PDr24bGzs9VfBovJ6eENwgL9d",
  "key1": "TdAVghQpkNFHPTgptpEYS6BDYmFPDhYTNVvBKjajwjMSYuCVkcoyeeR429nfuwftubA4zfgpbmXw2pCh1AYPRr6",
  "key2": "4nDgHfuP7jwwttVKGpnJ7cGfaZmpQP5ksLg2HSoRv23CtsPyzjtWVmWhTWEkcQZKkoTXnWNfoAC4Jsjgc6LTtnrk",
  "key3": "5oF93Gwx4EuVFo5CFA84siueZF7aDdDksqy4P2az9zzhVQVCCG9ZwviUyZh8ChcgqzeCq4idnGLAU3oAF8xs3cKT",
  "key4": "3hfMLeQBSNr4tnS1UJSygLYBDwdyXFqXx86YGTXp6rQ2Pkic2ENaNgYmMjoCpduqPisp58DVGuSLXkspk71NZL7d",
  "key5": "5jopUgDim8sFSQRWDgqAfGJMA6wTyq5PwqAoa2Ewvj7rKje5bBua3x8YcLnvyZ8yzs97BEBxW9Y5hQyeJgoLzZ9K",
  "key6": "3QSAVeBYLuiZo3KKg69LVJVMufs34zKsQC7pVBUB4T7VBpf3ZWaQfw99WBibghuDGTj7PhZLT9MPPamiV3pDhAEv",
  "key7": "43HE3R6HVnrFNsDQA7adoC5Z2Tgz2TKzF6SdXVnYPtfGbH5DeGM2octfcQDxs2BF3GoSqUnHtwY8gGXmtuQ5z8LP",
  "key8": "5Sgok9KonY5dxoTdgzB8zjnU5fnBPU4pz7g3pwr7CtjPhSnuPZm7getHGVum8EpvpQECPuHhctivgz9B4iQxGgdJ",
  "key9": "2N8N3g4nyjyje5S6HaYweyfHgBpsmFus4ZQGCXYe16ZRCrZqr321zgLyrhrg7Uq9xhNtJFP5yEXbgjoZSfw5Ky9v",
  "key10": "5PDPNYu6kZw6PARn9LWFUPH7dhUr74kERGMT3kuuzDPPdRzh9EqoZPevNVCeJKBW7GrnXWQuLcDyFd5BkoePsrps",
  "key11": "3kio97yfMqatoYwacGjjL3Zi8ujYuqsr1RwovLUtsUUnk9fzUmfy4F4oPumEYcCpwn6BpJ3yr9WLWN31uXGQcSiT",
  "key12": "3mB5s5krPBCU1PHNxCNaaEPi7HUGExxgubXPHAxh7MXm26jWg1bety6daavRyNp6mf9Zb2rbDq5Fy6pWZAUkQYyw",
  "key13": "2GLg6nrACbo5bbfbmEm2DtWvJy6ZmhKkbUM9Y8mPqLqQ5fhYobMZvuTK94WtSTCmk3tedWv5Y59ta8XDBnSwA89S",
  "key14": "4EwvitR8Vk9fWh1NomL6ozkeCuC26QfAzLM4X5QABrGM7FoRXMEH89h5UVs7rSixeobamxQvrejT45vQ5YaD2XPn",
  "key15": "3jssLMT9DwHcvr7MyTmYJCQgonPxsgWrgV7NR1JXxzKydTz5kZnFH4PqhLiwUG745vG8BdM3Hq8FRATp7uqqB1Wb",
  "key16": "4iv4VgB3L2dJdVSz2rcYJcierZ5YfydP1ThFQw5hsp4sFDMwy5FXB9GuEvcRTS3YfqgarCmPWxqqZsA26AfhHTus",
  "key17": "29FWsMQHEHFv5mno1UQfkSAh23uU32dvyrV3k69L652y5PDHyiwrmVK1WQMGebQqTpjUDfpWmhyeNmd6PUo3Y52f",
  "key18": "yqehG6esB1u1CfK3CAyuUYZkbNiK7HLNoNC1GvGaFV5GMzAVpzhdNyzVPARaXZhyYUjbGe6yu8efHP6bFr55oRu",
  "key19": "5ZH5C49RXGejAeTUo2952EiwiwAJ6QQ2vV1m97CmeZCdWcbUs3AnEf1BV2Hig8YYor4o9J6QF7QuG88ruax5Djru",
  "key20": "4mSQupET77tMLfzucVLHhgqREdQ2Mwf1vnHRtkhBoz2MurS2MpArr3hm2V4YNjQqBbLiyCeL6ZTbrEQsvjUYhL5X",
  "key21": "UZe4srsmhjdWqxe2RAKXJCgBrq2TzvH9zkZK9idCh3kgJTLcjELRiYFVE41omN9UnkCfR5vmoKf8b4iQii3H2jm",
  "key22": "5bLf4wRtz5gDTw9Ww9guAR7HZYxAGNNsqvzMyhd7maXBn3b5J319FApiJetKFu2M6LwmJVhd3S5naTDQmeZHav7X",
  "key23": "gpH88tk2UFCgGwCc2zQS846Y7Haupou9F9xWZDFyed1pmEJACoPoi8n48eRPWa9bU3CwJjJjFTGWs2fNZn8PaRv",
  "key24": "56BALR1JXn4f2SmgpqfAZAjMrdgFXtg5Tn7Mr5nnkubShXjz3K3zTJh9Sh7icMgLUL72D3N9HWfpUyC5FniMom6F",
  "key25": "7JVdAH1VsK7eP4pLoRBz5r7M8R4y263pGW9DcTjH8Ah9Un4Qo1RwArNo4TCE7ioVYwCNoqcRot9qFb74Xq9iooD",
  "key26": "5T1gARyqbeXncZHuitvaDi8s5JritVe3zPXWg4nnmP121awJZe1WRxzHqsWyUaZPuMMEQJBuCzKpGfdc7ggc122z",
  "key27": "uiZFw6wD3Zionv7ChUPRfiNreHEc55RQTGx2DQeYWN5yr9SpyUtofuVXq6uggf3UhVMYViLtzBbmCCx2irFyo89",
  "key28": "2QukGB59SXjPKF53fYWi6P2CuGeehUpuGWqCgkCpRMi6qMWX4fcopCQFqx8sEFAH8U1dQUvPsPSgruFLyaJ9VZ2N",
  "key29": "3842C8RKe4i1muGmhrW9pWXpA9PsAPwEe6MCpBWoy7nAtjBF3GsyvWH4zmJAjpoabkXGRwRxy2vdGyqF6qEWjXLb",
  "key30": "4TNiLC3dyycakWhBxJE7yQ2o5tTkWR8wTQrBLeoaz67ZLEnf3spKH92KVwocS7rc9nhpfCucE9yQ1BoBFS958anS",
  "key31": "5Wty587tRC98fzXMJSr5qb1akpSwtR2cLw2pSZCMbq5qajV8v9MmGHuRgXvSPpKtnmXS5rbzVE9YBzxPJgGw6bay",
  "key32": "3S7Pqyh1URrqELgq1Hvruj3vbYXmt7rQeqvNWxX5EZxKBFHZHxCu1VCJFqXFKxtWEB3J3zYvgwnXSqs1emzy8B1P",
  "key33": "5iXX8nPUm7RhvxqC36Quxo6YrbF2bRUKUPVTHukieCjEad1qgnFGhKaS7GzBLg7igvFkcksBQgGyF61jtVWk7aGa"
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
