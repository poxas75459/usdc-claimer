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
    "4fPUL3D9iiYhXS2Y2NW7cYKr1bHwKaVa1wwbRLbAFpZvAMKZip296R44eAbgzmcfDc1B2noJNhy623UhJFqxqfF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wb1ZAqjTMf1BZEbw7aV3zjZXXZEg78usdnJdFKBcV6tDoHD12Sfx2JPyMcfR64JcY2e4GLSmYEv5tBcQbXPmm92",
  "key1": "4YkkxkT4XBoXkBFqqBpw8EDgjwEJj23o22yr8pnAaLrdeV5pSVCyYi7YihE3S2RcLSvijcb6XePdfMDMXpYrZgeG",
  "key2": "39QYwAFFVAYMkfuVgFBQcQQn5u91eSHyiwedknCMPcN7uUvAvBk37LTN13KZYc5ihzyUhJpQSXLxXeJ3bp3dgobg",
  "key3": "2339zzvuavv5mXUpNTcKTYFsQQYiVjJ6PvKiBCzeWQG2Hj8sGQ7h5wPrWEgrxBWWyA8MQ6aTzWVeEnJaM4K2pCi7",
  "key4": "6sZMK17LmioBLJ1Jck3skTSJ5uBiBuVaEVpvyyTjA4CY4MapuFECfD4KM2Fj7KpgMTWg8orZ47YoagM8F6reDFf",
  "key5": "5dBmNChHaTRbsnofJFDfvuJp6KdYfFpCGWTgL7nZpf7rms1iERvyS9gdTVfZoFqh5A9kNwK7RGi2t7QJuhZRE4a6",
  "key6": "47xegmNNmzgRtWx1LXEWiBMpWbwTkNmstvF1W4vyNUwvwqC147rYXTfH1ZEm7KrBqJhxrqTpG2BEuTePKzBzPMzc",
  "key7": "3fo7fAoaAPLLBTu1nZAQKb7qkVeMkMRB3YYkspP2umEaKCcvLcfDVBig8bMFwvDHdKfq7UsVvemb6MMTjbWqk85k",
  "key8": "5Mujwtt3zi4Ba3EPBunTsftxzfCKqXJAwqf42fuSLwGjDfzpUSBR6Vwh2J7gSTVgtkyPhTRuUUDEiWpYExLhu9sh",
  "key9": "5oMKUHApLM8EP3mycD8Chdj3K1zCH76Gejmkjsw9NhCecRNYWbGuJCgJeSVwUKyk7baSB5xRAXfMYBgS7JakAB7Z",
  "key10": "2NUR5vucs9fNVimxBFJ9KRhLxsG6jf7roaAcK5J8rnMLK5p21kHp1pGth45aeWcJknUaauRqSt6wALucDo5s3UUY",
  "key11": "mNMj6XwMHfJKwKtP7qAFzpTibxe6Hsb7SH276t6YDjZa6Cb2LWkZgKnS1FbJARpmkdNMSLD4iqMyhRaD7veB6G4",
  "key12": "DJfGAFCUkZnkoqd5gUUoUCzPs61iVSioQBEP1G1VxoZU5efy1LERGhA9Fo1JK9orx18h6Fi4HHaSje2opxvMVPK",
  "key13": "5F461Q1yahpAk6BkxRLBJExHxqU6RD16r1kctRt14ieSr6oh69Y9Q1Xjq3L3rHEn7vgzkey8sqxBrQd951M4M7Uh",
  "key14": "2s3PDVoPy3SjA3YDGui33ePg5TQ7cmFScSKhv7NXMmZGMFd4XGWHQGfeiQjnuudFKEw9CmHSDHRt5S4TmKuJrNc4",
  "key15": "2U3LhXzWpQd9SUpvV5AA8UL95u3DJDo3CiEAczHGjknbCyVtHAt89k3zqw3G1To9SWC2NuWJnN2vaxdRq9VBydZ1",
  "key16": "3EHyeYT3MBM3nPSK3vuAMfykw79wQdhUhcBKE6RmoacfpFrmz8rkTG4ojAHQPzCb5nkGh9bzt3vz1AHHhk4etXhJ",
  "key17": "3neES4ymmpobxejt6ZAA28xeStrLCyp5AWKhx51XhF6yAcW1dGytGzqLWf5HLdtxYn2eGnzMYrETRfuae7RU8HPk",
  "key18": "4MiJAQt33Ynbra72KcTBdNSYP7PEXbTua4FTgUgLjKxVh2QpYkjz55iKvhG8ut4fs22v6GXsnEHjML1ksfv88cNi",
  "key19": "3og2xgGAKNfEFDVVi7VJAxq9T4Fse1kPYejHEJCho6Tt9awQ3JnoiyoNJXm9117QjX7ZoBdXu6NM9UtXbWdzsbP7",
  "key20": "3CxY1oNdraBoAh4eZm4krvUwFCdJN9fzUZWfpEsMkkRtDoTKRc5GVSniiJPAuRgS2Le5UaXtJEM4gxfpjSYUV5ag",
  "key21": "2EFUKoSKV22qtH5WbdBtFeMzi4Y1GRUhZyqr2hmcP5km6daHcQBiyaJWG6RXQR6c2F5qkcSvMF9fQqUcWzSD2u4z",
  "key22": "qArQK75YuQFqS1dpE2pe1BtixFRJFk2tZYQzdnxJE8SBsvHJt6zFxNUKZ59EzAUuRcu81ich1QeLqaUCzL25Dkq",
  "key23": "5oSPNLV8iRfd3scXWqKXLSmKKpAb4zhZHERmFCaejSFsjtL7NWcg55PYCPanYeMhaZSGPXK9WcpkTE6ygHTbgtpc",
  "key24": "4ZnHx69yJJ3UuQYNRd8dWiw3ZRvPzzmxiNxjVSgoM8FG9nYffT3ycLNxFMGvQGxBR25ccV5n7D1pgyxbTjgVSDBZ",
  "key25": "B1BwdLNcNQr8shR1y8jV2jThVSLrQiFzTMQuwv2RcZ9yr3KDgok7B8cFb794ZonCSGoGZkigN4zero9pvTUESn4",
  "key26": "mjYsdZizLv3qCTEnvuG3MWCs5Xxz5y2PUa32BNDjbSGULni9Bgu5Q5Kz5Xo7agu2fGUZH7RfDecetpJ75ZYVS6A",
  "key27": "59xUh5wipgRugbDbh5K5pa4JQKbqQhhtrUKZTzeMRXtPWpW4ZECVYCWjh7Z7ZXLB1SyRy8gkMqM2F7N8yB7qovYE"
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
