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
    "J2ik3G3Eh2WEJnW8VownM7UVa44njSAEKBG9aiAQaFSFjmLsDaspphAey35r8ycfuHJiYgbYHLbtTgJ3ukDsPHt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31zY4FCdaXN6UB9T4tHjBThF9574fnn5hG1Lw5yow79y84zB738nx6Rsp8YAG8MNuaXuUiGwnaqh5hCsW7ckobt3",
  "key1": "3j67LmfCxx1RQAqqzJwLwbUXQvj82WcXeqNaARRiGwoDrPhcvA7AkavpqyDQ3stNcKa9sS7dpQXfQQEHTzqJvZpX",
  "key2": "5rxChpbAZwDcAVKq6JAqKH5LGcSmcBRwyNmVAS1CnJcw59wxhjYs6bJvZjcruiBNwViwH5mPjngse8geUXD4y7zK",
  "key3": "3ueEC4WvJzuC5yZDeA6tJWtySK13evQjtJqqHd6pNrnMJ8iN8Jxm81L2K1sM5Wz7VmyoPaKgrU15AL1YA7FfrsC6",
  "key4": "2p5vj12rkvmnny7vcmYkA5z1JpgjYFPmd3oqPZqfkJaanbpcRMmBtNSohd3ddvxhNUHcoY1jhkCzmMyP3E9ym6XN",
  "key5": "2vcmRtksuDW1UXuR2t8kHp7LupK58aEw8eorGSYvSrL1ajqseEkQZXFqEVmPFGAvB8qc7pGixm4tZjfLRs4Jbsm3",
  "key6": "5ZFLTdYUWM9sb1AxRHo93yiyCZkJQmfnfTKYugzxnob1ELhozUHpYfQZvKY49w3V2b1ZN2xLQAXceog2va8qcsP",
  "key7": "ZaEjUjiWoyVZE9Sqt5p18LpSxVfEpNuXEhPbKZVuxvTiqwczY87sjbUAPh3sYw6Sf7PLiDi32JYu5qKCvxFgWzw",
  "key8": "51KrDa1sVFzKbDXHV5ac5SaWWNRTwzuF8G1eGgSXFyXZ9NotdtkcPeFbBKSKhVfMFtxqjG4w2KUU2P4SbkvTKH2h",
  "key9": "ZrjdGywqeU3ANe5HDuPp6JAZ6qpHmxwo63YJ9rjxEY5vzbvnMXLmVkSo1ws3GMUGqGTm9QM2N6o6DEWa4qvo6Eo",
  "key10": "2AcPYLUU2VcbA5VbN4oEoRMFAZYETRoKSEFkHCafHEE1saMbT2h3fwLU6UPACR8i1NFGQNdsDjpu4RpSG7YHC7PG",
  "key11": "2s7CYY5cV3EkrZcUcSbxfZKKq8UozsYg3WLR9f4hSathG5L2XGs9gADSFCD2ah68nou5jmZJE4RAEuMwcMHSq3CT",
  "key12": "3wZ12bJDVndF5mryhZcBNG2Qj2geeav3naf6riKZCkUUXw8Pf2JWaE1YpLT69zWX6T3cxdUxUDn8CV8y6q4U3qQZ",
  "key13": "2D7tRLtm4P7KPkdFBYqVnH9U7nkeHcEboAcfjodGDgPipsSKMJ4YphMWXpQKZSDxLMJm1fLeFQEzpQtNgTAePJok",
  "key14": "WyDnRSRW36JJ9Ytobt489PDCBtzwjyNa4gn9PpDeFaicUyWu4Xed2e7mC7NmfvLQPTX1mn7aBHif8dJfow7Vdd4",
  "key15": "4KcXVJqV5Qb3pBTKXcEUMvs24CBJ3SpJW8mhUFNTYSX1tJubEKcaCeBtLHk9d4BySfrqB3EurnrgnvR8TEMDHeTe",
  "key16": "5zXEpK8bCDDkcQLuED7UtbnKPKYXNgPRS73rXVMNCUJhbYmJFfEVmajzoYQT8mLfkpRRQGL347Rr6sTdsj6Yo6iZ",
  "key17": "2MNq7DUVbppdr1yzitf9vWRozk7iS2RuceMDAbJLBQLdP13vEDgtpqib4CWPgjeFiWAr76SpKf1kn2nM7h83p2ca",
  "key18": "5h15L1PUR5PDHUNo2HacQqNCDCZbAFsnJHzKyyLUkzgPE1KhzfRt9dL6VkEcNiTKGR42YAzCVud5Xf1AVSKC3dEe",
  "key19": "485hR1vSXsJ4Tmg59fL1TC8VEDTaYys8M5TAvH3KiWRKSaDRRRXNZWXNr2b8Vti6QpBcLtLitWR8CDh641TE39p",
  "key20": "45CztR1bTrR6d732jx78xbkVAtiATphsprRmziBoGzYcrN4f5RaCrT2aX464RhqD8UYt9aabczuFEwo1Wco4FELP",
  "key21": "2GnafKaaTCrGHSXJVobmFWuwpP9DRSrEfGzKmw564Aj9QyDV7BpHKoRabSKu9d3qDNFMurSvZ9o5zAvdyfiKwWZT",
  "key22": "4g5bE9rmAjm7BKynRxhscVLDV2HkB9SFcA71PxmBGPGepztSeY2MVRrAyenoBexsWW2AAVvy98NZAhZmNSEiRWeq",
  "key23": "3ajiN5xReFptW9c7iTBXshvAJfKTPWRrSU3uwd5M3wR6uY66P4H7ZnA9ZPCBrGEJq1ntPczrh4wp5oA1rqfpauLj",
  "key24": "3uniCvqFha7ze6ztvmf6nN1iwdb7sdikdL5VtEq9ncSgS7LRyjScp1kjVwdRMVkXT3iKevbJ4y8VVfAfYFUnRfix",
  "key25": "2gcZ8jLP273w8pVGno4fdpPrjLM9fFLL6FWFsYgHHGc1u9vSP8Zuk2wLiEhHHXzFdSa4GPwVuxaUHXFJmfLhzg8X",
  "key26": "59dPTpM2wjdTCZhu9SgqrbVkGwkgeR4WBDh7A6K1gW6sBtEvnrgAijShDJCYNwmmN1Ed78GTnmghzG27rp1huooa",
  "key27": "Yv12de1TqaG6mgPyTEYXHDpPiVZVQQRAT5XkWvCf9Gad2dSJG53G8Vi2D3YkkBi9z8h9FK5uzDUTByHertQLkst",
  "key28": "3w6mDmCyvwWKotSnJZvH3jCgckCCKfWqytSjw6wod3PsgUZwFs7eC5i37AgDzYkFXiuCSAPBQHhk2PUjUPWBGFkV",
  "key29": "522gK7jLcXmMt9nSKVnTKTw7xzuiztmEf3e1VYzsXmVTZZtzF3C5R493g6dh7FFWRA1PiHYDFoJqNvdmDXXpfoYd",
  "key30": "4DjgNVAidrUZDUuwCLu5JLW9RLjUP1X594PiuTHygSNcYeB9Vn7ufmd8mhNP2a3rWj3jMYbngTHgLMZeA86tyT8J",
  "key31": "53JRxfdNWjAS8gFvVF45jiFzavqDEZ4NyxcAWhCHaHcyKamLtkKCenGuyz5JzRP89BPSQhXv2pNjErUXPV94mwuK"
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
