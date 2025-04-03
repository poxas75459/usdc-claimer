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
    "2mViZWKcHQWxcAF9KCmwTs5zWHYfMg5EVH3qqfQkFweXGiowbXFJqw6X4rrcic2XMfd5gdSo4sXVteeEJyacGUsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pLMAn7DKCmhS4g1oqW5aG5aHVCRNxZwvnmPgsqssTPVKMHvXaLLQEnAunBcf8gF6imKx9jTvwLSF3vu13XwEStj",
  "key1": "2KiQx4aBh8gf1Xvgp9PYX4Tj9gxs87j7KjErFx9fNyRSgwkjaiL1x3sZBWywz1FeyKdccvp3rw67TxfnV5eiThda",
  "key2": "2oWdkDbDochJW7NbgJT41zR5VPNWUd1e69is1KiVoaH5bEMkTQamdwFDkhiM69F9VEx2jaUFEuhUG2eBiUwQ6ayY",
  "key3": "56kno5qbN6jDpkAmDEDVK1rF81g36ytYz4fi9aQY8JF8WwNmKifbQYbbF5novppJrsmbKKmzsBpZMYKkD6MFXGqH",
  "key4": "2oU8QtttY7JH3phL6K1Csin81mLd11gHM1JtFiDedVAGyiemNWGHKn3uKvG4YbL7Vupx5jWgozDXLsdJte936YPv",
  "key5": "3igJSGJZUNzhvLNpzrBT7nsoCukRF1nCpUYHt3vqnsdAuKH1mQpwH3abPbFZRAC4dXEPAfsGFvW5S4bj6o6RmmVz",
  "key6": "47vkCFyQbmB5gx67s7uzVUWMR5UMxy6Eo3uoLUUA4ojoS671waRW888AWURsrv8M7oQnHc21JZA1CNgpoc3gQwVf",
  "key7": "v1obiNv7L2sjsqvBMxPgKjTqaTewTZF8kJEVLjjsudVdsSHfWARzQyrNH8g8vZxYrA8j2qkZrVWgLkcDzZTi4G1",
  "key8": "49bZew2LfRMnrYBKAsvaQQD4u3qMn7QeyMi3jeAukCAF2XACNwqRxCZ1ocSjBBSJiBabD4RiCrdQH3aNU2YZLZ5V",
  "key9": "5agyHUmWPWv8iArdca4HmKTBC7CG659Ss79jpPSqbLqczKG89K1mLa1AEtjJUtXZ2WtjzdfRseUPZVm7H3J4R6BZ",
  "key10": "ggnx31kBhtB2awWii68gYbcHRiUQwjssz1JeSkym2kgmp28LrRj2scoCE4b7Q4r69ubRUnPMhPfn9EnaJchQGGY",
  "key11": "49gVb7Rizv8p4jaqkZXCgPGHRccWkNdm72BTk6UsGTixEUVs8fEjY6q9MqPAjW2zJ2oPucyo9oCU7FsXmtVmn34b",
  "key12": "32hicgM6FBDxhwm3sfQ77W5LUCyUMUJN2vN68U3ibqSQ1xXjHdCRfCJZnsaaVxeBbg6zRGsWqJB1m6hqpAGqytTJ",
  "key13": "61s7K46GfuMvutBJHW89qz2mc6yzVNcPt85fev42oYczbpEAEJTnfD9vbhaY39rfk5Q5UJTuV2ebRzzRUKr6YN1U",
  "key14": "29hRjheXjAKTJMS1xWmfbbF1a9dyBYbxjFqjLH3jttQckdFrfSHkKhXxD9EK5ov62A4XVuVMdpifSTbiNKTrm6ot",
  "key15": "3vGqcDe32JdJPTFLEut3g73yshL7L2hwCxfYK8CyrBiwEWZiVtMsrfJdFJjPjx536MvyanQQtTTcX9ZyhGEo6eDM",
  "key16": "2UZo7sUKP5qwknTWF6Z1RNJofcmmdQexnsd8munFxisoWQExu5Peui4V899PWfHQ37AhEBfZQeSzuLMFwAu444Af",
  "key17": "3k4wqzbNXFVMr3sySVpdqm6MtueyDpVZzZBBBRnH8ateGeZL1LN7v4kiXnXXHfWej18bGVTPABpLDYy2po6mvSCk",
  "key18": "5jyXeERrB4TUdrBeV7bngFrC8Yit6qzPzd219dPtF6LfTLqANxZQZtHM6m3KM8XAZvkjTzcjQCBQn9UBcLrwB7gZ",
  "key19": "2NhsHswHkdi2NdJq5ReH62xWhWjWuEqTgBDowpWrxTQVywrr6PMCPkTm2bP68bG2BC4tr1GdR1PBeZQzikym1DL1",
  "key20": "3W9QhJBeqBW8kBv1XkYYGcnbuZHdc8dGag3SjtAWwQhHkWoHusaaiGXriUHGFjoU3q4yZZM5gZ1ewy1cWse5eg7H",
  "key21": "LbtU9Z83EkS3YxjGJEaWrTey9fSjMGts8HLvL2zRHvgz5nGau2Ea3Qu4af3Q1NfCxFBwHgA1eSJGvK7L4MkWrdv",
  "key22": "4zk6qqW1WP6d4wPC9M2hbdem691vRWvNm7w35KUA6K22AkuR9e6gF91xcUpfLJU22VHEX1kNeCKai6tKtEYLhJke",
  "key23": "HuNCbpMQ2HMbMFacu8j3rqgV4AiThR8dH8aZYKZJRaP3ibuPmywfinLvrde6jAvbFyVX3kJ9Vf5SAn8oW4Y5iQZ",
  "key24": "Xcu3UzAmQMRrm3ZqVfRYWTkHs9kynptUhSB4m9a3Mrd5uZ2qHnBK3Je7dGsEntC7KpPcJ7JeAdjb9xeK29Tmo36",
  "key25": "2QH65uyjMUpsiK8HLKgU3Ng2E2Pw5sFGxFVjy1DqSWfZ9F1XX2LbGMNuc6GVeqM82bnnkoFKC4ZywYeBtUc1SoHG"
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
