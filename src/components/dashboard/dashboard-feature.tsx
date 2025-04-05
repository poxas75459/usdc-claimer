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
    "D8Tak3RxE4SEBZWky6ZjcZCKbNLpgqGCeqSZGiLLtndCePfbJY1mqaBVAfXDBuvCtXh7SA4H4LxdwkhEAndjmDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chPvz6o23MVfATe684Fp2umbvdRFaQ3qHs9oQAXvaGkU2V6hjeG5fL8SKkr7gkrnJBxpBkARQjCChEztuka2Xou",
  "key1": "4KZucG4jX5tPGEEqSvM9bgS4Ym6dQYR6wDfPkneMzTiQFpyLE6VtKKmCkGaykaofCFvygWkwKigRAM1dhLoQ9d4e",
  "key2": "3V3gMsvTnfvzDtS8m2sj28NrWsE8E8EP6WfCc7wdyRBjhnSjagZ1A2uHAQWAndS8FBW2BKByg6akSJ2U49K3AYUr",
  "key3": "4ji4Z2SbZhSkooPQQEv8wdNYyrEUKGeDr4iTYaqEcjeQ1jG8GzHpH22Y8eJWtDTtdXgu9t3UoQ6Ge1nEsZJfyg5w",
  "key4": "ipTygtt4iGLiTYFbhxkpv8kqQqNHjB8pUmcLh62K8sRXmCwysgsju9ND9Zwhtu2LWN9mD5g8toqYohQQfVW33Cc",
  "key5": "5X5Rr2Qicp91jSDidthmiUYdkdvH7eVy3v75hNDuNQgk351QVNmxCfKTtVcXbsJSFseTwzmVHjQNwSEnLrPZ4aLT",
  "key6": "kJxuvZDteeqfxABdb1WyH1UBi1CyT6a2VaLXzooNa96KL2G5Q1cTBKf7Z2oqLj2dAJ2z3ApEZunoDAi44rryTLQ",
  "key7": "4PjfzHq6iWLxKk1y3xesYvW6FCPy4kWFqHWXe5gzbqAeHjrMAKYpXpWa7MqnS4yBCoGegQMMndKs4NUM8R5u1v8F",
  "key8": "5FgNcMgSN33qAgLYfifao9wBYYY1kqtcetWqTCfi25LEt8KcsHtrFxqU5AiwuWbNTtgoVWM8wki6fioiXUahw73j",
  "key9": "3Pbxb6hbsk4PtYoCWxMBjQhNVxsmk5ATa4nNEAganrxi768SGEhxsZeFG1VJJhaLjSsLHAYxqcHHkajh44U1zuor",
  "key10": "6y4HyXwuFygnKRfpwx9bmnJ3vLTsPB5RANtP18RhgA6NfCVCcXdkXVvvLv4639hQp7k2poSgVicNoS5nbFzARxz",
  "key11": "2kwNCCp1gL3W1Ac4N5NU68VwAXYh7nJvv4S7aKDCaRQ1TPgJs8ae48jnp4tQEqws5kLnBM41fxrVccYSovdYreHg",
  "key12": "77BjqVksBf9uUt72TLgDLg7SSuYBeJKCo7HbLSWasRocnqWfCAzUegBZoQRPNDoFzaYu8pSapEU1WDpecuNDs54",
  "key13": "2wqPGrqN3Ua2QnQre31FiDDmcQh7NXm4hFH1MtxMBWoyR8SVEXhRfqQmaT5WbriQRDHZFuLb3rxZk7tiut4fwFsT",
  "key14": "4emhzuAdCpmfLFeCsz14qK88mKuARiQBtsvF5AfrLWaWs78zpJ3gZGovWJn5aabufKBTuVSmVuhWQZtqUEoKrVEG",
  "key15": "48u9np6FeDYdtUfPwguAtmW92Ny6hR3tN94Fb5ZNffRR2K7kbZqBcvtKqi2GXF4c9km13rY881k2J51DbBwFAb4v",
  "key16": "4dApeEC36e5Bu6CEncnihehWM3fuLWGiMPiLaBfEWjK9rqz8uHphi7MBgG561dKsokkv4VqPgH16NQqTRf2ELwfD",
  "key17": "25HKmX7T2RyRj4Lc1CMa5f1UqrZzrVguL79K575ULzyYXB6SD7AxSbCTN438FsZBC418SDjxU7wAUZQDbe54eP5N",
  "key18": "419gRi3sjtRWYiU7xfBBVYqDh1Gxs6NVcvpyJC3AVREfX9YBz7rKwbhVFTmGwgwiPoD1HGUj16KhVtahYogQCJAW",
  "key19": "5Gp3j9GrzaPYNrnxqdFYFKqAMcSLuCUvX1AjiXadL498myucDc7EkBTHCU7aCDqBWNzGDuYbiWJKzRG73mw7saN3",
  "key20": "2dzvwc2uPgFkDnokAgTYvujBoHsUAG5f7w498JCZTeH3JsbBQMVVqtDXrwHeJWfst3gcryhY6eqBGSNM6t9q7R9K",
  "key21": "32bLrGMhPmYGZE5c1zYSsipV9yPHPed9z6VzDfyw9VakHDu6aZYVgEpW5PXkwyNnWC3r899XHLqrkGpqP6igiEBb",
  "key22": "zGVi2KSjpVaYs52Gcy5RdshKwDJTXqVw8cj7qQoQe4BtFLSp5TujoQAecEBkjc9xR82xv3NqEVH3wpYqG9AYrDT",
  "key23": "5gMWnVaXhFVueHahyE1hEhgdiE3xfiW4yS5FuUmHK9YvSiQw436wrsCetjneubCxKDMs5bquuBjjwzFv5MYyPSpG",
  "key24": "5Mn6eKYCE42pj4eJUg3og2KMGsJ4gG6gd6VGJbacBferwhjYF8MWgQ7fxaKwSzyBMghRRGvSigqyTj7WeXqfmH8R",
  "key25": "2DYX7UaT3QoDH5h8iBFVrVSygC2WZaQei2ptEkMV8khHPM6d7NuQtW2b4Vq39BAmJKCb6Td1Kx4d5yhYLHLPMx8R"
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
