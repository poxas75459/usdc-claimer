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
    "MtB7Hkb6x95VWSKjsih3MkvTGFijPeiYM76UNh5UYHS66rRTmmhE1SQH25ZeQWwBunKZJDL2WYxjCaLgxkFQofr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cTCJRUkbcbaGHCccDJuY4Mnbwq1tQtZsNVhvmP1UkqsdLLGeSxrDanaPNWLHiEc6swpPkbreBfbRJvQrwFzx9T1",
  "key1": "2M7aQwDwbkhnfKnWrEWUExPkmW89LsWjEVa4wPTLS4tW8qCxpTp8bhXCBv7A5pWsZkd5Easa96CqCGz6JPHibf4j",
  "key2": "2BQq4jnki2A8PEnTBt4QBYZToHby1W23st55hY6WJeWdorSu7cfU9WSRVdwZk7ARjRe64jQLBqkg2L2MP3Aa7Nqg",
  "key3": "5RHranTVKPbcY62apsEikpD2wp71WSoV6XWWz9bhVy4WfqWnRYqo3XwPzLqoEtzDUW3TUrHvaVdjjbmdhGeUPFPe",
  "key4": "3z9X1pCDDWn8NhkayhapawzrwiECuHhRECvfDGp38QfFeVCGkz9UdfoctGDysB8knq3D7zVCRqPvngYGbFAAQQdA",
  "key5": "5NXzuFDrp1kj28juDntax8GRVuLCsdzhRM3MLGk6LShZsSmoPBc52NNWosoA4ajdceYUcAfUyjE7D5c1YJhxeeei",
  "key6": "4sm2fg7qnEX7KfQ236RP2uKBj2HvWJaPMCf5t3khMfx3cE4HBWPggKfQsYXkTnTpAw8sjdjczrKRX8oPyUK9aL49",
  "key7": "48JNqMbYeCdS13DKZoQ5xH13ARA9tKjKa7E5n9jMVu2sF23SvwtFbe2erGXkA36QyGD9A2AUmqR95u6obnVuyJnt",
  "key8": "49ysJweDToKqmaCoiv4veEzo7gZN9bxYSYH1bbESGmaG2X2t9q5MGpFPtnhYbM5Brmz5fM1Nqj7G9z23XUsFq6vx",
  "key9": "59QGs77qcfRQVBFqrj9T1H7UbLYNgEjwd8xBiSgMw8dFVc7RpciiSdhCoSunLUp97PzSyxmKDLLJqzciW68sP18p",
  "key10": "3sDB6wD39K79mF8pfFTC4EGtVKyG6zsDC23vSCDqUHSjkEPrQXHhqQbfY8qDQFeSvnuTs4mH85aHFm2hHMYjeBn7",
  "key11": "3c9pe3212eyXvaEaVY47w33gBn5SdHvQUdAWy4dqvt4PbBM1NoGGWC6L59WrRbZYxxX7ep3Y3hr1e1yjPE88tpQ7",
  "key12": "TCSGrkvjcahkzZFEnrFB5iG3qc9uzE8n5W4ysQ7LtUFWD93hcFfLXUPyvLsf1wyXmSpDNGGswhjy2jdmg1n7hHT",
  "key13": "56QJCkh3aBmbZJQkPsRnYLWNBtEZwxEsDkAvxzTbcupQ7mc8XcptsqPwPpci2FfLwtWQChrTnAbYeQQEjozvSUFK",
  "key14": "2tiUhJpnzJbYNqhuT655aFgjfbdwzhDc19mJUhoFba3W3eKZtQj4ea3X8AS4eJhkyrX4Rw9ThGGu5t8ZyZndkoiU",
  "key15": "2tuW1dsf7x5MUnBqn2T9U2EgNZdFQS2dXo63uKEiZM7mT3oJgbiHWY5QuskYwjVTMD1J2UUfF1hpnoQMb9ZXiuxh",
  "key16": "5eVfytA3LDDCX5gzj35hskqgNLJpPnie5QTz71EhSXHXMbfCAhc5QLV7HtrLpFiQic3jSgRrBYawuSwpubTqrv2w",
  "key17": "3xLvHFWTmGc96orJmRpUmiRF5qk4zty7F6H6qWB51HBDjvoJZxv3xttQTxgoSGQRwXa6gaVfjekhYPNWbthPmNNP",
  "key18": "4CoYNM63CLhqNCoSJZsX8bR8SC8xPZQxdAHn191rNWw2Yy7cLammoZBb8AtRGBnYwAmbk9SrQwrcoJw4LsYDBeax",
  "key19": "5mZa2s2ot9sWmG4oKJpmG3jPaEXRJZVRSP8qwWKjRLj1gxniqC3JzEFAKTNKuV3cn7Weq67GtMADrzEZNvePoBnm",
  "key20": "4Xz8CAyY6m83LKHPDPPn35jALoqQzcFMeoAU3pKdreXfNMnvg5kFbZbrHjzymYmBfaUcs2bL73Ypu2pdGKRJNVBB",
  "key21": "4impUAdwsHvDZLBMYB1E3KsciFscC3PKunvScMiJBCsRdHWELdHEcu6i3b5mnNCbGciQhQUkXSFdmBwbHvoLmnf3",
  "key22": "AaqQLrset4j7df7wtfiPqfqBswEaS7icAUqAvinbCEYPcn4e4FXGDFwzLQcJaWTkKrYvCoZPp9wr8ZDLA7ohcy8",
  "key23": "4pomF4HsoPJvWfxbbR8kqneJgM2xf388zeNGReaQWNvGtv3j38A1XPrvBJAjWLofsPsCjT79s5f2uSyyajU64Jri",
  "key24": "GBnPd5HyywwrHorvtvR8guH3Sm7in2jnekVE9AB6NGfDAAfEJ5BELkezNrFijzqjqqtgAyQWKygxdFiqvyf1zTz",
  "key25": "3dbT6mkPsYnEuG6iQVVao6qyngbhiaDrkjCAZKbC6WbXhS5C6LVGMArudfB8sVCQCh7gMFNexAEnNvHS8EMu4XfS",
  "key26": "3quAFCjGn1nVLBwZ4XrU8TzumpMDxoD98LujyAsVSv7sK4CxBqii6fzk2pqKPaHwX8j9qtu76PkLYJVi2V6PKsxw",
  "key27": "43j8FDZrkFbWyuT76rHNSyHUYfmuMbPWLHj1m2CRpq9GWW5VzbzqFKzY8WBCsR4LDAgrv3vnhifQRm5jmHbYawiT",
  "key28": "4na8Bbpk4DSZctQDqP13pWbgNDSR3miLushd5Eu2obzRJtZTCxQRCCaUg5qcNXMW9HPiywvdW82UfC8QdL3AsdkU",
  "key29": "4SvCGsjJM8fGt9cbV4sgPx57f2ZKmeMnFS3nNPVWNFNyu8MsCmyzUTkWNwtDPWWYDGmGCPivAkZtn7Drozc7nk1S",
  "key30": "27bK8K5oDagnmBKLpoZWTjRNtUbds3Gk7B1QzBksqeNK1mgVXXWcwMHrPBMhPJ1LBbzQo6u6qkU8Xk4vdtdKcRP7",
  "key31": "3z1gNCyRhpC96NQv8UmV28Uis3sQ93DZSKhvzeoqq7L9zF9irHmxCx9b4k9b6Z3rGrrgmsPx1KYyzWRXAczLGFxq",
  "key32": "5f7ow5ZSFnnAacMrAv6Gff9rfKAVy9ub8V5YNf53My43YWjitYopcWvjLiddDyzj6D4YujwiNGsxo4Fzi11sUybo",
  "key33": "54QkSmqHcLs9HWtS76mvaB1eovv1eGKXEfVge9NQGxMe81fjrchbfqbUcB3jZaGyB5bkpwB4X7FNmHWnNHq8V5Gd",
  "key34": "3vusLwufJT4uDggdWR5eP1iQbLaPUKTYTV96sZrrqqr7bSdMx534WV7gsnYXUK3RmrZcj5H5oooYqwib2z8T8SkJ",
  "key35": "ctYah92kwnTY1ripSn8Vc3w9ecxjCQG5u7T6dwdoBNYrgXEv7nURBBDqCvLqdxZtEV9iTt2uweKoPLNAkB2fAET",
  "key36": "4qbLwyprB6DAgsU1Z39vEx2EmmUs5N3ANUMAf8Q8BxUx737YeLYAubtycvG9sdrjGqpeQpkkxq78KBTYa9irFhzp",
  "key37": "52zSzV9zEboctihD8bNY4SUdM5cSjmHXoQL4TGhKmoXfruKJa3F9bdLHGx1DiAEWbvUngwwWDC3o4b2HpQKGmgTN",
  "key38": "4H29Zrd7U5e3WhWJcvRPeC2CZFJFLvf8XWAMGgGCGqW8hJuKyBQLzd7t4Xrh2YR8sMvDg5UatPcx1ynLvKaoV3Fc",
  "key39": "5yyaLSfF5XEANHZMJq36iXp92vEVGX6U3iwB6SAhALi9iB1uGnbvcdpCCHKWPi7xFxG6WK834jtm746Fs17Jb5yA",
  "key40": "3GnRVAZgWB7RdVw4CHKs47CkfvG2r5VGncfNVY4rDmsCrBrB7y5SU1dSWkg4wnYHUpXznLny7m7NPiuzywVBEN9V",
  "key41": "2LUdL7bTEqJa6Vx1Lb2gcBZfL71VjZJrygRjybtiLJTXauEHUjAyY5xa9fawpDE9AjAFZ9kFLWuRUCrBusLiUT37",
  "key42": "d3hLq51v8UZLxAV6KncGHke2ezWN3gn1GAk5RYdoYX4Ho1N7hm6AtbugV27UdXoTjnZw3pqFRQhaMz6njhgD2LY"
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
