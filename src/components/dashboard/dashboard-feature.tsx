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
    "3eexVgHKVZG7SqbGNzn7z6sdnTe1jsgoNT61y7Aezoy3b539mfKJsHBAYNcXqBU2SgqqL9JnFW9io9agJgUxtdwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66GNiYRdMEkwtnSh5A6JzRsoKU1j2iYU5Vj45AjgqTXSRENsoS1yUoMs93rnv7AqSoVCR2CiQxxHqaQHi4YELhH7",
  "key1": "4Juy8fcvibgbpjWxhnGrDQzES7JP1P6apeVeDYRqpmPVHM7uiiUvLWkRVnqeen2i5foxWKj1fUGnFS2qoPP7SeB1",
  "key2": "b3XrMvSpgnkTeQScX4WyAYuqCY1i9WQrQ97m8Bg9pKMhJwhYHGYvcUv9nioSuPEXkVmNR3yNeaEFhYgRmeg5TrK",
  "key3": "5wZJT59vzJWugKP4swcugJ4TzpyFamR2ojMhFqYHJ7CJ7WJT2dPmrHvU1jqKK6bV35s8TKhtZn7KhsJJrk9ZpARe",
  "key4": "3C8iLknGeFYSx4XjnDtjL9kwRY6wPGdEo6HM7VTXJfm8ihYocRqvczTUnz1KudGZGAnNkpX9Gsmcrc9nsPQpCAyM",
  "key5": "49FZ8Sz6UwCCVXCeV3MHEinW8yLFWwrQbNqUwaEkN82PvfP44vVp9z4NBXkYrJSjWveqoKfQ3vkvzit7WVdC71TT",
  "key6": "knfpWjUp6MFadfWATpJpfRwWaSmByVuEbySvZuhnZRrK1ceEpVdEF2NAqEk1CcoPL1sfMDHZbgPNfXpzVPBiVSA",
  "key7": "42EaWex8q2smaww5j8mLVKbh21ASo81RZXXJhr26Wg6Kf3Mhosy8CBgmd6Wova5AuHbwFvQrKHzQa4rEvJ1qt8hP",
  "key8": "5LjKBVfziENArk7CdvwadU9AEUz54xxbHSQfENnF7LcTgrn2zjrUhoF5j7vRM5vsfkjHwaCoexLUyNv4Ww7kA2jF",
  "key9": "EsazMWmTCBJHHxbadvDzDTdVHr2z41HRaDbgTUju2NrVNXDBiVTKqVwv3wc3ByR4AnhHhtP8yDxeFuindsYtiBb",
  "key10": "5HdJFS874hPJCnLCeNy6NS9ksYLdBjqbFuBcH6XzyAP8TNSwH3qqpXxa7dsT4gwNbVJE9oZTAdeenNCY4TXxMkYJ",
  "key11": "3wY7kZ74hwxRHyuCfsqWmgMvLbujLuXyya5yThf3YRY9KKurrFjg7WE8rgi57wEV4dLk5kK5DBv3vAmPZpqotYXb",
  "key12": "5JmtMiANyW8JhJ3pWdUbdkVNkF3WwvfFtfVQvn8rd1TdqGHnZugbTdgDxCNAd1HiJ4U4uVZXi6Hx3VC1zyCeoSU7",
  "key13": "4SXdyUiTxLJd1CaeWnh4aJgA1x86GqNMo33nQrYYHmoc8myh54FDDBYnNo5ho8wQa8VbTejKVsMyf8wNhy998uxv",
  "key14": "4CKHfSRm14GTyYSk1M1R6bi63ASzHKvvHtG6Djz7T8iZuVoDdu3XRK1w2HsesKzJ5sgesBvH48ZpYY8xJPCFrF2y",
  "key15": "kSSPADrRtRaKXUHnYywfLFEUSaqodV6TrkZTwnPjTQvVBpBrKYMzYFg4tRCRMJqLdyiNH75B8Z4AynjUxsYgV46",
  "key16": "4KmaT179XdoWgPZ8anvEoWiKnfAb5s8YonQbB5MtH76SPS6vkC52jCTrAeBmY6iwxADviPVL3hG2wmgsRV8Wbu1W",
  "key17": "4NNbonL5dKtdmip1mEK6BXxWpLdyex8rJb9RRz9SiFEVhcnVeoTrsAwJ2WkqdDcqvt14KL5AoogDSAimTbainTo9",
  "key18": "3uZADw1b1hm6HFWDuBvGiNkSdmhhKSmMGz5LHpAEShcXiP9KBvpCdZUN1BXxwSDAFk1m66bnJvAKa2qW6HecX2dd",
  "key19": "2jNZ6qA78KWrwwiK4TniABcct7MPFfCo1eE6BjhT5KESESAapAPoRQLDiyucBqa2RsSkFF1VbrK6GSUpPTBP6Lqx",
  "key20": "4VTZVhuTZ3ztfpo6R4am6kUx79MUGsYoSEBowzy2kW84CRx2g4kBTD1F8Dpe6VLjFQ63882K9EVrJzpjs63u5Bsx",
  "key21": "5W5tsuA6xjgwZ1KHT93ji13FE1VnbhQsTh7fwWSjpB8aCeeZZ5JrnUh7ZUmYGVXfsXfcyFBZMtM8cnZXXxVontbM",
  "key22": "HMed1zy1DocMwUu3VR6fTJKuF5PsTrhL87uVHbCJmaXLYiZSbayEiEq2Z8vLW1UTzJdgMovYYKbtTY5G2wpDWGT",
  "key23": "5XQkYrLyXVkRoPj2HroAkLHsusGBdEc441L2Cg6D1ovamcFNViq2E2Q5KGNSvyXKhCFPiNrHKBdxTwcFvTTiQia5",
  "key24": "3cuFSyq71DNvbUQZvqCYxj8Uqf1NubvG7J2AQQAircpmiNTwn3MFWL4oKDLie1NLQoXEjE8gpHENbsJgx87BWDgT",
  "key25": "Jtua361b4R2ctf59XYDYfkTz9qJsqHRP62WKfoS4a8D6c7sPdNWwEzHL3DdoWjsxM823heoNbFRDMcMryg7skhG",
  "key26": "5Vwa1amWu5f4tyK5XMnNrxj9DR2f5ASsgxyiM1cWATEVnFkqPo7XfJoBe7vhwXgtE6gXN2he5oLEzGVfXTGkhGPX",
  "key27": "mSQq7XavnSTZ1pFYVwiW2NCCdqDtsKmPPPXEJbFUFYyisb2f75Njbp1Vh6NH5axQVAhAysnE7pDrXtZWbAQpqis",
  "key28": "5683JK2APdsmHZxkKKaQdUjp8uRDwCadzwD1GVSf1FdvSF7avGPwDbxYqWEZAzDCRn4YqGUZd14tzFvyDoFFGTx9",
  "key29": "3zKz4ovhdPzZSEUXJJRmUwDxu7t7u8gzay2ndRmMXfuAtSArDrv4kEELYuJC6nzWb6C3hTcAiCzVxR3e7NhTcAgJ",
  "key30": "5N1TryUZot8pFq3x35dg94AeeMvFRaZB1Dx4f7DNvBR4D7ENrTDuVYd985D8ZeVzeKmKkVCqFeAFgSqPha1MDLcC",
  "key31": "wuLJn349ajG8Qv7LEeFJASeMKUwz9H49c3eXiBz2CnBrb65NKbc4g9SpyYq8qtTToz56FnhntxYesBuwpPZQ3cX",
  "key32": "41D8XsMBqW7jNpQcwtcWmPHoiJcid7j61q1CQLLevAyxeByPbXg1SW9NUEikrA5XQ3wqUGjRJ9kLHeDnFrCfQ4hG",
  "key33": "3bazj14ewFKcdzAwnA1g46cSD8PZCLssKaETzrZ4aXTPVy1WCpBL4PHwUj3tyCGqCruka9BDpdXMUPQEChpE5RF9"
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
