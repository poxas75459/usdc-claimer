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
    "3y7T4tc5G5VbmoiSH3z29G6o9cohiy4NB6XhtMPW3QvrXGXRf3e6nqfvfFZg6zYqMvAM58RwpnC1uE6NLqknmKeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H2oVWRq8Li7cCAQTDQxRx8ehzSnf2AiM169XXg8atGtXU4jFbrgNXC5MpJXJHJsMGfa5de9cfv3FtVbLq2Cg8Rh",
  "key1": "4w9bqpweaCS7ejBvH8gSUn8kRrjU4DDACW5BLwq5JabJACsFEPDBDzoUjnq3Ls31JbJGvWZQ7jRRmeZEYWG1Xbw5",
  "key2": "4U8Rzmrx1jT9fiym941MwJUUnyVAF45xMaZNbqBqUKHBu6gkUfNcS9uGnae5VBu3ut5Z3YHDMfWjJ34TjLAHA917",
  "key3": "25saX1zFm1cKn5yGXFTE98tLRe8kKYVAbqW8pYx1duH3ZmKZ6VcpfAjhsj91HdQXpkRZpadKSFKM1eUL5ddaTtCE",
  "key4": "4bGN9nHLP31FAgxW9eo1Qi1jhCorysY5cEZ82H82R7m5RUJi66VZemjFHGr9R3kfbMJ65edqJp97MdrvBnNrk3nX",
  "key5": "4QyzxihHbrza63n7PKsKr3eYRgff4SvvjUCR8BvYtJ3BAkB3bkcQjGGh245kPrkmgfYVNxZwHatx3sJHwoYDhSaN",
  "key6": "3PifFiN4ErSTrNrtD6xeHCdqZ7AKryupxTfjuM9UzLVV53pkAQ2dTDCqJkfRJxf5G1bYMiqKNsKkGeq7Uwz8KWd8",
  "key7": "3anzj7ipr5nLYAuyZHpVRRfyttdJqbCj1CnAQvajdqX8kK32291pfxRxNC6pi6X5HEGHGhK6FwHTXJZz13nXkowE",
  "key8": "5tzWXu5fp8uPmcUh7YZQEqET62Z5YLcYQsrAT2v2RtqFQ3JaT1TWbrQyYLDGmGho8vZwi1pEgtYWS31n6Gs7vFBg",
  "key9": "h8BUuW6BiMnVabSTjs47CJzpjnsuzzgBa58Mt61sNX5cYAamxsCtEjD3hBoPebvfVddWYsmeZNPWrUu5nDoRLTR",
  "key10": "4FGSNyTxEDhed1Cd11kNBBpyweqSjX2ts5KSmMUoHEU1Ukn18cLPFhUED2cgWcPX56VCQ6HDvAhPUcMdjTW9otsM",
  "key11": "3iv7BLeTsQBaUZNqC43HMDTEq234FHS82m4sdYWfrUgy9iWy9bdvtYaJ263vyRWogzWAkRv17aDMJeh8aynzkF1e",
  "key12": "3AXU9ZkNTECi3TrJMukQbYppvrVbx7fKP3Z46z5xxDxi4iy4R4TitYsYEHUtwnU6HMorJh3kn2EpHoSUAgRZDmsc",
  "key13": "AnWYgFCGprzS885jMMFMLNVCxTQ2Krug4nt5kHn8ruyaDcn2oYAX8HFFtwdp1mKmCHELgSJBpfvpGaEWfyNv6Lp",
  "key14": "2RNyJzhGFLdST9LCtEbEDLquP2o6jx8oSFEWFHvZcuk4CBfgtQn58dfdbQfYpWqR4xJA9VdVfJoNYphPdqmFmkHn",
  "key15": "5RexVoLphVrLZ5UAqAfbXXj3HcxMYXZ3afSZP3GP3s3tmuP7bLK32WsiLwzofTmBWR9tJzFiCrTsfYPinvAEfG4p",
  "key16": "47LD62Dfuvf7XBVMTKDLNZRQoKPtUGN8Jy74XqtN33a9RNtXnUG3RUYj1Tuy2rds596GekmV5QQDQ9WofYnzTUVA",
  "key17": "5XEgiBmMzy5RDkScBCgi8qBYhcsWi8tkn4qsnVVRFfHqgsdJzUZEW9YuiUMKzaEjUctoBGrRZgRtzBGvkjUk8F9e",
  "key18": "34ZpQNLTRrny8Wwj4hHcK4yrdothdBX9FFUMgLRjEVteQQDDiyMBi7aHDaBKfmpARXiqvam7QDB1mdyKt9MpumSN",
  "key19": "48frMdwxev7vwZF7DD49wy92j2VXddtAugdhwcHKErkmR8skcJNUb32JLAzwKzayYkQo8JdbUnEEZa9hocZj4967",
  "key20": "4UgobTTRavafETQwjaZ9tbU5dbyoqAEMbnN7w8Q3g9GvrzFmQAYFL9nBE5MpU9WBc3LPRWywhfSbc22dfbPAbdvb",
  "key21": "29LS3xssFwG2PdwoW9CKZ3Dy1UEMCqUppvdFsdBg4Bfpuz5udUMGWZ6gomX4ajii8fTu5AapDZpcPigGvodFFCR6",
  "key22": "5jmq9KLwotp399JXt2k76UJk2bBwtuvy8WSniE6xwq9NSCSDT6VuscpqJbcHhALSLVeU4v7wx8FmRtzDAaic3ntV",
  "key23": "3qSW4zm6nqDDmcyyGtkdpV41U6nXeRQRt2mnohs2ZCmpoc5LCFhGseemJ7jGCN3noTPKx28H81eEgT1dmCPtmHGk",
  "key24": "5tEFVfMmhSifMEfLZWZjDJKNhwVx1w2CkXbDQXk7iwx3XCbQ7unvXxQibvLLQfePKC5MBV9VzgkbctNEWfTHsLwd",
  "key25": "3G7fVSXNTCkfNLFQTJZw5Az1HiZ4n7sDjbkJmzQaKMvqNo3BjP8gX6L18o3eoYMPrbPHkvuyajAJ3uuzThGHqSjA",
  "key26": "51cquRZkAMApFQGW8Yhj7jgLhdRDwVq3u1ZkgEF8qmXPSG2XQUbT9VVRHv4FC1ShKA2StpC6uT1UKpSjCJGrsYwe",
  "key27": "4JjJG88by7nUPm3D7WZNXmhw64bV4pjRmaGZkUmswqM6s97q2GQAzdUBBrVR7szLMHoBGDuFCed3mVdZzG1UwRSq",
  "key28": "SLZQ9hJsmS6Qx96Tckh6kzmrNb9fAfdhyThUhwqs7TZ3nP3WLjKjwGqzMcW3yCmERRjtBtw1DHppD3FVxeRB48C",
  "key29": "vA8xYbWn9iqt68LbbQi8NV692ECKN7a3PigaZJnXVwXVkHyveBejkApwkvkU8d536bFH1FeeoGLEK6x9vJVR9jn",
  "key30": "4apmftNeYJfHCSjuXd4WpvD33X95aPcahsD7srzxyZE9TPm5PotVqsupftWPoC9wijXQpwu44Vy17TkmsNzr6nDp",
  "key31": "3jYqnyCjfUAxYGF7Hi9fNuszCdnnatWfpt2F4DGGRBmbTPzn8Y1BFdZVDq3yLjbmHiHo61hw7NBU2thwwhFh4UYh",
  "key32": "32DpmPxkH1XYSX46hE8V5xF4VsRvrKcF2o5w6NZbNN4KuCAw8GYKLLYuZWdWxCTXSGa71PCJatYmybLT5qNu367L",
  "key33": "51cKe634ELdziF4kLhsETULwgck2Bu4iEesjKQAma5UFUNRAD3BJoUKyXJfDAJ9JM3RJfWaTiTEXJ6xZGi3LXvnU",
  "key34": "4qE13HE3CoWbohfUhk8pVN81c9V4t9UxbJ39FLZiqmTJgtBXDmuSSdfcZRZSb3qvEZSxigi8SeXu7wnfYT8eUzsc",
  "key35": "4eg3dXLUZdffGZbTrm9T4kKUYHeTkyukQNbweMsD9aH4imLUdR2wnAujL96MoE9cKw7GRk9xP3wc2yhaoiDyTAD",
  "key36": "2Cad9imyR5fqXcQqQGWNiCCZ5YRLFWaiixpjCZrVUZn7yVnUxNMnGhqBqV9EbN85D8zdPo8AQEduRqAdrQXm8nBH",
  "key37": "5jk4huXwndu5ZMB4gjkH9AmLUbiCGAdM7sQY3i6x9ju6CrSzfg8sCmw168a5voJSifRpBfhSQGWcPXRXThnyMYiZ",
  "key38": "3wK2TLuZUGFTswBvrg7qpeFQ6asWCQdLAbGvaLnLuhc37zL6Lj9V4iKVQHrGXQTDZ1rbVhQvDtJykGTgR3SJAkcf",
  "key39": "3PJXD3H5e28tKywwHxqYjv8UF3RUDEDSpL7es8mZJRCA54Mf4AH11LiA2duf4TfX2vW36pH6nwxVtZ9rDGkhWC7H",
  "key40": "4Da1ZG9Q148UhveQhwu3pAUZrjDzD4bt1qAhGeimmJomDAhpD8zcFCHCdtN91zaQFtL6Jvbcfo2bJ5cZosSa5G7m",
  "key41": "3qJFWcJwuXMqLESeWcX6TCcBo2AoTCpAMwrxGByEUctxiw5wnDSNWkdXVX9UbX9HQByqVUaVC49E18j6dn2a8PVE",
  "key42": "5gBS5GsJPZWjBs32AGSRfb2rPe1BoaRme5gheyoEQcE1PtsPShr377FoPvmTosH6YaxdCG9fjeDYy1F14cgaMWJj",
  "key43": "4uJnrsbrjCChcCYpNTbrF9C6jjpCNiJLs7KwEN5FJBkGmWa1jwAeFiF4eAfQvH36me4DviVSLCua6dfdG7jz2Ukf",
  "key44": "46krT46ibrQER7iC1YumsfAksPRjPCraGbM1VNP8NrZWkd7PM4F63qJwUY3yjgr9hfyHaLyD6jA5fxALYQ383Unj",
  "key45": "3KKRTwb6kWus7PunFLG4kCSUnvSkWn9AtyR7Satn3q7eAvVeUY2APANTzx958mkZXesSHp2Ft8CUYNhu4qXNbU8y"
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
