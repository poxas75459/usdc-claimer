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
    "4Jjzcf2pcfMf1KuTZXNoWeR9htSS8ChKbXYdwf4hpaDpwsraWE4qMUq9ZZWi1FVZNLhgWTpyDAtyoYjpwqPo5vcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21BaUPbqazgzSVsmWVVcvyoMap47th2drtHu9YKgBMWrZok4gqHTALFK1uGomaRjsdKzMWZzLpNSYDvGEBfHaACD",
  "key1": "2ioJhwhU3XJqz9M92sPYPe2mPtpSpTMjApvYVwetX4yo2A23TMHqeJkaDvUgHNG57HZhAoSdKFySz6jYSvGsgs8o",
  "key2": "5NNodSZwzVu63pcH7Vg8T9eqSYCDGMHUwnN97x14f96HSooY9hBKMkgFcGsPfa2z1ZpbrwaJyekhDVaXa83mKHLv",
  "key3": "5gtn3GTrHrfyBbN8dq4Y3JeFPaUMQBXUHb2Ey9Arpx37G7CFtU5PgDFAeGhAibzYUT4udiYXTyBKgQ3FdFpNFScC",
  "key4": "54SBtS5Vin8dGgZvEzhjqCYYGnst1Hmu1U84oyX6NmM2ouzDxUpFBMPy41c81Jcdwf9morvyT6mnaaXnWahZxKrn",
  "key5": "4rkR6aZ5S4mJB45TVkob8zvfyYxGUjfuhzSkHyRvYjREtpVgegXJiEQVWf4Z7dn8nvLAdR4T9BG4vPrmVkTu7i1G",
  "key6": "4qj1S5MfamScDtz25uHDwChbhHLZXVVQhQqvoZuNkNivVShdQBJyHiK6YQZHKnTWTgpjbB52Sh8zgnPNfcrV3qD1",
  "key7": "2dJeE1cdqs4iStsjXNw2xKzBWPcfRSXpXHb7zGkWRJsrtgBN66yAApjERkxvyyjq4sqHLiM2cse2TX7GtA1JYFMP",
  "key8": "2X3oz5sGNs6fDU2vfGQ5BtVSQxAkQ5k4ZSY33Mfxgc5oHWm3eRxw7swC4wmpzp7APaHMmAyGnWiPJm6sCAG3z9DL",
  "key9": "3gFGSWMLYToDPeWBoB8te9evWHjHZmfaCfJrCX53a2dVTcFWWvYXuqeGNS37vbTQ7ESA1dF32RBF82V2MV7xDiwS",
  "key10": "28NKY421AWVGY68PYsNBLi2YRPg1SLmutP1ANWhSwb7tynz8VvEJjffZq3srwYosB3zF44Kikidujg61QtAPibb2",
  "key11": "2dupctNQP1E9xxXSfks5auLKrwcRF1F1QcEQUXG4XSnsACVQ44gJxNMheLfj2ZGPoqBT8BJERuxhSNhF5YtqKpQL",
  "key12": "2ypbAL4TPCAjDCLyr7rWrAGvJJG5GaMvdrx2MYPWZuNbKeeDQWUZkCCLfkvW6nm635VjrrJ23XcdJJjEccgjodsT",
  "key13": "4UWvqTTG3BWvar1h3iLesFoDnWKXKMvXTQBuMWW7uBHZfxfy7v5t2bW9MusFDPTvVVJjkw8ddJycLPUqNSjgWFaj",
  "key14": "4YFcCQ59tJCUn2ztBowvx4Ucf46fhUFuF3Db36VFZ3DPHVSLMxkeW4iQ4j1tDPWNToLrhRjVodPdEMCAeDE9cVQ4",
  "key15": "36RKiux6tqS5HhzU6qRvX7LeJm9hkgNLMNdiggo9SLmdEZ9SXqCTDz1fo7LmUS9YNMAAzF2JMZdf4HuAZnq7x2zi",
  "key16": "4nEyBu7NQm4uMF7Gs5YC24hvCWBAGzQy4qCd94CodwXQYkdFHoKVi51TAErurSyrVbZoaK4o3QntWZ5M3K6Aoce2",
  "key17": "57NTF9LJdHrX3HGg4DR819TpReVtUgd1h4VHMzFT8pFu25CikvurWfmQUDwUSWGgPBkVt5ZUV7SywJWdaapdZhJ5",
  "key18": "ndSDkj8zUNyMzHQt6gaVoFnK2JZCGTb75EqeovN7x54RqPQQBEKJqwymvZ8ZrEWoTZhsxewdv9BcHMAujSfRBXx",
  "key19": "4dQfL11x21uu4o1fGmUNZc2K6JNB9K12n4kxKGnUzxZKeHkTUGyqAWeRQGF7Q11W3uzFRrnH1iLCVkxXS27Mvc9T",
  "key20": "2p2GAzZc5pAkbcKtFNpCoRTZAWdeLcdYA9gxtQftNRnoq1a9JU6qNAdw6G5LQwdT6TGJ4TYdbYLZ2zX744jYLSCS",
  "key21": "wjbuU5yZqyPV1iqdSphWHCHLowKHRzSjzeZysd82Sg9fWTXFThNK8QMX3UAPuSvrTPWfic4ayZPTyJhtjUBJ1pi",
  "key22": "3Y9GRbZtSEQ6TR2ptaHDgPiqAjrTGAWgaeRzzwp8XodbEYxN9nk7yR8Ahov4iebNuHut9rRJryAPB6Y4uJiQvRYw",
  "key23": "3u6QJi8L7zxtdBdEevwG6gnY5yWp3omw5dTHs9d1RkLqGWRG9MTStYBypD2Cit1WJw6cDu8koXorW91WKzwSg4PD",
  "key24": "47Wufy76oKTVcqi9DY3m2et67kgVaAzc7BoKPwZet1Z8obGrSGYLedaFa47nhhGfvShryJD8cjrh9E8xmhkAJN5C",
  "key25": "4EXbdu3aNqeeX1jtfwUzdYb7VTYuSd31FJ835Y8iZyMP11uYnnVTophN82D7yPEdoS9KbBfrL4Vznc8kT8BEQegf",
  "key26": "53UwD3hC2Ttyec2oos6Mx4U6AVK1egNiWPVUmi1EhrVqLuRajUY41En4JVC4x7bgBqJtHDcu4yHiFNgWLnatyStX",
  "key27": "3zN4CCM6UANypKfYCT9UxnRYLsPtULXjAg2CbRM7vDqdMrvZvrXa5kvYWX42HctJtsDzhxws2pvPS9XhcE25k7aa",
  "key28": "2EB3Hgho99jwbWxBWh6ZZxxq6nef9WZfBs3dVpRSgGcvm33B5wJyc6rezB4nQkssvQDUYaXvTx7tTpqezzD3WGag",
  "key29": "3teuWjFmei5k4oSPuUwXyMCnDnsRK4vGAHaCcYwRcTTBMpRbWfZaz5zTcavnJjZE8WY1iZL4vERLK5Xw9iiMVwSS",
  "key30": "2yZHQzwNZGFWtCVEg8f8Bb6DnSiGyn5gFbfjZTetdNcJfBS7so1L1MJW4v5KHz9KthxLaUS1QmaqbjqewsuYqzSk",
  "key31": "iTB4H2D5yzLniVS32yqNNPK4SarrXc2WCm4wpaFCosEW5py9ZiwkSYxoxKwzKwjnysydszf7rHTrtaSyzL3Gvpx",
  "key32": "3DiDDwSHYCCJoBji7XTbzSda9dQ6TAN9tt1JMZu5LSE9oZqMCpBTRYwovKjLzjAC6zWpDMdiJDizLv2dSjubSZQh",
  "key33": "5K8N9gWK172kYZfov8Ze88P6qX8JTHXLgKzd26PFT5wDivmchiaWDNKRRVaPcCL6eeL268ZnZvJpbRy6dbm8StGf",
  "key34": "3wKv2uAqackHNay5Hmgn78XE2dduxRtEQ7zLRj78QAJLMg7Xp48hrXMHkewRsS11NjyF3mdvQJXoh1cBNBtUppnX",
  "key35": "64NaDL3tZx5NUw3hnadLXfLFb4pdsLHthqmmz5ZxfcezcBVZ6esPGTUeFUHHik41BJz75GHwbe1g78mweJhyeDGz",
  "key36": "5bYAYYHZMd9ZbeL1637NvqWqTkrkgdgqBP6ifzWQrGibmNxi6qjiBzmmxsdLbWd1Xu5J9x9S496qFYkbZR2NAsFw",
  "key37": "qoABYCDPYzan3Pg8uxcGdrdxx9E2QTaHJCCi63dVycr3RXFpx8gitUiZu65EFHBienmVWFPdvFH9ZBPAPtU7Gsf",
  "key38": "2rEaaHtNUJrsQWig9i13QNriH9LdS22DxFmfB5ueJrZuApUdW7Q5Gr4eJcoJLV3iQfRXUZhyNwWYN9xaebTnW6ze",
  "key39": "66K3SYGMHuXngC1BGmxVgDrZsvzL5Cgi8aaLbrPRC6rRF4W1bciaUDDvMEuxA1w72vvsjqM7aQPvyUAJRHxF5pgW",
  "key40": "2Nuu7K1p3MFpbtdY7pcivsp7JdfNdCJf8NPydp2wTuBy7CqUarJnVG83sYqRrVkS52LQ8TLcZnn6PDfDAfg8KLYB",
  "key41": "MtZgr566n2jWf5LTBUgfsz9z5bXpaTnSRcHXg8znUpUrYZuwqPMFCEWkfXeprsvRELnoSQF5M3XNubb2deTHnMn",
  "key42": "2piK7LerPhHsVUg51XnSZPq1FkXaGL7arzDyAawyKtii9gCxck48VMBcGXiAnhCh27fzmmLAKbs239suxZ1mBTrt",
  "key43": "575991uKhQpLsKPLSp4JR6PmCAGmKSMqeojkmMQQnLXK1mamuiWXYWRKZ3Q1zBS7jcXGawEwQYHGWve4xDJQXcKV",
  "key44": "39pM8N5k8Qc62yDJfsKuPNRRHthmoHpqgqHPeUTuj9bitqoXWPh8rp1jsc4n1sEk5sX6TCh8tqk6AWUZdVShSSo6"
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
