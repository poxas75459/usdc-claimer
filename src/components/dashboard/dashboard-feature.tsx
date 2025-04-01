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
    "28SKMMyXRytskxFSAQcBSHKZCdEwBTR9fDL6n9qinCZTsFgnGiXwtzpu5AfS1BSiKWUWib7TNSa97dMHSxSdPGLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24NgtPjBui7YjDcf97NjjwAdFkwpCJWn25R6HRwwNZkGVpGoi2dSUn4wbnEBDwkbaEzrf4TciJp3CvvRxMi8Fyks",
  "key1": "YGZNSAE2cq2e4S9JM7eqWGS8jgy2o2Pbt5XM86Snw5x3qYtL9ofxELa85W3bgu8QMEiMeYQJbJDhrTeWjgNZK6y",
  "key2": "3F4rE1hnqu1M1Wz7J4AWa7wsnodFRhG8AjsHx43EWtDSg73XZ45R8jycXQFqywJv4Lyb4ByobmsXR6ALpeyzaANd",
  "key3": "4XTecGqnkUZbyPzAc6ojF6QyPgDFtSgN4H1bd1dZknQd1FuyAdQv7gNpUTeAqy8pGkHgx73e9ZVH5n5RdrkRHnds",
  "key4": "4WqFQczNAZQ5nb3WJyaHm6B3VNVzCENBYHsegaCmYfrAFsDc8FKcV9nyysaw9ZzDduFe4NDE9VsbKTB48wCJY32H",
  "key5": "NerssWP4gdEt7q3dkcHpyNuGGCZbfxscWgeyrDZpjJRScn59y7ZpT3vTZVsdbq3Gp5y2EaDZqbvtMZ4CPkcWUui",
  "key6": "4k4dea9FQrdepzvUpsNQW4TWsWuiD5dFdJn3j9zuW21FZvFK4cS7WWMrYkCyXWTEc3D9LguSNVEcWaz65UdX2E7s",
  "key7": "3sJRrXQaku1NEkjWhDSY1pi8r4tQh9vSfGBuY9EpPuLpg4rucwZmui5SW5csdrPEJJ7rnqQFspLgxT6fQqmQsNud",
  "key8": "RUtY6hKAy9LZnphfWRyXM9eFHJES4ZLM8YxxKUMEEPr2GisZ29V3RdfMDY4yUTBQKWkUSTmq5fFzVtykghqeonN",
  "key9": "MVfiWodj2GcBipqTDJYruJ25ebJ8jfn6YnzmLq7JQHBA3vnuvmCuxvDcd5rqK6nXc7aThNVHGodPv72PGeBHVi3",
  "key10": "jjayMxQcm4qGYg1fcG272FM5SArSDbrbnGpx82vTS4NKcc5de9fjsWUWacABz67CCf7LYpHidTxvRMLvXTd6U1w",
  "key11": "4rynm2ERkqGdJNKhKoPpZHENikzKvwhYJit6QGvnz9jhDBfr89hreQKNmVrnCZ7ngAs126m4UTRmBHA1wSj86G8t",
  "key12": "3FFxES8u3iMzG8vyJAt1SwQiKZg4Fs9n2QWzB3j7LD933mrStccAPWnkYWouW15Nzjg3BeLBV4KMujTJEyiF6gGV",
  "key13": "pHdZ46p23tMQMzadYXyjL5ymbr8MVEkDXS9JGMMskUAd1jghf5U73hebTaVFFG5prRATkPJhhDQ2D7wxLe8aJM6",
  "key14": "4MdtSjVRwKGBRN9BHzTXEeQgBGwji9rHNmqmnnVLQ6JepMzMBPHewfg3rvFVdNLMsPoAFmdzMrQdW69EUK55LLuc",
  "key15": "2s4CRmLghCD4NAwHpUeMUdFQw4sEfrKDsvrGmm9NNCqH6k6RLDXVU95SX7iVxJnhPgfRtuGaomd3RGGeYorMjLcH",
  "key16": "4tUTQcazueKECCBJ5BiQP5HVzu2QhUg3tFoa5DwyBvFAVBWTHwNCk84Te2zec8RWuMcEmLX1tqgoeVh5JWo4GdLs",
  "key17": "4LzLcSmwxAGdyNCzAfvcvjGUq7S4pYQmSvNvCiWy18CDybBnUxFdxsrTd895U1H83nFoFxTFRvigZYXcpSb7rG4M",
  "key18": "5imiiuqzTdhhU6QgER1HaP8VbSBnChvaz4XrG1wCdieCxTnSLrsYfaiu2yUpBShVjgJjJdUqzorxvVLsouHYm4wk",
  "key19": "uPuguKezJETemuv54PdCHAHsQBN9GaiCXtAijMHCJTqNP9KerxWwuTDFUEq4Xs8tZh1Xs7s3PFJGzCQBRrEEMuG",
  "key20": "5yeYLuNe1nvn8Row4MGi7ms65WZFumbeVSGRHdEDjaDEwEwV1MU6qCo7rrjozzc68Xjd8mvscf4XoZrdXU47DnKK",
  "key21": "4pX8WyQ9D1mbUPFw6NUv5vFdgotAm8ccik6pWDEkKoy9QYe16voE5vCVSV2U8M7bhP6B3zv33FXHvTvRLEvyDcTB",
  "key22": "3NRXSf7wyNR8cchXn7ESeHKxAJLwqTiCgiMJmQBgJbQ4VWoRbzEpcA6iUEFL9hAN7VCVSTzZmeGXxu2wV1sak1sR",
  "key23": "uYD5F1ddnyHvn8VF1SNSbsPAuFhzb6ssGXsc8L75CC3fDF9mnuG8jrETTzZxxbAvpY2naMCk3wkaoX68zz6DBcT",
  "key24": "5xa2ykjuBfUQiV1KBoin9mB6xchznGKvgjsw1dqsUb3Uwu5rmrYy4fcE4vLvTq2zYpe4vxupEtaKne1EH4xF6e86",
  "key25": "5AggX5pUfE9RtRacPD2tZWQZ4Czp5EaPcnqXDKKSof9kuNo6iv5veEHrxp8zepVrzWaAtkr6aXwyqNRKj7ZiwHu1",
  "key26": "5Pa3MufBKpGqzWvhtEWxKfhm9f4K737zB7NHrS4kozAV1VVNrox3RiEFBTvyb3Xo1Ymtz7vRgbJ4dGVRYbNfQbWv",
  "key27": "Ca3BVerGzBmDzHAUxMm7XvaRynB85wHeA8A9AsD9kX2dDYqMZTR4T1EYiGmnRscBm8m8kiF17jtkWS67rmNsqPr",
  "key28": "2xcN6Ay52qgGaQ72QJdPhNi7tzz7c8J7BaTdrhZMAQyXwoPExpCcNhKC2x2GHBqu7PvvFrouMTxEw87KLpj8eMnT",
  "key29": "Bsjxc4d1sLGAUJY7hp3QEkbYrVkfeiaFmWKzVM2M17BZtZ5i4w9vL5QvApNE36uRgQ7QLxGQKvZM4EKxK2zdtrg",
  "key30": "2NcHpjWCuu1CY1XWoDENLMMdNLhtpXDSimVLWWJd2Gd216C87VNjVVHqgbbpvjkej4uJP68469RkK7dhN9pkeMUu",
  "key31": "3Pv259tJbHEUm9DqQXWzo65WyB6qsnY95iwU1ELXh9ndwBJjwH78jTdZ5y5EzUABXsG3q215JwQy2Noh4t3u7eAv",
  "key32": "3RMEG8HYb111PCBWY5UoJsJGWgi5SfnwQti4WCbXijCstSYGxGMDYwc1DWvMooEgndwdchNPEkeMciAVirihSw3B",
  "key33": "RrjcbGZo6PU5fcTPZnixD45bjGMrMDe7A4T9GDuYn59VopgBfrkU7yzsAQSKk7U9ty8VGPJJXjzoTnfgbvsq6aP",
  "key34": "4PAb3VT5KRvpzV7H5fdpj965Zn7V1U74RZTi5LHB55azie7LGqTzBZvVbyP4GFtFvMjk1aWU45zPX91bZbbn3aYW",
  "key35": "5rbBpX8LgEabZjUwH7Hix4ozyWKZ1GaSXDjiH835CE86iDocjK12wVREtBSG6G2T2PGhS21RKLzCa3WvuFT8Mc6n",
  "key36": "1G26Lsojk7KSLRuNJxsnjMkYbQXdxrbP6TirQQAfybBGjBCDCNQTyyHgbgyNL6SZaxvzRm4Pt8VbqC2CUgAcNki",
  "key37": "36LaqQCfmRejkPA4uYWwXasyNHzGSMMjd8Kb7ScZnXNs2DLFQfMgxouXKNFLj24TTbfpBofyt3Bm2suvR2Cpsh1o",
  "key38": "3cPRr3Rjn4kttBRNV9DS6DQLQsnBybBVE3MVrejgynPTpb4q7UCcHbaZwcMXsXMssmWPtchaxjW1cwjhMrjwxxRh"
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
