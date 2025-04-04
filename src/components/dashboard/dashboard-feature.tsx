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
    "3rCEoYJf5gibA3zZPfrWMKw1iktminowQYYZAsVotBzANW2ciwPi6SMTbopkNXA5GSZjVaJmKoLt2x12n1JTcfgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCVQvNafaadH6UPtnKbfWKHGEqpZwwgJ6ksFuf3CJNocb4zh164TpUe3No6hr62n51KfUUVoiVyupT6YSarrQzR",
  "key1": "2CvQov4Jwd1W993sy9kncMqouvAgLK6g2maLGdXSDaEk5TBmeoLzxJHJwByA8TArrL4NTfR5ejHtG58T9NuAyXYi",
  "key2": "CRLXgkgSWvhT25FXpvgd9euUZ3tToB5HJcDjWZ6TagBWPBqkHPfBz6m9ft8snqpAt7JVF3ZLNXHkC4BnBmFBzm1",
  "key3": "XErwSNVMGzFMohYRoiEF8JWuqXHB5rPojnD49qpdL2mQ3hFFeTr5pzF7wSbxdJj6gpKHwXPx4ZTwc7BmAsQe17Z",
  "key4": "5PYsgi22ssJzBTxDAfkaM1qeyE5qmUvLdRpVpys4uzNadbTVDVMMLoVUGEtVeick2wopSV9v8TRkmVVaWf29tS92",
  "key5": "5S9pNXWEVGExaCJaAVARUovg22DagtgSGYG68XQUcZhqWfsUYZgCXdmiHa8neS7x7kijQpNGF8BkQ7FjrS12bqmT",
  "key6": "3XT6tGfZ7397fqy2HFobU9oeLEztFxy5ucd9w2TdM3fd2x9Fdn822pQkH6Rzx4YgNe83Ta7G6bgqg44casztgBNS",
  "key7": "TjHSbYVovog71YW8jh3mY2tjgQKW6DK7xLDuaMArZvy938sHRozReMxbTcZryrBz1zwUzKzqNLeLUVpE5VRzZLN",
  "key8": "4ZUUYu4hAV4KKKey7YwKsPSv83pZmDxwJBDHDcRmGmQE4xLxNvCc9EspFsanCWpiVABkcY8HE6bgwoK3fXyGFb8d",
  "key9": "vdpcqVjsajG1Vj48yXdYxLfBGpw8Dx4t62c84tyyWSeu37Wjsvi9ZmnDe7q4XaZ7vt8gmQctwhxacg2ujuBMUU6",
  "key10": "HCriaUj74U1S9AAicLPLzUUVpkpZJUtTKpuTskG9jbfhTUJvNJqab6fs9h6ainXJvF6227jRm6bQnCaEzBF3BgT",
  "key11": "2hhnievqUCSpyFdaszmBMQdWgjENweQbkjH4PRU1QxU8wH6imRnFDYaEyfv4VZBinCnUTPDMQc7PqdhHxjYyhYEE",
  "key12": "5YdeRRUmRcJ3qQe9RPrHfj747XzHS987jukFfeo7LJ7RGfXyWMvCHk3aCAc4yDNxNQU2D2uGoV84A7WxGUMwTKFH",
  "key13": "459Enuk6m9hvyDms8cqiFq9S4FiNTfpHHrhfb5cg98wLnwE9QPC2gLjtrBHBWGxyVAx9UiSnJxdBkUpKxMx1a7kp",
  "key14": "Q9e1aS8DrgaYodqJH3iHkfFzH8NrZs9ZbP5pipriDm4TGf5TUweYfBeCnSnXaLPhiQJk2e9YVkguuJXP9gQuf8b",
  "key15": "3b8y6Br25ny8ZmKSLJcSwR63srKm7NcZq33Scb8bKLB6B7koTFcW9rf1gGg84rD3uVLLVqbWhSRuXEjYuPiiFwc3",
  "key16": "5EmsnLwSCSDrv5fbwkk6fDWwiufSNdNWxbtXoVhCPAukbK7JVyi4BWBWu9AzQsQWuRhmGNqbcP8X1k8fW96LhdFS",
  "key17": "65UMcenPxs7NKXUCxzQSf19oo8f1aK6XakuHGY8CSiRiKk48oHaozsj1GWei4i31no2Hd9jjh943uaJGHW7zX8sA",
  "key18": "4BSJAjURKs1f7U6kD7Me5eD9JPsZ8m4ty4v8Qz2uNEygZ34rxEawRJGQyHWA8DvijCRFwUPSqJbj4it6WmdfwNF7",
  "key19": "3riENjC5QLYzUuGdkyLz6NgYyXjUdRHndfohExuMv5Lnzi8sxTM95HPmPkjUpeDLrhJwTGGNiqZZ5zfQY2muTPwz",
  "key20": "4PZugFah3mpy5q6xkeMikXYhA8M3cRbPQPFBaAAQMoAhUTcNSkgtpeDCXGPnGuKesvAWnBGxrWkSnJPKdiCXEzaG",
  "key21": "5j7AzLVXvg67XUdDiLrdsn3egYTJwLnr9Ctgc1Wxqwph8DGN9BxXMvUwAUkhKft61pY1i8ATwSrbBgisKKZ7e198",
  "key22": "2A3qNG1ctEDzNEoTdEzMoMECK4a7RrAZK7DcwuWZJmTAgAKdNTzEPRaribqhRqd8RM94okeeaWu2w7p6wTfMKDbZ",
  "key23": "39LbL8PeKFmQVoxstcKE3BW5ohroMDdCxRKsF3pyQx1WidhwUZMJunSc3gNQy3iRsrCnP5dzEELmQLHL2cdjwXTo",
  "key24": "4WGACLC21xV6dozNCTGaNa4gJsuTYY77h6FKFk2BmehFqwr5iHcVSzAgn23qQ6o6HKHFt6AnsTf2pDJU8asBWdKw",
  "key25": "gtxJWUgtx3Zpmy9EVCn9QPqXnWHSFkYFsaBhEXB9dJAdx4iHBPZCSs98VYvCFVvzAXaFZjEf2MH2R7nYv7szLSM",
  "key26": "3DYKUDwmLmXWBxH4FGij5pE1nAmjta77SCtvDybtEyYTHT7s3vBnrTqsyBdicAYMYBv4A2VSXECpYTPcwaSx4xHX",
  "key27": "2x1ftde2xg6dVuMVbLQji2wingoPXdWkfBxoPchf48BKbzD8Pwcm1iPypDAHykHuL9ujdiqT3J2N5wZNVqtLnvt",
  "key28": "28BfmL5wJ5SUY3dLFTy6anEsvsFn31yL1gVtgAJvwSy1nEcXJCQnoKkb6yBwPYnmaUB4Acr2x1UAYmFC71nwsHoT",
  "key29": "2XUfdyBuSLsf4K3aygmwucozxmvohCpjjeY7qSXWQ789H3HHiRxnzh2ptBckh3xMv3si1QoCGbPV9Usb3BB7fdie",
  "key30": "2GBrSYwc6rvDq2rgKTis5xddKQeZS4mMroV3YvittSV7DDivHyC6zm6YfytWr5Ec9UuxBRktJHskURjpasqbctrn",
  "key31": "62ebDJHo6aWB75AkKQwcusGiBHB39xBiPCcWm2vna4yiew9ezRGxwmJEf6bVqxqc2KVMzTnFFAuG6JZAWvM9XDMx",
  "key32": "2nyQWBED8FhkrEPY8dqwhZK5UepznNzPxZZgvmR4dk9AbmhXk6QSss9b3JZbhwwnR4t9aYTYH2gNvtV89hvcUEce",
  "key33": "4ZXh2uMeNoyUnpDSKA2P7hZTjaMxNFuaRvycsSAidN1oeFYpwF24iyxoqyiS3qQgU4ySU4iAqYZ91m5Wd4LPZCaD",
  "key34": "3eF6D52RKw7hJYfaeLAsSRYZHyVe7Bu1wdGga3H2YhLNqP2N61WKVDvryax9FuMYkbCJggYoYZKnTxExw7bL67Pn",
  "key35": "5kmTotU33G9sisPGBSk1pKXbFYv6ZVHhgKb4nMDXyWMsZuHq1UbdvJYb7ZWTSwxmuyqxNt2Eh43HBSbAnsge7EM2",
  "key36": "GBTnkbfHcZtzAhPw4Bt3UnMc9oNDiZhRsGYePtxpyV2je9qeS5E2L1SsyX2iUC7WsaHjjFSP82U2N48vCpp4HJh",
  "key37": "4pZK75adLzTqsmBUqHfpiMaLfW2ARodLgzfY6N11LKGnsaa1ahug9cEMdXE4JdsBrdFm9MJ4bM1woXkpErM9bHSR",
  "key38": "5Adf3Y8de9grFXgCsGFytNxDAGLpGDVLRN5kXPMxC3HzEhjJzDZhwaaDKWBtQcg1ZSM1GZLuGRf5T3WVcRRCFYwt",
  "key39": "2gkmCnCZZGoXzhkSSKtskYFkwVMbce829qrmytju8cQdesiDVb4FHm1C3irtiA8RHej2z83LgJ3g4GBzHQbGyMTW",
  "key40": "52aNNtWoEduaWtGgUh25UU2GAjCRX1WzWrCXnH1u1mEN8fRKm3YXWRUUcbjdumfQXvyAniyEAHuWGeAoe8CoJVZs",
  "key41": "Fh8MP7iDMADvphwsjRsASozoyFQcnaZ8t18NtUE8HSKRA8z6rxqfkH383mZKbJSRFFUW42eRNvzvD87Gr8LrAVJ",
  "key42": "NXV5oPstjp2HUwQmcHKovqF1DN8ZeDCAFYhaYFVqxhnRsxJuegQT4fQSJtTPVWHwKy5fyZJ3KGL3Sisnop1xo8L"
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
