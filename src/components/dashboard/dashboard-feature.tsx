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
    "4xmh3VV4y6kCeVewwfHvwZWjEQKxrQ35e4tk82FREVwsftYxwA5JNDZvRfyrXn5q5UhEfQ6NETaWJAoVPdcEM7jk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hJefC5ebmLn1JNQK5iryVcPESag7JQo5QJrDKnTF4AiYYAsfWRM3STcwPLSykLPkVyoDoHeqyNGm1qgNB9PyDbD",
  "key1": "3bG1cm73PzbPZyKcisoxqW7LnLedZVrgWQKDyZkHzWJfNMvdhiyQrZVYXTxqnkN4hcWoyGoUTpESiMFaq14iu56d",
  "key2": "3gC1n7mkq27XTVWWoNoBqeFWoBrYNNM4u3QgkpFot7LB18qt6QsA2C86KeRE31g1A4b6zcjsuD9JKjDSPqxkf9PL",
  "key3": "Ddw2v7wNmmkzdtBP9o6FSZWVi7rHsuUD2Y8ybVgzuhdUVurwFqry9q5nFRsgWUSyY1QE5qf28hJ6HfXo75UGEqM",
  "key4": "5Y9bJbzdf421D9Gh7WB2d2HV6i3yZEvjjVCY6gkPHqhkswu7CeH5ZsVSaeJ2qp7fBC5CxX9VQ7rQQULHytQppeZz",
  "key5": "316ctnmNmV3EQrsvXHuyYFA6NNfhtMGRvevAeBo1yakrrWR7W9WtSJ15oWSbzcNYFy3vherccZ5Y64vNvXQYKwAk",
  "key6": "G3MGoQi6WzQFimh9wG2Xt88jaP3qt2R9osHhqdrLdjoVNxsTsaNaVhoZaJfPBwFZ8Qp1p9z1ZBStJPeZpjVafnz",
  "key7": "4ogcd9eR4NSpdSXQJuKnUPbisDr2wzmq2KirXX4xj25bSbtN4m22QivZZFWg8TpWm8Cn2Km7gXBM5dY2MN1FLDr6",
  "key8": "4LupZgkJea7fXtQJBTkc5UNkDWkf5wn4hf6Dqx4z7Mygg4JKT4ycHYXcJmDa2ch8gGm67FYqKNPdVvkaw3tSK43K",
  "key9": "3LMguqNPfg5ABwBpyMY6FzFkjs2PhjsCYH1bcEbMC7SHfLbw31HibjSA39FemMC3465ibYFT3pxzEZEr5oHzyXHg",
  "key10": "JqwWX9Sm4oqkcpRmpuSvd8jmFS4GwaYhwudgua6DXySbTa44BfbB2Zfy99HgTH8PohAVmwu9eF4hWnc9NKzrj3M",
  "key11": "4mYsoqWybvpnwE9PxTWJ6t6Q5Yynmpw4GsCBpiL4kHaZVjxDJvCGkd7myjxVVkiNBJLugVpFFX4CrJFQmbWV98gF",
  "key12": "iF9CUt38R9SZVMNjtwUX3SN4QWWyFeEumxJKRcMWjcPBtZxq8HsQ3Mct62zJrAtkB1eoUcinwmCksz7apHHCUgA",
  "key13": "62py9uWvFxpjdEdc9D5GNwvKCcTuyRYRxAuQkLkPHHYmNQqu49QziuaMviq26CZP4Sxqg4nFujhezer3bu3ntbro",
  "key14": "35vT1a4BM33LgFE39w7ukYnJwAVJPLEiFcSjdHj83zccDnUFzDp2nLuS4rFukxqKAiWv6c2VZPJy1eAGcJCn8nDc",
  "key15": "4P95xA6GNLWKfrvf9idULyPdGsoNRWKyPKTpGwXdmi4SugSJaN54TrNJxpmM5jz6Lx359JtBaosBEGNXk7yvrGV9",
  "key16": "4T8R3jV8FU2mRogkzapmjPESB1cUFgiEyYcVbuqkigZaE3eyQQscqymkTAVsMFBssfN1Sc4TqCVHc1Gox2JfC7dm",
  "key17": "3hdsjSgSq5erVo75gFPYsuGohJMnLHU8dZnJ3tghjnBNAoaDZeSu4J3sox1PpPeg54aU8ZzD8Ukneff1wcYDbJpq",
  "key18": "3jejF6EYjxJp9zvLpeK1n8hGCMkpkXDm5K2ZbabboCu56Z3oYKi3iMYvbMeohCM9WzY57x1T9u5R1QFvQjFX5GqZ",
  "key19": "2V3VBut3yj2Xe7KrFRcgbjCcwQwH4J98cMH5pBA9d5SPcFDoXTaziTDi6Pjw5hcwzj5EgfTPnY6C2CZWnTSvkULf",
  "key20": "47FifVcTbjN7Ho7NNAefoPb4iY9WE6KVy5ZTsXHvNAh4F6nA13cLAMHL3wb6dwaMDyLthfBuYtosQFRKCyX924Dd",
  "key21": "365erUBYwNE4g4aVbtf1ekENzb9uAA9Zv6M9EAMhjqnwty5rbtKMnYnRZgfzdnP2uy23EDb8QMzfDGNExLWr5zBN",
  "key22": "2hauiH3fQVfEyif3QHoikYaMK9xYeNsdmqyDUxvBuYWLrRnoePUk32vJpUdBunzU1rn2BSQVHJyhSKTd4rK6eQe1",
  "key23": "2EQmehDJBTyh3HzY5xMDxQwQHoe2MGhMVSyGoGRDGpeCsyDkFCRXnGR7z8Qtk57GwmBmvvEDMSBZJYYwvTSPcMUD",
  "key24": "3wah5uoqhUHAVjTK5aG3Ztd1WbzBkmUJwtPjtjAmPepRabJLpXnWs74pHQnM571Pb1UHUJRKiV22iuTZCeraKf5L",
  "key25": "3efL83ErzsjB2mJpiabzLvAQW5GAyQ3oVxTmui7Mi9QRzo1KmdpCtc9FWrAYGkSBf99XkHDan4VBbYSMUbw2z6uf",
  "key26": "4iP1v97ma5kikUWQk8ZSv9wcPi6kqf7oxCCEJdGU7AVYFV7J4cTq86n7tTJn5171hEPj8qxj7vAgQUjtjJD747mL",
  "key27": "42pLAeb5iKxXJUXXfJtKBYAHgkReNgyEnG1Y1mdyZXygbYse5siyLnCpbGmzUAxEJbnymgskWFdx73dydv3Jgnq9",
  "key28": "kEVJFdWjT83K6gP5Fq3HTRxvX8ZJ13GD8TUCZgc6tJSs6LbSLG8LKbb6LCUXoMhKABUjd5aLzkzMojhAonKa2iX",
  "key29": "5UXQmKaeVjsafKxX7FdwwcFGebLV3VPsCHf3yHu8gKauUhqj2J8ZcaZXyX2MHvBfhbzSxamExJ3eB28SjvULnr3P",
  "key30": "3FhGfeG1YCGRpUxk69dJh8w7dxq72xpNBpKiSzzfm87SbH9DrVkVjVsyMeYjeeattjjeXsYKLtNJcCPoUT8Rcygd",
  "key31": "gmvRMFMKUgmXn7zKCFTZoEgDFTsKfE7tRyWimN3K8LxkhMLWKktXM7NzdegJ19NmWbqhxz5c2hJQFgGLyuffpNy"
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
