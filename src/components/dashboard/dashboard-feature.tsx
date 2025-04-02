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
    "3cjzLNmdQoYEUrRgPkcpRygS74Gu5s1gW3nSQTqN4ED4S2PDEHvRBfuuhqnepAjF1cmAiLNCTo8ee5bhHCo7ie8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogFxRqis5Znw8v5Nw7h9GEbApueecUBhcQhrcJmPtiwFEQsqTzJFnxD7RJDtZWHAUZtDeR4HyVpZrx2SvZJsjc3",
  "key1": "2RtMZsj4k8ykETA3s5odeLFXyRpkkYYDtw8X9Unj7nv6aiu7wUaPGHD9YxaS7sTAgrfR321rbBYYVPYZYKS18okf",
  "key2": "4jrXJmn7PzDRi6WBRTdPBH1KkMuAaWvMzetzZJb1g8Giib4UCcLRoaeMj2vE8BCARD5NDeqAJCQ1x9qZgwrpCaHJ",
  "key3": "xNhXi7vbGAc4W82atTSBeCz5YS64cQgw5zChwYyG6xvPp5PvyGesBfeZw5a6QowHiHXGRyNNpvBmh5m8zVsnX75",
  "key4": "4N59SkMhyQ7G2tAgine6pt8iodWSsoVmeAefWpDYv7QVdutPN32EWy1UXbppokxQofJ8men8Z2HieYmi98YNiBES",
  "key5": "YcgyBhCr6FxjFHRU32MZiDTDidZh8GFCqep79jy2bHsUpa1Zhb5DYat33pCwq2XptRi1zdyQ5GqDDHVf8sLgEwP",
  "key6": "5DEDSSjrtj9sHQ5KBynRVYPtWnNPhSdkvsW36pihQVbfoGaVLcMqvV6M684xJ46TMxMRw8xDCTomUNmnnYbN9LqE",
  "key7": "gZVh3mZp32CyvAMXEeHVnHC7eNgEXWn5jsrvc3iVf6ctJtUuhfQKqDLuSpGpWGRmnfAZ9VX8i1dT4jm8aC5Qru9",
  "key8": "4CTg51NFiyoL1PUrLvPZfQ6jEoEuKDTB3HALhUnDKXcn96VQKwVztmyXSJTV3dKL5WsVSXwfrygRJN4HVCoJx9Z1",
  "key9": "4ujTfG7CFgDxZLpGaBdWPGK4WCGYRXfsk4td5Ccw1PjetHBaSSznWyBuyGtKj7AWHNt7ENP7k5JoFanw7Jet3cf4",
  "key10": "4SBpTYrEbznbqM4haZK65LGpWQ8bjR2QRtREXTPvpjiBzc6f1dRJAbWzWWa5kF4aNLcHrxVxazyakjzFr7rbxWx1",
  "key11": "3nvbGqB5opepruHaSjUkb74v3B6pbJUNT1scvLwZ7mNT1Ho544mg54r7BTsMUZQkf82N3QPRncGn6vY1WLFu27RK",
  "key12": "49Kw9G5iG1sETWyQ2XBBNKKPixCmvegM8X4i4gnA8pfK9EVa8RWeTujmR3Yo5qjfcWD43HQ4tNafWFKG9gz8SyHt",
  "key13": "5CZ75PV7c3LXC7FuKtEisBhg44dWdMvevBHqnkG6PY4PtMdD586LwELTrzLEHdvqqWty2u2tEvy7XAHVRJqALx22",
  "key14": "5AxgUpS5jMmzzK676n57pVxCLJwAaRD1QT8L4KBnKt49r1QwgKdLHSEvriFyHdw13CCKdai8mtkSJff3rtKkQcFP",
  "key15": "5xqt1WcMgxvxGVhR56R1UwoZvDECuttLsjUdXkykZW5rCh8ncEHCaqLLNjZs3DQ8uETEmj32bNh1mRaoLCfHHhLH",
  "key16": "4do3eeNprJpi97MkXGJm3DgbNu5mM2wfYZJDCYB9ZiSwg41AdasujSXVqq6vgcoteKxQb2kdbHEMaRcHcyETw61z",
  "key17": "4pGDMLSWjeaGFkUyjFkDQVombSC6MhX6KWjc8rUryEkj3Ru7T1TGc6iSRQZoz4fVHKG6zHqLmtzhhNMbayYude5t",
  "key18": "3fxetF19QMfgCCABvCZmpPEy7eufwy2tQbDFqTuc98mhPnAQA8gj79mgy3Q7riMLXkDAWQmxpaf2tbemqZojpiE6",
  "key19": "5cYZ9zJS5emat8RphaFLJ1drb58Fd3cdg1orfP5ssAtPkvS1SFs41KjPNcw1Uf6nTmSBtbmFSuvX4GEHNtBPdKVg",
  "key20": "4pH6YKEFCXhN2v2gdP1BfLQxVYKD6vPTLsnf86E3gTenSbnsPpRDBKALMGFjr3bNPJbNW2k5yVcSaXEmxfUjNZgH",
  "key21": "5PoGyn8bAJjdH8ioaditMhSKD62PDSSvCXqj53Qvubmwe5aoh3AAnZKwkFV8A62B7gFFZam6LkWQCoNQ3HNtp34M",
  "key22": "3bDaLhFwCKhzSToDE2yK1UCfvUgZHm2jPJttsf6kKHndBXVU1uxA84kpbvt3kRrsdeW1oGb3LAWMtWpky5qsdASn",
  "key23": "3eKZpvRiEsMcG7NvYN2KALPXJ28D59S3QBvxAawzTPagAzXznrDQm5XUJeTcBbdG8exfoMQ5gygydoYJW22FqWXm",
  "key24": "2qS9sum9KVB8mAPooJo7cJfEc5ZzaiTqmtGuE3bWwbcJRLRuCU5i1ybgNf6GYKDE4M8yB5hBxLWLcmKDcPg4NDEs",
  "key25": "67nJnby7oDpWsQV5zdbxPoEzUWqdZbDqUqHeVVJfxR75CZixJjZTmBTXVKqdxSofM3xiLhyhUKzFfMc3ozCpk8xH",
  "key26": "5QVzQ5SqbPJUQVuJ7daHnD3U22UX4Qj3ubmpzV858ookdwuq6AU2KYPeAcogz4BrUXib1t2jhU5fMfPF4K1Tr7Kq",
  "key27": "2P6176dnQBXTMyCJT9hdHKKRcte71WLX9JNeAtia27U29SPPgvxKwDeiy7phijygGYEtiMoTYULZLx33aJE42GaT",
  "key28": "55UEE8H6Np9KvZyAMRiqpuCj8frwQypQfqvQ2pmBZt3JYQ9qY8rHgw4LiV2JzJV45yZifU76QMpfTkdCHhCnEe92",
  "key29": "5ruTcdwRWcFkvRGq2RiAdKiJcYixBn5ZqrzHwiUH6KodxuGqCyzqCLx21d6EedXX9ioBpWdt49REjsmZintcaMrH",
  "key30": "4AxKcvLWdowyiHS6tC2fw33gErb1KUdM8imjd8yukHdPTSreSSKPbVAgJdXy3BHEtTxQcwe596ezyZE1DS7QjhK2",
  "key31": "3ruLgtJh4XUigTxXPC4aGCACuRrhkk253VjW82gHaczg4wXDbgLqTMX76Yif4NF5fJpcz14SaV6yHe6Y8XiiFn54",
  "key32": "4VMixxb3Yn5NL6cYgZtztoUE8oJ3dEaK95c6g5gss8jgJ4UKRu9k8EH4ivK1Z53T2MtEWpUKeyvEKAnmhgzxFT1W",
  "key33": "7QbGXReBPcG8NR8fZuCPTaarKyPxnb2X25HDb3V7BZ7VzDox44Vzo29TVM7S4eabD62Zx3G3aXjPX7kDfxR1z4f",
  "key34": "9PaQLXNGDTvtDGKR86XuBGZJPzV2nY1FMdAFmdw31b5dbeKyecPmCnnuwtZ2MB5mehuRKHmNCkDQXkh5AaK5wrs",
  "key35": "4nKEoXBPjR4rbkezrP4dFNPwZo3bVLu2rShhjz5f1TChc1abaom7xDWJkcN8NjtsJDNZdt69xg1AX1efeC54TzFn",
  "key36": "2xJ9CzBasD2vrFGXifpdHPjc2GbZmQwwPGS1hWoTjTwNVvxLPifeZFFQGoCEjM87vKMRiNcswfz9UwgvJT8Sfyun",
  "key37": "2bU6U3gBxJjHzwaNqdTV7RM13HjHDv4A9Fqkq5RPotTVDgoLnoxEteNc4FCfqGjPYrKprzq3qVmzThF7F5FKjbLS",
  "key38": "4qNVRgMnjvdGX9oH2iix1YKekiwcq8TWJeW5Ddc6AuaJo3Y5tGiLtTo24Qp5WHKX843wqUi5ZcDHSaxvKD2iaZ4E",
  "key39": "5HuypXtyH5YmVy9hjAybJemvorsMfhEFFMULX3QcRVynMdmsmEzqkC6aZdgBFGdcDeQZnFbJPpTdLvPSfVGkRVoa",
  "key40": "2hUGQmWVG4bp159V4aMHGMU86mtkNP4kZvU19f4zmMY96MfAD8sqFcTU2Uns79pEzqhWrHDh4W17yq5YGCWEihdp",
  "key41": "Y1L7DgpyBfFX1yCMiavTTi6d5SRvFAxmDVw7zTVGgj9nPgEvCfoVr3CKyS8dsR7ZheALMPKXP9CQ1no9ZUkz27P",
  "key42": "554nh28gpkbhz2CcH5QxChvi214uN2NPAS714Vq5itgNiHZwHsfHM2F6WgYxKUSuqBy2y1w6SLYVBA6ce4p5AooE",
  "key43": "5otY1rNdTHe2RnL3eMQRCPbkrG7G12WSS7yRXNE2VAnZ4xBji7CjUcNYBM47wFKMyW3Cy7PL1GMJdydh49wwWRq3",
  "key44": "mgvqSuxuKxXkWq8CSFwpoRm5U5sSekp1facNddiXkoE6svyk6aCnjEj7ZzRXtFr7XZVYnJQQtKjkV1FjT6J6tNc"
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
