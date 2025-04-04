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
    "2cEw6rcr1mUdfsd4k4ZVzy8tKKtvSqERbcvAyTg3vAveCGHQMixXxckgh5mboQdg97caE966kcd5CwBkYYCDEAqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LpD5Az3v1f3Gd6SkS66GS6uF8YbixvtTZ1JfJYPNmLdMyGvRZvxXGBa2vGneYysNL7PnBgf6JYMynZ49Aye8JMW",
  "key1": "4v7jaVQBdgzhL5Z39m5AwwXV6KXE6Jm2b8ycGXszBGxnHNyXY5FJHBUGXcqkPFpHe6NtxJHR1CwxyJsMfKCv67fm",
  "key2": "2YQhFxoDRLftbXbfiLaMHXt7UbCnzao1sdLRE5Gg72ktXV4QYVbLUr1cJgXe54VuDE3FSwF8hUM2mXNU3ydG2o2N",
  "key3": "QdW1Tz8P6Ypx8JYvqsKLWgzeXeMkCuqdku7VeQSyxi1S67HcQAxQvCTGJCWjW1UrXeDAPcYvHe9KEvhEX4Yca6A",
  "key4": "5MAjSSoppmY8vy43rbk6kwmRjZURxCTUNn2vBZ7mg862TLTEfWjg2G7R2RSbFSo1hnTK2L5p11GpKWGLktH54ite",
  "key5": "2JHkeSS8AfoeAq8nKayubB4LSvZGsQg5mAQgBnC3ZWNAGU31mnZfXodXwxjHSuZ5vLeaSPTF742h1sKPMNUTtGvQ",
  "key6": "A2K87ky6ncYTQp33M3x1NHxxLdYawuHzpDE96pFSTxcxJkpXQHmVMBFkPJY1oFhaPadvvbES3oRvydoGaJzzSv3",
  "key7": "3XGFjKaGkvouVzdyPAgGvMZWT9G4XeV6Zmz12RUibWUAT1w2EenUEj4oAgVAmsFQUAr8ioN1DkisRC7CSoEwskS1",
  "key8": "2oGqysKYqvxeZdrHUQ6h1zjhDmyXDMp33AjTUqJVrET1hasoz2gWbdRRMu8fo2pHeqTP7RKYYJPsCdqxqe8Fhe6C",
  "key9": "2Xba6MRDFpmCmSHsfTUU6ZyCjkWwtTqrgHfvcYzs4tqWYnRnLRTDD7BLX73PLefrsfwoyxDqeV481EbeJGyhADhV",
  "key10": "4FZVoTGv6m7Whhhz9YDP4vnb9kUKe7vEgH6VRBWyqaGeFhREueazkYC8wNHKtVj8XqBxeqStD7M4PNVpUwfaYAHk",
  "key11": "4WwKk2jUicBrSmMvjf6qsGfF2NtSTGHFNzbLNanSXy3ST7LhQhQ4ek8h6Dn8YxfDm1rt7fK2SekeovAW2y5NH7WW",
  "key12": "h3V1TMua3ZB5jBZrKRWw4c76aapDenLxemN6NFVEevfSW8wFkeL1tox8XmHiLSJqqTBzGyjWYNqRkPuXgkULShz",
  "key13": "41mSumkDdaFwJboQqbBj9RVZhFyKnZR8XCRfCUfaRhZs24xU5VyHubGnYqbSGgaGtyuWKGenwRmyJuqNEvLHSNcW",
  "key14": "2kZXUBAhHCG8afxbdBkSJSZ3w9s7S2aFBRkjG6CbK1b6zFM4JjNVnXCYBaSutV4YkE8YfEnfeWTWRGJaSz3rNyEL",
  "key15": "46kbnmZC3CAhpdSeEiVTMHhihnsLaz7U38mJUQNADZ58MGoDFb4v5ZxEyPH2hW7a4A3ocxT7TopruRGxk1pXXQUi",
  "key16": "Zr7GVEgGsrkeLcvXCFB66h4A7866iPZrtonEUiAYxKou4icap6y8rrQojc2aVmGY5t36DgacYKqq4Thenesy67Y",
  "key17": "2sLAt52CryDVR3XGzaHpwiPhHmUTtxHb9g5mTdJcNCMdTbVbcT4X2XBDXSXXsW4KMazySSA5PgzwUmvUrGsnxHKX",
  "key18": "38KuBSSYLRxtGGj5kqZDxV7Rb3irSUxAEiYhjnsKED3a4E9mFhsnMh4ay4CKVJ28cqkTQKwKRnbQj2BBai6To81",
  "key19": "63dFoCCPTabusqgRSaVz9mZg1ngy2zMDJz6Bqxp87ZZEbzEq15DjU6ccMmNtkQ4QMPJmaytkvKjBTyXiVj4vDcyr",
  "key20": "41wu8gf8JQZwyLhrp3TQzqpmn73g5sFt5uHy3MgcybNW5BoBhoztuuYqau1Za4v5EUACbuEygAULYfASHs2ggeTi",
  "key21": "2pLs3UgSoMaPFUrfTrPf2mUzmLiiSNdxB62bJKfcxsxbbLSk9CDwue7qvtKQp1P1C8SxDwfdZhkJK974wEvQ1kzv",
  "key22": "26Ys8uDX3GiF3VRxbtBR2VypRZ8f5bBPeMWtqx9DJqJrrQyGCDv4Ufeiyycnh6oKjGjbp6k7KrgE7r6mSxDQEDd2",
  "key23": "2ADQf6DiMpAYE1GxcZ5zm223zZjxW2BEA79SJbi6LYxm6tZbf8yHNNTCBGxzUH9Vi7xXseHnhMiGyHM2EZwJH8ev",
  "key24": "BDjhWosqnjuWryADRPNDR6idkwKpcgdL1Dxb8XJyWVH5CoUsJmgMKuHJei86ThvaM4mwPSJgoWA33bk6TiaPKLh",
  "key25": "3htgxYiPiTWqK5o59KputT1XQSVjSfBjyHguphdSMhjkHFLqWHTbNeE1GZihd6oQxK2Z2SnXKYniNftZvdzQ8rUs",
  "key26": "2s3YYf9wiBoz9WsVoe2iwP3hKJGKsV8aAKiBzuUzycaPh82fdeeqdAyyFcGn2brQ4NMQgijJqwu3BT4qnwE5yCuG",
  "key27": "4dU2iBY6voYSjZfKoZUQ3xnj48czeae4SKTsqCQEiUxawGZMTeA1mQup41ZKL76aHL3W1rNyJRYU2XAxSrgjGYxU",
  "key28": "2EatQhsWuWfGieWkMaEKNK6QYGXfrFdpSSLMuoKrTEj5rJtWggyA4AukiZ9oCczpRQS1v8EkSGn3my5eLtaa1yW8",
  "key29": "3dBHafaHEx5ADaDetvTzbUgcdXGxAM1TDxJ7Q7kqt63tKSpZqTHaPHnDM7JbeCDoNi5pkHTY4tJpoYL9WH4sxwJo",
  "key30": "3ouBGy7CKF3775HVgAHmChAm9n1VticU4er5FV8A6jy11rDsa8stksDXtwqFyGH8HZnjs3JqeGVGqtLonK25keR9",
  "key31": "5FrrDuUn1ewaj2PocJgdJ2VBUAHeJDRpALiNM843ma31hehH7xvJGbfWHkKfy5tAFzghQ7oyHJ9ZAue923Zc8k3P",
  "key32": "3f9kMoBggRQbS5TDiPE4mexkSuQXhwaGdbSQ4yLbocXtRDKVReTg59KCoC4LapG7FVNnW75Wwj5zNDsSpEh28gTa"
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
