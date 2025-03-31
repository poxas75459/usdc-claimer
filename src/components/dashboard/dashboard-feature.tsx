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
    "3CehoofQEmnKw3xAcdJy9aDm9hrMeUvigQBdrQgHdgcBwFoieZFmCzpBzUkW6hWYUuaj8ZKZSudaawKtBuWj2Tcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MJ8XK4u1sQbvKnvhruQr3a3ZgJuKFmycwnQPRn6bGbyrWPrSVZDC48ztroaKFdL4UcUNLa45QHMo27z2CgB3muH",
  "key1": "5YbUMnyfRE1k3iPVBZCLHJWGUsoYmcaC5DMwMaeWgKb2AxHgzppN1MX8Sh41q4rfQv7AE7vrHAGqGnUkaeGYmajN",
  "key2": "5LJVHUh1bQB3dmFr9akmgakG6tkjcXBkmZ8DnJFzqJ3bHt8rKpxekhucJd7fScMZqLy6SAivxeeCsxvozaw5bdFf",
  "key3": "2ttumopp2NMMCY9BRgQYCXg8RAm134yEKMQ5NZBjUP4rFsh84yxXZ3G2HzmjaUxhkNioydQSaPCB8LadMGdFMGWX",
  "key4": "BaTskPAjvuYif2951gdS1EAKCoZciBWGk4xPi1AqcfBGJG7qMTZTvV7VQ9vmnE7CqqEttzYNLFGLvf2t55STw2M",
  "key5": "3KrsQB7Nz1kYatgKeZGtQgSEhJf6JE913xeeuEzoXo3GNdNaZz5FoMfefTbK6cup66Xu5vRbWwFfGMgPXHr6KQ9N",
  "key6": "2aLK69b6DjCq3TtxgjcYVQfEMka5yRDQ83cdmypBHYHPMkfDF8nPNPu55j5hoHmfLSshiLMUX72BVgK3CkghKbtd",
  "key7": "36Cf8YP72Dfs5jUXtmVwcSZuvuZJtqcwRS11va5ayajMChr2M8m2LDaNNp1LGhXnTG6Zozr75E8qV8sNSFZHmEDQ",
  "key8": "3zh2MU3poS7ff5CHajeKEFPBtqm7mwn9edQFco2rm9MsziYeyXgnaGi4hg1h1g9xYwVCHDbQNXxAvGM9sMoSHXJs",
  "key9": "4HeiNTnywJjPecEFfbfkMfqh6CySzBR5vV21mtqq376rMn6LY2eVmwDXoAFSK3onDRy9NeknA1HNyMiQz65Ff4C1",
  "key10": "2KadVgPHPtZyy2vd5kZpqAikEhb7xwb1vFweTaWNKNmbmDTjnQXxYjqME8TDLpjYjMsUbxwcCzPrHjvYi9qXm7cK",
  "key11": "63Mvcf8dk2oyAMEgSdrXrKydXmmxwY781HKUJrMwH7KfHXAzigaC2oQSjUSpi4gjN7vcSzCYSNRq8NDSDwiFw3Ni",
  "key12": "5qxDwncoNmmcxgjrMLtzrzW5oDmTjEHDYXQkDroLzT12HjVMjUC8oqFK3gf4xPZhpxdwAnKf3jx53XgxYMxend36",
  "key13": "5KMctRfgnBxFHfdxdHALtohEtoMUsnNcXWJky8sQojqahGibyuhz121XWLeJXH8gjJhL64Q9Rzyhr3F32T2v9DYK",
  "key14": "xhvjTPowoPTNrJiDFF4GMTv6RZ14kojJ7sLyhbqKDt8mNwXPJgvxwYGYWiMYbhShgJqE2MtsQTwf9eczm26BZEa",
  "key15": "2tvY7Tcd3QsiSD5m9bv1nKBKA7ADVzjx2GHcV95YzWpx8HT5M2TZYPTF3CZ3KKVA99KK4tbYwCRJbrFsDNcVM1YH",
  "key16": "2SCjQVNXp9qtakNsgbiEVS2DForedbYuHcLurv8utMYX53zNYc3pELFaA1ZscVGQ618iLzenaNGtjp9hqbuz8TYL",
  "key17": "5gZWDHsD3yZbmEqyt6rh5xST8g9ZtnuFRH7LisXdzHWWRrAo8fUJhmT15omYGjc85zB1tTahtxvrE8PWA39rQ1UK",
  "key18": "C4dAChNG12ucHwuR9voWzV5R3GFkktAah6fkGyDKM9jthqLFK1SwqtsTio2pWFz8pV3mHuB7pN2WCrnGduWoUJG",
  "key19": "2BasPdKh1H1DU7atawhA9TYsb7mJoVc7JyqY9wdN3QLAKW3TH3o3Tjy5cVaYR34HagGSttfDHHBA32uy5RQxj4dN",
  "key20": "2fdHL4Bqo7KGDaN1h8k71by4g3e2dpkGaFMfVfBbvV6Zx8rmmBshva5JoUdQZ6YKb33JFTHWX3WEjFPkMB2CEKQM",
  "key21": "4wHHmagypfiJq8YPaNRTLuVsof8bQ29TAobRxf98kcGDjWu4CWZSxAhLMp6TUpaSzaVWFUcFc585vLwkqe7URwGZ",
  "key22": "BkN6FYwVnwXf8XQLRaok14fJuWpKgSmGzjKgnQKbBSKUSUaUcqNR5MCrnKSPEKNoF871owoZ4StFjhmfuJFCB2a",
  "key23": "2ghi8CVucLi8RsanBs3QkZwutLWmEsWobmh6d81PVpjK2djSFvhouB4b4V8Km7UHYwgdgJfxRyTpJvVXmgdqGqbe",
  "key24": "fWDpJSA7e6ynZBRWxmM8fmA1gxmmLHRo1aDKqZZXvAMZV65aDAuQ36DFL1Zy2zxioGUjiTVJh7jFnoPqDfSrao7",
  "key25": "2h6s7KFMfZ9iBicz79J6b8z9QpKUDaGKNuFjdZQD2SSSGfBsiyzWyRaepKVLfTYAQ2WBd6SR6CiaqQWGPFK6PiEf",
  "key26": "4xGK7URqAUTfKupPhgmspHBMcxUxWxbm9HdXLQrEsGdNXEyxessyMzKm3AHwKCz7KbQ1WL5xUvTyvWf54j6Jt16F",
  "key27": "4a1ZUeMPpChnFRjRBrZPztuyoz1CMBdQrYY3itLEoU3yL1c6yKMP1r4nZYJYNTSQWm2hi3mtJmhgmerxiAKGsgdg",
  "key28": "5TiFQmufQJm9bNZhXfJnu7nfSiqfCAJHG2bEjunayNcAPmLCENNU2bYiubqsHpX5mJ65y4yfanf6h4Hs4Mdb1rzJ",
  "key29": "53jNHVrdsRJCjQBUjHMG723jSRfYhsTZBbFZEMWrQwjy3sKB9HrzuwbjJLWmcWMs8T1trx2kBxr4i3EnTYYPa4eJ",
  "key30": "5XoLGekmWvQcqdd5Wta39FV3JcvubqBYB3NMWDW5r8JbVHCobZKf5CX23Ab1EV37wU3B9o5EhUDAgdAywNiPczFt",
  "key31": "5b3kKYjv2ui7iC7fAcBRwfp1XkkVtWHHmhDoArBg8aPXiHGHGWkH7ZZw7BwpE9RDxHopv5NgPBRt2mFSiwX2w9kw",
  "key32": "2GC6pwq9zcrqyaCWSKaTCNBszTNLFQwDUjAcwE7CjoDj6jz4zTUGM6qzJUWe9ixoNbUtC4iBKoY1aaYXMXpeWgmf",
  "key33": "5z2B82Hg8gQNA6yW9jnQE3grEzRGtCd1g82RcZ8M7v9waFce1KZonp4ACLkgZ9Szo45q31uKPidKre3ghwEzSCfR",
  "key34": "RXczAGroyFSFjMpunGLdkM59JKhcP3ygU2ouv5cCJayFDGiHeHWRuws4eKXA1ZxE9D4tt24E93vVCsYpDfgtGPZ",
  "key35": "Ar2j8dKBLToaL7iveHzhnt3qabC3Pu2YkRehFmxaZJCpbXJb7MmfiViiVatbcc21AeJmSNe5A6gaMuAGH7WWzwn",
  "key36": "5oTR3qwgJhM6NuCUrywPCjYoKE6wcoSCAe58h9k5SFDy4kx78qmoZb6u1oHT8sUdAoxAPhqCfMmCDcuhALAAQbC3",
  "key37": "4dMV9eoFdExfdEuD6LpvYBJtKTP3g9ZKsAfVafetmUFka4otZeT3gRybP3Tjsa99eLDQMTQuPPPB41BhLBT1Dh1y",
  "key38": "4sUWsQ1jPbD2LnKk6YK5zJZxNGf3jvz64SD4tdRA2QfGeisrrifJUDyYxpdGchBKJnvE9isNvJN9PQ6VtR49sww",
  "key39": "2s3NRp4Ee7TxSDjWx1pw4DSCNVJAWztYzQQvzLwhmrCuVn4KsosVqRDGnU6iCsNWGqyKNJyB9HAmcyZ1T199brve",
  "key40": "2RK2J1qA2t1tVwxMSWsydEYaKjWD7dUx81CUQXToTfjcmL7Z7FpCHMA8pzs1dZTyt1HEr5wh9fEN82LGoq7n4kVn",
  "key41": "2wywoYAE3XTT1QeGRVwquKGr2dBetbpJshNXnTryaWXB8sxrwq36FTZC9Mio3tqUzRJYW1Hz9vs92Suusi8vqkTL",
  "key42": "5GLcENHQVToMCvcCXbYtPtTyujDDSWwCcmKYYagmdqQJ2dMyupCih2qCDP2VZhXa4K9LWEFrrVzXe4WBhADyNj1o"
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
