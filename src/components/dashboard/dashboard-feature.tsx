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
    "LfKzhMzQxhMG7bBPtxjzv7bQjrLfz72g9qHdy8MC2BEQDuo17QfY5GBj61T4dJS1egKyUC5QdQgiVeAR6PB5nn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gRaFYHwi3jDHM77mbUxxJRUFMVsnuJXzVCBeRB5X2zicFQ1sLt2coCMgtBKdCfqGrrswXuZbTRiY7iqyyAar6qX",
  "key1": "32oTFoZ5L8YoYFpESnPTDcLrgGXWA2aQgys2nbb4tTudAehxpcKJYudpKH5PEApUfFshKUPdim7aVZC8WM2Kh4r3",
  "key2": "Ghv7gbe3N3nzooJZ2JEujbQKkpsz2Bcemegw33KDiUueu3Z58gmjBZBzx3RbvmXpo7LABLsx7aA5TdSjNrAVknb",
  "key3": "3RzZyJknF7ihHfTdX15YzT8J3pa8FSUgcFzedAXBC1py92fUJ4QVQawFgQf3is93cGNgqKXL9wkZNn33JHDKgdGF",
  "key4": "5bSMS6JeTaJEcZgmptVELD7iSzR31ZksXBxEVYngmx5y9ANbgSmHR3MTCJ8mnEkyYKdrVq3Md14kZCFdux6gRqG8",
  "key5": "3f1XRg6GRDc7wFnYCdZ3fgyasUqAqU7Zp76ik2DxYAGL9baKyszktnxETrGGWzCJKfbvQwNiC13kcfyfvrW3dSq6",
  "key6": "5Bar15KLKDvREjTik8NkzM4M5eBzAATzBqq7A84jFHZetQfcgfqAUvW8YoDByGPVRPwJRZv4UUUX2tsYeKMToXBc",
  "key7": "2nrw8JpPaf6JEJWAXsa827KPMvGm6sqDj5q6br7P33BF2yN7nXeLvpa3QUUigySJ7SPHKHtEZwKMkehNre3cT8SK",
  "key8": "Bk2mD44L7xfLX64wqE17x2Yx5ygRTz7D5hHd5sGTVuEzPRe4dRFMUrDBthHxZpBpqFuWjcLe2kDxtUDE6F6UuqM",
  "key9": "3zHo6UyqYeWBWqA8P61yS3FQreAqi9kqsnfio2UbUkzBZP5GjW71ffmudmwwJRhAh9CZvwdrVctkzNDEMQryTBsW",
  "key10": "29rnxC8LFmNticv4bNKVfjLe379SLLvrn8aUZL9joDsSqRp2wQ21iv8VF61wepC6A8yiTc3rEVZ34mScrZmMiBYZ",
  "key11": "jr6abZxTryBC1HcdwsybSpnV5SovMwPuMJAwqifT27ZQMfY2PoQR2bdVmYxzRiJboJT8VxWht2kqegCs66pqGPj",
  "key12": "uHaUQZHD8hEwFj8LBStJk9BMt5gQGsVYgXucHvg7YazXznAttQWsXHPUXrMLUnj2haBZSFGrKFcrLjBmtQLNDoh",
  "key13": "2tJ6wqL5obLi6NvsQGLDvgdMjqPr5WTEz3GEpiEVPJsLbodzeY7kpKoaXnUBofaFZi2igxPmStKjcLL9yNsq1Vcg",
  "key14": "DHz8qd8pLWRgzihJA5yXWZbJAS2gkhjZEmkMC9kWeBmV2sp9LS44xuVPoHDJVj4XN7ZPCmcWdx95GwPaQ4Adws2",
  "key15": "2VrAKFKAX8tmE2V4YGTEx89j29uKJuejPFnH9VNWG6Jk5hd961xdn92pQtoLPcBMxyyq9KjcQtnSR7dHGga9cwPZ",
  "key16": "54TvyBwiZdSqm8PE1ApCaFEXy1Az8Qth1QTBYRAe8vcAK97eNqVfUAeo1Z9nxasa6mMmZWWhCVTjAeAhJG34UUjH",
  "key17": "4RXZ5SdnvFcLgMaZmfssp8FUHmMBEXNTb5ys3oHGgesHc9q7yhiNEf5cydJwnu5u4K6aq8ZQroRYQ5ryuQnybjAA",
  "key18": "2jDuYYTxbdeXZi52WS9M6L56hhMNhiPDYpPGrnGDGLfGKd8VzWPAKFk7ruVWZM9XppiZiaqjcXtoo5NVcpeoXM1c",
  "key19": "5TSLuZuEES5jkAbC8v3ZBV1SKoG77Ccq4GHE3PhdDM2HSV55aFEuLe9MgwBKycnDfncUC2BRUravttzP9tAzw1qs",
  "key20": "3WAkL5diUn1vvKRpVSd8N2CjyfG31w4getEB7EL3GQfQCykwyaVRmr3hdvNq9kY5ZLJd8n8CRZ3fcPzwy6JHUb1t",
  "key21": "2THdnpiWVtzsJXkeECgv7Kj8KDXs16hfqRQGekrLELwhnwpwNN87uwcBiQRsBycEoWA61EpkGreu7MbESUMKitjV",
  "key22": "5HAwz6fK1GJzfqJR6oTdEy1pdFMZVNu8rdtzTYTEshNUbtFXG2nue84X8skCwC4oU9nNiPmP1PFCbtnWrruxK78n",
  "key23": "4Wusudkq1oGcWW1wvnq9WF5L6X2ujhymtXPFDSy4RGkCtm6iaoroJrUTX2qA9DZsdYVijMSwFNDX5wDhLnTd9Qtd",
  "key24": "444ya7Zo3G5JbrcidCktjkshZ7v2rGZuaFZmF5cRQZsQpvFZNbiALuynimUrvCL6mPpE1pPTWRmQctmi5bkd5RP1",
  "key25": "3HPsHsx8zpBHoDz8rvZLBD3sBLdyb3jouDVvZdEFgjUDjLrnEHQCVihst5A5grD2rEAVN4tTqoZaxho4Sd53tyPV",
  "key26": "ZtdRempwkkWeN3pyjtEjme2kaQcrd3vERiA7nSQNa9CW1nXf89thnJCChb6whPDDiHv52b72ea3BHbmTwuMb2RM",
  "key27": "4oP97aGx4jRJcMzwJYJF4jogVnHgptojeDPaLUcn29N4B9ycHq8YHtiNbpBF6psMQN7Y3HTSqgiANL2VLk8EasaW",
  "key28": "2F468rdsUseyv6W7oS2j5BKK7kgoczi47gEfkezCVCAyQEbHL3bfWhyXxniuJTRUHRzN1cLtuyrNmMLrwTgrwu1w"
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
