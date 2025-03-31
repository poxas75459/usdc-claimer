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
    "5Z4b8qZsMbBZq2k5McM3gMs9msGdn3Lb6VnXRadQTSKPwGoUaCB1QR9pM6Hwj8X91RroZVRBAg516dTnrejK24Hj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rPUmxL5Sbotn3RcR4yrTmzhshQXqHxcNbg1evcVF4MFkJL1SX3dpsGp7hR5y6VWrRMqTyQtwreDvYoHS6RQdUBT",
  "key1": "pU1egBJRdiX6gdYuAP4AkzyxruNcf9VhntXDQHYJsPnNfHbEPLsu8jRv6ZnFPD255FLXu3PW1T4dPdbtJWJTfxG",
  "key2": "4ASjZ91kSzPCVWVd2UMgTcnxdBV374wECBW9j8W5GzUHzXAoVfY5GYPYimq1js3AZj8Bb4dW7wJRwPjkMZfm7zkP",
  "key3": "5HpKDZCewuSAHkxojAdsB8KJ6PhzwXrd27fadgsp6E5CWHjzEL7fmggHvzyxryxQT4im8YVs6fDDrpS78N9fJNqH",
  "key4": "3KtRmMXLY7BKgXSp74ADkwhacYb5b87vUXYVZUvRZHSuAhjT85aHMwh6FvE8gucwbNbPpqFut56fA2xdkiTvWbcm",
  "key5": "4ZwcYRHwkdKPdoEwzciBEqjocAgFRoojjFGF3rhT3oUtcbCGsdcwBfGYTBAkzUWQnB5Rr9ebDg82hUTSZxe9JSTT",
  "key6": "2PLakhGHEcet8UYRxbs2vpqhi23p6jeBXZdnmkJv7YtSUdCx5HqFgNG15gibYRv6GJTnLwjs4hVNxvn1gqapaZBN",
  "key7": "5ncChhaTPJbz1ahPJgzD6zbkUB14QhJirv8iyhb3QrjXz9Sv9qGGksDTAuEKAPMjT4XeMGzJLRbk1v1UGbmskXn2",
  "key8": "48piLcbPcCoCMigEHt752YyoV87cDQ5ts2yXrbcCVMexoKjcXsEKm6hTzQZMBXSwmd98Pxgpz9uLyJ59gXLZ1ZQR",
  "key9": "mW9NZGRR6LbujTBzSgi3eF4DRRuqKp4Hks6WVtqpqRM5kpwUB8iBaJZTbwmYcm6qiUNnuhftZuhDA2tonPQoVwN",
  "key10": "5RW7h72pTojutb5daPTjHenTMjE9dQacGVK9ic5yoXZhztwLZFsfX4eiyzC3ZMPery74iCYGmGE5BCVQcnePwZWZ",
  "key11": "3uZgEoAc6fyFj9wRusohg6DYX5qybjdW9J77VFz5MWZVkGzL4cKJwZuyoJLCYVaTQXsVB2SuxRKmU6DzwyximBCW",
  "key12": "5mgoxAymhZrLhuLyncrjZCNbrfgQ7MVoGwxi8GD673XQtirgBxrTYiJTnLSSdGXXT6NvNEDAWNJ1yVdqae8HmLT1",
  "key13": "5BxWDnVW64dRtExiRa4WuwGYavKGfrwry4QFFTdCLwDS3Vb1vfHZvJyZk4JJ7nM9JdEgR8Vt3EVAE8Pm9pfxfhyz",
  "key14": "4ktyTFjHtX6DziuxPiKRJkPtzndtRr3R621A8JqzhVuTDzcMwe3ZEBLpfCz7n74TDmKUnwyTnGU1tzd3opAyhq27",
  "key15": "3dJG6UbE4fNkcN6ZvWGcGnhGs1v4yfg3VqnEw76rN887ovdfx8iyGRPrvwLExsJgmutbMcT3zeV1FZvx4vKJEobU",
  "key16": "4gUBd9hEjYVZjzQoyBXQGd9d3UJC2FWxo9EGPnUJnmNBvhuUv4jnLDAVx9LDqVwDyCjK4zu4tK4rZN68gg8xVnHv",
  "key17": "2BPxtnKRP9WVCSMsYmGPgXhJLEEc1uHh4w29bvwfK3hfNPkmutLcvSVnKrEaog8kmRcg7tJeo2Mt3v5jgdhpbXGX",
  "key18": "2RqSxAughfww9vnbhYtVtoYBKEqYb31PwJfbDFPW7ZTytT1JMFAYsBeBrBwWh5MJ1SvBR6GXk9sqmRSHQBLWmB5P",
  "key19": "4BpWyudFGez8iUc6msz7WVbt8Faa9WtGb6DcZhrqiAM2qZgU98wfQ6zmJY4cFdUsoqoGgMm5LMpffT8YdD92ZJaa",
  "key20": "4BAvUxouBvy1CSNWZi6EdLUc1Ysug7tchwiaVMRAwxM5eqLM4RuhQPNW7LdoqBiaxc17XEFN2wzC9xFmJtjfY4Fi",
  "key21": "25Ef1jGPT99UvBDACWvRoDMy57zr52KrYrnPqQHmCxkoUyHMQ9epUfRUiaRZHRAQmenY5fat7LTtNcwX7av5MTzt",
  "key22": "4SWqwwAjLtftx9rkxmNZq7NrGcKenwioSAhwHj2mHBRSP6jvb1JyCWq1Yj8TPhVPCHyZKp1FfBSYHHJR8QZFVM2k",
  "key23": "5YEW1FECc3iyqrsowxARpcXq6B5aERBuh2HgcBXRb19wg88SzWLKWJTmjg2SP3utDYcKh5XcGe3mAcvoLJW5acVh",
  "key24": "3jvBGp9p9vSBqU4aPBye1PnUJKjPrU8uKUo7iaiU48f32RwCKcWaQTpG53HoUVZ626F5iFNcUXf7cM1rET5hFm9P",
  "key25": "5wzeGSZT8wwhbfLYu3PBBnabJhkuuCeSchJKZCvrc2uzXAiWRNtVnLWXDfxHMq1mfjzMPAXtM8zCEXmCy6ahCA4x",
  "key26": "4RvTDJacPKzaVCDnRBRo62MDcV3qrXHh8vvkJq4Vtw6kJkUp1PD2VchCxDkiz8XagedaMGv8L87VSJK1opuWd8Ni",
  "key27": "5gjj7ZUii3UyPMoDxqWWDU11YNWtJpzGNRuUVBqSkebZ5xjo9m7VPGGp5ovgBKJnt2mbJjRuDqvGS8eMYAPbdgUC",
  "key28": "28NNosZdSf4uUamkqnKM9vQo2yVe8CL5Fr9v7cSQe1kW64csh82bb5qKqHY38vpbiqhnU2y5bCAaZ2QgD3zHwqb2",
  "key29": "3hzy4aNtAyjVkCDi6kuWXyB8skhxc8UqLyveLEm5sj56b5YVm2YfCchFzFxigs7PbjoHKhrQBtqyiuCKTibtnki1",
  "key30": "g6JBNw5LRQwhEjxmn5xjjzBaJjSe5owrynAGQTaF1F8xu7KrmJh5pnThQCQYtRj4tMG59zWoq5V8p4M7UHb2Ke6",
  "key31": "4rHBSkFQhPz6X9AH3Ja2JCeLZ7ZNc7mmuBmSnV8ZXcnFzBR2PSBfJvoVAFmPV393sGXfPuJFQbza24e3rBK94a9C",
  "key32": "5RvWFiVfv3ekEaXomiBMw2vX8XkcfjLJ27YizPzUh5q5CRDWMjqkZ1qoMZfgPssqjij1EowbGyYNUbtb6B3z8oLD"
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
