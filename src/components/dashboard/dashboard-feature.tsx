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
    "4HMUSpnUoSYKtwzwWoYZFp2DuhKdmJrWXJ9QTRhC5PFSRGRtbJcKrbUtgnYnnA8cEdwUrspsGCgTd6asfTejiPxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJNBzs2by4cFgY31S73UMqvnDkUSYphnTDgBSWgCma1LvMqhCBhJf1DB4JWYQxHEWfi2t2yWzqQZmE8L1rn93pY",
  "key1": "4CezTdcpA96Mn3ZjE1KvRwuKiMM11s59mRXAVE3nxXGDW6t6LkyGViXVdDDJPtyJdswbTd2msKzvfXcxMagq61zC",
  "key2": "4sNAUQL4Mp4ywsCPEGbLhiDQGGFzkz9hTqhTFgYK49b8Tattw3BsJS8BXVuJ9LQtjhdTUZwKGg7b3j2zyoy9TfZ1",
  "key3": "3MxM4zZdM938HKX6Z8gr3T7FwDji1kQqRjTxkabnhT68kCSPv6RNgzGbLx9wGmhhyq9YyAowKTBweRexaHE98d2r",
  "key4": "32LZ9KmuFwFCkYSPHPsAoCaeqbyvH4oQaVM7idZLipJweCCqeRM4b7RhTzpsQKrZG665WzVfnCueCLbXGAJzXZcG",
  "key5": "43MqN61t8LSSve5GDL4BcuSDGkU4zY1asPT2cxokrNFKECBQ9PJhvL1pHk8FjMja67iE16jBDpScW5NC8iRdp2rE",
  "key6": "KD85SRoxgpkXF1GdVboXFfuNGG5vVmZrfnYDdySuFMcTtSXMmGD7ba74Atv6zBqYqqwjH4KYA3SLrCgLPu5FVcR",
  "key7": "55PcQbdWspjuWXXT6gLKjGxLQB6jKnyx94zKZ6g2Qfvs3iQ39K1agP18NPeKv5gAjcRtJSTgjBrfRnDPHwB8DKfZ",
  "key8": "4vMgtZFW9KAFhYV4tV8VyvVDY1iC3ZEvCKxDVsw8A129H98c6awSAXWoknHi7EbdnF9QKutUgwRBxVrWaBqVUDHB",
  "key9": "JWNz34yv6bCvgij7a2F58XD4wJ6FSkGMvqGHLmD9EVh6BpHWF5uuW7nqBccDhFa4FLjuedVvPUrLBN2YeZKdTc5",
  "key10": "3rNgcQEN3Rm9P63wggY6aprisRQMctXnrEC4CkzXfgHyGxhUVcwMj6yv1TABYm1Yds3fgy7cWwXzEEg9Wgy3aU73",
  "key11": "5gH6ZMWrSKv3D9izHhEzEh1QGr8n8foh4DZiWZT4AwWvNKb2a1Qzo9awaNmUpsqHpmiXJ71zLJnGM8R9PLX98etf",
  "key12": "2bzErggAkUMEqG28Z4Mo7qVLPLiwzUMQkNHukhKaqWepa18aAdxvZPBTubFSFDh7SbBo4wMwmn5L3U4nUJ5u6scy",
  "key13": "3w9xWTaiVhp6P8rcXHWDTjU91amKyQiMmsJj7o4Zsx7XR6e9fWycytjsNovszStiqmCvmuh1AJqsAp3Gc7BbE8PS",
  "key14": "5WNXDWZdVR9nSqcBPyGvJfh9raz7H58H2qtsoFPMhRqcfbXq7GNhet4T3ZawMqkPpy4WK3vu4oo3vb8eCocgUm42",
  "key15": "5zeeqfnZz7RwufaAQ8rUgibgzpGNWok1MKNuH3Vkv8bqx6eub6DXVuVeBvUoihHPbAU7dj8tSqpzpvz7yqihC1w5",
  "key16": "5NgXGmWNPzZkJBTn9UMcCTYFhxevphgGcadS2VHVQGrV4LFwnAnnvrSwNr3z7a2nMbxZnbeTtGeJjWZRqqfbJjU1",
  "key17": "QkGY1yc7j9NcJmWnhZ5tfDGAwHEgLCJCgqD8G7VuMZmpyYYXqeyn6YGYvddLh7MPS1yfR1ACZsDdCFz6CEVq2je",
  "key18": "2Sn8BVva9HbhucozVfviwhLuA67gorB2baGvZSuEVMiegJVTenU5jTym87EUvDoVex12jsoyCuQPkNmvYHdmEPG5",
  "key19": "HmSstVrZKEz3VUpvCcQXBFauvCij4Awwf3pTCEsPwkH8f24XmJdJDHM3hzrW2JERBPhnZr5TmxtjbkXEZtNUfwA",
  "key20": "7JGLmyz7UdkaePBfaQFJXn924pKcFxVhY8csAxcFqHHHTXsG1yPjMN15vSuRzt52CTxVWTK2DE3n9XpVhPAX5Nm",
  "key21": "36g7PGLpVaHmKYBBnK8fA9eDCAVzUasYZCwDwgBNoZtec1CCZeQ1cPS7sXtNBwv6ngH2CNW8puNaaFfqnDDmUA37",
  "key22": "3TmumKmy1JJEBskKJGUaP465jADDiyAAAVLu45QM6Jv9V8JUv6QCSH3EfiwK4yBcz32CBDDyAjgqDGsvUhwFVgYe",
  "key23": "Px6kqrJGHcLKiaGYYufE7gvr2ZsDooybwzc5KZePMUcZjoZb9VEPuyjdABXYt8S5DsfnE7YXktB6koVq8DKy7gL",
  "key24": "3KxAqxwc5dqpgpCmNZmWNzb7PESbW8LubspQW84iM9eKQp3uTLVXULPS8gSyR16PvR7a3ka5sCDqgsstJYEgCBnL",
  "key25": "2Z6BaGMFgNhPTwGNKacbB8o5h3scq1uB1jRErMFCzUzUvTjx2G59m66sQfP7oPh1TojCrvxtVbuZGBd3P8DMtcQ",
  "key26": "3otYCRRLaaDcUCD8QRW8DzkGM8wvNJtTbEfNw9VUecsT2UXxmpNoDoZhRahrYNrpLScyj1dUzZAq6ye5T3Gd5AiY",
  "key27": "4kBzRx6p3xjPRX4D546Nkfx8qPwgsHVkyEx6gWUZyc5k3tB3Ri6TVNJuzGnTTzovw6Nw8eGYpSu1hQEjN2U8Wr3S",
  "key28": "3qYnAsyrQ5Jf3xsshNq8sgBy9EdvQDEc2ERoeD9Kc1BBDcg8BEJEy44uL5bWBXHhap2SkpiRLLFpN7RqzQ9SCNJN",
  "key29": "4BDrvUkNVTJaaehr5EPKHvdQJgaH2pPkUQSzvD9pE2K9CxciuLnAZAx4yCKcUZ6W3s1cpwD25yVewfzdpbQJsoB7",
  "key30": "3Zxv9sfjds9zwD5TJLuFnBk9GC3nktnuC9SbdRQUsJuseFB1edP2GSFeKTiuL3xteqwTo6Q6dcjMNrj4NpSkEH2c",
  "key31": "3oxzGwLXhx5CkVxC5NLMmaxys5jvoESBwUFtJyqWSFnPuegUXeCAvY2JZb9ZrqVeWYpTjhwwF6EgH7Q7btmBu8B4",
  "key32": "YzMwoJw6nW5dsgC3oNd9qsWFHiDG6iRZ2xj74xDTAA43aCPkwHxBt9nVAQmz8SzbzzMEZreB7GSCBPCHSrL5zZy",
  "key33": "c4UA3ts6VThhEnepgLijfeSpLAphPrEnzaF9n42mLhmtcZwFuEQ9XwpdJbHXVjWqYzn1e9Bd4eWDfrmqzRQFy71",
  "key34": "V4LzWFsyPfz7nVciE2pdRsDjSbux9TnXZ4WWDZqnQbqkBgaN1RCk3e5GYjPNJrwh5Fv23TDF6xhMhssH3igeUJ3",
  "key35": "4ox69Hr57DQtxkdDAVMYHJ3f1AjyFqvD2rNW6Y54zTXvLqM3hr8SuwouwvgxcqGbN2kPvE2UsSHvywSwogFpoXHH",
  "key36": "4eWMrdK6kv2NEKn4x2rTs1YLPaCVtxoVEcetA4EYCD5EXJfWFMmR1f4LSVaUPCUeXweSK4YDd3hNuCpg9YgJU5YU",
  "key37": "2Wu3Dcy8go51gxkgbKEmB3FmZ39A9ChWJzuK6CwHAhoY4kk7zo2ZdqXPuM2Qv1QmGvM4mDUuu5JqzCuswcCF9qfS",
  "key38": "2dsDFDpihVx4GBqH8g6fVGpchWoSS9fR6CZo29wLjqnEvw5kN3ZjuJUCqfhEGT9uFa1hSwFHeoyP5vBVgCebKi1T",
  "key39": "45mj9umAPVcbQjzzdwCSabEN6dve8meDk4gWxUnbsNbJ2jtSATuZkCdY9e4ra3RoquTKzFRwrCTykXggYHBdCA95",
  "key40": "2ZjQ1jiYhEokDABwbGjYxopcMYt6sTfwZ1mX9mC4XpeEwa9LU2a8yaXRJ7d8gaeVhkVk9rpqu7EEK2xmUCpeAhLj",
  "key41": "2sdx9DSUF6suHJp1r9k8BZWMLvyYKXiQCmGC519kR5CHpLAnpcsaNTVEoeYNWMQ7vukLVcJ2kULUgMCNorLND8NM",
  "key42": "4DNgaM5R237yixzSzzKmsRSbTy8pAQQ4WDtvUSn6TRSECmmsmWFLPz4FGGVLECBeFz5T7XJjD7D7EkU7WuRLzHzL",
  "key43": "23bAncsXMagC3yEdysMM2P8PNHD1iWXZchz3ME2k34d7Lzb91cxf35frTpFpGzWMAbwBWEysnbbHTiy1UQCJ5Ztk"
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
