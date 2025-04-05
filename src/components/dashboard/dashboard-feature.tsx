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
    "4DqrwkzEPQeg2fyVFVQi262v7gw2BWTqUMpnBBhhFi4jNFXRQaLVR1n1nZL2qVZa8tGFtQ2mKy5XoR5T5KFm2Fjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoawYC73fxGsyQGpM1bk4KJf1eEgAFK4zm9QQwXGdavFedNd1WxF8JUHxwMDo6MaJnd42rMkiFaZEEPpTEktBe1",
  "key1": "Ci5qW1zgQkuAi1pVSnqXoabQqPWkdxom7UXKrA8FDTWVyQej9PvYHFQuwtQFMfb62ayLVfFEHeNXgUpyG6SQQoi",
  "key2": "3P1y6kj4e9hLJLzYrYKVGhP4dJckiSfDRcb5MhFSAbnpn2jJsZMQUSiszmSB8qwajpwAsoVUs8M5adENDUdhmAcm",
  "key3": "3jeFjwR24fqTdx9NUUNF9TZLirXQs6A2cuocUYKxf9LZ4py2G3eFVcumCjwnV2Rs8ed2bqykTpm7MrQ1LXBEMCkA",
  "key4": "pkuTJ5zuGydiKQ6oo1NBZdZKwXWkiFM4hXNoHMLjtnbz1b1f7gJBTKq2bzfUGiKfnLYwFFKhexgADZfX2puPJv3",
  "key5": "4y1xqVd9hSeRsycSodyivoJMmm4hZL2LvAn4APx8RQVNzjW2BxXjdg4LXbEoPHY7324tY9nKHCCmXoSDz7ZiXUSG",
  "key6": "5c8MQshYF4nGxaSVi2CsoHydiNK6niY2Ct2L2pyAiAz5AQ65NiDANrgPx6hDxc2Zfqcd2HviV6wd2AcsVxWwZzb1",
  "key7": "41fAmpzBo7K5bXBydW4M86f6pLrJ32M39LQapXCdhM8kCmGvGNwBU5ygcr9vLCkoEUAubFms8sEj3xh7iTg69xGZ",
  "key8": "43HRYjKPm9KcNH1Ekn4w1RTMdKtx415uTq4pXQv4bXrB5GwqCLA37EBqXvxgh6xk9pvRArgfTJLocgE64PtzosNi",
  "key9": "3pRGExXHes51kgV6Z63nXMaJNMKZnajFGYchzCs9qY8CwBPUAvWSEVaGKpn77Pv9WmREwcGFM5eEJUPE5tJvWF8h",
  "key10": "2obX91Y2VEXpkJvtcPe1gen4rLJ8NQxfgYY6T9rb8CELypM6cyd3ztQWmFPWL31etwSCPW7YFQgmvULPNEAfXbjC",
  "key11": "3Zr8nG9eSv3CLWtDgAUJAzJvScZKDupMmoyZ8zCiFxiaboEbrS6VVpELKkiG3AGWGUGrw1CEkvtTuxsG486BQHor",
  "key12": "2yLEEPeouDpVCav1HSrZzHVDKKbpg1tGRRASsnfSKVENEbmh8SVtS9GC9nKXLzkCAG8HH4eJ1ecn8NowoWpfrCrC",
  "key13": "r8f5PTJ3MazWZbxXgJPCDdBiTLnZGifhSQB5zESKyuPZ7rZF5ampDrHiqGnxhZbejmQVoFpPX4NDPkASTPXx9LQ",
  "key14": "4UQ6Z9ByHmk6BDxJhCZ8wUicP9Ta2s5r58opPgLTqU6kCCb8K8zYmtpR1m6gbbysjerBQwWWU57543GA5sxfedeS",
  "key15": "S5V9cwJQCPwAbbib3fQcy9C5cvJA33eTuUsK3Zn6E85oCpmEF5qhRRkaVLiFdonP67XPKzUvwzziJXr9cc87FVs",
  "key16": "4TWNvFY6gyFmq38XJzgcBLt7U6MVh5vCkdM1gq3UzCE3uNiW2PYCS8FFtX96Kt1CfaUqiptC98QEZm2gKE1AmiH",
  "key17": "4e1oQR2Umo7k2umgow1dQvVcdChkxmSejXfZD3gWzBrZWJDGv66SnSVK6H3iwGdv3RrDFSWrPbA17nGwvjoh28dN",
  "key18": "5GSEzjPS39iZZxYqwpDaaBKDXAtkjc2cNXbaecRr9jthcyyDUDUmm3w5Bkv8gMzEh7vyGuRKKDj8QsvZmPFfrCqi",
  "key19": "xHTtrmhLzxwMj8BRQcqJeUwoV5vAb71cKzSPaPL71ELy9DPoZDzgoFpYXEXqExJSBm2He2KskkPQFqyhU2aSeE2",
  "key20": "2Ug5RxrUfS1KWy3GbS4g2Af7hmx2qUVaH4m6YsfY6k3DSjgXuFR6MAYpi1vgEK1fvhyU1ebk1sJNFnur3iuisA5F",
  "key21": "3aaF3vmVxgn13buZLS7u3GnA69ux7GdcviPMt2VWdVtHUTo6jgFvknbt2TzW6KVNiub87pKhKPXoh2UuDJvEXmMR",
  "key22": "2KiN3JhSNo4ZaurvD6fhHYEdfECcGtwUpBKRxWZZHnrvTWXZ2QtarbVUYBMi3PuLbLLomCAhMjzyzQFPmWDYFJhS",
  "key23": "3P9Ge5TMpTBH4CrAi8dReiUoZ3CeTBfk93F3hubHDuQVJRwsmipLCoogy6auxbif7K9ogjLESViAvdnVZfGLGijK",
  "key24": "39KWdGxNCpwT8bgnGf2Yg2L8Nr4D8aBnWuJfCWpNS94tm6H5H64UDCBYr1G2uZe29sXZvaYGYvjrcAmYeXrFTFPu",
  "key25": "2UYkEbNa3Cymspp9KP46dkYxCJgAutP1NCsvGbcSvAptzZanFDYL2XycGBB4Ua3pvGteNswayaFUrqfkWfc2bDVV",
  "key26": "4fSnrFhYAqRU3hy1aicTfN31F6kPABC8ETW6MUZb8oUBx4MqQvpW6BLhcXqMHVkt6RtY9tFgoTCimmo5SS966sp5",
  "key27": "21WvyC2gXaGsmMiknSNoqgNpAiXwhhqg86aza4pUa27c5sBkAGpMRrkQ2f6hHzTwMtiQwVknywxvnBzK4xRnckjw",
  "key28": "67f2puSNYnHPrzVPc1yjt7aXaz36J2FmWxB4v8EdrkBp2f8MHHghx7zP5kKYZnTEWeeomFXDKVq8sTZwvMwoMhtM",
  "key29": "2R6BBomghoFZBSZCHmdCrXc9wfbM63D6rFUMpx45Wfv6gqrBzKsJafhHGNptZ2Ycx2Frp1uB2fgu8ZzhRsFN2S7t",
  "key30": "5HcUxhAurKsV23GaCVH6Sg3wjihTc4U73iSGm5jXmDoUMn1FFdzAtLbmBqDGpBYrqDtSnEc9xcevFvFjFLZFZduR",
  "key31": "5Yz89eScgm2Pqj2UHrj7abVVbPFSSJ3h6zGMc5KgNK5z3Xo77Gb1VAGz2HjPDbUQTkbNybHEwBtahDtKFjgm7yiE",
  "key32": "5PpJQQb3rjcFzZQ2ay9AG3tUDQdreYJhN4bx3prSM3bfXqas3ug6BpNdgAZdzMNv7bG4D8wQxq5BgZvSHZSQZRrR",
  "key33": "51yhMkENE1WhZEAUndsT4aVpktGsYS6a5yKCqY9AQ6QGnP1YBzrB4W5ksX356cvWNvLcdakD341LDc4garHXTSFK",
  "key34": "66nBKVUwWyehg4vVTmJnpLLj3L7TvXiHm2fPmnihnnA4oQTMDaSDah6RPnL1FvhmrbpfyR9vRQJBBuLs4DiWn4wx",
  "key35": "5i9bd21VWnUgr9js3oAP7CBWew71GdXbcN4PXVBifuesiKW838mmxxv1zrDnCBpkqmw6ku4FQDgWx6QYWbKd7iJL",
  "key36": "3bjmL74NRUiXDjdWDWDYrNbd4NWB5H9XoUZfQhe6W7sHnBoPtEhck7CTWCNSePhwbJkXn1BHzdw9jBupkWMFGap6",
  "key37": "49SRVQyBpcWQx3WiLQieptoSkRu9Jwnyd6Hk4gixND7gtFLedvG7WQxqje6vS2cquDfphSmxgAc2ctXAxpFGQVgh",
  "key38": "5R38AmWtjaABog5g7UrhgYLBfU5ZcvWgNgmvYJjhqrGT49NzzpM6Q9F8MhJvsCN92dd5b2L3fiuBY9ScbVR8Hdeu",
  "key39": "4FiufqqBMzp8XZZZb9UR9THHKbDnskMM5U5QSgVHvWpvCxkrdB9mrS4MUiZPzaZeYmueLy67LwhvCcCRjXHZZ5XU",
  "key40": "3R5z4yB1eDV8nR142taA384FCZshEn7HTDBAXn7y7r3h42Eq6uvQorKvC5oBudwckEsg4oWcuHBgbtPmgGqcWWy9",
  "key41": "4Eey8T2EqurBa9EqSgTGHC5gc17EFPg1BMwaFrczwqL47cjSRn1YiHCBnSy2nHGswzi8XDcUZKkDm4YioJ3riBtf"
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
