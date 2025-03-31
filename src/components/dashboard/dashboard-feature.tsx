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
    "b2NGJhaZgSSAMqf5gTg3Lj7dLCj2EVG99PpuCzaevqLEi96wx2631jBobPFuL42VeDbYhZ2fLE1558Y4cpxxzqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDEqXCuWgtsgZUU5PgNKHQpjHfq1SWFVjXkgBg1b2LfKA5dwNg5YwzQVRjQHGgi4zvbDC5fXhmAfgfuTznv7LMY",
  "key1": "ra8ghYtxgurdG514jDwBFB3Bpt6KyS8VthCK1PT6mKry9ZgVGb4C6CypGVgH3GJKHpUoY7tDQKaSX2ypC7CXqm9",
  "key2": "5rUBtxtTNikhdKTTUaZfWDC6vRVJVd3cEwTQQDKvP3Wd8GfpHCdG2n2w6LoY8nQTH1EiL1dnRKMyKYrxPJc8hB79",
  "key3": "SQe2qRdJRcraWwtP6npk7dfBcTSxFdYfAFrvapsKU123x5GKC5YkFVFXb26TYK24nDQs9gKRgZsbDo2YSemCXSh",
  "key4": "5LhxNCmBLKzwfCy4wTpWNRWavJcXkdApZyfARX7ipmwifzCSy8yjgSc1GcpcSscUFgeXd8XFwGsbkPen2RCmgR6g",
  "key5": "2roL4UQziMDhG46vVV4WYXTVsjNM3pmqLfZJBseNT3StSgwHLAVjvVXutVXhCgjTgHy6UDWGEgKdMsRrp2VCcush",
  "key6": "ZWUotye9VZLnzSrMgSpK9fm9QsSvaqpLAUqnbufasbPS6gQe2tkJApALyLARChHgu1mmHB7cLmHYW2ns2ed2rM1",
  "key7": "4oLAQjkifikreX1iNG7dkVGSoDWU7GPcRuCGCvfQqKwXY6fi6BMmhdZJ1VZKXsK4K2NtMFa2mn1uHemWDA5eqt6u",
  "key8": "64iXqE5tpkwjih6hT5AUWup9bZ7FED5MnitMgtHK28pMGEssdG4wDsf83pkVEs8FquPamsv9cwQfGEszGr55FVzY",
  "key9": "5Zb8Ynmu8pM7uVjmYNZDhhLxoq6RFuswF5mW72UuQ4uLyNRefB2NMRWhBf5v5PDJmc2znJmKY6bR9Yy2iBUZpqLW",
  "key10": "4uh1kbWu23Qve64wVkwaWnyJPjwBDFcF4AndiqNnGVEo7h9tSGiMabDzkpyNkKV3JLySLonjwLeTLvCsUfQcuoMY",
  "key11": "2Xwhx7BW26Kj6WdUXMVpzbQifz7aYuYA9sEjQTFYYFb1A74jkKmCogvVmXwdtDuzBs2dnaLLoLp6yqwyzWcTyGze",
  "key12": "5TVATYRMYPvLXkt1vbxmyvzTsJ1gRQMkNpNdpBt2TxL5sWKJXsC8iHMsta17wwggp2HgfR2V5R6wZ6eqPv721oXa",
  "key13": "5UYyWGizxkbcPcJj6DRqtiZpm5m5UW9EWXD7RZzAUkkCCdp7Vgb6miXWKbp39Uo6FY9TcDfRfrZKTPXu2SD6Yaso",
  "key14": "VYoR7ZUAuiWPAJsxEhdtZgGAHhtWDqPQesVvff89EeUgQR9PyRwA4U3zfTk8mcm1GAXzSoRKyS98yucRZeX6z1p",
  "key15": "2mM43LH75rTcZwnvatx2bi4XuLDXCkSwDYAdnTKWojj3XX24zyTaBFVvENnWDdQjzaBQF7qwQXq6vPYpJfpLcXYb",
  "key16": "3oHPMWAF5ft9VtYtCXEHHLpipNJBDAC9xTfYHch6dnvcotBAyca5GzY113DyBADXdHSMDpkM7rzzmefTgTUkK3nQ",
  "key17": "53kT7WEo2URuP4A6XcqWckjzUGCa5M5e6233rxMhWXP9JLBtqFufiZHJEmzQdMS9ATFwTzDQeVDvsn6h6Cc9QeS8",
  "key18": "5EezEBZ61UcV38xi8cUJcgzon7ohtrt4CWBp6zAsvJKUBdNg9QFMsUrVEV3F5Ev9n4KN1qC2o7DUgWgUUe327Xmn",
  "key19": "3QQ9yzgB3wVpjpSqEoiCiYPZY2DRt47LNygASoX19ksSxH5Jpe6eL5YQ3EwVXXq7PsfmURWDKnnQBKhS6Hw1rMms",
  "key20": "2cgQssfQyTyPQVWdHuZ5imyPkdwpkWjL3h8SN2a87nJKNgigkaR7ELCh1RBTwNqdLGudubn9gYbLqauw9kKCWZKv",
  "key21": "1dXJD3Fqh7tVoHCmk67LSeqfPmChvoe1Xb7aphQevuLCmPo8pFvCB1jjF6yc6iCqWNbyGAzdPqz2neEPnqCswAS",
  "key22": "5q12WprKx4FMKUQ5iPHWaofJ9TYbMZqNAaYtHduBxUyv3VQciRL2dwZTxbF7BMqoHbkmeNvSAWJrrtzgEzPMqQas",
  "key23": "5FoacFQ7QAdqYcuA8wtqJJb42iNsG85U7vg7vuZ29VBVTxAqpeojJCYYUp4P5A38Ra3oFrnXSZgLcsykz2EX95si",
  "key24": "3xCbSfZqbyPk4jNuYZiotwpQvyLg4NTRSQ6UiT8pKKXoXHtBi96rSaYBAzW93KQZdShj5obf5LT1aDz5jrRZjaFB",
  "key25": "5PEaoxQNArDtTrEcXTim83M2STGNH5CNcA4KnNe8RF3gB2FhmZJtb3nH8u7TBGMyUzNSF9xH95ZAKET3bhH82AaQ",
  "key26": "41Sg9KPe5t7isgrYsRkV5jhy94zXNJywuT9qKB99nvGbNiDvw6crHfdtcAoKajXhz7DSAQjVfwwmwy569FLTeQZ",
  "key27": "2yW1EGhVkaC85RShDDV5JiZBQAHsifT4KwJwtCyZgDGznvNVJvZRmb1fXgL4MsadRaKoVWh5s6vuq57d7gWHEXzq",
  "key28": "2EY8QRUnVo2U1NVvUCj7iGtgyMvmTeRZTcKpUo8scRWm1hhR5n9cbMYaaCTYZKZr2BUySraJ1RmAuB2ZC8JXYq66",
  "key29": "3xqyHWNQ5PDyv8iSHGnKGr8LftTM2xgmeVj78iM3rnWkciVrHGu8ayxGTDoD4Jr2LxHpqsEtPDEWUMtSPVQcaUFj",
  "key30": "3tKVnAfShUBd5RuWpsZJvg5sYBcQGs3LJDakVz7AWEQwm36mnWhWekgNdrwyrCGskCe37vMQ8Ne8wCEngNrzYimg",
  "key31": "5h15zcyS1ARtD1qqnh8Lyghw6P4MP99N7YUkU6j3cbJ8pMoShDY3xLiMNscuDbaDHTgkUKauxfaWYmTseMXjvXHM",
  "key32": "5298qjM86qxC4fys344smB5zPiSv8oRViT5sdroApyLF891gABSyVyaFdPAvAVjtNKuSeqU5HvhqwEt49fcwwoLw",
  "key33": "4yCco7rJbWDFJp1hg1KrwboFheGXcFZnaMVSXzEZvNEBdMuLdSEuz8Aj8nsbfNqnCrjgmR5CraU8vi79ZGcfTShS",
  "key34": "4ph2mPKucPNFHeLoKkoPfuPzHdPXBqho5ji7QaGgHDuVoS99ZTRo9rJnGuAmHXss7f92Lwapb9ok6jB6zTT8AR1K",
  "key35": "2PGj3z3AuoCjyZCX95rG3Ax8cRhcvwKqL3nunn4GpvMQDNryL2NpxyyQanZcqqfXvyEzeiKrMoWZisfZXvvhsGwF",
  "key36": "2Y7DHmA7Kq3GAi7kSnrBesMojntFnhgkQwfiAyUSU9drte8z9EXogvkR5gMjwKp5ozXBUYcqnEQ4xAPxvssxk8Yj",
  "key37": "2irww4cvXbe4oUUcBbzWrMSC7YXjrwiCSQBRUbXfLwyDw5K5cvrAeKxdg4KmS7WSsPhWYjfB1rbHAc5ucC6daCze",
  "key38": "5kooAU3KSiGnBudsH3nmyoobtkbSqs5RDps5v3WYzS7Lqr6RXHP4fw191WQVi6AiVAi7Z3DJDESsWAQ2cZcXQ1o9",
  "key39": "5HziDaehoww2DQVuKaewT4ef7EPv6Yjfsp9inMDRv179Lj24isXjt3wt7bajKpbJpd8atGbD11du5WxudxBWGjoq",
  "key40": "5cg2brYu89yodZxErVrBytnTUr87CEBF3hmm8GM7YnvAUbjSGdsRbNut1TkFWsfbyQY7vQrWxnjDLRLiLSeb87s9",
  "key41": "2vHjQE9VVQdZctyAnDifuM7V5dWBVKq5mEvW6y9X4Y1g7fuU7YvUkhGSGGxnVK79Gwz8chpaziYB7e42tp6GnKY6",
  "key42": "5xs6z5Kh6ryTwTkheAXkxWdf5A4sTYUFmVZC9K7WMLVRpT3nYQLnBPULGzfEFbD9mn6KaahyJ9cVo2JdnLF6fUhr",
  "key43": "36VRbSV2SqCxcFTXxh9fERptWzRLd5Lbei9C3rtyh3d4ucD654sQoo5Y3g3gpGUVaSziw9aW1XJgANCLDWpaKRyP",
  "key44": "2yMdSYZtg4GPw5WzcUGk274J8Nr6HpqBHZfDTot24LQ8f7qMNpbckCxe19kVNi8z2eJE3h9jEpzg5pp3kgFUkxu",
  "key45": "5DDDkNGqSypsUwnxGScQXjHGGMkgMUPbSapb1YJyuKPQC1Mb3o222i3hGGDuPX6Z2tVZi5SNhvgNXGZPsLNvyDQh",
  "key46": "3poursEsUXT1bFkDVcS1SWcwHNXcRNxmzHVfYW2ADRMLoufrDWLeQT63pzm4oG61BhopRGk9mcCv3nfj4D2VShZh",
  "key47": "24oRtkeodiCkHvFLqyYmpZteFSW3pbL7TWWc8dy8o9kUjViqtQ8mBPKth98U5uqknwm8rTd7tTMFysx4kUan4h3c",
  "key48": "4fyWceqfivDUqafbdu9xuedfpSTW4QnHWMKRdokpvbnPc1J5fJJvnCh7bXETbnknbXPmjcmqGiwP4EyoSQ2hWF86",
  "key49": "4pXhXETo25DgTW8seHV2KyiFgu1aaZwwJJxSgDsEhyJgxXssZaP1fZmo31owWJvFAiUUoNDgR6c7vdtAtdKAemzz"
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
