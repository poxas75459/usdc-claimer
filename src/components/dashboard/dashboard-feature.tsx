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
    "5UD7Xbqvk1gmGkc8kk1pUeGCkGKwR2SGPGN1gvkQvaig6yHQZWPX8RNnbjs9rGZBpwhf4grxiWEqzx8JHNg3e2uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZGRjFt4uyLnNf8VvDCNhkuJLoQXmx9HW6o1615Z8hz4TZzATDq6kiPfodxyegitkUPpbLbVY63D4PkhXu7d4PCE",
  "key1": "59LMLEKYNThW2o6jFSGqU35cUjXRzfMDUe818GSTQHKxFx1wyYr8PdrKuSuF89x3tedUHsc6E3Peh18J18Xz5rJL",
  "key2": "5Jo9opiBYS3ebGiLyJ3wmrzESCKebGkNnubtiZgKuZJVFKAtf1Ky4wiTs7vVbhuQWaYsFzrwTBVaTVv8VUassto9",
  "key3": "5oYCbPhbSEyGJY3UZeiXrKbsfyWNauce4K8sgzay3bUw5zci3ABxbctCbo5J7j6h5V56cTAeAaWf6vfxVBneBTrA",
  "key4": "4n84EhBpa5TUC4n9uET9p94sTuyckizZqJKGj7QpYcPEQFd5owfhKQCTCy6RjKvsYuZcoexnLMyNhqgox2HjL3SC",
  "key5": "4hFefSJZyjRBWsFHLZ5bEetb2UdbR8TxTaUDfLHWicZuz64fs1TGDwYMbEuNz6TN58wSGvRt7TugqNdwPiwzCemC",
  "key6": "5xp1xcfxLpvt4TXmcUKQ2A4Vdd1uijjiiSUy2g6CpLm8GjW5L8AKztczHdyj24aAmexjJ4E8eLnGoTnog9MiqDDS",
  "key7": "2PrKg777dLbM4aubtXW7iKXdMGPCppxf8S4jWBQkoazGCLzFszzqPQ6YdSk74YR3P8nWeuew9dZGe88XuTaZijKh",
  "key8": "56LzNHey4SNZdf86BVqpfexxdfmGSYzSfXAz2bnUiABZSxQRDpkBadLqDjbvSTP4pWse4de41jQVtoVQmenLaVvB",
  "key9": "3dSokk59wViyEQ6FgDWsSz8gx6BNNwVq5dzS58LBb9CYG97kb1NyhzEvcWk96yvcnzebqK5QVo2HPfa8bhWYTTug",
  "key10": "4WjP4Ynnft9DByAVeb4eXqor2WnLKz2jxwNBUWZgwApr4p94neuPTNcVsjhAPvhQ5p7P1u9f6qMzVKngJwMtW75H",
  "key11": "VPNLzZRLptif6HRaeKjM7aF2iGJDfHev6UZ86BU8phwrepVgQ8gvvw7CdkVZg2PW8AzEYoksrqRoiAh64Bv2qPD",
  "key12": "2z9ELR3GUdbag9P56ezz6cV8GNndAR5eec2CVWTK3eYtF5ZjkhNCRoLwnKhWtRvrfGvzsRrwCt5ogeJJ3w47dGo7",
  "key13": "ShaM7msLJkhWTaE7Zpn21mn1pnAgrkn8tKEiPdvYUCG4hjfYpsB4vPKUVSmpSmSmR9ZxaWGVJB5y16jyuX6untZ",
  "key14": "5Kx7zGTsWPaXLUy7NWw6vdXwHY5FPbng7whL4ujkUVYDsptuGHw9pN2zjCShqE73JDVtTpwe3woFkeo8748ED2JU",
  "key15": "5MtTZyPuBm4DeYEtTx378YGBMxZDtkWXEbBR2Hp1XSsd5NVBuepQ5GKuz1ZCGdNe7Kr2gBA8yV3KFeCftS8Qtrss",
  "key16": "5wHto2LMbR55ohGtKnmDEofKqqtJatz6xxMDVp1635QYti4mXwLUqHfvSnxcFifgesmEmUisz5SGc79YmuDG94cL",
  "key17": "5DKWWHNJAv2ZamFiaP1V1iCBsYJkgD6Xd89BiaGxAu8uqJeR5suMDTXaBu1uYzbTxLCBzTUpA4vJr8mY9cRgbUjF",
  "key18": "2quG26FK4D1NjDMhf1quuK6w4TmzhAt3GzSLBLevjELMpCU3aRjS3hxPenSsUuqesWAgdzFChoRG6rW8u4Znenwj",
  "key19": "2MRcoSc3tT9ZqcpR9hsyfFmhvcBaYaK7tAFYQXgkGsWzHKDnDe9Xc5TkoW7RYP13PE8D226XExDz7QKHgmvQLtB4",
  "key20": "3bahZgyg17fxUTmkZFboXQ4SrT9NhjFDUZNVqbJLDc7jES32XuBivnCp2fayKPCyo5r6Z6Gx54upwnTqaWfGxVtV",
  "key21": "3UhdkwQVzWALvBBtmtkTYM4z1CnFELYkerw3FRFZ6cfBK13i6cY4cr1QaVkELS4FvsCUNJ1yzMXdWr36ayLMTrXX",
  "key22": "3mmEfM1JFN4uDbBKTMeVqtLJY4ZzVpkCkqDLPKS7N585h2b5KbbRorovWpXLtxXD8x4AzbzBJxzbMpxM5iDBWsBq",
  "key23": "5TdWLtyStfeuSjXiMgWzDPXzcazf2urq4km1CkZBYUVgroDkAqoVnpLruYtQ2njZU53vKpLFa4m3d3cJrgaEPq8W",
  "key24": "Rie7NEmVaH68SsXZBjZn4FpytHqAzc1U6HQwRBJVU1jUTzjNY4GPQaTxiWuTWMdJVYuHHf4XS5T8E6rH2xK4vya",
  "key25": "4ezJ3AUjuB8q5qwrp5dQ9dj2H3bmDXNGkg91eouXWkFXoqXjcxoffAtjzy8V7NfPkWNmPEVCVdxB4u5Hmqv1qPJK",
  "key26": "LgRwwSncc6G9x6QQy87NqdFEdRK1R77nCDPj6uQWsZQsnDxkv4YsYvfZsUvbCu7iBHodBNG7DGNY1P2JuSgcQWE",
  "key27": "4PUj1xbZKp2xA45gTVkVz47HPME7HzzPgdCtiogeRVuHTcVvtqp6tgGZ3rTKZMK3yKgCwAXrp4wNFHgDHA8VqVLE",
  "key28": "4xE7BYHiRMBjZuN6KmmG8Kt4TpCPM8N2NKbz92RJHpynytnt1X7FTY4SgYPRVCzonuKyBxzYPN4ncTqhkurLARv8"
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
