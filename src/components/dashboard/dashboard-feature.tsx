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
    "FVwBXgc9hX52jMtwcJvuNrV9sLVReACTi46NrLazfM4bMZY7LBTtmuuUSDhTPfKyJfX5qFV8TPCo7ybFBnWLVHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "122mKmQUw5KzQK9u9QD6Vd1jWcWjJAjKrReWn2CCGJzk21aVCsySio8nTLiMSXjJdt6nzwhWKii9eur1MKhMn4V5",
  "key1": "373gzG4Yvcc9kYghJYnmTigjjXicLzPjX9vBtVTRjuRXEVazHKSZwPjeqAFoJ7GrgZZjYm4uwqA1ZEX5ZknxHytt",
  "key2": "5m73xqE3TmNaXw6zAfufRvYrftyyq5uRjMW4yFEqXfqPGRzexceQVc1eHZU2kwmqRaktup6CjQT6N29wVPMnEJr6",
  "key3": "5djznV2BgY1QSVLMwumUufpHmBT1gsL3AMvtpkVVKbzizjdAxLV4qgZbC6CPfZvxd8wLTNwKHv9EBoYT8DJRN1A2",
  "key4": "hzEspZWBNBQbT2sBahPJpjwYhovbiVuKP26yHQogzLVkxq9NvxRECYdqpKqCmDdJqJZqnF22zTLn1SVdxZnPV1A",
  "key5": "Ja2i3uNNFuuord1Jgq1QRTa4Df3UC7pX6272k1cRr65UfqVTbxVpJt6vVW8tYCXFubVz9Z1CS1Qbxb4XodBEcMS",
  "key6": "5BMGo1Ezgzp2z74Rgbv4cPEwEFsEEwLJqtVWpzAJF67Ub1ajvP43bCPxueh8NXXbGvUAbV8op4Y4bT9nwQankaoX",
  "key7": "5MvDi2Yf9NcqEq18C5FCcnbme7vXu4chMGr8fDYKWp2NxJW8mGFLjZRaT5B7FTUUY1JZBKXcPpwvSzdmkn3RhN8Q",
  "key8": "QJdqLp61VJvXHiB7gdK1G3CKSxr2pmFJfWqPAoFj6FzvRXoKB9D6Ux5ePEoV12q2e1kVV1FnxERXko6R6HUW2GB",
  "key9": "4E9y4sy5BDUKbjd9BcwwJLa5dRzUXZpSNuhFQ6qZBTD4qnCSzm2MF4pmdmWxeADwqf46iHh1as1q23W3oVBTdiFk",
  "key10": "4oyHPz8HdexQ3GAy7y5Mp3omQLVDGuEeLEFt6QWa9JrYqtNaq3x9K3aiRCdLmePctqcTBs3wLfbHk2MhcbgWbaEv",
  "key11": "4iNw2jWyN99iFbtoZ5VqgshKATWPkJH8juEURQSieh66rLmcLPtA3iEKZrWyRvgPdS82oHi1j3aYYsxjGoUShqxG",
  "key12": "5R6PEnrL4UUJmEY68BmyK7AwFySp9GsiiWDqzYAbnAHj6e2Dmwxp9qfwAHXA5cY9aeuT5gqsLhJEPBqq1hYRvDc2",
  "key13": "3ErhypKgQSHMKp2KN86UevhwkWrn1Xf9Q7MoN1NKRgM6ddxxvU1naRVr2EXYVmphcro9BtnkE3KysPb3bU5u12tN",
  "key14": "4dUXMv8WX9L6RtuYQX67YKdPwvXep7tUTkJFUARXMBL5uyYXi64vX9AfF8TKyicLK37C6B7FLgQxSBDL9AzLJNUS",
  "key15": "2AewPBQwTWa1JJwxZRkzo4izToazDTs7v6NKZyd5gVuH5psutWDbZzy4roc6ZELEMGbqLeEKd8cjmxKsBkvaaRQD",
  "key16": "4Xk5CmHJB9puXYJvirQRGLVpz9g9rhcfSrN5mcEtaHaUKtH7MEaDRXkJo8CExtweh2uiMwhBsjQmqwKb2GSxK2Ve",
  "key17": "2zWZ75MQ7kJBiJpSzEyMf4qqNCwEm29j9AqCzF99RqR3Wiy7igMFrshtb5oGn2nTmACPL3jRyS8MMN7WkpDbqRnW",
  "key18": "4HUsDjpuyGWEaUxx8AVd16paYpX4WtkV22pVigwKH7jVdF13mUAbfEhHN73iR2xfKKTYpudyF6vUZywT6h4AVeE1",
  "key19": "61bTp1ZLuiuzB3JH9qGQu1gjmeEehmHvyhvrmdmDxncKV5m6VPGRKaaga7TZNcZJstQVw2uTf8ZjzLZ2zHUeWipK",
  "key20": "wvrwqQSckmeuCF6Gon4aS4nLLhVG8Qijb2Aa8NTF5xx6pSHsynwBhV5tQ94Xsz4SMSNYqdjfyQHWfUPYiFCcv37",
  "key21": "2PvGUF7jRtJf2rxn1MzANPpFERVNFjhGuM6u4xBozRsMsCvJhwQNnNBwbi1eNR3xuHt1qhr2rVvwRijxnaJLmTAY",
  "key22": "2AX8qVBAE3eTewRimvEcRKUw1QMUQjuKQyFfNXyvjmEshmbFdyGAGTMDpf98sjc2TxduBh73jfQjKYsG3nLWEN2P",
  "key23": "iHF7bprA4964NguidXUoWvfziXH2JbTRB3qyznn4TPBew27LwCVXDYRdB8Nkhh47D6WHwF88DGK1PuGRk8FPZBS",
  "key24": "619D2vssaY6EVLEJKJDByFGu2fwHBCabDXuFEMY4vVrf4EEuSiv31ULz3HEETZUfoxfriqYUyTwW1HNL3qrWj6xB",
  "key25": "3LM5dpV2n2DZ6gSMwipyS26yf49xp955ky8DCeTHXF2v8bmyEGCMT2pAH6bvKBYWw5RXyhmFBAoM2cmdpaLtVqvu",
  "key26": "5NzChGRPiQDkm1CTSXi7uPNFcs5BkUy3mxzfACq4bg5LHZP5v94NBCBdtWBkEds9K7rPfBUyjyVy4t9AGS6C82sf",
  "key27": "54JUv83gA6sYBa4YDRUNca8jQwYoocpZdUB1tvrfU4xkZaqqgjrcDSEDFBW1TKtEsZEjnv7FVNvSfP82s31AZrua",
  "key28": "cW8fBMZJ2dyZ1w49vxzczxMyWn2KPzXwEGnSV6AfXiJPgXfGydYndFPzJSgWgEEKxFSsw8atxpC8L5hchB5fuLR",
  "key29": "3QZdP33mkwe5kqkeENWBXa8yMh9dX4bzKvNGjPFWkZGys2mrCGNaU2pzuYf29b691Cd9nkUN911SksWVdxwFP1pj",
  "key30": "3vmynQyoCpQhEWXRizYMU4AwMcxoA5b381272gHfY1tebRrW7EHy2yR8E7gWzBuZA2jB7wchycLJyhTQNvvUBPck",
  "key31": "2ehWfwBztMJg9fK7LgcoUPkYdwXD3DMiPqT7aVZigF9vnFh88h8MdozJEj35EdMWJbZBqsEEtxSDdfu5Y5xmWYje",
  "key32": "2VZD8jgacNA3JGoiPhXbhLk5mMXPiwXbCqBQuRJxnzUCa6Pmu2WzRVs8smksBohvbC9onTnSR1kJzgeTSNcYQFf7",
  "key33": "329aSGeD9jm739Mfub43y51LeWcT8KpSxGDGd37pciEHDKSW8sZQ9cYZwv8yNX6CmLukRUWnNt5Ps2TzEra67S47",
  "key34": "4oYWmUyYY8YRU9QZbx4ijQNqfURoRNnWqE7sYsyLnXq5m3yTDnnkdyBx3bkLNAseQCWxFH7v1xnbFceRbrGcR45e",
  "key35": "4VoXC14TFhSRMUvoUBpXcocAsj8tbF5X2CQcyadXks6idryVSwegWG4DtGyLmP4j2AokTLh4xtehRGHu8jHRKieH",
  "key36": "3NCfqjz1Ti9aM4qMRHmoptPZTZz84iLZGutWv1ibETLSLDK84GBXSPLc7FPJ5xsSGNfpqRC8bQB4nkGGxAbfykx7",
  "key37": "5nYds7TTWSyVjGxPUNRoihJZEecMHEYv7RfrEyRQBzTDD1qRGvU56cpPNm2CEgxSevzDhkdRUQ6Hoyc249oQDoiq",
  "key38": "2NqePFJMBQ7riksG2gBia5s3VxZw5wgtSkMi7NkFaSi2Lwe91JKozCiRh9yakuXztkLuLRLUygFchTAJHtzgWFcx",
  "key39": "Qu8Sy35Zy6gasrrXW7bHKx2R2NSQWJc6w939HqCYragUffEp2xr7bi5yAki4vqV33SjzEfXirWbfEJ8yuAb8kht",
  "key40": "4JWngQvuCxCmYC2tcetmCXPB4fVQ4GREfxXV4hJuyW7XScNc33gEovWFK2mqn4Uk1rKW1eBbaHRvAQmzrnyAqAXL",
  "key41": "64yVLgmZp3NQcZWueBE2WVgZ8238LbdqCbw86mwXmkRUNTNKniPDzvHtDXUPfaKQnycK7pbydn8c9cUvYSjDubHa",
  "key42": "5WdmUdgVNktedaDQsie53ASnShbpK26mdcfMAqwo5GkdhBDpypgRiDq7knzFVGiUwQiMFz83WmdNxZa9PVD5GXtw",
  "key43": "5ykV3NGnm4tUqiNkjkXLJoAGTiWJUuiLQdNzziXKLXSmv7jsxjew1hWWGtgaThq4YAsFxT1nw5nvP2Z5SJ96CoQJ",
  "key44": "kuk6v5KJKFpGoAoQ8yfJHDc2qL4XiVURn5p9v9hN63RmtGxBDGQqtQPzvUEHVwPox2LmdnBBxouPhXkTxghPGSU",
  "key45": "3SKT8DabEzui4kbg5v1EeK3kJDuLbDPFh53JXHc3sK8E6U5m2yaeqnGmr3m1s3sTFJZTyyw7NEQjEk9jKMeTwKDw",
  "key46": "4fU2jxw7UMCkZoqWz5LivDxzxSbmtK7i6NVnx9Tua19CacHbDW4JPY4zmTWvhPkr7sLS2Rtqdb9U3TKPcuVMeAJc",
  "key47": "46tTcdkM7diNWj7HNZjGPT14Tw47kX9SPeSJifzGTmfQByL3d2LmQ9wNMPWiP5yctDyfZJdgLENvGAQQx1DRNpZT",
  "key48": "5ZX2ySqUtSdVRmFkHvfcWz5AtJs5zeyt8DBaz3FFU4bn7mosNH87YYrszWg4irgdHa5ntg7Ekds2Nc7bUX3sXcLq"
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
