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
    "2f83naFT6m58DwhYLUJZt3LLptYNPEB626v93aTKtwFgam6gZaA25SayK77o2RrNVvv5SgC42hfeY8GmS1Tb7GXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JpVXETj1XiLc5aXsoAE8qSykjcYtvB9231Xo2oZNGqDoqPghK62MVw8FpKu6XveFg9gv9MGdpoCZRRyu8Yd46Sk",
  "key1": "2iYCkd29AkLheb74NZ4tNeKPcRih2SohJ4oqknE4Gu7qtaXFrCWGvt2kFDmRSZqz5gD6KqXvUiqkHeLDFKw9EWXd",
  "key2": "31wqKKHkzJuGKP1iHZveLMYeuj1UnVkTjwBX3A8MbFh6g2Ks5HYj2jFt9mHriJLUATCNNyJNuU2CQNJYDYfQS2fC",
  "key3": "2t9uQUQQ4Fk6vrJipgHb1kBXtWZBDG4jmzmkq5QsWdXUiUiMvfEEyvBUmYvHv1ZxMvCyCMhmyhK2nV6Q4Verg36H",
  "key4": "5F8KZLL1i31j91UZWcFxx3opR3jBXpZsdcHjmj5sECxHmAQFUhsuVe9fHgjDeWw2hJcw74f23ThN17ZFMiWC28b8",
  "key5": "MnxEjoVFpa9uaex4JHfCThNQQ6KLdZXwtswfmU2ggQsqseJYwnMwCkW675bft2CsRUKrDNQU1NYQxP1SqvNuJwp",
  "key6": "3G9EgYbNf8ESG7Tqyd96G2nX7drqBjVD1i6yRPyuzXRrzRXRPKR2PKuQxNQEdYWQWFWw61kRtTUfYvdUyKNyyk7C",
  "key7": "5qGBMFW9138FW4nzGynGrABaeTTYnYHhyTzWRk68gCHLbxe3za3Sn4swiudCeTcevdaAYABtCzjWu54jPDxDvsFX",
  "key8": "5SFPVpBgmWuSJkU8uE7o1rnZ39PZ2d3wiftzMjAFg2wGxmhrVT84m6cQdrRgKye7m68r2oVycwkVUgJo3JTCshXT",
  "key9": "3FtnNUtNkMAp2WgGtNceuiT9de362jqjonbzR5mP5ws1h38Mf4jzeZXm4jM2Tcren88d8aJsbFSBBZtKDwuabykh",
  "key10": "4VdTftkSL14eEx879V9qiUMHhpunPaB6xzokY9Dq3krdzDuuKzDnLu2vKhdX15d9Bqvdy2EC9DcVC8xpHfrQu9bn",
  "key11": "55sEEUdJqLVTaUuvc6cos7ch6ZYfewGTaFwr1uu3SSFCW7J1Uxxd4spzBEbpmiuwipPjiyywPCVnJpGukRfum34G",
  "key12": "3q7geXph7r3QYoDXcfWHhvBqKEbHQ779Sq69zhiV37DZMotKM8kVtmg4jPRL7KJqbfthnF6oJ8Lpvd6utN1VqDQy",
  "key13": "2xDUY41QsBPRuw9sswXomkk9x4Sgh5mzw9DbckJ8XkD43JPvXam6bSVLBWahw33Dz662eyXbNFQFVgEcSTRxpJ4q",
  "key14": "5Ek3vF3JbEJGvfUSh2bSxEybU7pFa9zcK7chYPRggacXproJZVV3YirMqPgDELZiz8e1DyJxwzqu5SZ6iSfhujSC",
  "key15": "FdzwFX4R5wjoWatTkq2hKbdNKRUBoX4Hvu7eksqtvaVq7oyhsbYZNoTCuydQtHGZrHGfv8wcbTSdzPs4NkG11GC",
  "key16": "ovs1QTeYSvHcxPEa9Gr77j1v8uoZhW3QtBWmDkAnGrbRTbLnyreLrnZJXZxbNapGcTsxVvRiVQuGYBzDRUwRyu3",
  "key17": "32wZscdCmyxavTDK1TgWzhy1x2pUD1Tgfwqd7tcdN8Rg2qiDkmBuB81JCd54fQWuMxviFUeGFXvir95cmjgPc47K",
  "key18": "4XWY4rG1mhj4T6eW4UE7HpKPPAb1vmhDcehhm3ZRXmfuPDuXhKi9c4WSgThzPU5Ryt2fQyCzggH2HUfyjJp8utpv",
  "key19": "3Cwdjxo6ZEdUo2bq8MXru4fszjGrKgsMP7gFvrRHmrstrN7ikQK1dK3F6KFGFSyFaA7eEziC7PMNhwtiW3wxZkck",
  "key20": "3XR7CKgRU9t7sZpmzUWf2uqU3VzuYDXTrfAiM8QNQLpHDHqdZRWDXr3iRoXzXaBkPRcJX5YDb4CfyjoVHrCxvBZa",
  "key21": "4CTP7XnCKLVTpArevzY8nbEo6MWg4opqhkP2QR1C3YuChwBAVbLvAUnvNhCSj59Sgzj8d9HyDnpL4Ga841pmd2tE",
  "key22": "4gcUaBZazQ6CTv8SPngJ8Grk7jygbqdrK8geXmtvYpi7knzxWy7DFbS9NZ45aPL2EduUcj66x3HgonQqNATrqm7A",
  "key23": "5gy1NCjQnz1gHAsXpJVsLV1JcHA8ouHLSPj3UHUUKwFUuAZnzW5zvwgC1vRcQCo9fT6ZYsLzLkzeJ8hRKoptFy9x",
  "key24": "5troTaCnJhHVM3tRRWbYVfDV38HUxAcT3QnKyEyuP3iEaXPiWtgQgwVg7zkACwEAcSqCpuLW9MDrhahJPkC4faKW",
  "key25": "5ZMpJXnVKZN9ZFsHfv3jPrSgPkkajsLtBzvaFg27jjV33AfckCeMUy74htwCFDRgAYog3CT37kyDisF9sGFTgTA5",
  "key26": "57wmE3rZnkyFzPMFRSJBTuSuyog5YbEF7EcAfM5f9LFcSzAyzMDU5emKDY81Wc7NjDJKik33Sg1qr9GqsBRZMFRe",
  "key27": "5Pv8k1gEWaFSPvWsgsS1VsKFhX3BsxNMYg3iwfPhXEaqjoT9Fvm8p2TBGQrdFYqae1H3smCoB3q6aZnMVnzFtT3z",
  "key28": "5M7MDVrJJwKzpDYuV21RQkgzkPzsB6xrWmGYVFAnqKEGPZzUaXFopkaGH96t7dgKEFqt9q9WY3FKD9f4SLxmRhu1",
  "key29": "3yKKFLJuRvat7xZ9itU12Ug2yzUFmjQvVSEDFKyzUNMH5ai3rf7C3B58SLEqNtQUTMZmy6SgxZMZ7mbkQiG5YC1z",
  "key30": "4kQyrgED64X8VmSQQ3FvHZDe8YfWjspfZ2prrQqion8tCqv4AKQFA53193UW6ehtRXq8GDY94pwKW5jfEc1mskwA",
  "key31": "3dNpvdreoXm2fVQ49BWAaAmJMHv683QQNbqTzuGd37q216NR8yaTe8NZbqBhrBXWjX4PZG7Lew15YUhpzxddJmvT",
  "key32": "3q9Ugh5NZrA5wWDkNhRu4bxhgmj3iPPMZ1zgr3pq6vUoCAm2T64a3mM9FWkwTeYJdFEGEtuvErG3Uu4CQj94WZva",
  "key33": "3UqvRPzzZzQ8nW3uEtfsSG5WDQSrHYdtZpvPHxLXwvG5YXgijBS8cUD1dg8QxmDbJ5YqEkGutgeHWVMXHD6b3cvX",
  "key34": "631PzAxDN9hYoZruMZXMjo76RosUqFB75tFxNtuSGLBVqkaJQzMAeqNq9wSVVMLFyi9ZiGXH8ST4EFKz6RAWJJV6",
  "key35": "3eBhZWbiRzTNFRT2pvRbqPxeCLaPEU9xKoc1Lc72wgAQNCeWJjohwKgWqgvLukDKXoWhYvCmi7zoYiteBrzP5M3m",
  "key36": "woGXXxbtthQsfk5J3EZ56Nf5JSAWUna7uiCG6uGgpCU5drHUXmfiAbsB1CwcF8f5Ci2eEoN7mw5L6ybUZ5birqh",
  "key37": "2E86oXpcm3De976wrydEjfRtMj5xk4acaZdmweNK87DxKUkTcVeHG2uR8qakLgbMqJpGMFzpH3vZ74mpVQaLgJZF",
  "key38": "2BuuUcuV3hAntKtzq3QaBTEaBafwrXRaa1Qnf4fLP8Yhvzyh4Dh8np2EiKUpwX5T6tvC4vy1XuyfR3EAy9nGTjan",
  "key39": "UapxKU5ApCxAwcyvSyNhEZMFXAmkoYoPii3TwZwQErddH6L14tneutsEQQPjKVgz3gPp291wCSdMJB9SzXYvSEe"
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
