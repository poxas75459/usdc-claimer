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
    "2HStuVXFmKDnZ6bBZVJUPnHRNmGJPEAvMgqwbimZPmz36atVCT1BnoFRrBcYRvXfWx6gehsZnLSFtzrKZehmhQ42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k3o4iegqDbH2sJ6qxBjbiJzDLEuQ122VLssiqYtpuZr1xhZG8HVMenzVsz5pkxqP7yXuADatFonsKWyLu8dnBKY",
  "key1": "3zU5nvw5Ycxn3jRaZBDZJk6Ckj6LyWe9dcXCLVoPRERTGbw1bKj379SeDXTEmySaPLYPpnkRVC3JsZDbtnreoomx",
  "key2": "4YjW5JpLn4DWX8bhw5NtEESHdGm8LJ8PGJ3NipaM6Mphr7qWU6m9UQ5pRgzyNo7QWKmmRdnD1zQhx8x3YkcQPFSX",
  "key3": "5XFEncs98m5ndBLq1Xi3SeJrp1HTYY8DFdFCwJMMRoihMLaHcpb1LewhRMvxPKiCmmsnupxouhkkFdykJMiyWruq",
  "key4": "4cUeNaS9oetUzde9NCeCMvz1SSRyMkxwK59cA6yeMqzWzVJd4JBNkMeQmKMetu2mpxwbEvXsH93CvupMbB6v2YXG",
  "key5": "5dV3Ayr3tNq87kef8UFXAttBgvrh9dkqRykwfkD2YZTUcFFpUT1X8oss2GHkamg4YvVcGKA7cJEZ1EYwkk5sLayx",
  "key6": "kLxYjRXHN6ZqrJ5QpFicoYUKr72sY6T8LFJguDdxqDfWKRcLpyoAT3TRzrNjYd3HFwzWcghmxAhXhxxavCyxf9m",
  "key7": "2VRJjC5FEMjrAAmDdSeNSesjVN7YFN4xjdqPL1qQXZLfba9iAME57Fk1WbMCyNa2LvZysjYEcieKihPfK524tPc8",
  "key8": "UCszsquREbzETpiDT6HvhXzmssHGyvPydWSoDfJ9sSEJ2CUerdhPsiZ71hMUouLC9etZ4oc6NbDF4SD3mzaF3RA",
  "key9": "2kbKtQ45AkF3465LDgZ6LekP4zjvpnRaGUkxfzkBFe8DDzsw4H5sw7o1eiJ1LyAwDhCejvMKCBnpU4WCr9qjmSrn",
  "key10": "4xSMcU7JU1sRieVVp8kHuejoDAMRJPukrvf4JooocQjeT7gmjJA2MtEj4murG9tBASLkQqhRqJtEzswbbtwV4iLa",
  "key11": "4oWJpS8cHbMK8VMouSEk8Y8xD5PXmZdrhc8pQpda6aexrScUdauB7f7Q4iBDjyzoD4uBsL6Lv13s4ifavRRbRZUA",
  "key12": "2Kqz3jSjSRj1F1QeSPfrKofiGYDm9GRQt8GUrK9grKf2L7kNVzfqvtxXLaqehtzwukrKyg413bVGD98hv5N2evqd",
  "key13": "4d1kjFfpcRXjHnWVw3TMmTNwr2uw7xRMjZmrX2FGXVtASMEgzcr4rvKBukwpmf6Jp7AhBDf5UsYo5Wj3HaiutCC6",
  "key14": "5gRCnjyapmdegXNvtgRHy9YDBKhvEMmm9Qd1ZLcvEb8fmFoWHyNrW3q33kNZx2JjUidds3rTKSf3bTdC23oPBRxN",
  "key15": "5X81iw4ouM18qHWcetQV6GQuatXqoAPR4wcfCtL7PiUjqE3Ew34xiQMHw6H18fBM3ij7411fT5rWh35MWr3DYR4r",
  "key16": "63is1rLN62bsTghJUnCFbxGKgG6GDdnM8mkyMsvxx6qt4mbxSSg33qLgjuSziffh2T2A7ky6pLePhmwAoR7SkwA6",
  "key17": "2fXffa2nnpSZaRtuMCj5xwnHYhupV3pu9dRgfhjJKtG4fGtMTQ79rMaCVAYMwCcp3AXukfTUZ4mSsHK6XYPx23kC",
  "key18": "5qU1Gfnh9PGxNLV5BovMzZkhP6VFbid31xhhWpUX15A3vFuTR7d4qWBDUphfqVKsrrTBbE6JMiWXjMFzcsm2EtTi",
  "key19": "2mFxLnwxZz4YVF9MeL411SRLAf52PtqP9aX6o3dt6HHmnVdBGXDMw78tmpWpqo1pt5zjoa2LJCJD5u5vm4zByJgX",
  "key20": "2rac4QfCobWYjymUn74KZDTDLZtKbZFGLWhL3c5EJvuPKnjmJJt3C2SP7okQYuAwnWFg8mhhKYHfwwjmvL3eLCZ9",
  "key21": "2XTe6f9V7C8irG32rpbRbokzddvvRLNE8diQZwU6jwh5t2tSppgBXhbStZfxoLMyJBto5h8kQE5GtHdkAzD5nLTT",
  "key22": "5XzfpL6wPvAMK7Nsgqjq73A2yBi5sbFkkfwSBQVfSe1MWLrSkMUjcFwDL7UC3tjLo8enJmENFToonyZREiqHPct2",
  "key23": "KTzBQAbLVuzP3tuL7DoxG4E4QtS46M5qUNYDXNXLEoFeHPYzwuvtZNzZwdVSx8iQutDhNWQyRhtk7cZu42A1qwo",
  "key24": "5pQLrNGyiNrzwZ1dHa9UMFmRfxf7nCJ3NtGYGTemNi4WbWCaP9Qk6nk4ZosoNbDoSez5zvCzLowVwPz9r7YaLrjM",
  "key25": "2GYYCfKqosSTrwWgrhNiW5tdcQmNogTYTDtc5hmN1bRt53KJFgUQYzdWFWGKcwcMCsdHAKv1eoT1UM6qfSy4c2JZ",
  "key26": "37N1JrtRt9oJHmcrRkH1HuLZxocZJvhNjyLHTUNfxmTg8PSSXp9VD9fyzda1VdaTGpuji2TUNRGcv8NrKVzkK9fK"
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
