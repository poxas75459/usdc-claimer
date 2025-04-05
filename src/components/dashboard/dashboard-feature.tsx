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
    "5pUNDrbEdKJcBi8yXYPdTgMUMnFPxM5oYGngJjWdSdhQA2jmdkR5TJH5jKPtkEvGKGkHdTGR9dkd5QkJ6UzEg2x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35xkac3vG2h8ejBinVnfPySNmbcGRsqKcXb1RVE2kXatQ3h49BTwBRjLVwj9Jc4WBfTdbSHkaLzfhXdkUKEmV76G",
  "key1": "2cnZ6DV6ZbtecKfn5PcvNJNqyCSSz77NuQuGZud9dvDEyASSeTDYmUTxCmuczV1TNXzbBfRfauY2nHDaRrzxo5Mf",
  "key2": "5X6HUUSDWp9QcNnCEBF4m6oNoJnJEfJXHNXZiaFiDufwJkHTsV5mCiuaXHBVwePk6eLPiK39ZnFsdjySfA2XeSec",
  "key3": "266G8PYiKMzhomxjDYDVwRQar9bcPhfizrnxsuFXwRzTMeWquBggWTwfWRAcpHCtScSYCKKGmmscBNgQC1WnvGCF",
  "key4": "42Fjzevj4rJfRFcGDZnF6Zx4QjLKo2w9TAHAR6iWKc6F3eiMJxkwv5uAU4DwhPeraDFMi3hnCTY29yt8SKa9xAe3",
  "key5": "243Rsr5H3iuCgnHUkUS1DjfMAyeeSXLsoauhbH4Bv4wnwxxSEPXSH5cLpWct54CiY3XKGDwvdpP43aUKyyx4ga8o",
  "key6": "2CMvZWTJA4B1LvobsvFbcJtVMknv8bPgcHVCe7xREzooZpe5jaSxz8bYRTJ6gWMmjSrCDjnWYPe4UbvoZMA8qprq",
  "key7": "5PbhMu9rNjr2jsLuU9TB5WyfGLQdPnTWWgxCeT2Q5D5NBf7ahrvAn3mjshh4K5bdDCqJ94anUaio5WY9SSS8zo5M",
  "key8": "51YgLgwwVEAUiUuKdrn7N1fW6kN576Q1utL5Q5WzxGdu76Y7S3LW3giDt5wXJLwHpF4Nnw1skNiousXhGdYhia9H",
  "key9": "2HNQksnQE9ekBN6496CTWg8j8RRYYvZoiVnfRv7wV4WgCV5yXDE4oVUEvFzB9c3ccrBDGH8kYRA4HhdTknetbkEr",
  "key10": "293mfkfCeFKbvEJ98JBMqFjUVeEFdEdrCW38CCGAdCetD1j9KVEpD4TqUnE47CbqnGhS4pvxQuteAeh8fJczjJdG",
  "key11": "HvVRJHubuSLPmGT2C8ZWZP7GMcqNkGzzz783rJBzRUHKTwgQbbASrdzKTVYFhUUUZUWswkq9bjNHixLLKu53FEp",
  "key12": "3vwCC8CmKYh92iH2RbB1dDAPnpYC6bcw4vYMgo6zZqUdKktp5EewcSnCQ3pzMvvZftYvJDXhA5kvamDGQbjYc1nL",
  "key13": "5ah7mkNLTmtogMxZwKEhsuj5PqQ1eJrnXXFX4XuD5Un3xwr11i3AfdrFCP65kfPLeEYaqhmYy7yDpRyDYSYYaLac",
  "key14": "25VcYBt7EPpGoP9e5mHj3EfowtbkaV9UV1pvW1upqRD5d3LaNK8YpxmgymBMfFZzzGWLwhZQA8nKVULgTT1Dsfoi",
  "key15": "3RQpGTGNVGvCe3gV5JnrmpsKqYZVEsiPRDRz3kvzgNnmqdMTg4BFZiPr7rvsjAbUVYCf6jtxC4pSV5LSX5JBDeUt",
  "key16": "2KtAwEn5dsUcxyibkuJCrn91hCvaWPELjYJ2FCinLvv1PmyLZwWknZHuVrjxoHByKpX1wR9dBaMU2J2PUHwKTwE8",
  "key17": "67NFnLRvXatjZWsQ1DYCgZRtQJwSFu2AJiHgtKeiKXRHjJqgj7bbuvWyv1QqEY172K7WhT6P71T6eFCzJ3CvUqNx",
  "key18": "HK9XVvdgNnzAwrvWa4QbFXJmXgC1efDBpTWdBqB9Ymgibu455fxV2hDDjj6b5AKbei3yCr1anKAyCq2UJXHKz7A",
  "key19": "3Ds1nXLhp7SbmSMfpEEg6yLjRSe1wFydBahFVRradg8SDN3zcrrY9TMRygkkzZnF6C1wfWgJ9FTCpCEGamY59GiX",
  "key20": "3bnxeArauvmWRrB5HCXGm2Z5zyiJCRs2bv84b4qoaEtrXzQn2DXBaQbqsa4VLeNC9h7Gdt93ANe5W5FvBsih8oMk",
  "key21": "PxJowq4TLRiR8A2vhe1zr9nSpV71a9FzmGzvoUpqJpvfoDmSZmMEubfXArzWnn94PCbi6furv6n61BZNPrYVM6t",
  "key22": "59oNdget9G4niikGHP8jr24CVBYdMk1xkbLEKSvZt8hs3y2SQQ9GGUaJPJdjBx3MbuMFtpZbNrKQEoiELYuTjDxb",
  "key23": "3uP428gGKiuYYYRkvhPWRdcmy3PRyVfEMPHmtJWhtVcB56VKGAmcaNPSGnsLFEgroHos2Mr3LDrrHVCULWoWroYP",
  "key24": "5Lp6mrahVxNymihk18HRn7j1EMuW5sNDoAKnkxUdjuaKWzAy6b7o2e6fh3w9261U8iDwWax29drBT1Kwq1HUNySn",
  "key25": "5DF7tw9H5aojMWDtGC9uLJrpCKbBhgsHM9tmtk5HbUNftWUe1oupkdbopZENZpxFE42BaJUxZAxmdXSZhjiEP7o6",
  "key26": "4otvDDxv4eZq6hx4WxoMe4HfmrhPR8es2ER8Ch8GoKnkGs9NDBZfQCnV343EiY85kJLSkuDEmCcgny3SszVoVyCG",
  "key27": "5FyCyw37T7aWhDHAD9M7tVgs4nzr9GGUgzKKsqZEhYsf7dG2MveEt3SdFW2XT8JYgx1QkzRbp7y4ZtFXeimi56Hm",
  "key28": "1Wb7ZLD5jPMafAdd7QSZmexpnsLi9yQ6nUFvdQBeUsqkxk2Fhj8qJcN6w7GRJh5RKGPRL53M57piFU2Kvyvdenk",
  "key29": "meqmMz8hXgLDEY5HECtJk4JWWeY8D5T2nMq5aDJh6Ed2mBgg587CQkeTjV8YkDW33dCXJ4LL286fwva8dnzo2Km",
  "key30": "39Y2NsP13Jg3reCWLavQYEcdx48HuoLSyRnRmgQw6QpwV7fHrYD68aZgH2AwDckbCjguhUc6KdUyBJ4q4GeZECoW",
  "key31": "2xgnYzwqu5hDZZ41cNVcbH1cfoLZbQFnvRhHkPtraYPqtYUt1EPKYRwq4wRmiwwvFz8uKeYKfKiYwTWDeaXUN2io",
  "key32": "3uJmZaLJwzDdCgUynzrZbRENchxTGpz4PVd1gzcryQp8qBnhg7QJEjTYwuCc2G1sE5yF5h761ch31XoHTsz5Fvpw",
  "key33": "2QNUw68kbVCWSLdVJuvyZpjz8V7GVbwSfjC9hCXjpoMZ8rnA1oy4MZAAd1in43WJ9FZpWKV8aENy7HJyXubdgsnc",
  "key34": "4edP7UuXEQ1fsrnPvkhU3bYWzxMANP2rkKZXNpkw4GmN1v59Y28fY8shzMorcreCNfXUZQEhNHmXXy6jwQmZ1HJy",
  "key35": "3bZWN4xJZTKoEFtE6wvzKcTKQc1GGyv96wMrNmgLbaem2T6UhWRN6Tzuy6SYWHtTmVcuuTPySoRQVZFrG8qwgSc2",
  "key36": "5JwDTduCJ772PuxTnrFvqgUSpNeRemBpt6qTpe4LJp3GGsDjgg83mW5Gv66K1BgiTpngoZZNr1EuTZX6s7MhgX6Z",
  "key37": "3roTaixvWsXoUM38Ru1vXvKMpdRJWuvGL5LVm6wmmDvzK1BSpccvqoLmBdo8zwNSJBh9z1PUEwHrvPdwzb6XZiq9",
  "key38": "kyMZeEubceEcQwjBHptdXm6jgncyD3rognx2cC5AnVoZ2pBTrABvhf12Xy1P9fDYCgePdeXBjiccZPMsLPGmJpC",
  "key39": "vuFrDvGtFhh87UoLM8Qun8y7GhaUeDTwBTRQwnZasKjwRUuXRnoz6sSSwtj8wPsy7LAKXmAQbPcpwevHRrSg8TY",
  "key40": "3htCydh9uhsLEsn9ShJWaATY8srTXHygdKU2VrcGMczm8ScGuZBHYqGK1zV4m8Nbe9zixtU2rRJKYEbkdsUbMcDG",
  "key41": "4vWjgrJvt8RFL8MHGe9apbMH6Lvws3s2bjCjq4GmNHhhKxLg92iP5AsTt51akrJ2QQYoKsgWF26vapqscjZy8UbQ",
  "key42": "wLTkHrTDjvuwNvzRFGuqAXXDpd8AsaVJoziPdnv5zJpn7knRTT5Y3ZsD4kQgruLRzab7DzNGKpKXKuwmUZf9hVH",
  "key43": "5JJqEyGUqKc7au9NTpkVxahckQ1vL4PWWqEANKqjdJLtVo5FmRSKnv2fNucdPoBPBP5wdwC69yP8Tkt49mCmzFSm",
  "key44": "5ezN3atEkEGki1GjvQgP5quRzkuiwtucsU9PiXfneB1c9vGzJsuzgLsooZ3HsQWuwE1EU2GHFMHxcg7v3ra8ta5e",
  "key45": "4WiMgTxdf1thsNTLcRHJSmXe8G8AGzBgicYbV1Bv1pnUUufPH7iR7DcC2MN5Pz3EVhGfj895QWTM6yqoU6vinFEk",
  "key46": "3Y6viVmkTQZqNz4Mk8SRYbXjmxg6bwFNaazHTP1JTyJUzrMCFDwYfuVQZsJpHJEy7FgGJrnhfzwdXh91PAEnptpG"
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
