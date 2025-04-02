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
    "4gpuw5RDxt1JLUPBtK82jKkiKd96BS4KDT8obeiG5iZ7TEt1YkVVctzrKppzu5hZkSy8QpCAQLKWfrWHj58LLsap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Sm2ZHhnN9Xi64JCq5tctC4oQKrqPoZCZJRseAhmEk8UV4wgTYVinF1EWjYbaGNahrK95vMrmXPsYucPR2GKpe4",
  "key1": "4fxewk6JxEBBnoRyZDnVucJfDdSUCUBqtJ1fQnHqHWpQwZo5apGxJJbnvoUSwC7iNKkwbCmifhw51r1BRbG8UkWz",
  "key2": "3sf4fbDbbQ4aPys6w3FpxfQxVmnQJhVBZ268go8cc79DFsgNrRxccMvjifmxCMSvLefxr33vq49ZuqkZmS54H1c8",
  "key3": "38gHd9kWsNMpxhxWawFYhqL5Si8Rw2N8sUbq268CfqJAnGyGxTcgnGhdqsRvd2UeBxRTaZbgKyw7HZdfC7MzrQn4",
  "key4": "5X6GNaQN7ZaKY9VEdgxCcrvjkE5zTGR6jWrNMnBGsYgRPE259Bc7BUvGYTpyH1Fy8Ym5VRDqrjLdTQg6DjGg4C1D",
  "key5": "5necJr1SHpgY6XJ4xhrmat6NBMFTK37CKAqkDfbi5hWT7WFetoPanuVssdpDBqNw9uVuyThxpzrKTAVd1ZX7Li3q",
  "key6": "2fgQYeZmQBu3zJyH3u8MnnMkwpjyYZMksg9mty8oFpaNjJpg24DBSKJF8YLtdWwivXTT7JMRzWZ71NQ16Qq6H7Yw",
  "key7": "3gCJT1AbkYqQDCgj3kRMEXKiWBfby4Mq2JXdvhR3npNhifjveuXv57yxpJeeXkta8FjQwfo84Ufz4HdJxFadMu21",
  "key8": "3wWM3VJHDWkAUJ59pidF6jEgtcasswfQ4MBRiGAsEQr24EEe9WsVx6WD927ok9dZ6qfV8KNxeQbAKxmbAzPhuitB",
  "key9": "3AEDaCxJFFmhn2EKozE6ZFScP2PAMd9VRmcb3a3x993ZaGzaf3a4tBajHvix6fugqZBnPvPnvZ9EeXsMkQD1z761",
  "key10": "47KN3jqks3yueonPFrC6HmuULPdw6cccynCiQnpaT2nEBWhMGSgYp8G4BaedaTCGouX3wGSZ32LmQpivUqHUDePR",
  "key11": "2sE91TF4c3W4yPUrGbFix5kro6dwA9kKJrYHbshU6BSyP5b256PzMGJjxcRyNgP78nR4SMsnKAJxcQKbT186kgsy",
  "key12": "3dhhwotReYXk7sUgG6WCgFZ8Cp2pT4Sm8rFj3RxyodpPAwKPEgFkEmPc27diFqFPuCQKggbf5SrqZEAeVAfubXtF",
  "key13": "3iRiQVQMVHQcRraDMU6yGMZHYPRgXum6rysEDZ7sKPEKAAC3uqvYUcRLR7VSKoTubCmrzK9GLXZZNnpyQDcbwRKw",
  "key14": "DPAFymUCPsHuGxPDNTpnWviJR5iDtdb722osUNcJdTnpZywNUamqySX4KND3FS2nbU32unPv1w4fWUsC9GJgDUN",
  "key15": "3gwMHm6htqFQCRGfDinuV7uy1uF9RGYogDxMYMkr468NJMKnTkHhYvDovb1RsfLM1SNLo615BuFW9GhVCA81ME2h",
  "key16": "4sC2Nc7fW57RDNdYLwkP9aaAyfpqovpfjyq9Chr3ArZXGuNmzvS84p5i6QCSa7WETaDCiJVj26Ynt1r9yh52ixDB",
  "key17": "2x3gKPtRrAthLHaiDfvDdKLsi9dHCNQXjunxGj1HdYoubsG3Shp9TMT1w8GS1yU7kJX5H2iwP4Dn7ApADNYZXZ9N",
  "key18": "3RDGfNmopJcZgwBqZDWk77kzJ5YfoYZHvQ3fKYZPFmMWoppNU9LCWuXiqyethpJ6VjHMsZi9PDyWrud1kS1dstv4",
  "key19": "3BvWcgFV8JNG5aHzkPvhVLAzpt5uh3F5xU3MytdXJvnBjhLTt9ESgnfLYUEeUQGjkuBWahrdtAq6CjRJTF25VtRQ",
  "key20": "H56ev7gM9nL4FqgMGHdTVdgmt8btMjJStApGTKiq8aoQgQda4HbD2wwK3ZXzVdDK7mnQBJXkfUdvHSbXzj2Lrzs",
  "key21": "4sdJuGt5VW9cNQnDwLscRjYchS9jfMwj2pjMhR9hB3jpTCXts9WTq6Zo3TsNJEveHyxLYqtrMXiCt4dK9NyqKyV5",
  "key22": "4t6rVSDYriDjq9jxcZmki3VGZdCvUBfVNSKT7LEZrhjFtdWx3V8srdekmRmAjXEzX5BNse9CwbBDVFuRTz6Zsyb1",
  "key23": "4c7TooxvJShFDq42wYY3PYbcP4SPXsV7yre2z6PfDwV46jbYXLvutReb4fEGPriTrKbSFVjmJetSXkQ2neKBXQpE",
  "key24": "4rwRowB2GeUtdQ9iWSpMHhA5MPPKcRBxDA7FXwGmgbU83Qk59K373nrTytf4qVTnVEdgDC3vmX7fkjX52xbX7d3Z",
  "key25": "5Zoz4Y9ZwVQ976NwngD8TjmseHK483LjxgYtAc9fnYVDT1dvpPMwWxJdUYUiv5SKUNLwJRoZ35zyB7P3FzvCz5NZ",
  "key26": "4FDfQVzxpBvm2rMNpa47XSM4J5iuquX1HajUQzDM9jMUZ5oBeoK6SdAgDuSN4EndVM1u1GtHRdTdFkzYNhS174YP",
  "key27": "4XJAfp7B2FJbEBTwxEReDYnJDiwZRJKfWk4PAttcZrTkfefCG5gG7KzRm1mtKMrxgunsp4JQk6A6Vcb99E3cD5RS",
  "key28": "54K8C2uFf2HKaM85cqXgzGznpK5kBBhd9UPrxa1oChj66FueDLJPhY9jHSL9Y4a8XAWhcttbr23d5f2qrHpQX8xA",
  "key29": "4FzLQGrznnEuWrVNhQCHJoTLpRymAe1Uf7GXfHuG7WdnkhHgGPZESLNAi7RkcTW3v6fxwKnPdQd9WiRZ47Jb41jM",
  "key30": "4Q5LoGfDkDa4gTBFT1jst3g8pCAZA7hPeV5HxKdYeaBhnF2EaYCsqZrsH6zE7uhpMX2ZaYa1fZo6ayFdx8CQuBZz",
  "key31": "f3naoWmoXM46UDAm8fwmTxv2XVa6ikCY5JGfBpHKLMuSV3c7w7XoLV9taupGymBHVps6G9bdftC12JfdiW64Dvr",
  "key32": "3pYcE85QszP2NQD2g7pGawFLysJPrsaNopAijuxZ8PT479Ytw1jfHrwKJXVKGSKbRYveYrtaBR3zHFYWMT83qGBb",
  "key33": "4zN11s4kxRMu9YXxrKFYZLEE4ksDmF3Jstcm1fPGVK6BKm1qsxE5roDSRwhXzRreQKiPoZf3JVReXMweFPZ62Vbm",
  "key34": "3vf2fnnJCQtKeooL4M43o55GhXqwBvLKPRdjW47QXocWShR3e2kcqvHnsKkqF3G7ez3VbyfVtGHeSTZcSmTTMPPb",
  "key35": "5Kymn5roUzGpciWbMhPrGsVrpyUaiDrXms4fCxqNtnfsEDTGA5aC4diYCgCLYGFtWyMXuiwWQv4VqPpbWm4My79C",
  "key36": "u47ejt7Q3q74PAQ3yP6G32TMCoMiL6fQa2wcap99jf7MHwf4bGLrwgFJxuhvDn4tDeag4LbMUXrKkcgiKCHaJs4",
  "key37": "fd3zRFQfbFdzURX9uv9FF43LJMz3PL6wuG4ui66hfBVgA4tQZjh2FkgZhF4JQKjKX3LZAxiwkzw9QLhxh2wezyX",
  "key38": "3YzYpbYJkTsd5D37aFSWMkTF73zTpogYwG8vCA8CUEVXn2bxFLZ25vjy9CufBRVazwFcspb9CBq7w6LEwdrTqXBm",
  "key39": "wo8YLYrKFBWcnWoSE1w8L19PFmaZQZBXpYSjhpXcUANMMuYHpCwmPw3MxTePXbizPb1nVVhUkCe33hun1N5Aw3W",
  "key40": "epXHjajknm1sPgisVsoUcyCjgs86zQ9s7izey73fS7kS6Kjp7V8YGXEbvigSZUXXLGCS2vEvkCahYFrPfVKj5fQ"
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
