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
    "4Wso4oXENkkDnEVZ8XD6RdwgPaS11C4wuqonnNyswgELtHtwniU5KB8oF9hzTWbUMmSf8K4RDvqiNxAgKiDzfnCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mKa9qAeC6RiAeQLUXvbYTfNqZ8J4xvhL22UHEHgWTYGMGJF6Q3cGKkkb7YaYfU98asti4ozytSE6JbL8y3mz2Jn",
  "key1": "guA2k1HpYpJdQpwiuxaC4EhQetwypUgFu7JaS1MR5kC9Q163Am64GsECNi4qeWDz1fsiSZAYDyM6Ttyirn5Jjgy",
  "key2": "3y3QCHbLF64szCV7sRnT37zhu5wWEEiwj9mgGmTnf2M3zBAuyiHPm4Jf1Z6p9mTmLsgDnbGWQcyEF2kwnaJkLxcV",
  "key3": "4idADwbsnVSo4YFBakDjDt1dKFECuDS7GFAKbEL1iSV5Y1bVT5n1k8z6gXhkgjewLSDT2hs6LM3urMeyPyUv2mkE",
  "key4": "Nn8uVzprKnxBiQ4H9FLY94GbZQ6LfPgmmA2X4HgAg5w24RVpJSqcRXkmNDgy9epD4uRNzHRmsKvrfVCFVgMU1GV",
  "key5": "5tB8LpizGRrhJpVw7UQoLy6Gd6BWxrFUFUUjCdKpqwwmmazqN7LqH6jYAuXrRdyqJCk45GadMj4pksCCybxDwHL5",
  "key6": "2zgBRDcqyuMLLNdWYGAZ5hf3jVJkU46bSpBFBPBGJcfcYp7yvCjySy9oQ64SWr8ajYMpiPQpAyGWzBcsCS3G8mf2",
  "key7": "4VM3bL27bws23hDzqozbiyUPMgdvU7QUJjDgK2yjddxRthtmdPhdWXGUETYedZfUAWn9LiuqQRrcKwiDisP1uoMg",
  "key8": "4sfkJDKFrRMZ4RyrKMctpk1nNyWbdkaTr4MuzgMiz1QohXksABqD4mx3qX7xAFH2zt9Smk8AHoHcP9Q7hu3No5T7",
  "key9": "2czRHvmWNNs855gHRGBnRNdpCZvxCyoD1QhqEBLjGTAvBfwK9SaN1DWDDXq64sMFdTFPFTptxMfDnMw3bpns4ZQp",
  "key10": "2NxnKsuw8uw5mv3HejxEDcmJbG6rae4kcTczryRMsE7u2qom9JeRrPGmaC5hEdW7a4suYFTHvVNhhZJmEFBqHJpm",
  "key11": "3Mu7yqjN6AzfUg6WqPSBUTqgmtXVxk5M536AfWkhupXV7qEzxBpaZa21R9QPXnD9zrGLUSA3Zjzw8fg9hWAruAzy",
  "key12": "5sYeimrzmXR46uM53GNUFqYihadngNbfiBmk4f1bL4KhS5hT8TRPM7nFyA7LD2GYcNmKV4Yqo6vV4NVZfzGGQaiL",
  "key13": "4Yex9KGmcAwRFhvbsgrw2Si9xdF2RM63y55sns7XCVBNS4i4d1YmTa8dBu95kBuGfW37VQGifstaX7YkpnjKBvad",
  "key14": "5i4K1j5Et9g72Ry82ms34SCqofB3PDsWe9oFEPYzmjsC5ky6pqJhRBLAoVr9E2MEeDhUnrxAYsKicfFdj9pRu7NU",
  "key15": "3ivp2JyZVrEQeGMmyQ9WMTMyUmxJttegWNPvD2wRXRHBsxdQpHnCDPKZGzn7eRuZBYkKi2NZup1bMcGjsJWFLWQJ",
  "key16": "5TszzeYtCLZVRHnDBXwNiF3MmuaAzoWLrQou2JiyfmeyFuH1FnpFS6UVui4VgpJfGnHukQFxQfrT4RNh5NyKmGD5",
  "key17": "41jCm7VZLzokVzqLfNtPnGejfoMBtSNjxzCwiDkTGsKBSHUgLPxXhkKLrPJwgAjiBwsjy2cQuiZPTJZBRt4PdM2d",
  "key18": "4YNDLvam5ZUcHKJP4BZ6bfGCEpoD8jh4L8ahhNLGjrmx8epMFw8zgV8yghnMMUaJJ1MVHFsnFw92E6Ww1uFPQ4Qt",
  "key19": "zxbcVBfeMmsbRap5TFCQ2qATS9BX2NzggUWD3GiFvD8HXzPaDL7VGYq1hbT1zyHSin7bEgJW3W7AGruUVwzc4F6",
  "key20": "BwZFmSjKkiPapEPCqiStZXK9TXGEi53GTg7xisreoLLeYv9LdvatPHbPBg6qoixBGhm28W73Y1qoLosBATXk2p7",
  "key21": "4YZNhnf9WNgNcmu75Xs6cHaU7Mi93LER5mpTeLrH1EczWFNrjs9AhKMzQEKLK2x7cC9VYb5u3sjoHJBXj91aZNx4",
  "key22": "3nZoRRR1HkrzPx1DriiajRA7F7zPnrUjB8Pt73GtW3PhyAYUAM3AtP9sWQjm8Z9h6H4YpnQjeP3z3JcsivD37yf3",
  "key23": "585bvoJfnvdXmTiT1YL4v1jWz3QdaDwWvKrgcdezdqpXfz3kwgfgGAxZMEqT3JLebsoLtrygYJnm8XTVfH5QQ8TJ",
  "key24": "2qzgro1M2SsSvCSExEcg2QVDpi8fxCZWWZxsB6fBamrx2mriA3NWLJQvbN2vaaSmDtS9BDKqQZhqS9gsvLnLYkc9",
  "key25": "2EiWm7oxMvHDXAHc7HNGkmXQUPUter6kyCAh8XJHdik3NM1hhVD687A11Bxgpg9k5R6ZH9sZzQpuhH584bqv6A96",
  "key26": "3FjQ8dqTherRQLPeZ3a9L57GLEypg7DksQNFa4QTixnYnXhk8LxeiHnWE8bZEbKLpM9VQMgsoN6fAEabcH5NEbpV"
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
