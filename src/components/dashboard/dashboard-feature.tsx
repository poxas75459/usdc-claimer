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
    "LoXdCpQrYR3UaDbayJ8XVm37w2VE7DCERsgsyGERSzqxRZcskUxcaseQAmwLe3wj4rXE2pDQ1NaN7VXk5sSKGiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JTGCyC5rftRms3r4XCdHEABSm4RsCvzybZ12VnhHfVxJkpDySdz6PaEBR57riVnEaxRdHPQT3JeturZ5Qvfh1KA",
  "key1": "46RCqjVdX7wquAAmfXPHtdZFfp9EAg1xrxzVGdEKVVHNjTnRFkaxfoh9iER2ZkNMEADSm44NXVAPpoP3yDQN4hgi",
  "key2": "4wVkL2pB7FXtgm756kpJ6uP9xuktpuJi7XbbadHQmjXGcePDwuT97X3tmgiv7cEkET5F9bPLaexc2LgBmYrudmg8",
  "key3": "Hke8cUgm9KY4TxKhTSCxi5MUZUxjdqjcRe2pQQWphdBidMf62imyPqvEESA5WGjQnn9TGx8tn27WQUL7qQLh8bG",
  "key4": "36w6Hru1c1dkSBRpGzX7gTfsyosaQ8DcE4j9uYqTDtFPCpgkHA56U7xK2nRyMNQrC2Rt5pZn4CjLJV6VG4qyzpuT",
  "key5": "WJadLrAwRUKBKoqDZinUdr28V43za78WjWy1CqZC7gZ8qGY2A5FB8e9Anf2aWXQXSSVrGdxXefzH99pm8GxekDM",
  "key6": "72WS9VqPmLe4Uzr3UqPhpJ7z55eJwmbAaL31ghtHx3PVBr3NMZrHq9Z8mridaZHPV3hPsozZNvBbaDNRyaJDEGH",
  "key7": "4YAmzNgxnGtZnJ4FH8AwCrXrn9cBmRDPWdZcq8ifx6qapTHrpMLAdqEigM6qCsKcFyNeFBRStCF6Xdpqq3K5ymn6",
  "key8": "5p7QFsQdGEkJX7ULUFdUqMFd7A8UAxzR5Hh4Ff8dch3ddeSseduEBnNvhDJF6GC6bym6HEfV6zyNxFH91qHxb1Y7",
  "key9": "1o4NLUKFhztCrTEVXcdtEeHDB1EZgSPDZqgDhjTzP1QRNDYUkD9bGY5Hjtwxje8tEvRPTS96y6DvqNMuQxwfEzR",
  "key10": "2i7VTU5Lvzj1P9CAZGxMyH19LaddvmiCC9UEfwCW4BpPL6PGX1Hnwd3xFU1KvhgPRcU1vbp8UJnwMaYBkbUCPfB6",
  "key11": "bVRAMA7ai1Zw4Z33GJRE9KynicDfvFsQoQmaCtmLqKsHYUBgj2MZ39gEZ1eUV8xzXspBjpttHC9w2HtXNUE8uHv",
  "key12": "5VR4nsKtRtZXSVQpgEBavwbzBzszNcyAWDVhNk1yAtTpP5VK369fV5psaoQWJy9xtQpUhJpMq9zCipvUWtYnHxtE",
  "key13": "2sHDqWx9aJwv5sK6JD4MhhcrJ1tWsFq8KWkxUrGkzMACrcCNayxmVf434SD1ia5UkNgtSyYHWdEwYhJAnsavRivt",
  "key14": "qxCHaSd9SbfB7xfLcPA4Fz5wToxftZJJD64QKzeJHhHDg4WfXZGM299RvyYfxTvEPu44e1VHp9eRYsLX4RKwJqc",
  "key15": "2qRkZZJ9c6Liq4E9HA7ZiCT8QsP9yEW318tzZ8XAmC2sMKNasyFmzt92oDPfifgPfPkD2dm2G7Zks6gR9hV4uC4i",
  "key16": "45NuiRfVjsmHaN3zP9WBGoRayX2jXYyMnzppA668Y2NZzTMShWr2H6BJxcxnFy9z8zZLtQfrVPsCpuMTCPBs2iig",
  "key17": "2Y4NCmg7szbwTF2BK6YzeJxZn9pcHxrZ35ZS5Cjsa23E3YiXE2mo1DTC3mRUMMR3JZXiCWQZ7MkCEyw8SNkNtEvb",
  "key18": "4M8ddwXLeyQf8JtTttzTHfrztbPGZrVbz7NLv3E85wjXfHFYCPNhstLx3FziCG3rNnwqz6hvBEY3AXCDENDXemvR",
  "key19": "4MecyALU7mupucinmNmnWLMWMRzfpauXwx1d5Rm5MNbqMh2LDNHyzpePEirX7Fyf4d3JQVvSzRKAADjaBK5sKEAE",
  "key20": "668KNpyhzfGQ3d7wn387fKZdZMJ7AijHRkbwBxaUrdreN9sZqFX7v5JZHdRCcqkuGDA7179DjSz8dJ5Jkau788Pg",
  "key21": "2av6umzpX8k7CUNUzCFvQHt8GxPp8CQ2otTaVvgrJ6Fzx3Cu74joUxRc24hgiwE9r5Fwp5DFbh6ouGptqRGYKTHs",
  "key22": "33WxqWoxYfFBapV9FdpvEfP2QR4oZHLt3TEioxjcUq5wFU5GaxALiqT5YfbjjwddarHSJzTPtmJNCawCBuzKFsgn",
  "key23": "4YmZbGUqmoUXXbVqDyYjmsLwmB19FrMkrTXTWDbii4edf3uN6hsbv7ADbbBxTKEgpBiHnzrk8SRPLD9v3bAsy7hd",
  "key24": "4yr5aYboEyfbs22q6WdL7wXwjHegNcvY3PZCEuosFW6bWnsWB9D1BJPwoA6dk2gAF6SFjH3wiAAFqYyDCV4pcDEw",
  "key25": "37kBwNRepnN7b2tVYzdskDrcsYk8ExqHu2ieTtzXwpTkaZBCEQHyaB6GBm55To342pmvdi6Nd1oyLymsR5593NTV",
  "key26": "2mKwSvgYccsK9vWdaiUUVGHqhAVXxRTfFXsAGqkKokhxbtwi5eFiEkYrvBecaYzRmq9bqZz3PRHScQZ2LL1ogbip"
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
