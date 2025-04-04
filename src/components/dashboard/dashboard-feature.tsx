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
    "5WCug8QqTa9MFUK652UQJQeEen8XVtFg62rUiFBSZCzWbEzBVeKrhmCBVDDeMjdLvhpxMDsPfxYg695HunBumPeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1e8Q8BeSB1L6sNDEGLedoJQd1Yz2XmTHs1H7uqVNdwnqL27sEeP3pu9Pp3oyj5mJprNdD7jJBDSxXkEmHuDv6XL",
  "key1": "5J2QGfGdWcUdQr8nPr2gC7Lg9yujVQZ66ASAgbqwQNvAUChCGMWo7d4gbrPSrfvLX77tjRjmbig7yE3iRXbv2zYi",
  "key2": "79vpuaUEqNAb9E5imNPCXxCHznSezh8eEFwUE25F86Adh3EHqXHjPoCBDJ6p9papfA99vL1gpAD2ZpnNAZMmoFa",
  "key3": "LrCaByytiH7uAD4qS6ZDs5ZjF5sPa1SAAPhrKbS8TMuzX6GLfgY9fZQEd3utadDLC3MyYv3qygjTkNeFxaoBneY",
  "key4": "CeqYBf6G4JkkcbNhiC2cHw992mKqsZuJs2EARVzCQupfxUewdWHeZKe2vqxLjyTyYmgH56BeTsDmX7BZFZVaKch",
  "key5": "5vYzQWvCjEsTshBgYBCn3vVZ71nQEM9QuPGoEC2Gpq94GaGou6aLgoajL6Dxr8fGHDHdsv6HuWMN1zm9QJ51nfRq",
  "key6": "5p8n9odv8Kz4STdpYRCn5iafHcJWDb5XVKFdWaffDbrVPrBxATGsR4bGjRubqmYD5Ko63L92NNSKfx5pV69Wnq6C",
  "key7": "61WmHpePskZXqzvGgyanDDCycYtybKG3FYFUpWhYoTB9XVuAGfKTqXtk3f2VTGFQNpT6HDgxHHB3ATUds3DMjghY",
  "key8": "44mZNvtPa9e7TAMstDBLDf8StjwsyQ3Ef18f5Z6hkpLFJNwbCAR28UNANkdythBYA3YyUk4CXtLLxfzETJQVjpiQ",
  "key9": "5SH5sdn8wfk4BJCgGj2NRpPXP9jHYaxy8Fmy5t6GrE7jjintp3wr3S35yZV3AXiagjth5GwrRororpbGaaDHz8kX",
  "key10": "46KDVStphE6wgFTVo6FmTsEqfDEgquE6vz78XmEDF9oJXvcKXT6f8vvDhrT4BBH2oqNXDE9Gef3MQJPqfagfNszV",
  "key11": "9M4U6iD8KW5ErAHmwpuDrF5pR8rnpBYfnHBoucgutPzWjRdyy8GuG32zgUFKbzwXmjnZ5UzrE6St2L3BKeu2jXN",
  "key12": "DiX3A2B6SrGwPGAfbZGFStERYUxWEMhBNB864ZNTGHVEY2oxdFEgPv3qXd7Cnskbn4yRe4cfTiAKtYHtb51qoxS",
  "key13": "4d1WCnjdCVaJRHcdUWztagmySxkWXV95eS4BdXBLZGWQQLp7nQPtYHeiXQEuDUAtMZMDE3S6BkzQMzbbGF45ttRX",
  "key14": "xuZmSUd6ePFyLdw1f6A5h54dBBFxEvCQq31ZDF9wGhj7TPtFRWok8JTQ5EAtkDo9wQLxNSQiN8AfkPAzQuCGZBT",
  "key15": "5GQbWHSZoqZ36cRBGhN1Y9UYvRhgVpkQ3b1pedi93qUFQL9DALJKdVGSoq3vR8mGeVpugZ6GyiXxhTPJ89juWkhH",
  "key16": "4eAnWEDY73V3V1XpkAVJV1tAStXDxao9Xkr2Qoz6Z7X1MggzJ5t7zhDbJeh9sVR8B8EuVRwb8ncURSeeyweeqi2P",
  "key17": "29M8BhTJyvzecyn8djMwFKMZAgo8DNnEfAmEMjkCSBXNHuGkCopsdh7MMjyKmf2o6yj3bweFj4HsN3me2NbBBgxa",
  "key18": "5KJcioCEKrwvwgvAAiX4d8Kx758MALcCcpqV8vK6RiJqx63m19BPMbirojGMtKP5pFCdG5NNdEtEUDdjzxoE8qmn",
  "key19": "4aEjfxXFJAAia958WSRqCpAgEsWd9Tg6goi379npim9KNYQGJu1Az6Jxjj4E87uE8vEVu7TRGK2W5jvZ36eLRdc3",
  "key20": "4KGjAtUzWKAvgkULnZvMNsbeyNQduisCDnmxB2J1EbprHryoGctwgwNqiTjCQNay5AUCWNPVNudiYUU7DYeci86A",
  "key21": "4rN19DKqh2F1Gdzmmazjz5aHuFuBPtAmKmcxW1e4nVcgLrNhD7maTGdT8Xj5tFxtffgBp3CCVxkKZi8Dw8EtWW9m",
  "key22": "3krA2s5kGYHZ141i9PicokiFdMeDFdtMMh7boG3GZ4TDEpmEVwtxXbdu8wHQ7Q4BkdQPiZA6qjaFs24WVuPHpxtC",
  "key23": "4MbzD1MHsdBa7LwzkCYYR91GxTqbHAAKhnaqkBag238CsmGX3bxvFwmPqreBMbiu7y6RBX4jA9xV9DvfZk1MJGcS",
  "key24": "21aFtQzQLEPb2ax2Wj9q9ErH8G5oVCYG7YjsPFqV337xbR3ELD9vG5hZC6g7zTLtJoknkzsoN6BoSk8d5XBs27uF",
  "key25": "4gzApoudYT2sXoJLBQaEdzgJehkqiHbn4Y6wUaFYyrJrK1qrXZyn4QXSvTa2kJrnqgkjcjRhz7FZdYbrg1naxxKx",
  "key26": "4gYTK8yCjMEu9K1YQbq4HChDokPbpLn9wUKThRebB6yXoQoNYTYX8H2ULNHtyD6f9MipuUbRwVvsrjhMoEsS4TLb",
  "key27": "vrNRiNaKP1WqK2ESyXt6HNU1dmAxahDS1kZeQfVp2nWN76cHVqh9Vh4X8nakx7H9cak1TDiBaePVXAzhxxhNaVY",
  "key28": "2uT5X7yDp7oShejfv1nEYBHuWDgbBfZUMoCy1UGzJikGGCHsqpzdBaxkfHMU79pyVR8bTRg2UujwSTueW3YES4xb",
  "key29": "54bhjW7crJKGCYi1U5ezPnUnsYHg8mkruS5s3H1EJMP1JdAd9YvU1f3WwS5YjnaHdtYnrvj6nqb1JnK1RbEdmvPj",
  "key30": "5YknyHdGjVqYLKyG7ni2Hk55MMQRD6fao6sUBjTFaJTuqsvXptadcLaxoU15ipWVLuDNeyFp4TAxhW4BVtX3yVsS",
  "key31": "2YM3bP8zU5PfsvbYgDSbkxQAbJ3UAyfPC51sF8qKuna3SHskEUfq7CEBkUvG7xJPbjMrDSjDUqhi8gx6qkLBySD8",
  "key32": "53PLxbYGrTu5Kpm8Shh2vDFW5mmmeYr7C4wcfJHC57DoWfKyMntUfofgokNM6tNWKYyaLZ5mhH5kUd69iu2PQ3vA",
  "key33": "5Tt9Z2LievaKzmvEozakEobGCZok8grLbVC17bsy8ajedEAvjkecpT4EYDDfEmP8DndKCDEwXCTfR4UCxPJnEdrs",
  "key34": "3VR7PnuqJHv7hdy8DYT61mouoNyKco6HDxdShkT9V8xxixhcnH4LKcp5m3YYhsQ91gwVGoxzCCjpNMe9p4iLoB79",
  "key35": "2LTnnTKUZjFL29mNpQJ1mLPZXN4AsoBioQtHZNq5JxUrWG1WoJpTftTCJHsfXiHTgoeiarRYFxR4jFkycEoZJSDQ"
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
