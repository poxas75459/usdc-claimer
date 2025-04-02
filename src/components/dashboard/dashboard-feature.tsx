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
    "2JvDeGqcjNoAWzc7FoBgTm8doAM5CZMwkFZZx7zoUb3TBHKJ5PxtdWAxx9R4M7HJosc1yVprjTm15247Qagqc7NQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zCvUFeK6Fky7g1bYdKRdC5S46TpwvmT2vxV5UbE19BnnLm2UtsRgxU3tENeYr3ahZ8AxavtgmhHqmzGbJu3AtET",
  "key1": "9kX3PsTDjKdcGUEszAZiFrppqHV1vfhvoG9g5RVtfsrfZ4Sm7kzY1Z45Zr4S4V5Na7CmSfbgrSi8DJd4fiiPwMA",
  "key2": "2URegn9oNmjVKAdMHcAAPWZVjh9878mpcDayJ8eDVArsqp5vuzpvFgh71Gvnw2bziFm7cGi46jEWwtAMrGxPkMbG",
  "key3": "2nP3CpY5UMwaaqe8QC8UexBV1F3JSxzRAG8wWiMi1pNpeqNmGmPTt1rmUAxfXjcRXoaAdiL97ztV1jQnaYzgpdu3",
  "key4": "3NkjMSrzTSJCpqc1MR6JqrTARgsQrr6JBzE4QkBRhiNjvKNG1TqZ2fLJS6kGfmXqFofp14KJpp9zDsceCAJjp3Pf",
  "key5": "2si3Tc3SnVWswAgQSeKbFb1Tm63WhmqXu1Fhjs91NmgAKLTibuerSwViSdT2ZNgYGoR4HgYdWpJTaq497xgAbXL",
  "key6": "4uzbCmYDVXUqZhYbYiLHXof6geBGxR7RLFXQFm8xZs4fyapqgUMeuQ13VHWwfgzFixNJwNMwQrJg5UcxTzckxs9u",
  "key7": "5PWrUzFg5Bo6Kg35yzZQvqtX8dhXzSJoQa9dXvS39njcQieRpJKoUk7wD8tYXzKSZBULTYjeZA9pUW5zWb1xHHTn",
  "key8": "3DJ6dxZpunsW9gBHWnXHw1nzhXrTVYs6eYLP7RqKSvNDXxd3iHbCfLfNbUtKrBoJCVXqRwhSrP9qr3BVmrM7S7is",
  "key9": "2ifWAhVhCSFvVFcTQ4UiMy4KpnY3G7xct6tYVMCEoFxzmC199XTCPxaBFHK9wfxcS7WD41VqkPoyU7VAF9rcfnNs",
  "key10": "3kCtt1oAEsKDMN4yGV7kEd4bnJH6h9o4mooivYyYbpp3jeR4dTtiCbXC4nwjbkmiL82EshkfgSNg1jXWhEHH44Cr",
  "key11": "58x55DZHt3WwbsptnuMPpnSNMe1v4fVobJYpGcKh5KcFMJAXg3PfvMGBtQC5LKbtcKLh2dpxptRgL9yZW8uuYf4W",
  "key12": "28fjAVaesokbQZWufVreDaUUUh12fYe1WEZYjGFmQx4ecQSbiekrtrXgK8FaG6s2WDQWxx5xLpejGE3qGsoDueVZ",
  "key13": "E5Bp5V2HLXGLSp5Ggva4F4UShV5B8mEhQ2c3upKyyapQtsanbPA6V9wWxFAecNEtFqDvv1tkwtSGeBFuKAEeeis",
  "key14": "46FPBhnWKmsgjBbKamMp5NGfrFGTEWhSmarwFw4QFR636uRhp5cktGDDHkj2EVEemPNphkBPZdkcTg6U2Vc72csP",
  "key15": "2dL1cJHZqsghVFrtnbHn8fbTRpqcgCgx22kAT6LZwfp62JQi6qPwo1j9sySc8zyNUVhc2JmEzaQbdeLjajWtwNuC",
  "key16": "3CcSeb76zeZ42sffYty9g7L8SUph6d993zarbibypvwGqH7W5nq9zKfurnfkKQVEqyVRrACvM6XmaHrppowasWE9",
  "key17": "3MfA3wr9kSFFRGai5BwLKGKqyfA1hUyZgafDiJdRuahoFWqu9tCXPbPmG9pLu6hFdj44Q3gNvXAasF3s7hXKMyki",
  "key18": "zULyy6w2MY3zK8gwdfQuwo4RvciAmm6g4DszFQGmM44Drxevfd4KJeMkwjbDRLEwSxgbzqmRdP3xBB4s6A3UiGE",
  "key19": "4WuiLA5wAYwwRRM5atHu4EvFWRRm5aXXKTrkDUP4DDRNFZteqgb8G99MzxwN69YLGtM5oPzt4cWM2RQWvF3FkuJb",
  "key20": "2MmpoVUyvRBZYSE4QSAgruFHd9kfKdp2aDhgckEQ9jnwcWNGnnuV9LAaAxWgTTeyVB1mFS6YoKbaARr3LbH35Pkm",
  "key21": "Auq7KjSwQYpe52T3sGdmKqFN8XE3rXJfpdBfH2nyUQYAxanmPaT5zzcN2YxHKrj6k4WEfXiJBVgam9WJ5CCWXPf",
  "key22": "4DcExiCpU4MhDHhJXFDvDeUSwumXEkaUGrih4QvxcutJQmXHC7VRjKyxcbYHqKw1Ed4Eef68FpDqBBKJ7VXbArbx",
  "key23": "2qMuuUih4sRxwdTFCPhx9MFiVFXigdPXx7ahE9ruJiPXguxHmiT9RZmKc9aFKKEtbKzXzDGnR96eEQ39yLCqotcV",
  "key24": "5wmEFRKdYZ1ZRXDG3sTeZGhLdncdrKL6rKBm5HKkMhmAnRx5DJaVhoXQJZoDU6okEdZNmQp5tceuBtwYsLGsuPdv",
  "key25": "51GuyUpKM5yKhyrirParvbhmbTZqdo4wbVVJyJe7KBkbecdX4TXnm1tGmfEWg7nPDw8oMV3KiqMyUJLvLMPeurFK",
  "key26": "4rPrvGqtnsbXw6jJrA68bRdvSAXqFGQMJ9kjbeBJx6kTFSemi4qnN1Rnr9rP4JTpK3v7jbGGR2RLzYBdczzADoiT",
  "key27": "2ufV3VUy5qrwjEHnwvAyzEn3GqJ4UusMrDQ1SCvr7DcRpFQbCh2gnSzfkrurZ2TivDaxusmv2prbLBa1LDVNfNR4",
  "key28": "5i7MieqSxkzp9s4wwDiHfxbKGTnWUrFbot4S5L4ZanaNUfAzKfCGat9sKPwVxX6G2rFoAsFrCmUqk8RHiY2oyzov"
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
