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
    "38vsed1kxVSG7kzaCYqP48s9S3nDsPRcnf86sEa4LbzMvQWQDzjucyMfKNt6JZDqR7Dmqf61m4L1hdnTzoccnF2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K9PPXyT1YC2r2zuKtMiUrG9jP1TqRRkFbVKWNUMncsQFJHUmZ3aHQzFX4WyKGr4gahuGjW9XfckguXQudoEAVku",
  "key1": "Xu1iEmC7QG9S26HCFFfgXX1YmkXxoL4hcr9kJRxXtLTR1nHTzRZaJndwLQM7FUb5eQ4qHy9WfDCP7YE8K69Sn3g",
  "key2": "2jfUwyN9avEJuZuvNTxdm4929Y724LuXN1zMQyhdMuZjqCn7bmwWTsawrNPy4GptGpAVmspf7q5HGSsmGGpVse7J",
  "key3": "2Z7MXzZYmrMk4sHxP6vr1REMzKqMDwnAL7FzxGAw6JbELVjwPkvPd3YmBQomNYgCYZBUMWbw8eMQVMYFeCnG5tcM",
  "key4": "4hBoq3a296x2LQ3u6Ch6KVNwkskXNPMSArbuSeEEXitVbRSARtfDbhQMxGmFa5sxbP1oc4GZrBhKTi2MDFEWPopc",
  "key5": "2ynDpa3kHyAN6w3TsiBoigezoYdXFDGtWyFEa2mxyCzh99YL98M3y6YmJ95TXQ2kSAbcQTByz7aQ4aLSYNE5AAdt",
  "key6": "4QcSfVptXR31922o96HLXvhZVLKQ5n8AtJceDp4VgmVvYWCDSU6WZ75tbJrJ36cSatZC8mVAB96UguPrFa8A1EPY",
  "key7": "3HRWGDgheNLDkq9SPVYw1JqkVUq2j4HnupPJRCTdPipC3BYCKE3byjk8rC1jpzbVJ36YUZEMYL41NWFc6xbwfXS",
  "key8": "ERvea9a2j3NTv3Wc5SAT4KqDgGeY3rK1vG1AFBCWXrCme7qeDz8L2gEFPZYBxKU3Pozyyxed1dQCmNLu1RfvTja",
  "key9": "xLGohcEkjaD3dbJNinw9N88JRWw4zmsDZLs4KxLtqvMMZihc5nq5SAnXRJp1piZxCguhwa14pBmnxL5yN5J2pNL",
  "key10": "2YJngA1UUxvjFH6QdqX58RkHMt5imbfUWELHrLFRvrS5dLdKs6njomgCHgDKkQqLeP66gsUnH5T3W7JvVrqXQn88",
  "key11": "Yhmjg8Jt31fjgThiZ9LWLSy91hMUfp7A3wJUwukjmtBFfJvQsjieWvTAXqqf1ecfMo1EWY6kB2AekCPnq9Kw4f6",
  "key12": "T3a8HVWmuqwXFcDFudLdRS6x5fbsWv56pQLrBdCMcWjRDNw2DNjnwRz1WmhGX3aLRvuwynC1GDWcYhbAc5h1SKV",
  "key13": "2YCDvsqxrzfZp2v81SkRtYBhpk87NNb83YTxS2nvMBgyMFN7zn2W69n45tbBBB5rmPVyjgc48ZsnNFoNeVMGRh6V",
  "key14": "yJumNHPN6opaQn3uwSUVL6y8w36RsQEoGwbFA6xPUUfiXTq5ajZTZenLzVajGwf4JAdxHkEa7KYTarn9TBJbKi2",
  "key15": "dx7GMkk9Jkj5qPsqLpEVcZnMxFFuzDGEo8v9EARHEx1zMhMp53K8CP1BbUypFijcLe2TfqjuwswMyRzCMiUGA2T",
  "key16": "3qTGwGPoB98dsH2MCHfEuxWEd1hKCm2m1B9Tm1YC4TrB7HmeqiyBLP5qVFy2piCxzhD9QFz2CDGaSY3KUSzbKCXJ",
  "key17": "2kkjrxL3V75fRzCeDukMp4c4FTPnLZwTD3oHnMG33bia2johy8Ro6kTxPVSizubh2p4iQAnKqdoQz9vdebqcca7B",
  "key18": "3HwH7pgGx9i6Scr6wwxCb2mHgBs8BbRxuAfDdGezB8RCjMMvvWHpR4LaZUY9GC8An1diJevWmayc4gBCR5qFbM7m",
  "key19": "5szcNCryDxg1WWhAA2PLiiHK8upFCsZcwzmwq9cezpz8jLiayVJPw9ifFgGKfjAjEgy4wuU9t7UN6RD4MsGikm7N",
  "key20": "E2qRFiaGmKvn9aXDWGwpyqsinWEYJpa7wmPueys8KwrGNj41xmxRob3EkHYK3L12bfvQuqi7mDLS4TosudajdWG",
  "key21": "wBvr7SrizgJfNzkcrZDJ1UQFiD8y5AJRUuXKqUiZuTBpSrZ1EydfvBgxojbcMFynoM6DCWsDnkuskT137L2YLTd",
  "key22": "5eAsZvxTM6hg6Y9inEb9pdeKLFv3PX4zA1Ke2rx7aVtmRBF4oUXPx5r7UuEPheKTCzzaPiuYGuQf7eseR6trUpp8",
  "key23": "7f8MSJxQyDf7FCTh3yAcv76fkpLAp8A4Kkgvpbdv65H9CopQdvUrPFMCRzhBT5PCDTdpsjqy9985XRVUsXtcxHE",
  "key24": "3rkqYi4vDJBRQrH5xFHmCYeNQvxRwnEGwPB12xgsr8d3L8fdT1Ej3RU5Q4L4gFSdQQEneFdRDN9qvBzF2zRWEgcA",
  "key25": "wmDqiWfLBHsj7f5X7uLFFPLTVibCHr8sa41aQ9QKWDzXXnBHrSCNNpELFeTh1dLFBRddmjMi6APTr9fA2rnGwbw",
  "key26": "4VAc4cqkKbUfqk5spRSscMbyuY9b3JaMqM2ZVwKseKq99EDm69VDdKsZ88MPGrVDqq65vvkpzhD1ZvZ7J7zdQ4eB",
  "key27": "cTyMWBxfrCM4ucDRTGsJCmNMvKUfhwavPHEAKiPqKoVYoy6fF9KNbqUJCnFgairoD3PwdVq2v9Fm434uUCbV6MZ",
  "key28": "zigkFBY8vPk1DCU82uU3eFYeXvUXp9U6PbVYi1vznxDxqtBvM65eEe822tzLTSYoXLcxYMggND1dNosBahBcXoU",
  "key29": "2t6YixAK6fqR2btSRYUuzQdNpJt1hFT2QXLUupuVbsQXLpHUTzK8ng453p3T5uABZMow5NxwpX2x78ViB7chFMnN",
  "key30": "UF8xE9MXHLTZUcXr31QhyhSkkGKFEzyVQdQTL1aXE9amZPwC5dVmrvwHFbKsxKd5zrHtAAYeu1pnSNka6uHrHvU",
  "key31": "56kZBv1pWb48wZ9SwNUEJPDKQUkh6pMk6KwpukAPhzKQM1TiARxfytPzQ7r3vsMZo8LExsjjfnxTJTSTy5oVJEnH",
  "key32": "3Ne7ozUVrFDhvFEN2tR95J1EDJS5TzMfajNkVwkfaWpQfEX5hit5XMdeKyxetyxmvW1MEMapwYM3adJdnsiP9GNV",
  "key33": "2o75XMjPKiDeSSFk19VGsr9siuh2veUsE3z8EstW5BKG7wUKuXV9XQytnC6cf4BjaBRCij9NnNUduCJaiuUfxVa3",
  "key34": "5nMiUHki585Jhv6B7nLpBg2N4f6PFNEriq2Uhhefdasn62BH3mTkvudQPWrijhnbhuVH5kCL8xDF6yEeAvWQuQnA",
  "key35": "3cVNgKYpvTq4nXGf9AjCdmVeaB4aymqw1H5169nMHmLwwyf3SXYaoemdBir6Gk5WyDY48Nk5JrGeFhadEBYivpNo",
  "key36": "4RzNegxeSSVzrCV6XhGnsiEZhZw2qeXkZLuM7kbxGBZqetWC3cby7RpDNrLhSFjKEi7MapoYittRPNgwqGEZot7"
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
