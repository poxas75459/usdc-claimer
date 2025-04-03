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
    "4yLTs2P74e8M8cqc5kPffiCxA5vGuFEUmd5kMtjixHEp5vAbtocmc2eSgtosA5i437mHkKwJ6pdkSbQoDEDdkyYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HAAoD6ecR9cSMRsWXuyXqEWRXTmoFukM48YjumUxRe1CPLXUTER9gwiRxYcffBj5NLa4ELcTqF8QsJgY7Yb7PuN",
  "key1": "2fP8jYFFdG2SKdQoQQKxSxcpiEBfXVmTiTugEUn8YXAKpyNA87dzczey12oqr1YsJor2HGdvFw7p9Yw53MF8vj4A",
  "key2": "48VVSnFnbi13Hbr2qYGFLk2obbCQ6gPJwpyKCZxJHLYbscrcPPiFE8bX9EVaj8F7CS4RscSEXPJcMURKgtDCJPY2",
  "key3": "4UahhBiE4fa812EV6zkDjmLPd8ZWo41odpShUyS6gYUTpw5PER9gHBzGhJT1EH5EJwyFjNCsUvx8qAhM3fWMLqkj",
  "key4": "4mz2NYF9c8diCDy3n9BaQk4tSenhTP6tyXMv8SwQ4HYLmpjspJmRGnx41q4KC38BtjyVWgc4sPtSnm8mgdbgeBqA",
  "key5": "Sq8ANmLNGijGjqgM5WkCR3MVaaJ3Ag3BjSrPxwPziRfijmQpgWQfeVs6D7rNFqbvksVNuXXbWMSdHikjfzZmYxM",
  "key6": "23tKwxVDfccH9jbkiaAc57iFfLQDvKgXdVeBZMfedY8GqYW82kzwcw2DKDNxVj1W8gdgs9StqfWTe2AxRbFVsQ1P",
  "key7": "4UDz2abcBha5SQH1SFonEp1jHBYEt9TtHbNVuYj2vHDhLnS4vqcJSQg5QoKx47qAGRxQDKrwbSWi3fp1iq2PU7oJ",
  "key8": "eoVgEpGpz2A46jxo9fG4ppiN7R8BEaFDA9Qt5Tdav5bL9zbdREQy1NgFvifjAdu2k6m3YpSmgQrv7ABcYQrreyC",
  "key9": "5kwhJVZkZephJmpocpZ6UYFCYBxcD3hDDDKJH4SqAp7RRySkqfHMzcLoQokyXrKBHir9U7WyiQ6Gc3pHNK7v2QR",
  "key10": "5VVVJ7tJ943zmTc3kY294d4fddaCjD89pHRmhU7vAhUdU3d24iaPX4xYr9bjcPC8xKLFN6pZwaXXSt293zEZqV2T",
  "key11": "HwhYNiHMasYXiMKie9q1HTJixeTDC4mG7H9MkV8p3QjCA9Ep2V15edLkHaCk13dwreEBQScEaRb96F3HmvoSDF3",
  "key12": "NckHMae1SFd2moHxRHQikArEiPSXowJYqyqWVaRqswmgB5psDRSw5wqhWuy3siv7NsGmbA8GDm57Hpggx4V6rAA",
  "key13": "3oWzChk5bLiD6oXpDXX19A9fhccxoAJZFZMrG22Yn16wQnmKQUFDHivnq1QYjBH6ZZYheRh6F1JNKZuguLTYuL71",
  "key14": "2pE7ck9ZNKnTQPGAn1rSLu9YspanjCBMwhZLx8Eay4AsWNj6dpeTKwUdpreh5SUWXzpDuxQnExdmP43gHHw7qBKG",
  "key15": "2HY8abANqfj4xiPR3KNTpPnGopuWdFRBN4LfrHd2GRdgjCjkteT6CUjKWnQgQWxXEiFjK6w1mVaCKkeMCvPwekEC",
  "key16": "3x7JpjjUWe8uEGoJi8G8QGpqM7rrzXU4utJuCnvpFDRGVCysV9LQvJ9wf7aRiRK8PgmkeYbne1rdv3pwtwToQvzd",
  "key17": "Pj7cv6c5Tgo4nBEVKdbcejPu8LDN9idR2j14m2roe9hBrVh3dzNwN33bwLGwBzcmfHkfsWfWQcwTHxUnTGe6ntx",
  "key18": "4GN8DJJVSrGjcjkDENJVuz8KzNB5q7aqyYMqfn1eWrVE8dhyzntdnR5drkwM8Z11synvaofTz2WHi4Er6CRkUgso",
  "key19": "auLxddj9tp8ZJU6JXY4yGj58DVcpsv9RtD29RGCpZwp7NdQ4kQj8R8MuCftfNNgws2KZV8MrRrKDzyS6ecUhnra",
  "key20": "4xw5ERFWL1Xx6ae2guo2fZUXMiZKiAD22SJvxZfDwpco9vUHteuZdBQ3s61qzj4Gvz9sdvtwc3n6sx9f2wkqmwqh",
  "key21": "41R1DBZ7yJDbf6cmVAMZjwSJvoyejxehP333Uw6PVPjnCe2G1thTUVwpizyn4UZahEjrReyYKWwMUydYpnt6LGnQ",
  "key22": "3kRSVWe3EPVZduV4g556cHmaqtxvFukG389tPBj7ejD2wFd9HAugZ6VvQV6Ehmmom7w6K39xQxUeNxnD8zfVw7x6",
  "key23": "5FnsQ2UtHQN2GSbbMYwhcyFuXCDYCwWKCVKR5pzxGSCC5Yj7u68DXeNoQR18PMJLcyCridtScN1sBdhDdUXdJsAM",
  "key24": "3FhDo3SEsMixQFK6tAeqfhLHLT52idBdpB8ESSYbiY9v7nxXif86o2t6jnt7xZptZnocpJjfq1CvriANi7qYRK27",
  "key25": "4bxhYL2YfVGWr4bxv1E8Yq2tyiqUz6i9fHZC6vXKjs4UuscELiS5wV3CK41bJLeZ1bE21fCWW9yPHCX5LJdc8Ert",
  "key26": "3uxswQMdjGN4mPD4Goe92TuJXccTzb5qkTDsUyRcGboFCX2AuiWwgU7R9kENn1baVbUP9EQ24fKpVhkruhsNDfQz",
  "key27": "2MGon9CwwWKX6EzvBsenX21bLVw5Z3wGeU2vrBy5vnviXVTziFcNsnViCsZ6D9Gn5r6gq4XBR2rtWFXmkgMJZe8k",
  "key28": "3g384VXSQSxGAn959v7xUt6JNA2Y2c792ERnUbhMM2siG3JBhBySQHY2KXYDi8gV2bs3gMKq9d6maJShpfRo4cHm",
  "key29": "2c51hf4mi2BsVJcdkuxc96CpsWDgXCyi8SXedx4a9D8iPJbdY2xaucebY4bbELU4GjoDfSZfsyGtNDzShVCaNpQr",
  "key30": "2D6g6fQ5Yw8AhZ7SPoFFsZApJf5AA4mai3e5EBJThZsnwtMXjCBXmJetX5mBNv3zwVJATiMjXUZfzoprDpk5Hr4T",
  "key31": "4qFEyRsEwMuu4AERSf3Rf2r32esodQjyNBdCeEz6sTNbYrt1Urv8XsjyhEhYERzRBGH8x8U17etVxz1DmvnVMXxN",
  "key32": "4DEdYBA63jhpe8ioD7W4TD1KZ2bGLz69THWkUjT4sQC8QaArTBmrNGWnNiSZntmMxdj5JHwTJpVEa1xHppqTBhk2",
  "key33": "4xiTHwKrqRR2jGkY8TY1t4ES75wWVgzxhSBveoHbdDK1Yvth76dahyEcZoyCtVhfkg6Dh4iERNvwdydzMaNQn9bH",
  "key34": "5tGcd89zGb9SbN3hjQvfq235Kz9h4gByz16igaNNSoWzJ8BDh8nh6G6TgVD5oPLsPtGWSHyrfkVjo9bB5avkow1t",
  "key35": "4HwhdDhKGfjqLWKYm1g4WLvUEb5Ks4GN3FMXM4AqRH3ZWmFjYNxfzAFCu2HLFduWVHtjrVn3NPcFUafmCQhfghxG",
  "key36": "2eGR5E8ycNJ4QEbwut9tUVHY5oi1UuJpstws66Wczbv3ufczZkMe5hhRE9M8sjie3i7MY71nMMQpZ179cDHrZdLm",
  "key37": "2yxRCuknexWxkUCfGTruSjSjA7hP6MvsP1mRd7vk15U8h99Z9foyZBPFLcTaZB4KQ14X8azXvmMAg8DqmKCy3E92",
  "key38": "4HTXkAXRz7RRqiAbTgVQHXEuVRnkmS7ebQfjNwBphUCa8wumaFQWhR4Csete6WfbUoDddWnUyK7QDDkmR8pb1mwf",
  "key39": "5VhbfWfNfGsAAx2J6mWntVKJkFLz7zzK81uowD6ijLoDxvC7iBUmWhQtppDv4Tv9ztR11qRwqKJYJmfyrgBMLjw3"
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
