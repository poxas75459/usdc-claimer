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
    "3Q9cGy6yGTbdNZ1wd1FQZrrM7fk5zdEHAbQYxD8gTs6fMy1QJVtpZw2KBAJQtHL6ee4PdJorhrJxFb3nmEJPEaoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eu4Vbccy2BWkm4PJ2npaVsveXWHWmyVAEyRKi6HczNPqbPNZdX5wFd81rk5Qjzi1FMwe9TAjMPUWzthnyDvmByz",
  "key1": "44sJ1nmSPWW6zMyv7EPGw3BswPin56U2pYAaB8S43kdz5VuhCjyPgkdkEqQeXFeFE3qA53mCx2hCthST55EYoB6o",
  "key2": "f8e96r3aU75mCEzascTFjfCeaNGATjdRDBFXERsLby3wa7JsGQPV9NJKyonA1VP8SV4cg3sd4LMCHkNptSon2Go",
  "key3": "2JhmN4pMmebrmYcmjNMKpQigrmBPMsy2AuXii8ZDrsGDaEmUsJTBpLQfRndXnMSnMPTFnRUj6Dw1P2tab6jnn2bn",
  "key4": "2u54PxUmuw8RWbqthftCho11J5MhNpzujC9eW7R8EBjbHanY54Bz1xMtpsEQYcHbZJn4intWJydmDV1EqXbJUv5z",
  "key5": "35p6LYzB5HPsEru9BKFXRDXhDhQJE7NdpBb17tYS7PrTk7JLF88xoBTMREJmXHQsS11o9KcMTHasE37vyLpMEUgi",
  "key6": "3TTaJvgoxquE1v8ofDUgXANKxzznJjvs1CKMwUkvfoK3h3qu7o2FKxK1oVHZzVyMFRKyXgfTCnutpWp1r3zSg1cd",
  "key7": "63sSp1HvqkDbU5TH8Tsi6gskVSaAh923CjVicbLUf3opBHsH3uYgPFqesEwnquLE9bEVvFsswGkN8zrNUA7Tdw35",
  "key8": "4JDZYTQZNsQVzJFf1XEh4oLv4SNQXogv3DwpAgQ1KysxUKBcKiYCs5pSzooiRMFBz4bT9q6JHpup545oTz7hvDYV",
  "key9": "66e6K1gjL6wAFNnNvriorYZHyViSYsfHursadqtwmftuAog3opwS4zSvCNgy1uy2ibX1cQxgZpFPuzEopotHQK69",
  "key10": "5mMRjVVvZohvw2B6owk7nzhcQJaXFrKss1dPxbPHstJ8smFtoAUKoVayBWofkXT3xfQFGLqbf9Z733rNw3ekaN42",
  "key11": "4dQ1JhfpAyvkhD9jXTf9wzykQdc7bb7XW2tAu1HV87cN8ppx6JQ8s3QxHM79nuvFLu4AK9bgfiNkwXUsrcoLHJ7X",
  "key12": "2kscj935KjvtqrUQSYZJ82Q4k3YVyjaKuuuT4AQNbSnBi48LKwzqMS9wMmgAEqUKdeTAiXptSnUJQmoB1d2ibXCL",
  "key13": "5jjbBbME4HMBtEvZqm6G2A2D1YFXQ8mVhug8eNmXmAp3sTdYe1UeSEGFhKoCGWjFumA5gMMQcoEVHUgpW4BspBt6",
  "key14": "5vooLEiczmDXtvkTDatdNa3LsnAZDQ6eFjR1PGoHmtH1HiCvFerKzecVsTpiVhSy48J1S8PA19fUbW8vGK9uZaZ8",
  "key15": "3MSWvQ5JgKHWpMqQ1QsqcjrWyCneVXCe4EeNxhkCju2Bt429zFQoyukg2u1jPLij7f1rzTvM8Rw5k4fZi3Tuvpn6",
  "key16": "3yXrv2CvvBwpiSZ1t1YdWERZvssF5Z1FGpDWHyN1jm6HEJqRjbYGZL8PGHsJtGcjMH2Sb8s173SHuydWAUfhM65R",
  "key17": "53TnQMYRMFzgWZpWXafK46eZofW23RsKfpAWCXY2xmoGhgkSLpqxaYJWbYN166yA3eHL4kAnud71uyCUcE2dEghp",
  "key18": "5vvvNiCTwvXf2F5q3yNLL5aTF7eUL5b6ckx4cVisu1pewTgi8ES5GNpY7BDNfYH9faZerdh2841AEmeub7TpEMy8",
  "key19": "5fso7EpwokEx2xug7BNnQvoavmSJt4unXK3rTDAn6ik6HQTKYQ3RjYk3dDsAdffzhtBobg5M9Q4HTwLMnjgaSGar",
  "key20": "5RFekMPH6fZNfcwdgPDMUxSdufmnHcpee5opDvkdfazYxcApoiGi356VtbXJwqxcqNtBYLqGE8XUKc5eWwXipnmf",
  "key21": "3iqymiNWifE7q3nWkG52Bn9zY1aY7w9n4XZiU3Wman9LvafYAp2iTQaYYxX1Kr4kV3fgxzh3j8omaFW5wQBkp7Uc",
  "key22": "3e53vsvYa2SJUe59fvcMbr8GA4KoSjauaTBWnpbAxEUywcNVfVYW4W7qZ4kJ5aC9Rgr7HWS5eAV6uHNKbgWfD6sb",
  "key23": "2jjcoKmQw2z6dJRDZqeeNSjxEjWMMfz5hnBadYgSgx9VicYebS2QApCtwPHnZSG2TmiskGCYSANfF99EE7pvd8Te",
  "key24": "4FaESg3pocQbihAMQipqkV1sbpVhqBYDoMxWCkPzu25ac8sbhWCnrrbvBFyhXRMR4RUbNXp8x2pEauUZ4kJfbtZv",
  "key25": "2A5EvvXjMUFrRrGzSoFk2eRg8cnh5mKfa7NHdKrdtJZJjRvE2uNmwXeeFus9ZoePt687daFvbtUe693d4wGKiq9M",
  "key26": "64PxSQURPXdBvYrcERXZevrB2JGGB4y2rtrnPHpG2pvFpMdhvSLkACyNm17HHz9zbgbE9iF3rDbDYr5GP5fdBngE",
  "key27": "3ohJibpKEfxnoEDru3SJ39bS8yb9mCzn4MLYbtPrgQzjXYgc5sJmy3ZewgLi1sR4AKvVpFPH17tL8c3chsCXv7E6",
  "key28": "5yeZY7tepGwiEekNb1QWkYG3bsjezmdbXd2xenXougiKuYiWBrq744myB1S5NS7uUjUt3k7uX4LRwK6fNxYpoNsw",
  "key29": "9K1MjSXb6Yg3sdsqUT1jC4nZQ7AeqpDSBKR4ohifDcYNZ2brwv8vWhA2mJxa4r4zttFFYVHhNemZApwoaoE75Ui",
  "key30": "668rgJ7zvUd8Z5BJeHTE1Lvev558UjHY6acdAv5LB4siaiS3oVBvBZ37VY7VnotjmF2X58dn3jWUrYcvu3UrtKrr",
  "key31": "gDSjbUSfaM3uXpWg8tnsdXsk1zP5JzkB7uZKa2G1wTgKrPhtAViUoYMQTwK24Wx7izyrcvLfuvBiofGaLfPGByN",
  "key32": "amiA6oneuZhkY2bFyAZfA55fcu1DrEfWb8kE8RPgp5V58yMGw3U399bzznGL4RSZBRxSxJ2jt53tYaxWSKXsuBj",
  "key33": "5i1BEoMsVHrYhXiDe3CoCivJqVnorBwN3uzPL3PPV43henFAhbe9PyhDsVhVJ7K5fkYJXdLagqqguiMT8vV7ABTa",
  "key34": "aX9YccZYip7as4mn1vuLSENcY7dMFq6RHeHNUaYon66pEYDGNcJQbf77u1k3hwQ4jnSXYqaNeV1EcJhutnNFyCV",
  "key35": "8gAs87ob354j1J9Wz6fNJWq87NjP9va2BLas1ZRaM1oXx4RT1RvHZPLAKJSe48XPozCqrsVd5xYcnc4KEHsLhnn",
  "key36": "2WN19m6nB3i2Rf6eJ9gTURRetweZE6CwM3oLmarR1Lm3x3WXurvz93iuT6MKtFNJZXf9WBkvKQkUXyzKS2iBmKsQ",
  "key37": "4RtizmAVuoDhFuUFGt2TbuAr792bvdUNQrked9VzicqNERepZKbLuhfpCsM5nVX3Pd6XdX3YagqRjfcufgCYfiiG",
  "key38": "5AdK6ezenZVYiJzDPdhWFkD9Z58ZCzzx6fPbsNjiGoq84cPX1aeDnYEg9xPy7M7uwHNMZdozRT7wyw8JJW1wStje",
  "key39": "4136XdxwAoVEbYTGhLwK8XjuF3C3WYRmrJUERoC8HvH54W8UusGjAgks1BzZ5b4Zw5ed236sXNXNQ17tWM1KmjaS",
  "key40": "2pZFJtLCdRinnX1EbVjoMWD85PihnHZhsFmr58ur4MRXXf7jVaFcFf6Kp2XocfPjKv5Heni2tWLDS3DBwWQbxz6n",
  "key41": "Kzvr3weZTy5Z7MyvKwUXAXJ5NfspWAgnENu32pmoGvvnxW3JFAy9qE45b99rrSkNvFHRATJpVUtyyFjPBqUFxND",
  "key42": "4KSvRTLYvb95agJ4qcH1zdbJdJf65kYoJ3UpLtsyubCzremXXGRCCmimJR72nceWakRvSHc5jnWUUHv1Fcbbcp1g",
  "key43": "4UevcRnhJZvn49jWUC5BcP6D3XNmmUGp5eMUBbxjezEhVsHBL9tnBsVJxdVdsYVuUHKNJqCgrRKjrEH4Ju85xVY5",
  "key44": "4sGRqpcvs4YoP9TmpwiCDCrDGfDRKu2zF2kidfYuurQWzfJ5wBhhevC1LoKGRkyxBAEYixtGbRuHELBidk7ALY2k",
  "key45": "2dNZ9tEKxMyGRWJzVBQHwkwiS5q2XiN3fZRmXJ1JEqcn4v3RyaBrPGQ3xGrsHzeipEkAyT9gj2ZyA13ntP172UuP",
  "key46": "4XdzWJXosPpzpBDSMda2Tm71viYvRPLHcpd4C7rr8mKNSjvS2zsaVP39JLWkiRUqKZkh4AJEo3hLQoqHWBJvWTV4",
  "key47": "5e2yJMa6R35zWWvKo48JfAentoSmJmWenudNUmh7E2PXeLW9VMc3PQqf7MDpqpZSqPaTdDspkTvDk4qqgYMPe5cp",
  "key48": "5S5pxKDGijZzo5koaJkp8TvfjzvG4vAHoWjhRr1YhGNyiAtc61tu2szDhqSYpAnLVaBsYYEngV2W4jCV8xzZSjR6"
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
