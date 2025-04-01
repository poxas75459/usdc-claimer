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
    "nEyJM7Uy1dZgMny4WxhVnn5xKH8KYZsdioPSkBhhhyTbeT5h7jvG8vigDYAtvSQdEit6KSksuP5UKNSxPZUn47Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hvm6kdfV9RASUVWnqExPpbd8hkm5mfUZcu3dnLnesYwmfboV2h4QKGKodQW31Zs3vSpayCpps7LUXs5A3nSkGG8",
  "key1": "3pryDaZ6bigjuLg7kyc826HsxVvi7nsQTMhdP9KBdz17imsrWY567FahEqahU125DkyaLDbFAPri85Wa4oDR4og6",
  "key2": "3Cs938qmqproVkoeYTnPbM5tgF8xLM9Gr1kyLXk52tTtwGPARa5EN72CH145WNJfYopuKpYMAEHGPFETyFLc87tG",
  "key3": "5m2BqsZqt9MytP5EUwgZZ3miqFEEzajpunDyoMvfr2mHSRvVSJGjD8QzAZXUyi3ngGGrGUhMdkGcCPGieuYX8otZ",
  "key4": "3SCmh9YXirZZCCUnVNKor2NjuzWdBqxzMvXfqnDoFFj88gMykneMJJAS3zUeSdVR7ivGvHQkYNVncXpG7de8vRp3",
  "key5": "5Q3Dx3rGg9yEXAgU46CW8ygSHAXriMnnNCf8V41g3AQVBY5Zg5sA2LtfhaqgwV4ufdMaLY7dxmbcun1jKWbxi67n",
  "key6": "4TQ1AZ3qmZzHh5aRwTXXT7YimrS6vgqcrirVRYjoTkSf4YY3tpbCisttdnQ9oBhij5VhKXNpb4xhEVErVSRJCxaG",
  "key7": "22pVtu47ezWD2zeZjoXkRpupWFMCkkd1Q39yGB2kLqPRwawT5MdL2ofoAhB3rCMtudFppLaamkSBdoyGGBjR9jee",
  "key8": "95UY63e3WA6me3G51G3f7d3rL8PmTcvxH2ayFoFAZcrYkzsWdzLvrF2XTqnqQYuhN6BcYxbMk5fP1fpBYUor5aa",
  "key9": "4geTB235cbfbg5Wi1jq1vsEQZYzJ5R36ScHJmECk8ui8TkvW4Xk5FjA1465kjF4xqwEhosECUcNHYd6zjtZYfzid",
  "key10": "4z8ki6VWi4x35EKkUQeSC6UCNkiL8wsdKWB9317xpfGxGeQCBap7QLVgjA2XNYtZ1agAeNASfW9dmHPouhho9Kfz",
  "key11": "2yCjnDfx4MpkVvUJZeyogoitPEma5bMxfAKRAAXbQcAoiwtbWP8BpVQVpy2x4rbhn9HVXucfZ9UcSbBhLq5JZQ1e",
  "key12": "29zEo8z8gT4KoMJoc2WqRuNtj3vUPxzvhrZQnroXznjFQbDGwWjDL6pLLZ4RYKLmXnzTmA9AYJ4t94mr3Kufm21w",
  "key13": "4fULkysh4u8WQUtfjbQ9WNBfZkFp2bXtcZY2Qepw8xWvTH1ia2GoKnGoLusGAgUgdJss4ak93dhyx1N6wbrunwPH",
  "key14": "2SMrhqcHKKoLjLrqTmKsrcjUurV9ix7sZuaTdc2Fq862As7mKFED3QkfwTfnQFwyj3LZEnGeCMUN2ciASu88pc3T",
  "key15": "3YcCh91hD6pJR24MJ4jdowUtVbYuHJQXGdYf2vknckGPNAEuWQTuF4kdkRpQtDpUF91vYCyWLPWETfXtnPz9HKeG",
  "key16": "4n1ZThA2uhrBQ3DiTRUuWQtxTo12DH3QE96FEdxFsyWu2fZwaThYB2QPoCFZ7JL25QBHiQ8LXefyy1PB9UyVfUqv",
  "key17": "3qSmagwtBepKwfGrqNH69tu5ScPkdiRAg3FypsSqPxgcwstVhXfN9QAuEqJp3KzCGrxqkdcnFnhTuj8uxts6nmBy",
  "key18": "31r38NBFQMDyrKKSw5KGzQz8jNZDY1BprdkGm1fo6q3U96RU9fZ3mNGCjwbBVUgXH3tkJCUt3iim2nMUBpPzFK3U",
  "key19": "Zj7tRY8Lyz3xN6Jsr3Y5WKvZkt3hkHz9m1E41jPKV8jhiZXUpMZYDwg1tDSknZTGNwU2qMetMbXvcstPDVjR5us",
  "key20": "SeJTDSmfkdmycgjxDfzBB2ockkRkaN4xfzxqGdWTDqBseELaJ9PQdRVAsR4rytrAFcSnydubZ2ZWbFsWennx4Em",
  "key21": "5LR89otFTUvgDD1yP1X2Ljjyi8xVsNG6A2dYY5ccZNaQnGJvcBUJd4GJ6rzjAXXxcZqBVwjmBf77E3B6DE7HpphF",
  "key22": "3SUoGFGUW7xtStk11PBQnHbY7f6W8ErAtphNCSPPe74S3HonfDMPMWvkmM1ZXKQJSQV3i3ocKbwUPmGmUd7nu5Qc",
  "key23": "3qXuij4DbLGwDn1rvkUwdPtPVyrmQL3bFaH4i8vDEz4FZjiC2S9BdoSkPeZiwB2FApduEY3y8v1MJFeRfT6e5ozQ",
  "key24": "4FcSeYxxH8NXQgvwLokFm22uTkiY6qkVCkTynUJV332XKNjgoQ6jGKLahBZknzmUM1qcRNhicmXAwE4pxh1cnqv9",
  "key25": "5mb3irxDWcxXQCyGURHuWpaPUb5jsWdKvcPW8TgMMVFxudqPZwZy67TbX4FjV14Zsk16mp8zxRCpwFaafvrr9cb3",
  "key26": "2DsnEgbVHg2DobKSpGqqUniGqbBvfC5CbwLBHWwJVbq2LYnK9Mx9PHpwMkzkfyGVFpiMYM56BHf98EwRs1ZWaPFU",
  "key27": "4qxdR3sgWNBzSUkFUxoLace6F9yAGNKCduVCqB2jE2fmnsB9gJzXmMMRegbJRniR82JvrpmrkXb1MagdMSbYyscQ",
  "key28": "4DVYXvGn77tG2UkZ8MsSC7QgZ2YYUsmyaFXNavk9MQbjHUysSgob3XtfPonK898oywPaagDLxCYTUxbWQpY5isH3",
  "key29": "3a1PDLHAShJSEeuwyaM4ku5r7JHVTkGpysiHCpGMM31K9rkkYmKTtAJktxZc4nkbpQvpQLEGPt4h1S8Np2UEUdAQ",
  "key30": "5TvDUWR5fMTiFbFFhW9HHb5E4p96DjzQrmEstrETDG5wF9jVPxxXaBxfFT82sEBGvrct5xid1qtUZm23yczuXGJr",
  "key31": "5r7g2sCEm4z7xSSymSBfKgz1z8xYPCGkjLZtLsmYUR9CSQhTDWG5Ai3LkdvRk3Hvxx3r8oez3sDpUndhSDXYqtUR",
  "key32": "3idfMr88gzPhP36ab3pwyxbi8mxPYmu5RBu75oC3BTP6z33AN1ED4v89YSzX2X3VHp8iKyBmAAAMyUYNzVbBembp",
  "key33": "3sabPTDrpow6hQrCLB8wtwgU3p2AZaM4JmApsAvwXi8AVcNgCVDcMAmvooJmNbsMbQfNgxHKekzFKwVphDtsdGdy",
  "key34": "3v3vDgNujFMJr1M8WFL2J8YWa5CeQY9Z34M23jFt5tuK2Ce36mXt8TH8f4GA7XSJQe5aUDhDKXQnk8AWprWxoQYX",
  "key35": "p4snST7qq9XXFcoyW1KhM82feUw2bNzWMXK43SBNy718FRdqVcKKvGJZQ4N8hUmxHhfKTuwcu5QeRdhh3o5cWV5",
  "key36": "32noSMBdYRjQE3FAnpmx7EznyFsHzMkxubfKDpoFLtxFc7f5jLQSsJCM218J9wFppnc1QbkW2xMnh7qwRTFofuU3",
  "key37": "4brJxHU36DpzX71T9uCocByGgc1uh9WjPTdLM6RKqaszrWHbx6ETMVBMVxqpVWPXEWRAMWtPHiwjdoPjMEy1zgTk",
  "key38": "5RVg5yQi4q7utvxmHNSZn8CDjhfKXX4pGW7ULrnfBA6Qi1jYzWyXXsp66XZsNWwrhySbziW6Gkk8tQamiBTGrPN4",
  "key39": "2xGMoaQTMwrjT6SiN2oviVvV64bX2wbEQ41GucDiTmFf5PbcwFBkEX5tKiHby5if7gBVxAjHALdfo2eMMf7STUDE",
  "key40": "2CbbD8wcf9kWdoEAV17XRd7Y8YTfsePC1zCtGkqu7nyDDHMQtAu83L1pwefCNbkvkxmhkeq9qf1A3b17Xr4HrR9s",
  "key41": "3XiEfagB9dPivCKZBuj5o6ypJWfr17xkXB9QwephaVAk8w8fw9buyT7L7mFPkSrM3r5x23HrchvXzphugsr2hFSs",
  "key42": "66D167nyezneRxU7eVFDoD8DEg7N76djGmKDh2VdK55AQfuZDNwkqmxQy2AHB2z6fh8dxeEHZgZiGGyigbf2YssB",
  "key43": "5igtNRi5pjLmrEoiyEBd6FXuPxkiZmmCsewM9TVSwVHz3L5b7TUEpXCAfPJmdbwUe5k3BMjFYzecVmbo6EWVc3fQ",
  "key44": "46hvgnxrz15XdnUMiT7B77f2ofZj8Saa4Rd6JVS24N2hn9U3feUa92fqgmP2GiLNkatoEGXEX3HKEQq1NSFKaySz",
  "key45": "4eVTggbxtEVAvGC5SH7S1pMaemfm9gPCuhTk2PsLWA91gCbG6FqhJQVKxRByoRKv7M9gMnq5k7biJCRj8z4X2sbh",
  "key46": "5Aqx2UxGAJcDWeHRsWHS3M7pyAjdzoK4NyhKvfH52M2nCavFHo6BCGUXpZDW5neoBkUsX3L2DSZfKDB3XCrwGwUN",
  "key47": "5qNb7Ku4PfZt9xsFoAcePif4h22KpjnhbpYqGnE1oUZtau8EMh5cUUZmfbiLfhjEwfezPNphGc5fCdC8eUg3HCFA"
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
