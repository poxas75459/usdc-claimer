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
    "293RyFa7dv74T7XmjWeXtzYnVqyDPsG1aDZWsBQ9nSQMa5yCu5kkr3Csuoy2RUdV69SPTX2WtdxSrPtn4zVuhuzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uxvb58L9Sn1REWucncHiS9M15L5oBGgAdHAMvo5L7NvwENHLsJrNNzhMoxc4y5sKrGJ2Se4cnMV3zf2DwNGna5y",
  "key1": "2QKDPEcdUq5jkxU5yaiw8EAuq44jdSck2uDCFKGdYQcjZCaVSgceUicH4cQka1uH46t1wiLapxd5ZgGB3RtL9yG8",
  "key2": "3fkts2M4usdGtMqv3CrfjZ3wSeZSjNiFeS9p2WYu41nGMYbS2XWkJrw3t5HB3ArUNMtJ4qcL4Aykj3guJaA8ykV3",
  "key3": "2XyYpJpFwfe3wZeduGhJxeDnxScFFZs61nS7fYBYcgxZ4DmR8R2ELnof3CEwazfeAvaz2GJKgYRW91jrbgUapyZf",
  "key4": "5o83jdSLzYGu89xGV32rmx2acTzLWJuS8xziUAapFjazPQHepVJx48EVN2JKwvUATejfctBBHH6Dmtnmcya8JYb2",
  "key5": "5CHmz4cpAEJcHdzyif8hE3k6ph1ZWxbERmmD7eE3csNztybpDH2bQ3LE27bWnBYDFv6px87J2NQKDrV61WB9esXi",
  "key6": "36SuUc75skNmz1LauzrQr8pk1mxJhNndEGiVwFWMTf5WSy8ArHVqJnrtiAiwnna9KUTPTp5QC1YvPvK9RQHHMCJ1",
  "key7": "4GCZVupfJt8WVsxcdxKk6dLZCrKDrYPxTxvUsAJF6nKhdWowaMBLdJQX4A81jDLwo81B3kNWQhj44bUVTCbWMXjX",
  "key8": "hZhrEvyZvJh51hX1e55bixJnjW378gVdrF6FchfTyxUBigJhns6Eufcg8uAxc7sEFY3tGPb96YZPbhHRKyXt75T",
  "key9": "5YKewdDYmbDw9SyFi7XkXobdbjNEnwCkvy6AtSpcyUtqPPFGocQNgJQ95E8hNkWUH2WaL76H3dp4aTwj6VKfyeTE",
  "key10": "W1BJE4PRUFxXPWBrkSSF1hqQvNFroCrYKnHitrRBRRaNrkqdrkTiK1hBhZnkoyHiDmQX7AT2nZb3nJZjGNfabf1",
  "key11": "3LecZ3XiaRxLGFVkCt8CCcBju4XN3AfFUhzc7nUAc31Viz9xnppybtwUbRgmDP6udAnJNFbcdjN6ucdsEUAEReHG",
  "key12": "4ZnUAuUmv6wuZxTxfaihH3696wRBYsv3H8oP14KMsLf6wT8RGtcHsRCCoDf2YgdH4D2i5EQx5eBBf8NsGBHkj4Q2",
  "key13": "2bUeYK6X4cpDgT9U5DBgR5qc6mzXbvenHdrbVjkRRXXevpVdwkXjEwjaJBxdzfJ4fz9zYVZNg86b1GWmP1agubD7",
  "key14": "d1WWLURiZ6VYPSXMr3L9qLnm82N62piNN74tsVjwW6m33KUrmfhPPYVL3m2zr2EgSRNpbZHZ8YxjFDdK78ZuRiL",
  "key15": "JhRkgPX9rTUKdgVwWBAG2DohGvCZimxvpJSb8zJQEH2yfuMqhvKj6KXbZCogqyt7kMvNpqFNRjrqGcoB4spB26q",
  "key16": "axdtnHJedKvPoqgfTavcdWuAdXoT96UWGkf9YcgcD4yHfpBjV6oQUei1tUEn9Pf8HCxNNa4dxhGqWh24omjG9Rm",
  "key17": "5pC5Pi1mowHHs3ySn9AEcA84yokfQ2WcrxQnccyinuuzEVKCfJ99i1yJ6MpSwPvo3kV8LyDgPGqRF3fuvt17r5N9",
  "key18": "47TUTpJHYuBBBrxKRoMtyBGNqJGSisZKtcoZNXAGeoj46cBQ5sL3K9rmie8qss5u5ZTMFV2o1aLoK1QdaDzZzAmd",
  "key19": "3HUP7Wfb6kaMVo6hqRkag8ensZBRMMw2uVeba2WjpskRpJ2Wjs6XVauvenQmE8Snv4Rhuu9sHAnqRc2heh23ScUH",
  "key20": "4aFcHpLh5kjoBZQaoDGqjGyjQXUhaQhqZpECBzS4MQfRkWwXbWHn43KjXRHpFGKaL4cUubYDsPGidDibXL3pEgPL",
  "key21": "2rGZZ1A4qCc5dNA9a4mg3bKdA5Fn2z8QNPYrYkQdrQDEVhyycCmCGZ1LxTh2ELpD1tN5iFgafC6mUCiT9ssqmRV7",
  "key22": "65T2CD553reC8Xzkw1aAVevbw3HQPnDXcqpkRje1cv7UdRzKL7dezWKbSRfuWZfrCvCrqNknsgLkwr9ZGXY2Hj7Q",
  "key23": "jfYVduiTNNTyF6C23t9So7rW3rxakeMekZfSmfK6aHMnXsVkoEiEdojMwbLJyWbGmDcJ9PqjQqNbaKfbj3a8ySo",
  "key24": "2yGGQJ4XA6RVtBfaKKFJ6iThzjgxUpQrPQ6PRrZ2136VrXJaMGR7YmVCGWCKJz8q7H9r6sKTsp9wc4dnQg5GJqEe",
  "key25": "3DBcctpzqpuZJJRLTTHXnCHuRsJTPrwt9Qg9admdtdCTZU2iaDd9y2KjSs67jTyiN2Cq4BtCKSMAbjpjxydqA8t",
  "key26": "HmRCRLhDxCZfuXBka1anByCj3HwgL5t8YyhVZUrFAVMRcuVpEdmcjJdp4tZVyMPAMbJFznxm4LeiZo8y5DhhsUh",
  "key27": "3Fz3dT3meJ9uEEbBLFdyKfdhPnQMLVhBGYKJuNm2R4Q8FiSTsYbp7BsZoJnMqErYriNde2gxHJAqvpJ1B3r8GXSS",
  "key28": "3a154eD8FVR3rewzmPR2SR9ZakeHoRt3Nv2zFUbdbUdDSUMM2WdxjY27AMVttrHuyUhhy2Tkr8ewbtnVEWvjDpHh",
  "key29": "61x1HasTzN1Bi9QEN2TuqF6RRCQpvhZoKKYw2FDVGRb22YrEBjA53HMScYHm8pXiReqUSmQjb27D2bwTuJes8vjZ",
  "key30": "bYKrHfojFF2xwsBDWiyCwcGod7qgscMDspRk9SW4h4VRpqriwa2VUUV8EjKyphAiDGwvbsiXwHHPDeept1z5Nxi",
  "key31": "GngEKUfXCkwJroWE9oYdxrPXURkQfFWpZtFRUJXYNycbQ47NsTtzZaNfBro17hUgpPjRoujgwwxxs5PDNYQBLyG",
  "key32": "2axSbUBpNFRzJYWxse5uougoJNJroJ99q7r2x3gT771UNCaNb5oFompKiQFUKDd1dp2yr64Z4UvjXjjU6u4LSTxc"
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
