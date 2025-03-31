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
    "3vYHkhkWeEkpvi3rrcmBPwMSY5iPnqg4rerkhWb3L9uQ8oNRvEWh5z7Ura1ZnBGRq5urZwBPn8P6bwg3eiYqA63V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KL31pLFXYsYuV2cCbjJ8qQ3KSFCXKiDacyVfdBFBYVLK5fvhKuN8KmKiJuHoSZvbA8w3waznaiPYhxvKutGXCC8",
  "key1": "4YzEN2y72TvrmFsXsKPrBznJvdiUtzGqmA1RwEj4j3KVSgMBB7Q2JJa4GKJWTo8a6WcumYpm3t2q4ai5yQt2XbCs",
  "key2": "57BTrtdPg1xE22PqXyp5r7tBfz45V1AZPRHX8g1YcneGNWWu5vpWX2uQoP98JBTmPxBB8W4jhdh5GaPk1stxJSd8",
  "key3": "2ZM14n9Uzfh7KvcVyxNV2R2wSTvQRyrFnXgpYpqu432KMdMVFAksRjgs7ENrZRPU4hJa1EGK4kX8YNfQaSDFWtvT",
  "key4": "5Jq8MFXw9dtNaVuxCVCscT3RdQBScSdhSWA1e6kUUs8XNvHxgAn7Lqt3FrA2NPmLRr6Bk4feav1yHdsaVSaEiW54",
  "key5": "2yPRfcCeoe4JmDn5PRbQseyxBHzEqo9iTA4V9ZYhgwqruAwG569C2utWUyQe3UmAMDtNKq6LPhtoygWRaidiyUxX",
  "key6": "4VgJ5vQSk4gncU1ZZRFucKbUwixQTwdB7iqU9YnFBLvCJ1H7RX64bv3138tRt73UG2t8xxg9PEmJkBcuS8W2tRzt",
  "key7": "y34tsLdfPSVtn5Gt8yLiUxyshfbvL3L7ymzhJJfFHaeYKgzzKDipkyLi45TKoXBnVK6Dwb8uop9JjK6JD4pyA3z",
  "key8": "2Kq1z22xfP6mFimaota48fxRWwVhYujnYvSi37XK4X5tVmsxHNN7VTJA4thoCR7FFSki3RSJitbLbAVEJwpeETrq",
  "key9": "7seqfPh3DHT7QjsV1Y1gMsBqqeXGPPeTzrzM7o8LEw216U41gn1cbLC1g1arAujXxbqEwC6gywxMR4HdkUzncdJ",
  "key10": "2v9DYuXnLDSpzmLcpnVJRSgtDLqaYzfZ1jxNFXosV4LWveXLxHPYokYYKGtFBJu3Yto2VRRAmZAL15kYR82GKhp3",
  "key11": "3TA4MkzYifTEwzkm5r4DhJ7J5RsrEJZMioc3KmiSKKJDMDxeR5Bi7kh7nA75KodfqvCNz6NJCjzVhk35hR6RXWqW",
  "key12": "C3ogDg74qqeMFpmhyg2xPD96A6dRUVfN4gfPMDW9wXvGuKXxNwweVG6Tmz2QGnXH7q62ExGsjSFvtT4Lk4kxcKG",
  "key13": "613F3phxbgkRqcTFRN2jkimHG9NjFdp3VD2TdkpShBLQVqYVgm2DUev4J9gJ5PBeH7BrzAxJRXzhCjwvqKpph9dH",
  "key14": "4EmXV8hV71F8SD8ugoVcNsgmGZx1UhD42jRve3MGrerhpQCxrtc7Sd89maEyRSdcKzhFttoCSGsxbkU8wtKpTidE",
  "key15": "4MThdYdeXUR5fuKrbvNM9ZdVPWqiCF5DT6AeGn2SnB9TgEZRfT6E1ayA28CkJsVas88L9TYd2tJrcPv4xikaZ8Kx",
  "key16": "4pUvVsm4LUTGQXheVKkoLuybLyRgFibZ1XNsYPtzFj1bgQt5AfJUj6cZzaz5Tt7XpkCPNHT1NjfgWUZVsEJC4Lm5",
  "key17": "3z3bCjkUEoni1VZmJuCH9HfNbs1YqVGZzjC6pRCKyUy9pBbvZTjT46JW64he3tuXimCRMiH9xBrGFfxJkVPahetN",
  "key18": "4TBnLbxtj4Mj4Z6GjNKJ3SKzsDGarytBghZ83MtMNCRsRch4cHwPjvjp63fR56jdx5m5b6WEf8qWgsEbthLn1NM5",
  "key19": "2dT1JiLiByY4NYdCoNvoxkS4HsEoLFXNx5oVgdtgP4L7hvgHYi8TCR8MPWAr4N4YHjno4ozV7yYXpAAJkEAEHvTa",
  "key20": "4x3E9g6amNaJkrWBTerddTAnrhGMUts2idz1Nnk9bwJ5xFk2Rth2W1dZVNS2EAe334E9yrUK1F2a6SPkYj7aQQEE",
  "key21": "3uKx3JfqJ76F5XYDP7syi2xLcvYxk1nb5pHrRhuhPVfY4r9CEWSo9oHzEQBwf5sTYte3ijf9Kyra7EPiqekQPFZ8",
  "key22": "53dPP7HjFSVzMYYeVvwagtie7aFiJJEW2GrQ8C4Rx2sAPb8PY63Hri5evW3i5V6By8giA2ac2k4R5hnypkWofutF",
  "key23": "63VnvAWSwomT4VWnV948rT2zddPLmNU946UDigifbbkcCosABeWt94nveuEJ1nAEDFsWcVHbwbMwBLaJ7Y9LJJYE",
  "key24": "BPrNXt8cvQ7s66pgZ3MAHmuu2Pd6gvX43NHpusvUuaqQ4MTJTu5ePWZtGiz8KgH7VR78FeuSs7zVLpGvprH4z2k",
  "key25": "2sbDfXaZzCFxJdgZX8VFXjEkrTqq9ZujFAiRR2kbJSBo85gwEktmG4GmtMjULxZdCsk7ztQbonzpNcwMR14TQAki",
  "key26": "5ope4wsDUMN5gesC59p2cTxJ1E6smSWfipB5T5ZnULJ7dJoL9Bge6H7sgiALtoKezYtvwRnZWFHjbJAZcRex23fK",
  "key27": "wjHKDLEkE8heptX9gjbzRsvqcAjWpU3Tt5wJqSGGTCNR67Xc3Ga5SzMc6utHJer6nyzYYygYipXh6WnGPVttR1i",
  "key28": "nD3N2Sx9BAe512qaWhGkqPfrpgL43ZybYoHUtKGgCgPSVsFiSPXYNWBXRwCS84P1twkkqup5WenGTzKVz2kKu6U",
  "key29": "2kQQ3WKdHRQKSxaFmB3ibVgNLH5teQE4UReqwyECuYJ582sP9CYVJC22fFMYhXX1cSLw9QssZAAkNcZGAFStnMJ2",
  "key30": "5WfVXR1dzyiDx73DneMCoM6ZeQjMJ57HMCb3UyxmLzw44f2uWMRGZVtkHJMixRdw2zzYow3utXeWQrvU5nsxeULf",
  "key31": "5WzwfKEJYGEgeLEhnyK3GEiA8R59cvbuLuuEBfLywqK4GESBmPZvefQEus3xxG5dmcgNq319cn3Cnhr3rMAvpSg5",
  "key32": "U5mwg8xuTfSoifJQ5jCz9wt6F3CZ8vrQ82XRiD6r9kSfrtGyZhkCMbieZgpzZmH9xVaw2PF7d3UqJ5SQ35PqVr8",
  "key33": "mVoAgLgHgnkQcsWzAv7ji1A5zwXT6yir66ETgoBXzs2WNUkrb9Mk5Phjm7PCMQNiZpwnvSRzheMLAATzFLRcQqb"
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
