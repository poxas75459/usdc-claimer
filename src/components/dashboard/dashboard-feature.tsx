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
    "3CfxhXmQerykcStwFLB6Kqbcybu5cpP6TEFfkc4f2q9Z5N7DviETxbWQ1U9M1B3zrwqCKxBUcPScrEPC19X1c2Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37zjRVtS3Gk1L42Y8ZR1rekixxjPtSz19UhoEZ8L8ETiPu5uqW6aaaT9UwQ5eriup9vy6YhFsmtiK8LBdGViS6Ss",
  "key1": "5JtczeAP8AH9yvLTse8g77GvSnWGftJg9iB3dTnLcbZXBrPc1gBVitEFcGv9f6d5FNQekEDTpwsHXUqRWDccWEJB",
  "key2": "31fCDWoVwBSpdVmN4Brcz1SGHghqNfvA7bUD95iZoVaqNhKgXpmPCMxSkBJWVM672DuAHBHcLsgkCZitrLCzpnyZ",
  "key3": "r5MmJjcA93Gwpnrje4nzuVoybLjF1G93YE35d5SLS7cHout7MCZTiANzNywqD7tYuH88DpRpYYYYX27bmPYH5wh",
  "key4": "4WvfLKmmHMz1vUjT8QZAYJaQxiTfX61wsnDGruZ4bthnsSKiUQCESRBCCCE3NUAu4SJS6XYPqwWhusNstzn7zH3v",
  "key5": "2veFKVQJb3VgUAcSsKX1MJaqxd3sZE55uTnqW3DHARH5pnvXHi2i5zVXwvx3sMfHE99hR1nULpPL6FhcLiGQzoJ3",
  "key6": "22xQu4HVD28cwofPKhH5vf2ZuSLryHRECT58x5beeFxKYf24QMGKCPCwH1kufj9q8w5kb2JgXCQt4Zx9CUk5HeMJ",
  "key7": "31mRMN3ycrAmDudfgcRuCWUJJhFLTWBruxDzBhYptQjXuFK1ZJQv2vwRiwCL7mnLZqLvfVr5qYh6Rysz8cDGytjk",
  "key8": "3Shdki2AV8xT3GP1g1H6KXrLp7PnSrjMidoWfBitsYf1LzmjdGndHwWPHNfmMD4XEjspBxUcx4fMDqgBRA52pJqD",
  "key9": "vENU28b2q7jPvBkQW8F66QWXKxZswUzPVcMdVbmfavXwAmmsR1YCdSP36RoMSuZh3Q1L9uD5XrijLfaGQorMjsa",
  "key10": "4Bg2x6gHRgrYdyayZzEfgKCgXrhG21GzTbR5HuNGJv9Rwpru2rU3usa1mcKH8rWk6PmXt7UKnZ4khdmGFFeU64xG",
  "key11": "5s1gnJzZnX9mKcKfqaBJB9YLyXtwzxPc3R1Qv9NBB9k52qNdFd9ZtpjNDKDMbh2RjH9DquQE6egTUynP4uoawvZj",
  "key12": "3ZBzmmjVcuH8ent45EMxf21WazA2xynCg8uVh9XMnt1b5hq1CZCbK71oYmY7rxJhZtStogY2GX6ui1J855VmPKMW",
  "key13": "Zkp8yUH2fWnoizmpm78Tfg5fn9mYqrcGQJLTiRjgFuVuwM9Nh92Gm6eoVyUYj637YDxqtz9fbuusA5rvQteTUbL",
  "key14": "Vmvxzs5iQhiRSsKv4eZVVGg3U6V3fQ5d2tYcSGrJbNNXm6TnbR1maWf5aHKSxubjT3s3bgH4tRT5LHAfQVK4EZL",
  "key15": "24U6xCLdiNc1NiwuxdNz4hkUvpZs8orMXfmrLu8YqfQdyLQ4pNVp4qJh6vGtD6c5D8pHeSj331F9QJFobmBiMwvE",
  "key16": "5oPiDXZ3psLnHcNnKce3eyZi9Bwex4cbx4uTzWm11YjeunMZztTGFHeBwjjqqTfu9gcJUGCS74UufzCPVMpyL3tz",
  "key17": "LSRaSxMfPLSdmb181F7iBcWV5RrmNzc5ddstBuxsTchVTnRLfq66pEhbt38EoNzv7AKsUvhpmgPn3L9RCHVkafn",
  "key18": "65if57hoRGWo8mwyHmi87V21VaypoFzvW4z7gsRQMEk7ueT9SLwDWhxMV16cCowoRzpAdjpr7fEU1MB9jHVFSXNP",
  "key19": "3cqD2rTzA6EYhbY7qv1YhfNvh3kdXEpByvrbfMK1HmoaK6MfiXcWvkkuCcCDySGbCktrvrEZA6A5Qhz3tpa8Lhe9",
  "key20": "2qD1fAPVdJFJrQ2jHJs7csDQ3mfTfeZSHu3AUCso1n1gp3EVMEppMFMVsx6muWNz8CXWu8xas21zr389yPB36z2i",
  "key21": "2qH7nkdE5e4z2DQ63RZ6XxNqjSMdgujSH1ZUR79tyfDppzGbfm5BVKCDSEdQKsupXpbupzHuTniDn72931tnrJD",
  "key22": "2HYTCcZKxz7nVoNDquxson63rzKbKHN8vweRduZbiKKiUpSATJjgMJhDp2zHjCkFqZ6P1U6VBo4q4VThRXHJ64tK",
  "key23": "5ULBXNY8KzTaA8MY5f96GEU6F4gA1hKcEinrrdQwmTjamkDxXEy6PhR3B2FAk736L11jukCjfR2MvwhWon6THugE",
  "key24": "6n8oobx9pj6ZcPang4v5VpJ1PczjM5dxM6Wc44agXoeq7ff5DKgvd7GV8iuU1VNGqk41ZRktskxMC9AJu8UbzWf",
  "key25": "fwo47wZs2VFcMXqxATM1UhGNebtf1MoRwQZ9JGyaMFjbwpgyYe5mZWyK2S586Cevz57fCW7boxSwRsSRJKThZzE",
  "key26": "3UyPHJoZ6GejJQBDpKpQmq4UVaJgPXZEricPykKVVrxUmug3mHjDsyRbeZkGjkTXuTYo4eaSw1cF9xoyarHk7TNL",
  "key27": "YYk2pwHXoBMMY4kUcCbjvRNqzBmLcJjCJpU9zdm8s4NFJELCDha2AdpRfz3p5oLKwwwfDr7AtmqzUoBkXRgf8nM"
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
