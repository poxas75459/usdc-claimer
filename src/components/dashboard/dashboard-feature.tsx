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
    "61ek7Kwbno9uooo9Cqaotqb44bxZJYYBZwKmPKsetQJM2U61CH4LZ7QQAKxAkATMQA2hXdALwEejPottLAQcDcPP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sy4c9vYjPQHzcRgWrDn7sJ5bzp5iheTdJRTDy2zfc4TF4cKdVX68B7CGnF3L5dfHB3tFWy2MTfniNfaZTxR1414",
  "key1": "4Z8qzkTN8wKYi7uAwYFTKhToj3u5d2CSwytigdvyVAtK4Sn9tCjsKZCYJG9vrtQCv4fLCtZhExaUjVBXwbzVtQtR",
  "key2": "5DKbi7Q3RXAHXTh48EMhjwf7bJydRvgPSEpwj8YYjUGRT99XmyPktFTPjk5256TUo1mHMUv72UxLvibDNRi1FWuH",
  "key3": "1x9nxhAYitBpsa3VC8pUM7em5Lm9hExwMaQ5yGTECmbYKWszfrnHeykiH7RfhCTLnDBECZc8Yuokef6fjx3ads",
  "key4": "pahownkcCxs9DaH6jRZrpvzNeMuuN21MnKgKzFdeSQC687v3BtGjdgYh9wcAzgU76dgRhoPpZf5nDhoxY3WtqHf",
  "key5": "3eZz5PzXU21WQqZb2WTLNXawHVThYxg1jdc17mnzdskEeJfyNfEoDaF6YroWEEUjiHUTDJjQcZ9FXEU2fHLxdMBW",
  "key6": "5TGumXBBvWdcRmjNb1oi25BDthZF9W6Lhk6z9KpDQazz5CsZgMpQEPb8DLiD7U2f5JiuP69izuADeXiaEQidjK4N",
  "key7": "5WmmTAZLP3he2pjnrZr47JS7gK4hLgfSMViMzgFkMuGVuNq3z79PTRWwvR3XXGLrYjb4aRUfN6kfsFUVrqJSA5Bu",
  "key8": "4ZnWnvPSHX95Teum4zHgGHjQdkadRSbRjS91ezsxvAuHPR5QCYgKr7R2jJBqkja2yDHonEN95rFShzgjcsdxzsdq",
  "key9": "UBmDG4L9yqCUehsFVVKmxdgM6PfoHDxbggsKwbgNdvmLFeEqrrtTSyPDxyNJJwXPScR5mTcZQSKzu2Ls9SDhxVf",
  "key10": "4uaxuYY3BCVYqMiVNyj2rAj6PtQCGjQzhV6TgwXc31WVryG7NbKYSHxVpWBGkdN2G2RZ6mzAbTgfXEmTR7RtSN9",
  "key11": "2MS46HHPvMBU9tAGiB6PgYrPwgMCQ4Hb7DRtrhEWgoBKWgB4GG2zt7AoDKDHTJYn3aisbYTVGhtwp6bGLzGRGKX3",
  "key12": "5uyGCdG7wa4f8upSRKqyoAQBqt14XfLVhoMKfiycWWLRbz9DTMz1sfCWSmJ35uQU1q5D3Jzr18YdKNQ3LRBuQFAq",
  "key13": "2dhqwDqNG1ZHXJpBGV9N3dzkWUYQXcrmb8dxNqFFF1MTsuAMwgbUrSJ8UqVu2bphRyTrT48inJ7YxKRKxWAtW9Qf",
  "key14": "3WvqoyQKnTeZWYANdEo5Edp7Ht6mEBeBuifu88L3kixgHUBLYbsmbVbyQeF3PVQtrF76TTcCYEJm1h24hhJJbqzg",
  "key15": "5WuXorWed8oubiTMDrU3krECfzdXCpR8Q7gBDeMNZ6mHg23yB3E6DYD8muusCFfvYt3bkUyfaV1jAoMDDbk2BosB",
  "key16": "2JiTzXcZspgxvJwn6DyWedxkvDXCyspxqPe7FS5ymCauii2M4G4cBkhUsd7UfsgBHcDeAbKhQ35GqoVmW27wnD2y",
  "key17": "48ryChgB4pXg5uDZNtVoira5kbfeS8aet6dtuPQ6ccDWVuuky3PAb6Rg6yckfkDtEoFR9PhNfk8dnREAy8BQ7GZ8",
  "key18": "2rHR4h6enL7sC3JmSZ9NwmXVPeofoAncZXSqB2jodBobxSkV16HNuXHzZcbRbDrsgM9yQjUDjzooBoNWr1MSYBf9",
  "key19": "3eRhXoBvW79aV4KaqTRLTwdTazLS6x8q3ijnScrXRSi92gXmFpUTHq9ux4BZb2f4c5b3AaKUvZLGm4WrjCHT4RLU",
  "key20": "28U7mEXdQfBK5mo2SCkQFUSvbcCENNrTE3tCAqz4H4Hqi7wCyRm4BHvKtzzqGjJUVqBimL5SYbVPKu4WkkiSon5o",
  "key21": "H8bRrm3cLhxDiko7fzTcvTdRY2E2xEKAYqarEbbL95FCpCf7ynvsfJZC9pZ5kgswptJygLiGYaZaNBurcJ8AhLf",
  "key22": "MfEKSB5JhuiF5rXU9uKaFbUWBAExu6RM6nbzpRArfJtf4DWXXwLiqndhHEFENZBopgEghWPkpoYJSHdk7tdSWc7",
  "key23": "2ZdRyEtEfoFNRzj2A2Qqrx3oCKD4C1GyM1W9RvJJJ7qGBpJYhjKYcRtKqEgsJVsRyDyfatWWdfWGwwjTvi2X5Uwg",
  "key24": "4sSGs6YppfR61SnCgv4QucQReMSjAKhZ8kF8iSPeAsJKm74jx1pz1Pp6x1s9vmhKkR9ghdFFiZroa1rwgG86zZfx",
  "key25": "2bGpXy1vDM8f92gDZGmDutVMYZXiSUnWqX5QKKW1VeVqNG9xeFzHXr4qeb8TEKNNAkncvEhUtyzAs3RmHTj741BY"
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
