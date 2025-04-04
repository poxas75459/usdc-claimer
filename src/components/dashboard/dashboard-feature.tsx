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
    "3Q3vaDWppdegZXq1jrCE6r3kX1dh6M3cXtL3tf18tP28hcWj3X6mWe1rRL3UZMRNAHddPnEPFAPoNotB9E6V7vwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMCKjpJdrcGgbyQBzUg3vKfuNfaWSWrewuKqhB3hahxdDdmUdeZa5uVY9eXXmqeeJYEHyT2cpTj82XGuz4YS1kN",
  "key1": "3Md7w4spuiX939bZPZcYuKUqZgZP3oxc46FoiuShyCbdhhbkVerK183x4aue9osWwbC1YQXzBpBYtMSXd92gtApK",
  "key2": "3VWpuAWDvnx68wGHhJxq1oXVtSBeTzURFYH7exxLkLx9WUWShaxHd45Ga6d2GgVsA6VLtFVJQWzxffnSzRVmy6Dn",
  "key3": "PcNNCLTiJa8ompfgvfbBPP12h2PNu76xcisYpyDMy65hjMqzZ15Mr7GkvyPmJLVaWY1fVrpDPFvamUomsW7QwZP",
  "key4": "2omBdTK3CP64bKwxCwrKPP6ppC16xo2xK7RRn1MPPT4AmMF6mmDux3Ld5sC3RrqyydrBhd2F7sdqhnAFLAUhqqef",
  "key5": "3dyrc8QUcKNW5YpghTeANRz74qcnHicuzDBJW47WSJHtshNQkHhnExod3ogAH8aekuMRwkDrFvyNXNXgXTsnqNZT",
  "key6": "3wyqDpZBSZBHjjGKKnVuBftjsPpVvAd7qaTD63zebAPhSaqDT5xokQWQj9aFeijZQsR4Qvh1ErciaPsWNMGqB58s",
  "key7": "2KFH1GNL6dNTMxCFcaAq66auJb4UqGyMn7QsUXjL4xjZdXYNdXWNABfnG2yu2gS9GmqFa4Nn2s9VEM2TVpRdm1eB",
  "key8": "333fV6CQgF4AxcAWBLonfHKQ6nHNZ59Jn4VBJ3sot1mu9xbwVdPaz3Wv1fA8ETRejeX8hE19ziqzatW5euxH8cMv",
  "key9": "d7BF9ymGN5xYQJ3nnNMCYyM3Pu6EDKjYz69Bzam9fg3SnyeUU1xoTxdZ6SsjnHn9emMLPhWZNDEt3XXuCChTnEu",
  "key10": "jUcx1RFp1Swr1z6LWchmHhm8qqbq8mpMEmvZc8LbSjHmTQVhfaHp8nNHrmY9EVRdHdAqmr3bgiPDbyTm4Qo2DbV",
  "key11": "2TchouegDUmPfScrC3ttfvN3NWtQPZamPixPsF8kdLgcvdYhBqB925Q8qJhGLyc75x3QxY3rU64YjMvaxKP4SWis",
  "key12": "37wsFV3VFjJY544Gkk5e2G7aVsZzJqpmHVjBRPWVmwguBmQbTEZ7yLAFPRfgKcXBtWKgqAysFJLkr54F3M9eKw3j",
  "key13": "53w5aWguVKeQE9STDcYHhQKubWt1pYbn2ztRBNXx3k9M537XVGNaWMmPqQwHRvbbAm53NHocKrZPdj48dvbHR9rm",
  "key14": "B4DMbBLSeS2EiEJ3FbQEAyZgHokX5whQJFQaRetNtYL8ZNXtd3kJYzSw9n5MswpY6vFtjhp9fzfBiU2tt8eJfmd",
  "key15": "2rDdaTt624CfFk2DXpxoYLobBY2y9Yg1Qy3HHkM7wYo8N4yWzGGFSZXFVdSdmguwER7Y5U4Fk1y8fkfdkoSgMwTy",
  "key16": "2AeqCbctQunH4u9qpZdrsPTaWSD7wU7SjwVDNCkuYtMbMV6Y6J3R5Z9eBR8dn8QhGZdhmDPDC5zwh8h3CVKX3S7c",
  "key17": "3JuU5numu2RoSgeoGDuwezKBcsP2wNayfwzNyu5qKMijWSkiEn5NbEbxb2bA1iKEHMBfmNGLcKjzFsAADCpVqPNz",
  "key18": "5uyGYnFGowVTeMCNjFN6DvEZndNmRqUypTnMiRjBTEhXpoHGGHxVPBN72Jr5B1QTovYJgvuckvAgWYjENVGZbb88",
  "key19": "4bYJ1z4SGiM8r9KZn8Yhhdhza3cqmsfDyiKgEYqU5jZuQYgJG27dBXGC5oXgStss87UANwMiG3X1Z5UARa6pdSLz",
  "key20": "471uEKidji15Bn7LXZrLKhd9W7WcGzNaDrkKFsRuLwZnQAZPRL3VQxQ7CHPG3Vd9hygHbp8WwrkCRFuQyDhAKFPE",
  "key21": "5kfMjbYfso5oSVZF5XHM9zCva2oQrmzvULA19H542ogmNny5Lghg8XH5YqW1hoRcAhroitdKmVyHm4gx5dykwNBB",
  "key22": "4aGYX1iGs2AbEQZAJc24cqzMnDW3TU8exSzFVgnmfZosMrEncCzgTG2ecAp5z3DsMbQmh5GT9PYmVTx3KkMfXvPX",
  "key23": "2WJCka75xcvu2nC466qriR8LbxEaR73rWi82DJypLrx9kWrgwemzs3SbCbKEL5QkDQAhTdWZ1fTcat5MNmdNy3rR",
  "key24": "2HNpkgQ3RXBYMMBRGNP1An8rUPMY5dqYdHW1EPmVz1HpQwg1UHNFjN1WcH58WDPJwzNoHuXpbLAQKoVByFcVodxx",
  "key25": "hkvLv7aRbFDhUJo42K4siGyV5abEYSkF8GTHgRYisXjWAbxfDAhJHdx8Rj4GQohndGSvhuNnaFHEJP3aWVqiFUW",
  "key26": "3resBayBzPbYf8y3Ji6th2koQ9ScFqTccfW7uLDXZnZGbHqjoaBg9K1iLngoGp3iXht3XoQNNfz7UofsE7eWZ6CK",
  "key27": "3hDtgDBmqQcqd465PCizgV7t6J9fnJgQA3iYdYYECrSAqKeg66HjJaGYnFH16YDe7p9kc445oy9JyfkCurSJtpXQ",
  "key28": "3L3tMpgxuyunENERPtL5pZsPXA3xKaPKabgk3bb6uHyatjdbpdWf1SdYiTRjaDgWBuJJg4cbZspVeaR4GAhTqL9T",
  "key29": "4mVuVw5HhxJCfrwPvEShkvGVnUWo2PwVvMGWjcY6CMAU1EkQhD4WgUh9nnCMipVx3y5awaFfT9CMkPrmxreyU5AP",
  "key30": "255mGjGYYYCpQyYyyoYZvtY8BheWM1BP6wCxyuAeYeMBjkaRAqhMMVqVDfGAx3ACeCACxd734XdjnJJ4V1Q6abcE",
  "key31": "3hXgHdq4kx93eKBE1wH43k67dgitWnYv2aWSDRS9ELN52Vp88KhyhX2YnRig7fipRFdTAGygFA1w7fdiV2aNBEu8",
  "key32": "txo3k9vJjvQZmW3GNRFG4o8TkehMv9h242VA9hr3RCRFjyXNqFxGMPNRQoh2Ytd4ePeEBgUMdL7vJeSQYoyD9sN",
  "key33": "A3mwdtR9oCWQU9T8VN4iptgP6qa1uVHuv8cuLb6Pe2G63wB8UBgohvCQLSRpDfhXem7SiUPCd72WvSgYniYTZVM",
  "key34": "4UVsc6eh8PeP3cGWPSGowiasWmYbeb7CfcfUdtf6A6YU9Knj6xFYpHZdQ8UCS3tMwedcQXVtPQGyVH82i47dhghA",
  "key35": "246yyWXUjCgCuvPLs8jZFJJp953esDNCN3mptM5jCoEnN8vZ8QtKk9bvE1Forxw2XEZwCzKzMk3AjZmfWmwhEXvi",
  "key36": "4Uw1LjhzNkSBVabHpaHDUkrFAcb2mApptNv2S7CeaecjjjsY7uLXuYrFd4myRgcFLTKQhTyjMiNGEEixHQmb1mJ4",
  "key37": "vB5c558yce1J4xW5WkwSrRCKCbTj8YBsG1fowM1onKzmsLDwD5g1VGXgXAsrKp9HnfFMLeyoBsxAm7VmuQg499g",
  "key38": "3x22v5atvckBeZGxpsnZziwCFB7QyxP3zaPHR6UePGdYgjNpN4dGgsDcMi9pPtJxSobwtFG159iZ5n2b4ywhNtDn",
  "key39": "4vSNf3RiVmWCXwgcWn7JBdXhwemwMaHgtrjDxGNQi4BPNME4wNBMnFKFQkRQXW2AnQw86ZrcqPao7BAb9QvbqufM",
  "key40": "341bQJSbyTNdCxDpCCSvt5pMHyUJdWZTYMd8XLUYEVsMCNEDYMrDtaf5UzbimA1htW8XZ7Tc3VaRXNCyJ5DuaEF",
  "key41": "4McAJYKghzzt5JSufDSBnwKUb6kSAdCa1du6LwQjQ53HHzyqujQHukJrw76u4GJH5BnxXMbMQyeSGW7KBeXVvfHF",
  "key42": "65tMxNncCg4Wyohd9KYdDpFCHGSPSZ7ru9s8YjTzcQpAGWkU1CSd3cUWUUhUzHD4XMhPSmhCdVkfGbNsCSU2fL2W",
  "key43": "5an33Lsi1EXC1cgW8DDAd7oXwKVpLi3Us92zBxKRP55kbHiS4SeitNNAtvb3HK1utwjbpwErpc2tEZEmr8oWw1p3",
  "key44": "4rb9Akedk5jRQKF7Mthq6CQhVB2pbcT6Qfpwyi4AKUGDMsm2SGHsrxmYqm6bmKnPYi3yfYp91sAy9joW5JEGg3Yr",
  "key45": "JBHGCceVgvQ5bNpJpt8rjXeJ7Rfw2VrXW7USqNUAoChyK7fUKf2sRfNYuBAMKUDfihT1Ni6M6F8Vz9NwaJkXG7S",
  "key46": "4vxy7ymb1GGdmnC24GGtwWWFxxQEcGAmXuh8FBDAaEvFcSEX154WjPrTTWC6yHjVMvAmLs4ycp38ZYCeBy2Njhx",
  "key47": "44nsAAAwXf5himJR1VjJByYA7AgcqHJWuWNZrCumk1Fk7soFaQwP9eeF5XEfSoWwWYiC2hjDq4LAkDmYsHp9AcLg"
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
