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
    "2VoYTFABVZYeuMXU9Urk7pxg1XGYZ7BEkMDSaURG5s9Lhiat2RKw85F3i4FwM68RpuNUxfuphPzko1wMRCsR1FbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rj7ir1yPEc4uBmD3CjKhbjc2sRuxBMDEGfC4auYvBkc42X3noYmqmKbcB2AdRtS2dywywhQ5qkRb4vtntyBPSj1",
  "key1": "5K6XtAv3VFWptvTfxgn9vq5Jw8MMb1EYEs4PCzHQhXSKi1GPwR4eV8NDw84665cLrH7XuYBwtSGuPRKJY8cdApiT",
  "key2": "2kDu32nQRHYGF5XpT9E9Q139jN2Q4LDeYJrAtA2UWL22C2uJG6h8NecDbyLJtnKv7BbkwFmhMFcJcToHFacJgBmG",
  "key3": "32YDBtK6PxjxbNu8R8C1JDTZMGpe2Cpgd77ByBvcefuUPBMQnrgzpKxmrWwZXVw2jY12ADoFGZgdDKge75ToMqgK",
  "key4": "44MtaPusKJr1GuLZSsj9Ay8XTncPHaeR75WbxRjNK4FVmkvurerKDNbtEQUSd7ZFQmXSgU4EaHYerLFiKYsEUsWQ",
  "key5": "3r5Zh4paZaZyv2gYgBEx87pQKnZNpnCLHej9rfTx5BFNdNSkVBGCqdjuZkmFNPP2PB1tSxdU4ePQvBYYkrwm5sTa",
  "key6": "oCvdhuLquDFBh6oXBxYCagS3nif1aBUNDm82mwDvatJQZYsvLDqh9ay5meDiq7JY3fvePSajyfeWUvrG862a3p2",
  "key7": "4JcVUpZyDhW2V3u1ZPXiuc4881HHDomR6bdPv3ivyJ4HyqKxbkcXuEaa2h9YVo1vQjrXsd9hQb1KE1nv6bcnWrg6",
  "key8": "2EZkGmnMp56uoS2XdjBCJXt8apJvPajenm5juHqfGEe1JhsyRGZWuEwFwor7NH8iyZMNUDyUQnP4LF3DAvgs8niv",
  "key9": "5CXMkRZtj1BP6opTaws1ncEQChFEEbemg9YbcAU9TMtMTYK8sg2YsxBX8tNH5qvVGptXqjGE8NBm4y3Twu9W1WTJ",
  "key10": "R9oXmXZZFX84AF7vcxyxPLhDf8ggXGA8Goqavag9ha6h5Mts8C3jzTNoqont1B5MYJra8fr6AEdPsCWFUbgwb2Y",
  "key11": "5gUaKccCFguC27V1axUYKBgxZJHhtxvhXNDVDnF9geamrZ8PhJgh1xs5kF5mWKKHQU39p9E7J2AAAZLZuUdyjuJt",
  "key12": "MYR1B6158merzEc8Z63X4f69dkkP4v3R6aRvqDs6BPNjmJHRAd68RWsUAwuPbBZ4wkiydbDK9Ay4ALAbL5C6vXe",
  "key13": "22h9kHfXoLFmnWjhJVU13PMTE17pAxDRixV4Z7xCaXfAPzmBFr4RqP9AyAu2g2kw4WpukZUk2TUTycjiboom1BgX",
  "key14": "mvnxhbQ5kUpZLnvrzCJLpUfNBegTdtiS4LBweprh8b7axcuAaztBxmRnQ7mMmwho2DAnTgK48un7PStNgALrRRn",
  "key15": "2yQYzsY8j4vnMx8BA5GyFpM2LTe8CrrU4RqtTYNJ1E4MwD4c5rS8DjpqS5qtd8T16UNATfzkLMmEQnBm9nZjewZQ",
  "key16": "4wahTu5ENvHKE5sJ8FfHSQ1RjdJRduFrGzkWsGSbxLo97xsJJj1pfTh9Ag2eGGv2AfeDam1MugPNUjJuqy4X5Qco",
  "key17": "E5Hzbwd3YD3E7y9H3yPixE1i2xKQdJrQWmvwAf2iHzupqxuZHXMtUH7gfTsMUq8kBipUjmFy8cQFctJZrHTBbFN",
  "key18": "4FY2P2J1Mnb96Ef25pxN687ZcgMoiNCQQJnoaUqQQ1nDfKR3CGqkkkA26AoBQR3urvXFqoGVZVzAoLzb8LKZRMRH",
  "key19": "4ABr8rn61CpeGXmpKWUHUVywZ63sCGEyp3y97mZKmY8aAikP9TP4irn9xQdsWsenfXd4WnhYJ4kBiumrre6RZSgT",
  "key20": "2G9jy9hQ412AMFjv7zqCJaxqCzUz9QKTT4GS1vMeR2EvMr4WDn82RuZwswHU7eDgJiwuRTPWNxrwUDstpksofamr",
  "key21": "29NvEA5wRnAis9B9LkC7dMrbzvDNV3KufSztDAmNsofRuLrHNVY7suX9p2LLoyaUF62Rb6wvJoeEA3EBfYZ6YFkc",
  "key22": "2hBAgsJA8CY3b9PUBwC3B1KZ9hsRqTjPYPAAMaNvhufYAFpBgpxVb6XC9rAgnz1dH5t74giNJ9s4ptprwUTizbho",
  "key23": "NLD33ZELayvoZeQNPZia9L56R1LythoqQaw8AZ3pfxEjUGp283Wx3giLta7dwoZFSSe1xNcxsZz8E7ysahBKskM",
  "key24": "5RpSmpTzozAoCU5mMkAV8dK7kP8Fz99D8uTRUWNYmwca5CVQCdJkLW2F7S8oY8TtgznHFUV4avRbtvsZ1LaGvpTw",
  "key25": "2akRbb4P3vHZQiGo9wmx5kwYQfKSTbzXMUmuPyuPUSCPpWT3PrsHdzwLBzm3Tp3buozKhhvTr6QqewPWkKFG36FR",
  "key26": "3nkCjiLLuB6Xi5xX1BH69xPjrKrzxj638eNJoQAJRCo1ECfwMgVhDhehzB5SSSEWtpYoVKR7Nc2uB66fwMS3uNGS",
  "key27": "22TQ2oqFVpG5oTpZTwDNzZF7y9EYjtFFbUvJMSvHdatLrhWXF5tDA7nh2JcgiAJW4CGiLKvYz19tCHEPbNNumVT3",
  "key28": "37h7vcuGfmWAfT1CjkSVZni3S9iUKtmjTiYrFtUxtMoD82D1zJ33fukmfryi6ezFC7DdCWtSZqymxuaQAneeF17z",
  "key29": "5cMGH3rMaU3MLuGNEFrsgDsH3rmKcrr7ikLDknhnbH2vyVG4DyQmaLq5fhYYaLnGvUkAcrSGTEZ4um8tVVDZdvkE",
  "key30": "2z663bvjrXEtY8ewXzjpFPQGwHRHj3qugwTz2YQZXL9fPVgCXpvvnVZri7zxVrKu2az7BoePYnTnDcV17iCPRCGW",
  "key31": "UxQhWyAdnijM6KHsDfo1QLcVbyvLhYS39dL5Jrf9i47QetRFMqfHArVbygm7jyvvGH1fcqMNzxGAUrCQhiKtEQ1",
  "key32": "4GfRS56a5caXx4ARWNFYGPDKYMtsSmRFScGKPhnxrgHUvbmtE5mgnKiaTa6uTTgDun1AS3mpAqxoStzTVKEWhdLd",
  "key33": "4RdbwE2t2odtRCk6cdGdn1mGBWcBtrCtXKey1cywwYPmniMfnSkqqRCU3CcH6nDoyFRtLiN42e6rieKz24JMeT6M",
  "key34": "5qxaWk83bbncR4eijCod3bekwkB6Hxc2djDEu75tp4i8yMTDBGGc8q1vD9XUDFwiMqkNMoRDmPouKz2zNbMFhHVc",
  "key35": "GkzhhASQpASnYx6fmJLmxGnKRwCUVNAm7uQk4hQ7EoR3yPAVdmZQGVFqHW7j5GAK5jbi8eyL1UwqEqYLvC65ps1",
  "key36": "5Ycwufoh3JTsD1iBXo3XGxruL7mVo2YAUf7ZeRsTSJBJwvXSdT3ZHSshw6YKRMbqB78oTLEMZMcBndYvGDR8GE78",
  "key37": "22tr7Kq1MDT3wsZPKY7DSMVkaRtfJ7z8zK4gT4LvEC4b8gCs9TnyKTyRTH1ZLFFwhFESjraX1RwdTXWTovYdFKSi",
  "key38": "3o3ne6g9bkzVSaiR8AHFcrbFexGTf83HhVQC8axvrKRqQiJWUdzevdwxLF4pWqYnrdzQgqRsKRcDq7uAg2kavP2o"
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
