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
    "5sH3rNb8SLKWGi4ac6gnpyxNuAGUdKdcx9F9Qfbq2dTTctadQBLnYFgSXhL2JHqcpFyL9gqbwTrTCRAgPKUjHo1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHNyq1evu4VKWMUXHgpF2NDm7Pqmw3T8hhKavMnbGHWqNRWtGvfyQzZUpBgfajUxMssP9mRS17aq27zHDUesXLd",
  "key1": "5RSMLGAvdQ23rRSVAM48MdAoumnGdEzounJnoPd72utVF4i5nPCRXjy8XYmQgcAAbf5niHu59tm7uauZpYXp1ADQ",
  "key2": "5PY7gHWxdodrCWXM87r72LUdpEZjms8uuS1vyeQofRTvieC79JV4k3QtkuDoxAwP7gsu4VS7HK36MC4QUvsGxvj6",
  "key3": "3rdJLUxUZeCbJCsDRzSqrsgemzY1Bn95ChkzePTXE7sTCGnhX9d7fn7DhiWLsSsc7zd27fmmj4LdHooGZUBz6NMx",
  "key4": "PkGdQFrRuuZmotbXmdFJazrMhxaCQN23MgAPyiRAVfdVhRfi6SEp4A4wFjC31HjuAzcaZcqBBKfXsePEoG1DSko",
  "key5": "56BgLKBZBWFim39ryqKBagpiVd81W7izs4zzkEFeuzN4D3N7NwKZ9xtbzW9qT3ozTZT8ZvWg6d2okFd1DYVbLAtZ",
  "key6": "2KSjLtxwK2Cb6XjtdD27FRL4E7RepJ5LxiVjWEjVhGNRueJGixkRg5rTbk2FkKMpFAMpLHj69hbN1VrP9YhqwK5Q",
  "key7": "39y5AAVH7pazc7w2qa2ZS2a4sFptzUtnbEoRDNBUiTEbMcRZQSdbRrEwAxFxa9799nkM8bCWNu44rvfHopthWxc",
  "key8": "23aw5uXJdjCUefkWU9hdmpFSbkXkiQReKEaKc7oS7u3KxBe2yUm4Qwq8subgsbMMoqgVDbnjHhJLZcLxL8vxTBZt",
  "key9": "21rj5p8uKMwoLPqM4tmn5WJDAZ8qDVFZZSB6SGYgnUAzqJnNVybETgcHSzAZXxYHzCoHXrRHJjTtYSfudCYdLhHH",
  "key10": "51SsU7XzujJUb7ywr3BDkdJyV3cpDgNYcHYQZfR7ZYe7VvJcQqi3K3x2DwmpvDxxUK6PbAEkrDmPnUvSzqAYLKMP",
  "key11": "52SwTmY81rCW1L9j6wwA8pvVHJnpTHazWnDribhJq3hB4L75VAcGJWMS7f1XvCHbc6vbfJNZuPPwYpAzmCJRUJ9H",
  "key12": "5RvC7kH7WAbS5JRLTjQ9grCzG9jWqfkXGK5KLyEbSxnbxfCfdxJ7grF4q8j44EXjS6Ruj6TfaFisgyD45EhaCa7j",
  "key13": "5hwDoj3EsgunQ9GyZXUPJjY6BgtDj7Kr8gUnuS1ACAgomSauPyyNHd6e7YYZLeZfgZ5cqrB29SyCHDwjsEGB1pkT",
  "key14": "2q5w6ZfWe5XrDfgUy1mczFZCcTbAa5e9a1cYjWSptqkLYghPPn9tK15Uh7pRfMnSPXTJYmZ4ExiS3TJ1LerRFRYX",
  "key15": "3BQd8n6VAPpiKxfnRAy2gk9B8xpXbVKc88GFgg39rFfVysUNwyAgCF3tEnocbHdufA55YheQzavfGUggmKKu2WHQ",
  "key16": "4vD4bMsuEVafF8d4ki9fseGkg4BGFuWBHbGq2uG3p8Utuc44kRd87BZLC4apRV1mnYCjFbT7dGExDNcAThxz2f98",
  "key17": "2LBgJ6k2wERvokE4s8jRxZR3cKGW3a7D7iQVdSQcGo458GP4TKp4epSPAzbDVFwpm4pErkyi8wf9uvmRLoq5fiNJ",
  "key18": "5fjgX3FNKQR2PS6ZK1dfD53Lz4S3paFdQqFmRCkiRTtjjH3VbKFAceWaEQLekwcEaJbnfptEu7ubT9EDULRSPhUG",
  "key19": "26Vfh9VXxCrrjBYuo1yHMb8g5kDDwiSVUxsWCuz5yQxY7E1rk3Smv7e2LrEm71pmi3A9trwtjftnWx2SjRVxk2Wu",
  "key20": "nexJ7qbQqXMzXvoXTUknYgkGiG2sxZjF194Xe2WjcUHCYEapCxzS9uHhSGGaA4wfzNZiZLtFVNzTAWxMh3qfQnr",
  "key21": "3xiryd1qQzrVixoZXhKwbAeAwiTA4atouEeePPsgDrKttMjhUNMRbDn5EUdMy7bknGJ4q5LivvKnw3GQqWrt8EVb",
  "key22": "4aQCkMyBPnSHv1GPKnYjhRLEjhdTFsgSwjXuNVnZLmEL9SHfmWC8FTXyutQaJ1w41rtqCpCX89kyynsfU7qKBAYq",
  "key23": "4ThqrgsZWNo5FfKndVPoiUqZsXybw4DFuNMbRBi6w3i9edsCxoMjSDtm9UhTLvfCGDDBjsAdKfts5JFEnrCm7Bqv",
  "key24": "4VdEq7pAYQTVQDQHsxwUNwJF1FB7vzhf58fp1z82sLADUeCGm1jQxHuPhePkttQgouLacKEFHg3zmZUVixijDYqM",
  "key25": "2Zp5gJwfdyiACg4SSF9yr28mfCyQxvsfggp4SvD7Fmu6bwSK5zmM4LgywNTFAcCRhpzHsSY6JXt4rXBaoVrUbZzk",
  "key26": "5wb23TG8pCGXHS6Q6DoM8VvLh1o7Xss6at86eQxEyiHi3U4mY89PJEU23JwgVqihgyb4x3bRMLJV2uBBdpjiMzk9",
  "key27": "5rb6iXZvg2ir5QBWPj3N8LsmtLyrHftQJGswMLzA78GUJyzs7duFCTemk5yMHeyxupEUjyLFn1TGJAy6t56cUefd",
  "key28": "o5ajzhHT8ecBAWmB169v1KKXrKW5285tHZBYiRgsdCWpUVmfpBNku3UEsMcAnp2sUFHun295zAQbzmNWFcPPHjx",
  "key29": "4dFW7NJiHnBy9oXbppjVQ7tPxrhYR1WDktYKphBYC8cxrGH6CthNuhfe9ZcKX6Ceta5pExeK4HHQifd4yytAsFUg",
  "key30": "yp22iKH5WedCzvMNKvQ1aeqsKR6Bg4EMPozxu8xLD42gxH5sZXwMThfJMQFbGQ41Ge1mqpMGACu32geNyLUYxde",
  "key31": "5ZRMkdJqWsvRDArQtN5uK1HKhWKne6QRBpj1NavoVuX7DixFhvDutDtBB1bWxoF48oGSq9UUkdKsQZPc6yXcLBn9",
  "key32": "VVZzwNwJy9Mc11D447qcWNhqxeCHZW3GUny5kjCWdXZ8cQWLFaopyBAyPicFLUCuxn5ds3nw3P1vR99kTh7TnJy",
  "key33": "3ysnAudGbVodBQc7ctr8xiBi2BbFvYMKFot4qkBnyDNdzkqy2PfL9ypkHVbQgrPggyLQUYohtETcUvQeBrEgRFWa",
  "key34": "4MnaL7mNxELcho7V4FT3ADDyLGoTJNBw54Cz63uU8ZMybjvudszvsVGXUQsCpZ1V3U4m6hr5qJahT3Y8X9tmdxY3",
  "key35": "4S6GDyfm44d9piumSk8MT489Ut6EazGnYPLrEJeQmoa65vJfToCKrtdHs9q13P5UtCz9qd8PoozRZhXdHydnjbD1"
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
