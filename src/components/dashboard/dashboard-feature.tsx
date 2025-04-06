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
    "gLYuxnR5tPNuHxwodgMeZEiv4oU27ZVhbhsmdRR6Fx6VvKtBn9oZbYtVSoEDpWN5rFu7GLQVHLNqd1TxTw3XSgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tciLAFQgvSsZBU3zg7qF8eicWHFp3FJKLeVU1ui9KeDQVBVND6vr1H5SsAB3sgy6BoVpdo4pppwe65ADE9jB884",
  "key1": "2UWGPdqbw4nq5Mp9aNYzVhWAWctyM4RAwvq1HSPBU1byTUQvJUmDiZAb5cvHLydqZL2bYrurGLAzwC3n173uDctX",
  "key2": "37Xfn5X85LAGSQNFMsbfCuVNJb9M8Fyk4WmENercKwycJQhgs6Yt7R4XugQxEqVBYVjMCNsvamY3oFKtDPgTJsUJ",
  "key3": "5zSxDrxBEvfU4MYmUi9vSMzSXGPaiCR42KTxz7ZiRDATbbe2j7Rguauc7eFPxgs4B2bZTNoDRQXM1bXhhkree4MR",
  "key4": "3rGcWfsCBuMz1Gs2pSy76qXhb1YMudZ8b1dzWwRMNBkMTJ8HbDh3MRb1CUyYqcxheiR5scR6tXvEBQTDS4xK5qUD",
  "key5": "4Rs4vLMDqYsD1nWFrtcYezYXj4XmsyagKr2yNhRoNMdXsVqkAvtKu6ueVvEEVt5pL9YKSxiPEwhzCQbUV6zeAjj8",
  "key6": "2wTNb8nEeSUGnupNB7eNzkyt3DGGpALk8KUF5cNtSM4Cb1DrD8gfQGJU7dptcLUXtHpH72M7MYePmBW9DoTHLPVV",
  "key7": "5A2JZ8Y7zJVM2WEK9yjRgfEFneTeu9x8SLWRUKfiCWn9o18YKuLmWP9U32NmmSfPryAuiem35yKEWhRSvj37dDBC",
  "key8": "2VNssQ7YcDhHoHk2jN2HVEfPTeu2MuFvCr2XNWGuCY3qnkCo7QcNXyqiFvaki9mny5qokM4b4vnGuDaLPoMfVq19",
  "key9": "3TvkCkLqBAqZxDCJmAa64A82p1wNEb2z93VFaC57hHceRxMGo1kZDyvjYUVxVJnYCJy6R6VG6ES9RFqhuJ28vN23",
  "key10": "eYQwswSqwZGP1aSbJYRsfYBU2LtZpDvHeVfSyUfsEXaKME9TGVtau8LDPWQRGHRLCuCia8ppHeHjvcu5SAai9LB",
  "key11": "42Z2v2LRuxshFf8Yzkex7N3V1BTHX38ngffbmgE1XfwHXvkXHjtN93bA4DR7BDC94nQ3D6BaQj5eV9w9we1PKQ7f",
  "key12": "3Jy5ozordz4Swwb3R4b8yh44tkqCVprjxpnAsDXQAPsgTDYvP9p4iVMzPk68fSZ3e42eAjN19nKGKFZi7CvdCTUJ",
  "key13": "4zJeRWLCefTG9XEn5yeHLDS9h1z8yQS9byEa6t2spBNiMx4qR8afL51dHrg8mYkRuuYAwUrJ1U6t84dq82ttZpaw",
  "key14": "3daTZepcHFGqn4UfNnJWNo1XvCQtPRTsBN31c2PKwCSinSvtrMnX8k4FDmMxHchwrhE3yxBA32qq9qno7daAiVyq",
  "key15": "52KMT4Wvit1CUWBSm4HfEp1pwXqsaLUCu7PjrCEMTZjjFTmJPFweSEhCPJhx6tLCiv3vjAo1jAoQ3sTbzZAvZAhk",
  "key16": "N2Ftc8sgXw4tMxsyLsZgcvngEx9krtPQiWR14QWgccXXEzxxzn7RHRR8i5rH41LPQN9m4He4DnPGT75LnGyUxGt",
  "key17": "2EA2kRtCy7rPW7SRLuCdX87BujBZtTj5bsQkXXbUMqz9kvvL6SGxP8NdpnjBn4HGMr3WcRz34Edoe8EgDCnhMs7v",
  "key18": "5w1yTkE4Xx6GuX3Wq5c8MXTaBKck1mcUyqyNafHxPK5wKYgv56Da7oTom3LLiCLzmHphyBfcqUuRqxW3iYRtpHGJ",
  "key19": "39v8n8Uom6oor8mdQQHc1TEe6ev1dqNi3txC7htCVj9vdpR4SXjRWYwLtUS7Yd3PgxG7uYkdgEah14H3qtR7vtj1",
  "key20": "wowhBpGvhS8rDTofKujPGPHvnU3Yucj1j7hHoJpmZZve9xpnu9xFYNe2bFjPN6izzLkL2gHBVb5mbji74x7rqzD",
  "key21": "5PbyRRGGRhPvieo5QK8EVw2FYe2Z9TMdCLvS6w7EysCQgqCah3NU64fB8SmGqeVARrEPmaQnQ1cU7YFn3RiwxQzB",
  "key22": "DwUw2aUtTPKSCSPXrbnSCmK9tK9oaKp6PKwFVZrQDUhTjdwm9RuEWbdFuuHtaEGtAf5dxR4A7RyMu77TFo17QM3",
  "key23": "4cqziGNXXAkGPTcCZAKECprowbsKSUTVY9x9FbaRUUKyAci8sw7bCdH41RqcPCKdqjKWPDgZnyJS8YFzJH7kdLL9",
  "key24": "4HRXjj5d2bm4GrF2pwwfiw27XZuZvLTodK8UpgD5nLNRwQT75Qpnag7AxD8TRgKn2AXhhwoCSvTMN39CAx469PVN",
  "key25": "4HYvjDhu6WkJXTqWdvPUfsPJS6nCeZ4ejKkJYuWPjxnQzpz3oGhUEVi28L2cNCBkt8dH76JmU29T3PgXWMhQzFL",
  "key26": "2tP6ZGBZQXfmoQxpiHfKDxQUZospzwYojeHKryiEViMzc6hJbvELg9udsWcSYAGLiUDHJb1ARTAD12craQgFNvD1",
  "key27": "2TwKcnih8HM4MvVj42JBW6nXjDbWNzS3po9oomkMcgpdgJp2FpFGxCcxj599hDogpibGtCHE8GrMzAWq6mmki32",
  "key28": "5GW2L1RzcWSht4QEuzXuVu8VQJnWMYvN8vG4hZsT5cUbWVhzKaNEkPHWczV3pZtNCzN4JxbvQT8qDLKh9oZf4VrT",
  "key29": "APKBp1k4yp6QHipprAjxYoPU83DUrwXCQK7tFSTVQnSdeLf6GsnsHKzGk1XChYCpPXuTUURYagPtq3KNXAsaKqx",
  "key30": "qtrZ27NbUCBYFWhwLxnJZx4g6UZhaxi8oty1dAtxbTMo1TJD3qCzyA17BzK2E1xdGkDvQ7wTwhDdEVQD95owaza",
  "key31": "mHSUkBDvrcJPrLhRh4W2mbFUkobNzZcW5SzXQKkxsVuNC2zHC7E8aeRkQ7BVCQ8LpBz25dfQxztpENhW5pooDDB",
  "key32": "St3PKPzJgpk1yVqfQiw8i8Vn1W9q9b6jeGjpwfoV94uobuvQ5xSkv1LBn9XKbyU8Y44owRyeUAtKcRFWokMA8ZV",
  "key33": "5Cdg7EBTKyfTnP8rwH9314wki2oPANsPR1eUk3ihPmuTYyhS68dMDJRkSxoQGwygWqLoRnrVVT7RfeM3KChdAsZL",
  "key34": "2mCmy5rJsLBmZpU8rZWwkxYtYGEkxHQRegmnLWLHC6JwTMMN7VnuQnQ8TjakWVKydxPG7VPLrMLZcA9JnGsJeoAw",
  "key35": "4MiAJeY7ioJ5oDDpncGGefhGJVWEve7guVwrCG2jQeqJcG6vSN8LuEUnKfMpccsXdi1mVbcsA4oeH5b29KcQwuWU",
  "key36": "2TRtpfWGbfq2eD1jukzY2JNjoeU91jVeX1n5Wx35zvFsMNYB9TC5eySwVLEBfyRuF6jc7Np14MxtFK2nQ1TejpAF",
  "key37": "2vFxpKxCtxfiB8bmVrFYhZPrp8mQgXF2L3LMKmJPKQYPjQGG1RZQddTu5cniTLHfmRmxoHYatvuR3pxYafoXokwH",
  "key38": "5upXiohe8jt8AwztJ2EjGdHwZKgdjV6ku8nyJAKFn3tYLkLAQmsNzBN2tjWNLZAUaKPCRwtN9sFisD59dus9Wxud",
  "key39": "JXeucwYYfgS17ztGg29EufZcHs4JkRpEFC8FvokCPNd8JW727BEUkfjozEKKpRXeDrouj6svnHsfU988me2LqpZ",
  "key40": "2B9BEf9Kj33UVCLpJoPXhuXr3tU5kzjcF5CQyHP852ZruSBM2nHDAukXDAvucLHvJJoatGvVAMKTBtYuL7XFQYdE",
  "key41": "3U5iQgBYShjz6YwSogFKiukQJ5CShhU5KxyXhpmUPsoPZCQ9ko3AamMawR8mYUREFQgG4ySNKYsazKjXBBrin4wS",
  "key42": "26ut7kfuWLhgo5osBQEK6RaGo4xpsemTkxDrp3V1BnByYeHjw2PMgBEz34rBGPAR3VkygTKKnjd2dNA2qKzw6V8u",
  "key43": "3DvvZn1g3MYqPxxKgn8RbunozxpbhWMbyXng7F75KLQUSZUPGRyPydeNstGFZkaSY7Wd1u4hsJqs56U3a2vYQbPN",
  "key44": "5N6EEC471s3jz7jy252er1hhPn9cq3fPVkTp9zLjGf8FqVVtJRRnqY3zyn7dVSGnZLN26b5wTy5rWZvz9TNWM6nV",
  "key45": "53tLKvksneGQwpwNskHbXKN2b8SfQhsxBMSuB125rwn2CqY5MwHEhWEMLdmRf3jK5juiUJQjQwC3Ph9RCSw3nd9Q",
  "key46": "4HqXrjMyAVdrBdSvPsdFqketQgRxe2dw1x6maSHiSwZqWaUivZUHxZAgoAsf76D1mSeMxtEyACbMZd8PvXPJA9r9",
  "key47": "3EmjpZfeKk8fuYM6NE9dS7CAviAZ1HXtmSd1k9KcTfoGDEnLQaQ4N7i7b6YL7QxHcVU63BMNeEgzH6yfwe6yD5tK",
  "key48": "4nhyLQSzw2A436c8KTLfyqxhUFHBi4PkVgend1usVnp71f99sGUCcbu5Z4mEZ1Q94Qg469qWKmKomXwpZihBidgV",
  "key49": "55ZLXW4ERjZVJsvPpzZQgkMchKiwro3zJmPRQSLnENGEvsPmeygpV4dirFVYgGe1xeMEw31bXvB7gjeZLum7y89A"
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
