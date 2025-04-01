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
    "4rPDFt4taZ71FwNHGivnhyYGLvdZgyTFSyM2G4LAAoWRN225vRCu1tKv1kPmnPUfay5Eey4nnuhW3rURsC1FdXpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56sHND6ZGDbK4B8x7tZWMBZNBNvTgN8F1gJnLgGLPAeibByK1DjGsFJyaFBN4k89pmaPqwWCKyg7UGqLnt1cub6J",
  "key1": "2xQTu8tkLpkuWWMPHFTn3aS4CGb7tDamLoA2kmNyQinUd2ywUFpa4r4JHGUb86z8Wnb7CffxJMnAnVjAyrR6ttgh",
  "key2": "So5r4pa2cYBGMNeDSnuiHCEk6gdan1z4XnuGyJjWhyCECuUHEVWPuyFcSP8qFW5CweAaUT841opRzjsGdKb223y",
  "key3": "56N77BcCHKZmUqZNK7NPd3t4fymJhbppLJUddSfcXtmQDXV78HYm5AFQDkQCvdEXozdtDGChCJYptF7PxZ1PQast",
  "key4": "4V8jHWU2BgBShfgN4KW9JWgE333Ucvw1t7peWJzCiJWJrecgRcEDRmZMz7x7zqJU5AyzQ3216MgPj4MLrskeX7zR",
  "key5": "2CMZiMKGYCwrYXNhaFZzhPEEPosr4kG1MLShS2P9vsJTdQTvo4TNPHv5956JCGBrrjwrcEKqAJmZXSswE6E313Wn",
  "key6": "4GXCrNjA84iutacn7rxxLjghv21iiqBwQSxyWfVtLYQZJUAn2hn1DQU3rwNTXyNdbHZ2VPhf5xRQpDf8wgEnn9yE",
  "key7": "5SLgmdFqc1KFgX9Y7Uy7mS9G1Z1jsqVyLPpe3puAQDWJe8ZKJnXnH3P8m3K1MFfaMrRDbqB4aaWRMQxPQEfN5Vep",
  "key8": "4WZAQCzCyhdpvwhjBBGxet6WhbpCwnmbh6vzdiXoUWv8JtHt2fTVNWJF6XTstnCpiNrrjGxswK2P4KNyK38dNCJt",
  "key9": "3c2RBWyDmA4sfKqyzmxFAnr4MBNrR9snkACwpH8VVonPPXd9xQ6LuKqCfEjvEmKSJ52Eyg1JX3uVK6H5yuZ9iQVr",
  "key10": "5gCWDb65WW8k9t4b3X4i2NSqVeDsPTBavCdtECBfXM61UND9uTe5Cn8qDjqfBuvcQ1CpuYTcr3n9GkeeimYaWj3w",
  "key11": "6YuunSuz9tH3LDQXxpBf3vHiCQZZt3T7BcUEi61w5zMK9YiSd26MjHnhs4Bp5HEp1f1A6JCEPPcMuKkufeX3dgM",
  "key12": "5fgG6THRLWWULk6hTn5pn1e3LvBopdG18WwP8Eou3ue8rSmre8D5vmwzZnzBcj75VZXzwWPTwMQGoT2yQEThBNka",
  "key13": "5wfgyzfCg6aDSmU5kJKZE3f3iPHZWz4FjLYJrqW4UDk9UQPfuRSgngT9j5zyvnpSBE6AnFuhQK3JnZ5KcPgdgcNH",
  "key14": "51gHozqHKQYGMBUrDFmjZK8G16aRV3K5eNJeBAwmrThPQ8sQbWDdkkq3Bd2sMHkZ2khJ4WQmRiiqy1Rpcmo3D18U",
  "key15": "1Fc6qPU9q8dcZo8SDfYnyTq1hdRiYHYThbdySxkaDzykjDV6cKBZSvNaY7sgH6si5aeroSXAWv8hKrdfSK1ns1e",
  "key16": "ho37ZReMegeZiDtUswfWYLbsSsnKoCDs2GLACZUo1Ad14YYVZ98LuiPuWdsgxwXtDMjhTARrXgsBtAoSB8U2wrd",
  "key17": "YG6aqHc97VZG2p3n37kMiZ3wirC7tncagrPy3byzjNjVkG9pR9y7kDYzSkZBUMsTiFJs83RnX2oH9rUyhAGyJ1d",
  "key18": "4yZArXTStsf1ncCm3cHwr4Yi1S5CxhCiir8J2Cr2Dqzxi9QySC6tydhswgiUfgaAp9SnBEGZ8KwsGXrR2BEVuS9v",
  "key19": "4pu1A6yzgT14fYe6AmBbRNbWkniL6urKi4SeLSeEZEXr2ki1eBCEjwgt1CBZkow6itaUakF2A6aR6NwiJxzLceis",
  "key20": "unRuUXxC7M7mdFjBeEWFSXiGuKit4wf2Gw1rvFuHa6AgCmb5dkP3u1ZvCxTN87PB2st5xwExVtB9qBBrGhMmygE",
  "key21": "489DMo8EKNKMmzx24H1vbXCorFQVzyEQBSehdxGTRtw5UnAXC4U2FxhTpYsJa3FJZ1gAhjJgA4hDGHX2w8cNFiVB",
  "key22": "3XsZwMYquubSH78fXTjvZ33GAPwysNi1hLJcVY8Z24T6dahsgnwU9KjENBGJY59tpczef3RGhmnM8MzdzMkBPDeA",
  "key23": "B4YnRMg3ZTrW5Str9rhoCSNpNXkcyvMW1c3ZjaL4Txayo2UhLchtAVRzUk5iuz2pv54rVNAz6LKQcW8AjH8C8o5",
  "key24": "4FHscBy4NNu2FKmdrTKjFDYo6A6fVBQxw9YHzZatpAjmwF7wiEv6YP6kSjND5Pf9hQsx2qsWcgSRDsWLsyvcjz3R",
  "key25": "pU8wd1K12uPaz7fqbArLBQgzfFAL4VuPyQ1CYKZokvdjkUjxgwMyU8kRQqWnDNFWySF112CbPQk8fLMZCF8h6va",
  "key26": "DaP7EVtmh7pMEQGD87ncjhWsrv4whwKsctuU7exMJxa9txdXgcwJATebB3FddiCxNUvpVgJ9x6b58Y7tqHQYpSM",
  "key27": "5CVaksoZUpchpqzELZLHev6Ewx9qVDDaZZxxz5zNvZXB2io9Hj88DCZGsHcbGgvziw7sE5Hvtds8rd8CpTgdDyon",
  "key28": "24FFnw9B7rDMGyRKjU7wnzN6tCt7a25D8h5TTbfMXagHNt6xpQWwNuH4z6XjyPDWNSz6gyPFV9y8ktnEg9VjMrdh",
  "key29": "5C38b5dt2X9XHFKBCuuuZCS5bxnaXPvGpNm21kid1VEFiZ2uEU8qCBMDcR1egRuPaxCmMHHxsdmayCT5B1tSy3rG",
  "key30": "ig2ZN12oLhfyCNx9yR3TPFc1X32QZozNwSei5qFRyGrodhUaqjqVqkfWDJAoVmhs1CusdnaJiY3nhFoCu3TxCA8",
  "key31": "326PWSQanwxBSv45EHfFiyKKcCnhnF6Sdh79xN1G2aHJ9igXUzZut6Kwhkgj4rMtFWyyKrqwfxaWtUnADRrg6SfX",
  "key32": "RPTjMJzAupBsxisZ1tVGLyWBeVRkrN8ychnuKgAAUDktnwLtRDLhp4Z5qcjFEsYrzeqqBmqdUaFeN7jbsJMyGTT",
  "key33": "2MdrkX5fdApTBZRffYCSfbbfzcnJqsRBnmmkuBpdKqZpvcSpD1PyvYchfaZHfyafBWhiDcTGHAFgyqt73dqNdnKK",
  "key34": "5ZfK1xQ6DMyErfphh4dT8fwTipEZCJiEeYPUDmq9WRhHM67RHMBHar9uMVkuE7ztVLGbPQYa2xMn8JzpidcUWw1Q",
  "key35": "4Knvjt8YVUqctJCyufMxRQ3Tc77aEY43D3WQYiGyy12okVX9jheeJ4BMvPUuyQ87NhLA7PGVhCpK7m9G9J4kZajn",
  "key36": "2ggPdwrBfg844jgUoFJeqjHpCWQHptwC1hV56Tk4SQgzcyMNxusfLEM85sTCkRSnEoGgc78Jy2f81wAxZV3b6hTN",
  "key37": "aHAG6yUit6SMb2zx1PC2RQmMoWhCfUBfEbGeXFkMVXgbxiW8CaVVvCNDobTGrJ4kNCoqjFQjjYyQQqizQF13GDz",
  "key38": "vMgg8qsYaA9nr3xFDcYkuzP42wkeQXXrAmge5Wiw3G5CQUnngpHgjWEzjwNJmXa5wZPrKxNwpKKAQDKDgUBhvuu",
  "key39": "eonYciQf2URkkT8EkAx59XaiyJTKuHBpXJgJeuzsdP7H5Qug1T8HCvAVVANYBessJsDQYcuLoKhxVFcbxg7xzjt",
  "key40": "44SPTgkiYsd7H1vWRikUguVbapjEtxWVckFh4hdDaprvsYNiSi9bonbG94zhJLyYjH8bG37qZtNscoZH5CtWwLcD",
  "key41": "32E4HEp3ECU5QxLhDwWSzSxL73hg5Bwk3dCDdtS1JzaCriFWieaxTvLBoc2PN5fdjePoarLEcCmz7yArXjP4Kdhi",
  "key42": "1mJ5wgjm3XpiBuZzWDQi4CApd69kDdJBJ7Go695m3EAn52vdCku4HFGT69Jx6vMx1eNHyEsRAJj8tRquuLCZhpV",
  "key43": "vX2gpitiycHJGXxAMMAirWntQKjWLucL9beDuaWcY6RGWweyuGjHxs8yU2iDdVWsXAgMPFCkJXarGqJPGFn8qcd",
  "key44": "4ogQuwpi1DEjNhUAYndiMbKp3AWTyLdx5NXFm8EgdoBwaANbiJcGcdGUNytSDQsEbMfrq79JREDU45XmLshcUxdq"
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
