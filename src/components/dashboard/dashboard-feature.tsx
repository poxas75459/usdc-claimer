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
    "426PAejg2YUZ9D2hUg6GHaroXz514YECmiDBqSyc684k6XzemuDw2AeDD1utVj1x8mPLNuXuRwufqKQYfTx54xP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gp64Vc55qnGMmbm5C5Jd7E9fzBZECw3rzsuBGAhGoFE7Ua5ansB7wyzkRHuTtFcpgtqa4hJGSK5seYvDXha8TAM",
  "key1": "snNDXdPYhkfpviKhpy4WfcZRCbd3L94wroBMXsXfF3rBpp8JKunMLS1Kq7XkQu36DGd71LjfUaX41Dfr52uSYzr",
  "key2": "3RoxAJRSb6ntjtSMdHkAbPXqJJ3uuVBxqGvWWh55cRSfAqopubCTpL9A89X3vxHFyqXGYtQE3r9Hu5HMCYKKFm5C",
  "key3": "2grUuuebxtUWjhnNPfbAteVcWN1gK1Tt6G6XgXYbFom3qgpQrgNurFT7TZu9shMYdM8G4EMbtiXy9ZPyYXWoYCyW",
  "key4": "qUjaTQ56MuFapVYfevJ9eJBqdzEwMd5QVodEQRfrcYBSsjpA9N5JnF8mLmciTSeaQxEu5HH6wTYLNdksqpzkDuf",
  "key5": "34YvzosUTZrMXDT11W282YvJqQ75HjzxjsVBu7LjJxNkQ5PUe35m2NDd4HSX8famtHdkFgS33CxYFqdTN8LFcVJn",
  "key6": "aQgG9pSE37HnS39YroX3nGTPRaMMrsLpJipDRAJiyLUkUrMFbhRb7G5GWGMTQNdVHtsv3RvFvZmw916mHQxG15A",
  "key7": "5Kp4prr53SBp8q8MZFLLHYrnZHWXp7goWSUCJUKU8asws3Q8WuAwDZAWneP3Gq6tV2eKfVaGZeb1F2H8QogvfhE2",
  "key8": "3F2t1vEiUwfNhgWNxGWZoX4dk6UvqeSUGTVqp7p6BtFcqmpZ2n54GayVC8TERYyiWp7Wf7bGqUoW8gzhrqBbQrQK",
  "key9": "4ntphirBpcrS3ikhYK2tVbvpzHcmEzWG9eyp6gmZoCWyFc4ym743R2gemjFzxBm3NxvV6bCv5Mnfy9xM7YUAnd5z",
  "key10": "33YX45gCE8Sr9KFVMHT3GKGe9hQP9Thq1XGLoKXjvCT9RG6yjSDxUYaUR1tKVCWHVAys2X5cwUaiHSNkQmixSy5M",
  "key11": "4e2L7ZGZU3P932y21XmAWmVHX6JZfyNrwEXAwotTWxbESbptbEkn3cHQm19rFdTcAJDKJX9kJhbvbLFq8vGHAWLW",
  "key12": "5fwtHBHDe35KuPqKh3aVrSCZjMjzddDD8UgBG8f994Yb8wEM63GTM1VzRqqxPN2vqj1YuqBc4AV8ga44bJ4CFGG2",
  "key13": "3xXQciPu4PKHsCAE7YihWBW1f9AvquB5ii8pNZGjVJH2oMQFxCnA79GrspswirBk8hjyuCJ4mftbczsuv4xM769u",
  "key14": "67oEksP9rctQYq1MxA8MGr6otgZspEiouDLPxmT1ErKcboxx9kScVkFVjdaRGfwiM4aRPYhecdnNHMo1sEUCYMxR",
  "key15": "4xkyjPc9wC4aQHBNqxD2CNb95yHrw5MRFcRY93VNBKS2xit7dhRtAohah7yKqt6uRTs1AjqP817jF4xcnogWSuH",
  "key16": "46vX9Rm4QktjXz8Er8hHoU2nhVW2PyMi7prEsDkfTnsfFmPL9PReR5HXraxHyPxKrxtFWziPavYQ5ywS2yNw4TW",
  "key17": "38Zj38Eii1Xuk5VaedVpXVxS314JXX3Ca2VdmMfnmLxQ7or8hJV3kwq9iDzCdwFm2Q63VREPReJWmGETzY4EPyNT",
  "key18": "jXwt23YmgypnPee3JWL2XQfn53roPzZkxZjBPxHwMCp2sdS8CYSunnkwhgnsSu2pyEmgYQxpHDdHSrmPSrY2K4r",
  "key19": "5Txzcnn9acWFE9MSjzsgyBD6R9w4Heac2o6VHaPCzpYdLYBTXQ9jcvsY3S1Ju7F8J7cDrKXw4T3T4vwf9DmFKPy5",
  "key20": "5W8PWsifBtvb1Fimfn5qiBfChqCbdHiQcHSsNqFdAyrJPj1GDajc7VCmv6meCn5ynhLgaQmobHrjHKBNVHvdjE1o",
  "key21": "5yWNSSypGNWv6khuyEvu7Cwaf7FMsRFxK4LcV2JwrU4L69kCSV5oUZCHQjiKf5Auz9EJ17ypuuBURxbGmx2TtR7z",
  "key22": "b45rvqAsqjEGFyuGW841fbWzzrouhnjNaTu3fDpmeiyTZJWzm8FgkbUXSRG5S8PD8GzeDNBxKUxJwq7S1kaEwRW",
  "key23": "39v8WCwXSVCMLnVSN96BcYY3c45izMm5U4uZD9BRKA7bS11Sm2fayXPUjoM18cC9KF8xQ7QuEktcaytWnrcftBqp",
  "key24": "2SiatWgWNTgZ3CkZVim2JZGid8mhZFbm1vcYfqMM99NoQVdcfSm73Vy6CFs6JZE6JtcgCHudtWssHCxwMGhYFNB5",
  "key25": "3prVTRsQzP91ctWygUgyqMbKvza3FZL1F41cUNQonSqcvojeJ75GY2TfTFw6XG8D9auBzjCeamKpYVbxNNUPpRX8",
  "key26": "2bNcaUE8TBY5Wxvn2RPULVLNS2oxpME9da5WaA4NidtNDGrVrWgAnFfXdYDKoaV7wJGaJ6WHuHE5h8eLGL4KS6FU"
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
