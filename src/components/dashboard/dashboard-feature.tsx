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
    "5zuCPJYhwQjjEnFiXL2J8HR9VrBf5C9bXnTEKMWB92DVC4AMrLS2SEriNsqsjUiZq3ZVDBhCEPfoCXeqNzM6CEbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDRCdcgwNtZ7JRRSV33Etk7dQvjDGdRWtZVfWTWQt6ZpGnDMMGtZmTZuG82nDC3pKn6xwJRyPLUCPxi94fQcv65",
  "key1": "2aiXUPSwFSn3yXh2CRfTcAGjoMFmhSGnzec6rZxyUsroTGnywDw8bdfyRPLVVsYepk92nyU5CfFHWVfGFjfvzQ3S",
  "key2": "4ySK28q9QeaBM5W1Tdjt8bpdCLNKdD44C7RBRg19q8atnEvQFcAbG9Ps8WwKT9e2TztJAB1Yx1dFTmHeQokmo6jY",
  "key3": "34TxQuaPhM8WT7D1DS6EepU3chWhfGsa9oUxpnaZAxxtwQxpKCGRfrGhDSp23RbCzuHwSMV3AXDcyx1qoxr2BNma",
  "key4": "3ovNbxV4sxYVa8pDXBYRRXgeJrhEmzdobwraU9hxEMMv31WD3TpmgPr8F5RQDVvEPH9sEmxWAM2hXjZ9BVdsfc29",
  "key5": "5kJyiyjrpAQ6R33kEES3WfTuXGaxAq59DicqFz3giHN9rhda3KKoUnYE9zWuTmgX1cmBaVu3wsHs21VXoKqcdTc5",
  "key6": "4stFBmgjHLZFdY8UiqHBjhFPX5tR4UAXwuHc5w4oRoNUwGiiLVRHkJKeNaQkVuYkRRya4KpCwqSnpxt8G3R4dboa",
  "key7": "uAVUMVgZNtpSAUHkRn9KUb776NY6GZ6yukrRs5epDVMX9GZptrigWNs7gzLb4XQbezxuqwcgDCrWJuBMWjThy8r",
  "key8": "5mGWeqbKqPMz5ZyjbhU2tKbT2MJrH2ooHRRsjAGem2FJ2JAvnA4eBW1VGitszPcYRKwQP1gAVC8gbpP4sEf9dBUB",
  "key9": "kyXpNrcJQxMhdfaLtq5Bv1yynXj9hy6QHXVRBPRU9mimjqpwbmmrJJVJT6Hme9sT2c98yHCqBgbt8JhYQZNtacM",
  "key10": "3ia2qENaLfU1VuRpcpF6HnYjY51VCtG2qMyL7wMuZGjCVvDDv8VFyuvwDPTFcAjdEioAaHaHUVzsK69PPrh1zpXV",
  "key11": "5G41KeJKh6uE6PKPz3zk3s1BZfH3ZD36EcSrD58d1sFubxdbVgXHqenRP5GYkA7DVDzBVBx8Kj2ZaCWttMh6VcQJ",
  "key12": "5vFNEQ1yTfNpfkecrZiXMtQjiRnwAM4fCoTVETodAnoVdB7yymWGc5a3LwVj5EzRsvbVNe33CxQsiNJ93E6zVKiL",
  "key13": "4zgPQBhsYy4CDXokCUgvj3Jp7NXbBVppG6fjPNJYRDX9CDigBjZ1uipze8CXufzwpTcSmPi7SYhqyPf2KiK2GSJ4",
  "key14": "Fu9y6jVEd69oFdBAzG6EZzif2PrWAKbrcX1DtfBjLhcBbN2xLU599Ru5dJNHG2vvHu79vF1TRo5d6VFEuCb5TyN",
  "key15": "63t2Wc8ypbd5KALB6EeAayvMEh7KHwLN6URGkwmEHiBbJVo9XbENJGyUN1fcwErFAkTEcEtXccbAnAEAo7mVGvhr",
  "key16": "2efMQo3uXTNFFXxh1tu1r5KEgCytNbedTWhxJahBf33VxyxautTyzKK6YMoeWk3tapFFpSEhemZ7RFuwdCX932uu",
  "key17": "4LLAUPc1Ze62z7anBrnZJbYzrnk8uUhpbBViwtPgj25yDUs8EzYcAas9giVa2UJiPhxKiiqpRunwVMVhhQ6vkZaN",
  "key18": "2wZq7crMrFH1SjugXN9hHezncHuWhQQUwt4E9aL9meE7zwvwgHnqx5Wi9Vq2ovae2orm5cso68roeXhLGbJfQSyB",
  "key19": "3QdF4ESNW5axZG2NFYrJvoFwv6Z1rQaGELhRWQ5HhnqVQ41Ei4ZyTQtTYzVXTiUA4yM9BaFXoyrEh4YHiRdNMGEA",
  "key20": "4KS8TLxsYuuQtQGdwYBYarV7pmz4uinbham9eMryPH8ZMJfvgHXF8X2d2N6mzbpMorvK3QifjmLPUJnqeCgvzKCE",
  "key21": "39URNhCH5ZQL6cGyHmPYfQwrDV2BbkZ22Zyupyqch1CSpzXGvvXqBGxmzb18YMQdi4TEoWhiVXTKNbaRWiiUnmE1",
  "key22": "4pixh4F59RjdLfcFVi4Y6ZjYYEQTZ9fgsd7EKLjAHiJJTLKxTCFaeq9xNePMCgW1yCLrC1WniHaEJLHex1ahLjxt",
  "key23": "2ioJhjurd6TnZciXG9QMqrLPqLzzJVowsHmcDaTJVcXnNkgBxfMv64BBh4xRT1mkALnebgkbeK31vYbyNj4ahxBD",
  "key24": "4GJqoDmWk5Dq34ZSqqbiiFjEvE9JyRxvFUKnVqu9v9Ys7Ajh2aYTiHhFr3Loq8z7xQkBEqCm8PffbxVo1pjWffee",
  "key25": "YbhNUPysn5nT98x5HzQZFKp6uX7ccPpfHio7XtKVYwjhy4tKRzts3HTrhDydv2aHQ8Sn2DuFszkNTZr7n6kJqgZ",
  "key26": "39QNxo2SnzsMZLKSGx3uezxde4H32xjycrm41ekmwmTMcKenX8mEcsJDvUg7C7AR7mpH4EejsNVeYTenoQL86WNA",
  "key27": "3bxNPwVq8tBGeMQzagaj4CUFbe74c2tA7YaFEK6QhnLvF12V2wutmvq63tzZ37wepryKoqddwwE4PeK9Ktyx9EgV",
  "key28": "5inVRVED2aGFCkicD4eJGiS4ZhFQqHV8rpwHcNxSj8P3F5jxLy8GRN4KFW8Wa6P8TRtVGNyfiADi7PyYcC1i5XmC",
  "key29": "3jgnYFXBmVzuwiCFVz1qnBWX6g5H34MVAfSjWbQLFkg2pTHxpKyHWUaozaPoNkHQDx3huzrYtGq49iNNJ16ZCSMf",
  "key30": "5Bht58CLB6xFwivV6rdyPW9uaiJ7qJL8jJATAvp2ZmezbE8bXC5RQV6QzgZe8W4iT2FibmvnYuXQUToPXZEbiVVc",
  "key31": "sm2twYXi7rKHPF6UmcnqM97KWvhPi89gKcbYngvvEuzxisCsm7QTqckp8Mwr6z5MYHDB7AFFzVdCE5UhKdvrkMe",
  "key32": "4ahxJRFGvQ1caCeLrskrgqMjPGnpwZW2A89TBXuhSGX2Xn6uSVKaWcrVJDisAVhzXBcU4zDNbzjQEBpeDZQ2vyYB",
  "key33": "VZpe2SW2EPqq6FrgdqdTS4Ffw7Hkf8frPsjPrXwczmFWWxP1o4GqXfXFiEdoDxg6bZJPop9hCyAwz3RfPZsdp3h",
  "key34": "5XZamAPpNw6HstSTrKcULsraTTK19WHuGGLKZDHE2smuQVJtGGTvuNVi8d3tAw5EnBQhYzg2baRDpFfc9LnfUhax",
  "key35": "4RnCExgxsejd9QUK5a3bY2ReXHwLei6VnaEbRgwsUVQKLZqNS6x5rr6rd8wc4eY6VzANexy7HuXsf1MobW5tSWF8",
  "key36": "5KXVaPDwxs4Crpr1i3UfMepzbBnbc1YtEsuog8iknP6GWbCvpmvUmkGxpbU3wSETsCmE1Sn69myh4QuD8Xzpk1PK",
  "key37": "W2D27tTj9Y5Bnh7Vp7711YYm8sNcA77G2oorAPRGo93xtBD41t7jtcZQA5k7B7kECZYNyUnU5kuzupMEnJv84p3",
  "key38": "55wzMXrofUcXSZt6oTSinPbVu5uvABcVRqBRcRzpFcvDNuxfxfmqX9CaZoCok9gnVkn6iZaPUxVBgBz5wY8coDGF",
  "key39": "4h9i11SbKfmpasz8n9i91otajx4S6GgNYADcSWKm2jwhXd3wLbm4tpXGjpj59x2RkFNq8u6NKQcYrBgs9MfhU8cD",
  "key40": "5PvUUr78fNyzfjBWPFAGDHTmBPCrUDwB6aCK1RiaH6ApsVnX5NCC1jKUm5HHbDYSiS7mZx9k5MF8nzrM1ESUVFKT",
  "key41": "4C3rHQQREyGsJ8xgjsV4SU8kkHeZ4HTsGNEYnWVNhwMmaiFw3fZTPApG2fD5frC7K95yBKXPk3ir7fdVH2bzL9Ea",
  "key42": "5hTCdhBV8y9pT13W8bNoyZAG8W2mYnJVWxcTaAZCwzzQbkiHNTm2Ao6sdcddYHDaxpytvhwjVtFTECxt427Xoucf",
  "key43": "4AnG132r55iyiNxMNMLE889xE2xSGgCubEmZsWf87tG7M4fG4m9bGKyNq6s4Z7UMiXKqz7w9NTcC6QVanLt8fJoY",
  "key44": "3WyQqgaszVEuTamRqoMA5qgcbJyuZjvzjtVMdJ645isBxjecqkQWcGVh1MPwy6TxWMZRUjYKQTtfS7PLPktz9wS6",
  "key45": "66DxaMwBL357JJ7WMLHLu8yQS6y8oqNAFij2nspFAGFrm1xKgKQSyH5fC4rrfvGh7Fhq1gQcczoZi9mRZhjcyENW"
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
