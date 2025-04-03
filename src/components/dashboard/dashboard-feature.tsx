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
    "2ko4uYgChAMMyGyL6b4HCB3K7HMJ7CprKaAs7PGPkYxDpzryqFZJdx6mLvxuKjXrffpbBVXHN7ruhG3aAUhNTqqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pheipQF5AHZpvU1d726t7Rk6bPMLqGmYTo9F4qzGmtbGnuhcqqkiht5zekwjoXtX88e4duZegiMqmjxoXXti5fE",
  "key1": "5EPcp7c2tnxGyTT4vgEBzdofh9cfKmm85gS7Kvg8Ad5igmTYq5cjAArhDpH1gg5SccTkNa8DUjDL4d7KwJLvGaTM",
  "key2": "4DzkvokZVxbF7ryL7zy9QveM9TwKyKoSahJsHRFV2JqJW7dr9ZFu7YLaApYYfKxMr5r5RNdXNRNN9YHf9aLw9gD6",
  "key3": "48WD5a7HBjYgkT62mSBQfLCzK1vhagtupeM97iYJTSZV2XS72od6CtQ1y7Fy6Y6P8FdbKRYxv6zEsdfNb1p2Uqd4",
  "key4": "2BMdZQsr62RKLcV4Uv2xrMn9XjLkCGQRPgdynMpy6M1YsMFs7ZeU2fNpKVCj9CMiMDp7ivhg8rRFDasr23MN9MXv",
  "key5": "3wjy7xJocb793FWKTdLsJJwKUSve4pYzpa3RbYgyTYqdmJrpobC97vtrMmWXRkek3cfY1d6PMspFyKD9AdRMTDBK",
  "key6": "2vhL6JpfspJHhYjcdA7Wv85ogQiE2MLWC9WVy5U4atcapWVSaU2TziVW1VUSb7zmNKGBLomZcnr5JTicV7BPBj1p",
  "key7": "3GQgWgz1VQfwnccMFGuP1qcnDPZrFG3CDFBNSEc7rRgbvE4sa5sbbPLB5mgmBsUAfVPtvr88QJwpnUGhD2XNvovw",
  "key8": "3yXmP5GejLWyMBpSLM6Q5NyFPbu1SgY48yz4LuJTBkTU2heUJV38qyAq7HDgNF6B1daoDNxh5z7cTNEjCDe2H399",
  "key9": "55HjxAiBHSsX1HbewzVNrMzjxj8VY6xfCv66vPtDY1B9S5QsZ7XsUno44cDZ5MyqmrDz41DGa8wtnGH6HsWnqnPE",
  "key10": "4y6iBHWbAvj3zAjbyDz7TRzv3dZpLNWRPeQh2NnZznmu5XYBEALZHFgo26nUMpMQQYCvzNyKkmhfSkMgcCbuMTfq",
  "key11": "5CWhKwuWSXeiME5SHDaS5BMN7bTufatTgn9LpU4RuU7TMyS9qJ7vCjZtfpdGPYuEU5v4pvyT53tRejSsTnskWPLw",
  "key12": "49bEd47ZGXAga5TLcGJ9qedwPqvfPee5TKectK59HTZjy6wRdWzpZhopryj2egcg4X5qDidRFN27VY9mYmLuyBmX",
  "key13": "zLDMFLSxj6V4LkQJ9aGtJoz92mK5HAUvPC1ZedmRNQBSmRhHJPPHMwAXL2YpgPwBCeSczWqV4mSpg5vR7KiZdoo",
  "key14": "V1aUv3PSJ733HAC1aWg1e1kP4s42CFSsyA2kXM79o6fHup8YUtkhkU1ZKS1h6ukg3Jxb3ZENohSSxq3W42kQ1TQ",
  "key15": "52JujsHF6bA7SCeQpVwdUtfBG1YCnjjqHzf9pivzi4Xeuhff6RFfGveGitqSfyFjyKyvxB7zB7Az7AZEMYu1Uz2p",
  "key16": "4RmSNgKcwgJY9Wsd22mraZWRCkTdtwL8gye2MyN5ZMhixpY92StcgSAi86kMRnpYqnyhXcyCURuxjF4P8FY17qst",
  "key17": "2cZhpCfzDHPXUMSDiW71eGrW9DU9ncP3x5qHYncQthR6kdg7fHa7YRDWaJhQ7RWBKXgR9HEb3BnMj8Anh3tasRzV",
  "key18": "4JBixkoUqYe9iCyZT8vShHgKSy1FzTBpPuS6uUAzoLS637vpbfEr3B8Y9bzWjc38iv7kGs6G3yCc92eDhDqmgMdc",
  "key19": "43qDVa3CZE9Mhw217ffroTX1DgKksXCdwWkyvzN9xRFNDNC8LHHV9Zb9ZTzE5heEpmakkQ8hfzde83pz3GoRuYos",
  "key20": "5Ku9cD1sb7mD2mjch6Z87kVjPjTtngaEcNNfkvCY8w2rwZ6G6DA5eYfcJkSnkZwcL4GY1ncBy4Ursbg1DR6ZQVhW",
  "key21": "2MubK65FUXYoa6Q2VdT72WzSWw2E6SGp1CfHKJH472czo5c4mvMLmKtUCdUYyHWvivZtUdfpShPsoYasoGwWHyWD",
  "key22": "3U9swoMoZt9cqXt1jCsptwJK9BuRZzEgmickAxRUGBzBGLZbgHdzpVjS3Xx8zwFCKscAKNhQv59LngicdAr2vV7q",
  "key23": "2pkaj847VwHPNmbfPwxuDjCnAidPTGqe8PqnWqB4v2ECTdCre98i915j4hYwSvNHhFdBSwDmjFAZ9h6srMnjxGWw",
  "key24": "3jvJHrefYecrkyKrGVajAJJSntdF7AFyP7tV37ba4WANJbE7C659cVG3DSLv6Kf4m24mPffhbBMSrZZ9TgQDZAQ1",
  "key25": "4bwYmVmCkssf1GBqRm4pL5owPXa2BipzxKE15Fn34g32HWKZXJhrEkgKkoss5zaLmF8iWDEE3B4QawUzJTd6wx4R"
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
