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
    "276TEYW8oNiG3Q8MzdcDBy1swunPpeLrBcu7myV39qMwXtEDDYW73o18au3BQN75dgRg8G6FAC3SBnndXWsapAjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fMpGt5o1Tb7prHEhjtSg5LKt4aaCUHyKip72KP3RLa81H1FMF9EKe4Nf5mXBXpBpjmZcBBRW8ypdhgGTMNSUP7D",
  "key1": "67fBgD6XmHk6S4fgTi9Meqro9Gc8G4E5uvG18bsovgiyjb3gZ8dsFsyBLxwAQK8zxEBgsMo2fUjnYnhcJ3sSu8EB",
  "key2": "2gp9WRQPw9UVfi8VM5pE558jgT5eeQNoGpAXn9ecW5zHULasnYeVKTm5QsqcufTBkDA6BPYozgwBtVk2eJVph8zH",
  "key3": "2CQMpunmpszEurRnAtMnsVgwnmxVxQ97jviCEPv31znyb6f1hRLZcSF6v37Ln5TUHpdR5qceaV6hu2aES9uNzqNn",
  "key4": "5wTbQ2rE9bkPf8U1rLHeEuQCu9Xoh4PfxLdAdyixUgfHk8mdGuTBPBiVQnN76ZA4H2ApjMJfp9aGCBQEuuigG4fm",
  "key5": "4G5dhE5LQMTdteGt3CP3WS96ohWmsCMrPBYqgHhTntWnKwhngrVdg6nUQ8gCDETn3VcLTHXZg8QcoW6KP7ZM8Ntw",
  "key6": "2NsqY2efRV6sg21BEw6TgZyeW48VwtCFbSf6qdQMdL3BT8y8Rk3CaAx6PHgTyvoZi3YTSWG7qU2WV47Pkx94NC3h",
  "key7": "4FeuAzApBcSjkTY1TA4waE5ySuEbn6QpQwyxhGgpGrjcfSnzbx3kYbRLA6REttUircfj8vB5xtLXTAM75nrTftjf",
  "key8": "3n82MaD2uGxWbQmbWHarPHA3jC1aaWZWe2jHGg37xAp2dRLu1B8YHpXtQjFWqP51bfcNQoKCRFugZFA9qiRiVXPJ",
  "key9": "4JQhT3zm923PSCVDAgqneRcnWEgjp91xvtmEPUcspp7uqRrW7b2r1B2j97b42sWDTcCE2D2JFKeE1pgggbyuPLUc",
  "key10": "2WTTd3nPRtjubscebQqKQf7z4p8VYVMj3oPtRJTwk86uyZh39KjzTAFFwQ1VoK3HiUWYEzQjLCaFWdtmdurX4hb3",
  "key11": "2A4TTf7PWbzRAKUPZatRLb7naERdehqkv61Lv2ermZxEZqJhJazM1SRHF3djCWDxk46c1T3TMmZUMm6otjPmiG5j",
  "key12": "49vyd1YJF1TdgHm3WTyxaPtJxsRW9rgCXFp9hEcqmrL157PrE38VvN5YDpUP4Y2uH8AyWt1teYjJpDuTMKCacsp2",
  "key13": "37a9vMmHFYHpJt3rz4Ao7xgMkF6RfQp7AoZGiLmLdexTH7iaGnQbGpDQTMP1kCP5zaVbm3Jh7Kr6RqLixdcuzvEb",
  "key14": "5TLs1DWHjWYNELxoa8tLUMVcvKzEXJqjtgpAei1BdDC1ee6HdPZTi9J25EEwTWVPMttjAVTo8VMe4LXTHSs3Wf9X",
  "key15": "5gg9ZcKFGth9BRcbWq4m5y5EqkY4Av545FzPYAEzVM7jaN4wmr8ZdjuVwVyFR24kRWiytFFnmcPT8TfrSAzhiXHm",
  "key16": "2CyqsDVNDsu8SqNNeMVLBeVyZ5XpYBrohZuoDSARHNXsMeSfJQWyuhQBhGcLzoAuDQRjSxSKMCFU4roVPeoQD4Zq",
  "key17": "678NeyApvXk5itsTVT9NQHjEyac7ER6VRdG4Kmi4pd3GvMuSMoBTTcHnmC7e42V6zGfSrQZjFCoWsHyV5vCC5Yjg",
  "key18": "NQaHbxmknE89hbF4i7XdHN5NhE35wC9fx2vbEhSMpHqRc9CFMNJg7YBifuC6geX77AoXbxcC7HfkSwvcyucXiJM",
  "key19": "5T4UjG2hKRN46rNjoLPabGmoYNNVmdHGmPqy15LzzVnWu5Uwss2f4iEhyJqxyzoi2RprFminwcv8J3EdGuNRRqz9",
  "key20": "2KaKrxN7HPiy4DpZBqFbAFUymGTVaSAKh768B7ZKDjNxSVq7bBxBJxsjBnmQKHBC6HD9kSKvKGQ8duxb4JQmk3dk",
  "key21": "HpVqCLDqpL3rv1zDVhtrmh2BvAjYpepADdSGSbLk3MA5twknnSo4H3dJFgr1Vtnwnt3AVxntHXdcwt146vK31Vk",
  "key22": "5J28WMdmkc8kvroiFrRBFM25hXYxxHXLxX1adeh9uDWR4jPPRb1YpRXUg55XXinrnznnFWHKwdNFTApm7Ucp2AAX",
  "key23": "xv1f3xBCeJTp9UEEHu29kaYGwrohcL7Lm7crBThwWqer8pJcs5wQ1v72yqck4vZM1tSHeMzbpgvcaL6qTCWiFmf",
  "key24": "N7uYn1A5nsHvxDuHa5AMC1bKPPeMJqzyBPXrt6m5hBqDZcK7YnemuhZwLZU7afxHpjZFYVVXcZNTE12mUBzetjF"
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
