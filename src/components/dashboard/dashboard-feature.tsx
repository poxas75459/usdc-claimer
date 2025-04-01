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
    "5xZUrYediMYKPKzTchWtCBPP1KWWJPqT96ABYG9fbeuWQadamxVo8mEHLYiSCxUoH7769qVgwkFRE8HEX5W3MboD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gViEGUCAGRNNHsczWLdsWvCWDxSHjs2XfN7wcv9mDKsZKzc2445hsrzv7DHauX5J2pxo4SkpG3G2qwTSAVymt4E",
  "key1": "4jc9JkQ1PCB5CiNxWoY7KceCQNdw5ps39LXhD66ir5ALpxhuSABhnWL3qFwKxgRAR7ogm75UTKWKoQojNupPzCG6",
  "key2": "5LxaZCPbw4sAGqJnRgZWsccMtRWMRzG4YAZkb3UXnvQ7giUZYfmrg53cqxthi8EYDcCkGSQQvQqkA1FaLJNb3QyQ",
  "key3": "4tWKHrQmXXCVpiBpuSeSCnJst5oKWqsTudNtiTEuXHmxm14bpGE2WLQv6hSeqZUncDxLfmJpJEwdV3Utt4NVCyy3",
  "key4": "2vCVdtZ6Ui3o9k275KXpHuvhuifkVthHPWbptfqHzGwK2qeznfi4XTpnan3wMrjqxKRFovyuqawaM5CS81EGfHCc",
  "key5": "5wZ1toVzVkN8LB9YUd7SrJjt7jK35FrqPVWWKPcyDsfAXfnKRxWENu6nv7mwLRwDJJiBRcGAPwzY3mG7m2gpdpsk",
  "key6": "5YqTsJ76wPgw6TDh6tZaaTugXnB88Du8VGCQcF9icWATXkCWrhEQBUsr9mSTwzHAHLBLf1cc9VDnAha1fHF5jUtk",
  "key7": "25JSMjEcK19xBgyuxfvRY3h9kKfgGRn2s6wN3kB2mTAJGnxjzcvJqcauMHpiZxK27sQvJKQ5UEqUm1bSCc9xSsJ1",
  "key8": "4FGF81vaNym7qrTZVj8SnDiSqL3wAd6qUqPYGhvQEBGWPh18yw92MjYbSSkbdKdsiBeKHMDY2rtnUw7YjbPneGGc",
  "key9": "i4uoysuW3gfgzaeVA9quqs66TqZiaNUo5ShvnQ1sEPe1gyeTc4zyjBgRpLsNqaif3mZDopwy2CNVJr5qXb533Gk",
  "key10": "5hUCksPxrBWgyFDYFjweWWbeURQUSNkmDeQGAWChchUqFXYUdrW582qkbtwJXtu5oZEuRx7F4vKYqJpWKsVjSmZi",
  "key11": "37Gb9WzKJpNryKc7VUvw7ZL2nuXzABrSfZohK7wicxErwrawrNQsf3EG9sRAtwHeR6QBa3xLhaWL5gbnkrByVF8C",
  "key12": "6wQoyoKqnoRyFzAyvSxpWpVGyxvyNtsZUby3YfkVBujjmB9PEaP2N7PxF9hbmmTmt4TWwQqBUnRzmwSSEusJLsL",
  "key13": "4CywRQ1xYKzPKWKVmqfq8AVzzYkj4AtVUQvW4quQCu6USpzSzZvXV6gAbw9WrbhDju3EZBAEZydXpmSHj6Hb5rm9",
  "key14": "3ZjoYN5qMCnfz3v5AQ9BPZ4Wi4UHBd2G4fHocuyceCgJuBiFCQYMyfpiJTavP6joA7yFRniFvav4SEM2BsXtDQPi",
  "key15": "2CraRSbEWww6UjgT28GFyqQxf2xk9zmczSma5ngYVmHgUFDtjNixqreM2c1vTa8sxx7EcAUMMHPBdEfGnANwmbyz",
  "key16": "TsdxfwEkg2Jc9n5uCcMpAoM588KWxHex48Ma1orPNBmadVCEqZ25RHQxMm1URKzRsrMPTqpTWaarGw7PaY22Xec",
  "key17": "5HTE5yrocgGwdn9AsawWuTMzTzcpF4sucGx1o1Cf9t6AabCRGLFw8SFvLvw9heERQyHA3osLJEQJExrQN4atADu9",
  "key18": "qGkW7MmejUz4ZEwZjkLLSBHHrvg4ShGwWB71nhr1gD5vzAzmtUtfYaWFoabJH5Piog3xTsiiieAghNxJsXw66jf",
  "key19": "4HFR9wUsvaKRR76tX7nFZT2w6U8VYmxpTGiJZ9UAi4V7siE3PpjviRjW4GG9ASkBykfu21TFrtFwnkMRy1GKyD2c",
  "key20": "crkdkkeVrtbWaH153Pmvwy7yabeLosfhx1NES7iJFQ51ARp9V1WPWLC7tEiF4rey2FhDbJqwQEufRsvMoeugL5J",
  "key21": "3Ffz2BajRFHVxHmMbGaJmfZ9z5y3jHeKTULLRYpt9jwoC2u34kqyn6gb7gLw7KbrSXAxi2QmfhoHaJFEWG148p9E",
  "key22": "32P39czgAC5jmYYhRpwAuw5tddopBWECcBZeqrrzsYEuQMfHcs7DnddjSWDN63HQKHbfZ6Xgpp6C9qKxo9DKQySA",
  "key23": "25wwK41aS5oMBvZ9ghM8pMKSVq5PP9aMAMNjXBkNUdqGopr2QykoPaF7Zc83y7cxs4S3CY7w6hLyqyVFUUf2DXPg",
  "key24": "25ennjGUqrDiWyK9wvwWE9YU557B8q4S6WX4awgBWPpmoYdMRXjVjfpnVWmAzZjGVbYpW8UfY7qHyN5kR5a24YCV",
  "key25": "4HZBWWfQ2bHQAZdpt3UNX8rDZPofuruKp4P9mJycTPpWdEY6V5R8bXeux2JV4DU4NH1bp25y7E87RiWVW2Wgvn2R",
  "key26": "3NLoJMQe312rnKBRo7AzPXVoMJf4hwfBweYkL7DMhDSHs8hxkP1tCWEd7UfYDsG9ZPwwc7YRovK3kge2R1uEcxWT",
  "key27": "5MHye1agLS8AVJJg81qmw5i4narkpzT2RGJ11EarAuqdXbacrgYpr32yJU6sXqBptNKNitpaNLqp7iL2JxxWF7Jr",
  "key28": "YrMVNrf8iPUiZxoxNWmuya3QXz8vAQT4eW1G6RmAczv6qvkSeg5vqrMVauFNpPgUGPQmEByYWjK7LEcVMRGBNys",
  "key29": "26ApNcR5L3w2ZofDmFjoD3NaGGxjbnXFUbqGN46WPDDwRXQbVbxXzTXTAQAXLebtRWH1uW229XRswX3gwPJDrDdJ",
  "key30": "5GAnxaKe95Yc2rpajTcMR7MD5FxkXwoabNuQEjKS7KseghmMnxEy7DcM4nJAjNDpiKQGFrXjvXw9923oXwS9iv7K",
  "key31": "3tdTzhLjUqSBJWWYqReZywKYpie8TPeJ4i175DKrAB3QYBevwTTfbe4jCqUvTvacPdXU5Xeabarpz1DgmQWmjxpv",
  "key32": "4KRoYR3hKJUqLxtqYgQjUkMsa6SviadftUtLN6f9fAJznyEiYWxjftiviScTbydZfaGkbg3kKZ5HeEEob2HneWWV",
  "key33": "33BWZft3NyvsNfHKa6yop9uYcDfXU5bSgWTx6uJn5rqra6oPS8hGdGkFTNTRfcqMnzY2Sfm1WPW84FvpP9yFyfGD",
  "key34": "3U6Tyr2yRkKsHEhd13914NZiV8kEss8k2xUPXF25WrnkrGnt1Loq3WsowFe3hTcNwwAEbPSr5B6LSk9sBA5yTo9U",
  "key35": "Z8JaMDDb1RkukXgB6HHnkqyG4Sn5qSjKCFrCyiS15PR8iXAdU9wxk5YRFWaTxZ1JKXXfmpZkS5orpQX3kC2aq3D",
  "key36": "46xMUu7MnNdtiUFC5qFb3kscrsrfoauCWNxRwLtBFaS54c1quxHF5NBfxpivWGJgniRSbDr1yhrY8zMu4ATkwgiw",
  "key37": "5zFo2WMxrLtutDWgKuxgwykbuxb4fu1wSH1Y3qfqocHC1ZYdemEFByuvBCiVR3Wo4fktZUBgtTmjnKn6SBz6KBh6",
  "key38": "5w5WShnW3uj7V333seV4pYDL4dbP2dBhoxECN5p7jr1ZM2wvQFW4axzbJESHQvXUmzCXkDcfuAuzyS5XsiSCc61r",
  "key39": "5ntzcjfPqktsjkfwAWVNhB2wAzir1UoLjFbvH4tja3TekjjCQCV6DFZB6rFdaBzv5stRfkNSGEt6gXNNzhGrkR1Z",
  "key40": "46bjY7FM1soqeAFw3gqTC74858fevJozj7GijBgLC1Pvdc7ToSPJDajwZvhkhnBLi4Yxu1JpPaHCfwZCfuBYLjzZ",
  "key41": "5rFWXKfKw7R1LPsiJzUYkE8LHTcqJW1b2RZ2hwdKkWFWQBBjPUNnMCUtyJXeDb4uDdPADiSnAJmcKC698JJ9KGEp",
  "key42": "5ACGDVPwjpD6YoSb9gpLoiN5aGa7yvouLSQtQf6N6JTFNo9GwBbispUQXKDr3PBJcKzo7YfWrCTFhitR1mmaqkgY",
  "key43": "4QKEct2u53PuDYQ8bUNJkxFX1w9w7yuVWoTqoUCXD48c8tVXznkhskYacXdaCUazZ61Ss91JmFVBBCkfAr8RkZXq",
  "key44": "mMDGry4s7BqPCyybCSeuLvi3iaPvuUNSP2MjmMLnuLoryozairKeZ1jTD2GGGBkFV9o6PTbQAUDzBy87LELoYUA",
  "key45": "yBpCcvQxGUzoPt1mJf4WC5stJvBftGjjDhjT9h6xt83Wr584BfHZyM3Ck4ijQub1RCHFjN55HMcZk1MHgc3Bk9f",
  "key46": "8Mt2uMUh4tfe4JPNgR5DGkst5iLFQBKikcLcj9yFoHgBMdimWqzX1TG48xG8ESvMpFUSufBy1SBuPUhXTbAsYsS",
  "key47": "AV2PKA6F4WMs1kjFTa39wYESyqvNszhbUKE4JMJk8zK1qp6KCTeyGzWrtCjjXEFoijyRcf5TTKNWwiKH3bvxKsb",
  "key48": "3ZpYnF3ToS8am2ixbTVbKofVu2avNvPAYRrhX6k7gjbqdy33hN2YaF3PgEALXSUBu3MRqbnaNHPFqjpjvPa9NA3u"
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
