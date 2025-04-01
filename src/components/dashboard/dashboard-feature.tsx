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
    "5hh3gJDJZwcFDG7B3iH2iF7VJxEzXGjnwTue9U7t88UqrnWpK89Huc4atvHGEr8aPUkHGnCT3yrDVQrWYHd5GjZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37enZQphxAyrFSEkJhJtfTU4bhdsLP5xFHRTfnFUMiaYY78sxvay4gnNV7SDqoz3vMUAXf56T5cqqokv89WZCBYC",
  "key1": "3UQMiy5MCMPdsTtSwnV8czN1TnmxWyBjgAeM1qNzJCvW162NUg1iuHe3w7MUSeQyMoga8tBT5ME2cAeK4uwCTT1r",
  "key2": "5b6rqr2mfBcBMafRRYpwAVZWgMNwWrhVfP2DpnpjGNxfsDdcfaD1Hek4z5P8ibmwWQDemzzQvZvaG4doL22HW9YB",
  "key3": "3KhD9jkBHBxCkTXgk4q7hW8DN7z7rEgAmCeTt3rPGLpfn2nEfGTjgvFrpHzsQTQn2s68AeHPK2eVCUSCME8Kf2b7",
  "key4": "31yorUL9y7qL3PFNdKdZ2t2TsM85GKLJw3abRU1coCt47K6E8eaosVHiMjtzhGUKmjTz831zAQRDsXuTaH3Px4Sg",
  "key5": "39Ydn8uEFqHDdAo4TzLDKWBTip8NJaNkAFbM1FZPyBei7Zu46zFyhY9pEkUAYzGXwcwv2R2wvenQ2Vk5qbJak42H",
  "key6": "5uWa6PjPnr6aMf5P8Ch6BxCuHYjqcZ8M1rE7sPQEuu19SWbXQyjodQyjBGhs7iv7FQrDZV35fxB9ELhVGKyH5bvf",
  "key7": "2zgZpqMYfHzBqztJpjRgrVA3CmBNTQRYuaySBSB5T9rNsdeYv5oHerkUCigQoqHUL3pgWGZ7iKx6FdRiUnyJAFjx",
  "key8": "2NwRr1RqwbAu6iwtmdTteXXF2AYY1yu9vPzLCa8tfSnk7fPzgv7TsCNSbA1MFNEsTz3heY47EkE5D1ATzAd38VRU",
  "key9": "hW8TnYA6S7JMEdrc1FvPSY2nYyERzsi5wHu9N2TghqX5ACt7KkvMtN2KJnPCYagQeHRCtR6Veey2qUkmW3Khm9R",
  "key10": "3a58emyjiyEFSXpf2YM61zpG5HusJS5K2xdkkYUbeAFp23ZLGkXagVYGW98b2HQUZvubGzHjarsKW93S2RoyHB6j",
  "key11": "gTWWjhFGgaK55r75gyBhMaCmQUNFHdTCmmGtVWkc1Hz7fCS8Lau72j6569E7Qe8sZQ5hJNa3R9xBMX8VnyAj6vx",
  "key12": "4VZPVVeeGcjSUYuYiyXUSbfhS2LWn1rswpJQ9zvtpE4BsJTRMtPygCERmgzPXBpwJvUyZokbzfSvsq9xYPdnSGGP",
  "key13": "56QtQ25kpfHwUgH3CJw3v1iE6ZbYAoSMZGJkuTXXyZq7cYhCHJMQWYh1VGFXYP1uKjfCARCCHBBUkhdzQVfJj7KJ",
  "key14": "3VdkR46Wpb7jwV4yyQKD7PPuSPh8tQX8kAktMDhqfKiMmPBEECQhGpP1fcBfoHDB4veDNRKgrCASLdPpJ7cPiAh1",
  "key15": "3L9ChNXtarruoGL6seJCwwHBvrgXKiFnozNn61GXZcijtVCR7Y3GCZiuw97pU7mAfj7dDCFT25DPnNJt9rgF7WAi",
  "key16": "z6REtCbbUmfcvqPCvtkDWhyQphAg67zYboExTzjLWUi2FcSAk3gG2bQLMDs2WJXLi3AgMgg6N9qxK1LizM4dYJt",
  "key17": "2FcfKPiAQeeZhy8zBzoDyd2dAogNLUmhqQRrmcmWK5p13zjpLWv9uynt25RJmTnQtcf4GMkKEMntr81pQJHWKuGH",
  "key18": "3Js46FrVJHu35QntuvGX3WRiypgeRSi9GXi7HM8dPznUE1oRSyvNDCVdgsfKE35ZDifHQoHNGDQbt84rqeRzc2cy",
  "key19": "2aQWTrWcK7TgXoC1me1Bvc5qRHhfq7RZs4eutstJ3pyeQTdYe2f2JvmQ6ffJrAUuwZ3AoCiqqknPBfZw4viNNpip",
  "key20": "2rFzPVTBbQjKHAvnvkziAHB7eGWDuLZBqcjATgBiPX3tzutQzAvvHA7AcCuatsiPZVD3p2qBg3B45KeLSjA9f9cB",
  "key21": "4NSEJvsPqKLvPRTSniGcHquA1rxQYfkJHoiUNMQe31jtwZbBdBDUQiJtTdEzNnWiQjThj4mQy9bXfV2VeT7S8Fej",
  "key22": "5BuwWNUTUUF3L8VuR9Pof9y9QSSuuXCc72MPso2dDEt5xxJJWbxS5SWLvyKqMcFMXutwvPau7kHnemVKCqipLErL",
  "key23": "5GznYpjsTaxFYyBpk4KJ1wEmYrvQL6qerEpNjrDEz5kUtiKBYbiWXt5k9Ph4SYzocena7wCfVomWTfu4aCzWQBFF",
  "key24": "5GUj7EdvnCH46s5rSN971pzi9S6gTaDBBXZPX5ge879aD2dcaz4tPWXh9TNPgUjhtiWjx41nmzrEDgH3gTG4pkEZ",
  "key25": "CtD7pp8VLjqcSPbVv9E3gqcTE4yjC4HNrjYFEbuT3yquYWntWCKVK2zbxvUykpbStzVUcQc2P9CHyBFq2AdexoA",
  "key26": "41Dro6qo9CcpXYLio938tYZ7cLKHqiGqkC9iSZ76igFSiiAjTTUr9G9WCsJJFU3wZYcWL4f8ubni6RNa2kF8c1p5",
  "key27": "4iqNqD1Yr1Vb6FanPew1SqbRfu4Q3Bkfs3TrBDw9kCNLkfiGyeoPoU6Xqt99z4PNavVN7CnYggRi7MRC5VjT5fxZ",
  "key28": "cGw5hxsKLNpADQodbrE42eMeL1s9WG2hdHiZHYmbV9gQWG41bdtDG5cTLKXwqY3r6WSpxyKLxeya76tiBd7tRhm",
  "key29": "635kHZZYoJwcU7vcyabcmJ3i6y5vbw7ZS2oXih8bgkwNbuWNKM5YyKjZKjenMKaaTkEmVJoBiK8T835abZ9NyHbj",
  "key30": "2tbx8ubxqAVzKqtf9sLgMUHEhzenPDnmb6ijGx8MYYSkVfYuTiMjwswALZewzK6JxPyTDZmiU3fVafugjHWdfGVA",
  "key31": "5vc95gWBbApEhXPSakhyDJbcdcJkfFxbgvgnjCUX2f6bCehVNpABoEdRpHukAHPBUrV3jG8FygX7yvzYHb6vpxis",
  "key32": "66f8BThCCafpUAio76rXgj5ckXi9NFw2H9fFCP8vtRATB7DovbJqhhzcSTqNnX4zK2iqav9BnRFJQ14nGbBxiDc4",
  "key33": "2WBsPmzqkj3BrZUyVc7fa151Nx7o2vpRrBkndQy1NKdMmApAgfWRrgYX31T9cHmYJamJRqmHy21zEJKFuW7Bav35",
  "key34": "2oNkLsc97c4ZnWJKix3Cg1vWNZBUinn2ELTBfYL1zwR3CjKJc2CKaMkJpJ2jcEGXzVxAHi7fY1Q68ovjYCXcVikj",
  "key35": "4PKFTAyzDwiV9Q7ssrGjmPiQy2sSqV522nEbHLhCNfumM9G1UdH1Yiusx6YjXduEjcMCTNe9HJ6kFN6g6eCg3sYf",
  "key36": "cdnebVDD6QcmgvH3VLbeckjoB3grT3WZ9g6KdD2aVW3xhA362cB8BDL24wGHWN8vnEPoVWGLzQ2Qvtix26oTBhE",
  "key37": "3W8AT6yNG92wo81kbnTg8DbidXL1aHeS6BpVLQyqeJE8vRJyjYuKZvRvEAVdG4hDZpQZavK299FX99JpLcL9yaJi",
  "key38": "y8Qc53inHkGendAQXvyBgoeFM9bm1Pt7NctPRRRVkrCSEjepwRurHC2FAXP5tSXbsd7zUViY2uSDAEqm2yVd7D7",
  "key39": "EZmtkd3TbhJu9FbzTzVzTHD9pNKcE5uBWxvvk7qmcWRZFa9p2KdqzHwzcHytLX4iqzGCGVRx6G6D3tZUkgfLyPZ",
  "key40": "63WcoJgaFCYUaJNaAhcPonEHHL5VUhX4CKUgcU7BrGWRzTFq5HoUnPQ9gAjq6izXN4BskVBQECB4p32Us81DHkZ5",
  "key41": "wzL8iMVKENupW41TGgC28mrt2tvJuRueeL7XDWX2BHTLsbns8vhDqiwg1G8eJ5xnwx8hx3uzuX9axStDSHnnKRz",
  "key42": "3i1y168gcccn69bKkQAbP6uPRjn74dHpU9i35kokUDmKLzCok4PGJcFh4Km7P8rLUCgg2cxBC9dZn5zS35bHcFQq",
  "key43": "4eAsiguUEbFz5EPqbamQbKARM6ZTB2JhyxPLxt8iV7Nf74DSMhWBX25CoxGQ2zQFXoSoVTgt8wnPZc34RFyFKj2c",
  "key44": "dzbLCU82wxt3DtmLJYfYm16QSxbUUaXoRE72VhhZEWuPcu69mpLRH64TcDgmhDbrfCtPmCpMZktqZL3CV8YQJJN",
  "key45": "zLr8kdzs4qfGggQP2orUaY3i4tb3sSWtChcuZSNtYBHLG3Us3392hcSEUaihvDviWKArNCSxeGy9iDnnLeK96YJ",
  "key46": "39maJG2RqecJVvse93gpfyKmFQkHbwZhmDeLNkcK3CL5NX4Y8ihHhyfJXnnDaM8mLpdZ4zHVi265nh5cNEVvAmW",
  "key47": "3aWx1CWijRT1bQ3qXn1p8TFfFnDeezpoLQkCfRHz6Tudvqc4EUztzqzF6GJCrfxY8F7mxiHCTmgNfoeL9QDhnZXk",
  "key48": "4V9VsXYnkKNMLPhXc1Krf2ajZS6Z7413ApudZc1ghye1xd4d17Wr34zEPjtdEn4pM7kzB2hjY85ZZK4qwuSifgSe"
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
