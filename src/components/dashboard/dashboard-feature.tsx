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
    "3i61gCzk3AYxA4c8ZeZsFqSiwrbbzLjpnooaod5ixDSmBnkMdZJMneDrrbkYgBNhFrzKapPXqbkqA2PLSYRBtis5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kcXj6mufnpvLR2qaYswhz3HfKEGdxbnfLH59ibV7vpdW4AkGifdVhqzJqMrRo1PzB4ti6TYwLQ1r1Lfj4mU9A5p",
  "key1": "4rEKoSznW6LbaGu7ixcqf6J3HkSaWAAPiMA8wg7shirKjYCdaXeaXHtEfrVFexvbA86R3TGQh7ng3Nvwmwim1k6Z",
  "key2": "2m4x5DqobQ1tRkSGqKemZapaDyJp2aKxyQzVuaUvVfdchniuJGC4MdmV499o7fbEJRGRpqEzv3XxNgRf35LtETc7",
  "key3": "4q3M74e3gY3SafMS17uprDJdcw5MkUUsoxympMoxuMFP5nQnmo8Qd5LrxU2rKWpCg9XcK1bRWByae1NWmQTBJ4HL",
  "key4": "3yFQU9k8GLGS3uisf59xeCVzkfVPd8tLsKZoyrec7DitPqTSZd3RyZb48r3xBPf73jhMidkPeR1Mg7TaHcCv93Wn",
  "key5": "4swpFPz976msRbYm1koVwkKLhn9PkDJSubTgzkz5pX2HyohYQ8wrW7118HxbKFjqLuWyT6f91EcX6FEEEnNAWjFq",
  "key6": "3wA4RcWQMGX2MqmkLzMzxnaCJktfsxFu98bbes7KkvAHeoNWpAbsuN75Bqmso5DqduKsnXa9b485Yv4ohUzzUm96",
  "key7": "3WFdT2ChxFP7ELYe37hgfQJicoo8jJXeVj8eNnhUSQojQkTPutwwe8Dj5Vcxh9iohEQ1SLrQPqLumRQbd63nEHbm",
  "key8": "3AFKfSufbaodWKMx5JEqyyQg18QkbnLY6bbtBu97171ePFWUQ6ubtrUUBbkWMU5GUtTUekhrYC9qbJKeT57Y8ryv",
  "key9": "2at1uibacpzScgdG2HvWY1LHr497p4i2da8NT1APUnY2xc9S5isfE7H4Wevm1EyHHTZULRhY68yH2kMNXdggCNQy",
  "key10": "5dK7pDgThcjkFFqcnvPYxCizpHMz1RDvnYJ3rrgTu6QSH7ucypR4pyArFwAi1ZumMJbk1zUuwW6YQMrm7EaWYXck",
  "key11": "5rZetidxQUZcuw7Vkn35vZrY69GN2jbeBPzWJS7sTeHA4jDwra49CMnx83Re2seykHmi16VhXx8kQNtW7D9PSj7v",
  "key12": "39MRB11793Rqmfbmqzxt7p6wTSbXaq7aKvfVfDCWGiuViDweVewkKBQuzwfPUKJftQfDcPH2qKzwb64FdzksEnBK",
  "key13": "5H2Q6J4fR7dGnA741hd639e4zCZGuHvrAZPiU6yikfPBp15XgatGpiFLtjy5sADRckboxEdV6yWeVqmThhJfnGzL",
  "key14": "5B15xib5npbko95Xk4W13zoozm2AJcoRviRWWBsdr7BVoV6EjFNwU2UJXfFQEm9hKrBE5iD6oMLX8rM7631gkeKE",
  "key15": "4FQqH1TqBs1x9xPnJRWSMdaztRvUjE53GoUoex1YiuHCdGDVnpH6BduhYeXiugUqFEuDobxnNDMgjt7vzm1h6uDe",
  "key16": "S49ZeJsB7tYpGPDd28F5e8veiyhtYgj1tzwaQRTVBah9XrZbRrrzoHmHf59YwvkztF2tQspV14Ydvzwep4yMgFi",
  "key17": "2fpdxQssidJ11VeCYQLRRoVxpzYVBbf2x2u9qwduKNp1YKaXpaKUw5bde6iYmdLitynpU7VXUn2o6u6sRRYWwGwW",
  "key18": "4zFbmS24zPt9gYcyLzwMCcpgPcoQRPL74xWReCAcWx8R5rHdERvm6dnyHbndtuxS419bS39aLfYX2uosHgEuSA8K",
  "key19": "31vdSZ3VZyV5Zivr6RopgspbYqbLjB53y7QD8iPNoWWHEZPgQYc9QTDgLvDRsAmmq3UTT4keTrrRUasoy52nfUjP",
  "key20": "5ani23mwcXkojV2iRucZrkKhcKnX646a8qBqWT1Cyn7HERGqLU7bsAV9xq9oHFGsP1efJsRixzHukFq7NDER43Wi",
  "key21": "5DuAaP1G6jK99VFFRSKmZ1Qr2UwBYgyXGpCdZWN3oz68TEHi92g3hSn6nKboxoUvic3ZuNsytgkY7Nkm92Tr8wv9",
  "key22": "47BqPEYBaJg2et7fgfeuHmk3GRssY84tZrRGhgqwvEfs6CRtywWtZSHWTzkTahJVNuWEEgPAQvh2MfBKN8gmZWBp",
  "key23": "5dc6QEqVFKD2hYn7VBpMJ6L67RSor397AZ2ka8dyPuZ1oNNPeps58xroZw6KF6rEF5hofzv4Hgje6XxwmYd5mkCj",
  "key24": "2jFPQK2YSnbnYvMuLRzJJAigB5o5wjA8CiCwFhcR456Twx7JkiTT6djJxCEYSMXYoDzHsTwxtmVpqFSrmzQ1EvqJ",
  "key25": "5QPzmSeBgcrPvrbWw8BEFZppLNFt4HjcWvkviVGJwqVeginE556GLPnaA7XoamroCRrDKLPHdD4TRnUuCiCng8ty",
  "key26": "Fc3WnAHaeBtL8EzQZBDPmnMxbzw3raeRBADDq7LnBNsakriVVUcAE6W9UhC7kXNusEgmjikJQS8K3b3rmcUzVZz",
  "key27": "5Ky5gHdSvHFyV5scMCDkWdLTXusRej9ZfdK5xyzTmWAKegKvLnsQ7gLo4cnUD2mSgUY3junhUoZ1Ac3i6V3AFUvG",
  "key28": "4ntWBNj432U7C85dtqUYaugnsemZqUsg6aWhGZrYqR85okovBYJqAN4SutL6navg6tyNoFzb27aiJ4enPEUfbFCF",
  "key29": "2b5B2AGfTD1EUjUpXtkHoqjqGu7gT5RKRtezVrsjL88FJ4MNWobHYrmrnmfw6dMcckVCUNFcKoQZr9SdFpAvWg5h",
  "key30": "33uMymJNKGN61jSJk4dHC8KGDN4cbcoGmdgUuZ5b1wAean21TQUv1hrrre8BqiT7xquWskhdfXvbc6G4ivha6vxw",
  "key31": "5RJtaoDhydpjE4V2YJAF4HjpfLbmVhnH4s8ZiHVxR9UJUmiFUfpmv844h4XvuXJMTb3bDPXbi7MrHejEdMspFW8p",
  "key32": "3vLxjnVAcyB7tMRBgR4RyZaTZTNxwk7fFUCFKbCishTVr9F6QFjdPJwk8w69k2z1gLxQeCJcPAacyjER55H1gNSD",
  "key33": "5E29huWjWSNmR627dbx12ApK8RenUxDYK4PaQraGtwV9qr3XBpN4Edg3KueCMrdyjEua6nk3AKzgvRyTtcJTBUVu",
  "key34": "4fs1pM1zYCxCohxyz5Q8QvMH5hYKWiPFmeMACFfVyb7Jm3VgnVwpSnxtwJZVqqgE9vAiCSq18UvPKhWsmsDkYzbd",
  "key35": "5s6Y36U1wC2a4oxuDSdT5DMt9LDG45xLdjAC27bCz1BrfVoW2ZeZJy5iMe6C53fohueyiDXCsT4V9yaL81u6jrXt",
  "key36": "4eQ1cPXhU9Qdiic4YCEdwsLdATQ8TKQ9LmiYj1ZRdzAenzv4q8X8pSenHhmPDn6uKq1QD6vQ9tb3SwsAF58Xi6d5",
  "key37": "5WEkxbS5EYd3Mf2E1aR5RCUAi66kaW88Dbask42NdttFbEEBPLRG9MRhVRBsRyHbfTvu373qgphKmLTwvJs9sthL",
  "key38": "r9TfTeqtGQTmmpVipmZZidBPzvQcHJwi8ZhZcKJkzHtRaJgwavNxBo7BKqrVtWnDVLbhd5WnumZXvVsr6jAmnZF",
  "key39": "4oxy5gzxqDpqxuAyxgBg1mW9moPAP7qh7YLpZWddFHEZNA6ifLvWxq3c4MNgnWwfVNLPhAyGgTQonBWm158hAJhU",
  "key40": "4C8CPuPdRTYC3PEkW9JPaeWgzeXEUQvcs3pGLgGh2kvtnMAMJP9AR54Khi46eGPdd4VLk1fZJjXBBqnQQEdYThLa",
  "key41": "4e9DLJUGuC6qDaExTZ75PfY66GWvYdy47J66Z2ciXkN5jwDfMn5QmPkfCU3isj3H2RPVSSaPUXowih35ee8eVpjP",
  "key42": "4zrU4fJeKnBxvDwJPRuuHzo6Q1WbquorJs6GJjqsrq8rsuJNGAwpiGeyUHDzx1A3aMKovvd1Dr3RJYYB7YXqXu1f",
  "key43": "qz8Xh4cpTUwvPooX7xJbMmqPoyykSGnBYYSrX1pbG5qdT5ZW4GYnnjBtd1q1cSh18SuhN4at3qjGFdH3on9miyf"
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
