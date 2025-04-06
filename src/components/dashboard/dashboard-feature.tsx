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
    "3eiUC9i26JLr34vo5G4jzqBryoocK5ghvMPiPhfMiDntCAwGmESvbgim5FmigpbFZo7QLVTbyzJ5ma4YficH9oYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fh7XsQ4kPnbKBVVV34T13kXpRzfyvmpq4D38pHwQtrEG3YpkLqYjmsbGcWCT962eDoWSAKCMkDYkH43sfdVeD6g",
  "key1": "3mNKbnQTpD1MPBtCtdkTPRzfpdsPPwTC2XytEkwq6QLULNnqx1HgNgbfji9GHimdankNsedddP6cjHrGa7gh26R1",
  "key2": "3AJQqQ74XCGAPMFRQvRBN2JrZso3eLdFPabqcdKaSdJE51WRE6eePTw7wgqHbRNPqAyJ6g7EvWMHG2JSTiZ9swM6",
  "key3": "5hkpgugYcGe5nY9J4aStK1tT4eueuHHB3ZdHT9pPTDJ6qHwrVhahaQujrZjW83M7n6wzpRAKyQXvyhjFyTJ8HJ5v",
  "key4": "dES1hNnQ5MbVNPbN44ezFwgc4aNWUmFqCY5amGLFteRUvncXqRLT2twCJuRzDR8eXAB88UQAZ4ruf6PH2ZJevhS",
  "key5": "2RSfgaaazEenNRbR1jSWx7Wthg9JFxhZA16y9YQt8r6nmrt4ifLn1MWpzNDPQx21fDgLUkt8rrxaVEfJ2SsfGs3r",
  "key6": "qZLYgjbEsv1iWTkMX6r66pN1ofSMG1h4Fw9vJsAewotcBSJNqZUZHBM4XGW1EgxvjwAjxHPravvKmHr6Nv6bzJJ",
  "key7": "KvVUrg713urxsNktiUH3XpzHXoyc7crgaEQ4oLLm2gSshQFRRyWr38gJL9PJQQLeM2yZmRHw9XGzPVe39QU5ivZ",
  "key8": "3PL98xotVKNKiVCb2j3MA4N6CP38fr6iiu6iYWdVKiESem63jkcFSWMjtm8HTwENZ2Gi3be7o3nqhUK4co1yKkQ5",
  "key9": "2x4THELhVUbwNYsMfp7H8acYewYrL7op9tyvTHrJ4aWqH2gtfugVkE4NsnLzCfBVLmzKPNvyJAvNgAnDzP4P9MW2",
  "key10": "XEWoK9C9hwFkx6AMHmnCk2uDkpxC3KAyPYzk8Nu7TxPQuPJLh2JVxyar4JNM9jnYx8hWE6xb742AU99fBUX2QHo",
  "key11": "67K1WUWMeNU6dkZp3GAXRvfVRNqQtB9TYLvWhiRaboorBgGdS4FZxVy73Ccg6faZei4WeUgzVXcszBfuzNhgXVZw",
  "key12": "23QMeqfAPzHsvewJav83wdv6NxEnuTpdNwR4FHUqPPf1ut33f12y9Yyzgsxf5VzZTKV4jcKz9ztHbfCrNFwjSQmi",
  "key13": "325RUdEERvYJUDHujA8w7a4gePeWXupvoAVsVbRi8LUtbxrtB7qU8dFZUDvpYuzsksqdxrRy3xXvHamfPqe3zgdH",
  "key14": "4QeGBaLBb1JqfURNsZUNL5yTFVbTDTz3nHjE8NCPeXmdxzn9Ft5aBLYwVHcK6PGoXTJ5QCK8q5AqM7gYdqqFZypy",
  "key15": "4YMNFnATR97akA61MTazVFa495qM6yr2KqouDK1E67yBk8e5K8nd5BZrducxF8QARRwBJiA1JtmoJqDJcvEbrzX3",
  "key16": "5xGTuEACJLq6dxjAmSHfaoCz5XQZ4pSuB6a1UgbWUuMfsyd2MemkoYJEGWLduGruBP42veFi9UownsBV4H3ZudJA",
  "key17": "2ubtX5m63cx9hTvVuXWfEzmyfkv3Kzkuf45SKqWzdSacREkZDsbBkxJ84zAbzf8suoG7FYjsLi1gn3V1e23xRRqQ",
  "key18": "4G3Dw796S5usRcB1wkbz8CxLRZU1PJZXud7qE25cSaZvgL9JdVFEyaHuvDY4imgtn9eSpPiaGDimbbPAjubFFkmP",
  "key19": "571MmEJhnWQebKMUmWR5FLm4yc8YnxGaYUiXUzFHfZposD8yqDRUZLi3oRLWueXby3VpgeC6VZftBC3dNujNUxL8",
  "key20": "hgwik3Vey52K4374jQhpX3pveHsqmm6r8G46gQdgGQPgVStPEajAPtvMaritfRFUxeM9hb91DbhPJL4zFkCRVDM",
  "key21": "3gAyGsNZCdC35hBoFpfJq67qxaVQkSZwrDATSbGbN6ZRjc25ZgS1eP59boJopXc8SQtQzX1yjragrVGa2xDVjpN3",
  "key22": "5uLsZjXhz8Q3XYNRGhZXnpJZvxC5EZgBx7xzpYDYe3kp1rGiKMvEG9teNRfa7geY3WWgQinrPUHRm6UkTDXzB6n4",
  "key23": "n1iB2nHK855jxUPAW9pQVNnfYP27Db3icKRzqusVuzCck5Apjkbz9V5ceXe5E8htpatKfMpPD54ty2deZF3SyFc",
  "key24": "2mWiKAaz9Tmp9sppY8S6yWZvuuMNYaLB9SrtEKAUxbv4hyystpBJAxE6BfHgmWpVjHaQrSbmxgpd3i9ipEezrB3q",
  "key25": "333s5wQst8kGxwtmvvNYy8H3AvkMTnEstMKzHRzwFFGWp67d6vPAQyqA9J85gRr5fvfEviEkpiuSimKfUcc75Wy9",
  "key26": "5ve4AGUzEYjUiDpY7hkhYK9VPsXn5JisRHeiJSECZd8Y5FW341xe86sS9CiNdBNdZVctRi9mEBndwdSirbdxacMN",
  "key27": "3CPSZDLNNCiKt7sJE3G1NPmfquHtjxHn77mYbZTRcGRXqo6yZaNxfmWpjfqfkHg5Kwt8AGPsX3tX7EDzWiTDPicg",
  "key28": "5mr4eKeVAdZKtB1gE58s7HPpCC9mFvhtiFM88q1tDR56JDexmfcv4yEnR4CYGexRdKPQuqEAnMVg1A9NJN5hX2Je",
  "key29": "5GEay2ZWVPBySqZvHZeBNv3dLvTRmkSh4r1mk8US4b57etuRGTMpVSHnD3xM5gEu6ypX3nFN6YcdGk1xNPQ9WV4J",
  "key30": "4qz8Wb9Ss1Xv9r35gNbzr3LrGegGevW1dcNUsvRiPcvWwCqMtjXpKsSwwnMDyDP99Jyirnaxgiwf4W1LqZDdGVVi",
  "key31": "4m1CTp3puMJPSKe1n5FhBfp5uQsYkanRQN7cL1MmpLm21npveHyLCkW5RgEzsGPkqHkbXdXmMPMHcFLnZBPSEMUr",
  "key32": "2s9R822wbrYghKMUZYGBrShNV2vBgiuWtwxnUVtVDnqGMqgrNsByNQaveAaYnanueFCbS43Hd5hSD2adHmg6MYZa",
  "key33": "2ZpWB9AmYQBozkvk33d38ehBmdToQAGJjQpp6tYXhWptT5BjVj56PZAwqjzHnqoaDE3K8L4xMVhgTq4vw5BQcu5M",
  "key34": "5PCuiXRteGxRkz7G6K3CydYnbVptUhzrg2pjrG9dQCUzqfGVGJWAq3nN4xJWqr5Hy1c4SUGGY9bChF9bYaPB81ob"
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
