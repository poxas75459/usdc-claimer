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
    "4JqjXt9JnqrjTRgSFMgfJC6Sk1VHF9MX59gqPw6gq4QocKbqFesnugg7X1kExGD7Ht1AaPhzfj6LBx6uCt3jyXPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EM2Xbu9sG8LgibLbtcFPnUQsPmQkWgSiAWxVLMjWQ1GD61pdLsKiRJ53ggWVxxqTEU3T59CkeBqDsKh33kXZVTK",
  "key1": "3SV44cKP43eMeubsd6sEqpWfQ6C8rEcVKPWadT4rwDAgvUummqqsuQuSja2S6LuVCsr7K6LtgVyCMoUs1azt6RZM",
  "key2": "mYnBt8j7hTn67AKwqBNp6FEK89VyoH3wecbhDVBxjvJPZ1brqGGzzHiJpsTLDVSPeFqaU7ezr6TXzkBDnAFEu8X",
  "key3": "27sHew2XMSfrC5e3c9SUjLdLLsr6CFrw4Bi6FjTCzxmvzwfc6xMczi6G99aDvfKt3oKPEkzqY8jLQKxPVLAEnTK2",
  "key4": "paahPgxjRXaakv4894pSQ4Tahrbv2ydtmvMg8nUXDay9VVyECXHLJa94kqH5oUc9gED9ZTXGb7WTabukjk21CAq",
  "key5": "2npjW2duE3DRXJxzcPhWoAPu1ppznNkq6RsAJt2A2X4pWkR7pu2XJS3jB4VLDLTEPFokNogSBh1LxQaYnyQrHiYD",
  "key6": "5udZdx5PtNAVaPNfWFbFFk9vUTzySKz6MqGSCS9ZXCDtPeS9sxu4aNAMh5NTeuKeRCix5bjHefMQQbULcZHVZW2b",
  "key7": "65T4ieeFszRdGt6ez5i6ReYptucaWfapYtsxjByPuMVFwZDdnd732dVKvgit6JZoC7xohAQfbTjH5mtpNXnv8JqK",
  "key8": "2wANKeZh9vr9StevP2R3kJWQDKUgtXjMFUgB9csdEp4RNG53HB2nSwVBBTewjF1k4ozHE4iS1ciTYczDvw1x1ZX7",
  "key9": "MmvELLHqZCiDPT9JDcLhe5vDxUyzYWiSCPCXfgpE3nwDrukkQbSCvePLQsgYC2Hp3yfjjHLKNAcaTpkjsUM54fr",
  "key10": "2Je5tj1nCb2XgveHDKPPZ9UmCWsoQ7gormH7T5wkXBGL8UFqvgGnuYkL6jpUjuC3E9VDkUUha3XvPd2CAQakV9db",
  "key11": "37buhP1BAVykXnQjf5wudfo27b4bzahpGi3gEGfhud85VhmrNgg6P12bYzDAc9nuNavDpkL2brkwwRZR9CvbgE5i",
  "key12": "2QzdXuuZzekLFFrovSwxSL61M2NETjGpJZnoWXpy1SN4GnmvQmWsu83pHQVKWR334TUifBbGpNafp41yQFZZ4qe1",
  "key13": "3LN77XYLqy4h2NW2NgTUhS3XrPA6KjtfHamAv6H57fW1KJBtDj5ZogQmZncFzJ24197A15PzcQaFDpqRgxSeKoqb",
  "key14": "5X74RbdozuNRHwDXCJEv72SvwjT8aByLe7xbcJWHkgKgCQPgiTW78Zp93jMaC5EUnfww4tKFiaKhXjSEor5SAJkq",
  "key15": "4Ji5YRETnYmyn9TCxn1NCSm7vUjjZfFrfb6XBRksb7SEtP6zmirwRH7UmyjJUSM7jfbjHJW8VcxJQCtxE7WxuGN9",
  "key16": "57yUHkyiumshRoYfvQbKkodMhzwwfZsNq3edMg4Jzgt12UzPaqozsrzHWD66GRzFCZKrfFmgrJXT7fL1ZZKGc92m",
  "key17": "5c2E8Ps79hUUyTCE7m6ScQokQDfhmWCJQM2MrGS46zHdEpHqW7Avym1pmMoobR116X2mK7fGspH6aZMoN91n4fVo",
  "key18": "5rKNryUczHniy5ywaqcSLu3gnwqMJrM6MEhaURQyXpoiGCybaTSZv6xRgf3uEQZVERfV98YcGDbGnobu6Ue28Ywn",
  "key19": "3cJQmwcVEB9QqMwrDLhytbHzV3wXbLHWkLLvs8YojF3Yh3FY1MmHdceiGzwMJe5ZKZkkqCquSDsQSna23s6chhS7",
  "key20": "Tsv8RpLNq1ATap3pwrcSEVrwwpv47AoqMqKmBUNykhRwuAJfSgVbKyJ9KqNCX9tduMBzPk7UfhMx5g9XB6R2W5H",
  "key21": "4EhPtBRiwatCmB73cyNMmFFCpJvep5bmQKnjzJPjDJU3nfo1Fdb5jUkTvqQPVfHuKs3bmr4pGHUHaozdP5WVJ86m",
  "key22": "4fqeMA2zgLeSsNFt4rweiJqX4UoiCVhgrbYav6fix1fRDBg5B6t1xhy7CcQ8TokKojWR9iuM4ZBzAmbgy1Xa9Zar",
  "key23": "3pGhxnVspjWKJoAyRW4sejWzcyYRicDwXSgAgmebik9muCNvg8erNHwB8pUodv8kuhW7JaCscWU8bd6BDrfcxj7W",
  "key24": "4vtwwaWLRmGWNQMTPKuxyRmQCw5uDXABNmkkBmEk73k99LbvjTQNzHWZqWgAwkVxaXWeVBcRRN4kwfS3WkCMVfky",
  "key25": "mPJxwVXpdhAnvoW5V6xsAffLTUuR8rsesTrBtovt7pvzu5Uo2hWxijG7vb6c3HtQR2Qu5x1PdYRLENgBbwEcJec",
  "key26": "31625Rv3oFxCkTGfBzq4ihtpGeNknoA5kjXPWixzTmJh3CQfnQoa57Md6pU4NCh1XXUd8cb8xhevrxd4SAXifqAv",
  "key27": "5Q2JTSfNcrG3w611ZFgSU5KmbrdnZgenuPm6o5NvA8uwSs39qz6zHbijQhBsstY5FygpaZtBM3nxsKdC1xiBzFJg"
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
