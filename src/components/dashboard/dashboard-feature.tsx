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
    "64hGfLtyXg7m7utbqzuVMwFXJ6oDkjyE8fzK4ermf6ckYwuDKMX3jGaHzp5FguSRHg2Jze34WwbAHciFP9c4NxhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dan7AQKmVB4Dh8QEik3DNUHzL1661hbvhq2U1MmdbDbUCq9V8oav7E8fAWWUWxkjtN9ECEB19FtTtu86PDQEqH5",
  "key1": "4hg8wrdw7oCqPic1FYRxybTYgfaQ1Cr1fCe1dPBrYevAHsyzGa5Y77Z9GvZB1NVa3YugSAc4hHF2XuVzYdoUEzdc",
  "key2": "4pdF2B52CLaXsMPsvjzmsLcgWYKSjjZ1oenCKyvpkciojJVxBWpbkENGZckPmWDn59DdohDjS5WwzaFeHPWhUPKu",
  "key3": "3wzoquTFA6mkduZRcSFbkjCXxSStA5zENQXkTvTtxdSnGaZMCSvAXvT2yT5YdzxdbQG9h2hth8UEtXMF4tbC8VLS",
  "key4": "FhTWtJUV5rXbitAAXwQ8eVJAXzqeyaFSQPdfMegdvs4ttkQxcFu77YWq5Pr81qDVktcGEV2kJVTPWUPFBVU94Mz",
  "key5": "21jHY5XJMY9RP2kkTFdx5wyf7eHNP4hgvDGXX945CBsXp1UKnZFDJvqdco6cVUSHHjB4yTbZ1yooBvMkUSWCVcV9",
  "key6": "2yq8kQkJq9gUk4dGtRqRQcxGtdpRxcrDaJ8SXwSjhfbGNTnJRNnAAYxWwU2m92EpuH1nMUyxmMm8DU7TWQgeCbi4",
  "key7": "4BZJj2TeQvh9NDcdDDsFH4A2NRvrZSsXGEKBoUk7LRZ3mXTs7KL5BtE4ct3kaLonFLLvxdAqUCwDV467gyVE5Y2D",
  "key8": "34VcHc1uWT8szucbGMGUaq2DN4b6G6qapLB93JqYWPUEcqspn3QTmHxMGmys12dpfmLFVCtSmRSMBgwhteMNQDet",
  "key9": "3Ctyz4Fnqdbrpo6YUDaKJ1vTV4n8zpXPsr4KNtX8xjViqJWYPu4GBUVHg1EgX6nmgQdDHvnMDLKNW1kWaQ8AXa6N",
  "key10": "5D3zHzcZzXfi3eVfAXbyxYY9NsLK6CBah9C8j42KfMpPiU2peDNnzk8tFFt7SAFJMzqrm2zWyfhzkt8SVkEUpQsi",
  "key11": "4JqjWVyDomeqou4BUhWP1R1Y1rzvAvxGCr2sd9ZYkuXWxbsA3i1ZVdrmyCYrSzqQ9W2NZLZSbDKto1nSttjjMvFf",
  "key12": "2PUkCm49dxe8QxSg8kLcsQyPBsaWKhWCQpSRkNAJkGHuBxxjX4JmoN2QuBzzYyk8JmcKs8ux4T3xu6X8jnJvoVAD",
  "key13": "22UXXK4hzD7F17sTpt41PkBpcdXnuteFVsB3er3YwVwKnVA17ZV82yd4dxwtL3g8gzMx41frGL82R4CP5YYihNeZ",
  "key14": "2yr3kVxwe3MRZT9HA5Sfecx39dpk1wy3ERETMF462F6ryiS1FQqYyfQJCVmBNumFe9HLeXnp7Lmv3ffpwzx1tnSG",
  "key15": "3W32onN4g2e3C5DZJ5xXQBooX4d2RAdDAB2yrEgTkXtsp6eWkTbLGkY8RvQUHypJwGX8JggCE2YPzS69BE9NKvAh",
  "key16": "4Dqt12fzu2s4pSg3bmXTRtiPydhFmnjLXeRSctv9wnU6XZhJwtVPRuRPKYMrFir5LREjyFpUwLP51osbo5GE3dC3",
  "key17": "47GSLCA2QMi6Fp6rU2VNSfiPc5Ux1XkuCu2XpBPmAV6HwZAs8T6zJvLpPQNRvd6noKyFZuQ2FmrFKMFnBeJzgHe4",
  "key18": "3JqrihVjWiW8PpnWqinuS1EiwDMcJFLdpVZuPJitLrTn1GJnwfPcZEjuFteVzy6YGzyZbjPGWyMbeuPQ8W3MSDQn",
  "key19": "28KV6fzXZ3y5XvALj9s7QEzqLvpgiJ4Ksk74qyUVUuZwSsUfwd2zuKonsQD6HXAAigoGVzhdoji7wtGpernvX3Ku",
  "key20": "5exnrcGtaLfixVX2B8xGPW1UHbAT5TMdUwqbZEcMYFAfpuNrzHdgcDAH2zbgYkgZ3aV7GETQ8Bx9Qs7ZF3A5H2qY",
  "key21": "4u57BwBvKmrwURnwQsJHEVfYxa9tQLEfkEkyRSm1xABEHs7G8HCrcfFi9UuQFcMij6GW3Bydcv7pH1tXKNprrYbp",
  "key22": "2UD1LdX6JzBwVfpFQiQnoPztaQ82FfbB1vS5tdPjEgo9qyCbAmH1PSno55Wb5uCHiato9QUBE4GiP4WmXrm42aGa",
  "key23": "4Mj1aMsFYcjEJsfK7NaoBC4pdagLVbVBAxxvo4xcVMThfrX2q2g3w7ruGzZ78CRz8LVf88BdKQ6mSKgcz7PbL1WA",
  "key24": "4cLN5GhMn6bgKb91tqDCmgM644cmdXBgFdHU9QrjF93m74Q7vxQhFK6Qm8buDNZTCRfkd5V9WC6piMVbCk5svEFa",
  "key25": "3HjaUJgS2FsXCRzASr4uALhSFBHKrMJ5aTE16Tt1sDZdNoFTdunpZDswQqpPsgrsFkSfPRqEBjZJViWBHm2gqbdw",
  "key26": "2fSLo7SK63gutL41REnU8fav4KFpzNQ76DuSqJepRz8Yv2QRi3fYogTVzTVqCGRQCXq3NJfWZqvPgzHsEXhGJrXZ",
  "key27": "3HGBD37q5Mnbk9xtowHJWm1xEvoJoxKUFEtxCdAhcbn6XLU7anvmfeYKjKsgb1KtvdRbKMsRm4vjpdmqbgsXwoF6",
  "key28": "rvqxHdWx38okNBdE7NPUgDLUGqCnmQiE5pzDpSg7iyuAfBaqV8mcc4SEfQn1daYH6DwSLsieForhhgzpexRmKET",
  "key29": "2hBK6fmTocJptXFh4xA4mBFz6R2h3X16UwxMTupjK4X4g93wv57G5TkmXJ8KEKw6vwwvkCY1jnki82Tx8L7zNcJu",
  "key30": "3bhbdeFNv92bSLZLPnY3FAc6n4vSr9YG6HrAoRwBPDKjueE7Vi5ZokgEPVkLZV3d5euDy1e5PnGbgkYt8FhahSJh",
  "key31": "2HDymVkvhAfqZdietk8MwaCALoq2r1u7xUTM7fNEvqXU6kHXYWv1coL56LvxXxm61BaUTzthCmJ6z7ibAGDvYwRA"
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
