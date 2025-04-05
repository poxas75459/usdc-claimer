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
    "3Vnc4MQFakoBzQP9o4rRr2kxDxJpuF9m1Bqkdm29Agn7ZEs3JdymQZUnaHU8fodgnUQzSJfWrpoQm6n8fb2MVusH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e8dj84uVwwNts3LxFsWsVrtZarzbTKDatXZt4h9krAfoTqcCvXQ2GFLjE9KbFvXr2FG1iWtkCKBNjGHSAQS69Lx",
  "key1": "SGE9Xgf88HgD1xGNw9nCJiS4bfwLrXzr1xPmjsuVcUDvBJduL5QjYTpBPCFDdoTj2dC8Cwnjohe1cZytamNvbsg",
  "key2": "4Go7vaPxQZXVecXNmX6jLrcdUkv4yCPy1G2VErokHqDqTBEqaQvN7gmBh7tTHf6jfW3W51TYuY2Fanzsq8cjD2DQ",
  "key3": "3p2Gkfd7p2L56ayYvgSAhPZmhdc8B4Tu9BCt2M7xcPtQ1B1jga6wG15ETtd4Tw7zQJKDRsLQC8uvTNbX6jBFAFCE",
  "key4": "62WYxjWYTN4MAmoKq6BTzzkruLk9qMWKGvxMRGvu4r6NLfD5KNPWg7SzCcjDGHDMc7nidPcBmsPka4iN6ERqbafo",
  "key5": "25bBbdwM5pdm5p8y9Zmiju4Csv7cEdrdgbpWBPjy7qnJakwPyDEC6uLrJER9FCr5TAZAVCYA8HAWncrxyjYtDM93",
  "key6": "5r5ysHofERVyPQBJii5hxN1hfxK53Lrx2TQnWDALkQ3CrHnSZX2NsaYDj2hJ6SJegti2JUzyKkFKmauRKWvJoRp8",
  "key7": "QfPB8cqw37v9n52XFWrwdgYZWe7FNd4NWnPRJo95VrWVCVvQey394ymKFoDBoanCyrdBtEjXQeC8A4MBWmMWo28",
  "key8": "46TfR9pzwMqCgM9QsPZyTdcyvLXrYV1GKbdTbMaNz6m4Hkurv2U3m9DsCkpQJNyLHeqztB72ERrWUXQWmWh22Jcu",
  "key9": "2tiZZxVXoFxQUAXmEtDiUzAM88DD5hRWxJWQ6x57Mjf61Lvnma8T41wPj7GFMkNpjnUyoDYDABgadhxckwqgBJou",
  "key10": "5FpjbQgxVfye1LWSjqZRH74Uh1zGHrZoByNNghYSjAzzAXt5WYxJC2uTeUpGXrThH87Vpy7oAHcB2EaPTKyHhbft",
  "key11": "3eoHbGeAi5MGChgwWw7USWS8TC3eoaJBXgdHE4hE4Nyrtjjdd8VNZddC1BSVYr1ioX65TMCXm8LgUasmnXnnKsiZ",
  "key12": "Gg3E5Rjsn4zX7MSqJdCNWrvN5cvFQFafCBUy7JGiVEYaL1TLWSnLPWyWHD8455A8A7qt7zdza3rDWwms8SJ8v4x",
  "key13": "45nCbYf3TUaq7dLwgMGFCndGiVmGfTZ8aHx9uUTf2vTogEFYtLh5P49ymvPvd1qLCAWVLZjUBDkR7erNhHnhmMDW",
  "key14": "2bpR9sqhVJ7bGgDN27WgTCq5ZBSjUQtsDYthYrMrdQYATtdVWPAAQKwfVPk8igcetHkCUv4K1kLFAgbB92LUtzmQ",
  "key15": "ZtFiDv4q2BzoGhjE1dTo9wJYpFwaiBFNrVEyCQrzwDUFm8w3Nvt8XMn9fxWG9n3dk5Fd7PWDATL6pWaKwDxc4Bt",
  "key16": "5TMx22bSjRGUXq7r5PYeU8eTG9B3pbkPRaGAiCvgRJ2o1p91yiMdHSskvqgbqGzm8xvWDidktwMF1QMkSpYCfnGq",
  "key17": "4PuGYSLWPgg25pfive1AhB8buJE3NpV4sYubCsUiTRwWF4wW14HZv2ygQT5SdZByqC6hSS5HJ13hGJ2XWCGxJpgj",
  "key18": "5QL2X4RtyGuX6QUPLhqLpTXsdmbRXgHQ2sWt7Q3ex96EFFGPN32oAqAeLFTEzj2JgfNNgsvQgrJXdhYSsPHVTAyt",
  "key19": "5nm5bkhMZYCjtaDHkm6QLfZDpha8fAk8U8ras1CdHd4gPioxfPpUfvDYfEQnPEjdrErVczbz3tnbNtyijyKVNiJy",
  "key20": "4VEKaQ6sL9gcepi3EdVh5rGDNxHcE9DjeFaHAJ6skPhzoBM32Hnn32VWCtxwJnUEv6snCGJHdYGEGynwpBhSXRn",
  "key21": "EMBL7vFuAacYzoY5KcMfmG1mYwXJKj2SzEuopypCy1rAKB9oAi1mhb1WQrdecwrYPpWnZhoDdqkLPYRbgnNswaj",
  "key22": "2b4kW6QdRt41AkqafWvjmMXXgNumGiaaA6fNemgXn87HX82BY42UP5FS2wHpZW3iyb8tviDvMyyKB5a8w58ojhTV",
  "key23": "5A3WRJjbEfeX1r1TZcUfArwzNFLkuyf5u7rryz5gGFrg61A4zCcwszxbusJxbNguw1f7izvvkaJ7VWfsWugZHVmU",
  "key24": "2CRepbHJeQeAjHa9myTpjT9j4Fbo1T6rentUuLKh49KJnj7DUjxaHcRYfp1hZjsBr2UgaGh7h4AetdpE6znbvKLv",
  "key25": "4DNCj4cUr44AkB5MUXaxaG3QiLm2oas79H96SvvF8JfWCtw8n31wapTwr2zFXexKtN57UEYWGyjyDqeQDyKttK3P",
  "key26": "cyiDUAbEoCA6fj86kJKNmRyTMbPKHHkW5CzaE3TpcBYfwKKudFbmpCE2aEb7tm8onDrv41oW5DHH9SWNA938SBD",
  "key27": "fGWJ6mNm7fodYGF2RUdF2rT4G3eiDRupu6KK9a4CFJgzMGyWViNLC3XECT9NHa1nYBuieibwTCstdAxuUtbSqDa",
  "key28": "2G6xNkzUK7AuAWT9Td7c7bQE9eYhdEzJSyL5Px8vK3EYecsmtD2hPgUffueJtgAACYATBVCujg2em9JdDysVUcfR",
  "key29": "4Rg8bBAthM4MgTMDavvERZfGqD1tAfvQNFxZD2XG6C6yb5wJBMRzrpUhHitQ6BNGMmiU1g7UT1RmafcaHimck1Sn",
  "key30": "4kP6pit2DzzWTbAT74vAryghtrNuNZjwdZKma2Wc64URHhz8Wgfbjx5qpigtXnZk3Ttj7uPH1JqGoHECGbCix8h4",
  "key31": "2PrUiSpsZDKb314b4mDG2PqeD4PP5Cpe2eGe2eaYqMvHYF2z3GqVjBHvVQf1yTjo9ygWkEWYJP3vdsoi2sGr6V11"
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
