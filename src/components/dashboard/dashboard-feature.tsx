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
    "2HpbDFrroq4L4yDYLoJM28sWatEoMLihfJ5fzrg2XkPjBmKSqnhxJgSVf1NBD6mzg5ca7pgkFR8mLtbnsnh4vZZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rvXS3VV574LM8KH12ZKuVgRcTyK3Z8MfBqtFspSph9KUJGqtCRPji2ut3fZNLQp3JsuigdRMpoJZJz8bNaQKaiD",
  "key1": "3w5eL8zFqXM4RamfzoRJ7Rve6WC6L79hKD5mANLcNu5jcYja5H1BYZ9gXvcB9pWLnvdxss1YGTLCHERPPVdVpQLF",
  "key2": "yGJV9C8v3V788NLJHkgJXgS58PFj79VycqfJwAAkPWEWbDW3rK8ME5FAjcm9qCdCvUAfexKaD3ECdaGMP8mQuc2",
  "key3": "vUEcjW4cTNu3omm1vqUzgrZZwxj1axHy4UzsDsbEjmWpmpzMr3nQh9uGxKhEwLegkLQh2UQSJs7Gob2vMGc2zuq",
  "key4": "5UzpkEqUF2wJSw7esz6aBCj8LvZF85GFJyrZ86ZVk1ufeJochbriVXCZEU4HYNEkbHjvgCWLQxCzTcao6KYeThNw",
  "key5": "4xB3MaLBhXYa1nZuoPY6uY92pSX54ABRUGFm6m4pLdpkN7otuFPaG4U3hDS2yYBHumnJEw1vP4Y7pABc9tR7G5ux",
  "key6": "2krxx1yEJ3J9gbgkj6PsS5QhWAapwtVW5dTqZRAKyeE4UHVRichJUhMaJgWA9RXfDiLSDfjCBrUVY2pHxv2zsa6w",
  "key7": "4JrrG2k71LXMj7BodzLUyJxkmwNqpHxz4ByV8PHipFk8CJ7UvAkNwT253qXW9CV8npw7KuT1mX16eXhrfLWoerYs",
  "key8": "4HUqFJYmk6XYv5xDGTnQBpgL62YXXf8WCEFvY7Ft5NCaa45Tf9KbqVwrYrXMpjtUCnJY4oLE6cxfE7z2SkPxMtRn",
  "key9": "sUHW9mL4QdMXPU49tjQmyXRuLZFdVR9FRf8XuwgotNLKN2FVUWDCAeR6Ax7ftBP36X3TrjhUSpLA5f9gSCX9LRF",
  "key10": "X1TBLdbt7n1n5S1eZkCBk7jAdkBfFob1ui54bCLxQzxCmWCjqo4Y9vLExtXmhcRVZ4pXBsQaMNf7JZoBpPqasof",
  "key11": "5ktQpSa1yy7N5ZBFa8g263vh9JrQhXUCVQihYQqPzaBGcyQY2QvDaY5yehhE37wMfuXqszDH4bftwz6cwXmtu5Vp",
  "key12": "2V3D3g9igwNpD1vVkf7U27cTMNE2SksPgUkT9Qkn13JVu7pMDaTUVrWgDA5ErCmUMbu27JpnunKmxtQ75p3E5apm",
  "key13": "bpKBkeCdeF6MmGnzi6nsKGEMMv9jMC1UKBmA7JwJQT2vYtWneMbB9GtDnzzcKaH3H6o3L1YqKhNacqZLBzzsPGx",
  "key14": "BUzZPzWxxbedVf6gFc2BSaNmXV7F1nFDRHzNjz6Q5RZYs8YZNS1hxGJKoynPue4jsN65QqgZhKte8nLZ8WYH4JY",
  "key15": "5Nuv8qTSgxYWBBfJPdy7PMzTpfAWxvZorSGgGKqJf3WqeW1c8bx3kDGzsrABZm8LyEK51YUyX9GU4N2CnHZVEHG8",
  "key16": "rkgSZKoapSQ2B2Eq95yoFqsojDoXrAqbmLhwVL35ZbUi5X1PHs6C7JUrJVzkmsSGXv8SNcZVeXUp61anbtqVEAf",
  "key17": "2sgnHdooBQ9yfouHfHGMxXS6WLbfmv1iRUcVHF5h3DSbhqwMQQpPo4gDiqs3LVmCQ19HEanknLf7hpuAe7LmUoFx",
  "key18": "5DdvL8R6x17V2JxxhVUGYXDDDc9Kvu1Lc7fm8GAVCfSgLdtg4CgHGmPza833VKwsop3wChQFwxJ1QK1XaVRKbzC4",
  "key19": "3yuShp5hSxKTwfKbPbqVPxgXSDe9FhbxQHP5ogAiC6kU36HHNyTkw5rvLFbHfVBLgjo9ExVgyZ1KoXWkZHmLPVX9",
  "key20": "4UyapSbNHLqVoAUopCmRNGrek6ZHMGbzGiVhz66KXcoCjGRHLCJ8DFKSDpmqhm62LcXwpfHVmctNvchngz6cwJ4S",
  "key21": "wWgQgLGLMiC2unqVmCCEvSzsKxvQLx8VWGi6nxvXyaXpPuQDSCZXKKrrTMBCLAdFdYMTphid1ZAA5WCV5N5qdht",
  "key22": "2vYTR1fK9ZaeDycfeJjfVRjuupsGx7qg9AZyxnhFh4xmB8UawEjwL8hQtwN5mSucAc6sGJHLNmsDTNtXHEF7hk8L",
  "key23": "ALqVsUeMhEkvV7PoD8djFxvBtp5akY2hsZoVLkYv4GXtSevc7rkMcwzZTMnNdUXwCS2KupKkxELZAVRnCNbcq7t",
  "key24": "4XhktKN47842NTybD3WGdR5agvZjrkjFKF1G9bCuVyc56WmKDu8VARVpuCzMeH1xEMeErCqJBLnaEgrTTjJzifDk"
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
