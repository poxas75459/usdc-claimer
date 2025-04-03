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
    "5ECicSz3KrLQhdEAViFHF1VYZFStQp5F97tcFmBf6wuvtHc6ExWHJNWP3qPjF6E1fTe6TYFeNM2LhgXh1ePMNdKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFaxbEqbCNRFHJqj3f9GG1ruBTxGCo3bzytqMMarwPWe7HN8rJz4wZ2vvpkAbYPCmW6xNc2LpJqXHgNRtRUL3X5",
  "key1": "2Sj8ijuJA1tsH5Lj2gtHRb4Msfy8CvS4FeoipNbt5cP9MPyEVo3K9scz2PBSBnNVvnbXmupP6areufaW1VCEEbv5",
  "key2": "3zPY5hGYBoKfqB3Do89fcBk2PVbc8LShpVRDgDSxxhSJZkrCAgoK5VkZCQhRvogBBGkpX65rWiwZsZmQ73eQU93e",
  "key3": "5WwAhGtBkEoZNTo3E7ZKD1wXSc3X8LmwWaNNumkBTTGJM4LeVpy9VLUshMzGL32uMCGCCe9SdBq2e3YQ9gEnwE1C",
  "key4": "3xanQFXMZxc9S6SPN2ACs3cToSBYUCsM7ZHZ1tTLCaow89pNRxK5Zy1jfKUHxMPmQfr6UdQmNR8Lw1m5weLuta5S",
  "key5": "4XALCJMCgZTsxA1qggPKrw43m7EQkNWMSoLbof7xy1c2uv4gxGHQXhwWziTa9j2upEUKhNSdrQXYVC32cmnG36Nz",
  "key6": "38t5qGZgDHScsjDuk8c1H5DVK8nuLsoaMACNHR58Rr9vZFrevQ3s1KR4ERZ28fAfWjgDcfv5v9ozfu2Ni6mG1wr5",
  "key7": "3BcF57GHswxxS1tXE9S69gMv2BxSBdH1MQEMZHpLndVfPwd8mgsaFU5oa27UvPCmMpFmJcaB2sG57CgbS1hh4WGR",
  "key8": "2bSiQiRWjxaE19ZSD8GpkoirrNpu3CCyJ923pSh2q4PW5M4zny64UgAHYAhewtqT6LCPxQHhYM5QQTpTdu3Durue",
  "key9": "4jFaR1Tqqc6msqTftmnMQC8iSBLhohP32NpJQfuxSxGtHz7jfzc2yv4GSjpkikLUs3MQdMkTikBT32abwPPuZaqS",
  "key10": "5PzpXpg6SBHFVrVyi5x1Urh4Lkr5zn6BNpbcD82ZMxNiRLy7rQgY7dPuBmBXkUgiFVPpUGGi9WwQ5pHYFJizTka9",
  "key11": "3oy5wGQcopzcWZrFpGqveWPjmZdWLP9sDCDTCEuPTQwXoiZz8pDYegTZMHzUnA9iAUsB4XNiJD2ztj8rKg1pEoG2",
  "key12": "5arkHh7CtNHCfcfFmUmNkMhzF4J7EMEpayJ28ZDKRNaEncmU8UHXLve9qcHdFgTSJ1BknJWxSMD5Nxfwi3T8zD4T",
  "key13": "5xP2DJeCQasxniJKLTJyvEEjFziv2NFYGL6FLcySkaP2f86RBzg9jMnsPNMdJchYT1L9CBykBUXpiLcnEWxBXTMp",
  "key14": "2hUWuTAZ84dz3AJERgZ4wAudtDedtiiThAM8TQNavN1zaQBNzMhx6gjwkgb4AZTyKhvCi5TCZHWtHgmuv7gwitQ9",
  "key15": "5hwMUzbrggQ46yUvLTpEdpjee26F9qSXnAoe9QiH3wdoCLRpJVbVXbd3jvuDcMXLQviFiNFawJjcQmeedXT8Zvkc",
  "key16": "5YJJiJx2Rw84zJa9nBxvDSJ8anUo1WctsZhyj3eRpdcGhP6EBoBhH2v4PREst8Fj1D26JJCY6ixhmcXBdCyioeee",
  "key17": "24UgxPeScPeQroafQS9qjRfQVLWP8PEdAHYmgPgJBPY1jouAjnCsrn1LypxSAKj4p3wYH6y5q2anw4b2KYx8EfLy",
  "key18": "2QjkNuuHXFfW3hnFrgCe5CUk9NkNGKFTXwhzkY16yHLuQSvjcbT2veeCwjyV4uXmD7i17dXGffeNCg4f4456TVsX",
  "key19": "4U9N8TCV7ExUzng6debYHExfJeTLXVKGSL553z6Coy426BRy7y3vyVKfghZxhvYQugB1EZMjMvuPpUKk5r5o1XrP",
  "key20": "42LqcYrpJyueAnQNALAS6Vt1Nn4Rq6GtQzj7htQr6uCRBGJjaT4M2HVAacmtjZiqa7EMi1RiGZNn2uotn2f4c4M2",
  "key21": "fJoAzrnufHVV4TPeGqivWDPPA6gA6htGcGVNQEW5H5EtaUqEfEPGT1DHcURzuU9qNr13KnSrvCqzPpiPCtpuyLD",
  "key22": "5haJCLXFYWG8sti7G44WxSPo3Nj8KhZzSsmH93im9pycBnzHS6fyHeithG6nSp6MostnEh6TXHY7r3X56SC69D74",
  "key23": "32rs6YR2X9nAQ88U7NUmKvsdAuv6hBzN2LLHhvXCmpY7sXdz9SwpdNFSyqLpkG7e35F7jSNw7qKsktQA2Y3Qmg4P",
  "key24": "4YpbfAgQ1SkRMZErrAmuRtoGFfD93H8ktghCfxgi2qrRC1oC8qXLNmRSLR2tANzXyUDDsUoH8ioV8wEN8DnTZXEj",
  "key25": "4RWjzfyKHoT4CNK6QThu9Nbk4TX7yScmE3maUu3U1mnbijYrVzNToM1XVNmi6Di2jnZSKZp1vgQStndLRcUdtF5P",
  "key26": "3zsvb7gwaZf8VC2jVj8uim9AqxPakbicsZ4KJVJnXsvng1bweDPb48G91yBafeQSSSv8P5mmbfYEas4p8Rb5iUJ6",
  "key27": "4CpKWoKRnfHWkaAYhugXfcXgCFZvMXgHpoQPDjTRu9FcTqDXFT8sUUfRzn7i9fFwXfjUkLTwjjpk38xy23mKQwoi",
  "key28": "s5uofVJ8HVUnDJw2EpB1VWsnwwnXaUugPZ1zsm1ES7MxcsYMStwproATfPWzU8fSdTRNSWsmo6XCWRni9FJB3uf",
  "key29": "2QHSnRS9C2jDBWc2EzMzH5pTbo6wq133pyehspvMbUBgimcxYshYReEyVZkS1mj2gvqiDKLmviiTmH4cq2JU38sF",
  "key30": "64hks5w2kSsDqRkBqkwr4wi3xawX8eJCnUhnvyJSypkBwERBJF6nsJr7TyZFioFfXgSyRr66LtNgSgmEhUxx7gqG",
  "key31": "3MHMRmgGVwjQoNbMQPXs1mv5rJqytSCrwzWaLjjjUUTxiEGZTgqoZYdQnqENMV2pLBhRHghrSgZVyRtxWHN1bzYN",
  "key32": "4s8SL7uwHuBbNhpSXkeszSdFWaUKh1gShRvoDTzSx1sytE4kYhYJgiNBVi1TunLro3fxCfLYHMZUYW5XuSZPzdkc",
  "key33": "5DmKgg5MTCMqyokNzna2JRUKseBEUZ8hmB8vrHWZdoyqtW4FXoTxGvUwid7eeMyPouVrbDJ4SAyPtpabZXWVsTeh",
  "key34": "59AspgHcWW5a9tnVi25EpURCESRTy42Fh9zZFXDedi9cPGrXDLrPW2CRCTVhKQwxCHmKArVcEzAbtGZMDa1Gzax8"
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
