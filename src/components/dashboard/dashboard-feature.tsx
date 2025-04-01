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
    "4hz2L52kfYSmYVHCvGDkUkCVdMzZxHCzN5ftQNpACLij1axu4vcdg6xW982UHg2t4xfEMZFTGyESs2vga6s8NJwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cz7xYQS9HzMRq8dm6jNVCJUEiQRtGrxXW3591WcTUrQAG1fNgawT9PACbrP9uUs5VqD5Yu1zWYTCzPZf3qr5dkN",
  "key1": "29NBF3n4NrVyMGhHrVKhypEXL5DCANu3cLWrDijJjSM96TkW2Y2Ro7U6ay5HVaa19bsnzadNnjvvpUKPPDGZ6x9v",
  "key2": "3GXLHthjtr6zrU2aFivvBgcDor8kvneNZM1VGiaJgv69qzuvMUvRueuSKCrJrd3NcV7o3o9FfcHYBymWhA2T49xC",
  "key3": "51oeqQncr1wJj34NU5QCoBdXUro1tszHkoGFoFt1HmpKpeKzXtZ5whgopr9dK4PyjsndGWxdfzSJ9bbVG9PAB4Vq",
  "key4": "5GeMxzpsi9F3Dc1MZQhaf4BXfboS9acoAGmPPaFYAMK5svk9LhoDjejsqytwVc9iivuAwmPUPMHVSPfbx2uPtT7Y",
  "key5": "4E8Ax4JfxXB5pXTGLsP678uQFkT8nGZvismkahT7xZcLqZrHjtwhmADYadeHF9yEbxCvPDQrt2LEnyBhjxt5vqGG",
  "key6": "5jh8NCELnu4N91nVhHsvMzkLbHNQMWj4S18kerfeUaeS4kXnxit58rdCJKdFEnQ61NhZiSMq8pgpacHiXarprfLT",
  "key7": "2kEPRXjgcaQMdwcMcRBSRgoeB1CJXMV9hWr7RPn9BMKSg2V6jCe3BfrathCQ6DVM8jTGJfWv9WNuzsZWX9H7Ndrw",
  "key8": "4Qm1rjsZQVVMXfsc8zL5AqamSFq5r7rRWUvhWP8UDniH2wnK95MELUocj7Ki8xmjKbuz23mhrHpHuXK3JmLtYCNo",
  "key9": "HKJTupKANVeQvWfQPqLoXuk3dkbfZB2xcJLJbjCPpNyBTJaQDsEkiHbBVGw9ygLBECqDuvV6PU6ixb59dhGrvVt",
  "key10": "4nijQaRT9AtRmVLmZiNudCMe11boj8H7Mir6Dre7KKmATzuCdaaCwv2h13aCQbgvDEdXwLncsb9WEXbk22vS7PAE",
  "key11": "4TZJfRXaUG3cPxfrzJrp2XVYRRobDEYAqvi22CRXRHxAE76qDz16U2L9sNbP4a7Gx4KcNKx6b5wDzbcCG3pVn4G2",
  "key12": "5FAb2YTNFDseY7yjQXeVsR6dUTA3gtFnxmNBxNsyA28vhKE7U5zEyDSoJUbveVtjW7epnSo47wkScCB5JM2GxSdY",
  "key13": "36JBHkgaiB1uc63UC3asBot3fvXdfmhrh39sUp5xFe8N53MUEvtnuXrxJYfJj5BkE9phDLh51hyvh15ncx3FUVqu",
  "key14": "jd4DjHygMRjvaf7pyuok91HvNDBQ3ydrgQoLY1hyQBKCdgtzxoJTERTub96pAHJGhArc2LZc4PxWnwaV3Fgzmzw",
  "key15": "4jEgdPYdaCoDdgxy54d66mxp5vpmgsgwd4qnZUVp88RCna1VnZy5X6DkEPBFN7vRqnM1zbdKnWrJrCa3LqSNXuVV",
  "key16": "387yKQtdKziL9Lu3dTGBb8fec9a4xtCDQN313rusRyNEY1AXhDxRgJXMSnHBvK6Hfjmj3ud23v7K3bKNZy1dDVHR",
  "key17": "529yBVYeLV5RnMVKWGKBC9aQqpHErhbQBPTHS7BiA1wNEWkXL6icjJ9rCXDt5yRmU1PTrkjGgCg7jx1GwSAB1HE3",
  "key18": "4tbFw3H5QnGK43Ch7p1jM3Hq4tcnVjH6NeowQNevncHoAEjM9ouvrUyDWqJnU4M8s92tPGXTfvwhvschkoNK8rvb",
  "key19": "LdsaWjK5N7dC9pChCj7LqM6C3GkhaQFyv787ccVFb8oedim7FpgH3uym5Tkt4ndagtsW8QJECF1cXDdWaNcBhqx",
  "key20": "3AnqAAkRE2T2zxKJNfTSSrtejs3mJDKdiBcaKT7AZXJwBBULWTQYaSzZ7b39vybrVwgpHW7LA7j6bE7HhZ4Gg9Bx",
  "key21": "3SvBn8pnmumUhc9huTuBzNmDqniih2uVLwxNXa12XBChq6oMtLeaNjiDnJQKqZp15ZaVtz1sNnKu5hLjtNG96PL9",
  "key22": "2djmCdy4MnVMS42NTSLruuRM26u9ti8CnH48zYqFTVQRk7NgtKUa33DfFQsr4ewx4XPBjWWpQuQwnkFomNTVPPtD",
  "key23": "5oLLnRTP2QD25PpBTkegEcagFEfsuX6QxsdP66wwL1o72Vm624tAveeKTCpHRP3SfU1sND9GzwakhMu7ASoCVodZ",
  "key24": "5qUz8vqHTveUvhsKdHhDBdGSipQf9DQa96aF31nbW3dcawhYZwcFjGi98jwWvhMmcFTL7RcYBn39cmaTeT9yWyaB",
  "key25": "28eZTq6BUDMLHbGcgLmU8XRW6v4dFUV8ipHnFpfSd8Jg72GBGUtM3C6yJaEoPkT96o5Jk6c9FJ4HAkZVQtkzjfTJ",
  "key26": "3rQpnTs77tqauDyaS3tNr772MEtchrWRXhAk5f7gHV5paVKkDuEqpeTWfkd9m8Akx4cPRCoNNpcXXicEeRdz6Cze",
  "key27": "5DZPEWUv2rbVpzrF3k3HxspqW9KLJXTNcj5XrWFxymBFCS9iYEroNyKLgNQAYZ9cfPwbCyCYvph3ZRwemLQwgmnq",
  "key28": "43QQBoGMXyuLZ2SLK9JxnvfGTsYezzWiHi6W6GK8tQsR6ctmLViRU5byPKfyvMb92Smc2BSDbG9NNfz2962FwVfw",
  "key29": "2KhJqVVp73s6cnC7SUnxENGBgQ236qxckmwvb5D1BhJ13wQiqRuUShqytTKnhkvaQmsJEkdP9p8YJVBP1vbXidEN",
  "key30": "3ZCFXHPRWpjeZeiWLfKozEcYXTx1Zru7GjSSSChst7Vcq86HFcuz8h4NMxi6FsMpEnLbPrF24aak6DbuNm3LrVyS",
  "key31": "63on7WBkmSiX9r6zE5K1HYJAXEdE1E44GEeYAM4YJazKpDoTpDwKTcGt3YkeazjAvsUXySGXs3tH1K81fdLQ8zs",
  "key32": "64mx2tcxXw4R4qrD2kHzvKjd2EPEWBnGhTUj4u2wMD4uVwfUe19jZTV7Vc8yo92XS2GjAsX4NMkAczNHe5sVDDno",
  "key33": "279PrxavHnmTkzqkQVxpYgudjQr48VTfAVPQcHp53cj1rPT5wEby4Cp8QVbriY918AQCVcfAEcVuQLN88mGA3Dht",
  "key34": "5c1nSpMkv1h98vt2YvAMB4cv6QdtgoaGHTJhybJ6ZarA3CXbCLnVC7P4HVey7Tx4EGpTQNp6s8zLkJu8kNaRAGZ1",
  "key35": "5QsTXst5kv2AwjyhUPdbUA77QyWHgAYgLVmu7osGpJujRQ8Qtp31NbTLCLXnzp4eUirppg257zoX5nzZcinumK3Y",
  "key36": "4vGpwwKtcAT5hfm3EcmRTPayrYhSB6MjzKKzYNfwR9CpfY9MWHj8LT2AtWMB2PBPM2yprY6gbDdDA8zqb6hxegmw",
  "key37": "wdsiQi91jpazhUhz1b35F7AkUB4VhdKmWWr1C6rx8jXMKHHSvfJJeTBgjizSLFkQ7CDuU6cJ8arggqqTmmRzA5F",
  "key38": "3h98HwDk1YygmEXFDAajzbPRGapuS5cP1uDrQodQShN3uaCf3VRry3v4XVFH3gzheq3B7UZUdFjXiSuJJQKs2EJJ",
  "key39": "62ycV3PAcyA5c1NaE55PKUDv5DpxG6iUgiWmFx8oFeSN8zATFWUjdK4xbYHqG3Csp9sKdjAutRPk7PBmPfmXZgbR"
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
