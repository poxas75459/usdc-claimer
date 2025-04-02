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
    "65tBrTj4SGm5AyEJtfRXSNSKTFN1DtYmA6gzDstLUanXavofzS1awZVveK4TKyjtyr4exJJTYzFHQc8pSUvVW2Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cpn5gwbWYJ9Gm6ZV7vQXC6htgxZtDevwhA24qXvf3fuax1cQ8XpwC5fB46tgLwpP4n2kSg4Nb4ojVnfxP63tnfb",
  "key1": "4QtsChYJ52hECVE7DBxc7xqMMh9TvQWCj9VDcfHHE641TnyeE5bsEwVigue5i9onnBwvxSBe7VEKuyKnX9ct54M6",
  "key2": "5VvQBojrfWFRU9ED6G9r71Eay7KbuRvvbKtReKUEfrBWb8Je6hRVysvxVQ4v9tGif5QnopqhcqChH2kb4rYj8L9r",
  "key3": "3cHQGu9C2iVh4jt6vhiKzXJFd6z5nyAbiPaP9aco6rEZwA4FahUamGNNYj98haV4q9i67yRuifXU3QF3dyxmtHKH",
  "key4": "4pPwRrhNYuRMyapsBDnwUmFbsQA96qnquHb9wxXrHcufhw4V2coXuzKpMzUhi74M6koczjg3MpbrLqxzkdfeLNDV",
  "key5": "5n9C8vtDuicVpaxn2hqcCAzWK4rJmJ5fKY4ozhy5HoN2udh3kdcL9cMk5BBEzMVv1a7JZhruUtGbSJ3mkMV5yUTe",
  "key6": "2zKNjnbRiRkfLEc47SWhDqR5ttxsVYiJsRvKz9NVCYBNWb5cc6YyHysH1hsAoHPzbzCtAvwmoEkETt8ZQzjusdF",
  "key7": "2MuvwLNs8vxnDWNMbVHaX99DpUBUQZG4VNb4bP3tqs7Qm9mAKCE3B51Yto721MQwYaEFbBVSKZEL3KMMYyq376cB",
  "key8": "29MnhmpCazpXnMxCwoCZtDTq7jGZcDe6Dbh8fcynJMvkuFgZ6qCxPrHUzaFsq94GiAhf1iYnWWoi3D77ku3qyG8v",
  "key9": "qmDdfjWrryPDDQFmWpWGdLzPMjKNyCcVWsUo13hRWE1gE8dnJ12gXckN3FkQVkMVvBAjogXLhvMqofB8uQy7TYu",
  "key10": "3XXVk9LDkjAoZMAzzGoxMXGqhrbHJGkpbxvmJLm5u2KaLpJwmetF1xVuSmL98XHzn3QngTCfRJEuuATzGCRNJRTL",
  "key11": "3JBm66GuaiHv3kGbmfxhkqJYy44PkEshRGKtctjRnCUd6bGQ77gTHVvkgh58xdp8hyK42pKfCG6tjn1hpGiVQhxT",
  "key12": "482xxTru2Firwy4PB3K2NbLMtMGwcQgNUZvKSPS5nhm3gvGhLbqvsdWW8QsF8APdTTLjDQdqY369hw4fAVaXstZf",
  "key13": "3KE1pdM4AgejcZdC3B8bbsA79vCLy7xQcxxZpeBXsUru6xiqALLWPSimmjcxrXWWxjMxAn7m6k4XJ6BzHr9szPaX",
  "key14": "4VBqmUcyHz9AK7LiE6BH7DWoo7tin7SHMBhNrpD4Ao93a55VMwAaY9JFW3bja61LzMo4UWY3U5cDEha7WiUcwsfe",
  "key15": "3hzxmJyc2ahGG84Tf9QwvAVQj1kJXGWWxqu1jew3Rsm9e43fDtWr613pxaSSUmx3pzFtSyk6ErgXwSSL9gv1tCL7",
  "key16": "66QH6EMZM3v8z7rK8KPu9gkeNo7gd1cHyu72XCMuqj9kGEx6Yi5si2SCHK96yszG6CMZMwCJyadvaVTxomPeM9w3",
  "key17": "59E8g8FDptXCS7iWzrJgKiHUfj5M7ssFZgkMpNarw9ATBSPtf1T6FbUNaKoYgJyjAedhShMFMkXgrDEPnheizFaY",
  "key18": "3cjKaXcc4yxheYFRAs3BA4qhmVCseeXRTTdL4ANsYXDnjkS81sFBCXX4F2cfDHB3G5NYX9WRUb36nDjmNiH5tDHp",
  "key19": "4pTY6t9UQ6gioGLfSZVff2RqWuxhQPpzyjSip1TERUyQjyaPw2dXsmB9esrnUrUFWhLzm4srkHoLeJ1brAhgiBDp",
  "key20": "5uCzQSdq4Sy89YWGc5HWApm4Qzyf3fN8xXvwu4wod2J1K8pZNdzvoE7CnjTSePFQseYLXf2P4VonoUaJXXePmLS2",
  "key21": "4fgbLYGk7ExV3MztLr4xBxSizpMU3KJUUqsyPKoQRtJ2oqUJptm69X2AafjzsCFRHqyDaaoityp2rsUAqi3Jp7xk",
  "key22": "4bzP8K2qm459EvVffYZabc6i6QJ5PNZn7shw7uVBJEkrnRnbzZdHWKzfkqtcRjj8HHaZdq77zEiQmXB1FDgR1hPm",
  "key23": "5ytKngktfnxr3jfWo6b2HmH3JBwX5LXmG2WUaAAcmUee7HgP3JCgWBQcNEawpezZY6GCT4E9QTxC7JxqBr7gm9Wt",
  "key24": "BjPewr3dA4YbRofCt3moCo3CUCY1UCiABjtW3Yohcfpnugwhp36dMizZ96yfH77kVSiHdizquVseDg93Aha9pF4",
  "key25": "5QmMwJov6xeeuJCqJoBUWVYbTtqnYQzEyQW3fLpXfv243jZ3SM6vQ6TFn2SdTPbUgUoisVrPHTniYxZNb6C3DrQ6",
  "key26": "4DGJ4yMUMz4G5BrXJJqQa7iFfSsZU2z93whAuHm1s1H9diuX4oXk5mgeqoyKStr1JLXFWQzhof2kzHafEXWmLzQ2",
  "key27": "JPkksUS7eVHj2UAKs7k7Y5RRbZS1CtoeKatHbtPceR5BAX24T4qz3YLgXysYtfE58Y59Fw8Zdk9hfMTZFVwhsJy",
  "key28": "48zV47jmobzFpp7mok9tD7SDNdScQgH5hv5hVYVnoUvXrSJYQFNMvWegpoKj1N1cZuwiHiGjm5JgQnWmT8jcaaQo",
  "key29": "5CbpidDxw5BtESRxead1EEhWZtjGWpVzKoZHJDCUKi5w6Pbx2qAypj4YeCqwGWBTiMFmQiiri2cHgQ4iRFvKeKij",
  "key30": "3aELyduN2xPVRur5q4L7F9HpVFYBwMHmu53Ba2hxG5xhcNoRfzWLyCxEBwXe8YQBtrBmT7NXWByg5UFNKPsJgSQZ",
  "key31": "3gS74RGvg3CbV4FrsVDkPJLgy2GCTKzTV2HLx7UEpLHMNtA61wnPdyAjPojQR2vrko7zP996xtai5jYysakmU4md",
  "key32": "2aMnYVDGQ9YBEfqxD8CZ6qJYuZFBq6f1KcUMj3o1XDVeFHgemoH6G351DpXqGdqRqFSuBijjAQVqqvmaoDPmmDah",
  "key33": "4SCSZuHQCBDrSsjyEjDhpNaoytaxoBS5ru2aSpttNVVuP6A8nWdUVm2kE4Tpy61J2Zkt45juM7X5iSzLEtQ9sdpL",
  "key34": "5RBHVs5SpMPph3q2j87gU5sarRw2AN1RhYDzag7j9QJQDcDNDJycYJyWkHeC6n7aXfPN5mJ9DnnGxJvAHoSo7t8t",
  "key35": "2JFaGwGTJByrZqPwtfWmbfY3ZqPAczEpKwQiQgF67Aq7aRHJXQN4STjjgSaKjNQSUMM193N6nb9ZEkyscCdDiY3R",
  "key36": "5pmHNoo34Gqw3zba1Gch2MRqchowS9t6UfWH4fdFBJFvwpwwpPzjzYH29MbXXCkwogtKwp5fHssugAWsZXfYuYVh",
  "key37": "2u4hQp1otjvVm49Uk7EWdcMc8ryz8wSMBQnDJ167mgmfeK6YTbQTUpzxVa6SrMXjcZ8UCYjFuFwCqe4rdBCMoQrh",
  "key38": "2se8TLXJCjKy5hhuXcJ72xzjbTTEfbNbs39uUujx8H8ybwiCEnu7kFQ1ZJSLQL5yfJerDqbnV97wfViSejZVikmx",
  "key39": "2sJSNqVfL9bQjGWaBehvSVkD2H6DEffhGz7w7ntN3PR7FMfmpuxuZkxV8D2VQEoUjefHvqh45GdQfa2v3YqQym3B",
  "key40": "3m4bcFgEwVVjdF5XKUwR9c1YjTKRPN4Xrak7KSTVwaD3zjRogRsQ4ns7cqjTtpJQXSviY17qWZz4uJmDxsHeNmui",
  "key41": "7iSNJHJZyHpnQNPb6MQA27tyXm3ceh2QQetyW4GDMTPaTjpA2FxYLNThD46YVXMBGzYFD1qjJPuSzA3Sw6Puxgd",
  "key42": "o9GtPrVbXzGWPv4DMq5Zxr2Ss4vRrcK96sDz42J1reMAadcDPEUNFMEoGvmGye6A9e2hSUHEzZN893KXpvBXbUm",
  "key43": "3SmuWApMPcbBrDkq94PS8tNkPjk4NrkX6AR48kfyRzuKG4kbLyE2dHmsNV2joxcBLcGHRJgGpzb483XJaHwvmh3R",
  "key44": "f3YZ7LPFgDEe6zQandfncP87mHt5bCxCTWusMthMXF7jhyRCvHXQDG6oWGTs2yPUeJA3rANEhzLrQWGaZVvAuVp",
  "key45": "DxmKW9gMrA17mR6PV6U3n5F72xuEgNFBoRru1RxRH1to5LHcqfA9cHh8vPu9KXz6EJDRwpxbB3gZW9ibRPRJrxR"
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
