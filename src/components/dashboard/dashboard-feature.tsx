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
    "3YTaBUrCtD8Yz2w7eEKho9vK3owTBQ2hBncyyN9NYZF9EnwiHW3n8uRwUEzDHwYEMts18DyAD7XEnfCAYbNttzwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61UAh1pUn8nj2t3Lhqj4UWGZaCv7rgZh3vHT5vfN34gNUpUBc2BxuDGgg79kbunDVr5JyX2bfvbAgig3Rup2vNax",
  "key1": "4QwGPqrUkBtZp3j3M6DVvXV6Jb24F479pgVtwAqXKD3ZMbe4asAAL9f3TfVv9tyzfjkiacXTN2F7Z9rS7AAhSuRf",
  "key2": "22VJepNZMhnobJuA5ZJRdYfUrJfQUfRvXapfs1eDk3zGUoVSi5UyhaYDHabvF5yZGCiaEQuYtmNA8rUTBC92Eq6T",
  "key3": "4qWHyBmqqyqoJcqPRm9CiMB4XUaktg5ewUVXnnp97dNs9myjXt25oVKj7ENtSxDA6fGXQdM8PCqYYw72LgxHw99s",
  "key4": "5Rtg2CTkqJt2RmSB7N4UAWVEQdu6yFdAZq28NaEy9PtD8b8y3AtUGxXMtaZ9squXSDW6HNffiEQUre8jTB2A8Cxq",
  "key5": "4zdZPSVcUu8ukWgfEZnXvHrhyh1S7Bxj6EksH8T5oiPUB2Rb7g3Nhmewe7f2WT1gZ2FsuQfiatDwAMj24ervXLju",
  "key6": "31cNKpMvMXBfDxVdKKe7RqZL34w3RHXFtti9iE5DLcH6jHMCnXZcKLLegH6Qn3uYSTuyCNhdNMdkU86WimruoMnp",
  "key7": "3r37n77CsJWBUt4dg6HzjBiEg7fyoYDwpTQGcbsMbHkLwjon1S4Fee25vpEe5cP2wWoNZCHv4ot9gQ1HAScqcebJ",
  "key8": "2LuYUaGvrfhSNpY87zssex2QpAWW4E3Xn1YuVostEhqVAuywUZ9TRQaBUCYWehj3r2Cw8bx9vYt5QuvtuaPgyM3C",
  "key9": "FZDcKMRWstREYUrPKYYba7EPVife9YhVqBJ4jc4pNNAC6uGU7eypG5efQ7smuTX1YzefBAqk5Lk67H5ZfNc8FxL",
  "key10": "5yqdgbtuNRQu5hqfc4H3vofUeebqHW5fYiACpREimFA5VNh4ELg96d99PraJfrtnS2CAytWTaLDLiU1RHDMbsEF2",
  "key11": "3d63JwinCCHCTwaeeu9EGHfgHb4DHRvFVKaPnLjiGZn6n5snRqZvL6g4RiLAmiGn7LAdbKSke6BaSK1oh7KtXeAD",
  "key12": "4SSvX1SWERgrkbske5zucL9FwJMYTYXJLcuqjNA9LCP5h26rZdeoFvaWVnrwRSY5ThSSEL2xPydinUFXGHAorFXM",
  "key13": "3ek7aCFF5kbVmjbt4cJA8tDG2q3rNLUU7bLPCFnrYn96HcHhVGW6qUsmjonitBmmPvMvc9iuEhGukMRqvykxacwB",
  "key14": "KGEC8KBrj4YzpMq1Zoo968nP36FBMvzBrFyAPpsGBks2gDbWEtiT9iLRVX6fJajqjUB6qmKxcMR1q5cwRrK2LTd",
  "key15": "5vBhwM1iNL3PyyqAnHPMLdWMSYBkGPFCMoXGZ638qHZYK3bU6EHXTuXCZPrRHH8gfDcQAjNQdWgRcR1MTsFVCJgX",
  "key16": "2RxcaqEC14Lz4oAYDj2FqteMvKMLHgSn59311HXQdYo67sgq4bX7dzRqoGxCrnDxZRRefZfYh2dP7a3wCdgxuGrG",
  "key17": "44DYWGSRRzr7pSqJnVN4AykRiXh838xu1vdf8VmJDeVCZuUKHiDndADgm3WAyKQ3imgGGPhw2QdpMGuKssq4jUyi",
  "key18": "3HcUooAJaVQPzfgPHswPntZ8jjmbuuEbqMNDiSYoVtBjLe1phfbxxXiRdJMA5pnj6MQFVo7xj2Qc7rdFGYfKtykf",
  "key19": "JscKCqEsVbB65pjHuSiScm4ycuaHEEGmyXrd4QMG4pnvAdREeQN4Vasqc4khiE1K9yDtFiyUeXSqpBbqT5CTJdK",
  "key20": "3roKUEY9KqLM8FNtCkDWf1K3KCXXT7fw6aX1CYKmbNWKpMPdxnZ4GNaLrM9LvhsAF8TURuBMYm5dm4WE3S5YghvJ",
  "key21": "3bHAnSFDTKdG2StFLY3LgvgwnAYe6ENU6YhVtiNhoM1PqeBgnr71PsfntDr6TwswU7dVHcyA1RVn7RnT3pCMbCUk",
  "key22": "TpMhDyQRCJjnjTsrYZHMw89eaVmNSt6d4oFcxiHdydxhXNHoFQHXuGpdF2xWHpY7VBPtbmj4LBxnrKEJ1i2F927",
  "key23": "5xZcFvyNmuW9cQ5rgyCN73J1qFMRTSMm356PySFnmgCMxvSZRJXgjLuMAt9MqHN6rWqwiqAADQjbTFWzuzGiDsKY",
  "key24": "3F2dtRGCvSFFBeijKHdmXwREipduU7QvSo1DbLkRHg6KegkKh9884KVcCxGPzUhwQtYhLZ9hJgfQqqBNx3z2D4Ta",
  "key25": "4cwLHsfTN7sib8QYzTTKRYvRwGhCxuUt81sS4rb4tGHha7fvWzFyHv2bw5qddNGw5dqRQ7pmcMMtCz7gU83jbtjt",
  "key26": "3JNjneQWpBupFdyuzMTrBfgdpSKJ3U2f9pKVh5yYhNJ1WT3bcYtFwWURRZEtGUYMWPhSSbGrkFtXWTBsbgYRdKsf",
  "key27": "37HFXhgbd7p2oSJR1X7RmCgunYHhjVnXeabSoGq13db4eQ9ARbYiFxStTLCxx1GyzjeKo6yVZ1SNVcR2enmnRzdN",
  "key28": "5qwzUkxZvLdQJ5TBFn94jWfgNkeqorvbL677VZDTjTZTVMppruv5UG9ut45zU3H4uRLS1ZA9iAcbbsz5ckvgXHZc",
  "key29": "3NzMBqdfq7n1Vb5BmdLF24ND5e7J81FNPonCax91dVJWiwpdphCuEqrmgseN8ipfzwHFbCYNFVDUn5xDXkJw197L"
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
