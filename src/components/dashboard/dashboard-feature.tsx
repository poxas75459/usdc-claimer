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
    "3XG8hCAp5KBm7puS1cbQUHkBmFwUdQ1u2iTwDo2Eifk2YKAtw2BoTYtexNyocGD1G38vb7jbSzhHqswP622o8hAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sg6CBzc4aYh2LcA4K9fGgCdg8Vi454tZNqLMD3YaBbyZC9CXQkuVd1PhE8DgCt4xLDQoKqinbfhXkNyaYN3Qyt4",
  "key1": "4k44FtFPNy91GuKCFwk24F2T2VVkGnoHJoUayjwbojqJs69PenJHZcdvJERasdQr7YVKw9JhH43KSngkdXctArjh",
  "key2": "2DPrKxhTjHnG5aefNDUUopcGstHZbC9eR8t7dwD5W3mBHrqL9a4hm2GwxkKXAYDxcxciSrSGSzs3ERFJLqQZX5NF",
  "key3": "ErrV1kQ6FEWSz3q1VwJxS6KGHcBy76DoFXZMuRzN3B3up1fRQy35EbbfSoJqrn2MqMfTBVnJoJrygwZK9KJeJaA",
  "key4": "2yN5fjvo6Ho2QWXBzFpAUvkYX4F4M8s4SC6M32ZPVykBMGi1r3gdqCcy4wwWo1itxEcFJYb1X3VmmYV1oJ2egomx",
  "key5": "3EhmU1AM4e532keCGNwZSe7FrafgKan3B5XRWbbCQA16q49XBVAXfTe9E7DCFEKTKmzbvyhGYzgjG3sxbwdJPuQT",
  "key6": "46Qv5H5c2pQRsR79vzMg2uTz4RGA1tZvxT6yM348qtnce3kWfLaUDHQFnJHpTGUYar7kCdmEGbjJJqtJz8egiK5A",
  "key7": "644J6wsYxQypCm1Nb3vweeQpRM7HxiwhSaW38VUZRHAiFJ1DEVP2ki4w8iiHJ3eD54c645PocbgBFBuKWdxmDt1Y",
  "key8": "5K9YRQe7u2LpNR9nRGHKkosSvYYfNDk1bSZwhKtjTJ4mwzD5zU2fs9f9a38x8qk2VvtHF8uhdkmmk6BA2GH6CdiK",
  "key9": "52eJMugHGwe9QAjb13w9Q1QerqUXY4oUXm2D2qa5BFbcDc7c9nCoeG8PHFLZ78ereFPqpnzBgRs8eyhUv69Sfux1",
  "key10": "4T2L4fv37AumVvrMhMmmFhZuPs8xfZaAE4WVVE4o4hNmzpv2arCVBKMFiGSBG5LiH8Qe6zvfFDgS9V7tXtVS4J9x",
  "key11": "5wTfxq1mZ4AJNssyPQb3KW9FRmkanNx3vihLRb1aNk1HK4HSxwZEtWhFg8yXsV2YPtJ21YbKfoo5UE2iASQ4d8rB",
  "key12": "4EjYVEWuPXae4zG78Ji7T9ydguZvuo3Det88Q71J1XyntrdRbEaBzL1GmqxZjoxrWJcMeaqNYaRFuH4wxPH8o2U3",
  "key13": "5TRvuWzhifPPDsiS6FywK9xmddTepLHzWzUkU1Y1FCcN2uPbmHiMN2WA2QUD8G7wWQ4jWbxdAP2H4Jc5hXAhzk18",
  "key14": "4H7QM3bo8BtyqPkdXKwnKoGg1YRatv9igMAPDruDw2viMzh98qtaY5B4TWjBzFvLC7F2X5p26fp6r6NL79FjvBxF",
  "key15": "5g6rcRhSZpy57tPrTWZsgKs76QbfjTViV4aAeAFZtsFiUvUnJxq26T13sXNgGFuCkSrSe7w4HWuE72KF29tnMpf2",
  "key16": "4jAeE8rLdso5b91eR6gVhaLVTTG8QUoVPsSQ1WDZbnHgn1GQYVzq7Edf44qz8Uv1KnhA27BwuXYXCukNwzQrQQgw",
  "key17": "YzZSz49HLGJWPKnzfBbNCUwC4JTERyQeJ1m3mEkh747TqwyktreFM2P7TcUwcDzhJxH8vkfxiu22GTDKJxCiJCH",
  "key18": "5jpUnXCmK7MhkwiHByhdm2RECKFmdEC17TVWZGMBHpoS8Du4MVkegYi25uUEsy9YCrTebjN8p5aFeBf3fctHKvSw",
  "key19": "37zkXrouBAVGLh8w32GTinJJBhU1VvR3yph9LgNJK7ZNFd22bXz17aaSVRxC2Qx5y8ENvswoaXQcePtYNnZjt3kF",
  "key20": "3Wf8HczWCpDr7HbFzT7vuSAEsXSeie3gXSdYbjA53orxBk9M5S78WMZTnEJrcjo73jgk5tcxSt7Pm9Y3RLwUbyaB",
  "key21": "3Rdp1bvkv1GRuFnGE1Bhxm6kZoGXMAyiqjgMjfeW68UHnKnddq9xRxSZp9CorhF58Adoj2KxNR7NH6pTsCQXwqPp",
  "key22": "3Qy6YfsugSeXFMVftSia8atDZbzMBLkKqmeXNMUBGszp6YBpyjaAYHWHLV1on8HYp4yvbLNSzQeEZ1QxE2XZ7MZE",
  "key23": "51AyHp5m4aWLgJdUJro6ompjEcrVhCVtix17VLxCo2QD7wuQbfvUSGeafDH4msJrcSD3yd6WSM1w7vjELUDXm4pz",
  "key24": "2BkJ37TbeGrLy8f4xxhxDbEsHKiHxx2mGdPkzKS3ydox46WPJubPKgRvdGc3sS4HMJ34esgFHu8CNLkBfRXEJnh3",
  "key25": "45ivonC3Cak5rBWCCtpFDHywUgHcaWqnBxAr5Aoa25dCoHconPr3nC3kk49bqC1eMx7hq1WvzMvob5Qs6xLKhRAe",
  "key26": "5F639nN76U8p66Vpb4Dm8dHuXnqTeYk6ymYvSwbJcVuwjYUD8kcZQMRKo1Bsitg1CVW9VyhMTscNErQvZPw7MSmU",
  "key27": "4p42fbYRDJpHVkmPBdAcZHdEhrBy5b64arW5UWwpQfctcykCtnRFGuh3DsUZrba1apMkPDJf4yYq2G4eUSFTyoE7",
  "key28": "58FvkZxcBHCgEFtdrroUNNkCZK1wmjw38QTF6CB2rwkxxsM3bYgoud8V1jJt5LRNH6eE1z9YVxLQhJvfGi4oEFfr",
  "key29": "28RHNupGC2VLVuWDyNV6FLvochMvgCbcogCnoifX97MxToVqYQ8mCaJETKgNp5qxXikH9WnkUPKgE1JAjLWHCPLA"
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
