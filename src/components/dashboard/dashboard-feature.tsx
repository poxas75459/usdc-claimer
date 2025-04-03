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
    "3fhuXViXvngJQAcuhuoLj3bRcJApZVDwrXB1ZPzHTbveDQRQW4g13djPPpPEkF1h6EXLdRdcgsjEMpKzjYyXKHt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "259eJJVys58cxEZVhKRZnWo6VXekH8Dg8WpvZN6M2VWZKQokAGw3eGpyaC6x59fhh3sUMndQ2eaYTch1rufUDvhE",
  "key1": "fiowH4wUpsQihAs7qXtgsKBHbJkZuUKrcht8cTGHpsD9FaApVrcWg3WTGZdU5K4wrJ1c6hteBisS9dpQxqbqd5h",
  "key2": "2MEr8stywWFjnkVLBAYisq2gMjCMibhDfVvDsc4XgPv3rHATxx6rCcBJwy7wNf2jN8xqgTce1qb5aCq5vDHELAnw",
  "key3": "5AQt9YtNXH8VSbsRV2tdi72P41AjF8juap9sV1bCJvEASirpP42vuA3jaHYiTC82BB7Xrxn4hfYUxr9KWqG5tCxp",
  "key4": "3dLVmbUGKcYTDdcum2ZLLbrDSV45YJxcxYhEXW2GnJ6gaDHh9eSAs6E8W2W4jC7CJ53dGRUykApMwVHyYm67S6xu",
  "key5": "4WKxAfMBwGEi3ikkeqH3WhfrCz1cYqGw8BXsiK8UpsgJDMLQBoyGet1GgCSoNeiyPCUCB6JvYJzprpa2kbyi8VwP",
  "key6": "2XW7QYaBJzmhDNPHDgRKu9D4TeV9kMGZefQBSjhVAigzVrcCarxj4i4uiLB6gvqPhzUkqTPXWu58Xjfz4bhEmTp5",
  "key7": "5yHGTeLwER9mFYyCB5svAnRts33YPB3gVbrUSEZFGverKAyQUzWEJ8P4BvFXvVjybxv5Z7a1bMv4wSWR85MkwLhv",
  "key8": "42zjnLHYvS43xw43NhhZoaXj8b3mnfy78N4xkPRBhAefUPFrx9EmaZh4bF1p6yK5hMBR5rGM4djF8VbJe6Xu6Qdz",
  "key9": "vqaEkLy1LxDp8dUxACCQT1VnmNq6GfwoPeYZgVkW56CQMFE1KcsAkuFa11iGitJEkfmNG2eq5bBLxDUZpiMn586",
  "key10": "4ywSVbx9hv38WzcSXoYqhdaGXg9anfCep8aDEubbAfPWikjESiAnCxVVMNDzRaATz5ujJLci6eXz68mujZZFvNqp",
  "key11": "YA9B8u58kHKPJhEg2tmRkMPwaaCQCU9cgh5jCcT9mrYKAKJkpHBsaQjpLAbJr97p6eJMqG8YsJe2fnqbccPa3ZM",
  "key12": "3khkx35QpXKD22Nx1P4S9iF3mCqwS1cNSdjd1weqjxM77Qyn6RRKzykXni4uPdHwYR6nmGNr12XqBqHfcMxcF9DS",
  "key13": "abvPD9U2CMkMKwfDcmN8ac59khELLJEpfqmR31LHd1khyDaKAPgLtCJFF5VVaPoaendanhw4kepN63ZktYk63xV",
  "key14": "5gec12Zn1CYmqNz9SRyE3TYbRHVW3kGTiUJbWQ1CX3gaoAXeQS9qstVFWpT5Zb5aQxE6QSqT31HkNZ4NX16SofJ6",
  "key15": "65QHPLkgtG5dorgJwGpJNnmeYCVA6qapqVnKaykT1fZ5Gp6mPtejeBWVTDGoRxP2JKrHNgrXMryYoyRjKozn6Qqz",
  "key16": "4HaRgsDqJbN8huFiBRErNPh5WE66W4mo3RCfotrfKUxRg1zz3supUkSMmmyHLiYfeXYFTkgqHN4tqt9GqpXPRfbU",
  "key17": "42zd2Tvr4NhKqK5u6DVKyp3RMhE1mb7gTfhesgdufup8746vtSrKbqyee7tjTXYJCo9qP7J4nVEx6wMh8Sf6CEdP",
  "key18": "4saniwkEC2PmpJqK6S9Aw1hbF6iVfNhMGuqRpH9bhh2T4Wv4kHcyaYs6krQZpSkfEprojZ3VKUmQoLBNPxZ7Riig",
  "key19": "4vprtCgKr47wP37gWH1xUbDurLYFhmeDc1XAyo8tcmDeHs7jyc5qSNeQi2DnKPHGiYWM6zQbwp3bcrRDMcvoB7kt",
  "key20": "5SPjQdNMBd8UKUsbezSLuhUF6yiwUs5KEp3wdCxkC89pnGRAxiYjnW6hLLQAmFNEPLtNNYhLdV1ZGAPJsXxKXSuP",
  "key21": "5ooXnsuiNGxzwvWwPfT682VWUgnrHSXfXXMMeXZd9LLvL5vTsj6aSkhpwn7BM6JzXQSNs8CrgHszaMBSQdYaWT9Q",
  "key22": "42mBpXvBoLdfx92FpVeD3g2CU6D8iW4a7jrccSo9JYVtrJKivAunAbmMpDhdLiggdUvjWM6TG9MVD4omqpwb9Eb9",
  "key23": "5K26uxz5FxxBokRgYM5rwLHab51z5HEpZNfBVZkYhN4cruHChufEE34GrU8mSfsDfh81RLqtnTY9peNZRo45SRtx",
  "key24": "4jhvTPqncGNc3Da4R1oHusq3LMnPECKn7ZsxmFYy22SmKQZ7sustFD6L8XaZjH7JeM6rBypGE2dAsJvjQLN48Syn",
  "key25": "4u6kc1meLrcMX3471z4b1A89Ub7NPqhw23qEvhZyZdSHgwZCHhjWR3eu6oDuHRLFc8Ye9iWCsZm5kCHzTFbLzkgx",
  "key26": "4wBot1kFukhjfhcDJeWSDjzP1aWhU69mC6Lyd71EwzEHUzsbidjgRUfeGgPoXjTtPoprQCoD5DcaHNYrGeGTTx91",
  "key27": "5R79Trsz4cnUfrzoMH4eyTDqtb3XPtFQM4pHgsJeC1fpWzcDgRJbRTWzTn6Q4hfHt3TLxfJ6trmvoXsUXTJ1Ua8G",
  "key28": "2Cp9crKbXqL6Qx1nchRfHzMngKRhXGMULs5QWrcBiRQ3Rim2B6hSUE4HsDVpA7egKMZya2ccCnUJZmpyCJYMj3y7",
  "key29": "5E2fGi66kVDuXgisZLvPL5xfYf7UdSPjFyeg7y39kd7VTNwgrYYGxrTk1BAF6jsG8LR2EA7s9GrQfG3K78XyvKRx",
  "key30": "febH5khrAURQkAmaRFV2uKRkchDoyP31umYn3djDV4UsJVdwDYjW4qzpXkkB9iL8KWhbbMvqb6a2smWuR23jdis",
  "key31": "2LQrhUcFjvmDbYVS6z5zFHvYDymWA13pDPVk7y2CGsQhWyqmhNHUt2KBuZfTKDgWwynDkTVyThYrDgr3ktk732TU",
  "key32": "2Hqr72AYjZMwmX9st6hFCTnVRqQGLpaKNmpVTwEtAqWs3u5XSwgZ6zwzYKy8Lr3ReD6379XH4rSkUmZ3hGCZs2A7",
  "key33": "4NaP3A2nqteq93njvvLCa3ezeih5Uhmi7CBpyWKuCwA5eWh1zn6vbWXCfp5ZaNB7maePkBuEsewgz2Np5pe7dhE2",
  "key34": "3tZ63vBbxNnoATt6frRponr8NXZbJA5YCvSZyQ3bV1KGBnqVBpWMndBgaJdarm1gSGc3s614yuYTF96AByVsEaFS",
  "key35": "3y9DuHW2W5Le5gJDnX5VRB3J4RsLHQksm4Ua7dR6K4Gdt1LhpAiGpDeLNu25Z5Gd5uzz8BWuW4GA1stMBZtFKkLy",
  "key36": "38oMuPKUbqeg715fqpBJwf8drbmuAX3ZEqXXJxETeAhmXkMGVm6gCgAUTYUoHrVvNXSmCEqsTUMwCR3NM83ENAYF",
  "key37": "2a8anaogzTNpfryzZZ7BrbTNrjq4HrYhiBzq86CbBf8eJ6z7bHDgUTxuNjg7vXB8C5f6eEG7w6PR6BgBnhB1ACrm",
  "key38": "4hHuX28EVabaR5XTgJ1dCXG2EH3RDtSriHuagB4PMiokWCZf1nyWwKwBcDRHHzdZe8ATCCFSGGgBoBpeTE4qcwYo",
  "key39": "5Z4VK78VkdeAbyUa3TZE4ucezpCU9GZt5RdSgiN6unYegsvoAb5KMs1tEXRvTQok9o5mUBtVuVsu73yXvFXafL3M",
  "key40": "29NUj4TAXDe6Af67M4XX1CnG4FdfkwWB73wXK7QawZmSWNFxpvHg2MyFSp6YUkTGG11apXeABMgDr11sbmYMZ2UZ",
  "key41": "1wYaD1jCcchq9Lh8VeQTVrVBnvsZF6fQk41ux43DcShVxPLXSTroKGYq3QcZxVGjhmSE8Wsi55E6Xg1fL76gihm",
  "key42": "3XdbQmNXBMryqiX6svZqPuhjW6yS8SCwVutvaqY8XeojRmKYLVjdseFP2NopPYopyMbhutvT8aBgohTi57pb8rRs",
  "key43": "2TRWTspoFThB9NPfr6xUmQN9F9mcJrdgd92H5qd4dBCbasXyHPb6RM8NXNbq2kLDUHZYQBqZWjhx67gZ7EmMkXGX",
  "key44": "25GddXWXnz4GeqkYT28yg44yfLXma3dxNduTE1F6zi5rLYrG6YrB4mrLKA6iYC9giey88inAwBwtv1ysSY1TxD8q",
  "key45": "KpNaoi4W1cHzPjTo44eiCcngrGALLriQiSnJf7Sn3RKTJxVAqG5vw39SFpCEij9tVfsBS38N371Ktay3o9ic6N5",
  "key46": "2hNvNQzXRPfjaFYZkAX6U7jvejQqj4NdAsexoJ6kjZERgNXp7LQU2FB7RMwoBTX1ivqm4aErHw4m1xWjkmL81mva",
  "key47": "3puPnCsmXp9yg3GfMZL7ymJieAPaSRMEsndT161KXfpSxJo651miB9hY4Agq8SaJkTU3tgoSTvj9wRf6qoMWm7sB"
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
