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
    "2ZGETNe9Nu3ontqvAxNr99txj2wAZRpSiiNw9XQBu3Pcuv1yNu85hDSNaXxaXYBL7e8984jFzjPCbht1kvwaBSQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z9Ae7gze46ipY8hm56nZcDKVDmxjHo2MfYCKqefD58k4MKeJYwuKbS2e5yonheYNhn1B1yhLnwhPcJw8AhhNRVT",
  "key1": "5WUsgNLEVsRRxCvDzSxt4sGLoDmAfP9gZphTzffqDNfYtY5eG3XYxZAf8wZ7gc8bdANaMMJnodX9BKaVDeuo6uCP",
  "key2": "3b3vApM3r2pfpoCLmxH6TTy2Tr5skN8ts3tc8TL4cUWSQUEmpnvxrV3ta9pvgt4wjZdSQcy5uDBDsZdZW4JKHV59",
  "key3": "2zyzbTSnAnthNT3D9qZHyiERGXHSzjCGk5SPVf7VKMYQLhPyAdaNStx91LQg6NP3DNwexmxTwHDTHP7aSU91NSVL",
  "key4": "3gieVbn3BqTzwSUoAfMcpH4rdzgVF7se5xxbWG689GvcL7FcZPaRpbeyEyvaacJtD7BLaf18xCzARtXYF14xaRiZ",
  "key5": "3fdJ4UtD2fyAV6tuBmhqsGaTSrGWdQ5qezqz4FGigwDyBYJtJjxjVSb8utj6a4TpSzSQihLPVvMx3vssAiLfbvni",
  "key6": "8FeKGwjhibPN2sWF7nQYuEvceZHmsMRDuKirKYN3dxZ9MfkXWoYneMBCw2dHVbByMTw3wmLDXiF2niia4hLc1ov",
  "key7": "3eQ2TxNaZdKHApRvFb3C5xXvaDmcWhKN9QXg8qSs52Fa7Az8srgLUxSfxxaFs87r5B3Xi6QiCWnfeFh5swWwdtui",
  "key8": "3SNeP7VGTigkFERM4uRnMWdpNTMzfkDw7qWroDuioP9uxuRVCJgghxcrfCJCm9Ek4isMVzsXmN49Dzv47kJGddt8",
  "key9": "42kJ5ywxGKw1SRsYYso5FPcdq6QxVrX6G4QhkqioAWb7jjMNg5EwpiVSHMjDm7vmXPZRgAbjKX4Us8GgGiyRH1pc",
  "key10": "mV64xzeJ9JoQC7L427yqDda9d4mkrhxjWmdcYT6A7vmfjou95fxGUjZZeN6PRSKc1UBSFH7ia9TjU6YHjW7zT88",
  "key11": "3rrVyjJDd88RiqNQ2Fc9hjE5eWKNSgrD4BTfPsB72UwwtQgUB1Q1XAFk7TfxMXYVNRBJxAwzfSwSHq5YcWA5J23Z",
  "key12": "2piYGACqxATMvzrcLaioVL9PrxpmeGFfUfkXW4yhFAEuBngpmDsNdCxjAhyygASCssm6YvxebPqwTkycdaxmAmAB",
  "key13": "4zxxYDYa9m8TRyFo5DFoKBRbGHLVSv72DcSaM1HW5kpm8GFRARAo5bgVitYkFEDU5RHPZQbwxQm5NgxgAJTmpV8c",
  "key14": "5T9eN67YRtfKWDM2jvVh4RKL1iid817G2fVaNy1oRiZFC4jhk99JGTHS8M9wDSkcF8qooMq99zqzAnxNGbZYxLZw",
  "key15": "D44teKDftZZKisMJVnPYbsaWSiKq85gF8VL7pSpYKzT3inS8MveqmKKHTp4D8qLCpBpfRAa3a1gMvFSftWGJey7",
  "key16": "yNo8oG1yoa1SHSY893pDQR8YMEBoeach7593vyWPstbEPbG6yN75FrsUSwsi3A4yNRrDsp7cZRrdz7TrHNmSbfx",
  "key17": "4udr3H4XSo7zj2c5CSUvKzPPUZ1NKAdwa9WH2hwwxKYpCUdv2e4C6iLCnzcQdPAGXtajAaX3ePHrWRY7wQi7umbk",
  "key18": "53kcDA6RbMGZpyFExdoL5epJpMsqqC13bycGhxfXkerdd4cN7JuUvQ1Tiw9EAuY1utrHbjrTpJHuf8QCypQFBdxC",
  "key19": "3AbbReXmatRMeyK8We883NZu6aZH5Ks48xw24dWSM5f1wsQzcYgB5HHcsGehsoQeeUa4Ym5QkPp8sC44EgPYaDfK",
  "key20": "2zbq8SjnYHgjTVF7Jz2RrukD6WHBYyWDMZwJsGCG9EAHdeio8DV3HoZmGpdwZu2L68fzerDzhd1UQHhPrmtZsMNH",
  "key21": "5q1dD4TC2Hviz9joKRiyJDx81kheGgAh2N7zeQDwbSpoSMY9ZdQUjcpay5yKSXA6ZhpxSmBW5mX95kuzS5G1LXtW",
  "key22": "58QAY7ZUcVeaEUQ74UgNLzmL72yUD5BtwuEV5kfVYubB9a98rPmM66aoqRxYkEPB7EyKypL8TG3vZ1ZUq2LCHfR7",
  "key23": "wLe48mqhUkn7EPn5AYDbV8fBXGWX3mdF9BSy8eW3gRLoW6cEULdA1xaVFfmvYCoTBTHa8m7C33J6H1SZpiURVDg",
  "key24": "3ecsC48BgUF7H6aTkeezP9QkJGedMCZBsgTdvdqZzxdbeT81zR6MgYT3JPoCzif3BwozvgP7m57uBS8ZuwijrRyZ",
  "key25": "34pmeiKbtPMwbfMRBPQXpfc9J7FKvv3xdX6zwT6e27CaC1qzcWh3T3LY1boePAK4EdnKz8jr1gVQZLTLsig4iw24",
  "key26": "4fsxq6wTyPEy64BQo6XmVYAPGY5UVfsvub8fzV8phT8bFGjjVA5B3gh6hLqZwYYZDGxxpcUaXnBKJekAM8AEkTdU",
  "key27": "29FKsSCXZkf9CjKJbuBC737zbuhvt25V2M5r9S7qmZnsL8JzscrZ1fZEdKatrSPLFJEUq7HWAK39ijgpCjBm7TPx",
  "key28": "4AqBbRQuYK2Jer6kdGBxMJS4PDdXYg9ZhJiQBB8QVdxrQEYPTi1qU1hy7onPLLLuTeJYgiGtYht54tCSrEuZoFds",
  "key29": "4LZcPUWd5tpmBU91j8UeeWbMDuC2eBvjMAx7g4Ju7iRL6MtHMm4P8iNX6yWMppV5aRusYbUz6pt3k6mPjCdQrjNQ",
  "key30": "5Z4JKWsPVz1cfhUga1SgMo5QnqeqiRc2jyBdftRajSrNuoAUh8A1967xmSj8rNEp1vGnHi8UMYa6fsQWRQyKJ3u6"
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
