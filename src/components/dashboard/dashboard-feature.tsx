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
    "5S66dTu7XTzgrpL4gvCTKi7ntpmkkrTwMBxr8kzMJmz3ZYwiszXVh1PZdtVj6Y6qXT1JYo6zxSx5Zpnbux2HkVKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbhcuRZMWXxocnBeqe1HBqYwgSNpqvd8WTnAiz1Key5UyfBJYbfY9qY5Am4vqa3ztJVSxRqeyBoDBhvEi4hEwsD",
  "key1": "2EMaNny3gwLZZusLLARb66Q4FAbmzftgFX2Gs33xZsLpcM4u7EZWn8QcuxL4jJwCZWbNo5rLqZ7Du5FsXZhiv5xh",
  "key2": "jWF1eNX2tqHRDRcgae32L4MF23eANoeZgGZS1Rqgs6yLFKibAQ891J7JUH4QWbbhGy1KrUcrspVcqazg8BgkgXr",
  "key3": "DPFz5JoiywedSsVxAEzsMAyxQGNoGZGSX8RoeiHScLXengUg4ZzUE9Ara9zmLB4UG5L4u7arqieg47Nrt3SDkvg",
  "key4": "4PeGC3AqBEGmA7qgt18fk8wGee2HGU9Dn1rr4xpjh6MmY6JuAVbwMDWKpCfvnLbYi9V1S2DCoakoeVvto1NSdEuh",
  "key5": "2PEDndp7yvJA2wscGYLUFmr6azJsn167bScSPz5t4YjR8sKthCzk8yP8A5Tc5szGpnQt3GKWgG32vK1LKo5R9DMA",
  "key6": "58GG2DV7uxhxfDJthhi77JbF89AM2QxhjTywTsuqsmbgm2nd7P6dooLapogmjAkjkT76qXNy5A8H5qWHkX7u6ieF",
  "key7": "bvLdW2qSmCVKMzBSkPXYJaTj82GPLRCRNqFdA657GmvfgxQYpDhzqn6mPFweikQa3piT6wK3J9YsNEtSZzes3Dv",
  "key8": "5hQcryxhbW1AyAjCiTQ9QtXBDwcPPe5oSXWErgT1XxpFESjo2BVVJuXSyCqQfNWnK1kcN7cKeuybWbHuhBaFL6i5",
  "key9": "3E9vKmREx7ExSLDfmRJPzXaTnWtxefCNVopRcx1NtRPZg3eay9SzmVU2KKWL9zoNheqrDTpxiNBmqD9uguCKUR7D",
  "key10": "2oQtBKBNo6xfpRX4ZF2aEb38DC2bWVMkdV7dBaw24GHyYkhv4QHWcEdu1pEwaSpw9Z2SCcrFDQPtzryqas649EDm",
  "key11": "3D2LHUSii3gsx6EnaWWpB5q4mrRMGmZbgp4QzoAW3dewtSjqGA6Vi21d4DDF4ETS3sczwkCedYF2YxnL4cHvVyDC",
  "key12": "5VHA2JWw8Hsk5jDUuS79ftMXzY9JvrjwujrKNjVRejpzwC9V8gUC1FjZdUfMcv4CB98eDe9eNDLi11nzAyYhaegJ",
  "key13": "C6uF9p9L3innwJ1moTXYatM9QkqbGfMCkbPjAZwiNLpxodBvixC7ZBtKYkSh7g193y53XcwKX1TjSSJYTpz5kcJ",
  "key14": "3ZSoLChWAGfUKGXwtFtkbLqk5CMhLKUmXL1vTkDeu4Xgwg1dMUwbrTCEKA2exTBV6Xi9oToCbLgkVMphWw8P9xrn",
  "key15": "3my9of2C8E5EBBvZsQG5U5GKtSmSDYAYNjfYg7LsuknhAcBvZiGj5PgAZVVSbjmxbiZFE3UCUNNWCzPCeMKZHM6g",
  "key16": "5r28k5qTj7VpTW34sA4gz1SHz253B2dP3iDapqePANHJDRUUNfNRSR3QrcdVdgztVumaTxuFzRCyWV6E99Kdpt8X",
  "key17": "24iEJz13PpyTgMkmmUWpnyPwivnDJANrz74t2edC6XqbQnJVwCbCsknAqidLyroh2bopWKz45XfZiwBRqZJouDkU",
  "key18": "4kbKsM3UDfH1AHoVtjSNRH7vjPFQvMKMttHWjkbW4QqorYFRiAYpgYdkg83NgjwEqAk1FKEf9amdnhTxdE63P5X1",
  "key19": "483rSVNQG17Lj8Ma6KpzcuTMNyQ55W7kjBwLFTinEWc9nsUftEWirvTTw8bYH3q6TSgN9EZ2zjHzpSfviBjA4PLc",
  "key20": "5hkNLFA9eTHVbKJs4Gw6Zc2Y3v2oJ6xnBKGAM7pEuMh3R9p7TWkLQgErmZkPDNgoy1K4Abvp7oAvA3im4uVJ8wPX",
  "key21": "4ffeZCSazEgKMftPZBoeXUyMoqwYcMGUKokyk1P2SyY5PkinthRbsuR9D1uhrmxzh82B1F2RkrQhH1sBXizfhcjW",
  "key22": "jrrBY2YmaxNcpTcGroSRvJPNxbg6X4V8vR2MxEkg5uN4mYTPsyogaRhAj22wYrYpppj4XRD3k7fmVeUgM9wxcab",
  "key23": "2Nhyo5yvXfvZea4cu6R7CGwV94q2YrJF1jqoW8RFgJMDJgD3raT1SCqxpEb1kKdxFrttjJxbb1gjbbdpoMTgmA1H",
  "key24": "2smYE2MtS6d6jAqZwppqJcGSiJqnXS3t4HEfigciyLGZWvzjyJG49S62MiA3Cmgu4mHpCGuAZ9Rjw8uSjV2NSZGE",
  "key25": "4fsUYYwiSCYhEhZ32oud7oY743XJh2xJ9yw1kjcBbjiJXaSYpcGKSqVHDvPgSAg2rGiNhgn3gtSyjTEdxtG1FDBQ"
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
