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
    "4pAd6XbLsESr8ENpwpHrToAzx8pVWVQsyoLggKrTEY36okPEVrpd3yvuPHag9akp6smCLy6DsqpHJhUXatR8enm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LPVTTShQJHAsDeEcsLpLtK1ZpXAzNHnWUHEMYsuh5NfJnbQxsVvwmTHWELTHX2mdKwiTWTmvY2QsjYt5JQSJn2X",
  "key1": "45LKjEkPraD8685m6zJBYMdS2B3J2NSpyGuXuFisXixZgFTAuwM3qDvr7YSHN9hB3tuEhXFhZaRv6RUhbGSjUqmY",
  "key2": "4RMRtcG3JZFwuLgUJdbZXceYPueSSHZhcp8kZgdfRYmFkTZiE65RN3ybhtwuctP4U6sd4KtUG3TY4K31gqkKdwa2",
  "key3": "2JWW66qRBx64Zd9sBxxEmAj7SRkDfj3dkstM2xpx8qx6zEmx1oEE1S8kR8Ncs95s2CYoY8FuewH6f5J14zYLMJFw",
  "key4": "5SghiCWLZXid5HYRn9XSNEseJ9CSPpMUdayakKST7Wi3ncMpyb9bZqxbvcHbc8b8RL8HzZeongJtEyp9gu9cmVyA",
  "key5": "2sjmK1SFJuLg3HkEkL22PQ5jRUvJ4siZJ91u7SjEvqn6Bn36DcqVdvAUQCVyVKvdbsQzoE9jotPHU2EhsavkmkZA",
  "key6": "2eSM36WP5rqym7Vru3EsUciLWDj1k11FEYNBp4NM1ycFyNVNyZzjFmED3w5H2r9otL1F13wwNbwPz6tRAX5o81A9",
  "key7": "dyfrBgqsMFvWzpw3snYLTkgRfVpbR1wCHAE3yR29wxWqQKb9Z85kYkFXRCJFfKo8EGCiKMzfXJMiCTEjJJcQbmm",
  "key8": "mwD4yLPcF3NuGSDUitmKgkaZQHTgyuhScwMqG3NvPPu1RX2S3j33x5JuM4b7CiYygJkP9jqoTBwLa4ABx7LTLk7",
  "key9": "CN63FD6Jow2retgCLMpvuK81fWkivYgFkXQAovNNdv7f8kBHHiUL5XozQnh1WGWBam5NrrWwwKihJTuFnTnjqmC",
  "key10": "2ksrXEyeC2fMRAMnVJkB6mex6UobGfJHqRko7CNRBoJjTqjGFwzCbLcEzLf4euUkuw4rSSeAdksaGmCLqhNHQgv5",
  "key11": "3B57vixmaXcAw42fwxVUqsxBXodXdU9ei5BEH14ws6fMEhu3jeRKhbxrFy4UHbSgyAyq3qU725qwS8g9TrRwnjL3",
  "key12": "2KgUk8d6d44o5KvhXWvFHAyV5CW7ajdSx7Rm1Y2bi8u7Su9pGt7g7Gc5XTkeBGHH4R7PbcoZnAFHeprxcRv1ekNp",
  "key13": "5qMtv8FW78QUYcmkhK2L7cEfj8qiKx4UiKL9j8fZJcFc5kzoQf3VhMkZBGCoqBhtrC9HgRFvNxew8SrDow6bDsoh",
  "key14": "ZgkVqy1eNkC5SLf8Qz5ouFsD4Bbfkw39zTdhvZtjDVKW6D6u5TVoAZHptFiaeD2fioDTgp793ygbsYc4d7tC5Kq",
  "key15": "hc57aUH6tz9BHzfWRhSNM1ennkxHvaRAZWPTH419KEZWAecFpXQioQ7o1y5g5r2sxTBb9FrggyDbQj2SuHZ8Lik",
  "key16": "3CVfYqwEraLm9nM4UqYcL5ukitSVSWD5QJNVChJktUjD761UCxpQ2kUphi59C6wm1MLb3eexX1CM98SrLVNQL9GU",
  "key17": "59UDFoYRDf1LBoT7n5FRuG5umVS8ZyAjYqjq8G1so2QcS4C7MEvnWp1mC9DNm2iynSSkHHTMywGgSPVLLbLCfk2h",
  "key18": "3Uc5HPozNZ6cWWmU3UtxvdvwXsguJU4brRvD1mHTE8beeNzwT24kYkaYGGWxAdWTyYJ9kM9PjN7fnxkQxKY7zNfp",
  "key19": "4kBgBLhEW7BwrLqTbR64ZX4PRtySbGF1BjGXbUfAbagq8fkjA2qzGCaeWwaJY6MqYgGtkRMqTXBNBAQ2B1rrQfq1",
  "key20": "2tnR9cFoRS12fRrQuDzdaH1teWmHhLbYn53d9UxUh5xo5UdDgWpXkkNMTtVGi7pSwtZoPgCFu6XtHZBfDsxdGB6k",
  "key21": "TZBeGfE38jy6SMjckAr7dXPLLwHAeiey9bLXTitrnYoSoMc3E1Kh7UdasAZDk8WjPmCQqqL8nogQYuv8rCVst1z",
  "key22": "3Fa22ZRizmKUbxfwyjQRXbdYRkCra6s9NrpggwTHe5QJqjoJViGNqVsJ61d5CYKBVhBpgRShwb256mqwg7o3r2Ze",
  "key23": "zEM3hCpADCzzw1tC7B6kxTGxNKQ4JXeDCCDwkVqKUUiUCSpXQQkFVYewgMSids6AAhu5bUiUgv3g2et5H9WfvUS",
  "key24": "312dYfqSuZG2J4HkiTFmWNmzyjyfHuFc55vhTg5yE2zkv15wGSZs394NUhdxNi8zyJK7F7rRcg7eSQFh1jYUtk3",
  "key25": "3uJAVq7RHJ34mfJpnNE19kFoaSGo1Gj9yUFtQtViWtRQvuQv6e4tAKRCUN9h1UuUtSKJuUvYTdgxxFpwcGY74PQa",
  "key26": "5ie9bdThmHKtUYirhs2S9c1R4ggq4oWNZ2TmqQMs8gFYeGPWbd8si9fmSUDASMx39N89de3eXWBG6Pxci5iKhjbD",
  "key27": "5tpn2YLzcyFhjyBXZtGHZWfSG3gxNfScwhUsVq6hxcGCg7ZymxnvKkPBjKadBhUGPHm1YL9Ad22EuPzBXaHPai2r",
  "key28": "61cHgmVsdZjg6wTX6C3M8WZoVfQfjCWwzQ6G6MfvZKTk6cdGq9A5fyrYyn64qFMLUozhreHov9aR5HBRjPPKZcST",
  "key29": "5PjeM8NPb78Mf4JPUvCN5rzSNHBkf9WfNQPoLGCkBccE3bnfFr1s2K5Y9eyLqoWEfnKEUdLMPdFFtnGVe9AgHj21",
  "key30": "5fCj7CA5eWw6Qzx1AaStL3X2WnoXZ9cFPGnzCHP9bmvABmJC7ipNVrxox6moVTVD4HFbjkaPKZxLiWgpUinrPDjr",
  "key31": "4TazoN2e8e3iRAC8Zix1QVC6aGrxfVjBzo7Y4ttXgp5Nv9ZiU8NVkMtnhQYevshwgW2xoJxQoXe8Bf5C1tXWtxX4",
  "key32": "3FVcBgLieYtJFj3WN8wQmhUycj3MFJrc6bovJa1qHm3P1mfwAaQjQoQp28nyUBfZWZ45kCupQADwejHmQnqhR5ix",
  "key33": "3m1sjvGHjhiKwAWqY5YxVYmTs2pD6J4n7rxvBLYaYjteJRzptNMkcPzdXZuSgT7vgyda6CnDM8H3to6HaaE9nxvV",
  "key34": "4Zbu9jZktN7Yg7nzbxomotEvUmwjWbB4LB2ym29p9uyVHW94VMfEEkBmrHUU9z5PPCYUYdDbN4ERMYLJmiRwPyeY",
  "key35": "5nUDt8rCuJp2DXoqSDjPC6SxfvUBtqBxrQeSyang76sGKejfBb7Dc6nso7MLFGTE7cNwSogWadtky44YdBaQzRwq",
  "key36": "56hgJ8gn6xVG31pDW3HRydWqRQmVbNh8WdaWQaGMFq62dJt8WjbFDrYhhi95d8R2rA8373syhhjMb1XU6f4xbTuv",
  "key37": "GMQoZXNB3z9zpkd5ER6mwijMTMp1aMEpTiLvUBQAQj4GSryNhjozjraZXgFRTTksxbEzzHsP8xC6Gq33EoJjHha",
  "key38": "2XhK1wN2j3XCdqCn1pMRLxztXUpUijohVrsgFaVQWHf8RvD2d1G8WE2ACF2CTm2BB49XiP75UvyTt1qDsX32cWtB",
  "key39": "2MJ7DMNYhioS5FhYMTJRiXjbPN36nYGbX9M2eX7QJzGZoGmRsfDza11KdYywGyNp4imAK2uX8v2SnSTzg964ehXh",
  "key40": "5fQVC6KJRCW5r4BD2auaVNFx9odtBFL5mq125Rht64EvqSa5SacS2eXd4Bsyr3NuaSkVAn5HhjHrZkakTapKmPSX",
  "key41": "2jAXc4eMrJonMyvq5hQyRzztqvZXZGKM94AeoeSVUXc79qonQWHQw4uZHxe7ktzSuf21PDVny6SaP1oqUrTTorAC",
  "key42": "FTHuKWpaXecELDQLppfPzQW9VVcfhVvTknadgJWKwEcavsb1kJ5v2s2hJi9xCi2Ux8WXxC4NdMVFHYc9kuZKjBu",
  "key43": "4ETyBFZPfeQwzder3kdURqZRayHnFGD1F2McD7Lj4rZ7U9fMGSsoL6mqH5cvgDGteFyjTR73kKtb1ZRCgr6d9M9i",
  "key44": "2KoK49Fb1PiK2xDbx2ZCzsLgVWVcF3DDbzuMiQfzHPL2uKREBfJm8WMMpKuCPaZAJX9v12QqMENH7bwQhEHq36JY",
  "key45": "5BTZ8aYo5ygRjVDSeNGUZJXjAECtTZi5F9n2jvZvWLhi3Qsn2qyupmHxLgaBuLeRGJWSfEB2Qq6xhiMXXbShEqcv",
  "key46": "61Xz1Zbgt5Los2q6QpwqSgve5cfnCYZ6SMyKzxy9HmXzhGD7JGSL5391tw1QoRN1SEFNsahmEgt8joFJeo9emjvs",
  "key47": "63kGWDQQxiNTRNWwd67J7DR47ASk8nVuhx3DVLyLFJ5UDwRNt8V8LMDZEh1AQLguZGp4yxEvyeLtN4dmdBX1DqbF",
  "key48": "MZ6aNVxBf1snVrB9BNVzJVvKzxVgSUFGHAJfUbP1tx3utsV2qRR131vNvEH8XGoxTLZRArxR9W7w4zBQURTGj17"
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
