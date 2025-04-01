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
    "3UNx4iXiCRLTopyDcJEUE9drThBAi7KiMYhCSSmV3TncnUtYPkAY9uCeYDekqWM3TGNGh5rFgEv6L2BoTEE4f3M5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385z5QxcSTZ8iGnNCTvyLSgYj29AJEEzKZwNSaRW9QhAwbs1r2jfTTDLVLVoX59XbL4Q2QbWutTkV7Kb5N7jwSwX",
  "key1": "37ndFBXKudnT893PLzWRUBuKZuGWpXAVkz3AmmvVgi17BpbYrKqsGyceQrekTfzPX1qpmh9cd8PttJe5Gg1x9aVL",
  "key2": "5xqxJ8Ps3mmxFLLh9xk9q4wgThZUMTh7fiqXLzTurqrVRxcjWjzwVVkBqTp8HxpGxu8GLmzpGnwkEzDSggy6Gep6",
  "key3": "5CWSJF91vSu2dqEKnSyGTvvDR9Q3CBUxcvZ548qknZpowXeeviP9macpmm6qkeD2Zy45SMZasW4kvYUcfa5huFYW",
  "key4": "3vitCFVK2721J1GeV1qBuSFrvLMRC2zBHmDdAqet9GWnzRtyQvV8vtNGzBqd9eqhRuTNrWwRYT34NrE7HZmTkPhr",
  "key5": "4i9SDoFveNspytLfyo2RHCEpwp6yUe4NL2dxh23tTmUCMTjeFStyq4cXHnH4pVEH4ghvc16x4RpBQCXQoYNSVaNe",
  "key6": "4ERyhywAy9o35u2H8azqjMLitnyqMuzGz2efqshWLEmjocf9VjBUYenXGkN91pKCoCJoLa2SetVKYohGSuR6TK1P",
  "key7": "2ZNjZMA3d5vr79C758JH3LsdSPnpPYUPEG8dBZBT3NH6n6hX1VAuh3qa1CHjtrUaNieVt6AWrQZMLPmGvJVaZkAM",
  "key8": "81zZJ2zpJDZ1SFUXrrHYukMANKbRWHDmSvoRDajmwsGd2xXcLi3CpJAaaTnz9MFxbBMy8WAgeEZTvS9DT1fgixW",
  "key9": "NeyuJEidb981JWi1enSDHwdKCPY7emYXFTKU7GaNsCWSWnZkRg7fewanqHh7LdPGZQKuE41ra5FpPaotzorp4Qy",
  "key10": "38MuqHVtYKGXExaeR8gbw7h7npaFcoxvjdjhTZ745ANwdVh3TEkZeywUeGQaStAKQFa69Y23PvKVc74ywrjoTFK9",
  "key11": "5u7Bwp3fHpfkfZdac1rzrU5tqUDxaHef2sgdvvtMLey9eFDTM6kgtBe8cefamMXLfNi7co1EMGynptW3b7KkNaM1",
  "key12": "55j2h8FMaxKAz5Pyd8ZtqdwMiLpcUtk2ozakDrmNvTsjukWtaxGzdphhGV9ib3XvvbaxSnSsaze4AV97zqizGUua",
  "key13": "38aQaWWJS6dPKN9qMXZsS3P3KTYMcmBDKi4rDLnk8SaJb2DEcQoDaqz4ZGqz3Nb69y5Q7YANi31bEjecYh3SdHgc",
  "key14": "27ibYZqFJSrf4oq4u9BX9QVDNS6qUkVaK3ekzqCivCtMEhyc8DUXfdmEaziUy64Nafo14AXvACedfxowamFV6qYi",
  "key15": "66hzgTMaoLtyvu9qbsmYju2hGPup7z46dK3a7Gif3kznFaBsBTnvek1r6x8jQcZTj4GPLXs5nSvnSxvJK3QAGGaf",
  "key16": "GRvbGbA1gsKJDX5wXcuEZTU6oEGZvGFC8NKCTT843yQgbkPbV1DabcabVMEW35FzNkaoU5RYMMde9G3PkpDPUWX",
  "key17": "3ctvbstnjakLpXNxgTvg3pRm5zvVFRrQowsn4yko86ymhzczSgtVnLXuSU3oJCfjfXamC99Qrhw8zoyKpsmyGmAT",
  "key18": "3TMqkjCxP5Ac4x1mVFZddkX2WCyT8CeuGhKaAjLirkNGCV8QW3CkNhdwcv1kFiwo8Zs2qW2cGQVKy1PVik7naYNP",
  "key19": "3UbNe2qvkktBh4xiQEQHDCHPcfZrWYJweRuWbDtrsuH7eBDSS162tajXfYo9VQe5nyf4U62pVBkDc24LyZBfDM2c",
  "key20": "4bxBqDJS4o52SbMuNEHwi9DCRLUXU2dTg4SASvh4dMF5SV9Di51sQ5domN1L7TTyaWom4WaEE1uYtWnQGsSVqSSK",
  "key21": "2eWKJXwFzmj5kM5bvA7ifdw32rozEUt41Wy9nZJfQkj6MtUC8xE6m65LwMVNjsJT4JPKvoG8CWYq57mEtW9BFrfL",
  "key22": "3WU8wp2toZkc9kUrF2s3YLHV2xf1Py8kQkywW8Gu3MBgNbD2MZhFNBg4fB32fcGCN9jLFeKJmJnZfGrxRucDfLqR",
  "key23": "5V1afLsVHRrgSc3f3bfL9fTooujGPbTfCpDK4tzA8S2nuY23jPU1sGzer1CHJayobh9moH7TDdhBYiTG8HPrE2QH",
  "key24": "63htBGFnqAeWcDZovwRq7YCubjNuWsQqGytzMC9EyLJRoAndfghyj4YxTv78CmC4Hd5daMAB22pk1oU2fj75QSaM",
  "key25": "2dGZL54Xcqj3xFaNMpeTx77xh1yBEfQU2nnMtaNzGzMAUAxhVfmFYwYq7bwnj4VHsYmv6C7C3HTUqPRath8A16si",
  "key26": "2Z535Q4P1NzWiLWWfCwUrJ4WQs8VEiWG8yXzAEMiMGhp8FTqGGQF5AUUY6TfKBHg2oXGLZgJ76YN1QQwZeCQKviR",
  "key27": "2bEepvb33BEGvdS7SdurMKbZtRe8WpJgRG3LE9xVN7VUv7K3xHfLCBZWPVQzRpZVi48eQpCHpQDoGwbSf1pz2a6a",
  "key28": "m5YAdBsiLpbnWgUcuKSCTfiQKQAUZ8aP1raDRZeo3sTPzycx6uzepCBrmwHRNpu8XnFM2Keek1uZcdpX8AFvooZ",
  "key29": "5YDj5CBDmCz9oGCNQWsFZM4mtaPZ9NM1Jd8T4c5TZ3V7svdvs4YJnKqsnVfmJvr1ZgMz7vJ868Awe1rLF3SnKgy7",
  "key30": "Y64mtGhBLvoFu5Ya8gjzZZB4m4no1ZPz7NKpJqVUHRw8Czvq2L2V8wCX5aMND92FXPSD78dqyKvHTsaefS5ePWi",
  "key31": "4sB7URffP9fsgba5w3PMNhsGJrCqwNMAHgJ8JBeajD2wqoeQspJ6X62zb9W8ZmZqoTgbpkWUZCm3oEc6kXNd81nd",
  "key32": "1n7tzst7MLPVAXCC3XMYDpJJNCrmmfDj7maprw73TdDuP373EcrvyQV9s5vBRrJgizjavvnRynnaSucGVcwdTCh",
  "key33": "3MCMjVzSfcgChitvV9PByq99E3THRtdXN16ZuYxw87rc1dz4oyp7r2ws6R9cN4TpEBqvxbvaVDeLZQrZnE6ADUWH",
  "key34": "4vDr2c4pDMFnRdLiysRR8vvCw1CFPTUryFUc1yu2rc2FgAXv3zQx3oGMZMq5EyrPSMTjWKwNuUVVrXpgeP2wyz7H",
  "key35": "4ht8bmDaSetNrdQARwiTybM5z4b1CswfJYaHuD1vxWLQPDsmsYwUyGgM7Q16yrZVD4GDFSt1ZGTSP4nPP2prnERZ",
  "key36": "3Uey6sXdae4HNtmRRzs8b5vZqsGAhYiWrq6ruxJKptDLjVrzJhAs738ipr65jDCuzJ3xW6fHhVdxC15k9tdSdFhg",
  "key37": "4whizYWCeJ3UqPw49JKVaGtutfqHSEK5Gk91jw5WaPD7EVuhFRQi43N643QDcmvbpLGENu1AXbqhUhDavDnH3TcY",
  "key38": "Qy3BdSM63SsAxExmzGDo4yDYn7dhejLzq6Lmq9BuMfVtXrCt1PgHSYeDtaT1oDdLNhHUPhZRxanmavBHpKdntjH",
  "key39": "4qXQvwdZiwDjoGSZfBT2HykCUZjkzFCaGNipTbKXZwhwLyHZU8cisoSp91roL2A5gL3V8W6cvDq8MCW7ay9dLJeP"
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
