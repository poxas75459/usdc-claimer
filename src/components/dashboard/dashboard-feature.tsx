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
    "2HLQt97Wz3R5cyFszp9Spe4M1XjXR5ZkiX2MReg5jREkAaeKhBhBNitdee3JYZF7MVCd1JhAmM5UmfNvGYja6KRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WC3Awm6x5ooQ6w86PFHZ4Sh63RFmkA5eVnXMSS4RCrc2AcTwcQsZg52YYRfatnspEdeLtXgCd4qW5qMkYy5zuUv",
  "key1": "Bor5KbJ8awDymQGMLnAtyjgWXydAfDuxxYBGWFKCQt3t5KRYb7f5soGA8j5Ah9eRt7MaHSco3WEibwUxsVwuKjR",
  "key2": "3Um6xmsJFRMUfFon5ziGLwz66XBWhcQXzqA5KvxinA8r4tCMkKygQBqm7o2Scrg69WCnKcxn4dFGUPZNnSjWVtio",
  "key3": "44vhwooEmMarzRdHi8mxK9mHgyvD3hBpi3PGbVnCdaftdvMoJskYVuBcDaNz6KciQ5Nw4Z7q5PH3EpSs2YDUNNHP",
  "key4": "252Zr4aJAiHo8mLiptChufpi6KKUmtD8M6P3b9W5nuPJUCCbv9bTm7zegLixNuwgXj5mRybtgVrpEGysC2VraPs8",
  "key5": "2oCkt29LWcS5ty1R9dLjsxBnr4KuZuHL3moMrpVAaYFfYq9RDFhQjXg1M2qaomooqris5Lurtp7GoSmWcs8V7JR6",
  "key6": "21Lt3x3K52vyZE7uN8uALqxKWpKQRSbLVHAAe29fREEod78dpNwz9hPPBQhJ7nnSNVeLa4Rarr3qXgDwaoVemwCx",
  "key7": "2eG6ULgMqzYBisduabTf453Pb4RKiRfDBF4KyE7n7uFRcjyT9mqLCXfrWXJtxx5WNGBaKmQ4iFgSXzhAX3Wzv8FK",
  "key8": "ndqBCo556RRjNUr9PSx2vNyJmJM8gheRC64cjXMm1d2hohCCYHyiTPAhNtz7QfsQb3oXtUsERpfnx6M8jc3d5nJ",
  "key9": "67THha8JLyWNSyNPcTv4YcBmrjgWCpsFByarYZ5DyR9wTyPCnSvGiVQJEidt55WWbqmpFqpfsh9d3b5WHCURc9aM",
  "key10": "2yUrGsavcTQv1PLkgJtonywDqCzyirjX5vXB8NaArwJEHJDFezbojUd5fPazS5x8GqL45gApKyeRWze7W8DNAgwV",
  "key11": "3ZQ5AJryvNHxDt2kADgdwRV7YEdDWXTj3akugRvmyM2wARC9jxv7AYxvpW6LJa1xH9RFsvQ2UwpyfFDhba83HNtB",
  "key12": "63MEpYgxQCRdgHYHyt7CebKXWcFoyH3nxgrbKnVArEM3AEjrh4B9scbThasmwcjQUYAo6snozHxhe8eVQ6ZUWAjd",
  "key13": "3TcATR4H1LUvSje7b9aJdNRtZjrnXq315ypBXiKmnn1GFwp2aXgDLet9HmzKDD1CP2k52YuuzXzdEFQyNnNbxExi",
  "key14": "23FUD1vCjjaZXSdcK6h64PFsz5sbyWfyCvR3JBCNXz2iqVDU47Zv4j7GcHdZKcPZRGDiRoGpKMbg8EvXGyeEhK9N",
  "key15": "h6Z8bdUTaDEP5bqMrnVJd89TiKh7eZh4cZRXRiSTbQ5wD4AroMuDvioVc9SF9WdfabzR6L6fsou35z4RuJMydr1",
  "key16": "3QgoSVT7Y1C8rfH9Y6j4DhiAKLKh2CJhAzn4UL4esbVThcZ8gmCiZhfPcmAK3iaEGJWeED4VfgwfftCZCGuavYSB",
  "key17": "3CE277M5ENhFz7qw7AKoJs6TiGGHYHUop2gAgdXRykMZj362vm2sr9ozdX8oVwKF71qmLtJTPq8iWMHVhbG2DWc8",
  "key18": "5opsrxtAixJeTWSC7JJYPfmDsUcueRhsuC2aeAi3kgTUG8fZ6TotVsoWpSfp6tQHh88MuMJv9e8tFBuWQTQCgWS2",
  "key19": "38wSiwgr1MpdVyX1H1kWbyKZsR3fVsWo6T7ZEH9mAU5nmSzxTyQFz4Bgu1EDgXnFHyWLRX6XXdtXcMtbXwWYwyrC",
  "key20": "2ZPYurzQsGypSXCSV6CYKtHcNSvg5ZVkPoiRAeKKvseDFGmLC6Mn8ns7zSXj3gLoWCTvCXdvcoUbhGaCk6EZJAPX",
  "key21": "4Q1EAhyk4cEzk7wvwqQFg251Ri6s92mUSNnh9WBqNU6zy3bfNZRV7zrtV3xKWHpnq5NrxigxZvD1hAPWnKjzLzTs",
  "key22": "3ZwKm23hXqnXjGNDdZGyVgMR6PoCscCougVzR4Bnxnv5sqymNUSJCNEc7fLQwd63uBzNx4xwGEdqDvsJrkH4hm8b",
  "key23": "5VnMJ6oC7H94EJTDvqzqHU9vTMG5jUUKLi6u4wsfqiQA8PdiGum546iSvy9rtqBHuzDNRiVfNbjn9J5H3ntHYg4w",
  "key24": "2DghKeKwFP2ATFckY2EEd7EGJNFvzG3bsYwFufWwKkbgrrV9tKCSN4r6bfTZB2kS9vaxf63p6JUJky4NCnRY4LaF",
  "key25": "3tKWdDEdBao9hAvBX6QnzofzDKKNXVm2auHVcv8VHq5K6JSScXx5HSwT1xoemaa4mx8FRHpJAUjYiJ4LToKosqoi",
  "key26": "3EyUN7q3W3UjjEZ45thCSVxVURpFNgrdsquCr5GDW7wKDVf1RLEbeTZVQLu7v7e6og21YTC7YLUxdivC7FSG8Vqy",
  "key27": "4Cwo7LcdYdCEyNyePVzZNjkrXGeFspfuCvu6dJq4RG4VYiWfrxmTtZyqcbJCYeQytdm8PWH6P2Qy9WcUp4YaUEoq",
  "key28": "2exJYXKx1iLjRWPfYVNSain8ZEEqg4J4TtrP7AvYfBFpcdAhPBjfsRiYFhzEyxwJM6id9BAjmZHp9UqYBK3VkZGA"
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
