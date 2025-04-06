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
    "SMDrS3oEg9sK8eoE4otF43zRib5b6Z1MqFSjunDof73vY6DhQxGu9ZWKAc6xWa7aCuMTA4ie7eN5cv3oSUnwV2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QSdS2mQCfeFFf6zaa3pihev2qMiD6EX6XjtRmSMPLPca5iGRaJHcKQQvKZr9SfDpXMmK7xEL8Rkx64gbc43CnQP",
  "key1": "4g1JNoeNrPU2FFB5ZgvTrtT8uzVVtCLbG1PBGuyKBcEipNKPYr1dANsicbui1PU8WPD2eWv8n8kobB5jab9jynFy",
  "key2": "3K96foTcyH2H5PgDUDvQk6aJjt7nXat1vNPTV3G92UBioiA51o38YPqiC86i5chi3M89mvpRzWnHJ4EzJCR4TNbG",
  "key3": "ctJnJEtUjoqs6YMAgjQCJGd55fMGU4Hgd6e2mkuFzAhYX22ntMuEc8qSF8AnpS6TkaYmaybNAyGWCNXLP1vYdzL",
  "key4": "5Eu3XL9HVgR9VHSC5UBWWpJCfzkJWSkR9YDeRJws5iz3duryYvPayzVbetdd8bJpCrg6ef7bwvg1fu6z8Baii7TS",
  "key5": "2vseJ8MMeqgJ8vEvBaBZhAcEdWcBEXd9YvNgn6sDXFhd7RGn97d25dSBv4eERMjpLbzZJskVUiBbcgVkjji9zHnQ",
  "key6": "5QhAxR1T71CTFixPEiEUZekZHSwXkPQ9iGC7DtFb6dReiqtHQ5bZK3cdTVxEizmznQkdViJ4jgoE73o4R5CZMM3P",
  "key7": "5gCQZDexos6XmG4CLW8xKpKqS8dfLowMt7AYv1qEePVHskJZScEo2GPU1H9Hg1iCHf913XcEiQiZ6L1pdiyUaq2",
  "key8": "5gbJAJ8bJ55siYVDyP3eEarH7fdFCMG37iAXHkXPFJKC1bUE1wmKQiUGoocPZb1F6znHGzEWMFyAS39gSVLMjGjy",
  "key9": "4GXr876nk7cuoKfK1yP3ddGkCDUUinizPpTaJpctG6tTbXFSQuVurb4MeLW2wHmW3ZqV5iQLWph5UmfJfwK1WvT4",
  "key10": "2p457APrXy34PUwB2h22azmBGg8NXgrAjbUaEJ4EXqFjaQiNrZYQHh55r5QMydJptKgABcpjZrnbowJQzhb8adey",
  "key11": "DMVx7yt88U8P5FJt2wy8uPGAwBXr4Dp8iZeyd8JrFRDQvGkEJvQa8gJFMhYHP1Tkp7QJarRtkWtGgAAESHngjpb",
  "key12": "3H2CE9C9bwuhZmX9VPiJP3esCUnrMH6DMvsw362RgRHhb7BQoGNu1QsYjvFM1rgfDoJNSn7UmhiLDVmSXDGKXXwp",
  "key13": "VBqoypgy13C4VkhuTqzNMvbq5qNjsRJ6nuMuutyjoEi61BLB9QYxH1SeC1PoMGLDFHEiaFhahRpWXky9ZzCLaDU",
  "key14": "5yaCNqcLwzwiAt27LWMRuXsqhxhWjCx6pBUPvvkzEySSKBkv2aVJtfAnM3pN5U4HoQGDUCpH7hkRikW6ZZuHdiCc",
  "key15": "25Hta1Twe7QeFvo8QYRYcA3stF1c5Fbstgo1MHBTNyaN95mWB6bgB7ihy5wHutu6pe7cquyEVCVBxvNQiyFHtG2j",
  "key16": "4eMvYxec4JHtpbkNdtoPiDMdpzCHKH7dmJTLMijpcmyCnUztbuYKYCh5kHDVuPcrnPrQMqMUgPax75oDu4HRqtTH",
  "key17": "vd3jf9fWS1kw7qPMVuge3oMakiXAnSqcceKGScTukPiH5y2L9Xw2YHdtx3ZgorPbyoEEzVcNE1NFTn1z783GWE7",
  "key18": "22ywv3WFc8MqTTiC25X8SDiZbNNLzdiaHbW4U3niML4PqwxBvwjLazuDNvy6G5jGYdRSsuia6fQ4ykipvQavayu5",
  "key19": "22DnQJNeQshgP1ZNc94UazeTdbrYtuLh9bF2r1o4kSh5DR4c6uSw49ayVQGRbda2vQxCCeNCFmdA1CF48GaUqdsx",
  "key20": "5fjca4m2PEDJYRWbkxrs9Eb9eS53YXMhbb2CAQcGmh8J37Fo268dkxdTXaMFLCLy3t1qB4dn1VGhnheLRaLVa7fn",
  "key21": "5Mrah4MnUo9MdJMecRkFDgmiYmFhPH4uTNBx9fw8cb227dsfewkbotrFJJVVVbiSJPwcLqbZAYzEhdVeLNY8Qayy",
  "key22": "xUqdYMMzzkTNinsLEfPjRwWFnMeY34LVugRo447JeLV3cbASn7x7B97EsTSQ2iUqqU5Dh9UCb3mga7MxZJAEJLY",
  "key23": "4P56w98o6pwkvkCetwNdj8izuqdzgo2zi1cN4gRdCof6o9nQe484dQDaJP8T87MAhwtUrZtBnMGmffPcLjkh3SuK",
  "key24": "4ac5BBP9HqRVzZYKEwmKtcUq9NqrXnNjNwnw29ej6FwiYZEPajCDkBcvDdUgiAMiWNJjQN4UV9h8LrpmnYsjECuM",
  "key25": "3ynwc84tpRhiyWppJYaeq3y2V61W4hQvSH6hKGjqwJiF8wn1GGHsxo2E2XvwVnPFgXMpkDxej9hwXYRvhCoS5gh6",
  "key26": "24Z7Ct476xRob9i4fVHzSPjzEozNUsfLjVdadD6j6qPk3pc88bZ8U1LDY9vKWVmGZu3i1yfCVdHrA5Wy4UMLpXRn",
  "key27": "4Ue6uV1YbhFF5W17zRrU8eKixHgCnchX7vusT6dkbE2Pfaf5PcuJnvALo9453AAo92cBHuf7pZvUUZuKA1QnmKi4",
  "key28": "zXdtgLHPycEATp2RHvWDDmPTvumSka1pgz5vBNnW8aBuaptc6dVToaJCqFijv8RSCYwEj51EAi1foL6bgNLXrHd",
  "key29": "4rryFCCH3P9fWHPXPLYj8rmVJmi3XkWVQXVmuMMM3DmKd6XxWirNdL4ubqKXuW8jAeb7mDJwuhH1jD3hQWUAhqvw",
  "key30": "5TJ8SkuAA4LVw6qJAmug7W9cAbi2dpkzZwUs225tKEvFhJjGAqkgjsEoeG8DeLsfpNWWWL8ysqK1sohjEVepufx2",
  "key31": "38pQyrwLsLKzQGBu5z8g9MzAgE6vB5mqyT98yumQmP6ZmoEeeYhArKB9e4bskLb5jHGRfGdnR6R1QyqexSXdXgBt",
  "key32": "4R9vDxRg44wgmXpSDFYmEozATHK4LmzYVK88RcXHdhZ3sjmEjfW4onfnN9xLEfhmoGCdJL2awuN9uZZcYv4sthWk",
  "key33": "5HwXH67DB55UUjvzRLUmP9uzGzpgncZP7gCwZQXhPzqrRSHx7cLNXg2bfuYfnKAP2jzuatc3riUn5v4zXXGyScte"
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
