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
    "3SChUQYcy4o9yHcK1gQHXpUGTqxPPiAUvQg1Am4gh5NrKho3VrfAEvM4U7ukEveGKaU8f5FjSkQnUZJCuWLPezkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CGJ3UCQgbeqrFFPbEWZZudkZikZmUhe2Lk5Arccogs4Ng2x48zj46MBwrf7ypuFZSJuj9MVyEx3X6ipDGxadkpM",
  "key1": "27jXZf7KnP5fH2WY2Xc4FE3qS2wRSPsnFLp7T2vnHoPp7H9m1vTRYsmt5LAdM9fjqkcjUaUs2PNBYjwHaC7Mozm7",
  "key2": "nRX3TFVW7dfZ9rYDAB14vmataxj4BQnn4AChkPiyADGyH7FpiKCbtWvrzJ6ADeHBfzHYoa3PJRszQYuxtEDFZ6w",
  "key3": "4kwBeokpN71LpHqiMix8WUsrQVoWtRWMJUedqWNEgvi1WWQgNJwAP2ovEDbT2XPtrkd7xH3T52CknUFaw2oVn7jq",
  "key4": "4tGRAXZSpukmEvhs81svhQDmQtjMaHuC99kwNocetx6c4DD917Vd6RjmsxbWHBmD7mn7AEEG4mjGvqeyQHo2n15f",
  "key5": "2vWoh2KddwcSeNkguCB3m3serhbZUA7pUKZi5pjjTRaxaCBcB7XW88whAxXVm6SKnVCkEPK4vNaN1W6jMAGaX4DL",
  "key6": "56D9odwGH2eimrT2ArEUmzVBP4dqf57Nz35NsC4641rKfkN1Bz36cSyrVA3RLsWnanxsJDk7Ao6qDor2xM6KJBTx",
  "key7": "5omUpHuqHwrhiXcZ7SEz5Q2aQjHrxT3Q1j7uXLxjtfsu6aPhj5hAKqXwSjz5g5S8SRyVGEYa9NzLx4Tp5TGQtJbM",
  "key8": "2J5FYr6bsx4tE7kwM7uVhQxSyrGuDTW3JDRiW7mimYky5F17KTN1vxC7Mbp2rawH5vCb8bszve9p7EjMixTsEWtJ",
  "key9": "siQ2TxMhKZE64KYKTeG2zoAvzxvnb9zxutDz85xLXutNH9dm7d6sj3TidDaYSFXwrbYjBSJZWNzzp1vPcuccFSh",
  "key10": "5cpGStXqZHnxGFkqh6SsYg937Mh5MBLWUKE3DCCxCmz9ci1AG7uoHKTv1isMNcedxqtxaUERkzZuzU7RG19GdtSy",
  "key11": "4y4BjQk6tgZ3gFUt9qoA6FsTEQGTS3CbdkFBiTqaCvotwPeasBiQYL1JF8BUzN8mVQNiB2FVTVDPByReFzQWSyqD",
  "key12": "4uAjwCv5SjGThyPDjRnc1Xvv2BA45PBrbYQbU7DJPBrGFrSGg2merSKqeFLP8TrZBftahZt3TW6kW4ijLh3raf4y",
  "key13": "un8piZGYguZrqBZR8WwvTv1iDfo26LStzUQxEEzMDxJ9bSc3iFYj4iizDkDKqJeFXmr7ZmPMywnTWETbeQirGNH",
  "key14": "4DnXWwVcHNjSzGLW6oMfrPjMez8xzPo11afCEkkAsxrDLeCTREsDeemMUv2j85wRybZ8AaMx8GuniGzkzXD8iYds",
  "key15": "2XnRiSUPfwjjZQS2uEGtRPzECwpGVJN4LZcxdJUw7EZxhk6t2prs4pC8zjisgJZyZTMb4wkUVGJiFe6b17pW4Kyd",
  "key16": "5i8gy62xLneE1fN2oQ97MuA9ZE2Mwx3tT5gbHQyUBEpSTCxSPM7mtyg1ogPHA3x38QhycNGGcicHgJmnJMTNfick",
  "key17": "Twqy89ki4iN5u67tVzs7V8579qmYQ1aWvWouvqmSuKuV9j3kaCHGY1xi5cRPHJtYpfNUTXTJvCGGsLZ9LUXe5Y1",
  "key18": "2mc8JVFTnxWMungW7rF1Q1F8wo1iWgffKf7hcAzJKm66Sc9UtkbpbaEypESKXWDVhCsYSUMFiHyML78sKAobDvyf",
  "key19": "3F4QWjj3EdWPsq3VQ8Z3iLwMtQrrG6rdaQKLymXGvTaVc44MrXTTM9iT6CFgWjo4imgpaXczJf9mhSYZPi18GcyE",
  "key20": "bkDdquak9rGBotLRV6nD1hE3iuf3c5MVhkAioHyrfi9e5dqvFnMtZ3o7KzMDX1Aks1UjZ8UKSxKnknjaoyiaX8K",
  "key21": "3hy4gSJgnUa49eiVcJZUDGFjSvEuCHJ4fsgvPHa7pTtJZH9QzJDgQNajZ9hUZqhb8RPyCsfWrHKXtfoHN4CG78Qh",
  "key22": "3cmn4YPkQ1E3buGzgRjumEVpjYLukxfHG2iQKYrjzpmFrXKHG5MGx38iSQi1e5RVr3R4nKNBNXkDT3Sa3ESRGS5f",
  "key23": "5HZMj1siCGMUbSfkdWSAwTDz6Ct5zRtozhYxuHc8XSyRk8nRM2yMk5ZN1Xit6haabadMymTBQ13j51FUJLny5Qby",
  "key24": "5DJqoKavkZnHKYB6usz2Jf5RUnhULLLLA4PwJSpG2SCfj646BRvXZgWjMPGhpTWEMASLEYSW4YqhGZvZLbofC6uj",
  "key25": "qk1xCQcxwdCRrXSDmT3Np5r3JzVtZm1SaHRWpyQFfh1QRVffVyDunbnsiBgT8Ls67H22nkjf5g1X3BQYmtsqPQW",
  "key26": "7J6GQhimg6qahFWNoKgWt8bZEHxQn8QBdu7N9ZEaLz6xk89iFk1f6Tx8hFGLKj5GQpvTE5kFWt9wH1zSgmqakWr",
  "key27": "ix2KTJYsUo4e7H4psJj4A5R7TsX32huf3CmUJCDMqmodcwFtWk4gih3jrf4xHUbU367H1c8kAr8MBkmiwN6PE2C",
  "key28": "idkJwDpKLiRKjvVrKvExufBZUMLsMHiHreQE11msmwYf78aErvCPNpn4LTCKi9NHXECztaonG5sgcUo6JiGxmjR",
  "key29": "5pWkXWxZR4wZxnsE5LXAXWbAcQmc5A85HfjH2AppFqhRFSiPRb7tZynBe4gSowk7VfvDWjWjZeRAUgSF9WKnZkXm",
  "key30": "2Y6p2qJrYcN1TZpqbu84cVuanyLxbXRTUz1f4yswTGpby8vizijWkjcsv26KZKvAK5L6CBuAsYHKN29KzyAXmFXK",
  "key31": "5EjkRu6wUcmAM5atkqSSo84M1Poe415w8Ng6HjVswMbJQuK92EwLTdTa2BvnCLMFqGtZbyNCs5QAr2FoA8mGEXmh",
  "key32": "3eKj9k8eGL12hmzvYhYTEJec6HKzmKy6CCPbkNustDBpkpRhtcmS69xMKLuTLXEhuN2d9JT65gbRHehwmq9EM8Dg",
  "key33": "4PaFfXsFA6LXPt1Rq1ApRfFQyktZRu1Xm4eYyHSgcZnHAaFDFxZE5zPQscX6UU5rTMqrgNe8xCWCkJoNu4634ogZ",
  "key34": "125WGscG7cq9anSixHrCLwQ7buC24Rund24WNStDQfKPkQhxTRzm7Wsad199h4NSHrBhK2K9zm8BDAA5YqS7uup6",
  "key35": "5kDRtTtC7MVDLMkwNaTWj3iPADdjcCwS7gc2iKNzrP9rpYGFYkpqj4kdnqsHBY2zu9GbYNn8zud5iEELAs8htsTk",
  "key36": "3ZtfDLorQQTmHvfNY36doaJ19nYTheGfGzcKmrGFDaCnCLwrqKia7UhwvpsDsxv9ZjrYRoZCQjApmRsuFNvR6ZS2",
  "key37": "3rtUrAmNkUs5kAtLVPr6Qn7DLFhkJB5Vax9Xyp5fYdLVh8c6amW8shPQdM9zmYYEkxkABNULQohKz1kt2RsY8HJB",
  "key38": "E7DsAwLYAedfu15RWEmacwoqF1FJdCSGPSqaH5qM1zTodFU7C6sK6Us6FaemPZRv7LSkvnqBSBbZKU7Hk78vCjH",
  "key39": "4jPxd7uLDiJoRTgeB4bv7B6agzAgZAJKeY3uPpRHNhmmJKamqjZzUxqD6ZFfHnJBJtBeG3abqn9Q4jnHcFdLWSAn",
  "key40": "2eRcmPxpLvj7tY3QiXYNEXgs1xEKf3iZGjMpBkyf4yZUUwXY7o23ub6ZXVH7TNwe2FPzdqWy8euWjmf78Zjms84b",
  "key41": "5Hx5Mnz1jZyw95zJ21RgmZkCCvwCMoSZEdFxZpUqaRWCDFRKPkAfKHofMEyUoXGmUQQWLLtLY3tuaFCL1eRiCJJ5",
  "key42": "d5NM1tWSrd96YHaoABRAQezBQ9a7xchmdfPjCBQwnfpBsp5Ry8FrqpUm4ma5icpf92fEVmu8p4VTPdAVPuFFswE",
  "key43": "4E9CMJ3hTzLEsH9YsQf5uxTDePbXmKkSiiM5rrMbz8narhphvAEJtJBiCsvA3EjYvXP7cV43GkNyaw58NMYNhtvB",
  "key44": "2U5DMw88V8k5o889KG1qNLxWNKqH96p4xLRzehRXKpQeLGjUtmkQhE2BjT1FnMD4Sh2C5xqpMew5HWJ1pECrJi5E",
  "key45": "5nnEHFFZYMUByuGxaVKWcqJx21L83WJcEMRVuiLEvWBMJ8qnUqkJPzXYgJLmhjZC4n2vSPScYwZathjVws5VRb1X",
  "key46": "2PzWq88mWc6o6JNJUD5ugjEsnHvtasS1GLdB6QZgDCLcotQvXs7i8h7qSaWr84rQqd51X7VwweGhFkXsga4uLi4c",
  "key47": "677Qduzozyf8aatVyJ9V73PLqBN6uxE49iPeQQDpkDFWMhhxf3sdtbF3FuQmvvqk4BADranrY2dMoBb64UP6suUn",
  "key48": "24poTwcpsk8DGoYhQK6P9j1EEk1YTQYuzn5BVxv7sgpqGRDsoUDNFPTtnAwnM1DgyvXYp7Ly4934ACPBMrajcwdf",
  "key49": "nCEezHj9MPjzYeEH9WBSA8CerDYUbd16AQWk4PYDfjUo91qoyBoBdkqzLtsNpvkY8savXkw3CPpbLu4hLtX9UFB"
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
