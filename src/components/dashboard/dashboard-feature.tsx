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
    "23hoWyFSUWjxsjzXjHwSwJ3M1oBSkXDLgFm3pbGK1Ay6pCtLuQUTBBjfjew5HBZvnWtFeH9HjKXnzy58jAgHwSbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFYASB2oFWfXN8tGAABe6zUbFsGejaqDj2dTA23KoKHZw7xMQP5N31rrNCMrDged54FWTEmbcPdEXoFhkYSX76T",
  "key1": "41G21BiQpR3vFRNpgpUHzwRNyPVz4pD7H61Jps6xR5PbTKMFYtd7LxW9dpAbUMf9bmdEa2n68pfJaq4gNDEuzAr",
  "key2": "3TmkAmtF41JocPEh6VnVuEwhW9zxmtzhMHdr2paS4BN6ryje3TuQ4Wip4zo5MGTxQhyC9QfHVDXRACb13oPAV37",
  "key3": "22AAGVQEBkh4mg4s7rFa1v8Jo3z63X2y2BP5VozHFG32dzpXctjhrFtUwPXuf7jNPFmrjos3HbnPrpweBHo7Q3G3",
  "key4": "3qio1BXLvJQcwhuB9y1PNBWQWXEF8BefUcZPN8NtYemFcSsUkNXw8zDYucSHSRrs2oq6YJaRxRjx2R8KmxY3efpM",
  "key5": "2ikydjzAE7VxRqieUQVVdvYuARBnA7sJzcESY2cGMFVQxttor1THAVXUzCrVN1vNdWDw9mQfpdVKi3Sn2Kce4irh",
  "key6": "2th8qGuocgf3EzYUnoFpFnHhYnpWEM5gVKuzRwtrJ4Eh2oZMHpVHKce7ShR8kDy2Jz9im1RHrvGxNHBxis1LRPeD",
  "key7": "mgqsMSgLA2KTbgSZuvhZqy6J2tu6mzTFUMg57G6xoreQPzBjkiVdRXaxmYFPt6TFQUWTmQy3drY6RiRZaNB12hC",
  "key8": "3JqfrAQSr1sCfaXLjTYhEWuifj7qFhVC6wewVmfX7HdNdRjXLWgnNb1qdkMhz2onPMJMH4ovxcp6vjCUXQ4iPXmL",
  "key9": "2xve5LrrcA8AjuLFwz3bjAAMEzpGyKtZeYCir5pLPdFk1ehT7kUPjZEtyGn3ivmoYDPaiAHCP59xi2CCe3NoNVqF",
  "key10": "5pzPgdEKgms4JRcJS6zoSj2oeuSZo6UGoyK26n4rVHSvHMn25VA6GNHHYZ8Rj6ERqKRgAPVDqiipuguRrPjQU7ya",
  "key11": "3FgqJphsKA69QAyHpBUBJBaQrhXDTaM5VJJrzMrA6Gj5gdFXB9kMFUL8MMDZx2v6kjzZw9tP2UFVSmJcX1TCVvqS",
  "key12": "38XTRd3dcWrfr71x8GneNfYmDtf6w6pASoiWqdy5yk7fyfmLDTwDpZvpraWnJCeJ3MeGStdYHvnXSNT7NJZMDe4a",
  "key13": "4AWitKVZqK7oRpd299KcdAeLaKEbUq6dQEHAroA1wD6ZWxf857ndkFJMb6mmJYF773m49u6BViSuKD2cQc5CkZLy",
  "key14": "4kraGuowSVdKuJA3EJtBXdmrLGTTyNrmV8k6CTo6bnx5YiFKsrAvvKnuu3Ac7d7jQVC1CUcNrM9vkL4wou1m4z3Y",
  "key15": "3a7PWdN3hujvLmnsgCBJxCKosZ2zebeRNnLe33NgRoJj1BANNapcsbtbcr33MFcovvoJ4T5Mvit5G19ScBSHchZE",
  "key16": "xcnbB49rBAFjpH5kSteEEsE2X1Mz5ERnz9RjgdzkZ9jVoFz7CNsRZP5WNnm8UtxewXUAcozPMzSpJm9ucYeGnb6",
  "key17": "s4937SRK82LkTqZNhVsDuktcGpy93QJmueCing9YeV6DJyJTJ2ahMY4AsD8tQZEH6iqgZ85ocr5GXwzbg68nF6S",
  "key18": "t3sQ5GVULkyo7K8rHK8mV5GTYZY5vC5vtQHegDX2vDuE28TUpP98uHSjx8krhV1tdk4eey8kuQ68VkqGHcUb8xP",
  "key19": "3AsMXWQrziCaCepEjmcrunuBD9wZW4W1o5YB8VYYCjoxNCq3KzgRR5WzSdTSGHbDWME5nWUimT36tLTBb3oVkHLp",
  "key20": "3ouUB4T4kBiG3g2hVLbXbfNJxUxbMvkRTQhAHPy9XT63YjDDwGdGM14nJKPgUy4jheu9Q9gb6x2mvP4EXazg98Lx",
  "key21": "2HY4JekEJWenWdGenN3VM6KGkZZhYBNWbS9ekWev1Xa1Tvguu3axTvQ8tNPA8eZyyA2RwDLZB5BTVLUfVscQHCWn",
  "key22": "56UHZ7ogZSCsEr5Kz8kwyE6Q81b5XvpvL7t132sqX1LxySz7KnH5cj4mYRENSJgniYctgJUKpyCCeSgDAjQfHuFm",
  "key23": "PkVh5HrnobKZ1h2yqicDrmTz3rRoQAT7pjzpgeY7Jy4SumeSKrSmRHwnJGnXLoDnZog1mVWE8HWcdYhKaaBt4g6",
  "key24": "5suwB7ogUQz4Vbui5jfuLCprqr2LbJ8ghWhvPRREP7m4x457MP3XHMneyYMFfnhz6m86g9cvdhUfuDaH9abDJhUq",
  "key25": "2fbLKP4RxhmzRDZfRyhff8T1JAWDod8k6FXEcsBjMjcBycqg7f4kopuaGLbPnm71kbFPEst6T41SvUgqUte8GjAd",
  "key26": "52cJL3x6T2FbEkSR3WGyrWv2grvfvLrSBf37aZkAixviNPCdUN9TQXTxVGYY1houAS8Q2ftRCbKCeMk9nJ4idRNd",
  "key27": "2s2e8VvkDceXuiiqex9pYA6nphmrszALrbifW3YuFM2WuuZF3yXPtCCTKYcWjNTNvqdgxZdVFNiFvGDUntW94iCh",
  "key28": "4omDadHsCnr9NtCH6cfBLrhdXVzk23St1SGbvqDscf9wbnwvMXBuBRLPJziGbt7Gp2kXAoJKcDcJXK3scvDeLNai",
  "key29": "2jU6r8UDZi2fpasRBPxhK6EKkPUuoNJ786ohRhwC8ixu48yfRCEsq8j47BeKL6NMo4hYEzQcoGhcN5wDbh1N3fSR",
  "key30": "dZb6eEvz3CKrvTSAdJs8x6n5e1Jdj4RnRmbEnoBc8KCoZecMdttt53BSRaLnbr5ujX5cifXMYsae9WYmTmUDRL1",
  "key31": "5US6J2DNeiGR7fp25XnZtHpX3D5ioF4V75P9mB8Rz1cK6njrdsJDXxHChFmHqTTx36TMamVAQFMWzFYw1zquFHXy",
  "key32": "3auUqS8JC8ECH7GmykMGZLXQCFtriqLJarxzH7S78rJcqzGzcAWb4FNcYSKSoXMsF7daV5oALwHUMncJfCTzhtgQ",
  "key33": "4URrFYdC2FRBQE9F3vT16ib6fRexo5CDgXqpiRayjrhyZKd7Ee11WtSq6ccS5cLMy4d3Je8B1Hmv22sg4kgTj3no",
  "key34": "3Ch6LrgzM9kKKkx3gi3rrYw1T3gLuK23n8dn64NKc2vJGqKhYuc1eR1XABmst2dQW975m2R7LG2S7Q8JP9uuADwS",
  "key35": "5vw6vVMJY9bsUivKiX46EHuVWbtgJJDAFWyxSGz1gauwfihwwrAhdUsgjd22gDBQgMLmH8SdaLJa49MhFexi1PaT",
  "key36": "5htBax7pBitXzYyPYdZoiWwU5CGgfQU8qqS786uAXzpRuZVgbxfnHtuLUqxnAnt3PR2KjSb26AFtDdTnht6hA2yC",
  "key37": "2HeA3tQreaq7nFCwdpVAbaJB8HEK8MfUQ2kwebtMWEiz93M4mPhQtLgKZrcj58vdwB7yUTBwRBkw2tTXYNoBR7gS",
  "key38": "22qM4W1W9TNW1F5vRjpvdYqKfk62GayEv8CzDDpmiMV9mocudWCsnmfg7XhNBWqGVhSxVEV7K3SsHbfvTr2QshtY",
  "key39": "1QXVRNRjiCoR53nD38fVYFJ8nVCw7G9YFGPVciaQfuC23KpajnAS7nk4qFwiL1Qi7X3WkuBJnPHM6d1H3kxPE17",
  "key40": "6TH5gUKoY5xYUk7rDfHknCYqtM5gV83jXwGnL11hBMTNgbRarucCBsMBAxNKc3ye1L2PxGELKEFaHQCWD9Y1N5e",
  "key41": "2wohqCrPNp8FXsy8jJB1tWfASNvQySA7iv9g2xqmbcKKBbjF6vSjqY7m2gC9hTSM44MsDmjXWHFSPrc2JnfxJ7ug",
  "key42": "RqPLSq42aoVA4PLie1cBCUvia1sB1nAgdaa5MwGzcoS4nqTestGaZjJoum4FstTkCch6YFBT48mdyDLNw6gtrGr",
  "key43": "3ZDTZqJABFRDZmjhzKWcqzeQnxFTW3XcsmtwiEoioVhaMwqcBuj57DdBrGsps8PyHznZpKjdhG4TLMKsnc69ovqD"
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
