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
    "57cACXmXjTP43G5gUsg8T6ahVLMTwYK8zuaGPzwVVaSGNzmXffL3TmzJvCp58SBHZFN7WaL77UpTtAoDwh4XbQTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AVjx7CSPDGA8tqaGetgpfFcno7CYTX5ZBdZGq4hzCp2DSDN4EwvS3m23cjZK3w4KN78fdDzuB1ZphAGwhE6Hr78",
  "key1": "4X6HciwyFcWWFvwDP9kgGCTAwfsHJJcUKiLEmP2ttBywBC7ss9XvWMsaCuQ7gCayYSDTJraCJty8oVxjWUCnCuQ7",
  "key2": "5g29TQgRgqo73t22pYuBQRFwqmWfxLK1GYPJybzVWjSfSS7PDAogFWkpY6DYswbi41hNNLAd1qnotHHjhjAPSFij",
  "key3": "5HsQP3LbSUAF3y6AoocgdCm9dJq5Wirgo2ntv29B4uCb3U3ZucJ2yx6LFmQ4jQx91bTaiccxebCnDvy6nQuMn4QQ",
  "key4": "58wyjgFxcsf8NNPL3tq6siPjeqWuR9JkQ7S4SipvXFzJ7GrLLhFBKsCAi6zzRMbG9kdrnVC3AJs7ieo4qpe6VzjP",
  "key5": "3boqUaYWaz5pGpYGFh5j55CXdL3Dz8L2JuoYWA1jUHvXbGNzFKgkZ1YBv7abyGR3dv1MSJYvp3LWwjsUei9gqopR",
  "key6": "FpkwHwcaZTCzhjgDVrSVqWJc2Hy9Tj8wnZgTzW8gUZaiHHf6i4FHem9mr6JQ8R5J3gv2UFJuwonXgWmBfiEsorX",
  "key7": "5AsHLcfj8Dps1ReCh8mkZXudPNAFTosoU8bYgsj5pVtrxTPVgRhDBHDYeAa6PhfCDdRsw4ZhbeJHKRKNNHQFkixb",
  "key8": "4VoK8BDXyeFLwDtH8MATjqbtRDJ4XzWrRGhxze1pLgbgBdg57iD1nMPK2Hs5aWB94L8Z1WgNUrSS6sTxsuyZXE1T",
  "key9": "3ED5LUm2hoEE3JcphQFS7DV1h1RPHum3hwtkgT2m1XABFLUknB6ZAY1iHZXshDa5Y8dSR9YjD4TnNeFAuxJbrrx5",
  "key10": "5bqC7DjvrGECBJfwEStfHsVRi2BhTgdPyxTZHbmN95jC438BDGrE9wHYXAjM5rSrvuPZUBVMTXXsp5JfRWmK1b4j",
  "key11": "3yoFdHHPC7rsXar1tgcj6rakkHvXigkoJAPPcK9yPuuV7ZqVUHqatmpjUuUbPxkBkVnkb9ecJu6cCw3NbmgEiqKM",
  "key12": "4pR7AFxbDT5yGVjHjGcD92wupJZH6DfHFWEUnf5pWEaN7dEeFJj9Azt4joQyrS2jNPKUB4rcYhhQRviDhapoeZ2a",
  "key13": "5iawr76UBFBWtUYPA83eQoX511a8yj9c4Egom6KiNxDpfzw685sWambVpnF7cwyQXS2vN9kAUsspamQGbGnkQ18x",
  "key14": "2LhVGduvvQ5Aun9EJeUM5xZShRntCcXHT5xJoP5yoceDfXr3eGUyVsuZT7Q2b4E6yeHCZPN2a3DS3Ly2qYifgsLf",
  "key15": "67a5cEtTmHNZV9YvkekiYtrJBhuudHvA94vS48p3c7ej2ZUFCkiqK6Fp9hWAxLSa7ycg14YN7XXpytfk5VEeqcnV",
  "key16": "4FFses5PPiiL1aopzRMzuZHLcT1yAcUVp4oT2P3kjYsnrwtYyFKEBYG6kqau4WBEg7fMTW4bUmiienBKgBBjsh3Z",
  "key17": "2cE5L4Q27GcV5tumbg9da22PdcZCEY1vZwhgA6DRmM24QhmufQkD13r2EfhHRQR4Eqh8TS1XkFRRiCXnp6xmyq94",
  "key18": "2Wmcfr8i7SymqZBqrK47AvK3V8VTiaemDpoaqBxGjwhN84xhqbd5p6Mo39KBURmbC6ep8fjwAMQNjHQFZhprdNDo",
  "key19": "oVprZsPw8GUa52ViMBj9S7C3TEhKFhhnP1Ch9d4SGUyjvu5MXXHCe7GYnf8gJSr2fpbKWP1hcM7tvX447fPHbnu",
  "key20": "3zazni59qT6Rq5zZA82YrykeWeqcNUgA9nrXdRgWj7pTUQyGvxVAFoobvoRdWy52iTps5TmSi1myUAE772CPw3EU",
  "key21": "5cDP27pesrMJknLppcNeoSfSGWYKCZSA7yQwtVipNgR2jVLheQVqqZ9FAWda1hrWrSfAajMKQpiMuJowQQ1ddXBe",
  "key22": "GtNeVw4Vw7DJJzsxZMUJrwXF4t6MRTZt6QKTKtdEZU17URzjpCzAs1vwVfkAfDDw98V1A6y4Q71bsLstWvNZout",
  "key23": "5HTfDD3FUBSVB7sptGodPqjbCe3i4dVin23uyZ94ZBE3BpdXVhXpixMN4EHTdBfn4Abu6kgyW3PLhdcRkVr6Pf67",
  "key24": "JpJCPQbbHdvoTNPBpQSMjB7TCqDfhZxThaDi1YqncRuEFHptfpPXwnW9NNbgonxWhdCjk99sNq3XzHgM8EaQU4V",
  "key25": "38huVfE4V9HRx8KAxgrk3PPk1iycBsHPLjJLbRGUENuGJPi8bKz7duizVZmZUJ8kYGCgEvird1mmSgmMgSzAyZEM",
  "key26": "3gVC4Sygox1gd7quJS2yFTwCC4UFq5vrQAA6KtG3bBi1n3dcgGiFmM4uxjg1FEEV4XsDAaTATE8XaBwN7PhpbmkZ",
  "key27": "2utJSsgm5pFUgBQLVxNzU7jctxEDE4kqFC7smtR2BfnWdoANBDX4xjrUfXhhbz8QBiiuCKyRi8jKb3C7VEA8PTg1",
  "key28": "4GCEwuQ5tRacq5r6A6QMcXJq7bLY4fio7MEXUMK74jrgFngbMrNYCqUVu4dPRQ8YvgU2yy2CjcgQgisjRHFSJT6J",
  "key29": "3VFx3LSYgTMTmCa4tucEbYUmmUT3SEBFuUeLsFLNSgWsiCtubh4b6PiToRhJAG1Z6EFpKKrX2zyYCd1LeWdAzwEH",
  "key30": "3Gu5Aam1wJLLEJTVqvz8qwDXm1V4T4VQQ9UwhDWBQMfdVDroYoAk7YhT3JD1pGJBzZt6jM1HpunsTr9e6CeoGPe9",
  "key31": "5dAxvT6QzHtN6GKQsRtyqz5dzbziwvuoE1ahThRM7eMq3N4px8jCJEpeQvwykoADpwZDqPtnH4xWViEqjsKXgCQ2",
  "key32": "5QTHCGuEuifBr7WNLASZPvCXnnsnHQbPDdUehzx81XCK2LukuuLV4jeBNe4HXot3erKjd2wj9nkJvgCk4vCkWSC1",
  "key33": "2Sxsze5hnDTb3gRi5ijZLNfUKTJwjdLaK4o1EpGao9grHvoKbXfbW6HBz1RtxkdfNqb6YKrdxkqKgjX5jrb1VYTA",
  "key34": "2txcZbpFxBbTLVbYePFZtvDnqwkfEJoWe5rjLQvV1tsDVux94bYTFtTXyANdZH9UEwGoptvtUr8dWFxyvpJJEnVe",
  "key35": "2JNPqEMxG52dkbwokMXh5udeZQDm4oBi4FSig4AoF457ZDAr8prD7VyZ91fzk4fJcaPAG7CdPa7Ga4rVQzWRj2fQ"
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
