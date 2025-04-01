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
    "31PAms4oFHBKJdSz97erQcHpEQAsnS2WyFJX43697GwnALor5xM2bWmRWayhzEDrnWvrHYQtUt75qhaHuNDbK4Eh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvDQVUPrCT9eVCFfFKWB4G98SYuh778CMbFTAYqVHuwwPVdsKZAFzHiydxaPDXZXcbuX1LwckDHKd4YdLqmme34",
  "key1": "xuGqnshceFoSMvEK2NZfGycRoL79pS2nLTUb9A9psaipEhZgkYSAPZws5brGXuV2SX2tpggcmg8rdkckS6y95XE",
  "key2": "42ZJ6ZaY3cDGkFdRtwbAYD8piy4h2PAhVRjVgb1mZUu2gga9ivfaVeKR5UFZG1wQ81tF4o61rjE6hyUSW5m2NBaq",
  "key3": "4yyzqNTwevQScTUpZM18TceiTBVnrN1QtftKAmpt4YpeLhRKvW2wwFa5wMpYXVvMDZvMRWFtMyMt9rKnpzyaKdc8",
  "key4": "5NiGAU5YV4s6AKCCnWYgWDzpZX2MQs5PTm4M8cTfP6sg43ck8vXikSJXejjQZ3DRKjs4ehSxZgfjLyUVS1E9vLW4",
  "key5": "4gCMjAQAxSURreyP3u7ZH6kzavPxxunGtAWhVPY2WwaK3zFowY6iW73hBa4dae9Nf4LbuDruFt2Nh4VmvguSDEbT",
  "key6": "5ha6BrJWLsx1xLy4wRXhsGBwnSTUvFUYobZMHndcKSaabN6kWn7zVuQCHomuZTk7ZJGq9k7D8qR29yijiPKMktCR",
  "key7": "2WbKjuGAwsJYLk6aRrmJ9Roa8C9iXfUJZvRCeiJXb34QvsnPBwCiCsJvzmzQickmiN4xrxuHsp6ikEmnDpeFy4FV",
  "key8": "5YGhGbVSzuPN7HwaaeqxwjcuaAXexzyP1mJLZrYbEEiH2sjbYQHjRR7goZtAJqFYC9G7Hkp1smvwd8vCWWcJnwza",
  "key9": "3GfX2AsDDpdYYvq5SirvGfxjW41JESy6BJZuExfGLWvbJCy2gzPToSfyajZoUTZt3av62R4cUtSPacb83ZSU5ofZ",
  "key10": "3rDJiYanjntPUcxD47nzVm1WAoJJk5j6UQZz3DQx8veUKcHb3of288uZ66LcFfe4s7ppD532f3pJe7hsM2QwaSbU",
  "key11": "5X6J9m7kNXcJJNtKtd5ME2CNy5Vyg3VPhT1Hs953f3fdLHS7SoKnVr8vGGWxjoqAEeLNBwQsTLC2Yf4X8MRxxgUu",
  "key12": "C4Rf74kRJasdC63dasGUf4Y2tmmhPCDTSgcv3YrjGzEN8KkiHu6thcsGLXNUDmRzBwKYKQvFqXF1JQ2tFeZMTk9",
  "key13": "4qseYJBE3f3fd9UwBDNtpvGaV19Hih66Qmk4HRJ9uYsuiSHoUtFXDncgmLtEz1SWRkH2c39DHidiXVcmep62WHv5",
  "key14": "2EPrhXpY7ViCv6UiBLcRBBLnvsP5QGveeD6MsdE6vK5isD7pE5oQ6p7qsUGkquAAw1UMhvZEXUb7k56MRXdjK3Q2",
  "key15": "3Xh5rihpTyPFm87kcMpDNLiBhi2ACkHZUbD883BwwuXv9Vp1TJoUUD57MLWLWQBsEE3WbTqaaw2BRxWGMCvTGfYW",
  "key16": "5Aq3Fj7CyensPcEXfuKFpC4iMnwMyYR9JPcsoA41Dsb8LMVrd1gehVcYXoXebJcAi2hMN2kXi3ZNAiqq3vSQQ4sk",
  "key17": "3JYWErkHAAcvJoggCjnHh3aZJhAbm5G2GTk21QFkW8MXBaUiPCM5eQocYe6hgm7uoST5hAaiRBdEYLRuuSfdS62p",
  "key18": "26QW5G2iyhoZBjN2ZFa7LJ3Rkjf83gwoktD7711xNun8dtNoDP6k5WkLEi9Br7WHsuErfPVWRf2PyDch2hQb8UBn",
  "key19": "3jtqnc6DypPi3Mvh9jgULvYfBjRQ3MtTDJzuPj23v2nErSqLkTuK6xDUFYoec4LPiey72C3MKrSPjhafpufu8ziJ",
  "key20": "4eXwmvezbJZadJsa38sCaJTDVp1DhLA149wsWxoiZkmWhvD74Rrc6ZKFa44qdq1emM3NvmLTaq4U24PF6zw2R9rj",
  "key21": "2YHqyvt259nEB5MS6D1DuwhKUyNg5Xo1zdZw1rvDKbyNGKsFwhhVqWMCzY8jsYVZgh2r4cyL6ofde6R77UtFxGRS",
  "key22": "3LQs9XMW9SubYvsyzzrRWKt4KWaGVPR7u24MZncYafk2gmRAfkkm8uRuLNMC2PyTfqLJ2EVcTeu93dudjMtTLjcY",
  "key23": "2SuAYXMYN3Fpko8Cx6wUtm5QF4dkMYT5ZvrLywFmBbSttaSnShTP1g21NY3azamgYDoKRoFdAxcem6cFVJLsxcoN",
  "key24": "4V7sJFSccLrHs9WNAW9k2tdSdxbNQE6x5u1g81m72ukLjvuysFtAPvLCCGqXZg9tqhSxGYmx4EKVoPDVB2BMZJ8f",
  "key25": "2z9VPWdfZvzTKp8sJLV2NQ1ut8izribsDvuMWjmFLFje3ZRb93K7xCD8NFQXmXW4wWMqrLnbZRcYR1UfXmZmUXpm"
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
