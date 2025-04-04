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
    "2HF6akVuWky2nknci25faSdchRGz7QCGXkoDziLKWpvqfnWzgMg9R4Ks1sqx3j2q7NRjxzynbLHadGzUDLRp3sXo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45sRPiqUrnu3XQTRoSPNqKj7ZzeTvEert2TdvyvLuL5ZuwGhypAB5qQtxD4wUDWCocvP5svosbkFCUi7cJ2ReUHz",
  "key1": "5cpUnXEgxRnXn3D6SiYJC562pnXsZMrGn36PQnAs52wuiP2asaybPcn9sz6C2JUS9bRtiABjHCjvLNp3cd9Biy7z",
  "key2": "5PxaSvHTMTseEmK6QzDYkNudEiG1Acd1pda1yixqTj7sv4oeKdWtx4vPWzXqWCxZhPAayDgKBeBx59Fna38LtNVF",
  "key3": "5xfxFxGNBM5ZMUHezENe97HLUGUjybKVbahQzJnmvv9Pp1Kx8a6DYiYgErxkvEmLQTR5Gy6ckwhtKyYevzVNMhG",
  "key4": "54v48xhebqZjeiGgySZjK3rUnN5dkPJ1JtqcCRcSQnaCcbQPUXSf4rC1iWXiXdJVrfBjaUmVhm1ZfYNfPy48h1AZ",
  "key5": "3sHJbqRPP4Wnh4wGtjJLkbNaxx1j2bAhrJQw1vexciNRvLyhLwPUr9LzY5wCPi2KpBUu39dW5zfPLrURPWEcmTEd",
  "key6": "5KHhCWCu4p72sg9z3kxjzN45zKZGDSzBykaRZHnQHZiPuRjj3C8Vfmwj6b12L7famh1SQWkLZuHPBTBR3SZaLYg5",
  "key7": "DmLLVb4i6AXhiUPZA72MfYXjk1x6j3w6i9mMNCKjaBg8XbpEm6qYBR1zFAFZXt9UNNC4EH9TCcMyyjsLL6z29Q9",
  "key8": "3XGvnf6DsdEwrcKitVCY6GtxiitM1vfPhinc6KoQQGYS5Bdq2u2MiVhQyw8yDUzTkFFBCkQ5rTUNjnRnp84BN3zX",
  "key9": "omb84AEKQtSTWfbUeokA2V71Z816GCH2fhGXQ3GNpzB5Sa55tbmo1v9yzgD7Zc4bmXTJVR7BMfMeAaowoKuW67u",
  "key10": "5qkpVEnL1oq762Z3B8Wm2Lb6CUHKHHpFMASWLdcpyqEe432gpGoHrbMwdotQXaNWsbVenc26gF157G5hz4hLZQsN",
  "key11": "QdeKSQJPKHB3754g9EGHBorXxHf14Ho4z5bBiWaPCHf1jk1wskug6M3oyeucJWrd9HMn4ncHWTNNMU84B66mhhz",
  "key12": "3vjkBeABAGNV69baR4EhFjbtaw26EJgWcB6vHm73Ki2VxwbF9Tt8h8zQFgMoMxoR3QLSY7i4wv5PvVB5PBV1R2Jq",
  "key13": "4zagDndp22uDMqbjZT6B98ZyESbSUGYUcNPRB5QrEYPPrA5cnuZVwZ7YvEy8Qf27U7pCWnRK9PhsyYXqBpCcuhyF",
  "key14": "2ETBedEn6gDVTgtcHBRMqzE5XiNiGMfVQUrC4WWYWkgfbhQt5af9HxYjB26Z6gkQT3ducpyRUvVRHLCyG6NjAp8A",
  "key15": "hTNWhNJhB1XARJWdHRuXj8kQ8mL2oEzsPVbGbJoKZnRpbfjkXvVsdkkC8dGwqiVkekLe7ygEgFEnPNdVcMjgwox",
  "key16": "3Aq52eGcuZWUyob58iPbhBD1qwUJEzXQ3vmhrgEsLuJbk343K6HXhmcRQz3dZFvjkACVSB9C6emdTEVnoV8ST1QF",
  "key17": "562ikFkr26KTzGzL5mvDPhNZ7G9ahGAKqJoDyuSvovvTsXjcLcsSV2ZQx94eEVBEfetqUMEyD4GTQLR1CYcKAt1",
  "key18": "4Cc2rankRbFCESs7DW8LCN33agafpHPFmRVgU3Pqok4PmZ8NgisF9t2XXhDqEryJVjSb43ReDEgmHPkPSDVRZ4Xo",
  "key19": "46r34QukA48UPboXJSuXXzGyngKuFUNYnMJjNpi9uNssqxDPijKrEwwueMywdXW9T3PowYrc441FRYCtX4gffxFD",
  "key20": "WPLDoz2Tn6LEanaQy2nEMp2NsfXgVarfyw99ahqrq6deVp6ANm4FvUAmvXaTHANT9CyUhMYQjQfWRyCNqMExhX4",
  "key21": "KC9iEq1b3AhrqCamLV9r3QtSustsdDiRdTVvWvkkxEoefkuD95t6mHMPnFb5UmAyrQZXoxcqm2VaArJP1XGw8sT",
  "key22": "2zjmGdAC7UvbxMLMAa59gZj5SPCEm7PskgEFN8711yzijGH9UQC6YBadnSnx8ZK6QfbtqwHvkfrVUgK7iddsRMhY",
  "key23": "5n7GvNtKX1rj8FAscos3JsyJNtKfmCMq4MdsyKR3KHJ6pCu2Y2VQ1oKKfWgxFYLk5ztMczxNb4NDqxeoEUr527cS",
  "key24": "2nbnep29CdYA8EfQxn2Lj1yKHuKS7ZGuqdhN4ac8mgKpWjYNp52XYkHFJZSsV7pKGkjEpB8qhssLWD5cT6Ft9EVx",
  "key25": "RMD9DbwVFQxnGGrKhvd168j7ktVWDBXDkvFzd2px66rgeQw9V9KCeYy1FmgaKB4k3NEzWEuYhSLww9rYbN2b4Yo",
  "key26": "3TFGh1KDNPCGgUpqrNuJYnwdaQiEefVQ9Akm39kqhfPyAmMnNC4dFyvWSS4e2ah1fR96twadGP9xYPxKKqRzKgJi",
  "key27": "4Tti2PhY8TjpmnMDr8S6pcrgAxqQwthpQXxwcVz1StkjSo5957F6zGMdZi2gj4QdpHERVPk9FwHHpN1A5UHtGfBw"
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
