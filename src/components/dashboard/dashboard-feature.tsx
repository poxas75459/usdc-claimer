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
    "2932NrRp6WzwNs46k3VnSkEzbFfB7QN4DB2mqi9CUQrhYRCN8xAf5NAKipvwopwS55tTiUwvPwFPmmTvhpUmtknL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfTMQHQKxJrYEi8iqNdoG7y5KHMBUu7BzWvZwuQs5Lu138XWsY9VMekNEKCYUWZunB4XpbiYDwHmQSmvhaFbSPb",
  "key1": "2wc2EhhTqgQGNq2a926MWoMHfYKUR9N6UuNiTtCBRomFTWp746mFpiEoQgwfaw4TFx64GWRFMNtV6D5JJMcXLVku",
  "key2": "4vP8uKxBCb6GrAuT5TC2pKgwkFC4nznSrwjjVBthSpeV2sNBThZ5dEUi7NGFBGd8Y83tZCpzfw7AGDtBX3wSk1vx",
  "key3": "A8mRea56rE3JZZkoAnJYMaBZV1cng6Er5Ky4DFWszqTeNnH4guaUAXLwWeq9EmqJZcAyQzwxAFeZj6VP4tJYi2L",
  "key4": "5zS6raAKAY63828bMz3hibR5y7U33L6sTvpu4m4A3yyuii8L86NinKmYQ8vvTMYYj4vcBaEH1Y4GEf9EE5Rny9EG",
  "key5": "3scxGq9dMjFPN5ZDk3PqxppB8t7BszFshmfHPHLYyK4m638vNm1Z2XXZaLftikY7WUuH1RoKYjbiH76y5pBw5VJ7",
  "key6": "21ggMMQ99qTpjbgKKJP8V9uoYNH5sHRKppnMX6WksCHNEnsxmW6DQbYT2WkZxtsmz17PXFTJ7yin4UwGGn5E9kMJ",
  "key7": "4ttsS1LpmGTvyW3cNpV2rjyMdPGwPyfTHoeCxRL6W3dVfiFGNcr5CewScb6kkzWdQJEoDcfGS7M8Az6XFvXH2hs3",
  "key8": "3eVQx24Q6RcdxMwAJF3RLqR3bpo8DVsPotvVAMN7iq93voxui8tFVFkq3nxWLos75eo8ySJ6j6Dkhsjo5MBxB7Do",
  "key9": "b4k34PEszNDCc7Zma8sFuWMKbyDyx1eVCcU69P5JQH3Eh2prXn4ffL9cnAKBPQZ2c728zNS2NuF5cxpSfBcuQ8U",
  "key10": "3usVjX3scNL5oJD15h9ayoUWJPRabqv1P17krGXiM5JvgtkHBJQn2rARNYj5MRbheRUKyceB9wNCd4hbVDRcwE56",
  "key11": "5qE9hsC2hHXAH5tQNeD6Gg5TccgwBBGFQJ9QYv89hL4W6jVwfZjTegkEL6K94fBgAZuA1utYJFtZn76BmQJrqjVo",
  "key12": "4Td51cvgJYDTsFvuLg7CWud5TTUpQtQbsV1szkSVqM8wb3XfMTfDiNWHCaerNhjC8qaK9ejjx6r3DCeLsDgRcWzj",
  "key13": "3CFfrM2qMysr9oBcQavaDYzAVZ4dSicqw6b3Q3RPJeus6go4BRVA28oTrevV5aJfx9izq9EXUxHxhvZVpgi1YLe3",
  "key14": "eCMjtMLjUL9Pv1RaZUUVJJgSu2isGwcypMpiiMzJvhJ3LXSJu1r5bUQX5wJcBbAzaPApHA4yePSuEiZRjoT3Ly1",
  "key15": "WT3yVeXiBTZ7391CC1zAe3ejng6XA2Lsb2vU3wwXpLJZLTw8fxxrkAHvSjcGxQobHB6vcUtez4k5dhhRhgCamwT",
  "key16": "3t4anxues7EHrbMT4vNpwsc6A6FyR2Xk3RQEWRGTHs2FxeBjRpeUxdjkTpApYV6PgEbXhSWDsb5JtfNhNrt9w8xF",
  "key17": "5CQeQmti6nWfAGdyhGhN8rhFXtZDmiWYES7MvNQzcYw94jZQAL1WHzbeuM6BuAEbhqkNsqJNWTiz7GSpiMJd8RDX",
  "key18": "31PHRbydjKwQkRYGP6hxHfnAwnZ6CgE9yK7Y6FnA8eJSNceujZKRCKUrdxGL7YNgAvvsrt1vaXVh5xcgVUBFPnys",
  "key19": "4NGR5cU4kc72YwChif2SKn29ZcpyuiSwZycKFnAd3BvZe9dRZnPkfWdyAbGxYz69D15vJmRrRTvdRE1ga61bYDwf",
  "key20": "5CMZcz2RLLW5bzXP5AB5oCaGhYZ2k1Y7QufWXYrwnzFiuj7zPs3gqEAr2CrueqW2DbWYSbjiPwyFa2t5QCRBkG2K",
  "key21": "3NBHVu3YuYmqVeU5XfzgzH2Xz3Gxw2E6LEc7YnUuS2Lr92neYFbmcbc9cvCgTniyENwkrKYasLUPgPPBcZhKBgeF",
  "key22": "4r7s2XXXteneKA3vYhfSBVo1ax3yGmmtjo7hvphkVvBpYC9zCtg9nPrUNe9sGfJfbLU9ayfUKPyHKketsFKSvysZ",
  "key23": "2QVMHZKXKqSEzmcUgE4JHqWjXwxjxwoXAzMUHUTRQtY8X6fP7pQBxfW5B5i3PM7nRwWnAyVLaxZsoiiYBoPonyHd",
  "key24": "oj6NvU55swHXhpMcfpxn39mHpfBCM5xAU2MG1PY971KKFNDwo9TWPRt3oCQ2caRuNgjiCjiB2QRW1NpK4hLb3Tc",
  "key25": "4gL14nG7LL2XsULUKUFQ87NkWYtPaaMHYcJNQW5G2SWgu67pndE8wRzXmD9gGt622BK7uqyUeBZdvAtYspWHJuDV",
  "key26": "4wJQEuTR4tn8NLbpQVZqYb2aA9VXbSYbrsWzAJWPDJj2EV99U32sFCjH1G3UAWRy3hPUPhnNgv26JpQYFavoNacM",
  "key27": "4y7qaVLknXSdcnfNU1nuz6CK5nycGNeTgMyQgh4Xx3fVZYoFEXcH3mtj1p6CzSnTri6TpG9FpgfXH3SA3QdqZniu",
  "key28": "QmVb2AYwG1MeeskqsbqbgsuPhuvaUFVkXPXmathXXEuozBYYXREk2mXWvPirsEAFZaPbM8RPVnjvTkGAovjjEwp",
  "key29": "2wGePQkVqDLFNfBW8A9jUCLaLEmLRmtSxpiS4iXpDANEzuScGUBop5qcBoBoihH4F3Fiwcihj7htfVCLZpGhSeJF",
  "key30": "5M79swYdjvqBWcyhZMgWq9o1xZupgwdxt5k8YzHfgBnVe5tMumZf3ukaFQnBmuerDWRgNL8aYGCSvaZyKKYUUjv8",
  "key31": "31wm3WWxXmjqKvP8RhwDXwqRxw9vjZhXqLmpSgzfwX8RTk2u7c1NM6jK8JSpaYSmH9KiscmEfYLBCVjuzYmxKToF",
  "key32": "5tB6LHFWXQ3kxSBBUtwB9wzFYMoxx16ibLQduDJUHBToWgRKsbENATo5j5G5uQ8mQDqFDmkEF3wRDMHUMZfDmxnR",
  "key33": "3AsfyssLLjBJgCRasMUXVvkVbab2E3RvxfuZWRic4AWzt6khmoARHCcUXqQdbb8mPJggkpJEwviv9pcbXHCzZQvU",
  "key34": "25x3NzBPs82L3dtuSyuf2YxZ1hok3NsFdFhCbw6nfS31mBbraNUZX2ci2BCs6ZXVpcUn6yQiCY7hj6xKDjv6xw6k",
  "key35": "55HTZDLRtF76WndTDG5grhmbvAcC5e9PAYjP38JCLULSJ4EskEY1r2QKdStRpuSQbdjh6DFTSsjWbnpJgCLVbtNm",
  "key36": "5oTtY6qy2pK2mjkmyuSPeiKisoK15EgpZw5GzxhoN7VihCzVZXFBbadnhar6A5WH3im2B1tBiZjxTLTZxYS5jsHz",
  "key37": "4WsMx4BSTk7YbpBkvBRfGjZPZueTWEtynErLmKihym34JYS3gUS7PXETPScsQsN88ogZ5xBDByXq1UEakTbkup4v",
  "key38": "4CrcRCtt4VBkvNNAnHnzNhpGJ9XdEz2WeZxx1u1DnPCSA9kd4djTHqpT5cifmzR9uWu47AD2hJn9vEFL12rEv4UK",
  "key39": "3kxQnVHtg3crVEhU2UUwCs6vuoUHDkRzNbRiymy3J3nWRa8XD9BLUZT7rskWSjxqZF5edHuo9c3PfHjfA6D5mhMb",
  "key40": "5kzUgAa7AqLyzq2oMsz5e4Dun4j5dkYmbg5D7eHHMY6t6NRJCxrKtCnKBmpfATBhio8ujocXkPG8oUK4JqMfx57k",
  "key41": "2EHoJ1Z9b2dEbw9L9mNc6WGDTBf2AAVp9VfjF94iP9ndBxUNVMMgKdVS9qMPGca856BeGGach5JoCUvUb4FiFUCg",
  "key42": "4oxFcT5g94mhwDvKxQbtGQ3nbefGgeDHUm7bueopKU2bFL5iKkSdMswypfrR78Jwh2W5N3Qo9U8nqYgHExMLS3dv",
  "key43": "4XKXnJhtz7zoQm9kqfbvBHLoN5ahyJcM6aFmzS5WSgVTa54gZwAkQKeKnaP2d82pXsJJEyFmXBCEg3h6G7qUeUto",
  "key44": "2JK5urTzMGwnt1MniFHtHn9qKdrMpFpvEEKF548GtGDqehTm9bB3gCDLbGuZW2QgvdxR4JSkoDPNVV8tmoa7kYdR",
  "key45": "4zUvaasDZZBH95vuJUTfeS619Xkyx9Ha8tzfT134mqzbAL8jWjvasDphEgxfV7LsgUuiscvtY1LeWWsHSjVXjduR",
  "key46": "2SkrtNBCFD8HiXAQ8kLdVhjRG1x2TX5v9nZx3o9UMgqunEmmRr8qDCPjLM1k92WfYyCoDE1nd9n3kdhuMXYKqW9M",
  "key47": "5RB66m8x8doLDKthYcRjsoqrxezCSP2gecax5FDcgxfzkbfbihCbVTt4JBoUCLvkWNuS9KchAR4SLqruTWGnv6wE"
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
