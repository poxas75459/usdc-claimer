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
    "3bueAUWchgBt4dkw5g4UXMJ3Bw5MKtEu7XQKMYcaxyJuMoZ4DkdeJta1za3ZPTZaGpkZR7MYk5moQfhaBiTqRReR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWT78CKvPfhh6syqh16hb9tizLcDe53xwTjXp4poxxtQFndQxyNeDJQAQnQWmmn5c87GwRqBK6JAiojWiN7HfQZ",
  "key1": "4361wvnt8KJhpC3YxpSspRmvGMgGSTGcU91m8WtrjWyeUJsUJWAqGUbVczKMUrzYKX1jx8QJrCgPX2HBgfctNV62",
  "key2": "qbHgz2yRdU4xf563PZsCNtARkKrQN4wa6CNGawFaJGaXu2tjdgzRFkiDYJvpdcHJ9VQvcj5ayRrMndfJxu9eMph",
  "key3": "ewJBntNffuX44WJLVNm93aQfSYTE3QAfyo84bUYwUe85ws6doGA2fJWtAfihnAW3ifs4nXfYbYvjfWcdy1HjpgP",
  "key4": "2KUZhcj5SQ9tRoMh3yeDniLj8KbQMzHnHLeBWHd4eiqnLfxqxLkuAqrE57N7pnXvV9pyd5oaY5NCqVsBmD8eqoTS",
  "key5": "2pMeBC1pcz4dNg2wYQTPvJCL4kvCRKvuwio6GYbKqN4BWCVwewtVb332jcytVNhCNKvmbxMB6NoiKFAPNJru6igg",
  "key6": "639991TACxjayYRudkx3mAv4ffKAUQXFucE9VZ1HKnnSpcxShKMEvrx7JjSWwHrnBhSfNWcje2dPjdrsmEm3yokn",
  "key7": "64NqECBVC3DmS7z4gq75DWZNqRmBbWQVez9SX1sPLu63GFR4CorANsJASN1ntWQJtjT9E6r5XXQN5pxfuSnAqC2e",
  "key8": "2vo9JD9LpjmmA6XGr23mZN6Jhz6mYNSFrC9ADY19SUMaAsEhszmfw4g4WLwobNfZa1yFKpMqmYBXR4v5mKWh3WQP",
  "key9": "4RBf7NuZhEp8Jaxi4rqXYJsmNNuWUcnbtnKzhDrbZCdh6dCN1psEhSMx3Bm2CPZC1UK8EwmwdPZxSMkYv2BhQSqM",
  "key10": "2F41xA4c45djTdrZJZA83HrvzijjiNeBHqezEg17Pe3ES8EpE7jfDaCs2FkKGV8pvCUb66Db1qyv7nUDSe1ryK1H",
  "key11": "3oEqo7rBon9bbuW5eWqKcU9tCeNUAtYubhei47qA3szRRnNL7tGfk2DQvvtWbNMpQhMs4T3J5r9q5re7mK3w24SB",
  "key12": "D2FfGnYwDYMACYy9wphtcihSCXnvBcH31VEPjp89TQZBVK21tTS2qC5V6N66eUefDud8dFn6gNazcav5W6k6Xvt",
  "key13": "K8ny2PUCUJhwVvS6x5mxy1qfcD5DtBPQ2q11TxPJ8T3oyJGzBFsEMPbXTaELsNBRtKfSEYTF6CkUMykcERHcHFn",
  "key14": "43xtvCRZZeaPmEaXwUQL2csN1G3ETpLDctBxWYKm8LJCPf32KubKdWxCBxCo2WW3i9MRkTcB4z7v7b8BfJnm83jY",
  "key15": "zREaStvbda5jX7BJdfS9DT1md4DmEo8ziLvx6nYRk2dBsDxzni2HY2KEK2AWtMAPXR4Z7rWTNpqSgWsSstUGead",
  "key16": "ZGQNMrjETasHv8S6yhfZUk3BQTdTkv8bDQxinevYwiGutosZpCfpYk2CUDbR1dVdQYQ44Nq4ogB6yaRqL7hjafq",
  "key17": "2PQGqxfDybbquDBbDP643jvinWobMaZhzMVRDpSBCA5spUsjqUc2G1WSPaV3u6CXVhf9ZyHjMUw9ZvSwo1FQPTgZ",
  "key18": "2pcTCS6JUg9u4Qs8pJSRey3FTHWHNvJihRY9xDmUScuNqceJ53mYYosAqy3NtCpvs8H8q6tNHtuScLuUTwzzQPGU",
  "key19": "5iwTwBjGWyM7ERTjxXdozCLWsh4Jx1mQLqvVRFnreBMn1MxDzh2MD7mTyXoQLVMmyvCdHPaToYtqmTTzwAHmZ8YA",
  "key20": "7ehBrWzC5MVamPL6p6q4aYmymdj892azjKcECd6EPHQiYVjyZAXPqMUj5vv42zYa9K4y8qj56ydVgxNaRxAmJ6R",
  "key21": "2dGJgAbx4aeHNxTLdKDGksLR1SMr5eWC5v2AjApciyhJy4NnbeYNSr6w97EvXKxE93iMNZtSCn87Z94xuPqvuAca",
  "key22": "4H62WxBF3AAmz5so6gcnvT7AZQ3i3Q5AvLBpZGLmsv7QUS9vJ3ADadBjxU2voHtJecN6uVCLP3HsaNVJZbGiou9R",
  "key23": "vkSxuBguPK8MiuKTcdNa3tHgpttYjfmzCcKxBmoKT4B6qaa5D73j6CT4jDZF3ywPwXodF2cWrrdUPND8FPC6WXi",
  "key24": "4TsVTQg6y78dshP9aohToFTWf7DR536PaK2YjGt8hZnzraEsGRj66gUH5oH2EQbc81gvxBay5PbiXDfzh8xg1jx6",
  "key25": "3yMhkWm9sWhPNeBLXoFJLX6RAmTQav7jtvQawVUVFWKiR53tDcg4ZWSFs59Yqhe4A9cwYpCcX62wyVarq1D2HFsk",
  "key26": "2LA2pJYaUHuG2Mcg3ExDy1KRU8de16yxk3bNAstmukxDvue7eXyqSgBQRUV1nE9Q67cUk8wuj5NiuLyXqY93dcsW",
  "key27": "hgsiaKPyUFxsmsAsZZvruqaSKnPxTjYmnN1tRFtZ771wpY5akftUaJh3tQHSDLwyshZAgFrFN4An39dDXMEJh1V",
  "key28": "u8kjWN6jT9z8bEmyVGETeCf6godRfKsnd3YhUXiJrvBALGkAz743SdZrJuZFWzH39YYH96qQV4oD2diXPMesEsj",
  "key29": "YzfmzdbbrXFLvENJu9DTKCCVrRMWZuvZHcj4Qt74BwEaepraiiHYBJxdUQNpNcoEawia79JN6G8MLKU2XrXYsjm",
  "key30": "TZg4yn3SChev8qaHYTLTYF4TPJ4TBPYPmf3w8UAy1bZ5P8LBtDcFah6BmjyzLbnt8RAMgtzQMXpTvDMFTZktQiA",
  "key31": "4JK7bhRFEbQnTYwp1WE1okVhXbXjr3r2UpTXbSFe4wLJAtbn39S2mWSL7ZdokExQwFAoeErAjdSuvieFPR92411V",
  "key32": "248AL3dq6DQGLb6wfryEUXSJBDrpDKQhNyoX1UsBro1XGzvH9V4K6Vt1eHF1fRSnXi27t3sankgWmiZpUzSawLLQ",
  "key33": "3xDQgHb5L6Z3W5so7nRmF4PLErCt6ubbtywFXe1tHrbPCuMEtWVgqdznp3yqyRpZkjtHcbbS5umFUtATcFRkTX9U",
  "key34": "2NLdbiKsWKtUwrVcB6tE1rqisk1c4fKgEfnuVgykr14ZL44X6Ks85P1RBJHxKSZVEczhza8LYTVkpiuTEpgQDE2N",
  "key35": "4DqnAnyJLx9yBYPuUM4LGmxdy6a7URS4QUMkoxKfx9tAQiNhvvBtBhaNPFdrSAKsbXrFydTK5yw4SbXcbuup76YQ",
  "key36": "4k92d6MUBhaVAuJJ6s851b1PwKGWgMSf353Ex4fCAtw7uAoHKz7CjE4J1BkXrF5XSod8TniJ7F9k22KPDz45JFPS",
  "key37": "2Jky7ZFtZsVEk75sx4Npb2iT5Dbu9YhPnJxovU5qhJcXxAhGvKMPcNHg8CFLW7XZft3Tv3zyV3JuNLZts4NU1CkM",
  "key38": "5CGTVu3FDv7whPErk2rYTY55tmvZLzQu6Jz7a53ZyRSNBJpMEk2hR48N3osxsN13Dx9vHNuyM2U3Ps4M4gFkUBfF",
  "key39": "5pV4eS1kANgpV1nrD4pLdg4qYjoCBDURMTmn8yYVQgpEBhNFUuiyPSWQi4makudaN6CrHCnk9qdHyv8HUXx1NooD",
  "key40": "2oTLM64169DqSkqiQnpYhgo3P6YseWfaQUxQv19wzQztuD3ZSJuWvjFgjcNRvGjFvkR4Qn3eNErsZQwkMtr53rnd",
  "key41": "4n35BQerEpvjYqNhuueQX7xL9Hb5xSSZY7CUnb6r4GcpWBorKn3ggrswPdoYsNmX8a4VdNYaYknQkLwvMq6EQreB",
  "key42": "4c31rZmb4KNwdqjAQ4VUwxLg1EfQuL5as4U9CrByQ6e5d85phEZTUQHSd8CRN6kGoXAoMgB7GEPwhr9FBz74pRAM",
  "key43": "2FCCFJJMmk1bVmupvkqBjJyMVw1LaTRksXZ6EjKmMNgTerhPxKfzx2TPUDXD4YUjhMXJBB2zt7VvrPsihWoQoLtA",
  "key44": "45MHxE1c9tg4wuVZw2ibC58DhA686DdVo7CMjSMhYi53TSHJXvMuAbEwTUqq5VLQ4fyFnt2crNQ8kFJGVm42tVCd"
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
