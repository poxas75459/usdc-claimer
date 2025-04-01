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
    "4MKohEspDfUv8mHCDqEQoFRU8kDh2KpfLE4uKWpvuiaRdKGrFYFnjhkcGd1Dg24YeEyuRBDtHmZ1LjEJ5YhebMeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29xiqLgj2zU22WrpvnswJKsRwVjBC9E6s7jjH8RtjdYbSgin8JRXA4kbegBTC2EhEvJqFJ1bVXkJNg1ex8pSU3hX",
  "key1": "5P8sjP7YcWd7B4998HqEyAjB9HMGmX6nLCzoMTw1UQxQ6qJYUDf3fMvj2XUwd7m4AkB447QF8aM3ymKfNAxDDjEv",
  "key2": "5JGGdZZ9VTYoU4fgKtbhfiA1jcZYUwaVuX7VCHDUMgX5bNYi1QjtJb9aPSyvpxxhXVytyyqsAiQ3cWgRAaRMTkL6",
  "key3": "5zJQtBMQXbNe22r17NihVgog8XBxQHF3dbHnS31r8LcR6SK5v97gAThnPUxUQFeBCGFdi73s1nqBoGhHAwuSMoGB",
  "key4": "24mSWNiHXn5BM7bUgSdPHY3Z5bDwstd17CfbaM3eBfXhqeWzrLJWJuJwF9RD47TmR55yL5N2BMXpGDdA9Um7Bh7D",
  "key5": "25UDPEwXZsfehnzQep916JjwLfrEHcVCNoAMPz9bp9xU7MUZBq2rqBfqLbkmi9TwMfmtCDwuQbwbAxnqY9z6Lju6",
  "key6": "2MKUvxUGySPUrYzknxbaXtrGRBdceuDmV9ZGkJzhRxcupm5ky3wxo33qd8xYq8FNXMRNNq7gt4ADNKw4pcXZEQ2f",
  "key7": "4ZrE3yBcxc4H31coyj629PdEKxakkR5bayqr6MBuFsy528mC2TtEfbjJa63TzsF1Xa8TS5SrpgAELBKbQWscr7kd",
  "key8": "3GehQU62XWk5dpuve6v9jfXpcijbHbPBx76y7YjStN14EruqX63HQmvthbRRoMYrGMMpyef3YyGGeCucD7Rb45va",
  "key9": "4YrDFyMapvxgbV4J4QMb613m2UDJgrS7du3gThkVEaXhRFza4i9XFGt5DJFKEKPcHyR1wYKofSKBzCTCVro7qJLe",
  "key10": "4Cesv5dnmpnBBAtfKqJUi1F8XqnRm94wsXTPhZoqYFtgVV2GQs3mmCvssqrLtEKaiJg454iw58vZ1KQxFGmzHB34",
  "key11": "5NJ1iFa42VnajQrDv3STDdWUJt1irsr9jSvwjz1WtACkfFCgHs64TKa7rjqrYJKVFp6zU3GVnmtnNgh23WAEYn19",
  "key12": "2YewCe7s3YGBteMHzAp5HeicRPS4N1dyh3QHF9KrG12nBijfYraVeft2kGRJbAj22GWF45AFrD3JM7bV8Bhe7Bx7",
  "key13": "64emNPYeGYV35euYs4dbXPW4SxzBNDriGXUAVQGBbBMu21RdfCbZXTN54zSdThis5uKSMGpSi6oGEWiMciEcunp5",
  "key14": "38dd4aZ43ZAiwLMrWRfBryoqRyjPfkNKqdhi6RZZK6GPqivdehi4qRk2BMegrt1Tt3ghhNtBa8U9kFLLVJhuDjeY",
  "key15": "4bZz2f2nHJHREp1pLobLNFVjq1k7SrxAVLDtMJFmhNw9QKE8DxKZVhsW513rA8epEDMbx8cjVzwQk1zf6mhJYz62",
  "key16": "655tQEfUcZyBX5Afd3E2YccxRePqZNZ2nSFkwtWY8vtdfGt9f8YnZogaWZxWz3Ch68H3WYh32SV1NDW64j8DhUCD",
  "key17": "2FmqZUH4UkiRgDuTGbaJJcHXk52oYKpzNxypxmDdKPcQfP7vpFzzv9ebnV1RK3kT4ezqGKgCg4oPRyfsuatbDu1h",
  "key18": "3LKYC8NSA8U7iWFSckuRCcArfYULEbaS3hvQVpYNafgXG2jNNP3rjbRyE7uXUex7W4E6ib1DftjMUN2BThRmsmq6",
  "key19": "5vA5KoihtSuCQMsPWtgbroHvD545w9WstkQa9LToyhKSbYcfUtToUiDkN5QA9a92995ZRYS32ffPQ4ihXvgCyrXS",
  "key20": "5jT7mhGigSvNhLxqFTpEmGo6ZAKkBUqNrDkCp9dsmfo6yj3vzLyvrVFcNHadbq7Hafb1MfbdwvSUjoWUHF2CxkwJ",
  "key21": "5UTUztDWBNy4gUH1eAe1j9yBpQ91MtYWV4g3JPFarqgEo247Rg91C3rV8TuYy2oZzk3GHauDJ5U74P2sNXdhUZwG",
  "key22": "mwATNUzt1Wqc2Mk1zbbPepyCXMFrMp73gKw8u12TguZ7xQN98czYUEE3bBdn8MPGkoF3YZ5Hq3cuz7Nx4FsUvf7",
  "key23": "k2CGUFxcoUdM4scMsFKnLkMzd8F51QQcamXyc7GmL1FMCmGi3BpNSS7StS9UdU7u8bEjKCFTDMBPgkxc2ptgZ7P",
  "key24": "5yKiUWnVeN8cxEqoLBa644uLFN3XmZftErWgrrUSvttHojgfoRj7xXtJwQ4EAFdutjoLZt2gFRxUReFLAzHT3auw",
  "key25": "4rbhprhBBBwms75jfE1Fq8Dq9WigVrFKEXRGZm5Zt53ZqoHEhFhpktgD2EUQcqj3sbLf2GtVCZ4GXaZEpQj4uJQa",
  "key26": "3kWvK4gyUrL6sqUSSHx91NdCyExZH8dCVHDdVrFf58BKPiSS29cXCnsRnoY2VutcriSYgQuFnbawoTJosgD2p23n",
  "key27": "4gLf7ZC3v3TZXF3bAqT7QsG3cnuz7eFT7yecDGiE8o8nGjjEBKEREf1kTvJcP6RWwHKABhJjpr8Xi7E9Y5CBCV1S",
  "key28": "3ZXrZfGpYm7Lp343BguAAqrQ9YUcn23FVyogxPi6mfEjQJ8UAxxCJeiiChzbmA463azDW6ShqhMBR6uf5D72odnt",
  "key29": "2axMfocgNSJeEABebWXViJPhkkQNGbJyVDC73xAXkp8EaDfkH4NhTA7jDZix4ZqAgzzSjGEyrrsCfs6ccy6bUXwo",
  "key30": "3cuhP1kybHjk5tRKDGua5gxeXFjrRgKwdTj6RikgWLoayYhNHNxNZY3GyPY6DFFrq1EorhJb4yuDhWznevUSXoky",
  "key31": "3US7JsHzjD3NkGrMuLNMSHYUF97txY99ACPCLZaiuDehjM9i7KnQP5SDqQUPd8UTKGLqwzseHjagQmY4x4gtQdT7",
  "key32": "3YeRcSTd1TeZXhb2Zjnm7ib8cZRPJLyUDRo1z82DutYyBq7g86Aa14vHgGbBFfx7qcfuGFjwvQDcadT5xD66FRrs",
  "key33": "5Dm1hqwK98Xinm1cy3Ftp5vT1dLntCVFbZ4BBFopkkVQ6YtwLdQk22raw75ATgt4FHVzfbdjUigVmEuW6DkyBFT2",
  "key34": "5kq3HX1rLG21V1Ub1vD5BqDtNZGZaiW6v2uDr2hdnQYcnMvfpysaNr1uiAEdJ1muYnPCSgtXqoyAVcDMUyU2bSpe",
  "key35": "QaCHWqLtL7aD8UrctQKtAC4u5e61aWQo7By1VPnRqKehkGTqcfQUSaqvZV2yX1WYNC1qDyP3KKjpBKMZztio8PH",
  "key36": "64e46nZjBsnfCh9WnLpPoT5yCeDvSHcywdbhVCuFYfepyUDZNi99yCxHPoV9wR8bpZESPf284CL4gQeZ6CMmak4D",
  "key37": "2tKgpSZDEjmC3jT4eP5RtJ8gXWSKmattpJ8zhV3c3z3DEVGaPg9uKdshAhANmNXyQtv7CuQqqmtKvULdy5AKBFVA",
  "key38": "39XwajtY1VsJJzPCeRr1b1FTLrURtUzQABApd28FXtufK1p7t4tbaJ6tejKYNA1gKxEcQJCsQtm9xoGCZdTeEM11",
  "key39": "3YCGQNjxA1NzCrxuv3qbgd1GVZsa1GEEF4kZ66SKZMYVpWBA8jKDVZD5B2UZicHwtox41neh3THimoyEbsaEafei",
  "key40": "4LymnFLLaz8UTUiDSqPSnpb4v35v5jg5XLPs8ioAzySxKsqUemiHZgoxX5o5dc3b2icfpncMUgsfcskuFZfR1tbQ",
  "key41": "KbwdDajB45LKzMNgK2zar1tfJqoNidhXMEHPi8oQ8PVjSugvNoQHJNGRXZXsyyqTS7Ze9mbB8KsoLrXkqhdUFxQ",
  "key42": "5oX9GV6raDVSHYJ4Wz294vP1mKCM4dFRwiXLhdpb4XRv472mK4Zv3LgAD7R5KKbH2ZCGjeJrAQaaW5tRbKgBPNdw",
  "key43": "nQKL5ENjRYaFgKtW4QmCYPateupWjGvrZeMUKcK7V5STGvQnVPHFr5zcwua1VDfEMKLHG896XY93heb57sbmU5J",
  "key44": "4gVGVcCT2aqrzuKnxPLbh8RkvnrTwtbmUYM93K7XQcHbEC1n94w7G4xaK7YiyDyyqt64mfFUHFixLBTPMwDpWpWr",
  "key45": "2cvCdjsgjqMsmcNxv3jGetGQ6fHat8A3YNZiEuMwyyx6HUyxducqkEzYhuW25ZcNsZu4oPjH5rNezF7Kh8rCP5i4",
  "key46": "4K1MdSZp7kBA1KbSjPHi8CXe8b7bN1ndWgD1hB1WEctrmPrEeygxGFNhGwLJj4t8Mf6wAU2DrDkaLKvHB6M8QopV",
  "key47": "5Ww4q4hnEjTaknSo5Wr31sagetZwaE2mdqZRTMyQW3kgvJA5VKR1PBvpxDeUm6sqardrAZQBKEZUA6SPpz4DUUij",
  "key48": "4uMj3gC9VkzFxMf8FtFq6y9GT7j4BU8izi9NDCm2kdScv17JGFoofJ2H3RDdDivz8mNtXScdVcCWLGQAs9RasaFT",
  "key49": "37eqaWWFFFbLrSpSp78TWpjFS4WKG1dnTeg2RGNDRKmFzn2M2r6wr3k6oi7JPxfQhH45bcc7t5ZqG6HCAeh5DkhL"
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
