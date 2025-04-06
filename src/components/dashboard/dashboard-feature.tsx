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
    "coLfMx6NJb3ccB9Q4gMBrTgRsbxbXVd2zvFWLU5KdQhf8J9HzkA4sAAJknoEGo96DDPEh41hN5N55XREoVCSgmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xYrDxZc18JrygbfbbbEMmYFxYgxbhu2swUbPcWkoc6tR32FysddohjeGvQvQJ1AK2wgLYD469TscnBTzsEM9U49",
  "key1": "33B2yxeJrEqPao1pQ7TUNwEzozYDTGLmd1WRzP9WXTTSDfUHCQdqvRe9pTSoU8XcaRbvJ21pkJtMpEtQP8tE1vxJ",
  "key2": "DBuy27AkvLKNUUGmcPyuwzXWsb9fAvuZq44B3e9pNLsR6x3dFbEmhuxZ1ny5STMbEdz9zvXFgPKsJE27yFuTGCk",
  "key3": "2C4NAmYs5eeCGbnZ9t6vJgY7qTNAnbqq6N1Cx8r95jydtZHvbHUAQ2XpLFEsD774SCgh7a6xxUGncNzHQvhatsvz",
  "key4": "4dKb5dfFgpFC1cYbvDNcUKmt9ncXqsJWbq6LXgy2xd86v6eZfpU1o7Z7TWsJLhVvfEzZhfqF3quNComm5ixtELp3",
  "key5": "5vV3VN7pwxaYhf9YWYhzPkEjo7AWEYpdzZxqTFVr83LdSDkRS2CApfSk8de5Fvbiz6M4yFxxVqZockJwW55K2mCJ",
  "key6": "X9BRfF7ThayE6PsEFHDihXpfna43AzGcstmy2ynRZjvWeu3vL1shF63hHbZuX3f5bSrs5peiyKw8D1PJkEeMnjq",
  "key7": "4N8Ef8AGuQxcNhJzbE9Ftu6RhfMMfEhNDPQAfSUP99ihMS6wDiEGJxvmjx5HovhH7LrU7WMVkNZF2GW1aSErF8Ta",
  "key8": "2R7vQU82mrKMH8HFLydFhYwwqSgK68m12K5uk3hYx6X8UyVvWue6k1kMxHQkHNWZrY1UDiWb841JcozMuSiwhsMp",
  "key9": "3QmFD5nMyTSf7GVvqiouBpyxGNELpfsLbvGHfvaf9yXP8qk5VTK5khj3gMsE6D7iqMeiyGk4rA2hUdwDLNp1XuQt",
  "key10": "2MxY6onMZbLf3V8NVtZruKfdK8RmSTDzxEK9f2u9MyZeLWSs5T38uQybetjuDeFWr2RnHEpMAXbBcnXzfrDtF13N",
  "key11": "28bfrenLnBib8PPgAivRWco3rbycJ5Jiju9zRYqu4T5tXdonBSqdHgATDyXqwtf62Eu29JJkUdZWJGQwSxrWRyuE",
  "key12": "5BpPZG754gvnZVb9ePt437aEHmBXf51S13PhMDW5D9M9YHFPJ9q62cNVC6rLzfjJPPAeB5epTGgpJJiYAXGk8FRg",
  "key13": "2gtKuobJgCjymgn2pbcPvDCpZSMZoq1hSavzvPzi3GXSKDqHDthDo7miRAFpgT9f6qsC5WGNkPy5QYfNxUWsaavs",
  "key14": "3L697VqZ2FVJkRjXesTHH1bGT4wH5ZHv2jyEZZcbZ7hSVTnp8QddxvzimqKz1LjwimC7zg4toSHEQro1wU9cWzrf",
  "key15": "2kRu4mTEWbeJ8SDmFhqXEFJLv3eSJsiaGCa8JxPLQR4fgFjaKoGzag7XoxHVGWbRwH49tPSfTub3rbj2oW1Pzyiw",
  "key16": "kooYA6TzfDMic2FC6unkiuhWeMQPx878Awuo9FneYMyxGJfPkud8sNPEcy7aj1AwegZb2o17RmT3Y9DfXZtBjPV",
  "key17": "4Cq4Virz5ZfBjcbv3BYe1zYmdt7cShQEWT1x3DqK3t2uMd243j5KcPfk1CiqGedKybzqL3iJU1fdKUDtiQhJEMGn",
  "key18": "2a28hhvYBMDWrS5RiBpPH7hLPibk6vXLaAd6LshSyowKHSLJvLHB8rGAAJ1uT6HRc8JYgNQfxwTcJBGP9A3nJtE8",
  "key19": "4cM8HcHYQyGgdkJM6VH36QTBEju7ir4SGNbDpPVi7WowcaR43eRgqRuJvL1iaMiYdSeX1SVCsczt8rDLF1dXeu85",
  "key20": "iWc1NhWS9We65ZvMmp4S1GED9ZJbDHdsZuNPoWnrbP6jKWez27PUqEZpT4gMyG8DDyUJSphZqLvbLyMztqKKitL",
  "key21": "487oYUmnExBUQde6pzqYuQZHUgowQ9oHBouDxFRUFj6ngEVTCbh14tuB5z16KHRLv1JEE1uSCJimgmngQeshFkLa",
  "key22": "4RoU4yfzTTR3FawexV2ebz7NUFCxZoqUUrGg5uqAK6ERsVcU2tAUfpsqTTGAVTMwznBZqEAWzqyn833QYrYfBNEs",
  "key23": "3kAPzyEFzGyWgmhcthzsWuBhjWCjz8kBNMUAfxu2GpX1bwcmf3L8QxHKGqSGpTsALm9j4ecvp5xHb3A5rtEWS15E",
  "key24": "bHCnC2qAVjkJfjfDyeE7aLXqKiBF2BgoVLM37Ku5EBU4fAWQwphzA2BadZgY5uZ6Mdvt93iPVqtwcaUcsp4YA76",
  "key25": "4GCjVkficSWp9itLYbsTD3s71kPkmR1uy1riSyrBzZ25yeWg7verRnJdhc7Cia2se3Za9aoVJGgW6QXAQHcK4fZ9",
  "key26": "4CdNrdePJoLycKVwMdBzhMt9BvPGqiKqgRxCvMUywPdX92EMu58RP8yz37SLtb2LdyYQPKDmFMHCh7sPVvojz1g",
  "key27": "5cJj3E9TgiWyZ11emxYt65F6pZjecy7jACaHnV6YHeRs43UGQXAXBvaZSPz4oRBV9ShbnXJshxT2yvfs7QKj7LE5",
  "key28": "Ta5kbxVJ6qyiQXVsXHQKZadp6j99jxi4Uxgu32MM7tcLzGhAED9MMWbVrbSNp5nfqjSdjnFohoQmbQfPdMg9Q88",
  "key29": "58UqdZgvoqAEJVcGMsGVZwCpw9dXGM3EHwnsafPSB5CGj949R1mAm8f7FhocH7C54fctSr3LuXs22gUoZcQpwGpa",
  "key30": "3Ufc4op5eRLP1xTuEEz3GFKUVrt6GEyhCY8zkwQNm8s8ntGT4X2ShiSbScF4ShCvXWFFYYnZHVP9kbUQZ3MUv5Yf",
  "key31": "5UWT6fjhCZi3AhkEy9KhCWkuKRvoBWRwotUxUf2JQJfcPyUhTwQxrKJ7DUGkEm3qkA9JH2XoEeW2BRz67XtY56AX",
  "key32": "2S8QjG4jo6x8en1odD2t3fWBbEeh4mJ2piiQmjopDTyQuKc37t5J7m1nt54P49LDL6w9hVJPmbC6JVJ97e5MXQYW",
  "key33": "2JAr6sqUffuS23xxV1TGKmadpFPA62q9usPKhTLewSNuD2V3zersQYSJ7xxKAA394zGvR17u81V818SLemiaLqpo",
  "key34": "5Y5hsYjDHUmWdGLRkGWGePJMz2bSRCEAkaS4H69GwzogwTBEybVwptz4HYbrDELVhNgRKLwtUF2N7ucMCTiHJBG5",
  "key35": "3LaXJjKSwS5yGSctHYvPoejDEgkK5WkSBshX5zpL9xyYVCr3vV7N1b9wTRnpfNhtqv6Dikd6v1SabZDJDVmZp1Dv",
  "key36": "5pY2oXXQG4yeGWZv8LpevRyJ1tf38GDBjndkWC8Cn8Z8V2KXfjgryXjKdusSky5yCgsTqNZ5K9w9cHrt58H7pnas",
  "key37": "4eyjeKKeeAf2yKvrdVeEFboQ7RXAdCgFYBgS5rsoKzjydFGtxa4ohULqwFyiBzvWNTtZa4Q5r1UKV3vWtSC1gXwu",
  "key38": "5U1GPTsVM8ka4s8QwDF2YYho5c6xCbcrYsNnsEUwQazYsXffxYeSTzQLzYdVVrF5QgztiyatZbu7m5KjDqX9BBEf",
  "key39": "2HdmZ5qK8yJnrFynrVH8H2AhTg7JbTVu1mCqBoLSvhCDPjaHjP32ncQhbdfyrvzPBkvKDdP1tZGBVaMdGZeZ8aAa",
  "key40": "41jAXhDCQVxFPPYQa6hz18DxkAQAg2tUKCJz95JZYVMoAU8pZCiW6dR93DuvdPK5vWfB46emzMbfqNbDTB1hPpx8"
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
