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
    "3Fufb2KPfmX3p4ucHamsLusHC1xosK3HgZ5u1XY13i7v2GYt55NzjGfTx9NRhekjjfgYcZok6eYZA5bD7HQxd69W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mCrakUnTv6ntzV9mf86ZD71bQspx5dwgvyWD9qZhZLuwgnDzQZ464hDJR3gNYVjTqzUM9PJK28tiRqAJeAz3abb",
  "key1": "2a6azrHctYrsBP1fCxwPzKaAtoms3hdVVykM7frPNKsHRwiAx3GKymSrWXdtJTtgZftVNdWs8cafoXtHKpGi6C1g",
  "key2": "4NkQFnvrYbzQ3U514S2EUVyKVU7dJqe3paFAheyHNYsy5XdG6RHqaEncDN59B5bfpYEvGsvY919UX2mLqCQCasGE",
  "key3": "5paWx3cqAjkXVD75k25j55oua1rgA7kdyGUjmAaAiW25oupJLTbK8wFA1oEJzpgxNJZjSC5hV4t97ktDrip39DbH",
  "key4": "2NUugH3H6QoQkhUV2tdWVVzBSPCcUwGLnVH9y3GWLBTy2vy6UbYZrtfC6zAj5svBC5tyyV1eLzVpb6RwN7XmfHby",
  "key5": "5Y16euxxJ17r6aPGPMUhAAqERucCma3Jy113oMbR53k9pkLEQU7MvT1Mmg3ZR4BD93AdP6yPqN9z2xYp4wwL4Qox",
  "key6": "3nNBbmyAYdTQdzNc7QY9iF3TmD9g25JPvSZoSyXsoVKXk8cib3RBFBduRxA1uAXQUJwkztWvU4gzR7zLQaTJdU7D",
  "key7": "dZQSCnfgyvkcgwXTLv2ZTjUmpAgCu9LsLBgL8H1YopNmgbUXxwMu2AWdnxr693gA27BELk8yMMqJ5cgv219k45W",
  "key8": "35tyjrBkfo4ZUxaM4ZcgV714VMbZVoHvfHfJRtwNU5eHXxi7soa2XwPg6Qx8YUucetiD7n9BFkMEZsQbxJWB6sw4",
  "key9": "2hfDCTwd4e35eEeu3zJfmhqyvkYKLTtqVJyC2i3GTQDQM89xhAxTPLhty48AehXVLu6VsF5pbEHtMxqaN6H5FpS8",
  "key10": "5HzebaHmfy151FRDsqoPPMD5CHzDgmdGWEwjg3AFp6RuM2H2iqWJKGUFLx9PGQLTPXiktXoMSWZtvuiELi5kvRfP",
  "key11": "3zL4Xp9Ni4MCwDFkykf4v5fwxtdoe19uso6iPTGc9jg5bVKq6iuJcqYAiC1JMkmr3Tgs7m33sTLzP7isXaTTT43L",
  "key12": "2fctmbsGwggsPjQsXERo3SanSxw3DYcZpMQKs718jx3JHPC27E3VWrKdNaq242a9EEvxhiYUFxn3cHngJeddvSv5",
  "key13": "3cASEQZnvGodPVTj8KveMtMKwL8MDzWFxDg8c9FHt5sAPkVhwKsAh1tvkEwVfGozGhTLEqpjj1zaovFUtdFnFdXc",
  "key14": "5fvVfbZDQT1UcKyauXLzpLJ4oZTp5vD7jajHt3oATa8cUyVEVAXbHAm4jgNWvLtMYHct15DXMvMEy8BvDhdeYGRZ",
  "key15": "4XCANJ7MbekfvSVY2cQbu3rhvbbFki5j8nZeqYmZnmJWwGa2mLBCA7T2FA1fyd37fDqZJ3m5rE1WL427H1EVtiLy",
  "key16": "5qxn1FkGry7wLfTobzvtvY6c7HSYaFsg7fQHxe5rXGvM8C39z1ADYnFHrZyAUC8C3GYSmGteo1a13uUrfzYBDYCN",
  "key17": "5gMK5jgiJvDXhADYzdvZdf3r45E8UUkMC67d9hPpQdiY364Y9rEkUEEf3xAL4mCBAN2vXiEXVj18MAxFMCVBkCKQ",
  "key18": "Vvzm1h662EKjsSYf3vQqfSKa3kZGhRV3zeynp6Raf57Gpw3caE5HHV9uaov7ygM8U2Po6YTUyFcsnq3SYgxNBds",
  "key19": "4BBECKpiBQqb7MRtLzDMghbobhuhy9zZ3n6HKREYnNrgw4ic73ZHPU6js4JM2T4sgCWF3Vbvt3HXdHcuLUWVYYL2",
  "key20": "3AxGKYzxhdCwn88uhbB6kkE4TopjEjN9Z1WJspfo8qtPCcEQ7s96kqJYZKC7d8cSS95NebAEHhVmTbVT3G399aAb",
  "key21": "2krKeaXiTk2X7rPbRiTR2zdh6hCUKnvmqNFnTwiLFowwX6pddiHtxYHgyJH85SxDJySZbXGjcCCwKtMFurgCJZpQ",
  "key22": "47dqm4V95esrJvr9f1Wbb8MjtobraayHPijfvQCsH8HoKnoKbPDUSmQqBnP9Cypx1CEpM9FzBgyWJ2HkUaEppFqV",
  "key23": "5oeCsnc8x3UUrwbdoBN5wVtnkgvn1QFXMj7eU5fwe6nk5KrfxRQrGa5Cg7CuQGPrwyxPnxVkEh18zphU5Srj8uZf",
  "key24": "51jxU9qbCTtEaUkBAks3QCbkYBP6gtgsBnTbbqyeBkhiVxY6zE4uYF7LDPhMMAmc8fb1VaMUPKuhYsxDmou6vgcK",
  "key25": "2zNC7TeoxyS4PrqZTsVWrHbS7VRbyCU4aBvFcGKwqpQsPM4TTX5GqAUaQLPeqnWS4jS8CkvxPF348aW6ri99LLif",
  "key26": "uYZWbX8hsTxqvydzXatozdTx9p25j68padngFPWmNnYweXuyus6eDtJTT7FEBGd7aotNVLUuFogxAtQHA4ukWwd"
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
