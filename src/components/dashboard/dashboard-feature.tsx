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
    "3dShB5VoEMWnQHYb76VNjJuLJCSkMJLcRzGMNqqfUSz8TrB1f6HPTRn3rh5Ab9UWnZo66WKPFCwX9Hyhp7mtcL3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bDHicTMqpLn3jU793qjf42hyUDFb1uat64BQubjNbcZpKiDPZuUWzbXJH2Qyr9wNj9ZY7eT5LH89UkvAnQ4Au6R",
  "key1": "5mCSLjiU3FmfpTTo381fBTTydWnSpsNwPiWktNDtcHnbtNUecuQ2FjXzT4xV8n6QvgKeYS7jjERU4r9VyoTWVNtf",
  "key2": "2BkevQ3zFQA8wmzkuT1MyrRptNQaAHsFnscJD7kucSSJ4zLu4HaqaoUU5QGiYzVdBKS9ux1xuMJJK3oYAhpiG1rp",
  "key3": "52sy21wVhipg5SztTd88H9Qw9ZY9dPnbzsfLfYHrYF5UaJm6Kg92xH5z3NWkbYWGAJwcta1BDduvZB1GzdQ7jtDW",
  "key4": "4Qz1KAZ6TUKLfyDAxLu2nH5dUQiuhmf6fV3LCM7aCxmScLrjjGre3fGTT9wqPy6ZdZSofufgrRi8rrVxUtrYTH2t",
  "key5": "3VNW66zvmDrYYfCTLJT5h6vrnJDBWPG8F5rJHRbhKhTixURpLQvGRUZriqXpjob38TeXNnHTaqcqytdm6SBsiP8v",
  "key6": "3RJnkafAphkP1Vz31p5d7aNDSYZ5aBkqiF8erA1ePxGbZPBUibSBanHVZmur6tTf7rDPQLqRqMzvFhMJXmMp7LWc",
  "key7": "34szB1c9BU4GkWzSS3KyN1tKB3jfJm7R93TsY7VFfQXD6zN1pAoR53aGQkcgZypa8EH3GEEcqierBTwTWqhzSF4a",
  "key8": "4pKtorYpWq7mBwqA6Ya5Dx6oivBzjGysx7aCJDq74nq3WEi2UKzwFJG6N3qcG1TMvb8PbYFkELWF7TPkUMdWg5PP",
  "key9": "4TgXiHZmhjTPX89u7BkQf8ZQYCrs4wei8AMB71HKtCp7gWJnhjiEbCtKz9WefpBW4c4Lvo1UgdN7s6NKLmtuSrJZ",
  "key10": "5rFamQLHNs1ssRYLDE365BHCa5cSNLvBKEJFcJJY315iUGuK42cSQstpgVgugTB5PHqZUDWh2c59FGPWko9LKCb",
  "key11": "2iaikSfkMPYpgwZQkjgU9dqn3R1KMWhGeoHEtsfdmGMt5jsWE58APKXh1144toNq7D7FCCxBgDprZ59VpLUdjgmb",
  "key12": "4rEg5TSbg9h7NLE7zuM69hqvqyP8HVorRvDPWoAbPW8PkRJuusc7RNrhGTbxktVmQ8m5QKrXeHHBiQgtE3sphJ9V",
  "key13": "63j6PgyRQusDVkkBEZscufYBpR4HKmf5mjg2Cjp7RSgL4HJX8esAVSY2sgmYT3948vK2YEqFfkjHVGQENjXPEd43",
  "key14": "3Q33mw4xuPM5hTcFTAC62SPtqmpeYcpJ3pAqdHNTrEsiLX7KJN6NUx5U2gYCmVoFaoptG8N3sZQf3rTUosX7k1aB",
  "key15": "3HzugEAdNGUhbmZR7CWjg3qu968Cn5ry4FCGRouKwHi33tErrHR87XLFG8w5JTjHKFr1q4QX5SPzArDUtbAaSgF",
  "key16": "54fCyuTh3PujnM1gnuYnLjVDSThBK2az5zt44Fwi1H7AcKoopyD1Y1CyV5bz3WULML6y9mgMjdjS7YsufJ7raCYK",
  "key17": "3kn4ZgRmiepd14YnMTQeFb1SU56kmkR8HRcd9RhDZ8UTtZu1dNCB4Anp6A2MVnyK5kby8X7yZRbYYLqw27AySKBz",
  "key18": "2HB7FRu9syR8soS54Bd3wDZVDtCtJQiu7z1bcWzmU5bY9AhLasw43Z5D8bLj5fFCL24gTBRKh2sbHopG9UaF4HCq",
  "key19": "2E3Erpb9KyAPbGPdrP5fgtrVAi4tEtUqGNaEAHx27iLpk1GUwkcnKtrjBtneqXezG5o6duSNcZDFkj7AsMb4LpeD",
  "key20": "jtGdDEh84gZtwCGw3SLCM73uPRzDvnQ7CwftUNojBhUL4wzFM7otiDYEFTENW3fpHYPHneMBfkfWkJayPhvWs6n",
  "key21": "42WvmJekxmCaNr6wiJcSHSAYtsY9APzvB8ihbLyh6cLrFFFm6PTvzPC4NvX19VRtJaNvWQ7fjhuqoV31RnGRLnSz",
  "key22": "2S2ZacYHxUy1dqavMVAZvjYhWA2JRZ81DXSzv9qE5xdypagcXaTPMa5zTtcuTmYWmSR7Un47UAPK64q6hzPLKcmP",
  "key23": "2BAi34EBiFmG3j71H1vzQXrySB28qR73PmmnguxovuvMmBzBGfZhmgbGWnet91T73oEKkQgMu5gewanwVMKHMVae",
  "key24": "42jcB2BnJjtSHQcQzyj7JsfqhwDawRffhc667zdK5UZWmqKjizqAUfxh97wFZUKTEtKoNLafnMTbGd31dL8zyBcw",
  "key25": "4DDzWs4CustNgYhDBfKe44UrR8696amsgNaBAvsqh49uvsXkRNaqsgcZJ2smiAJS1QmTpQduqioBcE2HZFrxQZiF",
  "key26": "4kN3jTz6V1eiWfXdS6MZJaKruiSXy8CwCoSfHgCENK3uzNAsg5i35pLidpoPHVQJjjpgkHbrcdEG9Sn5hXJN843E",
  "key27": "5jRncEcNbroyUqbaNYwSVKwNXMA14Bnx68TygEZHkFhnNEZAFZZEp3nGxbAzqnvZ2gRLf4wqySNfuz12EXtYMsyV",
  "key28": "xnsWjLszgMjQn2TgG7XgKK92RAdRNQwQ4TLbzyR28RXJK6RqhjWLNNRiMyRWqSFYw1yYgEBKYZrCSxrWKVuxrgM",
  "key29": "2ox5uFWGfTCZmvd9SpJjtx4Q5G4eKgBfkZ1LmsE92DkdTPkYc7b6mH6TCqMiFUVsfguY775aGQe7keeaya35PCBL",
  "key30": "3m4LhTD2TTz5JuLhbyGPvtEazh5zppADZtDcWrrEk5sbQGm5hnvn1J7AdkeynJYNptXSwRkwLEwaGPxtp93oVDxL",
  "key31": "5xHVMTWQjTSNRhH39b8GtTS2G47y7auQK5zd2JhF1Bed6w4jpQ8cYtW83qAdUMWHPYwBUkXwWDa2K2b29ZGCwX4M",
  "key32": "2EDwmbAvt4saJ3jdFUngh8tcQbtMUvwXf2BRmahbDVVvShu8zKr7A2rw3ZVxhPDCRgT61X57A3jy8VLhPYmq9S45",
  "key33": "5GE2CveZa6wP8ha5VLPCvkmgfT7f9K3tWWMeaTMcWYEN5zpvZyB7NE4VdFgtAMau2qfek5teCWcwxv1xKGmyn53w",
  "key34": "2eNe8cNQkxLokY9BiU4QyPdAFszu7zin2FpU1Ypr6PVX3zAsiiDUhA6Xv63Ux2F1YFSd3MK96JzqqP76rNVSb2ML",
  "key35": "33L7wQ5k7PyhQx1Pa4ybxyukm1saRELzDBm9Q6x9jRM2f2kHna4xKgx3d2UNJps1o7WDf5DRvQywefXV9FWSY4Nf",
  "key36": "2tUSbPHdaDZ4k56D3okX1eEf2X2oBRNydQBHWTbnDK4Bi2SkXS6mJEhPZ6mMpfStEzPu349zuhoAxvGKmcmwJfJc",
  "key37": "62gpDEzJt8a8nrsVdLj8MR2vShkMGWH5k59tMpPQPnKA3CHuHxUgxn1th86NRStLg17vaSwePwvom3kcoWAKfba4",
  "key38": "XBQK2Y72vEbFZG35gYPcRX5HBBACYXHqcGG8gDH34FH4pKSVEtTXgwvymWeK5rGHDBBHK8QaYUoKzrqN1RqcN3Z",
  "key39": "5C7WR9aHgsQsZ4TEBU6X4nkYm7jy4YsgFXDg5jAvjRxArXVUGjmn4Vb6bAoJ2WU1WoWfyn2PWSiXqez7vDshvCec",
  "key40": "3VzJPZP9FvEWucfwxRqGdY5FCLZuc7vb11ZnJgMEyatkuUAsWV9dM6RDf9VHTiKq33s2hZChXSK8hzSA9WJAt72e",
  "key41": "4RqTbemdrxXmYD6u9s4DQWNjkRherRhBHmDgynoyCFJUAGYBrraq343RM7CuXdYCbRTsotDFPzRUpPZbU4fG85AE",
  "key42": "4qH4gqRsBLFpeSFaPKZgZFT3rp7k8TRkx7HoDEQ8eEvteiXjMviV8iJ1PRt2SJ2YkYRNBeSjPGbhUqy8REgMJUPw",
  "key43": "24tTb5KWi346WvJ2HVEroUoiKScF7ggeY2xX4VcHRLUs9bMCrzBUsoNT9XX2B6ub6rWfFUoCF96rxmfRWZzyBTGx",
  "key44": "2dp4Ky16J1GbEBh2pbuBhykpikHCXiLwWuT5z6mKb3vY1yQ39UTdFt7VNLmciDuoHw2GmsU3EnHnHGYshkovkC95",
  "key45": "5hivRT9QzrSimBhAcbcsZngaeUmm8ryxNnd7T5uR9ETq83pNGrDgZjbm7GrF95kkPtBpGJLVdfSjF39Ex2fUEHB5"
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
