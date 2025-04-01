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
    "2t2EmzptCff5b7Q1NoKNupQbeaVVchwA59vejomVmo7rMEW6D8veGwQ3osemw3bmK2iAkfhuBhNnrnWPBLdCeXWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHe1iQPdrgpQAkrGxJsHigEYygVhkPChuXgv6A8CLjUvZZVNgw6Jf9j4ZtgyxifXkeqvyqJUttBWQ3PY6BQdumZ",
  "key1": "R3s5Hrjxiyh2FSjBzKNC6nP7umm4ru9ewiyZ2B2UhvjHu61EpKBNVNgfj1zMEBGhd3UYcr5fgMEQPDGb9pW58Bi",
  "key2": "ttYBGUUuyHjySWMzu7EEjVR1skNkzrGnfuycwREyR9R3pEKXXfdvqpiFUtd35oQ7z98qPRMpEDRCzWoWZwK22yC",
  "key3": "4QALpLc3bZSRwQAukz1MLeJp3nREwWcHsVAgNn9qseynnuhr2qq8ydospBN588fUmzG2EPXZhAAjL642UdWN4S7s",
  "key4": "4sFqvwpzBc9NfXSFmq8PBoPsw7ovxe6owGb7p1RSFBCeCjbBd8pFpATAB8XvRDUEnYYeYFAfo5f9KzSwyjTQbzcE",
  "key5": "3fbbsTxNV6iSD3Ku7rqATh9GdzYNCbhKDbwGE8SNm8Ux7tcdV872c9Naxf78z93hQzpHf5N9bbDQYcD1Jro1NCRG",
  "key6": "58zc21PCWyxbg1gBEUYsxh2AYPzY3S9CDkdTsVPFKAj86gLQHCkp9DVDkAbMCDN4MkSrke7ss3iEz6kbYsiZaXTc",
  "key7": "5o1pkQnKLmXaKgDZ7nXXccWxk5ZPZU5VGB4nWge2seBag5ioi3qfca8FasZogR1tD5o94KCYFeW2ovAtRtaNahgX",
  "key8": "52qudWxgr22mZf6fpAM72FN2wFuCkHNgTxydTw7DXornVmeXUemdcKYkDpu9XxZrUtwafKpbx3tbkD5QPbVdEnWu",
  "key9": "4g3KMRByBpsEq5HEjw9J4Hsxbk3UhVevmrMNZbphSn1gYM5Hxrq6foXbiiBYdhVTDfzxbRpMNmTHcNQGjewi13m6",
  "key10": "3iRuAoYTSJWx6azcqrHPCBEeQTThqyTfgZLVSijr1zzWgeivuskVPZkvg8RtFszmL1MGVwQeBU98iutgF5Nx3WjC",
  "key11": "4PV2ajf9JsFYPH18cedTGjaMx5JPh1RFLHk4nMAarYeswxyKthX9urf5gH5fxGSSBksQw9NDVnsVkYLZEmcCwsnH",
  "key12": "3uqD16pqiUPuQXFVcBfd9g4CyWarpiX6X4jAr84PMZDSva8dZfaPCkkbprLj8uGEVWKoQtpgg8k9NSY4nySHy1pH",
  "key13": "3CThGYKuUwknhm1aroohsquP4BLhFpJsJ216mDLAacMCuCgrJAKrCgWgwzd2RQgvP92hskk5aCszrWwA9LwpRSZg",
  "key14": "3URKbqmxFwJcxmiSN4Un7uoxryTbj3ESmhqyA8w9urzuQ7YvtCwBByy1uZsP4V2fSkGfmF5unTVU8Q43rV7Ec32C",
  "key15": "2Bk16jrkgzS6mcj2ua8CQfgiFXse4Q4dmfpRsiLdwttgMB1yu1Fhm5vu1AMSZ7XLWoEuWebbixpxBg4sebEgvZEC",
  "key16": "2RjA3Awt31n6wLLuDH6dKxh1PcZL1VXpEWqe5aQjooWtfBpMHzf2PAw6PLW1UFKwtX3twbu9sVJZ8L12fwvYymDR",
  "key17": "bkNcUKPnEomaXnWS2WLbBaMDtEEXoQorNAx8QqxsE2xiNw8azNa6fHQpb7U7yqR6ZYdWRpH5f4ASn2r8eYdbH3d",
  "key18": "12U8BzHuKhNC7bK2KQ9TJqRZAxYmQoirnZbEZ13gfM6vq5C42LLkhbCopzc3UXPbp1FZuVaP5EjYxte6WqqGSTF",
  "key19": "2DFLmJRGRTAQHuXr1oAroyKqYfJvAPzwCXM2HAfYWnVri7m8wavopiREjETPn7vY18eu5hhigftumJ9o2qZSuZrv",
  "key20": "23XnfzL9saG2ewy35ZubrYJPjWw3z8NzGSZo6kBWEGxTxWebBxthP16AZA1hegjgksb4qvuzeoETnUZukQEFDCpG",
  "key21": "62zpdmHkU2bR4Z3Cnbkrus3ZGTFAGsGBye5uMpy7TECDciBppHemx9NbanJkQsfctV4VAP4QWEnKw5xkL4czDRLj",
  "key22": "4PT7WAcHEFrWm5CmDjootJB6DEJ4wb7BipGjyBNRaUuXPi9agKLEr9sgHwXRYU8csnEnJjd3AzJrbtGDjRNhrhjC",
  "key23": "5GUAWNhF3n2fymEUnpz4hztMPYyomzyvXo6zppdcMkCWpDJMXkAy4ehrhLsHJsHiY8tp7eWvk2AD2RvQjdA3fhoq",
  "key24": "4T9XLeWEZgK5RECpQcvyigEfRVRQeWxp5kFFQZVd1NTffcynek69VL2CzJAvF3JRWnPFPMhuzBoKonqvJ33LzJsi"
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
