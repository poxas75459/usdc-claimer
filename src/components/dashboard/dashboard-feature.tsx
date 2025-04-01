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
    "4scr5iJbfA8b3MTbxLxUfvwv3sEpLJaQT1hnyfyKps3rQXmw9RkMberCt84kcfvYsC3rDcyoby8izbVcCUH9qzzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSfBKQuYVo1DNv2J6ogUdPjev9HqirHsGjL19gYXgjyKBbWHfUkHWrKHGTKwqf56faEktimzrXX3q6w2KTji9kF",
  "key1": "3uzd9mJWTt58sWEKxC8SYrdpdi95TeJyet5Yj5WweqHcXRL3BYcWdnKMYPKF5ejbou7dhrurwEFEsxHs2sUVxpVJ",
  "key2": "2sNUeNfJAfj8m6bZKdxCYm2i2shEHsUNXk4vnhw7hVJhSecuTXXTHCNVy1LBFNvfQEpUf47kbCuJeK2FwY4H98PC",
  "key3": "2XBN3ojXWSpYuQYnCSrN4y4yZopq8pWKyEAszsJiTqcjzy4sre6H7Vuo7Ur2qYs4xM2TdmqixX5Di5uGPtz1a9wx",
  "key4": "2bGqiwwef76FswuvCWrAPpkW4N41SKNsP5MBXWv6Unq9PbhZJUnzKbZAL14hy3nkC56BS2rYnbjonCGiYVBqVGfn",
  "key5": "fysieCSrLZNVMfcEY6RhYNSTjuzGf6VT3hkQx1Tco5cMJUoJjjjzzJbRgS8gLjpf8GyeBPVPQKXEq8Nwn9qagm8",
  "key6": "4oLRHChMfBNYzPBBn6o2k1oE9HwdBd7wCrPgmwebJo8xA8Yd4WnLAL2qYEey2n8RYVzzewzcQZDJdJokdu1c6skw",
  "key7": "3vyTYQb5dzDv3Z5g1BZkoFFnwzYprHt6w5ujfMKkvMHtBE3yjJTDAqnQVw4b13xtr6JeD4WYqVG1BH4szKZvnpjD",
  "key8": "HMXGuXpnUJPdJqeLt6HVUsTszYw93VuDQE73TQtF52Mtse33aMYfn2tryLg2dbBT7jV8A7bopGJjm3PHHAa8wBK",
  "key9": "5TJGUeuCPEEL5NYmx361jgNhkxAsP8SFZcmJvXsQSj1snWD42WZcA5qEvRrLnqJkL2tWXCL2JEEijp9MXmpcWDZZ",
  "key10": "5HwZBugbTmzx5gaXFPr99Qy73dYs6SBmNf3KTijw4V6ytWzQw5F19uqvS6FU5wdU2hkx1ZddjLfqHJtZpAphrhBr",
  "key11": "CtWYRd74aCLwr58YTPDWkWE9XsVbQGBPje17UZHiyghgr4AGBBmkNNDFHL4qoXZyeAM6b6whDjtyoTbCtDjQnXE",
  "key12": "DfHW5AjiqT5G6FZ2neYBXwhM8pDauPTJZpKzyFS9T6AU2Mr8RPokWQpeoabpVSBmsEAy6YEXPDC6ZchVF6LfKmv",
  "key13": "2ZJrtdV7rc2aRDtrEk3wTuhQPziMDzhkfzFjnRvd3i3FnPtKaZcnyDboNEydbxMD87kVJsYuykhGqZRmC6hcVoiH",
  "key14": "2QRvBRQyanKsTbPZmnm8Te5Y8b8iPG1pbfNLpyfA78oJmzUtkhXCRMTp5SUnW4cY3Av6srhY9dxYTEwgyMSSuf46",
  "key15": "38GJ3UpmwLg2FCDAwkT9YrXdLNtcsPJsMpy73FTeFHJGqA1KNu8rt2UWoqiu8DYGk8H6V3DpXBS5xvfQ3Ge9oR43",
  "key16": "38g7aNxbqNS8XjJ9EqEoYH3wgZCdiZppdEDefK3XinAMkxBWRVFfPs8TxUyh9KcBBpb9pQ8LT5voDrTSusHnkQDt",
  "key17": "2FZQgWsYzc598RN715nmuSpiEkgyjuKhxJ7h4WcZ21MKLg5PnYdYvKBbu5tZhfP2X4kz5uVzVbK4UMrdB9HaYtxE",
  "key18": "45omDkVuzq6URXCtwmfeYdFojURM5ecKEpVwtXnvbWws8L5KRyY9SBuvoDUAQAN3SiTQD8REKGFG8EaA8YX5aGcw",
  "key19": "2hQJDfYWiUAi6S5HVtYYrBBDcG4W2oygHPzF6u6XaAc4GwTXG3bdaC96jtJBbvjoR2WNJPBhKYKxqhcs7HvjceLh",
  "key20": "5ow3dve6eAMtvDF6LiXPEwGjhJyaskX3Q5DxMxcsaNVMSvAUau6eLxc1hkxuZGPhbjCaSVVAHh7SBmPP5BD8imYj",
  "key21": "2CiEadb4p2Q6AFJcUPQKNsi78EVJ47qjV9xMsVC2JaZ5Atg4xxmTxvmPDr5PnDCfZRCxxWVMqeM5Nc7C4DrYntjg",
  "key22": "3hrzSCmMsDFScLeWvPCM3ePZncA2Zxt9MCLyAtzP8bVDsappvEQnUQFdGYPg8WMTREPoovMTdm9yQUuEfKMoQ3NP",
  "key23": "4wBs2c7YykRCvudDkpsKdkD9M28M16VhYQuYKC9dX75r2LFdN1ccJ6fy6ZnJrs1TQAKMQdjP5Yqffha1Yuoqbptz",
  "key24": "D3Vu4jjabweNZxsuoiYqSzTCDsoPkxjta6M5jN1aodkraLfzpDjgbiWZUSHPqueTx9mn1GkisEsed9UpDXV17ro",
  "key25": "5Cu5dXeZyUDdJhHuhjGNqEFz3LhhUPZ7SQfAxrMEGmogQXM79uKn7TZ1Wormy9u9EMt79Mj6CHuoFsLgVvPDGerq",
  "key26": "3ehSZ9RiUP5pPL7UhGRha3JyxSBtwrDCWmr6pUz9Fc1ZCTXGPNuVaijWqvyBdVsEdf38zst6Y5C2xHd3xLUVbDXM",
  "key27": "3JCi6MvwcWQGx6NH7FM2nUeQiJPA3NmmVD622Kcmef39QBG5eRFxsQdWCbfVPD6GRbsUg3BhBphqsCUVwr27p7sN",
  "key28": "47ft4JEPzhZwnbQTwrKh9gA3HZS8K6XpJuyD22cuJYUjWmzFaLFVTzPemViJ4Losu3HFPEZMKBGWLVmnytEQpqgT",
  "key29": "3ASy71wcAGe6myST21125mAiLHp3ozmmCfASW5dQYnYT64pDdNvZKhS5G5bogdPS7oSc5oiL5gKHPakZJu8nfXUx",
  "key30": "5twU6YDB8dL96vh158LVdVTWEJJ9AFH2aN6PVDGtWnWCbjwAobrmHuezoRPwtgdbbd3MgsP7XRptBPpJfhJru7kX",
  "key31": "581yt5vhbsPWZQZDB9ZLHpCEmqeP59cNNtc9thZM6Xmc4Lmqevh4WfA4b63m8gXGStCFMWeKwPCsrt8boVVrGkT8",
  "key32": "UqTRk23qqAoeRxgAmt1sMsAkpbvovaykxYWGVRnzimeqVULLN1G6dNhYpd6SV14rEpi5SREWj9yktWD2sGKyxy4",
  "key33": "39KNDMMNBgumfufzpQtPsD55jhJ78ECwhxtf3CUqF4uJ3S4rqjnVG6KBib3z75nRyqBD8V6RoYhUU5PY3gdNVKCx",
  "key34": "4o9vVcQuPe9BbwM6fHNs5Z3qusEFE1W5aSySrV8pfXKTQreAmHAj9LqVi5QQWebuAXzPgVGu5TbwkYY7wXUnxRts",
  "key35": "t5wijKDVkUkKrbzyWbcdHZT9JqyarG1rTZDJ6YngF5CJWMiQytpC1Kjaq1re1QdHN98oyJFkvUdiH8oVvFYLhyg",
  "key36": "4nDR97ykGGhvHwSF2qUnZc44Eej5fsf2PxBd5PU9VkiZwnHkJNzLmwCzuePTC91nZnwdf1qeqWWbjXg1ukD25F6m",
  "key37": "JEFqxe4eLu596iJiKG4gba7GAG8cbV3tU15PqmQzYHsjZdTuzwip4nYAsHzRDcn9mYyrBkWdD8iK7w4ASsUYxpk",
  "key38": "4tXVmmvQmAKUvUuvEb9zfyQzJJs1SYKk1xEx5wcqNAcYhnAjiMULBoevbLGZREMpVoQYgmRQNSdjhMjxJpGvWnX1",
  "key39": "CGwQvVUtj2p3nXtm3wZEPexVfG9hrbwam6zpaoaZg4AqBbLcsMRr1XHpiZqt7ktAJtsQXpKB2KSjFHAqMA42Ygc",
  "key40": "3C95C3L66pohCab5UEgLXqw3mNMSyAByEguuJpfRFRMDiaWC4ifMYjAnqc2qau9G6pY8yTYgTfjhUxrXLfYisxfm",
  "key41": "4XUyY7j4xYXMTasxcoodzAjdurx2SCdqAyT9yBKXDZ8qq1ekunaYJFHZSajJXKyeqD5CPsUHLc2gCPgzPBZWGZ17",
  "key42": "eToZ5FUUY57CMJJ2N6idnXpftfXZZuukQU5xqRwB68Uqm8qCkDgtHt6X7fLfowZY7C5cZquJF9uiUV74nT1te6K",
  "key43": "CXxU4YiuTMKao5aXdrrUf6vkDGftNJ54GktE2dw7keUpudyt1Kpe23xA4i2Nz9CnHTjapVBbosjMwzWWS2H8q9w",
  "key44": "HCz1Frqrg7rTrTwQrS4F2f4quSpJRHbRax5SY6zK6b9Xz56PWLSD2LN1mDJ68Yj9n2e5UfuPkoQLMXBpNPdQw5M",
  "key45": "2ZmFUFjvTEQxo334wZJB491vrHmdwzUjPVBeV6sZYQHu5XxiwVTxowxAJUmTDKmyhNb9pb4CWJEKh9GhTsASz2Bf",
  "key46": "4iPtojcwKUTtJ7gZS3QbTkEJkSHtLnZ7WfeSBqQGuD4ekGujxnxhhFc2vRC3HHFb7yHnnFhsoF9p7ftbJeD5AG5W",
  "key47": "qio2bWb1QDnSoxkXxHBWRXwz1Ao3JgxqNspACdu2EiNwRYKJ85RSmSzwUG8nn9GfbWgNmAra6xo16TkkMiYhkeB",
  "key48": "2cLNTuCKTRDuU8tQXfDNhpgS29aXR3JX34xeiucdt2pwhUCPNgMV7eQoJS349vSJYCoCkMBN17ZNA2qKgz9U6umo",
  "key49": "5Hpa1Y1WZzPtyiMjsXjVrNAKXDKkXGKtb4zoZamQMXZjgPmkFgsVn3DAcUcwnNk5wPyzLZWEDpBG2YoJaU3vByLT"
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
