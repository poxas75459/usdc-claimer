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
    "3AS72ccPgTQ3m8EsdG6AmTkzK3ykJT3ZDbtze87iVa1E7BrojDhCZoR9srGdND1mp4HmruUYz2EnvCsq3pUrnx6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wn6kU488VUvBCvJodYK7QxfmPNHPQyL9JEvBY8bVR9QoJsJrfudJ3Rvmbd4aJddDgSvLdyQgCE1wFqvLPAXzFPL",
  "key1": "55es8Hd6pAPDLLhovCDU8MDKsbmYZ7e8fX9Jfj65wgYGYXbM67KqfJhsn56b5PCwVaT4E4jrfTDfB934L9oZDE7h",
  "key2": "3DPkFSqdPJ8ugKBqF6FHwpkTBMBAjh243wkTkc7mZhZGjDAPw1aAkon9v1qVwD893HTjfPMyaZcWVMWvajxHKwbM",
  "key3": "4yJT831Gv2ayaA6gYqMFWqGsJzHWSG2yJwnQCCeweJk81LnPWe83hostVXCs6QxYBiGWmZ42Z4osHUL9tjbqFVk7",
  "key4": "2sfJxoMNnCnnU8nJx8Z3RjBSAuKmx79mRcPN2mmxWQ4uVaNAnBS7BpL4vUimBeJmkM2REngMtPAnUMFSX1ERyLhK",
  "key5": "4iTTQfcGbeAnVZ1VP2PTdj4wtfEtA1Ybm6pyRezPpjjYKYEBhmtEezRSx6PFPAks8y7jW24duioUX6yEUmvkCJsW",
  "key6": "32SwW8iTGWDaweaxNDLLxBikeiLz3BSGWSh4UB9C2TgMS67u9hE32hvZzdrmM94uE9Ye5jkg8aZ5S21anmzzKE9b",
  "key7": "tcv1A3e21bHtSGQcc8XdAiYt3e7rKMhuQKjQ54ikViUt3bHH6BLdkvLvzdBhhnaRYLuMbQ6PSmXUtSV9YLYoBDP",
  "key8": "2nNawRfNMtkLA4gPWpHoVAN6KyHjioLR4EvxSaRN1yuTrkrC5kTPv8YDkp19KM85EwgJ8YpE32cZZDP2KdWavJRM",
  "key9": "FyqPsAGDiWTvY97e57WTBdo8ocKDTcqBEh6LfDyUZsTw9tHPKWs22LfY6iayosQtW4Q81mBhsAXxT7MrGXXMhaD",
  "key10": "49Db76nMTCS46gNae1w3GvgkQ693w1pqCARKPTE38ECsU5ExxP4LVoWmpmqQVXS8R9m5b2RW4j71BPDZokbXHra",
  "key11": "5hmR7j56hi7FDXUMDupGADPnwcRHWiJr1fmkyN19KZhizmKe46cKVSnqFXR2afkXT1U8XvxaXhAYB1h9HhoLqqzD",
  "key12": "4524xnJhoiqCq2DF57EBkDKiXzbeUT6zgeXsTvWKSnbaXidj9Bu6EUh3iToQrTQoZCC1XFmDiE1GeUSWq4LKAeNq",
  "key13": "2uMgaqKiiKtJ3KJ1xSgtUHz6H8r3TLGcvEvAFteH2XQKWjuH5BmZzZ3ZxbawuXpNqdosc13FGjSDL8PGvDU5EaJ3",
  "key14": "57HH9brgHDx4GGaiaiTxFCe4iJAowpRuf36SJwfdPqHn7S6ec8vnr2SEwgZVTRXzirNZcNTfUfo3cfwobkQ8oFaZ",
  "key15": "8ogQaDB6driZCsPMYQtPGsfZq6ukPRib3EZaXLjJV1M1EUuDbhWLhB3uVfgwvZvrAamJ4N4GFY4hJBxJ63yb66b",
  "key16": "4bFKwi11gBDsfBQuCzi6etJdM4YRTCPrPqBTymeeHYG46XhXuXvT3Xyg2bMDnotg1yoHQ7HCDVGAboQipAV3yuTv",
  "key17": "2g4nLGCApZuE1LCTnAbKDhqfoNEPBanKTMPPTgSJgmHaDtdhZdAxUWFfuPfhFK8yPrCVCjLXYHhVmMZh1i566ja9",
  "key18": "S31nFw2hZNykJ2DxNygbmAuiiasN4TAWRvEJfoWcrgjvEjPFZ5uQxDX6TG1khqApNC1cGiopZhGpjEmegfjxwQp",
  "key19": "5Ktk3nsUqAGduU8SuE3zUfkrhZ1M9SGeBgTee4W2Fge6ZjtYBLhywWsEnEvkZvawbrcWpSNEPQbxjEZAqVMdiB9",
  "key20": "5mnSoUhMNFvtrqF5NM5cWjUpb8hqJgYmwjJeyAd3Vga3ceDB8tW7RdZ6qRRUrJm93rBrBJMPRGFKfTVirsD795Ex",
  "key21": "53xxfVqdHiuMsup1s3QLhHRY1ndz7JS8MWqQ72XCMAqzuDQznsJ2XQ4X63RoJQnrV6mvK55fn6LiJK96qG4Cc7Nv",
  "key22": "3a8Y866Q47jJJ2iiLiC6MUfMW2LH7rFuDN13J2DiZN4wqeFDKL1CVbAwM3qFDhNjnTa6qtzehuVVqoHusK4f3dfV",
  "key23": "4oMV5Jtpo23xN5XeJxxkvc78aQRJ7tUQ8HUJKfmARmeukDzRwqn5kYPihCLbNYHvzbZYTbZVvTesCCpEcVN6Aqet",
  "key24": "2oE8csYm6XL1F2Q5hhw9w8ZvZNvt5D7dqnnJkp1ivQikLHaJfLR3trkJB5UjotMxmWN4jcB9mKPvGmBYWh1V5Pmh",
  "key25": "5XEXnT3kWGmgc29PkvsR5nSqXKCE8eTcRoQpgPaRknzrWoP5gsrd79p4j47mWje5RGgt2vhrZqTG6a6FHkZHPb9j",
  "key26": "2wRSdVvTrxhQDwJkEhKQS7EU3bUpgT6JbrhTmZc2Sj84Af1R1SiU8uV9pFBHRhMtPQLDdQLsr3nA6AKMq6EmQeNu",
  "key27": "PAn6E9semPNLwctdGsgSJRD9Uk2LLZKbbXHmrn8LqfnmUDz2VocfsQXcNYNes2X7NpGybjVUVRSievFeM1sMZKK",
  "key28": "2Dwe7MgFJ94ME2bRUYze2kgJYBQH44tNa9Jg3eGZH3AxSRJ21Mvp8Ey1JRpTCT2sKM9BdqdPrSw66o4tZGFJsrcJ",
  "key29": "2WXtszEWCDwmysTDg2jcS1fBPCfRV94KtKBRBXkztBoimihcYUBnkYUX9zpn2bJw81qbQXx85SPNMwTU1Rr42ds",
  "key30": "5bBxjhtYsRo6wCfcqWcwfaVvBFGTdP9BQ8C2bdfU3Nmz7nEm7opDdeMi36XnG1ZFak2szHzGHFbTKY2DvdVYBrSR",
  "key31": "3rWgfjoVmtwBKHqdPyVqzbH1FG2b3m8F8miHrQ9nMCGLrt88EQCg23XUHgpbhRptzRDzXxWDx7fCW6omwXfpgaGH",
  "key32": "4K33E2WFbptJ6GKKqBaPnemuWEeUi34UAZykPe7fWDt9X5CsdXTVQ2t9PAntz4cnN4z6GShdzRWs2WJBCAVrgDNd",
  "key33": "2MoJQHMEqtwaWfr2gCsBW84usdBKaE9r8QEUWtP2wnLwBZf1H7qwTTrRQK5hnBKGn6Bvi4PNULYVyPBtN6XnqngJ",
  "key34": "38Uo2Z5y8DFmmRbtr5Vm6LScQZSg3eBcLogdgk8RhHaYo38QzfA89SN95av6BgWk4q2xs8ZVp5rqtcxyqp9YwQ3w",
  "key35": "67LGHn5AXjF484BCxjM9W3imm3zoR2Zhiy5B4HabN15UA3ZjVWjR7FhN96wH62EZCGhSsReZSPT2f7bbLJtsy2cZ",
  "key36": "29mG5F2Jdt84uQNu7KMKAgexSyE5edTMYUkv1qsofggRzruMkGaP1h6THKcejQpVEFEvRa8dBsbkWmv6H1FyqBN5",
  "key37": "3dLXzWosPaRjMm3aftyjzesTRgCYTBzeJ6KFtQET37b2ryGH9R9etuwLqwajetCpLZWBSoxtVvxqRmsnvbdvg2iK",
  "key38": "2AYA1aFTArFPj2SiP8tW7Xf6z3Qf9t4hSoBxvRxAXMa48fnvjS8U32TBbpS8VJxEAzXRSSKDRvYuL8o2heR97J33",
  "key39": "JLuAPVy8FYYn4gfu2TCMZbzWJ29UUdpPyRkBtEx9UoKaPCyZaNL4dLp4teDfMFJpgjyFe2n2AQSSuF6tN3LWUKQ",
  "key40": "3De9Tr6FbANuK7fV2m3vPGAb6ctLQmXogBuKyVXrRASnbv9qGs5z1SehiRtgL9gbbNYG5XSp71Q4phmnFPC1gBjS",
  "key41": "3W9MHQBC3gnhxR6cJxEiYDxq4uvg2E88YsLWq1F4b2xsRhDDA8xrp2tnsST6KXrzpvU6TZZt7ZCMx4tguQXPQozF",
  "key42": "5QirGkDshWfQpNTpJyxoJjpyBFjqdEJJ1914HB1Fdx6vKdFqxcpk5aEFafYGfSBnpkcErkTHYdz4KncQGJWvdGV3",
  "key43": "2SEED1kL9LCyHucXSduAr662vEmQYP2qSW5DXaf8b3jzrTsj4FrQsT5YmQpWk2rX9FPzis7PtxsfYStoHSk4ngXo"
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
