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
    "3qHFFpLBcCWvnmX9tXsAxyyPTQerkpDWntQAzoSMfyM9k8L37heMMq95xB39EFA3fdd8yEbUonxj6VaqJKpFML8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VUZb1aYmFomGa4pgRMhFS1FJGQe7zG7pLKT4TMTt5e3FHBCAzGMiarWA22tE3tS8cniP4EckAQXPo6m8xZaC3z4",
  "key1": "RszSnh66J9PgAvtUqyjxaNZAjYVs6psK9bEXNmu7qr1sa4v5DYwCpckTUJQoLuLJ3zzyFmVABcLeJ6yxnbBMDCZ",
  "key2": "3oHiArtAVeLuLqBh6yzRk3o9xqXPQ4psg9DygtJm9qZ3oeGJB2aKPXR4YaoeGfc24WUYx5LEJMWTN5UV6Q7gQyEK",
  "key3": "3PTFUcPC6ZQNHrmZ11XCPKSQBDz4nqHH486EUnLSYyBQNBXCKdNEjUdCP2UexNa5QkGD7EuKAU4n6TBVbYbkr9kZ",
  "key4": "q29whpYXp8JhBJX4trJ49J843KwVv5NUyKZPthKDDRBLgwz78tMr61cnTcxrWeGkQQ3ytbBufeyW7HC1KWFHaZp",
  "key5": "2pCQpJAs2B9tLWWewrYHcmqPqLjbNecRTBpVDgmzPH8trkDG9zvCuLPSwFDrEhMWPcdY86vFGmcsQuX8dmAxEVxH",
  "key6": "5HKLwpSA6xbC1eCv779yKaXec8bS5T7aroE47bcCdpvKALGdEDAWv1VTSmczS7tutFHJEHrgV373arajWJYrsKrS",
  "key7": "CxoK2AN4C7GVQJnooK2XWYsikx7aaGTasBB6E8ohrhvJWjHtEYVn2aZ9W8PV8mADkre1ZPWJhEJAxruvFwXEjgg",
  "key8": "2QkzJy7xxajPnJkDnAqie1ED2Zs485koc2XwUcyJm8SHYPM13T2g3VJ9FsYtN9xatn5mCpDNpocm4RV9NdiN7KkV",
  "key9": "2pXoTQbaw8punXUAgxYJvzU9cfhXYkobSfU4ABVzxMa3seaE9H77ojr7aYjSeWufKyTjS5QBhEj2kpgwACSkETMi",
  "key10": "2Uphp9qhdoNa1kiYEpDSjxVRXoERbK6kgSCeuteKRvBGoWPxc4ApMmeBKKoqSdvb3vAznMHREKuVxwEcbR7vurmJ",
  "key11": "2sq1hXikVDk9yDHXotVC79Rg2b4LswWmGz3Bwv4mdAJiNgfU4hKfL5bfSwSWSQCvB1EzWnFrEJuRrL2z8xyJd9N",
  "key12": "5MtPGqhnAiGEwgadoh6GjXAirK6cNztyVMonRzDbdS5wvtkJjEMaSyFNq9CBJc161WQpu2u586gi2PPtLEAV5VoM",
  "key13": "4BjdQ3cxfBJtYZtyKVZbzzp52cE7JWye2TeHeagcA1ToTpbXNDXLFqXTWp8J4GE4NyNtk8jXYUyjS2oyHAYXddk7",
  "key14": "5W5GxNZUhWQJXk4jYzueqtd7EwME5vmGvpfdj9nxhQQhzPedAPMWCPpLoriQrTe8YKn9eUwzhasySCEwSZFhok68",
  "key15": "sZq4K7p3vbsBZg4Y1J1ti787a1smPBsrugn3B9pT2SxD8NuLWNq217cHm7bpV4ZJtDo4F7bNcSrCgZRv3GauHWa",
  "key16": "5cRHWS2pA5BQxRxw4Eyfd68BWN4azvft5x5wvZ12TacYczibzuLuyGhFqNnwfSTocg4XaSRT1tp2RnmbmCXgtyUo",
  "key17": "5HBxBw97bMtVUzrkAAmESGNt2m5JKLXGG4CkX4jC3mtMSTePYudcsjQof96uhRobTL1Co2tLXMnEHggSi5qky7kv",
  "key18": "3oxkgUY9iJm6iT2yK7pbnjPGKzRpqaaxfbMdqZFJ4WA6WL5fe5rZqPVMaHXgMaDWzkBww7yEQJYBHLKb3wAM714Q",
  "key19": "54tN16B5CG7st514EVk31QXLW5DtFnwCgHZsuJpiUd9pxsW6Dviy4ovp2rY6mFVgVgcBUHf2MngpQWxo36cNKcuY",
  "key20": "5bJazUC9xQWfaGsyZn44KzVPQMRTn8bxFFygVXfq6prGrKtq1jy6YN3UakPWf6hiwKpqkFvhdQedUhz6TbqSkBaY",
  "key21": "5KaQ6weM5aB2dyf5rwMNJkbPTE3KubaTNqoS2MrHSJbQWfGRozDyKVr4mxGYh3cQ2wQ6DPwxzbS4xeE7R41FJKZa",
  "key22": "3dKFFrMRa4cubkJ2XNdbcvynnuotXy5GFFtvVbEmSy8YfGPH3kGjTMcMJDSySxs4x2yYrzNqqZxZvBSQB9yuUTN6",
  "key23": "Ghe18EXnkdpyiHEHQc6YCA3XBpwZ8bNuuhCzBfRwk3aAySqtCZpBcbYC3jbBDvAFZDn4ervwJfc3qzCdvxtsLy9",
  "key24": "5nUHgJqeUGemGBftjJrDAd9DD7RFEbfMRXpBHxEHHFk9x4KrnizjCWWDdKkaXuEgfhDNpxkhekoZhm48bjgZniWC",
  "key25": "2iSxnTMasQKLXEJkkowiCKJXrQDACVqXUWf5FFYJZzqgoZucA3kLsiVoaNgQXqqqzJAmpnajjQJ7PkP9REh8b898",
  "key26": "4myMUJXKjbwY3gqyHx1WNdnswtGLnp3dBAJFsgdWFRKNJpXZBzZBz7r65BHmYoVoQwJKqF748LV3XrWrneoq1KPL",
  "key27": "4d3tzdQDZnuonXeErym1ZiaqcNyiJycDUkDqSjAgkp4WSqG5LHm538TKZt6hqpymGXCC927D1v2mstE9yf3i77ap",
  "key28": "5JpYReEq95N7wgoU6sjTmBZhm22Q9fagTaJ3aTSfDLMPY6vBLdtHSVv6qkFA9oNJeHCzKZBGwVgXQLzd7Uu6qeQR",
  "key29": "27mwLJsSCZc9Zo1bzG5QfKSLv792iPPkgnVLemvYmsgmrSwTu6TR19TBx9V3kZiv6nRZwGHSi1oEkDYN8out7enT",
  "key30": "2VuxohWHnDvQfPi5WYVoePRK6uyuqiiz8nyBDMgarrLsjawSww21T4xqsXRMu4tTSgoFJoJERm3kfxVkiZHB2RbP",
  "key31": "366LRnuSWVwe7XKymeWzfnizbYzyX43BocgFiUqo3CGoFcFjgAhG6Dea9B1U8XsQ4D651r2akqWqa9VqVsqyx7L3",
  "key32": "37N8whr2KY7v5FCjYNAvApGzrjhDBENe5frdSjGxscinTHubNBor86VmtAmmR1Nhq8FpZwoHTrwpsyLuK6FHYgRR",
  "key33": "B7q9PWffrVkAeZG6tMG2zMaVX1wYiHgRAVDdyxX8D5zC6GRPDzGm7rdJXggv3rAHP2ycoJLRN9C71H56isuyieX",
  "key34": "29vZ7BJgBVS2MUjeAN7aqceqYE5YotukXKQDyzUUoy1P4dPX5Hnx4WZNwQVJF4X359T5tNevD5JAcc3nkYSwWRi2",
  "key35": "2dwKU2XXsNozibDanVjH9cZDunpGj2Ezj88qN6hTrssW42VhiKf8TkYyuUopAtHvojtfkkDTnhBNS8nezS2v9vcj",
  "key36": "3ddfba1dZgynE65PBxUUp7PkcjidLmwQPos3JYnnpfcBmEH53pFB1aNJkokThLX4xZRrSnFcJWCwamS1xzmqkwnb",
  "key37": "61d552Baf575rrLnCu9JAJ7RBYjtY1RAuwEc418RYu2Kxmh81DFtiEEMRghebWCmz4U1MSK9dARsy8N1qTXw43yP",
  "key38": "5GW9rWnASqGVU1o6VzmKuxG9i8A4u7WBHL9UFeusVJzRQHdRTpQ7aR3j9kAroiJzmtMrhXw48XhZNeBJbrps8GQp",
  "key39": "44WhNvC6F6uA2tMKyeqr7mZgFKe7nt5N42jrzS2Kx6MgciGzYvDq63coesczywEu4Hf8ajBWPQqT84eveCYwMe9K",
  "key40": "5STuUjwHUPXDbD5h4kTfFivT5WEjmdnzLpvMSPJhVykhjrcGBwiPspVdKRS6Fihwn5Mex7GP4KQyfHnHg39R4nGR",
  "key41": "3GzAaLg2gP3vHfhZhYtvqfx4AFY1TVwrB76iDECw7eGaEyXLekmSs3nNdZFGW38LUsihRXJvL9Lyh3UA9ia7X3ie",
  "key42": "H5Gii4NTzKwvnNFsuY8m4Vb1ThH1XPBw9gyhy1qqcKGvqKW4QXwdWaRngeBuci2KFiijH9bFY2zcgDeY9mtcyYY",
  "key43": "54FFmcKHkXqo1BVjnFqoyweFA7rLikjpCk7ww7EMerqbcFh86MEEG7c4MdU8UAfHiRXBsxHVhA8XmxEzV232Spe1",
  "key44": "3fNLFZ39s8Q988bSEFtxWi7f3iJ5YSpfJ78XtusmbMxS9yUDz7eeGzkYazvmUUFAjGxPWB4hJM5rDLAV8Ec769Ay"
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
