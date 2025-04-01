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
    "3X6aiD2KBEnn1HtTZApk5whmnXFFUye8TyszZQnBMc1RWUZGDpzQFuD8XjMBxHa4NiqQQBfA5YaSSRnmtNR41kA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ukVnLqwmbebhYbdyuVm7ia3UQyo61bFBZxETc8rbCkDMVBmUbVy9npQDzAm5yPiFjQgiVZWjKMhH1Z1ZDg9qhuB",
  "key1": "4hk8CLdCj6Fj5hApFq3MEJJP4Q8H6P4AQqTXw7Ekm6go6G9Qw1fN6RKa6jdxoWePrehAUR5wgaD2p6gG3N8nm1JH",
  "key2": "3tAyF8E7eh6grAy4hkkY37XXgvok8ghuCC15UBr52mKAwBqPy6w8F7UriCTEsL2HAgSp8QDYsZKpDDPzaMZVoLHB",
  "key3": "5tFrshToBptfxPrdAdno8R9wESGdmSPxu9EEu734o1Ua6bnMc8xUjGXNapFGBhbBDJmF4bjCw1ARxTLpEQQmiqp2",
  "key4": "2jzi22YugFhJi9j2BMxt7AaNV3k7tC6PUBcggupiZzsFh5Qr7W3d3TF4ZPQqj4inbzdMtv3BzzjjnGDLDcTpedkk",
  "key5": "3z2ek4mJhbKBgzjJmBSr3TaQv1vz4rQ2p3beJMTwRZPqx5tyVXD1fHeWRRdwmPaDPrzLJGHd2fZnaUAZpu8WjCrt",
  "key6": "5V8kdMMbDdyn5mA85UEJ5RMX5foQkXwyi9N9xjPmKuMMzpD3SoJNAseL8Fj6BhvCunc7nX6YjYouUW4f2HygnEj7",
  "key7": "eBsBuFJYN13dGcU9eUuS1nQazibRdrB8ZRjAd5mVRMfTcVunxfCS41x8XZvu79HEmVTntxfJc1kwFc8WRb4obSY",
  "key8": "216r87fdPQDqxL2kvaENWtpJUWRryVUf4UJ7X319NNiy1NAi7ba4WE8ADeSKwSuBuuHXBKyNJnA1jxmwGSTjxCHw",
  "key9": "54S8dc6W3zZeUN79dxHVzAmQ74Kvtc75KGhWjc3ixxboww3gDpaCkxp6j79esgjYFWkKr3ezq18jEcQwWsWXrJDZ",
  "key10": "33MGMyo9KZ8MP5yNqhUV8tjPEqPrYrVVzj6ocHwRWNLb9jKLbuMeec6Ntsd6Gq66UTQnTtMgU6Uk6e5tW1yUjntL",
  "key11": "jR6wNi6E9xidZegHRzJYsVG1jco5jQ6TLzxcLxwzSxfNEvTJikTtztJkL645Fb7Jf9ohjHRekTDkVu2BYEYWrcB",
  "key12": "4pRBLYByWKe9TN8Uv8tEzXk7vTPyVDpQ3GFhESSavNH7KoVv5gUcWx8MNAbSTbka9V26EbMTET4ey3jB1XChhvaQ",
  "key13": "3FyaLR8aRYP694p6nGfaQ48VC7douqEEoALs5awmLacWYvHVFbzCafQhp38Wdvqd2KF6AifVymo5qnG9bHpwWG6W",
  "key14": "2a4AM113dTyRwpAF7gctTMXoFGoqZLBznKrwPe78Lbti9ZHw2EtJJCp65BTcWVroMbCp2HvFzsQ6xHn9qyNPaeF2",
  "key15": "4XESw9cgu77xXmbh3kAqFofWGjuQGuLE16oWtCpe9WHZJGqV9nkeRTgcuHpqnLenuk7FiVsC2Fh8hC2RHJk3m9Po",
  "key16": "3CDaSBGRKzhUUuN62p9LuqcqJZtJ6ozwRBVh44by6us5jxQrmWShd9zCeYvogLVfRgsktwc6T5Jd5Boc28WTkF7A",
  "key17": "626m7PmfULJu9Sngk8zKp5vFoveKJBkYRp1N3HCmujyguELn383ppZMrC5aYkP3jGM61G3Qk9et4x2UHCXU9YDxc",
  "key18": "4NgQBPomPhStW3MLt2AsKrXtVoobyM3cWUvvvcRPDS6kKvDtw8ChkYqjGMheDKYnnXR7B9sZBr2Kqkt2tK741miW",
  "key19": "5RuGK3gXE3CSc1Y9bV1YyNYHtF5AqCrgmUmQfe5L4P4K5P91WFs1qWNujpX4dHQy9NzsdqHEg67PQjVkqbBR3QX9",
  "key20": "61yxg9XkThwXFJs82QA2kV2dLR7FekY48zLkNpEqLGWCo5CQAdUXqQ3Nn1PHpfXBvn1mYi19psCHMpYQxWwAFwWr",
  "key21": "4TqfopFFZJxHEuw4NtWefyvho5izd5cDzocTan31e5pu26vZu5Zz6UneUAChniowzxXN2Vc1VukWxXBNbqAC4F4t",
  "key22": "5FDUCXaeKdn1DHV9cJsNmdp5fe4k9HTAvQzKxb4J6aw8es8dHNwsCwyYoVVpsBzMj7uwcizhFPS3AtBe2RXoZ5dQ",
  "key23": "5GGK3pDDAs445p6WDa5sz2qyzD3d7UYSRAPSwoxSg1WFFYTMDDRBtrdggNf5uNW7uNyyDv7pzAjhAjSjArrFKdN4",
  "key24": "3pmviGG1ySxxGn8ZTyJxqmcdqDN7CFmVvQPY49TMYT5DUQjm9Q5CibfLAjfTM1g45e6VrfnpEprJiTbE5Ui9ucL2",
  "key25": "54xoy2v5aKVVVkQt72gT786zoAm2sqeYhnaYK7TwxjvA4Qe1GTSMkTdkjtruAJRkAURVMiXCJB6n8VMJXLMfHweF",
  "key26": "35m7KtcJkCYUpg7Y8FsMJDWeZNxQdvZDzQNrYw4n9bnVnG9wd4nNLenmTbc56wRPuPKYhpCE7AdjNUmks7TaXfY7",
  "key27": "3DYYVpuaXYia9crLvHBSPpgj6nt5etat5sMGkRzPPHUVUyB2z6RR8WPTELxgcsF4SwVGjFMYyJx9GUyL7uKhJmAU",
  "key28": "4FC4KNPda25HJWv1udMjCyTD5rweBzQZb2pB89chc3N29tbiPyNyGx1sdgk6xbPofvzzFNByafsajsYXsULUr6FB",
  "key29": "4UaiLZM1EkiDoB68ShdEDzzDGzGNXZYnnakkHNBQmcL8RbMuekZ6jaCLpr2V9vQfvDkXCgaCZRmTwnwBYhSy5wFh",
  "key30": "33xL4Ybw57ojRc2CybcUsvGGCaqFaXb82sMVs6cBakHsBtbvF4GervKk6ohKrhvR2zbwdrcFQPUh7ueSeqR7hG9U",
  "key31": "9raqiaPZYz1u1pVtrpk3ByHfVkgZNMQFj6uzJAE98fvmFksy6mU9PKX1DQEm41m2ejvLdAmwfx3ZmjUgohAFpnU",
  "key32": "5EpxNTUFQtzA38ZGoru91zeJpEE5usc2htoVCBeBpk778aVW5pLQq8F1H3m48LJXKVLtfTdGZQnguvd9vUd7WCbt",
  "key33": "42avYJ5Vasha2tDmLZBVGipVva1xp7fuPDLQJcNNryZAQgy6qDMsH8Eq7gUY1DDWw5RQnj3HKKtCrHZKeYyhRke",
  "key34": "3YeULRm82z5bq242CwVFdj89h16HJCo21tL5QSomKtKCqggUJrFuqM6ryXbsUV9hL9rFZxgX4ZLAfrRnWMr8E5xU",
  "key35": "21KW14NFDAVJkpKXemvVLiVWSZ4h1idvwwjYHkcFReNLFaqkVmr7bkokjJGeerccSpKRMbtvRRto92itZFGgcj4M",
  "key36": "3KkttuKrWui8LNXriTyX5J4GzM7BmZLiJ9vqczz4BtsRCYNirGn3co1mDe3mHQzT2RuNmG2tN2d3WYrrLHp5c1QP",
  "key37": "38v87A4PcTReWnWhn2ifkuQLATbNJT8eMfirgxUzfqeb1xsejkQsn6mRJfCtne6WgQ56UsTCUgQsskU31SipceNk",
  "key38": "5EBT4KZRFmSeJCrJKzyozhFk1s16zYzw8hE9VGQdQJQE5aZDanCmCVDqgdv6PDWosoZYHyxjrwN2KbqoeHpvPefB",
  "key39": "3oCHsgBorBVYLjFvCwtTidHxEoYiCLessuorHuJGnuh4MRPLnZqmYQVFPa8chxefd99apDSyaCXWHB8WfRSftb4",
  "key40": "UmkYtTm6z27BojHJkHLtTsKiZsNRo129KWv5SjHZcsCD2knyv99QkkDyMfy4sYwJKmiRw3LmmVaqNrxbHtLZGY6",
  "key41": "3PEEFegXpXjte1ikuxDK9eKqDf8AJdjdCN6UnEy3GKeUzcXCBCYuenbKvAhwnpmq6DMrEdoEdRwHefspqyRQ6CVF",
  "key42": "5t9tD7PBGeFodd5RTJNcTvhHSRXhgZ2rEUKYPAV6huFh8FRU7khniTGuHPuXPLAR2mdMRGDYWYyhErctdfu5WQey"
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
