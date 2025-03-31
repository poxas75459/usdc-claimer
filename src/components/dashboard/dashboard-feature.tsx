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
    "3Cus4awGnXP3QKwJgzR4dvAg1t77KcfZz218UhLhJ5zmT8VrHyXGSg89mZMb9HVaF2NzACXawvqvmHFoy9hC8tpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GwmoyHyD1pNpmcPUwsMzafjPdcbJ4hP9UUpyWgw8EELpL4iJzKM6X6xaS3dc79s2XgNrdReAudGiAaN5x8DxCuL",
  "key1": "59Z1Qbvsc2VNfBDWAemFhhr3X2nkYdL4FV9HxRWjocTYEJCjnpa2nCuhACAYQ1pLiWwCYXjpyXFhLQg5tswbCuep",
  "key2": "5XuMZyZHn8CDiSEeFtRwRwQ3kJsnVxe148pGpSjqvvkcnBAb46REfCUgFMBPNNskZcGwyyk57gfB6ozWMcPsdguw",
  "key3": "5VKjuogtiUQJoK8bzW2s9e2H8QcJ7kHbS9WRCLGdWm6fs5KaXveY2jCK3wh47NDzdMd2W77XtoWd5m2QZUafSTU2",
  "key4": "2bNarZYSVcrNZ5GuE7Ckac8quDNSrCyezVFTRq7EYxMSk6LAHZzRKJZV3HT3BgnABvAUTb1Eav6bZWJGmfwBLxyZ",
  "key5": "4mvFKhfBKaWktvBtbtfaSN64JZnznoxD4hP9zdowXBCh7qnG4ZdDSdXwr9XjRv5LKiySocUVFvmBw5aq84x4ttdk",
  "key6": "3mmd86vx4wbx1tUJdSjyPKxosdEd53zrRUPkyrDCd7iVJacF8pDKcrQ4xFvDo6cMCQVuffhRy1hGNkfYA7ksvaVG",
  "key7": "5Jqjp2WNWHphLCC3YXDDg2MFpSz9xZibNFsJHHThDNU47apvJGiUcgKT7HcqfkmY8kZftNDUPwC7PraGHgjeSs4M",
  "key8": "4X8U5gLudsvoS5dJdx2rNu3vE2wmUya8Tek9c1FdGW5VLyekurBcZizeGkx2Z5FhBvC5fDgG1JGHFcr3KLnqHLcW",
  "key9": "52HioQTNRLM4Zv2jaeAXeUX2WmjU7uyQ76Pnkk61rFVGkuukVpqrmwnF6rs4qezuAYqKXJ5a1AuMvfFzBj4D9ZJw",
  "key10": "3FsfxNSFg81jSn5kwVjQhELgyw27ma2AmJBHNC7b5dthhRMME6oa7zt9ddFfFZUGwU64UzdMKhWA6trw8iYU4sSH",
  "key11": "4Lj36vurxZ7EXwczkCQyxBAd93Ty6vvaKCh3UydvGWdbw3MTL3t54ebQzQppaSviVj4PtnvWAaoixo3J8ZvXPDpk",
  "key12": "2DA1UwrQ1mhWniBwgWkrTqrfDfUwyxCVUmVJe9R1ZcZxTLt8Q9RNTZ3b9zhHgKY5WoxvkiHuVhXCcURbBDm34j8W",
  "key13": "4vqFk6SXcFmDQq7ckSrUgQtzhiBf9Bo6LQcHzxtiYNqCPyvTsjijwSfPsZX8PQQXX4EEDzNqXLA6z3HsfuMhmWv6",
  "key14": "398Jj8XfcBwStFMFsHwCmUyjST8QfEgMpPZYZtx1XUkNtm41zWkZ8fKZppVDp5FnLMNEEEGU3iBqtbDNXaQSAy5W",
  "key15": "2vcAov71p4SKg27VFUdiNKWKi7mjvKhjkbBtrEDuMM1zqjq9hmx4tUZyHeCBAjwqSyXtM9w7ELuzV4ao66HYMCF5",
  "key16": "5kgBLeV5x3pVKNuGCXhyAH7r5YSjaDQmG7utxMBVoqzzFGJFESvxFoXYkiiPjufTqkpzoSLgmYu5C1B4mzHGiSFQ",
  "key17": "tLdZ5mZwvmD8238ycAVN4MenGhqqFALxFQh52vDCdBQpKcSKVPBLKLrGfDfRrCgnNsm5VxBTWXxcRewNo1hogoR",
  "key18": "29zaFNAqcdp1AxsxuReR2fyQatkXdCn4QrpMsTyiQFVsYUDy9S2PV8LHVSuS2VMSLpJ3GJ5RfYBwqG5KEyavjhT1",
  "key19": "2jurSturC8EXu9N5yoPE2rMig7dG6fw4RNqiCxYUkBSzDfNiXNaGsA81SmWWkPfUN2QJid6F2LnuycqyVoLi3XZQ",
  "key20": "5omceKcswA6KeFgEz7TPPjB16ehjUJysFfk73PvCfrojjNgtg3zxT25aWohSZKzTSFA6SUaVRSLXpRqxLRKVPdA9",
  "key21": "3atsg1K6UMndt3N21NAv1Sg4cXQkPgMgt69VrNE8cCHAz5QshCg2hvNdZUWcpSCWiavVYQUazm8FNTdJukDMUxV5",
  "key22": "4ttsWnvzenHyYwLvqR1tv5ypkcbZpGzR1p74q8YRm5nEZnnqytf3JRmVdrNiXsUeZ1TbajDPrxnzYUQkp8SsWUKn",
  "key23": "KH1GqFy9gWc8ofAQpbGR1mapxbFewe1z939JhSy7Bx22J8WtPCAx6jrHc8kYxAPvRCwMWMtABhvGFzBtSaqvU2f",
  "key24": "5Na8BHRrQnFdcDc39gFq3sDbTiGAE3yDdN8wg84zggr4Ad68f83idc9dyKVCY6YFzBhZrUK4Y5A3toDo8fhUhygR",
  "key25": "NTfMKMkgnj52hXtPTrqQf68KbdH5qhp3V4xRKcr9ZXrHVTcyjFDKyk7MAH73Sp8roPTfW981j7tCuUnGs3KrdcE",
  "key26": "5RscDf8L1iqfoHwex9ByzcdQbffoJLBbjmtEoihSg1VmkiYZJkRqjz8zkZtCBouFkyebAUP7mix7CesPbkR9rEfm",
  "key27": "3nTkmXSmUhpsuFfUZfFaiGtw4GvH9Qm57rvir3VScZqTvQ9eeg46YiuzebZGKDeJrpxjQot7DHMFWc5eVGsBsAt7",
  "key28": "jZTNXmQbwKTtGzvy4JvMUdY3s9kvbJtyyz9rLdKvNc4E6QLAPYgw3BXwPx5sBabSkq3RzyUFLQBpE1tFhFVMsR6",
  "key29": "4RyAVeJxhX1sJQ5RkifMxdBijiamR9ioJipC8uPuQ8KanKbJMwP1y4LDwFmjT86XrL3XsMAxB3zroFMptWo5ujLR",
  "key30": "3dUfi8wwJ4QKQVsVWZPNRXvArqosQkMXGCC351a6VE83mtVwSbS6w6Ha1AgkTsa9tu9LkMTYmRpVfmiV7WtPG49k",
  "key31": "21oBhNS2iUMyydgPKZTAuLVAKhapew5dT1eTQAHttwGDc93auwbcpndqhYDGpMeRB4HBD2NJe9CYhFrTKVUFajhQ",
  "key32": "2CjqouFGiyMGD4beAvRekgtoxy4T4FSjKepZ2E8ujieQGYdhofdt3gv8nCCm9nXrrxm3nfYpU9mYzEQpLqwSSBzd"
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
