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
    "2Sy3ZQGwjcg7pG7BMRycMJYTu7HqQcTaNUKzqbmmUfbysRaj92MV5QrTtijGxprgvw1wKx7xv2sTfaFQxBEasF8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y3kQvCD1xSeH3Kjv9Xe4cyR2jkUEnBPMMNYE6FkrH7RBX7u3rGCH8a9DCN5n2SxnfoPdj9irhTRgWJqMavt6Pi3",
  "key1": "3W3zsZNZEVggNFPogSwpdKYUiHCVAwhpX1nUXEvMkhLk4g9tidiP2kKZ1RsuWD6nm1zeWCNYsbeuqYCqAqZYFh4f",
  "key2": "51GQz4wLo36SZYGa7prVwsVoW89nkKvAroZwP12pwoBCyhMBbSL9cdvvpMc3EqJNpgAqBk6gdUYBVHSEfqPad2xE",
  "key3": "3YcDjBa7KWMMcYkDDxCeurMerwrCmAFuUQhVhbqeH48wGnnxJzjAy7vM9iptwwyngd2sPFfzRJDfCkatQu7Thj6c",
  "key4": "y1csWwE3BTBxAoJM7r66CRMkEiWv2bd2ieSLKZn2KTsysc2rXqaXBAh6i5dVyHA6r7Vek5Jm3Z77jHY3c9rMyeN",
  "key5": "5oDfwbZxUbe6DqKsSgP9qGcAGLDumYsbzwdgoZqNioWPhJt6ZUphNadhpde47xNmLLY48VG79VBDzGKGGfJt2QNA",
  "key6": "4BsePbAJ85a4wDSoiJ66MHQYuCyq4JGSxFNo6Jg3cvVuucJ3cXa4ZzzmFfMkKTccXpfEDXdDD4XUVMKZfbgZeVNf",
  "key7": "2zrnhNmEHuni8Ud8pY9Hsat9meEUvPk5mxF6FxWCX29xoqWNzZjYpyLmWkkuqRTKkA38XNcWBMxxgx5c36e64P4r",
  "key8": "C8HESrQztp8nzn1y3iGA1QXjfTBCG8jDx9SC3YAEAEdpTxzrGZ9tcM1fK8mHdyWa3gWpPj2wVVtf8WW4LyboaCA",
  "key9": "5kX54PZiKxRzoc2A3qA94PKxPYYfttwf2ikQJH5J93wcqYAZYb1EpNhUJ8woxf39G4bmTv3ShgtfhR3RkTULA9T1",
  "key10": "bUiCaEdTPCgLryE62XTAJQ7awNZqv4mNokLjXip42xbnzCsLcc6tbw13Z82Qbw7iNjJbX5vVNECgoYYPN61CE4M",
  "key11": "JU6x7HC1oewZtPNRyzo42RRLwJhttzLXnE1myWsJcU4mfyUquVyhSXgrnmrs2uA6q5w2782H25WpfAteYevy2ud",
  "key12": "5NVyQcKq5TgGEhucDhJBBAGabDR6ag3js661kPYFvwFsRN8fC2jdU93WJGuYeFxUoWRjVQoc2UuT3kQEDJSDZ6PL",
  "key13": "61Es79sGsBFYc8HpdAPCwiSUqbbZgiUq8s4r4Hsw7cp4vbr8tWPUgSG8DPbrhN8TUt3LMiZyxLNyvgo4iWfQoYou",
  "key14": "2izWptyN3pKBCMSKdsnF1Ba5c9tnmzL6NkpDfuDhBVYSnwJvB6uV8PjDm3RPZq6PxxLUq6if487EHpG45WcFVfXp",
  "key15": "2K2gFWot1eQo9r5GmuWdAsCNuXFMpX887purHC3BQJD7q4zSLQw5PJdmKkgttie5MVdgWnQJMtKxMmv26QJQvy1",
  "key16": "7RxmFNxyMYVQo6p6dFun8bVfeupoQR995QpBrvoRjnf7aQqgP8D8k6ZHEcoKnAfWEkWa6xCnbs2DcaSfwiu8Ub7",
  "key17": "3F45Yiv3oQHVGzBChZXSVb34aQmKDe5HdNbXoV1Nnvkv6mTQmynwCYoSRUXcCEBQ5ykVJ3DTkRR4vJ5gtKSu5Ujg",
  "key18": "3cp32DF3htjBbtzGd9xLddx9W9WA7jyvF5xmYZdx3eGTwPn8RjHpJVRmStQiALfkuoCpKrfpWRpXob9NYzPuAoPu",
  "key19": "5XRaTwjiegXGBYdE3xhFRwJKRQpVDPLt6BAZ97Uego6RuD2qttS5Jp3NKi2qQLm9GbZQXUgWpgLftL9E2fWRfQ2c",
  "key20": "5wBgh8akFUeXqQNHYEPWGMdszBoAbZAej2AThNNofHUH6oWQ7NN8xuWpw5Yt6uH9KwJRMUrEKcAbBnadDuoPc4qK",
  "key21": "3hrTqnp859JLPPwxNeXLAFtho6mtM5MxSzEsDKEjettvqL5FaeopJjkFij1PPXJH86UxLuDSm2RqKJCV1Pwb2sT5",
  "key22": "yHjqCvkPwzYWDmmgmyF5U3W9DEABPYbZv4HMqiUrx8ReeA7gRdFgtHa3j8sGXXKSqwuutrrh8P92eFKCWHkDHdW",
  "key23": "5GvdKZFj2mENWcvjciQKhP7sAWz7boXijtKjRpZfj2iy7uVmN2p2JFb9Z4sbPf2A8Z3z3yCqt8rBNopch8qYzEig",
  "key24": "5T4Zc3gW7BaGcCwLu67SkGwUggzJC5VVgZHEsjKkJBh5iKdfeDPS4YP3YEQmtnDCLfPD5TXEDcDzPS4wkH5Pery1",
  "key25": "4XMj7fAYpQhQoHuhrJiP8sNx45NqHbyDPpsNefyYBeWSWMrFkMxzgaNJqiQtW3niynvAeM7fMSrXD5VUH7gU1yHK",
  "key26": "59NfNStz18vESrWYJZkkJ9Vw5PRncCo5hq4EASuhPSACVrjwKdQhLDik3cZednrSwBY2DjoD16voKRP7FatDnQPK",
  "key27": "3dMasZmjHpygZzs7UAtQ6d6dmkairD2uNcHFzXQmmspxxYixMnu9kzJ7VBFRJPUDeyGgey4QTS3ZKr5TgbDygU1Q",
  "key28": "4iPMR4ALMuEDeJDATxYmsS6MjeomhVuxpGgVpC1mbwTFnihnAorh3qbA7ECu8C3kYkQLwJhhcGtTVYh6GhkaE5G3",
  "key29": "BEv3sxt642ERt7zTZaVEAycXfGvcL8WXRf1N8TgxVLcyiWiLostkVwdh2RMXATFao7h6owA6aDaiRMmQPF7sJHs",
  "key30": "2w3exbVYcWnqEJGogHLMwEXFDbcAMZHU3qnQZEyi9mktqdCHuKnpJnzrXt1PF66mLqDvq5rdCbJczRxXHX4Yp9vn",
  "key31": "3yB2ybWgGEpEKQtHeEt4hKNjJ9Gkmv2nw3xBjpcyoZzTQdDxma78WkdYWpWAemes1oVx4ahD8Qu2Ms6X8mBx1zek",
  "key32": "2y8ppSpQQ4q8cgp2AhnFYvGXgDdH8BxufEq73FA3Gm5U4oZML8Zcaytiy5eJaVCLbytxXfF5TDiKUfpeJrt7ebqc",
  "key33": "4A6eJg7CMUx7HGAaHzg5umSKkhmTgcjFakQu7zsZe2RJZ2j3YH6H7h2HCXe2GYdvs4RB5M71XZafmHCS4m66eFmS",
  "key34": "4EUNNs6AYDSxvoxXTH1PrFp9EReBND7HJSCBvnYjZiwsh94boUj5gnpXCQFsDrByC8NTfei6iw4bpxSuy5vnC6xu"
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
