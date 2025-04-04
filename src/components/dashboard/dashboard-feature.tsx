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
    "2t3WHP1SceG2RCjcwSoB1QuAKxFJtTkUzTw2PCyrtQJUiCrERz8D4fgWmmpM2JZxMGbVicfi7nupEvUZGUweLjQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ek434ECjxMRFCQ4mAYNeWXfBH1Z5pskWAFowH3PLmprAJxfGDgWNJrwgrFCmG43tqaNqWCsHcixtun95g5KGpSw",
  "key1": "YWJ3e5q3PzyM64t696q6xKJKmCULJKskUS15FDkFbWnHrGUkmt1Q9bV6Kde2pV3N5LVVV2gxyWAGkJEM588JgCC",
  "key2": "3pUZXPtP7CPuathPyQFyuMDdvx55p1rvY5Fbv62avJNXPScR2PCV4QY7Tn2tgAMaQXnnAhiY3fLN761Qt1cmy9xy",
  "key3": "4Xrwv2CCXAJNMohpiNQWpQzdzAdx2AygZq9QP3UzN1HHBy8QK2SEK5VmU6HmmgGGrkCkZEoYDyV3RgE1wKwyuWEq",
  "key4": "53bybNr6oUvqinNmXdmSZTodqufxn1iXyTXRVyaCVPJbVqWqsQA2x7gRVqdVA4GW8eZ5JkktpVZzZC8Ex1F1J1qm",
  "key5": "29u9wsLcKo3euR5Qv9tE3rTkr4iCE6vDhvaDL3CipubukrjffFRhmjhZ4s9VzpgD5kx9JWqQh1Ac4Au9TVNZknTh",
  "key6": "2t1hcPzqyXjF23AffuTeo7Ewfo4hPiqiboBrs3wCqcFhcGUN1BPSddBNk3Foi8XTHqAUUc6R1JyJY86ZmVX2NTiT",
  "key7": "4EphRqTrBoY63JSgc4oZg7HorBDpxsKo78q9x7X7MRCjqrwmvgA4tgYgYnEhc4W5UdeZUsSQrVgwxZKRaYkGrZH3",
  "key8": "3dgrBe1Kup5dzfyXNY8BpnKYonV4b5xvAnFResB7pNUASjyy6m1wSWqfcMEmcckGCH1LaKFWiF5yueLmswhq3yf1",
  "key9": "xcm5SEuwfCC9SoMsLTpVTMYaheGEoMaoB96JEtzpNVTGMhFunufcZeJGtJ1EDzJyumiiuTq5S8rohyBgezLHcrs",
  "key10": "3SRgDhg6sbL4Yyih8wVv1c8dgSdCQ3MuvxVYPPADYBoEKSskYbS2F8j5S8SpFuPCX2x9ALvEmrppKofYP5JjKBoM",
  "key11": "4D4Xh1veD5WEcn5t1C5LNHsdG19j49sD9n3VYERNCRo4jMxvGbXd83o74FgaEMQRtz2fktrmxyYqwgPMBXLTw7kF",
  "key12": "3sbcYFdTdFXi2iGKzfJURGjtMsH6NgvtQ6UQGj9WUFcxXfWb2S6v8S9mDRdhXLt7ZJXKCP9KT9RYmnWaq1j1EtYj",
  "key13": "35x4SPCFWMUY9g25wgLeLbGCDwQT7mXLNjMWcRxoGrDEQvNe6pPZz2cBanmnV7EQJ1GBYWJZb3MVc7rsUXNRgToh",
  "key14": "26h8HhD5gMUyX8XENveXGkEb5LnN13DXCgrvw6QeQ7ep5Vw7DKKPerFEeQ1wJGR6gTMTrUBtFC2GEWsC8Vone1sJ",
  "key15": "4yzuKaU5PxFyXSJzZ82nWhP33pQ48EyDyw8BgZ1ZrxYfj7dXBK8GKQ8QYjyGb5AeW8t9cAQQZXNU6LEaDLmjnTdh",
  "key16": "3VX8VAuKkjxWj9PoxLHkq9mhuUZXvtjJ8qN6e9oHnwBjJAzm1EUwTzdjVisYCd2smkwVh11kkGjFDPTdmNocrZ3W",
  "key17": "5FwhhzKsfu8uxfmbanhG5ekCQ7MwqUZNHgsr2NjT8hbLkary1icpw4oRUcptb2uWhayeHVNAbcPmF7oxKM3XiQ6W",
  "key18": "53XBjghReRciyUyCgapUrnTZkYQuf88Nkbapp6sHiugJeQ6o7myVRvhzz9asrRGwLW5YZk1cbMm9tYQXMWyn9fpt",
  "key19": "4aHFtSBKcLAv75zZdcKWcamvy8iFJby88TdJi37VFwwaEkiisEXXbWTn7R9eMVWk1VJ6BpUni4N1myM7ZwAWbLCz",
  "key20": "4oPBDCovfh8X9ac5SQN7zszfNhwP66xvFRfg1x8vhDDGiUSQZFT9KPHo7kZrpUqdLK9cfBuPF5R8Nx7sGAFRfRZ4",
  "key21": "2NgUKvYF2JUb4cUJH32iN6hE8fjoFg6tbWCE3iitGumTPyBCvD4voMSxyyEH8EJ57TaZmY8YnrK9K8fw1my95jHp",
  "key22": "5pB5Qbm7rNHtLGPMw3Ch5xrUi7BXMwfyMfuzMusVW7MWJRkR327E1KFyPXX3iqjkTJXq358DHozdWcwbbzhoSJbw",
  "key23": "5pvfZGvhuifvSYVnys8fAexWsbSH5qZ45b1x467yJCK1TmfzjpsbCNpXPx1Zp8nsNEuwUohdTUxLozFYMtdCwJ7s",
  "key24": "54csNLVPwsGVemfTt1udaeCU5t8RhF7ZLhR6r8nt1RNo9Cdascf2BRhJhwpxPpAA51MPJkYWFSG9vn9E5Ee2EwmS",
  "key25": "36sYL4jPEmZE957wv5K2ji6h36NK8TBEWVUFsiMNAi8L6HohHYYeFPQzq4bj3Drj53zdzxCUspB4kdTN1anSwraC",
  "key26": "2uugyTYGwuBxqoUVfRExQQfpM5oXzsAgDn8XjR5HkkZp26CBs8Sg9zdbx5Ksz9CUUtMnYWGswxejkzub13zuMuBN",
  "key27": "3iHLBxnWscP91g8Wvzfr9JQ7xk9sidc2go56p2q3VB4bGBs4e8S79a3Sg2FCWbL4XbDxvDRRt29oGd11nUS7Qps3",
  "key28": "4uRymvEtbERqiZRvaqi9UNZHHikjo6GRGHdFLzLFo9kNRMV8N53TUosP4iJXZfn33xJV5gN4ZC2bLP7mjdPikixY",
  "key29": "8Jqh8NWs9n6LDtjDcbLmH4EVgt2bxdcskH9mY6jnE3REpSazt9PJPwkedbGASAegZgXzXyTMsC1oHmS2ACyGbwk",
  "key30": "3AZYAEHSE8owPNoi4pRFGeLie3sU5toBcu7zeBCBEJySE96bSLgadagGnaCdU5MQpbMrmE8phXAHKcduGsn7Ne6U",
  "key31": "fpTHHnnZKRKXXYtWJscabqN24fG9aUKLDQebRVpXZjwfE2n15ooH4J36bwLep8GSPZAFAkh7Emw7Hi6TpKxcLWQ",
  "key32": "2mbYsiUHAJBZ5mgAoQj6w6h3KbS17JJe5dbhkaa1cZWCMLPQBxhHZpZW7grBLDHQVNs3p2pdSNiKoTpTwPVvbqwv"
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
