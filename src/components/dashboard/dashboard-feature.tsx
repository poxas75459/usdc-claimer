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
    "NkH1F7R4cGPUdoRC51pGbUh4oSTg6bPnVYruQiLg86MrR9Gui4GGLfCRhgLsAc3DGdKXuwEcebt5SZezjG5ibJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXu9wbtyQ9y15pPgD45AcnnNTun6Q5Ld6DaeWFPBd1AzpmY4dGbob3dpCRHP4sSVMfaUU7NFEBjmyAWr1YmKRiM",
  "key1": "bEnESorut5n4jhGsHW53fDv9J27WttJW6XVbckQhM8bhdMmBmvm1VyjiedzrwWn8wbFrDdfyRJMNVJHcmrfxXmX",
  "key2": "47FEtMvPZKV14ed27UwkZQuW4VjMR9c8NgCs61JhZAcNQoz2RNviGXgtnAeNKnmvLBi6do6E67weEs77iULsCVB7",
  "key3": "3ERym9HKMmh33JivdvrM44uQqo7Miw9skWpc2A1R21HXW8LKGvjRAtgL8nSzRU3PVFQNckaK3B5wsesQ9QwMZBBv",
  "key4": "ZcFHDbxiBXk7uxLNXWi9bTVRHiATMc33yWW1NnD7ZtRmHWqz6p3wGrDDmJyTKftwjJpsucaGySvZxt8uqw3pV8s",
  "key5": "4ZKe5PrMNMvjfLtdTyUwtq8CHX61ebyr1Fe1rnb2iYPUbspoCNFjeN9dP4xwTGaw3XutR2nFkUjwAGL482zkQFLH",
  "key6": "xp9k8zh8EDjYAicV6YoDegF3CXhYWoL1G5LZR5mEqtVHsp6syKYxyWVTWdhyV5PeU7wZeacTUur1GXrJJAtti56",
  "key7": "pPNEXwutATbjp5QqUSq4dLCWWYdxus3xRUuPkxwd3CyptAR87XyVtMZtYAo5r1vwCRJfjZzY2xm34hvLmBbnufe",
  "key8": "5hAQkhQYS4xrJps97wQtw8NsbhNT1enjkk8X8wG8VZNdubcyS3ZhF5UYx8U9nArZDxwJD3d32RPMB7PrsVENgvoq",
  "key9": "3Ke7M6iug2yAXq4ypwhUBGCGK4nqUkpUQvaLQsnUa7qUwPc4Dp9wALbGwu54Gpm7xTiS23diQFasQbrkJ23r5Yqb",
  "key10": "5Lg8PSGYMiporxxyunRWKRdQ5CWCZoFn4KtYxvQ1gHp7HTVRSYidh7ZECpDxemU7fqMyXUk6hBi5i1k56c7tyXhP",
  "key11": "2njEtbybYSv8vWZnz2QmwZvKFKL2SyZybxfVaU8XrXUbASXSWB7u5pScvsW8cwukVeSNHcj5faTvb2Q6tj6cbcqc",
  "key12": "3xUjWcCi1Ga7eZiukxQGbcevAv2jaAMS2ax25LAvhAWUwwMQQQQDymiyAqtKxZN2NgpU99WUXmoM24ekwHY1gfqH",
  "key13": "2ATn3RRheDC31uLp1NjJzaUBUpCVscCsYtYSdyYEmBYYKZCfxcVzVBV1RKmonmwguspbHuQz3THf6ZZQewjEuU6a",
  "key14": "3fATVvKjZVAEGhCLbcB2RAr1dEpGu3rjCMN5jc5Htt3cxPTzkgMiaomx2brtdsjsYyVpyLBYDc7f27u8sDP64rp6",
  "key15": "28oXJNW2ctMzzCGJifDmea3Evg75A6NWLFqyHpeW1tuzec9WdeUBpqhB1u8Qm15fVSs5sEA1jNFLrtJw5v2HGfZB",
  "key16": "3XKkDWKwEH7Fzok6n4TV16pkzW94tBRa8kG2R8QShu1X4dvdvgBwrMjtiRrcc5sSEnTdqFsXCd1JVzr74HLU54aq",
  "key17": "whxKvbDfquxNdoSX9bE33W4mLBncQWwuPfDqRFsyfmKCjCxYzPaci5zDGoThv6u7Siy7D1LoW9XsyxfyyRkLP7B",
  "key18": "rCYvoCAe8na6sJjMyhosbyS6HmxoCstCmnRrHp8v1Wq2QPgMjjR42dn4vyvGfLa4rT15R21hvs7drBoPU4ZYMQB",
  "key19": "3kpFuyANgoRgNH1oUxiLS61PohwWDaeiovi8RnTHgTeXzK9sKNv3NgRM7FGbKio2SKCKojjqxB5bHz9vbpY1qqAm",
  "key20": "2b1tcgR6QHBB3SwY6okxLDi2EXbpBCfkDaqbPWTGXWREpmNXu6nYMzsT3G4tnKFuHueK9nnhvF4Rm24HoXBdCpQR",
  "key21": "mRB8DH1tB4zbGiY2wrdV4wRmywHLbceyC5KeVP5KQoJgB3LucHytvXTD1rKZGdwu7zHXQhVRtYfMwL9uspostgH",
  "key22": "usGeTxeoFTTEd796wiEbt1g6cvUYmMkZRR7DtYfqEfn6ieKk32zrNr9Deb3j592sU7uGtbRY6d8DSLrEzj3Lr5Y",
  "key23": "4PLWXQm4AHk2MEXbW8RmjX3cfPC5qepChTKsJDJyysj69GsQ5GArNXvhF2M9jbCWab1hmQ1yYAtFRQSRvyxuRnwh",
  "key24": "2tdbAqND7qYaVSWGQ7qFhRP2edkJeE2pgJ1jNgBC29rVy6RB5EkUJ3abP8j7aoMPNXjFvh1REyP8uzV7UCRJXeAS",
  "key25": "3hXxqDiG1qM28dihHZsbxd84pxftgKVMjScC1AUSvvsLE4Jar1WCBCbjZcG9Jjctjrn6FWh6uiqQ4jz37ibaqyph",
  "key26": "33hWE3Y8QThntziqzmxMQA2z8jf6SaNRDV7RXfGPceKQJKisCZbryhuVWAzfFsXEkoYZJHX8r3AKNzBv9s214JGH",
  "key27": "2JV1FCBSHsE9utxioPD8oyWSpxotdYZRn62seg6GT6Rh81D5x31fBZm5s4KfihmwNq1rWnS1rjkA97rkke5pKt5y",
  "key28": "5EVkPkrP292Uw742vBJu5TVBwE8ofKDLwbf2Ndf3BRJGufTQWhCwjF9iAfaU19487kxREpgDmpdFeecdgaYUtm77",
  "key29": "4pXH3XULVyTdgJmxWfbi1zRVQHyKPT9LkkJD7jTEZMzLYK7VWSZkpbqSyR4bXDSbjRP5dSoQQEsYTouKL9MLVgxo",
  "key30": "5CtjpuPKmtRWcimCUie2g3JUG3aqdVJRwHd3VYKWAA56kSSjqfmLSRdy6eaWcpRrAEkQYE3tqZUDm3LJcqaz72Kn",
  "key31": "4KrVTE31tK3xBAj7bToGvoG3FK9xBpQU7oF4pRN42AcqSsD3URHnK2Re8xxfBuF7fq4kAGHMD8KLTxFmwb6ayg1v",
  "key32": "4aaD66EAaon18KZySEkg9H1r3APpqxyG6CxSCMZ1b695v11Pj28uSyxpCsTvuFPLqUY4vFnn4ks1CSXeQ2cyu6pP",
  "key33": "3AtUsHyUbsQKVxYHqYTC6sgWqGQHbxSacaYe1dqpJoBkZV7FQb7NThcLoZgNyntbwy5c5F3jo5gqbBteEatgj35D",
  "key34": "2DDMUvKgC65ETkZxnJmDZTxq41312XZMYYs1FCDHMFfmLcgXguHB7Gh7Yk6SxAKrDKbSaJe43DWhKgQhFHTuJp1Y",
  "key35": "5aPf5Ge1ZNpPJ3yacXeZWaJeSWFVUijogn1TjdRzjvrjT8vsyAx59qcdp75q2HQ7f7SgS9nh3oe9GZQn6YmSifif",
  "key36": "3TxUzpoEThejEBD9uPJi7XiPwu4E3CSdfYL9eyVRAEnYKsyTsaDh16oYm4rbMhBuSWrDvVTgRJbzQiS5zsj6hXfn",
  "key37": "qAapX8RgrPb1KQEG4JuXcniyabSCbMm3rLMWbxwvoF6ZgC3EZSgR19VLyoHpywZQ6Tr7KzZEbLnoMauQrw2x8vs",
  "key38": "2Kd2zjjkUykGfFNcw3BfAK3JMdMZZzgWyFEFGGzg76eaY57XYMtdXZoyFzWcub4zUf2gqPHNp3i8mSMttNoedHww",
  "key39": "4DfWZqqcCjuYNRvEMF5xvmCkK8nBHszGJNnHecjnK3aCuwJQmnPUALGs7eucprjZkJRrkWiE8Qg4QEq2cJUGbWus",
  "key40": "DLuokDSVnca68XN4n5pewScLNbTQ5H6PYopUasw3i39y9KTCLLWAhAYuWufdfJfavAHYgW2vVjpEchpQ3xGzHXm",
  "key41": "5xhRt7yVYTepwQMKJCwUxp4wzezRZHgk8bg3xHxzvs6tiTxUgA3idTDpXmZJgdkCdsxANAzzvJoWYWMtQAfBGyX6",
  "key42": "3Bvt3skFm1ma71nfmjjahoahW584A1euWujWnDqn8DvEEaj7C7iKL5zSvzaWZ6rjhH7zuqK35Hmty8JHVh5QraZs",
  "key43": "r6pcBzoDrVNXYCy1Jt5Gp7a8YT4tdxJ1UHxJXzSuGCmcgw49fwNBsoGUTQu3gQMXCWWvDagU5mSRG6TNDv2Czjq",
  "key44": "Wzcdh4Jjjck6h9qYkh3Ac5KHw5Y4nB5xmtCTDr7rX7Z82a3c6xzKhDy9u7SLmifmCrr5AdMZTMYXqbZ8FsqAWKW",
  "key45": "3Rx1vD2xEadmtr67KjmjVrJVfNSDLW5Uf8jR2UNb34CXgCsqMmtsPoWH1cWtQBrXuoj9PYvSKav424MkZ4PnXsrQ",
  "key46": "4pda34w48FrCudtyr4S3FBEj7x4scuWjBZRakici7fL51ZgHEK7LWbSCGM6vTqzs8uXQLNTQHZnz4EedgjqDGwNF"
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
