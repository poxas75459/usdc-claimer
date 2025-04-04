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
    "5gk56XZ6LV97TuiUQ15MArwMrEt6wuVQTetL9rWAJ6cit6DBi3hJFsfP4hN9H9AKxaWiwKmFgck3YYuE5x8HAbne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRiyWw7RFgNQTKw6zcHXQbeQqmvSseQuv2S4ihxQwWZpF6ghEWZv6LS7L7Y1AycaW9ipjeoah6JSfg1Ju11xR77",
  "key1": "43xg6odjDGd69wvULjQ3PafSpnyCCnk7NizM9SSPtmQRqToxsVqrnFxCfdFXoz9FwdQLP9kcgtdHh27kFsbearwa",
  "key2": "2b8GomTYcLTr2n3TdWZxWL8gZmL3fYuPMTtGqmD6MqZKmAmXii6PpgntgXYwLYTwyQJLwMdy6jUnCtAo5xx3giAa",
  "key3": "FuH8RRhSPPSpwrPN9dGhpFZfDMdSt9we5oUKwhfvuchHS42ve278xP9GLk5ug3mkcYEXKnHjUvWkRQkJAUAA3dx",
  "key4": "4HLkFDE9ZMRpdXsGb5ijkZho2GDsTph1EtoK9S7L2CKyed8Du8Mq8KkWGJHv6j8UYp8YEkHvdGpeuJSYHkRLRSFg",
  "key5": "HS7ufcYjXB6JTisDUi4ScJjiVnQYkirCWgjrEtesc7TQtVn2YTs2hXfJmCMDqoX9KRgMVQ8icNmWy2RUVaimQNc",
  "key6": "3Cuq2LCmbTPzKc7k1EFc2C7saDaFTAiE83WurU8QVDMaYdHiwzA68jw8P5Zs6o5q9pBhRi9bgcrmvFtSNN819ZDs",
  "key7": "2dUn1hmhsUD7dvYZSgdvvH2T2DYnqBgR3nSWN2TbgLkYji5S6XY9em4oVanS99F1EkoFHj44BUAvZ7u2f3bGArhP",
  "key8": "7LTQiRV9G5f8YSB5Y587ZRNQkphHf5SkxBLyGoXKtgD1jjt2Vozrs7XheSXM3WqnY2VppuqXyYRTfBaoVhTfSAu",
  "key9": "3pgodKzyGZwfn4KcVaNNkYgPsMtCqq63udmKL6vVdZkVhBPuUpJWniUokVgH4w19p2ZBuUNtwf1RFfpnV6kjpFvJ",
  "key10": "5N3dQaWN5sqHiks5kFwgAw6q8FxWTXAurnimdqn1ULy5vELvUTEtBhq6mkXsM1idiwQxxZRN5Ze65GT37VWFKCuv",
  "key11": "bzrwT7bQspBum9tjArJ5pvyheGjJTP1XGBMZtMog2PQ6KTnpo4cQJAZq8sZAS3gNSXq7ghU1jUMQQUBjZiCcGeo",
  "key12": "5bys6xtUEw4tNnLkfXCwqbZEycvWVA5JXZUAzmd7AwDaoXFJZuhfPTLcTrEzyRbrnbQmodDsjWRdUwRo9mqyu31y",
  "key13": "2xGwFfpbh1NXJkYDWbgVsPjjr5iGDDNvGerMwAU6HfaTpdp3WqjWCviqP1HjjH1SFMYwwPgUeS1Qmvyh92XULKBH",
  "key14": "2UYhdk6947Q8AAS8drz5mR3XXzA9gLPcLnsncj7NjhZ276zhe5n2w1pY4qWQmXT3fY8EVKFyozf9KDKD3pPWCFAX",
  "key15": "3hBD6i7cNKFipRmhQdnwKGJEW9HkDPw5uLzKeL8jvmFiv2KBLgzjd3wTUQypBwxZf66SfXsBX3ekvj5Pc4qU9tY6",
  "key16": "5Way7tvKnAkb2mv7VvvD5kMBJ59KNNGkr7uC9sZDf9Aip7e1wDHZeBbK32STGaSbz34KU4fTjCTrAzqQvakieLjA",
  "key17": "4RqHkMNyY4D1scnqn2waMue61JrU5iY4JGptrarbqDcCWH4NUZfGJcpDb9TVuRknjpMJmWmvYEsN6nWkcXUqpTfa",
  "key18": "4pKHepbAKviChDfwwKnBdt8caT5p3csVGCZsXTQXiyUeGzs6edyZPNTQ3vjbRVsmfU5c4YKee848D9jSK3N7U8PH",
  "key19": "4nGTYm8qbvPaNEb6yMxVeM4vrbd7epnfH8gdXq7i1yB73rGVNfQ11BqXKunn7TB1AtjmNdj6kUmnus3ckpnmFpNa",
  "key20": "5En4qHfseKtzrA4xLTVMcS9mBbGpHEa1VJCGm5SyTGoTX7omD5w2Hve7wNuffUU9ktjufKZ4wbDQL8ETCRA4fbJ3",
  "key21": "J3D84a6LyqKE2MXUPvSNYN7KRs9V36jA2QwUUG7owR8BYtC44pbsRYmyyhjwdpkEvpakoJhNDNZsXcSGXZEX82Q",
  "key22": "67VnngEBrZBjBHXLp4AP91Tx8cX2dmYzN4mpoAMYw9UweXPdYxg7VbWuQRDctFuiYduut4QvzciHgeyARxU4ekbD",
  "key23": "57NAimDNqeXPeiZ1eaJm2AtoPKGEDrz9ya1aQ2C9ADSAUvZR8Seapif95pThroauhhNMS77VoRUgEk9LvTCpvkNa",
  "key24": "4y8AsQr4HCiT7Sf4KqwWjgfcrarSqf61eXwpbxmKun2pWugUcBFDd2GrJhr1UM21QrdQQqrpYEysZnuXsyZBBkXc",
  "key25": "ttaNVnqGP5hXGckt27mdZ8ZJQuPyE1aMRxWQz6J7Dbt2gAKaa9FjkKKjfK21W41p6J4SCWP2DHaCKnVLVYWddB6",
  "key26": "64r3s2sQVcJpzokeQ9WcujND1M1vqHKrGHwsxBk8okcpZhKjpXyMMz9kcRXwJy8WQhFX3J3NdcxmBMNRiSwdtpXR",
  "key27": "2vStfx2NdBaXuxaiaKRzmK2NSSs1t7kJnWZRmEeFizKcsZRCF1AUfzpSyRnnNBkpi5UvF4JxxFMXUVCW2hfuHwVQ",
  "key28": "27Pai5pR7wmF1fdN6xeKLyvDV8CeX6QTuYoFtvLmDTxAXeWLX6aGjVaUaXj6sp3pUbx65eFoZU2H9E4y6zd1HYK4",
  "key29": "8w1CppTiHfPbxi257SQiXd9AZ2sxj3gXqGrk7dHgavLLg8tSMq4rHViA17wb7C2gU6WWdGzEtGaaPDU9kuyJUkR",
  "key30": "31jX3u2CohV2b6ut5KotLT8w1drv8eAmynhoBTANXnrtbw2TGF7c8cuZZtvyV4uHEwDmaf8edrfZiHj78i3ZJkL7",
  "key31": "5j5ddG2PMDBczLH1G8EdK6Z9uSkencdpSGCc5VF4LMbr8L6j3t63Fzgf4MxzKjkZnYAf4wk5NqFMg7ymiZUni6Mi",
  "key32": "4GBhM2ZspJwssY14v6JgZHjQcN5FJ8r6WczAC76fiHBDMyV1EFuj1s1qhHGFp9DJwQcTeZEHWrt8HNggmWmbXZ8N",
  "key33": "5MTCSXUXk6WLZf4Vkj1fnFbJd5L4ZTipoKwcgZ4GYcJU9VdfUwno4t3AMsnUAEHiwa2r2X7gBCBgmbJqfvtKGaMs",
  "key34": "5g63FYHeC59NP5Rmb3Y9uAkwW44PzUnAaH8BrtjKbYacSpQMdTjkeiMfHJK31knxPJzo74pqu8S6CoeEFJw2ht3n",
  "key35": "2ozrpUhzNeWrCR9N3csr916F9jdTypXpGbVHWqPxyEpC5b4T9LmKcY9BAt6d6RxFCWYU18ojwU9dirkdQSbG8q9K",
  "key36": "619Ppha5TMUZWFN9hEX21U1drQXWBnxLkYGG8DkqYzqDwuqNzcpci9nqjpgRZFkfL7TpgwZq9Vfd8PgmaLARmJKY",
  "key37": "2PX1XpHaba9fwq23XdgX72rsujMcDinUF1fDKtFb9ddDcKBkmRWKT853wLJ7k48kqzcB7jtMdH4kJ9NVMaKHe4ch",
  "key38": "5mBV1qBLB1LFJi6hW5aprzca5egm82fFeCaVVvkCiM7GLeCJhNGS8kBTwtXCoUHyz18m1hQDvDJ8jc2fJJtBWCgF",
  "key39": "2yNG5yWdK8ZyBkuvDZycMpnmPYCkCcsBDFJAjuCnFoej3YVThrQLvrupQeo3jfXFiBRN2WbrqUWXk1WiFSaYPkdn",
  "key40": "4UXJYZGtCQKYZ9oxLuNDqBJcw1mNAenGavtgpkrz66LcThFcTT5B1WfbdfAY3xuvh44RRevEg1mdmsBr3if1fbE6",
  "key41": "35UjGL27LwTkdsPttdkNodbkvAF33nW4iM6kQJE2q2JjCtmBYHwAWCD55vgFdBbYQYeqz2iAVnYqW7To7DHzhxUW",
  "key42": "peuczFVi9prVJEANWM7tSX5trdJvqsXLg1VdtMghJoutmi4fMU5L5T1WELtS73dtwN2ck3wF4BWukKZyxy6fKdG",
  "key43": "RgK936gvjF8Auic7QqFQL9kRVubvCNv5kF5dN8onjAefD6jqjaEfoM1UzmKNkby1FcaCcSt9uucuEDsAB5aN9VF",
  "key44": "5y4vquPNQRZAiBvJJPLAewQuKXo5fwiB4fimrVp4wjcXhSEmtFmkCqAzJPvvotBywrbWXHEQFkKs3FRbWwHgUhz4",
  "key45": "eBqZoSTY43wJtANoX9BQh5aktst4LqHP4hgynH8eGeU4yWYZPhtmMbyGTfCGtarGw55JCkJjUkMhxmcsVqHn9EJ",
  "key46": "2yRyqbwyQMEeiM55YshysfqYqCQ5Cv7Lwb7sSNQRbSTUDCeWKuUYiL62646Q32hW5YFNA7jkKaL7bhPwVH1vtech"
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
