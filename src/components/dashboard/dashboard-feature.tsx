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
    "z1E4jaqu5ydaDiNnnEiRnJMnjyFfPBfTRen56HwZKE5wcPTQHraQYwG11UpmjcNr4N1Xik8xSBdGbLYt7EBeqbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WXjcNA9tRaCfs3VbVThS6vN3FLPsCuXyuTCNLc557sHAnG5kGWfV2jwqk85d2Ba8YRJpGMarSjgLVD5CcMGzKmB",
  "key1": "3kLSnhsBB67mNukPD5GUsjNSdJgoRfFf9SpNbnqmeVGLBSUvABhynNNUihjMEZNrvgLZp2SrPVsus6KybeHEidkv",
  "key2": "5sB2sSaG9CnUxC17kowSAvwWHJVJsGqzTVpJi6nQWMy5yuCBdZ7bX2MDRACLRoK4Pf5LrXL9dx538ywxdhvYpruS",
  "key3": "24JTen5Btp9U3LsFpq85S2W8vU7B7dUx9AZABXDAD285wNAYP4HtfxkQJVq28zZ9kwv2gbex3GmGHTRCxSBLy9Sy",
  "key4": "3nkXU11JswkWb9a3KDPYgBk4FhKo7WcBr1qPNbPsPZVGg2gTSgE8PhFynbxLP6iq6U4C3jeaRfx6Mghe6TsvWeMb",
  "key5": "5BS7jce5jP7oFQqqeb31hHVDkXuST6eXLLerfaShF8KHAPLSGB4NYT5McXSgrtJhbAMuxaFR5ofEXi9iH5Vp8JBH",
  "key6": "hte8EQy2QyRNTQCbww9sctFAuHTbx7j8VCHwcnbeu4CuCHPeUJiHJjFprJDtd4VjBsKXn3GrvkSkgmca7KD98eG",
  "key7": "44ET4x1php7cMtcfZ4ddTGKSpPtdZpEr5RKwhrn5k3Ku9yAnjDZCoqvEYtuwngcGKwQcZBB6wuZSn53ZXKAjVD2N",
  "key8": "3Yhk83Kdye4qjy9xE9NpeFmGh3RFyZFR9evcg3stZRSWmCGm7yicriGDeEJLHQGFFHM62rwi4CS4cHyhRrWEdvoB",
  "key9": "CX7JLrxBNM3Ke3o82DgVfGccduZ62R2S86hKyXVmQ1B8o6aSonzyW9weuScD9JJEggQhBtbuVykiUMnEU7rqoGP",
  "key10": "4Nvi6S4eoWcBEtc6rEvhTXux1edWXfKzJ3du1cFemY8hY7pt1qnK231cisEfaLsQyD6qZLwDRoM4KFpkrpGcR2oB",
  "key11": "2tStimcsLsjx8tnqu5mqSVzTcfdcBcSxUSdtx6bxANWQa4Q38HG48MozQNdKmqhgdVN7gNiCzetFSQKbKWR1Eaug",
  "key12": "27KH4vqKyJHP7UHWXK7GnA11R8TWwPYpVnDwUEKdEmSFdx7LbeEXTNZ2Lto5mW6W8GevqnpaTaViz7PcB3KZcfJc",
  "key13": "2gkyAinzWkwnvjwV1nTHWyYtyycgtm5XiHbJvUybPWe35wEiqXQQ16XsRLU7aaa5C15gJCFariu85TN3o7CKkyxT",
  "key14": "2q9Kyh5Lh2Kwk5qAJp6zULuELwwVKvkv7JoWxJDKcumwmCtASSKjp956iFSdWjT5ctH3a4tzh6UZfLyzSjq6GacS",
  "key15": "4ZEK77YtRK9uUfgjP7da5HesoZN9GyKqKvcZrvneTxQLVK6XSqAyTRk2oujjBcFSTntddrnXCYSsNMr4tGhnzdXr",
  "key16": "2qRtkDEJhKEiyVvGYdojARCE9V65idM78AWPijJrj6scjNJgubBTeHoQxmv6zcYuqV4c17rqBApBuuHbzeK65joj",
  "key17": "KCQpqatKgSp1ijKBZdBXZUydKEB2fMH9f2aRemKsTcvFABUGhqwGzD5ktAsbPvZh79cbjrC2Xhr4r6Sb5m4LT3g",
  "key18": "2CdGit6PYsxCg9iHqKSfkdFuJ6TPW2rdbZP1ivsezjCWsitY4PtEmRoiUgoyiRhDTVxtkkn9SaZwU9N2nn8FBP5s",
  "key19": "2f8T2mzAKS7QZ2NeY2WVR4TUGaqYrspy2sDzZQFzxaNrtuXU3J5z3qeSe4cFhzVew2PobpvwTpBdnonNx4JNxPfN",
  "key20": "Dd7oGB68xuXMHHfTgzrrjx2gP6iGGQeRXoqE45Paufau5iZBSAJc65ki89U7cG7dsCTvJJ81UeX3e3yhsaYC1MR",
  "key21": "2VtUB913kjvpdp3wF3hSdkR5DeTbXEvG9TgwDojFdEy9E9LAZVWwRfQA1D4RPHw65dDE4xexyKsaiL44s1uL66gt",
  "key22": "5EkMmae27ZNVfGosiyJHT2eWYJL6wVG6gtV7PeEeoUUxpi4h5imtVHiVTtn14pMAj4WpAGt7Vo8T6uG11KrJvEjc",
  "key23": "5r39NB745b7kdEN1fgbeQz9SMfHh8NFbvrSqEaPCcpZcHbZ18cFusWZgFuEMw9PoVu3izvLiYKSUBwgPYxvwR1zd",
  "key24": "3fLowaVqLApwwmAxLV2zS5ELApexMapn1nUM6LhkpUDyY2bDYbe3LM38hZc7tdbh4PHcDnkughmd1SX2kFSDSHpz",
  "key25": "3NcFS2GfDtT2xZEykQ2oVqAz6cARLeW12EsivFRRZy6JJErcSpavNtntSPzQdiNqQ2r6UA7CViLaJV2a63psPA5f",
  "key26": "3qVy34A56VSCsnZGHbEUUVw7K7T1To5vw8wiEYvu34T7KD4eFv843zfUqMxCuyPN4mZs54UBMkbFoNGehikDzXrR",
  "key27": "3vf3CU4bCvDNhEZRwGJMdw2WdH9Vj4XbmdGz9DHUBHkndXXroDfRgQQZ4wpvpBKe5uUusrHusoPzjhtGAsWTRjHo",
  "key28": "3S8a4nwk5kYtWYV8Wej4QWXNHSuKxDQZWaAzFwTrKAK3bsaRb8iWt8w7YxeS6Gu5Xe6zcQugNQxoyEcwa1svhEqC",
  "key29": "DtcqQfLaQURSrcpvQeASfJbmxzZzHGtk8uqUiTAZfBjdMg54GVfvgKSZhjaZwPxegJrgxQbT1qVxRpWdbzcBtUL"
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
