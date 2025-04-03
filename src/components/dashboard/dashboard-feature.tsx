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
    "63GwTmWLsNM5GeMkBTZ6QXCwDZD6k26dD8xe3A9qGnu9FEd7NfDLk7iWKEVYHUMirgvjAJB8aJhHS9K1kznMxJs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBrx2b6dRZvV5Q3DfyKwJKp6vWRqFRW12oTH45Gdiux8u9kgBrQTANqXr4yBLbfM4zaZ21kFwZ6NgvnbPAjYzSH",
  "key1": "2fkzj3EKwJxesg1oGALGgSXKArNPU4osDE28KoUPW11DqEzKj9qkJL8djwsK5yzV3KopqEyrzzG6WGtprymMAM5y",
  "key2": "L3TVQsTiRpxBN8GRkS2yd7vd7uLfGi6s1dMTXjEK9vkVJeUruuHhpSYF5d2g4jYXjAi86JBsKj4U8EFCJBN9n1x",
  "key3": "2jZhh4Y76D9k93c8m5XG5onMs6HCeErJhmMwhucgZzB6HGA1g8QHWZ8LTUeHbirNenvAJjWfNP8pRkmnUA1vzHFs",
  "key4": "5SSMfAQfy7UbQAf9MGwJGi4ypPYsS8XeGUXdhivKeB2W376svP3koHQEq7kmHFd1W5c1BpSVjLJzypCoHpUU6a66",
  "key5": "khoYrUVrzLySZnH2VA8oBQW7NP87eun2x1yW4D7JDRLJCLAv54une9zvRw1hbToeFmhhhNBaRnhWwSPZjHjX1NA",
  "key6": "2HXWKcSYDv25cFaFyAbVSiyivb8U1mMiZz8JTQSYqwXgucGb14vc3aDcpNnNJQHn64witEZAfhgh4cDMvj6w1bGB",
  "key7": "GYNJbpRbD6spC6EiMosmsiWCpdbbnzYGLSQDG6ooH6XzwooYAuPo3HrAaKQEVMTYyoaRx4QwQMZkUPEZToyGqGz",
  "key8": "38CqXQFkHqLC2RAiJcCjzpvWTWZjn57kxd9Gm2FhaQk1Zw7qECfWjRAWFqCAHy3z46nBsVCLWPCkudX7ja4tznYi",
  "key9": "2aQEuUu5PQ1i6yegWPyCgBUgJrBDxUDHSHKEBWCSivPxnXwYZ4Kshs1THmA4Ut4Si1muiCRDMCMK9jjQHChyBaFN",
  "key10": "2MeN8hhsW5USogAg7owsHzjqTfk4kwaAFj8jBAtuLT19o5kiyLy5KLpC5QRnssm25aMdZddYmkjjhfsQxsitJtYd",
  "key11": "2d37uGkfXQbD9sE3NfQkGjzfCVXibqE5hvYg2HjkxXen5QAwAgEtHun9psiPKojB35oSsJriD9QPr3xQuS1TM1V1",
  "key12": "2i116qD97gHrEcVqVusd4qRzCYoukfqzUFkPNFEyezSZbSvFcM1f8sijYFPDR94qbGPZBJ51rzdLsgkAhc3xDW4P",
  "key13": "ZNbMiTDn24WVq9jy3W8duUnaKo42LxNiAHgxs1iTTaaGnJxWishksxiT7ygkRdXNQgLzq59PZkkdgqMPJEu7bsY",
  "key14": "22r4V6dGEUXrf1WDc3JpE8t1GxbE9WVjyrsjXBbbt87sDaPk2Jdp6qgQ4WBKcvzF9T2pKenzj8rrG6n1fHan9Sjv",
  "key15": "5KGafM9WvsAufEYSEnmvodPdDPbr2ZbUwAUUbXCYfxaFyTgyb3sPZpbGxASB1wM25K6HwacrxESbVsJKKw2Hjdnx",
  "key16": "263vfESfXmPAtsjb8fs5ChxgQqE78xzhFw9E8t1gf5ka2gYpX4exE4thHuohu7tMJXmCBq2fv8w3vvcb8RHi4jc8",
  "key17": "2JFSbZGykVNDSGPMc221sASFYoMZdzVq6mbHwGMdKG7Yqq61iSt811P7sFct31ezo1Jr9DUy6QRockDBSgdmSQ7b",
  "key18": "26VyBL3Dm6oQ7imQrGQUnRgLFo5EjtjihH7MXUhKyJNPzuNcy6bWAgQ5XKnc46WDp3RRs79Pt9tzPKdqdoxFgmif",
  "key19": "4wB1XJbvL3JWavbUYcUUmHzbxskJqYmP47Bi5jfut8FSXoukPsTg6HsaKAp4FMZrFHRYoVY8VxmZkkYXepS5F8bm",
  "key20": "3Dxr7wh6Q2sSLyYFSWyKhypZWwBV77pXB8uL63Jogv6G5Zw5t8PP6Vq58p7W7wgAntmTsx6nLWxemFZyy6Mnv4YG",
  "key21": "2h4Skhwb3VkntX4G1sNRb7fvidL93aiG6KEZrncVXGNjEbESJ4zwW1xnEgbUKM82Y3m2esQcNTRKfuhMJKMTZh1x",
  "key22": "iy3dpb84KBkmFvhA2xn5f1JUMKpjAZdEDciURLr2inteSd5Jqxzb6xjPrUXpRNLTP8HErmSRNFKK2MW9Rqx9o87",
  "key23": "5VMgFk58wzJYR6g1C8aojHGbKyH2wv3uVfNFwBJ2xFuCLFMPDZ9jZa86Cwq14nVmqDCzvdRUcQLKKG2svE9aeHMs",
  "key24": "5Z5y3KVRuZiPor9fLKsNzf6vjDMzPSttjVJVoF3Bg4R2wWyLVXRWoxXwNAd35LTPGDrmGPGhcio1JaWEsKQZYyN",
  "key25": "47aHbHyvUNCTEN3MnVW3Bx9f2rkZ9opopJEU8Nemku5qU8BLWQfY6rdmBDgN6qyrZffcYv659mHNVm7c6wEdFK8p",
  "key26": "2uaAXV9YNMtBNT23SL6o6MKKVBP1FYvkjht6wmSR9m2sUfVotngcVNnAV9rab2NxjCb23GApXEJa5gabDtCGMKc7",
  "key27": "4FuwBHVF3sBtasU35kmqx5N5fUaGxTgLu6XPj7znMEZWFYhXr4p9T9xqLQatee3vF3M2KhPG23pKZtPPWk6WdmV5",
  "key28": "3vhcMht8w3ef4cUzthCmVxnFceV6AqMS7MzTcmXk1avK2X2mC1G5mtfiP2UroKiaLMeckqRya6ZNj6VTpdtrh7tY",
  "key29": "ZRXLDcFfk6jpDBVmBZTp21HjHEicEb7C39hkPPSheSggYGvbYLcVzEyMAMhATmu6N6WuSmMst96mPoiGMV2oDxw",
  "key30": "3kFtiLQNkuN8cE8UQLMLDVonXTGuBvaAmUPY7CXvGUuYuai6F7nfPyYE9b2YB5AAE5fgS6ZBYwMgFGyyzp67Fvw6",
  "key31": "3SGaHsEv7xoYV8xwWqxVJ68vBLfTeqbTkvujQZG5NqQaq45YUQNaGWGXPaiMNqNNLuKJRiJ4Vpt7DkKiggpQYkDb",
  "key32": "BdU1UAfN7hvbaxWTW8enqMfaaH22rH5pi8QMi9d4oZVuU4ap4dnYHFy9At81d93KA4e7AjdJGNAPWP3BmJv8wkz",
  "key33": "62M1oSDmDiNzmCkxaSr8BNuMKVVz1j9Smu8y1izMdc3mnTaoFeTQrxiavRePWjtXyz3pGyHWV6HdscMfxiUJcbQp",
  "key34": "vjEpmhhXz9Nfrxgo2b1QoQcQLNMiFZ2uQzgGUzXXTm5XN8D3kVKqeRGCfNnuqVVnHcg3NZ3WptnkEgQP6XVyWqa",
  "key35": "3YLpwMGviZUiCVJzU6FHsFMTwSzJVLW5TGeqxQaZYaut9W2WybzbAtxk9ueiS2FczZ5fAyMXVDgsNvjThz5f39MK",
  "key36": "sgZNmuy9hUeKBS6NTETcdEZGu7ESzY9NxQvVbUZkJRnmGwcNrVQxWHENJ5zvnRumt9u6xQuNHqqHf19EaLbi9QN",
  "key37": "3vxZxNiCKhme8LdAX47YkN7cZBGYsUDmocwxAuYA3hk5BnEEzWQpp4EiwzDc4933Tggva3Xbpj4dHbBNQY2puu4C",
  "key38": "opu8TQuvotLRVgwSPVQCuq8q1vozvNDdoRD6gfd5KJ1SQ5Z6yGk4fkA5i9nioYyuRKaXCGvDyouhzNb6WTNokFb",
  "key39": "5uF5zWboYZQKdT1QdFWn58FhhL3vk8RTvDXxYU3gnPtRWTgrciHeAApAMtbZFtzqyXjxV6VzuxR3D29QWMra8v6Q",
  "key40": "2bbcQdjBZATdYZrMBznxBVt54tknfPpjXqmhTpS77LpVZP2o8cmcmZuJV9rhGnKwTrQKxyPxVD47pmgkqP1mehP8",
  "key41": "2kNGXcaoQ5ZoxfwhmtQms5YVMzqCG2RWHn97C6oVVB5NqMnLt7XdYypA8vMM2m8VKxd2ouXiy6xQfFcpoLmX5BQF",
  "key42": "3YeHeo1mErrYHTryRxhUrU2jv7eBB9J6uMWy38D96hKphvNUrfR6GxNuJLhiUQpbAFxgGQDHJ3eGD4BSwT7CeATz",
  "key43": "5uVZxVdKGUkiEYFUj9LEJ4JAdjK5CrieqC3bEYGjv6Xj2kg72V5qzjRtkEw9ELZ6zinZ2rrPAv69qL9yDJ86HubV",
  "key44": "5MoZyA9yFFMtd8LyH27unFSDaLvboFKwB9ByUENKzpZ6kCPwXKieXdDeo5pSHYc1GJFcD7twm1FxYiKaqju5Cv5Y",
  "key45": "4x4YAoUJhvVMZPwG1pbj7f4Sh1F9DZwzHtkchCo8acKLDaHtLZhP2y5t96EUEjbpCSCCU2JzBK6wcRzxphPhiENR",
  "key46": "5enhRz7PpdCvpMvPMGpLVEttGNryesBsJHisfNgjnkpWzu7Q3T3c4fLJu2UyBfF2vh5NAEvnHicwLwdiRSqUzrNz",
  "key47": "G57V5kMPsr3SsBmmc5rGx62xwqsDXhrnu4VJm4N7DVbQXiqHPpAb3Z6pqPKAtsmiY4Jtyp9C9Htv1WJJb7mXkQM",
  "key48": "22CgNBp7Abt58R4WCwy8yqDtoc2KcUoZJRQ38AXhWhjk26jLUCZrXAfLXXFLnDjCgAJnpf37NVb1mhVvb3HmKMcP",
  "key49": "4UBKzXX6WCR2iv8diRtU8MNN2Tk8i9qFLbSggR8GmRjxVMC2xn3YTzJ6HW72grt8XxaXJLWXd28j2paSQ1pBycRT"
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
