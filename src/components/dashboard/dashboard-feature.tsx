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
    "R7PUdKghf7ukFfLRhaGDTKi1iKnBqbmNbMuuYoBLsTyrgJmaP74tVhnUR7VPYSf63CqfyDEweSiuqWs6nXhpdiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXeptgPysZh29aoe5sQ5wnMJKxMT5VFRVHrBp8t2AcMZVJUGdQxK1hvUQ3DByHZ4yLYWoEPwoczTn4dpi5x3JQH",
  "key1": "a9QAwQaymNpRmNtqgs38VmVRQzQQk8xTESQyrm3dGKQRCKWZPS2B5pnvotL9TQsg3pspPdfVzZgnFCFqecBr4Yb",
  "key2": "5SiG38XsnjAjL6MkX6JQgA4xcYYqGGZoQpt369oirx613kjiNPdRMbGtyAHnVG1FxuTZM5KEQRzPmeedjb4BaKQU",
  "key3": "2UJFszXapcwJFiNHY4gghPxfUAgELqDAU9421iYVbmbkQYZt6F57S5MtPh5Q16S5ZfJYAX2t1c5psjqQ8FkrfHY6",
  "key4": "fZzjriMALrKcaDfrTUptVD4QnHNcG7ifSk9pELeLUyqyXi8u1znaGqCpyXMraN15MV11YLeqHicEaff5v9nLa5t",
  "key5": "31zQJAtp76PAvF35oRTPwXDmj5iq4Cy7cB6LWK6Mw9KXeoGJnfY9NJxnDQv33Hy7SghaXBdE8yLpLg4Ld5bsFTWz",
  "key6": "3Z4rW23Tbt5kBnVkwBtxpfHbtUBMhoC97ofmsBfNcEGioWNJFpc7RNKo9qYiu1ZNdnYqKnXPZdGLDR8AaSa1KhZi",
  "key7": "iNVquumEfFupXV2vtcQY2JHcPKVMQ2yeS6SnFqoy9Jn58xULhJRBcATymW4KcQafhFNvB1ZeZWmXsxegEWZhkE4",
  "key8": "5yQ7tDwUV7jujJSNb6yd6C8PHfW8DKUMrqnzczzwyryx6zj4NjuKQF3oRnNPWPKt4yvZ7yp9JiAXMs7EJth72WSu",
  "key9": "5jjVF8bRoD7N8SJ2i9xfpbG6wNnYbRHzY4TJTCobnny2G4pqW6z4fcsYaiAjQ84Ckrwg97ZYpGFF9Zb68sA3tYzE",
  "key10": "hDeYbkFxj8mj6nforFKjd5fyJK6FBLHLpUbUV1GkuMsJnbs7PwoE9xitD5PAMePdKK9cYPvVKjJ259AissS7Qae",
  "key11": "5ZdWEaCMU49tQJJCNAArMcaTYypKhcxuAdLPGrdiaEQBhD4GKZ1WiJoqJgzGDxG223ZXuB35ABxDy2c4bjYpmW6T",
  "key12": "3xwuiYGsCg7YGt4W4B2YbxeBsNtnJZYMHdUQ9eQp46SqCjYP267YM3bkYHo18MeP7zG3vKXf6pLAFWMAYCzLzDVs",
  "key13": "2Y4ZPm75zuij2XiDzhsaiTZNfuy8qwGPMuSTeN1XKoWfcCFfBPCcSJ91EQY3euRoyPuTNRfGoQfLLJDpvp8FCghW",
  "key14": "3dVRMGLxgSabBgSnNg3UaVtTnJbqu4UxSX62gmVedX48WvfEcmKjjjVeu266XCSpmP51bMMA2wNMb9g7h9qLa9cB",
  "key15": "3oUKMHKw34W3oyK91Qw2YJaNP2rzqTKeNMidmnmqEG4tZD93f8ci36RKMA3f8z6AfGW8edPjofKFo5kkRc7CFKty",
  "key16": "2DdUGY6a7yJ3rU54MNk9SgQbGRd2kLtCVivPsCHfZ7tEEomUxd3AmTCWb6CgeDakvZWoiqpJ4HRTZHye2wzNUkwE",
  "key17": "3YULdgeEuFAf1Q6oUjkVZGhHWzkV9MNwsQezHJh5ynLq2v8psoc2mYJa2xQL3GBk6utKk8CZBE1FwopEzJ1RU7Aa",
  "key18": "5kk1bXKRxkRPNLUpMNXrxoWd7CxDAxEz23ojAMGVC1FSebNqvDwCEYsHVbwRy9hXKiMA4sBwjNMBUxdHxfurFPUm",
  "key19": "3JbwxSpB5i6HMExMsmBS1wRo4RRWpWjK6VqpVNLnVNsXw8a7rhCzyLdekbiior12aRmcoJdaUUcGSRWRB3XuStPK",
  "key20": "3wb8vhhi1GKkvoWBNg5BL8rZ85uabtAvPEEfC7mYHaNkvMTNwVn3E8FnFzeq47CQ1NSkqcPazeQexXANWtMNZotx",
  "key21": "4fNkSpBab8XFnJAibkK3qWWLdXnhGiBL2ZkXbtg1KWvZ7A4tKncXGYAvmzUN2urXAWTVZmWoEn4xhAjuRk3eyAtb",
  "key22": "3Wi5YotdWPAri3cF5geFevE3GrMdfaSkzznpK5g5nFg1vgkq74wJsF1kEwrf7FVdv25c5DuaX4tJRsDduw5UMWVw",
  "key23": "47U9YLp8QxkGRPkExzzmyj6rzwzNepNUsRFQbhQ82XvdWaqLby9PnnpixSwdKSd5uxuqQeg9sMjJ95ene8Qucq8U",
  "key24": "2L4m6RwYqMRVFURW8f3Xwef7e1hdQQm7Zowyt3asRdA644wfPM99EJgmddS52i9e9JWXKAiXT9pm1K8zyfXXKyQK",
  "key25": "4TavEL9wRbwpuh99ZiUHwvv7KbbtNoucB84gYby51y9kSBNrtdRng9QrMkYbmu4UZum3HXoH1TfBcHW91qUR7RRZ",
  "key26": "52uDiMEW5hmWPpD4samvnbj7Bewzr1W3WQoC41pMv9dq5WT1xUwQMGchub6LbGDX92KgXVdhw8dVJB4N7zd5fMkn",
  "key27": "66P671AMxBBWvgWmNTk1yauVntACP923193sDRk7HxNs695kTiqsmHYkksadmTm4tyoPk1xWzU1yyLSW4k5f5t6v",
  "key28": "3qyP8wjDHDd9wJhuGVUHXwcMJoYf2q2dzkXJ9E6LFF5V37XieexC8YZ4ue4iGWN62LrvGqPcxFY1bRdqHmeSa7ci",
  "key29": "42WwaLNLUwsBiwECbiNqaqkxE59rkEgUSPVJEVP3AckRAjN5CNWyDiEhW1fgchyQtJNu7xSxKi3aCM4UYx4hkiwe",
  "key30": "AKuRnKjXkdu47r2CQVphf3Ax1BYGLHiCx59bWmZSA6pckkagqfBrGWzt2BHRbygw8EdRow6BjbvzFCKAWNDMMN5",
  "key31": "2aMPTL6H2UrCmsSfMKFUqwcqXBNCG4kofdUqGxGmx3k61vcoc44SzhwH2Qpciw5VVxVH8RypUa7ifsfsXfSbYVZn"
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
