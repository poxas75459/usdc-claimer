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
    "xFhhNk1NAxdYHTcPoZL7wR6kdq6nDC8oetgP7BWQopD9yHXkKVWc7ar2HMcnb1Niu2JPB5HcqhFR27aFQ6vyLrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbVqS3GdkG5CqV55rZN2VRpebzybSaeQgLhChXHCCA4bhQ8Jh159q2qxGsk9pzi95oVM2UQ7BWL2AdBzUQVMVYu",
  "key1": "4xGMgSsKBsXoXaY5ePu2ZTTSW2XiQV1CX71ZFsCtdDNzGVNTa9SaymQRM363GNrfMZQZ3KihBi3EH6sYUtv2prKi",
  "key2": "2UQp4c3QJY7efcffFAFAxK6kS9W2e28rpfmCYZTa7n1TCtHCPgtjmdkrc6gtVVDnm7dfQVHXiMkiQgcP51FoRGpf",
  "key3": "4ArpEAnAvEnpDih1j8bfa5ymyUGfiPupi9MHWUKeCT8qFTac1cbMft2V6mXumPGXRJBNbTXa888rT1sm9Du4ZF1T",
  "key4": "4deRPvdYLUmvoKnfTNSjk9W2ZMqX9Suh7Abm9Sv4eWkCGeeL24qa9ZqEuBSNmFY64Cn4VLPfc6KV4mPnWARt9Ye3",
  "key5": "4UPL2rKhw2kVjo7kEhy3duwbTKKtL2CCyS8xGQxBjWkg9iYvv6qQUUxtbuFz32SqbbZyhjSHJ5XxoeTaYvpfzZf1",
  "key6": "4fLwyuvyBYtWm6zfxG5S58xuWRBcgALy1V5ggr848QxZ8YA6XTirTiErppkzXFcaLixZBxBtGFqe9Hb5FvKDAMmP",
  "key7": "5vBDZwUiLF5uJYx7XEH9NV32v679QjLWo1sEMeWCnBR3q2WeGCPrGstRMKAmNMp4heieiJQCBjG7vAAX3XRKXQgD",
  "key8": "2wYbgRCdgM7eWFrcce53EG1zeaLAazo1ELzsWAnrAg54nXBD1ST2jnyDwrBHAwyevr3QkqcuJBppPniypqrZX9oC",
  "key9": "2mvvzSpimctkZQSjq4WFULJuN4yhNPDYiNtchBCAaYp835168CVDsf1G4MDabisSTtNqW9sjqDfVX4rg27YsTLFY",
  "key10": "5EGJiqy2UpGEzxZWu58857ZyuECdU88xS1g4QRQPbBqDKox6gJUVWSZserrGQpZcSkVXWhaiPLH6RCdfxxJXepCe",
  "key11": "3oNnXYtmnSPmYPYuvHSiKxymZFgbjeSeEat2EskpeUxJxyFBe6aqPD2o8s3yD6UxG7wAkLQCYwFWW9NEbmCWPS6d",
  "key12": "2mFL5pfcL1zgMSEyGT8GNrjDTSjQhxK9NZiML9k5iqUZBTiWnYZPh7RHzFUQaMPLhHQDeYqGnd7fJ1C6DRdnwod8",
  "key13": "uJhYykrsXMKCSZPnNv7z7yBH32TG6XiVt9pAozDgYpRrdtEVsBjo8Abx92focC6w36MrFVPWe6SEQcDg9YrwfNq",
  "key14": "3nAd5imRWEiMXpysjMi9nfpGnFftgdr75CDzdF4yT63ywePNzK2bnkTdqwhBcCmac6sUukPvuJ4LMfcMjdr29KKT",
  "key15": "8uhpmeEDdnRMrucQ3giWyTD1gRfrx9qdFAsJDY7incWNyUAPsz4qjRDfqomR4jEKjQf5ZbUtEQLzWevFqfFxmHi",
  "key16": "5TEAzwo9gW6kpL5JFMALaFoKyH5KFhteeomfJ4VmAixV8ansdXimc4mTPKavD4DzVkyQiKJEhj4d8dBYLnXSoxWk",
  "key17": "4dp6U7jF5QHSE4ZKqALgvMfJCXphdpFRbUV9mMVk1wNntiKoX5VuPca4tucQfX4oeqZJXuqgwtEbMDc2WRNAhZVg",
  "key18": "2s9M9gfzUzUM7gcsWFwwKkG8p5JKUKHreW1JbAZv5bPU7wMAxZ1UAaHZhma7TkbbbTpkN1NmyoP3WQME7XxDSZTL",
  "key19": "3grKX4nMXbqrwtsohgpfQWoWjiPMNoUoDfnsLZkuLyTspJPKDf5afVgUS9D7avbmav6gbnZDrKEqZZqNRK2p244H",
  "key20": "XufApeDSQfnGSJkKzbpT2C2Bdp9ojcSvgEgKMo2XkwDJ6sXYbXM8ky4nR1rPTa1webNxmqrfGftuMYmJZ2kKELH",
  "key21": "4SRBDmzzzeDTRUjNq2ACBhhPVvTqiUfcwBJpLUqSfvXmGtcWV7BwgRDhM9DFFf4WhrVJ6oGjdsoJBouiHQTuSgqD",
  "key22": "WvAT3J1MgKQ7ECuh6UN1BTWycJ82JhrRye1o6T7kBGrtSyh6Dhrah8tbvfBLUamkRXfchNNtR6ZJtdZmmqsQyYf",
  "key23": "23Q17W4mzNdDuw9iV1sCLzCG51HU6L2T16pqxNEwR3KUjCwVTX7abkfeSXyxGfFhgLUHRRyCjW3DUPxETxYDNUsk",
  "key24": "TM3TQvGYwNStFm3yCV5RXvbUy6jyD6NVXburyDRG2nxnfTH3zZqgWGD1932ithbwgT5vH5Q5CafMyXNrSzogRTu"
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
