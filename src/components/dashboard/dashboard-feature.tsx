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
    "4EeEGH7FtND2mC4pC4qgqb9Xh3WQ6gWJbGHadWAS28ywuzTijnmX3g53GjEPUo86zZcBaLpu2EGWrzM7UBGX6qbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzBK2TxA5Gm416FooxrEZkFqEPrqmWhknin89UGQnbVSD167t5SgZkx3ecvC71bxBhJ4bXqYA5LcEHjWpnsckRh",
  "key1": "4QMDxrNnPhpjoLpeyE1j95NikFs5mhAHgwY6g8yR6YLT7Y7uRjh1N7hfJJaZ2fta9ZDndzzp2WJhznSFk5cB8ktT",
  "key2": "3gKVYjn6X8A4pXUKqnUR43dKoS6DWLyfuoT6Hbre5qYB3eKuBvUyxAmBZQfYNw5hTJVTEKXRT7wPEvAfdTQz9D5g",
  "key3": "5mu6476p2nwaDUPGSPBfRmHq1G2NqFNF75h2YJ1UsjsfuZMYHUaSdtT4cMb42PGY5HrNerW76oUCTUxx7b8xZRHt",
  "key4": "4KgYhzBTcE5ukaKPryXCQuNcJGR1UqP6fHrycy61F9wNG7F3c5NJUDaqo1Tu1UroLBHkfj1WsL8JW7cGnAndPhzP",
  "key5": "4kidZDvgcAxj76kSWUfBxzUL7kzQ1QZtM2CmwooQTMQ4ZUfK8czuqUkMmVxteFTBxdJfnj5JeMaPpjcq9tMCNNec",
  "key6": "3cWJzk2XvopR7FZkeE325h8MxywpyVZHFGNCy44qENkDEhomYFwxRr1trJncJXDjLfbQd5dM9M7em3sUAkxhQhoA",
  "key7": "5FdRfDmnnowjJ2y3dny5jpSLxUJgTpYbXJaZ2W6MKa2cqWdbydSq99vt6WdFbBNmjP9qS7LxYhfAZuLUUq2vcz9P",
  "key8": "35Fc36USTNuFNquisLLyuSQkDxpkApHvdVayjGqdCw9Y8otaAehbSytAKtr28RDHhe964y1vqArDpLm5N8T58msm",
  "key9": "hvSvwyvd67LvbfKNSDm2aQJzhXW3w7mRxaFQJQuaNJoSaj1b1DdXKNy6Zm7fJyLjhDwYHABi5AWiMXhNuywkPMu",
  "key10": "26PhwUTCgUBpDhcuczb3AE6mafBGTRGUkwQNxuFdBKoMPrLGSpUxr3xyhesdk5V3Vtqy8t6959RVC9UTDZPxdVZL",
  "key11": "2TdBohkBSvDWi9JEyLryBkWaKYd3YjC1j4XdiphzboBPqLpN6LUJ4PBNCRihLLxYbhYSSXLC1MRyABdDubihhCUX",
  "key12": "3apu9o2gYiyK9wbEHxjYeYovXsFx7s2PeaBQKw5Vipw11wVQM9vTXizrgaJJNyWRpuwZQ8F8nAMaZyxG5vya8Hxn",
  "key13": "5Am9wpn1WeU3V3Vq5sSvTGVawZEujw6p4EGYpEVsm3qVEqxuSGUAd1RwcfQD3t82zX3REZFoBHxD2jGGnzycMUX7",
  "key14": "4AABEVXBasw2viTjJx2HED1UrMS7g7co6BGjLENcm8Rpjg1eH8pqSgUfXJKQeKaZ5fpXYAuEf2UezmJjDKrvpgqZ",
  "key15": "53cAfwogc1V9wxa6LLZh2XXaBYekKek9RMemBv6i81J9EDzcnehDxQiXVWopyz6mDMCY9x6NYnrvdK17AXEEe24h",
  "key16": "4spojDG8616yn1rFhny7vvHChNc6LAXRwsoNsFregwfCb5ZrXLuiRVDadM3vvweUEopcm44zTp5RbQso6XgGAyYN",
  "key17": "3KrhcHjLLWeaQWWkQtLR8wNuoywJrsNEmL2ff8NxCqLb8R6LMgXnK9BWduH6q2Fo3KNwpStYbJNRhPZuWcteqD5Z",
  "key18": "6643rXVuYy8JLVa5etR5WnEmKCv87yrY324ZH8AXc558mamEX8HxkKmRCkTv3iBppPLtsFpqykh7gGEuLV1u1fb8",
  "key19": "5TZjBwRKENfFVCV4ucDWyRbb6iW75JHYxpBggUGPem9V69xeL7sUFuASmbKxoRTWkxs9RZoY5nfmbSrP8vhffVNR",
  "key20": "4j6vzMrUtspV2LWQqqZidyCyS5kaR378V7hyouoLB9KWujcJR3W7mK3bZdBLV4TFStYm3XVHCA2xCocjaYxmekn6",
  "key21": "2fpKgYxjE1pq7jYZ7Ev8kFEd5az7yrame6vrAxE1z4ZSKka3WCygt3CsmS1XvjmAkc9o6CHZYcVE5e7ZJA4SGBrW",
  "key22": "3M4CqV6ALwjw7RYhK3yK9ArRMxjg3s4mbseTVjmjxhWYrZ7HEBXXjpEnZxFPS9ys11Ceq3gkd42fKyqVbjCECvnn",
  "key23": "wNHuGawgJYBn6xaa3ptHXizgnNweFAQxCnvE6K3zE43dwLTfsfdBWR72gDqADLEc3SUjKnnUS4iAhCivLy7s6QB",
  "key24": "NGnNhxDmo4fEbAc9thPAfXE42jfg8Kwjw8D5RBQDV62UuTCxkaxGEnosX3TfuGPTGdNYaPzg9qdcRCKRobi9s9c",
  "key25": "PazGB4R4jFwEPY3smay35cDV8amNWmYxhoESYvS8pYL5J2Lzz9Fnu4pcEw1LdAdrMprJ5S8TsSYDwQVkpjs6ogc",
  "key26": "5QupgKCHE1BC2Tv4uPhajoJxvb7xQVVexb5C78seobjANRjStFPRtwLC5FsdZRXJbwLYum8icpBsy3tSpEAhYYXS",
  "key27": "ob93FgJgHj9NNMfika6TJDNhvsECaJyZB1HixMZPTQ72reWCmnRfkRALM9sHGaR3LPVu4KaQxQ9GECxZXb3yuba",
  "key28": "4vKrJ2m12SQkG69BfG6ucFed9bnysbDd7yJQC67AChYWeQKnzBPdSv7TUYuFndjEEsfgQJAVKLqyzp9CHb4qk9dx",
  "key29": "2PKWRh5UKmfQdbnvwpXt1od4d4mHujHJZYFzuoWnugN9Rp2BAvnBMEsuSeKXqJAmLnr8mqN6LvcagVPzdHCsBgWu",
  "key30": "35oMnX2Ln7dSUCoGyTVi7xDKwjPUc9CT2CvNhZEHAP36Xw9VUC3ZkCuhioyH6zRPik5HzedJTT3vkk1RMrajmNoN",
  "key31": "4zUBzLfYktmxHkVBbb4fC9ta28VPNWkBVPQPVAbwxR6DzF97GXnyRu5pN4d9dABz2GdusVQkMtcnZcigRDNeQcgq",
  "key32": "39UYg8G2znRnK78V4Qf7RN3VcLZw8F7p7UnM2PFwXYBMrvoNfFLAcAryfPhip7QVmQxPTqtR7BBfqCdP9C6iuKtX",
  "key33": "5SwPryTYHjn5Bd2gMNRePSc1uEYvLXv5bc5iLwPVTcUZ9KiYkApDZhfsdTnL2Gacwd58HVvuA46fG3drdWC82tHY",
  "key34": "4utp8AwfFSGkGFnYoMXuhQqntuem7i4EcQmYP8jbRdbmzM2HKSVT5riGxMEWokzZ6kZjaXC3LhCJS1JX7MZRyeMN",
  "key35": "212gBsS9FTVpUZK2wv9qFJTcctVpAznQmjGLhEkMz7K4pyCHuFJvs456wfMadfTabMVDhwSM9zRyv7hN9tZJuUuR",
  "key36": "3Tz8oTh5gSHK5AF9mzU36wFVy7bN4huDPHjoqHyfLHNeFdGaHRPvoAwf1zqJNSutDmBdsCLS2QfeckHNMjix6ruZ",
  "key37": "3rF2zwR1SgyerndVifuoK3ja5xW3bcuUL7TTsg8LETgXhgXgd5pfnd7PYebg5A528Sr5hPqWdZtMqoJy1QtgQhbP",
  "key38": "47EYHyj4c3iHSrFfS53mJvSLTnsSVFfp6SD7FVQmjmb9PLVqjsuWXrD4fmFvfQjtHQrn34vjSTcNdpmR1DtveU1F",
  "key39": "34ojxu4JmUHPS19GHYHuxS5e1KFe9bVe7z1BR7erp4Asxcmeba3BCNeB2JdcaS1gFVeCHJseTdq7w2qLz3j6FMJc",
  "key40": "3bpCi6YQQBN5QFwXfk33yEyUyLe4X1CdkchFu2PnaKEUwe1VbN2bN4Fd8AF1vgtvSksBhY3fjM1aE7Wj7haWcK3m",
  "key41": "5D7tbZfRWMCrzrPzkPSZQiWsvx41mA3eFBqjixKv1BgLjhGJUS2EoUyBQQpy81ztXbT5f3vCgbx73bjkvWfrDosF",
  "key42": "3wjzE1s4wPs8DuqCX2WmDCC7WkULa21M8sgbK8d5MNGBCgrcFjFgbm3zpppifQ2hUBATvnCBuT7ih2GG7CJVZDQQ",
  "key43": "5DbHvLquYJV3SzgdtWwMNyz3nPUzwgXL1YzAyLiCptHmtELUor32g1viuUCpQ3WKEKkuMJ34F2r3yx4yXJt49XT",
  "key44": "PaC1QqKwUVvFFg19LsPpqPfSetqLcFnwiabKFwhy47MJJNm6DvmiJ6miAon8cUvbbTYpdpeUzoHTQPZXMo3bbbo",
  "key45": "66n9qJUkJc6kFraSABp25pyzsz1MHpFVDxbVQKoJogjQre4tzfid4jHYBd9sppE6zUM1QsbiWi4GTPqR2WcMSrBG"
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
