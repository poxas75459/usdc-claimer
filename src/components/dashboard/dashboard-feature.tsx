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
    "Lv4yTuR8GLvNEHPQpryBEfWu4UT4GPFW3a2ygDzojepu3Dqyx1Yve8CasRKP8gfjjtvk2QBEctE3XaUXb4MyNEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mv55jWVVZBbR6EVXurZx2XnsaPodwMyFkXo1m15qg7cTJZc8sBZeEFyEqGmabDLXYGXqa3swfp5PN4pRjfEeSkz",
  "key1": "gTL7eb5pbpdVisTgXDpzrnKuFF8vzQPJdkWd45sXnK7DfzwSGtPTe99EoGJsHCNoy9p32eiTmPUnpkP9fyxQeCS",
  "key2": "4G3m5PCwVYYhyw2wEdfCkmqxktEJXTDLC93o2jpRM2hW2CT3sBTGrfqGjrmBrLoK2A55smBNxUXwzq6yYqiGWwig",
  "key3": "446pUWwunVrAV374dJ6eRCJ3B4CS1yRE73EuX1djsQirey3gWzbnY9CGBaoJ7e7F91JutB94YfmSLTRVEqanKf5H",
  "key4": "43eKTtXig9VH1792Nev5cZJ2zZPschQ1wGSvbSxZyBVZKUb8MuW1NWQWKbUJsvWavv6Gp5g33SLwevrgbjU4SShY",
  "key5": "5W2W7j4bvGeV39KLfkNsrNXqjPi83WFkDy3LXNxzkNYFvJjj7MtB6jh8w6448KRvbcQrMZsevnm7oV1zPUcnoThN",
  "key6": "4rDqy7JM44miP1adGT8YnBJ2Cn3XUADn3asFTh2R2je8b1G5WyAiJ3mEBDDKwvJGf8tnzmypwFfAzYBrkiQ55nBU",
  "key7": "627XVBNyRQ8UHPo7949zHXaAYqeUd1NhF2qW4CeBMEnwW5K6UwcL5eADkt6iaMCmdvATxvRdhWgGDRDLMrxx6N5E",
  "key8": "3iy1MoXYieXxnr3j2safbabeCYuwAumgXvAYYa3EsikASqinBceVMKcBu9GqqXs4A1YWi9QfBm2nxpHmtgHPoHJ1",
  "key9": "2DQiZZzvYeuarCndWGi3d4uxc4Qs5jxyFWi4NVzukgk1vPsJwbtuKXJ2Tkyv6ByTtqvaotNnfqDF3WhDjgaM1vjP",
  "key10": "58z4rqDxmmUieKBeTfDHxptGnZhRiakJ9PU7Nh8QYVEo4mb9N1M5ekxq5zxrj3RwqsgEuthv4pCbSnbWbDFPSX7Q",
  "key11": "5mu7UWFf1sxtmfJPoySRqkGY2kj84JGT96rVQXGG7SBCYGZKCD4G1WwFjHsW8fNeAExo2piCTsGD5vmUcFooqcPE",
  "key12": "2Z9sLv2EznyFpFxm9KwK1YakTBFn7UDuMWGJxpppxfDSmxhbT3F4gRF9BfEiNrEBR7GfuUoDbGzpAd75CxUEs4o3",
  "key13": "5ekz3tRyXAgQ2zRyb9GXFKTLZSYjXunRyWjcVZGt1EFuosZb4yN5qwkPPLWd1tunH2oHJZ5ZXvzR8fejVcE241D5",
  "key14": "5Tr11xSix3j4uVXo9ViGcytMVbcKE4JjxhrYWRDb1KHYnGnECKz3edfwPFCTF9ZFdwSVNP8HZVeYxcQqA3BdeqqG",
  "key15": "2VmEY3dG3Nj5uKbUtjXXus61dPX6wzKhazKybM51rXSXnoXrkxiHgTGu5QxVJ557ZBABkK81WX8riDENj6xfHUgY",
  "key16": "2ZAoe9kyZrtQ2cxfLYGYwH9351F3WwXYNni61WXMMSY7WPzABpPKQ7iPy17oE8i8bJwGGM4VXNPUdGuoKiQdwBnU",
  "key17": "25n535Adh9BdhGj5oYLFoDnKV88QdBjng4QA4Q4XeHuKt9UMHodvgxDmjxQjBUoAujpVWbRTDR5SMNoLySf2nV6a",
  "key18": "JJmK6cbbhrALAWQx2p2jU4xfNypjDthMXUR9ToYvQYjMAe8cQ4JoC9DarbYVzuFbVnynWE8CunYhjBo8P3imcuq",
  "key19": "2hx5CV73LcJ3Dro4Fs5929v8pfXadHS8hX72FQWdi4FAHVtdHDZvqjerZ2h6p1UU2MNcJB2Tfn7tmnAxdpc9TuvN",
  "key20": "5M3Zo7gp79ahRgxy6AmFpGWK5HTL9CWXceJ5rRypG2VATwxpZYXEc7RcM5oupnMdQZCRXPgqGv7euTWpVs8rnwRT",
  "key21": "4CgNuuVNzFf8qbaSwunHNpbpY4NGygFV1E6KUSHyKr89oL8vTP25DcWZHCMbeygnCsiHb8xBMeBFR2DQ7bfwQ4Yc",
  "key22": "5Bcyj9GEHQJaGmKCvi3btNoYc4SGd1kqgLhpffCAs3b3shbYPDQv9zDHodFYDVMcrEGBSNC5HoxcAMzAFqGYM54d",
  "key23": "2QN5oRt6mGav8aT1qMBzg1QZmJ5qSMzxbsTBPPuLLZqQzDtsQuCAh5TS9Vw4RwwrtR9TpAoMfcacrVtbVL1cSE9D",
  "key24": "4pZp54uE2x5w1AjinY5qTWJfjMmdasyPMNpZKRJqKfWghnaH4ZQBQkhL1C9vtWU7M9oygQRPfguQAtyzr7cZmUXq",
  "key25": "EVKSUdizhoKyexjg5wLZAPwnRXqtSP5XvrnfaTYNzZViRPsFb9BycoW6pG1ZQBz4gp2iZGhfw1qG2adHwGJHo6Z",
  "key26": "3RVb6GSAoKRuWVXGir1M4azdghN1ZQy2AFTPhRVWT3EmoiSmrAqXjgZf39mhVDxdfBUaZcv6NSRxaZFJiAABGUJp"
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
