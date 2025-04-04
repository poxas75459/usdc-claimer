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
    "4R3s8hdMGFa543CuwmAdhAoP26zUXT1vDhZj8f4m16qTddXnx4xdgwQRk7pQsnVVmn9oiRCZeeUPiYBFf42ZSXaL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KTxByQeCiiu9KrreoJyZAXbjNaSq7uqyFxdY5stDJo1yojCVG3PAsokGJqkLefhzwa7TcLLuBPca68sQPSv55RJ",
  "key1": "HG71YgmY7oTpsdXXPYMGH6riHXTv3VMJgPtY88AME9zDBAqme5sghsa7V2TvH4gcvZFzv5dLzk8TeXSxk8thKfk",
  "key2": "UhYbqzRadupxtq9cAgYvbSt1hRgu63sS9WobrEwjfZiPGvjKXft16cBQbdTRX5jBs2T7QEifmmMvpU22z3ABLzG",
  "key3": "4F44h4fL9XQFLTd16JkViXJpu8BoacGDqz4u9ZQ6sj3L3GHkYg7cYmCjWigzu7As8hhCvE4UnTt3kFijRDjGeKJx",
  "key4": "3WsLqZEQrKZYKBAPjUEiM25JUN6iRWdcYYXebDWg8sNdKqm8VL4VSW2YZWbuqRqffM8gz2EWjMfCsoyaYzA3WYj1",
  "key5": "39vhPgwsoGtiDMmaZh12NabY5viKrmBQstQsXaAX9eCDCUFhJSY9YrsqXC2NW1GQF51HYDdDGi5NktRUFSZBNp8N",
  "key6": "UwUmMn5wyfRkFPXabLpoxytJivXC7CX6EEqekEY1Q7Wps8ut4jW1WrVMMpQhNur2mYMGiL5CmbQqJxYq2uEVEtx",
  "key7": "53GHJ5ZJmpMMipggA5kNerUnGkuhJ3TdUoLKPe4w3xPQFsVSx6heb1DnNSTWCzddSzpVNhhSdD7BeXG4skP6E5L1",
  "key8": "5t8U2rEQSPmtirFSmkDY7Ne2VVAZPTFTgkGUWcFGHVRMrtoDHTtSvyJMhdW66jzBtMMyunA6Bb7HeCRGhh47EN2L",
  "key9": "Q6ADUATgnkiL8ZWuKknZqD3LAou5pQx6DLoP6JQPJQUYCixVdbTGheAdaKVCtxVEUL2ivSatjeexpYgfZCNr6Bk",
  "key10": "4F2j7sxNuQAErxEMhbqNWGXW475MdVrCjB4kzBKVMuR3xV6nyk8d8uWxSnytybghxG5mdYDE8o1UFSu6Pf75J3Mj",
  "key11": "qpo1pBnpevxuRV5Ra79gnxRdhwwUvyu2NTHtKXwbFChwS9VGvBbzbWRicSfS59B43VhMfpmzcEePAAFrVwGY7Xy",
  "key12": "3C8c7s66UbwqQD2kTNhVDN3b7RkrU9a9qZNrxwMp7kBuHqZn12DtmEX9ESuvPyctL5vzGD3ApsQ3ReGh2iEPk7cj",
  "key13": "5xQtaRf3Vsm4opRR4iebyCZpFNTQsc8ffvFARrB7AGE9noaQy99wwkGzqMDB4Djtd7z1aQPHuLsqmGDmrmcWoqXg",
  "key14": "37j4DzMPZYLqQyG2VbKK1pVuU4kFTP4QZBdSeTwaMta5TGNs5GxQV6kTFwsCqkVyb1XMdwhBVnjAZHHmzaDawaP1",
  "key15": "8ewsXCWBGahRkFdBJ8Repi6e2a66ZuuG9sLTZXNfzNdCQpdjcKqEcSyYGXtEJwpZ5qJqM3FtXoohT7Gdon5sofT",
  "key16": "9JNJzuAmq7t1r6XhoUebECyiNDHNVuBguaUCCpzyWqByzhL1zhdqYcDqy1677sB24LL2fnNyiM2tDFHYfdP4oY3",
  "key17": "2mJt83kBW7hrideHfZAy1sSnNV9G6tM2NQuRHyx1hma3YDtDrrHsuyGUs1PjFr1GoS1YhweVuY9L8EdVzLBUfMjk",
  "key18": "2cNzEyFXB1VdMgWRAtED8GeVzkfaMGkFzyqpAMCiWgScNrZ9wkoAr2TpyMR3ACthfnYtAhqd66istQ9iDQVkfQkj",
  "key19": "5EpDe4rdJ7ux3o8iAofXhVmEESZstV139FeinrkQF72CqihZS5pTRgdLPLcuYo57GvQmqWeo9eBQ2XHrs9yLTSAr",
  "key20": "3Bz1k7W14yQJr1hKhj1a3Pdr3nbTKc5jYsETomvZ6g7SdYvBCKWWdodcuuGH36vgFqmNMmCrCoonZP4q3zhzZ3dy",
  "key21": "2DFKtgrRq9hzdNMpYfiGDHSrQUTM6B822zs5G9VVbQZhawASjxJhm5gTSSB4xQoCU6qDijAH42rRguhPM7PJnDfv",
  "key22": "2Ampprbxomv4WZJL9pmhg7QdJjXtDe6JidXZ6KGwczo6Zf54a3Uc8FVqi6ZWaaRhsWVfgJZhmDJ7V1Ge4uKyVM3v",
  "key23": "GSgMpbUrmT4u4nfPAXK28DUKYo8soK9nzdie7vYvzwrqa5VUcEkSk2qsDEAJwqcDEfohLonJdfLLSGgC6Pj4VTN",
  "key24": "5SH5ExDDUcpsEWaLmABUo4UQqLV5hQt8iFg23xW4y2a7ZiFTLnqzgervif8fTauXxgq7Ufa9dTyUNFYPp2zAzwuV",
  "key25": "5CThKvraxruP8GnFNergCYRXz7mCs9dofn6q3fV2WcK476x3SGg3NY7Z33EX3TwiBjWv1ZHx6koVb7ZWbUDg9Jbf",
  "key26": "5JzJjZuv1piqR4iAMSZpNRRKBpur6mi3dM7xZvZFwpaoesnzzetaaNYkv1Ty24C3Ei4Kz3MWRkEQJ3zN4XoKWS8c",
  "key27": "2q6u2XpSfXPD82jazJHTVBjAh8GACh3EdeCfJd8XyVcz1cmY2k4wefqMjnGZtWCJQe5B3Cd1RFD7e3G4WLB4NMYT",
  "key28": "5ePwoEZM9cu49WmWYvotf5qruBdRSVW8Va2WV26LAfPDgjKUYgCYd6jdfK3thNbwQXbj8JkYvKDbFQtxvkyoHACb",
  "key29": "64x9QvPnsJKjiyqokmbKGmKa8ZMorffeuk2DWsWNThgmQ7bZhwqSfqV6AhkRD7gwxfbRqvruCnyT9DDyhMuRXBVz",
  "key30": "3fmk2YmEi8fPsNkmakY6RawTYiSaDoPRsfskjh214NFJEjXDnfB3s2XA5ynNy2bvi2nRU8nyQXCcu69NT6Sy4m68",
  "key31": "2F9vMorrjGgHLsWoz3pPKDbVtvG7edj6hsv1AJp1LgouJLrxoAXNuhc5rAJ97JBbwZJgUmMYmL4p8tjWoyoCANu6",
  "key32": "3imDtFxJfomaNHy6rBUrfB7EXLnRDRK7hDEvQ65Rp4xTkppjvXAdWFHN6zqUPL8hLUbgBVdkYPm8HBrczGombZ2R",
  "key33": "26aDBMU67dVsZmtwkPPYNyRq1wDBJztf7UrZBT8DWbq8mdXz3Snx9eVkbn6dAwsnhboKaRGRtw1xxjCAHA2t1DbK",
  "key34": "54uPARPTSiRTbt6JUK9e6JWRG6VWjEkQ9PV1Xvzsmrw6xa5z6gvRzm4TXTzUqZazazVvxvYfpHzehWTPRx24DzBF",
  "key35": "wb6U5ggxu1DPHjvHSKaHiSAxvHV9Sc6UDWcQMHVjCYu9oNfT7QDWAZwQX8W8vJuJ7PcqfRECWY3HJ4E8oebfviM",
  "key36": "3rLz2hzdHu5yEXuYcx44HJQse2u6r5F7tz9YW3A4mo1QtMLvvswhBNShsBvj1NhJCRHh39rQ5o1nBqE7bhSDrYXw",
  "key37": "3cStM1Q2p18pduobvwHDfnDEpHbXVMsHygwjNrAvg9AS5W1gBcF4sEZKXUfABXBY1bfSTJ2R49dyWdJzAErBDoJh"
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
