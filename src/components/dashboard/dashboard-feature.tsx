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
    "5VuYxv1f8vhnbqXHiGYpqVMJXGTVmK7dxXvDcfD3UmHscBD3JT9hVhEoNkqdvcSqB8qjUSF9XVYoqiCKX3AsQJFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dcH1hAZwbJsvEhWsmxjSuvg9jEAaWa9d7Gwe6ovvnsfKz5raGBpbaXEchJEzkrwYednczHvnB67W7SE4yboWgAj",
  "key1": "4QqWHPtcraZ8pNP8pnEduenCFmeWzQXnoK8fN8AiaLD3TTkj1KSWFQekSUc7VwA4DLxCCXcmK27oSEZr9DwZCjLo",
  "key2": "3ZYHcrh7T3ASgB28BMqALGr2zoNCpi9vALVmBDqzGRbiZTatR44U6WWv8YSdDHoYHLa1igoLfsPZBgRANAd9f8nt",
  "key3": "3h6rEocuqkpBcsPN3MtCU73FSGZpq4X3EA5awAvTFWv31PsiJ8NomXrog5MXwdAZg389hXvbad9nT7XwbzrRmwgc",
  "key4": "2MMPU3wsR4B8cuBaW75WzCmarpKzkcoQjoRvR6TMM1tJk85o5Mt4XgEjFg2B3spvWLvgHdr6FxKTCDjNXpWecdP1",
  "key5": "3itxLuzEeNeM65EXGuKU2kPayEPDWRoo8xombVJ4HE3b9Wf33dSTER8E4MyNRpCiXfm9pN5i5TkpyntCNmToJ8cw",
  "key6": "5rBoGnBo1wPNjtmS7ZTiXXEXBCRHj9fzvVEJj6d641dF5KbcidagXw8M2Lt56XccL7AiLaG3G6xSV7WmWSP9PoGZ",
  "key7": "3TjXTNxtJwrDgK7T7jUBCfCB82YBNiV9rL9sRBpvzKAiQUWhM6VxFMe1yMggPHCNpBegZvEC8nR1L9GvfJ6ECMgS",
  "key8": "3QQmpDnyhAcYsK5Zf6rCgkVGSygX1Qyc4foooYLaHxE8Z7a4bigC7Ee43Ky3jENpuYJCGMrGVpWActVAEY3jFHcS",
  "key9": "289CPw9d8ux2ZfHHNucGSHWpNTXHFeWzEyp5uD3e6zkyKgiHYtnbiEQxRNuYT5WjUBgB5CfXzBxko6jXRqzyZwif",
  "key10": "2jmoXX8cBPXkrpqES8mtr47eFmKWPfgzngwjvREEknzhMfiWP3sMGKhQVBBJ4E1p6boSqxiUcfXt7EowP3nXv6PV",
  "key11": "3Q2d4XvniYJd4p4yoii6jyYGvLZV6L3gfNmLT3xkwK4vpvjK3GXaBqTrdxtRP8meWsTnoVwGq3UwjXyJsYPVyg5X",
  "key12": "5eHQ61QLg9CrixnwjpMVPjnJYvs4txXxrrSVp2tPgcGoPR7rUWxdtnfedRYgAd3jYJPcTBZp8t5dPAyRoLt3VqWb",
  "key13": "2PDWEBRGBju7j2otG7XdNtgBynjEpTgfcsdZnKYaQfobPctLhkxqYdEfuxL64UhQ62sD3PGkgas8tSSnbZwSHqGY",
  "key14": "3FhHbYWAEmjyN51TXBtJgkXt1fNv8UVqKZiukrvoXvwuvSNZJppAuXWtRh24mBAoShajsRW5hkyDEBv7G7n8GGqU",
  "key15": "5RbixmdfXDHrST5bdFCbeQM26hUX9f1Dy5skAiJPMereqMfmYbstP8R8rJqBAdZwJMneDjPoEfdaKB5yASorH3j4",
  "key16": "62cTkdSqhuhwq3xgpsDjZ4kWphi7zGeU1y4kbucdJeZSHmP1UiU4z4qhMDHk6zt7zZDr2ZZcLuuQcFoazy8riL8L",
  "key17": "2WF1Lfxtgj7XwQZeEunFpXq32u7qqL86FFhiT62biyx3CXYr3KD7P24EjEs3J5V71zB31oVh3USR7Gc1oTmDFhtt",
  "key18": "4v66FTivQMTZSMpwgpBmkd4DL3KJZs6YznfWmHD8nTv1eFWSuprjZXJEmsymN7m8NgsEQXoep1imt75G3f9JjZcw",
  "key19": "5pM8iMbnDUvtwjqi7wzVaidcL8LwBMRHnddEQWxoDSQxJPdsmytrU3w92E7CeR2wkWs6EtrQXfy7E21uWVyiSprf",
  "key20": "4ixkzz73CW5Fb73YF3NsarQJSiEMMqoTTDa85r1UMFnPfe1Tye81Cwf3UoUMvFfXVYR1B2XahiGFtiW9UDMeZ2dT",
  "key21": "4hFLXzVeHygw43pgKLgEx4AF7BuYWGeVdvbydkYLtBSVbY3PsJPUPwwpQRaAcFJSuuQUTGx79Be5xgV4gK7bES64",
  "key22": "5m3SbN3PTAQzU1C4DRc1hDpqpP3PACH8veArh6c8RAKwKU7HoaZBNSVyhiDrTcdFRMWHLkL7UDH5XbrKTYECghyk",
  "key23": "46aaXWLoJKDVW3G626JAZRwQ6NPhGmn1gVanspj3WJHWtqxVb9ALC64SjjfddpGgFL2hd2RLTm1PhagLNfHjK9Rx",
  "key24": "4qAKg2AY7AFmiXXsa7dFX1vzJ2LwpNHdt6ZUky53oDjjgFgYxSecAVmkr3BWAAARhLd58SswmZjtFFSrtjTEtFXt",
  "key25": "2c9tWWvtAJ9JMfhembHXAVkMg2f5ZPDSPogkUdPy9qk5r7N2hYi8Avd4KrQVjj3Gxk3cQ6Yszp5gmVRT338P2nGM",
  "key26": "5jcTY5AsJ21pH6KnLgmgiXBymMu2soBwu7A7ZAdCAhepvLV9YTc2Tvx3UaBxAU7f3ni8qeW2JWqtBD56SnHxjVbU",
  "key27": "2Ga28Bp25MAgozD1AogbGF2JNm4XUFvFD1QRPxbFKH89SEvHta8XaGUVXjSfP2KhoEoiSKwAtVjoVM13QuLgmdC4",
  "key28": "5vjstsSnAHjm1EFg2VFwTzzKPw6tyV9u2huNE66Dpm7TsGimgfvWXLPWsWEWjobRxn1C7tqLkqDCAdjnsXhcTxy8",
  "key29": "49hgCXQXUEAvxEokunR4MrsndXEtQrtvUUQrzFkqkTPuAkqgE2Q5HakkCGrdJb9eH4jJUCxZZXyVig3jcGXkbTan",
  "key30": "4B3a4h7uNsmF4sVCV7sKhhGWWrNuyQ4MfXWxPP6tsQZ49koM2Cb5uXzry5Txh6Tvruo1J6dDvHw4CUMnj4iyc61h",
  "key31": "4Ezx6iDD1kLVaPKqxEMUcvRSV2qZPZZ3n6q1CBCbWhGa2UcuNjSfxkGw3vN3FQcX4ecNGkSJ1VPugR9uo39dUDdw",
  "key32": "VsLEpxVEUoCoBEDd8c4CfsfJUrKGdSFiPVpaieN8kMzqUU9qzo6ssKBJYJP7qT3yB4jwzXVEjwn6AVESiVcnjqb",
  "key33": "SYWbEMrEi4sKT5QftQbWf4pzbucZL9SbGytVF5RW3wqqNd7EL4xyGM9Hd1YpPh2Wv3kUXgTJEUMUxP6Sm93ehE9",
  "key34": "4EHk58T3yracPF4KBQSZA3R6HXApxecFxAi5ypGFkB342VPEdCs3VeZ65NTiaUZ1faAwzXfKDap8NrjnLnwLWb4L"
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
