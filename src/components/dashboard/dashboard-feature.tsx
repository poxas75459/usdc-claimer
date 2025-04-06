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
    "54J1i26sz6Dcpiryte5jfT1hkHXEz1cGG5qgMeLDyzksLT8KHcDY2xnhYdEJpfZawVbgJhFf7HA5u4GyHLBPDbud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PKKsMwt69mXiRpMZQXcXecsU5AmZ9YtWQzUqhu7bAVr7KdGxpvd6ABfGTKgQPNdKEfB823EkXmymSFnDYZKU94D",
  "key1": "3cA2KNzDMxyFbjYSVSHqMB5QigAvfToCCTjAFt2Qi7T1KZTZwSVcetd4Zwar4VQvvRYo49HZgstEmQodQrXQSdhy",
  "key2": "pRowqaQDMQsp9PJPfuDN4bcq4Gk75WUbvAHknkovQpGixww6c7S9XwyxDtUkdxtxdbGWmKyxDwv21mJ6v9FUTUN",
  "key3": "2pQJ5fxWxXpikfK655Y1a1YhRfW5gRAYEpCeFSq6Gb69Wf3xoMt2Wvff9HUJ7xqnwibbQQuKQN53d9MVSrsMwS65",
  "key4": "5SRWhVRoz6JHBt6P5S5oHWpwfrQDuELDz76Pwpj2SicvzS7Ley7v9Dw5UAJSwRJU7dfs2M8uipKHvWq2JgUGJrk7",
  "key5": "3FLk3jxBUbpt5YGKk2gY8MRqjKhNw3BcmjoSsi3cCoKYpQQj6hULf9voPuEY5RXGRT691ZYMvpVYwR4mqQPxadQ2",
  "key6": "2ga6KoEjx2GSfFHsZSdWxxdP6RBZgpMNBBhkbsXrHpgfLWKWShwaNDY6iF3gopMpjznT98vgTaUUx29TVkQxi4vM",
  "key7": "5HesK9S7WXVmxXsyyexjgx2uf6sVxCfrAyUVHmzkkrifpHUAjsNPk851kAVfuBrBYtg485DZ2UvW41WsrA4cRLbS",
  "key8": "4btv3CPr6KDdopgBotYpgLbYgTXkLxSoKZJVxRPsNkSEdCG6iMuaA3yiJVuLPSYSt5c6jXM8SkFUFYtXvpvwzAvL",
  "key9": "4om9nFqhWdQxoSPXppmt8p7HtszzdNwGYNodDuxyKWYfzryZFR22fUYk7Rid6zkY18sSWqYUY6dkjGs6T7DvzZWP",
  "key10": "5bUZqkdLbbMqXCXniDMB8Fbt6aE8dDBrF3F7gDAtMpYtg7oLpf3iZ3NVnvkTvRut9xRmpXRHBNg5yZ1phU1mA8qn",
  "key11": "t4QQJz3wzjWKWJGfeWtrF48SEqD6xwLeAv5tqQck3uZcoRG19jJEwCrNhBLBr5vS5xkNDZBnPr7NB2Zf3Ks2QWZ",
  "key12": "5ErXcRhg2BvysR2MVpNXAQeBFwSsjjnJDndN1LNvYu1oJEVp169Lx7WBisLs4F8c8uedUw9VGXmjUheqJLgXeaAE",
  "key13": "3txjKNJcEFutvorAKhCcGG8NxQzadsTnQ1GQ7uPvetyTSEpmB8BBxKfD8nuvfCredqQKafzdfwWHBxPLe6jv4bCJ",
  "key14": "4sCZasxivEKTYgBm2JRfsfij7zSNa8pSzRgwQWatG1a44B14MczhSx9hiWdFiHLS3xWBLTP2yJMpbYv2aHSn6AuJ",
  "key15": "4SxhS7y3oYfihExxxynVwkjWrh8VhNQywZijugUaxhK8YLJgaGmLuX3wTuA1gLYMqdgsfZyyUbvBjRija9fGLD4L",
  "key16": "2HjZzzqM33qaCPXU9DdhGJpnc7pjMTkPMc3H3efLo7J4PCp3usBRG5RV8RmBHCU3YYgnQEbteJWb9CW45PY7YXm4",
  "key17": "5MRuSr3tHAfoXkgsXSPLUasjEWL9Un5rms1LwngpexJ2jAAC2Aw6QazR7DxhQUn8WjZSbo2W3zURMmERRHdiNM1v",
  "key18": "4eRPGJhooADQtLLT7reSD2R8o8mmhEkFxyZp4aR2PzPKs4jPuGJXjTGbi2uEZWdbnUg5ndniAYR9gymbqGJzZgxs",
  "key19": "595K8fVPGCvos7PfbxFeAseFiDJ5Ka5WtyBt7MJPRcHFB6NnFr6BEVLvGuCuvVQYDhPXDM312oDS7aGXXbPCDFmS",
  "key20": "2v8NVCQwWFQ9F4BN2K9byU3sqzy7HJutEVxWoWubbttAzcVXvGGAgDRdQxbaT1pCaGx9Y3iHWVnoZ5K2YKLPPBzH",
  "key21": "57oZTaDg3gwtnzADRDfncpqWXht38r4bNh7Js73cBtW76PopTTcRkxQBoznjLQqriFH6ki2QwB4mFCeu972LjYuK",
  "key22": "iXT9ZAe1AbwvWv5oV1kFf9VsBQn2z17kvDUVuqaGkkLgPSdrgXJSnreVAmt4Yui6fH6GX79zEdBJzuhSPAvVU5U",
  "key23": "2ATR8dd4rW9NMNeXoNhFCj3MH3kbpPSNv1EzMnX8SwXZpQRhfNxZnSLuNPDimDMExAfN2c2ukU8zqpJt6pa6mNaA",
  "key24": "JALmT5HFWci1WSb1vadjy2ovnAoQg57QTRGqLyYw2oZHXtvYgW6sWFb8YqYCmUKLK6UMhJKU3iVboXTHLoyUPGW",
  "key25": "AnRuNNicBK6G5YyAFFBT7R8M89NDKTBPFbz2zY9NtUoj9xTJp4xaJdyzJH3171msPG97SMzs3zC3iNuFdNxp2sz",
  "key26": "auqHaJY15nYVKGKz1ZCSv1E4aGm5N9Qx6TjM8VBCWb3JdhWUEQTwXYsEorwYsppebP3UZ26y9Nr9AhZszx4nkxm",
  "key27": "HBJDUTTfef6fgvgEXydBo1YeqwfxWamoK5c23nhhnmtgvaafujzgXpVQ9qtAoAL9bNWrXFL5YhvKBzRH9A3C5DK",
  "key28": "1bE2WUyhGXEpwaZzRkX3H4dyvGcc9SmvXuyGRET659nHjGehdu7uBwr8PT5ADZGUFGvkMTgJv9pTmzue89VjvEa",
  "key29": "9AHNtYPZzB7x9PSCNkGAgbt7sqCokZsmUAUeY7iHLRN8uWtYagyfFQZzgW8MW9ChbQQjgmDtTJZJT6kMy1DndQf",
  "key30": "5Qact5dxrvcZJET2RcUQYaRFBhKAaxw74hY47d4TRkHn5stiv4HgtreThSQyiH3gorf8hp2U6b9EzdJkGKomxXfK",
  "key31": "5MVEbnKXu4m6YtDMa8qakMeWWegNmKivJwEVeCrSgXFW8dbeUwDkrJS7Tm3WGUoYcp5dfUC9S4j5EeJYqP4dSaia",
  "key32": "5NLZsXWzChpVhVzfNXAZDPu9LsMSJuqBYRPH3qpoPgixLjpqRb69uNvk55bCojV4X7TKn8zfbGxzX13HnzFxTVtf",
  "key33": "XVMByoiMFkoeehFsETib74YR4Q5oNUjycbdWVXkaeFccnEcGVMNtu3qmxTo7YLtBrpiLBkGru4CyRXoWaBabYpj",
  "key34": "2wqTjRq3ygrExntCRg34imX8zzVbU4duA7dcQbxLoCKdwSv3bMk8a2ViZ2zngrsB5EGcjZX6eHFpDLeNWgranrjW",
  "key35": "4NeHm1oWpx2jHiVRkVLD6n9EcXJErm8HxeKVMznRKgLcEvBK2StVyqn6rHesdgQDDW21qLPpLKWVr1jLDCkqeqZp",
  "key36": "3KcbK3rWfqR3zRNfJd83UFKebwizxdqESpwFBNasHT1niUM411v6P83jjSeKA1V6ENUMsHpeSu6XcgDYXFgA5fmH",
  "key37": "3zGRYQf58qREf3DCdCQWbdDrHp8r21jDhsyfKDQAA49Rv5guqzfzoPdbk2JgqzeShMYX5szmYkZXVfzuwrDTqm9t",
  "key38": "45MckkncPDGcSMFVvAcHtL1UTFX1DNF5kPCu1SmVg8p5aKupQkQ6qC4E3nce8isNiqeDjjhAsebytopvpwvx6GeY",
  "key39": "3sR1N6UWiuA9zmdr4kk36GaLZJR28eDxTtVpJE77pnesrstzxiYhufHwgzELZDgwku7h5cM4aFPtYTde3XeWXD3w",
  "key40": "yVMcFpQ1CcMQCMafZknAixDLuoMs5h5kW9Y8HSh7x7WhXaZAgcZTWRtB6htzcXhQiRPgWaTduM9P5K5KbiwUmuC",
  "key41": "5sXkXS4YWeXNa1wMLnQHH2zmoTK3L7f1jQTwyKBoWmaC8arvz3UNw7vrhh62ivMQXVqQGKvKnpDYpZL6GYbg2CGK",
  "key42": "2qrYewsfWTgVRajDfnu7uEPAnii4abmMKi4Bt1CuR3gFBbh1Xhir5jYKJ8QWbyV8CLrGEnPwSNzavuRsyJF8cRKn",
  "key43": "3stsvtjZZ3SQTDHxxVX5hooMTVnaYW5d2ZZ18gKX79GFEsmC3949y74bX5HnPPw4xdX7LonPJ7bJ3Vaa5pfqxZz8"
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
