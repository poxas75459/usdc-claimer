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
    "59eVYNYdbMM1rBsoWuwCHNbzGA9dYHaV1fNKsFRw6kBrtAmHLy5PumAnQZSub4F6qyuAVTVHCc5Dpact3BJzBkR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VGkk3vSVYaBmJ18NES4uYt3R2EpZfdgx2VAmefsswzyUwDqyZk2PmRWnsRpGQVGfyeUh1MG9d1XFRQSk2VedUb9",
  "key1": "2Xt87zBSGmAHn7nyWfPEkFnvb35FwCAWkm46QNtGdFumhCxDELYUP4zC26diuUPrQDB9QnV8qEZzz1gWjvxboUmb",
  "key2": "58NkK9HBvf6CaZeXrc6Vb93LzXy9tRxBcvYNmqS9Pg2aE2cEnNARySCZ4mdHgHRPBZpNFBcFU2dsLhMUmMPrmApH",
  "key3": "2iPjGeW1nsZZvhgmLKb4LqxgRB2rG5mJBH9NnZDFuNYFkpvVf4FRoA6zsSKvcBXvaHQHZR74n58bz7GJFE6svG5A",
  "key4": "29J8dRHaLMdf1oTQxhgMy3sfLmEnBd7GKpUjcA2nDNrsvKwn2eHn22dxG5gVNmDsqe3uw1NkQb6J2VdBoCTBasjB",
  "key5": "2Gne7xNAcfNP3ze2BWh5Rq6FXJSaskusYKmRCC1thqSbCZXbB8ePowTvUJ9xjYc5Ua3hCmDgUnpFzGUWbByD4ZuK",
  "key6": "4KojprDxoampMuEPAwSaikQfmJZqUZc8C9LwosLC5fLCaQ4dqCK8rYvNngda1JzKYpvyDCq72ifQo23KwdCooBH8",
  "key7": "34XKFK8T98FkAzNMuiQ41pFmnw6mCKPitPmcjXmRnWUZHcPL6dHHKYJ1TDKz5N4ds9q4AnSCQH1Q3pXANWMA9ixU",
  "key8": "R3maQtdvMneVxgnRNsgMQa6xonNKzCuRZKQHyT5NF6hfeeN6wKubzLVQaewhpSLfY2XfFYZmGJNn6s1b7AFodgs",
  "key9": "5mH5dQzJe11XmhBMTaQNUDTMEEW4MYC8vAxzmL92nfSjfM5L9aCP6rijXoryWAFUuu6mrr9txEuSLKbxS2inbZgH",
  "key10": "2V4AJBr7XdeLCzBSsuS5zqsMJSsQKy93H6rckR3BLYgW5nzpqKsZu3ueXkzARZyZt958CxUh1ULfuG7pfC5SryQz",
  "key11": "5E67EYTo3Z3TJfy2Couf7z8AamnjjgC9tikg3tmXJ1tYSjcEP3CL6QC8YJ9nE36hgyNmnPKQFtEysUFUQQhKtiJC",
  "key12": "5uBCcErdPtTrwM6uRjC2sHfefcVRyFwtEFUceQV5AetJb2xYcSdvCY5dsbPCnWKjU66V3Rmq32vrT6nktyDcPQSY",
  "key13": "2z65GZXDrKNvrevRE4zG74f7cNeoDj1rzEEugYAFno1aJtSyFL1ChDWofM4NFRL2FShbE4wThbDeLGCpawXuK9rT",
  "key14": "32NBc7WuRf5PsAxXpJrfJGgd1aUWWyRvRhyDHdh2MJAq6mws27Cpy9xUQryQNik4wzFzRb47TtPpquYiitL5rSG8",
  "key15": "4seeJMr9z3LHt2mLK4VWsyXpb7RHo4ntu9Sc2DgG3o4X5rpDvi4oVaZuqpaoZgXPXNjhHcodk7MC2gmn4MCE6JQX",
  "key16": "38mREqRqqQjgfYxBzvaRtv77RCuNUir5kX9McyKPmFicCYaymN1Cn9KGk6GAjNpjMMEAHAQ6XH5DgYfQTfmKiEoe",
  "key17": "2tGDBep2rmHWHHiKAtgr3rm7QQKan6TcWFbV9Ajq1cdHfvrJDp5hDjz65hmgwB5cToshUcgogChCFtNKLmv1iJHQ",
  "key18": "7uuTfAe1bwM73ebbffvdYkrGe9dJNoLEdCEQwWtfS6HHYoAQX4YkZMgREjcVAp7ksmwRGoGTbJfXkWezDG8ViK6",
  "key19": "22RzobLJPFZbUe2y4Nqz8kPbaXpNvH65wK44QPHi33F1hr4vXffKTV8KLPdHWESj9YnmEUfgmzhJtVYt1aSaMPHB",
  "key20": "3WCcM8jKGi7A3K849xpv22huMvUCuHQgprU367iPbTC3U3weS9VUyiLWSshxRvRWoh4obBiDAdm9HhaEDd3veWiM",
  "key21": "4m5yWMvwb5aXyjFRk9mAQ2VwzjzoB6VKd9kUrsMcRc2WWfmwCtkPvskdN7wbc6fJTsD5cooaFCYMSCHYXWZmxpy9",
  "key22": "3dCAUSF2cHVEAfgyyDqZ4V8yp2iDiMdNbfrYFeYNuzY4hgx9V4zFpW5MmghYWKFZEu8TqeiV2PoM6RPqTLAwrvFp",
  "key23": "3Vm2ZVGipJHqNz5QdeDmMh3q5KvyNgUmA5Wq1DShBmN8AV3HNHYGNEGww7oR4n3vcNXJcuNh69JxohxaTD6ebB9G",
  "key24": "2xpCy2bpsX7sDVRRrHS87YK8TuZfbSKRCFry4EKRRBSNFg5W52oJzLbUY5gRCe5edVhVfJHSAPbqfjypK9GGEhsb",
  "key25": "5Kq4RDeyK4rVcRm1MteV3wXu9duDSRy2R5HeJbi1fhz9n5xFQY3sJQ4ayzN5M5SVwzNDjJ14e4Mu1JEtjfchNB4R",
  "key26": "5tYTTHgctXrzVLtR6Zv5snYhGJ5NxiA1ZZbaDvnijAWfRKNW839jm8zGqFmZex7tNtQjjAC9hJLQkCE1t3ZpvkSK",
  "key27": "61jYVm83WZmC11aTeVbHVqGd8qfU8wfzx476gW93BUk6aG41GNJ74q1LE8FcRhN5F5f1MpHqFVUhDCmXbjhwABNp",
  "key28": "5ckzmA2wy64hKWC2FDvu56toJKvJPvKyA6YSu91BcfDxGV7FM9SShYetoWC5As4DeitrM9rDNTnhVGxZAKTTbBRS",
  "key29": "4uxs2peq7FEaNp1bDKhEmXui15bRMFqieX7KCW5aanGMVPvBkuJPiwmQc7XaqWn4zSVapRtfcbXv3mniJNBAESd2",
  "key30": "39VWoQ9NGPegmxtCdnpHFeheLtGSVcsmDDrMMzfBZXrsANYDxkeKX2dpHketXcYWx2EtasZtf5b9e8isnq8gf1i9",
  "key31": "5LMyue79XMzNqU2yYQHGJCsWXsSS8vDqw7XFZPZbs9BHyhsK6bUB68PMTXHb4LRPEeHJLR3UJ8gQZ9chJcDzfVCp",
  "key32": "MWBA6LJkhpaNo2g7JGezy1aN1Y7QGLXPk7uqKHk3oCAWqz8UXgwTAqKPugemyAxGoZ11QtQ84pbcEJRvPjAH9zv",
  "key33": "2NvQLKSsteZ3aZgzcPzzLD8XXSVFr42zVBtCCLRCVCqDGccHsFydxCei8F1EdFjKgUigji9gjHSRH12XiwcSr1qa",
  "key34": "38Za44ETsd94iRf6QyHSFXP9cQDZ57FasFZCAULCghiHQ6QwqM777K9dGCTeBDuh8UxrY69HamDoeXL25uTR94kY",
  "key35": "3AVKnBBg6vZoTsR4Ai4oc9xs8u2T858JWtSQ4M5FRgsCAGfK9gEF25Rh9CGPjzp5jGPm3n7fK5vVR4Th8eA5bKug",
  "key36": "j1BeAqKBXxzngQ8tbydt4f8euhd2WxvWgjm5p2RJBR6noVWXWJASwwphEBEPbghwLoopQEmHXjNVKxqU2y19kss",
  "key37": "5yviLoNPEMYb5uYECFHcj14wZFAVpqmewoomLsywF1USRibd7QNCr2S9xJ4C5QQBPs6tQQyPp3dtdAdMXWYMR5Gz",
  "key38": "e6hNzpMFmsogGMQepLEHu4KP9pLNyHJHBYgfUSHfzR9mVtMEJP7cbHTYkcg8uEMfCM7opCzvGCzYUAnYqNMTaqF",
  "key39": "4p2xRk4qWHFP8yPzaA8tmehNoRqCGwoY8dM72hE1fY7PASQNTNC7YcjjfHJ9PPJNRFpiaZeRRWCNuoZmEmLpetQG",
  "key40": "44THzvw3jbEheCmNW6Yfc6gdHjStJ7uTWLFRMf8Sho9b1Vv6LZ3pdP7Y3tj1FEeok2Kjz2QoLNQeZXGf829JFbkP",
  "key41": "5wfUuScYWgKNJVxJhqC8LJMp94G46DWbpdS5ynaUpBKVZKdcs83Zqb5od3HwQuTZ9nP9vg9cN61sDnHq9FtJuCuw",
  "key42": "2WHwvDEVq9JcWXmhJmuwfgupMyjmLDYxEyr3Uhz2TPWsPhHQvMsRgUQTdNEwEqnJZrARBWh3ER4EKrEWatMdhvN3",
  "key43": "3e2wFt6dadZ4gz2UQi8M1cZ88rAcoQnsE7MMt4eGdhuhEBp8ap6bQ2nbC1DSdERxzbDGJgKQy2k68AQ5rYpxCXMc",
  "key44": "45iMdK3buP15avVrxShrMFgvm1XnLEQFUH7eudATGTNQ8Bt11FuzVT7XzGTZh3zMQ1KdYpZiF8rEcYurfhfWfLvz",
  "key45": "6tdKRxd1f4erMc73NH4xbRw589kLiEXz6Dnfddzx7XfiUkoUjrtNunxgwsqwRgxc4NVajV8CQWVidoUZXojjtfS"
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
