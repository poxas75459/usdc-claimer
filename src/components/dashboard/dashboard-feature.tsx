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
    "HQfhf6Mnnaar3vPJSyNdaJ5v1M64BKSx6bPj6Zk3HTFY2kZuyGjmXV2y8hqsuDafCmezuEa3yp4xBm53u7Srcs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EynAnPSHXJyRHDSLFBsFpBpyVo6CKrHqWR9V1nfS6Nk1s6edkNySbJEsv9wSBRMaV2FESwHuydjubg9kBCgWTTJ",
  "key1": "5SoZSCBfrGsBNwhKsGq5NAuavZRuWuCVy49dNKXvjNCk6fGgMLKVfU8xWm3RdCUxjNHqZN1sxMXAxaAp81Jwkkez",
  "key2": "zK2bCKjcWuth6zRTpSB7GAL4LrKmtkmGf6W8i4ktUX2SFGBN9WshLkUnJkDAUyGLXTGobB5rn8QGbcuEDs7kpiH",
  "key3": "5wbewZbBgqAWmcoCjEuaH3iJmQ2m5KjpZse1e2MzFSMAWa6ALMGKcwE7KRjfDf14mHADizBWqxfuJtRMJFKBwGFA",
  "key4": "4HvtUv4X83w8V4CZAgMF2BLzt7saeQLixXVRuwcscs2RgWe5XcrPx7MVDCeQWkAkQcLbsgrBhBEeqSwLRBkTXtje",
  "key5": "64NEo59FesUY3SdxRJ5QagUbux5FY6GYfpDbQoB9zxZPpRGNRgNdAawt6fjiAxpk3W1k3Yoj2q5UFQrENKSvk9Q4",
  "key6": "MLu4Kt697cpJqhE96ZUftevm96kYskjhey1L45BhfZk4Ugn2bcgAQP9QhP9rqWDVkNrUtHGGN1Coa4P3RFSM6bX",
  "key7": "3Rgm21zsbpkG2VM5F433uyG57jTCBodyrrbektbmdvQAxbu4nbDQvaXwhjSbHthExsKirXartYNiDoJvBYzNS9vj",
  "key8": "2HSd73aLcgQJecHHVSX8Aqi1rw5qVRhyTvqAWTovbimPJUXyyXTH95VihwQNRu6yftjZKuQ1oeqv9nDme2QAXyQn",
  "key9": "46ZsbKERAf67K9rmuv18SKQ7cgazp7qvj8DLu49c4Ku4xy7xZmFLcYLbym6LZB3SMomBy591HoukjkYSgNRKafeV",
  "key10": "4ayzpMiJDsW1BWbn1JgWu6Kdafgezr6ZGSnBAyrzxcKpMSUxWWJfg9MngpBLUxXKoSAKM84T7JF48ABQ6RXRS4Z2",
  "key11": "5Qe1PiS9Qyfvf9HnUNRGqYCGqy7RBoACHChaciPoa5QB4PPuQBzibsnYAEknKysRjSWzQpRn3dnKHuBRvXUJr8yv",
  "key12": "PrRERcVGgyGvyzhoc28UGmKoLjAUVxx6e21HnNk41xmzFqafkFw2eBbMH5Lsz4KRE6HiYUwLWH1qEuFzv8rfwcC",
  "key13": "3oSpFW3r5gdt78aLswwWS7GJRbrdfAynVQ4ExemgLyYoKLCLThBrLZHdAQGK43sysZti3obrbbUo42iKc1Nj2yo5",
  "key14": "2D1eiAubTNS9VVjz46cmY8aJucjc7RXVP2D95pKdx4ZAj2fBYipqrMWzBawFYVc1k2iL4GJyFMz1EBSgYTASvKhP",
  "key15": "3agY2FXjPDcBYRqzrkdSYUcxQ9rneGNe8PJatewquj1VM84fS4xuR288UbxAcvaDjQxmfw5rt42xXcdrSNjdxm6f",
  "key16": "5SyQvegwrNsFzt4RqU6TmuQeZtcfvaUGNN6AnmXXmVke3ozUqFdYaBigJC5M7LXyTgD8EyoBQESN2v4JRoikPKK4",
  "key17": "4Qt6mdkAggacwtLn9meiuWjni9L74fLt3HEnvZA75Tw1iJK9EQFXPiWgSAQSGi1cXWKzgyaQSmpWYHAnU7RfUPr1",
  "key18": "4VxEpsFFZNkaCxWr6BvoRvyUfZDKcYxk239yXad2HP4hcFm5YjR7rvXVkdDonfuSJ26DmYDpgHbPxPiDvuzbAq7q",
  "key19": "5Rrvgzg6YDUjaePoCGkgCXfiVfD21j7fpVQUpGg8zVXjHajn4N2THZgTdWEWnsGe8XhVdPWrzf4TjPFg32sbBdb8",
  "key20": "5CHuAYbg1jGiEynA3dMbi3HajWHFDccweNtAGT8AYezTrFBWFQjqmrcEYU7yT5RpDE5V5MWp2bDRvAkHwRKj7vmb",
  "key21": "oFUobDGF5tUEj3b1C9LFtSFe92ceWDdhs86r3ZeMuX9suoYDqyvHtAKddBa8Dhn8j79HoRe8Ki7ySeYfxfHX5xd",
  "key22": "4aEE3iBrAZaMnL5x2ivRRo2QWJzJ4Rsa7JwkV2jNdrqtCtABAW164ubJ3iEoVMU3iyHWMqXDejdVZFqR7e71idhX",
  "key23": "3VgnAjv7T7fWUk2RUoCtrRRd7WNLqSgeCeQemgpi9z41dfdNVr7Lto3UNZTEm9yrGt4yvoLizc9V9znoeuraXYhP",
  "key24": "66U2XHUYYkyX9THc9gXRcpC8tZU6RosaevnU8VJzvcJ1kdqrpvni5igTPEn72jVuScXs1gZxxaBNDtHup5vrT3oE",
  "key25": "5WyDKchWrJj7it8jAF3mwFEKf4HXBewnzfSuRrXZambF3xfp6fDyTUyr5x94JNCVY1Cfyzowq3gUbMbaCmBFniGs",
  "key26": "5cuKizdqbVrkhKovyVNcxLKcbPy26Cki1VQ91u1GnhEzDQafB3cQNNJKFSb29xPSBWMAjz6D4DLEirDRChWXS7bQ",
  "key27": "3Gmr9TYC6RQx2d37EEvTd554cbSMrvXrJseE2k5mqJAEd7Nwft1mUPQ3n4BbmqnaxwEi7c9hQhx3nncj3TnxzYwh",
  "key28": "269EEfdCo5hzesPTS9gd1m6JSkZRp3BUFKdbZAJpeXARogXtDjheQR53RNxpYKZ6UY1cs3ZACZB5uVxDJqDP2ju8",
  "key29": "4peMBtDRJcDmihySzDDhXrwREgNhRfP75ExvBbv9twicZJbe1hVHBTnHuNznCYgkT98QtuRN37rmREpKT545NKyZ",
  "key30": "xqqwShPG5KbhWtPC1v1TeAtDt3zmN32zLjwDgV1YqXXmjvdSVyT62P3rPVXdQDxBgktf1aLmAdKaHyq51wHrSXx",
  "key31": "3xgw8f8dkoEJAjX9hKxuTAnE7vTzAApSSSW1cZLTntN3zse3UKifBnsb1Bv3brbza2QKx4dK9M2Nf6qrs5HWrzgt",
  "key32": "2KC1Y4Zk4ZmqtLHWLBCY1VNVx6HB8cSxZG5EpDcymPTUn3mrAg5YHGAf6vnnv5UnP79T5FS1zycBGqmA42yTLXku",
  "key33": "5nvTV4p4nUasNuLUPyuy3dKnHeTZwgJ6BHGenhuyqzZKQuTg2iFBEL952uLKY24bsjkAhh9B16LYaXztLMcAyjYR",
  "key34": "4fMKrTpUtjh78FhaBRVcigWTM9e7uqbd8qdZJCASoibKH4uM4i2CX5FZCcSLgG9sksY2y6mCB4rdKivtM2wJUksp",
  "key35": "23vSHt48aBnUrBh8hEYzLE4j9EBjsgVVgsrACPY9VgaDefrcjwEJeRXN7UH3uGrsozbavkmuQv9vfSWebEAaRyoK",
  "key36": "5hXg9Suv7gssFaDvEpEu8NqzQhWHehZcfQfp5BVJXvfhAPvxMD44rtvFpKgPTKvYw2etL73Jz3rTL4By2ewKBgja",
  "key37": "5N2NJWZKfY67kisJbmi8NHyyYGmk6D7USkR6RETMS2vn1e31VtG3pFMwSX48mjwcT6xP86E25QG1k4C2J7XhCSMt",
  "key38": "2dcBSBWb3t9UqYbUvyS9zTih66i9eXTzZTarDJaMhcBeqJs3mcsCryTscLRuu9Mw3PB9JZHjDpqmrE1CgmQ5HYce",
  "key39": "2r25KbNeKhN8mt9HWnGteP9dpYFaZ3rmKhNF2B4Yc8MaqqjoZ6x7mv1qnfDpx21GV61DvPveA9UAxTcrBHG2o756",
  "key40": "65opapzGDBjQGVjcwDximvps4Dvzyvg2MpPkjgJ71pUgnf9nsZCV3diFYKpTX3Ld2HBNuXbsdq1MwBqEcncfWf3h",
  "key41": "iadNBYAFeWqDMYC6V6KBCpHp58YWzp2LEDLYwRwNKVgYskph5XXZvC6fp7D6rp6hFbcbMMAdch8ETch9oPziD1w",
  "key42": "4EGi3XRUaMuu8QXXH2BbCwV5dFeuPEyF6uDrrTabDqq3bAmGmYAV1hdvMwDpvDmQxhuCEweVrY86JDeGgvmtAEvY"
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
