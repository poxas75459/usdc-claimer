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
    "4xCJDiifSqET1UyPWnAWEkvqBde9WMJtj2AERtujSevRJvXCJoHZVTSBUmjUq3NuUJKX71yBV2irJ2mwoKLTAqUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hzfrWKJ1sCXNEH2Ykj96zzM4q1jLYiWXfcwj8rur6z4FJme4Uvih298VeJWzB7KFnEZGS9H2s7Vwhebyrt1odmd",
  "key1": "wJbXd1Uv7oHGPtu7Z2xjLWY59nx6aJTf6HxXDzSqy6EFqrKwYCdZLNsCWNugyPzTgGGRHSu5VZqWzr4jUGiSLYU",
  "key2": "2sEwEsNpLnB1jRbCS1JhCNskyX7b38GEf4PeGEpZgwd3Tcf6rTpXuCYWzAsqAHxXr1S9enRm6rtPFALgfGRi9rQz",
  "key3": "kG3vXHmBPDWZd1pT5R9SRZAubgPWMZfrqkRaYvcCVENAg9CBZF2jNaJr5xgAErt2UHfEkBEgqyy126pmjnSmxqa",
  "key4": "nuSuwqj1LuT3zkDRe6GJEoHLUtt536isidgnHTma6tFY31wkHsd2BMoRzQxXdCbth5rZxBKPzcuVW9vfYkFwmSj",
  "key5": "L4oJLWENFCH3ykmgWD16YkLjdqZgtDjYzrPfcBKvTfeUZMP6CwHJyKBpYZE87hccpuD2vxfmypPDoLLJrJaq36h",
  "key6": "3VhLirABgRPAif4oHJTzZK62YwTvXQG1XFUKVFYBptbvSbjM6FFkUUL14EowWjbMTFMer5HY9g3te7PHNi5XKarv",
  "key7": "5mj9qFa4U7W9oGgE4DYvVpaVmR4wLmPyC1UW4QoS5uQPwaemR19HyUjA6Dn1F5DABtZ3w2ctKAWtJWmj4j53z2kK",
  "key8": "3YusCnBarfzcAytWiX5LuKF2QvacciMhcqtjkjeWs9kK1wn8BwfByZ6BDWAGFQbcHhdkzBwY6S7dq4RpAZiMy7QE",
  "key9": "5UcQQ5KG6jUnhUgEc6pp4UMVcZ1bizvZmEnSpD33r16X1eWmK5o55JjRS8K79w8Jnd6fZDuNWE8U5jwWPHywL9pu",
  "key10": "5n6Es8xcuiGATvZZA29gFe6rU7bwkMSppak2KWrLQhdqcEugiPuPWXnqHz4KbJnRQjhvyXUx6A7c4ffL5D5y7Ued",
  "key11": "4intzpFjtZtEJ6uN3q7n2urhSsnst3R3StPsPUrhgLTGvXxktiPVjiUZUecjygHbH43BgLXB35RcutvuWccjNxuN",
  "key12": "5n2sp9KnRfyWppX5G67Nof28p3w4Q91oxrqjhgiZfZiUnWdb2ZqWZrS7LbF3vPQ9XFm69Zsr7HTTYjkaRN2CjBrp",
  "key13": "5qRtudADBN8jNkNktEP5fNwjNcfLCJbyF171xpd3yqpkDzJTbNwHnkEC2sJaZm16gssKj24XzbnsaxEcKZ7z872S",
  "key14": "4NDoMwPMZ4rCcdhK5Yogudi7BLACDbT5WKeirCf5bBuSLCRpc6ucabGKvETz9hwZvYjBpcRRjF9YCb5kTvuZdYnR",
  "key15": "5arPUbYCKmWmo6P8SZf9gJ1WTSyneqaQatdHyEqnMNMLUBMyTPSV765s6o3uskcRNJTBsboEjXfB1zpBNXEcoeHJ",
  "key16": "3jzAfsQLCZ8XmFo4AeXtTnY5Fm14yqD1LcLooZPPeMzUVESk1JSGkcBfxS4WFFGTf8K2p2tzSsC257bqUfiKP5XG",
  "key17": "B3nhrkkux2RQhQFsFqfTf9PvQgX2qrzL8U2KLik7kSgi3JeGit71NtXM6hDR8UjTbHQ5nyJfoHLehzZuFm7ab7U",
  "key18": "5u8oqsDwCwGSM4ctJqMiJZ16y81yXHi9g6NpJSJBxnt3wjNEDV2DxMyhuJ32a3sZHBPrnWzj8ThSYWXb6vN6Pds3",
  "key19": "4Wz4btKFcHEsEAZDy6RWbZwTsojYCyPB4fKoBbRc3cqs4rmkQgeM5BLVXJn7gXynzH5QPHVfQ6vafZeaavsQ6JZN",
  "key20": "5YGpdaD6ZbKqXYinogFkXs3HXCRHrJLv9dy3pKSgZ3HcpKE9JKdaeiyHjN1ctDJtVpH3577kb2nKSuFFawyjQhWx",
  "key21": "5eLzPmExorammkdaejLLuQg1DkoSK2324sRu5yCggYJRompSnKMWKRJ7jnkcYKy4yQKoptUuDF67npLEvEbkiGGb",
  "key22": "29bNkWkh5J1Z2HvVpk6irmSQi3fAxBpd7R8TfopzCpAAMLaqxTVV5Pf25hCCnCJdmgySHCu5hWeijtzTfJ7Rxior",
  "key23": "45ZtQrwBoVatAHs8X4v6e2y2PTFhVznsuTMDVXMANa8dHTRiXXyD2DCXeXs4K2tgSDMtjGacK13b2M4hRPUtEmh4",
  "key24": "2CGNeJw7GQKhRNMXdCUfhuFzj4EytB9oNpyhC4T2szsab1wFnKJMNPYkWxc7rz2DwWGkmY4fL5ykjoJm7NfX9ur8",
  "key25": "239mAGpYeEGUT2PpvoFBkfB7jywNe7twrhrEkhyinvsoZ4zBGfq6cwWndHUBUiQLw3An6qqaWaBthvkyuffLW9Tf",
  "key26": "3TmUgCVH8aD22URSKr61qSuroTTqDTnosFXdPB57i6JBSqPDBvjvb4JWoshofc4LSo8XnvQPmQQJ5HodVNo83Tgz",
  "key27": "4kv7eT7EJutEwtBjqyw78j4zT7ndWSFuzduvwF9KvGYNaQ3UJvAE7KTu7WTGVw2yPdHEqUtxT7aFFdrXifMDZ4Va",
  "key28": "TTcypXHR7TnEDag6e84hacG5iPKKqFKDUYUUemuAHMpV2XYeFn5p1ozQNztiNWavwc63RK9kzJzorAmeqyjG6wF"
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
