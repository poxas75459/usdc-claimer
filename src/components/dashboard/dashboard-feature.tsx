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
    "2aqqRzwAC7WFCeGDnUgrAajyMVbto3rw7VD6x5am6An5izoLfsd5fGfGLPSSUwuQiEdQ7roEEHx2LGm7JxRHYjue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cuwqiGKkuoVocE81cPutfSr7x3ShRyS6vhyoYCnJNDXQ6egVjrx2EZHodq324ky6yJGCRtG8Z1bvuJaQwMDSQfC",
  "key1": "3jbuuYE7ZtrB1r2A7cxgqqNzFPu2csg6qrjSYs3ANS2MToXUyL2UzEcrHADsQSoZtcUSLbfBnNvEXAPpcCkoET1J",
  "key2": "4UUumTNnPwBq8aHm7wMuY5NmjTGWcQCKff8cVrrFixCC3gcFMhZEeyuA9wXTYiN7AqBCaByGn2jMX1eh6BQ9E8DR",
  "key3": "3rmXQfQbtdVY3AYCGZvRQEN8AcbffqWzre4mEwMoxXwNmF7qXtvLqoy2EJs8RmNAvDbXimozKam1VmGD5hwLD1kn",
  "key4": "rNTibJAwiYrXFAYyrxHSHsuqQUdSSRb4wYpnE99gTwcVetrb818nsvLiDFbSByP8vFNkCxGsdFX8tkStXSUbBYu",
  "key5": "5bwqVoT7CDPDD8w2gQnCyB6KCNy8gLTsYEsymKiJnABSeZiMr8GrBtH1PsuzgXyELJm7E8MFNKsWzQr952EfmPFH",
  "key6": "3oQ1y33wcseW3ZvwwjZzTci1j2M7ZiQBZagKdKaViLGpgZ3u4dwWReP6LaYXvHzmAufq9E2Z9BG5XCSnb8KaxmrV",
  "key7": "4gsgphNYSYMe89SWQWAWaSqci3D6fH3PbnzLqV7PsZkop6Gjg7NMTC7nv7FjjBFg2RyNvEvdE7XmTHAtVvbVB9Qd",
  "key8": "2e6upR1YKE5oifJuwFcqdMRyfDStw3HGLJUcARqqttmvpMtngRk54uN6Vn7t2fay99ZMNBuDGDTnj5T35e3db1d1",
  "key9": "Ygp1xuRNhUA4umX1xxYdN3VRJ1CHkhX3hYvSuJHnqYmLRZ27tK9Z7orPjamM2nQzdQN5Uc3X2n1ZJoU42bq3AL9",
  "key10": "2UXjKr88ejRJKPSp4KG4reQQGWPt3dLwxWyfcJ37udH6NmwNAsCmXk9Q2CoFAhBW31CoU3u2QJ67a5f8SsuTqJGw",
  "key11": "2vbhttMU2gb9H9Fde5Zs15t24P5aLVDzoEh8FSdXrBuYmkwRmT8jxSMwcsR4Vvb9q7squTFxEGhrsWqdnStgqZxM",
  "key12": "2xVNZTGM3g2DuyXdzqLGVcUcommt79UmXfuBMmNkij8A28UdZYg64v2sj8Y9raHMKfmgerkTQF2aPFgoZhL8MZw2",
  "key13": "4id9FbVUPNyqkuCVhugYDZonn5sukQpSDLqxaoatFKsaPgkPtYpPvqYek2j66xrpeTHKRd1x6fo7X5dnnU6MHeCY",
  "key14": "2wSPFg9LHNFZcn5CTuHqumyaRE3jUR5WxKxPEoFLPyaAy3k1RKNwkqKBe85rDuMUaxRnBL4KeUYdVc3E2rFXg4e2",
  "key15": "5JY8Dtg5KLiyBjVKKFsR76o9uPmGnLEuRU4QrC9VXqbSbecj5zxSmYMFzXamCTDCsnZdmcmJVwMv3csfn1DSioF",
  "key16": "4rtuUjVhroDxmXFHA5WaBwp55EyAJsWLXBvmhhaJs9rpRs8nAkbbtjLh6sNAApE4wUcNDDFzEsfYTinUiLcqcQuJ",
  "key17": "5zzAR19emNVF6iKysSZmodYTJE67TsqrgxVMDnmJYwLXXCTYAv9dsGgnofVtPCWx9AVdNUpZivXSP6KW7mC6TYPC",
  "key18": "4b8THasPcDhgbueNA4LtskJC7FW4TVvxjuM2iAy8EBMh2Ci4hJtBV3JFuhtwuPKT6qYVprLc9fLzawiuDEJiya2f",
  "key19": "673SaHtywifaFLVVXpkmwZ4HbpG8ZdVHgg35j5av7aG5hdgps1ecqrsGmCe1DTRvQvFZ2efcvXYNxw2TDBgSnNZ7",
  "key20": "9N8hzqErT9XcGFaCckGDNP57VQTZTYTYNPMxSQYg1z3Fuc63Vg1h3kJTkLq98autFFg3c8rFb3Lr8gp7adqry22",
  "key21": "4EAWJ9XvLgLQJ4occQKQvygnqgYFberaytNz8Zt25qQLiwTr7WdvEPar5bLMx1UKStwrKBmFSUvnxwqXKAwhq96r",
  "key22": "2Nm7BsKSsXrpMCb5LGkcEHgqd9wEVHyGN6SY68gZdyt5uusPFPFie45gNCKW8Fiki6NqUjxmUmPJPYmWiuPjThpM",
  "key23": "3ogjT5peGctfimxSXgnb9pSHGrKb2HxP2yg7RFCYG1VsjRGna5QtztScmPmN9kRyaZQMzTNKgGDWPKjsGWtM1TXK",
  "key24": "2abbRpzXMMcKT1L8fVtpoXKJRMgT8jHMoFNVBAYhngjEexESMX5bsp7RvV3VuQuKFrdhJaCQrbD55PUuA1MMh96U",
  "key25": "3c1F2Ux3aQuVSj5tw4Kqn1HqP6XX64ptsSkZwNC9o92n9sV8LXvQxwvt9FKiBjM9agNnCsBtNV47TNyDsQveuSAh",
  "key26": "oaojgxa9PTmLVsmFSZJRcsmZRa8Abex3Wv1cMkSuRJhFtVobqAdeQMSYFmQ7Zn9QT236inXTHPrXb6NB7XLRtSm",
  "key27": "4CyGXwXhPfzEFCHgBWqAYH4ibGzC9Zw2ZQ2SSQX8yWLvuuSXEvyqvL4g97xtC8C1U85SeytNMpKAYpHZPoieyR7d",
  "key28": "4LmRWaEHbz3beRMXiee169eaVSuRiGTEQyfsPtENgnL1yJ3Vke52NDiFxEjst3wgtvXvBjuzSMmVXg4gP66EoLnN",
  "key29": "3DPZabCESWm4qQdBcS13iPpDC79zg2vKNDeSmVhmVv2TdAZXBCZ5yjF6dvEpAptz1YKrD8C1pMrnJxscYLa7kvKh",
  "key30": "UqfhUQNgTmi5voGCun6kgBwFetJ8pesPQxny8emPcWKBWevrvTELxGwfgSGA6D6CJ6ijCcqLFhpUHDbfVhPQjD2",
  "key31": "3GpEL9JSNtUNQAHoe5RiQeNZQnAuTzR7Yn9QMwBJJBvwS1HG977tFVrFdm2m7txpnXPsFJiqvWsUxQSZbExsbKtb",
  "key32": "3Hu7NsPnxYfykWtUfS6LqcdPU48X58KhpnUgswa5gc21xkzyxgo6JvkECyefkjVNrasDu8Kx7bpiLTsAK3np1L19",
  "key33": "5QHhWxXWfg1X3iCXhMvS9V2oWaxsjXNHihZUQjqh818JijUx9rGTCj69jjAxsnTrcZ1o1SkUAyg5jqq9Ns4zwx7B",
  "key34": "2VLFZsA466cd762TYkykEucBy7FBjKRmeihog59kSzHFbdSK2vQmt6nu1eR1c3YnqNC8LE1e5ZstF93sMSnQbPRi",
  "key35": "3io6SNGsyzhAmsCt8eiiCmEJpXcba3tnxJWP9wZmdoAwdij2FXrixHtucgw9TGeEiTju9m4Ryfw8qRiYUb8h5Xur",
  "key36": "2t9ZntyGveTmFqZgeQCwHjb4bwgfWRryqRqKYZMvg9w4jaSdBrWAXxVScrV1JmLGpCUbxNpM2aEHVoBx79SArHAz",
  "key37": "mjufi2yYk2fdoHfi8JELENGH9tXnAvhY4L9awHimrNSGK1yk8mEAZD1cxUWSuWGCkw4cN1ZiUog8z5WTjUjBR9G"
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
