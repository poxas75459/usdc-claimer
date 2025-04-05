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
    "3sxi4jnh1NVbT4PX9g5ambhrEvzWH3t9UPnugU2qXpjrkyCyHGnMKCr1eVcUdiJhpDEpuVeog1JnMJBr7Kf2Prts"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btoZAApLKYFGm56KvsmRzoAfw1ewDPLSoQVaZdgKd6Ka4YuaKH7gsEj5xxpdDQrgXHNEcZfiZUGuXXJeVqGWjwN",
  "key1": "5rtgVLsUM9gPGBe16PRgcPYaHmFZSCPcAodVC9a1TuvY4s5K1TCkyUEMc7P1iDGSaTvM4gv9v9Ybfr3hR2TCi3Kd",
  "key2": "3X7fz6Kk8FzUxA7Pkc78zB8XsRAksFRsQNGCdBWKAxzjL6HjpGbXJdy7skvZRMMUX7mL2sAGkJEoHPHMPCCd7hzA",
  "key3": "4A287mTgyNXo9BbwmXPJn82XsiyRGHAzWKeFSFDVToQqSzNaQhEcBGz59f1KapCot7erLzWivFga6EbrgDwZHRNC",
  "key4": "ZhX5HFWYnujRQkoZzHeLWZ6kaqqupwkgFbynNm76aBvTvFUJ7oFniNAbVqNWwzdszVAvCHYbu2hGU3nXSBDYZUW",
  "key5": "HLmQ5p2mGs2LXpaSBPde7kVEFTnigcJ46p6tEVckXBtn9aW1yrgKAyNoFiLs9CgBKCwbYsnvhRstRfP8eVLbpDn",
  "key6": "4cvfDLShDR4vCcN1nuimmNXiY5YgEJvJVgH4ex7F9gb2NGd42yGeMTwviZAhFLaBmhW6JdghWECKGuGN9rozZfdu",
  "key7": "4NVDTMiGQ2mBS7Hk79uGD1AwrcZG6q5UcyY3s5zeRpbJyrhHYto2fzyS6a7W5qN8vJjsRvJJ7ebrPB1BzjpAJouh",
  "key8": "5SjmUjctPcjZLeMQHhAXzwCKfbigdkggW2bizqvy1TWxNeSkVufspzeHDaFAADSkKbnGvZF3hBEpxjZkAsD3CRho",
  "key9": "4uZhFhmsCR283Tb3XKe9qfyW2DBpSYA3WJtYFfZBwwez6K9aDavbZXQsSeAJdjKvNF8L6x82RCSQNu4u19nDZzXj",
  "key10": "2qJSddNabWheEUYaBNvRxmCcKhY41UxNJ7a7zxbKuTTtD3vKt8SibWKb8taiVo8H1UieonW6WbNuT5Dzo37t4mby",
  "key11": "5137dbADqZ4yidBavKfLcZCriBGdAG46mTEeiym9qYnmiKCJSAMKW6C8Qv4F6zp6V34SZhqD5hTwsLAqJuXtophp",
  "key12": "4yLiFyudYGTX5MJZeq66eWXX7yiKCrzJU1xKVsqe9jN1oozhRpRR7QDLSMRy9655wzGapsVZo66T5gpZezKCXsjc",
  "key13": "4Myd6NUbYFjf8KdaAzUSZxEHZVaF4bvgSP5jAE8J4shPTJznzDZdagHDSdXUEX5JVztccbFyctTotc3CdTgJ5ayj",
  "key14": "3wftZy9g6ie7vBvubkWy2gWDfbk1EC73wdfvHHsXSbMyss9yafxQReca8MBQXPJFoFgBnffdNUDSDgVCA3jeb5Xn",
  "key15": "dzsz5z57SzxTxkpjCY6Sp22hKkbnTmwaWXHFbBGYZ7wNpkdLJdkRP23rzW2zmyoYGa1RNVY8J9CCZEyyD8aEjkQ",
  "key16": "5PomNhLJaH5tvpWCtLfRv6dnb7Mkf2SqimSUvtu8TNXyYtf3Py24MM6M9f7k2n5qian1tih2fNWmHV8PEtfdcRjK",
  "key17": "QpUXNFLZUYRSGo9uwidrJuME4w3XtCKxPAzQ6SSyb6xFv3Mn22r2pu2KxBky4CqqnkBQHdovD4YJ4T6VE7XyvKT",
  "key18": "vCwXbXa99SUVDaqtftXap7ouaAbFSyJ9eVSh7DLQgr3BY6S5iWteh4stQVhu1Erx34yjoH6xfYgRrM2PhrKawDL",
  "key19": "4Lt71RzzVMiRXCcnQ1ony68iyv2gbtvXyx1c9VXoE93UHKaJeyjoqd82ax9NMuhsV9cinhKFCVfs5CQtD5WuyJ1r",
  "key20": "4NJzaxE2d194amtRiYrJMZjym4whR21mK3D6Xq4x7tQhtADeWyEpbCL1H9hyqewmhwikHd5t5QG5EXddmE26TW42",
  "key21": "2QLEqwPaVYCMgyFwCFjbWeLEkNqtLxTzf64ACW6RPPX7ndqL8SVqxzNqotKWdW8WaBCTDDjpqAQUKnWKWbokAvZF",
  "key22": "4TcVuGa5oYujcEELbQadu5WachAH9WAj2rpvKVzLsZURNRmzepMAtQHbnakfpZgjc5VS15Qg1aowiEPPxg62fUpw",
  "key23": "5gELsZzHjpfcAfsjPrAGtP1PGS3M2BDtsqhiWR77rCHXWfiPsn1DaVZ9LgVZ4YSpceqQPc1xCmR8DsvAHqgA4zTN",
  "key24": "3mPxiadkMAUr3Riq9SU4Mj1pXcHFKxwd33B394GJDzcyuiervQwQpDhnZ32WDbgRM2TqnxU9MwfyoG8SDQhE7a5Z",
  "key25": "65QViJ9Ko3WiriPjwEyy9GokhTSR8YCWuq8Jy3neeCKa6qPUr864JNrzsAiMs9qDrttjpAUcuzmSTeXeEEr5iGbf",
  "key26": "2DiWhuZJAM9s8E4Sh1ZTRvik6D8ND8xkT2seN8CBN4Lu6TR8uDTRDmhGYi6xmNaNLpeHc3pDP7thenh2mZjborFa",
  "key27": "2qCVENr2YoK3gDXnbQ4xZDAyVhtqUxSnKjFUgHunLiPjD3pu5Mrn1qEzAyN3XiKJ3G51aFXifHHxdkcN84Ko3A5R",
  "key28": "WN7v6FJV3j7Fz2AghTVQ9dbWZXn8rkhV4zTurQPp7DG8YpYmPQ7LJ1omt1ivTJiBG35V4MckowZD7yXVCjBoefA"
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
