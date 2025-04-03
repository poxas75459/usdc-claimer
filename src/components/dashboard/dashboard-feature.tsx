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
    "3opedqzNnTrTFY9oK7zMqpv74DagdfSU27MZh64VHG8C1eSaQ2Xr16dAikspcvKUeg3G9GbFDm44K8zUE3cVY17P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mLjNUUny8mQSBus7VXSeNicUj2jYeNkWtSwnqavr2n1LvJxA7PPYdkK14dTCw9zFcU9wcXtT86vhswEh4tXSowj",
  "key1": "vvwRC7N7wRu5ouD5wkAVPUSPEmvrtTC8qeK95QuZ1frJeTVp9jMkQcwfs7JhfEbXT4s72am2E6XV1zSSo4iNyvz",
  "key2": "5g92PwHUBXEcZkoPauHT1iNh7gCnVptG16vW4k2yAVdTHpjMzcdGSKbcxhwrRpkChwxTYKMvYipN8emhHp6bu7Fr",
  "key3": "5AC5iZS1xRQ88WFZZTj5kPkPmyLY5kE5eh7fZqu4rRSkXosYYE4je9oNYMHgPVfBPBzVpf3tWfAUu4zLXufJtxNx",
  "key4": "5cKxtsSHb7ctfP9ZKMHG2Kuz7eN2cneiUtZfaQ4sQzJrV6D3B2Ns4z9m1DWQzyvYRXZa2MysHmVXzLC6yhVpXzP1",
  "key5": "3kxqv9wySfBY2Knz6hMDW5HisZ1BkM6k3UgC4ucrD5VQ7omhaDwsBVmn1PHhytKiHiYxWuiD8PcxWmg7YKcq2DxG",
  "key6": "21d92RNtdgoyjkGmanhJhEyyu2rsPKNV1hoUsGBG1K1JApGUihTgR8xL8zwoXd73vWwPcuT6mEZTYy5ycUK24wEj",
  "key7": "2tvDnePsyGVghgPhvJdmedkLgQocTSnZjGYY9JjZJnxkuKNKEqyMcLjQ4w3opUit3Y2z7HQb217CsgMLwZ1iVX4c",
  "key8": "5XfBwr5ZkPT5p294r8hZGh9Xpan4gG8YJCzRxfJ216qK2uoFhFcNq2ARCXf5GfK9kZGDMiNzxjZFUwNBod4UoJvq",
  "key9": "2JpuoNRKLEc63dL2H9gKDocaMBwhj3TGXGVpS35hSDxvY6aohNtWFnW9GviHQAnb4dq7y3nPu6weKbtbH9zRx4UE",
  "key10": "4TSV4x9MgT6XR8pbL3KhjdwZaaTDB5KMfum4vueQY4okb7paxmoUBUi56JtT9HVXFZUTmn34gnULvbnGJHvaJcrv",
  "key11": "4A19WkfH4SztfAoUi5jaa59eQYtb3PorBaRZtDZghdAUK2A2wJpoz29zbECYARdjdLESvvSSjLMKF3KCMA614S6d",
  "key12": "5rDL8vDqeoDZNwEY775QVPj7QYqNmLW6ttfhpDWqPDk2ERHgFmR39oV55FZWomqeDWw9LGLacRr2azcUZzYH4iNg",
  "key13": "RcT9VoCZpMVNgZ3tVC5wQKmSFH5T2DJnf74a9NuEyQuJXmimhMJdmSrbQCrSQKkpLWHSRN5iiDFtmBgcgiEa1Ci",
  "key14": "5zAD3Q8WnQg5a9bic5AJhvoaWAZgn4TDdxvjhwAJuQ5vuWbDfK5hnXAB5j9cceQRxTDxGyExi9a7v9ddyaDzw1zJ",
  "key15": "25rpqZzVn2GQo5jnsukQiSAgNHFsamZecm1zZhcQyoVvDTbHPN1DFqUZej7X7ua2V94bmWurGahFNwAgqSRCyjEP",
  "key16": "3G336Yp1nMRAFy7avWatpqtCWGmw9NrRRNAYCkPTP7Xsr3yLwG3jS9B4DSMvNyaKu88KwZDtM8VRFqot9zSHB88G",
  "key17": "5vhSUuyZiy4dmt4CRAApBB4yU99826U3zYZ3C6M2ZKwGeEdUwR176VwXXTLNu757afoLRQHjB81prnqirNkB7QKi",
  "key18": "2GCZgeNBjeGbRVtVMwUn6DEUnZqgyJXoAZdATjGHpUpKPY6cUcyB1SsDHZ4S7yPz2CpAQik56hm53RxsYQzfTT62",
  "key19": "67pPGRArbKpNUc2o1J3sDwHjRuXiD1uygLrSmDv9Q25KyShDQfGDCunSioKvxgMKyVJyixnmbkDgFg7Nsrzu2NtX",
  "key20": "3jwssnYBg8ehbvwHuYjGoreKT2Rs2wheinE3VurW1oYJaie5FEw2hsWin5Zp5yonQQKprWiwhyTAKFDTZfQnXFjt",
  "key21": "zeQ979yno37pAEX1hNXTKtpNrARZY8LRcR9Ex5TYvbPZGjNw2tGrFnNLLGvsdGgtdY7gbQrWMfQSpNrta1KxLdC",
  "key22": "bH7Vwbb9gkg64SvjH3FbpjLmyLF1ZY3ae2u7ygNGu1gpvQSDq9RKxGHyqEaJxXv5w7vYiUvfHnqBPk6yvXUmVx7",
  "key23": "2L61Hm5J2gB5k1G5yYNXQF2WzpgfaF3XCtP2pYZaqG9GKYoBC617CPykN1r9jf5Uf3V6mfgaVdBWJwJuNbH5owHS",
  "key24": "2pSe7ueupVCTJsBacX9dBoTwW9VVMC8Wv9ncsFXpoQxbXaH69Mn3upZap3xURcqaNp6CtAfSBc9R7tMWr6Dw3R6X",
  "key25": "5bMFk6KuYgNGKuMuFuDevXLNSLJUrWQTaXgouQ821y3foBRjs2BAnx36UwBoQpWGB1JwnVw9NE7ByLWGy9gHaAX1",
  "key26": "5MHvTBqq4Gscmpxz8RDboi58DBHxeQyf6qb7JRFYY4MYem2j3HRsAf4XMbSw1oCv9pLz4p7ETNeJRtUSj53vqmoY",
  "key27": "2QE5qwjGbqSk4XRV475raieZnNowAmKijjfA3gppsEsdLgand3cBLGiZuCPsqogzpdWBbgfNETbwbGMy7ZNp28i8",
  "key28": "3tDkZUvgNMERWW5wcR3ndeSGywUanZJP48gB4XsoaZXqGfKDuXNuQfAiS5mxbFXaBzeg94kJxDVyvMbwyKktpxio",
  "key29": "2FiPE6e51W4t5AMuKSYJYgG1MBwf5YmUHvLum1vHEFrng35ht5vgMytCA2cwjcLwKDdRzTLUwvXp3GvUGBtRbVHv",
  "key30": "4bjJ66dYBRDw2W8pZ7DabBUi7eDuMnZPHkJHFtCw8nFWtmxMmeTehJro3NXMBPkk6QkWw2sh7bfcYQv4VEwi84ee",
  "key31": "3eA53hGWxJNxSXo4fMkKAdGvJ7pbKu3xnikpCnLEVZhA6yjJChn7f6mXHZbRbQUrpz1agDA7KUuE167JvE2vBkYL",
  "key32": "237E1AdXKXx7LMmeMHjGHf3WUrWXkFv3GT5kbFGAymFp5D8abxw9h5F3M1U1MY8BL9bBwZYscTZfTEoFiLHMNma7",
  "key33": "4Y2DLM2SfGo3A5YHJwz9qco6XFMoRYpreaPTBchaXYCj9birGgFfvzoB13X2yFXSoR8qwmdt7t3qaBg9muF81VUV",
  "key34": "kEWnbquASfYLv7VAVi2ihP5u3P5y3g57wngS5efVVKVnTA5yqvw6fxLa22gAKRxuFArFM7Q7Xo4T39He2e5oSgM",
  "key35": "sm1ZEtdj9diAS2y4r82PDU1ZeWJ18B6PcVZDGnCMCTrPGpz2v8Ytz768TM8Cjs6Tnqv7L7Av6jT1U16EoPtPZbE",
  "key36": "5qVfaXJaKoUwVDmtt5jQS7T947NxjN8BVgbFZcZoJRRWTYGoBrXbZ9M49kvCzddw2Gta8YWmyQngjaP95aYErxX",
  "key37": "23v9qam3sNHnXaB71xZ3UjW9UHf4imPpTW2qSz59qcsxSjMa2NkLtWyt9gxjsGqKG8eDzWKzzMmxxtU5mBtvGAma",
  "key38": "3VTHkxxKVVfkRwTRpwiXtPbRJd6ejVXQPxeEWKsfAao41RmnYEWgbjK7hXnDiNdJk9U8UjVn6hK9aPSFHBdqJ7dy",
  "key39": "2SaLjCQ8N9KyqRX4iRYgNzjhbrxzZ2Jy6kHVH9gZpAGjHMcfZhSmzYiX89AJBoWjJoykqTSh1TVpRrpeEum28tjj",
  "key40": "3aVCSwxTzQmN4RxxNWHpfnZFHLmsJg1ELtqnaEJnq2b8wSpehpZdv2ivHNkpGuDdzTikfWrBRCwprQBUY2WZzUnL",
  "key41": "5SohfiKJSVVUnwCfHbB3Cjku89Uw2wktbtB7T5ZVDczqjV7uYdLoEdDcd7X4axzdfW3BbsVnjw4yW2kEYL4Gd7wc",
  "key42": "WLiGA7fiHWAuhz8giKPMZBNeDLLDyzJs59683NmCjMTCNCDJe4344Yso5d4RBEkEt4QURqzqAQFo732X5vXMTyE",
  "key43": "3k4MS19PYKtrRBLaV87srXwC4zPJp2SFsGwRtC4yuxwtoAVGULGfD9kmFnWyXCkr62CDjLnjw8DF8XAaqjmG52g7"
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
