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
    "5rykVVpo6MfwsjAc5r6ff4GzMrjwaagm3GGePB3zgMYbF6kMfiuGeBAmEx3mAw7vo5DhSfsPHKVYckXVXSpuNdcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmScMcV4sbdXnM5kSmrycb2GuT5f6WHEsGUfh4QHsgkLULLPqLqdKMfKa6DTfFv4td9QFtdPdz3LxBAQUAyCYJ",
  "key1": "2HZGpy1EByHr9MKDETMWVzCeD4Dj5GMQ7U2bZyKP1uDpobeCWbCpkJaYBAkxZVWYBNKZ8GjvbsKSJfQ9fh2FPttz",
  "key2": "5kEWMBigsG1GK8WzHUswM7b2i92AUV1hhWz7AG9CqS5Ea6Wf64FUGkRF8ebLvQ3oXtmjnyCL6x7EMTcxC48jczbb",
  "key3": "3rzRCFKg2eSR6TBrsB8gFhHajfUxqd8Lq4sFyMqBiHGTHyZAu1bmAC5BRN4RGxyKf5gQc7ensUeFdcme65aCvY4r",
  "key4": "3NKog45ecfoKTtdXUhwsCR8gWzkdCLDG9A4t4tmn6yTggQPWUggRcpudfty2UJA8n7PJcWVb4Tg5ZFDkn9LX2ckF",
  "key5": "2DRcsgJ2iumRt8nTp3KxA11YLrnVhpcPh7Gt1yiVYqUFFgmSUzDNFcvrgeZuyTkzsAXUSuTkCLVc2FUtL3fy7M3u",
  "key6": "22M9KmWp6PxPJUiSeCSwh7kQGeg5HG7MuHszqkRtWuB4u8XNcautMEaGsk1dDRGGoRQyFnibqQTZkxv4P6tQcrtT",
  "key7": "22DocoPk8AJkcbFvMjczt66gnFTDfaaXszh6chFv32J32vnA2H8DiEUmhMSkFUUNcSEYz7A2e7uzBD6yM7mVvdFE",
  "key8": "2sNFzSNXWDmtGkoZ3nysniF3GcY1BnNLGxFHj9jtnkBSa6gktRGQxXFR8uSNbugvi6zqunZqtgL7VLRnpdDSYVB5",
  "key9": "2iGL52fGKtB1CCrDjt9HRDGhaegiD3EU8dRedURkhpfT6mJMRumVZ3eMvwq2ku1KehQmvhUeqhTgmGTEWmgSpXUz",
  "key10": "2VaJqkuKZggig8YWtfUi7YcvXmiCF3HNzHWvEvuxNKJsBd7kRoP99QvCcpNUgND3c2ms22kUrXdtHnaDBJiK9YhY",
  "key11": "3qisAGYX7aF5YafWBY8E7Kz1sj1cGFbSPFEeGssYmMffAqyH61B8kiZPWMsYgAAfyms6EzVfp46gcDV4AVQvVxdM",
  "key12": "2K82gJvJ8oJ5EP3VfvVM1ReCE66DVNCMqZ4NwoVNHaN7SXw2UEsHZww72yo6KqvgDn74r2VPcNaCRZwDFAZ8Tn53",
  "key13": "34rUya9H5BjyRnqFgSM8jdnntDwsNP6W6sP6oPYEfntS22sjKfcCXNTpTHGcd5o37erK8peUpfgKJK6dkzdbKxuo",
  "key14": "3MS6XEW7VoVkXbm3gRcDYYJUncU7xV7W7mVVzKrec2uXpCF32T3L1gJVVQNPoDL4mo2tC4wQUSLnkPUDTFAtqHuM",
  "key15": "23s5ZPstEAATkRvWQRnFn6qiwgdpNHdNzgw5zAcoK5XTjAutvLab7rHJxeRkk949Fxfo1x33bBP8Zr1pXw7rHccc",
  "key16": "63nfPvG56iwc1iF9w9zhkEtLweUkgoh8y6QkaALGhsobCFqkykMShRods3pNc8PwrETr47rrRmF5RhGwkezEK3Db",
  "key17": "3cZaBi2b4HW9vsRoENyQuhEZbCpGb8x7qdLoMRAJhuCBrwifEwMBEAFvEqxZY8r2UxGrXEs3TAi8HYSv4iH8bGgR",
  "key18": "4u6eZpMzxw5r894Dg2oTWBfx897g8avFgiXTLtUVf2KKH1U4CDBDtiURz1CFqfZVtSMcRqPR4VLbZYL9Zdye4f9k",
  "key19": "4nggo7FyEQaPG3ZuJntYADbAfusrSuFjRNxWASj1anvFaF5n2CAKHpaddbTEndQhFJ13jjknmkuC9r6yHh4M2U5y",
  "key20": "3VssuisSPPUZqEgDTHAfamB6fe7P2S48zHAN8zXdt7s1oURdju2kFcSf8TF9ZJNP3dtH2yHoC74SPj5y4KxuPV2c",
  "key21": "5mevL7RMAh9u1hZLdqKzCNxRb8ZTs5oNhWPyoKWuwTif6D7SeiwY8vusdNDJUougFeFAfRsx5qa8sXJ89qPQRHB6",
  "key22": "596fbAmeStkw1vrsy93bA15cWrUDYTLZVN2TkBVbnVNLHhKHMCjXWJcGrgy1k2amvJTQARceDXQBMkfa4YvZZy2q",
  "key23": "5m7oX9Cpm7ajSo56mTxJQHr48AYiQ1DJxvNKp1eA8VmanVKxV3HLcMvnGoyv3XMaA46QCqmGKDd2mSfjrskoLyWN",
  "key24": "bJUEBnaGtKCpVuDWiF9jTVzaQZLkoKgnp6SeSkxRANzhPq2X1b2XdynjEGMnbo9dERaufocv5MCNeCNMngZeStz"
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
