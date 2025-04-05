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
    "4Q4fKhpnpd3E9nEWyqrB4e7jGJT4W53JbDFZkVY8UVvcJPf9DjMTTJJPK8YFS3VKiPKjA93GV6gWQf9Jbk5u7B5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f14EFGyXhULoGuioWJ54nG5amBMTHFWbTLFPX1E1826h9iKFGdV9SHYnVUYhj4gpod9P9oHLwSSsa5iJL29BUbE",
  "key1": "5JUp7Zdcyz9w3VmkuxN75YtsT9T8VbzDHFyzdVNpyCyXUN1Vc7RH78HDXRgGz3gSSMiHxgE5WYRs8LxZwxY4xSUM",
  "key2": "4FEh3Vx6eozjC5SArLMiM1rnyxncDNE4oaD4vr2wyNz7FTrUcSZ2TKxWGrubwaM9RHzquYmJCKXHo2zyGT4jjc74",
  "key3": "4eWbSnbDv1Mv7dn9M6w2oDBk4wSesjtbb7tyYdAJrErwyDzFArU3vutmvio31vvhAdbdrLugidfRSV5DLJkRtCLS",
  "key4": "3iuxf3vbUTHV88W5GKBCqdghmTZb74VXH5avS4oQ4cyammsHbQ6pAcQRHA78aBv8WsXXuxMWh9i7fBvyZ6VhcoEj",
  "key5": "5u7sMKCDWqzHiySDaaerUrcv1wQj7Thi24N95p7ov8JWY5t8Z2hUAxfru892paDm5Tkwc8iBybGMvXT4JLzGfJ4x",
  "key6": "2nJw2iqitQSaPt144T9oXpnKyzQnQRZmvC6yuMupQrA7MoFFd97az6HUEK58Q4Q5Q3E9LW8YeymE441hrisjznWp",
  "key7": "4tpxwzF8jfgYqN5rZVKp7sCkuBkkJLmCEGNCVXpietGYwSRiX3145Rrr7SRApMnvGVRitXffU4xr2EDfFVCUPCZH",
  "key8": "4B2M3mPN7SCLQJoZ2BtZzuTUTVKaSN6ErE2h6cMYJhEmMAg3fU8w7hRmD5K9xvkbRwwvKFNPuiXzUvpJJYoXn4gM",
  "key9": "2z9RdFnX5mP1v5jZnqpFbmrHnWjYdjmncAw4QkCea6PgzEK6FvQLJf18ofmRSxButtbxu81S4cYg97KynfBCLmku",
  "key10": "2ZFuEaRLFffs2hP8oi9zuKWnN92PizyZCpEeQi76Da5dH6ChdhYWCgCmjJKn2y6yUhwuxRGuMdrsGf3hu1rBtZw4",
  "key11": "2vbGYM8Xr3e82j1geuhHGGF27EgKShBCr1YuFaQGFXHPN1wu5bnpmyCNVKwZ5uX7kL2MbrtCysrteLu59w3eRDzS",
  "key12": "4X9yEtQESeymyCRDmSK1TxsUG6hu1M2BX2hULG1ZjHcRK4H9APM64WNoXjdNDLMzTmsGpFjVD9W3TbipziRQ8Ge7",
  "key13": "P4bJo4GhMqk65597Jt9To3bXXK3h62tSJ8uzxCh5RXNW9RgiCmwnRr7uyRF2RDq93boRNuMpufUejU47hKkjLR7",
  "key14": "5VcuTxiAL7v5SxjQiV25DP6AxDqj7jcnWJDSKNdA791p5uKREEzEE5nkhU4VKR5ZFXBY8r3LH2ZbHJeyWshSxHa2",
  "key15": "fszsX8a4eDRu3xzbj4BFnwLfU6hADPA6rC3Mik2T2chSjHKyeRDLhGyJ7jSamvq2vM87uAPJTkHwqFhxfC1vLRd",
  "key16": "4zCeAjSVY4fd4fMRzdz353vG3Y7hQWzWGdHoYB4nDnSdFaEVAGksbXyWojQxfdKQkFaXeLxp2wU4LrrQriN2Cjrf",
  "key17": "2xWAAGHBAzWtFBT3hGUWRcBXnSYBhGrTk2WhGXr2himpJLCBm5TMfDbEfZNbwezwQkVnvuXCvL1zAY9BnfZodejT",
  "key18": "4GWmZyDjqHh3h8byzfopeSrqYHncXQpkgqWrBDo8Smgmb7YMabb7UK5G7UfBt8WkJDApftJDp9E2e6SjGahDx9sj",
  "key19": "2JF2PQ1FkQyaiAPMygSju9P2um3gkeifVfpCiYQXxJT4PficjW5c2PegRyL2ae7CzuHYms7XpEYiC8cpyXeJNbEy",
  "key20": "3hcDQhEDCJFFAMZjARRHLR7A1AMxTShNGZLqYZgiqLEJoVTk6S1SWame3JWATLoENvimSojCsKdyG8WwkNtWhmR",
  "key21": "4MVdYt2W9CkxEWuNpknfSh69UwpnJjCjmiAwhVpdhfctGMw13iewJaqnj1XmXoQ31kdeRGLSfXinb62Y9sBHRBhK",
  "key22": "2HoLmcsHqdGhAN8cF6Rx3BksEg1VMXRjFJa4hymCehQm6SsvWcBoZGTU87zKqoS8M2c7GBFTxer7c9Uco2piWJrf",
  "key23": "4X6GGgJ7YCghTnDfFHyMNmxWwKsTosfbhZSTaCr4xXnj64NsPAcyCSxKEmGHgh6UKKtk8eP8NhZvfukn8ZdcQ478",
  "key24": "AYxsNaeZX8nb5JJqSqPzFN1Cq5jwkXr2q5Tv4zqSVT5BN6E7LdKRrV6UcMf4yZ53Q6UVS2cLYUnKN1NeLTjxUkN",
  "key25": "49XEiesCxDRggaHfkPaX2tSgnhyFgg3e47bstRzgxUHjW3Av8veKn7uQohQHn349a38qXvEpRQ5NPw6Kv9gsodhY",
  "key26": "C6eA3Zdo2cxCh9wGEcG2YbpFnfh5CMRvwadG58wS1124ogvuec6soV6E1zWyDSorrEL8KK1dFKoVeVdNHsMZDyg",
  "key27": "3GJBzmuhBHRMtSWmRFJSySFwSMcFSX1J9zJSD3xc5R8UTrccrMTzZi1gURHiwwKqpFYbBngjhavBqnykE7N3Yy2X",
  "key28": "2veWF3C1AKRGC5L77CX64hei8sTRCCZNig3Hc7BgPGwAnTYGo211YBH7v3LuywMKXLQu3LzM1otndwtUpmJC8GrE",
  "key29": "437SdgZMEKqGFqR1Qm9unKkYsPrtWAsme4h4b4FqmCqKMSUXDhAopy3DeXLxCo2x2QtjrqooQQni3RWZHWZmu2kc"
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
