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
    "5sjHoveEhTQL87B6hpruzqmbWmU2N14169wPStC7ByQvX6UUEPqXkcf5zZiHE9P2t8vQAaiMwVZ7CSVCX38C5hiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPrjZ1T9EvhZA5HrbmKvjMxVpQcnpFavYKhF5Z6b8A3JPzxqAqfTx76o9oamQebzbQuJoTLFgN1mmqLYjNxZ1py",
  "key1": "2iRS9KNoUyBdQJTJjDznGnpGGU26cnGqMFDq6zktSSrwwiHsPmsSJ3XrFmbun9cguE26inykBADQKEju5RzHESHZ",
  "key2": "56H6F3CeCLe1Z75Kjg6fwfXKAcE53Nz3w1X2TbdVcayMQpaSRedGqUmoBLySkbxgwk8qULPu98xB63EW75awqhcZ",
  "key3": "Zn6uC9J8EhTwPwkLVdSmzcEUaAxeyi2ye643yjHcu1sxoN4jVmMpeufoAmLJnnQkUrq4aDTwmH4jNfzPVxE1SFb",
  "key4": "2ZzsDXB4LnJcrFPLowXh2tApUhXiNcQ8iGSAV982GT1daLskApQso3P1uWR4JM22bUBGQLptE5cuby278QHaGQeE",
  "key5": "5YQLhBX2L8nEhoMLRMB9ucNGxWt3u4UwU8MDcxebeWAV7zAVaK2NbhVmxfzvkr7mPP8HMit8u9nHK4tam1BKmQNk",
  "key6": "5oAJ8RJqtS7xjz2HhmLVePbP6K2cR25zL4WeMHMQWHkPbiBiZaS5m9zJEirsR546d4A2T6g11Judsi13mYhjysTF",
  "key7": "5dx7quaCpbZYX79uhSgsQUf519bAcsDB5nvDcu6JwvA6iYJZxLGrmG2ginEmdjEkHGn2qczKjAe45UGmXJXXHzJN",
  "key8": "63foC1wHrgHs1HBEYTaNCz6RKFYmxkFg2LiMuWZj45Sr7tbVCc3yfUppNJSff1tHb18ysCkcGTev7phW1urFHpU8",
  "key9": "4Yv8WcP5nLxLh5haqs2rzwL8NnRhXQFt13mScHjCk3jRQerymkq9HddF1Ts3G2DnFp8cYTp1AEgcF9Mjope4EYZ3",
  "key10": "2biYxrHwdR6UWb2hD5Z2sP6zHqxjCMNiNLXj4Qr31dFHXMGJGJ2pLb7M29ZYqsamYwnDYcKuPHnkgGoEYWP6RtqD",
  "key11": "5KHcQqj7nT5jFnqHy4h5Rp9BNzKXZAK8zZWebaMZj5yR4hSRVRXwMwG71WGcjCxBruPv3hfhYcBHU7HNo7pLLZ68",
  "key12": "9rSJMunLWrLgPa351c2Cy5ovGWJBmjcQxpMvMsM2SfSHv9h4wgcWhc2zb5CfMm11tCwbX2Ybb1FsWhHPpd3AbKa",
  "key13": "vD2fNfTeuhfY1PRHALZnEBM261pzgm6LLEa77sTsSzfH3tY2QtFbCsTzGGcx9cg9Kx8Gjqw5axH6bd9uX8EmZSm",
  "key14": "5cDPYUkmLEkbM53nUgwNLRUC2RhXjnPurqssSmYJr7cCaAZshPdqjRpyN4Zvh7Qe9oo4M7DteWGLQebt3NaFXeQT",
  "key15": "3BmUfnZEdTPeLpqF2vaqdWnf7hiJ9b84mtrLjupWPtp8MsFaUQz9CDs4CvDHMXkUiS9n4nPfNTowBskUzxXEVuuP",
  "key16": "4cXtowVyHR8mStnJmXyrL9xCKfPQEw9zXD4gozE4qoigfnfvD3AVeUqtZD6B4cnYRQvgpFe85XtbERBJRYuwGRkL",
  "key17": "5a5XkG7Ei1HB1zeSkN6FQij2tSWG4h67CvFFKs8vtgRRCsfQQic7P5e7WpWzfzzMU5SzLi7fKh4dSmpGuysBSrzq",
  "key18": "39vzwFXUoAzVJf51hTLBmHysAaKTLdkhHr962iFJC3kQ1R5rPwrPogVC5Vnii6NbpPZR6f2BuRPxyGV5t2hc6nTu",
  "key19": "pwReiiYKe3ztno6k4VYcrKKEzGPceNXXeZHFShk27hNaNJPRt3wx9cHR37iHGrcitcajMEmR96AKJjwETc1q8Ww",
  "key20": "BxEcyn28X8fPaF2WxVN7a4jRG6UpVbcMWVfnzHBy12tBQzyprySPzujXrdERKCMK7PSjxPigWaqeZVp5bSMy2eF",
  "key21": "4PtyAhKU5sf9R1qdPCmNqbbgpgTBiUxmr1ycahVa2hHznr8jYfpcBdGSGqN7EwLbex5XvjcFN2fbegFDDJ2pGA2a",
  "key22": "3G5H4vYHAA9fUizhf1K3ch9AP4D5w8ZGHfQSoMyjwwsdbphUc1edkx2bL4XRaNpTkQDsvuQws7516cSqNGcTeLHx",
  "key23": "3eTjLsnfxpZ6zLViFj6cHfuspFT4girV1aL5Cig3z85zRmBSwpQHw1k2PhkFYQBW5CUs5G5GAaCKWDVf7j5mwJei",
  "key24": "5Beqd6VWASKxVgcb3SC3xyLRhEHMfoKBE5Uq8FaZBo4KChTwTAu94EkXKbkyjgVwvzi6a3Y9DnpDepPi4Q1uopWD",
  "key25": "3TRFBn6zhqb8TF5ymAyWDrn6bkW3a96oWm3DUB2jhBcDcRrJdRic7iFRSFTNYqNvdNn1G2DCqgQrth7oGzEiHebU",
  "key26": "3A8id25fL4g6XxHE63CZ4Ac6GnVHtaduz65RCPAV1EqJdjpmPnnEN3Rgs4T6ZwWXy2ok7MmcPeb5VstqqjsgJeyH",
  "key27": "3grj7JHZ7wGm4PnQEKWrcgX2Z2LE67M7qCVmNqu6RF7hzrAGBab71KP9KBSRKxf7k8p4nJQgsqhCWCZd2KtSg1Qf",
  "key28": "56choE3vATu4C9dqeXDRf4LzFZvowjkFmtCZ95yZcrSfw9GLXFva6xWCXMeSpHMTaaHBPoC8KHAJ2LEKEQaRKKv1",
  "key29": "3CHEPEQi8chfCXGrjiQSbiRcQCKdxLbA9pC7kFyWJ39cA4HeNHh7hCQ2DZDtgpsodhqB5dLz6HjzgSaYbzHedx1F",
  "key30": "5mkjJyyuHeg7umGSkyxuPjeuRNJXFcPe1mwdojSBa449VDwowckeCCNoogvtXAHptbqJJtac5ME84z4PeZb6xNtt"
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
