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
    "LntvxQFMDGYCo4etAXPgMCof9zFn49qHcri5TvCs8wrtwHCnUj2E8hQ21Xk3zq2B9WjCwXYksaRK9pnBX99wBDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mhAE2CtVg3BRqYWA3aUxSaWKrjQ3bPKxErECBMuGjtRe4Gcn7hW5MeXtG5Sqjirtih2aoRYYaavXuriURUXB7Wy",
  "key1": "3nbrnywaZqzMNU4qnLYT7BTqTPphdCtiJpFB9gmBCDLrWxo5MdB9sKrQQ4cmrL9Pbm9JmBURtDsNAtVwckwySxZJ",
  "key2": "3EAZVF5gv84SEGTu4JpRsGdt2WhswE61VHqjcVzCw5My1UkXwG8cdwNKK6s6oYsJkDmtPo6tAjSvsBB3SLgqQLn9",
  "key3": "53LW3P9499kfTYN2mfK9L5sxN1EVTL45iyX62mJ57NMKF95PDzmnrdV4uyg65Ss1SVimzK3ykwSEmjNT9VojY9ri",
  "key4": "3D6uEMRoY6XHrfTM5u6VkakG6YqkvtcFGzUSkYmpPmHCqaz3mkcWfeNz8MYd6uzZ9mzTJpu4i64F2fXM3TJWqsRT",
  "key5": "4emes1AXdZJE6Gzy8bdT4XZMN2hqy7P55k1b2DZvhEy1LdcmC8WnTjyNtV4qvan85RPWjCAZAtqfymvUVJB6Fq91",
  "key6": "5N6mcLitUoXdGDYJXaZCgJYQP3jzXjYhJt4wNFLjYCoCnvSwLLNqtaMewDKEBkEcnJXpqiDxY3dirSz3izE3rNGw",
  "key7": "26JgDGggtW45DkYQhFQcjA6dChrdojiyYLPYeGD5YKrjkvX8FyvPdqkWqPzdVPZJcagYvCYpqKBSBsFRQNHSGZUt",
  "key8": "2HUqcreW4nLPJ9K4mgaaL5xLnwWXSPgEeuTy28UoLxGh9iXtHEYBwZJCYMRjCiMU3Lu2cG421nYKh5B5WyrdceR3",
  "key9": "2soWPQ6FoU5uQNZWYKuK6gCn2oPBzsi4ZXWSYifjiqxc4S3os177JoGxQxWCXZawbJMtNwfbiWKFbZRXLbV9AxkE",
  "key10": "4WDysLeNqbem9dWx7i2kXRo1riytFqR7UAgVn65S2ySZLWngtx8L488oFhDjfKKQ7bazejbw1NbmnH6sVVARtUCD",
  "key11": "5zcv6BKhLYPKEjKpabjgBgurdVhEeoBzXAbDLCkcaxaPbgtTDGncSb9T5ydZqNz9LQg2sLZm4wHTymCXe7JYTx6L",
  "key12": "5pv6C4FrGvWsd2eKkyxitBMR2uqc9iqgrY1jRgMZDk1EGkhiww1RJuepvn4NTopB54CA8cevBVvWuygui5Bshw1c",
  "key13": "4oMjdgBapmCjb628xXN1LK3G9ajZ256ud67kvagojn66v3gqWgoNPZ2FHiahcXjKUKBnXhhP9F9bB2yqu33NsDGj",
  "key14": "4Y9RPu9Lb8PWZ1974q3QZDSYYhPiFSgn3PF8qRt7nXG1fpbAqsuWFRcMmdCfAVvWFj3hbVxYMMzh6gzGnAmWuX9d",
  "key15": "441EBJjB5PvHMbBybyJg8U8VrhdRPzNn6an6YJYDmJ5pAnaM1rFxs9a4nCzC6XM5g8MmdBn8ZkV29efnk7x1Liy1",
  "key16": "2djuyrZFzG2NTfQSSWXuAn4eWodcqSTyuap3tsi8VaroC2AH2mbDuLD3ufdj6BBzdG5UsFMg27Z7zeVi3hwSGQ3Y",
  "key17": "aWVvUva46JH74ptcMuAm7Kd4xzthvwbRKNfEW1M5tDttvTcsxG5pePTEUp6n91X8NzJs66ayebYEEQrZUpE1ySJ",
  "key18": "43yxJfPEiCS2VRmYrXwUonVw7nf7Ty8UPkhTHqEwMadGKEitc6HEmEv4Xze2E8um539Ehqfhui4JWW6K3AETBZAz",
  "key19": "4k3fkfHLowYdpv1kcPKowh8apzbWtJhQcHdMjHD2szudCWWJEn73DH1N3fYNYiCW41EtR5Vaa5e4yvSKbwLhTi2K",
  "key20": "56RhUd3m6C4FxbsmXRcqWrHN2ykckRZ7PKqVyZd79XWYqKs1ZiB6c9adKTb3FehcXKZfnJVyYyaKZZJLrpTC534p",
  "key21": "3J5eeda5z3MNS93QrfJqoZr8h5gcrKhZwmyZ5h512aJCCXGyBF3J2yL6Y1N3ao4FPK4pXdP5oaNWuHoEiuW9dgv7",
  "key22": "4Q9enV2HrRVyNkC1ZRWJP6B5QonNWjKWrWDiMMjcBbcKnbziAjfn4ZephKEj5dbenQ6a89kBU5iu7xwkwZiRdpBp",
  "key23": "vHAhhnfosUuQVDqdVE6QQzS3duKiMXK966zAKtyienQqoDRC7QnUAxv56PRZGy3evdBqD9QGaPG1AoY5pvVS4bD",
  "key24": "3t87a16YbvYyfddQxTb1zydLubQ9xutiTtHHRWWMnTtHAEyJUBBbQCa3ht9utxGfLG9CAL1z29QhbRTQF48t1AoW",
  "key25": "H4rEymdS35oDusEH2QxCivgmVrbkejx4PkMx8qGTCg2od5tee7hCcvS6KNxUkmapVEaCTsjyid3E3QDus5Z6SXW",
  "key26": "3TgJxqUjLtK9FtfbMboVvFknta7fiaVNhYgja8cmH6MXGe3WnabA3pFck8QGyGcJV4q5ZHyttaNDecZfQHhkC6Wx",
  "key27": "1NEN3W9ki1w1GoUKZK2t1shA7gG9j8Mgdn9Qe9HWB8NyQzWgqk9zkXpsPpESzjc9gXGDHG6xnEX78Mk2552tFDo",
  "key28": "4VpM8EcJneFpiyX9b7d1AjUCQwg4ogxM2SQ3DMNTxkYPXZLD6FndktoGE41Y7Xg3RRxS5jZrTEbDMPEe4ZXn9R6D",
  "key29": "67oVBkJNnQAEXteT1BTy6fdaEQQPkgnedhynieF9UyT9nUUhZ7DTpbAnT5N9HQxcDnrTQcXBGQE7av9sYDcBciTV",
  "key30": "5XjC8e7hecRnS4ZSpUSujMP7jPRXpTRuU3s6tBWjpxnmLLWmsUsi6secEo9wEec9mfCCTLmK9QFV1TmJYdDnX57F",
  "key31": "BTU8eKNFN8oVpVdvZkk7emUgVyQnkyGysQvhLZkPpQKocmSbZtyrCBh4rmd7HouQTo3bdTNdNNQ25cRU8NVd2rG",
  "key32": "KXFyP9VkhXRh1h14oGgfQX2eMNEn3SF6DYDSepZDLqNPoUtoP8i4SkNXGD8xxV8PgrD1nLL3x5SYAJVqQd26EHG",
  "key33": "3TpudE6yTEEdFTyVtWb7dPZAhWNsGqpZX2ft7BVoQ4StgMbrRbfbwMq39Bb9jpgTEqUvvNMMi69q1ViGiESuBYCW",
  "key34": "Ci9qEsrdxFWwLD8bgX8cTjjtuCsF6k3Bz9fCdpaK7EMgXfa8SMv3aJVfULSp64S3HPhBdNwf6MG24KUMtX1Lkvq",
  "key35": "Ek4wTTEWfhUR5MKzHkYUfMH7zccDCb7uJtmewxkWpiZLmGS9jvQLt4U7ajDaZ3NjvyjXJHWxZcUKcJH1qSfuucr",
  "key36": "4GrAnanMwU8TD3jPQHK5EJpa5UbecAodRQxZmRJwaQgebN1fqU3cL6ssqctjy3h4LM7d2Y67zQGb4WvNLcoQZqxq",
  "key37": "3LyUwzknz9gzDAaxMbakgeGiEzzPb6tUUnAZRQK9subLdsCf3xwLzKBqGonNmiYuJX4Mu9YeLxhUkjXB18BNDrjD",
  "key38": "5re6PFL4dzQz4SAkXghH9MWkPEHk7MFLh8ikzEWfQNjLE2oNrSRcDFqXjS9W1L2Gxg3nUCJ7TBd49L9FY4qyhfeF"
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
