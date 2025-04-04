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
    "2XTM88b5sZqaDLUYGN37q5Wtn9iApYLdyzGcpNj6v2gQEdwVHEEYEGmS31Z4GSzAoznSWgqX6jxW8bme6dvP5B3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vh3CHdFb1WP9kRTU4DnDzj2AVwvyXXptNm9jyrLrQVa8HQygjvz9f7URRb6ymZyPqoqNaB5Y2yuDPxos8HAWtm",
  "key1": "58C7WSJQZfCP2vDzpNkhXEJtXpbjRScf5NHi1mrqtgrpdeWDPMXKJrvuigrt2DoNcFD5hrJrUjHvfKfZcrVmt29t",
  "key2": "4PNNYAiR5HwBWrrJLnMgAh1R5dkqaZyrQPom545vpeUyBkySbnbmWDu131tJWf2j94waJT7o1nrzfcqJnRAEbEqb",
  "key3": "34WBXd25szHn8cQTJPKgUWn8S5CrEvy76VunK5ZK3CDywCpuZGQH9v6VrRUmnGS6kRqSr61Sza8HMtAvxcfvomxs",
  "key4": "3tyVVTR29dQ1eoLfrLPHBVHtFu67BnhLGhKhsXmfwK1wEAWusEfov3sq4BLB2t2qaA7E5wG3TpCtxoW7QBgo7S9",
  "key5": "9Jt1fLadjgDR2VDjmf8tQbrno9ZxWoUyjnHXEHvhiyt2QE6dm7iN6JgYTBFZLu9nQxJpqDSGjAUfURsC8KZ5GUa",
  "key6": "2Nwkrq3pgmUf86dHJ1bRdEskzxtHuiF5KZxGT3ri28P9xJEcDREUV8XtwPyqaNpXWjiirzgskFovx7qDCuw4oKND",
  "key7": "xzyNoU1fxG7TrxELBbkm77wEHc3QF5eMoYTpTs248ytKFHNvLj9NxbfXjnKEVAPqMuzcftNu49SDKnZy58imdVT",
  "key8": "2W3JUUrejimWXp2XmxVJYgVRXqKNmzzk8k2pibokMmpebDAEiUKicCMxXEAziP9NJmvTmXx1mNCmkSWoVFTQBJAy",
  "key9": "4sEEhQYwcMDa1yAShuW7NCadkNGizEFzq8gHVuNofKPAsK8HETYtEUk6uNrtduCjhUvw453sEoUrdhmJVKaSV9R2",
  "key10": "48mT1mEgJe6QVytFA1aAM21FgioMmfWW1LxzsiFbxHyUJy3ppnZETrjXkGvJorVYYTKDGxZrDBesAayRF2xwmPA2",
  "key11": "sYCox5jqs39oKiDiCMRvCi2CWBRaG4e5v6NGixLMCHmxXzVMo5XxtyoQ1j4iEFZHs7ow198dMLJCPHbCjR9HGS1",
  "key12": "2KwAFR81FAnk2rXhdDuv8TZP2ahpWkXH3VpFHhzYVkrv9gtivXgWTMM6sEMwUj2KdoStnqurNg5BRvixvUerBrjr",
  "key13": "35r2qFDrtEUsh2LgZd47BNQCnfTy4kyYFoELS4DnMthpJFF12Ze4SeXrHbRp3Gk24mHddK8613VYFk5cR4uPH4L2",
  "key14": "3aESSMF6jWJiatuLwQwcRWnVdJGAdBBHBnFHf1YLUsezDLJAfDLNkp3rZ6AUETgWQywZme4hzsv3X69oPEWUXQnP",
  "key15": "45TCqMBD9ng8HANtw45QX8tiEVL8u1u4WaJSv2fKXo4KcP4cm4LktfnW4b2KW6t3ER1SX1gvA8RyYDQ1Xdhn9XMX",
  "key16": "4N2oR3i8gnhrgs1psnouc8hXPNz6oKnhPgDBknKxh3oSECWUqcRUwWxcLvm9ZHA1FuhYkWkyoY1gwEtB8HdCFJPi",
  "key17": "25zW1X3ia8McawjuuoPRjhQVcaPotuxNVVNxT5VBBtTRqgJDdiN3d8k9PE7dBB5R3376jsLfvEVEJwp5gbANh69o",
  "key18": "5JTkFh98nnqVpRogBQEQ9BQZKwzdzHXQfanXES3UmSxcXQP5giwefgxeo46LGso2HSYsm1tDYj3WvmJbnjxNmjd9",
  "key19": "5se6eQN8qorKHQXodykQXWyeqsaWiuJPt6WJGQjY3h37DAahJwkUf5yatzeUd4j7714jsFMYNSasHBcuVmafj7yY",
  "key20": "3RutVnv8uUxNKfDzn2jCjs4FxwVF5npKBmai2USLkJDCEe7Q338JCfncSk5MxAQZU1HZ458syJiVSsdbDhsNGozs",
  "key21": "44w487dZwTe9e2T84mhpkuxAyEEKXZx7mdY1jvymyQcpdQey9x5hPJ2ammZiq1SEmoqF1gzVt9wrMq2ZJDAfwzSt",
  "key22": "4PZbA6JrHDaMxa9vR4Nv8iT3fE6b5naFEvEvNhUZ3nVcoEtL8F1SjwcQVaRtX1ndiNdG2RqAz9hwnZGkdCYiHpwi",
  "key23": "4DHt9bJznsnJTmRgMtk2Kdx6aNFdXWdgPZck5xk7Sw3cmmjiF77EJ52WcJdrRBiVZAib1nbMmNrjVyKHdBZpScJY",
  "key24": "64LUmTwbhDWzb9zQiNQ5PJCjb9SdQ7fTMz99HpFvFqup1cLdNsgLWfFVkFbFNEDEfCQn5V41x2SZA4gPc7SHLKRk",
  "key25": "3zFfjDstG194HVNJmFmP8nz1grwKgSbQVm4AgBFefMMakSrictDTiuMy2gnqX4xZnaPue2ojAkVsqenDqnGkQhjc",
  "key26": "3111Ssiv4pXtWz4Gdq2GeiUryF45o8ofrbzcwYHkvMVfsibmo7FkrvjDZgUx2WfebBcFZp1i7PVhtzm4FVyPLQbR"
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
