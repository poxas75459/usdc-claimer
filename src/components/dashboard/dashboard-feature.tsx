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
    "4QX8SXDgfXr4Y11bSuuAExoH9koYykLkiehW1B2tiFJGTZvrjQiYLaddqeJiNQNHWCwRfEoRVx2Sjekeybuy7kgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vZTuZ7ydvKeB8LZHnCz7xpbY6yrBqpdgSmB3Yn8q7jodSdwzfAWRYDGK12Ah8ytupZgyBMYDv6ZHuHZefYhQc2z",
  "key1": "2SjWsVy56jkbgmKdJULABgfj5ZJmqZG4GU9vGmBzVzhZ2hthv9jNZXQ7ZqpWRyotW5wzXNJQiCe7nZRr4VngxwWK",
  "key2": "Pa8ZMu8LECAPhcVuQnz7XnyEgmKJK3naZA9U5nmGpFCjNtc9vDcysANiKiABEwtb46SYA91qbtmheKRHgf6NDNi",
  "key3": "3BcVk9tzSzQZp5bCaadBjWpYhejUL4hsCrZmosCeVozfLpbsbPcXQbv53eVwa37pgX4mtoSXnJdr1LVt5744UMmD",
  "key4": "4wiKDn4fCnEFuwt2yF4ZQkwqEckkCTjkg276ogjFKEsuU5Hp8nvgcVcVEr8Ls73qUqoC7bYHcB8F683Uog2yHBGo",
  "key5": "2GMfiPDC5L8Box9tjKygnCzqCTHstuqhpqjp8AVXHyTpie2CCTBQvvkR1qa878DHA974Wu7mDLbnNGYVGLqYcM5v",
  "key6": "32E7YRkbrTJ7ZQ3Q4S4yLaadSdr1XVgUmwtG2SypjtP9Vr13x4ocf61xRozvkTxN4PzFngtRN7fMyKNn6ev63Buz",
  "key7": "62HDzPrd6EJva26b3GL97TDNjrxsYLyNJ1yjYDnhQPEqWnFkeGs3BuWCKYnc5pDFnDUUt5259EqdBPA8JggGvCRB",
  "key8": "5Tq4ULRgQphseEUMqhYGWo4NetY3Qwb1zkHw3cLVfnwCUy2Xsxsdx2BYfyWwt3ZsfS8wv6yXXieE2bBTE3Y44ksB",
  "key9": "GXy3m8grbhXCJZ6qwWfMUXkpFraDSLEQ9WMvQHCZK2rkvrX8SR6BeUCUk8MeCVrZZXdxfBbXspWJ66vokxNQtNX",
  "key10": "8e8PwmKWdMQjdWeBsxwy4RN27vEoQa6cJNzs5Uq285MkMZ4KVJ5aE5aMe7A2Kh4xWkjwFCjQs8qhc1K2BbkQjhK",
  "key11": "n5yZShkdGdL5w1e7KAkJxZTsCPjVYinysk8n2qcBW8dkXFdukHHHT6xBmGk5D8Atmn5TkXUAQRkyvVQVEPheXaM",
  "key12": "5MGqkjw2Vgh2RzrkSPETTHaMCVPDKkVckt9dJeepNn4LAKTuThVvDEJbMqJxH5okz7KeVBqjBLJyRmbfyTsNuNnw",
  "key13": "uqSM6NAPrdfpDRM8mXtp4xjgULpcAiP6NjYxnDrWhJZtyDsVZ83m1sYwHg8WByYJghGPsj9K7NcJk8LNUmtgepr",
  "key14": "2vcsUDC5uGnuigbKJnARZFXADeC2Wyrwof9Yrdw59J9zDAz1QYQC5ZjBUuoB1xKt5EEWV88PGhg8SNm6LCd6v9kv",
  "key15": "4dwpY19PpaRHZkVnu6jMJpB33cCaWanWbpy41jvwc3Lu2mAGtXEJ3BwJtkfUYh9CQxS8EXchSpVSFfXNyU6drUHk",
  "key16": "42PefYmDzYNhSppa4SaqBT5cDgBhmoDzgPJPLuuy4Sh7oS66hkaeLSgsM6pY4zzuJ7q6ueMNrD2PFJjCeRqh9Bk7",
  "key17": "4Fa8x4UJZqTaiofsvXqmVauhuYsxRStQhzyuw4LC9f9S7SZYLQDMJXAHXgRYKrETBzfvMdnsYrU1u7yzyA3EzMfK",
  "key18": "Jt61YxeD9GWTHVspLpDohrz3wJ9Fz5keM6VzmSHkBXTrVaWWYZrLenhEmCCAMLmtkP5ntQnCW37i1kFsn4UCep3",
  "key19": "3SXVx4uzyeGH7sxcqBcSu7LviMqWiZqf1fVm8xSizRnBKfjDiGYzLLvmMZrDqb55JGiXHrPGxt8ffR71fuk6aLPL",
  "key20": "2dNSpg13mJ9X13QdGD5SP4g4mqDc8pWF25VfYxsrXV2MSdZFUEgEWyVsNgYS12az8YhVHmg9TG3UHPGxZNwh6cUP",
  "key21": "4Cfkj2RJNuVQ9eHqUvktTrKhinJg33CkwRQvBi4SUjZ4Qr8gtb9uZCFQYYNSVa1hifcroJKpZoGr8aCbeotwqPCE",
  "key22": "5K12STvEBdCkeeegZBjHxvDhouZm3ERMhwSh5uoFacgWj9i1ULgMF7ZLhdTB5L4rL9FpZZxdT8b3W24LBEtsSUMJ",
  "key23": "1eFmm3rx3bbunGtqNZpZ4PsapjXRFnLyWGeVMLG1izwFBjvHcNWt7A9KjGNRWcyFqKk4tJrLErNEy7TY4vhByNp",
  "key24": "Bk6UdWxWzRSpxBtUd3P41swFeEJaMNRifXcgNbJ6JBDBXRhjV55vhSgVZbcm5UC8ZYrhd9BXf6fRAbNEb3ijUeF",
  "key25": "23jGjGVbXVX3yf9FZFW2dho26n4urjW7vW8xu3KSwbWCVae51v3Fg6ZZWMQAb95RR9vRoj2scxQhJ3CYxYH4uxDA",
  "key26": "CcauwCNxvEDE3ZaihSKne6gYBXSGVzLqq1efH5DkdY6UGWascNmb5EpqxTRBYszNXhSEdgQLxYoPME5LTUsfBRP",
  "key27": "4YhZP8L4Kxf1Fyk8LjSJGz1cNn1WwqXoKckWgWuVLyaENs5kocdNB8Tkrdcb5Jk9ypMa9g6QXxNGTYFW58VzZC2w",
  "key28": "44ULcZgUWMpDrZ77PuwUEi7EB39yo5FdS7mrMQ6XCQ5wMjyR7okW1M4nU5ZiqTDBrmwp6NWRct1NksJMQzNnXLEs",
  "key29": "2L4YLoTYVT6ysQMb9TgY5fMeiV9e7azZw2RiMjRn1NraRjB4wHMgmzNUY9RVNJCEmaLkfgaEYmgwrxXErkYdBLct",
  "key30": "vREcpR7JQhgw5BhXQSpBPPiTsC25tuQyk4vaVHeDsbeFXXYogzs2k1dtZBi3MrByWAp44QLL3QHDGYdxt9bPfVD",
  "key31": "66RSppUTNJESNKAMCHvuoMgmuKm9ZDdzPSy3m5FRD1i1eXDAGiN56ZFE5cYMJ7Az56BbskXfn1rRAuXf18KG4X7e",
  "key32": "5atRhvHfAJAMbTYnXrZa47qhApKjYntSLQSuyDsC3zQWEd9CPoRQhwaHr8SzZfvQ2KXU1sJj4DG6geQGvF5nrf6x",
  "key33": "215ZZdaZf98wTS3YBeuSSQfDXY2Q7YSUgSTd3XFPCtxryEsLJVqUaZAYfQg89Z9ieXYjceS6KQCUmCt3oyztoFhY",
  "key34": "5xPQgTNi4EZ2t254bo66zFZQzjeAoijMmfPRnLts35CehnmbiPqnCpeV8E8qwPXHUdukafxeoh5xH19sCa5prjtx",
  "key35": "4PNjph8QmfhqXm9rHswNvEoNwNFpTyt3BJ8C9mDXNP6UW428fjwesQXTZ5qXhKLRU6h8brei4tYqwo5b8ViruQfr",
  "key36": "23k3xD4nCNFhhg7NvZjUd3KgWGi7jiSbuKR9qeeGkJTBrDz9tyUhVRepQBhG1RfZhgtJqgx1jpMwU1YCZhWvfHmK",
  "key37": "4W1uNGLxe2L5xcBZRNbqgqmh3brEh8zmtU4JLTfcDMkNsPHc5CUuFE64oBJiPJ5Yq9pbotWQCSvpomkCdpEVNnSj",
  "key38": "5kgzJpxfaFsSPy1wgdnGMqtAdtdwRPLYTSYtxfPJSBDSBXeJTitqLQDzuksDQuLCrybk4W81UBJeiFCStUdnURFH",
  "key39": "KuSJLUq51s1vUqHHxPCBE2r6M7Yjhmqt6UJWUhfbjVFVje8V2hT5zfEdEaFFGz8YuMTjSLREUY89RuTGWv1GeZv"
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
