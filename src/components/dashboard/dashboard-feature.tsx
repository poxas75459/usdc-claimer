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
    "65onD1Ywv8v64PCZmmZdSAUJrnWiqgD1EHtAjtvWVVgXKnHtLiboSK2BEkR47XgCB2SvWSpvM9CZ3v5jM7dR49Fk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhfqFwWkbmCc7Nd69H6MrEmMSMYYVcbjZL9XETU8uANYhBo39fVY5VQxkPPCCCWJ6wo6X9gmZcJnMgLgQzxTDLa",
  "key1": "3okvuLRQeaY9sTr6bo1bpEVRsFweJnjazZA9uufW8xcg6LMHD31hVGwqMTaZz5do5SAttCsr5imWLgQW8VAhvnWv",
  "key2": "38M8anZi5UeWKnEmXsewN47D2ebJEYZnasaAZnFGaQGzJ7NcJEgqtoDdXG5g3LjHxyT2iKwSpAJNdjTLEwGHvsSa",
  "key3": "3cfRzfr41Bsg3KAHg4A1Xc1o2BpZeNVjK67ZqUYGAyVem75naztu2j2nevX8K6KiEudt8Qei8K3NWVAEfxbEsAdW",
  "key4": "37Dvz41UgPH393XgKEkR3Y826nkoXDHt8Qvtsd4RAHQ3C68q2yY8dVfnPwHxGdqorpwSf6r1iUtXQ57HfuALP1MS",
  "key5": "2B5CHGaeC1vW917gTwojMCtxNSFsjkaRzVdqhSGsBL2vwpZmVSmNRqDgT3g7XYGSoFR6MwMtbXj9SX4ab4dDr6pU",
  "key6": "3gm1RPLTNabkjdqYkeDsuBtWVEaocrrAQZsMwWRiFeHwZ9GHtwHE7dTbT6Uu3XPFzizsWXMopTBHkh7YVXpe2gkN",
  "key7": "bzBBJoHHcqz3XSyUcmx6KzzTApgQFFguTpv9umgCgA2EHvBmzrECKZKrPcdiPTsky3HHrJuHcXnWgGK4qVTC4GS",
  "key8": "5PB1pxbQASvmDxLdvzNVnbunUsHe8MvojjcXfgj8YJGH6WCQptn3M8DZszo1ehdN7X5drtZcUDEiyB7JFEKzv2nG",
  "key9": "27m8E8zzhL5XKL7yCVZscqG4dDUjJbUXfgaeMoiYWik4vcFgWsyZhAKfrfk6EnguEi6MFKbXSY76Qbj7RhSVhi9f",
  "key10": "5RxNNPX6kku4dJotfSK2qzps1JfQY28XUWrs2c8i6dUFzrSWRD2Ru2HukzAJXYiTEgtqwFMpDcdrasNyo1E6PpHi",
  "key11": "3NpPkeektf2BHPPQKatuFtttHEAE91moiBgHd17pkntkbMHCJHu29ctbCNYXcf77dZ673tFK51rLDsLJYBRrd91R",
  "key12": "fhFibtm9kLxUoNfS9s2cPNNrP1E4NNKBkpVSkcdwDvZDTZuWjtNc6Mj71AZoJfDmjWajoUndQz281edpxQZRPc2",
  "key13": "3YoVUEMnDRMwhwwJTqQNtz1VFkFvium165S9U9QYYKM2pPzCoG6hm2fTxXVvxsD95Qps86gYWZDZdewhbJQJpKuP",
  "key14": "57aDTZFpGVsYD4ASzWYzFvNRg98BUnFcB3NC2DfjeYSAsVzF9rPpqEoi159x36uvuwp68rxRPdeq4zu2aV5eXsUp",
  "key15": "3LAG919xKU4XnhrFEJU7cX8wKuqM8fEqCzuHWz3cW4ykJ7wZdR8JdxGUR8BeL28NeF57GMg4yz7FnaCbKnJu4jHp",
  "key16": "47H2BCzHftPhPJjUAT1FF7wJK75ocx9xk9bpNPEfmmAErxvYNn3Gj1heWsQxYHxx2wqjGms1fhbVWKGAGXQiXDXV",
  "key17": "FvpEdK5yDtDNWzmfdBXK5eJS6JnMVzJX8Tko49vWeLbDcVnmcL6DN9uATJ6XNG44dnnthf2tCCT41jYKUD3FYCW",
  "key18": "4p2BffGtdjJcE5a4pfiauyx1tMtHqjriPzPgEaacaBrkZYAqmXdyCH2WEpVtLyytCWdy8pcBypNH2kSzWMTMCQ8w",
  "key19": "2Sen67qAJaSXR3wGWFujNHXMk1ns8Cy99LrXDnxXk6AorLtFVw9zjNfXG2pggk1yxibCtSb6fRo7UgFX4qmrWjSA",
  "key20": "xJkSyqBfLbNGoLpcK3uqLZveQZ3JCHqMbFar3skLRR34ZLme2FQETs9i24fhq5ft73seG9bGX9RyhGBJdEWqYmG",
  "key21": "2Do1PXQHB8JQXsEcf8BbSfzBHNDoj6xq8fLxXGopuUqKQH5BXEvCBh7cga65iJXBL6q3cDyggHQaATCNCqexw31Y",
  "key22": "23zuUyAMMBfG3kqsfyEnrp53okuna8mD5f7mgQXon6ddiJr88u7YgvFcHRjgbAMJ6dxGhUyS3FNPnXNhFLuxjFrx",
  "key23": "39UU8bnFbDkA2USQP8s1oSX46hHTkcsBGkVB6HV5ZJSyJ7NLRE6mVeRF6kzbqGL4aEy9vMogwFVQcSUBHM1TMWKa",
  "key24": "3SqfpCUXYc9rNKM1UTfxUPcwEzxh9UDtJBjn3pG87S85NBKpQaXn8SGHSdW8oYfqVNVUsGFpNvkFeNQNDhUc2jHJ",
  "key25": "b98ZQLnrL1bz6Xj6Wy9kV6ivSHu1ZszNVUrCobATtcnX5DXrGXBBKUZqc3tfsYG5LGGXxJcf99Nteo3AB8iFMFD",
  "key26": "2sNkLv4afWFFbb3Luz8WCaTYHiHnZvmmmdKUgx33zNriiHFxmrMRVGDAzUotaHap1GxugEBS88u8J6n5qK1PpqsB",
  "key27": "3i4qY953B9aYcKds4bjMxaBYrbMU84ZAG14j8fthnkWV6X9d15TjcV97bbU6ARZcs95Cw19BH5TPyDhEojozTEq7",
  "key28": "4c6VjUJxFSKwqij9fpxNJex2uV32ctdJj1LnwC5mshTgjYQeuy8Bu19dieRLQ2999PQqYUZRXNSCWgrXyhMyjRVy",
  "key29": "2d8FtY7YTrxMt3VwYcWK5YtPeUjhhmBhhdNwDUCaa3kq6CZVNixUVLGyRkd34xHcvLBdNBD7ErmAnttyWNYyVczT",
  "key30": "5eiKtHc4mi8acZFK1N7qrdthqYej1xaKqt99gVRaSVyXYfeKEtknwHy5avL9SPe31MMbY2eWsaPzCfS8Jznt8vt1",
  "key31": "4MuTvvsV3xiNYYr7uHYFXSRtq1h1gC4jeyMMjpiG3cpiVugvnGSfaYGS4BqsYQJsUfPnmRb4PpYhemaTPf4zbumV",
  "key32": "4mWTAcveFc2MrggHfcowrJKSuUSRJvEz5YVka7iEmEPjusGUR92SJAerrC8TZzzyK1zQEf8Y4YvBNCpRg1VwMNzD",
  "key33": "4Jygs5VEUayRzGe2dTTXGzhibJVwhh7WYoqjPdfSei6JuWctZ1yTRCebHijENB8QN6vaquttc2TVAM6D7FBcURiX",
  "key34": "4L6Be4fpWTM2SB5YqVuaX4oHMDoTPJtjLdh19tx4u4CB4bdRBPktLfe5auQ62BYD9ywUbq6uHm7qRsW7dcoNCboD",
  "key35": "2Hja6iRpHVJ5o2Ryu5viYeXhjMGynDE7ajfZDkv63aLmu7aytJ5J5T2uXUgAiWnuDL8Qee5ZN4btZj4ns9tZpPwp",
  "key36": "3mrfAvMmtWUA1Skxim6XRPtoMjeQcyrnFTggwDpfM2imC7ZBBDhaNXgE8CgER7juDZ9VzYH28iVR2s3hLcq8CFQ6",
  "key37": "2PXFWVicq9sXwJ1V1q9M3zBfcCKxhtS2bra9Ps2ZjgKennp3zfrXsXJKhqSfnsuC6Zwb18qmyh4G3mmZbE2p1bet"
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
