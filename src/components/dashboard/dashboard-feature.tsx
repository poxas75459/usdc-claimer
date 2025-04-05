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
    "3B4JCGZh7KTMT2P8vndSVtaUPtHGWE9sYREWixjUp6hnXnBT6wHJnyfNxbj6DXGQgVCnW7XcBpJQ3n9korqhGW8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Q3vNqZ1H5z1vYzsceP1d9eDDDhMv7UsgAjVhFX9tPNp1dE3v4pvuon5j2BTXyu6BxZ4BfEwHaRCp1cuQncJZUi",
  "key1": "gM3mBagQNkkx8ruGiNVGgnyk3xdj1AsBNqMEAzhMejZ5CfYPZT9yL9y3YZx5fgq9CyYA9BvnXN7CkKtJjrKHmjD",
  "key2": "4zJSdC1Y5RsYaGctxPCGw8b8dSZ5H9gCfHHHCfDYXF6rrtWCCzHuenSF3tAAH4nH4fDEQFMBBQWMHBMxe4bdwVbY",
  "key3": "2z2ZxsWHaDzYKHrHP7XGw6ErkEDGRY8oS89TTHJzUktQTVpGzu8Jbg9x99PjfuFLwFzPqEuyfy7nACbZKgAxHEtV",
  "key4": "2Gw5smn4WoCX34RAfBjb9u6sP7EvxG7Z2LBbSPYdxiiZjQQW4qV275aEK9RqA8KHhPbWLGVr5zcVCZWQjHZmroWM",
  "key5": "LDQC3BFppReCicMj4bWeyQg413Aocw8FALg9qaLGVDUEcoDro1DE2yF9D32euFuheYdUjZYzCQHpKxT813yeWvX",
  "key6": "3VpngCQQaCKn28cmLw1snhNngKLfBLqMsPYouQwgJecjUHcCeMfJgEkkJdHnwuCwZhuzaMwErean9eaoyWomL4ux",
  "key7": "47meodGvbSEENGkxATGYdCnSGDtKij8gg9GwPaiY7ZntNzrovND1b5pbakgix9K4aEcJHX3MDdsex3RwS2YeDCGC",
  "key8": "4KvQuSgbsyBeDim5M26Hgp16nZYwPKyjztP8j52p4BHNkSzrQSUt1EAa99iDFFnPx8B7FLqu9ZE3fLwNdAkTzYP7",
  "key9": "81qrButTzHgHo1urHfSKNwvdDxewynAbEdk5i8Qd8vRE6GA93xZLAhBLo4cCr7NWdy6G42RoiVoanocybU6PgDA",
  "key10": "2APqTRWTfScMZMLtppJ89nho9jLPHVsxXwLo2AvPq8fPVjtJaSSSKQrfFD7ghnznZRPAkuU4XerRKT11rVfVtMLv",
  "key11": "3hRRp7Tr2fC9oC3wTeRPitSDMoYzENDZM3NzEW5fsBn7toHJi4vqZT8VsJybTfpyxsK73yc5gCtQNB9PtE65cAKm",
  "key12": "28Txp9KJtEeuyxWyESpx65XSLr1b87SYtfEaANtbgFXZ3cVovQSNTLnDy3W8P86JTNeWD5nDCXg2d2p2HYXFF2wD",
  "key13": "5E81xTZAV5UF6NeAYv57Wek1hg2atBKagLD5yZeXHU4Uh6ceD4Ni1MPytFrV7M1uj56cNCB4dPHWXVD9QUBfciDj",
  "key14": "3XtURo7AenjirY4m8kZ87vUcc5zyjcuvwve7S5GJxaHKqbvrLWFJbamXvjkqTShhXRQJn7Xf4qTomFXZz5hMB2Pp",
  "key15": "2gVcfNjWVnPhTyyFafmSL5Ze1zQRGjQJn4DtXAvujSfytApPbt7jZ8iN5qRM7VFthJtpoWh3B3nZ2UcNVT2UmozV",
  "key16": "4dy8wmrdEwhrwMpsPEjMbme3Wmn8XWLTCUskHizqDDfwrT79CMYGwV2GAPZkr7D4cYAsiryhZJHoWZ45xQrng2x6",
  "key17": "s7uubxZZjtnnCQwAvQi9J7BRFnokgXZzeHEby4M9EPZQSGqwZbYqkoqcSUAhJHRCJG7VzLqdzagH1caYCE1R8Mt",
  "key18": "ka2tg69NPZKHor5BzSKZvVUZp9kDLaGBs2pXd4z6AeoRRc9RgCZNt7mDtcZmU7m7ucWYS5L1WXLeSTkhSyrehFf",
  "key19": "2rFw5J7ENyEYTNHVsbYJCxz4UC9htwjNBcpVogoS6apDvk2w2h4Egccn2zBB2xxe86ENDhcUyqkexDdNCNcL1Gvh",
  "key20": "5u2wxoAYuNvti2g9xzdg5K8ZK8NAZkAQhfFLAdCLu47HRALC3aV1w4KhUqJtLL1Aa9L89HY5d3A7fxsUUnp9w5o6",
  "key21": "v9aMwXDQt1GguECEnaAz4W3XJX12KAro5DBxeygzkRvNeHEQ7cKWNqywcuDvSq6vQdLcbtEnYak9uVhvH86BrHv",
  "key22": "3zaJ1a5UQ6QQPCteBe47NUsaXsBfEKYncUTZgxMrQnsD48euje3PC5wuayVn96DaxgKXJU3Qreb1fs5A2mWdjJoj",
  "key23": "dC5cGkwFA1auTw9tQnv2v3wBkN7MZS3yizRwy5WDsjAjGSb5BhTaiyXGZQp12PnxCFxUoXNjWHUsw38BEdLQi1j",
  "key24": "3HYhoVqbqHDq9x4eSzwozQ77eJRmTt6Ajy3pM5UcaVUovRmpVByyXu6GwiRNXAPsuivPyrAToEPcwMmBYY6NGE3",
  "key25": "3rXZeNxC7tr3DL2U2UhPjeMUJQkrUQPJ3f4PFjFwMa7bMGNFvoPzogNKViare1juuLdScbuDcWe93jpMrN3Fy3hs",
  "key26": "3z76yBrpLyrajWbmeZf7XscZiW3JkFV5Ac2ShCH4V1e9HYCL2tBdG8ENSSAtq8h2ACoSbpCZVbzKkotX5pz2FGf8",
  "key27": "4D6vgBKmYpRUx2mbYWJwSQMu2RQNQgf6Bf2BmDrfLEafA1J1T5zUH5uaTpDDRPPEDASdw3Wu3sHZVw7NXPZdzJaz",
  "key28": "3pbvGKQ9YGH6iPTpRCJq3nGSkRjcuTEyTHQTMxNgpXMJTFfejq8Ci9z31Ha33jtPQDGiD1gtZnnHmunSKC9nxapU",
  "key29": "vZcrm3FhX2NvkB6C9kiuVpm6ZWdyAg1GhBRczGdqxMTQdK9f7eKj38bnPyKLNB5CaNjikwkaRZuAq3Mxi2Wi1yC",
  "key30": "5ykKQH77P4kj4NUL8abXKgzqizFf1DEEAomVw4hRAtMbGEZoiMFSAkSqycwKeD44RjvZxMgmEY83Y5SFDcAq94mg",
  "key31": "5DyGd4wsFvqz83Lo7u6D3EievukzhJpAKgvct8Kd1QzkvKfCAeZBHuujVGoSWd48d9kA5x6SvA2T24dWi99n62J2",
  "key32": "4AWViVHVCGonM4n6HPKpY6wSMBbc55jNKWiqtEb9NreP55kKwKh8WVUN1zNTiLJHt8cgQQrRsNvGSzgM9jpGfWAx",
  "key33": "ioyqTg9FQ6FLDBfYKt3rbsrr4Nk4DCzDTc7veoSdoHS85YCum3SndHm6btmMj3tCvHqXT8snTzo9HFsA5Ai1R9z",
  "key34": "4pDSBqUdmuZWPfjk4PHFJY1W19ytnfasTjL7SH95Mc11VFw5xZZ6o6DBfEAkXRcX5yGDE3rKxqPDDGwpQ6sxkRkt"
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
