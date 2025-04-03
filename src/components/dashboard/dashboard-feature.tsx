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
    "5oGrHPuCefgoJANfPX59k1H7UDSSXL2cKM4S8Do53nT4kVwgUPMTHo5UrzFpCQwqfWQKAy26PRWPApL93GePd1fL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rkY35K7swmFSh8whiV71Z3doeStwxM6J6ydAKyQ3hWPreJKasBJ9rFnWtB61wvi58CCCjRvenEt72kd4SAUV74A",
  "key1": "MB1w7fckDRNxZBZMWVk9azNXqYaHbC8etb8KVZUYYzZd25puNZxyvm2qc3zCaR4fCmZdTPNvZqegDpqASEzqUbr",
  "key2": "3uhM86Fgwg1r1AvmFZAQpoVkBsjmwwQpn6WgafREBQVebFkw8aSiwXhCXiyCwB2ZWPEsq1NEGZTDi9zVmu6RREg4",
  "key3": "64a5nrUWnQeRaAoA4mXGUztEZQiZa3Z9Wi5FDrUDMvvoMoGJjNEKYJY6wxhEZ7zHV7TLttd9vKY9y2hfKdpKcDZz",
  "key4": "319YVrwqnaYQExSePTNuxfDksGd1Te4Beti5hmt7MEwjxEFfHx8ifDZbEMRTSdiAmzKueVfF8d5ZWJxVLwunfoKk",
  "key5": "5qnmjr8cCy1XtMz6q2F8kmkyezJUNYWvadircdRYWRsBECC9EQQP28gv8zQGhtf1Thy6L3aF4otCi7EfN8jEcaMe",
  "key6": "3zLSr8UL4eWNyqsijDbY6u8n2DkdceboR7125ABvoFaMpc7FM7Z7ajx67snyuSdcc4PJo3E8ntSAbUEHatTdbqu",
  "key7": "5yeeWGVo4xoUzFJ2iUsWQvLVqhpWqwzSv7LcQGEv71puFJS8A8iwerV7anvDFRkm5MhA6y4p19oThRt4736t2k8z",
  "key8": "2aeiN3FDmo62S9S9kThLBS6AaEjtof7SBfsSq8mfXRcT5PM4cUxPN2GXHDsc48d3KuH3mXPhnY9UtsrGVvC3Hk4C",
  "key9": "episgEfhefHS2ZbmixPu4DaUxdmUA2HLFqMLiSJg48MR6MrCYmUTZwcPsi1XKBT4WDm5kE4yuwpS6Csm3rrLPyK",
  "key10": "2HJxNc3sVPCk6gZeiroFsqfjvkkkmEtxXkWpnqky2pZNKLVgEAUM7SH9hJAhdzXC2eDDokKxBk3t9DYpBv26BzM",
  "key11": "5c5qtZmSCi1KG8mG3uPSuRywrHHN74Q7yYARMvPkBeiGD6wUMiPbH25Mch3wRvmqJxDmUJWsZqGRopTgkQsvDBfc",
  "key12": "3cdg8WQHMsvySudcVL3K7fybhTFqNCNvUkUY732Qfo71rKi8syLSTFN7N1HMmtFawQB9wSBwBXAg749YYoBFCMgT",
  "key13": "HM1D7UJ1jjGcpCTT5zWZvG2ECkNbhdAKegh4zA4kXtNXNCc16owGcLnyVpWVYkY82pV2fZJHWfaB9uDwECnJqYN",
  "key14": "5rmnQfo1enfUnWdXCaLRFbMFYLmHXAbFqsK1SFxMws8cST5PF1dSYdi5NytCcZrWqZUdjNPjJjpZaFiBzNTH47ks",
  "key15": "4P4DT9aJwayF3TU2gEe6FGeeBzp3oNmm7Nns2pTYQUgquw9ZeoZYGhEaG3MDaL6NazJkg2fHK2kKVibYGcT43Ezp",
  "key16": "2eVUeMkUyNY4FqtTbSZ1WzxogViZD6jNGTDQym5EenRC3XjS1EhWXZxVqkzCzzirfXDm79iJi1gE8ZKEq85PVXCE",
  "key17": "5USCWo3vGzWBhJVHkXtwjYZNq4SCt6JsETVUmvpBhNQDViAXKeFVcAwQaLBHho4dANPh6YurNsz48D3D2rkpV4W",
  "key18": "4TL9gRTKWA4uBTgFnbrs2Qk8oKRL7Cj2h3QpTt2RgqZNzbQLQk6V8jiVLqwwvukCKHPoawgwhd68EbNc92rvL1yu",
  "key19": "4T2SPszSxWZJV3CGuWxQq3se68R5V8BxyELzBhCW6uvTVSrGKySiH7H1rPQaWidrvVtNXi1ibWDEFNe3sUfeD4e4",
  "key20": "19r9XhQGrMKMQxW93n6amPeSc7MZnGegyHQGydTunS2RquDEqMbTLPL95MMP9ea7M9GgEw5vUQDNdVn3KmfFPZu",
  "key21": "g3n7HsEFaJds8ceSSCHYyXJdRjBjft4LKsu6CUXF4PvcysQ1T66RqxdS56QK4W1YTAtJm35vzNjWrMw5mHLhHpU",
  "key22": "4Ln31kmX52AVnkD2KBMnoqnxcf8uQ1cnCxw1tXNyVzw9LUa3Hdecnh3vrc7niW7DUEMDDZf6LcQ6FQgNh9uAcbW5",
  "key23": "2EjkRmgKhZf7a2rvL94roCUe2R7EkSCNNVmxtmPG8mrRxmNY43u2Dq9KGcMa2mp3FGHkEkSuFeSEczSEZFzGua7F",
  "key24": "9s7NkotTck7Bc6QzDnfmPMSk1k1kfRA1AZzECEfKRUm1kfHHp449wUdBE4jTUsahizP8r1yM6JAjADdP9EDy1KU",
  "key25": "53pN7KPNfPT36gvYY4DcCZwUSEepHkLp19NGkco83zXJfdVmHvXiwBxGyjCAVB7uB3pJZZWYAEdGU9gnRitDJw5E",
  "key26": "5Fx1eYpczGAX3XDx2ejDhgBkha7bKKSRD7C6ji54LrpeSyFQA7G7kqvzZjMxCC8xba3xDUP7MLb3wdarvD3G2jMK",
  "key27": "3FxkNtDvwQj9Txi7bTa6TSJqyttAtHZv8Rc2aUy7iYce5zzjyDrz4LcBzvy49juH7PZ37aFNSkGDJFxuPkv7Qp2h",
  "key28": "TQ5T1URDoaPEwcNuLBnURhJwdWTYU8ZVKAEGAvrX84vvvop1zfYHgMixcgFrvWJHxupwfFR5ByNGKbNm5FiPhqx",
  "key29": "3VhX7MeXrT7PLev8tePtEaZcAMnPTZnFCnm7PLvCxY5jrMCRoahEtQfAt7XjtMavZHHfg78DuTHzVBqBY16xsqMk",
  "key30": "5wkUTxgtPBdbGbwU6pjbb8XMEmTxySBTCDKWGHbhKKZcfh4NcepwSaRUPdcPa4TLrabeJSdv413ddfjgUh7PpJYL",
  "key31": "3wsHXkbScCJi7gNeYH9q3rMCP7EHdoUR9Ew8WDeuiDhUtCE44hWd2dS6ZQHBn45i8vmt5gHefnyBJnRQhY4v4nrZ",
  "key32": "3wLtiYNdWDehsKek7Pcosi4vFMpL7D1iM3LQ63r83ZVQ269innzRC5jS2XPekN2QUD9GEVYzoSy3r9mFYVZwGURT",
  "key33": "4cxqsFhfZSzpP3ZQV3EmKmFaAbSriTJwXQkzPiExwZsSDVyaNJijeBSXUTxGhdz6NeKw2eHTam3F85Ko7PNyQxhu",
  "key34": "Bv1SNWWypM1nVCGG3K7jtnDUUUJqgiLWKmuisDShTXQZoLkrYjwtm8F9AHdRrfmhQMPPGBw8xoSBrU4qsgaxQKR"
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
