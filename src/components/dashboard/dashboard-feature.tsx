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
    "3QDrgomrrXirAdUvfJQAnS1vZfrt8TLcr8JdYq36zFWar7HpnDKzSRUtXnWSzpRfhuCQcdxfP4BNdqNx9uX8LxKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R166mNyjw8fAuecrR3CUFD5h8VuuAfe8cqhqFYdAfC9LFTNgPwuTtdFyF1JNGydV92dHgqFk63Ex8iCELkWNNKK",
  "key1": "3qDw4kkF3ejm9JgCXH2gNVuV5Yp2P6svBngEMbLqNrSswsMGprSh3RL6dYRNzqDK7HEbMqh9NzHThDGcSpb1zZWt",
  "key2": "65M78jNzxXQuPW5mb52U6YPVAcdcGkHN5mZMw2CK846LMryCT8nuvj9qeuBi531XzryjnWAeNT8wxGkdyE1SHwue",
  "key3": "SPi3DDJuzjubhks26PXh5TC2ubdNzs7aoMacsUgq42LNkNP4miAZgoTybJWKaXX7dYnvrxPJGU94psdAzcviM79",
  "key4": "4tUuCsVbE1RjsvKWJh1QfcoUAVdrYyG7KUWoEGqaUTkHQoh6E36s68PhvDmE6q6eZvNWFqCxrkseCw3MCum24L77",
  "key5": "2d77nTSTbCDceUWHhqrkAwbHWKQTon5G7xeUGUhDPEwWnj1uN4Tu7muxYheKL5hXxfvz4ioydBPVF23F8pRManZj",
  "key6": "3L4z5jMJtMDUCgsavFB7egA4vviLo4rLVAcNkHD5eaFFecX5t64Ymrg5r43jdLGBWVCE2UJTAEs4RB3g5HFWKSRH",
  "key7": "2KKUpMpUhZLVUovxTG69QemtLu4idBTt74nszL3PyuRL8rz7w3G9YjPcJ4qmKhTS4NQQAbt8eYjKhpJnBtj1CwXF",
  "key8": "2ycFHnfh4UXqosos2sjFER1J35xtZuqtjJTSu2MaaF58SAGNQ7nL2q2giLtv2z9Xxmtw4qVE6UWQRaAPUchkYHs6",
  "key9": "vqtuAqf1UXGNiEntFoREN65Z187xn58zH1nxSmk5opghdM84CYV3sLwTj3wxbnkj3MX8aUbeoLytXxBtecFNcLz",
  "key10": "2dnzvTvhJxqvv3uZzPpPxDpTW8ag91wyY8a8c1HE1YwsxhtHzxCkjanPEhKX2JqDorJjA4QDPkmM39ZJWiANcAJv",
  "key11": "3eQC7NEZodVEKvzRD89FzYq6LLeQZsQVSwdmveQ23KNPHQaUK91JW3YpyEBvbf6tAGn6s3YXCa5eVd5q8LDBcmP5",
  "key12": "3vwSj4nNbxkJ6z83ydG81LfDbsPmxngadjRqb4pMHDG4bcTHYVKmABEVWeUsH6svvKVBFy1huZwAJBkQrw6ciS33",
  "key13": "4y4awPvZjiD2v3zQXZftm1xV4SenRkUCqC2D5ZkuKfniLJHHx6xyEPQJ6kF5iqUhSbCopwA79gYUC1Mp6QXY8V6m",
  "key14": "55wDW6n34sEBpaE2nPjVb35sfePgbRC7zssaJD3jqZbCavMBpQ7Ub4YjsgZ9q3k5T25wXG2SyHsXFrXLkA5bBELw",
  "key15": "5vVBYKRQwG4TqQuFS7PdDAx49UVWh9qrz99s3Bf2t5QkvDTnFqdmKiMwZVHV2mBypUoVZK4bXVoEJ9Vg4tyYaF66",
  "key16": "5fWZRs91LyaXq75d4Z7ej2UhKJ5FSYuDG2MMGkHUSHbJJRHWgj3zEGXCiXUYYBbEyLyDQgnLVcCK9b31nV5QoqYF",
  "key17": "5iGCi4TiqdTJkQm7CCrr1TX673ZihghJZSujeuiVUT9oC29tS8KiKrj3AimjRd5oi3A2krm9EpcznjwbkLXoNW9f",
  "key18": "3PPWue8PHrrrKWMiHcPeTpXa5C1YE19DPVBMXoGHFntem2St1ZsX3MKDnEY7oFiLboF7LMJ5ASo4XZfiQboShCgv",
  "key19": "48zxJ3PrDjnvQDpYguPLFYCDLEaPP4k95oTPDbiL6zX8sHrudxkYWRhjDu1xYF9vhhMtnXec7VQKkTxrxT9xZqFR",
  "key20": "2woF2WgKawRXqeAyr1ycRLa8DQcpQYUkaNzE4VtMGqHaBL5AjPwLTDeNSjpNtdCxiPNV85iiXHx5jb8oPhbruqgn",
  "key21": "5JZCBXYokrZM4ZQG3XJzJvgFJwsACyQcBZu3PzKq91mzSEPxamKEZByx2fhWucK3Qkb4YrS3y2KWjkM2tpdfsXvh",
  "key22": "52XYfXMcdSz74QmLjbnkyHsguNga6KoPLCpYE55dKHiSUaCAjACCoWqJ7pM51rNa9hgv4SyD48VfbXi9juFXj6az",
  "key23": "4yht7zJNZRp8UJhWrUAUxNvTYC9ES5fgpR6G5CZT5wQiHiQq6CCz5cS7m7shRycTszPYYiqxiZF68VV4vFeXuK4L",
  "key24": "3X8hJYFbRNSjwVxs5gpTE7feBHtFWQTXgDcFWhoJu6HUhfDEEk4hronvzPykkbDNBvh6agamFvZPBssBnwmvqQTz",
  "key25": "3VLyyuuvudXoL1NToD1RvgGdynDQkyKdFLhhT6JKSMUgVwh3gWvnG4Zkabhuf2SduYf7qotkfVmYn9Fh2C5bRrTj",
  "key26": "4yPPVtdJBQGcZ6kYjpsfsrTnhc3d9B2o5YaVyq2GViCbJRchwQPcTjZnUjS43k2dewY6wkjRowxqmih8wZ5fxznz",
  "key27": "35obEthsLX2N4YkoeqbVEuoYsV9DZ2wQhRa581CcrAytV1PiqM3KV3y8A4V6M6YEoQtjTHbuUovKGsK6FcnKo6Mj",
  "key28": "4jEFmmt96joeyuCku7SAfGwxQnCU6ir7UwVMRBeZu6LgZbFGyquj6V6ychTF7GbQiReo9NX8mbnn6MUJP1yeM3EX",
  "key29": "5X14VTan9qf7WJVzqTHEqb7TBthtZd2e3RhMZd1YTWj5PnvdGqZyTTU68HkVYPMW5xg9tTyi82DRue6qhYfq2os1",
  "key30": "3cupXr6r7QtTzZdXM8ejmYwmKL1eX1vuGAQYmgpWNNkDw6EcwZn4dD53b5WzcDpAdbDw17YToPcxcAS1Q4QDJ9MS",
  "key31": "2B3vkpuBxvA28CwsyG5onhrTpiqcmt7mATAwdhVb7haGf3SGnuxnLequKDTUwoh5oG5puY1o7aoWQV5qhH34BzPV",
  "key32": "QWohxbWQ5ZhPyjRGd2wnNhs8hHxSJgrZC6wd7dTznbmBQZaT5qtUZTpDbY1ALKrxUvEDwyCapdWkcKZc1CH3e4i",
  "key33": "5qCJLdNCiPWFMuxSgfzeRErnUFi21dwNptW1TKeKASCVoyYAsBJHx75rvRcfoWfuc5bafuEBSrRETcqag9xuMb1P",
  "key34": "671wf9Y4fpEoKxLpyJuoYYdqmjuayTDyva7Ljf26qZ7c9DkkzUJMBgZgC6dmmEeLCCT2UW94vUmyB7tfZhcpiPVp",
  "key35": "2hemzJsRuVEcwCx6dJZGsCEWUnGS6VCZfoZ48QVUDQn1jckA3QAHKbGVxQsxkQAibsaRWbADQ3LDWzpnverCxwAY",
  "key36": "2HCd2L6CYozkMRZGCsWCTSKYCgktV4ZhhevDL5M4xd3S4c5FEK8dqtb79GDAtzBFBMHGrJutdo5A1PEJnQ9LTRc8",
  "key37": "XQvCFCyA9EmWnuNgdgT117cAVhnh5H8kL4U6nT5dE4AZtUNZ3yQ6sCSnKSUJXGJJfodiSJMVkKXJmdTBifQrRcq",
  "key38": "595zbBUr8hK3zweugfQcVgE8vuHiyWpaYqT1jCBQt4P8BdJKnxyqem6TKxu2vwaag83ZC8W7fsiXFwrFjRtH1BQr",
  "key39": "5pZcT8gbv7sNdBXe1iCFyGHDdb1z9JVrW62NEegYtzhYWKyMtk5wjsXY5DRcCUn3KSauW5ynBriuzBUdB6iRoSZn",
  "key40": "3u3pujEC1H1cf1RAycSEdzao5gwgN6Ks6fe3xBJHgPKNsGvSFKfS6PgPsFLyiHmY8kCxK4NDPBaVEhnS43tKPVeh",
  "key41": "63HdDbJsAqBREGtkbjEAm4e7jV1eNFrh1s5VudZG2PboU9VpEpvCHNrSHTFuKaoM8S7WUm5J7Tuahi9mU3rcVQaC",
  "key42": "2ZohcdExFcXNoxGfadortTNyhVoitWNfGoZqi1QBQmXR5q5LHLL1fo5hF7zkjMPUUb1PgkhSTrzCyZ6oQEwREX83",
  "key43": "3yqJoYqjaANF9r5CZYR79JiHMK8YyzSVu5aK5qt8WiBAjECcC7MUWSwugyuqvT1Q9TFXHGUfXpJaE4xD2Vx2sctm",
  "key44": "48FgGDs5ASdhRaGMuqAenibEJ65XCDhpXboyrzA4M1FYkUoWFTQjWfJq26thBqVF4TAtBduoeCe85hxzCz5wf6th",
  "key45": "338uhd5a98XQzWWdVTh9ajqn5j1ngKomtmNZ1z6xn9izP6CYM63vUAP52xuLHcHXMTz193MFXSnZsGzAhXSW5Wrf"
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
