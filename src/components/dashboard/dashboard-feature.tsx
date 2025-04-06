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
    "63Nqw1qxMJNFxHNGjKMkFH6RxjP3Fm5fGgPGEzD4hWxsG1vXfNvtibE6Bmdc4oJCzoVGBrYsTiGAPvPmV7rbayYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25cBjA68KmWzPphPy2C35J3Vs62RobXUqoD1w2oQGjwiMDUe7btCfwmQdMX5yfgBnZ9PTmatnmDre6puDJCuszM4",
  "key1": "55bPY7S8qjL2kPKyf9s6XQVNhjihAjEb9nugQ6B3S2846HxKGQ5cga4GdCX3X8PWRUCpxKWvXke5rZcWwx34XNkM",
  "key2": "2RJkJfd2W9xussNm2tZUJGVu2u9NHWA2hHb7aU6op8fYzorAFAkfk28jkDfysGAZ7v5AsaaDijAP1R9y3QPQVqch",
  "key3": "3UxLyW5jv8dBdm4qFhumvpkeaBoLPQed49Y52YyAsm6R8bGp6rgjsHbT95L8dUQKafF7Z6dCkeXsE46yJjzkxdTp",
  "key4": "4rNomqn67uypoNbFMHGirTApT1jC7vQN84noyQFiy5qoz2hM4Pf5AHQLQ9CdRqTerPqsVPMYXHLBr2s3XidtDk3n",
  "key5": "46VeKvs7C5FymxWUBSGJuEzd96RwxS2AD81iH7JGmqizYW3Jd5aS2bRmMLAehxG8SXmHXCFGv3xB7G2wVAXNssXx",
  "key6": "62RMzL6X58NzzCU5qv8iVbsryib3bHMLJN6wRdw1qMMWiYLqVwFEGHNhy22krHwRGnbchbEZ3zzuayQjAtFxQVJN",
  "key7": "3xidxe78Aumx5vSTM5YinwynbWyW7aLn7RUETg7nQgaimTMNcHZwBZt7vQ9n9KiU92RsatsUHjrqFc3GNo71Co44",
  "key8": "3mhUG7qPPGLmbUqidabEsgAoeUUpVoByEZpJcZ41g1ucS1UgasurwzG7AcMiKdJAZVd51XGfK7US6ddp8SrzhSH3",
  "key9": "2MWRLuzfZTszu7tU6F6uSpZFdUBay4yEGHkuEWF6SEkYR4PLrySUrTLXsMr7e1LsxQK9qKC2Wx6M2GAJmGmPUgVa",
  "key10": "of6TzFFoP55XHvKtdNqAaj35CoQHkWCBiXZSh5fzAVy76EVHfkX4wxNVZedGJw9YmLNVLdMZGjLaayngdF9VGAm",
  "key11": "4L4XfjzF1fvAUrng85H2iLjUFtTsJttDAvTkqiokzHQWUAgboZdGzfA6s3QuJDYPv3dvyu87afua6tYnNnkexgco",
  "key12": "3Qtz2fou82k9hY8Zwm9x6ztdWeTuthSFrDfT3bAebd9EWsbF7acok5KeAWjbpxQcoXQcr8MYPUThwW56gRUWqpVV",
  "key13": "3WSntgQiQqhiE4Fpb3ZoZRMCPk1DnHobTPHkWM63RfQpxaeJzDsdEbuTiESJaX2BJYFykHvfmWrxCvFLnc1PTRgN",
  "key14": "4GBPfZDeUBh4NGPGFrXzHNFuqEGTEL3m2ZdkXr6frk2vv8m2qYJAXpXUeZGeoShL5VgQbSRMLfhSkTJFM3Gs5ZAp",
  "key15": "4i5v5DcnJz5jkXyzDDLNhFg3wRhKt8qpQwiyPkh3Mf4nKExVGuD5VZszmp9ZzSeaMG3AnaQZpoVQtb4LBzA626xn",
  "key16": "3DkBbL5Pn8TPhPJ3i4VRQ1D6MsR5UYVYonM923zzQaZECSbDxteWKidZ52JEwP87LeDrhBAeLtihQz8XUZVWqYNn",
  "key17": "5FLyu7T7JycCTSssoRYWKMp6vVEezXQ8TSEA6uCJbSYuU22AwevdphJhwRHQrMaz31EuptjamAbxhaejqMTqchqy",
  "key18": "J7BA1fdrQDAjGmMPoT42FwAhVf8qvYPGYA9BuUPHUPhhE8G8CDnka3Sajvz9WPbgn9Zw7vXwYwExGRhZo5M9Bwe",
  "key19": "5ENxFsDMJ4Kby3mbZ8Dw6qaPVAJWVHqY1gTkiEwGxeFmbiLjWMb92S93e2MLmNupswGGto83tnCQ4pfMjPPWBFso",
  "key20": "2hxuLTuLKnDMEFtW2XVEysop5rq8MaWPsgroqyYzi6ssHoVZHkNeopy2uaqtDKhJcRtby9q7DTfmB5eyaHV53cQC",
  "key21": "2DodSPVVS2RbEXnu9UhwQJPgguL7YJEo3PwPqHnFjxYARL335fcD8ELNCL2NoDPPxrBiGxurQjuSVm4phhi85y2K",
  "key22": "dtyFyYtauCcyFtuR7UbHVVJtHVBDkNF5zAXhoGcKzzparAmFeyqRWC9c3CtaehdE98Xa5Apu56mzGKhvPaWT9AV",
  "key23": "3ZTH7HJmJif1DWM4iy6U9kZ9oWdxBaibPnt2DKkEaw86BKT6tLisiRqfWn7FQ95tkRi6ZkT9y3h8BvT9hJvNiC1s",
  "key24": "2xAd1ZrSYpKpquzUvDVsWYZm5LS5LH2CTvTVGuCUyTqL7Mg6XWkv3UYENEtwZw7xFtSE1kEqctDR7XreK8Qj6XTQ",
  "key25": "66ZbRJ4L5RoikLsw41vt7VR7Gx4F3PeMNVsXSeTBh5naBFrAD9gnN3RJ5ocm2vF9cK7FNwxizcZceF6YLf4dzMnw",
  "key26": "2wiPBG4TfGDpMqr6NwaJcrDhVB5rC6V6Gqk6JzgVpZc4x8ECiz3NtEgtjeXJBgiq1deJrQHBntxL324YV8rZZVQs",
  "key27": "4uH7V1BXeqF4odQSjwRajQHEnmxf3M3BZFNM1dFQAXmGy8ziD1A13vUywE4z5n5qBp8ZLmxhr6UKPaLvMXKwFFAR",
  "key28": "5yLneL3GNi6peheHXsv2yY8PQLbjsg6d58acqeudyHGWHgF1qrHEiWVm2inaQxr8Bak2GPf1Y28GJrapGh6MhWLs",
  "key29": "Ms5RbcZxbWgWEQ1h48n43qJ4bpfQg9EvDLyzZAdWap81Ryn9TaxE2h4gXHL7XhFLa2UfsFGzm1NA11Wx8KX56do",
  "key30": "4JME1GsbrKkDrAcJQc9va4wZbVqm71nNU6sAuth3W7DiUy5RfSdRX72GDF5uv4JYvnCfLpoX9CeUTi6X6ySLshQF",
  "key31": "5R7xZY4RLY9KiB9XE9tuuR2Yu1Ftb7YJugGtbutZLdHBJU9Y67hSAEXsKjjenSjsxgT1heETpfkKYWHkxmqspg5q",
  "key32": "3ajuVFbPRvZ2QXAHPFj7L8uaCag8PW7xN2koyGJA8YM5Ws1j3NXGScLU2jPZQNijrHq2ANgwr5jPVxzLVpK7Zp5F",
  "key33": "2tshTzmuygQKV4tQHrCUfW6FmBvyFRWyh13RYD2acPGcTczQLarZAgoovgiAMWkadUaCFsZp4WRd5ySzYEfZtQZZ",
  "key34": "4b49gBA4x8ZiKzubE9Sds7rrq9NzQK6h9jhFzTiK8FrvzxKNz6Hb3KzZeNajQS6eY3j2ewCC7p8en3BQ6jsHNvB6",
  "key35": "pDcahCrFg4hUM2cCz6GmLbo9RnYnoz1Y3JArSb7MwJ8cyQv4sd2PntrNvtoiB5HX1G58GwFXe5EMm5goTNkW8yu",
  "key36": "3VydsVJGTciW7cboCyLvuJxfsPLs7n1PbZYbEyq3d6t68W1Cf4q1aEJ45kVEms4gWDXMn49LZHzZi5nMafMuhDaU",
  "key37": "39yVcKuLPX5JjzZn8RihxiTiF7qB9DvDisrV8NHxn4ThW6oQvx7bd9rAiMmvUWQve94JcGNbhSawJpU4eArgHA6c",
  "key38": "4WJeyvzkEQMEuayXBAg7gA1jcVeQbTdCEmGeMABXPHsrTtCV8DrT8UuNsFKwoJNegSoT3XiuTA7vwVdVt2SgiRPk",
  "key39": "2A9gK5w724dnGKHkdbJCNX29muwCiu8ApjNGyQQSqw9FgiA7caACt5TikyhFie1K58FVw8ZciAyW9i74NCqAD8Dg",
  "key40": "5abdMC9KRNwBeTXggWFJXMa71vgTJsyrLCMP9zxCTyiPBEjUgFeYy6cNc5szTfs58zN1uZtpDDKjrbWoqLQMNxFi",
  "key41": "3PsKweuPoPMRiVrb74y9amuMQFqqcH5Kc6PRpPVSkH5asaHAhrMUNAfFjNtTXrm5SHQt5TJVPAPCW8fEqjGrD4Ca",
  "key42": "4E3raE3j1QQFgx8V82ey4Yuzyo5CmwBVER17inszLEip9mNjropLpfEbiEqSYc6DMqWzMeWFJZpMhfjBvRqmH541"
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
