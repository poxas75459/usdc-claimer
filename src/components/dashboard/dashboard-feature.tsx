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
    "4PUigr68qpx17MgtZD9YBPJqZu25osCh9QXMKqkR58SU6vSugmrehKUDXrB12XkX6qM2QjLF8eJ24kSSC1vkVY5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqSht5WdYXj2HgGCpQ1P9gSPPCdcHWaBPxr7jv3UUwcfoDSpF44iZKEqZfCnCvjKF9tB948MdGDWQqQKyeBPxiX",
  "key1": "5Css1hod5NpBJuo27yBgD4p8L3r1PFCrzszBmHEvLkHKZkrsoTS4eBDDJUW5skryV3d2iuwkqGDmCgoebB3DXdy1",
  "key2": "34fJhtr668WTuXWYcViNtyNkTKPmgYGxm3gHQvtDGaT99Pta2otNW7z7MZjYmaUrdc3nAYLFeuPtFdbJ2z2Bp2u5",
  "key3": "4Dt1bn5XFTiYmzu5NT2r7JYtCmBXhdGKmbiWBfwUmtwEH6NfuHcQoMptcUT7dyMdTURR9iNofgZbvYbvzT9ot1RJ",
  "key4": "3gYW4u3HbQYd6nmR8yXcSrccsxvc42eyKQfMDNWVRSL3iukYYUd8DiRyuAJb83FdsfLztG7F3iLQviy3UwQEMQQP",
  "key5": "2fKC61WSzoJPEp5B7Rtsf1F985RDiMQmgLHrELjKwv9QWkJqcDd79Dv1Xbn2sF3q5tLtYK7va4wfaxaF6iXd1SCK",
  "key6": "3FmSwisCXBJqh78gFjvGrrxc9XpfT5pntst4PAKSvgwVUXuuzpHaRPNhbDVLupLrQgsgF2t7Ci42hM1SB1JV3JJu",
  "key7": "5W6HbHRRrncLiXtDbaggtifu6xsMSFmUC6SSVvopbeyaALAoLG41fRHdD4SZqMb6szBzsCCLwfL6doYi168uALSb",
  "key8": "2TPb8vT7sYiVBLbHUzQM9Mvbf1kuK919Gs7mAeM3mKUErh3NEp7QSGnYG6qJpirEU4XipuPokAY19mvFNPNUyH14",
  "key9": "5fW8iA8iG3dnfeUnwU5JfFLkEvy5Gh4PaoUzNrgPWG7RMLzR2Lhb9wegotEofkAPyxMLNGEa1MNT9Gbo2TBhY3NC",
  "key10": "2uhPJq4Exhb34Kdiq8c8cBQ8FnU3uSBeRSxqDzfBw5RADEKKi3b7sAkcNFJr4ZzyjNzyUXYhwevDbxn2MmxsKxcV",
  "key11": "2bY2m7YkWMAHTbDLwc2JBAesA4BNaQFn3ZBZqrzMBxuxpZVD6ceGVa4yASSrCHZtJuFAaMBX7x85JfC1LNvRHopQ",
  "key12": "5wx9PXcqvpo4mREgTGSEwN7wQD8k4pWH657StsRkfwY6GAHd7idjGrat6DKJ7VyncjN4xzbbNX3EYfFqiYmpxgee",
  "key13": "v2Pp6K2AM8cYj1mSSuJpUabXKoYAz8ePyk9MyxAq1MWpmxjtDtm4K7DxNumFagEf444xFBK51nSJpTipEuRmMsK",
  "key14": "yM3PcD66As4gwqKD4oxvNDHNqF5d6P9x9nHXK7D8o4t7u9pr5g16ts6eDQ1Fsgi4h5Us9dvkNdfdnvR3xm5duFP",
  "key15": "2xFZHeFZ59eGNnY2FC921xdktKNU3J5PJeJyGEbqMuFU3C38kpQXLgQLwye4NEuiu2nLnLxWcv8E85LGwkCvJ89P",
  "key16": "679BYgVHW2o5uPD9UNiotzrfT9gp2b6oa8fhzWao56h4gfAqjL6e3QtyZ9vPgFAtXqyv7jKHH7WawsVgYyL3vSpa",
  "key17": "21iUkpSNyAAFp9Cxt78iDoYuBspiVQxE5zUiARDWH7Q4ARn2PKfaYzHxckbcwPCVirB4XaTXPiuCyEfVjz6pVikQ",
  "key18": "4jKx86qhFMnZNUoTdxJdJRYa61Zy8HMBPmf8H6YskfvkaDdnMvgkV52mW7xwP4NB5towfouKJ9Qimv7xQ9BPzngr",
  "key19": "3Aec9TbwydkuiNcySbQAKGdfVCaDKUF2m5gRrSjozY29VqAL7FheWLkHy3EDdfnhJLCACKAfYD1ctGGRwEhEiQ85",
  "key20": "4QpqCcYwpJaF9wik91F9EiNXehYuVxiTnWqDsMA5o8sUuwEwsfEZgeDkH8TVHkDvQb2uqryUhuTrjko4p9zKfP6r",
  "key21": "27ULGaQCqa58oZTirHw2eM72Sz7fcgb3VqRbgPYjLyCqS9HRUCQDFQaPokJUYEx2cdebwoyRFJV6FuYEMhb822hp",
  "key22": "ZWKEM2pvdrUAxWsHSn2scaZXPKJXMSyWpM7w5sdy9wKGLNRaiQA3qVeSkCJmkoVsaXrrWp4mTzTqEAGz1NxtrZZ",
  "key23": "3Y99X5A64r6qSg4FTQkN21NVEjqXjAX9mvgVUaSESbGtJtUZ5qYKQPb3s1zUMjeEny8YSLxgDSjp8v5Hmv4EwDvy",
  "key24": "feuQ57uwregAUY2FBBJEct9AwMZKWtbVdso76HAnVuMn3rzFeB9QRqgbrKyPfbBrNKFFotB9i9aV77GtwTdniR8"
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
