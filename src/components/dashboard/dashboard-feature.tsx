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
    "RLGNJxT19yqaw1ChFc5LexwQNNFwhxHCcdaQaAUyecLRf7mLqjAvJF4STDqASeTpwh8gfhLwQD7pEu48WvWP7jA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PuHVQN7NUPVqN7itokZvcMDEbx2oRkwD4p7ZGqW6LFsyHeco83WhEKR2nkn8ghczVp8gVN1jgy1AReeuXsf2cTu",
  "key1": "2jFC5sn6jFfRAWu6hDRQzQKAoXnxrwqDHNfKKtTZxpbzKfRGt169ovRQUyEHAS8v1rzpsMv4UifRh2UVA4pKWQuP",
  "key2": "3tJckx1VLDbYis8Q2Ab2QoZdHguUGLh73cmVyhXG4QsGFgN6hFx38N5gVYNBWJv5rghRuGEZdx1SrbfxELEfEVpM",
  "key3": "2fGwhT9SdVzn9L8rb14FqMJtFY8kwnD5NnPxuBhyCNRausj4si2GzZyeAySRajukjoCRoypCVKohTqxQUNkNYX1T",
  "key4": "4wErqL45U6Qkiwxcf37c29XTxRPA22AKeWzU1hY4oRJkdFY8iJZG9PsuQCuJ9bbkFV6jyJLfELqYmHsgPZLmzjsn",
  "key5": "QXXpx5ZWnScFq6gPUeaXFAyiHKjVox1j6uwyNshYpeah9Je2Dq3XQDrKVQR6i5ULmg6kvXtfyQKecSiyLbJujWJ",
  "key6": "oC1BVUWoG3bJQUNysvnGkdJc6u9QWxYWyKPkya2syxLBWdJegZGbFRjkQLYKV4pHxqdt4KrhinoGbf2S9gc1Nb7",
  "key7": "5FJ69ZWPnZHVqNVkPbPK42vU4RxYmkTdbT2MW71n8HgiM483X9ewDFjEt5bvyUMRyfCg3CWZtwZjZiNe9rAoMRSy",
  "key8": "2iMmFzFmiyo8mbg2gaQZMWj5s24Cedku4VyLryMipHxUatYgxTbqL7GKyfZqTjg2CnwyHGVjZDn8M1FwBK9knuzN",
  "key9": "4g4vTC4Vy8HT886Gv5tiKHXryvXAy227JDr7P95aaJQEbedf2pAV5ArSmhQiZy5buHdqbopjxHUtywoY6ueDZcTB",
  "key10": "4jS9eBVW1C6Zr9ogkNZymA5ydt38vwCgTaxQkWN1WEdMs73AGppL7KvsGPZXLyUaxtVCReXSky7RMdaiTnHYN5pw",
  "key11": "4txyJGCCczGXhhtQCvbTYYhahBvD8aA89oimxEwqSiZFPq6PvUirecLfBrxJkAKyB1zZRALynxeQ6QjFgxvAzHXn",
  "key12": "5M2DUfdrf1Viz9cYWpcCLGED2vv6JTavGNjEdSv4Ta2o4XwYrA3ye1h4RBG2k7L7E7thNPdDFKmvMNukwdWdmWh3",
  "key13": "5yG5NsyZiJcAu9k7eHKbiRzdhgf7XXUMqGUKka58PnQsDkrMETEnKyzavJ5kcMqSpyFv8b1sMg5LSHbFZend6Dnt",
  "key14": "3TFhA17y7Xbqe1ujZV3YzAURWRceUBtbEpYjX3u2mKA9uQXv8tVqoS4c9cFDwNyySWo4SbdnoGXv7nyAW9bqZYUN",
  "key15": "2QGwnmoXPRqoa5czY5gRdABajXge9NRUYzdPzKr89m6r8g5vrzGBGaCXEvD1M2Um5BLJvH9jeb2GDXvVUWfTuYbU",
  "key16": "5Ei2yXJLaeA4nATdXFBF3BB8g26tJyjKcYWM2ULjitSKf1JSyK2zd3UgxSDBjZzbKfSHBFVjMSJsHBxTg6arSyro",
  "key17": "43xZiyFPcfvy4XmadARLdfcNhjPzC3Cd1hjhMxrDmoDYVfbQeyJPe1RgbCp1gMGqMMNsaDHSiRQKPeDuAayWqmPC",
  "key18": "5w4w8c5efV9s9uS6PaJ6haMM3ejRXz9DFkc5gY33kJD7jdrHYEESHfMaLH1P3NW15fQ4Wg2qUJes34zzqyRF7pYs",
  "key19": "5t9HAKnaWwt4oyZgr7BjB7D47WNQg4oGHMewfj4u3bSwHZhyURW39WF3AXHkGrP5ja1ifuYFMVUjSK9capzTFgcL",
  "key20": "moFdPkrbkADVEuvRqe4wc3D84JZZ9SH3mgydfuYP8ykkGHfoApWCRL26Z2r3bFed5kJ2LHwKRsjWW6jgigKoxn2",
  "key21": "PKELD8ykKRiAgvGM61yVqtPBL8xGff8K1h9CWAieaedKoX7VVYKAWeF9JWUEU6nNwYpgGBhpRVaZ7PKfrZeQBmh",
  "key22": "3zMvULdzK1sSjJ9JdZnKo94cTm8v8QjoJHdFbiaBVFTUJwp5XfntrvRhWPEW9JPvk4HBWT7Fqj5gjfcQ2dgSi1k1",
  "key23": "3sRHL85ajqSnXrRQ5itJsTCBvopzcgpH83BM9isqycvWAtrU9hy7gN6FdvPBGLCKEgYSd1Zi2JtiDqaS5peoHDTH",
  "key24": "mW36fR9kFbApsYjvLMcK7sKN7hqwFcd87wYoTQzgP4hp3nzpypLzPVFam958WbKxVXP257LHVxNBhARqBUVEG9d",
  "key25": "2S7MAssPPa9vyHkd8iNqyZrpp8N55PW1iDVt4XbUPEC9RVWxuScNz8ozLk13Cb37aoxi55HHv2UtMvFNNbqgAK2n",
  "key26": "3AFXPPiWfuHMSEgbUb4Qp78PGEbVqvto32wbjB4xm1vLBMJmCPhDSE6RV9u9h3qKN83mkvAEb4upkr2NZco6Hq8A",
  "key27": "4deXzcWTbi4JWsZyxC1dUQeqzEryh5395wsFV3vz1GF16gSvPrxSY8kbQxu5K1gcD8pH9mV1hLM5ntxwrpHgRFJx",
  "key28": "24899HaXvTjLiNCeDPn8UMYUP7ziufMGVU3WBtTmrJpxoCLctGpzJ7MD3HYYeeEoXQhXVMNEhj9R6gMxbhZg2KDm",
  "key29": "wKjgh1cY7n17Q3qNSwbut2FVFAi7sP81yHPSnPFE49HdV5XKob4T4iRaysHa9N6boGMwMEXD711mBSvEesXn7vC",
  "key30": "3N28vacV3vukTBEdzLwHFhTR4YtXuCtDwka2DyPPinvKDRaZvPWGnFSW3Lwf6yQrn4fJRXz8P1V6QWHUPpF9bE4X",
  "key31": "2LTN7SEn2bGbs3PY2gUgPFKQT1Ju1VBRK9EqbgwcDzncc575sAw8M93wCtANTt1FQtPKQ4sXQAYoTqfm9QLqNYAg",
  "key32": "54MthyZLBMpRcRVWdDkALjaftuZcd2RqvBPcJRUfnum5T1FynEMtRgE88rVB4TkG5yFnWMDEHCUPAibTaeYyQAvA",
  "key33": "3dLMKKpN6JehgpFpHpHPd2SdEuwND99RRETXmFutj2vQL66WUwJadozXaaLhtGdDhGaJjLKwjnDWgidEiEDAyvX3",
  "key34": "3mmGFaFDvoAASw9g4fhDtdYaAiFYwe5B2YczrL1a1v18Q23vFHCZxRcQGoVyyzEwQZqsCbgsBQeTr3QApsPr2FhS",
  "key35": "3rJoc8fouW9WpRp37apHbYr1LFmbcsSb7VG3eMAaXakdQ4RBHacsmW6UrXHZLm1vpYf2sqCEkt5HbeBHMU38KfiX",
  "key36": "sf8Lr89ytfVsQSzhHT7fsFAKULkGgoFn5JCgmedFxUwg3YqgBDJfU6Q93NeKGNxWTZcRCn2VKGqWCSei8SM8fqQ",
  "key37": "aUwk1wywi1m2BpKSoNRxjFaSEboUyLUQtDNPwsx6Sa3Hst9mdwm8XzBZcg37QxTzDnJ1iNLuKSKkB41xwFoXzCa",
  "key38": "3GNinEQC1JjS3k8E7wVM73ZwwoD1m2784SUQprRNoU3vTs39WAnT365czWshBt1maDPuffDQywpMYM4iPK6jxcZC",
  "key39": "4vaF56DjXSSvmKxKEf6JxARkpKKnVQyLMXJrj8PiKoHysZJSSFxt3QBVgL4dmGb87FKHjFmD7yxeueqF16NdgGZK",
  "key40": "5ncbyzFF8ivX3efGPn8ctQ3rWhou3MeFbviqVDsYVEtWDfNJxhU8njtLJiwSQ4RCiNHAKhZ964DajhAiQmMPBFjk",
  "key41": "5oArVKDiuhxrBjjjaiQxByRTmu4t3vKWTnNwgVVSdCYvMugq7kQ8axwexnwgZLfBRsv8Hk62yCdzkAEpgz6xm9ZV",
  "key42": "53nuSEgohNYM4TCVudhRieipUkGjo64xMKF4MFjAFKeUWYgSGXbgjQvVgpJAqCxgHf2QMzkFvgf42uDBPe45BbzA",
  "key43": "4wkEF3LPRqQcFwNdRxrXYHu8BsExXkEZYvzN5AbBXMzVaN9BfUsnx3ctX9tZFe6Ma3fDSbWaGA9mKm6PTUmeWhUt",
  "key44": "k3fzBCPVD35whNciaDvnQ9va46eHKndj5S82zJyNpVBZePs3jb3in8fNbYdirX2ZdvgEdKyCiWCZsN339my27TW",
  "key45": "5vyMZyF4zC2joQBW8Rvqv81qD9YEP7ixHmbQ7NdBbvEoKfqAUpKUvSJp2CK39Fg2msGZjUSVU2Diz1UAiJnF98bN"
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
