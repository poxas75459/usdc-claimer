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
    "2LT88LJNQvSFRaWLvdiKrPRTTd2TMDH2JFSB7WpZY2da49NnyUzUV4c45LxtJ1mf16bVbRTTcgnNP9DhVw5PHsib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7wipUEovTUSUMmGz9i1q3n8cuFviM3rdWqVAZmGrSWSYJcv29WUxGHygCVfmGin6MkJ2qkqXTAUd7fTVBb1hEP",
  "key1": "hhCzTQ4tjocVxkwN9nqgy6RTrQs4QWEDNTSJGgTPNDZx8aMv3xcYpK1WsJkWqfBUzsDJRMxsa3RgnDTRUwm9JD4",
  "key2": "3S2sEd5HTScUXxqkpyAvc67MeQkV3k8neaHVYbBXHyWsKtNJLe9qhDKC1oBWwsL1BQcdXcmehpPxWriHJZBcRUQm",
  "key3": "mruNubs66oUQqnyqVJrNSzWrre6e2MKCrX1AVy6iBUZQBNWRTPFEGs2DNTaasHejvDvCkyF38QAc2na8PeLiZgv",
  "key4": "64dGPTwHPqhdja2w2mpb85juCnZEEpUVQgZKu6qHcqiAi5Eks37bFknsEHoQU9PuEPzETzYJCgUoWekKoz5LABuB",
  "key5": "2TN5ofJB8uYXRnBRfBQtofZHqKr8PkNHrPMks6jw5eRFstWfCjbKSEqNrRvCwgVyMyyqezCrA688sd4wxBEzMRHS",
  "key6": "2fnHnGwJ7czXohkjnAMEpGnxAM83zQUELWswzm7z3QiJucUJ2ThXD743mYT1HLbAbUk91muACuDScFx91uggh11K",
  "key7": "o3L8KEhrXtHJnKauDVMoF94BAmPAixFCgY95RSNF4975ahRChA5iA19LNN2DwGpwUBDJ2r6uyxJUmMWemGuHscD",
  "key8": "26HbTrKXk8CmfwtaqfMudQVWfxtmu7pDMkYuhgm82WTtwFwjnSdtLy4ap1r5xKRTbSWKqwX2P6mu9QKUjR6hmGRK",
  "key9": "2zptbnsk3eQQsiALCoBvjbVUPifztNFQUVLqZQ3JJJVMuXKnY26U5oKXUY2yL8516APhf1escB2um6prCBc41r2W",
  "key10": "2oVfRG3LBQXkvnQSmaasLScwrCXi4WdTdyLpxpBXiF3HU99k2aeAJHBwDiz7vHpedwCCs8FuqB1kMu28MnGdiLUa",
  "key11": "641Pq8bhWBvhx5QNYt8TAXsc7RoAccpYLFtpsfaK81i8dgqxgtv6D89JeZNng9qW3efZod5eTV8wxSLCYkGocE4S",
  "key12": "DXUYC8bCxTpJtGy3QJrw1YyzegGbThCtAyVx4k8xByhjkFPvqyNY9wXfXx2n2tfvpBG9o2atDEhsjwEKtLnZsx8",
  "key13": "4YUngy4euFHmxzmERcppRfQ7ViWaJEzQyPzouwmQh9knLphfJetjVd3ApJF8v6uTS4AZBiGn4GWwcSFty6s4Czvs",
  "key14": "5U1nETThjVZWJRJxu2MK7WYgvU1R12ZSYvNqmZhvuBj8Hg6yXgYaKWG2pg9QwrJ4J37GkYwXWebnPju5sbWASZBC",
  "key15": "2wt647yzN6JtEmytpaBbL5DADWJ7UeJXLXdYHtaMgEk4xyBwMe2eAZCHJWm5umXpoeLMQmAkmpTcQkb2yyLixDrm",
  "key16": "52Qv9rxb9yWWw5fKSpzqZn4V2uZiRaMko5zKgqVU9tzUhzT27jCAtgQDGT1u56i3MjQhpuU5ntHJ6tD7fUUpgJuq",
  "key17": "2r7YEcvf8cbEnVdbcnPr3hi95JyZbksN364K5ZC596t9TPx68hDyLJLHbtFuncdfTKK5fo8DyHte81HANST6hGFj",
  "key18": "4BX2yFHR4q6Nhm6U5GxCWUXTQMnQyYEGLBRmuANsLt3CFLkjJZ95kH5MjC74wteYpNdGvc61ksHpJ7rdiUTN3moA",
  "key19": "4D2eMsFTyJGazwjyvieyKqGQRvHrxLaiZ4GjEgd3baBS8UDmQckyKfEkQB4ydznJkY9PXwkPwrdQQD2UHSHiWwkP",
  "key20": "5216Ank3KvqN95XTZLDDnhBeowZgjuzSbBS1HtYrKpM8gvDQD1nXMdtFkbARAQQm8MPckEAnyVAXGSLVxy9gBMQq",
  "key21": "39TBBQiEDMbH5aWsMd5Zeh1EeE1tkhcXfrm5gYmj8ksdhZXwAtF3EMJraV6XfjDskU4eszQUcCj5AQT567dvq5zv",
  "key22": "HUceFpvdyThx7TdSJzSn4KWSGewENViUEBKkfs7u9oHNXkV5NFpMgBZYTB4LhQvvWEiij1HPP3ytKWAc7qrv3zT",
  "key23": "2vJMq7WQF9CRDcaxW69bM67gY8BSfZzqJsJx3cHHTz8yMkaH2LZDbmPEYmgipMvVrotvUmXHF2WFHjYBiJb8c5kD",
  "key24": "5TMHFgq7UvkqaEUT58xMAYt6NyEzmSrPEfV8NHJZTWc9RDCmz1bTjaA5M31gA7nHRBCHn5opcg9fTM721XF89Ci6",
  "key25": "Et9PRsAn6Qzu28nx5g7utkVr8Uv9sNrWrqs6PtEmQWk3LXXyXksfWSUy1MekWuGEzi5W5XSEVL96HHWRaufBPXq",
  "key26": "ELUyr31iSLHiueMpY6iEw8H6CM4h1eW2FUXsjBiBNjKefiuB82VprPRqheT7SqSTD4XWJsQTJ4xMdMihQQFy3We",
  "key27": "h3cJvMauSm9HNPkayZhSeHrEBfrNA4vvar9fCXoCk8bm9rRF8qL1zLYfT2oFPWMx77oxFfmTuTPTeCvtab4cjjA",
  "key28": "2FcgcAfQkW81Tt7my2j2RgD6Ue39k5eEGDDprshTcSpkbxsseBjWRdVbUtCorg2vYR5cdB3QsbRdHi2nGMMUjy6Q",
  "key29": "2zH7eEsjFHoSANiwdJdkX5QM6VkhtrGKBnCKgjfci4auFfQHeQZACNbvsr64KLS3Nh2AZA91zPv5NkeeVwQSyhrs",
  "key30": "4QVEJDi2Nmpb5LZk9YPyVYpkSzVKVVFerKZeZ38kpqJWbHBaY578FGuJuWtzvTUqEe6st5RbafVd33VsdQLgboUX",
  "key31": "5jRw9ZnYh5yptXGxfeYWaVB92yajwzLHSY8z25NSSxzLfkPAJyeW3MCehhpx6F9B8Gojkon9G9upR6Lgde53jnPK",
  "key32": "57zpj6mvyeNUi2ryX3FZrh9xHCXiV72ZGr2QEJxYoXNdpjHV3c3HypMycYqjFGtaZJj24JgXvf8zbEgu59LpuYVz",
  "key33": "5wubgMeNzjEJ5ArM18zsb8skjJJG3f1FKAKo1cnGCqSeFwk5Z6PRKd61oaWpJddSbb5ZzM7sPAThpFWNNMHkpRv3",
  "key34": "5mmqcb2yT1fzTNsHmaAwRBybNPd4G9C2uPsMBdRnUFn7dKmBJFM8r657XMgjo4v4DcyyKnc3nfzj5X3EkX7C5ery",
  "key35": "cTJaUatfqEx9QffAnNvD2ZQGHdc3thswba2UjaYcFK6vsvWasRwTb2v6jA9doUjsSRyx7Szr1z6f8PNuoZUmVJc",
  "key36": "5bYRfZ1GToKvoSGuej7WvnWBdQirYq6Z7Bn15n5ZYSKnEHD9xkAm9QKCygTMrTighSZDQj9TnAE8pPFECtzNtNwa",
  "key37": "5E5hiBo66zsGFbVdbCuz84WmiRAQXUqqYmHu6mVP2Y134yyAvfM9KfUCa1tbmC8KcrKKAmGKQ7w7XtqkjeDWZMHG",
  "key38": "3grmrAqTeHVe5fyyVPKdzRJwwn1rJpip6bPoXrabj4RmFu7sxYGUeCjy3yV5a2Ay4DwhkrbRYbqZGExteYVZwwPv",
  "key39": "3mBAu5cRfBXzjD6gt8MaixmvqgfXEFGMqyQRVuPHShaJ9vLxz7EEQftg9biCh6w8oakKj7Hc1eGaWVYAPJf7HGD8",
  "key40": "4GXx1Jp8zpDd6a1VEME9hHExDnbgpkrHvoiutGMrtiBZgTFU38ee6qZjmtKgEAHpZZPkiktv2Af1H3c58KbzHny7"
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
