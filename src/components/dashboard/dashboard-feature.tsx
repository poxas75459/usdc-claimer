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
    "63iTLudVz1SjVVZyiaGJGQuioDmTTrmFZGYyQH5quwUtyK6rgcy3Ag6G4wiJwH6Myh2mHN3DF8TcFeitHsdiQLGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5estJMQ4F9VEfnNLjkEJ73oaKzmAw8eLkz1uiJ4R193k8SrfSvqASsHEaDAUVfzR99xkC32x94FSoAB4NkukuXC8",
  "key1": "4RaifvYth89N7vfxeqVxceerVdMnaUXkMw5ekZzLnVhbFvKGEvXLJqCq19dN6WmLfdb2RfDxKtvpYr8jzgQxwo8K",
  "key2": "55zP3qcWVKvZkZEpGAKA3rYz22DH99Rfzo1yKJNmLWJtkrw9Vnbb2rtiozeqBS4gGZJXNMmqKV6V2H21Co6Hg7Ri",
  "key3": "3pQwhsB2VFqSENAwRUU7grvxbq88YqZuPAFamSN3qjT5hZbxaS91WMjB6CrYCBGNPdM5K1Nam1TNAig5RgHkwMc",
  "key4": "3VoK6XvrHQw1btMjRdfJ6TK3DdFf1bwsxAHUEovTs2TbP8QYpBzFADhDS74nLizJDaoC9yES91DwFtrzEgQ9P2vU",
  "key5": "5vMVZiVLQeMkQT1HBRrqC7G1KQcjy7H4r1gbmF3ryCwH2ik3xcHfZ7WyqKtPPjFfSmdnAWgGB9P2gsKvx9Vq8R7x",
  "key6": "5a8YLLsWmMUw7Ad5xb1njD6QwG9zcp96FFg6KaJK67Xb979ab3VXKdo862sCgeF6NhhJWKuajenRmz3Y4GBPDN9M",
  "key7": "2mzuDqw1W4LavVXXJaRJp8nunAx2kLHMe9bNQ4FkZb4NVtmXg51oD6U26x4D9q3TYuGs28iSxFG1mUJJQVzKZsaG",
  "key8": "2psQYXCE8mUpPHm3PdBQMenHWGvGPQU1eEmXoVAv2CDmcsA1Tf3L4wzXvxJBbVbvfz36RLXJsUsZvKT7jJPnfPcC",
  "key9": "4MKFi4gAE1MYuBREQVNKEYjukFzJXGTqJnty89VjLXFoSCWgJnY9MJh3ZiDmfH3m4vxoiTJcZoB3jCcit3M5c7YW",
  "key10": "27Pc5KmaKKYB59e5JzKtzaU75FnMNBgq9GtPstm9urcU7T2oZa3aWhG3mJ8tDuVmNxGtSE8SpuJ2yacRgTEunUYH",
  "key11": "3HCSDcgPqrGAxrjic9aAEVTSs6K2xX9xDQofVXhjHXQFLG3CHgMZdDj8WqSYBazskxAutXxe4zhLocezDwAe8FEm",
  "key12": "48bbqkaxwkJvtyC3gXmnJQLtYwyrpT93LLvb3bnftqd7C9RruhMMsbWJ2Hz1YUkhDen4zrhr5tBGqyF3W9i72gST",
  "key13": "2euc3pLuha7MN85Pco6Y8jHDSspDDLR1JdEBeB3ANPNAtAkpEncepdDZqnu5ZQBm4SJCBppT2g6852T6P7YUx32B",
  "key14": "4huUMgEc5UoxGmEsMpesygHrvtxJs7Q5BdPbQEYqK3nHyzcnikih65MT7BXa5VfzPx5tjYgQHkL7aseC44esK3mu",
  "key15": "5a2VMXY4YsQgdYqM3CNK4nLWJ8So1sPhubj28YG2d1ukamMC4mjoW8AasvFsM3ShNcds5g8XDm7RN6RubA8Mk5kR",
  "key16": "4YxkSSw74JDhDGH3MtLmbxqPHkAcD9qy54xisJkQmyi8EBxn8Ar8yueqUkyuTnoakJDzeDejFxBa2M7VSzFmXXQG",
  "key17": "65n3G9jc8k4aFEDDscMKQgs4eoLzsKWEzZgUV5EjMads63yCb1kHnSJHBq4NMgpVEVc4oD2Yj54tj1d41J36mmgY",
  "key18": "bxT689PwdfeaHkCbLRxrSjGUrP2CrarSti4m47djY4RRWRMWtCD4vyjkxgfKEvVVArYwHUApaNqNq3kVLhwJApe",
  "key19": "36vkzbeNRBGH2Fd2eR1P4EdRNW2yq4PRAUjL4N79opjipB5KqrmxP25Kkp4XcjpDkc85hxk5ehaadLPC5QxQbie1",
  "key20": "5xDjVAY9pcNJ7FNR7gjyrbWD1iHimmBvMCX8XptM3MDrtFFxkA295T9eVEqSmgL61BWy4VxN27wVN4zwDK2HSPXc",
  "key21": "4QRsrU4ppARACEBpJnyQ6BFTkGQsZBrPbZWZfitPaM8JEGz3Nkg2obshNw3pmiqtGwYGkyxTv93wwSKixVpsocWJ",
  "key22": "2uUTC2uiEHDhsZfYrQRCqX8tinwMnSwNcoGj3PQ9k3SkYn5LYoNLfesTjqnpe8YhuQwh1QexxVoUeBCKhgc4p7cJ",
  "key23": "K5JpVoFX1tLNGGaPcUBFmBNNoxSte9GZjB8GKXBeKkPHun4gWMGXf1aPQF5BN3TsWzonXE6oAKTK1MLnE4bpiAk",
  "key24": "wpPHkjsGwMAWJmtorYTKGWon9cmMWaZTswa2wuhcsuVmC2GLZNh6sKPu5RzuqUpxGofp1R49TzE8dVZcNPJGtKS",
  "key25": "5RWAjoUSJUnW41aeRLeUBcjSwtrtb7SZSobJC9eQ8nVCvokqrMvuwrePpM2xwrPLjZxKEfyYtzzvGbFn5t2E7fWV",
  "key26": "q1KY2aBXccBFWxYuTL1BxrxMeuZ2EAT9GHCxxyqvrCiTq3TQZBVrZHsD7W2E6ViPy1mfbBhR7TRGjiGchBfa4Ek",
  "key27": "unWM5XKXeeJnnX38Tbf4zajqNvVALjHuewjAKmLRbZK5T2HXKH3tKRRVQrAG3jUp1mjLWnZsfTzzQLHgJRYTscw",
  "key28": "46yY7ZyF2GdVN9MvzyZ42WhdbC4KeoSbHvrdRRQXPZ94EUWRCsr34f9WPCvSvztUY8KcjUG1oNveC1ytNTdviKXK",
  "key29": "5cQm8kzTFazLbv8FCUors4UtDnqvSX1rXGxYhKWTTqQeWYmvVvs6YmXM7vupUftKLebuV75nJwS7tC88ccyfx876",
  "key30": "3sKp76ivP1UdjUgZC6qi2kizj4M5ioLvUnLG5k3dGYm7Ln5UVK8WGGdDe1rr3wtab48rUTEX8DUyZ1KobWnhZNs1",
  "key31": "2vXYXX1XP73hhaTmSJFyLkaThhafLz8CDHcTgATpzDUpybwuH6UsZxtJGjdcFZBipJ6mK9SWwC8uyL2oAv1mjxUY",
  "key32": "49g32pMyWniME88SwXdK2Lq1UDm7gWu4bbWnLC9CMEahqzmPPYMngFkKrqwUgbPbdVrT1PHvWDVANAKuuNkYHzzk",
  "key33": "2MjwV1XhET1Qh1T1NA6FUdL2GFHCjBhQC8UYcVCxJytX7kRmJsq5X9iY3DtzcqLK7ruhg1j7dyWztbrCAbF53Zqg",
  "key34": "2NYGeyA3NgjBfe9BBaQroUYQjTYoEpHWSxeMNS5CVs7Qwa8JbnZV9U9QrVwgeUa7gLFaxK2wNPPuim9Yo8NkJAK8",
  "key35": "4AYczkXq5zgxGNb4Kkwg9rKda6kH4WwrRWjsqiaJjRt4rDHJKUtauNBLaRdmipkN16BEhYHQsmDtUgZMqMkSvS8L",
  "key36": "5i1fEWJJLDsJaGK2bxHRPe9BQUM4QtsPgNSSYANSjMwMxjuZNxV1NHpZCGjFuUVNNqc68AhqxTJis71gV9GFzuzt",
  "key37": "2CbW9URPJvGzvkYwyQdDFi9oGAump98pScWbYgKVEPgUY7HTH8EVTj5jQuRZ7bSKH2d81aM98YTn8EGQFm3uJ6vB",
  "key38": "4UUgQdRT9Yt1XUbt8vjhrGDViDfqbh4ie21SnFLoDgeagLBt8GkZeCiCsiMGcrSpNttd7jU4TL792XpGa4AeQifj",
  "key39": "4t3zK37KJBoCtXzi9zzpauX2SpNjGoQ9gJy6SCE9YiSkyzxUakKvXvj9Je3cWmtyz3ttTZYeamMkm82gdkHJ45Gr",
  "key40": "55836pSYVPYTPnw2GyQ5DKNRUQof32U2NNqwVVXMkA4Xd8h2gyBZvHjCvGJk8h5fywadvM6h2mBM1Vu5KytnYEj8",
  "key41": "3ySAzxSBc7WmoJhGDdpjjXvMHwagUEW97hqnPgyJTruyabWXqyCTfQE9DJYCq9x8z71UcLspdHNXkWEayEdAubbf"
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
