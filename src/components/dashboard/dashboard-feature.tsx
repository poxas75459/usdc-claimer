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
    "46ZYNFF8hog7L2AfnQ2qF9P4aewHiN3Pq9CstBTwk5RtBGGjxN9REDtVPejAtpsKQKug9bkprUGiLobXLXpCtSVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKojzdCBbbVQ6j4x6pS9LPQhDBTHTN3JzkPtyV5SYdAABbZSZYkCHaYrnz1qJq5pxF4VVaXroMHGm4sVANGU4x6",
  "key1": "4EP1KmY7Cro3qnXM3iEgxCiVs3una333QtCmQXEaYb1eMVML34w6d6sNBi1F6hFC31cSJzSdhotcXU1qN5YWuPfo",
  "key2": "2ZAUh3p6ue3XRwU2ozTqN2EjvbxYbLBxwzaysVw5SZdm4kFuY4DHCw2giyL1sPbzra41MW8VGVEBiBubmp6jFHbc",
  "key3": "kk9GvRVGFK1ppVwfRQnrYxt6ZGTgLtFoffdKrHYoMKcZNBPmdZQU2x8MMcKfWBaTdNAibmZUfgkTcPYjnSAePw2",
  "key4": "3epFckPmxEwSqiUDoCdBjtRiF319vP67NdKZbjWb5i3KybdFaxyWq3jJWiiqER6D82wkg5umX9aS24eRf9NiwMfx",
  "key5": "4f4zotmhEvZf2MGynFsR93VjW4TiXwomPwmFdJQTrbtbZtdPnv7bVzrBrU2dZKeeD6CE5FKfkL6btKh5GDEGt1zC",
  "key6": "H8N1Tk2uroqmAUpMwTqzrZZbhLVyMtUB9Zv7x3VYmU1XnupPekR173DjbFQePy137bgsJ1XHqKDrQBPYiVHJQ7h",
  "key7": "48iuYdPbpDH3B1i6BYEPpzsGCzSgCqg5sQFxEHPWpDp2pnfcWE5ukq1HTQkKqExqQqpgHoCXjHh4CtCoq9YmZpdX",
  "key8": "2Xn5roSJmTgbyaTZcWtwXYoDd9JGbUFruFQUerovimmruBMnj8jSausCiC7A3ARfgQR6YgWR1qV6VeYK1f1iSbLP",
  "key9": "5F8razUcGDM5e3AyKJ9ASvLeAWbjZE3BuHrvFz49amzgk2tsDsfdWEpedjwDpYt2DMZiTqzTjSUAbd8BZWyU2Jn1",
  "key10": "2k8B5MLnfuyTaCxm4o4EbfNSTrsPAr4CKWDmVVtVbPA4yotCaNWc7rgeD5WjaMxuTyLfP6ZLnp1hBqsaYycgFgHP",
  "key11": "2yHd3ug4Pmr6o91qMs53w26Z8uQCviXwdb7TMoAqL2vgdoXYYqiAjiHLLa9S8SxsdMk46p7u3pDBWqb45TGJw52v",
  "key12": "2Wmj4AV4CuXBqqzNJnRj5atmfadwtzNA2bmtePNQ18G8tYrzcqCJE1MsvLe1vVfTp654jmzWrX4dNBQusNb65fbV",
  "key13": "5GDX4AHzHyEvQ5kwkXuqbMN41LRQd9sPhhD7gEMk9aRyNTQHq4ro7QmhAU6nZu1PpFFWmn1Xv1Du2SJYCk4o18ZE",
  "key14": "2KtHGCjPSRRkyD4avfw2GFED4shSZiryNbN1yx3UUw3wBErdQZizFBgDQJaqKTQDyXWQ4hAv8VCeDEFPYjfwhybZ",
  "key15": "2jDhfPtgGsPxV9yF1SDwaMabXG3LwmrRv487eLWhULAoPRc7c5PCuJcjg6XsCmvJsQFnQQ9JZR2c7LNUEunKsFFw",
  "key16": "5nkqh9Q5kxJwRJ5kUf8j1qPSg3uWh9UZwa9hu8mdLvXVa3e4T87uCCRmcBzbw1BBg9UKCwfc9go4MCtarizquTQf",
  "key17": "3rXEM5soq5UfyyneFzDMwcZR9pK99kDj3vB3B53AJq1SBTMxBjCTNY1Bii8Wa2L2qdapgxqGVsYFGg3GEQtBAHYF",
  "key18": "581BXmGBXBo6Uy3ZAaVvdVGFcviZyLnK3D6YjdQ1QwfVBSSqPRjeAuBe3LxaCiM6ebHRDLp1rmaVAhpLTG2uHnvM",
  "key19": "zE5m9PquFTc2jLinrtUfZFCq6h89mmSDqiFrxczDWLRTcVZLr3aXZoo6CXY7PGp1mRhnAUU7UhDT8bh4CxuxKTr",
  "key20": "5eNE55rZeKdhBLqMEZJU3p9NST81FMpycyVNpDFumemSmunTB1V3tDhbhZR5xbaN3fxLDD5Az1zpu9921Godwtjb",
  "key21": "63zx3GT6BJVMdwsZ8zemQBNJaAnHPDJnNQwvhQ22Hen5zqChMsuq1YFabf75aBwPP6LeQcdV1NCecv7zqCrCzfmW",
  "key22": "1q4YJRz6N8kEvRaVw83J4kYbMSFGA3QUQCWz4SaRX33Sag3tKS6xrqtHmDepiMcdWTogKunzTkWTYZb2ax5Bfip",
  "key23": "4nuKuqHvPGqk6gCH4jk7gYPiY2nsBpBNRZRCKiYYhS21a8h2vq2UuCrA7LGveBcjqEfuj3XGkfc2WyjQSgXDcVub",
  "key24": "4zGCxDe3ooQrV1m9spnmPAX9E7Gw5aa4faqH5Y8UXf7Hk6vCE7iRgDAkQZXKGAaKRWjxRzoRVYxhaMWxsGHZq8jF",
  "key25": "3MXzDKBxdNsybWiN2BN3zLjosoresjwQ6mLhfZhL6V4PKo1QTBM1KQvMRHgWGNQK2GhtBLSfKuhNr9oaLQvRiQdR",
  "key26": "2hAVLSEXynN9QLMpauP6YEP2bnwjVeZt1ZyU9MD5JdWm1RDHenCi1DrttAvRuyRxc7RL8PUAALGyKNHcVeDNq59L",
  "key27": "3hmFQQ2YqpZwDi8sc4hVvzHfHMCNP93PdcA5zyvNXAcNtN9BByp4vWk7L3PkR4A1dpHgAqpsxtaXLfCvdWAGtKSh",
  "key28": "2LSHA8D6xvP43WVsi8KdJTq35uHJZuNH9jsuZmMyPfNHziKnwJAw5L9718NrQ7BJCuwzXzJSGvGxhhRDBAJiEnj9",
  "key29": "4HsUHZDze1J4PLPCD2duixPrfEZF9TSKG7FY92HP67uTHWFgRki8LxgCmqJG9ZZ5T7McWzrHfCJMyVECxTKwuTd6",
  "key30": "3Mdq5g3EuU3E8iW2vGsyhKRKZr91uCd1uujZtaUuj94jLJLxGWeok9QtC5UhGPYbG9zz8v37B3dLFYTNRSZynn6e",
  "key31": "5QgHBrm7TrzjZ7UF3ryDqY3CrT7XKEzY189SMps7tRxEmFNwoz5EQAWshRx3RFFv9Ef5twAhsL3TFJWtJmsa3bCE",
  "key32": "31jTgfu5xFLSmZEXdz7fg8xWqCPoFMQBSg4p92tHyzqYVeMChx6HEGaTP9BdRVjbbJozKyQPikjU7TRwanrEr2ir",
  "key33": "4Z9SzxP2RzFgz61xi3z3kd32oyYLdmy8McdyW5XY19mv7Jp4WBgtJAsVtpBzBvW5KMaot29WC9ptgsg1nobbEy2a",
  "key34": "sY8xSEoofYkSCxebv2sFRtoQfQGjdfPrZ6UZ2fYton8f336uxYfoePey9uZku54GaDpc8FRJHyTxwPALrVuUfuf",
  "key35": "5ExhzYEqZHdn3wfAvb7xa2eQwMR7u3FML5b1XaHmcECCpHhXEdrq4xaHecgSx2nyx77oSQKYjES6XvW2VXfG52y6",
  "key36": "21bGed4xXLgAe7KpNzKirgCgD1NEeKf5DKziy1JorngtsAXoNTSEFG5GKnvPym31vKuoH422rCg7sQNrSZGRBMAY",
  "key37": "2spECAP5Wo3s5q7KYDhoemxWzjRmZHhKMevaZFZT5e9W9Afb2b7ks2EcgoyiBbksqM83TEuZsez3LrFo6fD73ifh",
  "key38": "5hbx8FSQYbGaexNnDQAnckyBpMymPKVaRbUydMtYi69zYfANuEALztSWA28HbAFGmRgnKXmWK6bcGq8VKcNSraU7",
  "key39": "35DRHZAkB5PCVH9sWqjntAK24W1MGvtbUZSb3cr1xRXoQsRHar5RbesH2CojYDpNVgU1XLDKMPaW8jJQ4hTefoLD",
  "key40": "Ztm5UXVZnaJMeDYmhgyGgQg6QEKYLKzgFvBvMkjwP1L4vdshjhpfTNbBaRAjpiBHYxScD42dg4uxr5hYWfeSf3X",
  "key41": "2MsfyWHTo9oxijM52QfDyGCgWtwhcGNFj4qfmQLMqAxEiVZMa2JGtfVjTJCvq3wTT21D47scHW28fheNsczMDPgU",
  "key42": "3Ht4XqVs2c8hZ62Dz8wMKwQFevqma9F9gSyXgk9shQ5uQWeYaqLchatt9AFxz6sHXe9TmGa3sc8MfEopmGCrypc7",
  "key43": "553akHtJSC225eV17ogTgxXrMwQsxnkhwnTuqgvDpteditLd4dAtskd9XC4WTTmWscbRBUfCYQ5sdi19mt8uEXPk",
  "key44": "2ytvJccYGVoKxTDiJvwgE1QMBLuZDnYbtcAqHp7A5qTcoDT4GDGdrtnVvdJgcpevREKiuciqh1a8rixvTzKgwKwF",
  "key45": "2U85c1uHR3voQvg5JbgbKLLDPqMEXq52PiS9wrrXq4mHCA7VRuy4pQTfEshNR37HbmnXZ82h2qa9eKAZL86CEuJ6",
  "key46": "35ToNrtQ3zANkZAUPckFUmWv7NF5NAVmihM8TtcHiX3EgPA3CdHtQJvdXPCHvBTRdrQfB8T2dhY3SyXt7E4T9Gm9",
  "key47": "5XkWsMibDkcMWEtmAzJsFXvfHwbbQRWMbatN1wxycwD5Lz3iomBDYLLkKTrHikSw8eNUVbvWhQt3thRQnPwUXjJt",
  "key48": "4AtFZdAXSfWHPHzmBwgEsniY6Bb4EuUTF9yFm37FhadvnxUbEuXLUN23e297mzhH7mcgYvrvjRvK8PbJU3x8FWc2",
  "key49": "apNma4ys3DpTyEY56Zj1YznuGqeh6PaCQtMwHEPpTFJyEg1kRKs7moGpekhT1HsxNRYd9wfny7vB71yqXzfZeVb"
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
