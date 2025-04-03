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
    "2Nh1CmhdtnR2ohoVep1Jn74EiRFHs4xETacT6AiBWWfUEJr8WKm3dEv5mHAz82sQ45UrVT9t1BJrSLjyk7nRaseJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kediNosKXrMawh8133DvCzcpS9n4iz3bZdV2QfH4vfQgMgX6pJnAEQ9k3fpjhtSvENx5cbKAtTE2PLEx6NJbnvx",
  "key1": "2retjvVM7V5M66UCD4T5mNkgTwBQc5J24FFVK7NSZ7hAdEDamC2LbCukJYN4aVLBzTiQJDfNaQTLekW3EqvZY4Aj",
  "key2": "62Sj4cDQS8EDWM8e2HQ2ifB4J5gHkQnQjGNetmxnzk2o1RXPetJkinmCWU3iVsT65zmXRw6qnYK6Z5ZB3FDg2t9T",
  "key3": "5FH8MHQJB6bmD9EVEmKF35zXcxrP7TAX5HbPtsqHuzf366D5zi1TCjjb68WF7DQpoN2Naiu16dJ7eSjiNq48JbZU",
  "key4": "2WYQfFcoYhZ73xv8RC5yRyJpTnw3CWiBUraD26fxAM2Vefv9HcivgNMX2muj6W9aZ9CazEdJKssMLiF8ZENW5b55",
  "key5": "5kmgtgcdqqtwLbbRkzvmStA7bXtZ84hCCt5futXajp58BkfKMJ6nMJLGnH3SiuXWRwz8msrAHrFfZVu8inZR6cEU",
  "key6": "3rss49udprxYvPneYBFaAL3maMEMJeBuJoUkhbeN7x8PsyLkKCQNnaUnV3dhTXiNiHyXEUpZfaLuSryyTEkoSWp9",
  "key7": "38eoUbyqMpTubCjVTrQ2LUPAp9Zi2zfRxnym1sWFr3Cr9HiN3nWiBS7f3V8ka6kx8Psjs8htX5TvzBiXe9W2kp9p",
  "key8": "gGdpZ9KLWYRCapmGPqwctAYeEu18VPHVhqUdEQEoqRtUo5JQpPCA1SwiB2dDpTmn8ZyEt5ANJPiaE4TUf7gmCxg",
  "key9": "3b7YNSJ9PJKnMxpeG4VPGhAEtuQEoETF38tq51ySWGmv9un8ESnpERGuRgWhSfH3MdKdfSRzNLyaDJcwB5Xtd9Eu",
  "key10": "3jDLWpsyQbAQBLYcNhzH5j7saxpetiGEwDec1cS1ENf6f9k23T9R7fwGmTKXGuSanb9jKax3FD8d8wiA4eAqhFzp",
  "key11": "47ZJhnU8UuR3otjBDb5cnX3fVQvYfMXbeYqeTS7nTBV397Svy3FR4dGkkNdM9Wc51LcKgusQbovCQo1oHFVsAoVD",
  "key12": "ewJDoKxhQPKWKZ2FNzwHrBrsiM4AQLTEeyj8rvrFoQidTMEKSnScEYVrb2oewpBseJwQae8Y2V9YDphTf9t7eyb",
  "key13": "5okqvPctgcwBFLv9NzwhLBRJbYgLUDnUqLjuoxE3NnrW5bMhkvsbePnT4DyZ8C5YTBfiZGCkuWUoXRxA1mVaZMM6",
  "key14": "2ELtgCazNXP1i87k4hhrE7tqkggYoiqDfnZe42QpvdXnSKurYHRk7Mxw4gaqKW6JAewcaSsFAMzScfbTxXMphR1H",
  "key15": "YEPSduxokbV7AHatTRVbx3gYhggbExLStY2tyWqQDtgXVmoJPdjHRDENhkjvrUmU3bvKm57pqQBeHaKUt8wbCVp",
  "key16": "33eWpmFPJvd3qYRFTb5X2dUAompz2HAUWqSbpHyxLLeRYbyT8LdWgXGKWuUiSHy9qh9WM4Hm96oZ5EbPAMnCh6kg",
  "key17": "61JSXrg8CfrmKTExRVv8VZx4DRg2P8xFtskkUjpJuCVNRgu5UE3eVYniuhTyMhtesV48k4zBaGvPoyzkQggsmkkQ",
  "key18": "Q2pjAiwwK8p1UAgBjUTaHvtFrWLDi1nUrG9bqy1wZdAH8RjnambzL9zwmk7Eos6UQyj1KQF9a6Nmm4wokXeEGLz",
  "key19": "5qkyZdJaEhpgXg5kkg2jR1zxxgeCetxLFf4rhGFkQbcogXMn2r2NJAS64ee9rTSUG7DQ86DA4xjpDvpFnRRHABnz",
  "key20": "5WaAzy2XoBgGYYDPs2znp2yT7p1gSn5ooAJqwDmaX37KuVXCbf4GyPYhnyv9RDB77wG4iVCnEkvVpeDjufNEB5uC",
  "key21": "55NyV3fiafiXJhH5pWxoqB7whLvq5fZPGKDT6DaTvpRjG5AUm7E7U1JHiuqDCna95uKTCg2GHT7MfLsJt3DwxAa7",
  "key22": "4CWRRFm52Dxz8a4ZUs9rS8PifWjMnrUkqanp7c81zeAxC89yBrfJVC2WqEw83Y5WQfYwv7eJ7a6os6hgeBLcBjQz",
  "key23": "3TGvmdnmEb1fHYrcEL1CmnDj6R5eKTUQTrpPwdEhWRpewL7KWcKWP6NfjMKPYgm5HA3yqn1MTAj97PgmY8FHQXU5",
  "key24": "RCThYMJ5j5xAKoLMiZWEs4QREDam6U6cQd3gVb8MSTPoCDXe2MW5v4KsKrSbXnp25ChBQEWo6jAQZV7UGtxbUng",
  "key25": "2HHmVQuLwPBxDQJNTcuLzHnTwaDQ2ZHVzY3XDzeHGKnLA95Djkosn5kEZ3qREsgiPjnND6UfUerLR9XAaMGfBVAi",
  "key26": "4vh5Et15M3XWzvk8qHmLtdBo9R2tj4ZxXWwDNQqTGqtfm22Wic98GMK48RMrpBn2Eqpyv6cCQLFdL4noVNknbeEr",
  "key27": "4Lh8UkwBRmV65oB7tXrAu2J8NBB3wRNiXM4FvVv8TUVuMW3sDdm6mCxby1Q8RaPzUwYt8mMherXuEMH7ZchS2421",
  "key28": "3Lxm2wnmtgzZQzrReG2W9RgqycxcLdhgwHrCNVkFsZpqiQyuJd7Ta9WCq6Gmo4QzLXknK9Vxtja6WpW84bW586bg"
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
