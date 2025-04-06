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
    "5AdcxDV9t9T6RBKVtTE2oNGzDYPuhKNH6uG2Uw34dCXBJrrTr2BkESto18oiX4oa2gCY73gYssmHqktkc7k42aKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9XqqRAfQrpaWNg4eyeCCSH4U6yN8MPsTmVJgfcGQjkrPBKdWyR51pkm6mXmRM7H1Usf7tVEbELXHQbe1LBLVRB",
  "key1": "Z6kFwvEmBggY4VrFkkgmPFanMiwn4cje8RMt1Jb55KXr76h62eSMthKxGrYrn6hrTBPLNdhMnXa7rnUgcgnB6eM",
  "key2": "337VF4wqQUMPrfGpG1uDGDMjauQHhPxCjipo2RMZSoX7XeNX3hk6jMGwB2AFoZWPFKud7d5mD5AdCpMnCCzyGiTv",
  "key3": "4bvTJhRuGTyAQiwXpV95vhtfK47sQAUAEY8AX8JdMAknPZz5WBMS1CZn8fVuZL58eMDQADQEZ9EZUeRCahsvEhkC",
  "key4": "2dnp1cEfASKejTsV6HtqUiZUfPapL1AJzJGZvtz34MdLUfbGiPx9y8JoLP9E5Jj8VBcMRdgPzsuFAbbE4AhFUvMb",
  "key5": "83equPyGUodfLQtphuoCj9ZPHRa3MjP3sdfYaVZbVvPZVW7o5KDFnjELUtRoJFDE9hcoVypv51BLwBzft2xgdaw",
  "key6": "4AcpiwwMtvmopFsmxeQt9mKdZMXuis4RbhqSse1SgHLb5soXY7XU43FQChsw7reBaAi7QdZPzvva9CdRQpSsMCd9",
  "key7": "2y4TkSaneNreoeMdgwTkUSQuxosUQzeACVXMafYasatoK1FxhY4KZC6jC76eGg8PD5KnhwfeTQgd9GHGigafPvJA",
  "key8": "61KRMqHrx8n62B7reyeLKKJaiHQ7uTcNEPW7ZzLVidyerEQXqpz4chnWBshx8uKRu1r9oBuCC5fBmzf9RD4ybDpS",
  "key9": "2pC3c9PMvuA5LyLvHCC2nDNdtvM6LmXGToKtPJyw1XZKd9biw7ASDMq8wHKNDtibmrBZnxzFmjB1fH1sHAvahXQF",
  "key10": "5Y5ae2p4qEZXA54RzTskpL9bAXMJUPt14qTqXMMzsiGChKjJRSiBHUK7q8KmmH7nQLCPzsLhrARY5n2NTn8pV5g2",
  "key11": "2dLvEyj2oCbgN1nhtSQZ3QWeQGodUEY1CvSLi5efQHcdUfyj7rigZi3sVh1BPPMGSqSet2aLk43Ak7Jw9Zyk4Kc5",
  "key12": "5EgW3t5u6nZDVugwyx5vVypPuaNDdgF7hUDLRppSzKDQQhMZLtDome1TGXUrsgY3ybXPpPmhYLXWbNF7fyTFLwpe",
  "key13": "4ajFSiTQXwGQm6iX9wwm5KNaw5AtpWxqSBmw4HKZ1aiFUwwN3h7VDTSpwqWAoi5YGUgeUofxkpq96uFoaKybg9f9",
  "key14": "3TBNTpANLEyyS4uvcz5Wxkiermtbfdc3jpMagwGVVAE3aXcUyUGcnWJHi6konamEcef3A2ejrnz7DotxxbE9BkrC",
  "key15": "4J8NhitUDBoHKGSauiQ5i21vWMzWboxfybGK1AGmaX29rZAz7zm8ju5fxA8mCGMrKS3dDFvKTSEySo8cDH9762Py",
  "key16": "3ufJsEy72QJDKoYy13nuA1nFWeFqWhCt3NS6kiwJ7cxXz1vGPYnEKcDNoNH1R6W6hFsP2jSKTcYYhZBjMeW18tux",
  "key17": "61P3SzfJ4Gf28sWgHuxvBDke3LEU5FGwrQ3mPnUCgqTTYUX4KNdmSTnKN6Kw2yv7WVg23L2xsPYz39yJowhK64mn",
  "key18": "22K9T4QK3QPw81LdwvQ4st9YGaLZZxKE5CTwCTSiS7MEunr4n6zJSuDBjUysqsWrw1CtnKVahMFajKrQ74GLauQo",
  "key19": "4UaP8KifKrFjwi1Dvs5idbJhCz5HcwzEiF7n56DeBc95y26U8Xnxk8iv3UiUKgDEbj2Uxz2HmEWHZoybbAsKfUcN",
  "key20": "vwCi7hNtXMwifabCZk1K8KVyEZ9Aa7p4SW1TvAenRZDL6zfK18iqah6bv6KiyYHj37H1gRebEpEsgorFrEuKHeJ",
  "key21": "3AAHjkP6qfXarajBSLM2fqrMwe4MrQJpbTRYZM9uATwenaznLKRQMBAXg2eHTA3LsiogVzzotfXqXjM3b32L3YrB",
  "key22": "45XDzApCcf1zkkqE9y732d376Kze3mSZFdmz5426KDcnf8UX9j1Yc65Cdi77CHmojwqyvi5W9xZNo7yxTbM29zTN",
  "key23": "uZsBDhHrXENi236MtWA57QS88XAC4AFoxLG1yxryADMARzwsNtWrJkfiYiVfeW4ReA6dfU3y9WwZsd8bv6hvQa1",
  "key24": "5iBKsDpSvpyGtWZhszSEJMCmYsaV3Vzb72LbiBUKbkrYV6bY9cRoURWKuDerbJ78TNgsgPtsn7RurnkvMFRSi6o",
  "key25": "25NKQ4hMGTnHRaBjPZ9kgZpH6wG3hwNTUb8K7z84KRpSXt7r24213mg3m4z4Ema81R8tJvYNKRCC2MacmZMcUmmm",
  "key26": "FS1WcbhKr7taG7pzqTzXRahWhfiuzPDXD4vD2eFuJpCsZ7DUYJ3ZQvQj7eQ6Bg2rShtYNoVMX2nYgUkhBwjnGBV",
  "key27": "yfF576ZkjZfwu8X1f2Wda7E3PRE5fFEGCxEJV9pRxm9sn4Y3LheoNigcsHJikDEyuMzAkRt35jW9AbskW2aFnDc",
  "key28": "4AnyLosD5icVg1GWmSZw8y22aFBhertr3KFihgicKBTgD5Tcq5phJN7eVKk5AB7sSNWzSsjUGAw4EtZ2fFzfGk7G",
  "key29": "o8dGHfyXmUarwUbXVYEahPPm4dquEMXBtuadZVmwvWcdhDREMLX5YC4DKUsXsYN5WoZKyCx5mpDwM3RasrheotF",
  "key30": "4Tw3PUhrX3znGEtHYYxwpqrb4KZtNajbpJFL1LSzb5BjV858UE4wXGsoeN3EzjYekfzJrM8MH9b4GbWvAfuA1m46",
  "key31": "31NifVRMqoKhXbCRk8F2L4iGrJ6X9HvAdNVjiigqnvphDriSCBwpcjUzzFkkv6ZzXFZLZwKWixE7dUoWUoSi1FDN"
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
