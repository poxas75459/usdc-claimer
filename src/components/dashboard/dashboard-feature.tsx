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
    "2DWhUA8peJ2uLDQdJaMbacbore88b9v9a3HuaUHmNeLxMtiTxyGxaL8K2527boWJ2BCz8qyFk6WxSbbsE1jDJpMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zc5vkYNJJ55B5Lq3FvRForTYuPJMySbu8rnS8fGzmLHmGan22dW2BtmqXs3LG1AjD316AepnmqZ5pTG7hRY9cFB",
  "key1": "XU28Rn3xrWF2ivMY9ucTv2uw83T9pqEauJ8fFcgwksDj7j4SXJZDVsFVnGaNfz2rxi6bXBUWJeKY5HCkxGRpo6A",
  "key2": "5wJdNZSmSiLwBtKyprU3d6zyxrJD6Db5pz5kUNGUDFzAHkpLh51B64wSidKACgxJ4EgGpG22fLbiSHBCDgu51dTj",
  "key3": "36bbFaGMyEJ9QWUZHW3ephpAZfS3qQYHcgnk6gxvL9NqruL9sPMsYEERjVTqnAnhCMgBib56aKixJeEftZhRchjn",
  "key4": "22ZqodYgAHdwEYujNaxRc5HYr5bo3gqjBTuPuCP2YBXnUgaJesTZeySWEU8A5U2zpe5vQrifscU1CG2PCHdAVju2",
  "key5": "5EXnnv3ze4FaEaZXMnX1m82YzN1oeuYA13UQx4s5dBSMCaTKBMxNbbRNg6kKNjRPq1Ap3mbEfGYS8ezi1s5Pk9v6",
  "key6": "3Pu2yNByD2ptVabyLksKV6FGow89jabt4uM7YXhzmdvpEjxFn2bGdhmt97ebz9nqXbQhFgTkN2rzpje9VAT4pXjY",
  "key7": "5Au1QhKRcUzetjr8V1H8MA5xNuBfiEdspm8V9TrZKDb9dkyUY3EW1WTsaf9jjw9B6ipoiid62QL48hBMVNBZ5sRa",
  "key8": "bjbimJRZXRjzHaZfevTwQmybGBQgfAciZz4VBwT2UwFvbcYRhDqt3Ko4KnmrsmnbjBnaZcPA67ULVEVBc5vveTX",
  "key9": "3ePxzcDcHYhnkDTFNBK1VXYhpg19nHDztT2CY5LooqtNDi7Bc65gKyrWHZjPmkq5azzc9FMmF6CRDFuVi9net8KR",
  "key10": "2bDc1g53CS4kRNNmCKpG6ddBJVCVM7psLBFX5nuFxRfk6ZEg9gSZSkH2gmPRsnsgcTu3WKaPWvYfrqW5tiXdzcRU",
  "key11": "65jS4DJDUDPuQ7ecjFopAxw9x1vs4ttRRJykX6bFMYEczHasCEwrXuNunoQrM2D1WV7ZNiaiK6TiafkfBZJRV4Zg",
  "key12": "J7UUsyqrm5gDdMGGigsYUoLL2aL3U6uPba4EWVRUEY5cSKMgHwe25QbVsfBEwyPDDefgnPsqJkmESfRTh7BixWy",
  "key13": "rKqdMqzK2vwuUaS9GEP15hhxuHxRwoiahqcafrrQYnMJHoLcgfQWpU7XwexUebwjNjVwZRGW9rkvVay6MawoywB",
  "key14": "b4ska4qhSPR4enQeR5e95ZSeF6kfGNiBFVGkPavL2LbjBK2JYUUE8eW15nsRYsikXLb1c82fwLJTGByqc5Xb1bP",
  "key15": "4nb2QBfwXgD9iNwWxUHYXatvqiqnRDbFjBWLx3wyGfiSn8ygbHiFwXqZnFPD7spkYLsCZACatBS2gsJqeqXNd7oM",
  "key16": "53RPAS6mQ686UtgQ9FQHks9v7rmpPGmo5txLZzYQTmAEjoiJBp8nLqnofbEY4NwRCHHVA3gVnKgVazJWDUAksG4a",
  "key17": "2gWogNRVRZGLJiPHuQcehXsnxyPXsJCVisHkQJCVwmMcQK9nnJXkGdHYNqFeRhjzE77wNFypM4gb8mExQPCUMNgU",
  "key18": "5FCtDfwws54BT8LuxeiBr98pCYtXnGxzy9kK8DDVvbWTjLimri7tfVnw4g6UTBuQJjKWMkBiD3y6PgPZeAgJjptN",
  "key19": "3AtSnWS7HkGzLq4LwJmYmBZLLN8B6iwBdPmaYuBWLVxihfiVBUbMjyEcXQKhcc29a9NXibW1EignCw23mFCPtwiQ",
  "key20": "5f8qUVTd4U1a29C8LDaNXudrP189AvbTECnUuzcMfkmGEpK6Z1o3wpGBQvNJyV7fqF4H1aBjs55uHXnGEbJha9LQ",
  "key21": "3G6JMAoPAseXgdUfBM4X5YagqAdK5PSKe7LhxhmKGNNe63uF6JNqRDvcEHLy3YGUKD6U7ZiGt5GqkGJ5CqmLxgJs",
  "key22": "QiqoH6781W9ZV1zQwJpZYx4swHw8tHTjaPHicQRFTVeRLFpukxh29CgBDKPnwVHP4mCGkw93zt3RNFYRYJQ7xdr",
  "key23": "44BDuEdNzKV5hP8nspo4dF1vrQjUpDZyHJY5y4VMimNMkk6L9GUkJMA25jKFvF8AB5f6p79YKDB8wUw3mfzr2sda",
  "key24": "3qJLPuVrE2dja7RS1oRQk1HYRsCvthVYocCMNPcv4ffPuMGAtiFLn9dBqys6wUcvSJisgbPB87j2nXHuiHXQQBDm",
  "key25": "4VXwLAg9UR8CCdLyCNLBk1cwXogrT2wwT9cACRN1PpV4sCTRcTNMiJFQhsJkz9dUAmVdTaksxy6VfPZ4eXFN67EJ",
  "key26": "67P8j79QpmAyTMFtQDRTzXBqT9suVzokibREyPf3MWa7628JSBTSj8N4YqhAAw6kN3e73FC6f4RPsuA9qnfUCb83",
  "key27": "ugk4YX6sgn7DAeWnfeNg9jzAnVe4DatCfdHDuzy47ipvs8Aepth96oLZ3571h7tR5p25mC75iDn5B2PoNEmqz9Z",
  "key28": "3zzwGPq7dczED5sF6Uy3oU8GHd8wFxBFhemqchF261VBKoSS7UYkMvsHS3Mj3zuYfhSxDrbkZsYwSfBZXAP4MYLz",
  "key29": "4h9EqeRejxpQQzEBySpWd9eBBocF28T73NDmdsPPa32qjubz8vbuoeNoTvnDvJQZjLbrfwXEqkrb24VosvGJXRGV",
  "key30": "5UeSEKJUmRNDYuVMM5Ugb9VGN8YhTTX5ZANZhTh1Gm2LedULLsrBMQ8V1om1gVkunA1es4DoaynJThmdqbBT2Qyk",
  "key31": "4Z3EwWo1nSEVYXrPMPDNQNdn9gt65uaRtSmEFCezDRUbWs2uk7WMPmcRCDAfiQRwcu5xdvKcP562iJ6WoZQEkv6s",
  "key32": "2JVJbZrVAYTdQuFT4wFDFNSsXC6KchyoujC2dAd6gyuTe8BQrZxqkTbRRfC34nfBoZGWVGTjHScBUo8nqS4eCHeV",
  "key33": "4BD7SPnr61YY68T9uh7t5U7ZyqPUQZf2yWBGWHficp9fb3yh7rNSbq6eZe3QhwcfARvj4ECcKuoYWnUDoJi6XWqL",
  "key34": "c4sNubFqPemdcGSG1RqHviBhABWdy8tQspZCSkHagbWjHtycXGaiDnYcNF4m1TUDBWzhxMD6HyvuWJJDWH2Es6x",
  "key35": "32JHKEymDq9vdYsPwMmyWVYbXGbxxS5wa3W7TkePZxHy7ccop624kHBTAg5C5qPqjvM44nV3c8YYY2VMNFtx4ijJ",
  "key36": "2dFviAJz1cN74ottfi9ashZiPCcHx1PLVzt7wB9bqzewrLtrgAbv3rQSJkW17xV4MKH67bSTV3Fd2LmTa9t4sDxW",
  "key37": "4ovvqg335XaiNqHjSCT4UkAqCGvMmKnJ8zEvAaZpo72B4GZ1Mc7R7ZAtEEPUt7SxY7wd9g6NtdzythQuKZmi1ba",
  "key38": "4JTCC6NqBRrTagjJAZUUukoTdZdLNcmxXGYnj3PVbci2wdDJiZzhPF3wSHkt3M8py6PXtmEox4z3KhpCFzw9LC2D",
  "key39": "3Z8oxcWvZiUWeSzeLbgQkVn3hehYFVo9vab5YD7rjXNQxmsAXchRnxxhzZ1e26yMhGQ6ymnaWk2B3gAjF9aYKR7D",
  "key40": "5GMMZGdyEJLuTyFe1VtgwRe98v3Nbq12ib2PBNFpeMrFa5xy4QKTPLoLCTLPeJ1pG7zBYuVud2kVnF6P6rjwE2sF",
  "key41": "3ZVUJfG1CTXiMqzLbbXSbtxoGV4EBGcuNrArLGQbU2GWtZ7r9CBXdWcfXn8onydk2JnPcn54RxAMhk2wiSS3kcZr",
  "key42": "5Q3wkue6iCM6anVm92XhdqC57Abn8i82VHQXCS15LnBFNs5quE6bvgHp7sfVxVPxfHLNLKY1ANpZcJ5uTmKyp5qb",
  "key43": "2bJPH82W7Q9nCSCcY1FgjYQPaa2zy9XiZ1eTCdPeZhzxthAPboY2nYrChz2doUcCGEad5pgWHAEAmr9xJ6vTr6XE",
  "key44": "3nXZSr7spBtALUNn162PNS71g12MZaS7hWphZvoLZ7ZXuowaCJpwmduPy7iGpNtn3ZT2Fx6SHMFV8w5ajHb7qGGv",
  "key45": "geqDX8Qd5JAezNg4GKtjptycmfXc3BmyWLN8r23Z2BcztUFi8gS3oaDvvKBhCoWcJXgtsY1WBcKM5wnaao9k4NC",
  "key46": "2wjk3pZJWAzkPYb3fBu4tbf3LgLbo2tnnRip1Skm5HfTpWF99yuyiEpq5y2MUzwvRxEVhJCemZkchU7iaTLRNUTV",
  "key47": "5xywG8wzQVEcpGZpskXTPyB5C7h8fzH1FNKtLX6GawTZDm1HtxfawGqPN27hNum3RT7h73LjENPbK5Mgg88Li4Tk",
  "key48": "4rcPXLgKmnze4WedgXt3ySLWfzay1j2CJgwCHfxGFZs8tV6RFpopiYVjVykKwukvmW9DH48TELpjAZwHExbrirqZ",
  "key49": "2VHHNt35fFoXrMiFhSH9RJkBZZWND8QrJRx3aSk4NXzAiGC3DRQ5tx1hLuvk4QsA3gKNymzytyiM59GsfVGFYCuz"
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
