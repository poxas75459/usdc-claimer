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
    "5ND86r1heqy7PfR8FDCtUf2uy7xmC4R9LQ7iR7JiGUgoVbfDdAtMmtgwX32GEKWX5qmjvyvWCBb1fwFrtpyiFbnR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HP6YJZFnuz7YVpwpSiM8ERwEMyyeCxaeSQ79XL6cjLRASx1Vopwezk7X8SR7fQT8YS5W2eX5SfTXXv9aN9SNJnn",
  "key1": "4ZkARf5JGg24rGTP9LJgqUjn6MNPc6nudyzVQudqugzP1c13mnJjuP6ALoNQWoSMt3SUZaL9tUmNePLbwQFPhVKG",
  "key2": "3up2imSgGNm6vfyo1Yp93veRA5F3BuHU5TX16gHfz8spLwBS2oHRK5cpSKsU3Wx25JvRwtQHGzrkA6c1upgzAKXM",
  "key3": "3MNtqqCjeZQfKJz2EfRikuEba56PppZiNCP8eXjwpMNnFYvHh4jMrVRKk2iL6YPACJZLqQ39rughNxw832L4XiaJ",
  "key4": "4qa9UxRGPw49NJw326KVj5LSgZpjXeRjYN2t1tZhHs5Q7QFw23mLJGNegChc7T1jT5C5tzBjzxZnpNRnVMqb9NYD",
  "key5": "5bsWVgCNEpW5hpBMWT7Mar3aZ8NcJyGxjiuxWiHQZsupnCiPGaw9jPQeRMsWETkRRPhWq69sbE73QrJZLF9nEgCK",
  "key6": "3YZ3FFyayvFoTao2Yr1eY2ooHKN6niaPCY36JBMW3PLH3dsxpWrSVTjXrXpJCCuQJSPH1pMz7Sp5DiYedFNBL9sz",
  "key7": "2Dw6gVX2bjb1PQwFxKfzVXbaC2cuuWRJDQXG6NcX1Awfuy2X7NtG3htx86xPsU8GM62q98U8XSn7FEfLz451F1fX",
  "key8": "3CP7gHVSw5N7GQ1GpfkC6JqPfXFvoW82ZHppChmGwRuNX6hPfhdwfcN8tiiwT3TYRFTvgrKCUPP2LuEWbJ8ZdeUU",
  "key9": "3qtMbmRkyGzVDu5oP277v73LhrMxLBMd5HZDZu7C5nKuamU3sEbAZ1eYhutkjcZ6WQfgc7uHRTthQZB1ok6osTPP",
  "key10": "4SbBqQLUyhR9Ur1EkftXoL6D7jbYKCG4ufAr6WBTZr2Gr3k2Fxa5e8KZ1b7zQ6WNbAHbCENzCZeVXJxuizjFCacN",
  "key11": "kobtTWkhWvUfXvs4gK1Ab8mckStdocU6FbVRjj5JLzNakdYiNMr6XPrwzyvEPgt5VViAszQVbWtJV4vnTLCHzyU",
  "key12": "36RN3K6CmP4rQTuAfyj6ycgdyxppCeDy5re9ZLD1vm3xJNQW33h27DSPEB9NSnJyeQ61zgTVcYQkfLo9GAw1Pw6v",
  "key13": "4FS15pZbbPsSpa8fkeggWDqFus69LN5eFpLYa4e7cNtiovJGVq6p51BCF1qMBNHb2LNuYjdmX6j5rVN9ER3i6n3t",
  "key14": "2UAg3UksxGeY9Jy9worM6k4SXL3T6FbqjUZ3EK8FkqUSbmVvVgGAoUyfnEvVv3xvVaFSVkP8dqWb69EHLMm8krDm",
  "key15": "2DUAoq3dAkQrTqsmn7jzLsyba5TTr1g15Pmh6N8p5hskMSc1VwQACzLMzAahhXC4raDNFs1amTHkE8dnte7SohDd",
  "key16": "4dCbhvkJfHujAcJbdRPsa2dt5jxjTQyEvydXLXuhMA3cGE7WNmieTbnBALAstgwx6RF31CZmgSCu9CukdvC91Lbf",
  "key17": "2ddSZrxm2U1EjrDRDqEw3TU2RraHNWKbrJg4AzPitPmArEa8dSqYUHxfaFTVJa5kWQLmRiXBjNZcCyZ3nyitHJ3B",
  "key18": "2wucbUDUUy2PbQroEbYhLAne3eicqFWhvVTmpPxCW37KWqt2uztKvZHzHG2he69BhSX2AUw3fvgXumETU3ahocPo",
  "key19": "22FMUBPmRrfSezAVbcJaR2R3B2H9aGCKXrKUpioBHc7gp5wWaX64H7UMsrcFtqaTQHqV5z3xRNthVnJDJYimUtuZ",
  "key20": "5N91ZH2bb1fJddbAHv8RvVfPHVnzyqs7hztTPLfbZ95fZr8CrKs7vQhM6sY3GBPXYuezQShRTf8uF99pJu4ycoHM",
  "key21": "2tiug8sAgAjbuRbQHZm1n6N1wq9GsNNpj7rCtiAKP8PZ6Xaz7tjbnTujG1ca1Ux43mjtB66HEWbFDAGYdnpcPvPv",
  "key22": "2SNbnLX1Y5xM1QKDakj8isZkyHFj9ubHz2ZF9WpkrrhuNKBxXKMJVZ13znn1MijPx17WVhFVhd1WBLP21KL7h89U",
  "key23": "3f69wSP6Gig65dEgqwK1LKEsF43STrpDTVTd9JRYZBVpmN1hvJaWXPHppaRgQLV5eWzpPDfUhwV4EWiuX1QKVTSZ",
  "key24": "4WQwyitTV3Y1v7YepN1WP8otrfpFYvXXkcKgerHPZCNMPq1WbFG5mM76pqVq8vhHdauWnfcX8ApjwUURXggoVjkK",
  "key25": "3AknU69YiYUXcZTmjsaN7YDXdsgNNm5gAMpkCwUL93pH9rY8v9vvYu4Fk4ro5FMnxqyPEtUk8h6QhBkqP7kzUG17",
  "key26": "wqaEdZRJ8xREWuLmewRK3dG3YdweUbUUCzo4urtQ9zN8mNAb766kpo5RxnVedo4dkMjss7yvhByKrnQNfQ59KTn",
  "key27": "HkrbvWKRiVS1hiKuHXofdtdb2b4Rdnjxtdx1TUY58SLDhrqb9mXSA2MkEx79UGi7rjXABgnZmsZWDKCKbyRHAzd"
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
