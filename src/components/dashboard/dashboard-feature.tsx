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
    "4how3yhaFb3pQfuEbVpzUeSXBfuHwxuXpyJ4JFt27CrH4VJafh5dasgjAHdkQXWWaLFgpXhv4Dr4Z9xNgBTp2U1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LnkuH1W6ZUwhwtZci9wG8TT1AGRKpyyeSSdPwTj9eSt7i7EBX3a1KoGRs5sKnL6Yew6HzGTjxNq7AgLSEXaxv66",
  "key1": "62WG2R6oBNx9NTT8JqDjEytiYmpMJ53o4ixK5qkzYX6icL2ZgY9UEqwaJqPmA5KDP9y73oS2gavquUju9TF44Ffo",
  "key2": "345T2nNk47V7k2RnH9ro7wsLHBWWSoG5DW6ZiyLXHegdEHWFBh2GEEu8YYy6GwwYpcgNP1s8PUyU4fPsiMUzxcdJ",
  "key3": "5dnNbEu4pQojYXHMq5CXzC6yr3Ays6WN7zdjdzVht7CQF2rvmJAzTHAVABKD2EQX4ZX6dAEXrKHe9cM2JXzUxcQx",
  "key4": "rFmdAqXxPENPG9b3y37rCDPJwCNDXcZt9op7pJZ2n4GWszABRJfPFnzDWJ3N92o62KvtENF65CSYWmm6U1KmiPz",
  "key5": "T2B1cEmsuA6pxkZvqgEp7NUwyryhFirZoi6kYz5BVMka79RUH2YKEMNQFe9y4ZLpuLyYbHgEAAJ7WJjMDG27hMC",
  "key6": "DLAvWYSgjLQCDzhTEyrh6nQ6GK37GdprBfQb44MXvKQhfqdWj5aoHMjvMWueCfV1vEtzUifDhmmh2WnvEiZRQMM",
  "key7": "2MN78ZXVR1XHFeyLoZb1R7Fj8pcZEsyPKXo7TKUJEDyn512D9HHbfE1vYbCZZYVfTBBkKXfNsCTEYq1o2C6ZBksk",
  "key8": "2ctxZ4UKiLYGFEYrX1JkrrYdQ2LMmkvtrzbmp84Q4WzD7oA1YExPizRbrb4DwhEqVRS9qwwgCjhk4qSb35FLFLYe",
  "key9": "Y5oqXhLYx9gn3gjNWQbUjF6VNzHhHRtfRZ2o1i8QUkwHxNnZHBEp1zFazRBsM6wWDDT6eDkGVv2MJ1afckfYijH",
  "key10": "3aHpyPfdnubZa1yAcaXkaK4P4vGMYhGJDdZcDSWRDas9tGAQiryB8jSkds5EWTp8EB6C7o8nWfKHBhkwwG2s6t7i",
  "key11": "5dWFfzyiNYaNZavZc9Y3HX8BvRfgXNU39z1LDxjQMfdyrViQxe9PHbyVDoHLy59reKSUb2D983bbhG7PGZycFkR5",
  "key12": "2nefEzyX3m1qaVcYL222uXo5rKjaarkUE1JE4Fe9cEDnHEWGDTsAZEHepQoL33dNU7jyau7w4doeQJPMJbRmYpTJ",
  "key13": "5YESYfGf8rB3hcdgviP5KxMZ3He94VYqRyPbeA7KeX5vRyBXrV71esaEWoQaYx2ico5npJr7ABmBtQrSf5uwPRMY",
  "key14": "5rq64UZoYBaAMmjcqSVeBgcxeGKMTSCGMrH5qakjFcMvGbXdvizaAEnf4tvH8XRySvu9txKsY2nbx1AX8P681Gb4",
  "key15": "LqbRhLqa67MwJJe2FvtjBjnp3fDACmMtEXWA7yBhNtDi76enG5uRmMT8QXYJCJMS14D2f56uUhYMhJmUJwSX7Ha",
  "key16": "4LPBKpBcdWN8CPjXQGm1LegeiZXkZhrmvVt9oNRwGJRQYX7sFk4efesaeH6d3Eoybz6GKSD9wY4DHM7jWa6wRABA",
  "key17": "4ogqx1ViJMFhbFudCX3zbryGqN2ZBY9MskaJMwmGnLtSVTFyL6KdDtEeBdpB6G73NNkfwcYk1PEwYRmhwcCK8Bmr",
  "key18": "5Z7DQKSGeU5ukcqzZjxkQyWkT7yBPY5pRyR1B8WETTYAswp8TEYK3SQ1yzYiHfXvatwucvK25m5DxwGGBUHyLNBR",
  "key19": "5YuD2KCrf73LVrvzVYanWL8WWZUqewgNAeM1utE6GhwTwjcn2BUjNR1sjypPXdrVY9RbKWSiqMrPH8sCS1Ad8uAZ",
  "key20": "2MFSfPCY3WfqcV7GcKcW8ez9WUnTeadPSwtqXocucAUtvzXBi8CxqoX833gr64SY6HMpzTT6tiKJrnRJiofuvSgU",
  "key21": "p6te6CnYPRmFPyDZCgn8b1V1gESPDP14QgbW8hp2EMWnARdeQEC66bFc9sgK2C5vP1XurnqAzoVj1Ym6t3ka343",
  "key22": "4QpenvdXKXeC1VLV7yTdY9AMngjdnrUPPBZfriRHjcGfNYGPdsdqyRwUouWJz8LYR9oAi7U7gBXnHUXHx6oGfovS",
  "key23": "4A9pMbmj925PkGJLkFGHbsvif3R1Hq8ouFSYtRnXp2D7pH9aZMfxuAnnNYiakq76pQFEp58eTj1sHzMhC5nV2tZG",
  "key24": "4YaTGKnfmpdffPBcDu5QGE54khDUHPGEbavxTZWbWMmpfzd3cZETuREEPxiKjnkW6Y6WRXHWyNPNdojxqe2GGAof",
  "key25": "HkW1romjTx9r2jXEFR35vbDGMJiwkgKA7eQA82dy1yhsz1dvqXZsD55YDwFukR3BBMpdwh9yjsDJUfejuHRZGbS",
  "key26": "5aTRhoJnMoz7Dfikk83BEoK9NzjgLFuQYGUU9V4iVfrZJJTJFWjh6nbbSPhMYdPE2coxLuSxYqxLLHM2es6SJXUN",
  "key27": "YwTvPZY4TYfHCNjcuGy4sK3ao1yza9WoE6wwBMTmNHFWqTpGoJYWByVQvuWLw524S2jEWTg9w3gyxPnjLzN8oA6",
  "key28": "3TNF5oSxzMaayJAXwQp6MGfZbt5xJxMrCAPMKVgYMnPYxDaLM2RvSCKN9sg1JQEijb3q4mZuJfbsAubFkn6ueGEo",
  "key29": "5dfgb1sLjWgbrAQ6C86Zx42v3Fxwvm3QKrrwqJ7DjQ4KrwKoEgjaW7XSAqbXk83EQsaDTjXbmurGdceMenwFzpHj",
  "key30": "4xqaxvK28HY7J7E9TM73HYXsYUC64ugSyAPVxwPqued9PTQhytFmp12jQBfRLXvFtVosXGPopH5Cz3z7mb5dow5n",
  "key31": "Ezpew51KB97hGoXKhkMZH6Di1eeSk7BYEBnAN9PGSTYZFzVXqLjmFnAGinM7xt45kBAUYadQwtCDoWv7cidEjVK",
  "key32": "RvAAunm4eF53p3Fnk3eHfxJUtpfYz6QNYrUUDbaGEdYT2zwzkjsX7S9grGaYzrT23fUznAxMMjqvu5yrQTFkc1B",
  "key33": "5YyRD6zm7m9wMRpspFsFj5K3ymMVL1nRn6BPcDtXsgwVNkHYCPxeyuJh2NsNpfBUL6VkAHPMHYAbueEGKt8VspFc",
  "key34": "4ZDsPfGnXHe5XfJXx3ckuofBUtz41m4vr1Zji7sq46ejxJ2PeuYuVy9GqPa2vwPwu6y7PQxzkuDDg1SwMRwqE57C",
  "key35": "5qCvUxPPL6gdYBucX4aw7V3HWtdqjqfQD16uq3Dv85mmWuYZeQWNWAALET9vB4hpkhNxjbSxNKJnfHw1rLWUHAFk",
  "key36": "g6UJhRHRzUJkUKB7DVv7rM4JJqqsmuSJRx2vCNnXN1ZvW5Rqs5HHQij3V5jiN8mDdK8VSBFBycSY7na2GxNRt2y",
  "key37": "Mh4gwwT5Ej4cUaePvDzxrHTkggqaAKCnp3gDxohbQnNtyhzYmstu3bynUxxc8WKKrjszEiTeeHDDWvmSDBmr6YL",
  "key38": "5VphfA7vP8kjXenMb9djvKpENxcpjWERH5YPBAUuaQJaLHP4UNNgUiwCKp5uc5VbWXcNdowPwmr3kUxomjbDUFw1",
  "key39": "vE5WXD2YDEw5wU7nqagS8wDNGkQGizWoK1ggWbRXQRCPTGmRiWf4MfsMbP1MTfgp6DYoHenniwu3KKogx7toXvD"
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
