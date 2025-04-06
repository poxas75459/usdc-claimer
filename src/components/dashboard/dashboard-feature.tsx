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
    "XgyBkR8RAfw5t1wq1WpewwXXMcayhLSMMoKsTWqd6Cm6Q2knfVEYesgVjKQ6nAmwRggxturaBGmqHgeWE5yzBtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V7HBb6P7GHLE8sRcc2RrRDAafBsXGLQNFhi1AznQd4CAx1ChekrdKy6hcpY8vKCcDaujqdik49BP4LxBVfbsBXL",
  "key1": "djnPFRvNtGSjr4gFJibQ8Kh9oHK3ARockaRL5SvGRtg7D87uCv5p4V7YSZW86Te9UuVtzJf6hkXhmMhbVy7eeEF",
  "key2": "5hybnTSs4SBEzRZHn7dgM9Ft6EGnXFP2CcYP7oZmHP3SsFn3RHdEzp5cBRrcUSdJKB82jm5AVLsJyPfYTqFBEJfe",
  "key3": "61GDGSgEJW1FH2msDWWkmiCt2hnbE6HyTfhxaQ2x9xtB3j8LHjHKQBoHSujNad5aQzaQSUdmrvx3Rxr7ucc4rXrF",
  "key4": "5dCz7811XmSr781vuEGjr77nPNbb9t1mPukWF9XLGYZn48aGfhjnoeZ2jn3sSWBrFNuQVbXjcg1UTNbhawFWcDcY",
  "key5": "2xJVLYFcCr7jiV7hZmAdhKhVi3495CGhDid9qV9rAqGCfSxAaMPDV2hHJbWbMJe5toWqzaXv96VcXaiw78R6ZMKt",
  "key6": "3Yi8MfLpsmv7tFXPsx5P3QKaaWGZjBY4xfn7WRMUDZxGC2RwvGQrM9fdqcizDwe8uWdiTTCi4rNE3Z91MFviPREr",
  "key7": "bNZiezjxiSLP6mAUBy6iUzXaqM8AJprUgW8wCGoKuSTUxnNQpaqdT8ZE4roPcGZM13XXZuWDCFVUq7xU2RdL5NV",
  "key8": "4aQZkyBukdc6KA3LdRcjP2FVBnTgBUd3bUpZf3B4S9XrGuhBg7knAbTiYz5kv8A7jbqeW3RGAY6ieEQyWxtepmTM",
  "key9": "cH8KuybSsd6D6nZV5DacMXP444wWp2mEzXTKdJ2kCPVNj6QNJaA5bc5F14pZTdnTjcjBAqsCjJP2yr3zA8BzBjw",
  "key10": "F2QyW4gLWkzNMFJN7vKawjKWSymz69f959iYWVZovcaS83ipioVqXguf1SbqFLQk9XDqB4VhNU1youMufCuEwPc",
  "key11": "2keZ2nwYRvDHqMDVS7AKugdBjaUoXgm1FcNRFSM82Y8F5bs8m2Y1rkeXHfwk8chsFUnFrExQ1xspeBPvRCEEHcCy",
  "key12": "5k6Hwt26ZSSEqQw1zuocX14XnvE8ovKnkDkCp7hAFSSHp5LYWpdkSy5ZTqCzRhCbRevitMxdn7oikQuncyu59mS9",
  "key13": "4SyuDE85k4C8fpTWkcCZMgL22yED9EzFSnWL29K9HxmnXY9YQMQR4nFMGhCSzao5QzbtsFayQjJkMDFKiwrjEdqj",
  "key14": "gcTDshe2fBiLoVCQcxW4WMzejpHrXXXrECLDeFsebVTcXjWFZna2i94SBs4dcoM3B2sMLjCFvjbPykv3po2wJm3",
  "key15": "34FkbGMAFu5DWD5xHxwDsHJ9euRW53dwmzkxMSY9ZPUaiQ8BuJ65Cv8FPAseiKr1XoiBMrvMGXsRA6C9cTtHkimg",
  "key16": "4Uc8V1YazA3vC9VzRuTiZWoQHCS3E3uSDmt7rwfKumyvrb6J8cHWqwXHuDyDjGYVgFzr3v5qTgJ8M7bn2EeCppAq",
  "key17": "3Tcm12UhrEfJJLVETSpbs3yB2dTLSntSegRcTu5FRkgePz1Pok1hp1GAQ1G3mutsQdGSN5NPUE5Zm6km8Z5yC1bm",
  "key18": "3ZxfydhwUtwwRTmmPSGVANx4wb1yJw2KmddjHbQyh6gV5pKjJN1r9BUSGR7HJHvG8dzTyuwQgDMhd31h9kDHeAnp",
  "key19": "2S73BUR5H5KSyoLaoTQ4Gc3txn2FzS8gffgxHERQ3WadSpH9UgbLgwrL9dBE4tcVgwujBG9X74p2pS1jwQxZqp9C",
  "key20": "453sjpCjTXNsZGRDvLsicdDvpwEcfhc5mEpckcCaaESg7istjHoeujQm36yHZxhVhdLcfaeUd55qUvU2FxVnF6fc",
  "key21": "5d4ZrcPjFjmy2qsKoQfhoM2iqHJAfcjhHxKjFygvRCiv177qpeiEtp1hkc6gJGHWy3BjCiG5KYkpKYrYhymWhfms",
  "key22": "5uu1cPxpx3nSiFdzubpd65YkCpBiLng2tMa9nuqjp4qsQRojhf5qzzksFuDf1UE3si9CuFsPFmgQw8GZzHccLcri",
  "key23": "2vNe2NtL8NKpv7eQtnUBnAkAqZU2r3MUFq9gThp94oC3ucxTdjhkRrZwxeukApj6TSLEcFsZU2AkqmECekVQ35Mj",
  "key24": "232uX9YzksKCajKC62fNpBXFedq7yyC1PtzBYPBvzh1j3heJbq7J7ur6KmhrM2CQtPNxYt2Fot7h4uVVoVkMpjTy",
  "key25": "2QhFrdy38xZEUqKRYZDeDv4aiFJb5KhMswcC7bnvVVcWAA4fcCHW9Dajn6Kqikh9KWHKTmCKJJmSv3yk3RzkxWma",
  "key26": "2zKdvAELacSbyUCmfjEXDcMZCyhoexPkhr49jUWAuoGHHigw2yDHZJBaLEbDCS71EYQqt7pJt1htU3ktT1gG3zFF",
  "key27": "4u8RZoTjKjTExL8q9eNbvsSgVMLSm5fD74XxQjrdNWomg12zTDEqmHvoxxtAbDN3QVhwRGcfkZRmwJg65EyFvQim",
  "key28": "9Yd7D9Kv74SCFQt9bj29EyhgTvhS5BbXq7Wtj6raVZCxdwzfRRDjJ15JFgXbDoEVi9V1dzpPkU8TyrwjrrEoeYx",
  "key29": "5e1FrzknxkMvpw8ssvyi3XRF6iZpaHteqRpFokTGJbVtzh1NpmCdzR8DRAvKgAEXdQtbFAJGXvVHKbSkdshcoMoU",
  "key30": "33aF2LpKtuV2KkJe8y2ZJN8KCvfqKQmfpKF2cUT9rKTTZHNSAFAvVdp3c955nrDUSMLqGthcS1khSChHMeDEYg2T",
  "key31": "2TTBbWbrTL9wtcMqGUzbGaFJFhkGsJfxSsL6em4GzHYzZQb7RzsGTfkQDtD3rtoAMCetFiCJYeajqV3hE7xSELzt",
  "key32": "J9PbEiommLctVxTxekXNKZtsRNjLNmM5aS8WpCTw6MCe2LNbDjdWx58fUtLDHDGdRkyQUFRKsJr82pDYRNNpUiT",
  "key33": "RnQVQYiEh249bNPGdUWqGY1GNgPxqANMr4Sbcf1LavSBdFvmJ6xbWgkQMLfUBoQZKXbYioWzZnaqL9g8M2jVdqm",
  "key34": "4dsncfmk5mhLJMcUpqmp2teWVuRmWbf8brmR5bGgVxm8w3amxCSgHBNw6n58BSeev1gq6aXNBFDXuZdThNjPSP9i",
  "key35": "3yKJyUkDhBbvjhjH3qV1wxGet36vrquE5Pvrty2m5WtDEuZeDvQnamRRHyZPQSbrTjs9v2gkD4i2roxqu2mhnxQM",
  "key36": "5xPdTZuTRVGHLYbFZn3mLhV2cQkmiwNUEUfAEexkiUyCjN84Ad2T9icEXsaSrQVNyhjpMhEE8Pc7gLuThEma3pzp",
  "key37": "5icukfvrW29QQeknCb7N5pAet1E2AqnMFcDAvi2gPHbpTeEjXqniD2As2M2mTBuud8R51zpZQR8cSsVTwKA3JZc",
  "key38": "5G9WEGR4gBr3qygi5WHz7j94GHeLhevtvAnWTgJzP4FFPwPFrgvGZ3kK4LXSk2X8jkSHXshzZddKBaAjY92scp1i",
  "key39": "2JZmMCDQNNUZi5ya77mxz2QHbNWJk3svxGDVHJ7tgWpkXGfjG3HhhWidAgKBXp4nfnQGTk362RvTjKSa6egthBtz",
  "key40": "dTcSh83apbZmW55YHBB9myg7H56XXAWbpWGRd1a2514wY4WLGC5TFyyadbfPhGLciRL4oX7Km3TMksHr8uUy3F8",
  "key41": "5o9MguLR57CedHoXrt7acYmoPYRtpPR9PDVFGTPJkoQNtTnVSAEF3Jw2GxMuWRzLQB2eCKcMeqYPpr7UkgpTVAro",
  "key42": "5RypEekvPRr5e6Fip66Hu8XZtnGm8Tuh44DTqQNdmMziqNrBF5edkfBwZMmbELZ9R3vCXyyk3PYaZGPkgxgnVze7",
  "key43": "27L4HEhpLwEyxwjtm494CBfET5tnTbijD5H6zUSj3GmoAnU5WkVt4NqFqZX3VLQuShz7CdpAgEkFiLNMA6xDGMSa",
  "key44": "6a2x4w7ok2qjSf1tHUfYQw6kRwVbGH1uYxA5sNVKpoXz5gxoMYmGu927gh7rBUcEzdxSW1jSL94SdxmuMnup1sP",
  "key45": "5Do81GYVV954piHEKBoTrAehxWjedAYW88YxyhxYX4Q3m9BVdYunLry6jCKCC8Fa4HCxcihuxrjREqPybtgZPYVh",
  "key46": "2r8D8KtgV9w2SiHybyHh8hiYjCiGkWTfUG6euCMxhexAvgRB5iLKiZv2HbgtfBe4rk4fSf6Eo5o9hJnjbd1vTX1V"
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
