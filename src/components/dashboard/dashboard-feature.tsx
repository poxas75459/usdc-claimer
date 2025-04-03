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
    "565s3sozuhcP4YXaYTnz16ABA4uwm62r24cHXZsq3K3E6GCjh1gGpFz3z6C7wnkTz1HwTudjiJ5DPm8sB8vRJ6is"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7J2Rr6a5XpE2se2tyGgMmk7XyajaPxACLPrryX2zLKregsTbqGAuPtkx3i7KNU9qn66j2kJLLfirmagfmbySyKG",
  "key1": "3AsdsbXVyqHnVSTMM5f3BisJqrmEP1ab6wpVcSkv3NxZQkSWkhYh6iSFEgT93EfoAeLrEgSpuz2Y7crM53jPVN8m",
  "key2": "3UB9rCP1jxvh8KkfWNoTcGwG28FEuYv6KJ6r63Q7JxVKJNcx9ySmQjzhnGmdNqfD54zfN4y9weRiN6MKtDS3xJT5",
  "key3": "2F72PmR8BokpYftfhNqrPXwFTGiJpVBP9dDhwymycaSoy6g2sNKkiqjZDzmMVzBaf3HqtaNPTUX7He2E31aKPwiA",
  "key4": "3SUs2rfhrWr5usr3aZHcXWgSzK8fxavqBfUmjWz98HGStWSSG1guaxGdyqyMS3wEWMXcBfeHny476AKPD5eZVUsV",
  "key5": "srEmu6XkMPCX4r5WxFwNbJuGNC498E7abCwNB5Yw4AVwwgAoDjGjByP8F9qty3b3wakzhKTD4fWyKLXWKJfDrPs",
  "key6": "h8uEh4aLWTicZYvhgE7BjckQ6DgfF2HkresR3DyQTd3aeCUKZ5cWJjk653boiR4oX1wmCwvEX154eTki3UdqwMy",
  "key7": "63fRbzgponUhmf6LeAxbKWgPzeGcXgQz52Br93nhb6uk9f85cimQiiQx73ySdbNeckE6h89hU2yvduipR1khcwg4",
  "key8": "phjw7y7sJcQmAj4z89WFUhWuaNWgtrGh1sQW4LK4wyoVGzQykjTKiKcxAruyWkfPFnLcrLPRMpg2m8rpGZem3Dn",
  "key9": "52F6ceg7SGHCSQANZ3ox2g34SbM8q2aMPTzia9DZ6itcJ52NZ1jM6TQS92whARKkrT62xfv84EJJ4qbzYjRCZB6p",
  "key10": "UnKDwVs9Ws8C7jJSYzXJfXXEjYUdMha35XexjvBTS3V2iDubak2BLeyCkQJUN91Q35KCxQceJet1FxjBqRVbFFg",
  "key11": "4uy4CmYBFXurwTam68kXz42SiVorpyHeeenjTS4qctvWtpq2UUb3c2KeJTFMvSZA2sHyND1vu3AGhdM7SDim1oFa",
  "key12": "2s6XWsJJe4QUZMR3D8HkGG95FEnDVysc2kvQUs5voWEMyMsCcg6K2XJ6RTt67Rgiwgko4T49yCnj7VwQyXXEMorL",
  "key13": "5udAM9yRFtoKTDpDYZfyCUMZrEaieRm8pP73LfQEwSt3NdiHzwmXyJEfNcHh8VuZ1mE2vcG9JoaHsjCjxLAJGQjr",
  "key14": "2NdSguXZWecg73wNEzNktqxNwqMQgDFzbtN1yfHk4w8ecZJKogpcoh1ja1VRQH9JJUUBc7rfd1B3C75BjY8ogChZ",
  "key15": "5ov3AVJus448UjPWbsuSsY3QHAZEa5XM3BpvdTdyKY4MX6o2T58TLKnJaJGcqES9KVsYmRbeGvMWT8mxi67HL3tz",
  "key16": "3qKp7pXpANTQ71tGkqeFBZ5skMYQ7gLYLZG2BKEuh5DYhHrjpXvJ9PSKrEj4mbVsUFbitPSGWFDfhk8j7SFqus1L",
  "key17": "4KAvTbYejeTKh5ew9xFyT3KXNhBehrUZerAjQeBsUpC4gX46kf2v9BVhx7kKufDEJr5JKRc9egghiqnzrdp9pNXV",
  "key18": "4AQ4iHa5kco8y8SvfGyPgi2yXY9G6G127Vi8Y7peXFovmRQhzH6APzbwtymDTcM2TGnkcdqPV5af97cLWNUD8mJz",
  "key19": "2th6r22rwx51fJZA5VZWGHiq2xAc9gx9XzWRCu8SXb7iWE3n9wLWp4pLYs1EhbiGDX3vsUm3dmZdhNWnw7G2qDyS",
  "key20": "4ydRujEnxVTPwcZByNQGkpiBUpruSSpyrF8tmVquTam96ue6EdmAiu9AFoMVYb71oHZYZXYRP46Jp6het4ybqwFe",
  "key21": "4vkiVGRybB6HX2Ukt5vm5RH73FHUFJdhJyEWJNzExrfuDZsy5dd359NRGJFNieMkCpi92F6dEiGz1mcrP9ourE19",
  "key22": "4tLTG6wp2BjUbD46uYyhdGFpg9j7ErfxB3QzFji9SHWyk6Hvbx9YAa6gUaRGJ2Pim9fgB4Vj2jVeuYkBv49L3cWc",
  "key23": "4GgKGdJPFMGcZDM3mHZW6omgNcnDFiTYCWy5FgWrdjc3mW3mTND1VGUYBgbHZ9ZMGrrewWd9iCF4Xqq1X5ktE5sR",
  "key24": "2PLPAKGkveJrVBH9LmJYuJ2NQHecik852H3PNCWSwgujevRBrvx5g3Ne2MyvfEJjVF6phgfGYbnLFCY3cJbAnDBw",
  "key25": "4ZQDH3hbqHwxAJhUnFaeAL4tcE28MnQJ7y5wjVsZXnvrXseyLmjG2YBXAaMyxMJNmJyWq3KtxVbGkgWahz7KSuJ6",
  "key26": "zMjffYbg5UndcfkyHfJXJXk1xfS3BTaeJntE3tTTPvXg8v2LMJkKQ1YPTbTtoY8bgHwX4jSyJnyagYypGsVTRXZ",
  "key27": "4oFMDB8Ldatnt16UwY8Qb4jytGBCBfPy2ENwkMUNXNNC7Pnsq4m6VPPdPdMv26GG4qy38oJ9QYg7SVJ1g8yfrsgd",
  "key28": "54thP4R2ZLiq8Z6z4mWc23S61jHwG2CzgqbnQZRQA6WDj7nXSWerHnrPV4SwN4J2vTLrurYHrQmdT1vswUrqR1wH",
  "key29": "SMUaB8JmFYV1HNwkwd4fYXHVg9vCAv1ixns1HfiG2oGF9Xz9w5zXaVjMiFRCcmdgnz1KPjrp3ZtDULYyYGyLrgT",
  "key30": "4ZJBemcJ72vadGVPgsByb4rgbkdeAgGHPTm8JVemjC2KzzLGSoSoX8cHYuTfDCzqP8BwRqQfZt9G6z4Ht1boN7hb",
  "key31": "3eeWtMrX4ycETLWMmmBHycU5SZmBFviNJ41B2SDz8G6o1TLczK3pdXQKVrHSfBi9ttYg1bgFxH1VUc1by62DufN7",
  "key32": "3nj7humnLSJvCN2Gj9houYuzwZSckjq4r8s85X5z17NewWRustLQi4RyNaYak7pNbxQk8mS6GpFBPBdxgkC12hP5",
  "key33": "4zTf4H3eMp9ztGFk3CnR6ZXqvva1s4R8ucnKYKrpJYxyV2MwxFUYRMpb3s1R55g4urN5TVyaL4NK2GgVuUtUM6fa",
  "key34": "38o16Tskknz8fFBfcX3TwLt5bZJNzL4QTMyFRYXb7aa6xcHLNA8DL532CGDcPEgk2AyMapTi1gwn7QBr7ieK5gwJ"
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
