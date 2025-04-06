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
    "4wDipAfHmSewx4kJWMiyzNKePAdqZbEUcv1HTvvMvDGRxVvEDXbCukDrLnt6o14XkLxXDuRof7ogzxKSBW3foyNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SoZgCZWucPXTZyCmyjFHxNCm7NVbJhEuV9GRYfNFZU1JesrR4EJ4bpxFG9LrLEdDZtBt1VMPAUPfXM7BwT9WEYB",
  "key1": "43HUAu6AXECtUvTj8rWwB7Ln5n8PPqjxsF2veq14bzf2GTercWok8qCh4ki5FAZ1q8ye4CEGc3DGTo9xXamAGjqZ",
  "key2": "5Nw1qvHhz26tp3FWW4Q36g1NpvVEbAyYmgsn7eKnaam1tNQQMipBfyhxVrzGteCaHx2u8qPMRgxAGW6KNpFR3zX1",
  "key3": "1HTbbFamziZaN6LnE6FyLRqiDceRtFtnPh6uDjdsVuxtxqKcBXsUVYBbqauCxgYXP2AZ8Cw7DN5tB3TpB2ofhZ6",
  "key4": "4kR6nv9iMryT9UU7drNhyNEWhD7bruy6veP8mK18Ynepf5xFXKnrGsADka4QimyH4AWhpc1Se2wxAqwJ3LCPLrk9",
  "key5": "4QHopzfrVc6jQFGFmTzfeFmToWJxCi8TPGGFnHsq5vUQko457z8uADEFbdCTEJMncrFJAEcgneYtyAGQTdRmCw66",
  "key6": "22987sK477cnWJiu5JBSdJZ1QXTs9gHDhHShLE34FjcCdVr7qj5Em5wezYY2LngErnZ3ijWjuprXMJshc5RpNbUj",
  "key7": "3EogBae4Mka8Zdc5bKPYSiqmJWT4T6no4BRrCEmnsJ9SCYxvCWnbo1Jt1CFRzLGRoUL4ibyJDL9j2iHXBkYuj5HX",
  "key8": "2egrC1GZmrdf7cdDQkJUxdsN4AtnSTPDJ43iS8myJRdSqeHnG1AfTL1g1mUAPQ3nRx3twhrBc37a5W67iMz8izQa",
  "key9": "6XS6f5h4A3VCdCWT1J5DYKwQjK2ESeRTXZvqnvWkAP15RBTQjgvmPnT71mnpLC2zf5Sh9U2nsuXkaAqzXB8jxbV",
  "key10": "SmVCYd9Lbb7LdXT2zjUtrWLGfqVkZkivzojgBkRuSQA29asv89EqtXnX3fsVdKJnfgos71qaMF2gHPbmu1dsoR6",
  "key11": "35CuJ5yCdKedem27tLk2Q8LCte9EKDSnQWHLgHVoyJySaC6bbaL1Qeog7qc9QX2L1zyZdHXUzphmjSTtCeFn6pTT",
  "key12": "2AbxBaDL4xCwAXy37ZHWSMBxMjmWRj9T2e6uT2DSWxMtcjHHfxTqD4oEC78ZrJLYB2xEEgbXvrqXmkdyuWH9MY4d",
  "key13": "yARRL6HBBU465cf6LPTr6gA94u7JkbWVu5369K6ro9pQXxi6p7ao7QZm4apge6urpJdDmC8U3bUkU9EPvCuCDZ1",
  "key14": "5WwcZtE2wDdLoFw7WdfpXxRPf1EBwEeYaSCZXSrxAMoBRZMWuECqfZ9f65kZUxwAVQrPUDrtsF3N6W3WStHkGQkC",
  "key15": "5j7eJEQVXkpxBnsX7vhf4XRv4nTCwseH5DxETaJ9vBGqpp6RgbiowEhosHkWeZm94GKQQoekprmgTFumVvzCrBFd",
  "key16": "5ayEj1Hsor7Xyf7geF9Zgaf8EXVrV1YkgnTTugwTYWs5gHxAN2SBF9R7Tonk1szN1Vzcc6bFjdJrfGtfvJAmfnah",
  "key17": "21roceZQ1GdREn6oya9x9DUMfEAVDkmTa4mCs6tHQQz9mmSFh7jg2AYxQaGqecs4RuaypMzctqg13aKRLYKs8eYD",
  "key18": "2ckE53csaC5L8pgT2SPm5yGU3DgG1LH2R2Sq4ydWF37NfYrJQbDyWMdEHMtDJ7NaWnjx4skmuXsZCaZWStzWc4ma",
  "key19": "3cU7P5aHzDx3PVD7p3VYca64E4ZdH5ccEmY6WdChWKSJ36qevZphdrFVBHCDZfs7zuH2HkU4Cf3JXpEZjoFmNq8w",
  "key20": "3Sz7xdSJHvbg8fPDQMjJqbCsEAguY8XNFD9mCiLgcXd5rmkCKCesT582j5iuWLGfBYFT25uTZttacyKjvm3wbRiJ",
  "key21": "dfMRXTCBxepjyrJjTsWSwgNnYBoLC2wXd1mmj8RxpgqLYMCJq33U3aLMn7Y2pgrM9pgtaEsyk7zZNqxyvxx4h3T",
  "key22": "5jWtZtJ9wpqbAfULEMJnhS3ydqChhLfJKuqb2mv9tiNMNLM69VpmooYtZxjxyFHWUagJ49wu5wFe7fK5ehEArTKD",
  "key23": "5F6A4v96ELJZHZwYhgUCYJj3Xbuc83gYaFWZkKB5TQinY94C2kjFenU4eTyeTpEgCdKNpRdDTXFxpx2RJ9KuN3Zt",
  "key24": "UbGvJcus32Kas8Qg3a5Zuro2yzBMh1UpzkEzwEJooF1LMCtoG5CvKcp3CxXBqHi9BLDa9P3n4j8tsWXTuDwsaDP",
  "key25": "ve3Thqfn3dYcQUGaWN4oWABkCvPeJ82J3ZY3FJkNEkMGn8zff7pNYsKQp2C21AA8j4B12WQXcDwYvKtgzRrbWQK"
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
