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
    "LrPtQRh9ckouGpFXrEtVgyg9Lt6uK8Zf1GnuMKiFwViadkg4rh8ZVM7nys3yr9w4yRyGoveWmzJ3QXuxCWbdqT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WnPbmG2G1ubV2XWKCCuanS8TYRhjQ8hXtZ1yV3pUWw4tdCGiyXW96G8XviGdpsB2WXAnAvFsFxZELPgo4q1MCck",
  "key1": "2hivQwYfDdwbDru6XiQMwY1wanCpeJ1twtL2vkrHc5eMoQfbnjCBocCYHoqFUe4v1j2Xz3k1KiTsejQtuq2TG9X5",
  "key2": "4FYwxkrkGBbumYAxKvTeP7evbwhjP5kw69BYHDXRr99eP5Y3wkJFtD3tS1BH3LPdY6GETo7biMcvtW15sptUAvFT",
  "key3": "5ww12vTm2rV5XBJxnbkbEGRf1Zg5CJf2u84Eb9CMmPWMYAhqRFKD4FFQ1JehXs8mFZDu1JkJwErcqSUeza45zJ65",
  "key4": "5hZmd878opNgrTzTjJ1DB2aonCZ9JPedyj71RoQvU3QT9aVKKQmxDHxbKoD6RhEd5xt53ZT6kjwKctQTbyngwptj",
  "key5": "vmc1BS42RikUTAqkSKKoqWCNUNwc6A3GYv7sLxtDt17x4hbMp7KsGtm7BvCxUJZ5dsWdUNVnUmyhcneyDtURSi6",
  "key6": "5t1D1MGgaFsjRxpteAgr6BcoLXwQk1HCYaKkKERmTHjT9c3r4djXZbCBGxfxt39fvejomsufA69jFuKX5gaRrXKa",
  "key7": "4dV56DfgM6624rFDfpeAN1eie8DeUZBch48gsazp4DFYk7cjgq9QCfKD6xZ6xicZ7ysNVCk6t4jFMgeuQ3ht4oA9",
  "key8": "2cHnSCnZKnAfTJ5N3mR1SfibLC1SLaH9w1aHCWqARFj3K3SFGpic9SkwzatxV9isSuxhBBsMAG4ZNPxPs4Ca4TaY",
  "key9": "5sHERWvLDsbpbJfbfVXe4s2tPk8qJbqc8zJGbrNm8pufEsbRU7Bq64Jdz6d5TDbjFy6gqgknSnvkLf6i4n2XbaZJ",
  "key10": "4bq7DX6ffov4TnrAK7HAV7ktCNgxEgqqyGCwzFyq39ZDNsbrfjgnCMu5qKzCW6ZxBkXx16nRGRUAELVBgfnUtMvj",
  "key11": "4AQ3bR7B5FkqQFj5Xjer5Uyysah2243AuvWipSZCnKKgzwxdNpwTFYQHkrEdJNYs22qfiL2M8dwpJYStK5eTcUba",
  "key12": "453m53QsbYhkDgTtQCByQxwBjhSFte31QSHSzr7cr4LuF9o6q4xF78bR6uapU4Tv7xMAgohpWDMfp41Kt8P7krkw",
  "key13": "3a1tWXhmuqTM1wt7S24MoATtGXdkmyaAYuZsjPSCAGN7BhSiW2WztNucccRNBJhNBJrAhc9FjvW6WNwHr5M8GXmw",
  "key14": "5TfKnjUKk2dWXxPfKwC25kmKkW5eb946WZ6QVyi8Xo8i73AuVJ3D1fonMPSyfZq4Gm6Po1j4DFkKvYGAeRRFiiku",
  "key15": "668Ugifn23xMHnz2d9XeuhLF8vXeqk4odfiRmRmLdaYTp6n4vaCEjqVzapppoTBqDYqBR614ypGHGuMSzNUkBSSF",
  "key16": "61HcCEufCaaf3qbTBJzgUpAJtAyKGKHEMEor5iisjjTFXyNpFudraAU6wXQomMv68XGn51mqKdi1dfRrHDrXhCDd",
  "key17": "4LBveUGeGbe2dZ3xgsLkVHxdRyCqg9EkKaZ3kkDxdko2zy1UEYZN5LBcJqwrzsVyZJ8BFnJJnGfi9pUPuKzwPfXX",
  "key18": "CMAxBhprR3cVC2PNcjE8iQAxBMbc4ecvz7CW81o8SfdzhgTamykqXecGEzNi83RaL4whabzkeVfi6peydSjuNsD",
  "key19": "4HHbeykRtQEB3bpuXh5opF9eyn4KsSwtNRbVm6rZsqiwsUskF4VUGDkueasLNbkMGV6wPXpyb8oSNJpgY6ozFP47",
  "key20": "3fX2WR6ZWRiEtYNfpvqXCS5GDsLWXHKvdTcSUZCReMdE6Hgjskbf5moabXN2r7kc6SLpZsQzpjYvsUXrW7gdzXQh",
  "key21": "zEqFhnG6mWhrFsXnQioAswT6EAhrUgkwkWigJshHBD4WzZtzekCrYRHvbRBoqfYZ94bXPVJ6Zd4bETjvh4Jp1X1",
  "key22": "5qqLNS56Hy7sM9v66aFqhJAePw1e3peACmbXYhiPnbnJuZGFzJSxjEU8VR9DtSRmt7Hrk3zKQN2emz1TY4RqYZaU",
  "key23": "4pYWpoFh8rM2BvPYGUz52EQZngaDXuBpSvwCsxw7sBCYfYpnnoCPBDRDGM8xCcSnXu2s4fKxA6HCwk3mNZSxJSZe",
  "key24": "38eUa2LHnXGV7jd6Gtb5KpKtF9LZ7QeZzDEfxgacWUKbH9aZCgkRYCfi4CGkUgLd9aDXNDCaRd9VykS38TB3STZ5",
  "key25": "4wtV3KvdwMVnqfctH1tuSNYA47h1dD3UCxnvc8RjRYf4gQBx25LDiqQqxsMPMjtLG5e9bUaRE2YfnTfsS98hsAmV",
  "key26": "54NH2pRr45qfcqrpM5tBgD3XpsYJDdczwZQvtpswVQ1XqHUAik6kcCGQFrgnUpWnKux37gzLRM9NSDhRN1CKVcKs",
  "key27": "5A4n3X8fydkLcLMsL9m1eCLhLc5qYXSFzbwQSZ5r5aZ2ReTQZZswwTz6jd3hjTWJwArmP9FU6bYBq8a2ndcN2ArW",
  "key28": "54ysZEdwDRqoQYBnmTGvDBH9NpxFxpCJzqn6NXNfGST59yJtT5B6z7JeggLUW2LwywVBqg8CDe1WGhpTPD6Dv8fj",
  "key29": "3MMqBnokLShwivvynJZq3FH3Rfdx5XrdZ6qWnnAaEGGGyaCh99rjHTxz5jrPfzmobSCEf7j34cuy3kZzZ7Nz3Eef",
  "key30": "5QzD5HGe5mfphrFj8kfF42ScyhiqKFZPgQE9uhfEyN3LiV81BMSJPkbi3wmDbmHfeytdRKwmmqXd1j8YGufsamqR",
  "key31": "2CBr4DALPSXXTmURGKyFXRQB59syXVdpMzEvs7E6gWhZz5hRTv6dMV2G95qXJsfMxxQoe2xDdD54Q4rkgLFrC11x",
  "key32": "61zkkiis2998V2S1tBLotiBXNqJBJf5DRha1wnn2UCNdMaHx81Zh9gY4QDobnFE8vpALJLw8JHSbFxtAE7tzbQcX"
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
