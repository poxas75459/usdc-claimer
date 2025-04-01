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
    "5oak3m3ZLeTcZAHQe2qbUUN5quBD832pyFVr66JtSkDDL6zGo7dpXTyCCJWV47HQdPyVYHih352frXfoDMzYNSc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39JNoYvWe6dSonVFZhaBGJY3AThUhCf3Lqt5t1XH6QqL6JZvMcpPTk4YMStevLd71q4tRkVPV51xsjU7gofY3eFX",
  "key1": "3KiKEDYX1ZrjTG79YTYJsD65e4fHrCgT8P8uPnGAdpK1S3A1u3NASLjcyEoB64DD69faHPix1KRYDzHpzVAg9kmB",
  "key2": "Wgm7CR4qanqG8yo7m4ejhdGKhC6fT9Q4F8i7ai74nj5Ka3HgDMV239VoR4YC7v2RDq7P2ryUHxLyrKWR56EgPBo",
  "key3": "bQ6g51SfWsUJaGU4Tj7tvxubvbCB8AwZpPCvmSKU5EuVTP6ZUUPpFBA4RcA6k456ozJ3P8V7z3a6RvN5r8uTB7E",
  "key4": "28t9i9dLvh6wQBJDKavebrQ7B7RSCg5tbqVFTXXBtaKM3gp7cBSp2FT5x1Zn5UcSkcwh6mERVganBRPY61qhYgbs",
  "key5": "2YvCtQkQ3GtHQ91mqBAciCybmSEPbXEASsFRmvZKNqvCrTdBv2P9G1z1811psUyk9VdRpMiQQh8UNzq1QwpySThR",
  "key6": "mWd16L61CfF5hxio9j3p7UzvAyhixL3EqwK4RUS3G4F2wgBe5e4uz2WU69YYEigw749M5HTGfv7dwLH7gmfDFL6",
  "key7": "5h8dZYpQFTX9LFYPhuEYy4XZmoxpTZ28xDmne3mf8FgtTeRKTt9mA2bdmB1FNidbdqkJdg4vnmLCMhKCjDehAUDn",
  "key8": "5qbbsbbBVUFdwuBczZVqZ6zqxtpWCpnLVZQSrzqDbrUB2ZGJHRAgQ1BDFKYj2jbrYDfvBivJKbKoHFkob4MCPTyT",
  "key9": "49nFqSgsXGKChbAeTV3qBYamc3H9Fhuc18gJ2MWYxXv5UxCKh4BkTrZt7bULYQtj7KgPSznwAFCNHohv9cn2uUAo",
  "key10": "2tP1ExhPepkfNt8grHG2jeZF1oScgtCWz2F2kPyv8rY7neE8F1ZdfFhxFwfs1jmpHHcoKDMEjBQbC1qLvkTmxKcb",
  "key11": "48A7xbZa6VB57LYDfrZMs7fXpoG2xKefwHDeoWK5K3ypDL21JZpFZbBYwjJCpABbUfjNDQffmdEUbmk9kZyen4Fe",
  "key12": "3Tb9qkVTtRMQxmjYkwfGdabwTD7MxZKkv2pvohxDPhtZXsy4dFN6f9aboe4s8UU9TQzHgvwaz1nxsACg6RHZhpr9",
  "key13": "3ymwedetAvSFABgdCFprDS6k17eUy8rep4NVjTxjyafhfSVEjrVznXHoKAetgGLWSos262PCTkAZDLpufcoh871s",
  "key14": "5NoxGJWBgogamWJUxR9fFvTCavJb8SeTXFDX3hQqxi85HEtypEQD1roud5TcixzzevcPdrej64qtuUZUptUYu59i",
  "key15": "1bLKHGb24fcrDRLWKiixdwcYwQGE6mpWSixUco8dJyvqxzFhQa1NL2L4u9WMXBNL1SExEeS9tDUTxmJkszTC2RL",
  "key16": "43CeVPgPAq6F1iS5z3XHk53o4JhAA3tUTJjz3x19V5WCYQSvnkDhwDpuftqPqCx5uvswwvMHN2MHdz1gFiDzgMSA",
  "key17": "2x91cCKYKekgzu36AUSVz8WmsaWJmv5yLkQ69k7rCYmmX46mViPWLr79BuJhySRBWQmkaMZRWNRCMXYADMkdC4cu",
  "key18": "2VXRCBb3Q3ynD4UHurRtUbnrvxSgspY2spnts27ZnmFr5ZF5vseG73Nu3ihwXHUwijAzvc2dacnFDvS9HWLB5MRn",
  "key19": "5aBniePhE9hDsJ4rG4CxeoZgEmqHdLzqWvxAMajubNwHZ6Yqdu7dichBxFbESShZNFZqEPzM21QbZDhyQ3aeDFTk",
  "key20": "Xe5jKWdZSmqJ4yKkxikeT3sbNcXcXswfpfFsYaL4eJ9omSH55gLFpGBmPvTmHCpaY9kwMqXYe1JWuMcVAH75Bhq",
  "key21": "5vDn31xx14ZNTZMN29K7jTF1UXqqMfLTjSdXXBqdxzp6xMqT4cES1hTgodz6aGvy4dDQhmjgrfwvvCutPjc9Z2t7",
  "key22": "66P6Tdt6RwDD1oWW2LPA1JSvbFAZJpsH5MtFUnXvW7QK3Mh6w2mYt3DtC8uKGaGn4qSNTCXWadXzsa2jDwy5ANaj",
  "key23": "3eyFXxWqMPYnBQ3xMA84k4R4ZoQuCVNaTCdb3FfiLZtYaUSLsMSLmhyuFk2VFA2NfV89TADV8HHwzzbZgbFGemwb",
  "key24": "2HcP1qZ8ikphuYoBCVTziSnHxxBT71R7mrnpXZRkYti1Yo418ob5iDooSe2bbMYagoNtB5ugQgQ8LNyd6adeh3U4",
  "key25": "3YGGq4fngvc43PPtfk79kQ6yqoRUU7717S5VU9Yp4NJ1eeomiaQhC3dWP4BxZoNtiYL7re53tbKEP2jWRftPwKUc",
  "key26": "36t8JFKwVeKv5xHh6k6dqQzBExgUiZwZgX61nPGyBT2WvUg7eiNT8bYrDf8Gys7NMX38tiCgbQpYvX3f19tcwQwY",
  "key27": "4UGTBn3bhxUEWN3mJpq8DQvYegzdmFqeLxY7i9jUFHzFtJRtzPspHJeFDqv4sYaYCtCywmaWYSB6gsADhXJVJR4V"
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
