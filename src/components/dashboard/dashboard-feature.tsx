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
    "z2Dy5qJ7uGsNp7XR221FmjmByyxsiQUp36f9EmJQw1Bx65xDdjVX79ZBtBWgMzYsrbuFV36MFwp2fWkkgtuGENx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wsTVUC16HrCFbUjP8B8L88Rt2fpggWhNDNEYvgEo9XBzd8zoNCUvcGqxgNya4mK5RLdyMBdmBFeTEsfw5WXCagQ",
  "key1": "N7AXkWhEgHJvS2FnjRGPxwHo6KGz3NDB1K9e8jeN25mLzwyGWFrDi3Zkzm4UZD9qqxwJV9WjFpDxdivLXF12b4v",
  "key2": "734TFzbUQHEF3VyPUxqpxjifcfuXuwt9takFKRZN5umyiVsCknVsWXqGQVW5qccmpWKo7C63pjewhVWq2HRfCQD",
  "key3": "5NQPPWHZMyaCBXHJCDCPrP3Vk4y5fubVE5AYsaBqWMxPZbjhKGibp8KRf69deuDAhCfX3PBu2oLCoB36RGZ6krm5",
  "key4": "3DQZGxhrp9DfyUoUMDNovrxxdrNADhMCRLvVMx7ohEgeAw5gXqQFWr8s8ZkEPdCZVNbnX7NAcKBZaSt9vhd5rQdJ",
  "key5": "5kyk1S57wPfCwvdyQ9s7zkKcKh71qb7FMm6ANABFcSfn6HGytLmm9zKsHt98VW4eDzL8R5Qmjd1QeV9icLF8MFij",
  "key6": "ezxo62rsdyKWHwSKs6moqU97L41ErXCZKfKm9m2b56vjTzPnecWNens8DAPgJ9Q3ek883sACqrTEzaYJhSKidrR",
  "key7": "23Zhwxd2KAZo8ms4gVpQn5TC1XsnKcy3D8pDE2phHAmhCtZFubgTsPtvHKrZi888iik8DxFxsHaAcGzNQ7YQfyzS",
  "key8": "2Zz2auVDpLRs2RoaGRMCAtuFNSU6nzRfyCNKTUXtLu7sJ7mbL5ZHHXFkCS2stdvpSxHH4AVqSA1FwQ5GTZBMkczT",
  "key9": "24HXbuKdEKJuhLyVU6gUbCs1gGm7HziKsA5SuwipxcKfWTnzLaB1nnNK1jZygTmHKT3BtbncFcXcetEUa2RQC2xu",
  "key10": "Bdnag7HguEzoxuSTpRzxFMPEk99mQHQNfDawGzAdmn9s49JjFUkUZajJhjUC2txVfgiSGXVKQdb5ZEjGb1NL1x9",
  "key11": "4cU43SGYULGwUeGdwPsUJNnvRDXJHWsATaVe78F3dZw5wU3bXWQg2NMnsF22E9pe7KSnpr6kCQNmAZk3qwPhu8i1",
  "key12": "2gZ5DtqbCMStTem3JfqJYuDY7icPSuUdevMq9Y78LpPeWPQPK51wQunB6XgE4ZgNAfRaqMhGXgE6EU355M7Jq8Sy",
  "key13": "2ZUUT8qHEUdC2suchBEFi5JAGq1QDbcVLpeB96Vfv9ETz9rtuTXhPyYvCJGEsxEv28Woh1jetHKUbTPBDe52x85v",
  "key14": "5P3LRy7YvfY4CeATC1Vg4XJsG4VruBVpwN6FETzg5N4PDVAS15D2hCJdTcjDH5gWYRgXnpik5gzKVLctvyRsh5dY",
  "key15": "vYdQSwRW6RZD1YtQYHfsyzoXhdjeqyFSArCQ5GQs68hWPMPdA7HLa5p87St546jAkSQkkk1dAswqogAmXwZfUCu",
  "key16": "4KGX1caqeNi3VaNDWCjrvA8zoYbpoNMmRDgvT52UfzXW3H269TZHPY5b2EbAV2zLt4ZwcpsDELCGLzvHH7W7Pb7J",
  "key17": "2TZEnoA47W3RAPxX7ocWHQKNvSgmHQLd5ekh818vHwAghNjFaMnz4UEutoGxEJ3NGABqLfknRQV8pzF5d5Unzv9w",
  "key18": "5YRrrJtk23HxoSZTCwj4sfGquLmuk1Wqzq9VxAdi7W2LAPEEH5TihwT9gnmnaWTXY4LB6zxX8t33w96HzS1Kq2Gz",
  "key19": "4yvjBU19DcV1RCFb2h1pTxUvyZMak1nhcsDfvvSh5P5bzsbKjHXEjM558JaNj3DBdccBQjgZRNTgrHdkt6fShXNL",
  "key20": "4Dfjg5E7eUVciHbcFhkVPmFFAKYqmVhBwHTPgJi4jZgeixeyz6YKuwDzouzmu7T7GhkMoEQ2bjhoeUrjDR53B1UD",
  "key21": "3cGtCCwLxkjZxL8g16JdRNNt8Rs6LFj7pqqH8Lw4ZZTDPdB6kabfmuZsjzjcjzk6JRpcTDXmE9bHfeK7BiaL716o",
  "key22": "akFw3V4wGP3r3BPgR5Wm2Feo9weqGxFX9rJJbCfprDEH2fT531rojChaZDGqtRu2P3eUzURziSoRpa3LhtA9YdQ",
  "key23": "5t4meqPopJfg8VchUtSLsJmgcKvaY14PXcaLC1F1TymrZRUKE1RDk4EQb6DKEPQ8KJhUSP1CuCZTxgzSbREmvgG",
  "key24": "b2x2P94xQwM8d6zXrPFbu6JV1vokFcoRmFRMbzaPc8cLCjh4ogF7etssuxd2maUyt5s4d1zCMWgDxqfx9Xmajtz",
  "key25": "Nbs1q2DCRLfnbX2AEvtyRAF5KcmfWBG7DkgkApZBTjfqtmJ5t8xijdpLqALEs4dBHf2WKYWUSdD1kf31xSTXjWB",
  "key26": "uzCNxZX9p5oA4v7pzyfJE8U4HCnjsAbDRz9dGrRLj8ZkuT6qvjJw455ZfLHy9Kr9CkyT5fr8c8uyN3qhWYdR5Mf",
  "key27": "5Mq4PqECmrVKBvNzHE6QBgmLesox5cEeWZishu7n4khGF7ijGAiLmFKx9GvvnqDkh33K4PL4MiRFtxzLAgu4NgVD",
  "key28": "67965DnamRKFMUHhqgyWFvDHJ36acGPJsSyhr62RTmZq1tt9nqddAFMgj7K3jCyAPpsmiQQ36XFavrYYzk7Yakv1",
  "key29": "ruih29p7GgKZwm6sVZFoA983SL7byEcsjdpCFC6LGPy11dakM5nnGD9yrxtFbUirfdE4DgKq2TfbYk6Cij1ZDe2",
  "key30": "4knyKyV37oYFjHds8dsUUr6KtW7dQjFda6UG9jwkFqKMWGJoyu9i3CrksTHmCfJCewm122Hu7YdHaqDW8TAafeyB",
  "key31": "5ArSaGJ9AJbbpNNjovBLtfVE2jQ16Ydb82ziZagu61uY5M5PLjAPYjCzpjxm58TPqUqTEkNmUMadnic39Ev17Qh9"
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
