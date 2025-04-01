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
    "GvJtGPbS1bk1WzuJpaj8uAqG7bM9ADyK8vapYotZb8gKZPx5vWnz53UAd1rwfrWSxN593US4EVapxQZYFiWhvZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJdWzvNHzXATHmq4BHTNBD5rAAhXUztrGkH3A69Gf25FcTjYZawpmyJ8Gsp4wzEBG7xUBztY6EPkWzs93AgrG3H",
  "key1": "4boxH7VcGPARx3naKdzrxcvz12gKPMAo6PThDtbhMMytsEYjFcpqEwUvtxCiRDh7BAEHPNtpba5bg2hQBKm5BzDj",
  "key2": "3XHoWZ8j2vFRvFpWvSccyoUpRp332D65LNv3ek9FoXvEgh1bcp3HsN8SYfVAZyrG2rNDGT7do8hDui5TFZMqVJoY",
  "key3": "4Y5K8uF6iKdF1gKs72faRKnye3bgXget7CPMBSpTV4zYZf55EHhPZrk3ouaRc2qyNBJRYypxQbUj3JPgHQc6tBck",
  "key4": "3cxbFu6JJTjNAoLiVXJqKYxmwa93PH1YN6AhbSWuxajsAfJn88J1eeRJW9qu1jF17VSx94MvQDyz7samKumiRZg9",
  "key5": "fzXVJYDj5bFP4qmqg9pgvJZa3JEGey7zH6Zmr96NbSNWCmJS4s9mXNMCQgYX27G8qEhvx46ABLw721A9DQCYTGX",
  "key6": "jHJCaQfLphwn1rVmCrmjPYhtyf9WG34pj6qvbLXCAziNQmU8MWjU3X3NczEFcYRoBHdSKbLw3PztUT9nmUWnoz3",
  "key7": "2P2nz224ERwWW7baJyB4njPvdS6jVzJqscNXriQgmvEHyKJP4XsqwWCSD7QHKSHzt3p93GxFKnq3DfsZcjsVHP9m",
  "key8": "4pfeQjF5jNbQazEqSsRPTYGwsHJKfpusgAgvBKrDaPsVEME6YwxtY4xEoTygd5zj7QK63YUFTEUV9mTgV1JFbLfo",
  "key9": "4H1wyfQ1CYfT8HqHb1ztxNk6GeLryevghWBTRQf641PCij44d78xvVkFNYCF8qvTetSog5ubFn52M3f3im9LAXQq",
  "key10": "hKUZr16pYHAq23uvm7v2G1LaYw6uDsWn6wfCUmjjbrk1b4fbq3MYfQQmqhVQ5MfmG8efiAc1wCDrxTZCE42pzsy",
  "key11": "5828sUotyLtqW7wx7W86XS1w2wxpjao1Zk1ynjnJFySkePhMS4xEBj9JDqjFVvMBFKQKYVSiCFq4RzwtCADBrtrc",
  "key12": "5UVwLrowA1PS9xMDJCpZYRifgot7XTBqE1PbTFZfJULQaqnrs2d2UE5ZNZAHWsbGYvELt8itEwySHSjgwAhHJc3j",
  "key13": "4PYduviieyteKhASjJwBoDPrpk2e92NsvZpr414oihkqALXzduwhL9kPV8aytk8LVCyvTZoubZDd5yVq5za6rhiP",
  "key14": "66MqRhcqcp1djxnaPQStNeXuhRUJtnc2ngJNCiiW9W1y4XeFrQyniBZ4i2rn3ZcE5r8HLvSwJ5fF8KuuFzahAC7",
  "key15": "5dhHdcNi6taJ61iixnhvZvEzfcCG4gdLBs3Q1aRjcTjBELt5tBqqZt3k7yMMUDmx7o1xMDosSTPRbAbufvQDnDM7",
  "key16": "4puFAR7gzdEvqJjsxoDv5QhDcGQENmD1CcsJiXFt9xbaTns7BqtXJugUgPhaY6vuzF754u9Npasgq3eUgvPwGhRX",
  "key17": "4QgtvoqHEQcVtrRqXeAszRvz8QzS96z1hE3b7iAKsWoCEdrN3KzJEkLUsxAdN4cogzMZX9yxeJSHtVm3w7CdPNxS",
  "key18": "4wVLrpiEwhbwXRnr9ZVATpvqNG7jAQnaBbraVRnzQDdT1HceJWHwM3DgBbjPu4RMCMBNAKuwihmcSSLBGke5sAfN",
  "key19": "F9pW4feb1ZoFRinpNbyxkb6GPC19puL1g5seW6JDnyHV4wfAms28XA3fpsqvGUQGyuGKVTLH3mkcUWjv3CnqsNK",
  "key20": "jpxPm7GQa6heW4XjGDUV8VFsg3PZ2zaD7rVvre6d5e8SMKf2pxVhBxezqmyzWJoHSKjp1GNG4WeYazSM7tAwEsn",
  "key21": "27gXQkarLW7ymSjTnzVJGeaZAhh9r1uV9sSsJuCCQon6XHGHqNYykNH47Av7QxWJNUuSM3kkwZmcYSTr5uwD7RQE",
  "key22": "4zVisQESkJQCrE4zwTCK5FS9ppVT2za9v4L1VBME9ZbjqWFwedY3YMpdUGGWorrJ4dnSazv3Eqhc9h4tyXvH2Pxm",
  "key23": "67arJ9ytYGCYiLRtCaEwwZ67FLm4B8cqjtRLT5hJP718KxqYhkcqfPYMu4n46cQ57AQQ8pn2VYHLWToBqL8D8UZN",
  "key24": "2E4c6fAw9Fy1kk5cggC17sxyAvzCFPQjxmRQUtXgPybbi8A5UowLXErkqzeqgyGSXMGtcUoEj1PHKDDvPMrmPQM8",
  "key25": "59tAQDBz7iTMxZaaN1bLiZ86nj3bnGVaHP5rQyoe5sXE3PrCEwTSXubxyY6EbUM9Fgo6NUzBwhz9WBgXKnf5qcPF",
  "key26": "2m2Y7yhvzMLCtk57kpmdaPosoJdCRBFTGxTK6WaNaVwpcdA8TWLFZTK8wM1Pnw5G5dZ4Kte15bfdk35WkDEkadev",
  "key27": "4vKFCSquy2WsTFMRGeYqJHnpJzjhYmiEPTqax93ZwptwnNjZsCK9BJziMBUHcPKWLY5ujCEUrn4vRTtpHRWuAoPB",
  "key28": "5vEMfV85Vv2EFF7GmmLV7CS9xEYD76iXcaWG6CVVG3Jqb28UhA12LZ6ymoSHy1h7EJLDo47W1ETVnYHUHznSNyEZ",
  "key29": "5SexMedw7hMBEKxZkLU6iDYhtd5f3dRLcV5VAj69Qx4VuzWqwyCXDC47RZ1CduXvWokTiPvv7HoDLYHXDcStJmU9",
  "key30": "5Mp85EzM5gB5JcNi9mHfQGAZmrdBM4biy9QYHw3u96rxgYUxsfGakZDdEGNRTSoiG3GJoukS2iGA5p17NoAKmuSg",
  "key31": "fUmUkBLAA2ojGryqdsUM8FpogDMzWRwSYU5by3hTho1f2tkikRFAdMSNyHaWTvVeW1mC6E2xWYoMeyNWKTRDXSG",
  "key32": "5d5JULRpzBXKdYtmqt7UfMaX7winALmFk1wE62HRpNpV21iK78BAfXLQHTFowDwEFRGnjYHHLaChNnmmaYRJAqPX",
  "key33": "2g2GjKsPG57tfGZUyszduxk9qQu3FJKHQGSEirRuosoTdkpZ99MTmKPWyqASY3toDwaY3jyvPpFqGoHc9QTKfHtx",
  "key34": "pgRStcn1Ym5Rr4qVYCBbzJK9jiD2VjfWP3NrV7UzPRprSj3gHumR2n3z3wHZ7qZoBN7TzLCqPfmxSJuHPSeDb9S",
  "key35": "5gZL4CQq2uNCxXYdHRn1CKu1WmzccLVaWYdgyjVv5z6pm3wDHpwzwoDHwBA4dmqha8CRQiNP6EhRkPnjG7dcjiCT",
  "key36": "n996Ak6s7m7dzjUBXnDjGGY6ZZViP7LojigwaRWCugZFxthtzCqwChtWdjRzZ1rHQM4BhVhtja2J2UQnq6SQtDE",
  "key37": "43K3dQRprHiHZfdpYLNExiwarsyzHjdrWnAPQ7DLBvnEt3SrGXbdYLn9zVSkKcVM2p7Ppa1tKXCb532biZuqrKPg",
  "key38": "43CovZ6kfrdvE6GSPUxuPgGbEZM7HhRHSDDWCuCBa7j74xE4nCyECPvxDYgzDPwxBvZGNbq2syGrwNwpoYkrAZw1"
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
