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
    "3qADaZzsqQaPXsBg4fvf4ZcMV6NcdDUXydVPxKy5HTK9t3K8xpQQtZYiJWfCnrGq4c48Lr23NVuEdjbYARCZtCTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECfHXoqyZ9MusgWTCb2dNQYFEM5o9MBNdae6q527JLzW4iPcuoUN5JKGyX4WFxQSrEJLZ6KznRydvPfM5Yr5YJV",
  "key1": "5UePjms1Fug8UtRymtB2WjLd1V8Sgx5oHsAaEPQouAYX2j4JcEGRvXCVZapLEPZUoSgXvzptwcbPmzZXVZ92MvTJ",
  "key2": "3GnbY6eVnwE7t4RUpnyAqr17eCZ2Pmi7KN9Qiw2cpXBJT3BPUAjD7dZ4XkMYVeasw94bcqubYqzdB1cJCR6gY3gL",
  "key3": "cMqzZBvjRm3R8bAnV6Aa356nDgQgW23VENVQEW1cRvDwcEmgzZaxfGmsJNFWRHASd4cuTHPJ4GHgSEgvVXUnxwj",
  "key4": "2fKpXDBFMiqo3xb8LYxeYjgEnvv2yHvYmARBPj8aC9MzLmM4zQB7LJAJj5RQ4sprGtvNY295DdhCYNa59Kf3rN9V",
  "key5": "4x89fCtR2JLR8oULdCJHqEWnJPpgeeGDHtR4T7LSYXLJc5PmeSqQFMhHznFN5Pd8qLLZ1yWnNi7ShagHD51FpvYh",
  "key6": "vrtddyQ7ooTsv5ns7qRcatoc85xSREnNhNLSg4GsCm5sZC2LuYBksBaxGV1CykWYVx7Mze7JcUnxbC82NDStxLD",
  "key7": "4gq4iLoT7uWFaCbTYTcy2kAKPhwpxYwJae39cgjLr8RZKfvivKSP2YSxdmKVT6czwEdjTu5RLQP8Tdtn4nWQb5h6",
  "key8": "2DdeukY51K27Prj89oRrhWSDhKsyM1qfZfsgYW98GBhqmb2gsyyCp1RBpGy8WaCa8sLNN3xtzE1QwGUD1GQuCzJH",
  "key9": "FjmQyaLwKE9AcKg95WnqFxNhsX3zkp5Yg93tVDv1gpWuRc4jeTBdHu8pZprANPE4ShKPZpdUdbk6tJaXB2cfmos",
  "key10": "4aftX5g5qu5jqKJuBdAiwKfNYZJ3WUio6fXx3kVHPZKx93fJTTGrFuDSnKJwGFuziDTMKHsh1TiWiPRvezDw5WaK",
  "key11": "2EU9LW4uVujhdKtEaEVbWcVuLNwiYkijN2pqVMsGW8grkn68aP98fQ6uQxjqsXXX5bW9GaT7eDYZ8HfP3nePU9zj",
  "key12": "BLZg9gTRzf2oEg6rRDPvP3KsRtZurqBSfFsxyPjNfdRCZ8xoeFo636AfFdTFWihWBu8QTUwwdvK1rndA55eQ71m",
  "key13": "GYurtCUWQxiXMuG1Wc11AbQSRpFHX1nk32cfx5ESHMrx19H7rknoNHLEGzLrKmSZcwXc9EnXXx4qZMPZmbkyANB",
  "key14": "5S2LDWqrQEKMkjqheBxe4KHJitY3VsGxGWpkcL8bbnJoRMvzXke9cbJYaKWTq7bZQE4a7S6UK2zoQM2gEt2HDo2q",
  "key15": "x7QRnn7UyRaLYmh8JdhP3WHBg1hS2LQHmU1jXsZaeXD8FxF5rZyUtndxgqiRqVEaS3eMmZtnJi59ioZoDDuyoHX",
  "key16": "5guMkWuUdrYrPiNHuYmwnzJjAYJ9CZffeegbdomeKM2oHcyf33pZ6d4QtFyFWEZ3gifXqr6TBBMrWGcv99GDB3Gt",
  "key17": "45wndc18amHjG65tSLZzVZBnyGL9tezy5hXjSKd1aQ4PHu7B7CYb1Smia2hA4BvPf2LY67azvbaJCU7Gp9W77wmT",
  "key18": "bKYHu9H2X2KbXt6bBVMviMa2vbmWkU6j7NzgSt28zqi8DcAiHFNx84bucMAupSHmN1acoMApz5vu4ASCw5C93tU",
  "key19": "nKzU7Yg7QLD2Dk6aV32fym4LECbJ3ALojPgKp76xupLoPAurVmnpeXt5rSxA1oD4rz9ESk2aVeNXeyn6a1qZReq",
  "key20": "5QYe7qFSATnCx7Qfzg2CHh8Y2N5kNBVxGFBWPL5h3nQ1EhdtGpogsp1ZNA1xssR6TbYEZKaHh3iHDWWqBS9wYzG",
  "key21": "5UUhUgpbtkAs32XPhjCPLhPvJ5SRmMMs7k3z4HdRW4HSUw6TMgS39NYYkCLCcFACtMhenseTYV5k9k3WG6zWnWoW",
  "key22": "4BpRQgxpQVTonEQjnGH96AzU13t3Zcsv5ZzBLPotA8yo9scVz2m7BVmQ5R7inxenUz4M5eLoTeLH7jzuDgEw23MY",
  "key23": "5WJ1Cqv9p1VQZon7t6hePzX899vA7ciRAi6mWzpKeLips35yTDxvea8Ky4m7kSE9HANgztdkGKRe6ro3vGm1C3qk",
  "key24": "iihBCTbbYsd63jDt9cdjgjNZef99Ueagdprb1KFhL8isBDAffKuQPGiB19CR4ZeDpiL3JEHh5tbzY1wDtYnNZ1q",
  "key25": "PrbfbVdFqfbXDj9zdwykbuvtqVE1VbXxHgKp7eFaAKRdCaVYzakP9D1v6DW7fnQbEzBG9UhDVc9F5dk4DUv2f7M",
  "key26": "2mcdNKn3d4Qwd97GVmWfptkNqrZAE9ZvwG2Vz6JC1K4F4vScFcPsbz9RvsTwrRjzTWcMNu8qWQ53NdAeH2d5pHU7",
  "key27": "2vSmGSuWDyFqbxUsA2ppRTSmHqtt8daJpb8oKvLQvAssLjRjX5p7kfPJuGjTpwW6Z9enVAWE1SWBwsHzQy4VbuDp",
  "key28": "4jbfxGdYuBt12co3V5sxs7Q6YQGDSB5hEJqDY2Z7iJgkwZoJfr94cEiQayeeoMA3k79E2eBxrKWBbZkiE3rL9eDy",
  "key29": "3eGUASjTTxvGzgxPYpbrxvg5u9dHvZt53UbW3uQBnFFTgT1mDwKy1AgzrUBGbH5ZDXWtNkwVMgPHox3B5Zr6LMHT",
  "key30": "E7pd41mV12GJ8vBNQMJAkrMeL36vJ3MgzHp59qgbL7iGa8tfWMJ2f4rSRFPQBvKmLr2P1GgRct5nPe8eryJ3w9r",
  "key31": "3oxew3QgMmRkxJfcnmFAsRc9hwYdGmiSSUXcVpZ2iK9qc2gYTpbGw9XUFaUYajhTSQ1jrdVaosUg8e5Gr4aCDr8N",
  "key32": "4RafU1HxAvnYJb1LL8Cb9aXG2JwnDNJkx1RLErpWPXhtiaa3q8JMNmKsuoA6DyokQ6KZLMLowrryq4rZmGEgXJu3",
  "key33": "5mQ38MCecUcbiio4AmggqpgAosQzSYEzorV8ncv6fbDmzEf2EQrU4d4sRWCCyGBvJVtdqwCiQi6vbdck4m58tRMZ",
  "key34": "5oFF3iTPnVU6LUJ2JrZm3KRvAcppyrYvhtw8iBgvZaa6iYCEyJxTdh94QRAh1BRrZJ88z7eyKg9KZBkCeqwtqvV8",
  "key35": "4rcJMuYexegX2bmMmJRZ4hHVuJH6SuRptQpdDHj5t2VfL2uVNR5G9vvRDs5r9YubzFVTKiAU7TwrHKSw97SH6PxL",
  "key36": "4GhizATLHeC2peYVKUspDdPEoYkLM8VPZSKg5kyi5FM4m56aPD4ZsPEhJKQCpSpU9YccSWkeUi9BASF83pzLxjDH",
  "key37": "3JDP3RrZJC4F1mvs3yRavPBgb3is5Yn2crEubSLWcpzTYbK8ABVZKFoYJRH8gjNojGyJUcJQ5PxiHkYB61ogTnGS",
  "key38": "nexKjXn79iinwQWuJqzHRysHSG8YW7fQQGLyVTV4FmVD1Bxt7z5o2rzS67rhmSQ4Tf9cSvzx9feAXWVPXMyJkJ1",
  "key39": "4ZkzvUDM1gnJwcRb4v1M5B6p6aTWbafPyAmA5W1ewKJLpUW13Hek8VihKDov84W1t4kF2SvVyx17V6U3DqrWUGQr",
  "key40": "3zbvwyZPLSGnEXaorVUX4PNBtQfa2qhy5gchJmahxdT7uoLSFiVmEkfq7cXxd4R2Fo5o1f7zwDxGTFRjbRcjUxao",
  "key41": "4EkuFCSo2RTkRSBuPQJHgHkvmUGrJjCDakokNarjVQdMVuwWiEzwrGuU7cKPzHSEvNZhyPuBd8wYtWWA7WoTkzqn",
  "key42": "2inVaS8XEYVh4cyttFJshZoqWhm3jtzg92UpyNvw4GPt7hhLJpdH9u57d7BYSmNphNc3BmmiPMLToRgfrDYYmBx4",
  "key43": "EABR1m1i3B8PemdcC1eVdSFzAFuZVNXDB9VnTmvKnaGQhdEKkyAGAsGwUh2dBSGS7HgWe4tGFK1F1Ly9BhFLQF2",
  "key44": "5SRqY8R3ShgWN4TkszvKUYnfFRsAkS68RUY7xnQiiTAxwimnqdVLC56EKdowMtCRo421ya7tUxPTe3qr3HtFSs4v",
  "key45": "45Qa9W47T6ZkDoTpbbF4N1YEKMSuCjkuU15HMNJd1qEu4xDjSerSSsXb5mCN9y9G1nV6h4fsRXTun3Ypcwnb8WxU",
  "key46": "3widd8ZoS19CyB3Gm4NddasUKhFnvxfgRzJmr1kiq8eTDFE9DkomXfrWVTWgoW2MUhdGzk8BgNRieMGbhBULYRMo",
  "key47": "Au6SeonM6Tqa4rNMmUT9QBLSZgpuXScaXKBu7M3Heg7BN2ZUY7zb3tuEqysZ637WueddkdsHHuN5gGdMdYGmFNY",
  "key48": "3qrjaa5JfTnr6eurGnp9MFEmBuCcFXWswXUNHRBA6F7UWeRb8WhtjSw7u4XfShoFz6U3kMWcPUBwP6vyYFyJZasw"
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
