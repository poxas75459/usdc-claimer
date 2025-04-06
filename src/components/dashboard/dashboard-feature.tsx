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
    "csSeRnNASfsyxiPRc46AvYfRuhwk17MXvJKTnmS9tpP1LDv92Wq8hRFdwam2GZ7pVBLm5Bsa7s9hdmBjGMZaaiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CpqfsmzFMUfTW1n6LNjHmfES69DB3zfVdUc5tmgv3Lfv4mEw33f3oKSSsYkTho1H4DqJMVE7HxbeUjEsRWFaVCF",
  "key1": "XZLmh7dHS1PfUX9Sz2LAhLAiVQGDiURLEeZeBv7Zrd936947whPaZd8tqB1ufxkcY5d5wmYmLcmGWvi7R3CLBbT",
  "key2": "4o5xAtUpz9mGEFgfqnSUyomy4iA2jPhfPMVN3vkSXJ4RurVeKbd4TydDyUo7WKMrFUDc1kCCV7rTfBqfsFRJjUT9",
  "key3": "38CkmSmByFRUsDjgvef8U64AsvsCWFzn4zy6AFwDgLJJS4wyKEgn8FWWE8e43XGyJHf3sNc9isuPYHfX2FDXZgew",
  "key4": "2NYNNccYjTJ7VMQPLDzmLDn2Ny8WjEc7qnjhJveqcQEQpACerLby1Jf5JbVyKtymJUx1FNuhrmtz9QrXUZxR8LHU",
  "key5": "4eCn9u6wzvSsW2Jag8uTixiT4r3fJ24BiVKMJmg8iZSbM6yu9TzYzvCQaKuaoxinPEHtyxhqoAhXdU87WibTCh6h",
  "key6": "2KeN5JTR9JmxJh9JNJHs1vuyUzQbVvDtpLVVv4xjRLYtnk9dYQnFZy1qqKxvm8LvNNaD4B1Hy86vzzVrXJi1A8YA",
  "key7": "2vcEwqkPDjnNeGZZhAoAPEp31pHYDeSijS2R9eRE5ot9m7DMk3qrj9xM5i9ixngvXr7Bpi5wdKHQAXjYS7MFY35d",
  "key8": "2GHXQsvXccKPehUEopHMqbcSsFE16jFyQZ7RDeiANtSSeDivcop71kXA4SJeum1PsXghNeNCy1KyJyURRchVpamp",
  "key9": "2nmLShaCzWAksZteW5839tvDHwRWaGhjGxD167AWh6WgEh61nm59otNptRYUAj3ByBs5113rLrE2c2YLX5RGDxNa",
  "key10": "4SMPFF4HcbgjwjTjs2s8j4anpaVtJDaG1r4Kp49oUVtboiaCiyU1F1T3V7wrtNyzChPG9Ha47YJEwKDDLQaY3wTB",
  "key11": "28iogvxTRUp51k2LCEn69U22nLqMERArtA5xxUanDDqNof7DzKmEd4U4WMHfuhXxm6ZNB8dUJVJDPbHs7gzBYf3V",
  "key12": "2vMJHbEUfqv5ad1ESYyhcn2FWTxh9CN8JifsaDrrppJM3AfzZLZBmHucHqN75RNSmAy7uXy34CzdRRxZ4Gv1MtCM",
  "key13": "2HyXj5S6vWCu284NJ4dUDS9AF7kpDXbznrYgWMWrzZb23dxYgHFwKqZW61Ynf6tqpWqZCKHz36he2FFLZ21fbpwA",
  "key14": "5zxJtmhqimmn27MycpS9fg7TprF8sFDYLUMPFMRiN66hJzY1X9yHNUcWHfHj9NNviU5uN1qqs8rSZjjP6SZy4zDj",
  "key15": "DTSGiukeczW5s6g4v8g7qALevt9taPbP2GcqYgKmWRWE6grYZwsDnVnTrzS2zPNt9XbSPwdMVLYfqaxxuy8ioFd",
  "key16": "ahieMvNzwYc5Z1ihTim5ZSUoDKQ38fvUBH9aKNG1Ud4T6rsTh9AKwX1H95QGy8guQzBfZ23aVT75NrRAnW9Kyxy",
  "key17": "YAmABgPZEqGnXdJiCWrGxB8p6n22DrsrBsUDWXYpbb9kM5vsQgWFkpT4pdC5gzV8oKoU14omYPgfxEkvcb4RftR",
  "key18": "5kFfCgbKX3dfD9Rh8EHyi6BP6wJogAwvTVFxbdAABqDXihL3rkxTC6or8daqUZ3SRQYYC1Ya6ogD6adp15T7KQe",
  "key19": "2Jz9afSZidEqN82pRV7rXZ4gmXN4hTpErVM46vrzvRtZ1mDWsjExGyuiL5VcU8E8WFpiMLwKWNsyJNhpeUy3nDGn",
  "key20": "632K2HdVJ3WZiJufKdxsJQKtwmQURvPECaSrB2VPiHGgpJGEbtEf5fWEKF1wa4gGR7wQ3Y9pAiDX84PFddf2J9hx",
  "key21": "2tpR6ChmDScxuXxXMttBqVVB9Mier9ofgwYVptYAQZdhCz3J68vwiiWrtEV1PVp7LCgwPkewPeJuth5atbGTqxAL",
  "key22": "3KLFt1VxrLT18dQGHc56oYrThDZ8KzYikjR8q2CLD85ia2WkEhoFv3JkjuVZ2Uk4ii58gRMbjrpWjCMVzZqXuTW9",
  "key23": "4qvCjTbc6AUkeGzYVMcNwEC15t5mQe4wdZMFCxCVtU1keeVewut9TgWdphRZ4wLHSVMjsKFSFwMEBBLyuNbfFYMy",
  "key24": "2xzWiUqWEVNMRFzWxeRPUfSaY6kwGWgQQsN88d7s9ZK8G2ZQjPpyPRWPu6WLB8x1vx8e847xh3EvP1ZXrvaqYA2L",
  "key25": "2Dm8TqGZifTzZnYVvFXU5Wu1jqrs7E9C9kV9HrtmnMfbY1xKZ9rZXbpgUmdeMKQTRpRuaoJQvXGa3JeTAWifCUGu",
  "key26": "zemTACLNwCsmdGyJbbkBSc8KKtk4AiQ83qYHPz1SN1Wz6mARMQqLiTx8UZbAnvt28nMJsk47P4Bvzf7smYkh7uA",
  "key27": "3GmjZZxkpp3Z33pLyKDPKQ41FqM7Db5tAo9VjTrQyXTXB2FXTsMiiaYJEmE6PWREPbmoqb8a9gSzSyEf7JCc6TDj",
  "key28": "2iyKrku39ZHyHMnScHnrAhU3dv1Mw2QsVFgrt8cvhoTWSNnchGm6DPAoovubHM84yzjjFAZJN9Bw9vXwAFfWACRq",
  "key29": "pDqSBXCUcFZMuycSAHCBSCxdhCQupPCJV61d1wEwaxDv2TSpiHvsTfpSrngjPyxYnUt3nMVXhiNmj2aVL2CVwCV",
  "key30": "4KU717UA9rg3EWp67MUjvGCZHeeGuao2BGDuUE8CSBEQLgckhTk51sEFyAhqqH5vKqcgehPu1uMZidk7x6P1A3rC",
  "key31": "5Lvi8xfXUtgsXWcZrG3FosDvX6RjE5BS8uN9fX1csRfPQMJYQE4or9Gbc1tUgQ5cUEQVC849uHwwsUs2TQAYHpM7",
  "key32": "3ngknKBQfJxmzhDdBaRjGXYqrHKCv8fFytGBWLGWNq2VRZf3zaTpEoqvk7gWLteCqyP4p7g6eKcnNK2drbX1y7sX",
  "key33": "JhNmCHsaAC7gYqJRPK4T8L6uDPAzMDHHN9MBw6aDpgtZearWTZzDe6pdaLFYsXeQaRjjuswDPawgyWdkzMTgDvA",
  "key34": "2o28PKXcLgqY38od4rX6nTaeuaX4i4BeXALRWDZhs73LGr8cTVcXvzcpLhADcres6TNzNyFptJYg6sVbn2TWTdZ5",
  "key35": "5b5g6SMytUkqYLKATgCqMXdqhhxkjdLg5ftETTJMvXSYJ7Sk9FGkAMqUpi1uux3Xx8Qb5KxeyyCkcmcV8dhF1xPS",
  "key36": "4KAyBxVGzNArdFTp9pZaeBjsnTCmrNQkcsjATwip6MoPbjitrWeBJxCiK1QEbopjPdU4H6jp9KVxj4xtFwdQxpVy",
  "key37": "5Ng2Lzxoye8wh5pX6dJnWPrxybtfr1iBcNXLABz1R8srwMutcrW7JYwBCaAdV6vNjzybr8MFsWdAfknKWEAzJ647",
  "key38": "35tT9A7ihJbqH72HmMoYCaXmAQ95p4TzTAzTWafcmfcoWaCZ9bzPJSjZxmgckt3hYme8diPwcd8g8S7u1JhCAjaE",
  "key39": "4uYLtPPRoMT8NEayFkkcb8W6JXAwUf9EBtPbmjwkSFwFGFBLg6g1Lf4v9mXMC2Q4VuBF5L2qN6upFn6ehct2XQ2U",
  "key40": "38kc5o9DYdFPCCWVWcPD1ynbLQy1YaZLsRm9hbHEWuorsHkHCSHx7Ej1xctbS3ipDMkLnfGx4D3ZyyGdiPHQjWcE",
  "key41": "YK9wZn9ZEivTWNgh1MPp78TuJcYLZAmJRpY3wrnW4r3K8YLA4e69fvdvqjWjEaJt3BRoStBd6eenUGD6ZnuHYkp",
  "key42": "475xJbrMACuKx2t67YK5GoQfS9yexVFqSoKcYwGPkTSNUCi5TMorovjJPhWPPqrbbm2yaaNCmLnpHz5vhMLr1S9F",
  "key43": "hFSFrEQVQGaenAugWW9XAqa1APPiAZBbrzgs99is3Ft9WJQp1tEXSLiE2bCTuSRMboDDTkGYP1qgVoN21DGCok8",
  "key44": "46hJ1pFXPt1VZ5zpDWvHe6H1jdmEHQ64jeaREoE4f9PiiYGVf7TNJoJSLP26nmbxtutsjQGZ4ZgyXA96ZYWFAMfN",
  "key45": "CtXw1ZLzStAP7EpAw3tF6UBwmQ7WiyAyo3Mnb5E51zuXQvEiPo5upgPv51bfGhEPoDJUykU34pWfpbSaLBC6DP2"
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
