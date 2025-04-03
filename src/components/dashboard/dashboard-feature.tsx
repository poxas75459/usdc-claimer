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
    "3pHPBHcML4zXZTLKXnk4fFBHNWqgxMpWSGpq3sMs35Pm3TMGnpb6y5fJqPLDMLbknMADMX4h9GKfYsp6Euc8iwoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45CgFQeTZAhKHRmCtUQmdXa5qKxH62TwQrRD71FpymJF4ooyt2K5jHLebJBvmCDFTLEYtkzmwT12se6dXarhiH89",
  "key1": "TAiT2N9dSUw1ZJ9kvJTnWzYTmBaLC88EhwMAwFEUgLvE6KLoeX3zrjNyAfHgshzrP9uhhXNpK9CdY4fWKBgYwQx",
  "key2": "4jseHMBdcYF5TfQq4tE3Fm3N3kvivVdksxALhbQeJxiB1RGJTFwHKnAV75Y3YB41Zs6WETZ2ttGqtKXv7PH8iUxp",
  "key3": "3X2f2fc7SY6YWJxY1VHRLf8H1rG7pkhKzfEm2vDG5BHY6TmF1YJzLuwnzbHboSpAvxKvad3qUkSVXN1puHWBvFbA",
  "key4": "4Pq7MdPzuw6NTqcVUctpkMDgW2ZtTqdUpAvVbhep7zuYwgR5GZMa7gpVDVwDhdSZWDkV4y7VUSU7ZFtWj86qTHkb",
  "key5": "5VdsvPguQWNWdKEAWoLymaJrLDum9yTtk7gawXfPjzHadHJQKverrtg8wjeLYWb3sE7XN1AyACXx9iqEorXL5xuB",
  "key6": "e4cn9qoEEYg94FSkcJeGp1NiaSMVGJ9U9AtafgrED8gykq8RJhtVAsacTQnRFvQCHJyQMT7JSoRziLaCBcp8hUm",
  "key7": "2RWy6im1xtDkSAeunYdWvVmRni3TNTxshtydFw4VNsjCLWhhzHb6JCamqDGqi6dqVVPBcPy4VYH4ycepnnjNfby4",
  "key8": "65C8aNSzwWTozw3JL8vd2TgUpvf4Rayj6KMBRH5KJrZXvyBP3yienEoC7WioWuaqrzRrTk1EfQ78V7DuHDHXQDvd",
  "key9": "4jkiFPkpvxLDf899yjWHYF1XFBjh9YajLkR1bBebhmkpWqVyvkTMn8ssTiTn4hhV9SHiaXKcK5U77ZsTgx3L7xJp",
  "key10": "4dkeNLCKn2dA4EUTV7sZTDMwrUwypPz8YhHKaKfFJ94zLiH6tE1ABQyWyDh5ipi3zQV1bZZ6VPGcLw23FzA1LQq8",
  "key11": "3YWZFXVsbjg2n8nTrdQktUJ35k5sEdCpnSARc1ugbwdhzJongnWVo5S5Qt1i4WaU45woMujLrH3JLDatomjJn7W8",
  "key12": "4uvys2XCDd4E1WuajYjAiN9zwPwQaSUKmN5QgwxzVMutJHSeQqHxsHJunZVjEf1NBydUxRxTMA7f552mMZt9uHvM",
  "key13": "3jbVX2kfGWSGYdAuHTuWAHrgbjnUDQtnfkimbigJ1gFEjCAssN8GHLLu6Sh9bfrkHDJMPzvPBXwymXg2Uwskmzkx",
  "key14": "64V1j3JHwuN5Fe6N4EYrFQw5nEN7SEbA3DTTH2BF77LEnJwBn3xCKPLm6Q4EH4x9SxWaB1jsQMeRAM9qBkCRJWVY",
  "key15": "rVrdM1ywU6KHXWh8LxY17u9GMRby9Pp8VFf8XT1w2aFCuWYhzReeZnPEFhQq7j5z6t3TypgWzNWJZMMmPHYXQEH",
  "key16": "5PtrF6bwJgsdTjZaaFqFfp5cLRsp3EfLBPy1ZEQVNLyuBsm8xCXhKgw3DKoHDHzpGQvmviDeqwLrgedCfoNVb2fm",
  "key17": "2nxxcNAFuiNw2GVcmsnrDAACcMTv27G5jcbaAqDyTxgybJPrZdDr7AsvV6VWEuh9ZNFgnHSjMhX5mtfgYWKPC4ft",
  "key18": "2Z4BD2nhgjd2pVV48g2B2c2TGkjRpvuj9YXGbnhGybW6L3sCB5Z2k54D51qtKjB9ugJDGvBTAv7YsdDsvU7SqkBk",
  "key19": "uGdbDGeKausMuF2uQjNAnZaUo5ba1yBPFvWzghUJKeJR3xczHeoZbdQzftvFTAVERSwd7WH1ZnuHW4ohJj8YhnB",
  "key20": "41xr16DxZGck2Q9b1gm5bbnm28G7tyNpLt71xveLiaKMybYcJGGhj5Mos3wzKVZZYKpcz9UoYZJqnePQSCxyZAqm",
  "key21": "JgyNdyZSYHCo9NDhAP3n3WMXLbhrcqKqBGKR8oFirUN15jJpfJXfYAzzcTCMxLTXfiUhmrLNVxVntCgwyuGGKMz",
  "key22": "2p3GAyZAkrcokDG6Aqu6szkmacx5CHjQFXdw4E72FUbmGbDE4gnuza9z9taLVzch3tDdPSfbgqb8daHXbZWhFvvJ",
  "key23": "9yc3fCJo9C8LGq3Dvjs5P9UH42qdks7L7vVCdjYauGkNbNDZX1RV1PVvYcxZPf7npeXU39vK46KkTgSAgah1gAW",
  "key24": "2RvnmBZ2NCkLiruPjwVKCUXTf1qPAB54aChzAReFeYY3aFSdMwQbVSsH3brqiwcCiChgC4mRAfRbR1KceYhZhb21",
  "key25": "35LwqbuNBrrXg5r8BS5ophwTdUQs2Kjpgw2XRhrp5xJcosHwLuVba3weNKN98j66UpoY5HEmaiULN3HFCFco4Ltc",
  "key26": "4cVzy69zfsPXAy5wLtB7S4CWK8QuQg7sTQ86Pi3St8e9Zgo6JxbrExMqYvdtfvqTzBcrLLotM9Un8D6tDXhXsj3m",
  "key27": "4KRVAcXXr6kBCQdxYMJu8UgUUSvfvHjsbbLJbuf661wWLkb9KaMkqNDVcohWiYYTXis6P571dmFFACJcNCxbvEQk",
  "key28": "2bqFLo5TwHhkkjBwVxemq453rF34NUQJN7rHr2wmyUHQiCeAj23sj2pAeovgkTmvcsBkJqVU2pX7THLhugEVuN5a",
  "key29": "X5KMZnY2s7AMg5wHBieWACt4zMc5EmFksMdaeVfwCaLV8ECpormTTS5kpozbbXsK5tBiEt3ZdjTapm4Xp6rwsBM",
  "key30": "4weWFGugJpuQadzzdrh37QihymJuJGu4TirP857ttDRTGnjaeZTnQmgVRCxfNTqkoXtyryzmP5ikVttJEYaBEkSa",
  "key31": "jQK41v6GQ1spCtkhmmdv1WK5mBaDk5nbTt61igHTyAh9zV72MwgcxD7cJ9AGwNbCqdtMgWgWN75fFAeDhkpXqfj",
  "key32": "2DnjCXADmMWjaVnjcKajE8mwciAPz9SwU8DNeAFN3zBNEbMs2ZeLgNPs25oxdotx6WwE5eEQmfka5ADyLGPKcwX2",
  "key33": "5BJ8E83CkbVkEE5JpHQRi867okzcQsDotF5xQz69virUrixVKwfXuWASvZZFiMgCFNNwTcZj988XuygyKV25F14a",
  "key34": "JhjYfbiF2EoMkhiWri8mBPiJagKxr1jzJ5VNCPPSzEUepRks2A3sXr59qnKxeU4dmtqQCiExeVYZHsx1fCb7qRR",
  "key35": "3VcEkewZXzUW1KNMWSMdcgwhyLgsDRbMXvkfb7PSC4qvyH7aMaabL2y5YTiUsciFMRWiVhvspUH9BuMJFDGW9JL2",
  "key36": "5eSkn4NWudBaQ37jWw1pj4e3UT1zkCcowzEWqtQCpyEiUdLCamLdmkPwTZsUPwV113hZ3ysyEan1aAkQ2xbjPBhv",
  "key37": "3VirpsuiQM7btvfrpaVNB8KMj39w9kNRkHMXiE3bQyyUUaQuA9foMama8o4tx7DsaAY6GWeYS2okczToVKsEwThr",
  "key38": "5GWuUq25DQZdcABCkhXf1XAYoRSDDDhJbBVbFcfAYkjGS9mMi4rPY1XRjnmHTdXeXaWZ7YkM7x9jdVPknzHWZsg2",
  "key39": "uGLZvpXCfYNNGi4KL8L4vBp8SRkjqaVyuRRAcVB56259itvpgV8AKsAxu1PgwfYDsVWq5kh6Vhfsf6ncbkhV1bh",
  "key40": "32R6nxpgsDfZCvTPdNamPC9nURo9ChiZu9kGJdKADHvvs4FHzU6tm9JaiT1KiDkGS3BjUnWpcCsSa63iAFEBXXUR",
  "key41": "5KTQNf7MrWH9EnYBFjeDYU698Mu2JcWJNVwmy53Lskp4WmHprHdTC7yyRdEhqyauzrkpMMMHWmjkcFE1hCUVGSBA",
  "key42": "3uGQ1R3RY5GV3ScKrqgzLoHQy8KkA1nb3a7kXCXxdG9pmFVhpxGcrkchzNz6yJjEJaXGjTGpqbc2qw8pY25cpRfR"
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
