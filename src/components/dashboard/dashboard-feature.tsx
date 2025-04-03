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
    "3YfuU79szi52ehF21mLiKugETF3B89eS28ws526XMXzCMYkpmbXBCNx1U3MapAqsLCcXY3BCRrTX956qeSGHVquL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45eXBbkwuXipBNno6JhLoNaF4Yod3qFdc8WZ9fhgkzD91u17uABEduX77uEU22axYGbn3BCFm61jxXxLbRE8PFUV",
  "key1": "4jJ3ENJkLL6FXsms7JWTJAKia8coxENvYgKduBw9QAu3rrgH9xBfRWdit5Gdv9zA451WyBceYyLtxgrSX6GqCyEL",
  "key2": "3hqRxvNwTQvfcZxCyGkMrLQHT3NDFzxGJ4QssVSSnY4zwh6vaN2xxnMiedFih2WkDGyyX27hHAKUr71jN55qaPz1",
  "key3": "5WDibBhb8yKiPBwQSCDs7GACDTTorCVgtb19r5XoA6aHvsrHTdtqWeRpbf4V3kPth8k4TJrNFn6gVEgo3USFzyks",
  "key4": "4EeZQuL2sQdKGWcvNAieKDkiUFaore51G3HamgfTs4z9Ajs85yAjZgjW5vsEVzqQZEMnDzmXGFdm6dDRJUhYKATk",
  "key5": "2vDWdzCy36q17PoYB11DzvUSMnv3EvUZdgEJ3DMEi3cAsbbbepBETHQiRhCZYV5aKPieo1B8Cxj96Agdj1tnyy77",
  "key6": "5vuTzEvYHgPtkAKU6rfqeMdzjjBAJcaDhMprhpmmovXnQB6GZHM4dzRCF1tda5jmGUXk4vDwWmyv3pjsftrMzG3k",
  "key7": "4Y7r5PeFWK5cR8DEW5rUPB3C47vzuSfBHTpwWzp51qXpsPAqVMDot9Azwd8uAqrFPbyxPVFpsg5Pm3obUWQL2h9Y",
  "key8": "2dX6wgf5AJL7E1bv5BRN9NNQXtFnixor88sfphfYQttBGWRanZhELGsG7G4ULNC9egBGEe2A9uREzx9rpQ972ZGJ",
  "key9": "3jDKzV2FyPTjmSCm11Ro7Jp6NXG1NC4iuSaLgfbZfhLWBpgde2CdNx4FqQhBYEvQpQGkKwABDinrxxDkjxefqzC1",
  "key10": "4PqANpMudTw2KYs9gb9UdK4rwj8rVz5WXX3bvBe8N7mnstfgFxqYwc5yAn3bSnBK8nit83e5LyNMuEYh7HJCfJxo",
  "key11": "26pgQEQLW2JcY3TLMByevcwpgfFwov9Pj5DnuB2JkiuMqYECdHnNNCvfZ814EHjpH6UrSzmdPqsqxw8xq8PLTib3",
  "key12": "5syLt9Ya8VDS4en9F9V9GhxbvJ5RwH5MZyxPMD6NnW9sJN1tfdc8CgS5rsD2GqRTgqTmvUA7PWeZM7j5RkPxmu5Z",
  "key13": "36ZRuNrrq2jmFpNivS3daxd2Wb51q9SCNV7uZsabHknq8xL4orgoW8oRbPq74WGeXcNWbCgVLQ2JWz9DQfp3tPJk",
  "key14": "5uy1BappiD24Z145g2gbpnupMcQJkaV5qtMWdJKBjvCLAc2L2zkmKpNhvWNpgobC1UopDcATf1b1h64rgo2Uttec",
  "key15": "3HHetZsPtNKyDrgY52nypnY6Qf7msNnfVUux1JBKE5AoyjKcjgSX6tU8Mm59PfBD2F3aeickoZ313sCYyw86rtDd",
  "key16": "rdY8rSwhyUXpPEbVQVSXmPyyNr11EySF4TsPkKhUVcfk2pX8qYtjtokjoo32RQfac4pzdT78Nn3x5vLmDbkJWgY",
  "key17": "53bDiMPpcbzCxpW5Nx8uGsyv6gnNBZZT4cnz2WJxVcaSDhbH5yzWzfqVkB5FTXGw5gsjWJ6wN5Qqb1SZ2HuRo3hz",
  "key18": "2ffsCrK4guxNq9kR9D8eUkDaZjrRL9xr8b1HReqqfcrXqnd5Rf4wpgwpsxgc2s6S3nj34Y3UJQb2R98knh2qfRu1",
  "key19": "3N6VGzqYVMJh6S5J68h7uwCWeu2p7gVMAPkcnSxo6Lgrfht2UWydrhVndnw2ekH85Rtiv1iecbUnsKLzNfCQXsef",
  "key20": "56fbrJURSGEAVZVDFvrL8GZKYEej6TgzPD1QYybLDRewxNBsvosNB6jp7tL8T3fArgNVUhmHZJHD9KcD5WzBbcNx",
  "key21": "33sQdLmouh4QRx7qpGfXaRT9GRSiRBQ7fJhtb9WHGpMmAqFo2MqVDUbM7Tmo91rerTjUNfgVHRZWDy22BAX7CGih",
  "key22": "3qohhzrLemF5GYk8m5Yu1TAakJ1Gn8cnoHoTWsFqMxvJ4oZF5NMuXHPBASGiEhCGjpdBL5zuuKVciJWYVdMwHmBa",
  "key23": "5o8sszvyU6vAtMnJyWnDpqbZBfogNGqVqP6pUK45P6LjNeCGvrYy4crf2TUM61oL3JTRDtC33dEc1zJm1nt5uHEu",
  "key24": "3VpjzWckhEmHLDw58HegyiDpiCdhp5MKPGizKwJpX4cfPm6RCPmNLYq8qDeh2L3PM6Apv39u4sSREF2sD5Hi3NU1",
  "key25": "4SsMzUcQRM2saJJ2jtozuvXvU7qVethHoZ6fGwLdPshme3ZBfAM4KW9Tbh3MkBKgkhQbxTXntXFFumt5TAC7Qqcd",
  "key26": "2fey8L8irA6eH4VL9wSK4zY5o8ZuaXQSWHhF4YMN7ESVcSD7FfWom7wEBHCkuJfCJu8RKVB96cXQsoS1ckexe75K",
  "key27": "ZWTuWgNtvUrCQ1XjwZT4TAZa1vbe2N91XUDgw8knGydWfobbKCj5QReMzHPCjZBjkLcx3m8ER1zirFqX5fvmQAj",
  "key28": "3M2w9ga3WfvWNFvwwtSBcMkHLktc2sFFabmZiqv9M632MajBmiys9BsbEcboTZEP1LZSP8bWczCTMH5ZgxKeTz7T",
  "key29": "Z7671DE4pVT4LBrrtDRXvH2Vx9VYAhozLBCp7ZS4AgmrtpvaLQS5oCdbiTnUaw8jCbxuSwVqGt2ghwajKA6oDcr",
  "key30": "2Gzmk85gL7ZVUutzcdBtqMXVWkWMmFo2C23fNfnxvscjUSVNGysfYzY39bEaWpXLPW4LcjYca777Pn6Ewg8G7oaz",
  "key31": "2LuTdcthELk7ktuQi7PdzfvPLibeSnTFZmnLU17DkzKk7Q2C5brYGi8whx3ahr4UXUVfasBX8rfES3pQvW55VoRH",
  "key32": "4u5oBZ74Tz1dsJuJHGUdT2XjuyrSNCqQPmPAh1n1ftth5CLgNi9XxZwcPHBkWguA1oA9Kb1pe5fmRcjoBC3qL3K3",
  "key33": "3Bfjr6VPiG2yeA871Rd9gCGAAgwqAt44VDEAV13rL2GKt32pX3fN6b8eTp7QQJNjxVUt955q3ainb5ZJNzAjGXgj",
  "key34": "2fHMmUJJtYx6jupoxadkeW9BHQY2cvjbn3tKES5N3fyfFdpAbn1f8MSuGfTb1GZtmPydq5biisizEfJzuigJsN1b",
  "key35": "5NjvHCouKozr94z6CNnwxtENpMyCEM4CZuU4vE1QpmncvVkRfBt3DJS1ZnZRNt3JPn8JMYBq3W6FJ5rG2SLGvVCx",
  "key36": "62JjwokqKKqbwmsXsH1SGbPZyT5vV4DrsPBRcowriGjcBcwUkNrB5EKa5R66svP4Xn3ksNBTnttEsVzhCfarLvjX",
  "key37": "4Xp7A9jk1VZtp6UJtJQ5hGcmSYXcwQpdZpJD8NHxbiQyGj77yvaPxKi4mj2tq49h1vevCGEU6NCDE9RQmGvi9bQR",
  "key38": "3nXSvBcRo6rNgRVDi9VSXfUhbv8hk4C27ehVS3JuwuLf8QqgvzUhjDpirRCwN5AVz4bt51r3D2B4GLaHSqqb1d1L",
  "key39": "64eZ4N98mup1GgfdN92E5H47wvj8MUuYUb6Sfov522KYjonVuJuz43Q22hKvCJ9rttX7hGCKhkrHF1WD8NcdMBVb",
  "key40": "ePAp8EKnaTwnceu8yRtCy11uaD9xkD4MA3jN9aszVAt3ZXnFzvtfNtJ8cifUAUxm7Re5SioWD3YsmkCZXEuS9zz"
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
