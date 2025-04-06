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
    "634aSSpcBqQPmpjYQVXZJFjTxbeNJQZ34wK6Jx8uQpL8GkocM8ZnbA2CQjYdB6Tt4TWTcHtiASGazNMveKb5n6r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XB9ZtJWytHqUzKhM47L8h1meSHFmzrtDnRxafsUrfAxgK4BbccwoBfb3pUVGNz3Kn7GfMnEk2D5EVczrNcPkmUP",
  "key1": "3Vr3SuAGQWodzSMUEsiZd9duepHwsuq17cj64GLfzMH7oTGaej2WwWpFScQSz7yHbNkGG25DGEMmvEQcgSo9Paof",
  "key2": "5oJkKd8sFWU799T7MduNENHinTRgjhn8b8YCMHRiraDGQUxyqB2Wy5xgSK6HfJWsYNNoSQrfoyCY4QdGjHnq9bux",
  "key3": "4p5w1j18dG7X6zfiyzLoSGjHHRraLgESBVy8L9LLPHRBR3trjMGGS59fDTeLK5PNdTwVz7d7YvHwf7SsMexgLzjX",
  "key4": "dNCZ6WByWVq8M3Eq34LCXChGjJbvxEWc3S6Ba4HGWkH6qeGKQVgpV9ZwXrVq3kgydvau6DGYSdAXWXofhRK81ye",
  "key5": "2cm4YoPxSxsHQXwdwMezge5Db6ttUTFLBpNYQid2grUZTZ5GrBKXEWhnwQYFTj5qRpHPXS3A2FxYMAJRhz83hpS6",
  "key6": "zQZJRRgd7TTLqMMsg1SNXgy8ozoJXx7Q1iMWAv5BXwA7zXXsSXQMyidUU45denLuD1VVcyKNpyS2T5erUueJDpd",
  "key7": "keEWFtY1pwCEghVZuVbzJw6Qf6bHthWGdBjpqmXQbYu4Gmjfyce5rGm2mTfc7EeHPJGTQgtyAwhHD6u8hAExVVg",
  "key8": "2zWWkozfBWnTKod9qEmzb37DcHZLhbr6nghSdhWUuSjezJatXGUF9jzQ2z9mQWWZoZZ6RosZjteAFLiSihkaGLcS",
  "key9": "5LyTcPLJtkF6ALTkxiex5nzsmFKfdAwnCcV2mvoQoPbwt2myNmjnNmF4j3PJsf2qt2TfmEGjmUsFA4CuzriKE4Y5",
  "key10": "3m3dhvD2YWQ6ceQo3mFa9Xzcoq5pFhofGVXzxzKeqAq97ycyngYqeq5PtjsFmcomhmKYw3j5M1Qp48seD3kdq8t9",
  "key11": "4QLcm4HKgSasQJ94dHz7gJHJ5LieUjVymM1129Arzsb4ZuGZHVw25KiZGMgVKfoU36mr5tbrfBG1TsndSwcPsxb5",
  "key12": "313pgtfM9Zc4yDVcnBJxQefqZdpqueTbrX3mrJkZBut3XwEnbSiv93KDTFS9WM5UWFy22qUQ97yUTZ4vVCBbQYvg",
  "key13": "55dGCqJZZGF4cAkTkavEYXjDUYEQ9Sb9XAgcpBnaecc3itXJKdtp74M2Q1co4AUkcc1uLWTrircK4ErNo3NRhGja",
  "key14": "3PUHCd31vHx2FvBpeteeF6Tg5MjEUqZscX1sDvYSp3xJVhziqRZrG2TZVPKSend7WaufMsoHahW4ec99UzXPoo9u",
  "key15": "eiK1HSWW25fk27Dxv7k5cKrQxbxGHbQLbWF9rECTxQVhE2eZMg21389dQzXe6zsYhB5w2Y1g7gNTSfKinUETh3u",
  "key16": "5R7opGoQQh9ecDwyhUatmvAxuWXXiTuoj9c9uUykQ3V21qbej9Mk9dmu3ZanJpqc5B9DuQhphvBC5D8AAArNDPSf",
  "key17": "5qjavxfibTqPGCHSYY7Nzm9tJQDVuF33VPDHS1n2gKXCHxjZi54ka94WmL5mpU4PcYVVbDkBMv7zRRXRne6ja8d7",
  "key18": "GiZFVpy1iEVLnpc3WSacTBKwUkGzbdURfFaXn1AsgvyvcQCXT3CMtzFLf76NC9qz6RqzwQJh9dTDMUPL6YeP3vq",
  "key19": "2duGbV99GZXcnR5UHKqh2zRnES3mPzrqKXoAaD2nZkyqZsCoEkCCaVRWPxmeGpDQRmUkVRbfgze1gEoTjG5bZbvh",
  "key20": "4Rr1oobDZ6t3uY5AFEDSLgVySM7WjtjY5bs3vVDdAJGeDteFc52YtKtsPANspqCCkRrLJyp6pBUVfc6AKcP5UKFX",
  "key21": "61aDYgQ3pDG1FUQ4Qa5kGqPKwJT4DyPjyvUTKqSnpx1zUkX5QKQtQz8Gc56MrkmjonKTTrj7o7q8w2mGzidTddvW",
  "key22": "2uQiSPfPTHZ9Mpsg9Au2wJNC2mtdAaRM2yq38VtXf9XPnf5Eqdc9F1toLo5zuCT2J16HgBwAc8rfyrxNHQAbd9Ra",
  "key23": "4KJ62rPpaJ2UYzYDpbw3QLeN7zp9P6PK1nvffZrS4wqNY7VYgMBALHkzpuDzAdxjk5y5hH3f3VdGa6p5jS57krrc",
  "key24": "4XvTaEZ77CocVVujDm2RXFegCcrUrVK8LekSA2xgTA4zPkS9GnF1X9SQp4ctXvdQGRxj6SNZ7aUg3r41QS2gGF8Y",
  "key25": "53kFUec8Gs1famyqFEcNrod9CXFbujA6VUEZS3Cdz1V6snNjyPGgv6mfZHJmyyRUDxkzmyszg5JkrMb1AT32KRxt",
  "key26": "2xpUVH3wDwgiAHcDSm7CkFWq2yjBJ5xaXue2RY7yDwM477NxorSkdJGUn9yyT3bxxB2K4mZyBnshYqA5o591WZeV",
  "key27": "3JrMTVMJAtqThxr58p76Wm85mCxB3SxPMEES4HTyStrvQ2rJkrG2bunf2TD8SYfRwvUQ9w2uNqzaJgmBB71qEkWv",
  "key28": "3NcTwEH6BGgMQmSJixcT3MJUwTardSaKYL47mhQi1ZY8KnUfhrwLcGUrmcxEv4bPxq9CTCZA395CzxpTLLq2qGfo",
  "key29": "3EHRyzemjqjETSDBQBvSDEqMixSRQ5mAP5MKs5W1ru695K8X71JNxBvGZYXXmjumCWC5ttqtwP2FH6PdeHfzXiPJ",
  "key30": "4Wt2ZEPQtRv7agHQv3T4fbi6UzYcKzz9LzYdaPhPsKXHbnjcbfpCSSx5e9wd811rdnTGmt6YCotJFbRE16k8Pbs2",
  "key31": "63fHCLQhVvEmWWENS7JF4bLfpeAcxBSEYd7UcSJ1KEtEqr8mUVfps1YcRQHWMDyc2LmLp61bNWWL67qGWaSghMvz",
  "key32": "3hDFr8RQoCdKZfdDpjRxLSQiZZTLUXNSHRf3qj9FgEN25XfvqJzkiqkA4ZTfpNZJdz2wPJSUsx4UczDs6vkHiZ8v",
  "key33": "42i6ii6uDp8Q8GUB2x7Uvrn9AWxd6wBp5BAFjSBywUy6barrRErBsgYhb3hoevujbMWqbVAxqigbZcb1KfJcZfqT",
  "key34": "4S777Q5AUNYkxCwzgscur71WmiAApFpkoKbt1XBAFvo9YwwRWDnVJ5r5W1XhtxExT6T42bPVoJQzNhEPTbbZvS3r",
  "key35": "4MkzsJ6esaAhAqoMiYx3RkVnLY4k8LC18BhRM67ZitujzHz2tUmYvxuWM8pLxeDGPbvnDPJ2jDok7ZSw3An6syYH",
  "key36": "v2xGbbNGt71kx55LLMRJQWk1GqvGAktmjn9654jaAT2VaMgsDQUFpdw2dBihQdmMP45fDDnL6pfPr4hM2LkDRvT",
  "key37": "65AsuBpkFsSDwqJXjr95TebJTNer8KiwE6Yigc8J4q7XgvjXAC7V8wVCWHhuVqwcPS3PPBBfq3qAEoaVcntAckfu",
  "key38": "3aJMJfwVxRF4NPtCS8oYXjTgoh28AyxnxyUngSMKkk3q4J5xDG77fzHCjzPJYUiVYwqPCsNGPGdnZpy3by6r8rXM",
  "key39": "493KH6Nu6FEsYcGYRDgYMLydqAW2319xYp4ro5mr6VN2kgUTrmkRnxZKYUjaDPJrz9oMUH9TwTpzBNVouH8Eds4r",
  "key40": "5MKwC6TgXbE5Upekw25PR65mRx8hyawCNdaCevz6mYhSSGQW1yQXBw7wPRC3SAWETKh8wkxTSmiftDekde68Jx1M"
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
