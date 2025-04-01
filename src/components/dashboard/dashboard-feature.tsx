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
    "5G8scs4snMu2gkAn1XB8SaghKw2VRKRmd2EsTMJZe2kLBf6UJMDCtySeUoEoa3RZRqZdRhnvdiPzVLjvCbrXUqos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UcsG8qY2vUyMCbTsjs7DJ6wpuPhjDgJk4LABcyBZ1t9TifAyaM6PieGhpmtbW976pqszLs8SPybe8W6Xkn8wxs",
  "key1": "5HMiXiGcijbT7bFm6vkeWrd2BtHDpW6MveaHfVRrYdg4pBEDyyrzrW4FoJseP4DwZm282f6zdxKUoUCKohJeoksM",
  "key2": "4ow4W4KDv7ncEcrnDUYgePjvViVnFqZGqBV8jB16evyeVC8QVsT5bKjXiPp3aThhFsCruKrtZfP46ML4jMq3JxXo",
  "key3": "3ue7AwvSYTgaBEzJLDpRfAgSFnNLieANyRPaFCwQz6QoFu179KNZkWGW3wK7mJKJUT5p8f5vj2HJ5k2cwBQ4c9Lh",
  "key4": "58zeV3tVsBcUuyb6JvVF6PqYWjmMErwhbSrM6h2BdUNwVaKfnq3yrnwMEbDBZpRLVFHLcRCxd1fVoyQXhTUtLxme",
  "key5": "Rb1qwEXSxsHtxJuC6eD1WFdnz1z514hpZTZGeTw1aZxh9jWQXw54gzjehwj9CBKMDQfZuim8sionuRw28awNSf6",
  "key6": "xSmhdN7n746Ryz5nzk34QRGjMQtjdZW3zUsm4WVGuQRwQLiryJoH3thJSdxHfgywjBjUtAeNQFnQWd2kj5K1bF9",
  "key7": "4yP2ZLnR4xWDRLG3GZKBp95chEd1Rqc126tqqf1KCc72TDwBMwhUapeX6HyBCRbWaNBftZ8rMnpfV9yNbbBXT2qX",
  "key8": "y3eJyrPqsQsVsgdq1xV1ZXXxTNwou7xmdBJEjvsxhwEaEq9cyGgPTmRcKc1G5oPtvyuBKzEwi3rJ9FZXfDZTdNV",
  "key9": "5bP1ctuM73HeYWvhWZKr627zrz72MTU6WHwEFnLgtmpxTz8xgaruNEzq4JVy4seTwuXdPcF9iuCNr4L9N4gxfuQs",
  "key10": "2Wo5Gusu8VCJBtYiFQiKhGnYZd3n4mkN2Y2tx9MvMHYVr3Zi5ih26M8qt4BHT4CcpJcYiyya2iygicXkx2bpWbMo",
  "key11": "2YcFhwj7JwKwxH4iQztjr5ARKPoC43dfV9PrcFC3vVPFMayaZA7gbTt8yuWbGuBQ5DQoFhRZE482egZpyB7AVvpm",
  "key12": "GBhJ1EEdYfpGhZDJ4wwfGJBF6bQaeWrfJZu7aPnwNm5F3Fc1wUsMAj4yhUNRtTusKbxR5K9RvmTeitD13zMLvR4",
  "key13": "5RJM7ZSAwanfyf8sUmqXask6Bkh3R4LfJDeZAtsLLCxSSJaA6fxR5hMsV1gv6bZyJp8dUrijNofqQUwSFUZobYa6",
  "key14": "4MNMyvzfT8WJMUkdTbZF3Pbje5DfMgYjQUsuuoo2x8JLy9e31Xo1HYuBAKzGFmgBUs4XAiGDsdB576BsWjDdTm2Q",
  "key15": "3Pqizst6hw6PNTnSCh5tbYDuqVEnqf9ahgvVpNMYUvoQ44DVVgWEqzXBEY1mahxL5gm9cxQtrTpnNLraKZs36gYk",
  "key16": "2EYcv58k5EhgswC9tmi6rrMKDBURuQGH6d3Anfo4kdYmToKHm6XrhSbevTTiz4hrk2SqwY4rfy9qa9CwXNnFMig9",
  "key17": "XdbhzdbrRYVdi3pyyb8fQb4ksV7VZJitPbMR1mcekT2iYEDR8NUjWmCJNXXmrdc3jrjnUkRjCvoHQmrnwcajoJ1",
  "key18": "4KzeBTBCvXPR6ye8pv2e7qFiW4srkAqyMMATYCz4F1rTXmYt1eeboy8pSNNYzt6rTtEn1y49Xwu7aT7geqZoAYYe",
  "key19": "MXfAaCRNVAYDhGTJxuuhXB5y621UKjvx3e9AYhn57JfmLBfxg4UsEQmgeaAr7cJe8N71wh1cfp83wgTUPFwvDMV",
  "key20": "4HKVUbRzRjDx7UYKidJKr6L7Q7A1oVtKtqgKYpZ3UZqsKroXwBGdSor2iFvqYUHtxoM4gNWfSWDefP5Uw2HJ7Mni",
  "key21": "32jjXUHEdurpRkd5YsxivGwnNnCqjaqRjBfL6pEBKCTSMJJuXHMroGgdkfMNp2kWBDsyQi6bdf5DVrA9WX6f853U",
  "key22": "4kBBTwNhC3VgtfJNmHvTNnMwMTtsGKW7b2HERvvhCPgh6F3FCcmbbPfUmWWcZ3Ma9potNcK5sa79bGsv2hpZQmzF",
  "key23": "3kmZMTU8gALL94hXkNMYAepMViWXs4EbnuTZY5AnzJ8zobFa33v4SMk9pq3CxVzcUt3MySiGm19jsErtx3sPn3z5",
  "key24": "25GNSRiBNfFBDDw3eezPUEbKAgMQjFQekr7GcwncVYEGDWDj9FGTNg4koVbXkqgtTNNogMPYVK2xqZd7JjRS2qer",
  "key25": "33B21FnMkN5qvcvD5t9jTyjR42JXqUcCt6GRPRr5quKxibaMWhJKzJSVEHdMBiLm1nXX5EqjTYxkgxq5FVmDiWdN",
  "key26": "4uJMENdKXSmNDc4csTfpZzNSEuVsAGPp59iaXkvR5JxpJcidCJVf1K5USNBeXLfYo8WKnRpZefiPEs55Y7rwfXTW",
  "key27": "HKC546A9aMaFhCMZzT7Y3yG7P1qv6SXsWbmqdXYYPRtpjV6pNrfSz141iXiyTHqftQWwTrcmddMwN97i7EVkXwd",
  "key28": "2cJQXMNtkjZahzYWLPP6fr4qJJ8z7eF98tQq3wn8yuFtgS6pCyhjucJv7aLjuK3WK57oqiLVyQPNKpMcKR3DnuMz",
  "key29": "33KSHEpp2bfLhtaJdHGBg8JcJYbyn9gZuiqs1NpZEGKaxfuX5BEUCtZik7zeBFBAFhTas3FQjEVcs88eQDX6jXnD",
  "key30": "m6ACgmv3hsQy1Ranfob4MbA4gwQtpvDgYTgQRFm9DsUKxB9Y7PKHhny9qgbVrKhdsxrjaUbmZiiY4q3HzYiPeBj",
  "key31": "Tt4RWmDDNBZwb4CNseJq7vSryqmTpo97QqswBQFQduz6yZzvtJaHynddbAfiL75mBGK2WFR7nmqet2uQTHpFNcG",
  "key32": "5GT25ZjdbpWuDXf9pyCgATjPoPciuunvPjy5xYphv1WT5qF39oPddPvWixkNXhHB8bcdvT2ymXWdgsuJs2i5HAKi",
  "key33": "4HxswT56EkR4MaKFhfTak5jwyZQMw1Ncfy3JPEhsp7XUDTwjvh1EtjYY1UTUPabYHPSZ8DVd5KCkdCZsGzzjxYae",
  "key34": "3BeFmVv87dqvx84yy44CzM8rDJczy7rxqxE5MSETwgyKptf4SmcRyCUjL7UMuqRZFucFs6bviv4x8hMdXaYp25bM",
  "key35": "vjeFtXUWbP65D54mDz5qhCHEPRb3yU1C8Di2N6J13Bg3rLL4fu3ZrZMneTSZwHG6c1bE2WwX5GZ49jMP7KngVWB",
  "key36": "3H5YFej1igJUgXeuGirBzLHPiwYQMzyN4AqpQZ5ueMWQrsstep7dFQbY1kkJWXjrjV1GkhQnYTXj4Eno7pC2tojW",
  "key37": "bGMezqfrAGWp7K1apYLCr2WzjpnYkDaKsQzFyDUGaKByW6Wc7LwBKaCKtZXNkNp8BKeNrcAwwYZw5i8odeR9bW3",
  "key38": "48AESTTi2XznQcUeUeszJ9RSXkXXjKUJr4YJMuDTTrSWrF2eqVpszxLYhJTMTZDzSH7usVY6SmpMATsdv6JgguW7",
  "key39": "46RaB1pjV6jvtthsmYfDjVfj1eKBjNV1tNYp25cUqjsM86NJGJ5e5VBLuyW8BJJaHQjMng3oWxQQTy5NytpzrzT6",
  "key40": "Pz5LMBp9VxAC2xKBJYmrCBeF2XvQKUn6ABaG4eLFxqAksMeWmNT9dsXkVQtNYoAadriMSC6tQ31kWUTpbmXCER9",
  "key41": "4NtinZNag48wbg7AzZfsFK7W8iL2cN5RFEb1HQETNWVokkVrsmxa3YtGixNyZeUAb5ZwfGAi7qS4CAh1qH5RdmHh",
  "key42": "TAUxb63k31PpZyUNgjJwu9gpTzBHTyLABcugrxnGWxh8ytirSqtAS25bTuxUpM3hRpH1mxFmpt1qwhgsvfSm9xk",
  "key43": "QKpLpMECF3UqVSh8aHX5pHuFMUoJv3Jxrg9t7JyasDK3ayZzT7M6tZFGNHjmv2vxDoCeB6BuFUpwyamDUvXSJF8",
  "key44": "2T7kAztErgP34QicFP3xxzqsfAR5s5nbgdaLpkxW2WLsEb1BPs6HJSYXevtWi8vtqjN6WeKaxbqWMsD3Cxbn9kzu",
  "key45": "5ASnp5q6nKCoieNivq7nEKEqAkoSuaszvqtHBUfUiNg1irwA5UZdE3a35BFfc52S1J5JJnUP2caynQFnLuamU3s7",
  "key46": "2AUFiBGvXLENpxzo6PawvecUT3BuqnMVgWAnK5XFTWonYHJS5ir18Xw1QfXqiY9QBDmBkPwRpW2dm5b1oS7465yd",
  "key47": "2fTdScY44USHSW7xawpdGhQYjzLa26WRGmgWMwSWipViW1KsVb1g7cHDDJH1d7Fc9rJxLjJ4bNVoUTtdiWYjTqLt"
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
