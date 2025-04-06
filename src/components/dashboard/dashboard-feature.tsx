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
    "5L4SrBtY8Scri2MFx8mGLNQyHWoX5V2e4KRiyLXMWWBxGDUpps7wk9AzQ4Uv5fhceGCjHbei5CSuUrvFSU5nbogc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzTmPnLA5zQaZxtiUN3Mp4zVJB2B38qeEteK4KEuvKPiGxXyKywCyMufHU1tZxu116hbDL2rFhZJjuab44ajUJW",
  "key1": "4KcdjRQiiGbbxFn4jPHja3q5vL3fzn9vFQsVBCY1BUHimGjViwMvxhZJaFSnVJaUBeMZNNs7WQUp7vgSHeRU4w9T",
  "key2": "4qM7NQwQBTFu77jTexXJ59kNxBkv9kzUvFBkzaw7vQWWAhr2gqauPp5HrUb9wG4WqzYGDSbWTD7tBMhbkeNZGYUx",
  "key3": "61AWamshDC4t36rrnhLcTtk9oFpnrZfkmtvnBwgaQqsugCiQMUMppmcYgBxmhk5n7G8DWyELsAZvhatbQsRaDMU3",
  "key4": "2DVfc8emZQMVRbXT4hUVx12cnBJR3CNhGGQTmvbuFhPKdxN49Q7VaxZXPeC3SUCoTWqqU5UPAshwwPYi84e2cLwR",
  "key5": "3MVNKhJJJ3CJg6pMNWXkRwjQKtapH3evj3HdpDAXxwGCr5pC6HqDmnX8D3Afp8n2nMfyPJACN2Rr6T9vRTFQ5Vjv",
  "key6": "3hUWqPeSoutNtWni8VhSRkE5GyaawTk7EA6Vo3ZnGJWmNcFHcBgEJCoGdXWdybuC6aQxzw8mSfLCGivuSFSkoZpT",
  "key7": "ges8hMA38ZLcq27ck6yQnvGEaCBm7L71Qfy9E4aary1wC1Tj552ei759qJaDCkTuh4QJVvJUfQPE9Juus16x9K3",
  "key8": "dUFavVPbLXHXBEZ8EDHkxP784N5JPY77K53b9v8oZh13PMxM8MdhepqhhiDK1v5jMGbFeXpAKcSxNCEYG6Br3Sg",
  "key9": "616m6RxXTUV8DvzTb5yWkpbwZBH2KGGPmQac3MmAVFbg9x4iiAKVb9sEAM7XGbqYp5JnxtFkySqjD9LepLYNPc2q",
  "key10": "n7mPA9mgexiHtdYWQapgTuan8Ppg8WpLhtYoJhEm4hy3TkSWoqXmYstGBFhkurZPt9ag6mwoeejdLpYHsiPXD3P",
  "key11": "33TTRXo9oLfgw2wbkhVUN7xQmW7uaANqDhaW9AVJRfMnYbk7Ga4ERjgi4vRQav76Cyqk68pnHjVfSZaoxTQP9Pud",
  "key12": "4jpDhcUy7YSJN5DynUVBKqV4QoxXtUrCP1A1khZGWyZp1eMGbZmE5sSPPMfUzRApgCM35k7T2vrD8YxLJ55pVbHz",
  "key13": "VFaP99DEC22cwu4yv1epGoxm2uajWinpq4uCcKmyR81ZAhXdTzqwr1jbgpPzYMbpWKuda91GazT9nLtN5Zzmb7j",
  "key14": "1Ly43mzvjFLRe2eNf4YkgSU6kdsP9dPsEVxdDCPY7iHcSBiXrrK6jQCiGThNQgzP2DJ4k8VtMwppksqeNs5G1Vb",
  "key15": "37nn2agLHPabxHQxMZARRjVvreKbxsfu2EN6zdfbsr9aiHGYMFKMwxfmrXVdiPTNo6nSspDRfwMk4hjdwovLCD4H",
  "key16": "37si4ik8aWSAp4DSuWRxACzNLdwtPx1wno8pWG5LwZPhM98EJHVa9WEJ4mf4JruLTUC2cVhwa5ZDBF2pC8C1GLRQ",
  "key17": "5rS48GXptZpuk5WPSGWen2X2wqJwLUyDhpHhdVvg8Airy45CMWGG9n61TcbP272gxABQZpCVNbBar7WVJt3eEBqp",
  "key18": "3PD8gAGmWfHoxzqkWYYzUb1jYWe6VKNp84Whry96Pnax58DySnC13EEjPfDBKbCtek379XDELHJZavQMbLXzQfSN",
  "key19": "2LoESZGk7kGCrrumgpGBCnwojQDenk1D3bgPoR6NKzpM7VqAnhucxQaBSEewWKwdzpBUHHHjY44Hy7j7yZ9jnhCj",
  "key20": "48ihbzdA2kG6phKpBujFkXXisGbXNmFp8gFQXxJDnWqh4s1Hx58GKhZMXMrqCgmpks7WHYyT2vhHsSbzvDsfnyVG",
  "key21": "5goJbvWwetw2pWRAMrtDcQ7dES1RMZ1D8MHrq7zCy4vtpYXCcevgUg1JcJqQd31bkR8CmPFgpPef9CPtzkTsCzKh",
  "key22": "tUVYg2ozjbtMtFZJkfm1yKAU4DLJSib951SPsvFhr4dVhvM2yMTjqwLVThMEDBjyHeX4psRF7i3btQr2eK7wWVp",
  "key23": "3AHeMbke2mYw9ea2TyBt1kFqDtBpJUVcA83YAtEnx5Cqk9KBM1bmZBB45cEDDE8KwcWugMsb4xh8hP8mvATd6WJD",
  "key24": "3EenP5ZpU9kmNy15AFDhcHibJv6tAkJoenQynxgDwVKSjsXhFbXAJNCEjJyCidSa8tgeucsnLi3SxhoUG3mZgcGZ",
  "key25": "43MTiCEEDKaMftEQRdqL4Y94Ci1f6VAHoVpjQqWVHsTYx4eM4w8FUcM7hNZSYehBjdxCEFhUJVsTixczyWKnR1Zw",
  "key26": "27FBBmrTZAqX6bRR8e8eJUW2EWceUdxdVbZJtnPcvjaHCAFrW9N2tabHN3EnVnh2VWvieLq1p3kyqyBzXfnhcycb",
  "key27": "2Zdm2SRVqNmPnpGjuxJ3Xp5RSNattbVVyTV5J1snh5pcHKVUvUt32P6Ua89L8nCpmBh41r3AZ6xGc59Jp3G6Ux5N",
  "key28": "4aSeBCPi9XaHarHv2jqmwZ8q4FmmaZ9vNkdAJLap6CzpNGApMPXStJEbfduk7kmVGAtWwcHxytjLi6e2Gw6hboyd",
  "key29": "5TgWKWptPyQxB4wi4TXSzLtxeUL2cen9djofLwwYhAngBFPqRwzucDF7WMNJDjfLhqJHJhXXrpmNAbSUTSt1RfYT",
  "key30": "HdQ1KtFbWxDM8xrMDmH5vuLy7seWxLiyjPAg2bxDuJxPPqwdvCcKLS3RSgDswLjZnMYkn1TjjgcdqoGVgFzx5sX",
  "key31": "rVHMm4fJgzzxL1FDG9daU5WDgRd6TvzvYV8SnDs9dVmcw5odf1RZ1WU9N1a2CFgLifZ7SAkUx46DFPinSwDqbrk",
  "key32": "4uZeR7L9ULXt69s1zypisM5GnuS45YmPHixbyp4Utyp2wMhM96A1oRQkgVGa3MnsHBnjrdCJ8ujFn5RN67CKDkd1",
  "key33": "4ESRnG4cDBZyPboBS7Q2aKNwAo1yHeWytj4cbWyMpQafULfveJJgxKuiXx1F4xcqWk13Czzf7yZeioGejGGExJqB",
  "key34": "2n92fLMgStoDFuunw41XXMpfxnvvKHnfzcc67mBYLq36WK8onTAtmovjs672jtTMeW1xhzTFQ75ovcaHegb4BCNH",
  "key35": "5H98qRSEuNi1PAqitUVLLkwJi7np1DEvW1aG3B3VoT854Eok61hNutMSmzVXRRMxgCsewRHs5pn4b2EmdCdiMgPN",
  "key36": "2Lki4uuGqi4kuYbmTYc5MmfZSUipP5z6whCMpNbHtx3RHddfp3e3mapXzFENhEqZVsW5H4vcL4sSnvAkeEYaA51H",
  "key37": "54Qmr4uZ2tKgv27QFGvVmkLFuSKGF1VE7t7QwLcBz7mmZaYbjKYjbozxgosT7CikzyTgEwnGinnzGH9VXrNVzXtE",
  "key38": "5mtYTuJBdPL8rZJY5Aqf2xV7HJApUepjxUc3MNABiF7GQdx18qCyaJ6g91tq8wQ9TPWftaShydtkrPKAGdMBdfQv",
  "key39": "52YQpyGtNrwf9ZpyXC4SLmKt7gGQ4mBnJbvLzdaZ38mpt4o3qbLEjW8rjfCoZiSs8VttJj6R2JQCnszJWxC4wbbk",
  "key40": "t1DWrbpuyDyYT3ZPcDdpG3SqPzCd7BRYrhRGUqDAQjmsAvupTzzq4DBR7VfHMkLf4KC6sHuCipf2zbvxT1xJWVQ",
  "key41": "4YHiEaR78AJUdGeV2dG3Fsg3G1F8Y2qwymHN6YKrd7SYPEpqHMQHcCZ1N24pmpgbSCE3fw5bA9y3FVxWHspBwJN6",
  "key42": "44yAYhn8feVZBnfKRMn4vq9osKFo5RpZx8hXHncQrbFFv5eZ8zoBfmBXoqmZihV1YQumCjoQ56ANQhPF3yBG6Rds"
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
