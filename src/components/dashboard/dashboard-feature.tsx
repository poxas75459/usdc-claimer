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
    "5wppQRm7N5PD1P4NzrSGTbj4wWtEEewsLpR69ZAqAKJkP8VkaxcCRzFVnov1ty5AbTazmAUX8uhuGTNVqYLbmucr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KmzXsLNjop7GxqcMR1gQsrUutd88H3PHAzrvg3Cw9U5MyXTqb5tX86QtdnuE3KWNT7k6aEUpG3cWt1K2ywiy6p4",
  "key1": "3TxzJ7NsPXT7epfGffSKFFUo7HE4TSUw9wP5MpAqXep1svhQQ95uKVk7UDwsxu7qAR4uonDxcn1f7WdfStDaku2X",
  "key2": "56RRj6S9w7HtVeFwr83MFYBmRMBfvFtTcg7DvctfjeCqCysjfgMym2eS9QRex7E99ZETXNgaPdVRh67XEw85mZnQ",
  "key3": "5d6d8vCoveobdpCwSiyAseaxFHjthTNa3oHhAxWLWEZiJt2L2XGQeV4gmyjUh9eFrnnTkvsuBJNgASi4PFQX59wa",
  "key4": "25oo6zsvPmGEM3v3GumLuewZmgTdbrdwnU1jWeFzJJMFMXjmQLEmVTTCWLokjrVevppt5W1RjcUuqU5aAW4xzbuL",
  "key5": "5W3i7tRuazG5VMw6P8nSrP25b6W6xNQfz2nQiDeyiV2rAs5LGFLGtgoAa4uvSrHgBSVhqoxbJ7E3ehHymkjShqYE",
  "key6": "2fpreitVXnHJMccfCEcxKheeXJ64AreRMStoaocmawTM2Juj9KoobyXzMo1RgnzqMj8J46SugaVMydrMyQrTWPKz",
  "key7": "3yyNKjf1oBvzTFgFZemUysSot4zRFwCEyBzWPp3nRXSkc9CSGZ2GX17Ggtmg2eXoRqyZ4DkWm5bsUESFk5XqjY62",
  "key8": "VhvBfYhT3wG9KLK2VvV91t43Gs54xY7tF8SrFLgLBRbwPRiQHC4T3oe6cWuLGVWdbpxq89FdFtdktZGPSATVStd",
  "key9": "56UufiJ3pbagLi57zwg8rfv4imVANB6ycTwKzuJTyqWBXrXEQScQqzdbq7RreRuZcfWpsmqfdaKj7XzXbZMXNCTZ",
  "key10": "3hTeh3Nq6iJpTJxxVGDgbMxAb4SwJAKvtW3826HsfafC3q7JT5mpEmTAsMef5QAm26Cg3vAVAh5oWMg4QEfQe9N1",
  "key11": "8bhkhmBDTmnFx5pbMenTBXyRBg57R5yC9FRPFDEq8ipQr3zN32MKsxjJEk9nELNzCwv2dhsfjkTFenhaVVDyGvr",
  "key12": "NdS6yUmG3JsjXHRapoGKHKKGpsD578y99xRQJEGE1uwLuDBn18PYwn8haPxZSoyat28hGVRs83Q1vTY7CJWcfuL",
  "key13": "2b9i4WB8P1J5xp2ntyknG9XVWBjbTSSv5vgsvDZNmHVTVsLUkKhNraVWi9j1Ar3Jm3UA8U5VU6H4q3cuMWLgchpn",
  "key14": "43AA9B4LwKSpSgD2YTog83AzjJC9WK17xFZnssUzLh6Gfxx6kuZNL145HHo2pBeiZ6h5bN4UkNRKJT36tijPe548",
  "key15": "3VMujMQaJRi7p2uSGndmDi1dnc4t1TgbSeH9eVwVJuhuSrncvRg5VtcUBG6KKsyDcUDYEGDCUEUgJ3ZDAMV74dkD",
  "key16": "4mKNqK8DoUZxHxGCUctwuZA8EarJC5SHRvY8FLKMS18HeGVWnwm9eHNi4FCm6N4geKwiheqhh7qhhqeDFiNQLgNw",
  "key17": "5eTNKVVwpPeGvbKp84ANGemEPZsXJeEYL3dQDXQkCdTCpYUQt3NzDsc7uQJ45PyEQ71GtQJVmTx12JThfy4ZSKC4",
  "key18": "5wzvmDqv9DZ55Y7RF1Fsv8bkmq2QbPveVtytPEbuvHBoB3KLiHdqZa7zhkPZu8UT7mJ7i2QBmvyUzUKBHYnkYc3E",
  "key19": "vPyARUC1vSeEe9WdCY2oWbbt3Lzz2jDs1F3v6xMJ8osfpp8DNBVRNMKSC8Ao8XdBGFB5PqJ5qdtfnAeqCtw9MUY",
  "key20": "5em4yqyxL3KEdDpSx71ftZzunPPUKtwPpzsKBn5z8gbmEJzvhQj18oefS87zEKwZaixhZsN9Zsy4Z23j7WM6Nn5Y",
  "key21": "9QPnvvA9v4TwvP8oyL3tczu1285S3dLQpN5oT7z4hMhm2JFb6xdzZoTRJYR4RkmB3w3ZqvwL5YNuM24vdLs6E8r",
  "key22": "26J8KRQLdY81vK17HLzLs17XAU7zQMVSGSuREZxatgEuomQ8BfSB7d1JU9dk4ndoWqZgcmCirmdu6SvgvWtKgt56",
  "key23": "mcixBm5rDntzwojvx52G5dj1a2xUY2UexMSqPeoazucb4DZP4fqRC5G9BqeXg1oqF6gzRQPGtRnGX77qCaLo6gE",
  "key24": "MY3WjvnYNWiHiFaT2WX8bp6Ysw4gqdcarL37swRqa6nyo2rGxTALXSnDuF2HHyE4rDF7Kaetw3TrzL5B37tbmXQ",
  "key25": "4UrdqqPwKVHXsnUyBRAVXv9T8qgH7SgJQSoJgvvdNxHPP6Q4Bz56KzbJH4v67Kzpp5r42MiaY1xbwGzz9AriEZFP",
  "key26": "2AVthTS9hyf3V2gL83atgP1XCmzfb99cHtj7T6oe1St9CRwFF2ZbSJyRvWCCDJeLhJrZ7aCeuKu71vprWugEijcj",
  "key27": "2XLreXgmxTVXh3bkrJc5HpKpJhFHbQHK6dtCjxpX6DWB2KGc4mFuMsZLs6CHaiAdp75TDWHGXAj6JFxp7eaTkfkj",
  "key28": "a2NiWUzwstwatYswcPG4N2N4Yqeg7yrTXQVnHxaJxKnWALMQTYmCRRfqFi1zokCsZCRLmRBTp7wzNYyHekEUPLh",
  "key29": "2GQiGcTrBotF3dczwejPGXEPkLtfXinEZJd2tSnAksLR5sKZByL5jxi92erc7ViKER7ecs7Tygo9EX6F16xzkj62",
  "key30": "SU66we48HW26NSoDnB4yZ4GEnNhZpYHwPgs1KNYzcynsCDwWdmatScNLCbcjKYrpFHKEhg2rr94HAnc22j1Whdc",
  "key31": "LuFQBT4DSk7w6WetgtMH6FsHmezCw2K4osZc96mvxFSV9BihQmzawVvMuz9BsCugwwQmm9qDLeZ1xLCMr4sy4Pq",
  "key32": "2yFFngVEiPwT1MXmDDBbZqDGNoHdotbrKSVgAyw8CSPj4GGAeaVLKiLj3NFAAodvsfBbZQYNwtyqqVLuk69D9SPo",
  "key33": "ckZf9qMx5wD3TSu28EgNdym5hfP1qSJjZVRFfyzXVRfJ9amtX8LYtLGwmmsqgyDfxK46TtP5Hudb928cT5Gp9KJ",
  "key34": "HQZpn1D1Ecz9mWKTTVFVboC73GVHBnGdAh32EWuUvWF5YzQD71UURgj12M95Vd5f5pPzQDbUWDXZ676TBcL3VmL",
  "key35": "5U3jMNbvFad4H9ce9SKDRTpsdjrdkdb4xZosp7tzayw51NkiQj3WFMrhUSiL2LDWmVx7A1eEy56UVP638HY1Zyme",
  "key36": "4ivFmXfvQK5kvNjAojcVbtCiS75WadxLsDAnwD9uKfnHWMTorpThrAYTr3oop4Q41Tku96ySMUtzrm4LsqxWHkEC",
  "key37": "4xhxghxYcscnpTDmVYudXspTCFpTFsVbKQLiTGKFjfwGynE4WYyQQEE6horikxeEriMhQy8gBidLaHtXfWiiQSJe",
  "key38": "SUErNH89zsz2GqDebA5ArCH4WEPAbqMZnzw6UMr3Lo3FmDkEK4j7hgZ1NKssdFDtrHA4GmtZpURjYRAxGdkcydd",
  "key39": "42nxisQN5epgFvFDyedNTwr9r6bFNvo1UDDnX3KPTc6pviz1gWoFeacSSejG6ccKnRcV7UKUKmDNG2JG74sd98Lv",
  "key40": "6zYLdf2uYczYdCRXBjif6x27Hz877hi4AvEfEhYeSHScNodqew25rTVE828eZCTQxmgYwTE2PpZsyjvdyRTCdYw",
  "key41": "2ZMcD7fVf5M1MreNMHNYtWPH8DP5dGpgvGCfdJnvWHSTWBAGAKw4gsBhVTKfNWuoAHEhgTZJijCA3V8ubhw8FJbA",
  "key42": "49BrnBiv7jjFh9abGx3X5tJhCh6hMMCeDziLbf4BYU5sbu6Hsa2ARQKPACe1158ozXLmNCnczcTvuMfUWQkKBfQy",
  "key43": "635EoAa7czkXSAUwLju41Jux8FtkoFLXPfAr6JREBLYur1hJQwhewbHtTn2VQg6nXrcqr7w7VoBiVEq4MDk96sHE",
  "key44": "2Lpqs1hiGV1RXBRv6UCi1HBtfKK5vhfcyU1ZxZACgWfSxh7atCyYc9XrxkbQmJ1YTLLd3cjq64Ex5pAkG9BoQnF4",
  "key45": "2Y6W8mgPFzTgSwR3bEqdqS7h17wRKToM9crKnmdhLBH6GLLCPYzrdhgP3TfCqAkLcAtbGiqBHp5M2Jpn6JBYacJJ",
  "key46": "37sWsmnPUrgzCawnKDHa1bJ3oRMvnbFzzsoeSoJzUDC3rKjVq1Qnecd1BxxJpxJ32sDfH3DnDg5da5FcLiDUYfaq",
  "key47": "5MbxvTRZiJE84rxwK6euZYPz4vKTafy6k3wLsd73yewHSwrw2ByBrQrhNppBm5fz7FTbrLqbu6eocwLfKBnCwXdc",
  "key48": "4p6EHQ6YTR6EGSUSFmyPR3FoWmkaQYAie9u5r7Hj8kXC8p5oDoxy5eHDYL8SonZHNqHWRPStwZ5kv61HRJEEUoYp",
  "key49": "2gaV65EqY8rv2CRXRYJvxrCNEHSCyHN6Vajm2VjWEfxKmeBPb2rCuzQhUhAZV6Wgv2LfsmxmA48VntkJziVymV7L"
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
