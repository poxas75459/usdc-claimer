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
    "4GVv4Xb3hy82VmWajkXpb57ii8ckGzzgkNkHHfpJ1XoxcTcoKt1sJS1TGcjhKEvRp6mwKanF55SJuLKQQPtru9NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1mWJGMP6mWHyZ2ioHbnyLmdvEBzRoMBs1AjQaeXU82zCZToJHLroU2rf3HbPfnULHo3PZbXAgN6HV1uMLpEFpu",
  "key1": "35qiNnFggLoizLqKy4H9VEt7eJBsJFRPRi5xTDaDHpzddyVKLMRwykE7JBdH6ev5Ui7miA89ETWSz3tLfXhT6Ezi",
  "key2": "4qb15ssF82cD9dnRqCSzohreswr2dtgX7JJ9jt7m6jkmkxjNDH1V7a9hecNMTG1FhUfBY5VjWVowiabVDCchRuiW",
  "key3": "3A7ehM53Fs8nEsZHni3pVnt8rhF5BzBZKSbJz6gKP6227DAfdt6kSWnDizCpWQGqXGVdXHWmbgdroVAQdHMFWxz8",
  "key4": "5ior9HPedgmtjump2ubmAUNYYUrxtN9jaURJwFvEhXvfCMrRgksTXkRGAX2vG5UYomFgTPJeCe9pMBz9j3M9xsC9",
  "key5": "22GTiNCbpmoncHCoWQjQtCEETvzXnGkrxGrQib6Vr3L4qL4GHe9Qab4eBsWcett3nRSbJ6dJCSEZ66kej8udHF8L",
  "key6": "4QNMwxgCAwXh3of3Dg4NFqiXGg2rkhWNWuz45TMA2BC4oY1yRJD6VPwGymonVy7PevzUEEJLkp53GN3FUrTRbMpc",
  "key7": "4kQj36edaeyooA6oDFMCJYMNECfb565TsEQzgBVV2UkNNBk8pYJSnTavwPuf2cfRu3CwzzrBz8Mf9HWRuFqvRXfq",
  "key8": "2GBqP61vQMq5R7vwsrZTMgZbrPVLtRgD78BrmgA5v7L1UuqmAu332RoQDRR5wD8zo823F4oGZwnoJqDjWdUPvK8s",
  "key9": "355UxzjFvacY2KrhSwSKfdEz57kRu82eAKvi2T9KAJU1P1LwK1fnwxr2Mguv2oziDhsqGRRLPvwe2gzdddeSVjCG",
  "key10": "57DXppWv13MUsZkjqPGwksvesWfAnbHUvpLhEoRz3zKFMDFuvKjKYp38J8EUqVQd3ia8Av4MDjLN3KJBA4EPnFm7",
  "key11": "6tEudLFKEv21QrQQbgZdLTrdNavWmZ3kzjM3tE3kvi4HK7P9p6c31CcJnhmet8uW1Xg7GyV4rYF4qw6ZhHj9RXQ",
  "key12": "3tnJJVPP8Vq3ghf4WZfrGidqnAw6NmHEjBLcBvd1hDwrzT6X44MkgDhKP9u2UoT8fh6vZyPk4vxxm4xDfYaaEKtr",
  "key13": "64KAuqbvaFQJukergWizrpy2GdQ5XhsgjpwYoL2CNoECmq6GPouFUzvtqcsUC6WYh7PDi8hf3Jedh5JquSYqcjpZ",
  "key14": "3wnaLaFBtP4HWpmV1mi3zaSKrD4TLXikue8dJaimuBn1Kd8Kgci6KV3Hm3Nc759rLmrxMFiJ1hJriYvfNiK7UKLy",
  "key15": "2aszGFUbnrhFebuEeit2uxGkWrV1B1addL3SufM2EZkuEbtWYA9sMZENCTpGzz9xD4hW3CQTkFecgdPCZxbT912B",
  "key16": "5AbMGttXg78HJuD9WoSRZGny8aCkxMZm2LRiTcPuzsXwNLtzs6Kfinc5XTTnJn8SG3B5i5opfVrYG8gdnBVi7Jv8",
  "key17": "5r7PLy4oborUqmN6dqzchW3Gf6MXJU6bFNif5TmiwaNbvW8BQAEKjcBHsqBDRSMsoa1VXE3aTRJrWdmvpt4XWkaG",
  "key18": "5uDBjBembifd5ZUpREZNmmFEejdzzUMj9m759ZPQ7jbHdiuvT4xKDUhHhFmoWL6dsHxzC6ksCLBTsWQPhPA4C2Yp",
  "key19": "2RsZyVBLYCxtf1upHt3m26b2pTHJgN28axvtAs9cP6x4Ab7PzbZMWvmRCt4227BupnnjVDMVUWdfdJ95uhnUMcV7",
  "key20": "cE5i7G2g7zV1CNhPzJUccaxULwrP83EinSquthFHZwBD7LhRzke7nNy8nhqU8gKHbbkYvn69ctbiEp22Y9Hg1GU",
  "key21": "2zjurrkCApt7TwLDpZ3FnTCkMjahTkufEc66uKSAGDwL1xUsUeFNTLo4kuBJJWLUxbAedVpHiX49QPmJwUawHueh",
  "key22": "3AkfTH4Jcb7PjvgZR7S9NeZoCt7e8GnX295VkZYn53y55YU7rB5pR9Vo3zWH7JZe8WGMfR4phgrFXNQACwnLJYNN",
  "key23": "4b84FMT5LpdyWfj2rVGtDfBKdGe2uJmz1TkFcjDVeSxhKqbAqY7XdYr7we3HXgj9iwvsexywASqiZw78HpyqSfDS",
  "key24": "2zL8dwr225QwzCy5Rdp6p8V65c7mrz4ZuNeXHbvSoYwMf8N3rZwvu9N1tERa3zowF4oUspdLeqXaHYB8kdrUPe4K",
  "key25": "5WdL9pWMSgviL6YbpJt7VphxiwqC9UJmHEHhgfYd55FF9Pc77TTiKiqAN8ReZAhnb3GonvZMMWGX8QngC8ugfUC8",
  "key26": "4nqbQTdZWE9qQYXF3R9uvH2EE23LYBW9JyqC2hskBTCNKqhSWZtGP5a25kEAaHc3TqiNroQfMm6kZKwkS3jGBYYp",
  "key27": "4hw9mb6hdBxU1wQsv61C2XerevgafH9pH5MXb616UtwVJLJz5yDA3JMuHAAX1vJNGQD6KHuCKBTt7qGqEhYS8vyE",
  "key28": "3CdJPJKuTDm5DHh7SVTQ4we7FBDes7UPvV7bkMQPFXapkJRPkVhJzbpSYHC4aocT7WFAs3NudzkYYW3zsycz7iVa",
  "key29": "mv9BSQE5ui3FuAMKa9j93YrB7byeNxNLKi27weyYuecpJjeVTuzJrr1jc6QxJCgkv4iwAqZLqdvkU2S4WZFTPwo",
  "key30": "UjU43jEoGCsoDuNnEDPUX2TEqt3vRYFDuUigCvCYV2CQ3SJtBq3SA2CtUq7yaP2VV3oScx23sL3hVioe24edzZ7",
  "key31": "4gCGAjj8jZPkMnjtTAVGKYpXULNXisScvwHPvdX9TT5pHQjrBY89EgQ8U4gK8EgWji4VDNC1P3BeYvWZd3izd66G",
  "key32": "5q5rJcGA9BVWF79xE9zic2Gf4zWrgW18CohgWTZUhhBruwmFga9bBfjhdYgK9s1ykQpSkjeEHjiJ9cYCarDGBwot",
  "key33": "3HcfhEz9jBxjnqo3kMNFxx1h8HnsMoLC6fb8okjUuwwMYTWBES5FJAqDTNVVispi73KLaQDz38w2wiN44mALoiob"
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
