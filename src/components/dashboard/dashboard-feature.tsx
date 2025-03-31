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
    "5A4HKXnJSw3oLfL8V5MdxuVYMjhn3ZZAnwRgmns4mgvcots7WNjaYhgCKDDKt1jCncz4hNAkRgLRDRkrsKRkVSAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPyJXruTsDLK9BMgP6hpFvXSRWmMXnVQ4yZTRS5RQyxMUUqK2K1sS99UmhJn4riCQpwbLHP5wcUWyj3uYib63T",
  "key1": "sGL7781YLktRtEeV4tprMFAPLZzExU5a9E1KEom9cLLc4LejhYtJuMzi5mgzQYfZ2w9WooSWoNcyiE7bbt6BwuJ",
  "key2": "5iCJ2zJo7shxHZrLR4Cz9MCZ8WaCY4m2YN7zeQXqmMrDmBJZQZx3MvBengMDyPJPWndFB4cWV29gPKfJRKDheVj1",
  "key3": "4gjn9Yu7FBeLGrUTbUsAHgL1vsEy3N4y2fvLFfH7pedqUVUNW1bjcvnhUrPoUtKdLdsws7HqvEPDek73ZRpNTty1",
  "key4": "2gc1pKSiZvZTeA6zJTPHPRYEX8pFyKX72C1P2ca5B8KaopVLck5bRPUW9QbkxdsYvNVqu33HT4pRNFfzVvtsqE9w",
  "key5": "2jfbE51t3LPLjWK7JJpPre1uJWFqRwJ7w5ayxiLxuw56wBmePwpbTX7Aa6BsDTGMdQJ1DBwBu4dzEJ13D3YWTPbG",
  "key6": "uFYDAtViN6ho3wL6we3NWAAW5hpSU9KJqNeM889ETY67zMGHEqeUJCmFErRYv1guKwngzNR6DVjaGxVMfQBxDWV",
  "key7": "2zCZ8ep1sYeSCFHzyu6tqRYJepeGvHv9kTrw41nEsZwChNTXQyFHDGhWwC571bhZAUFnWGpwy5hH4RzsEQeoZ4F8",
  "key8": "2mTSLLxtKKVFNxZ1PaigVhb3aJj3tJ4n6rrgGdrTUxNGxZ6ARLbnKRNTrZphXcqudgkJpyBfgzJ9dPaifLLoWNWT",
  "key9": "5ox24wPJXs9qgc6g3VnZEDnZaP3QoWAJCBHuVyUP3S2V1hzU4gGZ9NmDnpdcSBWNiEQNupmfV15LveRwWSNmN8Ja",
  "key10": "4HDy7cxe5Kw6AMwomCPZ1eQp5PEvmQ22RRzVNsxKXA8kGSaf2aEJs5S8LLtL7pVdDq2GnGKkhE9xM6SYHT2f7LLU",
  "key11": "2UVmfyfPghJSBcJLrRNx7126JxKJ5DwF5mxauFGUZ4WfFgeowVat6DXAqUoh8B4eqThMUMyWVDU5MEbDiHhu9Epx",
  "key12": "2qznNfhrGWcypyX4AGe82ZiiuZCQKAsjt7TC4Ai2bnBsrB7sd8xUAcKjumCUAmbpfZLq2b5QQQdNXsMsR6ctRg8F",
  "key13": "3dmoejDFkZ5BAihTxcNtYJsYvpNxhA2yhPcaR6LUecvbx1dQzMr2MUTvWR3MnUJrFxMnGsNQ91Ed5otLPEYQ1EBv",
  "key14": "59a4YecZtWjnXG7AWRxC7KFqg1Q2jBUqcdAabABtgCnZNfBFwuaPTpSH9iAQDG19nmjYszqGvSUm4QEqV4cRrTRL",
  "key15": "4Yk7Vz5sKSDMQ1gd4rn9MZaR13UQo8amYHAw7SnsohpVQBnoBspw3tZCWEFkaoKPWUBPQFT5VWTkrex9BgCoaoqc",
  "key16": "4wV1bvtq8RTFYKPgiK5WkMu98Hdy7e9Jj367aP3fo9XB1CximzoFgyPyD25k7CeBih94CtPe5m9GUVqnbd6iwFgU",
  "key17": "5GH8SLE9bJQ7xtXdbiCu1n2cm84GvykELyYhxakpZ4eSRwW5VCGW9ZQHzh1Carv7EiCFsZvuFWvscbaAaQbxP8L5",
  "key18": "53jym2b4Zaw4PefuHKZBCUMBcjy9f7gHo928FTXUPj8f14DhX3wRfwyva1G5UhvhsixwND7bBoWpM5YveHYFRuay",
  "key19": "3JADidaCb6Xj5bPZ65dp7ggXkJwsF39f2xvsjetAcKvqQXMyrU6f7UB3VvM5fce5rxu9xqPgP5mQm427MgjorrKX",
  "key20": "5aQpFVJZ6J8HdYonjbYypogbhrdhc528e42XhNrmfDvHVDde3WJ1pKW7bSUAziUBghvC4iMKvVJkQx9PJ1HjC7Tg",
  "key21": "h3HkUWB1FMp8oxoMiXpE8V8mNNcqSjPtgEUSHJwuSYR2mSdqiFcGT5YAe9XGqL75W3cjjCg8tZk49v7952G8c5V",
  "key22": "5hNUQ7n3wYsKBsAyZZXQ7JvvKmGDKBFoJmQgvyU88LHU9tnzP6yADFuEGDuk8Tvc5XHtfKvzZ336HhPXjeijNHkg",
  "key23": "3FG9fRz96guMXANAaHVo1jRdyE3FrV9xYKMVB3x8MTP44k1C5HUMwZKMNQTBb3J1YqNd7uZET1sm4arwt9gTwnWh",
  "key24": "kpiTmQxoTwaHcfyvw2EfJ1afzcqfmskGdAEh7ksmsCNvwWJZJ8gmPhe1p9K96jUCfUEoCuYeyhyyMd1sKrDifAs",
  "key25": "59HVo35jPWfyrhR7MwQ78x9TVwZ9NYPRYwup3u7XFxDiEvVz3XS4WR43XxQnitkgc3XoNqVN2FX8LtnXFtuGSNJm",
  "key26": "ARnGtfD4RWk8a35J899MsKRq1ZvTZxsVkMjuLchGQrK5NwcYCUQxsUPwWRCKau2hUiLkz9epeK5Z1PU1LrArJps",
  "key27": "41gYGwDoTqEwBoMpuwfcL7U94kyGvWPmxtdrZwm1AUFsMXhXryqAvzZiRrSxFFzUG42nUUT1Qg2FkLeTxhnZS7NN",
  "key28": "56HX66KeCPnFC2YNb7LNBDCVTpwCVJj3EwBxEyFfAr3TG6yNTgtw5Eb6bq3rKBhXYVDWzKRf14VHMxy2Hr4t1kTs",
  "key29": "4JRzKmivsmZnLTykTnJ3ZSmfNDk5FJVeVThK1GVj7BWhQhZ3XCRYgsri8d8xdtF8YG9RDoTzRAsSncRVkgUXxmyw",
  "key30": "DRNyjfL9xs2jgwpJakw9eZnD5kJxNbKHBuLBgBgSFgSPrpEy2bnepbdRF8qUXzcMes7Rk5ycj7npWy7zJefZRkX",
  "key31": "619vP1fverQtAV2JgfFvXYK4S3aEyt6yPEXBRBWDen2sYPXS4q9w6VqauwxWtvPjeezoWcodELtSWwh9dDNGUHXf",
  "key32": "33jvWQ5Y5GomhnYyXWQi5ECGdcrFFjeTYiTn479vUGPsCKmD3rzcwNMXwKxaimBgPPhkspV4pJfqXJEXbmgwYMFK",
  "key33": "4ijLgGMENE4yviDQokYhFEooAAFNfXTkAW2egFtUPP5y7LtyG3ekvjedSksiiZgFWTRdgVX5ZJP1MNNxHNWRwFiz",
  "key34": "4snHhNcnokhbnCpzjj9nA5rWvEit1Z5kuEAQn2Ua9rt3cB5oUUC7RxudcwCDVRavsBmvnSW6Ks8x5fa2kintqcxf",
  "key35": "353bZuPX2pfrtEFiteQ84aXftpUmHJuF6NBPEYTB2FrkyMsymot2mxYghznEGCBKjyUFDUcmeWRfxU1QD9D6P45P",
  "key36": "5L9zLSZJ9a5ZDUzJGfaZvoWMymX8KnxrxwrHYUoKp3gZCg7439JWeRBbUC2PNfiU2pj7yBsY8FwaD4QxjMpda8av",
  "key37": "5huHvZNaabd3BwruoVnuzhkRFzNc76PN6kHMzrKVTnfWZ1Uzit9Xp8RmztLfGe1Fi5HDaj8wFXu2RZk1fZqGqTW4",
  "key38": "3oNPWdP1ZiUW8yCyQNM1ZHboB6XLrqohPS6ZhBgzb6RveSBqNAP1SMf6xaWPzKNm8zd4pGGFLRGMk2pd8yXx5vJR"
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
