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
    "5vRTMAXLL6aCWfAAouMeRmUfZHNoyKanm9nvbpLV1HhFvfuBexJsYgssRvKix4H8mtoBckNj3vfHNg7KqmHyBeBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6mxg6EdJzbwPhpyNTHVrHXZzT5QdWNaHQZaqBy4UF9X8WNmRbSAL13zqR5BtrbPeX7FE4LVFRqSxRAQDRoZX8n",
  "key1": "Pa3BCGmezGVs9ZXXqQYPAs6va9eKvJVGmtT3aRuKgdEH5RYcbtzud6mEJ9RXDpiBw5qLDTWNDqqxhy2pf7eeFfm",
  "key2": "3rQwQHEsSDn1FNpDNabK4eA3nypNrVAcscrxXG9EJax3eeAQ3uyWBhTw9PqZ2vSxhTLiUSkq45wu2TsZpAb6GxJA",
  "key3": "3qLmRyQQRRee4tgEMT1QEcBpfnSEBKhgy6r2UaQczGXtfwf7J9pWbT9dFDTbEWMm3w68zsaLPGiUmYwyg81Gtia9",
  "key4": "1H7D3zYEvgWDbZeifDup9t1WbYCEDuc6wmHzYEi9cUBSygUYie5n1Sjp4c76C5qREw11X9KHLxosHBayd7vdpz5",
  "key5": "4n6uUJhdaanwehpGRirCTbdHurN1fT8xQE4VYkNJfmnac8QXpBtJxAXbU1yYJArcEFYhHDN62rYjGLZSQxycF1Np",
  "key6": "5XS9WnkxSpkdDQtyqn9hzMkVddx7ZMacsziPPCTtv1RLWfPkXkG4WqifwzZ7cuetezcvVBMoYvNxDgW1wdJNjmcN",
  "key7": "56tXGZVfJcmPo81Z285pNZYvoMUQcVUM5WS7R35aYEpvH9r7yZwiwCgebmpo3Xcquo6dpfVXcacFGPK71UwYGJMp",
  "key8": "32MMbaGtv3LNVNrQ4duhqBfJCTCD4mKjmEHtY8LFgsT94TLWorN4RL6gJYKgp9ex5BFC3gYduUAJrhwEYmYPrBiS",
  "key9": "4E4JB2ffeWrRQpcZt9vS4xSU484LWmVkVMYDuwkdMthLHNqMt9qHvBrWAHFCWHUrRGVkxnhzcy9JoEXXNepgM5JR",
  "key10": "5f8yvQvqFWrqvsKnWrNhvqU7MLCLS9EdTjtNwAsXqWa99VdcEwCpLdtUsUcP4JM94Rn1YCNAEU79FDvksAxs6cRJ",
  "key11": "4dr32qHVKSiLvP22R5qrvcpevwjsDjsoUDTLkpbfzs2Uzk7gXpKUzwZiqD6NB7tkd7HiTpZAiiATZyzMXJRpy3JF",
  "key12": "59m8PeyfNHgmsKQi8wBCxp3whYd6JUN5DNuLnQVEuhBtMNK4ZjLzFt8sr9WjBNkWoq1Hxk6ptRk8ox1HR9um7VxQ",
  "key13": "4EYsEAay91VYrpGxTYihCdi8WvSUgPhJXCtJE6QAXo6eUT2rymDDPQQe8NikbDzCN8vD4YhAQCktP4doumA4FGM7",
  "key14": "4a5vRkfDs8PD6EF9qWxRixQ3s9m8UBHh1nWS94wGKALTwVaumroDXBkZcUxk2VXqWSJQRErrVtJ3H9U9BE9JEvNv",
  "key15": "4416T1w9gVprmxiQcs2JDb6u89FU9pFw2WUvCLmn7EtS7YyZuYoieeFtdzzPpbLRwGfR7uy44CqrZZTXykwpZSFo",
  "key16": "19BTqro76YGN6LWxoe9dkndUR5XjQLKCxz4cwijEyV2mrSUZMFaDV6zPGLNJLpYwv2eonmbCFYWDqghdgq8yJmP",
  "key17": "2tBsmKa5D7oaoy1pygErGJTHXQc1AdPpDzpdbNrK3odeDHQAaWRNY2JQQaqnVRDzTxV96V9Z9WXcaAmg3WEMRs96",
  "key18": "246as9YF3EaD2KCovF81ttR2MDBZxuRWm3LJmQdYanZKuKZ76nR8gbnH96Z3ihy2gRSATBv8rDBBR6dzfCHjTEM2",
  "key19": "4UKkjZEgdsbYpgrjosgosFkeqHJAGSKchWiptrGfdWQDMfjqQPtqtgtSThuHnWtL4yjbWtPdJ3m8T8LrhgYCMxGZ",
  "key20": "YsnsW6kYVu1kNAfuKYbkUANLi4uiC33K8kcjYJG9fbSJ5DYiZtZgETi9NBVneEeC7n1N3Rj5Ri8jbQ7ot6TVUrZ",
  "key21": "5PnGXgDULSrj5V6XP7ZRe4HqXVH2WmmGYupzB8fDWpJHxn6NZid16m7RZg4UqviBB8gFeUD8JBGmu6bFJ1FyGzvV",
  "key22": "kYeUoV2MzqWnfHiZexn4FS2nE2zozLJYZAQYLBRdT7Fuf5Cw7fo4XpRp2Btd5r7tssvKgqmMZiXwYQs6mpVq9pU",
  "key23": "5ywQUwKHKj8ZYDhSPuKpsej9JHNy5TcaSh8YUMceRinQ9DZgAcYeA3qsuAWHvwzT7A8ukkLx8ExCWKcWJ4Uz8RU6",
  "key24": "3sm4YqDUjV8ecyHPvq6QhnsqfVNhTGti5Gg98nMonwejQ2A4JERakv6JqAmMLRq536WeueVhbDUMowkmBMvBUcWo",
  "key25": "21rK8jbmHnLHgZSeJcRWzL4Gw3coG8NTbdbUtaeTBasKY1ZEc8uWQBja4fRrYJdN6yQExV67oBkaaADwn3KbQ16e",
  "key26": "D3inxmccD1TpbQYiRhXBdVPhUre7yJaGsfidUAo4TGJsh5gSxxWJDPQDCKFPaxEquUuPihNjfyLWb8wQWqrC5DB",
  "key27": "2ouXWHgtSYP9S5yc9P3mxvGtS9XhnjNARKowcmbUoj8ouShz9bywAsSFk3rgR967HmA3yUrsUy2H26vMCscrvqSm"
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
