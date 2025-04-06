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
    "5g71Z88BzhBAJg1qjvSbLTCwCa1ZFwDRXvcfPYgp8hNeGJEXmXFa7PKZDG8iNzmNRegfh7iEaAeYbmyWM8vdPrjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PV5AxqHc5VzmE8drV44orcxGj9KutpVRoQatDG3B6EjBU7pZKevtdh2YiRm4ohTpJgSsMwj1Z44cXvEWNJt4ov4",
  "key1": "4iFWKbWRCmZaNzMht1N5WeFCs9QSg5aWpSc8Gv4j4SW2EgPBz4aJpvNDtj2zDgDSvQWg445VduHBu4jnBrsSySba",
  "key2": "hS8wNWQrYrsfhHFuT7L9W9d7862pFaqQBR8nWwu3Lyt1hPoGZqZhsU74PiaN7aVPnPkpHiqzLMEVGNTB2L25XWo",
  "key3": "5TyReqp9RrPDqomrqVD69GZgpQcebf38asPn4dFcCigygNhC2GUarXtBg2ccyq6k9z85mvH5HuyWx25PFnZ3EWSB",
  "key4": "2wYURtQdzRjaLa6TVhoLFat8Uu5cZxGMut4HmJgzmvfL7UeySnYcE1UQx6ddvBRa9X3Aj4udn97zkrzPjV8hAU91",
  "key5": "3WfMuHWgSSLpD3LsxB7ej19CJ7sW53xePDtRNxikXbBNn6hKcT88DrRTPrtEboDjwyNHFFSbH1VBv18XYK3whhB5",
  "key6": "3geEfcy7WkMdWDmbaQLRoPBwugFS6wHAJrxRfR8Frxzwacgf6eFh3vYp3wCQz914DPu3ruA8J8ws2efDsJ9TDZok",
  "key7": "KoA9Yec3jGAXZTtxePW5q81sEmEqGg5FcFF7ARRsm8qk23sAXRnxjqEVEH5XJuPcwCzKMvcFWutaTmkKfbmAoiD",
  "key8": "5tGLSwVTHkn5bbYyXdkAwLGCSypNBcieWG8xxkT4jZ3iZME9Wcb7h5y4uQGcZ17YyXqvfYJ5u4sTNVk9PkGT3ss6",
  "key9": "uK843YTjcYt54enKAa2MpHoZ8uL3Dk7k6aKyhQhWDPrwAHs5ftRJCzG2eUZ85SVcRiiXaHhCD9DDKhvXnM8L5hd",
  "key10": "3awxrKcgzPqdfV7qC1PC9F5JJVC3smYPhkDBvZQssTnYzUj13Q4djzRfkZeuocSipcqhYphv2JZpzjqWeCM45D47",
  "key11": "48QJuSQWETo5PmXm1pFvyFrUedufYhdn73gQ2rfiLJEBJFbdKvbnugzTE8UXE6sFQhvn7Bdg77QNWxXLDytCuAw5",
  "key12": "4z8pTPu784XDkmpnVsbgNanwx378tVXG4pZdvSwCQgLbEJkdFj4x88Gawe5kxhjzgnxszAAYdEte41DE3atzekp2",
  "key13": "3FaKNkRDLgxxeK7S5exgTAw7ump3YuoQxTj3uow145yqfJ6c61AMU7h9sxwwee8WQLc85dfXz1ivnzybNJkTPzUa",
  "key14": "3b8SXbTpiUbyh66dC66dRHZLAMgpA9LHgMLHKWkRB1W5of2haQoxNEZ7E5FUEDRjBHWKWCME8JeA3qhCSFzMFRL",
  "key15": "55iRX677EN2dfD5sttax2zvR9qKGf6SyCL3idTKBhQPgwLaa78HLgXyL4Gc6pG6hsJjvXBgKkHfXGJh7F5VGmV8F",
  "key16": "XXPzvu2JmHg2VtmJt6kkaegFLAMfCD9BTXVJnkx1iRNYVHkFhzWEsaesXmH7SAhVAmnLKGXXNSctwYDTE2VTt9c",
  "key17": "4o1gndDon4TfPSRVNCmjQcgPvbwXErGkZ4EeGvH8XnAEFuUYaPjmCeurt8fD5HaNFUSuQTuTrXbuKpP6nGjnLzZo",
  "key18": "3XvwQjcKeGT5cMiPZyKBCyPzgcgsvKwwxUnNUsx1oavJ3PRUkPxUJkcK2CZBDc19xrtchdBYmXZXJWGPsqvbfQfD",
  "key19": "5oa1RM54fmWEvmmUV87rsB7ecRGDfapPppcEKVPv2UVCXzSRpsHQ3RajgdGeAEQzmkywPo9DyPwzsATd7BQ3j4TG",
  "key20": "2f2uQGD15hMq8KHtJm32BEc8VVt1HRVgZhoF8sfSgKgcSmJGpbgvFnnLbpWzWzUc3Bhu9xcyEJF8FAD2DAqDf318",
  "key21": "59ETdtsQhcWh5rCC5sNjZA2fHfnvLKM95nbRFj5BVac3XAkk69Z1y36rYYn1PTaAeiKD2u6HbFwjXBiUAk93auEH",
  "key22": "61nro3JvLWbRD4pttzQJi5xhzo5VB9Zq9VcjiTZa6V6KswmK7i2hkjhwTTSm6FoAm9Xv9a7V63HTm9kPvbsj7ZLB",
  "key23": "4PhNwfrCqmq5rQpju6VHv8cMLVn4kU9MCVZRdiCrjSmLZnzduTjvSQJvLyvpSpXvqT9mXHjaGiWJXsfZafhzKJUu",
  "key24": "3F8T6Hsh5fK42roq638M5ZMzupvci8zW2EXc4fJXMY35UTNHuxEJVXh7SPgG6wHpn6hoE8vhAhbvMXoozUtEoXSw",
  "key25": "5ac7S35w17zyxoDCVQmpPBSfPXK8JhTSbwgAXmu1KUz4uUSitvLGBSFh8wbfV29sd5kXQP4KVSetCPxqmkdWtYk"
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
