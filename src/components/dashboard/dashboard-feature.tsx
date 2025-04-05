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
    "3a1tWbz93A4vsafyXzqyaGQ3sst7GEyhCeA5qfBNpo1t6JKSX1GubwYhKFKwgtQde4hQpsodCeazPK2s1nAgN8qS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mraV5VC9tSsB62X41kucfkHhFLyHxhihMG9eFCiGp4gY1g7nJ9tEaEtxbUQHD8PdzT9D9y9NjB5aKCKM6KWVWYC",
  "key1": "4JuTCzoG8RXdbTfL6GZDzKykickTFC84atgZJp8QkbdcEX1yWTtwohcxcxvgZE5kBzQEergzib1naKxXZ79qkw3s",
  "key2": "3aC2M9JEdvdQrAX3DLomUgXgVrakg3YYsGoRuBHqUv8atuASL9xMD3PwxTyczWywR5ECKGbUXKj67FQW316Qf6d7",
  "key3": "4RcdNGheSuKwbAcyaDHYK4fEuCbnz5xGBRVdGY6GBzunGhoLLghxW7yHAHN9EMwwL6ZDHRzg4n12enQXyPJfJM9T",
  "key4": "5GcLt5pfosUcuJTe1GvA3QMnDp6W1Nq4huXge7PMdcGQPaBto99c9Mu8ZQTsSaP1paFRYNrjiLTQMadyR2b6ebsw",
  "key5": "4uNmWKdtNW796UNFnhzVhg9DgZbkggidVsVkCJpRuuTbZbmRqGUyCscoFrCp1Y8JGpCDuMNQ7iww3tCviQBBQUBS",
  "key6": "29pyXDAX7z4frx6SvyooWqoKKndTi9jDCxGA6PmXrCDhbEMkAQvHwkbVuEbcBMP3yoUMBVqTbLrFZNfcobr6LKV1",
  "key7": "ExnAQZtN16s6Gudz5Nogo9iWVuAWUY26HBMjSzEWircaY7W5CQZcYyKKB8fy6pyQEYf25tGNRZRC5XtKw7pKvDu",
  "key8": "4rat5mYZKwrvKNmjVSQE7w8n8nBH6yWFiVNXUrBhSJ76y5hKKtAva6XKSiY4phrUPs9va5S1Wj3Qi4fn2SPcqLXX",
  "key9": "2EpWNjR3qntEQa1TZPC4QaMt7rL5LHG5TurfiMLhProkoSwh414Er3M8kaQ3FDLHwSvj3AQM5PXJCYLCyyrsHWYW",
  "key10": "4UnfPXtdpL5sZUC7UXMHgJu6WyN2Nksu8xmzUpMvVd7m1tTvHy9x5Qz721fyApqPZWxc3STfgN7zZfHA1ARnJusG",
  "key11": "2tfzdweAauQHaN7yRNBj1aGJ9ScUDoihSDJ1mAYtq4bAJuR6zhhRtjUe25LjkV6ghKRY6GLQobdbZm1SrLCcmUk",
  "key12": "4bFCHXE7gMzEjkbr6wKVhsbmG9vE6kkvQtiopqH6Sei3HS4iXokuHxgyavirNGjeFd1hY4TgG9PnLgwVfRHAQdf9",
  "key13": "TqgrfrhEBuhQdcXgHQsw7YwaoFgRHx488buCiSnbk6AFwP7ra61M1XfYYt58NBHABTCxFxzeCea3SPK2eDKpCor",
  "key14": "LmhQyGMypCEG6jea7yUaV48oHKk2DkvyRYD14UDvPZ87LXQswg5AbPFWREvUGcMBv7mNgK6HMcLDw9cNhaEtHgc",
  "key15": "9m8c7RC1RwQGiJgQZGyK1L8BESyYYwoZuVBFimU3BiaGSV88KRkFY6xzyV8GbhoBXPG9x4XcTUvJMYmXmj5EaXD",
  "key16": "3Lu7TxFFx4oxs1zteAJTx24XJweMjMLoqDg5KGAGXvuVz4LUuh5k2GcG7adogwoyzds3s13UajWJpEFc62sTJbwY",
  "key17": "5rAxYHPY2WzLiYkiKBin8UFRNmEHZ5pRztUPZ16wZG7355GS6Gtmg8H6mzYsoY41kUaSgWoQYF93HA8HLedrsXoY",
  "key18": "jLRY6tdCyq2BQTmp6aRda6EW7YKHZuWbPT9Jwpngo8HvcnhR95WsEDTX3R4j2bjb47xF2nAJcphYp1bJDfqz9mj",
  "key19": "2TRmmXoWy4FaSymgowYsxE7S4FF1jFSEEXKDQ4fpTy29QRgy7YaQnCmb2W2Nea1twoFEx6ZfAde5zjjaPHDqpzqC",
  "key20": "641jaEJLEaXgZMfZiL2CKTMyebKDpLjeEHw634RTqMa7upwwpw9nS1sK1SDxP6P8B625vZ2PVnkyRV5nVse9HEAx",
  "key21": "5kV8uRd6LNWu9tw99c1JnzYPtEHgJGBr3mXTxzmMVXW2z59RUYKCsLqXkPQRtA9u2sxCUr5BH5JBpJHkAda8E8oc",
  "key22": "2phvWECn6qPL9pEAfvaYMebAkhRuaUxWiRUTfATp6NSVyRWVnKZXKtytLDR2hkL9GZ7eSnNpCVgpNeDw5LwPKYih",
  "key23": "2t4MRnMBe8qWLQZkja2q4gcM8gLBX89e6msfoPKCCgDkJrUR7yiVq7knJsyGY1Aj6ug8mtsHyBn1HV7sLn4Y4yFc",
  "key24": "3fwKMebBt2ddxJkxSijWWcaAbwu1QLTRC1TjMVsvRuqVXyR32TSkgd12zzP55zJdNdk155RhYkgwUxqd6V3C2D53",
  "key25": "32uBNgU9HYigePaTTygA6123AAg4xXt4iHSLPnCp8NGCKqW8LhdpHrLxe2Mx9Vo11nzf1pk9BAV3BQqehS7RwGYU",
  "key26": "5HLCBwnKHWNLmrwWCt6MccH4QqspjpJy6wspnWhqt13nqqrhAub8F3uwBZHQJ9wG93TvZMB58y64Ck2xXeaE5fcp",
  "key27": "22vVtwtvF6qhsXbzGoGt2KL3nyCWjMLu9h1reV6waEzgL1QZ2QeUSA5ptdUDdjAmUSSZw4gvZmFxUqw1HJCVM2fm",
  "key28": "2cqJYSBekVaJ45P1mPt5J9qwANAzGNKs3KxLwjUywE8yn5afdF7EKbRn66PfAbF9wyqzNxxcGGiKpBkdv2aScDEu",
  "key29": "53AQVrquVbt7H62ggb7gcGpybuvN3vBtSWHLFQphvegAYiZ15dbq5UjKvZfoTTSTTSnGrYBQfn1FBtbtHYXtgd6t",
  "key30": "2YRvwnpnwcH5oYzYCEGUfdRpJmF36y5GqBhMiawY3bjhYQ6cp3v21btb6DRfeBmc3cQQcBa6FgyGgC9UKXHmUuNu",
  "key31": "5FsoczmmKveiBfGhZmSJkMNXZi2hbKsp95xJPqkN7ij38NgYK4r6jHUGfqLiiMBt3CPFTLF1wn6Nwou347vdrsmT",
  "key32": "5uS5Y1szwg3TyE7pNgUkNkjSMkWfehsVkRfXU4z4S1uLnddw5p9QjbYNPSm5wfp2QFBtEE56NHY6QRiGfn4UzWSS",
  "key33": "2X9Vik3xwRvEWCPp3rQ8ji97FJ8PXbaRQ5HhNbwuBHR4d9JXKqJxNFppksToDs4g2NfvSVCBmFw3qXEdcsufxx4d",
  "key34": "VZPu81CGQwJURWZWbctyP5oXugrbhmEXpNJS6TT2PoX58WqTHwSCDsiDGZQmwVrytVnL9Mdfdq4KFNJcUkws414",
  "key35": "2Rk8M3vwi7uE6F5HMP6G7a92ds5s3rZGxVZVqByQcRgPBDpjoZezvECa3kVkBHk97rjXiDQHdKVa1wHu7b7L1NMh",
  "key36": "3jVwTqpz4Jk6jfMU4HYWUGEgQ4f8CmJygqPKn4h2uUBgaziYsupScua5qyaXTkBg7LeJkLXJYHHVp6x1fe84Sr69"
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
