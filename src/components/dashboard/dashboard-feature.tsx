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
    "5ocMDjfpQzgTjKfx3YyM5FmHH5R12UerkL7d6zALwGqJess6yG6q9D2j854jAuCyjAPLfHuisqHo6fR4kD47ZRKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aLnkxj8iyc9Ne5KzrZCnRLC6qjxWuD8wTchAQFTFskLEcfhZAdXzPv5ssvrR87NvhtR5LscKLJS8f2rN6yoKzpP",
  "key1": "S6MaQjSHAREoPAUfiyzv4vVtVSpXPZmf9kQ2F4AsR2GgiSgijfhSPX5KDNCFTFK6b5cnfi2ghr7WrQJHcTonnEb",
  "key2": "3Hu1zS3TxRKL5YaHiEZSNMeyArKvH7pTHgbG98phqckyBTMjeM3kgRQLNYBohT53DPHmUn5QbaFGRq2CnH3TJ6mw",
  "key3": "4B6LvUZpD82EAZ8maBbmdig7WAP4uKRpBETicj3Kt38qxnzsLTypu7exc2Ju2MNiQbNcbRNHAVS484AzvKEAjq5d",
  "key4": "3kaB3qT9yaBvDxSgXNPxN3S26CEFmsGEvn2J9RzdFN75KJjzyb5azZB3AdZDP918yhHbmFgtgDkqNHkUKG1nyYgq",
  "key5": "4WR1zw9DfG1DYWf9E8g9wK3DKzNeEQ77yQw4mj6cxmzCqkD69pM8pw68G45kgJwAKdWps9782MvCwnZy4CtcS4XN",
  "key6": "u2kThMiai5ED9TdmVHeUNojaEtSNWHTnU2BWpbNFhrdGeJ9Kitxyqo3o4ay2Rtu9LtGTMqjVrdzx2DBBTtYAy51",
  "key7": "3jz7swRt7zY9pjDTgRqDqZKVcfMoG5E63uoh7gf1MDMXFmTniz6Jf5qfx8tugxFDhGjspbbFVqPbFSD81c45ZFze",
  "key8": "9dYMaxQUK7mxhuGe4Yvccbhj4gap692CVA4xUfpGPZDXvkunjgUwjCc4vZFfwymLe1fhMWKQkB3wVYZzq3kUyMn",
  "key9": "5YsEGfFAJqRoSJyZentnscNmdEJCD6NS4RSffnYGFhkX6eWqMz85X4GcSS2vdPpgC8h932nHcdikn7pyeejrCwRa",
  "key10": "62qU7AC9dAAy8rfMcGrYnmPbxvWtzmRazy3W33HNjwdg47MrFyoW32iYe4rLg8qARvqPAztaTdyHbzkFzn81xQQ",
  "key11": "2MWbdhfgseWZUFL3hKQWE13UZunQTSz8xHWQiysgfX6vsRu8kU8gQpkbVjpmgJLqWbPyFQ5B6BvXgiDNC9xd3cY6",
  "key12": "3FQRbxyMkiwJgjnBRUrnzWDdEPxkrASnRhftwa2EaMWNASx9v5LyJqyQhd65D9pKJV6RxFDk1AmEn6VpsewvBTbk",
  "key13": "q5b88hyhWvh3fNFh2nmTFKBk4zhugVGXtrs9EimCqmWaCPqESdcVf4ZQwMFiVdsX7USWsK6cRWdTsPS8AqErxJ6",
  "key14": "4cTKjcCyq1HLTNHXmX9wbmGDr1sM5oKVnZYfFEKNk7Xk2VCkb4R19Bpd2dem6UFGhFADZNrYNK8JL4fhA4J1JP6h",
  "key15": "3ggsc1sBUihArgaQEaf7vW2yjEbHYfEktzyUCTpZQAD6GTb19KmfxnJmsxC3BXQnM7en43nn9EvY79sDDmTvSf4M",
  "key16": "3cVhyje9VQoBsDgKhmPVKU6WBj4hp8VrtfkJrVwyFdX53Z64LqpbTLviQnHvjde6BCT1WKGzXqvQFwDVHBJ6oFVA",
  "key17": "2PVCLe6T61b4ZD9KP3BgeE9VsCLmVP4KVSRxbuMcXFUebQzHCxFTKsDxsrpA1F7w2EaKrE2zBdcAXAsLz6muDduT",
  "key18": "4f5xjw9kqP3rESCzjvYjkWpP3GxbDZRZPE1ybEqViGrtiYy5Kq6MXuv7CA2iKg3ZkAjTgfVtgnYQ9YX6ysXZEVEN",
  "key19": "2QU3faZ5cE16m6K1G4pjuoQKKLVv8SKhWT6m48iUFTejuLoVJ8WqWExi6RBaNBfEr35epQnwKAqhEr7vW9bwhtnN",
  "key20": "2LTN4WgQHiT1rZLFApTTVRtQk8GqhwqByihttWRkR7fdDfJWHZovSYg9nRzSTjKLCGz7Hw4j6hXaRH2YaewELCg9",
  "key21": "4bGE7KNP712zYQqBbMbQzctC95SexJA6PmirmTPGU37UuN9gKgbA75fNtAuHvV24V2F7GM9Krtq1gqe7mmHvZNuS",
  "key22": "USQfeetPzcsxrQ1UfbLMksfb2AEzJKeBcrcHhdAtjooRTEksZZVanaaYnUVcUopbj5SW3vFd64K8uiTwcCAaZ5b",
  "key23": "2ACFykFBYDingKCyPTvQC3d8vTVhrnmgMwPKKeLN8Ed7NH3KTjLuyZWJi3Qa5TaUT1jdREWAKeXX1bzhqSngUHBo",
  "key24": "52hZEWo8mnNa5nVFDMoywdMZN6zaJmCa1cCoqxifTwva7hLC8YnZTzdgU4Sv2hZZRk9EMN5pnA8xDW1meirnebb3",
  "key25": "33cXHnRWstkgFzhfUHDCCEtczVVdWFDTAvWkhBsE4o6moEV6JJsGqzb84tjyT2t7arKEbzmnXm7DTEwFWXVQHT5b",
  "key26": "5pmRFnuDY6tiYUwh7jvixn7Qo4Huq3qrWCPa99QAdpYL68GSHJmaMBkoaMg23urK1wsxmQZvRMVsd7wAvBj6i1LY",
  "key27": "2bTCAztDLNhw78ohTWkBQi1vT47tdcQC8GDiXUwvnVHjY5iuyMim73fjA2cJ8GABRtvZWFqHq82WdVHcuqURrD9T",
  "key28": "aBjGd7MZmWbDHKxwwAxYnNXWu2R42c5ZhFYGprjttJkK1p282esZhAenJhr7ME9RZFU3zLnMza8DadXVqY1f6o7",
  "key29": "61xKhsdRi6PMB8VDdtf6c4s97t8RrHqT5Eyxa819EPohRx5UX2rwNRTi3UMUeo4nJoZjRZ329UgNjZJX3jG6HJHt",
  "key30": "o5pKFCNANdzXsj2cye6gUgqrq4VNjxz9cG1bG3ztq1QaRvuqmqBZpxgtPLTduhesYsMM4aTQgqmwxjugceWdEt2",
  "key31": "3yYgoPgrc9ZU4U18y8z8Tyr3r93WCuoKY5znkS8vvPkGVJHRLjFHxchfn6Ugy7J2t7XHXh7WNzPdma3XL9DMqe24",
  "key32": "2gW1yTz5MmfhvytYW9M3dJTw77iV5tJz9eE58Bwme8TaibHd7jhSMoBPLi1RWRAf324kg2Hh8K5Zc3NCGADMYCew",
  "key33": "5At9VsnjnHUpwph1X1TnAYTn7sKp2BTcAqfEzoz5JptNZqzNKrpQMA3WiTUFc5zLhifGxzddsCgRkY5ePajFmhNS",
  "key34": "9UeFWqTmDJwUzdvpn9uJu1VWZGydifd9uXtgZaFSvLdmm9XJ9w1KGXzBEZayzeEqaCcJ51hsL8SJ3aG4nNspF4e",
  "key35": "5LGbFose8D4tUVHzeEm185mn71U7z9JtcsVywo6nXXUXKL91UN7Fj8ZGnuY1rhtbpNS3bxJ4MizK3iNk9MWExc33",
  "key36": "3yWvz61RCohfANDEoEyPEEzhbZZGMYeWU8ZDXmqRZCbTVXZ9KQfXviJdh7L88vm7zLYwQ5LouhNDZRLukenNocM3",
  "key37": "deo916Quij29gqyyMqiX1LwiVnpGV4Lx6v1mAvPGvdHPco5oqth7vqaqKBb9GLhtUvMgLKZDyG6wbdjhY9iXyXh",
  "key38": "2TvBpVEKVpoVDZi2GG4NyPmafwhkjedFWS2dwKd6LULdPKWMNWSD6N6LvHZAKTHb7KqTaj7iwQyB12WugfaGghJz",
  "key39": "2YfvCFajh8GGMbynNYVM6itNwAdb2cUrpQanjMjVXtBruSoN1q7CVrhvK2695TLHWTXomKPgkYE7gfob2JEWCA5",
  "key40": "Ykz4sMaiJM7UVkBH4AqYppkRhc9L9EirUftfUM33o5Bkz4XxjDLW2y5N1irpuyJXGDiX5a3BJU416iGrqfKoRCM",
  "key41": "2rfuFYXsaJwaxtPw9TU5tn8qWZ9kptuMKnRN9tRX6VYrpCQi3r9ZTFZ5ZMCavQyMbQGUL3rscUbPVSKvamf8zKRm",
  "key42": "4QQtjGKdcEUgJWpZEjusSstEDyfToz6wPpAGJB3U1rxokhBfV9MeXUf44uF6qXkjYtWmoPrz1ARHhpaVnxPaFRBi",
  "key43": "5xF1ZaGQgjGLLZysDYJnbYH5Vhb7sqi6o3q11NCctZ1DS9xciuRvFa7EnKry8P7xReGLmDnNnbJxvbJD8ESsBC1q",
  "key44": "5pknppXKVSAZZk9NWKHaabB2QLNLCxMmcsAoqiD14qZqhKaKunkpvTa1G2VrM14FTDcvtsCDbw5GBGMbx6V5jSha",
  "key45": "4fwSCHcE5RiaWBtRGryH9cXQeTSVkgLpcKcbzPvJ2QHVwtNDpxA5eBYmUe4uGripCXMJfxRxERUw4wu3oMLbUBu"
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
