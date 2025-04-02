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
    "4oHNfTmoZKd99c8SBE7XdJci2nfrwHkyghwwye5ggMALPDgMZYrtN7JePuw4G2RCvmKpXkUj6nK243p2ufvSEkdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZDei4xsRDwRayMR6qgy5CQ9Mrro93NLedh9rpn2W52TS66eNKZ6dRXuF5rSaFacD9N1nmTVrse8gzZ57CNPC59",
  "key1": "3XQ9pn84YYMukFEKEsBADmLBfX9sKiy6nmUdDa6tbtxrhJhEUvqcm7Z3dEdEW2jd37GTHD7vk9DdYRsB5AbLuQEj",
  "key2": "5NhYRmCzYSF5WnJV1SDwdxQUHpSGcT6SN4ewNhbkGk48SvmGzysY3TKT53Bmjjy1oqFKtB1AtZt3UWLdXmE8XsqD",
  "key3": "3BuBgtdUFY36djzxovGqD2QG9ZsCngyrPm2f9AYAaCTPUceMgKEZ8PBdHnxVNdW9L7rgqDNCR6J3GCJ3BC323DqD",
  "key4": "5EY9tkgbpkUEzkVQVweVFaUm4sWPWpPHaY1dPbacHsfc8Pjw9F8YnR4NSMgnx55zL6HABoPJiLVaaXe8omP6xB7D",
  "key5": "3zDhMfhJT8xRa2fE6mmbkp7QAa2CSRWuKUb8TiBTHW1ekTSYVWgiGkV6kLBYqzHAP8MwFD9EXvC5GvNC8SW3cm6a",
  "key6": "3jMjTuaY8KY1xRuipRPpJsRMvxVKoBAt3ipNaLgU3skyomhGF1im8s9STTNvr8dHnnzmH8f1SD8YL2x6QdtkgE9t",
  "key7": "5qXy4qmnEsuNoDjBt5epJjzUuTqXnEXZBEk8kPUHeM8a89zoVVTHguRURSQifRWeLTSEQojDH2rB9gzDkSmGzNt7",
  "key8": "5LqrGwpiE3dz36dztQCrE93TfuUWjCcvQAb6uMSWjdM9TXtyCcDWNKVWJKZFHzeRPC4KgcsjaFWfdCRqJBcRxFiz",
  "key9": "3Q5g1CZeZ4XwjSazjgJfSPQPrwcpHAKHuyJySFphXad13of4RPaWzgWFoipFRwdX46DeJWTBhY4315GsAzAm6am5",
  "key10": "2K2f9paDtaqS3U6NpRz23r1rQQqVjxs3PJ9CjrPZU6CfH5dv5TSVhNiyF4i7XUytKunNgecdtRFzvd7t5xKfPEQB",
  "key11": "4oxp2rJSnXqtQXtZe8ftbZHzv72gfLheFjsUnp9rcsrTU9Xfv2Z2LCfPBK1XrDFbswh2bc54cbdJ9BWKfDYduRpx",
  "key12": "5xmFjNfpxwtvZZtjH6udcdGbXZDEHkxxaTgJ2rKpNvVDWkxxReibGPXfT6k1FnyUf53JBSC6waQcRV39qzkgQ7Wt",
  "key13": "5H4zZDRudAuctyymjAYbuPMFkK2Gb5mdmkYPPoSrjSUsDWDWoT3F4PeCsSm27NU8sGhyoyEYjdx1Bb376y5f224Q",
  "key14": "3ThEZW7PgXUW7UxFaVcubjsuEjYiUFvmYgZuPb59cJWTazvGZYe5Vf2zp8iSazUjBeUwqDoaNjm4Y4QBYADvyzwg",
  "key15": "3yuunbe2b13RGCM8ty1ygUNfy5gfRUZKSe5FeM32oQ2Vc6mzpDeXj8fHcGKMUScUNAdY3vYQChCUXFpqy34cKSAU",
  "key16": "3PzHpUKaPx5zwMSLnzmcarSpuyKdWTB71q4Vu4MwvhMo8Tor97o4qh4VQoQmqW1toqnWYkSSoaT4o4SkXTA3uNjQ",
  "key17": "2ybiGfdZkWLc5Rp4QJSuULhHfRY71yf2X8ktMkMSsnCcyNWE8eju54HbQ7A7C6rYiwJUiUFN6P43S2CbDPU5Ztk6",
  "key18": "2VqC1ouzHcCXCYJ3D36ksBXfiHkuR86d7sVA9BnvSFjUVT6GnpsxKHijeTwgya9TFTZrSaLBFyLH6j897Kgg2Tb2",
  "key19": "3Enftg1GkrXnidSKu2Phwfi7rhsSynicTczsvxXpTfZcvbeHKr6ETP8sQmMEp19WihoYXSomaDKuZC68rDCxcqE5",
  "key20": "2bmRormVVRueEg9prkGpGK8Xp3Az1Mx4gXTnvseDRCm441QGaoK57uqQ9V6w4DWtF7bRm1mov5oD1FPR9thHiS2G",
  "key21": "45ayDfBWoxqGyxgaBUkBm2pWeGCZX7x8xVvixaa1Mxd5xQn6FvMahtbtKwUy9pmWhKD2fHm3J5LKB6GkNYgdFxbo",
  "key22": "5ucnBg9gHTDbpC1WD1NWYXDcs68Wn1hX7J88Kgd4j9W8rJkS2ikiqUuySSwRaNes27wL9myLknPbrrrjZYgJ4AZ9",
  "key23": "441PQxxyLnonYsK1uh9YwkHrkNZKoQxRq5FyoVSRW1ncx2qTgoKnwsrhowWE31Rs8Nva3BZjbBJEuDhNdKNiq5r9",
  "key24": "5R9YwYcSByKeScjKGRVJurohpoDsgVjWaNvas888duYK58PaTSDswwPSZhmXZY6Y8UwqZZmbn25YFc91R7AFkw94",
  "key25": "2ssJqGybrGM4USm1D8uJ4BDkujuCmcpFpemJ3cf9PFPHSv8ZSH1qs2gWKjn9PYeBg58anJfNrUixjqUM3ZSe2jyi",
  "key26": "56H4D8gFAUidBmaJEDzgsK1muTZ2jzsT22wryuGWZrWeeJ3x18RML1jfr3DMhhL3ZzLMK8CepnmMFPMJkC1YL9Zs",
  "key27": "5HQPy6L1xDicPpJYsdtQ1jWpfrXS7RjgRE7GxRnuVmuuvQY9BEWsagSzmhQnaSz6gLMQFAjHVeqbgBHRmtQTMftV",
  "key28": "5H864rM5xE7x96GtkjV8LxfzX9FafqnNzTRsQnfMp9jjf2pYzEDpv1prHQvQqv7SpXoyWdS5VJh8aQP87EEN89VE",
  "key29": "5NHhhZgmrAPXe8UVq9nfEyFgSWJu8WNgLUmAvGHAkcg83PXr2zxCUMzeB9KaevaF7ufwh38CVak2MGkbBzqXGbV4",
  "key30": "TGh5p5sgFx1R1m3LgCKqv3kmZYotmTRuiY4n1FFU1JUWc7H31b6he8CAvZ68wWpeaJZPNmbAb5BwzVyAPZe42Vx",
  "key31": "2ToH1JLUAgxig712XcKgSuUJAEaAQxCcNoTB6ZyxjDG7rtqQ3CiS1tLysZgVrjbFht4msX9BrFoZsVm1MoEYGbax",
  "key32": "5VRjZaYhNabLZBPT7RhJaRJ41VzgT5zyJFALaRukPD2KvfqCtcx96wsrF16df5mbMYjyWFasPWwtcNjkE79GGSbP",
  "key33": "5rkG9Pg1sYA2r4xMhsTs4MwxMdpFVAJuFH6i9nTDdJ3iWjbMomCyUJaBRGQbozGjquW3FJFBF6yYV8Yhd5Hgbgoi",
  "key34": "3feYJdvAFqvG6y8ZaL5v2NQHykZczf2KJ9YDituCTi9uZQYGawuyJYo3JkwDh7CGHjP7GA8RAoFEcqjxRnzPGSwo",
  "key35": "3152XgVLuVZkBcaSbziqwjnbUzbTcptGf1SqpRUZMxnWm1q2gxWKaBLW2ksEx43B8Ye5reTxDuUGAHXhafegDxvd",
  "key36": "28UHsw7B1RNgFHPpmE8a3sZdDrWnKcLLFEHs1cMz5MkifyNbAMWXA5jkmp4ojFmqrhu3vd4PtJSzKPdZywpQRSJW",
  "key37": "2ajpkWb4uHt9XvM4TDqnzwU8z3EiH8c7B6LrzP39TNRc3gR9piuWw86KRkcZnzp13R1hUKF7jGVCk1tfMP8y8wpy",
  "key38": "3e2UuXG914fa2eRS969pV8Ko16ysXZgL2tV8rCQTHzhLoQmZDfafA2Ls3thhknoad4ZDB2v3DgXP5VAMKrQdT3QV",
  "key39": "29F9JqoTAmRewPh7mrcGcCs7HwzVVwScSDv7N65nVGZx6RVBBrvX5ALb5jqtYjSPnW4SZne2moHL6NeRnMzF2tXV",
  "key40": "5We2aKbis8XcMZM2Vgp4k5ZT6r1WFo2khDChAU8spzqNjtVh6ymD8qzrEyvG1gryXWCEmf9YZxPk8yUtNx4rHLXm",
  "key41": "3b1j3bPXJwHKfKgtk4dSvLFTjWapj2AkLnqVUnw3BtS7j5hTtHYzmhr3wzmBs8HqveEYNkZdzv41zJPPVbs6tf4r",
  "key42": "iKEaGonfLGmzxjj1y3iy28LYdYnV4yzDA9guiKXfSfjntecLfgY36qEAGZgyU3JWAHacQ7wzKTEUzWYRxpKTjtZ",
  "key43": "2mBjzc6RmsoaqcyEEQPmYFtnPGs88QqmBGHd2t3su3c1JfnfhpxZd2QuH5AqFi817m4w6Zn95oYHHgBHsrdnDxg5",
  "key44": "5DHTyzq8UJP3qdyJK53FHYQqhafJuRCcGjWuHLSSdHo82ycJR4bW19oTNV8D35anx2QWDmHg9kqBPBQTh7PvPeNf",
  "key45": "5fFwthk7HGzg6nsEtRe2ZqRmJuEeqexgFasdMUUHqb9443NxsZdXSYNp4E56kaunSfzB9QHehdH698Lai3s9pZLt",
  "key46": "1293kVHr7fHTQtuGE2vWsX3jhFTSkd8gK5PjTkZ8HXx9yfaE3kbbt7utzXRGFAyXvwW1nKbBXZPtHp6QRP4eNx7r"
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
