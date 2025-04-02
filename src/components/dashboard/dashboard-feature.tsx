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
    "TEpSdekqjVCLw8zZdauSru4PG9kcHt7Uj5yVHVGKoDzrdJffE4nxNAuZE6hr9jSRM8DKphgiTfvnGrk1FqpTCpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31D25rbQnxLTXa3ERzhcEsodXFeTx1RrR6kVf7DMdR9ZaaDpnzCfVjvwxdtGzf2vwrwwWrrZHAUHiXrLQDe9zXu5",
  "key1": "5xWGaibiLn3aVxQ2cFpEbCfuEPi3wJwfBQfvnFqL71W6mW4GiTvLES5RjRAZpEJUeEziQJnaH28fWvF63Vrvjnjw",
  "key2": "4eDife6oPGkHXxpJQZ1ktmhjBm5YZPEt75GaTvZV4Y3zXGx1p17nv6ef5SKKeion7jgXbz7RpJU1QwRhTjP4wXmh",
  "key3": "4oXCeV1DFxBGKgCEtEeNNH6Q3KcWTtiSyecdHTHnP9CpzD9ibdGL1bg5MXgZYW2xMVdqGnWjtZrP9cjNq9f26H43",
  "key4": "2D3dFJf6VFGw9t7iS3MxW5ZFr77veaH9sKFvRHnVbpf33yB7yfk5wR9bXsod6jyunp4tkCz7dNhkDFJnNrF9AUzt",
  "key5": "4f92ZFRBcGfKZvQGnk6zd4Eu72BVgch61KLbvSF6qBZTBE5J15fSet22w1jnSJqPm7FJJLy7hX7B17caiFX6AjQt",
  "key6": "KH1k8Tdpq1rvWnSwMc655Y7yUwM4UpcLsUFe2vcnjpPYsD6fdcfuBVuSGgyM2dzykS47obLsKN6fGFRyBZMphBM",
  "key7": "2uVnRs3tYwwMNrWUqt6ck1kq6FmTbyVZAWoRbyh7tYfqoBJiXYVS5R9CUrB6D9j8rosTDvJNJcxcFBVvidSJHeyx",
  "key8": "3dwu3MaXMzmkgnN5C6oNsHPYWFeSwVE2RatwwdENjSR4zZUbw9QdZxFcSfTGchW8cxTs3TUZPAgnEMoZtbfitg7u",
  "key9": "aEa1dheMQFXLBamsDNmA8XqLhGLsA2jYyrqbwp2oBqKHiyH9VCzHadVofNV5Ze7nPxjmZ7qNNVqbWd3gTZPSFoU",
  "key10": "2sDnop9sedrshMeLdz4TApztSEUrGymPPEfs6ChvT5kcaoNfpLZuDSjUmeG6iCt4oz6MqnDMUKenVsPLLNZWuCgy",
  "key11": "2UuU9em2AGSjdNQCRgqRwZDgDehHVH9BPfAmkPXEGpM1munZMj6Dq4RTYJcuQjTuEgyqaiCK9m71PBQJUWVWetKj",
  "key12": "1cArMYmBh2rrZ9GYMPeizPB6M8ZHrexLdL9qZtB2QCAj7KRW2YZXUEhjyuekWRmjRckk9yJnM3WdrR8uN2yJE3G",
  "key13": "wQxvtHEqoyHwJat537kUyUd6AbJzUNgFxWcCLKZW4pg876YjABK94qK1onX66vSLWsct9xuLhCy2gUVMSTwJZD7",
  "key14": "2D5oFXouMhobaJX7Ce84ED5XyMrrbXesYYDfQfxASByLXB2zzTPgfiWSQeXB9r6Tfimf6QwypfsuTnKKfAz95VWR",
  "key15": "62rcUV7vYDjyoSk4uLc6ha2U4NAsrckVezYY2tfJiDVSiEJnHVbVjGRS3GNTa6HVSL1mFhhqUwaFxv9N6YKk8bUN",
  "key16": "37AgmrWrqWYUGcgqG71mJZZb6JHpZrdFjAj7NbU3JzYBDsCNBDzjA6WkciLDBaP6TzHxZ2qVUAPN7mfPWavSAda",
  "key17": "4X1UpF4FS1NQ5gQiUwCvk2pfp4AbQ2troyc2hPUGYs5BasVygC6LhWWLxWv6kFt3bxicsbF2LudD9aXpQwcut6g1",
  "key18": "5Pfq83HQbMiTu2r6Pt7EoBNxaFspyMiwApchhFc4dUoXCBYFsKf4AbjNHPXssfy82JT62e5NZJzSW2iazVf5Qh4V",
  "key19": "4Mb6aVWQgWTTq4Sa2T9Mbm2cRBLUwkRiBvWJATvYESfGmn3bcj63uAX7dYz8eqS1rkASMSyTdcAza7RwsYCJsMs5",
  "key20": "4QM2Y3ukfKRdZykCgzso6xVjztY6LskPGrECGEHr832tURrQcmSeGYT86ELBxXUfpC4MZeKoJgeVLPgr4MVMYadq",
  "key21": "47BnueYZtrvZsUy14viKhVTgpgmhxP9QJzo5RfmJHjHgoH1HdPj1Jv7AnjMK8kJBKBt2vHQ5brHknvuWTQ9pHZFS",
  "key22": "56eWuMZ37b6zBgVkKreB9rCT7CKzkfEsQB8d4KV3BEHaVm4o1AiiHNmhUYTEBFtVtKP13465cp6o7LUXRacLm8R4",
  "key23": "6LzVf49k9xU3LNK5k6RHh4Z18goPdWNkBYw663VXcbpvoFFCT1mM5JHgBp3yYVYv7aJeRHSD2fwm8scVcFPuPKW",
  "key24": "63QGQUcZLHXt9D3ZCxq9vBFmrSwcdGsByugkcX4W5jcPsyuQpz5jqSJuoDidSB4nKUeD2YFGzECng5hpApiRTZa7",
  "key25": "4RDiQDb4WJYQY4kuJ65Li9Q6bBpdE3zaT9wRrV3tDGoP68NGMymG7874jCBiwEae1DRvRhborSMzCJ9dT8qEbyPM",
  "key26": "4o4mLyCkkoJEaK2fkWDLrxLZF2eg5Hdkhn1zYWWsokAELipxhyMhGCXueQrhy48p8xCEQTQTvyGFKa17c6WhXsMz",
  "key27": "4eSBumiuiFUwsQC7u8dNCas6Vnvrjzutuwyxq3T3m2o8tDbpNtQsXutYXigbhLDnZC8hrDpKQiBPEd4nD26g1waT",
  "key28": "Z4uCBm7AzJfjuxKd8R9rfejHsNc8W7igQQW2MAg44mo4xgKjYQx8itBwu5nvkca9xCgttS6PQoi3fjdHwr6ydzc",
  "key29": "6RxCbNWkKNeUgP7wmLreQ3wjpsXomcFyDVtECy6KTyniGjPh4wnmPqwcH9CZYssrFWjpdaePWAxCSwN3i8znTmH",
  "key30": "BCZ4BYZLw1SH83fEnseaVoLthAN9HzuPmfLGFLFEUfPeUPei7URdLiPJ2jB2MXRRfHvEsG5FHgM5JQ2L62P85Xg",
  "key31": "3QDjTWAH5YAyuttWJg6WELuqR3bNVNbcgTuJpgnhaqykpCRiAQJD1rYy3hpJvirBmFXcPaDNQPTyN68xaj7gciFW",
  "key32": "4bECftyFynSSymBY451KRHvq5D6jJQNo6N1bgn51GAgBgFVNCMBsegzsSAWDdQKDfttgNk6mBXxskqkWo62uwQNs",
  "key33": "cZ5iGRXNhG2QPt8unJnwu5pNo71JVtaMC29PmCkfYKJ5vP1uzegCzGEuRgcJERga34Cot9EcQd4XDb8DN7Z9G44",
  "key34": "3mWwhJPod4r4tCwFwzFkyqHrTnNJyyYFj6QQdPowc3XvEX29v7aSkrcdPDRDbWpZpTgCYg1YAufuso1aoyb8Yq4k",
  "key35": "pT5yJ4ADbxvhCGD3NXLVTAqkzZXSwTSkwMUeYKqaPLmTL3eJ7N9JAvPSHC9qT5tVoktSAcaBTqvkPMdrqGuAHd2",
  "key36": "RbvNUJK7EPgQ2vswSAQ4W9aAZGxpqdzjH3Y4YQrNJxjXg3iJjDFXvqNM3UHaGq9bYG6D2fLPXYympttrCd1PnDQ"
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
