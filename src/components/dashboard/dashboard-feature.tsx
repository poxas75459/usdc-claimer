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
    "2K1z1suWEUA5EFLHmyoeTYPCJjWY9n5WdYGn9uJcy6oho7zMp2C73so5HHhCtL6j9XABsB7j3tGGX8X44Tu47rLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S4Qp64nNwj895qujymTYC1AjjUeybbr6F2FjEJnabAHz4FJwVbgrVGpoiRX7bEdJnJfhXvWX3uLZ8NcSraKfVwe",
  "key1": "67kkpXjAisPVV27ZVRVUXGPSnMvJ5GqPdTUrU7qDfTRy9QBDbZv9AhnTYdx9vSAijdxdToDakKJZiXJwomo9eciE",
  "key2": "2aUHeodb73VGuYiccDAg5jxEon7kocLVYnhxpSpWBstx6prpvfHws7x9S4U37foLNayYtuo4RTYNFmg9zX57GdXP",
  "key3": "3Jq8N5hzLUeqMZUf1V3jvk8JYWQ3cvMVdp5qXPeBV9kuk2A5Lcocfczx3DkHUbKyPChGvg5pQsXwXeF4EmmbWfRc",
  "key4": "3uoGc1kzKQzGcG8h5MDs6ZgBvfyY6riUiwuGnX7p3vsYDVi4TmAL6Yaft7zEPj3kMrXgfYzMyG67CALTdCCGEsgB",
  "key5": "3f2jSvjMQt9VNH5HrErbGPVJ9UYDhpRNgMj2bbWCwy8H1VYZyebX7jh8ii1NKFrybat2jbWQxKka51Gfcq6uDo67",
  "key6": "2RbUPzMg7BE6kHMnnPcNF2QLd1bRSzZV8ewsEmXJPQySsyuNzpBgCaxHQrzabECDDWSkrpCMsyNaxtB4GH6XzMbH",
  "key7": "PKfvVPVRrVy7EXTPzkBzW7U63SxPqSoEmkGqUwqWD7dQQH3n2qTNXuagCWsPtPDPyvG17EsJNuLRqHMTVVNs3rR",
  "key8": "4DCer2TibqKJBcWtJDwR3qP45cLfaLgZsutaZD4gdsYnWBZ5PknC4RnkvVGuWkXWTBSM2eZKfSGU1gsBFWHNJ2Cq",
  "key9": "3UPUBgLzTuSCBTuTfNABj91MezTpQiiKnh4KW6FL6235KqjkrCq5LDxEeoFfurH7EfTWSZSb3t5XPBdRpjFjacK1",
  "key10": "5jkuJJxL4Nm9dQsa383dLf3WXsXdYq71ArgTdWq8zjFR4zWzpXdGKfbMnJNpyu6QfxoCR3uZXumMLBYjPa3uMhJb",
  "key11": "35N8JdWfwrc62LjuCg1Uk9D1vThHDnJQP9vZEXgEhhWoLQjv35GVwaFq77LbdvxqQvGSro8Hk3XKeNFyd4ouzdQm",
  "key12": "2TDAtecEQivnzw1R1nqaGNYz8w45h2VKMBoYgZhup6CoyrRHEvuFSetHZCNdXGgG2kUEHF4LZ6f1rRLoRn21RSoz",
  "key13": "3VpgTHKa2t9rCHqwqt3vPgTBgAmDsiKWhUFwvC4RFQZR9zs8ZxevZ3AFarHXdkiUNApm2HNyEypJjiwh22wboV7N",
  "key14": "4gfkQQZqLqLRLLeKu4Qenvcd91epf38jxM45zWpdLe2J6WPHxWPqKb8JoxZqfaYnVaBoqQmN5SocoszCaMnATMiD",
  "key15": "4iUeXkKvqCGz2nbRp1Kn1T1qAnWgEkVosNA45rLbv66aJWc5FUmN1ipgQqgVkkKpGSiN2fSnXLcWXoR8zRjhEox3",
  "key16": "5XoGcnqq8Aa5DD3adGTzaXiP8eYvJEZc4qDoMQoe3eie3EZrapUR5zAJvDGTjeFQNQJjA3cUWywGx25RENuqgujM",
  "key17": "fywrDRwK999766RKqK2mKkErN55bTB6Mq5Zpw8VT9YKpNHKBqt9N23mt1tgVnSehzm4XszFHYmv5pCHJ5SQGQuZ",
  "key18": "4xC3EPFB6QY8PsKU94v1ZEYneAaURedw4PQmtnfuvLC8NY62Nd5XikVCVe2JxFGRX2JGgrgdSuBHxZ7QR1SpGFGS",
  "key19": "wgutbCqNaW1pueX5a41BSQyiBn6w6nYQ1rkUPUctbNo2wbsds3CzNcPfnVkBPBXRaRKhYNvn6Bs1tdXfqwXJEin",
  "key20": "5Q9L3EUUae1DM9tjzLyzoM9phNqn8fHgHYYeQ54FpcbLsfmwuANz1PdJfSQ2S4qqyNQQ2cCm8zXYY1SQ2ZPt3rfq",
  "key21": "DuUsvFiFLYko2uJ33K8dJLHVBxXrkf1jeSz6HAPrSi7QE6a9AG6VfYUtN95uUtjJzU8SqJ1eWSMaTG5WcbmYoAu",
  "key22": "3XaCgsCkjoZtL9Wb9cxPiMLH8Focgcin35cUZdCuwMYaVDgaULbahdxWKaDCUeH6NkWoSfJkyEHZjGw6RF3BjsEX",
  "key23": "oTjdUWs2uhoLt2Tan1e5f9HiEKZRu15jD1ED7dwptYaZRciDTyGYDKQ7bqkJsz2q1LtFxuxftRAysQtngdYY66M",
  "key24": "2jZ37U7tM6KERS2dLFKhMh2EmrepTKDEvoKSkm6ZebbpjEqySCMYnApXcQvFCay2WpAWrx2jCJ3zFzBhrXdyVa86",
  "key25": "53UHLNecyZphjdeohpAyv5DxUZ1bYsxbhAZp8o9MGWfx9jLxzzbN6FpQ4z4c8wknuAMBtiqyuFeLPeaNaAnx7xyb",
  "key26": "5ofATaPjYXDY9cpxNH3EQBaR8XXPHJSbo2wCkvwMpJDTAdiTeoHbkzSPWyrZJfvtNnxgHU5AKD6kkdSRm4JdjuP8",
  "key27": "3LbXENtuQRgFtwUfAP5Wijvb1E57d13xoPxjmKzdHiHs6jx35rsFVLPYc97c6U2pX27pCjtZyndWfR1iADgv3j6M",
  "key28": "4ubSsVP9hLPG7QTNJuJVK8pcH9bwPBfgAiJQzKE8c3b57iC6rwbsgV1HH2jT7rCD83hfhMJY8kHGhuPdnnFNHTrg",
  "key29": "2YunfezG7NX5DNDpVMn4e3t2wjMujuwusTJqemBAR2o8jyFa3mknu9Cq4dGHTrjP9chZnH8afMW34sgVqb95eiNv",
  "key30": "53H2DwUmWKUyqhZRnAJ8UJSzXGZ64scdtAPxed7o5ykwJXm5w2hQYHJbTqMpDPf9A2M9VPGMcPPQ78qH92XStozq",
  "key31": "4URgdv7Lc4zGz93WwctTBMwQc7LErp7Mc3LdiP3bwaCSKF4hAPpxy51J3fi6FubGQkfidY2A4cNvjV3Mz28vgJCy",
  "key32": "62nEguFdfACHQgwMC8q6BrP9uPeXBcc3YUQbT7gHzVCLk1xUsqNx2gW6dmr1tqcLPnhHAtuLm8sC9CqfABqBJeda",
  "key33": "2Q9LqJ9ni7WxSHg3PQuuAYqwP4Cq6ED7LEifmXt3DRg7D2zQqo3X3SjzpwXh4B3rMWbr1UQHcEzFCc9wsyfqRy31",
  "key34": "3NN7QLUeAndVQqfSJz3bb4TMCsodQox6TnKjjyXmsg1Vf81B4JGioPCR8FgQBem7NopjVSYEomEeQ3Yxm4FiActC",
  "key35": "ZqMyheAUrkcdYG72V1cufw9ByCv2w9mVvSJ1ymABjEkaXY3WPfkHc2xXtstpEya2KfkNYGVD4DTBGRdT3wU5dER",
  "key36": "DcYJHaQT21LVvTik5qoD6FT8CosgV5myYv4WnwPdA26f7QZ5ijSxr5uKsMYqtP4Uc4Ea2ZJPiKsVeF3rd2qH9E8",
  "key37": "5XJHVXG4PDJMRNxgeYDk6whwzaNqTfVqvuTgxTVb3Pa49MTP1gB5jDry76Y95eLvckdWqmYombaDw5dPuNHBKjbE",
  "key38": "3gi1Pqs4QguEuUxEGBhv9gRT4NPB9j1tTzrSKAp8xThm48Tnkhatgs17U1Di2rqJtjLkZgKGMnERvvRmYesGXWgu",
  "key39": "3EEbCQp2Wv4YjhV7guPZW7cdJPdeu6eckAhxQb6tfVZCSKo6s8Q6WDQ8akFd7dVhrQMCrQzdgR44ofCSdzZCkbzs",
  "key40": "3JqQr2n4QDJ4gA24azEBc5z2fpDXno4fAAbqe6Nn2dZA1i5LsGCVtsBhnyX8kS8CxYEqwMh6c422eudaSkzVNiZt",
  "key41": "5SjE6fV3rRrRfEhSNcc8KqPMXL9eo2TfkbxY7noviLd65uVNUMyRscEG5PkDnVzY4unEuDFmeZKnd7Em3fc7Cn2y",
  "key42": "ndisomce4UppzF3rYDCGNiBAgbKVY4DcsbL8YpWZLMHqrqGRk8tiCHGPTQCcyc4PcDYGFb3wpAQ4TNyvDtEhaRX",
  "key43": "esRXkKSpV67UhavWmAdUegxHbphrU3Se9eE8GtM7VQqeftYYn4hUDwoVxMMXN2dkdYpXoWQUso1nWnBHLJFgKNN",
  "key44": "4xGKfQAzUVsfXfyoQqf24r4a4sTbYhiQidLe4mtan1KBPKMr2wUav33ViRXi776WTkxK9LEUu8uVVN839fFNNgnR",
  "key45": "2Aj64ad6QpCdP8dGJ9W2Ky6amjvVs4qQwGz8ddVpvgUtD4LjfAom95SidGbyJ1WecBuMgdctgt7wEEMTMkmsZX4L",
  "key46": "RVfrGFbKLZhygtMLreWYqf8PmsX6rzXCv2mub5oCkge12FAK8i3KeXNevwgxWSnw47ChzhNh2NLm5u6WPuofs87",
  "key47": "2NkbVHLUSQvTWqpM3TKT89oK99cV4DTTaDboCEdZo2Frr1wQhVrw7D6Q4MhX4sKqp8jSwChpuXz19iB4Mfi3997f",
  "key48": "4wPuA5LRgwiCRn1SUCYKbTSF93ygYAKS77TcVPCE6inZkrd92RDBuiZZoGG5z1NJwNZYHYiuH6TsswbKiRbTECPf",
  "key49": "5nN5WjBLpGUzwZ2Cu9zHagytzgqUo2tL3W7bkzvVLi35BAwebr6xEmLTZMtsrpEoqqEe3vh6XeidBYCMoPXTmEsK"
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
