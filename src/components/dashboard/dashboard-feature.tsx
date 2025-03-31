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
    "4YSnQRTqhLdqK4UN7D2FvYjCgesjLwcyetEHbP2c2itA5eSiHWhaFEVo9L7zXGcBthNbHUtHAAuXYourTupqkugb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YjgYfuK6MpyJjpfbncB5icSZBjZA6dhYBec6PtdSRgph57txsMp4QU6MNv2tEdLEmWs1A2Lm41xjm5bTNZbghBY",
  "key1": "3rqYXzRvhBCriFb1vKtg2GU6GnnUqsj4syyahkwwRpBLhPKdzyKAwWGNryiVDMgV48BRSZ4oLwjn1GmpNrs6gkZe",
  "key2": "2iY8LFBD8RdxjPHi893vhwCJQDnGR4WokDuLpLDRkcaSiVFz6NVW2TZy2ZXfqaQaKGCdpEyCwPBGr76HGRRvaqjW",
  "key3": "2JtyeDkoABy46YpX8jwHa2Sro8Kt1ytQva8a3pG4Wdr7vyxaJXLhZg8z3NCpLn4JnmP69dpjhKF14X8z9fpKsMw3",
  "key4": "4ntypsdoxtuLXawd1naojxDYatWaeA4oNTKoAwjTvvgjPiGLh5w3XrirwcH5eVX8KqnpWFQahMZvtmVo82UGCpjG",
  "key5": "5Rmim2KRpjJZ9C4hFUdv3Sd32GRbEWswuwtZiMi1cnnY8UXTd43Sc6WP54MqnuLLH2EDrY9Tydx1Dv3PitZh1857",
  "key6": "3u549Vp5MouR1Dn5aQ1No57uEuUYUmRbL6BhDT5qJLJztfTpKKJafqi2zJQyFuK64gy3gMyQPor6hK3ELuHgs1QU",
  "key7": "2CFBXnADaM4fSHewsKQRUQJYJX6wb7Rc5smushHqBregprB4jYYVtF3PeKSKE2WpyQnG52gytSD8V9t5SRoJf9Vz",
  "key8": "5Zj1taWbNzrt3aSyzrveabkdRD7q2sz5RsptBRs2d8KJKDsiXMwZUEKtiSbnjuknEKrL7zL5nSntfFEZQL349ED",
  "key9": "SHdTjE1UFYWxeJ3rFkThhwhaivbpRBSs8AcrkHTJQtVEM2DxwCsJTq4PaFdHDWcbHa459XJS36P3srkLzZo8tyy",
  "key10": "LX8rYqgsEEtPXvDNrGVdTAiTKyA3EiU8fsttqUM2Jhjq9SSbemPDQjhspp7Eg94BwBB4hX8TtbtrEi4FGkLp2rV",
  "key11": "3pS2g8fuYZPpHkrpxYLCnSDnFM6bz1J3GpBeo93jVmFaKuyF9Pmn15NmVagNtwgx96VwN4RQ4E7obqAmyaS5Uedh",
  "key12": "5rwVbfQAMHtQ7bof7frNCqSfXFqE2qt8qAKymkiuwNk1tx1CU85Em5sUeorhjKrs9PraZZDdKeJ2BAyaxJw5Gk5x",
  "key13": "2rq8eqR524Fonhi293pf2emsZFyjzRh16HN6p1D5fGgETFMCx2ZJ2A7ydx1cZ2wP68DdJhF7RiK5Z9S7WQpbKrbr",
  "key14": "5vEBVjRbXvzUEiWk78BGb21d4ruK1u1PhGtSrKt8r4T1cj4aSuRqLiSRx6g1AEJQTLzQxRnhizdgXFsF7iY5uF85",
  "key15": "5CwrdCHp2GpSgcmpY66BxzqzM7DPRMFXVVQRmWcHDX9necVYH33cq5sUSHQP7FHC2LM3DzaKiUXXffw1goAQfz2Z",
  "key16": "C4NhNebJGDKX9kE9y5UZDXXf5bX35sv5SM7a5V9k9wAB4vwe6QMSuq9G53fsR5vAeWcRYRC2osHdxe9SPgmx4Xa",
  "key17": "3Ek76bhNMXksxM4goCzJtY8nTLwXYPfdi9cb74xxrPFocxJ3eFdPoBn4KxrBcNhiFNHGGJgY5Kz86yaA5nPNxWi5",
  "key18": "3ynkUSbtam9BNcj7jBtrAJXKPxuHFvmPngLQeHAn7L4F9eWUjn98mBiVwwTsoa9h9bX4hyPkPL93vePV5ZZYjpDy",
  "key19": "mvm6ev36errucAhru6RCw28eepHGGypzzajG78RUQcv8hTHvKBeCqCFJH9xXsTgFmLH4yQogNKvuPYhs9Fbeq7B",
  "key20": "3mFFm2Q6eu115BnWHbedWQpwutHsppBVRd4i7GY3q2xy5cfaTwoVQ1qmPjHNsUeUQZfPAwyA6AeCzDLhK99fnjvg",
  "key21": "5R48GRfTerv9qbQiKGYsKMXRzKJVhqxgXwDztBUqohzujXWkFxbddiNvpme8sbPnUmE175DohQDakg9zmqK24GoS",
  "key22": "5XBWVfb8wXSQcjm75bN9YTzTah7qjh9c9sDn1npy664oLvocQ9QYVNGFzk5MofNhZAGPn9cdbaLeJ7iPMtRhUvcj",
  "key23": "24NUKLKKgeKMp2XauqeWQpjPK2ufYGy54dMtpcRBz2Zs1a8h8BGvTg6T98xX3yFBsdiDZrE2mK4bCAXD5Lhj7XDT",
  "key24": "2w4FoNLQrbdDwVb5MrBrvdoAuCcarnCwqyjnsnFwtPobVVvxx7gXQiwRAZBaxHWADDXw1Fc7LuAvefGZzK7E5Zpa",
  "key25": "2JNYDZqZkTv6H4gyhESa9sTf6qDUMT9HNyq7hWf4LAyLunxPCRXXWw43qW44GxRTNpQnYVEa7cJEkax9sEEUf1gb",
  "key26": "HsEBgEhBVauJ9LCPvAUjgcBpSd7kJwag1JTtteH2hZuKZfoXBHCYm57fErzqcticmYmvvdDCZSUnrEaUBX4UnPc",
  "key27": "aHc9X6C1Stgs15ZQxAnn5cuz66RawMzRmw54vmWm7VmfA2yYo19nuBotvZSSGUh3BFcc4pTzFmzvzyaQCWzy2Xc",
  "key28": "KEmhv9SQdRNquD52SizpafwDvTWAZqKGq67NHo6dg4X66TtT8dWKvhViZqxcJV2wNdkVyFr7yFC2jhuhwRGyVg2",
  "key29": "4haJzHTLQnV15bftAjnWpNNsZUXZRyzhkSvWtdzUjjmsRDtqtunJLbk9uhKKBng3J5H1UYVPx6uwpNvcTdgNyLy3",
  "key30": "5Ebc8p7bnZLVGGz9Xknj9aetpfJYpvpLRYdXhXcesMs5aaLyyDvmDa9m5cZzBQVYVdA1pk6Ky3o5XW5hoqfnmE5h",
  "key31": "5Jmfv81ba41SqtyagbmDr3aJCnHhJC5Vr5SNThtdjWv4YwGnTbSTqLEmCRAadmu1Sxb4JugDsSgF5ioSmMSLgQ8i",
  "key32": "4xSPvYkhmA9YiGExLupKjLveSaEwC5ozSX9fNmUkKXEGhNuDXFRoNV37LBCLT9KAMvarRBUH5t4EZx5vR6uM963H",
  "key33": "3dhjMw6AVRcK5r65RBe1gebxSUPYTmHMwcnMPYeZJ8nAP7ixFFvq6uZAjsYmwKorAhpUp83U6PxHKpHfRwf1kQsx",
  "key34": "3Wvny6kFBk5Z8rwayf3X4mz41h8CgbpaqZTe2RKvcDyGH1HzPam1TLyAeuLEZY96M3MSpL74vjixptX7qWAULhUK",
  "key35": "ih2UnovjR6dnSAojZb4Amfi1uN5aDuANpsfhhVUQqzomB63ek274MMHVzuNxEYbVy6mXRFipqSLdQ984XsydPRp",
  "key36": "3P6VrN4P76T6UrDKV5Axh8ptuaUfiHZv6H34dJemskjrHyibR6QN5myn6pnVuWGQFWgs5VBXQ8ovXdfR2RE3bTrd",
  "key37": "4osSd6AUhs5a2DxGg46c88JhQqbEc3QNfAdTQMGQf9MDetCkdLVhG6cZQCrupxHd7Mn89wKyjCdRViF967swjuub",
  "key38": "3wNX5xNLVHtXz8Xg2bTqLPs4tcpM7shNCtfQ2BFjfRE27FmajfefWxh82HrQj5FVREugBF5NvqTH8uYoVNt2RUx5",
  "key39": "4f8qxz1N6DXGojwZAJJXqUYcbuuxz988bxAscbkoAXR9EL99TPiPbumiKj8W13eJt9avkSwCzXVSWb7nqozwZFk9",
  "key40": "5G4xi8hBjprSjokgey4th4ZGPai51grUSLkMFmnpbSoAERdsgtvyxhTQnNMHJyQNRqJ8x93Cp1a9rwNYAa5v8G5o",
  "key41": "nXSDjZbWmqcU2ikDE6Q7na2pUpU13e6A8QWaV2WZaf6MUNCqyDdmWzEdF5iUyu5kXpT1e5VvUZPz86b7WSQAgde",
  "key42": "4MWWagnT5USv3263GefuZxtY3BLdEX7y8kbGLmKAEGXPcqJkSDHQbQPTw5nZwoV6DryD7LdtfhtM41y2e5x3zsGu",
  "key43": "y5jntYxT1dNrQPyocMS3smddExaGABeEWLX7qRqb8uDBVaTjTetTxsne4cqqMQG7zBZ7NVTQ84HX3oLNPQ5LRBj",
  "key44": "R9HzUHSLqGaFn1rv4x1b74rKdo59wcfAZ4EHHf7Fe7Gapb7d2xgJoB8o8TzoS29d6ePVwfUk9b3zdgjtpBeNByp",
  "key45": "57mmaXVzhjToNvptAt7B6BdfNr7B6PijR2QqUf64kBYcoR5ZbEkoGYWDDUj6DSATqbM5DXA2JMksboMUaHpAdwBm",
  "key46": "nSBqDSWTEioiYy6tgbrdFvqXcoxYvrFXaiYqokJvH9X8n4nhvTkUqGKSwFmh3oBtp16VcYNXdKkCoft3yoQbw9U"
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
