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
    "typLBvbJ95NXVmoVcg1ewizca3LejWqYqREK7U5jwdwzVv8EeFQk15RE5nY4TEtokgq9noatjarzj6BCYCWR1zt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k7jRFti3Cf7iAhidJCHMaFWEHXhnJoCXcHoe8icsPrSwXZtpmRC8RW62TNcT2F6anVYNoRiVGkHdnPJ6nRSM4bL",
  "key1": "49iboa2kgEEqPvbcXTDJd5tCEixghn1V1oYwAYvMGf5HwmkKrrXpmL5aGd17pqxncESSNViEDjzwF6VMojqVVYk1",
  "key2": "3BUt5zKjQokgDV1s38TGtM78DLjkNgZnwry5CU3bdA7PEjPVQ4mfPNXYwNB9Uep39jkjZueA27eHqMaSUuD1XJbM",
  "key3": "5qG1Wxk2t1AAVNDk1cVRrGTypucvAZN42nVinPnPWfjYQKhSUMvJWZu4TD2ZkbN4BzqErugn6A3k5fzXqcX97R5H",
  "key4": "n9w3pTAgd5vNgjME128Mfd6YEfiY42c9Cq4ZcXwkBNNYG6PjvXV3WFxsfXHenLXFBffwMi6kVW6WEjgv8eD5Joj",
  "key5": "4ZjvsH5882W8sB8pmSxTyfgTHGQzpyfZfMEYigJoMqWW49QsXYu9jRqeWmwsVXsMS2nPgiobL1vuKDsUhou6Skb6",
  "key6": "5donzVKf6nGXTpwcMm5Wx1dFuEK71BGMEHJYfJh6Ugw77jMhnR6WzQHxPyxJbwWyE3dEbbbtvMhAQBDpmhDUvfeS",
  "key7": "3SDSzQiUZGsJDvsrZ3Fisw9fuiveAYo5BC7qVAMoPmewvFj1VgYpCwNY4jC31RRfsGjvuokJP4KUvWPLKJJi3jx9",
  "key8": "2dYnUQz3u6iKs2UgVadTTovdSpiXk6gvdiinNVbiscTWdX5bZMXaFSwZZmExV2waKWpKfVPJkSwTYX2qtsKoYAEf",
  "key9": "63UFqSp3reDzq7D5TJPh74EWGSUknbQosCRfKUDXp9gLWSHqHrPPiNhNWecB3v5KKWCx4sPuG8aE3akTePDkH31q",
  "key10": "3X47bSoRG4fYq1JnNtgA8GU236mg3DffR7nUhKbEsivSBG56yPrtEqLAMGjCiwnZNmaDpzRsaTHxz5E1EWRWDsHb",
  "key11": "3pgrdCFg6ea7xSeMSMhhB2xqCN8j6hURiejYwSFiR6Mcfwt2Xarg8qZvPZvLtn5aJrcJJiEh2vbxheZcCBSTZsdc",
  "key12": "5yQ8jxczMokUBiJwd6bFSwdudhJTj56Hi8y9xUPy6GfbCR8pz2JVYJWGtCUvZDtZLUkAjpW4g8EgLGG1p18ad7o3",
  "key13": "2w3Bs8ANhcDH5G1jwFxENnnd5Rjri1nLpwuW8hybEHJp1bB6yH21TQymhQFpjypN6TXusUJWgvxNNmKjrrXHpbCw",
  "key14": "2KFrJ1A8vnmHeVoyjsdWJdVcN4DDRBAGUsJ4TviaycpBaph4a4BLJa48aySYrUjY5gPBNWDEguPEDk7Gb1YHsPCw",
  "key15": "2RyzkLh4nn7CtvUADShdhA3eykDeFYeuoxLnCiLG5gbFbMfJPphseXbzLjoVEkN3ukRmk2VYQXF6TLw2xY9fT9oS",
  "key16": "3TXbbTyWGSVfqQ4FFkJcMMKfTgssVturpaSjQ4s2Sb47cj8mZoj3TujuRW97oATWcN4heDuSiZFdvFsGyRKah78F",
  "key17": "3P7gsLCjnxwtYyfQHaqGgTQBb1tuGJXuiF4qBvQudMU3oWBJA8jWqASefEgr3W7ym8RqoVvNDPC89cinZRTbuyoZ",
  "key18": "67XKdS171zMKTd9fyjSgGFWR9Xx5ERzQ9twdpA4pFv1RzJm4WNAcoqmiUECSsPkeUMC34M3Y9DJMxLeNQUW52HyP",
  "key19": "5FjUqxwCFxVyfkmYJwgzhxSPdfhEDN4zK5MqutTqm46NvMdr8mJmV35Z943Rp3YeDJfSpLrMjC7XsBk7M5KLM6eP",
  "key20": "46QDhoZ1fvic7MR5yBXmUwDAos9PNUpo6enhakcfa1k4mogqdpSbyq2xXpW5Uw4WstodKCrQgfUmSuYizNpW9wwd",
  "key21": "2gP6Uki3JQagfR4nNLwY9sg93J3gt3GEDksEUp7tvjwC3ektCivtsbqnpsS9GT32BjJaHUE4BhTNAqXycK38N8Kj",
  "key22": "5Qfh5EAQP9nDSuAb1fCEbbBM2dgcmFJ1QqZ85G6KD5dMcGgdnJQZcGgVcXcQ1tdbQ1FJCtd62bWFrXxhxxTrevJd",
  "key23": "5zewZmYn12cdkmH4oLR3FwDawBZj7o3TSZV6dxjg59qqiBsFgypCMX6hf8C44CbXmEeLgHMzEAeCDmCWDnuUWohg",
  "key24": "457fCggT6AhodVBu8EM8DXYu4KtysHjcM9hcmkddosWepaN3ag25P2miFRyviBxFUygxaHHAzzni6TZFDcYLWV3U",
  "key25": "o4XKJH74fnbULyV1igV3ezzN3Mqiymf6g1vesVxfQ4Le9B53qHg6hmcGiafstTvJzgDrfEEr5S49GV6YeEFc5tK",
  "key26": "361HruLQwwgVQGFm784j7HDCUNvTQaCZLdpaD133yosiwe4bueJ9aqALK1RXWAeuRm13AANDrguFRRN1Pou6ZwxU",
  "key27": "2dwxSqqJrRDb7V6LFv4xAyF5GriFFzjYTDpaSHr9RxJD1EHhRUszKwoj7Pf6oA8FrwUfQBExrDy4TTBE1kDpoBpr",
  "key28": "2Bu4Lj2Jdnxb83GT2t8CeT5jo3R3yt1YHJ5uJPwBabRiH2UpzdD4S84CYGJqYqSkwvowwBs6TegrinZMXhgm8eBe",
  "key29": "3KvrTvi4L4rSWYEydFrgxarZnFuChRKitvLg9ahjBRxJ4RMYMomVTKEcU8ZuDNLSZoVAAVrEX4cfup7gLsfyJ161",
  "key30": "3DEPN2jWJrE2BNnH8V8jVFbUo2DpD4gzJUYFiHSYqUdGDNyDaoEJPDbmsbS6pw1baRzNkUosso15qhgPqViHL8Nz",
  "key31": "4keUE262HXSK7oDhXZDeqCAffPGK5NBf5ZtjaN8KHGNvv8tv5NZqvCbHwyK6LHQEUqUaFmcaVvE1ocyMPf3um69S",
  "key32": "3gVgH7gtP5mqxXRWKDvVSfRQxxxNUnpxcVLJD4BK71NSR2rmJvhoSTFamJ7v1EN7khSs1bfnSJmN6uE1SSJFoZWv",
  "key33": "3PPBhAdeSPKAUmuyFVuh9ew6xWpjsTisGgsdGkDUGw9gZNt5gUuJpZtkik6o67GdscvS5C6o3mFxJrgnGXXNfRd7",
  "key34": "56iHa2N6KLaqsTKEWuNoWwqFDaAGmryehy5qmWfvPE1gq3ASbUiiFwwhHABfvdtMonyHmEpLZRhy93EEzjnJySKr",
  "key35": "3DqmKLhUUccTSzWc9a3ChKkoTUxmHHwC1TebyrjcL6yX7UvwwNENgk1roLxfLVLuv5pM3ziqjTfkKXW1FsbsJhCR",
  "key36": "3gf95QrxzFYzWnixdgMGYzBKPVEdamB51goHr7xMfp9aK8FN6HQ1GAQUFYeJZDvtE3nsRVWQDejs1VWnGV84fbNY",
  "key37": "4a8ni41LJoA4xVKWv83a6my6kMyWwuvsgGhS877LQ5XidYkUejeFYQBi9nDzpsfP651EaRqqoZQbUWi7tTiQzbPf",
  "key38": "byam5GZHS1WsruydMFfup3KDiv1wmokZRTvrzdSHZp5KwjRnM6MpkEFoXsrAmzf4vhCu5pncxZkZpnAQbq7DjHQ",
  "key39": "4S8MgpRGyoeNyYHDfDmedPaGis6s54d7uTU46mpN2Ku2MbL2WvUNySDQtg1ZqH9xaSANhucASp5WDEvJaZTocTXe",
  "key40": "3Ga3SteL6seYjLYx7wVfozGSJYNE4LWWU4Jk7CEu2zD3gUCUJjf4g2itb2n1Z5FSCKoMQnZa9gDSaVmLjNQmhSZU",
  "key41": "65qsK3SJHGLMEtwrRmEBFTgrudshdPY7ncQQNovQx44MwpKy64hDGdA9CyKCUqCqwrZN47FzGsZgBjJbQ5cJRjCD",
  "key42": "J1PKSELDofXDT2J4UXbuzxTimqAXAP8xRzapqf46wvgTijz1wzyojBTephKcMaMiJnN8Bwz8MMS5MmdKDQg4Bvy",
  "key43": "2aiYxqquGBWiYWMH3r3sADHJzd8Xx9YsCrDYdfjy6FceqMTxFyu8LyzCzevArKiaxQmkBwpZ8oeEQh7cUQUn6gE3",
  "key44": "4yYXZeUvPEhrTyGWZpCV4aZ1thqictK3tAn3iEaUdQ6ixUoNfAhS51p8TkYV8HuG9oTZZE4pqbC21YsFM1SjtRQL"
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
