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
    "4DoJe1yh1k6UJhQN9gaQMzsAFJSfLbmjbwLsFR2Lm3FUEbqo4kyRz2fRUtGBzedKNhicM2rXCB3anfm2vXAUTjBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4C7RF6pBcALffWfSNqNkKs2c1UwAbEtFQRwZfKHWcWKCnbY5rc2SZXfeVdMbdo2jQVPeE7i8ubiEZKKcJnc2Lc",
  "key1": "21BgkW5Cv6Kfap5YGtKdW7L9Fjhgq3Q3z6SsaUuKYR1gRBPpgKkxPPtjzx2VyfZTidJ7x4RXnzDiUebch31wPdqb",
  "key2": "Ebb26FwHZRWFzuyBFHQJ4XAAca2vixFqq2HZQevzD4azyDSvySakpEov26w4QjTEy2m5CKd7cz2tnSzHEQujpu3",
  "key3": "3gzXSacxsk1zU44zWZBFJTnyen6fH8eMgZokrg6Uh4EHGkUkrK7wE9tg4bezibwFXiKr2vXddTyPbmShbrwaQ5Cn",
  "key4": "eV6q6AdMHUudEwobLoHrv7S2wKCMjD1RjQn1Z6tcU2Nmjq2LZmaiaP5Jfp986QYg2CGaZYinEjaL1rCXrWHqoCg",
  "key5": "5zgAxREUc44P911PbKNcvBRWF9ZykvB778emrhvH5ZPkwsLCHLKCjXSuN9GMc2UEMsRocZUnDRA86uKNP5oq6bWz",
  "key6": "5TKz9QtHJ1b1m6Ldy9BQerLJZyiigTuYEq9B5CyCBcUeEKDt6LfrLRLktKx7EYhE5X13ZMMatcQHEsk1Ea1SGJfE",
  "key7": "4FsMJUSitfBhUvk8i6kMEu3QpmFu98ZfEB2CFhT7FAdLb1JjcbSFNjoQNz9RCN3sFjN2SvJmytyGc98P2oujSTZz",
  "key8": "5kmt8N8By6zdifF33LwiknCKsfiGhp2SfJvWpLo1J31VYZfHDyeHQw6UksveuPP16fbNkMWveBCXuzupTPHFbYZn",
  "key9": "4znvzNYe62MsJm4mvxxTRpVHjiHHTwCcLYikYFEyTy7xPeH7sQnE93CdB8oskVKVTqHiRxeYE4NrHRx7jEVY5oh9",
  "key10": "3hZrBPppKHSLiELhx6U5mCUjQJZpUwiYmFWSMeY35X82GfqREAzdKGmBVFDJ5ueGLchpzNfF6pLdajjRQAGxtzTB",
  "key11": "4aAB1RHbHii4SLB6Nx9La9tuXXUyDevw58rAVzAHrmeEXS9JdGgcryMzjRJr6RQCfMHLX6JS42LhpS4VCYk5VVha",
  "key12": "Duj5kgvSMSjtM6H5KSk7BJe3ncNcRhJ4JmVVce1gH8N8r6gCzPzsPu6Gin31jc5sRnWnLpCQjwFbh28h7JQWuiV",
  "key13": "3p3cga4re5NQcGvMertEyrV5jCuEUaBnW5VLscuqzqFbEH2u5ij3QQ4hFm9Wyojo4NUSZERmioogwMmg1VmMUUGE",
  "key14": "5Pm2tVKbQiVZE1Mh53xfo3NSfge5xVxUKSM64Tspzka1iWfiH1fF7qwYbeuMQLNpbjHpUt2c8fUgkK7xjMqmVAmn",
  "key15": "3X37GSMe4js9ux332hGfXb2NNQpNAtXffs56vvoS4rR8oTpBEfdZqhFNsAPsDT3zuESxCJiSX3hoYKj3ZzkNhf5h",
  "key16": "4Dw5VFBehoMsdG9gWwWQrXDSsWSCFVxfCK1tCU8j7E6t8m8Rv1boKaC3At82ZdhDyYNLk4USz7Poc6j8FyytEBQE",
  "key17": "2GV3TjXK3xXwkWe7m1629Vt8pWGjGuYFwUKqwkuiiNAk14dCTNnqjvmFKWzyxYV5xkY8Vq5yevzfcqjWSABhbX2J",
  "key18": "2rYrfFDY1AfPqwZmEdpuXwesQPoBHvvtiHbsx2bxQmp4KrarsF58Zm4TtXFUS1seeUV76TWXvvStnP25naPWAXEj",
  "key19": "36NiJardp8WWnkA1WzvYHZbaYUaZM4sRauehSDkzQiL7HdCV1KYAiGWkdY2NfoDzNbRYVr8oWi22aQtHvhdpwE2D",
  "key20": "4JfGauS6xGB3tTbRTX6BonAvjzi7frsPPkx19TWvTwrDqxgYnTj5yyGX7Jtit7paWy57m2f9ASqkNEgKUFsew4vq",
  "key21": "3TRe1DNdJ3BRjRiFHQp3BYksZtr2ruFkSp7MVwsERPh8K7ZRkjkNfLEJ1JMcqFETCEinrysB8N9jHhK2GEwx5VxC",
  "key22": "288kohhr6R9Jbuo3CsX4xxs2N7c7bSnjHGLJPf5g18x2YBj88UPztD2iSERCJ3Qm9bmaqGZd1BNVTfDm8f4YRNij",
  "key23": "4C916jb4ovqNrTeHPmCRuEhZoxfwqbhqq1n9LTZv2Thir8HNJbhM5Xe85UVLXwHftbZDGAGFt5FfMvfSwBydAero",
  "key24": "3N7UEPSNV1CThRLfstQW6cQpSZjHAANWA8YbnzYmANoZ1em98sVLG1egQRBX8gYagrbT6RWhvKqqL7nCp5pZNb4N",
  "key25": "2CPfHTpgkfS1Yf2Cy9Bw1ruyXkDs4Xp7AM3BP1UAKmrCDp9jCB66zsqGjHqQwZSMWwhDFrbzKASFFRRiB7NtnAmH",
  "key26": "P7GXVsZ3hMnv7YsYdFJbvMU28owtftAkmfMywyXDfej4fhJbcodBxcARRVvDARhfBS7rbd4RizbNTLmQozuxuJs",
  "key27": "5Lr32a1gAHMFdMCkLxpZyRqTn5GtRgx5Ve9R8XyvChe6mQHaiN99HntntwMNF3bdry7jd9457s8X9PBEsppGLzZN",
  "key28": "2B1H45MB5dVmCQCFLJB1wsUmAtkeWJsJfU9C2j2o5gdxSFhRjSu5pps8cHy3VvkE11K7HT7gbz6DwXiuJc6VNdWr",
  "key29": "5Ws1ktqpwqMnJuTuC2pYhSvFSepcTsYqSU3S6z69hJ8PVbYnJXHgyWVCgAoko3U7uTxQHXL2peR1RBaAvY4xEE4Z",
  "key30": "2z3eeYeKsPtiPXGKt3HjLn6Xxni1hDu13kUznnLDKzGvxuLpV4gKLVXQnKWAR6eLTAbdHKvtRMU4Ud4qazTgq58g",
  "key31": "3CANvmLtdCtMg2JeVBYTBEdjsfjoudDuauRAdHj1HSwBCfVpjgH9Ey31PsjSg9ySSzQk33WGr9VmKTamaGwZ4eC8",
  "key32": "35apteemfNBGgv7zpXDbBBTAPX9YjQR2Rs7Tw6HAKCqpEHV9ffiM6ybydxCdU1hrEp6UZzeNhSFf458U86Kb67f7",
  "key33": "u6D5jit7CSczRanyKnKS7oHxThJXdpmrnn8c8sgTTBtZhKd4DCmpYMmdqcg51xfSDtwXdg7jNt2GofD2Yxr57As",
  "key34": "d96kKebB8a5GK69SqFfciTu4LMcohwEhCKr3R9PzSbDDbf5tmKcpeJp5EK8V6UwBEyzGm8usLGLa1YK36bA8X83",
  "key35": "4KWoW9juM9aGenx2EzLndP7WF3GhPLX4fWzadX4BDQFjZ9CebZHEBjTS4CRNSiX1jgsEcpwsrtBcsAX9NMHTokxU",
  "key36": "H9M1Qizi6Xf4vVURWQHTTGveMBjaWtmVpmYjdTrBfQAzByHaBvSqNwPqU1U6zryKKL9wy95jm6eBDQQb3XL9wR2",
  "key37": "Wf9sigzfso6wJRgDaMUGnxUvajj5V2S1y652BRaLNDdmfm6Ry6XEoSjcTCsaLAYxqyLGzHzN1EG1VZPmQwf79S4",
  "key38": "4yWVKM48QfGosq6kncNWvsBjgTyjfR1BT6Zo7xatdE1U8UKA72hkNXpS52UQ7xf3Xz5DcDytyXVFotfGCptWvVkz",
  "key39": "LyYvxb4H4HsQUjqi2yHuaHKECGKTvLfgm1KUi7WZM9RkGEgg9R8LghFqSDmey9FvwbVv77uqE4BC6Fyz4Z6WAKa",
  "key40": "3UdcYUiEY5KTENC6SjXUDTibowG1fd4ugeW2LA2zcW666fMmFS7Kqyzf9VBc1JbHLhwWANkKzmTUqiAisWFe1yQq",
  "key41": "4psjpZBJ7qKABVA125DuCgW8A3GFa33kmzYi1utANea4eoe1ckmnkWDJy31DFmoHorn5MaP7EGwDfdaMnV1LE5zi",
  "key42": "3wyKk1F1PJtCFidbV9wGiBBG7n1RtgH469oqzhNGYEYzQ6CytG2VqRkG5fhBK5gn6kQETuCeC9CPgJbrhVTXamro",
  "key43": "3ZVwoE32Bg6b9YAjVHX9o3wFRGi13pPCMX1wRkTFZpbcig7XX48ZoHBZMe3am4q89oGm7cjLA6kpNZAjKS73Qqno",
  "key44": "3B5LQTEx7Bo3D55HLPDvDGgjQY7iD3vE3hxX9NCcgTSycUMU9vx8G3w2Do9Pv1AAkE6ZUnUrdU89LbiAc6uGvJkN",
  "key45": "dFfHJu2Fiv1TNdENz5DsYDRpaQiBczA5wpCuRS5UsunkbLwC4wZwjV1AgL8UP4c4WT9meX3o9rNWC2DWVMzEcG4",
  "key46": "3xwJaUavB9ULGF692r9YNXf4T2YmMxa5Zh5bmKgpa2rDgzgk8N1v5d9Ck8G5S6xMoCSx5qeficMeNEqAsKV55AJn",
  "key47": "5X5c9rbMyPzXqQjJ3b74s8SNKBs8pXj8nm1WSu3XfdprNveh1KeD8GVbPucDeHMgGGgdL5NnbTsKnRn6aJjkQ9ea",
  "key48": "5LAsieCD56cyYBqh2GuR8sEQBeS8tUfLgMeqYYN3eJaEX5VLAarjs8dRkG77RFRnockHfnNVThG2PYzz3zLXugaL",
  "key49": "42FT3vb6JFuWxRBSmSiRQwK4KUBsPbEjXyNgbUgvUiRCzFRS5mowuHPTQw17D686W2p4mo3ykxVqPNWDCuTTweik"
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
