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
    "4VPw5bqbtPaEHihRLtBBZXLruUJWrpXN8cyR9GeBcpuYUVG8BMVarVg7dBap6ha1pqtEcf7q3Ft2phc45WRcAfqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e6w36RCP2fHvZ8L5T1ogFkaHhPZcTH4figQ7xL8NKejXPb8nX1rDHZFph8tYj8GNXFaMvkwz9gPM3yneEoqu4vh",
  "key1": "5Q9k77vBTCnMRJWVRJwTAsyHfiX9CkhicLTsVrVtpn6dDdfR2eAJaFxn1ZZhoB77cavdHWrG2qhxfY3ejssArDBg",
  "key2": "3J4ittMKqcTkLusSMWCjjBozi8b4BDxisyhGzdB6DDRgv68TBQ8eVVdcK9NbF4PcVyoN1ZgJLJRScQvJ9fjEPhkc",
  "key3": "2rtxkM8MuXGh9HNApWGDL5oLKCton6m5CqfXqDzRGUL2K2WyN3abzn76FpGhLDTQbvErpusd5GkegxYK6raJsNAa",
  "key4": "4GXrhy6wnzcAz2TYHHpug1P2ejXNDtypVCihaNXNVApnETE32SeECchA8ZG2CLMsSe1XgCB8EvCPXjHyhSBN8LFM",
  "key5": "bj3VvCBmVPUUT76jkoKvEevTpDCM14AP1JiU7Stj9B7Yj7kWieEGDCGPqkXtvJsSuHmKB4Pzu8SzWNe17kUavFQ",
  "key6": "4zBESGrF7RaqPHvg8wVUR22nSguw1dxDG88bfmXxZ6XHRz6Bp3vxjEU7HJWee3su6rGxiRzEX1DM7ewqvqd9N43u",
  "key7": "4dVhUocQuRmmcD5XB47TA67UcFMJnVnhtTXZp3YYzyLuENJjkbNqUjQUSHd8kxzXM2HWMSMnSDiPY7D1DHVL5Ct6",
  "key8": "59YPEcqQnHKwTUNHWHYZuYpiz2uD5yt74Y4FVy4H4VzNvaU4xiJ48MpJ7kVMQwNiwvphjwn7sFUoY6wgLpz4KuMw",
  "key9": "3emtKz8GcW9Zcg5W91eDLm6viiZURUVwPL2omRKjfxfEYyPDQX1JyUy7GQLsysrY8YnvqwGPCCVXAvFQk79gkG8u",
  "key10": "28k1hTmB5ZXGrdJtnHJv6LmySM9uZ3enzQctGsEukUcVvpE28LGTAUejiatPmbtFytHXyhtcx93HpxNHT5HdMZyh",
  "key11": "4y4VztR6WSrwamL3GvG89UHDCeiL9qZVKvLvEQYA21fGWtYUTQWT71chzgVFVwjUaQbkUmmh1ULgvxB4UbPzGBJj",
  "key12": "2osKZnTriipE4nh6E12AoRfkNRm5P4infDr6ycj1ukWopszJpNweswr6XAWpvgx6sMczqiZabHqqUNQqkPoTUQNU",
  "key13": "2NeWRovGVASdbhUQHizC85bxK5MKqJbBaqofgBcnRYyBSLSVK7EvhsoP5MJVHPL8Jw3JvsoUqVFpMbts7oqLHXYN",
  "key14": "3GVCbaWu3Ko1vUMB8yJuD16XxeeRKatwCDjX5FLU44F8xz2AZpzFavhx187aZPFqm7dLK6o7ux9k3tZEnYK7z87f",
  "key15": "573zf6KZLs2FdUefmsx1FZtTS31gg87yu5zi4X4eRA3rDMeCuspeKzJbXM71K4MJCmnFRFxfw8jt76bQsK9toXo2",
  "key16": "3JaTLFfADeh7T1rwzZLsrD7McsLuuAhxmstRJaRFmoWiUczFCdpvHD8S2PjYvKEJP1R9QqbguUdcwBjRqEzL6yB",
  "key17": "83bXDYywK8amLRepK3bKdfDHoW8i6zHkMrpX1gGa1oSjmbLzsKzgw9T9GvmYKBWtxh4tMn5R1hzGEiisfLAzEkF",
  "key18": "3UfTXEva2cnZeDu7fCFQq9oio1Jos4GozVTZQJNSnEbnyLjyNmk99rgy22xmmJ4C9TDTMwBd9b3y6K5do2BgzmgG",
  "key19": "466TdFjP9K5qAVxcmqeBG4ZFiLhuF6dJxtVMH1RUXE4cCz1Uk9zBdKnHbDZhhr1rtK8ycC1f33AGH8n62stfHsaS",
  "key20": "5jipRxUz5hfGdpLHfQomdjxXhQ7yyJz7y5aX36oXC9vFCEUa2DyScH1LNRrwqtGfCwQigbXPiFdEbzc39UBEonQK",
  "key21": "4aSCAQ5b8botp11nb8SbAm9gesDznpPd68SaL7LJaN9zXFadZTLTBrEDmxJqT37jj9U3ohUWpXaXYY9RD8UxRwzv",
  "key22": "3p8sGCeXnuSeubeUXEjErAAEMMnaN2TkpusjVKZ7hGzjiiQM3KmkTDG2ZbTGwNsEQRw9RknCtWqqCfdz4CRzADBY",
  "key23": "2en7QfjGoZKA22JewaAca89M7vCpXp1Nq9GDBYLY5ESTfyPsVvdjoffXnAHen6C1JvMEu5xvXiQDZBwxgMAvVsAK",
  "key24": "5xQviGxmX53sBaJXC6N5WtFNWHFGnSwFgsbGrWzzMSE4EQEkPvvLXnajjKnpVgSNiT9GfQdC4Vw2EBYnzPWoLwtV",
  "key25": "2XgAKLnpby68XqNteGsE8Zo9zdho9u8ihMguJpboE5Et2MC7ZsWSHDtaLWar4P2BCF132h72TsBYGiqTUjKQUU9T",
  "key26": "2aLbXi6nqDWKLFPTEvjQfa5AyyAZv3MViWR9YWDWp72zMHtQaKQXRo4FLAYHRPBWNc58pLN64hkRDkmPhaaGDFeE",
  "key27": "rPEbuwaWX5k9Vc24Duq8FhvsUnibXK2kTFL27mpVLtFkq8emcwHtsTRopcJaXJ78nD1JC6hubjWxCkRmXmmcVUT",
  "key28": "4H4aN83rYMxpCid3nS8rLVAeFJr68Dz8p1dNubysmBghHfAyASgzEgEuGezGgYmAMpSmVr212ySSmsykiVPmFy4Y",
  "key29": "4YTTNKMW4spXdjJ1DYRuuytGjX3NpsYvUnZr119gzpGE1MjqpDegsVbm4EFJjs4HkUmwzGyGPWsAD3j4ExJTwwoF",
  "key30": "37BPoABa6hmQwaepcTri92TXY4c6743HqiTxqDnDeouqXDU7Ayr97Pe975f9JEztzpWkujwmThn1qWta8xMod5W5",
  "key31": "2UtT2kvVZZcQzeKRqxwgXZueuhQhQzzq3KixX7BAkx6SoaT62SMhvzXEdNzajCD7k6fZZS9YxK7dfgy5U5sEoutv",
  "key32": "5M2ybbq54QyTJF5hu4MdMjETTsdPmQyp8vMZEntJ3iWEguxdcFicA6phx7NqnJeagcm6M6pJK6u7n1xvnroe5czR",
  "key33": "4EhCDtdnPs4Asx58pcUj83gDmk9UaVJCbgZX32bP35c9fWtpWp81wuUvL9BzNz8CrrtwrsbhGtakbBT7yxgCSvRr",
  "key34": "3Kn7eDYthuiYbRXscz4ieepfruJTRQ98mUKu5XL6TyYoMGjGUteNLPEcvooCvUiMJHxsNB8xnkfXNT2hZarpsiUM",
  "key35": "2M7mnFvkFkbKqJb64SpexMKEG1iiPvv7YQvyCDC9ZVuJavTikqXw5YHbNGdvEW4Bk9HWUMJqQvNvGYsKyepqZHQt",
  "key36": "KhuhxXb6duaQ7XxY9BUqGYBcS4SyhatFS78ZYki4JRkCUn8R5sCUL4rbPCqSrW7RJUPNW4GjbHMotmPD1yCgWZm",
  "key37": "5iyyo1Gwqo8wA1d2D9FaU9yLmEh9bsoXnX7oVYLPB7VEXkz97Rdd2mPiBQ4ymdDbX3gm75DFyyoG2mngCLytz2GR",
  "key38": "3GTbZc6Jf44NYiensAFqtnbXojJv72o3NEAUsgAnib7xfmpVAyMdsuqoruR4NQNwgm86AHt3W7DrxDGya49b47Dx",
  "key39": "3teyv36CpcHDHZrSgcrJbGtAaaVa76QKMUvpMBNf4os2Htox7RZ1kYvncQAqsN3SA1mB892x1P1VxW993jeyeXzY",
  "key40": "4iEEACxviWCDgY6jE4Z4ZD9v2QH7cJguMENUZpXYcCWLYbiXdQWCd457Ss3zFBU46WsziaCGyvMNTRZrBe6srskZ"
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
