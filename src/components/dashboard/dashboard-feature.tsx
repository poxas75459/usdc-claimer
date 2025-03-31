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
    "2rRABtT3m3cgQryNpxiRDyc5QUaKGrgMMovkY2D6UPDjUVRdwfwemRip2XkAmvsmojEaRppEDdfsgFeyawSiD8ar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kGuAXMba9ZXbBujYFyv1kDwiAXNdWn1nMCLGDLCkBviLLfDK1W4WW7X7NMn3zuEbd5H1XMf4EwRkWV6Hk2FY1yh",
  "key1": "PBhcxS19Np9MWnA4AkraQYoop6vHCahfdiLCwavCeeFUbM5pwxUiF7vtVtsPfVfq4M2cgJ1VAt1SR8UXCHP2YCV",
  "key2": "3LtAc3YiwZktAuM5ncmJ9Td2WtMdqh9BxfGTLTx6XPBa1L6buA6YHpzYff1ff3AAuP4j6HqKptpusBBaSAN9qD7W",
  "key3": "2wvuP9h5igf3XvQf9N8wpz7GDT5e1MgYeNyJid9gKCRKeVYgSZ3MRny6KXLzH5Lh3K8RCg5SYqGtGgDTcHsPQig8",
  "key4": "3keyKSbi2XFfcTWqqEnny9cpAJHxAKYsmMiAqUfVdzuj3RK5FsEaYhvRKadP7TeMBHgHL3PpD4FShqzmEfRAZJF5",
  "key5": "5fbUctALtDAuKBq4H98nvF6djzkGVzAFS3L9EuFD7yFXqpMcykSzPbvx4bEybGDgXyGQ6CJtEw4uGVEws7cWnoUV",
  "key6": "3ekorvKQprzLfKjTuHxaZLiJvMv5B5hMRLF3mV4aMXnba3cHZu4vspV7DFUMESCpaMUJMqhNHfBNcn5NXFQjXTaJ",
  "key7": "549XEVx5eTRw9N5tGjYUqt7csCMDzEtNXtyvTqdWWd6p7TXSX9aE2QWHLTtWVh1adcbGrqWaSSJnoiTk8qhAkYPX",
  "key8": "2iZgva4VVju2CVULiTTsR8XdxL3W3BGmVA1uhKuQsGMbSppLGwbpiEAUfiboDzg6VeZyg62oRCUmbLePGK1pCoHQ",
  "key9": "4fvxVFD1AhFsjWcCq9JMFSVCRPrxAEjipr8WE5LXtEJfMLMEJhdbgvVCtk5U3WTAiy9VEVibqn3XzsZRK2MZi6hk",
  "key10": "UwUKxcLd4YKYeMFrgcRkxbAg2vuu7nktW7H4bEDwWgxega63KiQ5sYKoXbQsfQ2RZmBrEXRwq9uqpX8E11sK7ds",
  "key11": "9XQpPjvwfuH8QcKoSPegBjmoePaPQKor4HNyXu4ZSR2UMkh8cZ7ekaiGD539HqschYjKD35wsNnHrTNfkXSEz1B",
  "key12": "5r35bA5oT3ktSV6r2MWUGxpjoTcmRXUXYq563RYdJ2KoZJPNRhDXzrUKnHPkZT2bv7QyfR1SKJ3w9cR67V47mrdY",
  "key13": "375hxMQFAVsnAa43Yfm4u31r1ZKYYLMXAjxQQchgw4YoiXQCVwYV6uyUk4dhwBQ8WfDvhFkzQk8PTH5ta3WBD9t5",
  "key14": "3mw91EmaZARyCxtfvQoLDzQMBGdRncUvMYpFssd2CyYaFMtwtZkuMj2fpz6pGuD8bS1ZdqK43zkDcd2Kyy14fCQu",
  "key15": "5Ryey7ibBzhq5YqwcGbzuXFXcnTFPEVgpgGuBceagGa5CSgenzavhUCvP5VSUCN4k3MHLHgjna1eqUyYjFLWB8Ze",
  "key16": "5W7b1Wpqs5e3s6xyvLcXdruMndzqgr7r5j22AtNiftS95KqW8KfRPtEuMeq8JiGA5K7UEkrYfr7qB7iFSQ3ZW8vm",
  "key17": "4kCZNpF6Ez2MkDDAJ6KtdAAjbYjgT5RrAJy88kxVc1fygJ7FFGvgFYxoaP8EZnHP464CKqmJDoiQwn1HVwkrHyoh",
  "key18": "35vHS1nMgYzDibnbqMwUmRynPvz2gogChD8TVNRq6wfLiuFbq21gT3aGJGq86FjbkFp9F5buGqeFCJe5fYky2TX3",
  "key19": "5Q5KJ7jnYaJ6jKq78dprNa9ikp552Pdzyh6vTsYAcQ2Y48jVkQxLeSYgE9CK3xpHAyQcnscXMV36NQumXPBqdqYe",
  "key20": "6448DEzPtvNxcLM9rNcu3MPazWLPjTjXvqwPcTKzW7iuHGCTzthwAzokXKPu8g9ZBngypMmhANU21YPrHFruHfTw",
  "key21": "3QtkCy8HExGjeUtPg9o149kPE2XFwsXgMSt2UNgo5Uo7VDWsisECAt59C3savi2NguitYEk6MPEvtiswBTZFxXJ5",
  "key22": "2zFHV1rnLheZwgdbXihfjqnhGnJYRPF5ni9tdqJ7bpK43z1sK6AsTddxRs9QD9oVb55Eoi3JQvY7hw2FFTUWENKo",
  "key23": "DkXjd5qRq55MDaXhS4VRbbXi55P11icmfRHz6WKfLrGB5QomyYA8ckKgYXBJDkbGCSCn3hjhkZM2Hec25hQzJeF",
  "key24": "5WKP1pFeeT4DXBSWw7DpDD9zhwv8RRfhMFhuBUdrszG6JiKjrjbr1c9rkyNaD5XS1wekeWBrHz7X5aQKEfrxBr7C",
  "key25": "AYNqtneZPBfJydaECMV5ro5gJYjJtvAAggoF6h9tZZoGg5dMSCzo7XtEEkBMKqbYjv2NRPbRd9JoZMg84Apiw4k",
  "key26": "4kymDrB7dw3h5aQijyVs6Zzq4vdkVHeqisxRgCo4Jy4Vktbu2YGBjDt7KwRtSwnbnYXt1h3RyLt7g9zHDnj4MW7u",
  "key27": "3Yz1zcCJFyHX1gySXrL4w7CkzMmxzenrsehgGyWPLR4pEnsnBdxayywzUXZSL7kisGQDd9pcep3LKL9imGVRKhdE",
  "key28": "3CBY8Mxp9ghS1bpSBcupHMpTGy54X7Yu5USEMJqQBQsnYaQ7yn8s2mketqLLXjxGBWKfQt2CEiBTiyEBALB21sq8",
  "key29": "eSwKJv6ac3hMJaz64XamURZzqVi1aR96e49QAsAnmjKDXt8oCuZkfPmYbXCmJckpcL5QFKHSX7WD9f34pTvQPem",
  "key30": "3pisEzhE2Jc25g5vb9AbMGHdZif7kxCE8oMzio2GwkurqyKR82kCGs6tQmcKFzKZs5ChMhNCuyhFN5iT2KstwWGz",
  "key31": "tAEEinnJEY3KXQv4pu1aJeu2QuoWe1A7jqhc6HAQYhhQiS2eesGBowkewQeJoTzkhnVCHUQM7s1LA7MTRsXWvf4"
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
