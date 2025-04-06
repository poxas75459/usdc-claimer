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
    "54pyxDkn8G6hH74Xhu8TCKeYvRhsdJjvob4fG3vuEmR8opNkfQf4RPpbMaAwckjNv3swit6tm6Wa2bwCCTk4BY8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTZU6Xa7wAhSNQTcYtNYKn1s9vg9zCcF9sMR3EPJ5GfcC94oBQP6n6ZUXS8DtkPnxwE2oBaGWoiFDN5d39ZJHEC",
  "key1": "4z72HhSM2qzhkoxa6jHvCiTU6qoWSEHHL2CzuDt7F9dQWcBbhENHpiwYeYZUoWA2UJn1KTKWn1AcxmmAbhwmP27J",
  "key2": "2bhbwEwAzYNQTYJR55w3mgNbVgKnc9SrVshVM2eF4wggN9KnMimvzcgQNi8Z3VosfhAbcp9nxoLehPyUVT9cRAR9",
  "key3": "3nYjbBHhoQ4Ck534vkMWjkYhdMB4s1Nz1GNNkZM4qdiB6ErTghyD9BRCsWWS9d8VsgEB9L6zTQvKXYxe4P4kHMei",
  "key4": "2mp5yLScraVDSFnLvDAwyMyCnZA7k8A9YpAVuXe7NcDZ8jM4KZxS4BCxecFYCdPghbYQGokNdA8NxxqBtZZzRnsA",
  "key5": "Dcbv6Cv4UvKo8mWgfGXhmtdpEb3djWoS1zVGwgwZExiV8uknEJQUVmD5kGmAsZzCD5ohvY7ekgu6H4sKtCCevK5",
  "key6": "3W7Q2NXvue4tF9B4GVDMgrmUzoDqhmtVypDTFWhiddGbHEBYSVcbs2KcfBjFiCn7mLsYAznMSJWeinPmUVM4Pt5N",
  "key7": "Us865nEU9E7bS3HRwvBx5rSdkneCFqiTJR6a25mCcEDfKUDNMcVjKKs57qB3kMtFt6FakKNXU3zNqR6wrhGEfXw",
  "key8": "2iMPrdw5sXSVJeo8AeHH7u1u6gM5jhV5fhUwe5nwDL1vnjgojX8sGZ8ExREdaRjKpBKw1QmraTXNpEMX3rZVravy",
  "key9": "rPbaeoFq3s5pkhivKM82jjvyKdfsz7sWgMUNs9Xvck7ow2ehcTgkmqazsXzHQzqsdX8USA7r3U5XTMKYDQaj4Ca",
  "key10": "3hYMXFronZknT9N7pRErTmz3jh4z44k9whcQP81baXDApseeb9rMaUsWwCKwwo5x6nn4YoJ7tZ6YGTD6f6UhYqCo",
  "key11": "4sP2Ru3JzVkEzCE32o1yGhz2WTc4vRPzcFceuF7HuheroQ9WrtZic54CWFuc8ZrAjTr6kvigMke64XHz4jcJ1cee",
  "key12": "4zcg9nPphoTb6A8gPjFNHa9zoj8NWpvHqV1PwqPKQ6rgj8nuiYpywoiDBEy2hX33LHUwsz1q9tztw2wgsWVDunKS",
  "key13": "3HWhK484z7NjpycBHjEDXVFyxZmWLCv2iTKt43kvEJR3siZw3F4pyNzVWoHuE5AxiRUZiTAWUw6Z3bckU7sRD1pM",
  "key14": "r7mWr7JTmPwVf5SYMe2RCoVJ83D5gTfS3kBsntaFZagme3mvHyrQ91fpoBPRwLNb1SA9AMxhdUCE1ryPXGAoiEt",
  "key15": "38kFYuoQBKs2APJLDexs7y1nojy4HV9fhivpCpqRP6qmqSUMWUR9Gr4WynV1aYfD1NdtjTRCmrDK46bDPxbThKkK",
  "key16": "59YgGpwDNfeKkY8WsGzZ1YkcQ8oLaZtuUXo1P8pBcftkqpQRW7bVJ4fnLB4HPnEF4oHXC7TmBjjyMyaMP2voxwxB",
  "key17": "3xxEKSk6jYR7DRtigPgV4qMuM6Lgxh6zkH29yXPjz87hCtBfXdgDVZxwUB5dFGaetnr1d7DeLfatFNra3zJq2gSv",
  "key18": "MRsxdWS8UP3Kw2UxrmgYVhEj22ArezSM1xLsDM4s9fzpXYqbnk8ZE5Zmd7jjqs2byYbbiA3kCrrKqmJAQixkQwb",
  "key19": "4fq9zRRw9vUx5tW2krEAWZinADoB3r4jX9c4zEgL8QmeM2qQ3qCTA9Tzd7porutDwpRjBZsaiNWuwvp2Comvo8uN",
  "key20": "Q1nhPPRHhwfTTsTCRJTM6zRU7jys4ivJ25Y7yELnBom31yVbBaKGWK4yUmy9KbC4PBhY1TTTYzPyKn19wnVwn2L",
  "key21": "3jG6fxYKbP6v9xAgN6PniXpWC2RYSgNEjEpxb2FiGi3ae1HszmSnMsyoRdrXyPEpfGA1y7q8pjVMKnmtWH1TUepP",
  "key22": "4nXLpitwxWEGGvWZyZA28Es44nfgvaLtqQtLp426xmyQJFST4iUD63jopEDHethvouLD3FUfQeiaEhbuksoEQZs2",
  "key23": "2mAVQbYwjD9cV2j3Rryd9FYziScqoFLzSeqcC9iZjadMYj8rH2tFCMt4qgY7GtDEm6W8uHJrAe5cgJPMc7rbKRyd",
  "key24": "53yinPQYaX1kAjUgoqCAuK3ji6Abw4wyAEBRQsfGCDnx3BoqXi1oVqT5DTtNytyXr2nuxr2DKDMNA2ZeDrsvksG5",
  "key25": "4Gy8oaLxusE1rKaVDbmpp3Hi2fD6bJebmmjBXsTy3J4vbrCJaP3D8PxCH1r2zKvfMSxUbuLM8ZJWNuz62rNUEmkD",
  "key26": "4DdRuc4jgkdREFNaYP6NmXttfvesPGMydYFwDmsHta8EjrjEwHpKqXfbtUgxgqK5n9Y148MBhJvuSebdr9Dwwpv9",
  "key27": "w92xTPBPhSZXaWnr3N5s5HKLhPctY8My58wzRWMWJaVEAMwraVTqq1KSFPUzPhv7akxwrSC2uBRjfmbfwKwrX79",
  "key28": "2rXSxF9uU61txk2dz6MkrvgBMSkyGbj1d5Y6PYYXhLoVcxeo24YFKqdTD6KED5ED8odE2K8dwMgzT5qtEVNrCu6h",
  "key29": "5BYPkqCDcyuDHL8kFMuRT4e7Sggz9c6kdDkKg3fPHnGARU7DchxWnpRCtB2ENHvayqstRftEJuKsbJSMtjNMWpXM",
  "key30": "4EbzmUdCrVEet6AgKr3oZQeNfmJdTwvPfcNmfKwRJPtoNMfHs9wyR8HbS5MhydsovVn6mdJuK1mBPnjkpYEnXk8Z",
  "key31": "3nimgdSz8yJ7xwEWEee4ZyZKVLCRu7CzowdmDzpUFh7kdX8V5K6FU6uXzCqnEMkgqM95TBb2BxQVgdEY6zQRiLMt",
  "key32": "PCRaBwnFWqroJaV3DPkqYa7TgxmzLDCR1W5z3Ryk64U4VyBKesgXgdChAm3iaqEspsT9gdCmi5tVZMnA3w642VJ",
  "key33": "5kDtW5ujSiLXonPaLyHmXidoWw7VeKnWubnkF1eqHW7MgRaKP4KN2hg7uxxJ9GP8C2o9c91Ldy6Qfyt77odxAa6",
  "key34": "e3kCwfPdaDZhjNa4TL3gjW4fZfXznE536ioo8eSsVaxfDDbGMrUFQYd6G8moJBEhmZNqK9vxnC2yZw9ytwAgUPE",
  "key35": "3kbjYTrFAxXN1xZVqYnVLX4J87XabqSiMG242vL9daKUD35dGFkQUpAytd7zd5dkdfGa7WFNx5fVd5qV6mZFWNgd",
  "key36": "2TqRfePfxqDZd91SucQcNvkE3hhMg9KP4QkNC172AJorhxowKaHFssHUWrCc8M7CiHHQoNRDAwwUXHs6Q4QE5zw8",
  "key37": "2LZC8HGfHUuN1M2HeKNdDJZPDEMo93w9o9B1Q99NVr1r38eRSfhbjc6M1nNDcJokgZZrxY6g9rtwkJPLC27PfZ5W",
  "key38": "4pz4ARd6EpoVyH5U8CBCLruZXMM1UPi3sBWLYogHS7LHV237tdXjc7Mjqd9LYqKT2xvvyFxC3YmQ3KSEYuELt9FS",
  "key39": "5xE6mK5yTD2aZcaJ3oG6xkHtL6FSQUKNeTwDgF58LwRPn2VFfYqrkvQMbBf19K5dvBz1rdJsNjDrgtGa2mBYLpWG",
  "key40": "5SyLGhSNPvfUQm4g8nKFGHSeVKaY4K6TUcJ7yL1prwCeUC1aGo3PsPq2AowypanNChtmPDaJ5KYYa6LrC3TpFFar",
  "key41": "5bVnykxUW7SezjH5WksvNTMycHdoX6yuR8dmDGJKZSNs4GMwKWPBZVtGqAHmk3rBKLUCesKoNkgtHg3fysAM5XCz",
  "key42": "5rVZyJhWYcs8KDEXPmQ1JVaJoFHbLiaPqNXg3H3VgBKTuVct7BPU4DbB4UCtbARDn23fmfiMpekdJLzVoxbu797u",
  "key43": "4wvsXcsTBtxZqMDmCfBzNadWpLpt5SRbn6s9YCupShGx77nAqmnnyB8m2S66T2yvi3SetgZa8xGAXY76t57hXwPN"
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
