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
    "2TMoG8ZKr7TgCfc4p5T57MCYvifmoBy18q8vynEmA8y9U4AyF2VynosaFZyvxzfgixwA4ppEAksjRpHX5RpD2AKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERgGrVhJ9pzvE7mhK2XWNNBLZgLSAATPjtJJWhCavAAy6RrWC1Adn9jMYyf3bJoqdrYBeDmnsssBpzyd9cLcL6x",
  "key1": "2WnBzSwjx9AW2y9avB82iDdKmfZtwCqfD9XnxSxVsQ2kCj1YrtbcBs9UxtpLjAPjRyEhMGakBm8iGDymLuH7pjAe",
  "key2": "5h7MQZbWv5C5AdqSUF9g4nWrC8nnMB3D4X7TB2Zg7moCUxdVLSvoLP5cSDaWdn4MHxcHzT8bXdM8xqUwuPQu4moZ",
  "key3": "37HwdNhLyDUD7Z5MhMAUtmWK7t1ecJgW6wxPdMJEsH9AaB7puaQ3x8rwwFkCciuxpqPtFvPrA7rYctAonHZrhXN6",
  "key4": "3nR9C9FSF19bM7HAj28adXzotisMvt9EKqrL9NLPDfPmDHmCaDNZnwkrXErXR1tvhyWnVn1Xu3tZvNEUo6zdvxdK",
  "key5": "4LC2dAaBh6fQ3FYWpp8o8WVAAVnCboVpaeZ9TeiBDrpBfWeXCa3mUpEPbroRd8yMnoqnpXqQWZqxoa1G5KcxkWDY",
  "key6": "5we1kR6LNhmmUiFegRHnX84JQ6dxmd8Xj3g7DrgPkWWoP6QPgSH5aiKC8WjV4XD7sp5q5f7ykAcHaQRUo7cRUrhN",
  "key7": "NYmcKSGK5hcges3BErdsznYjEqVc31WNNtcnxG5HrA4fUjEJzjkf9snp2x7jC8hEXQFEBmSqUTGutWU7pHYKCDp",
  "key8": "2W4Vak2ZChcoTGtUMPjQYhj9iAT4BLZd61V7CBMUuYyjdRFfpMCLd9oQyy8cgNXXcDhdipkZRCQhtzNn4Dn1H6ci",
  "key9": "5KepbWVxaeFce8zh7etZ98o8mW449ST7MciruWsdxtxap7j6vXgAF3pTHE5QxQrL1sFNJ7YjuDbqKB9NAmvG2FwW",
  "key10": "5QJkDAAWKzf7q6i8tqaERuwYVSfViVtN1yuD9ifYr4XEt1AcsPm1Gh8FhRKWUbg41sLsjrJNfurYG4FjKQjNhxQs",
  "key11": "4oNLNPDUsbdSxGArSBZ5GdM19ZgUJE6yVcQPTrqYvxzLvaoCw1Zt7eEjiaxXmV7rArd2VcxGUd65fqsysV2pdzZv",
  "key12": "38YvL6LfXcRo7KjfYJ4Dc2kyeYDDZRoACmbgEm1C4JGiJUxo5ed47ukLyQwnU9gSyrgbn1cz1PJQxTU8Vt4LseCo",
  "key13": "4FGz35nkdd8EL9sgPH8Ka73xdrnfarEZrj4ALnKGAXF859HgssBMsg2PvKgcbHJTuH9U2cEQeR76Y9WQxbFNZjmW",
  "key14": "pBBaFUqyr3XJSbAxtHTbUU4zUGPoNWq7LVeLybU1ZTu7w43PPjNoGuGjj1Z3VCCm6bsB5VnHeADjSxWwTaSaMJV",
  "key15": "nm3pc2nk8EBedHJczrgNkeEeAHQFd9sn1PBieGrhjk2idJ1FttZ1z9ucJhUw6skDW2qdc4bP1xRUAKRRmSQs6BL",
  "key16": "5K64x4tGH8xziDPQJV7bKYwLdxyzB78z4ew65buLyXMDjKJ31gQDszarUsDhz5ncZbhqDiwoZp842398UqMwLPg7",
  "key17": "2EUQ7WvzNWsJprJwA758U1zgNLbMH1bWZ9BMkHEUg7MKCPuPF7Ea1HnyCh51Lgew8UKBCcqtkdM3w12nLYxyZTbL",
  "key18": "PkTk6pMPWRDrG8enCeT6n5QeaWYVeha7X3vLMhBngriZb5Qk8iv9mEyYsRadphDfcCoFRLbQz2FRj7QtdjdFHQR",
  "key19": "2PjXDTTHpSQPrwZgVEKaYj7s3FthsXHm9rWRzYBeNrwHqrg2KUDBEBCBWJPu5Hvmv3qir5tMsQv4fvy5S54vhCtt",
  "key20": "62DrXj8auWyQCXzj2UgRpD9qa6ExRH5pSZajF55Gbc5yyHgP4kTWth6ePzbfFRr6F3M5WwiDnmHKDe9xBbwypVH6",
  "key21": "fU45uzKyrYop5YJAZTc93wVrEtKPBsZrr5JkPMWs4gEo5VPRa2Z9wWjyMkGQmCHSurUuPwz73PnDMwkkkSkYCE2",
  "key22": "RVEhrdyN3WvongQGRDHgCuh9YTW1AbYDk1jiLJpXSPwjwcPgBWPfxQyS9TRBzxDWPsXhgidRhFgupnU5JE6B9ZM",
  "key23": "vR5SzQz6c3zWRTUMpCvv4yy3eQGWsRQvtKv88CnQyrPkWTeLNQHTgm8DxTfBCuUFsYW3TVXate1H8kf7Ajk9veX",
  "key24": "3oTGBbe3BRzcTC2YymcifYRRLmeC9ERj7SxFRarwtytNzuwo3E9LNL74KkS1VybqFhAkuecFhJ1J5Vmqx2x9RXDJ",
  "key25": "3pKZdU8Tmtvc2VNBTStpnxDC1EDhxQVqBggAtbXEyHFEXToTz6QsSPdJ2FYJNywzVA6m3eb8rV3uCE8BP9S5RnU9",
  "key26": "32dt5bpkzteNaT29wVCmtapBRPya227mBtuHbgipBTE22BhSnDY2bjDxfG8ADSG6RqEtHdy95qjsFVZzu4Ag5RQo",
  "key27": "5dXuAiM77GA87QPGtjDdU1N3ssmJPTWDtyQGE5ZWP23J9esmRGjctQzr5gziusU3LHWrfaNu9qQmM3R71Sj43zxj",
  "key28": "3xMzqqXSCx7jGidQKA9ycUBF1eScaDxJqn4deh61mWphw7RmVo4eFzxV9JwtbhSw3HaWftKCZRtffVPz63Q44GFY",
  "key29": "4vTM8DXuqDhUnWYSdRRDVgaSp7rWXafhgtN8DYrx7SXxx13P5S9Jk9RnEoSkGGzY3mxSibcadKHnRKnCcZxQYrXq",
  "key30": "4j7h4RL9Q3VPxNTwVZRGnwP5No8t8uwxgbqr5kHjoJDJU2gEzkBspdLfNbs7ZLDwu6R9bJzbWPqSELEJdiQ1NMDc",
  "key31": "3wrfgkaXxCEJu4jtKvxu5t2QasPCCogtbDXytt2tx7MoekVJXPSbRepCCrUuHr9zAgtF3SNAGgEdQcRkyRrro6hR"
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
