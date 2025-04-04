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
    "bJ36apT6tnMb5xhrV131bKvv6uMkEAxtPHLvguMkofEE1UCqsXYMJ795oFK61haMWHwZ72jDFgtBdgr7LbNxh4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QSDhJjR8XDhpbSsv4GZ5ogq71XSc1T4RzZKi2gt12uF4RRbVcXoaQ3B9bXvAcJQjBwdm5sA5QSZb5gigEgu24B",
  "key1": "2SniDDwBSK7MnWAY6XrDm6RDovxFfmz3m37k2JqUP3gCFfdB3PS6p7TuQc65ejiQ6pB96RpSFCw213Znvk8GRd3n",
  "key2": "3YQeLRX2vF15FuHsqg5Ywq65jEP1srF4VZbWDfCbVofMN4KcXEYuFA1vM8xicXkE5L44hue1ZQaQQKpwqsq6cFe8",
  "key3": "gKGrgYA5wbgjq2kB89axdaxvU2BqQrYW6qHwZgK3cxwA8ViR4nzLgvvUH5iBuQRpu3bwQF7aQyHweEKJCKBSgym",
  "key4": "5f6HenkEpAgmXtuxV9M441YGwq5fzfX8a1E1Z2W57XwFZLeHwiQ1ACVRUQDa4YVcdgbctTxcJYaqiEjMHUn1LKs9",
  "key5": "3YKB8pCzFbws1AZ1p3RVfmREtcXCJgBwsBuAEpNESWcHoUNAsyKU5fk9y5VTF7GaLmg99xMtSrsptMCVLy6SAkCb",
  "key6": "4MzayEiC5E74WzYheZ3hC9PWWW3wjvLPUVtiQtxmQc5ecdWik12bZLXVYgG74LPCo67CQCGK6hkJ4eB9gBDdiohv",
  "key7": "cfgCsCumQ5UQ2crZmkKtzirPt3dgM1MgF8gsHnZNPfaVMEMU4ayYCeALW8Q171WMnfF3dwE6z2iEqhRqkkEuQFB",
  "key8": "4WkqXffCZmH9EsFWFGhyE18kDtrDia4xWk3HyLC1kFaZzXyUnWrpnbGTGvWxqcBB2Hj31Zave1kANBfMktFuZgU5",
  "key9": "VCWoUSfkJ8QXngEqzRM5bbYFQwdmQxzADr8gV9mYuauV7vDLMBJfv42w1oKyrE352L7MD1HjZVJy3B93H5snCuo",
  "key10": "5gJzhrEya3az7bF1fF2vrVbFhFBneybYzryKoCQ29WPCybz3JiQ6tnG7F9sNYHyEoU9fyaii5LZrqPTTqyF1zQWC",
  "key11": "671xWstcHKGTWdJrvevjhsJ3zgbz7nVoqQVkHkyZ9KAy2A32n1kcovKe64APWpCHPzVvwLssHvgTxta1yYBYRvtH",
  "key12": "5CCaWATPMS3iUrYN7Q9p2uDyBHXgFioYJV7et22vx3Ze1fZzbbuD1ezkPKejvykuqLDyBB37WyQiojHNWs42KNZf",
  "key13": "UxcbE6gerWJM8MfK5KPhzhR7pE3Zrm1UV55wA6fwPQpMq6LSJsoCASRbYvfKiLZCK9he2sk3eZK3EfUjfrqKvQm",
  "key14": "3dTjoigRw5AAqAGy8gAq4m7kivbGBkjp5P9Hb9uogsgXtfrZxBmM7GeJoVmQ2et7othE4983a65mg5oJFLCG35to",
  "key15": "21AmuEjxdkwmsrcVkv42tcRLMpkUXiSbDtvZ3Ad9uFVHDihZQWqE9UF1GjpPnR1X1KKhzFbbk8Dv5dvYZWGgDPEk",
  "key16": "5QY5G6VHY2Yi9DYuuD67cCb19hTL7ux9aLKW34cBrCJfkroqrgwhNcjBfZgmkN3cKkfZYKE7YhTDYwSGfP7btYAf",
  "key17": "42i9MRXoFqeSKjxbbipi2b7nEcQmxWTUSBZfjK6kc6rrjdJvc1CV6kHBuCDaweLdW9SDJvzVDGc1XcRH6RB5QUBv",
  "key18": "41bMBf1Ak99asoib2BxrnkpvwPPF6V53LNHtDRDjfPjdB6dgGyzUJqKzu2ex7QXRfRpFTqWbZfP7yg87SF83xqCj",
  "key19": "3cyRk8cTKNYM3KhzrzPz9hkzfGB18kDuSpLeS3CzpKtJRaa2m7gjJwfzGF7dAmoM2GMWNSyDE689Mij2vmD5xzYL",
  "key20": "nuP8Rfj4m9oWPXuHuJdEWr7fCtbJ4tzYxN2b3XuH6o5F5Pu6KLL5MkeMcAxwify8ZxBKFQbfUE2hqngWMpT7eKQ",
  "key21": "XJcikX93XKCcp5r5SK62JQdF3AszYPtExWxaMexq7hBaLETHN6iKWH7FDCisyMBBweKHANocSSjra6JiU9EUTYa",
  "key22": "4yDKvBXoWNpASHWKm1vFFmekSCQzQCaUmAkC6fsu85hAotPUe5uizsGyhgc5j1W8ZtU6etKu1xbHwHotH9jSXfWy",
  "key23": "46JuNuk6zif8LE28S1BY8hvayBfj2VVsu2qWUrVt3HLw3NbnqCnPLTFxSAcpMt5ArpLdaRcqiugu9827mCePGAwn",
  "key24": "436vwsSMkMy7swnWTzhXbdJYCoDjNXPgxQh3pjjct8jwcEjXFd6whJbNh6sbivuxbnrMCRXGp9dHCwikXmB4EH4t",
  "key25": "HAp9Xpwo9GSNkzBvH4ESp2GoaR1542rdY6am79rtqrBXg3h1x9Dq3f8EHx2UK2CWF3mSx3LW7aLGbMDAqQhUw56",
  "key26": "4XiqzspBWZ83P974Wo25nfGPQUHFMD1q8NM4PuZ1uDDaZntrJnzjLvvLk3H4rFsU7mUaAGmtYspYyiExBJVGm7ds",
  "key27": "gsPKczF7ppxK9kvhciQcnDcL3zXJiMDoNW3wH4zkXkirVuFcb8Z6kQB7zxs8VguEMTnTQpL6hUjukMr7mjC84AY",
  "key28": "3eeBD3Gc7DV4vqaSGXqrNmUhNZzSsZon5mwhepTMZtuQ7hYK8hmCVmuS6ZDFRoBffr2LrCD5o5rtMeJ66G87viXp",
  "key29": "5GBsRodqTfcfJSY4g21kE7jSbzh9iB1a9D8ykHgoDAzZDAJWimp8KxSdiyywyfe36nUk4N2qRoRK9DNiuq8B1erU",
  "key30": "28WGyaqS3qgsXQVqCVBNnHMyHXr888DxUtm4ryrhXpkcedmW9aJms9cVrsdymY7ah4W3HUR5J8uRTocU7wCugAtb",
  "key31": "4KHuLuZJh6W7hNXad9XXmQiGQtaEvP8k716Xe1NPtokPPderbwubYcgj79MTDdTyGySD6oAikGg6y5GJWS4W6Jqn"
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
