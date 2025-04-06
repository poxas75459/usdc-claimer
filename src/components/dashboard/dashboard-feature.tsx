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
    "WWJwNkRXRQ17gsFhsYckEsPbWfiHDYxWBkdkqG5Cx9bXgqXUdZq8PzsGpoLDoSAzv48pEHSaAd5eCCGHLWzSWXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgKqybCaxFbZCeqWkLVbeTzAAecifqyauWyAetjPbuLAyeVYSZoyUB1jqHuR5WoUsnua4rdFqSvemLotmmYDmBc",
  "key1": "3SB1Pw877tPPMov5J32zTxTTySZvrTvp5XPnUe698khaRsExyytSDKt93iabHJRPtT1XuMKYV85hEaonLw1dbSgG",
  "key2": "3aS35GZSin2vLFreZN3iiJrQzrCdBE8ErDW5wKKM7SvHXWsQrgogGcNUgqZsRAk5ffyVseTNtwn29kxRyNNwrR8m",
  "key3": "36abhMYYtZFyfvekHmocsgSx1gyfCUecT7Xz7zfUsYNAdo7Kod5S9qUU8dySPkpJFpL47swjTzjNA4WoCvyAExgk",
  "key4": "4AHgWyuYddqE5X64K4SbwMHUtfjjVDjWghwFAsnK3sGmRSxSG6RaCgDsAkxeSoDddJdweaPKBXdzwgHpxTC24N1v",
  "key5": "3685M6Yc1mXK4CMAb7WDmAZHLVUcfpirDQ2PmiA9w5e4L3JH3dXDBywgMbx1FSmsWz5iB37yariY4cvHseuFmgQj",
  "key6": "5uwXysnsZrvCcks3LRMC55qSchmSAQq4n5a9pCJmsVs5MmoH6Ram5FFBRzqNMmmyU9oBcroGjkNoA8nMyy5LsMSB",
  "key7": "2YaExnd3SBEnMqDf9gxHz6Pxe9i4mAMesjMacdmDwQy9vAGut7zcMEGws59HSWscRxtcXF22Wysycnk4ya5KZavc",
  "key8": "4ADnyWhw4sxuNeYPaP6dgcnyHKk6e7qsc4N3H1qYfZsk3hbsJWyvPdBTNppvFaK8r4M3vM2GodNuZ5B18RsJ7kFS",
  "key9": "4wWB7upF9gtwPCaU9crEpS5wz3MqAVyTka7GygaDGSGZfNxT6tfAMV1TYUFKEridBYHA3QaZ8oxekzUZGvJfQc8j",
  "key10": "FiVt6s61kjW3fnymVsndAwdXoWLtGg67GQQAkoKMHAKcx2FhRakGfaHQNn7TR5Ga7WnoqFS1HuhR67aPXMWJgb9",
  "key11": "3ELLK5AtHvGEVHdCqYSB2M3bq57Pwugugvm6MZPejfsy6LDuSDETukYaEj3Uhr99GnWd3K81pFMhNmFKEtjz8jaG",
  "key12": "VJffqRdCH3LYrVU9Tbrg6SpEirGarW6583WsXjRM9xt46h46FSwz2rw5gD2YbU37PLxnaAJANxhvdYBrFtSDrqL",
  "key13": "4T6UrqSQmkFNUBXt6t7Muiod8yAgR21XdtdE1NhqqR1xN2BDBcfxQ45qUWNbNSY98rFVNCMUD1a3vYyYHFHbSe7q",
  "key14": "3HKLW9F4rNwpbADsDPbJFE9jFfDcmzeB4XxvRQRpspFxXmD5xpCkHWJ2rrcyoS1p849Tg1QVJEBiRWuV2tZzZqcR",
  "key15": "3vCDcw2SmAAivTazoLfMT631jLE4n5RtiJrCnzuV4WjeGe6xgNdnaasrXhRNunaWEMuXQjoAkPeGkoveDyciGhkA",
  "key16": "4uMiiEvDp99wyykYovuV7EVMnEMTdksee97miKQ2Tiu1Uhgwo5YynARpNVkhXHT5LWQsrCSFHLBhCKxrBLgkrNzq",
  "key17": "5oZV9SaercTJaTyXfokTQqzDC6F1oRbQydjhvZKSuX2JD5i6UKTkLnfdtJ6nqKjvtsa8D2UP8NXWxvjZZjU6xH8T",
  "key18": "2YxGZaPi4wsLkFsV2EmRhw8jid1pAUCwKSJmAz1bVyrxaymX8hGb48YuJBYLyeLq9erCExnsDZvDX5e42cPzfe7z",
  "key19": "5kR52zoL4APgPy2aZuUGj6A9kQCpnPYR25Pqr12TPxuyHEY8Fh67DoabGcHeaPCV1HtVx72KXPTHZy2oHTcko5fk",
  "key20": "47UyXgcGxXUgrBKZn5Ch6B9gFqaeSdnvW6JwxUZfiyhTscpyjhmFP1pPnY6wCzhk2cVeo6q94s3wCjsMiYKhKCc3",
  "key21": "3NHC7mT2U8RxAEyexwFSYzpgBzjJ4KqtWpyFG5yoAzg8VPdJYEUv8TKr5avJvQhRTYZ3nxQGvKFPsnRTU1HGkLSd",
  "key22": "67N8UdBqwC7nJAh8iM7M519V9vxZfpY8Zr3bjBEDnxWS6hnBNdekP7ZxbRJKFCNMzxw7nLXQ363MB8JSzcFPGUKM",
  "key23": "wKKhpytzjpPJp1WBYCLxiMzLMmxez7EFAxNqqd3bPo77yezRxzNVFqDAonn4pWvw49MfTb2zuvvij7PUJwriWGa",
  "key24": "2635ncCFwMTegobRhpdMZDRzaQBL1WXLRKgYxZ144P3vqNtjmJEGrTq7HaaCWBeskJErXYX4C2MEo55RzxjCJ85q",
  "key25": "3yVJoz4xowKHCEwgYw2X5vc7iNCj6JNH7tiXXCjGBe4YGfV4kBsV4sftRmUGExz23hjRHwKLiccssyMepnhyJ17D",
  "key26": "37tsFJswD1ATjwEukYD2hQRQap6rS9Vs2YrDBZv2mYVzg4CT8m5CwL8BHowDria3LPXmJmY3bQsPaadrsYqh5Ht8"
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
