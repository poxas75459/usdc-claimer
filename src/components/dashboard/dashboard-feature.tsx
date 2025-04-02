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
    "5ZjrfPj1G2MxRGpewMR33FrNiRBPjG21Pt5z7kob5AVyv2VNv78wetcYyQNLNYii27mNq38Dx6RjD81vkYZZS97G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oAkTrUEy6P1AQcqjfNpA7JTcaTvvTYCwXC9QjoLmFapd1sSJ8iM1BWWAPTEUC9RsvMeptAQDFJU4kHKvpo9PDx",
  "key1": "2Dfduo8HYRpaN9PXcigod3i1W7wTUAoj4i1VN3xCeMx7gcBuRY5VXL3VP82KpZCGkh5iy3ia9PdyQE8SoQBMpYgb",
  "key2": "4rXQxEBaRdW9nErhomonn6kfuns75owNE6ThSJxARqdQ7ewV5WRjVRUP5io935bkXQBK1m7Bnm4y2NAUyRSbUUtM",
  "key3": "2JkU6gdZcWuuQyf7LDpGajZeVTiiQRk6LhPDBiTiVr15jsro4tdUEvXKjE1Ue2Br8JnWHxtmW6s9vvjcuKeVQzGE",
  "key4": "xDgftjVYbcfGToRdzadXe4gqnTuuChQpQDp32TfMQviZG5Xu3GbJJLJK3xFi2dV7siXmvk4bzHT1ySMZtVrRDoY",
  "key5": "e2mK9ikhrYdghaZ3WAeQvmK3ZeDpXRmixDLyL1VnAks5542W8RTai8ZjNWDW3VDCRr9Rnq9QeEvBovmLsxbiGwC",
  "key6": "o7thoNjkFHCXrHws7Rr8BLtr8HhogRzBQUydv2k3A8MtnrHsDBj711Szeg8sbnjkfPeSdqJKQ6bqqX7gtYLX86J",
  "key7": "59NYjqUyJDjXTCMZuQkizbU4hScvKAasbgmtQNc21891CekYmU1VgRsJLvHrZqiaBHDmpVDSzhDva8brWLc2RhMC",
  "key8": "4XFu5Pyszrn6rnGZ4maA9FmpVX8Zw9QsqhvUVrJpCXKuHofXdqtYfkFUgZYfRvVvLQv3ezSYKxbGQUCT9iRaFwEw",
  "key9": "2XEzk3umTTiNjUAtaqKTvDtAcZT9xGnud4PMwmmka9bhm8EMYzi1TEbtRDEybt7otZ8SJhNNAcw5Kz8LmSy2Eq91",
  "key10": "3gqJ3eWHBeKjbKYsTSiifW4NSDxf5VN5mPaNTeGjRWFuteBGDzdEAmQ4AWu4XRdwoi89BSpRtZZmLqQeKVneP9td",
  "key11": "5ofJYHFQtpLkV63wBLAzonLsxspywZJUhqM5XFWdUoUvD9Hxtnxr6SffHyQ7EvLB3PGjhm24VnrZq5ML5fmjyAT2",
  "key12": "5EKMFi82TEHcADqX7t5ywjeQU7w4haK65H1PWcEzhFh3TKeyr6p9eaHMyLPtPMT9uKZngcuiGL4DhCFcinTZy3En",
  "key13": "4y42JHuQhhjD8dM9ox4gFLN6vcK2XdCkkgLzXCG7SmS6VoCVD83TH79Mz16UwbQuTanKN9rNhxhJb7s3DHD2RaEW",
  "key14": "4LopXSJ1kgqEWgTUUoAn7MmzXwZi3bmNvZ6R5Qj8PkiP9cxqZ6vRTWpmTXiaqLn1ZH85SE3RHcYUXvVBpnWkzxw5",
  "key15": "4ZiKnW2ePZXwN4QmMNLSWmx5LN5DqVfzYWBfSkG29dC6pw1k7H9UPURsjaTiJW7dK9aGcXazaH4MaWT8Gyrg2jDq",
  "key16": "5rKKJ4hCQ4pmg5BA1CFiuhBw4HQUwLoysDb5eyhgesbDBCQ2r49zi3PQG5XrNyciGFmU7WT1YpHiUH8FQteVBk7y",
  "key17": "4FFaAqykEGRhmE3qCcfEzcnBAtHAKbRT8eLSE5db9s2N7gb1fr6BRWxG9A2MZjCfRzMQpm4yPgmcU13CgoVJ8wt2",
  "key18": "EnwJcLhbM3Tc3GDAXdSirvGUsR4DZbyiJZEcuAGq3ofouX4PAHqjZj1WSwv2eFvuuw3FUBj35ENrtzbBfVANFA5",
  "key19": "pkekvFchMut9UaTfGzTFuA49iwVastjCwh7xHTYjkmiDaNf3vpy2E5yhqsiFUb4JmEd4tXnZLg7YjCmTnysAUzi",
  "key20": "2m4dp7nz4eypaWfUdCsSN5duqmoSxq3zQjfNsAjhVTouaRwvN5xKkZYtNkMnqtpY1XRhrzUSH2VJAQLDSwhM7Qe7",
  "key21": "2qh37oKiqXrShq67NNCih81hh2ERoihMFQunmToqXRti1SeRP6TSui2Zn1hBzeWCn2tBVGhQn6W7wqGc1jXnQF3U",
  "key22": "2n7535aNznw9n9fa1fkFUctP5kGn9Gf5z4XBw18vm2UzfbP1oz6XnKH86wDT9CHKajDTpAkyYfxoZ7AUTFB4q3zF",
  "key23": "jtgFiEkDrUNz6NaMv6b5GgSpgMQMXrMkGFfKtsDJZn6zCzuZoBxyxTQ9r9f7wdzxhEvRmr6V1w5ufa9JyxpeJrc",
  "key24": "2MipTNatwipBbhAtqzdP6KqG5ipVZhvtQaBKu5yWqJkfMbnWukBtjjCF97JBuZbt724yXGfwJagWtvGEbei12GNz",
  "key25": "3dnVWMWAtXuF8TwB8h9M9rYEpAvqjctWSKrDJhL1MARVxdbXPfjpvj1x2Dvh7RBcKAoSrVxEXB71sfU2QDij1Rvx",
  "key26": "5WNyRV4kdfB2DJfH28mdWSpK5YgM17FnMTAYSe7KDHYdyzRxcub9V42kxAsSNFuiYFouU3qMc9PXdGbpij5nvmBR",
  "key27": "4FjnT1yT1vh5Pk9iZJ2j9MvSw4v4fWCo3DsggwYc52FsksxmzrsM5EmLKdddPmYUNLzmf4NuAifyyw59dKp4vfrY",
  "key28": "67WaGoNodKPHgMmyZWvazYg1mDcNCCteB1SZHUPUf6aQTbPCDfHBoaiNwKgM7kUzW7qwNwXudHUJgctYo5vQKD3C",
  "key29": "3gTvZeEpmrb6AXLZg8TTybRHSpCwFZiTuFQKxjgfWktvCCEdfdz1dDZx3E585MBbR7tkz3Syn8qj1rrmMDd3BNxS",
  "key30": "4jYe8CEq2JXEyGCyYp2FgfJwAQakBaKUnWSX6KaereLavjM1tcbKyUmGg9huwd2pVDxXrU5UYVnruTzDJ3XQmBtB",
  "key31": "3ezjJvitzMjWxBe6xfrAqDFjstKS7y9BP5TXghyWim8N8NfpX526c3LcsdMh3wtoXdwSSJLF3eBhceDzBpw2yiP3",
  "key32": "5PyiRZt5NNWJ4QEJBZcbKd176iL3BdJuZJq7iQHoYgBc3Ez9BojXznFhjzsT76McYb8ftUcBb1Txuc9r7HscqzeA",
  "key33": "2MdHpim8CLgwjczQNfN8JCvQrPZfgtwdAyKimBoUy6KtbHCACP41CXSpi1XDnmyK8MbZrmLRimwG7dQCZA7bJfUH",
  "key34": "4gWV7VshBf3ZG2xeKRKnU2kJ85ZdjKZpMxBsy6W4QCzN4L6h9hzPia9iogngpKaHJLtvgkcNovzkm286QsKmM51L",
  "key35": "2qGQscmQZBXWL5evbeptKAd5uaEGyDMYBEtA64btfX6edFJedraKUSvT4h8wSzJFaMXt2HfgBjJ4fjiJ5nFLm1Nq",
  "key36": "2yFCnenCB9qxoT1zeUQXPBcjZdpw6HvyjGCXyDzF7MvPR3ADTw58r89YBtrRWUx6iuXZ5iuaFSL5prJoHPoUYV3o",
  "key37": "3jaCusknkdjTU6gUoC4pdSwVhHd3hJVa12Ai77A1KUix8dFrwGCAWvUHDYe2bZNogapYndXcrdukcWRLh1TWYGiV",
  "key38": "3BTxDhefQnfwkPmTTqQDBZXqrasZAk6bjVLj4VM4ucPoSB1jRF4nK2t3NpxFKXe3z6JeBC5jRbPinN418kJpyX5L",
  "key39": "AJS1MgeRSYb6LvBY1YAXWKHFpyG9L2q5w5ybWTFCcb7PZdBGcsx5sH8hKzA4JV2CCHjoGmkH7s92DVW3TA6rbBb",
  "key40": "23RDxhnD5xN3qtMFwVPq1TMrNE9AqdMsgvChxEyUN85nbdcBRJxVpteTSyi5XCSHP3j6fUzB2mMJYEnvmyaMEqWM",
  "key41": "4JWvfkrKbjKdVRCAbFQKUoBc2FAVuu9CkA6b7ckS6naVQtCRPBRwM53fZwt9bmoc9jodSzRehtj6pQzwVUB97Gym",
  "key42": "4NFQBNpVjyYZgKEohSGeCdQ1p7nyJjh4jyJgnB9LRPQfQ7x6SwPpk26pBdVru3Aqmx9hb66vB6YA5Pgcqik8svek",
  "key43": "3WjQ2iFSuagTHVJ4pTjor42BQ8FY42TkSUgXPzYG5gLsKwRF1anzaopfxcocoeaTHKt5fMFe3mvy6Agv37cKmnQY",
  "key44": "dXm2LdPipmvK9WsFoSAx8HHECL2Bph9idndiWd3pCEYR5opWDSXKMchMBWtjiX7aaUY1kGwzBCM7dBeSyePezLS",
  "key45": "5t4tw2dhwdhjcit3pnKknNYBSgazwhKrsmtMgCNoVKuB3Qm4VgDVqqmUgdXtpmgJd7bugd126VQQVWRiL6ks3qFq",
  "key46": "2bgb1SxjhXyQERUeNutB5E94Q8ZW4B84JnxDamPGqnC3knXrgcnKvowuPExaz1jsaCh3oWsLUm7deb3jTuzroi75"
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
