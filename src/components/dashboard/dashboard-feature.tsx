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
    "4c1nHboMyHDPTMAvy8oGkYRiRx5LMuaktcj7PbRY3mMMhqEcZ9jj83aMR19sGFa7nMaSteW1eD8wh9WaENMSVk27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zk4LvMnZhxohMdFcBznbB4EH7xcjHuC8MyB7ut46qSq3CAQ8ebHjcxX5Vh7QdvxAif2mDmdDYab2F3wARc5qgD6",
  "key1": "2v1YERBzzUGc2k2HgfnxE28jDYBnfZw5eax4afecETRs4RBMtRB82vu2SCh7Fiz9Ns7jTXsrmyVA5rp7voHbWJ3R",
  "key2": "3kApaEiDsFhBka8cDLGtydwJ6VTLHJys2diMKwHkxUNaN8ts7UAkbiJaKBS9FM4o56nHPzvxyQqykwFyjNUtwcJV",
  "key3": "5TSWf4WtLtGDyL4SU945RdzySbm9T3STabx6fPsNcHLaSHheKBDWtV8g4jqFCu8yocZbbNE5EMLWZWGup2KSLvnJ",
  "key4": "5HWXmZVjPbvTwA5xyahgzdUbinnTbxj92zmtctmtCAQQNv6QgbQyRhDvkT8Sx6fVgEJZz1zFrV9ysmTNtZhfrdMn",
  "key5": "2jeeFXZA4XwU4uzDhGxKb9btCtUnPMWofFLhu1nSYkrERN91Z3YWLxuEadFZYZVFmSZ1BXBHveZkqShQZ6NZ6Xgm",
  "key6": "5EpGKRC2tMjKZaJhaRXx67JeEE1petksM5SfU9CyQpVjGJcuyfHmS8goHZhpkDo6gnfBeykU5j4vVaKmwT63uk1J",
  "key7": "LRPoRwYR9fL2hjk56QptutDdM97daxnDYc7URohnqYtUNHvHNgVL9GKQJmQAMP9mrEY5pNCYDs4uXJitRJ7WpFS",
  "key8": "3paPuGFDa3JofGdMxQ3AXJT8tz7rqVoDSnV4j3BMmEMxgKxsSEd3bQHdWqdBuvqfvAAiAeWU8Ptim8UEjWUhyxyz",
  "key9": "2pwAccpRVv1EzC452uFjsgybD4E3Phnb6Pv9NzgCKYsFo1Gbqx4nemtszY6GcoQe8bMq9JcuEXPEKMWSRTxzEhWc",
  "key10": "C9XzQha4Y5S5vdjw8eJuGQLkr5f7Vgc9QcJwX9xnMpqtCWjdNfX9gbdLxdgWB586XEu4QU4NRy8LgszX67WJ4u4",
  "key11": "45wZbp5MZdLtKAGFDgdm43GyoX2xWmPdUudYVnDkR4NWcUMjpvuj9GGdnchzDY3scTM1UAbSS5cuGtAHNUDaABSQ",
  "key12": "4Vx8SjHewqY8HDRXEY2KMutrKCCKdZZgqSXfzfBurPUhMi55dCy44nzHZSFavFHzzqiYR2iJCi3hG1RsKtDAFsXV",
  "key13": "4sazHfYBPbSj9TtxEALZsYSGAuD5cwzV16oGdyqg21xbzvF5kMS1dJyuHNpPiXLzwjZvXpfsLrPqAAw6EJnzX8ER",
  "key14": "4MX69hSGD6BAhfrXE3C6nS2X7HAGX6DR3rtTrGM1gZo7rAGTpPA6TqTZiD2Fqi5fDvLRr4USpDBZvgVzbfT6UpKr",
  "key15": "5vDskEbMSopYanGuVYvRGzuZ2hVz2v6CB2XLUewKAk7DiAsLYrR6SttZKUYJs3AZxBeWGuFQEp7uta6UHbqeMvk8",
  "key16": "4UnPwqXXF1vC2EHNLrWZW4sxVJ331kXpXW6boqyvzbShn8C6jVSSr1acSqsRpY8heCsWcRNV5quoFrA3E1GVwiGZ",
  "key17": "2aSUJWsD4FpVkCjY592KPUSWxEQg5GAXZijEywow3YGyk5DNfwBCMmCZTqzqy7QKrC58mk3u25DABJW1mNQpFVCe",
  "key18": "3QqqsX2FEzsU5KF7stowkvo8CZVPXfBf6Np8ed2Ak67cpaoNp6A8xQw5asLGQBMFASXwTekiL7njy85k7KN7z3fS",
  "key19": "3WTdqJUJ6UWzJ1Mv4VSLXddkXVs8CQ3f6skUjCqShDcmtQbWZVJD2FG1fVvKWEpwH5B1CPwqKdRS27QS4eBDpYY6",
  "key20": "mpZqpeFcEGwW2vSgZw3fzyyCFYwtRhM1DLSH7hJbpdhqc2wm7Rev68jwqwFRgukZ8TZS9GwNuce3WTNb1T87CH1",
  "key21": "447513koeCMLjzvwYwzqK8qHTjsJntf6JkDZQLCL7JwiThHKh1AkB1gR2U6taahPwmdTQoSSChUrCJr2t6TUd84j",
  "key22": "4rjWDECm587UZNhyPPSR9UZ1289gxEGgaAZoAswrPvMUVJW6NXjEU6XwBtLKamMZhaCtL5yLB5EuGLUBcZCuGK5F",
  "key23": "3JR5p5uKW8LNZ758adowesn6mu1dJwH6nEjBNwxhLZ1cg3DgQeRTwJUghLimCn1sRQYTofUo1rRTNE8JaseDZT35",
  "key24": "exepAxwQPembFN8RSPUUomxoseJX5m1zMYLjPfzNJHccQy3zVRcDuV9UnkEQ1FnjgrGBiDr5YHsUvNp4Thh3dhT",
  "key25": "g3ZE3eBieMWHLUt3vkXyaxcMwZWpp21P1CLgDt8zQgtPZHRj3yj7o9TJGyA2rWXi4qQWkDpeC3RNBxR9Ueh6z7R",
  "key26": "536NRHMPpY9e1Aib8VaMVEDy5YuXVwoJLmynvernhWxEV6ojXvjMj7g5sz4LvD1NgSTgS9ziRS1GEkTz9vfpYiG6",
  "key27": "ZBxYCm3wUuDL79xr4u2xVnywUrVKU5J6xEu1GxxwquKTj4Vdfu3pgLCepgVyFRMTNjB7MM8es6yggkrejy9xQeH",
  "key28": "38MRLc3rfjTQqem15QXqJfq8gfsLx6nTuDwAYEmiyhDTMV1KjGTmR5YMDzuUUXU2uGdkugUULYT8rhHSC7cAsuXj",
  "key29": "wi5QepnYzf3CwBKAQcMFcwuiwXD3QhFhFreRJXHuwDRHtvxySqF27W248bZtwtHq2VDX276P7NYiZ4fHYFe6PN1",
  "key30": "2pDGPhWJhreBSP8d9Ymhn6eRWGkeAMAbZrjZTHXuuCcmGPV4ZAPDL9HJB6kxN64yrqobKhPaZjMuQhTfPtuNfxQK",
  "key31": "4smjzdwm5w1EqAUSbgrvp53rnWrRfiy5dMkNGpLZsqZSPPp22NrfSrDMKq8dzKuP58iSbHETgdFWcPY8BqXMcaek",
  "key32": "3RtemGX4q6fEeEwHYao7GzJSgN7uTwuv4versxLKyjZpkegPe6B3JJTLynRD86CMoDoWNwNRqu3oixd6eiSFbFB9",
  "key33": "WW1mxs7hqpNcciLvrLDtQcdEMoFzSLMee68c8gXhsSC8j1SHCfx7trDvR12tEkMVLLkPz7VuTgfvUzAkGBoDab2",
  "key34": "3FRWzhJc3CCD9nkvK1ZRo4XJykJAw3H4Kui3wJ5ruQVBXLEw6qrXZ384wkEzkLskJkjcTbf46qFt6SQHFnHrvUHh",
  "key35": "5NcqjsYBEQ1t4fM6SzYA4rsh5EdnzKgAhhuRB1MbvVKqhGw2Un24RiJMiB52xojpFw8Z9B9WAQ8Nh9psZ7oCjBrh",
  "key36": "sEcg7jLp8FWA6CJu6F27CL1U1sxRroEfmL8GVaAfqD8SRxvMz8Wi8o9u4HpMfGd1DvAVKutGCiRC3eb7Mi1bkRR",
  "key37": "ekXbKLVu7nhS82HWyqYAtB6eXjeL63BY3eETUfH63wdv1WCxt4D6VLfiBmnpR9Wb5MZf7T8tFF6H1oPCSdLzqpR",
  "key38": "5ahfDNg1aVs1JopmSNdck3YGyqfXiTvBLXb7gLMV2JXgpvJ1UXrbFwsgCXGFY9FZ1rZ9d6KC1E5HMAjsWD7tZDWb",
  "key39": "3wu7VeRHoL6MguSm2fuALP3rxPi72w47UXurYEqpxdWUUevsh9fT2fsxT37u2d7YZHVT94R9WNos2x5K3mHjNwcy",
  "key40": "3bTX3zEQFXResymr1chc1Lw46h1tAqXPvBvCFm5ofbb1pV3Pexcbej9ksG9kXYrTmXQbUUSf2VtqPZShhEVjRNKi",
  "key41": "5pBUx1ZF6pUw5uo9QyX1PUAdS3ggxnozRJqveDXXj7bVbkc9DbL3euTq1Gadxb6TbTo8DxY3Cp3vTUNSBir2hhWz",
  "key42": "4Cyt2ymcNjQ47DF3qDYDDJFSmDTfUfMyJrJwZY245EvMfTRLsxNHB5FFsKuLxgvwgjoYudePHxKwjgm1rGyfVkx2",
  "key43": "DAQHKpHGUhnjMie27ryt3nhzuXJs4HRE3988biyqdcm3yYcjBBcknP8LxZG1miE82Ub3FcWGKYq4x4hqXNfM72t",
  "key44": "5rQwByTgDP2VeJf4otLeMeugUF7DgbdW5bNv8LgwfKTrkKf9Kz5b8GCLRdB8n2fB2kiqtbp83Y3VjRCf4HNa1x9E",
  "key45": "NJMCtEo4gD3waVqP8Re8SpPhWSn8fpCLqc36w9bnMWbUWNyBxH2G8jk5MS65oWC5CHzG3UXXiEckR9TUxV3hYGQ",
  "key46": "4sLiSXnU6MpKEHtFny4bNdtbDEXPADQ6GjRBSjuTbXpMib5euSZ3fNGDZoNNQ9aZNpPUyDFmDi5qZ454CpDYLnEb",
  "key47": "4Gfaks4oXC8e6MSUUmqszgu2Rf9fezC42YSxg3Cu9fyUxMLJg1CuddstG5HS5Fr33jS7FA1jFqYxJekwG7aUQHQs"
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
