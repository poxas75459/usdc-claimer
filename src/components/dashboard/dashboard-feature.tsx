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
    "2BkkxeFwyPnLjTY3rUQmdE5oCmatpxXeYDRnB92dQN893Mm7TxYSAtTTNrqQez8tULdDpQP3diA9WFQE9oBrtBTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dii55FMHK5F5YQscNCkXKZCySq2Jm1n3NZWEj4XTES5mvxof5Ktu6ZHKVrq3ntbSkCCL4oJRoiVGrrGB8bjQdgi",
  "key1": "2QZEecC2bGGt1fifDeEAis4XuP1vhwtVp3Av22qQC3HZ9NkEcrqPykiaHEVxK9tHKnjExU7HQkgYijYKeN6Dm9Jd",
  "key2": "3FXoLS11UNx5FHNDeK2WuCwBTrgJpQ2faAHpmmKGctBpzd89iLxd7sbAGkcLZCjmhSHPLhPaPGBxiKn2ZzBWmjKe",
  "key3": "SULXV5Uaqh34oYDzW9Ae957XRmu3BE8zVfvU8ehcm2pHjUmBgUo5ho46UZsdEZh2cnABg17qKK2KqZE5496j4uB",
  "key4": "3XhuTD9HEZHDWd5ay9cM3nUASRL37ordva7f2AzWQmbEaYfXLjnD8ftWyWqRiGvi4fMx4opozGxtqv4RsyEd9Jem",
  "key5": "3zjH4SbpwGVcBMg3cYJHvJAzNgftW6BZRAmmVQzJTqRsB6w1NVKhEEcxdWJH5RtJKHZuTQhv7MD9e8MocszjwLXN",
  "key6": "2QorjWcb4RQYEmX4DRoeVk63Akxhi56pnXKy8ivZznKpPeBe9frs8wAgjXE1dTTwnYeN9A9EbDG5CJfKvnKqQAW8",
  "key7": "5hpZBK32b3nX9sfVuhuKgQMifsCWerkWF91mBi6793DpWZirg2FWpZE3umZDBdJemrGiyERor2SQ3Hzxyz5m1FvK",
  "key8": "4bqqLa5Gc4g3rqyAf9LtUycSTVjjEEUdnTJ1CExJfTWPGbVVnxRkhA32YwSuvkG8qcpFxUkRERdc7UCry8xS1US7",
  "key9": "QodKcfcKDFPPrkwyp1zDPqdnjJtRDBSEjF96VDcyNQL5PDJ8Z1TEfEJWAS2woV5DMEMRFpEV1tejyC4Z4rAJqhn",
  "key10": "2SCn8bqpVWPELHBQfjU4he3wmLgWkYPP2SuWEyR6esYN2jNL4uuzSyz8DCnwJ3RxQEv8nodZkiuF71xA5atnQGnr",
  "key11": "5XGVC3c5qFWA3QeME3jyHLDcsAxE6dwPyXvLC6ZrM24ojCw2TJMUSQyZ4mSYTfDzaQwd5fEJk2Vi88uwcMiW2JDq",
  "key12": "nX3DLDPo2DuxkKwv85snzanfEHv8XzaM4NCV9Kf4ovQLdrfVP5NxrV9e36qbRHKMWEB2Pr9zGx1G8RGFw8ysRvm",
  "key13": "ivSnKeDVD1JERPBcxXuritvDp7zurDomWQgEvSj4mRY3FByCqzfkngiYAC8NB2ZUyca9jcFo9w3AdGsz9PVYhWg",
  "key14": "2gDJNixjdoTruNcMj24pfq2xcwQFwopfaKEciGiDH4xgDQSTFscKFQxX5asn8cuewZJ2pPY9BzBAAKMcz3XKLMzn",
  "key15": "4PuZsL3fFSZ5YyVNNSDUoP7fF2MYpEcq1AnZ2RHfxLPZsEfmGF4foTL6kB5DKdR58ddpfiaiQminuhvXT9Eh8Pok",
  "key16": "jG2g9fqqQ3tYCMvvv6ocyvkrzb2wqFJWPsNqnapQDrvh1L5BQe3UafdroxtTiyDCeLJcwrN4NGwsJcJ45Mv3vNR",
  "key17": "2syEuzS2kuaQnrHCdn3cfPjLRFeooK3oayPpJCDbMNPfPB3vzhkRWx8kqQWdEmYsJRiMDoT2DJtdFxuJhFF8TBWj",
  "key18": "2yXrBjj2jccHvNb2PuWSWweLSVQ2NwGTL2hqh7SWT1nxAXzUdCe5aj4MuEPf3nqmejm1mFoUSUoweyUyTaefpfoe",
  "key19": "3qoaWV4Kb3oVELAXB77N3wYduo9RtJzqZccwCkBwX3WAK53Eb3VGrDje9xhq6Q3r8fgMtTosZuyvqpXs1ENdahsv",
  "key20": "54ZYD8df8h4mhS9sLGCjy3qk5KNJYbnrYuNUoAoD5qyt6jYG2cmgJBUmyP2iZbnXmhic5zLD7E6dfme9gG67hR52",
  "key21": "5BFXV1msqdGRRZNUbDZ1G1X7Mgve95YhwJY9m4uGvXSXAwC1s8K86Eg7r5yZLjSBgzpt4kpS13M9vyazXBsznps8",
  "key22": "5nw3v2UXN3di6DwbJfopXBKeYf4HZB8ABmk2XPpcpMia38S2eNuBzt8Rubq29n2S6bvJTNAw2hzEtnyXovGXgP5R",
  "key23": "2dGipu57Q2d9zBEBcdZoFTAssWbgxcZ8VfemUrekK1FM8CzjRa1frPgfNPLeYu11nvqhemcfi5K58Rp8cbY94ecC",
  "key24": "4E15cph29MsfBN9MfpvGXEFMhcwAiqCpMUNBtVUrrt2k6YZ7ardFT2xyfAwTDG8H3ukAPAveMLFcr6Y62LzjvsMy",
  "key25": "2vceZ7vHZR7gQsbSSrVNGQJFRtVFhUDTT7XMeEZhntKgCzC8CfakQcdiAdrU2gnaALZT8TMV6njrMeguUkToeF43",
  "key26": "4Yz7QTKzkixNsuqCDkxvVwxpJ2AqvaX4z5r9Ey1e2eo6L6aTJLrLkvLP1h3kNNCxMMGVkQZffh2umPkTjPxAkzJG",
  "key27": "4LaQ3e6kRmVzByGwTV8HLYdq17ugqYhuiRjMC6nRmCYJFCYeqRjbdaBvVxe1CwQmJN51hqT7e8BEdsAgznQ17h3z",
  "key28": "AfXzMsBkqXRAwtQMpvbk99xGoRfXwTNcHXnyLw18sKuAyCfD5xDryL5zSjop8Bd7aufu97JyxXCRJMm2WmYRm19",
  "key29": "nKF8wCXkiz6kZXYP4hopJ8mSMZS1EAqdMHWuzwmvYRx3ELfLEYUaP646XRTD7kXCffEmNSe2GFEmMVHmi5YxJXN",
  "key30": "2Vjfv3qvYq8n2YbqSBSUtGK5X2N42gycYUUCNCTPHK2GehRkieR9hWGKpRq1g1Te58XomnfNwRY8RsESAKMycMR2",
  "key31": "2i7otuHvDbosq2qYCbcyADqQpf7FVs9td9HZ7Nk9RwffX7A5U7C3ohEn6VPZrEwWRQMsRd8W8m5zpfv46VoJrSES",
  "key32": "2NPmFupVxjLcM8oFyARoSMZ39pZCuqJHQZupBnwnfP2ZX68uuRpayW8uf3dWe32unYYnkryHPTvgCp8wP6XExnyD",
  "key33": "2oKxZvnybQ7qGom1oirokgmNNodRmc21oKcb4YzeAZ4jvMjrYHDpRYhuFEHX4gKzQcegC338wkUr8cUbBTitH2GC",
  "key34": "3kcFifJnvko5Dq7z168PsdDraPcFhv3KbnS4XiBpbpKvzhDhyTEXUwZj3UVMXQ9wzzEsFqs1pWzMhkuCbHrJ41y",
  "key35": "4xdSQM2rBkkyL2TSMczzSGCtVtBHwYEuS8d1RsssqM9UpXEZirffw1S8gfyYvuj1x8eEswvvemcovJZZkwjr2EBU",
  "key36": "Ws5fEXdXi4DmYiXiiC4azq9HvX6rruqeqHYdsQWAo1SZct72BpC2HPgzBu5v1wCf6tjP5Yc1QJGKTNmbuUdc1FH",
  "key37": "3hJRDeBBDE7SoKu53oqf3dcV8X4uJwutgufzqrVxq7C32ULgeABdqdtCTKot6cAqcp7aSTKVZD18KKYRyDbTF7m",
  "key38": "3tWqaGT5cJBwzbRnykZ3sDoQVYTTCefd8opsBGwfdEhbtBeCLkRUtKBsSXvUbNMWqorcdN3qBAeiWYdH2zYyKRuw",
  "key39": "5QSpoqEtuqZqEBMXgt6sMkovVBCKtDCg8eCudHo4ErbEsbfnH6cSnT8LcCbMkwzscBZoAun34cHq9ES8yGUo7Tdx",
  "key40": "57VomeCrY7he5jEMmFjboJvY824WcF4AX47TU6XMXFoZyXiKTojYFRQRt2pnsWjh4ULNvorEF1fSXtm6Nr8EQEof",
  "key41": "2sCYXd7JCWbFLa93B7W3qkjnUHWgasfCjQAJbScLmxKcMn31jFJLhb2yWB584eztNYRH4xfniBdzNYCnC16imExq",
  "key42": "4CVBM2J1nkR49Ug7a8otNCNji78DS2JFJMsPv5NgMLyutBB7KuFzJo26gbv86yh2daFeVpETbcVFYfD9pgsoDa3f",
  "key43": "1jySLqL3Z2AFcUrqu34rzosuzPQFaLqtKu5RS7j6pSuW1E1EMcJwf84j4D3GePhJVQj8FpN1XUW1toCP6janhoo",
  "key44": "YvF14jGc7V7MoSrvVT91ab6mVEGHZnSxbo5fQgjtQ1xKdro5DC8XxwWXjdpkSM1E6rztHFZmxMFdqAWzcni8GAL",
  "key45": "o6ehjBfRcx5Kwf3HuLXF3JejFy86BfrtTj7aNEuKN2NTvb9ypiThpPqUaeM4a5MW9kzrDeoKtoNm1P4sCcMhFp2",
  "key46": "RcmMLxjYtVCL7zKa3Z2AF2SB12CGVKmiQziXYnT9vicyF8Z3xh4dR63n639ZcGiJh7YdLYcCevAU7dxZRL9z57k"
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
