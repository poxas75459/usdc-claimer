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
    "rsyc4F8bC4sqhDHC1d47DsuA58quXyVcapcFicr9NvwMiHyPKUXRGXxRZ6YhWtxzzhQJxYwvUpiYHHgWC3S3Js1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26k6eJttmiVS7rYPUa5ZqbkGQBoT8ae9xjzpjPzQkA3Wg38b2EfGALvdprEnUQ4K4V5gxp2oiH1EWXLbxNhuuzva",
  "key1": "38zAX4zWfb29H6RUvhEdHYZFPNU9vbd6mywa9fHHvpSx8Gfw3qvnDNCGzUKbVprGs1dWMACypwr1vycECLSRxXgE",
  "key2": "5i4Je7vz4TmQ57XaQbAuMU2eUDhwxhX5GLAeE3BXJhqxzwzaZ4s1fNuj3ZJMuVqoV4cCHYD5paeskfajLkfV9ahj",
  "key3": "5YzXdpX2VNsR7KRHSeCqE5yehqdfdDMxuTZ47RMrLx4wWJkZVgLmfuBViZa2QZwcNZwXcTipwJNPJAre2QNzubfv",
  "key4": "2GcTKbTJCkJbfZzyGQpfWdt4nVdramLtNaceGsR1jh9zFohNRbhufFnKUS5bTLgwgGHzhjFPipgRA8bUz6tVsYqB",
  "key5": "5yvrw7vHDaVqPKndHrHzei3izaDbqvY2jhtxvgSBBXX6964SEVCBpGeWrBmGX6ix2SEzsNRszoUMaK3oitxu8Wmd",
  "key6": "3Y9QdnDdrCNDrgkSCj88b9xWjmv4nNT9q1moi8cRD4cvUJzFCbgsSkgyJxJBShjxDfxiB2LKUKFWggAzoRNNeFCU",
  "key7": "5yQL7jLSFdvPoDbzrvdVkZYLLh1LPt5CU9j8YMzEtNcyfhxMLtscX971LAJAbZ7nf7KhuzDpe1wvALApDx41psBg",
  "key8": "45e8fwev6u4PhatMR2E3w5wimng1srqJ7Jd7fgWq3ZPE1HmRb6S2ZMGhM5ommPjMdhNu9dKhh6Pixxu1Nt9kmw4",
  "key9": "3KNgfoWBBxEaRRTJyb7oFZfM6u6EPsqtPrX32SxGMG5iWcuxdeYy2HSKUHC73swgdczqBhKXVdd6BDr3t1EozGRn",
  "key10": "5VGSnTJ6g4Cc5GrtnjCHeWmNGoeTFtdytTa7XUfPLLrDxmsUdct9Hin2VdR4HkUvXM52oxDvkAXYC33mJQcqHVRX",
  "key11": "2jtheRZLDxPxZiFjJGKcXoacciWQY7M4GiCa3DSAnNxG4ztHGDewdSme2L63pAHqrtFwDvDUTcyTFygmaG3Tmpv5",
  "key12": "4HD3AoLHTksavkZP7dHNMbqJFdZt1B8Uoqs4iYJGyqHHdT2pPApoea6KZobyEC8sfrkCgxC4sKPNrEiW49gWYm3B",
  "key13": "2p535VXuorJoLsVV9ACdPwWMgD2B7ZBMwhKFsgnFwo8cxVRxsyrJehT8TzHiu9RYFKuhVVNbpAuhSape444wessa",
  "key14": "4cCXKK1KsbVEcBzHYzJndkU6QYCZk4yLKN9cs6XUPbWL6pQw3jJZ5i5U8kNFrTuJHdV92WDReb53F8vjyVzNDm7a",
  "key15": "jFzFpUXoVSBnrMVCme73yfCdgrUx1vT9qpU5LQ341WTFv2riv3BgjDiau7aBarjj8zk6qYfMAphWr2ysE9bci63",
  "key16": "5rvoTFHWoa6cQBNay4AppcP2p1ScyLY3xQ4TFBdnDcyMw7eevFguMKTxdgqz8TFEFvngyUmHv3pKD5JY7TEqF8ya",
  "key17": "qS7nsg9UfHs5w5NRf7sLcZQ7hAud328xAmG37eEx3LBea6tBpksenPRFMQskXrDzJrmCkiXgUGDBrJHaLLA8tXr",
  "key18": "3tHKh5JfaYAG6EP6CTK2sxVU4mv4QM9D9DdSmA8uUMaVc8Fia5WFh6o3YeBM4F35xr28gXXcDTbCkrWHfPZjwJEh",
  "key19": "xMeLzgzsVhTcmmPnWUWwsMKrzSofE6CPz7JMUzSHAtzsftsnXE33pZCaAxHxvKfeCEMMRMf7ZbWZTc6VePuRtHP",
  "key20": "2K1BtHmVRCY51FFi1zKhHMEZkARhoD24VLVYouMAn4WbYuMAP8qfB7gY3r5pQV9duynDS4pEpjKZueNvHTKufUu2",
  "key21": "3YSV6iiQAY3NXdXbH8yFjNAitEsSjqitHzTttQrESu8JbCnCiW2A5fceLZjMS2WDcYoffy44uZirzHesTn2zLRFa",
  "key22": "4CEiCZ95G32uuJEXaTQ9D5iVXx5vpAZMEucFWZmgbRFAF5WhGDMaV1yU3Z1N3pRMXDjgJxYrfy4gph4R7Dk412RR",
  "key23": "3nohYFqcEMucYu8Hw6VqwFdEQextP5odj22PsSV6rKtW6D4E3xbowWBAJc3uaqy493FU8kTXhzHoTxAB8iuer9Yi",
  "key24": "5w4bQYuqjyFnXxGdqhHjWv8RbDhCUquY48P5mt1mCZ7kiUwgdQyScdDSghXmYEiLExqh7ETAcxdjyebgy9KJV9Wv",
  "key25": "2Mrf8qmMKNLyFbiAUZydpnUK5nE5C6eeT31WsyDSRwCAUYp2YWTcGj8F4GyosnAsRRBJBUHGqeRCmDFqJ9xkzTq8",
  "key26": "EHxPTmWbPAAtEhvM16B5bekkSffPShVsCCZsgdbR4mrFBYyVZEVc1kT1jBPXbcckzyjiAHjcWjcXEKtkpmEmMdV",
  "key27": "jC7kwCeFxsXqQy3ypxmBfQXmoFn2WzMwDdusgvZN6WKxsJA9v8FGazw5foudLwR4QrGRfxy7FrCnKZi5JfWYV3Z",
  "key28": "3yD6xWqmVPy8s4o3FTwpBbTJweULdJ6GxoGk61xFCxgtGFDmPT9TQk9u9eEFpuK4kQ7DdLSwvqhVYrZX1EbtrWri",
  "key29": "Trx9TyahAZvtjw4sWWRavprVmYKVDkAXroZBPaUcnnMUVGV4ihe72KkSgre2FA74MeFSjZaKMTpmiBRJ1QpzUNZ",
  "key30": "1gj6xGHgQU3EbEtbc97okfiXotDZigsooMTZnXgWcBmaacBXhcrcjTieftmBtF4h5WyHoedmv5c81CQDUS4S6vN",
  "key31": "4npog1r9L17WeK9wSMhBrcr99nfZ9ha53nsCVKe5CvpjYQ464UPu5Az5NgSDyPF1kbzNmfwK3mmLkQhJeXpqqDMe",
  "key32": "3dXBGPeLekXy6NtZ9JP7GRxVG3UT5jw1cbyMRj8tzTT5C1csbh92NuoDaRzvbrnC31Z1AL5omvoh6kXEZNBqxVYq",
  "key33": "2GVKoMuV2MhbYbV3tcMY1RKYskmqqrnPPVnj46DyvhPBLm89dBnNqA4f5j7qyiRShdoYBR4bSZdnfNwkbLyZB6hb",
  "key34": "3biGwmhDnNhdtSWBo7t6iapzkrXiR4uN4cswm5zeKYsMiWgNnkJ5j4MrfyDXKVNKsQynBAZ11tsHvKCgFc74LX5G",
  "key35": "3C6PyaJPZZXgnhS4XeLnS8FPRz4GtTvTf5SnHENGR8YUF7QCuwMnieamAvYfH1wMXYSNiMvwHhN5FvubehwL4JR3",
  "key36": "2xJZp8Tztb1QCdCQxspDZAPiFcFd5rJ8WcCr9uHqniq8crG2dCBv6KVxcGCTcfi9LvpRiiA2CFjtaPgzBoiF3PEt",
  "key37": "uGpy11yRTvGRH9EcjZJAAYQp9cYRLjqXqK6AKP8ubvVu5czBdd9URV2GCPbYeRHoS7FonwzdtMv4NJarbwKMw2U",
  "key38": "5h6kNomH1rnkyNey9Gxqr9UxPv99n5DYeeFP7oKpJCwE2TrCzgWzPSRaW58EK3Cf1akcWuFAheWxuDAWwhV1kQrn",
  "key39": "4kmWDqt17Hwj8qZyuHM9YVwKqSwYUHRMdoPCSaeuDYYCepicM3d9GufYWVK7vAhGGWgeVkNxMv5xp1YMHd2TVbKE",
  "key40": "2z5ADouxKC9fU3xfyh7XwVByR4csdbG4NkdaJMasJq82yxjdZKyBmdEgmydooxP3yjGZkS4k2MyJvUUuyyYQ82tV",
  "key41": "4izs4vUEzTT5CQ6y9QQUk52HTsL8QZzKRwk6vaZH9tVW98qBQAgRfg85jtSykt2ZwAJQ6wsxxPzZaYHhNgmrqbgu",
  "key42": "4C6836aSoA2ztKrP8UUWkKfjDgNYjhDA6ndhgeX4cSrHy3PQBhg6zundxRgLzLFVeSd629g6vv9mpxLfFvVj7bkn",
  "key43": "38gNXTWvZnUkPETUDdg3JFpkaVJdH7EqUa8msvore5exAtN8KM2wD3GRMVvbnodQXdPZpif9PWb7mnU4z7N5Rj9Z",
  "key44": "45bk3aruoV37rf9auAbQ7hjyeMfHq47wuQY4b3xwKG3NyRRKGqYBctbLbiS52yR19YRguo7zWbGabDrZCSEPwpg4",
  "key45": "2S6wWGbb744khZnw9cScSupvGKH97tQzXwnKcoKtnyGdqtZXMXSchGpsGUJ9MDTUvEZo5rmg82HLkvCCVzp8Tmyp",
  "key46": "2xAnmdpCRJ3AS25NvthtzvgRH1qTBH8iUWXoTXkxwasPmkxFkdPAphqmW2uSHSuaip23W8289iAt3UDcS6zAgsoa",
  "key47": "5o2XKZ6T1xY5hogTmn8t3PL4tzdj1scGkVjqh89U9R3dmk6SZ5dCDbyXMVMpyZzC6dvamEFFH8ewBthrenpvgHfh"
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
