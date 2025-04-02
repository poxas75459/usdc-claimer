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
    "x7cUiDasT1yFP8u4Uw1YyTLeBPZuYX31yf3e7eooj2HtsDLn4LoK3uY6UMeVTDLmZUVRjzYqyvtFgNSjoktbueF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456MV8dSFF6us5aF8TCX7osZmiNX2GLBxwt63m7mmVBN2yc1nYHGRArHamb4p3D3YjeWtpHEouawBBc2mFn9Yr2Z",
  "key1": "285gU8dt5ZGY3rTCmeQKe91DHvap7aNpAJfRfeGY9xhLdPbhJS8VLXgcJdEyCHuWiAe9iJBD3mvYcWNA3Lbb4a8Q",
  "key2": "3tQc1GGnHaRKtekrBvBc3sGGVwM8yVuPtG9iPsHQaCtorcB9H6QxT8t2vkfxngcaH8ZigSabA9xVJULXhiaRqExp",
  "key3": "4MYGt6XCdvHaim3G9Q1uQL8mYcqBgkyuQuo8sDnVEztwxRhwKMishafwM4wm4Ehke2sKQMss3BgdRpTThLRq17P1",
  "key4": "54P1us692kdHRJNkB7duDpNdguB1miPsMGeHHhSbG6m1bWTHmEoXsKGnyoav8HPg67zpBEj9nPQS95ntUDKoYX4f",
  "key5": "2SkXxzjNwiNdRXn7UGxzUzNthdUUD7Yi6upn4Xhe2c5YcALnztRKtfurypGS3SRqEXzrGAL6T5KEBgP6Yrsm3WAf",
  "key6": "NnNodcR8uf9hgvFeNvDhwmcp4hwyozv3ABReghP9kDtfgMvjkHRHWhXTgqDAPMUgYfpDySS1q6F1HZECL96zhAQ",
  "key7": "3ZPcWLJHDHJ97eRiWvvbV8TH2sQ9mTktuiSfWiMrdyZt4b4VmFe2G4Tym3jfNTqccdL2Kefw5EUj8zuaUcM9Sf94",
  "key8": "3zd5YoDKXS5wwDpFQ4qtkf5ebWspttvBnuZ1x5iLk73AhLUh5PL23d7jTMWYvyuEG8bd6gbPWkwNvWUP9yYQraB8",
  "key9": "4a46fMFz39itnbwrDHtvHwWiwt5iMMmXd8RTkULV6wBhxkZZybxjs27nJQy7kh7VcFPcGD5TiDs3FfCju1sibp6D",
  "key10": "4uQGLPdVCo4vhDfFUbF995JKEUEKTmKJ99bFKfR7cHAQt32yLcopbTZWHkFCBqePt2RJb4rJhJBtwRu78SUfT2p2",
  "key11": "5iV8pLwKeBvuf4jJTXkxv3Jz4yFTfgQY5FPDL6fYa6XuAe4FiLxeAne1dm447HwX1NqaFfe1eJv9gN42TRM8zhxb",
  "key12": "5tu1R3DaLdVZT6A3DuvZgjFUzT3yWDD8ucxGyhk4qfb9eQGqSRDonKLoLhgJb3f7uAc4dnuL7UH9qm6McMe7aHR3",
  "key13": "2fE86N6VqcBtjuQ7rQNE5JRu8oCoyzeqBnBvtHSju3CksKcbnPytG8XRKQtFaqdsGbBGAsoMUWGGMCxfAMwhoDBA",
  "key14": "4YVqvdcPLsiypAQZ7ScMudbebhxbHHR1fpedc7DzaBPeknXeM7YzigFqtYQvPGv9MV82ZETaR9jFgjeAEGgaGQV3",
  "key15": "5t3x4GZBAeVsCKv6us3fVT5ButvvkoMnitR3wA4Mg68KbRyMj4kUFvoxDULgH23GbweqfVTCBEQnouQ9R3VVXM2J",
  "key16": "3TPoxHX77y2Jft8hUeRXQMevWnQszY47KQZS44fjCaQEUwrxu9oVXLQjJSY5ztmS4fZTv4ZnNEaWYewdNUNoAHfY",
  "key17": "4FGgjML9ucRxkQar2vf8sDdgHwQAkDdTE3BCg8gMg5mEW3Mrrwphy6GnpJmkqRWViUPxneM6VPJuA1SCLRSSLjVu",
  "key18": "598e8R3sCfxLkzJSB4zJ2qoX2KUiLnNGkZe4ibECLXMXttkoLSDAd7QPsVo2AhqanvpA7rNAsfq96qJAJHHnePxS",
  "key19": "gWHpC52zeM3gGPtHVzG3fcbNFkpE33K9LF4sWZS8svKw7WwyJoQnA28KVF5u9b5bP6mrr4aq59qkRMbuZEu892G",
  "key20": "3M9srWUgGx18jawm2C1KcnoJG8rX6S31gKJJUrgCgB99jG97pino4bnnBBDwnUv5sh9wiNkrk12rpktoQkPWaUtK",
  "key21": "XbV1j1UBoKNDf4dYeCkt69eNG48AA44RGT4UYa8Q37WAcinGRbSHfk6tegf7ucE8Qs3yxnX2Q8k85gAdr4WxKZw",
  "key22": "5W43pxGMS8BRj2i3xrnAkkjA8tjPFcBAYbHopseSLKKi1B5SnuDfmiGdwpwqzqURyh9YsEHpNJmWRMUMqjt6ww5p",
  "key23": "2rRoQ8VS6K7e7DBWJB6y9SUwTQJH2AtP5Jf8yLHKy3P997iSQpmQmggnygjCWzcKFMHAu4XGb3oA8rrbdPksSe6X",
  "key24": "2zKTZVcxoCrb4E4S6faWUBAcZWK6csiavMhT1s2QMqDoKsNLTRRXGsivsP9yyy4SRkowXLmUVwUtbFdYDWK4vEyQ",
  "key25": "E1sqpWC9wLWsWxmey26pykRAhCtBcvzuis5pReHa6hQKy4tp3dX8SAoMTangCratTBdrai9Gz7dFDPqw1pfdDSU",
  "key26": "RBgmFVcCeWa8B9hhZptT7BVtjiUMeKiPfv2YREdCnysWFe8kjjEEE9pnzsDsbNZhKZVB42vXFkJsqUbRtmPGo2W",
  "key27": "4zsbVw7DgfFVEHAQWxN4TQCGvDGw6VTh1DrT4pnbHqugQt8fJe3C8eYosGnwhbn1vSnQ8vRgay5S4jqWwET8ELzz",
  "key28": "3rMmKyHiVPNfTFwa2HiYfNuHX8v9szY73aebtvFeYZZYrUiWdbXZQvt5aXnX2gXER2TL5BdLMD5Fxt14yCtnwqcD",
  "key29": "2vod8CfXV33YGSXmCxwBQENxpbn3PhvhGiLsgdZouSZKXp6dABcjEQvhweHVnhoT6ZCNCAny9TghUtnju2BZDHte"
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
