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
    "5QJcrpSdE8m9Ji8DbBJoqA5sfZfMJgZnLECLvufkFa3PG4YdpcxUkpKJbkx9w8q9w379y5Ldhe3hpx2hdePQpNYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56RFtdPk8scNvDFYpg3j8MAW65wmfbaXmnvTNTk8jHMgyGv7e9RSwpGEVxZdR4Vm1HZqhB1x2vVz5UZPayeEG1oE",
  "key1": "2P97SeEdvpNHkDieD4nkJdsbXWovR15VRVKfgnyG8Qm5x2LAafYT9DRmKQpp7kfN3gCL1xD4DFakfkDkW6Y6Zjbi",
  "key2": "4s3qHK2JLwTuddDWLW2jYScYNZxmk4EiSdDL1YnKyVpdsGZ6mE3hCPegQrD8qwJroZbbdh3sBqhLBhqLLukEk9ed",
  "key3": "4piGwNCyaZWpMHv5VqPqmZuiLW5p3WvzdNGVHQFfsSknKe8dbUkyDenGLV2ounDiQTpe8iW78NfRTwRpgTXUpxUW",
  "key4": "FjMjwSiqv7KdmDbHVvWnZhB86iodMCxufm4KH3ahihGRKa6Vm6SVHRNnYWXfrCsHSBLZ1tHMyfENJmVK8pv8ueU",
  "key5": "4FWtPGxUE6gbrhNeUgeyi3cuZJJjgZGrvKRLGQg71mJCpHTTUPh7xJh4eRJg4yhmXK8QA9FwT3Z5fuAn2N2jna7L",
  "key6": "3q3yr4HhMYb3W61RN8QB8vBqQZcEAYovCBJHZqzGcpPHEYuATXNwMpvVF6QCdbrci2kFZ3bDJBpmgGdJfBHsRCpM",
  "key7": "42KMc5FZzASm1jgRjvNeakFp7nw5J9NUVkSiVHm9C9aHCxMnb9ag6YzzJ3VpPkWmq5G7nSFViCjQ9nauhAh3kJNN",
  "key8": "3vH2KH8VHLx8JQfNocpUvn5DkRrkRP3xtJKmzttbKC7C8kyV6VDeWe5SXrQ4YYL9opYT3kHUDmVf56EG8LSzKaWN",
  "key9": "4tYb5wU78Vfw2rRrvswsKevfSrqDsqiEpG2UhWT3qrCTMxheWhu17So55WF2XQeK21ehJKE2tvZYGzrpYYN73z3z",
  "key10": "4F2vnTBvZZ5b8XjdgWxhaWtA6pwUKoEpzfpdPjxYTmzHCQEBHTed2PKuZYfxqJJbSicKHYaUxWc1wDZkZ8utQSqa",
  "key11": "2rqY2coZSSTC9KZrt2X6vNXzkJ581sMYZLoVdF1TbpPsA4dLbj6saRGdoxHfSSCkHaUT9qcnhee7H15ghpFK4szh",
  "key12": "5n2ur9sLSP1KYM9sVdqKpd734NWdy2CAG2zJPsH1VKz9TpsZ7rcEP1aKcBZQzYwgdxwmgrgbF6NA9XhGknZHkUAH",
  "key13": "5aaYC47CSk5t6kjMv8oeoRdHLipcUBZmghBYQZSg6ppX89u8Epk3uZtm2xEqynSKUXsq1m23BVnh8sFbX5p9UEDn",
  "key14": "3fnQfKy9SKimS7pJdRf2pWrkhNRdiYJmVPkeCRVDZ1ZAFmSit197MiVRUBMnrw4WKV5YNk4gkYPaA7J5ZWTJzqqY",
  "key15": "5WUm632AmkYQgh9AKcJjy3KTbRRDWC8E76AvG1QZ4X9b6jvteSpLYeSqXH72HQry2sH3Q6tMkz21UfGoVxUrWok3",
  "key16": "4NhCY7eEDijMLQGsnPRakFFLdmN4PPE5J344Rm1xJvDK6cCVxVjdB6bj5GofffZMHaodF5e6p5yaaQ5ZkAgvf46x",
  "key17": "4DGegJfvccj2spsnuxtwkSzAAVMSyaQmBgC2P3NQfXFK2aq8UAX3X5qgZ4ct3k9ZfwgK3nQCPVfXcjabWXAZa7bo",
  "key18": "4ZDqLBrYpV5AfmrpyMHzbSrLNLLvPcwjDQ9KhEgQDY6PD3rRbRxSNQUSMd2GwmVkemCWcY8yvxujMxM1WPgZBNDF",
  "key19": "5tYaL4WPQKbQEvXb17X3HSdisk9QGoK8YkmNSo4qyin3Cs9sygTWYd9xd1SNnnqFJXayTuacwemruzYQnaGzsz4d",
  "key20": "5PhgfVkq8vj4YRDJ17CCxikEu2b6MK9EtR3Qj8HyrVzPP72WxiFJDagZEpdVSAsfh52hNPmesFLFRJpqRSqZz2YW",
  "key21": "3BSCYcmwoKx7QFc1zbmnrAa3X3nP5aCHPVp4ZsyinmDaDCs9S4ht3jieuzMRJk2jeXpBB3XF712GNVXatRacuGXx",
  "key22": "61tuc6iTbTPSMUHwe8nygLsDPKKUhjsSyuRUcGzUNZg7X4JZivyxL4MLsQihoPd2gJshGvxgnXemHVo17Kt9a2U8",
  "key23": "4n5heHxcMhE2okdj8Za3sTgqb7qN2C4d9aLXR23NDMQDqR8s7w2s6ZM1cHgSxA5JfSZr8R1Lca6rRyHeP6iQRYEA",
  "key24": "38PMeKjomdieYqYR7jpt4DG8EkjCwdLdfDWv8b1tqHQYqAVFtvWUAmj1qfE1Zs1DLpHbAHthNiftzSGzToFWrFAv",
  "key25": "4gdnL3K4rTYZAEPw4a9XCauyGqP8vGXdH3giGDUFr3Sdv8hoNwPCpKiNtuBWu7gPtzkgMQg8RxCfyygQZBAEeboj",
  "key26": "MbZsTsngsPQ6Nzy5j3QKvP1CGm4PaDr4UmLyxZiNF2r377ppDbh2SUzQGcBDwgUBBeQPfGb1X2rjLMQjLmha3p6",
  "key27": "2bTpzTVzEcsnBMRhnGf1oek19VTr4z1YYac2EaKSDckArAgyLtPckTbhnXURYT4MZt5XTiiLDsTJbRr5h5SB13Yn",
  "key28": "Jpyq3U9yBazwWwRZfW2GyRk1Lj1ouxL5JZcTrBEKvKnQVFJp9436RWY5VEdpKqYmxaZwxZoShMaPC1g6oxmoVQU",
  "key29": "2ch632SGZWc5hZ6yDTZfbPxW9joEs76Q3B9rYV5uui4FCpoSpwK5DiN7sDy4vBWzLVZou5M5YF7Vvocn1uM3bD2Q",
  "key30": "2rsRvTBRM4eAJ1MmJ8YboCU7LxiYArP65b8hN7kSnUQ1FiKMCkgj6J4PMmijD8ExzBfCWuLJdUtk2oMtLjEiMXT2",
  "key31": "35rW7FivzvsTiahViphNs3pXSWRY7vLJ8QyxTXifRbeiNUepTRvApeFmDw7AqzZj7xHX2fexnURKBcSsBMxwnnNp",
  "key32": "4WS9SJjq72eoHhpyqr82LaCfgamq2WoD682yifrfXCXUQ3GxKNkrESVVfKw7e3YaBMhE6ZQKfvQTRJQ65bhr9Tzu",
  "key33": "5kdgpsECJPpBiza8hhL4Qmxanhg7TgySWt8SAoaWhs1M7eDVp7Y8dcrkVSdVnUVrhrRWnzwnBtFCJ6ifPpc9J7gi"
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
