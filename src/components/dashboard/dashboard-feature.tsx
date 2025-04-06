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
    "3WrCFAq2NGY4EjKxP33ZiBqjaQ2swEgJx1Tyi2dBKbd1Ze8bgnNmzk1UaKhYhBqCgesDYG92gD8qss2TnFVzwqVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cmq7h3TitnPxvkxxYaUybVJ67j182YxNma2GSugeVn9thBMKbnZfLG4kn2TBAynZAwFsJCVZ9udsYBzMrWM3Xve",
  "key1": "3cRqPRqNMH1B2i2HSTTBomz5HuTZvBcFdsdi2z4zp9qfB2qu3Atx3zJY6xHWACAbCfzaWpAHtsZiD1baLSgF3Ee3",
  "key2": "2CSjB8DHko1w5WBdbm5g9uog8KQBK487Jd2wdmAWRT6QFjfj6eDzrSgQh6ArjmE3bzVhHpbuyEHfWB6PtqV3qfDb",
  "key3": "46wsJUrjeKFRKqCEE8bU86FkvLiMx6kn5jBAto3KAQ2xd7WajYZdoMdh4ngs65Kum6EpgZsp6MadSVAZgsKXKzDa",
  "key4": "2naYdbCTekymtypuwbrPgwbxbnRF8N1TjJd9sFxLboaEvLVD1ZDCwRdwoKXMcJQ7z3i93KvcS71SSbwb87dNtL6o",
  "key5": "Vs2FoPbWSiz5sB47mX8GgigpeCbgeSfMhHeTvF6HwLQqmPKwTj26fx5N6Lc4cYFDTBQLbXwz8MVczvFAbEeb4k5",
  "key6": "44d2myFbuXegx6QPq6qUVx5SM5w7j4bXqtxE3yJWf8ATHTntHyGSgQGygWr5oir2kgrSF5v1ytfcNb9GaUdL9x4u",
  "key7": "2k2mcv5Qfhz7qK4T7GrsWSSoKmFDkqFaW9LsT2YPfoYqdEQehU6rrAo6dPH198xgzUw9jNAoXsdkwh2mQfEoeNzh",
  "key8": "3NM29T2LodRyv44ZxdyCposJCHmJqeMDdnytBp5qrBK4sFJxH5psj98L9QYxSf1qSkyhanqeQ4CwjPNJPYGDCq7x",
  "key9": "48uWAgXCJeKbre6DyXA94m3hZdSzRZfdMfLJePKpwsmP27qrzRPm9CxhYfVdQFJb5jhZxy1kbaRJJB8Y1MucjBGs",
  "key10": "vwnHTrzBtV1YcMicr8gWn4E1S8YkBrGXnfjxxCMM3tWHmvTk33rPTimi4uirbifZQzfH63AT47XLKRq1EHJfsRJ",
  "key11": "32xp5GGBe5qbxWuBNi5dCiAiMGvLKfiPxMpgAEcQRuKSgyb1SfX8bonRaAGgrS94njXfE1Hi8FbNo8SEbfqkn18P",
  "key12": "4FWt79J9Cm6TD6HNGp6kzuby3d7FEBiqH2DNChXA5FViJDTQHfBCJ3VTodsEywfc2YyZ97NajMjsX8Hw1bw8npjQ",
  "key13": "4ZhAuFgz8oXwAbjGSZUY7YUiAcwkU8KQfGttR76zRj1yjnphsnYTRHnTTHRp1sVd4kL1qd5cExwre6ZZDtM7DEiJ",
  "key14": "3v9Cd7irHtmi3Vpn8mp8CKASSN6Kwkk33NZeDAQuQdq6snfoUKG8R5F17KeuS1tsR7SvvKowb8q7kKQE5nsncYEq",
  "key15": "5tEKxCvVcDRetu8XDakQmgmpGeusMEEK8YFZtJTGz4BkN5VhXH2BoaWHxNWU73wFXV1zFfnULVmjp5GSUMdLBQux",
  "key16": "2BzWYrh8PFo6vjGdiGqLCWPvhA1m8DdTL2mpVpUXQd7gmvbQj9t8vPymWnwh3BW8LgLRLRhiVDC6uriX9XgPVAFh",
  "key17": "662XfuqyoeTKT2eAeMkrdJjveigeUap8a9LiWrppp7pSbgNbTofA6zUxYJ1vDjNjHuQivqNoEQHPDXYJvMb83uw1",
  "key18": "42Cv57znyCeHpuVoheHxWuejM2VT2NsH8AK96DjKjx8KQ16SDb6tutKy6Snr7U8WMGr7L5GUGqgnyMApRyTPNCsE",
  "key19": "Y13KkqzjnuRRYGY3GigmmpbTNykj1osqEr31co6NbqbcKdDLzeHhKdDr5LVmzA7UTUkf8BpgNmLQN7jyCPPLfwq",
  "key20": "RVQvqZLNnj1iEAUa27sMe2FjZ3SFr9g8SYoYHodqGLCnPXEPD4ka8umjy4RtgLi55M1BuoU3XWf3VvrXngh6QY2",
  "key21": "3y9mSnAXXD9HNuP7oX2zQFDi45dtC77y3wvjhzBtYwfXXrEc4N5AgpXfruTDuFBL8zjfU3TheMW37AUgnSbnBwjm",
  "key22": "2ZWSuWfrM2Et96rK2PpdTSBmJayp1MxnUvtcUQxZNJT8CySLhnkMqyQEJVJ9Z9vQU8ycw3xQ8WNLNaY1yW4vHEhR",
  "key23": "3RQdAPZLNvQ34nGwRpLBQPF1B48EbdQ95ADU2GZCdBhWGzWDgm9uZim6N5DB4vktPkvPB6Tv3jDugUpAg1uL3Zep",
  "key24": "4LAm4q119C1dudjn2VEfaSAd9zVLcCnJ9ALDjc38NcB1uMRPehsuyG7h8nNnybxHRoDGPjQGZhySETx7ZYGX54kA",
  "key25": "cNGvqL4umZK5zkFCtuHWGqqmJ8VkF749cRqiVZK8Hktdgk9oauEqzQ4zQ5aJ82ypc1sgwirFq5zNryz7PqCK4Zr",
  "key26": "5HjJ4Ue1oAJbrSbP4sVAkhdCEDkfMqW96PNhsn3JRmGBi5WmxJ2ujwSp7ERvyNJuMxd1V1PbBCS7yHGrJCQm8KTW",
  "key27": "4cMhqPWEQYZbtMUCznp6vGtmKTHUScmHP9oXBY8ATfb6WjVq3M3RvBV9WNpyp4bxXK9sSFMWY8ZMmS1qnUBqZmF7",
  "key28": "38QQy1TNZC3PENiPUJG8kpr6ze6QuhW4dKcN7gmvmsm29KzEK6ZsftG3zeX33EdjMRTV7HTrrtikx3y23TEYrhqM",
  "key29": "4VybfgDNJ4GuNw8jooCwa3w4VdABPhbx7EZM5mNwaVjzTgxxQQB1vJbqyHUtMBoasdyo7KstzixGeCYRxjcCx3fP",
  "key30": "3eLQK9ZStGoWB418cJBvTPux6Mmw8FTa9L4s6td1bKufyPN8ArxoZSXM7t7XcSPeqokADfdixaPtmjEFqKv9DGQE",
  "key31": "3m5NuZ7wDVNmj4JGMVHB2o87xeSaT7YUaNMWA1dBJpWkeNZYEEerNn8CSPAcsyZeLWWonMTuojbj6mNCfMQqEcrD",
  "key32": "3ZEYmbGELjK7LD8tgjwk5K1DYzpxZoSCwGqvu7pTGZm7bCG4oAhBrjnoSthbCdHPL8Y5nmi39dfEgdSyv8hTCeZ5",
  "key33": "5TKsCn3VJPMDFwVR4FHNrBmVTQ7VXM2epyZZ5CoCRxgJiT4wEkwVdK8p9B8QE3j5TTQt95utYVZTq41i9KPq835L"
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
