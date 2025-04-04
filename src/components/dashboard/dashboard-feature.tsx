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
    "2SxPKmktoKEYpmx4NUy1hZ7btY1XQbn7MuaLqvbYfG4j8x4Xz2EhvBCgqAdaa6J3NwbcBTTU2jaKiGg78VxDRCod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ei7zyiqMjHFdVHV1zroxapZGcE7mmNi5yoTrdWDDVeQabCucRxwE3PQLTPW3KgptCPGyJyQfkRX1XL176Pe1ZxA",
  "key1": "2dPERWig67f5UXvSnwCvLozzWMjvZDYyxUB3Cy6DQUP7AqZvXU2vQwiZVGhNnibfKu6uKWUCUQQggdYUarR8v1U5",
  "key2": "5zVENx8nvFvzHtjcicE6tigkrJ7xPRpHhaQKoSmqPSY4EzAn78Cq9Xvd4kKaPxEG2ZXNy69emCBR6o7vBUyAZmHE",
  "key3": "4eGTYKib55N6Yanv42s9hB8UnDrY4QhYfYvyBeFdN7Gq2UvK7ihzwqbNk9PLPsp9kCvCYLUUthiTjmfs23NoBV1a",
  "key4": "4ZGo9x9FpUCm1bK5EMw1pcMo4f4KyN18p6abBBZz7ZFZrDwX7aVoY6PBvPn5e3fbmtQGfVbiYV4xFKDZpYYrKMww",
  "key5": "4XdfUAnqvwYK85GXcSk6rMmRfLg9isxWxeqy8ai7rf9wmW95EN535rJTnZeyCBdJK7JEx8cUDHLDqsBaJKzwuLyD",
  "key6": "2mYBQP5yvPeLJqoPoVHJCKzLq9YUWU8Vi8DGHv5a8nkWgcg7W4WtrwLEeH1BQ2qWJ95bCdntRwZepHVW3EXPQ45r",
  "key7": "4QcwrFg4GEQ8sXH51HcoFPBCGfFgSVXYnLUohgbRL7iVRydpK3gUnnmEbpgKvX11185HGSLyXwufsFkXZJ9TJqJm",
  "key8": "3NqHbM5KMf9SapZXAgnVmjib9uZ6vr3NB4BD4ENA9RiuR8NQH4PdAKNumegauSm4Bn6ZpATS6ciQbwfpLYSc6uDC",
  "key9": "297G4XxZFYqHGaah5gf58dmbrS9NMoo6YaYeVdiS5c5hp9nQ4MtyZLanDNMPwykgcYM4RegjFXREH3SLdWA93qNd",
  "key10": "RQ3ZqGEe5Vo8YKKc2kVW8HSPWnK5rfWqsPHy1sXuJ7fmEmLc9KJnWiQNDeeGrWhGstKq2cGjFLjoTxQo1VMbVr5",
  "key11": "56mzKyyKMwPjeGeUSyn6E4EoyEDV6rs9PXwud637i6utjSLGqZcDvQD7Jb1zZ3bqvpghdSwpYC4gUbBy3QAgPykH",
  "key12": "5hZx8vshKkMZT1viMjNyhp1oRLo7uWdgZP7ZbYrHmVm9U2V74i9eiQ7aeXNcqCmV4odtBaYekArwG4z5uMFmM9Fk",
  "key13": "5zr8T3bWebQxiAtgYjWU2oPoRtNGmTrzXbuzQsqZ9osKW3v73PgLKFpPED3tCmxrmiaB4QjacNNvsbbjhZBa9Mw6",
  "key14": "3YkmwWyfBLQ1XaGrNyWNZKfDBH6FZeJKzQ9bV7jyNPkXxbCmQsbJFkNkqRKhqC3tGkS1nvpfAnt3BRgTgwnp42pJ",
  "key15": "3Lkx3AL9HF2tGi8dWGXFA1dbbZKLohpNWBwuqHT9GHivAWV2bLo9boZTDKu4eCAAJaC1R3iMJCDzqp5ao47zL8An",
  "key16": "32aDhS1Zs7x37Xp7QHQrrTx2NBZ6QbkGRyoS1csnp5N9mJeH28L6bYqyjUC7hkdS5abcyeiLEFfhhSwPnL7sGU1v",
  "key17": "2G7BVo6pq17dtRGpBEpgAYcwzVBk22MCLTSUJvkHUMJvJoStH39xe1pH272SAFYxyC2yq9HDyfbhiRqvxm5BamhZ",
  "key18": "3FhMiQ7ZC4TNLvbVVidaSpD9QSvtdEH2FRUTuuFeqxbcdJ6RMd2EJaJ49ep33xWhguATURNoqktMSYXC91bAiScS",
  "key19": "5cnVBZCFiwbsBD2kF7kfxTBPDqM5SEH2MkVp4gWQs4Z3rXePTydP1qt8T5J26Hj7eW6KmUbx4zVKM2uhcjqiZJW9",
  "key20": "FrbkS83bKpeREoaqUL8Hm3sC9K1ty1rUDzycGqQm79H4ZWayGHeeXoSUnWVT8JLVKyQMAq2JaPh1VnvFLKXzv1g",
  "key21": "5fK9WReZQfs8aE4sdox7fWX3Ku16hbLENeRKs6xDAdhHwZCvtQWKvADigt3CPgse2JwR6SUCeJmyy9TcmEX4TwLR",
  "key22": "3qFKLf7Z7XKA3Wy6KNXvErTTW6h7oLMR1q8zeXM23oEs8XUQHRuExGDteFEV5zyG9NXwvQzqEYDSqU2gRyEaRjhW",
  "key23": "3gnrpZ2zCgsq7GiAUkrmSzt1jq8wLHyH1cArzQc6vBFPVBaSC3FUeFceRQtSGSKwScbxSXvM4YnLPKGyecLZnY4j",
  "key24": "4TxXJYaPxmFNA8pUX9maP2PCfL6t3VSnN6c3ChiX7CAgFtW52bS4NVnajfK59r55br4UcDhvdtMSS8kdDfyuj3Ay",
  "key25": "4UcEGjot2tjwpKEoyUAYLqZTLWQs3ErnrxMRYn4z1C6kDM4NG8o8qCxVFQSWuC2wEtPavS8LLtRm2Jux1dbGMjT",
  "key26": "vWgDdgprRH3K6ma81xKr1H1QgaHSjqMX1G43iJiSprJyogSvSoJxWg76eAS3Q7QYYg9jwRLyyP1xWHdGUhFHP6W",
  "key27": "4ubNQpEDZARVDiVNLuoTmY7FA4ntwnoVSKtFvSVoVxebFSyk8j8wMjspKSpoCC2DRGswymk2QqqdAMqWDtot4EFp",
  "key28": "5Jp6MyWbRZSCV19iZzZy7SgnZeHZoBYnWTqVdRKLmjbpZ2tMbzGREKE1oVY2RzteFKscEUPPyQJUoH95YDWjUVdD",
  "key29": "58AABSpEVT41wp6BtvCLiz6LBzxGzPM8HJF3zw2pbnE2k5X8i1oJLLqjExdWLLhQXGEkym1KQScaNZeyRP5TXX5V",
  "key30": "66AFP5ZbxhCaHF5RPGbuCFdcSgSsDFEbbqXohwkt9fAsiiubd3vvpyhjCKtGP24qMYb2mbLs13zY5TMTyeSyjVZo",
  "key31": "3TaABNHdf41r1D2ax9CtD3m2EFGAWydX847n1nghyUnQuVrEhdyCSJhXqyKU84W2h72KtyVpTvyGX4yRXwRLa1kv",
  "key32": "5xrusmXbiWD9dCPyXtNrqV2NcuQZVXgidqVMqogSKg6Qx34nn69sovRW5Ro5BCL5sx3Uh5jZKJr8eWx9aEpVY6yR",
  "key33": "4KcVcK1GmM3e5ZbmjcKrJjXncNeGHAfeunhGsXX4gJxivbM3YRc8xG9CMaXMTfnXFMyd7Q6vpjwBKxZyAajPke8L",
  "key34": "aiZYbwbcKD2aYq6c7v2MmMc4ot3Fxo6Ar8PvVnWNqfgPegrwgGT2eefdRbLrVnYzDLkNr3fJ5f92ibhEfxSu26E",
  "key35": "knNNm5DuPkNrvoLVSGwreoxjYBygAVGCfixaUj5vqJhG6jwi8cJzh8d6hifSpK1YubPTjRdR6RMNTwD2VDrpm1z",
  "key36": "3TGcWUqQMXdifA9QEtB5F1DP4Pzx9psgtGwTME5CLnTGBsCwSPcczHF3qSp2ttB2Vj4DhB8gQHEoiidNWddEhBu1",
  "key37": "5CuFxsURxkp615wkp6Jwc8VwufRxfZ9h8DfqKJ1zx2ga2J5Pv3oE5xwdw85rZ7b4eS4ZnrPtaHn3ZxPy4ws92q22",
  "key38": "iSLFkJMTXrnF9mVSqUmKL6dyViC3VkNPqH8xHXMiJ9DnC41VYwADSyPA2ib2sndykXXizPaq23ST9s5DyWZm61t",
  "key39": "3TqLBjvjaDcWupoBBCB3XVDhsDrpUMnVQVZUFB6z3ERxrR42BkjGxgyf69zQTPmmNXPHLVZjnqYESBoK9irLNLFS",
  "key40": "5Jaj3eXKXc7WgF8UFoQtYQLijrYc3Xu68WfXWdTzzUQTmG9ECNq3wpFGcCJMH4t1F4BoRXiczL8eBz8SBUdFYHWE",
  "key41": "UXbSRtuz1yMVuAg4ZKz7McLWGvHzdcUoaLM6PqHzN5bC5H1eqtP3EJQ3gSATBa6HABcCW6Fo7kXG5zNsWkNLTWt",
  "key42": "5PV9qbZrfFcQhPTJi7h1TmujXsi9hJbLDehAu8arBPMBeGmQ66iKhZMzrE9rrbbWRTNXvvY7GJNXjhG1rtatrkWr",
  "key43": "mXecw5DUpQ6nephBrSGBgHEP555kvdtVFrtxvKMnKzghyz34A3EpDmgePdnmvPW3MFN7Zxdb2VHczzeMiLRAFfC",
  "key44": "4Ni5E9qdgjrqVro8Ad7EkFjuS7FFKhSaU3hU5iHbtth8X8QuvkrshTeBWV291tgw3d7cDn7Uqg2MFePp9Ac5Znda",
  "key45": "j1SwMdePbxKqJoQKsNDDAGDeDE1jYQpPJtuiRpCiFuKsiyjK4KVqWHmSv37ZuTM5AxFe7KR5yuCSPYDtFY2P1Ky",
  "key46": "586o7SJJuwTmQp2UF9j85vN8DhWpqKQ5XMznhdtMfwWjoKaTGeUURFHjsH7KuAXGZeqMxF2VTkvwSiNSwugTjPB1",
  "key47": "2qG3xzy5GDcdqXt5AjsPJ2bv72772wNAnMaoizec7YHtMxK1BPso6fhW6XJ5aUmGWfUiUPooFaZWV9zg9bRZyEVE",
  "key48": "2gmWVZ8ScrEFQooPRFiQJVTDZjvvvm6x46Zo2pmgT71VGiN9QZXHQ3qHx1tgAdieGADNebGnaopDDBV9QV5US1C2",
  "key49": "5Jt13Sj3XqHpcAyb6w22Y1kHETCBeJmnNk4MGHYjXhBwLYGfNGbgZZatgDPbZBdd66XUzZgQJUdjWKJ36ZkomMiP"
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
