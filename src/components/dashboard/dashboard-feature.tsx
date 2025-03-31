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
    "2opns2KasCuzczWCm2qPZG9kUVWpG5WnSvQdGjwPZsCZWnWYHJzghtwcGzSZxjRremcsZmhFnFxX1uuPSArqKPNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EemzjG9uNg8zNEubzGkNfTTAEXNaUkJvwJfaUtgpRwTpdTZMeLhTpiHKadN9kQMwSrnW4jtziLRShNMGssXJozX",
  "key1": "3P38NHv7TTNcmctJk5MM1Ufr5bq9rpFx4QsoZvf4B9G2ee44H45mtHYAKfHUL468LSo3Rz4FZNn1VjHdiKxE4Vfz",
  "key2": "4ZkBJDyoBY1raG879NkvNukGHHi6hcwvo397oJQzsTe7pSnE27MqR79GTDgoF4eJy5LiF52yYPV9v6kxhqsvjF3t",
  "key3": "wvn9DFGFoNZ5XaYoJEougcL9qxNgfHy6kHfBdovmbcUBTKAaawKTBXJT2Ao9amoSNeZDLopjBFDjP7rq255iW3K",
  "key4": "21m3D7NKfHNK4uxYaBJdmHtkRDFWZ8XRsvobX8shiS4S9DRjnQNCkoNsKRWJJH9QCuuhWes1GKm4uYCFE6MDym5r",
  "key5": "56TEyqVfdKU13XpD1SdnNJvEfEF79ArzPNt3TBhLgRjtEuawF8AG41rXxQV61ipdTFpc7rrp6BTJTF4Rw6jegsVH",
  "key6": "2PGP9BKYt8EGQ8YMMFFCnBJdjszyACw5f4nvvXUE8Wy3z755pbTiSYU6ca77NUxtc3CJSdQBLs9efJbLXN3Giutj",
  "key7": "3q5mA4ANYWHF64Z7VXTBKcUZjccKT6maZ7NobQ8gd8VmPnuqQND7u7JCkBTMNuLTqWBtMMEMZr7XCZPbxBVUZQ2h",
  "key8": "65WAgPpTk2MySHaww7kwtbgLJVkcuUWPdcdXNfxBvioWSgoEvfF6RHDtwPt6vPL4pAFNPuaUEQX1XkYjES7SBCEW",
  "key9": "61dxwgzMm2LwMnHd6CKcmds8gKYVbaXSqdha5p3yySh1LzYtCHWpbJgn9jjm58YFPSRWv28yfEFESfb8xdLBtjXQ",
  "key10": "oeg2z7ZFoht3KFd3VJoTaabCgtZvB5rZgYzstXPTMt7qWXy9aUG5594tjRZ1ngJ3QHGkmNw5MDnm24yEEC7QFk2",
  "key11": "4NBXyfSFMyar8nA362dvDeAPARC5ZUv1AKpTHoXq1JFNB9o8mvp158uXAJ1QRnKY2PPUa6PLTHufKrHnRaoBbdbg",
  "key12": "zxj5GYUwoV1sTHwxibVt66dHtAbjzTfVS8sxVTD77Tr1Ja6KtDrJFQ9gZiUKiFNAmbWygGJf6CzAHeACPg1RRiR",
  "key13": "52nTJWPdbvMwzR8eTMqcJqqBWRgnSGcszr7WEC7mtPYkEsfZjxtSmNxfyGbeKCsCBFTzEsAoaa4WPoRjTBLUGT72",
  "key14": "2JoetzHAcQsX34cpbeK836XyoTBx45esQKkkHmLouctPB3jQyHRpsWGwsk54yHnznpekUFEVFhmmV3vjwkyBPhsA",
  "key15": "67G7iwMU18hGmuKELZr2VzqwPAdcRK67Psgu6Zv3etAmxhrgszJArzmBLpQakn5bxDKgFT6rTxUaeXG1afk22vjt",
  "key16": "5KUepWu965iXqn3tPZNijd7Yn5ncaYjcLQjeWMeFhD4mjav2Kv4wC9F5ejXUQ4Dd9sDnaoQtyq7ujdLzwkkvX2n9",
  "key17": "2TtQzQDDf544FTJvG4mGnpTEdiBHaYtFUy2yE1zqscXHUKKyUd1VHc7oTSnjhkgnzdHc9Ytc3SL4mwcji1x4ixFz",
  "key18": "3S8i7GxrE5Y4SGsVDvHRnX1kD8seWNaD8NhvriLh1XbcgqfyrzeKpLRYNqorxmNgaaGSWUkaGMNJwjeKs37KsdqV",
  "key19": "2Ct6dQkpmk9izJPLwCxqC2VUh59um2D54xoneviWnFi4NGhbwyWm6nnKbtKVGKNrCJGsUbFSDYkuGzHreGuU1RAu",
  "key20": "pZRgFnqXA6MP4H1ZT9cX72q8vBFuvKhCY5M8fYgTQYwfR9D4hzZSFSebw9tGtUUm85usbWnXp9Kv6fjDdZUw3w2",
  "key21": "5qdfKHyF4Hw95C8Xcjx1oH758HWYqG2HthZBXS4ipCVwmED8KVZwmcmx7K5yVJxareYb4sPPxffVJK8KDGzK3NH9",
  "key22": "JtxQJ7T8H8vcgP79oPbxZkpWTe9rBkqn4xQNj45R7Yff1Mto1cd5s5zz7rhjaRLPN3YvTNp1xhjD2U7AAS3sfRT",
  "key23": "rQ7HDFFf43mx7wUuLN6gaFknBViGCuSQibfC47145Zj1RerK63mqsLrZo2fbuzmeQjktYqWwM1GGuTpuEK6Wpzt",
  "key24": "3U58JFa6YVQraYXwKGhLoZ1WzqbDxSao8GrBRRuoL9kaVqB8hpfMZXvXiitVukwyGvNRuXhAByzCCUYDcZ2mFqqF",
  "key25": "4HgJDuho9xFatojrA7NZ15Xir5VLryCabVRhaCSHZaY9CuCUTyQoM6RGP3KpUGJRnZCqCfbmaCRdE6BXiPqHB2mq",
  "key26": "4MMPEfHnpC9UDLap5B6ZBz48XTt7fR5CCq4n7fZBhYLskD3HDxGjXrPujVBpkEDpTGtqdy8423uA447EZ1jV4v7N",
  "key27": "2QgC4985ei4ak6joxqnaacEuUYAun2thcmP7sLignN6tNy8qnXFfEEnndYQ4RCQgRVXT9Ke4QswKvLMQo2CNhEGY",
  "key28": "5uBVZW6HNMHjPuMyZXkEwMQenHgFqjVBKojBG3fA5pEr4ov6MpTW8Uu3WJYgDborkw4ozSMiA4FzsUH1F8Ex2yek",
  "key29": "4JTFUMxVyMZTSUWBjNsfPDrANQUaLVmhqTTJoSWPCGctaaSAD981tUDaXvheiWQo6cdPtUace3KCmnS8EpKN4Enc",
  "key30": "42L5KrmWBgS9wP1fJF32bK5xQcfdJfun3ydP7KHsARUmu6uMHrU3KJUBqteqhcDHSz9a4U6zEKuSETEJFCGVZeH",
  "key31": "4m45Cs2C8qoxRxKSfWrGHN4Rhjenwzvw1dRN6GfBmjFxTEJKoFpJCwmc5ETeEkXoPsvE89UbKvKkU6wP7sgHag2E",
  "key32": "2k1iyghn9TyhPxm4oKGBoSPNsDJP8abxCTYPWWaP4KMHjeNmp6sPfEznHLiXNuKe1VED1JfnM4Nncz4AEVUvCfLp",
  "key33": "KVB4riQ578JRQScGbRjS1UNedkWTjzz6sQhUkEsaY3jEDjGCVgAUMn89nYzuoRE6AZLA2XAP3HhftM4BDTtyuQL",
  "key34": "3HNnjP6Jb1mdSwYDWRkmb4GpHHmT9jvFBesHSp4xBY7HoAy2UHvTCFmVA3Fg8KTkMVKp5qGFn3Hz71k7TzYhZT3d",
  "key35": "5n4RRrWTM6o3y5u3Tc13VAJqw2Y2hWPrp6XjQgzCJzbbaJsisa62nqgtaAvZ3p2pY2Cc2Lt5F9g82chKPDcq3LSx",
  "key36": "2Ltbx1UjmZGHEnvC2CnWVjdgXH8EvCTPw78TpnDuswuGZZhCZsGf5784D5XY9hTx6TG9TcL2o2jVGLT96VzVbDEA",
  "key37": "t6XV9ceg7JJ8WY5FzhMjmLhFj8R6wEu3Tgm1PLN3yqM8YjQfFPH9apHQTFcQmK6gYn3FWzucZiGjDGn4X9Yemr3",
  "key38": "4LAwFBgGsdYesuJKtMXt1RyRJwq5Y2zuUszcm7LjCK1sLAWRsBbWjFddGxYDZnA8NvhKMSAVCWCZNh6K5rPvRgyq"
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
