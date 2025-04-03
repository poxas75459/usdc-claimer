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
    "2WNnLHK3jh1C8Umv6wYmA8wVJffT9mGa4RpJ9NtcLXJiCUdqSm8mcUVaHoBaA18YL3VqBZmy6ePTrzaa4Z5XXizp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t1RQs2fGcGC2QypbJfxASQCaxdD8oQqfbvLFz5QhJtTymbtVLDbTEm3C4wjyoj6HpzCm63bWbjwm4YXg1fMs7pE",
  "key1": "yHo7cFQp3y5V8ahnsTkecajcTWW2qRZ1aoz86SiDow6sitkR77efJCfn7mcv9urZwzBPX9irMD5phqagf2WWjkR",
  "key2": "fPS67SfKyGGfNFqsLsqwVwT1CN1Lxu8NzfPHmXfEdUf3MR9FpQifToWYaCxX7MS3UDggtGVnp3VyE2bpZpG3GZP",
  "key3": "4HpoTmhgw13VxJrY2pAmDcuMmchGzucddT4n81Ufb5fSDpX4L8PyomwkJG1Nf1jkijFEdGybBp7TtBr4uqSeJwDP",
  "key4": "5DNZjrajVDCN6WxvEbK2fzmh7R5uV9JE46K8PDFgunAN5kF2m5BbmDir3kKygrBY1wP3SEs8SxAqVKingXfJSa1N",
  "key5": "sCvaqVsZkqfFTsSvQXXmKcJm9hr3sg8tmAphG7axCkM1CQQMPdezCAc6XuwN5bjCMwQX791tWaa24mW8KZP9vpL",
  "key6": "3cu5eioQeDXHQZe2RvUDcSJijzkXPNYSrwapr5LZPSSyHmbrG69utLH4PpJQGqVr31zgZJ5jrYQkMs7U6e1AViYC",
  "key7": "4c1UGJG7VQvUJcnWWCYEcm7i96e1NFisSWRQ7Mu45UoeuYNvHwDGeKMBRSnsSwMpfvByDngWmhFkbeuh3RdV4vJf",
  "key8": "2Smn4pC8Qy1ze2o42hHsxrpJk9RvYzJpuGx1w11tpkyHAE4JinkfLeEALSrVEUyT5xtwQmyJPW9kDeXzT3kqPCKM",
  "key9": "NZxaxx9LcpQnv9Qw1jGaC7hQb956u33EUNU4m6U2bNknzVBkZAYmnbmyzUkdhDjXLSCG62HLCHsyWcydbqF1PBk",
  "key10": "2N7zjJz1oSetocn4CbheRaBYLHDA8w1fHrfbFyDMg27QsfESQ6n1gB8vxoZmyuF6fcmrESriumKVuQcVKG2NWL5v",
  "key11": "2sKjRZQcXJskjnUbhupED7oxRcjcxhpLs8f8qi5VHBjTcqacMoweAVbVXS36DRJh6T5nsgpdW4Do3drVESkWvoAj",
  "key12": "3a8Nmz6DVPkeHg5ygezyJyeASZLYnxhGMmh11UuZHLbA1Kj6uTF8kp3i3qD9M7nttSz692YpomYGWuUeg6WsW123",
  "key13": "2BwKWMMnV9Lac1YzYq6wWCa9WUhELd2SodKhA6AdkyDDfES2PJPNR5WwF7ruTaYXarPbqxzNhs6DG1SwpmtAY9hx",
  "key14": "3EhY5HFsRDH8JF2v5hbLPAEdbLbjxXcgwhNfDm6JpiN7Y5cdBBACYv5qnrxY4nCf97B7mXiAnEtoHxp4QHwK9s5M",
  "key15": "57mzQQSfLT6FY6nNqGFFXQX3mKkXGcFcTtSAfXzYziu1qaokpga5yL3gPoQ34vQEmNhjuxp9tA6T2An25Ux11a1r",
  "key16": "58m4FASL7JKCjGACEJ2jSndNj71tbvr3gNMGSPATSmBHQ8kf9UvvJGco2L1AaKdCkmtpXNf8sykYU7z8kK25SKVz",
  "key17": "4mB98ec2NcXZ7jVFujTHJ59rPm18VpuMc6vgnbtMwd9RDpC8QisD2iNk2vBcGNd5P8qVWvh26Gb6K3uskvUAno18",
  "key18": "5NRsnqLGBMYZxFg8VzG4GNB59CFkWhsqEGi3ts5aELsV8YmvvkcX1A8DhZeM5bVT3aMGJY8YBYZ6ApGz2mTbCJtz",
  "key19": "2VGJA3V46MF6ZosK7ezES1KmHh6K3X3SPXrQoYiW64HFJX3vHuYMWjSWWv917cMWbG1TjWP7hesdtVEnqx9zVm4P",
  "key20": "kKZnoW4ik4KjMCXspoRVayBbP29NPL2q3p6VZFoHtzCrPdqhtM2PGqbrmMxHYVWTi8gs7WrxbVR3RkjgdMLY15Y",
  "key21": "24TP9mPnCDgRU19wkDR5AsD1stDED5639qs1dzwm3raGUNhZr1N3Bs9KgkncFvhvqaLHFMYs37cQq2A8na8frKFN",
  "key22": "5v4CcFKq2KvKcr5wYJFVtUipjXb6NpTuep25Mcq2KheirHQr95s4yNXiuZcbt4jTDVpvb8poevAY4Z61Ts9XbLf1",
  "key23": "4HyKniWszccTirY95bovtEbGbnJJBJ7gvX5PuRLAKmRHo3Cj83Nr2q61psX5GjaNZrYBEHbXwHxgjyWNcnuLgfhM",
  "key24": "4xogm7775S2yJyBq2ton55so6KgvSzRzDLNUBFGfCm3TCiScSEeycgESVjfakr4xMNHg6qV8DPLccaHBpTBzACfT"
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
