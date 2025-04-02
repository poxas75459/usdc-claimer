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
    "5ZcAGrjiZiXsx9Cf15zYyeNe7XsKrECp9fguX6aFKbVJZhodu2xaetEWAvsi5MsnhCRy3DErRieiyqZMFTnMJz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqqc33iiDb5NChU39K3zr66Nz9fgfJhzJaK5sCp2mebBbtcfQznghxjDDb3jrcYXioEW3ms6tVSTE4oQPzUFfPf",
  "key1": "5gmFuLXw68bYoaRWnUk7Q2jgLR8x9TuPSLfkWegAax3txtC2CSWdHASnivX78FYp5tb1bkN3V13wv8BUsF8tRCxp",
  "key2": "21Ae8UykSf5bug9cnjnCkkvCcLaGfvoXPaTP8cRfvHyKbmpzf5dYT1QKJ15tAxPHyzqFyz6bVJMnY3GsnVqGhVvC",
  "key3": "2AjWwSGspQuhH8Fu7vB4PpEtQh1uJfwnLrszMmJqwc4Jp6rDcGPYzoy9DcxsWNMhAHXmQgK9sjhFKvZwjrgbGooL",
  "key4": "5aEdtDa9QUJZDTtrB1GTNKieVrtiL2c3gFbaNsvBqoVhmud1Hfqej1Kk2FiGJXtcw5bVmt31US1fLo9574ZaScN4",
  "key5": "PvN7EZYXkWKbeMWjk8HvF96FwN8v72hvopSkQjkcPgPr6ZFpx3gVEisyFDixSqKPLk7yvh9VZmTNFnHGutLTtEt",
  "key6": "3hHpFPKjMhV3mpbi741PahFcFQGxmQteiRrsp7EqT9jr18xdtSEUPsReovQEskdQhZ6jetwA4gWj9bPMJTFL2B7z",
  "key7": "5SW9xDx1Zg55iZ6yF4fJkRHCh9Y8Vt1LuXHfu3fPSTYYGkqN4ZJFR3uCRu7Fxzm3iwin12X5ghWH7DeEijesBomK",
  "key8": "2z3H6L92yWdhqRzaH1TDuoPZrxRYVU5TzfG8DgJVyq7jPc9P1dbZfVcpc6Rfv8FcKVQK9wGntRewQwpDHmbceM8C",
  "key9": "58W2tzL9JA5SRa4kqPGcRmvsLGp616zh3zc7JQVPbupscw3XheCFmZVc1QejMhRCQD1aEg3iHg2xjv87CYQhKkRy",
  "key10": "2gy7NN5Pgws8s6mi9Kbrhh3bVP4tNd2kq5JedtspNHsCKiDAGTdMf7aNLM8v3B8To3gtB882GrurzHWYwYprapo2",
  "key11": "3RGPPMT5EipNdmmGWJiqxuuLJDAJzG3hVUsdM7LdgVrnkBfPGYbs5bgUnvJ58tZpn1ASZVthiJ8wQA6Ptno5gBiz",
  "key12": "3UZE57M2vweAd9WAp6xVFkHpswMfrGrcQpanmbrPR2eBjZNyYvJzzKEpcmdwtQfHijjXJLiDSC56YvX1N8M8965N",
  "key13": "5SE4rU4igfDbSmKyUobX6Mca17aXZiSFXDJH7915qJTJR8gtTzWeQwPPQsVDaMdQQeJ5e5fhwqUtgcnWBC1bn89p",
  "key14": "2koYAkJJrzFB4gLfTbwohXDt5LhjygEXNFFfhCSkenP7CiCurmfaCjxA1HEiUh1RoniD5f7UiQ7BLNbTuEaFUBt2",
  "key15": "8N8Rh1XQ1jQ7Au66SnLgC9FFD2ToLBaiHyST7L15zPGKERdnSqFCgUMsetbjhbeByE4khyC94zWGLS75xGJGx5K",
  "key16": "Xf7A8BoP7o6NrNJaZe3qZY8J8BK9wi9QA7zvhX5HJuhvLawZGif3kQGYkgHUo9RECXiM1isuK7pqSi2bSRYraEr",
  "key17": "5ipLMgx8M7XJiQjEzUfKShZ3JQZoUgcJuD374d4mLW4DL4496QM6LQFKszjPkVF4RYo2aKrsoXacfRjCb7VPTEBs",
  "key18": "39s4Ap2MwdfjzXjaECCiaq8htB4nk2nzTu6w2L3D5i3FKvrXSbyuHAXHP3o3tnzUro8uwiaNr6juwvE334Qz9DNz",
  "key19": "2PUjHhTCi3vofACBxji28Eyc5T4E7RbWFKuztL1VFoCCpWTjPKPHg6cEBDGiHjb8bmyxCcGoQ6HMiyAQwaZ3yoc4",
  "key20": "f42U8Ny2xxuUgW8b55dh3HNaosgq25qkamZTqMVVimFHjHHjp2rbuPUdHRokE4Uy61fgFZyeMeXCqRahjhopJep",
  "key21": "3QAubWg8RTfP7Wj5rrAbb2HcG82hHUzVRgrsSBBFQbRdoqakbnpj25BjPMMHPWtWZCiVMXf118owPj7sYQUgvT4N",
  "key22": "56oNWL16weYrHNnCGfkjzTmSEq2vqnSuL3VFYhxfbc8m2Tp19pdE1ZuXKxh4QH6bARKuZancbh3iEgXwzNpRBhDV",
  "key23": "bybbcD73XsQkJNcTY28nDnpCuzj6amJe5CYX4uCLnRoTG45LqcKLN2WVUcNRsjoysP4FNDNRoBD2eo7JkmvE9HH",
  "key24": "oJc74USikx37ziYmC6RWRTWbQRP7Xpfq8SaLTcqKAdgoN3zu6Yhw5famtZrA6whaUqhiavxDzTRNvvFQcfyqLNz",
  "key25": "3m6SoYBPmVmCMNbsiWJYBWap7tkK49JVLPdfi6rfy2XdX7xHnUaQv949UDKCboVT4Wi1NzGq89vNozMK1tW3wJ8D",
  "key26": "4B6KgGKs2SH8U9vCG1M3gUFXnRE6CPrXSmrpJEEdZAWFUUmhqAnTNUuHJq4myqiTpyzN8DpcggbjUnwcW8r8CByF",
  "key27": "3y6hfdKQ5r8Nsm9spU1e5ThAQqXh58ktqEeNpsJ22THrjSWeairpsuPPCxtJpZZEi919RwFx9ikLResUYK7VKkki",
  "key28": "v3o55bP7rrTPLWXm1WYSH7mNaANAegsDesQZVmG1tJ31qpJxSBrnjRTTYWBRhqxrZKhxP7pr3yw6D6RYhEhMwNS",
  "key29": "5P4Y475foaVsEVBgQtcKqsfWzyeBNHDcc3zV9p2vtPBbZLEPoyfGWFvBcUFctShGRjaS3KcDTBnmvrbPZTLKKGwb",
  "key30": "UNnWjms3N5FPK3wr46dgKzhzGmc5jbgpDRSYqN3gFLMrYTbjtvnGXe4ctc2H5Vzk9guPnQS7FbA7JXaKtULpacQ",
  "key31": "2RjnZGKoMgJRRmPj2fCykURQuMrstFUgQW56i6rgtsprmqNecNjSTbhAXst3imkrsGMgPhiUHHp82D533kR694o6",
  "key32": "5pgc5D1HRX6seRW4R2QuZHGaPM7oFJZwHGYf2PvQ8MfWNc5fLhB7iwrr2ERsHEmjMTuZS2xAyA4EcKTUiGuQZ8oH",
  "key33": "699pVc9a5vqkUjRrM6PLfiK88tiou75KSaUkcFTwY8acuVZdaLrfXMtxC8X2hZSjEBfoJsrwcvtPy6NXPAedyVK",
  "key34": "4JNFPDGzvCBM9ZPCAFZWTnbBe5Qds1mQUjpKc3Bz5Jj5AdgraFqajkZFYq3d9mXYCNmKawDb3Nm1Eja2cfsNx9Yx",
  "key35": "3Ztaig5UTinGdaLMGFry8oA1JtQsMg4hWzx8dGAo5F5MSSvzMGt1iBqgMLSkTrPXuuNU6eSVCNzoBV8gUUz6icS7",
  "key36": "2tsFoxVKUxad7Sx3jfxLuzLh2VUFwFUsG9xpZ7SbQ65Kh5ML4wBr45iqFs6fnPA41rbYGbiPjkCR8zMe76Yp5BKP",
  "key37": "5b6ceG7gqHbCnfWQUHcHFNuCW1gSisSRa6kAQ55dNS7YknQ7Sx3ALSaiU7VRcZoiUZuTkdwGfp5YR5crLCDT25DQ",
  "key38": "22vLPKfcJgcgrBQCdytfBRuc5M9U6KGAE9rKheNhJsWeQ1RYv2YHgwJcZCcHoy7smJqsUcXzLRdbFEKGs6g3bioY",
  "key39": "5fes6Nhw7hy4exmCiJsqUXgFM2jHgugVk9GFCLncKc5dRsr5Rc2PLgYTn5PysodGkESRxKEg2fhoase542cqBHdz",
  "key40": "3rmLEPrkAc5AGbjzeBFeqCUACiG97xwyZYmHL5iuaFZJEAHjU1UPNTxnKUMZ5j1C89o1weduZuVTy3YkqrqMohk1",
  "key41": "2NhJDbVvDHVAKKeKVqz6wxkrEqYnGrCvTyxatUvHCqeqexoiYnCcBmDagtgPfTTJPvM7QKEZCxVKPFtbaAnuo7bx",
  "key42": "4meqg7ur9mcHGJ52Jfvo94M2YHtE7Q71guD4aRJPYfhysiQe93WokXevMfUXtRfDNst6Htn84NY6137wQd2RoeC4",
  "key43": "nsqEL9EyhfDk9ccLd1phS2WvTGBbkAVoczcaUabt39us898Po5HCrcxb9YysgDLGM2iCbiCftJus1wB9pSqeqyT",
  "key44": "5Vx6BJ6dnuZXYGUrmh6YGvVUBEZYFuBHhWAWbLJW2r56TRjurzG4bQZ3xJQDe12B7EpGwz3m5d4kvBUzJB8FPiH8",
  "key45": "guWxZW8765e7KAfT7NHeQufK9ei4YtCbh4tLTW8ZzfqMTUrMPgNdbHQ4sVWfaPP1fuQ7KXmg9gtRC89rBrYYbpy"
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
