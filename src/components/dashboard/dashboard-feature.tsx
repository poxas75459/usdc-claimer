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
    "3CrfpoB3rujPUvMNdncsADvGMw7xf7migE6Tq1nW4qP9fEk9RoVdx8HcMKVJWDHF1g3yEoftRJWXtdLBct8qMXRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FqkGXcsrfVEWFoa3HrKRZHo5eKVUfyFYkXAvBX697YPo4LDRy5oK8MzJSCisyXwkyKeYf4bHVNhvLH9upaeN9Et",
  "key1": "4hDuzWDttuyv6xLk6KMZz4GLByKjr52smUe9vg29e9vkSfED5FtRypGBv73Kxx27FGR7nKFbfXTWkVmSErq9im8p",
  "key2": "35YTUSESz8GCTUitZjRUdpKzdvpVCM7mY17oLTAjxdyt3sfp5nMsyV2dkSbHWuXcd1eFi8LUp5EwSWDtMDR1ToeM",
  "key3": "4RA8FQErgWWtgswjw8A8nSCuCEN53Hw2jTTruhAfd9z2vPX2d59kpu1vZtVF9Wy4jrC33gBHd4Z9Ww4Y3JeKqME2",
  "key4": "2CwWFFwptmJCGvRLeE27BFBUitXzMESZQhYuWvBn46mjiy75fcwmMsZyPry8DAAYJqxQbxgwmRvexedffao4DGFe",
  "key5": "hbvC3kivBzeeznxZZuQ5evjV1HXWoqbvPq51RMMu7UpqcLg9mRf52rjG6KKnw5EHYL1XcXuzFJY17rb7x1iF8rP",
  "key6": "3Hmt72miDmJNT2Gz8wWQiN3WvpV2eMK3MPwszz12ESLAKoShuYuDJUL3q28fmaVbHgWCepZT8ewk9ij4N1QGcq1G",
  "key7": "3fWBEf65FAo6avKhYAF6Wy8V17Sjcehb6e2C5BR4CoS4UizAX5bAwXcGhmPsGed1Bcqa8HuP88yenS1M1C8CVR7T",
  "key8": "5FsbJHFRFd4ZqgrTRSH76LE9oUPKkSZTiXAoyVo4As3QuE9yNGEtDGR3fL3GPzKejTsqNvsPJYj73wK46zqQfzV5",
  "key9": "4CeMBWSrZKoLgWEH6txKZV94qcD9XHskk8FnZQv6zu7MXw8QESh4msBH9a12m9Yzgz6HtQrWYw21xcswCJF8U8HD",
  "key10": "46NEuZQqYxdsgDkrQN1rSMk6XNNcCFVPkhoFvbUJzj7YSuMz8HDeEYCpyC8q3zugnXX782C7esbWncpkadxwnQ6s",
  "key11": "2U9vP9bUbCReMQmSWPoEfevWZG3uRkcgeeftqSigLb5UMr7otEhQ2ai6fkNY2g6KfjaBArM6vGg9pP7Tsiu3yvwK",
  "key12": "4qn1guQkMLgciYkdi9RZg6u4TWnX33phDAcMEDEZYz1CrVMX5X5Lb9b1XiPbqmbv1YeQQ2Cz64xZhi6SoMUtA4Gv",
  "key13": "9YKN6Jx7NrQg1BqATyCmbYqqFG84VMYgWj8r6v5zh96UyYjjDQsgLPVmDMcwJFQnCd2PNqPmHhvvZ6DQArLJgVs",
  "key14": "44UzRJUr651LSRXjNJ6uvEhz1Ja2BVUeHbcjEUCDfkcBLxTQhSV1sSSpQ4gDbk9pvPERW4fxkxahQw338D4afRZV",
  "key15": "3ddyesyyUNgN9wrygN4RquZqAWYZqMK4evSd9quEKKQHPP3FaWDvHfJtDoRgv71BxRPDNbLPdBWBiwUa3Ey8Hjh7",
  "key16": "38HCoyEfs5hGcpZfpWiEyVXNoyAMT18gBa6hdHxBWgAV6wzYQtxJ6BwxsxSrTTZs9BRVNHFZKXVTR2EwHBdznZpF",
  "key17": "4j44pTDxJUpEZm6Zx7rKVjfQ8SkKEBAijjXAPAN2sP1VX1h6EFtsCR6Fufm39KWog1vuRheCDc8EtKpS5HV7Tj3A",
  "key18": "2gdjJPbmHvcFKisG9sFotyaGb6Ynb4S8hLRiZysChDQkCiRGbbR27uBuNirxVq9spb6BnfjAFY8pDAcoKuKTrFr",
  "key19": "39BYAX1bCABuPmmnPeHT6G8VCFFFxTLd6JhMTMXqXv8rzBptxNDFsM7nmymXZsC5ZPUREpXaEJGYNo9FaLrwoGV3",
  "key20": "33K4oxK9sF3o4UJEvytVUA9oMPTfXS54N92ey2JpuFjYX4iTKFqETWgo2ZEtKCLzuf51Bb8fjJigFae6RUDjJphG",
  "key21": "2GsCyZXcszeE1v4FTZSU9ibf5gNR42bXtEJc8oVkMSmE5oruzteSgW4dP7t8a3GF8zzDyQjM4dwEy5DwqxZpx8xv",
  "key22": "63gdyuTuvNUE83bcoNgPPHb3S8k1wjXc2nDPEMsF5mooGVQR9Dexk3iZ9jBwaHHc8mbNEfztNYXzjYAFoitxsT14",
  "key23": "2emJHp7p6FCvZgXDfRapY3xWXAjBMEKNmnWo6u9TmzuyGNzfqVLJWcsGXU3wWbiMNWf7UgufBz7BcuSeiAjDJY5Q",
  "key24": "4YwTLXXrQ6cNou3xZbcCz5rETevgSiNXiQoEoYWsLmXCGHLkyUN8RSN4XkSS8Lku91Y32n5iyzuZJGNs1xN4jRKn",
  "key25": "qWPtwPkontuWqMMoQRnuufHzK41iQr9Ar4oHd1ZDd3GNrACGRAp9mjxvT24q2H5FcLqpev35iQxCYwSsgdPd8FK",
  "key26": "sgCfhjEokRXroBEhBiDRyC3ZrXuyzq5qsJHkLigK21ipyE8e6pYtkPJv9ipvahLo2jn6sQV2yoLKAUgUvpKXaur",
  "key27": "5TEjqt1gpX76UmSGAtKzGiSdRVUtGYsfuzrBVu3fiiYePE1QBXBrWS9XQMC9jS9ER1Gh66EgqQCgZ1YrBD2MgFFP",
  "key28": "iiWYmHQMKx1LA6upURv5pH8sz6YtYwEWpMpDzro8icw4w11xwM7p9R9zgDsdYMY1rKhei1grjcvNx4zrphRxoWA",
  "key29": "2VKejviHqoKVDvTLF4kyK4KZJR8v7BqKK8P2adixTR27uw7BLdmvfaUBhksdbt3SSUM93SAVNxdB5vQ2Aad94Fxy",
  "key30": "49h8ppBUJpp2yg5McCb84FLAQ5ZnZTZr9QwpzDkKEMooJFMRH3sK8X62etFsUUYXCzZPfZfQWK9P5AXbVpvLvicg",
  "key31": "3nGngs1fmiHkCaboTVqEmdDky2RtLN4ZWVcLkCLxMXrq9kuNVsJtgoPFfkksJULQZhsStjLsk6cGsaWWNbue6NKx",
  "key32": "ycJrMh53pQ5DELeiWJ8zB1gNo4hnxmRsR4j6dCUf2e5ewJ94scwk2PXeQpCtbji6LZxSeyub8u27SZmX4BPkfx5",
  "key33": "38BtUtBHW3Xcj182LFCdTj6TkpLZoRmD26adcX5L93Em6hbxZhfZZYMBwwahdMzt9e1eiq8GLX3H4AQPSm88kaYY",
  "key34": "2tHsmTmMJrV5YcbaZbHWuj1jXPsKCZnMxopF1qy9Shweq1hoFPNpyyoj3yZMGbXQHuya9nJPgsYh6QU2mr7wrp28",
  "key35": "5rRg1biQVvnwYFxxzpH6BgtwnC1RHkxTuKMVCiK78acffceVjK3i8Zg3akEy9XQ1Q6izNHgmpQxujiVy73t2Bziv",
  "key36": "FHKZ4mcYZwZi9dCt9JfGSuZp1cPr9XjuL87WQX7xMvw7ADDyQEgVSGZ2ZhFcDTafh57SLdqKxScv4T1nNkEPMmN",
  "key37": "2GagiB8NmztoaP8qi81TWa31cLNuoX3cmjFpj4NFmv47bdXwTSTvzXachAkCazDNwLhz4VREND3BPmAY8jWgTwe3",
  "key38": "g9QSVe2EXg9W1b5dySTkCb4BbFcpExp47hgKjZh7Sko5N8rn77XSWbq2W3Jzcvou7pgZN6pcgEF9ww5pnd5pZsz",
  "key39": "WvBNVri47tapGhg6m44pT9WRG88hKkpqG3MXS5S7vJjoH8vArSeVWqz8S6cKvKnAnMoGd9voqrr8MSqB26e6Ksx",
  "key40": "3hD6rbJJYtAQMvDPiMQ5jcb1Rq9sA8WHSKfCs2NPQt9oUc2nMUN2SCGcxHKroop7gU1ajUxTKyaoHdiueu4kdbwL",
  "key41": "57YojjRqfeE785JrQA7pEqV98tdetexCmVMsVyHLjexo82GyYwvj3Q3DpcLtB6SJQS9A94koZui9wULLcMERrysr",
  "key42": "4n5SbcSnmfQstRP3yeCAJVynAY1N8pWCeDRLXXgcn2fabbeRXx1tYEzxqcjawRNHcTmFkK4G19Uks2WK3daTc48T",
  "key43": "5vuUKA3DXzcWNc131f516zjH3pPkaFDKwfmdMHLB2hexJcT2m94c2Z5iA7ZhSKzDqw2sz3m73FYWARanvLuCGMaD",
  "key44": "48kvvW3Z1zSzzshf7ULgbLcmRuj3xWmHiEqBbQUiJM9iaJBBdaPYEyWpE2i8StmjePFNE6mnyZpWBEfN8k21zgvX"
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
