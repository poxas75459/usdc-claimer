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
    "29DqftvjsbRZsByutXAYVp9qCPazRFdP34G86sohwNYd1LFb2GKwFEBhAVKxWaJqkK8QdT1hAFNzDddDM2kZTb2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39u1wF8QQUMpLDEBHruADNv2Ujdb9fTdDWGDLwAHP8t5kRHrnJWrop5a2V87zzyaV65fUrSryj22nEtvw1g5cEWn",
  "key1": "4gJGz6iNM9sJRn3oJYFVNJgzxC2jPxLDV9zQnVtb4or5DtGvVjArquXERJGf3o2BeX1nZSGAq4regx2kuJxapsst",
  "key2": "3JXqrQpxCLP3ZyHqUhSfJ2S96WgRDYiJX7C6RznEaouDUfzcpWkCZazcFuD8kF78eggLccoASpb4YtTkY2jSETMm",
  "key3": "5Egtv25akxqhWYiFhzDLrikTWd4EXmiGdGC5ungo5PEaz4bZeKpyc7r7imW2jBL43tmWynsm71BqscRwg9uzD4tz",
  "key4": "4m5fHeKEtCWJWp9DmJXQcYCtTF6rBE538ycEeAHNFC5apRLwATvViDAM6Rr7eWXNEwaXyvbmDuxQrhNHn3NrjLAw",
  "key5": "4TGyFP8FKFVxWRUcAkgddDpfgCydobwUv6Yw9YAunL5pZSGvKmDYc64YfwsA1iRGHDzuAUaFkN26utGAE1m8Zwe4",
  "key6": "gJZpqdkKW3uioePcrFYuTMdTBo8H8PkATqC6X86UU8gopKZCc81fkmEKKnetVjCf3XCxtUpwDg2zMzyhS6hCELX",
  "key7": "5tQZRokWD38sfT3FFJRyjnmgeYESCps1Zx93Eg2B6KY8XxhtW2Upc3KLdVo3seKWRDkU18Kpe5rYLQNwMQkhpgMS",
  "key8": "qkUDXeMPdHpnXtN9hsHgCuHQKMtUbZ3bPnsDN944kHMppvpQyV5rg6wDi9BrYhFgjxbhXp2NXVfzUwsCyoANBou",
  "key9": "4kpGcmpS3VkC212FgUrCAF4WYQqpuPTyauXQp29w6mPy1efKdMPh8GP9Y94DyH6hxqamsuzvwjVuaYX2roWoEUtu",
  "key10": "5wS18RPYjeUjtnxnMTpA69yX8baxd7UAQbLsxe9hju72bRnHZ27Y68CcpKScHYAJHiBiqbnJS2vYPMq4U1Q95U33",
  "key11": "4Upg7C5DpuWgvPnqnxjTpLVQ7cvf25UVX1UiHLAdsDez7h2aicF2huKcX285cTqSZS3vaMDtx5Bta5v16sRhB1Gs",
  "key12": "35eqZfeVgve7ehfDLLVXGn3Cea1d8Pjpy9ynYxH5zZe3sDkjCPFiAYH4JYV35bqEJS6R6MTgdiwALzkYgdwgknk9",
  "key13": "5wzcn9NKATKhteJ3ue9hUNeRYB9dwsk1huZNrqPcfmLJddo59sPkoHigKDTcbY9ntn5e1Mz9bijSCZtKgQYJWcm2",
  "key14": "2a1JuHLAGzH7PujqLtR18SCPKiaGzD89TaFty3jFDPB4iAaE2xgVu7LJDvjAJDYJQCaYeeXYgaCQsSMPN46kiomN",
  "key15": "2E2TtDhV2iJRePQh8YvA9KE3g2y63fnpoQfXiEdM8ZYdn1zPffc5qybC1n5LExJX9aZ9EokCVKAeG96rG7BFgnaz",
  "key16": "4he4Dw3NL4WbzosJz2SvoHJFa3i1pqnPhzaiuhQuJDiJXWgvJ3ggDpB4H5zym3B1aeJKnv2XcA99Kpx2zRNqPZXz",
  "key17": "23FtubVVTiSLQ1ukNf1JAcRArE9KKUG8RTLcopeTyBj8SWNtzBkkDWSZeiAWF2mY7Y2vK2ktsfc1mvaeFdvNtHms",
  "key18": "3Aa6m87GxDKKKVvSF5fFkzzTU5PTmVZhUY85CkYw7CB2XMfDYiVfkXeR94Ka9LRYwh2JjvSFJvdNmxrVDGovSJ5F",
  "key19": "4BmnCGbG1ngxpgG2B9D91LKRL4n2YVDZCpXa4nksMLQFo6oocPYv8QnVVgdSxzDeEXQsQYNxuqvLDigbcS3DyEGU",
  "key20": "4ZBUdk9HXRrHCtGf2VmAVGVtZRh9gNgXbz71X1rhSufseT3zbnsdnxhzzWZu7vHaGKdi6EdygUSfE87mgPYZDTEt",
  "key21": "34oNvb1QyXkVuaeqkm16TZ6FxY7YkKCrRY2iCPjS3gghgs2ggeQCwLPgfjZpz8ARon6kCEHhkW4UzszuQPQ2Ww5n",
  "key22": "49SPjyzAqtVtXA752cMRhzxh5wG2nZsQiJj1QhZau2A3nJ1f9SzMXMrWScUjG5zk7vZj6zPncx5V5v6Bzwx8EVff",
  "key23": "2DzLsuyyvof5ShnNjsr6nU9v1HDYgM5nco1HcGarAihbtR6YoKGYGr9uGicAZshv6j1jX7q8TpveEMykiFdyUZfT",
  "key24": "37hR5ag4VcQwmyaRMo9PFGnXW3NrETrAcwesvFiyZ7busR3ci8pCXcVnz2qx7MBF6mmPL6UEoqg6YKYfJEyQp59J",
  "key25": "3M7s7N7tyEFyP8Lq57wrgN9tbzEipAX1zaq4y8sSU4UEbCiVixcrTKBbw6bMf691gaBcUPR89i2uYStMknCpszs9",
  "key26": "4g4gtGCmEZJSLyCEzSGdEaP2s87gw6ViyDeNDjUExQaT4Z7oP9Xf51ZET5gVntphDTVaXJTP1LdUBSVcdYQwtDtd",
  "key27": "5PaQ28ijK12TeQ9bhbB9YuzwTfqHkcdu4S8uyWciX81Qdq3TtQbAgwaNdxs3jupDU5sM5BuHfFgVv3XZuf6FrFPs",
  "key28": "QsXExTeMyghnNMGfCXXFjtdHGNA42ThmrzQLnfRXfDRdX7g3XeLZgUVMKcpVmxLzxCqQoB1qpymbeiyv6zUcKPw",
  "key29": "31CkiH1uAyKNTCNeeqjuj24LUetUK7rs2i5eGNkFv7X3y3Lu7uynHU767jdyzcQVwttZ5umieWZkrBjNkcGTLWMV",
  "key30": "4oVSFsG9m53eXioHi2r34NMqKSzcWyXxZ8ycwz768oWLiJEDmD1sxdt97m2CRWriKJVbpN2KpfSTpLYbxnHcFWnt",
  "key31": "5PZM5L5W4tnj8MPFNg47pvzCrRXEaztEsxX5u1r5NoAQ5PiEn2vmQBYTkbvEnwkKD446zz3fmQWsAr65xCtHUEn8",
  "key32": "52Vg77QkEeAsQoFtqvUq6J27KZRT1w4MN5y12jTmWuNgyo41vRRx67KYpqPpbbhqECnAcTitY9Ms7yV889yKiLHV",
  "key33": "4HLVJCcNuX9z6FTqG7bLyo8Q2ZXdQC8gSRTcoDc3PMmEoqJxEUuqEoU9c22G3aAw9oCgT2xYpxU55XBF8t5QzpX7",
  "key34": "5xGo2HmCUGq1YeHCpRVdHptKeFTuwFCyG7nT4CHiTKUkmWeocNsC6BsN7otmaWg3ycwUW9Mrg2yYFvHmorJqace",
  "key35": "FEQCakmC1BoJzg6qjGrYNpJj8CAYWpQJr6h7gTLjs5dR22ceNqUjYvs92cdaGhuvgV41ZEs1Xin3eTpRmQQGvGV",
  "key36": "4irGPoJbNt3CnxNAxCbugU9JiQewFB8rYtanNsJU8MH1RRnryK7R4tnuD3RrFNpYd44EaaesJWqigENuA35BxHf6",
  "key37": "NmDzFS1jnDdb8KPXr558YNMAT5bnPBLuvAQEa4jfh17Duz3ee9K67v5miP3QHoZNxpR2RSCvDnrozh8q6PvuY64",
  "key38": "2t96VDDE8ndzHeHuWBX6hZJCrbGXQ13MSDYB5eJKZhUxCNt3z3eJJyuZ5vk6Xc5MD7U9tELxduvTcbD2W5ac6yev",
  "key39": "2mPPNco7Je2fU6rdFJiswfBm93BrAJR4dX7owwhgyGCAbdiBKvgFiBHs8P7fzkncsYQrT889FQLbdQC8umwgge71",
  "key40": "3NSoiQqE8qCuR1rD5zmaV9RttECwGkXanBYdWcETEHFyZjHLYxkqUJPgrqBxHjowJpP7M841qgtjMJhdFwdLvjyC"
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
