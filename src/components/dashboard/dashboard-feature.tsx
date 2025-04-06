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
    "2a4eCyiFZL9eGLittfK4QuLombpXsgps7BQoGaaaRh8CEe2tpgLyhCmdgygZenhnPjCDTt4VbKZFqe59t7dbbvgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DC8gFcjScHJXXz3h51ZAVYhrnsVBQZowwxUVQGkni5bVNYsszNKFo5dSCLhDV2bd1xw96Smgk4fVxNSsBRfEmLe",
  "key1": "65m8GqDUnGUfoRSgA4ztQQAXeRnkqidMC9CWuZCWsLFzXZpiVu3WvSSPrpK2PVXpKh6HASUCoDLJp1dLmVGz2Yi1",
  "key2": "4iqzFmeo8tcu182sDQVvqLXt9VcrK1CD6V68Fex1BeNXLaj5yjgghn7xshetHev5kUnZdSm9f7bgPXE1YKNJKCkC",
  "key3": "39rVi4X4Ug1S1twDjGb3ecN9WcdzmD8pk9Um2p2xCMJJiyZHh4un87ZkEdUwmc265FQ4o2FkEVdUjuXYbaUNyFRk",
  "key4": "2mK2YVHvBvoHSFRjeM1rTpNuU2Cv1RQNGNuGFfjLYxZQ41uLJxerC2XRGCa8gdBbpGvvj6tuzE4dsaYBAybqA4gr",
  "key5": "4FskimWQRGtov6jK1AnrhKYbnWRqK14sffxA4w6Amex6fGshhoZpWPyVcEef8KbX74NQGyagHE93oAeWpbJHVNRp",
  "key6": "4EnDcJRCZQf4GcdvYkjmGFNX7sbN4BfxL9ctm8dPiQJxCBsuRJsVKg4MH5cXBu4EbYnXLbscU13rXixmqMVqDfNd",
  "key7": "4sow1232cumBKdm5cwCXKu7YQYmkQRt5LDtDzMkzQeeAsTiXkemp4JUEzm8azaFNbpFu1So84CSjf89DuwQcZZ1G",
  "key8": "2dnQ1ZdfnTv3GJiExbtsYBEraTKHiBPX6xCoDv5qv9B3JsTSg6qDWMLyn2BV3GkKE4ZnPTV3WNPvCCKbKiZySN4c",
  "key9": "4SsD2fpJeDBfghVMA9c3QAvWAnGQHFFsS1xoygYa2dNkYm24YcE2bcPQCuSbWgjHR2yn7D5TpdcwmJktx6t8prRm",
  "key10": "58pvHNGuAsShVWq69W8jAAnEZH6eY6d8oz8sUZwVnwo2GdhRfxCRaPsmbMr3ZSrbVWh5Q7BsQwH9xfPqrqkV288i",
  "key11": "49jt4Ksj6NnQBAzBocr7cP8DseXE4nTS8xcypJSsnrip6MroiVxXwLBCvHr4B5mfsm4R8uG2dv533AXhpGZzdXWh",
  "key12": "28wwqKnEa976gPFYn5FJZPyzzg7QnGVB8KrRy1tQ8gLjv6KvZA2MwhzEcBUXkCCqRsc7J4NSMrihxBmhfdgije6t",
  "key13": "5g7dDs1ZSmXMM1EXY5efE1cR3NecxvSSJq9MDEea2HfMUDfTcteZENduKs2x6aj3PfasW8R46VyQDjLVpJFsnrUy",
  "key14": "2HAj15QuZX5MgvpQAt5Z9NxFNKr7NmtXFaBFrQ2cq6CcPmNKdDQYqWckoPZQ8Lv8AGyXcitJinzprLYpj1MqRa2f",
  "key15": "vwhcGAibTgNZYHceTSvVSkZYeFtBHoKmgw1yXTmjrgbeAp3sU5V5ywopqkR5jZMNTsLuPaUPWvQ6WjLpxgRYCKE",
  "key16": "3T5D7BWKdDgd5jHU7RjxbzJzFVgTRtc7rV5mg44zLi694xQ4mjhTZVG2rKgkJKzZgJVMHCBpzENAQkcvcmff3tR9",
  "key17": "2V3TzxnyHVthryw4EwKHQvq4sk85mmfgb2rDHh7Rn2U11R9KcQmQpeDu89athL6Zfdks1adm1ZuzGQCVAQwuL9Eo",
  "key18": "3RbVrL5EmrjiZptnaWTDgBpoNB7rW7eTwi51tQaJXFZoVWpcgX9M41W67Y8hdZDdAZcVt1omRZdFppzDjtCNX1vu",
  "key19": "4efXKLDKR7PzqvJYjnUTr2Zzh6Zr5t8j7TwdkWDFCxULBybXK2yVrpoojR7ukVRihtYpzkTaV1HnK613GK1NaqRh",
  "key20": "EpRrhdCXuo9LjMB8f6b2A5feGsK3bBz3oL5PDUQYRbRRfUzvTDAr9Y1EWLZ7ZtJwve6MGEZmfmf5tBDaXWh2UjN",
  "key21": "2ceg5xCUj8ay2BbHeHXLmUbS5ymYUKiHiZZNiEpgqQpGeP4UZ2Y2of8JTvmAT1dDpyaRVZShhPgRkxwxcDmKYvKz",
  "key22": "2VXDbDKVsXY8WXPkqQqyPd1qPNJd7A9fC93joRxFGpvGXDrYFyn4DgBciiwuVPFsyyt9QquwnaWBJ9N9u9vN1LH7",
  "key23": "2TnC7dRNbc3uZ3LZvan6iYAxfYqi1xN4dVeaG3QoA4NAjubBPvAAKSLCGi4HnmH572P8qxtyPExscp3bUvTWynE",
  "key24": "2ddaEATqsyxisKoTyL6tQqPT8JLng6LAiDTWmreBhGSvHvyvgURME5GU5fK7NWQRDsPBA3tfqeayLBxaLyPctTmR",
  "key25": "5xp2x53nGaf6NpazM7GpRkNvLLoBoRgm9LY9WMXL92BETjkVQD6EYvbJBnZzqLTFCrModPyWFkWksqetNakAEiQL",
  "key26": "557LuQXcKafR53x9Aj5XKg7MqjcPnScUBYnvsG4erCtCbqdyJoPBibBbJiXejhJVpXjTKuUc7A5M9WAUYFfhyXty",
  "key27": "p1buxic1sJc7EyMZKFsBrFpvheKLJr77PvqE7V4umsUXsTrkHGbvqQup1jP1c7jAHonRi5WkZEm6o2xAxjoijK8",
  "key28": "JKd75ZqvBXt9C5pB2xs2kgH9mm5s4gT4CiqECS9rmpCb8W2d4R4o2mW3xtiUUivNYMh5kTbFC9CmT42ADruZua7",
  "key29": "2Krgme6W5ec2wn95zNetR7pe6dZeLy8Net8JARjL7ExYj3XhEMPfeqgBCemig6ixNKRVFEgZTQQx3ixapHSuzeoU",
  "key30": "JCbnTVPd675K5CqvZ7e7fo8roXdCKcrSefHrgxc3k4eSaVeEQ27ZKJ5ZUPFFs4auJongkyBUPgwfbwsR1bY1kdF",
  "key31": "4y9YzBPq6M9PvH7JtApWpcfT3QbXPsjMQW2s8Q7budC9h37gDGEHTnBxZcuUSxv5ZKxU22DwPZYiRMssiPytPGcp",
  "key32": "2PC2G7NmbJXqxujzyndPNod9vyV7Lie5ZWa8P1yWnziNWZwhBTkvpKBLVfHowNzFZVWaJE8VNuatRtfTm4n2JveS",
  "key33": "2xRMsqjQ8FA9VXdDrCvaRPKznBjmoH3wrykoe6wHueVf5mVJDqe3ZqZpiBvWHoGHtDUKjaABpEyKpVR9UbzaMvp4",
  "key34": "3BHwD8LKz7c5t6LKRGSkKHtM8bg693gqxJUBeXwBa1otpDbS25g9Mabx4F5UvzUXf8o4JjgWBdiFEPxgGNB1ZKp8"
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
