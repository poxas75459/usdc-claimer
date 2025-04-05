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
    "2QvMJESQZxbLx7mCwFGJXKQ5uXnCjjHSpEfjtHRQQ7UYDXZmpfpb4eNLsPZYJ5PPtZwJ2zXEG5uVyxCgpjY9SeJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPdrkjzjXGrvhm25B7zSuTenQyzb9MkNgmVFe9dbwqTErdKfVA5xyZ6dPv1VSH5dN1BdtZicpmLAvEaKa9zaBqe",
  "key1": "5Zd5GJitRrWkuq7T2MrMrNGJf2U7hv9MYH929i157qufz87gpFbx94e1enPirxbX7K1bnvxwR75PoKzzSuK7WPSy",
  "key2": "4YuiRbHRQjam8MqJRtfnghiZgengBc3vEGxguhuV7FSa3aA8XpKZFN3uXRLTLNYyEzWCNMbNgB1mgcvmpiybvErF",
  "key3": "5kSx9oDnFT971Qp6xgcyoFFjbpN4MdTXrxg25jFDhTYug82cgDyxpP8EE5KXvAjYUumUpRWZbaq8L3M2SokSNi4a",
  "key4": "5KrrQ8LrM15j29dDiPhhNkXQPMjfPPKp4RiVMGxwfFJoKbezbDD8Vt7w7JjwjQP8RFKarYYNSaRfvfCuRQbWEgrV",
  "key5": "4tGQCRSMwUNusaowwAwkzxBoNiVULy66pNeQZhRDte91PGLpwQdzg4wzNBr7mRkbiudyxD42jyZndUMEtWDHHhRU",
  "key6": "2ppEC1nvaRb43ccNAwfboznw4JHhxUqhWrtGLxy1Q6z6Q7pLAzatJ6wACcRcmd6U7mdWKxPA5xkC7v4J1GoJwxJU",
  "key7": "RdCmrWBZSiqy3JqmZ6nanXhAWuF4d4bRD49xTkhjHAZRbiLxazUwYmtb8XQXvY4EwzW4ZNZzs75yNqUkKwQTMGc",
  "key8": "214jNUnRjVyRnXgPSpB6gRcQqFgaPCMycVdfjD5EALeNm7pPNKHgWPHgoYP7DgKrazYVe8wDAMa9166mhBQZbh7p",
  "key9": "iRXvk2BeW178hhmASYiXVJxjmXvCFQtGrzrH3svEuLAVwwZVmTE5LeARA5TBmFCvGULtbKCNtxNRTCShzQHWTBr",
  "key10": "2mUJd7HKcWuodZugy1pz8Z57XKUEUJnrjUkP6UowWgTyHz8Q2DQj1iwQPR998dk4eDM83ys5hzEM2xx1gRnhkARp",
  "key11": "2YwqY8BQ5TjfBDeEuUY9PPHHiTSGuywbUs4yVXAoqXgM8Rt3fhLCeve2oVyaKCc1YiqfsT69oxu5exZaEAHA9uo3",
  "key12": "2BiTmDubunG13khz1ogLvfenFXyRZH8V1rkueFgANW75cQFWwAbH3KUCxoazQmzGoFGBmWsrrcBM5obPDXQADpVL",
  "key13": "3xBjqENgcqfTQ4avgs4p8Fcer9w1oiN68GfvhG9BjNfgjKpUFDUtzpFNX3YMKP95GoYfwQVpRfnz8N5UW1QK8TFg",
  "key14": "3FTk8mer3sBdyL1TD2mr32PffkZBEAfUDzQbLXhnNpUeqzi2s9sdffQ1FhT3tFKnptvNGK33UuRdThuLUDAUzRnW",
  "key15": "nGsS1xNtAGNQEQymwAHpFpjrEB9DZG6R241a1TSKFXUduwgC3NxV1ZATMDaR5J36s8YMNSQWfcBEmLJawEuB32z",
  "key16": "477CMaa2WWZ2FDVihgcEnTHvjaxXaHfP8oXywrZ5BwiDu3yFmDqgYNuRLDvkPzFG9vTzLUMdmMPPaW3knhPnGr1S",
  "key17": "3AH3cHifKJNJhd8FvSrwCkpxyGJ3GCYyFc5BV8QdjLrUFwTorxDrFjkcfYEgaiPoSVe11CTKp3ELViKvwqgfrVMF",
  "key18": "3ts85c7G9JCT3ezMyHY8MjpwBRs1XaBAX1ndBUsL1oHFtUAtxgmCTaHpAMPg8dbaVTQui2V3pA3xMGegiWVDEW8H",
  "key19": "4GFfMs2Uo7TseH6wouE1985f7q5tUVMh7pzbgS4knwNi8bYpWuT9c2bDBq8mbCFeMXb6jBtD7h7jk5U92AkZuwi2",
  "key20": "3tUDvnHhvbHj6okKNJT8kHkzL6TETCMYYDJkmUMh85t3Lv7mdycB8oaNFQTB3tTVrRRBSc1ZLwbgZZ9Nif3FW9DJ",
  "key21": "cLkrgXRTE5ZheQWwCAzdjG8H8bm8ps9faZ8cE7pTHHpAJC8jjtfHJdx4eirLprLP3dQT95sGVLfkaLPWwRcsert",
  "key22": "4KHjhGb3tjHwViopTKUCwFJGrkhAVmVYsbS9f8QDdqqQsLruK3Lc4yuKQ1TskNJ5dfzQ3aEW19FmYxtS4CJq9GMU",
  "key23": "3NNECiysYzxSMMFz1BSGSixnUScy35y57oTK9AeEsKzXpaBDVC5yiZGa8CQDAt2uSzw6NhXJojZaFmzH1b7fuvQq",
  "key24": "3C39BUX8uZuoehPXpyDmpHWzsRywi5QPkeAakHYLEeGFp7bMDo2PozUmYEyBr5qtuVyyKL8eCPT3TNjiPLL9VN7D",
  "key25": "2E1QzJynEaeRaEvEs8hoEyNwmMoD9zkppN8DscyzSLwyJvcprvxJTag8z3PqnKxAfa1sVLpo79F84FE2UccpSaQf",
  "key26": "56UiiMH2U6rMCdMJDVHaRLdWxK91PktFYvGXSJtUW9S8mwjXxuxmri6Psawkmtj944tuaiBeez1ftxiY78bVKJx2",
  "key27": "3AZPKtotMb2hZa5puBK61Bn3ijWb45M3hQAzd6pQKJWHtwEvvvsCzoT3NGMm7NEp64gjbYNHp2UHL5hreeijdSDC",
  "key28": "5JGSDJMjxW31ehPzL2ENnBbyKrn4omzG6XAViNbURBMJU1HWb79EfPXqTFUwN5rarycGAhADcHLkGMBbKerCyHk2",
  "key29": "2gBknyzDFq9i1GXjPKujMyCR7UifAnD74dFbehGdM8JpfZhFm1BqV8JetYdoRzjCsfWKpbkQcWuKtpt98FAgf5Aw",
  "key30": "5D1wMSgrYYUNCNmc1jVYkcmk3W7hX3tf5YrF2Jw53FdEafUQjXDPJYrpMnJbCN8BvJhmdFo2PyxwAWcnP6kdvz66",
  "key31": "2UpGP5XES2SBTudEvutjqks8WreoNML8DSzTGjitH572xwnC5L7tivU8AoVRqm2dCXSPzJEUVsjfFW5YRZxGcAyJ",
  "key32": "5ueyuW4do8sTZCU2aNPiJfXXpBBaMPuaHKju6oMGNZqgQrKGdMyuth2baukQAMce7xX6DHK68oaoTPoN4eM1XamT",
  "key33": "5e4ceAP19ucDGVXypGML8hSFNrg6mnH2ix6JT3qvgAboxdqH1iNYiBqfpASPqcGwF1wrpgzVf1Aa65cZeDKidCKG",
  "key34": "3sw6143RjMuwZ7ZuLhZn41Wpo9s9Bc4SopbmCLChHFFh3VKwr6bCfG1XuEA99V6rHFRTiT1wkU9JJTNttWmJEddy",
  "key35": "2mpBkc4ypL68JqBUoM1eJMyS8NMFFAyConzgX1qXwiGzu8phLibq18kL9n3JUhrCVzWJ4vaLX3h4cvXfj5Mbupeh",
  "key36": "5JGQkv4DFf3r789mCZoWgsvMR6D93GKL2Ju6yp4A8K6yWh9EQ554qncAxc7URAR3qrJXJrhZBPY7k2awxLyVNQNE",
  "key37": "5wjDeCygUZquhgCBeortBV1GwSRQwLLvsk4fNKD9fWWQ7XpbLsDuqw637PoDNxfQ9EmCzYN1AJwCB6LBAwoHAo8R",
  "key38": "FX7V1nk4Hax81EjDhaVRQuyu3ka24JDUrvcrdjCGvUV14vCwn2VdUZwizbNVW4jHu1A46uJM4hfiwZuTikdpPDE",
  "key39": "2uaHjGGj773dDVLEv8PLxa85npLvPiKTLcn8iAvXEznSpa9isYteU8fzhmMQXPFdBQT8nMX2uXa1e8LnDtURt8L",
  "key40": "bdmMjXM934Wq5D9NNjqGHpSbKmkZKJag4UAyt3MWEGHRg5Q7EmkRA4eBH1BVfmoQwPd6c6M16yipHuT8wYTpKAb",
  "key41": "52QidQoMN8ob3V4Mq3HcTLkq7RZ3ehzqeDgyRVAaLXUkUeXNjQohEw7aDZUWwXk32fWa2aEmkMhtWGFxxYbhzTU2",
  "key42": "5e8Y61b9vnNTRsReYSnhCzLrBvqyhgFRkKDWpXDtCMytdnXeg8TSjspcnMQKU4tzzuquKe3MtwcU7R9VojCVX2QL"
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
