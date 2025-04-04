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
    "21cWqGRG5VEcabZVFBBVDs1f6EcWTb4BNJwp1pN3HnkSdbvNhfHLPPEgSCdG1oEv3N9MsxxNU1a4NcnXRUro4Haz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYCZrVba8FX24T9PasjmEc8HJy9LoobQJ6aaFVrHyJbEHh68pPgzcBPdNok1VDTfHmXatQS7Pz7kgWsKsm9CssW",
  "key1": "3WGK7czNENHLQimAft4LYKnPD58gkdUpruKgRFkNaLMb6CmMTsYvKAiCxmGLfdHA14rEyEei2f6UY32xVTYv1N1V",
  "key2": "5FRmJ18Lp5DR9zByxQcFKsNTFiLNwStq6V5ku5QfL5vfqMGF4FnbThvDVtDkY38i2gWS3zejruwhgA6QT7ErUXJK",
  "key3": "4jvM2jjhTkhNH5A4gUW6sLqX8mks8JUbbWLPX5snrBM2UyyyfEL8jzUY1ocGgCXEwAuCaXy2wwc8L2z18PKQ7G5S",
  "key4": "2Pw5sYHjae28fo5xH63UEqPrQiv2XmEEDPd5UX9jnSLsRsXbc21LxFteXpTM4e3DKXx5bLaP7M26Gczx6EQDPQso",
  "key5": "Ab9GH7QJASkZHuccsuzcSzacP4tkHoVHGm9HMTYHqVaKvfRkpX7895G1dDQkYoSmF92cnYWQFP1mBKris56mAns",
  "key6": "4rfJd31tHSztTvjMvPwcsA8NBxBHe1kLoaUoWHckiUY1XoqVHXmRVC22YNYdVPr1imCoiQW7kcCa5XfmtRriyVDm",
  "key7": "2hcWaZhAiZm4FZikdUETKEXP3QipT27gqXj9d6y7aeNxZqyp1kbzYkcBMoakV4mEPDanzEMZSchQZx4gG19AvcUD",
  "key8": "4psm4ZRHzUypQH8e4sQh5UE2ZPJZHwibx7L96kr3wrtRWR9wcS5jqaUNTK1URT7jTcsQBV1AzCS7e2bVNx7Djgdt",
  "key9": "35nGxYQNM6DVQeCUAKvwA35cXxxCuKoCce8gdUYUQG9R3ucL7LouD4JH2XXHfh6hCCmwmzq2fQeirap8WRiBC7EX",
  "key10": "4gL8YigGg5x29TiZhJrvfpYe7GzNunoCzgdAf4BfjkpRuovggXHU7Jt8sDpFTTYt1ADsYojJVpL6EwiVCRnUi8To",
  "key11": "31v39mN43GFUsExGc2kRpY3gKKcyk89h7zgaQZ5ioQdUJEANJFLPnpJtgGbu5PKjX6DycnyB2fnCNczp3owEsu9h",
  "key12": "4BS74GAgfTdWRYZTAQVuX2BiTrZqFFGbJbKoNvjvWhmaCbUMwbnppxc4K7YZsYQtq2YzRLS2G4FbRjuXWwzUXPU3",
  "key13": "5GYeo4ex5Y8211idtD4XDdwEULSBFjW4KZqJU4REz2fURVNGZ58pYGMxNxobG37Sn2F5DwqNQERLDrxiv8erLPD4",
  "key14": "36LTYJGTEANrkEG7Kn3wVtW7ek1dHD3Qd4Gc4iepsqyuZAsWtosrnzMb7RYT1gqPuPAuDDCyohp8tQNLGCFxJAQ8",
  "key15": "5ZSvBJGCPyLfvtQcTvrcZSTs1Tk2EYQsAMyqduWCm6m925o8iNMyyiE3BK5Ub97Pz8xSAoMgkV8Zwugah63bavP1",
  "key16": "3PMDR8NCTXQKiTHuV94we4Qv5afT78KssQy3rb78zW4YkRZ4HqKPT7tHx3dzG24fkWEejVzbNjkiJ5m2tqvM1iro",
  "key17": "5bzJBarLPnN6DGqDnN5wBZ2aQ4E8DDXXncaHvTghSj6BiL1Nj1qGhVPubLXL6ivqBuqTDzTMtWiV1MFkGjXbwh1c",
  "key18": "2Veq4r1iMtZms4FzNE3t5Hxjc9SnD25nyyb9LJKU5GpruazDaRiZjcPfE2VFVXTKhHFy6rxruc5kDnx9WZPQYmK4",
  "key19": "86A3VxQ1bsgGggsCQgcjea5VyJp3yCFuPhoLkq6r6Z4auVGfepUBPLeoGk4PJXwtjUHEM9sAq9FbAN2nt1QL9xF",
  "key20": "5rYxTYMMTTnLwbcCQkzPYRnKW56M1CFkrFX4bH9SW4h6DbmTBSPqTdG87EXxpnw3QzzDRMxfVQdMGyEzHkBekhXR",
  "key21": "MC7iqWFm96HkRQ1cEp2HpVwYuJfZqLHxkct5UYa97fgbvChdEHGxe5CF1qHq3mGXoHftdAiHR4uvRYY1XtHyTSs",
  "key22": "2G4Gk6Q6zW4unX5EocQVCktB3NtswTpKc69oqdec3ftWPE5fp4vokDo6Vu5RbYpNiS3BwfQbYxrHUGy2cfiWsd2q",
  "key23": "dEi8NqzR6zcGeKXHQMeqFRiPHM87aoxV2qvTSNnRZBJfobJ663mta8ScAwKomZFnbHu3JAQj3KomagMWBnW2Rxw",
  "key24": "eB4cLCJcXXPWvZXdXkU4GMuaT39AtF4yDnN4ViSynj4pXn9r9Xvi7XWHjfBvptrm5hwCmPPe8nWSzCamsJheJpo",
  "key25": "4q9d7SjUrT7bbth3SU11ANbdu5JG6Q57Ccikt9o31eYhBaaX165Nj8A6ti7LtVzCN7nD4ErK5dTj1pAKMgT22L2q",
  "key26": "4KDYMvBwfN6QTsYrBTNJDkeehNyvv55S4LcSJD1cMfRA1vHU68hzeyJcmS3wBvyd5km8xtjJbJbhx8YezoLKayis",
  "key27": "3CmpUPoki3JURQ7926YVRkoZFwiC53nwy2QKyFdkzSd6qgY5tmLmysd4MVZGWg7efmYjQQKvrSo5kW1rYNNf2fw8",
  "key28": "3DHXL7ZGJYjKty1FVhxjP1EUaEoRfAh8eUgSxvwH6NET2T2YHAHZBgFwVUMgAfPwGULeCLjgdBN5wvd9CNoPDiai",
  "key29": "2c4iCbJJmGeCT9bmA1z3XiQ7rHYUXxpFHFs2X6KWWw5RzW56FkvzZzR6Cyopn2w3gYT2bYSnvaPocvf5xcra3T3J",
  "key30": "35kWPRVJiPFtwSDW1ooDbLdsXAs155QoBAWueug6WJzQ3EDLVJVXAJMsjtQzfRDcma6vdRd66FeYdAwuov9Le6CW",
  "key31": "2E2tYAJqRmjwEdyGiGSE5RrDG5QNnBP4UDmw5bkpjSbutoGPZ4hwiCXMvKgCTnmCeJouG7TNLU8x3xePV3oPVSPk",
  "key32": "33fMTzCMoMFzP7b8UKbc9fcYq1WT3peS6MNFEibf6xU5ZS1fdpeqtznYBsPhUgcViyJgocHY7suV4F7BEqpP8PHq",
  "key33": "4vnrGYjZzgSVF9sPWj2DGPsUUfFHcPbqHtJZc4XLe8vU9WzBeccJjVVunbiQPLD468ohS4iDM67Xq3QeT4mUHnGJ",
  "key34": "2mpTgwtTVLGMUs19qhL3PibVUZMY9LBQ9LLXdLp6w8djs8guMhg2MeXd8L5dBevNs1fy76bHFg9CWFMuUc9juDcM",
  "key35": "3GLAWeZtJB1J2uivZuwj6h19oiP46a1PVvCgbmwSP8qgBvPhhmNqNvBNSTYTff6Dm8gJuc2dE1QRTGu9XsvApJbF",
  "key36": "5DaQT8F8ArTu2yEBt3KrWhVzvLxAPK8XVFJwC3qu3MQC3MKEMznDpDG3V7LkchbvTeU3qBwamxDWtK3GjbBXmLod",
  "key37": "3zHDyD1Z8Dmy9uWThP7WXWf4FtSpFUBPdtFdrtc3ZGJcYyyzHmYGaMmv6bqes2kyj9yN2jBMH7KM2fxgmzKNBvZf",
  "key38": "4TUqnf57sd4yPfVbJZMYW6XU8AEQR4jxWBRa22JdbJooLxvmtrnjXwGbviXdBSpGtQjKSnt1d2stHH29Bj6bAYCU",
  "key39": "3ZnMka4SvMFTZ4WE6f83Z1PD2JDJnCuAVS2A8ePmydE9bXCcwfwgeovK9YsC2moTQyu2d4UvFkEnhmWSyQxBFev5",
  "key40": "3weW8eVvGHnzRVvTyHXcAAsc6GfppSonLyi1cQ8ZUx4jcryDHZLJFp3C7Wei3TBC5kgvtB7YvseAW16JPD59LW6B",
  "key41": "ywY4uSjEAnBndYDtmrz7JnofBjThFhjCntPowArTyKbAj2aycUFFLoJJqYr1pXuc5soyiqQfbyFURWYvhHafTxu"
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
