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
    "5TNc8c1U2gY2SmX6EnMYZf4LtF12UEjC3EY6yKmuhLpGDoYUVBdsJrVhVQmd3CnrMrWYjTy6hKLueNb5CnAQ4dDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N19Hu19qijpySgxTqstmTFiWxJERj5eMQAnsaJ6UpDhFRui8A2f54qBTyMCJfe3NsrNqejMH4zVaukaFSTCzR5P",
  "key1": "521bCtSBQs4cHmcAqUkCEJRSe1iV3jJsdbcNQEZ8KucA47h2XAfj9fuVqGLS6znTeriL7NTSB4eg63emGk52q5vt",
  "key2": "DRYcgCy11KZZyumzWkrromVqnyMdn6PxqS2Lpvr7YAqoVqxspKDnERwZtpnjQKK9bVmvCZG2MCmLYdchsGc7EGV",
  "key3": "vW5Lwex3yRbmEgLi4X1HoyhZqkMz2LT6gzZGVzMYWBoqZaod9BWNe4XvFEYgedQnnDXJe1onWsQzgksBfP4dCSj",
  "key4": "3WBiPwfXzmJzz5BRgQzrZ3H7jW4WHWHT9R9rkEFEL3rcHRXZyPZ48M6114Qn8avYYf2Ed487rdPw34oidUPbd47b",
  "key5": "67Jnxwqpdhhm15Ary7YbbDxMQMLLNCTo7p86dKmgD6R9FopdGVt68AgNatdiUFAp45cJKEQQsuZFpwirJQZwVVCM",
  "key6": "2swyLCSeBqZWCotiYgYbxEYKkyeWuHV68C4zRHfMC3ALkskLUrDex3Y76j9qytrt3SiJyWmG5DggxjMQvCWP8aEj",
  "key7": "AZSzMwvWr5LBXvu6WEJ8MBPQQPUvdnvLxJgnKocgLkKJPxGeubvcE4h6xWpTLpiGnN64RW5tE4SN7VERxC7YuEN",
  "key8": "JaTv6vmchmaxAWhRT2fjmNBy1rTo1j1xoCiXYQMsSAn6KDWBfmXj2HTENxREGPByakt4GK6NJ2YXMWoKyUsTCGK",
  "key9": "kyCWNdMYHJ2Jimaa3inv2Ws3kQiUYmAxkvWCBnJRyqBsVJrwe5qgGS6nYcVeo824KtW9AH6bJAzjywc2twziyNJ",
  "key10": "3ZsgsPCgnoHHivwYpU82opZovyRJVpJeXH5LbS2JGgjuaMCeKmE89VrLL6RngEEhQZT5vFD9mTZrQ2wvnbk7VYQF",
  "key11": "2qw2Lox62hnWjgdyvz45zWpxYKx9KPBUJTuGE9DC5qYy98dFRi2PazoRpySFeTVvrBzuYKBusTM14f24NDuzgMg6",
  "key12": "5YTPez5XRiUHBtDMjw49CcekNLZ6vLq5hvZPEZQA6bkRLjjWG32Tea9Rhg3uMjkAwU7Sy2ay2XEPcHvPfkX2Jchj",
  "key13": "o3DekRPTVEZD881vtxCr5TBAs8v89sf45tch5JGKaQQbcCP39nXjtHoeBvcAVLCCn4K8SmyHiueBCHGnoHJTieq",
  "key14": "CTiC3ex9TUBnNuiY4VZxUa61vDGYCGXMVWawc6CaNuNdV7txo3xpDqbS9X29iCWrxeVgXQN5dr8jsRq8ChZ6QEx",
  "key15": "9w4WsTXTusU3VgkgiiTcwog9ETU1KTaCUMrurFqzLBM6jKKSKqK2CM8xRD4QoBQvhweDn5xa8KNYfzsmHsKghr3",
  "key16": "2TCBLxXX5R9KJSLha4GKsGjJLkb7X5GK1HTc7msnYVz6VkJssaVuT3DU5i9EboJQ5Du7mPupeZWLYmCiaugbKyBE",
  "key17": "49J3RuJWYeTktYFyG6bwNWkDkwnyFZcWyE9m9ivsHvb5Pkv3reMLV2jFb7NZcAv16MkhPq7S7WP5FbZY7h7z9koC",
  "key18": "55kEf4bCFEafV5m5s1FHCWm34ck3nWKhtP7ZEc1TdbrozDkHRAQAJvEi5F2S23Q4LKEbcrdnsozu7RStyRd8iwrd",
  "key19": "4TYTCshuijGsPv5PjfvodkpXiGDHXZT1kptHEKR4EEMRKTWnxwUPUz7QfQ3qA4A93J2hZaf8jRdgSCAnkSBQhAxs",
  "key20": "4wWGwrT58dBnoEKBHsLnYhJPZdK8XAKpKpT3DLgxMQTVscTBLNemeRXJ2R3ghBsH5ZPWQBgKhW5tcLpLAtwBYTH1",
  "key21": "3tFFywfwce6WkzDcFwshAeYywrwB6ayvqyoTbhG6eSZSLrbDFjmaNG66aFXNjhXh4wybQdvphpKoBzP6Jc1NmHC7",
  "key22": "cJXdvuGKoVVNZMAmiCp9u1SDUkb4b4d19TVCuNxDm3WuuEYpqmyxzji2xAmd9Fe8LTGeKMm3y2xNiLMPm6W8tB8",
  "key23": "4jLKiYE1A8471G7JmutPxakXVQyJJDeGa9UeCEEoyC5JHoM8zkbRWQm1wVXDtCWxLZ95Nnmgem3yUaiGotb3qA77",
  "key24": "2ZwBwfwGuLRa3oXVtoqUR8eyUJBVnHCyBQYm8CYbiTjDcC2StBpmkACFBsqsi8h2UBtSEDATJJCg4nhJfEtsUsCQ",
  "key25": "fTpsKWyzx8diqnoGVfD2hd3ZEkCKNcqMdXC3Ktv61jz7aE2H4L6ZPMkKD1C2MydhuQBx4AdGWNbeXmbd3bNh2mr",
  "key26": "2sqBwjCiwsfg9HJ9DECikedxXBsR8ABPWJtX2ddfEFBLUw1KxmFtTthXJ8KoJdUgyteMAacdswEfA5L3d7caGVc8",
  "key27": "RHKk2KMvEiJdPuWmoyDuAWrjxBpnjPpSk8bWHfRv4tv6s4FiQ2YonfnmiV9hjDANySQMugqzMpAnQ6nsoByhEwm",
  "key28": "VcgKVueUHtibgyAbAae94ErXmTgzveLtgBrtcg2jYuVDRnJ3ZJd9kH5chsBQs2s8AbhYooPEs2PCkLkX2YSCvHD",
  "key29": "4NWpP2KyMiBZLFNa78ujzPu9B9zbo6euNK3Gckb8a6ytAW8L8CRGfQSby6pad9udVEVmaRCA9roV9zQ8aGTPLrd8",
  "key30": "4KcFMLC5cefVXoCFCqZshszp3JM3rR7k4bAmN4iB2T6eKSRgiUzjvt9vyufCqagqfADi2joNRQuH1BrAfQNtAJdi",
  "key31": "5uG1kEejsVUFFewD8j9ARNgy3iQqywSvAfdy1vupRsa1kZYLniKU983seFTrU6gXWtg9ERsw7dGoDn7abB1jNLmM",
  "key32": "HYjvNkXd2UD8wkKJkS4upFtpideEaHqutS5vNuhyNC2EtLHdfmFjfgsyM3fHzYppMNme4t3mMQdP11Sfmun4Uji",
  "key33": "DSzBXurzBYvL1wG9yv8FF4oJ7vVqD1upsPwYo2KQeBN1q3xSDKao2wc4BMyeMfu3ZaxWjwJEjoHxtPMaeWK8yB8",
  "key34": "2oS7Pqv8yK68oQE2ntTPur9dNRt69NPMcJyJ9uU6ygxFi6j2be6keQLhJ5F9qsMLVK2UUXS1MwsHGQTroJwdG59E",
  "key35": "pF5RRZZ2rYG9Ch6eTeCCjCwzgVyYoRz9ZJwBjvhcMZeVZmqnQgNBsjzqgbVJ2kpWGsLXpWwfExSRuTpYBVb6MHG",
  "key36": "9htkUQkEUxxEMSxDLoogbrUpNQZJ9jVR1WWZRkT3GKNMRVRP4kF3nLKemWj54RfC18agvq3yNdv5QtTpRGzUJB2",
  "key37": "5P3rtr84GH48Ei2Ss7zWEnBqF2RDXVBe5EMHvj2pBw1cVz5Mp59iJaAowLGdiJqzTHTJ4NCeUkWrYZnFLmAsjzqe",
  "key38": "4NJpCnUewsiKptsecZdc3yEbNVSuQfshN1scW36Lm9v6vkuRQjKrt6eaAmAEWgSyZEaCsvAK4uP38E2VMiscZnyj",
  "key39": "5Swzm5umo6EgfRVf4NxBRZNzjnpPteAaiF9rSu8YcMzynT5Lr8biNi9iX6j3dY5m4z2zWddVsa83EStjcvmaRiLK",
  "key40": "48JSrmWJ2Pq2zM7yWz7ioVmq2A2wdrYKCKfsvHJcFiucdJtbst1R9mgkfsKx4HYy7DDjxqWF3D9dxgG6YEotWhPZ",
  "key41": "4aebFjBoUFzMBDRUwnJYfbk2ihvbzec8ANkac2YGZrA5xndXcL3neUXj1aGoW2GgLgrZZLCpwsHv6huHjteqCV5K",
  "key42": "4jba1hQuoA8p8Z8RhDddytzLfKVugnUQKpjbqYYm7oDDVW1CsMhLxVtrpH75QZvoMmyffeMMajALSxo7H1F8d8nq",
  "key43": "4ieBb4uRYjui6htH9HMAgDQNseA39K1FmSgRUaDsecTzJfKbcVEiBVquT2cM8BMHKwCtVAgUqUZ62GhnUZ5EpaTd",
  "key44": "5faJrQDSsWc7GRJx6kM56r3DuPawMVhF4tHSV8woqFRffd7r2nU5hw5n3pbtu8jkwDQtg4PFFSy1EWRb1otPMUme",
  "key45": "25MmuxWQwRfumd3K6ZY7k1nHNfTbm8m8nctgV82izBj75uhWQQdUuj2xEjvVsCgoLbLdf7YFJ6zuaoYe35sULroZ",
  "key46": "5omDwjzPVTEXofCDVfWvuDoh2kkZ8yTZs6aWuicq1qaqTPXDMj6TxHdoth117dSdqLoMBf2BhTR7kXyDV1cZtXXM",
  "key47": "C7tnQfFBznys9fMcCjHu6h52WiKQoYu9MHTodJG6su3PgjbGybPdHYzG7CqRUiqA6v9se3uhDz8CNuXxzMHBA9P"
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
