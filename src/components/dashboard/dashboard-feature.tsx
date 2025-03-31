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
    "4uYTR5sSSCybBnv7BfVeRcNBXm4TetRFj51jsJFUCjExT1qUrLwYXpmAGqzmVnmwMSuVA6D46X48ZV8Y9a6E8qUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYsEr2KEvZjisHsaizfrk83GRW4oEAXVowkLTsDhtqWBrL5ySKeXKPcW2QeJWtBY82BaZio7tXRgpTrZmGNBPuW",
  "key1": "5H8gWaxxDbj2SHVgQT62eQjsXbbLW9ZVqaijTZ67bmZXn7HN1o2opzH9XYUNCrLqRN3Q9DANDZgDpqUt1RmZLVYv",
  "key2": "5mH2HVmyueVuGeUeuUFW2mVQdFgE7NYCdoW5u6DzEMBZPNhnMksByjta8QmLBFxN6MzYNeYqwc5Xcom3Y19mgFpE",
  "key3": "4DmiX22ZMHKwSE2s4GZYpcURmGpKRcbCNUJ9GqhNHfgyX1i1d9gNnuYFWLq5KFbsQPgtZf4nBk8etJVDfqmbUdLU",
  "key4": "3czbq17LM9xrLEDMJeiPFiso2aP7dNL9KcqqCTKY8cAVRoQwigVuaAZcAYKnBddLnqa3JCZetDuEHE9ykXv2cNgi",
  "key5": "25JFJCemEh8MincU143SXwTkiVhsuT5gUiQnNgEgrgH7bMrLuxbp9943nYbxnxrYqEYRwKibtJGyPQTpGovGxJgT",
  "key6": "45MoQJSzubcZQiQvG1LhNFbCZBSym3Pamrh9vF5JXiV8KhwdAHfAN2jDbvjTPc4ncznX1g7uH8s3oZUTQTg1Y67Z",
  "key7": "5raHc3unqifJBRSTqoCzNNFGjsfDZBfunDDa5DdswMDhTnQgBiaevkyDQnCwpdDn2onQ179896yeux5DTpBDTHdf",
  "key8": "4rfeUxLwq1VWwe84jSS8FKTnvWpRhHLDhW3QCYVCHDcSZmLXY859gMFdMQRprzQMr6RubiforNGcaAP8uxERkswq",
  "key9": "ZVtyYR6r7TJ5uBFnTKZgFgdJeaWacAMVwEVy6xEhrWWyLgkNFANGSRV21H7GRLjBLNbm87a2MGiNaFmJ9j2xjmw",
  "key10": "CFbn2ud69XxjbmyPjFg9H7B5DdZGjEtev2LCAPN8PR3yexZhstWfrW6Cvycg6mpDCjdoLdYETEHJLntThmq7c4h",
  "key11": "4FaSkzDdt499pJqBRnsaKQ7WGgH5ecCoxbGsrr6EXDfhnpakUqjkz3Dt1oMnd17RyRcws3UMdwjsX3fMk7URnWYE",
  "key12": "4RiVb552kNxTkQMowbRkDvBAhEZycjAKWSWjwnRsVux9Uzsz5Gx4boJscwRaGABNmyj37R7vGPtKfHvKhHSGYLMo",
  "key13": "3wvytLmERn2YTVUaUZR4iQBBtBjpiWZXE6zxf9ZkKCkrq1cLn2q22nu4JeNqKPRNtH3oKiYSpBXRLh6RHn6dHx5g",
  "key14": "3VeK44ET32MB1c4aMn8c9Aq55royyqatsYq3RzapA2fi3chfVWFepP61P2BtvPydL94c49FWzXkAAjcHvQfoaPCu",
  "key15": "385bfdYgsSqnhQVw8E6X3ffA3Mmy1Ji4dUGqeTSsqRPCfZGhSKhbzJNAjYnjUApNvXc3CDvmDiijwAE633iR5bXp",
  "key16": "3ZkLgGHKLahLcVhBch2zEmYV2NvVwBL7aqBVNWnphAnxnFEpaUR829TmCHZHMHQz9nBEjVKvmcjJYdpbboHR8qzS",
  "key17": "2odizcUDYbfywtUpFU3puKEphyTZsaMT4uo9kTCYwqtH4NzBEkYosVDEaHqTPLfDuHQR4Z4JCKjV8uixFDmPdQKM",
  "key18": "56mLDQmfJpshhZ5DaU3WShyJH7Agbh5bZDWL8Wc7TEhDsMmYdqj8CwqAsPuKDgtfTXP8FFbKrJeVuoMAE8ndFZRW",
  "key19": "2eGUGwLFmfzxSos8iQbBKEYNARfW93zo1GSFP3TZnPhbXX8UfytjRS7Tm92kqCoxqHWhGv95RUoQEj42RcDcLFfu",
  "key20": "uLbp3DbQjjrm31DE5GUESkhfTNjMguDtD3yv3Pjeqo3W7YrZsYqQafMKkh3sidiN8qjZpkYaL67iMnANyLBuWNf",
  "key21": "2ksy1RqyWYc6ZRpFJUEGWmapbndfRWhh9Xgbq5PeJUXuBwWUyyuB6B3RthAyLCNMHF3WubxzwrN6Dtq5BRVZ2YZD",
  "key22": "pYzT2N5NuShjo8CyFY7TjdrviemcnS2siCHe5f8W74EUzv7euDkdTZqMRyc5UDpfrodF1S2tr9LiceJJu93zNDo",
  "key23": "3Pxu6JaXpNsZtnZdRLZLCJiJoLt21vYXKEbXjiSS29c7Va6PBXaG8MKfEbEmFWvg4DvK8hbMcJjJDn7oY7byDoMr",
  "key24": "367vGiix4Ano44nPaGdEc5DiWyT6XFnZgmrwFXZJUDXYRPoEYajKJErV9HTMkw4ycMAHiPZeQTABVApA3oHaZwDi",
  "key25": "23LPVYREdYKFsZrBioq5dEaB39Z7bK4chipJpN5g2yP2iFwsAQeMrGvH5G5hJCYSoBbMFW6YRGkh1S1QKYrhZtTn",
  "key26": "B33dp4ovCr2oeLdboaCjqMghGLPgaSvNxy9Ec7amGFuQSWeMinXiuHwtKMX63jtxhmoamRASuPjYbT62mYbZv28",
  "key27": "5oAEojRh8KgNS3FdAf7s7esrSbuqZivCEdPVkyJAseyymEbbVEitffmkaJbvxscTifPnZJQ41MqBXN9SLjcW6CJd",
  "key28": "4XoUeRZ8bdb2gHXw7GP8xpRrfKYs2JVcDKrP3A14NcAKRtt1eYPE87uozeFaUDajeiCuK7oE4hcpDmgcfJChhxer",
  "key29": "5XtSAKJJCoD28Uqhar3oeNrZQumcJLFoXceBuNPhGpGBMspu4cmSZfhaH8WyhxBuuUAAsnCKf2PsKcgcZFKJzWeT",
  "key30": "3ibqkXyrzeLNhTUk4oFz9h68CMuc2925GYv4cFiHaZJSNv5VDru19EYjcTqdTf2gwX4HcNC53MgexFiuonX4gjet",
  "key31": "jdbUjzqLHHFKmefw7qrGY4ZqVpedYYoSp9KHUJRDyGwRCyFGNFP3jFzsFvzDJyhDwCZJ6PkQSbn5RhHX2cqBUfA",
  "key32": "2JLN7jDDCepWHPs9PsyZqCQMsEGMUGRnpP8utSXjCd5tMYwn9marEtkomD3SiTrE9p4hTwQTZQsxjKf99rCp8yfr",
  "key33": "5HaUdecPCB4r6fsKakAFcjZBYC6QV6VhmsJY3ubL1xduZdtRJcRpP6oJNrgjNPPE9NXzQstGthDKMjkMkeVWt8Tt",
  "key34": "4raDjUpcqk6sGE1hreDfyc3mYprET32WDVbAm5TGwcmUNLVPX13PG4FdKtvqYEjwZcGPQDHvjgsqirrH4Z39Ju5m",
  "key35": "4MCx61X4bhN6hybLVresL94gFE49AT8CB5hSMP468eg17L78XybvQRjSv3aF8J3Ff9L8XPtRCynTaMGnB2vWVYPc",
  "key36": "2SGPabV7L5UZ8T6uLz6jvzzUwQ2G5Zra7SWkwCaUqFMsQW3BU4W9Y2vVF9yUottMJp4WugBQmeQYbvF5FKbeoXyK",
  "key37": "Zdc7FFv2ryPaBdC15B7XWSnVTswz6e6R3AzBEJoNk6Uk8y4XTTYyifs5phGgG9QpaALG3Ua5NeBGKzo66PNARdA",
  "key38": "4r2V16cPDoUkiPjowdZJxRLXTCFZAYE3iGxY3ShMSQe6nd9zCiwbbPHvDsH92ecD3BNwxJvvUt2cxYAddTYP26Pa",
  "key39": "5mGyohAzsfBegHud6i1viQ3pFP36YAMYnnAtTq6A5aytL4pysrVjY51gFBZQzEhUEh85zRWqRsV7mdKqiprw2Xz",
  "key40": "D6v8KRDJVz2QzLX9wzs868kEtau2cczSXpbemikUUGg4J9eUPYkkPDSduenLDb11fXr3rrdzg9Bsqedy32JZSxC",
  "key41": "3fJMvL6Kk4LjNoaxTfzSAGBz4pU5eJ3z8N2T46Heu659GpWY7MkotjWGkdZdRa3XTzpMn1XgH73ueRBo85jDh8KC",
  "key42": "5gEvwF7xvrg2gFjwT5tM4WbhmXfqumTCiG2a764w19P9aRLZquyTxbvKvGFBmR4x1Xb54xTL1SZDSHy1pjJnRSuB"
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
