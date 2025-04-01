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
    "2DHKQLGciToKCX998zm3Nh4WWVpfo3BEJSBu6XkTCoDwk9D2fJsRW6jbr97Qm6zcFrtRD6rMfwxfpHZ3RA8kpkqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yi5CuQ3pajMA5op2CaFXxPysw1dfQ6kaENcLFUAPsKijY87jBecv7hRsT7L2Qzux5Ep1G9AWyZ3r51LYRyb5w4y",
  "key1": "4gmC731KJLgDsjEsejX4FVjzX6AjQr3mpMBpVGsU4VuA69DXdYkTfd1nM7cDLacvN8mYp3JDsbyQyYGJGxKqjX5E",
  "key2": "2aFHRyfHQenvqUuyuvXviNqG1tGsk9cv4tR7NY6gneDUuQX1vBR1tVtAGzTGkUq6cPT4qMCsSiqgUsezjFxRJ9Vu",
  "key3": "3LQMNdZsNDNLDxTJferr1i3CuvgWeFVg6EEprmwGFhxWV81S41n8ypTRXHFBcm245o6oSwdJpT9SSy3grWbaqP6W",
  "key4": "32tstBe3T7EzuJWLt4GHwQo1am1DF5eAXs5i9rZbSnn1V1TbYhiw4VKnMqT2u1yWM56LE9Z1TPBTmDrcusnQ4LTB",
  "key5": "28U9XvdBUFGMXeAUUbz1SQLGNVJdGgEsVpugib452wMrgEvynpwwHZWe9y9D1fcZMbv4wNHbEtWiyDuuRtrGLbGN",
  "key6": "24ZAMvAqnXiPGDTzcGP1QDdYCYhb2JHnGQYVbrWyGfEJHw8G9Gf6PkXvpQCR7Aw5AkQd5X6y3WMrFcdRBoXT93m4",
  "key7": "4FpHERXp4JT2fD5WN6XM4iZJgqY5fbaq9ZfSBFgNSjxG1p1RkB16xBKyCJuyVa7h36MyiAe1Rtq2m1pTYJPGe8iF",
  "key8": "2dW4SzjxEaxtnftCUfc6rq2RL7ryf4Sv3K2R65nkqumM8dcjhovVukdxVMF98dgiU723VmGt1Zy2DU5gJ1JEYYLC",
  "key9": "446SkuMkufsgGsUCwTAjbusEZ3PkTN7uVtyboqnrHN4eq9kp4MdCsGG8LhEEbHhxP9hgqV7wQf3HB5CMHDEGgbP4",
  "key10": "3CYXFB4fFQCKY6iCLeZioVaotyMYXFX8bgjTJrxgkEJrMNitQ74k6qxUqqN4151t781tk5RnH5hYkNt6vqzMHzXP",
  "key11": "39rhpguwqrpmbYXbj9FaYdT6m6eL1WdinqyXdTgc1UzzU5QKHVLtxTTEDVXCKaaKn1qztoQVgKyvuC1sD1T3WpRY",
  "key12": "5aArg6i6Ccs5RRFopprh8i8Q6W3woZdhUddzKV3v7AktzWwsfgCyGsevqUatf6K1q2CUTZ6YM6Qkmbv1W6ravzT4",
  "key13": "qSA6A67884WisCFLEx7g9KtLn3vhUEY3hPiAFcx57P2EB8piVSQ4YRAPq9Ehaz7owdqMapipatwvEQK5NVrq2Fr",
  "key14": "5mVmMVMDFDCKhR1ZJZ7nM4qg5d4adHjYvDAWc1sbNGR3ZE7VnMmBaUJiJ4mWEoKhhJ7so6ViDA1TRjjKEmo2dMLr",
  "key15": "45CCD1xiurmXg9atewTZeGPRtuFmCNw9e6zKjcBKRkP7pvJmsXzsK4QijcKggvoe6XiHyVQWnDDP5wivTpA6P3Gy",
  "key16": "4ZcDQvhBpFiDBU46mor9xAKguALJCDNJ5DRxGT5vFo4Y2aRXveUQtrXJRfputRQePANKuxkUbPhEsKUzG2XMrxfo",
  "key17": "5PVyvgypAKRVrpoKnK5gS6QxfCCoWTcSyZMVDJh7RwT2K535ewM5mkjeqtm1yc2r16vBA91moFkTiLn47TGJgBKe",
  "key18": "3KibTpdxbGh8qLQWXjNFHgUrCnz1XT2tp5mxMydPsVn1vWNX4sZRTpiFw6qtr7B2JRQXHrQQU8mmvDWMh7sHseWq",
  "key19": "2y6iT8GQMss55oJeGEMYBWjFMfMPCNoZs4NeU8emp6mFSrTPq46GzoJTpz8LrMSaCZwTDgyRUHCfbG7SGM9pnzva",
  "key20": "4z18VyWWmR2fN9iXJqnyfeKtLPQc7Ex4qaQPFMBFuj2to9aZYpo4MF5wJXAxDmpq3gQUBvM6XNGmbdUrfgk1yVHm",
  "key21": "WCCU1meUHpv6af5B95sBBDvKvSHuAJ26GFcXyYhfvpaZdzCAn9gmcuwniENp4VfNHx5wVa97rskHsKAfXo8ahSW",
  "key22": "5oaFuCR4tXG7si1phHigqGrMoYrkFFeoagka63FzRTcuopJkAUZZ2PRvhMSTYg95Qo4L89W7kFZTnnmno5UdvAmv",
  "key23": "267UnHNjudLCkSoLcabjDNhhHjCvvPnjp558uNo4gfzr9potxEEQhxw1sF3hVyLL9toFMvV3BpGJUSMb5aaTKtUP",
  "key24": "3uu4szHGQ4mtDYRpj3octG5CbgBbzQ5Gr7ZEFkjp8sH51mG73gkUmeKtJ12bBFBS7DgBi3ik7UA5FfVhSstCe5bp",
  "key25": "4Hvwir8Bxmg7fdUMvynups3UN2Bb9ycz83QYXS8xvzY7Bza1EC8CkKZNHrybkjBjiKb3toH35ZtsJdivBbutAvbW",
  "key26": "5ocwnNhdh2C8EjjuowjgXV2S34vo2ZqWFyX46udvgUQqWwNXAhrozL7dVfAEJ3kZ2MntA3gx8rdyZrfmQL3116eo",
  "key27": "5UpJ3XLotqHBrSpEQidLJQnMZLg98N8ZdVBCKNtLnVtEWaZ86zVPe2zFBQqfKQ3a18PrCu6zQJ8DGVLCWenUKnRa",
  "key28": "3KPvnpTDiFMdbBVfnmykQKeuMN1FS2HtFwRYHCkdzujzhuuZmHdHpnJqLcUk5octPA7QNhFjRCbexjPbFtzfDcVA",
  "key29": "3CemV1mBcJXGWc71gTfzHX9QCsQ3SjWh4wodKNrmBTn9e2bJrSxnqwXiFuzjjT5ZSRALymn6gQkWjHKy5ZBZ9G5j",
  "key30": "3UPhd7qgmSttGA6q6MegV3Py6yRp3NgkwRfcRrrPWMYE1mnLkCw2sioRcqM9Y2rRUiN18A4fPNA8P234z4MfByYA",
  "key31": "2zUHfgToRYEmg2uSbQQ4duKTUWArEhRiBPGwQoKH5kQKWXPbh41n1vdUfGDLYeMnLTHoQUQ12Ydg4AvUq4YbNu8d",
  "key32": "4BRLZSHCkA7EHWwoLct7WtjxLiTdtEaj1PYSjdGRYJ9p6FY7xo5rrEUcUoBdgDFpigtnYLXBiowXpUgqzS2TQhpw",
  "key33": "3WRpUySec5pVLP4gnH1QcQq3i6hrcw2jAdbHCs3NMC4YTRCnayuRaYYJMAuoTr6UTy7aitxizHYUxfdPgSNAWohM",
  "key34": "5Mwn2AzSveYN61jK3sPPh5BakFHy8dCxW8GP4oKa5o2ct1oJaad7tT75qxGj17V7GsCSM7Yey47wh43vknm3SSfn",
  "key35": "2h5jEYWvLXNY1HQK277LF5n6hRhJqsjvastu2mdpvg7erYNEGqASKsT11JXAvCdmhfMTQCtomfZ61pxJcWgxmwfx",
  "key36": "3mK3moN92rCuvzUAfeuNZRAG3CKydcX5DK52KrGqKoLU849TREjiZ2APJb1LpTZehX4NdVV6n7TauU8j7t4fFDCk",
  "key37": "2gtZPwbtUh8kJEzxVMLCU62HQCjyWJoYXVWLUGSkqcFUczCiK5P7aANQ1HgCnaCvrZLwoUYofmoKFzbK7GnQfuR8",
  "key38": "2vA9DAxuo9afhMqt48rt8AJeGJYe69wKG1nvL9iqEt1k8M5Cv5u6212WiprStqSHybc6ArnPEjCYXsmmQ6SwQXUC",
  "key39": "5LfuF3T4n8oS5gPyYBaQDPfh8qZsu8Wsx9SuHpqQjyRS89fk22iSc1MXcSoyeb4k8VbfVcZpnAJM43xZY4EXP8fA",
  "key40": "2eoNm9SeR6NzAYVwqNHVCMcsRJEDYfEtuCg1nA8awuARHxxnyWcm9iZu9PR1LHSyRSEJwLfFPpD5cS92pj6yXLRj",
  "key41": "4ZpFJF7JUuTJTZZCAKLzHFFs7YEhYGaPSStRtdy8P1jJ9jbuMqmR92uczKawvkA66CGu7YDvJe7u1KmfVoRX5rtz",
  "key42": "2zL2EXFiqPJLyY7tgVfefKCzq1tWg3P3W8HewwqVwaiKgLsJGVM6mm6YCx8cmegn59495CPm7PyJnWD1FuKFEszv",
  "key43": "3n3awYzrkJUjJZYT5W9VDgFvBLJqXePpZNBUMvmhSYBgRuogVPU8e8rkWg42CJDpkmKSFc8MAQHNCMsx7yVZkaTy"
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
