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
    "29BCsbwUX7QdnPVnuz66LXoTaQvSATq77BgCnJLFrM2SDMYoVfnDKwSF7svZSHGr3KUGtG5tyBwZKpg2umuL7f3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbTqB2ERCcC11U1c96BQohFPUBFJnjn1XUpgZKMArZwkjiaEAJ42bKwrCEb3A67YUzSAKXtA9b5yYb1Dezg7oAG",
  "key1": "5E4R2VRdG764Nm2Srnnh61wEZe2KxgCYYiGE9BeX7B8qReGdBTff2v5WdwsBpq6StC1CB6rMRQUTX1RN8xxbqg26",
  "key2": "4ZEhgvknySMBK6jw5FemjwU2TUx3PLcnUabVV9VfpyxeTTQJxt65ZYFSgRPpLFrNDxoXo1PBPKBpeQVpGHnUGHAs",
  "key3": "2MUMR6n2SZyh7dzaGBejE2FjRcXkt4BFuoee5hVRYdp4JFpypF8jFbJQ71577GNn8H2242QqcwKDtzHVYry8vyZM",
  "key4": "36MDGSLrv5v97ECj8RmEKrfHr72mMn3gXdf2kXpjBnodvmmh9kiVhQdU5QPqtDx3gzCqa35umvqETfuPUXYreJ1G",
  "key5": "3F9tXLtz19T1NNhjZXx3yZYrzpDyT8ykoLtB6oVh77wkRTtEf4ETnTjqxpdSJPTht2YtewZr7tJ6pzgpZf9Z3Tv3",
  "key6": "3T5AZJLiM9J1Mpve9MAbZ9DQMUnABBk9nxZrpoznYuVCfGStvF4dE2PqggvgGFfgAidZL6cShJKQN1MN8AuNj6Le",
  "key7": "5xDN2DzRBbRe8SiGKtYZFYd9yzs5uHZjKmTjDRQf6KCjbBnmWSiW26sYgPazQmhwCL5c2vRkA5RqL77DeqkL7Nq5",
  "key8": "2Hax14nAbDw3JzPwzQw2518bbEa6nipGjZC3K6VyqkF1nEmREt3A3xNAXLp7FvqyLCbQ2kVVxjyGb23oCu8ycdNv",
  "key9": "34Vb4b8LDyMf4xyveedyFW45MJEvc83Xxh2n6MuTvXdSygV9X5ZmUXPGN4eV5ZQDNmuA9L1bGeaDyVVHTBNvf74W",
  "key10": "4xeAivFgvuSUoJ9iDjQ7dKrYk8SuqpkeFYhH8ZYgNHTgFboNNqjrzxzwiYpiqc36e9ns4zvni8JwNVTWQ9yHQaEK",
  "key11": "4FZVZbfsKFxN1PwdXdruXmnmFzhmPDxSi8oicftddp2FLj5MQwHQ7pP8f9j5WoR941kCDuM9HeXP2rFhVfhsAYMd",
  "key12": "5QWsxtTftVM4EngAAt1UVYe4p7NXzHwtFF4sMGkB5ktc8GHtBc2DgBtiYRfKnrAb2udoj9S9mY92S48G3e5oiSoi",
  "key13": "4pMU3WfznAJXDHRHsuDnNmT123egGvBuVK5jmfwmF5ZcJ4QsfGDgQP6o3uEHpGxGQdcLNpH39WxdFyXkw9fvotmY",
  "key14": "5jJvmYQnLk2x7Q3yBnvaPTygQejG8T8nsnTE1X1Dr93uhetefQeWCVxFWn45gx2YcRbFVjCWXKDvETJiif5qrrDb",
  "key15": "4Y9pkkdcF5P1aoxRFjWDpgmpnSgEhCe8GATyhPsAev6oHvET5yfseCnFJXQbBvYRLo9q1sAsdZ1cUAGREcE3kXEc",
  "key16": "2JgdZpttR1J98gw7whpnmdd9Bm9gZnoWnvEwnfe2zaRsKAdbQ6CehoVZicg834nPG1AYyBJpmdGmZFFNVVkrdtDK",
  "key17": "5asUpz8u4Jphg5tPa2gw8km75UB6iT9jbVy3JmAjs7Qy1TVQv1Vk8cYn45m3KPCNJcPnb7Af4Kx8SHZ8wqAAP9g1",
  "key18": "2HeKDhk6aR3obj9FHEeYwFemBzFFGKZmcC4kJu4hoDDejWUfdrKoWyuvnxeu9rMffaxVegK6SsevNGWbCwTRzM4K",
  "key19": "4zARgxN4QuUYWxqStbKf7f81Bdxmohj13yTpHNwK2Rx2r1hvKw2BnriR1Hm3YZ12hzVz1q1F69HCMmxDyKwjnjSp",
  "key20": "4ijXrs6yftXr98wcj83vFsAJXX6dsc4p83jeUt7hLx1ECaPgH8ixrKNedyDJWH8uWpDQ3TAY95gQmLeLrgDmag4s",
  "key21": "9XezwmuiorfFTVfdoP6roeuREH11Fz8R8ssapNWPfQxx6L1md3hNtpR8BkXdPBjyP1bnq9bkbqUrBgtutM3CZXT",
  "key22": "4M1VYadWBsj5SCur8QKehDM8DUX2JuQtzFNanLuT8L9HCZcB4Th8cG9cwWHgdmLmoh4DYaqf847wzBtMA8iTAFx8",
  "key23": "eRz2ew5TvxqVcTm9oNt1uKgJDHiHqPy9XT7UgD53LwybA7todA7zyu3EMThwPUWgvTNyvSpdAFPXDshbM7bkRoX",
  "key24": "3YWfxdR4BjWd7KYuiFkKDEjxhhafWzvssACBkymffJbQZbSThrfjfNvxyeywdwzupSGDDCHEvmB6rJknLmSbkBNm",
  "key25": "2ief8fKepW89He1AbNq5cJAHwVa5PhGM8YS8rhfrNJkAQQpLeeJKjeU5aCKWhqkyb2naYjMPLpmpHuCzgxgGd79t",
  "key26": "2BJP2dQ5aHWBp1a1RSkDjq9ukvay5oWs2ntFrfY9E1f8XQcPbvnecmGsZgVivEfQnSfL6pV1MfK8TGTeXp8TeaWT",
  "key27": "4W4akE7Tv1LXCBrNK8xTtBPzFP5ktsHy9fsoJ5zGoWP4sMrmqu8uTktquHca84miKLmcCjTRxwMhamZsX8b93EiA",
  "key28": "1YkkgE7j8v2Y24uTizP98Yit1WAdq2QLkqsENmXgACdW2fnyAniauq8ciTXD9cPvJKfEa1u1Xh7tyaBvDbYyG73",
  "key29": "RpDiUxiJcA3aYY3YNgbkZcrrHBt7TTX96smipq7HtnVhr7PhiH5K9y1Y2FE4S5PAsAsVt4rJia18NgdsMSdPqns",
  "key30": "4i1YeY6P9bk4NVixwZuXoBL9GDNQ3xHG7hNbrEZ1evoVegpJWPcWEWjwarA3jYHJ1aeHKHQriuiW5FnQwt74ys32",
  "key31": "5YcjizFtLuP759hUgtJzEqiXeXGeqe6Vn3yoDexxWjXgPxfVvy6myVpgVRbcuiUDiRjv5ei1HAvWCwDvd4z8PTax",
  "key32": "LW41LjQsWfkwyNhhUBU3y8vbjAL1VMZ54uZUjYbDbAsof8RPjTbKEzVVHCihznH1cSxE6YNg4vLwDcLBJAQb6oU",
  "key33": "3i9mDDQCs6XakdVE7JDNPgJRza5LRSrqG72Luokam4jj73CUiVdFdWhSSS3akvWQHLox1ohmpGNqcZw3EpXzwvYk",
  "key34": "2zrkq6wPYEzY9zDUsztVGfvgSZFbYBaDFD1nfzgvmwqPweC5vXpMom5SL1ZR4fVT67p64xdACyZiW7Kh7Si1yy3L",
  "key35": "j9son5rG9WgEnUu3te66aDfHE5Njs5nvNqsRg4oYKjoQxyGZ3cxqVcM6gdHSvFoGTawXMYoPCjXuUwwitXXWb62"
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
