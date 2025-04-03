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
    "43LHUaebZhNRgJwCVENp3MYgkd7bnhtx5KMWYPJyTYRMPoXGcVXBM2P3Cw7iHt5EX5Ar73MpETPyFrbmDakvpenS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34g6skBHHPYm6R1MWfWZVuxAVmWAmu8K5YDgg31vZ8M1XS8TFYvquxbhJUN1K2d7jB7HDSRe1QG1PqZmpYpxxuko",
  "key1": "3LqtgX6dAxA2JAdaQRqKjpd91gdeqzuPtKP8cy92EaBQYHCr4TGw8CjR55qiKrtLaNR5or6dvjnBm8Ji8T5tPmWk",
  "key2": "58hFe8r247moycxv6eXfacXMK3m9YeCh2dqS4R9o7mn9zKCpTEffiGGqQXYuToDrD3dzsyus73byjaCkvNVuUuf6",
  "key3": "5AkVqhWWsQR4VTVRWTNo5bN6fV6qN487cfwTN8diYx7tpY3jr3bUF4U5GombEErTuevadsRANb2VXQ21UfZoaXoo",
  "key4": "2GtR3ZmcsqnC3A44JPiP81PKh45pAf19NFKZVpoQ4QpfBJijzMfpMLNDtfXaPdkc5JGhvskqD1612JCXwBWvJkUQ",
  "key5": "3ynDBKFBAPQv9FsYdKtWfYoEMMtHTJQkpz65cAPNhuetWkESdrdkhaBkTZNUaSvCyWmfTKqrNgmknMr8jamzuJzC",
  "key6": "4XX2861QS7mta1z3pE4o6pe723buCNuTUxbvN9XE4MEJcpCn3HbQeLrFMvoLQ32DqXxEaHVtkaEDT8KEHnnQMATf",
  "key7": "2Pu9vwRLeXALqVvi2Y1WXzaGobMzzFwwkATzEkTkosiwX18d4fyp35Qwx7mpGuWFwFEmQCd725817W4D15L7zEAy",
  "key8": "5rRgm6z6ENi3NwfkrxhDGsqfn8weHwc1YLPAt19LfuANRNNg9GFXKUa67iSyyrnw5gF55V2bEyQ25WsvSZqn8vne",
  "key9": "53RKy9CFsnbF7W9t6FKxnHnBohi9mC4jADsDQK2Udbn71CYyVSzTc4K9N3vv4NwJiqC85zbQbTFkoZhE2DUqaxc2",
  "key10": "3iem4wfrg3WMdS5e4NLTgYv4FdTF3oncEEkrJp6fTALiic89HHAmHQ6mf1eZ5SoncmyNHVQxWND7kvfjyudyrArm",
  "key11": "5ToeRxUtkzDdX6sYcKe3p4CYSR4Zh6WP932rmYTXPCtquawto7BsUkMqAgMGH1qG6Df9pWtvETHtbjvH4vkg7F5y",
  "key12": "4zA7XwVEb54RfrPZDZqcFMG4UjnN1JqvWmsdfKThGgyuKEWrrMfpDa79SWBVEtGy5Xagkb1KXvTsQszbG4rXLLxg",
  "key13": "4z8LMfZg8Sfz7BrAGxozy8k3csT6foTDqpMA43YsJjRGhFW656AV8vtjQCH1rDFvo5wEQTDpZioL2zqxhFQ1eLA2",
  "key14": "4E5WDjE673kjTsWPJR9mzWtJaBBhavmB1wyBJGvd7aXF7hXa51ymzYScqXKoiCRZjSfcpUBXAemfvNV1VY9oThRr",
  "key15": "48YFRZNR3vY5YQQDjt6ETynho3D2aRRCGCnVrvwKiWTJVyQ6wesFuVWBpZyZCVCLpN7WBxYGzRZmHQWk16UbLAWt",
  "key16": "3DJhGLqCAoXBk3NrH2Kf5yJjJg2dPS2HfVDLb5psdRhzA2DXTf4B6LQqNfayC5ngwi2KDwo8K6wWFkty61mrjJPn",
  "key17": "4nLX2iywnu6fNidgh1kidA4i5PiDzZVAsD3ugXSse9dTab7FuAuzUpvV9HNiPE3p91huguastnDEiwFvhAr1JB6E",
  "key18": "3HtiZs86TwKVePsKMC54fbrji54TjP6GRqR4ZQEXhtaeCw3xDGJDsraapYmpV2USX5Ws86cTJpNFRTkZBuHeu66Y",
  "key19": "2KL76rnEb57hwJgA6KvZxudXdPVnyVEpSZ9VVrAtnG7gK1c9MuTaubhu1Cf42bjkn8QJZBkuaKQLPeVnn83SgK4T",
  "key20": "diod8ut4mYnoc5PyFTFu5fqNxToJRd6ybd7g28QRV4LL63wh3xnB9rLoarLhDVosQMuFqL2bxuaiNYduwb4fKCA",
  "key21": "3aCMCT7dBmAcjzTDuA89z7uW71ct3JtBfXjzmEjBmBqiXPN6EYSCzm7pvUku2Ads8D26xttSKNsUME5tHcHo8utA",
  "key22": "4wUK7nBrpq8tJL32qaWRcDPY7hQEPfnJtmEhLYXXVkd5S7uf14xKLnUWU6o5b4NNNwkNsgMuSZJaUMYuqufLWWHR",
  "key23": "5fpoFW8SwkFLphSKu3fuKPzhX3EbLaq7P7HZ52Q2fZHxBHdwvKF5TezUWh8PRr42wcAXtf7uDEPRrnavtkqQRRDB",
  "key24": "nQ5AVUQ85dmqc87aV7BLXhGgWxA7Y6R8tN7BUdoRMDfmmZFsJHj7TrBtgAZoUXmWY7zUGh37Go7Vhi4UK28BFyU",
  "key25": "nB3sR9cHLpfmzqgjFH5GJMWmNFx3RCFy13DQfCStZjLDQrGZWAg1Zix7DbkrfJ13JLWGXH5mJCQNgYCfMnQNp2s",
  "key26": "WLtGDA3X2eQMsKjhXhJKWmoCaXQsRzbF5aZJSevd1oGgvugx9ZEvtovrmG6iS4cJN7Be14vAuzG8AwTBPSvcqkm",
  "key27": "2SutXiQMGihFujaZbLmpPPdD3kmJTrweU3JtWK7bazzowo9K7XoCPxLoj5NBGmHV5rXCSRAX6vviS25GgX9hUfJF",
  "key28": "2zx44TFb6K58kGFuUGr8aZxkWdU5vuWx7nU4m2KSuAvnznZdXP3HB5JTfqEa4sFTCD5L2MJFbcgvTeyTfzXKysVq",
  "key29": "5sMQKoo39u7UdjgLy3jU1TSMTwUtsRnixvGYza3mM6qLQEriQ3a5oALN1ePaaihgpTTwrAotmLupdDPMPm5yNq4h",
  "key30": "4eGaNfRgL3WAXnpLPZyrfgmbZBSRHtTCRpNhrVym3F4MkT7B3TUDr5z7WjKiS45gFaBuJpBnpPfsGXWZGdydzVCb",
  "key31": "JKXdZN7yjQxvMfc7Hi7aEZyQeZwdEDX7amioz6F24TGucg8DTL7HwxSRib4zqDdpimZzXrEAEBS744MeqvuSLkM",
  "key32": "4NtesPdGdNEELuQSBQrGo4qscYhHimZa9yyCUPNmZUFLVnp14B1SPfcX74bEeKihPLsysnrwBUayXx85zTJ5p1Bx",
  "key33": "3UXTnkmfbQiaU5vG7wxCXz2CXeMN7PbShJpLFgkXmamkaFpNUQ1t6Y49de7HvE1H9Bf3RaamiU9Z2fCRiPoeTptK",
  "key34": "4frZ3jZtmk5xRF1jiaXX6nsmSv13XvvQU9PJ43DHyRX3HnUM1ibKQN75Bs1JS6jaocuhpFtwBtxgdFd2axa6ZK24"
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
