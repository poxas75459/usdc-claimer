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
    "23ynERdMYpESAJNmS7H262K86GAmcSc57PWhpBfZzkDNQf42fp72eUfbM45eHtvXCdWaVktUApKFsZUrZmBsodUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HCba6HZRqi3dviHurykKoSo4B1hvf4LcLoKa5JZ1WsCQLhXf2YKMimvcNqypyHJqjV7VqZs6V1tJ8Bf5s3kA6mS",
  "key1": "2WHpPmu6PcM5BQx5XeQ5DB7sLyts1N2XAzh4cPCFJbGymdudE65cnxpkLBkiM2VkTwCSC7GmvDv5n5uSNhp1ftcV",
  "key2": "27ciL37vaS4RCQVsbL4WY8xqEDJUYmKXErUW1c8EjAYFJcp5qoKF6eN5Dbrqtrq9p454VtacwNeoBuHdMnQpEPLm",
  "key3": "hDuTzByDBt9iUVifjG91xLdqbYSrLiS92M2v3KjX3Pz8gyLDko7X5w4VnoDCvj64MKpf8mfBoYdsQTo1QdHkTey",
  "key4": "to4U9vS8E5jCGupStgUB2dhe1R9nb2UVZ7X7QbxPXnPmFpvVGV7M4jtEivvYYGcP7gkGuZ4nuDeVFqKnnFsAVyL",
  "key5": "21tPSgd2PLnVigzNe3rnW6gLsUrsL5TQsViWH3Kug5iE6vqQbmnJ96b1QtsNHkFHLUGGQAChHkRepWnpx6mPfgwT",
  "key6": "vZqvRqPkKrwUHzqow5uJjVAaoH2S89EMKEnZsUTzqUWt5g2EZCpPLNwGi9VVEDM5a3fxBSyiTpSwtCKhpV3i1t1",
  "key7": "LKKxkcXkdmE1tpRNQhSwAR5ZFfTwBTPDTNwUHRVYxXPezKHQ5Hv2ovGn7mpMjkLo1pkH4v77LzSSqBuxBjTTTFe",
  "key8": "bRp4qwhsVi7927rN9tTGS3B2mcdBYnmGfohZATg3basCyZzWR1A6GaEDKp8AVAH5UYo1acGbNFKrxMeSyKfx2iM",
  "key9": "5DtrGk7696WEBpeXarfmsZFY5LN3cwZikULqSHzkcjTzQ6wv1k1a5CA5uq74kjZxfwvkXAzLHy2APoyjH4U2svk6",
  "key10": "2uJ6vafoV9LK6cPNBAAV4ecM6oNfmANdLqEAYNQjmKz7VRm7Lvizw7EjFKWLRsN96BXJJFXReuYrzVEnaK35ZqwL",
  "key11": "4KJH4u3MeDbfiqwarEXs6wNQAaJ1MP2aCuLWxmirjkqTttKtYyxZHgbcMSbGFjF4JomX5mub5ziiMaUujryeSwyC",
  "key12": "5t1sJK4QhgFzY2ddTxeVZk1PxvS354NyFdnvWh35wZxDgAi26yddHqa7jSVVuopybTAWLMnMP4G4Gx94FjF74aMY",
  "key13": "3VxVbSQiQvDB1TP3A6cjq4tjnMVwF2in3YnDbhmHZvoRDogcauk1PymmrwdYFA6cbdn6TRMamcqfSwZtUo2TUkNN",
  "key14": "24oH8FBnHXfhbe4w1kUQt8f8W7fRcrSesWkXw4gBGxkJFs62gqW29mZpctmM8djcAjuB6oBpxtVRXEKq1BQw5xa1",
  "key15": "5uc5yunGXUe3KpM2QGMEQfft6ESXPwvGkShkwUKtjwWHzExPMzCbgAtmfxAHjAJuB3a5ARe27GXTkU3xTGr5HisL",
  "key16": "5G75r8rYP6SWg9yRj6vZnfX82BZRcgap2dTnazZjqDHG6w2N4YktvwiVNNwEbVMP6ZvfQ6FRkPeScE1vA99nG3tH",
  "key17": "5JgbKAp9pZGqPxnnKKbBA5bMyVUA8PjGDZusX3U7VYm7XuB91dBYfhZ8fEzgzYefz3HQAjx2gVrLPgCELQa7fk3Q",
  "key18": "5QjWqiE8pPmi49MKfF63KezJZtVSFP4kHrb7GJ5a4QeGJouHtt1p3s3woBo6ZQXzSncNWJ9KKhAoYuRg5Fk3LX7W",
  "key19": "4fZy83KKcQ5JBi9oQPub2gGnrtrfqEj9vXHhRkiRPyrMYNJZKDvHQHthNiJZbSkLRPoE4PDHob4GTjuL67UhGtv8",
  "key20": "3uccDj9z68LwejbjECMmKpbE9kP4UTUfq2VHkXJtAfHPszfxxDGUS5pTeoviYj48u2UpW2zrMuKTSzFkyrP9Lvgc",
  "key21": "5jtHmszD2BvWRiEE4iaDsbpehv8rC3GDgSMaP5KJDark53WM9oTa1EZB6tWfJnCS4rCAxbXXbx17Nib6QqKThbDF",
  "key22": "2VcWTWYRqvPnJmiGipZzkERpFDiLx6ZJckoHGsvVGskthty52hDmrpuu33n3ChnjzBiR19wpfwnPUL76omiNvnXY",
  "key23": "3Dhse5yNMvUWcjgqBcc3sT4tHfkBWpqtn8sE3zsGoEChrCNrTYnb6CoDDVyKQAaHjWZsEmJ2seeUEr3mtF2so1z8",
  "key24": "4jJQRMSuJvWvmyhKiVAbggVdoCHxBnhdcChU6QnwzpCGeXBGcrDiVJ3JEfSpsk3YtCikL2MszoFbjhRTyCqsKPfp",
  "key25": "4bxonGxyLiLXmFwBJhB5rRfu6TFT64XUfTShydCqxQDB9Ssh6HTFhHWA4rJj9MMy9JDi9p3PzG634S7dETGpmnYA",
  "key26": "3teenkENEsDukzPdww3Cq8jZZDKj7cYVqvaH4i1AGLYuQLBNYR8bP7na7dDSjjVp2tk7xZQHSu8kz2SVqLkimBC",
  "key27": "3Qxo5QEHMbzpiVB5zuzPpTECis8jdgyvmBsGFZaPRFKvbptucGuWS4iAMFRNCb9D7G1eYJMkF4xb4fPdk7jk3XZx",
  "key28": "3sLT6dah2efbrGn7NqXvz4tE2SXrnFbBgkrWp1Thp4MyexAjSGQUa4JNhEaXTG9CRcveLjzcvaTEoBzwCx2obiV2",
  "key29": "3HRRv5iuQsBVc5FD6TonYyFniCg5nuyZpL6ELRZp1psUTZ7DNMb5bGCaQcZmpuPc7emgG2Y5zukVSo8oiJ9ADJsm",
  "key30": "E7PcVKivkPac5XRCzymjqYqz9m4HZsLatPc1xkYQEJHLYYsU36zkkp8pDubSRdwVKFD8dWNopVZAXsnJURc9ioh",
  "key31": "uUuHbDtRsPETzd7Bwdv6CsebHoUTXX8ZCLGnkfbhaKnS5CMzvmBYjKDWJX4gXwQivqzkZ2CRhCcrm9ArFz8C89S",
  "key32": "4f92Wtv7JVVwJEmXCJUmBjJhP3A3SGi4Zdmxhj1Vp49ajfqiM7Z3Jv497LDB5MjrcgtECejxEnXuYn6fRmy8s42h",
  "key33": "2BwMevYYyT74ewBvS7Xqdj1rLFQv4z84SZyt4DjdpDEmY3S2MWprahtU2Wfoz7M3kCZE3ZCZHkQbjck5qAMsjbSX",
  "key34": "4M5tYNJ8rcwxRetDWoYqERn971SycxoKekGfV3jYRt2Ex7btiqh8SWu2PGUWa4zaasTP1Linz5M1pniQzDPxa9rK",
  "key35": "2UkQ6pqA1BH93U9atEHSnohwKS6hB4tUoesxd9neKzoTaSwWWuB3koZBMBo3ht7P9bE5tSbkGfn48NZbbHkVyj8w",
  "key36": "4whSEFJppJPEPAxxpZvoHjjnBGfqCFpi8sVcB46acCEBqnEKofmHF1XLViEQ6PMhSKNyYK29jZYVTB5z6gksa8aZ",
  "key37": "2scxcE2sPvNYJWEvGmPVUx6vpBbQdjAsNop4ymRzcagttMTsv96ANsPeuhwXnWnYXzu1DmFbnuqrpcVdhhK6HZdm",
  "key38": "59SibjMRJ6NUcNKK3zL1Tq5vdAtXTXmwYq66LrVgMFKyyzYyXgLcr7QUUM4FzTaPTJ2VptPQA2n5DcxbdCXUETpB"
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
