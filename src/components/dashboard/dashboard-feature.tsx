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
    "4ceSezZj2nsgAsbZ7qkJhrgCnqwqY1t8nVEz8cJ2SMxfG3xA6rHFzaeFS67zv9mNUK57gyvT9kcqmkpYMC7H9SXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pK55N6mCRC5YbZJ9HyNRjsJLJv6av8cxpjDSAgJJ2WxWnexpdZeCEiU7MVtow8sRYhMTUpAF6vv5fmpwPnFVNg9",
  "key1": "3oSpXwSfYJZLTUgQur5s1nnSaD4sgraxpG9AJRHACAHWkhkN4CKtf7dBAjLuMTxzuaDfRwTD9fo7Pjj9iqnDneCN",
  "key2": "4GTPQR33QbbtvKMvfM38zqFEcP4Rsv8bQMG2vKynRYSDRtdYWyH8b91xWftXu3bHuRHL4jUwV5eWTWJwzBaGLMZQ",
  "key3": "5JdxSjPJsVJwqZS6u9baCjEnNFVYxov7fkj2yux4MsfKni9E1KrxbzC8CrzwbJA8ShMwMA8Zfcz4FpGh7EGBjV8j",
  "key4": "ZoudBnWUd37PP6hb4gV9r14oNS7t1gam7dUEiZRvFSgFrFU1FtaQnyTq2ceFxnnCZrV772jHrZbaajZV7PmgBQh",
  "key5": "3rT4gFy3a4XNEtz4WiXZqQmR58LttUwwiPMWyjrzJJaLqkuNUGBgZhTJj2b2HapYUGMoppJtVmwuiVRtJRk41WwR",
  "key6": "3kUd3vFo6cerTNaittAhfUAAaTnxkQksbYUzBGJBoqKBo6dEKiXVGfDJcuU8YH3GfwjyJEpvP5bLi5kVPsyJsqV",
  "key7": "4oNeH6vqu1Akztd2WopCWLeos6oCpUQJWJGfTQTzhBWXbu2ZPjkT9tpJjLW45PLaqBWFhYaewthSaVFeZ6y1WBNd",
  "key8": "2ifxCsD8ZfByvAK5T4Wv6WZPKUJqMdM1woUWtvAU34pkqzTfYPjtuEMgtKfKiQ57x3DDduqm45hpHLMEBZHSov3H",
  "key9": "4XWCYECukuPXQR9d4r2gAVfb7GULT5XaWiRHBmAf7N1v93vhsqkeNTiiLarw7UPz9PzajDaEihCRsbZuG6VhwDeT",
  "key10": "wLQgVzMPFXY7U5zN9S4Yr2MD7VmMPTCTkzDzCGCVUPh91qW6cgAHUEGLKLxsrogN5XvNFDFhuNhkzuGvSh4vJNv",
  "key11": "3YkgPGQCBToxGo2jCy3dWBEsoPNuf7VX2wm16iJCq4hQnnnbzAbGyyhSNaKNHHFbjiTNT29pQyZUk7M5aUx27Ym2",
  "key12": "2sJHHD2dyNbxz81GyBBTWJdakwTArvTu2y88dCnBLzhuWGTVhBD1RM2A3RRpXsCpiDAuNxSkW9z2taNA8ygUG1GR",
  "key13": "3B2Cnx4DJbkYJbKQKSU9fqMLF1gpn3LCh3pfasyMhKbWNR5deoUQFtV7LfUgXieUXPfTnCPa4DmG8HcLDxX51Kpy",
  "key14": "5xhJyR3hBZiU7PAwJd1fhP8Wjt2g9JtQkr7nKJKSkSSixNUEznKusjR6m3apiHdAPoFVJeDz64yiYkxq7WbJcHsB",
  "key15": "2sDLa9zWxzYubs1hTDomPB4TQYHX9nzhsDmQRCJuqqkA1y6JtXUoYg9SdTP8pQuKw16Vt33WNrYeMF2939Ma1PdN",
  "key16": "jxJiYJJwUzf26KwenRLzocB1ePD8QKcHbtEb3E2VyygJweVpjgznhKVXDYUqZusofJwzkTnsgPy4N4tvnBjDynk",
  "key17": "q3UbPH5GRdiQMUbQ5DumHdU7zLkyYm4vtpJ3uAV6SfdLMBnjT2V8abVRiH8buKUpNWF3k2nhoWF4FJayEs6eBM5",
  "key18": "2nga37WkygmiQTC3hwDeHgxE3aSnK4WgBDNDkhMpCSjbzwBa4LAV8EHWbkhMjipj39RAHAKmoFHnPuCjvNYmDNPe",
  "key19": "2dVwcpqiueWX9fEMXmwANGi2zgp873CHcyaoPtqGKD8FaixwBcS2fBQjXahVggt88SKSfqDxs8PLf8sy1gpQWJui",
  "key20": "4XfV3tE7nXXcp7eTEnvC1gZ76x5FXg3Ufqjqc7iDJ9fJxuswsYmJWVtW8J7wZKHNovfMzzT2cZJz4sCDVGiYfmZQ",
  "key21": "B1pCYMsyKW284U4zkN4LajASMd6q2Jyws3WgRuRyt7Jfigb615b2jThgB7qwhCWhXUYpTPf2rPsszpLmvBftFu6",
  "key22": "3pWP2GNZZWYuDZusn52KoxEJbf5AyP5RcRUpgbtXusEiFKwcnpCSDWV7XA44wKJ1546d3A2CRogRHkU9x6TQz6kp",
  "key23": "XAeKktxE5bg9UbWKeQVx3vS5NB6MekFpgMHizrYytqsJpybSNuRUm6zrdHddpMHNhj2PLh7win96dnScbRwbgat",
  "key24": "3dZxhqbCkRv8U9M2aKUuCJ7JH8JhmK78sFD3HhR1X6qiy18qFaXCbUPzrv4MpdupDRSwooPhpeKh5DwcPyAjyXrJ",
  "key25": "5hdBoJEZ2E6dp2iCHBwAULwk6htGvmzD8pdG8jhD3afytLbrCtaGW8vLDdP3cjHVjTogGZAfyuSJtZxqumr8Kqq",
  "key26": "4UAvxzJpzVZ5BwRibgUJNAd3afFGsRoVVWywUDYsrZY49dzofz7vE68eBnPSLBde21dGdEHjKZxTjSzftbgWnBXj",
  "key27": "2bUdaN6VMogx1uAaUPao2ZrxkXPwTSfDioF4Rg57vMBaXPEHkX9559f7JDGhf5E2NLnxPUtBwU6JYweudE3kZ6Fc"
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
