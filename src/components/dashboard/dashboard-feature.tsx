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
    "5dLNpjbHHiKdwBqpFQYaFLPcUdrLB4jxW2UCfUtLtJZhnGY2wegcpDQDtzUDX9UtuPzNVD1xkf5Du9eDSmAJuy6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bz5r5Ge1chVBkXFWMLiCT4zat3BkmKkcMZx3nz32xYKF4mXaGYnBKdqm58x5x767dyZfwdpMG8uuEEa2uqQtztF",
  "key1": "42Y8rWdcncNsCGPGRm61eeg9ooRvM1KvLykAtVmDmUkwzrKDnoMjC8qqKGCuRFgBZS5q8fa91eupX7YgiTFT7Sz2",
  "key2": "5RuG1RNi8iLp5avV2K7PRVbfjnGZktjQSJ8CoeWBbTVMKk3ts3Gn4EqEaqfnqhWS5ZMB2VuyPuBsmpmkF3BLNua4",
  "key3": "2oLNgDWb2qXRV7BGc5Q24zwYmutoWkBZ6J6w6oXVRr2oD1Lw5wz52YuaLLEE9CAmqTX9t1WHMdVGebsEqR1VvbQP",
  "key4": "5HWdWsmBKCNa3BjFGQQTayXN7ewzJviRvhUc9XvxVCSLWxJsgENFnKknRTGDfJXhBZXikUXDH1UdfJafcbSDyAQG",
  "key5": "3daLAB8u9Kkg9aN2u8bAN3DU96ie32dZxqHkorA4KHewx5WVhnF1eMDY9PrguwUucJcvfSvRE1mnSCvUy9ML92bn",
  "key6": "22waSG9S9euHbfwunYh7hLp5LTaxZg2jeKLZbt7Yx92QPBAZDiP6JbrwkWc3UPbrXDyCfqqA8FcDdrRX2j7QjMVH",
  "key7": "5iRE7cTAXqdkf1X7axH2KpFodcqozTCyCFJLzeBUpVhYjcTEZmSXNsnvfvB1hEb7wgniDrSirnd3mK64bgjxGgdg",
  "key8": "3dHXVkm5eCabKoANXTVrvFAnwm2CBWBYDnNMVwSFkJ4c65orJ2g23vbhCM2eSMMfQSR9xZ21rECAuGhsTuNpX8XB",
  "key9": "2LecBnsRjCzA1J9JnKis8r2eU9B43467AAqh8xnR5dkuX7PVh61D8MdQY8NAp62m2pCa9712MDmg7XGQ79B6qdwt",
  "key10": "22dr5TXY8rNfhNKsBnyz4gwz9hPHpYh33y85KDmFU7XeA2bbxK2gQaGxLvEuXb22RxdiKp5291XV6XVdkUWtN8sY",
  "key11": "5Bnonu3Js9uKiEJDPMvKAGAQqgKuJPYoA78N5ce3xuxCkR2XgbwYK1ZFXJDGbmqeERmrEVhddCSx2qw77eWHmJmw",
  "key12": "29mnk1ZFzFgBw9F2KEqr1Zw86ZCEZqxhhX1N5TGCWKSYvEAW6ayqQgbakRb1Uro2QQXgQt8irP8qEAQqbff9gPmZ",
  "key13": "45MEDZWaZtAyNYSJNezjCq4KdyDXhibzkN7BhqUdBFW98evTY9eogBqDWv1L2sanFaFHuxVFNfbkZuuXugysjTiR",
  "key14": "48Ke5EVvdcjQ9LUdgKUDqLD1MtyVUBdnkNtYtzoHtEyKAKsYVGxjGfW7M9qbuRq6vXvdZuJL5StJPxn5Zrjn6AeA",
  "key15": "4zJxM6u2BjgVPtKbJZggai4GGGFo9HZoq8bk5YBNPmF4CuegCKEEAUVwn8M9Y9GoRmKiTq7U2rLQAhUFH5RnzqMe",
  "key16": "2k9uZjzAtm4umwv78G4sJz5oaTZpwTNQYA1qt6UboPj8Qt2AzghzmXygDoj6J9r4kf7ntdTLwRfTjSdhR5Hq2ZRe",
  "key17": "2yoMW65Zz8gpNLDWJigvC9T95puHYPsWp3gcx58w2uXWPhgQCR1QR3fPLKkTqgYhXTE6J5oeRiba1QWXooQPp5TB",
  "key18": "4bEP7gX33ftwbCYLjE26GVxbkkSjxfFUQv2ve4wYeTsY51Ah9tgi63k6F3EYDar5kqkx2ubDBzsRwMvouDF4zbDr",
  "key19": "2hc7EiC1BVeHHHPMpY6vX7Jq95nHoWtJ34n6Uv1AM2GGvwtTVXfNJmKUvwAWHH6RY7fTrWdq61EZGo6c9aMbcFPz",
  "key20": "5oy4gkroKg7GT4AEcHz8nFbZo3C9ygEDqzH5266SawsVFsy6HHRi5aXzCNL6U9s18NEBRcpujJssoUgeYhkm4a6b",
  "key21": "64LCEejFvvxdBxs8yodWtw4GFGqjiSGn2kmXrXxS3uKqxQ5HGXmWgjYQwTuZan7vQZg7dtBkiVp47u7D5ZEVuQAt",
  "key22": "82UMUfMn3QnPCqDu217nvr8EPAU9aRMAQ5GcJ6N59BpMUA3DaiUvWeaZkRdAwJdR1cTXJUdqiS4SckzVyfjJCJz",
  "key23": "5g4hdBFB31ENFxL9UWeFg1wTEaf8MfvvyoCpAL8aWmMkkQyUSfx1i6994BQVKmdh9nc4msXDpLhNMixqSC92BeC5",
  "key24": "3A34HfFvGLRjsG7YNjJr1UxEUJK7eQhqJoTDEQE5jJbKQc9naySjdzWStoFHvLiswG3sBEBhsjRGf5t48nZo3KLG",
  "key25": "2UkyDzGdtxtSZtf1JDgtpJr2bXxPjuzVKTi9eUhokRvoWR37FhRpeGsNCx2c97Rm1fR8vwtgnL9BerBRAsdxFGZp",
  "key26": "2faPKaeLHgjtBCrffEy6PamA6Wc3fCFGkVHa6pg5tVgzXBQaMS6p7HvyzwM8wNoAer6bmB9Kovdnj4dHs2nkGBd7",
  "key27": "5kqThfaEgAWvf3L98Yk97mgAz26uZ6awqxMqNgfu1UL9uMmp67WVPPLSNf4LJCkNF3yD2Uf7Y5aSHkAEM4pApdYK",
  "key28": "2WfSQkNMUUfLyjKTiqW9XJ3gKskDsap7JP1jiofbLSqTE64hbr2yke86oUruLAcNzkgSaNuw2G8kCVC6JwAprRmi",
  "key29": "5L3guSaU7QYPKBE61oafB4HuYdB5ic6QgZxjBdYjcrfMmZofk1jHCe55pF2BVLoBTXyGZE5pTrqXdBk2PAhxFhFG",
  "key30": "G6Tbx1rQeMQ1VsPB6Nr36Qgy9GJKiJQWkqUnFBMp4GbEaiDuzPiadmkVTNNvQHh6nUyrg1U9hgf5uEz2S8zuDHx",
  "key31": "2d1BDVnvjuPf37ZqGsSb1JuXifgZcztzE1DgeU8eQPdn7dTQi31mndAFui7ATZpYNxaumoeLdHbNpqoEhef2hyeM",
  "key32": "inXYYwvT4bMNwJTFjmX3VuiGd2qTque3mWaw1fmSH8fLLf8ZgxCYk83eWZBZDMsCLdWvBgbDMU9tPS3pxKpQmvB",
  "key33": "4QoL9VhEHH3bw67jCnmvTcns6hSVwQZuV52mBmwGq5kU1DHbs5s3PETmavQ6cfHk3ZEpXq9CL4GXr6YjZjXTekk1",
  "key34": "2tTLPzk1sLnzBrbKfRQ3Er689JpdXMcJMfPAa5zX2PcrFzpqAo8YWSGqaLTvc78scFTQN5M14XbiA9v2GkRU5uBQ",
  "key35": "5q4c8CeTJ7YgYdpnB9PV5YVRW1cFyb5jSruk3aknouXAgYwRJwuHeGA2Lpo2fm4pXxv1bzBxgTmq5UmueutB51jq"
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
