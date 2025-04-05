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
    "4p1TruzVwwkuk9f7hBMsndJ13jccGRS5rHcHnMqmBCyXxtXkmc9Ua9JQug6GsQr8btucHASDGvxVWKFyqFSGaG3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XyBjUdLRjipNZSveRC6nChGgPPbe6rnAmJsdvQVTDu73KoNHtQLMm75BxTrPZXW6DqHNU7z4k8YpGXMxshWKkUZ",
  "key1": "cYUV3z5FWmnvKTrnQ2ASxqNEypUeNEFZFfk7VqxnKsR418RCVMQz4cp99tYiC9anRypubwZZtuB3yKfig8tkk96",
  "key2": "57G5K5Lw7Hkocdq5reqANoVoWiRHa5wJCYiDSwFgjC5mX2Mq2d2mJt2YTU64n3apsjsSYHoGhwrSqsKG5FUYCCUT",
  "key3": "25gSQYX8y71XWR2J17wtLFbgrDYMWXd7VwQctRm3v8S4onXvTg1Y9b8fBP2hR472e6guEhx8tQEFg6qKuvg6P1E4",
  "key4": "MxBdWcsuT7G745ST5KdAcsgjiPt6hc1fmoyA42w3ginyyqFgTsM65GM3svtYhdFEJaPunwoCALSQjSM22aQdVwL",
  "key5": "67YNn3HYyr6PH5cXALDm4BnD2DhjotninecUkXXXiuG1ZHbNBykUHv21xx9WdyNN92Fhu2oxvjqapgskJ6mtBnRn",
  "key6": "5EvtaNeUpeJSLDhfSvHapmHrEQmk8sGMs4xDY2ff7AZvtxt21TfQWmg59xqxrjd4nxeY77tKiaGTzZWG8a3sEeim",
  "key7": "4W9iTTnRdXdDiyp5iW4CjMUFX9zvaEU4JxJDCkyf4GonX7xpmdZNCmjZL8TQHX3bSbtBfzcJqpFc8p4oGVeMC1CM",
  "key8": "vdid3EHUiN5CbyMRTJC7ZLJPZ8jJG2SiHjfKVxb9hYKqKb7eNbYqqvXcUKB35NZMjMxDJR7eh8KrSSu2wMHVcXh",
  "key9": "4WmwvUqYq8a7rt2yZHyMasgiTZKpSU93nXkoyAxDX233LazAcciM4vX2nh9F8wFNCeDzx3soQxwEgYiFK73VfYkq",
  "key10": "4i7hLb6eEe7SMjPBXR5VzGcUcyZ4nUGpqjQ2wL2P26tXzDhKjJqRXwUWHWsZXoiWpDzfoW1cGRDzz6mPhPdtbdJt",
  "key11": "32uBKDkuekQ77Bt9ZWFvyW4zWEesgUfHYm8x5bUZjV4sgiffPbLjXJURLAwEFdEjcPVuBsqn1nY47gtQFbqyP76x",
  "key12": "3hz54C6WdFBRkCRqGq4EB3d24X7eN3y2WkAkbh8qDpRWNaxE8xDFJgjJYJxUk2vzDFGrM3ziMHUJWcnaADQL27i9",
  "key13": "k9euSNNcpRZKGjqZKczzwooQGzWBXe165N3kwmumX2rHxzBPfuAbxiAjJHFg5tbEmeusmZEcj8dNwAkKfMdNgH9",
  "key14": "2fNNw4v212Jy6am7nRUtfa4Wivs5eLLbNKETGaW4oZfKMMjZpJzwRQT4Dr2VhXV1SFrLZfSTE12a6GrFVmbPRCCm",
  "key15": "59XKd35fDoRdEymq2PXJFYa2eXR51VWSJxGEpr61GmpNFojk29QYrnpfnaMVAp79odkSg6f7G57zH1Gw2XBABtuK",
  "key16": "64VvUGLiAvJzgziuCPz8ofQfm9ESdYgnoRXpbY1wmmfmjxL4RqYCLxsfg1YKFGeoJa3KoqCPk6vQCkfodf8vsPzT",
  "key17": "2ddVVTxrYwuzSF1vkLNZQkCwVDZ5hZAeATv1aWbq1YbacEwUAMeCvMrB5sYmB2UsH9djrpEVfoYkh5Xya2VY3DRm",
  "key18": "2vMWjrDHPiBaMhpsFP59tnAibFNGhX55Yfrg4unx7FRKuvdXgV9wiajkpv4wXkdvxtGPu9LYRp31EttNnFRCvJAs",
  "key19": "3HUwQZWp48Rf3nX6sroDsCmexeE4h4m18o6E3qAdRW2nDDFVNm4CXgh7XPzgumPLeQBMveEUkFDJEwqD3kd91Pp6",
  "key20": "4FDLuBZvg8qoAhj4vt6qP2e1XcNPMvYDgV9rMHqZEwBXYcwY9WvXtSCt4VE9uNhW6BWCW5bh8eoEgKh2tkaK3r6J",
  "key21": "3is2AWgAW4xbuUSeU2oeqPCZoPLzxE4EVqukJbRc5VQvLJYcpyUQwUtU3Qe8FUJVxLmFK3iKCWUUYngv5creFFSD",
  "key22": "452MPQjCDeNc3M8WsusK1ZL6HyrcC2Gyf7PKCSrBPuAxkJHfesGYHLisbSGKoE7PW8gMMZcD4aitzeEQ7v4XqaYa",
  "key23": "57Q8cPNzLCdam6TJmLesNV9VUUSpXKJvB7YaCRqY9FLDbGcidAkCoyfWF2J1DETcfsGUgNVsZrpHrhP9eEQFPmp4",
  "key24": "4Tbz546rGRTWmLBg9thUGSCQdLDfrjzSz1CxPLGKZEs7uXcjfmxCsqXp4jvEgR4wSuentCog236cCRtw9NcHZp29",
  "key25": "3HS8w2JNGohNFymTphELSA4LTokYtBn2zCUuRKfRvNQh9xGiFjw5uBqJgJBfReZYUkKMJrbEJs4CLyBGQ1fNAEma",
  "key26": "25Qfz9wuHGKgpoJoBZG3qBYn8CUCxWELiigHfHiAZw2ku9vPsVCUSn29J3QhDB89WtVyd5yY7i4Zym4PCFRAfEFp",
  "key27": "hA5XEVwYJcKx8zqdZUKCnFNDhX3ifsXUktxo49yx5JRtTQLibXPgT8TGyApaS4jdq4Xn8DmREBE2EmNC89qcejT",
  "key28": "2LzQbP5ujk3T8Qwoapte1X7DdNnPL4X29nXbrokjigrQTeRAvsjA5pYFBP2cWFa5RxNqkE8QnR9W5XrD6QvGCn72",
  "key29": "2JWUvzUR362RWxGdXSB4qg54Adbk4D3LF71hob6oqXzFV48xWqX8nFhnzZEneAMdRLckzh6qikuTbJy8B1FDLS2d",
  "key30": "4T1DRKDete6JZzm94s42ofeUexWuWKQ3Vzi7nPpB6G29XoNApKFQ76FWAVDpgQmKQUcYLs4pGMCHz1B2tQNrQ8nt",
  "key31": "LmTujA6Rtdosu9McmcjJL6r5aUsbrW6CgPfBwMR6ZtBbDmtcAZ7ZfLWjZA2KGmD4MLFH1axZoyBmcNejHisGqHo",
  "key32": "4VLZnLnkjJ9KU2frCTiAPh1E4rMkeVauwmVkVMmZoGMSTos6AUPJbeXN1tcfxyV798V6H46qEWXMaeLqtFbzi4Su"
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
