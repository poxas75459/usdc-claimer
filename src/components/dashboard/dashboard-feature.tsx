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
    "4vpyZb9H7YWPmRC3HzsYLy7nvyDJvmxssFrmcrReUbk2b2q1B73tSwCiAM1zdCiaWFd41dmn94cgaevHgui9my9n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFJ18JouiurcHvZ6PncTo35L5cnZd22iFh35Lry4QMmXurJifGqge8KgoFxpaR9icwPMQE7rQah7jJYxRvojY4D",
  "key1": "36SdLVUtc3oHiCvnzL7gciueTu6fg281wGtQvoPhWhn3cpBJaHvPmQdzQ49zFLawS2G8vRagCtT2FxsiVBDbJcdE",
  "key2": "3xKeg9KRCcwLE6sSBC289bhKm51FVKkBzr73UeqEgLhaa3BQBBkVw13B5yh4p4TDPq916KhPhPgUTuvseUErru47",
  "key3": "2MJSZhUYssntWjxUPCtTEPaRoJfwNhgfC7tZ8s7YHTjVSS41Gce27ht45xi5gr6pQVhXg3scMisLDhE1sXPHCJBa",
  "key4": "47wg4dajEbDkfTmeX5hw48TmPwfmXQx3HgB1Ygtz2dbfsYgwhqe7VdhgSpfw7peWWwtqrRF4Hc13Jtxzw1QaSqiG",
  "key5": "5jszcFD96JZq32SMEEiJHcmeuBCPUbkdELyFWQbb2YwR8oWzi2VWpDeR3pHUB1CKPXiKYiDEct7oTb2rpxaNYqae",
  "key6": "4Cmd3PSAPBkPaZE1eHyrW7m1pg2sewgWrogueSczQjBnssXHVFCRtdRjCuFRzmaRDSArrGAqMm5zXU7Kxhy8xUBY",
  "key7": "3hHnaZUjyRdBAFp4N8Fueiz6Hhgaar1fH9xEhsWGNNCbVNrsBPXPYvkjYJ22aTJK8gftzAHAUhn5pZKC936Htuda",
  "key8": "XKci1JkwsFfyPwpsDe7gXgxqJn53X7uWJtq1PmR2mdZhFiu6CcPUfCHUPrZ9xGCYzkMa87xeLzCLbwXzaDC51Xa",
  "key9": "65pzxk9fCYos6cwDFztacvi1FjAPjWfnuMZTV1wyyTtZCV99Luc4YmrXscr5uMuXi1LYckrQDsxgCw2MBb63Qpmg",
  "key10": "5p2PwfmRWVMJRFQcstGQNNbtRz8Z4qtUGa8Rnnttd5TTUY6JYMZgJsZQ6wWCvErtdDrRhH9UDTqW7FEUyGxGTwhg",
  "key11": "4qYaNRyV3htP2XwoRrNaYrMQMorgQTYR6e8ekbVu6G5j9RA7HLYLQu1MvbmxxrpSk8EtJxAcYcSP8qquzPcA6Me9",
  "key12": "5KAkr1R2uvWVXLsetGp5JDCKxTheC7n3WHSDbdgNL6jhLsjnHFoXMiHYhNabNf1x6fTFtubKBE5Cw7bS6R1TFuFK",
  "key13": "4BBf2rfR7Pt7c4qdaRaJbvahFYNGxvUMW1TBGoj2WtauojzpipYDrCRpVn5mjUMoNB6V7fNWaf2vFbcoasTr9XG8",
  "key14": "4cbqLw6wDFRXqJjS7qFNX18ugTu7yrVHg7T1yFhi51Y7zocPaT4FL1eV7EqHRTfZPQX4KwEcAFK42HaDzp7ogk1n",
  "key15": "3yx1TjasUQRpVjUV3Tr9vBKLnSZqf3HjwzpcRup3VHC5yAqUzHz3fGkamqYNVTeHHNypBNQTRzRtNxFjFdzbPPfV",
  "key16": "43hRLg4pp4VYu9fygPDS9hcWu9ox74qMSbLTJ3HmHiStWmY4Y19jxsd8WPUXeMCNnAwTfhUeks2Cp59h3Q78NWuR",
  "key17": "5DmzTpiEXNW8F5YwpuYc2tS4QtRRhwLxgR6Xt47my74aChPNBBZ3eBMwGxgs3ZaygpygWj82pB4jicG8FsYy16jt",
  "key18": "4mKD3kBud8tzktQ48bSX9XudPVgttK6C8BoHYGCaeeaZpgdPhujgszTYB2DpTZudHin8VYdKUcKjP4EmjPP9rzGV",
  "key19": "EYrxNYACKWKqW1fC1KTSJG2YuUNzNysYgsRAQ2EVzTrzwWV2EqYfeEZTxkvajDqrGFDJsxGXaSU6fg65wwbnpEE",
  "key20": "3v1J38KVpLyGtmTLHVxTUQPo4tbpoJre34Ejoxi4GwFahYRfAcrMYrHzuthYi4b5iYre5yghZEvyhjfW8YWRH1Mb",
  "key21": "bxM5seeWdzNCWy9qVaEDJfZGc2o5LqrWQRg5oWHnh29njB1cmp12zNKaURqyofWSGFscXNy5jsfwG217TyMJcJ3",
  "key22": "4HhT36RxGZekRQyah7PHrXgk2PtYPp4m5BXfKFsRn2WPn5ozvuaxtvoVbgJKER7sbLmZ8ttYZqYLDTnf8YzkHP2S",
  "key23": "3pSRMPu54PSJmC1Jgm9AtD9ZkrxvUupMVKM6ASmH7SWSCRgPN94DFEYFEnd1WN8BBcxJA23MPQ6WWUE3qo3WBu6W",
  "key24": "3Vr1vefxNZXCHzSVq5vNobFwhpiWg9m1DzWdMujhcg3H9WCrCPBMrem4cjtduvQjbEvRMhfUbRMvGESSQG7z2Goh",
  "key25": "5Qiy2UwcXNQCsiqGZb5uQGrXa6QaqNkoTAuBTkeGvNwaYWh4vyDN8aQtMoEkLDg8Fpn3fPH8uis76oRRiVZppAtc",
  "key26": "2zEEGGzWcbm9qLk8Bc6uR7Y3aMxQGq1JYvvVkKTCvExcBcKZFvFZHfYuZWwrBozpSCAuNLn6tvxVg8ZbidHbRLBG",
  "key27": "2JgfH9M6RRzeUY8pL4RJJ8HZdT6fFFgTrH44ayFWmzVW6j2qGGQKA4gZUiYcL2WJxW3wjrFrhEciVB3X9i3q6oQY",
  "key28": "61iw2ZfX2CaJ7qokaf1f3JZPWufeGfTkbRYvZeQR5XkduCpLGXv6ScEK9Q57C1dheawjyYkMUdSwbt8V4VFm1Het",
  "key29": "hxzemtXxcDk6RsvVRZ417zVeTn4MVqCM5LepHTtwYG2S5xMRjgaszbLZpdduKnkhXJ8hjRfR2DXuewZ8wfA2dmh",
  "key30": "2NEE4Rp7JhZ7UV8gZRtedmGYLS1wh2phP4mTRFRrenpQeQPcHub2qs7AvHE5p7fkHgEtHi9mYxvN7GNF63nFKDZ3",
  "key31": "yaP5KiQKvviBj1J5kcLQoFVS9q9sFyeouzQ42uvx55fzLaqEJiu75XrCiv12vwqB1L2sifUCsECyRfTubkqhHwj",
  "key32": "42Qc2aFA8NJWX8ujtMxLzWoWLnpK8SdbqZw4r3txaVpkJo8AQq6pXxcaqZF7V1yJenzRJzW7GpZK2vPaoK4GxsZT",
  "key33": "289GmpkwPGpvbgKjvVM6jN1TDW7TWcnr3o5D4En8P8vjPHgurudfcQjgzqVZsKzh8d6f3gDLZYngcB9NcWEipfik",
  "key34": "5aQ3gDZ1Ux6HWWhWPutW2nyE5DFp6RzHqCrpFkbx951aA3vnCvFnSKpSD6idLxd5xDKRiVQ8nxgypJMd16dEuBVw",
  "key35": "4hSNCyAbez8T21giQyRfW3xgjJuq1Qzu8TBtwj1fTBCR2y76bb6vmADCEEBttFfrAtsJNaPpyZAGawpjHZqXJDSA",
  "key36": "4BVfZ3tdseedqr1QRsfJVd8EnknFz2hPFsm52CmgZKrQCrj7Z6xCVRVmwT1WbTtN8JaD4RtiVRHgMz2fs4BLjbmg",
  "key37": "4186iQCaAfeC4EK6x8RdRa4ioDeU3UD9egyq3omvKAsv7JBk5asP332nhFhJEbXnP2RoRp3fgiJrnwr8rqGBkSRg",
  "key38": "4iXGrdTN94FQoMMi4Mzqr8HeznDzxvz1z88GxzFtYSz7fN5obY3gY6AoWyeoGvndvfWimaxPWUZMppmfWmwMLZyA",
  "key39": "2r3vwt37NsD59XyCbnAC7dsaHcVMfp5dfnKktB5sMtsJA9X1f8qu2UgfJMmWB3qojwAgqpvSUh84qoyoaLra54Qs",
  "key40": "4rVhrrxfE3ydHCizXZ8Dib8xQHnT1GUQvAt4PruBBv86AoqZRL1xhUpcQcAGk47f5WzBJoiwKkLtD5tzW46iSSQf"
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
