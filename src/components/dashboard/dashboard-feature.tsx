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
    "5sbJ9wWVeAXxgdxxtHDDDaQHsBy8b31DCg1DxxvWad39rNW7LtY3AU9vYa7piSusrvkLo6pYWtB2wgwWAoBSJjPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jkgsvQaBomA1DeQzc1rXgXWqtUGpnqu59u2n54CStjnjLgLws5dZf1ee94oNzcJS8xv8eEzACJ2k5cFDcMUrwpp",
  "key1": "ufz53PhiH5vNF1zidp2Z1BAVXUVPdLGzH2UwWLh6NkCRku3cy4gfWx1vRoJudiGf7HC1WKAzZoZpC4tGxHHWG6j",
  "key2": "4hF8oRHivALVE26cNSp9gJbH2TLt2o2g32en2Z4uxLDvwuA2gZTLsKqhGxSW6yV5x9kFwgYBmohuCYzyR8rsA2jM",
  "key3": "2acGJDKdEVpPH98Lo7SqawkP1qzGsNZe7S61QUqT8bJ99T3rZcKStXDyFHhUiitTkvT6Fwba6NiaoABEgD6ipT4v",
  "key4": "4EHiPgyJfF5LoKCZQGeArpL7tcsixsdtYNs4MGWNcWSDStq1BpCX6A6NW3cmVBXWPBtsZYwELfjvpQqTA8ymgxqQ",
  "key5": "5S87EBmb9SJwPVm7vAqQMRsrxugwKb4HbqsVQHB62hpUSVoJne1njwqoyiw5MjE6ACWrgdVMsJrYVJoCDUcN7FZn",
  "key6": "2W7Yv9jGUceZub1vHDbqDuL1Hv8jDKXcp7ZqmJUd4fygBRBfFHoKyiEUWiyzMwkfPrx5B2PMCYpnAx79LmQp3irN",
  "key7": "VwvaBRTG9QXwrphbBpM3xEyoxX3WL6DM36ocj4ppMWBHV2yWEiRAdtjGccTytcvj2AUUUdZjfzK8wv3t2fgkssi",
  "key8": "2SFqJxWyQm6MQXUMJ6K7T1ZULkMnDiaB3kKzoj66eNCszk59cXHCb6oYfU5rqQezcyKhUWqogvw4cpLapi99ChHm",
  "key9": "nruKLC5TvnZadqpZ1CcHZJNLDshvGNKMHRNuQWsKZoWkJsPNeHnENnGQYJrrom3F6LTmgL9t7XEZSs3W3rdK1ZP",
  "key10": "5sovg6D1hCEz5WbeKjXoZRYeBMfjionmU7Ek2uMQ1b1Anp6qsCY4gdVrpjjnrrhyRPQXAhgJ5qamUXCUFv5FbvGb",
  "key11": "52Skz6rrbcGh5ncQrqY6JUwMsuvXAbvPUaryhppkcAYKZnXxa1WSgFbBSFA44DRbYwmtwBfqmjZc5Jo6W1UbFcXS",
  "key12": "3mCPhoA5usy9ri3pZZz2LMw5XA4Ae8e6g7Xr3dMipvKePpAymnSwPysgnfbb7D8pYHmkLmucNKCrrjxMkPcF7pFX",
  "key13": "35PWmyNRnbwpd3fmWpsZgdbjvieGhjGYs2emjP5N1ZD6pRvyRq2vakSoSNvVv4z6oMzodav8UBocdBwYnTt9UBgE",
  "key14": "KFsDoGTUCbJQNyPjxJfWj1P9ryfViBKSAWY4roJ8L1am7nrQqBdCzYHnRhh1WoJhu9hyG36HaoBwzspVqK1biad",
  "key15": "2LPUVrPYMBXUvy3ikTsprPRCNYMXZbUSVWSFUuDHvsrWb2u7op8dJkX7s5xHjbCBUUprXXQC2NYWYZoEySbbRA66",
  "key16": "4gWSx7DU5EjuABLUbD9zYV9tmbpDyEncR7y6BkAmercN3XiBY5kYdyPH5oJRa61iBtVb4Wq6T9LmavKDiibBnT2z",
  "key17": "45hafG2fdj98bSjgTxjHXgHsDSVbXj5z1CZnBNv1UPHpq1yVFVjsZhLNdEu9Qy98VXenxTpxW29dJCAQuVx77Drc",
  "key18": "2gxzjzS9DhTmQ7exAX1r9S2H2DA1tezU9gkKYfeQei8gs1EtYy7ZFktLgRnFMGM3nR1XCCSWo3B2eNWtmEqRPufh",
  "key19": "76GLk1QAR36YVUfCswqATpLnQSHyuQAD4bs4b2doXFVvjLo4VvwE2PdM8ELnQAP7WXfNdMNffuNjvQkUXtzAXQT",
  "key20": "5v45EMcH3Q5SToUFewnAfJG7cKyp5BWy3CbNwJuysaZk6ysJss1npTYUBzGD5BCw9qzJ2REswGvofqjp4AdMyD2B",
  "key21": "3BBZDFWJF9GjNhdCNj1NADdJAf9hvt75zHRaRtNETZHLg92Q6BrKGB7PBE1p6GzjFxe6YPSsjex79UVRuVPcuv4T",
  "key22": "4hN4gJccEDFf1dXTT1Q6u2fGzs5rVX9zzfA3jF45fPcw3o6VA1NxuLW7GB8wSAVakw1aHn2aitwgUL2iB4HDcswt",
  "key23": "4fdj66TA5meEisgWTfsU21zoK3nPF1muKf15hMuN6jvuui58jGbKtUsPBYvfVEHkXXtBaaopiQpQZnQ7bCFuwtWp",
  "key24": "2PacVFejzxK1SCPYh8gPgvDgXNDGSCt3P6YsnoiTL8XvXjqFpimYGsED43hYWuX6KY7rc3iAPN711aJv9ckZvAPK",
  "key25": "2uMqSUcigmsXiLbAvCSdUzg82sNKtmAmRmdFPbyPPufwrKEc7t5LmBLTU8wWJuAif3Jq2pqzRaq295vdZpXcAr2b",
  "key26": "3SAMZMWeWaYLods17NfjsBdhV3RXGjFoEZuXdNtc5qLCU4rQUB3JdyD5fpniP68qtKn42CssMxSqjeCkJDKKxZZw",
  "key27": "41DjPJk3QKgnLUFXjuzfeJJrxN2pbtDsmkGzxrguxb769AUuGpVCGSNJ1mFqxhzeSmjgdFVJeH2gGFzeQwwigbJC",
  "key28": "Cs499KbKpS9BLYwx16MSo5niPjm6vdUdJanx4jZmXi6JsRYUK8F6LwqW4mTCVJWsbxuD8VCwpsnwNZifZqnAMqX",
  "key29": "4QsTjP7no2EDHAHsFo6H9oKqUrym1r8Ep2fL64DAQuo6g7mMK3CYUvSZgtkwPBrNk6xYjw3TtvtbB5w58qcRmLoG",
  "key30": "5xi3wx3fhSq28119RxzPoeJ4kuNfd3rg8quJ7SvZeBSznRLft6vJRXxd33jXGkYStmgk9KFv1kPHus5zbJY9aoQ7",
  "key31": "1swK6uhCV5kpKKzUVdKewkJXKeuTF65Zq3j9JnpaoTq834yh4UnkrtD8X1PMVxAcwomhAcA39ZaMKS9xrzT4jBQ",
  "key32": "56d1w4sVy18MacsSCWYxBA7ZychUCDwuHxdb3XJY3fExQAFoRHopHUXRCbuiVhNHXapkg3xdcZwSox525Xkqc79Q",
  "key33": "uB5BPeQa34utMwr5eKVLnG344nSpD78vHVoWWDD2SbJkxtRCugNou2D3eop7LcPhu2oy1trtV3uSK9USSEcr5BC",
  "key34": "5E6Mb6c1XLwPqnUPoVzJrNbx3L8ggxPwo7PrXfdFUhnJUcBQbM34eAUefeCdKkgyXvQnGEda49zjMrwJtv6yPVGo",
  "key35": "V16mRus8Sm4Rp4w9TxHL4j1WLtv9EWUiJZemfdVVVxd98YQqfvgpSQuck3Hyu7rZqgwkeLhgcSoNatUYiWWvRFm",
  "key36": "5kqY5EPJBcCjCh9FTjEeDYhPMo8L15NsESs3ZTPbWgeQNCTV7Zrff1fYg4gJUv47DZfL2xPwrJppVwcxELQN5vMz",
  "key37": "62WMmZBPedwDfU3saSuTmkmh96yez7FLBjLJkG11Ec6HmVDBGAeAxxYvH9fgK82z5e55htEFVPqJDnEVVZy53hku",
  "key38": "3gJSrWQsXBTJ9D7WFtmw5xQDodxpgfwY8kwyKAcyEAcHnT5ZZU3AhZYwbB3nPavnbDPhsYp94DTw2BpLGrc8EyiG",
  "key39": "5JGjoveKftqAeoy5rapr3VAH3rcH1CPLRAg3Uvr6G9APnC4GPRfEMdvaN5fBkWNUpWmHkLkqNUcib1wsY15zviuk",
  "key40": "54dcqSVamHPaU8jUq7T7hFfcY34RmWTr6Sd7fffWkjpi9Aj6cLY7VKSjPJ95n3VBCD7afZvSzT1JYpShku5KD4pw",
  "key41": "3CwgYSmsVEmkjTVbd7RgVumj9kpLhe78uNVQqb8eRmD1ffNdTMga1S1N8kUdQJqnHCXZgAvvYCLBZAKVSjs3TaCZ",
  "key42": "3LRmNFxtrfJnXu72nkutVLvYcT7q7oqYhBGL8kpoz5Nw42N3U38b8ZEpaB94zLknmU93n8AtqGV593sb26kYSC6v",
  "key43": "UaEcYk334Lvvf9YP1CG3PsXHQQbtMqWGG6fqB3GtGV3xSuwzsPrx9YDpcLw1eKLWS36Egc1EoV7v2V1kM7oEc9p",
  "key44": "54rZUoqRBbkbbDfEdmjVnkc9M7n3t9Y9FK9HwMsDmr9fWtm3SbAf3SR3x877yAjmpstMmxfTcjSTdeps3zE9m7VT",
  "key45": "2sPEvYGDhvHWVUDcPDWkmU2bNtQSrcfJWnrUxCDdV1s1X9BX28J9i86FHcoEKbQQY8V8ZoCAtTKULR3CgCyFzjem",
  "key46": "2LidhCGD6u3SDZM8ZXdHYd5949TX7PYogp5zZ9PpzwKWpZgpYQR1yZWZFdeVbC5N2743uFwoSUM2aMtN8RPEwc63"
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
