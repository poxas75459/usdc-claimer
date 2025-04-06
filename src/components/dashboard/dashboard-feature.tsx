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
    "uuZeJV8z1pCQCeRA6zn7GZv9pw5t2fy9EtQvYDsZ2CjtiKPVNqJmVFGiBt9wHepKxtrxRa64ufF3hmABDr2i13p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JXtoKhRkEBnLhkfsE2xuDX9bQ1ASA7sHek8fT4FztuFsAyYKakmzpMtTQaioTXoihUveabQ7tKLA1gdMWH981Ys",
  "key1": "59Aj3mZxjMbW4PrFspejfmYMRfqaRj81Hs1HNUemuy9qC2YYKHxRP6wUmKdXVsZ4Mnvx53x7hjHsQiQeCY7moJVJ",
  "key2": "nSw3cDCS4UxTm3MgkTQ2tvHHENadwPr18eyorPvhyj1hrqMffZgLkkB63AGQR3jp2Gr6WgKcxacNaUc7WMo7GSC",
  "key3": "97gf2AqzwZs2GWMHfJdP7gqVLWin53U96RJWcqAWdqhEPoQw7ubAjcUaT4QauUMjKU9qiZjfCitpU7u1FsB4J9S",
  "key4": "5VxLRLTtHjQyk4mZY4VFYqV19caDzrFkHBrdka7HzzJ5jgm4SeiLUecKTfW7DGgKbWo5su9W3Jp45qFGTxrZrWfE",
  "key5": "4tudq9JsjoGksKoHY4F5Q6v2UEVhcgoX35nCXCT1eGNuBHTYLkZ3VHZUVUHzPyYpfLTcUvLRPxU4zMCekRxieDL5",
  "key6": "2m95EGQQkiKBD8B5Pa93uA8zP1B5hAQU7kTN8mjcWWrBaqh8qskci5Gdt9GZzBeq48VQRnuQ1iiJg3KmSJcfH6Qu",
  "key7": "5Crw4RXvbmsq9EkK5meJabq7yT3ZVMo3WQcXyCimAd5TbgHWB3yr7JtN7KCQBnVJHhRUsQo9JFxyJQWLhQd2PXfJ",
  "key8": "3oYywF99gnhCrJ4pZRkc4HgLkNAHEbS6pLf7zAo3DfhLU3ufUNRKVBi2mqdrTCtG1XzAN3KQzzgaHeCHUP56tZGe",
  "key9": "3BBb1rnt4Ht6UWHshbkEELJdL7g6uYb3BDvrsxj3kbHCQQs4Atk1N9NYzpRoYYydDbuPkm4kvgyguiwJru28hp54",
  "key10": "2tRbYvKRp8QkAMZiGRtsDUTNNM9dqeijceskX84H3xN9ZxzUaxrhFq1V8kwuVzugFxLDDWwgAegHaP6iCTcKSsat",
  "key11": "249NjXKMZRQ128Q2Qc6YGzC9u13ciaFQ2EsdUcbVMxbM2zAEkFtz1mSP9md1MmcNmUNNkJwYd95tGaMqJwPKHR31",
  "key12": "ZfBuTyYBS89TxZcmvdbhNvRrfWhicWmTkZutnDyR9kYER2Ft2PojdCZiWPeiDWLNhsezGQ9C8hmZ1WKVnhrQbm9",
  "key13": "56qrGWpbcQDSq9y9kbNgwYKonhw8gJxzkEfVVPCAUiqj4DwxeLNSEDc8M6TQGVxGf7HEKGxatgB4ny65Pj76Xr52",
  "key14": "3k6uLs27u3Kw7UeMadw1f7P58obEGLxrkJjSnaqh6AZAg8j7EMUBZyCzCfUSUMXyYioHT9o58Nq26747JJMgpWpD",
  "key15": "2oku2L9V7bH3uSq4MDPp1BW92kLk1nwZwjpQxQxFjCkVRfNSuo9ecNTjfFAxzmUSfVfNjM56cZpap4tq1huWk8Ki",
  "key16": "4KT4YM8rFSxWAik8HNXt8nN9A37EPzC2Rh3z5KZRkvRx8xsmjv8aF4inhVuSXjKpdJcasX83KT7jpwj8nyZhZnxm",
  "key17": "uZDU8oii1v64o9eZCEPFeCH9Tv38FeodJVAZwbxBo42gJsz2on54v7A882TAgFZ8Zov7KkrPHJpvRD6uVbaAsad",
  "key18": "67Yd1XdnC6XAmFXj6CsyXxWZknvRCaPZCaCg65pib1Z7g8dfGsskDYgJuBV1kzbwW2YjSWvzao2fgoNMpuxVZmsH",
  "key19": "RS721VZnPwXrf5e97nceCgRbj6bzCS5UPEpZCvEXEqFsPF3x5dnYJcrj6dvgWeMzcK3skz1HMRfkmRQzgvrU77D",
  "key20": "U4gVoVSNGyVENvwvf9CW2mUHLHwqyNbbmxLv9bpxRJ7chfex3wwmQUK5bTgj9efLbGhj21Jpd2c7AQLQVNo2RQz",
  "key21": "63cnPxWw2ygjxZeCUUrHXVBsRkWvLQpktUbnodGEDa87TK3ZcpxmS3uuPpjoq9Xw13jP49pCAMjoAHJkidYcPyDR",
  "key22": "5r7JmFrKn9mnPKy2DKAAWZ4LnZ4kbf74Pwk2py4XDjoQsGKWmN2R7aDtLjvQNq5jH3WS626WuQLmNqLRfts3Dhnf",
  "key23": "2fSBYJaD9Cyw83nPtXMumR4Xbo4x425TEbksLbWTGeZaYiysm5UDmNKFFW1b8szXv3ZcZAjZhrHZzJHF7L8pFBJC",
  "key24": "38eJEkh2PWZGKMCTzU2nmYJfoFEmcEVs8G7yfdDXKVzE3rTSN3UW7vUhSjDpVNVioyqFiexiPVY8bvk7ZYCMgNBw",
  "key25": "3Nxz4SFVGepMF9TUcT4iBNE6qeXjZVMemRmRtfteGB5ZBUCkU94Mjefz2DedgrEV7Mpf9bwZncJnB6DQb8fz9RBy",
  "key26": "jTSHYDgXhseK55mYCxaPHfN8jQLoZreNLxZGyF6WHwrKyQQjBtacTv6owS1WsLYC6gBvxqwv41rz8WU2W7SyJiT",
  "key27": "3Y3tJNL7XbvSghUhjp1Zyhcwr3mKyYeSWGSqMCwjrefWQCZ3pShAvSf6LBt72vX94EK8bWuCHy5QkLLYeWtio8KB",
  "key28": "3e7dtqTV89dwPQr24raYTPrLSJWkrWCVo2HCDqakwtgdpwPSTTdgUMsLb1NMt86NL6aNqaNNjwtCtmoziWB5SZdk",
  "key29": "2nZdb6fo9zoqdpDrvS6nfBE2Cqi3rSFkybnHRT1VujpzVKiwXyEyqi1XdynzSzzXQQFcrVpNyXxqtJ9b8PYgXpJo",
  "key30": "3iQYTxSLbGKU8AG8BtDtEtiRY5ivuAwQpkvF2HgLgKY7YpBYCnL4iKH4ZjKrfvVYx9wi9vsVnT47fHteyUZdyqNo",
  "key31": "3ptWqsEHZwCWZVZ4ymDmhRv7B7haniHsWr9WHYFSH38QNn9RZHpsTFDYfUL7W9QfLLSWayVxpRnpQNVo4MG7Zbcd",
  "key32": "3WYZPep8xvPBqpwVk8pS9WkckELvyCHjnjY9TmvtS2BCWpKYkofhFF2ZDMQ1R7Yn49DpSrguAmchuugj1fG63Yp3",
  "key33": "5DgGRrCQ1BV5Ri2RdJice1XEcgpTRVNvBjZkadCzS31ypJdeYy5HZugGJSgs9bMvFhBgwfKty7pAjNAKmfNPrH4m",
  "key34": "7XyEsys2yhcXYotMUsB6ntJfT1LnKeTDiZFH7QrpgcKxrD9jHvNL7Qrzcagrt5UxLRLED8ksWQ4QuAHAuALMwRs",
  "key35": "3bkNQKZxPBNQKymsCEGg56WrJLx4wbGAYLs335igpnmiKxTTgJvBro7AcRD8w4xQV1k24e8tS9WsjgJ2mZ5Bqo5e",
  "key36": "4Gwi6XKrKf1GrKeQHAz2MXA5X3HALVEzsUxL6FJAdNMtg4Ne79XwCUW7AUj1yFiS6pHPbNyrehwNLarWpia6mcUr",
  "key37": "2naX1wWZuxCKycijyTsRf8yG2LdtvSH9Ah3R3iUuUXi8L4YswyNd8MBLENPwHLj2QWsUHUbX8Yo7ut9A6JEMRgBx",
  "key38": "4rD34TpkVBt12HTp7nMbznnDjoRU2X2u2Y1zp6UsUhkWRSc4FMtNCJPgao3797aQA8EYYx9zcGegmRvVNgEm7PNA",
  "key39": "4ukoH41KvapNwcXBgjgpXwifxngCMu7XJPiUG7oH6PzxipAzHPHT7rV9nAc51gvso8WoPgUHe2hGi6gkJS6aRaBz",
  "key40": "5cNNcsvxs6HywX2kTLbjmrENT6YCwRwvWpr2q96q7fVoyAMSX4UAYqfMjxpqRfXMPNtJUTvVysPRFvSiP32KPySg",
  "key41": "YD7bVzLScoNL9TZjJ8vZ36euttVK4bL2THFKhUrhqxfvh8GWViHZ6pj4kJUTijMF9g1RKJbDnPaHs3DTrECmUrp",
  "key42": "5oAUjY5fGvy9zuSK7actzunnDcPK4NRxnmx8REKoY3uRMp2Nkg1QvB4ySVeNgJ9zA8AhYUj5fYnMjm2QHREAHubb"
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
