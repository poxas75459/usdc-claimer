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
    "4866XUvRGy8bGsAdbPUfhCV1GvtWzSUNZ6NkFvt7Eu36ptUgMpcrYvZPiJgbK6uT8tMFS8DvLYuh58go3kbEhUiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mUuS6Ha2zp2M3zuzRyYfyncWRX9FWodfHRTzrbdNUUx2dLU4hBHegX9ajNkhkGftyTYBE24mv9fiX54sZRSoNXt",
  "key1": "5jj44JcJ4nSQK4U8xkz4pjMpZWCj5uYf8w5Ao8KhjBPAfrNpoJ7axemCSmZXAvQniG6yKf5Jb6KEceYiv5172Vow",
  "key2": "4Hf18q3H6ExdGi2i2MDy7TMoe6d3Zjrv5ZAQDDQegaBkkZytY1xc3MQxvhEfr4hHo2sq95Z5u3TMQyRxUXGDxRVS",
  "key3": "4DwZc1nx4eBfP9ofA558BUdsTWFT4P3MPjknjBvnq6Fu4GNNZDHJRtbhvai6cMj5ow5PZFASEcS5wNhMfBS6337U",
  "key4": "3L4dKiNfbJApufP1iosH9J8FXU3TUtn3fHTEj599WPud1MQuX6482CwBTT6jwrVcg4eEEdNAEQ1Zo5VFSe7GD2fG",
  "key5": "4y5S5chrb25YX8dEABRrdQw1pSkwovgTXqNKaSR7Ysso5ar9F4VbpakjTcKkbKT2jjA3ihypdA7jp5NdFKe6pXdj",
  "key6": "4zYYiRbkJFMHaGwP8VuRqSqQf5xb4pWLVKJeV3TvWJk2naetJA7s5SkxjNazTcegsShMGa1qVhZjkW9tZa91Yv5B",
  "key7": "31gk44js9Cg5gXE2wkV7dYzUUXUCvRwMJJBDWqyg97n9aBvFq55rpqxX8QoJ8ivHjKF9cTM3pymR8WJ7FpnaUvKA",
  "key8": "4h9TBsJAUKFZRtM13mq339Mzwt9D6WLhZZpWjLwRErnsEWVTk38LDu9T1eeZRMso7ud3rLjz8F9nFpdfsp3iR8yU",
  "key9": "2wjGp1R6VK369HzU9nb9UW2D4ytMG7BbvDD1dumgwfZfLWdBVDNBYj1hsgNzZ5TM35Zn9aBszMkGK7XBFnB6Gm8p",
  "key10": "3WZ2LSwkwxxfYcQ66xccd4C1UdMp8NbBH2Rp7XQRYjd1zJH2kdB4r67xzMdrMQ3jvsg9o1woVmy8atGtS258bSNi",
  "key11": "4RNvdAACRDHgpBijxzw9yYkJXjJTqC8WMstHvQ9eq5TNqVfQuqGt2iPuaMnPXoT4rF5LX8qBCVA2WMViDJbwNDCz",
  "key12": "4hhddXQtwPCyRE3WiXh31nJTijg65sadsWK5GBDLJYCVdgSELfMv6TqSAJCTdk5D9qvYkcY1NrHJ31pBtdtLvyCx",
  "key13": "3p2aF84sUe6Wfi5x9pFwQNJuuR5FjmbGNZJugn3D5qesbqZMq8krhPsgLSEetqcpx81Mu564KEWxipc9vncCaB78",
  "key14": "4qK6fmNDvfW79xNuFPBmQJNRqo9a9fYwdQ9tRQy7GgmiBBgjdZM12bQpdJSrVB4ALP6ac2qcDJ1gcwKJGVyK7hSu",
  "key15": "5bGzjAJ2L4XezPVSsjsDs8G9hB8LC4kxGE7FneZt9baunhDX9NnY3JaCeGQJWxf53GqWd6ZSNdDRjGvRHnRk1dTN",
  "key16": "2fbrqDFX5WrZmoSHoy1sqkL2pyX5UAkhNumTuUwM4kRnmvnQZsEXSzMcLjAH5KQYokARyb8Cz3NFx8sYA8HTi2cD",
  "key17": "4RVYFezr1damn94qB66ii4oneptoF6GTVnaYsqRZat2nLEeSNMbxYKCVtZp3Z8hbWvh9qr3hJU8vpkWkifhGQVjW",
  "key18": "HiuWYmTwtZTy1kBTRXyfBPQDReHEYk5mvUcZXPaUMFRYrQSFSKh6VZ14rwkxphbMBHWhBnk2pk23eNXGMH85bHr",
  "key19": "mjSUGQjWeQqmVR9LFXnJ9orU28YyaDBmY4VNfZbk9xLoYW3RCJQrXHn86CGh4s1Fb82u2VfvhoE7QBgPyZJWMtJ",
  "key20": "SiAKtT96zqXZi8VVc1Hauz1FUmecKF5P8WFdfy1sN3Mf5EWnEsJG1DbeKXL6gkS1CyMfWRkPcqtqzvaib16A6Hy",
  "key21": "4gEu3Eqg9bg8WuoMAoFCKoJRe4HewTuuTvW5EHHxM5fTEvEiZLsqxmJw9E7qwKdX4sK7GpvAZbe4Hw8TN6YFJPkg",
  "key22": "36a3sDwZqMzUYLECKh7AkSQM7SyGoLTifNmzdmD5dEZBhEVHnZmPeJDfDv7oLzsY31JyuyRSGGM59RKEEviGJbsH",
  "key23": "64gLN4WmgptBpQRMzKq5aunTSAKvwdis4Gegu7jDiqtYmUhqNALCZWbwZeAYD6jXbw2epBZXivQao5L2wmCdeD6Z",
  "key24": "5MZT3r8SC1XqyHPLMRxjd6KnTu3P73M1BhZaYK3iB46CrsnDrmNcUXDwWMPSq6v1LFamu28vznWY4pz5QzbpjATK",
  "key25": "41PCukjA3LhaXjELNAKjMom8Uiz2ucroBJtPkcs2APdUzE22QRgoCMDyywUGoUXUruLpss2ShcaB5dgbo5bjc6Nc",
  "key26": "33wm9dXZnfRRrS9Dqhd1GkYrMugvUmT9MTa73eYJRH1LxcS7pGFnUE53QZE2tG42esQWKGembKYTehwHLCe7ti78",
  "key27": "4NhGBpE1yCCnaNqKziTeFuB4Pw8wXaXtdaNQBu8bAvm5uLQpwnHLx6jJnvf5V7XAwqhMwgvDHMh2NmjQYQATo87s",
  "key28": "x8EHaE8pLj9PJuNCrbBjJBNuU1E94YRXstfr852R4evrYNSB6ifdhpAr5PkkgTYiUSZjJp8XQeGQCnweAnwGqNb",
  "key29": "2juFf1Mq1SafKB4NAUnds9MXzqxKuzrjp9oou1w3EtXYfdJPWKaNvatgH8pmWv6RJRjBaZ8pqdNVKmyr7AgXPg7o"
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
