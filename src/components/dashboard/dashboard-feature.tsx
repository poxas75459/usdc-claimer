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
    "4S8thSHeatjuBHNLYEwJNcBSoeS4cmfJuRE3L7ASPTFj6yKbfqZD8pNt5Q9UVLdyTe3M4czG2MGCqTKPdX6eQuyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sjj1aSEghk6zkmuKfwfSKi5e59yqDQE3Ka8bZ2LKgAQ2yaied5DiwwcEyKCtPUd4kWdkWgoPyeX8FmZvEowF5Da",
  "key1": "4yvkQ3YJxdS3KKJQd6T7Pn2ESCgNCZghU5Ug79FQyWfFnEaG1pEBDy9JrqzKtx8t3EwcBC225JuonCeM8aU2qk5x",
  "key2": "3mDtpN15xxNrQGauC62q4BKp6tpCDbC4ciV821aR3MERvYBBQdib38PnHTyF5wR3QBPsZXqJPzEDniVcWiBjfVMD",
  "key3": "2VtpQtoLQQr7UHTGMhAPp2CCcD5LcHu3Uc6Qxte8dhB417PFs9SQ3BBpNMPMzBvDdYcXd86iRT5vt6g4zA3h1A8F",
  "key4": "4PoDg5BkJXMLVddXqUs7SW9YDqnhvfhyNkEiMMiNEH2rGojHZNLeUTGtq9JJQSgYkRi7HNK8BrTtmJERJo743Mg3",
  "key5": "5RCAmgDBeRnNg3HjQLZNkbRoJH8kcdB7azd62zZMb2b3etzn8rFuDr8J2f4r7CwjAL55SaHBS4ioNCBtub5VNMB3",
  "key6": "2d9eXjiudKpkuwK3djpG7bDwQ4NWSbyZf5FCfZGhBgKH5JHdnsKKSZSgdN57jpHfkQWNdPzh94iKAVi4wzufS4A6",
  "key7": "1Ab4bTE3QT67BLQRpSEv7V2zo3VUX7LN4vtv3cmvEa6keEb8CASK4fFZR2A6NvFy8pVGFYDr1Bz6PqvMDZX9oQM",
  "key8": "2wj1iryfGmfCY9BvGS1XJTPJwQwBQMh9jT8qNP3rsRNaRLYZMiATAPk8tKFi9ysGJHVrQiQ9C1p4kY8PqAp95Aui",
  "key9": "2x7WvsqA98AZ9hN85tg3pBz31ncgoErTxvu5wcYyoTUAGqBEEFyuCdmSwDt23Qh6yQKZrui4TdLVdYaf3STR823Q",
  "key10": "4njQte99kX4DzkbakCy4pFKgQfvQ1K51ST6QGY82x758cSoPMZFwfyVcRm7zbZTEw2YgFv8pN71odB3nUjoUNRCA",
  "key11": "5BehEFuy6KP4gEYC7K2eFFkj9KoU155qGokn9y7cG1HZurdQdB9xpPwVNAtbTzxg83TvpBpxZTJfCuXzJTtMPfvb",
  "key12": "3EobdfB4jft1NCoE5R4VdqYyMJQsccrVBZEE93zS1t4E8n8ejr5HvgpDvMXTvUTBSSarJ9P6WxyecU9EBHEsio1e",
  "key13": "3FTWo2Ec1AKRLWUEAANisYM67mpfeTdW3TRihsWKZ2qG919TKXbFMNDFhC7qjgd8UnzR5Ec97c4Syfi2kWSxbhUg",
  "key14": "5Q9G715hYrjuScJtaYWovQPQwBu2V9Z8wcNSG4LofPR3LJkoZkWftjojaCxkAAfMUAAC9dtpRw21KR6HWJ7VdyFJ",
  "key15": "2YYxpS8AVXQod7ArssGuB7ehVXKYN5dSitmGH6WDmfJUbdwTvHG3vkRHNFTTRSusytUoXWEucbWW89bgZKrXgMp4",
  "key16": "2ZZAnqLbVB64nUQnRQuWFfGQx7xvGYumwpcno4ZFxUfDspJbPr7EqnkBe5ZMJQhJ46fNR3uFmTbJW7Jj45WvFi6N",
  "key17": "FBgPzMN8p5x3xiHrMGweTQHimmAih7FbDgKBE79ZynqswoeWXDh1cPPzgXYNCZYGLi9vVskeEbJfBAzs25EuTxe",
  "key18": "4X9WbyBkbZWxJmj4PJNnfkgn4Vu2VYk72FtHtet7wSTRy8Kp4HQDyPrKhWoB9GcVqmqFYxsxGkLFHWbgPVsfMvEJ",
  "key19": "3cdFg9ESbDRUuZR6f9FnQ7b7xogikx7Dx8CuUJBYpSHwpGyPLN9Yax43YECEVHZWu6gJyCvbDturBHQ7HZYWSxCN",
  "key20": "3nQY6DYJ7xGBbED7T3pjcysd3mSFapvjQvSKwr6iJou1GkqDpijtjdRdMsxN8fEqFhVaNpib12wd19uX8j6Sz6ak",
  "key21": "23jkEV2vALA7GYtdwVY3LEe1UUisfqnWAVEqPd5NLE7jEEJ5Aoh2B7jqfwWzYkT8dv5uDhS2rwU3KXtGQ3ybF8qm",
  "key22": "58j8NazPSnjswsSYMMZaGaeYSTy4HovVm3gApCLV8BRm9Lhrf2V7zWnkVGLQKVzZqE2qeVtGUrKfSW4inRkyPMRb",
  "key23": "4R2LKY4Ke6KJLM75n51fWxmP2Rii28NpYcEi7tR2LN8WKXYak5CvGxX7wJyN1iF5G93f8fvQ7SLs2sqLjdoprjFk",
  "key24": "7mAftEMdSqRVTnqr1utMqAYCmjFpHK8xcK1FAMeWHx4LgjtNPvksaJ7yDsfqzg2f6VhhvG9iViCg9NMQDuUbnmH",
  "key25": "NhH2mLjVZ5E6D85oFpvb8pZkQYf9b7wd2vZvstRZSBU8XVtnFZLFahnd4BcXbR34YZN11rLLtKensE762wqTpJt",
  "key26": "2rRbHzRPRQv7xNfUTRzzy4v8WrK1zGedPo9qx4AmGFvm1TuRjQphTVkdqBFNrt6BUeaNyTD4PfTvqRR42m7oNVpo",
  "key27": "3NQHYvRYGEQ9haMtuqGJDbspdENRYJwx5BtyuwKZPZREKNwrTutiMBrcvLus9RS8S2ciCDM3ED3ycgmuDSauic1t",
  "key28": "KNvigBxCuLndkrMFT1WwUJ8WA3gVGQDiAYgoqNhvnMwzdTbgmC35yT1XQvfuEVGJotMGWhXpmDjuxd24SyvVVm2",
  "key29": "3bWnuL4jebcEEdx9uBKkDN5A1vY61LY65ERngnNe4sn1XWkziVYbi2bokykFSjvniW6phhEDpcAsXvhKQjLgnFUX",
  "key30": "4NrJ5GeJWtciugHUQBJLPgGXmcnpSvWkBMPUmSAJ3ZAoceqTGufMRpH31udW2stTPnK5nbWcr9Vjd38A3gYjL7jt",
  "key31": "5YwU76ewfLCrgPKGvhpcGBkAawY9dVVydFEjDL5mC73e8e5WUwDhkm5nXNEjett4ChrMGVmvXZGwnn6W2Fi7ZvWF",
  "key32": "5t7chWZtTqbVb7dfQThmrVXfLdUUYXqR2b7oh9YjKV29cmrzyJkxgV7qqSn8C6gTT9DyMy3fwfo64wxzrf7zUD2v",
  "key33": "4cjjCkrgWJmFFEyd2hJW9X9cLZsgAx61KmzjLRbJAijMun8CHwWw1ToZSEN6coAzd2qGK9XQuMqqizLKnqonPez6",
  "key34": "39vUs7CgUdez94VcjkDZNhtFcWXxUe4GAqJL5CsgYSmYg96mEE4ApScv5dVzTEdkLTx2YZ3y2CsJF1JvZJNKkU4A",
  "key35": "3AkyTs8jwWuPzosXN2qsRUKUFJaqJZvdBhHWEkvVLEmgjGdbAWSV9LcDyQrXZtdWwRUfZuL948tWuAVX3xwNsfS4",
  "key36": "5Lst6GeA7DgkBsBELjpMk26cNhPMpBBX8DRWDVtNeq1wBNMuXjCiRNXkvtVbm7rggAoh7dD2Yc8dgPsXvgmgAXRH",
  "key37": "3C9ZdH8w4f1AWWv4sjQgtFm2o6p53f3G9thW5ApUTPqtyRX4fL54K37fCn9HzcqEEB1XqdfSpDF4MPVHyXjRMJbq",
  "key38": "3vAtfp4KLNsuEdboYbsTj1PE2j6eBwGwQSzje1GPBDE9XdKKsZde2TpWu1aisw4skS3R2YwArUyBMTc3s8b7owK1",
  "key39": "4wAvLAenR1tVdqyKhbGEYQuFJgKN1rJC4T5zo1JEbxhWKKxw5ZAW6SYvKEyMWiifKjPbAvuExd5sUqruhTrK1NZr",
  "key40": "2hUK9fi2adhXUaM6ytvTzzA6JvwPFnHyVqHf3xGxTGEFxVeMFDv76CjrVrhjBF4McVKTBoiDhSQD5UvUuqN8p9GS",
  "key41": "5DqUqm3VgjTxB2yEXMXP5p7cb3ZtBTntwvunQ9C1DPwUY1ountpL8CtnCvTniya7SF4BtbrMHmZaiSaE4hggFiCP",
  "key42": "64fzCvA2dcxBPJWkjnS7Q9Dci8yNopB5wdLvVaKLhBBtX87q6mU7ZxxiZxQGi9q9fb67EQ7T3fgk9UicXE4xezYd",
  "key43": "4FCvGF9T8h4jLq8uJLDxURG1ihnqnmwBWCybpco1dnu6bfR1EgboQRNydNrqex3KatW1Yxt18wFxxYTjNJPWYEui",
  "key44": "2DdxextvxMRr8wvRN33Bi23AzVQgF6wtLE9yQkmMkUcvfChbxa5sFQ2RKo4WMzCyzF19uBQiRDTwMqbMJeMFm7FC",
  "key45": "3eQFME76vGQmoZpHPXpL1FpEeuuEtef79mFhEeA1XycsdXamtaxqxDSdU459NTenwQgXhKPHGU4nsKo79etkwJ6o"
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
