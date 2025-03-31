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
    "j8SwzccXr5DJWArqMF6B5JkgzjBbvQNKuDb5KwErQ2QACaKipcfBhcdYXcPUfYMXQgEpmX7Rk4hk9kGfUdRprMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48dpPzu9YTLxc4KDDPNBbQZDsnbTj12vB7ysfSoUm1bTkjxvN8vXRPPQgSsi4hAfW12j2ZmTaKnd753xkPqpK4ij",
  "key1": "5V66V7v6oEqhhHnTSRkr39uVRDJFcvtwhc2R6M18a639PxTfZ9p62R1CYitB5ScvaFqTVTwZMmvrWsnqMTmdRcua",
  "key2": "YrdCcT74fUc4Gze68av4JXEedyES2oBjTwLQfF53617X1UXbMm2cA7NmWShto2PX3EnCuDr6kBqCsCLo162tK62",
  "key3": "61ZfFEwewqYVmKcKfYvKRXoN6UPep2KSbm98XqBX1URe7SvtFuvHMgerJdPyraz1zMNwVnDrkkmmpnNpqv3n8W74",
  "key4": "5xcuKh4j1Pi3TciosV3tqsPh2vLbLtxhS6UoMM79PA9MNjiVm5sMBTjPfGAVTTseNRspj8XPMrYQrBM4ktwVvyRY",
  "key5": "4PG5WhcTcsEvpjW2SCHzzCUgXjtQ6jujfPXUsizk6XqDCgfDEAhSLNAJ6xRG5wsHSPLVZfvUvgWFvpZ4aX5vBkWr",
  "key6": "PqMfg28XsYQUy36bDQGyTos7cmAusVMvGscyf4RB9EbuFNwvAfDvR8YCmTQwZ17pXt2xz8jP4YAAmsZz84UaxS7",
  "key7": "588WQFppJMp9q8FBigQGKkPWicNhcUhMViUKHULtfvBcpARvKd29CUSbAYEEgoTYWjcgWNypDRmAcF73bRwGkfjs",
  "key8": "v9VpHptAT8U5Kc4kzHwyC7bh9yuaAax1xyHSKKvGAspuh731RPxzVzcF2JyMEqZTgJ9VjKLjeoAvrHfNmqsjBkE",
  "key9": "4BU7PHKYn4MWpHDuZwh65Zx7uGdJYFYvUWPXNiSEcw1Foxps6hV8i36pAt2g55cWuxi3UNuQifAv8MTATbGP4V34",
  "key10": "4h6tZ3pKuxWNuzbJ4Q3EhczJfTZexmGmZfLPSu75PMjK4mvsd9rf812gT6VPmYj1zL3W8cvDPpUyv5od8dMbmy5T",
  "key11": "2NjBdC8Uim3UxoBqPBsFM61hL5cRZVen5fA2ei8tesSwabbYS8TF3VRLzKHNnCSPtw5wzqXZoesNmZBPyfprXwix",
  "key12": "4zhbbQSXQTgX9NTvDj21XQemhYrgx8zbsGEpdEThBWjiL7bdTAWZZbgupN9TcUaruKxRawANgPfxNYKsLqQcu52w",
  "key13": "4TvP5hEAeXjMbyUGYbuiLhLAW7YiR7QYKZNLkiwVyd5nP1a7xbf1YWiPw7abuD9i7UYLtBx3KogGmPE88fRFUNPF",
  "key14": "4eKUXQtMGQAgtSmuxp6tKVZ7kwtxFocTTeR1b4gzFpDTYsgzSvmDdUJ7SPjggA7Mj9cRPEX6RQx6qNWkLpajVqXk",
  "key15": "5NCRb3nUDBoKTcXGyydmkvUvAnRPRnvcFg32WbMCtTA1HBrqnYX2oE4dzkEpkxAtMqgiW7Req54bf3Y2tyCmq5t",
  "key16": "2vdNctWbj6j2dEaeos2gU5jy5dHa8Q94j7AS9ai21cR62KrYiPrPDFTGgVCxcwS9L9wkrYPBprrmY9Hfc6oYVWqP",
  "key17": "RD3xkCsvJMFz4fK8TpgmVi63yRJan4YVAkCD8sxEomfYhZjv388eGXR3siG9qWNg9oxCmPHyiUMTMehuGTNpha8",
  "key18": "5HutvAhjwPNjWGzfJJfiWhgyqECgocmoiDUgAPj2gpc2yj4Y2gGajHKbDLAPj4yV9QMZMhrG8uqbK67WTX2ftaBS",
  "key19": "xXoUSqFTAWhgEBEguq6kvTiaB1XwjE5PuKRkr52e1dtHXesL4KH9Y4nDf41tvevs5Szj2JX9GAMW2ELpAxwCVUK",
  "key20": "4Tt7x1MEjiEVViQBnKehVTUiuJgzigKvvg7mSWKtP4GPAo2TKcGBnLEEGRtH1HJN6uYkXixMYHHiwGyRxJnQmMFo",
  "key21": "2rjrfeqksgH3hKYxDAeVPnH17dsccHDPUySRe9b2FZFKzFUeUsqXwGL7mCk5qcht7cEfCvyNgCT7r5nbaRwF86jB",
  "key22": "4NrDhxca9ZfZdGmcUXHFR93hAyksZ5Uj5wEycsSRkgwjtTPaEe4DdB5dzon3LBEieMhc3PQ48wXmhG8TEuZQKqnP",
  "key23": "4DHvmwhmxUwRGgVu3mMUgArJxGQLbQHCwpmi3sT8AQxnGm1GoqJtUawcQk59DnA1x62pdZKQdi7g1VJ29EwYJ5et",
  "key24": "Cw5MFUz8VaMxTNXZNjtedA8qEtfHHmmuyFUJyK3f7VSqR2UAEMmp6Mei6awskXqzSfCwnzqhv7HyDDZRyk7JrND",
  "key25": "451KyZGCPFC7ZHVaFF8w17JZ9qSuR3BrF6wz6dXYVDdrBfQEgDhmvp2XaN3BnYJnrzgKv3pZuRrMXBM9RnphknaA",
  "key26": "3RNF9obrw6nsfNELJyBekowJ6C8tbuBpiSHj9C61VWHdfn4rTeu9Rhtc2Rk6RAJmycfTcJGo5m87jWgnUdNzMKSe",
  "key27": "4hS3AXfGJJmuxuQjiE1RkQvA1KEETCvSdmWanzK31dL4ykcKsbYmRqyMct3qY8h45FqBjP2yNDchDJeRy8kvA1nt",
  "key28": "Yaq1qMSRLUXgiiiEFaugKN7Nq8riFBNK9DajHdS3casfLs3VhB99Mkzu13ibG1gsMNs2GzBFKig76Ta6SRm9SuG",
  "key29": "2Kv5h5M7SHqocTLHmzuQZPVvzXPYQ6a98kiBQjZrBAiQrFg1Urn2nZCEq97JP7hux6HiMvFgHZCPBgSTz4cAoNUM",
  "key30": "3DAxe6mXo6CUYFjbzJBQho1VUNahn4m8tRxWGWv2QXcb2VqEWCyX6ZxUMrwaTr6LxskkaJkG93JZgf4uTAkW6k9t",
  "key31": "3udgC8ezWFMzjZVoCpvE2rSFe3ywEga7mkjHML72p3fUQMCrX6mKiqXsJLgWFoK5LU7YfrevfaysU6gxyCZrfLY2",
  "key32": "4qdE3ZPiuz8JpdpJvgrWPHnebMUpgw911aF8yMVM5QsaNtPiWt3yHHNZYQMLXS91ACameofV6cU1zDVfEbNP9CLm",
  "key33": "DYfaiRMfgPT5ZkQZhk1MMxc99eDuiLq3rCV9fKnsYPxu4qwymtnfaNQ7Sa9SJCkq6Aw2DSTpyiuqAcaaRPmwC9m",
  "key34": "2w58tytxaAhcA6pofGadiA5aXxHdXoRNUUcn1NpR9WymChYDGkE3uuyrD8XzugnmpvamyTHL24ocgsKMujN83ZbE",
  "key35": "5Sc2g5xghaNmt25yXT9CJR2JGYGbcBDXWrMy7CjwvzZdLZcov8fG3fNmUGWbs1EvzyNtfXbfbvinei8aQc8J8ypC",
  "key36": "2qDe5eyqfPNHe4NEjmByKUuSfHGxMxR3pwKcBCinETXAPkkd6eF3pxPYRh87nxPfSU2aEhYcyotFQusmyDKu5C2w",
  "key37": "5rz4agkZnk8XnCd4TxmN5kPx9Nj3J4FCdMLk3P5SiaPXKgErJSEBkHtHz6u1vbJVGMmmACw8Lz1k5q15rogncmJ5",
  "key38": "55WyfAPx2GbY6oyNCsGFtPG12mDBXXLmYshFPFX94dtnJNWThje13XSzcbc5ZUbnFJBjmT8gwrP4wJ3sxWZLivrG"
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
