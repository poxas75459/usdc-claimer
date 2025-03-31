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
    "8iYKisvKbfi1idgErAURZ8n2F9T5JxnWxGiPFF5tXzVbKjYZs1m2SSm75YTdKnbZTEGEZKtDKMZxp3Efz8zwtKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2APv5Lg65biRyfNtBiZo4Dkr8s8wS2rAermuEvKT6J7kMgvEfiSCrTjegPFif4aBFBtHkKX8e6KfgQCSDDm6czaB",
  "key1": "2iADZYmXSkmsxefv77cnBYJLbVwsDGEdWLxsuii7aiVfYgQVvdEkw7D8uALtvuELyajdijg5wG8JVXLWHc8koSMa",
  "key2": "2cGau1cRemraKkAw6oqspUeLe4yRJtuhbqfdY85jiNwVZFiu4DTTyZ4N3Bk1AFaDVfbAYL9WQLbWQb6Q5na4zbm3",
  "key3": "3HiXEU4M9qyqwNc7doTMrX6atQLCCJU9kvJRx5sgtTZVQ6VE44Lu3qSUEMiDyqXmysKw5rmWMZGHsyRLmwVD6DoR",
  "key4": "224otgVkmwjF5by8xnD7uRUzREuytkT8ezmyP4WpV24WmouhQAjwkg9mYnXFApCr1gDQa1VUwGeQEjmabaDY8Yz9",
  "key5": "36gR1A2n2cNQmpaxEc2kc7fsGbLvSiLrgDXTruTuXqgBzSMpnapebJxV16UueNPUVPy52G3w7CPKEmFFQNfD4Rcf",
  "key6": "63tGX6b3wcTeEXCdz1NEZxxweSZBtP6jzLR8YSsRpnGVHjvDfY6pY4recsjSTusKdKjqRTFaR6CmwzXVs6Whxd1E",
  "key7": "2SaobWhNY7zPpRVKabBwnezUpWp8UEqWXuwTHiRy2JqkE2WZt9CDiAkZWwni3LGYR7KGx5M8UtLj6viMV8a94GYZ",
  "key8": "3t5VQBnyiz1gPzZt5syL69g1sYUPcJUxtMMfC1jcwtx94Y5v3PbNvYrDRkQNurYJ435aJE9WKqVBkqz8svkskXrv",
  "key9": "4KFXiwtrahARXRZUmBub6zWLkMRq6ZayxJ6moJz4EwZESyDqFqFX6Us1LEVsTTjFYu5SZPWwmyWEQZk2BAbBCYEf",
  "key10": "557fr1W683M7zUjdgqVyaEsUVD5b3wFmUP2H8bPfaC7976URe8QxFTh5ECcgV6aMWyKnkjoUXLao7gvvzBrYZsMW",
  "key11": "21GdZPE4BjZzUbGHCMMDDCFtqaqK5nvMAjaEcKRWvdShnhYrTDhWaQkrTgfHVbqrBiTNQLdXpX1wWx2dKM1wJL8p",
  "key12": "3hBYqH2E4eg2w39mNsPMNpwZ1u6kRKTviUf9k6shWZMfL7GVqkBCe8hcdWXrXHHtGcbBdtdvj4VoF7dTNA6phdEe",
  "key13": "5Xe6n45hZLbuwZDk2KpnxqntGuhyQP5WA2LxYviJttnEMPvVbbNQxzFs4TSqwuc9oJUfZQirsUpuWLB4efPiJe8p",
  "key14": "25sfX3ydgPJmVQMdynLZJeiwqDafZaiW6TWaDuwA99SkB71FRa1RyzxLNC4pYNjqhCSCx9o7LNBb4PLNUmN4h7hB",
  "key15": "BUhAv3e13Adacp1bDAooWabLwrC8dAs158bppADRdmVGWoiTMpJWu11u5CtvxUetA27Niug6XJn7yJPesEjB67f",
  "key16": "2xgSv4UwNWkcUdxzm1yRwWqFvWbXDTf1qWWBq4oxvAbxWggHkcJBaMn2TrsKVEedJHn6UxdfKMxPwPmudav3YP1Q",
  "key17": "3htpUqJ5pgET1MSFC2ZTGSgLF7jSw6sA2KWs5BpoppXkksETfQs1e2UnPm6JJhyYuAzWrs16gxznXZQLVjqkjtwX",
  "key18": "4YufiQuFkYrBdPnbzpWcSLkb2VzTnqLxTJskBRpjRDwEwa24GRohMZPZiM2BkYY17qNJpEXXeV5vMEVqQdS3qbVx",
  "key19": "3PY1Mu9pnuDC7Q57c3a1REqMtZjTA2zvxj7GwCtYpVR9YPZVGHFJQLmpbEvksfgApMunigZdJvLrtF8tULm9R8Yf",
  "key20": "3yJRyrXodSYLSMmh1afo9Wx2mpX4fHzmMCpCLgEGuoLEQRMZcqLmSt8vQrA4HD8ZTTPWHcXwFvBTuLjAVTZ4ah17",
  "key21": "5HEAxMhSzdiTsvjqDSFTQueF3Sfo6UGgiLfUS7rd9zJ64eKiCugwvDYscJetrHnPwahchM7HARrpuseNeGRLMKKD",
  "key22": "5A2exaSNdtdYCFRk8gdVUwCgzkDYraurvEnQS7aufqcNvEwhrLduKyN4mQAJhwuq7e2ABUFrTLhGFFke2xcb6zqt",
  "key23": "X6QMemLwN7V3zLnz6sS1fFycp3kgCDs26NKiCVhq1Wssf9soveCtk436pDDGpaWqRpu8s1WswTS7LYCtLATSG2E",
  "key24": "HMnKvmEcn2RbwHKhcxU9nCEM15s4XsQmU8FhmStU1CVXKbSrfZrA6KetEqbmWKycLNpPSAHyvjjFva2bgDJ4p83",
  "key25": "2ZFyH5tpx919SxsjhFhCUpnjmUbsX64RYBcaYxNzxW6FkmWsmgGjMT5XH87SsXsUv1a6FQzoxLPYchRX18CMjqS5",
  "key26": "4AhKpJ9tWL1Q6Lwz3teJoqAg8mG2MzLDr3Po4W6UM24ynjdGFCoaDkUfmswnsvkzR7NAii4B2pFW5D2d44umf4qo"
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
