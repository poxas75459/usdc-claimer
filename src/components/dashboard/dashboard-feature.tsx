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
    "2YiFUQ6FXrMUbQakjWxxU4g75ADKreLYMcR9NGd9KgULbbGaUJgM75pUVYqFqz3FuXMg2UaTVqUU2dNM2JKJkDxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AVFaHCPgVQBAJHw4qiyFX6HmFtfPDKwBLuJQwJsNx8GKNRRBGn6w74RNjmH4HFWUZQ8FnGzjwvBvpykW7TRcSVZ",
  "key1": "3DR9bK7CDASAjcigxr1Ybz2FMoiAYvxbE5zgRN1qquhKBuW9bDPRw81FN36JrsT4M876URM9YuK93uwMCVMoazNE",
  "key2": "3iUwu9k1a3m2XRbRraqNM1mqGHZkG3mFfv3sB65Cnsby6nivXLPQDgjUmeLhTXCUuhNUY2KTqURyNvmkPstpH7nj",
  "key3": "28Wd2Y2CT6kMPeaGVF2kxhtdNSAMWf9BAUbAJbAodQ3TPw5Sns5DGpud5jt2KcwpaHdTLN8Y8t35kzdHuP1tfDTK",
  "key4": "3tiUfU2Cmx2brL32jW9eFjo7RRgVYDaG1rkUUfkscwqZysTy8Q2P9GHsFs5ohEK89kL94nGhHhUPFyFXyDZF1QwN",
  "key5": "4UaNsQ9LuKewanfhyFjQVkMXcNtLQxSxJRd3FHiKQ9rVmTDJnn5G8osm44MpAPXBHpkt3Q2E94ZSDYDHocCXrsv",
  "key6": "4YjZ6XzZUuYyxurNbVspiVMgdPu2vGaKGzxzJgk5YQAw25big3tu4Lwb4Pp1oyBtYKPMCjDrX8KNgqBX5skFGqiN",
  "key7": "LHiAvqwErzFPweyoPFnreVnZXhkk86dLZNHfFAKGbziawyCtBCRpcTATnzUwvzHEvgUeU32JsB5rJYgrDBXETEY",
  "key8": "3WMxJRDUzAtU9WHEuCPzjGgNhiXc4rhNa2Qjg2fDxz6TQ1cwJrU31Y9fjZLxWGQPEi8zhUiKaLHPiCuzdZToH1mM",
  "key9": "37Rorra2wtBts12rrZchH3qnaVr8fAcPChjVYD35UE1pWqZCUNDV2S833qkoVPGHvYdrQvcmZpRmHWJ569jjx8TV",
  "key10": "2RQx1Q5em5DUcwg2B4Ehz2kqJXVC22hGw2yzUoPysPcW5vLbLnrzh69c9dZ7vzZFx2f9f14Gc9Sz6LiNLSy1vfFe",
  "key11": "2eRVNibnsMNHRb1B1sj1DvCAcZ6fjTy3afFo4yVXRTBWmMz1FcQpCqHKrakU1AkdiNyGWjj14VM5U1XtaZtSc8bf",
  "key12": "3NKr9K5RGkD5zDPCnGWChF1TotqCSoeD5wNTYMcuVMPBSXVtHtaGdnsVffnSJZjnCxk79BcS97s2rY6nvyH3ck4H",
  "key13": "42A6m2kFUdtVj5MgK3ZxMqYrXhgvroKhYzfmfhcMaeTZ7g3JYXDQjacgB9QWQXZVBNpRqDxdYfvZZxWPfECLMaKL",
  "key14": "47CNkWDzQQzjTmbccyTg6pTwx9z1xhNVmtc878fAKNJtrpmVajVU8qKWARrTn5cH1onw9fh2ygCeQZt7S8c3zkQB",
  "key15": "4UzmNmX9qAV4ntLSSeRNdBSqFyrA9LRke7QE9h744j5QS3Nbb6tCaCsQ35266UmcGrmmLwd5jD26RXGUy8h9KUWx",
  "key16": "3Jpe9T5pV3dh8mc4DED94BR3mczKEsHkEHEsH4EMyuX1yZsCwceuEBKb2puN14ZWgqfo2VtVocpw1xQeCzTfwPZb",
  "key17": "4QR5gU7SrXKpq8ueSXMJ5ypQzhSmU5F9vPu5qhJ6JHg6vpG51AQMZhgTBxqxxjwRZofocvXC1gC4FrfmL3Yb4QQy",
  "key18": "2hAhQQWKkdHzfGYnDZxihiymmaKT9f3CiKccc5pvMWUdmRB2ZsmvGkL6d7Jd2woNp6aYv1166jzYndp43xQDrANQ",
  "key19": "345prMZ39PwXCWyq6qaCU2mkHkTykZt9TTjqEK4WTNZcPaSkxyd1pFvGyGAtFqsNr7jXcBKTNvWvcyo87jsNXWZR",
  "key20": "5DdJ4fh3YJ9QHFZFme1k8QQd5kJhpNBG1os6oKJfivpvQEyTdXrxsavanR8t62VkvbdcWKgYcjnTy2NfAeKe7ELj",
  "key21": "231EJKNes7qELLyzD1CLHBA9ddWDMMu6Q1vgSsDJ9JGKp7HxnPid8eJ9xMNWVK28aFKrxfGpAbcqd5GqHyyPL6EH",
  "key22": "3pB3qipUNLwnHxrtaFqz8LQkvtGm8tcQJW14jDCoAzofXVYeFtqj2N34q9bVfUQ4eEJerCA1FTnqxGsbMDV3t7bz",
  "key23": "3wn2z3yWTyqAEsWcXKopMPKbK7iuUm1rjXtrimujp8NBZ3u4gQq5kcQzYiqdTbg2Gjjcea3yXXvaQy7DaeP9Y8mp",
  "key24": "g9X8BBq17FcVjzYeJftdiGNZF2rej9JNZfVbeUeeyRoGNRPGyMesdwYe74bpqWGezH9royFeJLcp12X4BC1P8yU",
  "key25": "5qezcciZahWfufEGs6XYTDqiL4GJZoVTJqX3yFKXCXzfTwwVoxKYxu2zW2D5sPybd3qbyrnTHfvgtF3RsxXwhJVE",
  "key26": "4WGTVjwuRwjnpbr2Ri4maZSB44gcubuFQ8peSqCbsmjSiGJNAKyzefGDDjg7pf3sbcNtYyBqGE9FmsKB8GjDyWAk",
  "key27": "3XLdyDBrcZ6oxwnNfEvA28LEc3eho7hCTCxQhLcDQRYPxmPxVeymHSNJ9iAeFLknUsxtTijpPybJ8RyMHTjiojtk",
  "key28": "4CFfcu5JguaW1TbbnouHPw1NkYCA7TcTBP9DeMFKgeuiAQUhdci6UVhAQQKNYeeVtZZmfQ6rRxY22h6YX2PxX2pj",
  "key29": "3kvKfAQ5oNZBCv3pwknSL7Logi27U2TXEph2TAHuLLE2gHAsXx8e7ud4Q1LtaexLq8KAcFe8JE7X4bYRiVSW9Wig"
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
