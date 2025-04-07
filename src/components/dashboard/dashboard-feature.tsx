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
    "2s7Cuc9WNPkaVX46FbcBMi2LUK7Nnbt6ix7qn9wh7QE8E43kbAZceUZt8aX74WYFWt7R6PWfMEDPerPE7TXZFdqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vTGAXpsKp7rwrbVFM96jy35yccWuofM7aUp4ARvhyP51C179L7pkcBpdwpDKPqz3tJrW5JvYW41qNGT6Y1Y9h3U",
  "key1": "3iqFsZsr8PdPdM18df1bS3sEzhHp5Yh6e7f4SXkuwtUw5mH1Gq5NbUFtxfM6d5F7PFTJD42f84Ytq43KqAvfjfqu",
  "key2": "4nPdhAun8hQxmCfEuhA6oucUYrTVhV6ydNoYgc1ZHFnsCYMVBV4zSWPa7VyAAT14WjphSaSmfURhrxprAYrox3nG",
  "key3": "4KKYuLZJc2FCsSuVNgyDwzjgw81Rdy6PU3rThPgQwnkUSLDqFadQ7w6LjHpnkGGHGriK6yabKp89aC15PYkX9MwM",
  "key4": "4BzjMkrmU8NBQomnCrHWNnPgkQerXXhbwFwXAaaURSNFfNH1NkQcyyCHGhbCG8kFh5tnmTZgSmuMZjsRzuiC5ks",
  "key5": "xvFXAMf3kWu1SMBCVPHF1Hxo2FaQo1tDNzDaefhYzw11Vm91KXwnwvZit5npLWthC3QLk8gLGzjjv33oThvvx2a",
  "key6": "36kiyxWNXEGciuYv2rXCXkadxnDocE4WAMqtCW64UQk6ZoTf8fbNw9VuRkZWKbVP6xtnDkw2oQZByEWBLukVfocx",
  "key7": "25vBSxP98pkWVa62DCRj8MzmziBu5wVZJJyyr6T9ZNUSw6X7vTTybuiCtNWFvT82XS9JseWMjpgooCDHHwpBgTea",
  "key8": "4bUraxK7JEqSnhse6W8uSVbEK5BrSzNuRmEYhxdLCj9Nf7Yc4gWrXJh1f7HWDDS5hTjQHwHzaVUsBdgG2WE4tDvt",
  "key9": "5TTQDY5xYXt4c9Rfzhp8NeFXGLHGDg3uapc43adbUrypFMhedWzWaoVWL8r75NmZs8ruzu5CK2ppDsJuSoBJtGLs",
  "key10": "3PvMPZeRW5i1ttTw7GbyMSZ7J88D8TNLy1wGEdPmd7zAKa2WBPGNPqz8qAsqG8afNv7MB7k6Hz986YXHcGqAu3h9",
  "key11": "PHTLPQJVSPT6ucw6BW8MAzLSvc3pwnxgjZaStTEZxzqVuXRfEYEgputxAy8JbNeTQwDRMhTrvxMTEdpnG1finLy",
  "key12": "jmGsvmmNm7wzY3wjajBHQy9Ks8q3CURi9KNdjbZsUHewQMuiDTRK8WapP6wgFGxUNSbKWvBWQh1gG2Dw2hf6f3W",
  "key13": "4jtjhBDSXu5FwJDwKxVbbs2USapEvPgnQ8mCQ9Hq3TecbkXnuf9Fc73oCHsQfs2RViyT5E1ahin38BuXCmbDi4rf",
  "key14": "23b3z4MoSBmt34i5BRXeVxXBiWiAoZ4d3niT5mavhiJ8BKsBcYdf9noo21P5eA2iaEt9PKswcBKmNrYdkkh1DTJW",
  "key15": "4LgA3fp44cpJ2HZ37UFeGSngYTi8RxkFLedPc9XPZkn2xDXJUMdyHVDkzDyTj8Z38y3ZT8RahiS7PxarLDcLg92F",
  "key16": "421roj9sffwotxSspAVH333W14HoRSiSngC5wXxRyuWc1gAY84fudzMqB1PHeM6bQ5jETsYr6YRzBfndbXJHjpmx",
  "key17": "29S8x4TiTVh9fPjAVCd4aGpmU6CYmgv1rnKmAjzEc4JApdikGzxFkpHBSVsAhZZZ1armdcHEKbxB47fuyxyTRsdg",
  "key18": "2tkSuXio6UPsf249PqDH5tTHqLuWQ8fp98dJQvLsZ7D29tDt5bzK3sA8x1RRuBqRoFCRhcS9R1JMdrDj8adA7Zso",
  "key19": "tPDMoq4U33YJNqPkRSmd9VZVkFBGCCzc4Jxw7ntfxYHCoMqYzVn6e25Rv8FdFv6WLsVVDTvuoaUeJsytkr7ZKQV",
  "key20": "23kNbqqfGAeHNJpB1sxt3dX5wsm2An3dBXorPdBwNgu6Bd4KXyxvoEPtZkQGF22bE9T7FRk3AZQs8aU5mz7nZSq9",
  "key21": "4gMkzUuTjuohn6PDauf3xuTkeaJ9EkrPQWAimY6185mkDKJc2ryUAFHagBae7dy9ZViCaLx2Hfnmmt8xdYBezpaq",
  "key22": "54Cg7T4mfTX7HudXhnL9R5GoyhS9zzqyFTkjgsRuTwe4kZCPbsmafjCNcHoNCeXs9KCapBjbXVzwXBnQnjMSmNWZ",
  "key23": "3ZCBf9PiBu4BKbTWfyqm3gYzMJnm2EcHGFrS23ueGwUQ5nyneDNrfYfC5Ju7QvJ54R6D9RVFX3cx8ncNeuE9cJZ",
  "key24": "4Sphth3JHLeq4xpLVyTzAKdLUey8KBVh9SPx3vvh4MXvnddyDYPJDWuvBvEprSKsP6fS75LmZdfNDcXK3zNNQE7p",
  "key25": "5fwDDkzTYiazWBwxv3fLCGrMHn7v1XoxUabD2bm1zZPqUckTKEsfVmvuPatN1qtbXJHCb5hBxkZonmeP4dq1aqgm",
  "key26": "6797M1ELa7ex61gQSMmRqbhvUwuQn1vQVkfsPZXAErSofFTQnxW3co74hyD8UUjiAtvJw1BggyecrEgiWNdWhkbw",
  "key27": "2rxUQ81YqnbRG5UyKEa4qkotb72fVryN4Ksib5tACu6B99ac6TuG97P8ZgZes1o4HV6sXxMrQN4eTa7zMiwqGWRr",
  "key28": "3Kmny2BbGBhKsfpr73ZxbqmWHxikyoQc4rJVG3K5kbbWzQrWxfw7dLp5XX5VxusXpLDpr46CaGg2F81qms5TdB5P",
  "key29": "2KpvoJfGrJJPAkZRfbLLxrHsT2psPv1dfgPg4EmEoMyYPbjho72CWVKPgFGCH8RdGF3wdsSircKdE3UMJK8RtmDJ",
  "key30": "29FLT4dq6RcFFwsWNrGac8tmC2uaWSJYhTmAup9AR2Ltovbt9QAyWGegvWVh1wKoFzWRcmybPSRHYbu4xsr5yx7j",
  "key31": "39fEMYzvZoqQdWHvWn9KnB7yCRi4Rc6KxwFT1aurodCf3H4qbJc17WmxhDR9TuLfqtN5h7M8Z9kA9mc9gcvgfDcj",
  "key32": "4ntEhDQG4yZ51BTEkAuTFX2zTaVsWYKmKMKGi8WiUTEa9HG3QDe6y36TDQGALQNcxsQ7Bmb9L5fDqZJdcKWEtGta",
  "key33": "5KtAYmSz2arwc2e6h7dzYVpUyTHL72jZ4STV8SfXc7AWyRDBhjGk9XsgwD5r3ovvxp2M4g66rExr4TxL5zBEkgd9",
  "key34": "4kM8Y913d1yMoy4TUR5egVXBvMAvxVmYfFDHPcbciNDQ81EPJGeZdUnAZRGWzgmJhJ5vzf136jqjzrJbR9ufbPNz",
  "key35": "3FpERafbhtjp3H6wsHTLnBdFthUYFBPLAmz1CD7fCHgyaNCdaF8LTLNzKnHszFH8Vm5ARvF6reXHuofK7PxJ8ttJ",
  "key36": "4RAbSQz2KbZzQewEJkhx7LnxCnWN3sithqauk7yqmAut41gHsZNAR2pUJMvFPP6tbzaQBF4P1wLvCk8EgcvQ4qhW",
  "key37": "23wjo8Rh1NPQm2qmr9pzpcsUW7MeBjGUcwyP8BWg2kSAFF1oLwqoCu4ffEVWxwxyT8XvBJju8xnVqLv4NwhNGQpp",
  "key38": "4VPYgdnMP7Ccnf7XBYwPgEmYTMPdHXFKLN5ZgmbCXX67ymm9ZkgSUqqQbGNEwmjek8kJBWFod1jxYm5LoLs8tfaA",
  "key39": "gjpPPCt1ShmqJXoYpjpsPtGoAPnHjVVDogjLzWSscfJ25wjJNR6sRgtJxhTuHLgpveHmUNMnQsL7ujShUYL2raZ",
  "key40": "58ECFR6SVU9NtJ1HhgfmAdGAKfcExnvmV5UAtZTGmKA5aGYNhfYMykKT86xgFh4jZvspdmqB9AkJiRe32iy58P5p",
  "key41": "2HekqrJexpybvZp3eiSKwpsrsTTvZ1V1THABf8T1YXKcAVukFUQPQyjvKQqMx7r1dWQj9JQgHqssGoUJprkP1Hrd",
  "key42": "5wHYyvVaj3VX5tvcdHF6XAfuse58Kk9Hs7b4tf2DMd4G7TUmEDyuQFHzpQVd8oPVGyvJbu8uWv3wgvKAydhBF1HL",
  "key43": "C1FKzk2GNqHPyjjErETQbUcfk3XwndCwgkKxySGHsEnpn4RHTmQ42ZBso31ug6RxbvRzmc2X1kszr632zRvqaj6",
  "key44": "2NxrAbQoXdCu83oNvQvrEpmvPFsaxM9CEbqi9mAGRyaMPHb7Hp6WrjZeaP71Hqj8xQ2ReuxY9sNXLFFCGpctHvZb",
  "key45": "67hZDp9i4XcMULuaHq7YENZB5aA1SYZZMdyL3ExWd969whV2irY3B6jCF3W9DPuyCzNwzbt7Sdqj5SSYVrvAG6vh",
  "key46": "3eXegWqBQeURPzUroo7Y8ZZ6SNBNK8qiib5bFvGc3UzpBYrY4Ft4VnPVjEnP6BxKqhDfeKmxsvwxfUh5zCEEuUTe",
  "key47": "WstpS85PihWAM9pkYBEC9S2W7q6d5vUXY5Ay9h6dv8ctzNUAepMV4DtwKjpHxqKxwu9q7P8tMKE5FEnzvK6fWVD",
  "key48": "51S2qFBw5fASZiUu2Wot4N4TzZYg3ve9LS21r2dUUErmeqvFnFciujEgNmzWNd4dtbXAixHo5SLpLLi9rcYHjQGv",
  "key49": "2jwbj4aSQwMvUNV3oKmRzLeNMkmUssdbHLBhwGuZvRawBUUqfvY3BzT4vjHoAJkTP24sY2nE2Vzjj7ijdXmAmeVw"
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
