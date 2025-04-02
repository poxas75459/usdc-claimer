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
    "245EajCcQwWjmE5jHF71837kABHbaTNjUxFNNwKrnjYr44MYuSi7m9FmEhWhes5x6uVkxfw4WCvqbTWP7FoHGFMJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vUrgTYbbQ1cWjnfty928tZV88bbMYJPV5Yhe868Zp5s3cE7qJaoA7ezE1Q1rtosoWfX88jUfK3DuAJ4riuyMfiE",
  "key1": "4kHWv6wy5A6XE51BK6fmWh7DfJ7SgdZMEssSasM7obHkfypNWiuzTUMXZvFhzH8LddzkBwvc5Ubv1RdDzvRTwcDZ",
  "key2": "3vesgPv5jd9KL4w7qdpeYL5nbEvUfevedNJNjp3392nYbrjgmBJ4DRV8TsScnFd87zcccHwYwi5nUN3qsmoev8ry",
  "key3": "5TPFPHXPRhxTNBVs9dE3Y7Y6VugEHPkm4DusiK9ZxUpxc7SbrbCtkjjwhg8526AqR4EwBT7RA47r1tBiwXcARWn6",
  "key4": "5gs7fGj7ziuFmSg7ch5sduEXhb5EtNVLDVJNYkAL9NCQiMkBfZ1wyvVoo3HH3Yk2Toa14WjL5hbQEUWcviCWtBZU",
  "key5": "4Jg6JYRk8E2CaybSNgtmnJmoTYsCawwuPvk7GTfoLL5zFtj6xKoMdk9gBQ5ucKR2RNDDuhRscWZf3Z9FrgRLvHRb",
  "key6": "321iEicz64siBcKpJaNQCBUF9LtYRnXiRz5BAzVWa13xnLZwRahUujR5saQhW73FQfzXL2hztGLBcSKHu6qMCLoh",
  "key7": "3z8hJKYmKPav34EVDW7rM5Evp3YLvJM9w41pbEFAaHUWcH3j2x6AjL9m74ghB7BcDKaDyXubtTW31LpdZFrbsc7a",
  "key8": "25uqwYMkTZTW1hm6FnM6qHjuzzGQwwsxUPDeSHpuzir3MFdJaDXMdYNiARBXFP93chr9TGqWduLdZdcXH1YtwKM1",
  "key9": "2dJ2uuGbvneTt2xLv7TazMdhfbGxyzMvrSUNhUYxNjavxWXtLcgJkMLYfmXV5xWtvcxbzn67PKznsJhytmLswQEU",
  "key10": "4NMpLSYgoW3BjxEg9G8hY3DFvyyFgfSHWD72driUD4zxZedqCTULCWBUqHRjpQK5FtyK5oR3YKFzS3SJ67YQ5Xg5",
  "key11": "4TEKhFKt6XyEQ88HL7Ahh9wr1gRQR9fhC9i9GRRs26NWm16Atjs9ckqw6g3FyDMKTNNkM493EJ8zqRUzeXYwhMtj",
  "key12": "3EuKTYfM4KohVnSf5izh1zAWCsUpk3VaRGp9R1iaxDLEzXjRD4sSdsdJWKC224gDk4FiLiikz21JiN37FxHeJros",
  "key13": "5iSVpPs7R4DmLmRVVT4UpSjpmGCbDxmG9gef1f3GUS3bHE4RE4hGUU9QN62uf8ejCHnx89nPuWskHRCTDAL9jADC",
  "key14": "cnT1NBbjzKXk81caUPZoEhgThNSf2YHkMZLwYoUcMpavD2o5KnsqEmYvdqCPdTbiGHKyUbJCThZ7cju6g9TXpEF",
  "key15": "24ZHo2PoY2RjY5hxBxtVY8wjoB86xcSPawetSvHmSAtFbsdxovrSEn85afGCxHT41JJdRmvA4ZGJscz9K6Xq1vF6",
  "key16": "2VwJP2BS7b8zXP2VNn5RL3gSMTtYYcHpJDJNFgKbHzoocqFFGHpXR31pBeZt91EFBu1tMACNqVo4LenNRVfTwANx",
  "key17": "5aGDC5dKshsAVHhg5VLAxnvDQCLCaSFTPdLzHeHm8w89GUCBFe9L6DsshRtAPt2u3wfUwjKz4wiqy1rxjHrbiJmc",
  "key18": "21UPNhdmu9xr7Wzf2wtEruR8kkFFKQpn7TeB5UsAMxBdKoAEXBvKbpVRhq9iyk8aoHUQWGZX6reWnu8EjDjyFio2",
  "key19": "37M2qQgJZB232Xgni6pDxhgpo2BdPwjrTVunUB4yUtKQuNTEr2SzSF84zwUkZ5KyKZSWnQADvM9ukhFK6erPZz5A",
  "key20": "5ee1pszs6KJsCnZaFy8xG5SYJLUWgm21tySEigmU2QiVpLggtvPkLsMnxPDcaSjsAJPipRu18tX7nb36FMjBKhRw",
  "key21": "39FiHWVwPKJEBEmSU6mVajM8eN45CbJd97JnTSxUuRTqQZpshG1sMsZiBEeUDv5PVqeGz4NxGtTJckxUeYtK1oXD",
  "key22": "twWAAGbLYU7fNkvhWGoFHLRbajdSFFQei9oacjh3y8yyPpNuQqWBw5C8bRnuu3JhJTDSuavxAo2kCuo3QLGWW6R",
  "key23": "4tRTVD2o8YR5jqmbFgW1swDAtrGcJ9wmkkaGVf8eRVdB734atyL7v56rRNdThKedE3ycGQHaimgtiVxAKTi88bjv",
  "key24": "2Uwkuk2ExUjPz57sn3vk926cZdqT3vKVm1qM2WaKZuLZPKJ4dJzN2RCFD67sgzd7yf6Kiw4kbDmrBKbWxuAwnm7J",
  "key25": "3mbBeP19WgHxrsqEhB5e1aq1RhNx1y3MXy9LG6atbftJz5Me5eX9uguSACFhAr4avEATaApAjTuKydSyYjNyTstk",
  "key26": "he6eiK8ZgRZn4xG4AJtAEy7ctXffVm6sWGifgAEH99jvP4fHzf117ptzbpinqk7GSHy8JdAc3xsCcypMxrMB6tb",
  "key27": "3TyU4MyguwX5JoyJBN8RoCH3W2K1p1CWGLGqGQuVrTbgbQ7mmNFxzdbpGEdXbx4pHmvhqVJU188a3jn5MbxvmfHD",
  "key28": "5xnovxBkXVssgKCMrcKiFnsK3FXmNCeec9dgXUZhXwUpZv6qUzrwRxSE9qu5YQk7p8j1uTWKPExfkSUaab1FnrNv"
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
