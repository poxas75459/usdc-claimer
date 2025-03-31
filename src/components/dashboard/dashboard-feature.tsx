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
    "esTkdTZWSdrLdZ5dnfiXvQcqkxCr7Z8Ykz4yYNUuEBQsN3kW1Wfyr6N37ZUVjRuxtShuYtb6BVi8MwejdPffXwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j4C7XcQvQe1HGRdGEtbv6qSN1CGVcocN9pE6sYMJPBsn6GN75Jgh8Yhy6bgU5VHdbUVTNT4phf2ChuvGVJTfRhE",
  "key1": "2uDnTqVcoRJ3XTkogD7n5AJdkXfSwn7HSFrrfP9c4bvuF25V1pgA3eciCqZq8y1FbtojW3GA1h4ZhjdKXoFKwrv2",
  "key2": "2XRZLT3Une1AUWbCz7UM9htrsXYaDndkKNsr6SCpyTF8RyVVaqsxXqJzaJVzqy5FsB5AtphDRR9qRGLmFZKjCmRu",
  "key3": "pP6mGra7Z7e3crqZA97otqfZYAcneHGDQeY9goUEc4co69jXAjWZp82HHyT6Y56vS9E13CJzW1PZ5xp58KS7C7G",
  "key4": "5GC7E6N9AuTb97KWxMa2X5w1KfWyBj5sZrfAN4pNrnLRUQaNqj2C1sm4jF4R7o8DUmeq7Rzs3H8cYn5LiYXbFvu8",
  "key5": "37kXB447HuFVZ7tso2M9PZVtwgruSo9TTYw9ijN1kmZmrCf5AkRyZZCm2feBTtrPyJSTiM6MKX4EUtwGYKZqb3sh",
  "key6": "4EhL7edHDMjDz4nU4zMDNS9SqS7U9dFRcQQAXzhFaXVUPBHhnEVCAXVXKopUwbb1wYtXqtemEpSZZ77uEuTBuAPB",
  "key7": "27qrNyAevj69fDL6wv3xwWwVD3qNhgCvmJRBZJ92RaeYFz8Vh7iMJ1VfvAJyF86HxMQS69WJk7fegT3BxZx6zjZV",
  "key8": "4dtJVPrtHhwbwD2rPLsc5Q6eJfbW4vrnBXtVSwwkGAFHbhQ2CzVzrHD1o7yE2XLoXo3fXS3TToTZ68ePDVhGwwJ",
  "key9": "3rWyb23kpZ3NAC4avePnSMz8eVQZDmuxyo2te82W4NWsFN8ZpvHVxi2rK27EMHQ88MWWLQRQXi663DHGjjndzEXN",
  "key10": "4dAQChUEj8xM93W2xio7HtvLL6Hr6URoPwPiLre148g2NjC65vfxqp7c3uj9dmdHGn7XQ9FrTxzn17ssN2RDLcss",
  "key11": "62uaMnMfjuCNju7QdFsHqm6AwRKz9EZTLbD1GpgnAjpP6HMmhP4UEWERVPGJCEkzJZjFR1zmfSN9WJyFcMHv6SbV",
  "key12": "2xbe1sYxua9RDcQb84DzQ6UNn98K31673MMH21iERSxAmHkiri7mGoLNhajhdnEYFqRME2LbVmDP78StjQ8ZN4HA",
  "key13": "4WMwgfUMKWtqWgF2mHSrkKgdvYYRsoAZFEbdcPFKfg7tkiCfbLndMa5tf2cRWeJz3fMENrDDkR7AR9NSePRDy5rQ",
  "key14": "2R45ttrbzW6eiPk6CqDiCyaaLHji6uCpJcK7Ed7sYxcSFXEkZFyPgw1qYLSsPu8KLsFSJji2tyqnH4XK2yjqE4xA",
  "key15": "5gKVDfv6fZ7SkJ657sHdbAbUo8jRaiBbsP5ooViyNXpmdAcj83BK7ejuCtQMGKDZ6tP2aAat2yhLDGmzzLdna2fs",
  "key16": "2MpCsBiNUGNMh84hq8eBNsNCrVwhPiB7v7PPLKi6mcXpUfWu18Bf2SvU5QX59vyPENUWjMo58jBmPcTmMddCSx1H",
  "key17": "6sgmNtegPrtgXLWJ4HWQoZaA7Vjo3caKyAY16XvmyReetfs31TmpMNFRbECXtXPNuKgKAxyPVq1My58p7Zmfjc4",
  "key18": "24oYGcyTpvfz61GoABwj1bWHXyh4VaMszhrjBf3ABnSSZjDQbf4N49JS6dvCkZpKuTtZ7XDukRydRFDYhy7MosV9",
  "key19": "h2p2QCnafMvxvkErbTzgbs8yx7XpghUho2qDgdUm4TTqybi84bjzHcSxPsvhiTjSNHM7rKLUzXqTfsFZxUqgzpM",
  "key20": "5LKvcd9ZG3uw4epvniDc7FXCTik1tFU13aTEDW4przq9DxnVz5oxFn61gqmbhAz3pBjbihkJuocDyQuZfQZGoZ7t",
  "key21": "3VGBsgHGuXpTv3EyYi1Kd5pQnQijdp65UFToSYiSy4uzzgpSCEtagbVMgvRdseg6KujpUQG4E1pEtoXQQrDm8CsR",
  "key22": "VPwrejE1iVaHcLeF5brmUMs8akzL1vM3KfL5LMhqi7T54zwfgty26CQsmNNjwz2EgikRdwGK78SxCR9wngiSfb8",
  "key23": "5X8oftCZdwFrtq6PHdL1WZ2gR2fQhSkyN4mKShFba4RYxYVhT2uWq7dHcpvkVcid4x4TLBqRiQrioZ9u3anEsE3z",
  "key24": "3Lo39XMxiy5RurG4PZdC15CyK5drBmQjgxCTR9pKvw3RSbFnEgSCVgwtcvzVARWYxDcKo4CgVa6TwH5sEvTPwkJo",
  "key25": "ognNUAzwfiH6fZgQT2MZAR9dUc9JvQ1GyFuW6GRTRAFwCAdwdSYFcTQdAVwZKcrPu6xdJPn8wvdgKmcjaSGEWqg",
  "key26": "3CND3EcQE8S6ipSLRzVhjwJUvV8qPGk57ZPh2RqTwQHQB16Ze49pQHGEKFW6doKreVQ92MuTjHG8jCCrqFPWfqY8",
  "key27": "4wSkg5NdX1CerUzAkNA8ZqQvsZSmgp7eGtqpPbwuJNPBUaot6cXoKQB279yf6V2YMypuToZQnYDgipX43WfynJ17",
  "key28": "DaXqvMms8tpaGB7ohq7LYGdzDweQKzhQpeyfcPr7dT7zk1BJCGw2FpeeFJNW6U2y24yo1Dh86BxmW5nPHaxH29a"
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
