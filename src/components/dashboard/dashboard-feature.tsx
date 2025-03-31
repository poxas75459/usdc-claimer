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
    "2WXpQMKJQkejm7WXHxivmVucGn6bxHpG8VBHtoSrHzwahqGU7EEquiUG3YvmQStaSwxnhzxL8U5y1remwcB1fjz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9eofUQoY3UpY73JDABJmXcfMLJFt28agq4hctp9ZvjCLAnJFydjaoz1DvRUbjsQfofqyLRcGapupk8srinWhho",
  "key1": "5tXZC91b2ZPEKSUVuiDdEJh6N6xzpqkSiZGi484H7bxGnFELpcn4RDtR1LM2sTfBgqirnnwHovizpt5HrYEBnDgq",
  "key2": "1weodu46osxdpzTT4AvskCiKH6PGwM8eQG8RHEdQptTSkWZBcbHBUqQbYjJ416NMmjEfEMFKYih51aXLkm8c9UW",
  "key3": "3PaLdKujQixAHdVeA9gFfkDuL6kBFnzQ4kc17KGzzoDmiED74rCe4iHHqb8i8pB6eWnYkobPgSoAJwyHrS6yC1Me",
  "key4": "4oSPeWLTJJcJNkJtZQ4tRJgM9bniuc1c9NUYHPqDz2VdWMCJwnBxDJ5okEr4dsXGGpnbPSNrLpao1N4LD6HKeE7Q",
  "key5": "5JJvRWdAsjTCCo3FhTVsaHmBJDc1SyMdHEsfTBEo1Ui7Kx1cCHF5atgthzeXsWkuoY73tB4T5kBEwWtiFtPaujNS",
  "key6": "prrBYWrLr2sBAw5kcu9KLbk5A2WCVEjLm1hTd2oajCQveJqsfGDsUAn8VBpSgUqbiQV14V5FbyeckHuFBcEqjmt",
  "key7": "49UH3orCWhy1ja7sxxD5wXgzEnKX33eHbDFLQdAAfFVH6e3CfMeAaMAtkXTQ6oWBDrHWCnTgn1gm1N4JGdLsRM6D",
  "key8": "5C6FjPxL296HszwSabHpWvdyRiojqdqcMSEwmMXD5hFd4S6uPK9fuNrxtGAUHm5wej4qxX4tssKuMnGcrP1Et53x",
  "key9": "wzb8wUtU4RuXJUcnqc8NFUogvZYSmdkL5XUHmKXpi2DiiWXurz2FBPYGWhiu5sQ73pAQsgmJCy22xaXxy7n8CWb",
  "key10": "2NMbDntD5XNTd3N8WUVXpJopjpHnHJXRVFTdWpUyT3Y9L1skF43spzfy27Z7Rep5i6YSYkGZxMusDzd5yWa4jmoN",
  "key11": "379fJqEqf7szwxGReGXPLxB9XrgWQ5PFVfJLLnjPSqqMfGq5hR1ozd2oJsJfGQBzgUDCMJggATaGYrXAnmLSqc2Y",
  "key12": "4VxW4qrPRoK3TW5AuYFgEDTZZQLGvSk7om8sLD6X4kFBzno4xgvZ421Vmuz1VRxigUeGuuwabDnstp1BLWkGzhg2",
  "key13": "3VcBaXX3uRZ92bXvWFGnDSKvUCNdCj5H3YVFJmMPUybxPGs6dXZd83n5s4k6dvKdoUg9uujyee32jJCdZcvttYG",
  "key14": "vKPS8vvKzjnRhoBQVDVAwDmjxGgFQSWnafN5XVFsuiekHmM1DbrvgcisNov7GnbyE1AiQsrkxNuFMjAXMoQ1gT2",
  "key15": "66aeE9VjjCQcxEA75FzemNPhP9qKStFLxysMoXANRcrN19LPrGK4E8a99yPuUs1UfL8zLcttnkmjEv3VGRTxrTXA",
  "key16": "2h5E6qUSgPyg918E5gp6m8nA2rAqrsuCAHu1FPqwXFbSfywurYBY9Si7qgmgRAffjcJETshtipXjBurqeLyJEu5L",
  "key17": "5J8T6itYzuCRJk2kEHdukU1eohP2CPDTn9ySn2bUsDafEdzRd3fp4QRzk13zKpXWzGBTTLnUsjPW16p14m9aSxkH",
  "key18": "3oWz8Ka3NKzeoNiYp8bYkikEG659E77ozSdH3RF2W7k2mUk6ggBw7oz2vb6Muz2TV75PhvT6jruwg4nmSszPHfFQ",
  "key19": "3Txw1PGwyxvW8dw5AHqdfuvW3bgSDv2T22d4Nohv51E4qtCkyZdctSgt7S3DLD4yU9Z1TVASWpNH4z9z4T16ADgm",
  "key20": "4FXuHd7uifteQsajKCGwHtjeEFL1BbNwN22JruL4yPYa2PFBRptpfquL5Ag9jeCSkn8b31Xa3kZVtSAuGtKYAWZz",
  "key21": "3oN2DgLuJ3bjedNYW5Kw4NoMH2xNpFBaFczsB3KzEGVik8idgqyV92HomcmvRiH3QoaeKPQ7NH16ucih53qC1opa",
  "key22": "3h6AVfkPZKFSLnzinjga5cwgXomrXDn1yNfptDWJPc4SDpEovs4GHB1uUCnQsUJuL5RG7kMQXquyXAQzMSrbmJuF",
  "key23": "5FJk55gDk9R8ZfHSeFSiGT3P8aMXH5UgCNdRdaAMnb2u4CAQvqXoPDGij14W6AuuRZYXSEX1yuYX1ZUK6qcKUaw8",
  "key24": "5XSPYvW8sBccg5obJF3i9uqn7NJm2dWuMUzJ5PsVyZiaJS5GuWppc4VCMMXeKzW4rMbsAQErkvcCjUJsbDc4SDSS",
  "key25": "5g41Aqi7Afxc9aJfn434h5o9CZiS6LAU4fHiDsr4L8LkjV8vB6r3RWnU9SE1AVS5szNFDxYMG5EtZab4SUn85GoT",
  "key26": "waGfVW86Cz4QXyemtjzJu91uZejCJ5vWLPjmtGv4QM4E6XeqtWoPPrRneKYVuDHiaJwmbUY9SBr4YudRHGp8YiL",
  "key27": "YZenAfSCg2M7qC89Ra1F2jaiW1Uytwv4P1VqaCpTAHDWW4xjEwPgvWEnvyPWAFAtyEeoa8EVkYxDzhjZie74Rrp",
  "key28": "2r8dbEc4CT7LfBhQNVkz6pVjhhqbMR5JEM3DXUJisNqC4C6N5aop3a6MT3f4s4E1FGTWEWyg5uuyQU3EwRuhB3Nq",
  "key29": "2yJBwuKKfmN8EjzLYEurumE9nfYMyNTJ5CpTQvE4HcWrLMAYxqmvK6auQy8speKJ9Ao2oQmyEAPubpPX9HgwKFes"
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
