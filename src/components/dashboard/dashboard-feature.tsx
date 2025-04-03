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
    "4447wJS1GPPDwB5k6yB52CycgmkjSjZjHu87oFbjdUcW42F8Pn1uMehE1NRPfWSFaTyi3DZhjru2qEX7gHdqTqaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "icJ3LgYRjLuKyfpHWU7Cf3ykti9bjehWFMRgAww6EdgJSAY63RmKPnRYg1Yy1U97WY3J2WAUvG7tJs7pYbHctDd",
  "key1": "25YA1zgrtyvAHoQje65UrpTjDHUuSt3c3CGEYVMyWyBUnPFP4NJ3vCvqYqzZdjisH6bQiKCMd8LjqefjDGWh4Q59",
  "key2": "Kefg3JMg2CVC8i16Yw3DEgp864er3NCCXHEB2YbqDUA1aitXhbSacfFTAF3DD9jRXLFt2UF58wjrgFY2oEmsrsp",
  "key3": "2pJktVGSWYY8Z7Q378SqNNK2yXxwp7psjyYpYBE6BVZGuz1wB5nMco59UuEymkWMyMhishYdNkG2mpWDRtcpmGq4",
  "key4": "4SMifNhBpM7rQuK3RWxfGNktnqJFbukswHxCxyRemjSqNSYhECrvn4CHNzw5ZMwUDK678NBbBoPguwGR3mN6UiTF",
  "key5": "4KXzzfym8qQJ5NY7miFuUAkzNaaso4iBoU8shDrMriUADDw4TueaqMJSaSQsfycSYGdYCMmhV3qhcF2vDmRJQDwQ",
  "key6": "2DM3AFsACF1KwwRGXTS1bFLSPPUd4VBTXxFzC2dshWytUfsFDv7eNmEBgqxxn8dapbEzpUShKJA9Y9XV5UBhXqz5",
  "key7": "3MHpjVdNsHzUMCS7Fi9kiRqKC3Rag33wsiZaNjr5vrBqpgxgGxUGkzfgWyLjY4P8qLpNRNrjV2Yj9Dr596U9VfpT",
  "key8": "3Lr75y4nC4xJMvi5QyRc1LoqMT3tz6e8PSTwoyfKFKyN66TpK3Ej8CgZ4JEbSX3Gg3p8XrNQi8gUuEdJuunHKED5",
  "key9": "5CenHf7xa6wFTt3anH9eDLTyLJT97mp9ax6WmHdfAFVVuTvt9m7Xx9aSJB3yhtetnE6jUgoHsX6jrQ6ZcTYSxPBq",
  "key10": "5SWDL5UUQopre3BUCNzkEtBkBPse1vRN7LGwhYKCy1vddG1qMvars4L6g6XoXbTVpiALfA4wsXNudN6sisF8SFkA",
  "key11": "513DTwALWBUNQqtc7d3FLE39fjLYUUsMdUbTyEFYpr223jvGTqgfvHpQeVp221RWvwPsmChWtXc73qr7FkX59DTS",
  "key12": "2oa7fq98R3iVKtjq6euVqENRkUHjmr2zdAa6H4RKdBBk5EutctoPWECfvCku5PybhiqAKfhogpfmTPyMt7jwc9kt",
  "key13": "3KaDyP4MAYAVaNb67F451hi6iRx3D1DzweJiRhLpjycWgRHJKqGfTTLNDftSU3vyvkUvScLNPx4fzQgUEzPeJt4p",
  "key14": "3Fua28zgSnEcGSerwyeZjG8HJBhjKzPstM7DNsSiPhGmPYeTbJdVcTvHHYiQXykkoVz1Yd9KdgtbDcxYReWLV6tu",
  "key15": "5PVZ885aH9FUMR5Xpvv6EsKqN9yeML26SeWrMSiqHfvyS39KSWbuA33DHMqFPyHmGg9NurnnptGhGSAWuMLCmr5R",
  "key16": "538bumSFH2AG2tnRCDuhHCxYCxWShbFfjBxF48L1pS21AcRqqKXFdknKJzSPEshx2JxsprHMvA8REbH4LmVP3Lnj",
  "key17": "4DHEqNKm6tJgwzvhzXJ5YdQhuoK79fMLuRCDzHBD3G7xsutmjw8TihdkA7ssstB2NHJvddmndWcLh2Dd1ppD7zvm",
  "key18": "3Zpsd134MsBfwJtcA5ADkcXTYuCjKPwhkNpTNr8bnR1uytdgeqUN42h53QMYo6cQcufCzCZTFLVxNXcM8gqs3DAw",
  "key19": "2Dxze41j8GcbFY1BZK8dQYu4hsZQC3TbSSLcuibQbJirruYCD1UpnR9morCYYrDPgtVvoPAwuYHN3jaTB9w5mvvz",
  "key20": "5s2XTAwWAJ3gjHdgCecqHVCs5jQ16y4szYwuCGZCxRUBM1r2UDHy4hgS3LmzR85wdF9arMRzxXPJpJ9iYPHBjMRX",
  "key21": "5a92ZrLeGJQy9JQ42rNV9eoNUKnQxpWFQEtJwwf4YdC5ZfA6g28RSXyjaMpqrLkFL42eyT96SGmfAx9mULUMK5qp",
  "key22": "qTsM9t5HPU3PU1oyKjqNWJVt7RZjbbzwS61VKwmx6M3AwciaHZ7SvHVMsW9BMZqpYadbPavCcaNnpPq94NHKFLw",
  "key23": "4gCbsHa2H4GgCT4UvmZYsegXQLTDg3wjskjwASY4kmTHHD9oJZf6KXknZ2KpCQEa1RZvZESvsCrC8HMq3NMazyiQ",
  "key24": "5gawX5dTuFhNdnPzvpBNoDcXzv9mr7qSeExiwdAfg9e8XKyruRgQsNowJ7z3UfQvv2VoadkCYYyBgAW6Cr6xbyJ3",
  "key25": "42gMdDZFo9NS7rC5WksuDT51mjgXgb3exKUqJts5yixDCJt58M68udYo7rWF2C3ZbaCLh8L5ZZn9e2gkbVFWHUJ",
  "key26": "5pm9vRsar3ENvW9C6k7svzofXwTUy7G5wjCzWMAV15ZzraUdWS3YLNHLPVDYxXTPNw4oPqaK9yoXzms4WoiAotFs",
  "key27": "3RBgLnUEdq7o9Wb3V6ywpnSUXx9hbLk8dcWygEP6PYt83VvcigJ6iGVmjT3n31H8FR9AsCXkcNUizfLdvnkFvthb",
  "key28": "4qeqeBJAoewZX2qXtKMgpDMKNW8B7ojwh7ruBufpQducbJozcQGKgkhe5FQwhMegufVieJkFoS9saxmeFGNEAF7R",
  "key29": "4PNGrPkpNBBg3Mjj3oG9o2gtVettupPptXWvxtrHcuppNeY32EheZa1CceuXPQutogd39Fo11LrceDhq7ub7BcTf",
  "key30": "5u8YcLBYXdKiNtrJRwvCDTSYY8KaTEp2rB4jyc9VFWZ48z495ZfaxzNxTJgWcMdM6PENgfnj7p55RA7RBJFTqkih",
  "key31": "2yAqK85Bx1ciSd7BVpfPhSej65DiESCPD1JqDQYovh5rkxgEr1Q3gDUVq2swgESeKsvfUkqrqvPVHUmicrthqaC",
  "key32": "25g3UiS61Qbwdd7iTCafoW2yjJ2pvnR9NiL4J7v1vkGbnLSLURoJAa3jmuK9qJnxvejjsQqnRccHhBa4JfhHh6py",
  "key33": "4HmY53rHFRNjCg5cVwuUHrXEdVmUogyyJmYtkjZ24wshAfNtJCzFfaAncHUZa2BKJ4VQrsEf6rFqveXfsqnMRMJs",
  "key34": "SbZF4roYTo1nyyiGgaNeKwdZz7KqS6mbXhn6p62Xc5TbRAuSPQS1UapmEnKi9enhtEzt1zUX2qSJrRUwedaNmSc",
  "key35": "3kHnXvZ1XNtWh87u21ruR7jp19HBxsw2xc7U3y9tWFHqZaP173oufGzuEVgHFuWra7fauRDpG2NP8GqVBWPYMN4N",
  "key36": "53KafogksQUCwqAcWdm7YTMCWohE1V3cR5kJPzWvAdZxnrbhjuuAkkB8BnkLVRbBimcEhSLegPGKCZnt8tFuvEjJ",
  "key37": "4Az5bqm2zFee7H4MLuUqPnkmPhsCe8XyqRrpX7TPFUWePg8ri7uU32gVvFepniMrgqEmevX1K6oevvtsDxio9MDn",
  "key38": "2ZKfsWbvfQvP2mDy9ktty19qriiWh1wwVeh6woa4j55rT2fWqGPqf6giRVkga1AHHeCaoV8NSZUpwLyduKJHSCSY",
  "key39": "58FcydgQzZuudjWHQacjLCQiW4QpdFwpjDcxqXT28V3FBMd4CMwE1xsYHaYiEKkwfwPAUyo72opXGKEU4hkJpQeo",
  "key40": "639G5P4R2dtQnKqu1WXZES7xtu7HHcvxgZkv1jGD8gwBw1kq1RMukAyEh67EeKYxSoGSe7F6q15EKcTYomX46No5",
  "key41": "5iEEZKn5voPxoBw869jHC6dKMXz1ukgg3TPVT1y9XibxjWKnCaKkqBSfvgNgJPLmHCZkN3WLNGNtnUdgi9LsYUTk",
  "key42": "4N94dHHNJDHKUAA5t8wwkysTaZ3wWHZhkwAgXesS1NkX1cUUTQjbSmEsAeBFEF3Bh5LP4swv7HPji6Cgq9Q4a9A9",
  "key43": "5io1s87pTMn3gpe2NdZfqnFkrfy4hw86bFDjejN7ezKNXggrkMdoSweR47rMaPTiwUk5MrB9NUiXWSL4wDthhG5f",
  "key44": "5hmvyk69L3ZjxkbNG1Y3a4QjctLqEbWQCdQb2PDDdDbJz2duGehyaDtY2uBZqmfAnMiBrLNCHsApQfqCkjAeNXWc",
  "key45": "dBy9MpBHMUir6azjXAQbaWfxA6cv8vwDLm2ix5ZyeHnhsBpnymwBsPwYn49YHeHBVPyGgkdbohWJmjbXbPiKs39",
  "key46": "6vZRSFwaVcTJYeCFEqot5FRFBXfaBCzF399KAai4tHKD7ChQGVzrnZGZiky7TDByapEKPyLsJbv7G6GJ5Gw9Kvr",
  "key47": "5hkK1VfdRqJNDmds3f7aEoTMLvaERUyJiHGRtBhXkjsxD2hCkEUtUbgXcpVa36nMUJsEWwruBkTTkHBwL1TjSucq",
  "key48": "4wS9izXgPNB8Ms8z7BGwFHxyWfZBabYrogt8TgtZuwhAjNcVy79bYUFNTisaiwm5t2xRHzTJTueLuff84qniqebW",
  "key49": "QsfmiL4K2BBCVRT5gQ95BLJsXFHAwyThcWY8h7JfwsoeXg3k76DzPoQaaLgS53G88CaWKUVZjAJ5LBzFkCc9kBn"
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
