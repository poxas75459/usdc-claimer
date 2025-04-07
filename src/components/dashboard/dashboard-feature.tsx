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
    "4hRzrvV7hUBeQV5EiN5k2LuL8WCSU3QE7PeSosgqvs9eeAsFjFiz41E2aGqaVV7HAUguxLqDR9gkLgpfkY7LU5Qd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TYCkT4NLSYDzGEkVTN48mCyoD6T8yLyHwtposoZAk9ymMvyK2vBrUD52E5Ygrvx5kaR5LKbuNb77sz6mb1tZxLY",
  "key1": "5eoGkJjon3M4UFc3JHK6qL26qiAHp9WAcq3U8MQwN4ivwJWgyBFY5G8LZJ62kVtk5FNvaCzg5XDCLZTnJmKMcAd1",
  "key2": "5d2MYoiuQLm8PHumcG3kbjnSzpDmDU5UVrTUrt4znr88Gc8dFxeaLuMVYVjWTuUPfGuFdNhX9ABr7kc9Xyx3veDA",
  "key3": "4XxXguqgvG93GGoeFbHjeLKHA7BsA7gXtESDHZDnDGRNNQU49xXJVyEuJf4N4s67zHLbWsoDPg2XpqLzizHAbq6E",
  "key4": "asFuRY6hebuCoG5qAQxJapUj2gs5Bd8fetrEveehWfDpydZvZuzauZzxEXedJtRQARAnpkFtJRDmuoFGuMjJ84g",
  "key5": "4M7D7iZgxJk6ykbQPyYvuNdwtMQ7CTiui9j1rvJ5FDGarC7UENB1f5PuNTULXPiNLmXEistrV87Y3gxWrnYQ2xwU",
  "key6": "kskbwQXcuat9ESWPDqjn9PsrdMpgCtt1hrH2dCW1Rd7hFJ9b1PApPATKovbdGgfurU2UwNSyfTPibpDZhcLNJgo",
  "key7": "5R5VkZ6xAsarMb32GFiRs97rETQRnLHYSnbs6guKSzFGNp14KXWuYQjfimLvdVQ4hf14VtVJziMX3ziwMfCFB6wT",
  "key8": "XV4TQiZy2PjVUaVHxLdFD5ZeBXWBKtMgXdLvb7H7tzazMdpc2UyXjWE9uNuFgayVnnZH7SUQSfAoxHrfjRjEZJn",
  "key9": "2ac7pQySgF4owtjsTtBmGo2oXUjs8Tppk8YX5nKRgc611aWY3HGX5LbqNzUuam4abLWZos9mnTVbKBFEMDMMuCdw",
  "key10": "5VNAqMM2zYKMJovJXFmELcPv3DerMXEeM1k9d8rCTXoURSkEUbWkM8444NHRnE8pbrw9Ha3Jj4FAdx1DLayeU9Kh",
  "key11": "3MZZUoknLTg8xsRxBjghk5yaLQb94uo8VvAkye29y8PtYEspGK38fYq8473rnHe42WKMNAoaYVHrhSBgZjTJvcrb",
  "key12": "2oggkJGViU8dy9xxcJah7qbE3J1kqBMx16gwoUWCvhbD4zNx1CFrxjKaLdEQ8w1krLzZYGybVqqJrn2oqN27dUpi",
  "key13": "37x8zcSrtAhZgPoUWcPH9d4cQK3XChnmPvfLHqnNQeJTZRe9LhhR3JUoooWKdjkfc3DudWexhVKrqLcc5yDMySoM",
  "key14": "25GHvJQkvLGGNVJTtYbKTUjxu9KsnZdwGpAMiCvkMrf4UERvDzakhufeopZCRirsKWHeDTZjyKr8msmRjzTXvQEB",
  "key15": "KxKCMtvyUb73kaXxcpmGpvYXDTMCMQa4nQMsZy6y18Kav26Sn2aAwv2eShFjcfzjGLuwR64mtTV69si3xQk9QzT",
  "key16": "3Tna9MEVszSYMf1YMrbh3QRCsfVZf8NxiwLbvtQuWF6Ncwj5pnunpMNs9yjKgbobwM9zGCiccxmGpvqJtc6g9n3J",
  "key17": "425tDGZgFgZ2VihS7SjXou9t98nHLmciuy27UKrwmmofBAAPg5dZq487TWkn6MXBn8yQBvvkTWeFzHVN3dp7FoDo",
  "key18": "5pojWj5jDuNaAV5cvWSLwaAAci37NPUCinqadnhsmm7SyAWUyXveVGDzDFkGShfGbdtq2WTzvhX4ExXhofeP7keT",
  "key19": "34NESdCY1jfbSV1sMdHSYLNCK9b7j1XGtiz9w9gukont8Yzou3kB4PSvbRbGSdgeeSgrng4or33T74Tpuu5CZNeD",
  "key20": "61cAB64rxBu4fcx2BFNHbhLmMb3cVELiiRh8XKV8krw226X18gLPHPz2tfKzns4vNCm4Dbknj7iQrF7CqkZLBVDD",
  "key21": "bm8V99qiswQmWPqbcoF2ctxnrSB5Huz2uz39yFrPgNxo1bf7T5YchNTAmR31SDdb5mncJpxFnAj1nebegQBux1e",
  "key22": "4Qth5c9Sby9YCwa9KdWmAoUCUvNocKyhJPtV9YJv2yh5K5VwnabxEec59LPRJyBdQ6LjQdtEJRbB1PM2dViUwbmi",
  "key23": "2JM1Lc7CYsh1oFipge8LDXGMzcTYxf7qZrbNiF7oAfSBh5wfiUypQw2q99giu93rjhKT47mY4pwfY4gxyphFeZjc",
  "key24": "4BTT4qGJKLb6MDAUmGJ21DXNEM39r2hDWnoujQ9X4QpN2EwCMhPpXBgXSL9h4vsfvYUaRuUHd5CFUG69SMXhZAKp",
  "key25": "TWjEGEa916zN94u7F7icSNVdYR55zcG5tkdqfQ9Sxbb13zKWRaeWWkC5TeR9EyuH9s4vpYGhSDrJy1F1JtHoT4R",
  "key26": "5g6wahjSnRk1PTqGsXcVvxtdckSSCfRpmusn2YMA3NoDii68gdTLxmzmTYymp8Pc4CDeojhUtjXByPb5kwiHSkMi",
  "key27": "3G1MDUv6oC3fPLqzt4SkRw7SvS8pFD2Nu8gcwtFS9RvgiNZ6E554yj2wtU85szvUDKVWpyQomwYfsqGa3c17VjPV",
  "key28": "23ZXmAdGSAfKb82SUJLM99r8kZg9VhyRXLkUuDhvzRGUZAFG4N4NR5kfbqNkshH7id5u4SZYdq6dxrxin8dedVVZ",
  "key29": "aCV55Zvw1qVboPeJDLsH8C9GKgGm9iEDNbTYrrHTtfSTqFaTZcYk6KiQTKibh7SWbakjgC2mEr4Pw8mBpNmS8VC",
  "key30": "2H27ZLUiodzDud4s9vLvpF7K287qXsBdKHemeZbhY8i7S4GBCGnjAhdRcVR9my7cUXGBMDW2oB4RQqHc8998Xzpn",
  "key31": "62NVeJsfQgNmJLG2B5wrC4TrCdFUhtp7xHpQdND4vKwS7petgMi4nfVA29Vd1HY1iXfXNumRYrNvUkTiA8fKCWZx",
  "key32": "2RNYpiJW4Z2foYpSSLG17nhC5DcKFeoigBMJqMSEb5AVGBXXzyT8Aqi2XJ1phhEojGNhhtczKfqtQRR8ZmsE7kpB",
  "key33": "2zVaoEN7vPxP1zJj9SoQ9uakERktahuw4VSKfJg9kRuSjcsgFRB3NfB7QeDsKLsLY9Lcz6xRDBnkTs1jZfQqo8fA",
  "key34": "G8F9QmmBrJVh2pSiC5zX3bAYK7WCRQYpC59u1daudHgDUSj4nZ1FvccGc9iF2eYrYkCTPzbEEYQsyGWpdnXHn8b",
  "key35": "cMEbDhU5maNjk6XFDFQcXC4k4RNBihNSiXRPCnLgfCdg51ibrALLm3UCPLZggBzTmWGL6vi169G7axs4u22h6Hz",
  "key36": "47kBvEnCNRhAUUah9yKezNU7YCndhpdEjAjCivsN3ZtkXPaEBm81mmZPV6Pih5JzKpBicQQdoJJBqLvpvAqxSyCT",
  "key37": "2MH6dkPhPUG6tMNMhnqNWRw9Nhsk3285uAGx7SPFUpjm3Ne1tUBzLsxUWP4VnPXumKyhPBipXBHkbNiFjjqMqpWE",
  "key38": "2ECRCC8BDmDmnKTvmVof7ibCLkoeXTMRkAk1fsGAcLK1TDYLW2FLCisUidHXsFGqhMqeCyKSejUq8mfMxT8DafWY",
  "key39": "2S4jriyJocXqbfxCAig9Qnz9XHqHq3pwAqWJbLnEuijFYrBAZs34qjRvEkkDCNYmV33dE1c3RBVDEQ3uX3SCMbEx",
  "key40": "22TngA2cWZcTEivR5bxjWngacoLZxQqDWmmgTiDKuBadKifubNkfuY9EmMVgeXYXLPF4EqJ6T6rHLGVwaxDXGpmk",
  "key41": "5vD7c4mKbqNsTtJwPi94EFbo3HLJ6C86p1Vky3nxJDJfvmd5nGZCyogFudo2xeeR7Rqkwzmx8E72aWg69NFwJh5r",
  "key42": "5ZqQRuaxgMQmKSPxSa51VBaecMSwSwDvkNhcogJXro7Mf7aUpXrc2qKg9fTBGRj8BjvFAy45si3m1Z1fYP1G4Li5",
  "key43": "4miHEGBqfQyBCY1dPbKGWXYZmjGDivD6hRmNnTtyTLh6xxH6D76UTfCu4XD4qrNfMN8xoRXVjEmXZ8zCM3ptpRog",
  "key44": "5bJgvczkZcUWmVeR9nVS5GYMG6fsgujR7uqGCMEspTymNRkzhpHT98d2V1hwTu79aMvgN9c6nr7et1EbepyTN4T1",
  "key45": "4a142wBhD9EAHbjZoB217wjb9H5iBToPUyLq94bE7xT46k3TZGgXzXXp2gRf8PnWHkSbr2h4ZbvPHckax57umjGh",
  "key46": "4H88koUcuqUdTG3TzoNfcKEZFaC4dChTyW2AfiCAKJ9Piqwrkp3GRVzSzFCP4suSbSJTAntGjReKjLihRZpfTAfs",
  "key47": "54SD6YwpsToszWKhrxrNZscUaesZbtAMmrkQGF8n31HbshHPsT72U3y8o9KU11MdzzqeLo6HXC1RyJhr3SWxsMaL",
  "key48": "4ZVJspiSwsF4nNr7gR6eumgbXi8eFhWy62Qmg2Fx86MLH23TT63vr2PQ76RvtUACJoscWJcnD3ueL3PTjYqB9Rae",
  "key49": "3y24xoeMsW9Z7XrvK3vtMs4hqzQ4rL1Z3XsPrxCs43s2rEtDYikU3Ky97yPWxzys92qEq5ea755VRSdkepK42igM"
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
