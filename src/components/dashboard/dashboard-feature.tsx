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
    "65KGo3T9CKWw4TtmyfcfH43s541vMY2bHHrKKEBw9C27bxVwpeUq14BJikwsgBcBesQFfqSW3G65KoU3pL7n9oPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iyngWMqTg2eKBh1gSPvDwvTWQFDuwKvGVLqBWL1WY3Xngg3yP1uanvwksoMUgVPeRna7kp1x6hSSJYMdMjTFXw2",
  "key1": "34r2mbNyGLpgjh9qkWrKNbF3kn8R74tpTBW4QktLgaQehX3pj6cj4eTvDr3DkZYrb3PVYEfSfw6jwHVQsWVyhyap",
  "key2": "2UpeuSw1PiBeJWtRpeqeDnsnP1UHnZxi8w7hVzcVgBTBBi82Z9FD5xv3YT9wPVQvCypEJsPZ5n7Co5pa6Ag6peMa",
  "key3": "3qpFwEapfEzW2LneFeAh3n4uJWRVvAywM4a3tNzZQtMCQmtaLksMeUGK8eiLaxn4aHkDwp7j79pXhW9LFRefAGgU",
  "key4": "63E54V7Vvz9QnPuxVvoQMVYQpkXxrzNgVF5ifuRiv4nm2PBAHgYzqL3bXxg5f5HxYzcJphCYrigjAAupWMSP2y9p",
  "key5": "3wz3kRi9m2tjyaezC4FNr4s6ZqEWT1dAdXsUrH77QTbsiyyBjssrvCvFCyr3svPpbYTD3sCkzsRnxin2KXBuvBun",
  "key6": "4cyerCkEWDd5JabM9KW64yfaMZy9nwt6z2zTYGzhJJbFU6tiMWLS2Xms4sj8TtmLdbHCCyMxvAFUURytwU8iwSLe",
  "key7": "34raGb9Byu9rJAkBURVMwvLnuYJtiXJPjcvpvQe8jbZjWKf5jksrmce1rseFwxE2FzHvotyVsVcBTXVJGKHgGuos",
  "key8": "2KwhorzHbNxZCqnVz79h21MABCdPLxZKjj1KiYhxg2UbN5Z1CDSWxwo1Y7Vpg4VkvMLnPNgYDgf6ucTdyyYwoioB",
  "key9": "63yk7b1CfoZjV12swcJZyWZ9EZnE7jBWwZw3G5KkSgUWfERVjqczQGD9UYbpB9E65kZPSZiF4yxJN4nrpSgtW4gi",
  "key10": "5zXnN9Z4iLP3uY1Gsxro5Bs7q4xJbGwqKV5mc2VyvXTZjydQfjYSGdLxJPcW8WJU6tCX8CHkMPbiojcZoYfB18jx",
  "key11": "3WBc6sRjfQCkEuQXZ5pL953GJ6vzax2U4LU8SkCqexrg8nw7VgWmn9BQMRhFPQJ833iA3AXsvn4eSsamWKDVQ7sY",
  "key12": "3HUKPVpWxTQWNjCtd9gjde8r64amseH45AtyGTAVePZ8j1rNe4neEWspbVnCAiy79V9onggrK6w3U4qfwsPuhoDc",
  "key13": "2YcVqcELQJvKV41LH3pkxLpERDPumjSz5Z374nK7HKep82zN7qt6WFRLxLmhQnR75d6p8Auw5JnN7BGNGwE2wXKV",
  "key14": "52g2duxfocXE1THyMoQ1CBuW8bdLJdjUfCLHzSSmYvLfMWc9zAcVkwdoqbMMfZbKWt1kQ3SeAD55f1fBsJigqXgo",
  "key15": "4HSff92ZrLJT5i5SLiCXtP1seKeBMkRgvH1VVSpBFdPSojQDKaiC51vh1YtDNRirVk1iHS2cLce9G72CQS2FvbjH",
  "key16": "2L2URW9WiRr4PMEB2ZZ28vhkEcg7GkNDyVjSQrquAmwopRHhhF6Mh5soVi8SBmXwygrMB7Txi2sFHDN3u4xGBrA6",
  "key17": "2B6oVrSqnjv7FQFn5pUZWFB5Dq8tSuJ2KBwuT46gMprqDD1VCSmH6ychhmSdDy954wSXG8uqdww4AsoraYgDN43q",
  "key18": "5Yg2GzRWui8LoHJMkxBdkEwvt5UFY6Z5bd6xDcHtunKVTchT7PDgghcJ99MfkdWB8tQuRYZMCyFoM3fJSdezDjpi",
  "key19": "P6wsovtMC9kWdLNqd4igViacaSTbJyKqeXBdNVTTwob9Q4z1yZzFng45sPVen6YykcU4Wyki3aPKx4fiCjd5GfX",
  "key20": "3aGTuifW5gGRRBzL4HsPREhYahLmmn1AC4mqTusD9JNFnawfsmGQauocHZ3vS5i53cRoeMVgmkDpzMMUyt1QN1n",
  "key21": "4s8Rpps2q6DtDdc3udhahRo9msBMyA3wrm4YmcqMj7bXu6Jg9AHdAzd13TJ8LEyL1ZrPcxod4cH7gjMmGa6xufAx",
  "key22": "5HGbCVKjyhw71ZhHEdpYwnUF7dWdSnQGaXBp8Qd1Jhxug9n4MKW5rSUs9vzmxFvyfgeW8Cfft917Zzos79PfJxof",
  "key23": "5imtLygEc9ecaDNxvxVydYdL7KYEdLc88Bt9Ujwr59cWp15Au6ggSmSKrt26kLM2KXCgJ684z1eumPAwccp5giZk",
  "key24": "3HStS4fsj1gwvixUY92WKoWq9Zcrrfyq1huRFHyzfPdxZD5dBwgtThf3iv84AEkU8UhYP45VKy7akmuwukBm9F5W",
  "key25": "Vuihog8Yy223Vydy4sTciw5srsX4siGhTkdiUkcpYGsRc1bwVPiGH7hspEEKs57qYW9rLZv1uzVoAHPiKpBK3q6",
  "key26": "67UqtZUeJzkBM9TnZnmZtcgaGotY9Gm6549Lidw79UqsFAZW8Kc8HS1sgB6hMJcGUZXnGZDW3DzLdNM2ZYWKGbgU",
  "key27": "5KW37zuMLiHkUTt9X7K78kQwJz4NQcDFzz2cBzayN6wG4VESSXPfDvAFkCpvCb1k9VstBgrsHHchTSzYr7hkK1WP",
  "key28": "BTe1tcC7wqQ4SCiikSGVGPnfkXmqkvdLpu9595qZQZDdcxSvCzcEbervjoTytCuECU8sDQFYfWwZd1w8q7JAw4f",
  "key29": "53ogebh7PZggaGsuD8mDnPsuDs9QpmbAXSQBnoX8qFeVenkwo2bwMfHw2tJCRLiauVd3xtxURY8Jsy3ViLwRBru7",
  "key30": "5UAquFwSMDY4e5xYCeXNev1tkikaa41nyAjbvpShWESucxiHqTBFXhiLMdKLPX7fS6TF6uUu9cgLwzSRKn59mxib",
  "key31": "62Gpy7DyQ6mkfzopRmvicR9njPXSUuwRqTGFerWbUdmr1YcqQU6BySVDZSMVM9thxmG1NRdfTZE8rshUc11NfWoD",
  "key32": "48S9frkpBCWyPouBxMNTjFQHp1XLN8JpDNfbVNyryMSxNXsznyRhjZP1EnS8GqMezZvnvXBJ3QidtsxbDtakRjDq",
  "key33": "5tHYK1HptBaUuyGmYSeGJSv8LnKb9Fic1ErfTS6MRLpFAHSsJwpJdyzntN33kPH2WvJm6RgoEuAo1qWWTv6T8yex",
  "key34": "5t2EubtzounyyGgLxhDmqdEyP2YeYg97MWvrat2F9et2dN9GNs1JBzPScsV6pYTgGryvfzmQ61qotwburVtzpuvE",
  "key35": "5zqe3ibZw5DvzFxJC6muUNhts3nWR9Nm51dHsTEmswm2GBtmmiNHxsa4PoGmc5Dq5wL8yEmPRhdCJhSzTr5Ysiha",
  "key36": "4waDX9MsJxyQhGiBBD3JsBn4QjrQVRFfvaesUWQwcVQzmDBtfLmNb8cGEgBMJ8KkTBY87gVZ2y1izzX9GU1fk3p1",
  "key37": "zDevvXd27HhYzrirpgV5gpSvhd2hnPhtMBQP1Dy4kuRxwQhc6DAb81CasXBgQb3PRGyRSnqurw3ZnD5esjMhH2e",
  "key38": "2wX9gGJQLwTavrdLs7dxN7YCBoPEVJhpZ6FbbQz2xuEk9eaAiPxZ688wjUJU2biDQ5D3qjmigrjBda4uPLT8d8BA",
  "key39": "43bwwhNYQN4N76jSxinqPWadAYSKMqffz8SR4q3Do7G9eMv8PV7YGJiDMjS6yzcufoCRYHNruJumGLdWNZuVasqc",
  "key40": "4ZPvRkKbHURaTjfkmWzfHCNw6RjARK8LwkoKpBdp7Ftz3XWoXsvWHevrqYUjvNgJJueLbp3Rwai2ZtEgJtujYUKs",
  "key41": "KMgXpN3zATYsdygBt1fHDjayWXcuRhkW73L81TcrpSTXnHMeeLmfBxPNy3k13XP3o445RudUx8SmSxMoHPwUqxs",
  "key42": "3nEVSUqKEH3CMhAoNFRq9JLQonLq1C7iwzXEUU3Kpkn7rbEUtU8HN3wPAzkLEenvUcKUjcFuFargPPrVMoGDmiyV",
  "key43": "23Z396PyxfUn7DxEmRPouERqKVwJQnsSUDeomB4sXsCeY7HXVP9zSUpmNk7iPDWD1SND2d7AMKj31UhDYaaNXG1K",
  "key44": "ZHeebTH2sJtHTKpMozkrmpXS9gyoLVUkyKynaLmerB173cxZyvWNVstaFjFKDKC4gaR2UriLRHmfmiSG9471oUU",
  "key45": "2nAJKhbFTccS86hbWCzTZqkVgEj13a2XinRSJhq8pg1hFXTE6J8mHRyait9smnKbMMjymgPXsYCpLx7AFtd6yPVp",
  "key46": "5avnhrBLGyoWqy1F1Fp3Roo29vzDDCnerEKhGXxBCQFHcxSjWiE2LS3NMM9T7syLZm7iEN7KRyy3FD9qWC6kdQWK",
  "key47": "45UjQKnRx1NiwZ5n6suW2yWe3fjNgpFjDSnQgc2sX97voR5FGu3T75pxAAZRqV799zaxbsyUZZ5TNiCJj9Dvz7LN"
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
