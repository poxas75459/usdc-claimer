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
    "5bkN2g92QHufd6SwK8u7mP7bUVyaNDZ1WW68GfuE2Yx3gXGVBYckAp8QAtEQdKWfGB8bRLTKTLvjznyJqdZuMehS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "veQQLHyd2PRRA2qcZD4pDjybyfwgd1KE9i1C8vJUBPXMUuhGFgRAw6URA5YHyY5BNm9RYuDM1UGPzmQioh83sXv",
  "key1": "2asdziYFAtC35NW7SGinHMqFi5n5w7q5YT13THZvpJkQKLLoFKpCTXR3S8nqvbpj4r3sZVPE7kVF2LRtxn3GZEgn",
  "key2": "4zkroyEuptN4gBUpD9CgfmeSz3aQ9Zh6xKRUv7V4DcJ1dQeyksFECH9T5EKNz4kxaP1XfzXsy91LuHfMadnujJu1",
  "key3": "5Z9yyLSBXNXL2faxarfYLpWyaKWamYgKuvJMwS9RC43rhE6iJopXUwGrM5nCE4HxVw9iRYdszjw42FaTQgrLhrG2",
  "key4": "VuPuJrWxYsCiLwMpsABP9RMMKbdEDWfT7RjSKirV3mSRburJAHTRV2Tc1NJTPjJFecsJvJdA3v5tqUMicBMzbqw",
  "key5": "3nM4yc2vM1QpUypnWVdjRRQLPbNxpNne9LpA35oQyTPPoCYG3qpLJPMRvGme6wTLZJ4MsNQtgiytfkshcd1Rd1nS",
  "key6": "3waDFf9rPWstaMnXJBjTV8eX412tBMWq8r29N6P7KjRqcrJGkbKLnRwzyYyCuzeSmZNgtbZeMxF56cWkn4WCXW9X",
  "key7": "rkXYRNHcHZsLRvC9WsuULRnQbSFdGLWKiCGYddNEPFKgMfZexyT89vAeSF1yxr1aXRMH8Zi64aUTnUiGZu5dRq9",
  "key8": "Ch641wuqZHBQv6B1P9VRd1CrDyBUHBCMKtKuoYGVyauXRMp1nvELLnBamSuGiQvfMy2vtozFdcFtRmAA15TJHDk",
  "key9": "2BwZN5HGRMTDzbBigiKgTJRrEM1yn4jUh4bT1NtVDjULuW9Rt6PRrRRijnp79skDttKNRfH1Pw6MvaC34Veh7Vtb",
  "key10": "5Upgixtsyxsa53LC4VUAQ7R2XFQQUxecXFxicyC1XVLy8wLi6ApD75RKJ4BUGHANqLt9VEy1EksL4mc63xCcN5eW",
  "key11": "iRWnSm7wqhEsFFvk6EcZTLZ6mg8EVNmJDSqanCpMJjUBCzW1oxUdmRpYGnpp86tQioKg2XuCu8njdBkfSjAqid5",
  "key12": "2mZXyfpnxHkCD1AQmJzTPkTXUesBXfBWj2mzjqzDzGWX2VDbW2sDF1HJoJT6KSbcfjGMTvpUeA4Aaca5v9XsS2W3",
  "key13": "J1WtWjViyR3Lsx7ejJEpg6m9yvZPvfu847yMaJwjfmzs48iJBY3bnLixtvG8iLVH6V8FesoVknijPPK9EVxVuge",
  "key14": "3npf6HMznuE9SZNbRSoTo1fFBqB1W3uBf36jaU9xfG4tJWEZg425ccdCMBQbHkmsjSC8zULhN3NQ3pjPsyJHnNUH",
  "key15": "2C3f8kJ42SdtWPzn281V54H5XrKzgxHAJpfnHBuwZf22VsuRRHxzXKb3Egjauu1VNheCyTXY2VLdQ79FuoezbfmU",
  "key16": "3n1eYXFxsvwRhXznUbya2k2P3JFiiP1U73vvsVoNLwF2B7tACwaRKi6pMmyvBgKg8Vp2SBDEqHxCP5RqxE3xc1k6",
  "key17": "gVu32Q4pESovxdsR37iU1Vv1yTFQw3awMx8tu3hd9NG1NKrtorcjU3soA8nYKbNv2vMksjzzEuSbGB5qTcfQecT",
  "key18": "2YCEp1S3cr2tSPBgbqDJCmqTroQu37Lu6UBRYy8XgUzQTyrCzNrUnfWBqkcYoV3hDZr2n7usfMUWgu4re4sLc5hq",
  "key19": "2gK6BYS3R5WMWFqbgxRZroMJEY3umBnXTnxSm7it4KFJNgxFH78jtxbbut5Mpb3WvGQcCD2uwx2eBvVHpMEzs8UA",
  "key20": "44DxhYXhL7cUd4WPPYaTEvh6rfDcq3PQHWPqVaWkHz8kuFcoKmak8aZGwXZMgtNZmhMGgMbimU7on2ZT2nWCcgJR",
  "key21": "31YQY8e6u2TzG8PmSGV8u2dbQUkNdbkTc2e79H8WSqqVvJprQSzTa4EbGVLkkefEHS7ZuEqL9fM1JaQioBBXYCYq",
  "key22": "2owWFzwAnBXUXY9MYhi2sHKhMk6gy6GmcUXsgcS6BXBM7HpgcRBcGRibaFSosG8TXE9qPGg2Ysq6xp6qr5eybe2b",
  "key23": "5kbF6gDyCJ5n8VStPJKtTttxXSzxunapToxnv88aFpJLsf4e3yhH9rykopMZH7kvy8AchJHe6A3judZj77AdqQtr",
  "key24": "Wnf4TuB71WTQGQdGmmQQfV1tEzpGGkcuoXmvjexysxmjNEuTbMmZejJ7gfExzgaWiNmbNHUDzLbR6MxRSohu6ap",
  "key25": "j9Q8sjquxFwCpiDd5EfPBmWJMcDEJtSR56A5pGxeH5KWjKgW9hdXmtYcbgb6mEffUwNbozyYZ3mMAFnVPFhFzy9",
  "key26": "ShQoYxb8vJT54Uvrt3eEY5gLytLnkKDGca8E8Z22feoZV8zkkd5hGQjgbL3JkNBDJEonVUnQqg8Cb6Wfq9GvnSk"
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
