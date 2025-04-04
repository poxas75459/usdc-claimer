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
    "4Vy2UBZRL8RWuxQLG9vqdxVzWBVaSSa2pntUA8hzvPGduUdD8XwSC8Bswbdmc3QDkCSLBLFqmpdGCwMbxKYLmmdG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEMMe1iKG1kPr7NaeDUbEm1gt8HP7nuwjmNe5XAT9PvxtcLBR78WjExugha8AJzk5AUR5HE63wqWoi3vu1bcpBq",
  "key1": "2Wbaq8oLf23UEyNeuKs1EkBwexZV7r8mmUL22zQg1PLKWNLg5CepnaLjynv7afzhVvdT9r67SzBcWGBnzuvSRE2K",
  "key2": "24muazU7MU4CWFpzrcjpu37BRiW1k3oyQbAJ5Yq9xwJ9PVjetH2FEfHfL3pgc8scBzcQX3uE2LWudgSAfrbEgMmP",
  "key3": "4ECN9d34NePfnqRv2RZCmo54d2pmWKDHAPcs5WPzoRNoBd4jZ5WagzLGyTMuVpJRwhvDAzdTKB6vEHo32DEjz752",
  "key4": "3jagUazVjWgcYx31YL3okYf1aSMDe4z4xBmtjs7rTjyqzj6tDq1FSWdHwLYrfYWUwtLK8W3YzwzbVLMfdnFCcjAw",
  "key5": "4hBmvK8zZLeJ15PZNWyfPkNk69ZcYvpNdSk9Fgqw6VTjHVwGn9RJfL9JX5J2QZTJRD4deA9XcZkyWvVBQggwPaWH",
  "key6": "4u2WSEzjEZUD94h7oxVJRq8BR9dNfr4m6SzKJT3rCtT9P7bj9aEUpArkG5X5bDFWf7vyDmJC4Xt1pFP2HXDnstMH",
  "key7": "63XPvpLUd7grRNoVswtRUnMpyatqZESRfTpjWK9J4nBPBBo5ZDdkXX3cxWnKUTUxbHyAZWmtFoXDMfq3AgWAK415",
  "key8": "3RhdRLCRwcmz8ELea3u5sR1n8HKerrDXxiFas8qRP7dDtVhatNpVk3wTMVuGY6WsZFbjojPAhUG1VSsaDP8pF6og",
  "key9": "sP5WNmeysbtzJ7v3y9YgV21kuGxK7WXk2kvMUsWLRb9xcZJU5HS8XWV4y3JSriATU6Z3o2oL8dkQa5koNopPNyz",
  "key10": "4MAVvGi27vFihjKKyURUnKb3AxquziNbfB3eWYbGaatw8hjfC6AjXcLiLTBEFmqTec91MXriz5ksxA9CKymvXoyZ",
  "key11": "5iXqgPFFBqAF2Lgaj95syEi4HYttQF2QD5Q8zJ2CCqiW5KhytWKpbt76TMmwxhYzWSqsr2AbbUPM2DuwkeePAgvg",
  "key12": "3brKYUSfitU68D4jpqxAgxgofGw1xH2Gsun8ixoXzTdDXovjEyj2b2S6pAov8uxWtK9svvDQEP6uL1wSHz1qppB1",
  "key13": "37mquzK9yt3YHgEG2bb5RBYfvQhb6Swnq8fN1LDKkVtmoLYUyciMCGKHzFbud5eN1HVrsYSManGcSC4Ca9kYYk6Q",
  "key14": "2iYdvFeL8zXXnoTVbPF5dwfboTsrtFyn5xRhibMFmSK3t94RTSMNip88cJGJcbSvDDgMxEwxwLKn5fVFv9sR6gp8",
  "key15": "2q8wwvRG5h7tNQKbPK28XpnPJHgZ1Wir9hTR9Ba5zMiAmTDsqvMTVh236E7vzyuJJ3y1fysRifciskLmygQBqMgW",
  "key16": "5szG4RyZddgXRLrNUyTdHCyf6gzdTHeKwxeVdBGDA6HVUQYYJmSaa5MjtEL3cWdM6cxxWeBn6xKdW36kTkP1x3bp",
  "key17": "51vWS7gyD4sSA2ZvyjkMriv7GULjLRvtDJN5ffXHkD8WSukMY2z7JkMhL17iBWySjJKBavQsUcJqchMzLeyRvqcs",
  "key18": "Kbw9Mav6bYvAN6YEDbmTAWythzfSAjMj71RgF3sstkqwtFBKDzhz1VdyxL7JPYy88BfRYUK8Ps6kpMAkkJA14Zc",
  "key19": "wHDjMVqz7iaSSLGAS9ohQ79eb2GCUCfLsZdHX2b9ymzfufaSGS5RHtuoaxbQJeLtxtwXXUxHe1Mnr9mMYx2JYVF",
  "key20": "4ZQnYiTrdeHZb3AxU7VviUixZLGhb1w9PVueiCAzPYmg1NVSxWNKra4jCE7Dq5WjNMnfAZQEncY694g3uwvdnihm",
  "key21": "bHaNfa9BvYods3ej8dnQPpgtd5w9T3KP4KPMAjpbcatBBei8VG41BgsVaiRrjgqEX7xwoDF7SyZy1uy8p4Uek1d",
  "key22": "tmhz1BScoRULtEUwuvFvwr9SuUgJ8R2iofAoaXYCXWRqzGD7c97shLxSDCtcuN6kQQyFBJxbFAU4axeiHe9h5zp",
  "key23": "3H53X542MsURv2AfN3BGchDbcRoxVDYxTcc9vNroULX6krN6SQvL2t24xuaFq4PhLJaN37VtiSVtGEmt1tJ8vYs1",
  "key24": "5cErrU5RFKTm7vo3ukz6NpfDnnjBe13HCNge3EzrRuYnCDP3QJCg9fSKuaAv4vsJeZpBUXsGwdWNmyxbThjBGHLE",
  "key25": "4i93pgwqLqRC3FprMM7ABYGDgCzvGPpvEAJ8SpyPBgB113J6G9oPefxatnzEPEQw565TS8aAsXYwfF3vqwkd6JiN",
  "key26": "2Zx2ieDv2BvrQ3DREZXGsFseULFWahiepAaJVKo8SZyxJHoN12Wc3Squ9iZpSjqf3D8wAq6PkeXDjtnk3LUVGLHT",
  "key27": "5ZJqrCazY1h41NkHDL53YmGUEEKte1VsxhB74XLE643XrasCcLnoMivznF9jZjMjTHPtrHjhTc2EmJSzMEWNhBY8",
  "key28": "4Nrk9WpgRmoRq4AkEoHjA3H1BcGbyFMpzrifdMUwPzLbD2JhXectRvkTk1wP71LB9ZjgxXyVC3z4hR7JsbuciSae",
  "key29": "4cKkETfVzJLo1EFoPwdwLkM6qdNrPynmUbExb7XFUfM5niuQBeUQRimYxBraSPvPNZ3Mr1tUfuVaDBpB8JGb9Vrp",
  "key30": "3NitLpR253CusLtSw64JAMt2HVLr6cChxnsQLHvWduzT6NLeJQ1J9Ec24R3v9vxXqBRqgm35uFm8erHtwz1AErrD",
  "key31": "5Aw1RtR9hGbEfcHUsHebbvKmsNAULcEdhT1wrce7mmMhhUrTfD9q1zTqj1G1PJ8w1oaTyuQBeTYUB4oqiz1nSznY",
  "key32": "3HoUrDjKfDf2bTMMMjz6ZhZ6hTA6NHz4fCFnwmP52vN7D3po2CdJYB5JW9emBBbwrkw1XETAti2qYB7pM6mFRWDz",
  "key33": "3sMATKTB25w2MZXRdLCDPYBchXT2GozV23Pw6TXfBsnKSEa63xMBQSkoZimjprkj5MCktySXMhcgbZ3TVtcYb5Yv",
  "key34": "5V81EfdrcibFT6TauZvaNf2p6CheU5dHN5YKKzDV9UFuM66LftXaEuRbCVjMBKUXfZKzotZHF6A2PcvERni2mjWa",
  "key35": "58sdDJdgQ2gyGWBL1EVuyUPyXHXi8fb7U3WnQqYyaEkueLTkJCHkLu5GiDtrawQ7wZXUBGmGLut6j2kMbUwhCLi2",
  "key36": "sbesXRLv1rHQLfjQ6AzVfFPvqoXvMxHD5y2TVSjgP2CYyJGXCWKqpvTC3N1aa9n9VZUy99FDvmyZJrZR7NNki2T",
  "key37": "2gXvZgL9r7xoAYT16VNLUAzSBLDYhPd5iokFtqoRzASXgCDqTUKNs1VunHVQth9tz4dNdHF4cu68ktoALH1ehTu4",
  "key38": "3BL8HAY4hLK2kHPtr23M4Lw5TESuM9TSDZZsYup4GMxBCruBk7GtisRs3FSEyhoB4sPuM4qN51guad2pjN6csk4B"
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
