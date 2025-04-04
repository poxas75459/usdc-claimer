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
    "2BxaYxDxXNu7BtpwqrTC411ZjamuS2Z1sRATfVnx8dkxvHADvArj2iQmoBa9w5exWSr7wLbQFKR5K2QQ7VuyqFmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRSKKahuysffKjd6qxCtr5LBrxzQgLrvqZgngPWAiFxWo1TB9kbxst8KDXRhiiAtZCBmqtqGMR22Q7SuGkQL8GT",
  "key1": "3ELjn5Vim393ZVmZE2kQPKo69PN7tNKyseYadHPnnEwKH7h9wBhSD6AeLF3n3JYk724jLSNkZCEZysH6rkYwgLte",
  "key2": "3zDieJWZ2Xu9ocrbgkYtvxoiP6YFZuwDrCVfvCenRNcdVGtEz5axW2bqdPnGJoaP88HobmZ3LaUSvwLr8KWKvqFE",
  "key3": "2enWFhsmsiRrKQDv1Xty6bdqWAwUgoo6sHg83Dxb6CWEoC7eu6yVA3oEozFTYSmvjnotHwAorpprzb4aai4F1qPS",
  "key4": "3AQv5dm6irczynKKEbPLe8bSZUpUVotJqQuaBGVT7n56joZAtqbEnuMvWFzWspZD1XRBMLEAdrVcttx6WYstreaR",
  "key5": "TWhV1gRDjYcWi1Ukie1bLB8sfDKDQ4ZtqD1vGnwT6UbybUcacABecsqAPViTwmqrX7nCdcka3DbaPT34mYEGyGz",
  "key6": "3ZLwhUpq55EaSY3J2kxJ3BdDCQuRr3uwQf19FbaACqLGPHhBuoSQMZ4Qro2oVvBS2w2icPUJaGVNGVZBRetyomvB",
  "key7": "tZBkRKH9rLuXTgstvCi1TtQSk6o8AX4JtcyY5Mkonw8qa26zePyeuunuyu6quj9Q9dzDLeb4f7YLENfdquGWNRn",
  "key8": "5kXAShthKTaTEp3aN2gxtPYX43obJqyMb1NiXMsDTixcF1HCnGUDLbAyWzEMW66kt6Bneer55HkKZvCkwGm1Lmh4",
  "key9": "oBNnHHLzAVhToozKJzUGoWLbD86csdHV4CNrQrvuYWGciCYrSXu1wiHyXVvxUuPJFxa1r6JRgw7AwnwSru4zFAV",
  "key10": "5c8cjsF188DeizH8ioCyiDU2ZxcpDYR8ruaq93zCi6PKvwUFVW7E4E9P4xryfTkz9td41GnExh14b5zL2zJ9HgRx",
  "key11": "4Zv49shpPRFyAosHEUF6KeXnSfvzgyVsoZ75nHW8Jtmprpm8EnCmQi5fJPjJXuD6ySAbDUK5prTG3NoEitCEiTVF",
  "key12": "4j1FiSnyk14pw7aWtQP6drV1UZaDhBg2HgBHc8c2X1HqNtx67HHzn7WJMMz4YJUzAeNCjzywPmbN7oTzvc2Aenzz",
  "key13": "2QVpeeSRQaZvtWsCPH2TRjfArba2f5kqhNVMhm9EEQiktJkStQT9TM9hsVnnBkrpo7dYixJuW61Ua7wdKhWJpQJj",
  "key14": "44FJfdkVo4mhoS1cnZawMWwR2j1yivYzFnP2LQCLRbahNNQaZNvBGmghWzsXma5JHzRkdip6Xkh5ncJHhtG1gktm",
  "key15": "4BF3gYFiDeg4oECCw8GkQFCwMNKcmqRS4JDgKbNYVJJ3Ra3YhMLTT36j2Uc75YVQ49aacm2gBknNzo9pmNB8aYQM",
  "key16": "2pqqBvf4UphmLLA4TKjz3yaBiPHYaNRRYnqrWdnoK5WJ27xiKW4aqhPovQthtFDNStJDTE1gCpaEJ6FA73JTgk1j",
  "key17": "4x7i6V9EXppGYF5612RqBmpza4bGxFEsMUuTQzpcEfJu1G4WPvAkDJFb8D8vsTVN8HkrxhDQuVwA5geWh89fQnzB",
  "key18": "aCbRymZfbyVQKosvUFuoDeDAydyuGCNBs5U7Wg3o7d8YontSKB1qcoE4hmJdMnttmVGnoePrahjZyEAHTLiYRQL",
  "key19": "4E65KmSj42CHUtfbT9jcFVtEca2wmmngg8QX5GbLxm4Xq79L7F3LyS8jMUr3uuj873BCnrbKo8Zs8ZjdfAmsZBbh",
  "key20": "DT2JpXhbpLpZB9pBKoHE8a7yxvt16DJfSZHMxYhmZrp1gx2CJR9TBBcmqVLpwLtpu2NG5sEKeAG1UZzGPRrj3eX",
  "key21": "29T3nbtwg333UA1in3NXmoFTLNi6wXXtzmdGYvAFr8drMy3D8F4h7MZXXRWVrc73Hgts6XKW22WP5EBWKHvd9wV2",
  "key22": "5ZUw15WxjHwufaLWznVsPUTD2UEe7GdEdg9jo5diWjHAgp9EJJDtSi4pryaeNA7ApJqwEWqe1neytshHciYmR7Xj",
  "key23": "bsWJUei1TyvMuRJCkAm7MdhccufmWdvFU5XMQcJYHrHn8Scqoi61zqsNgtKbxoSW67LCgkSAd82DikeTkhkgAGd",
  "key24": "5S2eWKU9rZJxYmzRzY26Ntmh7h7XRGpwVEtNF2wdYQs5BGhFeBYSdBruj3HHTuhubkaSVhpip589jzcNnRP8JFJ9",
  "key25": "5QtKAwqQ73XdwKE8pjycD5JRhpy2uJ4Zx5GFzprVP9CitgawdPPHeYiJkXRsxqYxNhKcDWcJr8CHkN1HaR9w3HtG",
  "key26": "B49U4ikQBErDVjGcMTAzJ1yKHuC7uRJTgGujE1njdoyrEH3tW6WGgHDkFBTFF4HQWHt9iEBMVUVhYkv3oZ8uZYd",
  "key27": "MfDBP1jfjjtQaT39sevPHBGa16csPhy8MV6Ba3p66NKzSHdkAaTVa5s7zpF6br963Snk6dsTdnWXBRE3aPa5Qvg",
  "key28": "4NqqkBLk15a7A8GTcWbwjaBoKP6KUSf1yZvrnKTbpoHzKMhdJ88ch5f4vKr9Ka41w4knoBLGnxKwNshNgwm9Y11U",
  "key29": "imB3o9r7WekRDXDYkAY7PAsjWTQKHAswhQg3x7setJrMdG1KxT6B33Qdt4tRMCohPMhJ23orngZwuT4PMcmxEiX",
  "key30": "3AHxBVfYJmhb325N2GFJpqgRDde65SgG4xkGFTPmc5bDfTrWUw3Rtk3eSUAYtJCPFmzNCUaEnLibEvE13KdTnG77",
  "key31": "5aXfkdPcL4X9fEkC1mEGgWYPjpmoy2QsfT9DWJuhp4TFeisyT72LFmSAx17Tn2ajKS8REPdi9gz5fjzyvSjjNwTq",
  "key32": "36tz1wDikpbcD7H81We8Vy9K5eCmEf3kNH9kchjDvTSVn7aVfgx8mSnKfsZ4fREzjvoW8GkiqvXcH1ynYsZY3smk",
  "key33": "e3PaUhUGkNB5CmsJxZGeBYAqLLNr62pp7Pjv4921FREasPJ72Xm43LD3CobqfxzpwfEV2FCJbCgb1JYrDmCCTks",
  "key34": "DWEXxeG5oc3uRTGfyoAab1PALTbUanQAWQjhLdTis3yDecrvaGGfKTqdncHG6T91B1sV2ZhnxyUp5uJYauRJQq5"
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
