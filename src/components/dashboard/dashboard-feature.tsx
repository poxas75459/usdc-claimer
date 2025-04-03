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
    "38Tu7Rpj5p88CsyEY7zBEySZkKm6gZUxCFm5CRBPygeufzb3ggp4X87Vie763CK7kKqRJgUYGgWNLaJahBeofy5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLWjurkf9P2WUmjfk3hv8tHXzJViL3LYkuHmzkP67JmvnJK7TrPwgNBo5wRFkrpVB1DQtVYJpTngSKecr7wZ5bS",
  "key1": "N87XoLYF4kkJ8PYUwYoTPCQ5vndZ7NwRCGjGF7XAChYTeE1vGb8SzwcYdEoiMat4g27JUWYxGyKgHiqyf6W7heb",
  "key2": "j47CjhRxqQjHHFhUBC6xZbdhHQQC3zqo2PzBuB6dUPXHrDCphNLjSKP2aS1ktqtAtJwvgtst32QB8maMB6x8w1i",
  "key3": "2jHEwQNVfgc9Rwpms9Rs87nsWsoPfdbTx6eomHwnRX4mmefu97xnV4ptV1iJn3anPwhzZbPty69VpLZPfo8nA3A9",
  "key4": "3sJDjK9btPBinTaaD4AmjY6idH54DwK18YMUMFaq37wr4e6Tnu31rXrvmTJMqVnDaW2hLQ9pVax3j7A1rk5oeu2w",
  "key5": "rLFtT98EcvjQ3Bbn98Rhezbn5M48bfuLCCpArnzidzsnQjdWtp869mWaDmZQBaLcFiFHpUEBYEzR7aoujzyKusA",
  "key6": "5Jz5J3MmeXLVQdLWS6T52qPYkgByuokAeb9qMTqTKx58JGFjw5hZmd2nsp2E8ujyAgHTc7kqUhEfNhoY1MedoxWY",
  "key7": "66kuVWeXGqAkiEEhtwgT5STk3MjGU4r3Vgda8tcfsAkaqbGYoddKsxiXJTgAWPdqfUN8Z3KLNpHhmNLvXMP7esW5",
  "key8": "QPz2NyfPwT8DmyorEgDFA38i1Lb8TKLnFscYPPRRYteVnMxGeqedFEHEavPVkoMuRqJU3DzMjEdncgUdNhxAUuo",
  "key9": "3HAP6mJua5RqExUfsLtXhaeomw1zfc3kdXyA3HpHmgwhQEs285kuLagDNzQXnLFUfQXyqe6ZpCVsbpCXw4APvSyk",
  "key10": "4Snc1gAS1iEMUGknfLk42bTLgv7CoZ72sN74jgdQR13e7LLfpn3deYjhpFELW2KuEhX8Lof3ZBMaE5aPyh9YLSrn",
  "key11": "5yNP7mHNwLaCds2Checf5Uw6z2bQ5PcudHJEogisqBDhnjbrMGymD8QKTVAAXhSWjAk3NUyjAJTFHRwPnk96Lo9F",
  "key12": "E9hQS8rfNWMxgmv2Tf2FvarF229KpR4HeekWRALCsHNPdufb4HNZGuPfj89r7u5s5YidsMXUV2wuUkREtFTDhnM",
  "key13": "4UPG5mHMdQEz4E7UkEtK2jwJHMfzz9CabLuAFSr2qHQWjYZXHXF7MZc3KXpDq5nATz3cJKZpA6qyyZbRmP35TAfY",
  "key14": "2GQvQ86NCjDDA4twcxeibJvBQA4ENuwXLCvfLvDU2YTi8vDuhTWovP3nKbfU7W4iJekK3zjWjfhe8T1tVUks6T3y",
  "key15": "34pY8HpNmyEi5eEdSoQxg6z11WUcMA1dzpeFqt57rCA8oaUx1sxrq9TAyF6mJy8VZhwx9h13sKEt5FNkf1faiiHZ",
  "key16": "UBN1NZoiV4oTyPtYCubLeVwBPfqJEWRcByQKuUhJnCuHCBvhL6B36ZG3ecqFFXdqJq7BwAkpBuHYQzKJgaC5HGR",
  "key17": "55QU7RJQSDuhhDvyg5BgfCPc19u3Pe3tYYN1y5id7W2BaRuxCJ2e9n4KrqDJLgbw9sjZVY8E2cpEF8k8jTWPsXrj",
  "key18": "2QeVhQduFZYHxQsRS7n6biEwqWGGnkptYM2ATmEeh29v1RRfqLh6uZqjMcJKEUD8xeCLT32EQnmXwe1Nm3j21tYL",
  "key19": "EjY42aYaz39P2FuZMnk3GqscMPefDMHf5wvD8DQ91BtQ3qUWrkcdB7RJHvMYaW4o2AeyEAK9KtDGsoYwFiLAR7f",
  "key20": "3h4tUVcc5EjfBZe59HBYL42zxm2vnHXdSFDHfpAihnmaYLajK8ug9MAB3FSe2vJSnUmiDmjUGqNHmVvPperu8KrS",
  "key21": "5szBEoLuPzJoP6EBBqqXeK6aJ4qTZy9rsYAktmVQJEnSBPeCoHd7U8J5mAWSv2VxPSfukPYMApUqsrdnUCRsM6Ay",
  "key22": "2htain5AeQoTfU3TTdeLaCMDV9uc1mE8DYLQnpDVUcTEtSxb61tCvDHbZy8YazXdmsr2i7t17espFaQN4CoTdCHp",
  "key23": "5yBMwUMbP7PjUgMBabDWdjMbAk4yj7J6H2eZE2w1mGnZfd1f27fod3gJd46CrwywFDv3RU2CcrAQv6S9JrEraWqe",
  "key24": "5iqJgzdLxS63dfHvqTc3bhtn1oJMJp5josDv9DTtSzdk76qKgCD92z7VSva4jPMYfRnS66DQFLghq51DwoSpKYKZ",
  "key25": "3Psh1F16QMi6T3jAiAU7DhUu87uhdptxyW7Do2nhaNJmg4xgZHGqmWg1fsaMjWdViTWoGG7SVFuittK1vC64XFQS",
  "key26": "2qKabmXuitLji99Dt4RR2oj9Pq5sJtbwRZ7TUVdrHrCpAHQ6wcTLPwzRGnxHpmLV1NksLMAMWBrvWDHkpLDPj1Sk",
  "key27": "2EysTKipRopnpXXKPMiE8diU3teED4KzuKdTKPApEsg4qBMELrTFmqPXZPfSC2sMY4gaUSJJdmYMWGrn6gMzKnRB",
  "key28": "jMWyvvAc3aoJSaxkJy1ekGhaCWyEPnsQdHNR95r25GY6DPqj7eZx77ZFTSgHRLa7X1ey7yg7hwJ3v5gfhPX6T2p",
  "key29": "3CdMafDRS2hRRHPpvNNLzCtPR6RB3dk3nJL6AzSYEnwsiMHVAavgE9QPDBu1wKdrcqbKh69PjvnFWAmi2ArP9fVP",
  "key30": "S2w8RCij2R31KoYzHinDbkaL2rav7g3DuYnFYM28yJ5DzBSETwrpyXP7c3Vm1hou3kBHGpoE6oQMUXzZAiz6WgV",
  "key31": "6Xu1izW8NsH9TVWsejazfXg9Z7k6yHgpNz9tVhAiTqExjiwoDbSSjapxZkwU1ApxU5FD6jX8bZFMtWzK7XctUaN",
  "key32": "2ii6D33W6VmMzoc5QCFbPZ9JZHqozXJJGaUaHKWjueBvNrY4fDxt5kRSsidafMuG6vSiBAzyQeBb5iHHXecd4z68",
  "key33": "3yburoaUqgSXW3BNF1Y98CN8uCfC8K5AY5uKywebBLx6CZ5ED1ZzSfUsPr5cF2LdMhYPrRaiAm16f7SDy3YfJYnz",
  "key34": "5q2GLJpjSTNFFQvAhu7tTR4AFEoLPFNMGLeh5hihnyhQVKSFAi2JbYGKQHMuox5QvYeYvnR5B9gc38sL4Yrxz5YV",
  "key35": "4uSaYRJszUKGDMqvSpeLa17hTMiH2cbNGqtfyjBGCZfA3qCJ1r8dwy2EPQ283G1N2aincYp27cPyxdpDsDT2omRB",
  "key36": "67M6xkST1f515L1gveRvRX7LiC5NxnduBiU2aM92Mh1hiEcgZ8s3XNatQ1QsLWqWywPBKJhxsvSQR28gR6U9gVk9",
  "key37": "2wuS76y5hCvwSoiUZm1u3QgMCB29tuoJJzVDZEPBiNe76E8sWRnEvMMpfkagy1tEauAV3qRfEknk7UPUeVt71E2w",
  "key38": "4n2mgMGiBVEvZy8aii7s7icGVd2dfmgmDmD1vNZa72uk8q9F3TvmARPKSusAyoTrLk3bfYvJ8FhsjSXDd1Fw8sns",
  "key39": "5UvRfzB8ad7kJMKPDBKJSe3oNkzFs2wBBzk5Znu5AtWrHdptbCn4JJuMRkroDMJe5zise5HphXrBnaTG6Lsk2nFL",
  "key40": "4U7iJweooNnigdAcrZK6Ub2qorYGoc54v2PER8bfVjChdZWd86FHk6ro89cs6kQwfZAXQcRsSaDfv1KyN3AKYJKU",
  "key41": "2adRY78ibkkpcPyD5sLwvxutZ4pzWN3uyV5rZ9TGmvLNK4fyTKQnwLEVYVnXuH5vo8da54qQSKx35jPqUxNaL364",
  "key42": "4wDkXBHJq7rmT4aJh2i3EewszP1zwpvAeQAFTD8S2wJHTntBLxNrQDkY6ELxix6EVi3yhk3NHTRb8eKm3Yqtr6xQ",
  "key43": "4W3oRMr4kP4UiggYvLavZT1U2uwSnPwykCmq3CbGn48okTLKEYNdmn9u6GLvRGY2UPdBwuQu2d4A7Kvke6Y5fE4v",
  "key44": "3ZfDJrqedfV2yv3Xwjh3wrdQKQx1QWWxEXm17pKWanyy8p85yr5EwwyoTYUhyY9egMYSu2pd6oec4dF2cZAvU3b6",
  "key45": "2n53kWhKpEq9DTLAXiCiFmfSNdkKC9oR2jM8bj4nhBdfjk7iLB7C97VZQXGUvmaJfJ7o8cXs11QmV5G7phoTfrKC",
  "key46": "5WL7bJYZ1koh2CE9B5abYfqp4mqcDUCV8o7Ez4gMi9iRdeieFYHr6Q9sQqnJWFSKqvjC8VmgVAx5VZntDea64Jcj"
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
