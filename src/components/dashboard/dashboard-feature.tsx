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
    "4BarDUrQtZe6zo4dyPTeo3w5wr1hQzUK8PRn9uVHc5rn4PFJafV7jh53xRKkvW1Yh5vphQJdFQNoAQe8cZcZQy1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBBmk6rQDWd7aRaVNwkHDozqDPfEuUAr1Wq4DpzWcd5oZM912pKsLxVCriZx8CaqSLnddJXWsrbjFU6d1Y5EtQz",
  "key1": "5NXEYeesa6AhKeaL3ESyx49iNDRkDNyifH5gSysCHDkExERVNUHRWEYQjhaj2cvDtT8VRm3nZDtJp5emo2xQhGXr",
  "key2": "2XVhQFPrfmDp8mLdzEUMKKgvK3G38VnPMybp7zSPv7KfJiXGndcazuUbAkYRSKU43euCYYKoFRRRKQcTpZDbnDpo",
  "key3": "5ftqXhcsx2ocRspo2cLGWLwCHVs67Rb2ZvJDNe51sxBZGA1SQiEcCQVu4MsaX2Rg4jhGfxRbpAfUzMu1GvbqqLeR",
  "key4": "3K2FhGJRR9mChdHH22qG8JQVuzLsV5Eax8KYzGDzNWr1B1crasjmGcLkf9A3HZtvG2tGUcBTD8XBGrxggyha2YtN",
  "key5": "5x1MokFqoQ1ZpN2vd8aZ5Ftbu2GeWDv1G6uH2PFJsNcHhspQZQCyKJgdwUPw1ywTW7aumevHW9e3B7ipeqQnPkp6",
  "key6": "2zboLzPcoKuNVSFNVbybNkiN3noCUeiuzncsiZ7oWDPfPxqbuWLyntG8zuAP7U5Xs8hqunX9geSBBcf6xrvnU5KM",
  "key7": "zxiWhiZwYMTj4nP4odz5WmDhZ1LtpNc3nHBJyqp6icC9gA2UXN1y3T613MiMb7jxzcBFLKnuUsLouZe9Lv71u52",
  "key8": "2KhLz9SMGmEiuaChEzQbhvJBuPruHZJxpHuE8ahbqJPe2SQbfQKRZnagXo38TRfA21GB3pjx1Tan88aWYWetWFaX",
  "key9": "35Up8rZKzVrmajojjtDogEJdPNmhCYo8F9Y3M6WJ16zTkrsJthGQFqBmg1qazww3DBheknZkF8xFL1QNicUNfJp7",
  "key10": "4iAQrTJoVsNdGkTvEM18hX1yi3krP7vL7didfXjxQUY12XUrFKAsEvD6Pi9TnSiyP34ogQNfnfchA2KhtsHuzhb9",
  "key11": "3oA2KxnLKjnPfcwA2rWtreMvZ1umo3oKuqcFFjRvRi7XynSw4VPMgRZteHHYkKk4p8YdDvu8KwhgGRqN972wBhcV",
  "key12": "4CbyUiW5oPA5XEa4xEVp89Nc8vXcp2vHm81mayW8Z2HP8xxYckbu4VCpF2gFBuHjS6L9Unw3FjGz3Y36LNzBE9jJ",
  "key13": "5fdMXPihTVitrMZuAXysWkutVYJkjXywypVAE2U8VbSq8aHsjddX3van7CoPPJk3xyb6Rq74dGVjjMzfgTAytBYF",
  "key14": "41LUa9JCp3XqUWdGnBN2rRSz14x9iA1nmBZKFkigCkWFDotnHoS3qBkZv3iSzYbszwMLFNRYL9KHKSQHmyF8g4Vj",
  "key15": "2xXP9M2zyz8Xghb54EZ8s1xQ6E8hQrnVySe9RWgrWhWfFMMED82HsVu38hSWfchLLgXE2e7BXSpzCisek4BgHZMQ",
  "key16": "5zgHkT7zCbBL3uowi44yLxJbGs2rnuhRJh5offXVA4DnJtViRjJgvsiyZkU5fGxLtzyog9WvBfkHicQcZNyhaY79",
  "key17": "2bG4rb8ZWADZsQ7tz9m94JetamumYKNdKEHTYYk5YdVv77Ljxidetacnva6ng321kvGRLjuD9riYtwa7UvgsCBvL",
  "key18": "4fuUfR8DdHh5LsA9NsQoXnTGKrzijrzWRz8Qri77sYCodzQXPoquwnProTCbFUHdDX8PsFSHoSpfAKBYLmdLoaQC",
  "key19": "3pqCjNn9PrcupGB7QwwLJTSCf34sG6hoD9uNssdn4QUgUT4YyRaFyS5VWvKV8nx4bEeNaWyCUDnkwgvQLksSJceV",
  "key20": "5e1sjvJPrXYWoxLqHYvrHQZnCEzbHVkcKGJiMwGjgs6MK2X7UcZaHwNmJqVjwVfwfhqshB6SW4Pt2GwVMqzp71Mq",
  "key21": "36BgE8FP81qKKirV4sB2VBZjyvcRpR7nSd5zm6dPN9G6F7ofSHD3HBD5fQcbtfS9qGv7Hcs9aVB5aMyACrUPVmEg",
  "key22": "ndTeEeALn4PikU1DMNpj7H9ARuRcQAYW31XjbisvARzQWrHo4J9ujtZNDV8y9yYQug99S6CYu6xznFR8dtkAvEh",
  "key23": "5H77WQEUw3bMiSHknpMmF2n6NGY8md1TaGDBrtUQYQ1ETE4Yg4s7bTJsF7pZXZavznftPxeW5ZuWjcJUQAPaYjLB",
  "key24": "2i8MSSPsVAn9Uu2tdPm8zRucnWhATLCj6CMGM8RmjW7onKBC4iyb2UqUxRU94xXgrqdBJoGQ1FcxP6F8e41GsWG1",
  "key25": "1iDcmr4ShN4MxEqo4dCKnGJwnNerF1ocbwcCTHnbqj3jAr5EEKCnWkxYKHMhRtLobC9Ua3wRsUa5Q9qjdZ9Fo63",
  "key26": "4zFR6NNQqXvyNYJui5rR1sCtLiMbs5xTfYhDeZQuVk4kpJuFesHLyc5T5Na6JFD5iBAUWJaBvjSncMHTBDzJxrXx",
  "key27": "CCNkEBE6rJaCFF3555mqYPwgwZdz7kibpswNEPVfe9RwEBg96pxsJAKjNX7KYyvhiG3PD9tZUa8vV64zdWZXzKa",
  "key28": "3FiVNEgcGTMisXTdopt5MgMMNgBEwBz2oXMR7KdzSBm2YsyGM3VJ13PPVmc6mqaJk7is6p2wdJWNTVdk6hkgcYZT",
  "key29": "5Z8z2LuZ6KVBRWzHiDwTyfaa8ZheiLXgifbKYu3Xwwrpd4LyFtgd3k1jViLd2Q2x8AHXzLRWVpDsKq78sMV7zHBT",
  "key30": "4ST5j2bVgKxm7EnvEGEFVVzKEoo9S6pgm1MB4c4nnrSF1Y6fx41LN9yDKqjZsFfzwshZk6gyP5SFCbV9GUvDW8vV",
  "key31": "68s4aZ4bU6JdBAAHD9R7En5FnVLk5kHxQjwunr4UGFFvEKrJFJTcBf8CVkb49zkjkRh5JyNT8KyTo19w45BvDTg",
  "key32": "5wV8Tc832Wt2CJ5nDMmrnLbu6djm121d8XBjJCBeUfJmnDuM16Xu3UXcJpMpPsKhHw3vhVfRBDCWr2Q4u3sR5mpd",
  "key33": "4hd6pMTnRZzFmTPnhiweBP2gEVLrr2dKyn4ZyETBtJiL9gPkqMMpkby3B59aqAm5skpcbTbWYUEijrs1fThJP87v",
  "key34": "4PrRCs7mV3EsSzCiuo2rgsyqxXKsfpKTGBv3xv8ADMkng7Fh9V4tJJTra44Y4mN3H3NkhQ6RWYJDNsqcoAtzhzxE",
  "key35": "3MDg4Jar9gU3uuvmTHP3XuUMDvHLBF7x7pggFBJ32zQWqfudDnRrXvHKz2kZfnVcrxrNyJngL1QzsGWQUKhWWtSA",
  "key36": "THgQVQC9jtmEJnZBddBoGjPcuBRH9zFo7MeicMP8Ra2j3kMiGHfTsRkLhhWn5r2iaTKiEn4gDiFgZtVH2zBv96A",
  "key37": "3BkxzFrmTBjkXUE6tf5vBJ69SbrMMCcGNfsXQea3PJonuG2uJHbzHFzFxTBcUMMVUbLc9mncHAxb7rm49KRe6w8K",
  "key38": "dF4k1Zbn9tbFHkhcjNCGn5wF7Qt8ZbukPfmbNW8jN18NN6K57FJNRvVSwkzof4G26MSVQqPeFGSgp6xnwaxAy9w"
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
