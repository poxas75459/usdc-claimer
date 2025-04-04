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
    "4LdQ9iUSfXQ6UcXXugPxPVUegvVZQn2kpqSEvGayhp57RUv5rEdwVk6sgtcN3eCdgyTpGrsXaqxaNdP7FuTNp3WG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XsAbojjDNSLNdRjUTfMDcwYgbq9sGCnQTn4xuN3cpwPbzudSZSJQGTH76j1BET69B9zDHpYvcaoX5AXnw3JCDan",
  "key1": "3agD6A36VqtFTwu3ysLLn2xdR2HwNctzaeyrxjc3qKqz9GYKJ7g4hj2YG7qf1bZZ4nvYHonAn2PnbnnFqhuzNKn3",
  "key2": "3bc6vdKpGBiTduUe4h2sywzASFpYx8DnhNqryJZPW4AYxPAQ5o2Gag3PM4nupx5Bp8HaaoXBzNtGx7yAy8iMqstR",
  "key3": "5ccDkihz6BvPsVL4acnnyYLMPo2YwzEa9oqmx9n7WmprhTgN1oUEL9C7rQpFLVp7J3TSVwhqPK532txFfLiBCjtZ",
  "key4": "64E6Rci2ptjKAy5vTqceJRbp39Qjn9m9ZASHPTteK2cavKxx7WWjGTZeuH76daNHDm6iYDaAUtLFuZP6nz874paN",
  "key5": "5bUGJHmeoorPJ3HfiHzHphJNbysNUdzM5zUXEbf1PHywv4FfZSTrS4G33ToeMkqRjYbLd9j9QCVsnm34vzwM3CS2",
  "key6": "pCv2FYKaihGV5BgyrCmP35uvBDSgZRyd3vNgCBXFRY3rJwpuqRBKn8r6oSiEnNjHy5iSVrxJV3LxQ438gUtLemn",
  "key7": "2TB1TMkBqCEDqCeC2q9ypnhcsjQkFnfw7ppPRBL6zhsYVQwMDA7cL15QA4RyatEzK4QKRAZEir4VFVqaKUsPR9fy",
  "key8": "5L74wHpHPhGTGxtsv4QYQ1CAgaVLfX5XqqUyyMFo9t7RujWFPQNj8HsFR2gKMGsQAw4TYTkBWagMCAzDyiVcKYeS",
  "key9": "4R1xm5t6MK8ar6Mo2Jf6Jf56sy8iFYaxzm1NmQ2rcR58ycomnMBkwMMyGUYhPUVoMFQBjY6q8nZWXNHVFWHXc7g1",
  "key10": "3sc5v4XesvFbhWVzUrATLRB8nKquQvN8K24nWfNYj3PycMMqgc9fH6a7Phoig7ufNJ8TKQEeX3F4ZudpmcKYbG2f",
  "key11": "2YnADU79WmSwfJaiHMhDUEq4YdGtVQJVn8LPcjZhwKibAvhvh5QBaA3AiMY3XwRjSLyYx9WnSWB2D9qKRhhkKA6E",
  "key12": "5x33vPQvLuFUjcPQ8H6uJ6VXQ6y1BEmKjWe51o4weUHACcfB7Z625w2VD41EWdh7Ka7p2YNfpKyUD5sALVHKArxJ",
  "key13": "2GyyiutGD9H2o3pCaCiFQm8ywQjPZMwxLS9PRhQvQzc4Jfo2ggr5DTSW8bFgLzVjshrLRKPVT1R2LkKezngMoV61",
  "key14": "2h6NpMfgTysa9uMaX5AGefgwqjyHhJaWDEZ6KbjSyDRRN6yui68DoN8fPYkK1kkhTdBN6iE3U8YjuHeoG7MwiquF",
  "key15": "5HB9JpVqgLJji6oPrVueRzWanvY7kZSagPvESneCyWjaK9dVPF3kfGhStbJQF4Q5encG5GEzvdBN6HhF4JGAKHQ4",
  "key16": "3EiQeusLrjbshEi4Xx7ugzb6naDn8L87oqifg2W3dLK4a2yGuhA6ArQYDPUqrFZXqYD5qYfD9dqC6Xn5sDoxS4yJ",
  "key17": "5kF6BMZrXuR28SjsHL8pJBnpfteGjBRs32EzdaV75waM2A3f8pa8Peiv2sEyrXQWnSG97cqvFQvAAG6cPaXzpHYL",
  "key18": "4tnaZ9xGHYhj99GUAyrfzF9uPjUKVhHh1Y8w7SAmn5Z8psA5ZqWjjpJyaMQmhvsHPEc89YxwawNyaNQxttgiVUy5",
  "key19": "4yGTHFki4MerNknU9Akwf4Ee12aXRU2EcsiMxkqkopW6RvhspAxNXAvwi8AjjWMAzwm7SvVnyhujEcPD5F862Hoq",
  "key20": "81TnxdkvCxFZy41QaaCBvtzY5bVMS8nDRETMGkq3EQEjSNH6HtNbwvHRX12SL29bctmhtqCdn2Ltov9oChsu2ka",
  "key21": "3oUJsxWmrouVbkzm7ms7jYQeKK1hh5MeEMoYPAHmNjn1HvknSXKowK1L8xHnAZVuX4ev5DMxKokRwTUPjMLUPGNt",
  "key22": "PFyT5nhAXhgBtpcMz9bAe2ng3mXKTHRprDJPV7YaM2FPcfcGFsRCyrQFaGntxADsQrjaZ8Y9RzCvcfx1CVXRb1a",
  "key23": "61d6GLdqwhCEmfmvFG71LmYm13rgd9FZcjd5yn1DxHb5osHc3sNyk2ZqnPnqdHAqNUWVkeubLHugnR56wJcrYab8",
  "key24": "5PY7usjUbLtBPzvrg5JnbMd9D4pB6SW23jCeHBUhRvm5jedsANXjpdgWSg6g1z8GoF64yt9fpBRyGyAZtCEsAtEM",
  "key25": "2TDALsjet3TMf2gobzxgZUqqZTSkyk3sXZ6Xxw2pvYTiG7qQVQYaXhNciAg54E5KZx193higp8MUeZHKxKYB7587",
  "key26": "4CPo2Ky7KpfAYw7oMats85YAWfQWp5n6cnjHjRKcrAo2y3pYaDwFQoVJESehpZBg43Xtx2N8CcEx1RPjuZ8pCscm",
  "key27": "4Bb2LWrpdVWauxW5M85rcNaL9Q8zcUqTPrm8EsjGBtJmiCy8Zc2JCd2mh3Ce6RNkRiuZzdXcLo3A3qJcnzLSgB38",
  "key28": "t9iEt8YASgY3tqXUmuy7U6oPv5XTm3D4r6SJqpaPmFdpqh8t64Ckj7booWyJvz3pQ99PExeNkaamUDGADHmN5Lv",
  "key29": "2QKxzhGdRhquFy83pvDHfgnBgm6jxiniq1c7cGeNAuhLSBxfjtGjjvceii9wY4MbhUvFVjwHBsvfVdceoEXsxNCW",
  "key30": "2XApkDioo6h5sAC8avQbFz2MzxqhHF7Xq49JtUKCyK1hCTnPz8RcMHpMfmdQS25PuKJ7ATNB8QAURbb3h4ee4VoW",
  "key31": "GF6XzXRWdMnuVQYHDdsLSwe4Tt27nEv8yUH6kN3nzzkEjf6tyx3pQoXB84MgJgWy4UoLXwh2hs44amRLpHdUjcN",
  "key32": "5EakZESQZuzvQKrZqCvcEL8vck1zR6JvBZ68PdX5Axs5urD5sJCqhFsGAwjCpfPPrRkiMKYSA3QvoKYXnj1hgFhm",
  "key33": "2EZ7TS7sYrUy1T45bq183DnSmoY5QaEF3Z9JieX26VkvmQQJFbtHMX8S31vNaCSiLxH51f41Lo9LgEdWY2rQpzAH",
  "key34": "2Wh7zH6YnrN8SRtHhvcVkDHmF9a2vAbiBwFmSV8CKeUQKeLxzQx7ivHmThRYZeCWjQpNBHiD5g13Rh6NdonEmkqX",
  "key35": "iBt1AKTweij3qFKdCnYAKTtRjExLBXj29T64sLukyS7QHpXc1PEPyeLzePsJDzV5Tkav5yAagLTAfDvVJ7Uqdj6",
  "key36": "3KTDwKdBu4umksSqoASAnL1hFRPt5kfi8KXXEQGpCPvXTkeEdDi4tjGdwNS7Vs71VH3XJxAa43geVprjnApvELWV",
  "key37": "4xh3CezU6KVnaxcupYem2dZQto4MVpGb34agrTLFti7jE77k1Mbr9C5ZaCMDNFSDrXHRcAQaen68BbwN24XaRVEK",
  "key38": "4CLEFU8ZE5XU34dK881EUeV1XTWtjSd69h7RPJvpidDCNvBYB3TJpRnjBfZnKJBx2dygpdg7MonPgabM3rzD6C4x",
  "key39": "5zpRdMUAGd2bXLPFD2Vu6P2qfUMzgpTBgrAxs2o9Bu6bp8YnCD7YpfMcvfRsqsBYmADyR1jkh5BENQqpWbESykDj",
  "key40": "4NPiNgVnSCbJRPyroRuHLqVTwJiEwSh2qUCZvph2HnRH3kGGN88B5QfoEpZbaV4gqx9Vq8aC4KpDXhQ7Ydg6weDC"
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
