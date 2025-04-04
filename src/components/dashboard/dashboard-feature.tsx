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
    "3x5hKwauwrGb6bBDX7d3YNWp9kXTm8twBXW7zFse9iVaeYz1f7Xa5Znk5NDxJG39Wf17J5XrtZ2N1xwuStDbH7WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XpDeQC9dWKtmq5UFGkVL5dBQ5dFr9Jqaobw59yfBS8HxYg4mUtj2CAAQxvJ8EctN5ErrhC2nWiKqxXkCpvyHt8g",
  "key1": "4rcFz3yNH1FzmQ9nyTvhdvT562yho4GMb7o5Qgt7bXwEFUkty9SRs7wUsvZjGsAFXPf2MLetrw21kJed2xC6CnAM",
  "key2": "34QWiG2eST8bzPmgCYumh2thD9BZX9Xw84ZEuQHeapyQrSCCcAQynT9TAxCHZ6x1tiULLq6hUdsS4jN6murM4t95",
  "key3": "5LEJLJ3W6pgmuCyYCxD5XNZGCmV6zvsLX96125QMifkmjmSLaVPm77ncrkwHLMPBUrDacvNUPEfvFfhjZVvXuVmW",
  "key4": "1uFPomU9MyKypPiA3TCMVgrFvsVf3yu7DtdwgidcR3mQAEVzpgkRqwtcSr2WHTzfBMDsPoqZgKfoU9hnSWgTh85",
  "key5": "3wRcDC73YSJb7mBo5YR5UYBPeWWvyC8d66qd3M2cJbWU2UkaiP5pMy2xij6SoYyVAWuGv5xGqfqU6gM75emTxUCi",
  "key6": "2rm3fUqoa1goae7YjGBFXmmavcZ7GNTNnwGVa15yB1JVmPuSbxcbknaH1Wo2GnWNGEb1g4Q9SKXZuidgWBPtqdJP",
  "key7": "2yGXe1sMpcbaLJnNUWHRxEzd1V8fUA6jr8QtkCP6AFaFwniQphLPre12xZJzLFNC8uGyJLoqE6Ud88aMD4nU1QKZ",
  "key8": "2qgE1zkHhv2tMZbqj818FweUjDPoSVB8ZCCRuhQDq1CdA5priDMCVaSVXrVZjTn7qFTXE3dQ76GyRN2Lje5KR8QR",
  "key9": "2eQaB7wiztMRTiZpUAYzGPXuYov2HFdsLzaQJjXrvZqXteRw3LmWv7h435riUMmxobsZNPstqF4BM8XVU28YAiCe",
  "key10": "2L5Ks2xThh2q5SgvnfPrERxYkjCgyZwWQQecanbnjtU1mtP9undidiS7EkigxnXmsc37q5yD3vN8DRrPZocSRwa6",
  "key11": "tk7D1E76Ep7bAiQSQVHnrUBm7h9yYpcn3YVSjFsgp6M3gwAdkBVQtdRkMVeeLKzTwEZNnQb4n49LJe1zjUKzDiN",
  "key12": "4DD82mrThaxi2ZGR6dD8yvosHb5jYqJUKSqKrGZf7bfE5kUWRxH26Kewct5i32aB8RmjMZFpz2rFQHhwmQDfnxdi",
  "key13": "4TUq527SgWP2GtY4pDroqju4Nic2eiVQGZqUAcAgZygRPk1xfUq5RTRcVNBpn5fk5ee2Mbf24mvcvaWe2UEW4ewH",
  "key14": "2GtZQYqjk56538STh7mS5VoXftHqk2MbowVRp5iJQYtAwz3W4TE3xr3xcGg2q6BdEchRpeJVvhFoXaVXkCrawnBq",
  "key15": "3AtmuyXMUxgN68ffTmfZ8ePNQqSvFrojn8m55jBcpfSWtWRujntSkNKP2n4xLVyMFUCmYLtamViy793AK8F8jqGj",
  "key16": "5CetYgpvpjZb9taWXm4bSFq9mnc4VrdCSS7aTPSYryCH8wgS8BGAC9HNmuEsgc54f6UpBfNGjhZ5nq9eCYSL9pBC",
  "key17": "3WRPPYtJ9iiuh6gtTusCjNRnfQaKjJEMCx97bPcoVqeqHXmStt1Le46rY4zhSQXMC3oyPVvo122JqzaewmGtYyi4",
  "key18": "2XYs4gqmRZ6NW8TFoGMtrP47gENrp7H5F9f8SojwbPEXeqBFBA5nuwjNE7s1e98q5oSdQi58cPyPRhV2LzYZkohN",
  "key19": "3KYmw5o8aMjPA3J5bRAyBNCdxNLEXYtgL2NBRofifR2pQJ9T9Av7ycLHXCV5QbRWjvmwAWJadWGSTRKYGtVEVLZH",
  "key20": "5bNwRcCS8ix4QtGdPc1a91vxX53uGP4AReARqeZfGnN3exeDDboAVRg2iMxkgQqbFGqysC4hr1uBqH7H1C6R5ymq",
  "key21": "3zeP8qmEXyZLkGDAd3YwnRdzuYKyJVCFcKZgBwD17QAuKx8UHxnnmq58pXmNZFoynE7cDELCMY3b8KAibMmJT1xx",
  "key22": "5ht3K2SCFQswiaM8iJbiGb2Big7VxLZfpSxYkpj4EC3YEQTKQMCANm8wLmzUhbBiNCS8z7bEAgFB4puKDK53UcGV",
  "key23": "2R1NaeS933Vnm1xKR9DchehKQGGfkVuXgm1WpwUA3oqGKPzrPTZeuzUarkUgC548GmdDfDsNTC3BpFDhexDADtkK",
  "key24": "55Nswib8F4rqxwDoEAsNEvt2XezatVh8VL7wUgRZWRvRL5BNSbykQQjPiwRC7vR1ZkBa3LBjEm7Uf8WisGphRhrY",
  "key25": "2uA3LQ9hJ7SpcwQ4Lbd8q1iXxS41GUZcRwcx4M1xfHEqsFRXcbF4CRS3wL5aHPffE9mGhStYv4bMQNeJrUUYzoF1",
  "key26": "3p6qjktLuGyWTjhAeH5cNidyJK99Bje6jsMHaGkeERZik1aB4tdYNwConXjk6VCfoirdFVq2UoRhTHGECeSGXMPP",
  "key27": "5YjuWubJT2vmZc7PRWyDgX72FvXNSFX5P6NpEVM8hgLGuuAVshAHgi4CjTPaDeWbsVfWMSuqJ7sY8iw698xfAvFw",
  "key28": "5RSdkwUSZyVMTmXS8XWL2Aozm8pAjAK3pDEYcMtSe4G4SiL2V2tLjBi9TwdBpMjCDqQoaM5gL1iHovodYwUn9u6c",
  "key29": "3ECFs47DSvbJQBNbfECY6d4Y8MgqRnQdgnJbXgyipv1RuRf8J3XktxJZ1myrAPbJAWHDYfrqnampwQMYFTFYT7zN",
  "key30": "SigLTiNxUDN4sHix2AVxUofmfPUybze8CAHaU2cdsKUqPQvdRcNe1itCRx6Ce2cYApzGmLWyGEmApB7wQmGjRZV",
  "key31": "5NtsVBjwpZrEeF9m8iSyi5QXScTuahs39XqtYrHQfY9uNHXsgDRCNKoCrKnW1ZiZ1AS5AJCovGKCknyBuozJbYE2",
  "key32": "XmwtvVGA8smx9AfS4ixR4b3ZFxWtgwXw1JWjDrrcU5f4yyBAsx8bWVLpAx7s6hVqNMi2yUL3jDnMBawqSbiwmqE"
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
