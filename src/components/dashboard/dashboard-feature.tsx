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
    "4ZGm1c4FfnD4Z6mtBpsmVSGRnXWsBGaqPjehyJRhjNjRTSfgqLXbPbRwUk8Jmme6RsPPFJiQsgWXgJRaDFKAUaCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7v6jX7rJQGbNwskSJHBxGre8JWeSk9zcJDEoFFdjmMhZCjrNdjJUcw27gwM7wnEQvubLBAB1onxYWtzKoT11pjM",
  "key1": "5yiLud3kHrC9GVAUyYeiLmST4UBMsJSrcap6gt3wjoQ8CjEsHTB8x9dDiu7oEwNEtcS9YoWJEm5m3gvBP4VnDyCx",
  "key2": "5aCQpGVFxp5tfqkvn32oZEi6sDKCWLB8a4fKyF3aG25jREDba3NefH3bJmBZ2JA41quif2XhCAn7ETAyLE6MynLd",
  "key3": "BMoFBwD9oSVeRSAp11c923LvFXqthFMA182QrgpPeRrMHrf8eXnLKG2NVWkv4PxCSCctUxCViuU5BZmznk578QJ",
  "key4": "4NXbrkB9GXoqKkv5N9En99WpK4EpxPT98m4ypYik8gkUXk7eaYSyvQm24ExXje2EXcNWHWtyBJSpTpD3VWLdXtCk",
  "key5": "H1NY2DbgrcgVAm3FcxjRkgwL3cn6fa4BL2zapFoX8N7rGteeoi8j8EgAn6NnPhAyDhMN1czkNf1iE9D7RZRQyrt",
  "key6": "2Zxjxjy5JM32yWea4xFAgS2BuxTLQm3vXPbdF58pskA3Vbvj6rF71X46iZBvYpEoebvxpaZynwzYYiQxz25ysn9e",
  "key7": "jv2qeq4tDHqktt2gZENM6v3xTPgrqrwHiSfprnuTv7ZDCexQQ3RtZzpRMs9VxeSoBxCHKHktvMGVXuU6KNbAF9r",
  "key8": "25EpSXKcF99JCRHtVZvgYs6JwtsVnoHVj2u4G9iBsyAVfamvMNsBSNcPo9Sxexn2FUyAiCGtmBYLi8ZwBBoL1Qfc",
  "key9": "5eDREdNX8AgXTjwx6yXAywxUm3y9GR54uU1KiedQo62f1STmQDCGjoDR5ULCDWYZKVNQjbybRkGhTruz917w5N5e",
  "key10": "4frwzWV7BaY4mh9ET6MJSD1VQBZKYDgBoQkzjxaStGBPhVyBCBRYXSiFvAjsvuZGB1qP35gCTrmiF9WxhbGjCmy8",
  "key11": "33MviwJMXa6GTAmDTpCFAmiMvrqDKHtb2H3YBdCirJj8rfWW15GVJRAsaKMp4F7cUQTZKzLxbvhLKXVf6CcZZLV2",
  "key12": "2t1qHG98R47YwFmsFojjuFajZcdMMEi22tACKfYLWuc9oEFqGjgvxewVF82eD9PdvpESYwc1nJmrt5jangz22xoz",
  "key13": "63yEJTMfqRc4zTPZCEWEkyamREkEzCrmDqgkg3zYPZtSFL2qZpDNF2Qe5nDAPwdfqNSK7umGEdrpL6JNCZ5Dp4ir",
  "key14": "ZNdsPUgfjTF4VFbPBpRL2q3eR6uCeGKEkmeyWoZCNQbX3SnDLEjwD6U1Y133ymwaDPnXw6xkS2tDV1NrUe6Rwwj",
  "key15": "LvqhN9HFSSzW8GbD96LSA8LA1cKaw1Vaa5oG6TTk3augp34HHGtxgPCgjQWERmkfM5djB2cGE2BqYNAbLQmY4F8",
  "key16": "u5G3WTGG15j5T5Qrwf7y7WG7igtZYwnwgiXk3V7phSJebw9i5cAbJFxLXamMcPmCM52EtwEp8QaKYAa3CRkQchJ",
  "key17": "2Z72Kh5tf8RxjBGhu5wahmNTxgaeLkajGFgyDtB5wj6FwkaWaSCkwagzhN8LVc7T9Xo4nw4cW3kpY7WsmqtMHL6k",
  "key18": "48wHLQaSptPph1nx3v4gg7zZr4xYcrANrPZCxxeyXAZPXYm8UMoKqixZqftizhhQZfTUpAF4Q9sKWswvshdtqRsp",
  "key19": "2VcHAou6tzRw1pCsnnydBuZQgx54NMz2BhyTB5SoiR4fxBw3iHnyFzS9RdvyDtfHxbzG5pvniNuYYgTxvMXk63a1",
  "key20": "GFycmxRXv6ABgzNrTvHqWXoqAaWY58XvosbBUq4bPLejfmmETGfNbpwCz6BFRa3kFwmqg7E8cUVHPVBkVp9PRfy",
  "key21": "darCLnzr6d7FvP6LQJJrJTSF3WSWshkXnG6WZZeM3nPt3F93yB2vWqmGGkCxBYKjWemX2weaSwEo1BbxL2Tewfy",
  "key22": "3jEm57ADo5ToUG3BDjg8QtJR5zALQmEZFd5strvHNYqQ8MbWrfLrhegQ8bA2SCWmVZ3DvVtrZkjQe8ZnTtn9Jkch",
  "key23": "3bCggcrLwDSm2gU5CdQZQMwKz2UDmqhEGGcoTyH7c9HPWKQBgrinz2mwrW29tjzcPKDJAay3nqJniCMftXYKHx67",
  "key24": "4Rr4M7hy2a6CQWE5q6BfGmQbQmXRNvhSYby1a4UxChGJVWCD9P68uqoDcKPjT7NQFHRkY5DYeXMH3yhsanJUUBoi",
  "key25": "61947w2QCUSvCMXaQ9Nw94mFCzv13c8aFEf1mUcqzsa483xs2YzTudkMuuUgEhxE244Z7zLKWD5Sx1uaxnHSgpzG",
  "key26": "3Jc9z6iWokPCtXnsJGa8WNg7Y2hzkGb6W13GMU8t4bujwsVvnRmZV86nCH4CXiqSCKa5HQhzwq1EaB7hhiPY8Ph1",
  "key27": "2kT1WnziCVJdczWN4tVSVZGdRErGhkMUq5nyomFzieK63zEs2My3pU6SULMTm153ZzNa3uU7pEkJFe82M9y24fAA",
  "key28": "4PAuP83v2wuSEaebmyEY8fjWgaPfm74MMmsLHdCyzC39d2vxYnCkVL3oj9eNE33CWh3f4omjdXqbDJFbxcE2JTcD",
  "key29": "2fU48NJJBXRiTAsWwfZCGC6zDDr6fzY1jwjPbt2YsCzqK5jadv2WgpooU5dvT1RgFKAUrgLWnDZbGe2tXoi2Zt3U",
  "key30": "3BXXCH1Dr6TSD3uCZUFcpq1JCc5Umi2XAnVYS5aki85n7iBqKb9QEBuVuGEVJVX5LePn22Qw9WEp98nF7vQJ5BC3",
  "key31": "2i14FHSUsLCbpcfMmBKNo1oMbGzN4SPLh2ovUskZGRAB1jMTpHhqmhS7bn98etmu54JmmapbUxcwtKjeSF7NhPVi",
  "key32": "2SDL1at1X2oaBSwVHayaHZDUpC67vt8WWtK21dPN5GzG54ZQ2osYhRZWSbD27iyG21dNY5nCGYRZQUoc4V8RohQp",
  "key33": "37yoYK8oMFsLBvkLKDcEFEkRbei9NFjUj2xtzpBFaXhBhDfMGskrmmuwLcHDzTc8q8Qa4zr6JscJbigqcRdykXEp",
  "key34": "3F7tihrgM7xnBy2mL5EAXXjH1eqULALJRUbecAMWaYnbjs9ZEGwxESL5DvAAVK1ZuMP1Q4Re48E5z4DGVnSMJHZs",
  "key35": "HTfWpn6H3qqEyuyVowJAZ4fB9a4RXoERoTYFA1gULkvTfPMeGCTVvMLPh1FpHbysyueMuE4xFCAmVQ6oha6G2LT",
  "key36": "2EJdWbYyjv9A5SPb2pYxYKpjyNbavCVAtQ2ye7dgZuhyfNC7nJsFfRRku8Nw52MUJPuLGa8ormNkvq4T2m4qhFrg",
  "key37": "3q38vBNxAC6jejRxwvfQzUcJMnh2ghUU2tN8AWXtKx6ofYMsuSkEvJenb9rbaEk16vouKKD3gDFd1NUFQNYchptZ",
  "key38": "2sgKa3xkrLfAwF15Lg52TWrNL3D1e8o7GT3DyVfCRpd9fVnRuhHupBcFhs8oiqDkHv3CUQmrxVdq7ZLEfXYDuWa2",
  "key39": "4tFDo9oFzVP65CLwacQSGcShr7p5Y17doLtttihf99G7Ez97Ah4EcYYJYTdaCXdQHTnSgcgE9sbK2piQWSABmRuu",
  "key40": "mc2a952M1DXGAoPXJLAf124t69oSHN4eXDcqojpqHSmJ9AHheuPHvhMeYMPX4TNZ6gCtczrAbyuPc4rSbt5VfUR",
  "key41": "4FcM7Y71haHBPxajxTWz3u6w1BwyRNAUSyxkX6vqf52qDAXF1eJKX1sZaF6Hz8Gu6KyUkmLNF6GZBcyYnkMGySQ8",
  "key42": "5ZumToNCJGQCBQnHkTqwUevQamrcQq7BxXrA2qfDJTjx8ieJCaJnvtC74rPhuUyG3MtsyUy5EvHv6ymE1e4XxsmT",
  "key43": "57rhaMeRgBpm2Js4XfA4KSG9gf1CnkoWnJ8yqp6XZPZW49cnQD8t7PdxSGJuoVmLhDXkpqvaFc9RL4dUFyYohLw7"
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
