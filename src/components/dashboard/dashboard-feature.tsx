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
    "P4jb4VXRP6PUbJ5LEVRxkFXCr8BbbMzhz6kfafySdsoaJ42TJkaJV9kMWP6jLUPXo927BT1BCSnUd4pCFKBNeeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gvvehSi93Jns4XBNQFs7MqmT6b4SwV9Zo7upjMenNwLuaVUhwAHaqw8w3kpTavgqQcKkvk4jfmN1bpsfSuzTKzi",
  "key1": "5omYpy3BK6RJYPmkGKu8Y8RJvkf1HetdmJhvPSkbvTVQfmET9SevMNrJgygEBS6pTpaHi6h8RQKXf2JpCdTYg33t",
  "key2": "3sAaXrXGb9CwRJYCCmzc8r2AyaSKiMkQ5MxzvqXspzTXJsgr3zM6zxFAdU75hKU4VPHVMPetRKBn2QmvEBgHXUiZ",
  "key3": "5KdEAiJvR271vR6SgkcXCpCRRuttchpouxmbzCjnsdZUFiLV5BrFa3vq74WQR3WNxnqGKWS1QZKzSkBJe7Qy7Dbw",
  "key4": "2NBHcbSo2dPctzZN7c9e7ZgvG9Zz5pjDTfPTiPyRU84ZyiFnXgvRusYJa9RtZ1SZuo7PaMu7j7Edkv7PVsuHHern",
  "key5": "2Db5qRirFX2xZywiuZQVM8u1k8hviDHG3kxS6uatqGjv2coDbvs4Sp6q9qUVr39N8ekUcgBpYvTCL1FfwFkHLzoh",
  "key6": "SxCgJaKYNKmVynhSVmK9mVh3LmbWZXif4SAa2at4B3Lhi9Pv6Y2sKxhLUfxq5qUdG1atXaCEDetycyyDGLrVbs1",
  "key7": "2Sw4d8zCyRe2JFigGYFEB4Kr5fjCu3nvtbyr6WVWi9pYVTX1pux5XriWh68S6sj7rWr4mv236AC2SP1Lma2cR4qf",
  "key8": "4odHBsnjyAswnSjFx8Uhor87eYWeBTRTCFPXV5zCktKDMZPyxKhN9njbAHzAdnqkVeshQnWf43fJP8uB7Jj7MgxR",
  "key9": "4Rur2bT47evFJvvgymLZXzdPMdifjQbkLJdWGtvv4dUBRTXZFPVm1wGUxqwVaGpjV9BQQbFa69qmLgUdEXpTmPqx",
  "key10": "2xvLHGt2hXz6EwvXF14o5RjMtRpw7PsqBqq7tbgseqZfjQmv9ZqQ8NCKEzoaNWD6vUiSk3AsJDQTRsezpRM7N5dw",
  "key11": "23pX3wrtpwonbLpPD7EXwA6dgDL1jHmWZXpj2xzV4qqmwmvyFJz1g62iz24pkt1pGnrnuxWW5J4ZEgdvoQMprdNS",
  "key12": "261K4P5eXx4LUSCidHygGm7sMeQ5tML56X7GpM1v2xDMw7NrxPndsJSX4oaqkE9utPj812VjxPVwB5aXZFfeARPA",
  "key13": "4xidKPwVaQuzjCnJ65LkL3J8fawyEAt8uFjJyXHFYeiDAM72umqqZCdeiy2KAGgQdSQ9WjYs2n3rrB5F2bUmQz6K",
  "key14": "Akx9SE2Dmnyi2iPXCEjhA1c8xtQYPziaEgRHy1Fdbr1tBK9YCaAs5h5W2ET5KgAzCxZUR3CJTFcS9qxZWTuDq35",
  "key15": "49gtbdk7pzMTJdgwW6RJ6a774BYKRGKG1KboqUdn9JgpnnDqfSUDyo1dSV81e9Qc5yHFciVj5YVFSfNoGt556VXv",
  "key16": "6kt3S1Ly6ebjDHKZiVcyKTiAK5qwxzPAUfhg5KGTQn1xhXfwHMV9kJaez7AZjtRcPpnKBhMaqEfNHYMdD4x1YCA",
  "key17": "4aDa5T4fP19mzK1TDHVAB8xA3XXQV3TZq5KAkzywUc8jDuMZvSAN2pTBHk36L8cVc3TRPvzf7R8R2EdHpeaafGon",
  "key18": "2dGUXX1uw11MXVba414A5H9UzjfGhSLEKmCxM9fb3e6bUsyyvgF6E7PNDzTEcp86gH1ufNP6HyizBWMxqw2UdDL",
  "key19": "4FWHb6CPCw6Fqvw4HLGzNEHaejSmv3xu7wqg7PfgXb5jb1uVrCC1Y2oR5tWr2X3DiGN269iX6AZUptpvJkD1XLKR",
  "key20": "3ydvaQNbS8XHrAaVPEhNLfCsW8uyGNF2izrMYq5723s4wLk3hEAMSzpjCCwrMhx6ccHttmS9GKEwRUfXReEvUqJ4",
  "key21": "2U7LfAm9iNcbqjmbFFrfns2uNDfjmoseUiX5jEmRgE9em8kTb5KYcfoMdMq5YgLN89VCSHu1NqAoU58rtbrC5Vks",
  "key22": "h5wFL6grKokzJDzsnEyeciH5Hs2GfcPZbuGAZXJvEhX6Y78FRdPSwz9DxseHyMZbXcQrdhUSYrES3ZWtp9X7GCp",
  "key23": "33f9SipBu9USroXR7Whj1iuv3Zb9xJtLpQzRWGuE6D8JSWRJtdjmL2YYaXfFr6cHAWsh2SEywtTfviH3sAzfbnzC",
  "key24": "rM6nLLKuRBFRYgwxH7W7xmfSbNtcnsT9CJQzjMRpL63mnzc4KMWsfmHitXBpXnDykB1PNT51Exg5815L3WcCNbb",
  "key25": "xgSRDvjyYZeGxKFuPNBArgCmcciVEDNA4a8YDNxMxmH1qPnfot6uPhsfhboBg6vVinXv6C3DLVVSngUKSgcpm7E"
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
