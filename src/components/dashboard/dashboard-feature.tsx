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
    "5fkQRDDeSBBRV1AUqAEGH65PCwowe1Xrno8vsokAJ4hdLi3TDPx1m2f5F1ipeYGUGCBSNLCaSVTq5Jf6NGQwcUDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QeMmTQ3mipTAroeUVGvnYoecfzouxi7rJkjjF6Lv6uoH5xpohTnctgbs6H4TzpjZX49SjL4kanQfTB5rAM42aM",
  "key1": "5jwEu4nBjwtvhgQGzsueBdLWK8XDnZnJEEajhTbEH4HTVLaqLB5uuPnXrWRg5vBzrkHLxCxMMeDedgzWeC9qyvHq",
  "key2": "4aeUVyQXxLWohN4yteLfRtgH7LXvobxyumv54kK8KAAxv338fzTfJ9dq82wHoGidnTQs8A3iWzS9ZBnoxFhujAb7",
  "key3": "3GPHSe63Wjqeem1AFJiZ2KpKCh9Me9MnwzsYVz1LKQK32jM3XzoRZxi5M7iwgptBSf5gDKfQeFdxAavU6PWq7V3v",
  "key4": "2ReZQWkwzQaEJ12wKSkX8ck3dngzcTxqbdgmHkk4ScEe5Gf9VDMLqejYMGybjfAgSXoZs2hZD6MA6xpVQCk65ftZ",
  "key5": "hNpgbqLp1axQTDsyJHDJaCBbZGt3C9RTz2KiE5mPnDiv23MGXNkYTRHnFKsrKCfJpfyiy15J1xYdvnXERVrNQbA",
  "key6": "3foGYxAJHezdjwSttwRnNFXDzKzuRGhHJxgjmnjVG5trR2jLFU8E1HXykZVjC7RaNLXoG2zCwRbQ3J2k11hSiWCC",
  "key7": "2sZTAZPbxqgmr6bThgfFZNcBSto9vVe7obVDDmj7MdCHwHcozwLRUDZ2bV45WZsQif4d2iQCTfpFQsLtVRTq78dh",
  "key8": "5dsox7Eg59atibjrA9cEKib3i5RYbRcGF5H2uRh16PYuHLGzhfQX6Gc5ShpkiAEeswrGL1epgfHHMVB29wyvpWNt",
  "key9": "3CLVNhkbf78EodafTiPFfbxiDTgcHWyKJY3QazFbYRLhESZzaDmJGgHBxrEZxuU8bCYcyMkNCSMEQYizNqpdTE68",
  "key10": "5KGDXK8CyAwrm2bZ6FjCcQiAYaDb2mWXMwmzMTUPgM9osvL79BZeCNYkxYJ3TuRE8JvuLmiENVh2D71ELEwnbJnz",
  "key11": "5VNYyAQsvCc7PLmLL2zqFMJ5R8vkoMCW4CJvGAcFmDuqzR8nYUc2LCQwWP2JbwcdE2QbHBN8KCa9jSd4B3aWCrCM",
  "key12": "xWv9Ta1nxc14fp2EVzXyBjSABSjfQu2fppcWrL1B3SSL2V4pKempiE8529oJqYAeV7U9FvSqszZeB1hEfkaPpd8",
  "key13": "zhjvG4DRkXhQcsY4YZRaQVmisG6fAzA5un47shR97uyT3uvKtyirCPpfuBLHTA6jUnx1NUJdZfNASR1YEHnkWFf",
  "key14": "38edWZhsYDfoGeHLRqpxhkzVoqGxaFg98VbKtYz85bJAhTaoMMGuZpLUzQn13BoZjyYCi2V9dgPiex7jN9sK88PJ",
  "key15": "66Fz6q5pVKT56wX3a4WvmqBmp92HKaHXxmRQ2iNo2o1mZ8QxBKr66myRCkpTnmHGNp8H1rA7NfF9fZf9ZJ5Wn28Z",
  "key16": "3PpFVjcgRUNA2QLJodDnzm7bW3gS4nbmmfCxzZtWLKSMkTvEv9ktiCcyL11gP78ZnwdgdWVbHi18sUpQFYUz6WLx",
  "key17": "3BeMjjKyUCx62WKF1iNTgKw73SynyCdn4nsxueLgS6tCdXcUW9Wwa1oqL7h5E9CgetFVuepLsLjLRkjtGArVuS2j",
  "key18": "2yTGNY3dMFwtNhaidbXBeVTiT7w8mYRh1Zx4SesU9BpyjY8AFsYrVdLHSKdzQWurSkgUnNmDE1VbXV7tB6JNS8F8",
  "key19": "59EKTdUJBVwkDvw9cMDKLo7YFchVnSDS8khkNYzvYLcZVYNHCuDBMdsVB18bnN7H1nhqzwFA9Yr93NA6wFGJm1CD",
  "key20": "34ENFcQkZsf3Vxo8Kcw6LPWy77M9WL6c1gspjKd49KaYM2rGboPHBJcnP7pB7a5g8bZ3tY9EZYmN12ZSVW7soDE2",
  "key21": "3kucdhVWFGXJHQ3YdnZC9biV9bMxuLZcTPGcZVk9ZeGXbaJZHsJURSjfqBiXF1AsPWYAV5oT1oBoUdN5okJjQn42",
  "key22": "zi2XPTg7AxGS9NxhZMzm35cjY5YnE7rJNmfJKAUCnaP4vsaWAJV6nYXXH2vetGXF2vRU6yFuHAogiLiSMZzSLxF",
  "key23": "2SA9mFg3QmNGca2ADmfWkkjXP6J6xtQq4GUqzQHfRJasqUFnmpR6hDMKULT5astDm3A84SoLkv41Je8X4BWZgQpt",
  "key24": "rkVayc2wqN8GjY6se2UJP9Lx8zrY6VfE9CpduFffSBFAqRCC4KkGLV9aLtVTwMJrQumHLEvCzynAMUmA7B7gMjB",
  "key25": "5356dS9pUMcn7gfAMmtMBqBnkba7RDHEPRm7GsuK2SpG2MGJQyM9v9CZpiqmFACKRT6Kw3VakRxwRt76ynohRt6u",
  "key26": "3bYuXtYJN9P5DmDDV5SwgzeQGLvrhatJG7Y5E4yUKoQZZCpcxfbYXvr1D7D5V4dbHxiV6k6mFHVhYEsHj68n41Du",
  "key27": "3hNknc4aPHrLfoc69dMMpjVXHSuUz2z5XmhHyB2MxE8GP33h848u5TYsv5M2tnZGZbZTFhGbJUNJT7faBnvxhGbA",
  "key28": "VkPP51GSzmDQz4vjTtqCCpgMv3C59FCU5wUp3FRzZiqH4WHCXHcr6UhxN152vgNA3S1UuzqcrqD2tWk25q8MqiL",
  "key29": "2RVWtaekvXJ995yzYQkaE5JFCihohmRND1XqnWHf7BKi5JJL8HuJM9Hn1DuLqLrT78T3P8oHP6DHwn3otAtNkFp7",
  "key30": "321hDFkbAXgGvug6bU6qj475vj1Yn9nM8Br2V8ZTDDWnQgpGtLq3mruiWu5WkyPE9LHTEti4cs8VrerX26DUn5g4",
  "key31": "343mbQFHVJLKR87zBYLTuUpEmcEHj2KdPyzGaxti7vA2CM99mjJq2v1DtoLdXktj15sYbVJiwyhyw6fFPhovWGQE",
  "key32": "25vigFWPeTdA99kLYYJK4UfdndtViwfVBbfV526Vgsg4CzXP9mK5Px3nuoEStZfkv91N8JtpdrbV52EKi66FcuZz",
  "key33": "31q8pYirF76C9CnfhjmisN2Rdt3nwZ5bHF5vuz2Lx7Se4tnnj8CpGbw8Zc69oUnwGhJ1uPiZceu5LdCboW1bXVYv",
  "key34": "3u2otHwcigaUkdK43jFBSqNvo438tx5jQNEuVfpKTrEAVqxWyVE6V2kJNFergmsVAvU4QkpP1YWYDPNZ1gKdMMA",
  "key35": "3Ad8Feir4JHaTFVgcv1DLVks7eZrAMtCrYCsLg9T7AgZoEyReefpeUR3Qg7Dv2P8LJD8xj9f7swmEReUEPMCi17p",
  "key36": "Jrige67Z5dxxiHeMzKRWAtCbKDVG6nq6coBSTM27zTF4TNGSSap4eVJpwkQ3nrsuJ5Brh8NJ3sXUE7daAnbFsfM",
  "key37": "2TT1a9HudJkcB8TUUNYmheQW1vxPHtfB2aggPhQABxjqn9Zom9Z6bNThxb1uEUqoK1HjYovV4RpvnGvarqDGoYog",
  "key38": "5BVDV8D2ardnYaquJfEtSTqNZW3wzB36mGTyVjMwTXQNrVAauWfszSd1K7kdahueTerQZdjyeRMov7mcL1kJAXxp",
  "key39": "3mcLhR4t3hF6Pjyfy2PpUGrUDUdAnpos4dYZwpzesSwX7Y18HkfxER96GHFSgAQAQmw8cHpttjmewsD7LMA7RjRX",
  "key40": "611Uzbh4Qn7KZ1h8TUUvLnVMvsEuJpMbqfQiYkTB2Hfrn51WQZodr1kvLZX2wHaBhC2ARAh2Vcvb4UbmMsx4VaDM"
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
