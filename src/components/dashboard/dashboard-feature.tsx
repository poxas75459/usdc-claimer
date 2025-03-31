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
    "3CngDcS4T4gatTNcsick6tEx9B5TXi69TQeB8ByiBFqkJoYPB9ZSm3nTdkCiGxaCs627cHSsvt3SE69MidENEQLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaTHS2NgCXhT66PtGJSCogFsXRSgr7cF7ECvk7pTgCSz8jjsPLJ8VhmfUVjTtakdvr2Fk3mRAvSvUVKDNhBsBeq",
  "key1": "67YnGSLVUg13mHYZL78dFNpxgERasBR4M8cc9ybrSugoHSn9Uws7iGChkXG1CQBWNBPvH1SK8mkpqMguLNAdzFYx",
  "key2": "4H9gdV7M8mHmvBG3viKjmirH13LykZon8JHoSaJAKjR9CwjGXRpU5cMmA4kZnydspxFK9zuv7RmQnEvcrKgbkHg8",
  "key3": "2KmhAzSgf7cspk6CnUrgKU1xKgaWLWL7T9UXqbnbQ7HuCWF4NgAgiv2oy1RBYsowq52piNixEtVK73HWsZkptr3a",
  "key4": "5CDayyLuRyL6pRfLjtCHGioXjfm8Ybm52CG6dza8TCgZ45he6YdY99RUaW2RuuPxSvBTWCTUTtMytzpD1Mu21YbA",
  "key5": "ZScRkX3seBn2rT4u3fuWB7RhFrKvAxZ9bdmEobMUDbt6SWqzLR8ZDCmLdcTbFo6bAGzeKZ84F6TM83AwqaVe2za",
  "key6": "4ag6PtpKToB7DXq9eKYHcLM65mxs12VET8TRdzrKKgRZgSV5xNm8FKn1HKZ9oFvQ6x1Et7DxvDrHhrpH8GJY6LBZ",
  "key7": "8qxffcRnaiotBzDwdmhRh4tipfD3Qhj2qHgwSqW4P6iiq7vNG5BuRThR3n9Y1WeJfY6JZQJxKaF3GyCNTdwpJFe",
  "key8": "4Lhh1HCVCFBgu26vLnBF92hrsKoJRVYAmT253K9tx1DCMNe6EMvatUE4VGyzNh5ZFcrgJxx2r5VfEtXAoLMGjSTf",
  "key9": "4kzzSM7KjghXGSGDrfFLJdsegoRzXxPiQFB72XHzwitSvqMnGekeXUuE7FbQQeWiLB8qRunFrgWrQhWsHEeojgQs",
  "key10": "5vZZSdbUCjWM7qrfwAPSManJnYvhM12YRnHRLMaH6JNus65A21vGGEXfTA6S7krLfL7bLMMRb2ManCcMBi7FF5RF",
  "key11": "49furXqMbwU7j8AK3eFuFwTTNq6EkNmNT1hjh3fWcSXnWqbVgLUNm47nu5NZmcxAjYbewN2YEMvBc2gXN6PYz8Ad",
  "key12": "2tZprHtwpADD3DFhZEs6XxvZuYAsz7F8BzgPAGfSWbLS57ehZaA8VjvCoUWSByPnaqnbJHrmetTWj5hZVP72v6zs",
  "key13": "5zBWWBfX1Jba8fD88QouJVeNrceaJmmkRNPZyukYZSyt96CVx5Ta5FwhbUJRjTD7TV1SgBPtX2NDK2HSidkYzADu",
  "key14": "Eh7NEbNYoKCD1eu345MLhbjH6SNorJH6hgZ4ADRk9jDTqiWf9N5feoFAUTehgtfX9HG5FryfjMoU3eaZuqu9r2A",
  "key15": "3YNHxAFyGFoSvdbWcocDQe1Ls5aFcKb3mcKbkUt7fHeTMvwbn6jpjtnDQAFLSppknKrjU5JRP24QMwLDkETeySvi",
  "key16": "4v68DdpSJh4HCgANfExoqJzt3YACdVqVsbvvqQDLApHnZjLztjte5YcWhBz5ubK367h3XHqwEXs61DJ1W25weNJj",
  "key17": "2fktq4qwnTpzMabPCtLzdb2k5NC15MCt9nmKKhzqivMgEwA4BDKHpzFomu5Uz95XJSLXvkhFXPV1Gy5VPamcsUav",
  "key18": "ofdjFmjecxftzKo6zQUmLXDPCm9dBkUHSYb8gZjyUX2Lc4vZDN3zg2oTpgaMrH5JNvAwxGgWh3S7UmgYb1fGyGe",
  "key19": "23KgCJP7b5A238eMMBmH43zkbktkKizWHmhutYBGeX8NQQS35knw66SvwDTmbQWYimBYf35ZgkisPr8WSLJutqqe",
  "key20": "39utJVyXWgRwmwwozA2EMzZQJuW7kD75qEZjY8t4yyL58f7g8PwyHGaecCxY7P8NpU9Njm6suxYGWLX3Fv64JV1Y",
  "key21": "4fXGkr7Wnbi5nvn5ozne6AodNip1DWGWbx7GAAwpUdQSrM2JJ1aP92XoBSBhB11mCD6ocCNqjPz5h9R1ULmzkKes",
  "key22": "3penCwCx6zJkEtKEAAzayhhZc27xNLhqUt1r4Z8ygeB4RfVmgD21goBUB6qkcjsrAiBxhbRqqQCfXV1qkRBmvqa3",
  "key23": "5XXfpKGu2kPtmNNhrzNBJEkb7GdfGAannThAdZxhxgd5YX4VyUx555EXq4y7f2sNgMcfiMmvwbwJNH6qdP7CXpbG",
  "key24": "4AtuJJCoFa4fzq7gi3uwiHygeRgZMtapRJPS3VU3ca2ZSkDcw4AJaQCaWDaWFwZKAAfGfssLNSPwDRGoKp8XajAz",
  "key25": "4TUBDrNHigAsc5hJ2ztPFDppZPzKgVDSGX7kJw79wwEmvDqUGRrLSJ37ZpBmjzLJTzbLAaQAZUCyNmmq6LZmQxEd",
  "key26": "5HUTUiaXwT9p4XxjTE9pxLuLs1jBufrGcYcZvatrKTorFNqQw85YA5YGcQwJGXTydTp6LPMXnQpHNc62CeQkKPdn",
  "key27": "3nP6HRYEGivBGtRoj4JFkFrvQuqRRojvbEizRdNYfbptGi9jZBu8hS8EcawVek9ei3p2uHwqqymnLvrGspZzrsEX",
  "key28": "5fJPbcSaxxJEP1xpwY3wi16r3mffKaguKVYdu6R1rsiT3C115wiKxK1iLqV5Av3x6MjSTdprySj55fM98jAZoDrk",
  "key29": "3k4WDwBsv7RYrkWVYQXxbZo6qVDeygpZFKW5iJYycAuh9E8Z7dVJd1UndrMjo38tNKH2smTahVNSajZnAfV4ySDC",
  "key30": "4REqUSAt4MBXp94GEYzfgEYaxCY8wed8dNjKktPzPkcFo2q4TfoPedWJwv3T49Qr9jM7GurAmzjpRnQkjvv1uers",
  "key31": "3Ubc75oAhV7TUvnQB2WnWvPS7YKk6urrXfaoSyueGMs8ytUnArWCrc7cLcem5pK7CjTsB6RjozC9YpRkNVzTjsfj",
  "key32": "5YtU3nMfKQdkZcP97Fudk7i7eN3zKwTp4vFcDtPAAS2HzdAUxSkrRCjQc5WsjJFvuEFBctNY3hksFMWDYEwwkMaD",
  "key33": "4zjLETLYXLdLe8i6CYMcZHsm7xcPV2SkySHQuuPs4YGV6yxYHMoC9AM3W8YbHEGXU4PxRk2iv7EXrdCwa1DMirUk"
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
