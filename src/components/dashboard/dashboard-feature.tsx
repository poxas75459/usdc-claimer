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
    "58r8GT5g9ZLguyK118u92vRLPfXs6xQVqcfQ2Nj39NhvmwxWL4eHsJbLERt2BTqoVrHtvHPSXppFk7rxJUDuLVsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36cAzNq4HsMZoxoyQ2GivtDrMhU7gbwMKEsyEFpUtBeMYMqk4th1UEk4k8NriFds2Ny3nehe1JkBAcAFrq94DF6W",
  "key1": "4dsSVwizsx3mWA3wVxyRxvyQbFU7U8AUr3M1tRFjWqQQhWvyVbdeL299znRfAoRWXmPLCM83mjeFcfBKxYBSQDzC",
  "key2": "4cxmqMqr29pDVAu4uAtCkmexehaePnsQwXzMhKNCrqdsLV4xWPq6NkqjS8FeS4CvTDSPBbNYQ7qkFCHf8i8Af7Ht",
  "key3": "3HertVSMuzkWjr5xTML3piE9N1AxzrtfkjVowngDM9aDL6iGZDnxPY2DBuhreoGTBqwKLFk7c3dXcci9u1xkUix2",
  "key4": "3cJhZHU227sHQRZF6NUdwi87apn5tLuonTgLiZxXjsQYEvh74NtG2DkevJJDrCNbPCCTar73v3GWZZfvVZgUCzio",
  "key5": "3jh4PniKgHtXhCVcqG1LMVjwHKztHhBjWwPYYLqmXPdiLmyoKuVeAFYdm5vJNKyMCyhjyCRAXcT1CBFDJxqUm5LM",
  "key6": "2qvMcRHAj7S8mEjQijXRcut3ncPK2mBbHt7FYE83xkuD5VV9wEsMK3rnPemy38Qn3WiVtG3f5bnsPEhzqGvNuKvf",
  "key7": "4fCHBQhagFZY3VAJisfcZgiAsGfe9Si7p1ToLheeCxbFJwgHncZvyT1NaFEqaZgxrRLgA4Fm7DLkLEboRiEhKtQ9",
  "key8": "25iWbhJasUK7QVMFhenRSFFdPRKpLrh4DZNG8T12PAAbr2wTwjK9e7woWCZp8se6t5LW7KG8DEkqeERKTjh14C8k",
  "key9": "4sAhUh1WYeoBLGZtJG4gEqEvobjkzHpHVHcMnx5bF4ELzvj1yPj8dnc3Lh75LwMWryt5DbqeAn4ShgnrCntHjzqH",
  "key10": "2MGWGS1Mv836DTW1u1P2uL3D8ghBccr7kKDcch7G9U7G9LbhX1AccM9U4pHNP298QRyWpdizTzwCPL69JtyTT7Q8",
  "key11": "5zWzbZ1eTfAD1WFuHGsfP1aSe5BLutbqG5eUw7z6ZP7iotjy1an7VxAYT9GTNXbgeeeSNuuSCU4jw9ayEz9mL4u4",
  "key12": "65r9W5cf8P3Cy12TP3Z5x1VXa7SoVUQ4SjeJPjCEh9b5r3b6RwfiexKySVS7Sd4i1qMHtc5vDSTVusBGRPWUtSW7",
  "key13": "p6h8s1YeYeceh92EJecLiWQfXNVVXEHtLiTpKDK4GL4CfmepGndixMJrRba6PjgZstv7zzwGFqTyw3bbTgXDUGE",
  "key14": "52Q7bm9gHhdb8E2K4AnFYH6BNug9XSWPEPAe48xRmec2dUPdr98vPHkGFttC7CQ8ac4GXNSqVMnrGamMSoEbwdiW",
  "key15": "5TRGN7og23ozeSt9oYeyEmfSJii5CbKBikKonxWEK95j4VxWKM2WMuuLU7W1fvbuofe2QruWWaJDozWQP3LFEYPZ",
  "key16": "2HdyL5KNMD66oMWckcQ3xnmTyNf1um2aCPH8MKScuXJDyYGhRLQXn11e4Kgn3Dqkfhii3TgHKtaUnHoXUMpGfy4v",
  "key17": "3ybow2kZV6mr5onM7M6Gwi6r8Kp2baWRspBQCxabrFpQSronwn5KZN8iqMqRb7UUaRtQKy3ok9HyDVLKWbQ4Hjao",
  "key18": "33a14JTWq7JmXC9yePYdGWMCj666mteATRZEZAtavahjrhUbA7DWw38TZgKDGaaoVSUATHPiZ94kNio8cvciRCTH",
  "key19": "5sGYChvZbrvtHY1tkAMguG6G9JE6cmf3j7htzYkQKx3k5KcH1TN9pJi1QJb4wEKVvj8yn6vHha7rQ96ssffGTnuB",
  "key20": "2nQ3761bFz9sBLe4oBQiEZWc3wmG2YT4PegRX86rM8eZET9sg74zcuy71LcrYjY5NTCCzFTPyce4CMKzgjoqeiwT",
  "key21": "3fF3jpipmNJBZvwtHEGNwydkfVepckNcYnqqrVBRGho6FEPHagiqQVf51hUqaVqhDLmMmQugYHkgPbPkhA7Hj2NW",
  "key22": "onDHHwHiPCFWyQR7hnvcagKCRym6jTthwMVd7Gyo7EWSEWMyJPW227h6fN8Gb5AgAEoUAJZ43bhxJgkgAWw3hNH",
  "key23": "3QTszF83yVpvvbCsjiKWdJFsej8UKNZ9GYgYfwFGQPnU3cfPbjQVN2Zs71kSckcvq3Z2LM9YHud7o4zrWvG4z2XG",
  "key24": "48N5iS96V2bfHHavdMpmMVH3x7KUaHkAmKah11HbkandBdX6YBoaoSDgic4Jx6ntUgL8hKPMfNZyTgFUZA9v7qy9",
  "key25": "2u7LqNNWARt1yJhC4W1EaoubWGPD43ZMfjXGgGgtNkd9uoFaX2Vevg7zmKnNQaF4bKf5wK21jUHWUGxvnsBRMMDH",
  "key26": "5RK9NBEXvUsPC1w1W7ur9eV9gBVE5jgRGLUVwbQZ6rX1TusjaqMxGKNvz4XtYEtSWyFdSK9M1Pixd22sDAVSC9WB",
  "key27": "3Upkfa5G7dPWgzVL495vDJ37Gc48avt2dkEkt8u26yNKVikrdDxzMe7aRan1JMPCZmnDwBs2skc9ZJgHb83VCZo5",
  "key28": "Kzk5xuz7LibtHqF5fzxy54soiDH6Zkspoi34d4so2HfquRVjTAqfapWwpLsVJTxPoJjq4RPaDn1kEEiubQok52V",
  "key29": "4PXMGwrWqpCoWDPbkm9sLCsvY3tM75Gh2EYM7xdZG2oPJ2oggcipSKvGtvakHaZvZHrCR1sgRyEWA8dNSfi3hacc",
  "key30": "KJDY1XpAavNwznYfqyp9ecJr8UK5FSJgxQExmYAisr7akrj2K8KNgAGp82hdbCCaA9pyZjEduSsmKk6Tkb7Uy4U",
  "key31": "2hokBaCH3e767vmEv2seC4buGuUk9W9iNuz9EcJWQKrbU6PPeW8tLx7vdyRjdgLhgZCCkw1SLusTRUNmBePmo9Uw",
  "key32": "9bvRpTYjHHMJaZcRmdEzwEVbnw7cGRXbpFs9AZtGPm8XJ9Eer4uZzARhVKamuB5Ka1yy91M4yqZQ5EkJWBTfBsL",
  "key33": "4Sje5pCTTxZ4gfzMRxhBxd2jTv6hKUcYvQHuoneGi5aeMxvJAv1HwXFNwiSWoBdp8mABdjDBG7H6W3CigeFktXFB",
  "key34": "34NobFbe5Et1p1vpjtnqwubjMwkTRGPEswEVYsqqQoffuBiNfKwQxQm5ZaosFLBWtFFKGiNLmjDTEJrGqpxVHp6c",
  "key35": "4LwKunkhBrGWycttqeWZ4CdzybvusGPgbCqqG8srjaet9b1oWXk2oiQXzkSayhDk8LS74aX7LiLD9e8UNJwz48E",
  "key36": "5wVBKeuCti9m1ehXF4BMhKUeJwVCxg4rjeSddESSjiHbDPCB9EvFq5zuukE3P9iJ9JogwM2pq96tBbaeM5DH6s4m",
  "key37": "JdSU9d8hb3ZbQVAsMJF2SizDYZsQHUevzrvPJW5m6kw1QASrCm8tDd3xUzpWPAGuFoiXFudGTXiySYEjJgQ5Fjz",
  "key38": "5vqrkgqTXCCYsV99VzEg6UV2Qq5KbPy5rWqr4bVFp7cRM3UAz7LHX82y36G5yQLUcXy1duvQgirWS3mbjxzttV6n",
  "key39": "3bSV2efHsgzwMEEVFiriMWLQkydGMqSot2PFBR42otFb3wE5m73FKsSN313DBsXZUQbuhJDyNuzfEkouJwZCuPBE",
  "key40": "3MLQvQfykm8UYF1E44URPnJcW7UryFUhq9Y7NCxbeGNou2nm5FdoqCBnM5HhgVUPg3rBBMZJQpXdyrmcdqeWfAJ6",
  "key41": "2tq1kCXGsbaTkY2HLo7hUtgSakkWVtKpLqhutjC65bLx7usbd3MiY9G1Cm6uj3razbew9PoomSRQbbXpny5RjQhP",
  "key42": "2Tbtd9LSjxeiA7679nH6Xr3Tv95ReHVZA9HThsxC2CaQ3HTjoho3WdFFSMMz1z5borTtmuM4DvjB4eaGtnDVMjU",
  "key43": "4AwMHY21fL827Wdc5XQY3WHzaXaEJ6o3RVwE5gQiDmCdvDNDjDkTbiawXwjpuhy6WPvkUUJbe75DNyXR31LUApPD",
  "key44": "5s1pR4UjpApef44G9ksZLC2aDZT9hV7g4mke1F9bEGbC2m7XzoLFyFkgbBxmJ3czaBYXbqcXLFNEPFJWBNdPgDgG"
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
