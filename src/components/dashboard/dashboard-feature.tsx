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
    "3hfp7yuKzGcEh3NuJzvJAMikFrvrWJbzofVsrhBrzz46D9NpRPF4oWXYM48myA5MMgFC9zkxm7UWA1XnXN3nfotg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VyNytZDJD8nJz14YjVfCCjnB8p2ebkqxsfujBTesJ1xBfZx4DPjYX72y3RjR68ZjtWzia8Fiy6iWVenCEe1yHiU",
  "key1": "4Auusve9NTq8KY5ca1tbRmp5yDqRrbao4y2WhgVqRpPKGHeS9fct98BMgJE4iXgeYWuewxaw62biKRbT6gbSTee1",
  "key2": "4JyBDdi8zRKyKFweMefveoLhR2cvRYKW3RtdAYZB1ABwuS2WLZKxqQYWvj4YQjGxVfHoDFuNvRqGRDPKbMLvHyB2",
  "key3": "5vbecXvHHP7sW9ZRpejukqMv4W3sX9QZVXshmQAN7PYBFVLYXht6CGSdHDgUFNavqdhL6RZS6rtZSqWeU2L2iYqU",
  "key4": "5foNh6V7F4pvLjWFAhnCKnmKewQzmjqRGfoAqXot8YfmMbRtsKng3oV3VfPkmE77quGBrcBybFZVE9KdBadrqHZa",
  "key5": "mCJd94CBDn1Nb8mhpbK6itLsAb8NaMQY8L6HKNLtsN1r2EzTrhJVaHpgCtAJcMRt4p3q1t1KM29r8D5L5PeckHR",
  "key6": "3sTdAQAj5Y25FFLpCTNs6qQ3iLoy6vDsMi83oagPahr5KxZvBijBXs24RwiKCsuXjQHPzsUNamXdF3CEfq3exKbi",
  "key7": "UuNELjA1HVDus7i6raLMVJVYTRcHuSU9uYWwAwSDWFmEQSc295KVk3HxyShPRyYwtUUr3zfUpfiWSfxSPtvSptP",
  "key8": "32Ax1goCDcXH9w3uR8sREByjHSX4LKVEP6n7635Atv2atvKByHqynFo6TgToGctmp24XjET8DVrnVz8pWvRxcbyF",
  "key9": "3V2C1eVsLcedTtsoEAPKWZzKjWDmqV29vNkViEPGwp8cxBRsWMXpddcXNpSQUbnC9D52fJLvcBXEHad82n8aR6nL",
  "key10": "4r3umGM6Dua1oWhusJHGxVmmsDucM3wrHrFphNvpEsmVFAWSzvBXFu6KoMb6wKVza8UBXsxVxD83rrK1aB3G8nLe",
  "key11": "446BAfihkx1xv8RjrH5Nc4UZMadKaqBqyMXTThPuzdq2Dnhey8DPYhsHQx7K7pdxWJUCVDHcnH61jYGRNmnCrZ1T",
  "key12": "6DH1rqjDnAoGDnysGhd9DrbqPZvsHbcKF3NnV5GwL8qPN1tJ89UEZoBneW2cFF5n5dyZs6LhYgqb47jkPL6eW6G",
  "key13": "4qE59C4ZKPEvvLzwuHGCUApn9Vm7pn99Tk7zJnRNUuYin7zBUdtBzDbz88w17682DXUNM55nCN7zpXyt3doh1mdn",
  "key14": "3j8E3FqqVvZ9VRKUzpDUFDZ8dZGgLdGvrAGEea7r1TuDooC66jhx7L9NcGidsPtsRcrsG2gcK6ybskAjCBHAtJfG",
  "key15": "LpLcfwScPKqwznZNZVihpwaLZdZs2au2Hvm9PJ6AwT3CQKtWdDTMaocvez2Cd2FeoWSn6igywNzi2kdVur2V2v8",
  "key16": "4Pqj64jeyQA7aoAPviB3DjvqcDXY52L9m48f5gYKX6y7hVEmsq6yTx4a2jBwZYSHihtpoYHZDwmvM2nW7Qvk16TH",
  "key17": "tnodmtgW1SDCiGJfzHypb9RvJdHnC7cwJFfaWJWyFff8eK3dt1wXcBSJgcqt9F39AcQA6s3M5bo42tq4tdb3iRx",
  "key18": "44o6Jo8VgzzmZWbzCuHu75jJAvvxLy3EYymxJ3G9ZxKYLdwZJJVLd8X5vcD2WfuX3XsEQ3W7xDtvnmm5k8RjkXg8",
  "key19": "2yVG35QzHp2unw7EcaJ8BCDzyMpiWzcD6icjekkERMU5vWj89pD3xT14C9bCaUV4KLufdfJA9xTwRP67xvnsc1cM",
  "key20": "5HuwPSn4bDinGVazVs9nC4PENYRVggWSZgdzoxuT5mFo4kkmfobN6DoQCyVNXHSkXXRwTcYJZmViSMga8baPySDu",
  "key21": "3zvrhjV8ew1hPrXHiAuevP21hF2LmmRdNoC8v3EiFja56tVFK39ne6JD4hJ8KFMHAMtHmcwKmHbNNvogimMSry7L",
  "key22": "4Bg6egYHZ2nWGyEj1CtJArNmsVYWho7bbYy6fFK3G4yif6U2KR7ZtCZYZ5TxeyYbbqqi6VKaXa7oHkR2yHeM3uCW",
  "key23": "3TfxeAhRHZKNJyjiHe2uzYEZ5WSjg7JoZTwLmgRhc2ZgkPwxmLucPjcYSu1NkipizQBVDspBS1pzuC3VEnXbUA74",
  "key24": "5eoNepGJJB9RQVjaWajpTbxG1ZKJBRqVTJkuuTfvNureXnp5cSz9q4kTyBPPr6qR46UHPYmXCUaKTWvZ4if8wwBZ",
  "key25": "5zCkqoQYVf7zwX3emF9MnRV6kfwSmd4xmhSowjQtWMkPE9eYkVSnneTCU9FrbcS7Lbhu3AQG2F4eVUDfYXwExXyE",
  "key26": "uuH2pr7f3KCL72AbiccEucUhbNUmCzmEMbGwhuXW2ZAbBKPoS3UKkAGmpkQzTkjoZvJZMK9pYJfypgXhT3XsKat",
  "key27": "qdfHQ1k5YA1CjLLuSVNThnmG85D3JEdFtWD576U5TiVk25mSUFZLa3tw9fzYLMyLPhGqhbNNtapVLeDfuKsrN2P",
  "key28": "2A9ppWCELfHvGjnGZwdpw84HZ5Zu6sFxsUW6M3kS31mzfQ8cB8AYye4KJ5YZx6Ss7Xe88w6ifW8F9kgHUuUXovWK",
  "key29": "3gpyMC7WhBTmouM2xeb1saKPcGoQjajeEXadAaSsCZK6CG2iJs6mvhMrxyHhpnpqWHiTe3aQ7NY1qf4v55b5UD3n",
  "key30": "5MdBj2TLtFYwQ6eFvRV2KSh85xKBJzp1TBvEMbiS8ArggXqhnuCAnFZMgbroF1C7pHudVvU7edtoWxyStJsQzz8W",
  "key31": "4QdBToheCJBVEqpEdm36crt9C1HCB9L9GWDTLCrTN4setreUrp5Hwoh4ffLDSviYcLYzmQ6qmeE1xFPgXEFaNsjp",
  "key32": "5y6JrvQ5L96pPgvdaKH8XDRtbqqQhz7vCsSnDXDmiwnZp7UM3AVptfVqpJ7cVhHreEhQh29uZqydvKiN5LsuwTXU",
  "key33": "2CYW7GEGBaixr33Pnm1yt5gY3ShK1TXYrKtjWPLw48UYohz3iEBJPScNzoocYbS2BKjYyN26UNnutgy1RpifzyxA",
  "key34": "5xuXAWn62nGa4PrasrKEyBS1FTaKxtPwWGaVEp6f2g3sSfYozmfKsrCA6GtYZbGyiobAVNFRQ15f42BFr3tMPt8k",
  "key35": "TjhH52WRY5zKDUrPNsMJpgKz95ffDcQjyuAD6Ki58oM6qAxQy4UPHYAnxWQkR4s3qb9Kr5aB6tBTwM9K9Qg3eTG",
  "key36": "MsTrQHpM7nRAMmwPtYtma1DR4RSMmyxkwbaeikGzkn4srX4sthVPPJTsSc1KzwYv1womSxYLCEqqFbsx95nVvm2",
  "key37": "5LmcVk5NwB3KYrGbwDrPS37ta9eqMnGZYCAq1fXVCnKSZBYnNa15bpCEcfKWEuqc3tZncX4PgH63gcWXEeTF1JQX",
  "key38": "2io3wY4vc9YbxsCNXpYLH1Rd3PuAVwwFvJXoK5EnkQfKGzjwyKsLMLZrrqALVDALgjyq1W5oT46aTm7QdkrjiU2E",
  "key39": "32yDHn16V9JqsFy2djwJdAtXP9WHa8SFBSHGrEJ8SSH9PS8mhivE1b6wRagiuvgHR6qe4axoPedeEWatnXF22V69"
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
