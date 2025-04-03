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
    "MhCzvNPnDb4Br9dAj2to54EirGZvqZL3aaiw4dhuSWyn2rWygaQJgAERbxEZBSEiB7VaQbzufGt3YtXpnXoQdKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFBtU5DMjuCnRMFncpkB5jNe8scjzrV3dboeqe4co5Eww2w9aEXUpEsmdBUA1gku6RxziwyySLa98M4ZG7NBH9d",
  "key1": "3p1UrcwtPfkKVJoSf1cYLJ6QCWFKvShCw3e5mqYBqAMSYoQWBFhK8gQDqxwitRr9jPkRv44gpsApsegv3te9oGNj",
  "key2": "3otCmtJGjUdcg2QPi5ikh7Lkre6YkSGoX1oWE3tJ1XeJD8BKikA4oWKXaRCS4VpAsNTP4D3CPjPkTx76pyzj7FMJ",
  "key3": "5hHwzREEz49n5cv41nNTQsQuFHef4HuJavkLBwpe2HDuPwi1XUaS9zXJfEo8N8sV4pXbrrsy7D8ZcPTMnRqkTMUv",
  "key4": "wLnZjWXB4VK7YysrryvLYzX2C9Xvxsam2S4xovoq8HABHyZfVKcPY8WGT51ovuomfq88AjYEsMDvLadtCBpyFaH",
  "key5": "4BTt3efBz1bXLNxtBR1QHe5tEcSptW4XMVNS33CvQfmVbPXShx8cqFqRrYaoo54QxNKHdJyGhujK5oDNMqkcDCUM",
  "key6": "36tj2CDP1MfDTsyUzb9oFEq5ANSitBaGqab2jwDoVAwnVd5wa4qJuBkQm7QYHVfKCUF4YbsPELK99DtjW6GzM15e",
  "key7": "5fFqFHcHscwoU6DkmohfA9Nvz3bUEmx34UHwfoYy6VJK7s6v2boymPp9gf1VfFutJPkQQCoVWJhRChnjHDMTAx5x",
  "key8": "5Eg9amgASDgNT2pXNWeCqKvEpAgkzp56E6VuT2CRxqstPsQTmJkKbV4AzNeHhzC7QXhe2k2jHWsL6CdQeKtXCvZ",
  "key9": "25ym5Mj9Y4P3YheRWFpqs1PpYUVnKosF5Q9FzjuvMujVothEZY76UGXgCndxL5zJ8sjRVcp5HjA2fqeERmaQVPLx",
  "key10": "58N2WyeYkQ9CsTHE5ex84YPoUKtMuP6ewbzTAZt6XXSWu6W9bYUs6Jf8SD9fgWkxPkjihgLD4hto95GfsosDsw94",
  "key11": "2MRA7R4UgtZ5Pqt2yJ4D8DFZNpGQdkRihQdqPButHWGNpvDA1a4G158W3d8JdKPmWfdYDnizcRbrdtA7M22AxHtS",
  "key12": "2ZdEn9jHpUZdFctketr64zd1T4fUwHH4DaLR3tH8dNEaR5LdLRT6ECjJEBJEtbNWKqLRPQp9tDQShng2rMQbo2Xf",
  "key13": "4X6jgTmHQQkPUAEAD6q653Fcx1pMEueQVMHhqfw7TTX2MBUy7NUHfMbVSsuFpNgLQFQ38vEsvCgBjYArYwr8B4Cn",
  "key14": "5986ogyYUcPux3J9znzkw4cxaK1BMBQx33crAYkHGihXYjkV8wJ48B1KVV9ZYSNqKCfESvLKGGR1wFhgMEZGo8f5",
  "key15": "2XG8Qa25Q2EPgscr4jwJbVonPxcGdZpUvgUKcDHdhGYb8yfDCbdu15u8L1GaemihdNxbpTMn5W3ZENAYKZisYgeW",
  "key16": "32BrpTANL439Tdg6fshLXgGg1a6Z3f38AmbknUgK4ft7VD3hQSGTbAWuWFva9qqKaYaYoPq7S52UMThk9FtF1eRr",
  "key17": "ZGUMHbAYiCME8hMgjv2bL4jgDpe4r4HQeCeu8bTvMwNDLAFD4Pj429f7WhUMSYMPYWRhaPKgq5b4jxe1YqKNDgt",
  "key18": "u5iWkYnjr8wX4HqkNbroSQg3fREas8GcXW2YT5HgekLRtGt8vAP3wF6jyYYAToMEZS9XDUfEpymA5Ad1G7GtgmT",
  "key19": "4yMGrNGJ5LjnoWNNoNRRoCpVzUbWAFf5kDeLTxcuxjm3NXvfmaX5eLGPfMP9hpNBZdtBFoYbEGmCcKVtPTHC3BJ5",
  "key20": "2BNf2Rj69Nermp54MCRzNMqu8yc8XbtGxGc3994pFdCaLQZuvoHyrv7MADRDDDVem1jAW71aFz7rM4HwGqMbBxqw",
  "key21": "5mtrEWNF1Y61HKmisbygpF3qt4xb5nE4MaQXSbiVh8LoqKPb1UX6kARs5kb2f3aKUvi61oAVDWZk6mw1pD93sRMZ",
  "key22": "4cNS7usL4WxapWhYu5cj3omZTXBbqVj4jBJ26jawM7Mo1FMdetR3FZy2BSMdsQEZgX4DMGyh9Yj3jq53HZHiCry9",
  "key23": "4SPeziMkYbRrYR5xuEU9Ap49Rvzioqc1SvQ6gcwPEmShDHe6d6BgmRVSr15wKepFEKZXPZ88HMuLkt1VS2kfniEE",
  "key24": "2q4b7GXcUhTqUDMTBBhvW82YBC9BmYi64hwv7fSAKP36fMneN7bWVYnUVJ1Z5AQ739RnCRcmKzJBMeb6NzaCHV9m",
  "key25": "3ig5Eq1GBhtGWGgkanQuPKjF4eRMcokF5pP1GBFrf8QoAMYY5jChC5Cx9VvFioHVyjTvU92NPVWJvGjG8CghM83Z",
  "key26": "5PuReoamiCsYpJs5Tpc3XM3FeBkjTr9HvYUWDno64Q3v1hCcgd4n3wmB4Yvp1v9kMWpxK1mmqmNbLFRx3JjzutK5",
  "key27": "asVoS2H63v36ZKGiAWDD4bSyoCDmapjMQLJcafrCMCMVrXEs38SSEPrW1UNJamnzxRvTx2HNjMr6MaeJ1NZkjFT",
  "key28": "4xLg6jz7wBLTCY9ieNbwiD2Yp7yfQVA7z1HChqKxa1NPgocvCvfB18kGZs4uxWsTB5r5dKQ7xwhT3HP8o7B7Vxuk",
  "key29": "b97Xrxyv7Q9uQX465XJeZSXDeenLH8FSd3FY2yGdDR6cExjXiQ8EpjXKZyz2ASX9PKgKNb7nP9sc1VCviHVB9gs",
  "key30": "5hQaCRADqHH7t8PaZjrqJNFqDpDRKjFLTkoyoHWA8cTBUDnzexCE4VPVZtL6NN3xA5z41XXiX64MZpVA55S7hkmj",
  "key31": "294rdmR48VmTj766H4bDAZCkX8XXXw5LVZfTivuqQBSf956L75KNXpenjZbFpPqkYY8drVkbSeUyqgRaoVvn3UFm",
  "key32": "2RroXZLrjGqRqMSk7D5ZgwToLC15pbv6nAYjxze3DBWdFfkAFKGmEM9HWxqbgs12Dx8FagayzDrufMLao1361fGx",
  "key33": "vzyhBePpZ66KympPZF7ZZRAVTWeVTDDi2adiyFU4hbY8DKAKrsmsCxxhTLbdgVBGnnt1N6GSTnsoEbu1WwaCgv7",
  "key34": "27abRkPkUwTPUgsJVB5XcwfZ13NJ66FPtta28weiM3CM8BEKqk8cg7JzkgsyXMn1ZqQq7oamqArr92MibRQmx9YP",
  "key35": "3dQDuWaC6B3VxsrUnuETWBsHjZcv2G4R6gznpDUBV8tsMT548GDrFjV25AwKd3V5yBxPF9FQRHexG7hRYUyV7USf",
  "key36": "2zt5kz959X99nY2sWstPNctUQa4372ozVic7L9VaP6JT2u13vViUf6u3UoXQEsPwGoP6qi4hMPCFHmRbdHpS9xBT",
  "key37": "tBG3Mfc4R32KHgiC934X3uRt1U5ovE9rB7mtJsW8cCCMxr4ncPyX8KLqJdNqh2WdBp7L5S5krm85yjNbHuGMrJp",
  "key38": "5UURcb535Jc5xBgLGVdcU24tEYGv5Boyas3FmNs3ttUZoMpiTUFM6vHZjYhDcjGRW5YP6gBhg93kjSJk1Yvv1CPu",
  "key39": "4TWm55TPo9T38no51zyi2kMf3rYik8e9o8C7FJsH9HXzgfSUp5uTujaEkDZpAE3ZQNo1dkjpuUPH9HJR4BfBX9xn",
  "key40": "3ugYB11H2qvzmkUCJ33nNcEFBi3jAjx1V7bFYFza2zqwjpEgKdekrbhqYnLqLayrcCFdXXnpJym5Yv2QH4Xkkv7z",
  "key41": "2eQqgkfxDsAY7yn9eMfCV1hNy9P15vBHjG36DpMBc4X8cDaCW5zhFaSwsCkiKJFYWw9EaJDjpp3u6zRgBcGzJfRz",
  "key42": "368BV1HpJPGUEq4XQxnwLsCTwnigCMikbthnotjEMJTkmKEb9Qcxr9FaD58MTSLvMJ3cDg76re6AjDqcGoxuQdDA",
  "key43": "3RoYsGGe1cEEPogjwdA8Nm1otacvqGoUr4uyRG5tFRpgP82Fo27BjeimqzimrXgLVYzzGHqtVNx7BzYtzCJVSnXa",
  "key44": "5cks4Afug5Za8oShVLt14SM4qQcrx7YqfLqzeyktbgYnCyvLaWfJx8gQTeBEPEb4HdNEopZgr35fP1Q2RbuQMKd1",
  "key45": "3hMWMsYJxfkAsKBKG1V5TLxU6g1o9pcaCQqoHn8qje2QJ7jxmZGxSfsUGWAxammuGRmoqdKyqbdxwQmAn9BLGvEd",
  "key46": "2i2PT9cSGc2xvrJ9cVDrv4cSE19aRtx9JScKdEpWNBDnc2J9KpqZX5b3x2outi8nPDpoRy3RRYp11cveohREDgc8",
  "key47": "5LhyP9bLJTcVZngBzJYdmeT87R7sWZaA37MvgDHtYN5LUHabxiqx2yq32Z5fp3FfeakieC5yaXCxAQ5wamskDr4M",
  "key48": "5aayPQa5sskR385jNjKou47wFKkFqndUcoJFyE93esvtVXezGajgFt9KnFykxCLaJ71R2qm95hRGWLhRkgX8uEU4"
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
