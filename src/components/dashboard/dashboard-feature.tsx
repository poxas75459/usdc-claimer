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
    "3Lvj21YwFBPL54XjK6V396YFkxDVwRxL35ghhVPDMmGrXqjkHiNr9dB65CHjfQ1cUGY9uobS1HgcN5VbRREzLM3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52H54SWaJK4YhajygUP4fXNJRiGVRdBsERCZ2D4m1hgLLbGi5QFbqZitDHJV6G45Qy6zuv54kM1iRUFB9ckejyeS",
  "key1": "1296m5msoPjjnabr1CawagmdG2V5S9LcY1gvJyJzAr3dNLmYpDJXxFdvCicPGd43STjPDJU4sBkWzAdkhX4CbASe",
  "key2": "5WYJF5i8mkxMdb4n6AYBUZZpxebZX6n5gY2J8faeooiNdnwAXNwznN5ZLtnmjWYi6B1N5bVcTWabxZc7eQpjjvcC",
  "key3": "5z2Ds63YwZWQrXigRqBiYkp8KCxJRHKJUqV7QCWdMGM2RX2hRP9N7Ry3EtThFYwAAbpq44CTxx9HboW1KWUxjfiK",
  "key4": "xotDeTgShbgGGFbKJa1YTa1kUkd514PZEs5SEVVgia8QUdiyMMAs5zV4gR4cLGH1YJ4G2aJxveYLZQpXiD4UJ69",
  "key5": "LiSiG52YQ1H98pyWduGcpLY6i7MVmbiqcAGKm9fGZVkL7zfVYXbxdryZepJgwBevRbc97BmZndoNGahwDBHQ9N4",
  "key6": "JHt2vixPSbL4t3nDMc5Mg71qNLJt4aV7qiRCgC1auWJsrdL7xsiYuh88vfeUSfinVhFw7DRUvA9EffZQWYUwHrL",
  "key7": "GzuqDmJiPK9s6CCRboqpE21g53tNqwrhN9EQ8yqVkQvJjgGU7QAGqQGzDcyXZxRwA7jPpd8CoJG1JXnSKhn3JRY",
  "key8": "3Jd2H1AFoUPP6rmQpXHwvfiQQzBCo7HZzUSZ5ituQPqAhWLacykhBncfU4F4772RHXrso5PN6uc7mrodntYrKALD",
  "key9": "2VCYa1gKnythh91Ty4NGjkStUCPSZKhR9DDhnjG9mo7nLdYQquEGBLLgJqN4GLpJbGyrnXKq6ky8EUeyNBPJ45xB",
  "key10": "4tte3YveQGWyzq9zNMvReFUD5uxtNrEvMYqxjF2MNP91KKt8jhgoEpiZsFN9MfaqjZL8JyHiTtqyffJ5gc4sTcYQ",
  "key11": "xbxsBauinr9UH5yRseBZ8uEpMuNnn1rJbiP6NQr2ciKDCvxfpPZ2gFaa5oeDYTVNiWFstEGh3rhVp7xcpE4GK3j",
  "key12": "JHaQu4STx9mW4RMqPpeDLhXUxviX6Nwc7ZJ1nag9GK5dbHx3AUJC2YcA5d55u8chjUK99kbH4AK1r44dufszGcF",
  "key13": "2TouQoBoZkFCWmHkkXdRjBeJ7DJv4hzxNp4LXEDfx9j8xjDd6LF31cggWRq7cutqdxrWGtGeedj12Fq5Z1Hivvtg",
  "key14": "3gBFghTE38qd7Kbh3Ep1Ajhp63C9uaz7q57teKrtjXBZRULFTBi2Mf7sKnfDnZtekNC5wAzCe7UPCRAESrK4giRH",
  "key15": "4gudrMgpGLkUvWf17m97Kaso43vwMxmkERWXxVMm9fj6cJP1HTMebpQ6DtN4DnAq1KfGncSkEhci7e8FEczoCTTW",
  "key16": "3QVBf9WJf8km1KjGACSxqKnVosULEDYBfqg1AiEM2bRAQKJbirLABzvyLa889PzZxLUtW2pzXues1vPmeEGGjuQJ",
  "key17": "57u4wc5T37vwg6xorEK4ABLUfqT2ditiH3b81k23UhJgDUhJeehfm3yN8vQsCXzTwoXemCQkNyuHoSH5BwvDYXq4",
  "key18": "2tfwXwYczz4QN7P9b453jU7baGAmRCG8e6PRxwsndmCUUY7MrfEc1UakuKscaiov4XFADph3vuoCH8gsGvzueRp5",
  "key19": "3kAKigJGMmx5csoVHYqDv2TRZeApZKK8eWgBuCPQQMzjR3dnjRmLjxVv2hufM9Q3WGD1oGeq8uhkAeQdqBwnuX53",
  "key20": "3xR4gmSLNiHwdLCWkeAU4RU5yuFmdgHWAKBYKs4zqSdQ99iakoTurLt3swictmQjhLPyLGEnPH4C7qyBqnfy63Wz",
  "key21": "3oBHiuFHTU7E3t8PSrTEyiHiXhYVX4EKZDFRUJqhnWVj3bxyB2AUrn61Cfib57VMbngwTbd3WmKuu6Jy4qGxs2pA",
  "key22": "2uFTagWXbgND3FCBpbQ7ywcrcrKDNErrhQbbxCCWs5LpYF4bx6mToqLPGYACmLxg8hNpqBo3qd6G3o7aYnHpqaVb",
  "key23": "4XGGK1S1hDXWxYaMRZafiAc8XAHGJupjyq3aKCu5wUnbqJ1afswNMUAUezMEGCfgBPFQWaTqPU3LJDv7c2bbMfK6",
  "key24": "32CWrr3RtqiQV3w4SE3C3KfqhteSAsLJmF8rkrbgKxSHfsgJCnMazfosjiyEZ5fKMyu7QKC83dsqpLgPxcEJ7BMK",
  "key25": "2B7PWLV2RTmuQGgBKVY2GRTnzsgJfbpx7ifNE5VSKX7QhGtfEyv8QaN3hwMzv97CaouzDtDhWncxw2WgAgVth5aC",
  "key26": "d8efk3A1tz5de7TgbuVnHADvacQFEw3fBkR9N2z3uc4Tt2XbppPbmQJ5i33gnH5PJ3j8PfAW8bDZvWLoF39soRj",
  "key27": "3h8mhEnXreQyUjYAJmPizKLas4ZzV8PztQHKrpGn4TESgRiWEEERuWVBKyrSpxiwCuvbKHRzU5wE6qcb6qGMZKDu",
  "key28": "3MaQQ3zrqtn9c2nJ97CCX144yD9149PJMAWcyKfo54av4G6SdHhSxpkdi6kdVUR8nSBYY7Rj6Z4p9fswzSNU9LPu",
  "key29": "Gn7q9ywp42Pid7VjB6ihCw4Cq3ofUsMPCVCvdDYvz2scgHHe3zDr9eXFa6U8dJ37Q4mNRS4Y4x6qSMNFbx6Xy6G",
  "key30": "4ndSZMqD8Y5h5qCHB5YSDGZHQSerwWPz1164KsoQZwv1KX3B3Jb2oW9vAWG8rB1stEZKrE5HJeaD2szT6VUG8ju",
  "key31": "2hJvYYF7w1nHNcPTsFzxon6R7DgSMVK6T5BE429dKzXWkxcj3DuvfyJAEeujPp2nzbPRz2NwZSskno1hcfhCBoNf",
  "key32": "4chDhiqyJx55QPCJnbH1BXhYVEiomGK9Fc1f49fKeJFFTw7vp8tqXyhNRVdvKLupPdDaoucKja22BLAQ226LM9Nv",
  "key33": "3ZGhFm1vz2BSMjbwmocTtJab7TtP1WxNvTZKFp9kBGov7jvoW9kKyYSanMN6naNAMvSyatfCHBt25Tm6xr2Xkfmh",
  "key34": "GZxFu2cksi4npQsDwkMMjeJfEQMrjwj6ymbXjSmADqXEeqG1wbdFvjY2PybLEELmqx9zit8e9Gn8gWqzewDdNTL",
  "key35": "3r7PTr47S6xp2rM3ek76wEE8yNe8RRxgkg93jEgRre8KEEwy1hsd4ecZ3ks5TycqvgWHWg8jMyJL1SxCpj3kiq3J",
  "key36": "5Fg6Tb8adMfpi4iYf1wn3EZdHVDZC6Xdb6CqzX5eoau7X7n1XTYu36yj2uJkU1pE2enJWaAYfnZPFB2BgsWsmea7",
  "key37": "4V2sR9b33ZE2no3yQpb6B5iRGn9kKv8avKyHZWtUUPFUgBa6AJQZVPn2KSQ8yYYvygFDQ4FQuR2ointoJJvuzdfs",
  "key38": "4kpFYLNcL3bnNr9zydCZLAUPc8st2cuwpbmxe2LyzfAj6GYn3xqK6yNxNNpqHywTwpiTm9wPeAZZXAsxiBeUJc7r",
  "key39": "KdRgbucRSGipsfv4Moxa9wrMAWvKNzSrRpXNK52KVyqx9p3rREV1Evfnedgs3fAveeHZbvSSByQKVYuab5u8TDT",
  "key40": "2LoHETsNAaLK63VCgoFFwdhdeT1UqCJ9ijD4zx3pRcEzVoQjYdnM7mFxw6bLJaFqLxEnDC6r3fyJSQEEvuyS56kV",
  "key41": "3ZhjchmyfZydNMJSHPnd68FSrVY9kCwHAYLQ589nJUNNykicFhSvpRAkSz46CEhXL8W8afGHivRHggT8BfxoQJ6K",
  "key42": "3PB9xEhTNvBkB1idWFzGfwuXBdHfmNCGQ3wqg6MHbEWAS3HDhyhCSquQRbXWWryKhfxSqsjnxriAGs27unb2whGD",
  "key43": "47aEkMMUHPc81N4gLggrfpG73sK28mZQUSyKmMy4Vp3YisF9fcwSdmiDJk6hUZSbuZQwvbjeaKswWnk4VBRrAMjY",
  "key44": "3b8wDd52NdFgAZgmtdWHrDY5PmcqBLKwDuo9RdremfEcTLqQEqBFPAJ3mr18SYPMvtVjp7GiyRTakbauBropjnXy",
  "key45": "3NospxZCpSUyuec9r4qFiT6VFYADvXqDqC2D7SrPXkn28YFjXW57v5FPaZZjW3BpCM2zaDmqSwS4qX22YsW4BTjd",
  "key46": "7Zay1gdAdjFoQWbp9eJDKvEy6oRUyZGvf18cXTAjiSEBEzNpMwGQRH45Hk6uoZ1wMaLw3yVvRcrK19cPfuWpbRX",
  "key47": "3NAJLH15WHPvv1ebQhewxQX1d5HJvj2NaPStZG7ZJuy1TEwdQ6RhoJijW3fDb56qbxXLWJQCXpfJoqdfyT3SimcJ",
  "key48": "f8k9mg7QvjgVB5HHCPVJU5bzmStCjvDJkUcPsMfzZa6dhMshBn2k3RLUHsFgJHUY9SqMLjmHzTrTcRf1thxTX32"
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
