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
    "3YJEteBhUsssXVY6sqgJHEWdPvENRpvQQGKHiaHSkbUEWyFjN8r8QcC1CYYLxeopnzDixeYqGwghYfBrAJYeKcfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSSRBNN1bDwBiWwzK3DBySKejGZ72GXCr6b8KDtkQVhHupum7YJPkFQKvv3Ny5maRXarqbHLnxB2yaYP3oU2Lme",
  "key1": "3Nxk4L2GwjhdZsrR6aS1CNvS1MPNJjPsvMyGDTEcpGef9xS7sPQ6bApJmixz4gyL3TEwj5mj6VU1D2AMQ9yTrDVS",
  "key2": "3Wd4Gknt4mQTjwZ5rdbx2v8uYAWXi2zzrZCSmmcQJDBfgUtyvR786oz2aWK6nQuvPEbxkea5YHEKBebXmK6YHgUR",
  "key3": "Y2FiVd99JCV82geeQt4aAx8foAaz2JixzkbVyHnep4gGZMYkNkWiQQfokynChW7hTyjF3AxQtgVzgzzxW4qmZqM",
  "key4": "2EsJybxxjiUc9soCbiczw548BVq85AYEyfRvbeKitcjH4eBSNbsFRXaMGDiKb6kpg3Lhn81VoNC8NdhHPsptE5Ve",
  "key5": "e1wzAAmdNXJ2rJwQRwWCTdmPkSnv9ohE5PZFGfjuKNDcALpx7sw5hnmYNK3JGeHDZoBNVsMMqhhFqgNiEEDb95g",
  "key6": "64CMSnH3iA2PMFgKuvUnoE7jkHwfhkRfP46vPArHx4TJSXRB9Q4J56ubTuBhoJv3b1t3bLThuFeJNqk1VcbUzi6s",
  "key7": "31Ue3gwRdev4QX2gauoR4sfmADnj5ASihHcw6N61uYCVTJhApYiFUjVGwPxzWbJ1ziBqH3tCan516g26w1Von5r6",
  "key8": "V6a5sBWVbhK2iTULgtMEJGDo4KBracoP1BTafERoMYy5RYNbMbpkJHvNLAijgFdbPJxyt2fCkoNiYw3Fy1GpNB9",
  "key9": "2EHNgMG9k4chBCAE8jAWkSgUNmPWQjazwha53Efj5xUA5UqjVkmDNghxyBDLH3FtvX7HjPKDrwn13k9eSvtagnGF",
  "key10": "LAzkKvQpngVU74wtbkn2ZJ5xHoF5FysmWX6hPaBjUeGurTJgjVsompD6y4oz1Vjh2gRMKwbCC9Gkq1jSXxkcR49",
  "key11": "5Bspc8ZaAmqZvpiNA8SnnJ3v8cVV1hPuGdFksSWya49yMf2HpaB5Gco4n4SWFj5nzEzbBMZq6UoaGayEB1mgVUAB",
  "key12": "fgcuGNhPNhsvnqmYkbgBYQFnCuk43ow1LCkg5ytFuyE9WWn69cYVw83KAUvQu3m1yTLdGhedR479WZxqeWWs12k",
  "key13": "2PKnLB6VYiq2RhMNnpAMsmYfYDZDXbkHB3X5TJuwE7n7ayLRzipyV4NzstYRBn2t4VddVUDjFdaiN6bsWdJyTGRe",
  "key14": "3tQyxgrxKVdQbRWiTmrfCGyZMZrfEsFcuyh83JQeLRcjopVacz1BQLV2sSEL4rFs4M77VWtExfvtjuBMscnLXD2s",
  "key15": "jGyxE84uZNBAupDerBQk3gyfqPTokZyoUPejpk6CQ4GqjKsAsGusMgGndWA3XYD48i34oZT9Gwrec1HbE143PW5",
  "key16": "258rxzCAFEQKZkqtFTjkU4Wc8JEfZ9jcffTnb3x3ktwpbi29QppqBKX7y4qDrHBQJTwwerjf27s1UUuur8Ux3nAG",
  "key17": "EYD88r13Uwa4Uf7FbX7ivhEPet1A4bdLb8vKWF3JTFk132zqBbQsoqtgjgpuy41gZP8D4Kjy9tNajKm77odSnRR",
  "key18": "2Sj5zSnEFJvU7w9D2CBua37mWaFKFkCTdgMUuEHHaVEdDMWLJFzxdGFQMtjzXLoA2jo16ghyxRsBq3wA7QGvvCJj",
  "key19": "2ZfpPr683yGH1Egsrkdm4tyvZaQKnN7VFbPVygLEmtEvwgF9MtyYavYapDKCtNw2m48LtaJ9y3a8R9vv5dfss7FA",
  "key20": "2MMwDoPDZ9H8DW19fQctcFTp75z5pnxZ38qeeTfkondUZj6eBUGzYPUhCQ6CjKVqZoFo2P4DECAdpdBX56MUADgd",
  "key21": "3TMLeqynkh57dognTAS8rfFJVJi6kJ9Nep6YoXeuw5GawYsjb6qA5hdxysEZU9ethgfSG3oRf6gSReFZPeCtkNjr",
  "key22": "2q61JGHezG5FQ6mLJBg9ev5ttUgsoYnTDc5tL8oM1tBj1tgztT1UmVCFP6pufmLXLR5gFmPuqvEnGiRJU3PdHXvF",
  "key23": "4NT4jD5Z9e15V64sDAWQWAMchpfuqSj7Ltk75bApaBDYjkxQhWUaar5cTSsuNNETd3mDCrkDnEw61Gea759bdbwb",
  "key24": "6NampsSTx5FkKhCudr6Y3HTk3arKJ79r9ki9hXq8AJUSWvXRX1N133w8wLiti6VQWaYDig2yEA16AibZj73gqjH",
  "key25": "5gu6BdPF2hBJcPUYwRBV3eA24J7fbBuqq8BfVNcv8RWuHpafVgWcsCgxThmL8pX9U4pkDskrDKuWjsXh9N9J2MRH",
  "key26": "2ZBUfZ5WaAUh462cAifzZTruRZv7wPokSqDPV2Jk1Hg296XpER3JT56uEYJYEDUh8Y8EKaTn1XBxdECmoJmFjbgR",
  "key27": "4Ez33p4MaprrNEwquYVfXSRAGv5f2V7o2woWzUafZmupfMxuc7xyqEPsuiE9P58Qm7aVA6i3xxMoJE27RqkmxERp",
  "key28": "Mcq2TUegpYhwrYjWf3Y9JZnTu16M52bzgd1DmHpTRKWSBndR12YTibbEvTvnoe86g2ZdURev8U5tyYwkoHfVKug",
  "key29": "5umhLkJwFJSU5raceg7vqbY734XGd3HkzLsKXnXpSoTq7pSSiQzMdasAHpmpfxfTggJVr1ZUdbrJHFy1sxW7GqEe",
  "key30": "5qCEyo2t62DGUCpXAjB94uaUVALF1e1p2cJYaanaFerd97TRB23kEosEuLMnqmMf6ueAPP8MikAHJQ5zG1ky9k2t",
  "key31": "2vKCps6iwG7wKgwkMG6AkijAZaZMioKH1Kf8j6vdYyBH91tsQxucbJDyjxCZHtVWWVqAMBQHF9goKko372YWrgMh",
  "key32": "2AWkUcJGRKZ2rddwxd1VXSSbxqUWa9ncww33DCneMJadGNsEssHh5sJCY13Yzq4Wo5wr8AvgMvksd9yv8cDrGg8N",
  "key33": "5CAhu49tBuKiNK14bwLk4AdveYGk6S6oCeL5xKivWEHZdPhWDSUWsP9daM6LB2R8DRCfpFLUzmteG15eVwiiZM1c",
  "key34": "5EyRQTrEwC6TcLWs77meM49R27TR5SWTSyfcZsFNKjnTSQqVGJKpcGN2hYhfzRm81R3xrom6YRgLAuz6bTjwxNsY",
  "key35": "4CGkbNuaUvt6G57V9fD1e67oS9QSvrGdRMjvCnbpFJ3K8YmJy9icEaVEAVW5mSEiqKK7dT6ieDiTskZ9N7JVVQtR",
  "key36": "3ds5WPoAe7fj9f7d635thC2fuanq2ErQJVTdUKoxMkpvNbWiL6DnXvJpvot7iR6J4ARH4uJyR3mkJLGVf9mm4G7A",
  "key37": "Rr8JiKUxcJsK8zm4K96yWxWJH5hrkKY3AKP5zku1R9RBfUVLXjgcd6gMxgJkLm1mzmaB1UvA1vgLMKqquA4T7xa",
  "key38": "3BQdGw3k8JFdmNA2Dy9dNPepziT1mTYy7gGuAYkGBRmXDdWi1ja7Tjrvaqp36aSDw9XcKvurcSEeUSHeVQhtrnYY",
  "key39": "3ssw9EVMNtU5j3UMZ9NquXVz351kYGqnEYwE64fXApsPDBK4XY8L8uo1o16VNS6xVS3KDJJoiaGq9NtbiAy5MSi5",
  "key40": "5z4c9EWp4GMgKAuZRLqE1kxMNbeMV3krvCEdyGGtZ8rdTW6k55cdNLh9LWJFsEqxpJxVjcKSrjNA21EwFYa9kVtC",
  "key41": "5CbqArQfVRREu1YWoEqtFE865uP1Vxv31FGBz2ms5cAEXb8bYhb9cnHWc6ykDki8hKmqAAPx3ePithXUXB47m8N6",
  "key42": "3tb1EV31Ku3KszSuWVyg6YSKL174Zm8CidqgBxKKbh497qaEd4sKgcnYNcnNFcw4zHoxSHah9wd29aMVs7Q72aGW"
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
