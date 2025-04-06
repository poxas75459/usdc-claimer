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
    "5yTDpxufbTGvz2rAycqunpR782i7te15PQVdiApRUBWSvxuHm487EyNSWQV14RWL5WPDAVoXEN3nH3q6Myy3Ezcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BxG3gAsforyV7HNyvH87oBgfED9VggQo8ked7mFmsEkDcy4qcsrBPvk5exV2dsDyyreVgcsGEUYWCK3j77poYYF",
  "key1": "39HGvfTZLT1RLmYv1Eqd4qTvmNCU7VuMajtcDjAVfi3a3s1kiZREKDBSjPLzVicKnFWmF2tQn4ycUs5zUPhzTYU7",
  "key2": "v2CDfPJTBdz2TjASDVoQXt9YNYrSsfdhGHKHyWAiU1Z18PfTR8ebzYaNpCvragzptzrQXy8REB6x7hchtdLWS32",
  "key3": "3LF9ZdGJTpA368bLjqkk15qjhrGKkFJA2VYv71f1xDVjWeTjBDUKWXhFkamCskfYeTYYV8TDB8utWcixro7iH1uW",
  "key4": "5d4ampVJXCQ9rpwdeAjZeLT1sgyHWPy1kPmZHurFJPVkfpaDRNH4ohmZCzbCTEzGzYgt2jY7GW3DCUKWUVtpxUXY",
  "key5": "2jnzuiXvLfuGZk8JMSnvqi7HpzQq2JsoGeMoi4NYbLu9LJNouzyrngCHcHzCs2dgTcPJw2G1R2uq6bvMz6dTaQRY",
  "key6": "3N38KoSAKLxdwS4GEK8wH5Qe9h3TjCriJNTZVD3rhgc9j1z9QnaSU6V1XDzEzMt3Pzh4mRLLH7oPV4QEJtMJThzq",
  "key7": "3pXVYsyzHPpZY79J5rtrZqHMxssAH7sjPoM5MF9D3sF1wwo61mPt6KCAJkJVPU5V1tSgc8YVeDChr7NZBFBpWzi7",
  "key8": "49RajYQDJqiAvirpGjjLRp6r1EpUBJ7Jr966LkiyHT3jzVC5fB7oJLovduZu8psW4cYQynXP8C71sViMNcUFdxRu",
  "key9": "3rbSR5mJL8ZVo7xkFpswxjWFyLwsPbjBAeRGn85EsMj1PSUjhusr8maFwBA3cHPAToW59srb9KcqkXxjhkXS7RUR",
  "key10": "4phCHQqWzHWJna216UL69wsDJj5HauJesjTsJjJxQKeMuDyoETRc7Sk9WBVJKkBwU8Fu73Mu415xAqid35zKrjkP",
  "key11": "4rSZc41ueiqvA4juAdS4qQ7nnqUJE5wpHnmLQDs2aHmhup3thigrmpNR7M95PjRjbLZcBdRD3YTjqTvfCrMv8Aud",
  "key12": "caqHX3a7Js6wW8p2bRveyJ2VFhSfYfzmHH5ezbg7ESzqX8Md6AFjfdZ9zJncT56YPYcJBnbyEc5qguAdjEJKuhX",
  "key13": "251PuiKiYm4WQsd9dTA8KXzYruAjiGc7wXABPnstwYCid2McacbPYow8iK5Fdw6k137cKKdjJwPqoFpjCxNrpya9",
  "key14": "44GKAsWdDJmNyqBxk4tfL1HHwtUHKyJhNLoDrvg5Ls4AVjedxQpJ96EavL7bhodhfo6LHksYg8EHVXbd9SanwHCd",
  "key15": "3sax3EkgtvesjbPgEouZPxp98TUqMg1rwvYg8wZbs6CujyjR8JuRZFZc3K66NYX4DMzWphPLtFrhGteKGHug7B9W",
  "key16": "4fc3QDFtbCXgqjDnCxZZRRgrSz8ve3YWTcd5id1KHfuoRovvVY2HVECHoHiiqryg9g58mMUgyymuymM2H6QW7h1Q",
  "key17": "2QV7PXZJ3mWbKStjKNMpzhZdJ2DtsbW8N4FY2oRsPtyStLU8prgMD5rhDBhtwzD1dHyHDWu4DLgzP7m5zUcpY7x4",
  "key18": "C7Ni8NdC83dx1gH7nsz7eAq93yDJzWkeypKnqx4dBYYgWkvuC2Yz6RSfKhZUXphHoZkgDXoDeE2sG78iwod2ciA",
  "key19": "5ZL7VxcRchNR3VHLF7bEkZPESdMNQrEZZX7HC5Rfafy4WAP3URgFhUqpDuoNfAqUEN4tpjzdSkXSmkLFpWBqynSC",
  "key20": "eMwfRrkKeBcwMWCwc8avt1LG5m62X18vp3NbDjNQZZaLj4mn3txsZtEzsqXxMbNKVXYgB4swB5o4FcJ3n9izKYk",
  "key21": "3jHnLZpQHknwUTHz8DdTHv6wGxWQzUHQCf4DgrkCiAa6b9WKfEF3DUNYs6ipfw4HaexLG4oC9WcSU4oec2E4uvqL",
  "key22": "3zKSZpNuB7fo6rtuo6H4Q1uwHKE8yVX1ph823fKfdUEjFE3wQyXEMZ95U2hcNaoAobWPvov5XsWrfYU1W1LKcDw",
  "key23": "2qnhSLHeDT1jckwj9GuFQq1iC8QghTw27a5aMPZZBzxe13sBjzF32FFvA9TnVdqzRZichYMT3BEQbcn65sKjzLqJ",
  "key24": "4ejb9ecNBo9mojY8PRauwdiaddcibdaHnconLE1tUoF8GTdtpfR2jbDLUUReHYhAGUsMybYgdQis5rKVW8dMWQRP",
  "key25": "3ptRqS97hq8qDTKtJstguz2ek4yon8qgEpXDU8QLiy3SZcwK1VEfvzr3xDr34cg6mb2pd92Rp9aJ3Q2xt5DmSU2J",
  "key26": "3EYSfxQ7FprnrsrbLveMa2e4GKfAVES6DVHdCpBkL6LSRWRgAKPDdgr84d9KpXcddsQNcPVPwhxyjM7zsyU4Yanc",
  "key27": "2WgTzmXXFPEJ8Y7TZBQPyinrABPT4puF8XuZdWJHFSrUXdEpq7xE6QNgH38N9VucFq8zcfGyk3qA83JJ8V4Jr2QZ",
  "key28": "3gZMtYdFY3DKo4ymumWLfQMN4Lpy2Ty4Qrt3wxkwLmUeBXSWMi71ES6hnLnCpRAX8sk3oTT9w8KPR8PacDAyBtQN",
  "key29": "5xoJUb7uTAGF5hP5EgHew4UtfjPVubYrcH57zaKFmicWDeGP6j3Q1xMYtymNHmnifxXqqvHmaJoEeREmUgNF8va",
  "key30": "Ut1NGTRQgV6kAaRzv1KzkhikizdC8H9LVmQuj7Lg7rsHpiozEGXjV8nUSy2YnttJuZM3qTLpBLQ2MbwuEY35UUH",
  "key31": "5DdBEu6MDsUT9sBtmWSk2yrSbusyT2SgaTMechhigGzKZ8iBUaMjfzKG7tHJw4J7cFtBEaMptKp7N8Jf7Tg5d5D8",
  "key32": "dFuyNNzz17bSiJu6radkKVz1fyzG89tAsb9i56tVVdfRTjXj3y6vH9x1mc5KJfjjTt2KYsMf8E9D1bhjbphoRqo",
  "key33": "3qrMv67GPdRXLhU8WekWZHnAucV8DFp2ZbuYmHQQaY2KtUxY679MEyZebsWeFzdSqHCzgiG6AvDjBzR6LqbJLAcf",
  "key34": "5ZaHANCoUTHhfkPz3ucTmja3cSPZF1Kvwhvo44hUHmmXCKZ4k7FHCCeVDE7YEByFrPiiXJQh6r3Zp2CQTkWAG7hc",
  "key35": "wDTho81SaMUFfdskcZwBPWeSR6BX7k42URDQCgcVkptwiCCZA9bxoHs9Tk9wAwYUNsdZsZ68kCyyqzbLKo4acTa",
  "key36": "5r5eZKWr99ynrha2nxJVXadYfYXA8iajeKbWCvH9rpXvCH3ppD4yE8913oqGptpUyd2zzzUQwkL2pLscutFsxrq5",
  "key37": "3B2bX68Fucw37DMt5Rj5qbJgFx2uWKZozL7xG6UdDXoz9WiZdMPwdWMeL65yExqe2tr8s2TtQBHVveSnU74Txto",
  "key38": "e2dYowdBN2BqMfHaW2HUHQvXKCRcXv2rx1XLr2SFSEJZdZy62J2aGCURUXoZU5JZpz1XWAd4mcD5HSD82cTuLRe",
  "key39": "3paaUCCfdxkZL5kvpaXyWwrzRNsYJxQQPok4WEfNigDNSdHVr2X2E2zbjE5pJMcUJYn53Zndq6TSSEY9gAvaHCwv",
  "key40": "27CUojsSMv3yddb9zhLByra418jTcMxbWeiGPt48YBBXJjY7pbJTqcFwnDD5Y9icBURS48a8brLkzG6P774PSZ43",
  "key41": "4RHTaRKPYUtYrSnjp8htDGFnrYsAKd6JfS88fbSdjxGwhLav7WtmdLauwD2DwWutsjCbZ6Hrqra2uVtrJCaEYzF9",
  "key42": "3F5Xxa78AiiYttfqkggoqVcwT3rf4wvUNRbQqKTgpwrTEttxaxEGreX5WxWPnwHznB9JqADEcHHExkWqwMNCtvj5",
  "key43": "3CrisB2tXe3udccwFwhrbqcLVr5s32kfVYK4z2uVHdyFW6APv3ZTSsTmva2CSLAsSuNmLCsX4Kj8YZKpAeuubt1P",
  "key44": "CDxmw3kJ8DXYMKJL35mZp2DCsa4k1UQmMwqacaAjFAPpEd1kKRxQ9xWDcv2mq1zC8fZT7otTPdfCaNjyEBzcVrL",
  "key45": "xfDg9sCvzkW6MHqMVnrZfmUW43fhXZSPQ8yNa4XDFrBYVxYdQFhmQSoquwc7ESa2oNwkTp7KiUgBdiUQ9sjB621",
  "key46": "2WcAqy9JCDwzJXF8UExov1Sw61CE8mbRHvGtq3S13mPf2jSz7Mec3Rz7rxxpSU8Ydfba9rbfh99NzkJaaDTPahXA",
  "key47": "575nbr3AnY3rezgWyEBYfWar698EbNKsypHkuse5Q6D3sM54z1p6e8ugmPcJuqDmHNNrfgDa4NGVLirmSzFpZXqJ"
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
