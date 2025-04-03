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
    "4xscRDDziYXNBWdg7VYsS8r12wu7EFsWjBXpALsU3KtCTYb9vKM3rr3JDqHsHhTWrMR3T3oR8DbCv6fSUWgzJfGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3251Z6jYXnzm6VNipQUYE2uwWiyiBgx9DwKCcxijy1L6fbH9xZVZt6ZKZAoSBVeiyrNeg84E2T1gDVVnE3rnVEmS",
  "key1": "yNqUptRVsbwvjsC3SXFqGLubE73AW8zfdzyt6kNxp1aVWVtcNXZRsaxbzquSihXiM2WmKecN1rvzfMwvWDXVzv5",
  "key2": "5pPtejPLbA58wcSDx6kaLXW2osffoU2snD14rwW3h5E1YXhAo6mqvPQ6CMz2QzBNNZA7xNfrmMBw4wXJ99YWtkNU",
  "key3": "4ScrA3KjZ6xN68h12XHcYwV2WCDxn6uFebU6XdrrDN7HvXCr9dzLdBp4wPEUDSzz2BQatUEaLgRwbhFxTB4F6Ltf",
  "key4": "4ZGcmEBnJ3AP5F6YeEhjoBNgQRRsA2dvLVaEtj1GgTX3FqQQgmS1HAXJkVYs2JrhUpq1pNaePPSfPhrfJ4hGBrAr",
  "key5": "QawPe8ZoRq5NP4ywhAML1BVvQvDzV2MLmXLyj9iENzH3r2VQvCuD2zokeBnxMvDqTtnF5LXbSjddEeRHuzqytNo",
  "key6": "U9ZEE3GNukqtW1wFg8eFh342GEJFtQz4bAzEayPv1uAwgNfk6B5uvJDw91qPjZoxTQd2wC4cyd2MmmoKHqkMUhy",
  "key7": "2FjL6DpJQ6zTwVDLidiXmSYQTrQZpWkzzc1DfD9ShwxJnLU2wHL3VR7WRehKHbyJmvNpRrrFqULQtBg3EsnCA1Ns",
  "key8": "49misXL7A5MyuZfVbZsgh1RmPPrgg4tbdgYwWqQNp6PVRHx9hqVKuGVVNJLpyJYM542Me9SVeqYiUjbpzsHGQLzj",
  "key9": "DvxYWBhKedF1VJBGv5bFFnSETL7V2g3RQZfZezQRS9aLH1Ff4i41GMC9gqguKPo3SgLmk9LpRjJAccN5keD3XMy",
  "key10": "xSmhf1uHpvgMHNvUFFqa2BvH5E8SS6VDZrvGiNZonPQ3PnaddJpMDxxfrdDaJEi6UgCFm9DdsUcgCBdproCozfM",
  "key11": "5JFxGpbaBaqtXLjwp8mBte8sGnMLt8VbzpFe4pBdqAPyCt2ZWcwjE2fRyrFwruTA8Srn4iL2w1SHKZvw1q4K7yVG",
  "key12": "3ZSwuSRjp5kxkHanxDGDWCeaTERqKF2Wu8qqwkCiDNRLzaVncy8s9vYipFnn7atE1EywFLr6gQsxFnPjChgUDqCR",
  "key13": "38pN8tSvxbE2nHE9Td3ASaEQJzLS52fSoaKEjGicHzHZaQYtdUTgRPGU27sTqQo1mB887HHcY9Cr8uXCTeRjijhG",
  "key14": "61TsVYjyXXTjrRMykVdcsdi3ABqFfbD2Ay2uAFp2rmgG9aDwgEvRdwHwx85UTjeqYkb2hyaNJMcwSS2oX1WhChtn",
  "key15": "3TSgCVm2DrvRYSA6bKY9CpGAgGWNxEiXk6XVYnZHF2gC3PjU2LyDJvzGBiTFtXUQmdBq7VFTAUP9dqDbLoP3f7zi",
  "key16": "3QQC9dDvHTWUzEZAVeNs67kzf8rV7XMCmde76QmLftp7PAmPeuLq1L6LkPqsbxeoHtcr1G7JcR4Yuv6W643oVZo9",
  "key17": "3B3jAj4x8PgkwRMYavfmwkZL1NEkESU1u4bTr3De5f2pGmjex3QQjqRy7ApZp4khJ1tG9kSWwCx8r9vL7WeAx8Hv",
  "key18": "WivwRjWt1VtrvW14XFQobzzd3sD6Jf19Qu9iVX2AKTtcu3kdBtxitAzoYLmriE9dgNhB3fwqxDu51wH3AP6txwA",
  "key19": "nJN58DUzs1sQUYmJ8UWTv4oW98Y61mtrFHz6PeanScJpe6wrGDXZ3nfTezAz11HKUq7wcevmdz1YqCo6BbYrcXs",
  "key20": "mNWHdhLF4r7sMm6H34sjYNpudmJ6EqVfgtHqfdK2vLZWyXBSrUYQJF6FxZmUPTm9NjsjM6F1Hxft9DTuBpjDHze",
  "key21": "5MrkXh7QXrwS4qvMzVAk2CtWkEAbwkQuEgwZWn1dXnGoTAto8zPY18uSNhWsA8xeSxdtKCA5QcC57k4MEM7kdgxs",
  "key22": "3nHjBLoQjGUa4fpdiupPgByupuTJyqns3kupN8Rdzft6kNUEJ7nunWfii4Qd7gJEnyPs35PdNVSUyw7sqfUCoqxe",
  "key23": "3sVqDwv3tWEGKkD1kVhDcwH4ePnTKUyvPj5kRuhdbgwG35vqCEX4zaiBB8j36i5vjnHNwvcRzeFsxydfdtvhrjgz",
  "key24": "2CivECEVKyyQdqmXXPJxiMD1jeJWRdcWA2jw9zDkf6qx329BVckv5fLyijs7hMfgZhpyaNaz8Nzwmas3ZybGa75F",
  "key25": "541dqTxX5uv282HnqTkfASU1G4Mx9LK7ShK84r2Yhh9CEzsvpP5NiDZcgKGriRF9wichx6WtR54gQmGhUnZq1Cog",
  "key26": "21ckWpdZskBrpBwEUxe2ecFaM4RPnBRpqc8Rxb9y1Fq8xP6VAmW7FvcefW6xuzsAwevsxYLPxKSMaUnUErqpCZGL",
  "key27": "5QPoaGcTt2SRXEMn4S4rVrxy4nTgbpEmjEgu2h4YMVwF4vPk4uCnxrLhXLEEgktx4Gt1Qd6GYgQrE5yd2T5hzK9C",
  "key28": "vnUZqV75mPehpuR81rFNKWCwL3JVMqCPSgHMVdSuzCXoyDbaEo4aiqrgqWA3Q5kqe3a1ZyQnSUp5Np3V2aEDNbe",
  "key29": "3NPdoSTiwfHjpdJSeQfTg6vFfNtTNiBg7f2osxYaokaVwmSQRgu2cJpwZgmMeuQscF9zRXPpJeaqXiUEQK9QkV22",
  "key30": "4pBpBiHvBH7uQWAMzC8Ha1dFvPz4k1vbauiXZiShWoKW6VYgV5KxVTWiYZwmCU1hf56MguFhHDmGmxzVZzJ9sZyS",
  "key31": "4qx4tsM6MC1rTZXtmcoJiFMNSNUXRhnMGQ9ucJHrXXstFKLMksXf9TKT1ye8gG92SsDStqpRtkCgMnQPhkrFx2P3",
  "key32": "5pKjL7jXmpBqNUhZaaivoKG6G9YrfFV43v1QPr1bztJV3FmecWNxWJvMNS3BLQSYmCyY1vmtN5TVekGFhkym3N7J",
  "key33": "nsWGGs11e5aCEwwJxXPXfVyt8dG2Arv7nTVGe4uvjNYjbaiDctGMudCz9nZkcRQtWepxMrk4t7NbNWcrNpaNHjm",
  "key34": "53iijWCMA2Wg2YsK8dnHuM82mWfwBdYPzjf8aBNdkcQfGbQT34HzB8necpcjX8iEf6m6ovMDet9xoaMrXQkVfYB5",
  "key35": "4vjNMeDwVHLz5NPHWtYwftKA3yxn1u8dEvBfN6Uj6gRvT4aMgBTRb9H2tCTvt2PGaQhB5eDXo8AhM7fJTzrkCnsk",
  "key36": "4ibuVAp6Gi82hMNvnhxk3rxCY56mwC5eymSQwnrMSkhubBqdg9HZ8Re31eXwxE77AdfnVcwcS3Yi6WmxXCSQ5Yjw",
  "key37": "4C35HDYkuoi15E7XRUn79qMLx1MJVy8TQaB6g13whKhmJ6Qym9PphDkHMLNmJkegoEugvbL7fijyWHvp5d271iCF",
  "key38": "2juveytBDCe4XCW7L59dsthj7KvDYXkDXmMCN7GTKtBDUWQmZTHges4Jq9LwqAKD18AhEtv83KJYLREbnfKQbWRi",
  "key39": "2uLTcUaKjmYsPB3fAAmaKUjEGqJbW2XUSNFmCcExumezJrMFmcuzS8WRLnRj24SVoD1QGVZtbX7YT1KXpdDdLdYf",
  "key40": "3mPgjra91ukrNQcxCq9EGvi2auyk4WS8GmqhTUPMC2z7xpXTyfp8LvUHpyK5m1yqN7W5hAXzNEh8cPYQyNepzxqF",
  "key41": "3ncSL8BBpcbhtHaL7Hb2DRg62CVX29U9phxX6WNMveWHM5gudqFWTR6NkdGDrddPdrxt731nF3ZUaRDDsSPUv5r"
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
