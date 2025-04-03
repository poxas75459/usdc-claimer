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
    "3CJ2TnNapphKFaFtPgrBgfoS1RLpXUrqFGJK6xoUaZ7MHqMToMHdVcvsfGuji9MjU5eD8HMukPQqz9WbGQzqYhqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yThaYHrPe4FwcAHcaavCQbUJexacK7yKvenM6GBXbJ2NoVMYccmBUZipBg3bSWgLUBpK1kAUNhnWnNbKTCbkpvg",
  "key1": "42motN3zShhhZnxGTfCWGqjBkyUKK1A5VS2KJpEbTtnUPEkZkFpE2pauM1rs4HQ2ieXsxcozud2TdwCiWqnTBEVN",
  "key2": "DC6FaoiuytSCyPFZZVvL3wGJcNAdKjExb7XtCYJRXEjG94rTXfGzouUU5BHAxmnBLzWoj5nTWH4p4xZdhRVXBM7",
  "key3": "64Mi5S6Qt31GoiLAAv5YyTmm8DphQRNADHhBQ33yAbKhi6gaBiEdCGnxXjk5pvbfq55PG2tBwADWNnTkH1Q6gmY",
  "key4": "625LKkEsKpUVwAQqZqAvuiMyUdnYbCRsB5VQ5s7AM3dWra3EGJiEKUw8thgQCi9aNRMRLdVpHzWxkhoH9L7k46uL",
  "key5": "5sjqYgx8U3eFXnTGZcLdpmbPLp3Tp8gWdrNkmXPDwpk2fZnM9X9PFUk6txr4By7aGvaq55DLJjWXhGZb8yi8TiCZ",
  "key6": "owYfCvWRRvLP2CT2FAF3FBDcnWe43Jva821qRxbxzNtDxtFuNkFaRqzAWDvrwNeRP9aii8Ux5XYuTUL34kAjMQa",
  "key7": "5CUyEeUBf2KjBbhN1e1VAeJ3TKA2WEEXDpRuk6PcDFeBVuDdyigV7aHkcMTX3aEntg7HvVc6WAAEVTjvAujGJfxf",
  "key8": "63kJnTCwsdE2Vz72QMPDLLyebfaJVgbaTXiscSSXkcmtoJcQGDzA8GkKjV8kVkDj9eTg3zs4krAms27w13j6kwe7",
  "key9": "2xWumFGyfSYKrzPwLBFqU79uLZksEE63xVyMCqmJvphNRAEFDXYFajqtWRmfaynsDpWSUnuvWcJLc8f6UD5HP2F2",
  "key10": "4wWQM1KDePzTkh4Pohz53fCoB3EhEkq9cqxXn2WwQPLoyifeE9VDkbDwE7ujnLJJLekCsvJ1WMUQy6tBnKQG6xBt",
  "key11": "43HuWYu5YvRNFdR5RDG57CfbbSPJQAMFK486kjSs2uLPDhZhKVCuNNgiGe2z4ZAgxhMPLsJAvgttEJ8yXQnLJ2nY",
  "key12": "3Btxtkq9F5Vn7BzjMDG4xoSQaAHvKFf3xFqKomC1bM4vDiUfhS4o6y8TSF8i9dxGtTrwok2KWWfmBmqbxzJ17H6x",
  "key13": "66auQzZKJYzRcwphUDCk4VvExUYRHjSW5hzVVvYW3SPzsf1gx5RyfAyR7Cf3aE7ffTdjR4AQ7oM326zuQRUyHnhK",
  "key14": "5on6apFZ5A1HSGPaSdqxSmBg99rRpDpjKSFwb7zZnqRZaRq7qKh6ZnbE99mSQTJGcWUMT1VwLdLKW7oGRdwpw7wy",
  "key15": "2JpUdYsx3Low5yXE7PrW76gnA1Pw8p82rVMzrU2J6U1B8FVuvrSBZUSUD8fGfP8aoBWZJDF4Pd1HqSYXCa4BzhGB",
  "key16": "5J3EVVfGCTuFcYS4PfhrFqX3qprFbNLQFHqRF8RCpCDqASGZY9rPeMWMTAfsrpnS1ACvdkvAHWTLzwPReHFdAjQg",
  "key17": "5fMUhsVxU8wANygUHVLCyCda61AW1BkPbfwscE6RcdvUBQbQi2QgPby2DaXpoxvk4qbdRVpEZquwF88RBL3fNkTm",
  "key18": "5LKHuMpNhZw1F6are7ECnwDhz3BfHXEp4WnzurT1ZpmnoNZuyupjv6ewuYv1vFp15p2LLx5NLLMGMgoi8SiLFXJA",
  "key19": "567stCorbZo6mRDcUmFHt8SQZNj7qdNq4DME7enzUHGSJ1k1qNVtgFn8scMDeutqAdFUqcuh2ePkgpd3tE42ehy1",
  "key20": "2XRLkmScETZrNKHZkSSr5dR71kuwBXWjq5UgZ73y3E4hku9cadEqWAiwPit9a8hgKbCVagQsf9YX36JgbMtSZTHK",
  "key21": "4fySfhxxLHnrc6Uf8WAJvKPRrWPxprJU3ftE4ArYaYtrnh1grBxm51fZmPZYeS4uSZSiA5dbqyThgsaZ18PFSbkh",
  "key22": "2WuRhmi4G4f9FNzmT956DZuKjZBuk1cPXYfoyxYKvBseG2zQHfPfqmGugYiZYVeAyPi59m2MLPqpGwiCqrsEF8nH",
  "key23": "3Yp8U8T8esSxL4dxppDmgffEbCaQJEdUifWTCCdKdWczTzHLVGc6YvxzztCEwDPZXJLkc6kzCDYJ1xxDfK4kALnN",
  "key24": "4JkdUrjBijt1Eo56oQDSzo6bJEBBnZmRQs2H35FiDW3wcPkwjZBP4bDHeEBVATJqyhFXrgnbjGmqWWFCTRsiqhGf",
  "key25": "4A5F87L4kuzyhPTFC4sFWQs15CtznS8gVQmU65bKXfWpuhkT8v2hZrT1ZVzDtMaPGW8JUJAHoTnYrp6eJZqUuswG",
  "key26": "3EeqUQ7mabMUG2ZWTSTJCpCC2Cfm9MjZT4RsigTLZXQi5WPJV2eoZTFsZETyxuU54pjUkWas6yp4NnSnoExXj8Fj",
  "key27": "Puo7TgMaE2yMBp6EUtMSyeVK75dNYhJf4pyi3QvjQ9oLFGegKpyQH4RTKGPXMvdZkbjHn5rBvs39oYDQWsv2eAY",
  "key28": "4cRSJ13eUQXkKtZm2y52ScjdYRky3pjE1BeVYgxgTVvvbBBr8uuSQocwdWLPnvskhuzrBmomt4kyvD1L8diCUrnp",
  "key29": "2mbCFjVdYiFswHN3jbk26YVSjCtjy6yncgmLtt38TBEn8KyenVjwMyHpwxFG6zvD33SARcRSeVnzQKTdxvPPkQYb",
  "key30": "3HsFFawZqHjjo5s4xJnSWgc79EFzzHuqm3R9LmkhbyMmVvBJuZ4iKueJ4CFv37jUT7f4DHddACyZn1t2VeYvfBtr",
  "key31": "49p4xGS4c9pp6hEcAnqDJbDQmM1myuuHACGwLczhFDdCwqK6xFngDPTRMuYQTRAKgkaQikJ2mBZ2ok3gb6wNo7zJ",
  "key32": "M6oxZxtmKPfJVtoXeejAApN2gmcTC5avZC5XScuVXtphJDArmQQfLAcvMUfg59ck8HYi6zUdnGBCvYDZkCSkUqg",
  "key33": "3PtxyuYAFD7qxcvGkbiqhQu7hHSpFp9yudHaMyRd6gAXzexNiVUAQmEh8rhCPAE9t9GymZXGz9nAyRZXLjVfhLSa",
  "key34": "4kzv1PTMz8MhBFxK4TgSVcWTgR4AfrknNtp4ECZzDrQaa8QTfqLcLXU4aTVfVe92pcRbndFMDp3qA8hD6Ba6HH1M",
  "key35": "3GrmjiLzTzoACJUjvwUNhun29iHaJdKWsREbuKH8QyN4aQ67dcDm4Etxg3GwQdNvTGQ2Jn4KHzccXHEeG6CUNZ3s"
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
