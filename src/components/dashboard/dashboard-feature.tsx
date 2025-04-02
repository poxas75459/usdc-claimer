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
    "3dhsyirmGcMC6Fq4NYBYcteenVhs2ztLXxBrRz5K38fLB5rfeEdDkbwAMhQVtnuucZBrb3fxyX2BtDD9tAQqDcJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1EWALiN79G3EaBqJP6MJsCYrWpYLDS7Qz7ifuFpcJ6t4WyBjDFyAuUmeK2w3K5aoVjdgXzwc4vHHHqgwQ4w8SMk",
  "key1": "43sbSTQ8KCLX2C6tarCzphdr8UqruyH4qCghRPQLDBZErN1fRnCToKrJELBreBaKMV3npYfod8gEFh9cRQKfYv7J",
  "key2": "2ZhgUWtKBDpF3QsNVbvtPTH696nsXfqntaVMa2cN8D4gp55icqzd2nXRWn7VAZT6RQB2hNgShpXwsBDACQTJRSu9",
  "key3": "4PfRJANGDttZh3Et955DopimJTgjUKsn9ZeCAyG5DKV8A8AZNc9usUiCQ8yqVhAjPFrhEbWjc9MpNasEFbjWTyKm",
  "key4": "3Uno9YeMnbhzMkLCBXmEiVKyCLNECqjeLScTBDS3t9szR4b3xJxPHAoD8G5uUFbNqxPBEFnizmoFU1ZMqySwLRR5",
  "key5": "5RYTnntHRDSn7LfSsaDkvY2M28B98ZDbjmAHUfxQ5SkMF1eNx6qFAJht7jdojeqxpZ1kJhp7z6pDvETTf2m5HA3i",
  "key6": "3uVyFwnSSXMZi7bmRdA4SwdaVg6R3KmuRmnh7A2Z4AYrvZZSfJgywkk5AHoSAPsgZj6pweZrasunKchneNxcWdT5",
  "key7": "2Z7QuoXf5bJN1YtMfQptZGEyo2CskeD9QZ2S4YAn98nzUGjQjNSdrSRXDf9Udhjkhg4eTMRujkfzmkhcJbSuRXhD",
  "key8": "4epoQ7AG8WzvDhWvBzqaLyDWJhUTmuB2efMNXjEn5e9fuUu6eSiFoQz5Dok1Pqnqjf9yio8zs9FeGxym5wdu33Bw",
  "key9": "33akNNvsdu2XU6sTDCJMB7uVcow6LWrGzTSzno9bX1oZZPnzboyHtqBA8SfJFwtsotPwMQ9f9hy65Z4n4PUKidwv",
  "key10": "5LKQ6wbbpSKKLxHJz2b5yEHsezvqss3p9szEU5kJbg5GL2CJwE7HHdCj2Tp47MHKUC77qyz3e22tc1edudjrfueM",
  "key11": "7RCvyZsUqe74gapPYecodoZx4jTxAEKiR55cw4KmH7UJBhaYn5m3wxC68f2DiYJGRxXrzggZE7htxMDg833797N",
  "key12": "2hT3QSBbdD1NkFj2T9ZB2pZuhVdnLcDDP6E4zw2HYkyLsAiFFzi9yhDv9J8NwgRgiFA3Wttz1RmySGHDjMNkVZZy",
  "key13": "2LmcaVm4W4UJatndygjES3UewvvsA7993p3aUtMTymm6rRB9DsPag7Bpponjfw2ip4Tr3bpcq3RM6siCFtWHMqsL",
  "key14": "5gx67yxGXRyyoUxZbRAAYbVtHRUAQAFDUWqhbADfaw6UjoY32ShuKWPMdwEZ8uKuwm55MwuF1aG4gA6oH7dzrc88",
  "key15": "4Z3H7RRxd6vQN4pGWuiJergyKY6GdWoi9mqBiSeRwpxzxVY49HPUaPevqsJBxae35LgAz7XGKrq7qRShaZTFWw7J",
  "key16": "PF8qaNSusk3HnQCw1X6zVB9adVJgvNEL5hP5zTbwhnoEdYqTs2ToH6rKAPqSXHNm47RiAZpa33RQUg3T3TwLbCp",
  "key17": "zT3E81DkNw8rWUpS93d322yyN2S6BqFHhibwau9PzjbKX4itXo7fQruYNm9HasWGqVkBxwYqKta3tgpKhcDqBjq",
  "key18": "5C7w871PYPQm3htXxriMB4nK5EeyhHAWFny2NENnHDe5vHNs47uv2YiDVtTGGousuCrp5GcXN35gSgRPtNBp64Es",
  "key19": "4mQ9mLScWheckS9SaXAwBkkfvhtXPVESg5x93MyELEsL96L4vow4wNt2LMbygGgoM5LVZdjGGnbT7UF9z7YuQnnS",
  "key20": "237e8ncb2Qi3yPin4763JdLsjbzbBD5QVVR7QwwaKq9HgipPPs8apbUANe6KJQfaLR29ehKQcs7Lm2J4iaYxLp4e",
  "key21": "4i2vjZGqwRpAkNL9JJc8T4wJLcNcxj8zUTfmy1kvfrdCXMTvseaakhxFneFP7M7FPji8dKNa6fWQjg6VJuwzJ6Gd",
  "key22": "3aDpnNRtC8dgeDizMXVCZjiQqV854KLP4iaHWcxdUbqY8CGG57cstELTTD7L9KPBaS3oEH7SqxTG6a5HWGyaW5TG",
  "key23": "52UbFos6CCm4pfUF66aP7iR3sVStP3tK5rPeJTy8e8j5RbY3UCN2SdyR4bLr3aWFSsiucuYwoV8FGiyMugmELraE",
  "key24": "43P9Gja5KtaSjEp6LR22fcLJwaUw9PtC3KazmHdzoRJUrMA36KZ8Hr67mJkvXUe63YPqhy5ZXQHDNuRde9PM5oEM"
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
