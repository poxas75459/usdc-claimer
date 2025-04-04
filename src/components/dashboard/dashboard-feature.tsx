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
    "4AruqVRPUQpvi6znsmUsJQKsAfWjBsvqxDBpQMDFJMBf6Sq62Z13C1aQpV6na38c1pvaNwqmj7caBFaVBzMzP176"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6458xJQWHc5F5CdDi2MGYqkPnQ79ECiackVsya6QDPTZi1bzkzHpt7xsrZGx8kTj5g1Z1rNSEp9n2EXNC7TzdMpq",
  "key1": "5be3TpdnV768Md59LsVbSMZnbX57oEFkpVmtkxnqyLDqGpfQLmXWntguMJ1VNrrNJgPZYrQGBi3G9AoMtgyoQTZK",
  "key2": "4bZ6U7fB6EshQ29RVoyCpBdj6wrGH2hujiCXPpYenQxcYMQrHNCntiJob1z7uKiib7fuX6jWfA2q97owxyQHWmhH",
  "key3": "4RmPiafY71eMckgXc7keHjAgVgCYcpCGKwvqZkubs6dBZDfs8W3e1jt63L4JShdueHJLncmRof8zWtCgvVTMbB74",
  "key4": "4EnQ5QPn9Voc5PfpZcHtq3GRSEvbaju1XaFLVv7z8G5mokdioAnRUHeQti183M9BWPNhUbyGeXuNKqHfJxk7raxp",
  "key5": "Yu1Afwfx4Y1PaRQa65c6TjhrmqMnUjv8p9SxDZQETvyA1heAkHDgnNWRpKJTSNAknZThgSsCGDHFpbG2YkfYEzx",
  "key6": "5WaPSpUHBvsUDA5wgrmKSoCBWD8PXL64DpnBZ87d4nkPGJ22eFsRyUMMtGAdGZtSyXbiz15P5RFrzbKkw753r8xD",
  "key7": "4CQ5PKZDebbjSeiBALAL279oF3UpDJcYpb55tRSuk6LtcoMsC56cirNSh27erJgheSFedwMtUBpuvSJLu2QFrXjY",
  "key8": "45Go4FvtpRjnFKxD3GFNBUTePnNwwoqB7irp3ghCvfGVDrokA5wNVmSMkLdAzgkXkJTkdZ1JM6SbtpBYHViNhipZ",
  "key9": "2gJM5gZpMqzDGponNAZM3fUEx337L4BwwfGM5jgKY6roJAwzmj6v5RvEneNCCcaDdKLE5ZfKuGWJbo2vhfz7XAFQ",
  "key10": "5S6QikEGAVzc3fvhrr5DmNpY3ezgUR5XjZhb7uywsqEqp4cyjCmmWhf66y41zt1hqij6Wi3JMzk2hmmQPxvTpkMU",
  "key11": "3RLDdik4WRortx7syD17Jp4DCuF3TFN8iFLAb2F1pscwnUvgseQDej6HBHp4yNVhZirBoyZBFhEsnayASKpXpxGP",
  "key12": "2MEWnjGM1MXnzuiGUqt6XWAWZjH7DUcYmrGeB29QkTm4SAaKg9Qzt1aEar83BcME61Bf42KfUkGTMqSPT89s9mof",
  "key13": "3Nvf5Fh5s2igVGumuVFCCEy78GuEURGU9xKcKDFMGN98frw7NB8a1fshwBN4n1q2bvZ1jVAUCwPkq1i6r7zkbb5d",
  "key14": "3BHWvjquz1gSF3aYXwGQbCSqUp6KGjHtRGww7TiGJHm3zXMR1e9WbBRTAyp1fVQK2FYvTHRCV5XkTfp3KXZss9t",
  "key15": "5rgvWPMdrpH431xiVXFuf7iBoYbtZQkxNMFFfFWKZpmPvsh14as1D8JtUcGNLrhhho3mXLaWD6WNAvDW9ULqx5B1",
  "key16": "2bWZnJw8JxveMjnExnMc9RMpheT4sA7wiMdnazXPSB8X66VYsxiUUbzTLj5mtzvDCerueqts4N9JDwaJPUnaCgK9",
  "key17": "4NkJCZ7u4szDXrBwU4nBGuUjfdiHQVUJSmcFjrQtEq1XpndowuWvSoX6gAjfxzLre2B6Qd92Hh5p6CoayN4AhrPH",
  "key18": "xuqz6zcrcFsV88mYjgNxmVzLSZAPKXpqfZLLLcQ5Q3vHd2hQtvdzjad6kpgwfD4Hh73U9VdhYhjPCXPidKwyiBw",
  "key19": "4vUtGEZfSgiLPqTNQdY76X1J8Nb6A5GdCyr4wTmPg5Pf5cbtPjYrLrN43krm6HJkPVxRkUm5TqidCYTHFpYUG4gJ",
  "key20": "5UJ8P9dLEgZZ3q9gx7eYtaPkoSXsUZxjrhv6RB79P7Wrg3NEBe4qsQCyQUfsFbX7K4PJ8UJRNRYoScg5HmNdWkuA",
  "key21": "5pJXb1CVgUx6u7qk6CdZbmrUZZQhojXH58ywYWrneQj4iJMfffpkahnNP5sv37UmP39gXAXFLmkVVbKQjGfQxo6S",
  "key22": "4k6cNE7ctfhYf7pS75gFzzSpNKns8dJqeSrAZVGEhLnbG7JJhsmAZAA1SDRn3DZnLsCZfpxr6Wu3o7orJNCM6of8",
  "key23": "risWHZQ8cRg6EjzMM4LM9Qt2PjAYMhHnf3EGGCV5FZPBsZNSgkizaDuoThQH2UqXBTfV3ACQTPbMqGhJkgRZtFk",
  "key24": "31dWKHs2U5a7m9UwiMULb6VxXVF1kZvTjHv4GuCkaVzMW1KUCpATsUKfad2cJ5zFZu5j92LuMxeNGgeE1SBnbhB",
  "key25": "3mVDnVXSV55QQKV6TEY8iHLXcxU9pwA2aNyzkEdHaTyiUiPC8JXs2VfpHS3A7xigqMJFzkGhb4VGVzNeCoXH1vtT",
  "key26": "2j6yKqFFfY6Wp63F3GapzVcwgj1nz77PRPpcT5zEUYdqxBw4wnk4bkRicpco1HSxuVFVPSEsQNQknfMc7zeFqdtn",
  "key27": "66ioozpyYpvukHxzbLZTZuhnNZXFQd39u5ypAB9bDNdDt2facrVjZqSBUfTpNsd6aDH8WwsrXdXGLrcGTEzD7Ybu",
  "key28": "5vuHsQ4zJq3CowgR9CatJWQoxZkSc9gTRGNnrqzUi1ae2MNtoCvy5edyCdZsDzeJXfDgG3HEjq8gWeBGo4J143h6",
  "key29": "3qkGDHc8pUvgVC7vxfvs9TuoLM2msvZj2RkA87JH6x5jUzjifCWE8YxnkSbCRdFiXJ6FBwttT32tqb4brySnRi3r",
  "key30": "5dSuAfB8257boFELniAMvRw5DhHvwrPrrCAC9BNWiR3fB1NbQfavvpDNkV2xLGjTGeDTHph4w8J2E3eoLEqmwprT",
  "key31": "4fHnbuMV8dxnffJCSsMTRzaUc4Py3QWq49AvSKL4jCK8CUDM4PavQuT4xFmTiN9LJ8AiH2MJp7HaxSwHZFgwV7Ma",
  "key32": "3VsJ11TW6QJoMs5ez8ETEPP1YEQNhJf2ZVaoh2Hy3GDD8B1pYxftzANkRmXssVGiKBoe8skxdsWS9yN3EtkuUuvd",
  "key33": "4QgMdcmU6ZyTdznFhWmDRQbykfc6zNZTR9eYCdQ7XF9eRyoWC2YjQmPN4uqzTa3P8dH1cz1XSNDc8meYjEQeTYyG",
  "key34": "5YjC39pyThuW2kkJCp7i276sHuBEqgHcNQMdD6TRRYXUeVzn3kA3fbPwC6gn8W8zwZjohKQPphCq8ohS3t5sHtBq",
  "key35": "34ekR3gbVg8BHiJ1cQh2wYwdukoUq1YJ2hyaB3yAHEb9we9pRrC3qubnHDzHVJaJiRCTsUoxEmVhtpPJhEngjWpM",
  "key36": "CZeqkf9PttgE3iJCcYZ9x6HhdYR8DcxY4eVJxX8nZvpNpZVBsWdChy7MztHcDLcTbPPM1jpz5if63UZdPEhyjmy",
  "key37": "3KUKQmZKJ3XUP7mPHPV9Sdk8yD4w2Pde37bcKwMZ5u4o13tmVtDuPBYvufRCV6fiqupJwrmZg6ytDt8A3mt7tqMz",
  "key38": "3Er46ULprbMYSVz2BKZTq5fephBUvwF363tPKXqor1JxoYQ96UhyJNEdYBm9rHaGYcqvP65PoGS7rEXECk4673Cz",
  "key39": "1jGPmqTAfRqjmuuSeEHCQ4tXkc2w6F87WRZ7G6WJbNBhgSYK4bNhgNXYGCaaAspREyLMGuAnaQjebdEJjS9bu31",
  "key40": "5bSMKPAtS7xU3MRgmYipgzqzzs8v5oXak2KbTMTJn6UbJH85g5nCxbFCdY2PDmEU7ATqSunZvntTfTFoDbgkiYYK",
  "key41": "53kLPtDC7oeiYZsPNYWuaFsg5wB3tDemyfGiHJSTE4BEr4jqZPfVAKtUfeEGBD5rzDoUxfvD9b1393yACUDFPAgi",
  "key42": "24tW8Q6wxxHPUG54CvPoPQDngowivn5PHhcz1azqg5Nyum7XkmzoLRUgqPXrYUkDTQcZFUyRwyGWZJaSwhPArsty",
  "key43": "2rtHtZce2zpXeaKEe1Vo6eyRqP4fHUjgGj71nq6EAtsaB8HspytQ2Ms9hjihcq2zM5qibBU5sooD7G3JZfQZSxe",
  "key44": "5x5NcvY73MGQaWaSvENYn6imVAriMnCDRmhMFw131y4NNZUzZQyFm39s1ELQEeXLPY5PzVqLN2Yw4119NWmcyLLa",
  "key45": "bUxABiCb8J5Z2h8wuLwnRf9eJGnnAADbnxWEhfcu4YascaBMkhUmprhrbRauog9shfpVogBDMphEg2FexwH1gtm"
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
