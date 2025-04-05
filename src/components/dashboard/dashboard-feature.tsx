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
    "3fceVrfQCF8Z8YCstzUt5mR8mvmpFDFg8hnT9DB5NrF2F1cJntDvRamo16cBThF6n9CHZxKshMwwKyzKy7pkdtJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbUFRzcsNEmKQqe2DHAQfeEPnmYBtGNBQfaTQ9Ru2hXSMFSB4WrCVuHrmo4hyKacApg54AtUscncgLj86QALgc8",
  "key1": "5bJNaC7781kZGTzv3uAMTQyzy9njFEL4EDTC5v4fAoZ9UBzRvqjsHitujg1gwzvtBtBtBwRtXZ9c27PCFKUaWG4t",
  "key2": "3MYLk3FuNLv2ktuoixz2Nw2WmJAEewL4pwFbqruZLbXw7jd9FWuogZC2KXAWd9rmi36CjvnWyg93Maw48ePhMS6Y",
  "key3": "4ec4L6Vin6VUkH79MdC1dAxmt1epeTZvXpv8Gyb2KnAZMUG6HhNbzSoXuzAWQFaFjUN5aznek4MvYrgFnyPByhe7",
  "key4": "452mvhaHpXdxHUqPYy1jiXU5iTARvBEzFREhHGKhK1GXghxMFoT967nrCp5TEjxchvpTrmKf9sfucZQFskYunxH1",
  "key5": "5DPoCL6QQUgXT2Wm3eDLEpJqQWDJGgRTf4qyBN9TwZjNA88FNL1X64TGDkR11gSsdnRDTw99q78AWKSXPRpw6fTL",
  "key6": "mUU24r4Qk1WGpnrMYmzB2EDmLeGkW3sqjcm56U1Uu4nfQpRNANpAoenisXEqCCz8wpSz6iVPc8pDUR2t93SvSZ5",
  "key7": "EzYAaTQdiURnzfTHFqi5roSyrKPbugHwE646faudstNzepVRvzDyYXxyS2Et78F6Ee55tqkGYPttYGFGdD7T3yf",
  "key8": "5FT7pcKt3uLWVrLKQtgug4JyzJntXVCachxZpnPouTxMq1x72dDcoB9U8NJjG2wPUmbcvfSrqmsSFX4icwBGEvJ1",
  "key9": "5kAepKLoDb76zuQzB62A4mfjH4zrwcRYjZZAE1dAY48dJcfdeNqpKrsAHsp3k4odQJHkuL9LhUfnSz5KNcz4SZQ1",
  "key10": "5WAijfNhQrftZtFkcM966KgU1GDcpZNjiLgsm4UVnUYf3AVfxHPjtJi21WHjr2dTVZfK6eQaMN1D4j9DNnnrJEVN",
  "key11": "33hjMC9wfQYoD1k1fgpGDxGUtKpePGi4Rrsv2rAAzx4c3ZmMfikVJERbx9nJyjbp2y7YEXSQkf16gT7kwksZZJ8V",
  "key12": "54QooDcDBQyCB7k6in5wHtrTYPx3JoFYvuU1PbjZgJM7mWo4tBDmYAbebcMnV57kfwMPhwcLsSosCAXENmuhRXSG",
  "key13": "dJ3d35RuQ9QxkKkaqQjqagqd51Qd8d2X7qz4G8iLY1Q4rS3uhFhRzSyRBwEKgFPCTseeiReG8vfDM1nurxMD1f6",
  "key14": "4srCLxZk7keyf53ENpmCPaLWRnvv5WwdSyxvQ8XyR23Y4ShDMcNfqzhjNkdTVm4k45D9PEHndBJqXy72mAM6Vdn6",
  "key15": "5CVULm5a5CztEwVkFRVwS3hUBELPLw1dRE1KkrPyGEkUp8QEFH6x4NaxDh5QUL2v1HGyjBCPE2JdSJixwL5jUsgD",
  "key16": "53hAFRti5hGKyxR8FzZg9DqRX5bgUFthpsSeg2R937tCEjkhdX9XceifF4z1yFiYcivwqSPuCYTWVhFkZpY4br7u",
  "key17": "227wGnAb46zij3bkoXymTaTPk1TyLcf3EEZiGJDMPBF1Afzko8r9WzVdPRBqnM3RT3AJszXPW52mzY5b1bNzQCLB",
  "key18": "2r5jG5EtLG7e123qAbncGter4hBh2CajvbGW8DwfdGaRW1scSUMktp9HWknqtCTxYXNJbt9eWkzTtu9sUk9E69m2",
  "key19": "5qbBFvNwSjRfgquRtpyd4F7ufU33A1pWMoNiaXc2n2dPJhJvW1Qr5gBrFcKCxaJo4phqb32keAVXt3sYcRVbS2tH",
  "key20": "2Kg6MoLKWxGSD9k7dwq9isPZ5iaf3Pq1JdXj1BV69SruYxsTTQhptrhGpsJntP67L1ts71SVTRQThyYnYHU5GKRb",
  "key21": "2gzijzVx2JiiriDr2yijSog1NcXFZdWxMzjBGmi6HcKzkwrBckWoVyz9DAtf3rUSNEpwyXyJv4HpAMSY2EttkWmU",
  "key22": "46N7Wyr8V1Xy8yJ44MEH24yvueybEyEv4R8ncEhBTzntj8iZSfnJ9C8EzeUZMTVf8DyfSu1TJQDac16RMqXg3QEy",
  "key23": "kkjd71gwaGs4qbsMqFGyAWQcVnnmcKwovSmBJ2cVxe2LpLNm6MhS5Lff7yguKjR7CG635zmXuE49VLrP2jFdmdK",
  "key24": "4pTih5fx8UD8xRHazGRCV2NB3at2M213kuciAf7hhLtzGmzp6Ns5P5jwBuWBk9WCVQujWYgZUS96L8x2z6gaYs7z",
  "key25": "2o3inpdT3cL5MXjekJsgqS4SJ4qFNadERBofuWPrSFFdvJ5KEQCRwatDxio1YmKh9LPCnD574RJXXnB2gf2vrWHy",
  "key26": "2soYfqwKT7vtWiY9p8RijiftY2vpASJzWjA3EMuMdaUnqR9wUS5JSJHrmpjk6TN2mm8nnLkwheLgT7zDZXcB11R6",
  "key27": "CWue1PsA8wmXscWJBKaHytAh6VGGJvMN3WaBTU43jFVnR4TqLKXaxkKoeDXV5sLWAWYYY8mRmn7W6YirhSn3UrS",
  "key28": "28xz8vAwTovEePEpEJ9RDPWfAKowwYVM94qNS749eMRucQ1xPrXbbUeMj67CwCdia3V7ngtwF2FJcxKmdrCbXt5R",
  "key29": "AFf5mrwvzuMxeZxzdK4wnd3rtPQ8G6T6zpjsUhk4BcYk1xMxgorSWT3BSbjycWhHbb9QJ3rSnNW8zAyXLG9mG8e",
  "key30": "3T6efRHLTVQHmXFdRHy2DjdoWynCbRPAeeGS37cZiTtyfhnL128Asx4m3vPKf2MiZeJGgHLSNn2MhJPKWyU2UGCX",
  "key31": "5CccYAoVnJpBiZcB6rdJ1uwWGnYLSZvsHFXbmP2Cui8KDFfKmyzuFgn1yhYg1faoXuFyu6BdKZrNxbPcqfCoFvWg",
  "key32": "4dTJTtZEKb5mzBiuWP28xPPEzxHW8bHQ7T5NB6Zthti35nk5N7p8sZ3R9d8MoGDUTuyN7ExFnhfqkqWsiP94yPm4",
  "key33": "2aLSdejN5NTSgZR3hLEEbxr2r8hdRVfT6ghjibjSbph2ALtuiQasvQDvaUjjwVDFvGMcjHEPUqmjky2TCDg5QyLH",
  "key34": "4CFHt3cffMmnmzkEPDo553EF7jR2hXJA7jX5dmZHAr4VksJ6ysBW4cazaG66SFNRzdyXU6Tv7xHEg4Zsu6GgZ4Px",
  "key35": "2CWdjt6XTTx7ub7LZJPwao6MeAzd7xgJNqjE2y8ksrbrHJFYDQGrUjy3CLV2U1v9Cgu88pNC1nm5itTTUMBKZfSb",
  "key36": "66KczfrdxDSjn8oVegAT7DqBHccCSj9HGowHKu6Pjw9Uu1sTE91hKYBmdTZu58goyrz5WfcSP8h8yzjoyuCM2zdm",
  "key37": "46sAGmFHdTBaW2d2wZJ7eiHNcJbqWTXAGHxstCVptUPfNqzhtWL5EQz1YUvUmmXf4jAMiGzm3n3DbfjPLMV79ALV",
  "key38": "37d49LXK8YpWvad6fZh6xr4LCS6XDuPn2V6EuxnaVMQvjfzaEaG2WAHn1DNKGDCxMHB1DxL3rwdsx5xog2y9vVND"
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
