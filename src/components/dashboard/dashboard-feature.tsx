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
    "SHqzdiwZstQVPnXTKP2dkooX8F8bGf8mEmjx9cbUTCrG9AXuBKLJPvb1nCLNzhWojCJAHMQcCMXMFyPkyFNW92p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58H95Q3wnDCCaWEjRunsrso5iTskRhczseQBGkiNdp2jvuH8kfj1esPLMLwtc3apveDmrhKVnGqtU9QMr2X7Rtbg",
  "key1": "3NDwV5xmWPbNTtpBYFMLoLWZ1WzPW2FZpyzdVBEQF2yw8Kmukp6oFrLcF5aSikQ3MXQB6GHafxmMvr8kruiCe2zF",
  "key2": "5TskUsVYuEYRqnLbnD2DZu9Pcp2Q69GbvTm9HSDAenHkpqqoz92zvTA2r6PBBVjtQhArKSiXotcBJnNATTkQaf4V",
  "key3": "5E1Uy8f9MnznGShpZTMY5uUuFacDrLF222Nrr41LGjbEWDkneK3DX3x8P1jH6XLVas6MWf6dmBn9pzGyYo96vz5v",
  "key4": "2DKMrfzJQKJt6tfgP8vBc6RoAReNuZ6vcUKpTzjDzptwecQsb3fKAFAZgPLmCbbeCxrLy6HZPBmVwMA3ieGexF9a",
  "key5": "4whcVfUnNSBQmBw7PVK8ZJETTd5bUuKVwW4u8FVcwAwAVXTLLaja3EQeceMZ9HxNKeWhp2jbVb8uyDzsJuxc81BK",
  "key6": "2c8S5ks4sUjeUMopWVHLguuUSEJjUNVBbQQ9NyxZhWA3mJEm6hRweURXdnk34zRfzRhg6rnW9xcFy2Ut8ofwoTaf",
  "key7": "QGNFeRahhByaKXhqbtftNiaYRTsHKs5isyygaqqcE6mvepeW9gruutLfGVMypFi5jBjyi6xEGD9ukHy7osGqkyH",
  "key8": "2Q7yEB42Kj43A8wwFiwyHNWL2ChuAufzczR8pEymoc4gf3qXHuPb4iZgSRarV6stGBjJmpWejiBNMxfHVteoAyQi",
  "key9": "67SribepYYua5ebDWeWQk6xHJ41Na3GNPVykpoS8PFuTjUTgCoKP85gZAaMdeEHXbwf1nEEGRZ1WNR66ca6m4Kn8",
  "key10": "2ZGydfrdD4aKwzBwQsv3NeiFtKeUH9FziiYWQp5iGaxfrgw1rMLr8qKhudAMTSbm8WWyTPH3RKBqJZ8pVH3nwKnP",
  "key11": "43oz7Wv3eVTLQ7wChp6oY2cyAjw9cMnq6s8KaEG39Ek4qJ2BvorhXVGcjbyMwYWu6SF1FkM2259JsGhdgadMKbSa",
  "key12": "4orCS6DwfiKQkTszoMALSFmxVYMAcCrXt5WKf5qaqqNhTakfgSvSVE7RjVdqiW3xfsdGM4PLvgFAjVJxUNgoc2KX",
  "key13": "5TVZ7dBTzsdRegnAToiL6wiefUQJUhC4qfxvkaoUEB9nHFd9B7Js6WHqZ8wsU6puQmcDmZ7MW7XdgmiUyuEn3Ks4",
  "key14": "22k5hJ6BM5eApYuWVnyif3MuMickU7kYuGG2bREfjQg5KZ1dEtxTd3kjreahdX53aNSVXmNBhXXkzf14HuHnfwC4",
  "key15": "2uRT1TAHoWixqaDchAir6fx8vX8H3NnhkkAgiUw2BpHHN5bfb3Kud15kqXUh1uSqXsfb7T5W9EkmionwaY3oaEJM",
  "key16": "4h2esNrikvnuz4SaoFKKreAcQa89zyYi5QCg8DZA9Uo7TCFrZzdw2F5xMdyRModhqqomdbBCrw7mLdkgR6DQJDEK",
  "key17": "5qstQWyEHbLYLby8ZabiS6WyyRRCuKkwmVG2CXj5QsowTHPPpRMUC1jLdSmXuHeLvScGoo8gWjxc64skPi8Mhah6",
  "key18": "2d25Ptsc3rDHK2n8SmYUyp1TUht1v42T7caqsWRxcsddtpAWFxZvAbEdoSU1peSYXQcXxWPNVDsHrLXNKJHq2tYL",
  "key19": "XN24x68MWKMwhu84h1TcaHqubNU5n6jTEiuCWshiGU7WjDGKBScQ58i9VdoHFCAZHo1TySkrb9cLYTv34JpBYbL",
  "key20": "5NZo4NAHq6NrphHHcNjYhdkagNDtRWb1YR7rN8fDWsJRi24j1S9Byap75eFghfDFq9XCcJaABJdyG8SfwP49bp3y",
  "key21": "teyKeS3ta2TqszQmDjtatBWtJDehiQoZdeHtmb1Dvy8rigzZHsDzCDJZ4dyVf19tWkPr7bWQ5qnXESw19eJ2RcX",
  "key22": "3K3FratVhgU6MKXuCJ7g1Zida5XWR9toPjmYLwWffwPRnPjjr2RFmSfyiRbcgfPAqyWgr4EDkjVYYR964vzPQ5T3",
  "key23": "4eRV4AqyMe6FiR9VBxak5LoW4SYr8VbRHbQkda4g8B9DebCy5V7BhdATF2aCY1DU1AWxMJYLqKwhXBgaXY71hxGr",
  "key24": "3p9PFUPuxpi815d6vBQB1GrhHrusipRyh5xjt6Xna6DwNZwpKcyuKPxF7nwHfAv2PNJ8o2djwQWgeTgDiRfGwCiC",
  "key25": "rMEfHJi934oGUwgesmhJebkKFD2Vhe68UbLxMUQDMKXfCvnNoT1sSdZJfnVZN23gqgyjXMKQqSGexVeG6RJYvUE",
  "key26": "514a4UGLsDS2cDRVynnwHq3SHCHf3wyLt4c15qEEStbGeADUeeuYke5sN5pf9RYfMD8AbC3c7fzvCQRFVZ83RJjN",
  "key27": "vdXAYJLRa2aeNA1Lz1mgbV54nvG4L8H1wubgKnPFqeJtagHhtKERLEfx3RC94Q4R8abXPmZEwSJEa2ZnBoMoN4D",
  "key28": "4muXVYJwFAhJ3mpapf3DhoDCirAmdw3rZPM6UcZRbFD3Gtebs86ALYQguLtkinYU44fucPkDYnXj56VJwTBfNXcu",
  "key29": "3Rnkk1bUNPaA2zU5Yn6jkv2oEDMXUD1m7UQMcZ5ehaq5vm7n8XPtuzK9DPgrmSxm9MaY6Q9oKAeCCDkPEQJuHUXZ",
  "key30": "5AwneN9Hyzqsb39uNnzkJJA4cCXK7LdMVUFusxikSd6L9pyJVcw93pzks6aPuTojQ5Gk4HWLa15hbaae8FCS5o4m",
  "key31": "XwBatLaUmyAeDf2gZMcU1McC9wAVykuU9re5AU8qj6HHs33Sr6vxMVX5xGxAcjckmi1aF58NqqKVQZL9PEowEw7",
  "key32": "4DzPQUaad1xg4g8LRSG4FeoKLVyU6jEvT42EYuM1bQ5n4PuRMkpZBKTAfpcgwxhkMozbeHATH1WwZcAhaNJHisJB",
  "key33": "2hiR4CPCgPcC5xZYt3iKgfB15be8Qjuef9Hti1GmbpHN8JcuKTeyCngjkVxx5KeuAZ1HvjQCoVhcYnWbWjkj5P3Y",
  "key34": "4SsWEA3fXFhmfQRUUAHKdF77VFV6XUirsrFpyaRcjRABBxBhrHw5ARq2b6rsfg3Ksv8f7rw1p8dn8syaBzokFXXJ",
  "key35": "4BzNbG1J8hDkY6Mrf8VskNyo9yQgL3aghFzNHExqAnBrVrBbLZYZW3J2zgTpozAc9L3zCivNGEUAMp3fAoZKjjEH",
  "key36": "3xxx2CspuHCsVbvSZv1J3ep86ahzheBU7UgaTx7YJLauNrtPb9AW4deWQ6rgpHm59HJRLqfgaE1DWK64FqDYnho1",
  "key37": "41Jz1dJEYcqbXDpNRj699jqH3mhmiFt11GDRbhiUuiD77zu78DjuJmrwfwEX8MNWRZKZfEE2cMtrcra9jB3vNf7V"
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
