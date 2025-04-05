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
    "xahvExisekXtto9bDBReq63mEopyZo1Gp5ECb81ZLNSDSDktpz5Xv6r5kF4mTxmDDpoTEzStsfUPZYScokHBzPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTw6ECizH8J7xmex1CwXoQ1sG1rhudM3onVP8KoJNz44ktZ9GPfVdsw8XPHLru8Nq4h2TFKD8SASNi1qfWEABtW",
  "key1": "4YB8bF219n52CTKeQurur1GN3Qw549t6VQqbtBtZxTdGFRZWiPUbNNVGraWxbcYkCakWpSZE3MLrZEipsnX57LVL",
  "key2": "NxrXDpoTxHN3ZWXhEDDMgZ82HaXrGWR4w39TscKErbZGZaWVpzrgMdALdg9W13FjT3DZUG5DKBN7kzokfNUbvU3",
  "key3": "48aykazjQ2j5Jmuxsg1zsufoKV6Bymv2EWVwWVxgzPbrhauiiqH6HpUuPnqQoqC2GUnPbJtx8U3uBJUNRnbxsvW2",
  "key4": "aF1VQFsByC7sXqMhd9MWHpNj5uYNMamEvW8m2ModDmxVoK9pLkE888ZNsemqFsMYYo1eHqtFF9qW3GMedWHJSDP",
  "key5": "4gxfTe2vXqy6FJJ9X4Fn3pYXzH2uAfVx2NMKyA1uQwCK4ZCjaMPXaFngoZCpWfL9sH1vYZPDBSTeqZvRXN94NYMp",
  "key6": "48mUzTMvZygYgBPL9NzSuQmKCGkdEhvzAK1caCX7kGpDi8rH5bhRA7ikgqyayEHL7syrywrQxkaCh9jW32gmpnTL",
  "key7": "5AawuaCSX94CfBWPHfhq6qwNyKybrAt9HSDuDdht5tPzzcu6LFLP2UMDzWfihvzsugbszow18r13UDLNWgbnosPH",
  "key8": "3NwwGLpfvHZFy5jV3ecka8rCyvU1JYUiNAdvdoMoWSrck6HcYHXAvTmnVkktLP77ELGYxBcq4MSKSTkiQHBJXi1Q",
  "key9": "qSo4HS9kTsC7sM79ajJkcxZKrV94xu6HucuqxWMDieHLWDWYLMZBzQPqqwe6BRY2MkMqeJiT8aLUwvTWJXM5GAr",
  "key10": "ku39eQd8wodmkbyYagMW3BfHdKcJ6EXoHSYRdsMntnfchnGuT88xpH8PuiJgxpBbPXHJsYfxbTzH2oHSecKFwgs",
  "key11": "45Axy1AWZDA6b7QnuaeweHC9NzSazqCVMXndsdaPxCfnhFQrkyRN2PmksfEkhgZJ88zZnd9Y3x5fNEW6yihMqfPi",
  "key12": "2ZYksx6trw6wrFxHYmfiEY13e1cY4nzDxfY5HdNfRnsKfY39cx9UyAKLxgmQqxVARUXPgcjBNMWeBSD8GwuMUQ9R",
  "key13": "5xa4keyVo8PZarRicH2k9ZnrgB3B23dzpuuh7Yeng8HSswC4m76DiyrRbdFJTACF7BJjwkmqvA5nbWbkyQHa96Y3",
  "key14": "2kXqgkeRFFZLawCAy4YffiWym3FCtwWUuUXFYbvnJk9mt1GQftniu6yFzfpKL8bEmR7tppUfq3Et1s2Q9mHdadwp",
  "key15": "2Ewbst2nmNwN1dUC8hKhj28DXQebBRJ9ijPrdykE9vBt3eKFF8H1YGKfaGeZuavG6KhJvCjJKdrN5FN9fs7ZEsiM",
  "key16": "2N89RRGvedvkeptWLHwT5VDHhSWGtyccjfJCv4LrodHzqnK8mCG8K9UBfFPgdp5ecgfELs7dEPYGbrFSu63r1QuF",
  "key17": "3huC896uZmnPkVoZoLK8fi9Et6dvvuDGdFcqG966eiGEShoK4E2oz6gCVQRn55Rqjninh4SSHmKjLAz81SVpgzcf",
  "key18": "2SBrkJMJmXgjQbpKUGoDvF5vC4Qy8DWc4oKwZzoEiJQaNnmsH3NkwgRYsGoVPF9viA6WdwDqpcyuZ5HAA5dghU6d",
  "key19": "4F1CwQxWCnGiJ1YYwSjJNzfPmDrqYYN5puupLiumci6NraKBjMxe4y8bQbE9w8Z33EtuEcvTbCVcTFYYbyqE642u",
  "key20": "5t9sGbQTCkZBhKQ19xxtxFT7YotAKsqQgGXoJbZiznnGYMu2L7U3TLfJs7b6h4ya8MmW21QN11yC6G2e58SwjTkd",
  "key21": "5Vbk3XoM9bV4HyNQat4zJr2Ckt2b2xzcV6rJ6TSo2zAKLToM53VZ9u6iPkPscjsdD8Gyf1mccCmtxVB9SFKtM7j",
  "key22": "2gKbnPNQ5PuovYeg3SvTfiBUGi7b8Dw3TtqjGKFepKPtSVTk9JMGsz25TLmvazCW6r8HdQNGcRFJKYX1SUaKRUSv",
  "key23": "55RDZxoud8MWLcAahzQ86sfczeoCQ4amSVBiXpZbCRnyxtK8C2oABTYuLykZ86ij674G7VzNfMCqQgwfFwYK4btz",
  "key24": "23YhcCeU2Wwndbx61x8vM89HoAzQSsjuKi6tKGBwaf8LYYsKv8ASqg9LJZyAjmtF4f5c96cECCXoYfYuKyQDAVSc",
  "key25": "4ftB1q5Eok4jCMha3ciS2dbVUcxNTvVrS3WMSxfqWAPArCb2SAHTtFx6rQZJnDTGfVWEQQvuhr7ZBCWGLW7g3Q1U",
  "key26": "4a5uqRvg6uNTznDTSTArhkNRVbRp5B6HmvZCNbyq6HVExUhb5XPchwzZQRmPGuJehgbncDtuJmrSru886em27Sha",
  "key27": "54iYjNcZaB62QnUEubGm7cvosuct9swVGN8SCNtrwVFdSk7oDEk94zG28wNmjeXeRzxyFqv8BdFhAchbDX9RMDes",
  "key28": "csxaXPfMQY29ZabzGL8iMFDVHwNpSPmf4sdar3czPztScdc1pynetjYZBT8p4NjK3W7PHHmj6fQi2Vra4R6cAD2",
  "key29": "2P6g9sLfYgLM9oev6PgKsioyDoaho55WLntyKmVvSVDUymdt2eLkQabWM9EutApwG9SYs1M9iQ6ufQtUUzeoBfF1",
  "key30": "3GnBcecD7u3asMdF5FRYHmCZL6hFxZeszJWEtQ6XeJkSzKYYMGEQcqQnVmGs9wJjePKee2wffbqc6fMTiPN7U7sR",
  "key31": "5MhqmSm6hLyE55RWXShmfmn2Fs2WRrzi8yZDiM6PjH8p5ZWMWkignEPrac3rV3ZvSE2f9Uibp3ae5jLPecgEeF9x",
  "key32": "v4VkmF7KQ36NHmhuLnE6gS99EWDniQ2rkunPBjW7TSkmniD56gBzYevy5gcRDPPAuJ4p4GtwmofUSBoBAVbAWEm",
  "key33": "NRJq7rpUckuR38iLYbvAGkqoLQcq7M1ZzkNuqxdSBQxwEs8ZTL1C4ZGtUPCnPm7UXCEKuGLYDEn62UsvPhz4r5e",
  "key34": "4apgUmA85cWgmJKNnBr2oEapp14ZnVqrficXjvJys81GJ6srBr4DEW5LsQMkwk5WXzRLPfnFwnVDeZgr8TB8GUMQ",
  "key35": "3UxgTnrocL1wUnqC3CraRYABEy1CcS9AcWUjif8PhBB21k3veZmYpZT6iDyrj4LwYweq8nS5o3S2xDdsnNquC7B",
  "key36": "5efdHVH3LKx125BLXN5pK3HJ5VEtgnzW1Qxk1x2mzHSSCRge9MUN9Qa8LLg1fhw72qSNhojBw72TwaTzXvzg7ZUA",
  "key37": "2S8sQQFdHTh1CCNemTSKZ2qpCwzenPXWYSgKHocK4SKXf1VgYEPzmQCNAiFGRqtGhuc69uXyMv1HY8yBUsfeqQ83",
  "key38": "5RRhdBD2G96a623CpbE8u48WBHLahUc2AZfSPWWHz9czfsDkGGjiEzj4MYVJ6w6A7B5K2kd1o6aSZbdVSYUEASrp",
  "key39": "22tkura5W5w7pBSGSoxWiNUJVe8iN1yEzKrvPAW9wTj5JfPvBQcojXyFQZ3YADjfpKz15e6EEkxZez6E93KdS1WR",
  "key40": "RgjJqRcKEtNDX3BSakBBQcYVqiKnZAmd9MzjyghEpm9nyVCYdZXZcgTtRt4yGqJnRLdkgezcMmgqFLSRn3EPvhM",
  "key41": "3HFEsT5JucsvqdGttBgcSCS46UfwnMgxoNoLBzsPrLS5GcKDazHEFyx3v4H9VckYnUQeywGiZQeAW2wvfPCRhUxD"
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
