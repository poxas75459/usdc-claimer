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
    "3ys2ACTZ6sES2sr2aPHC7VjnzULo6coFVEbMcDeXBs7EKCH9Bxdbe1wMkg44iwteruunj59cfBYKobA5F5snpZma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bNG5gXMD51k8ZVvQtTWPTi6yKNj1odUranF1521AkixfURaYm2YPMgDBCcJgioqaDzLVVNg8MgRnvdgi5aiPiCz",
  "key1": "7gRHr9zwqAoLkPHbgYTLdj2aF8iHpEXpvM5wnenoW6rPqUHBgvVJBgVDQZWMw9mkHeFhocQXnjwBgoTjgrTAQSH",
  "key2": "5KnYyLQ9WnwjTgW88RD1gMoNoWsfDEorYqUDXkN5uBEsbkcH85s2bAXLNJ5xETToW4aBUgiEx85CjMQ85eB8wSLa",
  "key3": "nv32J9uh1XrBo6kNrg5vuviw5QDR8j1YZSHk7pmXK1TWz9uvEoDGpvYA49rJkDUSX9nMwoPP2UuoNE5WDbhBicv",
  "key4": "4Qw6psdp1X1j6UQMsdiitC141zfV7awCqRk1C1tVWU6Xd1VfYCk2ufVj2ddVWEAuJaNGWydxgqnM1TSUoiu9Mvs",
  "key5": "5ZXgAgnm5hjcXaLqh3UjFav5QQYQyxpNpugDa1MEHsodkzxC8vmDQGFhiwCWgPcKdLE5DQJdNr7XQrJ126T9YGTR",
  "key6": "5LHb2rvAF7h6zscFaU5BPf5SB4PSegsmw2iXkKx3ggTm8HEpEZeBkaRJUwRQxqtFDnJZXjMgDThhfpC4p5TKbRPV",
  "key7": "bTzweLmEDSXBKG3f5F8fGt1ABouaoXtDKUyQxz7dXMmuWEtTGEjiwutgQS1icgNLeHdtMzVpJ1sLZWemwyhjbFY",
  "key8": "nxZovQVEiaAPE5UPtAWUWnkjAhxhj6KaePrC94gNMGjJpEkwfvqgd7nw3Sm2dajJT53jogPeDbitcvAGkjs2N7j",
  "key9": "5Hc3gZ1sXiFgiSYWg3wusoQpGZBMAiUutdRbLoZqm6gomQdAvLQGrJCCWhDmyWatGP9SNAgejgzHtbVnbYgQmkCb",
  "key10": "5DJRdky9zrvVgAzyTDqg89WKt1c9TQyeUoPBCKUF1ueNeUJc6JeyByVgZ1uYeQui8gUDTEZZdKPbc49hefaXNWR",
  "key11": "5jQd5cWZRhmgUX9VFUG9xaiudTzqpek59ohQkiebe6HZDTouaD1XEMyD4qZ9KEt6V7bNZ2evV4SEitBdRW9JfyAP",
  "key12": "5hPswmqJmfeKEpzc4H9L4ZyDRvTW4GEgFuxbkZR1vGQUmpsFhFKnV468NVw8neDFhLuzoEwCK3mZsnAw932UB8DD",
  "key13": "4kepWF2DyirqRyVLBjN3hjvtURhSCN5LhHNrb8hJhG5cohSFmhDaZePaXbCE3LrqC62JEd7iD4AxpV4APARbcqYN",
  "key14": "Ck3TgwEyZyUiVsfKn9C6WwzpS53Sv25w8H6skiZjwmtR3kZL9DGDFsf8MSvyS9HS4BWDySG2N8u5mgkFtdmXN2P",
  "key15": "4ikj2XY7Egdujq5p7iBPm4kjAP3Y5sxB9snb8XqfNLXs1t4PTeCnpzLGxmfANSHkKYx4C9VmXX1koHdAeUJSrXSa",
  "key16": "65wAgL3K7usbm3PXxZkcM9iLxa9NpGr1ahGRZLfrGee39iPcwMp4ZXF3KU76Jh4gyfs3kKYsQSMfNL5mFz6pYgAM",
  "key17": "3w8McJaFmDkXf8g4kJLtobKDpM1vC1F9H47AGBh9dpCCgNhzUGebRirrvam4Vk4CjAREAnegpP35ti7hNVQWpeV4",
  "key18": "2Hn6E99bxBcn2cCp4UEsYYqucG9rCTuWRbeUt4xEaPKdCCgduzU1eEwSqxox344XX68ySCmCXgwqVv3W9oXa2iDr",
  "key19": "5dWA9zTAYF7ubVJHTbSuLvfvPs37BQ23ctHRFyU8xQVB331BUX12nygs9ibcLEBydV2j8bCvM22ovscPvAeMF7zk",
  "key20": "4dxhJfA9PmC6E5X8cNjjn7LyrZ2csxEg45EfXZLY6vBUrH2nYGSvronGCjHAW7NKmH95DvYU79A4meKM3dnaqjz4",
  "key21": "2mmogdrGBUFLB8buCTDsKgBfuxWeHPGq93Quj9q5VQQt2BNqCP6QW3bdEeC7xmn3mw1n53HrnVwS5M4W12jost4F",
  "key22": "5Wv2YwPXftDS74SAjETfjXsQJ7qSQiY7SFTDAq2CRAWzoqmHxofhFCHUsEv4265odjbPowuF12kP3gK4AArySrm6",
  "key23": "2jNXJv3w6eBUpYjAPTWmnq18JodFnasgtT8aa4fQ98paLpuCZht27WcN2priM7xBv4aMwNrf7rB51gkeeN9JRZYK",
  "key24": "2yXiM4vEKJSZMAnxK6A4HFB1hbjVMZ2LM13xp78LrY2pDKubT9jKucEb9htJxvMv1NwHwwKSU6HL3FJwQ9gTpV9A",
  "key25": "6gF5us6yw9PgsGk7iyURqYfd2soxhpEFwDyM7EgADzYvxZGkTuJdKzrhbxJo8RYPojsCuRxMJXU5JgxKUgoSHBY",
  "key26": "4ALRW8A9HP6k7vNsdx5CmVES6Jma8Dfu26AaEi5aAY3ipqYVAh3VzwjBcgQ7haVsiMBKmAHvqmPJ6CVUNRvnZgkx",
  "key27": "A159mqodginYPaSiy2voo1M6NondF7esWxLUUGfffTHLwr5hHNn42am5zVoJSFC88Zjh3KFdnjT7dh7vXCrob8w",
  "key28": "xMiEC3gQrmLCv2p3WXDPeDdGc4VkDCzkJGTRHgvTWm1UKVTC8DZyjBebNRW4aPx6i4bGq1kjiqfPjuTNxjyW6bu",
  "key29": "2YkvhQsFJxD6YZrKWWwrjHGwDs3MEkhPL6GM3eBwUZmGxWrZNsJVizvU3bgi3VvvPX2WGWhuevkyn6Pv2aD6MSWf",
  "key30": "b1yv7bV3BZynhjPvTXd42wWRwespcpkLuURwoG14n2TSVm7wcSECUDVnvRqFFt4ZE4fNur11GdHTvWe3VtZgNcT",
  "key31": "4tr6PAFAsedyF9rwWnACbyqKRSokQaix8y8uskLLRf14akqz22BCGe7deq4wHF771Dj6DxJzhxHG2mtCLnkyCpmg",
  "key32": "27v2YJeMpfM8pedUPWmxQBQ9eHTMh8iYeuwmZHrP8EBbRgsmre61A4m4J2m4TZ7hg6fjg1ofqszS9Y14WpTYEPSJ",
  "key33": "5ECsK6MoVipp1yyaxxAwuo5sqoGNMDNs1quTXkGceVAGozWr8fZdVjGBGAhv2iG6gDYRBZ2WL3H2ySemeyTyNVC1",
  "key34": "3FwMEF45bTFmKRsDR4irKcZ4j3KcuXvPuyajho1kvYSvceqKBiYgFTJkdJJbRAG2DNaovH3YcLenx8HHeGhaugPV",
  "key35": "huczw6wDXGPHkPQBhLjHazg87mVPDUAW8N3XEGXdkJ4fHzMWCN9jQuSx4QkMnGkPLRq9qSaaLb1YwA85Bpcc6iJ",
  "key36": "5tiukkihqvwbTVxUJGWFCz2sGFKXbbVAAXJCZodrjw7VUN4zxykTv4CgAxarzFPB69hsdnpEo25h7Gc6q4yQNU9H",
  "key37": "kuQ7drfHjEVybgAk5roVYEEYdJMceTdH8Zg4At9wSKCs9o1HMx5w5MaG8rc5BEuiEjtPsbz5F7HxR5sXDApWdkH",
  "key38": "3HvKXrQozUJ8DWH5mxAJuEjH1Q9DEP4zx22rDeG9esnANb3fb2Nv5WYjVsyozx9RYrF26PrgxpU7twpXcq3FFz4v"
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
