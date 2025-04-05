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
    "2RdV2ZtboPShSg2soQiqkKh5ZPh8tF2yuWdmV4mCU2jKyghYQJNZivgMwoi3ShTJHnpTReVhLzaLWfwbmibcbrz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sksjbYwzda3mogVqrANYuMgpPHd1Zv4Y9yjF7BG6aNvy1FoGi5syHNpE7EvfHvyrKwVdZyTVpCjCCHGeU1uFWN",
  "key1": "522n11U8oQm2C43Xy4imEwnci532j4Sw8LjKbhzaqtrX3wEkWJUvS518z787awQTuWGKPmZ56aye4x5M5ganuKv9",
  "key2": "Uvd3ZMWhW2TcfQTHqwfeDxhYyjpdDcV8zANdmAYhH4BjYpEr265NmGa2RgQDDJSoMwoniBMBojHdM3j4F78rrS1",
  "key3": "iKTg1GH8kAfa5kcDMU8y8ujei7cBUoCjbPtLE3Fu2u1NjEa5DfmbPAR5cy3DV9qrS9PoSJh416q5CHJRA9crdF9",
  "key4": "4XiX8LBrver2jFqXX64TckM3xb8QxcFVDhL1W86fmJxBULMXp8FGKDtDConimm2T1pGXN2dvevYe113RgMxRMHJr",
  "key5": "4WFp7Waot1YGBW1JZpvnS8E4oHXGjqXE7pahrsHk7er118qFzzF47LnYX5f7tnMevZ7wWuvf5kdrcDk5R8EiptmK",
  "key6": "2tzog4cZahrbp1QUZrzHiaKNd6TuDb2honsuYTW4YDWqcN9vmMBfqgsTegRABVhXZ2vWYvbPaxtSkFbidas2Z7sM",
  "key7": "2hVSt2AdYxuBqKZtziUziwv61BLdnamQmu2GiTjLMRpAoQbEBF4X594wt8Aawe6GLJ85PEoRCs4JdXqGbjoGdE8a",
  "key8": "iRU9yVfvRmP2uDUkZJ1NgffcyyYf8jgdnBB1pTKbx2Gtiwh8wAs8xGEHSb6DpMWPePGz5KMLZLxRmHg5h17oGX1",
  "key9": "5Jz9FHkdZYxej69kWEZ17vBCPAPUqBCngmvdXNKMqzip4Qx2hjzbpH4EQuAqWVDXXv6bDkqHaHrGDTKoZvLE6yDp",
  "key10": "P56mg1UTt26wsxTW8shVu9gz9ia4Yi79EMV3mN98Lkmxsxu8mZh6gPgZvJpJrdFB2ofHfEwhSitXa4hML9QVjmw",
  "key11": "31zT1AHUUJC7MsSXU9zytHAAceHmqqYkgBMLagyMnYR7jyHDAMdEQyFnZ55YScbcqeybtUdud9CVet2Y2s52VhS5",
  "key12": "5DbmmAu8CburSnWvFxMRTZntPLGdXCBnfJVMckh6eYU93Ym52XQbmjp85JQUiARMErZdYW4XBzqguuT8w923V5yS",
  "key13": "3QteFTtGj8ciSYifEnmoHf4oFsRu5aQFuZA5UVdvNnNCQvmGXWEoXNCxJwMMg424Ad5towXaH3Usahu1FBJaeeEm",
  "key14": "5iD5JLV1k73KdmKG6Ji2Dcq1ash71v74Fye7FuS8T2unJ69tnxx82G2bDoUGUF1qweUDiBnePzrW2JWEqLdjTMTh",
  "key15": "2mH7TDv9CdofqV8FcFTJfNYw5er2tfUjWBEWNyJHBo2dCNfrd18jxS3D12LtNncBA7PA81eZkksy3pGMi26W74cN",
  "key16": "fkc7kthZihHkwwmK3Cz6epFNo6jUZ1mfNkP1LeNpXcHze46GQjVVn4W3t9pd4ftoQmy3PWvqnaHywUUP4JjZ56N",
  "key17": "3Wgkynz28iJHLmq2BxUkNJPjhzhyP547vzpiZAh7AabtMM7GWi3SNhpP7aMd3NfX4BrYhe4rNwWW8n1F8gbDCQBw",
  "key18": "2hmGskMdt3wL5TV8KVRYyBmgAGhfBH62b8noTZKshzHJfMvdoB26FCa6xoebdxMUknuqGxj7HkJUvsiovH6c85zd",
  "key19": "3UQvuh8SzXXxU6jkRDSgBZXmRKqYqiVgyGFRAu1aKn5152YFPsDed4QyiDydiBEnDQX14yWFi91sLovbANpU6PH9",
  "key20": "24NM3S5qMMBvRvStaivzzkMTFxR6pfTjHa3uhXrcfuqAB21UFQPSopTVaf9xAvL3XNPjGtG3biiqPQr2YooePAUx",
  "key21": "Q8Ar1qzxD2g5QRCcPQG1P84PQKhtKB53aZ2gUxSKThgfGgRv9v8nyJTugaGvKFh7PzEV7MEwwNQHpCPMBjbYqLb",
  "key22": "4x2MAtq5zCyG2B1m7NPvxAHUpKEWqu24sYfbx2o7fvFF4BrH5KUsNgHdnPfNUNiozU6acRAk9641MiKuC2QJUcrg",
  "key23": "3qp9yft3MWfxA8rpGRTpADa4wi5k3JeiEMtNaFw7cu3KZe14KBrtfjrF9tbTTjKA7HUUhDe3R9xwJV1bTo3wYjTq",
  "key24": "5HPryFEK8DKR2pweyuaXqL8YxUvUhBX415zJbWXYg7tZYq1eR9U2F9p3gQ6NTxB1cBekLEmS6C8rG2QW3B5c9Pev",
  "key25": "51fbakU15vG58mAmesZ5eF3Hf76Kh9YC91BHEKK315Cw2XB9TmPgefbPXGjd9SwYNBR7Xey7JdBL3svjQ4iiBSYt",
  "key26": "D8UbfR1gUy1z2RHTi8oLRMMRLRLs57Qsjb6DdN16mpto3fLoXHbFsteuuaRxKh4qoJwRQA893LDXnNwzX5V5Bh9",
  "key27": "431nHnb5qATVMwQWAGtZtx39xieiGNQooUHKv8DGde3YYmgmpayF1eFs9vPwHCGicyVDETWqCLmcJbeF82ZKR8Ta",
  "key28": "3AXW9qkjXUdtxdyTRZTakS4sdUdJhQtoaUamc3mu2s4RdrdeQHHUMLMYUtXvD3ANYRjLTyLhNPWAatTbBcm374Pe",
  "key29": "4mJ2F63Ww8A7zZ7mz4A5HZyb7zCsDfrayycJRqjr7Fz21eAEFatyzm4QgDC5fHeHcVEaa5XEB9UoTYXf8zVqqnUc",
  "key30": "fAv62Cxz2btfXMuKPpYWX7tdjNQ7jXnXiS3Tt9iEUi5fgHuVkuB3YvPimdjYzhrQS7gB869n3Dk89f96RBEE1qu",
  "key31": "4WR2RYXNpfYXPUidUZqVLvL36XzbjsMvHs65nmbnohtq1id1HakueQggDGFB6DnV43iZhGLtXur9fKBgM2Mpe9H8",
  "key32": "tj2ZPBqJF2cvzfyxzs85k2gj6VTCUyc4eiGsVUnx6QYe9rEUZCMP3s1KGRU5oCwHYC6RSA5v9zhfRzh2Np9JVPP",
  "key33": "nX3DWKPHa9cBTfBH1L1izBnXbB72EHkvWM48Mb75cYdVfTa1RRHvKyL4PCnNF2mUZWX9VJjFTXYDn8cicjY3sNN",
  "key34": "36kNrRAqzaLdB24cix7TWRGHU1gNRA1ZkHQ4tVq51yNJ6adW1pCLd1J9v8TZ5x4gMYXzRtpPi2bdCZQy2hTr6d9z",
  "key35": "2CjkZH14Fb1s92Sk7Yi7DxrZcnN9bX8pg5N4EfqMYhvBgLyEuK4ZePagMiHU2YB35eYBm1m8jXUzWULAB5z2MZV5",
  "key36": "25UCbhTewPW9eMrqADjPoTRpTSeA1V5BCaMQqXS2iUHHc2XYbQWCLF2ERf1tkTvj4yiNYHPVYMYzEnUDFA4UFeJu",
  "key37": "4VTXEw2U8dnryL5XV29kvL2GM6TGWS3LNeRNUXJSXYsEyeytRfAjJj4ijQgbTVH8wcAscSN1a6Dsh1PY9XJvwfMU",
  "key38": "3SJScD5cgexTed9Bf1NSQvfekCqLLWvPGvj2MvBr3Y2w8hRP9zkm28R1huPeT34icnzSrFDijrGmv1jBew5Hbod9",
  "key39": "4s2Qp9xj6zDTkPN6SEkbbKZvxpcSEJmJJ2wV8xHtPxinVXr2qEr6w8d4Ac98NyTgBkMFYoMwmAkVFbGsH689uZ9V",
  "key40": "9J8G9BcHUKzBLiZS2CvNkXpaBxULDXWJcGkTsDv45cJGaGtTjhxhdsPvbWxifp4TZy1661ikRKkhdhxcCLXBLJz",
  "key41": "44m55zqiFNpxB9y7j1PkWdcGrq7aJd47CtHFfQNJAGWnCEAsuK7ABMYYR9rEXa7mFu8fMjSRgrv2cgD3nvXN6Q4F",
  "key42": "4xqMzPrGgABSnKSSWmCY1BrPtJiPTs6ixMVazXVxbB3eAtWB9ufgXMsPWFcNpstTGobbxgw5YArCBDtu83BYfCUJ",
  "key43": "3oSQ323kDBtBap7shbKBw9WFavkxbUYG819Z7u1m4ps7Ud6cR1x1614YpuzF2XVRtjvCBtxmQaryZwC7MkBCkYTq"
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
