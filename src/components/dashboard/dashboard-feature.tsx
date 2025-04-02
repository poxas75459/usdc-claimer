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
    "sjFdtPxUsWoiYYnHYN6Hi3gdNgtJFwXKupq6YV456AVE46zY8BvyRAbxHZAPSgWPjzsyUNbmvkK1dcx5npMjWre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MDGRQZ2wZ8Eyi1b4kjnksLwsv8sFyFvBXFfLDuRs9Jm2DgkZVrmiXu4jytf8WDDoabg1gAJ9t5TegToQrAXuGbn",
  "key1": "5KtGaVC1evtpJMi8ki7uM7TrZ7Ge8cb6n4GPM1fARkHCTE4fHH9amsdGvj2g3tHA4sqaPfaACNdz2jh79WB9z1V5",
  "key2": "2HKG7KaYemmCZocjXjSTDn114LrAspNcRp8ZkYPSkAMek3e6nvXGDYVsrbnxH9u36ipWcQ7wg7AnSyMo96B3sPiS",
  "key3": "2Jy8pjFzJM95K7RBdsN9EEjLJntPMamvQP98j58ofnBdhy8M7qVuoSQB2sZySFXvg3gCkaqSRMnKk6SQXZHsdfM4",
  "key4": "34DS4hExgytrtFPCJNgYUfQwExbTyopSttSYdspC3kXrDg4E24cD6QAnrtXbYNMnSdRZmEYE7qU129541ZKbMZ24",
  "key5": "ehrqtJexduPZVUPirhYPkMAhtfNbcs5VxKWEDEbpEZNbuwUnZuYdfmbWvLWvuSMbFk5iR5SVMUoabMUaqf8CwKJ",
  "key6": "5X1JEJiZjzYFqoS19xbTePsL4nWhKTVBaowW5T23z7u7UacmFdBMnp3SW6ZmvNBnmzcpLJSdMbMZx2V2RBXXvnzR",
  "key7": "cd4JiMZQcbiugp6QDg4qG5ifaGbvHa85HNRiqqnBXcRTgF72ZThahd9zXrPrPzYqx8g2asy4yTmJnWwZYc2ACaZ",
  "key8": "4wXvUqusBRGsKF4bNXCWkmYXq5BtPpPi9qZLQZyFV3fL9Mw3nxCEmbH8CP1rddvamY7yoSjW2FdqVWWrrGo5EnFT",
  "key9": "5UK182YW3ePK75qjHBRma7eCjVnLA6oJGan3imNXvebaS7sGXXvMYETjgo3FLWWjbqw9oQwXfzQCcXVgX8hDafhx",
  "key10": "2h9c3LPrxWaPAc2bX4HCGkt1m6wLDwg5zyz5yHZXdCQoP8wZtA5a5Lyn8fpG8nQtwRPSp3SMaqN9hzvag6vTKhve",
  "key11": "415q45dRbdG3DnVEGxvwXkxqPwhMj4EaYfLsrbySBXqaGPvWXoThNRmxwQMd5AF84HkUZsLb3r4hrJbWkvAL76GB",
  "key12": "4fiEBh5DCN7F41pjbFSYX9CUPduXsC6F9rgN4yMo5NAT9twq1mx1quSzjoskxHzcAvXCeS6bNK2pz3gbwQmP9LQa",
  "key13": "22rXHPCLgcHmu7vwrrRv2KSjbptAWLvSrGyM62Zv3qkGXiLEtBWgGxvZp4RXyigxfxB4SyAmydmAJPBMoCgeM23o",
  "key14": "2KUQimmSHxijq4wZUF53qCGRs1qj6f24mGLQasLWjy9uRUezkaXsPVZCxLtWxUKcpt11ryRuGAtrjEUp7zkJ9nW4",
  "key15": "JXKxyhEEaJ2SGyYwD4ZW94Nj4WkqKLqQEWhVhZTsSrefG8x71E9pJZ7bvsCmHYLSDeXjoKXbujTEH9rzDgAppb2",
  "key16": "4uNxPeYpg13TUBoQM896T3vqTqVdtxEqNBPhFWd2MuKWRnFS8Yj6Ub8obbjfMGCMrUHKTmZh5vessoi2HBaxFhqf",
  "key17": "EEGtHzKhqdMDn2A3n9mWss98A8yEXhwcfoxeAjvdDhTkWCL5JhZMkxNobPRCQ6YVmvU3SLUkAZ8FFWawff8uMHD",
  "key18": "ospSEwaGP4fPVCvJRaz7tekQAHxgnJdzxnpevETbNev8ZBfgR7HmZktbypzADBUc4LsapvFKugyo9jZ351QEVaE",
  "key19": "5x6SGMWfJN3dMfJ4anoWByQ2wPrDD2MJ2iFdCM4J4sZ9BQHymZ8JkAaSbondfAWDxnhfvBrAmoKw1kSeDD6mPCDj",
  "key20": "2woAwQU13NRtQku7P3TdDaw3E5bYfAJgGz9M3cvUXYxvyEauyBj4zLSYNxY1pJmfDf2M9EKpZa5qwSxGLriBpfsw",
  "key21": "z9mTP6pW2ZLhjVXymCyB2cRL8aohyqXzbmhwd6KBZrRapusPexRMtpwKEuVKCyGvP5NAPHztBMUATmUiuWXahtX",
  "key22": "8tqR4tAeNiJqAZbGMSY2XwSGQmHuWhS849Fzc5dppUP7GdgHwD3w7ab2N6uyPTQoqbUj2pGCHxtR27Q71Q1A5Dv",
  "key23": "233msod15x5i84VuV1ra8HMw4Ljpxo6SR5t2rDj4nEYx63Rdnyu8aU6LAhEs64r9cZoS7ZHZDYNybhq4umSvdXnV",
  "key24": "5ntcwFdtWdM9vRNesCdpC7zHqsVNBx8Lqo7iFjXTCN91EvXCBY1N8ifEP77M8SiPWNkNSvQpx2ow77jFEaoLMttE"
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
