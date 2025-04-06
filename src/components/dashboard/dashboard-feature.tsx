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
    "2NWha3MehsBwoKK5CEEuvEhmNnw1Dh8BRu4rSxk8uraWQSiMmXFRqdiEfGQrkRqWgVy2bQrmPgYuDR5Hwj6yNdGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39aT3BxaEZYtsJTTt7f9bun3WSEiq6Dym9vK8yUEu1kxT99YP9RxSBWnQPoea4auHEW1H5tMSdykuTf8XJxrKDpW",
  "key1": "4f28MbdXtDhVKjLWmYYaWTfhP19CUh4dAynbggvUSWhAdv5RgLKvhjzgEstuz18dtt41oKjZdsrNRNjDuKrVyt6Q",
  "key2": "2zfCx7QrjGN67drTY2dRrPXEwBrjRCUrdaMyyWMTdU8UU5utVrUZmxMDs5DG2LR2PUHPfafugrzaLKKrT1HLtUnb",
  "key3": "36sPMvqaCokRB1VVaEFAfxDfKkRCtVqD4aLCRdxG841fjnjyeaoT4F2iGGR4wV4x4ePVvsm54n1nq2cof6Zh3kXD",
  "key4": "3i6UcTPq1TSa6D9yLeB1kHyb3hbiDPjvkh26xugroM4McQuSN9kACLQWTqt1MsNBas9kBPEivjQfaEuPVhHCrpVS",
  "key5": "2jA8kVCrHPJunJjC35inYgWGRhmxqjBqW5u9a7NZoFTTVry3Z1VWSS7Hg9evvNa2eGNRqp7EBzXuwf7qoyGS6rPE",
  "key6": "xgeJbhSApjNdLFCDV83EPHad6V95stv11f5psJ3fahRM2Moxe7uPYDfycu1oWiDJsc3KgwAqkbyBoMtDcxL1YJS",
  "key7": "HdpyDXMhbPq1qxpKD2uknPWXjqUEC8dcDZ9QDhHP33b4RmvtJpM6y2deCeLMprPznsWLbJYMfDikQxav9LYHyTT",
  "key8": "5yLtT83g9GBa3oUYmd49uJR63VzdkzQvuoPYE82pPyfEjSeiTT8LZ8WEYwdRN2zLa8x5Dh5v3Q6sb2NYpX8QZA2u",
  "key9": "2u81bqzCNS9vPfgdcqG9gU1EPWui1FGpeoTgePaDs8Mezax91UeX8yNDh5vLHE2qA53aTLfCSTagYbud6UiUn5FS",
  "key10": "3eDzSMkauXn6fDPnRzXHaegybr5hQzvFbi8YZbWgLfY6YjpBDbAnKgjjdvoHXqZgw5iezBhRooHHpScALiUUiU8g",
  "key11": "47B4czxghDdscRZcfXange8yWRXZi5jpstFz7AofycikYtTLXrsyjDugzXLHMJGDMg6NG4QL1cAQJ8bMv6X7qhHP",
  "key12": "3YJxDMMUgoCYBzvoCrEdrunCvjr1m7gYegnBfxDuEzUrAqSV5qbwB4nqyNobEVz7F5C1NW2CTUtxqq92RDbnynwU",
  "key13": "2mA8KCRKAvx4efxjM9RtmVHaETBnw3eWpEmptauGaiBVoiBz6nVZehEcGJUFztuj3BVGmfVJXYGmvop8tGJgped5",
  "key14": "3UP8PYM1nifJdUAZ3vshynuko7SJQ6zxQdmYx7axpJB4mxE8oZSKSGnfR9PmoCoima77U7eVTAnpFPNdrxBeSjiL",
  "key15": "5jT1UtjWGzTnQYCbbgiHbQgZSZukUc6j73G2kHCGsktz7NQZuVRQ6dMxP3hqp6yrmq6V5dp4QKidwHdzk9bUot86",
  "key16": "3MS1kBjcYpRV2Ctb6vFJcN965LtNuWuepEVSYjW7KxJxFaJq9w88T66ZWcdQmKqiasadKDYrcqBrgufeUEW6GACR",
  "key17": "3wA73M92Ymbkr6bFo3WJDwEH9GLyb9MQFAB8wzHn1f28ciwPc8RFNAL9shSSLe9c8KsiajDr3RESgAGeNkPYHsFr",
  "key18": "5k4HpJjLMHDJpQ7hBLUAFr22PNxzTBpzZLeUShtV36SsXXSPL6tBizWhaxKV91CABF89jX4Ah5nyq1UyQr3LrkiE",
  "key19": "2YaRkp3Zsy82Vd71Rhewx5KSKp6mHffXHMgMPqP6zZNcU249w1eRQiaBRPz8Lc3JNekKxW81hBwzacTmZD86Tvt3",
  "key20": "3ZLoDeaCRNkrk26CsosdomSyDCf91w8Fk2rF4FthxExkFjH8EbEYLdSwUifC9E3yn756MuEaeW5uAavu9TRvsPj3",
  "key21": "4gijuU9q47pBj9mXhJTbgjnQN6aum434NZNnNC2aWmuVaytxvNonHZLcpw7e677HuiwRhMPYJvMDHhGKbt8pdi1i",
  "key22": "31J8VFpPfAkW4ZBT13ZKvRQkGcGxoSLL4Bp5PDZHS7cQcsYkFptDaKBmRHuzPrRD8RRcCyHMhBi2vBNA3g1oUuhk",
  "key23": "3ygzSiefTz8PJjWEBtD1qJ71qUcCXRMnFfXVtNBbXiFPt9wDpaZQqmPYbBe992kHt49EhqjSjztY1zKaTqm3rtoj",
  "key24": "2egNw4Wvi35dz4nAvVKyGVTgsmHp11TYe9ZWvbV9D6oyUs7RyFia1fe77X7Pwns9m3EjH55j77c8CZKmzssNKRiN",
  "key25": "37raxVQ9Lx1822nUMb5TrSwyW8NKXJ67Fv3mu92nWBbcfvFe2tYSXdbpSyGtLZh5qVxhNET9YKHaSn3Jg82TjLi4",
  "key26": "y4MiNJJF81kNkmsd7PGuJgYpMu7R67TSKPwANAAXhSSsY8YVk5kZcXWFTbMaT2T5tJH3xY6uu32vEf7NGjMLYAj",
  "key27": "4P7TXjYt1y7WE8eYqeNA1gLw14ZhJkfv5SDxx93eZUepUNzzrCBErCJL8yDTGbJdGdY6hUtUkFNJwxX4kcJUorha",
  "key28": "4ewRhQrMZ7CZLvhysjXh8ZDpvocJsy566VVn95MpxayfKapBckGzXoKZ38QJHw8WNAr5gmVgk2NgPDqyr9KYAuZb",
  "key29": "2nSasaSfUWq3tYHsTCNoUHLmVLB2b7R5KkPh8su7zsGjmUTu5tL3mEEUyrGbtBy1a7MM54R3BYGcreZqVSYyxo27",
  "key30": "5RmrEdpeSvoxy2RwjWa5Fk8JDBvLbNmUXdXmygPyfAv717gFB2qDsap8PDD213SZ3zMEpCFBdHDcQDyWhLxkcTZz",
  "key31": "4xSfpoQP8P87EzynA8NY7ABBpp5Ws85m48rseu3GygekSiD4mQBc7JShZBitw61p4ZFqeTqkk7gvTVsXFvbWvcWb",
  "key32": "3kzXNmpCvaUHqDbt9Y92bjfGuYm3rUqpwQdmGb859icK2GSHNNvkKSN7z1ZBd4fCbPwMv488C9QgLhBRC1W5HHzq",
  "key33": "4HWtt45R3cEb63TcC3nMt6AMF9Fz8eKGG51zo6HtRqh342CMGUEEJnLyraR9ypKAoncrVenPd3U2jah8SMAzXugu",
  "key34": "3NTk4vGAD7vN2jyH1h9EZVWTbgd9NYo66Fy6m73caXBHa16nrSTvDbk9UYFvTN2QQjT9RMXJAsFw68ASQtfrhhmN",
  "key35": "rrjF1iCM2Dtg8at9hqrL2u8HEmR4Xx66za54GxVN99PWo5nNUt2CxcsgASrq2tdn4eP3jSkmAF1PN1JFwhS1Vhu"
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
