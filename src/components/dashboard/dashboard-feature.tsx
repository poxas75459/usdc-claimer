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
    "4REYTRYFGrwUM1EonuKUiMUCFAemJFH26gPqfnhYRUg5MPg1Q2DSoHfBqP67PvMJ7L8Vr8h1XxzMg92RBp8244qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PVjXw4D6rEYXcqwsYxWRBJ8SvgnrcyZsoxcozV8ZmeWXwzGAMFpZiJwdMHqzLC87cNfJL5kP72HfQpC8xzrtFpU",
  "key1": "28he1s73Ys4Caries6Bcb2djsLu4Z3BKK3ysZxEWXPPBL9Sc9cEY1eZtMnNYHAKp18SaeLTyz2pbFwLxGW2yGg1v",
  "key2": "62R61PnZVDynB5GPwkou5VsrDVktMt6hDMzS3rQ4juXzGGV1YoYpUh3B8XqmoBnJzUokQcqW5RYD2z2gQFHBH9pp",
  "key3": "2esE9ivaBtU3YYqCea4HyNfs4fXndUdJZYYyMJLcCpsV1pG75ZYdRUycsx3xtM1u87DkQd9n1AJUAS6jL1tqiB3i",
  "key4": "39MLUmQ7sP31xr4eD5gShQrJnQX1YJ462QuF31wnMuRpxCCVxGagam4HmGfgmVc5Xn13W2afsEkefUpWkZ782VsZ",
  "key5": "3MEQHJxT7BLatQuAv4FtyM9jitTvdxaSfLNR3K9RnRz9hHE8pd7H8fZUM8BccxBUTgdM3fWMUSyk5GgPaVzRxPNf",
  "key6": "2tZCr3TRAavi7B32nRAN5MF3EEmo1JhZbEYQ1vPGLHF3KtrigmWEWJafwsqFQdKZx9DADQPDbicg3fnnJ7WpYDA5",
  "key7": "BxwXLeY4tignnkQDfp1ZFtncnyKh9bSw3VabRYJZvrEbZVnhPKhR79ebvayy7K19mqwLVDFZaMy733Ta4rEic7Q",
  "key8": "3rUYTradutxQXKYTPdZRkK8bCsz9K65d2c1SfMNxUCrMfoBkrnnQKC3XeR88Ts3kiuLEbGi7fdGrFeGXQHv76Dw3",
  "key9": "3YNbgG9oAGjNiHyDuUpg15XKWn5nDn6wAjhMbXMtdeBAAaCMFgFtFNzt6YYVWpKYrhpnkqE8WZqmG5h6Wg2v5yrD",
  "key10": "5BvYYB4vSFGWfFJtcdihZbGsoZSMcfpr3LfTaBCTi8XfdmkLwAn1CDiR6mFmeaQKEB9YaTSJyMbUwyzbuzjKtVHm",
  "key11": "VGsHgiauKdcVaqyxs4wbqy1kgRJj9JqHu2t8FXSAURkByUi4tx6Z6yhhfpCLYqQxNVPSLZ7ddHJepfkDbtWJoiq",
  "key12": "4uXBtKAkAk8MEZ1n7REtghEeKftyLzK42K6Lv3me3SacKiHgsySXDaGgZxpGaM9adaEMJrYoZS8vpF8fhBwUtxSG",
  "key13": "2y63xKRZ9B4bPcgBhJRAPbEkcaqctaJRK9DxhPyaMSkj13KFTB8KC9qJdAVgh7Hk1bLsDiGYnefNjVnXMXDX3ymf",
  "key14": "4dNBAPYQWugNedXp9SQJiB18bSWnRyNTakvkAWoa1UaMC7iwWvxDDLrtPfNQTwEjFg3rfYT9oqqo7yNrHx9Vxah7",
  "key15": "2ExAYELgjnVSaJPeiYHhF5avnXE8qzFUwgeswYv9JvZPw6e5GgCcKn2ZFzjmuRa8asU9nWQeoCufUUTHYYDw8oXs",
  "key16": "2z8ZP5wS1z2JQzDQX2zhP4HgxPkGudWdDp7CToFY5ak7z2pcRxDquG49fkcRnAPkDn4Y21VqxvnDUNe9vMiYgZEV",
  "key17": "3ib7t7rgtMzSgBWtsGcMJCVtHHtePWfp1HmBy8Q45uLcLrryL2XjcH8CgmyneeUv97FucihYUgcYNMNTqBYro2nz",
  "key18": "5nsETCHET7SmQJCBSCgrYFFcrqg4oewVuvrw6KTXUg2sasZeh2wyKL4orszDsxRBnYhSddmcUo9NyCXfWYSyugm9",
  "key19": "5dYVEXL41s1Ui49pyfjDDrdTa3UYcdr84AkACCgqiX3E8SNZdHGAhuJRX2uWbChZAp2p9BoKF9vBeRxT96QMfZho",
  "key20": "2uHKVZe2bweDj81SZWpns13kucSk75jY4kUt5eW8TfbfNQGoVt69yNdxukVLjdZXhkWkU8HarkkZGH5hhdKptmwy",
  "key21": "3kegdTMWFp7J1jhryZDt9Ch6DSQBjEnAHGz3nNWjoRbNfGRxsNYg41bpbBuSBKe4dj6TXxBdeq36Hb5W4Qeqa5KC",
  "key22": "cW4Ekqxp1nJt7SdrSXtbUmhLpBXaBWBjL8N5BxP58WG8e7CUfCN4mSEauaAAdDZRb1rquNPqmoKCZW279eya8mz",
  "key23": "5MGpNDwibE5e3TTgVWK42GiJnPFP8YxjSeuNxHDvDxVFpGJWGxCKBiAfssRQkX2VdtZb3uPc6aCVw5KV8wnzJS8Q",
  "key24": "depiAYz51zjqJjQDHDaGRWLkfgGjKJZFWqkJcNPtZiMCEBvafpQhDPg4yMY3pjfMpEWctXXVW2TupMbhn28hQ8x",
  "key25": "4XJmSRzDmz2c1gojLHCLUv4Wo6k5QZZGJLpeuJy7DgRwnkQ1f9YwUC7Uv4cpsnHjuW3i4iqVbCSDyZ5JX4cwojyY",
  "key26": "5d7giq8RPB6xNTXrydpKgQpbgoKBq9xazCxoYKek7YS28xwMR6t7mQxCzqxVFL17D7arqcat1ioCxNJWzrw5RvBX",
  "key27": "2dGHGtRocaCxJXMVPu13iFFyxbjXKTHsmsNHJRfs4Mv1C7fVpjfEd4EemxkxG7tm5EYuXwsNDYdvfujGyxSoWQcd",
  "key28": "66wcg6stJhJ2zoy3hkUQLN6DZLata1EmrYN3S31HwVW8ZoAperUFxkq9JxqxSxx19C846BArUkdYvRJ1XXUP1mCR",
  "key29": "5uwmLJMAsBfSunnX6YCyuGprvYKrJFoco1jJqVCcdQvZguixwV5Cjz4E9a9Nxct57i9rjHdyre6xQ1uzsyewSr1t",
  "key30": "5Bia6Xw5vk9KhoFU5AprY3mZwjS9eHtPUJyMKWXGPxWVBN4aq6jsnM81LP8sSdPwGMSbSKXhRf3hEuo8VJCbD1EU",
  "key31": "2KURDDPrjqGf8HRKN441ZaakeV4AiA4ebADY11fDSARwGXrKpkQHMNsyr7jqSoYEkasq2oKZ7t4JhSJnsfrLYKun",
  "key32": "2Xr81DXK441NYVHwYqJtP9i51AuoQ5wKoyPPxzayCZd6WWX9u9vhZbkYMvzL2BzhTH5i3K6Q77pJP8DXczDYGr4N",
  "key33": "4vzcquPWuiejbEqhEp2YLtY9ug26NjhnCD2GoonvdMcw6Zo6RMH76nCtiXzyR28nwRDpjCk2kJGGPFTzuYZQwCDF",
  "key34": "24UrG1h5bi2TXQ4GPHej7AyGbnKTnR2jLZXAtHicYBgtJShoRunmoWr53o1EsMEY8mV1EgHcz7AwgQvdRmYEempX",
  "key35": "28cmSWkhGTH2dsDCtijVrUDgk1777oF4nbeJ1CqrYYUMdzz2uWXVqPdffBxda7YSwDTGYRj2zsAP1nqKwpgGmgMH",
  "key36": "3fhQZkYruvokWuxJB572CZbKpcxprwqBdtrKFndpoQyGMYm39bwEhWo695LK4ng25SU5e6A3t6kj8SH11argqCm1",
  "key37": "SxBAiWiKAVG665k3hCToQWvRPTPVk9dKkyvL1En3XMLgWZcpTzwCscfS31tb6y17RPw4XoRYNE3egxgxyyfuBWt",
  "key38": "3aohRhaJz3anf5oGMFnftfXC6MZScUBd6WxuKrCtdVzuXzNeXs8P7vmuUZVEmgBiSdukDSKM77oEWnwMAWQK9V1k",
  "key39": "54noaQnwje7GfkdJhRCvBq44mUYdVvizUVtgY1KZHny3xTgfpoUsSjYxPT6KuWyArW8YPm24W18DbheqA2dTLLxS",
  "key40": "5jQLPznyzSLQWYn5CLuB55MqNdkvr5Q7gCdWSy8qzM3VnEKmuK83MNPsPTQyKEUjcBXNBqh4oWmTUsPNGQPK79Qj",
  "key41": "B6znU6MbbP5ZDsB6SyNz9DHxQUDxnydLJiJA2cGoCj6vaw9GnfvdsKsA48ViZt7RQGHu4ZEeQjZZ6NHY6icER9n",
  "key42": "43jQEtP4D8rfbSNjUmbUA1gC6pXrdUjaohmBkHkqQQXswPB4GqXbPa2L8wX8dcyjN8EK3a8cnPZJhnFcwBZE6dfe",
  "key43": "39BjyqNTfwDPPYovRB4DYcMnY2faTPKabyMY1z5X1avUy3r8ncQ9XVx3yUXvM2aU9se2NEPgwKUeEEvMwcAmTfkn",
  "key44": "36cMYSaVqqnPFNEgG6HoztLWciC15GjQw95vtq6NJZByrtEAmBfTfS78eu3EbzGzCBKddrxPirWkDm7ctWMHjiGz",
  "key45": "23MSubJqJUfgCDg4cze9zH79PxAuaa1cfqRpeKkrw2Z3JiZmSL1pKyGRnFLPoqPnyd59K751GB3E98p9bSve3NLP",
  "key46": "34MuCwEfoPdjRGHqVHHV6UnecVUutE9mn1kHKCeNGJZzpMkNDjhdzwP2H8tMezLiRdWoBeU3qbWdRRkfdEyPfr8H",
  "key47": "4JjsJXbrJ2Hnep4fVhgKNHgWJb5LqUcQh3wsNRcfw25WWFo61XyxaTggYcmN8n9gKzL4pewScW9r1Exxjw29k46o",
  "key48": "2j8dtQ29VmVireVwBGQiEpMUqCctCEkWSgxCqLmcoXMSmuebr3QcZPCVHCSafbshzo63ncGgS6Ra6YrFpntpSaco"
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
