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
    "3Z1w4byNaVZsEk85DrieUBohb26wHtsFXsEMxTr3k5um25AKWXR2e7qJjtBZQCH8GHtSRqfZvorWQQ3KxwfQoLAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VBpS4dNBv6g9hUgVSGTVoqA5rpW4e7QrKqhYKG83Jd843PPndf2sWNasDvf732SWWYNbLd7mCgVAazTXjmoi9c",
  "key1": "q8DMEP3Zds6dbfKQk778bRYEinodqQSAERTnudk94mxigyUtM5CGZfUJHVoVaz4FNETLN5ARuXktJZGx6zXkEZp",
  "key2": "52sLxWTjdPQGhuC9PKMBReEaP8Afqoh1uTqYyv1KYr7aPkzigENvk2C2S2gwRY8tTAkFYAv6d66D6A19JCj4bs9t",
  "key3": "4wma97oEZmRh49FNRCheNGPrFY3TPuV5pgKwh2UJA6bLFK7QFJ5VqE8SZu1LV6QgH284cwFNYA3LvD2Z6BkHwUKD",
  "key4": "37WSqVTbm8ZQuU8TirziCWXPU2FjdsJTd7BoupKTYi9AFNuQ2yu1HCsmUnsmRwUtxJ51BkUsybb99r5uoLbpkYZ7",
  "key5": "5wcyvaqCKnjf1CgrcV4ZzvwcY3CU8ah2SSuf2jJ1R7R1RTXG2XSb6r2Yfp7HQgfNpMDmVaKudTmhgX6bis2FrfzC",
  "key6": "3FFfJYVn2zAgFFVxkTtsotVD2jaAbAdzjeVgAJ6jjwRCdz1Vz4tJ3sdmf8uUXDdPGGhwzWv3eXPBhNB5GMmm1tYD",
  "key7": "4uyrq9KnLyvdoSXCLM33WhoXeXvBTVVqKGzZdVRe6AgM2C4trQqVyokTT6LCSsacprzTgnxfBiZqkcb9kCkFW9is",
  "key8": "39cq4QWiqMC76crhF7sjE3kcb1QntUeQPiVUKXgeBiLyodzAezbX4ucHfGkJbFzXUusBtuzbD7b462wDAEHPeQGH",
  "key9": "qw3hkA7QJ7uKMnuaTMvuDdy4MStDQdf7u1tVwZFTBRqGHV8ZYfuorSPKopsk4UMJpgQmE3teS85XDJWtwcZWCmM",
  "key10": "2km2Hn1bW1RLWSixSP8Bjbg8GG4thaj9izsGG3onZyeHkfsPrgg7LdpFo3kaY2sbGN3KDjPnBeyaLyY3fZgFbdt",
  "key11": "5t6FMWSnweGNa4HLHAb1iTe6jsSfUQyG7QHg9QhTGZhv7L2qoea1tiiVCkbWFUEHeU1EXs5swT3eQYQjuYue6mr",
  "key12": "CYM7KmoB62Wa6Gr1rcgjBEtWwLtBqgNRBneW1Qx7irWJfYNJPAZUKt65NJhfCvXF7sQBdHXAkAmJp4yxTzC7ZAU",
  "key13": "D4BQXDbQrzD6aX5WL83poJXashnoC3zJDoW3infi2WzXqXvLRWvwTNbSQ8vtHjwww73wSTKVE8WwyFNJucrTYQd",
  "key14": "2FWkYPaPWyyKgsyuNC4yxuzZBrzwuLiGv57pYnAikyb2WrKhWz7rbLwm7mveFSv2LHxy2zyUciYnUTyJf24dTzGV",
  "key15": "hbd5ddQssrdQhF6xKfDGxLGu7fimADJMDqRxJBvKBjviNeciTu1bbuLE6Mo1ZUuxN5qAH7yqH41himmnoxL9CvP",
  "key16": "iqYymMEFqBEdLj3vkHUWspm4C3yZyYs1wvtUkHocS5kYzyXZzC2dBud7HtQSWo3uEkYAgkw7YXQic4ETRjaBbfy",
  "key17": "67FUrmrgBco5G3yvh3UJwZhUnZTAKARsmBQpxccNWGnTQVhkQa4HJVu8ptMnSnxK3WALrPmhunpXhvqzooaKqB4m",
  "key18": "5KWyKQwDywTVQcinqPmSYQ3VDjN9B6p4QYFvTtjKJ1CC78q2KDKdKmNEFhQm2tPeb51jEcxNfXX4FMh5dAbNtbLg",
  "key19": "21kur5nv4sfDXDSRGDffLtN55me16aUiqtVX3gHjEhoa3WQa2QXFpJwMiAcW8MJSkFnDkiJaNYqxfvwpNFoEqNVe",
  "key20": "4Py8dXfd2MeL14C4qR1Ny3NjRXUuDHc8GmXURjKCWsTEJk4tBE87k1CBBmyoumo1mhuevGtwBNQyK52RSAwQakmD",
  "key21": "2nJedMsrouj5R19RwzJ5Pu2fEUsPQfNjqLVXZMk9wafpFK4pBFsow9aXnday1KkQgrHWYAQQehYCZTXJ8rYfirUp",
  "key22": "3Z4LQyjCDiyaXxy1LZKPVF38zhDpzuwaoNZK2Yg9oin3vQ9VxewNEBjZ8yyM8FnpP3mcCAf9Le3caCCXFdmh2LN9",
  "key23": "2HSctSQimNA56cjHGjeLyELCLHtnoJNeV56msUGAP9NDwZDcSJ4pKpgTxSERDX5WNzLfUTPyrD9dQPjEideXdthq",
  "key24": "3qgjZUmygVsTZCVsr11JExgBDpp3tBqrhGKeNUM3Sw1eh3Kvbmc8ABdf4UoqEbibrBpzwEKAPBRAG7ZJJ51j4CHc",
  "key25": "2k5jaPynBtB3Jy4RioNL5raXmyytX1XWsre7Z1Jy1YqKZ1tdnt7LBcZtpX3wP8GVtwKKFGTtF9cPzXHS5EFRZYNj",
  "key26": "4JpCanTKQaK9syVScx4ZCkebJP36utEq6gqtARAgXubcaeu9ziGs3wpVN2wyC4cLcV48VP6h31MtvMDcmWnXEaEM",
  "key27": "3evRzbq34UJAH3qi7fJTd7UFGQbMZrwVFEiveETZx94V9sDU5DtmuAoPaGocxvNqrzZFx61FWHCcF22NdULEXgRK",
  "key28": "4gqF29o2RHpg2wZAtjBfLVd66nXXXyyZ3LErLGdtHMGmWzTxCuwvV2EBk3ZeDJeYmpVsF6yvmio9U2kJRTQbAxyR",
  "key29": "723GbfVowv57dCryxA66swCx6EPJJbrNjTMeuTFtoJ5Gz9Fba3CucnA9DB1bvdirw4CGu3FhH338QyzsCGJH2Js",
  "key30": "4RD1Y7BUkc5tY3aQ9rFzhs1wiCEKTZ1RnfSD9VYGHEPb2N1RXUeq5LWE5U8GiFvNNoTwfJNYow6LjbipuKXpoKkU",
  "key31": "5qysaexHgyuoHViiHmtgr4Lph2xMAPNNjJ3xnoJ94RVXSQ5wWzw6kDaVYPwGnZpPShxE2tGuuwqhC1ttj1TpzumN",
  "key32": "5FhzRakbqRPqKS6f2hsaZYCfgySPeqcGZ8wfi7ptfaXwxL77PiY4mfxcQos6zkh78ABExTcsyPiEh3Ng4WThQgre",
  "key33": "2vTGwYDbTheF28P9sazuf7nGhQJWzwBbqFFTc9LbA4jKh9apRbj3Uev1swno6JPg7mZJB7j23gNty8MwAfBSvkBk",
  "key34": "47b8bguCTokYYgs1H2EsKmPZbsdbPmsyFpdsdR9hu1YGxHJrDkZfd6Qx3icghm3bSe4uKmeKKzorDdgZwx8G3Dck",
  "key35": "3bpMMXp3uwEjA9mVHyrsWH1rdn9kXEacgKkMBjxfK2vAkzLojgXS9h3qB8RnRkmqsrtquUTKjQHMm9X4oGVhw7au"
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
