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
    "yJoAjUnnAj8Hv3D4rsVAvJbDbCYX7nKf31n1GHe44GScjjMhpdUuFEkTCX9ze6RDiyE4sY7MhtiXHeM9N88bwZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHF24zUwsJMivHTWW1JLPVPLiMpMGQEmL7dLgGkSyX4a72LMN4uAoSKzAB3xkbkvyBjQRGryse7ab8gn5NSBtZg",
  "key1": "34EHfUjVtVmNnxZwFMtsFhZUTmNeEZmxTaMotJDXkdiPARX6HAybJWravzN4YNtvZtGXMuRp1qbSm14tLu4tmpHV",
  "key2": "Ck2S9MoxTj6HVDQtmVJSRharA1dMx6DLaxnWpHQpnJVfLo3q48MDZcU2XW5VjeESXZEUY6jbK118q6VdNBu9bbY",
  "key3": "kWKQkBnnXHhwN3PDthwVEJsZMk6AWkA3gc3XVsq6o6fBcqLxAka1uYa5VgsASyN2nAUCst5QXBkJqtoUfnn328m",
  "key4": "43h2GheS7c7WA7rA3W1fXR3kZpEJ4RKY9s9CW8aJcysrQsgyZ2pvzm4LHouotE8uTYgrAC8cBw5PHAufShDPQRnF",
  "key5": "4Nqgmhc4A9VHgmDGqAaQ1yMJSqD8Grxyfd1FLAR32xKtuMgPTmmSaUrMtrFmsa8cKfcafcCr3KubMAJwGnLmFfZ8",
  "key6": "2NgTzaFPdo6SbPEo7XcV59YmxGhhp2JWvv2x3LrjDZAHxBcP3EcDEViiATsteu54NN3nbx1jS8e5ysHxG2VmMzVm",
  "key7": "1261yourZ9571At8XyCqinanaR9NCNHDWRVSVwNedCvauUTZdYwYwerFx3JuC9aoWz9NhtxtQbF1aTRqD6gyFHQM",
  "key8": "2L9sebYoWodRKkkwyUmG5u6j3KPpFDborG7wAq3ZQbCbFnvoNyhJNPj3xqfhs6xeB3ZtEUHCfbiSQzAuCvRo3bAM",
  "key9": "5neteqdnkQvHRf1U4JaxcRzQQi22Xqr8t6h6seryoh1tS9b6479JJ4bMhThHWDYB7UZtuXsmvE3STTWknQAqyDTQ",
  "key10": "65EVo9Uqg3qAtgTrkKwEYokDty3BZNMBrMdR7MBzVyXcBWzK6HN3hwz8Yudy8GUQC1UFuh3udAFNzcxKoTcUhuY6",
  "key11": "kLBrHy24FtN45AjEXVkq7b2BcjKNNM8cDyQdNYXCU2gdiMb74MnftTv3pXxrJVRuQFfjShFzJPya1LeXHcrjZsP",
  "key12": "5sLy3HcDM8JSgMrPF7LE366MnfwrvsrNEwRoZtsACFvMQvP77WfFpaVawykJQ5EhaafGU4gHFgN3i9TTCg9kEtKe",
  "key13": "2NGC2disvkPnD17KcoaYm6TSYdEUh5njQkQeggz8u4GpLJnMnXyurXD9sWG4Mstq8faLtoUMMeZDSYEePCEnreEe",
  "key14": "J6Bj1JZ1r5sMQ65Mtp16AeYMuNL8hBxdTdLc2cTyodyjA6LskLbhvQDTCYeYCQXwxohkhT5eTKWmgaPtY34qAEM",
  "key15": "64cYx8WpVPeeFzJ7AvhNqeKNLf3BvkR4yB7GK9HskwuCQ5yxZXuE5dERLDxgPUzFwU7CJqf8CbNEBNXQnXYa8CKr",
  "key16": "2pYubHD7Hhbiciex7CQe9XET4VLX3HcK2aNFVWp4pM4hMbKFYABCLzQdQ1UeoQ19E7TiXeaDvQfqT12JY5CKExm1",
  "key17": "nDPTDTCURqKeQiL7UHMB6H8sVLsv3dYQyqnLJRrApPJWvCfG9Q7orJc6K3BYptbgcq4ZmdaLbuypZyjs2RT9qWm",
  "key18": "4rqpuRfSusdti7qBbfEPytiobx4MFBwLKST1GroZaab3GAKM4D5ATzfXeHg8DWtifoXRtLiuRnDkNcdY37KkaxsH",
  "key19": "3qiHfGjyfMBVSU4YrJ5f39gYrw5pkgtFHZpeEbrRq67Y1773uTVTA9NhdcdE8QBfxMRRntsqcvioH1AHmgHVTEse",
  "key20": "5aSN2SnjFR3gmzXrawpH6mHDhcpeVUx3yMgcxHe8toCjYyVxeWUfmGNJ1dnqrB8ZgWV8X6h4JUS5fYszMiYjNzm3",
  "key21": "2QDzAtEcqaKVjYYvttRmvx9zQ4z8xBJoBePkzR3epEyAjJVvcog6deUz7XmekFy3jAnJiU5ubTv7cgeWvTs7gBq",
  "key22": "2k1Ya6RZrfHHF4LWE9Nu8Qc6TDQsZxQJwP6cYywtvz5USgTEfZ6yEkTCZi78FhCNmcPctycjDCi3XZmuFSkkAvRA",
  "key23": "f9LQi7GyQXJ9WPLfntG2xZPmiwSYeN5exfHwMSjgTNcqpBXK9h7RUC8ciiGbU7qiW5DsZcRynoSBNAGf5PEPkC4",
  "key24": "3B2yt9K47JdK6d9QVqhjhjcfgrSfYyV4KUmmLHdwpZ5GVt2Xn5xtoUjrekyP9WnZFuCxwxXfvhweGuHSDLhxHZqV",
  "key25": "5skPgXNsKBys5rJmVhdHSERmw2cwexp2vS4ihwopDv9SssAFytwkzPZ3JwzGdE9U5CRrWjbpwwxuqyjnoFMHAyVu",
  "key26": "2toZCcyPNjxv6upx9rhqn9QK595ojg1ckQZJ4T2dkzX86g7N2qyfJWMeZ594PmiXpjC2Zh8if739C9Weg2wUnKay",
  "key27": "5zKcqu1fJmWwEtz3V24Wna4QSmXJcNxfBtnwz6gVuxE5hc2C1tEsmxDEGCw9CwwGEuogpaDSVRYfK1G5tLunrpRY",
  "key28": "5rnnEDRjA6XqftwV1hbueEbdUWV5KgdsjtE6waArqf8AVEJKmDJhBqavcoKVGHkpSHinwaEotP43Pjc37mPZr87Q",
  "key29": "4dKg5zbWvozToduAnHy4Zea6kCbCHx45N6DJ8W4tswgvXJ93fizZ4nzpn81gH6mZZDYox8v6VyxhUwiY21TctehE",
  "key30": "4V8miT7a6jRVQhvBbikSzTzN8UDh9Xv4ZT3R4K8QaE6HjQTj9minNRfc1GKZJ2HzdSK1SBZb7DjyUDWAy5yDfRjT",
  "key31": "r9HPqoExfzvV6LsE95GjcpynpeQQNaHzvxeEUyVAzNePPPURkCVsrpMi3gCX1eED1sk9boJnbFZR4V2Xjj6mPoG",
  "key32": "3h56EqoUhYsUPfsEYDrr9mwRoEz4w9W7rtbM3NMfp5223gtRtMrBySJgb86kSAZPd7L1FACefvwCytEpG3NSWmn2",
  "key33": "Sk2HtLQXAcf9wh55NWkczpYNMKmWAZ5VjkJbBDLDAvUkik2D4CCWorwsCUtkaAen3CenkdQGaRsUyuqg22P94rb",
  "key34": "2xpAkjedK5ueKAxG4cKsZWFaDX2dCemkZRqUcei2FWyfksR31z98UL4xnvtCH2WV1QZ2Wqx2oawsUwuFQWnHBQ4B",
  "key35": "32VatD55qGC9Ttn28k2aYHBPGddgkEJSG7a2ELoQ9cyJP2F7E6mUzDsSJE2a9z8kTqKioCtpng7uPL941RgK5m3P",
  "key36": "4HFmpXAE1rwW2C5r7p7CdPepqF2hKazU2Bp7AbbWk7kkeBZM8LzCHkSZmNxe7QqN5X5e2aGacX8PZ6JNcFh5AJ8q",
  "key37": "2JjbPzTjgtgaGU9bfKCSviPuStmYozNjCJqoHPfw2vQjjqokYSV52UToKg3hKiZKDnsgmnefKgNLHS2KS2bXbdVj",
  "key38": "bC2DqXGV914HtT11VrFv1nzGhcbcrCErxvjbuP6z4Y6JfYEEbBN1NPEpyjBMFdg1AVnzDshgdnE9xBu5sQXupHH",
  "key39": "2ccZ6VpwPef1sDmJDT7skQDLJw7gJwHKR8xD7k9ANYzRYjRWUd2jsMMYtxUCLvhZ7AFWbvgaDJCjej52hc6iHQRT",
  "key40": "RWb7cetjt45CLLBM35zTgyqGADmD8wp3wfkP5pCQvwpdogWfqxXWS3XgfxjMqPft2gSwReLYqYJrU3avadmf85i"
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
