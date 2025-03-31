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
    "5hV2uKLhR56sYMtb1JHbRTbrnDvA35t6eCnM4zzyLshBHTyPUM5kY33GRUfhir2L91TqzhrSaY2XbyMnvS2T3QHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RX52vcLFSEQ9GRMUijVoHBspYPEaL89p5tth3qnmruQo9oawb2HDFVuEqD77y1tX2R6a1r6gaooYzrKT6iNBMJB",
  "key1": "5T62hqQUnP3fsYqBHFJNCc19CjdNC7vwMErH8LM3vb3PmK8YaqWBDEZs9ryLt9RArq7ZqPNeQbwC6dZL2wRqe8JU",
  "key2": "2dTgdqWLRFcuWHFkj64Yz9JGoNBfF9dUkv79QEvAfF2uhdPHELgMAr3dBh95ntfFBJpJMBm2kgnKAoikN6FPHsuL",
  "key3": "5cP5yBr6fEEAvsDMLnJPbuPpWL4jZbNsvKhMMytf1EVtQ367VwdCF6wP4693eBhvuGAyRFWooiL2fNByeVezaNi3",
  "key4": "2ViXj9ZF6qWYt2kDd4idQwcUjoLDr1zq1HKaayr3rMEhfbCqME6Bv7spwi16S8iH5WB2UPASTokCJ1imNdSNUihC",
  "key5": "3gqhhrAjCxikcGP3bcwi662Agrbhr9vFq85ZjpqbbhYMduRP2vc9PyW6kegHUpvyGM3aJb3j4kqvKw7wipzAVUcc",
  "key6": "9t4Q2WJ3ZgqxNyLqTUwH5fVR7aXV9wbCwbFy2RtgzXsNqVgvHF42NCrz3Yneiuh7EJM3EgjsKrfWUWyGnhzCihd",
  "key7": "4oDUHMzBLSV8D5kJ57wEAfhLJi8Ed6Mhk4GNs8GPQuecHGrMuWj6Y58Ev6Pgxq8VudPziuA84SRMv5R2G8sPmBJ",
  "key8": "4q29gS9Dg4r6z2SMbhBSvVPTXWZTUebSgR58P5XUD4zSet5RVneaFUXRQRJJSuaYpqujQFDpiTMLMrGUCoJXjSPj",
  "key9": "4pCKGLDv7guBjtVF5NZjaoxyzQuahLMD5c9TPMMUzg8RNpn3nCTkgsEeBEBSa7EXE3Afbnwo4UbGYscj1GLe6r2N",
  "key10": "5quxDS9cvrbFcxfgvzXbu9kfLxkvM1qZcKkA72SEYhVcPxecCmMgDPD5hK6WY328JkxDfWB1zVFKmgLJdizh1Waq",
  "key11": "2oMbtVpmUT4koxRBVVaz1uMb23incjMBUXXim6kd3Vm8B2fGeNueJrx78B3vWzbDSVrHBGkeRP1K1pQckUgtciHP",
  "key12": "3RpUVzRawWzfrEd8SYP2r8pojcBYvvBx1BXbYukmNPsRwzaZXv7UKQiqfVMWFb3Tzh4rxwjPc3ZH4jhAxMeQzJua",
  "key13": "3rN4NpsjSeFeoXMUFNUQANqG2sNQAzj82Y2dLMtDXmo5FYPG1GcU4pfekzx5L4hXJ87ZrwEnQB29BGbDTLurQ8N3",
  "key14": "2CfKWr9d9pmKNzWFBJFhboTpsv1QMSEWSJcJppji9xaA1ioU4A435T9bgpVKQgV1VSe2tHgNvfFQj1ZCimMWA3aj",
  "key15": "2LwUiVsfMD5JKJsdYr6Q9ta5WVcB9v1aHBmL5EUcu1muUrAimqdhXGvHh3i84FJdwJJyGr5EfeqthftzDGK92ufy",
  "key16": "4E4gsNKShb7c2pR2J7AQWLn3XwNYow2WqCUQ9u9t7txyScbBakKBVWU4juuTgxywaG9JqLDzCkfujyZG9fM6P7vK",
  "key17": "3hx2vuarfX233WqZYHGkKyKTgkoa4935F7SpfGBKt4NuVZTQ84RD6tNTuUmFRort9EfT9Z3az1xiZdnAt3CtwKHQ",
  "key18": "BhzokMq5fE6yt731mMfXdcLayvdK6YSC2QvNg3ocM2wg81eofku67LDQAHEgBabke86hAX6SVCwPjDMjQrR6BVf",
  "key19": "4JNjYKq6g7yNTyEz9PmUekSkrmkpfzc7q1EFDwsXJ4su7NU8C4WcShxNYZ5S7kR6B31rfDzURRxtBKEyMPUzwZL4",
  "key20": "4wVEnfqLXyp3N7tZX2vEsoP24piEuz3ScRDKbs3PHPKwbQjjmnJ5CUepYfJsZMYKRhaxSqEWt4QGUvJGSZfTtSoi",
  "key21": "2Jaee9DJEcKynUMgpXUieyvmimL4yU77wjQMaj7DfzeqSCg2BjfpctjroAhUW4mnGZQyh7PCi1vHcvkRmAWJDaHP",
  "key22": "AfG3Xpt9CPgXawX73zBzF3h6BmjWyHQJqbKyWWeSJaCE1ZC8ACHCBTgERJbWqXRKrpe7MuYepFd2cz3ZxTmXJkm",
  "key23": "3ghAVyh449NuFRMPTa2i2TPGMugb9ZWgUGPcdfnssuaWNDbBwM9xD8YxmhtshmpUFpXD789peMnJ4yKSTfasM477",
  "key24": "2ahiVaLTGv58vGWDDTnJNb7P8xgmAoAL3NXUjDyHVotMfvynSqgJdsKN8G1ChAroSaVL9sMpfLGyuyMPkEZEhNFt",
  "key25": "i1vqLDS1ZhsaBvePNhyANn5aUWdcPDz3uXPdwM5As89HcuHRs7V68sAYsbCrEFFVHvBFGUfXWvxBUZEbFsLdoc7",
  "key26": "4jXq99jkJYiKxt4Dsr1U7fmvixHD4Y6zL7uRTBp33YKB5majcYjnY6wCTu8d1DXcXaBVEniSgZ6Pfh1ri1gBKiG",
  "key27": "2CcsNRCXXEbEHepkjrdUYK42ViyRxAFUy4VhaXc8DAtSBx4RsRVRgXYCHN6g8NFsLgZKFApzpTwBPNfC5Qiwff6g",
  "key28": "2KF6hqvvnh6ao7UBvQ3EvYZdC61JbXWpNFp33CT9RDhFqyktvigqnDyA8MBrLKk9rfu4CKVayWobfecunVNzWnHv",
  "key29": "5cBXuFJCAPUbxyXRpYe3DsqqvrCvvocgXXjNXwKijVsVqPxiJoq5VRsjHyXvoySPqaY8biAf2TrTYx9jtHiUHQ9V"
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
