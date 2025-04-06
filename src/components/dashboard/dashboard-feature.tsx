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
    "32x2uzoFZbjK1S6sW4gN3eZf4zLfTF548e7usy1mtesrKowBATXsD4p6bCMCJhSJ9JWM5ewkidrAuR75tZ3S9u5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37EE7R91sFyUM3UMeYtBpnYfDHgJon7PWf5KekZbATMeMkapahvrwSdY4SPeNktxmCykVhpYPQyVKED415BDtMpT",
  "key1": "NtZrsB8eCGQqtNS38FftjRt6Co7S5kXff53SzWc1ysuiAFzxMPH3kK5DuDCdw6qiyKBWT3mo4f5Qv3Tyvcnbeqn",
  "key2": "4ikUEWxgHTjehyGSvKpy4MZCsxdosUVzPozyAeqYfDLs9hZGotRYHzuH1U3opmcrgCbb7wiTTyY6vb3CsH3uuGt2",
  "key3": "4aNXPvUduVDXHgx9EPHcfNj8ji1s5zVH24czMKt4Zr5GWf3ZWLviji5icCXhCoNS6yzB6Y4PryyznNTftwXYkcH",
  "key4": "4Dj6D219eN1dMyfvEGrZopr2SAjcV8mgXmU5i3L15KjFyHfb6pNRn2Y9YbZrqihwhY5zueRy2d4kAxTbxT3gnv59",
  "key5": "59VTZNeQHmRLmJGNX1JeZ2Xof1ncW7Q2TXTGyftMLox6dG8i1zGLbqY9s6XwCeaPKQuZ1A3CgtLvqnU1UgzCT9B3",
  "key6": "3JF2Yp4kqQXwdwGaiSkxsiKwEAsCRevTpUyGVQjPrUTszhHf133mq8qEU7WW3tAacq2nRg4pj7xt9mPr7Vwz5reo",
  "key7": "4wSE39YGK9rCdD94S5jr5UkkdF5gXK3uqvwMKyDFF4h4uRMgrP3oh6vSoafSmcwo7NWpDmE5NSai9RmugDQdgMKg",
  "key8": "64gKMRZgm91dFQfNvh75piR73UKmJRyE4e6umFR4XLo3NXU4LWx8kdr3sWGHBZLcVUuygavoHYx7kNvLBWXtoaJX",
  "key9": "2hJB53KihYEpVdWRMjrQi2sRf1zM2Z68cptmSdehGFnHETqESSYS76FduAwEJHdGQ4QY1PvZWGgJAXLzSanywvxT",
  "key10": "2b1smaG7PXBs1AgYD7xs25QfAenhcbWGRUhCnYqEt7keqNp6hirYyxS6oR5k52FZhBLzjKL2FzFyrPvLnFmXT2s9",
  "key11": "3jkpVVwLHKKn6S594x7D552fkFCj8wWW46UJWGZsj6XRRWPFfZunstuLpU7ck9sMgZCxg9cs4SfisbiC4CVqJat3",
  "key12": "4vaQ18sYRtxDmpeLH9Z955G1WTZL82aqvhYTBYnmERteYGijw9vAhk2Us9cVSrWvxPw5BytvM885ikk1ZY6eWBFw",
  "key13": "2RFzG84kyDcxAbDotozx4Sakwc5JACxGf1suAjZmAzCp5Hjt3h92nVJL8AjCxyPrp13x7LHEK47UC8roA6W6imzw",
  "key14": "28kNRiZNB1cF68xssBwqzAvjfUojs3GsMuxUtEseCzHhdC5XExyGFDssbMfcH4N4NJXi2WnNFoZsZJSEiZkX74s1",
  "key15": "2HAyJTsZSWvhmP9Hs9vvbwfjFCPyj3iwLqRU9HRFKz6HALWBonMWaLbe7n9oFFiNXMLFAgJaYa5viTdB5d7Hswuc",
  "key16": "5oBzJ6zJqVRN6RoEAdhtMQTN652LTX5M88nny38iTMzTnu1899bH4FrUoXQPWkL2YXTFjfD27U9ykrBktoMJivMU",
  "key17": "4QbqUPGfXApPK5Xf7G25yp39D48pPKesZBPCa86hTbUA1BhbHEvBiRMU8Qj58X6Cd4y6APwXWLkHC5jmRCapmNkf",
  "key18": "4GFzihyThpELBCingmiEDUeUVBZTvG28FdCi5pGW6cjGMokijzx1iD6VauYC9F8RWdmEyfqHyY1LyJnqtMLLeao2",
  "key19": "3dYfk1czHZaXPBYHQpFQG7GZXx53GCPBkqquDGbCRuVQ5VLgPertVFgzhPahf9qpfwXkmVaSzPHMkZe2654KPyqQ",
  "key20": "ReM93SoJAnEKBhDRPMSGmpWh4XZpa4uz6JN5fcVniML4Cis6YYJhxUCTUAUemLTrGJuJKEK8wvAoK91A6rwXMwY",
  "key21": "EXEvyKmYfMBZmm4gwW8GwwAQrcoP7t96oTWTCywu14SbgGaN1obDN9AmDuMdKvGB6J4dC3xqVnX4rqPa9UUotix",
  "key22": "5uPAQQpS2fY7SLRGgS1TB7P1y3g3wQ3d6YFtb9ZGXDSKjsb3mkYy5CXeQ7UEAKSUnkTBtsyfZ9Ax6wWRgaqsoEcF",
  "key23": "4EgyYa5MSQikiXTBE5hmA3RmmQtrc2DS3TUPpZaHgAxnD6U5w8AMSaqid2iaWX3FYPhmnWAbtgpdzfDDpm8XBoM4",
  "key24": "uUVn9eqDXpgGnPiviQfeTPhfk7C9k6UaHeM42jBuc1DBjCY748MYvzP4WEjpUaj9F6HwxmN9qqYEKY1TWmAxhCG",
  "key25": "129FhW6VWZ5f3ZC1Ca2te3pGrdhrfWa1nzjdCkktmGVqQxjyM4GM81CLq9vruzahToM1Dns8g7i94W9HVpsjNLxs",
  "key26": "2c1iUsuzWZg9pAUZfd64f3qQiLkhp2CN6xu47QAwETng7xCQBfihSZE79h5xm4LeGXbfimQiU4oPN89UrPaLpqR2",
  "key27": "2PrmGug7NBPse18oDrqHuVu8XiKTaQk3Q41za3SAXGozsVxgmcQrCrXvAwo47B58fFFE3eQDNc1tGTctHseCuSfx",
  "key28": "b1xmNWEaSrRa5tCM5keNJehhEoR5z5LZrhXidA45JCP1rofJ88L4SH7vGDP5h9x1bSwSGFDeF3og5g8hpbJXoYT",
  "key29": "27pvq6PohRZKg9n6NH7d299Uc9WDJGT6aBsRAFNPTRwjcCqYt2cHENf8RnHJKjByS4Umv7z4v1ccPmtVUjgP33KW",
  "key30": "1riYTTqm3iJZA4fziSun46z96GfYz8hhutaBMweKFjEWdttK853Mpnyv9JFezyX93Tj2MCTS9obsnKx5QDsrR7e",
  "key31": "TDMYisHruQisVteEpMXSasHmNnqmhgZtAZ2smD3XxBNRCksPDwNiXdkL9tqHtccDUnPoUVtXi1dVkiStZYynULt",
  "key32": "FHqH5egWt8t4jXAQVshGBNjYhXrG26ER66SYLKY35ipP6BKPpqN6QYUaEAjGCMocntuMjDGns6dHJc5jvCziKRs",
  "key33": "39GQNPhdK1jhcQT1j3JofB13uPZNnVaJw3i96p3F77r2F4J3wvCFCqEuQLYHGeugjyqiUYMzd3RLecMbJFrirnBx",
  "key34": "4ARxvF2TPf7H37J11XAom1a2RLchWw39gqKsvoCR9rYGFEM3B8E7aWa8FyGXoRBhTvMmEEznfm1qdfLHuRQrfDG",
  "key35": "4vML6Sf1H9NV8df8gnxxHnw8KxkphJ6maCVjjtRwv7Ajf7ZTQXbiKhcBnFWNGWj2gH9gqGYaogwB27XbGc7iRdcX",
  "key36": "4vqCm8UKisv63EEcf65HeLPgv4Ho9kqQdrVrNq2ruZiS416iSDLHeVqoHLrMDBi3HfvnYAQvbGJTP1ePBSyRQiYG",
  "key37": "5BRBzLyjhtfzzYxz4bo5p4h96tRZcyg1TTKBgQwHEkS7YMiH2nBN8SE1dFGvUwbScMqn4w3XZAKttVvrgRPUn59K",
  "key38": "4fzT84qM97Y31ab3saGPsufyUBKVxR5b99pqo7KE9XjARFVt61Luya7WrgEGZXw62P89bSJw6yNVqDuKjhoWoRGp",
  "key39": "fy3JTSpEt7YxdqL7QADFL1DEhT5K9msnUMM437ueGq8XkZKzsL7cgcUQDubWU1mdSfQyyZ4kXoP2hkmcf2Ts1ri",
  "key40": "4CFM8WvAaumL9gqhWxsXrAK2yMP2WZAYeAW5LtVMNMYz8a7VzMiXA8fAqKds3S6UG37cAURnqVe82sxaDHb71Yn1",
  "key41": "4qjy67fDVxf9ScPxKmHRPdtRZ6X3rTaknSJsYk3Jy7KyV9uNfE6EHDKW1nzQEYtUjG8B2fFzfRNWvncUmDKrW22T"
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
