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
    "XsL32yV7Dm3L2GCDzZrxysdAdNg3H5d56mqiRR3WBzgJnceVq7qbjF9V5AANACUpkfEMykZ2ZfQNYTgWmTCqrnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48mRyui5whY5YpFoD7H5zcGbPhh3mjn8iK9VHWhdHiyrAwBpeNzp2n5cKq2RSgAdBbHs3ywh9WYuNwcaxUDjR8bN",
  "key1": "47nzaYpRc6Wji65TPbaFtpoVjNt9D9GpBNHcajuJC7eN4hHdRD6SMaM8gFVxT4ZCHNnLq9GvfcXLcK6j68eaqfTY",
  "key2": "4QcjAzZ8m3HJq8npdwAgTFy5f4LA3VQSX4Tk4vEvCvHmxoBHAHXE9q3RviMZRafFN1oK5JLCw4bne6jzmqqe9iZX",
  "key3": "35nSUydMj163TJioJyPbh8Lx785rT82HaqWsLjfoSKNwiWXk4TksaZofhZT1A6nvAjSyqKtzx7WTqWC8oqQuyYF2",
  "key4": "YikQx9JVagbJRwgxiAZ3VQpu69JBwY3UuLVQVdcr7ku16m2qBpk2uKkKj6M3B4KvJhXwd2XJRtaEYQvW7PYeWqi",
  "key5": "4p9HLW6vvLBEWsJUghrsYukKpgpS4mC783dF26NzKACPKF8gc5hfDEmpC2uyQNMjPiJjBE4cAhYJXtQQedpH6DHt",
  "key6": "3UxBsZ6Lf8z3JCv5KE6xx4nCGRmahtXUuCBNhYTmDUdRgyPit4xrMoybdEfX8bhNtz3RW3vHhCfWY7BYxh5qZDDQ",
  "key7": "2J11gemrhLcZmp2jx52NydnVWto1uqPEJBX42DiWV7zfkPNWoxFRERStcQQM4uHzr7HhWMTcrvVDYkD9okt8nFu9",
  "key8": "38bLKvkF5g7ZdPCSKkDdz2HLb3y1myMyNC7toeKiDboemHq5FX8jjaStD9DczgUvUL7ZGnciUCHdqghRnthWx9qZ",
  "key9": "5MsZn5hqpVD95QtohoMVhkRdKb7Vskdn2X7VJ2FpYSGWvzBvbE7LZUbmdPK2AMuaPGtWfDbeo3vAJK6Ex6obdbbC",
  "key10": "39xXMxkawnJRbbS4Q6WaMmcHrRzxo9zQRenP7X9xzV5GFB2eXrm6NQWUUcQVMpM7X8FYNaX3fhZmw2bYx2qk9gnU",
  "key11": "2SzHBdUgkpBhExMcVGo2aRVP8pePy7uySTy9f6tgc1R9QqiLS7dVhx5WjKkEjj93YVLoK7GMT4KPGK23VNYXfTYj",
  "key12": "3u79Daoy4Uy1rawsPTiWHZB5FyKg4eTBAY6M2Svw5rva1JuAnnushkFAg9H67VosDYH1yhHx5EPu4LYKYiyC23vb",
  "key13": "3xBmCa7CgmKGMYdfWQYvaqY7EEN7GQ3Djc3BoyjQaJZ4YCYS8WKc8SjZYfNu9Q5NFDoegfjAMnwgVgZfoYEGCJpw",
  "key14": "4SRpqMttTDocCLYUHdTREDK8954XQDPHQrBZmXt6RjBUv56EcmXtQq3Q6ckM4qwcmhTrYYTketbxfcY8e2BEENeU",
  "key15": "3oyeiu6Y2wx8jL3xJxZicZ2zcc7bQ7RHnYs6S7QEm56TqmCNGr8L69tCDZFPAeiaWkaBrjXaPbE5FK5jZhVnnFaQ",
  "key16": "oLHHTi3g9kfEEm1QFXbQ41uUS589JDHSJBKfeG4uF8VTvYsCK1iRJRbps8j6BLL9vZMyKtkbGDbinFtDMQwHS4c",
  "key17": "3cdfoe3vdSki46ny2hBJCKtP5Gh5nzmUtxwtfH2A2YJ735XwN3FyGgFsQ5DU3f62x34iA3fhLzRsANMRK9yxcUQ",
  "key18": "4SfSXmVUjoinDzr8AfFUPgT29oEGfPHDLMuKBE9cFcvPjvJkmJYLswCNTt2QCFgsBkpTRu9nNWEMMf72Qw38qShP",
  "key19": "2KP1EohKcgMQbFHUcC9nwUJrf35X8n7M3PC8TW4Qx81Yj3XkTydrGPwtWM3Bdv8VwQQCXtnCJ45SHooeigDeH38e",
  "key20": "4bRj1PhhKimDsEWtQDBgTjxzN9p5jw9hYTtk5MpzJQwWfvmMSuz4KXS3kgjF3p97UedmDRc9LhNJZan4suqGKfeZ",
  "key21": "27HSzyJBamvzQrvu2r4L4CqcRMdYs5G6SCCkb12SuFXhymGGYGttZhtEvWQTQ7DYYPzMa9u47QKG2Uuw2PapGxDv",
  "key22": "4J1TD33GG5ugBu1asJM8VDpCssuxktGxM2otP4SauRshaYjzMnyinVT3NbeC7M6R6PBhLg75rz2Sj74tPML9Reue",
  "key23": "4utzLbUrHZzU94agm9AStTCmw29jrtNTPdCJij2KgiUjuHdgYAqWuWd6cf2t2W8iPvWLiJwsRb3Bskekaq9kgAXg",
  "key24": "3AKLmRgXTJbV1zdY4kf72kUtXaMe9XJ2st74JHoDDzG2KN8gd1gpC1T1TEPXUv7L2dwNzV3y5npDVfiS3aEAeMpM",
  "key25": "2qizvUeh456fnbqVtBgEEiHbZyKz11QgmMWWPoAhbJAGyW76fwzSRfbNDFLgUFwDZSDwXUCc7DTBhp4Q4Q7WWTSs",
  "key26": "5PHWVSzxYM6r5Lu75byr8Ph7L4gwRseTRYp2P1dZyhfb6ihro1ar6q7Pg9LuF5T84ANTEWXdqb7TMUPviu9ntVeQ",
  "key27": "xevaeDMeFcV3HvBcG9Swwr9RNt9VFSYXBSncT1ftM5wTvX14z1y1pfzYcB4qVsdvzWUyJaPhzrNvgwjAPnK1pxY",
  "key28": "62vgsbVSuD6pP8M6VV2GiF7MvxSgjjNBZiAqRy3jhat9Fi7mBzPDeKcLs3PEB8iNHRBaY3aTcmrhJLCAvkRt5Kmb",
  "key29": "3ipSWQ9xN4wntjhePtAHbR5SHsTN6242d5wfYznZeTC7MJ6wTCrNLE9fnAshBsg9cAPanSTo5gVtVrJBT17VYWCL",
  "key30": "2WvNbR35Z37KDdzF4DEFnZbMdPDVRs9gtCBJoY9cnHTP8atrP3S2qg2LGSvftd2aN3XTdb63m19hsWn75h13xD81",
  "key31": "3yiawPnsbBF8DnK67QPH3cuLU8T7uBmnuTgQrKknLUExS1wYCP2zjsm8WcpfftykdBtQHvP3MfAf8jkMGBzkJ3TE",
  "key32": "gQgK7a3w4kQZvuB832MJXhudMmRaKeYnncAJFqMf4CUw4wW2kDCJ49grZQQanJ4yysJKuGMK4e7ftrAGBgeoqdd"
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
