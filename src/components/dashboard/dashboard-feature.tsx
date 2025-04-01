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
    "4FnhnpjLzgLG7p8L9ipfVZpgsDSohjgT9FuPTCdTPvivVjTqT4TYcfwDJFXPPd4bBkU8SFgzewarZ95WZDpj9VCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zzzoBkPE3L6sFYRkQ4mrZKjCstkb3Jz22c6pvQ11sPY3jXgCBGnfMZ8sLoVK8brmc2MFvDnyWjnGMJaYn8PSKsX",
  "key1": "p1Vd7fACrHbdzufTVk4ijEpVqAWtp8dZJaZesx8deEs8fsjcAjkymZaNJyjbijkSSDZhd92ZSXJaBRM9xB6WS2a",
  "key2": "2WBvpuLQhDyTmWFjxQ7J3bH47k6cpXPDSUFTtjtTHimS2YN5H7GbLmMYkn9wqVnrzeeM7Rwz97Qzb7oPtMi6yiaE",
  "key3": "44jk34Caa3oavYFyDdFGWrJBRN6rH4vJih1NS5FGme3vEv51uWZK7VvPodpzv3KnAdemYf6QkthCubrhZQ2sMFSf",
  "key4": "2pLuGGFDNSYHLJ52MW9poYA5E72d1s9CJFXsNQZPg6P2DRikbx1MY4C3ETUL3xEcutXRSVvf3KxvvyZcdQ8zsaRa",
  "key5": "5ZPqXq7XvmVv8bQHwUyoz1ofhqop7UcguaMBKYgPJQxUVtPWq51Rjk5UnkCbTPrWx74kpHqRBoUkfba3NQoB1Jue",
  "key6": "3pzMB7fqWvxsRtVQbXainqCaumVdhNVRoqpYysNvHT1TrBRPoVnQNj8NrJJspnhF6RsH1go4AwXYaFNxKcJzyWyA",
  "key7": "4Cw1ySbU3Qsam1zVQT53EuJSjmtTgVn3wtF4rWXJLv7j6Dt8rEixJngkRLB3dx8qCWVfvrAHjZ6QXE9A4VjAAi83",
  "key8": "61fJKWgNHWNp9hKDVBn8TeBbsFHQNWYJueUBKvsgjgpbwFaaweDt5nJEci88DGsvt2kiK4G1wRBi9VsfKN8eaDnf",
  "key9": "3CUhAwQHSizSC8o9ndYTL1XkeaKisXHY7wQoMfjg2koCtGHXLiHZogdm8NqyiW4qpRSJGKhHQuunUZrcwCdqX3zk",
  "key10": "2RYFjXGnciPyrNQAzZdCAmaqvzKTnYcLh4HStTs8kzvKcT41ox4KkGxaP416ty67JTyQDTbz25vYojzZToHqWH8H",
  "key11": "SZ6BfBerFjCMye5JMWCPF3SzEozKPevDYcT9NpACJRGUH3JRkHxUGFQhcYTVwyCNqoXjnTPbbq5wJXa5Jv5SV7f",
  "key12": "3Yi2f8xP62pT59N9X7YNgRwUi6zj2QXXXhNhwYHJhspiFeTPyr6v8c6aJiS7EaVKx2G5ouzwS15HxbNg4FVYA7WA",
  "key13": "65N8PrvmEMP8N5Veo8rV8bA6GSFVXbMnbjUD2GJrNFH4ANmfCG5vnSQqS84dubqAJvHYLqRrsX771Yn9njvf6tRx",
  "key14": "2YxxvaivAZyy2tkLegbxvyB9u4EFQWwHpeFzz2wKK6VtxqmYZ5Jh2cYajE79XSznGymDijR2U5YhxUZcZFkza2Nq",
  "key15": "cCPc4HB8eKSkeNhLzUZbk1nfcs9hZ6h3EK6oDqC6NdrrXyp7BjvLANvWWr8zz4pcAEhanHsjmKmddsLn7upfDV3",
  "key16": "WSHDRqEaWf6NuhEcPELhEYkh7dWsDsmCTGjXLqY73iFhDJank4Dwr2J9PAhHo3QATs79n5JbUzVYfUQtgfErUGq",
  "key17": "48XxMHjLxv3q2SMPZdeubqsSUz3w9kqQW9haJfVmu98WfyHtcDmiKdYqZ9qDQCvJs7rg5yk9g2b7hvV5KfByrRUb",
  "key18": "k73jBNyYA7FkhivYKREfaram4rXhrqLnNdzZzEAXx2ZJfSs6DZ8Xp5jLBrcQWfPkZ3M8WcvCF7NNEzDGR45bts9",
  "key19": "2fQ1WygeQKUyMi18Xek7SX3eqjpUupD9FQE6y6H9m2wNZPQ1j8zNTy5RiZw5R9Sbe1S4tKhFanwvGcfDoqS8WAwk",
  "key20": "4QUt56uf5ezHpLj6E4ieh5fZx352FQz7DLaXAeys5oAn4Q1njeEdkLky4i37ecYjt96pacDWpizB3bWSEyXqKXvF",
  "key21": "4Ddav97xaQRKkeQLiK8ijAzyF3tn7Hnnn4in3WpyhWEp6Vd5nTzCMGi1Jsu4UKEFbCEqMobKi4SNSVanXonMfrzP",
  "key22": "4bDgeKuGc6e4RYq6fRSJFduo44RdUiq9VjDdpRNhxzGPeC37UA92m6rv4bkkMBGLSNhFRDqT3GwLzMX72vif3Sok",
  "key23": "3LHvS9kAYKAbqpSP7fQcVcpJxKx8UMngXEZ53nv7eN3K1p27yw2simBhiPc3hcRBsxwPtGjnMq7H5D9Z1ajDWYPf",
  "key24": "GSdagRTxJ9bXwKpYMjVPRVSzdc91dGmtaBTLuzKcoFW5pexZRJsPP2Noy15BLKh3aK1n51DiH9GfMsVKcLNCvhC",
  "key25": "5Gg4jQ1xdvHTuMMphZWFsM1V39rTp41o93T18moHXCUs8tN5psVqdMBLt64GLcKtKTsvfN9DpS5A3TwuEcmKyQft",
  "key26": "5jfG946HTfxrMWq1iiKJvR4PPMtCo79GJbrAkmZwGNEyAJ2Cd38WsamXr6NFyPRrKcmW8RiKkwkPzRitavnhYJjb",
  "key27": "57VNRGwY6EY58SwdPmrFvwCWn1KiPcobuSyfMDiFrHnzDJTeetfcLUF72A5RCVJHw7krnBnAjvCVtUKkxAHtJy5c",
  "key28": "5D9gTfkoLddNeMhxCWNrrTtjhoSwCrYqPZTTTpwTuB6Dym6pTPLaVkQhinxLgHhmCfGYDQguMMXWoLTKf6tqkG1W",
  "key29": "39byze8kr8SJzV9jH1yKMaiXuuXw9MnPzge99Q6vvPZ1srjU4iQig4S4pFMBDYCMZNizDoTC21pvuu2AZDviJYmV",
  "key30": "7FKxHHafMEkrMABSu7TnQ374PEFqJ5ZyjAvRwopuujMjC4mfQtfDPnyow4oTeuQuupsHZeAHzSQ3uBbnrGSr8GH",
  "key31": "nCyCVYynPUTM9SwJn7MGvDkF5Jcry7TJfdiuPLEqPgeN9CLtQGnhrK9LdyJumf8P6y9qWfuxVdDgPWPNVGyFiDb",
  "key32": "4Rh4SYg8H2o1XRHpC3brsgd53552wLAPZJxALoHHVducs1pMnjN2Qx6FKmRnh19XYVRecTSmPEy9cGwWpBr7Wamo",
  "key33": "5eteV8MuJ8ShNhok2HGGymuMKz3z8AyBVqhdwmyJMDcRUkTWk7CnGRsbDRy2Jhk5YH487o5zKuGpKe9ah7sdYEPQ",
  "key34": "4qTiMsbvcnLgBKwUbVPuRubYbRfdgafRcRu3p8MZgTLYknQGbN5C1CZJ1gM5ZKrjeLnAL8tsSmUNxAvskTZnJn81",
  "key35": "2cEryPsfRs4AC5op4d4va3w6WAYGyqvg9DsQ1XNo5hHYVPXjGKEV2r4EFc7VNykDpcHs5foPb4kMUrGf5YBqUmWK",
  "key36": "4zgHnuFPMBWtkGFhsMckjqabWu94xT2xF2F8VU1huHAAc9HsbC6LA6BHZSKyobiRteZ4MTEQ33QWoAh2RUzeSpHc",
  "key37": "4iaSVWoGz9j2M4zjYCHPnbG69BrrAcvnUyySeJd1QrRFfprSvPdf339HxJ3Z75PVhFEeRezmpta4dzHnKVENuQxr",
  "key38": "3svFNmqifjS9PSTzndyHy6f1CALvaSLA9729D96tdSKkZZCqV5pT3iHp8gLr1PLfj3bYsVx4AyohmZWS6f3p6w1P",
  "key39": "5rc9UhSjsGF42XqPmSBt1Sj2y9sTRLEaGpBDJUarHpoFBigDEydu2pNwv6wAbpn7rPMvwg7izR1DcLvtsWfKZpC8",
  "key40": "5uLmwikKgPngqsXRJLAR516M7ZsQmcjkjwtJzV9Xg2m19Tos7fKn3EBwtsv9PvLCtKz8eh5vUQYavaUtkNZNb12H",
  "key41": "4FEDT47wgCSrfg5hKRUce9dh7LyuZFwpEL1Yk4c1v7rQaYnusMh9sYXybCgBTXJ9ND8BVcqZ7sbsE1CKZa32wJBV",
  "key42": "2gyt3XkDuyJrNKj2B6wDSvMKKuLTpWEJQ5GhaAPRcgUWGLMRMvi6VotW6tgtHbjs5sh2aW7QF3knsVz5zryCAbDW"
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
