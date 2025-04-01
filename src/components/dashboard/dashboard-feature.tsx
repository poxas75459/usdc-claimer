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
    "67nsopxm8GbL5AvuvGja88PrnsLJxUwzAyKANd93xgovrehrgjVfGfRWV269p8bD3Wdx2MFEWhgaKDq5bk8kXThg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TXY5qw1DvrZprcKMT6TQiWG5GZ5m1gqKYRQpe1ZDxhwboLV4U2BSdTWRfQGrXLBHY7T8bjwBXMMPwCdFySrDn1k",
  "key1": "FJ8KVAdzCp3XwhH2shrgmNpZ41Un1pbPsDifuQAj8SrBwTBxLUqZkc7EjVCy7xYfJdmZszGwybrnUUJ9fYidYt6",
  "key2": "5KHjxaEjPjxNdPqD4UZsWEBNUUu3edJXKykCcWqXCZqqC6wQxjVKKvnxZEABoghtPf2MVwxaVoynU2b3nN9hp7mY",
  "key3": "4Uj7FAQgxEeU4cRXGX9Whm1wWMpD43xUvNxZUX7abGATfcyYkyFgMfv8WQWQEDfF5Wiry8LFBoqp7PnqT26PTJ7o",
  "key4": "4WYdsojfu5Gzy9QkgYd4peHtJMnTxfihA7UrtwTehBK5JSsu3oY1u8RuoS1YGnsEzWHgo9UpFPbm5owJ5NWt7xDe",
  "key5": "3N9TvWK1wt5r7uMftv7rDoKDqK152YjyyvZWApxCcWibg5M3Ko7LkzN99tVREFacGBuBsnHSBqaoKnQG3BTc52pE",
  "key6": "8z7VKnD7XxmUuDawJaXSsWx2SrQ4Eds2rTo2iQaaq3xPG74XDgkp8uF3dPWYTADF4eu3qnAakgP4YJhVLXVL7G3",
  "key7": "3pepYzE2HxBi9mqG2irQZg1tBF5kVD7yNdE9zCaPuNhe3Jj5LaYPxeYhzYSJJ451CQtt819A13ZZRQnuXJ4Kx3dt",
  "key8": "66dEUPPZBh6BzcV9AzWqEDqZyHh1P7kwH3U8TxCYFPhe21UV5DJsJwpxdLNjUeYN1YaxZkL8w7tRMDnpPfyJe4kg",
  "key9": "2oLj69DRjdMMKX7JXDCBGrEFUgDdmmMcMkgviF255mtbWbU5eUaTGdroCPHtwjgJm39pFiKNSPWDHEaYPG4G3gTF",
  "key10": "4Qky7N9TiGA14aM3N1MWZQJ1i7SSVcR3fdbzGJzSGeVkEhPBukTygmsEAUy6TngixQ9QbrnhBxJL2hxj7wdLshW8",
  "key11": "3W2UEfrnwQ9jRtoWu9wNLeToyT6vkbSeDBGzEEyV5zbydUazRZoEMvCiAAqZ8YB6UrhTvW89uRVfygjifdVuQTPG",
  "key12": "5g2nQd4Mis4iLPHRrYThtWokLZ22KL3cwkUR8cubhAetkiCvisDVWmU64JxHhzQBqkenmTnn2hbUjg4xFf4BSbqD",
  "key13": "R5GvAFazqZ97nkzwMc33uys4QKkzuuJJkBnpaxMexB241NFYe1WhffYAvEUDGXqVY1A2SG5K7cwZouiG1DAfKtF",
  "key14": "3M7kmPqyEpPWCjhWUS8dqV33BpdJJegeAF9mHLMtyc4vvrqNwKrefsLNDmMi5gj1CDYaoVznkGSo2tYzV8zRVaf",
  "key15": "H22d7DkqhrTKYA6z3D8re59zbTBTcfYWWk8yErFLRkQnuh5E8opMHk1p4WQzbH5bPFJWASrSbqoyib9WWJyrrXw",
  "key16": "4km8A8ZpFBxHeDfwtXUdinnrZrk1SZVQfTtFBBQv9U75SDGevgHMMGaAzzHorT7Anb85ua4Gr79YdE9xwTSjf64m",
  "key17": "3K8L2CzGZPF4BmzfnzctqgXsBCkcbkNQmxr8YeKGhwnELAYxStNbmJbFdiG2ceUa45JnZoJg8NyGw9WZ1y7eMhtZ",
  "key18": "vkTbncCBRZ2fbBCaZVPMGgsmKS3hryKx95XzSqp65bFMeHysw4gbeq9TXn9qAthju2DG6btDoEtJtFFiTs6LfCX",
  "key19": "5PurCvn6dyWH86FGmbC68DjNdTb7iwtDcEQhveGcS4nRteNhsXh8CbPMwE8Nc3cqVeSSG4nrLEdYADMLNyNfaTyY",
  "key20": "4jBiafhuXRg3CXdYjmLadUUMkyjxxx8kR5LLoVHj2quDL9evuukkauN5xYUXB8xRpEquP9pg1FwrwD3Ub34jth5j",
  "key21": "5aiKmFkcRqMJv6kzxWuJM6JQMEQQXvQCLsaG4F4sRvLW57Ru7Xkgq4tLEETwN1oJgZ3f79VikN1MaMaCwX9Rgwtg",
  "key22": "5LHgbfNKWR8sjUyYkUod3sNXkwH53uHDXzGkmsCWfCKkmLBD9H7uktDa5JUogAo5YquFdE5iQgdSYqWWvdtBU9Na",
  "key23": "2AMMxej3qf4M5CoWqNRBaJt7MJZi5W7GarCU4bGZMnCJCuMtCqb1LtzCnKQ1Qrzhm2ViZiJ2vmbvFVanU9etkMTt",
  "key24": "5an7RGtC2yo7oFGeFdHvuG5VjrgdyZUSnAvNwGVDjxqPMAtoSoBwV939uBZxECg79fqvDHobzJciqFJAkvk36Fv8",
  "key25": "2fe5B1iE2nTqm7nhzJtCkA7Jr2Ct5iCyg4PucftS57iLwMVU3b6EfDsayTZdjt9jQELMmNviUGsRVUaTmXYmovHD",
  "key26": "4FyNVFmTHVwiGYpNN9uoxwj3bnpw7ynTYegxTmmHSidLBaHw2CjyXjh25ZwjdHzBH5zc8SDxwhTYbbtjJi6G1pp7",
  "key27": "3KAaTkEn5cWRyDMM63XXotwSTRfJkLFZUsBpjmrYrAgKLAiPMauMBzdz1fEmDWQbiLX5kro6Xj4c5XZUZ1KMcn3v",
  "key28": "62RxUcEo8WCDPVt4uDDcqZVvbnsURHuGi4A28yWGcqgEnDHhGZikRqyWyaFepZoEkNdzULgJrGmvq3ZSK7dA7LhV",
  "key29": "22mTvd7MKVkU1UJeYLhQf5Pu3oGbpdhSNCLHBCajEUkhxcYEoHK8DSuP8KhJuTEeuvDHEUyjC5V4NbxGEXsssV39",
  "key30": "dqafhJLb6NXmpvCVXQgADuyKACqhfWkHvkA94xsWZM9x1nTzusJMDYontMDepokvSgGm15SdFSz4caTeWgvbj3Q",
  "key31": "t5G9HTvLUQW77UFJdVccg95qkkrULjeRZtE9dRNqdV2215pxAHmvL1vhLGYs9SpE7wYpX2zJ8eWALRNSxpoVwvr",
  "key32": "4cLGyfcQXp3zmQUz7GAfH3n1tgUPq9tCYUaNys3qUWd64bvkTmkSgSDMjndMxcpRKWVLAZLV8CU2gAs6hwv1aYjD",
  "key33": "3vgTpfV6W66bCV19fPMi25nSfiVdCKTicrLVDFZ45HuPKGFnCK9AG9zXkxoN2XuXXy4JhpAqfpA2faMpWWPrqEwe",
  "key34": "43agvGAmYkt95iwEe2MxdJw3n7bUKYi7afCao7m5sQiLz2TwWTwRhotXW8i1nydxZGfkx9vVYiHkdNEqtsbvPMEe",
  "key35": "2iA66fzCY7bhvWf8RRSZeWY3ZUyM26mGYKJdY9F8hy8QN98VKBAefXEx8rrzTAJcDaHFuwRhcdao2Ym6ef4zbUbi",
  "key36": "4zXkzLwx5zY2q3yhzjT7UyrA2Mur6AWv1E3i83Y2kRN751cEYAoKFnum9uu5Cw4Y5VYyy5sN8VBD9NFDp5tdKMic",
  "key37": "2JD4WCq3axfJvrgX5yape4dZ3fVi8jA1sPWNs2S6SiY8yPSbjZRY1CJbtx7MdJcwTQCvF9ZWjgjCCstPWAZdxc78",
  "key38": "5RVBUxUdjG8RkVQGA6oSP6dEqNknnQDzjiC1MBoQWbwxtft2JwVi4QnqLUgKFChkznRQoaL6pEcsxaErkg2R8Usm",
  "key39": "QW9AxV5rCMZqzMoFt8eQ1JJeqqjG3FwRLUVt733RL8tjsyYkWL3Qd4LEfPXgXfKwcqfd2TpoKjmMkSjvuE1b9Nt",
  "key40": "3gi7XNYLhSoqR4iftWnWft1rtZybBbVcR8jJBeSaYiSUpTN895TG92dDa3FXr5GY2j9NXAYjCEq5NVctykoFoNVU",
  "key41": "2HBTHdy7sLwabDidmsNvMhc4R3bd3m53KiWDyRCK8Cg5TmJDagGaWGw4AYTjaknCzTprzkvGrSqpPx1DnvvBGUFZ",
  "key42": "3y2kWAFexebWeS3nfXspyr87PxXwgWrqBYP82hr7mgryswGDoEoWcNvCKbKFPdU1uyFSLYxvJW4P6tK8gekXL9cs",
  "key43": "2xHDoBxJEpHyr16RUEzS9xsWwvKxLonNqbned9mZGKbtwy1oz8VdDWZhoUkcA33v4CfXFpXfwreZSHFnxZqxcZKY",
  "key44": "3jtQeDceW2nQAr5YJYMyFEj5HURwj2p9C9efvQp6NQJMVH7QQS2c1XWBnGjhLR7euxxLLVmUPSZreCNk39pxhGkK",
  "key45": "5D8RGDXfHo9M8MZRk8jQgeFD7LTPqQJQV6L58Pgzxt2dkumJqpurSSyMCMJWki9DoUFx8WGyEdm4r5MFZqoEYYpz"
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
