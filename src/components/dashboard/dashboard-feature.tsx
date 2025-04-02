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
    "3d9NCvARf6RHdGZ4ANCR3yeWzp3KvmqvxtXzWLA2sR84ZY1zSHfauBw9maTiESTAnouTCkMxvpncHwb2r3SpVQMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wq7VqyxAkNF4YYuyJZaTppys7xd7ihyNmfJKmtiDw8W21VLyWh5uXrwiR7Cjo3aSogieR9emfzWac5LUJVsp5xh",
  "key1": "4aJJD2TyzPEDHxX83gd194LfYVBCofmSB8iL2e654YTAaYUhCa1Xd2iVSQGnimPsAmvky745AFVkU4VJwXot65uo",
  "key2": "56DpUHGCwwAqknFuygzvxEsx4qQHuR7E6PYt1K39ZJaD8APDQ91zGsDkXhYGA5RjzEbj1r37coRWTLugRygRuTFo",
  "key3": "3aRdPHyH52VmzCPkrQYibGt6LY2JV23wzXowGsR9pCgPoWKYdajZbaWU3XLddXXiPLCAJR72GeLMM1ZRVqgiWCQR",
  "key4": "4gtWRZ4SxE2VpybEYFjx5t9ofXpVZYAqqjie5T9GMBjo82foiLFFH6Psd6PkdTz8iYJxpHdeqo5PuBVmNjN6rU2o",
  "key5": "3giqzv3GZEgosZEtweWiVTkUSHrmGsxjcWrEeTrT6YbKFgF6RfMazJkDDehnSxmpevfB8ujQoYLpKTEBUJR1viPQ",
  "key6": "5sBFDeK24ViVip7q2m6yu7uMkdCsCnJANH1qibUfTuUEc33TpaScn1hvnQn7zjZZev47hyXpUgDfTq5VHRbtZ1a7",
  "key7": "64FJMvDHXMiy2UzVgZS7HvWa5DRYpiLAVXDgreZuMwGtvfDdXkfYqsbZMsQRCKEnedRgr1MDQbJhSBoJZ72tBFDq",
  "key8": "2eW1avTJKYB2dtH1oLdBQDtQUDQUK2YHtTKjJQ23Qt5RzLuin3uktP8UCvdbqbDxCWW4FnnEbmFcqrzg8Kpob2k2",
  "key9": "NFKtxdgvvoyCR4hrPQfpskce9FEAkuB7ruwFBD1cFg4voZQkxyWQqTLXvNEySfDmm3rFdK2jHvnhY5wJj26Gf3u",
  "key10": "2RYgQHrCSmBZkHb7Gkvyi5fmwVkWWQjMrZpMnvBH4JmL4F6ajjFCVXSnzeXzDP6PwmZ5h8HSiTspLjsGHJDqxDVg",
  "key11": "3NusewrEed9UpSnhBPPEsekCkdRamEkS3Q7zT1G1dg8m9HxgUzhM75qcsErKx6tgb9XU2njkr2LoCo7HM9WYR1ef",
  "key12": "2UVXJAq1JQfDY1L4x72XkGW8RvfUePnub4y4uigGtgGzT1k3rPM7HTWyUraXVArxaM6EjYWV3H9ouGcUkfATm9xU",
  "key13": "3XPv9bXkd7DREzTKqyEvP25AdpkExWVp11aLp5Z4KGATuY6cqEidW2xaHCGCsPrevJymqQHfst8QQJN2UHyrUp1q",
  "key14": "48gdMYvHJTmRuHKMeLGYJuC1cUVnXCxAN12qLPa9qLZmdWXVYorarQuiezMjbdpMNzyeQ4hris27ZX8RgctBpv3f",
  "key15": "RKw3bDWrRyFcMfMjPsw3fagogCuYEZZteMim74KHxqmv1SRcPkiAHAj3tGLNQqXQZUEFPuPY9LtwKzSGSunXfhw",
  "key16": "4P7qb49rCv3DiedLfwcgexjSPrZcbcAwGEhW8mwaZbcLbzLMXPAmNwSjZSGVnKUfXsJ5E6ctxEVwY5LL9zLSfpPx",
  "key17": "5n7TFQzKBHpbYaRvFFqgx4y1C9rYY1o6eH8yLwZmZY7c4uP7jNW17sLrgMborDyyKdvawXkd42RbyzLCzFURxBze",
  "key18": "2GD97j1Fo5baYyiQphRjJRejZq9XU3RdFHoo1nsZth9RejagmMiNmDBArarKaXGt1rUrTTXfKXmXC7VkWXyBrdUf",
  "key19": "3HkqWmc9JroSJnu4DcQSTKctRvjaJojR61SNy4yNMXmexrTmyrdfi4S5MzbAwUe6QKunrwqXm8JYPtmy6Dntj8rV",
  "key20": "GV7KWSrVZQBtkLou7zsCPQ1WSxDEqab1KZGTHwGWG65qXshNuwnbbPCZYwEXyCP5od7AwGidq2GS2tRdQcuaCQp",
  "key21": "AgsEZhYFUbdZUSMpPyiYe6Amnj15oa8FeA68QN1mZCKyMVTnjCkwoBfeLHzFSnmWiGjAPJ3893Ds2YYzY6ybUwC",
  "key22": "Cubg2wXAWw24J8KkBV6KAmDqEJtUDBaWU6WTeKMEVHfwF5iVFgtiDf2B8SaQppJFroyJeXDqssTdF19pU1oQCvX",
  "key23": "2rJNtzMK3MZWyZNYLJkLWUhc4RNh1tYHMwjC19PC1J63wEZRt4qk1yFz3EpUymGYZio7Xafkcv1PwK9Sr2TxJ75s",
  "key24": "2mefNPpGjtdyfpnZq2UXvPW8NoNp4dwEtU5kSVXCHk5T24NpDDv4hNfoMcv3xm9AVoxvaq9fi4c46z2NbBXsHJQi",
  "key25": "iHkLr59ys2n1cX12yBpzBByadMRrikfmc6ArwUXpV7WwcK7WSbvsyqxaKSMq1dfrpzdMufVagYKeHh2G3dsgHE8",
  "key26": "2yteg5VQPYXDZRRvmsbYihhBwQknjK8ErTED6227cRZ5TYS6N7jX69iRUbt8gpmc3bd5MvP5pjt3zoqn7N8N2ddx",
  "key27": "3YBpTw1dmGLYdQxR2ebcL6kqJb3B9h6QANyAGe6DHzqxBw7RoQHcUrCiTjXSYdRk1rd7pauS8sSi2pyJHSBGETVx",
  "key28": "xYYBaXdwmqwzNQf3yqkZxRM4evJmgXwjS2vkyeErXfeNmgDRpTxV4SeFcWDcUHfm71RQBgjLYXuP9yM6kibYMPY",
  "key29": "3VhPoKNpoTwkjmJpEhzagGVjYJ91AZ8UZrV6Uk8y2qtaDmQPyh9R8a5JtvRRfSXHVmmLCwsUd8hPVnMGACyHWTQ9",
  "key30": "5oBD7o9QVkEjq23ETtaigsU8cpGmXNM41TAVEgPTAtS43Ri2R6dYLqfupCUNHqLenB7RBqLnv58Wp7QEwWqNM58V"
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
