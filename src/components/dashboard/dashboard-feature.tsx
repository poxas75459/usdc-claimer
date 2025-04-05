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
    "4SDgFzkJaMLBnnBextXvCQdutQzfwbFwcT5ePgSMbdNdXJ17zcZSFNMcwdioWgFih9ZNPw8SRDxt3CRpUki1z15w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zY1z9Byn4YFLfDwUPj4t3bRY45pxKi9VBXvi6B2TU64PFEZcbCSEfoBmcmjgGxtd6AnqYyQWWsHGVxdHEqSVqNd",
  "key1": "5f62wKDo9eBUwmG52Tbsf795P44gzLwnw5fveDXT4tAKrv6TKYNy71fX8394152PxbmKSqh66cqp11SZ2RFQSMdV",
  "key2": "4MstjPjSycka9fK8GacaDmtUECKW1Zec5YTnEHxWdjnp5Ztfn5Sj8SQ4WRAFQRHQfNcZJgemMiMqaQvLDiGHJAqe",
  "key3": "4DVX13FY9Wmms5darEHYkHFp3DfEndDFagsk6FvUKMuzo52b81MDXGeiENQ9YESLgj1WhLFSFQdyrRCev8cQjEwA",
  "key4": "feKizxqqbSBC3kh8QbMTjEMn1tKosUVUXfKtN3P2RbS2cmvJZPx6qrWs3sfjjKE9KXE5fVM3NCcbcH6GNGTSdyd",
  "key5": "35kCFkyhQCMf2vQypdVa9xbLTChLdt7bHWf3zPXKxasD2QML2tHnc8K4p8FTUaHC5U3CLWBis6xjUHgrFoTSMKPP",
  "key6": "54PYfghqSpH7hEwnfBPDFTPw7XPicuQsiMwxcDptuEm8aMC18K45Aw4kQ9nm7KCnD2z7abgXVhjYy27bdVEu3qXt",
  "key7": "nsdQEBHDLfo2PbNGcGg7sVCWHFH3DT711qemxD3DP5H6Y7n1deYQSaENo2ZKnUtAAVF3CkMFzuEMVJMADcNELe8",
  "key8": "4dBE8CVtz3UQRFmR5e718Nj7Ty3eEcChaqZ2vJf3Q6pSFJZe5qkvjspyPqK2XJoypXUSKF5V5PvoEmdTwx7wZYUv",
  "key9": "4YJ8nSxihXmdiMM4oCEbBW2bZMTVMLdfJ6BgoycV2YueqwCX5A6r9K34UofCkNxrjdEQQ4TTnr9e127ZhqqXHx4T",
  "key10": "4tXy4n3abbHz2iCpvB4U2RwpUxuHsfuVBDaAdcmXTHzYXKd8FdB7avrHuS5Z4KfzARnukx8jsaezL87YReq1UCUp",
  "key11": "5iynux5CNJ5fWr81H7Ws7AvcKUSsYKLD3vnAhRPZ2ft61D6pLXJf54ExPZatovzPzG7W51jEyfxJZFxLbhdNqNTs",
  "key12": "4fLc6Gc5kqq1XbCQTaotsANWzyWKoqtt5iQJquRaANWUMFmbYkoz5EcPCEc6jKhAyeXs7MFphnqq1Zp5CEdcCosX",
  "key13": "4dh8EQYYM1K9YAAeyuRvDUR1Lh5Mms4tWob2RVKTioXyJPzEy9Cz2bcKLaPZH2RqKJbBmdqgUd3UphXGRMJvjDtv",
  "key14": "3rV2Eo6NW6k1adQfRskwodK6dZGouQfwgCMLuYzDMeEXyakAaBZNSc2e98hYqmJGqbQVT44NvMSgyhFoGFPyJK7f",
  "key15": "3fjYSKPgGPjqNEQWkH8Xp3SvyeNYbeeiy9Y3KDCReN7vGyevMFS4SLDvA4oPo3w9pcRnMHzBUVJHEQrhv9nQJe2b",
  "key16": "4HTZpUVXNn1aJfjwYv6UYypd6xcSGZQJKRFCX2eNVAiEMSbsb2Zr1NqjhT6ZZQDMt37fwSWK6KLxE3bWJ61PJJ8M",
  "key17": "2Uay3Tc73RZaEKo9156kzoKwLdvgXsFmrVYsGu7AhuTRTDL9XcXP49dqgYEYLpx67hGWxmHURUoFbGEoGVjNbKG3",
  "key18": "4311moDCKzfHA48ebcsUudyor95WDaKW5FZSYMGKurpR8cHgPUNcSFGrz9FdsrNNu6tWPUc2i9kS3QYNmHqciWhx",
  "key19": "3secU917zLbPpvsKzNko9dvWxx9yuXw2HFuGGEBxsdYwrKt3tuAjdqGtGsRRngdY1sUiJ9qM3bWqhxB39c3mxYn3",
  "key20": "5yGgpCRZ1c3WUyYcZpfhjHsZcH5FESvWzGVYB47B8X2k9tH5yqUbQmyJ39Wi8D73M4VjDF3iWgW3y67iVeQAjmfW",
  "key21": "3k1abYDdggPTmjmpHk5vyqJ6rZFLUqLDYCuKgLX8D3TJjowjjeqLpNVLbJBNvTUTXfnuH3mRJn5uChp3thPt3xE6",
  "key22": "PCuLkaECnvp1ikqjso4CQGWF3kUzeQunsdANKvS8Bm1H8842Y1yquJZq32ui3AbUmP1Mxe7N9kbs5zc3mRehnEd",
  "key23": "2U2D1xZLj64A8aQpEVwpiP8qxWkFSReWctwptKgMxZd7bq9DigqWqbe6pyTDu8aCRxvwC8iyicLqKmrh21vucG3c",
  "key24": "4utFLGGLrQQYere585sagkC87sm6aU3aw4rdF5N5WdkYXwaezQAhYDqnyUBHr5MuRK6EMbCwpWSXVP5KwHH1XQZ3",
  "key25": "4QtxxLNoMquLcgETTUePVkqs2b8V4dr515G68DboXMUgBBjYJgUGHyHDMmFu9sRd7ahuF8N76MVt7mA5GFmgAobE",
  "key26": "4AyswRzPs7VSYanTgvV5xsNUYgVvNFJVcdNaX4yHDHCMARHbG412KJ1KWXXiusd2r7m1iqzvQxz67oxuZhrZzrTB",
  "key27": "3LKPvcecjRxPDeyNM96QazFv5d1hbr4N8vPfV3CgrBmgAzf87C2S3Ga9zFAfE2RKcGiGru7tPF7BsDPufp1TPZ3k",
  "key28": "3F44DkgFxpS683FfX53tW42HXmscBeDUwCbwMzjthQYZUVFpMjb6S3pENHTnwvncgurtsmK3AsQEDgzzRd1JDZf",
  "key29": "536QaFqEpMwSkSq5JR2DmCShZhqBG3jbq36pj7vCBpVtjsJ8P1RnwE6fEQXLsy5mUuHzn8C9uPmi3Dqx352n4s1X",
  "key30": "2a8zasM61aPkrbUqgUnU8Uvxsj6ubCThoyfd73PQTEWzZN5v1pG2eRVyAtXdBAac2D3p2ed9CTFaaQu11smTFipG",
  "key31": "2p4Ur6mL8LBmAJqRy9LpMYtjiRQyKPrPsbfuM3Xv5KyovagDHXfM58FLyEwxu4qy4kd32Lzr8orSTcrjDGoaatvZ",
  "key32": "3S2PJapuNMQ47oLTjttyzedt4UGccXLLWToB7s4FnBGZkotiMRvW42D6wyLhE8d2rQb7HeJLPmnb1ghTsoNNQMk7",
  "key33": "4wNwTcRScgSfrhQ3oyFu5XzdUbE7J1pGkwYpC6X55ijSYhBQfoCFWzGtmoWmbJZ68BVes9zUYmazJMygC8UpfYGf",
  "key34": "56MPYdf9Jm8A4yg5kspL86ADK6k8gXSkifvXpptp8xYbRbLvaLTRsFR9H6UGd9zrCioXEdfbwjRo15SSBa25dGTc",
  "key35": "2uSm4dVNzgDhS495JfXD2Vozfq7oxQB8qZEfdF1LpsRXMynWXSd8n4gMsBEnoSugiX7LdedhpzNPxBKYAddEijLR",
  "key36": "2zaEWWBtyNe1LpjNcHE8FQGnGX7jHjk86TuEzYjUD2QsqVdZoPE2iFA7f1xunTfTZingx7QKbEAERuFXxExs3Uij",
  "key37": "Vu7zye1EkeYiEZRiRbPEFVo3pruxNGmU4Vbo7YSjiF9QWtft7vvx1CXznRz4XTHstJ2W8YxrEmcLNvYK2Hjucnf"
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
