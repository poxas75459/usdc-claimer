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
    "2HV3d5KBWHymFceRZM6vPCnmxxaGnTqR5ygj3uNLYFBDQiFYNHmrxy2gJtwhf3nRjrsRRuWh9f1xyGgfZ1LrYB8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YKivitTvU4YW2waN1fyGgYYHnndkPwGwHfGtzzPsHEJcfh3qwa81DrQuz2JsbHxx2EPArxet7ibEAnT1PTciTLg",
  "key1": "3BNnv63HvQHotucVnkRDZ3Coxorf2nLjed3VCKmKmbEewGiiyQ81d9Bsrn9FkCEkR6stSanYQUrWLU43KbSSzVcC",
  "key2": "2DjpgUaxMLf8GQhMAVjqEEs32eaXt1ceaJ8YqKNYT1NvzTywpG7rPTXBe6mtvTu8DQBxWAkZuAD2m2iK2E9kdrb3",
  "key3": "JS3h9B1AYKmGo2uRJgCdz8REACQ91uYvq16FvFKZ3MtMDo3Rrit8SyUH7sUD9wJkwMrUNWQDGQUZFMQZGSV9VwA",
  "key4": "eMFsSxbJN4DJ6RsNB25jySXWWtsVb7UGj3K6cBRWTjvJWsBhsRj79vBHnsZqtfYetYeMonAEoPcD37dE2GFPLST",
  "key5": "4MkXxzTQEad96mHuHqQh86zsd7kxSm7RJmogfTcByNBKGfEaScPm8x2Z8dsskXqHHpagvQ2i2GhW355pYsYqEu3",
  "key6": "5Heht51GxHG6Wh3PrN2qs4dRsspkH8Pkaxfd5ojQvZWFbHxvAWSgMpDtMfQPRSyKnHs64x6TQyUjmk79yo5MkffH",
  "key7": "5UzJfif4LmeYW3SEmWoivLjidiwsvvs1eDsXE86nMG5KPzmZCSRxkKMrh3xLtDmLEz4pMKiTjYKeTrBt8uCWoDjz",
  "key8": "42BpD9NoXomAHcrWU35GB2XfxaxHBJTJWhrWsY5Muo446aHEkMbtvAJh7J2UrvvCBvn2rvmkTwKxJJUf9SBbZU7Q",
  "key9": "3tupuQ9TSyPB9TdLuEJrN1HaoqGQMh2AFVBVnJiJtk4nrGpTVxFoVm5tZzvqWwmhyFVoQnZ7tmB2TwrxGaZnrQ5o",
  "key10": "DbkDVe6SLGb9NEtk4BVCA4sz6xMbZtDn6hhkAW8MS2ppR8BhVLzj5cnvRpbCp1Qmsof8NSPAYG6asQhTHfWZtHX",
  "key11": "2EzgxPkyKhuts2X8ai4wrEpZhtwLLtXnE1nBsujoh3cJSeCrwv92ns8BsQi42x123bLCYbVEu7eoC7q7oQitTvcG",
  "key12": "3WtqdT6WpjGTU5U8cAqPd8mCHbG7bkjQENUrqTSzkNiVA6RkJnUd6igmdkjScwagwieaNNEYb4FNuwRTUeuaKCu4",
  "key13": "5r13NNW5GYzvfz45v2PC5BAtSSh46cpM3KZMSbcETPfbEBf7Go837SLhfxgW3KNptq1RsnfMZ5xQiUCuEnKLM5ET",
  "key14": "4HYVQL2rwhJZweY3gcwYiWzxfUrtznFSQ5kjFMCNB38V2KE6HffBFKASonqEVQBTk9ZShJ37XWsH676dMjg2y6cw",
  "key15": "5J6JpCTciHkbSCumQNHvVCfzjZhXoj3DvPaf4CDg8WnBtioUSGxLw8LTLZkxCuus2XfpePPWMk8SxbAN9aZ25RLz",
  "key16": "33GfA35TY6tbYk31JGErCgtL7wtBGhtgHu98m64mFBgBn3K36URdyotk2h99PnNFyvUgsDjwdyy7nG4nvQb4YSsu",
  "key17": "28PzpfN8cq8Zp71rMuJySn3GwEmSExKXTkMeyo5MUDRiBzv4wWVg4o1TsZUgEGTHzUNiU1CZn2ozYMV2CzVZJoAw",
  "key18": "3m6cXzuPVwo6fwsefTHKHmWveR25YNeQBJit7VF5DyFYCz5PUNW9BSy3wqnDJ28UV1vxbzfefcYreuCeyJ284VA2",
  "key19": "5eKtZedeanYQR6rX3mDZWrKvkEPW5j6SocZykzTQwS9SwZEq4FLaTXFwFMBsKthZv9361hPTRdHTB2YMj4xrGcih",
  "key20": "4ycZNSjE7aMofMZgYSuRHCPk2XQZGqBUahVgtPKvBPAq4h9hdyyP95JSPebYuS665guo8cXCJ2LMbB8CMvwNe8pm",
  "key21": "3993WQ8UR6VFQi2o3xwp53nu41UhobxTLz9coNkcTA9h4aQ5Rgz7VLRKyzFvzpff1QCEKRQCXq69v3erQef9ddBU",
  "key22": "5SqStV3SKM9V6sSDqaGjkFx7d4tdTdf3Qi198yV1LMZ7DVXvxt3bYq6ABHubB8rw5Q6t7ANs5R4iQq6T8ViQGguR",
  "key23": "21Qe8fLCbs4rc71P8zEL6JtUvrQpTuWSV41hMwMGcTYeE2rieQPa4K2X96yV6JtnafgxUtHwjQPz6C5J8sKmNv4Y",
  "key24": "2XNJRNadEhWFbGT1u4xTwuz2mcTXrxJiLvTzMCZo9cj9H9sXofyUUqErHtzn2d9SNzJw9KRXyVFQVkanwA1qXLQV",
  "key25": "5qFY6p4uwXiTsguGCUbAwjNjJ5T2hxZLErj45tPKAT8NoJUpUSLEQB3WDxwZk7fQqH17jyyQgoqGJTryNVg6AcGZ",
  "key26": "27Lvg8MPLtdY9hYGeZmZbwnXFnE5MBC3NTuHVV7nr6Tnze5RRUovDE3V2b1XS4EgHSMMTkLkrfWK9W1GXEoAZzbM",
  "key27": "5arkQdBQUbHFCXty3hzvLQQAp2MrzoZNoXt4rScYc37GDQY51gR1NUQM3mGE8YKztodjLYCxpf2Wx6wV2YrRAXgS",
  "key28": "2r3ADguror4ugEFjbiTcfszvsobCsT8Tp5meEtN3PEsUoU6fS597KeRKVZys7wCez3UJe4RAzKNwGHm3wVqTVDzq",
  "key29": "45ZYkrUw8DDKdouJWXY1HJHvA4K8XoZdYPFBG9Wv3Y6oWQtmH5DNtQtoQKD3azLNmbDXu3u3JA3QC5qchTtCt7BW",
  "key30": "VCXgZk1RAxu9vXRuhVHJJBsr5m5kmSqgwtEetQAyFrBn2WeNdaF4pnMEcbXy2k5h3uVMLH3pysWHUNm5cvnDzTt",
  "key31": "3XhK8M9eTBBoneaMogLAtu19yW46rNn4aqT26YihHtn3vEKBR6povB4dVpbE9iXoMx1rGYaXyq9ranh8E7UUJz2H",
  "key32": "4ErQt8tXdiXx2HTm4AwK7oPw7g9p8fakrB42UDGbgxtwzjmX3hKZ8BEvpmothRDXYiTFu5cEMia6kmko4uieyT9D",
  "key33": "2Xf7BeZkJtfQgKtzewVdozfbLvtiFBkip3aN74hs2LsuTdEAXWQR4opn4z2wbCMAv3g1eJk6cS1hurs9AoEfGvrc",
  "key34": "3zqcu7nRkFAnkVAfzv8mrLptkGW26MrWsvuU887mcny9poEaBJHEX7Bp39dzs2oCU7gUVtHFyFwRAsFrKa1Q9oQw",
  "key35": "rozFtPBBYjKpNWC2iz5hwkQrEt1XJtjsmcMQbMNraRw5R3pJRhsofrvtH1avaZDrJypfF6NsNWDAXZFG5S6Seck",
  "key36": "c3aotzt2Mn5PQ7svFagKZnKPzFGAvMTSZ4de4aBZEJZAGRomECC12atLsvVqbSPJzAWS8H5MfoAh3chxs3stEJs",
  "key37": "49X48uMKMXpKsp4haieP2EiYGWmYMzeGBkuVdPtcdAwofvQ2RETNRLVE1rUaJKE7Z6jqQ8wugz6VUMNCm3Y7WDvD",
  "key38": "4rk1YruHxrYiUnxpnCK5twWdvzRGgDYpYWZgJFgFJdeaJVFrr4tryMfdgRcBBs8x2S24RRXXAjpiFUK5BFydBunS",
  "key39": "4jegWEUS9xnGMkfBWGrk4xt3dDDf2JvHUU3aFgQyw14t6V27TZFQbEj8qu9QpgfbAQfn1ioVMJasW3T1J1s4GESC",
  "key40": "2Mh7bBHcheWf5kgVaSvNkLxKuEfLSeZGGfPP3kDTpEGhMZrFduW3UCFuwwoZcZ1SxEzTyfaa1fU3Q9vAuNTUDZxB",
  "key41": "QtWpfJf9uf6Fxx77snZ7uKwxVRHCUi3EwLz12LzhULarf6CPZMUjGGhaxG9bBiN5K365EWNR4XbUrk1umCbnB2w",
  "key42": "64cWXTQ63ov4xyvBqsrBZ7Qh61P56ZBYk5JMXaiqJ4twt7MTDdQBbR4fSAfVXtd1UdigCeb8dnzs1qV1R1SGXQzy",
  "key43": "cnRZ7dAmEKfVRoVQdTMneRdzfF8ge5hemKTSenbvEw7p7FZYN5VctLNhYUNon8mEBN4nkkbv1uNzpCQ3wdiBECy"
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
