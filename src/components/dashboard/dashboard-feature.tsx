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
    "323W2UQNqC7UkEsNm1TeTchHXKLYL52Pj4UjmJnXJ6so1Ab1TFA8dfKPBUgHBn5sQ9f37C2n2aCerAUwbNCekUfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMdYhwC9ZRH1c9JstQhYp1fVhPdTEJJv7o5Gd8BBAzW4Bi284iKTPo816tGEfzeRkfMNLJzuqRgnS3VBDcfGat1",
  "key1": "kVdZxBgcoSHyfiHbVLZWdDVFfRHCJs7vNWK8fWmRU7MnCtmcVJRXXEBwYp2ASgCbEQLgTihrgDNwrtwJeizroqk",
  "key2": "29cxh5U7c7jZnAzQArtomM5TkiGqRZssYZuwpRX1JGWUTSE6rxknxoanqQpTM3pbfKMEHCdvNVfgRVNtY9Ly71FS",
  "key3": "2wCaN6f2AmxNnPqAkcyp5hGDnZ5kZr2RyqG2EEZ4hoSGaiDU3n152xbUdHvjaEhg7zxC5EUPtamGGPSSSbbWUkYg",
  "key4": "K5Y9FXN6UMk36WuvvtQZeASFZLpfj9v38tSS7zpXmWGe12CtF1adJMaC7bovSvpSdBTcPK21WYmhbVwrxBCAZpm",
  "key5": "5mVDwwJric4NUBXyT53yLJK3ssznnHBf42WA5FzMqZ3tm5UboFaYrvwZnN6nWSn3ZqcHL2nkoinaq9M1WdXjvdHw",
  "key6": "2c6QSfK5bx14yCjMGtqqdcVfYVyR9t9fzpCCcvUZAH7MNQrY3vGFGQmSfTqyctTQA2bKAGDTacNKuKGyySt33Bh7",
  "key7": "CdnYrzJPqX1fXU7MHMUudf1EVFyZB9Vq8PgKsaohUGdvQAfoykkMP78qHN2gTtNsV8Z37NEkq6qz8PtpTtqkZRE",
  "key8": "51Us8egbKfZzxYrgEWqPScPr9wLFpDSGHWKvmthRVL8Yc2GHnd2E8p7U43c1RYgnXqYhMmcBtNiwxDdb3V8P5MV6",
  "key9": "gqtoDkLeMksk4ate8LAMVfrsKvmickPWDogA8jmD5LMvANMy3kZqhxVDNBdUTnB34ropv8pdSMe1tLL7KA7oDmK",
  "key10": "meztijfd51xvAGVEXcQZX9GcNGoJFDujWt4YzCk97Q7akcZzkYmppkM7y4ZysMwPoa7f43PsUgBsgdJZQ3RuFME",
  "key11": "35w51hq2pvpmK1LWZmgPFqa7iy9pzgpDDPQk2GLm61pfRoB55GNSgeVJqj14cMwSGX7KhHJa4sQb97T1C2wWUpu",
  "key12": "wKUXvEANb7KaMvTME8aDsBPUZAGSgviiwatNiophtG9c8kyiHamow793xNtM6kj9NtN8CZMWgaKEtMzGmbnGGvw",
  "key13": "563nn6gRbepCuyTDfJL874mALNmCG3tZ8mBNz27AYGi8t2pKvZJawpJpHyhk4LNuSsBxDb92A8h8ywZJA18PdDnx",
  "key14": "4wosfiCZeaTZ7Js4pVuff2V3Zh2N9KUiE2yPMrSavFXgGdoV4tUysdxzyL3gztkGky5LHJ2m7u3R4t7ds8NFNm4Q",
  "key15": "Q8tFieiNEf53ET4aTcbn7giyrp19h5NZgAe1vuMBA1erNpY8ddYdbL2t733tBYVmsgWmYaZTEgX9xQYSzUE8gEr",
  "key16": "4mDyHkizhtsPcLMHAH5ah3z4aB1qR9L3jNFR5MRfzr2M8j3p2PQt6H39xZNiiETicpUsmGQS9zJQ2HymE1gpMHHr",
  "key17": "2Fmp5ypsipNdKUSdwrx34BSRNks9A7u4cEqmcaV3KsL2qCGBGYgzoCUthPQq9voxBaQ9W4yjTD29qagYWyZFMkXt",
  "key18": "4qe76Etdf27qFUtqjwraVoyS6M9udhNJT8EC2cHzLurdVJPXBtauQKJBj6VsVDEmaH3ZYAqufpvfXrMA8tuc5K2T",
  "key19": "5WxTyRE9aQaMcE1ZV8NVYnXeiARA8HyTmY8ondFYPyitvvLRvRxJfqhV2XFCWGXc8mnsm9oQnv3AtaJgfJFSRvXD",
  "key20": "2d7EGCtWBXXaaVmyCcNprS1tQQ1MJ2eFmAzvNCAxGbwtYcbhD4YUKkbzjF3onZPemnNqGyLGAYFo7Ct7xic3aNGu",
  "key21": "434Ey5xswqTqc9SH28592DfnnxpVDu7AkpjEQZTsnYnM7EqD1rvHK4yFbeYPWLwkYKECU22h2wcjszyGgunFMvzq",
  "key22": "5vExMcAyuXLrxMk2rHzL7J2e6LSbL3z5Y2PZvVKFJxGxYNt1nHcL7pEppVHnWsHR6uZsuemqRq8Qua1dgiQerTxy",
  "key23": "2RHn7iazsjkTFBayT1pwkHx23GtdcdSrLtbWd85BLZEjnaV3UaWpsRHx6aiUgj1CGYKWR583sK6TfrMaMgCGff3G",
  "key24": "5A3ocsf3Ktcp1gNf3RP1KUqLs4oPNLjY14sq13783i9vWspWb5XnP9iHvLkSNa6u9cgKAgJo2Bei9FfxaXgNF3g1",
  "key25": "5VHsucTEL99tdXZJX5L28J7EyGVtdgaVaSE5gXyHWB1PJ61oFE1Mr2vmEbTsD78uSPxPQVFtayRVkhX3GQPy1vxp",
  "key26": "2SgoegjHRAAQQRFWsHxEKdooVEVa5P46jgHx2eHBPneWn7HzJJhap8SgauQQuuk844fBcVStwnWrByTCJ9BH1cG5",
  "key27": "3VxLme7hExx3mYyMwYXDB9Kog3x4HniN81R8XsW4vjeLdPNsXnwLtMw2XFHw3oZ77yqwkF9LCiirShaTVWV3gAYT",
  "key28": "58YLMNf1Rzx5gfzNThz9bqnX9soKppyYBJRRGmw2HLXt3nnv3bYDXLTFWPCHajpsGpmvDDijkWkkYreQYNpX4F6b",
  "key29": "36d1sKrvSDKRM7GdDaHPeAGUapBVWWhHMhXZoAp9uVCsTMi9FjknRM4GzDK3Sry4Yj1DUL79YUP3JgSSmUp2NxBb",
  "key30": "2R8ZmWwEu1jCkcD3LVvkFxxyDw1dxgmjdpSBsYorJyEggALjr35E9tNP5gM9fmwHunRXug6x86JDABRQngp2qw81",
  "key31": "5fkaUWp3gyDP7SV8TFdnxeTLjwyZthnUNThRZovuqZZ1o95TWsuwjdnYKC9Ht84Jh1ahTkw4kNJPeduYXdYcVErs",
  "key32": "5fyfCPK1AXKzHchCYGRPeiybLeQh69X5G8kzfBDju8GWzJy4ny5AQA4KtgcJq5ahijfRjnZg9jYvxnjCt2vTGVLX",
  "key33": "556rfppajtbgmYGTM8W7ZrabNVmmXYiHa4Q8DvKX69mJ1EJw2Ys9Zsqqoj5YUTKk5Df9speUK3JAqTQKdH7qMbPv",
  "key34": "4EZK3VGgSd3VcySC1SBq8wL7ZmomMN1R4EKuKTdBH5iCen7oyGNqoF1fTrZDeUGUWH87Sigr3m8bkGRSbyEx3KLL",
  "key35": "5vTYmbZBdRztTrxY7AfYADCYaa87KjZf1MVPVundXW3STatFWr7nAiPehHSomVXWp3GKbgYwDpwqECmum8cCGxmG",
  "key36": "3euWpupPZhTDvUDPQSg12dTBMtZRU1L3mL1wxpXJa91ozvwTDvamxDYZp5chfNjsUKziECZViz636LLQzujiBFFX"
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
